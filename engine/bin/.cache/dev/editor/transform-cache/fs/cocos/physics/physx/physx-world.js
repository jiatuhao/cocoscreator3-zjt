"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhysXWorld = void 0;

var _index = require("../../core/index.js");

var _physxSharedBody = require("./physx-shared-body.js");

var _physxContactEquation = require("./physx-contact-equation.js");

var _util = require("../utils/util.js");

var _exportPhysx = require("./export-physx.js");

var _array = require("../../core/utils/array.js");

var _tupleDictionary = require("../utils/tuple-dictionary.js");

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

/* eslint-disable @typescript-eslint/no-unsafe-return */
const triggerEventBeginDic = new _tupleDictionary.TupleDictionary();
const triggerEventEndDic = new _tupleDictionary.TupleDictionary();
const triggerEventsPool = [];

function onTrigger(type, wpa, wpb) {
  if (wpa && wpb) {
    if (wpa.collider.needTriggerEvent || wpb.collider.needTriggerEvent) {
      let tE;

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
  let len = triggerEventEndDic.getLength();

  while (len--) {
    const key = triggerEventEndDic.getKeyByIndex(len);
    const data = triggerEventEndDic.getDataByKey(key);
    triggerEventsPool.push(data);
    const dataBeg = triggerEventBeginDic.getDataByKey(key);

    if (dataBeg) {
      triggerEventsPool.push(dataBeg);
      triggerEventBeginDic.set(data.a.id, data.b.id, null);
    }

    const colliderA = data.a.collider;
    const colliderB = data.b.collider;

    if (colliderA && colliderB) {
      const type = 'onTriggerExit';
      _util.TriggerEventObject.type = type;

      if (colliderA.needTriggerEvent) {
        _util.TriggerEventObject.selfCollider = colliderA;
        _util.TriggerEventObject.otherCollider = colliderB;
        colliderA.emit(type, _util.TriggerEventObject);
      }

      if (colliderB.needTriggerEvent) {
        _util.TriggerEventObject.selfCollider = colliderB;
        _util.TriggerEventObject.otherCollider = colliderA;
        colliderB.emit(type, _util.TriggerEventObject);
      }
    }
  }

  triggerEventEndDic.reset();
  len = triggerEventBeginDic.getLength();

  while (len--) {
    const key = triggerEventBeginDic.getKeyByIndex(len);
    const data = triggerEventBeginDic.getDataByKey(key);
    const colliderA = data.a.collider;
    const colliderB = data.b.collider;

    if (!colliderA || !colliderA.isValid || !colliderB || !colliderB.isValid) {
      triggerEventsPool.push(data);
      triggerEventBeginDic.set(data.a.id, data.b.id, null);
    } else {
      const type = data.times++ ? 'onTriggerStay' : 'onTriggerEnter';
      _util.TriggerEventObject.type = type;

      if (colliderA.needTriggerEvent) {
        _util.TriggerEventObject.selfCollider = colliderA;
        _util.TriggerEventObject.otherCollider = colliderB;
        colliderA.emit(type, _util.TriggerEventObject);
      }

      if (colliderB.needTriggerEvent) {
        _util.TriggerEventObject.selfCollider = colliderB;
        _util.TriggerEventObject.otherCollider = colliderA;
        colliderB.emit(type, _util.TriggerEventObject);
      }
    }
  }
}

const contactEventDic = new _tupleDictionary.TupleDictionary();
const contactEventsPool = [];

function onCollision(type, wpa, wpb, c, d, o) {
  if (wpa && wpb) {
    if (wpa.collider.needCollisionEvent || wpb.collider.needCollisionEvent) {
      if (contactEventsPool.length > 0) {
        const cE = contactEventsPool.pop();
        cE.type = type;
        cE.a = wpa;
        cE.b = wpb;
        cE.contactCount = c;
        cE.buffer = d;
        cE.offset = o;
        contactEventDic.set(wpa.id, wpb.id, cE);
      } else {
        const cE = {
          type,
          a: wpa,
          b: wpb,
          contactCount: c,
          buffer: d,
          offset: o
        };
        contactEventDic.set(wpa.id, wpb.id, cE);
      }
    }
  }
}

const contactsPool = [];

function emitCollisionEvent() {
  let len = contactEventDic.getLength();

  while (len--) {
    const key = contactEventDic.getKeyByIndex(len);
    const data = contactEventDic.getDataByKey(key);
    contactEventsPool.push(data);
    const colliderA = data.a.collider;
    const colliderB = data.b.collider;

    if (colliderA && colliderA.isValid && colliderB && colliderB.isValid) {
      _util.CollisionEventObject.type = data.type;
      _util.CollisionEventObject.impl = data.buffer;
      const c = data.contactCount;
      const d = data.buffer;
      const o = data.offset;
      const contacts = _util.CollisionEventObject.contacts;
      contactsPool.push.apply(contactsPool, contacts);
      contacts.length = 0;

      for (let i = 0; i < c; i++) {
        if (contactsPool.length > 0) {
          const c = contactsPool.pop();
          c.colliderA = colliderA;
          c.colliderB = colliderB;
          c.impl = (0, _exportPhysx.getContactData)(d, i, o);
          contacts.push(c);
        } else {
          const c = new _physxContactEquation.PhysXContactEquation(_util.CollisionEventObject);
          c.colliderA = colliderA;
          c.colliderB = colliderB;
          c.impl = (0, _exportPhysx.getContactData)(d, i, o);
          contacts.push(c);
        }
      }

      if (colliderA.needCollisionEvent) {
        _util.CollisionEventObject.selfCollider = colliderA;
        _util.CollisionEventObject.otherCollider = colliderB;
        colliderA.emit(_util.CollisionEventObject.type, _util.CollisionEventObject);
      }

      if (colliderB.needCollisionEvent) {
        _util.CollisionEventObject.selfCollider = colliderB;
        _util.CollisionEventObject.otherCollider = colliderA;
        colliderB.emit(_util.CollisionEventObject.type, _util.CollisionEventObject);
      }
    }
  }

  contactEventDic.reset();
}

const eventCallback = {
  onContactBegin: (a, b, c, d, o) => {
    const wpa = (0, _exportPhysx.getWrapShape)(a);
    const wpb = (0, _exportPhysx.getWrapShape)(b);
    onCollision('onCollisionEnter', wpa, wpb, c, d, o);
  },
  onContactEnd: (a, b, c, d, o) => {
    const wpa = (0, _exportPhysx.getWrapShape)(a);
    const wpb = (0, _exportPhysx.getWrapShape)(b);
    onCollision('onCollisionExit', wpa, wpb, c, d, o);
  },
  onContactPersist: (a, b, c, d, o) => {
    const wpa = (0, _exportPhysx.getWrapShape)(a);
    const wpb = (0, _exportPhysx.getWrapShape)(b);
    onCollision('onCollisionStay', wpa, wpb, c, d, o);
  },
  onTriggerBegin: (a, b) => {
    const wpa = (0, _exportPhysx.getWrapShape)(a);
    const wpb = (0, _exportPhysx.getWrapShape)(b);
    onTrigger('onTriggerEnter', wpa, wpb);
  },
  onTriggerEnd: (a, b) => {
    const wpa = (0, _exportPhysx.getWrapShape)(a);
    const wpb = (0, _exportPhysx.getWrapShape)(b);
    onTrigger('onTriggerExit', wpa, wpb);
  } // onTriggerPersist: (...a: any) => { console.log('onTriggerPersist', a); },

}; // eNONE = 0,   //!< the query should ignore this shape
// eTOUCH = 1,  //!< a hit on the shape touches the intersection geometry of the query but does not block it
// eBLOCK = 2   //!< a hit on the shape blocks the query (does not block overlap queries)

const queryCallback = {
  preFilter(filterData, shape, _actor, _out) {
    // 0 for mask filter
    // 1 for trigger toggle
    // 2 for single hit
    if (_exportPhysx.USE_BYTEDANCE) {
      const shapeFlags = shape.getFlags();

      if (filterData.word3 & 2 && shapeFlags & _exportPhysx.PX.ShapeFlag.eTRIGGER_SHAPE) {
        return _exportPhysx.PX.QueryHitType.eNONE;
      }

      return filterData.word3 & 4 ? _exportPhysx.PX.QueryHitType.eBLOCK : _exportPhysx.PX.QueryHitType.eTOUCH;
    }

    const shapeFlags = shape.getFlags();

    if (filterData.word3 & 2 && shapeFlags.isSet(_exportPhysx.PX.PxShapeFlag.eTRIGGER_SHAPE)) {
      return _exportPhysx.PX.PxQueryHitType.eNONE;
    }

    return filterData.word3 & 4 ? _exportPhysx.PX.PxQueryHitType.eBLOCK : _exportPhysx.PX.PxQueryHitType.eTOUCH;
  }

};

class PhysXWorld {
  setAllowSleep(_v) {}

  setDefaultMaterial(_v) {}

  setGravity(gravity) {
    this.scene.setGravity(gravity);
  }

  get impl() {
    return this.scene;
  }

  constructor() {
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

    if (_exportPhysx.USE_BYTEDANCE) {
      // const physics = PX.createPhysics();
      const physics = _exportPhysx.PX.physics;
      const cp = new _exportPhysx.PX.CookingParams();

      const cooking = _exportPhysx.PX.createCooking(cp);

      const sceneDesc = physics.createSceneDesc();
      const simulation = new _exportPhysx.PX.SimulationEventCallback();
      simulation.setOnContact((_header, pairs) => {
        const shapes = _header.shapes; // uint16   ContactPairFlags
        // uint16   PairFlags
        // uint16   ContactCount

        const pairBuf = _header.pairBuffer;
        const pairL = shapes.length / 2;
        const ui16View = new Uint16Array(pairBuf, 0, pairL * 3);

        for (let i = 0; i < pairL; i++) {
          const flags = ui16View[0];
          if (flags & 3) continue;
          const shape0 = shapes[2 * i];
          const shape1 = shapes[2 * i + 1];
          if (!shape0 || !shape1) continue;
          const shapeA = (0, _exportPhysx.getWrapShape)(shape0);
          const shapeB = (0, _exportPhysx.getWrapShape)(shape1);
          const events = ui16View[1];
          const contactCount = ui16View[2];
          const contactBuffer = _header.contactBuffer;

          if (events & 4) {
            onCollision('onCollisionEnter', shapeA, shapeB, contactCount, contactBuffer, 0);
          } else if (events & 8) {
            onCollision('onCollisionStay', shapeA, shapeB, contactCount, contactBuffer, 0);
          } else if (events & 16) {
            onCollision('onCollisionExit', shapeA, shapeB, contactCount, contactBuffer, 0);
          }
        }
      });
      simulation.setOnTrigger((pairs, pairsBuf) => {
        const length = pairs.length / 4;
        const ui16View = new Uint16Array(pairsBuf);

        for (let i = 0; i < length; i++) {
          const flags = ui16View[i];
          if (flags & 3) continue;
          const events = ui16View[i + 1];
          const ca = pairs[i * 4 + 1];
          const cb = pairs[i * 4 + 3];
          const shapeA = (0, _exportPhysx.getWrapShape)(ca);
          const shapeB = (0, _exportPhysx.getWrapShape)(cb);

          if (events & 4) {
            onTrigger('onTriggerEnter', shapeA, shapeB);
          } else if (events & 16) {
            onTrigger('onTriggerExit', shapeA, shapeB);
          }
        }
      });
      this.simulationCB = simulation;
      this.queryFilterCB = new _exportPhysx.PX.QueryFilterCallback();
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
      const scene = physics.createScene(sceneDesc);
      this.physics = physics;
      this.cooking = cooking;
      this.scene = scene;
    } else {
      this.singleResult = new _exportPhysx.PX.PxRaycastHit();
      this.mutipleResults = new _exportPhysx.PX.PxRaycastHitVector();
      this.mutipleResults.resize(this.mutipleResultSize, this.singleResult);
      this.queryfilterData = new _exportPhysx.PX.PxQueryFilterData();
      this.simulationCB = _exportPhysx.PX.PxSimulationEventCallback.implement(eventCallback);
      this.queryFilterCB = _exportPhysx.PX.PxQueryFilterCallback.implement(queryCallback);
      const version = _exportPhysx.PX.PX_PHYSICS_VERSION;
      const defaultErrorCallback = new _exportPhysx.PX.PxDefaultErrorCallback();
      const allocator = new _exportPhysx.PX.PxDefaultAllocator();

      const foundation = _exportPhysx.PX.PxCreateFoundation(version, allocator, defaultErrorCallback);

      const scale = new _exportPhysx.PX.PxTolerancesScale();
      this.cooking = _exportPhysx.PX.PxCreateCooking(version, foundation, new _exportPhysx.PX.PxCookingParams(scale));
      this.physics = _exportPhysx.PX.PxCreatePhysics(version, foundation, scale, false, null);

      _exportPhysx.PX.PxInitExtensions(this.physics, null);

      const sceneDesc = _exportPhysx.PX.getDefaultSceneDesc(this.physics.getTolerancesScale(), 0, this.simulationCB);

      this.scene = this.physics.createScene(sceneDesc);
      _exportPhysx.PX.physics = this.physics;
    }
  }

  destroy() {
    if (this.wrappedBodies.length) (0, _index.error)('You should destroy all physics component first.');
    this.scene.release();
  }

  step(deltaTime, _timeSinceLastCalled, _maxSubStep = 0) {
    if (this.wrappedBodies.length === 0) {
      return;
    }

    const scene = this.scene;

    if (_exportPhysx.USE_BYTEDANCE) {
      scene.simulate(deltaTime);
    } else {
      scene.simulate(deltaTime, true);
    }

    scene.fetchResults(true);

    for (let i = 0; i < this.wrappedBodies.length; i++) {
      const body = this.wrappedBodies[i];
      body.syncPhysicsToScene();
    }
  }

  syncSceneToPhysics() {
    for (let i = 0; i < this.wrappedBodies.length; i++) {
      const body = this.wrappedBodies[i];
      body.syncSceneToPhysics();
    }
  }

  syncAfterEvents() {
    for (let i = 0; i < this.wrappedBodies.length; i++) {
      const body = this.wrappedBodies[i];
      body.syncSceneWithCheck();
    }
  }

  getSharedBody(node, wrappedBody) {
    return _physxSharedBody.PhysXSharedBody.getSharedBody(node, this, wrappedBody);
  }

  addActor(body) {
    const index = this.wrappedBodies.indexOf(body);

    if (index < 0) {
      (0, _exportPhysx.addActorToScene)(this.scene, body.impl);
      this.wrappedBodies.push(body);
    }
  }

  removeActor(body) {
    const index = this.wrappedBodies.indexOf(body);

    if (index >= 0) {
      this.scene.removeActor(body.impl, true);
      (0, _array.fastRemoveAt)(this.wrappedBodies, index);
    }
  }

  addConstraint(_constraint) {}

  removeConstraint(_constraint) {}

  raycast(worldRay, options, pool, results) {
    const maxDistance = options.maxDistance;
    const flags = 1 << 0 | 1 << 1 | 1 << 10;
    const word3 = 1 | (options.queryTrigger ? 0 : 2);

    if (_exportPhysx.USE_BYTEDANCE) {
      this.queryfilterData.data.word3 = word3;
      this.queryfilterData.data.word0 = options.mask >>> 0;
      this.queryfilterData.flags = 1 << 0 | 1 << 1 | 1 << 2 | 1 << 5;

      const r = _exportPhysx.PX.SceneQueryExt.raycastMultiple(this.scene, worldRay.o, worldRay.d, maxDistance, flags, this.mutipleResultSize, this.queryfilterData, this.queryFilterCB);

      if (r) {
        for (let i = 0; i < r.length; i++) {
          const block = r[i];
          const collider = (0, _exportPhysx.getWrapShape)(block.shape).collider;
          const result = pool.add();

          result._assign(block.position, block.distance, collider, block.normal);

          results.push(result);
        }

        return true;
      }
    } else {
      this.queryfilterData.setWords(word3, 3);
      this.queryfilterData.setWords(options.mask >>> 0, 0);
      this.queryfilterData.setFlags(1 << 0 | 1 << 1 | 1 << 2 | 1 << 5);
      const blocks = this.mutipleResults;
      const r = this.scene.raycastMultiple(worldRay.o, worldRay.d, maxDistance, flags, blocks, blocks.size(), this.queryfilterData, this.queryFilterCB, null);

      if (r > 0) {
        for (let i = 0; i < r; i++) {
          const block = blocks.get(i);
          const collider = (0, _exportPhysx.getWrapShape)(block.getShape()).collider;
          const result = pool.add();

          result._assign(block.position, block.distance, collider, block.normal);

          results.push(result);
        }

        return true;
      }

      if (r === -1) {
        // eslint-disable-next-line no-console
        console.error('not enough memory.');
      }
    }

    return false;
  }

  raycastClosest(worldRay, options, result) {
    const maxDistance = options.maxDistance;
    const flags = 1 << 0 | 1 << 1; // | (1 << 10);

    const word3 = 1 | (options.queryTrigger ? 0 : 2) | 4;

    if (_exportPhysx.USE_BYTEDANCE) {
      this.queryfilterData.data.word3 = word3;
      this.queryfilterData.data.word0 = options.mask >>> 0;
      this.queryfilterData.flags = 1 << 0 | 1 << 1 | 1 << 2;

      const block = _exportPhysx.PX.SceneQueryExt.raycastSingle(this.scene, worldRay.o, worldRay.d, maxDistance, flags, this.queryfilterData, this.queryFilterCB);

      if (block) {
        const collider = (0, _exportPhysx.getWrapShape)(block.shape).collider;

        result._assign(block.position, block.distance, collider, block.normal);

        return true;
      }
    } else {
      this.queryfilterData.setWords(options.mask >>> 0, 0);
      this.queryfilterData.setWords(word3, 3);
      this.queryfilterData.setFlags(1 << 0 | 1 << 1 | 1 << 2);
      const block = this.singleResult;
      const r = this.scene.raycastSingle(worldRay.o, worldRay.d, options.maxDistance, flags, block, this.queryfilterData, this.queryFilterCB, null);

      if (r) {
        const collider = (0, _exportPhysx.getWrapShape)(block.getShape()).collider;

        result._assign(block.position, block.distance, collider, block.normal);

        return true;
      }
    }

    return false;
  }

  emitEvents() {
    emitTriggerEvent();
    emitCollisionEvent();
  }

}

exports.PhysXWorld = PhysXWorld;