System.register("q-bundled:///fs/cocos/3d/skeletal-animation/skeletal-animation-blending.js", ["../../core/math/index.js", "../../core/data/utils/asserts.js"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, assertIsNonNullable, BlendStateBuffer, PropertyBlendState;

  function createBlendStateWriter(blendState, node, property, host,
  /**
   * True if this writer will write constant value each time.
   */
  constants) {
    var blendFunction = isVec3Property(property) ? additive3D : additiveQuat;
    var propertyBlendState = blendState.ref(node, property);
    var isConstCacheValid = false;
    var lastWeight = -1;
    return {
      destroy: function destroy() {
        assertIsNonNullable(propertyBlendState);

        if (propertyBlendState) {
          blendState.deRef(node, property);
          propertyBlendState = null;
        }
      },
      forTarget: function forTarget() {
        return {
          /**
               * Gets the node's actual property for now.
               */
          get: function get() {
            return node[property];
          },
          set: function set(value) {
            if (!propertyBlendState || !host.enabled) {
              return;
            }

            var weight = host.weight;

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
        };
      }
    };
  }

  function isQuatProperty(property) {
    return property === 'rotation';
  }

  function isVec3Property(property) {
    return !isQuatProperty(property);
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
      Vec3.zero(propertyBlendState.value);
    }

    if (weight === 0) {
      return propertyBlendState.value;
    } else if (weight === 1) {
      return Vec3.copy(propertyBlendState.value, value);
    }

    return Vec3.scaleAndAdd(propertyBlendState.value, propertyBlendState.value, value, weight);
  }

  function additiveQuat(value, weight, propertyBlendState) {
    if (propertyBlendState.weight === 0) {
      Quat.identity(propertyBlendState.value);
    }

    if (weight === 0) {
      return propertyBlendState.value;
    } else if (weight === 1) {
      return Quat.copy(propertyBlendState.value, value);
    }

    var t = weight / (propertyBlendState.weight + weight);
    return Quat.slerp(propertyBlendState.value, propertyBlendState.value, value, t);
  }

  _export("createBlendStateWriter", createBlendStateWriter);

  return {
    setters: [function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
      Quat = _coreMathIndexJs.Quat;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsNonNullable = _coreDataUtilsAssertsJs.assertIsNonNullable;
    }],
    execute: function () {
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
      _export("BlendStateBuffer", BlendStateBuffer = /*#__PURE__*/function () {
        function BlendStateBuffer() {
          this._nodeBlendStates = new Map();
          this._states = new Set();
        }

        var _proto = BlendStateBuffer.prototype;

        _proto.ref = function ref(node, property) {
          var nodeBlendState = this._nodeBlendStates.get(node);

          if (!nodeBlendState) {
            nodeBlendState = {
              dirty: false,
              properties: {}
            };

            this._nodeBlendStates.set(node, nodeBlendState);
          }

          var propertyBlendState = nodeBlendState.properties[property];

          if (!propertyBlendState) {
            propertyBlendState = nodeBlendState.properties[property] = new PropertyBlendState(nodeBlendState, isVec3Property(property) ? new Vec3() : new Quat());
          }

          ++propertyBlendState.refCount;
          return propertyBlendState;
        };

        _proto.deRef = function deRef(node, property) {
          var nodeBlendState = this._nodeBlendStates.get(node);

          if (!nodeBlendState) {
            return;
          }

          var propertyBlendState = nodeBlendState.properties[property];

          if (!propertyBlendState) {
            return;
          }

          --propertyBlendState.refCount;

          if (propertyBlendState.refCount > 0) {
            return;
          }

          delete nodeBlendState.properties[property];

          if (isEmptyNodeBlendState(nodeBlendState)) {
            this._nodeBlendStates["delete"](node);
          }
        };

        _proto.apply = function apply() {
          this._nodeBlendStates.forEach(function (nodeBlendState, node) {
            if (!nodeBlendState.dirty) {
              return;
            }

            nodeBlendState.dirty = false;
            var _nodeBlendState$prope = nodeBlendState.properties,
                position = _nodeBlendState$prope.position,
                scale = _nodeBlendState$prope.scale,
                rotation = _nodeBlendState$prope.rotation,
                eulerAngles = _nodeBlendState$prope.eulerAngles;
            var t;
            var s;
            var r;
            var anyChanged = false;

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

          this._states.forEach(function (state) {
            state.onBlendFinished();
          });
        };

        _proto.bindState = function bindState(state) {
          this._states.add(state);
        };

        _proto.unbindState = function unbindState(state) {
          this._states["delete"](state);
        };

        return BlendStateBuffer;
      }());

      PropertyBlendState = /*#__PURE__*/function () {
        /**
         * How many writer reference this property.
         */
        function PropertyBlendState(node, value) {
          this.weight = 0;
          this.value = void 0;
          this.refCount = 0;
          this._node = void 0;
          this._node = node;
          this.value = value;
        }

        var _proto2 = PropertyBlendState.prototype;

        _proto2.markAsDirty = function markAsDirty() {
          this._node.dirty = true;
        };

        return PropertyBlendState;
      }();
    }
  };
});