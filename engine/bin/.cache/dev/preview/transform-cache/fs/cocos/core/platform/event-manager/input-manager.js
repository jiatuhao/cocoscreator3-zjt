System.register("q-bundled:///fs/cocos/core/platform/event-manager/input-manager.js", ["../../../../../virtual/internal%253Aconstants.js", "../../math/index.js", "../../math/rect.js", "../macro.js", "../sys.js", "./event-manager.js", "./events.js", "./touch.js", "../../global-exports.js", "../debug.js"], function (_export, _context) {
  "use strict";

  var JSB, RUNTIME_BASED, Vec2, rect, macro, sys, eventManager, EventAcceleration, EventKeyboard, EventMouse, EventTouch, Touch, legacyCC, logID, TOUCH_TIMEOUT, PORTRAIT, LANDSCAPE_LEFT, PORTRAIT_UPSIDE_DOWN, LANDSCAPE_RIGHT, _didAccelerateFun, _vec2, _preLocation, Acceleration, InputManager, inputManager;

  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
      RUNTIME_BASED = _virtualInternal253AconstantsJs.RUNTIME_BASED;
    }, function (_mathIndexJs) {
      Vec2 = _mathIndexJs.Vec2;
    }, function (_mathRectJs) {
      rect = _mathRectJs.rect;
    }, function (_macroJs) {
      macro = _macroJs.macro;
    }, function (_sysJs) {
      sys = _sysJs.sys;
    }, function (_eventManagerJs) {
      eventManager = _eventManagerJs.default;
    }, function (_eventsJs) {
      EventAcceleration = _eventsJs.EventAcceleration;
      EventKeyboard = _eventsJs.EventKeyboard;
      EventMouse = _eventsJs.EventMouse;
      EventTouch = _eventsJs.EventTouch;
    }, function (_touchJs) {
      Touch = _touchJs.Touch;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_debugJs) {
      logID = _debugJs.logID;
    }],
    execute: function () {
      /*
       Copyright (c) 2011-2012 cocos2d-x.org
       Copyright (c) 2013-2016 Chukong Technologies Inc.
       Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.
      
       http://www.cocos2d-x.org
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights
       to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       copies of the Software, and to permit persons to whom the Software is
       furnished to do so, subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
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
      TOUCH_TIMEOUT = macro.TOUCH_TIMEOUT;
      PORTRAIT = 0;
      LANDSCAPE_LEFT = -90;
      PORTRAIT_UPSIDE_DOWN = 180;
      LANDSCAPE_RIGHT = 90;
      _vec2 = new Vec2();
      _preLocation = new Vec2();

      /**
       * @en the device accelerometer reports values for each axis in units of g-force.
       * @zh 设备重力传感器传递的各个轴的数据。
       */
      _export("Acceleration", Acceleration = function Acceleration(x, y, z, timestamp) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        if (z === void 0) {
          z = 0;
        }

        if (timestamp === void 0) {
          timestamp = 0;
        }

        this.x = void 0;
        this.y = void 0;
        this.z = void 0;
        this.timestamp = void 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.timestamp = timestamp;
      });

      legacyCC.internal.Acceleration = Acceleration;
      /**
       *  This class manages all events of input. include: touch, mouse, accelerometer, keyboard
       */

      InputManager = /*#__PURE__*/function () {
        function InputManager() {
          this._mousePressed = false;
          this._isRegisterEvent = false;
          this._preTouchPoint = new Vec2();
          this._prevMousePoint = new Vec2();
          this._preTouchPool = [];
          this._preTouchPoolPointer = 0;
          this._touches = [];
          this._touchesIntegerDict = {};
          this._indexBitsUsed = 0;
          this._maxTouches = 8;
          this._accelEnabled = false;
          this._accelInterval = 1 / 5;
          this._accelMinus = 1;
          this._accelCurTime = 0;
          this._acceleration = null;
          this._accelDeviceEvent = null;
          this._glView = null;
          this._pointLocked = false;
        }

        var _proto = InputManager.prototype;

        _proto.handleTouchesBegin = function handleTouchesBegin(touches) {
          var handleTouches = [];
          var locTouchIntDict = this._touchesIntegerDict;

          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var touchID = touch.getID();

            if (touchID === null) {
              continue;
            }

            var _index = locTouchIntDict[touchID];

            if (_index === undefined) {
              var unusedIndex = this._getUnUsedIndex();

              if (unusedIndex === -1) {
                logID(2300, unusedIndex);
                continue;
              } // curTouch = this._touches[unusedIndex] = touch;


              touch.getLocation(_vec2);
              var curTouch = new Touch(_vec2.x, _vec2.y, touchID);
              this._touches[unusedIndex] = curTouch;
              touch.getPreviousLocation(_vec2);
              curTouch.setPrevPoint(_vec2);
              locTouchIntDict[touchID] = unusedIndex;
              handleTouches.push(curTouch);
            }
          }

          if (handleTouches.length > 0) {
            // this._glView!._convertTouchesWithScale(handleTouches);
            var touchEvent = new EventTouch(handleTouches, false, EventTouch.BEGAN, macro.ENABLE_MULTI_TOUCH ? this._getUsefulTouches() : handleTouches);
            eventManager.dispatchEvent(touchEvent);
          }
        };

        _proto.handleTouchesMove = function handleTouchesMove(touches) {
          var handleTouches = [];
          var locTouches = this._touches;

          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var touchID = touch.getID();

            if (touchID === null) {
              continue;
            }

            var _index2 = this._touchesIntegerDict[touchID];

            if (_index2 === undefined) {
              // cc.log("if the index doesn't exist, it is an error");
              continue;
            }

            if (locTouches[_index2]) {
              touch.getLocation(_vec2);

              locTouches[_index2].setPoint(_vec2);

              touch.getPreviousLocation(_vec2);

              locTouches[_index2].setPrevPoint(_vec2);

              handleTouches.push(locTouches[_index2]);
            }
          }

          if (handleTouches.length > 0) {
            // this._glView!._convertTouchesWithScale(handleTouches);
            var touchEvent = new EventTouch(handleTouches, false, EventTouch.MOVED, macro.ENABLE_MULTI_TOUCH ? this._getUsefulTouches() : handleTouches);
            eventManager.dispatchEvent(touchEvent);
          }
        };

        _proto.handleTouchesEnd = function handleTouchesEnd(touches) {
          var handleTouches = this.getSetOfTouchesEndOrCancel(touches);

          if (handleTouches.length > 0) {
            // this._glView!._convertTouchesWithScale(handleTouches);
            var touchEvent = new EventTouch(handleTouches, false, EventTouch.ENDED, macro.ENABLE_MULTI_TOUCH ? this._getUsefulTouches() : handleTouches);
            eventManager.dispatchEvent(touchEvent);
          }

          this._preTouchPool.length = 0;
        };

        _proto.handleTouchesCancel = function handleTouchesCancel(touches) {
          var handleTouches = this.getSetOfTouchesEndOrCancel(touches);

          if (handleTouches.length > 0) {
            // this._glView!._convertTouchesWithScale(handleTouches);
            var touchEvent = new EventTouch(handleTouches, false, EventTouch.CANCELLED, macro.ENABLE_MULTI_TOUCH ? this._getUsefulTouches() : handleTouches);
            eventManager.dispatchEvent(touchEvent);
          }

          this._preTouchPool.length = 0;
        };

        _proto.getSetOfTouchesEndOrCancel = function getSetOfTouchesEndOrCancel(touches) {
          var handleTouches = [];
          var locTouches = this._touches;
          var locTouchesIntDict = this._touchesIntegerDict;

          for (var i = 0; i < touches.length; ++i) {
            var touch = touches[i];
            var touchID = touch.getID();

            if (touchID === null) {
              continue;
            }

            var _index3 = locTouchesIntDict[touchID];

            if (_index3 === undefined) {
              // cc.log("if the index doesn't exist, it is an error");
              continue;
            }

            if (locTouches[_index3]) {
              touch.getLocation(_vec2);

              locTouches[_index3].setPoint(_vec2);

              touch.getPreviousLocation(_vec2);

              locTouches[_index3].setPrevPoint(_vec2);

              handleTouches.push(locTouches[_index3]);

              this._removeUsedIndexBit(_index3);

              delete locTouchesIntDict[touchID];
            }
          }

          return handleTouches;
        };

        _proto.getHTMLElementPosition = function getHTMLElementPosition(element) {
          var docElem = document.documentElement;
          var leftOffset = sys.os === sys.OS_IOS && sys.isBrowser ? window.screenLeft : window.pageXOffset;
          leftOffset -= docElem.clientLeft;
          var topOffset = sys.os === sys.OS_IOS && sys.isBrowser ? window.screenTop : window.pageYOffset;
          topOffset -= docElem.clientTop;

          if (element.getBoundingClientRect) {
            var box = element.getBoundingClientRect();
            return {
              left: box.left + leftOffset,
              top: box.top + topOffset,
              width: box.width,
              height: box.height
            };
          } else if (element instanceof HTMLCanvasElement) {
            return {
              left: leftOffset,
              top: topOffset,
              width: element.width,
              height: element.height
            };
          } else {
            return {
              left: leftOffset,
              top: topOffset,
              width: parseInt(element.style.width || '0', undefined),
              height: parseInt(element.style.height || '0', undefined)
            };
          }
        };

        _proto.getPreTouch = function getPreTouch(touch) {
          var preTouch = null;
          var locPreTouchPool = this._preTouchPool;
          var id = touch.getID();

          for (var i = locPreTouchPool.length - 1; i >= 0; i--) {
            if (locPreTouchPool[i].getID() === id) {
              preTouch = locPreTouchPool[i];
              break;
            }
          }

          if (!preTouch) {
            preTouch = touch;
          }

          return preTouch;
        };

        _proto.setPreTouch = function setPreTouch(touch) {
          var find = false;
          var locPreTouchPool = this._preTouchPool;
          var id = touch.getID();

          for (var i = locPreTouchPool.length - 1; i >= 0; i--) {
            if (locPreTouchPool[i].getID() === id) {
              locPreTouchPool[i] = touch;
              find = true;
              break;
            }
          }

          if (!find) {
            if (locPreTouchPool.length <= 50) {
              locPreTouchPool.push(touch);
            } else {
              locPreTouchPool[this._preTouchPoolPointer] = touch;
              this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50;
            }
          }
        };

        _proto.getTouchByXY = function getTouchByXY(event, tx, ty, pos) {
          var locPreTouch = this._preTouchPoint;

          var location = this._glView.convertToLocationInView(tx, ty, pos);

          if (this._pointLocked) {
            location.x = locPreTouch.x + event.movementX;
            location.y = locPreTouch.y - event.movementY;
          }

          var touch = new Touch(location.x, location.y, 0);
          touch.setPrevPoint(locPreTouch.x, locPreTouch.y);
          locPreTouch.x = location.x;
          locPreTouch.y = location.y;
          return touch;
        };

        _proto.getMouseEvent = function getMouseEvent(location, pos, eventType) {
          var locPreMouse = this._prevMousePoint;
          var mouseEvent = new EventMouse(eventType, false, locPreMouse);
          locPreMouse.x = location.x;
          locPreMouse.y = location.y; // this._glView!._convertMouseToLocationInView(locPreMouse, pos);

          this._glView._convertMouseToLocation(locPreMouse, pos);

          mouseEvent.setLocation(locPreMouse.x, locPreMouse.y);
          return mouseEvent;
        };

        _proto.getPointByEvent = function getPointByEvent(event, pos) {
          if (event.pageX != null) {
            // not avalable in <= IE8
            return {
              x: event.pageX,
              y: event.pageY
            };
          }

          pos.left -= document.body.scrollLeft;
          pos.top -= document.body.scrollTop;
          return {
            x: event.clientX,
            y: event.clientY
          };
        };

        _proto.getTouchesByEvent = function getTouchesByEvent(event, position) {
          var touches = [];
          var locView = this._glView;
          var locPreTouch = this._preTouchPoint;
          var length = event.changedTouches.length;

          for (var i = 0; i < length; i++) {
            // const changedTouch = event.changedTouches.item(i);
            var changedTouch = event.changedTouches[i];

            if (!changedTouch) {
              continue;
            }

            var _location = void 0;

            if (sys.BROWSER_TYPE_FIREFOX === sys.browserType) {
              _location = locView.convertToLocationInView(changedTouch.pageX, changedTouch.pageY, position, _vec2);
            } else {
              _location = locView.convertToLocationInView(changedTouch.clientX, changedTouch.clientY, position, _vec2);
            }

            var touch = void 0;

            if (changedTouch.identifier != null) {
              touch = new Touch(_location.x, _location.y, changedTouch.identifier); // use Touch Pool

              this.getPreTouch(touch).getLocation(_preLocation);
              touch.setPrevPoint(_preLocation.x, _preLocation.y);
              this.setPreTouch(touch);
            } else {
              touch = new Touch(_location.x, _location.y);
              touch.setPrevPoint(locPreTouch.x, locPreTouch.y);
            }

            locPreTouch.x = _location.x;
            locPreTouch.y = _location.y;
            touches.push(touch);

            if (!macro.ENABLE_MULTI_TOUCH) {
              break;
            }
          }

          return touches;
        };

        _proto.registerSystemEvent = function registerSystemEvent(element) {
          if (this._isRegisterEvent || !element) {
            return;
          }

          this._glView = legacyCC.view;
          var prohibition = sys.isMobile;
          var supportMouse = sys.capabilities.mouse;
          var supportTouches = sys.capabilities.touches; // Register mouse events.

          if (supportMouse) {
            this._registerMouseEvents(element, prohibition);
          } // Register mouse pointer events.


          if (window.navigator.msPointerEnabled) {
            this._registerMousePointerEvents(element);
          } // Register touch events.


          if (supportTouches) {
            this._registerTouchEvents(element);
          }

          this._registerKeyboardEvent();

          this._isRegisterEvent = true;
        }
        /**
         * Whether enable accelerometer event.
         */
        ;

        _proto.setAccelerometerEnabled = function setAccelerometerEnabled(isEnable) {
          if (this._accelEnabled === isEnable) {
            return;
          }

          this._accelEnabled = isEnable;
          var scheduler = legacyCC.director.getScheduler();
          scheduler.enableForTarget(this);

          if (this._accelEnabled) {
            this._registerAccelerometerEvent();

            this._accelCurTime = 0;
            scheduler.scheduleUpdate(this);
          } else {
            this._unregisterAccelerometerEvent();

            this._accelCurTime = 0;
            scheduler.unscheduleUpdate(this);
          }

          if (JSB || RUNTIME_BASED) {
            // @ts-expect-error
            jsb.device.setMotionEnabled(isEnable);
          }
        };

        _proto.didAccelerate = function didAccelerate(eventData) {
          if (!this._accelEnabled) {
            return;
          }

          var mAcceleration = this._acceleration;
          var x = 0;
          var y = 0;
          var z = 0; // TODO

          if (this._accelDeviceEvent === window.DeviceMotionEvent) {
            var deviceMotionEvent = eventData;
            var eventAcceleration = deviceMotionEvent.accelerationIncludingGravity;

            if (eventAcceleration) {
              x = this._accelMinus * (eventAcceleration.x || 0) * 0.1;
              y = this._accelMinus * (eventAcceleration.y || 0) * 0.1;
              z = (eventAcceleration.z || 0) * 0.1;
            }
          } else {
            var deviceOrientationEvent = eventData;
            x = (deviceOrientationEvent.gamma || 0) / 90 * 0.981;
            y = -((deviceOrientationEvent.beta || 0) / 90) * 0.981;
            z = (deviceOrientationEvent.alpha || 0) / 90 * 0.981;
          }

          if (legacyCC.view._isRotated) {
            var tmp = x;
            x = -y;
            y = tmp;
          }

          mAcceleration.x = x;
          mAcceleration.y = y;
          mAcceleration.z = z;
          mAcceleration.timestamp = eventData.timeStamp || Date.now();
          var tmpX = mAcceleration.x;

          if (window.orientation === LANDSCAPE_RIGHT) {
            mAcceleration.x = -mAcceleration.y;
            mAcceleration.y = tmpX;
          } else if (window.orientation === LANDSCAPE_LEFT) {
            mAcceleration.x = mAcceleration.y;
            mAcceleration.y = -tmpX;
          } else if (window.orientation === PORTRAIT_UPSIDE_DOWN) {
            mAcceleration.x = -mAcceleration.x;
            mAcceleration.y = -mAcceleration.y;
          } // fix android acc values are opposite


          if (legacyCC.sys.os === legacyCC.sys.OS_ANDROID && legacyCC.sys.browserType !== legacyCC.sys.BROWSER_TYPE_MOBILE_QQ) {
            mAcceleration.x = -mAcceleration.x;
            mAcceleration.y = -mAcceleration.y;
          }
        };

        _proto.update = function update(dt) {
          if (this._accelCurTime > this._accelInterval) {
            this._accelCurTime -= this._accelInterval;
            eventManager.dispatchEvent(new EventAcceleration(this._acceleration));
          }

          this._accelCurTime += dt;
        }
        /**
         * set accelerometer interval value
         * @method setAccelerometerInterval
         * @param {Number} interval
         */
        ;

        _proto.setAccelerometerInterval = function setAccelerometerInterval(interval) {
          if (this._accelInterval !== interval) {
            this._accelInterval = interval;

            if (JSB || RUNTIME_BASED) {
              // @ts-expect-error
              if (jsb.device && jsb.device.setMotionInterval) {
                // @ts-expect-error
                jsb.device.setMotionInterval(interval);
              }
            }
          }
        };

        _proto._getUnUsedIndex = function _getUnUsedIndex() {
          var temp = this._indexBitsUsed;
          var now = legacyCC.director.getCurrentTime();

          for (var i = 0; i < this._maxTouches; i++) {
            if (!(temp & 0x00000001)) {
              this._indexBitsUsed |= 1 << i;
              return i;
            } else {
              var touch = this._touches[i];

              if (now - touch.lastModified > TOUCH_TIMEOUT) {
                this._removeUsedIndexBit(i);

                var touchID = touch.getID();

                if (touchID !== null) {
                  delete this._touchesIntegerDict[touchID];
                }

                return i;
              }
            }

            temp >>= 1;
          } // all bits are used


          return -1;
        };

        _proto._removeUsedIndexBit = function _removeUsedIndexBit(index) {
          if (index < 0 || index >= this._maxTouches) {
            return;
          }

          var temp = 1 << index;
          temp = ~temp;
          this._indexBitsUsed &= temp;
        };

        _proto._registerMouseEvents = function _registerMouseEvents(element, prohibition) {
          // HACK
          //  - At the same time to trigger the ontouch event and onmouse event
          //  - The function will execute 2 times
          // The known browser:
          //  liebiao
          //  miui
          this._registerPointerLockEvent();

          if (!prohibition) {
            this._registerWindowMouseEvents(element);
          }

          this._registerElementMouseEvents(element, prohibition);
        };

        _proto._registerPointerLockEvent = function _registerPointerLockEvent() {
          var _this = this;

          var lockChangeAlert = function lockChangeAlert() {
            var canvas = legacyCC.game.canvas; // @ts-expect-error

            if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
              _this._pointLocked = true;
            } else {
              _this._pointLocked = false;
            }
          };

          if ('onpointerlockchange' in document) {
            document.addEventListener('pointerlockchange', lockChangeAlert, false);
          } else if ('onmozpointerlockchange' in document) {
            // @ts-expect-error
            document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
          }
        };

        _proto._registerWindowMouseEvents = function _registerWindowMouseEvents(element) {
          var _this2 = this;

          window.addEventListener('mousedown', function () {
            _this2._mousePressed = true;
          }, false);
          window.addEventListener('mouseup', function (event) {
            if (!_this2._mousePressed) {
              return;
            }

            _this2._mousePressed = false;

            var position = _this2.getHTMLElementPosition(element);

            var location = _this2.getPointByEvent(event, position);

            var positionRect = rect(position.left, position.top, position.width, position.height);

            if (!positionRect.contains(new Vec2(location.x, location.y))) {
              _this2.handleTouchesEnd([_this2.getTouchByXY(event, location.x, location.y, position)]);

              var _mouseEvent = _this2.getMouseEvent(location, position, EventMouse.UP);

              _mouseEvent.setButton(event.button);

              eventManager.dispatchEvent(_mouseEvent);
            }
          }, false);
        };

        _proto._registerElementMouseEvents = function _registerElementMouseEvents(element, prohibition) {
          var _this3 = this;

          // Register canvas mouse events.
          var listenDOMMouseEvent = function listenDOMMouseEvent(eventName, type, handler) {
            element.addEventListener(eventName, function (event) {
              var pos = _this3.getHTMLElementPosition(element);

              var location = _this3.getPointByEvent(event, pos);

              var mouseEvent = _this3.getMouseEvent(location, pos, type);

              mouseEvent.setButton(event.button);
              handler(event, mouseEvent, location, pos);
              eventManager.dispatchEvent(mouseEvent);
              event.stopPropagation();
              event.preventDefault();
            });
          };

          if (!prohibition) {
            listenDOMMouseEvent('mousedown', EventMouse.DOWN, function (event, mouseEvent, location, pos) {
              _this3._mousePressed = true;

              _this3.handleTouchesBegin([_this3.getTouchByXY(event, location.x, location.y, pos)]);

              element.focus();
            });
            listenDOMMouseEvent('mouseup', EventMouse.UP, function (event, mouseEvent, location, pos) {
              _this3._mousePressed = false;

              _this3.handleTouchesEnd([_this3.getTouchByXY(event, location.x, location.y, pos)]);
            });
            listenDOMMouseEvent('mousemove', EventMouse.MOVE, function (event, mouseEvent, location, pos) {
              _this3.handleTouchesMove([_this3.getTouchByXY(event, location.x, location.y, pos)]);

              if (!_this3._mousePressed) {
                mouseEvent.setButton(EventMouse.BUTTON_MISSING);
              }

              if (event.movementX !== undefined && event.movementY !== undefined) {
                mouseEvent.movementX = event.movementX;
                mouseEvent.movementY = event.movementY;
              }
            });
          } // @ts-expect-error


          listenDOMMouseEvent('mousewheel', EventMouse.SCROLL, function (event, mouseEvent, location, pos) {
            // @ts-expect-error
            mouseEvent.setScrollData(0, event.wheelDelta);
          });
          /* firefox fix */
          // @ts-expect-error

          listenDOMMouseEvent('DOMMouseScroll', EventMouse.SCROLL, function (event, mouseEvent, location, pos) {
            mouseEvent.setScrollData(0, event.detail * -120);
          });
        };

        _proto._registerMousePointerEvents = function _registerMousePointerEvents(element) {
          var _this4 = this;

          var _pointerEventsMap = {
            MSPointerDown: this.handleTouchesBegin,
            MSPointerMove: this.handleTouchesMove,
            MSPointerUp: this.handleTouchesEnd,
            MSPointerCancel: this.handleTouchesCancel
          };

          var _loop = function _loop(eventName) {
            var touchEvent = _pointerEventsMap[eventName]; // @ts-expect-error

            element.addEventListener(eventName, function (event) {
              var pos = _this4.getHTMLElementPosition(element);

              pos.left -= document.documentElement.scrollLeft;
              pos.top -= document.documentElement.scrollTop;
              touchEvent.call(_this4, [_this4.getTouchByXY(event, event.clientX, event.clientY, pos)]);
              event.stopPropagation();
            }, false);
          };

          for (var eventName in _pointerEventsMap) {
            _loop(eventName);
          }
        };

        _proto._registerTouchEvents = function _registerTouchEvents(element) {
          var _this5 = this;

          var makeTouchListener = function makeTouchListener(touchesHandler) {
            return function (event) {
              if (!event.changedTouches) {
                return;
              }

              var pos = _this5.getHTMLElementPosition(element);

              var body = document.body;
              pos.left -= body.scrollLeft || 0;
              pos.top -= body.scrollTop || 0;
              touchesHandler(_this5.getTouchesByEvent(event, pos));
              event.stopPropagation();
              event.preventDefault();
            };
          };

          element.addEventListener('touchstart', makeTouchListener(function (touchesToHandle) {
            _this5.handleTouchesBegin(touchesToHandle);

            element.focus();
          }), false);
          element.addEventListener('touchmove', makeTouchListener(function (touchesToHandle) {
            _this5.handleTouchesMove(touchesToHandle);
          }), false);
          element.addEventListener('touchend', makeTouchListener(function (touchesToHandle) {
            _this5.handleTouchesEnd(touchesToHandle);
          }), false);
          element.addEventListener('touchcancel', makeTouchListener(function (touchesToHandle) {
            _this5.handleTouchesCancel(touchesToHandle);
          }), false);
        };

        _proto._registerKeyboardEvent = function _registerKeyboardEvent() {
          var canvas = legacyCC.game.canvas;
          canvas.addEventListener('keydown', function (event) {
            eventManager.dispatchEvent(new EventKeyboard(event, true));
            event.stopPropagation();
            event.preventDefault();
          }, false);
          canvas.addEventListener('keyup', function (event) {
            eventManager.dispatchEvent(new EventKeyboard(event, false));
            event.stopPropagation();
            event.preventDefault();
          }, false);
        };

        _proto._registerAccelerometerEvent = function _registerAccelerometerEvent() {
          var _this6 = this;

          this._acceleration = new Acceleration(); // TODO
          // @ts-expect-error

          this._accelDeviceEvent = window.DeviceMotionEvent || window.DeviceOrientationEvent; // TODO fix DeviceMotionEvent bug on QQ Browser version 4.1 and below.

          if (legacyCC.sys.browserType === legacyCC.sys.BROWSER_TYPE_MOBILE_QQ) {
            // TODO
            // @ts-expect-error
            this._accelDeviceEvent = window.DeviceOrientationEvent;
          }

          var _deviceEventType = // TODO
          this._accelDeviceEvent === window.DeviceMotionEvent ? 'devicemotion' : 'deviceorientation'; // @ts-expect-error


          _didAccelerateFun = function _didAccelerateFun() {
            return _this6.didAccelerate.apply(_this6, arguments);
          };

          window.addEventListener(_deviceEventType, _didAccelerateFun, false);
        };

        _proto._unregisterAccelerometerEvent = function _unregisterAccelerometerEvent() {
          var _deviceEventType = // TODO
          this._accelDeviceEvent === window.DeviceMotionEvent ? 'devicemotion' : 'deviceorientation';

          if (_didAccelerateFun) {
            window.removeEventListener(_deviceEventType, _didAccelerateFun, false);
          }
        };

        _proto._getUsefulTouches = function _getUsefulTouches() {
          var touches = [];
          var touchDict = this._touchesIntegerDict;

          for (var id in touchDict) {
            var _index4 = parseInt(id);

            var usedID = touchDict[_index4];

            if (usedID === undefined || usedID === null) {
              continue;
            }

            var touch = this._touches[usedID];
            touches.push(touch);
          }

          return touches;
        };

        return InputManager;
      }();

      inputManager = new InputManager();

      _export("default", inputManager);

      legacyCC.internal.inputManager = inputManager;
    }
  };
});