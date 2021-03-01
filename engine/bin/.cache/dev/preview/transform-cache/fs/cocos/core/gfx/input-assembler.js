System.register("q-bundled:///fs/cocos/core/gfx/input-assembler.js", ["../utils/murmurhash2_gc.js", "./define.js"], function (_export, _context) {
  "use strict";

  var murmurhash2_32_gc, Format, Obj, ObjectType, Attribute, InputAssemblerInfo, InputAssembler;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_utilsMurmurhash2_gcJs) {
      murmurhash2_32_gc = _utilsMurmurhash2_gcJs.murmurhash2_32_gc;
    }, function (_defineJs) {
      Format = _defineJs.Format;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("Attribute", Attribute = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function Attribute(name, format, isNormalized, stream, isInstanced, location) {
        if (name === void 0) {
          name = '';
        }

        if (format === void 0) {
          format = Format.UNKNOWN;
        }

        if (isNormalized === void 0) {
          isNormalized = false;
        }

        if (stream === void 0) {
          stream = 0;
        }

        if (isInstanced === void 0) {
          isInstanced = false;
        }

        if (location === void 0) {
          location = 0;
        }

        this.name = name;
        this.format = format;
        this.isNormalized = isNormalized;
        this.stream = stream;
        this.isInstanced = isInstanced;
        this.location = location;
      });

      _export("InputAssemblerInfo", InputAssemblerInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function InputAssemblerInfo(attributes, vertexBuffers, indexBuffer, indirectBuffer) {
        if (attributes === void 0) {
          attributes = [];
        }

        if (vertexBuffers === void 0) {
          vertexBuffers = [];
        }

        if (indexBuffer === void 0) {
          indexBuffer = null;
        }

        if (indirectBuffer === void 0) {
          indirectBuffer = null;
        }

        this.attributes = attributes;
        this.vertexBuffers = vertexBuffers;
        this.indexBuffer = indexBuffer;
        this.indirectBuffer = indirectBuffer;
      });
      /**
       * @en GFX input assembler.
       * @zh GFX 输入汇集器。
       */


      _export("InputAssembler", InputAssembler = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(InputAssembler, _Obj);

        _createClass(InputAssembler, [{
          key: "vertexBuffers",

          /**
           * @en Get current vertex buffers.
           * @zh 顶点缓冲数组。
           */
          get: function get() {
            return this._vertexBuffers;
          }
          /**
           * @en Get current index buffer.
           * @zh 索引缓冲。
           */

        }, {
          key: "indexBuffer",
          get: function get() {
            return this._indexBuffer;
          }
          /**
           * @en Get current attributes.
           * @zh 顶点属性数组。
           */

        }, {
          key: "attributes",
          get: function get() {
            return this._attributes;
          }
          /**
           * @en Get hash of current attributes.
           * @zh 获取顶点属性数组的哈希值。
           */

        }, {
          key: "attributesHash",
          get: function get() {
            return this._attributesHash;
          }
          /**
           * @en Get current vertex count.
           * @zh 顶点数量。
           */

        }, {
          key: "vertexCount",
          get: function get() {
            return this._vertexCount;
          },
          set: function set(count) {
            this._vertexCount = count;
          }
          /**
           * @en Get starting vertex.
           * @zh 起始顶点。
           */

        }, {
          key: "firstVertex",
          get: function get() {
            return this._firstVertex;
          },
          set: function set(first) {
            this._firstVertex = first;
          }
          /**
           * @en Get current index count.
           * @zh 索引数量。
           */

        }, {
          key: "indexCount",
          get: function get() {
            return this._indexCount;
          },
          set: function set(count) {
            this._indexCount = count;
          }
          /**
           * @en Get starting index.
           * @zh 起始索引。
           */

        }, {
          key: "firstIndex",
          get: function get() {
            return this._firstIndex;
          },
          set: function set(first) {
            this._firstIndex = first;
          }
          /**
           * @en Get current vertex offset.
           * @zh 顶点偏移量。
           */

        }, {
          key: "vertexOffset",
          get: function get() {
            return this._vertexOffset;
          },
          set: function set(offset) {
            this._vertexOffset = offset;
          }
          /**
           * @en Get current instance count.
           * @zh 实例数量。
           */

        }, {
          key: "instanceCount",
          get: function get() {
            return this._instanceCount;
          },
          set: function set(count) {
            this._instanceCount = count;
          }
          /**
           * @en Get starting instance.
           * @zh 起始实例。
           */

        }, {
          key: "firstInstance",
          get: function get() {
            return this._firstInstance;
          },
          set: function set(first) {
            this._firstInstance = first;
          }
          /**
           * @en Get the indirect buffer, if present.
           * @zh 间接绘制缓冲。
           */

        }, {
          key: "indirectBuffer",
          get: function get() {
            return this._indirectBuffer;
          }
        }]);

        function InputAssembler(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.INPUT_ASSEMBLER) || this;
          _this._device = void 0;
          _this._attributes = [];
          _this._vertexBuffers = [];
          _this._indexBuffer = null;
          _this._vertexCount = 0;
          _this._firstVertex = 0;
          _this._indexCount = 0;
          _this._firstIndex = 0;
          _this._vertexOffset = 0;
          _this._instanceCount = 0;
          _this._firstInstance = 0;
          _this._attributesHash = 0;
          _this._indirectBuffer = null;
          _this._device = device;
          return _this;
        }
        /**
         * @en Get the specified vertex buffer.
         * @zh 获取顶点缓冲。
         * @param stream The stream index of the vertex buffer.
         */


        var _proto = InputAssembler.prototype;

        _proto.getVertexBuffer = function getVertexBuffer(stream) {
          if (stream === void 0) {
            stream = 0;
          }

          if (stream < this._vertexBuffers.length) {
            return this._vertexBuffers[stream];
          } else {
            return null;
          }
        };

        _proto.computeAttributesHash = function computeAttributesHash() {
          var res = 'attrs';

          for (var i = 0; i < this.attributes.length; ++i) {
            var at = this.attributes[i];
            res += "," + at.name + "," + at.format + "," + at.isNormalized + "," + at.stream + "," + at.isInstanced;
          }

          return murmurhash2_32_gc(res, 666);
        };

        return InputAssembler;
      }(Obj));
    }
  };
});