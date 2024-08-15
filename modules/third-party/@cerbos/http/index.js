var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/@cerbos/core/lib/protobuf/cerbos/effect/v1/effect.js
var require_effect = __commonJS({
  "node_modules/@cerbos/core/lib/protobuf/cerbos/effect/v1/effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Effect = exports.protobufPackage = void 0;
    exports.protobufPackage = "cerbos.effect.v1";
    var Effect;
    (function(Effect2) {
      Effect2[Effect2["EFFECT_UNSPECIFIED"] = 0] = "EFFECT_UNSPECIFIED";
      Effect2[Effect2["EFFECT_ALLOW"] = 1] = "EFFECT_ALLOW";
      Effect2[Effect2["EFFECT_DENY"] = 2] = "EFFECT_DENY";
      Effect2[Effect2["EFFECT_NO_MATCH"] = 3] = "EFFECT_NO_MATCH";
    })(Effect || (exports.Effect = Effect = {}));
  }
});

// node_modules/@cerbos/core/lib/protobuf/cerbos/engine/v1/engine.js
var require_engine = __commonJS({
  "node_modules/@cerbos/core/lib/protobuf/cerbos/engine/v1/engine.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlanResourcesFilter_Kind = exports.protobufPackage = void 0;
    exports.protobufPackage = "cerbos.engine.v1";
    var PlanResourcesFilter_Kind;
    (function(PlanResourcesFilter_Kind2) {
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_UNSPECIFIED"] = 0] = "KIND_UNSPECIFIED";
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_ALWAYS_ALLOWED"] = 1] = "KIND_ALWAYS_ALLOWED";
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_ALWAYS_DENIED"] = 2] = "KIND_ALWAYS_DENIED";
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_CONDITIONAL"] = 3] = "KIND_CONDITIONAL";
    })(PlanResourcesFilter_Kind || (exports.PlanResourcesFilter_Kind = PlanResourcesFilter_Kind = {}));
  }
});

// node_modules/@cerbos/core/lib/protobuf/cerbos/schema/v1/schema.js
var require_schema = __commonJS({
  "node_modules/@cerbos/core/lib/protobuf/cerbos/schema/v1/schema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidationError_Source = exports.protobufPackage = void 0;
    exports.protobufPackage = "cerbos.schema.v1";
    var ValidationError_Source;
    (function(ValidationError_Source2) {
      ValidationError_Source2[ValidationError_Source2["SOURCE_UNSPECIFIED"] = 0] = "SOURCE_UNSPECIFIED";
      ValidationError_Source2[ValidationError_Source2["SOURCE_PRINCIPAL"] = 1] = "SOURCE_PRINCIPAL";
      ValidationError_Source2[ValidationError_Source2["SOURCE_RESOURCE"] = 2] = "SOURCE_RESOURCE";
    })(ValidationError_Source || (exports.ValidationError_Source = ValidationError_Source = {}));
  }
});

// node_modules/@cerbos/core/lib/types/external/AccessLogEntry.js
var require_AccessLogEntry = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AccessLogEntry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/AddOrUpdatePoliciesRequest.js
var require_AddOrUpdatePoliciesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AddOrUpdatePoliciesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/AddOrUpdateSchemasRequest.js
var require_AddOrUpdateSchemasRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AddOrUpdateSchemasRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/AuditLogFilter.js
var require_AuditLogFilter = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AuditLogFilter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.auditLogFilterIsTail = exports.auditLogFilterIsSince = exports.auditLogFilterIsBetween = void 0;
    function auditLogFilterIsBetween(filter) {
      return "start" in filter;
    }
    __name(auditLogFilterIsBetween, "auditLogFilterIsBetween");
    exports.auditLogFilterIsBetween = auditLogFilterIsBetween;
    function auditLogFilterIsSince(filter) {
      return "since" in filter;
    }
    __name(auditLogFilterIsSince, "auditLogFilterIsSince");
    exports.auditLogFilterIsSince = auditLogFilterIsSince;
    function auditLogFilterIsTail(filter) {
      return "tail" in filter;
    }
    __name(auditLogFilterIsTail, "auditLogFilterIsTail");
    exports.auditLogFilterIsTail = auditLogFilterIsTail;
  }
});

// node_modules/@cerbos/core/lib/types/external/AuditLogFilterBetween.js
var require_AuditLogFilterBetween = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AuditLogFilterBetween.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/AuditLogFilterSince.js
var require_AuditLogFilterSince = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AuditLogFilterSince.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/AuditLogFilterTail.js
var require_AuditLogFilterTail = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AuditLogFilterTail.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/AuditTrail.js
var require_AuditTrail = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AuditTrail.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/AuxData.js
var require_AuxData = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/AuxData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckInput.js
var require_CheckInput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckInput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckOutput.js
var require_CheckOutput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckOutput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckOutputActionEffect.js
var require_CheckOutputActionEffect = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckOutputActionEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckResourceRequest.js
var require_CheckResourceRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckResourceRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckResourcesRequest.js
var require_CheckResourcesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckResourcesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckResourcesResponse.js
var require_CheckResourcesResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckResourcesResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckResourcesResponse = void 0;
    var CheckResourcesResponse = class {
      static {
        __name(this, "CheckResourcesResponse");
      }
      /**
       * The unique identifier for the request used in audit logs.
       *
       * @remarks
       * Requires the Cerbos policy decision point server to be at least v0.33.
       */
      cerbosCallId;
      /**
       * The identifier for tracing the request.
       */
      requestId;
      /**
       * The outcomes of the permission checks for each resource.
       */
      results;
      constructor({ cerbosCallId, requestId, results }) {
        this.cerbosCallId = cerbosCallId;
        this.requestId = requestId;
        this.results = results;
      }
      /**
       * Check if the policy decision was that all input actions should be allowed for a resource.
       *
       * @param resource - the resource search criteria.
       * @returns `undefined` if the resource is not present in the results.
       */
      allAllowed(resource) {
        return this.findResult(resource)?.allAllowed();
      }
      /**
       * List the actions that should be allowed for a resource.
       *
       * @param resource - the resource search criteria.
       * @returns `undefined` if the resource is not present in the results.
       */
      allowedActions(resource) {
        return this.findResult(resource)?.allowedActions();
      }
      /**
       * Check if the policy decision was that an action should be allowed for a resource.
       *
       * @param check - the resource search criteria and action to check.
       * @returns `undefined` if the resource or action is not present in the results.
       */
      isAllowed(check) {
        return this.findResult(check.resource)?.isAllowed(check.action);
      }
      /**
       * Find an item from {@link CheckResourcesResponse.results | results} by resource.
       *
       * @param resource - the resource search criteria.
       * @returns `undefined` if the resource is not present in the results.
       */
      findResult(resource) {
        const { kind, id, policyVersion, scope } = resource;
        return this.results.find(({ resource: resource2 }) => resource2.kind === kind && resource2.id === id && (policyVersion === void 0 || resource2.policyVersion === policyVersion) && (scope === void 0 || resource2.scope === scope));
      }
      /**
       * Unique schema validation errors for the principal or resource attributes.
       */
      get validationErrors() {
        const unique = {};
        this.results.forEach(({ validationErrors }) => {
          validationErrors.forEach((validationError) => {
            const { path, message, source } = validationError;
            unique[`${path}:${message}:${source}`] = validationError;
          });
        });
        return Object.values(unique);
      }
    };
    exports.CheckResourcesResponse = CheckResourcesResponse;
  }
});

// node_modules/@cerbos/core/lib/types/external/Effect.js
var require_Effect = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Effect = void 0;
    var Effect;
    (function(Effect2) {
      Effect2["ALLOW"] = "EFFECT_ALLOW";
      Effect2["DENY"] = "EFFECT_DENY";
    })(Effect || (exports.Effect = Effect = {}));
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckResourcesResult.js
var require_CheckResourcesResult = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckResourcesResult.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckResourcesResult = void 0;
    var Effect_1 = require_Effect();
    var CheckResourcesResult = class {
      static {
        __name(this, "CheckResourcesResult");
      }
      /**
       * The resource that was checked.
       */
      resource;
      /**
       * The policy decisions for each action.
       */
      actions;
      /**
       * Any schema validation errors for the principal or resource attributes.
       */
      validationErrors;
      /**
       * Additional information about how the policy decisions were reached.
       *
       * @remarks
       * `undefined` if {@link CheckResourcesRequest.includeMetadata | includeMetadata} was `false`.
       */
      metadata;
      /**
       * User-defined outputs from policy rule evaluations.
       *
       * @remarks
       * Requires the Cerbos policy decision point server to be at least v0.27.
       */
      outputs;
      constructor({ resource, actions, validationErrors, metadata, outputs }) {
        this.resource = resource;
        this.actions = actions;
        this.validationErrors = validationErrors;
        this.metadata = metadata;
        this.outputs = outputs;
      }
      /**
       * Check if the policy decision was that all input actions should be allowed for the resource.
       */
      allAllowed() {
        return Object.values(this.actions).every((effect) => effect === Effect_1.Effect.ALLOW);
      }
      /**
       * List the actions that should be allowed for the resource.
       */
      allowedActions() {
        return Object.keys(this.actions).filter((action) => this.actions[action] === Effect_1.Effect.ALLOW);
      }
      /**
       * Check if the policy decision was that a given action should be allowed for the resource.
       *
       * @param action - the action to check.
       * @returns `undefined` if the action is not present in the results.
       */
      isAllowed(action) {
        switch (this.actions[action]) {
          case Effect_1.Effect.ALLOW:
            return true;
          case Effect_1.Effect.DENY:
            return false;
          default:
            return void 0;
        }
      }
      /**
       * Find the value of the user-defined output for a particular policy rule.
       *
       * @param source - the identifier of the policy rule that produced the output.
       * @returns `undefined` if the result does not include an output for the source.
       *
       * @remarks
       * Requires the Cerbos policy decision point server to be at least v0.27.
       */
      output(source) {
        return this.outputs.find((output) => output.source === source)?.value;
      }
    };
    exports.CheckResourcesResult = CheckResourcesResult;
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckResourcesResultMetadata.js
var require_CheckResourcesResultMetadata = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckResourcesResultMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckResourcesResultMetadataEffect.js
var require_CheckResourcesResultMetadataEffect = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckResourcesResultMetadataEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/CheckResourcesResultResource.js
var require_CheckResourcesResultResource = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/CheckResourcesResultResource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Condition.js
var require_Condition = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Condition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DecisionLogEntry.js
var require_DecisionLogEntry = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DecisionLogEntry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DecisionLogEntryCheckResources.js
var require_DecisionLogEntryCheckResources = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DecisionLogEntryCheckResources.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DecisionLogEntryMethod.js
var require_DecisionLogEntryMethod = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DecisionLogEntryMethod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decisionLogEntryMethodIsPlanResources = exports.decisionLogEntryMethodIsCheckResources = void 0;
    function decisionLogEntryMethodIsCheckResources(method) {
      return method.name === "CheckResources";
    }
    __name(decisionLogEntryMethodIsCheckResources, "decisionLogEntryMethodIsCheckResources");
    exports.decisionLogEntryMethodIsCheckResources = decisionLogEntryMethodIsCheckResources;
    function decisionLogEntryMethodIsPlanResources(method) {
      return method.name === "PlanResources";
    }
    __name(decisionLogEntryMethodIsPlanResources, "decisionLogEntryMethodIsPlanResources");
    exports.decisionLogEntryMethodIsPlanResources = decisionLogEntryMethodIsPlanResources;
  }
});

// node_modules/@cerbos/core/lib/types/external/DecisionLogEntryPlanResources.js
var require_DecisionLogEntryPlanResources = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DecisionLogEntryPlanResources.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DecodedAuxData.js
var require_DecodedAuxData = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DecodedAuxData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DeleteSchemasRequest.js
var require_DeleteSchemasRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DeleteSchemasRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DeleteSchemasResponse.js
var require_DeleteSchemasResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DeleteSchemasResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DerivedRoleDefinition.js
var require_DerivedRoleDefinition = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DerivedRoleDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DerivedRoles.js
var require_DerivedRoles = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DerivedRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DerivedRolesBody.js
var require_DerivedRolesBody = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DerivedRolesBody.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DisablePoliciesRequest.js
var require_DisablePoliciesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DisablePoliciesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/DisablePoliciesResponse.js
var require_DisablePoliciesResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/DisablePoliciesResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/EnablePoliciesRequest.js
var require_EnablePoliciesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/EnablePoliciesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/EnablePoliciesResponse.js
var require_EnablePoliciesResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/EnablePoliciesResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ExportVariables.js
var require_ExportVariables = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ExportVariables.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ExportVariablesBody.js
var require_ExportVariablesBody = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ExportVariablesBody.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/GetPoliciesRequest.js
var require_GetPoliciesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/GetPoliciesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/GetPoliciesResponse.js
var require_GetPoliciesResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/GetPoliciesResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/GetSchemasRequest.js
var require_GetSchemasRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/GetSchemasRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/GetSchemasResponse.js
var require_GetSchemasResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/GetSchemasResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/IsAllowedRequest.js
var require_IsAllowedRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/IsAllowedRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/JWT.js
var require_JWT = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/JWT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ListAccessLogEntriesRequest.js
var require_ListAccessLogEntriesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ListAccessLogEntriesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ListDecisionLogEntriesRequest.js
var require_ListDecisionLogEntriesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ListDecisionLogEntriesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ListPoliciesRequest.js
var require_ListPoliciesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ListPoliciesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ListPoliciesResponse.js
var require_ListPoliciesResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ListPoliciesResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ListSchemasResponse.js
var require_ListSchemasResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ListSchemasResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Match.js
var require_Match = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Match.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matchIsMatchExpr = exports.matchIsMatchNone = exports.matchIsMatchAny = exports.matchIsMatchAll = void 0;
    function matchIsMatchAll(match) {
      return "all" in match;
    }
    __name(matchIsMatchAll, "matchIsMatchAll");
    exports.matchIsMatchAll = matchIsMatchAll;
    function matchIsMatchAny(match) {
      return "any" in match;
    }
    __name(matchIsMatchAny, "matchIsMatchAny");
    exports.matchIsMatchAny = matchIsMatchAny;
    function matchIsMatchNone(match) {
      return "none" in match;
    }
    __name(matchIsMatchNone, "matchIsMatchNone");
    exports.matchIsMatchNone = matchIsMatchNone;
    function matchIsMatchExpr(match) {
      return "expr" in match;
    }
    __name(matchIsMatchExpr, "matchIsMatchExpr");
    exports.matchIsMatchExpr = matchIsMatchExpr;
  }
});

// node_modules/@cerbos/core/lib/types/external/MatchAll.js
var require_MatchAll = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/MatchAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/MatchAny.js
var require_MatchAny = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/MatchAny.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Matches.js
var require_Matches = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Matches.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/MatchExpr.js
var require_MatchExpr = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/MatchExpr.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/MatchNone.js
var require_MatchNone = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/MatchNone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Output.js
var require_Output = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Output.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/OutputExpressions.js
var require_OutputExpressions = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/OutputExpressions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/OutputResult.js
var require_OutputResult = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/OutputResult.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Peer.js
var require_Peer = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Peer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanExpression.js
var require_PlanExpression = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlanExpression = void 0;
    var PlanExpression = class {
      static {
        __name(this, "PlanExpression");
      }
      operator;
      operands;
      constructor(operator, operands) {
        this.operator = operator;
        this.operands = operands;
      }
    };
    exports.PlanExpression = PlanExpression;
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanExpressionOperand.js
var require_PlanExpressionOperand = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanExpressionOperand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanExpressionValue.js
var require_PlanExpressionValue = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanExpressionValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlanExpressionValue = void 0;
    var PlanExpressionValue = class {
      static {
        __name(this, "PlanExpressionValue");
      }
      value;
      constructor(value) {
        this.value = value;
      }
    };
    exports.PlanExpressionValue = PlanExpressionValue;
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanExpressionVariable.js
var require_PlanExpressionVariable = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanExpressionVariable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlanExpressionVariable = void 0;
    var PlanExpressionVariable = class {
      static {
        __name(this, "PlanExpressionVariable");
      }
      name;
      constructor(name) {
        this.name = name;
      }
    };
    exports.PlanExpressionVariable = PlanExpressionVariable;
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanKind.js
var require_PlanKind = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanKind.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlanKind = void 0;
    var PlanKind;
    (function(PlanKind2) {
      PlanKind2["ALWAYS_ALLOWED"] = "KIND_ALWAYS_ALLOWED";
      PlanKind2["ALWAYS_DENIED"] = "KIND_ALWAYS_DENIED";
      PlanKind2["CONDITIONAL"] = "KIND_CONDITIONAL";
    })(PlanKind || (exports.PlanKind = PlanKind = {}));
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesConditionalOutput.js
var require_PlanResourcesConditionalOutput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesConditionalOutput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesConditionalResponse.js
var require_PlanResourcesConditionalResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesConditionalResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesInput.js
var require_PlanResourcesInput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesInput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesMetadata.js
var require_PlanResourcesMetadata = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesOutput.js
var require_PlanResourcesOutput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesOutput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.planResourcesOutputIsUnconditional = exports.planResourcesOutputIsConditional = void 0;
    var PlanKind_1 = require_PlanKind();
    function planResourcesOutputIsConditional(output) {
      return output.kind === PlanKind_1.PlanKind.CONDITIONAL;
    }
    __name(planResourcesOutputIsConditional, "planResourcesOutputIsConditional");
    exports.planResourcesOutputIsConditional = planResourcesOutputIsConditional;
    function planResourcesOutputIsUnconditional(output) {
      return output.kind !== PlanKind_1.PlanKind.CONDITIONAL;
    }
    __name(planResourcesOutputIsUnconditional, "planResourcesOutputIsUnconditional");
    exports.planResourcesOutputIsUnconditional = planResourcesOutputIsUnconditional;
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesOutputBase.js
var require_PlanResourcesOutputBase = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesOutputBase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesRequest.js
var require_PlanResourcesRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesResponse.js
var require_PlanResourcesResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.planResourcesResponseIsUnconditional = exports.planResourcesResponseIsConditional = void 0;
    var PlanKind_1 = require_PlanKind();
    function planResourcesResponseIsConditional(output) {
      return output.kind === PlanKind_1.PlanKind.CONDITIONAL;
    }
    __name(planResourcesResponseIsConditional, "planResourcesResponseIsConditional");
    exports.planResourcesResponseIsConditional = planResourcesResponseIsConditional;
    function planResourcesResponseIsUnconditional(output) {
      return output.kind !== PlanKind_1.PlanKind.CONDITIONAL;
    }
    __name(planResourcesResponseIsUnconditional, "planResourcesResponseIsUnconditional");
    exports.planResourcesResponseIsUnconditional = planResourcesResponseIsUnconditional;
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesResponseBase.js
var require_PlanResourcesResponseBase = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesResponseBase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesUnconditionalOutput.js
var require_PlanResourcesUnconditionalOutput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesUnconditionalOutput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PlanResourcesUnconditionalResponse.js
var require_PlanResourcesUnconditionalResponse = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PlanResourcesUnconditionalResponse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Policy.js
var require_Policy = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Policy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.policyIsResourcePolicy = exports.policyIsPrincipalPolicy = exports.policyIsExportVariables = exports.policyIsDerivedRoles = void 0;
    function policyIsDerivedRoles(policy) {
      return "derivedRoles" in policy;
    }
    __name(policyIsDerivedRoles, "policyIsDerivedRoles");
    exports.policyIsDerivedRoles = policyIsDerivedRoles;
    function policyIsExportVariables(policy) {
      return "exportVariables" in policy;
    }
    __name(policyIsExportVariables, "policyIsExportVariables");
    exports.policyIsExportVariables = policyIsExportVariables;
    function policyIsPrincipalPolicy(policy) {
      return "principalPolicy" in policy;
    }
    __name(policyIsPrincipalPolicy, "policyIsPrincipalPolicy");
    exports.policyIsPrincipalPolicy = policyIsPrincipalPolicy;
    function policyIsResourcePolicy(policy) {
      return "resourcePolicy" in policy;
    }
    __name(policyIsResourcePolicy, "policyIsResourcePolicy");
    exports.policyIsResourcePolicy = policyIsResourcePolicy;
  }
});

// node_modules/@cerbos/core/lib/types/external/PolicyBase.js
var require_PolicyBase = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PolicyBase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PolicyMetadata.js
var require_PolicyMetadata = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PolicyMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Principal.js
var require_Principal = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Principal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PrincipalPolicy.js
var require_PrincipalPolicy = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PrincipalPolicy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PrincipalPolicyBody.js
var require_PrincipalPolicyBody = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PrincipalPolicyBody.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PrincipalRule.js
var require_PrincipalRule = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PrincipalRule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/PrincipalRuleAction.js
var require_PrincipalRuleAction = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/PrincipalRuleAction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ReloadStoreRequest.js
var require_ReloadStoreRequest = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ReloadStoreRequest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Resource.js
var require_Resource = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Resource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ResourceCheck.js
var require_ResourceCheck = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ResourceCheck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ResourcePolicy.js
var require_ResourcePolicy = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ResourcePolicy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ResourcePolicyBody.js
var require_ResourcePolicyBody = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ResourcePolicyBody.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ResourceQuery.js
var require_ResourceQuery = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ResourceQuery.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ResourceRule.js
var require_ResourceRule = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ResourceRule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ResourceSearch.js
var require_ResourceSearch = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ResourceSearch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Schema.js
var require_Schema = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Schema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/_isObject.js
var require_isObject = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/_isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._isObject = void 0;
    function _isObject(value) {
      return typeof value === "object" && value !== null && !Array.isArray(value);
    }
    __name(_isObject, "_isObject");
    exports._isObject = _isObject;
  }
});

// node_modules/@cerbos/core/lib/types/external/SchemaDefinition.js
var require_SchemaDefinition = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/SchemaDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SchemaDefinition = void 0;
    var _isObject_1 = require_isObject();
    var utf8Decoder = new TextDecoder("utf-8", { fatal: true });
    var SchemaDefinition = class {
      static {
        __name(this, "SchemaDefinition");
      }
      bytes;
      constructor(bytes) {
        this.bytes = bytes;
      }
      /**
       * The parsed schema definition.
       */
      toObject() {
        const object = JSON.parse(this.toString());
        if (!(0, _isObject_1._isObject)(object)) {
          throw new Error("Schema definition is not an object");
        }
        return object;
      }
      /**
       * The JSON-serialized schema definition.
       */
      toString() {
        return utf8Decoder.decode(this.bytes);
      }
    };
    exports.SchemaDefinition = SchemaDefinition;
  }
});

// node_modules/@cerbos/core/lib/types/external/SchemaDefinitionInput.js
var require_SchemaDefinitionInput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/SchemaDefinitionInput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/SchemaInput.js
var require_SchemaInput = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/SchemaInput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/SchemaRef.js
var require_SchemaRef = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/SchemaRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/SchemaRefs.js
var require_SchemaRefs = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/SchemaRefs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ServerInfo.js
var require_ServerInfo = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ServerInfo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/SourceAttributes.js
var require_SourceAttributes = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/SourceAttributes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Status.js
var require_Status = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Status.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Status = void 0;
    var Status;
    (function(Status2) {
      Status2[Status2["CANCELLED"] = 1] = "CANCELLED";
      Status2[Status2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
      Status2[Status2["INTERNAL"] = 13] = "INTERNAL";
      Status2[Status2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
      Status2[Status2["OK"] = 0] = "OK";
      Status2[Status2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
      Status2[Status2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
      Status2[Status2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
      Status2[Status2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
      Status2[Status2["UNKNOWN"] = 2] = "UNKNOWN";
    })(Status || (exports.Status = Status = {}));
  }
});

// node_modules/@cerbos/core/lib/types/external/ValidationError.js
var require_ValidationError = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ValidationError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/ValidationErrorSource.js
var require_ValidationErrorSource = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ValidationErrorSource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidationErrorSource = void 0;
    var ValidationErrorSource;
    (function(ValidationErrorSource2) {
      ValidationErrorSource2["PRINCIPAL"] = "SOURCE_PRINCIPAL";
      ValidationErrorSource2["RESOURCE"] = "SOURCE_RESOURCE";
    })(ValidationErrorSource || (exports.ValidationErrorSource = ValidationErrorSource = {}));
  }
});

