System.register("q-bundled:///fs/cocos/core/gfx/webgl/webgl-descriptor-set-layout.js", ["../descriptor-set-layout.js"], function (_export, _context) {
  "use strict";

  var DescriptorSetLayout, DESCRIPTOR_DYNAMIC_TYPE, WebGLDescriptorSetLayout;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_descriptorSetLayoutJs) {
      DescriptorSetLayout = _descriptorSetLayoutJs.DescriptorSetLayout;
      DESCRIPTOR_DYNAMIC_TYPE = _descriptorSetLayoutJs.DESCRIPTOR_DYNAMIC_TYPE;
    }],
    execute: function () {
      _export("WebGLDescriptorSetLayout", WebGLDescriptorSetLayout = /*#__PURE__*/function (_DescriptorSetLayout) {
        _inheritsLoose(WebGLDescriptorSetLayout, _DescriptorSetLayout);

        function WebGLDescriptorSetLayout() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _DescriptorSetLayout.call.apply(_DescriptorSetLayout, [this].concat(args)) || this;
          _this._gpuDescriptorSetLayout = null;
          return _this;
        }

        var _proto = WebGLDescriptorSetLayout.prototype;

        _proto.initialize = function initialize(info) {
          Array.prototype.push.apply(this._bindings, info.bindings);
          var descriptorCount = 0;
          var maxBinding = -1;
          var flattenedIndices = [];

          for (var i = 0; i < this._bindings.length; i++) {
            var binding = this._bindings[i];
            flattenedIndices.push(descriptorCount);
            descriptorCount += binding.count;
            if (binding.binding > maxBinding) maxBinding = binding.binding;
          }

          this._bindingIndices = Array(maxBinding + 1).fill(-1);
          var descriptorIndices = this._descriptorIndices = Array(maxBinding + 1).fill(-1);

          for (var _i = 0; _i < this._bindings.length; _i++) {
            var _binding = this._bindings[_i];
            this._bindingIndices[_binding.binding] = _i;
            descriptorIndices[_binding.binding] = flattenedIndices[_i];
          }

          var dynamicBindings = [];

          for (var _i2 = 0; _i2 < this._bindings.length; _i2++) {
            var _binding2 = this._bindings[_i2];

            if (_binding2.descriptorType & DESCRIPTOR_DYNAMIC_TYPE) {
              for (var j = 0; j < _binding2.count; j++) {
                dynamicBindings.push(_binding2.binding);
              }
            }
          }

          this._gpuDescriptorSetLayout = {
            bindings: this._bindings,
            dynamicBindings: dynamicBindings,
            descriptorIndices: descriptorIndices,
            descriptorCount: descriptorCount
          };
          return true;
        };

        _proto.destroy = function destroy() {
          this._bindings.length = 0;
        };

        _createClass(WebGLDescriptorSetLayout, [{
          key: "gpuDescriptorSetLayout",
          get: function get() {
            return this._gpuDescriptorSetLayout;
          }
        }]);

        return WebGLDescriptorSetLayout;
      }(DescriptorSetLayout));
    }
  };
});