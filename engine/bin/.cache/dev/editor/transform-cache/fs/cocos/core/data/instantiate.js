"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instantiate = instantiate;

var _internal253Aconstants = require("../../../../virtual/internal%253Aconstants.js");

var _misc = require("../utils/misc.js");

var _index = require("../value-types/index.js");

var _object = require("./object.js");

var _js = require("../utils/js.js");

var _debug = require("../platform/debug.js");

var _globalExports = require("../global-exports.js");

/*
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/**
 * @packageDocumentation
 * @module core/data
 */
const Destroyed = _object.CCObject.Flags.Destroyed;
const PersistentMask = _object.CCObject.Flags.PersistentMask;
const objsToClearTmpVar = []; // used to reset _iN$t variable

/**
 * Invoke _instantiate method if supplied.
 * The _instantiate callback will be called only on the root object, its associated object will not be called.
 * @param instantiated If supplied, _instantiate just need to initialize the instantiated object, no need to create new object by itself.
 * @returns The instantiated object.
 */

function instantiate(original, internalForce) {
  if (!internalForce) {
    if (_internal253Aconstants.DEV) {
      if (typeof original !== 'object' || Array.isArray(original)) {
        throw new TypeError((0, _debug.getError)(6900));
      }

      if (!original) {
        throw new TypeError((0, _debug.getError)(6901));
      }

      if (!_globalExports.legacyCC.isValid(original)) {
        throw new TypeError((0, _debug.getError)(6901));
      }

      if (original instanceof _globalExports.legacyCC.Component) {
        (0, _debug.warn)('Should not instantiate a single cc.Component directly, you must instantiate the entire node.');
      }
    }
  }

  let clone;

  if (original instanceof _object.CCObject) {
    // @ts-expect-error
    if (original._instantiate) {
      _globalExports.legacyCC.game._isCloning = true; // @ts-expect-error

      clone = original._instantiate(null, true);
      _globalExports.legacyCC.game._isCloning = false;
      return clone;
    } else if (original instanceof _globalExports.legacyCC.Asset) {
      throw new TypeError((0, _debug.getError)(6903));
    }
  }

  _globalExports.legacyCC.game._isCloning = true;
  clone = doInstantiate(original);
  _globalExports.legacyCC.game._isCloning = false;
  return clone;
}
/*
 * @en
 * Do instantiate object, the object to instantiate must be non-nil.
 * @zh
 * 这是一个通用的 instantiate 方法，可能效率比较低。
 * 之后可以给各种类型重写快速实例化的特殊实现，但应该在单元测试中将结果和这个方法的结果进行对比。
 * 值得注意的是，这个方法不可重入。
 * @param obj - 该方法仅供内部使用，用户需负责保证参数合法。什么参数是合法的请参考 cc.instantiate 的实现。
 * @param parent - 只有在该对象下的场景物体会被克隆。
 * @return {Object}
 * @private
 */


function doInstantiate(obj, parent) {
  if (_internal253Aconstants.DEV) {
    if (Array.isArray(obj)) {
      throw new TypeError((0, _debug.getError)(6904));
    }

    if (_misc.isDomNode && (0, _misc.isDomNode)(obj)) {
      throw new TypeError((0, _debug.getError)(6905));
    }
  }

  let clone;

  if (obj._iN$t) {
    // User can specify an existing object by assigning the "_iN$t" property.
    // enumerateObject will always push obj to objsToClearTmpVar
    clone = obj._iN$t;
  } else if (obj.constructor) {
    const klass = obj.constructor;
    clone = new klass();
  } else {
    clone = Object.create(null);
  }

  enumerateObject(obj, clone, parent);

  for (let i = 0, len = objsToClearTmpVar.length; i < len; ++i) {
    objsToClearTmpVar[i]._iN$t = null;
  }

  objsToClearTmpVar.length = 0;
  return clone;
} // @param {Object} obj - The object to instantiate, typeof must be 'object' and should not be an array.