// node_modules/@cerbos/core/lib/types/external/ValidationFailedCallback.js
var require_ValidationFailedCallback = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/ValidationFailedCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Value.js
var require_Value = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/Variables.js
var require_Variables = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/Variables.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/types/external/index.js
var require_external = __commonJS({
  "node_modules/@cerbos/core/lib/types/external/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_AccessLogEntry(), exports);
    __exportStar(require_AddOrUpdatePoliciesRequest(), exports);
    __exportStar(require_AddOrUpdateSchemasRequest(), exports);
    __exportStar(require_AuditLogFilter(), exports);
    __exportStar(require_AuditLogFilterBetween(), exports);
    __exportStar(require_AuditLogFilterSince(), exports);
    __exportStar(require_AuditLogFilterTail(), exports);
    __exportStar(require_AuditTrail(), exports);
    __exportStar(require_AuxData(), exports);
    __exportStar(require_CheckInput(), exports);
    __exportStar(require_CheckOutput(), exports);
    __exportStar(require_CheckOutputActionEffect(), exports);
    __exportStar(require_CheckResourceRequest(), exports);
    __exportStar(require_CheckResourcesRequest(), exports);
    __exportStar(require_CheckResourcesResponse(), exports);
    __exportStar(require_CheckResourcesResult(), exports);
    __exportStar(require_CheckResourcesResultMetadata(), exports);
    __exportStar(require_CheckResourcesResultMetadataEffect(), exports);
    __exportStar(require_CheckResourcesResultResource(), exports);
    __exportStar(require_Condition(), exports);
    __exportStar(require_DecisionLogEntry(), exports);
    __exportStar(require_DecisionLogEntryCheckResources(), exports);
    __exportStar(require_DecisionLogEntryMethod(), exports);
    __exportStar(require_DecisionLogEntryPlanResources(), exports);
    __exportStar(require_DecodedAuxData(), exports);
    __exportStar(require_DeleteSchemasRequest(), exports);
    __exportStar(require_DeleteSchemasResponse(), exports);
    __exportStar(require_DerivedRoleDefinition(), exports);
    __exportStar(require_DerivedRoles(), exports);
    __exportStar(require_DerivedRolesBody(), exports);
    __exportStar(require_DisablePoliciesRequest(), exports);
    __exportStar(require_DisablePoliciesResponse(), exports);
    __exportStar(require_Effect(), exports);
    __exportStar(require_EnablePoliciesRequest(), exports);
    __exportStar(require_EnablePoliciesResponse(), exports);
    __exportStar(require_ExportVariables(), exports);
    __exportStar(require_ExportVariablesBody(), exports);
    __exportStar(require_GetPoliciesRequest(), exports);
    __exportStar(require_GetPoliciesResponse(), exports);
    __exportStar(require_GetSchemasRequest(), exports);
    __exportStar(require_GetSchemasResponse(), exports);
    __exportStar(require_IsAllowedRequest(), exports);
    __exportStar(require_JWT(), exports);
    __exportStar(require_ListAccessLogEntriesRequest(), exports);
    __exportStar(require_ListDecisionLogEntriesRequest(), exports);
    __exportStar(require_ListPoliciesRequest(), exports);
    __exportStar(require_ListPoliciesResponse(), exports);
    __exportStar(require_ListSchemasResponse(), exports);
    __exportStar(require_Match(), exports);
    __exportStar(require_MatchAll(), exports);
    __exportStar(require_MatchAny(), exports);
    __exportStar(require_Matches(), exports);
    __exportStar(require_MatchExpr(), exports);
    __exportStar(require_MatchNone(), exports);
    __exportStar(require_Output(), exports);
    __exportStar(require_OutputExpressions(), exports);
    __exportStar(require_OutputResult(), exports);
    __exportStar(require_Peer(), exports);
    __exportStar(require_PlanExpression(), exports);
    __exportStar(require_PlanExpressionOperand(), exports);
    __exportStar(require_PlanExpressionValue(), exports);
    __exportStar(require_PlanExpressionVariable(), exports);
    __exportStar(require_PlanKind(), exports);
    __exportStar(require_PlanResourcesConditionalOutput(), exports);
    __exportStar(require_PlanResourcesConditionalResponse(), exports);
    __exportStar(require_PlanResourcesInput(), exports);
    __exportStar(require_PlanResourcesMetadata(), exports);
    __exportStar(require_PlanResourcesOutput(), exports);
    __exportStar(require_PlanResourcesOutputBase(), exports);
    __exportStar(require_PlanResourcesRequest(), exports);
    __exportStar(require_PlanResourcesResponse(), exports);
    __exportStar(require_PlanResourcesResponseBase(), exports);
    __exportStar(require_PlanResourcesUnconditionalOutput(), exports);
    __exportStar(require_PlanResourcesUnconditionalResponse(), exports);
    __exportStar(require_Policy(), exports);
    __exportStar(require_PolicyBase(), exports);
    __exportStar(require_PolicyMetadata(), exports);
    __exportStar(require_Principal(), exports);
    __exportStar(require_PrincipalPolicy(), exports);
    __exportStar(require_PrincipalPolicyBody(), exports);
    __exportStar(require_PrincipalRule(), exports);
    __exportStar(require_PrincipalRuleAction(), exports);
    __exportStar(require_ReloadStoreRequest(), exports);
    __exportStar(require_Resource(), exports);
    __exportStar(require_ResourceCheck(), exports);
    __exportStar(require_ResourcePolicy(), exports);
    __exportStar(require_ResourcePolicyBody(), exports);
    __exportStar(require_ResourceQuery(), exports);
    __exportStar(require_ResourceRule(), exports);
    __exportStar(require_ResourceSearch(), exports);
    __exportStar(require_Schema(), exports);
    __exportStar(require_SchemaDefinition(), exports);
    __exportStar(require_SchemaDefinitionInput(), exports);
    __exportStar(require_SchemaInput(), exports);
    __exportStar(require_SchemaRef(), exports);
    __exportStar(require_SchemaRefs(), exports);
    __exportStar(require_ServerInfo(), exports);
    __exportStar(require_SourceAttributes(), exports);
    __exportStar(require_Status(), exports);
    __exportStar(require_ValidationError(), exports);
    __exportStar(require_ValidationErrorSource(), exports);
    __exportStar(require_ValidationFailedCallback(), exports);
    __exportStar(require_Value(), exports);
    __exportStar(require_Variables(), exports);
    __exportStar(require_isObject(), exports);
  }
});

// node_modules/@cerbos/core/lib/convert/fromProtobuf.js
var require_fromProtobuf = __commonJS({
  "node_modules/@cerbos/core/lib/convert/fromProtobuf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.planResourcesResponseFromProtobuf = exports.listSchemasResponseFromProtobuf = exports.listPoliciesResponseFromProtobuf = exports.getSchemasResponseFromProtobuf = exports._policyFromProtobuf = exports.getPoliciesResponseFromProtobuf = exports.enablePoliciesResponseFromProtobuf = exports.disablePoliciesResponseFromProtobuf = exports.deleteSchemasResponseFromProtobuf = exports.checkResourcesResponseFromProtobuf = exports.decisionLogEntryFromProtobuf = exports.accessLogEntryFromProtobuf = void 0;
    var effect_1 = require_effect();
    var engine_1 = require_engine();
    var schema_1 = require_schema();
    var external_1 = require_external();
    function accessLogEntryFromProtobuf({ entry }) {
      requireOneOf("ListAuditLogEntriesResponse.entry", entry, "accessLogEntry");
      const { callId, timestamp, peer, metadata, method, statusCode } = entry.accessLogEntry;
      requireField("AccessLogEntry.timestamp", timestamp);
      requireField("AccessLogEntry.peer", peer);
      return {
        callId,
        timestamp,
        peer: peerFromProtobuf(peer),
        metadata: auditLogMetadataFromProtobuf(metadata),
        method,
        statusCode
      };
    }
    __name(accessLogEntryFromProtobuf, "accessLogEntryFromProtobuf");
    exports.accessLogEntryFromProtobuf = accessLogEntryFromProtobuf;
    function decisionLogEntryFromProtobuf({ entry }) {
      requireOneOf("ListAuditLogEntriesResponse.entry", entry, "decisionLogEntry");
      const { callId, timestamp, peer, metadata, auditTrail, method } = entry.decisionLogEntry;
      requireField("DecisionLogEntry.timestamp", timestamp);
      requireField("DecisionLogEntry.peer", peer);
      return {
        callId,
        timestamp,
        peer: peerFromProtobuf(peer),
        metadata: auditLogMetadataFromProtobuf(metadata),
        auditTrail: auditTrailFromProtobuf(auditTrail),
        method: decisionLogEntryMethodFromProtobuf(method)
      };
    }
    __name(decisionLogEntryFromProtobuf, "decisionLogEntryFromProtobuf");
    exports.decisionLogEntryFromProtobuf = decisionLogEntryFromProtobuf;
    function peerFromProtobuf({ address, authInfo, userAgent, forwardedFor }) {
      return {
        address,
        authInfo,
        userAgent,
        forwardedFor
      };
    }
    __name(peerFromProtobuf, "peerFromProtobuf");
    function auditLogMetadataFromProtobuf(metadata) {
      return Object.fromEntries(Object.entries(metadata).map(([key, { values }]) => [key, values]));
    }
    __name(auditLogMetadataFromProtobuf, "auditLogMetadataFromProtobuf");
    function auditTrailFromProtobuf({ effectivePolicies } = { effectivePolicies: {} }) {
      return {
        effectivePolicies: Object.fromEntries(Object.entries(effectivePolicies).map(([policyId, sourceAttributes]) => [
          policyId,
          sourceAttributesFromProtobuf(sourceAttributes)
        ]))
      };
    }
    __name(auditTrailFromProtobuf, "auditTrailFromProtobuf");
    function decisionLogEntryMethodFromProtobuf(method) {
      return transformOneOf("DecisionLogEntry.method", method, {
        checkResources: /* @__PURE__ */ __name(({ checkResources }) => decisionLogEntryCheckResourcesFromProtobuf(checkResources), "checkResources"),
        planResources: /* @__PURE__ */ __name(({ planResources }) => decisionLogEntryPlanResourcesFromProtobuf(planResources), "planResources")
      });
    }
    __name(decisionLogEntryMethodFromProtobuf, "decisionLogEntryMethodFromProtobuf");
    function decisionLogEntryCheckResourcesFromProtobuf({ inputs, outputs, error }) {
      return {
        name: "CheckResources",
        inputs: inputs.map(checkInputFromProtobuf),
        outputs: outputs.map(checkOutputFromProtobuf),
        error: error || void 0
      };
    }
    __name(decisionLogEntryCheckResourcesFromProtobuf, "decisionLogEntryCheckResourcesFromProtobuf");
    function checkInputFromProtobuf({ requestId, principal, resource, actions, auxData }) {
      requireField("CheckInput.principal", principal);
      requireField("CheckInput.resource", resource);
      return {
        requestId,
        principal: principalFromProtobuf(principal),
        resource: resourceFromProtobuf(resource),
        actions,
        auxData: auxData && decodedAuxDataFromProtobuf(auxData)
      };
    }
    __name(checkInputFromProtobuf, "checkInputFromProtobuf");
    function principalFromProtobuf({ id, roles, attr, policyVersion, scope }) {
      return {
        id,
        roles,
        attr,
        policyVersion,
        scope
      };
    }
    __name(principalFromProtobuf, "principalFromProtobuf");
    function resourceFromProtobuf({ kind, id, attr, policyVersion, scope }) {
      return {
        kind,
        id,
        attr,
        policyVersion,
        scope
      };
    }
    __name(resourceFromProtobuf, "resourceFromProtobuf");
    function decodedAuxDataFromProtobuf({ jwt }) {
      return { jwt };
    }
    __name(decodedAuxDataFromProtobuf, "decodedAuxDataFromProtobuf");
    function checkOutputFromProtobuf({ requestId, resourceId, actions, effectiveDerivedRoles, validationErrors, outputs }) {
      return {
        requestId,
        resourceId,
        actions: Object.fromEntries(Object.entries(actions).map(([action, effect]) => [
          action,
          checkOutputActionEffectFromProtobuf(effect)
        ])),
        effectiveDerivedRoles,
        validationErrors: validationErrors.map(validationErrorFromProtobuf),
        outputs: outputs.map(outputResultFromProtobuf)
      };
    }
    __name(checkOutputFromProtobuf, "checkOutputFromProtobuf");
    function checkOutputActionEffectFromProtobuf({ effect, policy, scope }) {
      return {
        effect: effectFromProtobuf(effect),
        policy,
        scope
      };
    }
    __name(checkOutputActionEffectFromProtobuf, "checkOutputActionEffectFromProtobuf");
    function decisionLogEntryPlanResourcesFromProtobuf({ input, output, error }) {
      requireField("DecisionLogEntry.PlanResources.input", input);
      requireField("DecisionLogEntry.PlanResources.output", output);
      return {
        name: "PlanResources",
        input: planResourcesInputFromProtobuf(input),
        output: planResourcesOutputFromProtobuf(output),
        error: error || void 0
      };
    }
    __name(decisionLogEntryPlanResourcesFromProtobuf, "decisionLogEntryPlanResourcesFromProtobuf");
    function planResourcesInputFromProtobuf({ requestId, principal, resource, action, auxData }) {
      requireField("PlanResourcesInput.principal", principal);
      requireField("PlanResourcesInput.resource", resource);
      return {
        requestId,
        principal: principalFromProtobuf(principal),
        resource: resourceQueryFromProtobuf(resource),
        action,
        auxData: auxData && decodedAuxDataFromProtobuf(auxData)
      };
    }
    __name(planResourcesInputFromProtobuf, "planResourcesInputFromProtobuf");
    function resourceQueryFromProtobuf({ kind, attr, policyVersion, scope }) {
      return {
        kind,
        attr,
        policyVersion,
        scope
      };
    }
    __name(resourceQueryFromProtobuf, "resourceQueryFromProtobuf");
    function planResourcesOutputFromProtobuf({ requestId, filter, filterDebug, action, policyVersion, scope, validationErrors }) {
      const base = {
        requestId,
        action,
        policyVersion,
        scope,
        validationErrors: validationErrors.map(validationErrorFromProtobuf)
      };
      requireField("PlanResourcesOutput.filter", filter);
      const kind = planKindFromProtobuf(filter.kind);
      if (kind !== external_1.PlanKind.CONDITIONAL) {
        return { ...base, kind };
      }
      requireField("PlanResourcesFilter.condition", filter.condition);
      return {
        ...base,
        kind,
        condition: planOperandFromProtobuf(filter.condition),
        conditionString: filterDebug
      };
    }
    __name(planResourcesOutputFromProtobuf, "planResourcesOutputFromProtobuf");
    function checkResourcesResponseFromProtobuf({ cerbosCallId, requestId, results }) {
      return new external_1.CheckResourcesResponse({
        cerbosCallId,
        requestId,
        results: results.map(checkResourcesResultFromProtobuf)
      });
    }
    __name(checkResourcesResponseFromProtobuf, "checkResourcesResponseFromProtobuf");
    exports.checkResourcesResponseFromProtobuf = checkResourcesResponseFromProtobuf;
    function checkResourcesResultFromProtobuf({ resource, actions, validationErrors, meta, outputs }) {
      requireField("CheckResourcesResponse.ResultEntry", resource);
      return new external_1.CheckResourcesResult({
        resource,
        actions: actionsFromProtobuf(actions),
        validationErrors: validationErrors.map(validationErrorFromProtobuf),
        metadata: meta,
        outputs: outputs.map(outputResultFromProtobuf)
      });
    }
    __name(checkResourcesResultFromProtobuf, "checkResourcesResultFromProtobuf");
    function actionsFromProtobuf(actions) {
      return Object.fromEntries(Object.entries(actions).map(([action, effect]) => [
        action,
        effectFromProtobuf(effect)
      ]));
    }
    __name(actionsFromProtobuf, "actionsFromProtobuf");
    function effectFromProtobuf(effect) {
      return effect === effect_1.Effect.EFFECT_ALLOW ? external_1.Effect.ALLOW : external_1.Effect.DENY;
    }
    __name(effectFromProtobuf, "effectFromProtobuf");
    function validationErrorFromProtobuf({ path, message, source }) {
      return {
        path,
        message,
        source: validationErrorSourceFromProtobuf(source)
      };
    }
    __name(validationErrorFromProtobuf, "validationErrorFromProtobuf");
    function validationErrorSourceFromProtobuf(source) {
      return translateEnum("ValidationError.Source", schema_1.ValidationError_Source, source, {
        [schema_1.ValidationError_Source.SOURCE_UNSPECIFIED]: unexpected,
        [schema_1.ValidationError_Source.SOURCE_PRINCIPAL]: external_1.ValidationErrorSource.PRINCIPAL,
        [schema_1.ValidationError_Source.SOURCE_RESOURCE]: external_1.ValidationErrorSource.RESOURCE
      });
    }
    __name(validationErrorSourceFromProtobuf, "validationErrorSourceFromProtobuf");
    function outputResultFromProtobuf({ src, val }) {
      return {
        source: src,
        value: val
      };
    }
    __name(outputResultFromProtobuf, "outputResultFromProtobuf");
    function deleteSchemasResponseFromProtobuf({ deletedSchemas }) {
      return { deletedSchemas };
    }
    __name(deleteSchemasResponseFromProtobuf, "deleteSchemasResponseFromProtobuf");
    exports.deleteSchemasResponseFromProtobuf = deleteSchemasResponseFromProtobuf;
    function disablePoliciesResponseFromProtobuf({ disabledPolicies }) {
      return { disabledPolicies };
    }
    __name(disablePoliciesResponseFromProtobuf, "disablePoliciesResponseFromProtobuf");
    exports.disablePoliciesResponseFromProtobuf = disablePoliciesResponseFromProtobuf;
    function enablePoliciesResponseFromProtobuf({ enabledPolicies }) {
      return { enabledPolicies };
    }
    __name(enablePoliciesResponseFromProtobuf, "enablePoliciesResponseFromProtobuf");
    exports.enablePoliciesResponseFromProtobuf = enablePoliciesResponseFromProtobuf;
    function getPoliciesResponseFromProtobuf({ policies }) {
      return { policies: policies.map(_policyFromProtobuf) };
    }
    __name(getPoliciesResponseFromProtobuf, "getPoliciesResponseFromProtobuf");
    exports.getPoliciesResponseFromProtobuf = getPoliciesResponseFromProtobuf;
    function _policyFromProtobuf({ apiVersion, description, disabled, metadata, variables, policyType }) {
      return {
        apiVersion,
        description,
        disabled,
        metadata: metadata && policyMetadataFromProtobuf(metadata),
        variables,
        ...policyTypeFromProtobuf(policyType)
      };
    }
    __name(_policyFromProtobuf, "_policyFromProtobuf");
    exports._policyFromProtobuf = _policyFromProtobuf;
    function policyMetadataFromProtobuf({ annotations, hash, sourceAttributes, sourceFile, storeIdentifer, storeIdentifier }) {
      return {
        annotations,
        hash,
        sourceAttributes: sourceAttributesFromProtobuf(sourceAttributes),
        sourceFile,
        storeIdentifer: storeIdentifier || storeIdentifer,
        storeIdentifier: storeIdentifier || storeIdentifer
      };
    }
    __name(policyMetadataFromProtobuf, "policyMetadataFromProtobuf");
    function sourceAttributesFromProtobuf({ attributes } = { attributes: {} }) {
      return attributes;
    }
    __name(sourceAttributesFromProtobuf, "sourceAttributesFromProtobuf");
    function policyTypeFromProtobuf(policyType) {
      return transformOneOf("Policy.policyType", policyType, {
        derivedRoles: /* @__PURE__ */ __name(({ derivedRoles }) => derivedRolesFromProtobuf(derivedRoles), "derivedRoles"),
        exportVariables: /* @__PURE__ */ __name(({ exportVariables }) => exportVariablesFromProtobuf(exportVariables), "exportVariables"),
        principalPolicy: /* @__PURE__ */ __name(({ principalPolicy }) => principalPolicyFromProtobuf(principalPolicy), "principalPolicy"),
        resourcePolicy: /* @__PURE__ */ __name(({ resourcePolicy }) => resourcePolicyFromProtobuf(resourcePolicy), "resourcePolicy")
      });
    }
    __name(policyTypeFromProtobuf, "policyTypeFromProtobuf");
    function derivedRolesFromProtobuf({ name, definitions, variables }) {
      return {
        derivedRoles: {
          name,
          definitions: definitions.map(derivedRoleDefinitionFromProtobuf),
          variables: variables && variablesFromProtobuf(variables)
        }
      };
    }
    __name(derivedRolesFromProtobuf, "derivedRolesFromProtobuf");
    function derivedRoleDefinitionFromProtobuf({ name, parentRoles, condition }) {
      return {
        name,
        parentRoles,
        condition: condition && conditionFromProtobuf(condition)
      };
    }
    __name(derivedRoleDefinitionFromProtobuf, "derivedRoleDefinitionFromProtobuf");
    function conditionFromProtobuf({ condition }) {
      requireOneOf("Condition.condition", condition, "match");
      return { match: matchFromProtobuf(condition.match) };
    }
    __name(conditionFromProtobuf, "conditionFromProtobuf");
    function matchFromProtobuf({ op }) {
      return transformOneOf("Match.op", op, {
        all: /* @__PURE__ */ __name(({ all }) => ({ all: matchesFromProtobuf(all) }), "all"),
        any: /* @__PURE__ */ __name(({ any }) => ({ any: matchesFromProtobuf(any) }), "any"),
        none: /* @__PURE__ */ __name(({ none }) => ({ none: matchesFromProtobuf(none) }), "none"),
        expr: /* @__PURE__ */ __name(({ expr }) => ({ expr }), "expr")
      });
    }
    __name(matchFromProtobuf, "matchFromProtobuf");
    function matchesFromProtobuf({ of }) {
      return { of: of.map(matchFromProtobuf) };
    }
    __name(matchesFromProtobuf, "matchesFromProtobuf");
    function variablesFromProtobuf({ import: imports, local }) {
      return {
        import: imports,
        local
      };
    }
    __name(variablesFromProtobuf, "variablesFromProtobuf");
    function exportVariablesFromProtobuf({ name, definitions }) {
      return {
        exportVariables: {
          name,
          definitions
        }
      };
    }
    __name(exportVariablesFromProtobuf, "exportVariablesFromProtobuf");
    function principalPolicyFromProtobuf({ principal, version, rules, scope, variables }) {
      return {
        principalPolicy: {
          principal,
          version,
          rules: rules.map(principalRuleFromProtobuf),
          scope,
          variables: variables && variablesFromProtobuf(variables)
        }
      };
    }
    __name(principalPolicyFromProtobuf, "principalPolicyFromProtobuf");
    function principalRuleFromProtobuf({ resource, actions }) {
      return {
        resource,
        actions: actions.map(principalRuleActionFromProtobuf)
      };
    }
    __name(principalRuleFromProtobuf, "principalRuleFromProtobuf");
    function principalRuleActionFromProtobuf({ action, effect, condition, name, output }) {
      return {
        action,
        effect: effectFromProtobuf(effect),
        condition: condition && conditionFromProtobuf(condition),
        name,
        output: output && outputFromProtobuf(output)
      };
    }
    __name(principalRuleActionFromProtobuf, "principalRuleActionFromProtobuf");
    function outputFromProtobuf({ expr, when }) {
      const output = {};
      if (expr) {
        output.expr = expr;
      }
      if (when) {
        output.when = when;
      }
      return output;
    }
    __name(outputFromProtobuf, "outputFromProtobuf");
    function resourcePolicyFromProtobuf({ resource, version, importDerivedRoles, rules, schemas, scope, variables }) {
      return {
        resourcePolicy: {
          resource,
          version,
          importDerivedRoles,
          rules: rules.map(resourceRuleFromProtobuf),
          schemas: schemas && schemaRefsFromProtobuf(schemas),
          scope,
          variables: variables && variablesFromProtobuf(variables)
        }
      };
    }
    __name(resourcePolicyFromProtobuf, "resourcePolicyFromProtobuf");
    function resourceRuleFromProtobuf({ actions, effect, derivedRoles, roles, condition, name, output }) {
      return {
        actions,
        effect: effectFromProtobuf(effect),
        derivedRoles,
        roles,
        condition: condition && conditionFromProtobuf(condition),
        name,
        output: output && outputFromProtobuf(output)
      };
    }
    __name(resourceRuleFromProtobuf, "resourceRuleFromProtobuf");
    function schemaRefsFromProtobuf({ principalSchema, resourceSchema }) {
      return {
        principalSchema: principalSchema && schemaRefFromProtobuf(principalSchema),
        resourceSchema: resourceSchema && schemaRefFromProtobuf(resourceSchema)
      };
    }
    __name(schemaRefsFromProtobuf, "schemaRefsFromProtobuf");
    function schemaRefFromProtobuf({ ref, ignoreWhen }) {
      return {
        ref,
        ignoreWhen: ignoreWhen && { actions: ignoreWhen.actions }
      };
    }
    __name(schemaRefFromProtobuf, "schemaRefFromProtobuf");
    function getSchemasResponseFromProtobuf({ schemas }) {
      return { schemas: schemas.map(schemaFromProtobuf) };
    }
    __name(getSchemasResponseFromProtobuf, "getSchemasResponseFromProtobuf");
    exports.getSchemasResponseFromProtobuf = getSchemasResponseFromProtobuf;
    function schemaFromProtobuf({ id, definition }) {
      return {
        id,
        definition: new external_1.SchemaDefinition(definition)
      };
    }
    __name(schemaFromProtobuf, "schemaFromProtobuf");
    function listPoliciesResponseFromProtobuf({ policyIds }) {
      return { ids: policyIds };
    }
    __name(listPoliciesResponseFromProtobuf, "listPoliciesResponseFromProtobuf");
    exports.listPoliciesResponseFromProtobuf = listPoliciesResponseFromProtobuf;
    function listSchemasResponseFromProtobuf({ schemaIds }) {
      return { ids: schemaIds };
    }
    __name(listSchemasResponseFromProtobuf, "listSchemasResponseFromProtobuf");
    exports.listSchemasResponseFromProtobuf = listSchemasResponseFromProtobuf;
    function planResourcesResponseFromProtobuf({ cerbosCallId, requestId, filter, validationErrors, meta }) {
      const base = {
        cerbosCallId,
        requestId,
        validationErrors: validationErrors.map(validationErrorFromProtobuf),
        metadata: meta && planResourcesMetadataFromProtobuf(meta)
      };
      requireField("PlanResourcesResponse.filter", filter);
      const kind = planKindFromProtobuf(filter.kind);
      if (kind !== external_1.PlanKind.CONDITIONAL) {
        return { ...base, kind };
      }
      requireField("PlanResourcesFilter.condition", filter.condition);
      return {
        ...base,
        kind,
        condition: planOperandFromProtobuf(filter.condition)
      };
    }
    __name(planResourcesResponseFromProtobuf, "planResourcesResponseFromProtobuf");
    exports.planResourcesResponseFromProtobuf = planResourcesResponseFromProtobuf;
    function planKindFromProtobuf(kind) {
      return translateEnum("PlanResourcesFilter.Kind", engine_1.PlanResourcesFilter_Kind, kind, {
        [engine_1.PlanResourcesFilter_Kind.KIND_UNSPECIFIED]: unexpected,
        [engine_1.PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED]: external_1.PlanKind.ALWAYS_ALLOWED,
        [engine_1.PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED]: external_1.PlanKind.ALWAYS_DENIED,
        [engine_1.PlanResourcesFilter_Kind.KIND_CONDITIONAL]: external_1.PlanKind.CONDITIONAL
      });
    }
    __name(planKindFromProtobuf, "planKindFromProtobuf");
    function planOperandFromProtobuf({ node }) {
      return transformOneOf("PlanResourcesFilter.Expression.Operand.node", node, {
        expression: /* @__PURE__ */ __name(({ expression }) => new external_1.PlanExpression(expression.operator, expression.operands.map(planOperandFromProtobuf)), "expression"),
        value: /* @__PURE__ */ __name(({ value }) => new external_1.PlanExpressionValue(value ?? null), "value"),
        variable: /* @__PURE__ */ __name(({ variable }) => new external_1.PlanExpressionVariable(variable), "variable")
      });
    }
    __name(planOperandFromProtobuf, "planOperandFromProtobuf");
    function planResourcesMetadataFromProtobuf({ filterDebug, matchedScope }) {
      return {
        conditionString: filterDebug,
        matchedScope
      };
    }
    __name(planResourcesMetadataFromProtobuf, "planResourcesMetadataFromProtobuf");
    var unexpected = Symbol("unexpected");
    function isUnexpected(value) {
      return value === unexpected || value === void 0;
    }
    __name(isUnexpected, "isUnexpected");
    function translateEnum(descriptor, source, value, translate) {
      const result = translate[value];
      if (isUnexpected(result)) {
        const wanted = Object.entries(source).filter(([, value2]) => typeof value2 === "number" && !isUnexpected(translate[value2])).map(([key, value2]) => `${key}:${value2}`).join("|");
        const got = source[value] ? `${source[value]}:${value}` : value;
        throw new Error(`Unexpected ${descriptor}: wanted ${wanted}, got ${got}`);
      }
      return result;
    }
    __name(translateEnum, "translateEnum");
    function transformOneOf(descriptor, oneOf, transforms) {
      requireField(descriptor, oneOf);
      const transform = transforms[oneOf.$case];
      if (isUnexpected(transform)) {
        throw new Error(`Unexpected ${descriptor}: wanted ${Object.keys(transforms).join("|")}, got ${oneOf.$case}`);
      }
      return transform(oneOf);
    }
    __name(transformOneOf, "transformOneOf");
    function requireOneOf(descriptor, oneOf, $case) {
      requireField(descriptor, oneOf);
      if (oneOf.$case !== $case) {
        throw new Error(`Unexpected ${descriptor}: wanted ${$case}, got ${oneOf.$case}`);
      }
    }
    __name(requireOneOf, "requireOneOf");
    function requireField(descriptor, value) {
      if (value === void 0) {
        throw new Error(`Missing ${descriptor}`);
      }
    }
    __name(requireField, "requireField");
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/max.js
var require_max = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/max.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = exports.default = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/nil.js
var require_nil = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = exports.default = "00000000-0000-0000-0000-000000000000";
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/regex.js
var require_regex = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/validate.js
var require_validate = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function validate(uuid) {
      return typeof uuid === "string" && _regex.default.test(uuid);
    }
    __name(validate, "validate");
    var _default = exports.default = validate;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/parse.js
var require_parse = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function parse(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      var v;
      var arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    __name(parse, "parse");
    var _default = exports.default = parse;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/stringify.js
var require_stringify = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    exports.unsafeStringify = unsafeStringify;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var byteToHex = [];
    for (i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    var i;
    function unsafeStringify(arr, offset = 0) {
      return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    }
    __name(unsafeStringify, "unsafeStringify");
    function stringify(arr, offset = 0) {
      var uuid = unsafeStringify(arr, offset);
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    }
    __name(stringify, "stringify");
    var _default = exports.default = stringify;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/rng.js
var require_rng = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      if (!getRandomValues) {
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return getRandomValues(rnds8);
    }
    __name(rng, "rng");
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v1.js
var require_v1 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || new Array(16);
      options = options || {};
      var node = options.node;
      var clockseq = options.clockseq;
      if (!options._v6) {
        if (!node) {
          node = _nodeId;
        }
        if (clockseq == null) {
          clockseq = _clockseq;
        }
      }
      if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = [seedBytes[0], seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          if (!_nodeId && !options._v6) {
            node[0] |= 1;
            _nodeId = node;
          }
        }
        if (clockseq == null) {
          clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          if (_clockseq === void 0 && !options._v6) {
            _clockseq = clockseq;
          }
        }
      }
      var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      var tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.unsafeStringify)(b);
    }
    __name(v1, "v1");
    var _default = exports.default = v1;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v1ToV6.js
var require_v1ToV6 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v1ToV6.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = v1ToV6;
    var _parse = _interopRequireDefault(require_parse());
    var _stringify = require_stringify();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function v1ToV6(uuid) {
      var v1Bytes = typeof uuid === "string" ? (0, _parse.default)(uuid) : uuid;
      var v6Bytes = _v1ToV6(v1Bytes);
      return typeof uuid === "string" ? (0, _stringify.unsafeStringify)(v6Bytes) : v6Bytes;
    }
    __name(v1ToV6, "v1ToV6");
    function _v1ToV6(v1Bytes, randomize = false) {
      return Uint8Array.of((v1Bytes[6] & 15) << 4 | v1Bytes[7] >> 4 & 15, (v1Bytes[7] & 15) << 4 | (v1Bytes[4] & 240) >> 4, (v1Bytes[4] & 15) << 4 | (v1Bytes[5] & 240) >> 4, (v1Bytes[5] & 15) << 4 | (v1Bytes[0] & 240) >> 4, (v1Bytes[0] & 15) << 4 | (v1Bytes[1] & 240) >> 4, (v1Bytes[1] & 15) << 4 | (v1Bytes[2] & 240) >> 4, 96 | v1Bytes[2] & 15, v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
    }
    __name(_v1ToV6, "_v1ToV6");
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v35.js
var require_v35 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URL = exports.DNS = void 0;
    exports.default = v35;
    var _stringify = require_stringify();
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      var bytes = [];
      for (var i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    __name(stringToBytes, "stringToBytes");
    var DNS = exports.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    var URL = exports.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function v35(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        var bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (var i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(bytes);
      }
      __name(generateUUID, "generateUUID");
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }
    __name(v35, "v35");
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/md5.js
var require_md5 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function md5(bytes) {
      if (typeof bytes === "string") {
        var msg = unescape(encodeURIComponent(bytes));
        bytes = new Uint8Array(msg.length);
        for (var i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }
      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    __name(md5, "md5");
    function md5ToHexEncodedArray(input) {
      var output = [];
      var length32 = input.length * 32;
      var hexTab = "0123456789abcdef";
      for (var i = 0; i < length32; i += 8) {
        var x = input[i >> 5] >>> i % 32 & 255;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex);
      }
      return output;
    }
    __name(md5ToHexEncodedArray, "md5ToHexEncodedArray");
    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    __name(getOutputLength, "getOutputLength");
    function wordsToMd5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[getOutputLength(len) - 1] = len;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }
    __name(wordsToMd5, "wordsToMd5");
    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }
      var length8 = input.length * 8;
      var output = new Uint32Array(getOutputLength(length8));
      for (var i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 255) << i % 32;
      }
      return output;
    }
    __name(bytesToWords, "bytesToWords");
    function safeAdd(x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    __name(safeAdd, "safeAdd");
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    __name(bitRotateLeft, "bitRotateLeft");
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    __name(md5cmn, "md5cmn");
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    __name(md5ff, "md5ff");
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    __name(md5gg, "md5gg");
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    __name(md5hh, "md5hh");
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    __name(md5ii, "md5ii");
    var _default = exports.default = md5;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v3.js
var require_v3 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = exports.default = v3;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/native.js
var require_native = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var _default = exports.default = {
      randomUUID
    };
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v4.js
var require_v4 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _native = _interopRequireDefault(require_native());
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function v4(options, buf, offset) {
      if (_native.default.randomUUID && !buf && !options) {
        return _native.default.randomUUID();
      }
      options = options || {};
      var rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (var i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.unsafeStringify)(rnds);
    }
    __name(v4, "v4");
    var _default = exports.default = v4;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/sha1.js
var require_sha1 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    }
    __name(f, "f");
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    __name(ROTL, "ROTL");
    function sha1(bytes) {
      var K = [1518500249, 1859775393, 2400959708, 3395469782];
      var H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof bytes === "string") {
        var msg = unescape(encodeURIComponent(bytes));
        bytes = [];
        for (var i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        bytes = Array.prototype.slice.call(bytes);
      }
      bytes.push(128);
      var l = bytes.length / 4 + 2;
      var N = Math.ceil(l / 16);
      var M = new Array(N);
      for (var _i = 0; _i < N; ++_i) {
        var arr = new Uint32Array(16);
        for (var j = 0; j < 16; ++j) {
          arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        }
        M[_i] = arr;
      }
      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
      for (var _i2 = 0; _i2 < N; ++_i2) {
        var W = new Uint32Array(80);
        for (var t = 0; t < 16; ++t) {
          W[t] = M[_i2][t];
        }
        for (var _t = 16; _t < 80; ++_t) {
          W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        }
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        for (var _t2 = 0; _t2 < 80; ++_t2) {
          var s = Math.floor(_t2 / 20);
          var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
    }
    __name(sha1, "sha1");
    var _default = exports.default = sha1;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v5.js
var require_v5 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = exports.default = v5;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v6.js
var require_v6 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v6.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = v6;
    var _stringify = require_stringify();
    var _v = _interopRequireDefault(require_v1());
    var _v1ToV = _interopRequireDefault(require_v1ToV6());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    __name(ownKeys, "ownKeys");
    function _objectSpread(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          _defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    __name(_objectSpread, "_objectSpread");
    function _defineProperty(e, r, t) {
      return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
    }
    __name(_defineProperty, "_defineProperty");
    function _toPropertyKey(t) {
      var i = _toPrimitive(t, "string");
      return "symbol" == typeof i ? i : i + "";
    }
    __name(_toPropertyKey, "_toPropertyKey");
    function _toPrimitive(t, r) {
      if ("object" != typeof t || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    __name(_toPrimitive, "_toPrimitive");
    function v6(options = {}, buf, offset = 0) {
      var bytes = (0, _v.default)(_objectSpread(_objectSpread({}, options), {}, {
        _v6: true
      }), new Uint8Array(16));
      bytes = (0, _v1ToV.default)(bytes);
      if (buf) {
        for (var i = 0; i < 16; i++) {
          buf[offset + i] = bytes[i];
        }
        return buf;
      }
      return (0, _stringify.unsafeStringify)(bytes);
    }
    __name(v6, "v6");
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v6ToV1.js
var require_v6ToV1 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v6ToV1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = v6ToV1;
    var _parse = _interopRequireDefault(require_parse());
    var _stringify = require_stringify();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function v6ToV1(uuid) {
      var v6Bytes = typeof uuid === "string" ? (0, _parse.default)(uuid) : uuid;
      var v1Bytes = _v6ToV1(v6Bytes);
      return typeof uuid === "string" ? (0, _stringify.unsafeStringify)(v1Bytes) : v1Bytes;
    }
    __name(v6ToV1, "v6ToV1");
    function _v6ToV1(v6Bytes) {
      return Uint8Array.of((v6Bytes[3] & 15) << 4 | v6Bytes[4] >> 4 & 15, (v6Bytes[4] & 15) << 4 | (v6Bytes[5] & 240) >> 4, (v6Bytes[5] & 15) << 4 | v6Bytes[6] & 15, v6Bytes[7], (v6Bytes[1] & 15) << 4 | (v6Bytes[2] & 240) >> 4, (v6Bytes[2] & 15) << 4 | (v6Bytes[3] & 240) >> 4, 16 | (v6Bytes[0] & 240) >> 4, (v6Bytes[0] & 15) << 4 | (v6Bytes[1] & 240) >> 4, v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
    }
    __name(_v6ToV1, "_v6ToV1");
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v7.js
var require_v7 = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/v7.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var _seqLow = null;
    var _seqHigh = null;
    var _msecs = 0;
    function v7(options, buf, offset) {
      options = options || {};
      var i = buf && offset || 0;
      var b = buf || new Uint8Array(16);
      var rnds = options.random || (options.rng || _rng.default)();
      var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      var seq = options.seq !== void 0 ? options.seq : null;
      var seqHigh = _seqHigh;
      var seqLow = _seqLow;
      if (msecs > _msecs && options.msecs === void 0) {
        _msecs = msecs;
        if (seq !== null) {
          seqHigh = null;
          seqLow = null;
        }
      }
      if (seq !== null) {
        if (seq > 2147483647) {
          seq = 2147483647;
        }
        seqHigh = seq >>> 19 & 4095;
        seqLow = seq & 524287;
      }
      if (seqHigh === null || seqLow === null) {
        seqHigh = rnds[6] & 127;
        seqHigh = seqHigh << 8 | rnds[7];
        seqLow = rnds[8] & 63;
        seqLow = seqLow << 8 | rnds[9];
        seqLow = seqLow << 5 | rnds[10] >>> 3;
      }
      if (msecs + 1e4 > _msecs && seq === null) {
        if (++seqLow > 524287) {
          seqLow = 0;
          if (++seqHigh > 4095) {
            seqHigh = 0;
            _msecs++;
          }
        }
      } else {
        _msecs = msecs;
      }
      _seqHigh = seqHigh;
      _seqLow = seqLow;
      b[i++] = _msecs / 1099511627776 & 255;
      b[i++] = _msecs / 4294967296 & 255;
      b[i++] = _msecs / 16777216 & 255;
      b[i++] = _msecs / 65536 & 255;
      b[i++] = _msecs / 256 & 255;
      b[i++] = _msecs & 255;
      b[i++] = seqHigh >>> 4 & 15 | 112;
      b[i++] = seqHigh & 255;
      b[i++] = seqLow >>> 13 & 63 | 128;
      b[i++] = seqLow >>> 5 & 255;
      b[i++] = seqLow << 3 & 255 | rnds[10] & 7;
      b[i++] = rnds[11];
      b[i++] = rnds[12];
      b[i++] = rnds[13];
      b[i++] = rnds[14];
      b[i++] = rnds[15];
      return buf || (0, _stringify.unsafeStringify)(b);
    }
    __name(v7, "v7");
    var _default = exports.default = v7;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/version.js
var require_version = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.slice(14, 15), 16);
    }
    __name(version, "version");
    var _default = exports.default = version;
  }
});

// node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/index.js
var require_commonjs_browser = __commonJS({
  "node_modules/@cerbos/core/node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "MAX", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _max.default;
      }, "get")
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _nil.default;
      }, "get")
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _parse.default;
      }, "get")
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _stringify.default;
      }, "get")
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v.default;
      }, "get")
    });
    Object.defineProperty(exports, "v1ToV6", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v1ToV.default;
      }, "get")
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v2.default;
      }, "get")
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v3.default;
      }, "get")
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v4.default;
      }, "get")
    });
    Object.defineProperty(exports, "v6", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v5.default;
      }, "get")
    });
    Object.defineProperty(exports, "v6ToV1", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v6ToV.default;
      }, "get")
    });
    Object.defineProperty(exports, "v7", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _v6.default;
      }, "get")
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _validate.default;
      }, "get")
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function get() {
        return _version.default;
      }, "get")
    });
    var _max = _interopRequireDefault(require_max());
    var _nil = _interopRequireDefault(require_nil());
    var _parse = _interopRequireDefault(require_parse());
    var _stringify = _interopRequireDefault(require_stringify());
    var _v = _interopRequireDefault(require_v1());
    var _v1ToV = _interopRequireDefault(require_v1ToV6());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _v5 = _interopRequireDefault(require_v6());
    var _v6ToV = _interopRequireDefault(require_v6ToV1());
    var _v6 = _interopRequireDefault(require_v7());
    var _validate = _interopRequireDefault(require_validate());
    var _version = _interopRequireDefault(require_version());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
  }
});

