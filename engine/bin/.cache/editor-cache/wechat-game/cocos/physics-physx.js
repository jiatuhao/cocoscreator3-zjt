System.register(["./coordinates-converts-utils-bf8713a9.js","./index-6f89fc06.js","./event-enum-5a5aa40e.js","./deprecated-3.0.0-f3f53c89.js","./renderable-component-658e90bd.js","./transform-utils-1f4a2037.js","./view-7d20208a.js","./screen-d46ce30a.js","./json-asset-0797cbb7.js","./camera-component-f1234106.js","./find-5191dd26.js","./factory-9595a1ce.js","./mesh-3d4ecfd0.js","./skeleton-c02c55ca.js","./index-7b16c266.js","./collision-matrix-fb9744d2.js","./terrain-asset-59d38d9d.js","./util-e24f820c.js","./tuple-dictionary-5e20c301.js","./cylinder-0402b698.js"],(function(){"use strict";var t,i,e,s,o,n,r,a,l,c,h,d,u,p,y,_,f,m,g,S,E,v;return{setters:[function(c){t=c.b2,i=c.b6,e=c.l,s=c.e4,o=c.g4,n=c.e,r=c.e3,a=c.bB,l=c.u},function(){},function(t){c=t.T},function(t){h=t.A},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(t){d=t.P,u=t.s},function(t){p=t.a,y=t.P,_=t.E},function(){},function(t){f=t.a,m=t.V,g=t.T,S=t.C},function(t){E=t.T},function(t){v=t.c}],execute:function(){var T,C=e._global.PhysX;!function(t){t[t.QUERY_FILTER=1]="QUERY_FILTER",t[t.QUERY_CHECK_TRIGGER=2]="QUERY_CHECK_TRIGGER",t[t.QUERY_SINGLE_HIT=4]="QUERY_SINGLE_HIT",t[t.DETECT_TRIGGER_EVENT=8]="DETECT_TRIGGER_EVENT",t[t.DETECT_CONTACT_EVENT=16]="DETECT_CONTACT_EVENT",t[t.DETECT_CONTACT_POINT=32]="DETECT_CONTACT_POINT",t[t.DETECT_CONTACT_CCD=64]="DETECT_CONTACT_CCD"}(T||(T={}));var A={translation:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0,w:1}},B=A;function M(t){return C.IMPL_PTR[(i=t,i.$$.ptr)];var i}function R(i,e){t.copy(e,i.position)}function P(i,e){t.copy(e,i.normal)}function w(e,s){return t.copy(B.translation,e),i.copy(B.rotation,s),B}function L(t,i){t.addActor(i,null)}function D(t,i,e){t.setActors(i,e)}function I(t,i){t.setMassAndUpdateInertia(i)}function G(t,i,e){var s=C.getGContacts(),o=s.get(i+e);return s.delete(),o}function x(t,i,e,s){t?i.applyImpulse(e,s):i.applyLocalImpulse(e,s)}function F(t,i,e,s){t?i.applyForce(e,s):i.applyLocalForce(e,s)}function O(t,i){t.addTorque(i)}function k(t,i,e){for(var s=f(t),o=s.length,n=new C.PxVec3Vector,r=0;r<o;r+=3)n.push_back({x:s[r],y:s[r+1],z:s[r+2]});var a=i.createConvexMesh(n,e);return n.delete(),a}function N(t,i){return i?new C.PxConvexMeshGeometryFlags(t):new C.PxMeshGeometryFlags(t)}C&&(C.CACHE_MAT={},C.IMPL_PTR={},C.MESH_CONVEX={},C.MESH_STATIC={},C.TERRAIN_STATIC={},C.VECTOR_MAT=new C.PxMaterialVector,C.ShapeFlag=C.PxShapeFlag,C.ActorFlag=C.PxActorFlag,C.RigidBodyFlag=C.PxRigidBodyFlag,C.RigidDynamicLockFlag=C.PxRigidDynamicLockFlag,C.CombineMode=C.PxCombineMode,C.ForceMode=C.PxForceMode,C.SphereGeometry=C.PxSphereGeometry,C.BoxGeometry=C.PxBoxGeometry,C.CapsuleGeometry=C.PxCapsuleGeometry,C.PlaneGeometry=C.PxPlaneGeometry,C.ConvexMeshGeometry=C.PxConvexMeshGeometry,C.TriangleMeshGeometry=C.PxTriangleMeshGeometry,C.MeshScale=C.PxMeshScale,C.createRevoluteJoint=function(t,i,e,s){return C.PxRevoluteJointCreate(C.physics,t,i,e,s)},C.createDistanceJoint=function(t,i,e,s){return C.PxDistanceJointCreate(C.physics,t,i,e,s)});var b=function(){function e(t,i){this.id=void 0,this.node=void 0,this.wrappedWorld=void 0,this.wrappedShapes=[],this.wrappedJoints0=[],this.wrappedJoints1=[],this._index=-1,this._ref=0,this._isStatic=!1,this._isKinematic=!1,this._wrappedBody=null,this._filterData=void 0,this.id=e.idCounter++,this.node=t,this.wrappedWorld=i,this._filterData={word0:1,word1:1,word2:0,word3:0}}e.getSharedBody=function(t,i,s){var o,n=t.uuid;if(e.sharedBodesMap.has(n)?o=e.sharedBodesMap.get(n):((o=new e(t,i)).filterData.word0=y.DEFAULT,o.filterData.word1=d.instance.collisionMatrix[y.DEFAULT],e.sharedBodesMap.set(t.uuid,o)),s){o._wrappedBody=s;var r=s.rigidBody.group,a=d.instance.collisionMatrix[r];o.filterData.word0=r,o.filterData.word1=a}return o},s(e,[{key:"isStatic",get:function(){return this._isStatic}},{key:"isKinematic",get:function(){return this._isKinematic}},{key:"isDynamic",get:function(){return!this._isStatic&&!this._isKinematic}},{key:"wrappedBody",get:function(){return this._wrappedBody}},{key:"filterData",get:function(){return this._filterData}},{key:"impl",get:function(){return this._initActor(),this.isStatic?this._staticActor:this._dynamicActor}},{key:"reference",set:function(t){this._ref=t?this._ref+1:this._ref-1,0===this._ref&&this.destroy()}},{key:"enabled",set:function(t){if(t)this._index<0&&(this._index=this.wrappedWorld.wrappedBodies.length,this.wrappedWorld.addActor(this));else if(this._index>=0){var i=this.wrappedShapes,e=this.wrappedBody;(0===i.length&&null==e||0===i.length&&null!=e&&!e.isEnabled)&&(this._index=-1,this.clearForces(),this.clearVelocity(),this.wrappedWorld.removeActor(this))}}}]);var n=e.prototype;return n._initActor=function(){var t=this._isStatic,i=this.wrappedBody;i?i.rigidBody.type===p.STATIC?(this._isStatic=!0,this._isKinematic=!1,this._initStaticActor()):(this._isStatic=!1,this._initDynamicActor()):(this._isStatic=!0,this._isKinematic=!1,this._initStaticActor()),t!==this._isStatic&&this._switchActor(t)},n._initStaticActor=function(){if(!this._staticActor){var t=w(this.node.worldPosition,this.node.worldRotation);this._staticActor=this.wrappedWorld.physics.createRigidStatic(t),this._staticActor.$$&&(C.IMPL_PTR[this._staticActor.$$.ptr]=this)}},n._initDynamicActor=function(){if(!this._dynamicActor){var t=w(this.node.worldPosition,this.node.worldRotation);this._dynamicActor=this.wrappedWorld.physics.createRigidDynamic(t),this._dynamicActor.$$&&(C.IMPL_PTR[this._dynamicActor.$$.ptr]=this);var i=this.wrappedBody;if(i){var e=i.rigidBody;this._dynamicActor.setMass(e.mass),this._dynamicActor.setActorFlag(C.ActorFlag.eDISABLE_GRAVITY,!e.useGravity),this.setRigidBodyFlag(C.RigidBodyFlag.eKINEMATIC,e.isKinematic),this._dynamicActor.setLinearDamping(e.linearDamping),this._dynamicActor.setAngularDamping(e.angularDamping);var s=e.linearFactor;this._dynamicActor.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_LINEAR_X,!s.x),this._dynamicActor.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_LINEAR_Y,!s.y),this._dynamicActor.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_LINEAR_Z,!s.z);var o=e.angularFactor;this._dynamicActor.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_ANGULAR_X,!o.x),this._dynamicActor.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_ANGULAR_Y,!o.y),this._dynamicActor.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_ANGULAR_Z,!o.z)}}},n._switchActor=function(t){if(this._staticActor&&this._dynamicActor){var e=t?this._staticActor:this._dynamicActor,s=t?this._dynamicActor:this._staticActor;this._index>=0&&(this.wrappedWorld.scene.removeActor(e,!1),L(this.wrappedWorld.scene,s));for(var o=0;o<this.wrappedShapes.length;o++){var n=this.wrappedShapes[o];e.detachShape(n.impl,!1),s.attachShape(n.impl)}if(t){var r=this._dynamicActor;I(r,this._wrappedBody.rigidBody.mass);var a=m;a.set(0,0,0);for(var l=0;l<this.wrappedShapes.length;l++)a.subtract(this.wrappedShapes[l].collider.center);r.setCMassLocalPose(w(a,i.IDENTITY))}}},n.addShape=function(i){this.wrappedShapes.indexOf(i)<0&&(i.setIndex(this.wrappedShapes.length),i.updateFilterData(this._filterData),this.impl.attachShape(i.impl),this.wrappedShapes.push(i),i.collider.isTrigger||(t.strictEquals(i.collider.center,t.ZERO)||this.updateCenterOfMass(),this.isDynamic&&I(this.impl,this._wrappedBody.rigidBody.mass)))},n.removeShape=function(i){var e=this.wrappedShapes.indexOf(i);e>=0&&(i.setIndex(-1),this.impl.detachShape(i.impl,!0),o(this.wrappedShapes,e),i.collider.isTrigger||(t.strictEquals(i.collider.center,t.ZERO)||this.updateCenterOfMass(),this.isDynamic&&I(this.impl,this._wrappedBody.rigidBody.mass)))},n.addJoint=function(t,i){i?this.wrappedJoints1.indexOf(t)<0&&this.wrappedJoints1.push(t):this.wrappedJoints0.indexOf(t)<0&&this.wrappedJoints0.push(t)},n.removeJoint=function(t,i){if(i){var e=this.wrappedJoints1.indexOf(t);e>=0&&o(this.wrappedJoints1,e)}else{var s=this.wrappedJoints0.indexOf(t);s>=0&&o(this.wrappedJoints0,s)}},n.setMass=function(t){t<=0||this.isDynamic&&I(this.impl,t)},n.setType=function(t){if(this._initActor(),!this.isStatic)switch(t){case p.DYNAMIC:this.setRigidBodyFlag(C.RigidBodyFlag.eKINEMATIC,!1);break;case p.KINEMATIC:default:this.setRigidBodyFlag(C.RigidBodyFlag.eKINEMATIC,!0)}},n.setRigidBodyFlag=function(t,i){t===C.RigidBodyFlag.eKINEMATIC&&(this._isKinematic=i),this.impl.setRigidBodyFlag(t,i)},n.syncSceneToPhysics=function(){var t=this.node;if(t.hasChangedFlags){t.hasChangedFlags&c.SCALE&&this.syncScale();var i=w(t.worldPosition,t.worldRotation);this._isKinematic?this.impl.setKinematicTarget(i):this.impl.setGlobalPose(i,!0)}},n.syncSceneWithCheck=function(){var e=this.node;if(e.hasChangedFlags){e.hasChangedFlags&c.SCALE&&this.syncScale();var s=e.worldPosition,o=e.worldRotation,n=this.impl.getGlobalPose();if(!function(i,e){var s=i.translation;return t.equals(s,e)}(n,s)||!function(t,e){var s=t.rotation;return i.equals(s,e)}(n,o)){var r=w(e.worldPosition,e.worldRotation);this._isKinematic?this.impl.setKinematicTarget(r):this.impl.setGlobalPose(r,!0)}}},n.syncPhysicsToScene=function(){if(!this._isStatic&&!this._dynamicActor.isSleeping()){var t=this._dynamicActor.getGlobalPose();!function(t,i){t.setWorldPosition(i.translation),t.setWorldRotation(i.rotation)}(this.node,t)}},n.syncScale=function(){for(var t=0;t<this.wrappedShapes.length;t++)this.wrappedShapes[t].updateScale();for(var i=0;i<this.wrappedJoints0.length;i++)this.wrappedJoints0[i].updateScale0();for(var e=0;e<this.wrappedJoints1.length;e++)this.wrappedJoints1[e].updateScale1()},n.setGroup=function(t){this._filterData.word0=t,this.updateFilterData()},n.getGroup=function(){return this._filterData.word0},n.addGroup=function(t){this._filterData.word0|=t,this.updateFilterData()},n.removeGroup=function(t){this._filterData.word0&=~t,this.updateFilterData()},n.setMask=function(t){-1===t&&(t=4294967295),this._filterData.word1=t,this.updateFilterData()},n.getMask=function(){return this._filterData.word1},n.addMask=function(t){this._filterData.word1|=t,this.updateFilterData()},n.removeMask=function(t){this._filterData.word1&=~t,this.updateFilterData()},n.updateFilterData=function(){for(var t=0;t<this.wrappedShapes.length;t++)this.wrappedShapes[t].updateFilterData(this._filterData)},n.updateCenterOfMass=function(){if(this._initActor(),!this._isStatic){var t=m;t.set(0,0,0);for(var e=0;e<this.wrappedShapes.length;e++)t.subtract(this.wrappedShapes[e].collider.center);this.impl.setCMassLocalPose(w(t,i.IDENTITY))}},n.clearForces=function(){this._isStatic||this._isKinematic||(this.impl.clearForce(C.ForceMode.eFORCE),this.impl.clearForce(C.ForceMode.eIMPULSE),this.impl.clearTorque(C.ForceMode.eFORCE),this.impl.clearTorque(C.ForceMode.eIMPULSE))},n.clearVelocity=function(){this._isStatic||this._isKinematic||(this.impl.setLinearVelocity(t.ZERO,!1),this.impl.setAngularVelocity(t.ZERO,!1))},n.destroy=function(){this._dynamicActor&&(this._dynamicActor.$$&&(C.IMPL_PTR[this._dynamicActor.$$.ptr]=null,delete C.IMPL_PTR[this._dynamicActor.$$.ptr]),this._dynamicActor.release(),this._dynamicActor=null),this._staticActor&&(this._staticActor.$$&&(C.IMPL_PTR[this._staticActor.$$.ptr]=null,delete C.IMPL_PTR[this._staticActor.$$.ptr]),this._staticActor.release(),this._staticActor=null),e.sharedBodesMap.delete(this.node.uuid)},e}();b.idCounter=0,b.sharedBodesMap=new Map;var H=new i,Y=function(){function e(t){this.impl=null,this.event=void 0,this.event=t}s(e,[{key:"isBodyA",get:function(){return this.colliderA.uuid===this.event.selfCollider.uuid}}]);var o=e.prototype;return o.getLocalPointOnA=function(i){R(this.impl,i,this.event.impl),t.subtract(i,i,this.colliderA.node.worldPosition)},o.getLocalPointOnB=function(i){R(this.impl,i,this.event.impl),t.subtract(i,i,this.colliderB.node.worldPosition)},o.getWorldPointOnA=function(t){R(this.impl,t,this.event.impl)},o.getWorldPointOnB=function(t){R(this.impl,t,this.event.impl)},o.getLocalNormalOnA=function(e){this.getWorldNormalOnA(e),i.conjugate(H,this.colliderA.node.worldRotation),t.transformQuat(e,e,H)},o.getLocalNormalOnB=function(e){this.getWorldNormalOnB(e),i.conjugate(H,this.colliderB.node.worldRotation),t.transformQuat(e,e,H)},o.getWorldNormalOnA=function(i){P(this.impl,i,this.event.impl),this.isBodyA||t.negate(i,i)},o.getWorldNormalOnB=function(t){P(this.impl,t,this.event.impl)},e}(),V=new E,K=new E,$=[];function X(t,i,e){var s;i&&e&&(i.collider.needTriggerEvent||e.collider.needTriggerEvent)&&($.length>0?((s=$.pop()).a=i,s.b=e,s.times=0):s={a:i,b:e,times:0},"onTriggerEnter"===t?V.set(i.id,e.id,s):K.set(i.id,e.id,s))}var U=new E,W=[];function z(t,i,e,s,o,n){if(i&&e&&(i.collider.needCollisionEvent||e.collider.needCollisionEvent))if(W.length>0){var r=W.pop();r.type=t,r.a=i,r.b=e,r.contactCount=s,r.buffer=o,r.offset=n,U.set(i.id,e.id,r)}else{var a={type:t,a:i,b:e,contactCount:s,buffer:o,offset:n};U.set(i.id,e.id,a)}}var J,q=[],j={onContactBegin:function(t,i,e,s,o){z("onCollisionEnter",M(t),M(i),e,s,o)},onContactEnd:function(t,i,e,s,o){z("onCollisionExit",M(t),M(i),e,s,o)},onContactPersist:function(t,i,e,s,o){z("onCollisionStay",M(t),M(i),e,s,o)},onTriggerBegin:function(t,i){X("onTriggerEnter",M(t),M(i))},onTriggerEnd:function(t,i){X("onTriggerExit",M(t),M(i))}},Q={preFilter:function(t,i){var e=i.getFlags();return 2&t.word3&&e.isSet(C.PxShapeFlag.eTRIGGER_SHAPE)?C.PxQueryHitType.eNONE:4&t.word3?C.PxQueryHitType.eBLOCK:C.PxQueryHitType.eTOUCH}},Z=function(){var t=i.prototype;function i(){this.physics=void 0,this.scene=void 0,this.cooking=void 0,this.queryfilterData=void 0,this.singleResult=void 0,this.mutipleResults=void 0,this.simulationCB=void 0,this.queryFilterCB=void 0,this.wrappedBodies=[],this.mutipleResultSize=12,this.singleResult=new C.PxRaycastHit,this.mutipleResults=new C.PxRaycastHitVector,this.mutipleResults.resize(this.mutipleResultSize,this.singleResult),this.queryfilterData=new C.PxQueryFilterData,this.simulationCB=C.PxSimulationEventCallback.implement(j),this.queryFilterCB=C.PxQueryFilterCallback.implement(Q);var t=C.PX_PHYSICS_VERSION,i=new C.PxDefaultErrorCallback,e=new C.PxDefaultAllocator,s=C.PxCreateFoundation(t,e,i),o=new C.PxTolerancesScale;this.cooking=C.PxCreateCooking(t,s,new C.PxCookingParams(o)),this.physics=C.PxCreatePhysics(t,s,o,!1,null),C.PxInitExtensions(this.physics,null);var n=C.getDefaultSceneDesc(this.physics.getTolerancesScale(),0,this.simulationCB);this.scene=this.physics.createScene(n),C.physics=this.physics}return t.setAllowSleep=function(){},t.setDefaultMaterial=function(){},t.setGravity=function(t){this.scene.setGravity(t)},s(i,[{key:"impl",get:function(){return this.scene}}]),t.destroy=function(){this.wrappedBodies.length&&n("You should destroy all physics component first."),this.scene.release()},t.step=function(t){if(0!==this.wrappedBodies.length){var i=this.scene;i.simulate(t,!0),i.fetchResults(!0);for(var e=0;e<this.wrappedBodies.length;e++)this.wrappedBodies[e].syncPhysicsToScene()}},t.syncSceneToPhysics=function(){for(var t=0;t<this.wrappedBodies.length;t++)this.wrappedBodies[t].syncSceneToPhysics()},t.syncAfterEvents=function(){for(var t=0;t<this.wrappedBodies.length;t++)this.wrappedBodies[t].syncSceneWithCheck()},t.getSharedBody=function(t,i){return b.getSharedBody(t,this,i)},t.addActor=function(t){this.wrappedBodies.indexOf(t)<0&&(L(this.scene,t.impl),this.wrappedBodies.push(t))},t.removeActor=function(t){var i=this.wrappedBodies.indexOf(t);i>=0&&(this.scene.removeActor(t.impl,!0),o(this.wrappedBodies,i))},t.addConstraint=function(){},t.removeConstraint=function(){},t.raycast=function(t,i,e,s){var o=i.maxDistance,n=1|(i.queryTrigger?0:2);this.queryfilterData.setWords(n,3),this.queryfilterData.setWords(i.mask>>>0,0),this.queryfilterData.setFlags(39);var r=this.mutipleResults,a=this.scene.raycastMultiple(t.o,t.d,o,1027,r,r.size(),this.queryfilterData,this.queryFilterCB,null);if(a>0){for(var l=0;l<a;l++){var c=r.get(l),h=M(c.getShape()).collider,d=e.add();d._assign(c.position,c.distance,h,c.normal),s.push(d)}return!0}return-1===a&&console.error("not enough memory."),!1},t.raycastClosest=function(t,i,e){i.maxDistance;var s=5|(i.queryTrigger?0:2);this.queryfilterData.setWords(i.mask>>>0,0),this.queryfilterData.setWords(s,3),this.queryfilterData.setFlags(7);var o=this.singleResult;if(this.scene.raycastSingle(t.o,t.d,i.maxDistance,3,o,this.queryfilterData,this.queryFilterCB,null)){var n=M(o.getShape()).collider;return e._assign(o.position,o.distance,n,o.normal),!0}return!1},t.emitEvents=function(){!function(){for(var t=K.getLength();t--;){var i=K.getKeyByIndex(t),e=K.getDataByKey(i);$.push(e);var s=V.getDataByKey(i);s&&($.push(s),V.set(e.a.id,e.b.id,null));var o=e.a.collider,n=e.b.collider;if(o&&n){var r="onTriggerExit";g.type=r,o.needTriggerEvent&&(g.selfCollider=o,g.otherCollider=n,o.emit(r,g)),n.needTriggerEvent&&(g.selfCollider=n,g.otherCollider=o,n.emit(r,g))}}for(K.reset(),t=V.getLength();t--;){var a=V.getKeyByIndex(t),l=V.getDataByKey(a),c=l.a.collider,h=l.b.collider;if(c&&c.isValid&&h&&h.isValid){var d=l.times++?"onTriggerStay":"onTriggerEnter";g.type=d,c.needTriggerEvent&&(g.selfCollider=c,g.otherCollider=h,c.emit(d,g)),h.needTriggerEvent&&(g.selfCollider=h,g.otherCollider=c,h.emit(d,g))}else $.push(l),V.set(l.a.id,l.b.id,null)}}(),function(){for(var t=U.getLength();t--;){var i=U.getKeyByIndex(t),e=U.getDataByKey(i);W.push(e);var s=e.a.collider,o=e.b.collider;if(s&&s.isValid&&o&&o.isValid){S.type=e.type,S.impl=e.buffer;var n=e.contactCount,r=(e.buffer,e.offset),a=S.contacts;q.push.apply(q,a),a.length=0;for(var l=0;l<n;l++)if(q.length>0){var c=q.pop();c.colliderA=s,c.colliderB=o,c.impl=G(0,l,r),a.push(c)}else{var h=new Y(S);h.colliderA=s,h.colliderB=o,h.impl=G(0,l,r),a.push(h)}s.needCollisionEvent&&(S.selfCollider=s,S.otherCollider=o,s.emit(S.type,S)),o.needCollisionEvent&&(S.selfCollider=o,S.otherCollider=s,o.emit(S.type,S))}}U.reset()}()},i}(),tt=new t,it=function(){function i(){this.isSleepy=!1,this._isEnabled=!1}var e=i.prototype;return e.initialize=function(t){this._rigidBody=t,this._sharedBody=d.instance.physicsWorld.getSharedBody(t.node,this),this._sharedBody.reference=!0},e.onEnable=function(){this._isEnabled=!0,this.setMass(this._rigidBody.mass),this.setType(this._rigidBody.type),this.setAllowSleep(this._rigidBody.allowSleep),this.setLinearDamping(this._rigidBody.linearDamping),this.setAngularDamping(this._rigidBody.angularDamping),this.setLinearFactor(this._rigidBody.linearFactor),this.setAngularFactor(this._rigidBody.angularFactor),this.useGravity(this._rigidBody.useGravity),this._sharedBody.enabled=!0},e.onDisable=function(){this._isEnabled=!1,this._sharedBody.enabled=!1},e.onDestroy=function(){this._sharedBody.reference=!1,this._rigidBody=null,this._sharedBody=null},e.setType=function(t){this._sharedBody.setType(t)},e.setMass=function(t){this.isStatic||this._sharedBody.setMass(t)},e.setLinearDamping=function(t){this.isStatic||this.impl.setLinearDamping(t)},e.setAngularDamping=function(t){this.isStatic||this.impl.setAngularDamping(t)},e.useGravity=function(t){this.isStatic||this.impl.setActorFlag(C.ActorFlag.eDISABLE_GRAVITY,!t)},e.useCCD=function(t){this.isStatic||this.impl.setRigidBodyFlag(C.RigidBodyFlag.eENABLE_CCD,t)},e.setLinearFactor=function(t){this.isStatic||(this.impl.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_LINEAR_X,!t.x),this.impl.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_LINEAR_Y,!t.y),this.impl.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_LINEAR_Z,!t.z))},e.setAngularFactor=function(t){this.isStatic||(this.impl.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_ANGULAR_X,!t.x),this.impl.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_ANGULAR_Y,!t.y),this.impl.setRigidDynamicLockFlag(C.RigidDynamicLockFlag.eLOCK_ANGULAR_Z,!t.z))},e.setAllowSleep=function(t){if(!this.isStaticOrKinematic){var i=this.impl.getSleepThreshold(),e=t?Math.max(0,i-.001):i+4294967295;this.impl.setWakeCounter(e)}},e.wakeUp=function(){this.isStatic||this.impl.wakeUp()},e.sleep=function(){this.isStatic||this.impl.putToSleep()},e.clearState=function(){this.isStatic||(this.clearForces(),this.clearVelocity())},e.clearForces=function(){this.isStatic||this._sharedBody.clearForces()},e.clearVelocity=function(){this.isStatic||this._sharedBody.clearVelocity()},e.setSleepThreshold=function(t){this.isStatic||this.impl.setSleepThreshold(t)},e.getSleepThreshold=function(){return this.isStatic?0:this.impl.getSleepThreshold()},e.getLinearVelocity=function(i){this.isStatic||t.copy(i,this.impl.getLinearVelocity())},e.setLinearVelocity=function(t){this.isStatic||this.impl.setLinearVelocity(t,!0)},e.getAngularVelocity=function(i){this.isStatic||t.copy(i,this.impl.getAngularVelocity())},e.setAngularVelocity=function(t){this.isStatic||this.impl.setAngularVelocity(t,!0)},e.applyForce=function(i,e){if(!this.isStatic){this._sharedBody.syncSceneToPhysics();var s=e||t.ZERO;F(!0,this.impl,i,s)}},e.applyLocalForce=function(i,e){if(!this.isStatic){this._sharedBody.syncSceneToPhysics();var s=e||t.ZERO;F(!1,this.impl,i,s)}},e.applyImpulse=function(i,e){if(!this.isStatic){this._sharedBody.syncSceneToPhysics();var s=e||t.ZERO;x(!0,this.impl,i,s)}},e.applyLocalImpulse=function(i,e){if(!this.isStatic){this._sharedBody.syncSceneToPhysics();var s=e||t.ZERO;x(!1,this.impl,i,s)}},e.applyTorque=function(t){this.isStatic||O(this.impl,t)},e.applyLocalTorque=function(i){this.isStatic||(this._sharedBody.syncSceneToPhysics(),t.transformQuat(tt,i,this._sharedBody.node.worldRotation),O(this.impl,tt))},e.setGroup=function(t){this._sharedBody.setGroup(t)},e.getGroup=function(){return this._sharedBody.getGroup()},e.addGroup=function(t){this._sharedBody.addGroup(t)},e.removeGroup=function(t){this._sharedBody.removeGroup(t)},e.setMask=function(t){this._sharedBody.setMask(t)},e.getMask=function(){return this._sharedBody.getMask()},e.addMask=function(t){this._sharedBody.addMask(t)},e.removeMask=function(t){this._sharedBody.removeMask(t)},s(i,[{key:"impl",get:function(){return this._sharedBody.impl}},{key:"isAwake",get:function(){return!this.impl.isSleeping()}},{key:"isSleeping",get:function(){return this.impl.isSleeping()}},{key:"isEnabled",get:function(){return this._isEnabled}},{key:"rigidBody",get:function(){return this._rigidBody}},{key:"sharedBody",get:function(){return this._sharedBody}},{key:"isStatic",get:function(){return!this.impl||this._sharedBody.isStatic}},{key:"isStaticOrKinematic",get:function(){return!this.impl||this._sharedBody.isStatic||this._sharedBody.isKinematic}}]),i}();!function(t){t[t.SPHERE=0]="SPHERE",t[t.BOX=1]="BOX",t[t.CAPSULE=2]="CAPSULE",t[t.CYLINDER=3]="CYLINDER",t[t.CONE=4]="CONE",t[t.PLANE=5]="PLANE",t[t.TERRAIN=6]="TERRAIN",t[t.MESH=7]="MESH"}(J||(J={}));var et=function(){function e(t){this.id=void 0,this.type=void 0,this._impl=null,this._collider=null,this._flags=void 0,this._rotation=new i(0,0,0,1),this._index=-1,this._word3=0,this.type=t,this.id=e.idCounter++}s(e,[{key:"impl",get:function(){return this._impl}},{key:"collider",get:function(){return this._collider}},{key:"attachedRigidBody",get:function(){return null}}],[{key:"MESH_SCALE",get:function(){return this._MESH_SCALE||(this._MESH_SCALE=new C.MeshScale(t.ZERO,i.IDENTITY)),this._MESH_SCALE}}]);var o=e.prototype;return o.initialize=function(t){var i;this._collider=t,this._flags=(i=(t.isTrigger?C.PxShapeFlag.eTRIGGER_SHAPE.value:C.PxShapeFlag.eSIMULATION_SHAPE.value)|C.PxShapeFlag.eSCENE_QUERY_SHAPE.value,new C.PxShapeFlags(i)),this._sharedBody=d.instance.physicsWorld.getSharedBody(t.node),this._sharedBody.reference=!0,this.onComponentSet(),this.setMaterial(this._collider.sharedMaterial),this._impl&&(this._impl.$$?C.IMPL_PTR[this._impl.$$.ptr]=this:C.IMPL_PTR[this.id]=this)},o.setIndex=function(t){this._index=t},o.onComponentSet=function(){},o.updateScale=function(){},o.onLoad=function(){this.setCenter(this._collider.center)},o.onEnable=function(){this._sharedBody.addShape(this),this._sharedBody.enabled=!0},o.onDisable=function(){this._sharedBody.removeShape(this),this._sharedBody.enabled=!1},o.onDestroy=function(){this._sharedBody.reference=!1,this._impl.$$?(C.IMPL_PTR[this._impl.$$.ptr]=null,delete C.IMPL_PTR[this._impl.$$.ptr]):(C.IMPL_PTR[this.id]=null,delete C.IMPL_PTR[this.id]),this._impl.release(),this._impl=null},o.setMaterial=function(t){if(this._impl){null==t&&(t=d.instance.defaultMaterial);var i,e=this.getSharedMaterial(t);this._impl.setMaterials((i=e,C.VECTOR_MAT.size()>0?C.VECTOR_MAT.set(0,i):C.VECTOR_MAT.push_back(i),C.VECTOR_MAT))}},o.getSharedMaterial=function(t){if(!C.CACHE_MAT[t._uuid]){var i=this._sharedBody.wrappedWorld.physics.createMaterial(t.friction,t.friction,t.restitution);return i.setFrictionCombineMode(C.CombineMode.eMULTIPLY),i.setRestitutionCombineMode(C.CombineMode.eMULTIPLY),C.CACHE_MAT[t._uuid]=i,i}var e=C.CACHE_MAT[t._uuid];return e.setStaticFriction(t.friction),e.setDynamicFriction(t.friction),e.setRestitution(t.restitution),e},o.setAsTrigger=function(t){t?(this._impl.setFlag(C.ShapeFlag.eSIMULATION_SHAPE,!t),this._impl.setFlag(C.ShapeFlag.eTRIGGER_SHAPE,t)):(this._impl.setFlag(C.ShapeFlag.eTRIGGER_SHAPE,t),this._impl.setFlag(C.ShapeFlag.eSIMULATION_SHAPE,!t)),this._index>=0&&(this._sharedBody.removeShape(this),this._sharedBody.addShape(this))},o.setCenter=function(e){var s=A.translation,o=A.rotation;t.multiply(s,e,this._collider.node.worldScale),i.copy(o,this._rotation);var n=w(s,o);this._impl.setLocalPose(n),this._collider.enabled&&this._sharedBody.updateCenterOfMass()},o.getAABB=function(t){var i,e,s,o=(i=this.impl,e=this._sharedBody.impl,void 0===(s=1)&&(s=1.01),i.getWorldBounds(e,s));h.fromPoints(t,o.minimum,o.maximum)},o.getBoundingSphere=function(t){h.toBoundingSphere(t,this._collider.worldBounds)},o.setGroup=function(t){this._sharedBody.setGroup(t)},o.getGroup=function(){return this._sharedBody.getGroup()},o.addGroup=function(t){this._sharedBody.addGroup(t)},o.removeGroup=function(t){this._sharedBody.removeGroup(t)},o.setMask=function(t){this._sharedBody.setMask(t)},o.getMask=function(){return this._sharedBody.getMask()},o.addMask=function(t){this._sharedBody.addMask(t)},o.removeMask=function(t){this._sharedBody.removeMask(t)},o.updateFilterData=function(t){this._word3=T.DETECT_CONTACT_CCD,this._collider.needTriggerEvent&&(this._word3|=T.DETECT_TRIGGER_EVENT),this._collider.needCollisionEvent&&(this._word3|=T.DETECT_CONTACT_EVENT|T.DETECT_CONTACT_POINT),t.word2=this.id,t.word3=this._word3,this._impl.setQueryFilterData(t),this._impl.setSimulationFilterData(t)},o.updateEventListener=function(){this._sharedBody&&this.updateFilterData(this._sharedBody.filterData)},e}();et._MESH_SCALE=void 0,et.idCounter=0;var st=function(t){function i(){var e;return e=t.call(this,J.SPHERE)||this,i.SPHERE_GEOMETRY||(i.SPHERE_GEOMETRY=new C.SphereGeometry(.5)),e}r(i,t);var e=i.prototype;return e.setRadius=function(){this.updateScale()},e.onComponentSet=function(){this.updateGeometry();var t=this._sharedBody.wrappedWorld.physics,e=this.getSharedMaterial(this.collider.sharedMaterial);this._impl=t.createShape(i.SPHERE_GEOMETRY,e,!0,this._flags)},e.updateScale=function(){this.updateGeometry(),this._impl.setGeometry(i.SPHERE_GEOMETRY),this.setCenter(this._collider.center)},e.updateGeometry=function(){var t=this.collider,e=t.node.worldScale,s=Math.abs(e.x),o=Math.abs(e.y),n=Math.abs(e.z),r=Math.max(Math.max(s,o),n);i.SPHERE_GEOMETRY.setRadius(Math.max(1e-4,t.radius*r))},s(i,[{key:"collider",get:function(){return this._collider}}]),i}(et);st.SPHERE_GEOMETRY=void 0;var ot=function(t){function i(){var e;return e=t.call(this,J.BOX)||this,i.BOX_GEOMETRY||(m.set(.5,.5,.5),i.BOX_GEOMETRY=new C.BoxGeometry(m)),e}r(i,t);var e=i.prototype;return e.setSize=function(){this.updateScale()},e.onComponentSet=function(){this.updateGeometry();var t=this._sharedBody.wrappedWorld.physics,e=this.getSharedMaterial(this._collider.sharedMaterial);this._impl=t.createShape(i.BOX_GEOMETRY,e,!0,this._flags)},e.updateScale=function(){this.updateGeometry(),this._impl.setGeometry(i.BOX_GEOMETRY),this.setCenter(this._collider.center)},e.updateGeometry=function(){var t=this.collider,e=t.node.worldScale;m.set(t.size),m.multiplyScalar(.5),m.multiply(e),m.x=Math.abs(m.x),m.y=Math.abs(m.y),m.z=Math.abs(m.z),i.BOX_GEOMETRY.setHalfExtents(m)},s(i,[{key:"collider",get:function(){return this._collider}}]),i}(et);ot.BOX_GEOMETRY=void 0;var nt=function(t){function e(){var i;return i=t.call(this,J.CAPSULE)||this,e.CAPSULE_GEOMETRY||(e.CAPSULE_GEOMETRY=new C.CapsuleGeometry(.5,.5)),i}r(e,t);var o=e.prototype;return o.setCylinderHeight=function(){this.updateScale()},o.setDirection=function(){this.updateScale()},o.setRadius=function(){this.updateScale()},o.onComponentSet=function(){this.updateGeometry();var t=this._sharedBody.wrappedWorld.physics,i=this.getSharedMaterial(this._collider.sharedMaterial);this._impl=t.createShape(e.CAPSULE_GEOMETRY,i,!0,this._flags)},o.updateScale=function(){this.updateGeometry(),this._impl.setGeometry(e.CAPSULE_GEOMETRY),this.setCenter(this._collider.center)},o.updateGeometry=function(){var t=this.collider,s=t.node.worldScale,o=t.direction,n=.5,r=.5;o===_.Y_AXIS?(n=t.radius*Math.abs(a(s.x,s.z)),r=t.cylinderHeight/2*Math.abs(s.y),i.fromEuler(this._rotation,0,0,90)):o===_.X_AXIS?(n=t.radius*Math.abs(a(s.y,s.z)),r=t.cylinderHeight/2*Math.abs(s.x),i.fromEuler(this._rotation,0,0,0)):(n=t.radius*Math.abs(a(s.x,s.y)),r=t.cylinderHeight/2*Math.abs(s.z),i.fromEuler(this._rotation,0,90,0)),e.CAPSULE_GEOMETRY.setRadius(Math.max(1e-4,n)),e.CAPSULE_GEOMETRY.setHalfHeight(Math.max(1e-4,r))},s(e,[{key:"collider",get:function(){return this._collider}}]),e}(et);nt.CAPSULE_GEOMETRY=void 0;var rt=function(e){function o(){var t;return t=e.call(this,J.PLANE)||this,o.PLANE_GEOMETRY||(o.PLANE_GEOMETRY=new C.PlaneGeometry),t}r(o,e);var n=o.prototype;return n.setNormal=function(){this.setCenter()},n.setConstant=function(){this.setCenter()},n.setCenter=function(){var e=this.collider,s=A.translation,o=A.rotation;t.scaleAndAdd(s,e.center,e.normal,e.constant),i.rotationTo(o,t.UNIT_X,e.normal);var n=w(s,o);this._impl.setLocalPose(n)},n.onComponentSet=function(){var t=this.collider,i=this._sharedBody.wrappedWorld.physics,e=this.getSharedMaterial(t.sharedMaterial);this._impl=i.createShape(o.PLANE_GEOMETRY,e,!0,this._flags),this.setCenter()},n.updateScale=function(){this.setCenter()},s(o,[{key:"collider",get:function(){return this._collider}}]),o}(et);rt.PLANE_GEOMETRY=void 0;var at=function(e){function o(){var t;return(t=e.call(this,J.MESH)||this).geometry=void 0,t}r(o,e);var n=o.prototype;return n.setMesh=function(e){if(e&&e.renderingSubMeshes.length>0&&null==this._impl){var s=this._sharedBody.wrappedWorld,o=s.physics,n=this.collider,r=this.getSharedMaterial(n.sharedMaterial),a=et.MESH_SCALE;if(a.setScale(t.ONE),a.setRotation(i.IDENTITY),n.convex){if(null==C.MESH_CONVEX[e._uuid]){var c=s.cooking,h=e.readAttribute(0,l.ATTR_POSITION);C.MESH_CONVEX[e._uuid]=k(h,c,o)}var d=C.MESH_CONVEX[e._uuid];this.geometry=new C.ConvexMeshGeometry(d,a,N(0,!0))}else{if(null==C.MESH_STATIC[e._uuid]){var u=s.cooking,p=e.readAttribute(0,l.ATTR_POSITION),y=e.readIndices(0);C.MESH_STATIC[e._uuid]=function(t,i,e,s){for(var o=t.length,n=i.length,r=new C.PxVec3Vector,a=0;a<o;a+=3)r.push_back({x:t[a],y:t[a+1],z:t[a+2]});for(var l=new C.PxU16Vector,c=0;c<n;c+=3)l.push_back(i[c]),l.push_back(i[c+1]),l.push_back(i[c+2]);var h=e.createTriMeshExt(r,l,s);return r.delete(),l.delete(),h}(p,y,u,o)}var _=C.MESH_STATIC[e._uuid];this.geometry=new C.TriangleMeshGeometry(_,a,N(0,!1))}this.updateGeometry(),this._impl=o.createShape(this.geometry,r,!0,this._flags)}},n.onComponentSet=function(){this.setMesh(this.collider.mesh)},n.updateScale=function(){this.updateGeometry(),this.setCenter(this._collider.center)},n.updateGeometry=function(){var t=et.MESH_SCALE;t.setScale(this.collider.node.worldScale),t.setRotation(i.IDENTITY),this.geometry.setScale(t)},s(o,[{key:"collider",get:function(){return this._collider}}]),o}(et),lt=function(t){function i(){return t.call(this,J.TERRAIN)||this}r(i,t);var e=i.prototype;return e.setTerrain=function(t){if(t&&null==this._impl){var e=this._sharedBody.wrappedWorld,s=e.physics,o=this.collider;if(null==C.TERRAIN_STATIC[t._uuid]){var n=e.cooking;C.TERRAIN_STATIC[t._uuid]=function(t,i,e,s){for(var o=t.getVertexCountI(),n=t.getVertexCountJ(),r=new C.PxHeightFieldSampleVector,a=0;a<o;a++)for(var l=0;l<n;l++){var c=new C.PxHeightFieldSample;c.height=t.getHeight(a,l)/i,r.push_back(c)}return e.createHeightFieldExt(o,n,r,s)}(t,i.heightScale,n,s)}var r=C.TERRAIN_STATIC[t._uuid],a=this.getSharedMaterial(o.sharedMaterial),l=function(t,i,e,s,o){return new C.PxHeightFieldGeometry(t,new C.PxMeshGeometryFlags(0),e,s,o)}(r,0,i.heightScale,t.tileSize,t.tileSize);this._impl=s.createShape(l,a,!0,this._flags)}},e.onComponentSet=function(){this.setTerrain(this.collider.terrain)},e.updateScale=function(){this.setCenter(this._collider.center)},e.setCenter=function(t){this._impl.setLocalPose(w(t,this._rotation))},s(i,[{key:"collider",get:function(){return this._collider}}]),i}(et);lt.heightScale=2e-4;var ct=function(e){function o(){var t;return(t=e.call(this,J.CYLINDER)||this).geometry=void 0,t}r(o,e);var n=o.prototype;return n.setRadius=function(){this.updateGeometry()},n.setHeight=function(){this.updateGeometry()},n.setDirection=function(){this.updateGeometry()},n.onComponentSet=function(){var e=this.collider,s=this._sharedBody.wrappedWorld.physics;if(!o.CONVEX_MESH){var n=this._sharedBody.wrappedWorld.cooking,r=v(.5,.5,2,{radialSegments:32,heightSegments:1});o.CONVEX_MESH=k(r.positions,n,s)}var a=et.MESH_SCALE;a.setScale(t.ONE),a.setRotation(i.IDENTITY);var l=o.CONVEX_MESH,c=this.getSharedMaterial(e.sharedMaterial);this.geometry=new C.ConvexMeshGeometry(l,a,N(0,!0)),this.updateGeometry(),this._impl=s.createShape(this.geometry,c,!0,this._flags)},n.updateScale=function(){this.updateGeometry(),this.setCenter(this._collider.center)},n.updateGeometry=function(){var e=this.collider,s=e.radius,o=e.height,n=e.direction,r=A.translation;t.copy(r,e.node.worldScale),r.y*=Math.max(1e-4,o/2);var a=Math.max(1e-4,s/.5);r.x*=a,r.z*=a;var l=A.rotation;switch(n){case _.X_AXIS:i.fromEuler(l,0,0,90);break;case _.Y_AXIS:default:i.copy(l,i.IDENTITY);break;case _.Z_AXIS:i.fromEuler(l,90,0,0)}var c=et.MESH_SCALE;c.setScale(r),c.setRotation(l),this.geometry.setScale(c)},s(o,[{key:"collider",get:function(){return this._collider}}]),o}(et);ct.CONVEX_MESH=void 0;var ht=function(e){function o(){var t;return(t=e.call(this,J.CONE)||this).geometry=void 0,t}r(o,e);var n=o.prototype;return n.setRadius=function(){this.updateGeometry()},n.setHeight=function(){this.updateGeometry()},n.setDirection=function(){this.updateGeometry()},n.onComponentSet=function(){var e=this.collider,s=this._sharedBody.wrappedWorld.physics;if(!o.CONVEX_MESH){var n=this._sharedBody.wrappedWorld.cooking,r=v(0,.5,1,{radialSegments:32,heightSegments:1});o.CONVEX_MESH=k(r.positions,n,s)}var a=et.MESH_SCALE;a.setScale(t.ONE),a.setRotation(i.IDENTITY);var l=o.CONVEX_MESH,c=this.getSharedMaterial(e.sharedMaterial);this.geometry=new C.ConvexMeshGeometry(l,a,N(0,!0)),this.updateGeometry(),this._impl=s.createShape(this.geometry,c,!0,this._flags)},n.updateScale=function(){this.updateGeometry(),this.setCenter(this._collider.center)},n.updateGeometry=function(){var e=this.collider,s=e.radius,o=e.height,n=e.direction,r=A.translation;t.copy(r,e.node.worldScale),r.y*=Math.max(1e-4,o/1);var a=Math.max(1e-4,s/.5);r.x*=a,r.z*=a;var l=A.rotation;switch(n){case _.X_AXIS:i.fromEuler(l,0,0,90);break;case _.Y_AXIS:default:i.copy(l,i.IDENTITY);break;case _.Z_AXIS:i.fromEuler(l,90,0,0)}var c=et.MESH_SCALE;c.setScale(r),c.setRotation(l),this.geometry.setScale(c)},s(o,[{key:"collider",get:function(){return this._collider}}]),o}(et);ht.CONVEX_MESH=void 0;var dt=function(){function t(){}var i=t.prototype;return i.setConnectedBody=function(){},i.setEnableCollision=function(t){this._impl.setConstraintFlag(8,t)},i.initialize=function(t){this._com=t,this._rigidBody=t.attachedBody,this.onComponentSet(),this.setEnableCollision(this._com.enableCollision),this._impl.$$&&(C.IMPL_PTR[this._impl.$$.ptr]=this)},i.onComponentSet=function(){},i.updateScale0=function(){},i.updateScale1=function(){},i.onEnable=function(){var t=this._rigidBody.body.sharedBody,i=this._com.connectedBody;if(t.addJoint(this,0),i){var e=i.body.sharedBody;D(this._impl,t.impl,e.impl),e.addJoint(this,1)}else D(this._impl,t.impl,null)},i.onDisable=function(){D(this._impl,t.tempActor,null),this._rigidBody.body.sharedBody.removeJoint(this,0);var i=this.constraint.connectedBody;i&&i.body.sharedBody.removeJoint(this,1)},i.onDestroy=function(){this._impl.$$&&(C.IMPL_PTR[this._impl.$$.ptr]=null,delete C.IMPL_PTR[this._impl.$$.ptr]),this._impl.release(),this._com=null,this._rigidBody=null,this._impl=null},s(t,[{key:"impl",get:function(){return this._impl}},{key:"constraint",get:function(){return this._com}}],[{key:"tempActor",get:function(){if(null==this._tempActor){var t=d.instance.physicsWorld.physics;this._tempActor=t.createRigidDynamic(B)}return this._tempActor}}]),t}();dt._tempActor=void 0;var ut=function(e){function o(){return e.apply(this,arguments)||this}r(o,e);var n=o.prototype;return n.setPivotA=function(){var e=this.constraint,s=A.translation,o=A.rotation;t.multiply(s,e.node.worldScale,e.pivotA),i.copy(o,i.IDENTITY),this._impl.setLocalPose(0,w(s,o)),e.connectedBody||this.setPivotB(e.pivotB)},n.setPivotB=function(){var e=this.constraint,s=e.connectedBody,o=A.translation,n=A.rotation;if(t.copy(o,e.pivotB),i.copy(n,i.IDENTITY),s)t.multiply(o,s.node.worldScale,e.pivotB);else{var r=e.node;t.multiply(o,r.worldScale,e.pivotA),t.add(o,o,r.worldPosition),t.add(o,o,e.pivotB),i.multiply(n,n,r.worldRotation)}this._impl.setLocalPose(1,w(o,n))},n.onComponentSet=function(){this._impl=C.createDistanceJoint(dt.tempActor,B,null,B),this.setPivotA(this.constraint.pivotA),this.setPivotB(this.constraint.pivotB)},n.updateScale0=function(){this.setPivotA(this.constraint.pivotA)},n.updateScale1=function(){this.setPivotB(this.constraint.pivotB)},s(o,[{key:"constraint",get:function(){return this._com}}]),o}(dt),pt=function(e){function o(){return e.apply(this,arguments)||this}r(o,e);var n=o.prototype;return n.setPivotA=function(){var e=this.constraint,s=A.translation,o=A.rotation;t.multiply(s,e.node.worldScale,e.pivotA),i.rotationTo(o,t.UNIT_X,e.axis),this._impl.setLocalPose(0,w(s,o)),e.connectedBody||this.setPivotB(e.pivotB)},n.setPivotB=function(){var e=this.constraint,s=e.connectedBody,o=A.translation,n=A.rotation;if(i.rotationTo(n,t.UNIT_X,e.axis),s)t.multiply(o,s.node.worldScale,e.pivotB);else{var r=e.node;t.multiply(o,r.worldScale,e.pivotA),t.add(o,o,r.worldPosition),t.add(o,o,e.pivotB),i.multiply(n,n,r.worldRotation)}this._impl.setLocalPose(1,w(o,n))},n.setAxis=function(){this.setPivotA(this.constraint.pivotA),this.setPivotB(this.constraint.pivotB)},n.onComponentSet=function(){this._impl=C.createRevoluteJoint(dt.tempActor,B,null,B),this.setPivotA(this.constraint.pivotA),this.setPivotB(this.constraint.pivotB)},n.updateScale0=function(){this.setPivotA(this.constraint.pivotA)},n.updateScale1=function(){this.setPivotB(this.constraint.pivotB)},s(o,[{key:"constraint",get:function(){return this._com}}]),o}(dt);u.select("physx",{PhysicsWorld:Z,RigidBody:it,BoxShape:ot,SphereShape:st,CapsuleShape:nt,TrimeshShape:at,CylinderShape:ct,ConeShape:ht,TerrainShape:lt,PlaneShape:rt,PointToPointConstraint:ut,HingeConstraint:pt})}}}));
