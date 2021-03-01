"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImplPtr = getImplPtr;
exports.getWrapShape = getWrapShape;
exports.getContactPosition = getContactPosition;
exports.getContactNormal = getContactNormal;
exports.getTempTransform = getTempTransform;
exports.addActorToScene = addActorToScene;
exports.setJointActors = setJointActors;
exports.setMassAndUpdateInertia = setMassAndUpdateInertia;
exports.copyPhysXTransform = copyPhysXTransform;
exports.physXEqualsCocosVec3 = physXEqualsCocosVec3;
exports.physXEqualsCocosQuat = physXEqualsCocosQuat;
exports.getContactData = getContactData;
exports.applyImpulse = applyImpulse;
exports.applyForce = applyForce;
exports.applyTorqueForce = applyTorqueForce;
exports.getShapeFlags = getShapeFlags;
exports.getShapeWorldBounds = getShapeWorldBounds;
exports.getShapeMaterials = getShapeMaterials;
exports.setupCommonCookingParam = setupCommonCookingParam;
exports.createConvexMesh = createConvexMesh;
exports.createMeshGeometryFlags = createMeshGeometryFlags;
exports.createTriangleMesh = createTriangleMesh;
exports.createBV33TriangleMesh = createBV33TriangleMesh;
exports.createBV34TriangleMesh = createBV34TriangleMesh;
exports.createHeightField = createHeightField;
exports.createHeightFieldGeometry = createHeightFieldGeometry;
exports._pxtrans = exports._trans = exports.EFilterDataWord3 = exports.PX = exports.USE_BYTEDANCE = void 0;

var _internal253Aconstants = require("../../../../virtual/internal%253Aconstants.js");

var _index = require("../../core/index.js");

var _util = require("../utils/util.js");

var _globalExports = require("../../core/global-exports.js");

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

/* eslint-disable import/no-mutable-exports */

/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/restrict-template-expressions */

/* eslint-disable consistent-return */

/* eslint-disable @typescript-eslint/no-unsafe-return */
// import PhysX from '@cocos/physx';
const globalThis = _globalExports.legacyCC._global; // globalThis.PX = PhysX;

let USE_BYTEDANCE = false;
exports.USE_BYTEDANCE = USE_BYTEDANCE;
if (_internal253Aconstants.BYTEDANCE) exports.USE_BYTEDANCE = USE_BYTEDANCE = true;
let _px = globalThis.PhysX;
if (USE_BYTEDANCE && globalThis && globalThis.tt.getPhy) _px = globalThis.tt.getPhy();
const PX = _px; /// enum ///

exports.PX = PX;
let EFilterDataWord3; /// adapters ///

exports.EFilterDataWord3 = EFilterDataWord3;

(function (EFilterDataWord3) {
  EFilterDataWord3[EFilterDataWord3["QUERY_FILTER"] = 1] = "QUERY_FILTER";
  EFilterDataWord3[EFilterDataWord3["QUERY_CHECK_TRIGGER"] = 2] = "QUERY_CHECK_TRIGGER";
  EFilterDataWord3[EFilterDataWord3["QUERY_SINGLE_HIT"] = 4] = "QUERY_SINGLE_HIT";
  EFilterDataWord3[EFilterDataWord3["DETECT_TRIGGER_EVENT"] = 8] = "DETECT_TRIGGER_EVENT";
  EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_EVENT"] = 16] = "DETECT_CONTACT_EVENT";
  EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_POINT"] = 32] = "DETECT_CONTACT_POINT";
  EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_CCD"] = 64] = "DETECT_CONTACT_CCD";
})(EFilterDataWord3 || (exports.EFilterDataWord3 = EFilterDataWord3 = {}));

const _trans = {
  translation: {
    x: 0,
    y: 0,
    z: 0
  },
  rotation: {
    x: 0,
    y: 0,
    z: 0,
    w: 1
  }
};
exports._trans = _trans;

