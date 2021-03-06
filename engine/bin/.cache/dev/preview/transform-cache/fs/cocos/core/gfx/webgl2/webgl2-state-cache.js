System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-state-cache.js", ["../define-class.js", "../pipeline-state.js"], function (_export, _context) {
  "use strict";

  var Rect, Viewport, BlendState, DepthStencilState, RasterizerState, WebGL2StateCache;
  return {
    setters: [function (_defineClassJs) {
      Rect = _defineClassJs.Rect;
      Viewport = _defineClassJs.Viewport;
    }, function (_pipelineStateJs) {
      BlendState = _pipelineStateJs.BlendState;
      DepthStencilState = _pipelineStateJs.DepthStencilState;
      RasterizerState = _pipelineStateJs.RasterizerState;
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
      _export("WebGL2StateCache", WebGL2StateCache = /*#__PURE__*/function () {
        function WebGL2StateCache() {
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
          this.viewport = new Viewport();
          this.scissorRect = new Rect(0, 0, 0, 0);
          this.rs = new RasterizerState();
          this.dss = new DepthStencilState();
          this.bs = new BlendState();
          this.glProgram = null;
          this.glEnabledAttribLocs = [];
          this.glCurrentAttribLocs = [];
          this.texUnitCacheMap = {};
        }

        var _proto = WebGL2StateCache.prototype;

        _proto.initialize = function initialize(texUnit, bufferBindings, vertexAttributes) {
          for (var i = 0; i < texUnit; ++i) {
            this.glTexUnits.push({
              glTexture: null
            });
          }

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
        };

        return WebGL2StateCache;
      }());
    }
  };
});