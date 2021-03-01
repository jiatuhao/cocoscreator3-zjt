System.register("q-bundled:///fs/cocos/core/gfx/fence.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var Obj, ObjectType, FenceInfo, Fence;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("FenceInfo", FenceInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function FenceInfo() {});
      /**
       * @en GFX Fence.
       * @zh GFX 同步信号。
       */


      _export("Fence", Fence = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(Fence, _Obj);

        function Fence(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.FENCE) || this;
          _this._device = void 0;
          _this._device = device;
          return _this;
        }

        return Fence;
      }(Obj));
    }
  };
});