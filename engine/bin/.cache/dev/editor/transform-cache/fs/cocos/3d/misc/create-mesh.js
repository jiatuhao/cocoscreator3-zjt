"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMesh = createMesh;

var _mesh = require("../assets/mesh.js");

var _define = require("../../core/gfx/define.js");

var _index = require("../../core/gfx/index.js");

var _index2 = require("../../core/math/index.js");

var _buffer = require("./buffer.js");

var _bufferBlob = require("./buffer-blob.js");

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
const _defAttrs = [new _index.Attribute(_define.AttributeName.ATTR_POSITION, _define.Format.RGB32F), new _index.Attribute(_define.AttributeName.ATTR_NORMAL, _define.Format.RGB32F), new _index.Attribute(_define.AttributeName.ATTR_TEX_COORD, _define.Format.RG32F), new _index.Attribute(_define.AttributeName.ATTR_TANGENT, _define.Format.RGBA32F), new _index.Attribute(_define.AttributeName.ATTR_COLOR, _define.Format.RGBA32F)];
const v3_1 = new _index2.Vec3();

function createMesh(geometry, out, options) {
  options = options || {}; // Collect attributes and calculate length of result vertex buffer.

  const attributes = [];
  let stride = 0;
  const channels = [];
  let vertCount = 0;
  let attr;
  const positions = geometry.positions.slice();

  if (positions.length > 0) {
    attr = null;

    if (geometry.attributes) {
      for (const att of geometry.attributes) {
        if (att.name === _define.AttributeName.ATTR_POSITION) {
          attr = att;
          break;
        }
      }
    }

    if (!attr) {
      attr = _defAttrs[0];
    }

    attributes.push(attr);
    const info = _define.FormatInfos[attr.format];
    vertCount = Math.max(vertCount, Math.floor(positions.length / info.count));
    channels.push({
      offset: stride,
      data: positions,
      attribute: attr
    });
    stride += info.size;
  }

  if (geometry.normals && geometry.normals.length > 0) {
    attr = null;

    if (geometry.attributes) {
      for (const att of geometry.attributes) {
        if (att.name === _define.AttributeName.ATTR_NORMAL) {
          attr = att;
          break;
        }
      }
    }

    if (!attr) {
      attr = _defAttrs[1];
    }

    const info = _define.FormatInfos[attr.format];
    attributes.push(attr);
    vertCount = Math.max(vertCount, Math.floor(geometry.normals.length / info.count));
    channels.push({
      offset: stride,
      data: geometry.normals,
      attribute: attr
    });
    stride += info.size;
  }

  if (geometry.uvs && geometry.uvs.length > 0) {
    attr = null;

    if (geometry.attributes) {
      for (const att of geometry.attributes) {
        if (att.name === _define.AttributeName.ATTR_TEX_COORD) {
          attr = att;
          break;
        }
      }
    }

    if (!attr) {
      attr = _defAttrs[2];
    }

    const info = _define.FormatInfos[attr.format];
    attributes.push(attr);
    vertCount = Math.max(vertCount, Math.floor(geometry.uvs.length / info.count));
    channels.push({
      offset: stride,
      data: geometry.uvs,
      attribute: attr
    });
    stride += info.size;
  }

  if (geometry.tangents && geometry.tangents.length > 0) {
    attr = null;

    if (geometry.attributes) {
      for (const att of geometry.attributes) {
        if (att.name === _define.AttributeName.ATTR_TANGENT) {
          attr = att;
          break;
        }
      }
    }

    if (!attr) {
      attr = _defAttrs[3];
    }

    const info = _define.FormatInfos[attr.format];
    attributes.push(attr);
    vertCount = Math.max(vertCount, Math.floor(geometry.tangents.length / info.count));
    channels.push({
      offset: stride,
      data: geometry.tangents,
      attribute: attr
    });
    stride += info.size;
  }

  if (geometry.colors && geometry.colors.length > 0) {
    attr = null;

    if (geometry.attributes) {
      for (const att of geometry.attributes) {
        if (att.name === _define.AttributeName.ATTR_COLOR) {
          attr = att;
          break;
        }
      }
    }

    if (!attr) {
      attr = _defAttrs[4];
    }

    const info = _define.FormatInfos[attr.format];
    attributes.push(attr);
    vertCount = Math.max(vertCount, Math.floor(geometry.colors.length / info.count));
    channels.push({
      offset: stride,
      data: geometry.colors,
      attribute: attr
    });
    stride += info.size;
  }

  if (geometry.customAttributes) {
    for (const ca of geometry.customAttributes) {
      const info = _define.FormatInfos[ca.attr.format];
      attributes.push(ca.attr);
      vertCount = Math.max(vertCount, Math.floor(ca.values.length / info.count));
      channels.push({
        offset: stride,
        data: ca.values,
        attribute: ca.attr
      });
      stride += info.size;
    }
  } // Use this to generate final merged buffer.


  const bufferBlob = new _bufferBlob.BufferBlob(); // Fill vertex buffer.

  const vertexBuffer = new ArrayBuffer(vertCount * stride);
  const vertexBufferView = new DataView(vertexBuffer);

  for (const channel of channels) {
    (0, _buffer.writeBuffer)(vertexBufferView, channel.data, channel.attribute.format, channel.offset, stride);
  }

  bufferBlob.setNextAlignment(0);
  const vertexBundle = {
    attributes,
    view: {
      offset: bufferBlob.getLength(),
      length: vertexBuffer.byteLength,
      count: vertCount,
      stride
    }
  };
  bufferBlob.addBuffer(vertexBuffer); // Fill index buffer.

  let indexBuffer = null;
  let idxCount = 0;
  const idxStride = 2;

  if (geometry.indices) {
    const {
      indices
    } = geometry;
    idxCount = indices.length;
    indexBuffer = new ArrayBuffer(idxStride * idxCount);
    const indexBufferView = new DataView(indexBuffer);
    (0, _buffer.writeBuffer)(indexBufferView, indices, _define.Format.R16UI);
  } // Create primitive.


  const primitive = {
    primitiveMode: geometry.primitiveMode || _define.PrimitiveMode.TRIANGLE_LIST,
    vertexBundelIndices: [0]
  };

  if (indexBuffer) {
    bufferBlob.setNextAlignment(idxStride);
    primitive.indexView = {
      offset: bufferBlob.getLength(),
      length: indexBuffer.byteLength,
      count: idxCount,
      stride: idxStride
    };
    bufferBlob.addBuffer(indexBuffer);
  }

  let minPosition = geometry.minPos;

  if (!minPosition && options.calculateBounds) {
    minPosition = _index2.Vec3.set(new _index2.Vec3(), Infinity, Infinity, Infinity);

    for (let iVertex = 0; iVertex < vertCount; ++iVertex) {
      _index2.Vec3.set(v3_1, positions[iVertex * 3 + 0], positions[iVertex * 3 + 1], positions[iVertex * 3 + 2]);

      _index2.Vec3.min(minPosition, minPosition, v3_1);
    }
  }

  let maxPosition = geometry.maxPos;

  if (!maxPosition && options.calculateBounds) {
    maxPosition = _index2.Vec3.set(new _index2.Vec3(), -Infinity, -Infinity, -Infinity);

    for (let iVertex = 0; iVertex < vertCount; ++iVertex) {
      _index2.Vec3.set(v3_1, positions[iVertex * 3 + 0], positions[iVertex * 3 + 1], positions[iVertex * 3 + 2]);

      _index2.Vec3.max(maxPosition, maxPosition, v3_1);
    }
  } // Create mesh struct.


  const meshStruct = {
    vertexBundles: [vertexBundle],
    primitives: [primitive]
  };

  if (minPosition) {
    meshStruct.minPosition = new _index2.Vec3(minPosition.x, minPosition.y, minPosition.z);
  }

  if (maxPosition) {
    meshStruct.maxPosition = new _index2.Vec3(maxPosition.x, maxPosition.y, maxPosition.z);
  } // Create mesh.


  if (!out) {
    out = new _mesh.Mesh();
  }

  out.reset({
    struct: meshStruct,
    data: new Uint8Array(bufferBlob.getCombined())
  });
  return out;
}