System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-fence.js", ["../fence.js"], function (_export, _context) {
  "use strict";

  var Fence, WebGL2Fence;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_fenceJs) {
      Fence = _fenceJs.Fence;
    }],
    execute: function () {
      _export("WebGL2Fence", WebGL2Fence = /*#__PURE__*/function (_Fence) {
        _inheritsLoose(WebGL2Fence, _Fence);

        function WebGL2Fence() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Fence.call.apply(_Fence, [this].concat(args)) || this;
          _this._sync = null;
          return _this;
        }

        var _proto = WebGL2Fence.prototype;

        _proto.initialize = function initialize(info) {
          return true;
        };

        _proto.destroy = function destroy() {};

        _proto.wait = function wait() {
          if (this._sync) {
            var gl = this._device.gl;
            gl.clientWaitSync(this._sync, 0, gl.TIMEOUT_IGNORED);
          }
        };

        _proto.reset = function reset() {
          if (this._sync) {
            var gl = this._device.gl;
            gl.deleteSync(this._sync);
            this._sync = null;
          }
        };

        _proto.insert = function insert() {
          var gl = this._device.gl;

          if (this._sync) {
            gl.deleteSync(this._sync);
          }

          this._sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
        };

        return WebGL2Fence;
      }(Fence));
    }
  };
});