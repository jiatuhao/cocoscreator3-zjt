System.register("q-bundled:///fs/cocos/core/gfx/buffer.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var BufferFlagBit, BufferUsageBit, MemoryUsageBit, Obj, ObjectType, DrawInfo, DRAW_INFO_SIZE, IndirectBuffer, BufferInfo, BufferViewInfo, Buffer;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      BufferFlagBit = _defineJs.BufferFlagBit;
      BufferUsageBit = _defineJs.BufferUsageBit;
      MemoryUsageBit = _defineJs.MemoryUsageBit;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("DrawInfo", DrawInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function DrawInfo(vertexCount, firstVertex, indexCount, firstIndex, vertexOffset, instanceCount, firstInstance) {
        if (vertexCount === void 0) {
          vertexCount = 0;
        }

        if (firstVertex === void 0) {
          firstVertex = 0;
        }

        if (indexCount === void 0) {
          indexCount = 0;
        }

        if (firstIndex === void 0) {
          firstIndex = 0;
        }

        if (vertexOffset === void 0) {
          vertexOffset = 0;
        }

        if (instanceCount === void 0) {
          instanceCount = 0;
        }

        if (firstInstance === void 0) {
          firstInstance = 0;
        }

        this.vertexCount = vertexCount;
        this.firstVertex = firstVertex;
        this.indexCount = indexCount;
        this.firstIndex = firstIndex;
        this.vertexOffset = vertexOffset;
        this.instanceCount = instanceCount;
        this.firstInstance = firstInstance;
      });

      _export("DRAW_INFO_SIZE", DRAW_INFO_SIZE = 28);

      _export("IndirectBuffer", IndirectBuffer = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function IndirectBuffer(drawInfos) {
        if (drawInfos === void 0) {
          drawInfos = [];
        }

        this.drawInfos = drawInfos;
      });

      _export("BufferInfo", BufferInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function BufferInfo(usage, memUsage, size, stride, flags) {
        if (size === void 0) {
          size = 0;
        }

        if (stride === void 0) {
          stride = 0;
        }

        if (flags === void 0) {
          flags = BufferFlagBit.NONE;
        }

        this.usage = usage;
        this.memUsage = memUsage;
        this.size = size;
        this.stride = stride;
        this.flags = flags;
      });

      _export("BufferViewInfo", BufferViewInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function BufferViewInfo(buffer, offset, range) {
        if (offset === void 0) {
          offset = 0;
        }

        if (range === void 0) {
          range = 0;
        }

        this.buffer = buffer;
        this.offset = offset;
        this.range = range;
      });
      /**
       * @en GFX buffer.
       * @zh GFX 缓冲。
       */


      _export("Buffer", Buffer = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(Buffer, _Obj);

        _createClass(Buffer, [{
          key: "usage",

          /**
           * @en Usage type of the buffer.
           * @zh 缓冲使用方式。
           */
          get: function get() {
            return this._usage;
          }
          /**
           * @en Memory usage of the buffer.
           * @zh 缓冲的内存使用方式。
           */

        }, {
          key: "memUsage",
          get: function get() {
            return this._memUsage;
          }
          /**
           * @en Size of the buffer.
           * @zh 缓冲大小。
           */

        }, {
          key: "size",
          get: function get() {
            return this._size;
          }
          /**
           * @en Stride of the buffer.
           * @zh 缓冲步长。
           */

        }, {
          key: "stride",
          get: function get() {
            return this._stride;
          }
          /**
           * @en Count of the buffer wrt. stride.
           * @zh 缓冲条目数量。
           */

        }, {
          key: "count",
          get: function get() {
            return this._count;
          }
        }, {
          key: "flags",
          get: function get() {
            return this._flags;
          }
          /**
           * @en View of the back-up buffer, if specified.
           * @zh 备份缓冲视图。
           */

        }, {
          key: "backupBuffer",
          get: function get() {
            return this._bakcupBuffer;
          }
        }]);

        function Buffer(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.BUFFER) || this;
          _this._device = void 0;
          _this._usage = BufferUsageBit.NONE;
          _this._memUsage = MemoryUsageBit.NONE;
          _this._size = 0;
          _this._stride = 1;
          _this._count = 0;
          _this._flags = BufferFlagBit.NONE;
          _this._bakcupBuffer = null;
          _this._indirectBuffer = null;
          _this._isBufferView = false;
          _this._device = device;
          return _this;
        }

        return Buffer;
      }(Obj));
    }
  };
});