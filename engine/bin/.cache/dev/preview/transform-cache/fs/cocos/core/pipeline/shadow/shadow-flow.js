System.register("q-bundled:///fs/cocos/core/pipeline/shadow/shadow-flow.js", ["../../data/decorators/index.js", "../define.js", "../render-flow.js", "../forward/enum.js", "./shadow-stage.js", "../../gfx/index.js", "../pipeline-serialization.js", "../../renderer/scene/shadows.js", "../forward/scene-culling.js"], function (_export, _context) {
  "use strict";

  var ccclass, PIPELINE_FLOW_SHADOW, RenderFlow, ForwardFlowPriority, ShadowStage, LoadOp, StoreOp, TextureLayout, Format, TextureType, TextureUsageBit, ColorAttachment, DepthStencilAttachment, RenderPassInfo, TextureInfo, FramebufferInfo, RenderFlowTag, ShadowType, lightCollecting, shadowCollecting, _dec, _class, _class2, _temp, ShadowFlow;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      PIPELINE_FLOW_SHADOW = _defineJs.PIPELINE_FLOW_SHADOW;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_forwardEnumJs) {
      ForwardFlowPriority = _forwardEnumJs.ForwardFlowPriority;
    }, function (_shadowStageJs) {
      ShadowStage = _shadowStageJs.ShadowStage;
    }, function (_gfxIndexJs) {
      LoadOp = _gfxIndexJs.LoadOp;
      StoreOp = _gfxIndexJs.StoreOp;
      TextureLayout = _gfxIndexJs.TextureLayout;
      Format = _gfxIndexJs.Format;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      TextureInfo = _gfxIndexJs.TextureInfo;
      FramebufferInfo = _gfxIndexJs.FramebufferInfo;
    }, function (_pipelineSerializationJs) {
      RenderFlowTag = _pipelineSerializationJs.RenderFlowTag;
    }, function (_rendererSceneShadowsJs) {
      ShadowType = _rendererSceneShadowsJs.ShadowType;
    }, function (_forwardSceneCullingJs) {
      lightCollecting = _forwardSceneCullingJs.lightCollecting;
      shadowCollecting = _forwardSceneCullingJs.shadowCollecting;
    }],
    execute: function () {
      /**
       * @en Shadow map render flow
       * @zh 阴影贴图绘制流程
       */
      _export("ShadowFlow", ShadowFlow = (_dec = ccclass('ShadowFlow'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_RenderFlow) {
        _inheritsLoose(ShadowFlow, _RenderFlow);

        function ShadowFlow() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _RenderFlow.call.apply(_RenderFlow, [this].concat(args)) || this;
          _this._shadowRenderPass = null;
          return _this;
        }

        var _proto = ShadowFlow.prototype;

        _proto.initialize = function initialize(info) {
          _RenderFlow.prototype.initialize.call(this, info);

          if (this._stages.length === 0) {
            // add shadowMap-stages
            var shadowMapStage = new ShadowStage();
            shadowMapStage.initialize(ShadowStage.initInfo);

            this._stages.push(shadowMapStage);
          }

          return true;
        };

        _proto.render = function render(camera) {
          var pipeline = this._pipeline;
          var shadowInfo = pipeline.shadows;

          if (!shadowInfo.enabled || shadowInfo.type !== ShadowType.ShadowMap) {
            return;
          }

          var validLights = lightCollecting(camera, shadowInfo.maxReceived);
          shadowCollecting(pipeline, camera);

          if (pipeline.shadowObjects.length === 0) {
            this.clearShadowMap(validLights, camera);
            return;
          }

          for (var l = 0; l < validLights.length; l++) {
            var light = validLights[l];

            if (!pipeline.shadowFrameBufferMap.has(light)) {
              this._initShadowFrameBuffer(pipeline, light);
            }

            var shadowFrameBuffer = pipeline.shadowFrameBufferMap.get(light);

            if (shadowInfo.shadowMapDirty) {
              this.resizeShadowMap(light, shadowInfo.size);
            }

            for (var i = 0; i < this._stages.length; i++) {
              var shadowStage = this._stages[i];
              shadowStage.setUsage(light, shadowFrameBuffer);
              shadowStage.render(camera);
            }
          } // After the shadowMap rendering of all lights is completed,
          // restore the ShadowUBO data of the main light.


          pipeline.updateShadowUBO(camera);
        };

        _proto.destroy = function destroy() {
          _RenderFlow.prototype.destroy.call(this);

          var shadowFrameBuffers = Array.from(this._pipeline.shadowFrameBufferMap.values());

          for (var i = 0; i < shadowFrameBuffers.length; i++) {
            var frameBuffer = shadowFrameBuffers[i];

            if (!frameBuffer) {
              continue;
            }

            var renderTargets = frameBuffer.colorTextures;

            for (var j = 0; j < renderTargets.length; j++) {
              var renderTarget = renderTargets[i];

              if (renderTarget) {
                renderTarget.destroy();
              }
            }

            renderTargets.length = 0;
            var depth = frameBuffer.depthStencilTexture;

            if (depth) {
              depth.destroy();
            }

            frameBuffer.destroy();
          }

          this._pipeline.shadowFrameBufferMap.clear();

          if (this._shadowRenderPass) {
            this._shadowRenderPass.destroy();
          }
        };

        _proto._initShadowFrameBuffer = function _initShadowFrameBuffer(pipeline, light) {
          var device = pipeline.device;
          var shadowMapSize = pipeline.shadows.size;

          if (!this._shadowRenderPass) {
            var colorAttachment = new ColorAttachment();
            colorAttachment.format = Format.RGBA8;
            colorAttachment.loadOp = LoadOp.CLEAR; // should clear color attachment

            colorAttachment.storeOp = StoreOp.STORE;
            colorAttachment.sampleCount = 1;
            colorAttachment.beginLayout = TextureLayout.UNDEFINED;
            colorAttachment.endLayout = TextureLayout.PRESENT_SRC;
            var depthStencilAttachment = new DepthStencilAttachment();
            depthStencilAttachment.format = device.depthStencilFormat;
            depthStencilAttachment.depthLoadOp = LoadOp.CLEAR;
            depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
            depthStencilAttachment.stencilLoadOp = LoadOp.CLEAR;
            depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
            depthStencilAttachment.sampleCount = 1;
            depthStencilAttachment.beginLayout = TextureLayout.UNDEFINED;
            depthStencilAttachment.endLayout = TextureLayout.DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
            var renderPassInfo = new RenderPassInfo([colorAttachment], depthStencilAttachment);
            this._shadowRenderPass = device.createRenderPass(renderPassInfo);
          }

          var shadowRenderTargets = [];
          shadowRenderTargets.push(device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, Format.RGBA8, shadowMapSize.x, shadowMapSize.y)));
          var depth = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.DEPTH_STENCIL_ATTACHMENT, device.depthStencilFormat, shadowMapSize.x, shadowMapSize.y));
          var shadowFrameBuffer = device.createFramebuffer(new FramebufferInfo(this._shadowRenderPass, shadowRenderTargets, depth)); // Cache frameBuffer

          pipeline.shadowFrameBufferMap.set(light, shadowFrameBuffer);
        };

        _proto.clearShadowMap = function clearShadowMap(validLights, camera) {
          var pipeline = this._pipeline;

          for (var l = 0; l < validLights.length; l++) {
            var light = validLights[l];
            var shadowFrameBuffer = pipeline.shadowFrameBufferMap.get(light);

            if (!pipeline.shadowFrameBufferMap.has(light)) {
              continue;
            }

            for (var i = 0; i < this._stages.length; i++) {
              var shadowStage = this._stages[i];
              shadowStage.setUsage(light, shadowFrameBuffer);
              shadowStage.clearFramebuffer(camera);
            }
          }
        };

        _proto.resizeShadowMap = function resizeShadowMap(light, size) {
          var width = size.x;
          var height = size.y;
          var pipeline = this._pipeline;

          if (pipeline.shadowFrameBufferMap.has(light)) {
            var frameBuffer = pipeline.shadowFrameBufferMap.get(light);

            if (!frameBuffer) {
              return;
            }

            var renderTargets = frameBuffer.colorTextures;

            if (renderTargets && renderTargets.length > 0) {
              for (var j = 0; j < renderTargets.length; j++) {
                var renderTarget = renderTargets[j];

                if (renderTarget) {
                  renderTarget.resize(width, height);
                }
              }
            }

            var depth = frameBuffer.depthStencilTexture;

            if (depth) {
              depth.resize(width, height);
            }

            var shadowRenderPass = frameBuffer.renderPass;
            frameBuffer.destroy();
            frameBuffer.initialize(new FramebufferInfo(shadowRenderPass, renderTargets, depth));
          }
        };

        return ShadowFlow;
      }(RenderFlow), _class2.initInfo = {
        name: PIPELINE_FLOW_SHADOW,
        priority: ForwardFlowPriority.SHADOW,
        tag: RenderFlowTag.SCENE,
        stages: []
      }, _temp)) || _class));
    }
  };
});