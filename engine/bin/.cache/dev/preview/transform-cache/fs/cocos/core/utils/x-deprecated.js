System.register("q-bundled:///fs/cocos/core/utils/x-deprecated.js", ["../platform/debug.js"], function (_export, _context) {
  "use strict";

  var error, warn, defaultLogTimes, replaceProperty, removeProperty, markAsWarning, replacePropertyLog, markAsWarningLog, removePropertyLog, messageID, messageMap;

  function setDefaultLogTimes(times) {
    if (times > 0) {
      defaultLogTimes = times;
    }
  }

  _export({
    setDefaultLogTimes: setDefaultLogTimes,
    replaceProperty: void 0,
    removeProperty: void 0,
    markAsWarning: void 0
  });

  return {
    setters: [function (_platformDebugJs) {
      error = _platformDebugJs.error;
      warn = _platformDebugJs.warn;
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
       * Note, naming this file with prefix `x-` exclude it from regular deprecated modules.
       */
      defaultLogTimes = 10;
      messageID = 0;
      messageMap = new Map();

      replacePropertyLog = function replacePropertyLog(n, dp, n2, newp, f, id) {
        var item = messageMap.get(id);

        if (item && item.logTimes > item.count) {
          f('\'%s\' is deprecated, please use \'%s\' instead.', n + "." + dp, n2 + "." + newp);
          item.count++;
        }
      };

      _export("replaceProperty", replaceProperty = function replaceProperty(owner, ownerName, properties) {
        if (owner == null) return;
        properties.forEach(function (item) {
          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });
          var target = item.target != null ? item.target : owner;
          var newName = item.newName != null ? item.newName : item.name;
          var targetName = item.targetName != null ? item.targetName : ownerName;
          var sameTarget = target == owner;

          if (item.customFunction != null) {
            owner[item.name] = function () {
              var _ref;

              replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
              return (_ref = item.customFunction).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments)));
            };
          } else if (item.customSetter != null || item.customGetter != null) {
            var hasSetter = item.customSetter != null;
            var hasGetter = item.customGetter != null;

            if (hasSetter && hasGetter) {
              Object.defineProperty(owner, item.name, {
                get: function get() {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  return item.customGetter.call(this);
                },
                set: function set(v) {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  item.customSetter.call(this, v);
                },
                enumerable: false
              });
            } else if (hasSetter) {
              Object.defineProperty(owner, item.name, {
                set: function set(v) {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  item.customSetter.call(this, v);
                },
                enumerable: false
              });
            } else if (hasGetter) {
              Object.defineProperty(owner, item.name, {
                get: function get() {
                  replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                  return item.customGetter.call(this);
                },
                enumerable: false
              });
            }
          } else {
            Object.defineProperty(owner, item.name, {
              get: function get() {
                replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                return sameTarget ? this[newName] : target[newName];
              },
              set: function set(v) {
                replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);

                if (sameTarget) {
                  this[newName] = v;
                } else {
                  target[newName] = v;
                }
              },
              enumerable: false
            });
          }
        });
      });

      removePropertyLog = function removePropertyLog(n, dp, f, id, s) {
        var item = messageMap.get(id);
        var ss = s === undefined ? '' : "(" + s + ")";

        if (item && item.logTimes > item.count) {
          f("'%s' has been removed. " + ss, n + "." + dp);
          item.count++;
        }
      };

      _export("removeProperty", removeProperty = function removeProperty(owner, ownerName, properties) {
        if (owner == null) return;
        properties.forEach(function (item) {
          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });
          Object.defineProperty(owner, item.name, {
            get: function get() {
              return removePropertyLog(ownerName, item.name, error, id, item.suggest);
            },
            set: function set() {
              removePropertyLog(ownerName, item.name, error, id, item.suggest);
            },
            enumerable: false
          });
        });
      });

      markAsWarningLog = function markAsWarningLog(n, dp, f, id, s) {
        var item = messageMap.get(id);
        var ss = s === undefined ? '' : "(" + s + ")";

        if (item && item.logTimes > item.count) {
          f("'%s' is deprecated. " + ss, n + "." + dp);
          item.count++;
        }
      };

      _export("markAsWarning", markAsWarning = function markAsWarning(owner, ownerName, properties) {
        if (owner == null) return;

        var _defaultGetSet = function _defaultGetSet(d, n, dp, f, id, s) {
          if (d.get) {
            var oldGet = d.get();

            d.get = function () {
              markAsWarningLog(n, dp, f, id, s);
              return oldGet.call(this);
            };
          }

          if (d.set) {
            var oldSet = Object.create(d.set);

            d.set = function (v) {
              markAsWarningLog(n, dp, f, id, s);
              oldSet.call(this, v);
            };
          }
        };

        properties.forEach(function (item) {
          var deprecatedProp = item.name;
          var descriptor = Object.getOwnPropertyDescriptor(owner, deprecatedProp);

          if (!descriptor) {
            return;
          }

          var id = messageID++;
          messageMap.set(id, {
            id: id,
            count: 0,
            logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
          });

          if (descriptor.value != null) {
            if (typeof descriptor.value === 'function') {
              var oldValue = descriptor.value;

              owner[deprecatedProp] = function () {
                markAsWarningLog(ownerName, deprecatedProp, warn, id, item.suggest);
                return oldValue.call.apply(oldValue, [this].concat(Array.prototype.slice.call(arguments)));
              };
            } else {
              _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, item.suggest);
            }
          } else {
            _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, item.suggest);
          }

          Object.defineProperty(owner, deprecatedProp, {
            enumerable: false
          });
        });
      }); // } else {
      //     // for compatible
      //     replaceProperty = () => { };
      //     removeProperty = () => { };
      //     markAsWarning = () => { };
      //     replacePropertyLog = () => { };
      //     removePropertyLog = () => { };
      //     markAsWarningLog = () => { };
      // }

    }
  };
});