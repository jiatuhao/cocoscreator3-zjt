System.register("q-bundled:///fs/cocos/core/gfx/descriptor-set-layout.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var DescriptorType, Obj, ObjectType, ShaderStageFlagBit, DescriptorSetLayoutBinding, DescriptorSetLayoutInfo, DESCRIPTOR_DYNAMIC_TYPE, DescriptorSetLayout;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      DescriptorType = _defineJs.DescriptorType;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
      ShaderStageFlagBit = _defineJs.ShaderStageFlagBit;
    }],
    execute: function () {
      _export("DescriptorSetLayoutBinding", DescriptorSetLayoutBinding = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function DescriptorSetLayoutBinding(binding, descriptorType, count, stageFlags, immutableSamplers) {
        if (binding === void 0) {
          binding = -1;
        }

        if (descriptorType === void 0) {
          descriptorType = DescriptorType.UNKNOWN;
        }

        if (count === void 0) {
          count = 0;
        }

        if (stageFlags === void 0) {
          stageFlags = ShaderStageFlagBit.NONE;
        }

        if (immutableSamplers === void 0) {
          immutableSamplers = [];
        }

        this.binding = binding;
        this.descriptorType = descriptorType;
        this.count = count;
        this.stageFlags = stageFlags;
        this.immutableSamplers = immutableSamplers;
      });

      _export("DescriptorSetLayoutInfo", DescriptorSetLayoutInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function DescriptorSetLayoutInfo(bindings) {
        if (bindings === void 0) {
          bindings = [];
        }

        this.bindings = bindings;
      });

      _export("DESCRIPTOR_DYNAMIC_TYPE", DESCRIPTOR_DYNAMIC_TYPE = DescriptorType.DYNAMIC_STORAGE_BUFFER | DescriptorType.DYNAMIC_UNIFORM_BUFFER);
      /**
       * @en GFX descriptor sets layout.
       * @zh GFX 描述符集布局。
       */


      _export("DescriptorSetLayout", DescriptorSetLayout = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(DescriptorSetLayout, _Obj);

        _createClass(DescriptorSetLayout, [{
          key: "bindings",
          get: function get() {
            return this._bindings;
          }
        }, {
          key: "bindingIndices",
          get: function get() {
            return this._bindingIndices;
          }
        }, {
          key: "descriptorIndices",
          get: function get() {
            return this._descriptorIndices;
          }
        }]);

        function DescriptorSetLayout(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.DESCRIPTOR_SET_LAYOUT) || this;
          _this._device = void 0;
          _this._bindings = [];
          _this._bindingIndices = [];
          _this._descriptorIndices = [];
          _this._device = device;
          return _this;
        }

        return DescriptorSetLayout;
      }(Obj));
    }
  };
});