"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshCollider = void 0;

var _index = require("../../../../core/data/decorators/index.js");

var _internal253Aconstants = require("../../../../../../virtual/internal%253Aconstants.js");

var _collider = require("./collider.js");

var _index2 = require("../../../../3d/assets/index.js");

var _physicsEnum = require("../../physics-enum.js");

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/**
 * @en
 * Triangle mesh collider component.
 * @zh
 * 三角网格碰撞器。
 */
let MeshCollider = (_dec = (0, _index.ccclass)('cc.MeshCollider'), _dec2 = (0, _index.help)('i18n:cc.MeshCollider'), _dec3 = (0, _index.menu)('Physics/MeshCollider'), _dec4 = (0, _index.type)(_index2.Mesh), _dec(_class = _dec2(_class = _dec3(_class = (0, _index.executeInEditMode)(_class = (_class2 = (_temp = class MeshCollider extends _collider.Collider {
  /// PUBLIC PROPERTY GETTER\SETTER ///

  /**
   * @en
   * Gets or sets the mesh assets referenced by this collider.
   * @zh
   * 获取或设置此碰撞体引用的网格资源.
   */
  get mesh() {
    return this._mesh;
  }

  set mesh(value) {
    this._mesh = value;
    if (!_internal253Aconstants.EDITOR && !_internal253Aconstants.TEST) this.shape.setMesh(this._mesh);
  }
  /**
   * @en
   * Gets or sets whether the collider replaces the mesh with a convex shape.
   * @zh
   * 获取或设置此碰撞体是否用凸形状代替网格.
   */


  get convex() {
    return this._convex;
  }

  set convex(value) {
    this._convex = value;
  }
  /**
   * @en
   * Gets the wrapper object, through which the lowLevel instance can be accessed.
   * @zh
   * 获取封装对象，通过此对象可以访问到底层实例。
   */


  get shape() {
    return this._shape;
  } /// PRIVATE PROPERTY ///


  constructor() {
    super(_physicsEnum.EColliderType.MESH);

    _initializerDefineProperty(this, "_mesh", _descriptor, this);

    _initializerDefineProperty(this, "_convex", _descriptor2, this);
  }

}, _temp), (_applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "convex", [_index.editable], Object.getOwnPropertyDescriptor(_class2.prototype, "convex"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_mesh", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_convex", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
})), _class2)) || _class) || _class) || _class) || _class);
exports.MeshCollider = MeshCollider;