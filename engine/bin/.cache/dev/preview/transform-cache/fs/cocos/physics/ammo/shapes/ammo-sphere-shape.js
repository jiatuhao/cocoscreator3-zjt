System.register("q-bundled:///fs/cocos/physics/ammo/shapes/ammo-sphere-shape.js", ["../ammo-instantiated.js", "./ammo-shape.js", "../ammo-util.js", "../ammo-enum.js", "../ammo-const.js"], function (_export, _context) {
  "use strict";

  var Ammo, AmmoShape, cocos2AmmoVec3, AmmoBroadphaseNativeTypes, CC_V3_0, AmmoSphereShape;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_ammoInstantiatedJs) {
      Ammo = _ammoInstantiatedJs.default;
    }, function (_ammoShapeJs) {
      AmmoShape = _ammoShapeJs.AmmoShape;
    }, function (_ammoUtilJs) {
      cocos2AmmoVec3 = _ammoUtilJs.cocos2AmmoVec3;
    }, function (_ammoEnumJs) {
      AmmoBroadphaseNativeTypes = _ammoEnumJs.AmmoBroadphaseNativeTypes;
    }, function (_ammoConstJs) {
      CC_V3_0 = _ammoConstJs.CC_V3_0;
    }],
    execute: function () {
      _export("AmmoSphereShape", AmmoSphereShape = /*#__PURE__*/function (_AmmoShape) {
        _inheritsLoose(AmmoSphereShape, _AmmoShape);

        var _proto = AmmoSphereShape.prototype;

        _proto.setRadius = function setRadius(radius) {
          this.impl.setUnscaledRadius(radius);
          this.updateCompoundTransform();
        };

        _createClass(AmmoSphereShape, [{
          key: "impl",
          get: function get() {
            return this._btShape;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);

        function AmmoSphereShape() {
          return _AmmoShape.call(this, AmmoBroadphaseNativeTypes.SPHERE_SHAPE_PROXYTYPE) || this;
        }

        _proto.onComponentSet = function onComponentSet() {
          this._btShape = new Ammo.btSphereShape(this.collider.radius);
          this.setScale();
        };

        _proto.setScale = function setScale() {
          _AmmoShape.prototype.setScale.call(this);

          var v3_0 = CC_V3_0;
          var ws = this._collider.node.worldScale;
          var absX = Math.abs(ws.x);
          var absY = Math.abs(ws.y);
          var absZ = Math.abs(ws.z);
          var max_sp = Math.max(Math.max(absX, absY), absZ);
          v3_0.set(max_sp, max_sp, max_sp);
          cocos2AmmoVec3(this.scale, v3_0);

          this._btShape.setLocalScaling(this.scale);

          this.updateCompoundTransform();
        };

        return AmmoSphereShape;
      }(AmmoShape));
    }
  };
});