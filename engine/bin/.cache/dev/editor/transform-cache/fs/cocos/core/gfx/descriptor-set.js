"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptorSet = exports.DescriptorSetInfo = exports.DESCRIPTOR_SAMPLER_TYPE = exports.DESCRIPTOR_BUFFER_TYPE = void 0;

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
const DESCRIPTOR_BUFFER_TYPE = _define.DescriptorType.UNIFORM_BUFFER | _define.DescriptorType.DYNAMIC_UNIFORM_BUFFER | _define.DescriptorType.STORAGE_BUFFER | _define.DescriptorType.DYNAMIC_STORAGE_BUFFER;
exports.DESCRIPTOR_BUFFER_TYPE = DESCRIPTOR_BUFFER_TYPE;
const DESCRIPTOR_SAMPLER_TYPE = _define.DescriptorType.SAMPLER;
exports.DESCRIPTOR_SAMPLER_TYPE = DESCRIPTOR_SAMPLER_TYPE;

class DescriptorSetInfo {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(layout) {
    this.layout = layout;
  }

}
/**
 * @en GFX descriptor sets.
 * @zh GFX 描述符集组。
 */


exports.DescriptorSetInfo = DescriptorSetInfo;

class DescriptorSet extends _define.Obj {
  get layout() {
    return this._layout;
  }

  constructor(device) {
    super(_define.ObjectType.DESCRIPTOR_SET);
    this._device = void 0;
    this._layout = null;
    this._buffers = [];
    this._textures = [];
    this._samplers = [];
    this._isDirty = false;
    this._device = device;
  }

  /**
   * @en Bind buffer to the specified descriptor.
   * @zh 在指定的描述符位置上绑定缓冲。
   * @param binding The target binding.
   * @param buffer The buffer to be bound.
   */
  bindBuffer(binding, buffer, index = 0) {
    const bindingIndex = this._layout.bindingIndices[binding];
    const info = this._layout.bindings[bindingIndex];

    if (!info) {
      return;
    }

    if (info.descriptorType & DESCRIPTOR_BUFFER_TYPE) {
      const descriptorIndex = this._layout.descriptorIndices[binding];

      if (this._buffers[descriptorIndex + index] !== buffer) {
        this._buffers[descriptorIndex + index] = buffer;
        this._isDirty = true;
      }
    } else {
      console.warn('Setting binding is not DescriptorType.UNIFORM_BUFFER.');
    }
  }
  /**
   * @en Bind sampler to the specified descriptor.
   * @zh 在指定的描述符位置上绑定采样器。
   * @param binding The target binding.
   * @param sampler The sampler to be bound.
   */


  bindSampler(binding, sampler, index = 0) {
    const bindingIndex = this._layout.bindingIndices[binding];
    const info = this._layout.bindings[bindingIndex];

    if (!info) {
      return;
    }

    if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
      const descriptorIndex = this._layout.descriptorIndices[binding];

      if (this._samplers[descriptorIndex + index] !== sampler) {
        this._samplers[descriptorIndex + index] = sampler;
        this._isDirty = true;
      }
    } else {
      console.warn('Setting binding is not DescriptorType.SAMPLER.');
    }
  }
  /**
   * @en Bind texture to the specified descriptor.
   * @zh 在指定的描述符位置上绑定纹理。
   * @param binding The target binding.
   * @param texture The texture to be bound.
   */


  bindTexture(binding, texture, index = 0) {
    const bindingIndex = this._layout.bindingIndices[binding];
    const info = this._layout.bindings[bindingIndex];

    if (!info) {
      return;
    }

    if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
      const descriptorIndex = this._layout.descriptorIndices[binding];

      if (this._textures[descriptorIndex + index] !== texture) {
        this._textures[descriptorIndex + index] = texture;
        this._isDirty = true;
      }
    } else {
      console.warn('Setting binding is not DescriptorType.SAMPLER.');
    }
  }
  /**
   * @en Get buffer from the specified binding location.
   * @zh 获取当前指定绑定位置上的缓冲。
   * @param binding The target binding.
   */


  getBuffer(binding, index = 0) {
    const descriptorIndex = this._layout.descriptorIndices[binding];
    return this._buffers[descriptorIndex + index];
  }
  /**
   * @en Get sampler from the specified binding location.
   * @zh 获取当前指定绑定位置上的采样器。
   * @param binding The target binding.
   */


  getSampler(binding, index = 0) {
    const descriptorIndex = this._layout.descriptorIndices[binding];
    return this._samplers[descriptorIndex + index];
  }
  /**
   * @en Get texture from the specified binding location.
   * @zh 获取当前指定绑定位置上的贴图。
   * @param binding The target binding.
   */


  getTexture(binding, index = 0) {
    const descriptorIndex = this._layout.descriptorIndices[binding];
    return this._textures[descriptorIndex + index];
  }

}

exports.DescriptorSet = DescriptorSet;