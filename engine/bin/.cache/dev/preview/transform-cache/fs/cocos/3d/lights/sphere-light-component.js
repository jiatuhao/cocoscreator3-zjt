System.register("q-bundled:///fs/cocos/3d/lights/sphere-light-component.js", ["../../core/data/decorators/index.js", "../../core/renderer/index.js", "./light-component.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, unit, serializable, scene, Light, PhotometricTerm, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, SphereLight;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      unit = _coreDataDecoratorsIndexJs.unit;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreRendererIndexJs) {
      scene = _coreRendererIndexJs.scene;
    }, function (_lightComponentJs) {
      Light = _lightComponentJs.Light;
      PhotometricTerm = _lightComponentJs.PhotometricTerm;
    }],
    execute: function () {
      _export("SphereLight", SphereLight = (_dec = ccclass('cc.SphereLight'), _dec2 = help('i18n:cc.SphereLight'), _dec3 = menu('Light/SphereLight'), _dec4 = unit('lm'), _dec5 = tooltip('i18n:lights.luminous_power'), _dec6 = unit('cd/m²'), _dec7 = tooltip('i18n:lights.luminance'), _dec8 = type(PhotometricTerm), _dec9 = tooltip('i18n:lights.term'), _dec10 = tooltip('i18n:lights.size'), _dec11 = tooltip('i18n:lights.range'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Light) {
        _inheritsLoose(SphereLight, _Light);

        _createClass(SphereLight, [{
          key: "luminousPower",

          /**
           * @en Luminous power of the light.
           * @zh 光通量。
           */
          get: function get() {
            return this._luminance * scene.nt2lm(this._size);
          },
          set: function set(val) {
            this._luminance = val / scene.nt2lm(this._size);

            if (this._light) {
              this._light.luminance = this._luminance;
            }
          }
          /**
           * @en Luminance of the light.
           * @zh 光亮度。
           */

        }, {
          key: "luminance",
          get: function get() {
            return this._luminance;
          },
          set: function set(val) {
            this._luminance = val;

            if (this._light) {
              this._light.luminance = val;
            }
          }
          /**
           * @en The photometric term currently being used.
           * @zh 当前使用的光度学计量单位。
           */

        }, {
          key: "term",
          get: function get() {
            return this._term;
          },
          set: function set(val) {
            this._term = val;
          }
          /**
           * @en
           * Size of the light.
           * @zh
           * 光源大小。
           */

        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(val) {
            this._size = val;

            if (this._light) {
              this._light.size = val;
            }
          }
          /**
           * @en
           * Range of the light.
           * @zh
           * 光源范围。
           */

        }, {
          key: "range",
          get: function get() {
            return this._range;
          },
          set: function set(val) {
            this._range = val;

            if (this._light) {
              this._light.range = val;
            }
          }
        }]);

        function SphereLight() {
          var _this;

          _this = _Light.call(this) || this;

          _initializerDefineProperty(_this, "_size", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_luminance", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_term", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_range", _descriptor4, _assertThisInitialized(_this));

          _this._type = scene.LightType.SPHERE;
          _this._light = null;
          _this._lightType = scene.SphereLight;
          return _this;
        }

        var _proto = SphereLight.prototype;

        _proto._createLight = function _createLight() {
          _Light.prototype._createLight.call(this);

          if (!this._light) {
            return;
          }

          this.luminance = this._luminance;
          this.size = this._size;
          this.range = this._range;
        };

        return SphereLight;
      }(Light), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_size", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_luminance", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1700 / scene.nt2lm(0.15);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_term", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PhotometricTerm.LUMINOUS_POWER;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_range", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "luminousPower", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "luminousPower"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "luminance", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "luminance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "term", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "term"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "size", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "range", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "range"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});