// node_modules/@cerbos/core/lib/protobuf/cerbos/request/v1/request.js
var require_request = __commonJS({
  "node_modules/@cerbos/core/lib/protobuf/cerbos/request/v1/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListAuditLogEntriesRequest_Kind = exports.protobufPackage = void 0;
    exports.protobufPackage = "cerbos.request.v1";
    var ListAuditLogEntriesRequest_Kind;
    (function(ListAuditLogEntriesRequest_Kind2) {
      ListAuditLogEntriesRequest_Kind2[ListAuditLogEntriesRequest_Kind2["KIND_UNSPECIFIED"] = 0] = "KIND_UNSPECIFIED";
      ListAuditLogEntriesRequest_Kind2[ListAuditLogEntriesRequest_Kind2["KIND_ACCESS"] = 1] = "KIND_ACCESS";
      ListAuditLogEntriesRequest_Kind2[ListAuditLogEntriesRequest_Kind2["KIND_DECISION"] = 2] = "KIND_DECISION";
    })(ListAuditLogEntriesRequest_Kind || (exports.ListAuditLogEntriesRequest_Kind = ListAuditLogEntriesRequest_Kind = {}));
  }
});

// node_modules/@cerbos/core/lib/convert/toProtobuf.js
var require_toProtobuf = __commonJS({
  "node_modules/@cerbos/core/lib/convert/toProtobuf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.planResourcesRequestToProtobuf = exports.listPoliciesRequestToProtobuf = exports.listDecisionLogEntriesRequestToProtobuf = exports.listAccessLogEntriesRequestToProtobuf = exports.getSchemasRequestToProtobuf = exports.getPoliciesRequestToProtobuf = exports.enablePoliciesRequestToProtobuf = exports.disablePoliciesRequestToProtobuf = exports.deleteSchemasRequestToProtobuf = exports.checkResourcesRequestToProtobuf = exports.addOrUpdateSchemasRequestToProtobuf = exports.addOrUpdatePoliciesRequestToProtobuf = void 0;
    var uuid_1 = require_commonjs_browser();
    var effect_1 = require_effect();
    var request_1 = require_request();
    var external_1 = require_external();
    var encoder = new TextEncoder();
    function addOrUpdatePoliciesRequestToProtobuf({ policies }) {
      return {
        policies: policies.map(policyToProtobuf)
      };
    }
    __name(addOrUpdatePoliciesRequestToProtobuf, "addOrUpdatePoliciesRequestToProtobuf");
    exports.addOrUpdatePoliciesRequestToProtobuf = addOrUpdatePoliciesRequestToProtobuf;
    function policyToProtobuf(policy) {
      const { apiVersion = "api.cerbos.dev/v1", description = "", disabled = false, variables = {} } = policy;
      return {
        apiVersion,
        description,
        disabled,
        jsonSchema: "",
        metadata: void 0,
        policyType: policyTypeToProtobuf(policy),
        variables
      };
    }
    __name(policyToProtobuf, "policyToProtobuf");
    function policyTypeToProtobuf(policy) {
      if ((0, external_1.policyIsDerivedRoles)(policy)) {
        return {
          $case: "derivedRoles",
          derivedRoles: derivedRolesToProtobuf(policy)
        };
      }
      if ((0, external_1.policyIsExportVariables)(policy)) {
        return {
          $case: "exportVariables",
          exportVariables: exportVariablesToProtobuf(policy)
        };
      }
      if ((0, external_1.policyIsPrincipalPolicy)(policy)) {
        return {
          $case: "principalPolicy",
          principalPolicy: principalPolicyToProtobuf(policy)
        };
      }
      if ((0, external_1.policyIsResourcePolicy)(policy)) {
        return {
          $case: "resourcePolicy",
          resourcePolicy: resourcePolicyToProtobuf(policy)
        };
      }
      throw new Error(`Unknown policy type: ${JSON.stringify(policy, null, 2)}`);
    }
    __name(policyTypeToProtobuf, "policyTypeToProtobuf");
    function derivedRolesToProtobuf({ derivedRoles: { name, definitions, variables } }) {
      return {
        name,
        definitions: definitions.map(derivedRoleDefinitionToProtobuf),
        variables: variables && variablesToProtobuf(variables)
      };
    }
    __name(derivedRolesToProtobuf, "derivedRolesToProtobuf");
    function derivedRoleDefinitionToProtobuf({ name, parentRoles, condition }) {
      return {
        name,
        parentRoles,
        condition: condition && conditionToProtobuf(condition)
      };
    }
    __name(derivedRoleDefinitionToProtobuf, "derivedRoleDefinitionToProtobuf");
    function conditionToProtobuf({ match }) {
      return {
        condition: {
          $case: "match",
          match: matchToProtobuf(match)
        }
      };
    }
    __name(conditionToProtobuf, "conditionToProtobuf");
    function matchToProtobuf(match) {
      if ((0, external_1.matchIsMatchAll)(match)) {
        return {
          op: {
            $case: "all",
            all: matchesToProtobuf(match.all)
          }
        };
      }
      if ((0, external_1.matchIsMatchAny)(match)) {
        return {
          op: {
            $case: "any",
            any: matchesToProtobuf(match.any)
          }
        };
      }
      if ((0, external_1.matchIsMatchNone)(match)) {
        return {
          op: {
            $case: "none",
            none: matchesToProtobuf(match.none)
          }
        };
      }
      if ((0, external_1.matchIsMatchExpr)(match)) {
        return {
          op: {
            $case: "expr",
            expr: match.expr
          }
        };
      }
      throw new Error(`Unknown match type: ${JSON.stringify(match, null, 2)}`);
    }
    __name(matchToProtobuf, "matchToProtobuf");
    function matchesToProtobuf({ of }) {
      return {
        of: of.map(matchToProtobuf)
      };
    }
    __name(matchesToProtobuf, "matchesToProtobuf");
    function variablesToProtobuf({ import: imports = [], local = {} }) {
      return {
        import: imports,
        local
      };
    }
    __name(variablesToProtobuf, "variablesToProtobuf");
    function exportVariablesToProtobuf({ exportVariables: { name, definitions } }) {
      return {
        name,
        definitions
      };
    }
    __name(exportVariablesToProtobuf, "exportVariablesToProtobuf");
    function principalPolicyToProtobuf({ principalPolicy: { principal, version, rules, scope = "", variables } }) {
      return {
        principal,
        version,
        rules: rules.map(principalRuleToProtobuf),
        scope,
        variables: variables && variablesToProtobuf(variables)
      };
    }
    __name(principalPolicyToProtobuf, "principalPolicyToProtobuf");
    function principalRuleToProtobuf({ resource, actions }) {
      return {
        resource,
        actions: actions.map(principalRuleActionToProtobuf)
      };
    }
    __name(principalRuleToProtobuf, "principalRuleToProtobuf");
    function principalRuleActionToProtobuf({ action, effect, condition, name = "", output }) {
      return {
        action,
        effect: effectToProtobuf(effect),
        condition: condition && conditionToProtobuf(condition),
        name,
        output: output && outputToProtobuf(output)
      };
    }
    __name(principalRuleActionToProtobuf, "principalRuleActionToProtobuf");
    function effectToProtobuf(effect) {
      return effect === external_1.Effect.ALLOW ? effect_1.Effect.EFFECT_ALLOW : effect_1.Effect.EFFECT_DENY;
    }
    __name(effectToProtobuf, "effectToProtobuf");
    function outputToProtobuf({ expr = "", when }) {
      return {
        expr,
        when: when && outputExpressionsToProtobuf(when)
      };
    }
    __name(outputToProtobuf, "outputToProtobuf");
    function outputExpressionsToProtobuf({ ruleActivated = "", conditionNotMet = "" }) {
      return {
        ruleActivated,
        conditionNotMet
      };
    }
    __name(outputExpressionsToProtobuf, "outputExpressionsToProtobuf");
    function resourcePolicyToProtobuf({ resourcePolicy: { resource, version, importDerivedRoles = [], rules, scope = "", schemas, variables } }) {
      return {
        resource,
        version,
        importDerivedRoles,
        rules: rules.map(resourceRuleToProtobuf),
        scope,
        schemas: schemas && policySchemasToProtobuf(schemas),
        variables: variables && variablesToProtobuf(variables)
      };
    }
    __name(resourcePolicyToProtobuf, "resourcePolicyToProtobuf");
    function resourceRuleToProtobuf({ actions, effect, derivedRoles = [], roles = [], condition, name = "", output }) {
      return {
        actions,
        effect: effectToProtobuf(effect),
        derivedRoles,
        roles,
        condition: condition && conditionToProtobuf(condition),
        name,
        output: output && outputToProtobuf(output)
      };
    }
    __name(resourceRuleToProtobuf, "resourceRuleToProtobuf");
    function policySchemasToProtobuf({ principalSchema, resourceSchema }) {
      return {
        principalSchema: principalSchema && policySchemaToProtobuf(principalSchema),
        resourceSchema: resourceSchema && policySchemaToProtobuf(resourceSchema)
      };
    }
    __name(policySchemasToProtobuf, "policySchemasToProtobuf");
    function policySchemaToProtobuf({ ref, ignoreWhen }) {
      return {
        ref,
        ignoreWhen
      };
    }
    __name(policySchemaToProtobuf, "policySchemaToProtobuf");
    function addOrUpdateSchemasRequestToProtobuf({ schemas }) {
      return {
        schemas: schemas.map(schemaToProtobuf)
      };
    }
    __name(addOrUpdateSchemasRequestToProtobuf, "addOrUpdateSchemasRequestToProtobuf");
    exports.addOrUpdateSchemasRequestToProtobuf = addOrUpdateSchemasRequestToProtobuf;
    function schemaToProtobuf({ id, definition }) {
      return {
        id,
        definition: schemaDefinitionToProtobuf(definition)
      };
    }
    __name(schemaToProtobuf, "schemaToProtobuf");
    function schemaDefinitionToProtobuf(definition) {
      if (definition instanceof Uint8Array) {
        return definition;
      }
      if (definition instanceof external_1.SchemaDefinition) {
        return definition.bytes;
      }
      if (typeof definition === "string") {
        return encoder.encode(definition);
      }
      return encoder.encode(JSON.stringify(definition));
    }
    __name(schemaDefinitionToProtobuf, "schemaDefinitionToProtobuf");
    function checkResourcesRequestToProtobuf({ principal, resources, auxData, includeMetadata = false, requestId = (0, uuid_1.v4)() }) {
      return {
        principal: principalToProtobuf(principal),
        resources: resources.map(resourceCheckToProtobuf),
        auxData: auxData && auxDataToProtobuf(auxData),
        includeMeta: includeMetadata,
        requestId
      };
    }
    __name(checkResourcesRequestToProtobuf, "checkResourcesRequestToProtobuf");
    exports.checkResourcesRequestToProtobuf = checkResourcesRequestToProtobuf;
    function principalToProtobuf({ id, roles, attr = {}, attributes = {}, policyVersion = "", scope = "" }) {
      return {
        id,
        roles,
        attr: {
          ...attributes,
          ...attr
        },
        policyVersion,
        scope
      };
    }
    __name(principalToProtobuf, "principalToProtobuf");
    function resourceCheckToProtobuf({ resource, actions }) {
      return {
        resource: resourceToProtobuf(resource),
        actions
      };
    }
    __name(resourceCheckToProtobuf, "resourceCheckToProtobuf");
    function resourceToProtobuf({ kind, id, attr = {}, attributes = {}, policyVersion = "", scope = "" }) {
      return {
        kind,
        id,
        attr: {
          ...attributes,
          ...attr
        },
        policyVersion,
        scope
      };
    }
    __name(resourceToProtobuf, "resourceToProtobuf");
    function auxDataToProtobuf({ jwt }) {
      if (!jwt) {
        return void 0;
      }
      return {
        jwt: jwtToProtobuf(jwt)
      };
    }
    __name(auxDataToProtobuf, "auxDataToProtobuf");
    function jwtToProtobuf({ token, keySetId = "" }) {
      return {
        token,
        keySetId
      };
    }
    __name(jwtToProtobuf, "jwtToProtobuf");
    function deleteSchemasRequestToProtobuf({ ids }) {
      return {
        id: ids
      };
    }
    __name(deleteSchemasRequestToProtobuf, "deleteSchemasRequestToProtobuf");
    exports.deleteSchemasRequestToProtobuf = deleteSchemasRequestToProtobuf;
    function disablePoliciesRequestToProtobuf({ ids }) {
      return {
        id: ids
      };
    }
    __name(disablePoliciesRequestToProtobuf, "disablePoliciesRequestToProtobuf");
    exports.disablePoliciesRequestToProtobuf = disablePoliciesRequestToProtobuf;
    function enablePoliciesRequestToProtobuf({ ids }) {
      return {
        id: ids
      };
    }
    __name(enablePoliciesRequestToProtobuf, "enablePoliciesRequestToProtobuf");
    exports.enablePoliciesRequestToProtobuf = enablePoliciesRequestToProtobuf;
    function getPoliciesRequestToProtobuf({ ids }) {
      return {
        id: ids
      };
    }
    __name(getPoliciesRequestToProtobuf, "getPoliciesRequestToProtobuf");
    exports.getPoliciesRequestToProtobuf = getPoliciesRequestToProtobuf;
    function getSchemasRequestToProtobuf({ ids }) {
      return {
        id: ids
      };
    }
    __name(getSchemasRequestToProtobuf, "getSchemasRequestToProtobuf");
    exports.getSchemasRequestToProtobuf = getSchemasRequestToProtobuf;
    function listAccessLogEntriesRequestToProtobuf({ filter }) {
      return {
        kind: request_1.ListAuditLogEntriesRequest_Kind.KIND_ACCESS,
        filter: auditLogFilterToProtobuf(filter)
      };
    }
    __name(listAccessLogEntriesRequestToProtobuf, "listAccessLogEntriesRequestToProtobuf");
    exports.listAccessLogEntriesRequestToProtobuf = listAccessLogEntriesRequestToProtobuf;
    function listDecisionLogEntriesRequestToProtobuf({ filter }) {
      return {
        kind: request_1.ListAuditLogEntriesRequest_Kind.KIND_DECISION,
        filter: auditLogFilterToProtobuf(filter)
      };
    }
    __name(listDecisionLogEntriesRequestToProtobuf, "listDecisionLogEntriesRequestToProtobuf");
    exports.listDecisionLogEntriesRequestToProtobuf = listDecisionLogEntriesRequestToProtobuf;
    function auditLogFilterToProtobuf(filter) {
      if ((0, external_1.auditLogFilterIsBetween)(filter)) {
        return {
          $case: "between",
          between: { start: filter.start, end: filter.end }
        };
      }
      if ((0, external_1.auditLogFilterIsSince)(filter)) {
        return {
          $case: "since",
          since: durationToProtobuf(filter.since)
        };
      }
      if ((0, external_1.auditLogFilterIsTail)(filter)) {
        return {
          $case: "tail",
          tail: filter.tail
        };
      }
      return void 0;
    }
    __name(auditLogFilterToProtobuf, "auditLogFilterToProtobuf");
    function durationToProtobuf(duration) {
      const [seconds, nanos] = duration.toFixed(9).split(".", 2);
      return {
        seconds,
        nanos: parseInt(nanos, 10)
      };
    }
    __name(durationToProtobuf, "durationToProtobuf");
    function listPoliciesRequestToProtobuf({ includeDisabled = false, nameRegexp = "", scopeRegexp = "", versionRegexp = "" }) {
      return {
        includeDisabled,
        nameRegexp,
        scopeRegexp,
        versionRegexp
      };
    }
    __name(listPoliciesRequestToProtobuf, "listPoliciesRequestToProtobuf");
    exports.listPoliciesRequestToProtobuf = listPoliciesRequestToProtobuf;
    function planResourcesRequestToProtobuf({ principal, resource, action, auxData, includeMetadata = false, requestId = (0, uuid_1.v4)() }) {
      return {
        principal: principalToProtobuf(principal),
        resource: resourceQueryToProtobuf(resource),
        action,
        auxData: auxData && auxDataToProtobuf(auxData),
        includeMeta: includeMetadata,
        requestId
      };
    }
    __name(planResourcesRequestToProtobuf, "planResourcesRequestToProtobuf");
    exports.planResourcesRequestToProtobuf = planResourcesRequestToProtobuf;
    function resourceQueryToProtobuf({ kind, attr = {}, attributes = {}, policyVersion = "", scope = "" }) {
      return {
        kind,
        attr: {
          ...attributes,
          ...attr
        },
        policyVersion,
        scope
      };
    }
    __name(resourceQueryToProtobuf, "resourceQueryToProtobuf");
  }
});

