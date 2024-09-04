import { HttpProblems, ZuploContext, ZuploRequest } from "@zuplo/runtime";
import { HTTP as Cerbos } from "@cerbos/http";

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

  if (!request.user) {
    context.log.error(
      "Not authenticated - an authentication policy is required"
    );
    return HttpProblems.unauthorized(request, context);
  }

  const cerbos = new Cerbos(pdpUrl);
  const url = new URL(request.url);

  let roles = [defaultRole];
  if (roleClaimName) {
    const roleClaim = request.user.data[roleClaimName];
    if (roleClaim) {
      if (Array.isArray(roleClaim)) {
        roles = roleClaim;
      } else {
        roles = [JSON.stringify(roleClaim)];
      }
    }
  }

  const payload = {
    requestId: context.requestId,
    principal: {
      id: request.user.sub,
      roles,
      attr: {},
    },
    resource: {
      kind: "route",
      id: url.pathname,
      attr: {
        protocol: url.protocol,
        method: request.method,
        host: url.host,
        pathname: url.pathname,
        search: url.search,
        policyName,
      },
    },
    actions: [request.method],
  };

  if (sendAuthorizationHeader) {
    const tokenHeader = request.headers.get("Authorization");
    if (tokenHeader) {
      const tokenString = tokenHeader.split(" ")[1];
      payload["auxData"] = {
        jwt: {
          token: tokenString,
        },
      };
    }
  }

  context.log.debug(`Cerbos request: ${JSON.stringify(payload)}`);

  const result = await cerbos.checkResource(payload);

  if (!result.isAllowed(request.method)) {
    context.log.error(
      `The user '${request.user.sub}' with roles ${roles.join(
        ", "
      )} is not authorized by Cerbos`
    );

    if (includePolicyOutputs) {
      return HttpProblems.forbidden(request, context, {
        outputs: includePolicyOutputs,
      });
    }

    return HttpProblems.forbidden(request, context);
  }

  return request;
}
