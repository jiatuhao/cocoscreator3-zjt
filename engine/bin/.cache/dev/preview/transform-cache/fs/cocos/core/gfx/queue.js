System.register("q-bundled:///fs/cocos/core/gfx/queue.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var Obj, ObjectType, QueueType, QueueInfo, Queue;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
      QueueType = _defineJs.QueueType;
    }],
    execute: function () {
      _export("QueueInfo", QueueInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function QueueInfo(type) {
        if (type === void 0) {
          type = QueueType.GRAPHICS;
        }

        this.type = type;
      });
      /**
       * @en GFX Queue.
       * @zh GFX 队列。
       */


      _export("Queue", Queue = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(Queue, _Obj);

        _createClass(Queue, [{
          key: "type",

          /**
           * @en Get current type.
           * @zh 队列类型。
           */
          get: function get() {
            return this._type;
          }
        }]);

        function Queue(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.QUEUE) || this;
          _this._device = void 0;
          _this._type = QueueType.GRAPHICS;
          _this._isAsync = false;
          _this._device = device;
          return _this;
        }

        var _proto = Queue.prototype;

        _proto.isAsync = function isAsync() {
          return this._isAsync;
        };

        return Queue;
      }(Obj));
    }
  };
});