System.register(['./coordinates-converts-utils-fa8f5fc5.js', './find-c704a59e.js', './json-asset-17eaf8ce.js', './create-mesh-4e3ca30e.js', './mesh-dc73eca6.js', './cylinder-380fdfa7.js'], function (exports) {
    'use strict';
    var PrimitiveMode, Vec3, ccenum, ccclass, type, _inheritsLoose, _applyDecoratedDescriptor, legacyCC, _initializerDefineProperty, _assertThisInitialized, serializable, editable, createMesh, Mesh, cylinder;
    return {
        setters: [function (module) {
            PrimitiveMode = module.a7;
            Vec3 = module.cx;
            ccenum = module.d7;
            ccclass = module.dQ;
            type = module.e5;
            _inheritsLoose = module.dR;
            _applyDecoratedDescriptor = module.dT;
            legacyCC = module.l;
            _initializerDefineProperty = module.dU;
            _assertThisInitialized = module.dV;
            serializable = module.dX;
            editable = module.ec;
        }, function () {}, function () {}, function (module) {
            createMesh = module.c;
        }, function (module) {
            Mesh = module.M;
        }, function (module) {
            cylinder = module.c;
        }],
        execute: function () {

            function wireframe(indices) {
              var offsets = [[0, 1], [1, 2], [2, 0]];
              var lines = [];
              var lineIDs = {};

              for (var i = 0; i < indices.length; i += 3) {
                for (var k = 0; k < 3; ++k) {
                  var i1 = indices[i + offsets[k][0]];
                  var i2 = indices[i + offsets[k][1]];
                  var id = i1 > i2 ? i2 << 16 | i1 : i1 << 16 | i2;

                  if (lineIDs[id] === undefined) {
                    lineIDs[id] = 0;
                    lines.push(i1, i2);
                  }
                }
              }

              return lines;
            }
            function invWinding(indices) {
              var newIB = [];

              for (var i = 0; i < indices.length; i += 3) {
                newIB.push(indices[i], indices[i + 2], indices[i + 1]);
              }

              return newIB;
            }
            function toWavefrontOBJ(primitive, scale) {
              if (scale === void 0) {
                scale = 1;
              }

              if (!primitive.indices || !primitive.uvs || !primitive.normals || primitive.primitiveMode !== undefined && primitive.primitiveMode !== PrimitiveMode.TRIANGLE_LIST) {
                return '';
              }

              var v = primitive.positions;
              var t = primitive.uvs;
              var n = primitive.normals;
              var IB = primitive.indices;

              var V = function V(i) {
                return IB[i] + 1 + "/" + (IB[i] + 1) + "/" + (IB[i] + 1);
              };

              var content = '';

              for (var i = 0; i < v.length; i += 3) {
                content += "v " + v[i] * scale + " " + v[i + 1] * scale + " " + v[i + 2] * scale + "\n";
              }

              for (var _i = 0; _i < t.length; _i += 2) {
                content += "vt " + t[_i] + " " + t[_i + 1] + "\n";
              }

              for (var _i2 = 0; _i2 < n.length; _i2 += 3) {
                content += "vn " + n[_i2] + " " + n[_i2 + 1] + " " + n[_i2 + 2] + "\n";
              }

              for (var _i3 = 0; _i3 < IB.length; _i3 += 3) {
                content += "f " + V(_i3) + " " + V(_i3 + 1) + " " + V(_i3 + 2) + "\n";
              }

              return content;
            }
            function normals(positions, nms, length) {
              if (length === void 0) {
                length = 1;
              }

              var verts = new Array(2 * positions.length);

              for (var i = 0; i < positions.length / 3; ++i) {
                var i3 = 3 * i;
                var i6 = 6 * i;
                verts[i6 + 0] = positions[i3 + 0];
                verts[i6 + 1] = positions[i3 + 1];
                verts[i6 + 2] = positions[i3 + 2];
                verts[i6 + 3] = positions[i3 + 0] + nms[i3 + 0] * length;
                verts[i6 + 4] = positions[i3 + 1] + nms[i3 + 1] * length;
                verts[i6 + 5] = positions[i3 + 2] + nms[i3 + 2] * length;
              }

              return verts;
            }

            function applyDefaultGeometryOptions(options) {
              options = options || {};

              if (options.includeNormal === undefined) {
                options.includeNormal = true;
              }

              if (options.includeUV === undefined) {
                options.includeUV = true;
              }

              return options;
            }

            function box(options) {
              options = options || {};
              var ws = options.widthSegments || 1;
              var hs = options.heightSegments || 1;
              var ls = options.lengthSegments || 1;
              var hw = (options.width || 1) / 2;
              var hh = (options.height || 1) / 2;
              var hl = (options.length || 1) / 2;
              var corners = [Vec3.set(c0, -hw, -hh, hl), Vec3.set(c1, hw, -hh, hl), Vec3.set(c2, hw, hh, hl), Vec3.set(c3, -hw, hh, hl), Vec3.set(c4, hw, -hh, -hl), Vec3.set(c5, -hw, -hh, -hl), Vec3.set(c6, -hw, hh, -hl), Vec3.set(c7, hw, hh, -hl)];
              var faceAxes = [[2, 3, 1], [4, 5, 7], [7, 6, 2], [1, 0, 4], [1, 4, 2], [5, 0, 6]];
              var faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
              var faceTangents = [[-1, 0, 0, 1], [-1, 0, 0, 1], [-1, 0, 0, 1], [-1, 0, 0, 1], [0, 0, -1, 1], [0, 0, 1, 1]];
              var positions = [];
              var normals = [];
              var uvs = [];
              var tangents = [];
              var indices = [];
              var minPos = new Vec3(-hw, -hh, -hl);
              var maxPos = new Vec3(hw, hh, hl);
              var boundingRadius = Math.sqrt(hw * hw + hh * hh + hl * hl);

              function _buildPlane(side, uSegments, vSegments) {
                var u;
                var v;
                var ix;
                var iy;
                var offset = positions.length / 3;
                var faceAxe = faceAxes[side];
                var faceNormal = faceNormals[side];
                var faceTangent = faceTangents[side];

                for (iy = 0; iy <= vSegments; iy++) {
                  for (ix = 0; ix <= uSegments; ix++) {
                    u = ix / uSegments;
                    v = iy / vSegments;
                    Vec3.lerp(temp1, corners[faceAxe[0]], corners[faceAxe[1]], u);
                    Vec3.lerp(temp2, corners[faceAxe[0]], corners[faceAxe[2]], v);
                    Vec3.subtract(temp3, temp2, corners[faceAxe[0]]);
                    Vec3.add(r, temp1, temp3);
                    positions.push(r.x, r.y, r.z);
                    normals.push(faceNormal[0], faceNormal[1], faceNormal[2]);
                    uvs.push(u, v);
                    tangents.push(faceTangent[0], faceTangent[1], faceTangent[2], faceTangent[3]);

                    if (ix < uSegments && iy < vSegments) {
                      var useg1 = uSegments + 1;
                      var a = ix + iy * useg1;
                      var b = ix + (iy + 1) * useg1;
                      var c = ix + 1 + (iy + 1) * useg1;
                      var d = ix + 1 + iy * useg1;
                      indices.push(offset + a, offset + d, offset + b);
                      indices.push(offset + b, offset + d, offset + c);
                    }
                  }
                }
              }

              _buildPlane(0, ws, hs);

              _buildPlane(4, ls, hs);

              _buildPlane(1, ws, hs);

              _buildPlane(5, ls, hs);

              _buildPlane(3, ws, ls);

              _buildPlane(2, ws, ls);

              return {
                positions: positions,
                normals: normals,
                uvs: uvs,
                tangents: tangents,
                indices: indices,
                minPos: minPos,
                maxPos: maxPos,
                boundingRadius: boundingRadius
              };
            }
            var temp1 = new Vec3();
            var temp2 = new Vec3();
            var temp3 = new Vec3();
            var r = new Vec3();
            var c0 = new Vec3();
            var c1 = new Vec3();
            var c2 = new Vec3();
            var c3 = new Vec3();
            var c4 = new Vec3();
            var c5 = new Vec3();
            var c6 = new Vec3();
            var c7 = new Vec3();

            function cone(radius, height, opts) {
              if (radius === void 0) {
                radius = 0.5;
              }

              if (height === void 0) {
                height = 1;
              }

              if (opts === void 0) {
                opts = {};
              }

              return cylinder(0, radius, height, opts);
            }

            function applyDefaultPlaneOptions(options) {
              options = applyDefaultGeometryOptions(options);
              options.width = options.width || 10;
              options.length = options.length || 10;
              options.widthSegments = options.widthSegments || 10;
              options.lengthSegments = options.lengthSegments || 10;
              return options;
            }

            var temp1$1 = new Vec3(0, 0, 0);
            var temp2$1 = new Vec3(0, 0, 0);
            var temp3$1 = new Vec3(0, 0, 0);
            var r$1 = new Vec3(0, 0, 0);
            var c00 = new Vec3(0, 0, 0);
            var c10 = new Vec3(0, 0, 0);
            var c01 = new Vec3(0, 0, 0);
            function plane(options) {
              var normalizedOptions = applyDefaultPlaneOptions(options);
              var width = normalizedOptions.width,
                  length = normalizedOptions.length,
                  uSegments = normalizedOptions.widthSegments,
                  vSegments = normalizedOptions.lengthSegments;
              var hw = width * 0.5;
              var hl = length * 0.5;
              var positions = [];
              var uvs = [];
              var indices = [];
              var minPos = new Vec3(-hw, 0, -hl);
              var maxPos = new Vec3(hw, 0, hl);
              var boundingRadius = Math.sqrt(width * width + length * length);
              Vec3.set(c00, -hw, 0, hl);
              Vec3.set(c10, hw, 0, hl);
              Vec3.set(c01, -hw, 0, -hl);

              for (var y = 0; y <= vSegments; y++) {
                for (var x = 0; x <= uSegments; x++) {
                  var u = x / uSegments;
                  var v = y / vSegments;
                  Vec3.lerp(temp1$1, c00, c10, u);
                  Vec3.lerp(temp2$1, c00, c01, v);
                  Vec3.subtract(temp3$1, temp2$1, c00);
                  Vec3.add(r$1, temp1$1, temp3$1);
                  positions.push(r$1.x, r$1.y, r$1.z);

                  if (normalizedOptions.includeUV) {
                    uvs.push(u, v);
                  }

                  if (x < uSegments && y < vSegments) {
                    var useg1 = uSegments + 1;
                    var a = x + y * useg1;
                    var b = x + (y + 1) * useg1;
                    var c = x + 1 + (y + 1) * useg1;
                    var d = x + 1 + y * useg1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }

              var result = {
                positions: positions,
                indices: indices,
                minPos: minPos,
                maxPos: maxPos,
                boundingRadius: boundingRadius
              };

              if (normalizedOptions.includeNormal) {
                var nVertex = (vSegments + 1) * (uSegments + 1);
                var normals = new Array(3 * nVertex);
                result.normals = normals;

                for (var i = 0; i < nVertex; ++i) {
                  normals[i * 3 + 0] = 0;
                  normals[i * 3 + 1] = 1;
                  normals[i * 3 + 2] = 0;
                }
              }

              if (normalizedOptions.includeUV) {
                result.uvs = uvs;
              }

              return result;
            }

            function quad(options) {
              var normalizedOptions = applyDefaultGeometryOptions(options);
              var result = {
                positions: [-0.5, -0.5, 0, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                indices: [0, 3, 1, 3, 2, 1],
                minPos: {
                  x: -0.5,
                  y: -0.5,
                  z: 0
                },
                maxPos: {
                  x: 0.5,
                  y: 0.5,
                  z: 0
                },
                boundingRadius: Math.sqrt(0.5 * 0.5 + 0.5 * 0.5)
              };

              if (normalizedOptions.includeNormal !== false) {
                result.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
              }

              if (normalizedOptions.includeUV !== false) {
                result.uvs = [0, 0, 0, 1, 1, 1, 1, 0];
              }

              return result;
            }

            function sphere(radius, opts) {
              if (radius === void 0) {
                radius = 0.5;
              }

              if (opts === void 0) {
                opts = {};
              }

              var segments = opts.segments !== undefined ? opts.segments : 32;
              var positions = [];
              var normals = [];
              var uvs = [];
              var indices = [];
              var minPos = new Vec3(-radius, -radius, -radius);
              var maxPos = new Vec3(radius, radius, radius);
              var boundingRadius = radius;

              for (var lat = 0; lat <= segments; ++lat) {
                var theta = lat * Math.PI / segments;
                var sinTheta = Math.sin(theta);
                var cosTheta = -Math.cos(theta);

                for (var lon = 0; lon <= segments; ++lon) {
                  var phi = lon * 2 * Math.PI / segments - Math.PI / 2.0;
                  var sinPhi = Math.sin(phi);
                  var cosPhi = Math.cos(phi);
                  var x = sinPhi * sinTheta;
                  var y = cosTheta;
                  var z = cosPhi * sinTheta;
                  var u = lon / segments;
                  var v = lat / segments;
                  positions.push(x * radius, y * radius, z * radius);
                  normals.push(x, y, z);
                  uvs.push(u, v);

                  if (lat < segments && lon < segments) {
                    var seg1 = segments + 1;
                    var a = seg1 * lat + lon;
                    var b = seg1 * (lat + 1) + lon;
                    var c = seg1 * (lat + 1) + lon + 1;
                    var d = seg1 * lat + lon + 1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }

              return {
                positions: positions,
                indices: indices,
                normals: normals,
                uvs: uvs,
                minPos: minPos,
                maxPos: maxPos,
                boundingRadius: boundingRadius
              };
            }

            function torus(radius, tube, opts) {
              if (radius === void 0) {
                radius = 0.4;
              }

              if (tube === void 0) {
                tube = 0.1;
              }

              if (opts === void 0) {
                opts = {};
              }

              var radialSegments = opts.radialSegments || 32;
              var tubularSegments = opts.tubularSegments || 32;
              var arc = opts.arc || 2.0 * Math.PI;
              var positions = [];
              var normals = [];
              var uvs = [];
              var indices = [];
              var minPos = new Vec3(-radius - tube, -tube, -radius - tube);
              var maxPos = new Vec3(radius + tube, tube, radius + tube);
              var boundingRadius = radius + tube;

              for (var j = 0; j <= radialSegments; j++) {
                for (var i = 0; i <= tubularSegments; i++) {
                  var u = i / tubularSegments;
                  var v = j / radialSegments;
                  var u1 = u * arc;
                  var v1 = v * Math.PI * 2;
                  var x = (radius + tube * Math.cos(v1)) * Math.sin(u1);
                  var y = tube * Math.sin(v1);
                  var z = (radius + tube * Math.cos(v1)) * Math.cos(u1);
                  var nx = Math.sin(u1) * Math.cos(v1);
                  var ny = Math.sin(v1);
                  var nz = Math.cos(u1) * Math.cos(v1);
                  positions.push(x, y, z);
                  normals.push(nx, ny, nz);
                  uvs.push(u, v);

                  if (i < tubularSegments && j < radialSegments) {
                    var seg1 = tubularSegments + 1;
                    var a = seg1 * j + i;
                    var b = seg1 * (j + 1) + i;
                    var c = seg1 * (j + 1) + i + 1;
                    var d = seg1 * j + i + 1;
                    indices.push(a, d, b);
                    indices.push(d, c, b);
                  }
                }
              }

              return {
                positions: positions,
                normals: normals,
                uvs: uvs,
                indices: indices,
                minPos: minPos,
                maxPos: maxPos,
                boundingRadius: boundingRadius
              };
            }

            var temp1$2 = new Vec3(0, 0, 0);
            var temp2$2 = new Vec3(0, 0, 0);
            function capsule(radiusTop, radiusBottom, height, opts) {
              if (radiusTop === void 0) {
                radiusTop = 0.5;
              }

              if (radiusBottom === void 0) {
                radiusBottom = 0.5;
              }

              if (height === void 0) {
                height = 2;
              }

              if (opts === void 0) {
                opts = {};
              }

              var torsoHeight = height - radiusTop - radiusBottom;
              var sides = opts.sides || 32;
              var heightSegments = opts.heightSegments || 32;
              var bottomProp = radiusBottom / height;
              var torProp = torsoHeight / height;
              var topProp = radiusTop / height;
              var bottomSegments = Math.floor(heightSegments * bottomProp);
              var topSegments = Math.floor(heightSegments * topProp);
              var torSegments = Math.floor(heightSegments * torProp);
              var topOffset = torsoHeight + radiusBottom - height / 2;
              var torOffset = radiusBottom - height / 2;
              var bottomOffset = radiusBottom - height / 2;
              var arc = opts.arc || 2.0 * Math.PI;
              var positions = [];
              var normals = [];
              var uvs = [];
              var indices = [];
              var maxRadius = Math.max(radiusTop, radiusBottom);
              var minPos = new Vec3(-maxRadius, -height / 2, -maxRadius);
              var maxPos = new Vec3(maxRadius, height / 2, maxRadius);
              var boundingRadius = height / 2;
              var index = 0;
              var indexArray = [];
              generateBottom();
              generateTorso();
              generateTop();
              return {
                positions: positions,
                normals: normals,
                uvs: uvs,
                indices: indices,
                minPos: minPos,
                maxPos: maxPos,
                boundingRadius: boundingRadius
              };

              function generateTorso() {
                var slope = (radiusTop - radiusBottom) / torsoHeight;

                for (var y = 0; y <= torSegments; y++) {
                  var indexRow = [];
                  var lat = y / torSegments;
                  var radius = lat * (radiusTop - radiusBottom) + radiusBottom;

                  for (var x = 0; x <= sides; ++x) {
                    var u = x / sides;
                    var v = lat * torProp + bottomProp;
                    var theta = u * arc - arc / 4;
                    var sinTheta = Math.sin(theta);
                    var cosTheta = Math.cos(theta);
                    positions.push(radius * sinTheta);
                    positions.push(lat * torsoHeight + torOffset);
                    positions.push(radius * cosTheta);
                    Vec3.normalize(temp1$2, Vec3.set(temp2$2, sinTheta, -slope, cosTheta));
                    normals.push(temp1$2.x);
                    normals.push(temp1$2.y);
                    normals.push(temp1$2.z);
                    uvs.push(u, v);
                    indexRow.push(index);
                    ++index;
                  }

                  indexArray.push(indexRow);
                }

                for (var _y = 0; _y < torSegments; ++_y) {
                  for (var _x = 0; _x < sides; ++_x) {
                    var i1 = indexArray[_y][_x];
                    var i2 = indexArray[_y + 1][_x];
                    var i3 = indexArray[_y + 1][_x + 1];
                    var i4 = indexArray[_y][_x + 1];
                    indices.push(i1);
                    indices.push(i4);
                    indices.push(i2);
                    indices.push(i4);
                    indices.push(i3);
                    indices.push(i2);
                  }
                }
              }

              function generateBottom() {
                for (var lat = 0; lat <= bottomSegments; ++lat) {
                  var theta = lat * Math.PI / bottomSegments / 2;
                  var sinTheta = Math.sin(theta);
                  var cosTheta = -Math.cos(theta);

                  for (var lon = 0; lon <= sides; ++lon) {
                    var phi = lon * 2 * Math.PI / sides - Math.PI / 2.0;
                    var sinPhi = Math.sin(phi);
                    var cosPhi = Math.cos(phi);
                    var x = sinPhi * sinTheta;
                    var y = cosTheta;
                    var z = cosPhi * sinTheta;
                    var u = lon / sides;
                    var v = lat / heightSegments;
                    positions.push(x * radiusBottom, y * radiusBottom + bottomOffset, z * radiusBottom);
                    normals.push(x, y, z);
                    uvs.push(u, v);

                    if (lat < bottomSegments && lon < sides) {
                      var seg1 = sides + 1;
                      var a = seg1 * lat + lon;
                      var b = seg1 * (lat + 1) + lon;
                      var c = seg1 * (lat + 1) + lon + 1;
                      var d = seg1 * lat + lon + 1;
                      indices.push(a, d, b);
                      indices.push(d, c, b);
                    }

                    ++index;
                  }
                }
              }

              function generateTop() {
                for (var lat = 0; lat <= topSegments; ++lat) {
                  var theta = lat * Math.PI / topSegments / 2 + Math.PI / 2;
                  var sinTheta = Math.sin(theta);
                  var cosTheta = -Math.cos(theta);

                  for (var lon = 0; lon <= sides; ++lon) {
                    var phi = lon * 2 * Math.PI / sides - Math.PI / 2.0;
                    var sinPhi = Math.sin(phi);
                    var cosPhi = Math.cos(phi);
                    var x = sinPhi * sinTheta;
                    var y = cosTheta;
                    var z = cosPhi * sinTheta;
                    var u = lon / sides;
                    var v = lat / heightSegments + (1 - topProp);
                    positions.push(x * radiusTop, y * radiusTop + topOffset, z * radiusTop);
                    normals.push(x, y, z);
                    uvs.push(u, v);

                    if (lat < topSegments && lon < sides) {
                      var seg1 = sides + 1;
                      var a = seg1 * lat + lon + indexArray[torSegments][sides] + 1;
                      var b = seg1 * (lat + 1) + lon + indexArray[torSegments][sides] + 1;
                      var c = seg1 * (lat + 1) + lon + 1 + indexArray[torSegments][sides] + 1;
                      var d = seg1 * lat + lon + 1 + indexArray[torSegments][sides] + 1;
                      indices.push(a, d, b);
                      indices.push(d, c, b);
                    }
                  }
                }
              }
            }

            function applyDefaultCircleOptions(options) {
              options = applyDefaultGeometryOptions(options);
              options.segments = 64;
              return options;
            }

            function circle(options) {
              var normalizedOptions = applyDefaultCircleOptions(options);
              var segments = normalizedOptions.segments;
              var positions = new Array(3 * (segments + 1));
              positions[0] = 0;
              positions[1] = 0;
              positions[2] = 0;
              var indices = new Array(1 + segments * 2);
              indices[0] = 0;
              var step = Math.PI * 2 / segments;

              for (var iSegment = 0; iSegment < segments; ++iSegment) {
                var angle = step * iSegment;
                var x = Math.cos(angle);
                var y = Math.sin(angle);
                var p = (iSegment + 1) * 3;
                positions[p + 0] = x;
                positions[p + 1] = y;
                positions[p + 2] = 0;
                var i = iSegment * 2;
                indices[1 + i] = iSegment + 1;
                indices[1 + (i + 1)] = iSegment + 2;
              }

              if (segments > 0) {
                indices[indices.length - 1] = 1;
              }

              var result = {
                positions: positions,
                indices: indices,
                minPos: {
                  x: 1,
                  y: 1,
                  z: 0
                },
                maxPos: {
                  x: -1,
                  y: -1,
                  z: 0
                },
                boundingRadius: 1,
                primitiveMode: PrimitiveMode.TRIANGLE_FAN
              };
              return result;
            }

            function translate(geometry, offset) {
              var x = offset.x || 0;
              var y = offset.y || 0;
              var z = offset.z || 0;
              var nVertex = Math.floor(geometry.positions.length / 3);

              for (var iVertex = 0; iVertex < nVertex; ++iVertex) {
                var iX = iVertex * 3;
                var iY = iVertex * 3 + 1;
                var iZ = iVertex * 3 + 2;
                geometry.positions[iX] = geometry.positions[iX] + x;
                geometry.positions[iY] = geometry.positions[iY] + y;
                geometry.positions[iZ] = geometry.positions[iZ] + z;
              }

              if (geometry.minPos) {
                geometry.minPos.x += x;
                geometry.minPos.y += y;
                geometry.minPos.z += z;
              }

              if (geometry.maxPos) {
                geometry.maxPos.x += x;
                geometry.maxPos.y += y;
                geometry.maxPos.z += z;
              }

              return geometry;
            }
            function scale(geometry, value) {
              var x = value.x || 0;
              var y = value.y || 0;
              var z = value.z || 0;
              var nVertex = Math.floor(geometry.positions.length / 3);

              for (var iVertex = 0; iVertex < nVertex; ++iVertex) {
                var iX = iVertex * 3;
                var iY = iVertex * 3 + 1;
                var iZ = iVertex * 3 + 2;
                geometry.positions[iX] *= x;
                geometry.positions[iY] *= y;
                geometry.positions[iZ] *= z;
              }

              if (geometry.minPos) {
                geometry.minPos.x *= x;
                geometry.minPos.y *= y;
                geometry.minPos.z *= z;
              }

              if (geometry.maxPos) {
                geometry.maxPos.x *= x;
                geometry.maxPos.y *= y;
                geometry.maxPos.z *= z;
              }

              geometry.boundingRadius = Math.max(Math.max(x, y), z);
              return geometry;
            }
            function wireframed(geometry) {
              var indices = geometry.indices;

              if (!indices) {
                return geometry;
              }

              if (geometry.primitiveMode && geometry.primitiveMode !== PrimitiveMode.TRIANGLE_LIST) {
                return geometry;
              }

              var offsets = [[0, 1], [1, 2], [2, 0]];
              var lines = [];
              var lineIDs = {};

              for (var i = 0; i < indices.length; i += 3) {
                for (var k = 0; k < 3; ++k) {
                  var i1 = indices[i + offsets[k][0]];
                  var i2 = indices[i + offsets[k][1]];
                  var id = i1 > i2 ? i2 << 16 | i1 : i1 << 16 | i2;

                  if (lineIDs[id] === undefined) {
                    lineIDs[id] = 0;
                    lines.push(i1, i2);
                  }
                }
              }

              geometry.indices = lines;
              geometry.primitiveMode = PrimitiveMode.LINE_LIST;
              return geometry;
            }

            var primitives = /*#__PURE__*/Object.freeze({
                __proto__: null,
                box: box,
                cone: cone,
                cylinder: cylinder,
                plane: plane,
                quad: quad,
                sphere: sphere,
                torus: torus,
                capsule: capsule,
                circle: circle,
                translate: translate,
                scale: scale,
                wireframed: wireframed,
                wireframe: wireframe,
                invWinding: invWinding,
                toWavefrontOBJ: toWavefrontOBJ,
                normals: normals,
                applyDefaultGeometryOptions: applyDefaultGeometryOptions
            });
            exports('primitives', primitives);

            var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp;
            var PrimitiveType;

            (function (PrimitiveType) {
              PrimitiveType[PrimitiveType["BOX"] = 0] = "BOX";
              PrimitiveType[PrimitiveType["SPHERE"] = 1] = "SPHERE";
              PrimitiveType[PrimitiveType["CYLINDER"] = 2] = "CYLINDER";
              PrimitiveType[PrimitiveType["CONE"] = 3] = "CONE";
              PrimitiveType[PrimitiveType["CAPSULE"] = 4] = "CAPSULE";
              PrimitiveType[PrimitiveType["TORUS"] = 5] = "TORUS";
              PrimitiveType[PrimitiveType["PLANE"] = 6] = "PLANE";
              PrimitiveType[PrimitiveType["QUAD"] = 7] = "QUAD";
            })(PrimitiveType || (PrimitiveType = {}));

            ccenum(PrimitiveType);
            var Primitive = exports('Primitive', (_dec = ccclass('cc.Primitive'), _dec2 = type(PrimitiveType), _dec(_class = (_class2 = (_temp = _class3 = function (_Mesh) {
              _inheritsLoose(Primitive, _Mesh);

              function Primitive(type) {
                var _this;

                if (type === void 0) {
                  type = PrimitiveType.BOX;
                }

                _this = _Mesh.call(this) || this;

                _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "info", _descriptor2, _assertThisInitialized(_this));

                _this.type = type;
                return _this;
              }

              var _proto = Primitive.prototype;

              _proto.onLoaded = function onLoaded() {
                createMesh(primitives[PrimitiveType[this.type].toLowerCase()](this.info), this);
              };

              return Primitive;
            }(Mesh), _class3.PrimitiveType = PrimitiveType, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return PrimitiveType.BOX;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "info", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return {};
              }
            })), _class2)) || _class));
            legacyCC.Primitive = Primitive;

            legacyCC.primitives = primitives;

        }
    };
});
