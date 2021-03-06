System.register("q-bundled:///fs/cocos/core/gfx/descriptor-set.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var DescriptorType, Obj, ObjectType, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, DescriptorSetInfo, DescriptorSet;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      DescriptorType = _defineJs.DescriptorType;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("DESCRIPTOR_BUFFER_TYPE", DESCRIPTOR_BUFFER_TYPE = DescriptorType.UNIFORM_BUFFER | DescriptorType.DYNAMIC_UNIFORM_BUFFER | DescriptorType.STORAGE_BUFFER | DescriptorType.DYNAMIC_STORAGE_BUFFER);

      _export("DESCRIPTOR_SAMPLER_TYPE", DESCRIPTOR_SAMPLER_TYPE = DescriptorType.SAMPLER);

      _export("DescriptorSetInfo", DescriptorSetInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function DescriptorSetInfo(layout) {
        this.layout = layout;
      });
      /**
       * @en GFX descriptor sets.
       * @zh GFX 描述符集组。
       */


      _export("DescriptorSet", DescriptorSet = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(DescriptorSet, _Obj);

        _createClass(DescriptorSet, [{
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }]);

        function DescriptorSet(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.DESCRIPTOR_SET) || this;
          _this._device = void 0;
          _this._layout = null;
          _this._buffers = [];
          _this._textures = [];
          _this._samplers = [];
          _this._isDirty = false;
          _this._device = device;
          return _this;
        }

        var _proto = DescriptorSet.prototype;

        /**
         * @en Bind buffer to the specified descriptor.
         * @zh 在指定的描述符位置上绑定缓冲。
         * @param binding The target binding.
         * @param buffer The buffer to be bound.
         */
        _proto.bindBuffer = function bindBuffer(binding, buffer, index) {
          if (index === void 0) {
            index = 0;
          }

          var bindingIndex = this._layout.bindingIndices[binding];
          var info = this._layout.bindings[bindingIndex];

          if (!info) {
            return;
          }

          if (info.descriptorType & DESCRIPTOR_BUFFER_TYPE) {
            var descriptorIndex = this._layout.descriptorIndices[binding];

            if (this._buffers[descriptorIndex + index] !== buffer) {
              this._buffers[descriptorIndex + index] = buffer;
              this._isDirty = true;
            }
          } else {
            console.warn('Setting binding is not DescriptorType.UNIFORM_BUFFER.');
          }
        }
        /**
         * @en Bind sampler to the specified descriptor.
         * @zh 在指定的描述符位置上绑定采样器。
         * @param binding The target binding.
         * @param sampler The sampler to be bound.
         */
        ;

        _proto.bindSampler = function bindSampler(binding, sampler, index) {
          if (index === void 0) {
            index = 0;
          }

          var bindingIndex = this._layout.bindingIndices[binding];
          var info = this._layout.bindings[bindingIndex];

          if (!info) {
            return;
          }

          if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
            var descriptorIndex = this._layout.descriptorIndices[binding];

            if (this._samplers[descriptorIndex + index] !== sampler) {
              this._samplers[descriptorIndex + index] = sampler;
              this._isDirty = true;
            }
          } else {
            console.warn('Setting binding is not DescriptorType.SAMPLER.');
          }
        }
        /**
         * @en Bind texture to the specified descriptor.
         * @zh 在指定的描述符位置上绑定纹理。
         * @param binding The target binding.
         * @param texture The texture to be bound.
         */
        ;

        _proto.bindTexture = function bindTexture(binding, texture, index) {
          if (index === void 0) {
            index = 0;
          }

          var bindingIndex = this._layout.bindingIndices[binding];
          var info = this._layout.bindings[bindingIndex];

          if (!info) {
            return;
          }

          if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
            var descriptorIndex = this._layout.descriptorIndices[binding];

            if (this._textures[descriptorIndex + index] !== texture) {
              this._textures[descriptorIndex + index] = texture;
              this._isDirty = true;
            }
          } else {
            console.warn('Setting binding is not DescriptorType.SAMPLER.');
          }
        }
        /**
         * @en Get buffer from the specified binding location.
         * @zh 获取当前指定绑定位置上的缓冲。
         * @param binding The target binding.
         */
        ;

        _proto.getBuffer = function getBuffer(binding, index) {
          if (index === void 0) {
            index = 0;
          }

          var descriptorIndex = this._layout.descriptorIndices[binding];
          return this._buffers[descriptorIndex + index];
        }
        /**
         * @en Get sampler from the specified binding location.
         * @zh 获取当前指定绑定位置上的采样器。
         * @param binding The target binding.
         */
        ;

        _proto.getSampler = function getSampler(binding, index) {
          if (index === void 0) {
            index = 0;
          }

          var descriptorIndex = this._layout.descriptorIndices[binding];
          return this._samplers[descriptorIndex + index];
        }
        /**
         * @en Get texture from the specified binding location.
         * @zh 获取当前指定绑定位置上的贴图。
         * @param binding The target binding.
         */
        ;

        _proto.getTexture = function getTexture(binding, index) {
          if (index === void 0) {
            index = 0;
          }

          var descriptorIndex = this._layout.descriptorIndices[binding];
          return this._textures[descriptorIndex + index];
        };

        return DescriptorSet;
      }(Obj));
    }
  };
});