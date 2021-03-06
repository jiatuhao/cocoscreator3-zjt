"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sampler = exports.SamplerInfo = void 0;

var _defineClass = require("./define-class.js");

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
class SamplerInfo {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(minFilter = _define.Filter.LINEAR, magFilter = _define.Filter.LINEAR, mipFilter = _define.Filter.NONE, addressU = _define.Address.WRAP, addressV = _define.Address.WRAP, addressW = _define.Address.WRAP, maxAnisotropy = 16, cmpFunc = _define.ComparisonFunc.NEVER, borderColor = new _defineClass.Color(), minLOD = 0, maxLOD = 0, mipLODBias = 0.0) {
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.mipFilter = mipFilter;
    this.addressU = addressU;
    this.addressV = addressV;
    this.addressW = addressW;
    this.maxAnisotropy = maxAnisotropy;
    this.cmpFunc = cmpFunc;
    this.borderColor = borderColor;
    this.minLOD = minLOD;
    this.maxLOD = maxLOD;
    this.mipLODBias = mipLODBias;
  }

}
/**
 * @en GFX sampler.
 * @zh GFX 采样器。
 */


exports.SamplerInfo = SamplerInfo;

class Sampler extends _define.Obj {
  get minFilter() {
    return this._minFilter;
  }

  get magFilter() {
    return this._magFilter;
  }

  get mipFilter() {
    return this._mipFilter;
  }

  get addressU() {
    return this._addressU;
  }

  get addressV() {
    return this._addressV;
  }

  get addressW() {
    return this._addressW;
  }

  get maxAnisotropy() {
    return this._maxAnisotropy;
  }

  get cmpFunc() {
    return this._cmpFunc;
  }

  get borderColor() {
    return this._borderColor;
  }

  get minLOD() {
    return this._minLOD;
  }

  get maxLOD() {
    return this._maxLOD;
  }

  get mipLODBias() {
    return this._mipLODBias;
  }

  constructor(device) {
    super(_define.ObjectType.SAMPLER);
    this._device = void 0;
    this._minFilter = _define.Filter.LINEAR;
    this._magFilter = _define.Filter.LINEAR;
    this._mipFilter = _define.Filter.NONE;
    this._addressU = _define.Address.WRAP;
    this._addressV = _define.Address.WRAP;
    this._addressW = _define.Address.WRAP;
    this._maxAnisotropy = 16;
    this._cmpFunc = _define.ComparisonFunc.NEVER;
    this._borderColor = new _defineClass.Color();
    this._minLOD = 0;
    this._maxLOD = 0;
    this._mipLODBias = 0.0;
    this._device = device;
  }

}

exports.Sampler = Sampler;