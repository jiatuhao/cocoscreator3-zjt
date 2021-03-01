System.register("q-bundled:///fs/cocos/core/gfx/device.js", ["../value-types/enum.js", "./define.js"], function (_export, _context) {
  "use strict";

  var ccenum, API, Feature, Format, MemoryStatus, SurfaceTransform, BindingMappingInfo, DeviceInfo, Device;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_valueTypesEnumJs) {
      ccenum = _valueTypesEnumJs.ccenum;
    }, function (_defineJs) {
      API = _defineJs.API;
      Feature = _defineJs.Feature;
      Format = _defineJs.Format;
      MemoryStatus = _defineJs.MemoryStatus;
      SurfaceTransform = _defineJs.SurfaceTransform;
    }],
    execute: function () {
      ccenum(Format);

      _export("BindingMappingInfo", BindingMappingInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function BindingMappingInfo(bufferOffsets, samplerOffsets, flexibleSet) {
        if (bufferOffsets === void 0) {
          bufferOffsets = [];
        }

        if (samplerOffsets === void 0) {
          samplerOffsets = [];
        }

        if (flexibleSet === void 0) {
          flexibleSet = 0;
        }

        this.bufferOffsets = bufferOffsets;
        this.samplerOffsets = samplerOffsets;
        this.flexibleSet = flexibleSet;
      });

      _export("DeviceInfo", DeviceInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function DeviceInfo(canvasElm, isAntialias, isPremultipliedAlpha, devicePixelRatio, nativeWidth, nativeHeight, bindingMappingInfo) {
        if (isAntialias === void 0) {
          isAntialias = true;
        }

        if (isPremultipliedAlpha === void 0) {
          isPremultipliedAlpha = true;
        }

        if (devicePixelRatio === void 0) {
          devicePixelRatio = 1;
        }

        if (nativeWidth === void 0) {
          nativeWidth = 1;
        }

        if (nativeHeight === void 0) {
          nativeHeight = 1;
        }

        if (bindingMappingInfo === void 0) {
          bindingMappingInfo = new BindingMappingInfo();
        }

        this.canvasElm = canvasElm;
        this.isAntialias = isAntialias;
        this.isPremultipliedAlpha = isPremultipliedAlpha;
        this.devicePixelRatio = devicePixelRatio;
        this.nativeWidth = nativeWidth;
        this.nativeHeight = nativeHeight;
        this.bindingMappingInfo = bindingMappingInfo;
      });
      /**
       * @en GFX Device.
       * @zh GFX 设备。
       */


      _export("Device", Device = /*#__PURE__*/function () {
        function Device() {
          this._canvas = null;
          this._canvas2D = null;
          this._gfxAPI = API.UNKNOWN;
          this._transform = SurfaceTransform.IDENTITY;
          this._deviceName = '';
          this._renderer = '';
          this._vendor = '';
          this._version = '';
          this._features = new Array(Feature.COUNT);
          this._queue = null;
          this._cmdBuff = null;
          this._devicePixelRatio = 1.0;
          this._width = 0;
          this._height = 0;
          this._nativeWidth = 0;
          this._nativeHeight = 0;
          this._maxVertexAttributes = 0;
          this._maxVertexUniformVectors = 0;
          this._maxFragmentUniformVectors = 0;
          this._maxTextureUnits = 0;
          this._maxVertexTextureUnits = 0;
          this._maxUniformBufferBindings = 0;
          this._maxUniformBlockSize = 0;
          this._maxTextureSize = 0;
          this._maxCubeMapTextureSize = 0;
          this._uboOffsetAlignment = 1;
          this._depthBits = 0;
          this._stencilBits = 0;
          this._colorFmt = Format.UNKNOWN;
          this._depthStencilFmt = Format.UNKNOWN;
          this._macros = new Map();
          this._numDrawCalls = 0;
          this._numInstances = 0;
          this._numTris = 0;
          this._memoryStatus = new MemoryStatus();
          this._clipSpaceMinZ = -1;
          this._screenSpaceSignY = 1;
          this._UVSpaceSignY = -1;
        }

        var _proto = Device.prototype;

        /**
         * @en Whether the device has specific feature.
         * @zh 是否具备特性。
         * @param feature The GFX feature to be queried.
         */
        _proto.hasFeature = function hasFeature(feature) {
          return this._features[feature];
        };

        _createClass(Device, [{
          key: "canvas",

          /**
           * @en The HTML canvas element.
           * @zh HTML 画布。
           */
          get: function get() {
            return this._canvas;
          }
          /**
           * @en The HTML canvas element for 2D rendering.
           * @zh 用于 2D 绘制的 HTML 画布。
           */

        }, {
          key: "canvas2D",
          get: function get() {
            return this._canvas2D;
          }
          /**
           * @en Current rendering API.
           * @zh 当前 GFX 使用的渲染 API。
           */

        }, {
          key: "gfxAPI",
          get: function get() {
            return this._gfxAPI;
          }
          /**
           * @en GFX default queue.
           * @zh GFX 默认队列。
           */

        }, {
          key: "queue",
          get: function get() {
            return this._queue;
          }
          /**
           * @en GFX default command buffer.
           * @zh GFX 默认命令缓冲。
           */

        }, {
          key: "commandBuffer",
          get: function get() {
            return this._cmdBuff;
          }
          /**
           * @en Device pixel ratio.
           * @zh DPR 设备像素比。
           */

        }, {
          key: "devicePixelRatio",
          get: function get() {
            return this._devicePixelRatio;
          }
          /**
           * @en Device pixel width.
           * @zh 设备像素宽度。
           */

        }, {
          key: "width",
          get: function get() {
            return this._width;
          }
          /**
           * @en Device pixel height.
           * @zh 设备像素高度。
           */

        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
          /**
           * @en Device native width.
           * @zh 设备原生的像素宽度。
           */

        }, {
          key: "nativeWidth",
          get: function get() {
            return this._nativeWidth;
          }
          /**
           * @en Device native height.
           * @zh 设备原生的像素高度。
           */

        }, {
          key: "nativeHeight",
          get: function get() {
            return this._nativeHeight;
          }
          /**
           * @en Renderer description.
           * @zh 渲染器描述。
           */

        }, {
          key: "renderer",
          get: function get() {
            return this._renderer;
          }
          /**
           * @en Vendor description.
           * @zh 厂商描述。
           */

        }, {
          key: "vendor",
          get: function get() {
            return this._vendor;
          }
          /**
           * @en Max vertex attributes supported.
           * @zh 最大顶点属性数量。
           */

        }, {
          key: "maxVertexAttributes",
          get: function get() {
            return this._maxVertexAttributes;
          }
          /**
           * @en Max vertex uniform vectors supported.
           * @zh 最大顶点Uniform向量数。
           */

        }, {
          key: "maxVertexUniformVectors",
          get: function get() {
            return this._maxVertexUniformVectors;
          }
          /**
           * @en Max fragment uniform vectors supported.
           * @zh 最大片段Uniform向量数。
           */

        }, {
          key: "maxFragmentUniformVectors",
          get: function get() {
            return this._maxFragmentUniformVectors;
          }
          /**
           * @en Max texture units supported.
           * @zh 最大纹理单元数量。
           */

        }, {
          key: "maxTextureUnits",
          get: function get() {
            return this._maxTextureUnits;
          }
          /**
           * @en Max vertex texture units supported.
           * @zh 最大顶点纹理单元数量。
           */

        }, {
          key: "maxVertexTextureUnits",
          get: function get() {
            return this._maxVertexTextureUnits;
          }
          /**
           * @en Max uniform buffer bindings supported.
           * @zh 最大 uniform 缓冲绑定数量。
           */

        }, {
          key: "maxUniformBufferBindings",
          get: function get() {
            return this._maxUniformBufferBindings;
          }
          /**
           * @en Max uniform block size supported.
           * @zh 最大 uniform 缓冲大小。
           */

        }, {
          key: "maxUniformBlockSize",
          get: function get() {
            return this._maxUniformBlockSize;
          }
          /**
           * @en Max texture size supported.
           * @zh 最大贴图尺寸。
           */

        }, {
          key: "maxTextureSize",
          get: function get() {
            return this._maxTextureSize;
          }
          /**
           * @en Max cube map texture size supported.
           * @zh 最大立方贴图尺寸。
           */

        }, {
          key: "maxCubeMapTextureSize",
          get: function get() {
            return this._maxCubeMapTextureSize;
          }
          /**
           * @en Uniform buffer offset alignment.
           * @zh Uniform 缓冲偏移量的对齐单位。
           */

        }, {
          key: "uboOffsetAlignment",
          get: function get() {
            return this._uboOffsetAlignment;
          }
          /**
           * @en Device depth bits.
           * @zh 深度位数。
           */

        }, {
          key: "depthBits",
          get: function get() {
            return this._depthBits;
          }
          /**
           * @en Device stencil bits.
           * @zh 模板位数。
           */

        }, {
          key: "stencilBits",
          get: function get() {
            return this._stencilBits;
          }
          /**
           * @en Device color format.
           * @zh 颜色格式。
           */

        }, {
          key: "colorFormat",
          get: function get() {
            return this._colorFmt;
          }
          /**
           * @en Device depth stencil format.
           * @zh 深度模板格式。
           */

        }, {
          key: "depthStencilFormat",
          get: function get() {
            return this._depthStencilFmt;
          }
          /**
           * @en Device built-in macros.
           * @zh 系统宏定义。
           */

        }, {
          key: "macros",
          get: function get() {
            return this._macros;
          }
          /**
           * @en Number of draw calls currently recorded.
           * @zh 绘制调用次数。
           */

        }, {
          key: "numDrawCalls",
          get: function get() {
            return this._numDrawCalls;
          }
          /**
           * @en Number of instances currently recorded.
           * @zh 绘制 Instance 数量。
           */

        }, {
          key: "numInstances",
          get: function get() {
            return this._numInstances;
          }
          /**
           * @en Number of triangles currently recorded.
           * @zh 渲染三角形数量。
           */

        }, {
          key: "numTris",
          get: function get() {
            return this._numTris;
          }
          /**
           * @en Total memory size currently allocated.
           * @zh 内存状态。
           */

        }, {
          key: "memoryStatus",
          get: function get() {
            return this._memoryStatus;
          }
          /**
           * @en The minimum Z value in clip space for the device.
           * @zh 裁剪空间的最小 z 值。
           */

        }, {
          key: "clipSpaceMinZ",
          get: function get() {
            return this._clipSpaceMinZ;
          }
          /**
           * @en The sign of the screen space Y axis, positive if origin at lower-left.
           * @zh 屏幕空间的 y 轴符号，原点在左下角时为正。
           */

        }, {
          key: "screenSpaceSignY",
          get: function get() {
            return this._screenSpaceSignY;
          }
          /**
           * @en The sign of the UV space Y axis, positive if origin at upper-left.
           * @zh UV 空间的 y 轴符号，原点在左上角时为正。
           */

        }, {
          key: "UVSpaceSignY",
          get: function get() {
            return this._UVSpaceSignY;
          }
          /**
           * @en The surface transform to be applied in projection matrices.
           * @zh 需要在投影矩阵中应用的表面变换。
           */

        }, {
          key: "surfaceTransform",
          get: function get() {
            return this._transform;
          }
        }]);

        return Device;
      }());
    }
  };
});