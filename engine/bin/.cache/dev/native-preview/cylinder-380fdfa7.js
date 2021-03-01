System.register(['./coordinates-converts-utils-fa8f5fc5.js'], function (exports) {
  'use strict';
  var Vec3;
  return {
    setters: [function (module) {
      Vec3 = module.cx;
    }],
    execute: function () {

      exports('c', cylinder);

      var temp1 = new Vec3(0, 0, 0);
      var temp2 = new Vec3(0, 0, 0);
      function cylinder(radiusTop, radiusBottom, height, opts) {
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

        var halfHeight = height * 0.5;
        var radialSegments = opts.radialSegments || 32;
        var heightSegments = opts.heightSegments || 1;
        var capped = opts.capped !== undefined ? opts.capped : true;
        var arc = opts.arc || 2.0 * Math.PI;
        var cntCap = 0;

        if (!capped) {
          if (radiusTop > 0) {
            cntCap++;
          }

          if (radiusBottom > 0) {
            cntCap++;
          }
        }

        var vertCount = (radialSegments + 1) * (heightSegments + 1);

        if (capped) {
          vertCount += (radialSegments + 1) * cntCap + radialSegments * cntCap;
        }

        var indexCount = radialSegments * heightSegments * 2 * 3;

        if (capped) {
          indexCount += radialSegments * cntCap * 3;
        }

        var indices = new Array(indexCount);
        var positions = new Array(vertCount * 3);
        var normals = new Array(vertCount * 3);
        var uvs = new Array(vertCount * 2);
        var maxRadius = Math.max(radiusTop, radiusBottom);
        var minPos = new Vec3(-maxRadius, -halfHeight, -maxRadius);
        var maxPos = new Vec3(maxRadius, halfHeight, maxRadius);
        var boundingRadius = Math.sqrt(maxRadius * maxRadius + halfHeight * halfHeight);
        var index = 0;
        var indexOffset = 0;
        generateTorso();

        if (capped) {
          if (radiusBottom > 0) {
            generateCap(false);
          }

          if (radiusTop > 0) {
            generateCap(true);
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

        function generateTorso() {
          var indexArray = [];
          var r = radiusTop - radiusBottom;
          var slope = r * r / height * Math.sign(r);

          for (var y = 0; y <= heightSegments; y++) {
            var indexRow = [];
            var v = y / heightSegments;
            var radius = v * r + radiusBottom;

            for (var x = 0; x <= radialSegments; ++x) {
              var u = x / radialSegments;
              var theta = u * arc;
              var sinTheta = Math.sin(theta);
              var cosTheta = Math.cos(theta);
              positions[3 * index] = radius * sinTheta;
              positions[3 * index + 1] = v * height - halfHeight;
              positions[3 * index + 2] = radius * cosTheta;
              Vec3.normalize(temp1, Vec3.set(temp2, sinTheta, -slope, cosTheta));
              normals[3 * index] = temp1.x;
              normals[3 * index + 1] = temp1.y;
              normals[3 * index + 2] = temp1.z;
              uvs[2 * index] = (1 - u) * 2 % 1;
              uvs[2 * index + 1] = v;
              indexRow.push(index);
              ++index;
            }

            indexArray.push(indexRow);
          }

          for (var _y = 0; _y < heightSegments; ++_y) {
            for (var _x = 0; _x < radialSegments; ++_x) {
              var i1 = indexArray[_y][_x];
              var i2 = indexArray[_y + 1][_x];
              var i3 = indexArray[_y + 1][_x + 1];
              var i4 = indexArray[_y][_x + 1];
              indices[indexOffset] = i1;
              ++indexOffset;
              indices[indexOffset] = i4;
              ++indexOffset;
              indices[indexOffset] = i2;
              ++indexOffset;
              indices[indexOffset] = i4;
              ++indexOffset;
              indices[indexOffset] = i3;
              ++indexOffset;
              indices[indexOffset] = i2;
              ++indexOffset;
            }
          }
        }

        function generateCap(top) {
          var radius = top ? radiusTop : radiusBottom;
          var sign = top ? 1 : -1;
          var centerIndexStart = index;

          for (var x = 1; x <= radialSegments; ++x) {
            positions[3 * index] = 0;
            positions[3 * index + 1] = halfHeight * sign;
            positions[3 * index + 2] = 0;
            normals[3 * index] = 0;
            normals[3 * index + 1] = sign;
            normals[3 * index + 2] = 0;
            uvs[2 * index] = 0.5;
            uvs[2 * index + 1] = 0.5;
            ++index;
          }

          var centerIndexEnd = index;

          for (var _x2 = 0; _x2 <= radialSegments; ++_x2) {
            var u = _x2 / radialSegments;
            var theta = u * arc;
            var cosTheta = Math.cos(theta);
            var sinTheta = Math.sin(theta);
            positions[3 * index] = radius * sinTheta;
            positions[3 * index + 1] = halfHeight * sign;
            positions[3 * index + 2] = radius * cosTheta;
            normals[3 * index] = 0;
            normals[3 * index + 1] = sign;
            normals[3 * index + 2] = 0;
            uvs[2 * index] = 0.5 - sinTheta * 0.5 * sign;
            uvs[2 * index + 1] = 0.5 + cosTheta * 0.5;
            ++index;
          }

          for (var _x3 = 0; _x3 < radialSegments; ++_x3) {
            var c = centerIndexStart + _x3;
            var i = centerIndexEnd + _x3;

            if (top) {
              indices[indexOffset] = i + 1;
              ++indexOffset;
              indices[indexOffset] = c;
              ++indexOffset;
              indices[indexOffset] = i;
              ++indexOffset;
            } else {
              indices[indexOffset] = c;
              ++indexOffset;
              indices[indexOffset] = i + 1;
              ++indexOffset;
              indices[indexOffset] = i;
              ++indexOffset;
            }
          }
        }
      }

    }
  };
});