// node_modules/@cerbos/core/lib/errors.js
var require_errors = __commonJS({
  "node_modules/@cerbos/core/lib/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._setErrorNameAndStack = exports.ValidationFailed = exports.NotOK = void 0;
    var external_1 = require_external();
    var NotOK = class _NotOK extends Error {
      static {
        __name(this, "NotOK");
      }
      code;
      details;
      /**
       * Parse a JSON-serialized unsuccessful response.
       */
      static fromJSON(text) {
        try {
          const error = JSON.parse(text);
          return new _NotOK(code(error), details(error));
        } catch (_) {
          return new _NotOK(external_1.Status.UNKNOWN, text);
        }
      }
      constructor(code2, details2, options) {
        super(`gRPC error ${code2} (${external_1.Status[code2]}): ${details2}`, options);
        this.code = code2;
        this.details = details2;
        _setErrorNameAndStack(this);
      }
    };
    exports.NotOK = NotOK;
    function code(error) {
      if (has(error, "code") && typeof error.code === "number" && error.code in external_1.Status) {
        return error.code || external_1.Status.UNKNOWN;
      }
      throw new Error("Error does not include expected code");
    }
    __name(code, "code");
    function details(error) {
      if (has(error, "message") && typeof error.message === "string") {
        return error.message;
      }
      throw new Error("Error does not include expected details");
    }
    __name(details, "details");
    function has(object, property) {
      return !!object && Object.prototype.hasOwnProperty.call(object, property);
    }
    __name(has, "has");
    var ValidationFailed = class extends Error {
      static {
        __name(this, "ValidationFailed");
      }
      validationErrors;
      constructor(validationErrors) {
        super("Input failed schema validation");
        this.validationErrors = validationErrors;
        _setErrorNameAndStack(this);
      }
    };
    exports.ValidationFailed = ValidationFailed;
    function _setErrorNameAndStack(error) {
      error.name = error.constructor.name;
      if ("captureStackTrace" in Error) {
        Error.captureStackTrace(error, error.constructor);
      }
    }
    __name(_setErrorNameAndStack, "_setErrorNameAndStack");
    exports._setErrorNameAndStack = _setErrorNameAndStack;
  }
});

// node_modules/@cerbos/core/lib/client.js
var require_client = __commonJS({
  "node_modules/@cerbos/core/lib/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientWithPrincipal = exports.Client = exports._removeInstrumenter = exports._addInstrumenter = exports._AbortHandler = void 0;
    var fromProtobuf_1 = require_fromProtobuf();
    var toProtobuf_1 = require_toProtobuf();
    var errors_1 = require_errors();
    var request_1 = require_request();
    var external_1 = require_external();
    var _AbortHandler = class {
      static {
        __name(this, "_AbortHandler");
      }
      signal;
      constructor(signal) {
        this.signal = signal;
      }
      throwIfAborted() {
        if (this.signal?.aborted) {
          throw this.error();
        }
      }
      onAbort(listener) {
        this.signal?.addEventListener("abort", () => {
          listener(this.error());
        }, { once: true });
      }
      error() {
        const reason = this.signal?.reason;
        return new errors_1.NotOK(external_1.Status.CANCELLED, reason instanceof Error ? `Aborted: ${reason.message}` : "Aborted", { cause: reason });
      }
    };
    exports._AbortHandler = _AbortHandler;
    var instrumenters = /* @__PURE__ */ new Set();
    function _addInstrumenter(instrumenter) {
      instrumenters.add(instrumenter);
    }
    __name(_addInstrumenter, "_addInstrumenter");
    exports._addInstrumenter = _addInstrumenter;
    function _removeInstrumenter(instrumenter) {
      instrumenters.delete(instrumenter);
    }
    __name(_removeInstrumenter, "_removeInstrumenter");
    exports._removeInstrumenter = _removeInstrumenter;
    var Client = class {
      static {
        __name(this, "Client");
      }
      transport;
      options;
      /** @internal */
      constructor(transport, options) {
        this.transport = transport;
        this.options = options;
        for (const instrumenter of instrumenters) {
          this.transport = instrumenter(this.transport);
        }
      }
      /**
       * Add policies, or update existing policies.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * @example
       * Create a policy in code:
       *
       * ```typescript
       * await cerbos.addOrUpdatePolicies({
       *   policies: [{
       *     resourcePolicy: {
       *       resource: "document",
       *       version: "1",
       *       rules: [{
       *         actions: ["*"],
       *         effect: Effect.ALLOW,
       *         roles: ["ADMIN"],
       *       }],
       *     },
       *   }],
       * });
       * ```
       *
       * @example
       * Load a policy from a YAML or JSON file with {@link @cerbos/files#readPolicy}:
       *
       * ```typescript
       * import { readPolicy } from "@cerbos/files";
       *
       * await cerbos.addOrUpdatePolicies({
       *   policies: [await readPolicy("path/to/policy.yaml")],
       * });
       * ```
       *
       * @example
       * Load policies and schemas from a directory with {@link @cerbos/files#readDirectory}:
       *
       * ```typescript
       * import { readDirectory } from "@cerbos/files";
       *
       * const { policies, schemas } = await readDirectory("path/to/directory");
       *
       * await cerbos.addOrUpdateSchemas({ schemas });
       * await cerbos.addOrUpdatePolicies({ policies });
       * ```
       */
      async addOrUpdatePolicies(request, options) {
        await this.unary("admin", "addOrUpdatePolicy", (0, toProtobuf_1.addOrUpdatePoliciesRequestToProtobuf)(request), options);
      }
      /**
       * Add schemas to be used for validating principal or resource attributes, or update existing schemas.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * @example
       * Create a schema in code:
       *
       * ```typescript
       *
       * await cerbos.addOrUpdateSchemas({
       *   schemas: [{
       *     id: "document.json",
       *     definition: {
       *       type: "object",
       *       properties: {
       *         owner: { type: "string" }
       *       }
       *     },
       *   }],
       * });
       * ```
       *
       * @example
       * Load a schema from a JSON file with {@link @cerbos/files#readSchema}:
       *
       * ```typescript
       * import { readSchema } from "@cerbos/files";
       *
       * await cerbos.addOrUpdateSchemas({
       *   schemas: [await readSchema("_schemas/path/to/schema.json")],
       * });
       * ```
       *
       * @example
       * Load policies and schemas from a directory with {@link @cerbos/files#readDirectory}:
       *
       * ```typescript
       * import { readDirectory } from "@cerbos/files";
       *
       * const { policies, schemas } = await readDirectory("path/to/directory");
       *
       * await cerbos.addOrUpdateSchemas({ schemas });
       * await cerbos.addOrUpdatePolicies({ policies });
       * ```
       */
      async addOrUpdateSchemas(request, options) {
        await this.unary("admin", "addOrUpdateSchema", (0, toProtobuf_1.addOrUpdateSchemasRequestToProtobuf)(request), options);
      }
      /**
       * Check a principal's permissions on a resource.
       *
       * @example
       * ```typescript
       * const decision = await cerbos.checkResource({
       *   principal: {
       *     id: "user@example.com",
       *     roles: ["USER"],
       *     attr: { tier: "PREMIUM" },
       *   },
       *   resource: {
       *     kind: "document",
       *     id: "1",
       *     attr: { owner: "user@example.com" },
       *   },
       *   actions: ["view", "edit"],
       * });
       *
       * decision.isAllowed("view"); // => true
       * ```
       */
      async checkResource(request, options) {
        const { resource, actions, ...rest } = request;
        const response = await this.checkResources({ resources: [{ resource, actions }], ...rest }, options);
        const result = response.findResult(resource);
        if (!result) {
          throw new Error("No decision returned for resource");
        }
        return result;
      }
      /**
       * Check a principal's permissions on a set of resources.
       *
       * @example
       * ```typescript
       * const decision = await cerbos.checkResources({
       *   principal: {
       *     id: "user@example.com",
       *     roles: ["USER"],
       *     attr: { tier: "PREMIUM" },
       *   },
       *   resources: [
       *     {
       *       resource: {
       *         kind: "document",
       *         id: "1",
       *         attr: { owner: "user@example.com" },
       *       },
       *       actions: ["view", "edit"],
       *     },
       *     {
       *       resource: {
       *         kind: "image",
       *         id: "1",
       *         attr: { owner: "user@example.com" },
       *       },
       *       actions: ["delete"],
       *     },
       *   ],
       * });
       *
       * decision.isAllowed({
       *   resource: { kind: "document", id: "1" },
       *   action: "view",
       * }); // => true
       * ```
       */
      async checkResources(request, options) {
        const response = (0, fromProtobuf_1.checkResourcesResponseFromProtobuf)(await this.unary("cerbos", "checkResources", (0, toProtobuf_1.checkResourcesRequestToProtobuf)(request), options));
        this.handleValidationErrors(response);
        return response;
      }
      /**
       * Delete a schema.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point (PDP) server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * The way this method handles failure depends on the version of the connected PDP server.
       * When the server is running Cerbos v0.25 or later, it returns `true` if the schema was deleted and `false` if the schema was not found.
       * With earlier versions of Cerbos, it throws an error if the schema was not found, and returns successfully if the schema was deleted; the returned value should be ignored.
       *
       * @example
       * ```typescript
       * const deleted = await cerbos.deleteSchema("document.json");
       * ```
       */
      async deleteSchema(id, options) {
        const { deletedSchemas } = await this.deleteSchemas({ ids: [id] }, options);
        return deletedSchemas === 1;
      }
      /**
       * Delete multiple schemas.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point (PDP) server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * The way this method handles failure depends on the version of the connected PDP server.
       * When the server is running Cerbos v0.25 or later, it returns a {@link DeleteSchemasResponse} that includes the number of schemas that were deleted.
       * With earlier versions of Cerbos, it throws an error if no schemas were found, and returns successfully if at least one schema was deleted; the returned value should be ignored.
       *
       * @example
       * ```typescript
       * const result = await cerbos.deleteSchemas({
       *   ids: ["document.json", "image.json"],
       * });
       * ```
       */
      async deleteSchemas(request, options) {
        return (0, fromProtobuf_1.deleteSchemasResponseFromProtobuf)(await this.unary("admin", "deleteSchema", (0, toProtobuf_1.deleteSchemasRequestToProtobuf)(request), options));
      }
      /**
       * Disable multiple policies.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point server to be at least v0.25 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * @example
       * ```typescript
       * const result = await cerbos.disablePolicies({
       *   ids: ["resource.document.v1", "resource.image.v1"],
       * });
       * ```
       */
      async disablePolicies(request, options) {
        return (0, fromProtobuf_1.disablePoliciesResponseFromProtobuf)(await this.unary("admin", "disablePolicy", (0, toProtobuf_1.disablePoliciesRequestToProtobuf)(request), options));
      }
      /**
       * Disable a policy.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point server to be at least v0.25 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * @example
       * ```typescript
       * const disabled = await cerbos.disablePolicy("resource.document.v1");
       * ```
       */
      async disablePolicy(id, options) {
        const { disabledPolicies } = await this.disablePolicies({ ids: [id] }, options);
        return disabledPolicies === 1;
      }
      /**
       * Enable multiple policies.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point server to be at least v0.26 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * @example
       * ```typescript
       * const result = await cerbos.enablePolicies({
       *   ids: ["resource.document.v1", "resource.image.v1"],
       * });
       * ```
       */
      async enablePolicies(request, options) {
        return (0, fromProtobuf_1.enablePoliciesResponseFromProtobuf)(await this.unary("admin", "enablePolicy", (0, toProtobuf_1.enablePoliciesRequestToProtobuf)(request), options));
      }
      /**
       * Enable a policy.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point server to be at least v0.26 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
       *
       * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * @example
       * ```typescript
       * const enabled = await cerbos.enablePolicy("resource.document.v1");
       * ```
       */
      async enablePolicy(id, options) {
        const { enabledPolicies } = await this.enablePolicies({ ids: [id] }, options);
        return enabledPolicies === 1;
      }
      /**
       * Fetch an access log entry by call ID from the policy decision point server's audit log.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}; and
       *
       * - the Cerbos policy decision point server to be configured with
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#_local_backend | local audit logging backend}, and
       *
       *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | access logs} enabled.
       *
       * @example
       * ```typescript
       * const entry = await cerbos.getAccessLogEntry("01F9VS1N77S83MTSBBX44GYSJ6");
       * ```
       */
      async getAccessLogEntry(callId, options) {
        for await (const entry of this.serverStream("admin", "listAuditLogEntries", {
          kind: request_1.ListAuditLogEntriesRequest_Kind.KIND_ACCESS,
          filter: { $case: "lookup", lookup: callId }
        }, options)) {
          return (0, fromProtobuf_1.accessLogEntryFromProtobuf)(entry);
        }
        return void 0;
      }
      /**
       * Fetch a decision log entry by call ID from the policy decision point server's audit log.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}; and
       *
       * - the Cerbos policy decision point server to be at least v0.18 and configured with
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#_local_backend | local audit logging backend}, and
       *
       *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | decision logs} enabled.
       *
       * @example
       * ```typescript
       * const entry = await cerbos.getDecisionLogEntry("01F9VS1N77S83MTSBBX44GYSJ6");
       * ```
       */
      async getDecisionLogEntry(callId, options) {
        for await (const entry of this.serverStream("admin", "listAuditLogEntries", {
          kind: request_1.ListAuditLogEntriesRequest_Kind.KIND_DECISION,
          filter: { $case: "lookup", lookup: callId }
        }, options)) {
          return (0, fromProtobuf_1.decisionLogEntryFromProtobuf)(entry);
        }
        return void 0;
      }
      /**
       * Fetch multiple policies by ID.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}, and
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
       *
       * @example
       * ```typescript
       * const policies = await cerbos.getPolicies({
       *   ids: ["resource.document.v1", "resource.image.v1"],
       * });
       * ```
       */
      async getPolicies(request, options) {
        return (0, fromProtobuf_1.getPoliciesResponseFromProtobuf)(await this.unary("admin", "getPolicy", (0, toProtobuf_1.getPoliciesRequestToProtobuf)(request), options));
      }
      /**
       * Fetch a policy by ID.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}, and
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
       *
       * @example
       * ```typescript
       * const policy = await cerbos.getPolicy("resource.document.v1");
       * ```
       */
      async getPolicy(id, options) {
        const { policies: [policy] } = await this.getPolicies({ ids: [id] }, options);
        return policy;
      }
      /**
       * Fetch a schema by ID.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}, and
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
       *
       * @example
       * ```typescript
       * const schema = await cerbos.getSchema("document.json");
       * ```
       */
      async getSchema(id, options) {
        const { schemas: [schema] } = await this.getSchemas({ ids: [id] }, options);
        return schema;
      }
      /**
       * Fetch multiple schemas by ID.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}, and
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
       *
       * @example
       * ```typescript
       * const schemas = await cerbos.getSchemas({
       *   ids: ["document.json", "image.json"],
       * });
       * ```
       */
      async getSchemas(request, options) {
        return (0, fromProtobuf_1.getSchemasResponseFromProtobuf)(await this.unary("admin", "getSchema", (0, toProtobuf_1.getSchemasRequestToProtobuf)(request), options));
      }
      /**
       * Check if a principal is allowed to perform an action on a resource.
       *
       * @example
       * ```typescript
       * await cerbos.isAllowed({
       *   principal: {
       *     id: "user@example.com",
       *     roles: ["USER"],
       *     attr: { tier: "PREMIUM" },
       *   },
       *   resource: {
       *     kind: "document",
       *     id: "1",
       *     attr: { owner: "user@example.com" },
       *   },
       *   action: "view",
       * }); // => true
       * ```
       */
      async isAllowed(request, options) {
        const { action, ...rest } = request;
        const result = await this.checkResource({ actions: [action], ...rest }, options);
        const allowed = result.isAllowed(action);
        if (allowed === void 0) {
          throw new Error("No decision returned for action");
        }
        return allowed;
      }
      /**
       * List access log entries from the policy decision point server's audit log.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}; and
       *
       * - the Cerbos policy decision point server to be configured with
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#_local_backend | local audit logging backend}, and
       *
       *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | access logs} enabled.
       *
       * @example
       * ```typescript
       * for await (const entry of cerbos.listAccessLogEntries({ filter: { tail: 5 } })) {
       *   console.log(entry);
       * }
       * ```
       */
      async *listAccessLogEntries(request, options) {
        for await (const entry of this.serverStream("admin", "listAuditLogEntries", (0, toProtobuf_1.listAccessLogEntriesRequestToProtobuf)(request), options)) {
          yield (0, fromProtobuf_1.accessLogEntryFromProtobuf)(entry);
        }
      }
      /**
       * List decision log entries from the policy decision point server's audit log.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}; and
       *
       * - the Cerbos policy decision point server to be configured with
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
       *
       *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#_local_backend | local audit logging backend}, and
       *
       *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | decision logs} enabled.
       *
       * @example
       * ```typescript
       * for await (const entry of cerbos.listDecisionLogEntries({ filter: { tail: 5 } })) {
       *   console.log(entry);
       * }
       * ```
       */
      async *listDecisionLogEntries(request, options) {
        for await (const entry of this.serverStream("admin", "listAuditLogEntries", (0, toProtobuf_1.listDecisionLogEntriesRequestToProtobuf)(request), options)) {
          yield (0, fromProtobuf_1.decisionLogEntryFromProtobuf)(entry);
        }
      }
      /**
       * List policies.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}, and
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
       *
       * @example
       * ```typescript
       * const { ids } = await cerbos.listPolicies();
       * ```
       */
      async listPolicies(request = {}, options) {
        return (0, fromProtobuf_1.listPoliciesResponseFromProtobuf)(await this.unary("admin", "listPolicies", (0, toProtobuf_1.listPoliciesRequestToProtobuf)(request), options));
      }
      /**
       * List schemas.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials}, and
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
       *
       * @example
       * ```typescript
       * const { ids } = await cerbos.listSchemas();
       * ```
       */
      async listSchemas(options) {
        return (0, fromProtobuf_1.listSchemasResponseFromProtobuf)(await this.unary("admin", "listSchemas", {}, options));
      }
      /**
       * Produce a query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.
       *
       * @example
       * ```typescript
       * const plan = await cerbos.planResources({
       *   principal: {
       *     id: "user@example.com",
       *     roles: ["USER"],
       *     attr: { tier: "PREMIUM" },
       *   },
       *   resource: { kind: "document" },
       *   action: "view",
       * });
       * ```
       */
      async planResources(request, options) {
        const response = (0, fromProtobuf_1.planResourcesResponseFromProtobuf)(await this.unary("cerbos", "planResources", (0, toProtobuf_1.planResourcesRequestToProtobuf)(request), options));
        this.handleValidationErrors(response);
        return response;
      }
      /**
       * Reload the store.
       *
       * @remarks
       * Requires
       *
       * - the client to be configured with {@link Options.adminCredentials},
       *
       * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API}, and
       *
       * - a reloadable {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
       *
       * @example
       * ```typescript
       * await cerbos.reloadStore({ wait: true });
       * ```
       */
      async reloadStore(request, options) {
        await this.unary("admin", "reloadStore", request, options);
      }
      /**
       * Retrieve information about the Cerbos policy decision point server.
       */
      async serverInfo(options) {
        return await this.unary("cerbos", "serverInfo", {}, options);
      }
      /**
       * Create a client instance with a pre-specified principal.
       */
      withPrincipal(principal, auxData = {}) {
        return new ClientWithPrincipal(this, principal, auxData);
      }
      async unary(service, method, request, { headers, signal } = {}) {
        return await this.transport.unary(service, method, request, await this.mergeHeaders(headers, service), new _AbortHandler(signal));
      }
      async *serverStream(service, method, request, { headers, signal } = {}) {
        const abortController = new AbortController();
        signal?.addEventListener("abort", () => {
          abortController.abort(signal.reason);
        }, { once: true });
        if (signal?.aborted) {
          abortController.abort(signal.reason);
        }
        try {
          yield* this.transport.serverStream(service, method, request, await this.mergeHeaders(headers, service), new _AbortHandler(abortController.signal));
        } finally {
          abortController.abort();
        }
      }
      async mergeHeaders(override, service) {
        const init = this.options.headers;
        const headers = new Headers(typeof init === "function" ? await init() : init);
        if (service === "admin" && this.options.adminCredentials) {
          const { username, password } = this.options.adminCredentials;
          headers.set("Authorization", `Basic ${btoa(`${username}:${password}`)}`);
        }
        if (this.options.playgroundInstance) {
          headers.set("Playground-Instance", this.options.playgroundInstance);
        }
        if (override) {
          for (const [name, value] of new Headers(override)) {
            headers.set(name, value);
          }
        }
        return headers;
      }
      handleValidationErrors({ validationErrors }) {
        const { onValidationError } = this.options;
        if (onValidationError) {
          if (validationErrors.length > 0) {
            if (onValidationError === "throw") {
              throw new errors_1.ValidationFailed(validationErrors);
            }
            onValidationError(validationErrors);
          }
        }
      }
    };
    exports.Client = Client;
    var ClientWithPrincipal = class {
      static {
        __name(this, "ClientWithPrincipal");
      }
      client;
      principal;
      auxData;
      /** @internal */
      constructor(client, principal, auxData = {}) {
        this.client = client;
        this.principal = principal;
        this.auxData = auxData;
      }
      /**
       * Check the principal's permissions on a resource.
       * See {@link Client.checkResource} for details.
       */
      async checkResource(request, options) {
        return await this.client.checkResource(this.merge(request), options);
      }
      /**
       * Check the principal's permissions on a set of resources.
       * See {@link Client.checkResources} for details.
       */
      async checkResources(request, options) {
        return await this.client.checkResources(this.merge(request), options);
      }
      /**
       * Check if the principal is allowed to perform an action on a resource.
       * See {@link Client.isAllowed} for details.
       */
      async isAllowed(request, options) {
        return await this.client.isAllowed(this.merge(request), options);
      }
      /**
       * Produce a query plan that can be used to obtain a list of resources on which the principal is allowed to perform a particular action.
       * See {@link Client.planResources} for details.
       */
      async planResources(request, options) {
        return await this.client.planResources(this.merge(request), options);
      }
      merge({ auxData = {}, ...rest }) {
        return {
          principal: this.principal,
          auxData: {
            ...this.auxData,
            ...auxData
          },
          ...rest
        };
      }
    };
    exports.ClientWithPrincipal = ClientWithPrincipal;
  }
});

