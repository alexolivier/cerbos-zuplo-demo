import {
  HttpProblems,
  ZuploContext,
  ZuploRequest,
  RequestGeneric,
} from "@zuplo/runtime";
import { HTTP as Cerbos } from "@cerbos/http";
import type { CheckResourceRequest } from "@cerbos/core";

// Define Cerbos constants
const RESOURCE_KIND = "route";
const ACTION = "invoke";

// Define types
type CerbosOptionsType = {
  pdpUrl: string;
  defaultRole?: string;
  roleClaimName?: string;
  sendAuthorizationHeader?: boolean;
  includePolicyOutputs?: boolean;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: CerbosOptionsType,
  policyName: string
) {
  const {
    defaultRole = "ANONYMOUS",
    pdpUrl,
    roleClaimName,
    sendAuthorizationHeader,
    includePolicyOutputs,
  } = options;

  // Check for authentication
  if (!request.user) {
    context.log.error(
      "Not authenticated - an authentication policy is required"
    );
    return HttpProblems.unauthorized(request, context);
  }

  const cerbos = new Cerbos(pdpUrl);
  const url = new URL(request.url);

  // Determine user roles
  const roles = determineUserRoles(request.user, roleClaimName, defaultRole);

  // Prepare Cerbos payload
  const payload: CheckResourceRequest = {
    requestId: context.requestId,
    principal: {
      id: request.user.sub,
      roles,
      attr: {},
    },
    resource: {
      kind: RESOURCE_KIND,
      id: `${request.method}:${url.pathname}`,
      attr: {
        protocol: url.protocol,
        method: request.method,
        host: url.host,
        pathname: url.pathname,
        search: url.search,
        policyName,
      },
    },
    actions: [ACTION],
  };

  // Add JWT token if required
  if (sendAuthorizationHeader) {
    addJwtToken(payload, request);
  }

  context.log.debug(`Cerbos request: ${JSON.stringify(payload)}`);

  // Check resource with Cerbos
  const result = await cerbos.checkResource(payload);

  if (!result.isAllowed(ACTION)) {
    context.log.error(
      `The user '${request.user.sub}' with roles ${roles.join(
        ", "
      )} is not authorized by Cerbos`
    );

    return includePolicyOutputs
      ? HttpProblems.forbidden(request, context, { outputs: result.outputs })
      : HttpProblems.forbidden(request, context);
  }

  return request;
}

// Helper functions
function determineUserRoles(
  user: ZuploRequest<RequestGeneric>["user"],
  roleClaimName?: string,
  defaultRole = "ANONYMOUS"
): string[] {
  if (!roleClaimName || !user) return [defaultRole];

  const roleClaim = user.data[roleClaimName];
  if (!roleClaim) return [defaultRole];

  return Array.isArray(roleClaim) ? roleClaim : [JSON.stringify(roleClaim)];
}

function addJwtToken(
  payload: CheckResourceRequest,
  request: ZuploRequest
): void {
  const tokenHeader = request.headers.get("Authorization");
  if (tokenHeader) {
    const token = tokenHeader.split(" ")[1];
    payload.auxData = { jwt: { token } };
  }
}
