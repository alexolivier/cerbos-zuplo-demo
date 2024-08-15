import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import { HTTP } from "./third-party/@cerbos/http";

type MyPolicyOptionsType = {
  myOption: any;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  const cerbos = new HTTP("");

  return request;
}
