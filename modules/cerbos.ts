import { HttpProblems, ZuploContext, ZuploRequest } from "@zuplo/runtime";
import { HTTP as Cerbos } from "@cerbos/http";

type CerbosOptionsType = {
  pdpUrl: string;
  defaultRole?: string;
  roleClaimName?: string;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: CerbosOptionsType,
  policyName: string
) {
  const { defaultRole = "ANONYMOUS", pdpUrl, roleClaimName } = options;
  const tokenHeader = request.headers.get("Authorization");

  if (!request.user || !tokenHeader) {
    context.log.error(
      "Not authenticated - an authentication policy is required"
    );
    return HttpProblems.unauthorized(request, context);
  }

  const cerbos = new Cerbos(pdpUrl);
  const url = new URL(request.url);

  try {
    const tokenString = tokenHeader.split(" ")[1];

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
      action: request.method,
      auxData: {
        jwt: {
          token: tokenString,
        },
      },
    };

    context.log.debug(`Cerbos request: ${JSON.stringify(payload)}`);

    const allowed = await cerbos.isAllowed(payload);

    if (!allowed) {
      context.log.error(
        `The user '${request.user.sub}' with roles ${roles.join(
          ", "
        )} is not authorized by Cerbos`
      );
      return HttpProblems.forbidden(request, context);
    }

    return request;
  } catch (e) {
    context.log.error(`Cerbos error`, e);
    return HttpProblems.forbidden(request, context);
  }
}
