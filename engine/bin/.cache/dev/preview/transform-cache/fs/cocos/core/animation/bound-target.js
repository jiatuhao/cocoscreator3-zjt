System.register("q-bundled:///fs/cocos/core/animation/bound-target.js", ["../math/index.js", "./target-path.js", "../platform/debug.js"], function (_export, _context) {
  "use strict";

  var Color, Size, Vec2, Vec3, Vec4, isPropertyPath, evaluatePath, error, getBuiltinCopy;

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
  function createBoundTarget(target, modifiers, valueAdapter) {
    var ap;
    var lastPath = modifiers[modifiers.length - 1];

    if (modifiers.length !== 0 && isPropertyPath(lastPath) && !valueAdapter) {
      var resultTarget = evaluatePath.apply(void 0, [target].concat(modifiers.slice(0, modifiers.length - 1)));

      if (resultTarget === null) {
        return null;
      }

      ap = {
        isProxy: false,
        object: resultTarget,
        property: lastPath
      };
    } else if (!valueAdapter) {
      error("Empty animation curve.");
      return null;
    } else {
      var _resultTarget = evaluatePath.apply(void 0, [target].concat(modifiers));

      if (_resultTarget === null) {
        return null;
      }

      ap = {
        isProxy: true,
        proxy: valueAdapter.forTarget(_resultTarget)
      };
    }

    return {
      setValue: function setValue(value) {
        if (ap.isProxy) {
          ap.proxy.set(value);
        } else {
          ap.object[ap.property] = value;
        }
      },
      getValue: function getValue() {
        if (ap.isProxy) {
          if (!ap.proxy.get) {
            error("Target doesn't provide a get method.");
            return null;
          } else {
            return ap.proxy.get();
          }
        } else {
          return ap.object[ap.property];
        }
      }
    };
  }

  function createBufferedTarget(target, modifiers, valueAdapter) {
    var boundTarget = createBoundTarget(target, modifiers, valueAdapter);

    if (boundTarget === null) {
      return null;
    }

    var value = boundTarget.getValue();
    var copyable = getBuiltinCopy(value);

    if (!copyable) {
      error("Value is not copyable!");
      return null;
    }

    var buffer = copyable.createBuffer();
    var copy = copyable.copy;
    return Object.assign(boundTarget, {
      peek: function peek() {
        return buffer;
      },
      pull: function pull() {
        var value = boundTarget.getValue();
        copy(buffer, value);
      },
      push: function push() {
        boundTarget.setValue(buffer);
      }
    });
  }

  function SizeCopy(out, source) {
    return out.set(source);
  }

  _export({
    createBoundTarget: createBoundTarget,
    createBufferedTarget: createBufferedTarget
  });

  return {
    setters: [function (_mathIndexJs) {
      Color = _mathIndexJs.Color;
      Size = _mathIndexJs.Size;
      Vec2 = _mathIndexJs.Vec2;
      Vec3 = _mathIndexJs.Vec3;
      Vec4 = _mathIndexJs.Vec4;
    }, function (_targetPathJs) {
      isPropertyPath = _targetPathJs.isPropertyPath;
      evaluatePath = _targetPathJs.evaluatePath;
    }, function (_platformDebugJs) {
      error = _platformDebugJs.error;
    }],
    execute: function () {
      getBuiltinCopy = function () {
        var map = new Map();
        map.set(Vec2, {
          createBuffer: function createBuffer() {
            return new Vec2();
          },
          copy: Vec2.copy
        });
        map.set(Vec3, {
          createBuffer: function createBuffer() {
            return new Vec3();
          },
          copy: Vec3.copy
        });
        map.set(Vec4, {
          createBuffer: function createBuffer() {
            return new Vec4();
          },
          copy: Vec4.copy
        });
        map.set(Color, {
          createBuffer: function createBuffer() {
            return new Color();
          },
          copy: Color.copy
        });
        map.set(Size, {
          createBuffer: function createBuffer() {
            return new Size();
          },
          copy: SizeCopy
        });
        return function (value) {
          return map.get(value === null || value === void 0 ? void 0 : value.constructor);
        };
      }();
    }
  };
});