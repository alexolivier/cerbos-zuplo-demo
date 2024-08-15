import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import Cerbos from "./third-party/@cerbos/http";
import * as jose from "jose";

type CerbosOptionsType = {
  pdpUrl: string;
  tokenHeaderName: string;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: CerbosOptionsType,
  policyName: string
) {
  const { tokenHeaderName = "Authorization", pdpUrl } = options;

  const authZHeader = request.headers.get(tokenHeaderName);
  if (!authZHeader) return new Response(`Unauthorized`, { status: 401 });

  const tokenString = authZHeader.split(" ")[1];
  const token = jose.decodeJwt(tokenString);

  const cerbos = new Cerbos.HTTP(pdpUrl);
  const url = new URL(request.url);

  const allowed = await cerbos.isAllowed({
    requestId: context.requestId,
    principal: {
      id: token.sub!,
      roles: ["user"],
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
      },
    },
    action: request.method,
    // auxData: {
    //   jwt: {
    //     token: tokenString,
    //   },
    // },
  });

  if (!allowed) {
    return new Response(`Unauthorized`, { status: 401 });
  }

  return request;
}
