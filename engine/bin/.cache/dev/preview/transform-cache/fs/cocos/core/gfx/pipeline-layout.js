System.register("q-bundled:///fs/cocos/core/gfx/pipeline-layout.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var Obj, ObjectType, PipelineLayoutInfo, PipelineLayout;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("PipelineLayoutInfo", PipelineLayoutInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function PipelineLayoutInfo(setLayouts) {
        if (setLayouts === void 0) {
          setLayouts = [];
        }

        this.setLayouts = setLayouts;
      });
      /**
       * @en GFX pipeline layout.
       * @zh GFX 管线布局。
       */


      _export("PipelineLayout", PipelineLayout = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(PipelineLayout, _Obj);

        _createClass(PipelineLayout, [{
          key: "setLayouts",
          get: function get() {
            return this._setLayouts;
          }
        }]);

        function PipelineLayout(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.PIPELINE_LAYOUT) || this;
          _this._device = void 0;
          _this._setLayouts = [];
          _this._device = device;
          return _this;
        }

        return PipelineLayout;
      }(Obj));
    }
  };
});