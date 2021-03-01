System.register("q-bundled:///fs/cocos/core/assets/text-asset.js", ["../data/decorators/index.js", "./asset.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, Asset, legacyCC, _dec, _class, _class2, _descriptor, _temp, TextAsset;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
      serializable = _dataDecoratorsIndexJs.serializable;
      editable = _dataDecoratorsIndexJs.editable;
    }, function (_assetJs) {
      Asset = _assetJs.Asset;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      _export("default", TextAsset = (
      /**
       * @en Class for text file.
       * @zh 文本资源。
       */
      _dec = ccclass('cc.TextAsset'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(TextAsset, _Asset);

        function TextAsset() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "text", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TextAsset.prototype;

        _proto.toString = function toString() {
          return this.text;
        };

        return TextAsset;
      }(Asset), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      legacyCC.TextAsset = TextAsset;
    }
  };
});