"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlanarShadowQueue = void 0;

var _index = require("../../geometry/index.js");

var _define = require("../define.js");

var _instancedBuffer = require("../instanced-buffer.js");

var _pipelineStateManager = require("../pipeline-state-manager.js");

var _memoryPools = require("../../renderer/core/memory-pools.js");

var _renderInstancedQueue = require("../render-instanced-queue.js");

var _shadows = require("../../renderer/scene/shadows.js");

var _layers = require("../../scene-graph/layers.js");

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
const _ab = new _index.AABB();

class PlanarShadowQueue {
  constructor(pipeline) {
    this._pendingModels = [];
    this._instancedQueue = new _renderInstancedQueue.RenderInstancedQueue();
    this._pipeline = void 0;
    this._pipeline = pipeline;
  }

  gatherShadowPasses(camera, cmdBuff) {
    const shadows = this._pipeline.shadows;
    this._pendingModels.length = 0;

    if (!shadows.enabled || shadows.type !== _shadows.ShadowType.Planar) {
      return;
    }

    this._pipeline.updateShadowUBO(camera);

    const scene = camera.scene;
    const frstm = camera.frustum;
    const shadowVisible = (camera.visibility & _layers.Layers.BitMask.DEFAULT) !== 0;

    if (!scene.mainLight || !shadowVisible) {
      return;
    }

    const models = this._pipeline.renderObjects;

    const instancedBuffer = _instancedBuffer.InstancedBuffer.get(shadows.instancingMaterial.passes[0]);

    this._instancedQueue.clear();

    this._instancedQueue.queue.add(instancedBuffer);

    for (let i = 0; i < models.length; i++) {
      const model = models[i].model;

      if (!model.enabled || !model.node || !model.castShadow) {
        continue;
      }

      if (model.worldBounds) {
        _index.AABB.transform(_ab, model.worldBounds, shadows.matLight);

        if (!_index.intersect.aabbFrustum(_ab, frstm)) {
          continue;
        }
      }

      if (model.isInstancingEnabled) {
        for (let j = 0; j < model.subModels.length; j++) {
          instancedBuffer.merge(model.subModels[j], model.instancedAttributes, 0);
        }
      } else {
        this._pendingModels.push(model);
      }
    }

    this._instancedQueue.uploadBuffers(cmdBuff);
  }

  recordCommandBuffer(device, renderPass, cmdBuff) {
    const shadows = this._pipeline.shadows;

    if (!shadows.enabled || shadows.type !== _shadows.ShadowType.Planar || !this._pendingModels.length) {
      return;
    }

    this._instancedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

    const pass = shadows.material.passes[0];

    const descriptorSet = _memoryPools.DSPool.get(_memoryPools.PassPool.get(pass.handle, _memoryPools.PassView.DESCRIPTOR_SET));

    cmdBuff.bindDescriptorSet(_define.SetIndex.MATERIAL, descriptorSet);
    const modelCount = this._pendingModels.length;

    for (let i = 0; i < modelCount; i++) {
      const model = this._pendingModels[i];

      for (let j = 0; j < model.subModels.length; j++) {
        const subModel = model.subModels[j]; // This is a temporary solution
        // It should not be written in a fixed way, or modified by the user

        const shader = _memoryPools.ShaderPool.get(subModel.planarShaderHandel);

        const ia = subModel.inputAssembler;

        const pso = _pipelineStateManager.PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, ia);

        cmdBuff.bindPipelineState(pso);
        cmdBuff.bindDescriptorSet(_define.SetIndex.LOCAL, subModel.descriptorSet);
        cmdBuff.bindInputAssembler(ia);
        cmdBuff.draw(ia);
      }
    }
  }

}

exports.PlanarShadowQueue = PlanarShadowQueue;