const _pxtrans = USE_BYTEDANCE && PX ? new PX.Transform({
  x: 0,
  y: 0,
  z: 0
}, {
  x: 0,
  y: 0,
  z: 0,
  w: 1
}) : _trans;

exports._pxtrans = _pxtrans;

if (PX) {
  PX.CACHE_MAT = {};
  PX.IMPL_PTR = {};
  PX.MESH_CONVEX = {};
  PX.MESH_STATIC = {};
  PX.TERRAIN_STATIC = {};

  if (!USE_BYTEDANCE) {
    PX.VECTOR_MAT = new PX.PxMaterialVector();
    PX.ShapeFlag = PX.PxShapeFlag;
    PX.ActorFlag = PX.PxActorFlag;
    PX.RigidBodyFlag = PX.PxRigidBodyFlag;
    PX.RigidDynamicLockFlag = PX.PxRigidDynamicLockFlag;
    PX.CombineMode = PX.PxCombineMode;
    PX.ForceMode = PX.PxForceMode;
    PX.SphereGeometry = PX.PxSphereGeometry;
    PX.BoxGeometry = PX.PxBoxGeometry;
    PX.CapsuleGeometry = PX.PxCapsuleGeometry;
    PX.PlaneGeometry = PX.PxPlaneGeometry;
    PX.ConvexMeshGeometry = PX.PxConvexMeshGeometry;
    PX.TriangleMeshGeometry = PX.PxTriangleMeshGeometry;
    PX.MeshScale = PX.PxMeshScale;

    PX.createRevoluteJoint = (a, b, c, d) => PX.PxRevoluteJointCreate(PX.physics, a, b, c, d);

    PX.createDistanceJoint = (a, b, c, d) => PX.PxDistanceJointCreate(PX.physics, a, b, c, d);
  }
}

function getImplPtr(impl) {
  if (USE_BYTEDANCE) {
    return impl.getQueryFilterData().word2;
  }

  return impl.$$.ptr;
}

function getWrapShape(pxShape) {
  return PX.IMPL_PTR[getImplPtr(pxShape)];
}
/**
 * f32 x3  position.x,position.y,position.z,
 * f32 x3 normal.x,normal.y,normal.z,
 * f32 x3 impulse.x,impulse.y,impulse.z,
 * f32 separation,
 * totoal = 40
 * ui32 internalFaceIndex0,
 * ui32 internalFaceIndex1,
 * totoal = 48
 */


function getContactPosition(pxContactOrIndex, out, buf) {
  if (USE_BYTEDANCE) {
    _index.Vec3.fromArray(out, new Float32Array(buf, 40 * pxContactOrIndex, 3));
  } else {
    _index.Vec3.copy(out, pxContactOrIndex.position);
  }
}

function getContactNormal(pxContactOrIndex, out, buf) {
  if (USE_BYTEDANCE) {
    _index.Vec3.fromArray(out, new Float32Array(buf, 40 * pxContactOrIndex + 12, 3));
  } else {
    _index.Vec3.copy(out, pxContactOrIndex.normal);
  }
}

function getTempTransform(pos, quat) {
  if (USE_BYTEDANCE) {
    _pxtrans.setPosition(pos);

    _pxtrans.setQuaternion(quat);
  } else {
    _index.Vec3.copy(_pxtrans.translation, pos);

    _index.Quat.copy(_pxtrans.rotation, quat);
  }

  return _pxtrans;
}

function addActorToScene(scene, actor) {
  if (USE_BYTEDANCE) {
    scene.addActor(actor);
  } else {
    scene.addActor(actor, null);
  }
}

function setJointActors(joint, actor0, actor1) {
  if (USE_BYTEDANCE) {
    // eslint-disable-next-line no-unused-expressions
    actor1 ? joint.setActors(actor0, actor1) : joint.setActors(actor0);
  } else {
    joint.setActors(actor0, actor1);
  }
}

function setMassAndUpdateInertia(impl, mass) {
  if (USE_BYTEDANCE) {
    PX.RigidBodyExt.setMassAndUpdateInertia(impl, mass);
  } else {
    impl.setMassAndUpdateInertia(mass);
  }
}

