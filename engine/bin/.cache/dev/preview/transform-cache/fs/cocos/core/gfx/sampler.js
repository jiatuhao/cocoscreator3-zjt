System.register("q-bundled:///fs/cocos/core/gfx/sampler.js", ["./define-class.js", "./define.js"], function (_export, _context) {
  "use strict";

  var Color, Address, ComparisonFunc, Filter, Obj, ObjectType, SamplerInfo, Sampler;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineClassJs) {
      Color = _defineClassJs.Color;
    }, function (_defineJs) {
      Address = _defineJs.Address;
      ComparisonFunc = _defineJs.ComparisonFunc;
      Filter = _defineJs.Filter;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("SamplerInfo", SamplerInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function SamplerInfo(minFilter, magFilter, mipFilter, addressU, addressV, addressW, maxAnisotropy, cmpFunc, borderColor, minLOD, maxLOD, mipLODBias) {
        if (minFilter === void 0) {
          minFilter = Filter.LINEAR;
        }

        if (magFilter === void 0) {
          magFilter = Filter.LINEAR;
        }

        if (mipFilter === void 0) {
          mipFilter = Filter.NONE;
        }

        if (addressU === void 0) {
          addressU = Address.WRAP;
        }

        if (addressV === void 0) {
          addressV = Address.WRAP;
        }

        if (addressW === void 0) {
          addressW = Address.WRAP;
        }

        if (maxAnisotropy === void 0) {
          maxAnisotropy = 16;
        }

        if (cmpFunc === void 0) {
          cmpFunc = ComparisonFunc.NEVER;
        }

        if (borderColor === void 0) {
          borderColor = new Color();
        }

        if (minLOD === void 0) {
          minLOD = 0;
        }

        if (maxLOD === void 0) {
          maxLOD = 0;
        }

        if (mipLODBias === void 0) {
          mipLODBias = 0.0;
        }

        this.minFilter = minFilter;
        this.magFilter = magFilter;
        this.mipFilter = mipFilter;
        this.addressU = addressU;
        this.addressV = addressV;
        this.addressW = addressW;
        this.maxAnisotropy = maxAnisotropy;
        this.cmpFunc = cmpFunc;
        this.borderColor = borderColor;
        this.minLOD = minLOD;
        this.maxLOD = maxLOD;
        this.mipLODBias = mipLODBias;
      });
      /**
       * @en GFX sampler.
       * @zh GFX 采样器。
       */


      _export("Sampler", Sampler = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(Sampler, _Obj);

        _createClass(Sampler, [{
          key: "minFilter",
          get: function get() {
            return this._minFilter;
          }
        }, {
          key: "magFilter",
          get: function get() {
            return this._magFilter;
          }
        }, {
          key: "mipFilter",
          get: function get() {
            return this._mipFilter;
          }
        }, {
          key: "addressU",
          get: function get() {
            return this._addressU;
          }
        }, {
          key: "addressV",
          get: function get() {
            return this._addressV;
          }
        }, {
          key: "addressW",
          get: function get() {
            return this._addressW;
          }
        }, {
          key: "maxAnisotropy",
          get: function get() {
            return this._maxAnisotropy;
          }
        }, {
          key: "cmpFunc",
          get: function get() {
            return this._cmpFunc;
          }
        }, {
          key: "borderColor",
          get: function get() {
            return this._borderColor;
          }
        }, {
          key: "minLOD",
          get: function get() {
            return this._minLOD;
          }
        }, {
          key: "maxLOD",
          get: function get() {
            return this._maxLOD;
          }
        }, {
          key: "mipLODBias",
          get: function get() {
            return this._mipLODBias;
          }
        }]);

        function Sampler(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.SAMPLER) || this;
          _this._device = void 0;
          _this._minFilter = Filter.LINEAR;
          _this._magFilter = Filter.LINEAR;
          _this._mipFilter = Filter.NONE;
          _this._addressU = Address.WRAP;
          _this._addressV = Address.WRAP;
          _this._addressW = Address.WRAP;
          _this._maxAnisotropy = 16;
          _this._cmpFunc = ComparisonFunc.NEVER;
          _this._borderColor = new Color();
          _this._minLOD = 0;
          _this._maxLOD = 0;
          _this._mipLODBias = 0.0;
          _this._device = device;
          return _this;
        }

        return Sampler;
      }(Obj));
    }
  };
});