System.register("q-bundled:///fs/cocos/physics/cannon/shapes/cannon-box-shape.js", ["@cocos/cannon", "../../../core/math/index.js", "../cannon-util.js", "./cannon-shape.js"], function (_export, _context) {
  "use strict";

  var CANNON, Vec3, commitShapeUpdates, CannonShape, CannonBoxShape;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_cocosCannon) {
      CANNON = _cocosCannon.default;
    }, function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_cannonUtilJs) {
      commitShapeUpdates = _cannonUtilJs.commitShapeUpdates;
    }, function (_cannonShapeJs) {
      CannonShape = _cannonShapeJs.CannonShape;
    }],
    execute: function () {
      _export("CannonBoxShape", CannonBoxShape = /*#__PURE__*/function (_CannonShape) {
        _inheritsLoose(CannonBoxShape, _CannonShape);

        _createClass(CannonBoxShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }, {
          key: "impl",
          get: function get() {
            return this._shape;
          }
        }]);

        function CannonBoxShape() {
          var _this;

          _this = _CannonShape.call(this) || this;
          _this.HALF_EXTENT = void 0;
          _this.HALF_EXTENT = new CANNON.Vec3(0.5, 0.5, 0.5);
          _this._shape = new CANNON.Box(_this.HALF_EXTENT.clone());
          return _this;
        }

        var _proto = CannonBoxShape.prototype;

        _proto.setSize = function setSize(v) {
          Vec3.multiplyScalar(this.HALF_EXTENT, v, 0.5);
          var ws = this.collider.node.worldScale;
          this.impl.halfExtents.x = this.HALF_EXTENT.x * Math.abs(ws.x);
          this.impl.halfExtents.y = this.HALF_EXTENT.y * Math.abs(ws.y);
          this.impl.halfExtents.z = this.HALF_EXTENT.z * Math.abs(ws.z);
          this.impl.updateConvexPolyhedronRepresentation();

          if (this._index !== -1) {
            commitShapeUpdates(this._body);
          }
        };

        _proto.onLoad = function onLoad() {
          _CannonShape.prototype.onLoad.call(this);

          this.setSize(this.collider.size);
        };

        _proto.setScale = function setScale(scale) {
          _CannonShape.prototype.setScale.call(this, scale);

          this.setSize(this.collider.size);
        };

        return CannonBoxShape;
      }(CannonShape));
    }
  };
});