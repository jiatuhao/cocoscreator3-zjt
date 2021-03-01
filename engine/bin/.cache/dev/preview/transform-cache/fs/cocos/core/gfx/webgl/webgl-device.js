System.register("q-bundled:///fs/cocos/core/gfx/webgl/webgl-device.js", ["../../../../../virtual/internal%253Aconstants.js", "../../platform/index.js", "../../platform/sys.js", "../command-buffer.js", "../device.js", "../queue.js", "../texture.js", "./webgl-descriptor-set.js", "./webgl-buffer.js", "./webgl-command-allocator.js", "./webgl-command-buffer.js", "./webgl-fence.js", "./webgl-framebuffer.js", "./webgl-input-assembler.js", "./webgl-descriptor-set-layout.js", "./webgl-pipeline-layout.js", "./webgl-pipeline-state.js", "./webgl-primary-command-buffer.js", "./webgl-queue.js", "./webgl-render-pass.js", "./webgl-sampler.js", "./webgl-shader.js", "./webgl-state-cache.js", "./webgl-texture.js", "../define.js", "../define-class.js", "./webgl-commands.js"], function (_export, _context) {
  "use strict";

  var ALIPAY, RUNTIME_BASED, BYTEDANCE, WECHAT, LINKSURE, QTT, COCOSPLAY, HUAWEI, macro, warnID, warn, sys, CommandBufferInfo, Device, BindingMappingInfo, QueueInfo, TextureInfo, WebGLDescriptorSet, WebGLBuffer, WebGLCommandAllocator, WebGLCommandBuffer, WebGLFence, WebGLFramebuffer, WebGLInputAssembler, WebGLDescriptorSetLayout, WebGLPipelineLayout, WebGLPipelineState, WebGLPrimaryCommandBuffer, WebGLQueue, WebGLRenderPass, WebGLSampler, WebGLShader, WebGLStateCache, WebGLTexture, getTypedArrayConstructor, CommandBufferType, Format, FormatInfos, QueueType, TextureFlagBit, TextureType, TextureUsageBit, API, Feature, BufferTextureCopy, GFXFormatToWebGLFormat, GFXFormatToWebGLType, WebGLCmdFuncCopyBuffersToTexture, WebGLCmdFuncCopyTexImagesToTexture, eventWebGLContextLost, WebGLDevice;

  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      ALIPAY = _virtualInternal253AconstantsJs.ALIPAY;
      RUNTIME_BASED = _virtualInternal253AconstantsJs.RUNTIME_BASED;
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
      WECHAT = _virtualInternal253AconstantsJs.WECHAT;
      LINKSURE = _virtualInternal253AconstantsJs.LINKSURE;
      QTT = _virtualInternal253AconstantsJs.QTT;
      COCOSPLAY = _virtualInternal253AconstantsJs.COCOSPLAY;
      HUAWEI = _virtualInternal253AconstantsJs.HUAWEI;
    }, function (_platformIndexJs) {
      macro = _platformIndexJs.macro;
      warnID = _platformIndexJs.warnID;
      warn = _platformIndexJs.warn;
    }, function (_platformSysJs) {
      sys = _platformSysJs.sys;
    }, function (_commandBufferJs) {
      CommandBufferInfo = _commandBufferJs.CommandBufferInfo;
    }, function (_deviceJs) {
      Device = _deviceJs.Device;
      BindingMappingInfo = _deviceJs.BindingMappingInfo;
    }, function (_queueJs) {
      QueueInfo = _queueJs.QueueInfo;
    }, function (_textureJs) {
      TextureInfo = _textureJs.TextureInfo;
    }, function (_webglDescriptorSetJs) {
      WebGLDescriptorSet = _webglDescriptorSetJs.WebGLDescriptorSet;
    }, function (_webglBufferJs) {
      WebGLBuffer = _webglBufferJs.WebGLBuffer;
    }, function (_webglCommandAllocatorJs) {
      WebGLCommandAllocator = _webglCommandAllocatorJs.WebGLCommandAllocator;
    }, function (_webglCommandBufferJs) {
      WebGLCommandBuffer = _webglCommandBufferJs.WebGLCommandBuffer;
    }, function (_webglFenceJs) {
      WebGLFence = _webglFenceJs.WebGLFence;
    }, function (_webglFramebufferJs) {
      WebGLFramebuffer = _webglFramebufferJs.WebGLFramebuffer;
    }, function (_webglInputAssemblerJs) {
      WebGLInputAssembler = _webglInputAssemblerJs.WebGLInputAssembler;
    }, function (_webglDescriptorSetLayoutJs) {
      WebGLDescriptorSetLayout = _webglDescriptorSetLayoutJs.WebGLDescriptorSetLayout;
    }, function (_webglPipelineLayoutJs) {
      WebGLPipelineLayout = _webglPipelineLayoutJs.WebGLPipelineLayout;
    }, function (_webglPipelineStateJs) {
      WebGLPipelineState = _webglPipelineStateJs.WebGLPipelineState;
    }, function (_webglPrimaryCommandBufferJs) {
      WebGLPrimaryCommandBuffer = _webglPrimaryCommandBufferJs.WebGLPrimaryCommandBuffer;
    }, function (_webglQueueJs) {
      WebGLQueue = _webglQueueJs.WebGLQueue;
    }, function (_webglRenderPassJs) {
      WebGLRenderPass = _webglRenderPassJs.WebGLRenderPass;
    }, function (_webglSamplerJs) {
      WebGLSampler = _webglSamplerJs.WebGLSampler;
    }, function (_webglShaderJs) {
      WebGLShader = _webglShaderJs.WebGLShader;
    }, function (_webglStateCacheJs) {
      WebGLStateCache = _webglStateCacheJs.WebGLStateCache;
    }, function (_webglTextureJs) {
      WebGLTexture = _webglTextureJs.WebGLTexture;
    }, function (_defineJs) {
      getTypedArrayConstructor = _defineJs.getTypedArrayConstructor;
      CommandBufferType = _defineJs.CommandBufferType;
      Format = _defineJs.Format;
      FormatInfos = _defineJs.FormatInfos;
      QueueType = _defineJs.QueueType;
      TextureFlagBit = _defineJs.TextureFlagBit;
      TextureType = _defineJs.TextureType;
      TextureUsageBit = _defineJs.TextureUsageBit;
      API = _defineJs.API;
      Feature = _defineJs.Feature;
    }, function (_defineClassJs) {
      BufferTextureCopy = _defineClassJs.BufferTextureCopy;
    }, function (_webglCommandsJs) {
      GFXFormatToWebGLFormat = _webglCommandsJs.GFXFormatToWebGLFormat;
      GFXFormatToWebGLType = _webglCommandsJs.GFXFormatToWebGLType;
      WebGLCmdFuncCopyBuffersToTexture = _webglCommandsJs.WebGLCmdFuncCopyBuffersToTexture;
      WebGLCmdFuncCopyTexImagesToTexture = _webglCommandsJs.WebGLCmdFuncCopyTexImagesToTexture;
    }],
    execute: function () {
      eventWebGLContextLost = 'webglcontextlost';

      _export("WebGLDevice", WebGLDevice = /*#__PURE__*/function (_Device) {
        _inheritsLoose(WebGLDevice, _Device);

        function WebGLDevice() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Device.call.apply(_Device, [this].concat(args)) || this;
          _this.stateCache = new WebGLStateCache();
          _this.cmdAllocator = new WebGLCommandAllocator();
          _this.nullTex2D = null;
          _this.nullTexCube = null;
          _this._webGLRC = null;
          _this._isAntialias = true;
          _this._isPremultipliedAlpha = true;
          _this._useVAO = false;
          _this._destroyShadersImmediately = true;
          _this._noCompressedTexSubImage2D = false;
          _this._bindingMappingInfo = new BindingMappingInfo();
          _this._webGLContextLostHandler = null;
          _this._extensions = null;
          _this._EXT_texture_filter_anisotropic = null;
          _this._EXT_blend_minmax = null;
          _this._EXT_frag_depth = null;
          _this._EXT_shader_texture_lod = null;
          _this._EXT_sRGB = null;
          _this._OES_vertex_array_object = null;
          _this._EXT_color_buffer_half_float = null;
          _this._WEBGL_color_buffer_float = null;
          _this._WEBGL_compressed_texture_etc1 = null;
          _this._WEBGL_compressed_texture_etc = null;
          _this._WEBGL_compressed_texture_pvrtc = null;
          _this._WEBGL_compressed_texture_astc = null;
          _this._WEBGL_compressed_texture_s3tc = null;
          _this._WEBGL_compressed_texture_s3tc_srgb = null;
          _this._WEBGL_debug_shaders = null;
          _this._WEBGL_draw_buffers = null;
          _this._WEBGL_lose_context = null;
          _this._WEBGL_depth_texture = null;
          _this._WEBGL_debug_renderer_info = null;
          _this._OES_texture_half_float = null;
          _this._OES_texture_half_float_linear = null;
          _this._OES_texture_float = null;
          _this._OES_texture_float_linear = null;
          _this._OES_standard_derivatives = null;
          _this._OES_element_index_uint = null;
          _this._ANGLE_instanced_arrays = null;
          return _this;
        }

        var _proto = WebGLDevice.prototype;

        _proto.initialize = function initialize(info) {
          this._canvas = info.canvasElm;
          this._isAntialias = info.isAntialias;
          this._isPremultipliedAlpha = info.isPremultipliedAlpha;
          this._bindingMappingInfo = info.bindingMappingInfo;
          if (!this._bindingMappingInfo.bufferOffsets.length) this._bindingMappingInfo.bufferOffsets.push(0);
          if (!this._bindingMappingInfo.samplerOffsets.length) this._bindingMappingInfo.samplerOffsets.push(0);

          try {
            var webGLCtxAttribs = {
              alpha: macro.ENABLE_TRANSPARENT_CANVAS,
              antialias: this._isAntialias,
              depth: true,
              stencil: true,
              premultipliedAlpha: this._isPremultipliedAlpha,
              preserveDrawingBuffer: false,
              powerPreference: 'default',
              failIfMajorPerformanceCaveat: false
            };
            /*
            if (WECHAT) {
                webGLCtxAttribs.preserveDrawingBuffer = true;
            }
            */

            this._webGLRC = this._canvas.getContext('webgl', webGLCtxAttribs);
          } catch (err) {
            console.error(err);
            return false;
          }

          if (!this._webGLRC) {
            console.error('This device does not support WebGL.');
            return false;
          }

          this._webGLContextLostHandler = this._onWebGLContextLost.bind(this);

          this._canvas.addEventListener(eventWebGLContextLost, this._onWebGLContextLost);

          this._canvas2D = document.createElement('canvas');
          console.info('WebGL device initialized.');
          this._gfxAPI = API.WEBGL;
          this._deviceName = 'WebGL';
          var gl = this._webGLRC;
          this._WEBGL_debug_renderer_info = this.getExtension('WEBGL_debug_renderer_info');

          if (this._WEBGL_debug_renderer_info) {
            this._renderer = gl.getParameter(this._WEBGL_debug_renderer_info.UNMASKED_RENDERER_WEBGL);
            this._vendor = gl.getParameter(this._WEBGL_debug_renderer_info.UNMASKED_VENDOR_WEBGL);
          } else {
            this._renderer = gl.getParameter(gl.RENDERER);
            this._vendor = gl.getParameter(gl.VENDOR);
          }

          this._version = gl.getParameter(gl.VERSION);
          this._maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
          this._maxVertexUniformVectors = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
          this._maxFragmentUniformVectors = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
          this._maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
          this._maxVertexTextureUnits = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
          this._maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
          this._maxCubeMapTextureSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
          this._depthBits = gl.getParameter(gl.DEPTH_BITS);
          this._stencilBits = gl.getParameter(gl.STENCIL_BITS);
          this.stateCache.initialize(this._maxTextureUnits, this._maxVertexAttributes);

          if (ALIPAY) {
            this._depthBits = 24;
          }

          this._devicePixelRatio = info.devicePixelRatio || 1.0;
          this._width = this._canvas.width;
          this._height = this._canvas.height;
          this._nativeWidth = Math.max(info.nativeWidth || this._width, 0);
          this._nativeHeight = Math.max(info.nativeHeight || this._height, 0);
          this._colorFmt = Format.RGBA8;

          if (this._depthBits === 24) {
            if (this._stencilBits === 8) {
              this._depthStencilFmt = Format.D24S8;
            } else {
              this._depthStencilFmt = Format.D24;
            }
          } else if (this._stencilBits === 8) {
            this._depthStencilFmt = Format.D16S8;
          } else {
            this._depthStencilFmt = Format.D16;
          }

          this._extensions = gl.getSupportedExtensions();
          var extensions = '';

          if (this._extensions) {
            for (var _iterator = _createForOfIteratorHelperLoose(this._extensions), _step; !(_step = _iterator()).done;) {
              var ext = _step.value;
              extensions += ext + " ";
            }

            console.debug("EXTENSIONS: " + extensions);
          }

          this._EXT_texture_filter_anisotropic = this.getExtension('EXT_texture_filter_anisotropic');
          this._EXT_blend_minmax = this.getExtension('EXT_blend_minmax');
          this._EXT_frag_depth = this.getExtension('EXT_frag_depth');
          this._EXT_shader_texture_lod = this.getExtension('EXT_shader_texture_lod');
          this._EXT_sRGB = this.getExtension('EXT_sRGB');
          this._OES_vertex_array_object = this.getExtension('OES_vertex_array_object');
          this._EXT_color_buffer_half_float = this.getExtension('EXT_color_buffer_half_float');
          this._WEBGL_color_buffer_float = this.getExtension('WEBGL_color_buffer_float');
          this._WEBGL_compressed_texture_etc1 = this.getExtension('WEBGL_compressed_texture_etc1');
          this._WEBGL_compressed_texture_etc = this.getExtension('WEBGL_compressed_texture_etc');
          this._WEBGL_compressed_texture_pvrtc = this.getExtension('WEBGL_compressed_texture_pvrtc');
          this._WEBGL_compressed_texture_s3tc = this.getExtension('WEBGL_compressed_texture_s3tc');
          this._WEBGL_compressed_texture_s3tc_srgb = this.getExtension('WEBGL_compressed_texture_s3tc_srgb');
          this._WEBGL_debug_shaders = this.getExtension('WEBGL_debug_shaders');
          this._WEBGL_draw_buffers = this.getExtension('WEBGL_draw_buffers');
          this._WEBGL_lose_context = this.getExtension('WEBGL_lose_context');
          this._WEBGL_depth_texture = this.getExtension('WEBGL_depth_texture');
          this._OES_texture_half_float = this.getExtension('OES_texture_half_float');
          this._OES_texture_half_float_linear = this.getExtension('OES_texture_half_float_linear');
          this._OES_texture_float = this.getExtension('OES_texture_float');
          this._OES_texture_float_linear = this.getExtension('OES_texture_float_linear');
          this._OES_standard_derivatives = this.getExtension('OES_standard_derivatives');
          this._OES_element_index_uint = this.getExtension('OES_element_index_uint');
          this._ANGLE_instanced_arrays = this.getExtension('ANGLE_instanced_arrays'); // platform-specific hacks

          {
            // iOS 14 browsers crash on getExtension('WEBGL_compressed_texture_astc')
            if (sys.os !== sys.OS_IOS || sys.osMainVersion !== 14 || !sys.isBrowser) {
              this._WEBGL_compressed_texture_astc = this.getExtension('WEBGL_compressed_texture_astc');
            } // UC browser instancing implementation doesn't work


            if (sys.browserType === sys.BROWSER_TYPE_UC) {
              this._ANGLE_instanced_arrays = null;
            } // bytedance ios depth texture implementation doesn't work


            if (BYTEDANCE && sys.os === sys.OS_IOS) {
              this._WEBGL_depth_texture = null;
            }

            if (RUNTIME_BASED) {
              // VAO implementations doesn't work well on some runtime platforms
              if (LINKSURE || QTT || COCOSPLAY || HUAWEI) {
                this._OES_vertex_array_object = null;
              }
            } // some earlier version of iOS and android wechat implement gl.detachShader incorrectly


            if (sys.os === sys.OS_IOS && sys.osMainVersion <= 10 || WECHAT && sys.os === sys.OS_ANDROID) {
              this._destroyShadersImmediately = false;
            } // compressedTexSubImage2D has always been problematic because the parameters differs slightly from GLES


            if (WECHAT) {
              // and MANY platforms get it wrong
              this._noCompressedTexSubImage2D = true;
            }
          }

          this._features.fill(false);

          if (this._EXT_blend_minmax) {
            this._features[Feature.BLEND_MINMAX] = true;
          }

          if (this._WEBGL_color_buffer_float) {
            this._features[Feature.COLOR_FLOAT] = true;
          }

          if (this._EXT_color_buffer_half_float) {
            this._features[Feature.COLOR_HALF_FLOAT] = true;
          }

          if (this._OES_texture_float) {
            this._features[Feature.TEXTURE_FLOAT] = true;
          }

          if (this._OES_texture_half_float) {
            this._features[Feature.TEXTURE_HALF_FLOAT] = true;
          }

          if (this._OES_texture_float_linear) {
            this._features[Feature.TEXTURE_FLOAT_LINEAR] = true;
          }

          if (this._OES_texture_half_float_linear) {
            this._features[Feature.TEXTURE_HALF_FLOAT_LINEAR] = true;
          }

          this._features[Feature.FORMAT_RGB8] = true;

          if (this._WEBGL_depth_texture) {
            this._features[Feature.FORMAT_D16] = true;
            this._features[Feature.FORMAT_D24] = true;
            this._features[Feature.FORMAT_D24S8] = true;
          }

          if (this._OES_element_index_uint) {
            this._features[Feature.ELEMENT_INDEX_UINT] = true;
          }

          if (this._ANGLE_instanced_arrays) {
            this._features[Feature.INSTANCED_ARRAYS] = true;
          }

          if (this._WEBGL_draw_buffers) {
            this._features[Feature.MULTIPLE_RENDER_TARGETS] = true;
          }

          var compressedFormat = '';

          if (this._WEBGL_compressed_texture_etc1) {
            this._features[Feature.FORMAT_ETC1] = true;
            compressedFormat += 'etc1 ';
          }

          if (this._WEBGL_compressed_texture_etc) {
            this._features[Feature.FORMAT_ETC2] = true;
            compressedFormat += 'etc2 ';
          }

          if (this._WEBGL_compressed_texture_s3tc) {
            this._features[Feature.FORMAT_DXT] = true;
            compressedFormat += 'dxt ';
          }

          if (this._WEBGL_compressed_texture_pvrtc) {
            this._features[Feature.FORMAT_PVRTC] = true;
            compressedFormat += 'pvrtc ';
          }

          if (this._WEBGL_compressed_texture_astc) {
            this._features[Feature.FORMAT_ASTC] = true;
            compressedFormat += 'astc ';
          }

          if (this._OES_vertex_array_object) {
            this._useVAO = true;
          }

          console.info("RENDERER: " + this._renderer);
          console.info("VENDOR: " + this._vendor);
          console.info("VERSION: " + this._version);
          console.info("DPR: " + this._devicePixelRatio);
          console.info("SCREEN_SIZE: " + this._width + " x " + this._height);
          console.info("NATIVE_SIZE: " + this._nativeWidth + " x " + this._nativeHeight); // console.info('COLOR_FORMAT: ' + FormatInfos[this._colorFmt].name);
          // console.info('DEPTH_STENCIL_FORMAT: ' + FormatInfos[this._depthStencilFmt].name);
          // console.info('MAX_VERTEX_ATTRIBS: ' + this._maxVertexAttributes);

          console.info("MAX_VERTEX_UNIFORM_VECTORS: " + this._maxVertexUniformVectors); // console.info('MAX_FRAGMENT_UNIFORM_VECTORS: ' + this._maxFragmentUniformVectors);
          // console.info('MAX_TEXTURE_IMAGE_UNITS: ' + this._maxTextureUnits);
          // console.info('MAX_VERTEX_TEXTURE_IMAGE_UNITS: ' + this._maxVertexTextureUnits);

          console.info("DEPTH_BITS: " + this._depthBits);
          console.info("STENCIL_BITS: " + this._stencilBits);

          if (this._EXT_texture_filter_anisotropic) {
            console.info("MAX_TEXTURE_MAX_ANISOTROPY_EXT: " + this._EXT_texture_filter_anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          }

          console.info("USE_VAO: " + this._useVAO);
          console.info("COMPRESSED_FORMAT: " + compressedFormat); // init states

          this.initStates(gl); // create queue

          this._queue = this.createQueue(new QueueInfo(QueueType.GRAPHICS));
          this._cmdBuff = this.createCommandBuffer(new CommandBufferInfo(this._queue)); // create default null texture

          this.nullTex2D = this.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.GEN_MIPMAP));
          this.nullTexCube = this.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.CUBEMAP | TextureFlagBit.GEN_MIPMAP, 6));
          var nullTexRegion = new BufferTextureCopy();
          nullTexRegion.texExtent.width = 2;
          nullTexRegion.texExtent.height = 2;
          var nullTexBuff = new Uint8Array(this.nullTex2D.size);
          nullTexBuff.fill(0);
          this.copyBuffersToTexture([nullTexBuff], this.nullTex2D, [nullTexRegion]);
          nullTexRegion.texSubres.layerCount = 6;
          this.copyBuffersToTexture([nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff], this.nullTexCube, [nullTexRegion]);
          return true;
        };

        _proto.destroy = function destroy() {
          if (this._canvas && this._webGLContextLostHandler) {
            this._canvas.removeEventListener(eventWebGLContextLost, this._webGLContextLostHandler);

            this._webGLContextLostHandler = null;
          }

          if (this.nullTex2D) {
            this.nullTex2D.destroy();
            this.nullTex2D = null;
          }

          if (this.nullTexCube) {
            this.nullTexCube.destroy();
            this.nullTexCube = null;
          }

          if (this._queue) {
            this._queue.destroy();

            this._queue = null;
          }

          if (this._cmdBuff) {
            this._cmdBuff.destroy();

            this._cmdBuff = null;
          }

          this._extensions = null;
          this._webGLRC = null;
        };

        _proto.resize = function resize(width, height) {
          if (this._width !== width || this._height !== height) {
            console.info("Resizing device: " + width + "x" + height);
            this._canvas.width = width;
            this._canvas.height = height;
            this._width = width;
            this._height = height;
          }
        };

        _proto.acquire = function acquire() {
          this.cmdAllocator.releaseCmds();
        };

        _proto.present = function present() {
          var queue = this._queue;
          this._numDrawCalls = queue.numDrawCalls;
          this._numInstances = queue.numInstances;
          this._numTris = queue.numTris;
          queue.clear();
        };

        _proto.createCommandBuffer = function createCommandBuffer(info) {
          // const ctor = WebGLCommandBuffer; // opt to instant invocation
          var ctor = info.type === CommandBufferType.PRIMARY ? WebGLPrimaryCommandBuffer : WebGLCommandBuffer;
          var cmdBuff = new ctor(this);
          cmdBuff.initialize(info);
          return cmdBuff;
        };

        _proto.createBuffer = function createBuffer(info) {
          var buffer = new WebGLBuffer(this);

          if (buffer.initialize(info)) {
            return buffer;
          }

          return null;
        };

        _proto.createTexture = function createTexture(info) {
          var texture = new WebGLTexture(this);

          if (texture.initialize(info)) {
            return texture;
          }

          return null;
        };

        _proto.createSampler = function createSampler(info) {
          var sampler = new WebGLSampler(this);

          if (sampler.initialize(info)) {
            return sampler;
          }

          return null;
        };

        _proto.createDescriptorSet = function createDescriptorSet(info) {
          var descriptorSet = new WebGLDescriptorSet(this);

          if (descriptorSet.initialize(info)) {
            return descriptorSet;
          }

          return null;
        };

        _proto.createShader = function createShader(info) {
          var shader = new WebGLShader(this);

          if (shader.initialize(info)) {
            return shader;
          }

          return null;
        };

        _proto.createInputAssembler = function createInputAssembler(info) {
          var inputAssembler = new WebGLInputAssembler(this);

          if (inputAssembler.initialize(info)) {
            return inputAssembler;
          }

          return null;
        };

        _proto.createRenderPass = function createRenderPass(info) {
          var renderPass = new WebGLRenderPass(this);

          if (renderPass.initialize(info)) {
            return renderPass;
          }

          return null;
        };

        _proto.createFramebuffer = function createFramebuffer(info) {
          var framebuffer = new WebGLFramebuffer(this);

          if (framebuffer.initialize(info)) {
            return framebuffer;
          }

          return null;
        };

        _proto.createDescriptorSetLayout = function createDescriptorSetLayout(info) {
          var descriptorSetLayout = new WebGLDescriptorSetLayout(this);

          if (descriptorSetLayout.initialize(info)) {
            return descriptorSetLayout;
          }

          return null;
        };

        _proto.createPipelineLayout = function createPipelineLayout(info) {
          var pipelineLayout = new WebGLPipelineLayout(this);

          if (pipelineLayout.initialize(info)) {
            return pipelineLayout;
          }

          return null;
        };

        _proto.createPipelineState = function createPipelineState(info) {
          var pipelineState = new WebGLPipelineState(this);

          if (pipelineState.initialize(info)) {
            return pipelineState;
          }

          return null;
        };

        _proto.createFence = function createFence(info) {
          var fence = new WebGLFence(this);

          if (fence.initialize(info)) {
            return fence;
          }

          return null;
        };

        _proto.createQueue = function createQueue(info) {
          var queue = new WebGLQueue(this);

          if (queue.initialize(info)) {
            return queue;
          }

          return null;
        };

        _proto.copyBuffersToTexture = function copyBuffersToTexture(buffers, texture, regions) {
          WebGLCmdFuncCopyBuffersToTexture(this, buffers, texture.gpuTexture, regions);
        };

        _proto.copyTexImagesToTexture = function copyTexImagesToTexture(texImages, texture, regions) {
          WebGLCmdFuncCopyTexImagesToTexture(this, texImages, texture.gpuTexture, regions);
        };

        _proto.copyFramebufferToBuffer = function copyFramebufferToBuffer(srcFramebuffer, dstBuffer, regions) {
          var gl = this._webGLRC;
          var gpuFramebuffer = srcFramebuffer.gpuFramebuffer;
          var format = gpuFramebuffer.gpuColorTextures[0].format;
          var glFormat = GFXFormatToWebGLFormat(format, gl);
          var glType = GFXFormatToWebGLType(format, gl);
          var ctor = getTypedArrayConstructor(FormatInfos[format]);
          var curFBO = this.stateCache.glFramebuffer;

          if (this.stateCache.glFramebuffer !== gpuFramebuffer.glFramebuffer) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, gpuFramebuffer.glFramebuffer);
            this.stateCache.glFramebuffer = gpuFramebuffer.glFramebuffer;
          }

          var view = new ctor(dstBuffer);

          for (var _iterator2 = _createForOfIteratorHelperLoose(regions), _step2; !(_step2 = _iterator2()).done;) {
            var region = _step2.value;
            var w = region.texExtent.width;
            var h = region.texExtent.height;
            gl.readPixels(region.texOffset.x, region.texOffset.y, w, h, glFormat, glType, view);
          }

          if (this.stateCache.glFramebuffer !== curFBO) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, curFBO);
            this.stateCache.glFramebuffer = curFBO;
          }
        };

        _proto.blitFramebuffer = function blitFramebuffer(src, dst, srcRect, dstRect, filter) {};

        _proto.getExtension = function getExtension(ext) {
          var prefixes = ['', 'WEBKIT_', 'MOZ_'];

          for (var i = 0; i < prefixes.length; ++i) {
            var _ext = this.gl.getExtension(prefixes[i] + ext);

            if (_ext) {
              return _ext;
            }
          }

          return null;
        };

        _proto.initStates = function initStates(gl) {
          gl.activeTexture(gl.TEXTURE0);
          gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
          gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null); // rasterizer state

          gl.enable(gl.SCISSOR_TEST);
          gl.enable(gl.CULL_FACE);
          gl.cullFace(gl.BACK);
          gl.frontFace(gl.CCW);
          gl.disable(gl.POLYGON_OFFSET_FILL);
          gl.polygonOffset(0.0, 0.0); // depth stencil state

          gl.enable(gl.DEPTH_TEST);
          gl.depthMask(true);
          gl.depthFunc(gl.LESS);
          gl.depthRange(0.0, 1.0);
          gl.stencilFuncSeparate(gl.FRONT, gl.ALWAYS, 1, 0xffff);
          gl.stencilOpSeparate(gl.FRONT, gl.KEEP, gl.KEEP, gl.KEEP);
          gl.stencilMaskSeparate(gl.FRONT, 0xffff);
          gl.stencilFuncSeparate(gl.BACK, gl.ALWAYS, 1, 0xffff);
          gl.stencilOpSeparate(gl.BACK, gl.KEEP, gl.KEEP, gl.KEEP);
          gl.stencilMaskSeparate(gl.BACK, 0xffff);
          gl.disable(gl.STENCIL_TEST); // blend state

          gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
          gl.disable(gl.BLEND);
          gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
          gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
          gl.colorMask(true, true, true, true);
          gl.blendColor(0.0, 0.0, 0.0, 0.0);
        };

        _proto._onWebGLContextLost = function _onWebGLContextLost(event) {
          warnID(11000);
          warn(event); // 2020.9.3: `preventDefault` is not available on some platforms
          // event.preventDefault();
        };

        _createClass(WebGLDevice, [{
          key: "gl",
          get: function get() {
            return this._webGLRC;
          }
        }, {
          key: "webGLQueue",
          get: function get() {
            return this._queue;
          }
        }, {
          key: "isAntialias",
          get: function get() {
            return this._isAntialias;
          }
        }, {
          key: "isPremultipliedAlpha",
          get: function get() {
            return this._isPremultipliedAlpha;
          }
        }, {
          key: "useVAO",
          get: function get() {
            return this._useVAO;
          }
        }, {
          key: "destroyShadersImmediately",
          get: function get() {
            return this._destroyShadersImmediately;
          }
        }, {
          key: "noCompressedTexSubImage2D",
          get: function get() {
            return this._noCompressedTexSubImage2D;
          }
        }, {
          key: "bindingMappingInfo",
          get: function get() {
            return this._bindingMappingInfo;
          }
        }, {
          key: "EXT_texture_filter_anisotropic",
          get: function get() {
            return this._EXT_texture_filter_anisotropic;
          }
        }, {
          key: "EXT_blend_minmax",
          get: function get() {
            return this._EXT_blend_minmax;
          }
        }, {
          key: "EXT_frag_depth",
          get: function get() {
            return this._EXT_frag_depth;
          }
        }, {
          key: "EXT_shader_texture_lod",
          get: function get() {
            return this._EXT_shader_texture_lod;
          }
        }, {
          key: "EXT_sRGB",
          get: function get() {
            return this._EXT_sRGB;
          }
        }, {
          key: "OES_vertex_array_object",
          get: function get() {
            return this._OES_vertex_array_object;
          }
        }, {
          key: "WEBGL_color_buffer_float",
          get: function get() {
            return this._WEBGL_color_buffer_float;
          }
        }, {
          key: "WEBGL_compressed_texture_etc1",
          get: function get() {
            return this._WEBGL_compressed_texture_etc1;
          }
        }, {
          key: "WEBGL_compressed_texture_pvrtc",
          get: function get() {
            return this._WEBGL_compressed_texture_pvrtc;
          }
        }, {
          key: "WEBGL_compressed_texture_astc",
          get: function get() {
            return this._WEBGL_compressed_texture_astc;
          }
        }, {
          key: "WEBGL_compressed_texture_s3tc",
          get: function get() {
            return this._WEBGL_compressed_texture_s3tc;
          }
        }, {
          key: "WEBGL_compressed_texture_s3tc_srgb",
          get: function get() {
            return this._WEBGL_compressed_texture_s3tc_srgb;
          }
        }, {
          key: "WEBGL_debug_shaders",
          get: function get() {
            return this._WEBGL_debug_shaders;
          }
        }, {
          key: "WEBGL_draw_buffers",
          get: function get() {
            return this._WEBGL_draw_buffers;
          }
        }, {
          key: "WEBGL_lose_context",
          get: function get() {
            return this._WEBGL_lose_context;
          }
        }, {
          key: "WEBGL_depth_texture",
          get: function get() {
            return this._WEBGL_depth_texture;
          }
        }, {
          key: "WEBGL_debug_renderer_info",
          get: function get() {
            return this._WEBGL_debug_renderer_info;
          }
        }, {
          key: "OES_texture_half_float",
          get: function get() {
            return this._OES_texture_half_float;
          }
        }, {
          key: "OES_texture_half_float_linear",
          get: function get() {
            return this._OES_texture_half_float_linear;
          }
        }, {
          key: "OES_texture_float",
          get: function get() {
            return this._OES_texture_float;
          }
        }, {
          key: "OES_standard_derivatives",
          get: function get() {
            return this._OES_standard_derivatives;
          }
        }, {
          key: "OES_element_index_uint",
          get: function get() {
            return this._OES_element_index_uint;
          }
        }, {
          key: "ANGLE_instanced_arrays",
          get: function get() {
            return this._ANGLE_instanced_arrays;
          }
        }]);

        return WebGLDevice;
      }(Device));
    }
  };
});