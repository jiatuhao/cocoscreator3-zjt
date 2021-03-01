System.register("q-bundled:///fs/cocos/core/utils/prefab-utils.js", ["../data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../global-exports.js", "../platform/debug.js", "../data/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, editable, type, EDITOR, SUPPORT_JIT, legacyCC, errorID, warn, CCObject, _dec, _class, _class2, _descriptor, _temp, _dec2, _dec3, _dec4, _dec5, _dec6, _class4, _class5, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp2, _dec7, _dec8, _class7, _class8, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp3, _dec9, _class10, _class11, _descriptor12, _temp4, _dec10, _dec11, _class13, _class14, _descriptor13, _descriptor14, _descriptor15, _temp5, _dec12, _dec13, _dec14, _class16, _class17, _descriptor16, _descriptor17, _temp6, _dec15, _dec16, _dec17, _dec18, _dec19, _class19, _class20, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp7, TargetInfo, TargetOverrideInfo, PrefabInfo, CompPrefabInfo, PropertyOverrideInfo, MountedChildrenInfo, PrefabInstance;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function compareStringArray(array1, array2) {
    if (!array1 || !array2) {
      return false;
    }

    if (array1.length !== array2.length) {
      return false;
    }

    return array1.every(function (value, index) {
      return value === array2[index];
    });
  }

  function createNodeWithPrefab(node) {
    // @ts-expect-error: private member access
    var prefabInfo = node._prefab;

    if (!prefabInfo) {
      return;
    }

    var prefabInstance = prefabInfo.instance;

    if (!prefabInstance) {
      return;
    }

    if (!prefabInfo.asset) {
      if (EDITOR) {// TODO show message in editor
      } else {
        errorID(3701, node.name);
      } // @ts-expect-error: private member access


      prefabInfo.instance = null;
      return;
    } // save root's preserved props to avoid overwritten by prefab


    var _objFlags = node._objFlags; // @ts-expect-error: private member access

    var _parent = node._parent; // @ts-expect-error: private member access

    var _id = node._id; // @ts-expect-error: private member access

    var _prefab = node._prefab; // instantiate prefab

    legacyCC.game._isCloning = true;

    if (SUPPORT_JIT) {
      // @ts-expect-error: private member access
      prefabInfo.asset._doInstantiate(node);
    } else {
      // root in prefab asset is always synced
      var prefabRoot = prefabInfo.asset.data; // use node as the instantiated prefabRoot to make references to prefabRoot in prefab redirect to node

      prefabRoot._iN$t = node; // instantiate prefab and apply to node

      legacyCC.instantiate._clone(prefabRoot, prefabRoot);
    }

    legacyCC.game._isCloning = false; // restore preserved props

    node._objFlags = _objFlags; // @ts-expect-error: private member access

    node._parent = _parent; // @ts-expect-error: private member access

    node._id = _id; // @ts-expect-error: private member access

    if (node._prefab) {
      // just keep the instance
      // @ts-expect-error: private member access
      node._prefab.instance = _prefab === null || _prefab === void 0 ? void 0 : _prefab.instance;
    }
  } // TODO: more efficient id->Node/Component map


  function generateTargetMap(node, targetMap, isRoot) {
    var _node$_prefab;

    var curTargetMap = targetMap; // @ts-expect-error: private member access

    var prefabInstance = (_node$_prefab = node._prefab) === null || _node$_prefab === void 0 ? void 0 : _node$_prefab.instance;

    if (!isRoot && prefabInstance) {
      targetMap[prefabInstance.fileId] = {};
      curTargetMap = targetMap[prefabInstance.fileId];
    } // @ts-expect-error: private member access


    var prefabInfo = node._prefab;

    if (prefabInfo) {
      curTargetMap[prefabInfo.fileId] = node;
    }

    var components = node.components;

    for (var i = 0; i < components.length; i++) {
      var comp = components[i];

      if (comp.__prefab) {
        curTargetMap[comp.__prefab.fileId] = comp;
      }
    }

    for (var _i = 0; _i < node.children.length; _i++) {
      var childNode = node.children[_i];
      generateTargetMap(childNode, curTargetMap, false);
    }
  }

  function getTarget(localID, targetMap) {
    if (!localID) {
      return null;
    }

    var target = null;
    var targetIter = targetMap;

    for (var i = 0; i < localID.length; i++) {
      if (!targetIter) {
        return null;
      }

      targetIter = targetIter[localID[i]];
    }

    target = targetIter;
    return target;
  }

  function applyMountedChildren(node, mountedChildren, targetMap) {
    if (!mountedChildren) {
      return;
    }

    for (var i = 0; i < mountedChildren.length; i++) {
      var childInfo = mountedChildren[i];

      if (childInfo && childInfo.targetInfo) {
        var target = getTarget(childInfo.targetInfo.localID, targetMap);

        if (!target) {
          continue;
        }

        if (childInfo.nodes) {
          for (var _i2 = 0; _i2 < childInfo.nodes.length; _i2++) {
            var childNode = childInfo.nodes[_i2]; // @ts-expect-error private member access

            target._children.push(childNode); // @ts-expect-error private member access


            childNode._parent = target; // siblingIndex update is in _onBatchCreated function, and it needs a parent.

            childNode._onBatchCreated(false);
          }
        }
      }
    }
  }

  function applyPropertyOverrides(node, propertyOverrides, targetMap) {
    if (propertyOverrides.length <= 0) {
      return;
    }

    var target = null;

    for (var i = 0; i < propertyOverrides.length; i++) {
      var propOverride = propertyOverrides[i];

      if (propOverride && propOverride.targetInfo) {
        var targetInfo = propOverride.targetInfo;
        target = getTarget(targetInfo.localID, targetMap);

        if (!target) {
          // Can't find target
          continue;
        }

        var targetPropOwner = target;
        var propertyPath = propOverride.propertyPath.slice();

        if (propertyPath.length > 0) {
          var targetPropName = propertyPath.pop();

          if (!targetPropName) {
            continue;
          }

          for (var _i3 = 0; _i3 < propertyPath.length; _i3++) {
            var propName = propertyPath[_i3];
            targetPropOwner = targetPropOwner[propName];

            if (!targetPropOwner) {
              break;
            }
          }

          if (!targetPropOwner) {
            continue;
          }

          if (Array.isArray(targetPropOwner)) {
            // if set element of a array, the length of a array must has been defined.
            if (targetPropName === 'length') {
              targetPropOwner[targetPropName] = propOverride.value;
            } else {
              var index = Number.parseInt(targetPropName);

              if (Number.isInteger(index) && index < targetPropOwner.length) {
                targetPropOwner[targetPropName] = propOverride.value;
              }
            }
          } else {
            targetPropOwner[targetPropName] = propOverride.value;
          }
        } else if (EDITOR) {
          warn('property path is empty');
        }
      }
    }
  }

  function applyTargetOverrides(node) {
    var _node$_prefab2;

    // @ts-expect-error private member access
    var targetOverrides = (_node$_prefab2 = node._prefab) === null || _node$_prefab2 === void 0 ? void 0 : _node$_prefab2.targetOverrides;

    if (targetOverrides) {
      for (var i = 0; i < targetOverrides.length; i++) {
        var _targetOverride$targe, _targetOverride$targe2;

        var targetOverride = targetOverrides[i];
        var source = targetOverride.source;
        var sourceInfo = targetOverride.sourceInfo;

        if (sourceInfo) {
          var _targetOverride$sourc, _targetOverride$sourc2;

          // @ts-expect-error private member access
          var sourceInstance = (_targetOverride$sourc = targetOverride.source) === null || _targetOverride$sourc === void 0 ? void 0 : (_targetOverride$sourc2 = _targetOverride$sourc._prefab) === null || _targetOverride$sourc2 === void 0 ? void 0 : _targetOverride$sourc2.instance;

          if (sourceInstance && sourceInstance.targetMap) {
            source = getTarget(sourceInfo.localID, sourceInstance.targetMap);
          }

          if (!source) {
            // Can't find source
            continue;
          }
        }

        var target = null;
        var targetInfo = targetOverride.targetInfo;

        if (!targetInfo) {
          continue;
        } // @ts-expect-error private member access


        var targetInstance = (_targetOverride$targe = targetOverride.target) === null || _targetOverride$targe === void 0 ? void 0 : (_targetOverride$targe2 = _targetOverride$targe._prefab) === null || _targetOverride$targe2 === void 0 ? void 0 : _targetOverride$targe2.instance;

        if (!targetInstance || !targetInstance.targetMap) {
          continue;
        }

        target = getTarget(targetInfo.localID, targetInstance.targetMap);

        if (!target) {
          // Can't find target
          continue;
        }

        var propertyPath = targetOverride.propertyPath.slice();
        var targetPropOwner = source;

        if (propertyPath.length > 0) {
          var targetPropName = propertyPath.pop();

          if (!targetPropName) {
            return;
          }

          for (var _i4 = 0; _i4 < propertyPath.length; _i4++) {
            var propName = propertyPath[_i4];
            targetPropOwner = targetPropOwner[propName];
          }

          targetPropOwner[targetPropName] = target;
        }
      }
    }
  }

  _export({
    createNodeWithPrefab: createNodeWithPrefab,
    generateTargetMap: generateTargetMap,
    getTarget: getTarget,
    applyMountedChildren: applyMountedChildren,
    applyPropertyOverrides: applyPropertyOverrides,
    applyTargetOverrides: applyTargetOverrides
  });

  return {
    setters: [function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
      serializable = _dataDecoratorsIndexJs.serializable;
      editable = _dataDecoratorsIndexJs.editable;
      type = _dataDecoratorsIndexJs.type;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      SUPPORT_JIT = _virtualInternal253AconstantsJs.SUPPORT_JIT;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_platformDebugJs) {
      errorID = _platformDebugJs.errorID;
      warn = _platformDebugJs.warn;
    }, function (_dataIndexJs) {
      CCObject = _dataIndexJs.CCObject;
    }],
    execute: function () {
      _export("TargetInfo", TargetInfo = (_dec = ccclass('cc.TargetInfo'), _dec(_class = (_class2 = (_temp = function TargetInfo() {
        _initializerDefineProperty(this, "localID", _descriptor, this);
      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "localID", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _export("TargetOverrideInfo", TargetOverrideInfo = (_dec2 = ccclass('cc.TargetOverrideInfo'), _dec3 = type(CCObject), _dec4 = type(TargetInfo), _dec5 = type(legacyCC.Node), _dec6 = type(TargetInfo), _dec2(_class4 = (_class5 = (_temp2 = function TargetOverrideInfo() {
        _initializerDefineProperty(this, "source", _descriptor2, this);

        _initializerDefineProperty(this, "sourceInfo", _descriptor3, this);

        _initializerDefineProperty(this, "propertyPath", _descriptor4, this);

        _initializerDefineProperty(this, "target", _descriptor5, this);

        _initializerDefineProperty(this, "targetInfo", _descriptor6, this);
      }, _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "source", [serializable, _dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "sourceInfo", [serializable, _dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "propertyPath", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "target", [serializable, _dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "targetInfo", [serializable, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));

      _export("PrefabInfo", PrefabInfo = (_dec7 = ccclass('cc.PrefabInfo'), _dec8 = type([TargetOverrideInfo]), _dec7(_class7 = (_class8 = (_temp3 = function PrefabInfo() {
        _initializerDefineProperty(this, "root", _descriptor7, this);

        _initializerDefineProperty(this, "asset", _descriptor8, this);

        _initializerDefineProperty(this, "fileId", _descriptor9, this);

        _initializerDefineProperty(this, "instance", _descriptor10, this);

        _initializerDefineProperty(this, "targetOverrides", _descriptor11, this);
      }, _temp3), (_descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "root", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "asset", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "fileId", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "instance", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "targetOverrides", [serializable, _dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class8)) || _class7));

      legacyCC._PrefabInfo = PrefabInfo;

      _export("CompPrefabInfo", CompPrefabInfo = (_dec9 = ccclass('cc.CompPrefabInfo'), _dec9(_class10 = (_class11 = (_temp4 = function CompPrefabInfo() {
        _initializerDefineProperty(this, "fileId", _descriptor12, this);
      }, _temp4), (_descriptor12 = _applyDecoratedDescriptor(_class11.prototype, "fileId", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class11)) || _class10));

      _export("PropertyOverrideInfo", PropertyOverrideInfo = (_dec10 = ccclass('CCPropertyOverrideInfo'), _dec11 = type(TargetInfo), _dec10(_class13 = (_class14 = (_temp5 = /*#__PURE__*/function () {
        function PropertyOverrideInfo() {
          _initializerDefineProperty(this, "targetInfo", _descriptor13, this);

          _initializerDefineProperty(this, "propertyPath", _descriptor14, this);

          _initializerDefineProperty(this, "value", _descriptor15, this);
        }

        var _proto = PropertyOverrideInfo.prototype;

        // eslint-disable-next-line consistent-return
        _proto.isTarget = function isTarget(localID, propPath) {
          if (EDITOR) {
            var _this$targetInfo;

            return compareStringArray((_this$targetInfo = this.targetInfo) === null || _this$targetInfo === void 0 ? void 0 : _this$targetInfo.localID, localID) && compareStringArray(this.propertyPath, propPath);
          }
        };

        return PropertyOverrideInfo;
      }(), _temp5), (_descriptor13 = _applyDecoratedDescriptor(_class14.prototype, "targetInfo", [serializable, _dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "propertyPath", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "value", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class14)) || _class13));

      _export("MountedChildrenInfo", MountedChildrenInfo = (_dec12 = ccclass('cc.MountedChildrenInfo'), _dec13 = type(TargetInfo), _dec14 = type([legacyCC.Node]), _dec12(_class16 = (_class17 = (_temp6 = /*#__PURE__*/function () {
        function MountedChildrenInfo() {
          _initializerDefineProperty(this, "targetInfo", _descriptor16, this);

          _initializerDefineProperty(this, "nodes", _descriptor17, this);
        }

        var _proto2 = MountedChildrenInfo.prototype;

        // eslint-disable-next-line consistent-return
        _proto2.isTarget = function isTarget(localID) {
          if (EDITOR) {
            var _this$targetInfo2;

            return compareStringArray((_this$targetInfo2 = this.targetInfo) === null || _this$targetInfo2 === void 0 ? void 0 : _this$targetInfo2.localID, localID);
          }
        };

        return MountedChildrenInfo;
      }(), _temp6), (_descriptor16 = _applyDecoratedDescriptor(_class17.prototype, "targetInfo", [serializable, _dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class17.prototype, "nodes", [serializable, _dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class17)) || _class16));
      /**
       * Prefab实例类
       */


      _export("PrefabInstance", PrefabInstance = (_dec15 = ccclass('cc.PrefabInstance'), _dec16 = type(legacyCC.Node), _dec17 = type([MountedChildrenInfo]), _dec18 = type([PropertyOverrideInfo]), _dec19 = type([TargetInfo]), _dec15(_class19 = (_class20 = (_temp7 = /*#__PURE__*/function () {
        function PrefabInstance() {
          _initializerDefineProperty(this, "fileId", _descriptor18, this);

          _initializerDefineProperty(this, "prefabRootNode", _descriptor19, this);

          _initializerDefineProperty(this, "mountedChildren", _descriptor20, this);

          _initializerDefineProperty(this, "propertyOverrides", _descriptor21, this);

          _initializerDefineProperty(this, "removedComponents", _descriptor22, this);

          this.targetMap = {};
        }

        var _proto3 = PrefabInstance.prototype;

        // eslint-disable-next-line consistent-return
        _proto3.findPropertyOverride = function findPropertyOverride(localID, propPath) {
          if (EDITOR) {
            for (var i = 0; i < this.propertyOverrides.length; i++) {
              var propertyOverride = this.propertyOverrides[i];

              if (propertyOverride.isTarget(localID, propPath)) {
                return propertyOverride;
              }
            }

            return null;
          }
        };

        _proto3.removePropertyOverride = function removePropertyOverride(localID, propPath) {
          if (EDITOR) {
            for (var i = 0; i < this.propertyOverrides.length; i++) {
              var propertyOverride = this.propertyOverrides[i];

              if (propertyOverride.isTarget(localID, propPath)) {
                this.propertyOverrides.splice(i, 1);
                break;
              }
            }
          }
        };

        return PrefabInstance;
      }(), _temp7), (_descriptor18 = _applyDecoratedDescriptor(_class20.prototype, "fileId", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class20.prototype, "prefabRootNode", [serializable, _dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class20.prototype, "mountedChildren", [serializable, _dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class20.prototype, "propertyOverrides", [serializable, _dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class20.prototype, "removedComponents", [serializable, _dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class20)) || _class19));
    }
  };
});