// node_modules/@cerbos/core/lib/rpcs.js
var require_rpcs = __commonJS({
  "node_modules/@cerbos/core/lib/rpcs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@cerbos/core/lib/index.js
var require_lib = __commonJS({
  "node_modules/@cerbos/core/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._policyFromProtobuf = void 0;
    __exportStar(require_client(), exports);
    var fromProtobuf_1 = require_fromProtobuf();
    Object.defineProperty(exports, "_policyFromProtobuf", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return fromProtobuf_1._policyFromProtobuf;
    }, "get") });
    __exportStar(require_errors(), exports);
    __exportStar(require_rpcs(), exports);
    __exportStar(require_external(), exports);
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    module.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    module.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    module.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    module.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    module.exports = SyntaxError;
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    module.exports = TypeError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    module.exports = URIError;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    }, "hasSymbols");
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = /* @__PURE__ */ __name(function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    }, "hasNativeSymbols");
  }
});

// node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/has-proto/index.js"(exports, module) {
    "use strict";
    var test = {
      __proto__: null,
      foo: {}
    };
    var $Object = Object;
    module.exports = /* @__PURE__ */ __name(function hasProto() {
      return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
    }, "hasProto");
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = /* @__PURE__ */ __name(function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    }, "concatty");
    var slicy = /* @__PURE__ */ __name(function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    }, "slicy");
    var joiny = /* @__PURE__ */ __name(function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    }, "joiny");
    module.exports = /* @__PURE__ */ __name(function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = /* @__PURE__ */ __name(function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      }, "binder");
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = /* @__PURE__ */ __name(function Empty2() {
        }, "Empty");
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    }, "bind");
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var $Function = Function;
    var getEvalledConstructor = /* @__PURE__ */ __name(function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    }, "getEvalledConstructor");
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = /* @__PURE__ */ __name(function() {
      throw new $TypeError();
    }, "throwTypeError");
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = /* @__PURE__ */ __name(function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    }, "doEval");
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = /* @__PURE__ */ __name(function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    }, "stringToPath");
    var getBaseIntrinsic = /* @__PURE__ */ __name(function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    }, "getBaseIntrinsic");
    module.exports = /* @__PURE__ */ __name(function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    }, "GetIntrinsic");
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module.exports = /* @__PURE__ */ __name(function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    }, "defineDataProperty");
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = /* @__PURE__ */ __name(function hasPropertyDescriptors2() {
      return !!$defineProperty;
    }, "hasPropertyDescriptors");
    hasPropertyDescriptors.hasArrayLengthDefineBug = /* @__PURE__ */ __name(function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    }, "hasArrayLengthDefineBug");
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = /* @__PURE__ */ __name(function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    }, "setFunctionLength");
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = require_type();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $defineProperty = require_es_define_property();
    var $max = GetIntrinsic("%Math.max%");
    module.exports = /* @__PURE__ */ __name(function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    }, "callBind");
    var applyBind = /* @__PURE__ */ __name(function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    }, "applyBind");
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = /* @__PURE__ */ __name(function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    }, "callBoundIntrinsic");
  }
});

// (disabled):node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):node_modules/object-inspect/util.inspect"() {
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    __name(addNumericSeparator, "addNumericSeparator");
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module.exports = /* @__PURE__ */ __name(function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      __name(inspect, "inspect");
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    }, "inspect_");
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    __name(wrapQuotes, "wrapQuotes");
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    __name(quote, "quote");
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    __name(isArray, "isArray");
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    __name(isDate, "isDate");
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    __name(isRegExp, "isRegExp");
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    __name(isError, "isError");
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    __name(isString, "isString");
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    __name(isNumber, "isNumber");
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    __name(isBoolean, "isBoolean");
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isSymbol, "isSymbol");
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isBigInt, "isBigInt");
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    __name(has, "has");
    function toStr(obj) {
      return objectToString.call(obj);
    }
    __name(toStr, "toStr");
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    __name(nameOf, "nameOf");
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    __name(indexOf, "indexOf");
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    __name(isMap, "isMap");
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakMap, "isWeakMap");
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakRef, "isWeakRef");
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    __name(isSet, "isSet");
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakSet, "isWeakSet");
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    __name(isElement, "isElement");
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    __name(inspectString, "inspectString");
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    __name(lowbyte, "lowbyte");
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    __name(markBoxed, "markBoxed");
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    __name(weakCollectionOf, "weakCollectionOf");
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    __name(collectionOf, "collectionOf");
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    __name(singleLineValues, "singleLineValues");
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    __name(getIndent, "getIndent");
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    __name(indentedJoin, "indentedJoin");
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
    __name(arrObjKeys, "arrObjKeys");
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = /* @__PURE__ */ __name(function(list, key) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
          return curr;
        }
      }
    }, "listGetNode");
    var listGet = /* @__PURE__ */ __name(function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    }, "listGet");
    var listSet = /* @__PURE__ */ __name(function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('.').ListNode<typeof value>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    }, "listSet");
    var listHas = /* @__PURE__ */ __name(function(objects, key) {
      return !!listGetNode(objects, key);
    }, "listHas");
    module.exports = /* @__PURE__ */ __name(function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: /* @__PURE__ */ __name(function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        }, "assert"),
        get: /* @__PURE__ */ __name(function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        }, "get"),
        has: /* @__PURE__ */ __name(function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        }, "has"),
        set: /* @__PURE__ */ __name(function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }, "set")
      };
      return channel;
    }, "getSideChannel");
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: /* @__PURE__ */ __name(function(value) {
          return replace.call(value, percentTwenties, "+");
        }, "RFC1738"),
        RFC3986: /* @__PURE__ */ __name(function(value) {
          return String(value);
        }, "RFC3986")
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = /* @__PURE__ */ __name(function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    }, "compactQueue");
    var arrayToObject = /* @__PURE__ */ __name(function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    }, "arrayToObject");
    var merge = /* @__PURE__ */ __name(function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    }, "merge");
    var assign = /* @__PURE__ */ __name(function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    }, "assignSingleSource");
    var decode = /* @__PURE__ */ __name(function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    }, "decode");
    var limit = 1024;
    var encode = /* @__PURE__ */ __name(function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    }, "encode");
    var compact = /* @__PURE__ */ __name(function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    }, "compact");
    var isRegExp = /* @__PURE__ */ __name(function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    }, "isRegExp");
    var isBuffer = /* @__PURE__ */ __name(function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    }, "isBuffer");
    var combine = /* @__PURE__ */ __name(function combine2(a, b) {
      return [].concat(a, b);
    }, "combine");
    var maybeMap = /* @__PURE__ */ __name(function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    }, "maybeMap");
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify2 = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: /* @__PURE__ */ __name(function brackets(prefix) {
        return prefix + "[]";
      }, "brackets"),
      comma: "comma",
      indices: /* @__PURE__ */ __name(function indices(prefix, key) {
        return prefix + "[" + key + "]";
      }, "indices"),
      repeat: /* @__PURE__ */ __name(function repeat(prefix) {
        return prefix;
      }, "repeat")
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = /* @__PURE__ */ __name(function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    }, "pushToArray");
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: /* @__PURE__ */ __name(function serializeDate(date) {
        return toISO.call(date);
      }, "serializeDate"),
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = /* @__PURE__ */ __name(function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    }, "isNonNullishPrimitive");
    var sentinel = {};
    var stringify = /* @__PURE__ */ __name(function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    }, "stringify");
    var normalizeStringifyOptions = /* @__PURE__ */ __name(function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    }, "normalizeStringifyOptions");
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = /* @__PURE__ */ __name(function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    }, "interpretNumericEntities");
    var parseArrayValue = /* @__PURE__ */ __name(function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    }, "parseArrayValue");
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = /* @__PURE__ */ __name(function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    }, "parseQueryStringValues");
    var parseObject = /* @__PURE__ */ __name(function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    }, "parseObject");
    var parseKeys = /* @__PURE__ */ __name(function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    }, "parseQueryStringKeys");
    var normalizeParseOptions = /* @__PURE__ */ __name(function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    }, "normalizeParseOptions");
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify = require_stringify2();
    var parse = require_parse2();
    var formats = require_formats();
    module.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/@cerbos/http/lib/protobuf/google/protobuf/duration.js
var require_duration = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/google/protobuf/duration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Duration = exports.protobufPackage = void 0;
    exports.protobufPackage = "google.protobuf";
    exports.Duration = {
      fromJSON(object) {
        return {
          seconds: isSet(object.seconds) ? globalThis.String(object.seconds) : "0",
          nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.seconds !== "0") {
          obj.seconds = message.seconds;
        }
        if (message.nanos !== 0) {
          obj.nanos = Math.round(message.nanos);
        }
        return obj;
      }
    };
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/protobuf/google/protobuf/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/google/protobuf/timestamp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Timestamp = exports.protobufPackage = void 0;
    exports.protobufPackage = "google.protobuf";
    exports.Timestamp = {
      fromJSON(object) {
        return {
          seconds: isSet(object.seconds) ? globalThis.String(object.seconds) : "0",
          nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.seconds !== "0") {
          obj.seconds = message.seconds;
        }
        if (message.nanos !== 0) {
          obj.nanos = Math.round(message.nanos);
        }
        return obj;
      }
    };
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/protobuf/cerbos/effect/v1/effect.js
var require_effect2 = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/cerbos/effect/v1/effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.effectToJSON = exports.effectFromJSON = exports.Effect = exports.protobufPackage = void 0;
    exports.protobufPackage = "cerbos.effect.v1";
    var Effect;
    (function(Effect2) {
      Effect2[Effect2["EFFECT_UNSPECIFIED"] = 0] = "EFFECT_UNSPECIFIED";
      Effect2[Effect2["EFFECT_ALLOW"] = 1] = "EFFECT_ALLOW";
      Effect2[Effect2["EFFECT_DENY"] = 2] = "EFFECT_DENY";
      Effect2[Effect2["EFFECT_NO_MATCH"] = 3] = "EFFECT_NO_MATCH";
    })(Effect || (exports.Effect = Effect = {}));
    function effectFromJSON(object) {
      switch (object) {
        case 0:
        case "EFFECT_UNSPECIFIED":
          return Effect.EFFECT_UNSPECIFIED;
        case 1:
        case "EFFECT_ALLOW":
          return Effect.EFFECT_ALLOW;
        case 2:
        case "EFFECT_DENY":
          return Effect.EFFECT_DENY;
        case 3:
        case "EFFECT_NO_MATCH":
          return Effect.EFFECT_NO_MATCH;
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum Effect");
      }
    }
    __name(effectFromJSON, "effectFromJSON");
    exports.effectFromJSON = effectFromJSON;
    function effectToJSON(object) {
      switch (object) {
        case Effect.EFFECT_UNSPECIFIED:
          return "EFFECT_UNSPECIFIED";
        case Effect.EFFECT_ALLOW:
          return "EFFECT_ALLOW";
        case Effect.EFFECT_DENY:
          return "EFFECT_DENY";
        case Effect.EFFECT_NO_MATCH:
          return "EFFECT_NO_MATCH";
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum Effect");
      }
    }
    __name(effectToJSON, "effectToJSON");
    exports.effectToJSON = effectToJSON;
  }
});

