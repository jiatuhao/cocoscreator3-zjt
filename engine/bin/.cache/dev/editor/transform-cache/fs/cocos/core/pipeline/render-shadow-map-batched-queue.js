"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderShadowMapBatchedQueue = void 0;

var _define = require("./define.js");

var _passPhase = require("./pass-phase.js");

var _pipelineStateManager = require("./pipeline-state-manager.js");

var _memoryPools = require("../renderer/core/memory-pools.js");

var _pass = require("../renderer/core/pass.js");

var _renderInstancedQueue = require("./render-instanced-queue.js");

var _instancedBuffer = require("./instanced-buffer.js");

var _renderBatchedQueue = require("./render-batched-queue.js");

var _batchedBuffer = require("./batched-buffer.js");

var _index = require("../math/index.js");

var _shadows = require("../renderer/scene/shadows.js");

var _light = require("../renderer/scene/light.js");

var _index2 = require("../geometry/index.js");

var _sceneCulling = require("./forward/scene-culling.js");

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
const _matShadowView = new _index.Mat4();

const _matShadowViewProj = new _index.Mat4();

const _vec4ShadowInfo = new _index.Vec4();

const _vec3Center = new _index.Vec3();

let _shadowCameraView = new _index.Mat4();

const _phaseID = (0, _passPhase.getPhaseID)('shadow-caster');

const _shadowPassIndices = [];

