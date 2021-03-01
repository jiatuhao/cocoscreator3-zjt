"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  pipeline: true,
  RenderPipeline: true,
  RenderFlow: true,
  RenderStage: true,
  ForwardPipeline: true,
  ForwardFlow: true,
  ForwardStage: true,
  ShadowFlow: true,
  ShadowStage: true,
  InstancedBuffer: true,
  PipelineStateManager: true
};
Object.defineProperty(exports, "RenderPipeline", {
  enumerable: true,
  get: function () {
    return _renderPipeline.RenderPipeline;
  }
});
Object.defineProperty(exports, "RenderFlow", {
  enumerable: true,
  get: function () {
    return _renderFlow.RenderFlow;
  }
});
Object.defineProperty(exports, "RenderStage", {
  enumerable: true,
  get: function () {
    return _renderStage.RenderStage;
  }
});
Object.defineProperty(exports, "ForwardPipeline", {
  enumerable: true,
  get: function () {
    return _forwardPipeline.ForwardPipeline;
  }
});
Object.defineProperty(exports, "ForwardFlow", {
  enumerable: true,
  get: function () {
    return _forwardFlow.ForwardFlow;
  }
});
Object.defineProperty(exports, "ForwardStage", {
  enumerable: true,
  get: function () {
    return _forwardStage.ForwardStage;
  }
});
Object.defineProperty(exports, "ShadowFlow", {
  enumerable: true,
  get: function () {
    return _shadowFlow.ShadowFlow;
  }
});
Object.defineProperty(exports, "ShadowStage", {
  enumerable: true,
  get: function () {
    return _shadowStage.ShadowStage;
  }
});
Object.defineProperty(exports, "InstancedBuffer", {
  enumerable: true,
  get: function () {
    return _instancedBuffer.InstancedBuffer;
  }
});
Object.defineProperty(exports, "PipelineStateManager", {
  enumerable: true,
  get: function () {
    return _pipelineStateManager.PipelineStateManager;
  }
});
exports.pipeline = void 0;

var pipeline = _interopRequireWildcard(require("./define.js"));

exports.pipeline = pipeline;

var _passPhase = require("./pass-phase.js");

Object.keys(_passPhase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _passPhase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _passPhase[key];
    }
  });
});

var _renderPipeline = require("./render-pipeline.js");

var _renderFlow = require("./render-flow.js");

var _renderStage = require("./render-stage.js");

var _forwardPipeline = require("./forward/forward-pipeline.js");

var _forwardFlow = require("./forward/forward-flow.js");

var _forwardStage = require("./forward/forward-stage.js");

var _shadowFlow = require("./shadow/shadow-flow.js");

var _shadowStage = require("./shadow/shadow-stage.js");

var _instancedBuffer = require("./instanced-buffer.js");

var _pipelineStateManager = require("./pipeline-state-manager.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }