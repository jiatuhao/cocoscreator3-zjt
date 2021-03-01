System.register(['./coordinates-converts-utils-66b3c6fc.js', './renderable-component-48f15197.js', './find-2b085df6.js', './json-asset-a4190905.js', './view-fe42d2a1.js', './event-enum-a28dcb7d.js'], function (exports) {
  'use strict';
  var Vec2, _createClass, CallbacksInvoker, legacyCC, errorID, replaceProperty, Size, removeProperty, Layers, Enum, Color, NULL_HANDLE, FogPool, FogView, Vec3, Quat, ccclass, type, CCFloat, _applyDecoratedDescriptor, editable, visible, range, rangeStep, displayOrder, rangeMin, slide, CCBoolean, CCInteger, _initializerDefineProperty, serializable, _inheritsLoose, _assertThisInitialized, Mat4, CCObject, getError, applyTargetOverrides, EDITOR, array, error, MutableForwardIterator, Pool, _createForOfIteratorHelperLoose, isValid, assert, ClearFlag$1, tooltip, executeInEditMode, toRadian, help, menu, Component, Rect, CAMERA_DEFAULT_MASK, Node, BaseNode, ShadowType, PCFType, Ambient, CameraProjection, CameraFOVAxis, CameraAperture, CameraShutter, CameraISO, SKYBOX_FLAG, TransformBit, Ray, TextureCube, RenderTexture, view, SystemEventType, eventManager;
  return {
    setters: [function (module) {
      Vec2 = module.cv;
      _createClass = module.dS;
      CallbacksInvoker = module.f2;
      legacyCC = module.l;
      errorID = module.f;
      replaceProperty = module.de;
      Size = module.cH;
      removeProperty = module.df;
      Layers = module.dM;
      Enum = module.d6;
      Color = module.cL;
      NULL_HANDLE = module.bx;
      FogPool = module.cb;
      FogView = module.ca;
      Vec3 = module.cx;
      Quat = module.cB;
      ccclass = module.dQ;
      type = module.e5;
      CCFloat = module.du;
      _applyDecoratedDescriptor = module.dT;
      editable = module.ec;
      visible = module.f3;
      range = module.f4;
      rangeStep = module.f5;
      displayOrder = module.f0;
      rangeMin = module.ee;
      slide = module.f6;
      CCBoolean = module.dv;
      CCInteger = module.dt;
      _initializerDefineProperty = module.dU;
      serializable = module.dX;
      _inheritsLoose = module.dR;
      _assertThisInitialized = module.dV;
      Mat4 = module.cE;
      CCObject = module.dn;
      getError = module.dI;
      applyTargetOverrides = module.e$;
      EDITOR = module.eh;
      array = module.ep;
      error = module.e;
      MutableForwardIterator = module.eM;
      Pool = module.f7;
      _createForOfIteratorHelperLoose = module.t;
      isValid = module.dp;
      assert = module.b;
      ClearFlag$1 = module.aw;
      tooltip = module.f8;
      executeInEditMode = module.f9;
      toRadian = module.cT;
      help = module.fa;
      menu = module.fb;
      Component = module.dO;
      Rect = module.cJ;
      CAMERA_DEFAULT_MASK = module.eP;
    }, function (module) {
      Node = module.N;
      BaseNode = module.B;
      ShadowType = module.j;
      PCFType = module.P;
      Ambient = module.A;
      CameraProjection = module.a;
      CameraFOVAxis = module.C;
      CameraAperture = module.b;
      CameraShutter = module.d;
      CameraISO = module.c;
      SKYBOX_FLAG = module.S;
      TransformBit = module.T;
    }, function (module) {
      Ray = module.R;
    }, function (module) {
      TextureCube = module.u;
      RenderTexture = module.v;
    }, function (module) {
      view = module.v;
    }, function (module) {
      SystemEventType = module.S;
      eventManager = module.e;
    }],
    execute: function () {

      var _cachedArray = new Array(16);

      var _currentHovered = null;
      var pos = new Vec2();
      var _touchEvents = [SystemEventType.TOUCH_START.toString(), SystemEventType.TOUCH_MOVE.toString(), SystemEventType.TOUCH_END.toString(), SystemEventType.TOUCH_CANCEL.toString()];
      var _mouseEvents = [SystemEventType.MOUSE_DOWN.toString(), SystemEventType.MOUSE_ENTER.toString(), SystemEventType.MOUSE_MOVE.toString(), SystemEventType.MOUSE_LEAVE.toString(), SystemEventType.MOUSE_UP.toString(), SystemEventType.MOUSE_WHEEL.toString()];

      function _touchStartHandler(touch, event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return false;
        }

        touch.getUILocation(pos);

        if (node._uiProps.uiTransformComp.isHit(pos, this)) {
          event.type = SystemEventType.TOUCH_START.toString();
          event.touch = touch;
          event.bubbles = true;
          node.dispatchEvent(event);
          return true;
        }

        return false;
      }

      function _touchMoveHandler(touch, event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return false;
        }

        event.type = SystemEventType.TOUCH_MOVE.toString();
        event.touch = touch;
        event.bubbles = true;
        node.dispatchEvent(event);
        return true;
      }

      function _touchEndHandler(touch, event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return;
        }

        touch.getUILocation(pos);

        if (node._uiProps.uiTransformComp.isHit(pos, this)) {
          event.type = SystemEventType.TOUCH_END.toString();
        } else {
          event.type = SystemEventType.TOUCH_CANCEL.toString();
        }

        event.touch = touch;
        event.bubbles = true;
        node.dispatchEvent(event);
      }

      function _touchCancelHandler(touch, event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return;
        }

        event.type = SystemEventType.TOUCH_CANCEL.toString();
        event.touch = touch;
        event.bubbles = true;
        node.dispatchEvent(event);
      }

      function _mouseDownHandler(event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return;
        }

        pos = event.getUILocation();

        if (node._uiProps.uiTransformComp.isHit(pos, this)) {
          event.type = SystemEventType.MOUSE_DOWN.toString();
          event.bubbles = true;
          node.dispatchEvent(event);
        }
      }

      function _mouseMoveHandler(event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return;
        }

        pos = event.getUILocation();

        var hit = node._uiProps.uiTransformComp.isHit(pos, this);

        if (hit) {
          if (!this._previousIn) {
            if (_currentHovered && _currentHovered.eventProcessor.mouseListener) {
              event.type = SystemEventType.MOUSE_LEAVE;

              _currentHovered.dispatchEvent(event);

              if (_currentHovered.eventProcessor.mouseListener) {
                _currentHovered.eventProcessor.mouseListener._previousIn = false;
              }
            }

            _currentHovered = node;
            event.type = SystemEventType.MOUSE_ENTER.toString();
            node.dispatchEvent(event);
            this._previousIn = true;
          }

          event.type = SystemEventType.MOUSE_MOVE.toString();
          event.bubbles = true;
          node.dispatchEvent(event);
        } else if (this._previousIn) {
          event.type = SystemEventType.MOUSE_LEAVE.toString();
          node.dispatchEvent(event);
          this._previousIn = false;
          _currentHovered = null;
        } else {
          return;
        }

        event.propagationStopped = true;
      }

      function _mouseUpHandler(event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return;
        }

        pos = event.getUILocation();

        if (node._uiProps.uiTransformComp.isHit(pos, this)) {
          event.type = SystemEventType.MOUSE_UP.toString();
          event.bubbles = true;
          node.dispatchEvent(event);
          event.propagationStopped = true;
        }
      }

      function _mouseWheelHandler(event) {
        var node = this.owner;

        if (!node || !node._uiProps.uiTransformComp) {
          return;
        }

        pos = event.getUILocation();

        if (node._uiProps.uiTransformComp.isHit(pos, this)) {
          event.type = SystemEventType.MOUSE_WHEEL.toString();
          event.bubbles = true;
          node.dispatchEvent(event);
          event.propagationStopped = true;
        }
      }

      function _doDispatchEvent(owner, event) {
        var target;
        var i = 0;
        event.target = owner;
        _cachedArray.length = 0;
        owner.eventProcessor.getCapturingTargets(event.type, _cachedArray);
        event.eventPhase = 1;

        for (i = _cachedArray.length - 1; i >= 0; --i) {
          target = _cachedArray[i];

          if (target.eventProcessor.capturingTargets) {
            event.currentTarget = target;
            target.eventProcessor.capturingTargets.emit(event.type, event, _cachedArray);

            if (event.propagationStopped) {
              _cachedArray.length = 0;
              return;
            }
          }
        }

        _cachedArray.length = 0;
        event.eventPhase = 2;
        event.currentTarget = owner;

        if (owner.eventProcessor.capturingTargets) {
          owner.eventProcessor.capturingTargets.emit(event.type, event);
        }

        if (!event.propagationImmediateStopped && owner.eventProcessor.bubblingTargets) {
          owner.eventProcessor.bubblingTargets.emit(event.type, event);
        }

        if (!event.propagationStopped && event.bubbles) {
          owner.eventProcessor.getBubblingTargets(event.type, _cachedArray);
          event.eventPhase = 3;

          for (i = 0; i < _cachedArray.length; ++i) {
            target = _cachedArray[i];

            if (target.eventProcessor.bubblingTargets) {
              event.currentTarget = target;
              target.eventProcessor.bubblingTargets.emit(event.type, event);

              if (event.propagationStopped) {
                _cachedArray.length = 0;
                return;
              }
            }
          }
        }

        _cachedArray.length = 0;
      }

      function _searchComponentsInParent(node, ctor) {
        if (ctor) {
          var index = 0;
          var list = [];

          for (var curr = node; curr && Node.isNode(curr); curr = curr.parent, ++index) {
            var comp = curr.getComponent(ctor);

            if (comp) {
              var next = {
                index: index,
                comp: comp
              };

              if (list) {
                list.push(next);
              } else {
                list = [next];
              }
            }
          }

          return list.length > 0 ? list : null;
        }

        return null;
      }

      function _checkListeners(node, events) {
        if (!node._persistNode) {
          if (node.eventProcessor.bubblingTargets) {
            for (var i = 0; i < events.length; ++i) {
              if (node.eventProcessor.bubblingTargets.hasEventListener(events[i])) {
                return true;
              }
            }
          }

          if (node.eventProcessor.capturingTargets) {
            for (var _i = 0; _i < events.length; ++_i) {
              if (node.eventProcessor.capturingTargets.hasEventListener(events[_i])) {
                return true;
              }
            }
          }

          return false;
        }

        return true;
      }

      var NodeEventProcessor = function () {
        _createClass(NodeEventProcessor, [{
          key: "node",
          get: function get() {
            return this._node;
          }
        }]);

        function NodeEventProcessor(node) {
          this.bubblingTargets = null;
          this.capturingTargets = null;
          this.touchListener = null;
          this.mouseListener = null;
          this._node = void 0;
          this._comp = null;
          this._node = node;
        }

        var _proto = NodeEventProcessor.prototype;

        _proto.reattach = function reattach() {
          if (!this._comp) return;

          if (this.touchListener) {
            var mask = this.touchListener.mask = _searchComponentsInParent(this._node, this._comp);

            if (this.mouseListener) {
              this.mouseListener.mask = mask;
            }
          } else if (this.mouseListener) {
            this.mouseListener.mask = _searchComponentsInParent(this._node, this._comp);
          }
        };

        _proto.registerComponentHitList = function registerComponentHitList(ctor) {
          this._comp = ctor;
        };

        _proto.destroy = function destroy() {
          if (_currentHovered === this._node) {
            _currentHovered = null;
          }

          if (this.touchListener || this.mouseListener) {
            eventManager.removeListeners(this._node);

            if (this.touchListener) {
              this.touchListener.owner = null;
              this.touchListener.mask = null;
              this.touchListener = null;
            }

            if (this.mouseListener) {
              this.mouseListener.owner = null;
              this.mouseListener.mask = null;
              this.mouseListener = null;
            }
          }

          if (this.capturingTargets) this.capturingTargets.clear();
          if (this.bubblingTargets) this.bubblingTargets.clear();
        };

        _proto.on = function on(type, callback, target, useCapture) {
          var forDispatch = this._checknSetupSysEvent(type);

          if (forDispatch) {
            return this._onDispatch(type, callback, target, useCapture);
          } else {
            if (!this.bubblingTargets) {
              this.bubblingTargets = new CallbacksInvoker();
            }

            return this.bubblingTargets.on(type, callback, target);
          }
        };

        _proto.once = function once(type, callback, target, useCapture) {
          var _this = this;

          var forDispatch = this._checknSetupSysEvent(type);

          var listeners;

          if (forDispatch && useCapture) {
            listeners = this.capturingTargets = this.capturingTargets || new CallbacksInvoker();
          } else {
            listeners = this.bubblingTargets = this.bubblingTargets || new CallbacksInvoker();
          }

          listeners.on(type, callback, target, true);
          listeners.on(type, function () {
            _this.off(type, callback, target);
          }, undefined, true);
        };

        _proto.off = function off(type, callback, target, useCapture) {
          var touchEvent = _touchEvents.indexOf(type) !== -1;
          var mouseEvent = !touchEvent && _mouseEvents.indexOf(type) !== -1;

          if (touchEvent || mouseEvent) {
            this._offDispatch(type, callback, target, useCapture);

            if (touchEvent) {
              if (this.touchListener && !_checkListeners(this._node, _touchEvents)) {
                eventManager.removeListener(this.touchListener);
                this.touchListener = null;
              }
            } else if (mouseEvent) {
              if (this.mouseListener && !_checkListeners(this._node, _mouseEvents)) {
                eventManager.removeListener(this.mouseListener);
                this.mouseListener = null;
              }
            }
          } else if (this.bubblingTargets) {
            this.bubblingTargets.off(type, callback, target);
          }
        };

        _proto.emit = function emit(type, arg0, arg1, arg2, arg3, arg4) {
          if (this.bubblingTargets) {
            this.bubblingTargets.emit(type, arg0, arg1, arg2, arg3, arg4);
          }
        };

        _proto.dispatchEvent = function dispatchEvent(event) {
          _doDispatchEvent(this._node, event);

          _cachedArray.length = 0;
        };

        _proto.hasEventListener = function hasEventListener(type, callback, target) {
          var has = false;

          if (this.bubblingTargets) {
            has = this.bubblingTargets.hasEventListener(type, callback, target);
          }

          if (!has && this.capturingTargets) {
            has = this.capturingTargets.hasEventListener(type, callback, target);
          }

          return has;
        };

        _proto.targetOff = function targetOff(target) {
          if (this.capturingTargets) {
            this.capturingTargets.removeAll(target);
          }

          if (this.bubblingTargets) {
            this.bubblingTargets.removeAll(target);
          }

          if (this.touchListener && !_checkListeners(this.node, _touchEvents)) {
            eventManager.removeListener(this.touchListener);
            this.touchListener = null;
          }

          if (this.mouseListener && !_checkListeners(this.node, _mouseEvents)) {
            eventManager.removeListener(this.mouseListener);
            this.mouseListener = null;
          }
        };

        _proto.getCapturingTargets = function getCapturingTargets(type, targets) {
          var parent = this._node.parent;

          while (parent) {
            if (parent.eventProcessor.capturingTargets && parent.eventProcessor.capturingTargets.hasEventListener(type)) {
              targets.push(parent);
            }

            parent = parent.parent;
          }
        };

        _proto.getBubblingTargets = function getBubblingTargets(type, targets) {
          var parent = this._node.parent;

          while (parent) {
            if (parent.eventProcessor.bubblingTargets && parent.eventProcessor.bubblingTargets.hasEventListener(type)) {
              targets.push(parent);
            }

            parent = parent.parent;
          }
        };

        _proto._checknSetupSysEvent = function _checknSetupSysEvent(type) {
          var _this2 = this;

          var newAdded = false;
          var forDispatch = false;

          if (_touchEvents.indexOf(type) !== -1) {
            if (!this.touchListener) {
              this.touchListener = legacyCC.EventListener.create({
                event: legacyCC.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                owner: this._node,
                mask: _searchComponentsInParent(this._node, this._comp),
                onTouchBegan: _touchStartHandler,
                onTouchMoved: _touchMoveHandler,
                onTouchEnded: _touchEndHandler,
                onTouchCancelled: _touchCancelHandler
              });
              eventManager.addListener(this.touchListener, this._node);
              newAdded = true;
            }

            forDispatch = true;
          } else if (_mouseEvents.indexOf(type) !== -1) {
            if (!this.mouseListener) {
              this.mouseListener = legacyCC.EventListener.create({
                event: legacyCC.EventListener.MOUSE,
                _previousIn: false,
                owner: this._node,
                mask: _searchComponentsInParent(this._node, this._comp),
                onMouseDown: _mouseDownHandler,
                onMouseMove: _mouseMoveHandler,
                onMouseUp: _mouseUpHandler,
                onMouseScroll: _mouseWheelHandler
              });
              eventManager.addListener(this.mouseListener, this._node);
              newAdded = true;
            }

            forDispatch = true;
          }

          if (newAdded && !this._node.activeInHierarchy) {
            legacyCC.director.getScheduler().schedule(function () {
              if (!_this2._node.activeInHierarchy) {
                eventManager.pauseTarget(_this2._node);
              }
            }, this._node, 0, 0, 0, false);
          }

          return forDispatch;
        };

        _proto._onDispatch = function _onDispatch(type, callback, target, useCapture) {
          if (typeof target === 'boolean') {
            useCapture = target;
            target = undefined;
          } else {
            useCapture = !!useCapture;
          }

          if (!callback) {
            errorID(6800);
            return undefined;
          }

          var listeners = null;

          if (useCapture) {
            listeners = this.capturingTargets = this.capturingTargets || new CallbacksInvoker();
          } else {
            listeners = this.bubblingTargets = this.bubblingTargets || new CallbacksInvoker();
          }

          if (!listeners.hasEventListener(type, callback, target)) {
            listeners.on(type, callback, target);
          }

          return callback;
        };

        _proto._offDispatch = function _offDispatch(type, callback, target, useCapture) {
          if (typeof target === 'boolean') {
            useCapture = target;
            target = undefined;
          } else {
            useCapture = !!useCapture;
          }

          if (!callback) {
            if (this.capturingTargets) {
              this.capturingTargets.removeAll(type);
            }

            if (this.bubblingTargets) {
              this.bubblingTargets.removeAll(type);
            }
          } else {
            var listeners = useCapture ? this.capturingTargets : this.bubblingTargets;

            if (listeners) {
              listeners.off(type, callback, target);
            }
          }
        };

        return NodeEventProcessor;
      }();
      legacyCC.NodeEventProcessor = NodeEventProcessor;

      replaceProperty(BaseNode.prototype, 'BaseNode', [{
        name: 'childrenCount',
        newName: 'children.length',
        customGetter: function customGetter() {
          return this.children.length;
        }
      }]);
      replaceProperty(Node.prototype, 'Node', [{
        name: 'width',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.width;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.width = value;
        }
      }, {
        name: 'height',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.height;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.height = value;
        }
      }, {
        name: 'anchorX',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.anchorX;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.anchorX = value;
        }
      }, {
        name: 'anchorY',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.anchorY;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.anchorY = value;
        }
      }, {
        name: 'getAnchorPoint',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._uiProps.uiTransformComp.anchorPoint);
          return out;
        }
      }, {
        name: 'setAnchorPoint',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(point, y) {
          this._uiProps.uiTransformComp.setAnchorPoint(point, y);
        }
      }, {
        name: 'getContentSize',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(out) {
          if (!out) {
            out = new Size();
          }

          out.set(this._uiProps.uiTransformComp.contentSize);
          return out;
        }
      }, {
        name: 'setContentSize',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(size, height) {
          if (typeof size === 'number') {
            this._uiProps.uiTransformComp.setContentSize(size, height);
          } else {
            this._uiProps.uiTransformComp.setContentSize(size);
          }
        }
      }]);
      removeProperty(Node.prototype, 'Node.prototype', [{
        name: 'addLayer'
      }, {
        name: 'removeLayer'
      }]);
      removeProperty(Layers, 'Layers', [{
        name: 'All'
      }, {
        name: 'RaycastMask'
      }, {
        name: 'check'
      }]);
      replaceProperty(Layers, 'Layers', [{
        name: 'Default',
        newName: 'DEFAULT',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'Always',
        newName: 'ALWAYS',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'IgnoreRaycast',
        newName: 'IGNORE_RAYCAST',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'Gizmos',
        newName: 'GIZMOS',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'Editor',
        newName: 'EDITOR',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'UI',
        newName: 'UI_3D',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'UI2D',
        newName: 'UI_2D',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'SceneGizmo',
        newName: 'SCENE_GIZMO',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'makeInclusiveMask',
        newName: 'makeMaskInclude',
        target: Layers,
        targetName: 'Layers'
      }, {
        name: 'makeExclusiveMask',
        newName: 'makeMaskExclude',
        target: Layers,
        targetName: 'Layers'
      }]);
      removeProperty(Layers.Enum, 'Layers.Enum', [{
        name: 'ALWAYS'
      }]);
      removeProperty(Layers.BitMask, 'Layers.BitMask', [{
        name: 'ALWAYS'
      }]);

      var FogType = Enum({
        LINEAR: 0,
        EXP: 1,
        EXP_SQUARED: 2,
        LAYERED: 3
      });
      var FOG_TYPE_NONE = FogType.LAYERED + 1;
      var Fog = function () {
        _createClass(Fog, [{
          key: "enabled",
          set: function set(val) {
            FogPool.set(this._handle, FogView.ENABLE, val ? 1 : 0);
            if (!val) FogPool.set(this._handle, FogView.TYPE, FOG_TYPE_NONE);
            val ? this.activate() : this._updatePipeline();
          },
          get: function get() {
            return FogPool.get(this._handle, FogView.ENABLE);
          }
        }, {
          key: "fogColor",
          set: function set(val) {
            this._fogColor.set(val);

            Color.toArray(this._colorArray, this._fogColor);
            FogPool.setVec4(this._handle, FogView.COLOR, this._fogColor);
          },
          get: function get() {
            return this._fogColor;
          }
        }, {
          key: "type",
          get: function get() {
            return FogPool.get(this._handle, FogView.TYPE);
          },
          set: function set(val) {
            FogPool.set(this._handle, FogView.TYPE, this.enabled ? val : FOG_TYPE_NONE);
            if (this.enabled) this._updatePipeline();
          }
        }, {
          key: "fogDensity",
          get: function get() {
            return FogPool.get(this._handle, FogView.DENSITY);
          },
          set: function set(val) {
            FogPool.set(this._handle, FogView.DENSITY, val);
          }
        }, {
          key: "fogStart",
          get: function get() {
            return FogPool.get(this._handle, FogView.START);
          },
          set: function set(val) {
            FogPool.set(this._handle, FogView.START, val);
          }
        }, {
          key: "fogEnd",
          get: function get() {
            return FogPool.get(this._handle, FogView.END);
          },
          set: function set(val) {
            FogPool.set(this._handle, FogView.END, val);
          }
        }, {
          key: "fogAtten",
          get: function get() {
            return FogPool.get(this._handle, FogView.ATTEN);
          },
          set: function set(val) {
            FogPool.set(this._handle, FogView.ATTEN, val);
          }
        }, {
          key: "fogTop",
          get: function get() {
            return FogPool.get(this._handle, FogView.TOP);
          },
          set: function set(val) {
            FogPool.set(this._handle, FogView.TOP, val);
          }
        }, {
          key: "fogRange",
          get: function get() {
            return FogPool.get(this._handle, FogView.RANGE);
          },
          set: function set(val) {
            FogPool.set(this._handle, FogView.RANGE, val);
          }
        }, {
          key: "colorArray",
          get: function get() {
            return this._colorArray;
          }
        }, {
          key: "handle",
          get: function get() {
            return this._handle;
          }
        }]);

        function Fog() {
          this._fogColor = new Color('#C8C8C8');
          this._colorArray = new Float32Array([0.2, 0.2, 0.2, 1.0]);
          this._handle = NULL_HANDLE;
          this._handle = FogPool.alloc();
        }

        var _proto = Fog.prototype;

        _proto.initialize = function initialize(fogInfo) {
          FogPool.set(this._handle, FogView.ENABLE, fogInfo.enabled ? 1 : 0);
          FogPool.set(this._handle, FogView.TYPE, fogInfo.enabled ? fogInfo.type : FOG_TYPE_NONE);

          this._fogColor.set(fogInfo.fogColor);

          Color.toArray(this._colorArray, this._fogColor);
          FogPool.setVec4(this._handle, FogView.COLOR, this._fogColor);
          FogPool.set(this._handle, FogView.DENSITY, fogInfo.fogDensity);
          FogPool.set(this._handle, FogView.START, fogInfo.fogStart);
          FogPool.set(this._handle, FogView.END, fogInfo.fogEnd);
          FogPool.set(this._handle, FogView.ATTEN, fogInfo.fogAtten);
          FogPool.set(this._handle, FogView.TOP, fogInfo.fogTop);
          FogPool.set(this._handle, FogView.RANGE, fogInfo.fogRange);
        };

        _proto.activate = function activate() {
          this._updatePipeline();
        };

        _proto._updatePipeline = function _updatePipeline() {
          var root = legacyCC.director.root;
          var value = this.enabled ? this.type : FOG_TYPE_NONE;
          var pipeline = root.pipeline;

          if (pipeline.macros.CC_USE_FOG === value) {
            return;
          }

          pipeline.macros.CC_USE_FOG = value;
          root.onGlobalPipelineStateChanged();
        };

        _proto.destroy = function destroy() {
          if (this._handle) {
            FogPool.free(this._handle);
            this._handle = NULL_HANDLE;
          }
        };

        return Fog;
      }();
      legacyCC.Fog = Fog;

      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _dec3, _dec4, _dec5, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp2, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class7, _class8, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _class9, _temp3, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _class10, _class11, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _temp4, _dec56, _dec57, _class13, _class14, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _temp5;

      var _up = new Vec3(0, 1, 0);

      var _v3 = new Vec3();

      var _qt = new Quat();

      var AmbientInfo = (_dec = ccclass('cc.AmbientInfo'), _dec2 = type(CCFloat), _dec(_class = (_class2 = (_temp = function () {
        function AmbientInfo() {
          _initializerDefineProperty(this, "_skyColor", _descriptor, this);

          _initializerDefineProperty(this, "_skyIllum", _descriptor2, this);

          _initializerDefineProperty(this, "_groundAlbedo", _descriptor3, this);

          this._resource = null;
        }

        var _proto = AmbientInfo.prototype;

        _proto.activate = function activate(resource) {
          this._resource = resource;

          this._resource.initialize(this);
        };

        _createClass(AmbientInfo, [{
          key: "skyColor",
          set: function set(val) {
            this._skyColor.set(val);

            if (this._resource) {
              this._resource.skyColor = this._skyColor;
            }
          },
          get: function get() {
            return this._skyColor;
          }
        }, {
          key: "skyIllum",
          set: function set(val) {
            this._skyIllum = val;

            if (this._resource) {
              this._resource.skyIllum = this.skyIllum;
            }
          },
          get: function get() {
            return this._skyIllum;
          }
        }, {
          key: "groundAlbedo",
          set: function set(val) {
            this._groundAlbedo.set(val);

            if (this._resource) {
              this._resource.groundAlbedo = this._groundAlbedo;
            }
          },
          get: function get() {
            return this._groundAlbedo;
          }
        }]);

        return AmbientInfo;
      }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_skyColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(51, 128, 204, 1.0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_skyIllum", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Ambient.SKY_ILLUM;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_groundAlbedo", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(51, 51, 51, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "skyColor", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "skyColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "skyIllum", [editable, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "skyIllum"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "groundAlbedo", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "groundAlbedo"), _class2.prototype)), _class2)) || _class);
      legacyCC.AmbientInfo = AmbientInfo;
      var SkyboxInfo = (_dec3 = ccclass('cc.SkyboxInfo'), _dec4 = type(TextureCube), _dec5 = type(TextureCube), _dec3(_class4 = (_class5 = (_temp2 = function () {
        function SkyboxInfo() {
          _initializerDefineProperty(this, "_envmap", _descriptor4, this);

          _initializerDefineProperty(this, "_isRGBE", _descriptor5, this);

          _initializerDefineProperty(this, "_enabled", _descriptor6, this);

          _initializerDefineProperty(this, "_useIBL", _descriptor7, this);

          this._resource = null;
        }

        var _proto2 = SkyboxInfo.prototype;

        _proto2.activate = function activate(resource) {
          this._resource = resource;

          this._resource.initialize(this);

          this._resource.activate();
        };

        _createClass(SkyboxInfo, [{
          key: "enabled",
          set: function set(val) {
            if (this._enabled === val) return;
            this._enabled = val;

            if (this._resource) {
              this._resource.enabled = this._enabled;
            }
          },
          get: function get() {
            return this._enabled;
          }
        }, {
          key: "useIBL",
          set: function set(val) {
            this._useIBL = val;

            if (this._resource) {
              this._resource.useIBL = this._useIBL;
            }
          },
          get: function get() {
            return this._useIBL;
          }
        }, {
          key: "envmap",
          set: function set(val) {
            this._envmap = val;

            if (this._resource) {
              this._resource.envmap = this._envmap;
            }
          },
          get: function get() {
            return this._envmap;
          }
        }, {
          key: "isRGBE",
          set: function set(val) {
            this._isRGBE = val;

            if (this._resource) {
              this._resource.isRGBE = this._isRGBE;
            }
          },
          get: function get() {
            return this._isRGBE;
          }
        }]);

        return SkyboxInfo;
      }(), _temp2), (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_envmap", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "_isRGBE", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "_enabled", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "_useIBL", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "enabled", [editable], Object.getOwnPropertyDescriptor(_class5.prototype, "enabled"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "useIBL", [editable], Object.getOwnPropertyDescriptor(_class5.prototype, "useIBL"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "envmap", [editable, _dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "envmap"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "isRGBE", [editable], Object.getOwnPropertyDescriptor(_class5.prototype, "isRGBE"), _class5.prototype)), _class5)) || _class4);
      legacyCC.SkyboxInfo = SkyboxInfo;
      var FogInfo = (_dec6 = ccclass('cc.FogInfo'), _dec7 = type(FogType), _dec8 = visible(function () {
        return this._type !== FogType.LAYERED && this._type !== FogType.LINEAR;
      }), _dec9 = type(CCFloat), _dec10 = range([0, 1]), _dec11 = rangeStep(0.01), _dec12 = displayOrder(3), _dec13 = visible(function () {
        return this._type === FogType.LINEAR;
      }), _dec14 = type(CCFloat), _dec15 = rangeStep(0.01), _dec16 = displayOrder(4), _dec17 = visible(function () {
        return this._type === FogType.LINEAR;
      }), _dec18 = type(CCFloat), _dec19 = rangeStep(0.01), _dec20 = displayOrder(5), _dec21 = visible(function () {
        return this._type !== FogType.LINEAR;
      }), _dec22 = type(CCFloat), _dec23 = rangeMin(0.01), _dec24 = rangeStep(0.01), _dec25 = displayOrder(6), _dec26 = visible(function () {
        return this._type === FogType.LAYERED;
      }), _dec27 = type(CCFloat), _dec28 = rangeStep(0.01), _dec29 = displayOrder(7), _dec30 = visible(function () {
        return this._type === FogType.LAYERED;
      }), _dec31 = type(CCFloat), _dec32 = rangeStep(0.01), _dec33 = displayOrder(8), _dec6(_class7 = (_class8 = (_temp3 = _class9 = function () {
        function FogInfo() {
          _initializerDefineProperty(this, "_type", _descriptor8, this);

          _initializerDefineProperty(this, "_fogColor", _descriptor9, this);

          _initializerDefineProperty(this, "_enabled", _descriptor10, this);

          _initializerDefineProperty(this, "_fogDensity", _descriptor11, this);

          _initializerDefineProperty(this, "_fogStart", _descriptor12, this);

          _initializerDefineProperty(this, "_fogEnd", _descriptor13, this);

          _initializerDefineProperty(this, "_fogAtten", _descriptor14, this);

          _initializerDefineProperty(this, "_fogTop", _descriptor15, this);

          _initializerDefineProperty(this, "_fogRange", _descriptor16, this);

          this._resource = null;
        }

        var _proto3 = FogInfo.prototype;

        _proto3.activate = function activate(resource) {
          this._resource = resource;

          this._resource.initialize(this);

          this._resource.activate();
        };

        _createClass(FogInfo, [{
          key: "enabled",
          set: function set(val) {
            if (this._enabled === val) return;
            this._enabled = val;

            if (this._resource) {
              this._resource.enabled = val;

              if (val) {
                this._resource.type = this._type;
              }
            }
          },
          get: function get() {
            return this._enabled;
          }
        }, {
          key: "fogColor",
          set: function set(val) {
            this._fogColor.set(val);

            if (this._resource) {
              this._resource.fogColor = this._fogColor;
            }
          },
          get: function get() {
            return this._fogColor;
          }
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(val) {
            this._type = val;

            if (this._resource) {
              this._resource.type = val;
            }
          }
        }, {
          key: "fogDensity",
          get: function get() {
            return this._fogDensity;
          },
          set: function set(val) {
            this._fogDensity = val;

            if (this._resource) {
              this._resource.fogDensity = val;
            }
          }
        }, {
          key: "fogStart",
          get: function get() {
            return this._fogStart;
          },
          set: function set(val) {
            this._fogStart = val;

            if (this._resource) {
              this._resource.fogStart = val;
            }
          }
        }, {
          key: "fogEnd",
          get: function get() {
            return this._fogEnd;
          },
          set: function set(val) {
            this._fogEnd = val;

            if (this._resource) {
              this._resource.fogEnd = val;
            }
          }
        }, {
          key: "fogAtten",
          get: function get() {
            return this._fogAtten;
          },
          set: function set(val) {
            this._fogAtten = val;

            if (this._resource) {
              this._resource.fogAtten = val;
            }
          }
        }, {
          key: "fogTop",
          get: function get() {
            return this._fogTop;
          },
          set: function set(val) {
            this._fogTop = val;

            if (this._resource) {
              this._resource.fogTop = val;
            }
          }
        }, {
          key: "fogRange",
          get: function get() {
            return this._fogRange;
          },
          set: function set(val) {
            this._fogRange = val;

            if (this._resource) {
              this._resource.fogRange = val;
            }
          }
        }]);

        return FogInfo;
      }(), _class9.FogType = FogType, _temp3), (_descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "_type", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FogType.LINEAR;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "_fogColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color('#C8C8C8');
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "_enabled", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "_fogDensity", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class8.prototype, "_fogStart", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class8.prototype, "_fogEnd", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class8.prototype, "_fogAtten", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class8.prototype, "_fogTop", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.5;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class8.prototype, "_fogRange", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _applyDecoratedDescriptor(_class8.prototype, "enabled", [editable], Object.getOwnPropertyDescriptor(_class8.prototype, "enabled"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogColor", [editable], Object.getOwnPropertyDescriptor(_class8.prototype, "fogColor"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "type", [editable, _dec7], Object.getOwnPropertyDescriptor(_class8.prototype, "type"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogDensity", [_dec8, _dec9, _dec10, _dec11, slide, _dec12], Object.getOwnPropertyDescriptor(_class8.prototype, "fogDensity"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogStart", [_dec13, _dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class8.prototype, "fogStart"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogEnd", [_dec17, _dec18, _dec19, _dec20], Object.getOwnPropertyDescriptor(_class8.prototype, "fogEnd"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogAtten", [_dec21, _dec22, _dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class8.prototype, "fogAtten"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogTop", [_dec26, _dec27, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class8.prototype, "fogTop"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "fogRange", [_dec30, _dec31, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class8.prototype, "fogRange"), _class8.prototype)), _class8)) || _class7);
      var ShadowsInfo = (_dec34 = ccclass('cc.ShadowsInfo'), _dec35 = type(ShadowType), _dec36 = visible(function () {
        return this._type === ShadowType.Planar;
      }), _dec37 = type(CCFloat), _dec38 = visible(function () {
        return this._type === ShadowType.Planar;
      }), _dec39 = type(PCFType), _dec40 = visible(function () {
        return this._type === ShadowType.ShadowMap;
      }), _dec41 = type(CCBoolean), _dec42 = visible(function () {
        return this._type === ShadowType.ShadowMap;
      }), _dec43 = type(CCFloat), _dec44 = visible(function () {
        return this._type === ShadowType.ShadowMap && this._autoAdapt === false;
      }), _dec45 = type(CCFloat), _dec46 = visible(function () {
        return this._type === ShadowType.ShadowMap && this._autoAdapt === false;
      }), _dec47 = type(CCFloat), _dec48 = visible(function () {
        return this._type === ShadowType.ShadowMap && this._autoAdapt === false;
      }), _dec49 = type(CCInteger), _dec50 = visible(function () {
        return this._type === ShadowType.ShadowMap && this._autoAdapt === false;
      }), _dec51 = visible(function () {
        return this._type === ShadowType.ShadowMap && this._autoAdapt === false;
      }), _dec52 = type(CCFloat), _dec53 = visible(function () {
        return this._type === ShadowType.ShadowMap && this._autoAdapt === false;
      }), _dec54 = type(CCFloat), _dec55 = visible(function () {
        return this._type === ShadowType.ShadowMap && this._autoAdapt === false;
      }), _dec34(_class10 = (_class11 = (_temp4 = function () {
        function ShadowsInfo() {
          _initializerDefineProperty(this, "_type", _descriptor17, this);

          _initializerDefineProperty(this, "_enabled", _descriptor18, this);

          _initializerDefineProperty(this, "_normal", _descriptor19, this);

          _initializerDefineProperty(this, "_distance", _descriptor20, this);

          _initializerDefineProperty(this, "_shadowColor", _descriptor21, this);

          _initializerDefineProperty(this, "_autoAdapt", _descriptor22, this);

          _initializerDefineProperty(this, "_pcf", _descriptor23, this);

          _initializerDefineProperty(this, "_bias", _descriptor24, this);

          _initializerDefineProperty(this, "_near", _descriptor25, this);

          _initializerDefineProperty(this, "_far", _descriptor26, this);

          _initializerDefineProperty(this, "_aspect", _descriptor27, this);

          _initializerDefineProperty(this, "_orthoSize", _descriptor28, this);

          _initializerDefineProperty(this, "_maxReceived", _descriptor29, this);

          _initializerDefineProperty(this, "_size", _descriptor30, this);

          this._resource = null;
        }

        var _proto4 = ShadowsInfo.prototype;

        _proto4.setPlaneFromNode = function setPlaneFromNode(node) {
          node.getWorldRotation(_qt);
          this.normal = Vec3.transformQuat(_v3, _up, _qt);
          node.getWorldPosition(_v3);
          this.distance = Vec3.dot(this._normal, _v3);
        };

        _proto4.activate = function activate(resource) {
          this._resource = resource;

          this._resource.initialize(this);

          this._resource.activate();
        };

        _createClass(ShadowsInfo, [{
          key: "enabled",
          set: function set(val) {
            if (this._enabled === val) return;
            this._enabled = val;

            if (this._resource) {
              this._resource.enabled = val;

              if (val) {
                this._resource.type = this._type;
              }
            }
          },
          get: function get() {
            return this._enabled;
          }
        }, {
          key: "type",
          set: function set(val) {
            this._type = val;

            if (this._resource) {
              this._resource.type = val;
            }
          },
          get: function get() {
            return this._type;
          }
        }, {
          key: "shadowColor",
          set: function set(val) {
            this._shadowColor.set(val);

            if (this._resource) {
              this._resource.shadowColor = val;
            }
          },
          get: function get() {
            return this._shadowColor;
          }
        }, {
          key: "normal",
          set: function set(val) {
            Vec3.copy(this._normal, val);

            if (this._resource) {
              this._resource.normal = val;
            }
          },
          get: function get() {
            return this._normal;
          }
        }, {
          key: "distance",
          set: function set(val) {
            this._distance = val;

            if (this._resource) {
              this._resource.distance = val;
            }
          },
          get: function get() {
            return this._distance;
          }
        }, {
          key: "pcf",
          set: function set(val) {
            this._pcf = val;

            if (this._resource) {
              this._resource.pcf = val;
            }
          },
          get: function get() {
            return this._pcf;
          }
        }, {
          key: "autoAdapt",
          set: function set(val) {
            this._autoAdapt = val;

            if (this._resource) {
              this._resource.autoAdapt = val;
            }
          },
          get: function get() {
            return this._autoAdapt;
          }
        }, {
          key: "near",
          set: function set(val) {
            this._near = val;

            if (this._resource) {
              this._resource.near = val;
            }
          },
          get: function get() {
            return this._near;
          }
        }, {
          key: "far",
          set: function set(val) {
            this._far = val;

            if (this._resource) {
              this._resource.far = val;
            }
          },
          get: function get() {
            return this._far;
          }
        }, {
          key: "orthoSize",
          set: function set(val) {
            this._orthoSize = val;

            if (this._resource) {
              this._resource.orthoSize = val;
            }
          },
          get: function get() {
            return this._orthoSize;
          }
        }, {
          key: "maxReceived",
          set: function set(val) {
            this._maxReceived = val;

            if (this._resource) {
              this._resource.maxReceived = val;
            }
          },
          get: function get() {
            return this._maxReceived;
          }
        }, {
          key: "shadowMapSize",
          set: function set(val) {
            this._size.set(val);

            if (this._resource) {
              this._resource.size = val;
              this._resource.shadowMapDirty = true;
            }
          },
          get: function get() {
            return this._size;
          }
        }, {
          key: "aspect",
          set: function set(val) {
            this._aspect = val;

            if (this._resource) {
              this._resource.aspect = val;
            }
          },
          get: function get() {
            return this._aspect;
          }
        }, {
          key: "bias",
          set: function set(val) {
            this._bias = val;

            if (this._resource) {
              this._resource.bias = val;
            }
          },
          get: function get() {
            return this._bias;
          }
        }]);

        return ShadowsInfo;
      }(), _temp4), (_descriptor17 = _applyDecoratedDescriptor(_class11.prototype, "_type", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ShadowType.Planar;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class11.prototype, "_enabled", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class11.prototype, "_normal", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 1, 0);
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class11.prototype, "_distance", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class11.prototype, "_shadowColor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 76);
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class11.prototype, "_autoAdapt", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class11.prototype, "_pcf", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PCFType.HARD;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class11.prototype, "_bias", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.00001;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class11.prototype, "_near", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class11.prototype, "_far", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class11.prototype, "_aspect", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class11.prototype, "_orthoSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class11.prototype, "_maxReceived", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class11.prototype, "_size", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(512, 512);
        }
      }), _applyDecoratedDescriptor(_class11.prototype, "enabled", [editable], Object.getOwnPropertyDescriptor(_class11.prototype, "enabled"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "type", [editable, _dec35], Object.getOwnPropertyDescriptor(_class11.prototype, "type"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "shadowColor", [editable], Object.getOwnPropertyDescriptor(_class11.prototype, "shadowColor"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "normal", [_dec36], Object.getOwnPropertyDescriptor(_class11.prototype, "normal"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "distance", [_dec37, _dec38], Object.getOwnPropertyDescriptor(_class11.prototype, "distance"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "pcf", [_dec39, _dec40], Object.getOwnPropertyDescriptor(_class11.prototype, "pcf"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "autoAdapt", [_dec41, _dec42], Object.getOwnPropertyDescriptor(_class11.prototype, "autoAdapt"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "near", [_dec43, _dec44], Object.getOwnPropertyDescriptor(_class11.prototype, "near"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "far", [_dec45, _dec46], Object.getOwnPropertyDescriptor(_class11.prototype, "far"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "orthoSize", [_dec47, _dec48], Object.getOwnPropertyDescriptor(_class11.prototype, "orthoSize"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "maxReceived", [_dec49, _dec50], Object.getOwnPropertyDescriptor(_class11.prototype, "maxReceived"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "shadowMapSize", [_dec51], Object.getOwnPropertyDescriptor(_class11.prototype, "shadowMapSize"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "aspect", [_dec52, _dec53], Object.getOwnPropertyDescriptor(_class11.prototype, "aspect"), _class11.prototype), _applyDecoratedDescriptor(_class11.prototype, "bias", [_dec54, _dec55], Object.getOwnPropertyDescriptor(_class11.prototype, "bias"), _class11.prototype)), _class11)) || _class10);
      legacyCC.ShadowsInfo = ShadowsInfo;
      var SceneGlobals = (_dec56 = ccclass('cc.SceneGlobals'), _dec57 = type(SkyboxInfo), _dec56(_class13 = (_class14 = (_temp5 = function () {
        function SceneGlobals() {
          _initializerDefineProperty(this, "ambient", _descriptor31, this);

          _initializerDefineProperty(this, "shadows", _descriptor32, this);

          _initializerDefineProperty(this, "_skybox", _descriptor33, this);

          _initializerDefineProperty(this, "fog", _descriptor34, this);
        }

        var _proto5 = SceneGlobals.prototype;

        _proto5.activate = function activate() {
          var pipeline = legacyCC.director.root.pipeline;
          this.ambient.activate(pipeline.ambient);
          this.skybox.activate(pipeline.skybox);
          this.shadows.activate(pipeline.shadows);
          this.fog.activate(pipeline.fog);
        };

        _createClass(SceneGlobals, [{
          key: "skybox",
          get: function get() {
            return this._skybox;
          },
          set: function set(value) {
            this._skybox = value;
          }
        }]);

        return SceneGlobals;
      }(), _temp5), (_descriptor31 = _applyDecoratedDescriptor(_class14.prototype, "ambient", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new AmbientInfo();
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class14.prototype, "shadows", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new ShadowsInfo();
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class14.prototype, "_skybox", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SkyboxInfo();
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class14.prototype, "fog", [editable, serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new FogInfo();
        }
      }), _applyDecoratedDescriptor(_class14.prototype, "skybox", [editable, _dec57], Object.getOwnPropertyDescriptor(_class14.prototype, "skybox"), _class14.prototype)), _class14)) || _class13);
      legacyCC.SceneGlobals = SceneGlobals;

      var _dec$1, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _temp$1;
      var Scene = exports('S', (_dec$1 = ccclass('cc.Scene'), _dec$1(_class$1 = (_class2$1 = (_temp$1 = function (_BaseNode) {
        _inheritsLoose(Scene, _BaseNode);

        var _proto = Scene.prototype;

        _proto._updateScene = function _updateScene() {
          this._scene = this;
        };

        _createClass(Scene, [{
          key: "renderScene",
          get: function get() {
            return this._renderScene;
          }
        }, {
          key: "globals",
          get: function get() {
            return this._globals;
          }
        }]);

        function Scene(name) {
          var _this;

          _this = _BaseNode.call(this, name) || this;

          _initializerDefineProperty(_this, "autoReleaseAssets", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_globals", _descriptor2$1, _assertThisInitialized(_this));

          _this._renderScene = null;
          _this.dependAssets = null;
          _this._inited = void 0;
          _this._prefabSyncedInLiveReload = false;
          _this._pos = Vec3.ZERO;
          _this._rot = Quat.IDENTITY;
          _this._scale = Vec3.ONE;
          _this._mat = Mat4.IDENTITY;
          _this._dirtyFlags = 0;
          _this._activeInHierarchy = false;

          if (legacyCC.director && legacyCC.director.root) {
            _this._renderScene = legacyCC.director.root.createScene({});
          }

          _this._inited = legacyCC.game ? !legacyCC.game._isCloning : true;
          return _this;
        }

        _proto.destroy = function destroy() {
          var success = CCObject.prototype.destroy.call(this);

          if (success) {
            var children = this._children;

            for (var i = 0; i < children.length; ++i) {
              children[i].active = false;
            }
          }

          legacyCC.director.root.destroyScene(this._renderScene);
          this._active = false;
          this._activeInHierarchy = false;
          return success;
        };

        _proto.addComponent = function addComponent() {
          throw new Error(getError(3822));
        };

        _proto._onHierarchyChanged = function _onHierarchyChanged() {};

        _proto._onBatchCreated = function _onBatchCreated(dontSyncChildPrefab) {
          _BaseNode.prototype._onBatchCreated.call(this, dontSyncChildPrefab);

          var len = this._children.length;

          for (var i = 0; i < len; ++i) {
            this._children[i]._onBatchCreated(dontSyncChildPrefab);
          }

          applyTargetOverrides(this);
        };

        _proto.getPosition = function getPosition(out) {
          return Vec3.copy(out || new Vec3(), Vec3.ZERO);
        };

        _proto.getRotation = function getRotation(out) {
          return Quat.copy(out || new Quat(), Quat.IDENTITY);
        };

        _proto.getScale = function getScale(out) {
          return Vec3.copy(out || new Vec3(), Vec3.ONE);
        };

        _proto.getWorldPosition = function getWorldPosition(out) {
          return Vec3.copy(out || new Vec3(), Vec3.ZERO);
        };

        _proto.getWorldRotation = function getWorldRotation(out) {
          return Quat.copy(out || new Quat(), Quat.IDENTITY);
        };

        _proto.getWorldScale = function getWorldScale(out) {
          return Vec3.copy(out || new Vec3(), Vec3.ONE);
        };

        _proto.getWorldMatrix = function getWorldMatrix(out) {
          return Mat4.copy(out || new Mat4(), Mat4.IDENTITY);
        };

        _proto.getWorldRS = function getWorldRS(out) {
          return Mat4.copy(out || new Mat4(), Mat4.IDENTITY);
        };

        _proto.getWorldRT = function getWorldRT(out) {
          return Mat4.copy(out || new Mat4(), Mat4.IDENTITY);
        };

        _proto.updateWorldTransform = function updateWorldTransform() {};

        _proto._instantiate = function _instantiate() {};

        _proto._load = function _load() {
          if (!this._inited) {

            this._onBatchCreated(EDITOR );

            this._inited = true;
          }

          this.walk(BaseNode._setScene);
        };

        _proto._activate = function _activate(active) {
          active = active !== false;

          legacyCC.director._nodeActivator.activateNode(this, active);

          this._globals.activate();
        };

        _createClass(Scene, [{
          key: "position",
          get: function get() {
            return Vec3.ZERO;
          }
        }, {
          key: "worldPosition",
          get: function get() {
            return Vec3.ZERO;
          }
        }, {
          key: "rotation",
          get: function get() {
            return Quat.IDENTITY;
          }
        }, {
          key: "worldRotation",
          get: function get() {
            return Quat.IDENTITY;
          }
        }, {
          key: "scale",
          get: function get() {
            return Vec3.ONE;
          }
        }, {
          key: "worldScale",
          get: function get() {
            return Vec3.ONE;
          }
        }, {
          key: "eulerAngles",
          get: function get() {
            return Vec3.ZERO;
          }
        }, {
          key: "worldMatrix",
          get: function get() {
            return Mat4.IDENTITY;
          }
        }]);

        return Scene;
      }(BaseNode), _temp$1), (_applyDecoratedDescriptor(_class2$1.prototype, "globals", [editable], Object.getOwnPropertyDescriptor(_class2$1.prototype, "globals"), _class2$1.prototype), _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "autoReleaseAssets", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_globals", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SceneGlobals();
        }
      })), _class2$1)) || _class$1));
      legacyCC.Scene = Scene;

      var _dec$2, _class$2;
      var HideInHierarchy = CCObject.Flags.HideInHierarchy;
      var PrivateNode = exports('P', (_dec$2 = ccclass('cc.PrivateNode'), _dec$2(_class$2 = function (_Node) {
        _inheritsLoose(PrivateNode, _Node);

        function PrivateNode(name) {
          var _this;

          _this = _Node.call(this, name) || this;

          return _this;
        }

        return PrivateNode;
      }(Node)) || _class$2));

      legacyCC.PrivateNode = PrivateNode;

      var fastRemoveAt = array.fastRemoveAt;
      var IsStartCalled = CCObject.Flags.IsStartCalled;
      var IsOnEnableCalled = CCObject.Flags.IsOnEnableCalled;
      var IsEditorOnEnableCalled = CCObject.Flags.IsEditorOnEnableCalled;

      function sortedIndex(array, comp) {
        var order = comp.constructor._executionOrder;
        var id = comp._id;
        var l = 0;

        for (var h = array.length - 1, m = h >>> 1; l <= h; m = l + h >>> 1) {
          var test = array[m];
          var testOrder = test.constructor._executionOrder;

          if (testOrder > order) {
            h = m - 1;
          } else if (testOrder < order) {
            l = m + 1;
          } else {
            var testId = test._id;

            if (testId > id) {
              h = m - 1;
            } else if (testId < id) {
              l = m + 1;
            } else {
              return m;
            }
          }
        }

        return ~l;
      }

      function stableRemoveInactive(iterator, flagToClear) {
        var array = iterator.array;
        var next = iterator.i + 1;

        while (next < array.length) {
          var comp = array[next];

          if (comp._enabled && comp.node._activeInHierarchy) {
            ++next;
          } else {
            iterator.removeAt(next);

            if (flagToClear) {
              comp._objFlags &= ~flagToClear;
            }
          }
        }
      }

      var LifeCycleInvoker = function LifeCycleInvoker(invokeFunc) {
        this._zero = void 0;
        this._neg = void 0;
        this._pos = void 0;
        this._invoke = void 0;
        var Iterator = MutableForwardIterator;
        this._zero = new Iterator([]);
        this._neg = new Iterator([]);
        this._pos = new Iterator([]);

        this._invoke = invokeFunc;
      };
      LifeCycleInvoker.stableRemoveInactive = stableRemoveInactive;

      function compareOrder(a, b) {
        return a.constructor._executionOrder - b.constructor._executionOrder;
      }

      var OneOffInvoker = function (_LifeCycleInvoker) {
        _inheritsLoose(OneOffInvoker, _LifeCycleInvoker);

        function OneOffInvoker() {
          return _LifeCycleInvoker.apply(this, arguments) || this;
        }

        var _proto = OneOffInvoker.prototype;

        _proto.add = function add(comp) {
          var order = comp.constructor._executionOrder;
          (order === 0 ? this._zero : order < 0 ? this._neg : this._pos).array.push(comp);
        };

        _proto.remove = function remove(comp) {
          var order = comp.constructor._executionOrder;
          (order === 0 ? this._zero : order < 0 ? this._neg : this._pos).fastRemove(comp);
        };

        _proto.cancelInactive = function cancelInactive(flagToClear) {
          stableRemoveInactive(this._zero, flagToClear);
          stableRemoveInactive(this._neg, flagToClear);
          stableRemoveInactive(this._pos, flagToClear);
        };

        _proto.invoke = function invoke() {
          var compsNeg = this._neg;

          if (compsNeg.array.length > 0) {
            compsNeg.array.sort(compareOrder);

            this._invoke(compsNeg);

            compsNeg.array.length = 0;
          }

          this._invoke(this._zero);

          this._zero.array.length = 0;
          var compsPos = this._pos;

          if (compsPos.array.length > 0) {
            compsPos.array.sort(compareOrder);

            this._invoke(compsPos);

            compsPos.array.length = 0;
          }
        };

        return OneOffInvoker;
      }(LifeCycleInvoker);

      var ReusableInvoker = function (_LifeCycleInvoker2) {
        _inheritsLoose(ReusableInvoker, _LifeCycleInvoker2);

        function ReusableInvoker() {
          return _LifeCycleInvoker2.apply(this, arguments) || this;
        }

        var _proto2 = ReusableInvoker.prototype;

        _proto2.add = function add(comp) {
          var order = comp.constructor._executionOrder;

          if (order === 0) {
            this._zero.array.push(comp);
          } else {
            var _array = order < 0 ? this._neg.array : this._pos.array;

            var i = sortedIndex(_array, comp);

            if (i < 0) {
              _array.splice(~i, 0, comp);
            } else {
              error('component already added');
            }
          }
        };

        _proto2.remove = function remove(comp) {
          var order = comp.constructor._executionOrder;

          if (order === 0) {
            this._zero.fastRemove(comp);
          } else {
            var iterator = order < 0 ? this._neg : this._pos;
            var i = sortedIndex(iterator.array, comp);

            if (i >= 0) {
              iterator.removeAt(i);
            }
          }
        };

        _proto2.invoke = function invoke(dt) {
          if (this._neg.array.length > 0) {
            this._invoke(this._neg, dt);
          }

          this._invoke(this._zero, dt);

          if (this._pos.array.length > 0) {
            this._invoke(this._pos, dt);
          }
        };

        return ReusableInvoker;
      }(LifeCycleInvoker);

      function createInvokeImplJit(code, useDt, ensureFlag) {
        var body = "" + ('var a=it.array;' + 'for(it.i=0;it.i<a.length;++it.i){' + 'var c=a[it.i];') + code + "}";
        var fastPath = useDt ? Function('it', 'dt', body) : Function('it', body);
        var singleInvoke = Function('c', 'dt', code);
        return createInvokeImpl(singleInvoke, fastPath, ensureFlag);
      }
      function createInvokeImpl(singleInvoke, fastPath, ensureFlag) {
        return function (iterator, dt) {
          try {
            fastPath(iterator, dt);
          } catch (e) {
            legacyCC._throw(e);

            var _array2 = iterator.array;

            if (ensureFlag) {
              _array2[iterator.i]._objFlags |= ensureFlag;
            }

            ++iterator.i;

            for (; iterator.i < _array2.length; ++iterator.i) {
              try {
                singleInvoke(_array2[iterator.i], dt);
              } catch (e) {
                legacyCC._throw(e);

                if (ensureFlag) {
                  _array2[iterator.i]._objFlags |= ensureFlag;
                }
              }
            }
          }
        };
      }
      var invokeStart =  createInvokeImplJit("c.start();c._objFlags|=" + IsStartCalled, false, IsStartCalled) ;
      var invokeUpdate =  createInvokeImplJit('c.update(dt)', true) ;
      var invokeLateUpdate =  createInvokeImplJit('c.lateUpdate(dt)', true) ;
      var invokeOnEnable =  function (iterator) {
        var compScheduler = legacyCC.director._compScheduler;
        var array = iterator.array;

        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var comp = array[iterator.i];

          if (comp._enabled) {
            comp.onEnable();
            var deactivatedDuringOnEnable = !comp.node._activeInHierarchy;

            if (!deactivatedDuringOnEnable) {
              compScheduler._onEnabled(comp);
            }
          }
        }
      };
      var ComponentScheduler = exports('a', function () {
        function ComponentScheduler() {
          this._deferredComps = [];
          this.unscheduleAll();
        }

        var _proto3 = ComponentScheduler.prototype;

        _proto3.unscheduleAll = function unscheduleAll() {
          this.startInvoker = new OneOffInvoker(invokeStart);
          this.updateInvoker = new ReusableInvoker(invokeUpdate);
          this.lateUpdateInvoker = new ReusableInvoker(invokeLateUpdate);
          this._updating = false;
        };

        _proto3._onEnabled = function _onEnabled(comp) {
          legacyCC.director.getScheduler().resumeTarget(comp);
          comp._objFlags |= IsOnEnableCalled;

          if (this._updating) {
            this._deferredComps.push(comp);
          } else {
            this._scheduleImmediate(comp);
          }
        };

        _proto3._onDisabled = function _onDisabled(comp) {
          legacyCC.director.getScheduler().pauseTarget(comp);
          comp._objFlags &= ~IsOnEnableCalled;

          var index = this._deferredComps.indexOf(comp);

          if (index >= 0) {
            fastRemoveAt(this._deferredComps, index);
            return;
          }

          if (comp.start && !(comp._objFlags & IsStartCalled)) {
            this.startInvoker.remove(comp);
          }

          if (comp.update) {
            this.updateInvoker.remove(comp);
          }

          if (comp.lateUpdate) {
            this.lateUpdateInvoker.remove(comp);
          }
        };

        _proto3.enableComp = function enableComp(comp, invoker) {
          if (!(comp._objFlags & IsOnEnableCalled)) {
            if (comp.onEnable) {
              if (invoker) {
                invoker.add(comp);
                return;
              } else {
                comp.onEnable();
                var deactivatedDuringOnEnable = !comp.node._activeInHierarchy;

                if (deactivatedDuringOnEnable) {
                  return;
                }
              }
            }

            this._onEnabled(comp);
          }
        };

        _proto3.disableComp = function disableComp(comp) {
          if (comp._objFlags & IsOnEnableCalled) {
            if (comp.onDisable) {
              comp.onDisable();
            }

            this._onDisabled(comp);
          }
        };

        _proto3.startPhase = function startPhase() {
          this._updating = true;
          this.startInvoker.invoke();

          this._startForNewComps();
        };

        _proto3.updatePhase = function updatePhase(dt) {
          this.updateInvoker.invoke(dt);
        };

        _proto3.lateUpdatePhase = function lateUpdatePhase(dt) {
          this.lateUpdateInvoker.invoke(dt);
          this._updating = false;

          this._startForNewComps();
        };

        _proto3._startForNewComps = function _startForNewComps() {
          if (this._deferredComps.length > 0) {
            this._deferredSchedule();

            this.startInvoker.invoke();
          }
        };

        _proto3._scheduleImmediate = function _scheduleImmediate(comp) {
          if (typeof comp.start === 'function' && !(comp._objFlags & IsStartCalled)) {
            this.startInvoker.add(comp);
          }

          if (typeof comp.update === 'function') {
            this.updateInvoker.add(comp);
          }

          if (typeof comp.lateUpdate === 'function') {
            this.lateUpdateInvoker.add(comp);
          }
        };

        _proto3._deferredSchedule = function _deferredSchedule() {
          var comps = this._deferredComps;

          for (var i = 0, len = comps.length; i < len; i++) {
            this._scheduleImmediate(comps[i]);
          }

          comps.length = 0;
        };

        return ComponentScheduler;
      }());

      var MAX_POOL_SIZE = 4;
      var IsPreloadStarted = CCObject.Flags.IsPreloadStarted;
      var IsOnLoadStarted = CCObject.Flags.IsOnLoadStarted;
      var IsOnLoadCalled = CCObject.Flags.IsOnLoadCalled;
      var Deactivating = CCObject.Flags.Deactivating;

      var UnsortedInvoker = function (_LifeCycleInvoker) {
        _inheritsLoose(UnsortedInvoker, _LifeCycleInvoker);

        function UnsortedInvoker() {
          return _LifeCycleInvoker.apply(this, arguments) || this;
        }

        var _proto = UnsortedInvoker.prototype;

        _proto.add = function add(comp) {
          this._zero.array.push(comp);
        };

        _proto.remove = function remove(comp) {
          this._zero.fastRemove(comp);
        };

        _proto.cancelInactive = function cancelInactive(flagToClear) {
          LifeCycleInvoker.stableRemoveInactive(this._zero, flagToClear);
        };

        _proto.invoke = function invoke() {
          this._invoke(this._zero);

          this._zero.array.length = 0;
        };

        return UnsortedInvoker;
      }(LifeCycleInvoker);

      var invokePreload =  createInvokeImplJit('c.__preload();') ;
      var invokeOnLoad =  createInvokeImplJit("c.onLoad();c._objFlags|=" + IsOnLoadCalled, false, IsOnLoadCalled) ;
      var activateTasksPool = new Pool(MAX_POOL_SIZE);

      activateTasksPool.get = function getActivateTask() {
        var task = this._get() || {
          preload: new UnsortedInvoker(invokePreload),
          onLoad: new OneOffInvoker(invokeOnLoad),
          onEnable: new OneOffInvoker(invokeOnEnable)
        };
        task.preload._zero.i = -1;
        var invoker = task.onLoad;
        invoker._zero.i = -1;
        invoker._neg.i = -1;
        invoker._pos.i = -1;
        invoker = task.onEnable;
        invoker._zero.i = -1;
        invoker._neg.i = -1;
        invoker._pos.i = -1;
        return task;
      };

      function _componentCorrupted(node, comp, index) {
        {
          errorID(3817, node.name, index);
          console.log('Corrupted component value:', comp);
        }

        if (comp) {
          node._removeComponent(comp);
        } else {
          array.removeAt(node._components, index);
        }
      }

      var NodeActivator = exports('N', function () {
        function NodeActivator() {
          this.resetComp = void 0;
          this.reset();
        }

        var _proto2 = NodeActivator.prototype;

        _proto2.reset = function reset() {
          this._activatingStack = [];
        };

        _proto2.activateNode = function activateNode(node, active) {
          if (active) {
            var task = activateTasksPool.get();

            this._activatingStack.push(task);

            this._activateNodeRecursively(node, task.preload, task.onLoad, task.onEnable);

            task.preload.invoke();
            task.onLoad.invoke();
            task.onEnable.invoke();

            this._activatingStack.pop();

            activateTasksPool.put(task);
          } else {
            this._deactivateNodeRecursively(node);

            var stack = this._activatingStack;

            for (var _iterator = _createForOfIteratorHelperLoose(stack), _step; !(_step = _iterator()).done;) {
              var lastTask = _step.value;
              lastTask.preload.cancelInactive(IsPreloadStarted);
              lastTask.onLoad.cancelInactive(IsOnLoadStarted);
              lastTask.onEnable.cancelInactive();
            }
          }

          node.emit('active-in-hierarchy-changed', node);
        };

        _proto2.activateComp = function activateComp(comp, preloadInvoker, onLoadInvoker, onEnableInvoker) {
          if (!isValid(comp, true)) {
            return;
          }

          if (!(comp._objFlags & IsPreloadStarted)) {
            comp._objFlags |= IsPreloadStarted;

            if (comp.__preload) {
              if (preloadInvoker) {
                preloadInvoker.add(comp);
              } else {
                comp.__preload();
              }
            }
          }

          if (!(comp._objFlags & IsOnLoadStarted)) {
            comp._objFlags |= IsOnLoadStarted;

            if (comp.onLoad) {
              if (onLoadInvoker) {
                onLoadInvoker.add(comp);
              } else {
                comp.onLoad();
                comp._objFlags |= IsOnLoadCalled;
              }
            } else {
              comp._objFlags |= IsOnLoadCalled;
            }
          }

          if (comp._enabled) {
            var deactivatedOnLoading = !comp.node._activeInHierarchy;

            if (deactivatedOnLoading) {
              return;
            }

            legacyCC.director._compScheduler.enableComp(comp, onEnableInvoker);
          }
        };

        _proto2.destroyComp = function destroyComp(comp) {
          legacyCC.director._compScheduler.disableComp(comp);

          if (comp.onDestroy && comp._objFlags & IsOnLoadCalled) {
            comp.onDestroy();
          }
        };

        _proto2._activateNodeRecursively = function _activateNodeRecursively(node, preloadInvoker, onLoadInvoker, onEnableInvoker) {
          if (node._objFlags & Deactivating) {
            errorID(3816, node.name);
            return;
          }

          node._activeInHierarchy = true;
          var originCount = node._components.length;

          for (var i = 0; i < originCount; ++i) {
            var component = node._components[i];

            if (component instanceof legacyCC.Component) {
              this.activateComp(component, preloadInvoker, onLoadInvoker, onEnableInvoker);
            } else {
              _componentCorrupted(node, component, i);

              --i;
              --originCount;
            }
          }

          node._childArrivalOrder = node._children.length;

          for (var _i = 0, len = node._children.length; _i < len; ++_i) {
            var child = node._children[_i];

            if (child._active) {
              this._activateNodeRecursively(child, preloadInvoker, onLoadInvoker, onEnableInvoker);
            }
          }

          node._onPostActivated(true);
        };

        _proto2._deactivateNodeRecursively = function _deactivateNodeRecursively(node) {
          {
            assert(!(node._objFlags & Deactivating), 'node should not deactivating');
            assert(node._activeInHierarchy, 'node should not deactivated');
          }

          node._objFlags |= Deactivating;
          node._activeInHierarchy = false;
          var originCount = node._components.length;

          for (var c = 0; c < originCount; ++c) {
            var component = node._components[c];

            if (component._enabled) {
              legacyCC.director._compScheduler.disableComp(component);

              if (node._activeInHierarchy) {
                node._objFlags &= ~Deactivating;
                return;
              }
            }
          }

          for (var i = 0, len = node._children.length; i < len; ++i) {
            var child = node._children[i];

            if (child._activeInHierarchy) {
              this._deactivateNodeRecursively(child);

              if (node._activeInHierarchy) {
                node._objFlags &= ~Deactivating;
                return;
              }
            }
          }

          node._onPostActivated(false);

          node._objFlags &= ~Deactivating;
        };

        return NodeActivator;
      }());

      var _dec$3, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _dec15$1, _dec16$1, _dec17$1, _dec18$1, _dec19$1, _dec20$1, _dec21$1, _dec22$1, _dec23$1, _dec24$1, _dec25$1, _dec26$1, _dec27$1, _dec28$1, _dec29$1, _dec30$1, _dec31$1, _dec32$1, _dec33$1, _dec34$1, _dec35$1, _dec36$1, _dec37$1, _dec38$1, _dec39$1, _dec40$1, _dec41$1, _dec42$1, _dec43$1, _dec44$1, _dec45$1, _class$3, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9$1, _descriptor10$1, _descriptor11$1, _descriptor12$1, _descriptor13$1, _descriptor14$1, _descriptor15$1, _descriptor16$1, _descriptor17$1, _descriptor18$1, _class3, _temp$2;

      var _temp_vec3_1 = new Vec3();

      var ProjectionType = Enum(CameraProjection);
      var FOVAxis = Enum(CameraFOVAxis);
      var Aperture = Enum(CameraAperture);
      var Shutter = Enum(CameraShutter);
      var ISO = Enum(CameraISO);
      var ClearFlag = Enum({
        SKYBOX: SKYBOX_FLAG | ClearFlag$1.DEPTH_STENCIL,
        SOLID_COLOR: ClearFlag$1.ALL,
        DEPTH_ONLY: ClearFlag$1.DEPTH_STENCIL,
        DONT_CLEAR: ClearFlag$1.NONE
      });
      var Camera = exports('C', (_dec$3 = ccclass('cc.Camera'), _dec2$1 = help('i18n:cc.Camera'), _dec3$1 = menu('Rendering/Camera'), _dec4$1 = displayOrder(0), _dec5$1 = tooltip('i18n:camera.priority'), _dec6$1 = type(Layers.BitMask), _dec7$1 = displayOrder(1), _dec8$1 = tooltip('i18n:camera.visibility'), _dec9$1 = type(ClearFlag), _dec10$1 = displayOrder(2), _dec11$1 = tooltip('i18n:camera.clear_flags'), _dec12$1 = displayOrder(3), _dec13$1 = tooltip('i18n:camera.color'), _dec14$1 = displayOrder(4), _dec15$1 = tooltip('i18n:camera.depth'), _dec16$1 = displayOrder(5), _dec17$1 = tooltip('i18n:camera.stencil'), _dec18$1 = type(ProjectionType), _dec19$1 = displayOrder(6), _dec20$1 = tooltip('i18n:camera.projection'), _dec21$1 = type(FOVAxis), _dec22$1 = displayOrder(7), _dec23$1 = tooltip('i18n:camera.fov_axis'), _dec24$1 = displayOrder(8), _dec25$1 = tooltip('i18n:camera.fov'), _dec26$1 = displayOrder(9), _dec27$1 = tooltip('i18n:camera.ortho_height'), _dec28$1 = displayOrder(10), _dec29$1 = tooltip('i18n:camera.near'), _dec30$1 = displayOrder(11), _dec31$1 = tooltip('i18n:camera.far'), _dec32$1 = type(Aperture), _dec33$1 = displayOrder(12), _dec34$1 = tooltip('i18n:camera.aperture'), _dec35$1 = type(Shutter), _dec36$1 = displayOrder(13), _dec37$1 = tooltip('i18n:camera.shutter'), _dec38$1 = type(ISO), _dec39$1 = displayOrder(14), _dec40$1 = tooltip('i18n:camera.ISO'), _dec41$1 = displayOrder(15), _dec42$1 = tooltip('i18n:camera.rect'), _dec43$1 = type(RenderTexture), _dec44$1 = displayOrder(16), _dec45$1 = tooltip('i18n:camera.target_texture'), _dec$3(_class$3 = _dec2$1(_class$3 = _dec3$1(_class$3 = executeInEditMode(_class$3 = (_class2$2 = (_temp$2 = _class3 = function (_Component) {
        _inheritsLoose(Camera, _Component);

        function Camera() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_projection", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_priority", _descriptor2$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fov", _descriptor3$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fovAxis", _descriptor4$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_orthoHeight", _descriptor5$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_near", _descriptor6$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_far", _descriptor7$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_color", _descriptor8$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_depth", _descriptor9$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_stencil", _descriptor10$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_clearFlags", _descriptor11$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_rect", _descriptor12$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_aperture", _descriptor13$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_shutter", _descriptor14$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_iso", _descriptor15$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_screenScale", _descriptor16$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_visibility", _descriptor17$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_targetTexture", _descriptor18$1, _assertThisInitialized(_this));

          _this._camera = null;
          _this._inEditorMode = false;
          _this._flows = undefined;
          return _this;
        }

        var _proto = Camera.prototype;

        _proto.onLoad = function onLoad() {
          this._createCamera();
        };

        _proto.onEnable = function onEnable() {
          this.node.hasChangedFlags |= TransformBit.POSITION;

          if (this._camera) {
            this._attachToScene();
          }
        };

        _proto.onDisable = function onDisable() {
          if (this._camera) {
            this._detachFromScene();
          }
        };

        _proto.onDestroy = function onDestroy() {
          if (this._camera) {
            this._camera.destroy();

            this._camera = null;
          }

          if (this._targetTexture) {
            this._targetTexture.off('resize');
          }
        };

        _proto.screenPointToRay = function screenPointToRay(x, y, out) {
          if (!out) {
            out = Ray.create();
          }

          if (this._camera) {
            this._camera.screenPointToRay(out, x, y);
          }

          return out;
        };

        _proto.worldToScreen = function worldToScreen(worldPos, out) {
          if (!out) {
            out = new Vec3();
          }

          if (this._camera) {
            this._camera.worldToScreen(out, worldPos);
          }

          return out;
        };

        _proto.screenToWorld = function screenToWorld(screenPos, out) {
          if (!out) {
            out = this.node.getWorldPosition();
          }

          if (this._camera) {
            this._camera.screenToWorld(out, screenPos);
          }

          return out;
        };

        _proto.convertToUINode = function convertToUINode(wpos, uiNode, out) {
          if (!out) {
            out = new Vec3();
          }

          if (!this._camera) {
            return out;
          }

          this.worldToScreen(wpos, _temp_vec3_1);
          var cmp = uiNode.getComponent('cc.UITransform');
          var designSize = view.getVisibleSize();
          var xoffset = _temp_vec3_1.x - this._camera.width * 0.5;
          var yoffset = _temp_vec3_1.y - this._camera.height * 0.5;
          _temp_vec3_1.x = xoffset / legacyCC.view.getScaleX() + designSize.width * 0.5;
          _temp_vec3_1.y = yoffset / legacyCC.view.getScaleY() + designSize.height * 0.5;

          if (cmp) {
            cmp.convertToNodeSpaceAR(_temp_vec3_1, out);
          }

          return out;
        };

        _proto._createCamera = function _createCamera() {
          if (!this._camera) {
            this._camera = legacyCC.director.root.createCamera();

            this._camera.initialize({
              name: this.node.name,
              node: this.node,
              projection: this._projection,
              window: this._inEditorMode ? legacyCC.director.root && legacyCC.director.root.mainWindow : legacyCC.director.root && legacyCC.director.root.tempWindow,
              priority: this._priority
            });

            this._camera.viewport = this._rect;
            this._camera.fovAxis = this._fovAxis;
            this._camera.fov = toRadian(this._fov);
            this._camera.orthoHeight = this._orthoHeight;
            this._camera.nearClip = this._near;
            this._camera.farClip = this._far;
            this._camera.clearColor = this._color;
            this._camera.clearDepth = this._depth;
            this._camera.clearStencil = this._stencil;
            this._camera.clearFlag = this._clearFlags;
            this._camera.visibility = this._visibility;
            this._camera.aperture = this._aperture;
            this._camera.shutter = this._shutter;
            this._camera.iso = this._iso;
          }

          this._updateTargetTexture();
        };

        _proto._attachToScene = function _attachToScene() {
          if (!this.node.scene || !this._camera) {
            return;
          }

          if (this._camera && this._camera.scene) {
            this._camera.scene.removeCamera(this._camera);
          }

          var rs = this._getRenderScene();

          rs.addCamera(this._camera);
        };

        _proto._detachFromScene = function _detachFromScene() {
          if (this._camera && this._camera.scene) {
            this._camera.scene.removeCamera(this._camera);
          }
        };

        _proto._chechTargetTextureEvent = function _chechTargetTextureEvent(old) {
          var _this2 = this;

          var resizeFunc = function resizeFunc(window) {
            if (_this2._camera) {
              _this2._camera.setFixedSize(window.width, window.height);
            }
          };

          if (old) {
            old.off('resize');
          }

          if (this._targetTexture) {
            this._targetTexture.on('resize', resizeFunc, this);
          }
        };

        _proto._updateTargetTexture = function _updateTargetTexture() {
          if (!this._camera) {
            return;
          }

          if (this._targetTexture) {
            var window = this._targetTexture.window;

            this._camera.changeTargetWindow(window);

            this._camera.setFixedSize(window.width, window.height);
          }
        };

        _createClass(Camera, [{
          key: "camera",
          get: function get() {
            return this._camera;
          }
        }, {
          key: "priority",
          get: function get() {
            return this._priority;
          },
          set: function set(val) {
            this._priority = val;

            if (this._camera) {
              this._camera.priority = val;
            }
          }
        }, {
          key: "visibility",
          get: function get() {
            return this._visibility;
          },
          set: function set(val) {
            this._visibility = val;

            if (this._camera) {
              this._camera.visibility = val;
            }
          }
        }, {
          key: "clearFlags",
          get: function get() {
            return this._clearFlags;
          },
          set: function set(val) {
            this._clearFlags = val;

            if (this._camera) {
              this._camera.clearFlag = val;
            }
          }
        }, {
          key: "clearColor",
          get: function get() {
            return this._color;
          },
          set: function set(val) {
            this._color.set(val);

            if (this._camera) {
              this._camera.clearColor = this._color;
            }
          }
        }, {
          key: "clearDepth",
          get: function get() {
            return this._depth;
          },
          set: function set(val) {
            this._depth = val;

            if (this._camera) {
              this._camera.clearDepth = val;
            }
          }
        }, {
          key: "clearStencil",
          get: function get() {
            return this._stencil;
          },
          set: function set(val) {
            this._stencil = val;

            if (this._camera) {
              this._camera.clearStencil = val;
            }
          }
        }, {
          key: "projection",
          get: function get() {
            return this._projection;
          },
          set: function set(val) {
            this._projection = val;

            if (this._camera) {
              this._camera.projectionType = val;
            }
          }
        }, {
          key: "fovAxis",
          get: function get() {
            return this._fovAxis;
          },
          set: function set(val) {
            if (val === this._fovAxis) {
              return;
            }

            this._fovAxis = val;

            if (this._camera) {
              this._camera.fovAxis = val;

              if (val === CameraFOVAxis.VERTICAL) {
                this.fov = this._fov * this._camera.aspect;
              } else {
                this.fov = this._fov / this._camera.aspect;
              }
            }
          }
        }, {
          key: "fov",
          get: function get() {
            return this._fov;
          },
          set: function set(val) {
            this._fov = val;

            if (this._camera) {
              this._camera.fov = toRadian(val);
            }
          }
        }, {
          key: "orthoHeight",
          get: function get() {
            return this._orthoHeight;
          },
          set: function set(val) {
            this._orthoHeight = val;

            if (this._camera) {
              this._camera.orthoHeight = val;
            }
          }
        }, {
          key: "near",
          get: function get() {
            return this._near;
          },
          set: function set(val) {
            this._near = val;

            if (this._camera) {
              this._camera.nearClip = val;
            }
          }
        }, {
          key: "far",
          get: function get() {
            return this._far;
          },
          set: function set(val) {
            this._far = val;

            if (this._camera) {
              this._camera.farClip = val;
            }
          }
        }, {
          key: "aperture",
          get: function get() {
            return this._aperture;
          },
          set: function set(val) {
            this._aperture = val;

            if (this._camera) {
              this._camera.aperture = val;
            }
          }
        }, {
          key: "shutter",
          get: function get() {
            return this._shutter;
          },
          set: function set(val) {
            this._shutter = val;

            if (this._camera) {
              this._camera.shutter = val;
            }
          }
        }, {
          key: "iso",
          get: function get() {
            return this._iso;
          },
          set: function set(val) {
            this._iso = val;

            if (this._camera) {
              this._camera.iso = val;
            }
          }
        }, {
          key: "rect",
          get: function get() {
            return this._rect;
          },
          set: function set(val) {
            this._rect = val;

            if (this._camera) {
              this._camera.viewport = val;
            }
          }
        }, {
          key: "targetTexture",
          get: function get() {
            return this._targetTexture;
          },
          set: function set(value) {
            if (this._targetTexture === value) {
              return;
            }

            var old = this._targetTexture;
            this._targetTexture = value;

            this._chechTargetTextureEvent(old);

            this._updateTargetTexture();

            if (!value && this._camera) {
              this._camera.changeTargetWindow( null);

              this._camera.isWindowSize = true;
            }
          }
        }, {
          key: "screenScale",
          get: function get() {
            return this._screenScale;
          },
          set: function set(val) {
            this._screenScale = val;

            if (this._camera) {
              this._camera.screenScale = val;
            }
          }
        }, {
          key: "inEditorMode",
          get: function get() {
            return this._inEditorMode;
          },
          set: function set(value) {
            this._inEditorMode = value;

            if (this._camera) {
              this._camera.changeTargetWindow(value ? legacyCC.director.root && legacyCC.director.root.mainWindow : legacyCC.director.root && legacyCC.director.root.tempWindow);
            }
          }
        }]);

        return Camera;
      }(Component), _class3.ProjectionType = ProjectionType, _class3.FOVAxis = FOVAxis, _class3.ClearFlag = ClearFlag, _class3.Aperture = Aperture, _class3.Shutter = Shutter, _class3.ISO = ISO, _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_projection", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ProjectionType.PERSPECTIVE;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_priority", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_fov", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_fovAxis", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FOVAxis.VERTICAL;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_orthoHeight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_near", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_far", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_color", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color('#333333');
        }
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_depth", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_stencil", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_clearFlags", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ClearFlag.SOLID_COLOR;
        }
      }), _descriptor12$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_rect", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Rect(0, 0, 1, 1);
        }
      }), _descriptor13$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_aperture", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Aperture.F16_0;
        }
      }), _descriptor14$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_shutter", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Shutter.D125;
        }
      }), _descriptor15$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_iso", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ISO.ISO100;
        }
      }), _descriptor16$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_screenScale", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor17$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_visibility", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CAMERA_DEFAULT_MASK;
        }
      }), _descriptor18$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_targetTexture", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$2.prototype, "priority", [_dec4$1, _dec5$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "priority"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "visibility", [_dec6$1, _dec7$1, _dec8$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "visibility"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearFlags", [_dec9$1, _dec10$1, _dec11$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearFlags"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearColor", [_dec12$1, _dec13$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearColor"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearDepth", [_dec14$1, _dec15$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearDepth"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "clearStencil", [_dec16$1, _dec17$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clearStencil"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "projection", [_dec18$1, _dec19$1, _dec20$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "projection"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "fovAxis", [_dec21$1, _dec22$1, _dec23$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fovAxis"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "fov", [_dec24$1, _dec25$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "fov"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "orthoHeight", [_dec26$1, _dec27$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "orthoHeight"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "near", [_dec28$1, _dec29$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "near"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "far", [_dec30$1, _dec31$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "far"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "aperture", [_dec32$1, _dec33$1, _dec34$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "aperture"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "shutter", [_dec35$1, _dec36$1, _dec37$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "shutter"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "iso", [_dec38$1, _dec39$1, _dec40$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "iso"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "rect", [_dec41$1, _dec42$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "rect"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "targetTexture", [_dec43$1, _dec44$1, _dec45$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "targetTexture"), _class2$2.prototype)), _class2$2)) || _class$3) || _class$3) || _class$3) || _class$3));
      legacyCC.Camera = Camera;

    }
  };
});
