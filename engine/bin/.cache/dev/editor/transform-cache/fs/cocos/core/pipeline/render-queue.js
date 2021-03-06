"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.opaqueCompareFn = opaqueCompareFn;
exports.transparentCompareFn = transparentCompareFn;
exports.RenderQueue = void 0;

var _index = require("../memop/index.js");

var _cachedArray = require("../memop/cached-array.js");

var _define = require("./define.js");

var _pipelineStateManager = require("./pipeline-state-manager.js");

var _memoryPools = require("../renderer/core/memory-pools.js");

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

/**
 * @en Comparison sorting function. Opaque objects are sorted by priority -> depth front to back -> shader ID.
 * @zh 比较排序函数。不透明对象按优先级 -> 深度由前向后 -> Shader ID 顺序排序。
 */
function opaqueCompareFn(a, b) {
  return a.hash - b.hash || a.depth - b.depth || a.shaderId - b.shaderId;
}
/**
 * @en Comparison sorting function. Transparent objects are sorted by priority -> depth back to front -> shader ID.
 * @zh 比较排序函数。半透明对象按优先级 -> 深度由后向前 -> Shader ID 顺序排序。
 */


function transparentCompareFn(a, b) {
  return a.hash - b.hash || b.depth - a.depth || a.shaderId - b.shaderId;
}
/**
 * @en The render queue. It manages a GFX [[RenderPass]] queue which will be executed by the [[RenderStage]].
 * @zh 渲染队列。它管理一个 GFX [[RenderPass]] 队列，队列中的渲染过程会被 [[RenderStage]] 所执行。
 */


class RenderQueue {
  /**
   * @en A cached array of render passes
   * @zh 基于缓存数组的渲染过程队列。
   */

  /**
   * @en Construct a RenderQueue with render queue descriptor
   * @zh 利用渲染队列描述来构造一个 RenderQueue。
   * @param desc Render queue descriptor
   */
  constructor(desc) {
    this.queue = void 0;
    this._passDesc = void 0;
    this._passPool = void 0;
    this._passDesc = desc;
    this._passPool = new _index.RecyclePool(() => ({
      hash: 0,
      depth: 0,
      shaderId: 0,
      subModel: null,
      passIdx: 0
    }), 64);
    this.queue = new _cachedArray.CachedArray(64, this._passDesc.sortFunc);
  }
  /**
   * @en Clear the render queue
   * @zh 清空渲染队列。
   */


  clear() {
    this.queue.clear();

    this._passPool.reset();
  }
  /**
   * @en Insert a render pass into the queue
   * @zh 插入渲染过程。
   * @param renderObj The render object of the pass
   * @param modelIdx The model id
   * @param passIdx The pass id
   * @returns Whether the new render pass is successfully added
   */


  insertRenderPass(renderObj, subModelIdx, passIdx) {
    const subModel = renderObj.model.subModels[subModelIdx];

    const hPass = _memoryPools.SubModelPool.get(subModel.handle, _memoryPools.SubModelView.PASS_0 + passIdx);

    const isTransparent = subModel.passes[passIdx].blendState.targets[0].blend;

    if (isTransparent !== this._passDesc.isTransparent || !(_memoryPools.PassPool.get(hPass, _memoryPools.PassView.PHASE) & this._passDesc.phases)) {
      return false;
    }

    const hash = 0 << 30 | _memoryPools.PassPool.get(hPass, _memoryPools.PassView.PRIORITY) << 16 | subModel.priority << 8 | passIdx;

    const rp = this._passPool.add();

    rp.hash = hash;
    rp.depth = renderObj.depth || 0;
    rp.shaderId = _memoryPools.SubModelPool.get(subModel.handle, _memoryPools.SubModelView.SHADER_0 + passIdx);
    rp.subModel = subModel;
    rp.passIdx = passIdx;
    this.queue.push(rp);
    return true;
  }
  /**
   * @en Sort the current queue
   * @zh 排序渲染队列。
   */


  sort() {
    this.queue.sort();
  }

  recordCommandBuffer(device, renderPass, cmdBuff) {
    for (let i = 0; i < this.queue.length; ++i) {
      const {
        subModel,
        passIdx
      } = this.queue.array[i];
      const {
        inputAssembler,
        handle: hSubModel
      } = subModel;
      const pass = subModel.passes[passIdx];

      const shader = _memoryPools.ShaderPool.get(_memoryPools.SubModelPool.get(hSubModel, _memoryPools.SubModelView.SHADER_0 + passIdx));

      const pso = _pipelineStateManager.PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, inputAssembler);

      cmdBuff.bindPipelineState(pso);
      cmdBuff.bindDescriptorSet(_define.SetIndex.MATERIAL, pass.descriptorSet);
      cmdBuff.bindDescriptorSet(_define.SetIndex.LOCAL, subModel.descriptorSet);
      cmdBuff.bindInputAssembler(inputAssembler);
      cmdBuff.draw(inputAssembler);
    }
  }

}

exports.RenderQueue = RenderQueue;