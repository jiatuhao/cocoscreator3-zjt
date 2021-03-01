"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShadowFlow = void 0;

var _index = require("../../data/decorators/index.js");

var _define = require("../define.js");

var _renderFlow = require("../render-flow.js");

var _enum = require("../forward/enum.js");

var _shadowStage = require("./shadow-stage.js");

var _index2 = require("../../gfx/index.js");

var _pipelineSerialization = require("../pipeline-serialization.js");

var _shadows = require("../../renderer/scene/shadows.js");

var _sceneCulling = require("../forward/scene-culling.js");

var _dec, _class, _class2, _temp;

/**
 * @en Shadow map render flow
 * @zh 阴影贴图绘制流程
 */
let ShadowFlow = (_dec = (0, _index.ccclass)('ShadowFlow'), _dec(_class = (_temp = _class2 = class ShadowFlow extends _renderFlow.RenderFlow {
  constructor(...args) {
    super(...args);
    this._shadowRenderPass = null;
  }

  initialize(info) {
    super.initialize(info);

    if (this._stages.length === 0) {
      // add shadowMap-stages
      const shadowMapStage = new _shadowStage.ShadowStage();
      shadowMapStage.initialize(_shadowStage.ShadowStage.initInfo);

      this._stages.push(shadowMapStage);
    }

    return true;
  }

  render(camera) {
    const pipeline = this._pipeline;
    const shadowInfo = pipeline.shadows;

    if (!shadowInfo.enabled || shadowInfo.type !== _shadows.ShadowType.ShadowMap) {
      return;
    }

    const validLights = (0, _sceneCulling.lightCollecting)(camera, shadowInfo.maxReceived);
    (0, _sceneCulling.shadowCollecting)(pipeline, camera);

    if (pipeline.shadowObjects.length === 0) {
      this.clearShadowMap(validLights, camera);
      return;
    }

    for (let l = 0; l < validLights.length; l++) {
      const light = validLights[l];

      if (!pipeline.shadowFrameBufferMap.has(light)) {
        this._initShadowFrameBuffer(pipeline, light);
      }

      const shadowFrameBuffer = pipeline.shadowFrameBufferMap.get(light);

      if (shadowInfo.shadowMapDirty) {
        this.resizeShadowMap(light, shadowInfo.size);
      }

      for (let i = 0; i < this._stages.length; i++) {
        const shadowStage = this._stages[i];
        shadowStage.setUsage(light, shadowFrameBuffer);
        shadowStage.render(camera);
      }
    } // After the shadowMap rendering of all lights is completed,
    // restore the ShadowUBO data of the main light.


    pipeline.updateShadowUBO(camera);
  }

  destroy() {
    super.destroy();
    const shadowFrameBuffers = Array.from(this._pipeline.shadowFrameBufferMap.values());

    for (let i = 0; i < shadowFrameBuffers.length; i++) {
      const frameBuffer = shadowFrameBuffers[i];

      if (!frameBuffer) {
        continue;
      }

      const renderTargets = frameBuffer.colorTextures;

      for (let j = 0; j < renderTargets.length; j++) {
        const renderTarget = renderTargets[i];

        if (renderTarget) {
          renderTarget.destroy();
        }
      }

      renderTargets.length = 0;
      const depth = frameBuffer.depthStencilTexture;

      if (depth) {
        depth.destroy();
      }

      frameBuffer.destroy();
    }

    this._pipeline.shadowFrameBufferMap.clear();

    if (this._shadowRenderPass) {
      this._shadowRenderPass.destroy();
    }
  }

  _initShadowFrameBuffer(pipeline, light) {
    const device = pipeline.device;
    const shadowMapSize = pipeline.shadows.size;

    if (!this._shadowRenderPass) {
      const colorAttachment = new _index2.ColorAttachment();
      colorAttachment.format = _index2.Format.RGBA8;
      colorAttachment.loadOp = _index2.LoadOp.CLEAR; // should clear color attachment

      colorAttachment.storeOp = _index2.StoreOp.STORE;
      colorAttachment.sampleCount = 1;
      colorAttachment.beginLayout = _index2.TextureLayout.UNDEFINED;
      colorAttachment.endLayout = _index2.TextureLayout.PRESENT_SRC;
      const depthStencilAttachment = new _index2.DepthStencilAttachment();
      depthStencilAttachment.format = device.depthStencilFormat;
      depthStencilAttachment.depthLoadOp = _index2.LoadOp.CLEAR;
      depthStencilAttachment.depthStoreOp = _index2.StoreOp.DISCARD;
      depthStencilAttachment.stencilLoadOp = _index2.LoadOp.CLEAR;
      depthStencilAttachment.stencilStoreOp = _index2.StoreOp.DISCARD;
      depthStencilAttachment.sampleCount = 1;
      depthStencilAttachment.beginLayout = _index2.TextureLayout.UNDEFINED;
      depthStencilAttachment.endLayout = _index2.TextureLayout.DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
      const renderPassInfo = new _index2.RenderPassInfo([colorAttachment], depthStencilAttachment);
      this._shadowRenderPass = device.createRenderPass(renderPassInfo);
    }

    const shadowRenderTargets = [];
    shadowRenderTargets.push(device.createTexture(new _index2.TextureInfo(_index2.TextureType.TEX2D, _index2.TextureUsageBit.COLOR_ATTACHMENT | _index2.TextureUsageBit.SAMPLED, _index2.Format.RGBA8, shadowMapSize.x, shadowMapSize.y)));
    const depth = device.createTexture(new _index2.TextureInfo(_index2.TextureType.TEX2D, _index2.TextureUsageBit.DEPTH_STENCIL_ATTACHMENT, device.depthStencilFormat, shadowMapSize.x, shadowMapSize.y));
    const shadowFrameBuffer = device.createFramebuffer(new _index2.FramebufferInfo(this._shadowRenderPass, shadowRenderTargets, depth)); // Cache frameBuffer

    pipeline.shadowFrameBufferMap.set(light, shadowFrameBuffer);
  }

  clearShadowMap(validLights, camera) {
    const pipeline = this._pipeline;

    for (let l = 0; l < validLights.length; l++) {
      const light = validLights[l];
      const shadowFrameBuffer = pipeline.shadowFrameBufferMap.get(light);

      if (!pipeline.shadowFrameBufferMap.has(light)) {
        continue;
      }

      for (let i = 0; i < this._stages.length; i++) {
        const shadowStage = this._stages[i];
        shadowStage.setUsage(light, shadowFrameBuffer);
        shadowStage.clearFramebuffer(camera);
      }
    }
  }

  resizeShadowMap(light, size) {
    const width = size.x;
    const height = size.y;
    const pipeline = this._pipeline;

    if (pipeline.shadowFrameBufferMap.has(light)) {
      const frameBuffer = pipeline.shadowFrameBufferMap.get(light);

      if (!frameBuffer) {
        return;
      }

      const renderTargets = frameBuffer.colorTextures;

      if (renderTargets && renderTargets.length > 0) {
        for (let j = 0; j < renderTargets.length; j++) {
          const renderTarget = renderTargets[j];

          if (renderTarget) {
            renderTarget.resize(width, height);
          }
        }
      }

      const depth = frameBuffer.depthStencilTexture;

      if (depth) {
        depth.resize(width, height);
      }

      const shadowRenderPass = frameBuffer.renderPass;
      frameBuffer.destroy();
      frameBuffer.initialize(new _index2.FramebufferInfo(shadowRenderPass, renderTargets, depth));
    }
  }

}, _class2.initInfo = {
  name: _define.PIPELINE_FLOW_SHADOW,
  priority: _enum.ForwardFlowPriority.SHADOW,
  tag: _pipelineSerialization.RenderFlowTag.SCENE,
  stages: []
}, _temp)) || _class);
exports.ShadowFlow = ShadowFlow;