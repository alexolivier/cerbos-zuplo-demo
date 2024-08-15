import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import HTTP from "./third-party/@cerbos/http";

type CerbosOptionsType = {
  pdpUrl: string;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: CerbosOptionsType,
  policyName: string
) {
  const cerbos = new HTTP.HTTP(options.pdpUrl);

  const checkPermissions = await cerbos.checkResource({
    principal: {
      id: "some-id",
      roles: ["user"],
      attr: {},
    },
    resource: {
      kind: "route",
      id: context.requestId,
      attr: {
        method: request.method,
        path: request.url,
        params: JSON.parse(JSON.stringify(request.params)),
        headers: JSON.parse(JSON.stringify(request.headers)),
      },
    },
    actions: [request.method],
  });

  if (!checkPermissions.isAllowed(request.method)) {
    return new Response(`Unauthorized`, { status: 401 });
  }

  return request;
}
