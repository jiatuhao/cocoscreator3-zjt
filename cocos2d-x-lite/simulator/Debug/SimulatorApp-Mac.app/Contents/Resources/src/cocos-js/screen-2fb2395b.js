System.register(['./coordinates-converts-utils-66b3c6fc.js', './view-fe42d2a1.js', './event-enum-a28dcb7d.js'], function (exports) {
    'use strict';
    var removeProperty, replaceProperty, _inheritsLoose, logID, warnID, legacyCC, EventTarget, View, inputManager, SystemEventType, EventListener, eventManager;
    return {
        setters: [function (module) {
            removeProperty = module.df;
            replaceProperty = module.de;
            _inheritsLoose = module.dR;
            logID = module.c;
            warnID = module.d;
            legacyCC = module.l;
            EventTarget = module.dz;
        }, function (module) {
            View = module.V;
            inputManager = module.i;
        }, function (module) {
            SystemEventType = module.S;
            EventListener = module.d;
            eventManager = module.e;
        }],
        execute: function () {

            removeProperty(View.prototype, 'View.prototype', [{
              name: 'isAntiAliasEnabled',
              suggest: 'The API of Texture2d have been largely modified, no alternative'
            }, {
              name: 'enableAntiAlias',
              suggest: 'The API of Texture2d have been largely modified, no alternative'
            }]);

            replaceProperty(SystemEventType, 'Node.EventType', [{
              name: 'POSITION_PART',
              newName: 'TRANSFORM_CHANGED'
            }, {
              name: 'ROTATION_PART',
              newName: 'TRANSFORM_CHANGED'
            }, {
              name: 'SCALE_PART',
              newName: 'TRANSFORM_CHANGED'
            }]);

            var keyboardListener = null;
            var accelerationListener = null;
            var touchListener = null;
            var mouseListener = null;
            var SystemEvent = exports('S', function (_EventTarget) {
              _inheritsLoose(SystemEvent, _EventTarget);

              function SystemEvent() {
                return _EventTarget.call(this) || this;
              }

              var _proto = SystemEvent.prototype;

              _proto.setAccelerometerEnabled = function setAccelerometerEnabled(isEnabled) {

                if (isEnabled && window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
                  DeviceMotionEvent.requestPermission().then(function (response) {
                    logID(3520, response);
                    inputManager.setAccelerometerEnabled(response === 'granted');
                  })["catch"](function (error) {
                    warnID(3521, error.message);
                    inputManager.setAccelerometerEnabled(false);
                  });
                } else {
                  inputManager.setAccelerometerEnabled(isEnabled);
                }
              };

              _proto.setAccelerometerInterval = function setAccelerometerInterval(interval) {

                inputManager.setAccelerometerInterval(interval);
              };

              _proto.on = function on(type, callback, target, once) {

                _EventTarget.prototype.on.call(this, type, callback, target, once);

                if (type === SystemEventType.KEY_DOWN || type === SystemEventType.KEY_UP) {
                  if (!keyboardListener) {
                    keyboardListener = EventListener.create({
                      event: EventListener.KEYBOARD,
                      onKeyPressed: function onKeyPressed(keyCode, event) {
                        event.type = SystemEventType.KEY_DOWN;
                        systemEvent.emit(event.type, event);
                      },
                      onKeyReleased: function onKeyReleased(keyCode, event) {
                        event.type = SystemEventType.KEY_UP;
                        systemEvent.emit(event.type, event);
                      }
                    });
                    eventManager.addListener(keyboardListener, 256);
                  }
                }

                if (type === SystemEventType.DEVICEMOTION) {
                  if (!accelerationListener) {
                    accelerationListener = EventListener.create({
                      event: EventListener.ACCELERATION,
                      callback: function callback(acc, event) {
                        event.type = SystemEventType.DEVICEMOTION;
                        legacyCC.systemEvent.emit(event.type, event);
                      }
                    });
                    eventManager.addListener(accelerationListener, 256);
                  }
                }

                if (type === SystemEventType.TOUCH_START || type === SystemEventType.TOUCH_MOVE || type === SystemEventType.TOUCH_END || type === SystemEventType.TOUCH_CANCEL) {
                  if (!touchListener) {
                    touchListener = EventListener.create({
                      event: EventListener.TOUCH_ONE_BY_ONE,
                      onTouchBegan: function onTouchBegan(touch, event) {
                        event.type = SystemEventType.TOUCH_START;
                        legacyCC.systemEvent.emit(event.type, touch, event);
                        return true;
                      },
                      onTouchMoved: function onTouchMoved(touch, event) {
                        event.type = SystemEventType.TOUCH_MOVE;
                        legacyCC.systemEvent.emit(event.type, touch, event);
                      },
                      onTouchEnded: function onTouchEnded(touch, event) {
                        event.type = SystemEventType.TOUCH_END;
                        legacyCC.systemEvent.emit(event.type, touch, event);
                      },
                      onTouchCancelled: function onTouchCancelled(touch, event) {
                        event.type = SystemEventType.TOUCH_CANCEL;
                        legacyCC.systemEvent.emit(event.type, touch, event);
                      }
                    });
                    eventManager.addListener(touchListener, 256);
                  }
                }

                if (type === SystemEventType.MOUSE_DOWN || type === SystemEventType.MOUSE_MOVE || type === SystemEventType.MOUSE_UP || type === SystemEventType.MOUSE_WHEEL) {
                  if (!mouseListener) {
                    mouseListener = EventListener.create({
                      event: EventListener.MOUSE,
                      onMouseDown: function onMouseDown(event) {
                        event.type = SystemEventType.MOUSE_DOWN;
                        legacyCC.systemEvent.emit(event.type, event);
                      },
                      onMouseMove: function onMouseMove(event) {
                        event.type = SystemEventType.MOUSE_MOVE;
                        legacyCC.systemEvent.emit(event.type, event);
                      },
                      onMouseUp: function onMouseUp(event) {
                        event.type = SystemEventType.MOUSE_UP;
                        legacyCC.systemEvent.emit(event.type, event);
                      },
                      onMouseScroll: function onMouseScroll(event) {
                        event.type = SystemEventType.MOUSE_WHEEL;
                        legacyCC.systemEvent.emit(event.type, event);
                      }
                    });
                    eventManager.addListener(mouseListener, 256);
                  }
                }

                return callback;
              };

              _proto.off = function off(type, callback, target) {

                _EventTarget.prototype.off.call(this, type, callback, target);

                if (keyboardListener && (type === SystemEventType.KEY_DOWN || type === SystemEventType.KEY_UP)) {
                  var hasKeyDownEventListener = this.hasEventListener(SystemEventType.KEY_DOWN);
                  var hasKeyUpEventListener = this.hasEventListener(SystemEventType.KEY_UP);

                  if (!hasKeyDownEventListener && !hasKeyUpEventListener) {
                    eventManager.removeListener(keyboardListener);
                    keyboardListener = null;
                  }
                }

                if (accelerationListener && type === SystemEventType.DEVICEMOTION) {
                  eventManager.removeListener(accelerationListener);
                  accelerationListener = null;
                }

                if (touchListener && (type === SystemEventType.TOUCH_START || type === SystemEventType.TOUCH_MOVE || type === SystemEventType.TOUCH_END || type === SystemEventType.TOUCH_CANCEL)) {
                  var hasTouchStart = this.hasEventListener(SystemEventType.TOUCH_START);
                  var hasTouchMove = this.hasEventListener(SystemEventType.TOUCH_MOVE);
                  var hasTouchEnd = this.hasEventListener(SystemEventType.TOUCH_END);
                  var hasTouchCancel = this.hasEventListener(SystemEventType.TOUCH_CANCEL);

                  if (!hasTouchStart && !hasTouchMove && !hasTouchEnd && !hasTouchCancel) {
                    eventManager.removeListener(touchListener);
                    touchListener = null;
                  }
                }

                if (mouseListener && (type === SystemEventType.MOUSE_DOWN || type === SystemEventType.MOUSE_MOVE || type === SystemEventType.MOUSE_UP || type === SystemEventType.MOUSE_WHEEL)) {
                  var hasMouseDown = this.hasEventListener(SystemEventType.MOUSE_DOWN);
                  var hasMouseMove = this.hasEventListener(SystemEventType.MOUSE_MOVE);
                  var hasMouseUp = this.hasEventListener(SystemEventType.MOUSE_UP);
                  var hasMouseWheel = this.hasEventListener(SystemEventType.MOUSE_WHEEL);

                  if (!hasMouseDown && !hasMouseMove && !hasMouseUp && !hasMouseWheel) {
                    eventManager.removeListener(mouseListener);
                    mouseListener = null;
                  }
                }
              };

              return SystemEvent;
            }(EventTarget));
            SystemEvent.EventType = SystemEventType;
            legacyCC.SystemEvent = SystemEvent;
            var systemEvent = exports('a', new SystemEvent());
            legacyCC.systemEvent = systemEvent;

            var screen = exports('s', {
              _supportsFullScreen: false,
              _onfullscreenchange: null,
              _onfullscreenerror: null,
              _preOnFullScreenError: null,
              _preOnTouch: null,
              _touchEvent: '',
              _fn: null,
              _fnMap: [['requestFullscreen', 'exitFullscreen', 'fullscreenchange', 'fullscreenEnabled', 'fullscreenElement'], ['requestFullScreen', 'exitFullScreen', 'fullScreenchange', 'fullScreenEnabled', 'fullScreenElement'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitIsFullScreen', 'webkitCurrentFullScreenElement'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozFullScreen', 'mozFullScreenElement'], ['msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'msFullscreenEnabled', 'msFullscreenElement']],
              init: function init() {
                this._fn = {};
                var i;
                var l;
                var val;
                var map = this._fnMap;
                var valL;

                for (i = 0, l = map.length; i < l; i++) {
                  val = map[i];

                  if (val && typeof document[val[1]] !== 'undefined') {
                    for (i = 0, valL = val.length; i < valL; i++) {
                      this._fn[map[0][i]] = val[i];
                    }

                    break;
                  }
                }

                this._supportsFullScreen = this._fn.requestFullscreen !== undefined;
                this._touchEvent = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
              },

              get supportsFullScreen() {
                return this._supportsFullScreen;
              },

              fullScreen: function fullScreen() {
                if (!this._supportsFullScreen) {
                  return false;
                } else if (document[this._fn.fullscreenElement] === undefined || document[this._fn.fullscreenElement] === null) {
                  return false;
                } else {
                  return true;
                }
              },
              requestFullScreen: function requestFullScreen(element, onFullScreenChange, onFullScreenError) {
                if (!this._supportsFullScreen) {
                  return;
                }

                element = element || document.documentElement;

                if (onFullScreenChange) {
                  var eventName = this._fn.fullscreenchange;

                  if (this._onfullscreenchange) {
                    document.removeEventListener(eventName, this._onfullscreenchange);
                  }

                  this._onfullscreenchange = onFullScreenChange;
                  document.addEventListener(eventName, onFullScreenChange, false);
                }

                if (onFullScreenError) {
                  var _eventName = this._fn.fullscreenerror;

                  if (this._onfullscreenerror) {
                    document.removeEventListener(_eventName, this._onfullscreenerror);
                  }

                  this._onfullscreenerror = onFullScreenError;
                  document.addEventListener(_eventName, onFullScreenError, {
                    once: true
                  });
                }

                var requestPromise = element[this._fn.requestFullscreen]();

                if (window.Promise && requestPromise instanceof Promise) {
                  requestPromise["catch"](function (err) {});
                }

                return requestPromise;
              },
              exitFullScreen: function exitFullScreen() {
                var requestPromise;

                if (this.fullScreen()) {
                  requestPromise = document[this._fn.exitFullscreen]();
                  requestPromise["catch"](function (err) {});
                }

                return requestPromise;
              },
              autoFullScreen: function autoFullScreen(element, onFullScreenChange) {
                element = element || document.body;

                this._ensureFullScreen(element, onFullScreenChange);

                this.requestFullScreen(element, onFullScreenChange);
              },
              disableAutoFullScreen: function disableAutoFullScreen(element) {
                if (this._preOnTouch) {
                  var touchTarget = legacyCC.game.canvas || element;
                  var touchEventName = this._touchEvent;
                  touchTarget.removeEventListener(touchEventName, this._preOnTouch);
                  this._preOnTouch = null;
                }
              },
              _ensureFullScreen: function _ensureFullScreen(element, onFullScreenChange) {
                var _this = this;

                var touchTarget = legacyCC.game.canvas || element;
                var fullScreenErrorEventName = this._fn.fullscreenerror;
                var touchEventName = this._touchEvent;

                var onFullScreenError = function onFullScreenError() {
                  _this._preOnFullScreenError = null;

                  var onTouch = function onTouch() {
                    _this._preOnTouch = null;

                    _this.requestFullScreen(element, onFullScreenChange);
                  };

                  if (_this._preOnTouch) {
                    touchTarget.removeEventListener(touchEventName, _this._preOnTouch);
                  }

                  _this._preOnTouch = onTouch;
                  touchTarget.addEventListener(touchEventName, _this._preOnTouch, {
                    once: true
                  });
                };

                if (this._preOnFullScreenError) {
                  element.removeEventListener(fullScreenErrorEventName, this._preOnFullScreenError);
                }

                this._preOnFullScreenError = onFullScreenError;
                element.addEventListener(fullScreenErrorEventName, onFullScreenError, {
                  once: true
                });
              }
            });
            screen.init();
            legacyCC.screen = screen;

        }
    };
});
