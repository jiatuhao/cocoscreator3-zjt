"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGLShader = void 0;

var _shader = require("../shader.js");

var _webglCommands = require("./webgl-commands.js");

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
class WebGLShader extends _shader.Shader {
  constructor(...args) {
    super(...args);
    this._gpuShader = null;
  }

  get gpuShader() {
    return this._gpuShader;
  }

  initialize(info) {
    this._name = info.name;
    this._stages = info.stages;
    this._attributes = info.attributes;
    this._blocks = info.blocks;
    this._samplers = info.samplers;
    this._gpuShader = {
      name: info.name,
      blocks: info.blocks,
      samplers: info.samplers,
      gpuStages: new Array(info.stages.length),
      glProgram: null,
      glInputs: [],
      glUniforms: [],
      glBlocks: [],
      glSamplers: []
    };

    for (let i = 0; i < info.stages.length; ++i) {
      const stage = info.stages[i];
      this._gpuShader.gpuStages[i] = {
        type: stage.stage,
        source: stage.source,
        glShader: null
      };
    }

    (0, _webglCommands.WebGLCmdFuncCreateShader)(this._device, this._gpuShader);
    return true;
  }

  destroy() {
    if (this._gpuShader) {
      (0, _webglCommands.WebGLCmdFuncDestroyShader)(this._device, this._gpuShader);
      this._gpuShader = null;
    }
  }

}

exports.WebGLShader = WebGLShader;