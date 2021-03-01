System.register("q-bundled:///fs/cocos/core/pipeline/forward/forward-pipeline.js", ["../../data/decorators/index.js", "../render-pipeline.js", "./forward-flow.js", "../pipeline-serialization.js", "../shadow/shadow-flow.js", "../define.js", "../../gfx/define.js", "../../gfx/index.js", "../../renderer/scene/camera.js", "../../global-exports.js", "../../math/index.js", "../../renderer/scene/fog.js", "../../renderer/scene/ambient.js", "../../renderer/scene/skybox.js", "../../renderer/scene/shadows.js", "./scene-culling.js", "../../renderer/core/sampler-lib.js", "../../builtin/index.js", "../../platform/debug.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, RenderPipeline, ForwardFlow, RenderTextureConfig, MaterialConfig, ShadowFlow, UBOGlobal, UBOShadow, UBOCamera, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, BufferUsageBit, MemoryUsageBit, ClearFlag, Filter, Address, StoreOp, ColorAttachment, DepthStencilAttachment, LoadOp, TextureLayout, RenderPassInfo, BufferInfo, Feature, SKYBOX_FLAG, legacyCC, Color, Mat4, Vec3, Vec4, Fog, Ambient, Skybox, Shadows, ShadowType, getShadowWorldMatrix, updatePlanarPROJ, genSamplerHash, samplerLib, builtinResMgr, errorID, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _temp, matShadowView, matShadowViewProj, vec3_center, _samplerInfo, ForwardPipeline;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
      displayOrder = _dataDecoratorsIndexJs.displayOrder;
      type = _dataDecoratorsIndexJs.type;
      serializable = _dataDecoratorsIndexJs.serializable;
    }, function (_renderPipelineJs) {
      RenderPipeline = _renderPipelineJs.RenderPipeline;
    }, function (_forwardFlowJs) {
      ForwardFlow = _forwardFlowJs.ForwardFlow;
    }, function (_pipelineSerializationJs) {
      RenderTextureConfig = _pipelineSerializationJs.RenderTextureConfig;
      MaterialConfig = _pipelineSerializationJs.MaterialConfig;
    }, function (_shadowShadowFlowJs) {
      ShadowFlow = _shadowShadowFlowJs.ShadowFlow;
    }, function (_defineJs) {
      UBOGlobal = _defineJs.UBOGlobal;
      UBOShadow = _defineJs.UBOShadow;
      UBOCamera = _defineJs.UBOCamera;
      UNIFORM_SHADOWMAP_BINDING = _defineJs.UNIFORM_SHADOWMAP_BINDING;
      UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING = _defineJs.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING;
    }, function (_gfxDefineJs) {
      BufferUsageBit = _gfxDefineJs.BufferUsageBit;
      MemoryUsageBit = _gfxDefineJs.MemoryUsageBit;
      ClearFlag = _gfxDefineJs.ClearFlag;
      Filter = _gfxDefineJs.Filter;
      Address = _gfxDefineJs.Address;
      StoreOp = _gfxDefineJs.StoreOp;
    }, function (_gfxIndexJs) {
      ColorAttachment = _gfxIndexJs.ColorAttachment;
      DepthStencilAttachment = _gfxIndexJs.DepthStencilAttachment;
      LoadOp = _gfxIndexJs.LoadOp;
      TextureLayout = _gfxIndexJs.TextureLayout;
      RenderPassInfo = _gfxIndexJs.RenderPassInfo;
      BufferInfo = _gfxIndexJs.BufferInfo;
      Feature = _gfxIndexJs.Feature;
    }, function (_rendererSceneCameraJs) {
      SKYBOX_FLAG = _rendererSceneCameraJs.SKYBOX_FLAG;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_mathIndexJs) {
      Color = _mathIndexJs.Color;
      Mat4 = _mathIndexJs.Mat4;
      Vec3 = _mathIndexJs.Vec3;
      Vec4 = _mathIndexJs.Vec4;
    }, function (_rendererSceneFogJs) {
      Fog = _rendererSceneFogJs.Fog;
    }, function (_rendererSceneAmbientJs) {
      Ambient = _rendererSceneAmbientJs.Ambient;
    }, function (_rendererSceneSkyboxJs) {
      Skybox = _rendererSceneSkyboxJs.Skybox;
    }, function (_rendererSceneShadowsJs) {
      Shadows = _rendererSceneShadowsJs.Shadows;
      ShadowType = _rendererSceneShadowsJs.ShadowType;
    }, function (_sceneCullingJs) {
      getShadowWorldMatrix = _sceneCullingJs.getShadowWorldMatrix;
      updatePlanarPROJ = _sceneCullingJs.updatePlanarPROJ;
    }, function (_rendererCoreSamplerLibJs) {
      genSamplerHash = _rendererCoreSamplerLibJs.genSamplerHash;
      samplerLib = _rendererCoreSamplerLibJs.samplerLib;
    }, function (_builtinIndexJs) {
      builtinResMgr = _builtinIndexJs.builtinResMgr;
    }, function (_platformDebugJs) {
      errorID = _platformDebugJs.errorID;
    }],
    execute: function () {
      matShadowView = new Mat4();
      matShadowViewProj = new Mat4();
      vec3_center = new Vec3();
      _samplerInfo = [Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP];
      /**
       * @en The forward render pipeline
       * @zh 前向渲染管线。
       */

      _export("ForwardPipeline", ForwardPipeline = (_dec = ccclass('ForwardPipeline'), _dec2 = type([RenderTextureConfig]), _dec3 = displayOrder(2), _dec4 = type([MaterialConfig]), _dec5 = displayOrder(3), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_RenderPipeline) {
        _inheritsLoose(ForwardPipeline, _RenderPipeline);

        function ForwardPipeline() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _RenderPipeline.call.apply(_RenderPipeline, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "renderTextures", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "materials", _descriptor2, _assertThisInitialized(_this));

          _this.fog = new Fog();
          _this.ambient = new Ambient();
          _this.skybox = new Skybox();
          _this.shadows = new Shadows();
          _this.renderObjects = [];
          _this.shadowObjects = [];
          _this.shadowFrameBufferMap = new Map();
          _this._isHDR = false;
          _this._shadingScale = 1.0;
          _this._fpScale = 1.0 / 1024.0;
          _this._renderPasses = new Map();
          _this._globalUBO = new Float32Array(UBOGlobal.COUNT);
          _this._cameraUBO = new Float32Array(UBOCamera.COUNT);
          _this._shadowUBO = new Float32Array(UBOShadow.COUNT);
          return _this;
        }

        var _proto = ForwardPipeline.prototype;

        _proto.initialize = function initialize(info) {
          _RenderPipeline.prototype.initialize.call(this, info);

          if (this._flows.length === 0) {
            var shadowFlow = new ShadowFlow();
            shadowFlow.initialize(ShadowFlow.initInfo);

            this._flows.push(shadowFlow);

            var forwardFlow = new ForwardFlow();
            forwardFlow.initialize(ForwardFlow.initInfo);

            this._flows.push(forwardFlow);
          }

          return true;
        };

        _proto.activate = function activate() {
          this._macros = {};

          if (!_RenderPipeline.prototype.activate.call(this)) {
            return false;
          }

          if (!this._activeRenderer()) {
            errorID(2402);
            return false;
          }

          return true;
        };

        _proto.render = function render(cameras) {
          this._commandBuffers[0].begin();

          this.updateGlobalUBO();

          for (var i = 0; i < cameras.length; i++) {
            var camera = cameras[i];

            if (camera.scene) {
              this.updateCameraUBO(camera);

              for (var j = 0; j < this._flows.length; j++) {
                this._flows[j].render(camera);
              }
            }
          }

          this._commandBuffers[0].end();

          this._device.queue.submit(this._commandBuffers);
        };

        _proto.getRenderPass = function getRenderPass(clearFlags) {
          var renderPass = this._renderPasses.get(clearFlags);

          if (renderPass) {
            return renderPass;
          }

          var device = this.device;
          var colorAttachment = new ColorAttachment();
          var depthStencilAttachment = new DepthStencilAttachment();
          colorAttachment.format = device.colorFormat;
          depthStencilAttachment.format = device.depthStencilFormat;
          depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
          depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;

          if (!(clearFlags & ClearFlag.COLOR)) {
            if (clearFlags & SKYBOX_FLAG) {
              colorAttachment.loadOp = LoadOp.DISCARD;
            } else {
              colorAttachment.loadOp = LoadOp.LOAD;
              colorAttachment.beginLayout = TextureLayout.PRESENT_SRC;
            }
          }

          if ((clearFlags & ClearFlag.DEPTH_STENCIL) !== ClearFlag.DEPTH_STENCIL) {
            if (!(clearFlags & ClearFlag.DEPTH)) depthStencilAttachment.depthLoadOp = LoadOp.LOAD;
            if (!(clearFlags & ClearFlag.STENCIL)) depthStencilAttachment.stencilLoadOp = LoadOp.LOAD;
            depthStencilAttachment.beginLayout = TextureLayout.DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
          }

          var renderPassInfo = new RenderPassInfo([colorAttachment], depthStencilAttachment);
          renderPass = device.createRenderPass(renderPassInfo);

          this._renderPasses.set(clearFlags, renderPass);

          return renderPass;
        }
        /**
         * @en Update all UBOs
         * @zh 更新全部 UBO。
         */
        ;

        _proto.updateGlobalUBO = function updateGlobalUBO() {
          this._descriptorSet.update();

          var root = legacyCC.director.root;
          var fv = this._globalUBO;
          var device = this.device;
          var shadingWidth = Math.floor(device.width);
          var shadingHeight = Math.floor(device.height); // update UBOGlobal

          fv[UBOGlobal.TIME_OFFSET] = root.cumulativeTime;
          fv[UBOGlobal.TIME_OFFSET + 1] = root.frameTime;
          fv[UBOGlobal.TIME_OFFSET + 2] = legacyCC.director.getTotalFrames();
          fv[UBOGlobal.SCREEN_SIZE_OFFSET] = device.width;
          fv[UBOGlobal.SCREEN_SIZE_OFFSET + 1] = device.height;
          fv[UBOGlobal.SCREEN_SIZE_OFFSET + 2] = 1.0 / device.width;
          fv[UBOGlobal.SCREEN_SIZE_OFFSET + 3] = 1.0 / device.height;
          fv[UBOGlobal.NATIVE_SIZE_OFFSET] = shadingWidth;
          fv[UBOGlobal.NATIVE_SIZE_OFFSET + 1] = shadingHeight;
          fv[UBOGlobal.NATIVE_SIZE_OFFSET + 2] = 1.0 / fv[UBOGlobal.NATIVE_SIZE_OFFSET];
          fv[UBOGlobal.NATIVE_SIZE_OFFSET + 3] = 1.0 / fv[UBOGlobal.NATIVE_SIZE_OFFSET + 1];

          this._commandBuffers[0].updateBuffer(this._descriptorSet.getBuffer(UBOGlobal.BINDING), this._globalUBO);
        };

        _proto._activeRenderer = function _activeRenderer() {
          var device = this.device;

          this._commandBuffers.push(device.commandBuffer);

          var globalUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOGlobal.SIZE, UBOGlobal.SIZE));

          this._descriptorSet.bindBuffer(UBOGlobal.BINDING, globalUBO);

          var cameraUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOCamera.SIZE, UBOCamera.SIZE));

          this._descriptorSet.bindBuffer(UBOCamera.BINDING, cameraUBO);

          var shadowUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOShadow.SIZE, UBOShadow.SIZE));

          this._descriptorSet.bindBuffer(UBOShadow.BINDING, shadowUBO);

          var shadowMapSamplerHash = genSamplerHash(_samplerInfo);
          var shadowMapSampler = samplerLib.getSampler(device, shadowMapSamplerHash);

          this._descriptorSet.bindSampler(UNIFORM_SHADOWMAP_BINDING, shadowMapSampler);

          this._descriptorSet.bindTexture(UNIFORM_SHADOWMAP_BINDING, builtinResMgr.get('default-texture').getGFXTexture());

          this._descriptorSet.bindSampler(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, shadowMapSampler);

          this._descriptorSet.bindTexture(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, builtinResMgr.get('default-texture').getGFXTexture());

          this._descriptorSet.update(); // update global defines when all states initialized.


          this.macros.CC_USE_HDR = this._isHDR;
          this.macros.CC_SUPPORT_FLOAT_TEXTURE = this.device.hasFeature(Feature.TEXTURE_FLOAT);
          return true;
        };

        _proto.updateShadowUBO = function updateShadowUBO(camera) {
          this._descriptorSet.update();

          var mainLight = camera.scene.mainLight;
          var device = this.device;
          var shadowInfo = this.shadows;

          if (shadowInfo.enabled) {
            if (mainLight && shadowInfo.type === ShadowType.ShadowMap) {
              if (this.shadowFrameBufferMap.has(mainLight)) {
                this._descriptorSet.bindTexture(UNIFORM_SHADOWMAP_BINDING, this.shadowFrameBufferMap.get(mainLight).colorTextures[0]);
              } // light view


              var shadowCameraView; // light proj

              var x = 0;
              var y = 0;
              var far = 0;

              if (shadowInfo.autoAdapt) {
                shadowCameraView = getShadowWorldMatrix(this, mainLight.node.getWorldRotation(), mainLight.direction, vec3_center); // if orthoSize is the smallest, auto calculate orthoSize.

                var radius = shadowInfo.sphere.radius;
                x = radius * shadowInfo.aspect;
                y = radius;
                var halfFar = Vec3.distance(shadowInfo.sphere.center, vec3_center);
                far = Math.min(halfFar * Shadows.COEFFICIENT_OF_EXPANSION, Shadows.MAX_FAR);
              } else {
                shadowCameraView = mainLight.node.getWorldMatrix();
                x = shadowInfo.orthoSize * shadowInfo.aspect;
                y = shadowInfo.orthoSize;
                far = shadowInfo.far;
              }

              Mat4.invert(matShadowView, shadowCameraView);
              var projectionSignY = device.screenSpaceSignY * device.UVSpaceSignY; // always offscreen

              Mat4.ortho(matShadowViewProj, -x, x, -y, y, shadowInfo.near, far, device.clipSpaceMinZ, projectionSignY);
              Mat4.multiply(matShadowViewProj, matShadowViewProj, matShadowView);
              Mat4.toArray(this._shadowUBO, matShadowViewProj, UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);
              this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET] = shadowInfo.size.x;
              this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 1] = shadowInfo.size.y;
              this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 2] = shadowInfo.pcf;
              this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 3] = shadowInfo.bias;
            } else if (mainLight && shadowInfo.type === ShadowType.Planar) {
              updatePlanarPROJ(shadowInfo, mainLight, this._shadowUBO);
            }

            Color.toArray(this._shadowUBO, shadowInfo.shadowColor, UBOShadow.SHADOW_COLOR_OFFSET);

            this._commandBuffers[0].updateBuffer(this._descriptorSet.getBuffer(UBOShadow.BINDING), this._shadowUBO);
          }
        };

        _proto.updateCameraUBO = function updateCameraUBO(camera) {
          var device = this.device;
          var scene = camera.scene ? camera.scene : legacyCC.director.getScene().renderScene;
          var mainLight = scene.mainLight;
          var ambient = this.ambient;
          var fog = this.fog;
          var shadingWidth = Math.floor(device.width);
          var shadingHeight = Math.floor(device.height); // update camera ubo

          var cv = this._cameraUBO;
          var exposure = camera.exposure;
          cv[UBOCamera.SCREEN_SCALE_OFFSET] = camera.width / shadingWidth * this.shadingScale;
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 1] = camera.height / shadingHeight * this.shadingScale;
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 2] = 1.0 / cv[UBOCamera.SCREEN_SCALE_OFFSET];
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 3] = 1.0 / cv[UBOCamera.SCREEN_SCALE_OFFSET + 1];
          cv[UBOCamera.EXPOSURE_OFFSET] = exposure;
          cv[UBOCamera.EXPOSURE_OFFSET + 1] = 1.0 / exposure;
          cv[UBOCamera.EXPOSURE_OFFSET + 2] = this._isHDR ? 1.0 : 0.0;
          cv[UBOCamera.EXPOSURE_OFFSET + 3] = this._fpScale / exposure;

          if (mainLight) {
            Vec3.toArray(cv, mainLight.direction, UBOCamera.MAIN_LIT_DIR_OFFSET);
            Vec3.toArray(cv, mainLight.color, UBOCamera.MAIN_LIT_COLOR_OFFSET);

            if (mainLight.useColorTemperature) {
              var colorTempRGB = mainLight.colorTemperatureRGB;
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET] *= colorTempRGB.x;
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 1] *= colorTempRGB.y;
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 2] *= colorTempRGB.z;
            }

            if (this._isHDR) {
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 3] = mainLight.illuminance * this._fpScale;
            } else {
              cv[UBOCamera.MAIN_LIT_COLOR_OFFSET + 3] = mainLight.illuminance * exposure;
            }
          } else {
            Vec3.toArray(cv, Vec3.UNIT_Z, UBOCamera.MAIN_LIT_DIR_OFFSET);
            Vec4.toArray(cv, Vec4.ZERO, UBOCamera.MAIN_LIT_COLOR_OFFSET);
          }

          var skyColor = ambient.colorArray;

          if (this._isHDR) {
            skyColor[3] = ambient.skyIllum * this._fpScale;
          } else {
            skyColor[3] = ambient.skyIllum * exposure;
          }

          cv.set(skyColor, UBOCamera.AMBIENT_SKY_OFFSET);
          cv.set(ambient.albedoArray, UBOCamera.AMBIENT_GROUND_OFFSET);
          Mat4.toArray(cv, camera.matView, UBOCamera.MAT_VIEW_OFFSET);
          Mat4.toArray(cv, camera.node.worldMatrix, UBOCamera.MAT_VIEW_INV_OFFSET);
          Mat4.toArray(cv, camera.matProj, UBOCamera.MAT_PROJ_OFFSET);
          Mat4.toArray(cv, camera.matProjInv, UBOCamera.MAT_PROJ_INV_OFFSET);
          Mat4.toArray(cv, camera.matViewProj, UBOCamera.MAT_VIEW_PROJ_OFFSET);
          Mat4.toArray(cv, camera.matViewProjInv, UBOCamera.MAT_VIEW_PROJ_INV_OFFSET);
          Vec3.toArray(cv, camera.position, UBOCamera.CAMERA_POS_OFFSET);
          var projectionSignY = device.screenSpaceSignY;

          if (camera.window.hasOffScreenAttachments) {
            projectionSignY *= device.UVSpaceSignY; // need flipping if drawing on render targets
          }

          cv[UBOCamera.CAMERA_POS_OFFSET + 3] = projectionSignY;

          if (fog.enabled) {
            cv.set(fog.colorArray, UBOCamera.GLOBAL_FOG_COLOR_OFFSET);
            cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET] = fog.fogStart;
            cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET + 1] = fog.fogEnd;
            cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET + 2] = fog.fogDensity;
            cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET] = fog.fogTop;
            cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET + 1] = fog.fogRange;
            cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET + 2] = fog.fogAtten;
          }

          this._commandBuffers[0].updateBuffer(this._descriptorSet.getBuffer(UBOCamera.BINDING), this._cameraUBO);
        };

        _proto.destroyUBOs = function destroyUBOs() {
          if (this._descriptorSet) {
            this._descriptorSet.getBuffer(UBOGlobal.BINDING).destroy();

            this._descriptorSet.getBuffer(UBOShadow.BINDING).destroy();

            this._descriptorSet.getBuffer(UBOCamera.BINDING).destroy();

            this._descriptorSet.getSampler(UNIFORM_SHADOWMAP_BINDING).destroy();

            this._descriptorSet.getSampler(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();

            this._descriptorSet.getTexture(UNIFORM_SHADOWMAP_BINDING).destroy();

            this._descriptorSet.getTexture(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();
          }
        };

        _proto.destroy = function destroy() {
          this.destroyUBOs();

          var rpIter = this._renderPasses.values();

          var rpRes = rpIter.next();

          while (!rpRes.done) {
            rpRes.value.destroy();
            rpRes = rpIter.next();
          }

          this._commandBuffers.length = 0;
          this.ambient.destroy();
          this.skybox.destroy();
          this.fog.destroy();
          this.shadows.destroy();
          return _RenderPipeline.prototype.destroy.call(this);
        };

        _createClass(ForwardPipeline, [{
          key: "isHDR",
          get: function get() {
            return this._isHDR;
          },
          set: function set(val) {
            if (this._isHDR === val) {
              return;
            }

            this._isHDR = val;
            var defaultGlobalUBOData = this._cameraUBO;
            defaultGlobalUBOData[UBOCamera.EXPOSURE_OFFSET + 2] = this._isHDR ? 1.0 : 0.0;
          }
        }, {
          key: "shadingScale",
          get: function get() {
            return this._shadingScale;
          }
        }, {
          key: "fpScale",
          get: function get() {
            return this._fpScale;
          }
          /**
           * @en Get shadow UBO.
           * @zh 获取阴影UBO。
           */

        }, {
          key: "shadowUBO",
          get: function get() {
            return this._shadowUBO;
          }
        }]);

        return ForwardPipeline;
      }(RenderPipeline), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "renderTextures", [_dec2, serializable, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "materials", [_dec4, serializable, _dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
    }
  };
});