"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PipelineLayout = exports.PipelineLayoutInfo = void 0;

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
class PipelineLayoutInfo {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(setLayouts = []) {
    this.setLayouts = setLayouts;
  }

}
/**
 * @en GFX pipeline layout.
 * @zh GFX 管线布局。
 */


exports.PipelineLayoutInfo = PipelineLayoutInfo;

class PipelineLayout extends _define.Obj {
  get setLayouts() {
    return this._setLayouts;
  }

  constructor(device) {
    super(_define.ObjectType.PIPELINE_LAYOUT);
    this._device = void 0;
    this._setLayouts = [];
    this._device = device;
  }

}

exports.PipelineLayout = PipelineLayout;