function copyPhysXTransform(node, transform) {
  if (USE_BYTEDANCE) {
    const pos = transform.getPosition();
    const rot = transform.getQuaternion();
    node.setWorldPosition(pos);
    node.setWorldRotation(rot);
  } else {
    node.setWorldPosition(transform.translation);
    node.setWorldRotation(transform.rotation);
  }
}

function physXEqualsCocosVec3(trans, v3) {
  const pos = USE_BYTEDANCE ? trans.getPosition() : trans.translation;
  return _index.Vec3.equals(pos, v3);
}

function physXEqualsCocosQuat(trans, q) {
  const rot = USE_BYTEDANCE ? trans.getQuaternion() : trans.rotation;
  return _index.Quat.equals(rot, q);
}

function getContactData(vec, index, o) {
  if (USE_BYTEDANCE) {
    return index + o;
  } else {
    const gc = PX.getGContacts();
    const data = gc.get(index + o);
    gc.delete();
    return data;
  }
}

function applyImpulse(isGlobal, impl, vec, rp) {
  if (isGlobal) {
    if (USE_BYTEDANCE) {
      PX.RigidBodyExt.applyImpulse(impl, vec, rp);
    } else {
      impl.applyImpulse(vec, rp);
    }
  } else if (USE_BYTEDANCE) {
    PX.RigidBodyExt.applyLocalImpulse(impl, vec, rp);
  } else {
    impl.applyLocalImpulse(vec, rp);
  }
}

function applyForce(isGlobal, impl, vec, rp) {
  if (isGlobal) {
    if (USE_BYTEDANCE) {
      PX.RigidBodyExt.applyForce(impl, vec, rp);
    } else {
      impl.applyForce(vec, rp);
    }
  } else if (USE_BYTEDANCE) {
    PX.RigidBodyExt.applyLocalForce(impl, vec, rp);
  } else {
    impl.applyLocalForce(vec, rp);
  }
}

function applyTorqueForce(impl, vec) {
  if (USE_BYTEDANCE) {
    impl.addTorque(vec, PX.ForceMode.eFORCE, true);
  } else {
    impl.addTorque(vec);
  }
}

function getShapeFlags(isTrigger) {
  if (USE_BYTEDANCE) {
    const flag = (isTrigger ? PX.ShapeFlag.eTRIGGER_SHAPE : PX.ShapeFlag.eSIMULATION_SHAPE) | PX.ShapeFlag.eSCENE_QUERY_SHAPE;
    return flag;
  }

  const flag = (isTrigger ? PX.PxShapeFlag.eTRIGGER_SHAPE.value : PX.PxShapeFlag.eSIMULATION_SHAPE.value) | PX.PxShapeFlag.eSCENE_QUERY_SHAPE.value;
  return new PX.PxShapeFlags(flag);
}

function getShapeWorldBounds(shape, actor, i = 1.01) {
  if (USE_BYTEDANCE) {
    return PX.RigidBodyExt.getWorldBounds(shape, actor, i);
  } else {
    return shape.getWorldBounds(actor, i);
  }
}

function getShapeMaterials(pxMtl) {
  if (USE_BYTEDANCE) {
    return [pxMtl];
  }

  if (PX.VECTOR_MAT.size() > 0) {
    PX.VECTOR_MAT.set(0, pxMtl);
  } else {
    PX.VECTOR_MAT.push_back(pxMtl);
  }

  return PX.VECTOR_MAT;
}

