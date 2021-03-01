System.register("q-bundled:///fs/cocos/core/scene-graph/private-node.js", ["../../../../virtual/internal%253Aconstants.js", "../data/decorators/index.js", "../data/object.js", "./node.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, CCObject, Node, legacyCC, _dec, _class, HideInHierarchy, PrivateNode;

  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
    }, function (_dataObjectJs) {
      CCObject = _dataObjectJs.CCObject;
    }, function (_nodeJs) {
      Node = _nodeJs.Node;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      // const LocalDirtyFlag = Node._LocalDirtyFlag;
      // const POSITION_ON = 1 << 0;
      HideInHierarchy = CCObject.Flags.HideInHierarchy;
      /**
       * @en
       * Class of private entities in Cocos Creator scenes.<br/>
       * The PrivateNode is hidden in editor, and completely transparent to users.<br/>
       * It's normally used as Node's private content created by components in parent node.<br/>
       * So in theory private nodes are not children, they are part of the parent node.<br/>
       * Private node have two important characteristics:<br/>
       * 1. It has the minimum z index and cannot be modified, because they can't be displayed over real children.<br/>
       * 2. The positioning of private nodes is also special, they will consider the left bottom corner of the parent node's bounding box as the origin of local coordinates.<br/>
       *    In this way, they can be easily kept inside the bounding box.<br/>
       * Currently, it's used by RichText component and TileMap component.
       * @zh
       * Cocos Creator 场景中的私有节点类。<br/>
       * 私有节点在编辑器中不可见，对用户透明。<br/>
       * 通常私有节点是被一些特殊的组件创建出来作为父节点的一部分而存在的，理论上来说，它们不是子节点，而是父节点的组成部分。<br/>
       * 私有节点有两个非常重要的特性：<br/>
       * 1. 它有着最小的渲染排序的 Z 轴深度，并且无法被更改，因为它们不能被显示在其他正常子节点之上。<br/>
       * 2. 它的定位也是特殊的，对于私有节点来说，父节点包围盒的左下角是它的局部坐标系原点，这个原点相当于父节点的位置减去它锚点的偏移。这样私有节点可以比较容易被控制在包围盒之中。<br/>
       * 目前在引擎中，RichText 和 TileMap 都有可能生成私有节点。
       */

      _export("PrivateNode", PrivateNode = (_dec = ccclass('cc.PrivateNode'), _dec(_class = /*#__PURE__*/function (_Node) {
        _inheritsLoose(PrivateNode, _Node);

        // @property({
        //     override: true
        // })
        // get x() {
        //     return this._originPos.x;
        // }
        // set x(value) {
        //     var localPosition = this._originPos;
        //     if (value !== localPosition.x) {
        //         localPosition.x = value;
        //         this._posDirty(true);
        //     }
        // }
        // @property({
        //     override: true
        // })
        // get y() {
        //     return this._originPos.y;
        // }
        // set y(value) {
        //     var localPosition = this._originPos;
        //     if (value !== localPosition.y) {
        //         localPosition.y = value;
        //         this._posDirty(true);
        //     }
        // }
        // @property({
        //     override: true
        // })
        // get zIndex() {
        //     return cc.macro.MIN_ZINDEX;
        // }
        // set zIndex(val) {
        //     cc.warnID(1638);
        // }
        function PrivateNode(name) {
          var _this;

          _this = _Node.call(this, name) || this; // this._originPos = cc.v2();

          if (EDITOR) {
            _this._objFlags |= HideInHierarchy;
          }

          return _this;
        } // _posDirty (sendEvent) {
        //     this.setLocalDirty(LocalDirtyFlag.POSITION);
        //     if (sendEvent === true && (this._eventMask & POSITION_ON)) {
        //         this.emit(Node.EventType.POSITION_CHANGED);
        //     }
        // }
        // _updateLocalMatrix() {
        //     if (!this._localMatDirty) return;
        //     let parent = this.parent;
        //     if (parent) {
        //         // Position correction for transform calculation
        //         this._position.x = this._originPos.x - (parent._anchorPoint.x - 0.5) * parent._contentSize.width;
        //         this._position.y = this._originPos.y - (parent._anchorPoint.y - 0.5) * parent._contentSize.height;
        //     }
        //     super._updateLocalMatrix();
        // }
        // getPosition () {
        //     return new cc.Vec2(this._originPos);
        // }
        // setPosition (x, y) {
        //     if (y === undefined) {
        //         x = x.x;
        //         y = x.y;
        //     }
        //     let pos = this._originPos;
        //     if (pos.x === x && pos.y === y) {
        //         return;
        //     }
        //     pos.x = x;
        //     pos.y = y;
        //     this._posDirty(true);
        // }
        // setParent(value) {
        //     let oldParent = this._parent;
        //     super.setParent(value);
        //     if (oldParent !== value) {
        //         if (oldParent) {
        //             oldParent.off(Node.EventType.ANCHOR_CHANGED, this._posDirty, this);
        //         }
        //         if (value) {
        //             value.on(Node.EventType.ANCHOR_CHANGED, this._posDirty, this);
        //         }
        //     }
        // }
        // do not update order of arrival
        // public _updateOrderOfArrival () {}


        return PrivateNode;
      }(Node)) || _class)); // cc.js.getset(PrivateNode.prototype, 'parent', PrivateNode.prototype.getParent, PrivateNode.prototype.setParent);
      // cc.js.getset(PrivateNode.prototype, 'position', PrivateNode.prototype.getPosition, PrivateNode.prototype.setPosition);


      if (EDITOR) {
        // check components to avoid missing node reference serialied in previous version
        PrivateNode.prototype._onBatchCreated = function onBatchCreated(dontSyncChildPrefab) {
          // @ts-expect-error
          for (var _iterator = _createForOfIteratorHelperLoose(this._components), _step; !(_step = _iterator()).done;) {
            var comp = _step.value;
            comp.node = this;
          }

          Node.prototype._onBatchCreated.call(this, dontSyncChildPrefab);
        };
      }

      legacyCC.PrivateNode = PrivateNode;
    }
  };
});