// node_modules/@cerbos/http/lib/protobuf/cerbos/schema/v1/schema.js
var require_schema2 = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/cerbos/schema/v1/schema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Schema = exports.ValidationError = exports.validationError_SourceToJSON = exports.validationError_SourceFromJSON = exports.ValidationError_Source = exports.protobufPackage = void 0;
    exports.protobufPackage = "cerbos.schema.v1";
    var ValidationError_Source;
    (function(ValidationError_Source2) {
      ValidationError_Source2[ValidationError_Source2["SOURCE_UNSPECIFIED"] = 0] = "SOURCE_UNSPECIFIED";
      ValidationError_Source2[ValidationError_Source2["SOURCE_PRINCIPAL"] = 1] = "SOURCE_PRINCIPAL";
      ValidationError_Source2[ValidationError_Source2["SOURCE_RESOURCE"] = 2] = "SOURCE_RESOURCE";
    })(ValidationError_Source || (exports.ValidationError_Source = ValidationError_Source = {}));
    function validationError_SourceFromJSON(object) {
      switch (object) {
        case 0:
        case "SOURCE_UNSPECIFIED":
          return ValidationError_Source.SOURCE_UNSPECIFIED;
        case 1:
        case "SOURCE_PRINCIPAL":
          return ValidationError_Source.SOURCE_PRINCIPAL;
        case 2:
        case "SOURCE_RESOURCE":
          return ValidationError_Source.SOURCE_RESOURCE;
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum ValidationError_Source");
      }
    }
    __name(validationError_SourceFromJSON, "validationError_SourceFromJSON");
    exports.validationError_SourceFromJSON = validationError_SourceFromJSON;
    function validationError_SourceToJSON(object) {
      switch (object) {
        case ValidationError_Source.SOURCE_UNSPECIFIED:
          return "SOURCE_UNSPECIFIED";
        case ValidationError_Source.SOURCE_PRINCIPAL:
          return "SOURCE_PRINCIPAL";
        case ValidationError_Source.SOURCE_RESOURCE:
          return "SOURCE_RESOURCE";
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum ValidationError_Source");
      }
    }
    __name(validationError_SourceToJSON, "validationError_SourceToJSON");
    exports.validationError_SourceToJSON = validationError_SourceToJSON;
    exports.ValidationError = {
      fromJSON(object) {
        return {
          path: isSet(object.path) ? globalThis.String(object.path) : "",
          message: isSet(object.message) ? globalThis.String(object.message) : "",
          source: isSet(object.source) ? validationError_SourceFromJSON(object.source) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.path !== "") {
          obj.path = message.path;
        }
        if (message.message !== "") {
          obj.message = message.message;
        }
        if (message.source !== 0) {
          obj.source = validationError_SourceToJSON(message.source);
        }
        return obj;
      }
    };
    exports.Schema = {
      fromJSON(object) {
        return {
          id: isSet(object.id) ? globalThis.String(object.id) : "",
          definition: isSet(object.definition) ? bytesFromBase64(object.definition) : new Uint8Array(0)
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id !== "") {
          obj.id = message.id;
        }
        if (message.definition.length !== 0) {
          obj.definition = base64FromBytes(message.definition);
        }
        return obj;
      }
    };
    function bytesFromBase64(b64) {
      if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
      } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
          arr[i] = bin.charCodeAt(i);
        }
        return arr;
      }
    }
    __name(bytesFromBase64, "bytesFromBase64");
    function base64FromBytes(arr) {
      if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
      } else {
        const bin = [];
        arr.forEach((byte) => {
          bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
      }
    }
    __name(base64FromBytes, "base64FromBytes");
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/protobuf/cerbos/engine/v1/engine.js
var require_engine2 = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/cerbos/engine/v1/engine.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuxData_JwtEntry = exports.AuxData = exports.Principal_AttrEntry = exports.Principal = exports.Resource_AttrEntry = exports.Resource = exports.OutputEntry = exports.CheckOutput_ActionsEntry = exports.CheckOutput_ActionEffect = exports.CheckOutput = exports.CheckInput = exports.PlanResourcesOutput = exports.PlanResourcesFilter_Expression_Operand = exports.PlanResourcesFilter_Expression = exports.PlanResourcesFilter = exports.PlanResourcesInput_Resource_AttrEntry = exports.PlanResourcesInput_Resource = exports.PlanResourcesInput = exports.planResourcesFilter_KindToJSON = exports.planResourcesFilter_KindFromJSON = exports.PlanResourcesFilter_Kind = exports.protobufPackage = void 0;
    var effect_1 = require_effect2();
    var schema_1 = require_schema2();
    exports.protobufPackage = "cerbos.engine.v1";
    var PlanResourcesFilter_Kind;
    (function(PlanResourcesFilter_Kind2) {
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_UNSPECIFIED"] = 0] = "KIND_UNSPECIFIED";
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_ALWAYS_ALLOWED"] = 1] = "KIND_ALWAYS_ALLOWED";
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_ALWAYS_DENIED"] = 2] = "KIND_ALWAYS_DENIED";
      PlanResourcesFilter_Kind2[PlanResourcesFilter_Kind2["KIND_CONDITIONAL"] = 3] = "KIND_CONDITIONAL";
    })(PlanResourcesFilter_Kind || (exports.PlanResourcesFilter_Kind = PlanResourcesFilter_Kind = {}));
    function planResourcesFilter_KindFromJSON(object) {
      switch (object) {
        case 0:
        case "KIND_UNSPECIFIED":
          return PlanResourcesFilter_Kind.KIND_UNSPECIFIED;
        case 1:
        case "KIND_ALWAYS_ALLOWED":
          return PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED;
        case 2:
        case "KIND_ALWAYS_DENIED":
          return PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED;
        case 3:
        case "KIND_CONDITIONAL":
          return PlanResourcesFilter_Kind.KIND_CONDITIONAL;
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlanResourcesFilter_Kind");
      }
    }
    __name(planResourcesFilter_KindFromJSON, "planResourcesFilter_KindFromJSON");
    exports.planResourcesFilter_KindFromJSON = planResourcesFilter_KindFromJSON;
    function planResourcesFilter_KindToJSON(object) {
      switch (object) {
        case PlanResourcesFilter_Kind.KIND_UNSPECIFIED:
          return "KIND_UNSPECIFIED";
        case PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED:
          return "KIND_ALWAYS_ALLOWED";
        case PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED:
          return "KIND_ALWAYS_DENIED";
        case PlanResourcesFilter_Kind.KIND_CONDITIONAL:
          return "KIND_CONDITIONAL";
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlanResourcesFilter_Kind");
      }
    }
    __name(planResourcesFilter_KindToJSON, "planResourcesFilter_KindToJSON");
    exports.planResourcesFilter_KindToJSON = planResourcesFilter_KindToJSON;
    exports.PlanResourcesInput = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          action: isSet(object.action) ? globalThis.String(object.action) : "",
          principal: isSet(object.principal) ? exports.Principal.fromJSON(object.principal) : void 0,
          resource: isSet(object.resource) ? exports.PlanResourcesInput_Resource.fromJSON(object.resource) : void 0,
          auxData: isSet(object.auxData) ? exports.AuxData.fromJSON(object.auxData) : void 0,
          includeMeta: isSet(object.includeMeta) ? globalThis.Boolean(object.includeMeta) : false
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.action !== "") {
          obj.action = message.action;
        }
        if (message.principal !== void 0) {
          obj.principal = exports.Principal.toJSON(message.principal);
        }
        if (message.resource !== void 0) {
          obj.resource = exports.PlanResourcesInput_Resource.toJSON(message.resource);
        }
        if (message.auxData !== void 0) {
          obj.auxData = exports.AuxData.toJSON(message.auxData);
        }
        if (message.includeMeta !== false) {
          obj.includeMeta = message.includeMeta;
        }
        return obj;
      }
    };
    exports.PlanResourcesInput_Resource = {
      fromJSON(object) {
        return {
          kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
          attr: isObject(object.attr) ? Object.entries(object.attr).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {}) : {},
          policyVersion: isSet(object.policyVersion) ? globalThis.String(object.policyVersion) : "",
          scope: isSet(object.scope) ? globalThis.String(object.scope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.kind !== "") {
          obj.kind = message.kind;
        }
        if (message.attr) {
          const entries = Object.entries(message.attr);
          if (entries.length > 0) {
            obj.attr = {};
            entries.forEach(([k, v]) => {
              obj.attr[k] = v;
            });
          }
        }
        if (message.policyVersion !== "") {
          obj.policyVersion = message.policyVersion;
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        return obj;
      }
    };
    exports.PlanResourcesInput_Resource_AttrEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object?.value) ? object.value : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.PlanResourcesFilter = {
      fromJSON(object) {
        return {
          kind: isSet(object.kind) ? planResourcesFilter_KindFromJSON(object.kind) : 0,
          condition: isSet(object.condition) ? exports.PlanResourcesFilter_Expression_Operand.fromJSON(object.condition) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.kind !== 0) {
          obj.kind = planResourcesFilter_KindToJSON(message.kind);
        }
        if (message.condition !== void 0) {
          obj.condition = exports.PlanResourcesFilter_Expression_Operand.toJSON(message.condition);
        }
        return obj;
      }
    };
    exports.PlanResourcesFilter_Expression = {
      fromJSON(object) {
        return {
          operator: isSet(object.operator) ? globalThis.String(object.operator) : "",
          operands: globalThis.Array.isArray(object?.operands) ? object.operands.map((e) => exports.PlanResourcesFilter_Expression_Operand.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.operator !== "") {
          obj.operator = message.operator;
        }
        if (message.operands?.length) {
          obj.operands = message.operands.map((e) => exports.PlanResourcesFilter_Expression_Operand.toJSON(e));
        }
        return obj;
      }
    };
    exports.PlanResourcesFilter_Expression_Operand = {
      fromJSON(object) {
        return {
          node: isSet(object.value) ? { $case: "value", value: object.value } : isSet(object.expression) ? {
            $case: "expression",
            expression: exports.PlanResourcesFilter_Expression.fromJSON(object.expression)
          } : isSet(object.variable) ? {
            $case: "variable",
            variable: globalThis.String(object.variable)
          } : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.node?.$case === "value") {
          obj.value = message.node.value;
        }
        if (message.node?.$case === "expression") {
          obj.expression = exports.PlanResourcesFilter_Expression.toJSON(message.node.expression);
        }
        if (message.node?.$case === "variable") {
          obj.variable = message.node.variable;
        }
        return obj;
      }
    };
    exports.PlanResourcesOutput = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          action: isSet(object.action) ? globalThis.String(object.action) : "",
          kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
          policyVersion: isSet(object.policyVersion) ? globalThis.String(object.policyVersion) : "",
          scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
          filter: isSet(object.filter) ? exports.PlanResourcesFilter.fromJSON(object.filter) : void 0,
          filterDebug: isSet(object.filterDebug) ? globalThis.String(object.filterDebug) : "",
          validationErrors: globalThis.Array.isArray(object?.validationErrors) ? object.validationErrors.map((e) => schema_1.ValidationError.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.action !== "") {
          obj.action = message.action;
        }
        if (message.kind !== "") {
          obj.kind = message.kind;
        }
        if (message.policyVersion !== "") {
          obj.policyVersion = message.policyVersion;
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        if (message.filter !== void 0) {
          obj.filter = exports.PlanResourcesFilter.toJSON(message.filter);
        }
        if (message.filterDebug !== "") {
          obj.filterDebug = message.filterDebug;
        }
        if (message.validationErrors?.length) {
          obj.validationErrors = message.validationErrors.map((e) => schema_1.ValidationError.toJSON(e));
        }
        return obj;
      }
    };
    exports.CheckInput = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          resource: isSet(object.resource) ? exports.Resource.fromJSON(object.resource) : void 0,
          principal: isSet(object.principal) ? exports.Principal.fromJSON(object.principal) : void 0,
          actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => globalThis.String(e)) : [],
          auxData: isSet(object.auxData) ? exports.AuxData.fromJSON(object.auxData) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.resource !== void 0) {
          obj.resource = exports.Resource.toJSON(message.resource);
        }
        if (message.principal !== void 0) {
          obj.principal = exports.Principal.toJSON(message.principal);
        }
        if (message.actions?.length) {
          obj.actions = message.actions;
        }
        if (message.auxData !== void 0) {
          obj.auxData = exports.AuxData.toJSON(message.auxData);
        }
        return obj;
      }
    };
    exports.CheckOutput = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
          actions: isObject(object.actions) ? Object.entries(object.actions).reduce((acc, [key, value]) => {
            acc[key] = exports.CheckOutput_ActionEffect.fromJSON(value);
            return acc;
          }, {}) : {},
          effectiveDerivedRoles: globalThis.Array.isArray(object?.effectiveDerivedRoles) ? object.effectiveDerivedRoles.map((e) => globalThis.String(e)) : [],
          validationErrors: globalThis.Array.isArray(object?.validationErrors) ? object.validationErrors.map((e) => schema_1.ValidationError.fromJSON(e)) : [],
          outputs: globalThis.Array.isArray(object?.outputs) ? object.outputs.map((e) => exports.OutputEntry.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.resourceId !== "") {
          obj.resourceId = message.resourceId;
        }
        if (message.actions) {
          const entries = Object.entries(message.actions);
          if (entries.length > 0) {
            obj.actions = {};
            entries.forEach(([k, v]) => {
              obj.actions[k] = exports.CheckOutput_ActionEffect.toJSON(v);
            });
          }
        }
        if (message.effectiveDerivedRoles?.length) {
          obj.effectiveDerivedRoles = message.effectiveDerivedRoles;
        }
        if (message.validationErrors?.length) {
          obj.validationErrors = message.validationErrors.map((e) => schema_1.ValidationError.toJSON(e));
        }
        if (message.outputs?.length) {
          obj.outputs = message.outputs.map((e) => exports.OutputEntry.toJSON(e));
        }
        return obj;
      }
    };
    exports.CheckOutput_ActionEffect = {
      fromJSON(object) {
        return {
          effect: isSet(object.effect) ? (0, effect_1.effectFromJSON)(object.effect) : 0,
          policy: isSet(object.policy) ? globalThis.String(object.policy) : "",
          scope: isSet(object.scope) ? globalThis.String(object.scope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.effect !== 0) {
          obj.effect = (0, effect_1.effectToJSON)(message.effect);
        }
        if (message.policy !== "") {
          obj.policy = message.policy;
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        return obj;
      }
    };
    exports.CheckOutput_ActionsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.CheckOutput_ActionEffect.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.CheckOutput_ActionEffect.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.OutputEntry = {
      fromJSON(object) {
        return {
          src: isSet(object.src) ? globalThis.String(object.src) : "",
          val: isSet(object?.val) ? object.val : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.src !== "") {
          obj.src = message.src;
        }
        if (message.val !== void 0) {
          obj.val = message.val;
        }
        return obj;
      }
    };
    exports.Resource = {
      fromJSON(object) {
        return {
          kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
          policyVersion: isSet(object.policyVersion) ? globalThis.String(object.policyVersion) : "",
          id: isSet(object.id) ? globalThis.String(object.id) : "",
          attr: isObject(object.attr) ? Object.entries(object.attr).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {}) : {},
          scope: isSet(object.scope) ? globalThis.String(object.scope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.kind !== "") {
          obj.kind = message.kind;
        }
        if (message.policyVersion !== "") {
          obj.policyVersion = message.policyVersion;
        }
        if (message.id !== "") {
          obj.id = message.id;
        }
        if (message.attr) {
          const entries = Object.entries(message.attr);
          if (entries.length > 0) {
            obj.attr = {};
            entries.forEach(([k, v]) => {
              obj.attr[k] = v;
            });
          }
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        return obj;
      }
    };
    exports.Resource_AttrEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object?.value) ? object.value : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.Principal = {
      fromJSON(object) {
        return {
          id: isSet(object.id) ? globalThis.String(object.id) : "",
          policyVersion: isSet(object.policyVersion) ? globalThis.String(object.policyVersion) : "",
          roles: globalThis.Array.isArray(object?.roles) ? object.roles.map((e) => globalThis.String(e)) : [],
          attr: isObject(object.attr) ? Object.entries(object.attr).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {}) : {},
          scope: isSet(object.scope) ? globalThis.String(object.scope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id !== "") {
          obj.id = message.id;
        }
        if (message.policyVersion !== "") {
          obj.policyVersion = message.policyVersion;
        }
        if (message.roles?.length) {
          obj.roles = message.roles;
        }
        if (message.attr) {
          const entries = Object.entries(message.attr);
          if (entries.length > 0) {
            obj.attr = {};
            entries.forEach(([k, v]) => {
              obj.attr[k] = v;
            });
          }
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        return obj;
      }
    };
    exports.Principal_AttrEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object?.value) ? object.value : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.AuxData = {
      fromJSON(object) {
        return {
          jwt: isObject(object.jwt) ? Object.entries(object.jwt).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {}) : {}
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.jwt) {
          const entries = Object.entries(message.jwt);
          if (entries.length > 0) {
            obj.jwt = {};
            entries.forEach(([k, v]) => {
              obj.jwt[k] = v;
            });
          }
        }
        return obj;
      }
    };
    exports.AuxData_JwtEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object?.value) ? object.value : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = message.value;
        }
        return obj;
      }
    };
    function isObject(value) {
      return typeof value === "object" && value !== null;
    }
    __name(isObject, "isObject");
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/protobuf/cerbos/policy/v1/policy.js
var require_policy = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/cerbos/policy/v1/policy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Schemas_Schema = exports.Schemas_IgnoreWhen = exports.Schemas = exports.Output_When = exports.Output = exports.Match_ExprList = exports.Match = exports.Condition = exports.Variables_LocalEntry = exports.Variables = exports.ExportVariables_DefinitionsEntry = exports.ExportVariables = exports.RoleDef = exports.DerivedRoles = exports.PrincipalRule_Action = exports.PrincipalRule = exports.PrincipalPolicy = exports.ResourceRule = exports.ResourcePolicy = exports.Metadata_AnnotationsEntry = exports.Metadata = exports.SourceAttributes_AttributesEntry = exports.SourceAttributes = exports.Policy_VariablesEntry = exports.Policy = exports.protobufPackage = void 0;
    var effect_1 = require_effect2();
    exports.protobufPackage = "cerbos.policy.v1";
    exports.Policy = {
      fromJSON(object) {
        return {
          apiVersion: isSet(object.apiVersion) ? globalThis.String(object.apiVersion) : "",
          disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
          description: isSet(object.description) ? globalThis.String(object.description) : "",
          metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : void 0,
          policyType: isSet(object.resourcePolicy) ? {
            $case: "resourcePolicy",
            resourcePolicy: exports.ResourcePolicy.fromJSON(object.resourcePolicy)
          } : isSet(object.principalPolicy) ? {
            $case: "principalPolicy",
            principalPolicy: exports.PrincipalPolicy.fromJSON(object.principalPolicy)
          } : isSet(object.derivedRoles) ? {
            $case: "derivedRoles",
            derivedRoles: exports.DerivedRoles.fromJSON(object.derivedRoles)
          } : isSet(object.exportVariables) ? {
            $case: "exportVariables",
            exportVariables: exports.ExportVariables.fromJSON(object.exportVariables)
          } : void 0,
          variables: isObject(object.variables) ? Object.entries(object.variables).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {}) : {},
          jsonSchema: isSet(object.$schema) ? globalThis.String(object.$schema) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.apiVersion !== "") {
          obj.apiVersion = message.apiVersion;
        }
        if (message.disabled !== false) {
          obj.disabled = message.disabled;
        }
        if (message.description !== "") {
          obj.description = message.description;
        }
        if (message.metadata !== void 0) {
          obj.metadata = exports.Metadata.toJSON(message.metadata);
        }
        if (message.policyType?.$case === "resourcePolicy") {
          obj.resourcePolicy = exports.ResourcePolicy.toJSON(message.policyType.resourcePolicy);
        }
        if (message.policyType?.$case === "principalPolicy") {
          obj.principalPolicy = exports.PrincipalPolicy.toJSON(message.policyType.principalPolicy);
        }
        if (message.policyType?.$case === "derivedRoles") {
          obj.derivedRoles = exports.DerivedRoles.toJSON(message.policyType.derivedRoles);
        }
        if (message.policyType?.$case === "exportVariables") {
          obj.exportVariables = exports.ExportVariables.toJSON(message.policyType.exportVariables);
        }
        if (message.variables) {
          const entries = Object.entries(message.variables);
          if (entries.length > 0) {
            obj.variables = {};
            entries.forEach(([k, v]) => {
              obj.variables[k] = v;
            });
          }
        }
        if (message.jsonSchema !== "") {
          obj.$schema = message.jsonSchema;
        }
        return obj;
      }
    };
    exports.Policy_VariablesEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? globalThis.String(object.value) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== "") {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.SourceAttributes = {
      fromJSON(object) {
        return {
          attributes: isObject(object.attributes) ? Object.entries(object.attributes).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {}) : {}
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.attributes) {
          const entries = Object.entries(message.attributes);
          if (entries.length > 0) {
            obj.attributes = {};
            entries.forEach(([k, v]) => {
              obj.attributes[k] = v;
            });
          }
        }
        return obj;
      }
    };
    exports.SourceAttributes_AttributesEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object?.value) ? object.value : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.Metadata = {
      fromJSON(object) {
        return {
          sourceFile: isSet(object.sourceFile) ? globalThis.String(object.sourceFile) : "",
          annotations: isObject(object.annotations) ? Object.entries(object.annotations).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {}) : {},
          hash: isSet(object.hash) ? String(object.hash) : void 0,
          storeIdentifer: isSet(object.storeIdentifer) ? globalThis.String(object.storeIdentifer) : "",
          storeIdentifier: isSet(object.storeIdentifier) ? globalThis.String(object.storeIdentifier) : "",
          sourceAttributes: isSet(object.sourceAttributes) ? exports.SourceAttributes.fromJSON(object.sourceAttributes) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.sourceFile !== "") {
          obj.sourceFile = message.sourceFile;
        }
        if (message.annotations) {
          const entries = Object.entries(message.annotations);
          if (entries.length > 0) {
            obj.annotations = {};
            entries.forEach(([k, v]) => {
              obj.annotations[k] = v;
            });
          }
        }
        if (message.hash !== void 0) {
          obj.hash = message.hash;
        }
        if (message.storeIdentifer !== "") {
          obj.storeIdentifer = message.storeIdentifer;
        }
        if (message.storeIdentifier !== "") {
          obj.storeIdentifier = message.storeIdentifier;
        }
        if (message.sourceAttributes !== void 0) {
          obj.sourceAttributes = exports.SourceAttributes.toJSON(message.sourceAttributes);
        }
        return obj;
      }
    };
    exports.Metadata_AnnotationsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? globalThis.String(object.value) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== "") {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.ResourcePolicy = {
      fromJSON(object) {
        return {
          resource: isSet(object.resource) ? globalThis.String(object.resource) : "",
          version: isSet(object.version) ? globalThis.String(object.version) : "",
          importDerivedRoles: globalThis.Array.isArray(object?.importDerivedRoles) ? object.importDerivedRoles.map((e) => globalThis.String(e)) : [],
          rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e) => exports.ResourceRule.fromJSON(e)) : [],
          scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
          schemas: isSet(object.schemas) ? exports.Schemas.fromJSON(object.schemas) : void 0,
          variables: isSet(object.variables) ? exports.Variables.fromJSON(object.variables) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.resource !== "") {
          obj.resource = message.resource;
        }
        if (message.version !== "") {
          obj.version = message.version;
        }
        if (message.importDerivedRoles?.length) {
          obj.importDerivedRoles = message.importDerivedRoles;
        }
        if (message.rules?.length) {
          obj.rules = message.rules.map((e) => exports.ResourceRule.toJSON(e));
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        if (message.schemas !== void 0) {
          obj.schemas = exports.Schemas.toJSON(message.schemas);
        }
        if (message.variables !== void 0) {
          obj.variables = exports.Variables.toJSON(message.variables);
        }
        return obj;
      }
    };
    exports.ResourceRule = {
      fromJSON(object) {
        return {
          actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => globalThis.String(e)) : [],
          derivedRoles: globalThis.Array.isArray(object?.derivedRoles) ? object.derivedRoles.map((e) => globalThis.String(e)) : [],
          roles: globalThis.Array.isArray(object?.roles) ? object.roles.map((e) => globalThis.String(e)) : [],
          condition: isSet(object.condition) ? exports.Condition.fromJSON(object.condition) : void 0,
          effect: isSet(object.effect) ? (0, effect_1.effectFromJSON)(object.effect) : 0,
          name: isSet(object.name) ? globalThis.String(object.name) : "",
          output: isSet(object.output) ? exports.Output.fromJSON(object.output) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.actions?.length) {
          obj.actions = message.actions;
        }
        if (message.derivedRoles?.length) {
          obj.derivedRoles = message.derivedRoles;
        }
        if (message.roles?.length) {
          obj.roles = message.roles;
        }
        if (message.condition !== void 0) {
          obj.condition = exports.Condition.toJSON(message.condition);
        }
        if (message.effect !== 0) {
          obj.effect = (0, effect_1.effectToJSON)(message.effect);
        }
        if (message.name !== "") {
          obj.name = message.name;
        }
        if (message.output !== void 0) {
          obj.output = exports.Output.toJSON(message.output);
        }
        return obj;
      }
    };
    exports.PrincipalPolicy = {
      fromJSON(object) {
        return {
          principal: isSet(object.principal) ? globalThis.String(object.principal) : "",
          version: isSet(object.version) ? globalThis.String(object.version) : "",
          rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e) => exports.PrincipalRule.fromJSON(e)) : [],
          scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
          variables: isSet(object.variables) ? exports.Variables.fromJSON(object.variables) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.principal !== "") {
          obj.principal = message.principal;
        }
        if (message.version !== "") {
          obj.version = message.version;
        }
        if (message.rules?.length) {
          obj.rules = message.rules.map((e) => exports.PrincipalRule.toJSON(e));
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        if (message.variables !== void 0) {
          obj.variables = exports.Variables.toJSON(message.variables);
        }
        return obj;
      }
    };
    exports.PrincipalRule = {
      fromJSON(object) {
        return {
          resource: isSet(object.resource) ? globalThis.String(object.resource) : "",
          actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => exports.PrincipalRule_Action.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.resource !== "") {
          obj.resource = message.resource;
        }
        if (message.actions?.length) {
          obj.actions = message.actions.map((e) => exports.PrincipalRule_Action.toJSON(e));
        }
        return obj;
      }
    };
    exports.PrincipalRule_Action = {
      fromJSON(object) {
        return {
          action: isSet(object.action) ? globalThis.String(object.action) : "",
          condition: isSet(object.condition) ? exports.Condition.fromJSON(object.condition) : void 0,
          effect: isSet(object.effect) ? (0, effect_1.effectFromJSON)(object.effect) : 0,
          name: isSet(object.name) ? globalThis.String(object.name) : "",
          output: isSet(object.output) ? exports.Output.fromJSON(object.output) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.action !== "") {
          obj.action = message.action;
        }
        if (message.condition !== void 0) {
          obj.condition = exports.Condition.toJSON(message.condition);
        }
        if (message.effect !== 0) {
          obj.effect = (0, effect_1.effectToJSON)(message.effect);
        }
        if (message.name !== "") {
          obj.name = message.name;
        }
        if (message.output !== void 0) {
          obj.output = exports.Output.toJSON(message.output);
        }
        return obj;
      }
    };
    exports.DerivedRoles = {
      fromJSON(object) {
        return {
          name: isSet(object.name) ? globalThis.String(object.name) : "",
          definitions: globalThis.Array.isArray(object?.definitions) ? object.definitions.map((e) => exports.RoleDef.fromJSON(e)) : [],
          variables: isSet(object.variables) ? exports.Variables.fromJSON(object.variables) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.name !== "") {
          obj.name = message.name;
        }
        if (message.definitions?.length) {
          obj.definitions = message.definitions.map((e) => exports.RoleDef.toJSON(e));
        }
        if (message.variables !== void 0) {
          obj.variables = exports.Variables.toJSON(message.variables);
        }
        return obj;
      }
    };
    exports.RoleDef = {
      fromJSON(object) {
        return {
          name: isSet(object.name) ? globalThis.String(object.name) : "",
          parentRoles: globalThis.Array.isArray(object?.parentRoles) ? object.parentRoles.map((e) => globalThis.String(e)) : [],
          condition: isSet(object.condition) ? exports.Condition.fromJSON(object.condition) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.name !== "") {
          obj.name = message.name;
        }
        if (message.parentRoles?.length) {
          obj.parentRoles = message.parentRoles;
        }
        if (message.condition !== void 0) {
          obj.condition = exports.Condition.toJSON(message.condition);
        }
        return obj;
      }
    };
    exports.ExportVariables = {
      fromJSON(object) {
        return {
          name: isSet(object.name) ? globalThis.String(object.name) : "",
          definitions: isObject(object.definitions) ? Object.entries(object.definitions).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {}) : {}
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.name !== "") {
          obj.name = message.name;
        }
        if (message.definitions) {
          const entries = Object.entries(message.definitions);
          if (entries.length > 0) {
            obj.definitions = {};
            entries.forEach(([k, v]) => {
              obj.definitions[k] = v;
            });
          }
        }
        return obj;
      }
    };
    exports.ExportVariables_DefinitionsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? globalThis.String(object.value) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== "") {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.Variables = {
      fromJSON(object) {
        return {
          import: globalThis.Array.isArray(object?.import) ? object.import.map((e) => globalThis.String(e)) : [],
          local: isObject(object.local) ? Object.entries(object.local).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {}) : {}
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.import?.length) {
          obj.import = message.import;
        }
        if (message.local) {
          const entries = Object.entries(message.local);
          if (entries.length > 0) {
            obj.local = {};
            entries.forEach(([k, v]) => {
              obj.local[k] = v;
            });
          }
        }
        return obj;
      }
    };
    exports.Variables_LocalEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? globalThis.String(object.value) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== "") {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.Condition = {
      fromJSON(object) {
        return {
          condition: isSet(object.match) ? { $case: "match", match: exports.Match.fromJSON(object.match) } : isSet(object.script) ? { $case: "script", script: globalThis.String(object.script) } : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.condition?.$case === "match") {
          obj.match = exports.Match.toJSON(message.condition.match);
        }
        if (message.condition?.$case === "script") {
          obj.script = message.condition.script;
        }
        return obj;
      }
    };
    exports.Match = {
      fromJSON(object) {
        return {
          op: isSet(object.all) ? { $case: "all", all: exports.Match_ExprList.fromJSON(object.all) } : isSet(object.any) ? { $case: "any", any: exports.Match_ExprList.fromJSON(object.any) } : isSet(object.none) ? { $case: "none", none: exports.Match_ExprList.fromJSON(object.none) } : isSet(object.expr) ? { $case: "expr", expr: globalThis.String(object.expr) } : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.op?.$case === "all") {
          obj.all = exports.Match_ExprList.toJSON(message.op.all);
        }
        if (message.op?.$case === "any") {
          obj.any = exports.Match_ExprList.toJSON(message.op.any);
        }
        if (message.op?.$case === "none") {
          obj.none = exports.Match_ExprList.toJSON(message.op.none);
        }
        if (message.op?.$case === "expr") {
          obj.expr = message.op.expr;
        }
        return obj;
      }
    };
    exports.Match_ExprList = {
      fromJSON(object) {
        return {
          of: globalThis.Array.isArray(object?.of) ? object.of.map((e) => exports.Match.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.of?.length) {
          obj.of = message.of.map((e) => exports.Match.toJSON(e));
        }
        return obj;
      }
    };
    exports.Output = {
      fromJSON(object) {
        return {
          expr: isSet(object.expr) ? globalThis.String(object.expr) : "",
          when: isSet(object.when) ? exports.Output_When.fromJSON(object.when) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.expr !== "") {
          obj.expr = message.expr;
        }
        if (message.when !== void 0) {
          obj.when = exports.Output_When.toJSON(message.when);
        }
        return obj;
      }
    };
    exports.Output_When = {
      fromJSON(object) {
        return {
          ruleActivated: isSet(object.ruleActivated) ? globalThis.String(object.ruleActivated) : "",
          conditionNotMet: isSet(object.conditionNotMet) ? globalThis.String(object.conditionNotMet) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.ruleActivated !== "") {
          obj.ruleActivated = message.ruleActivated;
        }
        if (message.conditionNotMet !== "") {
          obj.conditionNotMet = message.conditionNotMet;
        }
        return obj;
      }
    };
    exports.Schemas = {
      fromJSON(object) {
        return {
          principalSchema: isSet(object.principalSchema) ? exports.Schemas_Schema.fromJSON(object.principalSchema) : void 0,
          resourceSchema: isSet(object.resourceSchema) ? exports.Schemas_Schema.fromJSON(object.resourceSchema) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.principalSchema !== void 0) {
          obj.principalSchema = exports.Schemas_Schema.toJSON(message.principalSchema);
        }
        if (message.resourceSchema !== void 0) {
          obj.resourceSchema = exports.Schemas_Schema.toJSON(message.resourceSchema);
        }
        return obj;
      }
    };
    exports.Schemas_IgnoreWhen = {
      fromJSON(object) {
        return {
          actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.actions?.length) {
          obj.actions = message.actions;
        }
        return obj;
      }
    };
    exports.Schemas_Schema = {
      fromJSON(object) {
        return {
          ref: isSet(object.ref) ? globalThis.String(object.ref) : "",
          ignoreWhen: isSet(object.ignoreWhen) ? exports.Schemas_IgnoreWhen.fromJSON(object.ignoreWhen) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.ref !== "") {
          obj.ref = message.ref;
        }
        if (message.ignoreWhen !== void 0) {
          obj.ignoreWhen = exports.Schemas_IgnoreWhen.toJSON(message.ignoreWhen);
        }
        return obj;
      }
    };
    function isObject(value) {
      return typeof value === "object" && value !== null;
    }
    __name(isObject, "isObject");
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/protobuf/cerbos/request/v1/request.js
var require_request2 = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/cerbos/request/v1/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReloadStoreRequest = exports.DeleteSchemaRequest = exports.GetSchemaRequest = exports.ListSchemasRequest = exports.AddOrUpdateSchemaRequest = exports.EnablePolicyRequest = exports.DisablePolicyRequest = exports.GetPolicyRequest = exports.ListPoliciesRequest = exports.ServerInfoRequest = exports.ListAuditLogEntriesRequest_TimeRange = exports.ListAuditLogEntriesRequest = exports.AddOrUpdatePolicyRequest = exports.AuxData_JWT = exports.AuxData = exports.CheckResourcesRequest_ResourceEntry = exports.CheckResourcesRequest = exports.CheckResourceBatchRequest_BatchEntry = exports.CheckResourceBatchRequest = exports.AttributesMap_AttrEntry = exports.AttributesMap = exports.ResourceSet_InstancesEntry = exports.ResourceSet = exports.CheckResourceSetRequest = exports.PlanResourcesRequest = exports.listAuditLogEntriesRequest_KindToJSON = exports.listAuditLogEntriesRequest_KindFromJSON = exports.ListAuditLogEntriesRequest_Kind = exports.protobufPackage = void 0;
    var duration_1 = require_duration();
    var timestamp_1 = require_timestamp();
    var engine_1 = require_engine2();
    var policy_1 = require_policy();
    var schema_1 = require_schema2();
    exports.protobufPackage = "cerbos.request.v1";
    var ListAuditLogEntriesRequest_Kind;
    (function(ListAuditLogEntriesRequest_Kind2) {
      ListAuditLogEntriesRequest_Kind2[ListAuditLogEntriesRequest_Kind2["KIND_UNSPECIFIED"] = 0] = "KIND_UNSPECIFIED";
      ListAuditLogEntriesRequest_Kind2[ListAuditLogEntriesRequest_Kind2["KIND_ACCESS"] = 1] = "KIND_ACCESS";
      ListAuditLogEntriesRequest_Kind2[ListAuditLogEntriesRequest_Kind2["KIND_DECISION"] = 2] = "KIND_DECISION";
    })(ListAuditLogEntriesRequest_Kind || (exports.ListAuditLogEntriesRequest_Kind = ListAuditLogEntriesRequest_Kind = {}));
    function listAuditLogEntriesRequest_KindFromJSON(object) {
      switch (object) {
        case 0:
        case "KIND_UNSPECIFIED":
          return ListAuditLogEntriesRequest_Kind.KIND_UNSPECIFIED;
        case 1:
        case "KIND_ACCESS":
          return ListAuditLogEntriesRequest_Kind.KIND_ACCESS;
        case 2:
        case "KIND_DECISION":
          return ListAuditLogEntriesRequest_Kind.KIND_DECISION;
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum ListAuditLogEntriesRequest_Kind");
      }
    }
    __name(listAuditLogEntriesRequest_KindFromJSON, "listAuditLogEntriesRequest_KindFromJSON");
    exports.listAuditLogEntriesRequest_KindFromJSON = listAuditLogEntriesRequest_KindFromJSON;
    function listAuditLogEntriesRequest_KindToJSON(object) {
      switch (object) {
        case ListAuditLogEntriesRequest_Kind.KIND_UNSPECIFIED:
          return "KIND_UNSPECIFIED";
        case ListAuditLogEntriesRequest_Kind.KIND_ACCESS:
          return "KIND_ACCESS";
        case ListAuditLogEntriesRequest_Kind.KIND_DECISION:
          return "KIND_DECISION";
        default:
          throw new globalThis.Error("Unrecognized enum value " + object + " for enum ListAuditLogEntriesRequest_Kind");
      }
    }
    __name(listAuditLogEntriesRequest_KindToJSON, "listAuditLogEntriesRequest_KindToJSON");
    exports.listAuditLogEntriesRequest_KindToJSON = listAuditLogEntriesRequest_KindToJSON;
    exports.PlanResourcesRequest = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          action: isSet(object.action) ? globalThis.String(object.action) : "",
          principal: isSet(object.principal) ? engine_1.Principal.fromJSON(object.principal) : void 0,
          resource: isSet(object.resource) ? engine_1.PlanResourcesInput_Resource.fromJSON(object.resource) : void 0,
          auxData: isSet(object.auxData) ? exports.AuxData.fromJSON(object.auxData) : void 0,
          includeMeta: isSet(object.includeMeta) ? globalThis.Boolean(object.includeMeta) : false
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.action !== "") {
          obj.action = message.action;
        }
        if (message.principal !== void 0) {
          obj.principal = engine_1.Principal.toJSON(message.principal);
        }
        if (message.resource !== void 0) {
          obj.resource = engine_1.PlanResourcesInput_Resource.toJSON(message.resource);
        }
        if (message.auxData !== void 0) {
          obj.auxData = exports.AuxData.toJSON(message.auxData);
        }
        if (message.includeMeta !== false) {
          obj.includeMeta = message.includeMeta;
        }
        return obj;
      }
    };
    exports.CheckResourceSetRequest = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => globalThis.String(e)) : [],
          principal: isSet(object.principal) ? engine_1.Principal.fromJSON(object.principal) : void 0,
          resource: isSet(object.resource) ? exports.ResourceSet.fromJSON(object.resource) : void 0,
          includeMeta: isSet(object.includeMeta) ? globalThis.Boolean(object.includeMeta) : false,
          auxData: isSet(object.auxData) ? exports.AuxData.fromJSON(object.auxData) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.actions?.length) {
          obj.actions = message.actions;
        }
        if (message.principal !== void 0) {
          obj.principal = engine_1.Principal.toJSON(message.principal);
        }
        if (message.resource !== void 0) {
          obj.resource = exports.ResourceSet.toJSON(message.resource);
        }
        if (message.includeMeta !== false) {
          obj.includeMeta = message.includeMeta;
        }
        if (message.auxData !== void 0) {
          obj.auxData = exports.AuxData.toJSON(message.auxData);
        }
        return obj;
      }
    };
    exports.ResourceSet = {
      fromJSON(object) {
        return {
          kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
          policyVersion: isSet(object.policyVersion) ? globalThis.String(object.policyVersion) : "",
          instances: isObject(object.instances) ? Object.entries(object.instances).reduce((acc, [key, value]) => {
            acc[key] = exports.AttributesMap.fromJSON(value);
            return acc;
          }, {}) : {},
          scope: isSet(object.scope) ? globalThis.String(object.scope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.kind !== "") {
          obj.kind = message.kind;
        }
        if (message.policyVersion !== "") {
          obj.policyVersion = message.policyVersion;
        }
        if (message.instances) {
          const entries = Object.entries(message.instances);
          if (entries.length > 0) {
            obj.instances = {};
            entries.forEach(([k, v]) => {
              obj.instances[k] = exports.AttributesMap.toJSON(v);
            });
          }
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        return obj;
      }
    };
    exports.ResourceSet_InstancesEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.AttributesMap.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.AttributesMap.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.AttributesMap = {
      fromJSON(object) {
        return {
          attr: isObject(object.attr) ? Object.entries(object.attr).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {}) : {}
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.attr) {
          const entries = Object.entries(message.attr);
          if (entries.length > 0) {
            obj.attr = {};
            entries.forEach(([k, v]) => {
              obj.attr[k] = v;
            });
          }
        }
        return obj;
      }
    };
    exports.AttributesMap_AttrEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object?.value) ? object.value : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = message.value;
        }
        return obj;
      }
    };
    exports.CheckResourceBatchRequest = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          principal: isSet(object.principal) ? engine_1.Principal.fromJSON(object.principal) : void 0,
          resources: globalThis.Array.isArray(object?.resources) ? object.resources.map((e) => exports.CheckResourceBatchRequest_BatchEntry.fromJSON(e)) : [],
          auxData: isSet(object.auxData) ? exports.AuxData.fromJSON(object.auxData) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.principal !== void 0) {
          obj.principal = engine_1.Principal.toJSON(message.principal);
        }
        if (message.resources?.length) {
          obj.resources = message.resources.map((e) => exports.CheckResourceBatchRequest_BatchEntry.toJSON(e));
        }
        if (message.auxData !== void 0) {
          obj.auxData = exports.AuxData.toJSON(message.auxData);
        }
        return obj;
      }
    };
    exports.CheckResourceBatchRequest_BatchEntry = {
      fromJSON(object) {
        return {
          actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => globalThis.String(e)) : [],
          resource: isSet(object.resource) ? engine_1.Resource.fromJSON(object.resource) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.actions?.length) {
          obj.actions = message.actions;
        }
        if (message.resource !== void 0) {
          obj.resource = engine_1.Resource.toJSON(message.resource);
        }
        return obj;
      }
    };
    exports.CheckResourcesRequest = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          includeMeta: isSet(object.includeMeta) ? globalThis.Boolean(object.includeMeta) : false,
          principal: isSet(object.principal) ? engine_1.Principal.fromJSON(object.principal) : void 0,
          resources: globalThis.Array.isArray(object?.resources) ? object.resources.map((e) => exports.CheckResourcesRequest_ResourceEntry.fromJSON(e)) : [],
          auxData: isSet(object.auxData) ? exports.AuxData.fromJSON(object.auxData) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.includeMeta !== false) {
          obj.includeMeta = message.includeMeta;
        }
        if (message.principal !== void 0) {
          obj.principal = engine_1.Principal.toJSON(message.principal);
        }
        if (message.resources?.length) {
          obj.resources = message.resources.map((e) => exports.CheckResourcesRequest_ResourceEntry.toJSON(e));
        }
        if (message.auxData !== void 0) {
          obj.auxData = exports.AuxData.toJSON(message.auxData);
        }
        return obj;
      }
    };
    exports.CheckResourcesRequest_ResourceEntry = {
      fromJSON(object) {
        return {
          actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => globalThis.String(e)) : [],
          resource: isSet(object.resource) ? engine_1.Resource.fromJSON(object.resource) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.actions?.length) {
          obj.actions = message.actions;
        }
        if (message.resource !== void 0) {
          obj.resource = engine_1.Resource.toJSON(message.resource);
        }
        return obj;
      }
    };
    exports.AuxData = {
      fromJSON(object) {
        return {
          jwt: isSet(object.jwt) ? exports.AuxData_JWT.fromJSON(object.jwt) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.jwt !== void 0) {
          obj.jwt = exports.AuxData_JWT.toJSON(message.jwt);
        }
        return obj;
      }
    };
    exports.AuxData_JWT = {
      fromJSON(object) {
        return {
          token: isSet(object.token) ? globalThis.String(object.token) : "",
          keySetId: isSet(object.keySetId) ? globalThis.String(object.keySetId) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.token !== "") {
          obj.token = message.token;
        }
        if (message.keySetId !== "") {
          obj.keySetId = message.keySetId;
        }
        return obj;
      }
    };
    exports.AddOrUpdatePolicyRequest = {
      fromJSON(object) {
        return {
          policies: globalThis.Array.isArray(object?.policies) ? object.policies.map((e) => policy_1.Policy.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.policies?.length) {
          obj.policies = message.policies.map((e) => policy_1.Policy.toJSON(e));
        }
        return obj;
      }
    };
    exports.ListAuditLogEntriesRequest = {
      fromJSON(object) {
        return {
          kind: isSet(object.kind) ? listAuditLogEntriesRequest_KindFromJSON(object.kind) : 0,
          filter: isSet(object.tail) ? { $case: "tail", tail: globalThis.Number(object.tail) } : isSet(object.between) ? {
            $case: "between",
            between: exports.ListAuditLogEntriesRequest_TimeRange.fromJSON(object.between)
          } : isSet(object.since) ? { $case: "since", since: duration_1.Duration.fromJSON(object.since) } : isSet(object.lookup) ? { $case: "lookup", lookup: globalThis.String(object.lookup) } : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.kind !== 0) {
          obj.kind = listAuditLogEntriesRequest_KindToJSON(message.kind);
        }
        if (message.filter?.$case === "tail") {
          obj.tail = Math.round(message.filter.tail);
        }
        if (message.filter?.$case === "between") {
          obj.between = exports.ListAuditLogEntriesRequest_TimeRange.toJSON(message.filter.between);
        }
        if (message.filter?.$case === "since") {
          obj.since = duration_1.Duration.toJSON(message.filter.since);
        }
        if (message.filter?.$case === "lookup") {
          obj.lookup = message.filter.lookup;
        }
        return obj;
      }
    };
    exports.ListAuditLogEntriesRequest_TimeRange = {
      fromJSON(object) {
        return {
          start: isSet(object.start) ? fromJsonTimestamp(object.start) : void 0,
          end: isSet(object.end) ? fromJsonTimestamp(object.end) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.start !== void 0) {
          obj.start = message.start.toISOString();
        }
        if (message.end !== void 0) {
          obj.end = message.end.toISOString();
        }
        return obj;
      }
    };
    exports.ServerInfoRequest = {
      fromJSON(_) {
        return {};
      },
      toJSON(_) {
        const obj = {};
        return obj;
      }
    };
    exports.ListPoliciesRequest = {
      fromJSON(object) {
        return {
          includeDisabled: isSet(object.includeDisabled) ? globalThis.Boolean(object.includeDisabled) : false,
          nameRegexp: isSet(object.nameRegexp) ? globalThis.String(object.nameRegexp) : "",
          scopeRegexp: isSet(object.scopeRegexp) ? globalThis.String(object.scopeRegexp) : "",
          versionRegexp: isSet(object.versionRegexp) ? globalThis.String(object.versionRegexp) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.includeDisabled !== false) {
          obj.includeDisabled = message.includeDisabled;
        }
        if (message.nameRegexp !== "") {
          obj.nameRegexp = message.nameRegexp;
        }
        if (message.scopeRegexp !== "") {
          obj.scopeRegexp = message.scopeRegexp;
        }
        if (message.versionRegexp !== "") {
          obj.versionRegexp = message.versionRegexp;
        }
        return obj;
      }
    };
    exports.GetPolicyRequest = {
      fromJSON(object) {
        return {
          id: globalThis.Array.isArray(object?.id) ? object.id.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id?.length) {
          obj.id = message.id;
        }
        return obj;
      }
    };
    exports.DisablePolicyRequest = {
      fromJSON(object) {
        return {
          id: globalThis.Array.isArray(object?.id) ? object.id.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id?.length) {
          obj.id = message.id;
        }
        return obj;
      }
    };
    exports.EnablePolicyRequest = {
      fromJSON(object) {
        return {
          id: globalThis.Array.isArray(object?.id) ? object.id.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id?.length) {
          obj.id = message.id;
        }
        return obj;
      }
    };
    exports.AddOrUpdateSchemaRequest = {
      fromJSON(object) {
        return {
          schemas: globalThis.Array.isArray(object?.schemas) ? object.schemas.map((e) => schema_1.Schema.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.schemas?.length) {
          obj.schemas = message.schemas.map((e) => schema_1.Schema.toJSON(e));
        }
        return obj;
      }
    };
    exports.ListSchemasRequest = {
      fromJSON(_) {
        return {};
      },
      toJSON(_) {
        const obj = {};
        return obj;
      }
    };
    exports.GetSchemaRequest = {
      fromJSON(object) {
        return {
          id: globalThis.Array.isArray(object?.id) ? object.id.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id?.length) {
          obj.id = message.id;
        }
        return obj;
      }
    };
    exports.DeleteSchemaRequest = {
      fromJSON(object) {
        return {
          id: globalThis.Array.isArray(object?.id) ? object.id.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id?.length) {
          obj.id = message.id;
        }
        return obj;
      }
    };
    exports.ReloadStoreRequest = {
      fromJSON(object) {
        return {
          wait: isSet(object.wait) ? globalThis.Boolean(object.wait) : false
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.wait !== false) {
          obj.wait = message.wait;
        }
        return obj;
      }
    };
    function fromTimestamp(t) {
      let millis = (globalThis.Number(t.seconds) || 0) * 1e3;
      millis += (t.nanos || 0) / 1e6;
      return new globalThis.Date(millis);
    }
    __name(fromTimestamp, "fromTimestamp");
    function fromJsonTimestamp(o) {
      if (o instanceof globalThis.Date) {
        return o;
      } else if (typeof o === "string") {
        return new globalThis.Date(o);
      } else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
      }
    }
    __name(fromJsonTimestamp, "fromJsonTimestamp");
    function isObject(value) {
      return typeof value === "object" && value !== null;
    }
    __name(isObject, "isObject");
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/protobuf/google/protobuf/empty.js
var require_empty = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/google/protobuf/empty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Empty = exports.protobufPackage = void 0;
    exports.protobufPackage = "google.protobuf";
    exports.Empty = {
      fromJSON(_) {
        return {};
      },
      toJSON(_) {
        const obj = {};
        return obj;
      }
    };
  }
});