function setupCommonCookingParam(params, skipMeshClean = false, skipEdgedata = false) {
  if (!USE_BYTEDANCE) return;
  params.setSuppressTriangleMeshRemapTable(true);

  if (!skipMeshClean) {
    params.setMeshPreprocessParams(params.getMeshPreprocessParams() & ~PX.MeshPreprocessingFlag.eDISABLE_CLEAN_MESH);
  } else {
    params.setMeshPreprocessParams(params.getMeshPreprocessParams() | PX.MeshPreprocessingFlag.eDISABLE_CLEAN_MESH);
  }

  if (skipEdgedata) {
    params.setMeshPreprocessParams(params.getMeshPreprocessParams() & ~PX.MeshPreprocessingFlag.eDISABLE_ACTIVE_EDGES_PRECOMPUTE);
  } else {
    params.setMeshPreprocessParams(params.getMeshPreprocessParams() | PX.MeshPreprocessingFlag.eDISABLE_ACTIVE_EDGES_PRECOMPUTE);
  }
}

function createConvexMesh(_buffer, cooking, physics) {
  const vertices = (0, _util.shrinkPositions)(_buffer);

  if (USE_BYTEDANCE) {
    const cdesc = new PX.ConvexMeshDesc();
    const verticesF32 = new Float32Array(vertices);
    cdesc.setPointsData(verticesF32);
    cdesc.setPointsCount(verticesF32.length / 3);
    cdesc.setPointsStride(3 * Float32Array.BYTES_PER_ELEMENT);
    cdesc.setConvexFlags(PX.ConvexFlag.eCOMPUTE_CONVEX);
    return cooking.createConvexMesh(cdesc);
  } else {
    const l = vertices.length;
    const vArr = new PX.PxVec3Vector();

    for (let i = 0; i < l; i += 3) {
      vArr.push_back({
        x: vertices[i],
        y: vertices[i + 1],
        z: vertices[i + 2]
      });
    }

    const r = cooking.createConvexMesh(vArr, physics);
    vArr.delete();
    return r;
  }
} // eTIGHT_BOUNDS = (1<<0) convex
// eDOUBLE_SIDED = (1<<1) trimesh


function createMeshGeometryFlags(flags, isConvex) {
  if (USE_BYTEDANCE) {
    return flags;
  }

  return isConvex ? new PX.PxConvexMeshGeometryFlags(flags) : new PX.PxMeshGeometryFlags(flags);
}

function createTriangleMesh(vertices, indices, cooking, physics) {
  if (USE_BYTEDANCE) {
    const meshDesc = new PX.TriangleMeshDesc();
    meshDesc.setPointsData(vertices);
    meshDesc.setPointsCount(vertices.length / 3);
    meshDesc.setPointsStride(Float32Array.BYTES_PER_ELEMENT * 3);
    const indicesUI32 = new Uint32Array(indices);
    meshDesc.setTrianglesData(indicesUI32);
    meshDesc.setTrianglesCount(indicesUI32.length / 3);
    meshDesc.setTrianglesStride(Uint32Array.BYTES_PER_ELEMENT * 3);
    return cooking.createTriangleMesh(meshDesc);
  } else {
    const l = vertices.length;
    const l2 = indices.length;
    const vArr = new PX.PxVec3Vector();

    for (let i = 0; i < l; i += 3) {
      vArr.push_back({
        x: vertices[i],
        y: vertices[i + 1],
        z: vertices[i + 2]
      });
    }

    const iArr = new PX.PxU16Vector();

    for (let i = 0; i < l2; i += 3) {
      iArr.push_back(indices[i]);
      iArr.push_back(indices[i + 1]);
      iArr.push_back(indices[i + 2]);
    }

    const r = cooking.createTriMeshExt(vArr, iArr, physics);
    vArr.delete();
    iArr.delete();
    return r;
  }
}

