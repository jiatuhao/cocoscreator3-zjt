System.register("q-bundled:///fs/cocos/core/gfx/command-buffer.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var CommandBufferType, Obj, ObjectType, CommandBufferInfo, CommandBuffer;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      CommandBufferType = _defineJs.CommandBufferType;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("CommandBufferInfo", CommandBufferInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function CommandBufferInfo(queue, type) {
        if (type === void 0) {
          type = CommandBufferType.PRIMARY;
        }

        this.queue = queue;
        this.type = type;
      });
      /**
       * @en GFX command buffer.
       * @zh GFX 命令缓冲。
       */


      _export("CommandBuffer", CommandBuffer = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(CommandBuffer, _Obj);

        _createClass(CommandBuffer, [{
          key: "type",

          /**
           * @en Type of the command buffer.
           * @zh 命令缓冲类型。
           */
          get: function get() {
            return this._type;
          }
          /**
           * @en Type of the command buffer.
           * @zh 命令缓冲类型。
           */

        }, {
          key: "queue",
          get: function get() {
            return this._queue;
          }
          /**
           * @en Number of draw calls currently recorded.
           * @zh 绘制调用次数。
           */

        }, {
          key: "numDrawCalls",
          get: function get() {
            return this._numDrawCalls;
          }
          /**
           * @en Number of instances currently recorded.
           * @zh 绘制 Instance 数量。
           */

        }, {
          key: "numInstances",
          get: function get() {
            return this._numInstances;
          }
          /**
           * @en Number of triangles currently recorded.
           * @zh 绘制三角形数量。
           */

        }, {
          key: "numTris",
          get: function get() {
            return this._numTris;
          }
        }]);

        function CommandBuffer(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.COMMAND_BUFFER) || this;
          _this._device = void 0;
          _this._queue = null;
          _this._type = CommandBufferType.PRIMARY;
          _this._numDrawCalls = 0;
          _this._numInstances = 0;
          _this._numTris = 0;
          _this._device = device;
          return _this;
        }

        return CommandBuffer;
      }(Obj));
    }
  };
});