// node_modules/@cerbos/http/lib/protobuf/cerbos/audit/v1/audit.js
var require_audit = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/cerbos/audit/v1/audit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditTrail_EffectivePoliciesEntry = exports.AuditTrail = exports.Peer = exports.MetaValues = exports.DecisionLogEntry_MetadataEntry = exports.DecisionLogEntry_PlanResources = exports.DecisionLogEntry_CheckResources = exports.DecisionLogEntry = exports.AccessLogEntry_MetadataEntry = exports.AccessLogEntry = exports.protobufPackage = void 0;
    var timestamp_1 = require_timestamp();
    var engine_1 = require_engine2();
    var policy_1 = require_policy();
    exports.protobufPackage = "cerbos.audit.v1";
    exports.AccessLogEntry = {
      fromJSON(object) {
        return {
          callId: isSet(object.callId) ? globalThis.String(object.callId) : "",
          timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
          peer: isSet(object.peer) ? exports.Peer.fromJSON(object.peer) : void 0,
          metadata: isObject(object.metadata) ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
            acc[key] = exports.MetaValues.fromJSON(value);
            return acc;
          }, {}) : {},
          method: isSet(object.method) ? globalThis.String(object.method) : "",
          statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.callId !== "") {
          obj.callId = message.callId;
        }
        if (message.timestamp !== void 0) {
          obj.timestamp = message.timestamp.toISOString();
        }
        if (message.peer !== void 0) {
          obj.peer = exports.Peer.toJSON(message.peer);
        }
        if (message.metadata) {
          const entries = Object.entries(message.metadata);
          if (entries.length > 0) {
            obj.metadata = {};
            entries.forEach(([k, v]) => {
              obj.metadata[k] = exports.MetaValues.toJSON(v);
            });
          }
        }
        if (message.method !== "") {
          obj.method = message.method;
        }
        if (message.statusCode !== 0) {
          obj.statusCode = Math.round(message.statusCode);
        }
        return obj;
      }
    };
    exports.AccessLogEntry_MetadataEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.MetaValues.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.MetaValues.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.DecisionLogEntry = {
      fromJSON(object) {
        return {
          callId: isSet(object.callId) ? globalThis.String(object.callId) : "",
          timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
          peer: isSet(object.peer) ? exports.Peer.fromJSON(object.peer) : void 0,
          inputs: globalThis.Array.isArray(object?.inputs) ? object.inputs.map((e) => engine_1.CheckInput.fromJSON(e)) : [],
          outputs: globalThis.Array.isArray(object?.outputs) ? object.outputs.map((e) => engine_1.CheckOutput.fromJSON(e)) : [],
          error: isSet(object.error) ? globalThis.String(object.error) : "",
          method: isSet(object.checkResources) ? {
            $case: "checkResources",
            checkResources: exports.DecisionLogEntry_CheckResources.fromJSON(object.checkResources)
          } : isSet(object.planResources) ? {
            $case: "planResources",
            planResources: exports.DecisionLogEntry_PlanResources.fromJSON(object.planResources)
          } : void 0,
          metadata: isObject(object.metadata) ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
            acc[key] = exports.MetaValues.fromJSON(value);
            return acc;
          }, {}) : {},
          auditTrail: isSet(object.auditTrail) ? exports.AuditTrail.fromJSON(object.auditTrail) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.callId !== "") {
          obj.callId = message.callId;
        }
        if (message.timestamp !== void 0) {
          obj.timestamp = message.timestamp.toISOString();
        }
        if (message.peer !== void 0) {
          obj.peer = exports.Peer.toJSON(message.peer);
        }
        if (message.inputs?.length) {
          obj.inputs = message.inputs.map((e) => engine_1.CheckInput.toJSON(e));
        }
        if (message.outputs?.length) {
          obj.outputs = message.outputs.map((e) => engine_1.CheckOutput.toJSON(e));
        }
        if (message.error !== "") {
          obj.error = message.error;
        }
        if (message.method?.$case === "checkResources") {
          obj.checkResources = exports.DecisionLogEntry_CheckResources.toJSON(message.method.checkResources);
        }
        if (message.method?.$case === "planResources") {
          obj.planResources = exports.DecisionLogEntry_PlanResources.toJSON(message.method.planResources);
        }
        if (message.metadata) {
          const entries = Object.entries(message.metadata);
          if (entries.length > 0) {
            obj.metadata = {};
            entries.forEach(([k, v]) => {
              obj.metadata[k] = exports.MetaValues.toJSON(v);
            });
          }
        }
        if (message.auditTrail !== void 0) {
          obj.auditTrail = exports.AuditTrail.toJSON(message.auditTrail);
        }
        return obj;
      }
    };
    exports.DecisionLogEntry_CheckResources = {
      fromJSON(object) {
        return {
          inputs: globalThis.Array.isArray(object?.inputs) ? object.inputs.map((e) => engine_1.CheckInput.fromJSON(e)) : [],
          outputs: globalThis.Array.isArray(object?.outputs) ? object.outputs.map((e) => engine_1.CheckOutput.fromJSON(e)) : [],
          error: isSet(object.error) ? globalThis.String(object.error) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.inputs?.length) {
          obj.inputs = message.inputs.map((e) => engine_1.CheckInput.toJSON(e));
        }
        if (message.outputs?.length) {
          obj.outputs = message.outputs.map((e) => engine_1.CheckOutput.toJSON(e));
        }
        if (message.error !== "") {
          obj.error = message.error;
        }
        return obj;
      }
    };
    exports.DecisionLogEntry_PlanResources = {
      fromJSON(object) {
        return {
          input: isSet(object.input) ? engine_1.PlanResourcesInput.fromJSON(object.input) : void 0,
          output: isSet(object.output) ? engine_1.PlanResourcesOutput.fromJSON(object.output) : void 0,
          error: isSet(object.error) ? globalThis.String(object.error) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.input !== void 0) {
          obj.input = engine_1.PlanResourcesInput.toJSON(message.input);
        }
        if (message.output !== void 0) {
          obj.output = engine_1.PlanResourcesOutput.toJSON(message.output);
        }
        if (message.error !== "") {
          obj.error = message.error;
        }
        return obj;
      }
    };
    exports.DecisionLogEntry_MetadataEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.MetaValues.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.MetaValues.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.MetaValues = {
      fromJSON(object) {
        return {
          values: globalThis.Array.isArray(object?.values) ? object.values.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.values?.length) {
          obj.values = message.values;
        }
        return obj;
      }
    };
    exports.Peer = {
      fromJSON(object) {
        return {
          address: isSet(object.address) ? globalThis.String(object.address) : "",
          authInfo: isSet(object.authInfo) ? globalThis.String(object.authInfo) : "",
          userAgent: isSet(object.userAgent) ? globalThis.String(object.userAgent) : "",
          forwardedFor: isSet(object.forwardedFor) ? globalThis.String(object.forwardedFor) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.address !== "") {
          obj.address = message.address;
        }
        if (message.authInfo !== "") {
          obj.authInfo = message.authInfo;
        }
        if (message.userAgent !== "") {
          obj.userAgent = message.userAgent;
        }
        if (message.forwardedFor !== "") {
          obj.forwardedFor = message.forwardedFor;
        }
        return obj;
      }
    };
    exports.AuditTrail = {
      fromJSON(object) {
        return {
          effectivePolicies: isObject(object.effectivePolicies) ? Object.entries(object.effectivePolicies).reduce((acc, [key, value]) => {
            acc[key] = policy_1.SourceAttributes.fromJSON(value);
            return acc;
          }, {}) : {}
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.effectivePolicies) {
          const entries = Object.entries(message.effectivePolicies);
          if (entries.length > 0) {
            obj.effectivePolicies = {};
            entries.forEach(([k, v]) => {
              obj.effectivePolicies[k] = policy_1.SourceAttributes.toJSON(v);
            });
          }
        }
        return obj;
      }
    };
    exports.AuditTrail_EffectivePoliciesEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? policy_1.SourceAttributes.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = policy_1.SourceAttributes.toJSON(message.value);
        }
        return obj;
      }
    };
    function fromTimestamp(t) {
      let millis = (globalThis.Number(t.seconds) || 0) * 1e3;
      millis += (t.nanos || 0) / 1e6;
      return new globalThis.Date(millis);
    }
    __name(fromTimestamp, "fromTimestamp");
    function fromJsonTimestamp(o) {
      if (o instanceof globalThis.Date) {
        return o;
      } else if (typeof o === "string") {
        return new globalThis.Date(o);
      } else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
      }
    }
    __name(fromJsonTimestamp, "fromJsonTimestamp");
    function isObject(value) {
      return typeof value === "object" && value !== null;
    }
    __name(isObject, "isObject");
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/protobuf/cerbos/response/v1/response.js
var require_response = __commonJS({
  "node_modules/@cerbos/http/lib/protobuf/cerbos/response/v1/response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReloadStoreResponse = exports.DeleteSchemaResponse = exports.GetSchemaResponse = exports.ListSchemasResponse = exports.AddOrUpdateSchemaResponse = exports.EnablePolicyResponse = exports.DisablePolicyResponse = exports.GetPolicyResponse = exports.ListPoliciesResponse = exports.ServerInfoResponse = exports.ListAuditLogEntriesResponse = exports.AddOrUpdatePolicyResponse = exports.CheckResourcesResponse_ResultEntry_ActionsEntry = exports.CheckResourcesResponse_ResultEntry_Meta_ActionsEntry = exports.CheckResourcesResponse_ResultEntry_Meta_EffectMeta = exports.CheckResourcesResponse_ResultEntry_Meta = exports.CheckResourcesResponse_ResultEntry_Resource = exports.CheckResourcesResponse_ResultEntry = exports.CheckResourcesResponse = exports.CheckResourceBatchResponse_ActionEffectMap_ActionsEntry = exports.CheckResourceBatchResponse_ActionEffectMap = exports.CheckResourceBatchResponse = exports.CheckResourceSetResponse_ResourceInstancesEntry = exports.CheckResourceSetResponse_Meta_ResourceInstancesEntry = exports.CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry = exports.CheckResourceSetResponse_Meta_ActionMeta = exports.CheckResourceSetResponse_Meta_EffectMeta = exports.CheckResourceSetResponse_Meta = exports.CheckResourceSetResponse_ActionEffectMap_ActionsEntry = exports.CheckResourceSetResponse_ActionEffectMap = exports.CheckResourceSetResponse = exports.PlanResourcesResponse_Meta = exports.PlanResourcesResponse = exports.protobufPackage = void 0;
    var empty_1 = require_empty();
    var audit_1 = require_audit();
    var effect_1 = require_effect2();
    var engine_1 = require_engine2();
    var policy_1 = require_policy();
    var schema_1 = require_schema2();
    exports.protobufPackage = "cerbos.response.v1";
    exports.PlanResourcesResponse = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          action: isSet(object.action) ? globalThis.String(object.action) : "",
          resourceKind: isSet(object.resourceKind) ? globalThis.String(object.resourceKind) : "",
          policyVersion: isSet(object.policyVersion) ? globalThis.String(object.policyVersion) : "",
          filter: isSet(object.filter) ? engine_1.PlanResourcesFilter.fromJSON(object.filter) : void 0,
          meta: isSet(object.meta) ? exports.PlanResourcesResponse_Meta.fromJSON(object.meta) : void 0,
          validationErrors: globalThis.Array.isArray(object?.validationErrors) ? object.validationErrors.map((e) => schema_1.ValidationError.fromJSON(e)) : [],
          cerbosCallId: isSet(object.cerbosCallId) ? globalThis.String(object.cerbosCallId) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.action !== "") {
          obj.action = message.action;
        }
        if (message.resourceKind !== "") {
          obj.resourceKind = message.resourceKind;
        }
        if (message.policyVersion !== "") {
          obj.policyVersion = message.policyVersion;
        }
        if (message.filter !== void 0) {
          obj.filter = engine_1.PlanResourcesFilter.toJSON(message.filter);
        }
        if (message.meta !== void 0) {
          obj.meta = exports.PlanResourcesResponse_Meta.toJSON(message.meta);
        }
        if (message.validationErrors?.length) {
          obj.validationErrors = message.validationErrors.map((e) => schema_1.ValidationError.toJSON(e));
        }
        if (message.cerbosCallId !== "") {
          obj.cerbosCallId = message.cerbosCallId;
        }
        return obj;
      }
    };
    exports.PlanResourcesResponse_Meta = {
      fromJSON(object) {
        return {
          filterDebug: isSet(object.filterDebug) ? globalThis.String(object.filterDebug) : "",
          matchedScope: isSet(object.matchedScope) ? globalThis.String(object.matchedScope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.filterDebug !== "") {
          obj.filterDebug = message.filterDebug;
        }
        if (message.matchedScope !== "") {
          obj.matchedScope = message.matchedScope;
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          resourceInstances: isObject(object.resourceInstances) ? Object.entries(object.resourceInstances).reduce((acc, [key, value]) => {
            acc[key] = exports.CheckResourceSetResponse_ActionEffectMap.fromJSON(value);
            return acc;
          }, {}) : {},
          meta: isSet(object.meta) ? exports.CheckResourceSetResponse_Meta.fromJSON(object.meta) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.resourceInstances) {
          const entries = Object.entries(message.resourceInstances);
          if (entries.length > 0) {
            obj.resourceInstances = {};
            entries.forEach(([k, v]) => {
              obj.resourceInstances[k] = exports.CheckResourceSetResponse_ActionEffectMap.toJSON(v);
            });
          }
        }
        if (message.meta !== void 0) {
          obj.meta = exports.CheckResourceSetResponse_Meta.toJSON(message.meta);
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_ActionEffectMap = {
      fromJSON(object) {
        return {
          actions: isObject(object.actions) ? Object.entries(object.actions).reduce((acc, [key, value]) => {
            acc[key] = (0, effect_1.effectFromJSON)(value);
            return acc;
          }, {}) : {},
          validationErrors: globalThis.Array.isArray(object?.validationErrors) ? object.validationErrors.map((e) => schema_1.ValidationError.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.actions) {
          const entries = Object.entries(message.actions);
          if (entries.length > 0) {
            obj.actions = {};
            entries.forEach(([k, v]) => {
              obj.actions[k] = (0, effect_1.effectToJSON)(v);
            });
          }
        }
        if (message.validationErrors?.length) {
          obj.validationErrors = message.validationErrors.map((e) => schema_1.ValidationError.toJSON(e));
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_ActionEffectMap_ActionsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? (0, effect_1.effectFromJSON)(object.value) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== 0) {
          obj.value = (0, effect_1.effectToJSON)(message.value);
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_Meta = {
      fromJSON(object) {
        return {
          resourceInstances: isObject(object.resourceInstances) ? Object.entries(object.resourceInstances).reduce((acc, [key, value]) => {
            acc[key] = exports.CheckResourceSetResponse_Meta_ActionMeta.fromJSON(value);
            return acc;
          }, {}) : {}
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.resourceInstances) {
          const entries = Object.entries(message.resourceInstances);
          if (entries.length > 0) {
            obj.resourceInstances = {};
            entries.forEach(([k, v]) => {
              obj.resourceInstances[k] = exports.CheckResourceSetResponse_Meta_ActionMeta.toJSON(v);
            });
          }
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_Meta_EffectMeta = {
      fromJSON(object) {
        return {
          matchedPolicy: isSet(object.matchedPolicy) ? globalThis.String(object.matchedPolicy) : "",
          matchedScope: isSet(object.matchedScope) ? globalThis.String(object.matchedScope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.matchedPolicy !== "") {
          obj.matchedPolicy = message.matchedPolicy;
        }
        if (message.matchedScope !== "") {
          obj.matchedScope = message.matchedScope;
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_Meta_ActionMeta = {
      fromJSON(object) {
        return {
          actions: isObject(object.actions) ? Object.entries(object.actions).reduce((acc, [key, value]) => {
            acc[key] = exports.CheckResourceSetResponse_Meta_EffectMeta.fromJSON(value);
            return acc;
          }, {}) : {},
          effectiveDerivedRoles: globalThis.Array.isArray(object?.effectiveDerivedRoles) ? object.effectiveDerivedRoles.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.actions) {
          const entries = Object.entries(message.actions);
          if (entries.length > 0) {
            obj.actions = {};
            entries.forEach(([k, v]) => {
              obj.actions[k] = exports.CheckResourceSetResponse_Meta_EffectMeta.toJSON(v);
            });
          }
        }
        if (message.effectiveDerivedRoles?.length) {
          obj.effectiveDerivedRoles = message.effectiveDerivedRoles;
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.CheckResourceSetResponse_Meta_EffectMeta.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.CheckResourceSetResponse_Meta_EffectMeta.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_Meta_ResourceInstancesEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.CheckResourceSetResponse_Meta_ActionMeta.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.CheckResourceSetResponse_Meta_ActionMeta.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.CheckResourceSetResponse_ResourceInstancesEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.CheckResourceSetResponse_ActionEffectMap.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.CheckResourceSetResponse_ActionEffectMap.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.CheckResourceBatchResponse = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          results: globalThis.Array.isArray(object?.results) ? object.results.map((e) => exports.CheckResourceBatchResponse_ActionEffectMap.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.results?.length) {
          obj.results = message.results.map((e) => exports.CheckResourceBatchResponse_ActionEffectMap.toJSON(e));
        }
        return obj;
      }
    };
    exports.CheckResourceBatchResponse_ActionEffectMap = {
      fromJSON(object) {
        return {
          resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
          actions: isObject(object.actions) ? Object.entries(object.actions).reduce((acc, [key, value]) => {
            acc[key] = (0, effect_1.effectFromJSON)(value);
            return acc;
          }, {}) : {},
          validationErrors: globalThis.Array.isArray(object?.validationErrors) ? object.validationErrors.map((e) => schema_1.ValidationError.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
          obj.resourceId = message.resourceId;
        }
        if (message.actions) {
          const entries = Object.entries(message.actions);
          if (entries.length > 0) {
            obj.actions = {};
            entries.forEach(([k, v]) => {
              obj.actions[k] = (0, effect_1.effectToJSON)(v);
            });
          }
        }
        if (message.validationErrors?.length) {
          obj.validationErrors = message.validationErrors.map((e) => schema_1.ValidationError.toJSON(e));
        }
        return obj;
      }
    };
    exports.CheckResourceBatchResponse_ActionEffectMap_ActionsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? (0, effect_1.effectFromJSON)(object.value) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== 0) {
          obj.value = (0, effect_1.effectToJSON)(message.value);
        }
        return obj;
      }
    };
    exports.CheckResourcesResponse = {
      fromJSON(object) {
        return {
          requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
          results: globalThis.Array.isArray(object?.results) ? object.results.map((e) => exports.CheckResourcesResponse_ResultEntry.fromJSON(e)) : [],
          cerbosCallId: isSet(object.cerbosCallId) ? globalThis.String(object.cerbosCallId) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.requestId !== "") {
          obj.requestId = message.requestId;
        }
        if (message.results?.length) {
          obj.results = message.results.map((e) => exports.CheckResourcesResponse_ResultEntry.toJSON(e));
        }
        if (message.cerbosCallId !== "") {
          obj.cerbosCallId = message.cerbosCallId;
        }
        return obj;
      }
    };
    exports.CheckResourcesResponse_ResultEntry = {
      fromJSON(object) {
        return {
          resource: isSet(object.resource) ? exports.CheckResourcesResponse_ResultEntry_Resource.fromJSON(object.resource) : void 0,
          actions: isObject(object.actions) ? Object.entries(object.actions).reduce((acc, [key, value]) => {
            acc[key] = (0, effect_1.effectFromJSON)(value);
            return acc;
          }, {}) : {},
          validationErrors: globalThis.Array.isArray(object?.validationErrors) ? object.validationErrors.map((e) => schema_1.ValidationError.fromJSON(e)) : [],
          meta: isSet(object.meta) ? exports.CheckResourcesResponse_ResultEntry_Meta.fromJSON(object.meta) : void 0,
          outputs: globalThis.Array.isArray(object?.outputs) ? object.outputs.map((e) => engine_1.OutputEntry.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.resource !== void 0) {
          obj.resource = exports.CheckResourcesResponse_ResultEntry_Resource.toJSON(message.resource);
        }
        if (message.actions) {
          const entries = Object.entries(message.actions);
          if (entries.length > 0) {
            obj.actions = {};
            entries.forEach(([k, v]) => {
              obj.actions[k] = (0, effect_1.effectToJSON)(v);
            });
          }
        }
        if (message.validationErrors?.length) {
          obj.validationErrors = message.validationErrors.map((e) => schema_1.ValidationError.toJSON(e));
        }
        if (message.meta !== void 0) {
          obj.meta = exports.CheckResourcesResponse_ResultEntry_Meta.toJSON(message.meta);
        }
        if (message.outputs?.length) {
          obj.outputs = message.outputs.map((e) => engine_1.OutputEntry.toJSON(e));
        }
        return obj;
      }
    };
    exports.CheckResourcesResponse_ResultEntry_Resource = {
      fromJSON(object) {
        return {
          id: isSet(object.id) ? globalThis.String(object.id) : "",
          kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
          policyVersion: isSet(object.policyVersion) ? globalThis.String(object.policyVersion) : "",
          scope: isSet(object.scope) ? globalThis.String(object.scope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.id !== "") {
          obj.id = message.id;
        }
        if (message.kind !== "") {
          obj.kind = message.kind;
        }
        if (message.policyVersion !== "") {
          obj.policyVersion = message.policyVersion;
        }
        if (message.scope !== "") {
          obj.scope = message.scope;
        }
        return obj;
      }
    };
    exports.CheckResourcesResponse_ResultEntry_Meta = {
      fromJSON(object) {
        return {
          actions: isObject(object.actions) ? Object.entries(object.actions).reduce((acc, [key, value]) => {
            acc[key] = exports.CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(value);
            return acc;
          }, {}) : {},
          effectiveDerivedRoles: globalThis.Array.isArray(object?.effectiveDerivedRoles) ? object.effectiveDerivedRoles.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.actions) {
          const entries = Object.entries(message.actions);
          if (entries.length > 0) {
            obj.actions = {};
            entries.forEach(([k, v]) => {
              obj.actions[k] = exports.CheckResourcesResponse_ResultEntry_Meta_EffectMeta.toJSON(v);
            });
          }
        }
        if (message.effectiveDerivedRoles?.length) {
          obj.effectiveDerivedRoles = message.effectiveDerivedRoles;
        }
        return obj;
      }
    };
    exports.CheckResourcesResponse_ResultEntry_Meta_EffectMeta = {
      fromJSON(object) {
        return {
          matchedPolicy: isSet(object.matchedPolicy) ? globalThis.String(object.matchedPolicy) : "",
          matchedScope: isSet(object.matchedScope) ? globalThis.String(object.matchedScope) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.matchedPolicy !== "") {
          obj.matchedPolicy = message.matchedPolicy;
        }
        if (message.matchedScope !== "") {
          obj.matchedScope = message.matchedScope;
        }
        return obj;
      }
    };
    exports.CheckResourcesResponse_ResultEntry_Meta_ActionsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? exports.CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(object.value) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== void 0) {
          obj.value = exports.CheckResourcesResponse_ResultEntry_Meta_EffectMeta.toJSON(message.value);
        }
        return obj;
      }
    };
    exports.CheckResourcesResponse_ResultEntry_ActionsEntry = {
      fromJSON(object) {
        return {
          key: isSet(object.key) ? globalThis.String(object.key) : "",
          value: isSet(object.value) ? (0, effect_1.effectFromJSON)(object.value) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.key !== "") {
          obj.key = message.key;
        }
        if (message.value !== 0) {
          obj.value = (0, effect_1.effectToJSON)(message.value);
        }
        return obj;
      }
    };
    exports.AddOrUpdatePolicyResponse = {
      fromJSON(object) {
        return {
          success: isSet(object.success) ? empty_1.Empty.fromJSON(object.success) : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.success !== void 0) {
          obj.success = empty_1.Empty.toJSON(message.success);
        }
        return obj;
      }
    };
    exports.ListAuditLogEntriesResponse = {
      fromJSON(object) {
        return {
          entry: isSet(object.accessLogEntry) ? {
            $case: "accessLogEntry",
            accessLogEntry: audit_1.AccessLogEntry.fromJSON(object.accessLogEntry)
          } : isSet(object.decisionLogEntry) ? {
            $case: "decisionLogEntry",
            decisionLogEntry: audit_1.DecisionLogEntry.fromJSON(object.decisionLogEntry)
          } : void 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.entry?.$case === "accessLogEntry") {
          obj.accessLogEntry = audit_1.AccessLogEntry.toJSON(message.entry.accessLogEntry);
        }
        if (message.entry?.$case === "decisionLogEntry") {
          obj.decisionLogEntry = audit_1.DecisionLogEntry.toJSON(message.entry.decisionLogEntry);
        }
        return obj;
      }
    };
    exports.ServerInfoResponse = {
      fromJSON(object) {
        return {
          version: isSet(object.version) ? globalThis.String(object.version) : "",
          commit: isSet(object.commit) ? globalThis.String(object.commit) : "",
          buildDate: isSet(object.buildDate) ? globalThis.String(object.buildDate) : ""
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.version !== "") {
          obj.version = message.version;
        }
        if (message.commit !== "") {
          obj.commit = message.commit;
        }
        if (message.buildDate !== "") {
          obj.buildDate = message.buildDate;
        }
        return obj;
      }
    };
    exports.ListPoliciesResponse = {
      fromJSON(object) {
        return {
          policyIds: globalThis.Array.isArray(object?.policyIds) ? object.policyIds.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.policyIds?.length) {
          obj.policyIds = message.policyIds;
        }
        return obj;
      }
    };
    exports.GetPolicyResponse = {
      fromJSON(object) {
        return {
          policies: globalThis.Array.isArray(object?.policies) ? object.policies.map((e) => policy_1.Policy.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.policies?.length) {
          obj.policies = message.policies.map((e) => policy_1.Policy.toJSON(e));
        }
        return obj;
      }
    };
    exports.DisablePolicyResponse = {
      fromJSON(object) {
        return {
          disabledPolicies: isSet(object.disabledPolicies) ? globalThis.Number(object.disabledPolicies) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.disabledPolicies !== 0) {
          obj.disabledPolicies = Math.round(message.disabledPolicies);
        }
        return obj;
      }
    };
    exports.EnablePolicyResponse = {
      fromJSON(object) {
        return {
          enabledPolicies: isSet(object.enabledPolicies) ? globalThis.Number(object.enabledPolicies) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.enabledPolicies !== 0) {
          obj.enabledPolicies = Math.round(message.enabledPolicies);
        }
        return obj;
      }
    };
    exports.AddOrUpdateSchemaResponse = {
      fromJSON(_) {
        return {};
      },
      toJSON(_) {
        const obj = {};
        return obj;
      }
    };
    exports.ListSchemasResponse = {
      fromJSON(object) {
        return {
          schemaIds: globalThis.Array.isArray(object?.schemaIds) ? object.schemaIds.map((e) => globalThis.String(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.schemaIds?.length) {
          obj.schemaIds = message.schemaIds;
        }
        return obj;
      }
    };
    exports.GetSchemaResponse = {
      fromJSON(object) {
        return {
          schemas: globalThis.Array.isArray(object?.schemas) ? object.schemas.map((e) => schema_1.Schema.fromJSON(e)) : []
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.schemas?.length) {
          obj.schemas = message.schemas.map((e) => schema_1.Schema.toJSON(e));
        }
        return obj;
      }
    };
    exports.DeleteSchemaResponse = {
      fromJSON(object) {
        return {
          deletedSchemas: isSet(object.deletedSchemas) ? globalThis.Number(object.deletedSchemas) : 0
        };
      },
      toJSON(message) {
        const obj = {};
        if (message.deletedSchemas !== 0) {
          obj.deletedSchemas = Math.round(message.deletedSchemas);
        }
        return obj;
      }
    };
    exports.ReloadStoreResponse = {
      fromJSON(_) {
        return {};
      },
      toJSON(_) {
        const obj = {};
        return obj;
      }
    };
    function isObject(value) {
      return typeof value === "object" && value !== null;
    }
    __name(isObject, "isObject");
    function isSet(value) {
      return value !== null && value !== void 0;
    }
    __name(isSet, "isSet");
  }
});

// node_modules/@cerbos/http/lib/transport.js
var require_transport = __commonJS({
  "node_modules/@cerbos/http/lib/transport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.eachLine = exports.Transport = void 0;
    var qs_1 = require_lib2();
    var core_1 = require_lib();
    var request_1 = require_request2();
    var response_1 = require_response();
    var services = {
      admin: {
        addOrUpdatePolicy: {
          method: "POST",
          path: "/admin/policy",
          requestType: request_1.AddOrUpdatePolicyRequest,
          responseType: response_1.AddOrUpdatePolicyResponse,
          serializeRequest: serializeRequestToBody
        },
        addOrUpdateSchema: {
          method: "POST",
          path: "/admin/schema",
          requestType: request_1.AddOrUpdateSchemaRequest,
          responseType: response_1.AddOrUpdateSchemaResponse,
          serializeRequest: serializeRequestToBody
        },
        deleteSchema: {
          method: "DELETE",
          path: "/admin/schema",
          requestType: request_1.DeleteSchemaRequest,
          responseType: response_1.DeleteSchemaResponse,
          serializeRequest: serializeRequestToQueryString
        },
        disablePolicy: {
          method: "DELETE",
          path: "/admin/policy",
          requestType: request_1.DisablePolicyRequest,
          responseType: response_1.DisablePolicyResponse,
          serializeRequest: serializeRequestToQueryString
        },
        enablePolicy: {
          method: "POST",
          path: "/admin/policy/enable",
          requestType: request_1.EnablePolicyRequest,
          responseType: response_1.EnablePolicyResponse,
          serializeRequest: serializeRequestToQueryString
        },
        getPolicy: {
          method: "GET",
          path: "/admin/policy",
          requestType: request_1.GetPolicyRequest,
          responseType: response_1.GetPolicyResponse,
          serializeRequest: serializeRequestToQueryString
        },
        getSchema: {
          method: "GET",
          path: "/admin/schema",
          requestType: request_1.GetSchemaRequest,
          responseType: response_1.GetSchemaResponse,
          serializeRequest: serializeRequestToQueryString
        },
        listAuditLogEntries: {
          method: "GET",
          path: "/admin/auditlog/list/",
          requestType: request_1.ListAuditLogEntriesRequest,
          responseType: response_1.ListAuditLogEntriesResponse,
          serializeRequest: serializeListAuditLogEntriesRequest
        },
        listPolicies: {
          method: "GET",
          path: "/admin/policies",
          requestType: request_1.ListPoliciesRequest,
          responseType: response_1.ListPoliciesResponse,
          serializeRequest: serializeRequestToQueryString
        },
        listSchemas: {
          method: "GET",
          path: "/admin/schemas",
          requestType: request_1.ListSchemasRequest,
          responseType: response_1.ListSchemasResponse,
          serializeRequest: serializeRequestToQueryString
        },
        reloadStore: {
          method: "GET",
          path: "/admin/store/reload",
          requestType: request_1.ReloadStoreRequest,
          responseType: response_1.ReloadStoreResponse,
          serializeRequest: serializeRequestToQueryString
        }
      },
      cerbos: {
        checkResources: {
          method: "POST",
          path: "/api/check/resources",
          requestType: request_1.CheckResourcesRequest,
          responseType: response_1.CheckResourcesResponse,
          serializeRequest: serializeRequestToBody
        },
        planResources: {
          method: "POST",
          path: "/api/plan/resources",
          requestType: request_1.PlanResourcesRequest,
          responseType: response_1.PlanResourcesResponse,
          serializeRequest: serializeRequestToBody
        },
        serverInfo: {
          method: "GET",
          path: "/api/server_info",
          requestType: request_1.ServerInfoRequest,
          responseType: response_1.ServerInfoResponse,
          serializeRequest: serializeRequestToQueryString
        }
      }
    };
    var Transport = class {
      static {
        __name(this, "Transport");
      }
      baseUrl;
      userAgent;
      constructor(baseUrl, userAgent) {
        this.baseUrl = baseUrl;
        this.userAgent = userAgent;
      }
      async unary(service, method, request, headers, abortHandler) {
        const { response, responseType } = await this.fetch(service, method, request, headers, abortHandler);
        if (!response.ok) {
          throw core_1.NotOK.fromJSON(await response.text());
        }
        return responseType.fromJSON(await response.json());
      }
      async *serverStream(service, method, request, headers, abortHandler) {
        const { response, responseType } = await this.fetch(service, method, request, headers, abortHandler);
        try {
          const lines = response.body ? eachLine(response.body) : [];
          for await (const line of lines) {
            const message = JSON.parse(line);
            if (!(0, core_1._isObject)(message)) {
              throw new Error(`Unexpected message: wanted object, got ${line}`);
            }
            const { result, error } = message;
            if (error) {
              throw core_1.NotOK.fromJSON(JSON.stringify(error));
            }
            if (!result) {
              throw new Error(`Missing result in ${line}`);
            }
            yield responseType.fromJSON(result);
          }
        } catch (error) {
          response.body?.cancel().catch(() => {
          });
          abortHandler.throwIfAborted();
          if (error instanceof core_1.NotOK) {
            throw error;
          }
          throw new core_1.NotOK(core_1.Status.INTERNAL, error instanceof Error ? `Invalid stream: ${error.message}` : "Invalid stream", { cause: error });
        }
      }
      async fetch(service, method, request, headers, abortHandler) {
        const { method: requestMethod, path, requestType, responseType, serializeRequest } = services[service][method];
        headers.set("User-Agent", this.userAgent);
        const init = {
          url: this.baseUrl + path,
          method: requestMethod,
          headers
        };
        if (abortHandler.signal) {
          init.signal = abortHandler.signal;
        }
        const { url, ...rest } = serializeRequest(request, requestType, init);
        try {
          return {
            response: await fetch(url, rest),
            responseType
          };
        } catch (error) {
          abortHandler.throwIfAborted();
          throw new core_1.NotOK(core_1.Status.UNKNOWN, error instanceof Error ? `Request failed: ${error.message}` : "Request failed", { cause: error });
        }
      }
    };
    exports.Transport = Transport;
    function serializeRequestToBody(request, requestType, init) {
      return {
        ...init,
        body: JSON.stringify(requestType.toJSON(request))
      };
    }
    __name(serializeRequestToBody, "serializeRequestToBody");
    function serializeRequestToQueryString(request, requestType, { url, ...init }) {
      return {
        ...init,
        url: `${url}?${queryStringifyRequest(requestType, request)}`
      };
    }
    __name(serializeRequestToQueryString, "serializeRequestToQueryString");
    function serializeListAuditLogEntriesRequest({ kind, ...rest }, requestType, { url, ...init }) {
      return {
        ...init,
        url: `${url}${request_1.ListAuditLogEntriesRequest_Kind[kind]}?${queryStringifyRequest(requestType, { kind: 0, ...rest })}`
      };
    }
    __name(serializeListAuditLogEntriesRequest, "serializeListAuditLogEntriesRequest");
    function queryStringifyRequest(requestType, request) {
      return (0, qs_1.stringify)(requestType.toJSON(request), {
        allowDots: true,
        arrayFormat: "repeat"
      });
    }
    __name(queryStringifyRequest, "queryStringifyRequest");
    async function* eachLine(stream) {
      const utf8Decoder = new TextDecoder("utf-8", { fatal: true });
      let buffer = "";
      let start = 0;
      for await (const chunk of stream) {
        buffer += utf8Decoder.decode(chunk, { stream: true });
        let end;
        while ((end = buffer.indexOf("\n", start)) >= 0) {
          yield buffer.slice(start, end);
          start = end + 1;
        }
        buffer = buffer.slice(start);
        start = 0;
      }
      if (buffer.length > 0) {
        yield buffer;
      }
    }
    __name(eachLine, "eachLine");
    exports.eachLine = eachLine;
  }
});

// node_modules/@cerbos/http/package.json
var require_package = __commonJS({
  "node_modules/@cerbos/http/package.json"(exports, module) {
    module.exports = {
      name: "@cerbos/http",
      version: "0.19.1",
      description: "Client library for interacting with the Cerbos policy decision point service over HTTP from browser-based applications",
      repository: {
        type: "git",
        url: "git+https://github.com/cerbos/cerbos-sdk-javascript.git",
        directory: "packages/http"
      },
      homepage: "https://github.com/cerbos/cerbos-sdk-javascript/tree/main/packages/http#readme",
      bugs: {
        url: "https://github.com/cerbos/cerbos-sdk-javascript/issues"
      },
      author: "Cerbos <help@cerbos.dev> (https://cerbos.dev)",
      license: "Apache-2.0",
      engines: {
        node: ">= 18"
      },
      main: "./lib/index.js",
      exports: {
        ".": {
          types: "./lib/index.d.ts",
          default: "./lib/index.js"
        }
      },
      types: "./lib/index.d.ts",
      files: [
        "lib/**/*.d.ts",
        "lib/**/*.d.ts.map",
        "lib/**/*.js",
        "lib/**/*.js.map",
        "src/**/*.ts"
      ],
      keywords: [
        "Cerbos",
        "authorization",
        "access control",
        "roles",
        "permissions",
        "policy",
        "security",
        "role-based access control",
        "RBAC",
        "attribute-based access control",
        "ABAC",
        "policy decision point",
        "PDP",
        "HTTP",
        "REST",
        "browser"
      ],
      dependencies: {
        "@cerbos/core": "^0.18.1",
        qs: "^6.12.1"
      },
      devDependencies: {
        "@types/qs": "6.9.15"
      },
      publishConfig: {
        access: "public",
        provenance: true
      }
    };
  }
});

// node_modules/@cerbos/http/lib/client.js
var require_client2 = __commonJS({
  "node_modules/@cerbos/http/lib/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HTTP = void 0;
    var core_1 = require_lib();
    var transport_1 = require_transport();
    var { version } = require_package();
    var defaultUserAgent = `cerbos-sdk-javascript-http/${version}`;
    var HTTP = class extends core_1.Client {
      static {
        __name(this, "HTTP");
      }
      /**
       * Create a client for interacting with the Cerbos policy decision point (PDP) server over HTTP.
       *
       * @param baseUrl - base Cerbos PDP server URL (the Cerbos REST API must be available at `${baseUrl}/api/`).
       * @param options - additional client settings.
       *
       * @example
       * Connect via HTTP:
       *
       * ```typescript
       * const cerbos = new HTTP("http://localhost:3592");
       * ```
       *
       * @example
       * Connect to the hosted demo PDP to experiment {@link https://play.cerbos.dev | in the playground}:
       *
       * ```typescript
       * const cerbos = new HTTP("https://demo-pdp.cerbos.cloud", { playgroundInstance: "gE623b0180QlsG5a4QIN6UOZ6f3iSFW2" });
       * ```
       */
      constructor(baseUrl, options = {}) {
        const userAgent = `${options.userAgent ? `${options.userAgent} ` : ""}${defaultUserAgent}`;
        super(new transport_1.Transport(baseUrl, userAgent), options);
      }
    };
    exports.HTTP = HTTP;
  }
});

// node_modules/@cerbos/http/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@cerbos/http/lib/index.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_client2(), exports);
  }
});
export default require_lib3();
/*! For license information please see index.js.LEGAL.txt */
