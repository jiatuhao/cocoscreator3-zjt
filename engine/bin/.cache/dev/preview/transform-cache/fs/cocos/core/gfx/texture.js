System.register("q-bundled:///fs/cocos/core/gfx/texture.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var Format, Obj, ObjectType, SampleCount, TextureFlagBit, TextureType, TextureUsageBit, TextureInfo, TextureViewInfo, Texture;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function IsPowerOf2(x) {
    return x > 0 && (x & x - 1) === 0;
  }
  /**
   * @en GFX texture.
   * @zh GFX 纹理。
   */


  _export("IsPowerOf2", IsPowerOf2);

  return {
    setters: [function (_defineJs) {
      Format = _defineJs.Format;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
      SampleCount = _defineJs.SampleCount;
      TextureFlagBit = _defineJs.TextureFlagBit;
      TextureType = _defineJs.TextureType;
      TextureUsageBit = _defineJs.TextureUsageBit;
    }],
    execute: function () {
      _export("TextureInfo", TextureInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function TextureInfo(type, usage, format, width, height, flags, layerCount, levelCount, samples, depth) {
        if (usage === void 0) {
          usage = TextureUsageBit.NONE;
        }

        if (format === void 0) {
          format = Format.UNKNOWN;
        }

        if (width === void 0) {
          width = 0;
        }

        if (height === void 0) {
          height = 0;
        }

        if (flags === void 0) {
          flags = TextureFlagBit.NONE;
        }

        if (layerCount === void 0) {
          layerCount = 1;
        }

        if (levelCount === void 0) {
          levelCount = 1;
        }

        if (samples === void 0) {
          samples = SampleCount.X1;
        }

        if (depth === void 0) {
          depth = 1;
        }

        this.type = type;
        this.usage = usage;
        this.format = format;
        this.width = width;
        this.height = height;
        this.flags = flags;
        this.layerCount = layerCount;
        this.levelCount = levelCount;
        this.samples = samples;
        this.depth = depth;
      });

      _export("TextureViewInfo", TextureViewInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function TextureViewInfo(texture, type, format, baseLevel, levelCount, baseLayer, layerCount) {
        if (type === void 0) {
          type = TextureType.TEX2D;
        }

        if (format === void 0) {
          format = Format.UNKNOWN;
        }

        if (baseLevel === void 0) {
          baseLevel = 0;
        }

        if (levelCount === void 0) {
          levelCount = 1;
        }

        if (baseLayer === void 0) {
          baseLayer = 0;
        }

        if (layerCount === void 0) {
          layerCount = 1;
        }

        this.texture = texture;
        this.type = type;
        this.format = format;
        this.baseLevel = baseLevel;
        this.levelCount = levelCount;
        this.baseLayer = baseLayer;
        this.layerCount = layerCount;
      });

      _export("Texture", Texture = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(Texture, _Obj);

        _createClass(Texture, [{
          key: "type",

          /**
           * @en Get texture type.
           * @zh 纹理类型。
           */
          get: function get() {
            return this._type;
          }
          /**
           * @en Get texture usage.
           * @zh 纹理使用方式。
           */

        }, {
          key: "usage",
          get: function get() {
            return this._usage;
          }
          /**
           * @en Get texture format.
           * @zh 纹理格式。
           */

        }, {
          key: "format",
          get: function get() {
            return this._format;
          }
          /**
           * @en Get texture width.
           * @zh 纹理宽度。
           */

        }, {
          key: "width",
          get: function get() {
            return this._width;
          }
          /**
           * @en Get texture height.
           * @zh 纹理高度。
           */

        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
          /**
           * @en Get texture depth.
           * @zh 纹理深度。
           */

        }, {
          key: "depth",
          get: function get() {
            return this._depth;
          }
          /**
           * @en Get texture array layer.
           * @zh 纹理数组层数。
           */

        }, {
          key: "layerCount",
          get: function get() {
            return this._layerCount;
          }
          /**
           * @en Get texture mip level.
           * @zh 纹理 mip 层级数。
           */

        }, {
          key: "levelCount",
          get: function get() {
            return this._levelCount;
          }
          /**
           * @en Get texture samples.
           * @zh 纹理采样数。
           */

        }, {
          key: "samples",
          get: function get() {
            return this._samples;
          }
          /**
           * @en Get texture flags.
           * @zh 纹理标识位。
           */

        }, {
          key: "flags",
          get: function get() {
            return this._flags;
          }
          /**
           * @en Get texture size.
           * @zh 纹理大小。
           */

        }, {
          key: "size",
          get: function get() {
            return this._size;
          }
          /**
           * @en Get texture buffer.
           * @zh 纹理缓冲。
           */

        }, {
          key: "buffer",
          get: function get() {
            return this._buffer;
          }
        }]);

        function Texture(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.TEXTURE) || this;
          _this._device = void 0;
          _this._type = TextureType.TEX2D;
          _this._usage = TextureUsageBit.NONE;
          _this._format = Format.UNKNOWN;
          _this._width = 0;
          _this._height = 0;
          _this._depth = 1;
          _this._layerCount = 1;
          _this._levelCount = 1;
          _this._samples = SampleCount.X1;
          _this._flags = TextureFlagBit.NONE;
          _this._isPowerOf2 = false;
          _this._size = 0;
          _this._buffer = null;
          _this._device = device;
          return _this;
        }

        return Texture;
      }(Obj));
    }
  };
});