System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-pipeline-state.js", ["../pipeline-state.js"], function (_export, _context) {
  "use strict";

  var PipelineState, WebGLPrimitives, WebGL2PipelineState;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_pipelineStateJs) {
      PipelineState = _pipelineStateJs.PipelineState;
    }],
    execute: function () {
      WebGLPrimitives = [0x0000, // WebGLRenderingContext.POINTS,
      0x0001, // WebGLRenderingContext.LINES,
      0x0003, // WebGLRenderingContext.LINE_STRIP,
      0x0002, // WebGLRenderingContext.LINE_LOOP,
      0x0000, // WebGLRenderingContext.NONE,
      0x0000, // WebGLRenderingContext.NONE,
      0x0000, // WebGLRenderingContext.NONE,
      0x0004, // WebGLRenderingContext.TRIANGLES,
      0x0005, // WebGLRenderingContext.TRIANGLE_STRIP,
      0x0006, // WebGLRenderingContext.TRIANGLE_FAN,
      0x0000, // WebGLRenderingContext.NONE,
      0x0000, // WebGLRenderingContext.NONE,
      0x0000, // WebGLRenderingContext.NONE,
      0x0000 // WebGLRenderingContext.NONE,
      ];

      _export("WebGL2PipelineState", WebGL2PipelineState = /*#__PURE__*/function (_PipelineState) {
        _inheritsLoose(WebGL2PipelineState, _PipelineState);

        function WebGL2PipelineState() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PipelineState.call.apply(_PipelineState, [this].concat(args)) || this;
          _this._gpuPipelineState = null;
          return _this;
        }

        var _proto = WebGL2PipelineState.prototype;

        _proto.initialize = function initialize(info) {
          this._primitive = info.primitive;
          this._shader = info.shader;
          this._pipelineLayout = info.pipelineLayout;
          var bs = this._bs;

          if (info.blendState) {
            var bsInfo = info.blendState;
            var targets = bsInfo.targets;

            if (targets) {
              targets.forEach(function (t, i) {
                bs.setTarget(i, t);
              });
            }

            if (bsInfo.isA2C !== undefined) {
              bs.isA2C = bsInfo.isA2C;
            }

            if (bsInfo.isIndepend !== undefined) {
              bs.isIndepend = bsInfo.isIndepend;
            }

            if (bsInfo.blendColor !== undefined) {
              bs.blendColor = bsInfo.blendColor;
            }
          }

          Object.assign(this._rs, info.rasterizerState);
          Object.assign(this._dss, info.depthStencilState);
          this._is = info.inputState;
          this._renderPass = info.renderPass;
          this._dynamicStates = info.dynamicStates;
          var dynamicStates = [];

          for (var i = 0; i < 31; i++) {
            if (this._dynamicStates & 1 << i) {
              dynamicStates.push(1 << i);
            }
          }

          this._gpuPipelineState = {
            glPrimitive: WebGLPrimitives[info.primitive],
            gpuShader: info.shader.gpuShader,
            gpuPipelineLayout: info.pipelineLayout.gpuPipelineLayout,
            rs: info.rasterizerState,
            dss: info.depthStencilState,
            bs: info.blendState,
            gpuRenderPass: info.renderPass.gpuRenderPass,
            dynamicStates: dynamicStates
          };
          return true;
        };

        _proto.destroy = function destroy() {
          this._gpuPipelineState = null;
        };

        _createClass(WebGL2PipelineState, [{
          key: "gpuPipelineState",
          get: function get() {
            return this._gpuPipelineState;
          }
        }]);

        return WebGL2PipelineState;
      }(PipelineState));
    }
  };
});