function getShadowPassIndex(subModels, shadowPassIndices) {
  shadowPassIndices.length = 0;
  let hasShadowPass = false;

  for (let j = 0; j < subModels.length; j++) {
    const {
      passes
    } = subModels[j];
    let shadowPassIndex = -1;

    for (let k = 0; k < passes.length; k++) {
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


class RenderShadowMapBatchedQueue {
  // changes
  constructor(pipeline) {
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
    this._shadowMapBuffer = pipeline.descriptorSet.getBuffer(_define.UBOShadow.BINDING);
    this._instancedQueue = new _renderInstancedQueue.RenderInstancedQueue();
    this._batchedQueue = new _renderBatchedQueue.RenderBatchedQueue();
  }

  gatherLightPasses(light, cmdBuff) {
    this.clear();

    if (light && this._shadowInfo.enabled && this._shadowInfo.type === _shadows.ShadowType.ShadowMap) {
      this._updateUBOs(light);

      for (let i = 0; i < this._shadowObjects.length; i++) {
        const ro = this._shadowObjects[i];
        const model = ro.model;

        if (!getShadowPassIndex(model.subModels, _shadowPassIndices)) {
          continue;
        }

        switch (light.type) {
          case _light.LightType.DIRECTIONAL:
            this.add(model, cmdBuff, _shadowPassIndices);
            break;

          case _light.LightType.SPOT:
            if (model.worldBounds && (!_index2.intersect.aabbWithAABB(model.worldBounds, light.aabb) || !_index2.intersect.aabbFrustum(model.worldBounds, light.frustum))) continue;
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


  clear() {
    this._subModelsArray.length = 0;
    this._shaderArray.length = 0;
    this._passArray.length = 0;

    this._instancedQueue.clear();

    this._batchedQueue.clear();
  }

  add(model, cmdBuff, _shadowPassIndices) {
    const subModels = model.subModels;

    for (let j = 0; j < subModels.length; j++) {
      const subModel = subModels[j];
      const shadowPassIdx = _shadowPassIndices[j];
      const pass = subModel.passes[shadowPassIdx];
      const batchingScheme = pass.batchingScheme;
      subModel.descriptorSet.bindBuffer(_define.UBOShadow.BINDING, this._shadowMapBuffer);
      subModel.descriptorSet.update();

      if (batchingScheme === _pass.BatchingSchemes.INSTANCING) {
        // instancing
        const buffer = _instancedBuffer.InstancedBuffer.get(pass);

        buffer.merge(subModel, model.instancedAttributes, shadowPassIdx);

        this._instancedQueue.queue.add(buffer);
      } else if (pass.batchingScheme === _pass.BatchingSchemes.VB_MERGING) {
        // vb-merging
        const buffer = _batchedBuffer.BatchedBuffer.get(pass);

        buffer.merge(subModel, shadowPassIdx, model);

        this._batchedQueue.queue.add(buffer);
      } else {
        const shader = _memoryPools.ShaderPool.get(_memoryPools.SubModelPool.get(subModel.handle, _memoryPools.SubModelView.SHADER_0 + shadowPassIdx));

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


  recordCommandBuffer(device, renderPass, cmdBuff) {
    this._instancedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

    this._batchedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

    for (let i = 0; i < this._subModelsArray.length; ++i) {
      const subModel = this._subModelsArray[i];
      const shader = this._shaderArray[i];
      const pass = this._passArray[i];
      const ia = subModel.inputAssembler;

      const pso = _pipelineStateManager.PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, ia);

      const descriptorSet = pass.descriptorSet;
      cmdBuff.bindPipelineState(pso);
      cmdBuff.bindDescriptorSet(_define.SetIndex.MATERIAL, descriptorSet);
      cmdBuff.bindDescriptorSet(_define.SetIndex.LOCAL, subModel.descriptorSet);
      cmdBuff.bindInputAssembler(ia);
      cmdBuff.draw(ia);
    }
  }

  _updateUBOs(light) {
    let _x = 0;
    let _y = 0;
    let _far = 0;

    switch (light.type) {
      case _light.LightType.DIRECTIONAL:
        // light view
        light.update(); // light proj

        if (this._shadowInfo.autoAdapt) {
          const node = light.node;

          if (node) {
            _shadowCameraView = (0, _sceneCulling.getShadowWorldMatrix)(this._pipeline, node.getWorldRotation(), light.direction, _vec3Center);
          } // if orthoSize is the smallest, auto calculate orthoSize.


          const radius = this._shadowInfo.sphere.radius;
          _x = radius * this._shadowInfo.aspect;
          _y = radius;

          const halfFar = _index.Vec3.distance(this._shadowInfo.sphere.center, _vec3Center);

          _far = Math.min(halfFar * _shadows.Shadows.COEFFICIENT_OF_EXPANSION, _shadows.Shadows.MAX_FAR);
        } else {
          _shadowCameraView = light.node.getWorldMatrix();
          _x = this._shadowInfo.orthoSize * this._shadowInfo.aspect;
          _y = this._shadowInfo.orthoSize;
          _far = this._shadowInfo.far;
        }

        _index.Mat4.invert(_matShadowView, _shadowCameraView);

        _index.Mat4.ortho(_matShadowViewProj, -_x, _x, -_y, _y, this._shadowInfo.near, _far, this._device.clipSpaceMinZ, this._device.screenSpaceSignY * this._device.UVSpaceSignY);

        break;

      case _light.LightType.SPOT:
        // light view
        _index.Mat4.invert(_matShadowView, light.node.getWorldMatrix()); // light proj


        _index.Mat4.perspective(_matShadowViewProj, light.spotAngle, light.aspect, 0.001, light.range);

        break;

      default:
    } // light viewProj


    _index.Mat4.multiply(_matShadowViewProj, _matShadowViewProj, _matShadowView);

    _index.Mat4.toArray(this._shadowUBO, _matShadowViewProj, _define.UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);

    _index.Color.toArray(this._shadowUBO, this._shadowInfo.shadowColor, _define.UBOShadow.SHADOW_COLOR_OFFSET);

    _vec4ShadowInfo.set(this._shadowInfo.size.x, this._shadowInfo.size.y, this._shadowInfo.pcf, this._shadowInfo.bias);

    _index.Vec4.toArray(this._shadowUBO, _vec4ShadowInfo, _define.UBOShadow.SHADOW_INFO_OFFSET);

    this._descriptorSet.getBuffer(_define.UBOShadow.BINDING).update(this._shadowUBO);
  }

}

exports.RenderShadowMapBatchedQueue = RenderShadowMapBatchedQueue;