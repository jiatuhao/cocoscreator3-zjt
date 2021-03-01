System.register(['./coordinates-converts-utils-66b3c6fc.js', './index-5105ded5.js'], function (exports) {
    'use strict';
    var Vec3, equals;
    return {
        setters: [function (module) {
            Vec3 = module.cx;
            equals = module.cO;
        }, function () {}],
        execute: function () {

            exports({
                a: shrinkPositions,
                g: getWrap,
                m: maxComponent,
                s: setWrap
            });

            function setWrap(object, wrapper) {
              object.__cc_wrapper__ = wrapper;
            }
            function getWrap(object) {
              return object.__cc_wrapper__;
            }
            function maxComponent(v) {
              return Math.max(v.x, Math.max(v.y, v.z));
            }
            var VEC3_0 = exports('V', new Vec3());
            var TriggerEventObject = exports('T', {
              type: 'onTriggerEnter',
              selfCollider: null,
              otherCollider: null,
              impl: null
            });
            var CollisionEventObject = exports('C', {
              type: 'onCollisionEnter',
              selfCollider: null,
              otherCollider: null,
              contacts: [],
              impl: null
            });
            function shrinkPositions(buffer) {
              var pos = [];

              if (buffer.length >= 3) {
                pos[0] = buffer[0], pos[1] = buffer[1], pos[2] = buffer[2];
                var len = buffer.length;

                for (var i = 3; i < len; i += 3) {
                  var p0 = buffer[i];
                  var p1 = buffer[i + 1];
                  var p2 = buffer[i + 2];
                  var len2 = pos.length;
                  var isNew = true;

                  for (var j = 0; j < len2; j += 3) {
                    if (equals(p0, pos[j]) && equals(p1, pos[j + 1]) && equals(p2, pos[j + 2])) {
                      isNew = false;
                      break;
                    }
                  }

                  if (isNew) {
                    pos.push(p0);
                    pos.push(p1);
                    pos.push(p2);
                  }
                }
              }

              return pos;
            }

        }
    };
});
