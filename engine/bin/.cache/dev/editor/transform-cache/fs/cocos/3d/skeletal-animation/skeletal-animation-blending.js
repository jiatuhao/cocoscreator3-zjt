"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBlendStateWriter = createBlendStateWriter;
exports.BlendStateBuffer = void 0;

var _index = require("../../core/math/index.js");

var _asserts = require("../../core/data/utils/asserts.js");

/*
 Copyright (c) 2020 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

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
 * @hidden
 */
class BlendStateBuffer {
  constructor() {
    this._nodeBlendStates = new Map();
    this._states = new Set();
  }

  ref(node, property) {
    let nodeBlendState = this._nodeBlendStates.get(node);

    if (!nodeBlendState) {
      nodeBlendState = {
        dirty: false,
        properties: {}
      };

      this._nodeBlendStates.set(node, nodeBlendState);
    }

    let propertyBlendState = nodeBlendState.properties[property];

    if (!propertyBlendState) {
      propertyBlendState = nodeBlendState.properties[property] = new PropertyBlendState(nodeBlendState, isVec3Property(property) ? new _index.Vec3() : new _index.Quat());
    }

    ++propertyBlendState.refCount;
    return propertyBlendState;
  }

  deRef(node, property) {
    const nodeBlendState = this._nodeBlendStates.get(node);

    if (!nodeBlendState) {
      return;
    }

    const propertyBlendState = nodeBlendState.properties[property];

    if (!propertyBlendState) {
      return;
    }

    --propertyBlendState.refCount;

    if (propertyBlendState.refCount > 0) {
      return;
    }

    delete nodeBlendState.properties[property];

    if (isEmptyNodeBlendState(nodeBlendState)) {
      this._nodeBlendStates.delete(node);
    }
  }

  apply() {
    this._nodeBlendStates.forEach((nodeBlendState, node) => {
      if (!nodeBlendState.dirty) {
        return;
      }

      nodeBlendState.dirty = false;
      const {
        position,
        scale,
        rotation,
        eulerAngles
      } = nodeBlendState.properties;
      let t;
      let s;
      let r;
      let anyChanged = false;

      if (position && position.weight !== 0) {
        position.weight = 0;
        t = position.value;
        anyChanged = true;
      }

      if (scale && scale.weight !== 0) {
        scale.weight = 0;
        s = scale.value;
        anyChanged = true;
      } // Note: rotation and eulerAngles can not co-exist.


      if (rotation && rotation.weight !== 0) {
        rotation.weight = 0;
        r = rotation.value;
        anyChanged = true;
      }

      if (eulerAngles && eulerAngles.weight !== 0) {
        eulerAngles.weight = 0;
        r = eulerAngles.value;
        anyChanged = true;
      }

      if (anyChanged) {
        node.setRTS(r, t, s);
      }
    });

    this._states.forEach(state => {
      state.onBlendFinished();
    });
  }

  bindState(state) {
    this._states.add(state);
  }

  unbindState(state) {
    this._states.delete(state);
  }

}

exports.BlendStateBuffer = BlendStateBuffer;

function createBlendStateWriter(blendState, node, property, host,
/**
 * True if this writer will write constant value each time.
 */
constants) {
  const blendFunction = isVec3Property(property) ? additive3D : additiveQuat;
  let propertyBlendState = blendState.ref(node, property);
  let isConstCacheValid = false;
  let lastWeight = -1;
  return {
    destroy() {
      (0, _asserts.assertIsNonNullable)(propertyBlendState);

      if (propertyBlendState) {
        blendState.deRef(node, property);
        propertyBlendState = null;
      }
    },

    forTarget: () => ({
      /**
           * Gets the node's actual property for now.
           */
      get: () => node[property],
      set: value => {
        if (!propertyBlendState || !host.enabled) {
          return;
        }

        const weight = host.weight;

        if (constants) {
          if (weight !== 1 || weight !== lastWeight) {
            // If there are multi writer for this property at this time,
            // or if the weight has been changed since last write,
            // we should invalidate the cache.
            isConstCacheValid = false;
          } else if (isConstCacheValid) {
            // Otherwise, we may keep to use the cache.
            // i.e we leave the weight to 0 to prevent the property from modifying.
            return;
          }
        }

        blendFunction(value, weight, propertyBlendState);
        propertyBlendState.weight += weight;
        propertyBlendState.markAsDirty();
        isConstCacheValid = true;
        lastWeight = weight;
      }
    })
  };
}

function isQuatProperty(property) {
  return property === 'rotation';
}

function isVec3Property(property) {
  return !isQuatProperty(property);
}

class PropertyBlendState {
  /**
   * How many writer reference this property.
   */
  constructor(node, value) {
    this.weight = 0;
    this.value = void 0;
    this.refCount = 0;
    this._node = void 0;
    this._node = node;
    this.value = value;
  }

  markAsDirty() {
    this._node.dirty = true;
  }

}

function isEmptyNodeBlendState(nodeBlendState) {
  // Which is equal to `Object.keys(nodeBlendState.properties).length === 0`.
  return !nodeBlendState.properties.position && !nodeBlendState.properties.rotation && !nodeBlendState.properties.eulerAngles && !nodeBlendState.properties.scale;
}
/**
 * If propertyBlendState.weight equals to zero, the propertyBlendState.value is dirty.
 * You shall handle this situation correctly.
 */


function additive3D(value, weight, propertyBlendState) {
  if (propertyBlendState.weight === 0) {
    _index.Vec3.zero(propertyBlendState.value);
  }

  if (weight === 0) {
    return propertyBlendState.value;
  } else if (weight === 1) {
    return _index.Vec3.copy(propertyBlendState.value, value);
  }

  return _index.Vec3.scaleAndAdd(propertyBlendState.value, propertyBlendState.value, value, weight);
}

function additiveQuat(value, weight, propertyBlendState) {
  if (propertyBlendState.weight === 0) {
    _index.Quat.identity(propertyBlendState.value);
  }

  if (weight === 0) {
    return propertyBlendState.value;
  } else if (weight === 1) {
    return _index.Quat.copy(propertyBlendState.value, value);
  }

  const t = weight / (propertyBlendState.weight + weight);
  return _index.Quat.slerp(propertyBlendState.value, propertyBlendState.value, value, t);
}