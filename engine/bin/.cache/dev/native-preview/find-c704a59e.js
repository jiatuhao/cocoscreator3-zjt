System.register(['./coordinates-converts-utils-fa8f5fc5.js'], function (exports) {
    'use strict';
    var Vec3, _createClass, NULL_HANDLE, SpherePool, SphereView, Mat4, Mat3, PrimitiveMode, EPSILON, replaceProperty, removeProperty, legacyCC, Vec4, Quat, absMaxComponent, FrustumView, FrustumPool, ccenum, Enum, CCClass, clamp, pingPong, repeat, inverseLerp, _inheritsLoose, warnID;
    return {
        setters: [function (module) {
            Vec3 = module.cx;
            _createClass = module.dS;
            NULL_HANDLE = module.bx;
            SpherePool = module.ch;
            SphereView = module.cg;
            Mat4 = module.cE;
            Mat3 = module.cD;
            PrimitiveMode = module.a7;
            EPSILON = module.cN;
            replaceProperty = module.de;
            removeProperty = module.df;
            legacyCC = module.l;
            Vec4 = module.cz;
            Quat = module.cB;
            absMaxComponent = module.d3;
            FrustumView = module.c4;
            FrustumPool = module.c5;
            ccenum = module.d7;
            Enum = module.d6;
            CCClass = module.dm;
            clamp = module.cQ;
            pingPong = module.d1;
            repeat = module.d0;
            inverseLerp = module.d2;
            _inheritsLoose = module.dR;
            warnID = module.d;
        }],
        execute: function () {

            exports({
                E: void 0,
                W: void 0,
                f: find,
                h: recordFrustumToSharedMemory,
                j: isLerpable,
                m: void 0
            });

            var X = new Vec3();
            var Y = new Vec3();
            var Z = new Vec3();
            var d = new Vec3();
            var min = new Vec3();
            var max = new Vec3();
            var u = new Array(3);
            var e = new Array(3);
            function point_plane(point, plane_) {
              return Vec3.dot(plane_.n, point) - plane_.d;
            }
            function pt_point_plane(out, point, plane_) {
              var t = point_plane(point, plane_);
              return Vec3.subtract(out, point, Vec3.multiplyScalar(out, plane_.n, t));
            }
            function pt_point_aabb(out, point, aabb_) {
              Vec3.copy(out, point);
              Vec3.subtract(min, aabb_.center, aabb_.halfExtents);
              Vec3.add(max, aabb_.center, aabb_.halfExtents);
              out.x = out.x < min.x ? min.x : out.x;
              out.y = out.y < min.y ? min.y : out.y;
              out.z = out.z < min.z ? min.z : out.z;
              out.x = out.x > max.x ? max.x : out.x;
              out.y = out.y > max.y ? max.y : out.y;
              out.z = out.z > max.z ? max.z : out.z;
              return out;
            }
            function pt_point_obb(out, point, obb_) {
              Vec3.set(X, obb_.orientation.m00, obb_.orientation.m01, obb_.orientation.m02);
              Vec3.set(Y, obb_.orientation.m03, obb_.orientation.m04, obb_.orientation.m05);
              Vec3.set(Z, obb_.orientation.m06, obb_.orientation.m07, obb_.orientation.m08);
              u[0] = X;
              u[1] = Y;
              u[2] = Z;
              e[0] = obb_.halfExtents.x;
              e[1] = obb_.halfExtents.y;
              e[2] = obb_.halfExtents.z;
              Vec3.subtract(d, point, obb_.center);
              Vec3.set(out, obb_.center.x, obb_.center.y, obb_.center.z);

              for (var i = 0; i < 3; i++) {
                var dist = Vec3.dot(d, u[i]);

                if (dist > e[i]) {
                  dist = e[i];
                }

                if (dist < -e[i]) {
                  dist = -e[i];
                }

                out.x += dist * u[i].x;
                out.y += dist * u[i].y;
                out.z += dist * u[i].z;
              }

              return out;
            }
            function pt_point_line(out, point, linePointA, linePointB) {
              Vec3.subtract(X, linePointA, linePointB);
              var dir = X;
              var dirSquaredLength = Vec3.lengthSqr(dir);

              if (dirSquaredLength == 0) {
                Vec3.copy(out, linePointA);
              } else {
                Vec3.subtract(X, point, linePointA);
                var t = Vec3.dot(X, dir) / dirSquaredLength;

                if (t < 0) {
                  Vec3.copy(out, linePointA);
                } else if (t > 1) {
                  Vec3.copy(out, linePointB);
                } else {
                  Vec3.scaleAndAdd(out, linePointA, dir, t);
                }
              }
            }

            var distance = /*#__PURE__*/Object.freeze({
                __proto__: null,
                point_plane: point_plane,
                pt_point_plane: pt_point_plane,
                pt_point_aabb: pt_point_aabb,
                pt_point_obb: pt_point_obb,
                pt_point_line: pt_point_line
            });
            exports('d', distance);

            var enums = exports('e', {
              SHAPE_RAY: 1 << 0,
              SHAPE_LINE: 1 << 1,
              SHAPE_SPHERE: 1 << 2,
              SHAPE_AABB: 1 << 3,
              SHAPE_OBB: 1 << 4,
              SHAPE_PLANE: 1 << 5,
              SHAPE_TRIANGLE: 1 << 6,
              SHAPE_FRUSTUM: 1 << 7,
              SHAPE_FRUSTUM_ACCURATE: 1 << 8,
              SHAPE_CAPSULE: 1 << 9
            });

            var Line = exports('L', function () {
              Line.create = function create(sx, sy, sz, ex, ey, ez) {
                return new Line(sx, sy, sz, ex, ey, ez);
              };

              Line.clone = function clone(a) {
                return new Line(a.s.x, a.s.y, a.s.z, a.e.x, a.e.y, a.e.z);
              };

              Line.copy = function copy(out, a) {
                Vec3.copy(out.s, a.s);
                Vec3.copy(out.e, a.e);
                return out;
              };

              Line.fromPoints = function fromPoints(out, start, end) {
                Vec3.copy(out.s, start);
                Vec3.copy(out.e, end);
                return out;
              };

              Line.set = function set(out, sx, sy, sz, ex, ey, ez) {
                out.s.x = sx;
                out.s.y = sy;
                out.s.z = sz;
                out.e.x = ex;
                out.e.y = ey;
                out.e.z = ez;
                return out;
              };

              Line.len = function len(a) {
                return Vec3.distance(a.s, a.e);
              };

              _createClass(Line, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function Line(sx, sy, sz, ex, ey, ez) {
                if (sx === void 0) {
                  sx = 0;
                }

                if (sy === void 0) {
                  sy = 0;
                }

                if (sz === void 0) {
                  sz = 0;
                }

                if (ex === void 0) {
                  ex = 0;
                }

                if (ey === void 0) {
                  ey = 0;
                }

                if (ez === void 0) {
                  ez = -1;
                }

                this.s = void 0;
                this.e = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_LINE;
                this.s = new Vec3(sx, sy, sz);
                this.e = new Vec3(ex, ey, ez);
              }

              var _proto = Line.prototype;

              _proto.length = function length() {
                return Vec3.distance(this.s, this.e);
              };

              return Line;
            }());

            var Ray = exports('R', function () {
              Ray.create = function create(ox, oy, oz, dx, dy, dz) {
                if (ox === void 0) {
                  ox = 0;
                }

                if (oy === void 0) {
                  oy = 0;
                }

                if (oz === void 0) {
                  oz = 0;
                }

                if (dx === void 0) {
                  dx = 0;
                }

                if (dy === void 0) {
                  dy = 0;
                }

                if (dz === void 0) {
                  dz = 1;
                }

                return new Ray(ox, oy, oz, dx, dy, dz);
              };

              Ray.clone = function clone(a) {
                return new Ray(a.o.x, a.o.y, a.o.z, a.d.x, a.d.y, a.d.z);
              };

              Ray.copy = function copy(out, a) {
                Vec3.copy(out.o, a.o);
                Vec3.copy(out.d, a.d);
                return out;
              };

              Ray.fromPoints = function fromPoints(out, origin, target) {
                Vec3.copy(out.o, origin);
                Vec3.normalize(out.d, Vec3.subtract(out.d, target, origin));
                return out;
              };

              Ray.set = function set(out, ox, oy, oz, dx, dy, dz) {
                out.o.x = ox;
                out.o.y = oy;
                out.o.z = oz;
                out.d.x = dx;
                out.d.y = dy;
                out.d.z = dz;
                return out;
              };

              _createClass(Ray, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function Ray(ox, oy, oz, dx, dy, dz) {
                if (ox === void 0) {
                  ox = 0;
                }

                if (oy === void 0) {
                  oy = 0;
                }

                if (oz === void 0) {
                  oz = 0;
                }

                if (dx === void 0) {
                  dx = 0;
                }

                if (dy === void 0) {
                  dy = 0;
                }

                if (dz === void 0) {
                  dz = -1;
                }

                this.o = void 0;
                this.d = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_RAY;
                this.o = new Vec3(ox, oy, oz);
                this.d = new Vec3(dx, dy, dz);
              }

              var _proto = Ray.prototype;

              _proto.computeHit = function computeHit(out, distance) {
                Vec3.normalize(out, this.d);
                Vec3.scaleAndAdd(out, this.o, out, distance);
              };

              return Ray;
            }());

            var _v3_tmp = new Vec3();

            var _offset = new Vec3();

            var _min = new Vec3();

            var _max = new Vec3();

            function maxComponent(v) {
              return Math.max(Math.max(v.x, v.y), v.z);
            }

            var Sphere = exports('S', function () {
              Sphere.create = function create(cx, cy, cz, r) {
                return new Sphere(cx, cy, cz, r);
              };

              Sphere.clone = function clone(p) {
                return new Sphere(p.center.x, p.center.y, p.center.z, p.radius);
              };

              Sphere.copy = function copy(out, p) {
                Vec3.copy(out.center, p.center);
                out.radius = p.radius;
                return out;
              };

              Sphere.fromPoints = function fromPoints(out, minPos, maxPos) {
                Vec3.multiplyScalar(out.center, Vec3.add(_v3_tmp, minPos, maxPos), 0.5);
                out.radius = Vec3.subtract(_v3_tmp, maxPos, minPos).length() * 0.5;
                return out;
              };

              Sphere.set = function set(out, cx, cy, cz, r) {
                out.center.x = cx;
                out.center.y = cy;
                out.center.z = cz;
                out.radius = r;
                return out;
              };

              Sphere.mergePoint = function mergePoint(out, s, point) {
                if (s.radius < 0.0) {
                  out.center.set(point);
                  out.radius = 0.0;
                  return out;
                }

                Vec3.subtract(_offset, point, s.center);

                var dist = _offset.length();

                if (dist > s.radius) {
                  var half = (dist - s.radius) * 0.5;
                  out.radius += half;
                  Vec3.multiplyScalar(_offset, _offset, half / dist);
                  Vec3.add(out.center, out.center, _offset);
                }

                return out;
              };

              Sphere.mergeAABB = function mergeAABB(out, s, a) {
                a.getBoundary(_min, _max);
                Sphere.mergePoint(out, s, _min);
                Sphere.mergePoint(out, s, _max);
                return out;
              };

              _createClass(Sphere, [{
                key: "center",
                get: function get() {
                  return this._center;
                },
                set: function set(val) {
                  this._center = val;
                  SpherePool.setVec3(this._poolHandle, SphereView.CENTER, this._center);
                }
              }, {
                key: "radius",
                get: function get() {
                  return SpherePool.get(this._poolHandle, SphereView.RADIUS);
                },
                set: function set(val) {
                  SpherePool.set(this._poolHandle, SphereView.RADIUS, val);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._poolHandle;
                }
              }, {
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function Sphere(cx, cy, cz, r) {
                if (cx === void 0) {
                  cx = 0;
                }

                if (cy === void 0) {
                  cy = 0;
                }

                if (cz === void 0) {
                  cz = 0;
                }

                if (r === void 0) {
                  r = 1;
                }

                this._center = new Vec3(0, 0, 0);
                this._poolHandle = NULL_HANDLE;
                this._type = void 0;
                this._type = enums.SHAPE_SPHERE;
                this._center = new Vec3(cx, cy, cz);
                this._poolHandle = SpherePool.alloc();
                SpherePool.setVec3(this._poolHandle, SphereView.CENTER, this._center);
                SpherePool.set(this._poolHandle, SphereView.RADIUS, r);
              }

              var _proto = Sphere.prototype;

              _proto.destroy = function destroy() {
                if (this._poolHandle) {
                  SpherePool.free(this._poolHandle);
                  this._poolHandle = NULL_HANDLE;
                }
              };

              _proto.clone = function clone() {
                return Sphere.clone(this);
              };

              _proto.copy = function copy(a) {
                return Sphere.copy(this, a);
              };

              _proto.getBoundary = function getBoundary(minPos, maxPos) {
                Vec3.set(minPos, this.center.x - this.radius, this.center.y - this.radius, this.center.z - this.radius);
                Vec3.set(maxPos, this.center.x + this.radius, this.center.y + this.radius, this.center.z + this.radius);
              };

              _proto.transform = function transform(m, pos, rot, scale, out) {
                Vec3.transformMat4(out.center, this.center, m);
                out.radius = this.radius * maxComponent(scale);
              };

              _proto.translateAndRotate = function translateAndRotate(m, rot, out) {
                Vec3.transformMat4(out.center, this.center, m);
              };

              _proto.setScale = function setScale(scale, out) {
                out.radius = this.radius * maxComponent(scale);
              };

              return Sphere;
            }());

            var Triangle = exports('T', function () {
              Triangle.create = function create(ax, ay, az, bx, by, bz, cx, cy, cz) {
                if (ax === void 0) {
                  ax = 1;
                }

                if (ay === void 0) {
                  ay = 0;
                }

                if (az === void 0) {
                  az = 0;
                }

                if (bx === void 0) {
                  bx = 0;
                }

                if (by === void 0) {
                  by = 0;
                }

                if (bz === void 0) {
                  bz = 0;
                }

                if (cx === void 0) {
                  cx = 0;
                }

                if (cy === void 0) {
                  cy = 0;
                }

                if (cz === void 0) {
                  cz = 1;
                }

                return new Triangle(ax, ay, az, bx, by, bz, cx, cy, cz);
              };

              Triangle.clone = function clone(t) {
                return new Triangle(t.a.x, t.a.y, t.a.z, t.b.x, t.b.y, t.b.z, t.c.x, t.c.y, t.c.z);
              };

              Triangle.copy = function copy(out, t) {
                Vec3.copy(out.a, t.a);
                Vec3.copy(out.b, t.b);
                Vec3.copy(out.c, t.c);
                return out;
              };

              Triangle.fromPoints = function fromPoints(out, a, b, c) {
                Vec3.copy(out.a, a);
                Vec3.copy(out.b, b);
                Vec3.copy(out.c, c);
                return out;
              };

              Triangle.set = function set(out, ax, ay, az, bx, by, bz, cx, cy, cz) {
                out.a.x = ax;
                out.a.y = ay;
                out.a.z = az;
                out.b.x = bx;
                out.b.y = by;
                out.b.z = bz;
                out.c.x = cx;
                out.c.y = cy;
                out.c.z = cz;
                return out;
              };

              _createClass(Triangle, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function Triangle(ax, ay, az, bx, by, bz, cx, cy, cz) {
                if (ax === void 0) {
                  ax = 0;
                }

                if (ay === void 0) {
                  ay = 0;
                }

                if (az === void 0) {
                  az = 0;
                }

                if (bx === void 0) {
                  bx = 1;
                }

                if (by === void 0) {
                  by = 0;
                }

                if (bz === void 0) {
                  bz = 0;
                }

                if (cx === void 0) {
                  cx = 0;
                }

                if (cy === void 0) {
                  cy = 1;
                }

                if (cz === void 0) {
                  cz = 0;
                }

                this.a = void 0;
                this.b = void 0;
                this.c = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_TRIANGLE;
                this.a = new Vec3(ax, ay, az);
                this.b = new Vec3(bx, by, bz);
                this.c = new Vec3(cx, cy, cz);
              }

              return Triangle;
            }());

            var ERaycastMode;

            (function (ERaycastMode) {
              ERaycastMode[ERaycastMode["ALL"] = 0] = "ALL";
              ERaycastMode[ERaycastMode["CLOSEST"] = 1] = "CLOSEST";
              ERaycastMode[ERaycastMode["ANY"] = 2] = "ANY";
            })(ERaycastMode || (ERaycastMode = exports('E', {})));

            var rayPlane = function () {
              var pt = new Vec3(0, 0, 0);
              return function (ray, plane) {
                var denom = Vec3.dot(ray.d, plane.n);

                if (Math.abs(denom) < Number.EPSILON) {
                  return 0;
                }

                Vec3.multiplyScalar(pt, plane.n, plane.d);
                var t = Vec3.dot(Vec3.subtract(pt, pt, ray.o), plane.n) / denom;

                if (t < 0) {
                  return 0;
                }

                return t;
              };
            }();

            var rayTriangle = function () {
              var ab = new Vec3(0, 0, 0);
              var ac = new Vec3(0, 0, 0);
              var pvec = new Vec3(0, 0, 0);
              var tvec = new Vec3(0, 0, 0);
              var qvec = new Vec3(0, 0, 0);
              return function (ray, triangle, doubleSided) {
                Vec3.subtract(ab, triangle.b, triangle.a);
                Vec3.subtract(ac, triangle.c, triangle.a);
                Vec3.cross(pvec, ray.d, ac);
                var det = Vec3.dot(ab, pvec);

                if (det < Number.EPSILON && (!doubleSided || det > -Number.EPSILON)) {
                  return 0;
                }

                var inv_det = 1 / det;
                Vec3.subtract(tvec, ray.o, triangle.a);
                var u = Vec3.dot(tvec, pvec) * inv_det;

                if (u < 0 || u > 1) {
                  return 0;
                }

                Vec3.cross(qvec, tvec, ab);
                var v = Vec3.dot(ray.d, qvec) * inv_det;

                if (v < 0 || u + v > 1) {
                  return 0;
                }

                var t = Vec3.dot(ac, qvec) * inv_det;
                return t < 0 ? 0 : t;
              };
            }();

            var raySphere = function () {
              var e = new Vec3(0, 0, 0);
              return function (ray, sphere) {
                var r = sphere.radius;
                var c = sphere.center;
                var o = ray.o;
                var d = ray.d;
                var rSq = r * r;
                Vec3.subtract(e, c, o);
                var eSq = e.lengthSqr();
                var aLength = Vec3.dot(e, d);
                var fSq = rSq - (eSq - aLength * aLength);

                if (fSq < 0) {
                  return 0;
                }

                var f = Math.sqrt(fSq);
                var t = eSq < rSq ? aLength + f : aLength - f;

                if (t < 0) {
                  return 0;
                }

                return t;
              };
            }();

            var rayAABB = function () {
              var min = new Vec3();
              var max = new Vec3();
              return function (ray, aabb) {
                Vec3.subtract(min, aabb.center, aabb.halfExtents);
                Vec3.add(max, aabb.center, aabb.halfExtents);
                return rayAABB2(ray, min, max);
              };
            }();

            function rayAABB2(ray, min, max) {
              var o = ray.o;
              var d = ray.d;
              var ix = 1 / d.x;
              var iy = 1 / d.y;
              var iz = 1 / d.z;
              var t1 = (min.x - o.x) * ix;
              var t2 = (max.x - o.x) * ix;
              var t3 = (min.y - o.y) * iy;
              var t4 = (max.y - o.y) * iy;
              var t5 = (min.z - o.z) * iz;
              var t6 = (max.z - o.z) * iz;
              var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
              var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));

              if (tmax < 0 || tmin > tmax) {
                return 0;
              }

              return tmin > 0 ? tmin : tmax;
            }

            var rayOBB = function () {
              var center = new Vec3();
              var o = new Vec3();
              var d = new Vec3();
              var X = new Vec3();
              var Y = new Vec3();
              var Z = new Vec3();
              var p = new Vec3();
              var size = new Array(3);
              var f = new Array(3);
              var e = new Array(3);
              var t = new Array(6);
              return function (ray, obb) {
                size[0] = obb.halfExtents.x;
                size[1] = obb.halfExtents.y;
                size[2] = obb.halfExtents.z;
                center = obb.center;
                o = ray.o;
                d = ray.d;
                Vec3.set(X, obb.orientation.m00, obb.orientation.m01, obb.orientation.m02);
                Vec3.set(Y, obb.orientation.m03, obb.orientation.m04, obb.orientation.m05);
                Vec3.set(Z, obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);
                Vec3.subtract(p, center, o);
                f[0] = Vec3.dot(X, d);
                f[1] = Vec3.dot(Y, d);
                f[2] = Vec3.dot(Z, d);
                e[0] = Vec3.dot(X, p);
                e[1] = Vec3.dot(Y, p);
                e[2] = Vec3.dot(Z, p);

                for (var i = 0; i < 3; ++i) {
                  if (f[i] === 0) {
                    if (-e[i] - size[i] > 0 || -e[i] + size[i] < 0) {
                      return 0;
                    }

                    f[i] = 0.0000001;
                  }

                  t[i * 2 + 0] = (e[i] + size[i]) / f[i];
                  t[i * 2 + 1] = (e[i] - size[i]) / f[i];
                }

                var tmin = Math.max(Math.max(Math.min(t[0], t[1]), Math.min(t[2], t[3])), Math.min(t[4], t[5]));
                var tmax = Math.min(Math.min(Math.max(t[0], t[1]), Math.max(t[2], t[3])), Math.max(t[4], t[5]));

                if (tmax < 0 || tmin > tmax) {
                  return 0;
                }

                return tmin > 0 ? tmin : tmax;
              };
            }();

            var rayCapsule = function () {
              var v3_0 = new Vec3();
              var v3_1 = new Vec3();
              var v3_2 = new Vec3();
              var v3_3 = new Vec3();
              var v3_4 = new Vec3();
              var v3_5 = new Vec3();
              var v3_6 = new Vec3();
              var sphere_0 = new Sphere();
              return function (ray, capsule) {
                var radiusSqr = capsule.radius * capsule.radius;
                var vRayNorm = Vec3.normalize(v3_0, ray.d);
                var A = capsule.ellipseCenter0;
                var B = capsule.ellipseCenter1;
                var BA = Vec3.subtract(v3_1, B, A);

                if (BA.equals(Vec3.ZERO)) {
                  sphere_0.radius = capsule.radius;
                  sphere_0.center.set(capsule.ellipseCenter0);
                  return intersect.raySphere(ray, sphere_0);
                }

                var O = ray.o;
                var OA = Vec3.subtract(v3_2, O, A);
                var VxBA = Vec3.cross(v3_3, vRayNorm, BA);
                var a = VxBA.lengthSqr();

                if (a === 0) {
                  sphere_0.radius = capsule.radius;
                  var BO = Vec3.subtract(v3_4, B, O);

                  if (OA.lengthSqr() < BO.lengthSqr()) {
                    sphere_0.center.set(capsule.ellipseCenter0);
                  } else {
                    sphere_0.center.set(capsule.ellipseCenter1);
                  }

                  return intersect.raySphere(ray, sphere_0);
                }

                var OAxBA = Vec3.cross(v3_4, OA, BA);
                var ab2 = BA.lengthSqr();
                var b = 2 * Vec3.dot(VxBA, OAxBA);
                var c = OAxBA.lengthSqr() - radiusSqr * ab2;
                var d = b * b - 4 * a * c;

                if (d < 0) {
                  return 0;
                }

                var t = (-b - Math.sqrt(d)) / (2 * a);

                if (t < 0) {
                  sphere_0.radius = capsule.radius;

                  var _BO = Vec3.subtract(v3_5, B, O);

                  if (OA.lengthSqr() < _BO.lengthSqr()) {
                    sphere_0.center.set(capsule.ellipseCenter0);
                  } else {
                    sphere_0.center.set(capsule.ellipseCenter1);
                  }

                  return intersect.raySphere(ray, sphere_0);
                } else {
                  var iPos = Vec3.scaleAndAdd(v3_5, ray.o, vRayNorm, t);
                  var iPosLen = Vec3.subtract(v3_6, iPos, A);
                  var tLimit = Vec3.dot(iPosLen, BA) / ab2;

                  if (tLimit >= 0 && tLimit <= 1) {
                    return t;
                  } else if (tLimit < 0) {
                    sphere_0.radius = capsule.radius;
                    sphere_0.center.set(capsule.ellipseCenter0);
                    return intersect.raySphere(ray, sphere_0);
                  } else if (tLimit > 1) {
                    sphere_0.radius = capsule.radius;
                    sphere_0.center.set(capsule.ellipseCenter1);
                    return intersect.raySphere(ray, sphere_0);
                  } else {
                    return 0;
                  }
                }
              };
            }();

            var raySubMesh = function () {
              var tri = Triangle.create();
              var deOpt = {
                distance: Infinity,
                doubleSided: false,
                mode: ERaycastMode.ANY
              };
              var minDis = 0;

              var fillResult = function fillResult(m, d, i0, i1, i2, r) {
                if (m === ERaycastMode.CLOSEST) {
                  if (minDis > d || minDis === 0) {
                    minDis = d;

                    if (r) {
                      if (r.length === 0) {
                        r.push({
                          distance: d,
                          vertexIndex0: i0 / 3,
                          vertexIndex1: i1 / 3,
                          vertexIndex2: i2 / 3
                        });
                      } else {
                        r[0].distance = d;
                        r[0].vertexIndex0 = i0 / 3;
                        r[0].vertexIndex1 = i1 / 3;
                        r[0].vertexIndex2 = i2 / 3;
                      }
                    }
                  }
                } else {
                  minDis = d;
                  if (r) r.push({
                    distance: d,
                    vertexIndex0: i0 / 3,
                    vertexIndex1: i1 / 3,
                    vertexIndex2: i2 / 3
                  });
                }
              };

              var narrowphase = function narrowphase(vb, ib, pm, ray, opt) {
                if (pm === PrimitiveMode.TRIANGLE_LIST) {
                  var cnt = ib.length;

                  for (var j = 0; j < cnt; j += 3) {
                    var i0 = ib[j] * 3;
                    var i1 = ib[j + 1] * 3;
                    var i2 = ib[j + 2] * 3;
                    Vec3.set(tri.a, vb[i0], vb[i0 + 1], vb[i0 + 2]);
                    Vec3.set(tri.b, vb[i1], vb[i1 + 1], vb[i1 + 2]);
                    Vec3.set(tri.c, vb[i2], vb[i2 + 1], vb[i2 + 2]);
                    var dist = intersect.rayTriangle(ray, tri, opt.doubleSided);
                    if (dist === 0 || dist > opt.distance) continue;
                    fillResult(opt.mode, dist, i0, i1, i2, opt.result);
                    if (opt.mode === ERaycastMode.ANY) return dist;
                  }
                } else if (pm === PrimitiveMode.TRIANGLE_STRIP) {
                  var _cnt = ib.length - 2;

                  var rev = 0;

                  for (var _j = 0; _j < _cnt; _j += 1) {
                    var _i = ib[_j - rev] * 3;

                    var _i2 = ib[_j + rev + 1] * 3;

                    var _i3 = ib[_j + 2] * 3;

                    Vec3.set(tri.a, vb[_i], vb[_i + 1], vb[_i + 2]);
                    Vec3.set(tri.b, vb[_i2], vb[_i2 + 1], vb[_i2 + 2]);
                    Vec3.set(tri.c, vb[_i3], vb[_i3 + 1], vb[_i3 + 2]);
                    rev = ~rev;

                    var _dist = intersect.rayTriangle(ray, tri, opt.doubleSided);

                    if (_dist === 0 || _dist > opt.distance) continue;
                    fillResult(opt.mode, _dist, _i, _i2, _i3, opt.result);
                    if (opt.mode === ERaycastMode.ANY) return _dist;
                  }
                } else if (pm === PrimitiveMode.TRIANGLE_FAN) {
                  var _cnt2 = ib.length - 1;

                  var _i4 = ib[0] * 3;

                  Vec3.set(tri.a, vb[_i4], vb[_i4 + 1], vb[_i4 + 2]);

                  for (var _j2 = 1; _j2 < _cnt2; _j2 += 1) {
                    var _i5 = ib[_j2] * 3;

                    var _i6 = ib[_j2 + 1] * 3;

                    Vec3.set(tri.b, vb[_i5], vb[_i5 + 1], vb[_i5 + 2]);
                    Vec3.set(tri.c, vb[_i6], vb[_i6 + 1], vb[_i6 + 2]);

                    var _dist2 = intersect.rayTriangle(ray, tri, opt.doubleSided);

                    if (_dist2 === 0 || _dist2 > opt.distance) continue;
                    fillResult(opt.mode, _dist2, _i4, _i5, _i6, opt.result);
                    if (opt.mode === ERaycastMode.ANY) return _dist2;
                  }
                }

                return minDis;
              };

              return function (ray, submesh, options) {
                minDis = 0;
                if (submesh.geometricInfo.positions.length === 0) return minDis;
                var opt = options === undefined ? deOpt : options;
                var min = submesh.geometricInfo.boundingBox.min;
                var max = submesh.geometricInfo.boundingBox.max;

                if (rayAABB2(ray, min, max)) {
                  var pm = submesh.primitiveMode;
                  var _submesh$geometricInf = submesh.geometricInfo,
                      vb = _submesh$geometricInf.positions,
                      ib = _submesh$geometricInf.indices;
                  narrowphase(vb, ib, pm, ray, opt);
                }

                return minDis;
              };
            }();

            var rayMesh = function () {
              var minDis = 0;
              var deOpt = {
                distance: Infinity,
                doubleSided: false,
                mode: ERaycastMode.ANY
              };
              return function (ray, mesh, options) {
                minDis = 0;
                var opt = options === undefined ? deOpt : options;
                var length = mesh.renderingSubMeshes.length;
                var min = mesh.struct.minPosition;
                var max = mesh.struct.maxPosition;
                if (min && max && !rayAABB2(ray, min, max)) return minDis;

                for (var i = 0; i < length; i++) {
                  var sm = mesh.renderingSubMeshes[i];
                  var dis = raySubMesh(ray, sm, opt);

                  if (dis) {
                    if (opt.mode === ERaycastMode.CLOSEST) {
                      if (minDis === 0 || minDis > dis) {
                        minDis = dis;
                        if (opt.subIndices) opt.subIndices[0] = i;
                      }
                    } else {
                      minDis = dis;
                      if (opt.subIndices) opt.subIndices.push(i);

                      if (opt.mode === ERaycastMode.ANY) {
                        return dis;
                      }
                    }
                  }
                }

                if (minDis && opt.mode === ERaycastMode.CLOSEST) {
                  if (opt.result) {
                    opt.result[0].distance = minDis;
                    opt.result.length = 1;
                  }

                  if (opt.subIndices) opt.subIndices.length = 1;
                }

                return minDis;
              };
            }();

            var rayModel = function () {
              var minDis = 0;
              var deOpt = {
                distance: Infinity,
                doubleSided: false,
                mode: ERaycastMode.ANY
              };
              var modelRay = new Ray();
              var m4 = new Mat4();
              return function (r, model, options) {
                minDis = 0;
                var opt = options === undefined ? deOpt : options;
                var wb = model.worldBounds;
                if (wb && !rayAABB(r, wb)) return minDis;
                Ray.copy(modelRay, r);

                if (model.node) {
                  Mat4.invert(m4, model.node.getWorldMatrix(m4));
                  Vec3.transformMat4(modelRay.o, r.o, m4);
                  Vec3.transformMat4Normal(modelRay.d, r.d, m4);
                }

                var subModels = model.subModels;

                for (var i = 0; i < subModels.length; i++) {
                  var subMesh = subModels[i].subMesh;
                  var dis = raySubMesh(modelRay, subMesh, opt);

                  if (dis) {
                    if (opt.mode === ERaycastMode.CLOSEST) {
                      if (minDis === 0 || minDis > dis) {
                        minDis = dis;
                        if (opt.subIndices) opt.subIndices[0] = i;
                      }
                    } else {
                      minDis = dis;
                      if (opt.subIndices) opt.subIndices.push(i);

                      if (opt.mode === ERaycastMode.ANY) {
                        return dis;
                      }
                    }
                  }
                }

                if (minDis && opt.mode === ERaycastMode.CLOSEST) {
                  if (opt.result) {
                    opt.result[0].distance = minDis;
                    opt.result.length = 1;
                  }

                  if (opt.subIndices) opt.subIndices.length = 1;
                }

                return minDis;
              };
            }();

            var linePlane = function () {
              var ab = new Vec3(0, 0, 0);
              return function (line, plane) {
                Vec3.subtract(ab, line.e, line.s);
                var t = (plane.d - Vec3.dot(line.s, plane.n)) / Vec3.dot(ab, plane.n);

                if (t < 0 || t > 1) {
                  return 0;
                }

                return t;
              };
            }();

            var lineTriangle = function () {
              var ab = new Vec3(0, 0, 0);
              var ac = new Vec3(0, 0, 0);
              var qp = new Vec3(0, 0, 0);
              var ap = new Vec3(0, 0, 0);
              var n = new Vec3(0, 0, 0);
              var e = new Vec3(0, 0, 0);
              return function (line, triangle, outPt) {
                Vec3.subtract(ab, triangle.b, triangle.a);
                Vec3.subtract(ac, triangle.c, triangle.a);
                Vec3.subtract(qp, line.s, line.e);
                Vec3.cross(n, ab, ac);
                var det = Vec3.dot(qp, n);

                if (det <= 0.0) {
                  return 0;
                }

                Vec3.subtract(ap, line.s, triangle.a);
                var t = Vec3.dot(ap, n);

                if (t < 0 || t > det) {
                  return 0;
                }

                Vec3.cross(e, qp, ap);
                var v = Vec3.dot(ac, e);

                if (v < 0 || v > det) {
                  return 0;
                }

                var w = -Vec3.dot(ab, e);

                if (w < 0.0 || v + w > det) {
                  return 0;
                }

                if (outPt) {
                  var invDet = 1.0 / det;
                  v *= invDet;
                  w *= invDet;
                  var u = 1.0 - v - w;
                  Vec3.set(outPt, triangle.a.x * u + triangle.b.x * v + triangle.c.x * w, triangle.a.y * u + triangle.b.y * v + triangle.c.y * w, triangle.a.z * u + triangle.b.z * v + triangle.c.z * w);
                }

                return 1;
              };
            }();

            var r_t = new Ray();

            function lineAABB(line, aabb) {
              r_t.o.set(line.s);
              Vec3.subtract(r_t.d, line.e, line.s);
              r_t.d.normalize();
              var min = rayAABB(r_t, aabb);
              var len = line.length();

              if (min <= len) {
                return min;
              } else {
                return 0;
              }
            }

            function lineOBB(line, obb) {
              r_t.o.set(line.s);
              Vec3.subtract(r_t.d, line.e, line.s);
              r_t.d.normalize();
              var min = rayOBB(r_t, obb);
              var len = line.length();

              if (min <= len) {
                return min;
              } else {
                return 0;
              }
            }

            function lineSphere(line, sphere) {
              r_t.o.set(line.s);
              Vec3.subtract(r_t.d, line.e, line.s);
              r_t.d.normalize();
              var min = raySphere(r_t, sphere);
              var len = line.length();

              if (min <= len) {
                return min;
              } else {
                return 0;
              }
            }

            var aabbWithAABB = function () {
              var aMin = new Vec3();
              var aMax = new Vec3();
              var bMin = new Vec3();
              var bMax = new Vec3();
              return function (aabb1, aabb2) {
                Vec3.subtract(aMin, aabb1.center, aabb1.halfExtents);
                Vec3.add(aMax, aabb1.center, aabb1.halfExtents);
                Vec3.subtract(bMin, aabb2.center, aabb2.halfExtents);
                Vec3.add(bMax, aabb2.center, aabb2.halfExtents);
                return aMin.x <= bMax.x && aMax.x >= bMin.x && aMin.y <= bMax.y && aMax.y >= bMin.y && aMin.z <= bMax.z && aMax.z >= bMin.z;
              };
            }();

            function getAABBVertices(min, max, out) {
              Vec3.set(out[0], min.x, max.y, max.z);
              Vec3.set(out[1], min.x, max.y, min.z);
              Vec3.set(out[2], min.x, min.y, max.z);
              Vec3.set(out[3], min.x, min.y, min.z);
              Vec3.set(out[4], max.x, max.y, max.z);
              Vec3.set(out[5], max.x, max.y, min.z);
              Vec3.set(out[6], max.x, min.y, max.z);
              Vec3.set(out[7], max.x, min.y, min.z);
            }

            function getOBBVertices(c, e, a1, a2, a3, out) {
              Vec3.set(out[0], c.x + a1.x * e.x + a2.x * e.y + a3.x * e.z, c.y + a1.y * e.x + a2.y * e.y + a3.y * e.z, c.z + a1.z * e.x + a2.z * e.y + a3.z * e.z);
              Vec3.set(out[1], c.x - a1.x * e.x + a2.x * e.y + a3.x * e.z, c.y - a1.y * e.x + a2.y * e.y + a3.y * e.z, c.z - a1.z * e.x + a2.z * e.y + a3.z * e.z);
              Vec3.set(out[2], c.x + a1.x * e.x - a2.x * e.y + a3.x * e.z, c.y + a1.y * e.x - a2.y * e.y + a3.y * e.z, c.z + a1.z * e.x - a2.z * e.y + a3.z * e.z);
              Vec3.set(out[3], c.x + a1.x * e.x + a2.x * e.y - a3.x * e.z, c.y + a1.y * e.x + a2.y * e.y - a3.y * e.z, c.z + a1.z * e.x + a2.z * e.y - a3.z * e.z);
              Vec3.set(out[4], c.x - a1.x * e.x - a2.x * e.y - a3.x * e.z, c.y - a1.y * e.x - a2.y * e.y - a3.y * e.z, c.z - a1.z * e.x - a2.z * e.y - a3.z * e.z);
              Vec3.set(out[5], c.x + a1.x * e.x - a2.x * e.y - a3.x * e.z, c.y + a1.y * e.x - a2.y * e.y - a3.y * e.z, c.z + a1.z * e.x - a2.z * e.y - a3.z * e.z);
              Vec3.set(out[6], c.x - a1.x * e.x + a2.x * e.y - a3.x * e.z, c.y - a1.y * e.x + a2.y * e.y - a3.y * e.z, c.z - a1.z * e.x + a2.z * e.y - a3.z * e.z);
              Vec3.set(out[7], c.x - a1.x * e.x - a2.x * e.y + a3.x * e.z, c.y - a1.y * e.x - a2.y * e.y + a3.y * e.z, c.z - a1.z * e.x - a2.z * e.y + a3.z * e.z);
            }

            function getInterval(vertices, axis) {
              var min = Vec3.dot(axis, vertices[0]);
              var max = min;

              for (var i = 1; i < 8; ++i) {
                var projection = Vec3.dot(axis, vertices[i]);
                min = projection < min ? projection : min;
                max = projection > max ? projection : max;
              }

              return [min, max];
            }

            var aabbWithOBB = function () {
              var test = new Array(15);

              for (var i = 0; i < 15; i++) {
                test[i] = new Vec3(0, 0, 0);
              }

              var vertices = new Array(8);
              var vertices2 = new Array(8);

              for (var _i7 = 0; _i7 < 8; _i7++) {
                vertices[_i7] = new Vec3(0, 0, 0);
                vertices2[_i7] = new Vec3(0, 0, 0);
              }

              var min = new Vec3();
              var max = new Vec3();
              return function (aabb, obb) {
                Vec3.set(test[0], 1, 0, 0);
                Vec3.set(test[1], 0, 1, 0);
                Vec3.set(test[2], 0, 0, 1);
                Vec3.set(test[3], obb.orientation.m00, obb.orientation.m01, obb.orientation.m02);
                Vec3.set(test[4], obb.orientation.m03, obb.orientation.m04, obb.orientation.m05);
                Vec3.set(test[5], obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);

                for (var _i8 = 0; _i8 < 3; ++_i8) {
                  Vec3.cross(test[6 + _i8 * 3 + 0], test[_i8], test[0]);
                  Vec3.cross(test[6 + _i8 * 3 + 1], test[_i8], test[1]);
                  Vec3.cross(test[6 + _i8 * 3 + 1], test[_i8], test[2]);
                }

                Vec3.subtract(min, aabb.center, aabb.halfExtents);
                Vec3.add(max, aabb.center, aabb.halfExtents);
                getAABBVertices(min, max, vertices);
                getOBBVertices(obb.center, obb.halfExtents, test[3], test[4], test[5], vertices2);

                for (var j = 0; j < 15; ++j) {
                  var a = getInterval(vertices, test[j]);
                  var b = getInterval(vertices2, test[j]);

                  if (b[0] > a[1] || a[0] > b[1]) {
                    return 0;
                  }
                }

                return 1;
              };
            }();

            var aabbPlane = function aabbPlane(aabb, plane) {
              var r = aabb.halfExtents.x * Math.abs(plane.n.x) + aabb.halfExtents.y * Math.abs(plane.n.y) + aabb.halfExtents.z * Math.abs(plane.n.z);
              var dot = Vec3.dot(plane.n, aabb.center);

              if (dot + r < plane.d) {
                return -1;
              } else if (dot - r > plane.d) {
                return 0;
              }

              return 1;
            };

            var aabbFrustum = function aabbFrustum(aabb, frustum) {
              for (var i = 0; i < frustum.planes.length; i++) {
                if (aabbPlane(aabb, frustum.planes[i]) === -1) {
                  return 0;
                }
              }

              return 1;
            };

            var aabbFrustumAccurate = function () {
              var tmp = new Array(8);
              var out1 = 0;
              var out2 = 0;

              for (var i = 0; i < tmp.length; i++) {
                tmp[i] = new Vec3(0, 0, 0);
              }

              return function (aabb, frustum) {
                var result = 0;
                var intersects = false;

                for (var _i9 = 0; _i9 < frustum.planes.length; _i9++) {
                  result = aabbPlane(aabb, frustum.planes[_i9]);

                  if (result === -1) {
                    return 0;
                  } else if (result === 1) {
                      intersects = true;
                    }
                }

                if (!intersects) {
                  return 1;
                }

                for (var _i10 = 0; _i10 < frustum.vertices.length; _i10++) {
                  Vec3.subtract(tmp[_i10], frustum.vertices[_i10], aabb.center);
                }

                out1 = 0, out2 = 0;

                for (var _i11 = 0; _i11 < frustum.vertices.length; _i11++) {
                  if (tmp[_i11].x > aabb.halfExtents.x) {
                    out1++;
                  } else if (tmp[_i11].x < -aabb.halfExtents.x) {
                    out2++;
                  }
                }

                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }

                out1 = 0;
                out2 = 0;

                for (var _i12 = 0; _i12 < frustum.vertices.length; _i12++) {
                  if (tmp[_i12].y > aabb.halfExtents.y) {
                    out1++;
                  } else if (tmp[_i12].y < -aabb.halfExtents.y) {
                    out2++;
                  }
                }

                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }

                out1 = 0;
                out2 = 0;

                for (var _i13 = 0; _i13 < frustum.vertices.length; _i13++) {
                  if (tmp[_i13].z > aabb.halfExtents.z) {
                    out1++;
                  } else if (tmp[_i13].z < -aabb.halfExtents.z) {
                    out2++;
                  }
                }

                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }

                return 1;
              };
            }();

            var obbPoint = function () {
              var tmp = new Vec3(0, 0, 0);
              var m3 = new Mat3();

              var lessThan = function lessThan(a, b) {
                return Math.abs(a.x) < b.x && Math.abs(a.y) < b.y && Math.abs(a.z) < b.z;
              };

              return function (obb, point) {
                Vec3.subtract(tmp, point, obb.center);
                Vec3.transformMat3(tmp, tmp, Mat3.transpose(m3, obb.orientation));
                return lessThan(tmp, obb.halfExtents);
              };
            }();

            var obbPlane = function () {
              var absDot = function absDot(n, x, y, z) {
                return Math.abs(n.x * x + n.y * y + n.z * z);
              };

              return function (obb, plane) {
                var r = obb.halfExtents.x * absDot(plane.n, obb.orientation.m00, obb.orientation.m01, obb.orientation.m02) + obb.halfExtents.y * absDot(plane.n, obb.orientation.m03, obb.orientation.m04, obb.orientation.m05) + obb.halfExtents.z * absDot(plane.n, obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);
                var dot = Vec3.dot(plane.n, obb.center);

                if (dot + r < plane.d) {
                  return -1;
                } else if (dot - r > plane.d) {
                  return 0;
                }

                return 1;
              };
            }();

            var obbFrustum = function obbFrustum(obb, frustum) {
              for (var i = 0; i < frustum.planes.length; i++) {
                if (obbPlane(obb, frustum.planes[i]) === -1) {
                  return 0;
                }
              }

              return 1;
            };

            var obbFrustumAccurate = function () {
              var tmp = new Array(8);
              var dist = 0;
              var out1 = 0;
              var out2 = 0;

              for (var i = 0; i < tmp.length; i++) {
                tmp[i] = new Vec3(0, 0, 0);
              }

              var dot = function dot(n, x, y, z) {
                return n.x * x + n.y * y + n.z * z;
              };

              return function (obb, frustum) {
                var result = 0;
                var intersects = false;

                for (var _i14 = 0; _i14 < frustum.planes.length; _i14++) {
                  result = obbPlane(obb, frustum.planes[_i14]);

                  if (result === -1) {
                    return 0;
                  } else if (result === 1) {
                      intersects = true;
                    }
                }

                if (!intersects) {
                  return 1;
                }

                for (var _i15 = 0; _i15 < frustum.vertices.length; _i15++) {
                  Vec3.subtract(tmp[_i15], frustum.vertices[_i15], obb.center);
                }

                out1 = 0, out2 = 0;

                for (var _i16 = 0; _i16 < frustum.vertices.length; _i16++) {
                  dist = dot(tmp[_i16], obb.orientation.m00, obb.orientation.m01, obb.orientation.m02);

                  if (dist > obb.halfExtents.x) {
                    out1++;
                  } else if (dist < -obb.halfExtents.x) {
                    out2++;
                  }
                }

                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }

                out1 = 0;
                out2 = 0;

                for (var _i17 = 0; _i17 < frustum.vertices.length; _i17++) {
                  dist = dot(tmp[_i17], obb.orientation.m03, obb.orientation.m04, obb.orientation.m05);

                  if (dist > obb.halfExtents.y) {
                    out1++;
                  } else if (dist < -obb.halfExtents.y) {
                    out2++;
                  }
                }

                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }

                out1 = 0;
                out2 = 0;

                for (var _i18 = 0; _i18 < frustum.vertices.length; _i18++) {
                  dist = dot(tmp[_i18], obb.orientation.m06, obb.orientation.m07, obb.orientation.m08);

                  if (dist > obb.halfExtents.z) {
                    out1++;
                  } else if (dist < -obb.halfExtents.z) {
                    out2++;
                  }
                }

                if (out1 === frustum.vertices.length || out2 === frustum.vertices.length) {
                  return 0;
                }

                return 1;
              };
            }();

            var obbWithOBB = function () {
              var test = new Array(15);

              for (var i = 0; i < 15; i++) {
                test[i] = new Vec3(0, 0, 0);
              }

              var vertices = new Array(8);
              var vertices2 = new Array(8);

              for (var _i19 = 0; _i19 < 8; _i19++) {
                vertices[_i19] = new Vec3(0, 0, 0);
                vertices2[_i19] = new Vec3(0, 0, 0);
              }

              return function (obb1, obb2) {
                Vec3.set(test[0], obb1.orientation.m00, obb1.orientation.m01, obb1.orientation.m02);
                Vec3.set(test[1], obb1.orientation.m03, obb1.orientation.m04, obb1.orientation.m05);
                Vec3.set(test[2], obb1.orientation.m06, obb1.orientation.m07, obb1.orientation.m08);
                Vec3.set(test[3], obb2.orientation.m00, obb2.orientation.m01, obb2.orientation.m02);
                Vec3.set(test[4], obb2.orientation.m03, obb2.orientation.m04, obb2.orientation.m05);
                Vec3.set(test[5], obb2.orientation.m06, obb2.orientation.m07, obb2.orientation.m08);

                for (var _i20 = 0; _i20 < 3; ++_i20) {
                  Vec3.cross(test[6 + _i20 * 3 + 0], test[_i20], test[0]);
                  Vec3.cross(test[6 + _i20 * 3 + 1], test[_i20], test[1]);
                  Vec3.cross(test[6 + _i20 * 3 + 1], test[_i20], test[2]);
                }

                getOBBVertices(obb1.center, obb1.halfExtents, test[0], test[1], test[2], vertices);
                getOBBVertices(obb2.center, obb2.halfExtents, test[3], test[4], test[5], vertices2);

                for (var _i21 = 0; _i21 < 15; ++_i21) {
                  var a = getInterval(vertices, test[_i21]);
                  var b = getInterval(vertices2, test[_i21]);

                  if (b[0] > a[1] || a[0] > b[1]) {
                    return 0;
                  }
                }

                return 1;
              };
            }();

            var obbCapsule = function () {
              var sphere_0 = new Sphere();
              var v3_0 = new Vec3();
              var v3_1 = new Vec3();
              var v3_2 = new Vec3();
              var v3_verts8 = new Array(8);

              for (var i = 0; i < 8; i++) {
                v3_verts8[i] = new Vec3();
              }

              var v3_axis8 = new Array(8);

              for (var _i22 = 0; _i22 < 8; _i22++) {
                v3_axis8[_i22] = new Vec3();
              }

              return function (obb, capsule) {
                var h = Vec3.squaredDistance(capsule.ellipseCenter0, capsule.ellipseCenter1);

                if (h === 0) {
                  sphere_0.radius = capsule.radius;
                  sphere_0.center.set(capsule.ellipseCenter0);
                  return intersect.sphereOBB(sphere_0, obb);
                } else {
                  v3_0.x = obb.orientation.m00;
                  v3_0.y = obb.orientation.m01;
                  v3_0.z = obb.orientation.m02;
                  v3_1.x = obb.orientation.m03;
                  v3_1.y = obb.orientation.m04;
                  v3_1.z = obb.orientation.m05;
                  v3_2.x = obb.orientation.m06;
                  v3_2.y = obb.orientation.m07;
                  v3_2.z = obb.orientation.m08;
                  getOBBVertices(obb.center, obb.halfExtents, v3_0, v3_1, v3_2, v3_verts8);
                  var axes = v3_axis8;
                  var a0 = Vec3.copy(axes[0], v3_0);
                  var a1 = Vec3.copy(axes[1], v3_1);
                  var a2 = Vec3.copy(axes[2], v3_2);
                  var C = Vec3.subtract(axes[3], capsule.center, obb.center);
                  C.normalize();
                  var B = Vec3.subtract(axes[4], capsule.ellipseCenter0, capsule.ellipseCenter1);
                  B.normalize();
                  Vec3.cross(axes[5], a0, B);
                  Vec3.cross(axes[6], a1, B);
                  Vec3.cross(axes[7], a2, B);

                  for (var _i23 = 0; _i23 < 8; ++_i23) {
                    var a = getInterval(v3_verts8, axes[_i23]);
                    var d0 = Vec3.dot(axes[_i23], capsule.ellipseCenter0);
                    var d1 = Vec3.dot(axes[_i23], capsule.ellipseCenter1);
                    var max_d = Math.max(d0, d1);
                    var min_d = Math.min(d0, d1);
                    var d_min = min_d - capsule.radius;
                    var d_max = max_d + capsule.radius;

                    if (d_min > a[1] || a[0] > d_max) {
                      return 0;
                    }
                  }

                  return 1;
                }
              };
            }();

            var spherePlane = function spherePlane(sphere, plane) {
              var dot = Vec3.dot(plane.n, sphere.center);
              var r = sphere.radius * plane.n.length();

              if (dot + r < plane.d) {
                return -1;
              } else if (dot - r > plane.d) {
                return 0;
              }

              return 1;
            };

            var sphereFrustum = function sphereFrustum(sphere, frustum) {
              for (var i = 0; i < frustum.planes.length; i++) {
                if (spherePlane(sphere, frustum.planes[i]) === -1) {
                  return 0;
                }
              }

              return 1;
            };

            var sphereFrustumAccurate = function () {
              var pt = new Vec3(0, 0, 0);
              var map = [1, -1, 1, -1, 1, -1];
              return function (sphere, frustum) {
                for (var i = 0; i < 6; i++) {
                  var plane = frustum.planes[i];
                  var r = sphere.radius;
                  var c = sphere.center;
                  var n = plane.n;
                  var d = plane.d;
                  var dot = Vec3.dot(n, c);

                  if (dot + r < d) {
                    return 0;
                  } else if (dot - r > d) {
                      continue;
                    }

                  Vec3.add(pt, c, Vec3.multiplyScalar(pt, n, r));

                  for (var j = 0; j < 6; j++) {
                    if (j === i || j === i + map[i]) {
                      continue;
                    }

                    var test = frustum.planes[j];

                    if (Vec3.dot(test.n, pt) < test.d) {
                      return 0;
                    }
                  }
                }

                return 1;
              };
            }();

            var sphereWithSphere = function sphereWithSphere(sphere0, sphere1) {
              var r = sphere0.radius + sphere1.radius;
              return Vec3.squaredDistance(sphere0.center, sphere1.center) < r * r;
            };

            var sphereAABB = function () {
              var pt = new Vec3();
              return function (sphere, aabb) {
                pt_point_aabb(pt, sphere.center, aabb);
                return Vec3.squaredDistance(sphere.center, pt) < sphere.radius * sphere.radius;
              };
            }();

            var sphereOBB = function () {
              var pt = new Vec3();
              return function (sphere, obb) {
                pt_point_obb(pt, sphere.center, obb);
                return Vec3.squaredDistance(sphere.center, pt) < sphere.radius * sphere.radius;
              };
            }();

            var sphereCapsule = function () {
              var v3_0 = new Vec3();
              var v3_1 = new Vec3();
              return function (sphere, capsule) {
                var r = sphere.radius + capsule.radius;
                var squaredR = r * r;
                var h = Vec3.squaredDistance(capsule.ellipseCenter0, capsule.ellipseCenter1);

                if (h === 0) {
                  return Vec3.squaredDistance(sphere.center, capsule.center) < squaredR;
                } else {
                  Vec3.subtract(v3_0, sphere.center, capsule.ellipseCenter0);
                  Vec3.subtract(v3_1, capsule.ellipseCenter1, capsule.ellipseCenter0);
                  var t = Vec3.dot(v3_0, v3_1) / h;

                  if (t < 0) {
                    return Vec3.squaredDistance(sphere.center, capsule.ellipseCenter0) < squaredR;
                  } else if (t > 1) {
                    return Vec3.squaredDistance(sphere.center, capsule.ellipseCenter1) < squaredR;
                  } else {
                    Vec3.scaleAndAdd(v3_0, capsule.ellipseCenter0, v3_1, t);
                    return Vec3.squaredDistance(sphere.center, v3_0) < squaredR;
                  }
                }
              };
            }();

            var capsuleWithCapsule = function () {
              var v3_0 = new Vec3();
              var v3_1 = new Vec3();
              var v3_2 = new Vec3();
              var v3_3 = new Vec3();
              var v3_4 = new Vec3();
              var v3_5 = new Vec3();
              return function capsuleWithCapsule(capsuleA, capsuleB) {
                var u = Vec3.subtract(v3_0, capsuleA.ellipseCenter1, capsuleA.ellipseCenter0);
                var v = Vec3.subtract(v3_1, capsuleB.ellipseCenter1, capsuleB.ellipseCenter0);
                var w = Vec3.subtract(v3_2, capsuleA.ellipseCenter0, capsuleB.ellipseCenter0);
                var a = Vec3.dot(u, u);
                var b = Vec3.dot(u, v);
                var c = Vec3.dot(v, v);
                var d = Vec3.dot(u, w);
                var e = Vec3.dot(v, w);
                var D = a * c - b * b;
                var sc;
                var sN;
                var sD = D;
                var tc;
                var tN;
                var tD = D;

                if (D < EPSILON) {
                  sN = 0.0;
                  sD = 1.0;
                  tN = e;
                  tD = c;
                } else {
                  sN = b * e - c * d;
                  tN = a * e - b * d;

                  if (sN < 0.0) {
                    sN = 0.0;
                    tN = e;
                    tD = c;
                  } else if (sN > sD) {
                    sN = sD;
                    tN = e + b;
                    tD = c;
                  }
                }

                if (tN < 0.0) {
                  tN = 0.0;

                  if (-d < 0.0) {
                    sN = 0.0;
                  } else if (-d > a) {
                    sN = sD;
                  } else {
                    sN = -d;
                    sD = a;
                  }
                } else if (tN > tD) {
                  tN = tD;

                  if (-d + b < 0.0) {
                    sN = 0;
                  } else if (-d + b > a) {
                    sN = sD;
                  } else {
                    sN = -d + b;
                    sD = a;
                  }
                }

                sc = Math.abs(sN) < EPSILON ? 0.0 : sN / sD;
                tc = Math.abs(tN) < EPSILON ? 0.0 : tN / tD;
                var dP = v3_3;
                dP.set(w);
                dP.add(Vec3.multiplyScalar(v3_4, u, sc));
                dP.subtract(Vec3.multiplyScalar(v3_5, v, tc));
                var radius = capsuleA.radius + capsuleB.radius;
                return dP.lengthSqr() < radius * radius;
              };
            }();

            var intersect = exports('i', {
              raySphere: raySphere,
              rayAABB: rayAABB,
              rayOBB: rayOBB,
              rayPlane: rayPlane,
              rayTriangle: rayTriangle,
              rayCapsule: rayCapsule,
              raySubMesh: raySubMesh,
              rayMesh: rayMesh,
              rayModel: rayModel,
              lineSphere: lineSphere,
              lineAABB: lineAABB,
              lineOBB: lineOBB,
              linePlane: linePlane,
              lineTriangle: lineTriangle,
              sphereWithSphere: sphereWithSphere,
              sphereAABB: sphereAABB,
              sphereOBB: sphereOBB,
              spherePlane: spherePlane,
              sphereFrustum: sphereFrustum,
              sphereFrustumAccurate: sphereFrustumAccurate,
              sphereCapsule: sphereCapsule,
              aabbWithAABB: aabbWithAABB,
              aabbWithOBB: aabbWithOBB,
              aabbPlane: aabbPlane,
              aabbFrustum: aabbFrustum,
              aabbFrustumAccurate: aabbFrustumAccurate,
              obbWithOBB: obbWithOBB,
              obbPlane: obbPlane,
              obbFrustum: obbFrustum,
              obbFrustumAccurate: obbFrustumAccurate,
              obbPoint: obbPoint,
              obbCapsule: obbCapsule,
              capsuleWithCapsule: capsuleWithCapsule,
              resolve: function resolve(g1, g2, outPt) {
                if (outPt === void 0) {
                  outPt = null;
                }

                var type1 = g1._type;
                var type2 = g2._type;
                var resolver = this[type1 | type2];

                if (type1 < type2) {
                  return resolver(g1, g2, outPt);
                } else {
                  return resolver(g2, g1, outPt);
                }
              }
            });
            intersect[enums.SHAPE_RAY | enums.SHAPE_SPHERE] = raySphere;
            intersect[enums.SHAPE_RAY | enums.SHAPE_AABB] = rayAABB;
            intersect[enums.SHAPE_RAY | enums.SHAPE_OBB] = rayOBB;
            intersect[enums.SHAPE_RAY | enums.SHAPE_PLANE] = rayPlane;
            intersect[enums.SHAPE_RAY | enums.SHAPE_TRIANGLE] = rayTriangle;
            intersect[enums.SHAPE_RAY | enums.SHAPE_CAPSULE] = rayCapsule;
            intersect[enums.SHAPE_LINE | enums.SHAPE_SPHERE] = lineSphere;
            intersect[enums.SHAPE_LINE | enums.SHAPE_AABB] = lineAABB;
            intersect[enums.SHAPE_LINE | enums.SHAPE_OBB] = lineOBB;
            intersect[enums.SHAPE_LINE | enums.SHAPE_PLANE] = linePlane;
            intersect[enums.SHAPE_LINE | enums.SHAPE_TRIANGLE] = lineTriangle;
            intersect[enums.SHAPE_SPHERE] = sphereWithSphere;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_AABB] = sphereAABB;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_OBB] = sphereOBB;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_PLANE] = spherePlane;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_FRUSTUM] = sphereFrustum;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_FRUSTUM_ACCURATE] = sphereFrustumAccurate;
            intersect[enums.SHAPE_SPHERE | enums.SHAPE_CAPSULE] = sphereCapsule;
            intersect[enums.SHAPE_AABB] = aabbWithAABB;
            intersect[enums.SHAPE_AABB | enums.SHAPE_OBB] = aabbWithOBB;
            intersect[enums.SHAPE_AABB | enums.SHAPE_PLANE] = aabbPlane;
            intersect[enums.SHAPE_AABB | enums.SHAPE_FRUSTUM] = aabbFrustum;
            intersect[enums.SHAPE_AABB | enums.SHAPE_FRUSTUM_ACCURATE] = aabbFrustumAccurate;
            intersect[enums.SHAPE_OBB] = obbWithOBB;
            intersect[enums.SHAPE_OBB | enums.SHAPE_PLANE] = obbPlane;
            intersect[enums.SHAPE_OBB | enums.SHAPE_FRUSTUM] = obbFrustum;
            intersect[enums.SHAPE_OBB | enums.SHAPE_FRUSTUM_ACCURATE] = obbFrustumAccurate;
            intersect[enums.SHAPE_OBB | enums.SHAPE_CAPSULE] = obbCapsule;
            intersect[enums.SHAPE_CAPSULE] = capsuleWithCapsule;

            replaceProperty(Line.prototype, 'line', [{
              name: 'mag',
              newName: 'len'
            }, {
              name: 'magnitude',
              newName: 'len'
            }]);
            removeProperty(intersect, 'intersect', [{
              name: 'line_quad'
            }]);

            var v1 = new Vec3(0, 0, 0);
            var v2 = new Vec3(0, 0, 0);
            var temp_mat = legacyCC.mat4();
            var temp_vec4 = legacyCC.v4();
            var Plane = exports('P', function () {
              Plane.create = function create(nx, ny, nz, d) {
                return new Plane(nx, ny, nz, d);
              };

              Plane.clone = function clone(p) {
                return new Plane(p.n.x, p.n.y, p.n.z, p.d);
              };

              Plane.copy = function copy(out, p) {
                Vec3.copy(out.n, p.n);
                out.d = p.d;
                return out;
              };

              Plane.fromPoints = function fromPoints(out, a, b, c) {
                Vec3.subtract(v1, b, a);
                Vec3.subtract(v2, c, a);
                Vec3.normalize(out.n, Vec3.cross(out.n, v1, v2));
                out.d = Vec3.dot(out.n, a);
                return out;
              };

              Plane.set = function set(out, nx, ny, nz, d) {
                out.n.x = nx;
                out.n.y = ny;
                out.n.z = nz;
                out.d = d;
                return out;
              };

              Plane.fromNormalAndPoint = function fromNormalAndPoint(out, normal, point) {
                Vec3.copy(out.n, normal);
                out.d = Vec3.dot(normal, point);
                return out;
              };

              Plane.normalize = function normalize(out, a) {
                var len = a.n.length();
                Vec3.normalize(out.n, a.n);

                if (len > 0) {
                  out.d = a.d / len;
                }

                return out;
              };

              _createClass(Plane, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }, {
                key: "x",
                set: function set(val) {
                  this.n.x = val;
                },
                get: function get() {
                  return this.n.x;
                }
              }, {
                key: "y",
                set: function set(val) {
                  this.n.y = val;
                },
                get: function get() {
                  return this.n.y;
                }
              }, {
                key: "z",
                set: function set(val) {
                  this.n.z = val;
                },
                get: function get() {
                  return this.n.z;
                }
              }, {
                key: "w",
                set: function set(val) {
                  this.d = val;
                },
                get: function get() {
                  return this.d;
                }
              }]);

              function Plane(nx, ny, nz, d) {
                if (nx === void 0) {
                  nx = 0;
                }

                if (ny === void 0) {
                  ny = 1;
                }

                if (nz === void 0) {
                  nz = 0;
                }

                if (d === void 0) {
                  d = 0;
                }

                this.n = void 0;
                this.d = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_PLANE;
                this.n = new Vec3(nx, ny, nz);
                this.d = d;
              }

              var _proto = Plane.prototype;

              _proto.transform = function transform(mat) {
                Mat4.invert(temp_mat, mat);
                Mat4.transpose(temp_mat, temp_mat);
                Vec4.set(temp_vec4, this.n.x, this.n.y, this.n.z, this.d);
                Vec4.transformMat4(temp_vec4, temp_vec4, temp_mat);
                Vec3.set(this.n, temp_vec4.x, temp_vec4.y, temp_vec4.z);
                this.d = temp_vec4.w;
              };

              return Plane;
            }());

            var _v3_tmp$1 = new Vec3();

            var _v3_tmp2 = new Vec3();

            var _v3_tmp3 = new Vec3();

            var _v3_tmp4 = new Vec3();

            var _m3_tmp = new Mat3();

            var transform_extent_m4 = function transform_extent_m4(out, extent, m4) {
              _m3_tmp.m00 = Math.abs(m4.m00);
              _m3_tmp.m01 = Math.abs(m4.m01);
              _m3_tmp.m02 = Math.abs(m4.m02);
              _m3_tmp.m03 = Math.abs(m4.m04);
              _m3_tmp.m04 = Math.abs(m4.m05);
              _m3_tmp.m05 = Math.abs(m4.m06);
              _m3_tmp.m06 = Math.abs(m4.m08);
              _m3_tmp.m07 = Math.abs(m4.m09);
              _m3_tmp.m08 = Math.abs(m4.m10);
              Vec3.transformMat3(out, extent, _m3_tmp);
            };

            var AABB = exports('A', function () {
              AABB.create = function create(px, py, pz, hw, hh, hl) {
                return new AABB(px, py, pz, hw, hh, hl);
              };

              AABB.clone = function clone(a) {
                return new AABB(a.center.x, a.center.y, a.center.z, a.halfExtents.x, a.halfExtents.y, a.halfExtents.z);
              };

              AABB.copy = function copy(out, a) {
                Vec3.copy(out.center, a.center);
                Vec3.copy(out.halfExtents, a.halfExtents);
                return out;
              };

              AABB.fromPoints = function fromPoints(out, minPos, maxPos) {
                Vec3.add(_v3_tmp$1, maxPos, minPos);
                Vec3.subtract(_v3_tmp2, maxPos, minPos);
                Vec3.multiplyScalar(out.center, _v3_tmp$1, 0.5);
                Vec3.multiplyScalar(out.halfExtents, _v3_tmp2, 0.5);
                return out;
              };

              AABB.set = function set(out, px, py, pz, hw, hh, hl) {
                Vec3.set(out.center, px, py, pz);
                Vec3.set(out.halfExtents, hw, hh, hl);
                return out;
              };

              AABB.merge = function merge(out, a, b) {
                Vec3.subtract(_v3_tmp$1, a.center, a.halfExtents);
                Vec3.subtract(_v3_tmp2, b.center, b.halfExtents);
                Vec3.add(_v3_tmp3, a.center, a.halfExtents);
                Vec3.add(_v3_tmp4, b.center, b.halfExtents);
                Vec3.max(_v3_tmp4, _v3_tmp3, _v3_tmp4);
                Vec3.min(_v3_tmp3, _v3_tmp$1, _v3_tmp2);
                return AABB.fromPoints(out, _v3_tmp3, _v3_tmp4);
              };

              AABB.toBoundingSphere = function toBoundingSphere(out, a) {
                a.getBoundary(_v3_tmp$1, _v3_tmp2);
                out.center.set(_v3_tmp$1);
                out.radius = 0.0;
                Vec3.subtract(_v3_tmp3, _v3_tmp2, out.center);

                var dist = _v3_tmp3.length();

                var half = dist * 0.5;
                out.radius += half;
                Vec3.multiplyScalar(_v3_tmp3, _v3_tmp3, half / dist);
                Vec3.add(out.center, out.center, _v3_tmp3);
                return out;
              };

              AABB.transform = function transform(out, a, matrix) {
                Vec3.transformMat4(out.center, a.center, matrix);
                transform_extent_m4(out.halfExtents, a.halfExtents, matrix);
                return out;
              };

              _createClass(AABB, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function AABB(px, py, pz, hw, hh, hl) {
                if (px === void 0) {
                  px = 0;
                }

                if (py === void 0) {
                  py = 0;
                }

                if (pz === void 0) {
                  pz = 0;
                }

                if (hw === void 0) {
                  hw = 1;
                }

                if (hh === void 0) {
                  hh = 1;
                }

                if (hl === void 0) {
                  hl = 1;
                }

                this.center = void 0;
                this.halfExtents = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_AABB;
                this.center = new Vec3(px, py, pz);
                this.halfExtents = new Vec3(hw, hh, hl);
              }

              var _proto = AABB.prototype;

              _proto.getBoundary = function getBoundary(minPos, maxPos) {
                Vec3.subtract(minPos, this.center, this.halfExtents);
                Vec3.add(maxPos, this.center, this.halfExtents);
              };

              _proto.transform = function transform(m, pos, rot, scale, out) {
                Vec3.transformMat4(out.center, this.center, m);
                transform_extent_m4(out.halfExtents, this.halfExtents, m);
              };

              _proto.clone = function clone() {
                return AABB.clone(this);
              };

              _proto.copy = function copy(a) {
                return AABB.copy(this, a);
              };

              return AABB;
            }());

            var _v3_tmp$2 = new Vec3();

            var _v3_tmp2$1 = new Vec3();

            var _m3_tmp$1 = new Mat3();

            var transform_extent_m3 = function transform_extent_m3(out, extent, m3) {
              _m3_tmp$1.m00 = Math.abs(m3.m00);
              _m3_tmp$1.m01 = Math.abs(m3.m01);
              _m3_tmp$1.m02 = Math.abs(m3.m02);
              _m3_tmp$1.m03 = Math.abs(m3.m03);
              _m3_tmp$1.m04 = Math.abs(m3.m04);
              _m3_tmp$1.m05 = Math.abs(m3.m05);
              _m3_tmp$1.m06 = Math.abs(m3.m06);
              _m3_tmp$1.m07 = Math.abs(m3.m07);
              _m3_tmp$1.m08 = Math.abs(m3.m08);
              Vec3.transformMat3(out, extent, _m3_tmp$1);
            };

            var OBB = exports('O', function () {
              OBB.create = function create(cx, cy, cz, hw, hh, hl, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
                return new OBB(cx, cy, cz, hw, hh, hl, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
              };

              OBB.clone = function clone(a) {
                return new OBB(a.center.x, a.center.y, a.center.z, a.halfExtents.x, a.halfExtents.y, a.halfExtents.z, a.orientation.m00, a.orientation.m01, a.orientation.m02, a.orientation.m03, a.orientation.m04, a.orientation.m05, a.orientation.m06, a.orientation.m07, a.orientation.m08);
              };

              OBB.copy = function copy(out, a) {
                Vec3.copy(out.center, a.center);
                Vec3.copy(out.halfExtents, a.halfExtents);
                Mat3.copy(out.orientation, a.orientation);
                return out;
              };

              OBB.fromPoints = function fromPoints(out, minPos, maxPos) {
                Vec3.multiplyScalar(out.center, Vec3.add(_v3_tmp$2, minPos, maxPos), 0.5);
                Vec3.multiplyScalar(out.halfExtents, Vec3.subtract(_v3_tmp2$1, maxPos, minPos), 0.5);
                Mat3.identity(out.orientation);
                return out;
              };

              OBB.set = function set(out, cx, cy, cz, hw, hh, hl, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
                Vec3.set(out.center, cx, cy, cz);
                Vec3.set(out.halfExtents, hw, hh, hl);
                Mat3.set(out.orientation, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
                return out;
              };

              _createClass(OBB, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function OBB(cx, cy, cz, hw, hh, hl, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
                if (cx === void 0) {
                  cx = 0;
                }

                if (cy === void 0) {
                  cy = 0;
                }

                if (cz === void 0) {
                  cz = 0;
                }

                if (hw === void 0) {
                  hw = 1;
                }

                if (hh === void 0) {
                  hh = 1;
                }

                if (hl === void 0) {
                  hl = 1;
                }

                if (ox_1 === void 0) {
                  ox_1 = 1;
                }

                if (ox_2 === void 0) {
                  ox_2 = 0;
                }

                if (ox_3 === void 0) {
                  ox_3 = 0;
                }

                if (oy_1 === void 0) {
                  oy_1 = 0;
                }

                if (oy_2 === void 0) {
                  oy_2 = 1;
                }

                if (oy_3 === void 0) {
                  oy_3 = 0;
                }

                if (oz_1 === void 0) {
                  oz_1 = 0;
                }

                if (oz_2 === void 0) {
                  oz_2 = 0;
                }

                if (oz_3 === void 0) {
                  oz_3 = 1;
                }

                this.center = void 0;
                this.halfExtents = void 0;
                this.orientation = void 0;
                this._type = void 0;
                this._type = enums.SHAPE_OBB;
                this.center = new Vec3(cx, cy, cz);
                this.halfExtents = new Vec3(hw, hh, hl);
                this.orientation = new Mat3(ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
              }

              var _proto = OBB.prototype;

              _proto.getBoundary = function getBoundary(minPos, maxPos) {
                transform_extent_m3(_v3_tmp$2, this.halfExtents, this.orientation);
                Vec3.subtract(minPos, this.center, _v3_tmp$2);
                Vec3.add(maxPos, this.center, _v3_tmp$2);
              };

              _proto.transform = function transform(m, pos, rot, scale, out) {
                Vec3.transformMat4(out.center, this.center, m);
                Mat3.fromQuat(out.orientation, rot);
                Vec3.multiply(out.halfExtents, this.halfExtents, scale);
              };

              _proto.translateAndRotate = function translateAndRotate(m, rot, out) {
                Vec3.transformMat4(out.center, this.center, m);
                Mat3.fromQuat(out.orientation, rot);
              };

              _proto.setScale = function setScale(scale, out) {
                Vec3.multiply(out.halfExtents, this.halfExtents, scale);
              };

              return OBB;
            }());

            var Capsule = exports('C', function () {
              _createClass(Capsule, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function Capsule(radius, halfHeight, axis) {
                if (radius === void 0) {
                  radius = 0.5;
                }

                if (halfHeight === void 0) {
                  halfHeight = 0.5;
                }

                if (axis === void 0) {
                  axis = 1;
                }

                this._type = void 0;
                this.radius = void 0;
                this.halfHeight = void 0;
                this.axis = void 0;
                this.center = void 0;
                this.rotation = void 0;
                this.ellipseCenter0 = void 0;
                this.ellipseCenter1 = void 0;
                this._type = enums.SHAPE_CAPSULE;
                this.radius = radius;
                this.halfHeight = halfHeight;
                this.axis = axis;
                this.center = new Vec3();
                this.rotation = new Quat();
                this.ellipseCenter0 = new Vec3(0, halfHeight, 0);
                this.ellipseCenter1 = new Vec3(0, -halfHeight, 0);
                this.updateCache();
              }

              var _proto = Capsule.prototype;

              _proto.transform = function transform(m, pos, rot, scale, out) {
                var ws = scale;
                var s = absMaxComponent(ws);
                out.radius = this.radius * Math.abs(s);
                var halfTotalWorldHeight = (this.halfHeight + this.radius) * Math.abs(ws.y);
                var halfWorldHeight = halfTotalWorldHeight - out.radius;
                if (halfWorldHeight < 0) halfWorldHeight = 0;
                out.halfHeight = halfWorldHeight;
                Vec3.transformMat4(out.center, this.center, m);
                Quat.multiply(out.rotation, this.rotation, rot);
                out.updateCache();
              };

              _proto.updateCache = function updateCache() {
                this.updateLocalCenter();
                Vec3.transformQuat(this.ellipseCenter0, this.ellipseCenter0, this.rotation);
                Vec3.transformQuat(this.ellipseCenter1, this.ellipseCenter1, this.rotation);
                this.ellipseCenter0.add(this.center);
                this.ellipseCenter1.add(this.center);
              };

              _proto.updateLocalCenter = function updateLocalCenter() {
                var halfHeight = this.halfHeight;
                var axis = this.axis;

                switch (axis) {
                  case 0:
                    this.ellipseCenter0.set(halfHeight, 0, 0);
                    this.ellipseCenter1.set(-halfHeight, 0, 0);
                    break;

                  case 1:
                    this.ellipseCenter0.set(0, halfHeight, 0);
                    this.ellipseCenter1.set(0, -halfHeight, 0);
                    break;

                  case 2:
                    this.ellipseCenter0.set(0, 0, halfHeight);
                    this.ellipseCenter1.set(0, 0, -halfHeight);
                    break;
                }
              };

              return Capsule;
            }());

            var _v = new Array(8);

            _v[0] = new Vec3(1, 1, 1);
            _v[1] = new Vec3(-1, 1, 1);
            _v[2] = new Vec3(-1, -1, 1);
            _v[3] = new Vec3(1, -1, 1);
            _v[4] = new Vec3(1, 1, -1);
            _v[5] = new Vec3(-1, 1, -1);
            _v[6] = new Vec3(-1, -1, -1);
            _v[7] = new Vec3(1, -1, -1);
            var Frustum = exports('F', function () {
              Frustum.create = function create() {
                return new Frustum();
              };

              Frustum.clone = function clone(f) {
                return Frustum.copy(new Frustum(), f);
              };

              Frustum.copy = function copy(out, f) {
                out._type = f._type;

                for (var i = 0; i < 6; ++i) {
                  Plane.copy(out.planes[i], f.planes[i]);
                }

                for (var _i = 0; _i < 8; ++_i) {
                  Vec3.copy(out.vertices[_i], f.vertices[_i]);
                }

                return out;
              };

              _createClass(Frustum, [{
                key: "accurate",
                set: function set(b) {
                  this._type = b ? enums.SHAPE_FRUSTUM_ACCURATE : enums.SHAPE_FRUSTUM;
                }
              }, {
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function Frustum() {
                this._type = void 0;
                this.planes = void 0;
                this.vertices = void 0;
                this._type = enums.SHAPE_FRUSTUM;
                this.planes = new Array(6);

                for (var i = 0; i < 6; ++i) {
                  this.planes[i] = Plane.create(0, 0, 0, 0);
                }

                this.vertices = new Array(8);

                for (var _i2 = 0; _i2 < 8; ++_i2) {
                  this.vertices[_i2] = new Vec3();
                }
              }

              var _proto = Frustum.prototype;

              _proto.update = function update(m, inv) {
                Vec3.set(this.planes[0].n, m.m03 + m.m00, m.m07 + m.m04, m.m11 + m.m08);
                this.planes[0].d = -(m.m15 + m.m12);
                Vec3.set(this.planes[1].n, m.m03 - m.m00, m.m07 - m.m04, m.m11 - m.m08);
                this.planes[1].d = -(m.m15 - m.m12);
                Vec3.set(this.planes[2].n, m.m03 + m.m01, m.m07 + m.m05, m.m11 + m.m09);
                this.planes[2].d = -(m.m15 + m.m13);
                Vec3.set(this.planes[3].n, m.m03 - m.m01, m.m07 - m.m05, m.m11 - m.m09);
                this.planes[3].d = -(m.m15 - m.m13);
                Vec3.set(this.planes[4].n, m.m03 + m.m02, m.m07 + m.m06, m.m11 + m.m10);
                this.planes[4].d = -(m.m15 + m.m14);
                Vec3.set(this.planes[5].n, m.m03 - m.m02, m.m07 - m.m06, m.m11 - m.m10);
                this.planes[5].d = -(m.m15 - m.m14);

                if (this._type !== enums.SHAPE_FRUSTUM_ACCURATE) {
                  return;
                }

                for (var i = 0; i < 6; i++) {
                  var pl = this.planes[i];
                  var invDist = 1 / pl.n.length();
                  Vec3.multiplyScalar(pl.n, pl.n, invDist);
                  pl.d *= invDist;
                }

                for (var _i3 = 0; _i3 < 8; _i3++) {
                  Vec3.transformMat4(this.vertices[_i3], _v[_i3], inv);
                }
              };

              _proto.transform = function transform(mat) {
                if (this._type !== enums.SHAPE_FRUSTUM_ACCURATE) {
                  return;
                }

                for (var i = 0; i < 8; i++) {
                  Vec3.transformMat4(this.vertices[i], this.vertices[i], mat);
                }

                Plane.fromPoints(this.planes[0], this.vertices[1], this.vertices[5], this.vertices[6]);
                Plane.fromPoints(this.planes[1], this.vertices[3], this.vertices[7], this.vertices[4]);
                Plane.fromPoints(this.planes[2], this.vertices[6], this.vertices[7], this.vertices[3]);
                Plane.fromPoints(this.planes[3], this.vertices[0], this.vertices[4], this.vertices[5]);
                Plane.fromPoints(this.planes[4], this.vertices[2], this.vertices[3], this.vertices[0]);
                Plane.fromPoints(this.planes[0], this.vertices[7], this.vertices[6], this.vertices[5]);
              };

              return Frustum;
            }());

            Frustum.createOrtho = function () {
              var _temp_v3 = new Vec3();

              return function (out, width, height, near, far, transform) {
                var halfWidth = width / 2;
                var halfHeight = height / 2;
                Vec3.set(_temp_v3, halfWidth, halfHeight, near);
                Vec3.transformMat4(out.vertices[0], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, halfHeight, near);
                Vec3.transformMat4(out.vertices[1], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, -halfHeight, near);
                Vec3.transformMat4(out.vertices[2], _temp_v3, transform);
                Vec3.set(_temp_v3, halfWidth, -halfHeight, near);
                Vec3.transformMat4(out.vertices[3], _temp_v3, transform);
                Vec3.set(_temp_v3, halfWidth, halfHeight, far);
                Vec3.transformMat4(out.vertices[4], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, halfHeight, far);
                Vec3.transformMat4(out.vertices[5], _temp_v3, transform);
                Vec3.set(_temp_v3, -halfWidth, -halfHeight, far);
                Vec3.transformMat4(out.vertices[6], _temp_v3, transform);
                Vec3.set(_temp_v3, halfWidth, -halfHeight, far);
                Vec3.transformMat4(out.vertices[7], _temp_v3, transform);
                Plane.fromPoints(out.planes[0], out.vertices[1], out.vertices[6], out.vertices[5]);
                Plane.fromPoints(out.planes[1], out.vertices[3], out.vertices[4], out.vertices[7]);
                Plane.fromPoints(out.planes[2], out.vertices[6], out.vertices[3], out.vertices[7]);
                Plane.fromPoints(out.planes[3], out.vertices[0], out.vertices[5], out.vertices[4]);
                Plane.fromPoints(out.planes[4], out.vertices[2], out.vertices[0], out.vertices[3]);
                Plane.fromPoints(out.planes[0], out.vertices[7], out.vertices[5], out.vertices[6]);
              };
            }();

            function recordFrustumToSharedMemory(handle, frstm) {
              if (!frstm || handle === NULL_HANDLE) {
                return;
              }

              var vertices = frstm.vertices;
              var vertexOffset = FrustumView.VERTICES;

              for (var i = 0; i < 8; ++i) {
                FrustumPool.setVec3(handle, vertexOffset, vertices[i]);
                vertexOffset += 3;
              }

              var planes = frstm.planes;
              var planeOffset = FrustumView.PLANES;

              for (var _i4 = 0; _i4 < 6; _i4++, planeOffset += 4) {
                FrustumPool.setVec4(handle, planeOffset, planes[_i4]);
              }
            }

            var WrapModeMask;

            (function (WrapModeMask) {
              WrapModeMask[WrapModeMask["Default"] = 0] = "Default";
              WrapModeMask[WrapModeMask["Normal"] = 1] = "Normal";
              WrapModeMask[WrapModeMask["Loop"] = 2] = "Loop";
              WrapModeMask[WrapModeMask["ShouldWrap"] = 4] = "ShouldWrap";
              WrapModeMask[WrapModeMask["Clamp"] = 8] = "Clamp";
              WrapModeMask[WrapModeMask["PingPong"] = 22] = "PingPong";
              WrapModeMask[WrapModeMask["Reverse"] = 36] = "Reverse";
            })(WrapModeMask || (WrapModeMask = exports('m', {})));

            var WrapMode;

            (function (WrapMode) {
              WrapMode[WrapMode["Default"] = WrapModeMask.Default] = "Default";
              WrapMode[WrapMode["Normal"] = WrapModeMask.Normal] = "Normal";
              WrapMode[WrapMode["Reverse"] = WrapModeMask.Reverse] = "Reverse";
              WrapMode[WrapMode["Loop"] = WrapModeMask.Loop] = "Loop";
              WrapMode[WrapMode["LoopReverse"] = WrapModeMask.Loop | WrapModeMask.Reverse] = "LoopReverse";
              WrapMode[WrapMode["PingPong"] = WrapModeMask.PingPong] = "PingPong";
              WrapMode[WrapMode["PingPongReverse"] = WrapModeMask.PingPong | WrapModeMask.Reverse] = "PingPongReverse";
            })(WrapMode || (WrapMode = exports('W', {})));

            ccenum(WrapMode);
            var WrappedInfo = exports('k', function () {
              function WrappedInfo(info) {
                this.ratio = 0;
                this.time = 0;
                this.direction = 1;
                this.stopped = true;
                this.iterations = 0;
                this.frameIndex = undefined;

                if (info) {
                  this.set(info);
                }
              }

              var _proto = WrappedInfo.prototype;

              _proto.set = function set(info) {
                this.ratio = info.ratio;
                this.time = info.time;
                this.direction = info.direction;
                this.stopped = info.stopped;
                this.iterations = info.iterations;
                this.frameIndex = info.frameIndex;
              };

              return WrappedInfo;
            }());
            function isLerpable(object) {
              return typeof object.lerp === 'function';
            }

            var LOOK_FORWARD = 3;
            var WrapMode$1 = Enum({
              Default: WrapModeMask.Default,
              Normal: WrapModeMask.Normal,
              Clamp: WrapModeMask.Clamp,
              Loop: WrapModeMask.Loop,
              PingPong: WrapModeMask.PingPong
            });
            var Keyframe = exports('K', function Keyframe() {
              this.time = 0;
              this.value = 0;
              this.inTangent = 0;
              this.outTangent = 0;
            });
            CCClass.fastDefine('cc.Keyframe', Keyframe, {
              time: 0,
              value: 0,
              inTangent: 0,
              outTangent: 0
            });
            var OptimizedKey = function () {
              function OptimizedKey() {
                this.index = void 0;
                this.time = void 0;
                this.endTime = void 0;
                this.coefficient = void 0;
                this.index = -1;
                this.time = 0;
                this.endTime = 0;
                this.coefficient = new Float32Array(4);
              }

              var _proto = OptimizedKey.prototype;

              _proto.evaluate = function evaluate(T) {
                var t = T - this.time;
                return evalOptCurve(t, this.coefficient);
              };

              return OptimizedKey;
            }();
            function evalOptCurve(t, coefs) {
              return t * (t * (t * coefs[0] + coefs[1]) + coefs[2]) + coefs[3];
            }
            var AnimationCurve = exports('a', function () {
              function AnimationCurve(keyFrames) {
                if (keyFrames === void 0) {
                  keyFrames = null;
                }

                this.keyFrames = void 0;
                this.preWrapMode = WrapMode$1.Loop;
                this.postWrapMode = WrapMode$1.Clamp;
                this.cachedKey = void 0;
                this.keyFrames = keyFrames || [].concat(AnimationCurve.defaultKF);
                this.cachedKey = new OptimizedKey();
              }

              var _proto2 = AnimationCurve.prototype;

              _proto2.addKey = function addKey(keyFrame) {
                if (this.keyFrames == null) {
                  this.keyFrames = [];
                }

                this.keyFrames.push(keyFrame);
              };

              _proto2.evaluate_slow = function evaluate_slow(time) {
                var wrappedTime = time;
                var wrapMode = time < 0 ? this.preWrapMode : this.postWrapMode;
                var startTime = this.keyFrames[0].time;
                var endTime = this.keyFrames[this.keyFrames.length - 1].time;

                switch (wrapMode) {
                  case WrapMode$1.Loop:
                    wrappedTime = repeat(time - startTime, endTime - startTime) + startTime;
                    break;

                  case WrapMode$1.PingPong:
                    wrappedTime = pingPong(time - startTime, endTime - startTime) + startTime;
                    break;

                  case WrapMode$1.Default:
                  case WrapMode$1.Normal:
                  case WrapMode$1.Clamp:
                    wrappedTime = clamp(time, startTime, endTime);
                    break;

                  default:
                    wrappedTime = clamp(time, startTime, endTime);
                    break;
                }

                var preKFIndex = 0;

                if (wrappedTime > this.keyFrames[0].time) {
                  if (wrappedTime >= this.keyFrames[this.keyFrames.length - 1].time) {
                    preKFIndex = this.keyFrames.length - 2;
                  } else {
                    for (var i = 0; i < this.keyFrames.length - 1; i++) {
                      if (wrappedTime >= this.keyFrames[0].time && wrappedTime <= this.keyFrames[i + 1].time) {
                        preKFIndex = i;
                        break;
                      }
                    }
                  }
                }

                var keyframe0 = this.keyFrames[preKFIndex];
                var keyframe1 = this.keyFrames[preKFIndex + 1];
                var t = inverseLerp(keyframe0.time, keyframe1.time, wrappedTime);
                var dt = keyframe1.time - keyframe0.time;
                var m0 = keyframe0.outTangent * dt;
                var m1 = keyframe1.inTangent * dt;
                var t2 = t * t;
                var t3 = t2 * t;
                var a = 2 * t3 - 3 * t2 + 1;
                var b = t3 - 2 * t2 + t;
                var c = t3 - t2;
                var d = -2 * t3 + 3 * t2;
                return a * keyframe0.value + b * m0 + c * m1 + d * keyframe1.value;
              };

              _proto2.evaluate = function evaluate(time) {
                var wrappedTime = time;
                var wrapMode = time < 0 ? this.preWrapMode : this.postWrapMode;
                var startTime = this.keyFrames[0].time;
                var endTime = this.keyFrames[this.keyFrames.length - 1].time;

                switch (wrapMode) {
                  case WrapMode$1.Loop:
                    wrappedTime = repeat(time - startTime, endTime - startTime) + startTime;
                    break;

                  case WrapMode$1.PingPong:
                    wrappedTime = pingPong(time - startTime, endTime - startTime) + startTime;
                    break;

                  case WrapMode$1.Default:
                  case WrapMode$1.Normal:
                  case WrapMode$1.Clamp:
                    wrappedTime = clamp(time, startTime, endTime);
                    break;

                  default:
                    wrappedTime = clamp(time, startTime, endTime);
                    break;
                }

                if (wrappedTime >= this.cachedKey.time && wrappedTime < this.cachedKey.endTime) {
                  return this.cachedKey.evaluate(wrappedTime);
                }

                var leftIndex = this.findIndex(this.cachedKey, wrappedTime);
                var rightIndex = Math.min(leftIndex + 1, this.keyFrames.length - 1);
                this.calcOptimizedKey(this.cachedKey, leftIndex, rightIndex);
                return this.cachedKey.evaluate(wrappedTime);
              };

              _proto2.calcOptimizedKey = function calcOptimizedKey(optKey, leftIndex, rightIndex) {
                var lhs = this.keyFrames[leftIndex];
                var rhs = this.keyFrames[rightIndex];
                optKey.index = leftIndex;
                optKey.time = lhs.time;
                optKey.endTime = rhs.time;
                var dx = rhs.time - lhs.time;
                var dy = rhs.value - lhs.value;
                var length = 1 / (dx * dx);
                var d1 = lhs.outTangent * dx;
                var d2 = rhs.inTangent * dx;
                optKey.coefficient[0] = (d1 + d2 - dy - dy) * length / dx;
                optKey.coefficient[1] = (dy + dy + dy - d1 - d1 - d2) * length;
                optKey.coefficient[2] = lhs.outTangent;
                optKey.coefficient[3] = lhs.value;
              };

              _proto2.findIndex = function findIndex(optKey, t) {
                var cachedIndex = optKey.index;

                if (cachedIndex !== -1) {
                  var cachedTime = this.keyFrames[cachedIndex].time;

                  if (t > cachedTime) {
                    for (var i = 0; i < LOOK_FORWARD; i++) {
                      var currIndex = cachedIndex + i;

                      if (currIndex + 1 < this.keyFrames.length && this.keyFrames[currIndex + 1].time > t) {
                        return currIndex;
                      }
                    }
                  } else {
                    for (var _i = 0; _i < LOOK_FORWARD; _i++) {
                      var _currIndex = cachedIndex - _i;

                      if (_currIndex >= 0 && this.keyFrames[_currIndex - 1].time <= t) {
                        return _currIndex - 1;
                      }
                    }
                  }
                }

                var left = 0;
                var right = this.keyFrames.length;
                var mid;

                while (right - left > 1) {
                  mid = Math.floor((left + right) / 2);

                  if (this.keyFrames[mid].time >= t) {
                    right = mid;
                  } else {
                    left = mid;
                  }
                }

                return left;
              };

              return AnimationCurve;
            }());
            AnimationCurve.defaultKF = [{
              time: 0,
              value: 1,
              inTangent: 0,
              outTangent: 0
            }, {
              time: 1,
              value: 1,
              inTangent: 0,
              outTangent: 0
            }];
            CCClass.fastDefine('cc.AnimationCurve', AnimationCurve, {
              preWrapMode: WrapMode$1.Default,
              postWrapMode: WrapMode$1.Default,
              keyFrames: []
            });

            replaceProperty(intersect, 'intersect', [{
              name: 'ray_aabb',
              newName: 'rayAABB'
            }, {
              name: 'ray_plane',
              newName: 'rayPlane'
            }, {
              name: 'ray_triangle',
              newName: 'rayTriangle'
            }, {
              name: 'ray_sphere',
              newName: 'raySphere'
            }, {
              name: 'ray_obb',
              newName: 'rayOBB'
            }, {
              name: 'ray_capsule',
              newName: 'rayCapsule'
            }, {
              name: 'ray_subMesh',
              newName: 'raySubMesh'
            }, {
              name: 'ray_mesh',
              newName: 'rayMesh'
            }, {
              name: 'ray_model',
              newName: 'rayModel'
            }, {
              name: 'line_plane',
              newName: 'linePlane'
            }, {
              name: 'line_triangle',
              newName: 'lineTriangle'
            }, {
              name: 'line_aabb',
              newName: 'lineAABB'
            }, {
              name: 'line_obb',
              newName: 'lineOBB'
            }, {
              name: 'line_sphere',
              newName: 'lineSphere'
            }, {
              name: 'aabb_aabb',
              newName: 'aabbWithAABB'
            }, {
              name: 'aabb_obb',
              newName: 'aabbWithOBB'
            }, {
              name: 'aabb_plane',
              newName: 'aabbPlane'
            }, {
              name: 'aabb_frustum',
              newName: 'aabbFrustum'
            }, {
              name: 'aabbFrustum_accurate',
              newName: 'aabbFrustumAccurate'
            }, {
              name: 'obb_point',
              newName: 'obbPoint'
            }, {
              name: 'obb_plane',
              newName: 'obbPlane'
            }, {
              name: 'obb_frustum',
              newName: 'obbFrustum'
            }, {
              name: 'obbFrustum_accurate',
              newName: 'obbFrustumAccurate'
            }, {
              name: 'obb_obb',
              newName: 'obbWithOBB'
            }, {
              name: 'obb_capsule',
              newName: 'obbCapsule'
            }, {
              name: 'sphere_plane',
              newName: 'spherePlane'
            }, {
              name: 'sphere_frustum',
              newName: 'sphereFrustum'
            }, {
              name: 'sphereFrustum_accurate',
              newName: 'sphereFrustumAccurate'
            }, {
              name: 'sphere_sphere',
              newName: 'sphereWithSphere'
            }, {
              name: 'sphere_aabb',
              newName: 'sphereAABB'
            }, {
              name: 'sphere_obb',
              newName: 'sphereOBB'
            }, {
              name: 'sphere_capsule',
              newName: 'sphereCapsule'
            }, {
              name: 'capsule_capsule',
              newName: 'capsuleWithCapsule'
            }]);

            function deprecatedClassMessage(oldClassName, newClassName) {
              console.warn(oldClassName + " is deprecated, please use " + newClassName + " instead.");
            }

            var line = exports('l', function (_Line) {
              _inheritsLoose(line, _Line);

              function line() {
                var _this;

                _this = _Line.call(this) || this;
                deprecatedClassMessage('line', 'Line');
                return _this;
              }

              return line;
            }(Line));
            var plane = exports('p', function (_Plane) {
              _inheritsLoose(plane, _Plane);

              function plane() {
                var _this2;

                _this2 = _Plane.call(this) || this;
                deprecatedClassMessage('plane', 'Plane');
                return _this2;
              }

              return plane;
            }(Plane));
            var ray = exports('r', function (_Ray) {
              _inheritsLoose(ray, _Ray);

              function ray() {
                var _this3;

                _this3 = _Ray.call(this) || this;
                deprecatedClassMessage('ray', 'Ray');
                return _this3;
              }

              return ray;
            }(Ray));
            var triangle = exports('t', function (_Triangle) {
              _inheritsLoose(triangle, _Triangle);

              function triangle() {
                var _this4;

                _this4 = _Triangle.call(this) || this;
                deprecatedClassMessage('triangle', 'Triangle');
                return _this4;
              }

              return triangle;
            }(Triangle));
            var sphere = exports('s', function (_Sphere) {
              _inheritsLoose(sphere, _Sphere);

              function sphere() {
                var _this5;

                _this5 = _Sphere.call(this) || this;
                deprecatedClassMessage('sphere', 'Sphere');
                return _this5;
              }

              return sphere;
            }(Sphere));
            var aabb = exports('b', function (_AABB) {
              _inheritsLoose(aabb, _AABB);

              function aabb() {
                var _this6;

                _this6 = _AABB.call(this) || this;
                deprecatedClassMessage('aabb', 'AABB');
                return _this6;
              }

              return aabb;
            }(AABB));
            var obb = exports('o', function (_OBB) {
              _inheritsLoose(obb, _OBB);

              function obb() {
                var _this7;

                _this7 = _OBB.call(this) || this;
                deprecatedClassMessage('obb', 'OBB');
                return _this7;
              }

              return obb;
            }(OBB));
            var capsule = exports('c', function (_Capsule) {
              _inheritsLoose(capsule, _Capsule);

              function capsule() {
                var _this8;

                _this8 = _Capsule.call(this) || this;
                deprecatedClassMessage('capsule', 'Capsule');
                return _this8;
              }

              return capsule;
            }(Capsule));
            var frustum = exports('g', function (_Frustum) {
              _inheritsLoose(frustum, _Frustum);

              function frustum() {
                var _this9;

                _this9 = _Frustum.call(this) || this;
                deprecatedClassMessage('frustum', 'Frustum');
                return _this9;
              }

              return frustum;
            }(Frustum));

            function find(path, referenceNode) {
              if (!referenceNode) {
                var scene = legacyCC.director.getScene();

                if (!scene) {
                  {
                    warnID(5601);
                  }

                  return null;
                } else if ( !scene.isValid) {
                  warnID(5602);
                  return null;
                }

                referenceNode = scene;
              } else if ( !referenceNode.isValid) {
                warnID(5603);
                return null;
              }

              return referenceNode.getChildByPath(path);
            }
            legacyCC.find = find;

        }
    };
});
