System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-render-pass.js", ["../render-pass.js"], function (_export, _context) {
  "use strict";

  var RenderPass, WebGL2RenderPass;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_renderPassJs) {
      RenderPass = _renderPassJs.RenderPass;
    }],
    execute: function () {
      _export("WebGL2RenderPass", WebGL2RenderPass = /*#__PURE__*/function (_RenderPass) {
        _inheritsLoose(WebGL2RenderPass, _RenderPass);

        function WebGL2RenderPass() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _RenderPass.call.apply(_RenderPass, [this].concat(args)) || this;
          _this._gpuRenderPass = null;
          return _this;
        }

        var _proto = WebGL2RenderPass.prototype;

        _proto.initialize = function initialize(info) {
          this._colorInfos = info.colorAttachments;
          this._depthStencilInfo = info.depthStencilAttachment;

          if (info.subPasses) {
            this._subPasses = info.subPasses;
          }

          this._gpuRenderPass = {
            colorAttachments: this._colorInfos,
            depthStencilAttachment: this._depthStencilInfo
          };
          this._hash = this.computeHash();
          return true;
        };

        _proto.destroy = function destroy() {
          this._gpuRenderPass = null;
        };

        _createClass(WebGL2RenderPass, [{
          key: "gpuRenderPass",
          get: function get() {
            return this._gpuRenderPass;
          }
        }]);

        return WebGL2RenderPass;
      }(RenderPass));
    }
  };
});