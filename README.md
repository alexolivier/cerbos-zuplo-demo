# Cerbos Authorization Policy

This policy authorizes requests using [Cerbos](https://cerbos.dev) Policy Decision Point (PDP). If the request is not authorized, a 403 response will be returned.

Using this policy in conjunction with an authentication policy will automatically set subject attributes for the user in the request.

## Configuration

The configuration shows how to configure the policy in the 'policies.json' document.

```json
{
  "name": "cerbos-authz-inbound-policy",
  "policyType": "cerbos-authz-inbound",
  "handler": {
    "export": "CerbosAuthZInboundPolicy",
    "module": "$import(@zuplo/runtime)",
    "options": {
      "pdpUrl": "https://pdp.example.com",
      "defaultRole": "user",
      "roleClaimName": "role",
      "sendJsonBody": true,
      "sendAuthorizationHeader": true,
      "includePolicyOutputs": false
    }
  }
}
```

## Policy Options

The options for this policy are specified below. All properties are optional unless specifically marked as required.

- `pdpUrl` <string> (Required) - The URL of the Cerbos Policy Decision Point (PDP).
- `defaultRole` <string> - The default role to use if none is provided in the request.
- `roleClaimName` <string> - The name of the claim in the token that contains the role information - the value of this claim should be a string or an array of strings.
- `sendJsonBody` <boolean> - Indicates whether to send the JSON body of the request to Cerbos. Defaults to false.
- `sendAuthorizationHeader` <boolean> - Indicates whether to send the Authorization header to Cerbos. Defaults to false.
- `includePolicyOutputs` <boolean> - Indicates whether to include policy outputs in the response from Cerbos. Defaults to false.

## Using the Policy

This policy will send a request to the PDP for a `route` resource and the `invoke` action with the request details in the following structure:

```json
{
  "requestId": "request-id",
  "principal": {
    "id": "jwt-sub",
    "policyVersion": "default",
    "roles": ["USER"],
    "attr": {}
  },
  "resources": [
    {
      "kind": "route",
      "id": "POST:/policies-test/secret",
      "attr": {
        "policyName": "cerbos-inbound",
        "protocol": "https:",
        "search": "?hello=world&letmein",
        "host": "cerbos-demo-main-6fc6f1c.d2.zuplo.dev",
        "method": "POST",
        "pathname": "/policies-test/secret",
        "body": {
          "hello": "world",
          "letmein": true
        }
      }
    }
  ],
  "auxData": {
    "jwt": {
      "token": "xxx.yyy.zzz"
    }
  }
}
```

The `body` parameter of the resource will only be set when `sendJsonBody` is enabled on the policy options.

Additionally, if `sendAuthorizationHeader` is set, then the JWT token will be passed in the `auxData` to Cerbos which will make the contents of the token avaiable to the policy definition.

## Cerbos Resource Policy

The Cerbos Resource Policy for the PDP can inspect any attributes to make an authorizationd decision.

A simple RBAC use case could be defined as:

```yaml
---
apiVersion: api.cerbos.dev/v1
resourcePolicy:
  version: "default"
  resource: "route"
  rules:
    - actions:
        - invoke
      effect: EFFECT_ALLOW
      roles:
        - ADMIN
```

To do more path/body based authorization, then conditions inspecting the payload can be defined:

```yaml
apiVersion: api.cerbos.dev/v1
resourcePolicy:
  version: "default"
  resource: "route"
  rules:
    - name: post-user-with-param
      actions:
        - invoke
      effect: EFFECT_ALLOW
      roles:
        - USER
      condition:
        match:
          all:
            of:
              - expr: R.attr.method == "POST"
              - expr: R.attr.pathname == "/policies-test/secret"
              - expr: R.attr.body.letmein == true
```

Full documentation for policies can be found at [docs.cerbos.dev](https://docs.cerbos.dev/cerbos/latest/policies/).
