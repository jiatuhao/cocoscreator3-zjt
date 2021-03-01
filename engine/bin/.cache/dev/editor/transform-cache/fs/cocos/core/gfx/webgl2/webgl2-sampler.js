"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGL2Sampler = void 0;

var _sampler = require("../sampler.js");

var _webgl2Commands = require("./webgl2-commands.js");

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
class WebGL2Sampler extends _sampler.Sampler {
  constructor(...args) {
    super(...args);
    this._gpuSampler = null;
  }

  get gpuSampler() {
    return this._gpuSampler;
  }

  initialize(info) {
    this._minFilter = info.minFilter;
    this._magFilter = info.magFilter;
    this._mipFilter = info.mipFilter;
    this._addressU = info.addressU;
    this._addressV = info.addressV;
    this._addressW = info.addressW;
    this._maxAnisotropy = info.maxAnisotropy;
    this._cmpFunc = info.cmpFunc;
    this._borderColor = info.borderColor;
    this._minLOD = info.minLOD;
    this._maxLOD = info.maxLOD;
    this._mipLODBias = info.mipLODBias;
    this._gpuSampler = {
      glSampler: null,
      minFilter: this._minFilter,
      magFilter: this._magFilter,
      mipFilter: this._mipFilter,
      addressU: this._addressU,
      addressV: this._addressV,
      addressW: this._addressW,
      minLOD: this._minLOD,
      maxLOD: this._maxLOD,
      glMinFilter: 0,
      glMagFilter: 0,
      glWrapS: 0,
      glWrapT: 0,
      glWrapR: 0
    };
    (0, _webgl2Commands.WebGL2CmdFuncCreateSampler)(this._device, this._gpuSampler);
    return true;
  }

  destroy() {
    if (this._gpuSampler) {
      (0, _webgl2Commands.WebGL2CmdFuncDestroySampler)(this._device, this._gpuSampler);
      this._gpuSampler = null;
    }
  }

}

exports.WebGL2Sampler = WebGL2Sampler;