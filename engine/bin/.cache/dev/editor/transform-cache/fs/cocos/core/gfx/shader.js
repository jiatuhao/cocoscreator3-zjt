"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shader = exports.ShaderInfo = exports.UniformSampler = exports.UniformBlock = exports.Uniform = exports.ShaderStage = void 0;

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
class ShaderStage {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(stage = _define.ShaderStageFlagBit.NONE, source = '') {
    this.stage = stage;
    this.source = source;
  }

}

exports.ShaderStage = ShaderStage;

/**
 * @en GFX uniform.
 * @zh GFX uniform。
 */
class Uniform {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(name = '', type = _define.Type.UNKNOWN, count = 1) {
    this.name = name;
    this.type = type;
    this.count = count;
  }

}
/**
 * @en GFX uniform block.
 * @zh GFX uniform 块。
 */


exports.Uniform = Uniform;

class UniformBlock {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(set = -1, binding = -1, name = '', members = [], count = 1) {
    this.set = set;
    this.binding = binding;
    this.name = name;
    this.members = members;
    this.count = count;
  }

}
/**
 * @en GFX uniform sampler.
 * @zh GFX Uniform 采样器。
 */


exports.UniformBlock = UniformBlock;

class UniformSampler {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(set = -1, binding = -1, name = '', type = _define.Type.UNKNOWN, count = 1) {
    this.set = set;
    this.binding = binding;
    this.name = name;
    this.type = type;
    this.count = count;
  }

}

exports.UniformSampler = UniformSampler;

class ShaderInfo {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(name = '', stages = [], attributes = [], blocks = [], samplers = []) {
    this.name = name;
    this.stages = stages;
    this.attributes = attributes;
    this.blocks = blocks;
    this.samplers = samplers;
  }

}
/**
 * @en GFX shader.
 * @zh GFX 着色器。
 */


exports.ShaderInfo = ShaderInfo;

class Shader extends _define.Obj {
  /**
   * @en Get current shader id.
   * @zh 着色器 id。
   */
  get id() {
    return this._id;
  }
  /**
   * @en Get current shader name.
   * @zh 着色器名称。
   */


  get name() {
    return this._name;
  }

  get attributes() {
    return this._attributes;
  }

  get blocks() {
    return this._blocks;
  }

  get samplers() {
    return this._samplers;
  }

  constructor(device) {
    super(_define.ObjectType.SHADER);
    this._device = void 0;
    this._id = void 0;
    this._name = '';
    this._stages = [];
    this._attributes = [];
    this._blocks = [];
    this._samplers = [];
    this._device = device;
    this._id = Shader._shaderIdGen++;
  }

}

exports.Shader = Shader;
Shader._shaderIdGen = 0;