function createBV33TriangleMesh(vertices, indices, cooking, physics, skipMeshCleanUp = false, skipEdgeData = false, cookingPerformance = false, meshSizePerfTradeoff = true, inserted = true) {
  if (!USE_BYTEDANCE) return;
  const meshDesc = new PX.TriangleMeshDesc();
  meshDesc.setPointsData(vertices);
  meshDesc.setPointsCount(vertices.length / 3);
  meshDesc.setPointsStride(Float32Array.BYTES_PER_ELEMENT * 3);
  meshDesc.setTrianglesData(indices);
  meshDesc.setTrianglesCount(indices.length / 3);
  meshDesc.setTrianglesStride(Uint32Array.BYTES_PER_ELEMENT * 3);
  const params = cooking.getParams();
  setupCommonCookingParam(params, skipMeshCleanUp, skipEdgeData);
  const midDesc = new PX.BVH33MidphaseDesc();
  if (cookingPerformance) midDesc.setMeshCookingHint(PX.MeshCookingHint.eCOOKING_PERFORMANCE);else midDesc.setMeshCookingHint(PX.MeshCookingHint.eSIM_PERFORMANCE);
  if (meshSizePerfTradeoff) midDesc.setMeshSizePerformanceTradeOff(0.0);else midDesc.setMeshSizePerformanceTradeOff(0.55);
  params.setMidphaseDesc(midDesc);
  cooking.setParams(params);
  console.log(`[Physics] cook bvh33 status:${cooking.validateTriangleMesh(meshDesc)}`);
  return cooking.createTriangleMesh(meshDesc);
}

function createBV34TriangleMesh(vertices, indices, cooking, physics, skipMeshCleanUp = false, skipEdgeData = false, numTrisPerLeaf = true, inserted = true) {
  if (!USE_BYTEDANCE) return;
  const meshDesc = new PX.TriangleMeshDesc();
  meshDesc.setPointsData(vertices);
  meshDesc.setPointsCount(vertices.length / 3);
  meshDesc.setPointsStride(Float32Array.BYTES_PER_ELEMENT * 3);
  meshDesc.setTrianglesData(indices);
  meshDesc.setTrianglesCount(indices.length / 3);
  meshDesc.setTrianglesStride(Uint32Array.BYTES_PER_ELEMENT * 3);
  const params = cooking.getParams();
  setupCommonCookingParam(params, skipMeshCleanUp, skipEdgeData);
  const midDesc = new PX.BVH34MidphaseDesc();
  midDesc.setNumPrimsLeaf(numTrisPerLeaf);
  params.setMidphaseDesc(midDesc);
  cooking.setParams(params);
  console.log(`[Physics] cook bvh34 status:${cooking.validateTriangleMesh(meshDesc)}`);
  return cooking.createTriangleMesh(meshDesc);
}

function createHeightField(terrain, heightScale, cooking, physics) {
  const sizeI = terrain.getVertexCountI();
  const sizeJ = terrain.getVertexCountJ();

  if (USE_BYTEDANCE) {
    const samples = new PX.HeightFieldSamples(sizeI * sizeJ);

    for (let i = 0; i < sizeI; i++) {
      for (let j = 0; j < sizeJ; j++) {
        const s = terrain.getHeight(i, j) / heightScale;
        const index = j + i * sizeJ;
        samples.setHeightAtIndex(index, s); // samples.setMaterialIndex0AtIndex(index, 0);
        // samples.setMaterialIndex1AtIndex(index, 0);
      }
    }

    const hfdesc = new PX.HeightFieldDesc();
    hfdesc.setNbRows(sizeJ);
    hfdesc.setNbColumns(sizeI);
    hfdesc.setSamples(samples);
    return cooking.createHeightField(hfdesc);
  }

  const samples = new PX.PxHeightFieldSampleVector();

  for (let i = 0; i < sizeI; i++) {
    for (let j = 0; j < sizeJ; j++) {
      const s = new PX.PxHeightFieldSample();
      s.height = terrain.getHeight(i, j) / heightScale;
      samples.push_back(s);
    }
  }

  return cooking.createHeightFieldExt(sizeI, sizeJ, samples, physics);
}

function createHeightFieldGeometry(hf, flags, hs, xs, zs) {
  if (USE_BYTEDANCE) {
    return new PX.HeightFieldGeometry(hf, hs, xs, zs);
  }

  return new PX.PxHeightFieldGeometry(hf, new PX.PxMeshGeometryFlags(flags), hs, xs, zs);
}