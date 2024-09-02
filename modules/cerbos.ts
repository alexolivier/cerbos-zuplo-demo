import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import Cerbos from "./third-party/@cerbos/http";

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
  const {
    defaultRole = "ANONYMOUS",
    pdpUrl,
    roleClaimName,
  } = options;

  
  if (!request.user) return new Response(`Unauthorized`, { status: 401 });
  const tokenString = request.headers.get("Authorization").split(" ")[1];
  

  const cerbos = new Cerbos.HTTP(pdpUrl);
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

  const allowed = await cerbos.isAllowed({
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
  });

  if (!allowed) {
    return new Response(`Unauthorized`, { status: 401 });
  }

  return request;
}
