System.register("q-bundled:///fs/cocos/core/pipeline/render-shadow-map-batched-queue.js", ["./define.js", "./pass-phase.js", "./pipeline-state-manager.js", "../renderer/core/memory-pools.js", "../renderer/core/pass.js", "./render-instanced-queue.js", "./instanced-buffer.js", "./render-batched-queue.js", "./batched-buffer.js", "../math/index.js", "../renderer/scene/shadows.js", "../renderer/scene/light.js", "../geometry/index.js", "./forward/scene-culling.js"], function (_export, _context) {
  "use strict";

  var SetIndex, UBOShadow, getPhaseID, PipelineStateManager, ShaderPool, SubModelPool, SubModelView, BatchingSchemes, RenderInstancedQueue, InstancedBuffer, RenderBatchedQueue, BatchedBuffer, Color, Mat4, Vec4, Vec3, Shadows, ShadowType, LightType, intersect, getShadowWorldMatrix, _matShadowView, _matShadowViewProj, _vec4ShadowInfo, _vec3Center, _shadowCameraView, _phaseID, _shadowPassIndices, RenderShadowMapBatchedQueue;

  function getShadowPassIndex(subModels, shadowPassIndices) {
    shadowPassIndices.length = 0;
    var hasShadowPass = false;

    for (var j = 0; j < subModels.length; j++) {
      var passes = subModels[j].passes;
      var shadowPassIndex = -1;

      for (var k = 0; k < passes.length; k++) {
        if (passes[k].phase === _phaseID) {
          shadowPassIndex = k;
          hasShadowPass = true;
          break;
        }
      }

      shadowPassIndices.push(shadowPassIndex);
    }

    return hasShadowPass;
  }
  /**
   * @zh
   * 阴影渲染队列
   */


  return {
    setters: [function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
      UBOShadow = _defineJs.UBOShadow;
    }, function (_passPhaseJs) {
      getPhaseID = _passPhaseJs.getPhaseID;
    }, function (_pipelineStateManagerJs) {
      PipelineStateManager = _pipelineStateManagerJs.PipelineStateManager;
    }, function (_rendererCoreMemoryPoolsJs) {
      ShaderPool = _rendererCoreMemoryPoolsJs.ShaderPool;
      SubModelPool = _rendererCoreMemoryPoolsJs.SubModelPool;
      SubModelView = _rendererCoreMemoryPoolsJs.SubModelView;
    }, function (_rendererCorePassJs) {
      BatchingSchemes = _rendererCorePassJs.BatchingSchemes;
    }, function (_renderInstancedQueueJs) {
      RenderInstancedQueue = _renderInstancedQueueJs.RenderInstancedQueue;
    }, function (_instancedBufferJs) {
      InstancedBuffer = _instancedBufferJs.InstancedBuffer;
    }, function (_renderBatchedQueueJs) {
      RenderBatchedQueue = _renderBatchedQueueJs.RenderBatchedQueue;
    }, function (_batchedBufferJs) {
      BatchedBuffer = _batchedBufferJs.BatchedBuffer;
    }, function (_mathIndexJs) {
      Color = _mathIndexJs.Color;
      Mat4 = _mathIndexJs.Mat4;
      Vec4 = _mathIndexJs.Vec4;
      Vec3 = _mathIndexJs.Vec3;
    }, function (_rendererSceneShadowsJs) {
      Shadows = _rendererSceneShadowsJs.Shadows;
      ShadowType = _rendererSceneShadowsJs.ShadowType;
    }, function (_rendererSceneLightJs) {
      LightType = _rendererSceneLightJs.LightType;
    }, function (_geometryIndexJs) {
      intersect = _geometryIndexJs.intersect;
    }, function (_forwardSceneCullingJs) {
      getShadowWorldMatrix = _forwardSceneCullingJs.getShadowWorldMatrix;
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
      _matShadowView = new Mat4();
      _matShadowViewProj = new Mat4();
      _vec4ShadowInfo = new Vec4();
      _vec3Center = new Vec3();
      _shadowCameraView = new Mat4();
      _phaseID = getPhaseID('shadow-caster');
      _shadowPassIndices = [];

      _export("RenderShadowMapBatchedQueue", RenderShadowMapBatchedQueue = /*#__PURE__*/function () {
        // changes
        function RenderShadowMapBatchedQueue(pipeline) {
          this._pipeline = void 0;
          this._subModelsArray = [];
          this._passArray = [];
          this._shaderArray = [];
          this._shadowMapBuffer = void 0;
          this._device = void 0;
          this._shadowInfo = void 0;
          this._descriptorSet = void 0;
          this._shadowObjects = void 0;
          this._shadowUBO = void 0;
          this._instancedQueue = void 0;
          this._batchedQueue = void 0;
          this._pipeline = pipeline;
          this._device = pipeline.device;
          this._shadowInfo = pipeline.shadows;
          this._descriptorSet = pipeline.descriptorSet;
          this._shadowObjects = pipeline.shadowObjects;
          this._shadowUBO = pipeline.shadowUBO;
          this._shadowMapBuffer = pipeline.descriptorSet.getBuffer(UBOShadow.BINDING);
          this._instancedQueue = new RenderInstancedQueue();
          this._batchedQueue = new RenderBatchedQueue();
        }

        var _proto = RenderShadowMapBatchedQueue.prototype;

        _proto.gatherLightPasses = function gatherLightPasses(light, cmdBuff) {
          this.clear();

          if (light && this._shadowInfo.enabled && this._shadowInfo.type === ShadowType.ShadowMap) {
            this._updateUBOs(light);

            for (var i = 0; i < this._shadowObjects.length; i++) {
              var ro = this._shadowObjects[i];
              var model = ro.model;

              if (!getShadowPassIndex(model.subModels, _shadowPassIndices)) {
                continue;
              }

              switch (light.type) {
                case LightType.DIRECTIONAL:
                  this.add(model, cmdBuff, _shadowPassIndices);
                  break;

                case LightType.SPOT:
                  if (model.worldBounds && (!intersect.aabbWithAABB(model.worldBounds, light.aabb) || !intersect.aabbFrustum(model.worldBounds, light.frustum))) continue;
                  this.add(model, cmdBuff, _shadowPassIndices);
                  break;

                default:
              }
            }
          }
        }
        /**
         * @zh
         * clear ligth-Batched-Queue
         */
        ;

        _proto.clear = function clear() {
          this._subModelsArray.length = 0;
          this._shaderArray.length = 0;
          this._passArray.length = 0;

          this._instancedQueue.clear();

          this._batchedQueue.clear();
        };

        _proto.add = function add(model, cmdBuff, _shadowPassIndices) {
          var subModels = model.subModels;

          for (var j = 0; j < subModels.length; j++) {
            var subModel = subModels[j];
            var shadowPassIdx = _shadowPassIndices[j];
            var pass = subModel.passes[shadowPassIdx];
            var batchingScheme = pass.batchingScheme;
            subModel.descriptorSet.bindBuffer(UBOShadow.BINDING, this._shadowMapBuffer);
            subModel.descriptorSet.update();

            if (batchingScheme === BatchingSchemes.INSTANCING) {
              // instancing
              var buffer = InstancedBuffer.get(pass);
              buffer.merge(subModel, model.instancedAttributes, shadowPassIdx);

              this._instancedQueue.queue.add(buffer);
            } else if (pass.batchingScheme === BatchingSchemes.VB_MERGING) {
              // vb-merging
              var _buffer = BatchedBuffer.get(pass);

              _buffer.merge(subModel, shadowPassIdx, model);

              this._batchedQueue.queue.add(_buffer);
            } else {
              var shader = ShaderPool.get(SubModelPool.get(subModel.handle, SubModelView.SHADER_0 + shadowPassIdx));

              this._subModelsArray.push(subModel);

              this._shaderArray.push(shader);

              this._passArray.push(pass);
            }
          }

          this._instancedQueue.uploadBuffers(cmdBuff);

          this._batchedQueue.uploadBuffers(cmdBuff);
        }
        /**
         * @zh
         * record CommandBuffer
         */
        ;

        _proto.recordCommandBuffer = function recordCommandBuffer(device, renderPass, cmdBuff) {
          this._instancedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

          this._batchedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

          for (var i = 0; i < this._subModelsArray.length; ++i) {
            var subModel = this._subModelsArray[i];
            var shader = this._shaderArray[i];
            var pass = this._passArray[i];
            var ia = subModel.inputAssembler;
            var pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, ia);
            var descriptorSet = pass.descriptorSet;
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, descriptorSet);
            cmdBuff.bindDescriptorSet(SetIndex.LOCAL, subModel.descriptorSet);
            cmdBuff.bindInputAssembler(ia);
            cmdBuff.draw(ia);
          }
        };

        _proto._updateUBOs = function _updateUBOs(light) {
          var _x = 0;
          var _y = 0;
          var _far = 0;

          switch (light.type) {
            case LightType.DIRECTIONAL:
              // light view
              light.update(); // light proj

              if (this._shadowInfo.autoAdapt) {
                var node = light.node;

                if (node) {
                  _shadowCameraView = getShadowWorldMatrix(this._pipeline, node.getWorldRotation(), light.direction, _vec3Center);
                } // if orthoSize is the smallest, auto calculate orthoSize.


                var radius = this._shadowInfo.sphere.radius;
                _x = radius * this._shadowInfo.aspect;
                _y = radius;
                var halfFar = Vec3.distance(this._shadowInfo.sphere.center, _vec3Center);
                _far = Math.min(halfFar * Shadows.COEFFICIENT_OF_EXPANSION, Shadows.MAX_FAR);
              } else {
                _shadowCameraView = light.node.getWorldMatrix();
                _x = this._shadowInfo.orthoSize * this._shadowInfo.aspect;
                _y = this._shadowInfo.orthoSize;
                _far = this._shadowInfo.far;
              }

              Mat4.invert(_matShadowView, _shadowCameraView);
              Mat4.ortho(_matShadowViewProj, -_x, _x, -_y, _y, this._shadowInfo.near, _far, this._device.clipSpaceMinZ, this._device.screenSpaceSignY * this._device.UVSpaceSignY);
              break;

            case LightType.SPOT:
              // light view
              Mat4.invert(_matShadowView, light.node.getWorldMatrix()); // light proj

              Mat4.perspective(_matShadowViewProj, light.spotAngle, light.aspect, 0.001, light.range);
              break;

            default:
          } // light viewProj


          Mat4.multiply(_matShadowViewProj, _matShadowViewProj, _matShadowView);
          Mat4.toArray(this._shadowUBO, _matShadowViewProj, UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);
          Color.toArray(this._shadowUBO, this._shadowInfo.shadowColor, UBOShadow.SHADOW_COLOR_OFFSET);

          _vec4ShadowInfo.set(this._shadowInfo.size.x, this._shadowInfo.size.y, this._shadowInfo.pcf, this._shadowInfo.bias);

          Vec4.toArray(this._shadowUBO, _vec4ShadowInfo, UBOShadow.SHADOW_INFO_OFFSET);

          this._descriptorSet.getBuffer(UBOShadow.BINDING).update(this._shadowUBO);
        };

        return RenderShadowMapBatchedQueue;
      }());
    }
  };
});