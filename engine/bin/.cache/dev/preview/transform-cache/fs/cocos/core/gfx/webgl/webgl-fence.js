System.register("q-bundled:///fs/cocos/core/gfx/webgl/webgl-fence.js", ["../fence.js"], function (_export, _context) {
  "use strict";

  var Fence, WebGLFence;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_fenceJs) {
      Fence = _fenceJs.Fence;
    }],
    execute: function () {
      _export("WebGLFence", WebGLFence = /*#__PURE__*/function (_Fence) {
        _inheritsLoose(WebGLFence, _Fence);

        function WebGLFence() {
          return _Fence.apply(this, arguments) || this;
        }

        var _proto = WebGLFence.prototype;

        _proto.initialize = function initialize(info) {
          return true;
        };

        _proto.destroy = function destroy() {} // WebGL 1 doesn't have any syncing mechanism
        ;

        _proto.wait = function wait() {};

        _proto.reset = function reset() {};

        return WebGLFence;
      }(Fence));
    }
  };
});