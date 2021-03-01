"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNodeWithPrefab = createNodeWithPrefab;
exports.generateTargetMap = generateTargetMap;
exports.getTarget = getTarget;
exports.applyMountedChildren = applyMountedChildren;
exports.applyPropertyOverrides = applyPropertyOverrides;
exports.applyTargetOverrides = applyTargetOverrides;
exports.PrefabInstance = exports.MountedChildrenInfo = exports.PropertyOverrideInfo = exports.CompPrefabInfo = exports.PrefabInfo = exports.TargetOverrideInfo = exports.TargetInfo = void 0;

var _index = require("../data/decorators/index.js");

var _internal253Aconstants = require("../../../../virtual/internal%253Aconstants.js");

var _globalExports = require("../global-exports.js");

var _debug = require("../platform/debug.js");

var _index2 = require("../data/index.js");

var _dec, _class, _class2, _descriptor, _temp, _dec2, _dec3, _dec4, _dec5, _dec6, _class4, _class5, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp2, _dec7, _dec8, _class7, _class8, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp3, _dec9, _class10, _class11, _descriptor12, _temp4, _dec10, _dec11, _class13, _class14, _descriptor13, _descriptor14, _descriptor15, _temp5, _dec12, _dec13, _dec14, _class16, _class17, _descriptor16, _descriptor17, _temp6, _dec15, _dec16, _dec17, _dec18, _dec19, _class19, _class20, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp7;

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

  return array1.every((value, index) => value === array2[index]);
}

