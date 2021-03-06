"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderPass = exports.RenderPassInfo = exports.SubPassInfo = exports.DepthStencilAttachment = exports.ColorAttachment = void 0;

var _murmurhash2_gc = require("../utils/murmurhash2_gc.js");

var _define = require("./define.js");

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
 * @module gfx
 */

/**
 * @en Color attachment.
 * @zh GFX 颜色附件。
 */
class ColorAttachment {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(format = _define.Format.UNKNOWN, sampleCount = 1, loadOp = _define.LoadOp.CLEAR, storeOp = _define.StoreOp.STORE, beginLayout = _define.TextureLayout.UNDEFINED, endLayout = _define.TextureLayout.PRESENT_SRC) {
    this.format = format;
    this.sampleCount = sampleCount;
    this.loadOp = loadOp;
    this.storeOp = storeOp;
    this.beginLayout = beginLayout;
    this.endLayout = endLayout;
  }

}
/**
 * @en Depth stencil attachment.
 * @zh GFX 深度模板附件。
 */


exports.ColorAttachment = ColorAttachment;

class DepthStencilAttachment {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(format = _define.Format.UNKNOWN, sampleCount = 1, depthLoadOp = _define.LoadOp.CLEAR, depthStoreOp = _define.StoreOp.STORE, stencilLoadOp = _define.LoadOp.CLEAR, stencilStoreOp = _define.StoreOp.STORE, beginLayout = _define.TextureLayout.UNDEFINED, endLayout = _define.TextureLayout.DEPTH_STENCIL_ATTACHMENT_OPTIMAL) {
    this.format = format;
    this.sampleCount = sampleCount;
    this.depthLoadOp = depthLoadOp;
    this.depthStoreOp = depthStoreOp;
    this.stencilLoadOp = stencilLoadOp;
    this.stencilStoreOp = stencilStoreOp;
    this.beginLayout = beginLayout;
    this.endLayout = endLayout;
  }

}

exports.DepthStencilAttachment = DepthStencilAttachment;

class SubPassInfo {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(bindPoint = _define.PipelineBindPoint.GRAPHICS, inputs = [], colors = [], resolves = [], depthStencil = -1, preserves = []) {
    this.bindPoint = bindPoint;
    this.inputs = inputs;
    this.colors = colors;
    this.resolves = resolves;
    this.depthStencil = depthStencil;
    this.preserves = preserves;
  }

}

exports.SubPassInfo = SubPassInfo;

class RenderPassInfo {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(colorAttachments = [], depthStencilAttachment = null, subPasses = []) {
    this.colorAttachments = colorAttachments;
    this.depthStencilAttachment = depthStencilAttachment;
    this.subPasses = subPasses;
  }

}
/**
 * @en GFX render pass.
 * @zh GFX 渲染过程。
 */


exports.RenderPassInfo = RenderPassInfo;

class RenderPass extends _define.Obj {
  get colorAttachments() {
    return this._colorInfos;
  }

  get depthStencilAttachment() {
    return this._depthStencilInfo;
  }

  get subPasses() {
    return this._subPasses;
  }

  get hash() {
    return this._hash;
  }

  constructor(device) {
    super(_define.ObjectType.RENDER_PASS);
    this._device = void 0;
    this._colorInfos = [];
    this._depthStencilInfo = null;
    this._subPasses = [];
    this._hash = 0;
    this._device = device;
  } // Based on render pass compatibility


  computeHash() {
    let res = '';

    if (this._subPasses.length) {
      for (let i = 0; i < this._subPasses.length; ++i) {
        const subpass = this._subPasses[i];

        if (subpass.inputs.length) {
          res += 'ia';

          for (let j = 0; j < subpass.inputs.length; ++j) {
            const ia = this._colorInfos[subpass.inputs[j]];
            res += `,${ia.format},${ia.sampleCount}`;
          }
        }

        if (subpass.colors.length) {
          res += 'ca';

          for (let j = 0; j < subpass.inputs.length; ++j) {
            const ca = this._colorInfos[subpass.inputs[j]];
            res += `,${ca.format},${ca.sampleCount}`;
          }
        }

        if (subpass.depthStencil >= 0) {
          const ds = this._colorInfos[subpass.depthStencil];
          res += `ds,${ds.format},${ds.sampleCount}`;
        }
      }
    } else {
      res += 'ca';

      for (let i = 0; i < this._colorInfos.length; ++i) {
        const ca = this._colorInfos[i];
        res += `,${ca.format},${ca.sampleCount}`;
      }

      const ds = this._depthStencilInfo;

      if (ds) {
        res += `ds,${ds.format},${ds.sampleCount}`;
      }
    }

    return (0, _murmurhash2_gc.murmurhash2_32_gc)(res, 666);
  }

}

exports.RenderPass = RenderPass;