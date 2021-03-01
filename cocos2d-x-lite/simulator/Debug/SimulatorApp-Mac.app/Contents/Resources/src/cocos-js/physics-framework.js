System.register(['./coordinates-converts-utils-fa8f5fc5.js', './base.js', './index-b656ef93.js', './renderable-component-7d3cd284.js', './find-c704a59e.js', './json-asset-17eaf8ce.js', './texture-buffer-pool-36a70aeb.js', './transform-utils-c1853224.js', './view-d66ebab1.js', './event-enum-cb046afa.js', './screen-0172c27e.js', './camera-component-4e2374cc.js', './factory-7b08f108.js', './mesh-dc73eca6.js', './skeleton-a4f2c933.js', './index-ae85fe5a.js', './collision-matrix-7aaaf8d8.js', './terrain-asset-2a0aabc0.js'], function (exports) {
    'use strict';
    var replaceProperty, removeProperty, legacyCC, js, PhysicsSystem, Collider, Constraint, BoxCollider, SphereCollider, CapsuleCollider, RigidBody, MeshCollider, CylinderCollider, PhysicsMaterial, physics;
    return {
        setters: [function (module) {
            replaceProperty = module.de;
            removeProperty = module.df;
            legacyCC = module.l;
            js = module.eq;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function (module) {
            PhysicsSystem = module.P;
            Collider = module.C;
            Constraint = module.a;
            BoxCollider = module.B;
            SphereCollider = module.S;
            CapsuleCollider = module.b;
            RigidBody = module.R;
            MeshCollider = module.M;
            CylinderCollider = module.c;
            PhysicsMaterial = module.d;
            physics = module.p;
            var _setter = {};
            _setter.BoxCollider = module.B;
            _setter.BoxColliderComponent = module.B;
            _setter.CapsuleCollider = module.b;
            _setter.CapsuleColliderComponent = module.b;
            _setter.Collider = module.C;
            _setter.ColliderComponent = module.C;
            _setter.ConeCollider = module.g;
            _setter.ConstantForce = module.e;
            _setter.Constraint = module.a;
            _setter.CylinderCollider = module.c;
            _setter.CylinderColliderComponent = module.c;
            _setter.HingeConstraint = module.H;
            _setter.MeshCollider = module.M;
            _setter.MeshColliderComponent = module.M;
            _setter.PhysicMaterial = module.d;
            _setter.PhysicsMaterial = module.d;
            _setter.PhysicsRayResult = module.f;
            _setter.PhysicsSystem = module.P;
            _setter.PlaneCollider = module.i;
            _setter.PointToPointConstraint = module.j;
            _setter.RigidBody = module.R;
            _setter.RigidBodyComponent = module.R;
            _setter.SimplexCollider = module.h;
            _setter.SphereCollider = module.S;
            _setter.SphereColliderComponent = module.S;
            _setter.TerrainCollider = module.T;
            _setter.physics = module.p;
            exports(_setter);
        }, function (module) {
            var _setter = {};
            _setter.EAxisDirection = module.E;
            _setter.ERigidBodyType = module.a;
            exports(_setter);
        }, function () {}],
        execute: function () {

            replaceProperty(PhysicsSystem, 'PhysicsSystem', [{
              name: 'ins',
              newName: 'instance'
            }]);
            replaceProperty(PhysicsSystem.prototype, 'PhysicsSystem.prototype', [{
              name: 'deltaTime',
              newName: 'fixedTimeStep'
            }, {
              name: 'maxSubStep',
              newName: 'maxSubSteps'
            }]);
            removeProperty(PhysicsSystem.prototype, 'PhysicsSystem.prototype', [{
              name: 'useFixedTime'
            }, {
              name: 'useCollisionMatrix'
            }, {
              name: 'updateCollisionMatrix'
            }, {
              name: 'resetCollisionMatrix'
            }, {
              name: 'isCollisionGroup'
            }, {
              name: 'setCollisionGroup'
            }]);
            replaceProperty(Collider.prototype, 'Collider.prototype', [{
              name: 'attachedRigidbody',
              newName: 'attachedRigidBody'
            }]);
            replaceProperty(Collider, 'Collider', [{
              name: 'EColliderType',
              newName: 'Type'
            }, {
              name: 'EAxisDirection',
              newName: 'Axis'
            }]);
            replaceProperty(Constraint, 'Constraint', [{
              name: 'EConstraintType',
              newName: 'Type'
            }]);
            replaceProperty(BoxCollider.prototype, 'BoxCollider.prototype', [{
              name: 'boxShape',
              newName: 'shape'
            }]);
            replaceProperty(SphereCollider.prototype, 'SphereCollider.prototype', [{
              name: 'sphereShape',
              newName: 'shape'
            }]);
            replaceProperty(CapsuleCollider.prototype, 'CapsuleCollider.prototype', [{
              name: 'capsuleShape',
              newName: 'shape'
            }]);
            replaceProperty(RigidBody.prototype, 'RigidBody.prototype', [{
              name: 'rigidBody',
              newName: 'body'
            }]);
            replaceProperty(RigidBody, 'RigidBody', [{
              name: 'ERigidBodyType',
              newName: 'Type'
            }]);
            removeProperty(RigidBody.prototype, 'RigidBody.prototype', [{
              name: 'fixedRotation'
            }]);
            legacyCC.RigidBodyComponent = RigidBody;
            js.setClassAlias(RigidBody, 'cc.RigidBodyComponent');
            legacyCC.ColliderComponent = Collider;
            js.setClassAlias(Collider, 'cc.ColliderComponent');
            legacyCC.BoxColliderComponent = BoxCollider;
            js.setClassAlias(BoxCollider, 'cc.BoxColliderComponent');
            legacyCC.SphereColliderComponent = SphereCollider;
            js.setClassAlias(SphereCollider, 'cc.SphereColliderComponent');
            js.setClassAlias(CapsuleCollider, 'cc.CapsuleColliderComponent');
            js.setClassAlias(MeshCollider, 'cc.MeshColliderComponent');
            js.setClassAlias(CylinderCollider, 'cc.CylinderColliderComponent');
            legacyCC.PhysicMaterial = PhysicsMaterial;
            js.setClassAlias(PhysicsMaterial, 'cc.PhysicMaterial');

            legacyCC.physics = physics;

        }
    };
});