function enumerateCCClass(klass, obj, clone, parent) {
  const props = klass.__values__;

  for (let p = 0; p < props.length; p++) {
    const key = props[p];
    const value = obj[key];

    if (typeof value === 'object' && value) {
      const initValue = clone[key];

      if (initValue instanceof _index.ValueType && initValue.constructor === value.constructor) {
        initValue.set(value);
      } else {
        clone[key] = value._iN$t || instantiateObj(value, parent);
      }
    } else {
      clone[key] = value;
    }
  }
}

function enumerateObject(obj, clone, parent) {
  // 目前使用“_iN$t”这个特殊字段来存实例化后的对象，这样做主要是为了防止循环引用
  // 注意，为了避免循环引用，所有新创建的实例，必须在赋值前被设为源对象的_iN$t
  _js.js.value(obj, '_iN$t', clone, true);

  objsToClearTmpVar.push(obj);
  const klass = obj.constructor;

  if (_globalExports.legacyCC.Class._isCCClass(klass)) {
    enumerateCCClass(klass, obj, clone, parent);
  } else {
    // primitive javascript object
    for (const key in obj) {
      if (!obj.hasOwnProperty(key) || key.charCodeAt(0) === 95 && key.charCodeAt(1) === 95 // starts with "__"
      && key !== '__type__') {
        continue;
      }

      const value = obj[key];

      if (typeof value === 'object' && value) {
        if (value === clone) {
          continue; // value is obj._iN$t
        }

        clone[key] = value._iN$t || instantiateObj(value, parent);
      } else {
        clone[key] = value;
      }
    }
  }

  if (obj instanceof _object.CCObject) {
    clone._objFlags &= PersistentMask;
  }
}
/*
 * @param {Object|Array} obj - the original non-nil object, typeof must be 'object'
 * @return {Object|Array} - the original non-nil object, typeof must be 'object'
 */


function instantiateObj(obj, parent) {
  if (obj instanceof _index.ValueType) {
    return obj.clone();
  }

  if (obj instanceof _globalExports.legacyCC.Asset) {
    // 所有资源直接引用，不需要拷贝
    return obj;
  }

  let clone;

  if (ArrayBuffer.isView(obj)) {
    const len = obj.length;
    clone = new obj.constructor(len); // @ts-expect-error

    obj._iN$t = clone;
    objsToClearTmpVar.push(obj);

    for (let i = 0; i < len; ++i) {
      clone[i] = obj[i];
    }

    return clone;
  }

  if (Array.isArray(obj)) {
    const len = obj.length;
    clone = new Array(len); // @ts-expect-error

    obj._iN$t = clone;
    objsToClearTmpVar.push(obj);

    for (let i = 0; i < len; ++i) {
      const value = obj[i];

      if (typeof value === 'object' && value) {
        clone[i] = value._iN$t || instantiateObj(value, parent);
      } else {
        clone[i] = value;
      }
    }

    return clone;
  } else if (obj._objFlags & Destroyed) {
    // the same as cc.isValid(obj)
    return null;
  }

  const ctor = obj.constructor;

  if (_globalExports.legacyCC.Class._isCCClass(ctor)) {
    if (parent) {
      if (parent instanceof _globalExports.legacyCC.Component) {
        if (obj instanceof _globalExports.legacyCC._BaseNode || obj instanceof _globalExports.legacyCC.Component) {
          return obj;
        }
      } else if (parent instanceof _globalExports.legacyCC._BaseNode) {
        if (obj instanceof _globalExports.legacyCC._BaseNode) {
          if (!obj.isChildOf(parent)) {
            // should not clone other nodes if not descendant
            return obj;
          }
        } else if (obj instanceof _globalExports.legacyCC.Component) {
          if (!obj.node.isChildOf(parent)) {
            // should not clone other component if not descendant
            return obj;
          }
        }
      }
    }

    clone = new ctor();
  } else if (ctor === Object) {
    clone = {};
  } else if (!ctor) {
    clone = Object.create(null);
  } else {
    // unknown type
    return obj;
  }

  enumerateObject(obj, clone, parent);
  return clone;
}

instantiate._clone = doInstantiate;
_globalExports.legacyCC.instantiate = instantiate;