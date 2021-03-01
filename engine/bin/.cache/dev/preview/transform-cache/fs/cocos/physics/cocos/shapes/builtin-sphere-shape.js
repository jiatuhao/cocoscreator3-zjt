System.register("q-bundled:///fs/cocos/physics/cocos/shapes/builtin-sphere-shape.js", ["../../../core/geometry/index.js", "./builtin-shape.js", "../../utils/util.js"], function (_export, _context) {
  "use strict";

  var Sphere, BuiltinShape, maxComponent, BuiltinSphereShape;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_coreGeometryIndexJs) {
      Sphere = _coreGeometryIndexJs.Sphere;
    }, function (_builtinShapeJs) {
      BuiltinShape = _builtinShapeJs.BuiltinShape;
    }, function (_utilsUtilJs) {
      maxComponent = _utilsUtilJs.maxComponent;
    }],
    execute: function () {
      _export("BuiltinSphereShape", BuiltinSphereShape = /*#__PURE__*/function (_BuiltinShape) {
        _inheritsLoose(BuiltinSphereShape, _BuiltinShape);

        var _proto = BuiltinSphereShape.prototype;

        _proto.setRadius = function setRadius(radius) {
          this.localSphere.radius = radius;
          var s = maxComponent(this.collider.node.worldScale);
          this.worldSphere.radius = this.localSphere.radius * s;
        };

        _createClass(BuiltinSphereShape, [{
          key: "localSphere",
          get: function get() {
            return this._localShape;
          }
        }, {
          key: "worldSphere",
          get: function get() {
            return this._worldShape;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);

        function BuiltinSphereShape(radius) {
          var _this;

          if (radius === void 0) {
            radius = 0.5;
          }

          _this = _BuiltinShape.call(this) || this;
          _this._localShape = new Sphere(0, 0, 0, radius);
          _this._worldShape = new Sphere(0, 0, 0, radius);
          return _this;
        }

        _proto.onLoad = function onLoad() {
          _BuiltinShape.prototype.onLoad.call(this);

          this.setRadius(this.collider.radius);
        };

        return BuiltinSphereShape;
      }(BuiltinShape));
    }
  };
});