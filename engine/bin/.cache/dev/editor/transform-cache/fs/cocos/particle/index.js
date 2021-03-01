"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Billboard: true,
  Line: true,
  ParticleSystem: true,
  ParticleUtils: true,
  CurveRange: true,
  GradientRange: true
};
Object.defineProperty(exports, "Billboard", {
  enumerable: true,
  get: function () {
    return _billboard.Billboard;
  }
});
Object.defineProperty(exports, "Line", {
  enumerable: true,
  get: function () {
    return _line.Line;
  }
});
Object.defineProperty(exports, "ParticleSystem", {
  enumerable: true,
  get: function () {
    return _particleSystem.ParticleSystem;
  }
});
Object.defineProperty(exports, "ParticleUtils", {
  enumerable: true,
  get: function () {
    return _particleUtils.ParticleUtils;
  }
});
Object.defineProperty(exports, "CurveRange", {
  enumerable: true,
  get: function () {
    return _curveRange.default;
  }
});
Object.defineProperty(exports, "GradientRange", {
  enumerable: true,
  get: function () {
    return _gradientRange.default;
  }
});

var _billboard = require("./billboard.js");

var _line = require("./line.js");

var _particleSystem = require("./particle-system.js");

var _particleUtils = require("./particle-utils.js");

var _curveRange = _interopRequireDefault(require("./animator/curve-range.js"));

var _globalExports = require("../core/global-exports.js");

var _gradientRange = _interopRequireDefault(require("./animator/gradient-range.js"));

var _deprecated = require("./deprecated.js");

Object.keys(_deprecated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _deprecated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deprecated[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @hidden
 */
_globalExports.legacyCC.ParticleUtils = _particleUtils.ParticleUtils;