System.register(['./coordinates-converts-utils-fa8f5fc5.js', './index-b656ef93.js', './renderable-component-7d3cd284.js', './find-c704a59e.js', './json-asset-17eaf8ce.js', './transform-utils-c1853224.js', './view-d66ebab1.js', './event-enum-cb046afa.js', './screen-0172c27e.js', './camera-component-4e2374cc.js', './factory-7b08f108.js', './collision-matrix-7aaaf8d8.js', './polygon-separator-c4d2363f.js', './hinge-joint-2d-ed799471.js'], function (exports) {
    'use strict';
    var PolygonSeparator;
    return {
        setters: [function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function (module) {
            PolygonSeparator = module.P;
        }, function (module) {
            var _setter = {};
            _setter.BoxCollider2D = module.B;
            _setter.CircleCollider2D = module.h;
            _setter.Collider2D = module.g;
            _setter.Contact2DType = module.C;
            _setter.DistanceJoint2D = module.D;
            _setter.ECollider2DType = module.a;
            _setter.EJoint2DType = module.b;
            _setter.EPhysics2DDrawFlags = module.d;
            _setter.ERaycast2DType = module.c;
            _setter.ERigidBody2DType = module.E;
            _setter.FixedJoint2D = module.F;
            _setter.HingeJoint2D = module.H;
            _setter.Joint2D = module.J;
            _setter.MouseJoint2D = module.M;
            _setter.PHYSICS_2D_PTM_RATIO = module.P;
            _setter.Physics2DManifoldType = module.f;
            _setter.PhysicsSystem2D = module.e;
            _setter.PolygonCollider2D = module.i;
            _setter.RelativeJoint2D = module.j;
            _setter.RigidBody2D = module.R;
            _setter.SliderJoint2D = module.k;
            _setter.SpringJoint2D = module.S;
            _setter.WheelJoint2D = module.W;
            exports(_setter);
        }],
        execute: function () {

            var Physics2DUtils = exports('Physics2DUtils', {
              PolygonSeparator: PolygonSeparator
            });

        }
    };
});
