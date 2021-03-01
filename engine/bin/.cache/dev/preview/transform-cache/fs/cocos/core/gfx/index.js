System.register("q-bundled:///fs/cocos/core/gfx/index.js", ["../global-exports.js", "./polyfill-legacy-cc.js", "./deprecated-3.0.0.js", "./descriptor-set.js", "./buffer.js", "./command-buffer.js", "./define.js", "./define-class.js", "./device.js", "./framebuffer.js", "./input-assembler.js", "./descriptor-set-layout.js", "./pipeline-layout.js", "./pipeline-state.js", "./fence.js", "./queue.js", "./render-pass.js", "./sampler.js", "./shader.js", "./texture.js"], function (_export, _context) {
  "use strict";

  var legacyCC, polyfillCC;
  return {
    setters: [function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_polyfillLegacyCcJs) {
      polyfillCC = _polyfillLegacyCcJs.polyfillCC;
    }, function (_deprecated300Js) {}, function (_descriptorSetJs) {
      var _exportObj = {};

      for (var _key in _descriptorSetJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _descriptorSetJs[_key];
      }

      _export(_exportObj);
    }, function (_bufferJs) {
      var _exportObj2 = {};

      for (var _key2 in _bufferJs) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _bufferJs[_key2];
      }

      _export(_exportObj2);
    }, function (_commandBufferJs) {
      var _exportObj3 = {};

      for (var _key3 in _commandBufferJs) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _commandBufferJs[_key3];
      }

      _export(_exportObj3);
    }, function (_defineJs) {
      var _exportObj4 = {};

      for (var _key4 in _defineJs) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _defineJs[_key4];
      }

      _export(_exportObj4);
    }, function (_defineClassJs) {
      var _exportObj5 = {};

      for (var _key5 in _defineClassJs) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _defineClassJs[_key5];
      }

      _export(_exportObj5);
    }, function (_deviceJs) {
      var _exportObj6 = {};

      for (var _key6 in _deviceJs) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _deviceJs[_key6];
      }

      _export(_exportObj6);
    }, function (_framebufferJs) {
      var _exportObj7 = {};

      for (var _key7 in _framebufferJs) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _framebufferJs[_key7];
      }

      _export(_exportObj7);
    }, function (_inputAssemblerJs) {
      var _exportObj8 = {};

      for (var _key8 in _inputAssemblerJs) {
        if (_key8 !== "default" && _key8 !== "__esModule") _exportObj8[_key8] = _inputAssemblerJs[_key8];
      }

      _export(_exportObj8);
    }, function (_descriptorSetLayoutJs) {
      var _exportObj9 = {};

      for (var _key9 in _descriptorSetLayoutJs) {
        if (_key9 !== "default" && _key9 !== "__esModule") _exportObj9[_key9] = _descriptorSetLayoutJs[_key9];
      }

      _export(_exportObj9);
    }, function (_pipelineLayoutJs) {
      var _exportObj10 = {};

      for (var _key10 in _pipelineLayoutJs) {
        if (_key10 !== "default" && _key10 !== "__esModule") _exportObj10[_key10] = _pipelineLayoutJs[_key10];
      }

      _export(_exportObj10);
    }, function (_pipelineStateJs) {
      var _exportObj11 = {};

      for (var _key11 in _pipelineStateJs) {
        if (_key11 !== "default" && _key11 !== "__esModule") _exportObj11[_key11] = _pipelineStateJs[_key11];
      }

      _export(_exportObj11);
    }, function (_fenceJs) {
      var _exportObj12 = {};

      for (var _key12 in _fenceJs) {
        if (_key12 !== "default" && _key12 !== "__esModule") _exportObj12[_key12] = _fenceJs[_key12];
      }

      _export(_exportObj12);
    }, function (_queueJs) {
      var _exportObj13 = {};

      for (var _key13 in _queueJs) {
        if (_key13 !== "default" && _key13 !== "__esModule") _exportObj13[_key13] = _queueJs[_key13];
      }

      _export(_exportObj13);
    }, function (_renderPassJs) {
      var _exportObj14 = {};

      for (var _key14 in _renderPassJs) {
        if (_key14 !== "default" && _key14 !== "__esModule") _exportObj14[_key14] = _renderPassJs[_key14];
      }

      _export(_exportObj14);
    }, function (_samplerJs) {
      var _exportObj15 = {};

      for (var _key15 in _samplerJs) {
        if (_key15 !== "default" && _key15 !== "__esModule") _exportObj15[_key15] = _samplerJs[_key15];
      }

      _export(_exportObj15);
    }, function (_shaderJs) {
      var _exportObj16 = {};

      for (var _key16 in _shaderJs) {
        if (_key16 !== "default" && _key16 !== "__esModule") _exportObj16[_key16] = _shaderJs[_key16];
      }

      _export(_exportObj16);
    }, function (_textureJs) {
      var _exportObj17 = {};

      for (var _key17 in _textureJs) {
        if (_key17 !== "default" && _key17 !== "__esModule") _exportObj17[_key17] = _textureJs[_key17];
      }

      _export(_exportObj17);
    }],
    execute: function () {
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
      legacyCC.gfx = polyfillCC;
    }
  };
});