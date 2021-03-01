System.register("q-bundled:///fs/cocos/physics/physx/export-physx.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../utils/util.js", "../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var BYTEDANCE, Quat, Vec3, shrinkPositions, legacyCC, globalThis, USE_BYTEDANCE, _px, PX, EFilterDataWord3, _trans, _pxtrans;

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
      Vec3.fromArray(out, new Float32Array(buf, 40 * pxContactOrIndex, 3));
    } else {
      Vec3.copy(out, pxContactOrIndex.position);
    }
  }

  function getContactNormal(pxContactOrIndex, out, buf) {
    if (USE_BYTEDANCE) {
      Vec3.fromArray(out, new Float32Array(buf, 40 * pxContactOrIndex + 12, 3));
    } else {
      Vec3.copy(out, pxContactOrIndex.normal);
    }
  }

  function getTempTransform(pos, quat) {
    if (USE_BYTEDANCE) {
      _pxtrans.setPosition(pos);

      _pxtrans.setQuaternion(quat);
    } else {
      Vec3.copy(_pxtrans.translation, pos);
      Quat.copy(_pxtrans.rotation, quat);
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
      var pos = transform.getPosition();
      var rot = transform.getQuaternion();
      node.setWorldPosition(pos);
      node.setWorldRotation(rot);
    } else {
      node.setWorldPosition(transform.translation);
      node.setWorldRotation(transform.rotation);
    }
  }

  function physXEqualsCocosVec3(trans, v3) {
    var pos = USE_BYTEDANCE ? trans.getPosition() : trans.translation;
    return Vec3.equals(pos, v3);
  }

  function physXEqualsCocosQuat(trans, q) {
    var rot = USE_BYTEDANCE ? trans.getQuaternion() : trans.rotation;
    return Quat.equals(rot, q);
  }

  function getContactData(vec, index, o) {
    if (USE_BYTEDANCE) {
      return index + o;
    } else {
      var gc = PX.getGContacts();
      var data = gc.get(index + o);
      gc["delete"]();
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
      var _flag = (isTrigger ? PX.ShapeFlag.eTRIGGER_SHAPE : PX.ShapeFlag.eSIMULATION_SHAPE) | PX.ShapeFlag.eSCENE_QUERY_SHAPE;

      return _flag;
    }

    var flag = (isTrigger ? PX.PxShapeFlag.eTRIGGER_SHAPE.value : PX.PxShapeFlag.eSIMULATION_SHAPE.value) | PX.PxShapeFlag.eSCENE_QUERY_SHAPE.value;
    return new PX.PxShapeFlags(flag);
  }

  function getShapeWorldBounds(shape, actor, i) {
    if (i === void 0) {
      i = 1.01;
    }

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

  function setupCommonCookingParam(params, skipMeshClean, skipEdgedata) {
    if (skipMeshClean === void 0) {
      skipMeshClean = false;
    }

    if (skipEdgedata === void 0) {
      skipEdgedata = false;
    }

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
    var vertices = shrinkPositions(_buffer);

    if (USE_BYTEDANCE) {
      var cdesc = new PX.ConvexMeshDesc();
      var verticesF32 = new Float32Array(vertices);
      cdesc.setPointsData(verticesF32);
      cdesc.setPointsCount(verticesF32.length / 3);
      cdesc.setPointsStride(3 * Float32Array.BYTES_PER_ELEMENT);
      cdesc.setConvexFlags(PX.ConvexFlag.eCOMPUTE_CONVEX);
      return cooking.createConvexMesh(cdesc);
    } else {
      var l = vertices.length;
      var vArr = new PX.PxVec3Vector();

      for (var i = 0; i < l; i += 3) {
        vArr.push_back({
          x: vertices[i],
          y: vertices[i + 1],
          z: vertices[i + 2]
        });
      }

      var r = cooking.createConvexMesh(vArr, physics);
      vArr["delete"]();
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
      var meshDesc = new PX.TriangleMeshDesc();
      meshDesc.setPointsData(vertices);
      meshDesc.setPointsCount(vertices.length / 3);
      meshDesc.setPointsStride(Float32Array.BYTES_PER_ELEMENT * 3);
      var indicesUI32 = new Uint32Array(indices);
      meshDesc.setTrianglesData(indicesUI32);
      meshDesc.setTrianglesCount(indicesUI32.length / 3);
      meshDesc.setTrianglesStride(Uint32Array.BYTES_PER_ELEMENT * 3);
      return cooking.createTriangleMesh(meshDesc);
    } else {
      var l = vertices.length;
      var l2 = indices.length;
      var vArr = new PX.PxVec3Vector();

      for (var i = 0; i < l; i += 3) {
        vArr.push_back({
          x: vertices[i],
          y: vertices[i + 1],
          z: vertices[i + 2]
        });
      }

      var iArr = new PX.PxU16Vector();

      for (var _i = 0; _i < l2; _i += 3) {
        iArr.push_back(indices[_i]);
        iArr.push_back(indices[_i + 1]);
        iArr.push_back(indices[_i + 2]);
      }

      var r = cooking.createTriMeshExt(vArr, iArr, physics);
      vArr["delete"]();
      iArr["delete"]();
      return r;
    }
  }

  function createBV33TriangleMesh(vertices, indices, cooking, physics, skipMeshCleanUp, skipEdgeData, cookingPerformance, meshSizePerfTradeoff, inserted) {
    if (skipMeshCleanUp === void 0) {
      skipMeshCleanUp = false;
    }

    if (skipEdgeData === void 0) {
      skipEdgeData = false;
    }

    if (cookingPerformance === void 0) {
      cookingPerformance = false;
    }

    if (meshSizePerfTradeoff === void 0) {
      meshSizePerfTradeoff = true;
    }

    if (inserted === void 0) {
      inserted = true;
    }

    if (!USE_BYTEDANCE) return;
    var meshDesc = new PX.TriangleMeshDesc();
    meshDesc.setPointsData(vertices);
    meshDesc.setPointsCount(vertices.length / 3);
    meshDesc.setPointsStride(Float32Array.BYTES_PER_ELEMENT * 3);
    meshDesc.setTrianglesData(indices);
    meshDesc.setTrianglesCount(indices.length / 3);
    meshDesc.setTrianglesStride(Uint32Array.BYTES_PER_ELEMENT * 3);
    var params = cooking.getParams();
    setupCommonCookingParam(params, skipMeshCleanUp, skipEdgeData);
    var midDesc = new PX.BVH33MidphaseDesc();
    if (cookingPerformance) midDesc.setMeshCookingHint(PX.MeshCookingHint.eCOOKING_PERFORMANCE);else midDesc.setMeshCookingHint(PX.MeshCookingHint.eSIM_PERFORMANCE);
    if (meshSizePerfTradeoff) midDesc.setMeshSizePerformanceTradeOff(0.0);else midDesc.setMeshSizePerformanceTradeOff(0.55);
    params.setMidphaseDesc(midDesc);
    cooking.setParams(params);
    console.log("[Physics] cook bvh33 status:" + cooking.validateTriangleMesh(meshDesc));
    return cooking.createTriangleMesh(meshDesc);
  }

  function createBV34TriangleMesh(vertices, indices, cooking, physics, skipMeshCleanUp, skipEdgeData, numTrisPerLeaf, inserted) {
    if (skipMeshCleanUp === void 0) {
      skipMeshCleanUp = false;
    }

    if (skipEdgeData === void 0) {
      skipEdgeData = false;
    }

    if (numTrisPerLeaf === void 0) {
      numTrisPerLeaf = true;
    }

    if (inserted === void 0) {
      inserted = true;
    }

    if (!USE_BYTEDANCE) return;
    var meshDesc = new PX.TriangleMeshDesc();
    meshDesc.setPointsData(vertices);
    meshDesc.setPointsCount(vertices.length / 3);
    meshDesc.setPointsStride(Float32Array.BYTES_PER_ELEMENT * 3);
    meshDesc.setTrianglesData(indices);
    meshDesc.setTrianglesCount(indices.length / 3);
    meshDesc.setTrianglesStride(Uint32Array.BYTES_PER_ELEMENT * 3);
    var params = cooking.getParams();
    setupCommonCookingParam(params, skipMeshCleanUp, skipEdgeData);
    var midDesc = new PX.BVH34MidphaseDesc();
    midDesc.setNumPrimsLeaf(numTrisPerLeaf);
    params.setMidphaseDesc(midDesc);
    cooking.setParams(params);
    console.log("[Physics] cook bvh34 status:" + cooking.validateTriangleMesh(meshDesc));
    return cooking.createTriangleMesh(meshDesc);
  }

  function createHeightField(terrain, heightScale, cooking, physics) {
    var sizeI = terrain.getVertexCountI();
    var sizeJ = terrain.getVertexCountJ();

    if (USE_BYTEDANCE) {
      var _samples = new PX.HeightFieldSamples(sizeI * sizeJ);

      for (var i = 0; i < sizeI; i++) {
        for (var j = 0; j < sizeJ; j++) {
          var s = terrain.getHeight(i, j) / heightScale;
          var index = j + i * sizeJ;

          _samples.setHeightAtIndex(index, s); // samples.setMaterialIndex0AtIndex(index, 0);
          // samples.setMaterialIndex1AtIndex(index, 0);

        }
      }

      var hfdesc = new PX.HeightFieldDesc();
      hfdesc.setNbRows(sizeJ);
      hfdesc.setNbColumns(sizeI);
      hfdesc.setSamples(_samples);
      return cooking.createHeightField(hfdesc);
    }

    var samples = new PX.PxHeightFieldSampleVector();

    for (var _i2 = 0; _i2 < sizeI; _i2++) {
      for (var _j = 0; _j < sizeJ; _j++) {
        var _s = new PX.PxHeightFieldSample();

        _s.height = terrain.getHeight(_i2, _j) / heightScale;
        samples.push_back(_s);
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

  _export({
    getImplPtr: getImplPtr,
    getWrapShape: getWrapShape,
    getContactPosition: getContactPosition,
    getContactNormal: getContactNormal,
    getTempTransform: getTempTransform,
    addActorToScene: addActorToScene,
    setJointActors: setJointActors,
    setMassAndUpdateInertia: setMassAndUpdateInertia,
    copyPhysXTransform: copyPhysXTransform,
    physXEqualsCocosVec3: physXEqualsCocosVec3,
    physXEqualsCocosQuat: physXEqualsCocosQuat,
    getContactData: getContactData,
    applyImpulse: applyImpulse,
    applyForce: applyForce,
    applyTorqueForce: applyTorqueForce,
    getShapeFlags: getShapeFlags,
    getShapeWorldBounds: getShapeWorldBounds,
    getShapeMaterials: getShapeMaterials,
    setupCommonCookingParam: setupCommonCookingParam,
    createConvexMesh: createConvexMesh,
    createMeshGeometryFlags: createMeshGeometryFlags,
    createTriangleMesh: createTriangleMesh,
    createBV33TriangleMesh: createBV33TriangleMesh,
    createBV34TriangleMesh: createBV34TriangleMesh,
    createHeightField: createHeightField,
    createHeightFieldGeometry: createHeightFieldGeometry,
    EFilterDataWord3: void 0
  });

  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
    }, function (_coreIndexJs) {
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_utilsUtilJs) {
      shrinkPositions = _utilsUtilJs.shrinkPositions;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
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
       */

      /* eslint-disable import/no-mutable-exports */

      /* eslint-disable no-console */

      /* eslint-disable @typescript-eslint/restrict-template-expressions */

      /* eslint-disable consistent-return */

      /* eslint-disable @typescript-eslint/no-unsafe-return */
      // import PhysX from '@cocos/physx';
      globalThis = legacyCC._global; // globalThis.PX = PhysX;

      _export("USE_BYTEDANCE", USE_BYTEDANCE = false);

      if (BYTEDANCE) _export("USE_BYTEDANCE", USE_BYTEDANCE = true);
      _px = globalThis.PhysX;
      if (USE_BYTEDANCE && globalThis && globalThis.tt.getPhy) _px = globalThis.tt.getPhy();

      _export("PX", PX = _px); /// enum ///


      (function (EFilterDataWord3) {
        EFilterDataWord3[EFilterDataWord3["QUERY_FILTER"] = 1] = "QUERY_FILTER";
        EFilterDataWord3[EFilterDataWord3["QUERY_CHECK_TRIGGER"] = 2] = "QUERY_CHECK_TRIGGER";
        EFilterDataWord3[EFilterDataWord3["QUERY_SINGLE_HIT"] = 4] = "QUERY_SINGLE_HIT";
        EFilterDataWord3[EFilterDataWord3["DETECT_TRIGGER_EVENT"] = 8] = "DETECT_TRIGGER_EVENT";
        EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_EVENT"] = 16] = "DETECT_CONTACT_EVENT";
        EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_POINT"] = 32] = "DETECT_CONTACT_POINT";
        EFilterDataWord3[EFilterDataWord3["DETECT_CONTACT_CCD"] = 64] = "DETECT_CONTACT_CCD";
      })(EFilterDataWord3 || _export("EFilterDataWord3", EFilterDataWord3 = {}));

      /// adapters ///
      _export("_trans", _trans = {
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
      });

      _export("_pxtrans", _pxtrans = USE_BYTEDANCE && PX ? new PX.Transform({
        x: 0,
        y: 0,
        z: 0
      }, {
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }) : _trans);

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

          PX.createRevoluteJoint = function (a, b, c, d) {
            return PX.PxRevoluteJointCreate(PX.physics, a, b, c, d);
          };

          PX.createDistanceJoint = function (a, b, c, d) {
            return PX.PxDistanceJointCreate(PX.physics, a, b, c, d);
          };
        }
      }
    }
  };
});