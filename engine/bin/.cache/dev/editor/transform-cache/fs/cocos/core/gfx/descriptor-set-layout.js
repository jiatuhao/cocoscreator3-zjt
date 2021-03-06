"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptorSetLayout = exports.DESCRIPTOR_DYNAMIC_TYPE = exports.DescriptorSetLayoutInfo = exports.DescriptorSetLayoutBinding = void 0;

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
class DescriptorSetLayoutBinding {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(binding = -1, descriptorType = _define.DescriptorType.UNKNOWN, count = 0, stageFlags = _define.ShaderStageFlagBit.NONE, immutableSamplers = []) {
    this.binding = binding;
    this.descriptorType = descriptorType;
    this.count = count;
    this.stageFlags = stageFlags;
    this.immutableSamplers = immutableSamplers;
  }

}

exports.DescriptorSetLayoutBinding = DescriptorSetLayoutBinding;

class DescriptorSetLayoutInfo {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(bindings = []) {
    this.bindings = bindings;
  }

}

exports.DescriptorSetLayoutInfo = DescriptorSetLayoutInfo;
const DESCRIPTOR_DYNAMIC_TYPE = _define.DescriptorType.DYNAMIC_STORAGE_BUFFER | _define.DescriptorType.DYNAMIC_UNIFORM_BUFFER;
/**
 * @en GFX descriptor sets layout.
 * @zh GFX 描述符集布局。
 */

exports.DESCRIPTOR_DYNAMIC_TYPE = DESCRIPTOR_DYNAMIC_TYPE;

class DescriptorSetLayout extends _define.Obj {
  get bindings() {
    return this._bindings;
  }

  get bindingIndices() {
    return this._bindingIndices;
  }

  get descriptorIndices() {
    return this._descriptorIndices;
  }

  constructor(device) {
    super(_define.ObjectType.DESCRIPTOR_SET_LAYOUT);
    this._device = void 0;
    this._bindings = [];
    this._bindingIndices = [];
    this._descriptorIndices = [];
    this._device = device;
  }

}

exports.DescriptorSetLayout = DescriptorSetLayout;