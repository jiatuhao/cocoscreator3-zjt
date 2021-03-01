System.register(['./coordinates-converts-utils-fa8f5fc5.js', './event-enum-cb046afa.js'], function (exports) {
  'use strict';
  var getPhaseID, Vec2, _createClass, legacyCC, logID, macro, sys, rect, _inheritsLoose, warnID, log, engineVersion, EDITOR, setDisplayStats, DebugMode, _resetDebugSetting, getError, DeviceInfo, bindingMappingInfo, error, warn, EventTarget, Size, errorID, JSB, RUNTIME_BASED, MINIGAME, Rect, _assertThisInitialized, EventTouch, eventManager, EventMouse, EventAcceleration, EventKeyboard;
  return {
    setters: [function (module) {
      getPhaseID = module.eb;
      Vec2 = module.cv;
      _createClass = module.dS;
      legacyCC = module.l;
      logID = module.c;
      macro = module.dL;
      sys = module.dK;
      rect = module.cK;
      _inheritsLoose = module.dR;
      warnID = module.d;
      log = module.a;
      engineVersion = module.eg;
      EDITOR = module.eh;
      setDisplayStats = module.dH;
      DebugMode = module.dJ;
      _resetDebugSetting = module.ei;
      getError = module.dI;
      DeviceInfo = module.D;
      bindingMappingInfo = module.ej;
      error = module.e;
      warn = module.w;
      EventTarget = module.dz;
      Size = module.cH;
      errorID = module.f;
      JSB = module.ek;
      RUNTIME_BASED = module.el;
      MINIGAME = module.em;
      Rect = module.cJ;
      _assertThisInitialized = module.dV;
    }, function (module) {
      EventTouch = module.a;
      eventManager = module.e;
      EventMouse = module.E;
      EventAcceleration = module.b;
      EventKeyboard = module.c;
    }],
    execute: function () {

      nr.getPhaseID = getPhaseID;
      var RenderPipeline = exports('a', nr.RenderPipeline);
      var RenderFlow = exports('b', nr.RenderFlow);
      var RenderStage = exports('c', nr.RenderStage);
      var ForwardPipeline = exports('F', nr.ForwardPipeline);
      var ForwardFlow = exports('d', nr.ForwardFlow);
      var ForwardStage = exports('e', nr.ForwardStage);
      var ShadowFlow = exports('S', nr.ShadowFlow);
      var ShadowStage = exports('f', nr.ShadowStage);
      var InstancedBuffer = exports('I', nr.InstancedBuffer);
      var PipelineStateManager = exports('P', nr.PipelineStateManager);

      var _vec2 = new Vec2();

      var Touch = exports('T', function () {
        _createClass(Touch, [{
          key: "lastModified",
          get: function get() {
            return this._lastModified;
          }
        }]);

        function Touch(x, y, id) {
          if (id === void 0) {
            id = 0;
          }

          this._point = new Vec2();
          this._prevPoint = new Vec2();
          this._lastModified = 0;
          this._id = 0;
          this._startPoint = new Vec2();
          this._startPointCaptured = false;
          this.setTouchInfo(id, x, y);
        }

        var _proto = Touch.prototype;

        _proto.getLocation = function getLocation(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._point.x, this._point.y);
          return out;
        };

        _proto.getLocationX = function getLocationX() {
          return this._point.x;
        };

        _proto.getLocationY = function getLocationY() {
          return this._point.y;
        };

        _proto.getUILocation = function getUILocation(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._point.x, this._point.y);

          legacyCC.view._convertPointWithScale(out);

          return out;
        };

        _proto.getUILocationX = function getUILocationX() {
          var viewport = legacyCC.view.getViewportRect();
          return (this._point.x - viewport.x) / legacyCC.view.getScaleX();
        };

        _proto.getUILocationY = function getUILocationY() {
          var viewport = legacyCC.view.getViewportRect();
          return (this._point.y - viewport.y) / legacyCC.view.getScaleY();
        };

        _proto.getPreviousLocation = function getPreviousLocation(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._prevPoint.x, this._prevPoint.y);
          return out;
        };

        _proto.getUIPreviousLocation = function getUIPreviousLocation(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._prevPoint.x, this._prevPoint.y);

          legacyCC.view._convertPointWithScale(out);

          return out;
        };

        _proto.getStartLocation = function getStartLocation(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._startPoint.x, this._startPoint.y);
          return out;
        };

        _proto.getUIStartLocation = function getUIStartLocation(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._startPoint.x, this._startPoint.y);

          legacyCC.view._convertPointWithScale(out);

          return out;
        };

        _proto.getDelta = function getDelta(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._point);
          out.subtract(this._prevPoint);
          return out;
        };

        _proto.getUIDelta = function getUIDelta(out) {
          if (!out) {
            out = new Vec2();
          }

          _vec2.set(this._point);

          _vec2.subtract(this._prevPoint);

          out.set(legacyCC.view.getScaleX(), legacyCC.view.getScaleY());
          Vec2.divide(out, _vec2, out);
          return out;
        };

        _proto.getLocationInView = function getLocationInView(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._point.x, legacyCC.view._designResolutionSize.height - this._point.y);
          return out;
        };

        _proto.getPreviousLocationInView = function getPreviousLocationInView(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._prevPoint.x, legacyCC.view._designResolutionSize.height - this._prevPoint.y);
          return out;
        };

        _proto.getStartLocationInView = function getStartLocationInView(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._startPoint.x, legacyCC.view._designResolutionSize.height - this._startPoint.y);
          return out;
        };

        _proto.getID = function getID() {
          return this._id;
        };

        _proto.setTouchInfo = function setTouchInfo(id, x, y) {
          if (id === void 0) {
            id = 0;
          }

          this._prevPoint = this._point;
          this._point = new Vec2(x || 0, y || 0);
          this._id = id;

          if (!this._startPointCaptured) {
            this._startPoint = new Vec2(this._point);
            this._startPointCaptured = true;
          }
        };

        _proto.setPoint = function setPoint(x, y) {
          if (typeof x === 'object') {
            this._point.x = x.x;
            this._point.y = x.y;
          } else {
            this._point.x = x || 0;
            this._point.y = y || 0;
          }

          this._lastModified = legacyCC.director.getCurrentTime();
        };

        _proto.setPrevPoint = function setPrevPoint(x, y) {
          if (typeof x === 'object') {
            this._prevPoint = new Vec2(x.x, x.y);
          } else {
            this._prevPoint = new Vec2(x || 0, y || 0);
          }

          this._lastModified = legacyCC.director.getCurrentTime();
        };

        return Touch;
      }());
      legacyCC.Touch = Touch;

      var TOUCH_TIMEOUT = macro.TOUCH_TIMEOUT;
      var LANDSCAPE_LEFT = -90;
      var PORTRAIT_UPSIDE_DOWN = 180;
      var LANDSCAPE_RIGHT = 90;

      var _didAccelerateFun;

      var _vec2$1 = new Vec2();

      var _preLocation = new Vec2();

      var Acceleration = exports('A', function Acceleration(x, y, z, timestamp) {
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

      var InputManager = function () {
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
              }

              touch.getLocation(_vec2$1);
              var curTouch = new Touch(_vec2$1.x, _vec2$1.y, touchID);
              this._touches[unusedIndex] = curTouch;
              touch.getPreviousLocation(_vec2$1);
              curTouch.setPrevPoint(_vec2$1);
              locTouchIntDict[touchID] = unusedIndex;
              handleTouches.push(curTouch);
            }
          }

          if (handleTouches.length > 0) {
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
              continue;
            }

            if (locTouches[_index2]) {
              touch.getLocation(_vec2$1);

              locTouches[_index2].setPoint(_vec2$1);

              touch.getPreviousLocation(_vec2$1);

              locTouches[_index2].setPrevPoint(_vec2$1);

              handleTouches.push(locTouches[_index2]);
            }
          }

          if (handleTouches.length > 0) {
            var touchEvent = new EventTouch(handleTouches, false, EventTouch.MOVED, macro.ENABLE_MULTI_TOUCH ? this._getUsefulTouches() : handleTouches);
            eventManager.dispatchEvent(touchEvent);
          }
        };

        _proto.handleTouchesEnd = function handleTouchesEnd(touches) {
          var handleTouches = this.getSetOfTouchesEndOrCancel(touches);

          if (handleTouches.length > 0) {
            var touchEvent = new EventTouch(handleTouches, false, EventTouch.ENDED, macro.ENABLE_MULTI_TOUCH ? this._getUsefulTouches() : handleTouches);
            eventManager.dispatchEvent(touchEvent);
          }

          this._preTouchPool.length = 0;
        };

        _proto.handleTouchesCancel = function handleTouchesCancel(touches) {
          var handleTouches = this.getSetOfTouchesEndOrCancel(touches);

          if (handleTouches.length > 0) {
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
              continue;
            }

            if (locTouches[_index3]) {
              touch.getLocation(_vec2$1);

              locTouches[_index3].setPoint(_vec2$1);

              touch.getPreviousLocation(_vec2$1);

              locTouches[_index3].setPrevPoint(_vec2$1);

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
          locPreMouse.y = location.y;

          this._glView._convertMouseToLocation(locPreMouse, pos);

          mouseEvent.setLocation(locPreMouse.x, locPreMouse.y);
          return mouseEvent;
        };

        _proto.getPointByEvent = function getPointByEvent(event, pos) {
          if (event.pageX != null) {
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
            var changedTouch = event.changedTouches[i];

            if (!changedTouch) {
              continue;
            }

            var _location = void 0;

            if (sys.BROWSER_TYPE_FIREFOX === sys.browserType) {
              _location = locView.convertToLocationInView(changedTouch.pageX, changedTouch.pageY, position, _vec2$1);
            } else {
              _location = locView.convertToLocationInView(changedTouch.clientX, changedTouch.clientY, position, _vec2$1);
            }

            var touch = void 0;

            if (changedTouch.identifier != null) {
              touch = new Touch(_location.x, _location.y, changedTouch.identifier);
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
          var supportTouches = sys.capabilities.touches;

          if (supportMouse) {
            this._registerMouseEvents(element, prohibition);
          }

          if (window.navigator.msPointerEnabled) {
            this._registerMousePointerEvents(element);
          }

          if (supportTouches) {
            this._registerTouchEvents(element);
          }

          this._registerKeyboardEvent();

          this._isRegisterEvent = true;
        };

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

          {
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
          var z = 0;

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
          }

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
        };

        _proto.setAccelerometerInterval = function setAccelerometerInterval(interval) {
          if (this._accelInterval !== interval) {
            this._accelInterval = interval;

            {
              if (jsb.device && jsb.device.setMotionInterval) {
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
          }

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
          this._registerPointerLockEvent();

          if (!prohibition) {
            this._registerWindowMouseEvents(element);
          }

          this._registerElementMouseEvents(element, prohibition);
        };

        _proto._registerPointerLockEvent = function _registerPointerLockEvent() {
          var _this = this;

          var lockChangeAlert = function lockChangeAlert() {
            var canvas = legacyCC.game.canvas;

            if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
              _this._pointLocked = true;
            } else {
              _this._pointLocked = false;
            }
          };

          if ('onpointerlockchange' in document) {
            document.addEventListener('pointerlockchange', lockChangeAlert, false);
          } else if ('onmozpointerlockchange' in document) {
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
          }

          listenDOMMouseEvent('mousewheel', EventMouse.SCROLL, function (event, mouseEvent, location, pos) {
            mouseEvent.setScrollData(0, event.wheelDelta);
          });
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
            var touchEvent = _pointerEventsMap[eventName];
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

          this._acceleration = new Acceleration();
          this._accelDeviceEvent = window.DeviceMotionEvent || window.DeviceOrientationEvent;

          if (legacyCC.sys.browserType === legacyCC.sys.BROWSER_TYPE_MOBILE_QQ) {
            this._accelDeviceEvent = window.DeviceOrientationEvent;
          }

          var _deviceEventType = this._accelDeviceEvent === window.DeviceMotionEvent ? 'devicemotion' : 'deviceorientation';

          _didAccelerateFun = function _didAccelerateFun() {
            return _this6.didAccelerate.apply(_this6, arguments);
          };

          window.addEventListener(_deviceEventType, _didAccelerateFun, false);
        };

        _proto._unregisterAccelerometerEvent = function _unregisterAccelerometerEvent() {
          var _deviceEventType = this._accelDeviceEvent === window.DeviceMotionEvent ? 'devicemotion' : 'deviceorientation';

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

      var inputManager = exports('i', new InputManager());
      legacyCC.internal.inputManager = inputManager;

      var Game = exports('G', function (_EventTarget) {
        _inheritsLoose(Game, _EventTarget);

        function Game() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _EventTarget.call.apply(_EventTarget, [this].concat(args)) || this;
          _this.frame = null;
          _this.container = null;
          _this.canvas = null;
          _this.renderType = -1;
          _this.eventTargetOn = _EventTarget.prototype.on;
          _this.eventTargetOnce = _EventTarget.prototype.once;
          _this.config = {};
          _this.onStart = null;
          _this.collisionMatrix = [];
          _this.groupList = [];
          _this._persistRootNodes = {};
          _this._paused = true;
          _this._configLoaded = false;
          _this._isCloning = false;
          _this._inited = false;
          _this._engineInited = false;
          _this._rendererInitialized = false;
          _this._gfxDevice = null;
          _this._intervalId = null;
          return _this;
        }

        var _proto = Game.prototype;

        _proto.setFrameRate = function setFrameRate(frameRate) {
          var config = this.config;

          if (typeof frameRate !== 'number') {
            frameRate = parseInt(frameRate, 10);

            if (Number.isNaN(frameRate)) {
              frameRate = 60;
            }
          }

          config.frameRate = frameRate;
          this._paused = true;

          this._setAnimFrame();

          this._runMainLoop();
        };

        _proto.getFrameRate = function getFrameRate() {
          return this.config.frameRate || 0;
        };

        _proto.step = function step() {
          legacyCC.director.mainLoop();
        };

        _proto.pause = function pause() {
          if (this._paused) {
            return;
          }

          this._paused = true;

          if (this._intervalId) {
            window.cAF(this._intervalId);
            this._intervalId = 0;
          }
        };

        _proto.resume = function resume() {
          if (!this._paused) {
            return;
          }

          this._runMainLoop();
        };

        _proto.isPaused = function isPaused() {
          return this._paused;
        };

        _proto.restart = function restart() {
          var _this2 = this;

          var afterDrawPromise = new Promise(function (resolve) {
            return legacyCC.director.once(legacyCC.Director.EVENT_AFTER_DRAW, function () {
              return resolve();
            });
          });
          return afterDrawPromise.then(function () {
            for (var id in _this2._persistRootNodes) {
              _this2.removePersistRootNode(_this2._persistRootNodes[id]);
            }

            legacyCC.director.getScene().destroy();

            legacyCC.Object._deferredDestroy();

            legacyCC.director.reset();

            _this2.pause();

            return _this2._setRenderPipelineNShowSplash().then(function () {
              _this2.resume();

              _this2._safeEmit(Game.EVENT_RESTART);
            });
          });
        };

        _proto.end = function end() {
          if (this._gfxDevice) {
            this._gfxDevice.destroy();

            this._gfxDevice = null;
          }

          window.close();
        };

        _proto.on = function on(type, callback, target, once) {
          if (this._engineInited && type === Game.EVENT_ENGINE_INITED) {
            return callback.call(target);
          }

          return this.eventTargetOn(type, callback, target, once);
        };

        _proto.once = function once(type, callback, target) {
          if (this._engineInited && type === Game.EVENT_ENGINE_INITED) {
            return callback.call(target);
          }

          return this.eventTargetOnce(type, callback, target);
        };

        _proto.init = function init(config) {
          var _this3 = this;

          this._initConfig(config);

          if (this.config.assetOptions) {
            legacyCC.assetManager.init(this.config.assetOptions);
          }

          return this._initEngine().then(function () {
            {
              _this3._initEvents();
            }

            if (legacyCC.director.root.dataPoolManager) {
              legacyCC.director.root.dataPoolManager.jointTexturePool.registerCustomTextureLayouts(config.customJointTextureLayouts);
            }

            return _this3._engineInited;
          });
        };

        _proto.run = function run(configOrCallback, onStart) {
          var _this4 = this;

          var initPromise;

          if (typeof configOrCallback !== 'function' && configOrCallback) {
            initPromise = this.init(configOrCallback);
            this.onStart = onStart !== null && onStart !== void 0 ? onStart : null;
          } else {
            this.onStart = configOrCallback !== null && configOrCallback !== void 0 ? configOrCallback : null;
          }

          return Promise.resolve(initPromise).then(function () {
            if ( game.config.registerSystemEvent) {
              inputManager.registerSystemEvent(game.canvas);
            }

            return _this4._setRenderPipelineNShowSplash();
          });
        };

        _proto.addPersistRootNode = function addPersistRootNode(node) {
          if (!legacyCC.Node.isNode(node) || !node.uuid) {
            warnID(3800);
            return;
          }

          var id = node.uuid;

          if (!this._persistRootNodes[id]) {
            var scene = legacyCC.director._scene;

            if (legacyCC.isValid(scene)) {
              if (!node.parent) {
                node.parent = scene;
              } else if (!(node.parent instanceof legacyCC.Scene)) {
                warnID(3801);
                return;
              } else if (node.parent !== scene) {
                warnID(3802);
                return;
              }
            }

            this._persistRootNodes[id] = node;
            node._persistNode = true;

            legacyCC.assetManager._releaseManager._addPersistNodeRef(node);
          }
        };

        _proto.removePersistRootNode = function removePersistRootNode(node) {
          var id = node.uuid || '';

          if (node === this._persistRootNodes[id]) {
            delete this._persistRootNodes[id];
            node._persistNode = false;

            legacyCC.assetManager._releaseManager._removePersistNodeRef(node);
          }
        };

        _proto.isPersistRootNode = function isPersistRootNode(node) {
          return !!node._persistNode;
        };

        _proto._initEngine = function _initEngine() {
          var _this5 = this;

          this._initDevice();

          return Promise.resolve(legacyCC.director._init()).then(function () {
            log("Cocos Creator v" + engineVersion);

            _this5.emit(Game.EVENT_ENGINE_INITED);

            _this5._engineInited = true;
            legacyCC.internal.dynamicAtlasManager.enabled = !macro.CLEANUP_IMAGE_CACHE;
          });
        };

        _proto._setAnimFrame = function _setAnimFrame() {
          this._lastTime = performance.now();
          var frameRate = this.config.frameRate;
          this._frameTime = 1000 / frameRate;

          {
            jsb.setPreferredFramesPerSecond(frameRate);
            window.rAF = window.requestAnimationFrame;
            window.cAF = window.cancelAnimationFrame;
          }
        };

        _proto._stTimeWithRAF = function _stTimeWithRAF(callback) {
          var currTime = performance.now();
          var elapseTime = Math.max(0, currTime - game._lastTime);
          var timeToCall = Math.max(0, game._frameTime - elapseTime);
          var id = window.setTimeout(function () {
            window.requestAnimationFrame(callback);
          }, timeToCall);
          game._lastTime = currTime + timeToCall;
          return id;
        };

        _proto._stTime = function _stTime(callback) {
          var currTime = performance.now();
          var elapseTime = Math.max(0, currTime - game._lastTime);
          var timeToCall = Math.max(0, game._frameTime - elapseTime);
          var id = window.setTimeout(callback, timeToCall);
          game._lastTime = currTime + timeToCall;
          return id;
        };

        _proto._ctTime = function _ctTime(id) {
          window.clearTimeout(id);
        };

        _proto._runMainLoop = function _runMainLoop() {
          var _this6 = this;

          if (!this._inited || EDITOR ) {
            return;
          }

          var config = this.config;
          var director = legacyCC.director;
          var frameRate = config.frameRate;
          setDisplayStats(!!config.showFPS);
          director.startAnimation();

          var _callback2;

          {
            _callback2 = function _callback(time) {
              _this6._intervalId = window.rAF(_callback2);
              director.mainLoop(time);
            };
          }

          if (this._intervalId) {
            window.cAF(this._intervalId);
            this._intervalId = 0;
          }

          this._intervalId = window.rAF(_callback2);
          this._paused = false;
        };

        _proto._initConfig = function _initConfig(config) {
          if (typeof config.debugMode !== 'number') {
            config.debugMode = DebugMode.NONE;
          }

          config.exposeClassName = !!config.exposeClassName;

          if (typeof config.frameRate !== 'number') {
            config.frameRate = 60;
          }

          var renderMode = config.renderMode;

          if (typeof renderMode !== 'number' || renderMode > 2 || renderMode < 0) {
            config.renderMode = 0;
          }

          if (typeof config.registerSystemEvent !== 'boolean') {
            config.registerSystemEvent = true;
          }

          config.showFPS = !!config.showFPS;
          this.collisionMatrix = config.collisionMatrix || [];
          this.groupList = config.groupList || [];

          _resetDebugSetting(config.debugMode);

          this.config = config;
          this._configLoaded = true;

          this._setAnimFrame();
        };

        _proto._determineRenderType = function _determineRenderType() {
          var config = this.config;
          var userRenderMode = parseInt(config.renderMode, 10);
          this.renderType = Game.RENDER_TYPE_CANVAS;
          var supportRender = false;

          if (userRenderMode === 0) {
            if (legacyCC.sys.capabilities.opengl) {
              this.renderType = Game.RENDER_TYPE_WEBGL;
              supportRender = true;
            } else if (legacyCC.sys.capabilities.canvas) {
              this.renderType = Game.RENDER_TYPE_CANVAS;
              supportRender = true;
            }
          } else if (userRenderMode === 1 && legacyCC.sys.capabilities.canvas) {
            this.renderType = Game.RENDER_TYPE_CANVAS;
            supportRender = true;
          } else if (userRenderMode === 2 && legacyCC.sys.capabilities.opengl) {
            this.renderType = Game.RENDER_TYPE_WEBGL;
            supportRender = true;
          }

          if (!supportRender) {
            throw new Error(getError(3820, userRenderMode));
          }
        };

        _proto._initDevice = function _initDevice() {
          if (this._rendererInitialized) {
            return;
          }

          this.canvas = this.config.adapter.canvas;
          this.frame = this.config.adapter.frame;
          this.container = this.config.adapter.container;

          this._determineRenderType();

          if (this.renderType === Game.RENDER_TYPE_WEBGL) {
            var ctors = [];

            if ( window.gfx) {
              var os = sys.os;

              if (os === sys.OS_OSX || os === sys.OS_IOS) {
                if (gfx.CCMTLDevice) {
                  ctors.push(gfx.CCMTLDevice);
                }

                if (gfx.GLES3Device) {
                  ctors.push(gfx.GLES3Device);
                }
              } else {
                if (gfx.GLES3Device) {
                  ctors.push(gfx.GLES3Device);
                }

                if (gfx.CCVKDevice) {
                  ctors.push(gfx.CCVKDevice);
                }

                if (gfx.GLES2Device) {
                  ctors.push(gfx.GLES2Device);
                }
              }
            } else {
              var useWebGL2 = !!window.WebGL2RenderingContext;
              var userAgent = window.navigator.userAgent.toLowerCase();

              if (userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1 || sys.browserType === sys.BROWSER_TYPE_UC) {
                  useWebGL2 = false;
                }

              if (useWebGL2 && legacyCC.WebGL2Device) {
                ctors.push(legacyCC.WebGL2Device);
              }

              if (legacyCC.WebGLDevice) {
                ctors.push(legacyCC.WebGLDevice);
              }
            }

            var opts = new DeviceInfo(this.canvas,  macro.ENABLE_WEBGL_ANTIALIAS, false, window.devicePixelRatio, sys.windowPixelResolution.width, sys.windowPixelResolution.height, bindingMappingInfo);

            for (var i = 0; i < ctors.length; i++) {
              this._gfxDevice = new ctors[i]();

              if (this._gfxDevice.initialize(opts)) {
                break;
              }
            }
          }

          if (!this._gfxDevice) {
            error('can not support canvas rendering in 3D');
            this.renderType = Game.RENDER_TYPE_CANVAS;
            return;
          }

          this.canvas.oncontextmenu = function () {
            return false;
          };
        };

        _proto._initEvents = function _initEvents() {
          var _this7 = this;

          var win = window;
          var hiddenPropName;

          if (typeof document.hidden !== 'undefined') {
            hiddenPropName = 'hidden';
          } else if (typeof document.mozHidden !== 'undefined') {
            hiddenPropName = 'mozHidden';
          } else if (typeof document.msHidden !== 'undefined') {
            hiddenPropName = 'msHidden';
          } else if (typeof document.webkitHidden !== 'undefined') {
            hiddenPropName = 'webkitHidden';
          }

          var hidden = false;
          var me = this;

          function onHidden() {
            if (!hidden) {
              hidden = true;
              me.emit(Game.EVENT_HIDE);
            }
          }

          function onShown(arg0, arg1, arg2, arg3, arg4) {
            if (hidden) {
              hidden = false;
              me.emit(Game.EVENT_SHOW, arg0, arg1, arg2, arg3, arg4);
            }
          }

          if (hiddenPropName) {
            var changeList = ['visibilitychange', 'mozvisibilitychange', 'msvisibilitychange', 'webkitvisibilitychange', 'qbrowserVisibilityChange'];

            for (var i = 0; i < changeList.length; i++) {
              document.addEventListener(changeList[i], function (event) {
                var visible = document[hiddenPropName];
                visible = visible || event.hidden;

                if (visible) {
                  onHidden();
                } else {
                  onShown();
                }
              });
            }
          } else {
            win.addEventListener('blur', onHidden);
            win.addEventListener('focus', onShown);
          }

          if (window.navigator.userAgent.indexOf('MicroMessenger') > -1) {
            win.onfocus = onShown;
          }

          if ('onpageshow' in window && 'onpagehide' in window) {
            win.addEventListener('pagehide', onHidden);
            win.addEventListener('pageshow', onShown);
            document.addEventListener('pagehide', onHidden);
            document.addEventListener('pageshow', onShown);
          }

          this.on(Game.EVENT_HIDE, function () {
            _this7.pause();
          });
          this.on(Game.EVENT_SHOW, function () {
            _this7.resume();
          });
        };

        _proto._setRenderPipelineNShowSplash = function _setRenderPipelineNShowSplash() {
          var _this8 = this;

          return Promise.resolve(this._setupRenderPipeline()).then(function () {
            return Promise.resolve(_this8._showSplashScreen()).then(function () {
              _this8._inited = true;

              _this8._setAnimFrame();

              _this8._runMainLoop();

              _this8._safeEmit(Game.EVENT_GAME_INITED);

              if (_this8.onStart) {
                _this8.onStart();
              }
            });
          });
        };

        _proto._setupRenderPipeline = function _setupRenderPipeline() {
          var _this9 = this;

          var renderPipeline = this.config.renderPipeline;

          if (!renderPipeline) {
            return this._setRenderPipeline();
          }

          return new Promise(function (resolve, reject) {
            legacyCC.assetManager.loadAny(renderPipeline, function (err, asset) {
              return err || !(asset instanceof RenderPipeline) ? reject(err) : resolve(asset);
            });
          }).then(function (asset) {
            _this9._setRenderPipeline(asset);
          })["catch"](function (reason) {
            warn(reason);
            warn("Failed load render pipeline: " + renderPipeline + ", engine failed to initialize, will fallback to default pipeline");

            _this9._setRenderPipeline();
          });
        };

        _proto._showSplashScreen = function _showSplashScreen() {

          return null;
        };

        _proto._setRenderPipeline = function _setRenderPipeline(rppl) {
          if (!legacyCC.director.root.setRenderPipeline(rppl)) {
            this._setRenderPipeline();
          }

          this._rendererInitialized = true;

          this._safeEmit(Game.EVENT_RENDERER_INITED);
        };

        _proto._safeEmit = function _safeEmit(event) {
          {
            this.emit(event);
          }
        };

        _createClass(Game, [{
          key: "inited",
          get: function get() {
            return this._inited;
          }
        }, {
          key: "frameTime",
          get: function get() {
            return this._frameTime;
          }
        }]);

        return Game;
      }(EventTarget));
      Game.EVENT_HIDE = 'game_on_hide';
      Game.EVENT_SHOW = 'game_on_show';
      Game.EVENT_LOW_MEMORY = 'game_on_low_memory';
      Game.EVENT_GAME_INITED = 'game_inited';
      Game.EVENT_ENGINE_INITED = 'engine_inited';
      Game.EVENT_RENDERER_INITED = 'renderer_inited';
      Game.EVENT_RESTART = 'game_on_restart';
      Game.RENDER_TYPE_CANVAS = 0;
      Game.RENDER_TYPE_WEBGL = 1;
      Game.RENDER_TYPE_OPENGL = 2;
      legacyCC.Game = Game;
      var game = exports('g', legacyCC.game = new Game());

      var visibleRect = exports('h', {
        topLeft: legacyCC.v2(0, 0),
        topRight: legacyCC.v2(0, 0),
        top: legacyCC.v2(0, 0),
        bottomLeft: legacyCC.v2(0, 0),
        bottomRight: legacyCC.v2(0, 0),
        bottom: legacyCC.v2(0, 0),
        center: legacyCC.v2(0, 0),
        left: legacyCC.v2(0, 0),
        right: legacyCC.v2(0, 0),
        width: 0,
        height: 0,
        init: function init(visibleRect_) {
          var w = this.width = visibleRect_.width;
          var h = this.height = visibleRect_.height;
          var l = visibleRect_.x;
          var b = visibleRect_.y;
          var t = b + h;
          var r = l + w;
          this.topLeft.x = l;
          this.topLeft.y = t;
          this.topRight.x = r;
          this.topRight.y = t;
          this.top.x = l + w / 2;
          this.top.y = t;
          this.bottomLeft.x = l;
          this.bottomLeft.y = b;
          this.bottomRight.x = r;
          this.bottomRight.y = b;
          this.bottom.x = l + w / 2;
          this.bottom.y = b;
          this.center.x = l + w / 2;
          this.center.y = b + h / 2;
          this.left.x = l;
          this.left.y = b + h / 2;
          this.right.x = r;
          this.right.y = b + h / 2;
        }
      });
      legacyCC.visibleRect = visibleRect;

      var BrowserGetter = function () {
        function BrowserGetter() {
          this.html = void 0;
          this.meta = {
            width: 'device-width'
          };
          this.adaptationType = legacyCC.sys.browserType;
        }

        var _proto = BrowserGetter.prototype;

        _proto.init = function init() {
          {
            this.html = document.getElementsByTagName('html')[0];
          }
        };

        _proto.availWidth = function availWidth(frame) {
          if (legacyCC.sys.isMobile || !frame || frame === this.html) {
            return window.innerWidth;
          } else {
            return frame.clientWidth;
          }
        };

        _proto.availHeight = function availHeight(frame) {
          if (legacyCC.sys.isMobile || !frame || frame === this.html) {
            return window.innerHeight;
          } else {
            return frame.clientHeight;
          }
        };

        return BrowserGetter;
      }();

      var __BrowserGetter = new BrowserGetter();

      if (legacyCC.sys.os === legacyCC.sys.OS_IOS) {
        __BrowserGetter.adaptationType = legacyCC.sys.BROWSER_TYPE_SAFARI;
      }

      switch (__BrowserGetter.adaptationType) {
        case legacyCC.sys.BROWSER_TYPE_SAFARI:
          {
            __BrowserGetter.meta['minimal-ui'] = 'true';

            __BrowserGetter.availWidth = function (frame) {
              return frame.clientWidth;
            };

            __BrowserGetter.availHeight = function (frame) {
              return frame.clientHeight;
            };

            break;
          }

        case legacyCC.sys.BROWSER_TYPE_SOUGOU:
          {
            __BrowserGetter.availWidth = function (frame) {
              return frame.clientWidth;
            };

            __BrowserGetter.availHeight = function (frame) {
              return frame.clientHeight;
            };

            break;
          }

        case legacyCC.sys.BROWSER_TYPE_UC:
          {
            __BrowserGetter.availWidth = function (frame) {
              return frame.clientWidth;
            };

            __BrowserGetter.availHeight = function (frame) {
              return frame.clientHeight;
            };

            break;
          }
      }

      var View = exports('V', function (_EventTarget) {
        _inheritsLoose(View, _EventTarget);

        function View() {
          var _this;

          _this = _EventTarget.call(this) || this;
          _this._resizeWithBrowserSize = void 0;
          _this._designResolutionSize = void 0;
          _this._originalDesignResolutionSize = void 0;
          _this._frameSize = void 0;
          _this._scaleX = void 0;
          _this._scaleY = void 0;
          _this._viewportRect = void 0;
          _this._visibleRect = void 0;
          _this._autoFullScreen = void 0;
          _this._devicePixelRatio = void 0;
          _this._maxPixelRatio = void 0;
          _this._retinaEnabled = void 0;
          _this._resizeCallback = void 0;
          _this._resizing = void 0;
          _this._orientationChanging = void 0;
          _this._isRotated = void 0;
          _this._orientation = void 0;
          _this._isAdjustViewport = void 0;
          _this._resolutionPolicy = void 0;
          _this._rpExactFit = void 0;
          _this._rpShowAll = void 0;
          _this._rpNoBorder = void 0;
          _this._rpFixedHeight = void 0;
          _this._rpFixedWidth = void 0;
          var _strategyer = ContainerStrategy;
          var _strategy = ContentStrategy;
          _this._frameSize = new Size(0, 0);
          _this._designResolutionSize = new Size(0, 0);
          _this._originalDesignResolutionSize = new Size(0, 0);
          _this._scaleX = 1;
          _this._scaleY = 1;
          _this._viewportRect = new Rect(0, 0, 0, 0);
          _this._visibleRect = new Rect(0, 0, 0, 0);
          _this._autoFullScreen = false;
          _this._devicePixelRatio = 1;

          {
            _this._maxPixelRatio = 4;
          }

          _this._retinaEnabled = false;
          _this._resizeCallback = null;
          _this._resizing = false;
          _this._resizeWithBrowserSize = false;
          _this._orientationChanging = true;
          _this._isRotated = false;
          _this._orientation = legacyCC.macro.ORIENTATION_AUTO;
          _this._isAdjustViewport = true;
          _this._rpExactFit = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
          _this._rpShowAll = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.SHOW_ALL);
          _this._rpNoBorder = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.NO_BORDER);
          _this._rpFixedHeight = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
          _this._rpFixedWidth = new ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
          _this._resolutionPolicy = _this._rpShowAll;
          legacyCC.game.once(legacyCC.Game.EVENT_ENGINE_INITED, _this.init, _assertThisInitialized(_this));
          return _this;
        }

        var _proto2 = View.prototype;

        _proto2.init = function init() {
          __BrowserGetter.init();

          this._initFrameSize();

          var w = legacyCC.game.canvas.width;
          var h = legacyCC.game.canvas.height;
          this._designResolutionSize.width = w;
          this._designResolutionSize.height = h;
          this._originalDesignResolutionSize.width = w;
          this._originalDesignResolutionSize.height = h;
          this._viewportRect.width = w;
          this._viewportRect.height = h;
          this._visibleRect.width = w;
          this._visibleRect.height = h;
          legacyCC.winSize.width = this._visibleRect.width;
          legacyCC.winSize.height = this._visibleRect.height;

          if (legacyCC.visibleRect) {
            legacyCC.visibleRect.init(this._visibleRect);
          }
        };

        _proto2.resizeWithBrowserSize = function resizeWithBrowserSize(enabled) {
          if (enabled) {
            if (!this._resizeWithBrowserSize) {
              this._resizeWithBrowserSize = true;
              window.addEventListener('resize', this._resizeEvent);
              window.addEventListener('orientationchange', this._orientationChange);
            }
          } else if (this._resizeWithBrowserSize) {
            this._resizeWithBrowserSize = false;
            window.removeEventListener('resize', this._resizeEvent);
            window.removeEventListener('orientationchange', this._orientationChange);
          }
        };

        _proto2.setResizeCallback = function setResizeCallback(callback) {
          if (typeof callback === 'function' || callback == null) {
            this._resizeCallback = callback;
          }
        };

        _proto2.setOrientation = function setOrientation(orientation) {
          orientation &= legacyCC.macro.ORIENTATION_AUTO;

          if (orientation && this._orientation !== orientation) {
            this._orientation = orientation;
          }
        };

        _proto2.adjustViewportMeta = function adjustViewportMeta(enabled) {
          this._isAdjustViewport = enabled;
        };

        _proto2.enableRetina = function enableRetina(enabled) {
          this._retinaEnabled = !!enabled;
        };

        _proto2.isRetinaEnabled = function isRetinaEnabled() {
          return this._retinaEnabled;
        };

        _proto2.enableAutoFullScreen = function enableAutoFullScreen(enabled) {
          if (enabled && enabled !== this._autoFullScreen && legacyCC.sys.isMobile && legacyCC.sys.browserType !== legacyCC.sys.BROWSER_TYPE_WECHAT) {
            this._autoFullScreen = true;
            legacyCC.screen.autoFullScreen(legacyCC.game.frame);
          } else {
            this._autoFullScreen = false;
          }
        };

        _proto2.isAutoFullScreenEnabled = function isAutoFullScreenEnabled() {
          return this._autoFullScreen;
        };

        _proto2.setCanvasSize = function setCanvasSize(width, height) {
          var canvas = legacyCC.game.canvas;
          var container = legacyCC.game.container;
          this._devicePixelRatio = window.devicePixelRatio;
          canvas.width = sys.windowPixelResolution.width;
          canvas.height = sys.windowPixelResolution.height;
          canvas.style.width = width + "px";
          canvas.style.height = height + "px";
          container.style.width = width + "px";
          container.style.height = height + "px";

          this._resizeEvent();
        };

        _proto2.getCanvasSize = function getCanvasSize() {
          return new Size(legacyCC.game.canvas.width, legacyCC.game.canvas.height);
        };

        _proto2.getFrameSize = function getFrameSize() {
          return new Size(this._frameSize.width, this._frameSize.height);
        };

        _proto2.setFrameSize = function setFrameSize(width, height) {
          this._frameSize.width = width;
          this._frameSize.height = height;
          legacyCC.game.frame.style.width = width + "px";
          legacyCC.game.frame.style.height = height + "px";

          this._resizeEvent();
        };

        _proto2.getVisibleSize = function getVisibleSize() {
          return new Size(this._visibleRect.width, this._visibleRect.height);
        };

        _proto2.getVisibleSizeInPixel = function getVisibleSizeInPixel() {
          return new Size(this._visibleRect.width * this._scaleX, this._visibleRect.height * this._scaleY);
        };

        _proto2.getVisibleOrigin = function getVisibleOrigin() {
          return new Vec2(this._visibleRect.x, this._visibleRect.y);
        };

        _proto2.getVisibleOriginInPixel = function getVisibleOriginInPixel() {
          return new Vec2(this._visibleRect.x * this._scaleX, this._visibleRect.y * this._scaleY);
        };

        _proto2.getResolutionPolicy = function getResolutionPolicy() {
          return this._resolutionPolicy;
        };

        _proto2.setResolutionPolicy = function setResolutionPolicy(resolutionPolicy) {
          if (resolutionPolicy instanceof ResolutionPolicy) {
            this._resolutionPolicy = resolutionPolicy;
          } else {
            var _locPolicy = ResolutionPolicy;

            if (resolutionPolicy === _locPolicy.EXACT_FIT) {
              this._resolutionPolicy = this._rpExactFit;
            }

            if (resolutionPolicy === _locPolicy.SHOW_ALL) {
              this._resolutionPolicy = this._rpShowAll;
            }

            if (resolutionPolicy === _locPolicy.NO_BORDER) {
              this._resolutionPolicy = this._rpNoBorder;
            }

            if (resolutionPolicy === _locPolicy.FIXED_HEIGHT) {
              this._resolutionPolicy = this._rpFixedHeight;
            }

            if (resolutionPolicy === _locPolicy.FIXED_WIDTH) {
              this._resolutionPolicy = this._rpFixedWidth;
            }
          }
        };

        _proto2.setDesignResolutionSize = function setDesignResolutionSize(width, height, resolutionPolicy) {
          if (!(width > 0 && height > 0)) {
            errorID(2200);
            return;
          }

          this.setResolutionPolicy(resolutionPolicy);
          var policy = this._resolutionPolicy;

          if (policy) {
            policy.preApply(this);
          }

          if (legacyCC.sys.isMobile) {
            this._adjustViewportMeta();
          }

          this._orientationChanging = true;

          if (!this._resizing) {
            this._initFrameSize();
          }

          if (!policy) {
            logID(2201);
            return;
          }

          this._originalDesignResolutionSize.width = this._designResolutionSize.width = width;
          this._originalDesignResolutionSize.height = this._designResolutionSize.height = height;
          var result = policy.apply(this, this._designResolutionSize);

          if (result.scale && result.scale.length === 2) {
            this._scaleX = result.scale[0];
            this._scaleY = result.scale[1];
          }

          if (result.viewport) {
            var vp = this._viewportRect;
            var vb = this._visibleRect;
            var rv = result.viewport;
            vp.x = rv.x;
            vp.y = rv.y;
            vp.width = rv.width;
            vp.height = rv.height;
            vb.x = 0;
            vb.y = 0;
            vb.width = rv.width / this._scaleX;
            vb.height = rv.height / this._scaleY;
          }

          policy.postApply(this);
          legacyCC.winSize.width = this._visibleRect.width;
          legacyCC.winSize.height = this._visibleRect.height;

          if (visibleRect) {
            visibleRect.init(this._visibleRect);
          }

          this.emit('design-resolution-changed');
        };

        _proto2.getDesignResolutionSize = function getDesignResolutionSize() {
          return new Size(this._designResolutionSize.width, this._designResolutionSize.height);
        };

        _proto2.setRealPixelResolution = function setRealPixelResolution(width, height, resolutionPolicy) {

          this.setDesignResolutionSize(width, height, resolutionPolicy);
        };

        _proto2.getViewportRect = function getViewportRect() {
          return this._viewportRect;
        };

        _proto2.getScaleX = function getScaleX() {
          return this._scaleX;
        };

        _proto2.getScaleY = function getScaleY() {
          return this._scaleY;
        };

        _proto2.getDevicePixelRatio = function getDevicePixelRatio() {
          return this._devicePixelRatio;
        };

        _proto2.convertToLocationInView = function convertToLocationInView(tx, ty, relatedPos, out) {
          var result = out || new Vec2();
          var x = this._devicePixelRatio * (tx - relatedPos.left);
          var y = this._devicePixelRatio * (relatedPos.top + relatedPos.height - ty);

          if (this._isRotated) {
            result.x = legacyCC.game.canvas.width - y;
            result.y = x;
          } else {
            result.x = x;
            result.y = y;
          }

          if (legacyCC.GAME_VIEW) {
            result.x /= legacyCC.gameView.canvas.width / legacyCC.game.canvas.width;
            result.y /= legacyCC.gameView.canvas.height / legacyCC.game.canvas.height;
          }

          return result;
        };

        _proto2._convertPointWithScale = function _convertPointWithScale(point) {
          var viewport = this._viewportRect;
          point.x = (point.x - viewport.x) / this._scaleX;
          point.y = (point.y - viewport.y) / this._scaleY;
        };

        _proto2._resizeEvent = function _resizeEvent() {
          var _view = legacyCC.view;
          var prevFrameW = _view._frameSize.width;
          var prevFrameH = _view._frameSize.height;
          var prevRotated = _view._isRotated;

          if (legacyCC.sys.isMobile) {
            var containerStyle = legacyCC.game.container.style;
            var margin = containerStyle.margin;
            containerStyle.margin = '0';
            containerStyle.display = 'none';

            _view._initFrameSize();

            containerStyle.margin = margin;
            containerStyle.display = 'block';
          } else {
            _view._initFrameSize();
          }

          var width = _view._originalDesignResolutionSize.width;
          var height = _view._originalDesignResolutionSize.height;
          _view._resizing = true;

          if (width > 0) {
            _view.setDesignResolutionSize(width, height, _view._resolutionPolicy);
          }

          _view._resizing = false;

          _view.emit('canvas-resize');

          if (_view._resizeCallback) {
            _view._resizeCallback.call();
          }
        };

        _proto2._orientationChange = function _orientationChange() {
          legacyCC.view._orientationChanging = true;

          legacyCC.view._resizeEvent();
        };

        _proto2._initFrameSize = function _initFrameSize() {
          var locFrameSize = this._frameSize;

          var w = __BrowserGetter.availWidth(legacyCC.game.frame);

          var h = __BrowserGetter.availHeight(legacyCC.game.frame);

          var isLandscape = w >= h;

          if ( !legacyCC.sys.isMobile || isLandscape && this._orientation & legacyCC.macro.ORIENTATION_LANDSCAPE || !isLandscape && this._orientation & legacyCC.macro.ORIENTATION_PORTRAIT) {
            locFrameSize.width = w;
            locFrameSize.height = h;
            legacyCC.game.container.style['-webkit-transform'] = 'rotate(0deg)';
            legacyCC.game.container.style.transform = 'rotate(0deg)';
            this._isRotated = false;
          } else {
            locFrameSize.width = h;
            locFrameSize.height = w;
            legacyCC.game.container.style['-webkit-transform'] = 'rotate(90deg)';
            legacyCC.game.container.style.transform = 'rotate(90deg)';
            legacyCC.game.container.style['-webkit-transform-origin'] = '0px 0px 0px';
            legacyCC.game.container.style.transformOrigin = '0px 0px 0px';
            this._isRotated = true;
            legacyCC.game.canvas.style['-webkit-transform'] = 'translateZ(0px)';
            legacyCC.game.canvas.style.transform = 'translateZ(0px)';
          }

          if (this._orientationChanging) {
            setTimeout(function () {
              legacyCC.view._orientationChanging = false;
            }, 1000);
          }
        };

        _proto2._adjustSizeKeepCanvasSize = function _adjustSizeKeepCanvasSize() {
          var designWidth = this._originalDesignResolutionSize.width;
          var designHeight = this._originalDesignResolutionSize.height;

          if (designWidth > 0) {
            this.setDesignResolutionSize(designWidth, designHeight, this._resolutionPolicy);
          }
        };

        _proto2._setViewportMeta = function _setViewportMeta(metas, overwrite) {
          var vp = document.getElementById('cocosMetaElement');

          if (vp && overwrite) {
            document.head.removeChild(vp);
          }

          var elems = document.getElementsByName('viewport');
          var currentVP = elems ? elems[0] : null;
          var content;
          var key;
          var pattern;
          content = currentVP ? currentVP.content : '';
          vp = vp || document.createElement('meta');
          vp.id = 'cocosMetaElement';
          vp.name = 'viewport';
          vp.content = '';

          for (key in metas) {
            if (content.indexOf(key) === -1) {
              content += "," + key + "=" + metas[key];
            } else if (overwrite) {
              pattern = new RegExp(key + "s*=s*[^,]+");
              content = content.replace(pattern, key + "=" + metas[key]);
            }
          }

          if (/^,/.test(content)) {
            content = content.substr(1);
          }

          vp.content = content;

          if (currentVP) {
            currentVP.content = content;
          }

          document.head.appendChild(vp);
        };

        _proto2._adjustViewportMeta = function _adjustViewportMeta() {
          if (this._isAdjustViewport && !JSB && !RUNTIME_BASED && !MINIGAME) {
            this._setViewportMeta(__BrowserGetter.meta, false);

            this._isAdjustViewport = false;
          }
        };

        _proto2._convertMouseToLocation = function _convertMouseToLocation(in_out_point, relatedPos) {
          in_out_point.x = this._devicePixelRatio * (in_out_point.x - relatedPos.left);
          in_out_point.y = this._devicePixelRatio * (relatedPos.top + relatedPos.height - in_out_point.y);

          if (legacyCC.GAME_VIEW) {
            in_out_point.x /= legacyCC.gameView.canvas.width / legacyCC.game.canvas.width;
            in_out_point.y /= legacyCC.gameView.canvas.height / legacyCC.game.canvas.height;
          }
        };

        _proto2._convertTouchWidthScale = function _convertTouchWidthScale(selTouch) {
          var viewport = this._viewportRect;
          var scaleX = this._scaleX;
          var scaleY = this._scaleY;
          selTouch._point.x = (selTouch._point.x - viewport.x) / scaleX;
          selTouch._point.y = (selTouch._point.y - viewport.y) / scaleY;
          selTouch._prevPoint.x = (selTouch._prevPoint.x - viewport.x) / scaleX;
          selTouch._prevPoint.y = (selTouch._prevPoint.y - viewport.y) / scaleY;
        };

        _proto2._convertTouchesWithScale = function _convertTouchesWithScale(touches) {
          var viewport = this._viewportRect;
          var scaleX = this._scaleX;
          var scaleY = this._scaleY;
          var selPoint;
          var selPrePoint;

          for (var i = 0; i < touches.length; i++) {
            var selTouch = touches[i];
            selPoint = selTouch._point;
            selPrePoint = selTouch._prevPoint;
            selPoint.x = (selPoint.x - viewport.x) / scaleX;
            selPoint.y = (selPoint.y - viewport.y) / scaleY;
            selPrePoint.x = (selPrePoint.x - viewport.x) / scaleX;
            selPrePoint.y = (selPrePoint.y - viewport.y) / scaleY;
          }
        };

        return View;
      }(EventTarget));
      View.instance = void 0;

      var ContainerStrategy = function () {
        function ContainerStrategy() {
          this.name = 'ContainerStrategy';
        }

        var _proto3 = ContainerStrategy.prototype;

        _proto3.preApply = function preApply(_view) {};

        _proto3.apply = function apply(_view, designedResolution) {};

        _proto3.postApply = function postApply(_view) {};

        _proto3._setupContainer = function _setupContainer(_view, w, h) {
          var locCanvas = legacyCC.game.canvas;
          var locContainer = legacyCC.game.container;

          if (legacyCC.sys.os === legacyCC.sys.OS_ANDROID) {
            document.body.style.width = (_view._isRotated ? h : w) + "px";
            document.body.style.height = (_view._isRotated ? w : h) + "px";
          }

          locContainer.style.width = locCanvas.style.width = w + "px";
          locContainer.style.height = locCanvas.style.height = h + "px";
          _view._devicePixelRatio = 1;

          if (_view.isRetinaEnabled()) {
            _view._devicePixelRatio = Math.min(_view._maxPixelRatio, window.devicePixelRatio || 1);
          }

          {
            locCanvas.width = sys.windowPixelResolution.width;
            locCanvas.height = sys.windowPixelResolution.height;
          }
        };

        _proto3._fixContainer = function _fixContainer() {
          document.body.insertBefore(legacyCC.game.container, document.body.firstChild);
          var bs = document.body.style;
          bs.width = window.innerWidth + "px";
          bs.height = window.innerHeight + "px";
          bs.overflow = 'hidden';
          var contStyle = legacyCC.game.container.style;
          contStyle.position = 'fixed';
          contStyle.left = contStyle.top = '0px';
          document.body.scrollTop = 0;
        };

        return ContainerStrategy;
      }();

      ContainerStrategy.EQUAL_TO_FRAME = void 0;
      ContainerStrategy.PROPORTION_TO_FRAME = void 0;

      var ContentStrategy = function () {
        function ContentStrategy() {
          this.name = 'ContentStrategy';
          this._result = void 0;
          this._result = {
            scale: [1, 1],
            viewport: null
          };
        }

        var _proto4 = ContentStrategy.prototype;

        _proto4.preApply = function preApply(_view) {};

        _proto4.apply = function apply(_view, designedResolution) {
          return {
            scale: [1, 1]
          };
        };

        _proto4.postApply = function postApply(_view) {};

        _proto4._buildResult = function _buildResult(containerW, containerH, contentW, contentH, scaleX, scaleY) {
          if (Math.abs(containerW - contentW) < 2) {
            contentW = containerW;
          }

          if (Math.abs(containerH - contentH) < 2) {
            contentH = containerH;
          }

          var viewport = new Rect(Math.round((containerW - contentW) / 2), Math.round((containerH - contentH) / 2), contentW, contentH);
          this._result.scale = [scaleX, scaleY];
          this._result.viewport = viewport;
          return this._result;
        };

        return ContentStrategy;
      }();

      ContentStrategy.EXACT_FIT = void 0;
      ContentStrategy.SHOW_ALL = void 0;
      ContentStrategy.NO_BORDER = void 0;
      ContentStrategy.FIXED_HEIGHT = void 0;
      ContentStrategy.FIXED_WIDTH = void 0;

      (function () {
        var EqualToFrame = function (_ContainerStrategy) {
          _inheritsLoose(EqualToFrame, _ContainerStrategy);

          function EqualToFrame() {
            var _this2;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this2 = _ContainerStrategy.call.apply(_ContainerStrategy, [this].concat(args)) || this;
            _this2.name = 'EqualToFrame';
            return _this2;
          }

          var _proto5 = EqualToFrame.prototype;

          _proto5.apply = function apply(_view) {
            var frameH = _view._frameSize.height;
            var containerStyle = legacyCC.game.container.style;

            this._setupContainer(_view, _view._frameSize.width, _view._frameSize.height);

            if (_view._isRotated) {
              containerStyle.margin = "0 0 0 " + frameH + "px";
            } else {
              containerStyle.margin = '0px';
            }

            containerStyle.padding = '0px';
          };

          return EqualToFrame;
        }(ContainerStrategy);

        var ProportionalToFrame = function (_ContainerStrategy2) {
          _inheritsLoose(ProportionalToFrame, _ContainerStrategy2);

          function ProportionalToFrame() {
            var _this3;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this3 = _ContainerStrategy2.call.apply(_ContainerStrategy2, [this].concat(args)) || this;
            _this3.name = 'ProportionalToFrame';
            return _this3;
          }

          var _proto6 = ProportionalToFrame.prototype;

          _proto6.apply = function apply(_view, designedResolution) {
            var frameW = _view._frameSize.width;
            var frameH = _view._frameSize.height;
            var containerStyle = legacyCC.game.container.style;
            var designW = designedResolution.width;
            var designH = designedResolution.height;
            var scaleX = frameW / designW;
            var scaleY = frameH / designH;
            var containerW;
            var containerH;

            if (scaleX < scaleY) {
              containerW = frameW;
              containerH = designH * scaleX;
            } else {
              containerW = designW * scaleY;
              containerH = frameH;
            }

            var offx = Math.round((frameW - containerW) / 2);
            var offy = Math.round((frameH - containerH) / 2);
            containerW = frameW - 2 * offx;
            containerH = frameH - 2 * offy;

            this._setupContainer(_view, containerW, containerH);

            {
              if (_view._isRotated) {
                containerStyle.margin = "0 0 0 " + frameH + "px";
              } else {
                containerStyle.margin = '0px';
              }

              containerStyle.paddingLeft = offx + "px";
              containerStyle.paddingRight = offx + "px";
              containerStyle.paddingTop = offy + "px";
              containerStyle.paddingBottom = offy + "px";
            }
          };

          return ProportionalToFrame;
        }(ContainerStrategy);

        var _global = typeof window === 'undefined' ? global : window;

        var globalAdapter = _global.__globalAdapter;

        if (globalAdapter) {
          if (globalAdapter.adaptContainerStrategy) {
            globalAdapter.adaptContainerStrategy(ContainerStrategy.prototype);
          }

          if (globalAdapter.adaptView) {
            globalAdapter.adaptView(View.prototype);
          }
        }

        ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame();
        ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame();

        var ExactFit = function (_ContentStrategy) {
          _inheritsLoose(ExactFit, _ContentStrategy);

          function ExactFit() {
            var _this4;

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this4 = _ContentStrategy.call.apply(_ContentStrategy, [this].concat(args)) || this;
            _this4.name = 'ExactFit';
            return _this4;
          }

          var _proto7 = ExactFit.prototype;

          _proto7.apply = function apply(_view, designedResolution) {
            var containerW = legacyCC.game.canvas.width;
            var containerH = legacyCC.game.canvas.height;
            var scaleX = containerW / designedResolution.width;
            var scaleY = containerH / designedResolution.height;
            return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY);
          };

          return ExactFit;
        }(ContentStrategy);

        var ShowAll = function (_ContentStrategy2) {
          _inheritsLoose(ShowAll, _ContentStrategy2);

          function ShowAll() {
            var _this5;

            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            _this5 = _ContentStrategy2.call.apply(_ContentStrategy2, [this].concat(args)) || this;
            _this5.name = 'ShowAll';
            return _this5;
          }

          var _proto8 = ShowAll.prototype;

          _proto8.apply = function apply(_view, designedResolution) {
            var containerW = legacyCC.game.canvas.width;
            var containerH = legacyCC.game.canvas.height;
            var designW = designedResolution.width;
            var designH = designedResolution.height;
            var scaleX = containerW / designW;
            var scaleY = containerH / designH;
            var scale = 0;
            var contentW;
            var contentH;

            if (scaleX < scaleY) {
              scale = scaleX;
              contentW = containerW;
              contentH = designH * scale;
            } else {
              scale = scaleY;
              contentW = designW * scale;
              contentH = containerH;
            }

            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
          };

          return ShowAll;
        }(ContentStrategy);

        var NoBorder = function (_ContentStrategy3) {
          _inheritsLoose(NoBorder, _ContentStrategy3);

          function NoBorder() {
            var _this6;

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this6 = _ContentStrategy3.call.apply(_ContentStrategy3, [this].concat(args)) || this;
            _this6.name = 'NoBorder';
            return _this6;
          }

          var _proto9 = NoBorder.prototype;

          _proto9.apply = function apply(_view, designedResolution) {
            var containerW = legacyCC.game.canvas.width;
            var containerH = legacyCC.game.canvas.height;
            var designW = designedResolution.width;
            var designH = designedResolution.height;
            var scaleX = containerW / designW;
            var scaleY = containerH / designH;
            var scale;
            var contentW;
            var contentH;

            if (scaleX < scaleY) {
              scale = scaleY;
              contentW = designW * scale;
              contentH = containerH;
            } else {
              scale = scaleX;
              contentW = containerW;
              contentH = designH * scale;
            }

            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
          };

          return NoBorder;
        }(ContentStrategy);

        var FixedHeight = function (_ContentStrategy4) {
          _inheritsLoose(FixedHeight, _ContentStrategy4);

          function FixedHeight() {
            var _this7;

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this7 = _ContentStrategy4.call.apply(_ContentStrategy4, [this].concat(args)) || this;
            _this7.name = 'FixedHeight';
            return _this7;
          }

          var _proto10 = FixedHeight.prototype;

          _proto10.apply = function apply(_view, designedResolution) {
            var containerW = legacyCC.game.canvas.width;
            var containerH = legacyCC.game.canvas.height;
            var designH = designedResolution.height;
            var scale = containerH / designH;
            var contentW = containerW;
            var contentH = containerH;
            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
          };

          return FixedHeight;
        }(ContentStrategy);

        var FixedWidth = function (_ContentStrategy5) {
          _inheritsLoose(FixedWidth, _ContentStrategy5);

          function FixedWidth() {
            var _this8;

            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            _this8 = _ContentStrategy5.call.apply(_ContentStrategy5, [this].concat(args)) || this;
            _this8.name = 'FixedWidth';
            return _this8;
          }

          var _proto11 = FixedWidth.prototype;

          _proto11.apply = function apply(_view, designedResolution) {
            var containerW = legacyCC.game.canvas.width;
            var containerH = legacyCC.game.canvas.height;
            var designW = designedResolution.width;
            var scale = containerW / designW;
            var contentW = containerW;
            var contentH = containerH;
            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
          };

          return FixedWidth;
        }(ContentStrategy);

        ContentStrategy.EXACT_FIT = new ExactFit();
        ContentStrategy.SHOW_ALL = new ShowAll();
        ContentStrategy.NO_BORDER = new NoBorder();
        ContentStrategy.FIXED_HEIGHT = new FixedHeight();
        ContentStrategy.FIXED_WIDTH = new FixedWidth();
      })();

      var ResolutionPolicy = exports('R', function () {
        function ResolutionPolicy(containerStg, contentStg) {
          this.name = 'ResolutionPolicy';
          this._containerStrategy = void 0;
          this._contentStrategy = void 0;
          this._containerStrategy = null;
          this._contentStrategy = null;
          this.setContainerStrategy(containerStg);
          this.setContentStrategy(contentStg);
        }

        var _proto12 = ResolutionPolicy.prototype;

        _proto12.preApply = function preApply(_view) {
          this._containerStrategy.preApply(_view);

          this._contentStrategy.preApply(_view);
        };

        _proto12.apply = function apply(_view, designedResolution) {
          this._containerStrategy.apply(_view, designedResolution);

          return this._contentStrategy.apply(_view, designedResolution);
        };

        _proto12.postApply = function postApply(_view) {
          this._containerStrategy.postApply(_view);

          this._contentStrategy.postApply(_view);
        };

        _proto12.setContainerStrategy = function setContainerStrategy(containerStg) {
          if (containerStg instanceof ContainerStrategy) {
            this._containerStrategy = containerStg;
          }
        };

        _proto12.setContentStrategy = function setContentStrategy(contentStg) {
          if (contentStg instanceof ContentStrategy) {
            this._contentStrategy = contentStg;
          }
        };

        _createClass(ResolutionPolicy, [{
          key: "canvasSize",
          get: function get() {
            return new Vec2(legacyCC.game.canvas.width, legacyCC.game.canvas.height);
          }
        }]);

        return ResolutionPolicy;
      }());
      ResolutionPolicy.EXACT_FIT = 0;
      ResolutionPolicy.NO_BORDER = 1;
      ResolutionPolicy.SHOW_ALL = 2;
      ResolutionPolicy.FIXED_HEIGHT = 3;
      ResolutionPolicy.FIXED_WIDTH = 4;
      ResolutionPolicy.UNKNOWN = 5;
      ResolutionPolicy.ContainerStrategy = ContainerStrategy;
      ResolutionPolicy.ContentStrategy = ContentStrategy;
      legacyCC.ResolutionPolicy = ResolutionPolicy;
      var view = exports('v', View.instance = legacyCC.view = new View());
      legacyCC.winSize = new Size();

    }
  };
});