let TargetInfo = (_dec = (0, _index.ccclass)('cc.TargetInfo'), _dec(_class = (_class2 = (_temp = class TargetInfo {
  constructor() {
    _initializerDefineProperty(this, "localID", _descriptor, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "localID", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
})), _class2)) || _class);
exports.TargetInfo = TargetInfo;
let TargetOverrideInfo = (_dec2 = (0, _index.ccclass)('cc.TargetOverrideInfo'), _dec3 = (0, _index.type)(_index2.CCObject), _dec4 = (0, _index.type)(TargetInfo), _dec5 = (0, _index.type)(_globalExports.legacyCC.Node), _dec6 = (0, _index.type)(TargetInfo), _dec2(_class4 = (_class5 = (_temp2 = class TargetOverrideInfo {
  constructor() {
    _initializerDefineProperty(this, "source", _descriptor2, this);

    _initializerDefineProperty(this, "sourceInfo", _descriptor3, this);

    _initializerDefineProperty(this, "propertyPath", _descriptor4, this);

    _initializerDefineProperty(this, "target", _descriptor5, this);

    _initializerDefineProperty(this, "targetInfo", _descriptor6, this);
  }

}, _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "source", [_index.serializable, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "sourceInfo", [_index.serializable, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "propertyPath", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "target", [_index.serializable, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "targetInfo", [_index.serializable, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
})), _class5)) || _class4);
exports.TargetOverrideInfo = TargetOverrideInfo;
let PrefabInfo = (_dec7 = (0, _index.ccclass)('cc.PrefabInfo'), _dec8 = (0, _index.type)([TargetOverrideInfo]), _dec7(_class7 = (_class8 = (_temp3 = class PrefabInfo {
  constructor() {
    _initializerDefineProperty(this, "root", _descriptor7, this);

    _initializerDefineProperty(this, "asset", _descriptor8, this);

    _initializerDefineProperty(this, "fileId", _descriptor9, this);

    _initializerDefineProperty(this, "instance", _descriptor10, this);

    _initializerDefineProperty(this, "targetOverrides", _descriptor11, this);
  }

}, _temp3), (_descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "root", [_index.serializable, _index.editable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "asset", [_index.serializable, _index.editable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "fileId", [_index.serializable, _index.editable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "instance", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "targetOverrides", [_index.serializable, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class8)) || _class7);
exports.PrefabInfo = PrefabInfo;
_globalExports.legacyCC._PrefabInfo = PrefabInfo;
let CompPrefabInfo = (_dec9 = (0, _index.ccclass)('cc.CompPrefabInfo'), _dec9(_class10 = (_class11 = (_temp4 = class CompPrefabInfo {
  constructor() {
    _initializerDefineProperty(this, "fileId", _descriptor12, this);
  }

}, _temp4), (_descriptor12 = _applyDecoratedDescriptor(_class11.prototype, "fileId", [_index.serializable, _index.editable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
})), _class11)) || _class10);
exports.CompPrefabInfo = CompPrefabInfo;
let PropertyOverrideInfo = (_dec10 = (0, _index.ccclass)('CCPropertyOverrideInfo'), _dec11 = (0, _index.type)(TargetInfo), _dec10(_class13 = (_class14 = (_temp5 = class PropertyOverrideInfo {
  constructor() {
    _initializerDefineProperty(this, "targetInfo", _descriptor13, this);

    _initializerDefineProperty(this, "propertyPath", _descriptor14, this);

    _initializerDefineProperty(this, "value", _descriptor15, this);
  }

  // eslint-disable-next-line consistent-return
  isTarget(localID, propPath) {
    if (_internal253Aconstants.EDITOR) {
      var _this$targetInfo;

      return compareStringArray((_this$targetInfo = this.targetInfo) === null || _this$targetInfo === void 0 ? void 0 : _this$targetInfo.localID, localID) && compareStringArray(this.propertyPath, propPath);
    }
  }

}, _temp5), (_descriptor13 = _applyDecoratedDescriptor(_class14.prototype, "targetInfo", [_index.serializable, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "propertyPath", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "value", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class14)) || _class13);
exports.PropertyOverrideInfo = PropertyOverrideInfo;
let MountedChildrenInfo = (_dec12 = (0, _index.ccclass)('cc.MountedChildrenInfo'), _dec13 = (0, _index.type)(TargetInfo), _dec14 = (0, _index.type)([_globalExports.legacyCC.Node]), _dec12(_class16 = (_class17 = (_temp6 = class MountedChildrenInfo {
  constructor() {
    _initializerDefineProperty(this, "targetInfo", _descriptor16, this);

    _initializerDefineProperty(this, "nodes", _descriptor17, this);
  }

  // eslint-disable-next-line consistent-return
  isTarget(localID) {
    if (_internal253Aconstants.EDITOR) {
      var _this$targetInfo2;

      return compareStringArray((_this$targetInfo2 = this.targetInfo) === null || _this$targetInfo2 === void 0 ? void 0 : _this$targetInfo2.localID, localID);
    }
  }

}, _temp6), (_descriptor16 = _applyDecoratedDescriptor(_class17.prototype, "targetInfo", [_index.serializable, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class17.prototype, "nodes", [_index.serializable, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
})), _class17)) || _class16);
/**
 * Prefab实例类
 */

exports.MountedChildrenInfo = MountedChildrenInfo;
let PrefabInstance = (_dec15 = (0, _index.ccclass)('cc.PrefabInstance'), _dec16 = (0, _index.type)(_globalExports.legacyCC.Node), _dec17 = (0, _index.type)([MountedChildrenInfo]), _dec18 = (0, _index.type)([PropertyOverrideInfo]), _dec19 = (0, _index.type)([TargetInfo]), _dec15(_class19 = (_class20 = (_temp7 = class PrefabInstance {
  constructor() {
    _initializerDefineProperty(this, "fileId", _descriptor18, this);

    _initializerDefineProperty(this, "prefabRootNode", _descriptor19, this);

    _initializerDefineProperty(this, "mountedChildren", _descriptor20, this);

    _initializerDefineProperty(this, "propertyOverrides", _descriptor21, this);

    _initializerDefineProperty(this, "removedComponents", _descriptor22, this);

    this.targetMap = {};
  }

  // eslint-disable-next-line consistent-return
  findPropertyOverride(localID, propPath) {
    if (_internal253Aconstants.EDITOR) {
      for (let i = 0; i < this.propertyOverrides.length; i++) {
        const propertyOverride = this.propertyOverrides[i];

        if (propertyOverride.isTarget(localID, propPath)) {
          return propertyOverride;
        }
      }

      return null;
    }
  }

  removePropertyOverride(localID, propPath) {
    if (_internal253Aconstants.EDITOR) {
      for (let i = 0; i < this.propertyOverrides.length; i++) {
        const propertyOverride = this.propertyOverrides[i];

        if (propertyOverride.isTarget(localID, propPath)) {
          this.propertyOverrides.splice(i, 1);
          break;
        }
      }
    }
  }

}, _temp7), (_descriptor18 = _applyDecoratedDescriptor(_class20.prototype, "fileId", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class20.prototype, "prefabRootNode", [_index.serializable, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class20.prototype, "mountedChildren", [_index.serializable, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class20.prototype, "propertyOverrides", [_index.serializable, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class20.prototype, "removedComponents", [_index.serializable, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
})), _class20)) || _class19);
exports.PrefabInstance = PrefabInstance;

function createNodeWithPrefab(node) {
  // @ts-expect-error: private member access
  const prefabInfo = node._prefab;

  if (!prefabInfo) {
    return;
  }

  const prefabInstance = prefabInfo.instance;

  if (!prefabInstance) {
    return;
  }

  if (!prefabInfo.asset) {
    if (_internal253Aconstants.EDITOR) {// TODO show message in editor
    } else {
      (0, _debug.errorID)(3701, node.name);
    } // @ts-expect-error: private member access


    prefabInfo.instance = null;
    return;
  } // save root's preserved props to avoid overwritten by prefab


  const _objFlags = node._objFlags; // @ts-expect-error: private member access

  const _parent = node._parent; // @ts-expect-error: private member access

  const _id = node._id; // @ts-expect-error: private member access

  const _prefab = node._prefab; // instantiate prefab

  _globalExports.legacyCC.game._isCloning = true;

  if (_internal253Aconstants.SUPPORT_JIT) {
    // @ts-expect-error: private member access
    prefabInfo.asset._doInstantiate(node);
  } else {
    // root in prefab asset is always synced
    const prefabRoot = prefabInfo.asset.data; // use node as the instantiated prefabRoot to make references to prefabRoot in prefab redirect to node

    prefabRoot._iN$t = node; // instantiate prefab and apply to node

    _globalExports.legacyCC.instantiate._clone(prefabRoot, prefabRoot);
  }

  _globalExports.legacyCC.game._isCloning = false; // restore preserved props

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

  let curTargetMap = targetMap; // @ts-expect-error: private member access

  const prefabInstance = (_node$_prefab = node._prefab) === null || _node$_prefab === void 0 ? void 0 : _node$_prefab.instance;

  if (!isRoot && prefabInstance) {
    targetMap[prefabInstance.fileId] = {};
    curTargetMap = targetMap[prefabInstance.fileId];
  } // @ts-expect-error: private member access


  const prefabInfo = node._prefab;

  if (prefabInfo) {
    curTargetMap[prefabInfo.fileId] = node;
  }

  const components = node.components;

  for (let i = 0; i < components.length; i++) {
    const comp = components[i];

    if (comp.__prefab) {
      curTargetMap[comp.__prefab.fileId] = comp;
    }
  }

  for (let i = 0; i < node.children.length; i++) {
    const childNode = node.children[i];
    generateTargetMap(childNode, curTargetMap, false);
  }
}

function getTarget(localID, targetMap) {
  if (!localID) {
    return null;
  }

  let target = null;
  let targetIter = targetMap;

  for (let i = 0; i < localID.length; i++) {
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

  for (let i = 0; i < mountedChildren.length; i++) {
    const childInfo = mountedChildren[i];

    if (childInfo && childInfo.targetInfo) {
      const target = getTarget(childInfo.targetInfo.localID, targetMap);

      if (!target) {
        continue;
      }

      if (childInfo.nodes) {
        for (let i = 0; i < childInfo.nodes.length; i++) {
          const childNode = childInfo.nodes[i]; // @ts-expect-error private member access

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

  let target = null;

  for (let i = 0; i < propertyOverrides.length; i++) {
    const propOverride = propertyOverrides[i];

    if (propOverride && propOverride.targetInfo) {
      const targetInfo = propOverride.targetInfo;
      target = getTarget(targetInfo.localID, targetMap);

      if (!target) {
        // Can't find target
        continue;
      }

      let targetPropOwner = target;
      const propertyPath = propOverride.propertyPath.slice();

      if (propertyPath.length > 0) {
        const targetPropName = propertyPath.pop();

        if (!targetPropName) {
          continue;
        }

        for (let i = 0; i < propertyPath.length; i++) {
          const propName = propertyPath[i];
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
            const index = Number.parseInt(targetPropName);

            if (Number.isInteger(index) && index < targetPropOwner.length) {
              targetPropOwner[targetPropName] = propOverride.value;
            }
          }
        } else {
          targetPropOwner[targetPropName] = propOverride.value;
        }
      } else if (_internal253Aconstants.EDITOR) {
        (0, _debug.warn)('property path is empty');
      }
    }
  }
}

function applyTargetOverrides(node) {
  var _node$_prefab2;

  // @ts-expect-error private member access
  const targetOverrides = (_node$_prefab2 = node._prefab) === null || _node$_prefab2 === void 0 ? void 0 : _node$_prefab2.targetOverrides;

  if (targetOverrides) {
    for (let i = 0; i < targetOverrides.length; i++) {
      var _targetOverride$targe, _targetOverride$targe2;

      const targetOverride = targetOverrides[i];
      let source = targetOverride.source;
      const sourceInfo = targetOverride.sourceInfo;

      if (sourceInfo) {
        var _targetOverride$sourc, _targetOverride$sourc2;

        // @ts-expect-error private member access
        const sourceInstance = (_targetOverride$sourc = targetOverride.source) === null || _targetOverride$sourc === void 0 ? void 0 : (_targetOverride$sourc2 = _targetOverride$sourc._prefab) === null || _targetOverride$sourc2 === void 0 ? void 0 : _targetOverride$sourc2.instance;

        if (sourceInstance && sourceInstance.targetMap) {
          source = getTarget(sourceInfo.localID, sourceInstance.targetMap);
        }

        if (!source) {
          // Can't find source
          continue;
        }
      }

      let target = null;
      const targetInfo = targetOverride.targetInfo;

      if (!targetInfo) {
        continue;
      } // @ts-expect-error private member access


      const targetInstance = (_targetOverride$targe = targetOverride.target) === null || _targetOverride$targe === void 0 ? void 0 : (_targetOverride$targe2 = _targetOverride$targe._prefab) === null || _targetOverride$targe2 === void 0 ? void 0 : _targetOverride$targe2.instance;

      if (!targetInstance || !targetInstance.targetMap) {
        continue;
      }

      target = getTarget(targetInfo.localID, targetInstance.targetMap);

      if (!target) {
        // Can't find target
        continue;
      }

      const propertyPath = targetOverride.propertyPath.slice();
      let targetPropOwner = source;

      if (propertyPath.length > 0) {
        const targetPropName = propertyPath.pop();

        if (!targetPropName) {
          return;
        }

        for (let i = 0; i < propertyPath.length; i++) {
          const propName = propertyPath[i];
          targetPropOwner = targetPropOwner[propName];
        }

        targetPropOwner[targetPropName] = target;
      }
    }
  }
}