System.register("q-bundled:///fs/cocos/core/gfx/shader.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var Obj, ObjectType, ShaderStageFlagBit, Type, ShaderStage, Uniform, UniformBlock, UniformSampler, ShaderInfo, Shader;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
      ShaderStageFlagBit = _defineJs.ShaderStageFlagBit;
      Type = _defineJs.Type;
    }],
    execute: function () {
      _export("ShaderStage", ShaderStage = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function ShaderStage(stage, source) {
        if (stage === void 0) {
          stage = ShaderStageFlagBit.NONE;
        }

        if (source === void 0) {
          source = '';
        }

        this.stage = stage;
        this.source = source;
      });

      /**
       * @en GFX uniform.
       * @zh GFX uniform。
       */
      _export("Uniform", Uniform = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function Uniform(name, type, count) {
        if (name === void 0) {
          name = '';
        }

        if (type === void 0) {
          type = Type.UNKNOWN;
        }

        if (count === void 0) {
          count = 1;
        }

        this.name = name;
        this.type = type;
        this.count = count;
      });
      /**
       * @en GFX uniform block.
       * @zh GFX uniform 块。
       */


      _export("UniformBlock", UniformBlock = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function UniformBlock(set, binding, name, members, count) {
        if (set === void 0) {
          set = -1;
        }

        if (binding === void 0) {
          binding = -1;
        }

        if (name === void 0) {
          name = '';
        }

        if (members === void 0) {
          members = [];
        }

        if (count === void 0) {
          count = 1;
        }

        this.set = set;
        this.binding = binding;
        this.name = name;
        this.members = members;
        this.count = count;
      });
      /**
       * @en GFX uniform sampler.
       * @zh GFX Uniform 采样器。
       */


      _export("UniformSampler", UniformSampler = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function UniformSampler(set, binding, name, type, count) {
        if (set === void 0) {
          set = -1;
        }

        if (binding === void 0) {
          binding = -1;
        }

        if (name === void 0) {
          name = '';
        }

        if (type === void 0) {
          type = Type.UNKNOWN;
        }

        if (count === void 0) {
          count = 1;
        }

        this.set = set;
        this.binding = binding;
        this.name = name;
        this.type = type;
        this.count = count;
      });

      _export("ShaderInfo", ShaderInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function ShaderInfo(name, stages, attributes, blocks, samplers) {
        if (name === void 0) {
          name = '';
        }

        if (stages === void 0) {
          stages = [];
        }

        if (attributes === void 0) {
          attributes = [];
        }

        if (blocks === void 0) {
          blocks = [];
        }

        if (samplers === void 0) {
          samplers = [];
        }

        this.name = name;
        this.stages = stages;
        this.attributes = attributes;
        this.blocks = blocks;
        this.samplers = samplers;
      });
      /**
       * @en GFX shader.
       * @zh GFX 着色器。
       */


      _export("Shader", Shader = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(Shader, _Obj);

        _createClass(Shader, [{
          key: "id",

          /**
           * @en Get current shader id.
           * @zh 着色器 id。
           */
          get: function get() {
            return this._id;
          }
          /**
           * @en Get current shader name.
           * @zh 着色器名称。
           */

        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }, {
          key: "attributes",
          get: function get() {
            return this._attributes;
          }
        }, {
          key: "blocks",
          get: function get() {
            return this._blocks;
          }
        }, {
          key: "samplers",
          get: function get() {
            return this._samplers;
          }
        }]);

        function Shader(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.SHADER) || this;
          _this._device = void 0;
          _this._id = void 0;
          _this._name = '';
          _this._stages = [];
          _this._attributes = [];
          _this._blocks = [];
          _this._samplers = [];
          _this._device = device;
          _this._id = Shader._shaderIdGen++;
          return _this;
        }

        return Shader;
      }(Obj));

      Shader._shaderIdGen = 0;
    }
  };
});