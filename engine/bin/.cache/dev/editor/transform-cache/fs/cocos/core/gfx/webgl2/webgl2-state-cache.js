"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGL2StateCache = void 0;

var _defineClass = require("../define-class.js");

var _pipelineState = require("../pipeline-state.js");

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
class WebGL2StateCache {
  constructor() {
    this.glArrayBuffer = null;
    this.glElementArrayBuffer = null;
    this.glUniformBuffer = null;
    this.glBindUBOs = [];
    this.glBindUBOOffsets = [];
    this.glVAO = null;
    this.texUnit = 0;
    this.glTexUnits = [];
    this.glSamplerUnits = [];
    this.glRenderbuffer = null;
    this.glFramebuffer = null;
    this.glReadFramebuffer = null;
    this.viewport = new _defineClass.Viewport();
    this.scissorRect = new _defineClass.Rect(0, 0, 0, 0);
    this.rs = new _pipelineState.RasterizerState();
    this.dss = new _pipelineState.DepthStencilState();
    this.bs = new _pipelineState.BlendState();
    this.glProgram = null;
    this.glEnabledAttribLocs = [];
    this.glCurrentAttribLocs = [];
    this.texUnitCacheMap = {};
  }

  initialize(texUnit, bufferBindings, vertexAttributes) {
    for (let i = 0; i < texUnit; ++i) this.glTexUnits.push({
      glTexture: null
    });

    this.glSamplerUnits.length = texUnit;
    this.glSamplerUnits.fill(null);
    this.glBindUBOs.length = bufferBindings;
    this.glBindUBOs.fill(null);
    this.glBindUBOOffsets.length = bufferBindings;
    this.glBindUBOOffsets.fill(0);
    this.glEnabledAttribLocs.length = vertexAttributes;
    this.glEnabledAttribLocs.fill(false);
    this.glCurrentAttribLocs.length = vertexAttributes;
    this.glCurrentAttribLocs.fill(false);
  }

}

exports.WebGL2StateCache = WebGL2StateCache;