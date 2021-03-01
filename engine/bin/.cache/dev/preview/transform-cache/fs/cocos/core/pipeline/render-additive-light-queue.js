System.register("q-bundled:///fs/cocos/core/pipeline/render-additive-light-queue.js", ["./batched-buffer.js", "../renderer/core/pass.js", "./instanced-buffer.js", "./pipeline-state-manager.js", "../renderer/core/memory-pools.js", "../math/index.js", "../geometry/index.js", "../gfx/index.js", "../memop/index.js", "./render-batched-queue.js", "./render-instanced-queue.js", "./pass-phase.js", "../renderer/scene/light.js", "./define.js", "../global-exports.js", "../renderer/core/sampler-lib.js", "../builtin/builtin-res-mgr.js", "./forward/scene-culling.js"], function (_export, _context) {
  "use strict";

  var BatchedBuffer, BatchingSchemes, InstancedBuffer, PipelineStateManager, DSPool, ShaderPool, PassView, PassPool, SubModelPool, SubModelView, Vec3, nextPow2, Mat4, Vec4, Color, Sphere, intersect, BufferUsageBit, MemoryUsageBit, BufferInfo, BufferViewInfo, Filter, Address, DescriptorSetInfo, Pool, RenderBatchedQueue, RenderInstancedQueue, getPhaseID, LightType, SetIndex, UBOForwardLight, UBOGlobal, UBOShadow, UBOCamera, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, legacyCC, genSamplerHash, samplerLib, builtinResMgr, updatePlanarPROJ, _samplerInfo, _lightPassPool, _vec4Array, _sphere, _dynamicOffsets, _lightIndices, _matShadowView, _matShadowViewProj, _phaseID, _lightPassIndices, RenderAdditiveLightQueue;

  function cullSphereLight(light, model) {
    return !!(model.worldBounds && !intersect.aabbWithAABB(model.worldBounds, light.aabb));
  }

  function cullSpotLight(light, model) {
    return !!(model.worldBounds && (!intersect.aabbWithAABB(model.worldBounds, light.aabb) || !intersect.aabbFrustum(model.worldBounds, light.frustum)));
  }

  function getLightPassIndices(subModels, lightPassIndices) {
    lightPassIndices.length = 0;
    var hasValidLightPass = false;

    for (var j = 0; j < subModels.length; j++) {
      var passes = subModels[j].passes;
      var lightPassIndex = -1;

      for (var k = 0; k < passes.length; k++) {
        if (passes[k].phase === _phaseID) {
          lightPassIndex = k;
          hasValidLightPass = true;
          break;
        }
      }

      lightPassIndices.push(lightPassIndex);
    }

    return hasValidLightPass;
  }
  /**
   * @zh 叠加光照队列。
   */


  return {
    setters: [function (_batchedBufferJs) {
      BatchedBuffer = _batchedBufferJs.BatchedBuffer;
    }, function (_rendererCorePassJs) {
      BatchingSchemes = _rendererCorePassJs.BatchingSchemes;
    }, function (_instancedBufferJs) {
      InstancedBuffer = _instancedBufferJs.InstancedBuffer;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_rendererCoreMemoryPoolsJs) {
      DSPool = _rendererCoreMemoryPoolsJs.DSPool;
      ShaderPool = _rendererCoreMemoryPoolsJs.ShaderPool;
      PassView = _rendererCoreMemoryPoolsJs.PassView;
      PassPool = _rendererCoreMemoryPoolsJs.PassPool;
      SubModelPool = _rendererCoreMemoryPoolsJs.SubModelPool;
      SubModelView = _rendererCoreMemoryPoolsJs.SubModelView;
    }, function (_mathIndexJs) {
      Vec3 = _mathIndexJs.Vec3;
      nextPow2 = _mathIndexJs.nextPow2;
      Mat4 = _mathIndexJs.Mat4;
      Vec4 = _mathIndexJs.Vec4;
      Color = _mathIndexJs.Color;
    }, function (_geometryIndexJs) {
      Sphere = _geometryIndexJs.Sphere;
      intersect = _geometryIndexJs.intersect;
    }, function (_gfxIndexJs) {
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferViewInfo = _gfxIndexJs.BufferViewInfo;
      Filter = _gfxIndexJs.Filter;
      Address = _gfxIndexJs.Address;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
    }, function (_memopIndexJs) {
      Pool = _memopIndexJs.Pool;
    }, function (_renderBatchedQueueJs) {
      RenderBatchedQueue = _renderBatchedQueueJs.RenderBatchedQueue;
    }, function (_renderInstancedQueueJs) {
      RenderInstancedQueue = _renderInstancedQueueJs.RenderInstancedQueue;
    }, function (_passPhaseJs) {
      getPhaseID = _passPhaseJs.getPhaseID;
    }, function (_rendererSceneLightJs) {
      LightType = _rendererSceneLightJs.LightType;
    }, function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
      UBOForwardLight = _defineJs.UBOForwardLight;
      UBOGlobal = _defineJs.UBOGlobal;
      UBOShadow = _defineJs.UBOShadow;
      UBOCamera = _defineJs.UBOCamera;
      UNIFORM_SHADOWMAP_BINDING = _defineJs.UNIFORM_SHADOWMAP_BINDING;
      UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING = _defineJs.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_rendererCoreSamplerLibJs) {
      genSamplerHash = _rendererCoreSamplerLibJs.genSamplerHash;
      samplerLib = _rendererCoreSamplerLibJs.samplerLib;
    }, function (_builtinBuiltinResMgrJs) {
      builtinResMgr = _builtinBuiltinResMgrJs.builtinResMgr;
    }, function (_forwardSceneCullingJs) {
      updatePlanarPROJ = _forwardSceneCullingJs.updatePlanarPROJ;
    }],
    execute: function () {
      /*
       Copyright (c) 2020 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated engine source code (the "Software"), a limited,
       worldwide, royalty-free, non-assignable, revocable and non-exclusive license
       to use Cocos Creator solely to develop games on your target platforms. You shall
       not use Cocos Creator software for developing other software or tools that's
       used for developing games. You are not granted to publish, distribute,
       sublicense, and/or sell copies of Cocos Creator.
      
       The software or tools in this License Agreement are licensed, not sold.
       Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
       */

      /**
       * @packageDocumentation
       * @module pipeline
       */
      _samplerInfo = [Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP];
      _lightPassPool = new Pool(function () {
        return {
          subModel: null,
          passIdx: -1,
          dynamicOffsets: [],
          lights: []
        };
      }, 16);
      _vec4Array = new Float32Array(4);
      _sphere = Sphere.create(0, 0, 0, 1);
      _dynamicOffsets = [];
      _lightIndices = [];
      _matShadowView = new Mat4();
      _matShadowViewProj = new Mat4();
      _phaseID = getPhaseID('forward-add');
      _lightPassIndices = [];

      _export("RenderAdditiveLightQueue", RenderAdditiveLightQueue = /*#__PURE__*/function () {
        function RenderAdditiveLightQueue(pipeline) {
          this._pipeline = void 0;
          this._device = void 0;
          this._validLights = [];
          this._lightPasses = [];
          this._descriptorSetMap = new Map();
          this._globalUBO = new Float32Array(UBOGlobal.COUNT);
          this._cameraUBO = new Float32Array(UBOCamera.COUNT);
          this._shadowUBO = new Float32Array(UBOShadow.COUNT);
          this._lightBufferCount = 16;
          this._lightBufferStride = void 0;
          this._lightBufferElementCount = void 0;
          this._lightBuffer = void 0;
          this._firstLightBufferView = void 0;
          this._lightBufferData = void 0;
          this._isHDR = void 0;
          this._fpScale = void 0;
          this._renderObjects = void 0;
          this._instancedQueue = void 0;
          this._batchedQueue = void 0;
          this._lightMeterScale = 10000.0;
          this._sampler = null;
          this._pipeline = pipeline;
          this._device = pipeline.device;
          this._isHDR = pipeline.isHDR;
          this._fpScale = pipeline.fpScale;
          this._renderObjects = pipeline.renderObjects;
          this._instancedQueue = new RenderInstancedQueue();
          this._batchedQueue = new RenderBatchedQueue();
          this._lightBufferStride = Math.ceil(UBOForwardLight.SIZE / this._device.uboOffsetAlignment) * this._device.uboOffsetAlignment;
          this._lightBufferElementCount = this._lightBufferStride / Float32Array.BYTES_PER_ELEMENT;
          this._lightBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._lightBufferStride * this._lightBufferCount, this._lightBufferStride));
          this._firstLightBufferView = this._device.createBuffer(new BufferViewInfo(this._lightBuffer, 0, UBOForwardLight.SIZE));
          this._lightBufferData = new Float32Array(this._lightBufferElementCount * this._lightBufferCount);
          var shadowMapSamplerHash = genSamplerHash(_samplerInfo);
          this._sampler = samplerLib.getSampler(this._device, shadowMapSamplerHash);
        }

        var _proto = RenderAdditiveLightQueue.prototype;

        _proto.clear = function clear() {
          this._instancedQueue.clear();

          this._batchedQueue.clear();

          this._validLights.length = 0;

          for (var i = 0; i < this._lightPasses.length; i++) {
            var lp = this._lightPasses[i];
            lp.dynamicOffsets.length = 0;
            lp.lights.length = 0;
          }

          _lightPassPool.freeArray(this._lightPasses);

          this._lightPasses.length = 0;
        };

        _proto.destroy = function destroy() {
          var descriptorSets = Array.from(this._descriptorSetMap.values());

          for (var i = 0; i < descriptorSets.length; ++i) {
            var descriptorSet = descriptorSets[i];

            if (descriptorSet) {
              descriptorSet.getBuffer(UBOGlobal.BINDING).destroy();
              descriptorSet.getBuffer(UBOShadow.BINDING).destroy();
              descriptorSet.getSampler(UNIFORM_SHADOWMAP_BINDING).destroy();
              descriptorSet.getSampler(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();
              descriptorSet.getTexture(UNIFORM_SHADOWMAP_BINDING).destroy();
              descriptorSet.getTexture(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();
              descriptorSet.destroy();
            }
          }

          this._descriptorSetMap.clear();
        };

        _proto.gatherLightPasses = function gatherLightPasses(camera, cmdBuff) {
          var validLights = this._validLights;
          this.clear();

          this._gatherValidLights(camera, validLights);

          if (!validLights.length) {
            return;
          }

          this._updateUBOs(camera, cmdBuff);

          this._updateLightDescriptorSet(camera, cmdBuff);

          for (var i = 0; i < this._renderObjects.length; i++) {
            var ro = this._renderObjects[i];
            var model = ro.model;
            var subModels = model.subModels;

            if (!getLightPassIndices(subModels, _lightPassIndices)) {
              continue;
            }

            _lightIndices.length = 0;

            this._lightCulling(model, validLights);

            if (!_lightIndices.length) {
              continue;
            }

            for (var j = 0; j < subModels.length; j++) {
              var lightPassIdx = _lightPassIndices[j];

              if (lightPassIdx < 0) {
                continue;
              }

              var subModel = subModels[j];
              var pass = subModel.passes[lightPassIdx];
              subModel.descriptorSet.bindBuffer(UBOForwardLight.BINDING, this._firstLightBufferView);
              subModel.descriptorSet.update();

              this._addRenderQueue(pass, subModel, model, lightPassIdx, validLights);
            }
          }

          this._instancedQueue.uploadBuffers(cmdBuff);

          this._batchedQueue.uploadBuffers(cmdBuff);
        };

        _proto.recordCommandBuffer = function recordCommandBuffer(device, renderPass, cmdBuff) {
          this._instancedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

          this._batchedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

          for (var i = 0; i < this._lightPasses.length; i++) {
            var _this$_lightPasses$i = this._lightPasses[i],
                subModel = _this$_lightPasses$i.subModel,
                passIdx = _this$_lightPasses$i.passIdx,
                dynamicOffsets = _this$_lightPasses$i.dynamicOffsets,
                lights = _this$_lightPasses$i.lights;
            var shader = ShaderPool.get(SubModelPool.get(subModel.handle, SubModelView.SHADER_0 + passIdx));
            var pass = subModel.passes[passIdx];
            var ia = subModel.inputAssembler;
            var pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, ia);
            var matDS = DSPool.get(PassPool.get(pass.handle, PassView.DESCRIPTOR_SET));
            var localDS = subModel.descriptorSet;
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, matDS);
            cmdBuff.bindInputAssembler(ia);

            for (var j = 0; j < dynamicOffsets.length; ++j) {
              var light = lights[j];

              var descriptorSet = this._getOrCreateDescriptorSet(light);

              _dynamicOffsets[0] = dynamicOffsets[j];
              cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, descriptorSet);
              cmdBuff.bindDescriptorSet(SetIndex.LOCAL, localDS, _dynamicOffsets);
              cmdBuff.draw(ia);
            }
          }
        } // gather validLights
        ;

        _proto._gatherValidLights = function _gatherValidLights(camera, validLights) {
          var _ref = camera.scene,
              sphereLights = _ref.sphereLights;

          for (var i = 0; i < sphereLights.length; i++) {
            var light = sphereLights[i];

            if (light.baked) {
              continue;
            }

            Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);

            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              validLights.push(light);

              this._getOrCreateDescriptorSet(light);
            }
          }

          var _ref2 = camera.scene,
              spotLights = _ref2.spotLights;

          for (var _i = 0; _i < spotLights.length; _i++) {
            var _light = spotLights[_i];

            if (_light.baked) {
              continue;
            }

            Sphere.set(_sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);

            if (intersect.sphereFrustum(_sphere, camera.frustum)) {
              validLights.push(_light);

              this._getOrCreateDescriptorSet(_light);
            }
          }
        } // light culling
        ;

        _proto._lightCulling = function _lightCulling(model, validLights) {
          for (var l = 0; l < validLights.length; l++) {
            var light = validLights[l];
            var isCulled = false;

            switch (light.type) {
              case LightType.SPHERE:
                isCulled = cullSphereLight(light, model);
                break;

              case LightType.SPOT:
                isCulled = cullSpotLight(light, model);
                break;

              default:
            }

            if (!isCulled) {
              _lightIndices.push(l);
            }
          }
        } // add renderQueue
        ;

        _proto._addRenderQueue = function _addRenderQueue(pass, subModel, model, lightPassIdx, validLights) {
          var batchingScheme = pass.batchingScheme;

          if (batchingScheme === BatchingSchemes.INSTANCING) {
            // instancing
            for (var l = 0; l < _lightIndices.length; l++) {
              var idx = _lightIndices[l];
              var buffer = InstancedBuffer.get(pass, idx);
              buffer.merge(subModel, model.instancedAttributes, lightPassIdx);
              buffer.dynamicOffsets[0] = this._lightBufferStride * idx;

              this._instancedQueue.queue.add(buffer);
            }
          } else if (batchingScheme === BatchingSchemes.VB_MERGING) {
            // vb-merging
            for (var _l = 0; _l < _lightIndices.length; _l++) {
              var _idx = _lightIndices[_l];

              var _buffer = BatchedBuffer.get(pass, _idx);

              _buffer.merge(subModel, lightPassIdx, model);

              _buffer.dynamicOffsets[0] = this._lightBufferStride * _idx;

              this._batchedQueue.queue.add(_buffer);
            }
          } else {
            // standard draw
            var lp = _lightPassPool.alloc();

            lp.subModel = subModel;
            lp.passIdx = lightPassIdx;

            for (var _l2 = 0; _l2 < _lightIndices.length; _l2++) {
              var _idx2 = _lightIndices[_l2];
              lp.lights.push(validLights[_idx2]);
              lp.dynamicOffsets.push(this._lightBufferStride * _idx2);
            }

            this._lightPasses.push(lp);
          }
        } // update light DescriptorSet
        ;

        _proto._updateLightDescriptorSet = function _updateLightDescriptorSet(camera, cmdBuff) {
          var shadowInfo = this._pipeline.shadows;
          var mainLight = camera.scene.mainLight;

          for (var i = 0; i < this._validLights.length; i++) {
            var light = this._validLights[i];

            var descriptorSet = this._getOrCreateDescriptorSet(light);

            if (!descriptorSet) {
              continue;
            }

            this._updateGlobalDescriptorSet(camera, cmdBuff);

            switch (light.type) {
              case LightType.SPHERE:
                // planar PROJ
                if (mainLight) {
                  updatePlanarPROJ(shadowInfo, mainLight, this._shadowUBO);
                } // Reserve sphere light shadow interface


                Color.toArray(this._shadowUBO, shadowInfo.shadowColor, UBOShadow.SHADOW_COLOR_OFFSET);
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 0] = shadowInfo.size.x;
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 1] = shadowInfo.size.y;
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 2] = shadowInfo.pcf;
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 3] = shadowInfo.bias;
                break;

              case LightType.SPOT:
                // planar PROJ
                if (mainLight) {
                  updatePlanarPROJ(shadowInfo, mainLight, this._shadowUBO);
                } // light view


                Mat4.invert(_matShadowView, light.node.getWorldMatrix()); // light proj

                Mat4.perspective(_matShadowViewProj, light.spotAngle, light.aspect, 0.001, light.range); // light viewProj

                Mat4.multiply(_matShadowViewProj, _matShadowViewProj, _matShadowView);
                Mat4.toArray(this._shadowUBO, _matShadowViewProj, UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);
                Color.toArray(this._shadowUBO, shadowInfo.shadowColor, UBOShadow.SHADOW_COLOR_OFFSET);
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 0] = shadowInfo.size.x;
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 1] = shadowInfo.size.y;
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 2] = shadowInfo.pcf;
                this._shadowUBO[UBOShadow.SHADOW_INFO_OFFSET + 3] = shadowInfo.bias; // Spot light sampler binding

                if (this._pipeline.shadowFrameBufferMap.has(light)) {
                  if (this._pipeline.shadowFrameBufferMap.has(light)) {
                    var _this$_pipeline$shado;

                    var texture = (_this$_pipeline$shado = this._pipeline.shadowFrameBufferMap.get(light)) === null || _this$_pipeline$shado === void 0 ? void 0 : _this$_pipeline$shado.colorTextures[0];

                    if (texture) {
                      descriptorSet.bindTexture(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, texture);
                    }
                  }
                }

                break;

              default:
            }

            descriptorSet.update();
            cmdBuff.updateBuffer(descriptorSet.getBuffer(UBOGlobal.BINDING), this._globalUBO);
            cmdBuff.updateBuffer(descriptorSet.getBuffer(UBOCamera.BINDING), this._cameraUBO);
            cmdBuff.updateBuffer(descriptorSet.getBuffer(UBOShadow.BINDING), this._shadowUBO);
          }
        };

        _proto._updateGlobalDescriptorSet = function _updateGlobalDescriptorSet(camera, cmdBuff) {
          var root = legacyCC.director.root;
          var device = this._pipeline.device;
          var fv = this._globalUBO;
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

          this._updateCameraUBO(camera);
        };

        _proto._updateCameraUBO = function _updateCameraUBO(camera) {
          var pipeline = this._pipeline;
          var scene = camera.scene;
          var mainLight = scene.mainLight;
          var ambient = pipeline.ambient;
          var shadingScale = pipeline.shadingScale;
          var device = this._pipeline.device;
          var shadingWidth = Math.floor(device.width);
          var shadingHeight = Math.floor(device.height);
          var fog = pipeline.fog;
          var cv = this._cameraUBO;
          cv[UBOCamera.SCREEN_SCALE_OFFSET] = camera.width / shadingWidth * shadingScale;
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 1] = camera.height / shadingHeight * shadingScale;
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 2] = 1.0 / cv[UBOCamera.SCREEN_SCALE_OFFSET];
          cv[UBOCamera.SCREEN_SCALE_OFFSET + 3] = 1.0 / cv[UBOCamera.SCREEN_SCALE_OFFSET + 1];
          var exposure = camera.exposure;
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
          var skyColor = ambient.colorArray;

          if (this._isHDR) {
            skyColor[3] = ambient.skyIllum * this._fpScale;
          } else {
            skyColor[3] = ambient.skyIllum * exposure;
          }

          cv.set(skyColor, UBOCamera.AMBIENT_SKY_OFFSET);
          cv.set(ambient.albedoArray, UBOCamera.AMBIENT_GROUND_OFFSET);

          if (fog.enabled) {
            cv.set(fog.colorArray, UBOCamera.GLOBAL_FOG_COLOR_OFFSET);
            cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET] = fog.fogStart;
            cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET + 1] = fog.fogEnd;
            cv[UBOCamera.GLOBAL_FOG_BASE_OFFSET + 2] = fog.fogDensity;
            cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET] = fog.fogTop;
            cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET + 1] = fog.fogRange;
            cv[UBOCamera.GLOBAL_FOG_ADD_OFFSET + 2] = fog.fogAtten;
          }
        };

        _proto._updateUBOs = function _updateUBOs(camera, cmdBuff) {
          var exposure = camera.exposure;

          if (this._validLights.length > this._lightBufferCount) {
            this._firstLightBufferView.destroy();

            this._lightBufferCount = nextPow2(this._validLights.length);

            this._lightBuffer.resize(this._lightBufferStride * this._lightBufferCount);

            this._lightBufferData = new Float32Array(this._lightBufferElementCount * this._lightBufferCount);

            this._firstLightBufferView.initialize(new BufferViewInfo(this._lightBuffer, 0, UBOForwardLight.SIZE));
          }

          for (var l = 0, offset = 0; l < this._validLights.length; l++, offset += this._lightBufferElementCount) {
            var light = this._validLights[l];

            switch (light.type) {
              case LightType.SPHERE:
                // UBOForwardLight
                Vec3.toArray(_vec4Array, light.position);
                _vec4Array[3] = 0;

                this._lightBufferData.set(_vec4Array, offset + UBOForwardLight.LIGHT_POS_OFFSET);

                _vec4Array[0] = light.size;
                _vec4Array[1] = light.range;
                _vec4Array[2] = 0.0;

                this._lightBufferData.set(_vec4Array, offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET);

                Vec3.toArray(_vec4Array, light.color);

                if (light.useColorTemperature) {
                  var tempRGB = light.colorTemperatureRGB;
                  _vec4Array[0] *= tempRGB.x;
                  _vec4Array[1] *= tempRGB.y;
                  _vec4Array[2] *= tempRGB.z;
                }

                if (this._isHDR) {
                  _vec4Array[3] = light.luminance * this._fpScale * this._lightMeterScale;
                } else {
                  _vec4Array[3] = light.luminance * exposure * this._lightMeterScale;
                }

                this._lightBufferData.set(_vec4Array, offset + UBOForwardLight.LIGHT_COLOR_OFFSET);

                break;

              case LightType.SPOT:
                // UBOForwardLight
                Vec3.toArray(_vec4Array, light.position);
                _vec4Array[3] = 1;

                this._lightBufferData.set(_vec4Array, offset + UBOForwardLight.LIGHT_POS_OFFSET);

                _vec4Array[0] = light.size;
                _vec4Array[1] = light.range;
                _vec4Array[2] = light.spotAngle;

                this._lightBufferData.set(_vec4Array, offset + UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET);

                Vec3.toArray(_vec4Array, light.direction);

                this._lightBufferData.set(_vec4Array, offset + UBOForwardLight.LIGHT_DIR_OFFSET);

                Vec3.toArray(_vec4Array, light.color);

                if (light.useColorTemperature) {
                  var _tempRGB = light.colorTemperatureRGB;
                  _vec4Array[0] *= _tempRGB.x;
                  _vec4Array[1] *= _tempRGB.y;
                  _vec4Array[2] *= _tempRGB.z;
                }

                if (this._isHDR) {
                  _vec4Array[3] = light.luminance * this._fpScale * this._lightMeterScale;
                } else {
                  _vec4Array[3] = light.luminance * exposure * this._lightMeterScale;
                }

                this._lightBufferData.set(_vec4Array, offset + UBOForwardLight.LIGHT_COLOR_OFFSET);

                break;

              default:
            }
          }

          cmdBuff.updateBuffer(this._lightBuffer, this._lightBufferData);
        };

        _proto._getOrCreateDescriptorSet = function _getOrCreateDescriptorSet(light) {
          if (!this._descriptorSetMap.has(light)) {
            var device = this._device;
            var descriptorSet = device.createDescriptorSet(new DescriptorSetInfo(this._pipeline.descriptorSetLayout));
            var globalUBO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOGlobal.SIZE, UBOGlobal.SIZE));
            descriptorSet.bindBuffer(UBOGlobal.BINDING, globalUBO);
            var cameraBUO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOCamera.SIZE, UBOCamera.SIZE));
            descriptorSet.bindBuffer(UBOCamera.BINDING, cameraBUO);
            var shadowBUO = device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOShadow.SIZE, UBOShadow.SIZE));
            descriptorSet.bindBuffer(UBOShadow.BINDING, shadowBUO);
            descriptorSet.bindSampler(UNIFORM_SHADOWMAP_BINDING, this._sampler);
            descriptorSet.bindTexture(UNIFORM_SHADOWMAP_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
            descriptorSet.bindSampler(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, this._sampler);
            descriptorSet.bindTexture(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, builtinResMgr.get('default-texture').getGFXTexture());
            descriptorSet.update();

            this._descriptorSetMap.set(light, descriptorSet);

            return descriptorSet;
          }

          return this._descriptorSetMap.get(light);
        };

        return RenderAdditiveLightQueue;
      }());
    }
  };
});