System.register("q-bundled:///fs/cocos/core/gfx/define-class.js", [], function (_export, _context) {
  "use strict";

  var Rect, Viewport, Color, Offset, Extent, TextureSubres, TextureCopy, BufferTextureCopy;
  return {
    setters: [],
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
       * Define gfx global classes here.
       */
      _export("Rect", Rect = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function Rect(x, y, width, height) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        if (width === void 0) {
          width = 1;
        }

        if (height === void 0) {
          height = 1;
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      });

      _export("Viewport", Viewport = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function Viewport(left, top, width, height, minDepth, maxDepth) {
        if (left === void 0) {
          left = 0;
        }

        if (top === void 0) {
          top = 0;
        }

        if (width === void 0) {
          width = 0;
        }

        if (height === void 0) {
          height = 0;
        }

        if (minDepth === void 0) {
          minDepth = 0;
        }

        if (maxDepth === void 0) {
          maxDepth = 1;
        }

        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.minDepth = minDepth;
        this.maxDepth = maxDepth;
      });

      _export("Color", Color = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function Color(x, y, z, w) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        if (z === void 0) {
          z = 0;
        }

        if (w === void 0) {
          w = 0;
        }

        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
      });

      _export("Offset", Offset = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function Offset(x, y, z) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        if (z === void 0) {
          z = 0;
        }

        this.x = x;
        this.y = y;
        this.z = z;
      });

      _export("Extent", Extent = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function Extent(width, height, depth) {
        if (width === void 0) {
          width = 0;
        }

        if (height === void 0) {
          height = 0;
        }

        if (depth === void 0) {
          depth = 1;
        }

        this.width = width;
        this.height = height;
        this.depth = depth;
      });

      _export("TextureSubres", TextureSubres = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function TextureSubres(mipLevel, baseArrayLayer, layerCount) {
        if (mipLevel === void 0) {
          mipLevel = 0;
        }

        if (baseArrayLayer === void 0) {
          baseArrayLayer = 0;
        }

        if (layerCount === void 0) {
          layerCount = 1;
        }

        this.mipLevel = mipLevel;
        this.baseArrayLayer = baseArrayLayer;
        this.layerCount = layerCount;
      });

      _export("TextureCopy", TextureCopy = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function TextureCopy(srcSubres, srcOffset, dstSubres, dstOffset, extent) {
        if (srcSubres === void 0) {
          srcSubres = new TextureSubres();
        }

        if (srcOffset === void 0) {
          srcOffset = new Offset();
        }

        if (dstSubres === void 0) {
          dstSubres = new TextureSubres();
        }

        if (dstOffset === void 0) {
          dstOffset = new Offset();
        }

        if (extent === void 0) {
          extent = new Extent();
        }

        this.srcSubres = srcSubres;
        this.srcOffset = srcOffset;
        this.dstSubres = dstSubres;
        this.dstOffset = dstOffset;
        this.extent = extent;
      });

      _export("BufferTextureCopy", BufferTextureCopy = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function BufferTextureCopy(buffStride, buffTexHeight, texOffset, texExtent, texSubres) {
        if (buffStride === void 0) {
          buffStride = 0;
        }

        if (buffTexHeight === void 0) {
          buffTexHeight = 0;
        }

        if (texOffset === void 0) {
          texOffset = new Offset();
        }

        if (texExtent === void 0) {
          texExtent = new Extent();
        }

        if (texSubres === void 0) {
          texSubres = new TextureSubres();
        }

        this.buffStride = buffStride;
        this.buffTexHeight = buffTexHeight;
        this.texOffset = texOffset;
        this.texExtent = texExtent;
        this.texSubres = texSubres;
      });
    }
  };
});