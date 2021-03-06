"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../../core/data/decorators/index.js");

var _index2 = require("../../core/math/index.js");

var _particle = require("../particle.js");

var _curveRange = _interopRequireDefault(require("./curve-range.js"));

var _enum = require("../enum.js");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

const SIZE_OVERTIME_RAND_OFFSET = _enum.ModuleRandSeed.SIZE;
let SizeOvertimeModule = (_dec = (0, _index.ccclass)('cc.SizeOvertimeModule'), _dec2 = (0, _index.displayOrder)(0), _dec3 = (0, _index.displayOrder)(1), _dec4 = (0, _index.tooltip)('决定是否在每个轴上独立控制粒子大小'), _dec5 = (0, _index.type)(_curveRange.default), _dec6 = (0, _index.displayOrder)(2), _dec7 = (0, _index.tooltip)('定义一条曲线来决定粒子在其生命周期中的大小变化'), _dec8 = (0, _index.type)(_curveRange.default), _dec9 = (0, _index.displayOrder)(3), _dec10 = (0, _index.tooltip)('定义一条曲线来决定粒子在其生命周期中 X 轴方向上的大小变化'), _dec11 = (0, _index.type)(_curveRange.default), _dec12 = (0, _index.displayOrder)(4), _dec13 = (0, _index.tooltip)('定义一条曲线来决定粒子在其生命周期中 Y 轴方向上的大小变化'), _dec14 = (0, _index.type)(_curveRange.default), _dec15 = (0, _index.displayOrder)(5), _dec16 = (0, _index.tooltip)('定义一条曲线来决定粒子在其生命周期中 Z 轴方向上的大小变化'), _dec(_class = (_class2 = (_temp = class SizeOvertimeModule extends _particle.ParticleModuleBase {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "_enable", _descriptor, this);

    _initializerDefineProperty(this, "separateAxes", _descriptor2, this);

    _initializerDefineProperty(this, "size", _descriptor3, this);

    _initializerDefineProperty(this, "x", _descriptor4, this);

    _initializerDefineProperty(this, "y", _descriptor5, this);

    _initializerDefineProperty(this, "z", _descriptor6, this);

    this.name = _particle.PARTICLE_MODULE_NAME.SIZE;
  }

  /**
   * @zh 是否启用。
   */
  get enable() {
    return this._enable;
  }

  set enable(val) {
    if (this._enable === val) return;
    this._enable = val;
    if (!this.target) return;
    this.target.enableModule(this.name, val, this);
  }
  /**
   * @zh 决定是否在每个轴上独立控制粒子大小。
   */


  animate(particle, dt) {
    if (!this.separateAxes) {
      _index2.Vec3.multiplyScalar(particle.size, particle.startSize, this.size.evaluate(1 - particle.remainingLifetime / particle.startLifetime, (0, _index2.pseudoRandom)(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET)));
    } else {
      const currLifetime = 1 - particle.remainingLifetime / particle.startLifetime;
      const sizeRand = (0, _index2.pseudoRandom)(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET);
      particle.size.x = particle.startSize.x * this.x.evaluate(currLifetime, sizeRand);
      particle.size.y = particle.startSize.y * this.y.evaluate(currLifetime, sizeRand);
      particle.size.z = particle.startSize.z * this.z.evaluate(currLifetime, sizeRand);
    }
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_enable", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "enable", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "enable"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "separateAxes", [_index.serializable, _dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec5, _index.serializable, _dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new _curveRange.default();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "x", [_dec8, _index.serializable, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new _curveRange.default();
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "y", [_dec11, _index.serializable, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new _curveRange.default();
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "z", [_dec14, _index.serializable, _dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new _curveRange.default();
  }
})), _class2)) || _class);
exports.default = SizeOvertimeModule;