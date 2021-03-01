"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SkinningModelComponent", {
  enumerable: true,
  get: function () {
    return _skinnedMeshRenderer.SkinnedMeshRenderer;
  }
});
Object.defineProperty(exports, "BatchedSkinningModelComponent", {
  enumerable: true,
  get: function () {
    return _skinnedMeshBatchRenderer.SkinnedMeshBatchRenderer;
  }
});
Object.defineProperty(exports, "SkinningModelUnit", {
  enumerable: true,
  get: function () {
    return _skinnedMeshBatchRenderer.SkinnedMeshUnit;
  }
});

var _skinnedMeshRenderer = require("./skinned-mesh-renderer.js");

var _skinnedMeshBatchRenderer = require("./skinned-mesh-batch-renderer.js");

var _js = require("../../core/utils/js.js");

var _globalExports = require("../../core/global-exports.js");

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
 * @module component
 */

/**
 * Alias of [[SkinnedMeshRenderer]]
 * @deprecated Since v1.2
 */
_globalExports.legacyCC.SkinningModelComponent = _skinnedMeshRenderer.SkinnedMeshRenderer;

_js.js.setClassAlias(_skinnedMeshRenderer.SkinnedMeshRenderer, 'cc.SkinningModelComponent');
/**
 * Alias of [[SkinnedMeshUnit]]
 * @deprecated Since v1.2
 */


_globalExports.legacyCC.SkinningModelUnit = _skinnedMeshBatchRenderer.SkinnedMeshUnit;

_js.js.setClassAlias(_skinnedMeshBatchRenderer.SkinnedMeshUnit, 'cc.SkinningModelUnit');
/**
 * Alias of [[SkinnedMeshBatchRenderer]]
 * @deprecated Since v1.2
 */


_globalExports.legacyCC.BatchedSkinningModelComponent = _skinnedMeshBatchRenderer.SkinnedMeshBatchRenderer;

_js.js.setClassAlias(_skinnedMeshBatchRenderer.SkinnedMeshBatchRenderer, 'cc.BatchedSkinningModelComponent');