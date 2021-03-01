System.register(['./coordinates-converts-utils-fa8f5fc5.js'], function (exports) {
    'use strict';
    var Vec2, _inheritsLoose, legacyCC, Event, _createClass, logID, assertID, warnID, errorID, macro, ccenum;
    return {
        setters: [function (module) {
            Vec2 = module.cv;
            _inheritsLoose = module.dR;
            legacyCC = module.l;
            Event = module.dy;
            _createClass = module.dS;
            logID = module.c;
            assertID = module.g;
            warnID = module.d;
            errorID = module.f;
            macro = module.dL;
            ccenum = module.d7;
        }],
        execute: function () {

            exports('S', void 0);

            var _vec2 = new Vec2();

            var EventMouse = exports('E', function (_Event) {
              _inheritsLoose(EventMouse, _Event);

              function EventMouse(eventType, bubbles, prevLoc) {
                var _this;

                _this = _Event.call(this, Event.MOUSE, bubbles) || this;
                _this.movementX = 0;
                _this.movementY = 0;
                _this.eventType = void 0;
                _this._button = EventMouse.BUTTON_MISSING;
                _this._x = 0;
                _this._y = 0;
                _this._prevX = 0;
                _this._prevY = 0;
                _this._scrollX = 0;
                _this._scrollY = 0;
                _this.eventType = eventType;

                if (prevLoc) {
                  _this._prevX = prevLoc.x;
                  _this._prevY = prevLoc.y;
                }

                return _this;
              }

              var _proto = EventMouse.prototype;

              _proto.setScrollData = function setScrollData(scrollX, scrollY) {
                this._scrollX = scrollX;
                this._scrollY = scrollY;
              };

              _proto.getScrollX = function getScrollX() {
                return this._scrollX;
              };

              _proto.getScrollY = function getScrollY() {
                return this._scrollY;
              };

              _proto.setLocation = function setLocation(x, y) {
                this._x = x;
                this._y = y;
              };

              _proto.getLocation = function getLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x, this._y);
                return out;
              };

              _proto.getLocationInView = function getLocationInView(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x, legacyCC.view._designResolutionSize.height - this._y);
                return out;
              };

              _proto.getUILocation = function getUILocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x, this._y);

                legacyCC.view._convertPointWithScale(out);

                return out;
              };

              _proto.getPreviousLocation = function getPreviousLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._prevX, this._prevY);
                return out;
              };

              _proto.getUIPreviousLocation = function getUIPreviousLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._prevX, this._prevY);

                legacyCC.view._convertPointWithScale(out);

                return out;
              };

              _proto.getDelta = function getDelta(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x - this._prevX, this._y - this._prevY);
                return out;
              };

              _proto.getDeltaX = function getDeltaX() {
                return this._x - this._prevX;
              };

              _proto.getDeltaY = function getDeltaY() {
                return this._y - this._prevY;
              };

              _proto.getUIDelta = function getUIDelta(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, (this._x - this._prevX) / legacyCC.view.getScaleX(), (this._y - this._prevY) / legacyCC.view.getScaleY());
                return out;
              };

              _proto.getUIDeltaX = function getUIDeltaX() {
                return (this._x - this._prevX) / legacyCC.view.getScaleX();
              };

              _proto.getUIDeltaY = function getUIDeltaY() {
                return (this._y - this._prevY) / legacyCC.view.getScaleY();
              };

              _proto.setButton = function setButton(button) {
                this._button = button;
              };

              _proto.getButton = function getButton() {
                return this._button;
              };

              _proto.getLocationX = function getLocationX() {
                return this._x;
              };

              _proto.getLocationY = function getLocationY() {
                return this._y;
              };

              _proto.getUILocationX = function getUILocationX() {
                var viewport = legacyCC.view.getViewportRect();
                return (this._x - viewport.x) / legacyCC.view.getScaleX();
              };

              _proto.getUILocationY = function getUILocationY() {
                var viewport = legacyCC.view.getViewportRect();
                return (this._y - viewport.y) / legacyCC.view.getScaleY();
              };

              return EventMouse;
            }(Event));
            EventMouse.NONE = 0;
            EventMouse.DOWN = 1;
            EventMouse.UP = 2;
            EventMouse.MOVE = 3;
            EventMouse.SCROLL = 4;
            EventMouse.BUTTON_MISSING = -1;
            EventMouse.BUTTON_LEFT = 0;
            EventMouse.BUTTON_RIGHT = 2;
            EventMouse.BUTTON_MIDDLE = 1;
            EventMouse.BUTTON_4 = 3;
            EventMouse.BUTTON_5 = 4;
            EventMouse.BUTTON_6 = 5;
            EventMouse.BUTTON_7 = 6;
            EventMouse.BUTTON_8 = 7;
            var EventTouch = exports('a', function (_Event2) {
              _inheritsLoose(EventTouch, _Event2);

              function EventTouch(changedTouches, bubbles, eventCode, touches) {
                var _this2;

                _this2 = _Event2.call(this, Event.TOUCH, bubbles) || this;
                _this2.touch = null;
                _this2.simulate = false;
                _this2._eventCode = void 0;
                _this2._touches = void 0;
                _this2._allTouches = void 0;
                _this2._eventCode = eventCode || 0;
                _this2._touches = changedTouches || [];
                _this2._allTouches = touches || [];
                return _this2;
              }

              var _proto2 = EventTouch.prototype;

              _proto2.getEventCode = function getEventCode() {
                return this._eventCode;
              };

              _proto2.getTouches = function getTouches() {
                return this._touches;
              };

              _proto2.getAllTouches = function getAllTouches() {
                return this._allTouches;
              };

              _proto2.setLocation = function setLocation(x, y) {
                if (this.touch) {
                  this.touch.setTouchInfo(this.touch.getID(), x, y);
                }
              };

              _proto2.getLocation = function getLocation(out) {
                return this.touch ? this.touch.getLocation(out) : new Vec2();
              };

              _proto2.getUILocation = function getUILocation(out) {
                return this.touch ? this.touch.getUILocation(out) : new Vec2();
              };

              _proto2.getLocationInView = function getLocationInView(out) {
                return this.touch ? this.touch.getLocationInView(out) : new Vec2();
              };

              _proto2.getPreviousLocation = function getPreviousLocation(out) {
                return this.touch ? this.touch.getPreviousLocation(out) : new Vec2();
              };

              _proto2.getStartLocation = function getStartLocation(out) {
                return this.touch ? this.touch.getStartLocation(out) : new Vec2();
              };

              _proto2.getUIStartLocation = function getUIStartLocation(out) {
                return this.touch ? this.touch.getUIStartLocation(out) : new Vec2();
              };

              _proto2.getID = function getID() {
                return this.touch ? this.touch.getID() : null;
              };

              _proto2.getDelta = function getDelta(out) {
                return this.touch ? this.touch.getDelta(out) : new Vec2();
              };

              _proto2.getUIDelta = function getUIDelta(out) {
                return this.touch ? this.touch.getUIDelta(out) : new Vec2();
              };

              _proto2.getDeltaX = function getDeltaX() {
                return this.touch ? this.touch.getDelta(_vec2).x : 0;
              };

              _proto2.getDeltaY = function getDeltaY() {
                return this.touch ? this.touch.getDelta(_vec2).y : 0;
              };

              _proto2.getLocationX = function getLocationX() {
                return this.touch ? this.touch.getLocationX() : 0;
              };

              _proto2.getLocationY = function getLocationY() {
                return this.touch ? this.touch.getLocationY() : 0;
              };

              return EventTouch;
            }(Event));
            EventTouch.MAX_TOUCHES = 5;
            EventTouch.BEGAN = 0;
            EventTouch.MOVED = 1;
            EventTouch.ENDED = 2;
            EventTouch.CANCELLED = 3;
            var EventAcceleration = exports('b', function (_Event3) {
              _inheritsLoose(EventAcceleration, _Event3);

              function EventAcceleration(acc, bubbles) {
                var _this3;

                _this3 = _Event3.call(this, Event.ACCELERATION, bubbles) || this;
                _this3.acc = void 0;
                _this3.acc = acc;
                return _this3;
              }

              return EventAcceleration;
            }(Event));
            var EventKeyboard = exports('c', function (_Event4) {
              _inheritsLoose(EventKeyboard, _Event4);

              function EventKeyboard(keyCode, isPressed, bubbles) {
                var _this4;

                _this4 = _Event4.call(this, Event.KEYBOARD, bubbles) || this;
                _this4.keyCode = void 0;
                _this4.rawEvent = void 0;
                _this4.isPressed = void 0;

                if (typeof keyCode === 'number') {
                  _this4.keyCode = keyCode;
                } else {
                  _this4.keyCode = keyCode.keyCode;
                  _this4.rawEvent = keyCode;
                }

                _this4.isPressed = isPressed;
                return _this4;
              }

              return EventKeyboard;
            }(Event));
            Event.EventMouse = EventMouse;
            Event.EventTouch = EventTouch;
            Event.EventAcceleration = EventAcceleration;
            Event.EventKeyboard = EventKeyboard;

            var EventListener = exports('d', function () {
              EventListener.create = function create(argObj) {
                assertID(argObj && argObj.event, 1900);
                var listenerType = argObj.event;
                delete argObj.event;
                var listener = null;

                if (listenerType === legacyCC.EventListener.TOUCH_ONE_BY_ONE) {
                  listener = new TouchOneByOne();
                } else if (listenerType === legacyCC.EventListener.TOUCH_ALL_AT_ONCE) {
                  listener = new TouchAllAtOnce();
                } else if (listenerType === legacyCC.EventListener.MOUSE) {
                  listener = new Mouse();
                } else if (listenerType === legacyCC.EventListener.KEYBOARD) {
                  listener = new Keyboard();
                } else if (listenerType === legacyCC.EventListener.ACCELERATION) {
                  listener = new Acceleration(argObj.callback);
                  delete argObj.callback;
                }

                if (listener) {
                  for (var _i = 0, _Object$keys = Object.keys(argObj); _i < _Object$keys.length; _i++) {
                    var key = _Object$keys[_i];
                    listener[key] = argObj[key];
                  }
                }

                return listener;
              };

              _createClass(EventListener, [{
                key: "onEvent",
                get: function get() {
                  return this._onEvent;
                }
              }]);

              function EventListener(type, listenerID, callback) {
                this._cameraPriority = 0;
                this.owner = null;
                this.mask = null;
                this._previousIn = false;
                this._target = null;
                this._onEvent = void 0;
                this._type = void 0;
                this._listenerID = void 0;
                this._registered = false;
                this._fixedPriority = 0;
                this._node = null;
                this._paused = true;
                this._isEnabled = true;
                this._onEvent = callback;
                this._type = type || 0;
                this._listenerID = listenerID || '';
              }

              var _proto = EventListener.prototype;

              _proto._setPaused = function _setPaused(paused) {
                this._paused = paused;
              };

              _proto._isPaused = function _isPaused() {
                return this._paused;
              };

              _proto._setRegistered = function _setRegistered(registered) {
                this._registered = registered;
              };

              _proto._isRegistered = function _isRegistered() {
                return this._registered;
              };

              _proto._getType = function _getType() {
                return this._type;
              };

              _proto._getListenerID = function _getListenerID() {
                return this._listenerID;
              };

              _proto._setFixedPriority = function _setFixedPriority(fixedPriority) {
                this._fixedPriority = fixedPriority;
              };

              _proto._getFixedPriority = function _getFixedPriority() {
                return this._fixedPriority;
              };

              _proto._setSceneGraphPriority = function _setSceneGraphPriority(node) {
                this._target = node;
                this._node = node;
              };

              _proto._getSceneGraphPriority = function _getSceneGraphPriority() {
                return this._node;
              };

              _proto.checkAvailable = function checkAvailable() {
                return this._onEvent !== null;
              };

              _proto.clone = function clone() {
                return null;
              };

              _proto.setEnabled = function setEnabled(enabled) {
                this._isEnabled = enabled;
              };

              _proto.isEnabled = function isEnabled() {
                return this._isEnabled;
              };

              return EventListener;
            }());
            EventListener.UNKNOWN = 0;
            EventListener.TOUCH_ONE_BY_ONE = 1;
            EventListener.TOUCH_ALL_AT_ONCE = 2;
            EventListener.KEYBOARD = 3;
            EventListener.MOUSE = 4;
            EventListener.ACCELERATION = 6;
            EventListener.CUSTOM = 8;
            EventListener.ListenerID = {
              MOUSE: '__cc_mouse',
              TOUCH_ONE_BY_ONE: '__cc_touch_one_by_one',
              TOUCH_ALL_AT_ONCE: '__cc_touch_all_at_once',
              KEYBOARD: '__cc_keyboard',
              ACCELERATION: '__cc_acceleration'
            };
            var ListenerID = EventListener.ListenerID;
            var Mouse = function (_EventListener) {
              _inheritsLoose(Mouse, _EventListener);

              function Mouse() {
                var _this;

                _this = _EventListener.call(this, EventListener.MOUSE, ListenerID.MOUSE, null) || this;
                _this.onMouseDown = null;
                _this.onMouseUp = null;
                _this.onMouseMove = null;
                _this.onMouseScroll = null;

                _this._onEvent = function (event) {
                  return _this._callback(event);
                };

                return _this;
              }

              var _proto2 = Mouse.prototype;

              _proto2._callback = function _callback(event) {
                var eventType = legacyCC.Event.EventMouse;

                switch (event.eventType) {
                  case eventType.DOWN:
                    if (this.onMouseDown) {
                      this.onMouseDown(event);
                    }

                    break;

                  case eventType.UP:
                    if (this.onMouseUp) {
                      this.onMouseUp(event);
                    }

                    break;

                  case eventType.MOVE:
                    if (this.onMouseMove) {
                      this.onMouseMove(event);
                    }

                    break;

                  case eventType.SCROLL:
                    if (this.onMouseScroll) {
                      this.onMouseScroll(event);
                    }

                    break;
                }
              };

              _proto2.clone = function clone() {
                var eventListener = new Mouse();
                eventListener.onMouseDown = this.onMouseDown;
                eventListener.onMouseUp = this.onMouseUp;
                eventListener.onMouseMove = this.onMouseMove;
                eventListener.onMouseScroll = this.onMouseScroll;
                return eventListener;
              };

              _proto2.checkAvailable = function checkAvailable() {
                return true;
              };

              return Mouse;
            }(EventListener);
            var TouchOneByOne = function (_EventListener2) {
              _inheritsLoose(TouchOneByOne, _EventListener2);

              function TouchOneByOne() {
                var _this2;

                _this2 = _EventListener2.call(this, EventListener.TOUCH_ONE_BY_ONE, ListenerID.TOUCH_ONE_BY_ONE, null) || this;
                _this2.swallowTouches = false;
                _this2.onTouchBegan = null;
                _this2.onTouchMoved = null;
                _this2.onTouchEnded = null;
                _this2.onTouchCancelled = null;
                _this2._claimedTouches = [];
                return _this2;
              }

              var _proto3 = TouchOneByOne.prototype;

              _proto3.setSwallowTouches = function setSwallowTouches(needSwallow) {
                this.swallowTouches = needSwallow;
              };

              _proto3.isSwallowTouches = function isSwallowTouches() {
                return this.swallowTouches;
              };

              _proto3.clone = function clone() {
                var eventListener = new TouchOneByOne();
                eventListener.onTouchBegan = this.onTouchBegan;
                eventListener.onTouchMoved = this.onTouchMoved;
                eventListener.onTouchEnded = this.onTouchEnded;
                eventListener.onTouchCancelled = this.onTouchCancelled;
                eventListener.swallowTouches = this.swallowTouches;
                return eventListener;
              };

              _proto3.checkAvailable = function checkAvailable() {
                if (!this.onTouchBegan) {
                  logID(1801);
                  return false;
                }

                return true;
              };

              return TouchOneByOne;
            }(EventListener);
            var TouchAllAtOnce = function (_EventListener3) {
              _inheritsLoose(TouchAllAtOnce, _EventListener3);

              function TouchAllAtOnce() {
                var _this3;

                _this3 = _EventListener3.call(this, EventListener.TOUCH_ALL_AT_ONCE, ListenerID.TOUCH_ALL_AT_ONCE, null) || this;
                _this3.onTouchesBegan = null;
                _this3.onTouchesMoved = null;
                _this3.onTouchesEnded = null;
                _this3.onTouchesCancelled = null;
                return _this3;
              }

              var _proto4 = TouchAllAtOnce.prototype;

              _proto4.clone = function clone() {
                var eventListener = new TouchAllAtOnce();
                eventListener.onTouchesBegan = this.onTouchesBegan;
                eventListener.onTouchesMoved = this.onTouchesMoved;
                eventListener.onTouchesEnded = this.onTouchesEnded;
                eventListener.onTouchesCancelled = this.onTouchesCancelled;
                return eventListener;
              };

              _proto4.checkAvailable = function checkAvailable() {
                if (this.onTouchesBegan === null && this.onTouchesMoved === null && this.onTouchesEnded === null && this.onTouchesCancelled === null) {
                  logID(1802);
                  return false;
                }

                return true;
              };

              return TouchAllAtOnce;
            }(EventListener);
            var Acceleration = function (_EventListener4) {
              _inheritsLoose(Acceleration, _EventListener4);

              function Acceleration(callback) {
                var _this4;

                _this4 = _EventListener4.call(this, EventListener.ACCELERATION, ListenerID.ACCELERATION, null) || this;
                _this4._onAccelerationEvent = null;

                _this4._onEvent = function (event) {
                  return _this4._callback(event);
                };

                _this4._onAccelerationEvent = callback;
                return _this4;
              }

              var _proto5 = Acceleration.prototype;

              _proto5._callback = function _callback(event) {
                if (this._onAccelerationEvent) {
                  this._onAccelerationEvent(event.acc, event);
                }
              };

              _proto5.checkAvailable = function checkAvailable() {
                assertID(this._onAccelerationEvent, 1803);
                return true;
              };

              _proto5.clone = function clone() {
                return new Acceleration(this._onAccelerationEvent);
              };

              return Acceleration;
            }(EventListener);
            var Keyboard = function (_EventListener5) {
              _inheritsLoose(Keyboard, _EventListener5);

              function Keyboard() {
                var _this5;

                _this5 = _EventListener5.call(this, EventListener.KEYBOARD, ListenerID.KEYBOARD, null) || this;
                _this5.onKeyPressed = null;
                _this5.onKeyReleased = null;

                _this5._onEvent = function (event) {
                  return _this5._callback(event);
                };

                return _this5;
              }

              var _proto6 = Keyboard.prototype;

              _proto6._callback = function _callback(event) {
                if (event.isPressed) {
                  if (this.onKeyPressed) {
                    this.onKeyPressed(event.keyCode, event);
                  }
                } else if (this.onKeyReleased) {
                  this.onKeyReleased(event.keyCode, event);
                }
              };

              _proto6.clone = function clone() {
                var eventListener = new Keyboard();
                eventListener.onKeyPressed = this.onKeyPressed;
                eventListener.onKeyReleased = this.onKeyReleased;
                return eventListener;
              };

              _proto6.checkAvailable = function checkAvailable() {
                if (this.onKeyPressed === null && this.onKeyReleased === null) {
                  logID(1800);
                  return false;
                }

                return true;
              };

              return Keyboard;
            }(EventListener);
            legacyCC.EventListener = EventListener;

            var ListenerID$1 = EventListener.ListenerID;

            function checkUINode(node) {
              if (node && node.getComponent('cc.UITransform')) {
                return true;
              }

              return false;
            }

            var _EventListenerVector = function () {
              function _EventListenerVector() {
                this.gt0Index = 0;
                this._fixedListeners = [];
                this._sceneGraphListeners = [];
              }

              var _proto = _EventListenerVector.prototype;

              _proto.size = function size() {
                return this._fixedListeners.length + this._sceneGraphListeners.length;
              };

              _proto.empty = function empty() {
                return this._fixedListeners.length === 0 && this._sceneGraphListeners.length === 0;
              };

              _proto.push = function push(listener) {
                if (listener._getFixedPriority() === 0) {
                  this._sceneGraphListeners.push(listener);
                } else {
                  this._fixedListeners.push(listener);
                }
              };

              _proto.clearSceneGraphListeners = function clearSceneGraphListeners() {
                this._sceneGraphListeners.length = 0;
              };

              _proto.clearFixedListeners = function clearFixedListeners() {
                this._fixedListeners.length = 0;
              };

              _proto.clear = function clear() {
                this._sceneGraphListeners.length = 0;
                this._fixedListeners.length = 0;
              };

              _proto.getFixedPriorityListeners = function getFixedPriorityListeners() {
                return this._fixedListeners;
              };

              _proto.getSceneGraphPriorityListeners = function getSceneGraphPriorityListeners() {
                return this._sceneGraphListeners;
              };

              return _EventListenerVector;
            }();

            function __getListenerID(event) {
              var eventType = Event;
              var type = event.type;

              if (type === eventType.ACCELERATION) {
                return ListenerID$1.ACCELERATION;
              }

              if (type === eventType.KEYBOARD) {
                return ListenerID$1.KEYBOARD;
              }

              if (type.startsWith(eventType.MOUSE)) {
                return ListenerID$1.MOUSE;
              }

              if (type.startsWith(eventType.TOUCH)) {
                logID(2000);
              }

              return '';
            }

            var DIRTY_NONE = 0;
            var DIRTY_FIXED_PRIORITY = 1 << 0;
            var DIRTY_SCENE_GRAPH_PRIORITY = 1 << 1;

            var EventManager = function () {
              function EventManager() {
                this._listenersMap = {};
                this._priorityDirtyFlagMap = {};
                this._nodeListenersMap = {};
                this._toAddedListeners = [];
                this._toRemovedListeners = [];
                this._dirtyListeners = {};
                this._inDispatch = 0;
                this._isEnabled = false;
                this._internalCustomListenerIDs = [];
                this._currentTouch = null;
                this._currentTouchListener = null;
              }

              var _proto2 = EventManager.prototype;

              _proto2.pauseTarget = function pauseTarget(node, recursive) {
                if (recursive === void 0) {
                  recursive = false;
                }

                if (!(node instanceof legacyCC._BaseNode)) {
                  warnID(3506);
                  return;
                }

                var listeners = this._nodeListenersMap[node.uuid];

                if (listeners) {
                  for (var i = 0; i < listeners.length; ++i) {
                    var _listener = listeners[i];

                    _listener._setPaused(true);
                  }
                }

                if (recursive === true) {
                  var locChildren = node.children;

                  if (locChildren) {
                    for (var _i = 0; _i < locChildren.length; ++_i) {
                      var locChild = locChildren[_i];
                      this.pauseTarget(locChild, true);
                    }
                  }
                }
              };

              _proto2.resumeTarget = function resumeTarget(node, recursive) {
                if (recursive === void 0) {
                  recursive = false;
                }

                if (!(node instanceof legacyCC._BaseNode)) {
                  warnID(3506);
                  return;
                }

                var listeners = this._nodeListenersMap[node.uuid];

                if (listeners) {
                  for (var i = 0; i < listeners.length; ++i) {
                    var _listener2 = listeners[i];

                    _listener2._setPaused(false);
                  }
                }

                this._setDirtyForNode(node);

                if (recursive === true && node.children.length > 0) {
                  var locChildren = node.children;

                  if (locChildren) {
                    for (var _i2 = 0; _i2 < locChildren.length; ++_i2) {
                      var locChild = locChildren[_i2];
                      this.resumeTarget(locChild, true);
                    }
                  }
                }
              };

              _proto2.frameUpdateListeners = function frameUpdateListeners() {
                var locListenersMap = this._listenersMap;
                var locPriorityDirtyFlagMap = this._priorityDirtyFlagMap;

                for (var selKey in locListenersMap) {
                  if (locListenersMap[selKey].empty()) {
                    delete locPriorityDirtyFlagMap[selKey];
                    delete locListenersMap[selKey];
                  }
                }

                var locToAddedListeners = this._toAddedListeners;

                if (locToAddedListeners.length !== 0) {
                  for (var i = 0, len = locToAddedListeners.length; i < len; i++) {
                    this._forceAddEventListener(locToAddedListeners[i]);
                  }

                  locToAddedListeners.length = 0;
                }

                if (this._toRemovedListeners.length !== 0) {
                  this._cleanToRemovedListeners();
                }
              };

              _proto2.hasEventListener = function hasEventListener(listenerID) {
                return !!this._getListeners(listenerID);
              };

              _proto2.addListener = function addListener(listener, nodeOrPriority) {
                assertID(listener && nodeOrPriority, 3503);

                if (!(legacyCC.js.isNumber(nodeOrPriority) || nodeOrPriority instanceof legacyCC._BaseNode)) {
                  warnID(3506);
                  return null;
                }

                if (!(listener instanceof legacyCC.EventListener)) {
                  assertID(!legacyCC.js.isNumber(nodeOrPriority), 3504);
                  listener = legacyCC.EventListener.create(listener);
                } else if (listener._isRegistered()) {
                  logID(3505);
                  return null;
                }

                if (!listener.checkAvailable()) {
                  return null;
                }

                if (legacyCC.js.isNumber(nodeOrPriority)) {
                  if (nodeOrPriority === 0) {
                    logID(3500);
                    return null;
                  }

                  listener._setSceneGraphPriority(null);

                  listener._setFixedPriority(nodeOrPriority);

                  listener._setRegistered(true);

                  listener._setPaused(false);

                  this._addListener(listener);
                } else {
                  if (!checkUINode(nodeOrPriority)) {
                    logID(3512);
                    return null;
                  }

                  listener._setSceneGraphPriority(nodeOrPriority);

                  listener._setFixedPriority(0);

                  listener._setRegistered(true);

                  this._addListener(listener);
                }

                return listener;
              };

              _proto2.addCustomListener = function addCustomListener(eventName, callback) {
                var listener = EventListener.create({
                  event: legacyCC.EventListener.CUSTOM,
                  eventName: eventName,
                  callback: callback
                });
                this.addListener(listener, 1);
                return listener;
              };

              _proto2.removeListener = function removeListener(listener) {
                if (listener == null) {
                  return;
                }

                var isFound = false;
                var locListener = this._listenersMap;

                for (var selKey in locListener) {
                  var listeners = locListener[selKey];
                  var fixedPriorityListeners = listeners.getFixedPriorityListeners();
                  var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
                  isFound = this._removeListenerInVector(sceneGraphPriorityListeners, listener);

                  if (isFound) {
                    this._setDirty(listener._getListenerID(), DIRTY_SCENE_GRAPH_PRIORITY);
                  } else {
                    isFound = this._removeListenerInVector(fixedPriorityListeners, listener);

                    if (isFound) {
                      this._setDirty(listener._getListenerID(), DIRTY_FIXED_PRIORITY);
                    }
                  }

                  if (listeners.empty()) {
                    delete this._priorityDirtyFlagMap[listener._getListenerID()];
                    delete locListener[selKey];
                  }

                  if (isFound) {
                    break;
                  }
                }

                if (!isFound) {
                  var locToAddedListeners = this._toAddedListeners;

                  for (var i = locToAddedListeners.length - 1; i >= 0; i--) {
                    var selListener = locToAddedListeners[i];

                    if (selListener === listener) {
                      legacyCC.js.array.removeAt(locToAddedListeners, i);

                      selListener._setRegistered(false);

                      break;
                    }
                  }
                }
              };

              _proto2.removeListeners = function removeListeners(listenerType, recursive) {
                if (recursive === void 0) {
                  recursive = false;
                }

                if (!(legacyCC.js.isNumber(listenerType) || listenerType instanceof legacyCC._BaseNode)) {
                  warnID(3506);
                  return;
                }

                if (listenerType._id !== undefined) {
                  var listeners = this._nodeListenersMap[listenerType._id];

                  if (listeners) {
                    var listenersCopy = legacyCC.js.array.copy(listeners);

                    for (var i = 0; i < listenersCopy.length; ++i) {
                      var listenerCopy = listenersCopy[i];
                      this.removeListener(listenerCopy);
                    }

                    delete this._nodeListenersMap[listenerType._id];
                  }

                  var locToAddedListeners = this._toAddedListeners;

                  for (var _i3 = 0; _i3 < locToAddedListeners.length;) {
                    var _listener3 = locToAddedListeners[_i3];

                    if (_listener3._getSceneGraphPriority() === listenerType) {
                      _listener3._setSceneGraphPriority(null);

                      _listener3._setRegistered(false);

                      locToAddedListeners.splice(_i3, 1);
                    } else {
                      ++_i3;
                    }
                  }

                  if (recursive === true) {
                    var locChildren = listenerType.getChildren();

                    for (var _i4 = 0; _i4 < locChildren.length; ++_i4) {
                      var locChild = locChildren[_i4];
                      this.removeListeners(locChild, true);
                    }
                  }
                } else if (listenerType === legacyCC.EventListener.TOUCH_ONE_BY_ONE) {
                  this._removeListenersForListenerID(ListenerID$1.TOUCH_ONE_BY_ONE);
                } else if (listenerType === legacyCC.EventListener.TOUCH_ALL_AT_ONCE) {
                  this._removeListenersForListenerID(ListenerID$1.TOUCH_ALL_AT_ONCE);
                } else if (listenerType === legacyCC.EventListener.MOUSE) {
                  this._removeListenersForListenerID(ListenerID$1.MOUSE);
                } else if (listenerType === legacyCC.EventListener.ACCELERATION) {
                  this._removeListenersForListenerID(ListenerID$1.ACCELERATION);
                } else if (listenerType === legacyCC.EventListener.KEYBOARD) {
                  this._removeListenersForListenerID(ListenerID$1.KEYBOARD);
                } else {
                  logID(3501);
                }
              };

              _proto2.removeCustomListeners = function removeCustomListeners(customEventName) {
                this._removeListenersForListenerID(customEventName);
              };

              _proto2.removeAllListeners = function removeAllListeners() {
                var locListeners = this._listenersMap;
                var locInternalCustomEventIDs = this._internalCustomListenerIDs;

                for (var selKey in locListeners) {
                  if (locInternalCustomEventIDs.indexOf(selKey) === -1) {
                    this._removeListenersForListenerID(selKey);
                  }
                }
              };

              _proto2.setPriority = function setPriority(listener, fixedPriority) {
                if (listener == null) {
                  return;
                }

                var locListeners = this._listenersMap;

                for (var selKey in locListeners) {
                  var selListeners = locListeners[selKey];
                  var fixedPriorityListeners = selListeners.getFixedPriorityListeners();

                  if (fixedPriorityListeners) {
                    var found = fixedPriorityListeners.indexOf(listener);

                    if (found !== -1) {
                      if (listener._getSceneGraphPriority() != null) {
                        logID(3502);
                      }

                      if (listener._getFixedPriority() !== fixedPriority) {
                        listener._setFixedPriority(fixedPriority);

                        this._setDirty(listener._getListenerID(), DIRTY_FIXED_PRIORITY);
                      }

                      return;
                    }
                  }
                }
              };

              _proto2.setEnabled = function setEnabled(enabled) {
                this._isEnabled = enabled;
              };

              _proto2.isEnabled = function isEnabled() {
                return this._isEnabled;
              };

              _proto2.dispatchEvent = function dispatchEvent(event) {
                if (!this._isEnabled) {
                  return;
                }

                this._updateDirtyFlagForSceneGraph();

                this._inDispatch++;

                if (!event || !event.getType) {
                  errorID(3511);
                  return;
                }

                if (event.getType().startsWith(legacyCC.Event.TOUCH)) {
                  this._dispatchTouchEvent(event);

                  this._inDispatch--;
                  return;
                }

                var listenerID = __getListenerID(event);

                this._sortEventListeners(listenerID);

                var selListeners = this._listenersMap[listenerID];

                if (selListeners != null) {
                  this._dispatchEventToListeners(selListeners, this._onListenerCallback, event);

                  this._onUpdateListeners(selListeners);
                }

                this._inDispatch--;
              };

              _proto2._onListenerCallback = function _onListenerCallback(listener, event) {
                event.currentTarget = listener._target;
                var onEvent = listener.onEvent;

                if (onEvent) {
                  onEvent(event);
                }

                return event.isStopped();
              };

              _proto2.dispatchCustomEvent = function dispatchCustomEvent(eventName, optionalUserData) {
                var ev = new legacyCC.Event.EventCustom(eventName);
                ev.setUserData(optionalUserData);
                this.dispatchEvent(ev);
              };

              _proto2._setDirtyForNode = function _setDirtyForNode(node) {
                var selListeners = this._nodeListenersMap[node._id];

                if (selListeners !== undefined) {
                  for (var j = 0, len = selListeners.length; j < len; j++) {
                    var selListener = selListeners[j];

                    var listenerID = selListener._getListenerID();

                    if (!this._dirtyListeners[listenerID]) {
                      this._dirtyListeners[listenerID] = true;
                    }
                  }
                }

                if (node.children.length > 0) {
                  var _children = node.children;

                  for (var i = 0, _len = _children ? _children.length : 0; i < _len; i++) {
                    this._setDirtyForNode(_children[i]);
                  }
                }
              };

              _proto2._addListener = function _addListener(listener) {
                if (this._inDispatch === 0) {
                  this._forceAddEventListener(listener);
                } else {
                  this._toAddedListeners.push(listener);
                }
              };

              _proto2._forceAddEventListener = function _forceAddEventListener(listener) {
                var listenerID = listener._getListenerID();

                var listeners = this._listenersMap[listenerID];

                if (!listeners) {
                  listeners = new _EventListenerVector();
                  this._listenersMap[listenerID] = listeners;
                }

                listeners.push(listener);

                if (listener._getFixedPriority() === 0) {
                  this._setDirty(listenerID, DIRTY_SCENE_GRAPH_PRIORITY);

                  var node = listener._getSceneGraphPriority();

                  if (node === null) {
                    logID(3507);
                  }

                  this._associateNodeAndEventListener(node, listener);

                  if (node.activeInHierarchy) {
                    this.resumeTarget(node);
                  }
                } else {
                  this._setDirty(listenerID, DIRTY_FIXED_PRIORITY);
                }
              };

              _proto2._getListeners = function _getListeners(listenerID) {
                return this._listenersMap[listenerID];
              };

              _proto2._updateDirtyFlagForSceneGraph = function _updateDirtyFlagForSceneGraph() {
                var locDirtyListeners = this._dirtyListeners;

                for (var selKey in locDirtyListeners) {
                  this._setDirty(selKey, DIRTY_SCENE_GRAPH_PRIORITY);

                  locDirtyListeners[selKey] = false;
                }
              };

              _proto2._removeAllListenersInVector = function _removeAllListenersInVector(listenerVector) {
                if (!listenerVector) {
                  return;
                }

                var selListener;

                for (var i = listenerVector.length - 1; i >= 0; i--) {
                  selListener = listenerVector[i];

                  selListener._setRegistered(false);

                  if (selListener._getSceneGraphPriority() != null) {
                    this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);

                    selListener._setSceneGraphPriority(null);
                  }

                  if (this._inDispatch === 0) {
                    legacyCC.js.array.removeAt(listenerVector, i);
                  }
                }
              };

              _proto2._removeListenersForListenerID = function _removeListenersForListenerID(listenerID) {
                var listeners = this._listenersMap[listenerID];

                if (listeners) {
                  var fixedPriorityListeners = listeners.getFixedPriorityListeners();
                  var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();

                  this._removeAllListenersInVector(sceneGraphPriorityListeners);

                  this._removeAllListenersInVector(fixedPriorityListeners);

                  delete this._priorityDirtyFlagMap[listenerID];

                  if (!this._inDispatch) {
                    listeners.clear();
                    delete this._listenersMap[listenerID];
                  }
                }

                var locToAddedListeners = this._toAddedListeners;

                for (var i = locToAddedListeners.length - 1; i >= 0; i--) {
                  var _listener4 = locToAddedListeners[i];

                  if (_listener4 && _listener4._getListenerID() === listenerID) {
                    legacyCC.js.array.removeAt(locToAddedListeners, i);
                  }
                }
              };

              _proto2._sortEventListeners = function _sortEventListeners(listenerID) {
                var dirtyFlag = DIRTY_NONE;
                var locFlagMap = this._priorityDirtyFlagMap;

                if (locFlagMap[listenerID]) {
                  dirtyFlag = locFlagMap[listenerID];
                }

                if (dirtyFlag !== DIRTY_NONE) {
                  locFlagMap[listenerID] = DIRTY_NONE;

                  if (dirtyFlag & DIRTY_FIXED_PRIORITY) {
                    this._sortListenersOfFixedPriority(listenerID);
                  }

                  if (dirtyFlag & DIRTY_SCENE_GRAPH_PRIORITY) {
                    var rootEntity = legacyCC.director.getScene();

                    if (rootEntity) {
                      this._sortListenersOfSceneGraphPriority(listenerID);
                    }
                  }
                }
              };

              _proto2._sortListenersOfSceneGraphPriority = function _sortListenersOfSceneGraphPriority(listenerID) {
                var listeners = this._getListeners(listenerID);

                if (!listeners) {
                  return;
                }

                var sceneGraphListener = listeners.getSceneGraphPriorityListeners();

                if (!sceneGraphListener || sceneGraphListener.length === 0) {
                  return;
                }

                var eventListeners = listeners.getSceneGraphPriorityListeners();
                eventListeners.forEach(function (listener) {
                  var node = listener._getSceneGraphPriority();

                  var trans = node._uiProps.uiTransformComp;
                  listener._cameraPriority = trans.cameraPriority;
                });
                eventListeners.sort(this._sortEventListenersOfSceneGraphPriorityDes);
              };

              _proto2._sortEventListenersOfSceneGraphPriorityDes = function _sortEventListenersOfSceneGraphPriorityDes(l1, l2) {
                var node1 = l1._getSceneGraphPriority();

                var node2 = l2._getSceneGraphPriority();

                if (!l2 || !node2 || !node2._activeInHierarchy || !node2._uiProps.uiTransformComp) {
                  return -1;
                } else if (!l1 || !node1 || !node1._activeInHierarchy || !node1._uiProps.uiTransformComp) {
                  return 1;
                }

                var p1 = node1;
                var p2 = node2;
                var ex = false;

                if (l1._cameraPriority !== l2._cameraPriority) {
                  return l2._cameraPriority - l1._cameraPriority;
                }

                while (p1.parent._id !== p2.parent._id) {
                  p1 = p1.parent.parent === null ? (ex = true) && node2 : p1.parent;
                  p2 = p2.parent.parent === null ? (ex = true) && node1 : p2.parent;
                }

                if (p1._id === p2._id) {
                  if (p1._id === node2._id) {
                    return -1;
                  }

                  if (p1._id === node1._id) {
                    return 1;
                  }
                }

                var priority1 = p1.getSiblingIndex();
                var priority2 = p2.getSiblingIndex();
                return ex ? priority1 - priority2 : priority2 - priority1;
              };

              _proto2._sortListenersOfFixedPriority = function _sortListenersOfFixedPriority(listenerID) {
                var listeners = this._listenersMap[listenerID];

                if (!listeners) {
                  return;
                }

                var fixedListeners = listeners.getFixedPriorityListeners();

                if (!fixedListeners || fixedListeners.length === 0) {
                  return;
                }

                fixedListeners.sort(this._sortListenersOfFixedPriorityAsc);
                var index = 0;

                for (var len = fixedListeners.length; index < len;) {
                  if (fixedListeners[index]._getFixedPriority() >= 0) {
                    break;
                  }

                  ++index;
                }

                listeners.gt0Index = index;
              };

              _proto2._sortListenersOfFixedPriorityAsc = function _sortListenersOfFixedPriorityAsc(l1, l2) {
                return l1._getFixedPriority() - l2._getFixedPriority();
              };

              _proto2._onUpdateListeners = function _onUpdateListeners(listeners) {
                var fixedPriorityListeners = listeners.getFixedPriorityListeners();
                var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
                var toRemovedListeners = this._toRemovedListeners;

                if (sceneGraphPriorityListeners) {
                  for (var i = sceneGraphPriorityListeners.length - 1; i >= 0; i--) {
                    var selListener = sceneGraphPriorityListeners[i];

                    if (!selListener._isRegistered()) {
                      legacyCC.js.array.removeAt(sceneGraphPriorityListeners, i);
                      var idx = toRemovedListeners.indexOf(selListener);

                      if (idx !== -1) {
                        toRemovedListeners.splice(idx, 1);
                      }
                    }
                  }
                }

                if (fixedPriorityListeners) {
                  for (var _i5 = fixedPriorityListeners.length - 1; _i5 >= 0; _i5--) {
                    var _selListener = fixedPriorityListeners[_i5];

                    if (!_selListener._isRegistered()) {
                      legacyCC.js.array.removeAt(fixedPriorityListeners, _i5);

                      var _idx = toRemovedListeners.indexOf(_selListener);

                      if (_idx !== -1) {
                        toRemovedListeners.splice(_idx, 1);
                      }
                    }
                  }
                }

                if (sceneGraphPriorityListeners && sceneGraphPriorityListeners.length === 0) {
                  listeners.clearSceneGraphListeners();
                }

                if (fixedPriorityListeners && fixedPriorityListeners.length === 0) {
                  listeners.clearFixedListeners();
                }
              };

              _proto2._updateTouchListeners = function _updateTouchListeners(event) {
                var locInDispatch = this._inDispatch;
                assertID(locInDispatch > 0, 3508);

                if (locInDispatch > 1) {
                  return;
                }

                var listeners;
                listeners = this._listenersMap[ListenerID$1.TOUCH_ONE_BY_ONE];

                if (listeners) {
                  this._onUpdateListeners(listeners);
                }

                listeners = this._listenersMap[ListenerID$1.TOUCH_ALL_AT_ONCE];

                if (listeners) {
                  this._onUpdateListeners(listeners);
                }

                assertID(locInDispatch === 1, 3509);
                var locToAddedListeners = this._toAddedListeners;

                if (locToAddedListeners.length !== 0) {
                  for (var i = 0, len = locToAddedListeners.length; i < len; i++) {
                    this._forceAddEventListener(locToAddedListeners[i]);
                  }

                  this._toAddedListeners.length = 0;
                }

                if (this._toRemovedListeners.length !== 0) {
                  this._cleanToRemovedListeners();
                }
              };

              _proto2._cleanToRemovedListeners = function _cleanToRemovedListeners() {
                var toRemovedListeners = this._toRemovedListeners;

                for (var i = 0; i < toRemovedListeners.length; ++i) {
                  var selListener = toRemovedListeners[i];

                  var listeners = this._listenersMap[selListener._getListenerID()];

                  if (!listeners) {
                    continue;
                  }

                  var fixedPriorityListeners = listeners.getFixedPriorityListeners();
                  var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();

                  if (sceneGraphPriorityListeners) {
                    var idx = sceneGraphPriorityListeners.indexOf(selListener);

                    if (idx !== -1) {
                      sceneGraphPriorityListeners.splice(idx, 1);
                    }
                  }

                  if (fixedPriorityListeners) {
                    var _idx2 = fixedPriorityListeners.indexOf(selListener);

                    if (_idx2 !== -1) {
                      fixedPriorityListeners.splice(_idx2, 1);
                    }
                  }
                }

                toRemovedListeners.length = 0;
              };

              _proto2._onTouchEventCallback = function _onTouchEventCallback(listener, argsObj) {
                if (!listener._isRegistered()) {
                  return false;
                }

                var event = argsObj.event;
                var selTouch = event.touch;
                event.currentTarget = listener._getSceneGraphPriority();
                var isClaimed = false;
                var removedIdx = -1;
                var getCode = event.getEventCode();

                if (getCode === EventTouch.BEGAN) {
                  if (!macro.ENABLE_MULTI_TOUCH && eventManager._currentTouch) {
                    var node = eventManager._currentTouchListener._node;

                    if (!node || node.activeInHierarchy) {
                      return false;
                    }
                  }

                  if (listener.onTouchBegan) {
                    isClaimed = listener.onTouchBegan(selTouch, event);

                    if (isClaimed && listener._isRegistered()) {
                      listener._claimedTouches.push(selTouch);

                      if (macro.ENABLE_MULTI_TOUCH || !eventManager._currentTouch) {
                        eventManager._currentTouch = selTouch;
                      }

                      eventManager._currentTouchListener = listener;
                    }
                  }
                } else if (listener._claimedTouches.length > 0) {
                  removedIdx = listener._claimedTouches.indexOf(selTouch);

                  if (removedIdx !== -1) {
                    isClaimed = true;

                    if (!macro.ENABLE_MULTI_TOUCH && eventManager._currentTouch && eventManager._currentTouch !== selTouch) {
                      return false;
                    }

                    if (getCode === EventTouch.MOVED && listener.onTouchMoved) {
                      listener.onTouchMoved(selTouch, event);
                    } else if (getCode === EventTouch.ENDED) {
                      if (listener.onTouchEnded) {
                        listener.onTouchEnded(selTouch, event);
                      }

                      if (listener._isRegistered()) {
                        listener._claimedTouches.splice(removedIdx, 1);
                      }

                      if (macro.ENABLE_MULTI_TOUCH || eventManager._currentTouch === selTouch) {
                        eventManager._currentTouch = null;
                      }

                      eventManager._currentTouchListener = null;
                    } else if (getCode === EventTouch.CANCELLED) {
                      if (listener.onTouchCancelled) {
                        listener.onTouchCancelled(selTouch, event);
                      }

                      if (listener._isRegistered()) {
                        listener._claimedTouches.splice(removedIdx, 1);
                      }

                      if (macro.ENABLE_MULTI_TOUCH || eventManager._currentTouch === selTouch) {
                        eventManager._currentTouch = null;
                      }

                      eventManager._currentTouchListener = null;
                    }
                  }
                }

                if (event.isStopped()) {
                  eventManager._updateTouchListeners(event);

                  return true;
                }

                if (isClaimed && listener._isRegistered() && listener.swallowTouches) {
                  if (argsObj.needsMutableSet) {
                    argsObj.touches.splice(selTouch, 1);
                  }

                  return true;
                }

                return false;
              };

              _proto2._dispatchTouchEvent = function _dispatchTouchEvent(event) {
                this._sortEventListeners(ListenerID$1.TOUCH_ONE_BY_ONE);

                this._sortEventListeners(ListenerID$1.TOUCH_ALL_AT_ONCE);

                var oneByOneListeners = this._getListeners(ListenerID$1.TOUCH_ONE_BY_ONE);

                var allAtOnceListeners = this._getListeners(ListenerID$1.TOUCH_ALL_AT_ONCE);

                if (oneByOneListeners === null && allAtOnceListeners === null) {
                  return;
                }

                var originalTouches = event.getTouches();
                var mutableTouches = legacyCC.js.array.copy(originalTouches);
                var oneByOneArgsObj = {
                  event: event,
                  needsMutableSet: oneByOneListeners && allAtOnceListeners,
                  touches: mutableTouches,
                  selTouch: null
                };

                if (oneByOneListeners) {
                  for (var i = 0; i < originalTouches.length; ++i) {
                    var originalTouch = originalTouches[i];
                    event.touch = originalTouch;
                    event.propagationStopped = event.propagationImmediateStopped = false;

                    this._dispatchEventToListeners(oneByOneListeners, this._onTouchEventCallback, oneByOneArgsObj);
                  }
                }

                if (allAtOnceListeners && mutableTouches.length > 0) {
                  this._dispatchEventToListeners(allAtOnceListeners, this._onTouchesEventCallback, {
                    event: event,
                    touches: mutableTouches
                  });

                  if (event.isStopped()) {
                    return;
                  }
                }

                this._updateTouchListeners(event);
              };

              _proto2._onTouchesEventCallback = function _onTouchesEventCallback(listener, callbackParams) {
                if (!listener._isRegistered()) {
                  return false;
                }

                var event = callbackParams.event;
                var touches = callbackParams.touches;
                var getCode = event.getEventCode();
                event.currentTarget = listener._getSceneGraphPriority();

                if (getCode === EventTouch.BEGAN && listener.onTouchesBegan) {
                  listener.onTouchesBegan(touches, event);
                } else if (getCode === EventTouch.MOVED && listener.onTouchesMoved) {
                  listener.onTouchesMoved(touches, event);
                } else if (getCode === EventTouch.ENDED && listener.onTouchesEnded) {
                  listener.onTouchesEnded(touches, event);
                } else if (getCode === EventTouch.CANCELLED && listener.onTouchesCancelled) {
                  listener.onTouchesCancelled(touches, event);
                }

                if (event.isStopped()) {
                  eventManager._updateTouchListeners(event);

                  return true;
                }

                return false;
              };

              _proto2._associateNodeAndEventListener = function _associateNodeAndEventListener(node, listener) {
                var listeners = this._nodeListenersMap[node.uuid];

                if (!listeners) {
                  listeners = [];
                  this._nodeListenersMap[node.uuid] = listeners;
                }

                listeners.push(listener);
              };

              _proto2._dissociateNodeAndEventListener = function _dissociateNodeAndEventListener(node, listener) {
                var listeners = this._nodeListenersMap[node.uuid];

                if (listeners) {
                  legacyCC.js.array.remove(listeners, listener);

                  if (listeners.length === 0) {
                    delete this._nodeListenersMap[node.uuid];
                  }
                }
              };

              _proto2._dispatchEventToListeners = function _dispatchEventToListeners(listeners, onEvent, eventOrArgs) {
                var shouldStopPropagation = false;
                var fixedPriorityListeners = listeners.getFixedPriorityListeners();
                var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
                var i = 0;

                if (fixedPriorityListeners) {
                  if (fixedPriorityListeners.length !== 0) {
                    for (; i < listeners.gt0Index; ++i) {
                      var selListener = fixedPriorityListeners[i];

                      if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
                        shouldStopPropagation = true;
                        break;
                      }
                    }
                  }
                }

                if (sceneGraphPriorityListeners && !shouldStopPropagation) {
                  for (var _i6 = 0; _i6 < sceneGraphPriorityListeners.length; ++_i6) {
                    var _selListener2 = sceneGraphPriorityListeners[_i6];

                    if (_selListener2.isEnabled() && !_selListener2._isPaused() && _selListener2._isRegistered() && onEvent(_selListener2, eventOrArgs)) {
                      shouldStopPropagation = true;
                      break;
                    }
                  }
                }

                if (fixedPriorityListeners && !shouldStopPropagation) {
                  for (; i < fixedPriorityListeners.length; ++i) {
                    var _selListener3 = fixedPriorityListeners[i];

                    if (_selListener3.isEnabled() && !_selListener3._isPaused() && _selListener3._isRegistered() && onEvent(_selListener3, eventOrArgs)) {
                      shouldStopPropagation = true;
                      break;
                    }
                  }
                }
              };

              _proto2._setDirty = function _setDirty(listenerID, flag) {
                var locDirtyFlagMap = this._priorityDirtyFlagMap;

                if (locDirtyFlagMap[listenerID] == null) {
                  locDirtyFlagMap[listenerID] = flag;
                } else {
                  locDirtyFlagMap[listenerID] |= flag;
                }
              };

              _proto2._sortNumberAsc = function _sortNumberAsc(a, b) {
                return a - b;
              };

              _proto2._removeListenerInCallback = function _removeListenerInCallback(listeners, callback) {
                if (listeners == null) {
                  return false;
                }

                for (var i = listeners.length - 1; i >= 0; i--) {
                  var selListener = listeners[i];

                  if (selListener._onCustomEvent === callback || selListener.onEvent === callback) {
                    selListener._setRegistered(false);

                    if (selListener._getSceneGraphPriority() != null) {
                      this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);

                      selListener._setSceneGraphPriority(null);
                    }

                    if (this._inDispatch === 0) {
                      legacyCC.js.array.removeAt(listeners, i);
                    } else {
                      this._toRemovedListeners.push(selListener);
                    }

                    return true;
                  }
                }

                return false;
              };

              _proto2._removeListenerInVector = function _removeListenerInVector(listeners, listener) {
                if (listeners == null) {
                  return false;
                }

                for (var i = listeners.length - 1; i >= 0; i--) {
                  var selListener = listeners[i];

                  if (selListener === listener) {
                    selListener._setRegistered(false);

                    if (selListener._getSceneGraphPriority() != null) {
                      this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);

                      selListener._setSceneGraphPriority(null);
                    }

                    if (this._inDispatch === 0) {
                      legacyCC.js.array.removeAt(listeners, i);
                    } else {
                      this._toRemovedListeners.push(selListener);
                    }

                    return true;
                  }
                }

                return false;
              };

              return EventManager;
            }();

            var eventManager = exports('e', new EventManager());
            legacyCC.eventManager = eventManager;

            var SystemEventType;

            (function (SystemEventType) {
              SystemEventType["TOUCH_START"] = "touch-start";
              SystemEventType["TOUCH_MOVE"] = "touch-move";
              SystemEventType["TOUCH_END"] = "touch-end";
              SystemEventType["TOUCH_CANCEL"] = "touch-cancel";
              SystemEventType["MOUSE_DOWN"] = "mouse-down";
              SystemEventType["MOUSE_MOVE"] = "mouse-move";
              SystemEventType["MOUSE_UP"] = "mouse-up";
              SystemEventType["MOUSE_WHEEL"] = "mouse-wheel";
              SystemEventType["MOUSE_ENTER"] = "mouse-enter";
              SystemEventType["MOUSE_LEAVE"] = "mouse-leave";
              SystemEventType["KEY_DOWN"] = "keydown";
              SystemEventType["KEY_UP"] = "keyup";
              SystemEventType["DEVICEMOTION"] = "devicemotion";
              SystemEventType["TRANSFORM_CHANGED"] = "transform-changed";
              SystemEventType["SCENE_CHANGED_FOR_PERSISTS"] = "scene-changed-for-persists";
              SystemEventType["SIZE_CHANGED"] = "size-changed";
              SystemEventType["ANCHOR_CHANGED"] = "anchor-changed";
              SystemEventType["COLOR_CHANGED"] = "color-changed";
              SystemEventType["CHILD_ADDED"] = "child-added";
              SystemEventType["CHILD_REMOVED"] = "child-removed";
              SystemEventType["PARENT_CHANGED"] = "parent-changed";
              SystemEventType["NODE_DESTROYED"] = "node-destroyed";
              SystemEventType["LAYER_CHANGED"] = "layer-changed";
              SystemEventType["SIBLING_ORDER_CHANGED"] = "sibling-order-changed";
            })(SystemEventType || (SystemEventType = exports('S', {})));

            ccenum(SystemEventType);
            legacyCC.SystemEventType = SystemEventType;

        }
    };
});
