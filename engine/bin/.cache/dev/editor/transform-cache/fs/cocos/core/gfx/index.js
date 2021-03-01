"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _globalExports = require("../global-exports.js");

var _polyfillLegacyCc = require("./polyfill-legacy-cc.js");

require("./deprecated-3.0.0.js");

var _descriptorSet = require("./descriptor-set.js");

Object.keys(_descriptorSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _descriptorSet[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _descriptorSet[key];
    }
  });
});

var _buffer = require("./buffer.js");

Object.keys(_buffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _buffer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _buffer[key];
    }
  });
});

var _commandBuffer = require("./command-buffer.js");

Object.keys(_commandBuffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _commandBuffer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _commandBuffer[key];
    }
  });
});

var _define = require("./define.js");

Object.keys(_define).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _define[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _define[key];
    }
  });
});

var _defineClass = require("./define-class.js");

Object.keys(_defineClass).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _defineClass[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defineClass[key];
    }
  });
});

var _device = require("./device.js");

Object.keys(_device).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _device[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _device[key];
    }
  });
});

var _framebuffer = require("./framebuffer.js");

Object.keys(_framebuffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _framebuffer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _framebuffer[key];
    }
  });
});

var _inputAssembler = require("./input-assembler.js");

Object.keys(_inputAssembler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputAssembler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inputAssembler[key];
    }
  });
});

var _descriptorSetLayout = require("./descriptor-set-layout.js");

Object.keys(_descriptorSetLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _descriptorSetLayout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _descriptorSetLayout[key];
    }
  });
});

var _pipelineLayout = require("./pipeline-layout.js");

Object.keys(_pipelineLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pipelineLayout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pipelineLayout[key];
    }
  });
});

var _pipelineState = require("./pipeline-state.js");

Object.keys(_pipelineState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pipelineState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pipelineState[key];
    }
  });
});

var _fence = require("./fence.js");

Object.keys(_fence).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fence[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fence[key];
    }
  });
});

var _queue = require("./queue.js");

Object.keys(_queue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _queue[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queue[key];
    }
  });
});

var _renderPass = require("./render-pass.js");

Object.keys(_renderPass).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _renderPass[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderPass[key];
    }
  });
});

var _sampler = require("./sampler.js");

Object.keys(_sampler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sampler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sampler[key];
    }
  });
});

var _shader = require("./shader.js");

Object.keys(_shader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _shader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _shader[key];
    }
  });
});

var _texture = require("./texture.js");

Object.keys(_texture).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _texture[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _texture[key];
    }
  });
});

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
_globalExports.legacyCC.gfx = _polyfillLegacyCc.polyfillCC;