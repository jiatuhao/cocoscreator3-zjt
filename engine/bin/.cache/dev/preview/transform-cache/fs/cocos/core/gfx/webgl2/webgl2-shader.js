System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-shader.js", ["../shader.js", "./webgl2-commands.js"], function (_export, _context) {
  "use strict";

  var Shader, WebGL2CmdFuncCreateShader, WebGL2CmdFuncDestroyShader, WebGL2Shader;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_shaderJs) {
      Shader = _shaderJs.Shader;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdFuncCreateShader = _webgl2CommandsJs.WebGL2CmdFuncCreateShader;
      WebGL2CmdFuncDestroyShader = _webgl2CommandsJs.WebGL2CmdFuncDestroyShader;
    }],
    execute: function () {
      _export("WebGL2Shader", WebGL2Shader = /*#__PURE__*/function (_Shader) {
        _inheritsLoose(WebGL2Shader, _Shader);

        function WebGL2Shader() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Shader.call.apply(_Shader, [this].concat(args)) || this;
          _this._gpuShader = null;
          return _this;
        }

        var _proto = WebGL2Shader.prototype;

        _proto.initialize = function initialize(info) {
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

          for (var i = 0; i < info.stages.length; ++i) {
            var stage = info.stages[i];
            this._gpuShader.gpuStages[i] = {
              type: stage.stage,
              source: stage.source,
              glShader: null
            };
          }

          WebGL2CmdFuncCreateShader(this._device, this._gpuShader);
          return true;
        };

        _proto.destroy = function destroy() {
          if (this._gpuShader) {
            WebGL2CmdFuncDestroyShader(this._device, this._gpuShader);
            this._gpuShader = null;
          }
        };

        _createClass(WebGL2Shader, [{
          key: "gpuShader",
          get: function get() {
            return this._gpuShader;
          }
        }]);

        return WebGL2Shader;
      }(Shader));
    }
  };
});