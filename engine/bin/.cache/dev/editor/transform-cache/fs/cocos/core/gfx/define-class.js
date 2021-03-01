"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BufferTextureCopy = exports.TextureCopy = exports.TextureSubres = exports.Extent = exports.Offset = exports.Color = exports.Viewport = exports.Rect = void 0;

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
 * Define gfx global classes here.
 */
class Rect {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(x = 0, y = 0, width = 1, height = 1) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

}

exports.Rect = Rect;

class Viewport {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(left = 0, top = 0, width = 0, height = 0, minDepth = 0, maxDepth = 1) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.minDepth = minDepth;
    this.maxDepth = maxDepth;
  }

}

exports.Viewport = Viewport;

class Color {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

}

exports.Color = Color;

class Offset {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

}

exports.Offset = Offset;

class Extent {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(width = 0, height = 0, depth = 1) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

}

exports.Extent = Extent;

class TextureSubres {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(mipLevel = 0, baseArrayLayer = 0, layerCount = 1) {
    this.mipLevel = mipLevel;
    this.baseArrayLayer = baseArrayLayer;
    this.layerCount = layerCount;
  }

}

exports.TextureSubres = TextureSubres;

class TextureCopy {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(srcSubres = new TextureSubres(), srcOffset = new Offset(), dstSubres = new TextureSubres(), dstOffset = new Offset(), extent = new Extent()) {
    this.srcSubres = srcSubres;
    this.srcOffset = srcOffset;
    this.dstSubres = dstSubres;
    this.dstOffset = dstOffset;
    this.extent = extent;
  }

}

exports.TextureCopy = TextureCopy;

class BufferTextureCopy {
  // to make sure all usages must be an instance of this exact class, not assembled from plain object
  constructor(buffStride = 0, buffTexHeight = 0, texOffset = new Offset(), texExtent = new Extent(), texSubres = new TextureSubres()) {
    this.buffStride = buffStride;
    this.buffTexHeight = buffTexHeight;
    this.texOffset = texOffset;
    this.texExtent = texExtent;
    this.texSubres = texSubres;
  }

}

exports.BufferTextureCopy = BufferTextureCopy;