System.register("q-bundled:///fs/cocos/physics/framework/components/rigid-body.js", ["../../../core/data/decorators/index.js", "../../../../../virtual/internal%253Aconstants.js", "../../../core/math/index.js", "../../../core/index.js", "../instance.js", "../physics-enum.js", "../physics-system.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, disallowMultiple, executeInEditMode, menu, executionOrder, tooltip, displayOrder, visible, type, serializable, EDITOR, Vec3, Component, error, createRigidBody, ERigidBodyType, PhysicsSystem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, RigidBody;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      visible = _coreDataDecoratorsIndexJs.visible;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_coreIndexJs) {
      Component = _coreIndexJs.Component;
      error = _coreIndexJs.error;
    }, function (_instanceJs) {
      createRigidBody = _instanceJs.createRigidBody;
    }, function (_physicsEnumJs) {
      ERigidBodyType = _physicsEnumJs.ERigidBodyType;
    }, function (_physicsSystemJs) {
      PhysicsSystem = _physicsSystemJs.PhysicsSystem;
    }],
    execute: function () {
      /**
       * @en
       * Rigid body component.
       * @zh
       * 刚体组件。
       */
      _export("RigidBody", RigidBody = (_dec = ccclass('cc.RigidBody'), _dec2 = help('i18n:cc.RigidBody'), _dec3 = menu('Physics/RigidBody'), _dec4 = executionOrder(-1), _dec5 = type(PhysicsSystem.PhysicsGroup), _dec6 = displayOrder(-2), _dec7 = tooltip('设置分组'), _dec8 = type(ERigidBodyType), _dec9 = displayOrder(-1), _dec10 = tooltip('刚体的类型'), _dec11 = visible(function () {
        return this.isDynamic;
      }), _dec12 = displayOrder(0), _dec13 = tooltip('刚体的质量'), _dec14 = visible(function () {
        return this.isDynamic;
      }), _dec15 = displayOrder(0.5), _dec16 = tooltip('是否允许休眠'), _dec17 = visible(function () {
        return this.isDynamic;
      }), _dec18 = displayOrder(1), _dec19 = tooltip('线性阻尼'), _dec20 = visible(function () {
        return this.isDynamic;
      }), _dec21 = displayOrder(2), _dec22 = tooltip('旋转阻尼'), _dec23 = visible(function () {
        return this.isDynamic;
      }), _dec24 = displayOrder(4), _dec25 = tooltip('刚体是否使用重力'), _dec26 = visible(function () {
        return this.isDynamic;
      }), _dec27 = displayOrder(6), _dec28 = tooltip('线性速度的因子，可以用来控制每个轴方向上的速度的缩放'), _dec29 = visible(function () {
        return this.isDynamic;
      }), _dec30 = displayOrder(7), _dec31 = tooltip('旋转速度的因子，可以用来控制每个轴方向上的旋转速度的缩放'), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = disallowMultiple(_class = _dec4(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RigidBody, _Component);

        function RigidBody() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._body = null;

          _initializerDefineProperty(_this, "_group", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_type", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_mass", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_allowSleep", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_linearDamping", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_angularDamping", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_useGravity", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_linearFactor", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_angularFactor", _descriptor9, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = RigidBody.prototype;

        /// COMPONENT LIFECYCLE ///
        _proto.onLoad = function onLoad() {
          if (!EDITOR) {
            this._body = createRigidBody();

            this._body.initialize(this);
          }
        };

        _proto.onEnable = function onEnable() {
          if (this._body) {
            this._body.onEnable();
          }
        };

        _proto.onDisable = function onDisable() {
          if (this._body) {
            this._body.onDisable();
          }
        };

        _proto.onDestroy = function onDestroy() {
          if (this._body) {
            this._body.onDestroy();
          }
        } /// PUBLIC METHOD ///

        /**
         * @en
         * Apply force to a world point. This could, for example, be a point on the Body surface.
         * @zh
         * 在世界空间中，相对于刚体的质心的某点上对刚体施加作用力。
         * @param force - 作用力
         * @param relativePoint - 作用点，相对于刚体的质心
         */
        ;

        _proto.applyForce = function applyForce(force, relativePoint) {
          if (this._assertOnLoadCalled) {
            this._body.applyForce(force, relativePoint);
          }
        }
        /**
         * @en
         * Apply force to a local point. This could, for example, be a point on the Body surface.
         * @zh
         * 在本地空间中，相对于刚体的质心的某点上对刚体施加作用力。
         * @param force - 作用力
         * @param localPoint - 作用点
         */
        ;

        _proto.applyLocalForce = function applyLocalForce(force, localPoint) {
          if (this._assertOnLoadCalled) {
            this._body.applyLocalForce(force, localPoint);
          }
        }
        /**
         * @en
         * In world space, impulse is applied to the rigid body at some point relative to the center of mass of the rigid body.
         * @zh
         * 在世界空间中，相对于刚体的质心的某点上对刚体施加冲量。
         * @param impulse - 冲量
         * @param relativePoint - 作用点，相对于刚体的中心点
         */
        ;

        _proto.applyImpulse = function applyImpulse(impulse, relativePoint) {
          if (this._assertOnLoadCalled) {
            this._body.applyImpulse(impulse, relativePoint);
          }
        }
        /**
         * @en
         * In local space, impulse is applied to the rigid body at some point relative to the center of mass of the rigid body.
         * @zh
         * 在本地空间中，相对于刚体的质心的某点上对刚体施加冲量。
         * @param impulse - 冲量
         * @param localPoint - 作用点
         */
        ;

        _proto.applyLocalImpulse = function applyLocalImpulse(impulse, localPoint) {
          if (this._assertOnLoadCalled) {
            this._body.applyLocalImpulse(impulse, localPoint);
          }
        }
        /**
         * @en
         * In world space, torque is applied to the rigid body.
         * @zh
         * 在世界空间中，对刚体施加扭矩。
         * @param torque - 扭矩
         */
        ;

        _proto.applyTorque = function applyTorque(torque) {
          if (this._assertOnLoadCalled) {
            this._body.applyTorque(torque);
          }
        }
        /**
         * @zh
         * 在本地空间中，对刚体施加扭矩。
         * @param torque - 扭矩
         */
        ;

        _proto.applyLocalTorque = function applyLocalTorque(torque) {
          if (this._assertOnLoadCalled) {
            this._body.applyLocalTorque(torque);
          }
        }
        /**
         * @en
         * Wake up the rigid body.
         * @zh
         * 唤醒刚体。
         */
        ;

        _proto.wakeUp = function wakeUp() {
          if (this._assertOnLoadCalled) {
            this._body.wakeUp();
          }
        }
        /**
         * @en
         * Dormancy of rigid body.
         * @zh
         * 休眠刚体。
         */
        ;

        _proto.sleep = function sleep() {
          if (this._assertOnLoadCalled) {
            this._body.sleep();
          }
        }
        /**
         * @en
         * Clear the forces and velocity of the rigid body.
         * @zh
         * 清除刚体受到的力和速度。
         */
        ;

        _proto.clearState = function clearState() {
          if (this._assertOnLoadCalled) {
            this._body.clearState();
          }
        }
        /**
         * @en
         * Clear the forces of the rigid body.
         * @zh
         * 清除刚体受到的力。
         */
        ;

        _proto.clearForces = function clearForces() {
          if (this._assertOnLoadCalled) {
            this._body.clearForces();
          }
        }
        /**
         * @en
         * Clear velocity of the rigid body.
         * @zh
         * 清除刚体的速度。
         */
        ;

        _proto.clearVelocity = function clearVelocity() {
          if (this._assertOnLoadCalled) {
            this._body.clearVelocity();
          }
        }
        /**
         * @en
         * Gets the linear velocity.
         * @zh
         * 获取线性速度。
         * @param out 速度 Vec3
         */
        ;

        _proto.getLinearVelocity = function getLinearVelocity(out) {
          if (this._assertOnLoadCalled) {
            this._body.getLinearVelocity(out);
          }
        }
        /**
         * @en
         * Sets the linear velocity.
         * @zh
         * 设置线性速度。
         * @param value 速度 Vec3
         */
        ;

        _proto.setLinearVelocity = function setLinearVelocity(value) {
          if (this._assertOnLoadCalled) {
            this._body.setLinearVelocity(value);
          }
        }
        /**
         * @en
         * Gets the angular velocity.
         * @zh
         * 获取旋转速度。
         * @param out 速度 Vec3
         */
        ;

        _proto.getAngularVelocity = function getAngularVelocity(out) {
          if (this._assertOnLoadCalled) {
            this._body.getAngularVelocity(out);
          }
        }
        /**
         * @en
         * Sets the angular velocity.
         * @zh
         * 设置旋转速度。
         * @param value 速度 Vec3
         */
        ;

        _proto.setAngularVelocity = function setAngularVelocity(value) {
          if (this._assertOnLoadCalled) {
            this._body.setAngularVelocity(value);
          }
        } /// GROUP MASK ///

        /**
         * @en
         * Gets the group value.
         * @zh
         * 获取分组值。
         * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.getGroup = function getGroup() {
          if (this._assertOnLoadCalled) {
            return this._body.getGroup();
          }

          return 0;
        }
        /**
         * @en
         * Sets the group value.
         * @zh
         * 设置分组值。
         * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.setGroup = function setGroup(v) {
          if (this._assertOnLoadCalled) {
            this.group = v;
          }
        }
        /**
         * @en
         * Add a grouping value to fill in the group you want to join.
         * @zh
         * 添加分组值，可填要加入的 group。
         * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.addGroup = function addGroup(v) {
          if (this._assertOnLoadCalled) {
            this._body.addGroup(v);
          }
        }
        /**
         * @en
         * Subtract the grouping value to fill in the group to be removed.
         * @zh
         * 减去分组值，可填要移除的 group。
         * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.removeGroup = function removeGroup(v) {
          if (this._assertOnLoadCalled) {
            this._body.removeGroup(v);
          }
        }
        /**
         * @en
         * Gets the mask value.
         * @zh
         * 获取掩码值。
         * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.getMask = function getMask() {
          if (this._assertOnLoadCalled) {
            return this._body.getMask();
          }

          return 0;
        }
        /**
         * @en
         * Sets the mask value.
         * @zh
         * 设置掩码值。
         * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.setMask = function setMask(v) {
          if (this._assertOnLoadCalled) {
            this._body.setMask(v);
          }
        }
        /**
         * @en
         * Add mask values to fill in groups that need to be checked.
         * @zh
         * 添加掩码值，可填入需要检查的 group。
         * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.addMask = function addMask(v) {
          if (this._assertOnLoadCalled) {
            this._body.addMask(v);
          }
        }
        /**
         * @en
         * Subtract the mask value to fill in the group that does not need to be checked.
         * @zh
         * 减去掩码值，可填入不需要检查的 group。
         * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
         */
        ;

        _proto.removeMask = function removeMask(v) {
          if (this._assertOnLoadCalled) {
            this._body.removeMask(v);
          }
        };

        _createClass(RigidBody, [{
          key: "group",
          /// PUBLIC PROPERTY GETTER\SETTER ///

          /**
           * @en
           * Gets or sets the group of the rigid body.
           * @zh
           * 获取或设置分组。
           */
          get: function get() {
            return this._group;
          },
          set: function set(v) {
            if (this._group === v) return;
            this._group = v;

            if (this._body) {
              this._body.setGroup(v);
            }
          }
          /**
           * @en
           * Gets or sets the type of rigid body.
           * @zh
           * 获取或设置刚体类型。
           */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(v) {
            if (this._type === v) return;
            this._type = v;

            if (this._body) {
              this._body.setType(v);
            }
          }
          /**
           * @en
           * Gets or sets the mass of the rigid body.
           * @zh
           * 获取或设置刚体的质量。
           */

        }, {
          key: "mass",
          get: function get() {
            return this._mass;
          },
          set: function set(value) {
            if (this._mass === value) return;
            value = value <= 0 ? 0.0001 : value;
            this._mass = value;

            if (this._body) {
              this._body.setMass(value);
            }
          }
          /**
           * @en
           * Gets or sets whether hibernation is allowed.
           * @zh
           * 获取或设置是否允许休眠。
           */

        }, {
          key: "allowSleep",
          get: function get() {
            return this._allowSleep;
          },
          set: function set(v) {
            this._allowSleep = v;

            if (this._body) {
              this._body.setAllowSleep(v);
            }
          }
          /**
           * @en
           * Gets or sets linear damping.
           * @zh
           * 获取或设置线性阻尼。
           */

        }, {
          key: "linearDamping",
          get: function get() {
            return this._linearDamping;
          },
          set: function set(value) {
            this._linearDamping = value;

            if (this._body) {
              this._body.setLinearDamping(value);
            }
          }
          /**
           * @en
           * Gets or sets the rotation damping.
           * @zh
           * 获取或设置旋转阻尼。
           */

        }, {
          key: "angularDamping",
          get: function get() {
            return this._angularDamping;
          },
          set: function set(value) {
            this._angularDamping = value;

            if (this._body) {
              this._body.setAngularDamping(value);
            }
          }
          /**
           * @en
           * Gets or sets whether a rigid body uses gravity.
           * @zh
           * 获取或设置刚体是否使用重力。
           */

        }, {
          key: "useGravity",
          get: function get() {
            return this._useGravity;
          },
          set: function set(value) {
            this._useGravity = value;

            if (this._body) {
              this._body.useGravity(value);
            }
          }
          /**
           * @en
           * Gets or sets the linear velocity factor that can be used to control the scaling of the velocity in each axis direction.
           * @zh
           * 获取或设置线性速度的因子，可以用来控制每个轴方向上的速度的缩放。
           */

        }, {
          key: "linearFactor",
          get: function get() {
            return this._linearFactor;
          },
          set: function set(value) {
            Vec3.copy(this._linearFactor, value);

            if (this._body) {
              this._body.setLinearFactor(this._linearFactor);
            }
          }
          /**
           * @en
           * Gets or sets the rotation speed factor that can be used to control the scaling of the rotation speed in each axis direction.
           * @zh
           * 获取或设置旋转速度的因子，可以用来控制每个轴方向上的旋转速度的缩放。
           */

        }, {
          key: "angularFactor",
          get: function get() {
            return this._angularFactor;
          },
          set: function set(value) {
            Vec3.copy(this._angularFactor, value);

            if (this._body) {
              this._body.setAngularFactor(this._angularFactor);
            }
          }
          /**
           * @en
           * Gets or sets the speed threshold for going to sleep.
           * @zh
           * 获取或设置进入休眠的速度临界值。
           */

        }, {
          key: "sleepThreshold",
          get: function get() {
            if (this._assertOnLoadCalled) {
              return this._body.getSleepThreshold();
            }

            return 0;
          },
          set: function set(v) {
            if (this._assertOnLoadCalled) {
              this._body.setSleepThreshold(v);
            }
          }
          /**
           * @en
           * Gets whether it is the state of awake.
           * @zh
           * 获取是否是唤醒的状态。
           */

        }, {
          key: "isAwake",
          get: function get() {
            if (this._assertOnLoadCalled) {
              return this._body.isAwake;
            }

            return false;
          }
          /**
           * @en
           * Gets whether you can enter a dormant state.
           * @zh
           * 获取是否是可进入休眠的状态。
           */

        }, {
          key: "isSleepy",
          get: function get() {
            if (this._assertOnLoadCalled) {
              return this._body.isSleepy;
            }

            return false;
          }
          /**
           * @en
           * Gets whether the state is dormant.
           * @zh
           * 获取是否是正在休眠的状态。
           */

        }, {
          key: "isSleeping",
          get: function get() {
            if (this._assertOnLoadCalled) {
              return this._body.isSleeping;
            }

            return false;
          }
          /**
           * @en
           * Gets or sets whether the rigid body is static.
           * @zh
           * 获取或设置刚体是否是静态类型的（静止不动的）。
           */

        }, {
          key: "isStatic",
          get: function get() {
            return this._type === ERigidBodyType.STATIC;
          },
          set: function set(v) {
            if (v && this.isStatic || !v && !this.isStatic) return;
            this.type = v ? ERigidBodyType.STATIC : ERigidBodyType.DYNAMIC;
          }
          /**
           * @en
           * Gets or sets whether the rigid body moves through physical dynamics.
           * @zh
           * 获取或设置刚体是否是动力学态类型的（将根据物理动力学控制运动）。
           */

        }, {
          key: "isDynamic",
          get: function get() {
            return this._type === ERigidBodyType.DYNAMIC;
          },
          set: function set(v) {
            if (v && this.isDynamic || !v && !this.isDynamic) return;
            this.type = v ? ERigidBodyType.DYNAMIC : ERigidBodyType.KINEMATIC;
          }
          /**
           * @en
           * Gets or sets whether a rigid body is controlled by users.
           * @zh
           * 获取或设置刚体是否是运动态类型的（将由用户来控制运动）。
           */

        }, {
          key: "isKinematic",
          get: function get() {
            return this._type === ERigidBodyType.KINEMATIC;
          },
          set: function set(v) {
            if (v && this.isKinematic || !v && !this.isKinematic) return;
            this.type = v ? ERigidBodyType.KINEMATIC : ERigidBodyType.DYNAMIC;
          }
          /**
           * @en
           * Gets the wrapper object, through which the lowLevel instance can be accessed.
           * @zh
           * 获取封装对象，通过此对象可以访问到底层实例。
           */

        }, {
          key: "body",
          get: function get() {
            return this._body;
          }
        }, {
          key: "_assertOnLoadCalled",
          get: function get() {
            var r = this._isOnLoadCalled === 0;

            if (r) {
              error('[Physics]: Please make sure that the node has been added to the scene');
            }

            return !r;
          }
        }]);

        return RigidBody;
      }(Component), _class3.Type = ERigidBodyType, _temp), (_applyDecoratedDescriptor(_class2.prototype, "group", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "group"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "mass", [_dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "mass"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "allowSleep", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "allowSleep"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "linearDamping", [_dec17, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "linearDamping"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angularDamping", [_dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "angularDamping"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "useGravity", [_dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "useGravity"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "linearFactor", [_dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "linearFactor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "angularFactor", [_dec29, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "angularFactor"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_group", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PhysicsSystem.PhysicsGroup.DEFAULT;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_type", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ERigidBodyType.DYNAMIC;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_mass", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_allowSleep", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_linearDamping", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_angularDamping", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_useGravity", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_linearFactor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_angularFactor", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class) || _class));

      (function (_RigidBody) {})(RigidBody || _export("RigidBody", RigidBody = {}));
    }
  };
});