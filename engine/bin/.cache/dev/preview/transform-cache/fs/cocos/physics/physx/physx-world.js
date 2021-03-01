System.register("q-bundled:///fs/cocos/physics/physx/physx-world.js", ["../../core/index.js", "./physx-shared-body.js", "./physx-contact-equation.js", "../utils/util.js", "./export-physx.js", "../../core/utils/array.js", "../utils/tuple-dictionary.js"], function (_export, _context) {
  "use strict";

  var error, PhysXSharedBody, PhysXContactEquation, CollisionEventObject, TriggerEventObject, addActorToScene, getContactData, getWrapShape, PX, USE_BYTEDANCE, fastRemoveAt, TupleDictionary, triggerEventBeginDic, triggerEventEndDic, triggerEventsPool, contactEventDic, contactEventsPool, contactsPool, eventCallback, queryCallback, PhysXWorld;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function onTrigger(type, wpa, wpb) {
    if (wpa && wpb) {
      if (wpa.collider.needTriggerEvent || wpb.collider.needTriggerEvent) {
        var tE;

        if (triggerEventsPool.length > 0) {
          tE = triggerEventsPool.pop();
          tE.a = wpa;
          tE.b = wpb;
          tE.times = 0;
        } else {
          tE = {
            a: wpa,
            b: wpb,
            times: 0
          };
        }

        if (type === 'onTriggerEnter') {
          triggerEventBeginDic.set(wpa.id, wpb.id, tE);
        } else {
          triggerEventEndDic.set(wpa.id, wpb.id, tE);
        }
      }
    }
  }

  function emitTriggerEvent() {
    var len = triggerEventEndDic.getLength();

    while (len--) {
      var key = triggerEventEndDic.getKeyByIndex(len);
      var data = triggerEventEndDic.getDataByKey(key);
      triggerEventsPool.push(data);
      var dataBeg = triggerEventBeginDic.getDataByKey(key);

      if (dataBeg) {
        triggerEventsPool.push(dataBeg);
        triggerEventBeginDic.set(data.a.id, data.b.id, null);
      }

      var colliderA = data.a.collider;
      var colliderB = data.b.collider;

      if (colliderA && colliderB) {
        var type = 'onTriggerExit';
        TriggerEventObject.type = type;

        if (colliderA.needTriggerEvent) {
          TriggerEventObject.selfCollider = colliderA;
          TriggerEventObject.otherCollider = colliderB;
          colliderA.emit(type, TriggerEventObject);
        }

        if (colliderB.needTriggerEvent) {
          TriggerEventObject.selfCollider = colliderB;
          TriggerEventObject.otherCollider = colliderA;
          colliderB.emit(type, TriggerEventObject);
        }
      }
    }

    triggerEventEndDic.reset();
    len = triggerEventBeginDic.getLength();

    while (len--) {
      var _key = triggerEventBeginDic.getKeyByIndex(len);

      var _data = triggerEventBeginDic.getDataByKey(_key);

      var _colliderA = _data.a.collider;
      var _colliderB = _data.b.collider;

      if (!_colliderA || !_colliderA.isValid || !_colliderB || !_colliderB.isValid) {
        triggerEventsPool.push(_data);
        triggerEventBeginDic.set(_data.a.id, _data.b.id, null);
      } else {
        var _type = _data.times++ ? 'onTriggerStay' : 'onTriggerEnter';

        TriggerEventObject.type = _type;

        if (_colliderA.needTriggerEvent) {
          TriggerEventObject.selfCollider = _colliderA;
          TriggerEventObject.otherCollider = _colliderB;

          _colliderA.emit(_type, TriggerEventObject);
        }

        if (_colliderB.needTriggerEvent) {
          TriggerEventObject.selfCollider = _colliderB;
          TriggerEventObject.otherCollider = _colliderA;

          _colliderB.emit(_type, TriggerEventObject);
        }
      }
    }
  }

  function onCollision(type, wpa, wpb, c, d, o) {
    if (wpa && wpb) {
      if (wpa.collider.needCollisionEvent || wpb.collider.needCollisionEvent) {
        if (contactEventsPool.length > 0) {
          var cE = contactEventsPool.pop();
          cE.type = type;
          cE.a = wpa;
          cE.b = wpb;
          cE.contactCount = c;
          cE.buffer = d;
          cE.offset = o;
          contactEventDic.set(wpa.id, wpb.id, cE);
        } else {
          var _cE = {
            type: type,
            a: wpa,
            b: wpb,
            contactCount: c,
            buffer: d,
            offset: o
          };
          contactEventDic.set(wpa.id, wpb.id, _cE);
        }
      }
    }
  }

  function emitCollisionEvent() {
    var len = contactEventDic.getLength();

    while (len--) {
      var key = contactEventDic.getKeyByIndex(len);
      var data = contactEventDic.getDataByKey(key);
      contactEventsPool.push(data);
      var colliderA = data.a.collider;
      var colliderB = data.b.collider;

      if (colliderA && colliderA.isValid && colliderB && colliderB.isValid) {
        CollisionEventObject.type = data.type;
        CollisionEventObject.impl = data.buffer;
        var c = data.contactCount;
        var d = data.buffer;
        var o = data.offset;
        var contacts = CollisionEventObject.contacts;
        contactsPool.push.apply(contactsPool, contacts);
        contacts.length = 0;

        for (var i = 0; i < c; i++) {
          if (contactsPool.length > 0) {
            var _c = contactsPool.pop();

            _c.colliderA = colliderA;
            _c.colliderB = colliderB;
            _c.impl = getContactData(d, i, o);
            contacts.push(_c);
          } else {
            var _c2 = new PhysXContactEquation(CollisionEventObject);

            _c2.colliderA = colliderA;
            _c2.colliderB = colliderB;
            _c2.impl = getContactData(d, i, o);
            contacts.push(_c2);
          }
        }

        if (colliderA.needCollisionEvent) {
          CollisionEventObject.selfCollider = colliderA;
          CollisionEventObject.otherCollider = colliderB;
          colliderA.emit(CollisionEventObject.type, CollisionEventObject);
        }

        if (colliderB.needCollisionEvent) {
          CollisionEventObject.selfCollider = colliderB;
          CollisionEventObject.otherCollider = colliderA;
          colliderB.emit(CollisionEventObject.type, CollisionEventObject);
        }
      }
    }

    contactEventDic.reset();
  }

  return {
    setters: [function (_coreIndexJs) {
      error = _coreIndexJs.error;
    }, function (_physxSharedBodyJs) {
      PhysXSharedBody = _physxSharedBodyJs.PhysXSharedBody;
    }, function (_physxContactEquationJs) {
      PhysXContactEquation = _physxContactEquationJs.PhysXContactEquation;
    }, function (_utilsUtilJs) {
      CollisionEventObject = _utilsUtilJs.CollisionEventObject;
      TriggerEventObject = _utilsUtilJs.TriggerEventObject;
    }, function (_exportPhysxJs) {
      addActorToScene = _exportPhysxJs.addActorToScene;
      getContactData = _exportPhysxJs.getContactData;
      getWrapShape = _exportPhysxJs.getWrapShape;
      PX = _exportPhysxJs.PX;
      USE_BYTEDANCE = _exportPhysxJs.USE_BYTEDANCE;
    }, function (_coreUtilsArrayJs) {
      fastRemoveAt = _coreUtilsArrayJs.fastRemoveAt;
    }, function (_utilsTupleDictionaryJs) {
      TupleDictionary = _utilsTupleDictionaryJs.TupleDictionary;
    }],
    execute: function () {
      triggerEventBeginDic = new TupleDictionary();
      triggerEventEndDic = new TupleDictionary();
      triggerEventsPool = [];
      contactEventDic = new TupleDictionary();
      contactEventsPool = [];
      contactsPool = [];
      eventCallback = {
        onContactBegin: function onContactBegin(a, b, c, d, o) {
          var wpa = getWrapShape(a);
          var wpb = getWrapShape(b);
          onCollision('onCollisionEnter', wpa, wpb, c, d, o);
        },
        onContactEnd: function onContactEnd(a, b, c, d, o) {
          var wpa = getWrapShape(a);
          var wpb = getWrapShape(b);
          onCollision('onCollisionExit', wpa, wpb, c, d, o);
        },
        onContactPersist: function onContactPersist(a, b, c, d, o) {
          var wpa = getWrapShape(a);
          var wpb = getWrapShape(b);
          onCollision('onCollisionStay', wpa, wpb, c, d, o);
        },
        onTriggerBegin: function onTriggerBegin(a, b) {
          var wpa = getWrapShape(a);
          var wpb = getWrapShape(b);
          onTrigger('onTriggerEnter', wpa, wpb);
        },
        onTriggerEnd: function onTriggerEnd(a, b) {
          var wpa = getWrapShape(a);
          var wpb = getWrapShape(b);
          onTrigger('onTriggerExit', wpa, wpb);
        } // onTriggerPersist: (...a: any) => { console.log('onTriggerPersist', a); },

      }; // eNONE = 0,   //!< the query should ignore this shape
      // eTOUCH = 1,  //!< a hit on the shape touches the intersection geometry of the query but does not block it
      // eBLOCK = 2   //!< a hit on the shape blocks the query (does not block overlap queries)

      queryCallback = {
        preFilter: function preFilter(filterData, shape, _actor, _out) {
          // 0 for mask filter
          // 1 for trigger toggle
          // 2 for single hit
          if (USE_BYTEDANCE) {
            var _shapeFlags = shape.getFlags();

            if (filterData.word3 & 2 && _shapeFlags & PX.ShapeFlag.eTRIGGER_SHAPE) {
              return PX.QueryHitType.eNONE;
            }

            return filterData.word3 & 4 ? PX.QueryHitType.eBLOCK : PX.QueryHitType.eTOUCH;
          }

          var shapeFlags = shape.getFlags();

          if (filterData.word3 & 2 && shapeFlags.isSet(PX.PxShapeFlag.eTRIGGER_SHAPE)) {
            return PX.PxQueryHitType.eNONE;
          }

          return filterData.word3 & 4 ? PX.PxQueryHitType.eBLOCK : PX.PxQueryHitType.eTOUCH;
        }
      };

      _export("PhysXWorld", PhysXWorld = /*#__PURE__*/function () {
        var _proto = PhysXWorld.prototype;

        _proto.setAllowSleep = function setAllowSleep(_v) {};

        _proto.setDefaultMaterial = function setDefaultMaterial(_v) {};

        _proto.setGravity = function setGravity(gravity) {
          this.scene.setGravity(gravity);
        };

        _createClass(PhysXWorld, [{
          key: "impl",
          get: function get() {
            return this.scene;
          }
        }]);

        function PhysXWorld() {
          this.physics = void 0;
          this.scene = void 0;
          this.cooking = void 0;
          this.queryfilterData = void 0;
          this.singleResult = void 0;
          this.mutipleResults = void 0;
          this.simulationCB = void 0;
          this.queryFilterCB = void 0;
          this.wrappedBodies = [];
          this.mutipleResultSize = 12;

          if (USE_BYTEDANCE) {
            // const physics = PX.createPhysics();
            var physics = PX.physics;
            var cp = new PX.CookingParams();
            var cooking = PX.createCooking(cp);
            var sceneDesc = physics.createSceneDesc();
            var simulation = new PX.SimulationEventCallback();
            simulation.setOnContact(function (_header, pairs) {
              var shapes = _header.shapes; // uint16   ContactPairFlags
              // uint16   PairFlags
              // uint16   ContactCount

              var pairBuf = _header.pairBuffer;
              var pairL = shapes.length / 2;
              var ui16View = new Uint16Array(pairBuf, 0, pairL * 3);

              for (var i = 0; i < pairL; i++) {
                var flags = ui16View[0];
                if (flags & 3) continue;
                var shape0 = shapes[2 * i];
                var shape1 = shapes[2 * i + 1];
                if (!shape0 || !shape1) continue;
                var shapeA = getWrapShape(shape0);
                var shapeB = getWrapShape(shape1);
                var events = ui16View[1];
                var contactCount = ui16View[2];
                var contactBuffer = _header.contactBuffer;

                if (events & 4) {
                  onCollision('onCollisionEnter', shapeA, shapeB, contactCount, contactBuffer, 0);
                } else if (events & 8) {
                  onCollision('onCollisionStay', shapeA, shapeB, contactCount, contactBuffer, 0);
                } else if (events & 16) {
                  onCollision('onCollisionExit', shapeA, shapeB, contactCount, contactBuffer, 0);
                }
              }
            });
            simulation.setOnTrigger(function (pairs, pairsBuf) {
              var length = pairs.length / 4;
              var ui16View = new Uint16Array(pairsBuf);

              for (var i = 0; i < length; i++) {
                var flags = ui16View[i];
                if (flags & 3) continue;
                var events = ui16View[i + 1];
                var ca = pairs[i * 4 + 1];
                var cb = pairs[i * 4 + 3];
                var shapeA = getWrapShape(ca);
                var shapeB = getWrapShape(cb);

                if (events & 4) {
                  onTrigger('onTriggerEnter', shapeA, shapeB);
                } else if (events & 16) {
                  onTrigger('onTriggerExit', shapeA, shapeB);
                }
              }
            });
            this.simulationCB = simulation;
            this.queryFilterCB = new PX.QueryFilterCallback();
            this.queryFilterCB.setPreFilter(queryCallback.preFilter);
            this.queryfilterData = {
              data: {
                word0: 0,
                word1: 0,
                word2: 0,
                word3: 1
              },
              flags: 0
            };
            sceneDesc.setSimulationEventCallback(simulation);
            var scene = physics.createScene(sceneDesc);
            this.physics = physics;
            this.cooking = cooking;
            this.scene = scene;
          } else {
            this.singleResult = new PX.PxRaycastHit();
            this.mutipleResults = new PX.PxRaycastHitVector();
            this.mutipleResults.resize(this.mutipleResultSize, this.singleResult);
            this.queryfilterData = new PX.PxQueryFilterData();
            this.simulationCB = PX.PxSimulationEventCallback.implement(eventCallback);
            this.queryFilterCB = PX.PxQueryFilterCallback.implement(queryCallback);
            var version = PX.PX_PHYSICS_VERSION;
            var defaultErrorCallback = new PX.PxDefaultErrorCallback();
            var allocator = new PX.PxDefaultAllocator();
            var foundation = PX.PxCreateFoundation(version, allocator, defaultErrorCallback);
            var scale = new PX.PxTolerancesScale();
            this.cooking = PX.PxCreateCooking(version, foundation, new PX.PxCookingParams(scale));
            this.physics = PX.PxCreatePhysics(version, foundation, scale, false, null);
            PX.PxInitExtensions(this.physics, null);

            var _sceneDesc = PX.getDefaultSceneDesc(this.physics.getTolerancesScale(), 0, this.simulationCB);

            this.scene = this.physics.createScene(_sceneDesc);
            PX.physics = this.physics;
          }
        }

        _proto.destroy = function destroy() {
          if (this.wrappedBodies.length) error('You should destroy all physics component first.');
          this.scene.release();
        };

        _proto.step = function step(deltaTime, _timeSinceLastCalled, _maxSubStep) {
          if (_maxSubStep === void 0) {
            _maxSubStep = 0;
          }

          if (this.wrappedBodies.length === 0) {
            return;
          }

          var scene = this.scene;

          if (USE_BYTEDANCE) {
            scene.simulate(deltaTime);
          } else {
            scene.simulate(deltaTime, true);
          }

          scene.fetchResults(true);

          for (var i = 0; i < this.wrappedBodies.length; i++) {
            var body = this.wrappedBodies[i];
            body.syncPhysicsToScene();
          }
        };

        _proto.syncSceneToPhysics = function syncSceneToPhysics() {
          for (var i = 0; i < this.wrappedBodies.length; i++) {
            var body = this.wrappedBodies[i];
            body.syncSceneToPhysics();
          }
        };

        _proto.syncAfterEvents = function syncAfterEvents() {
          for (var i = 0; i < this.wrappedBodies.length; i++) {
            var body = this.wrappedBodies[i];
            body.syncSceneWithCheck();
          }
        };

        _proto.getSharedBody = function getSharedBody(node, wrappedBody) {
          return PhysXSharedBody.getSharedBody(node, this, wrappedBody);
        };

        _proto.addActor = function addActor(body) {
          var index = this.wrappedBodies.indexOf(body);

          if (index < 0) {
            addActorToScene(this.scene, body.impl);
            this.wrappedBodies.push(body);
          }
        };

        _proto.removeActor = function removeActor(body) {
          var index = this.wrappedBodies.indexOf(body);

          if (index >= 0) {
            this.scene.removeActor(body.impl, true);
            fastRemoveAt(this.wrappedBodies, index);
          }
        };

        _proto.addConstraint = function addConstraint(_constraint) {};

        _proto.removeConstraint = function removeConstraint(_constraint) {};

        _proto.raycast = function raycast(worldRay, options, pool, results) {
          var maxDistance = options.maxDistance;
          var flags = 1 << 0 | 1 << 1 | 1 << 10;
          var word3 = 1 | (options.queryTrigger ? 0 : 2);

          if (USE_BYTEDANCE) {
            this.queryfilterData.data.word3 = word3;
            this.queryfilterData.data.word0 = options.mask >>> 0;
            this.queryfilterData.flags = 1 << 0 | 1 << 1 | 1 << 2 | 1 << 5;
            var r = PX.SceneQueryExt.raycastMultiple(this.scene, worldRay.o, worldRay.d, maxDistance, flags, this.mutipleResultSize, this.queryfilterData, this.queryFilterCB);

            if (r) {
              for (var i = 0; i < r.length; i++) {
                var block = r[i];
                var collider = getWrapShape(block.shape).collider;
                var result = pool.add();

                result._assign(block.position, block.distance, collider, block.normal);

                results.push(result);
              }

              return true;
            }
          } else {
            this.queryfilterData.setWords(word3, 3);
            this.queryfilterData.setWords(options.mask >>> 0, 0);
            this.queryfilterData.setFlags(1 << 0 | 1 << 1 | 1 << 2 | 1 << 5);
            var blocks = this.mutipleResults;

            var _r = this.scene.raycastMultiple(worldRay.o, worldRay.d, maxDistance, flags, blocks, blocks.size(), this.queryfilterData, this.queryFilterCB, null);

            if (_r > 0) {
              for (var _i = 0; _i < _r; _i++) {
                var _block = blocks.get(_i);

                var _collider = getWrapShape(_block.getShape()).collider;

                var _result = pool.add();

                _result._assign(_block.position, _block.distance, _collider, _block.normal);

                results.push(_result);
              }

              return true;
            }

            if (_r === -1) {
              // eslint-disable-next-line no-console
              console.error('not enough memory.');
            }
          }

          return false;
        };

        _proto.raycastClosest = function raycastClosest(worldRay, options, result) {
          var maxDistance = options.maxDistance;
          var flags = 1 << 0 | 1 << 1; // | (1 << 10);

          var word3 = 1 | (options.queryTrigger ? 0 : 2) | 4;

          if (USE_BYTEDANCE) {
            this.queryfilterData.data.word3 = word3;
            this.queryfilterData.data.word0 = options.mask >>> 0;
            this.queryfilterData.flags = 1 << 0 | 1 << 1 | 1 << 2;
            var block = PX.SceneQueryExt.raycastSingle(this.scene, worldRay.o, worldRay.d, maxDistance, flags, this.queryfilterData, this.queryFilterCB);

            if (block) {
              var collider = getWrapShape(block.shape).collider;

              result._assign(block.position, block.distance, collider, block.normal);

              return true;
            }
          } else {
            this.queryfilterData.setWords(options.mask >>> 0, 0);
            this.queryfilterData.setWords(word3, 3);
            this.queryfilterData.setFlags(1 << 0 | 1 << 1 | 1 << 2);
            var _block2 = this.singleResult;
            var r = this.scene.raycastSingle(worldRay.o, worldRay.d, options.maxDistance, flags, _block2, this.queryfilterData, this.queryFilterCB, null);

            if (r) {
              var _collider2 = getWrapShape(_block2.getShape()).collider;

              result._assign(_block2.position, _block2.distance, _collider2, _block2.normal);

              return true;
            }
          }

          return false;
        };

        _proto.emitEvents = function emitEvents() {
          emitTriggerEvent();
          emitCollisionEvent();
        };

        return PhysXWorld;
      }());
    }
  };
});