System.register(['./coordinates-converts-utils-fa8f5fc5.js'], function (exports) {
    'use strict';
    var property, Format, Address, Filter$1, ccclass, _inheritsLoose, _createClass, legacyCC, warnID, _createForOfIteratorHelperLoose, Feature, Asset, _applyDecoratedDescriptor, ComparisonFunc, Color, SamplerInfo, _initializerDefineProperty, _assertThisInitialized, murmurhash2_32_gc, errorID, IDGenerator, serializable, MissingScript, Details, deserialize$1, error, decodeUuid, Cache, _extends, isCompiledJson, hasNativeDep, parsed, files, getDependUuidList, BufferTextureCopy, TextureFlagBit, TextureUsageBit, API, macro, fastRemoveAt, type, TextureInfo, TextureType, Type, Vec2, Vec3, Vec4, Mat3, Mat4, DescriptorSetLayoutInfo, GetTypeSize, DescriptorSetLayoutBinding, DescriptorType, UniformBlock, SetIndex, Uniform, UniformSampler, Attribute, ShaderStage, ShaderStageFlagBit, NULL_HANDLE, localDescriptorSetLayout, ShaderPool, PipelineLayoutPool, PipelineLayoutInfo, ShaderInfo, globalDescriptorSetLayout, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, BufferInfo, BufferUsageBit, MemoryUsageBit, BufferViewInfo, DSPool, PassPool, PassView, RenderPriority, RenderPassStage, getPhaseID, PrimitiveMode, DescriptorSetInfo, BlendState, DepthStencilState, RasterizerState, editable, editorOnly, ColorAttachment, TextureLayout, DepthStencilAttachment, RenderPassInfo, rangeMin, rangeMax, Texture, removeProperty, replaceProperty, FormatType, FormatInfos, sys, SubMeshPool, SubMeshView, RawBufferPool, FlatBufferPool, FlatBufferView, FlatBufferArrayPool, freeHandleArray, InputAssemblerInfo, AttributeName;
    return {
        setters: [function (module) {
            property = module.dP;
            Format = module.a2;
            Address = module.ah;
            Filter$1 = module.ag;
            ccclass = module.dQ;
            _inheritsLoose = module.dR;
            _createClass = module.dS;
            legacyCC = module.l;
            warnID = module.d;
            _createForOfIteratorHelperLoose = module.t;
            Feature = module.aA;
            Asset = module.dB;
            _applyDecoratedDescriptor = module.dT;
            ComparisonFunc = module.ab;
            Color = module.aK;
            SamplerInfo = module.H;
            _initializerDefineProperty = module.dU;
            _assertThisInitialized = module.dV;
            murmurhash2_32_gc = module.dh;
            errorID = module.f;
            IDGenerator = module.dW;
            serializable = module.dX;
            MissingScript = module.dN;
            Details = module.dr;
            deserialize$1 = module.dq;
            error = module.e;
            decodeUuid = module.dY;
            Cache = module.dZ;
            _extends = module.d_;
            isCompiledJson = module.d$;
            hasNativeDep = module.e0;
            parsed = module.e1;
            files = module.e2;
            getDependUuidList = module.e3;
            BufferTextureCopy = module.aP;
            TextureFlagBit = module.al;
            TextureUsageBit = module.aj;
            API = module.ay;
            macro = module.dL;
            fastRemoveAt = module.e4;
            type = module.e5;
            TextureInfo = module.T;
            TextureType = module.ai;
            Type = module.a1;
            Vec2 = module.cv;
            Vec3 = module.cx;
            Vec4 = module.cz;
            Mat3 = module.cD;
            Mat4 = module.cE;
            DescriptorSetLayoutInfo = module.M;
            GetTypeSize = module.aG;
            DescriptorSetLayoutBinding = module.N;
            DescriptorType = module.an;
            UniformBlock = module.u;
            SetIndex = module.e6;
            Uniform = module.v;
            UniformSampler = module.U;
            Attribute = module.bg;
            ShaderStage = module.S;
            ShaderStageFlagBit = module.am;
            NULL_HANDLE = module.bx;
            localDescriptorSetLayout = module.e7;
            ShaderPool = module.by;
            PipelineLayoutPool = module.bB;
            PipelineLayoutInfo = module.Q;
            ShaderInfo = module.x;
            globalDescriptorSetLayout = module.e8;
            DESCRIPTOR_BUFFER_TYPE = module.J;
            DESCRIPTOR_SAMPLER_TYPE = module.K;
            BufferInfo = module.z;
            BufferUsageBit = module.a3;
            MemoryUsageBit = module.a4;
            BufferViewInfo = module.A;
            DSPool = module.bz;
            PassPool = module.bN;
            PassView = module.bM;
            RenderPriority = module.e9;
            RenderPassStage = module.ea;
            getPhaseID = module.eb;
            PrimitiveMode = module.a7;
            DescriptorSetInfo = module.L;
            BlendState = module.aT;
            DepthStencilState = module.aR;
            RasterizerState = module.aQ;
            editable = module.ec;
            editorOnly = module.ed;
            ColorAttachment = module.E;
            TextureLayout = module.ar;
            DepthStencilAttachment = module.F;
            RenderPassInfo = module.R;
            rangeMin = module.ee;
            rangeMax = module.ef;
            Texture = module.bd;
            removeProperty = module.df;
            replaceProperty = module.de;
            FormatType = module.ax;
            FormatInfos = module.aD;
            sys = module.dK;
            SubMeshPool = module.cl;
            SubMeshView = module.ck;
            RawBufferPool = module.bK;
            FlatBufferPool = module.cj;
            FlatBufferView = module.ci;
            FlatBufferArrayPool = module.bG;
            freeHandleArray = module.bv;
            InputAssemblerInfo = module.X;
            AttributeName = module.a0;
        }],
        execute: function () {

            exports({
                B: void 0,
                D: readBuffer,
                F: writeBuffer,
                G: mapBuffer,
                H: void 0,
                P: void 0,
                S: void 0,
                W: void 0,
                i: getDefaultFromType,
                k: getDeviceShaderVersion,
                m: genSamplerHash,
                o: overrideMacros,
                y: deserialize,
                z: void 0
            });

            var override = exports('K', function override(target, propertyKey, descriptor) {
              return property({
                __noImplicit: true,
                override: true
              })(target, propertyKey, descriptor);
            });

            var CUSTOM_PIXEL_FORMAT = 1024;
            var PixelFormat;

            (function (PixelFormat) {
              PixelFormat[PixelFormat["RGB565"] = Format.R5G6B5] = "RGB565";
              PixelFormat[PixelFormat["RGB5A1"] = Format.RGB5A1] = "RGB5A1";
              PixelFormat[PixelFormat["RGBA4444"] = Format.RGBA4] = "RGBA4444";
              PixelFormat[PixelFormat["RGB888"] = Format.RGB8] = "RGB888";
              PixelFormat[PixelFormat["RGB32F"] = Format.RGB32F] = "RGB32F";
              PixelFormat[PixelFormat["RGBA8888"] = Format.RGBA8] = "RGBA8888";
              PixelFormat[PixelFormat["RGBA32F"] = Format.RGBA32F] = "RGBA32F";
              PixelFormat[PixelFormat["A8"] = Format.A8] = "A8";
              PixelFormat[PixelFormat["I8"] = Format.L8] = "I8";
              PixelFormat[PixelFormat["AI8"] = Format.LA8] = "AI8";
              PixelFormat[PixelFormat["RGB_PVRTC_2BPPV1"] = Format.PVRTC_RGB2] = "RGB_PVRTC_2BPPV1";
              PixelFormat[PixelFormat["RGBA_PVRTC_2BPPV1"] = Format.PVRTC_RGBA2] = "RGBA_PVRTC_2BPPV1";
              PixelFormat[PixelFormat["RGB_A_PVRTC_2BPPV1"] = CUSTOM_PIXEL_FORMAT++] = "RGB_A_PVRTC_2BPPV1";
              PixelFormat[PixelFormat["RGB_PVRTC_4BPPV1"] = Format.PVRTC_RGB4] = "RGB_PVRTC_4BPPV1";
              PixelFormat[PixelFormat["RGBA_PVRTC_4BPPV1"] = Format.PVRTC_RGBA4] = "RGBA_PVRTC_4BPPV1";
              PixelFormat[PixelFormat["RGB_A_PVRTC_4BPPV1"] = CUSTOM_PIXEL_FORMAT++] = "RGB_A_PVRTC_4BPPV1";
              PixelFormat[PixelFormat["RGB_ETC1"] = Format.ETC_RGB8] = "RGB_ETC1";
              PixelFormat[PixelFormat["RGBA_ETC1"] = CUSTOM_PIXEL_FORMAT++] = "RGBA_ETC1";
              PixelFormat[PixelFormat["RGB_ETC2"] = Format.ETC2_RGB8] = "RGB_ETC2";
              PixelFormat[PixelFormat["RGBA_ETC2"] = Format.ETC2_RGBA8] = "RGBA_ETC2";
              PixelFormat[PixelFormat["RGBA_ASTC_4x4"] = Format.ASTC_RGBA_4x4] = "RGBA_ASTC_4x4";
              PixelFormat[PixelFormat["RGBA_ASTC_5x4"] = Format.ASTC_RGBA_5x4] = "RGBA_ASTC_5x4";
              PixelFormat[PixelFormat["RGBA_ASTC_5x5"] = Format.ASTC_RGBA_5x5] = "RGBA_ASTC_5x5";
              PixelFormat[PixelFormat["RGBA_ASTC_6x5"] = Format.ASTC_RGBA_6x5] = "RGBA_ASTC_6x5";
              PixelFormat[PixelFormat["RGBA_ASTC_6x6"] = Format.ASTC_RGBA_6x6] = "RGBA_ASTC_6x6";
              PixelFormat[PixelFormat["RGBA_ASTC_8x5"] = Format.ASTC_RGBA_8x5] = "RGBA_ASTC_8x5";
              PixelFormat[PixelFormat["RGBA_ASTC_8x6"] = Format.ASTC_RGBA_8x6] = "RGBA_ASTC_8x6";
              PixelFormat[PixelFormat["RGBA_ASTC_8x8"] = Format.ASTC_RGBA_8x8] = "RGBA_ASTC_8x8";
              PixelFormat[PixelFormat["RGBA_ASTC_10x5"] = Format.ASTC_RGBA_10x5] = "RGBA_ASTC_10x5";
              PixelFormat[PixelFormat["RGBA_ASTC_10x6"] = Format.ASTC_RGBA_10x6] = "RGBA_ASTC_10x6";
              PixelFormat[PixelFormat["RGBA_ASTC_10x8"] = Format.ASTC_RGBA_10x8] = "RGBA_ASTC_10x8";
              PixelFormat[PixelFormat["RGBA_ASTC_10x10"] = Format.ASTC_RGBA_10x10] = "RGBA_ASTC_10x10";
              PixelFormat[PixelFormat["RGBA_ASTC_12x10"] = Format.ASTC_RGBA_12x10] = "RGBA_ASTC_12x10";
              PixelFormat[PixelFormat["RGBA_ASTC_12x12"] = Format.ASTC_RGBA_12x12] = "RGBA_ASTC_12x12";
            })(PixelFormat || (PixelFormat = exports('z', {})));

            var WrapMode;

            (function (WrapMode) {
              WrapMode[WrapMode["REPEAT"] = Address.WRAP] = "REPEAT";
              WrapMode[WrapMode["CLAMP_TO_EDGE"] = Address.CLAMP] = "CLAMP_TO_EDGE";
              WrapMode[WrapMode["MIRRORED_REPEAT"] = Address.MIRROR] = "MIRRORED_REPEAT";
              WrapMode[WrapMode["CLAMP_TO_BORDER"] = Address.BORDER] = "CLAMP_TO_BORDER";
            })(WrapMode || (WrapMode = exports('W', {})));

            var Filter;

            (function (Filter) {
              Filter[Filter["NONE"] = Filter$1.NONE] = "NONE";
              Filter[Filter["LINEAR"] = Filter$1.LINEAR] = "LINEAR";
              Filter[Filter["NEAREST"] = Filter$1.POINT] = "NEAREST";
            })(Filter || (Filter = exports('H', {})));

            var _dec, _class, _class2, _class3, _temp;

            function isImageBitmap(imageSource) {
              return legacyCC.sys.capabilities.imageBitmap && imageSource instanceof ImageBitmap;
            }

            function isNativeImage(imageSource) {

              if ( imageSource._compressed === true) {
                return false;
              }

              return imageSource instanceof HTMLImageElement || imageSource instanceof HTMLCanvasElement || isImageBitmap(imageSource);
            }

            var ImageAsset = exports('I', (_dec = ccclass('cc.ImageAsset'), _dec(_class = (_class2 = (_temp = _class3 = function (_Asset) {
              _inheritsLoose(ImageAsset, _Asset);

              _createClass(ImageAsset, [{
                key: "_nativeAsset",
                get: function get() {
                  return this._nativeData;
                },
                set: function set(value) {
                  if (!(value instanceof HTMLElement) && !isImageBitmap(value)) {
                    value.format = value.format || this._format;
                  }

                  this.reset(value);
                }
              }, {
                key: "data",
                get: function get() {
                  if (this._nativeData && isNativeImage(this._nativeData)) {
                    return this._nativeData;
                  }

                  return this._nativeData && this._nativeData._data;
                }
              }, {
                key: "width",
                get: function get() {
                  return this._nativeData.width || this._width;
                }
              }, {
                key: "height",
                get: function get() {
                  return this._nativeData.height || this._height;
                }
              }, {
                key: "format",
                get: function get() {
                  return this._format;
                }
              }, {
                key: "isCompressed",
                get: function get() {
                  return this._format >= PixelFormat.RGB_ETC1 && this._format <= PixelFormat.RGBA_ASTC_12x12 || this._format >= PixelFormat.RGB_A_PVRTC_2BPPV1 && this._format <= PixelFormat.RGBA_ETC1;
                }
              }, {
                key: "url",
                get: function get() {
                  return this.nativeUrl;
                }
              }, {
                key: "_texture",
                set: function set(tex) {
                  this._tex = tex;
                },
                get: function get() {
                  if (!this._tex) {
                    var tex = new legacyCC.Texture2D();
                    tex.name = this.nativeUrl;
                    tex.image = this;
                    this._tex = tex;
                  }

                  return this._tex;
                }
              }]);

              function ImageAsset(nativeAsset) {
                var _this;

                _this = _Asset.call(this) || this;
                _this._nativeData = void 0;
                _this._tex = void 0;
                _this._exportedExts = undefined;
                _this._format = PixelFormat.RGBA8888;
                _this._width = 0;
                _this._height = 0;
                _this.loaded = false;
                _this._nativeData = {
                  _data: null,
                  width: 0,
                  height: 0,
                  format: 0,
                  _compressed: false
                };

                if (nativeAsset !== undefined) {
                  _this.reset(nativeAsset);
                }

                return _this;
              }

              var _proto = ImageAsset.prototype;

              _proto.reset = function reset(data) {
                var _this2 = this;

                if (isImageBitmap(data)) {
                  this._nativeData = data;

                  this._onDataComplete();
                } else if (!(data instanceof HTMLElement)) {
                  this._nativeData = data;
                  this._format = data.format;

                  this._onDataComplete();
                } else {
                  this._nativeData = data;

                  if ( data.complete || data instanceof HTMLCanvasElement) {
                    this._onDataComplete();
                  } else {
                    this.loaded = false;
                    data.addEventListener('load', function () {
                      _this2._onDataComplete();
                    });
                    data.addEventListener('error', function (err) {
                      warnID(3119, err.message);
                    });
                  }
                }
              };

              _proto.destroy = function destroy() {
                if (this.data && this.data instanceof HTMLImageElement) {
                  this.data.src = '';

                  this._setRawAsset('');

                  this.data.destroy();
                } else if (isImageBitmap(this.data)) {
                  this.data.close && this.data.close();
                }

                return _Asset.prototype.destroy.call(this);
              };

              _proto._serialize = function _serialize() {
              };

              _proto._deserialize = function _deserialize(data) {
                var fmtStr = '';

                if (typeof data === 'string') {
                  fmtStr = data;
                } else {
                  this._width = data.w;
                  this._height = data.h;
                  fmtStr = data.fmt;
                }

                var device = _getGlobalDevice();

                var extensionIDs = fmtStr.split('_');
                var defaultExt = '';
                var preferedExtensionIndex = Number.MAX_VALUE;
                var format = this._format;
                var ext = '';
                var SupportTextureFormats = legacyCC.macro.SUPPORT_TEXTURE_FORMATS;

                for (var _iterator2 = _createForOfIteratorHelperLoose(extensionIDs), _step2; !(_step2 = _iterator2()).done;) {
                  var extensionID = _step2.value;
                  var extFormat = extensionID.split('@');
                  var i = parseInt(extFormat[0], undefined);
                  var tmpExt = ImageAsset.extnames[i] || extFormat[0];
                  var index = SupportTextureFormats.indexOf(tmpExt);

                  if (index !== -1 && index < preferedExtensionIndex) {
                    var fmt = extFormat[1] ? parseInt(extFormat[1]) : this._format;

                    if (tmpExt === '.astc' && (!device || !device.hasFeature(Feature.FORMAT_ASTC))) {
                      continue;
                    } else if (tmpExt === '.pvr' && (!device || !device.hasFeature(Feature.FORMAT_PVRTC))) {
                      continue;
                    } else if ((fmt === PixelFormat.RGB_ETC1 || fmt === PixelFormat.RGBA_ETC1) && (!device || !device.hasFeature(Feature.FORMAT_ETC1))) {
                      continue;
                    } else if ((fmt === PixelFormat.RGB_ETC2 || fmt === PixelFormat.RGBA_ETC2) && (!device || !device.hasFeature(Feature.FORMAT_ETC2))) {
                      continue;
                    } else if (tmpExt === '.webp' && !legacyCC.sys.capabilities.webp) {
                      continue;
                    }

                    preferedExtensionIndex = index;
                    ext = tmpExt;
                    format = fmt;
                  } else if (!defaultExt) {
                    defaultExt = tmpExt;
                  }
                }

                if (ext) {
                  this._setRawAsset(ext);

                  this._format = format;
                } else if (defaultExt) {
                  this._setRawAsset(defaultExt);

                  warnID(3120, defaultExt, defaultExt);
                } else {
                  warnID(3121);
                }
              };

              _proto._onDataComplete = function _onDataComplete() {
                this.loaded = true;
                this.emit('load');
              };

              return ImageAsset;
            }(Asset), _class3.extnames = ['.png', '.jpg', '.jpeg', '.bmp', '.webp', '.pvr', '.pkm', '.astc'], _temp), (_applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [override], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype)), _class2)) || _class));

            function _getGlobalDevice() {
              if (legacyCC.director.root) {
                return legacyCC.director.root.device;
              }

              return null;
            }

            legacyCC.ImageAsset = ImageAsset;

            var SamplerInfoIndex;

            (function (SamplerInfoIndex) {
              SamplerInfoIndex[SamplerInfoIndex["minFilter"] = 0] = "minFilter";
              SamplerInfoIndex[SamplerInfoIndex["magFilter"] = 1] = "magFilter";
              SamplerInfoIndex[SamplerInfoIndex["mipFilter"] = 2] = "mipFilter";
              SamplerInfoIndex[SamplerInfoIndex["addressU"] = 3] = "addressU";
              SamplerInfoIndex[SamplerInfoIndex["addressV"] = 4] = "addressV";
              SamplerInfoIndex[SamplerInfoIndex["addressW"] = 5] = "addressW";
              SamplerInfoIndex[SamplerInfoIndex["maxAnisotropy"] = 6] = "maxAnisotropy";
              SamplerInfoIndex[SamplerInfoIndex["cmpFunc"] = 7] = "cmpFunc";
              SamplerInfoIndex[SamplerInfoIndex["minLOD"] = 8] = "minLOD";
              SamplerInfoIndex[SamplerInfoIndex["maxLOD"] = 9] = "maxLOD";
              SamplerInfoIndex[SamplerInfoIndex["mipLODBias"] = 10] = "mipLODBias";
              SamplerInfoIndex[SamplerInfoIndex["total"] = 11] = "total";
            })(SamplerInfoIndex || (SamplerInfoIndex = exports('S', {})));

            var defaultInfo = [Filter$1.LINEAR, Filter$1.LINEAR, Filter$1.NONE, Address.WRAP, Address.WRAP, Address.WRAP, 8, ComparisonFunc.NEVER, 0, 0, 0];
            var defaultSamplerHash = exports('l', genSamplerHash(defaultInfo));
            var borderColor = new Color();

            var _samplerInfo = new SamplerInfo();

            function genSamplerHash(info) {
              var value = 0;
              var hash = 0;

              for (var i = 0; i < defaultInfo.length; i++) {
                value = info[i] || defaultInfo[i];

                switch (i) {
                  case SamplerInfoIndex.minFilter:
                    hash |= value;
                    break;

                  case SamplerInfoIndex.magFilter:
                    hash |= value << 2;
                    break;

                  case SamplerInfoIndex.mipFilter:
                    hash |= value << 4;
                    break;

                  case SamplerInfoIndex.addressU:
                    hash |= value << 6;
                    break;

                  case SamplerInfoIndex.addressV:
                    hash |= value << 8;
                    break;

                  case SamplerInfoIndex.addressW:
                    hash |= value << 10;
                    break;

                  case SamplerInfoIndex.maxAnisotropy:
                    hash |= value << 12;
                    break;

                  case SamplerInfoIndex.cmpFunc:
                    hash |= value << 16;
                    break;

                  case SamplerInfoIndex.minLOD:
                    hash |= value << 20;
                    break;

                  case SamplerInfoIndex.maxLOD:
                    hash |= value << 24;
                    break;

                  case SamplerInfoIndex.mipLODBias:
                    hash |= value << 28;
                    break;
                }
              }

              return hash;
            }

            var SamplerLib = function () {
              function SamplerLib() {
                this._cache = {};
              }

              var _proto = SamplerLib.prototype;

              _proto.getSampler = function getSampler(device, hash) {
                if (!hash) {
                  hash = defaultSamplerHash;
                }

                var cache = this._cache[hash];

                if (cache) {
                  return cache;
                }

                _samplerInfo.minFilter = hash & 3;
                _samplerInfo.magFilter = hash >> 2 & 3;
                _samplerInfo.mipFilter = hash >> 4 & 3;
                _samplerInfo.addressU = hash >> 6 & 3;
                _samplerInfo.addressV = hash >> 8 & 3;
                _samplerInfo.addressW = hash >> 10 & 3;
                _samplerInfo.maxAnisotropy = hash >> 12 & 15;
                _samplerInfo.cmpFunc = hash >> 16 & 15;
                _samplerInfo.minLOD = hash >> 20 & 15;
                _samplerInfo.maxLOD = hash >> 24 & 15;
                _samplerInfo.mipLODBias = hash >> 28 & 15;
                _samplerInfo.borderColor = borderColor;
                var sampler = this._cache[hash] = device.createSampler(_samplerInfo);
                return sampler;
              };

              return SamplerLib;
            }();

            var samplerLib = exports('s', new SamplerLib());
            legacyCC.samplerLib = samplerLib;

            var _dec$1, _class$1, _class2$1, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3$1, _temp$1;
            var idGenerator = new IDGenerator('Tex');
            var TextureBase = exports('C', (_dec$1 = ccclass('cc.TextureBase'), _dec$1(_class$1 = (_class2$1 = (_temp$1 = _class3$1 = function (_Asset) {
              _inheritsLoose(TextureBase, _Asset);

              _createClass(TextureBase, [{
                key: "isCompressed",
                get: function get() {
                  return this._format >= PixelFormat.RGB_ETC1 && this._format <= PixelFormat.RGBA_ASTC_12x12 || this._format >= PixelFormat.RGB_A_PVRTC_2BPPV1 && this._format <= PixelFormat.RGBA_ETC1;
                }
              }, {
                key: "width",
                get: function get() {
                  return this._width;
                }
              }, {
                key: "height",
                get: function get() {
                  return this._height;
                }
              }]);

              function TextureBase() {
                var _this;

                _this = _Asset.call(this) || this;

                _initializerDefineProperty(_this, "_format", _descriptor, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_minFilter", _descriptor2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_magFilter", _descriptor3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_mipFilter", _descriptor4, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_wrapS", _descriptor5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_wrapT", _descriptor6, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_wrapR", _descriptor7, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_anisotropy", _descriptor8, _assertThisInitialized(_this));

                _this._width = 1;
                _this._height = 1;
                _this._id = void 0;
                _this._samplerInfo = [];
                _this._samplerHash = 0;
                _this._gfxSampler = null;
                _this._gfxDevice = null;
                _this._textureHash = 0;
                _this._id = idGenerator.getNewId();
                _this.loaded = false;
                _this._gfxDevice = _this._getGFXDevice();
                _this._textureHash = murmurhash2_32_gc(_this._id, 666);
                return _this;
              }

              var _proto = TextureBase.prototype;

              _proto.getId = function getId() {
                return this._id;
              };

              _proto.getPixelFormat = function getPixelFormat() {
                return this._format;
              };

              _proto.getAnisotropy = function getAnisotropy() {
                return this._anisotropy;
              };

              _proto.setWrapMode = function setWrapMode(wrapS, wrapT, wrapR) {
                this._wrapS = wrapS;
                this._samplerInfo[SamplerInfoIndex.addressU] = wrapS;
                this._wrapT = wrapT;
                this._samplerInfo[SamplerInfoIndex.addressV] = wrapT;

                if (wrapR !== undefined) {
                  this._wrapR = wrapR;
                  this._samplerInfo[SamplerInfoIndex.addressW] = wrapR;
                }

                this._samplerHash = genSamplerHash(this._samplerInfo);

                if (this._gfxDevice) {
                  this._gfxSampler = samplerLib.getSampler(this._gfxDevice, this._samplerHash);
                }
              };

              _proto.setFilters = function setFilters(minFilter, magFilter) {
                this._minFilter = minFilter;
                this._samplerInfo[SamplerInfoIndex.minFilter] = minFilter;
                this._magFilter = magFilter;
                this._samplerInfo[SamplerInfoIndex.magFilter] = magFilter;
                this._samplerHash = genSamplerHash(this._samplerInfo);

                if (this._gfxDevice) {
                  this._gfxSampler = samplerLib.getSampler(this._gfxDevice, this._samplerHash);
                }
              };

              _proto.setMipFilter = function setMipFilter(mipFilter) {
                this._mipFilter = mipFilter;
                this._samplerInfo[SamplerInfoIndex.mipFilter] = mipFilter;
                this._samplerInfo[SamplerInfoIndex.maxLOD] = mipFilter === Filter.NONE ? 0 : 15;
                this._samplerHash = genSamplerHash(this._samplerInfo);

                if (this._gfxDevice) {
                  this._gfxSampler = samplerLib.getSampler(this._gfxDevice, this._samplerHash);
                }
              };

              _proto.setAnisotropy = function setAnisotropy(anisotropy) {
                this._anisotropy = anisotropy;
                this._samplerInfo[SamplerInfoIndex.maxAnisotropy] = anisotropy;
                this._samplerHash = genSamplerHash(this._samplerInfo);

                if (this._gfxDevice) {
                  this._gfxSampler = samplerLib.getSampler(this._gfxDevice, this._samplerHash);
                }
              };

              _proto.destroy = function destroy() {
                var destroyed = _Asset.prototype.destroy.call(this);

                if (destroyed && legacyCC.director.root && legacyCC.director.root.batcher2D) {
                  legacyCC.director.root.batcher2D._releaseDescriptorSetCache(this._textureHash);
                }

                return destroyed;
              };

              _proto.getHash = function getHash() {
                return this._textureHash;
              };

              _proto.getGFXTexture = function getGFXTexture() {
                return null;
              };

              _proto.getSamplerHash = function getSamplerHash() {
                return this._samplerHash;
              };

              _proto.getGFXSampler = function getGFXSampler() {
                if (!this._gfxSampler) {
                  if (this._gfxDevice) {
                    this._gfxSampler = samplerLib.getSampler(this._gfxDevice, this._samplerHash);
                  } else {
                    errorID(9302);
                  }
                }

                return this._gfxSampler;
              };

              _proto._serialize = function _serialize(ctxForExporting) {

                return '';
              };

              _proto._deserialize = function _deserialize(serializedData, handle) {
                var data = serializedData;
                var fields = data.split(',');
                fields.unshift('');

                if (fields.length >= 5) {
                  this.setFilters(parseInt(fields[1]), parseInt(fields[2]));
                  this.setWrapMode(parseInt(fields[3]), parseInt(fields[4]));
                }

                if (fields.length >= 7) {
                  this.setMipFilter(parseInt(fields[5]));
                  this.setAnisotropy(parseInt(fields[6]));
                }
              };

              _proto._getGFXDevice = function _getGFXDevice() {
                if (legacyCC.director.root) {
                  return legacyCC.director.root.device;
                }

                return null;
              };

              _proto._getGFXFormat = function _getGFXFormat() {
                return this._getGFXPixelFormat(this._format);
              };

              _proto._setGFXFormat = function _setGFXFormat(format) {
                this._format = format === undefined ? PixelFormat.RGBA8888 : format;
              };

              _proto._getGFXPixelFormat = function _getGFXPixelFormat(format) {
                if (format === PixelFormat.RGBA_ETC1) {
                  format = PixelFormat.RGB_ETC1;
                } else if (format === PixelFormat.RGB_A_PVRTC_4BPPV1) {
                  format = PixelFormat.RGB_PVRTC_4BPPV1;
                } else if (format === PixelFormat.RGB_A_PVRTC_2BPPV1) {
                  format = PixelFormat.RGB_PVRTC_2BPPV1;
                }

                return format;
              };

              return TextureBase;
            }(Asset), _class3$1.PixelFormat = PixelFormat, _class3$1.WrapMode = WrapMode, _class3$1.Filter = Filter, _temp$1), (_descriptor = _applyDecoratedDescriptor(_class2$1.prototype, "_format", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return PixelFormat.RGBA8888;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2$1.prototype, "_minFilter", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return Filter.LINEAR;
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "_magFilter", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return Filter.LINEAR;
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "_mipFilter", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return Filter.NONE;
              }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "_wrapS", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return WrapMode.REPEAT;
              }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "_wrapT", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return WrapMode.REPEAT;
              }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "_wrapR", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return WrapMode.REPEAT;
              }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "_anisotropy", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 8;
              }
            })), _class2$1)) || _class$1));
            legacyCC.TextureBase = TextureBase;

            function deserialize (json, options) {
              var classFinder;

              {
                classFinder = MissingScript.safeFindClass;
              }

              var tdInfo = Details.pool.get();
              var asset;

              try {
                asset = deserialize$1(json, tdInfo, {
                  classFinder: classFinder,
                  customEnv: options
                });
              } catch (e) {
                error(e);
                Details.pool.put(tdInfo);
                throw e;
              }

              asset._uuid = options.__uuid__ || '';

              var uuidList = tdInfo.uuidList;
              var objList = tdInfo.uuidObjList;
              var propList = tdInfo.uuidPropList;
              var depends = [];

              for (var i = 0; i < uuidList.length; i++) {
                var dependUuid = uuidList[i];
                depends[i] = {
                  uuid: decodeUuid(dependUuid),
                  owner: objList[i],
                  prop: propList[i]
                };
              }

              asset.__depends__ = depends;

              if (asset._native) {
                asset.__nativeDepend__ = true;
              }

              Details.pool.put(tdInfo);
              return asset;
            }

            var DependUtil = function () {
              function DependUtil() {
                this._depends = new Cache();
              }

              var _proto = DependUtil.prototype;

              _proto.init = function init() {
                this._depends.clear();
              };

              _proto.getNativeDep = function getNativeDep(uuid) {
                var depend = this._depends.get(uuid);

                if (depend && depend.nativeDep) {
                  return _extends({}, depend.nativeDep);
                }

                return null;
              };

              _proto.getDeps = function getDeps(uuid) {
                if (this._depends.has(uuid)) {
                  return this._depends.get(uuid).deps;
                }

                return [];
              };

              _proto.getDepsRecursively = function getDepsRecursively(uuid) {
                var exclude = Object.create(null);
                var depends = [];

                this._descend(uuid, exclude, depends);

                return depends;
              };

              _proto.remove = function remove(uuid) {
                this._depends.remove(uuid);
              };

              _proto.parse = function parse(uuid, json) {
                var out = null;

                if (Array.isArray(json) || json.__type__) {
                  if (this._depends.has(uuid)) {
                    return this._depends.get(uuid);
                  }

                  if (Array.isArray(json) && (!( isCompiledJson(json)) || !hasNativeDep(json))) {
                    out = {
                      deps: this._parseDepsFromJson(json)
                    };
                  } else {
                    try {
                      var asset = deserialize(json, {
                        __uuid__: uuid
                      });
                      out = this._parseDepsFromAsset(asset);

                      if (out.nativeDep) {
                        out.nativeDep.uuid = uuid;
                      }

                      parsed.add(uuid + "@import", asset);
                    } catch (e) {
                      files.remove(uuid + "@import");
                      out = {
                        deps: []
                      };
                    }
                  }
                } else {
                  if ( this._depends.has(uuid)) {
                    out = this._depends.get(uuid);

                    if (out.parsedFromExistAsset) {
                      return out;
                    }
                  }

                  out = this._parseDepsFromAsset(json);
                }

                this._depends.add(uuid, out);

                return out;
              };

              _proto._parseDepsFromAsset = function _parseDepsFromAsset(asset) {
                var out = {
                  deps: [],
                  parsedFromExistAsset: true,
                  preventPreloadNativeObject: asset.constructor.preventPreloadNativeObject,
                  preventDeferredLoadDependents: asset.constructor.preventDeferredLoadDependents
                };
                var deps = asset.__depends__;

                for (var i = 0, l = deps.length; i < l; i++) {
                  out.deps.push(deps[i].uuid);
                }

                if (asset.__nativeDepend__) {
                  out.nativeDep = asset._nativeDep;
                }

                return out;
              };

              _proto._parseDepsFromJson = function _parseDepsFromJson(json) {
                var depends = null;

                {
                  if (isCompiledJson(json)) {
                    depends = getDependUuidList(json);
                    depends.forEach(function (uuid, index) {
                      return depends[index] = decodeUuid(uuid);
                    });
                    return depends;
                  }

                  depends = [];

                  var parseDependRecursively = function parseDependRecursively(data, out) {
                    if (!data || typeof data !== 'object' || data.__id__) {
                      return;
                    }

                    var uuid = data.__uuid__;

                    if (Array.isArray(data)) {
                      for (var i = 0, l = data.length; i < l; i++) {
                        parseDependRecursively(data[i], out);
                      }
                    } else if (uuid) {
                      out.push(decodeUuid(uuid));
                    } else {
                      for (var prop in data) {
                        parseDependRecursively(data[prop], out);
                      }
                    }
                  };

                  parseDependRecursively(json, depends);
                  return depends;
                }
              };

              _proto._descend = function _descend(uuid, exclude, depends) {
                var deps = this.getDeps(uuid);

                for (var i = 0; i < deps.length; i++) {
                  var depend = deps[i];

                  if (!exclude[depend]) {
                    exclude[depend] = true;
                    depends.push(depend);

                    this._descend(depend, exclude, depends);
                  }
                }
              };

              return DependUtil;
            }();
            var dependUtil = exports('A', new DependUtil());

            var _dec$2, _class$2, _temp$2;
            var _regions = [new BufferTextureCopy()];

            function getMipLevel(width, height) {
              var size = Math.max(width, height);
              var level = 0;

              while (size) {
                size >>= 1;
                level++;
              }

              return level;
            }

            function isPOT(n) {
              return n && (n & n - 1) === 0;
            }

            function canGenerateMipmap(device, w, h) {
              var needCheckPOT = device.gfxAPI === API.WEBGL;

              if (needCheckPOT) {
                return isPOT(w) && isPOT(h);
              }

              return true;
            }

            var SimpleTexture = (_dec$2 = ccclass('cc.SimpleTexture'), _dec$2(_class$2 = (_temp$2 = function (_TextureBase) {
              _inheritsLoose(SimpleTexture, _TextureBase);

              function SimpleTexture() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _TextureBase.call.apply(_TextureBase, [this].concat(args)) || this;
                _this._gfxTexture = null;
                _this._mipmapLevel = 1;
                _this._textureWidth = 0;
                _this._textureHeight = 0;
                return _this;
              }

              var _proto = SimpleTexture.prototype;

              _proto.getGFXTexture = function getGFXTexture() {
                return this._gfxTexture;
              };

              _proto.destroy = function destroy() {
                this._tryDestroyTexture();

                return _TextureBase.prototype.destroy.call(this);
              };

              _proto.updateImage = function updateImage() {
                this.updateMipmaps(0);
              };

              _proto.updateMipmaps = function updateMipmaps(firstLevel, count) {
              };

              _proto.uploadData = function uploadData(source, level, arrayIndex) {
                if (level === void 0) {
                  level = 0;
                }

                if (arrayIndex === void 0) {
                  arrayIndex = 0;
                }

                if (!this._gfxTexture || this._mipmapLevel <= level) {
                  return;
                }

                var gfxDevice = this._getGFXDevice();

                if (!gfxDevice) {
                  return;
                }

                var region = _regions[0];
                region.texExtent.width = this._textureWidth >> level;
                region.texExtent.height = this._textureHeight >> level;
                region.texSubres.mipLevel = level;
                region.texSubres.baseArrayLayer = arrayIndex;

                {
                  if (source instanceof HTMLElement) {
                    if (source.height > region.texExtent.height || source.width > region.texExtent.width) {
                      error("Image source(" + this.name + ") bounds override.");
                    }
                  }
                }

                if (ArrayBuffer.isView(source)) {
                  gfxDevice.copyBuffersToTexture([source], this._gfxTexture, _regions);
                } else {
                  gfxDevice.copyTexImagesToTexture([source], this._gfxTexture, _regions);
                }
              };

              _proto._assignImage = function _assignImage(image, level, arrayIndex) {
                var _this2 = this;

                var upload = function upload() {
                  var data = image.data;

                  if (!data) {
                    return;
                  }

                  _this2.uploadData(data, level, arrayIndex);

                  _this2._checkTextureLoaded();

                  if (macro.CLEANUP_IMAGE_CACHE) {
                    var deps = dependUtil.getDeps(_this2._uuid);
                    var index = deps.indexOf(image._uuid);

                    if (index !== -1) {
                      fastRemoveAt(deps, index);
                      image.decRef();
                    }
                  }
                };

                if (image.loaded) {
                  upload();
                } else {
                  image.once('load', function () {
                    upload();
                  });

                  if (!this.isCompressed) {
                    var defaultImg = legacyCC.builtinResMgr.get('black-texture').image;
                    this.uploadData(defaultImg.data, level, arrayIndex);
                  }

                  legacyCC.assetManager.postLoadNative(image);
                }
              };

              _proto._checkTextureLoaded = function _checkTextureLoaded() {
                this._textureReady();
              };

              _proto._textureReady = function _textureReady() {
                this.loaded = true;
                this.emit('load');
              };

              _proto._setMipmapLevel = function _setMipmapLevel(value) {
                this._mipmapLevel = value < 1 ? 1 : value;
              };

              _proto._getGfxTextureCreateInfo = function _getGfxTextureCreateInfo(presumed) {
                return null;
              };

              _proto._tryReset = function _tryReset() {
                this._tryDestroyTexture();

                if (this._mipmapLevel === 0) {
                  return;
                }

                var device = this._getGFXDevice();

                if (!device) {
                  return;
                }

                this._createTexture(device);
              };

              _proto._createTexture = function _createTexture(device) {
                if (this._width === 0 || this._height === 0) {
                  return;
                }

                var flags = TextureFlagBit.NONE;

                if (this._mipFilter !== Filter.NONE && canGenerateMipmap(device, this._width, this._height)) {
                  this._mipmapLevel = getMipLevel(this._width, this._height);
                  flags = TextureFlagBit.GEN_MIPMAP;
                }

                var textureCreateInfo = this._getGfxTextureCreateInfo({
                  usage: TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST,
                  format: this._getGFXFormat(),
                  levelCount: this._mipmapLevel,
                  flags: flags | TextureFlagBit.IMMUTABLE
                });

                if (!textureCreateInfo) {
                  return;
                }

                var texture = device.createTexture(textureCreateInfo);
                this._textureWidth = textureCreateInfo.width;
                this._textureHeight = textureCreateInfo.height;
                this._gfxTexture = texture;
              };

              _proto._tryDestroyTexture = function _tryDestroyTexture() {
                if (this._gfxTexture) {
                  this._gfxTexture.destroy();

                  this._gfxTexture = null;
                }
              };

              _createClass(SimpleTexture, [{
                key: "mipmapLevel",
                get: function get() {
                  return this._mipmapLevel;
                }
              }]);

              return SimpleTexture;
            }(TextureBase), _temp$2)) || _class$2);
            legacyCC.SimpleTexture = SimpleTexture;

            var _dec$3, _dec2, _class$3, _class2$2, _descriptor$1, _temp$3;
            var Texture2D = exports('r', (_dec$3 = ccclass('cc.Texture2D'), _dec2 = type([ImageAsset]), _dec$3(_class$3 = (_class2$2 = (_temp$3 = function (_SimpleTexture) {
              _inheritsLoose(Texture2D, _SimpleTexture);

              function Texture2D() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _SimpleTexture.call.apply(_SimpleTexture, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "_mipmaps", _descriptor$1, _assertThisInitialized(_this));

                return _this;
              }

              var _proto = Texture2D.prototype;

              _proto.initialize = function initialize() {
                this.mipmaps = this._mipmaps;
              };

              _proto.onLoaded = function onLoaded() {
                this.initialize();
              };

              _proto.reset = function reset(info) {
                this._width = info.width;
                this._height = info.height;

                this._setGFXFormat(info.format);

                this._setMipmapLevel(info.mipmapLevel || 1);

                this._tryReset();
              };

              _proto.create = function create(width, height, format, mipmapLevel) {
                if (format === void 0) {
                  format = PixelFormat.RGBA8888;
                }

                if (mipmapLevel === void 0) {
                  mipmapLevel = 1;
                }

                this.reset({
                  width: width,
                  height: height,
                  format: format,
                  mipmapLevel: mipmapLevel
                });
              };

              _proto.toString = function toString() {
                return this._mipmaps.length !== 0 ? this._mipmaps[0].url : '';
              };

              _proto.updateMipmaps = function updateMipmaps(firstLevel, count) {
                if (firstLevel === void 0) {
                  firstLevel = 0;
                }

                if (firstLevel >= this._mipmaps.length) {
                  return;
                }

                var nUpdate = Math.min(count === undefined ? this._mipmaps.length : count, this._mipmaps.length - firstLevel);

                for (var i = 0; i < nUpdate; ++i) {
                  var level = firstLevel + i;

                  this._assignImage(this._mipmaps[level], level);
                }
              };

              _proto.getHtmlElementObj = function getHtmlElementObj() {
                return this._mipmaps[0] && this._mipmaps[0].data instanceof HTMLElement ? this._mipmaps[0].data : null;
              };

              _proto.destroy = function destroy() {
                this._mipmaps = [];
                return _SimpleTexture.prototype.destroy.call(this);
              };

              _proto.description = function description() {
                var url = this._mipmaps[0] ? this._mipmaps[0].url : '';
                return "<cc.Texture2D | Name = " + url + " | Dimension = " + this.width + " x " + this.height + ">";
              };

              _proto.releaseTexture = function releaseTexture() {
                this.destroy();
              };

              _proto._serialize = function _serialize(ctxForExporting) {
              };

              _proto._deserialize = function _deserialize(serializedData, handle) {
                var data = serializedData;

                _SimpleTexture.prototype._deserialize.call(this, data.base, handle);

                this._mipmaps = new Array(data.mipmaps.length);

                for (var i = 0; i < data.mipmaps.length; ++i) {
                  this._mipmaps[i] = new ImageAsset();

                  if (!data.mipmaps[i]) {
                    continue;
                  }

                  var mipmapUUID = data.mipmaps[i];
                  handle.result.push(this._mipmaps, "" + i, mipmapUUID);
                  this._mipmaps[i]._texture = this;
                }
              };

              _proto._getGfxTextureCreateInfo = function _getGfxTextureCreateInfo(presumed) {
                var texInfo = new TextureInfo(TextureType.TEX2D);
                texInfo.width = this._width;
                texInfo.height = this._height;
                return Object.assign(texInfo, presumed);
              };

              _proto._checkTextureLoaded = function _checkTextureLoaded() {
                var ready = true;

                for (var i = 0; i < this._mipmaps.length; ++i) {
                  var image = this._mipmaps[i];

                  if (!image.loaded) {
                    ready = false;
                    break;
                  }
                }

                if (ready) {
                  _SimpleTexture.prototype._textureReady.call(this);
                }
              };

              _createClass(Texture2D, [{
                key: "mipmaps",
                get: function get() {
                  return this._mipmaps;
                },
                set: function set(value) {
                  var _this2 = this;

                  this._mipmaps = value;

                  this._setMipmapLevel(this._mipmaps.length);

                  if (this._mipmaps.length > 0) {
                    var imageAsset = this._mipmaps[0];
                    this.reset({
                      width: imageAsset.width,
                      height: imageAsset.height,
                      format: imageAsset.format,
                      mipmapLevel: this._mipmaps.length
                    });

                    this._mipmaps.forEach(function (mipmap, level) {
                      _this2._assignImage(mipmap, level);
                    });
                  } else {
                    this.reset({
                      width: 0,
                      height: 0,
                      mipmapLevel: this._mipmaps.length
                    });
                  }
                }
              }, {
                key: "image",
                get: function get() {
                  return this._mipmaps.length === 0 ? null : this._mipmaps[0];
                },
                set: function set(value) {
                  this.mipmaps = value ? [value] : [];
                }
              }]);

              return Texture2D;
            }(SimpleTexture), _temp$3), (_descriptor$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_mipmaps", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            })), _class2$2)) || _class$3));
            legacyCC.Texture2D = Texture2D;

            var _dec$4, _class$4, _class2$3, _descriptor$2, _class3$2, _temp$4;
            var FaceIndex;

            (function (FaceIndex) {
              FaceIndex[FaceIndex["right"] = 0] = "right";
              FaceIndex[FaceIndex["left"] = 1] = "left";
              FaceIndex[FaceIndex["top"] = 2] = "top";
              FaceIndex[FaceIndex["bottom"] = 3] = "bottom";
              FaceIndex[FaceIndex["front"] = 4] = "front";
              FaceIndex[FaceIndex["back"] = 5] = "back";
            })(FaceIndex || (FaceIndex = {}));

            var TextureCube = exports('u', (_dec$4 = ccclass('cc.TextureCube'), _dec$4(_class$4 = (_class2$3 = (_temp$4 = _class3$2 = function (_SimpleTexture) {
              _inheritsLoose(TextureCube, _SimpleTexture);

              function TextureCube() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _SimpleTexture.call.apply(_SimpleTexture, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "_mipmaps", _descriptor$2, _assertThisInitialized(_this));

                return _this;
              }

              TextureCube.fromTexture2DArray = function fromTexture2DArray(textures, out) {
                var mipmaps = [];
                var nMipmaps = textures.length / 6;

                for (var i = 0; i < nMipmaps; i++) {
                  var x = i * 6;
                  mipmaps.push({
                    front: textures[x + FaceIndex.front].image,
                    back: textures[x + FaceIndex.back].image,
                    left: textures[x + FaceIndex.left].image,
                    right: textures[x + FaceIndex.right].image,
                    top: textures[x + FaceIndex.top].image,
                    bottom: textures[x + FaceIndex.bottom].image
                  });
                }

                out = out || new TextureCube();
                out.mipmaps = mipmaps;
                return out;
              };

              var _proto = TextureCube.prototype;

              _proto.onLoaded = function onLoaded() {
                this.mipmaps = this._mipmaps;
                this.loaded = true;
                this.emit('load');
              };

              _proto.reset = function reset(info) {
                this._width = info.width;
                this._height = info.height;

                this._setGFXFormat(info.format);

                this._setMipmapLevel(info.mipmapLevel || 1);

                this._tryReset();
              };

              _proto.updateMipmaps = function updateMipmaps(firstLevel, count) {
                var _this2 = this;

                if (firstLevel === void 0) {
                  firstLevel = 0;
                }

                if (firstLevel >= this._mipmaps.length) {
                  return;
                }

                var nUpdate = Math.min(count === undefined ? this._mipmaps.length : count, this._mipmaps.length - firstLevel);

                var _loop = function _loop(i) {
                  var level = firstLevel + i;

                  _forEachFace(_this2._mipmaps[level], function (face, faceIndex) {
                    _this2._assignImage(face, level, faceIndex);
                  });
                };

                for (var i = 0; i < nUpdate; ++i) {
                  _loop(i);
                }
              };

              _proto.destroy = function destroy() {
                this._mipmaps = [];
                return _SimpleTexture.prototype.destroy.call(this);
              };

              _proto.releaseTexture = function releaseTexture() {
                this.mipmaps = [];
              };

              _proto._serialize = function _serialize(ctxForExporting) {
              };

              _proto._deserialize = function _deserialize(serializedData, handle) {
                var data = serializedData;

                _SimpleTexture.prototype._deserialize.call(this, data.base, handle);

                this._mipmaps = new Array(data.mipmaps.length);

                for (var i = 0; i < data.mipmaps.length; ++i) {
                  this._mipmaps[i] = {
                    front: new ImageAsset(),
                    back: new ImageAsset(),
                    left: new ImageAsset(),
                    right: new ImageAsset(),
                    top: new ImageAsset(),
                    bottom: new ImageAsset()
                  };
                  var mipmap = data.mipmaps[i];
                  handle.result.push(this._mipmaps[i], "front", mipmap.front);
                  handle.result.push(this._mipmaps[i], "back", mipmap.back);
                  handle.result.push(this._mipmaps[i], "left", mipmap.left);
                  handle.result.push(this._mipmaps[i], "right", mipmap.right);
                  handle.result.push(this._mipmaps[i], "top", mipmap.top);
                  handle.result.push(this._mipmaps[i], "bottom", mipmap.bottom);
                }
              };

              _proto._getGfxTextureCreateInfo = function _getGfxTextureCreateInfo(presumed) {
                var texInfo = new TextureInfo(TextureType.CUBE);
                texInfo.width = this._width;
                texInfo.height = this._height;
                texInfo.layerCount = 6;
                Object.assign(texInfo, presumed);
                texInfo.flags |= TextureFlagBit.CUBEMAP;
                return texInfo;
              };

              _createClass(TextureCube, [{
                key: "mipmaps",
                get: function get() {
                  return this._mipmaps;
                },
                set: function set(value) {
                  var _this3 = this;

                  this._mipmaps = value;

                  this._setMipmapLevel(this._mipmaps.length);

                  if (this._mipmaps.length > 0) {
                    var imageAsset = this._mipmaps[0].front;
                    this.reset({
                      width: imageAsset.width,
                      height: imageAsset.height,
                      format: imageAsset.format,
                      mipmapLevel: this._mipmaps.length
                    });

                    this._mipmaps.forEach(function (mipmap, level) {
                      _forEachFace(mipmap, function (face, faceIndex) {
                        _this3._assignImage(face, level, faceIndex);
                      });
                    });
                  } else {
                    this.reset({
                      width: 0,
                      height: 0,
                      mipmapLevel: this._mipmaps.length
                    });
                  }
                }
              }, {
                key: "image",
                get: function get() {
                  return this._mipmaps.length === 0 ? null : this._mipmaps[0];
                },
                set: function set(value) {
                  this.mipmaps = value ? [value] : [];
                }
              }]);

              return TextureCube;
            }(SimpleTexture), _class3$2.FaceIndex = FaceIndex, _temp$4), (_descriptor$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_mipmaps", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            })), _class2$3)) || _class$4));
            legacyCC.TextureCube = TextureCube;

            function _forEachFace(mipmap, callback) {
              callback(mipmap.front, FaceIndex.front);
              callback(mipmap.back, FaceIndex.back);
              callback(mipmap.left, FaceIndex.left);
              callback(mipmap.right, FaceIndex.right);
              callback(mipmap.top, FaceIndex.top);
              callback(mipmap.bottom, FaceIndex.bottom);
            }

            var effects = exports('w', [{
              "name": "billboard",
              "techniques": [{
                "name": "add",
                "passes": [{
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 1,
                      "blendSrcAlpha": 2,
                      "blendDstAlpha": 1
                    }]
                  },
                  "program": "billboard|vert:vs_main|tinted-fs:add",
                  "depthStencilState": {
                    "depthTest": true,
                    "depthWrite": false
                  },
                  "properties": {
                    "mainTexture": {
                      "value": "grey",
                      "type": 28
                    },
                    "mainTiling_Offset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "tintColor": {
                      "value": [0.5, 0.5, 0.5, 0.5],
                      "type": 16
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "billboard|vert:vs_main|tinted-fs:add",
                "hash": 2143664850,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": []
                    }],
                    "samplers": []
                  }
                },
                "defines": [{
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "Constants",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 1,
                  "members": [{
                    "name": "mainTiling_Offset",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "frameTile_velLenScale",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "scale",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "builtin",
                  "defines": [],
                  "binding": 1,
                  "stageFlags": 1,
                  "members": [{
                    "name": "cc_size_rotation",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "FragConstants",
                  "defines": [],
                  "binding": 2,
                  "stageFlags": 16,
                  "members": [{
                    "name": "tintColor",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "mainTexture",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 3
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 1
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 2
                }]
              }]
            }, {
              "name": "clear-stencil",
              "techniques": [{
                "passes": [{
                  "blendState": {
                    "targets": [{
                      "blend": true
                    }]
                  },
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "program": "clear-stencil|sprite-vs:vert|sprite-fs:frag",
                  "depthStencilState": {
                    "depthTest": false,
                    "depthWrite": false
                  }
                }]
              }],
              "shaders": [{
                "name": "clear-stencil|sprite-vs:vert|sprite-fs:frag",
                "hash": 1062464958,
                "builtins": {
                  "globals": {
                    "blocks": [],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [],
                    "samplers": []
                  }
                },
                "defines": [],
                "blocks": [],
                "samplers": [],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }]
              }]
            }, {
              "name": "graphics",
              "techniques": [{
                "passes": [{
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 1,
                      "blendDst": 4,
                      "blendSrcAlpha": 1,
                      "blendDstAlpha": 4
                    }]
                  },
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "program": "graphics|vs:vert|fs:frag",
                  "depthStencilState": {
                    "depthTest": false,
                    "depthWrite": false
                  }
                }]
              }],
              "shaders": [{
                "name": "graphics|vs:vert|fs:frag",
                "hash": 3946667351,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": []
                    }],
                    "samplers": []
                  }
                },
                "defines": [],
                "blocks": [],
                "samplers": [],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 1
                }, {
                  "name": "a_dist",
                  "type": 13,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 2
                }]
              }]
            }, {
              "name": "particle-gpu",
              "techniques": [{
                "name": "add",
                "passes": [{
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 1,
                      "blendSrcAlpha": 2,
                      "blendDstAlpha": 1
                    }]
                  },
                  "program": "particle-gpu|particle-vs-gpu:gpvs_main|tinted-fs:add",
                  "depthStencilState": {
                    "depthTest": true,
                    "depthWrite": false
                  },
                  "properties": {
                    "mainTexture": {
                      "value": "grey",
                      "type": 28
                    },
                    "mainTiling_Offset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "tintColor": {
                      "value": [0.5, 0.5, 0.5, 0.5],
                      "type": 16
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "particle-gpu|particle-vs-gpu:gpvs_main|tinted-fs:add",
                "hash": 3696836305,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": []
                    }],
                    "samplers": []
                  }
                },
                "defines": [{
                  "name": "CC_RENDER_MODE",
                  "type": "number",
                  "range": [0, 4]
                }, {
                  "name": "COLOR_OVER_TIME_MODULE_ENABLE",
                  "type": "boolean"
                }, {
                  "name": "ROTATION_OVER_TIME_MODULE_ENABLE",
                  "type": "boolean"
                }, {
                  "name": "SIZE_OVER_TIME_MODULE_ENABLE",
                  "type": "boolean"
                }, {
                  "name": "FORCE_OVER_TIME_MODULE_ENABLE",
                  "type": "boolean"
                }, {
                  "name": "VELOCITY_OVER_TIME_MODULE_ENABLE",
                  "type": "boolean"
                }, {
                  "name": "TEXTURE_ANIMATION_MODULE_ENABLE",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_WORLD_SPACE",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "Constants",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 1,
                  "members": [{
                    "name": "mainTiling_Offset",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "frameTile_velLenScale",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "scale",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "SampleConstants",
                  "defines": [],
                  "binding": 1,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_sampleInfo",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "TickConstants",
                  "defines": [],
                  "binding": 2,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_worldRot",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "u_timeDelta",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "ColorConstant",
                  "defines": ["COLOR_OVER_TIME_MODULE_ENABLE"],
                  "binding": 3,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_color_mode",
                    "type": 5,
                    "count": 1
                  }]
                }, {
                  "name": "RotationConstant",
                  "defines": ["ROTATION_OVER_TIME_MODULE_ENABLE"],
                  "binding": 4,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_rotation_mode",
                    "type": 5,
                    "count": 1
                  }]
                }, {
                  "name": "SizeConstant",
                  "defines": ["SIZE_OVER_TIME_MODULE_ENABLE"],
                  "binding": 5,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_size_mode",
                    "type": 5,
                    "count": 1
                  }]
                }, {
                  "name": "ForceConstant",
                  "defines": ["FORCE_OVER_TIME_MODULE_ENABLE"],
                  "binding": 6,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_force_mode",
                    "type": 5,
                    "count": 1
                  }, {
                    "name": "u_force_space",
                    "type": 5,
                    "count": 1
                  }]
                }, {
                  "name": "VelocityConstant",
                  "defines": ["VELOCITY_OVER_TIME_MODULE_ENABLE"],
                  "binding": 7,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_velocity_mode",
                    "type": 5,
                    "count": 1
                  }, {
                    "name": "u_velocity_space",
                    "type": 5,
                    "count": 1
                  }]
                }, {
                  "name": "AnimationConstant",
                  "defines": ["TEXTURE_ANIMATION_MODULE_ENABLE"],
                  "binding": 8,
                  "stageFlags": 1,
                  "members": [{
                    "name": "u_anim_info",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "FragConstants",
                  "defines": [],
                  "binding": 9,
                  "stageFlags": 16,
                  "members": [{
                    "name": "tintColor",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "color_over_time_tex0",
                  "type": 28,
                  "count": 1,
                  "defines": ["COLOR_OVER_TIME_MODULE_ENABLE"],
                  "stageFlags": 1,
                  "binding": 10
                }, {
                  "name": "rotation_over_time_tex0",
                  "type": 28,
                  "count": 1,
                  "defines": ["ROTATION_OVER_TIME_MODULE_ENABLE"],
                  "stageFlags": 1,
                  "binding": 11
                }, {
                  "name": "size_over_time_tex0",
                  "type": 28,
                  "count": 1,
                  "defines": ["SIZE_OVER_TIME_MODULE_ENABLE"],
                  "stageFlags": 1,
                  "binding": 12
                }, {
                  "name": "force_over_time_tex0",
                  "type": 28,
                  "count": 1,
                  "defines": ["FORCE_OVER_TIME_MODULE_ENABLE"],
                  "stageFlags": 1,
                  "binding": 13
                }, {
                  "name": "velocity_over_time_tex0",
                  "type": 28,
                  "count": 1,
                  "defines": ["VELOCITY_OVER_TIME_MODULE_ENABLE"],
                  "stageFlags": 1,
                  "binding": 14
                }, {
                  "name": "texture_animation_tex0",
                  "type": 28,
                  "count": 1,
                  "defines": ["TEXTURE_ANIMATION_MODULE_ENABLE"],
                  "stageFlags": 1,
                  "binding": 15
                }, {
                  "name": "mainTexture",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 16
                }],
                "attributes": [{
                  "name": "a_position_starttime",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 0
                }, {
                  "name": "a_size_uv",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 1
                }, {
                  "name": "a_rotation_uv",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 2
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 3
                }, {
                  "name": "a_dir_life",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 4
                }, {
                  "name": "a_rndSeed",
                  "type": 13,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 5
                }, {
                  "name": "a_texCoord",
                  "type": 15,
                  "count": 1,
                  "defines": ["CC_RENDER_MODE"],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 6
                }, {
                  "name": "a_texCoord3",
                  "type": 15,
                  "count": 1,
                  "defines": ["CC_RENDER_MODE"],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 7
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": ["CC_RENDER_MODE"],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 8
                }, {
                  "name": "a_color1",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_RENDER_MODE"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 9
                }]
              }]
            }, {
              "name": "particle-trail",
              "techniques": [{
                "name": "add",
                "passes": [{
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 1,
                      "blendSrcAlpha": 2,
                      "blendDstAlpha": 1
                    }]
                  },
                  "program": "particle-trail|particle-trail:vs_main|tinted-fs:add",
                  "depthStencilState": {
                    "depthTest": true,
                    "depthWrite": false
                  },
                  "properties": {
                    "mainTexture": {
                      "value": "grey",
                      "type": 28
                    },
                    "mainTiling_Offset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "frameTile_velLenScale": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "tintColor": {
                      "value": [0.5, 0.5, 0.5, 0.5],
                      "type": 16
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "particle-trail|particle-trail:vs_main|tinted-fs:add",
                "hash": 4115155772,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": []
                    }],
                    "samplers": []
                  }
                },
                "defines": [{
                  "name": "CC_RENDER_MODE",
                  "type": "number",
                  "range": [0, 4]
                }, {
                  "name": "CC_DRAW_WIRE_FRAME",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_WORLD_SPACE",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "Constants",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 1,
                  "members": [{
                    "name": "mainTiling_Offset",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "frameTile_velLenScale",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "scale",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "FragConstants",
                  "defines": [],
                  "binding": 1,
                  "stageFlags": 16,
                  "members": [{
                    "name": "tintColor",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "mainTexture",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 2
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_texCoord",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 1
                }, {
                  "name": "a_texCoord1",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 2
                }, {
                  "name": "a_texCoord2",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 3
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 4
                }]
              }]
            }, {
              "name": "particle",
              "techniques": [{
                "name": "add",
                "passes": [{
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 1,
                      "blendSrcAlpha": 2,
                      "blendDstAlpha": 1
                    }]
                  },
                  "program": "particle|particle-vs-legacy:lpvs_main|tinted-fs:add",
                  "depthStencilState": {
                    "depthTest": true,
                    "depthWrite": false
                  },
                  "properties": {
                    "mainTexture": {
                      "value": "grey",
                      "type": 28
                    },
                    "mainTiling_Offset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "tintColor": {
                      "value": [0.5, 0.5, 0.5, 0.5],
                      "type": 16
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "particle|particle-vs-legacy:lpvs_main|tinted-fs:add",
                "hash": 66662317,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": []
                    }],
                    "samplers": []
                  }
                },
                "defines": [{
                  "name": "CC_RENDER_MODE",
                  "type": "number",
                  "range": [0, 4]
                }, {
                  "name": "CC_USE_WORLD_SPACE",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "Constants",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 1,
                  "members": [{
                    "name": "mainTiling_Offset",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "frameTile_velLenScale",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "scale",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "FragConstants",
                  "defines": [],
                  "binding": 1,
                  "stageFlags": 16,
                  "members": [{
                    "name": "tintColor",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "mainTexture",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 2
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_texCoord",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord1",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 2
                }, {
                  "name": "a_texCoord2",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 3
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 4
                }, {
                  "name": "a_color1",
                  "type": 15,
                  "count": 1,
                  "defines": ["CC_RENDER_MODE"],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 8
                }, {
                  "name": "a_texCoord3",
                  "type": 15,
                  "count": 1,
                  "defines": ["CC_RENDER_MODE"],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 6
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": ["CC_RENDER_MODE"],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 7
                }]
              }]
            }, {
              "name": "spine",
              "techniques": [{
                "passes": [{
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 4,
                      "blendDstAlpha": 4
                    }]
                  },
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "program": "spine|sprite-vs:vert|sprite-fs:frag",
                  "depthStencilState": {
                    "depthTest": false,
                    "depthWrite": false
                  },
                  "properties": {
                    "alphaThreshold": {
                      "value": [0.5],
                      "type": 13
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "spine|sprite-vs:vert|sprite-fs:frag",
                "hash": 4078504952,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": ["USE_LOCAL"]
                    }],
                    "samplers": [{
                      "name": "cc_spriteTexture",
                      "defines": []
                    }]
                  }
                },
                "defines": [{
                  "name": "USE_LOCAL",
                  "type": "boolean"
                }, {
                  "name": "TWO_COLORED",
                  "type": "boolean"
                }, {
                  "name": "USE_ALPHA_TEST",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "ALPHA_TEST_DATA",
                  "defines": ["USE_ALPHA_TEST"],
                  "binding": 0,
                  "stageFlags": 16,
                  "members": [{
                    "name": "alphaThreshold",
                    "type": 13,
                    "count": 1
                  }]
                }],
                "samplers": [],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 1
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 2
                }, {
                  "name": "a_color2",
                  "type": 16,
                  "count": 1,
                  "defines": ["TWO_COLORED"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 3
                }]
              }]
            }, {
              "name": "sprite",
              "techniques": [{
                "passes": [{
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 4,
                      "blendDstAlpha": 4
                    }]
                  },
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "program": "sprite|sprite-vs:vert|sprite-fs:frag",
                  "depthStencilState": {
                    "depthTest": false,
                    "depthWrite": false
                  },
                  "properties": {
                    "alphaThreshold": {
                      "value": [0.5],
                      "type": 13
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "sprite|sprite-vs:vert|sprite-fs:frag",
                "hash": 3990469549,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": ["USE_LOCAL"]
                    }],
                    "samplers": [{
                      "name": "cc_spriteTexture",
                      "defines": ["USE_TEXTURE"]
                    }]
                  }
                },
                "defines": [{
                  "name": "USE_LOCAL",
                  "type": "boolean"
                }, {
                  "name": "USE_PIXEL_ALIGNMENT",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_EMBEDDED_ALPHA",
                  "type": "boolean"
                }, {
                  "name": "USE_ALPHA_TEST",
                  "type": "boolean"
                }, {
                  "name": "USE_TEXTURE",
                  "type": "boolean"
                }, {
                  "name": "IS_GRAY",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "ALPHA_TEST_DATA",
                  "defines": ["USE_ALPHA_TEST"],
                  "binding": 0,
                  "stageFlags": 16,
                  "members": [{
                    "name": "alphaThreshold",
                    "type": 13,
                    "count": 1
                  }]
                }],
                "samplers": [],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 1
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 2
                }]
              }]
            }, {
              "name": "standard",
              "techniques": [{
                "name": "opaque",
                "passes": [{
                  "program": "standard|standard-vs:vert|standard-fs:frag",
                  "properties": {
                    "tilingOffset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "mainColor": {
                      "value": [1, 1, 1, 1],
                      "type": 16,
                      "handleInfo": ["albedo", 0, 16]
                    },
                    "albedoScale": {
                      "value": [1, 1, 1],
                      "type": 15,
                      "handleInfo": ["albedoScaleAndCutoff", 0, 15]
                    },
                    "alphaThreshold": {
                      "value": [0.5],
                      "type": 13,
                      "handleInfo": ["albedoScaleAndCutoff", 3, 13]
                    },
                    "occlusion": {
                      "value": [1],
                      "type": 13,
                      "handleInfo": ["pbrParams", 0, 13]
                    },
                    "roughness": {
                      "value": [0.8],
                      "type": 13,
                      "handleInfo": ["pbrParams", 1, 13]
                    },
                    "metallic": {
                      "value": [0.6],
                      "type": 13,
                      "handleInfo": ["pbrParams", 2, 13]
                    },
                    "normalStrenth": {
                      "value": [1],
                      "type": 13,
                      "handleInfo": ["pbrParams", 3, 13]
                    },
                    "emissive": {
                      "value": [0, 0, 0, 1],
                      "type": 16
                    },
                    "emissiveScale": {
                      "value": [1, 1, 1],
                      "type": 15,
                      "handleInfo": ["emissiveScaleParam", 0, 15]
                    },
                    "mainTexture": {
                      "value": "grey",
                      "type": 28,
                      "handleInfo": ["albedoMap", 0, 28]
                    },
                    "normalMap": {
                      "value": "normal",
                      "type": 28
                    },
                    "pbrMap": {
                      "value": "grey",
                      "type": 28
                    },
                    "metallicRoughnessMap": {
                      "value": "grey",
                      "type": 28
                    },
                    "occlusionMap": {
                      "value": "white",
                      "type": 28
                    },
                    "emissiveMap": {
                      "value": "grey",
                      "type": 28
                    },
                    "albedo": {
                      "type": 16,
                      "value": [1, 1, 1, 1]
                    },
                    "albedoScaleAndCutoff": {
                      "type": 16,
                      "value": [1, 1, 1, 0.5]
                    },
                    "pbrParams": {
                      "type": 16,
                      "value": [1, 0.8, 0.6, 1]
                    },
                    "emissiveScaleParam": {
                      "type": 16,
                      "value": [1, 1, 1, 0]
                    },
                    "albedoMap": {
                      "type": 28,
                      "value": "grey"
                    }
                  }
                }, {
                  "phase": "forward-add",
                  "propertyIndex": 0,
                  "embeddedMacros": {
                    "CC_FORWARD_ADD": true
                  },
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 1,
                      "blendDst": 1,
                      "blendSrcAlpha": 0,
                      "blendDstAlpha": 1
                    }]
                  },
                  "program": "standard|standard-vs:vert|standard-fs:frag",
                  "depthStencilState": {
                    "depthFunc": 2,
                    "depthTest": true,
                    "depthWrite": false
                  },
                  "properties": {
                    "tilingOffset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "mainColor": {
                      "value": [1, 1, 1, 1],
                      "type": 16,
                      "handleInfo": ["albedo", 0, 16]
                    },
                    "albedoScale": {
                      "value": [1, 1, 1],
                      "type": 15,
                      "handleInfo": ["albedoScaleAndCutoff", 0, 15]
                    },
                    "alphaThreshold": {
                      "value": [0.5],
                      "type": 13,
                      "handleInfo": ["albedoScaleAndCutoff", 3, 13]
                    },
                    "occlusion": {
                      "value": [1],
                      "type": 13,
                      "handleInfo": ["pbrParams", 0, 13]
                    },
                    "roughness": {
                      "value": [0.8],
                      "type": 13,
                      "handleInfo": ["pbrParams", 1, 13]
                    },
                    "metallic": {
                      "value": [0.6],
                      "type": 13,
                      "handleInfo": ["pbrParams", 2, 13]
                    },
                    "normalStrenth": {
                      "value": [1],
                      "type": 13,
                      "handleInfo": ["pbrParams", 3, 13]
                    },
                    "emissive": {
                      "value": [0, 0, 0, 1],
                      "type": 16
                    },
                    "emissiveScale": {
                      "value": [1, 1, 1],
                      "type": 15,
                      "handleInfo": ["emissiveScaleParam", 0, 15]
                    },
                    "mainTexture": {
                      "value": "grey",
                      "type": 28,
                      "handleInfo": ["albedoMap", 0, 28]
                    },
                    "normalMap": {
                      "value": "normal",
                      "type": 28
                    },
                    "pbrMap": {
                      "value": "grey",
                      "type": 28
                    },
                    "metallicRoughnessMap": {
                      "value": "grey",
                      "type": 28
                    },
                    "occlusionMap": {
                      "value": "white",
                      "type": 28
                    },
                    "emissiveMap": {
                      "value": "grey",
                      "type": 28
                    },
                    "albedo": {
                      "type": 16,
                      "value": [1, 1, 1, 1]
                    },
                    "albedoScaleAndCutoff": {
                      "type": 16,
                      "value": [1, 1, 1, 0.5]
                    },
                    "pbrParams": {
                      "type": 16,
                      "value": [1, 0.8, 0.6, 1]
                    },
                    "emissiveScaleParam": {
                      "type": 16,
                      "value": [1, 1, 1, 0]
                    },
                    "albedoMap": {
                      "type": 28,
                      "value": "grey"
                    }
                  }
                }, {
                  "phase": "shadow-caster",
                  "propertyIndex": 0,
                  "rasterizerState": {
                    "cullMode": 1
                  },
                  "program": "standard|shadow-caster-vs:vert|shadow-caster-fs:frag",
                  "properties": {
                    "tilingOffset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "mainColor": {
                      "value": [1, 1, 1, 1],
                      "type": 16,
                      "handleInfo": ["albedo", 0, 16]
                    },
                    "albedoScale": {
                      "value": [1, 1, 1],
                      "type": 15,
                      "handleInfo": ["albedoScaleAndCutoff", 0, 15]
                    },
                    "alphaThreshold": {
                      "value": [0.5],
                      "type": 13,
                      "handleInfo": ["albedoScaleAndCutoff", 3, 13]
                    },
                    "occlusion": {
                      "value": [1],
                      "type": 13,
                      "handleInfo": ["pbrParams", 0, 13]
                    },
                    "roughness": {
                      "value": [0.8],
                      "type": 13,
                      "handleInfo": ["pbrParams", 1, 13]
                    },
                    "metallic": {
                      "value": [0.6],
                      "type": 13,
                      "handleInfo": ["pbrParams", 2, 13]
                    },
                    "normalStrenth": {
                      "value": [1],
                      "type": 13,
                      "handleInfo": ["pbrParams", 3, 13]
                    },
                    "emissive": {
                      "value": [0, 0, 0, 1],
                      "type": 16
                    },
                    "emissiveScale": {
                      "value": [1, 1, 1],
                      "type": 15,
                      "handleInfo": ["emissiveScaleParam", 0, 15]
                    },
                    "mainTexture": {
                      "value": "grey",
                      "type": 28,
                      "handleInfo": ["albedoMap", 0, 28]
                    },
                    "albedo": {
                      "type": 16,
                      "value": [1, 1, 1, 1]
                    },
                    "albedoScaleAndCutoff": {
                      "type": 16,
                      "value": [1, 1, 1, 0.5]
                    },
                    "pbrParams": {
                      "type": 16,
                      "value": [1, 0.8, 0.6, 1]
                    },
                    "emissiveScaleParam": {
                      "type": 16,
                      "value": [1, 1, 1, 0]
                    },
                    "albedoMap": {
                      "type": 28,
                      "value": "grey"
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "standard|standard-vs:vert|standard-fs:frag",
                "hash": 2668109714,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }, {
                      "name": "CCShadow",
                      "defines": []
                    }],
                    "samplers": [{
                      "name": "cc_environment",
                      "defines": ["CC_USE_IBL"]
                    }, {
                      "name": "cc_shadowMap",
                      "defines": ["CC_RECEIVE_SHADOW"]
                    }, {
                      "name": "cc_spotLightingMap",
                      "defines": ["CC_RECEIVE_SHADOW"]
                    }]
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCMorph",
                      "defines": ["CC_USE_MORPH"]
                    }, {
                      "name": "CCSkinningTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinningAnimation",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinning",
                      "defines": ["CC_USE_SKINNING", "!CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCLocalBatched",
                      "defines": ["!USE_INSTANCING", "USE_BATCHING"]
                    }, {
                      "name": "CCLocal",
                      "defines": ["!USE_INSTANCING", "!USE_BATCHING"]
                    }, {
                      "name": "CCForwardLight",
                      "defines": ["CC_FORWARD_ADD"]
                    }],
                    "samplers": [{
                      "name": "cc_PositionDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_POSITION"]
                    }, {
                      "name": "cc_NormalDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_NORMAL"]
                    }, {
                      "name": "cc_TangentDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_TANGENT"]
                    }, {
                      "name": "cc_jointTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "cc_lightingMap",
                      "defines": ["USE_LIGHTMAP", "!USE_BATCHING", "!CC_FORWARD_ADD"]
                    }]
                  }
                },
                "defines": [{
                  "name": "CC_USE_MORPH",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_COUNT",
                  "type": "number",
                  "range": [2, 8]
                }, {
                  "name": "CC_SUPPORT_FLOAT_TEXTURE",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_PRECOMPUTED",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_POSITION",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_NORMAL",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_TANGENT",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_SKINNING",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_BAKED_ANIMATION",
                  "type": "boolean"
                }, {
                  "name": "USE_INSTANCING",
                  "type": "boolean"
                }, {
                  "name": "USE_BATCHING",
                  "type": "boolean"
                }, {
                  "name": "USE_LIGHTMAP",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_FOG",
                  "type": "number",
                  "range": [0, 4]
                }, {
                  "name": "CC_FORWARD_ADD",
                  "type": "boolean"
                }, {
                  "name": "USE_VERTEX_COLOR",
                  "type": "boolean"
                }, {
                  "name": "USE_NORMAL_MAP",
                  "type": "boolean"
                }, {
                  "name": "HAS_SECOND_UV",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_IBL",
                  "type": "number",
                  "range": [0, 2]
                }, {
                  "name": "CC_RECEIVE_SHADOW",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }, {
                  "name": "USE_ALBEDO_MAP",
                  "type": "boolean"
                }, {
                  "name": "ALBEDO_UV",
                  "type": "string",
                  "options": ["v_uv", "v_uv1"]
                }, {
                  "name": "NORMAL_UV",
                  "type": "string",
                  "options": ["v_uv", "v_uv1"]
                }, {
                  "name": "PBR_UV",
                  "type": "string",
                  "options": ["v_uv", "v_uv1"]
                }, {
                  "name": "USE_PBR_MAP",
                  "type": "boolean"
                }, {
                  "name": "USE_METALLIC_ROUGHNESS_MAP",
                  "type": "boolean"
                }, {
                  "name": "USE_OCCLUSION_MAP",
                  "type": "boolean"
                }, {
                  "name": "USE_EMISSIVE_MAP",
                  "type": "boolean"
                }, {
                  "name": "EMISSIVE_UV",
                  "type": "string",
                  "options": ["v_uv", "v_uv1"]
                }, {
                  "name": "USE_ALPHA_TEST",
                  "type": "boolean"
                }, {
                  "name": "ALPHA_TEST_CHANNEL",
                  "type": "string",
                  "options": ["a", "r"]
                }],
                "blocks": [{
                  "name": "Constants",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 17,
                  "members": [{
                    "name": "tilingOffset",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "albedo",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "albedoScaleAndCutoff",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "pbrParams",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "emissive",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "emissiveScaleParam",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "albedoMap",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_ALBEDO_MAP"],
                  "stageFlags": 16,
                  "binding": 1
                }, {
                  "name": "normalMap",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_NORMAL_MAP"],
                  "stageFlags": 16,
                  "binding": 2
                }, {
                  "name": "pbrMap",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_PBR_MAP"],
                  "stageFlags": 16,
                  "binding": 3
                }, {
                  "name": "metallicRoughnessMap",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_METALLIC_ROUGHNESS_MAP"],
                  "stageFlags": 16,
                  "binding": 4
                }, {
                  "name": "occlusionMap",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_OCCLUSION_MAP"],
                  "stageFlags": 16,
                  "binding": 5
                }, {
                  "name": "emissiveMap",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_EMISSIVE_MAP"],
                  "stageFlags": 16,
                  "binding": 6
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 2
                }, {
                  "name": "a_tangent",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 3
                }, {
                  "name": "a_vertexId",
                  "type": 13,
                  "count": 1,
                  "defines": ["CC_USE_MORPH"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 6
                }, {
                  "name": "a_joints",
                  "type": 12,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 42,
                  "location": 4
                }, {
                  "name": "a_weights",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 5
                }, {
                  "name": "a_jointAnimInfo",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION", "USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 7
                }, {
                  "name": "a_matWorld0",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 8
                }, {
                  "name": "a_matWorld1",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 9
                }, {
                  "name": "a_matWorld2",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 10
                }, {
                  "name": "a_lightingMapUVParam",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING", "USE_LIGHTMAP"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 11
                }, {
                  "name": "a_dyn_batch_id",
                  "type": 13,
                  "count": 1,
                  "defines": ["!USE_INSTANCING", "USE_BATCHING"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 12
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_VERTEX_COLOR"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 13
                }, {
                  "name": "a_texCoord1",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 14
                }]
              }, {
                "name": "standard|shadow-caster-vs:vert|shadow-caster-fs:frag",
                "hash": 3020491,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCShadow",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCMorph",
                      "defines": ["CC_USE_MORPH"]
                    }, {
                      "name": "CCSkinningTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinningAnimation",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinning",
                      "defines": ["CC_USE_SKINNING", "!CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCLocalBatched",
                      "defines": ["!USE_INSTANCING", "USE_BATCHING"]
                    }, {
                      "name": "CCLocal",
                      "defines": ["!USE_INSTANCING", "!USE_BATCHING"]
                    }],
                    "samplers": [{
                      "name": "cc_PositionDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_POSITION"]
                    }, {
                      "name": "cc_NormalDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_NORMAL"]
                    }, {
                      "name": "cc_TangentDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_TANGENT"]
                    }, {
                      "name": "cc_jointTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }]
                  }
                },
                "defines": [{
                  "name": "CC_USE_MORPH",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_COUNT",
                  "type": "number",
                  "range": [2, 8]
                }, {
                  "name": "CC_SUPPORT_FLOAT_TEXTURE",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_PRECOMPUTED",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_POSITION",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_NORMAL",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_TANGENT",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_SKINNING",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_BAKED_ANIMATION",
                  "type": "boolean"
                }, {
                  "name": "USE_INSTANCING",
                  "type": "boolean"
                }, {
                  "name": "USE_BATCHING",
                  "type": "boolean"
                }, {
                  "name": "USE_LIGHTMAP",
                  "type": "boolean"
                }, {
                  "name": "HAS_SECOND_UV",
                  "type": "boolean"
                }, {
                  "name": "USE_ALBEDO_MAP",
                  "type": "boolean"
                }, {
                  "name": "ALBEDO_UV",
                  "type": "string",
                  "options": ["v_uv", "v_uv1"]
                }, {
                  "name": "USE_ALPHA_TEST",
                  "type": "boolean"
                }, {
                  "name": "ALPHA_TEST_CHANNEL",
                  "type": "string",
                  "options": ["a", "r"]
                }],
                "blocks": [{
                  "name": "Constants",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 17,
                  "members": [{
                    "name": "tilingOffset",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "albedo",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "albedoScaleAndCutoff",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "pbrParams",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "emissive",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "emissiveScaleParam",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "albedoMap",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_ALBEDO_MAP"],
                  "stageFlags": 16,
                  "binding": 1
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 2
                }, {
                  "name": "a_tangent",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 3
                }, {
                  "name": "a_vertexId",
                  "type": 13,
                  "count": 1,
                  "defines": ["CC_USE_MORPH"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 6
                }, {
                  "name": "a_joints",
                  "type": 12,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 42,
                  "location": 4
                }, {
                  "name": "a_weights",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 5
                }, {
                  "name": "a_jointAnimInfo",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION", "USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 7
                }, {
                  "name": "a_matWorld0",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 8
                }, {
                  "name": "a_matWorld1",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 9
                }, {
                  "name": "a_matWorld2",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 10
                }, {
                  "name": "a_lightingMapUVParam",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING", "USE_LIGHTMAP"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 11
                }, {
                  "name": "a_dyn_batch_id",
                  "type": 13,
                  "count": 1,
                  "defines": ["!USE_INSTANCING", "USE_BATCHING"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 12
                }, {
                  "name": "a_texCoord1",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 13
                }]
              }]
            }, {
              "name": "terrain",
              "techniques": [{
                "name": "opaque",
                "passes": [{
                  "program": "terrain|terrain-vs:vert|terrain-fs:frag",
                  "properties": {
                    "UVScale": {
                      "value": [1, 1, 1, 1],
                      "type": 16
                    },
                    "lightMapUVParam": {
                      "value": [0, 0, 0, 0],
                      "type": 16
                    },
                    "metallic": {
                      "value": [0, 0, 0, 0],
                      "type": 16
                    },
                    "roughness": {
                      "value": [1, 1, 1, 1],
                      "type": 16
                    },
                    "weightMap": {
                      "value": "black",
                      "type": 28
                    },
                    "detailMap0": {
                      "value": "grey",
                      "type": 28
                    },
                    "detailMap1": {
                      "value": "grey",
                      "type": 28
                    },
                    "detailMap2": {
                      "value": "grey",
                      "type": 28
                    },
                    "detailMap3": {
                      "value": "grey",
                      "type": 28
                    },
                    "normalMap0": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "normalMap1": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "normalMap2": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "normalMap3": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "lightMap": {
                      "value": "grey",
                      "type": 28
                    }
                  }
                }, {
                  "phase": "forward-add",
                  "propertyIndex": 0,
                  "embeddedMacros": {
                    "CC_FORWARD_ADD": true
                  },
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 1,
                      "blendDst": 1,
                      "blendSrcAlpha": 0,
                      "blendDstAlpha": 1
                    }]
                  },
                  "program": "terrain|terrain-vs:vert|terrain-fs:frag",
                  "depthStencilState": {
                    "depthFunc": 2,
                    "depthTest": true,
                    "depthWrite": false
                  },
                  "properties": {
                    "UVScale": {
                      "value": [1, 1, 1, 1],
                      "type": 16
                    },
                    "lightMapUVParam": {
                      "value": [0, 0, 0, 0],
                      "type": 16
                    },
                    "metallic": {
                      "value": [0, 0, 0, 0],
                      "type": 16
                    },
                    "roughness": {
                      "value": [1, 1, 1, 1],
                      "type": 16
                    },
                    "weightMap": {
                      "value": "black",
                      "type": 28
                    },
                    "detailMap0": {
                      "value": "grey",
                      "type": 28
                    },
                    "detailMap1": {
                      "value": "grey",
                      "type": 28
                    },
                    "detailMap2": {
                      "value": "grey",
                      "type": 28
                    },
                    "detailMap3": {
                      "value": "grey",
                      "type": 28
                    },
                    "normalMap0": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "normalMap1": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "normalMap2": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "normalMap3": {
                      "value": "normal-texture",
                      "type": 28
                    },
                    "lightMap": {
                      "value": "grey",
                      "type": 28
                    }
                  }
                }, {
                  "phase": "shadow-add",
                  "propertyIndex": 0,
                  "rasterizerState": {
                    "cullMode": 2
                  },
                  "program": "terrain|shadow-caster-vs:vert|shadow-caster-fs:frag"
                }]
              }],
              "shaders": [{
                "name": "terrain|terrain-vs:vert|terrain-fs:frag",
                "hash": 2952542850,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }, {
                      "name": "CCShadow",
                      "defines": []
                    }],
                    "samplers": [{
                      "name": "cc_environment",
                      "defines": ["CC_USE_IBL"]
                    }, {
                      "name": "cc_shadowMap",
                      "defines": ["CC_RECEIVE_SHADOW"]
                    }, {
                      "name": "cc_spotLightingMap",
                      "defines": ["CC_RECEIVE_SHADOW"]
                    }]
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": []
                    }, {
                      "name": "CCForwardLight",
                      "defines": ["CC_FORWARD_ADD"]
                    }],
                    "samplers": []
                  }
                },
                "defines": [{
                  "name": "CC_USE_FOG",
                  "type": "number",
                  "range": [0, 4]
                }, {
                  "name": "CC_FORWARD_ADD",
                  "type": "boolean"
                }, {
                  "name": "USE_NORMALMAP",
                  "type": "boolean"
                }, {
                  "name": "USE_LIGHTMAP",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_IBL",
                  "type": "number",
                  "range": [0, 2]
                }, {
                  "name": "CC_RECEIVE_SHADOW",
                  "type": "boolean"
                }, {
                  "name": "USE_BATCHING",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }, {
                  "name": "LAYERS",
                  "type": "number",
                  "range": [0, 4]
                }, {
                  "name": "USE_PBR",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "TexCoords",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 1,
                  "members": [{
                    "name": "UVScale",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "lightMapUVParam",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "PbrParams",
                  "defines": [],
                  "binding": 1,
                  "stageFlags": 16,
                  "members": [{
                    "name": "metallic",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "roughness",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "weightMap",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 2
                }, {
                  "name": "detailMap0",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 3
                }, {
                  "name": "detailMap1",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 4
                }, {
                  "name": "detailMap2",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 5
                }, {
                  "name": "detailMap3",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 6
                }, {
                  "name": "normalMap0",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 7
                }, {
                  "name": "normalMap1",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 8
                }, {
                  "name": "normalMap2",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 9
                }, {
                  "name": "normalMap3",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 10
                }, {
                  "name": "lightMap",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 11
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 2
                }]
              }, {
                "name": "terrain|shadow-caster-vs:vert|shadow-caster-fs:frag",
                "hash": 3874167763,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }, {
                      "name": "CCShadow",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCLocal",
                      "defines": []
                    }],
                    "samplers": []
                  }
                },
                "defines": [],
                "blocks": [],
                "samplers": [],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 2
                }]
              }]
            }, {
              "name": "unlit",
              "techniques": [{
                "name": "opaque",
                "passes": [{
                  "program": "unlit|unlit-vs:vert|unlit-fs:frag",
                  "properties": {
                    "mainTexture": {
                      "value": "grey",
                      "type": 28
                    },
                    "tilingOffset": {
                      "value": [1, 1, 0, 0],
                      "type": 16
                    },
                    "mainColor": {
                      "value": [1, 1, 1, 1],
                      "type": 16
                    },
                    "colorScale": {
                      "value": [1, 1, 1],
                      "type": 15,
                      "handleInfo": ["colorScaleAndCutoff", 0, 15]
                    },
                    "alphaThreshold": {
                      "value": [0.5],
                      "type": 13,
                      "handleInfo": ["colorScaleAndCutoff", 3, 13]
                    },
                    "color": {
                      "type": 16,
                      "handleInfo": ["mainColor", 0, 16]
                    },
                    "colorScaleAndCutoff": {
                      "type": 16,
                      "value": [1, 1, 1, 0.5]
                    }
                  }
                }]
              }],
              "shaders": [{
                "name": "unlit|unlit-vs:vert|unlit-fs:frag",
                "hash": 3822871803,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCMorph",
                      "defines": ["CC_USE_MORPH"]
                    }, {
                      "name": "CCSkinningTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinningAnimation",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinning",
                      "defines": ["CC_USE_SKINNING", "!CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCLocalBatched",
                      "defines": ["!USE_INSTANCING", "USE_BATCHING"]
                    }, {
                      "name": "CCLocal",
                      "defines": ["!USE_INSTANCING", "!USE_BATCHING"]
                    }],
                    "samplers": [{
                      "name": "cc_PositionDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_POSITION"]
                    }, {
                      "name": "cc_NormalDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_NORMAL"]
                    }, {
                      "name": "cc_TangentDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_TANGENT"]
                    }, {
                      "name": "cc_jointTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }]
                  }
                },
                "defines": [{
                  "name": "CC_USE_MORPH",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_COUNT",
                  "type": "number",
                  "range": [2, 8]
                }, {
                  "name": "CC_SUPPORT_FLOAT_TEXTURE",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_PRECOMPUTED",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_POSITION",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_NORMAL",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_TANGENT",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_SKINNING",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_BAKED_ANIMATION",
                  "type": "boolean"
                }, {
                  "name": "USE_INSTANCING",
                  "type": "boolean"
                }, {
                  "name": "USE_BATCHING",
                  "type": "boolean"
                }, {
                  "name": "USE_LIGHTMAP",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_FOG",
                  "type": "number",
                  "range": [0, 4]
                }, {
                  "name": "CC_FORWARD_ADD",
                  "type": "boolean"
                }, {
                  "name": "USE_VERTEX_COLOR",
                  "type": "boolean"
                }, {
                  "name": "USE_TEXTURE",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }, {
                  "name": "USE_ALPHA_TEST",
                  "type": "boolean"
                }, {
                  "name": "ALPHA_TEST_CHANNEL",
                  "type": "string",
                  "options": ["a", "r", "g", "b"]
                }],
                "blocks": [{
                  "name": "TexCoords",
                  "defines": ["USE_TEXTURE"],
                  "binding": 0,
                  "stageFlags": 1,
                  "members": [{
                    "name": "tilingOffset",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "Constant",
                  "defines": [],
                  "binding": 1,
                  "stageFlags": 16,
                  "members": [{
                    "name": "mainColor",
                    "type": 16,
                    "count": 1
                  }, {
                    "name": "colorScaleAndCutoff",
                    "type": 16,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "mainTexture",
                  "type": 28,
                  "count": 1,
                  "defines": ["USE_TEXTURE"],
                  "stageFlags": 16,
                  "binding": 2
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 2
                }, {
                  "name": "a_tangent",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 3
                }, {
                  "name": "a_vertexId",
                  "type": 13,
                  "count": 1,
                  "defines": ["CC_USE_MORPH"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 6
                }, {
                  "name": "a_joints",
                  "type": 12,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 42,
                  "location": 4
                }, {
                  "name": "a_weights",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 5
                }, {
                  "name": "a_jointAnimInfo",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION", "USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 7
                }, {
                  "name": "a_matWorld0",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 8
                }, {
                  "name": "a_matWorld1",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 9
                }, {
                  "name": "a_matWorld2",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 10
                }, {
                  "name": "a_lightingMapUVParam",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING", "USE_LIGHTMAP"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 11
                }, {
                  "name": "a_dyn_batch_id",
                  "type": 13,
                  "count": 1,
                  "defines": ["!USE_INSTANCING", "USE_BATCHING"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 12
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_VERTEX_COLOR"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 13
                }]
              }]
            }, {
              "name": "planar-shadow",
              "techniques": [{
                "passes": [{
                  "phase": "planarShadow",
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 4,
                      "blendDstAlpha": 4
                    }]
                  },
                  "program": "planar-shadow|planar-shadow-vs:vert|planar-shadow-fs:frag",
                  "depthStencilState": {
                    "depthTest": true,
                    "depthWrite": false,
                    "stencilTestFront": true,
                    "stencilFuncFront": 5,
                    "stencilPassOpFront": 2,
                    "stencilRefBack": 128,
                    "stencilRefFront": 128,
                    "stencilReadMaskBack": 128,
                    "stencilReadMaskFront": 128,
                    "stencilWriteMaskBack": 128,
                    "stencilWriteMaskFront": 128
                  }
                }]
              }],
              "shaders": [{
                "name": "planar-shadow|planar-shadow-vs:vert|planar-shadow-fs:frag",
                "hash": 2901856202,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }, {
                      "name": "CCShadow",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [{
                      "name": "CCMorph",
                      "defines": ["CC_USE_MORPH"]
                    }, {
                      "name": "CCSkinningTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinningAnimation",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCSkinning",
                      "defines": ["CC_USE_SKINNING", "!CC_USE_BAKED_ANIMATION"]
                    }, {
                      "name": "CCLocalBatched",
                      "defines": ["!USE_INSTANCING", "USE_BATCHING"]
                    }, {
                      "name": "CCLocal",
                      "defines": ["!USE_INSTANCING", "!USE_BATCHING"]
                    }],
                    "samplers": [{
                      "name": "cc_PositionDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_POSITION"]
                    }, {
                      "name": "cc_NormalDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_NORMAL"]
                    }, {
                      "name": "cc_TangentDisplacements",
                      "defines": ["CC_USE_MORPH", "CC_MORPH_TARGET_HAS_TANGENT"]
                    }, {
                      "name": "cc_jointTexture",
                      "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION"]
                    }]
                  }
                },
                "defines": [{
                  "name": "CC_USE_MORPH",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_COUNT",
                  "type": "number",
                  "range": [2, 8]
                }, {
                  "name": "CC_SUPPORT_FLOAT_TEXTURE",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_PRECOMPUTED",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_POSITION",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_NORMAL",
                  "type": "boolean"
                }, {
                  "name": "CC_MORPH_TARGET_HAS_TANGENT",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_SKINNING",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_BAKED_ANIMATION",
                  "type": "boolean"
                }, {
                  "name": "USE_INSTANCING",
                  "type": "boolean"
                }, {
                  "name": "USE_BATCHING",
                  "type": "boolean"
                }, {
                  "name": "USE_LIGHTMAP",
                  "type": "boolean"
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }],
                "blocks": [],
                "samplers": [],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 2
                }, {
                  "name": "a_tangent",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 3
                }, {
                  "name": "a_vertexId",
                  "type": 13,
                  "count": 1,
                  "defines": ["CC_USE_MORPH"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 6
                }, {
                  "name": "a_joints",
                  "type": 12,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 42,
                  "location": 4
                }, {
                  "name": "a_weights",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING"],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 5
                }, {
                  "name": "a_jointAnimInfo",
                  "type": 16,
                  "count": 1,
                  "defines": ["CC_USE_SKINNING", "CC_USE_BAKED_ANIMATION", "USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 7
                }, {
                  "name": "a_matWorld0",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 8
                }, {
                  "name": "a_matWorld1",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 9
                }, {
                  "name": "a_matWorld2",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 10
                }, {
                  "name": "a_lightingMapUVParam",
                  "type": 16,
                  "count": 1,
                  "defines": ["USE_INSTANCING", "USE_LIGHTMAP"],
                  "stageFlags": 1,
                  "format": 44,
                  "isInstanced": true,
                  "location": 11
                }, {
                  "name": "a_dyn_batch_id",
                  "type": 13,
                  "count": 1,
                  "defines": ["!USE_INSTANCING", "USE_BATCHING"],
                  "stageFlags": 1,
                  "format": 11,
                  "location": 12
                }]
              }]
            }, {
              "name": "skybox",
              "techniques": [{
                "passes": [{
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "program": "skybox|sky-vs:vert|sky-fs:frag",
                  "priority": 245,
                  "depthStencilState": {
                    "depthTest": true,
                    "depthWrite": false
                  }
                }]
              }],
              "shaders": [{
                "name": "skybox|sky-vs:vert|sky-fs:frag",
                "hash": 2319917655,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": [{
                      "name": "cc_environment",
                      "defines": []
                    }]
                  },
                  "locals": {
                    "blocks": [],
                    "samplers": []
                  }
                },
                "defines": [{
                  "name": "CC_USE_IBL",
                  "type": "number",
                  "range": [0, 2]
                }, {
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }, {
                  "name": "USE_RGBE_CUBEMAP",
                  "type": "boolean"
                }],
                "blocks": [],
                "samplers": [],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_normal",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 1
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 2
                }, {
                  "name": "a_tangent",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 3
                }]
              }]
            }, {
              "name": "profiler",
              "techniques": [{
                "passes": [{
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 4,
                      "blendDstAlpha": 4
                    }]
                  },
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "program": "profiler|profiler-vs:vert|profiler-fs:frag",
                  "depthStencilState": {
                    "depthTest": false,
                    "depthWrite": false
                  }
                }]
              }],
              "shaders": [{
                "name": "profiler|profiler-vs:vert|profiler-fs:frag",
                "hash": 2029303284,
                "builtins": {
                  "globals": {
                    "blocks": [{
                      "name": "CCGlobal",
                      "defines": []
                    }, {
                      "name": "CCCamera",
                      "defines": []
                    }],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [],
                    "samplers": []
                  }
                },
                "defines": [{
                  "name": "CC_USE_HDR",
                  "type": "boolean"
                }],
                "blocks": [{
                  "name": "Constants",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 1,
                  "members": [{
                    "name": "offset",
                    "type": 16,
                    "count": 1
                  }]
                }, {
                  "name": "PerFrameInfo",
                  "defines": [],
                  "binding": 1,
                  "stageFlags": 1,
                  "members": [{
                    "name": "digits",
                    "type": 16,
                    "count": 20
                  }]
                }],
                "samplers": [{
                  "name": "mainTexture",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 2
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 15,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 32,
                  "location": 0
                }, {
                  "name": "a_color",
                  "type": 16,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 44,
                  "location": 1
                }]
              }]
            }, {
              "name": "splash-screen",
              "techniques": [{
                "passes": [{
                  "blendState": {
                    "targets": [{
                      "blend": true,
                      "blendSrc": 2,
                      "blendDst": 4,
                      "blendDstAlpha": 4
                    }]
                  },
                  "rasterizerState": {
                    "cullMode": 0
                  },
                  "program": "splash-screen|splash-screen-vs:vert|splash-screen-fs:frag",
                  "depthStencilState": {
                    "depthTest": false,
                    "depthWrite": false
                  }
                }]
              }],
              "shaders": [{
                "name": "splash-screen|splash-screen-vs:vert|splash-screen-fs:frag",
                "hash": 2106901053,
                "builtins": {
                  "globals": {
                    "blocks": [],
                    "samplers": []
                  },
                  "locals": {
                    "blocks": [],
                    "samplers": []
                  }
                },
                "defines": [],
                "blocks": [{
                  "name": "splashFrag",
                  "defines": [],
                  "binding": 0,
                  "stageFlags": 16,
                  "members": [{
                    "name": "u_precent",
                    "type": 13,
                    "count": 1
                  }]
                }],
                "samplers": [{
                  "name": "mainTexture",
                  "type": 28,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 16,
                  "binding": 1
                }],
                "attributes": [{
                  "name": "a_position",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 0
                }, {
                  "name": "a_texCoord",
                  "type": 14,
                  "count": 1,
                  "defines": [],
                  "stageFlags": 1,
                  "format": 21,
                  "location": 1
                }]
              }]
            }]);

            var _type2reader, _type2writer;
            var dtMask = 0xf0000000;
            var typeMask = 0x0fc00000;
            var setMask = 0x00300000;
            var bindingMask = 0x000fc000;
            var offsetMask = 0x00003fff;
            var PropertyType;

            (function (PropertyType) {
              PropertyType[PropertyType["UBO"] = 0] = "UBO";
              PropertyType[PropertyType["SAMPLER"] = 1] = "SAMPLER";
            })(PropertyType || (PropertyType = exports('P', {})));

            var genHandle = exports('g', function genHandle(pt, set, binding, type, offset) {
              if (offset === void 0) {
                offset = 0;
              }

              return pt << 28 & dtMask | type << 22 & typeMask | set << 20 & setMask | binding << 14 & bindingMask | offset & offsetMask;
            });
            var getPropertyTypeFromHandle = exports('a', function getPropertyTypeFromHandle(handle) {
              return (handle & dtMask) >>> 28;
            });
            var getTypeFromHandle = exports('b', function getTypeFromHandle(handle) {
              return (handle & typeMask) >>> 22;
            });
            var getSetIndexFromHandle = exports('c', function getSetIndexFromHandle(handle) {
              return (handle & setMask) >>> 20;
            });
            var getBindingFromHandle = exports('d', function getBindingFromHandle(handle) {
              return (handle & bindingMask) >>> 14;
            });
            var getOffsetFromHandle = exports('e', function getOffsetFromHandle(handle) {
              return handle & offsetMask;
            });
            var customizeType = exports('f', function customizeType(handle, type) {
              return handle & ~typeMask | type << 22 & typeMask;
            });
            var type2reader = exports('t', (_type2reader = {}, _type2reader[Type.UNKNOWN] = function (a, v, idx) {

              return console.warn('illegal uniform handle');
            }, _type2reader[Type.INT] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return a[idx];
            }, _type2reader[Type.INT2] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec2.fromArray(v, a, idx);
            }, _type2reader[Type.INT3] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec3.fromArray(v, a, idx);
            }, _type2reader[Type.INT4] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec4.fromArray(v, a, idx);
            }, _type2reader[Type.FLOAT] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return a[idx];
            }, _type2reader[Type.FLOAT2] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec2.fromArray(v, a, idx);
            }, _type2reader[Type.FLOAT3] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec3.fromArray(v, a, idx);
            }, _type2reader[Type.FLOAT4] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec4.fromArray(v, a, idx);
            }, _type2reader[Type.MAT3] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Mat3.fromArray(v, a, idx);
            }, _type2reader[Type.MAT4] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Mat4.fromArray(v, a, idx);
            }, _type2reader));
            var type2writer = exports('h', (_type2writer = {}, _type2writer[Type.UNKNOWN] = function (a, v, idx) {

              return console.warn('illegal uniform handle');
            }, _type2writer[Type.INT] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return a[idx] = v;
            }, _type2writer[Type.INT2] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec2.toArray(a, v, idx);
            }, _type2writer[Type.INT3] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec3.toArray(a, v, idx);
            }, _type2writer[Type.INT4] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec4.toArray(a, v, idx);
            }, _type2writer[Type.FLOAT] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return a[idx] = v;
            }, _type2writer[Type.FLOAT2] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec2.toArray(a, v, idx);
            }, _type2writer[Type.FLOAT3] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec3.toArray(a, v, idx);
            }, _type2writer[Type.FLOAT4] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Vec4.toArray(a, v, idx);
            }, _type2writer[Type.MAT3] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Mat3.toArray(a, v, idx);
            }, _type2writer[Type.MAT4] = function (a, v, idx) {
              if (idx === void 0) {
                idx = 0;
              }

              return Mat4.toArray(a, v, idx);
            }, _type2writer));
            var defaultValues = [Object.freeze([0]), Object.freeze([0, 0]), Object.freeze([0, 0, 0, 0]), Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])];
            function getDefaultFromType(type) {
              switch (type) {
                case Type.BOOL:
                case Type.INT:
                case Type.UINT:
                case Type.FLOAT:
                  return defaultValues[0];

                case Type.BOOL2:
                case Type.INT2:
                case Type.UINT2:
                case Type.FLOAT2:
                  return defaultValues[1];

                case Type.BOOL4:
                case Type.INT4:
                case Type.UINT4:
                case Type.FLOAT4:
                  return defaultValues[2];

                case Type.MAT4:
                  return defaultValues[3];

                case Type.SAMPLER2D:
                  return 'default-texture';

                case Type.SAMPLER_CUBE:
                  return 'default-cube-texture';
              }

              return defaultValues[0];
            }
            function overrideMacros(target, source) {
              var entries = Object.entries(source);
              var isDifferent = false;

              for (var i = 0; i < entries.length; i++) {
                if (target[entries[i][0]] !== entries[i][1]) {
                  target[entries[i][0]] = entries[i][1];
                  isDifferent = true;
                }
              }

              return isDifferent;
            }

            var _dsLayoutInfo = new DescriptorSetLayoutInfo();

            function getBitCount(cnt) {
              return Math.ceil(Math.log2(Math.max(cnt, 2)));
            }

            function mapDefine(info, def) {
              switch (info.type) {
                case 'boolean':
                  return typeof def === 'number' ? def.toString() : def ? '1' : '0';

                case 'string':
                  return def !== undefined ? def : info.options[0];

                case 'number':
                  return def !== undefined ? def.toString() : info.range[0].toString();

                default:
                  console.warn("unknown define type '" + info.type + "'");
                  return '-1';
              }
            }

            function prepareDefines(defs, tDefs) {
              var macros = [];

              for (var i = 0; i < tDefs.length; i++) {
                var tmpl = tDefs[i];
                var name = tmpl.name;
                var v = defs[name];

                var _value = mapDefine(tmpl, v);

                var isDefault = !v || v === '0';
                macros.push({
                  name: name,
                  value: _value,
                  isDefault: isDefault
                });
              }

              return macros;
            }

            function getShaderInstanceName(name, macros) {
              return name + macros.reduce(function (acc, cur) {
                return cur.isDefault ? acc : acc + "|" + cur.name + cur.value;
              }, '');
            }

            function insertBuiltinBindings(tmpl, tmplInfo, source, type, outBindings) {
              var target = tmpl.builtins[type];
              var tempBlocks = [];

              var _loop = function _loop(i) {
                var b = target.blocks[i];
                var info = source.layouts[b.name];
                var binding = info && source.bindings.find(function (bd) {
                  return bd.binding === info.binding;
                });

                if (!info || !binding || !(binding.descriptorType & DESCRIPTOR_BUFFER_TYPE)) {
                  console.warn("builtin UBO '" + b.name + "' not available!");
                  return "continue";
                }

                tempBlocks.push(info);
                if (outBindings && !outBindings.includes(binding)) outBindings.push(binding);
              };

              for (var i = 0; i < target.blocks.length; i++) {
                var _ret = _loop(i);

                if (_ret === "continue") continue;
              }

              Array.prototype.unshift.apply(tmplInfo.gfxBlocks, tempBlocks);
              var tempSamplers = [];

              var _loop2 = function _loop2(_i) {
                var s = target.samplers[_i];
                var info = source.layouts[s.name];
                var binding = info && source.bindings.find(function (bd) {
                  return bd.binding === info.binding;
                });

                if (!info || !binding || !(binding.descriptorType & DESCRIPTOR_SAMPLER_TYPE)) {
                  console.warn("builtin sampler '" + s.name + "' not available!");
                  return "continue";
                }

                tempSamplers.push(info);
                if (outBindings && !outBindings.includes(binding)) outBindings.push(binding);
              };

              for (var _i = 0; _i < target.samplers.length; _i++) {
                var _ret2 = _loop2(_i);

                if (_ret2 === "continue") continue;
              }

              Array.prototype.unshift.apply(tmplInfo.gfxSamplers, tempSamplers);
              if (outBindings) outBindings.sort(function (a, b) {
                return a.binding - b.binding;
              });
            }

            function getSize(block) {
              return block.members.reduce(function (s, m) {
                return s + GetTypeSize(m.type) * m.count;
              }, 0);
            }

            function genHandles(tmpl) {
              var handleMap = {};

              for (var i = 0; i < tmpl.blocks.length; i++) {
                var block = tmpl.blocks[i];
                var members = block.members;
                var offset = 0;

                for (var j = 0; j < members.length; j++) {
                  var uniform = members[j];
                  handleMap[uniform.name] = genHandle(PropertyType.UBO, SetIndex.MATERIAL, block.binding, uniform.type, offset);
                  offset += (GetTypeSize(uniform.type) >> 2) * uniform.count;
                }
              }

              for (var _i2 = 0; _i2 < tmpl.samplers.length; _i2++) {
                var sampler = tmpl.samplers[_i2];
                handleMap[sampler.name] = genHandle(PropertyType.SAMPLER, SetIndex.MATERIAL, sampler.binding, sampler.type);
              }

              return handleMap;
            }

            function dependencyCheck(dependencies, defines) {
              for (var i = 0; i < dependencies.length; i++) {
                var d = dependencies[i];

                if (d[0] === '!') {
                  if (defines[d.slice(1)]) {
                    return false;
                  }
                } else if (!defines[d]) {
                  return false;
                }
              }

              return true;
            }

            function getActiveAttributes(tmpl, tmplInfo, defines) {
              var out = [];
              var attributes = tmpl.attributes;
              var gfxAttributes = tmplInfo.gfxAttributes;

              for (var i = 0; i < attributes.length; i++) {
                if (!dependencyCheck(attributes[i].defines, defines)) {
                  continue;
                }

                out.push(gfxAttributes[i]);
              }

              return out;
            }

            var ProgramLib = function () {
              function ProgramLib() {
                this._templates = {};
                this._cache = {};
                this._templateInfos = {};
              }

              var _proto = ProgramLib.prototype;

              _proto.register = function register(effect) {
                for (var i = 0; i < effect.shaders.length; i++) {
                  var tmpl = this.define(effect.shaders[i]);
                  tmpl.effectName = effect.name;
                }
              };

              _proto.define = function define(shader) {
                var curTmpl = this._templates[shader.name];

                if (curTmpl && curTmpl.hash === shader.hash) {
                  return curTmpl;
                }

                var tmpl = _extends({}, shader);

                var offset = 0;

                var _loop3 = function _loop3(i) {
                  var def = tmpl.defines[i];
                  var cnt = 1;

                  if (def.type === 'number') {
                    var range = def.range;
                    cnt = getBitCount(range[1] - range[0] + 1);

                    def._map = function (value) {
                      return value - range[0];
                    };
                  } else if (def.type === 'string') {
                    cnt = getBitCount(def.options.length);

                    def._map = function (value) {
                      return Math.max(0, def.options.findIndex(function (s) {
                        return s === value;
                      }));
                    };
                  } else if (def.type === 'boolean') {
                    def._map = function (value) {
                      return value ? 1 : 0;
                    };
                  }

                  def._offset = offset;
                  offset += cnt;
                };

                for (var i = 0; i < tmpl.defines.length; i++) {
                  _loop3(i);
                }

                if (offset > 31) {
                  tmpl.uber = true;
                }

                this._templates[shader.name] = tmpl;

                if (!this._templateInfos[tmpl.hash]) {
                  var tmplInfo = {};
                  tmplInfo.samplerStartBinding = tmpl.blocks.length;
                  tmplInfo.gfxBlocks = [];
                  tmplInfo.gfxSamplers = [];
                  tmplInfo.bindings = [];
                  tmplInfo.blockSizes = [];

                  for (var _i3 = 0; _i3 < tmpl.blocks.length; _i3++) {
                    var block = tmpl.blocks[_i3];
                    tmplInfo.blockSizes.push(getSize(block));
                    tmplInfo.bindings.push(new DescriptorSetLayoutBinding(block.binding, block.descriptorType || DescriptorType.UNIFORM_BUFFER, 1, block.stageFlags));
                    tmplInfo.gfxBlocks.push(new UniformBlock(SetIndex.MATERIAL, block.binding, block.name, block.members.map(function (m) {
                      return new Uniform(m.name, m.type, m.count);
                    }), 1));
                  }

                  for (var _i4 = 0; _i4 < tmpl.samplers.length; _i4++) {
                    var sampler = tmpl.samplers[_i4];
                    tmplInfo.bindings.push(new DescriptorSetLayoutBinding(sampler.binding, sampler.descriptorType || DescriptorType.SAMPLER, sampler.count, sampler.stageFlags));
                    tmplInfo.gfxSamplers.push(new UniformSampler(SetIndex.MATERIAL, sampler.binding, sampler.name, sampler.type, sampler.count));
                  }

                  tmplInfo.gfxAttributes = [];

                  for (var _i5 = 0; _i5 < tmpl.attributes.length; _i5++) {
                    var attr = tmpl.attributes[_i5];
                    tmplInfo.gfxAttributes.push(new Attribute(attr.name, attr.format, attr.isNormalized, 0, attr.isInstanced, attr.location));
                  }

                  insertBuiltinBindings(tmpl, tmplInfo, localDescriptorSetLayout, 'locals');
                  tmplInfo.gfxStages = [];
                  tmplInfo.gfxStages.push(new ShaderStage(ShaderStageFlagBit.VERTEX, ''));
                  tmplInfo.gfxStages.push(new ShaderStage(ShaderStageFlagBit.FRAGMENT, ''));
                  tmplInfo.handleMap = genHandles(tmpl);
                  tmplInfo.hPipelineLayout = NULL_HANDLE;
                  tmplInfo.setLayouts = [];
                  this._templateInfos[tmpl.hash] = tmplInfo;
                }

                return tmpl;
              };

              _proto.getTemplate = function getTemplate(name) {
                return this._templates[name];
              };

              _proto.getTemplateInfo = function getTemplateInfo(name) {
                var hash = this._templates[name].hash;
                return this._templateInfos[hash];
              };

              _proto.getDescriptorSetLayout = function getDescriptorSetLayout(device, name, isLocal) {
                if (isLocal === void 0) {
                  isLocal = false;
                }

                var tmpl = this._templates[name];
                var tmplInfo = this._templateInfos[tmpl.hash];

                if (!tmplInfo.setLayouts.length) {
                  _dsLayoutInfo.bindings = tmplInfo.bindings;
                  tmplInfo.setLayouts[SetIndex.MATERIAL] = device.createDescriptorSetLayout(_dsLayoutInfo);
                  _dsLayoutInfo.bindings = localDescriptorSetLayout.bindings;
                  tmplInfo.setLayouts[SetIndex.LOCAL] = device.createDescriptorSetLayout(_dsLayoutInfo);
                }

                return tmplInfo.setLayouts[isLocal ? SetIndex.LOCAL : SetIndex.MATERIAL];
              };

              _proto.hasProgram = function hasProgram(name) {
                return this._templates[name] !== undefined;
              };

              _proto.getKey = function getKey(name, defines) {
                var tmpl = this._templates[name];
                var tmplDefs = tmpl.defines;

                if (tmpl.uber) {
                  var _key = '';

                  for (var i = 0; i < tmplDefs.length; i++) {
                    var tmplDef = tmplDefs[i];
                    var _value2 = defines[tmplDef.name];

                    if (!_value2 || !tmplDef._map) {
                      continue;
                    }

                    var mapped = tmplDef._map(_value2);

                    var offset = tmplDef._offset;
                    _key += "" + offset + mapped + "|";
                  }

                  return "" + _key + tmpl.hash;
                }

                var key = 0;

                for (var _i6 = 0; _i6 < tmplDefs.length; _i6++) {
                  var _tmplDef = tmplDefs[_i6];
                  var _value3 = defines[_tmplDef.name];

                  if (!_value3 || !_tmplDef._map) {
                    continue;
                  }

                  var _mapped = _tmplDef._map(_value3);

                  var _offset = _tmplDef._offset;
                  key |= _mapped << _offset;
                }

                return key.toString(16) + "|" + tmpl.hash;
              };

              _proto.destroyShaderByDefines = function destroyShaderByDefines(defines) {
                var _this = this;

                var names = Object.keys(defines);

                if (!names.length) {
                  return;
                }

                var regexes = names.map(function (cur) {
                  var val = defines[cur];

                  if (typeof val === 'boolean') {
                    val = val ? '1' : '0';
                  }

                  return new RegExp("" + cur + val);
                });
                var keys = Object.keys(this._cache).filter(function (k) {
                  return regexes.every(function (re) {
                    return re.test(ShaderPool.get(_this._cache[k]).name);
                  });
                });

                for (var i = 0; i < keys.length; i++) {
                  var k = keys[i];
                  var prog = ShaderPool.get(this._cache[k]);
                  console.log("destroyed shader " + prog.name);
                  prog.destroy();
                  delete this._cache[k];
                }
              };

              _proto.getGFXShader = function getGFXShader(device, name, defines, pipeline, key) {
                Object.assign(defines, pipeline.macros);
                if (!key) key = this.getKey(name, defines);
                var res = this._cache[key];

                if (res) {
                  return res;
                }

                var tmpl = this._templates[name];
                var tmplInfo = this._templateInfos[tmpl.hash];

                if (!tmplInfo.hPipelineLayout) {
                  this.getDescriptorSetLayout(device, name);
                  insertBuiltinBindings(tmpl, tmplInfo, globalDescriptorSetLayout, 'globals');
                  tmplInfo.setLayouts[SetIndex.GLOBAL] = pipeline.descriptorSetLayout;
                  tmplInfo.hPipelineLayout = PipelineLayoutPool.alloc(device, new PipelineLayoutInfo(tmplInfo.setLayouts));
                }

                var macroArray = prepareDefines(defines, tmpl.defines);
                var prefix = macroArray.reduce(function (acc, cur) {
                  return acc + "#define " + cur.name + " " + cur.value + "\n";
                }, '') + "\n";
                var src = tmpl.glsl3;
                var deviceShaderVersion = getDeviceShaderVersion(device);

                if (deviceShaderVersion) {
                  src = tmpl[deviceShaderVersion];
                } else {
                  console.error('Invalid GFX API!');
                }

                tmplInfo.gfxStages[0].source = prefix + src.vert;
                tmplInfo.gfxStages[1].source = prefix + src.frag;
                var attributes = getActiveAttributes(tmpl, tmplInfo, defines);
                var instanceName = getShaderInstanceName(name, macroArray);
                var shaderInfo = new ShaderInfo(instanceName, tmplInfo.gfxStages, attributes, tmplInfo.gfxBlocks, tmplInfo.gfxSamplers);
                return this._cache[key] = ShaderPool.alloc(device, shaderInfo);
              };

              return ProgramLib;
            }();

            function getDeviceShaderVersion(device) {
              switch (device.gfxAPI) {
                case API.GLES2:
                case API.WEBGL:
                  return 'glsl1';

                case API.GLES3:
                case API.WEBGL2:
                  return 'glsl3';

                default:
                  return 'glsl4';
              }
            }
            var programLib = exports('p', new ProgramLib());
            legacyCC.programLib = programLib;

            var glsl1 = [[{
              "vert": "\nprecision mediump float;\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matViewInv;\nuniform highp mat4 cc_matViewProj;\nuniform highp mat4 cc_matWorld;\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nvarying mediump vec2 uv;\nvarying mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n  , mat4 viewInv\n) {\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n}\nattribute vec3 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nuniform vec4 cc_size_rotation;\nvec4 vs_main() {\n  vec4 pos = vec4(a_position, 1);\n  pos = cc_matWorld * pos;\n  vec2 vertOffset = a_texCoord.xy - 0.5;\n  computeVertPos(pos, vertOffset, quaternionFromEuler(vec3(0., 0., cc_size_rotation.z)), vec3(cc_size_rotation.xy, 0.), cc_matViewInv);\n  pos = cc_matViewProj * pos;\n  uv = a_texCoord.xy;\n  color = a_color;\n  return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
              "frag": "\nprecision mediump float;\nuniform mediump vec4 cc_exposure;\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nvarying vec2 uv;\nvarying vec4 color;\nuniform sampler2D mainTexture;\nuniform vec4 tintColor;\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture2D(mainTexture, uv);\n  return CCFragOutput(col);\n}\nvoid main() { gl_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nattribute vec3 a_position;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 frag () {\n  vec4 o = vec4(1.0);\n  return o;\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nuniform highp mat4 cc_matViewProj;\nuniform highp mat4 cc_matWorld;\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\nattribute float a_dist;\nvarying float v_dist;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  pos = cc_matViewProj * cc_matWorld * pos;\n  v_color = a_color;\n  v_dist = a_dist;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives: enable\n#endif\nprecision highp float;\nvarying vec4 v_color;\nvarying float v_dist;\nvec4 frag () {\n  vec4 o = v_color;\n    #ifdef GL_OES_standard_derivatives\n      float aa = fwidth(v_dist);\n    #else\n      float aa = 0.05;\n    #endif\n  float alpha = 1. - smoothstep(-aa, 0., abs(v_dist) - 1.0);\n  o.rgb *= o.a;\n  o *= alpha;\n  return o;\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nmat4 matrixFromRT (vec4 q, vec3 p){\n  float x2 = q.x + q.x;\n  float y2 = q.y + q.y;\n  float z2 = q.z + q.z;\n  float xx = q.x * x2;\n  float xy = q.x * y2;\n  float xz = q.x * z2;\n  float yy = q.y * y2;\n  float yz = q.y * z2;\n  float zz = q.z * z2;\n  float wx = q.w * x2;\n  float wy = q.w * y2;\n  float wz = q.w * z2;\n  return mat4(\n    1. - (yy + zz), xy + wz, xz - wy, 0,\n    xy - wz, 1. - (xx + zz), yz + wx, 0,\n    xz + wy, yz - wx, 1. - (xx + yy), 0,\n    p.x, p.y, p.z, 1\n  );\n}\nmat4 matFromRTS (vec4 q, vec3 t, vec3 s){\n  float x = q.x, y = q.y, z = q.z, w = q.w;\n  float x2 = x + x;\n  float y2 = y + y;\n  float z2 = z + z;\n  float xx = x * x2;\n  float xy = x * y2;\n  float xz = x * z2;\n  float yy = y * y2;\n  float yz = y * z2;\n  float zz = z * z2;\n  float wx = w * x2;\n  float wy = w * y2;\n  float wz = w * z2;\n  float sx = s.x;\n  float sy = s.y;\n  float sz = s.z;\n  return mat4((1. - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,\n    (xy - wz) * sy, (1. - (xx + zz)) * sy, (yz + wx) * sy, 0,\n    (xz + wy) * sz, (yz - wx) * sz, (1. - (xx + yy)) * sz, 0,\n    t.x, t.y, t.z, 1);\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nuniform vec4 mainTiling_Offset;\nuniform vec4 frameTile_velLenScale;\nuniform vec4 scale;\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matViewInv;\nuniform highp mat4 cc_matViewProj;\nuniform highp vec4 cc_cameraPos;\nuniform highp mat4 cc_matWorld;\nvarying mediump vec2 uv;\nvarying mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n#if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n  , mat4 viewInv\n#endif\n#if CC_RENDER_MODE == 1\n  , vec3 eye\n  , vec4 velocity\n  , float velocityScale\n  , float lengthScale\n  , float xIndex\n#endif\n) {\n#if CC_RENDER_MODE == 0\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n#elif CC_RENDER_MODE == 1\n  vec3 camRight = normalize(cross(pos.xyz - eye, velocity.xyz)) * s.x;\n  vec3 camUp = velocity.xyz * velocityScale + normalize(velocity.xyz) * lengthScale * s.y;\n  pos.xyz += (camRight * abs(vertOffset.x) * sign(vertOffset.y)) - camUp * xIndex;\n#elif CC_RENDER_MODE == 2\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = vec3(1, 0, 0);\n  vec3 camY = vec3(0, 0, -1);\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, cross(camX, camY), q);\n#elif CC_RENDER_MODE == 3\n  vec2 viewSpaceVert = vec2(vertOffset.x * s.x, vertOffset.y * s.y);\n  rotateCorner(viewSpaceVert, q.z);\n  vec3 camX = normalize(vec3(cc_matView[0][0], cc_matView[1][0], cc_matView[2][0]));\n  vec3 camY = vec3(0, 1, 0);\n  vec3 offset = camX * viewSpaceVert.x + camY * viewSpaceVert.y;\n  pos.xyz += offset;\n#else\n  pos.x += vertOffset.x;\n  pos.y += vertOffset.y;\n#endif\n}\nvec2 computeUV (float frameIndex, vec2 vertIndex, vec2 frameTile){\n  vec2 aniUV = vec2(0, floor(frameIndex * frameTile.y));\n  aniUV.x = floor(frameIndex * frameTile.x * frameTile.y - aniUV.y * frameTile.x);\n#if CC_RENDER_MODE != 4\n  vertIndex.y = 1. - vertIndex.y;\n#endif\n  return (aniUV.xy + vertIndex) / vec2(frameTile.x, frameTile.y);\n}\nuniform vec4 u_sampleInfo;\nuniform vec4 u_worldRot;\nuniform vec4 u_timeDelta;\nattribute vec4 a_position_starttime;\nattribute vec4 a_size_uv;\nattribute vec4 a_rotation_uv;\nattribute vec4 a_color;\nattribute vec4 a_dir_life;\nattribute float a_rndSeed;\n#if CC_RENDER_MODE == 4\n  attribute vec3 a_texCoord;\n  attribute vec3 a_texCoord3;\n  attribute vec3 a_normal;\n  attribute vec4 a_color1;\n#endif\nvec3 unpackCurveData (sampler2D tex, vec2 coord) {\n    vec4 a = texture2D(tex, coord);\n    vec4 b = texture2D(tex, coord + u_sampleInfo.y);\n    float c = fract(coord.x * u_sampleInfo.x);\n    return mix(a.xyz, b.xyz, c);\n}\nvec3 unpackCurveData (sampler2D tex, vec2 coord, out float w) {\n    vec4 a = texture2D(tex, coord);\n    vec4 b = texture2D(tex, coord + u_sampleInfo.y);\n    float c = fract(coord.x * u_sampleInfo.x);\n    w = mix(a.w, b.w, c);\n    return mix(a.xyz, b.xyz, c);\n}\nfloat pseudoRandom (float seed) {\n  seed = mod(seed, 233280.);\n  float q = (seed * 9301. + 49297.) / 233280.;\n  return fract(q);\n}\n#if COLOR_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D color_over_time_tex0;\n  uniform int u_color_mode;\n#endif\n#if ROTATION_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D rotation_over_time_tex0;\n  uniform int u_rotation_mode;\n#endif\n#if SIZE_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D size_over_time_tex0;\n  uniform int u_size_mode;\n#endif\n#if FORCE_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D force_over_time_tex0;\n  uniform int u_force_mode;\nuniform int u_force_space;\n#endif\n#if VELOCITY_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D velocity_over_time_tex0;\n  uniform int u_velocity_mode;\nuniform int u_velocity_space;\n#endif\n#if TEXTURE_ANIMATION_MODULE_ENABLE\n  uniform sampler2D texture_animation_tex0;\n  uniform vec4 u_anim_info;\n#endif\nfloat repeat (float t, float length) {\n  return t - floor(t / length) * length;\n}\nvec4 rotateQuat (vec4 p, vec4 q) {\n  vec3 iv = cross(q.xyz, p.xyz) + q.w * p.xyz;\n  vec3 res = p.xyz + 2.0 * cross(q.xyz, iv);\n  return vec4(res.xyz, p.w);\n}\nvec4 gpvs_main () {\n  float activeTime = u_timeDelta.x - a_position_starttime.w;\n  float normalizedTime = clamp(activeTime / a_dir_life.w, 0.0, 1.0);\n  vec2 timeCoord0 = vec2(normalizedTime, 0.);\n  vec2 timeCoord1 = vec2(normalizedTime, 1.);\n  #if CC_RENDER_MODE == 4\n    vec2 vertIdx = vec2(a_texCoord.x, a_texCoord.y);\n  #else\n    vec2 vertIdx = vec2(a_size_uv.w, a_rotation_uv.w);\n  #endif\n  vec4 velocity = vec4(a_dir_life.xyz, 0.);\n  vec4 pos = vec4(a_position_starttime.xyz, 1.);\n  vec3 size = a_size_uv.xyz;\n  #if SIZE_OVER_TIME_MODULE_ENABLE\n    if (u_size_mode == 1) {\n      size *= unpackCurveData(size_over_time_tex0, timeCoord0);\n    } else {\n      vec3 size_0 = unpackCurveData(size_over_time_tex0, timeCoord0);\n      vec3 size_1 = unpackCurveData(size_over_time_tex0, timeCoord1);\n      float factor_s = pseudoRandom(a_rndSeed + 39825.);\n      size *= mix(size_0, size_1, factor_s);\n    }\n  #endif\n  vec3 compScale = scale.xyz * size;\n  #if FORCE_OVER_TIME_MODULE_ENABLE\n    vec3 forceAnim = vec3(0.);\n    if (u_force_mode == 1) {\n      forceAnim = unpackCurveData(force_over_time_tex0, timeCoord0);\n    } else {\n      vec3 force_0 = unpackCurveData(force_over_time_tex0, timeCoord0);\n      vec3 force_1 = unpackCurveData(force_over_time_tex0, timeCoord1);\n      float factor_f =  pseudoRandom(a_rndSeed + 212165.);\n      forceAnim = mix(force_0, force_1, factor_f);\n    }\n    vec4 forceTrack = vec4(forceAnim, 0.);\n    if (u_force_space == 0) {\n      forceTrack = rotateQuat(forceTrack, u_worldRot);\n    }\n    velocity.xyz += forceTrack.xyz;\n  #endif\n  #if VELOCITY_OVER_TIME_MODULE_ENABLE\n    float speedModifier0 = 1.;\n    float speedModifier1 = 1.;\n    vec3 velocityAnim = vec3(0.);\n    if (u_velocity_mode == 1) {\n      velocityAnim = unpackCurveData(velocity_over_time_tex0, timeCoord0, speedModifier0);\n    } else {\n      vec3 vectory_0 = unpackCurveData(velocity_over_time_tex0, timeCoord0, speedModifier0);\n      vec3 vectory_1 = unpackCurveData(velocity_over_time_tex0, timeCoord1, speedModifier1);\n      float factor_v = pseudoRandom(a_rndSeed + 197866.);\n      velocityAnim = mix(vectory_0, vectory_1, factor_v);\n      speedModifier0 = mix(speedModifier0, speedModifier1, factor_v);\n    }\n    vec4 velocityTrack = vec4(velocityAnim, 0.);\n    if (u_velocity_space == 0) {\n      velocityTrack = rotateQuat(velocityTrack, u_worldRot);\n    }\n    velocity.xyz += velocityTrack.xyz;\n    velocity.xyz *= speedModifier0;\n  #endif\n  pos.xyz += velocity.xyz * normalizedTime * a_dir_life.w;\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    #if CC_RENDER_MODE == 1\n      velocity = rotateQuat(velocity, u_worldRot);\n    #endif\n  #endif\n  vec3 rotation = a_rotation_uv.xyz;\n  #if ROTATION_OVER_TIME_MODULE_ENABLE\n    if (u_rotation_mode == 1) {\n      rotation += unpackCurveData(rotation_over_time_tex0, timeCoord0) * normalizedTime * a_dir_life.w;\n    } else {\n      vec3 rotation_0 = unpackCurveData(rotation_over_time_tex0, timeCoord0);\n      vec3 rotation_1 = unpackCurveData(rotation_over_time_tex0, timeCoord1);\n      float factor_r = pseudoRandom(a_rndSeed + 125292.);\n      rotation += mix(rotation_0, rotation_1, factor_r) * normalizedTime * a_dir_life.w;\n    }\n  #endif\n  #if COLOR_OVER_TIME_MODULE_ENABLE\n    if (u_color_mode == 1) {\n      color = a_color * texture2D(color_over_time_tex0, timeCoord0);\n    } else {\n      vec4 color_0 = texture2D(color_over_time_tex0, timeCoord0);\n      vec4 color_1 = texture2D(color_over_time_tex0, timeCoord1);\n      float factor_c = pseudoRandom(a_rndSeed + 91041.);\n      color = a_color * mix(color_0, color_1, factor_c);\n    }\n  #else\n    color = a_color;\n  #endif\n  #if CC_RENDER_MODE != 4\n    vec2 cornerOffset = vec2((vertIdx - 0.5));\n    #if CC_RENDER_MODE == 0\n      vec3 rotEuler = rotation.xyz;\n    #elif CC_RENDER_MODE == 1\n      vec3 rotEuler = vec3(0.);\n    #else\n      vec3 rotEuler = vec3(0., 0., rotation.z);\n    #endif\n    computeVertPos(pos, cornerOffset, quaternionFromEuler(rotEuler), compScale\n      #if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n        , cc_matViewInv\n      #endif\n      #if CC_RENDER_MODE == 1\n        , cc_cameraPos.xyz\n        , velocity\n        , frameTile_velLenScale.z\n        , frameTile_velLenScale.w\n        , a_size_uv.w\n      #endif\n    );\n  #else\n    mat4 xformNoScale = matrixFromRT(quaternionFromEuler(rotation), pos.xyz);\n    mat4 xform = matFromRTS(quaternionFromEuler(rotation), pos.xyz, compScale);\n    pos = xform * vec4(a_texCoord3, 1);\n    vec4 normal = xformNoScale * vec4(a_normal, 0);\n    color *= a_color1;\n  #endif\n  pos = cc_matViewProj * pos;\n  float frameIndex = 0.;\n  #if TEXTURE_ANIMATION_MODULE_ENABLE\n    float startFrame = 0.;\n    vec3 frameInfo = vec3(0.);\n    if (int(u_anim_info.x) == 1) {\n      frameInfo = unpackCurveData(texture_animation_tex0, timeCoord0);\n    } else {\n      vec3 frameInfo0 = unpackCurveData(texture_animation_tex0, timeCoord0);\n      vec3 frameInfo1 = unpackCurveData(texture_animation_tex0, timeCoord1);\n      float factor_t = pseudoRandom(a_rndSeed + 90794.);\n      frameInfo = mix(frameInfo0, frameInfo1, factor_t);\n    }\n    startFrame = frameInfo.x / u_anim_info.y;\n    frameIndex = repeat(u_anim_info.z * (frameInfo.y + startFrame), 1.);\n  #endif\n  uv = computeUV(frameIndex, vertIdx, frameTile_velLenScale.xy) * mainTiling_Offset.xy + mainTiling_Offset.zw;\n  return pos;\n}\nvoid main() { gl_Position = gpvs_main(); }",
              "frag": "\nprecision mediump float;\nuniform mediump vec4 cc_exposure;\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nvarying vec2 uv;\nvarying vec4 color;\nuniform sampler2D mainTexture;\nuniform vec4 tintColor;\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture2D(mainTexture, uv);\n  return CCFragOutput(col);\n}\nvoid main() { gl_FragColor = add(); }"
            }], [{
              "vert": "\nprecision mediump float;\nuniform vec4 mainTiling_Offset;\nuniform highp mat4 cc_matViewProj;\nuniform highp vec4 cc_cameraPos;\nuniform highp mat4 cc_matWorld;\nvarying mediump vec2 uv;\nvarying mediump vec4 color;\nattribute vec3 a_position;\nattribute vec4 a_texCoord;\nattribute vec3 a_texCoord1;\nattribute vec3 a_texCoord2;\nattribute vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n  varying vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n  highp vec4 pos = vec4(a_position, 1);\n  vec4 velocity = vec4(a_texCoord1.xyz, 0);\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n  #endif\n  float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n  vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n  pos.xyz += camUp * vertOffset;\n  pos = cc_matViewProj * pos;\n  uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n  color = a_color;\n  #if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n  #endif\n  return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
              "frag": "\n  precision mediump float;\nuniform mediump vec4 cc_exposure;\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\n  varying vec2 uv;\n  varying vec4 color;\n  #if CC_DRAW_WIRE_FRAME\n    varying vec3 vBarycentric;\n  #endif\n  uniform sampler2D mainTexture;\n  uniform vec4 tintColor;\n  vec4 add () {\n    vec4 col = 2.0 * color * tintColor * texture2D(mainTexture, uv);\n#if CC_DRAW_WIRE_FRAME\n    if (any(lessThan(vBarycentric, vec3(0.02)))) {\n        col = vec4(0., 1., 1., 1.);\n    }\n#endif\n    return CCFragOutput(col);\n  }\nvoid main() { gl_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nmat4 matrixFromRT (vec4 q, vec3 p){\n  float x2 = q.x + q.x;\n  float y2 = q.y + q.y;\n  float z2 = q.z + q.z;\n  float xx = q.x * x2;\n  float xy = q.x * y2;\n  float xz = q.x * z2;\n  float yy = q.y * y2;\n  float yz = q.y * z2;\n  float zz = q.z * z2;\n  float wx = q.w * x2;\n  float wy = q.w * y2;\n  float wz = q.w * z2;\n  return mat4(\n    1. - (yy + zz), xy + wz, xz - wy, 0,\n    xy - wz, 1. - (xx + zz), yz + wx, 0,\n    xz + wy, yz - wx, 1. - (xx + yy), 0,\n    p.x, p.y, p.z, 1\n  );\n}\nmat4 matFromRTS (vec4 q, vec3 t, vec3 s){\n  float x = q.x, y = q.y, z = q.z, w = q.w;\n  float x2 = x + x;\n  float y2 = y + y;\n  float z2 = z + z;\n  float xx = x * x2;\n  float xy = x * y2;\n  float xz = x * z2;\n  float yy = y * y2;\n  float yz = y * z2;\n  float zz = z * z2;\n  float wx = w * x2;\n  float wy = w * y2;\n  float wz = w * z2;\n  float sx = s.x;\n  float sy = s.y;\n  float sz = s.z;\n  return mat4((1. - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,\n    (xy - wz) * sy, (1. - (xx + zz)) * sy, (yz + wx) * sy, 0,\n    (xz + wy) * sz, (yz - wx) * sz, (1. - (xx + yy)) * sz, 0,\n    t.x, t.y, t.z, 1);\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nuniform vec4 mainTiling_Offset;\nuniform vec4 frameTile_velLenScale;\nuniform vec4 scale;\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matViewInv;\nuniform highp mat4 cc_matViewProj;\nuniform highp vec4 cc_cameraPos;\nuniform highp mat4 cc_matWorld;\nvarying mediump vec2 uv;\nvarying mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n#if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n  , mat4 viewInv\n#endif\n#if CC_RENDER_MODE == 1\n  , vec3 eye\n  , vec4 velocity\n  , float velocityScale\n  , float lengthScale\n  , float xIndex\n#endif\n) {\n#if CC_RENDER_MODE == 0\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n#elif CC_RENDER_MODE == 1\n  vec3 camRight = normalize(cross(pos.xyz - eye, velocity.xyz)) * s.x;\n  vec3 camUp = velocity.xyz * velocityScale + normalize(velocity.xyz) * lengthScale * s.y;\n  pos.xyz += (camRight * abs(vertOffset.x) * sign(vertOffset.y)) - camUp * xIndex;\n#elif CC_RENDER_MODE == 2\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = vec3(1, 0, 0);\n  vec3 camY = vec3(0, 0, -1);\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, cross(camX, camY), q);\n#elif CC_RENDER_MODE == 3\n  vec2 viewSpaceVert = vec2(vertOffset.x * s.x, vertOffset.y * s.y);\n  rotateCorner(viewSpaceVert, q.z);\n  vec3 camX = normalize(vec3(cc_matView[0][0], cc_matView[1][0], cc_matView[2][0]));\n  vec3 camY = vec3(0, 1, 0);\n  vec3 offset = camX * viewSpaceVert.x + camY * viewSpaceVert.y;\n  pos.xyz += offset;\n#else\n  pos.x += vertOffset.x;\n  pos.y += vertOffset.y;\n#endif\n}\nvec2 computeUV (float frameIndex, vec2 vertIndex, vec2 frameTile){\n  vec2 aniUV = vec2(0, floor(frameIndex * frameTile.y));\n  aniUV.x = floor(frameIndex * frameTile.x * frameTile.y - aniUV.y * frameTile.x);\n#if CC_RENDER_MODE != 4\n  vertIndex.y = 1. - vertIndex.y;\n#endif\n  return (aniUV.xy + vertIndex) / vec2(frameTile.x, frameTile.y);\n}\nattribute vec3 a_position;\nattribute vec3 a_texCoord;\nattribute vec3 a_texCoord1;\nattribute vec3 a_texCoord2;\nattribute vec4 a_color;\n#if CC_RENDER_MODE == 1\n  attribute vec3 a_color1;\n#endif\n#if CC_RENDER_MODE == 4\n  attribute vec3 a_texCoord3;\n  attribute vec3 a_normal;\n  attribute vec4 a_color1;\n#endif\nvec4 lpvs_main () {\n  vec3 compScale = scale.xyz * a_texCoord1;\n  vec4 pos = vec4(a_position, 1);\n  #if CC_RENDER_MODE == 1\n    vec4 velocity = vec4(a_color1.xyz, 0);\n  #endif\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    #if CC_RENDER_MODE == 1\n      velocity = cc_matWorld * velocity;\n    #endif\n  #endif\n  #if CC_RENDER_MODE != 4\n    vec2 cornerOffset = vec2((a_texCoord.xy - 0.5));\n    #if CC_RENDER_MODE == 0\n      vec3 rotEuler = a_texCoord2;\n    #elif CC_RENDER_MODE == 1\n      vec3 rotEuler = vec3(0.);\n    #else\n      vec3 rotEuler = vec3(0., 0., a_texCoord2.z);\n    #endif\n    computeVertPos(pos, cornerOffset, quaternionFromEuler(rotEuler), compScale\n    #if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n      , cc_matViewInv\n    #endif\n    #if CC_RENDER_MODE == 1\n      , cc_cameraPos.xyz\n      , velocity\n      , frameTile_velLenScale.z\n      , frameTile_velLenScale.w\n      , a_texCoord.x\n    #endif\n    );\n    color = a_color;\n  #else\n    mat4 xformNoScale = matrixFromRT(quaternionFromEuler(a_texCoord2), pos.xyz);\n    mat4 xform = matFromRTS(quaternionFromEuler(a_texCoord2), pos.xyz, compScale);\n    pos = xform * vec4(a_texCoord3, 1);\n    vec4 normal = xformNoScale * vec4(a_normal, 0);\n    color = a_color * a_color1;\n  #endif\n  uv = computeUV(a_texCoord.z, a_texCoord.xy, frameTile_velLenScale.xy) * mainTiling_Offset.xy + mainTiling_Offset.zw;\n  pos = cc_matViewProj * pos;\n  return pos;\n}\nvoid main() { gl_Position = lpvs_main(); }",
              "frag": "\nprecision mediump float;\nuniform mediump vec4 cc_exposure;\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nvarying vec2 uv;\nvarying vec4 color;\nuniform sampler2D mainTexture;\nuniform vec4 tintColor;\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture2D(mainTexture, uv);\n  return CCFragOutput(col);\n}\nvoid main() { gl_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nuniform highp mat4 cc_matViewProj;\n#if USE_LOCAL\nuniform highp mat4 cc_matWorld;\n#endif\nattribute vec3 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nvarying vec4 v_light;\nvarying vec2 uv0;\n#if TWO_COLORED\n  attribute vec4 a_color2;\n  varying vec4 v_dark;\n#endif\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  #if USE_LOCAL\n    pos = cc_matWorld * pos;\n  #endif\n  pos = cc_matViewProj * pos;\n  uv0 = a_texCoord;\n  v_light = a_color;\n  #if TWO_COLORED\n    v_dark = a_color2;\n  #endif\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvarying vec4 v_light;\n#if TWO_COLORED\n  varying vec4 v_dark;\n#endif\nvarying vec2 uv0;\nuniform sampler2D cc_spriteTexture;\nvec4 frag () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if TWO_COLORED\n    vec4 texColor = vec4(1, 1, 1, 1);\n    texColor *= texture2D(cc_spriteTexture, uv0);\n     o.a = texColor.a * v_light.a;\n    o.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    o *= texture2D(cc_spriteTexture, uv0);\n    o *= v_light;\n  #endif\n  ALPHA_TEST(o);\n  return o;\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matProj;\nuniform highp mat4 cc_matViewProj;\n#if USE_LOCAL\nuniform highp mat4 cc_matWorld;\n#endif\nattribute vec3 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nvarying vec4 color;\nvarying vec2 uv0;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  #if USE_LOCAL\n    pos = cc_matWorld * pos;\n  #endif\n  #if USE_PIXEL_ALIGNMENT\n    pos = cc_matView * pos;\n    pos.xyz = floor(pos.xyz);\n    pos = cc_matProj * pos;\n  #else\n    pos = cc_matViewProj * pos;\n  #endif\n  uv0 = a_texCoord;\n  color = a_color;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 CCSampleWithAlphaSeparated(sampler2D tex, vec2 uv) {\n#if CC_USE_EMBEDDED_ALPHA\n    return vec4(texture2D(tex, uv).rgb, texture2D(tex, uv + vec2(0.0, 0.5)).r);\n#else\n    return texture2D(tex, uv);\n#endif\n}\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvarying vec4 color;\n#if USE_TEXTURE\n  varying vec2 uv0;\n  uniform sampler2D cc_spriteTexture;\n#endif\nvec4 frag () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if USE_TEXTURE\n    o *= CCSampleWithAlphaSeparated(cc_spriteTexture, uv0);\n    #if IS_GRAY\n      float gray  = 0.2126 * o.r + 0.7152 * o.g + 0.0722 * o.b;\n      o.r = o.g = o.b = gray;\n    #endif\n  #endif\n  o *= color;\n  ALPHA_TEST(o);\n  return o;\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nattribute vec3 a_position;\nattribute vec3 a_normal;\nattribute vec2 a_texCoord;\nattribute vec4 a_tangent;\n#if CC_USE_MORPH\n    attribute float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nuniform vec4 cc_displacementWeights[15];\nuniform vec4 cc_displacementTextureInfo;\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n            int pixelIndex = elementIndex;\n            vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n            vec2 uv = getPixelCoordFromLocation(location, cc_displacementTextureInfo.xy);\n            return texture2D(tex, uv);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture2D(tex, x)),\n            decode32(texture2D(tex, y)),\n            decode32(texture2D(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  attribute vec4 a_joints;\nattribute vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    attribute highp vec4 a_jointAnimInfo;\n  #endif\n  uniform highp vec4 cc_jointTextureInfo;\n  uniform highp vec4 cc_jointAnimInfo;\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  uniform highp vec4 cc_joints[90];\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matProj;\nuniform highp vec4 cc_cameraPos;\nuniform mediump vec4 cc_fogBase;\nuniform mediump vec4 cc_fogAdd;\n#if USE_INSTANCING\n  attribute vec4 a_matWorld0;\n  attribute vec4 a_matWorld1;\n  attribute vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    attribute vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  attribute float a_dyn_batch_id;\n  uniform highp mat4 cc_matWorlds[10];\n#else\nuniform highp mat4 cc_matWorld;\nuniform highp mat4 cc_matWorldIT;\nuniform highp vec4 cc_lightingMapUVParam;\n#endif\nuniform vec4 tilingOffset;\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\nvarying highp vec4 v_shadowPos;\nuniform highp mat4 cc_matLightViewProj;\n#if USE_VERTEX_COLOR\n  attribute vec4 a_color;\n  varying vec4 v_color;\n#endif\nvarying vec3 v_position;\nvarying vec3 v_normal;\nvarying vec2 v_uv;\nvarying vec2 v_uv1;\nvarying float v_fog_factor;\n#if USE_NORMAL_MAP\n  varying vec3 v_tangent;\n  varying vec3 v_bitangent;\n#endif\n#if HAS_SECOND_UV || USE_LIGHTMAP\n  attribute vec2 a_texCoord1;\n#endif\n#if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n  varying vec2 v_luv;\nvoid CCLightingMapCaclUV()\n{\n#if !USE_INSTANCING\n      v_luv = cc_lightingMapUVParam.xy + a_texCoord1 * cc_lightingMapUVParam.zw;\n#else\n      v_luv = a_lightingMapUVParam.xy + a_texCoord1 * a_lightingMapUVParam.zw;\n#endif\n}\n#endif\nvec4 vert () {\n  StandardVertInput In;\n  In.position = vec4(a_position, 1.0);\n  In.normal = a_normal;\n  In.tangent = a_tangent;\n  #if CC_USE_MORPH\n    applyMorph(In);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(In);\n  #endif\n  mat4 matWorld, matWorldIT;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n    matWorldIT = matWorld;\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n    matWorldIT = matWorld;\n  #else\n    matWorld = cc_matWorld;\n    matWorldIT = cc_matWorldIT;\n  #endif\n  vec4 pos = matWorld * In.position;\n  v_position = pos.xyz;\n  v_normal = normalize((matWorldIT * vec4(In.normal, 0.0)).xyz);\n  #if USE_NORMAL_MAP\n    v_tangent = normalize((matWorld * vec4(In.tangent.xyz, 0.0)).xyz);\n    v_bitangent = cross(v_normal, v_tangent) * In.tangent.w;\n  #endif\n  v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #if HAS_SECOND_UV\n    v_uv1 = a_texCoord1 * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  #if USE_VERTEX_COLOR\n    v_color = a_color;\n  #endif\n  v_fog_factor = CC_TRANSFER_FOG(pos);\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    CCLightingMapCaclUV();\n  #endif\n    v_shadowPos = cc_matLightViewProj * pos;\n  return cc_matProj * (cc_matView * matWorld) * In.position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod: enable\n#endif\nprecision highp float;\nuniform highp vec4 cc_cameraPos;\nuniform mediump vec4 cc_exposure;\nuniform mediump vec4 cc_mainLitDir;\nuniform mediump vec4 cc_mainLitColor;\nuniform mediump vec4 cc_ambientSky;\nuniform mediump vec4 cc_ambientGround;\nuniform mediump vec4 cc_fogColor;\nuniform lowp vec4 cc_shadowColor;\nuniform lowp vec4 cc_shadowInfo;\n#if CC_USE_IBL\nuniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec4 fragTextureLod (sampler2D tex, vec2 coord, float lod) {\n    #ifdef GL_EXT_shader_texture_lod\n      return texture2DLodEXT(tex, coord, lod);\n    #else\n      return texture2D(tex, coord, lod);\n    #endif\n}\nvec4 fragTextureLod (samplerCube tex, vec3 coord, float lod) {\n    #ifdef GL_EXT_shader_texture_lod\n      return textureCubeLodEXT(tex, coord, lod);\n    #else\n      return textureCube(tex, coord, lod);\n    #endif\n}\n#endif\n#if CC_RECEIVE_SHADOW\nvarying highp vec4 v_shadowPos;\n#if CC_RECEIVE_SHADOW\n  uniform sampler2D cc_shadowMap;\n  uniform sampler2D cc_spotLightingMap;\n  float CCGetShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture2D(cc_shadowMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow / 5.0;\n  }\n  float CCGetShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture2D(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture2D(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n  float CCGetDirLightShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture2D(cc_spotLightingMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetDirLightShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    return shadow / 5.0;\n  }\n  float CCGetDirLightShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture2D(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetDirLightShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture2D(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n#endif\n#endif\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nfloat GGXMobile (float roughness, float NoH, vec3 H, vec3 N) {\n  vec3 NxH = cross(N, H);\n  float OneMinusNoHSqr = dot(NxH, NxH);\n  float a = roughness * roughness;\n  float n = NoH * a;\n  float p = a / (OneMinusNoHSqr + n * n);\n  return p * p;\n}\nfloat CalcSpecular (float roughness, float NoH, vec3 H, vec3 N) {\n  return (roughness*0.25 + 0.25) * GGXMobile(roughness, NoH, H, N);\n}\nvec3 BRDFApprox (vec3 specular, float roughness, float NoV) {\n  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);\n  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);\n  vec4 r = roughness * c0 + c1;\n  float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n  vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n  AB.y *= clamp(50.0 * specular.g, 0.0, 1.0);\n  return specular * AB.x + AB.y;\n}\nstruct StandardSurface {\n  vec4 albedo;\n  vec3 position;\n  vec3 normal;\n  vec3 emissive;\n  vec4 lightmap;\n  float roughness;\n  float metallic;\n  float occlusion;\n};\n#if CC_FORWARD_ADD\nuniform highp vec4 cc_lightPos[1];\nuniform vec4 cc_lightColor[1];\nuniform vec4 cc_lightSizeRangeAngle[1];\nuniform vec4 cc_lightDir[1];\nfloat SmoothDistAtt (float distSqr, float invSqrAttRadius) {\n  float factor = distSqr * invSqrAttRadius;\n  float smoothFactor = clamp(1.0 - factor * factor, 0.0, 1.0);\n  return smoothFactor * smoothFactor;\n}\nfloat GetDistAtt (float distSqr, float invSqrAttRadius) {\n  float attenuation = 1.0 / max(distSqr, 0.01*0.01);\n  attenuation *= SmoothDistAtt(distSqr , invSqrAttRadius);\n  return attenuation;\n}\nfloat GetAngleAtt (vec3 L, vec3 litDir, float litAngleScale, float litAngleOffset) {\n  float cd = dot(litDir, L);\n  float attenuation = clamp(cd * litAngleScale + litAngleOffset, 0.0, 1.0);\n  return (attenuation * attenuation);\n}\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 finalColor = vec3(0.0);\n    for (int i = 0; i < 1; i++) {\n      vec3 SLU = cc_lightPos[i].xyz - s.position;\n      vec3 SL = normalize(SLU);\n      vec3 SH = normalize(SL + V);\n      float SNL = max(dot(N, SL), 0.001);\n      float SNH = max(dot(N, SH), 0.0);\n      float distSqr = dot(SLU, SLU);\n      float litRadius = cc_lightSizeRangeAngle[i].x;\n      float litRadiusSqr = litRadius * litRadius;\n      float illum = 3.14159265359 * (litRadiusSqr / max(litRadiusSqr , distSqr));\n      float attRadiusSqrInv = 1.0 / max(cc_lightSizeRangeAngle[i].y, 0.01);\n      attRadiusSqrInv *= attRadiusSqrInv;\n      float att = GetDistAtt(distSqr, attRadiusSqrInv);\n      vec3 lspec = specular * CalcSpecular(s.roughness, SNH, SH, N);\n      if (cc_lightPos[i].w > 0.0) {\n        float cosInner = max(dot(-cc_lightDir[i].xyz, SL), 0.01);\n        float cosOuter = cc_lightSizeRangeAngle[i].z;\n        float litAngleScale = 1.0 / max(0.001, cosInner - cosOuter);\n        float litAngleOffset = -cosOuter * litAngleScale;\n        att *= GetAngleAtt(SL, -cc_lightDir[i].xyz, litAngleScale, litAngleOffset);\n      }\n      vec3 lightColor = cc_lightColor[i].rgb;\n    #if CC_RECEIVE_SHADOW\n      if (cc_lightPos[i].w > 0.0) {\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetDirLightShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetDirLightShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetDirLightShadowFactorX5();\n      else shadowAttenuation = CCGetDirLightShadowFactorX1();\n      lightColor *= 1.0 - shadowAttenuation;\n    }\n      }\n    #endif\n      finalColor += SNL * lightColor * cc_lightColor[i].w * illum * att * (diffuseContrib + lspec);\n    }\n    finalColor = finalColor * s.occlusion;\n    return vec4(finalColor, 0.0);\n  }\n#else\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 L = normalize(-cc_mainLitDir.xyz);\n    vec3 H = normalize(L+V);\n    float NH = max(dot(N, H), 0.0);\n    float NL = max(dot(N, L), 0.001);\n    vec3 finalColor = NL * cc_mainLitColor.rgb * cc_mainLitColor.w;\n    #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n      finalColor = s.lightmap.a * s.lightmap.rgb + (1.0 - s.lightmap.a) * finalColor;\n    #endif\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 specularContrib = specular * CalcSpecular(s.roughness, NH, H, N);\n    finalColor *= (diffuseContrib + specularContrib);\n    float fAmb = 0.5 - N.y * 0.5;\n    vec3 ambDiff = mix(cc_ambientSky.rgb, cc_ambientGround.rgb, fAmb) * cc_ambientSky.w;\n    finalColor += (ambDiff.rgb * diffuse);\n    #if CC_USE_IBL\n      vec3 R = normalize(reflect(-V, N));\n      vec4 envmap = fragTextureLod(cc_environment, R, s.roughness * cc_ambientGround.w);\n      #if CC_USE_IBL == 2\n        vec3 env = unpackRGBE(envmap);\n      #else\n        vec3 env = SRGBToLinear(envmap.rgb);\n      #endif\n      finalColor += env * cc_ambientSky.w * specular;\n    #endif\n    finalColor = finalColor * s.occlusion;\n    #if CC_USE_HDR\n      s.emissive *= cc_exposure.w;\n    #endif\n    finalColor += s.emissive;\n    #if CC_RECEIVE_SHADOW\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetShadowFactorX5();\n      else shadowAttenuation = CCGetShadowFactorX1();\n      vec3 shadowColor = cc_shadowColor.rgb * cc_shadowColor.a + finalColor.rgb * (1.0 - cc_shadowColor.a);\n      finalColor.rgb = shadowColor.rgb * shadowAttenuation * NL + finalColor.rgb * (1.0 - shadowAttenuation * NL);\n    }\n    #endif\n    return vec4(finalColor, s.albedo.a);\n  }\n#endif\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nuniform vec4 albedo;\nuniform vec4 albedoScaleAndCutoff;\nuniform vec4 pbrParams;\nuniform vec4 emissive;\nuniform vec4 emissiveScaleParam;\n#if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n  varying vec2 v_luv;\nuniform sampler2D cc_lightingMap;\n#endif\nvarying vec3 v_position;\nvarying vec2 v_uv;\nvarying vec2 v_uv1;\nvarying vec3 v_normal;\nvarying float v_fog_factor;\n#if USE_VERTEX_COLOR\n  varying vec4 v_color;\n#endif\n#if USE_ALBEDO_MAP\n  uniform sampler2D albedoMap;\n#endif\n#if USE_NORMAL_MAP\n  varying vec3 v_tangent;\n  varying vec3 v_bitangent;\n  uniform sampler2D normalMap;\n#endif\n#if USE_PBR_MAP\n  uniform sampler2D pbrMap;\n#endif\n#if USE_METALLIC_ROUGHNESS_MAP\n  uniform sampler2D metallicRoughnessMap;\n#endif\n#if USE_OCCLUSION_MAP\n  uniform sampler2D occlusionMap;\n#endif\n#if USE_EMISSIVE_MAP\n  uniform sampler2D emissiveMap;\n#endif\n#if USE_ALPHA_TEST\n#endif\nvoid surf (out StandardSurface s) {\n  vec4 baseColor = albedo;\n  #if USE_VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n  #if USE_ALBEDO_MAP\n    vec4 texColor = texture2D(albedoMap, ALBEDO_UV);\n    texColor.rgb = SRGBToLinear(texColor.rgb);\n    baseColor *= texColor;\n  #endif\n  s.albedo = baseColor;\n  s.albedo.rgb *= albedoScaleAndCutoff.xyz;\n  #if USE_ALPHA_TEST\n    if (s.albedo.ALPHA_TEST_CHANNEL < albedoScaleAndCutoff.w) discard;\n  #endif\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    s.lightmap = texture2D(cc_lightingMap, v_luv);\n  #endif\n  s.normal = v_normal;\n  #if USE_NORMAL_MAP\n    vec3 nmmp = texture2D(normalMap, NORMAL_UV).xyz - vec3(0.5);\n    s.normal =\n      (nmmp.x * pbrParams.w) * normalize(v_tangent) +\n      (nmmp.y * pbrParams.w) * normalize(v_bitangent) +\n      nmmp.z * normalize(s.normal);\n  #endif\n  s.position = v_position;\n  vec4 pbr = pbrParams;\n  #if USE_PBR_MAP\n    vec4 res = texture2D(pbrMap, PBR_UV);\n    pbr.x *= res.r;\n    pbr.y *= res.g;\n    pbr.z *= res.b;\n  #endif\n  #if USE_METALLIC_ROUGHNESS_MAP\n    vec4 metallicRoughness = texture2D(metallicRoughnessMap, PBR_UV);\n    pbr.z *= metallicRoughness.b;\n    pbr.y *= metallicRoughness.g;\n  #endif\n  #if USE_OCCLUSION_MAP\n    pbr.x *= texture2D(occlusionMap, PBR_UV).r;\n  #endif\n  s.occlusion = clamp(pbr.x, 0.0, 0.96);\n  s.roughness = clamp(pbr.y, 0.04, 1.0);\n  s.metallic = pbr.z;\n  s.emissive = emissive.rgb * emissiveScaleParam.xyz;\n  #if USE_EMISSIVE_MAP\n    s.emissive *= SRGBToLinear(texture2D(emissiveMap, EMISSIVE_UV).rgb);\n  #endif\n}\nvec4 frag () {\n  StandardSurface s; surf(s);\n  vec4 color = CCStandardShading(s);\n  color = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, color.rgb, v_fog_factor), color.a);\n  return CCFragOutput(color);\n}\nvoid main() { gl_FragColor = frag(); }"
            }, {
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nattribute vec3 a_position;\nattribute vec3 a_normal;\nattribute vec2 a_texCoord;\nattribute vec4 a_tangent;\n#if CC_USE_MORPH\n    attribute float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nuniform vec4 cc_displacementWeights[15];\nuniform vec4 cc_displacementTextureInfo;\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n            int pixelIndex = elementIndex;\n            vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n            vec2 uv = getPixelCoordFromLocation(location, cc_displacementTextureInfo.xy);\n            return texture2D(tex, uv);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture2D(tex, x)),\n            decode32(texture2D(tex, y)),\n            decode32(texture2D(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  attribute vec4 a_joints;\nattribute vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    attribute highp vec4 a_jointAnimInfo;\n  #endif\n  uniform highp vec4 cc_jointTextureInfo;\n  uniform highp vec4 cc_jointAnimInfo;\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  uniform highp vec4 cc_joints[90];\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\n#if USE_INSTANCING\n  attribute vec4 a_matWorld0;\n  attribute vec4 a_matWorld1;\n  attribute vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    attribute vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  attribute float a_dyn_batch_id;\n  uniform highp mat4 cc_matWorlds[10];\n#else\nuniform highp mat4 cc_matWorld;\nuniform highp mat4 cc_matWorldIT;\n#endif\nuniform vec4 tilingOffset;\nuniform highp mat4 cc_matLightViewProj;\n#if HAS_SECOND_UV || USE_LIGHTMAP\n  attribute vec2 a_texCoord1;\n#endif\nvarying vec2 v_uv;\nvarying vec2 v_uv1;\nvarying float v_clip_depth;\nvec4 vert () {\n  StandardVertInput In;\n  In.position = vec4(a_position, 1.0);\n  In.normal = a_normal;\n  In.tangent = a_tangent;\n  #if CC_USE_MORPH\n    applyMorph(In);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(In);\n  #endif\n  mat4 matWorld, matWorldIT;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n    matWorldIT = matWorld;\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n    matWorldIT = matWorld;\n  #else\n    matWorld = cc_matWorld;\n    matWorldIT = cc_matWorldIT;\n  #endif\n  vec4 worldPos = matWorld * In.position;\n  vec4 clipPos = cc_matLightViewProj * worldPos;\n  v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #if HAS_SECOND_UV\n    v_uv1 = a_texCoord1 * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  v_clip_depth = clipPos.z / clipPos.w * 0.5 + 0.5;\n  return clipPos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nuniform vec4 albedo;\nuniform vec4 albedoScaleAndCutoff;\nvec4 packDepthToRGBA (float depth) {\n  vec4 ret = vec4(1.0, 255.0, 65025.0, 160581375.0) * depth;\n  ret = fract(ret);\n  ret -= ret.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n  return ret;\n}\nvarying vec2 v_uv;\nvarying vec2 v_uv1;\nvarying float v_clip_depth;\n#if USE_ALBEDO_MAP\n  uniform sampler2D albedoMap;\n#endif\n#if USE_ALPHA_TEST\n#endif\nvec4 frag () {\n  vec4 baseColor = albedo;\n  #if USE_ALBEDO_MAP\n    baseColor *= texture2D(albedoMap, ALBEDO_UV);\n  #endif\n  #if USE_ALPHA_TEST\n    if (baseColor.ALPHA_TEST_CHANNEL < albedoScaleAndCutoff.w) discard;\n  #endif\n  return packDepthToRGBA(v_clip_depth);\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nuniform highp mat4 cc_matViewProj;\nuniform highp vec4 cc_cameraPos;\nuniform mediump vec4 cc_fogBase;\nuniform mediump vec4 cc_fogAdd;\nuniform highp mat4 cc_matWorld;\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\nvarying highp vec4 v_shadowPos;\nuniform highp mat4 cc_matLightViewProj;\nattribute vec3 a_position;\nattribute vec3 a_normal;\nattribute vec2 a_texCoord;\nvarying highp vec3 v_position;\nvarying mediump vec3 v_normal;\n#if USE_NORMALMAP\n  varying mediump vec3 v_tangent;\n  varying mediump vec3 v_binormal;\n#endif\nvarying mediump vec2 uvw;\nvarying mediump vec2 uv0;\nvarying mediump vec2 uv1;\nvarying mediump vec2 uv2;\nvarying mediump vec2 uv3;\nvarying mediump vec2 luv;\nvarying mediump vec3 diffuse;\nvarying mediump float v_fog_factor;\nuniform vec4 UVScale;\nuniform vec4 lightMapUVParam;\nvec4 vert () {\n  vec3 worldPos;\n  worldPos.x = cc_matWorld[3][0] + a_position.x;\n  worldPos.y = cc_matWorld[3][1] + a_position.y;\n  worldPos.z = cc_matWorld[3][2] + a_position.z;\n  vec4 pos = vec4(worldPos, 1.0);\n  pos = cc_matViewProj * pos;\n  uvw = a_texCoord;\n  uv0 = a_position.xz * UVScale.x;\n  uv1 = a_position.xz * UVScale.y;\n  uv2 = a_position.xz * UVScale.z;\n  uv3 = a_position.xz * UVScale.w;\n  #if USE_LIGHTMAP\n    luv = lightMapUVParam.xy + a_texCoord * lightMapUVParam.zw;\n  #endif\n  v_position = worldPos;\n  v_normal = a_normal;\n  v_fog_factor = CC_TRANSFER_FOG(vec4(worldPos, 1.0));\n  #if USE_NORMALMAP\n    v_tangent = vec3(1.0, 0.0, 0.0);\n    v_binormal = vec3(0.0, 0.0, 1.0);\n    v_binormal = cross(v_tangent, a_normal);\n    v_tangent = cross(a_normal, v_binormal);\n  #endif\n    v_shadowPos = cc_matLightViewProj * vec4(worldPos, 1.0);\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod: enable\n#endif\nprecision highp float;\nuniform highp vec4 cc_cameraPos;\nuniform mediump vec4 cc_exposure;\nuniform mediump vec4 cc_mainLitDir;\nuniform mediump vec4 cc_mainLitColor;\nuniform mediump vec4 cc_ambientSky;\nuniform mediump vec4 cc_ambientGround;\nuniform mediump vec4 cc_fogColor;\nuniform lowp vec4 cc_shadowColor;\nuniform lowp vec4 cc_shadowInfo;\n#if CC_USE_IBL\nuniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec4 fragTextureLod (sampler2D tex, vec2 coord, float lod) {\n    #ifdef GL_EXT_shader_texture_lod\n      return texture2DLodEXT(tex, coord, lod);\n    #else\n      return texture2D(tex, coord, lod);\n    #endif\n}\nvec4 fragTextureLod (samplerCube tex, vec3 coord, float lod) {\n    #ifdef GL_EXT_shader_texture_lod\n      return textureCubeLodEXT(tex, coord, lod);\n    #else\n      return textureCube(tex, coord, lod);\n    #endif\n}\n#endif\n#if CC_RECEIVE_SHADOW\nvarying highp vec4 v_shadowPos;\n#if CC_RECEIVE_SHADOW\n  uniform sampler2D cc_shadowMap;\n  uniform sampler2D cc_spotLightingMap;\n  float CCGetShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture2D(cc_shadowMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow / 5.0;\n  }\n  float CCGetShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture2D(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture2D(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n  float CCGetDirLightShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture2D(cc_spotLightingMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetDirLightShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture2D(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    return shadow / 5.0;\n  }\n  float CCGetDirLightShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture2D(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetDirLightShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture2D(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n#endif\n#endif\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nfloat GGXMobile (float roughness, float NoH, vec3 H, vec3 N) {\n  vec3 NxH = cross(N, H);\n  float OneMinusNoHSqr = dot(NxH, NxH);\n  float a = roughness * roughness;\n  float n = NoH * a;\n  float p = a / (OneMinusNoHSqr + n * n);\n  return p * p;\n}\nfloat CalcSpecular (float roughness, float NoH, vec3 H, vec3 N) {\n  return (roughness*0.25 + 0.25) * GGXMobile(roughness, NoH, H, N);\n}\nvec3 BRDFApprox (vec3 specular, float roughness, float NoV) {\n  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);\n  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);\n  vec4 r = roughness * c0 + c1;\n  float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n  vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n  AB.y *= clamp(50.0 * specular.g, 0.0, 1.0);\n  return specular * AB.x + AB.y;\n}\nstruct StandardSurface {\n  vec4 albedo;\n  vec3 position;\n  vec3 normal;\n  vec3 emissive;\n  vec4 lightmap;\n  float roughness;\n  float metallic;\n  float occlusion;\n};\n#if CC_FORWARD_ADD\nuniform highp vec4 cc_lightPos[1];\nuniform vec4 cc_lightColor[1];\nuniform vec4 cc_lightSizeRangeAngle[1];\nuniform vec4 cc_lightDir[1];\nfloat SmoothDistAtt (float distSqr, float invSqrAttRadius) {\n  float factor = distSqr * invSqrAttRadius;\n  float smoothFactor = clamp(1.0 - factor * factor, 0.0, 1.0);\n  return smoothFactor * smoothFactor;\n}\nfloat GetDistAtt (float distSqr, float invSqrAttRadius) {\n  float attenuation = 1.0 / max(distSqr, 0.01*0.01);\n  attenuation *= SmoothDistAtt(distSqr , invSqrAttRadius);\n  return attenuation;\n}\nfloat GetAngleAtt (vec3 L, vec3 litDir, float litAngleScale, float litAngleOffset) {\n  float cd = dot(litDir, L);\n  float attenuation = clamp(cd * litAngleScale + litAngleOffset, 0.0, 1.0);\n  return (attenuation * attenuation);\n}\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 finalColor = vec3(0.0);\n    for (int i = 0; i < 1; i++) {\n      vec3 SLU = cc_lightPos[i].xyz - s.position;\n      vec3 SL = normalize(SLU);\n      vec3 SH = normalize(SL + V);\n      float SNL = max(dot(N, SL), 0.001);\n      float SNH = max(dot(N, SH), 0.0);\n      float distSqr = dot(SLU, SLU);\n      float litRadius = cc_lightSizeRangeAngle[i].x;\n      float litRadiusSqr = litRadius * litRadius;\n      float illum = 3.14159265359 * (litRadiusSqr / max(litRadiusSqr , distSqr));\n      float attRadiusSqrInv = 1.0 / max(cc_lightSizeRangeAngle[i].y, 0.01);\n      attRadiusSqrInv *= attRadiusSqrInv;\n      float att = GetDistAtt(distSqr, attRadiusSqrInv);\n      vec3 lspec = specular * CalcSpecular(s.roughness, SNH, SH, N);\n      if (cc_lightPos[i].w > 0.0) {\n        float cosInner = max(dot(-cc_lightDir[i].xyz, SL), 0.01);\n        float cosOuter = cc_lightSizeRangeAngle[i].z;\n        float litAngleScale = 1.0 / max(0.001, cosInner - cosOuter);\n        float litAngleOffset = -cosOuter * litAngleScale;\n        att *= GetAngleAtt(SL, -cc_lightDir[i].xyz, litAngleScale, litAngleOffset);\n      }\n      vec3 lightColor = cc_lightColor[i].rgb;\n    #if CC_RECEIVE_SHADOW\n      if (cc_lightPos[i].w > 0.0) {\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetDirLightShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetDirLightShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetDirLightShadowFactorX5();\n      else shadowAttenuation = CCGetDirLightShadowFactorX1();\n      lightColor *= 1.0 - shadowAttenuation;\n    }\n      }\n    #endif\n      finalColor += SNL * lightColor * cc_lightColor[i].w * illum * att * (diffuseContrib + lspec);\n    }\n    finalColor = finalColor * s.occlusion;\n    return vec4(finalColor, 0.0);\n  }\n#else\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 L = normalize(-cc_mainLitDir.xyz);\n    vec3 H = normalize(L+V);\n    float NH = max(dot(N, H), 0.0);\n    float NL = max(dot(N, L), 0.001);\n    vec3 finalColor = NL * cc_mainLitColor.rgb * cc_mainLitColor.w;\n    #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n      finalColor = s.lightmap.a * s.lightmap.rgb + (1.0 - s.lightmap.a) * finalColor;\n    #endif\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 specularContrib = specular * CalcSpecular(s.roughness, NH, H, N);\n    finalColor *= (diffuseContrib + specularContrib);\n    float fAmb = 0.5 - N.y * 0.5;\n    vec3 ambDiff = mix(cc_ambientSky.rgb, cc_ambientGround.rgb, fAmb) * cc_ambientSky.w;\n    finalColor += (ambDiff.rgb * diffuse);\n    #if CC_USE_IBL\n      vec3 R = normalize(reflect(-V, N));\n      vec4 envmap = fragTextureLod(cc_environment, R, s.roughness * cc_ambientGround.w);\n      #if CC_USE_IBL == 2\n        vec3 env = unpackRGBE(envmap);\n      #else\n        vec3 env = SRGBToLinear(envmap.rgb);\n      #endif\n      finalColor += env * cc_ambientSky.w * specular;\n    #endif\n    finalColor = finalColor * s.occlusion;\n    #if CC_USE_HDR\n      s.emissive *= cc_exposure.w;\n    #endif\n    finalColor += s.emissive;\n    #if CC_RECEIVE_SHADOW\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetShadowFactorX5();\n      else shadowAttenuation = CCGetShadowFactorX1();\n      vec3 shadowColor = cc_shadowColor.rgb * cc_shadowColor.a + finalColor.rgb * (1.0 - cc_shadowColor.a);\n      finalColor.rgb = shadowColor.rgb * shadowAttenuation * NL + finalColor.rgb * (1.0 - shadowAttenuation * NL);\n    }\n    #endif\n    return vec4(finalColor, s.albedo.a);\n  }\n#endif\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nvarying highp vec3 v_position;\nvarying mediump vec3 v_normal;\n#if USE_NORMALMAP\n  varying mediump vec3 v_tangent;\n  varying mediump vec3 v_binormal;\n#endif\nvarying mediump vec2 uvw;\nvarying mediump vec2 uv0;\nvarying mediump vec2 uv1;\nvarying mediump vec2 uv2;\nvarying mediump vec2 uv3;\nvarying mediump vec3 diffuse;\nvarying mediump vec2 luv;\nvarying mediump float v_fog_factor;\nuniform vec4 metallic;\nuniform vec4 roughness;\nuniform sampler2D weightMap;\nuniform sampler2D detailMap0;\nuniform sampler2D detailMap1;\nuniform sampler2D detailMap2;\nuniform sampler2D detailMap3;\nuniform sampler2D normalMap0;\nuniform sampler2D normalMap1;\nuniform sampler2D normalMap2;\nuniform sampler2D normalMap3;\nuniform sampler2D lightMap;\nvoid surf (out StandardSurface s) {\n  #if LAYERS > 1\n    vec4 w = texture2D(weightMap, uvw);\n  #endif\n  vec4 baseColor = vec4(0, 0, 0, 0);\n  #if LAYERS == 1\n    baseColor = texture2D(detailMap0, uv0);\n  #elif LAYERS == 2\n    baseColor += texture2D(detailMap0, uv0) * w.r;\n    baseColor += texture2D(detailMap1, uv1) * w.g;\n  #elif LAYERS == 3\n    baseColor += texture2D(detailMap0, uv0) * w.r;\n    baseColor += texture2D(detailMap1, uv1) * w.g;\n    baseColor += texture2D(detailMap2, uv2) * w.b;\n  #elif LAYERS == 4\n    baseColor += texture2D(detailMap0, uv0) * w.r;\n    baseColor += texture2D(detailMap1, uv1) * w.g;\n    baseColor += texture2D(detailMap2, uv2) * w.b;\n    baseColor += texture2D(detailMap3, uv3) * w.a;\n  #else\n    baseColor = texture2D(detailMap0, uv0);\n  #endif\n  s.position = v_position;\n  #if USE_NORMALMAP\n    vec4 baseNormal = vec4(0, 0, 0, 0);\n    #if LAYERS == 1\n      baseNormal = texture2D(normalMap0, uv0);\n    #elif LAYERS == 2\n      baseNormal += texture2D(normalMap0, uv0) * w.r;\n      baseNormal += texture2D(normalMap1, uv1) * w.g;\n    #elif LAYERS == 3\n      baseNormal += texture2D(normalMap0, uv0) * w.r;\n      baseNormal += texture2D(normalMap1, uv1) * w.g;\n      baseNormal += texture2D(normalMap2, uv2) * w.b;\n    #elif LAYERS == 4\n      baseNormal += texture2D(normalMap0, uv0) * w.r;\n      baseNormal += texture2D(normalMap1, uv1) * w.g;\n      baseNormal += texture2D(normalMap2, uv2) * w.b;\n      baseNormal += texture2D(normalMap3, uv3) * w.a;\n    #else\n      baseNormal = texture2D(normalMap0, uv0);\n    #endif\n    vec3 nmmp = baseNormal.xyz - vec3(0.5);\n    s.normal =\n      nmmp.x * normalize(v_tangent) +\n      nmmp.y * normalize(v_binormal) +\n      nmmp.z * normalize(v_normal);\n  #else\n    s.normal = v_normal;\n  #endif\n  s.albedo = vec4(SRGBToLinear(baseColor.rgb), 1.0);\n  s.occlusion = 1.0;\n  #if USE_PBR\n    s.roughness = 0.0;\n    #if LAYERS == 1\n      s.roughness = roughness.x;\n    #elif LAYERS == 2\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n    #elif LAYERS == 3\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n      s.roughness += roughness.z * w.b;\n    #elif LAYERS == 4\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n      s.roughness += roughness.z * w.b;\n      s.roughness += roughness.w * w.a;\n    #else\n      s.roughness = 1.0;\n    #endif\n    s.metallic = 0.0;\n    #if LAYERS == 1\n      s.metallic = metallic.x;\n    #elif LAYERS == 2\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n    #elif LAYERS == 3\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n      s.metallic += metallic.z * w.b;\n    #elif LAYERS == 4\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n      s.metallic += metallic.z * w.b;\n      s.metallic += metallic.w * w.a;\n    #else\n      s.metallic = 0.0;\n    #endif\n  #else\n    s.roughness = 1.0;\n    s.metallic = 0.0;\n  #endif\n  s.emissive = vec3(0.0, 0.0, 0.0);\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    s.lightmap = texture2D(lightMap, luv);\n  #else\n    s.lightmap = vec4(0.0, 0.0, 0.0, 0.0);\n  #endif\n}\nvec4 frag () {\n  StandardSurface s; surf(s);\n  vec4 color = CCStandardShading(s);\n  color = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, color.rgb, v_fog_factor), color.a);\n  return CCFragOutput(color);\n}\nvoid main() { gl_FragColor = frag(); }"
            }, {
              "vert": "\nprecision highp float;\nuniform highp mat4 cc_matWorld;\nuniform highp mat4 cc_matLightViewProj;\nattribute vec3 a_position;\nattribute vec3 a_normal;\nattribute vec2 a_texCoord;\nvarying vec2 v_clip_depth;\nvec4 vert () {\n  vec4 worldPos;\n  worldPos.x = cc_matWorld[3][0] + a_position.x;\n  worldPos.y = cc_matWorld[3][1] + a_position.y;\n  worldPos.z = cc_matWorld[3][2] + a_position.z;\n  worldPos.w = 1.0;\n  vec4 clipPos = cc_matLightViewProj * worldPos;\n  v_clip_depth = clipPos.zw;\n  return clipPos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 packDepthToRGBA (float depth) {\n  vec4 ret = vec4(1.0, 255.0, 65025.0, 160581375.0) * depth;\n  ret = fract(ret);\n  ret -= ret.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n  return ret;\n}\nvarying vec2 v_clip_depth;\nvec4 frag () {\n  return packDepthToRGBA(v_clip_depth.x / v_clip_depth.y * 0.5 + 0.5);\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nattribute vec3 a_position;\nattribute vec3 a_normal;\nattribute vec2 a_texCoord;\nattribute vec4 a_tangent;\n#if CC_USE_MORPH\n    attribute float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nuniform vec4 cc_displacementWeights[15];\nuniform vec4 cc_displacementTextureInfo;\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n            int pixelIndex = elementIndex;\n            vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n            vec2 uv = getPixelCoordFromLocation(location, cc_displacementTextureInfo.xy);\n            return texture2D(tex, uv);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture2D(tex, x)),\n            decode32(texture2D(tex, y)),\n            decode32(texture2D(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  attribute vec4 a_joints;\nattribute vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    attribute highp vec4 a_jointAnimInfo;\n  #endif\n  uniform highp vec4 cc_jointTextureInfo;\n  uniform highp vec4 cc_jointAnimInfo;\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  uniform highp vec4 cc_joints[90];\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matProj;\nuniform highp vec4 cc_cameraPos;\nuniform mediump vec4 cc_fogBase;\nuniform mediump vec4 cc_fogAdd;\n#if USE_INSTANCING\n  attribute vec4 a_matWorld0;\n  attribute vec4 a_matWorld1;\n  attribute vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    attribute vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  attribute float a_dyn_batch_id;\n  uniform highp mat4 cc_matWorlds[10];\n#else\nuniform highp mat4 cc_matWorld;\n#endif\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\n#if USE_VERTEX_COLOR\n  attribute lowp vec4 a_color;\n  varying lowp vec4 v_color;\n#endif\n#if USE_TEXTURE\n  varying vec2 v_uv;\n  uniform vec4 tilingOffset;\n#endif\nvarying float factor_fog;\nvec4 vert () {\n  vec4 position;\n  position = vec4(a_position, 1.0);\n  #if CC_USE_MORPH\n    applyMorph(position);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(position);\n  #endif\n  mat4 matWorld;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n  #else\n    matWorld = cc_matWorld;\n  #endif\n  #if USE_TEXTURE\n    v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  #if USE_VERTEX_COLOR\n    v_color = a_color;\n  #endif\n  factor_fog = CC_TRANSFER_FOG(matWorld * position);\n  return cc_matProj * (cc_matView * matWorld) * position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nuniform mediump vec4 cc_exposure;\nuniform mediump vec4 cc_fogColor;\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\n#if USE_ALPHA_TEST\n#endif\n#if USE_TEXTURE\n  varying vec2 v_uv;\n  uniform sampler2D mainTexture;\n#endif\nuniform vec4 mainColor;\nuniform vec4 colorScaleAndCutoff;\n#if USE_VERTEX_COLOR\n  varying lowp vec4 v_color;\n#endif\nvarying float factor_fog;\nvec4 frag () {\n  vec4 o = mainColor;\n  o.rgb *= colorScaleAndCutoff.xyz;\n  #if USE_VERTEX_COLOR\n    o *= v_color;\n  #endif\n  #if USE_TEXTURE\n    o *= texture2D(mainTexture, v_uv);\n  #endif\n  #if USE_ALPHA_TEST\n    if (o.ALPHA_TEST_CHANNEL < colorScaleAndCutoff.w) discard;\n  #endif\n  o = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, o.rgb, factor_fog), o.a);\n  return CCFragOutput(o);\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nattribute vec3 a_position;\nattribute vec3 a_normal;\nattribute vec2 a_texCoord;\nattribute vec4 a_tangent;\n#if CC_USE_MORPH\n    attribute float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nuniform vec4 cc_displacementWeights[15];\nuniform vec4 cc_displacementTextureInfo;\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n            int pixelIndex = elementIndex;\n            vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n            vec2 uv = getPixelCoordFromLocation(location, cc_displacementTextureInfo.xy);\n            return texture2D(tex, uv);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture2D(tex, x)),\n            decode32(texture2D(tex, y)),\n            decode32(texture2D(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  attribute vec4 a_joints;\nattribute vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    attribute highp vec4 a_jointAnimInfo;\n  #endif\n  uniform highp vec4 cc_jointTextureInfo;\n  uniform highp vec4 cc_jointAnimInfo;\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  uniform highp vec4 cc_joints[90];\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture2D(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture2D(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matProj;\n#if USE_INSTANCING\n  attribute vec4 a_matWorld0;\n  attribute vec4 a_matWorld1;\n  attribute vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    attribute vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  attribute float a_dyn_batch_id;\n  uniform highp mat4 cc_matWorlds[10];\n#else\nuniform highp mat4 cc_matWorld;\n#endif\nuniform highp mat4 cc_matLightPlaneProj;\nvec4 vert () {\n  vec4 position;\n  position = vec4(a_position, 1.0);\n  #if CC_USE_MORPH\n    applyMorph(position);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(position);\n  #endif\n  mat4 matWorld;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n  #else\n    matWorld = cc_matWorld;\n  #endif\n  position = cc_matProj * (cc_matView * cc_matLightPlaneProj * matWorld) * position;\n  position.z -= 0.0001;\n  return position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nuniform lowp vec4 cc_shadowColor;\nuniform mediump vec4 cc_exposure;\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nvec4 frag () {\n  return CCFragOutput(cc_shadowColor);\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nuniform highp mat4 cc_matView;\nuniform highp mat4 cc_matProj;\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nattribute vec3 a_position;\nattribute vec3 a_normal;\nattribute vec2 a_texCoord;\nattribute vec4 a_tangent;\nvarying mediump vec4 viewDir;\nvec4 vert () {\n  viewDir = vec4(a_position, 1.0);\n  mat4 matViewRotOnly = mat4(mat3(cc_matView));\n  mat4 matProj = cc_matProj;\n  if (matProj[3].w > 0.0) {\n    vec2 scale = vec2(48.0, 24.0);\n    matProj[0].xy *= scale;\n    matProj[1].xy *= scale;\n    matProj[2].zw = vec2(-1.0);\n    matProj[3].zw = vec2(0.0);\n  }\n  vec4 pos = matProj * matViewRotOnly * viewDir;\n  pos.z = 0.99999 * pos.w;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nuniform mediump vec4 cc_ambientSky;\nuniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nvarying mediump vec4 viewDir;\nvec4 frag () {\n  #if USE_RGBE_CUBEMAP\n    vec3 c = unpackRGBE(textureCube(cc_environment, viewDir.xyz));\n  #else\n    vec3 c = SRGBToLinear(textureCube(cc_environment, viewDir.xyz).rgb);\n  #endif\n  return CCFragOutput(vec4(c * cc_ambientSky.w, 1.0));\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nuniform highp mat4 cc_matViewProj;\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec2 v_uv;\nuniform vec4 offset;\nuniform vec4 digits[20];\nfloat getComponent(vec4 v, float i) {\n  if (i < 1.0) { return v.x; }\n  else if (i < 2.0) { return v.y; }\n  else if (i < 3.0) { return v.z; }\n  else { return v.w; }\n}\nvec4 vert () {\n  vec4 position = cc_matViewProj * vec4(a_position, 1.0);\n  position.xy += offset.xy;\n  v_uv = a_color.xy;\n  if (a_color.z >= 0.0) {\n    float n = getComponent(digits[int(a_color.z)], a_color.w);\n    v_uv += vec2(offset.z * n, 0.0);\n  }\n  return position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nuniform mediump vec4 cc_exposure;\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nvarying vec2 v_uv;\nuniform sampler2D mainTexture;\nvec4 frag () {\n  return CCFragOutput(texture2D(mainTexture, v_uv));\n}\nvoid main() { gl_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_uv;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 0, 1);\n  v_uv = a_texCoord;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D mainTexture;\nuniform float u_precent;\nvec4 frag () {\n  vec4 color = texture2D(mainTexture, v_uv);\n  float precent = clamp(u_precent, 0.0, 1.0);\n  color.xyz *= precent;\n  return color;\n}\nvoid main() { gl_FragColor = frag(); }"
            }]];

            var glsl3 = [[{
              "vert": "\nprecision mediump float;\nlayout(std140) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nout mediump vec2 uv;\nout mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n  , mat4 viewInv\n) {\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n}\nin vec3 a_position;\nin vec2 a_texCoord;\nin vec4 a_color;\nlayout(std140) uniform builtin {\n  vec4 cc_size_rotation;\n};\nvec4 vs_main() {\n  vec4 pos = vec4(a_position, 1);\n  pos = cc_matWorld * pos;\n  vec2 vertOffset = a_texCoord.xy - 0.5;\n  computeVertPos(pos, vertOffset, quaternionFromEuler(vec3(0., 0., cc_size_rotation.z)), vec3(cc_size_rotation.xy, 0.), cc_matViewInv);\n  pos = cc_matViewProj * pos;\n  uv = a_texCoord.xy;\n  color = a_color;\n  return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
              "frag": "\nprecision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nin vec2 uv;\nin vec4 color;\nuniform sampler2D mainTexture;\nlayout(std140) uniform FragConstants {\n  vec4 tintColor;\n};\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n  return CCFragOutput(col);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nin vec3 a_position;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 frag () {\n  vec4 o = vec4(1.0);\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nin vec3 a_position;\nin vec4 a_color;\nout vec4 v_color;\nin float a_dist;\nout float v_dist;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  pos = cc_matViewProj * cc_matWorld * pos;\n  v_color = a_color;\n  v_dist = a_dist;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nin vec4 v_color;\nin float v_dist;\nvec4 frag () {\n  vec4 o = v_color;\n    float aa = fwidth(v_dist);\n  float alpha = 1. - smoothstep(-aa, 0., abs(v_dist) - 1.0);\n  o.rgb *= o.a;\n  o *= alpha;\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nmat4 matrixFromRT (vec4 q, vec3 p){\n  float x2 = q.x + q.x;\n  float y2 = q.y + q.y;\n  float z2 = q.z + q.z;\n  float xx = q.x * x2;\n  float xy = q.x * y2;\n  float xz = q.x * z2;\n  float yy = q.y * y2;\n  float yz = q.y * z2;\n  float zz = q.z * z2;\n  float wx = q.w * x2;\n  float wy = q.w * y2;\n  float wz = q.w * z2;\n  return mat4(\n    1. - (yy + zz), xy + wz, xz - wy, 0,\n    xy - wz, 1. - (xx + zz), yz + wx, 0,\n    xz + wy, yz - wx, 1. - (xx + yy), 0,\n    p.x, p.y, p.z, 1\n  );\n}\nmat4 matFromRTS (vec4 q, vec3 t, vec3 s){\n  float x = q.x, y = q.y, z = q.z, w = q.w;\n  float x2 = x + x;\n  float y2 = y + y;\n  float z2 = z + z;\n  float xx = x * x2;\n  float xy = x * y2;\n  float xz = x * z2;\n  float yy = y * y2;\n  float yz = y * z2;\n  float zz = z * z2;\n  float wx = w * x2;\n  float wy = w * y2;\n  float wz = w * z2;\n  float sx = s.x;\n  float sy = s.y;\n  float sz = s.z;\n  return mat4((1. - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,\n    (xy - wz) * sy, (1. - (xx + zz)) * sy, (yz + wx) * sy, 0,\n    (xz + wy) * sz, (yz - wx) * sz, (1. - (xx + yy)) * sz, 0,\n    t.x, t.y, t.z, 1);\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nlayout(std140) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nout mediump vec2 uv;\nout mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n#if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n  , mat4 viewInv\n#endif\n#if CC_RENDER_MODE == 1\n  , vec3 eye\n  , vec4 velocity\n  , float velocityScale\n  , float lengthScale\n  , float xIndex\n#endif\n) {\n#if CC_RENDER_MODE == 0\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n#elif CC_RENDER_MODE == 1\n  vec3 camRight = normalize(cross(pos.xyz - eye, velocity.xyz)) * s.x;\n  vec3 camUp = velocity.xyz * velocityScale + normalize(velocity.xyz) * lengthScale * s.y;\n  pos.xyz += (camRight * abs(vertOffset.x) * sign(vertOffset.y)) - camUp * xIndex;\n#elif CC_RENDER_MODE == 2\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = vec3(1, 0, 0);\n  vec3 camY = vec3(0, 0, -1);\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, cross(camX, camY), q);\n#elif CC_RENDER_MODE == 3\n  vec2 viewSpaceVert = vec2(vertOffset.x * s.x, vertOffset.y * s.y);\n  rotateCorner(viewSpaceVert, q.z);\n  vec3 camX = normalize(vec3(cc_matView[0][0], cc_matView[1][0], cc_matView[2][0]));\n  vec3 camY = vec3(0, 1, 0);\n  vec3 offset = camX * viewSpaceVert.x + camY * viewSpaceVert.y;\n  pos.xyz += offset;\n#else\n  pos.x += vertOffset.x;\n  pos.y += vertOffset.y;\n#endif\n}\nvec2 computeUV (float frameIndex, vec2 vertIndex, vec2 frameTile){\n  vec2 aniUV = vec2(0, floor(frameIndex * frameTile.y));\n  aniUV.x = floor(frameIndex * frameTile.x * frameTile.y - aniUV.y * frameTile.x);\n#if CC_RENDER_MODE != 4\n  vertIndex.y = 1. - vertIndex.y;\n#endif\n  return (aniUV.xy + vertIndex) / vec2(frameTile.x, frameTile.y);\n}\nlayout(std140) uniform SampleConstants {\n  vec4 u_sampleInfo;\n};\nlayout(std140) uniform TickConstants {\n  vec4 u_worldRot;\n  vec4 u_timeDelta;\n};\nin vec4 a_position_starttime;\nin vec4 a_size_uv;\nin vec4 a_rotation_uv;\nin vec4 a_color;\nin vec4 a_dir_life;\nin float a_rndSeed;\n#if CC_RENDER_MODE == 4\n  in vec3 a_texCoord;\n  in vec3 a_texCoord3;\n  in vec3 a_normal;\n  in vec4 a_color1;\n#endif\nvec3 unpackCurveData (sampler2D tex, vec2 coord) {\n    vec4 a = texture(tex, coord);\n    vec4 b = texture(tex, coord + u_sampleInfo.y);\n    float c = fract(coord.x * u_sampleInfo.x);\n    return mix(a.xyz, b.xyz, c);\n}\nvec3 unpackCurveData (sampler2D tex, vec2 coord, out float w) {\n    vec4 a = texture(tex, coord);\n    vec4 b = texture(tex, coord + u_sampleInfo.y);\n    float c = fract(coord.x * u_sampleInfo.x);\n    w = mix(a.w, b.w, c);\n    return mix(a.xyz, b.xyz, c);\n}\nfloat pseudoRandom (float seed) {\n  seed = mod(seed, 233280.);\n  float q = (seed * 9301. + 49297.) / 233280.;\n  return fract(q);\n}\n#if COLOR_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D color_over_time_tex0;\n  layout(std140) uniform ColorConstant {\n    int u_color_mode;\n  };\n#endif\n#if ROTATION_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D rotation_over_time_tex0;\n  layout(std140) uniform RotationConstant {\n    int u_rotation_mode;\n  };\n#endif\n#if SIZE_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D size_over_time_tex0;\n  layout(std140) uniform SizeConstant {\n    int u_size_mode;\n  };\n#endif\n#if FORCE_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D force_over_time_tex0;\n  layout(std140) uniform ForceConstant {\n    int u_force_mode;\n    int u_force_space;\n  };\n#endif\n#if VELOCITY_OVER_TIME_MODULE_ENABLE\n  uniform sampler2D velocity_over_time_tex0;\n  layout(std140) uniform VelocityConstant {\n    int u_velocity_mode;\n    int u_velocity_space;\n  };\n#endif\n#if TEXTURE_ANIMATION_MODULE_ENABLE\n  uniform sampler2D texture_animation_tex0;\n  layout(std140) uniform AnimationConstant {\n    vec4 u_anim_info;\n  };\n#endif\nfloat repeat (float t, float length) {\n  return t - floor(t / length) * length;\n}\nvec4 rotateQuat (vec4 p, vec4 q) {\n  vec3 iv = cross(q.xyz, p.xyz) + q.w * p.xyz;\n  vec3 res = p.xyz + 2.0 * cross(q.xyz, iv);\n  return vec4(res.xyz, p.w);\n}\nvec4 gpvs_main () {\n  float activeTime = u_timeDelta.x - a_position_starttime.w;\n  float normalizedTime = clamp(activeTime / a_dir_life.w, 0.0, 1.0);\n  vec2 timeCoord0 = vec2(normalizedTime, 0.);\n  vec2 timeCoord1 = vec2(normalizedTime, 1.);\n  #if CC_RENDER_MODE == 4\n    vec2 vertIdx = vec2(a_texCoord.x, a_texCoord.y);\n  #else\n    vec2 vertIdx = vec2(a_size_uv.w, a_rotation_uv.w);\n  #endif\n  vec4 velocity = vec4(a_dir_life.xyz, 0.);\n  vec4 pos = vec4(a_position_starttime.xyz, 1.);\n  vec3 size = a_size_uv.xyz;\n  #if SIZE_OVER_TIME_MODULE_ENABLE\n    if (u_size_mode == 1) {\n      size *= unpackCurveData(size_over_time_tex0, timeCoord0);\n    } else {\n      vec3 size_0 = unpackCurveData(size_over_time_tex0, timeCoord0);\n      vec3 size_1 = unpackCurveData(size_over_time_tex0, timeCoord1);\n      float factor_s = pseudoRandom(a_rndSeed + 39825.);\n      size *= mix(size_0, size_1, factor_s);\n    }\n  #endif\n  vec3 compScale = scale.xyz * size;\n  #if FORCE_OVER_TIME_MODULE_ENABLE\n    vec3 forceAnim = vec3(0.);\n    if (u_force_mode == 1) {\n      forceAnim = unpackCurveData(force_over_time_tex0, timeCoord0);\n    } else {\n      vec3 force_0 = unpackCurveData(force_over_time_tex0, timeCoord0);\n      vec3 force_1 = unpackCurveData(force_over_time_tex0, timeCoord1);\n      float factor_f =  pseudoRandom(a_rndSeed + 212165.);\n      forceAnim = mix(force_0, force_1, factor_f);\n    }\n    vec4 forceTrack = vec4(forceAnim, 0.);\n    if (u_force_space == 0) {\n      forceTrack = rotateQuat(forceTrack, u_worldRot);\n    }\n    velocity.xyz += forceTrack.xyz;\n  #endif\n  #if VELOCITY_OVER_TIME_MODULE_ENABLE\n    float speedModifier0 = 1.;\n    float speedModifier1 = 1.;\n    vec3 velocityAnim = vec3(0.);\n    if (u_velocity_mode == 1) {\n      velocityAnim = unpackCurveData(velocity_over_time_tex0, timeCoord0, speedModifier0);\n    } else {\n      vec3 vectory_0 = unpackCurveData(velocity_over_time_tex0, timeCoord0, speedModifier0);\n      vec3 vectory_1 = unpackCurveData(velocity_over_time_tex0, timeCoord1, speedModifier1);\n      float factor_v = pseudoRandom(a_rndSeed + 197866.);\n      velocityAnim = mix(vectory_0, vectory_1, factor_v);\n      speedModifier0 = mix(speedModifier0, speedModifier1, factor_v);\n    }\n    vec4 velocityTrack = vec4(velocityAnim, 0.);\n    if (u_velocity_space == 0) {\n      velocityTrack = rotateQuat(velocityTrack, u_worldRot);\n    }\n    velocity.xyz += velocityTrack.xyz;\n    velocity.xyz *= speedModifier0;\n  #endif\n  pos.xyz += velocity.xyz * normalizedTime * a_dir_life.w;\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    #if CC_RENDER_MODE == 1\n      velocity = rotateQuat(velocity, u_worldRot);\n    #endif\n  #endif\n  vec3 rotation = a_rotation_uv.xyz;\n  #if ROTATION_OVER_TIME_MODULE_ENABLE\n    if (u_rotation_mode == 1) {\n      rotation += unpackCurveData(rotation_over_time_tex0, timeCoord0) * normalizedTime * a_dir_life.w;\n    } else {\n      vec3 rotation_0 = unpackCurveData(rotation_over_time_tex0, timeCoord0);\n      vec3 rotation_1 = unpackCurveData(rotation_over_time_tex0, timeCoord1);\n      float factor_r = pseudoRandom(a_rndSeed + 125292.);\n      rotation += mix(rotation_0, rotation_1, factor_r) * normalizedTime * a_dir_life.w;\n    }\n  #endif\n  #if COLOR_OVER_TIME_MODULE_ENABLE\n    if (u_color_mode == 1) {\n      color = a_color * texture(color_over_time_tex0, timeCoord0);\n    } else {\n      vec4 color_0 = texture(color_over_time_tex0, timeCoord0);\n      vec4 color_1 = texture(color_over_time_tex0, timeCoord1);\n      float factor_c = pseudoRandom(a_rndSeed + 91041.);\n      color = a_color * mix(color_0, color_1, factor_c);\n    }\n  #else\n    color = a_color;\n  #endif\n  #if CC_RENDER_MODE != 4\n    vec2 cornerOffset = vec2((vertIdx - 0.5));\n    #if CC_RENDER_MODE == 0\n      vec3 rotEuler = rotation.xyz;\n    #elif CC_RENDER_MODE == 1\n      vec3 rotEuler = vec3(0.);\n    #else\n      vec3 rotEuler = vec3(0., 0., rotation.z);\n    #endif\n    computeVertPos(pos, cornerOffset, quaternionFromEuler(rotEuler), compScale\n      #if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n        , cc_matViewInv\n      #endif\n      #if CC_RENDER_MODE == 1\n        , cc_cameraPos.xyz\n        , velocity\n        , frameTile_velLenScale.z\n        , frameTile_velLenScale.w\n        , a_size_uv.w\n      #endif\n    );\n  #else\n    mat4 xformNoScale = matrixFromRT(quaternionFromEuler(rotation), pos.xyz);\n    mat4 xform = matFromRTS(quaternionFromEuler(rotation), pos.xyz, compScale);\n    pos = xform * vec4(a_texCoord3, 1);\n    vec4 normal = xformNoScale * vec4(a_normal, 0);\n    color *= a_color1;\n  #endif\n  pos = cc_matViewProj * pos;\n  float frameIndex = 0.;\n  #if TEXTURE_ANIMATION_MODULE_ENABLE\n    float startFrame = 0.;\n    vec3 frameInfo = vec3(0.);\n    if (int(u_anim_info.x) == 1) {\n      frameInfo = unpackCurveData(texture_animation_tex0, timeCoord0);\n    } else {\n      vec3 frameInfo0 = unpackCurveData(texture_animation_tex0, timeCoord0);\n      vec3 frameInfo1 = unpackCurveData(texture_animation_tex0, timeCoord1);\n      float factor_t = pseudoRandom(a_rndSeed + 90794.);\n      frameInfo = mix(frameInfo0, frameInfo1, factor_t);\n    }\n    startFrame = frameInfo.x / u_anim_info.y;\n    frameIndex = repeat(u_anim_info.z * (frameInfo.y + startFrame), 1.);\n  #endif\n  uv = computeUV(frameIndex, vertIdx, frameTile_velLenScale.xy) * mainTiling_Offset.xy + mainTiling_Offset.zw;\n  return pos;\n}\nvoid main() { gl_Position = gpvs_main(); }",
              "frag": "\nprecision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nin vec2 uv;\nin vec4 color;\nuniform sampler2D mainTexture;\nlayout(std140) uniform FragConstants {\n  vec4 tintColor;\n};\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n  return CCFragOutput(col);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision mediump float;\nlayout(std140) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nout mediump vec2 uv;\nout mediump vec4 color;\nin vec3 a_position;\nin vec4 a_texCoord;\nin vec3 a_texCoord1;\nin vec3 a_texCoord2;\nin vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n  out vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n  highp vec4 pos = vec4(a_position, 1);\n  vec4 velocity = vec4(a_texCoord1.xyz, 0);\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n  #endif\n  float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n  vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n  pos.xyz += camUp * vertOffset;\n  pos = cc_matViewProj * pos;\n  uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n  color = a_color;\n  #if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n  #endif\n  return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
              "frag": "\n  precision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\n  in vec2 uv;\n  in vec4 color;\n  #if CC_DRAW_WIRE_FRAME\n    in vec3 vBarycentric;\n  #endif\n  uniform sampler2D mainTexture;\n  layout(std140) uniform FragConstants {\n    vec4 tintColor;\n  };\n  vec4 add () {\n    vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n#if CC_DRAW_WIRE_FRAME\n    if (any(lessThan(vBarycentric, vec3(0.02)))) {\n        col = vec4(0., 1., 1., 1.);\n    }\n#endif\n    return CCFragOutput(col);\n  }\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nmat4 matrixFromRT (vec4 q, vec3 p){\n  float x2 = q.x + q.x;\n  float y2 = q.y + q.y;\n  float z2 = q.z + q.z;\n  float xx = q.x * x2;\n  float xy = q.x * y2;\n  float xz = q.x * z2;\n  float yy = q.y * y2;\n  float yz = q.y * z2;\n  float zz = q.z * z2;\n  float wx = q.w * x2;\n  float wy = q.w * y2;\n  float wz = q.w * z2;\n  return mat4(\n    1. - (yy + zz), xy + wz, xz - wy, 0,\n    xy - wz, 1. - (xx + zz), yz + wx, 0,\n    xz + wy, yz - wx, 1. - (xx + yy), 0,\n    p.x, p.y, p.z, 1\n  );\n}\nmat4 matFromRTS (vec4 q, vec3 t, vec3 s){\n  float x = q.x, y = q.y, z = q.z, w = q.w;\n  float x2 = x + x;\n  float y2 = y + y;\n  float z2 = z + z;\n  float xx = x * x2;\n  float xy = x * y2;\n  float xz = x * z2;\n  float yy = y * y2;\n  float yz = y * z2;\n  float zz = z * z2;\n  float wx = w * x2;\n  float wy = w * y2;\n  float wz = w * z2;\n  float sx = s.x;\n  float sy = s.y;\n  float sz = s.z;\n  return mat4((1. - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,\n    (xy - wz) * sy, (1. - (xx + zz)) * sy, (yz + wx) * sy, 0,\n    (xz + wy) * sz, (yz - wx) * sz, (1. - (xx + yy)) * sz, 0,\n    t.x, t.y, t.z, 1);\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nlayout(std140) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nout mediump vec2 uv;\nout mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n#if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n  , mat4 viewInv\n#endif\n#if CC_RENDER_MODE == 1\n  , vec3 eye\n  , vec4 velocity\n  , float velocityScale\n  , float lengthScale\n  , float xIndex\n#endif\n) {\n#if CC_RENDER_MODE == 0\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n#elif CC_RENDER_MODE == 1\n  vec3 camRight = normalize(cross(pos.xyz - eye, velocity.xyz)) * s.x;\n  vec3 camUp = velocity.xyz * velocityScale + normalize(velocity.xyz) * lengthScale * s.y;\n  pos.xyz += (camRight * abs(vertOffset.x) * sign(vertOffset.y)) - camUp * xIndex;\n#elif CC_RENDER_MODE == 2\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = vec3(1, 0, 0);\n  vec3 camY = vec3(0, 0, -1);\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, cross(camX, camY), q);\n#elif CC_RENDER_MODE == 3\n  vec2 viewSpaceVert = vec2(vertOffset.x * s.x, vertOffset.y * s.y);\n  rotateCorner(viewSpaceVert, q.z);\n  vec3 camX = normalize(vec3(cc_matView[0][0], cc_matView[1][0], cc_matView[2][0]));\n  vec3 camY = vec3(0, 1, 0);\n  vec3 offset = camX * viewSpaceVert.x + camY * viewSpaceVert.y;\n  pos.xyz += offset;\n#else\n  pos.x += vertOffset.x;\n  pos.y += vertOffset.y;\n#endif\n}\nvec2 computeUV (float frameIndex, vec2 vertIndex, vec2 frameTile){\n  vec2 aniUV = vec2(0, floor(frameIndex * frameTile.y));\n  aniUV.x = floor(frameIndex * frameTile.x * frameTile.y - aniUV.y * frameTile.x);\n#if CC_RENDER_MODE != 4\n  vertIndex.y = 1. - vertIndex.y;\n#endif\n  return (aniUV.xy + vertIndex) / vec2(frameTile.x, frameTile.y);\n}\nin vec3 a_position;\nin vec3 a_texCoord;\nin vec3 a_texCoord1;\nin vec3 a_texCoord2;\nin vec4 a_color;\n#if CC_RENDER_MODE == 1\n  in vec3 a_color1;\n#endif\n#if CC_RENDER_MODE == 4\n  in vec3 a_texCoord3;\n  in vec3 a_normal;\n  in vec4 a_color1;\n#endif\nvec4 lpvs_main () {\n  vec3 compScale = scale.xyz * a_texCoord1;\n  vec4 pos = vec4(a_position, 1);\n  #if CC_RENDER_MODE == 1\n    vec4 velocity = vec4(a_color1.xyz, 0);\n  #endif\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    #if CC_RENDER_MODE == 1\n      velocity = cc_matWorld * velocity;\n    #endif\n  #endif\n  #if CC_RENDER_MODE != 4\n    vec2 cornerOffset = vec2((a_texCoord.xy - 0.5));\n    #if CC_RENDER_MODE == 0\n      vec3 rotEuler = a_texCoord2;\n    #elif CC_RENDER_MODE == 1\n      vec3 rotEuler = vec3(0.);\n    #else\n      vec3 rotEuler = vec3(0., 0., a_texCoord2.z);\n    #endif\n    computeVertPos(pos, cornerOffset, quaternionFromEuler(rotEuler), compScale\n    #if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n      , cc_matViewInv\n    #endif\n    #if CC_RENDER_MODE == 1\n      , cc_cameraPos.xyz\n      , velocity\n      , frameTile_velLenScale.z\n      , frameTile_velLenScale.w\n      , a_texCoord.x\n    #endif\n    );\n    color = a_color;\n  #else\n    mat4 xformNoScale = matrixFromRT(quaternionFromEuler(a_texCoord2), pos.xyz);\n    mat4 xform = matFromRTS(quaternionFromEuler(a_texCoord2), pos.xyz, compScale);\n    pos = xform * vec4(a_texCoord3, 1);\n    vec4 normal = xformNoScale * vec4(a_normal, 0);\n    color = a_color * a_color1;\n  #endif\n  uv = computeUV(a_texCoord.z, a_texCoord.xy, frameTile_velLenScale.xy) * mainTiling_Offset.xy + mainTiling_Offset.zw;\n  pos = cc_matViewProj * pos;\n  return pos;\n}\nvoid main() { gl_Position = lpvs_main(); }",
              "frag": "\nprecision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nin vec2 uv;\nin vec4 color;\nuniform sampler2D mainTexture;\nlayout(std140) uniform FragConstants {\n  vec4 tintColor;\n};\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n  return CCFragOutput(col);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_LOCAL\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nin vec3 a_position;\nin vec2 a_texCoord;\nin vec4 a_color;\nout vec4 v_light;\nout vec2 uv0;\n#if TWO_COLORED\n  in vec4 a_color2;\n  out vec4 v_dark;\n#endif\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  #if USE_LOCAL\n    pos = cc_matWorld * pos;\n  #endif\n  pos = cc_matViewProj * pos;\n  uv0 = a_texCoord;\n  v_light = a_color;\n  #if TWO_COLORED\n    v_dark = a_color2;\n  #endif\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  layout(std140) uniform ALPHA_TEST_DATA {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nin vec4 v_light;\n#if TWO_COLORED\n  in vec4 v_dark;\n#endif\nin vec2 uv0;\nuniform sampler2D cc_spriteTexture;\nvec4 frag () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if TWO_COLORED\n    vec4 texColor = vec4(1, 1, 1, 1);\n    texColor *= texture(cc_spriteTexture, uv0);\n     o.a = texColor.a * v_light.a;\n    o.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    o *= texture(cc_spriteTexture, uv0);\n    o *= v_light;\n  #endif\n  ALPHA_TEST(o);\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_LOCAL\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nin vec3 a_position;\nin vec2 a_texCoord;\nin vec4 a_color;\nout vec4 color;\nout vec2 uv0;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  #if USE_LOCAL\n    pos = cc_matWorld * pos;\n  #endif\n  #if USE_PIXEL_ALIGNMENT\n    pos = cc_matView * pos;\n    pos.xyz = floor(pos.xyz);\n    pos = cc_matProj * pos;\n  #else\n    pos = cc_matViewProj * pos;\n  #endif\n  uv0 = a_texCoord;\n  color = a_color;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 CCSampleWithAlphaSeparated(sampler2D tex, vec2 uv) {\n#if CC_USE_EMBEDDED_ALPHA\n    return vec4(texture(tex, uv).rgb, texture(tex, uv + vec2(0.0, 0.5)).r);\n#else\n    return texture(tex, uv);\n#endif\n}\n#if USE_ALPHA_TEST\n  layout(std140) uniform ALPHA_TEST_DATA {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nin vec4 color;\n#if USE_TEXTURE\n  in vec2 uv0;\n  uniform sampler2D cc_spriteTexture;\n#endif\nvec4 frag () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if USE_TEXTURE\n    o *= CCSampleWithAlphaSeparated(cc_spriteTexture, uv0);\n    #if IS_GRAY\n      float gray  = 0.2126 * o.r + 0.7152 * o.g + 0.0722 * o.b;\n      o.r = o.g = o.b = gray;\n    #endif\n  #endif\n  o *= color;\n  ALPHA_TEST(o);\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nin vec3 a_position;\nin vec3 a_normal;\nin vec2 a_texCoord;\nin vec4 a_tangent;\n#if CC_USE_MORPH\n    in float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nlayout(std140) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  in vec4 a_joints;\nin vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(std140) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(std140) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(std140) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_INSTANCING\n  in vec4 a_matWorld0;\n  in vec4 a_matWorld1;\n  in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  in float a_dyn_batch_id;\n  layout(std140) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(std140) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\nout highp vec4 v_shadowPos;\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if USE_VERTEX_COLOR\n  in vec4 a_color;\n  out vec4 v_color;\n#endif\nout vec3 v_position;\nout vec3 v_normal;\nout vec2 v_uv;\nout vec2 v_uv1;\nout float v_fog_factor;\n#if USE_NORMAL_MAP\n  out vec3 v_tangent;\n  out vec3 v_bitangent;\n#endif\n#if HAS_SECOND_UV || USE_LIGHTMAP\n  in vec2 a_texCoord1;\n#endif\n#if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n  out vec2 v_luv;\nvoid CCLightingMapCaclUV()\n{\n#if !USE_INSTANCING\n      v_luv = cc_lightingMapUVParam.xy + a_texCoord1 * cc_lightingMapUVParam.zw;\n#else\n      v_luv = a_lightingMapUVParam.xy + a_texCoord1 * a_lightingMapUVParam.zw;\n#endif\n}\n#endif\nvec4 vert () {\n  StandardVertInput In;\n  In.position = vec4(a_position, 1.0);\n  In.normal = a_normal;\n  In.tangent = a_tangent;\n  #if CC_USE_MORPH\n    applyMorph(In);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(In);\n  #endif\n  mat4 matWorld, matWorldIT;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n    matWorldIT = matWorld;\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n    matWorldIT = matWorld;\n  #else\n    matWorld = cc_matWorld;\n    matWorldIT = cc_matWorldIT;\n  #endif\n  vec4 pos = matWorld * In.position;\n  v_position = pos.xyz;\n  v_normal = normalize((matWorldIT * vec4(In.normal, 0.0)).xyz);\n  #if USE_NORMAL_MAP\n    v_tangent = normalize((matWorld * vec4(In.tangent.xyz, 0.0)).xyz);\n    v_bitangent = cross(v_normal, v_tangent) * In.tangent.w;\n  #endif\n  v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #if HAS_SECOND_UV\n    v_uv1 = a_texCoord1 * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  #if USE_VERTEX_COLOR\n    v_color = a_color;\n  #endif\n  v_fog_factor = CC_TRANSFER_FOG(pos);\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    CCLightingMapCaclUV();\n  #endif\n    v_shadowPos = cc_matLightViewProj * pos;\n  return cc_matProj * (cc_matView * matWorld) * In.position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if CC_USE_IBL\nuniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec4 fragTextureLod (sampler2D tex, vec2 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\nvec4 fragTextureLod (samplerCube tex, vec3 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\n#endif\n#if CC_RECEIVE_SHADOW\nin highp vec4 v_shadowPos;\n#if CC_RECEIVE_SHADOW\n  uniform sampler2D cc_shadowMap;\n  uniform sampler2D cc_spotLightingMap;\n  float CCGetShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_shadowMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow / 5.0;\n  }\n  float CCGetShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n  float CCGetDirLightShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetDirLightShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    return shadow / 5.0;\n  }\n  float CCGetDirLightShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetDirLightShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n#endif\n#endif\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nfloat GGXMobile (float roughness, float NoH, vec3 H, vec3 N) {\n  vec3 NxH = cross(N, H);\n  float OneMinusNoHSqr = dot(NxH, NxH);\n  float a = roughness * roughness;\n  float n = NoH * a;\n  float p = a / (OneMinusNoHSqr + n * n);\n  return p * p;\n}\nfloat CalcSpecular (float roughness, float NoH, vec3 H, vec3 N) {\n  return (roughness*0.25 + 0.25) * GGXMobile(roughness, NoH, H, N);\n}\nvec3 BRDFApprox (vec3 specular, float roughness, float NoV) {\n  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);\n  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);\n  vec4 r = roughness * c0 + c1;\n  float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n  vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n  AB.y *= clamp(50.0 * specular.g, 0.0, 1.0);\n  return specular * AB.x + AB.y;\n}\nstruct StandardSurface {\n  vec4 albedo;\n  vec3 position;\n  vec3 normal;\n  vec3 emissive;\n  vec4 lightmap;\n  float roughness;\n  float metallic;\n  float occlusion;\n};\n#if CC_FORWARD_ADD\nlayout(std140) uniform CCForwardLight {\n  highp vec4 cc_lightPos[1];\n  vec4 cc_lightColor[1];\n  vec4 cc_lightSizeRangeAngle[1];\n  vec4 cc_lightDir[1];\n};\nfloat SmoothDistAtt (float distSqr, float invSqrAttRadius) {\n  float factor = distSqr * invSqrAttRadius;\n  float smoothFactor = clamp(1.0 - factor * factor, 0.0, 1.0);\n  return smoothFactor * smoothFactor;\n}\nfloat GetDistAtt (float distSqr, float invSqrAttRadius) {\n  float attenuation = 1.0 / max(distSqr, 0.01*0.01);\n  attenuation *= SmoothDistAtt(distSqr , invSqrAttRadius);\n  return attenuation;\n}\nfloat GetAngleAtt (vec3 L, vec3 litDir, float litAngleScale, float litAngleOffset) {\n  float cd = dot(litDir, L);\n  float attenuation = clamp(cd * litAngleScale + litAngleOffset, 0.0, 1.0);\n  return (attenuation * attenuation);\n}\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 finalColor = vec3(0.0);\n    for (int i = 0; i < 1; i++) {\n      vec3 SLU = cc_lightPos[i].xyz - s.position;\n      vec3 SL = normalize(SLU);\n      vec3 SH = normalize(SL + V);\n      float SNL = max(dot(N, SL), 0.001);\n      float SNH = max(dot(N, SH), 0.0);\n      float distSqr = dot(SLU, SLU);\n      float litRadius = cc_lightSizeRangeAngle[i].x;\n      float litRadiusSqr = litRadius * litRadius;\n      float illum = 3.14159265359 * (litRadiusSqr / max(litRadiusSqr , distSqr));\n      float attRadiusSqrInv = 1.0 / max(cc_lightSizeRangeAngle[i].y, 0.01);\n      attRadiusSqrInv *= attRadiusSqrInv;\n      float att = GetDistAtt(distSqr, attRadiusSqrInv);\n      vec3 lspec = specular * CalcSpecular(s.roughness, SNH, SH, N);\n      if (cc_lightPos[i].w > 0.0) {\n        float cosInner = max(dot(-cc_lightDir[i].xyz, SL), 0.01);\n        float cosOuter = cc_lightSizeRangeAngle[i].z;\n        float litAngleScale = 1.0 / max(0.001, cosInner - cosOuter);\n        float litAngleOffset = -cosOuter * litAngleScale;\n        att *= GetAngleAtt(SL, -cc_lightDir[i].xyz, litAngleScale, litAngleOffset);\n      }\n      vec3 lightColor = cc_lightColor[i].rgb;\n    #if CC_RECEIVE_SHADOW\n      if (cc_lightPos[i].w > 0.0) {\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetDirLightShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetDirLightShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetDirLightShadowFactorX5();\n      else shadowAttenuation = CCGetDirLightShadowFactorX1();\n      lightColor *= 1.0 - shadowAttenuation;\n    }\n      }\n    #endif\n      finalColor += SNL * lightColor * cc_lightColor[i].w * illum * att * (diffuseContrib + lspec);\n    }\n    finalColor = finalColor * s.occlusion;\n    return vec4(finalColor, 0.0);\n  }\n#else\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 L = normalize(-cc_mainLitDir.xyz);\n    vec3 H = normalize(L+V);\n    float NH = max(dot(N, H), 0.0);\n    float NL = max(dot(N, L), 0.001);\n    vec3 finalColor = NL * cc_mainLitColor.rgb * cc_mainLitColor.w;\n    #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n      finalColor = s.lightmap.a * s.lightmap.rgb + (1.0 - s.lightmap.a) * finalColor;\n    #endif\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 specularContrib = specular * CalcSpecular(s.roughness, NH, H, N);\n    finalColor *= (diffuseContrib + specularContrib);\n    float fAmb = 0.5 - N.y * 0.5;\n    vec3 ambDiff = mix(cc_ambientSky.rgb, cc_ambientGround.rgb, fAmb) * cc_ambientSky.w;\n    finalColor += (ambDiff.rgb * diffuse);\n    #if CC_USE_IBL\n      vec3 R = normalize(reflect(-V, N));\n      vec4 envmap = fragTextureLod(cc_environment, R, s.roughness * cc_ambientGround.w);\n      #if CC_USE_IBL == 2\n        vec3 env = unpackRGBE(envmap);\n      #else\n        vec3 env = SRGBToLinear(envmap.rgb);\n      #endif\n      finalColor += env * cc_ambientSky.w * specular;\n    #endif\n    finalColor = finalColor * s.occlusion;\n    #if CC_USE_HDR\n      s.emissive *= cc_exposure.w;\n    #endif\n    finalColor += s.emissive;\n    #if CC_RECEIVE_SHADOW\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetShadowFactorX5();\n      else shadowAttenuation = CCGetShadowFactorX1();\n      vec3 shadowColor = cc_shadowColor.rgb * cc_shadowColor.a + finalColor.rgb * (1.0 - cc_shadowColor.a);\n      finalColor.rgb = shadowColor.rgb * shadowAttenuation * NL + finalColor.rgb * (1.0 - shadowAttenuation * NL);\n    }\n    #endif\n    return vec4(finalColor, s.albedo.a);\n  }\n#endif\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nlayout(std140) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\n#if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n  in vec2 v_luv;\nuniform sampler2D cc_lightingMap;\n#endif\nin vec3 v_position;\nin vec2 v_uv;\nin vec2 v_uv1;\nin vec3 v_normal;\nin float v_fog_factor;\n#if USE_VERTEX_COLOR\n  in vec4 v_color;\n#endif\n#if USE_ALBEDO_MAP\n  uniform sampler2D albedoMap;\n#endif\n#if USE_NORMAL_MAP\n  in vec3 v_tangent;\n  in vec3 v_bitangent;\n  uniform sampler2D normalMap;\n#endif\n#if USE_PBR_MAP\n  uniform sampler2D pbrMap;\n#endif\n#if USE_METALLIC_ROUGHNESS_MAP\n  uniform sampler2D metallicRoughnessMap;\n#endif\n#if USE_OCCLUSION_MAP\n  uniform sampler2D occlusionMap;\n#endif\n#if USE_EMISSIVE_MAP\n  uniform sampler2D emissiveMap;\n#endif\n#if USE_ALPHA_TEST\n#endif\nvoid surf (out StandardSurface s) {\n  vec4 baseColor = albedo;\n  #if USE_VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n  #if USE_ALBEDO_MAP\n    vec4 texColor = texture(albedoMap, ALBEDO_UV);\n    texColor.rgb = SRGBToLinear(texColor.rgb);\n    baseColor *= texColor;\n  #endif\n  s.albedo = baseColor;\n  s.albedo.rgb *= albedoScaleAndCutoff.xyz;\n  #if USE_ALPHA_TEST\n    if (s.albedo.ALPHA_TEST_CHANNEL < albedoScaleAndCutoff.w) discard;\n  #endif\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    s.lightmap = texture(cc_lightingMap, v_luv);\n  #endif\n  s.normal = v_normal;\n  #if USE_NORMAL_MAP\n    vec3 nmmp = texture(normalMap, NORMAL_UV).xyz - vec3(0.5);\n    s.normal =\n      (nmmp.x * pbrParams.w) * normalize(v_tangent) +\n      (nmmp.y * pbrParams.w) * normalize(v_bitangent) +\n      nmmp.z * normalize(s.normal);\n  #endif\n  s.position = v_position;\n  vec4 pbr = pbrParams;\n  #if USE_PBR_MAP\n    vec4 res = texture(pbrMap, PBR_UV);\n    pbr.x *= res.r;\n    pbr.y *= res.g;\n    pbr.z *= res.b;\n  #endif\n  #if USE_METALLIC_ROUGHNESS_MAP\n    vec4 metallicRoughness = texture(metallicRoughnessMap, PBR_UV);\n    pbr.z *= metallicRoughness.b;\n    pbr.y *= metallicRoughness.g;\n  #endif\n  #if USE_OCCLUSION_MAP\n    pbr.x *= texture(occlusionMap, PBR_UV).r;\n  #endif\n  s.occlusion = clamp(pbr.x, 0.0, 0.96);\n  s.roughness = clamp(pbr.y, 0.04, 1.0);\n  s.metallic = pbr.z;\n  s.emissive = emissive.rgb * emissiveScaleParam.xyz;\n  #if USE_EMISSIVE_MAP\n    s.emissive *= SRGBToLinear(texture(emissiveMap, EMISSIVE_UV).rgb);\n  #endif\n}\nvec4 frag () {\n  StandardSurface s; surf(s);\n  vec4 color = CCStandardShading(s);\n  color = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, color.rgb, v_fog_factor), color.a);\n  return CCFragOutput(color);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }, {
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nin vec3 a_position;\nin vec3 a_normal;\nin vec2 a_texCoord;\nin vec4 a_tangent;\n#if CC_USE_MORPH\n    in float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nlayout(std140) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  in vec4 a_joints;\nin vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(std140) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(std140) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(std140) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\n#if USE_INSTANCING\n  in vec4 a_matWorld0;\n  in vec4 a_matWorld1;\n  in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  in float a_dyn_batch_id;\n  layout(std140) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(std140) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if HAS_SECOND_UV || USE_LIGHTMAP\n  in vec2 a_texCoord1;\n#endif\nout vec2 v_uv;\nout vec2 v_uv1;\nout float v_clip_depth;\nvec4 vert () {\n  StandardVertInput In;\n  In.position = vec4(a_position, 1.0);\n  In.normal = a_normal;\n  In.tangent = a_tangent;\n  #if CC_USE_MORPH\n    applyMorph(In);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(In);\n  #endif\n  mat4 matWorld, matWorldIT;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n    matWorldIT = matWorld;\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n    matWorldIT = matWorld;\n  #else\n    matWorld = cc_matWorld;\n    matWorldIT = cc_matWorldIT;\n  #endif\n  vec4 worldPos = matWorld * In.position;\n  vec4 clipPos = cc_matLightViewProj * worldPos;\n  v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #if HAS_SECOND_UV\n    v_uv1 = a_texCoord1 * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  v_clip_depth = clipPos.z / clipPos.w * 0.5 + 0.5;\n  return clipPos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(std140) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\nvec4 packDepthToRGBA (float depth) {\n  vec4 ret = vec4(1.0, 255.0, 65025.0, 160581375.0) * depth;\n  ret = fract(ret);\n  ret -= ret.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n  return ret;\n}\nin vec2 v_uv;\nin vec2 v_uv1;\nin float v_clip_depth;\n#if USE_ALBEDO_MAP\n  uniform sampler2D albedoMap;\n#endif\n#if USE_ALPHA_TEST\n#endif\nvec4 frag () {\n  vec4 baseColor = albedo;\n  #if USE_ALBEDO_MAP\n    baseColor *= texture(albedoMap, ALBEDO_UV);\n  #endif\n  #if USE_ALPHA_TEST\n    if (baseColor.ALPHA_TEST_CHANNEL < albedoScaleAndCutoff.w) discard;\n  #endif\n  return packDepthToRGBA(v_clip_depth);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\nout highp vec4 v_shadowPos;\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nin vec3 a_position;\nin vec3 a_normal;\nin vec2 a_texCoord;\nout highp vec3 v_position;\nout mediump vec3 v_normal;\n#if USE_NORMALMAP\n  out mediump vec3 v_tangent;\n  out mediump vec3 v_binormal;\n#endif\nout mediump vec2 uvw;\nout mediump vec2 uv0;\nout mediump vec2 uv1;\nout mediump vec2 uv2;\nout mediump vec2 uv3;\nout mediump vec2 luv;\nout mediump vec3 diffuse;\nout mediump float v_fog_factor;\nlayout(std140) uniform TexCoords {\n  vec4 UVScale;\n  vec4 lightMapUVParam;\n};\nvec4 vert () {\n  vec3 worldPos;\n  worldPos.x = cc_matWorld[3][0] + a_position.x;\n  worldPos.y = cc_matWorld[3][1] + a_position.y;\n  worldPos.z = cc_matWorld[3][2] + a_position.z;\n  vec4 pos = vec4(worldPos, 1.0);\n  pos = cc_matViewProj * pos;\n  uvw = a_texCoord;\n  uv0 = a_position.xz * UVScale.x;\n  uv1 = a_position.xz * UVScale.y;\n  uv2 = a_position.xz * UVScale.z;\n  uv3 = a_position.xz * UVScale.w;\n  #if USE_LIGHTMAP\n    luv = lightMapUVParam.xy + a_texCoord * lightMapUVParam.zw;\n  #endif\n  v_position = worldPos;\n  v_normal = a_normal;\n  v_fog_factor = CC_TRANSFER_FOG(vec4(worldPos, 1.0));\n  #if USE_NORMALMAP\n    v_tangent = vec3(1.0, 0.0, 0.0);\n    v_binormal = vec3(0.0, 0.0, 1.0);\n    v_binormal = cross(v_tangent, a_normal);\n    v_tangent = cross(a_normal, v_binormal);\n  #endif\n    v_shadowPos = cc_matLightViewProj * vec4(worldPos, 1.0);\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if CC_USE_IBL\nuniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec4 fragTextureLod (sampler2D tex, vec2 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\nvec4 fragTextureLod (samplerCube tex, vec3 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\n#endif\n#if CC_RECEIVE_SHADOW\nin highp vec4 v_shadowPos;\n#if CC_RECEIVE_SHADOW\n  uniform sampler2D cc_shadowMap;\n  uniform sampler2D cc_spotLightingMap;\n  float CCGetShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_shadowMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow / 5.0;\n  }\n  float CCGetShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n  float CCGetDirLightShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetDirLightShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    return shadow / 5.0;\n  }\n  float CCGetDirLightShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetDirLightShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n#endif\n#endif\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nfloat GGXMobile (float roughness, float NoH, vec3 H, vec3 N) {\n  vec3 NxH = cross(N, H);\n  float OneMinusNoHSqr = dot(NxH, NxH);\n  float a = roughness * roughness;\n  float n = NoH * a;\n  float p = a / (OneMinusNoHSqr + n * n);\n  return p * p;\n}\nfloat CalcSpecular (float roughness, float NoH, vec3 H, vec3 N) {\n  return (roughness*0.25 + 0.25) * GGXMobile(roughness, NoH, H, N);\n}\nvec3 BRDFApprox (vec3 specular, float roughness, float NoV) {\n  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);\n  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);\n  vec4 r = roughness * c0 + c1;\n  float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n  vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n  AB.y *= clamp(50.0 * specular.g, 0.0, 1.0);\n  return specular * AB.x + AB.y;\n}\nstruct StandardSurface {\n  vec4 albedo;\n  vec3 position;\n  vec3 normal;\n  vec3 emissive;\n  vec4 lightmap;\n  float roughness;\n  float metallic;\n  float occlusion;\n};\n#if CC_FORWARD_ADD\nlayout(std140) uniform CCForwardLight {\n  highp vec4 cc_lightPos[1];\n  vec4 cc_lightColor[1];\n  vec4 cc_lightSizeRangeAngle[1];\n  vec4 cc_lightDir[1];\n};\nfloat SmoothDistAtt (float distSqr, float invSqrAttRadius) {\n  float factor = distSqr * invSqrAttRadius;\n  float smoothFactor = clamp(1.0 - factor * factor, 0.0, 1.0);\n  return smoothFactor * smoothFactor;\n}\nfloat GetDistAtt (float distSqr, float invSqrAttRadius) {\n  float attenuation = 1.0 / max(distSqr, 0.01*0.01);\n  attenuation *= SmoothDistAtt(distSqr , invSqrAttRadius);\n  return attenuation;\n}\nfloat GetAngleAtt (vec3 L, vec3 litDir, float litAngleScale, float litAngleOffset) {\n  float cd = dot(litDir, L);\n  float attenuation = clamp(cd * litAngleScale + litAngleOffset, 0.0, 1.0);\n  return (attenuation * attenuation);\n}\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 finalColor = vec3(0.0);\n    for (int i = 0; i < 1; i++) {\n      vec3 SLU = cc_lightPos[i].xyz - s.position;\n      vec3 SL = normalize(SLU);\n      vec3 SH = normalize(SL + V);\n      float SNL = max(dot(N, SL), 0.001);\n      float SNH = max(dot(N, SH), 0.0);\n      float distSqr = dot(SLU, SLU);\n      float litRadius = cc_lightSizeRangeAngle[i].x;\n      float litRadiusSqr = litRadius * litRadius;\n      float illum = 3.14159265359 * (litRadiusSqr / max(litRadiusSqr , distSqr));\n      float attRadiusSqrInv = 1.0 / max(cc_lightSizeRangeAngle[i].y, 0.01);\n      attRadiusSqrInv *= attRadiusSqrInv;\n      float att = GetDistAtt(distSqr, attRadiusSqrInv);\n      vec3 lspec = specular * CalcSpecular(s.roughness, SNH, SH, N);\n      if (cc_lightPos[i].w > 0.0) {\n        float cosInner = max(dot(-cc_lightDir[i].xyz, SL), 0.01);\n        float cosOuter = cc_lightSizeRangeAngle[i].z;\n        float litAngleScale = 1.0 / max(0.001, cosInner - cosOuter);\n        float litAngleOffset = -cosOuter * litAngleScale;\n        att *= GetAngleAtt(SL, -cc_lightDir[i].xyz, litAngleScale, litAngleOffset);\n      }\n      vec3 lightColor = cc_lightColor[i].rgb;\n    #if CC_RECEIVE_SHADOW\n      if (cc_lightPos[i].w > 0.0) {\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetDirLightShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetDirLightShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetDirLightShadowFactorX5();\n      else shadowAttenuation = CCGetDirLightShadowFactorX1();\n      lightColor *= 1.0 - shadowAttenuation;\n    }\n      }\n    #endif\n      finalColor += SNL * lightColor * cc_lightColor[i].w * illum * att * (diffuseContrib + lspec);\n    }\n    finalColor = finalColor * s.occlusion;\n    return vec4(finalColor, 0.0);\n  }\n#else\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 L = normalize(-cc_mainLitDir.xyz);\n    vec3 H = normalize(L+V);\n    float NH = max(dot(N, H), 0.0);\n    float NL = max(dot(N, L), 0.001);\n    vec3 finalColor = NL * cc_mainLitColor.rgb * cc_mainLitColor.w;\n    #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n      finalColor = s.lightmap.a * s.lightmap.rgb + (1.0 - s.lightmap.a) * finalColor;\n    #endif\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 specularContrib = specular * CalcSpecular(s.roughness, NH, H, N);\n    finalColor *= (diffuseContrib + specularContrib);\n    float fAmb = 0.5 - N.y * 0.5;\n    vec3 ambDiff = mix(cc_ambientSky.rgb, cc_ambientGround.rgb, fAmb) * cc_ambientSky.w;\n    finalColor += (ambDiff.rgb * diffuse);\n    #if CC_USE_IBL\n      vec3 R = normalize(reflect(-V, N));\n      vec4 envmap = fragTextureLod(cc_environment, R, s.roughness * cc_ambientGround.w);\n      #if CC_USE_IBL == 2\n        vec3 env = unpackRGBE(envmap);\n      #else\n        vec3 env = SRGBToLinear(envmap.rgb);\n      #endif\n      finalColor += env * cc_ambientSky.w * specular;\n    #endif\n    finalColor = finalColor * s.occlusion;\n    #if CC_USE_HDR\n      s.emissive *= cc_exposure.w;\n    #endif\n    finalColor += s.emissive;\n    #if CC_RECEIVE_SHADOW\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetShadowFactorX5();\n      else shadowAttenuation = CCGetShadowFactorX1();\n      vec3 shadowColor = cc_shadowColor.rgb * cc_shadowColor.a + finalColor.rgb * (1.0 - cc_shadowColor.a);\n      finalColor.rgb = shadowColor.rgb * shadowAttenuation * NL + finalColor.rgb * (1.0 - shadowAttenuation * NL);\n    }\n    #endif\n    return vec4(finalColor, s.albedo.a);\n  }\n#endif\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nin highp vec3 v_position;\nin mediump vec3 v_normal;\n#if USE_NORMALMAP\n  in mediump vec3 v_tangent;\n  in mediump vec3 v_binormal;\n#endif\nin mediump vec2 uvw;\nin mediump vec2 uv0;\nin mediump vec2 uv1;\nin mediump vec2 uv2;\nin mediump vec2 uv3;\nin mediump vec3 diffuse;\nin mediump vec2 luv;\nin mediump float v_fog_factor;\nlayout(std140) uniform PbrParams {\n  vec4 metallic;\n  vec4 roughness;\n};\nuniform sampler2D weightMap;\nuniform sampler2D detailMap0;\nuniform sampler2D detailMap1;\nuniform sampler2D detailMap2;\nuniform sampler2D detailMap3;\nuniform sampler2D normalMap0;\nuniform sampler2D normalMap1;\nuniform sampler2D normalMap2;\nuniform sampler2D normalMap3;\nuniform sampler2D lightMap;\nvoid surf (out StandardSurface s) {\n  #if LAYERS > 1\n    vec4 w = texture(weightMap, uvw);\n  #endif\n  vec4 baseColor = vec4(0, 0, 0, 0);\n  #if LAYERS == 1\n    baseColor = texture(detailMap0, uv0);\n  #elif LAYERS == 2\n    baseColor += texture(detailMap0, uv0) * w.r;\n    baseColor += texture(detailMap1, uv1) * w.g;\n  #elif LAYERS == 3\n    baseColor += texture(detailMap0, uv0) * w.r;\n    baseColor += texture(detailMap1, uv1) * w.g;\n    baseColor += texture(detailMap2, uv2) * w.b;\n  #elif LAYERS == 4\n    baseColor += texture(detailMap0, uv0) * w.r;\n    baseColor += texture(detailMap1, uv1) * w.g;\n    baseColor += texture(detailMap2, uv2) * w.b;\n    baseColor += texture(detailMap3, uv3) * w.a;\n  #else\n    baseColor = texture(detailMap0, uv0);\n  #endif\n  s.position = v_position;\n  #if USE_NORMALMAP\n    vec4 baseNormal = vec4(0, 0, 0, 0);\n    #if LAYERS == 1\n      baseNormal = texture(normalMap0, uv0);\n    #elif LAYERS == 2\n      baseNormal += texture(normalMap0, uv0) * w.r;\n      baseNormal += texture(normalMap1, uv1) * w.g;\n    #elif LAYERS == 3\n      baseNormal += texture(normalMap0, uv0) * w.r;\n      baseNormal += texture(normalMap1, uv1) * w.g;\n      baseNormal += texture(normalMap2, uv2) * w.b;\n    #elif LAYERS == 4\n      baseNormal += texture(normalMap0, uv0) * w.r;\n      baseNormal += texture(normalMap1, uv1) * w.g;\n      baseNormal += texture(normalMap2, uv2) * w.b;\n      baseNormal += texture(normalMap3, uv3) * w.a;\n    #else\n      baseNormal = texture(normalMap0, uv0);\n    #endif\n    vec3 nmmp = baseNormal.xyz - vec3(0.5);\n    s.normal =\n      nmmp.x * normalize(v_tangent) +\n      nmmp.y * normalize(v_binormal) +\n      nmmp.z * normalize(v_normal);\n  #else\n    s.normal = v_normal;\n  #endif\n  s.albedo = vec4(SRGBToLinear(baseColor.rgb), 1.0);\n  s.occlusion = 1.0;\n  #if USE_PBR\n    s.roughness = 0.0;\n    #if LAYERS == 1\n      s.roughness = roughness.x;\n    #elif LAYERS == 2\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n    #elif LAYERS == 3\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n      s.roughness += roughness.z * w.b;\n    #elif LAYERS == 4\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n      s.roughness += roughness.z * w.b;\n      s.roughness += roughness.w * w.a;\n    #else\n      s.roughness = 1.0;\n    #endif\n    s.metallic = 0.0;\n    #if LAYERS == 1\n      s.metallic = metallic.x;\n    #elif LAYERS == 2\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n    #elif LAYERS == 3\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n      s.metallic += metallic.z * w.b;\n    #elif LAYERS == 4\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n      s.metallic += metallic.z * w.b;\n      s.metallic += metallic.w * w.a;\n    #else\n      s.metallic = 0.0;\n    #endif\n  #else\n    s.roughness = 1.0;\n    s.metallic = 0.0;\n  #endif\n  s.emissive = vec3(0.0, 0.0, 0.0);\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    s.lightmap = texture(lightMap, luv);\n  #else\n    s.lightmap = vec4(0.0, 0.0, 0.0, 0.0);\n  #endif\n}\nvec4 frag () {\n  StandardSurface s; surf(s);\n  vec4 color = CCStandardShading(s);\n  color = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, color.rgb, v_fog_factor), color.a);\n  return CCFragOutput(color);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }, {
              "vert": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nin vec3 a_position;\nin vec3 a_normal;\nin vec2 a_texCoord;\nout vec2 v_clip_depth;\nvec4 vert () {\n  vec4 worldPos;\n  worldPos.x = cc_matWorld[3][0] + a_position.x;\n  worldPos.y = cc_matWorld[3][1] + a_position.y;\n  worldPos.z = cc_matWorld[3][2] + a_position.z;\n  worldPos.w = 1.0;\n  vec4 clipPos = cc_matLightViewProj * worldPos;\n  v_clip_depth = clipPos.zw;\n  return clipPos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 packDepthToRGBA (float depth) {\n  vec4 ret = vec4(1.0, 255.0, 65025.0, 160581375.0) * depth;\n  ret = fract(ret);\n  ret -= ret.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n  return ret;\n}\nin vec2 v_clip_depth;\nvec4 frag () {\n  return packDepthToRGBA(v_clip_depth.x / v_clip_depth.y * 0.5 + 0.5);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nin vec3 a_position;\nin vec3 a_normal;\nin vec2 a_texCoord;\nin vec4 a_tangent;\n#if CC_USE_MORPH\n    in float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nlayout(std140) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  in vec4 a_joints;\nin vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(std140) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(std140) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(std140) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_INSTANCING\n  in vec4 a_matWorld0;\n  in vec4 a_matWorld1;\n  in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  in float a_dyn_batch_id;\n  layout(std140) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\n#if USE_VERTEX_COLOR\n  in lowp vec4 a_color;\n  out lowp vec4 v_color;\n#endif\n#if USE_TEXTURE\n  out vec2 v_uv;\n  layout(std140) uniform TexCoords {\n    vec4 tilingOffset;\n  };\n#endif\nout float factor_fog;\nvec4 vert () {\n  vec4 position;\n  position = vec4(a_position, 1.0);\n  #if CC_USE_MORPH\n    applyMorph(position);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(position);\n  #endif\n  mat4 matWorld;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n  #else\n    matWorld = cc_matWorld;\n  #endif\n  #if USE_TEXTURE\n    v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  #if USE_VERTEX_COLOR\n    v_color = a_color;\n  #endif\n  factor_fog = CC_TRANSFER_FOG(matWorld * position);\n  return cc_matProj * (cc_matView * matWorld) * position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\n#if USE_ALPHA_TEST\n#endif\n#if USE_TEXTURE\n  in vec2 v_uv;\n  uniform sampler2D mainTexture;\n#endif\nlayout(std140) uniform Constant {\n  vec4 mainColor;\n  vec4 colorScaleAndCutoff;\n};\n#if USE_VERTEX_COLOR\n  in lowp vec4 v_color;\n#endif\nin float factor_fog;\nvec4 frag () {\n  vec4 o = mainColor;\n  o.rgb *= colorScaleAndCutoff.xyz;\n  #if USE_VERTEX_COLOR\n    o *= v_color;\n  #endif\n  #if USE_TEXTURE\n    o *= texture(mainTexture, v_uv);\n  #endif\n  #if USE_ALPHA_TEST\n    if (o.ALPHA_TEST_CHANNEL < colorScaleAndCutoff.w) discard;\n  #endif\n  o = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, o.rgb, factor_fog), o.a);\n  return CCFragOutput(o);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nin vec3 a_position;\nin vec3 a_normal;\nin vec2 a_texCoord;\nin vec4 a_tangent;\n#if CC_USE_MORPH\n    in float a_vertexId;\n    int getVertexId() {\n        return int(a_vertexId);\n    }\nlayout(std140) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  in vec4 a_joints;\nin vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(std140) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(std140) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(std140) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_INSTANCING\n  in vec4 a_matWorld0;\n  in vec4 a_matWorld1;\n  in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  in float a_dyn_batch_id;\n  layout(std140) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(std140) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nvec4 vert () {\n  vec4 position;\n  position = vec4(a_position, 1.0);\n  #if CC_USE_MORPH\n    applyMorph(position);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(position);\n  #endif\n  mat4 matWorld;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n  #else\n    matWorld = cc_matWorld;\n  #endif\n  position = cc_matProj * (cc_matView * cc_matLightPlaneProj * matWorld) * position;\n  position.z -= 0.0001;\n  return position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nlayout(std140) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nvec4 frag () {\n  return CCFragOutput(cc_shadowColor);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nin vec3 a_position;\nin vec3 a_normal;\nin vec2 a_texCoord;\nin vec4 a_tangent;\nout mediump vec4 viewDir;\nvec4 vert () {\n  viewDir = vec4(a_position, 1.0);\n  mat4 matViewRotOnly = mat4(mat3(cc_matView));\n  mat4 matProj = cc_matProj;\n  if (matProj[3].w > 0.0) {\n    vec2 scale = vec2(48.0, 24.0);\n    matProj[0].xy *= scale;\n    matProj[1].xy *= scale;\n    matProj[2].zw = vec2(-1.0);\n    matProj[3].zw = vec2(0.0);\n  }\n  vec4 pos = matProj * matViewRotOnly * viewDir;\n  pos.z = 0.99999 * pos.w;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nuniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nin mediump vec4 viewDir;\nvec4 frag () {\n  #if USE_RGBE_CUBEMAP\n    vec3 c = unpackRGBE(texture(cc_environment, viewDir.xyz));\n  #else\n    vec3 c = SRGBToLinear(texture(cc_environment, viewDir.xyz).rgb);\n  #endif\n  return CCFragOutput(vec4(c * cc_ambientSky.w, 1.0));\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nin vec3 a_position;\nin vec4 a_color;\nout vec2 v_uv;\nlayout(std140) uniform Constants {\n  vec4 offset;\n};\nlayout(std140) uniform PerFrameInfo {\n  vec4 digits[8 * 10 / 4];\n};\nfloat getComponent(vec4 v, float i) {\n  if (i < 1.0) { return v.x; }\n  else if (i < 2.0) { return v.y; }\n  else if (i < 3.0) { return v.z; }\n  else { return v.w; }\n}\nvec4 vert () {\n  vec4 position = cc_matViewProj * vec4(a_position, 1.0);\n  position.xy += offset.xy;\n  v_uv = a_color.xy;\n  if (a_color.z >= 0.0) {\n    float n = getComponent(digits[int(a_color.z)], a_color.w);\n    v_uv += vec2(offset.z * n, 0.0);\n  }\n  return position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nlayout(std140) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(std140) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nin vec2 v_uv;\nuniform sampler2D mainTexture;\nvec4 frag () {\n  return CCFragOutput(texture(mainTexture, v_uv));\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nin vec2 a_position;\nin vec2 a_texCoord;\nout vec2 v_uv;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 0, 1);\n  v_uv = a_texCoord;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nin vec2 v_uv;\nuniform sampler2D mainTexture;\nlayout(std140) uniform splashFrag {\n  float u_precent;\n};\nvec4 frag () {\n  vec4 color = texture(mainTexture, v_uv);\n  float precent = clamp(u_precent, 0.0, 1.0);\n  color.xyz *= precent;\n  return color;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }]];

            var glsl4 = [[{
              "vert": "\nprecision mediump float;\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nlayout(location = 0) out mediump vec2 uv;\nlayout(location = 1) out mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n  , mat4 viewInv\n) {\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n}\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec2 a_texCoord;\nlayout(location = 2) in vec4 a_color;\nlayout(set = 1, binding = 1) uniform builtin {\n  vec4 cc_size_rotation;\n};\nvec4 vs_main() {\n  vec4 pos = vec4(a_position, 1);\n  pos = cc_matWorld * pos;\n  vec2 vertOffset = a_texCoord.xy - 0.5;\n  computeVertPos(pos, vertOffset, quaternionFromEuler(vec3(0., 0., cc_size_rotation.z)), vec3(cc_size_rotation.xy, 0.), cc_matViewInv);\n  pos = cc_matViewProj * pos;\n  uv = a_texCoord.xy;\n  color = a_color;\n  return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
              "frag": "\nprecision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nlayout(location = 0) in vec2 uv;\nlayout(location = 1) in vec4 color;\nlayout(set = 1, binding = 3) uniform sampler2D mainTexture;\nlayout(set = 1, binding = 2) uniform FragConstants {\n  vec4 tintColor;\n};\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n  return CCFragOutput(col);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(location = 0) in vec3 a_position;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 frag () {\n  vec4 o = vec4(1.0);\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec4 a_color;\nlayout(location = 0) out vec4 v_color;\nlayout(location = 2) in float a_dist;\nlayout(location = 1) out float v_dist;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  pos = cc_matViewProj * cc_matWorld * pos;\n  v_color = a_color;\n  v_dist = a_dist;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(location = 0) in vec4 v_color;\nlayout(location = 1) in float v_dist;\nvec4 frag () {\n  vec4 o = v_color;\n    float aa = fwidth(v_dist);\n  float alpha = 1. - smoothstep(-aa, 0., abs(v_dist) - 1.0);\n  o.rgb *= o.a;\n  o *= alpha;\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nmat4 matrixFromRT (vec4 q, vec3 p){\n  float x2 = q.x + q.x;\n  float y2 = q.y + q.y;\n  float z2 = q.z + q.z;\n  float xx = q.x * x2;\n  float xy = q.x * y2;\n  float xz = q.x * z2;\n  float yy = q.y * y2;\n  float yz = q.y * z2;\n  float zz = q.z * z2;\n  float wx = q.w * x2;\n  float wy = q.w * y2;\n  float wz = q.w * z2;\n  return mat4(\n    1. - (yy + zz), xy + wz, xz - wy, 0,\n    xy - wz, 1. - (xx + zz), yz + wx, 0,\n    xz + wy, yz - wx, 1. - (xx + yy), 0,\n    p.x, p.y, p.z, 1\n  );\n}\nmat4 matFromRTS (vec4 q, vec3 t, vec3 s){\n  float x = q.x, y = q.y, z = q.z, w = q.w;\n  float x2 = x + x;\n  float y2 = y + y;\n  float z2 = z + z;\n  float xx = x * x2;\n  float xy = x * y2;\n  float xz = x * z2;\n  float yy = y * y2;\n  float yz = y * z2;\n  float zz = z * z2;\n  float wx = w * x2;\n  float wy = w * y2;\n  float wz = w * z2;\n  float sx = s.x;\n  float sy = s.y;\n  float sz = s.z;\n  return mat4((1. - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,\n    (xy - wz) * sy, (1. - (xx + zz)) * sy, (yz + wx) * sy, 0,\n    (xz + wy) * sz, (yz - wx) * sz, (1. - (xx + yy)) * sz, 0,\n    t.x, t.y, t.z, 1);\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nlayout(location = 0) out mediump vec2 uv;\nlayout(location = 1) out mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n#if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n  , mat4 viewInv\n#endif\n#if CC_RENDER_MODE == 1\n  , vec3 eye\n  , vec4 velocity\n  , float velocityScale\n  , float lengthScale\n  , float xIndex\n#endif\n) {\n#if CC_RENDER_MODE == 0\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n#elif CC_RENDER_MODE == 1\n  vec3 camRight = normalize(cross(pos.xyz - eye, velocity.xyz)) * s.x;\n  vec3 camUp = velocity.xyz * velocityScale + normalize(velocity.xyz) * lengthScale * s.y;\n  pos.xyz += (camRight * abs(vertOffset.x) * sign(vertOffset.y)) - camUp * xIndex;\n#elif CC_RENDER_MODE == 2\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = vec3(1, 0, 0);\n  vec3 camY = vec3(0, 0, -1);\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, cross(camX, camY), q);\n#elif CC_RENDER_MODE == 3\n  vec2 viewSpaceVert = vec2(vertOffset.x * s.x, vertOffset.y * s.y);\n  rotateCorner(viewSpaceVert, q.z);\n  vec3 camX = normalize(vec3(cc_matView[0][0], cc_matView[1][0], cc_matView[2][0]));\n  vec3 camY = vec3(0, 1, 0);\n  vec3 offset = camX * viewSpaceVert.x + camY * viewSpaceVert.y;\n  pos.xyz += offset;\n#else\n  pos.x += vertOffset.x;\n  pos.y += vertOffset.y;\n#endif\n}\nvec2 computeUV (float frameIndex, vec2 vertIndex, vec2 frameTile){\n  vec2 aniUV = vec2(0, floor(frameIndex * frameTile.y));\n  aniUV.x = floor(frameIndex * frameTile.x * frameTile.y - aniUV.y * frameTile.x);\n#if CC_RENDER_MODE != 4\n  vertIndex.y = 1. - vertIndex.y;\n#endif\n  return (aniUV.xy + vertIndex) / vec2(frameTile.x, frameTile.y);\n}\nlayout(set = 1, binding = 1) uniform SampleConstants {\n  vec4 u_sampleInfo;\n};\nlayout(set = 1, binding = 2) uniform TickConstants {\n  vec4 u_worldRot;\n  vec4 u_timeDelta;\n};\nlayout(location = 0) in vec4 a_position_starttime;\nlayout(location = 1) in vec4 a_size_uv;\nlayout(location = 2) in vec4 a_rotation_uv;\nlayout(location = 3) in vec4 a_color;\nlayout(location = 4) in vec4 a_dir_life;\nlayout(location = 5) in float a_rndSeed;\n#if CC_RENDER_MODE == 4\n  layout(location = 6) in vec3 a_texCoord;\n  layout(location = 7) in vec3 a_texCoord3;\n  layout(location = 8) in vec3 a_normal;\n  layout(location = 9) in vec4 a_color1;\n#endif\nvec3 unpackCurveData (sampler2D tex, vec2 coord) {\n    vec4 a = texture(tex, coord);\n    vec4 b = texture(tex, coord + u_sampleInfo.y);\n    float c = fract(coord.x * u_sampleInfo.x);\n    return mix(a.xyz, b.xyz, c);\n}\nvec3 unpackCurveData (sampler2D tex, vec2 coord, out float w) {\n    vec4 a = texture(tex, coord);\n    vec4 b = texture(tex, coord + u_sampleInfo.y);\n    float c = fract(coord.x * u_sampleInfo.x);\n    w = mix(a.w, b.w, c);\n    return mix(a.xyz, b.xyz, c);\n}\nfloat pseudoRandom (float seed) {\n  seed = mod(seed, 233280.);\n  float q = (seed * 9301. + 49297.) / 233280.;\n  return fract(q);\n}\n#if COLOR_OVER_TIME_MODULE_ENABLE\n  layout(set = 1, binding = 10) uniform sampler2D color_over_time_tex0;\n  layout(set = 1, binding = 3) uniform ColorConstant {\n    int u_color_mode;\n  };\n#endif\n#if ROTATION_OVER_TIME_MODULE_ENABLE\n  layout(set = 1, binding = 11) uniform sampler2D rotation_over_time_tex0;\n  layout(set = 1, binding = 4) uniform RotationConstant {\n    int u_rotation_mode;\n  };\n#endif\n#if SIZE_OVER_TIME_MODULE_ENABLE\n  layout(set = 1, binding = 12) uniform sampler2D size_over_time_tex0;\n  layout(set = 1, binding = 5) uniform SizeConstant {\n    int u_size_mode;\n  };\n#endif\n#if FORCE_OVER_TIME_MODULE_ENABLE\n  layout(set = 1, binding = 13) uniform sampler2D force_over_time_tex0;\n  layout(set = 1, binding = 6) uniform ForceConstant {\n    int u_force_mode;\n    int u_force_space;\n  };\n#endif\n#if VELOCITY_OVER_TIME_MODULE_ENABLE\n  layout(set = 1, binding = 14) uniform sampler2D velocity_over_time_tex0;\n  layout(set = 1, binding = 7) uniform VelocityConstant {\n    int u_velocity_mode;\n    int u_velocity_space;\n  };\n#endif\n#if TEXTURE_ANIMATION_MODULE_ENABLE\n  layout(set = 1, binding = 15) uniform sampler2D texture_animation_tex0;\n  layout(set = 1, binding = 8) uniform AnimationConstant {\n    vec4 u_anim_info;\n  };\n#endif\nfloat repeat (float t, float length) {\n  return t - floor(t / length) * length;\n}\nvec4 rotateQuat (vec4 p, vec4 q) {\n  vec3 iv = cross(q.xyz, p.xyz) + q.w * p.xyz;\n  vec3 res = p.xyz + 2.0 * cross(q.xyz, iv);\n  return vec4(res.xyz, p.w);\n}\nvec4 gpvs_main () {\n  float activeTime = u_timeDelta.x - a_position_starttime.w;\n  float normalizedTime = clamp(activeTime / a_dir_life.w, 0.0, 1.0);\n  vec2 timeCoord0 = vec2(normalizedTime, 0.);\n  vec2 timeCoord1 = vec2(normalizedTime, 1.);\n  #if CC_RENDER_MODE == 4\n    vec2 vertIdx = vec2(a_texCoord.x, a_texCoord.y);\n  #else\n    vec2 vertIdx = vec2(a_size_uv.w, a_rotation_uv.w);\n  #endif\n  vec4 velocity = vec4(a_dir_life.xyz, 0.);\n  vec4 pos = vec4(a_position_starttime.xyz, 1.);\n  vec3 size = a_size_uv.xyz;\n  #if SIZE_OVER_TIME_MODULE_ENABLE\n    if (u_size_mode == 1) {\n      size *= unpackCurveData(size_over_time_tex0, timeCoord0);\n    } else {\n      vec3 size_0 = unpackCurveData(size_over_time_tex0, timeCoord0);\n      vec3 size_1 = unpackCurveData(size_over_time_tex0, timeCoord1);\n      float factor_s = pseudoRandom(a_rndSeed + 39825.);\n      size *= mix(size_0, size_1, factor_s);\n    }\n  #endif\n  vec3 compScale = scale.xyz * size;\n  #if FORCE_OVER_TIME_MODULE_ENABLE\n    vec3 forceAnim = vec3(0.);\n    if (u_force_mode == 1) {\n      forceAnim = unpackCurveData(force_over_time_tex0, timeCoord0);\n    } else {\n      vec3 force_0 = unpackCurveData(force_over_time_tex0, timeCoord0);\n      vec3 force_1 = unpackCurveData(force_over_time_tex0, timeCoord1);\n      float factor_f =  pseudoRandom(a_rndSeed + 212165.);\n      forceAnim = mix(force_0, force_1, factor_f);\n    }\n    vec4 forceTrack = vec4(forceAnim, 0.);\n    if (u_force_space == 0) {\n      forceTrack = rotateQuat(forceTrack, u_worldRot);\n    }\n    velocity.xyz += forceTrack.xyz;\n  #endif\n  #if VELOCITY_OVER_TIME_MODULE_ENABLE\n    float speedModifier0 = 1.;\n    float speedModifier1 = 1.;\n    vec3 velocityAnim = vec3(0.);\n    if (u_velocity_mode == 1) {\n      velocityAnim = unpackCurveData(velocity_over_time_tex0, timeCoord0, speedModifier0);\n    } else {\n      vec3 vectory_0 = unpackCurveData(velocity_over_time_tex0, timeCoord0, speedModifier0);\n      vec3 vectory_1 = unpackCurveData(velocity_over_time_tex0, timeCoord1, speedModifier1);\n      float factor_v = pseudoRandom(a_rndSeed + 197866.);\n      velocityAnim = mix(vectory_0, vectory_1, factor_v);\n      speedModifier0 = mix(speedModifier0, speedModifier1, factor_v);\n    }\n    vec4 velocityTrack = vec4(velocityAnim, 0.);\n    if (u_velocity_space == 0) {\n      velocityTrack = rotateQuat(velocityTrack, u_worldRot);\n    }\n    velocity.xyz += velocityTrack.xyz;\n    velocity.xyz *= speedModifier0;\n  #endif\n  pos.xyz += velocity.xyz * normalizedTime * a_dir_life.w;\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    #if CC_RENDER_MODE == 1\n      velocity = rotateQuat(velocity, u_worldRot);\n    #endif\n  #endif\n  vec3 rotation = a_rotation_uv.xyz;\n  #if ROTATION_OVER_TIME_MODULE_ENABLE\n    if (u_rotation_mode == 1) {\n      rotation += unpackCurveData(rotation_over_time_tex0, timeCoord0) * normalizedTime * a_dir_life.w;\n    } else {\n      vec3 rotation_0 = unpackCurveData(rotation_over_time_tex0, timeCoord0);\n      vec3 rotation_1 = unpackCurveData(rotation_over_time_tex0, timeCoord1);\n      float factor_r = pseudoRandom(a_rndSeed + 125292.);\n      rotation += mix(rotation_0, rotation_1, factor_r) * normalizedTime * a_dir_life.w;\n    }\n  #endif\n  #if COLOR_OVER_TIME_MODULE_ENABLE\n    if (u_color_mode == 1) {\n      color = a_color * texture(color_over_time_tex0, timeCoord0);\n    } else {\n      vec4 color_0 = texture(color_over_time_tex0, timeCoord0);\n      vec4 color_1 = texture(color_over_time_tex0, timeCoord1);\n      float factor_c = pseudoRandom(a_rndSeed + 91041.);\n      color = a_color * mix(color_0, color_1, factor_c);\n    }\n  #else\n    color = a_color;\n  #endif\n  #if CC_RENDER_MODE != 4\n    vec2 cornerOffset = vec2((vertIdx - 0.5));\n    #if CC_RENDER_MODE == 0\n      vec3 rotEuler = rotation.xyz;\n    #elif CC_RENDER_MODE == 1\n      vec3 rotEuler = vec3(0.);\n    #else\n      vec3 rotEuler = vec3(0., 0., rotation.z);\n    #endif\n    computeVertPos(pos, cornerOffset, quaternionFromEuler(rotEuler), compScale\n      #if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n        , cc_matViewInv\n      #endif\n      #if CC_RENDER_MODE == 1\n        , cc_cameraPos.xyz\n        , velocity\n        , frameTile_velLenScale.z\n        , frameTile_velLenScale.w\n        , a_size_uv.w\n      #endif\n    );\n  #else\n    mat4 xformNoScale = matrixFromRT(quaternionFromEuler(rotation), pos.xyz);\n    mat4 xform = matFromRTS(quaternionFromEuler(rotation), pos.xyz, compScale);\n    pos = xform * vec4(a_texCoord3, 1);\n    vec4 normal = xformNoScale * vec4(a_normal, 0);\n    color *= a_color1;\n  #endif\n  pos = cc_matViewProj * pos;\n  float frameIndex = 0.;\n  #if TEXTURE_ANIMATION_MODULE_ENABLE\n    float startFrame = 0.;\n    vec3 frameInfo = vec3(0.);\n    if (int(u_anim_info.x) == 1) {\n      frameInfo = unpackCurveData(texture_animation_tex0, timeCoord0);\n    } else {\n      vec3 frameInfo0 = unpackCurveData(texture_animation_tex0, timeCoord0);\n      vec3 frameInfo1 = unpackCurveData(texture_animation_tex0, timeCoord1);\n      float factor_t = pseudoRandom(a_rndSeed + 90794.);\n      frameInfo = mix(frameInfo0, frameInfo1, factor_t);\n    }\n    startFrame = frameInfo.x / u_anim_info.y;\n    frameIndex = repeat(u_anim_info.z * (frameInfo.y + startFrame), 1.);\n  #endif\n  uv = computeUV(frameIndex, vertIdx, frameTile_velLenScale.xy) * mainTiling_Offset.xy + mainTiling_Offset.zw;\n  return pos;\n}\nvoid main() { gl_Position = gpvs_main(); }",
              "frag": "\nprecision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nlayout(location = 0) in vec2 uv;\nlayout(location = 1) in vec4 color;\nlayout(set = 1, binding = 16) uniform sampler2D mainTexture;\nlayout(set = 1, binding = 9) uniform FragConstants {\n  vec4 tintColor;\n};\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n  return CCFragOutput(col);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision mediump float;\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nlayout(location = 0) out mediump vec2 uv;\nlayout(location = 1) out mediump vec4 color;\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec4 a_texCoord;\nlayout(location = 2) in vec3 a_texCoord1;\nlayout(location = 3) in vec3 a_texCoord2;\nlayout(location = 4) in vec4 a_color;\n#if CC_DRAW_WIRE_FRAME\n  layout(location = 2) out vec3 vBarycentric;\n#endif\nvec4 vs_main() {\n  highp vec4 pos = vec4(a_position, 1);\n  vec4 velocity = vec4(a_texCoord1.xyz, 0);\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    velocity = cc_matWorld * velocity;\n  #endif\n  float vertOffset = (a_texCoord.x - 0.5) * a_texCoord.y;\n  vec3 camUp = normalize(cross(pos.xyz - cc_cameraPos.xyz, velocity.xyz));\n  pos.xyz += camUp * vertOffset;\n  pos = cc_matViewProj * pos;\n  uv = a_texCoord.zw * mainTiling_Offset.xy + mainTiling_Offset.zw;;\n  color = a_color;\n  #if CC_DRAW_WIRE_FRAME\n    vBarycentric = a_texCoord2;\n  #endif\n  return pos;\n}\nvoid main() { gl_Position = vs_main(); }",
              "frag": "\n  precision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\n  layout(location = 0) in vec2 uv;\n  layout(location = 1) in vec4 color;\n  #if CC_DRAW_WIRE_FRAME\n    layout(location = 2) in vec3 vBarycentric;\n  #endif\n  layout(set = 1, binding = 2) uniform sampler2D mainTexture;\n  layout(set = 1, binding = 1) uniform FragConstants {\n    vec4 tintColor;\n  };\n  vec4 add () {\n    vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n#if CC_DRAW_WIRE_FRAME\n    if (any(lessThan(vBarycentric, vec3(0.02)))) {\n        col = vec4(0., 1., 1., 1.);\n    }\n#endif\n    return CCFragOutput(col);\n  }\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nvec4 quaternionFromAxis (vec3 xAxis,vec3 yAxis,vec3 zAxis){\n  mat3 m = mat3(xAxis,yAxis,zAxis);\n  float trace = m[0][0] + m[1][1] + m[2][2];\n  vec4 quat;\n  if (trace > 0.) {\n    float s = 0.5 / sqrt(trace + 1.0);\n    quat.w = 0.25 / s;\n    quat.x = (m[2][1] - m[1][2]) * s;\n    quat.y = (m[0][2] - m[2][0]) * s;\n    quat.z = (m[1][0] - m[0][1]) * s;\n  } else if ((m[0][0] > m[1][1]) && (m[0][0] > m[2][2])) {\n    float s = 2.0 * sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]);\n    quat.w = (m[2][1] - m[1][2]) / s;\n    quat.x = 0.25 * s;\n    quat.y = (m[0][1] + m[1][0]) / s;\n    quat.z = (m[0][2] + m[2][0]) / s;\n  } else if (m[1][1] > m[2][2]) {\n    float s = 2.0 * sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]);\n    quat.w = (m[0][2] - m[2][0]) / s;\n    quat.x = (m[0][1] + m[1][0]) / s;\n    quat.y = 0.25 * s;\n    quat.z = (m[1][2] + m[2][1]) / s;\n  } else {\n    float s = 2.0 * sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]);\n    quat.w = (m[1][0] - m[0][1]) / s;\n    quat.x = (m[0][2] + m[2][0]) / s;\n    quat.y = (m[1][2] + m[2][1]) / s;\n    quat.z = 0.25 * s;\n  }\n  float len = quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w;\n  if (len > 0.) {\n    len = 1. / sqrt(len);\n    quat.x = quat.x * len;\n    quat.y = quat.y * len;\n    quat.z = quat.z * len;\n    quat.w = quat.w * len;\n  }\n  return quat;\n}\nvec4 quaternionFromEuler (vec3 angle){\n  float x = angle.x / 2.;\n  float y = angle.y / 2.;\n  float z = angle.z / 2.;\n  float sx = sin(x);\n  float cx = cos(x);\n  float sy = sin(y);\n  float cy = cos(y);\n  float sz = sin(z);\n  float cz = cos(z);\n  vec4 quat = vec4(0);\n  quat.x = sx * cy * cz + cx * sy * sz;\n  quat.y = cx * sy * cz + sx * cy * sz;\n  quat.z = cx * cy * sz - sx * sy * cz;\n  quat.w = cx * cy * cz - sx * sy * sz;\n  return quat;\n}\nmat4 matrixFromRT (vec4 q, vec3 p){\n  float x2 = q.x + q.x;\n  float y2 = q.y + q.y;\n  float z2 = q.z + q.z;\n  float xx = q.x * x2;\n  float xy = q.x * y2;\n  float xz = q.x * z2;\n  float yy = q.y * y2;\n  float yz = q.y * z2;\n  float zz = q.z * z2;\n  float wx = q.w * x2;\n  float wy = q.w * y2;\n  float wz = q.w * z2;\n  return mat4(\n    1. - (yy + zz), xy + wz, xz - wy, 0,\n    xy - wz, 1. - (xx + zz), yz + wx, 0,\n    xz + wy, yz - wx, 1. - (xx + yy), 0,\n    p.x, p.y, p.z, 1\n  );\n}\nmat4 matFromRTS (vec4 q, vec3 t, vec3 s){\n  float x = q.x, y = q.y, z = q.z, w = q.w;\n  float x2 = x + x;\n  float y2 = y + y;\n  float z2 = z + z;\n  float xx = x * x2;\n  float xy = x * y2;\n  float xz = x * z2;\n  float yy = y * y2;\n  float yz = y * z2;\n  float zz = z * z2;\n  float wx = w * x2;\n  float wy = w * y2;\n  float wz = w * z2;\n  float sx = s.x;\n  float sy = s.y;\n  float sz = s.z;\n  return mat4((1. - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx, 0,\n    (xy - wz) * sy, (1. - (xx + zz)) * sy, (yz + wx) * sy, 0,\n    (xz + wy) * sz, (yz - wx) * sz, (1. - (xx + yy)) * sz, 0,\n    t.x, t.y, t.z, 1);\n}\nvec4 quatMultiply (vec4 a, vec4 b){\n  vec4 quat;\n  quat.x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;\n  quat.y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;\n  quat.z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;\n  quat.w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;\n  return quat;\n}\nvoid rotateVecFromQuat (inout vec3 v, vec4 q){\n  float ix = q.w * v.x + q.y * v.z - q.z * v.y;\n  float iy = q.w * v.y + q.z * v.x - q.x * v.z;\n  float iz = q.w * v.z + q.x * v.y - q.y * v.x;\n  float iw = -q.x * v.x - q.y * v.y - q.z * v.z;\n  v.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;\n  v.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;\n  v.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;\n}\nvec3 rotateInLocalSpace (vec3 pos, vec3 xAxis, vec3 yAxis, vec3 zAxis, vec4 q){\n  vec4 viewQuat = quaternionFromAxis(xAxis, yAxis, zAxis);\n  vec4 rotQuat = quatMultiply(viewQuat, q);\n  rotateVecFromQuat(pos, rotQuat);\n  return pos;\n}\nvoid rotateCorner (inout vec2 corner, float angle){\n  float xOS = cos(angle) * corner.x - sin(angle) * corner.y;\n  float yOS = sin(angle) * corner.x + cos(angle) * corner.y;\n  corner.x = xOS;\n  corner.y = yOS;\n}\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 mainTiling_Offset;\n  vec4 frameTile_velLenScale;\n  vec4 scale;\n};\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nlayout(location = 0) out mediump vec2 uv;\nlayout(location = 1) out mediump vec4 color;\nvoid computeVertPos (inout vec4 pos, vec2 vertOffset, vec4 q, vec3 s\n#if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n  , mat4 viewInv\n#endif\n#if CC_RENDER_MODE == 1\n  , vec3 eye\n  , vec4 velocity\n  , float velocityScale\n  , float lengthScale\n  , float xIndex\n#endif\n) {\n#if CC_RENDER_MODE == 0\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = normalize(vec3(viewInv[0][0], viewInv[1][0], viewInv[2][0]));\n  vec3 camY = normalize(vec3(viewInv[0][1], viewInv[1][1], viewInv[2][1]));\n  vec3 camZ = normalize(vec3(viewInv[0][2], viewInv[1][2], viewInv[2][2]));\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, camZ, q);\n#elif CC_RENDER_MODE == 1\n  vec3 camRight = normalize(cross(pos.xyz - eye, velocity.xyz)) * s.x;\n  vec3 camUp = velocity.xyz * velocityScale + normalize(velocity.xyz) * lengthScale * s.y;\n  pos.xyz += (camRight * abs(vertOffset.x) * sign(vertOffset.y)) - camUp * xIndex;\n#elif CC_RENDER_MODE == 2\n  vec3 viewSpaceVert = vec3(vertOffset.x * s.x, vertOffset.y * s.y, 0.);\n  vec3 camX = vec3(1, 0, 0);\n  vec3 camY = vec3(0, 0, -1);\n  pos.xyz += rotateInLocalSpace(viewSpaceVert, camX, camY, cross(camX, camY), q);\n#elif CC_RENDER_MODE == 3\n  vec2 viewSpaceVert = vec2(vertOffset.x * s.x, vertOffset.y * s.y);\n  rotateCorner(viewSpaceVert, q.z);\n  vec3 camX = normalize(vec3(cc_matView[0][0], cc_matView[1][0], cc_matView[2][0]));\n  vec3 camY = vec3(0, 1, 0);\n  vec3 offset = camX * viewSpaceVert.x + camY * viewSpaceVert.y;\n  pos.xyz += offset;\n#else\n  pos.x += vertOffset.x;\n  pos.y += vertOffset.y;\n#endif\n}\nvec2 computeUV (float frameIndex, vec2 vertIndex, vec2 frameTile){\n  vec2 aniUV = vec2(0, floor(frameIndex * frameTile.y));\n  aniUV.x = floor(frameIndex * frameTile.x * frameTile.y - aniUV.y * frameTile.x);\n#if CC_RENDER_MODE != 4\n  vertIndex.y = 1. - vertIndex.y;\n#endif\n  return (aniUV.xy + vertIndex) / vec2(frameTile.x, frameTile.y);\n}\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_texCoord;\nlayout(location = 2) in vec3 a_texCoord1;\nlayout(location = 3) in vec3 a_texCoord2;\nlayout(location = 4) in vec4 a_color;\n#if CC_RENDER_MODE == 1\n  layout(location = 8) in vec3 a_color1;\n#endif\n#if CC_RENDER_MODE == 4\n  layout(location = 6) in vec3 a_texCoord3;\n  layout(location = 7) in vec3 a_normal;\n  layout(location = 8) in vec4 a_color1;\n#endif\nvec4 lpvs_main () {\n  vec3 compScale = scale.xyz * a_texCoord1;\n  vec4 pos = vec4(a_position, 1);\n  #if CC_RENDER_MODE == 1\n    vec4 velocity = vec4(a_color1.xyz, 0);\n  #endif\n  #if !CC_USE_WORLD_SPACE\n    pos = cc_matWorld * pos;\n    #if CC_RENDER_MODE == 1\n      velocity = cc_matWorld * velocity;\n    #endif\n  #endif\n  #if CC_RENDER_MODE != 4\n    vec2 cornerOffset = vec2((a_texCoord.xy - 0.5));\n    #if CC_RENDER_MODE == 0\n      vec3 rotEuler = a_texCoord2;\n    #elif CC_RENDER_MODE == 1\n      vec3 rotEuler = vec3(0.);\n    #else\n      vec3 rotEuler = vec3(0., 0., a_texCoord2.z);\n    #endif\n    computeVertPos(pos, cornerOffset, quaternionFromEuler(rotEuler), compScale\n    #if CC_RENDER_MODE == 0 || CC_RENDER_MODE == 3\n      , cc_matViewInv\n    #endif\n    #if CC_RENDER_MODE == 1\n      , cc_cameraPos.xyz\n      , velocity\n      , frameTile_velLenScale.z\n      , frameTile_velLenScale.w\n      , a_texCoord.x\n    #endif\n    );\n    color = a_color;\n  #else\n    mat4 xformNoScale = matrixFromRT(quaternionFromEuler(a_texCoord2), pos.xyz);\n    mat4 xform = matFromRTS(quaternionFromEuler(a_texCoord2), pos.xyz, compScale);\n    pos = xform * vec4(a_texCoord3, 1);\n    vec4 normal = xformNoScale * vec4(a_normal, 0);\n    color = a_color * a_color1;\n  #endif\n  uv = computeUV(a_texCoord.z, a_texCoord.xy, frameTile_velLenScale.xy) * mainTiling_Offset.xy + mainTiling_Offset.zw;\n  pos = cc_matViewProj * pos;\n  return pos;\n}\nvoid main() { gl_Position = lpvs_main(); }",
              "frag": "\nprecision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nlayout(location = 0) in vec2 uv;\nlayout(location = 1) in vec4 color;\nlayout(set = 1, binding = 2) uniform sampler2D mainTexture;\nlayout(set = 1, binding = 1) uniform FragConstants {\n  vec4 tintColor;\n};\nvec4 add () {\n  vec4 col = 2.0 * color * tintColor * texture(mainTexture, uv);\n  return CCFragOutput(col);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = add(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_LOCAL\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec2 a_texCoord;\nlayout(location = 2) in vec4 a_color;\nlayout(location = 0) out vec4 v_light;\nlayout(location = 1) out vec2 uv0;\n#if TWO_COLORED\n  layout(location = 3) in vec4 a_color2;\n  layout(location = 2) out vec4 v_dark;\n#endif\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  #if USE_LOCAL\n    pos = cc_matWorld * pos;\n  #endif\n  pos = cc_matViewProj * pos;\n  uv0 = a_texCoord;\n  v_light = a_color;\n  #if TWO_COLORED\n    v_dark = a_color2;\n  #endif\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\n#if USE_ALPHA_TEST\n  layout(set = 1, binding = 0) uniform ALPHA_TEST_DATA {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nlayout(location = 0) in vec4 v_light;\n#if TWO_COLORED\n  layout(location = 2) in vec4 v_dark;\n#endif\nlayout(location = 1) in vec2 uv0;\nlayout(set = 2, binding = 10) uniform sampler2D cc_spriteTexture;\nvec4 frag () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if TWO_COLORED\n    vec4 texColor = vec4(1, 1, 1, 1);\n    texColor *= texture(cc_spriteTexture, uv0);\n     o.a = texColor.a * v_light.a;\n    o.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    o *= texture(cc_spriteTexture, uv0);\n    o *= v_light;\n  #endif\n  ALPHA_TEST(o);\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_LOCAL\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec2 a_texCoord;\nlayout(location = 2) in vec4 a_color;\nlayout(location = 0) out vec4 color;\nlayout(location = 1) out vec2 uv0;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 1);\n  #if USE_LOCAL\n    pos = cc_matWorld * pos;\n  #endif\n  #if USE_PIXEL_ALIGNMENT\n    pos = cc_matView * pos;\n    pos.xyz = floor(pos.xyz);\n    pos = cc_matProj * pos;\n  #else\n    pos = cc_matViewProj * pos;\n  #endif\n  uv0 = a_texCoord;\n  color = a_color;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 CCSampleWithAlphaSeparated(sampler2D tex, vec2 uv) {\n#if CC_USE_EMBEDDED_ALPHA\n    return vec4(texture(tex, uv).rgb, texture(tex, uv + vec2(0.0, 0.5)).r);\n#else\n    return texture(tex, uv);\n#endif\n}\n#if USE_ALPHA_TEST\n  layout(set = 1, binding = 0) uniform ALPHA_TEST_DATA {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nlayout(location = 0) in vec4 color;\n#if USE_TEXTURE\n  layout(location = 1) in vec2 uv0;\n  layout(set = 2, binding = 10) uniform sampler2D cc_spriteTexture;\n#endif\nvec4 frag () {\n  vec4 o = vec4(1, 1, 1, 1);\n  #if USE_TEXTURE\n    o *= CCSampleWithAlphaSeparated(cc_spriteTexture, uv0);\n    #if IS_GRAY\n      float gray  = 0.2126 * o.r + 0.7152 * o.g + 0.0722 * o.b;\n      o.r = o.g = o.b = gray;\n    #endif\n  #endif\n  o *= color;\n  ALPHA_TEST(o);\n  return o;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "#extension GL_EXT_shader_explicit_arithmetic_types_int16: require\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\nlayout(location = 2) in vec2 a_texCoord;\nlayout(location = 3) in vec4 a_tangent;\n#if CC_USE_MORPH\n    int getVertexId() {\n        return gl_VertexIndex;\n    }\nlayout(set = 2, binding = 4) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    layout(set = 2, binding = 6) uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    layout(set = 2, binding = 7) uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    layout(set = 2, binding = 8) uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  layout(location = 4) in u16vec4 a_joints;\nlayout(location = 5) in vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    layout(location = 7) in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(set = 2, binding = 3) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(set = 2, binding = 2) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  layout(set = 2, binding = 5) uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(set = 2, binding = 3) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_INSTANCING\n  layout(location = 8) in vec4 a_matWorld0;\n  layout(location = 9) in vec4 a_matWorld1;\n  layout(location = 10) in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    layout(location = 11) in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  layout(location = 12) in float a_dyn_batch_id;\n  layout(set = 2, binding = 0) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\nlayout(location = 0) out highp vec4 v_shadowPos;\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if USE_VERTEX_COLOR\n  layout(location = 13) in vec4 a_color;\n  layout(location = 1) out vec4 v_color;\n#endif\nlayout(location = 2) out vec3 v_position;\nlayout(location = 3) out vec3 v_normal;\nlayout(location = 4) out vec2 v_uv;\nlayout(location = 5) out vec2 v_uv1;\nlayout(location = 6) out float v_fog_factor;\n#if USE_NORMAL_MAP\n  layout(location = 7) out vec3 v_tangent;\n  layout(location = 8) out vec3 v_bitangent;\n#endif\n#if HAS_SECOND_UV || USE_LIGHTMAP\n  layout(location = 14) in vec2 a_texCoord1;\n#endif\n#if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n  layout(location = 9) out vec2 v_luv;\nvoid CCLightingMapCaclUV()\n{\n#if !USE_INSTANCING\n      v_luv = cc_lightingMapUVParam.xy + a_texCoord1 * cc_lightingMapUVParam.zw;\n#else\n      v_luv = a_lightingMapUVParam.xy + a_texCoord1 * a_lightingMapUVParam.zw;\n#endif\n}\n#endif\nvec4 vert () {\n  StandardVertInput In;\n  In.position = vec4(a_position, 1.0);\n  In.normal = a_normal;\n  In.tangent = a_tangent;\n  #if CC_USE_MORPH\n    applyMorph(In);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(In);\n  #endif\n  mat4 matWorld, matWorldIT;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n    matWorldIT = matWorld;\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n    matWorldIT = matWorld;\n  #else\n    matWorld = cc_matWorld;\n    matWorldIT = cc_matWorldIT;\n  #endif\n  vec4 pos = matWorld * In.position;\n  v_position = pos.xyz;\n  v_normal = normalize((matWorldIT * vec4(In.normal, 0.0)).xyz);\n  #if USE_NORMAL_MAP\n    v_tangent = normalize((matWorld * vec4(In.tangent.xyz, 0.0)).xyz);\n    v_bitangent = cross(v_normal, v_tangent) * In.tangent.w;\n  #endif\n  v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #if HAS_SECOND_UV\n    v_uv1 = a_texCoord1 * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  #if USE_VERTEX_COLOR\n    v_color = a_color;\n  #endif\n  v_fog_factor = CC_TRANSFER_FOG(pos);\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    CCLightingMapCaclUV();\n  #endif\n    v_shadowPos = cc_matLightViewProj * pos;\n  return cc_matProj * (cc_matView * matWorld) * In.position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if CC_USE_IBL\nlayout(set = 0, binding = 4) uniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec4 fragTextureLod (sampler2D tex, vec2 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\nvec4 fragTextureLod (samplerCube tex, vec3 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\n#endif\n#if CC_RECEIVE_SHADOW\nlayout(location = 0) in highp vec4 v_shadowPos;\n#if CC_RECEIVE_SHADOW\n  layout(set = 0, binding = 3) uniform sampler2D cc_shadowMap;\n  layout(set = 0, binding = 5) uniform sampler2D cc_spotLightingMap;\n  float CCGetShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_shadowMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow / 5.0;\n  }\n  float CCGetShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n  float CCGetDirLightShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetDirLightShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    return shadow / 5.0;\n  }\n  float CCGetDirLightShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetDirLightShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n#endif\n#endif\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nfloat GGXMobile (float roughness, float NoH, vec3 H, vec3 N) {\n  vec3 NxH = cross(N, H);\n  float OneMinusNoHSqr = dot(NxH, NxH);\n  float a = roughness * roughness;\n  float n = NoH * a;\n  float p = a / (OneMinusNoHSqr + n * n);\n  return p * p;\n}\nfloat CalcSpecular (float roughness, float NoH, vec3 H, vec3 N) {\n  return (roughness*0.25 + 0.25) * GGXMobile(roughness, NoH, H, N);\n}\nvec3 BRDFApprox (vec3 specular, float roughness, float NoV) {\n  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);\n  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);\n  vec4 r = roughness * c0 + c1;\n  float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n  vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n  AB.y *= clamp(50.0 * specular.g, 0.0, 1.0);\n  return specular * AB.x + AB.y;\n}\nstruct StandardSurface {\n  vec4 albedo;\n  vec3 position;\n  vec3 normal;\n  vec3 emissive;\n  vec4 lightmap;\n  float roughness;\n  float metallic;\n  float occlusion;\n};\n#if CC_FORWARD_ADD\nlayout(set = 2, binding = 1) uniform CCForwardLight {\n  highp vec4 cc_lightPos[1];\n  vec4 cc_lightColor[1];\n  vec4 cc_lightSizeRangeAngle[1];\n  vec4 cc_lightDir[1];\n};\nfloat SmoothDistAtt (float distSqr, float invSqrAttRadius) {\n  float factor = distSqr * invSqrAttRadius;\n  float smoothFactor = clamp(1.0 - factor * factor, 0.0, 1.0);\n  return smoothFactor * smoothFactor;\n}\nfloat GetDistAtt (float distSqr, float invSqrAttRadius) {\n  float attenuation = 1.0 / max(distSqr, 0.01*0.01);\n  attenuation *= SmoothDistAtt(distSqr , invSqrAttRadius);\n  return attenuation;\n}\nfloat GetAngleAtt (vec3 L, vec3 litDir, float litAngleScale, float litAngleOffset) {\n  float cd = dot(litDir, L);\n  float attenuation = clamp(cd * litAngleScale + litAngleOffset, 0.0, 1.0);\n  return (attenuation * attenuation);\n}\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 finalColor = vec3(0.0);\n    for (int i = 0; i < 1; i++) {\n      vec3 SLU = cc_lightPos[i].xyz - s.position;\n      vec3 SL = normalize(SLU);\n      vec3 SH = normalize(SL + V);\n      float SNL = max(dot(N, SL), 0.001);\n      float SNH = max(dot(N, SH), 0.0);\n      float distSqr = dot(SLU, SLU);\n      float litRadius = cc_lightSizeRangeAngle[i].x;\n      float litRadiusSqr = litRadius * litRadius;\n      float illum = 3.14159265359 * (litRadiusSqr / max(litRadiusSqr , distSqr));\n      float attRadiusSqrInv = 1.0 / max(cc_lightSizeRangeAngle[i].y, 0.01);\n      attRadiusSqrInv *= attRadiusSqrInv;\n      float att = GetDistAtt(distSqr, attRadiusSqrInv);\n      vec3 lspec = specular * CalcSpecular(s.roughness, SNH, SH, N);\n      if (cc_lightPos[i].w > 0.0) {\n        float cosInner = max(dot(-cc_lightDir[i].xyz, SL), 0.01);\n        float cosOuter = cc_lightSizeRangeAngle[i].z;\n        float litAngleScale = 1.0 / max(0.001, cosInner - cosOuter);\n        float litAngleOffset = -cosOuter * litAngleScale;\n        att *= GetAngleAtt(SL, -cc_lightDir[i].xyz, litAngleScale, litAngleOffset);\n      }\n      vec3 lightColor = cc_lightColor[i].rgb;\n    #if CC_RECEIVE_SHADOW\n      if (cc_lightPos[i].w > 0.0) {\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetDirLightShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetDirLightShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetDirLightShadowFactorX5();\n      else shadowAttenuation = CCGetDirLightShadowFactorX1();\n      lightColor *= 1.0 - shadowAttenuation;\n    }\n      }\n    #endif\n      finalColor += SNL * lightColor * cc_lightColor[i].w * illum * att * (diffuseContrib + lspec);\n    }\n    finalColor = finalColor * s.occlusion;\n    return vec4(finalColor, 0.0);\n  }\n#else\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 L = normalize(-cc_mainLitDir.xyz);\n    vec3 H = normalize(L+V);\n    float NH = max(dot(N, H), 0.0);\n    float NL = max(dot(N, L), 0.001);\n    vec3 finalColor = NL * cc_mainLitColor.rgb * cc_mainLitColor.w;\n    #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n      finalColor = s.lightmap.a * s.lightmap.rgb + (1.0 - s.lightmap.a) * finalColor;\n    #endif\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 specularContrib = specular * CalcSpecular(s.roughness, NH, H, N);\n    finalColor *= (diffuseContrib + specularContrib);\n    float fAmb = 0.5 - N.y * 0.5;\n    vec3 ambDiff = mix(cc_ambientSky.rgb, cc_ambientGround.rgb, fAmb) * cc_ambientSky.w;\n    finalColor += (ambDiff.rgb * diffuse);\n    #if CC_USE_IBL\n      vec3 R = normalize(reflect(-V, N));\n      vec4 envmap = fragTextureLod(cc_environment, R, s.roughness * cc_ambientGround.w);\n      #if CC_USE_IBL == 2\n        vec3 env = unpackRGBE(envmap);\n      #else\n        vec3 env = SRGBToLinear(envmap.rgb);\n      #endif\n      finalColor += env * cc_ambientSky.w * specular;\n    #endif\n    finalColor = finalColor * s.occlusion;\n    #if CC_USE_HDR\n      s.emissive *= cc_exposure.w;\n    #endif\n    finalColor += s.emissive;\n    #if CC_RECEIVE_SHADOW\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetShadowFactorX5();\n      else shadowAttenuation = CCGetShadowFactorX1();\n      vec3 shadowColor = cc_shadowColor.rgb * cc_shadowColor.a + finalColor.rgb * (1.0 - cc_shadowColor.a);\n      finalColor.rgb = shadowColor.rgb * shadowAttenuation * NL + finalColor.rgb * (1.0 - shadowAttenuation * NL);\n    }\n    #endif\n    return vec4(finalColor, s.albedo.a);\n  }\n#endif\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\n#if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n  layout(location = 9) in vec2 v_luv;\nlayout(set = 2, binding = 9) uniform sampler2D cc_lightingMap;\n#endif\nlayout(location = 2) in vec3 v_position;\nlayout(location = 4) in vec2 v_uv;\nlayout(location = 5) in vec2 v_uv1;\nlayout(location = 3) in vec3 v_normal;\nlayout(location = 6) in float v_fog_factor;\n#if USE_VERTEX_COLOR\n  layout(location = 1) in vec4 v_color;\n#endif\n#if USE_ALBEDO_MAP\n  layout(set = 1, binding = 1) uniform sampler2D albedoMap;\n#endif\n#if USE_NORMAL_MAP\n  layout(location = 7) in vec3 v_tangent;\n  layout(location = 8) in vec3 v_bitangent;\n  layout(set = 1, binding = 2) uniform sampler2D normalMap;\n#endif\n#if USE_PBR_MAP\n  layout(set = 1, binding = 3) uniform sampler2D pbrMap;\n#endif\n#if USE_METALLIC_ROUGHNESS_MAP\n  layout(set = 1, binding = 4) uniform sampler2D metallicRoughnessMap;\n#endif\n#if USE_OCCLUSION_MAP\n  layout(set = 1, binding = 5) uniform sampler2D occlusionMap;\n#endif\n#if USE_EMISSIVE_MAP\n  layout(set = 1, binding = 6) uniform sampler2D emissiveMap;\n#endif\n#if USE_ALPHA_TEST\n#endif\nvoid surf (out StandardSurface s) {\n  vec4 baseColor = albedo;\n  #if USE_VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n  #if USE_ALBEDO_MAP\n    vec4 texColor = texture(albedoMap, ALBEDO_UV);\n    texColor.rgb = SRGBToLinear(texColor.rgb);\n    baseColor *= texColor;\n  #endif\n  s.albedo = baseColor;\n  s.albedo.rgb *= albedoScaleAndCutoff.xyz;\n  #if USE_ALPHA_TEST\n    if (s.albedo.ALPHA_TEST_CHANNEL < albedoScaleAndCutoff.w) discard;\n  #endif\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    s.lightmap = texture(cc_lightingMap, v_luv);\n  #endif\n  s.normal = v_normal;\n  #if USE_NORMAL_MAP\n    vec3 nmmp = texture(normalMap, NORMAL_UV).xyz - vec3(0.5);\n    s.normal =\n      (nmmp.x * pbrParams.w) * normalize(v_tangent) +\n      (nmmp.y * pbrParams.w) * normalize(v_bitangent) +\n      nmmp.z * normalize(s.normal);\n  #endif\n  s.position = v_position;\n  vec4 pbr = pbrParams;\n  #if USE_PBR_MAP\n    vec4 res = texture(pbrMap, PBR_UV);\n    pbr.x *= res.r;\n    pbr.y *= res.g;\n    pbr.z *= res.b;\n  #endif\n  #if USE_METALLIC_ROUGHNESS_MAP\n    vec4 metallicRoughness = texture(metallicRoughnessMap, PBR_UV);\n    pbr.z *= metallicRoughness.b;\n    pbr.y *= metallicRoughness.g;\n  #endif\n  #if USE_OCCLUSION_MAP\n    pbr.x *= texture(occlusionMap, PBR_UV).r;\n  #endif\n  s.occlusion = clamp(pbr.x, 0.0, 0.96);\n  s.roughness = clamp(pbr.y, 0.04, 1.0);\n  s.metallic = pbr.z;\n  s.emissive = emissive.rgb * emissiveScaleParam.xyz;\n  #if USE_EMISSIVE_MAP\n    s.emissive *= SRGBToLinear(texture(emissiveMap, EMISSIVE_UV).rgb);\n  #endif\n}\nvec4 frag () {\n  StandardSurface s; surf(s);\n  vec4 color = CCStandardShading(s);\n  color = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, color.rgb, v_fog_factor), color.a);\n  return CCFragOutput(color);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }, {
              "vert": "#extension GL_EXT_shader_explicit_arithmetic_types_int16: require\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\nlayout(location = 2) in vec2 a_texCoord;\nlayout(location = 3) in vec4 a_tangent;\n#if CC_USE_MORPH\n    int getVertexId() {\n        return gl_VertexIndex;\n    }\nlayout(set = 2, binding = 4) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    layout(set = 2, binding = 6) uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    layout(set = 2, binding = 7) uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    layout(set = 2, binding = 8) uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  layout(location = 4) in u16vec4 a_joints;\nlayout(location = 5) in vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    layout(location = 7) in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(set = 2, binding = 3) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(set = 2, binding = 2) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  layout(set = 2, binding = 5) uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(set = 2, binding = 3) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\n#if USE_INSTANCING\n  layout(location = 8) in vec4 a_matWorld0;\n  layout(location = 9) in vec4 a_matWorld1;\n  layout(location = 10) in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    layout(location = 11) in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  layout(location = 12) in float a_dyn_batch_id;\n  layout(set = 2, binding = 0) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if HAS_SECOND_UV || USE_LIGHTMAP\n  layout(location = 13) in vec2 a_texCoord1;\n#endif\nlayout(location = 0) out vec2 v_uv;\nlayout(location = 1) out vec2 v_uv1;\nlayout(location = 2) out float v_clip_depth;\nvec4 vert () {\n  StandardVertInput In;\n  In.position = vec4(a_position, 1.0);\n  In.normal = a_normal;\n  In.tangent = a_tangent;\n  #if CC_USE_MORPH\n    applyMorph(In);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(In);\n  #endif\n  mat4 matWorld, matWorldIT;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n    matWorldIT = matWorld;\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n    matWorldIT = matWorld;\n  #else\n    matWorld = cc_matWorld;\n    matWorldIT = cc_matWorldIT;\n  #endif\n  vec4 worldPos = matWorld * In.position;\n  vec4 clipPos = cc_matLightViewProj * worldPos;\n  v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #if HAS_SECOND_UV\n    v_uv1 = a_texCoord1 * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  v_clip_depth = clipPos.z / clipPos.w * 0.5 + 0.5;\n  return clipPos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 tilingOffset;\n  vec4 albedo;\n  vec4 albedoScaleAndCutoff;\n  vec4 pbrParams;\n  vec4 emissive;\n  vec4 emissiveScaleParam;\n};\nvec4 packDepthToRGBA (float depth) {\n  vec4 ret = vec4(1.0, 255.0, 65025.0, 160581375.0) * depth;\n  ret = fract(ret);\n  ret -= ret.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n  return ret;\n}\nlayout(location = 0) in vec2 v_uv;\nlayout(location = 1) in vec2 v_uv1;\nlayout(location = 2) in float v_clip_depth;\n#if USE_ALBEDO_MAP\n  layout(set = 1, binding = 1) uniform sampler2D albedoMap;\n#endif\n#if USE_ALPHA_TEST\n#endif\nvec4 frag () {\n  vec4 baseColor = albedo;\n  #if USE_ALBEDO_MAP\n    baseColor *= texture(albedoMap, ALBEDO_UV);\n  #endif\n  #if USE_ALPHA_TEST\n    if (baseColor.ALPHA_TEST_CHANNEL < albedoScaleAndCutoff.w) discard;\n  #endif\n  return packDepthToRGBA(v_clip_depth);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\nlayout(location = 0) out highp vec4 v_shadowPos;\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\nlayout(location = 2) in vec2 a_texCoord;\nlayout(location = 1) out highp vec3 v_position;\nlayout(location = 2) out mediump vec3 v_normal;\n#if USE_NORMALMAP\n  layout(location = 3) out mediump vec3 v_tangent;\n  layout(location = 4) out mediump vec3 v_binormal;\n#endif\nlayout(location = 5) out mediump vec2 uvw;\nlayout(location = 6) out mediump vec2 uv0;\nlayout(location = 7) out mediump vec2 uv1;\nlayout(location = 8) out mediump vec2 uv2;\nlayout(location = 9) out mediump vec2 uv3;\nlayout(location = 10) out mediump vec2 luv;\nlayout(location = 11) out mediump vec3 diffuse;\nlayout(location = 12) out mediump float v_fog_factor;\nlayout(set = 1, binding = 0) uniform TexCoords {\n  vec4 UVScale;\n  vec4 lightMapUVParam;\n};\nvec4 vert () {\n  vec3 worldPos;\n  worldPos.x = cc_matWorld[3][0] + a_position.x;\n  worldPos.y = cc_matWorld[3][1] + a_position.y;\n  worldPos.z = cc_matWorld[3][2] + a_position.z;\n  vec4 pos = vec4(worldPos, 1.0);\n  pos = cc_matViewProj * pos;\n  uvw = a_texCoord;\n  uv0 = a_position.xz * UVScale.x;\n  uv1 = a_position.xz * UVScale.y;\n  uv2 = a_position.xz * UVScale.z;\n  uv3 = a_position.xz * UVScale.w;\n  #if USE_LIGHTMAP\n    luv = lightMapUVParam.xy + a_texCoord * lightMapUVParam.zw;\n  #endif\n  v_position = worldPos;\n  v_normal = a_normal;\n  v_fog_factor = CC_TRANSFER_FOG(vec4(worldPos, 1.0));\n  #if USE_NORMALMAP\n    v_tangent = vec3(1.0, 0.0, 0.0);\n    v_binormal = vec3(0.0, 0.0, 1.0);\n    v_binormal = cross(v_tangent, a_normal);\n    v_tangent = cross(a_normal, v_binormal);\n  #endif\n    v_shadowPos = cc_matLightViewProj * vec4(worldPos, 1.0);\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\n#if CC_USE_IBL\nlayout(set = 0, binding = 4) uniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec4 fragTextureLod (sampler2D tex, vec2 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\nvec4 fragTextureLod (samplerCube tex, vec3 coord, float lod) {\n    return textureLod(tex, coord, lod);\n}\n#endif\n#if CC_RECEIVE_SHADOW\nlayout(location = 0) in highp vec4 v_shadowPos;\n#if CC_RECEIVE_SHADOW\n  layout(set = 0, binding = 3) uniform sampler2D cc_shadowMap;\n  layout(set = 0, binding = 5) uniform sampler2D cc_spotLightingMap;\n  float CCGetShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_shadowMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_shadowMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow / 5.0;\n  }\n  float CCGetShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_shadowMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n  float CCGetDirLightShadowFactorX1 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    float shadow = step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    return shadow;\n  }\n  float CCGetDirLightShadowFactorX5 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    float closestDepth = 0.0;\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x - offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x, clipPos.y)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y - offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n    closestDepth = dot(texture(cc_spotLightingMap, vec2(clipPos.x + offsetx, clipPos.y + offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n    return shadow / 5.0;\n  }\n  float CCGetDirLightShadowFactorX9 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -1; i <= 1; i++) {\n      for (int j = -1; j <= 1; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 9.0;\n  }\n  float CCGetDirLightShadowFactorX25 () {\n    vec3 clipPos = v_shadowPos.xyz / v_shadowPos.w * 0.5 + 0.5;\n    if (clipPos.x < 0.0 || clipPos.x > 1.0 ||\n        clipPos.y < 0.0 || clipPos.y > 1.0 ||\n        clipPos.z <-1.0 || clipPos.z > 1.0) { return 0.0; }\n    float offsetx = 1.0 / cc_shadowInfo.x;\n    float offsety = 1.0 / cc_shadowInfo.y;\n    float shadow = 0.0;\n    for (int i = -2; i <= 2; i++) {\n      for (int j = -2; j <= 2; j++) {\n        float closestDepth = dot(texture(cc_spotLightingMap, clipPos.xy + vec2(i, j) * vec2(offsetx, offsety)), vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 160581375.0));\n        shadow += step(closestDepth, clipPos.z - cc_shadowInfo.w);\n      }\n    }\n    return shadow / 25.0;\n  }\n#endif\n#endif\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nfloat GGXMobile (float roughness, float NoH, vec3 H, vec3 N) {\n  vec3 NxH = cross(N, H);\n  float OneMinusNoHSqr = dot(NxH, NxH);\n  float a = roughness * roughness;\n  float n = NoH * a;\n  float p = a / (OneMinusNoHSqr + n * n);\n  return p * p;\n}\nfloat CalcSpecular (float roughness, float NoH, vec3 H, vec3 N) {\n  return (roughness*0.25 + 0.25) * GGXMobile(roughness, NoH, H, N);\n}\nvec3 BRDFApprox (vec3 specular, float roughness, float NoV) {\n  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);\n  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);\n  vec4 r = roughness * c0 + c1;\n  float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n  vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n  AB.y *= clamp(50.0 * specular.g, 0.0, 1.0);\n  return specular * AB.x + AB.y;\n}\nstruct StandardSurface {\n  vec4 albedo;\n  vec3 position;\n  vec3 normal;\n  vec3 emissive;\n  vec4 lightmap;\n  float roughness;\n  float metallic;\n  float occlusion;\n};\n#if CC_FORWARD_ADD\nlayout(set = 2, binding = 1) uniform CCForwardLight {\n  highp vec4 cc_lightPos[1];\n  vec4 cc_lightColor[1];\n  vec4 cc_lightSizeRangeAngle[1];\n  vec4 cc_lightDir[1];\n};\nfloat SmoothDistAtt (float distSqr, float invSqrAttRadius) {\n  float factor = distSqr * invSqrAttRadius;\n  float smoothFactor = clamp(1.0 - factor * factor, 0.0, 1.0);\n  return smoothFactor * smoothFactor;\n}\nfloat GetDistAtt (float distSqr, float invSqrAttRadius) {\n  float attenuation = 1.0 / max(distSqr, 0.01*0.01);\n  attenuation *= SmoothDistAtt(distSqr , invSqrAttRadius);\n  return attenuation;\n}\nfloat GetAngleAtt (vec3 L, vec3 litDir, float litAngleScale, float litAngleOffset) {\n  float cd = dot(litDir, L);\n  float attenuation = clamp(cd * litAngleScale + litAngleOffset, 0.0, 1.0);\n  return (attenuation * attenuation);\n}\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 finalColor = vec3(0.0);\n    for (int i = 0; i < 1; i++) {\n      vec3 SLU = cc_lightPos[i].xyz - s.position;\n      vec3 SL = normalize(SLU);\n      vec3 SH = normalize(SL + V);\n      float SNL = max(dot(N, SL), 0.001);\n      float SNH = max(dot(N, SH), 0.0);\n      float distSqr = dot(SLU, SLU);\n      float litRadius = cc_lightSizeRangeAngle[i].x;\n      float litRadiusSqr = litRadius * litRadius;\n      float illum = 3.14159265359 * (litRadiusSqr / max(litRadiusSqr , distSqr));\n      float attRadiusSqrInv = 1.0 / max(cc_lightSizeRangeAngle[i].y, 0.01);\n      attRadiusSqrInv *= attRadiusSqrInv;\n      float att = GetDistAtt(distSqr, attRadiusSqrInv);\n      vec3 lspec = specular * CalcSpecular(s.roughness, SNH, SH, N);\n      if (cc_lightPos[i].w > 0.0) {\n        float cosInner = max(dot(-cc_lightDir[i].xyz, SL), 0.01);\n        float cosOuter = cc_lightSizeRangeAngle[i].z;\n        float litAngleScale = 1.0 / max(0.001, cosInner - cosOuter);\n        float litAngleOffset = -cosOuter * litAngleScale;\n        att *= GetAngleAtt(SL, -cc_lightDir[i].xyz, litAngleScale, litAngleOffset);\n      }\n      vec3 lightColor = cc_lightColor[i].rgb;\n    #if CC_RECEIVE_SHADOW\n      if (cc_lightPos[i].w > 0.0) {\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetDirLightShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetDirLightShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetDirLightShadowFactorX5();\n      else shadowAttenuation = CCGetDirLightShadowFactorX1();\n      lightColor *= 1.0 - shadowAttenuation;\n    }\n      }\n    #endif\n      finalColor += SNL * lightColor * cc_lightColor[i].w * illum * att * (diffuseContrib + lspec);\n    }\n    finalColor = finalColor * s.occlusion;\n    return vec4(finalColor, 0.0);\n  }\n#else\n  vec4 CCStandardShading (StandardSurface s) {\n    vec3 diffuse = s.albedo.rgb * (1.0 - s.metallic);\n    vec3 specular = mix(vec3(0.04), s.albedo.rgb, s.metallic);\n    vec3 N = normalize(s.normal);\n    vec3 V = normalize(cc_cameraPos.xyz - s.position);\n    float NV = max(abs(dot(N, V)), 0.001);\n    specular = BRDFApprox(specular, s.roughness, NV);\n    vec3 L = normalize(-cc_mainLitDir.xyz);\n    vec3 H = normalize(L+V);\n    float NH = max(dot(N, H), 0.0);\n    float NL = max(dot(N, L), 0.001);\n    vec3 finalColor = NL * cc_mainLitColor.rgb * cc_mainLitColor.w;\n    #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n      finalColor = s.lightmap.a * s.lightmap.rgb + (1.0 - s.lightmap.a) * finalColor;\n    #endif\n    vec3 diffuseContrib = diffuse / 3.14159265359;\n    vec3 specularContrib = specular * CalcSpecular(s.roughness, NH, H, N);\n    finalColor *= (diffuseContrib + specularContrib);\n    float fAmb = 0.5 - N.y * 0.5;\n    vec3 ambDiff = mix(cc_ambientSky.rgb, cc_ambientGround.rgb, fAmb) * cc_ambientSky.w;\n    finalColor += (ambDiff.rgb * diffuse);\n    #if CC_USE_IBL\n      vec3 R = normalize(reflect(-V, N));\n      vec4 envmap = fragTextureLod(cc_environment, R, s.roughness * cc_ambientGround.w);\n      #if CC_USE_IBL == 2\n        vec3 env = unpackRGBE(envmap);\n      #else\n        vec3 env = SRGBToLinear(envmap.rgb);\n      #endif\n      finalColor += env * cc_ambientSky.w * specular;\n    #endif\n    finalColor = finalColor * s.occlusion;\n    #if CC_USE_HDR\n      s.emissive *= cc_exposure.w;\n    #endif\n    finalColor += s.emissive;\n    #if CC_RECEIVE_SHADOW\n    {\n      float pcf = cc_shadowInfo.z + 0.001;\n      float shadowAttenuation = 0.0;\n      if (pcf > 3.0) shadowAttenuation = CCGetShadowFactorX25();\n      else if (3.0 > pcf && pcf > 2.0) shadowAttenuation = CCGetShadowFactorX9();\n      else if (2.0 > pcf && pcf > 1.0) shadowAttenuation = CCGetShadowFactorX5();\n      else shadowAttenuation = CCGetShadowFactorX1();\n      vec3 shadowColor = cc_shadowColor.rgb * cc_shadowColor.a + finalColor.rgb * (1.0 - cc_shadowColor.a);\n      finalColor.rgb = shadowColor.rgb * shadowAttenuation * NL + finalColor.rgb * (1.0 - shadowAttenuation * NL);\n    }\n    #endif\n    return vec4(finalColor, s.albedo.a);\n  }\n#endif\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nlayout(location = 1) in highp vec3 v_position;\nlayout(location = 2) in mediump vec3 v_normal;\n#if USE_NORMALMAP\n  layout(location = 3) in mediump vec3 v_tangent;\n  layout(location = 4) in mediump vec3 v_binormal;\n#endif\nlayout(location = 5) in mediump vec2 uvw;\nlayout(location = 6) in mediump vec2 uv0;\nlayout(location = 7) in mediump vec2 uv1;\nlayout(location = 8) in mediump vec2 uv2;\nlayout(location = 9) in mediump vec2 uv3;\nlayout(location = 11) in mediump vec3 diffuse;\nlayout(location = 10) in mediump vec2 luv;\nlayout(location = 12) in mediump float v_fog_factor;\nlayout(set = 1, binding = 1) uniform PbrParams {\n  vec4 metallic;\n  vec4 roughness;\n};\nlayout(set = 1, binding = 2) uniform sampler2D weightMap;\nlayout(set = 1, binding = 3) uniform sampler2D detailMap0;\nlayout(set = 1, binding = 4) uniform sampler2D detailMap1;\nlayout(set = 1, binding = 5) uniform sampler2D detailMap2;\nlayout(set = 1, binding = 6) uniform sampler2D detailMap3;\nlayout(set = 1, binding = 7) uniform sampler2D normalMap0;\nlayout(set = 1, binding = 8) uniform sampler2D normalMap1;\nlayout(set = 1, binding = 9) uniform sampler2D normalMap2;\nlayout(set = 1, binding = 10) uniform sampler2D normalMap3;\nlayout(set = 1, binding = 11) uniform sampler2D lightMap;\nvoid surf (out StandardSurface s) {\n  #if LAYERS > 1\n    vec4 w = texture(weightMap, uvw);\n  #endif\n  vec4 baseColor = vec4(0, 0, 0, 0);\n  #if LAYERS == 1\n    baseColor = texture(detailMap0, uv0);\n  #elif LAYERS == 2\n    baseColor += texture(detailMap0, uv0) * w.r;\n    baseColor += texture(detailMap1, uv1) * w.g;\n  #elif LAYERS == 3\n    baseColor += texture(detailMap0, uv0) * w.r;\n    baseColor += texture(detailMap1, uv1) * w.g;\n    baseColor += texture(detailMap2, uv2) * w.b;\n  #elif LAYERS == 4\n    baseColor += texture(detailMap0, uv0) * w.r;\n    baseColor += texture(detailMap1, uv1) * w.g;\n    baseColor += texture(detailMap2, uv2) * w.b;\n    baseColor += texture(detailMap3, uv3) * w.a;\n  #else\n    baseColor = texture(detailMap0, uv0);\n  #endif\n  s.position = v_position;\n  #if USE_NORMALMAP\n    vec4 baseNormal = vec4(0, 0, 0, 0);\n    #if LAYERS == 1\n      baseNormal = texture(normalMap0, uv0);\n    #elif LAYERS == 2\n      baseNormal += texture(normalMap0, uv0) * w.r;\n      baseNormal += texture(normalMap1, uv1) * w.g;\n    #elif LAYERS == 3\n      baseNormal += texture(normalMap0, uv0) * w.r;\n      baseNormal += texture(normalMap1, uv1) * w.g;\n      baseNormal += texture(normalMap2, uv2) * w.b;\n    #elif LAYERS == 4\n      baseNormal += texture(normalMap0, uv0) * w.r;\n      baseNormal += texture(normalMap1, uv1) * w.g;\n      baseNormal += texture(normalMap2, uv2) * w.b;\n      baseNormal += texture(normalMap3, uv3) * w.a;\n    #else\n      baseNormal = texture(normalMap0, uv0);\n    #endif\n    vec3 nmmp = baseNormal.xyz - vec3(0.5);\n    s.normal =\n      nmmp.x * normalize(v_tangent) +\n      nmmp.y * normalize(v_binormal) +\n      nmmp.z * normalize(v_normal);\n  #else\n    s.normal = v_normal;\n  #endif\n  s.albedo = vec4(SRGBToLinear(baseColor.rgb), 1.0);\n  s.occlusion = 1.0;\n  #if USE_PBR\n    s.roughness = 0.0;\n    #if LAYERS == 1\n      s.roughness = roughness.x;\n    #elif LAYERS == 2\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n    #elif LAYERS == 3\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n      s.roughness += roughness.z * w.b;\n    #elif LAYERS == 4\n      s.roughness += roughness.x * w.r;\n      s.roughness += roughness.y * w.g;\n      s.roughness += roughness.z * w.b;\n      s.roughness += roughness.w * w.a;\n    #else\n      s.roughness = 1.0;\n    #endif\n    s.metallic = 0.0;\n    #if LAYERS == 1\n      s.metallic = metallic.x;\n    #elif LAYERS == 2\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n    #elif LAYERS == 3\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n      s.metallic += metallic.z * w.b;\n    #elif LAYERS == 4\n      s.metallic += metallic.x * w.r;\n      s.metallic += metallic.y * w.g;\n      s.metallic += metallic.z * w.b;\n      s.metallic += metallic.w * w.a;\n    #else\n      s.metallic = 0.0;\n    #endif\n  #else\n    s.roughness = 1.0;\n    s.metallic = 0.0;\n  #endif\n  s.emissive = vec3(0.0, 0.0, 0.0);\n  #if USE_LIGHTMAP && !USE_BATCHING && !CC_FORWARD_ADD\n    s.lightmap = texture(lightMap, luv);\n  #else\n    s.lightmap = vec4(0.0, 0.0, 0.0, 0.0);\n  #endif\n}\nvec4 frag () {\n  StandardSurface s; surf(s);\n  vec4 color = CCStandardShading(s);\n  color = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, color.rgb, v_fog_factor), color.a);\n  return CCFragOutput(color);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }, {
              "vert": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\nlayout(location = 2) in vec2 a_texCoord;\nlayout(location = 0) out vec2 v_clip_depth;\nvec4 vert () {\n  vec4 worldPos;\n  worldPos.x = cc_matWorld[3][0] + a_position.x;\n  worldPos.y = cc_matWorld[3][1] + a_position.y;\n  worldPos.z = cc_matWorld[3][2] + a_position.z;\n  worldPos.w = 1.0;\n  vec4 clipPos = cc_matLightViewProj * worldPos;\n  v_clip_depth = clipPos.zw;\n  return clipPos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nvec4 packDepthToRGBA (float depth) {\n  vec4 ret = vec4(1.0, 255.0, 65025.0, 160581375.0) * depth;\n  ret = fract(ret);\n  ret -= ret.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n  return ret;\n}\nlayout(location = 0) in vec2 v_clip_depth;\nvec4 frag () {\n  return packDepthToRGBA(v_clip_depth.x / v_clip_depth.y * 0.5 + 0.5);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "#extension GL_EXT_shader_explicit_arithmetic_types_int16: require\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\nlayout(location = 2) in vec2 a_texCoord;\nlayout(location = 3) in vec4 a_tangent;\n#if CC_USE_MORPH\n    int getVertexId() {\n        return gl_VertexIndex;\n    }\nlayout(set = 2, binding = 4) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    layout(set = 2, binding = 6) uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    layout(set = 2, binding = 7) uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    layout(set = 2, binding = 8) uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  layout(location = 4) in u16vec4 a_joints;\nlayout(location = 5) in vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    layout(location = 7) in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(set = 2, binding = 3) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(set = 2, binding = 2) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  layout(set = 2, binding = 5) uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(set = 2, binding = 3) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_INSTANCING\n  layout(location = 8) in vec4 a_matWorld0;\n  layout(location = 9) in vec4 a_matWorld1;\n  layout(location = 10) in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    layout(location = 11) in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  layout(location = 12) in float a_dyn_batch_id;\n  layout(set = 2, binding = 0) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nfloat LinearFog(vec4 pos) {\n    vec4 wPos = pos;\n    float cam_dis = distance(cc_cameraPos, wPos);\n    float fogStart = cc_fogBase.x;\n    float fogEnd = cc_fogBase.y;\n    return clamp((fogEnd - cam_dis) / (fogEnd - fogStart), 0., 1.);\n}\nfloat ExpFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * fogDensity);\n    return f;\n}\nfloat ExpSquaredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float fogDensity = cc_fogBase.z;\n    float cam_dis = distance(cc_cameraPos, wPos) / fogAtten * 4.;\n    float f = exp(-cam_dis * cam_dis * fogDensity * fogDensity);\n    return f;\n}\nfloat LayeredFog(vec4 pos) {\n    vec4 wPos = pos;\n    float fogAtten = cc_fogAdd.z;\n    float _FogTop = cc_fogAdd.x;\n    float _FogRange = cc_fogAdd.y;\n    vec3 camWorldProj = cc_cameraPos.xyz;\n    camWorldProj.y = 0.;\n    vec3 worldPosProj = wPos.xyz;\n    worldPosProj.y = 0.;\n    float fDeltaD = distance(worldPosProj, camWorldProj) / fogAtten * 2.0;\n    float fDeltaY, fDensityIntegral;\n    if (cc_cameraPos.y > _FogTop) {\n        if (wPos.y < _FogTop) {\n            fDeltaY = (_FogTop - wPos.y) / _FogRange * 2.0;\n            fDensityIntegral = fDeltaY * fDeltaY * 0.5;\n        } else {\n            fDeltaY = 0.;\n            fDensityIntegral = 0.;\n        }\n    } else {\n        if (wPos.y < _FogTop) {\n            float fDeltaA = (_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            float fDeltaB = (_FogTop - wPos.y) / _FogRange * 2.;\n            fDeltaY = abs(fDeltaA - fDeltaB);\n            fDensityIntegral = abs((fDeltaA * fDeltaA * 0.5) - (fDeltaB * fDeltaB * 0.5));\n        } else {\n            fDeltaY = abs(_FogTop - cc_cameraPos.y) / _FogRange * 2.;\n            fDensityIntegral = abs(fDeltaY * fDeltaY * 0.5);\n        }\n    }\n    float fDensity;\n    if (fDeltaY != 0.) {\n        fDensity = (sqrt(1.0 + ((fDeltaD / fDeltaY) * (fDeltaD / fDeltaY)))) * fDensityIntegral;\n    } else {\n        fDensity = 0.;\n    }\n    float f = exp(-fDensity);\n    return f;\n}\nfloat CC_TRANSFER_FOG(vec4 pos) {\n    #if CC_USE_FOG == 0\n        return LinearFog(pos);\n\t#elif CC_USE_FOG == 1\n        return ExpFog(pos);\n    #elif CC_USE_FOG == 2\n        return ExpSquaredFog(pos);\n    #elif CC_USE_FOG == 3\n        return LayeredFog(pos);\n    #endif\n    return 1.;\n}\n#if USE_VERTEX_COLOR\n  layout(location = 13) in lowp vec4 a_color;\n  layout(location = 0) out lowp vec4 v_color;\n#endif\n#if USE_TEXTURE\n  layout(location = 1) out vec2 v_uv;\n  layout(set = 1, binding = 0) uniform TexCoords {\n    vec4 tilingOffset;\n  };\n#endif\nlayout(location = 2) out float factor_fog;\nvec4 vert () {\n  vec4 position;\n  position = vec4(a_position, 1.0);\n  #if CC_USE_MORPH\n    applyMorph(position);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(position);\n  #endif\n  mat4 matWorld;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n  #else\n    matWorld = cc_matWorld;\n  #endif\n  #if USE_TEXTURE\n    v_uv = a_texCoord * tilingOffset.xy + tilingOffset.zw;\n  #endif\n  #if USE_VERTEX_COLOR\n    v_color = a_color;\n  #endif\n  factor_fog = CC_TRANSFER_FOG(matWorld * position);\n  return cc_matProj * (cc_matView * matWorld) * position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\n#if USE_ALPHA_TEST\n#endif\n#if USE_TEXTURE\n  layout(location = 1) in vec2 v_uv;\n  layout(set = 1, binding = 2) uniform sampler2D mainTexture;\n#endif\nlayout(set = 1, binding = 1) uniform Constant {\n  vec4 mainColor;\n  vec4 colorScaleAndCutoff;\n};\n#if USE_VERTEX_COLOR\n  layout(location = 0) in lowp vec4 v_color;\n#endif\nlayout(location = 2) in float factor_fog;\nvec4 frag () {\n  vec4 o = mainColor;\n  o.rgb *= colorScaleAndCutoff.xyz;\n  #if USE_VERTEX_COLOR\n    o *= v_color;\n  #endif\n  #if USE_TEXTURE\n    o *= texture(mainTexture, v_uv);\n  #endif\n  #if USE_ALPHA_TEST\n    if (o.ALPHA_TEST_CHANNEL < colorScaleAndCutoff.w) discard;\n  #endif\n  o = vec4(mix(CC_FORWARD_ADD > 0 ? vec3(0.0) : cc_fogColor.rgb, o.rgb, factor_fog), o.a);\n  return CCFragOutput(o);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "#extension GL_EXT_shader_explicit_arithmetic_types_int16: require\nprecision highp float;\nhighp float decode32 (highp vec4 rgba) {\n  rgba = rgba * 255.0;\n  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;\n  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;\n  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;\n  return Sign * exp2(Exponent - 23.0) * Mantissa;\n}\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\nlayout(location = 2) in vec2 a_texCoord;\nlayout(location = 3) in vec4 a_tangent;\n#if CC_USE_MORPH\n    int getVertexId() {\n        return gl_VertexIndex;\n    }\nlayout(set = 2, binding = 4) uniform CCMorph {\n    vec4 cc_displacementWeights[15];\n    vec4 cc_displacementTextureInfo;\n};\nvec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {\n    float pixelIndexF = float(pixelIndex);\n    float x = mod(pixelIndexF, textureResolution.x);\n    float y = floor(pixelIndexF / textureResolution.x);\n    return vec2(x, y);\n}\nvec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {\n    return (vec2(location.x, location.y) + .5) / textureResolution;\n}\n#if CC_SUPPORT_FLOAT_TEXTURE\n        vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {\n            ivec2 texSize = textureSize(tex, 0);\n            return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);\n        }\n#else\n    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {\n        int pixelIndex = elementIndex * 4;\n        vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);\n        vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);\n        vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);\n        return vec4(\n            decode32(texture(tex, x)),\n            decode32(texture(tex, y)),\n            decode32(texture(tex, z)),\n            1.0\n        );\n    }\n#endif\nfloat getDisplacementWeight(int index) {\n    int quot = index / 4;\n    int remainder = index - quot * 4;\n    if (remainder == 0) {\n        return cc_displacementWeights[quot].x;\n    } else if (remainder == 1) {\n        return cc_displacementWeights[quot].y;\n    } else if (remainder == 2) {\n        return cc_displacementWeights[quot].z;\n    } else {\n        return cc_displacementWeights[quot].w;\n    }\n}\nvec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {\n#if CC_MORPH_PRECOMPUTED\n    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;\n#else\n    vec3 result = vec3(0, 0, 0);\n    int nVertices = int(cc_displacementTextureInfo.z);\n    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {\n        result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));\n    }\n    return result;\n#endif\n}\n#if CC_MORPH_TARGET_HAS_POSITION\n    layout(set = 2, binding = 6) uniform sampler2D cc_PositionDisplacements;\n    vec3 getPositionDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    layout(set = 2, binding = 7) uniform sampler2D cc_NormalDisplacements;\n    vec3 getNormalDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);\n    }\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    layout(set = 2, binding = 8) uniform sampler2D cc_TangentDisplacements;\n    vec3 getTangentDisplacement(int vertexId) {\n        return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);\n    }\n#endif\nvoid applyMorph (inout StandardVertInput attr) {\n    int vertexId = getVertexId();\n#if CC_MORPH_TARGET_HAS_POSITION\n    attr.position.xyz = attr.position.xyz + getPositionDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_NORMAL\n    attr.normal.xyz = attr.normal.xyz + getNormalDisplacement(vertexId);\n#endif\n#if CC_MORPH_TARGET_HAS_TANGENT\n    attr.tangent.xyz = attr.tangent.xyz + getTangentDisplacement(vertexId);\n#endif\n}\nvoid applyMorph (inout vec4 position) {\n#if CC_MORPH_TARGET_HAS_POSITION\n    position.xyz = position.xyz + getPositionDisplacement(getVertexId());\n#endif\n}\n#endif\n#if CC_USE_SKINNING\n  layout(location = 4) in u16vec4 a_joints;\nlayout(location = 5) in vec4 a_weights;\n#if CC_USE_BAKED_ANIMATION\n  #if USE_INSTANCING\n    layout(location = 7) in highp vec4 a_jointAnimInfo;\n  #endif\n  layout(set = 2, binding = 3) uniform CCSkinningTexture {\n    highp vec4 cc_jointTextureInfo;\n  };\n  layout(set = 2, binding = 2) uniform CCSkinningAnimation {\n    highp vec4 cc_jointAnimInfo;\n  };\n  layout(set = 2, binding = 5) uniform highp sampler2D cc_jointTexture;\n  #else\n  layout(set = 2, binding = 3) uniform CCSkinning {\n    highp vec4 cc_joints[30 * 3];\n  };\n#endif\n#if CC_USE_BAKED_ANIMATION\n  #if CC_SUPPORT_FLOAT_TEXTURE\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 3.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 3.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));\n      vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));\n      vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #else\n    mat4 getJointMatrix (float i) {\n    #if USE_INSTANCING\n      highp float j = 12.0 * (a_jointAnimInfo.x * a_jointAnimInfo.y + i) + a_jointAnimInfo.z;\n    #else\n      highp float j = 12.0 * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + i) + cc_jointTextureInfo.z;\n    #endif\n    highp float invSize = cc_jointTextureInfo.w;\n    highp float y = floor(j * invSize);\n    highp float x = j - y * cc_jointTextureInfo.x;\n    y = (y + 0.5) * invSize;\n      vec4 v1 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))\n      );\n      vec4 v2 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))\n      );\n      vec4 v3 = vec4(\n        decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),\n        decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))\n      );\n      return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n    }\n  #endif\n#else\n  mat4 getJointMatrix (float i) {\n    int idx = int(i);\n    vec4 v1 = cc_joints[idx * 3];\n    vec4 v2 = cc_joints[idx * 3 + 1];\n    vec4 v3 = cc_joints[idx * 3 + 2];\n    return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));\n  }\n#endif\nmat4 skinMatrix () {\n  vec4 joints = vec4(a_joints);\n  return getJointMatrix(joints.x) * a_weights.x\n       + getJointMatrix(joints.y) * a_weights.y\n       + getJointMatrix(joints.z) * a_weights.z\n       + getJointMatrix(joints.w) * a_weights.w;\n}\nvoid CCSkin (inout vec4 position) {\n  mat4 m = skinMatrix();\n  position = m * position;\n}\nvoid CCSkin (inout StandardVertInput attr) {\n  mat4 m = skinMatrix();\n  attr.position = m * attr.position;\n  attr.normal = (m * vec4(attr.normal, 0.0)).xyz;\n  attr.tangent.xyz = (m * vec4(attr.tangent.xyz, 0.0)).xyz;\n}\n#endif\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\n#if USE_INSTANCING\n  layout(location = 8) in vec4 a_matWorld0;\n  layout(location = 9) in vec4 a_matWorld1;\n  layout(location = 10) in vec4 a_matWorld2;\n  #if USE_LIGHTMAP\n    layout(location = 11) in vec4 a_lightingMapUVParam;\n  #endif\n#elif USE_BATCHING\n  layout(location = 12) in float a_dyn_batch_id;\n  layout(set = 2, binding = 0) uniform CCLocalBatched {\n    highp mat4 cc_matWorlds[10];\n  };\n#else\nlayout(set = 2, binding = 0) uniform CCLocal {\n  highp mat4 cc_matWorld;\n  highp mat4 cc_matWorldIT;\n  highp vec4 cc_lightingMapUVParam;\n};\n#endif\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nvec4 vert () {\n  vec4 position;\n  position = vec4(a_position, 1.0);\n  #if CC_USE_MORPH\n    applyMorph(position);\n  #endif\n  #if CC_USE_SKINNING\n    CCSkin(position);\n  #endif\n  mat4 matWorld;\n  #if USE_INSTANCING\n    matWorld = mat4(\n      vec4(a_matWorld0.xyz, 0.0),\n      vec4(a_matWorld1.xyz, 0.0),\n      vec4(a_matWorld2.xyz, 0.0),\n      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)\n    );\n  #elif USE_BATCHING\n    matWorld = cc_matWorlds[int(a_dyn_batch_id)];\n  #else\n    matWorld = cc_matWorld;\n  #endif\n  position = cc_matProj * (cc_matView * cc_matLightPlaneProj * matWorld) * position;\n  position.z -= 0.0001;\n  return position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nlayout(set = 0, binding = 2) uniform CCShadow {\n  highp mat4 cc_matLightPlaneProj;\n  highp mat4 cc_matLightViewProj;\n  lowp  vec4 cc_shadowColor;\n  lowp  vec4 cc_shadowInfo;\n};\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nvec4 frag () {\n  return CCFragOutput(cc_shadowColor);\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision highp float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nstruct StandardVertInput {\n  highp vec4 position;\n  vec3 normal;\n  vec4 tangent;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\nlayout(location = 2) in vec2 a_texCoord;\nlayout(location = 3) in vec4 a_tangent;\nlayout(location = 0) out mediump vec4 viewDir;\nvec4 vert () {\n  viewDir = vec4(a_position, 1.0);\n  mat4 matViewRotOnly = mat4(mat3(cc_matView));\n  mat4 matProj = cc_matProj;\n  if (matProj[3].w > 0.0) {\n    vec2 scale = vec2(48.0, 24.0);\n    matProj[0].xy *= scale;\n    matProj[1].xy *= scale;\n    matProj[2].zw = vec2(-1.0);\n    matProj[3].zw = vec2(0.0);\n  }\n  vec4 pos = matProj * matViewRotOnly * viewDir;\n  pos.z = 0.99999 * pos.w;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(set = 0, binding = 4) uniform samplerCube cc_environment;\nvec3 unpackRGBE (vec4 rgbe) {\n  return rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n}\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec3 ACESToneMap (vec3 color) {\n  color = min(color, vec3(8.0));\n  const float A = 2.51;\n  const float B = 0.03;\n  const float C = 2.43;\n  const float D = 0.59;\n  const float E = 0.14;\n  return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nvec4 CCFragOutput (vec4 color) {\n  #if !CC_USE_HDR\n    color.rgb = sqrt(ACESToneMap(color.rgb));\n  #endif\n  return color;\n}\nlayout(location = 0) in mediump vec4 viewDir;\nvec4 frag () {\n  #if USE_RGBE_CUBEMAP\n    vec3 c = unpackRGBE(texture(cc_environment, viewDir.xyz));\n  #else\n    vec3 c = SRGBToLinear(texture(cc_environment, viewDir.xyz).rgb);\n  #endif\n  return CCFragOutput(vec4(c * cc_ambientSky.w, 1.0));\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec4 a_color;\nlayout(location = 0) out vec2 v_uv;\nlayout(set = 1, binding = 0) uniform Constants {\n  vec4 offset;\n};\nlayout(set = 1, binding = 1) uniform PerFrameInfo {\n  vec4 digits[8 * 10 / 4];\n};\nfloat getComponent(vec4 v, float i) {\n  if (i < 1.0) { return v.x; }\n  else if (i < 2.0) { return v.y; }\n  else if (i < 3.0) { return v.z; }\n  else { return v.w; }\n}\nvec4 vert () {\n  vec4 position = cc_matViewProj * vec4(a_position, 1.0);\n  position.xy += offset.xy;\n  v_uv = a_color.xy;\n  if (a_color.z >= 0.0) {\n    float n = getComponent(digits[int(a_color.z)], a_color.w);\n    v_uv += vec2(offset.z * n, 0.0);\n  }\n  return position;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nlayout(set = 0, binding = 0) uniform CCGlobal {\n  highp   vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_nativeSize;\n};\nlayout(set = 0, binding = 1) uniform CCCamera {\n  highp   mat4 cc_matView;\n  highp   mat4 cc_matViewInv;\n  highp   mat4 cc_matProj;\n  highp   mat4 cc_matProjInv;\n  highp   mat4 cc_matViewProj;\n  highp   mat4 cc_matViewProjInv;\n  highp   vec4 cc_cameraPos;\n  mediump vec4 cc_screenScale;\n  mediump vec4 cc_exposure;\n  mediump vec4 cc_mainLitDir;\n  mediump vec4 cc_mainLitColor;\n  mediump vec4 cc_ambientSky;\n  mediump vec4 cc_ambientGround;\n  mediump vec4 cc_fogColor;\n  mediump vec4 cc_fogBase;\n  mediump vec4 cc_fogAdd;\n};\nvec3 SRGBToLinear (vec3 gamma) {\n  return gamma * gamma;\n}\nvec4 CCFragOutput (vec4 color) {\n  #if CC_USE_HDR\n    color.rgb = mix(color.rgb, SRGBToLinear(color.rgb) * cc_exposure.w, vec3(cc_exposure.z));\n  #endif\n  return color;\n}\nlayout(location = 0) in vec2 v_uv;\nlayout(set = 1, binding = 2) uniform sampler2D mainTexture;\nvec4 frag () {\n  return CCFragOutput(texture(mainTexture, v_uv));\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }], [{
              "vert": "\nprecision mediump float;\nlayout(location = 0) in vec2 a_position;\nlayout(location = 1) in vec2 a_texCoord;\nlayout(location = 0) out vec2 v_uv;\nvec4 vert () {\n  vec4 pos = vec4(a_position, 0, 1);\n  v_uv = a_texCoord;\n  return pos;\n}\nvoid main() { gl_Position = vert(); }",
              "frag": "\nprecision mediump float;\nlayout(location = 0) in vec2 v_uv;\nlayout(set = 1, binding = 1) uniform sampler2D mainTexture;\nlayout(set = 1, binding = 0) uniform splashFrag {\n  float u_precent;\n};\nvec4 frag () {\n  vec4 color = texture(mainTexture, v_uv);\n  float precent = clamp(u_precent, 0.0, 1.0);\n  color.xyz *= precent;\n  return color;\n}\nlayout(location = 0) out vec4 cc_FragColor;\nvoid main() { cc_FragColor = frag(); }"
            }]];

            var assembly = function () {
              {
                return {
                  glsl1: glsl1,
                  glsl3: glsl3,
                  glsl4: glsl4
                };
              }
            }();

            var BuiltinResMgr = function () {
              function BuiltinResMgr() {
                this._device = null;
                this._resources = {};
              }

              var _proto = BuiltinResMgr.prototype;

              _proto.initBuiltinRes = function initBuiltinRes(device) {
                var _this = this;

                this._device = device;
                var resources = this._resources;
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                var imgAsset = new ImageAsset(canvas);
                var l = canvas.width = canvas.height = 2;
                context.fillStyle = '#000';
                context.fillRect(0, 0, l, l);
                var blackTexture = new Texture2D();
                blackTexture._uuid = 'black-texture';
                blackTexture.image = imgAsset;
                resources[blackTexture._uuid] = blackTexture;
                context.fillStyle = 'rgba(0,0,0,0)';
                context.fillRect(0, 0, l, l);
                var emptyBuffer = new Uint8Array(4 * 4);

                for (var i = 0; i < emptyBuffer.length; ++i) {
                  emptyBuffer[i] = 0;
                }

                var emptyTexture = new Texture2D();
                emptyTexture._uuid = 'empty-texture';
                emptyTexture.image = imgAsset;
                emptyTexture.uploadData(emptyBuffer);
                resources[emptyTexture._uuid] = emptyTexture;
                var blackCubeTexture = new TextureCube();
                blackCubeTexture._uuid = 'black-cube-texture';
                blackCubeTexture.setMipFilter(TextureCube.Filter.NEAREST);
                blackCubeTexture.image = {
                  front: new ImageAsset(canvas),
                  back: new ImageAsset(canvas),
                  left: new ImageAsset(canvas),
                  right: new ImageAsset(canvas),
                  top: new ImageAsset(canvas),
                  bottom: new ImageAsset(canvas)
                };
                resources[blackCubeTexture._uuid] = blackCubeTexture;
                context.fillStyle = '#777';
                context.fillRect(0, 0, l, l);
                var greyTexture = new Texture2D();
                greyTexture._uuid = 'grey-texture';
                greyTexture.image = imgAsset;
                resources[greyTexture._uuid] = greyTexture;
                context.fillStyle = '#fff';
                context.fillRect(0, 0, l, l);
                var whiteTexture = new Texture2D();
                whiteTexture._uuid = 'white-texture';
                whiteTexture.image = imgAsset;
                resources[whiteTexture._uuid] = whiteTexture;
                var whiteCubeTexture = new TextureCube();
                whiteCubeTexture._uuid = 'white-cube-texture';
                whiteCubeTexture.setMipFilter(TextureCube.Filter.NEAREST);
                whiteCubeTexture.image = {
                  front: new ImageAsset(canvas),
                  back: new ImageAsset(canvas),
                  left: new ImageAsset(canvas),
                  right: new ImageAsset(canvas),
                  top: new ImageAsset(canvas),
                  bottom: new ImageAsset(canvas)
                };
                resources[whiteCubeTexture._uuid] = whiteCubeTexture;
                context.fillStyle = '#7f7fff';
                context.fillRect(0, 0, l, l);
                var normalTexture = new Texture2D();
                normalTexture._uuid = 'normal-texture';
                normalTexture.image = imgAsset;
                resources[normalTexture._uuid] = normalTexture;
                canvas.width = canvas.height = 16;
                context.fillStyle = '#ddd';
                context.fillRect(0, 0, 16, 16);
                context.fillStyle = '#555';
                context.fillRect(0, 0, 8, 8);
                context.fillStyle = '#555';
                context.fillRect(8, 8, 8, 8);
                var defaultTexture = new Texture2D();
                defaultTexture._uuid = 'default-texture';
                defaultTexture.image = imgAsset;
                resources[defaultTexture._uuid] = defaultTexture;
                var defaultCubeTexture = new TextureCube();
                defaultCubeTexture.setMipFilter(TextureCube.Filter.NEAREST);
                defaultCubeTexture._uuid = 'default-cube-texture';
                defaultCubeTexture.image = {
                  front: new ImageAsset(canvas),
                  back: new ImageAsset(canvas),
                  left: new ImageAsset(canvas),
                  right: new ImageAsset(canvas),
                  top: new ImageAsset(canvas),
                  bottom: new ImageAsset(canvas)
                };
                resources[defaultCubeTexture._uuid] = defaultCubeTexture;

                if (legacyCC.SpriteFrame) {
                  var spriteFrame = new legacyCC.SpriteFrame();
                  var texture = imgAsset._texture;
                  spriteFrame.texture = texture;
                  spriteFrame._uuid = 'default-spriteframe';
                  resources[spriteFrame._uuid] = spriteFrame;
                }

                var shaderVersionKey = getDeviceShaderVersion(device);

                if (!shaderVersionKey) {
                  return Promise.reject(Error('Failed to initialize builtin shaders: unknown device.'));
                }

                var shaderSources = assembly[shaderVersionKey];

                if (!shaderSources) {
                  return Promise.reject(Error("Current device is requiring builtin shaders of version " + shaderVersionKey + " " + "but shaders of that version are not assembled in this build."));
                }

                return Promise.resolve().then(function () {
                  effects.forEach(function (e, effectIndex) {
                    var effect = Object.assign(new legacyCC.EffectAsset(), e);
                    effect.shaders.forEach(function (shaderInfo, shaderIndex) {
                      var shaderSource = shaderSources[effectIndex][shaderIndex];

                      if (shaderSource) {
                        shaderInfo[shaderVersionKey] = shaderSource;
                      }
                    });
                    effect.hideInEditor = true;
                    effect.onLoaded();
                  });

                  _this._initMaterials();
                });
              };

              _proto.get = function get(uuid) {
                return this._resources[uuid];
              };

              _proto._initMaterials = function _initMaterials() {
                var resources = this._resources;
                var materialsToBeCompiled = [];
                var standardMtl = new legacyCC.Material();
                standardMtl._uuid = 'standard-material';
                standardMtl.initialize({
                  effectName: 'standard'
                });
                resources[standardMtl._uuid] = standardMtl;
                materialsToBeCompiled.push(standardMtl);
                var missingEfxMtl = new legacyCC.Material();
                missingEfxMtl._uuid = 'missing-effect-material';
                missingEfxMtl.initialize({
                  effectName: 'unlit',
                  defines: {
                    USE_COLOR: true
                  }
                });
                missingEfxMtl.setProperty('mainColor', legacyCC.color('#ffff00'));
                resources[missingEfxMtl._uuid] = missingEfxMtl;
                materialsToBeCompiled.push(missingEfxMtl);
                var missingMtl = new legacyCC.Material();
                missingMtl._uuid = 'missing-material';
                missingMtl.initialize({
                  effectName: 'unlit',
                  defines: {
                    USE_COLOR: true
                  }
                });
                missingMtl.setProperty('mainColor', legacyCC.color('#ff00ff'));
                resources[missingMtl._uuid] = missingMtl;
                materialsToBeCompiled.push(missingMtl);
                var clearStencilMtl = new legacyCC.Material();
                clearStencilMtl._uuid = 'default-clear-stencil';
                clearStencilMtl.initialize({
                  defines: {
                    USE_TEXTURE: false
                  },
                  effectName: 'clear-stencil'
                });
                resources[clearStencilMtl._uuid] = clearStencilMtl;
                materialsToBeCompiled.push(clearStencilMtl);
                var spriteMtl = new legacyCC.Material();
                spriteMtl._uuid = 'ui-base-material';
                spriteMtl.initialize({
                  defines: {
                    USE_TEXTURE: false
                  },
                  effectName: 'sprite'
                });
                resources[spriteMtl._uuid] = spriteMtl;
                materialsToBeCompiled.push(spriteMtl);
                var spriteColorMtl = new legacyCC.Material();
                spriteColorMtl._uuid = 'ui-sprite-material';
                spriteColorMtl.initialize({
                  defines: {
                    USE_TEXTURE: true,
                    CC_USE_EMBEDDED_ALPHA: false,
                    IS_GRAY: false
                  },
                  effectName: 'sprite'
                });
                resources[spriteColorMtl._uuid] = spriteColorMtl;
                materialsToBeCompiled.push(spriteColorMtl);
                var alphaTestMaskMtl = new legacyCC.Material();
                alphaTestMaskMtl._uuid = 'ui-alpha-test-material';
                alphaTestMaskMtl.initialize({
                  defines: {
                    USE_TEXTURE: true,
                    USE_ALPHA_TEST: true,
                    CC_USE_EMBEDDED_ALPHA: false,
                    IS_GRAY: false
                  },
                  effectName: 'sprite'
                });
                resources[alphaTestMaskMtl._uuid] = alphaTestMaskMtl;
                materialsToBeCompiled.push(alphaTestMaskMtl);
                var spriteGrayMtl = new legacyCC.Material();
                spriteGrayMtl._uuid = 'ui-sprite-gray-material';
                spriteGrayMtl.initialize({
                  defines: {
                    USE_TEXTURE: true,
                    CC_USE_EMBEDDED_ALPHA: false,
                    IS_GRAY: true
                  },
                  effectName: 'sprite'
                });
                resources[spriteGrayMtl._uuid] = spriteGrayMtl;
                materialsToBeCompiled.push(spriteGrayMtl);
                var spriteAlphaMtl = new legacyCC.Material();
                spriteAlphaMtl._uuid = 'ui-sprite-alpha-sep-material';
                spriteAlphaMtl.initialize({
                  defines: {
                    USE_TEXTURE: true,
                    CC_USE_EMBEDDED_ALPHA: true,
                    IS_GRAY: false
                  },
                  effectName: 'sprite'
                });
                resources[spriteAlphaMtl._uuid] = spriteAlphaMtl;
                materialsToBeCompiled.push(spriteAlphaMtl);
                var spriteAlphaGrayMtl = new legacyCC.Material();
                spriteAlphaGrayMtl._uuid = 'ui-sprite-gray-alpha-sep-material';
                spriteAlphaGrayMtl.initialize({
                  defines: {
                    USE_TEXTURE: true,
                    CC_USE_EMBEDDED_ALPHA: true,
                    IS_GRAY: true
                  },
                  effectName: 'sprite'
                });
                resources[spriteAlphaGrayMtl._uuid] = spriteAlphaGrayMtl;
                materialsToBeCompiled.push(spriteAlphaGrayMtl);
                var defaultGraphicsMtl = new legacyCC.Material();
                defaultGraphicsMtl._uuid = 'ui-graphics-material';
                defaultGraphicsMtl.initialize({
                  effectName: 'graphics'
                });
                resources[defaultGraphicsMtl._uuid] = defaultGraphicsMtl;
                materialsToBeCompiled.push(defaultGraphicsMtl);
                var defaultParticleMtl = new legacyCC.Material();
                defaultParticleMtl._uuid = 'default-particle-material';
                defaultParticleMtl.initialize({
                  effectName: 'particle'
                });
                resources[defaultParticleMtl._uuid] = defaultParticleMtl;
                materialsToBeCompiled.push(defaultParticleMtl);
                var defaultParticleGPUMtl = new legacyCC.Material();
                defaultParticleGPUMtl._uuid = 'default-particle-gpu-material';
                defaultParticleGPUMtl.initialize({
                  effectName: 'particle-gpu'
                });
                resources[defaultParticleGPUMtl._uuid] = defaultParticleGPUMtl;
                materialsToBeCompiled.push(defaultParticleGPUMtl);
                var defaultTrailMtl = new legacyCC.Material();
                defaultTrailMtl._uuid = 'default-trail-material';
                defaultTrailMtl.initialize({
                  effectName: 'particle-trail'
                });
                resources[defaultTrailMtl._uuid] = defaultTrailMtl;
                materialsToBeCompiled.push(defaultTrailMtl);
                var defaultBillboardMtl = new legacyCC.Material();
                defaultBillboardMtl._uuid = 'default-billboard-material';
                defaultBillboardMtl.initialize({
                  effectName: 'billboard'
                });
                resources[defaultBillboardMtl._uuid] = defaultBillboardMtl;
                materialsToBeCompiled.push(defaultBillboardMtl);
                var spineTwoColorMtl = new legacyCC.Material();
                spineTwoColorMtl._uuid = 'default-spine-material';
                spineTwoColorMtl.initialize({
                  defines: {
                    USE_TEXTURE: true,
                    CC_USE_EMBEDDED_ALPHA: false,
                    IS_GRAY: false
                  },
                  effectName: 'spine'
                });
                resources[spineTwoColorMtl._uuid] = spineTwoColorMtl;
                materialsToBeCompiled.push(spineTwoColorMtl);
                legacyCC.game.on(legacyCC.Game.EVENT_RENDERER_INITED, function () {
                  for (var i = 0; i < materialsToBeCompiled.length; ++i) {
                    var mat = materialsToBeCompiled[i];

                    for (var j = 0; j < mat.passes.length; ++j) {
                      mat.passes[j].tryCompile();
                    }
                  }
                });
              };

              return BuiltinResMgr;
            }();

            var builtinResMgr = exports('x', legacyCC.builtinResMgr = new BuiltinResMgr());

            var _bufferInfo = new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE);

            var _bufferViewInfo = new BufferViewInfo(null);

            var _dsInfo = new DescriptorSetInfo(null);

            var BatchingSchemes;

            (function (BatchingSchemes) {
              BatchingSchemes[BatchingSchemes["INSTANCING"] = 1] = "INSTANCING";
              BatchingSchemes[BatchingSchemes["VB_MERGING"] = 2] = "VB_MERGING";
            })(BatchingSchemes || (BatchingSchemes = exports('B', {})));

            var Pass = exports('j', function () {
              Pass.fillPipelineInfo = function fillPipelineInfo(pass, info) {
                var hPass = pass.handle;

                if (info.priority !== undefined) {
                  PassPool.set(hPass, PassView.PRIORITY, info.priority);
                }

                if (info.primitive !== undefined) {
                  PassPool.set(hPass, PassView.PRIMITIVE, info.primitive);
                }

                if (info.stage !== undefined) {
                  PassPool.set(hPass, PassView.STAGE, info.stage);
                }

                if (info.dynamicStates !== undefined) {
                  PassPool.set(hPass, PassView.DYNAMIC_STATES, info.dynamicStates);
                }

                if (info.phase !== undefined) {
                  PassPool.set(hPass, PassView.PHASE, getPhaseID(info.phase));
                }

                var bs = pass._bs;

                if (info.blendState) {
                  var bsInfo = info.blendState;
                  var targets = bsInfo.targets;

                  if (targets) {
                    targets.forEach(function (t, i) {
                      bs.setTarget(i, t);
                    });
                  }

                  if (bsInfo.isA2C !== undefined) {
                    bs.isA2C = bsInfo.isA2C;
                  }

                  if (bsInfo.isIndepend !== undefined) {
                    bs.isIndepend = bsInfo.isIndepend;
                  }

                  if (bsInfo.blendColor !== undefined) {
                    bs.blendColor = bsInfo.blendColor;
                  }
                }

                pass._rs.assign(info.rasterizerState);

                pass._dss.assign(info.depthStencilState);
              };

              Pass.getPassHash = function getPassHash(pass, hShader) {
                var hPass = pass.handle;
                var res = hShader + "," + PassPool.get(hPass, PassView.PRIMITIVE) + "," + PassPool.get(hPass, PassView.DYNAMIC_STATES);
                res += serializeBlendState(pass._bs);
                res += serializeDepthStencilState(pass._dss);
                res += serializeRasterizerState(pass._rs);
                return murmurhash2_32_gc(res, 666);
              };

              function Pass(root) {
                this._rootBuffer = null;
                this._rootBufferDirty = false;
                this._buffers = [];
                this._descriptorSet = null;
                this._passIndex = 0;
                this._propertyIndex = 0;
                this._programName = '';
                this._dynamics = {};
                this._propertyHandleMap = {};
                this._rootBlock = null;
                this._blocks = [];
                this._shaderInfo = null;
                this._defines = {};
                this._properties = {};
                this._root = void 0;
                this._device = void 0;
                this._hShaderDefault = NULL_HANDLE;
                this._handle = NULL_HANDLE;
                this._bs = new BlendState();
                this._dss = new DepthStencilState();
                this._rs = new RasterizerState();
                this._root = root;
                this._device = root.device;
              }

              var _proto = Pass.prototype;

              _proto.initialize = function initialize(info) {
                this._doInit(info);

                this.resetUBOs();
                this.resetTextures();
                this.tryCompile();
              };

              _proto.getHandle = function getHandle(name, offset, targetType) {
                if (offset === void 0) {
                  offset = 0;
                }

                if (targetType === void 0) {
                  targetType = Type.UNKNOWN;
                }

                var handle = this._propertyHandleMap[name];

                if (!handle) {
                  return 0;
                }

                if (targetType) {
                  handle = customizeType(handle, targetType);
                } else if (offset) {
                  handle = customizeType(handle, getTypeFromHandle(handle) - offset);
                }

                return handle + offset;
              };

              _proto.getBinding = function getBinding(name) {
                var handle = this.getHandle(name);

                if (!handle) {
                  return -1;
                }

                return Pass.getBindingFromHandle(handle);
              };

              _proto.setUniform = function setUniform(handle, value) {
                var binding = Pass.getBindingFromHandle(handle);
                var type = Pass.getTypeFromHandle(handle);
                var ofs = Pass.getOffsetFromHandle(handle);
                var block = this._blocks[binding];
                type2writer[type](block, value, ofs);
                this._rootBufferDirty = true;
              };

              _proto.getUniform = function getUniform(handle, out) {
                var binding = Pass.getBindingFromHandle(handle);
                var type = Pass.getTypeFromHandle(handle);
                var ofs = Pass.getOffsetFromHandle(handle);
                var block = this._blocks[binding];
                return type2reader[type](block, out, ofs);
              };

              _proto.setUniformArray = function setUniformArray(handle, value) {
                var binding = Pass.getBindingFromHandle(handle);
                var type = Pass.getTypeFromHandle(handle);
                var stride = GetTypeSize(type) >> 2;
                var block = this._blocks[binding];
                var ofs = Pass.getOffsetFromHandle(handle);

                for (var i = 0; i < value.length; i++, ofs += stride) {
                  if (value[i] === null) {
                    continue;
                  }

                  type2writer[type](block, value[i], ofs);
                }

                this._rootBufferDirty = true;
              };

              _proto.bindTexture = function bindTexture(binding, value, index) {
                this._descriptorSet.bindTexture(binding, value, index || 0);
              };

              _proto.bindSampler = function bindSampler(binding, value, index) {
                this._descriptorSet.bindSampler(binding, value, index || 0);
              };

              _proto.setDynamicState = function setDynamicState(state, value) {
                var ds = this._dynamics[state];

                if (ds && ds.value === value) {
                  return;
                }

                ds.value = value;
                ds.dirty = true;
              };

              _proto.overridePipelineStates = function overridePipelineStates(original, overrides) {
                console.warn('base pass cannot override states, please use pass instance instead.');
              };

              _proto.update = function update() {
                if (this._rootBufferDirty && this._rootBuffer) {
                  this._rootBuffer.update(this._rootBlock);

                  this._rootBufferDirty = false;
                }

                this._descriptorSet.update();
              };

              _proto.destroy = function destroy() {
                for (var i = 0; i < this._shaderInfo.blocks.length; i++) {
                  var u = this._shaderInfo.blocks[i];

                  this._buffers[u.binding].destroy();
                }

                this._buffers = [];

                if (this._rootBuffer) {
                  this._rootBuffer.destroy();

                  this._rootBlock = null;
                }

                this._descriptorSet = null;

                this._rs.destroy();

                this._dss.destroy();

                this._bs.destroy();

                if (this._handle) {
                  DSPool.free(PassPool.get(this._handle, PassView.DESCRIPTOR_SET));
                  PassPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }
              };

              _proto.resetUniform = function resetUniform(name) {
                var handle = this.getHandle(name);

                if (!handle) {
                  return;
                }

                var type = Pass.getTypeFromHandle(handle);
                var binding = Pass.getBindingFromHandle(handle);
                var ofs = Pass.getOffsetFromHandle(handle);
                var block = this._blocks[binding];
                var info = this._properties[name];
                var value = info && info.value || getDefaultFromType(type);
                type2writer[type](block, value, ofs);
                this._rootBufferDirty = true;
              };

              _proto.resetTexture = function resetTexture(name, index) {
                var handle = this.getHandle(name);

                if (!handle) {
                  return;
                }

                var type = Pass.getTypeFromHandle(handle);
                var binding = Pass.getBindingFromHandle(handle);
                var info = this._properties[name];
                var value = info && info.value;
                var texName = value ? value + "-texture" : getDefaultFromType(type);
                var textureBase = builtinResMgr.get(texName);
                var texture = textureBase && textureBase.getGFXTexture();
                var samplerHash = info && info.samplerHash !== undefined ? info.samplerHash : textureBase && textureBase.getSamplerHash();
                var sampler = samplerLib.getSampler(this._device, samplerHash);

                this._descriptorSet.bindSampler(binding, sampler, index);

                this._descriptorSet.bindTexture(binding, texture, index);
              };

              _proto.resetUBOs = function resetUBOs() {
                for (var i = 0; i < this._shaderInfo.blocks.length; i++) {
                  var u = this._shaderInfo.blocks[i];
                  var block = this._blocks[u.binding];
                  var ofs = 0;

                  for (var j = 0; j < u.members.length; j++) {
                    var cur = u.members[j];
                    var info = this._properties[cur.name];
                    var givenDefault = info && info.value;
                    var value = givenDefault || getDefaultFromType(cur.type);
                    var size = (GetTypeSize(cur.type) >> 2) * cur.count;

                    for (var k = 0; k + value.length <= size; k += value.length) {
                      block.set(value, ofs + k);
                    }

                    ofs += size;
                  }
                }

                this._rootBufferDirty = true;
              };

              _proto.resetTextures = function resetTextures() {
                for (var i = 0; i < this._shaderInfo.samplers.length; i++) {
                  var u = this._shaderInfo.samplers[i];

                  for (var j = 0; j < u.count; j++) {
                    this.resetTexture(u.name, j);
                  }
                }
              };

              _proto.tryCompile = function tryCompile() {
                var pipeline = this._root.pipeline;

                if (!pipeline) {
                  return false;
                }

                this._syncBatchingScheme();

                this._hShaderDefault = programLib.getGFXShader(this._device, this._programName, this._defines, pipeline);

                if (!this._hShaderDefault) {
                  console.warn("create shader " + this._programName + " failed");
                  return false;
                }

                PassPool.set(this._handle, PassView.PIPELINE_LAYOUT, programLib.getTemplateInfo(this._programName).hPipelineLayout);
                PassPool.set(this._handle, PassView.HASH, Pass.getPassHash(this, this._hShaderDefault));
                return true;
              };

              _proto.getShaderVariant = function getShaderVariant(patches) {
                if (patches === void 0) {
                  patches = null;
                }

                if (!this._hShaderDefault && !this.tryCompile()) {
                  console.warn('pass resources incomplete');
                  return NULL_HANDLE;
                }

                if (!patches) {
                  return this._hShaderDefault;
                }

                var pipeline = this._root.pipeline;

                for (var _i = 0; _i < patches.length; _i++) {
                  var patch = patches[_i];
                  this._defines[patch.name] = patch.value;
                }

                var hShader = programLib.getGFXShader(this._device, this._programName, this._defines, pipeline);

                for (var _i2 = 0; _i2 < patches.length; _i2++) {
                  var _patch = patches[_i2];
                  delete this._defines[_patch.name];
                }

                return hShader;
              };

              _proto.beginChangeStatesSilently = function beginChangeStatesSilently() {};

              _proto.endChangeStatesSilently = function endChangeStatesSilently() {};

              _proto._doInit = function _doInit(info, copyDefines) {
                if (copyDefines === void 0) {
                  copyDefines = false;
                }

                var handle = this._handle = PassPool.alloc();
                PassPool.set(handle, PassView.PRIORITY, RenderPriority.DEFAULT);
                PassPool.set(handle, PassView.STAGE, RenderPassStage.DEFAULT);
                PassPool.set(handle, PassView.PHASE, getPhaseID('default'));
                PassPool.set(handle, PassView.PRIMITIVE, PrimitiveMode.TRIANGLE_LIST);
                PassPool.set(handle, PassView.RASTERIZER_STATE, this._rs.handle);
                PassPool.set(handle, PassView.DEPTH_STENCIL_STATE, this._dss.handle);
                PassPool.set(handle, PassView.BLEND_STATE, this._bs.handle);
                this._passIndex = info.passIndex;
                this._propertyIndex = info.propertyIndex !== undefined ? info.propertyIndex : info.passIndex;
                this._programName = info.program;
                this._defines = copyDefines ? _extends({}, info.defines) : info.defines;
                this._shaderInfo = programLib.getTemplate(info.program);
                this._properties = info.properties || this._properties;
                var device = this._device;
                Pass.fillPipelineInfo(this, info);

                if (info.stateOverrides) {
                  Pass.fillPipelineInfo(this, info.stateOverrides);
                }

                _dsInfo.layout = programLib.getDescriptorSetLayout(this._device, info.program);
                var dsHandle = DSPool.alloc(this._device, _dsInfo);
                PassPool.set(this._handle, PassView.DESCRIPTOR_SET, dsHandle);
                this._descriptorSet = DSPool.get(dsHandle);
                var blocks = this._shaderInfo.blocks;
                var tmplInfo = programLib.getTemplateInfo(info.program);
                var blockSizes = tmplInfo.blockSizes,
                    handleMap = tmplInfo.handleMap;
                var alignment = device.uboOffsetAlignment;
                var startOffsets = [];
                var lastSize = 0;
                var lastOffset = 0;

                for (var i = 0; i < blocks.length; i++) {
                  var size = blockSizes[i];
                  startOffsets.push(lastOffset);
                  lastOffset += Math.ceil(size / alignment) * alignment;
                  lastSize = size;
                }

                var totalSize = startOffsets[startOffsets.length - 1] + lastSize;

                if (totalSize) {
                  _bufferInfo.size = Math.ceil(totalSize / 16) * 16;
                  this._rootBuffer = device.createBuffer(_bufferInfo);
                  this._rootBlock = new ArrayBuffer(totalSize);
                }

                for (var _i3 = 0, count = 0; _i3 < blocks.length; _i3++) {
                  var binding = blocks[_i3].binding;
                  var _size = blockSizes[_i3];
                  _bufferViewInfo.buffer = this._rootBuffer;
                  _bufferViewInfo.offset = startOffsets[count++];
                  _bufferViewInfo.range = Math.ceil(_size / 16) * 16;
                  var bufferView = this._buffers[binding] = device.createBuffer(_bufferViewInfo);
                  this._blocks[binding] = new Float32Array(this._rootBlock, _bufferViewInfo.offset, _size / Float32Array.BYTES_PER_ELEMENT);

                  this._descriptorSet.bindBuffer(binding, bufferView);
                }

                var directHandleMap = this._propertyHandleMap = handleMap;
                var indirectHandleMap = {};

                for (var name in this._properties) {
                  var prop = this._properties[name];

                  if (!prop.handleInfo) {
                    continue;
                  }

                  indirectHandleMap[name] = this.getHandle.apply(this, prop.handleInfo);
                }

                Object.assign(directHandleMap, indirectHandleMap);
              };

              _proto._syncBatchingScheme = function _syncBatchingScheme() {
                if (this._defines.USE_INSTANCING) {
                  if (this._device.hasFeature(Feature.INSTANCED_ARRAYS)) {
                    PassPool.set(this._handle, PassView.BATCHING_SCHEME, BatchingSchemes.INSTANCING);
                  } else {
                    this._defines.USE_INSTANCING = false;
                    PassPool.set(this._handle, PassView.BATCHING_SCHEME, 0);
                  }
                } else if (this._defines.USE_BATCHING) {
                  PassPool.set(this._handle, PassView.BATCHING_SCHEME, BatchingSchemes.VB_MERGING);
                } else {
                  PassPool.set(this._handle, PassView.BATCHING_SCHEME, 0);
                }
              };

              _proto._destroyHandle = function _destroyHandle() {
                if (this._handle) {
                  PassPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }
              };

              _proto._initPassFromTarget = function _initPassFromTarget(target, dss, bs, hashFactor) {
                PassPool.set(this.handle, PassView.PRIORITY, target.priority);
                PassPool.set(this.handle, PassView.STAGE, target.stage);
                PassPool.set(this.handle, PassView.PHASE, target.phase);
                PassPool.set(this.handle, PassView.BATCHING_SCHEME, target.batchingScheme);
                PassPool.set(this.handle, PassView.PRIMITIVE, target.primitive);
                PassPool.set(this.handle, PassView.DYNAMIC_STATES, target.dynamicStates);
                this._descriptorSet = target.descriptorSet;
                PassPool.set(this.handle, PassView.DESCRIPTOR_SET, PassPool.get(target.handle, PassView.DESCRIPTOR_SET));
                this._bs = bs;
                PassPool.set(this.handle, PassView.BLEND_STATE, bs.handle);
                this._rs = target.rasterizerState;
                PassPool.set(this.handle, PassView.RASTERIZER_STATE, PassPool.get(target.handle, PassView.RASTERIZER_STATE));
                this._dss = dss;
                PassPool.set(this.handle, PassView.DEPTH_STENCIL_STATE, dss.handle);
                this._passIndex = target.passIndex;
                this._propertyIndex = target.propertyIndex;
                this._programName = target.program;
                this._defines = target.defines;
                this._shaderInfo = target._shaderInfo;
                this._properties = target._properties;
                this._blocks = target._blocks;
                this._dynamics = target._dynamics;
                this._hShaderDefault = target._hShaderDefault;
                PassPool.set(this._handle, PassView.PIPELINE_LAYOUT, programLib.getTemplateInfo(this._programName).hPipelineLayout);
                var hash = PassPool.get(target.handle, PassView.HASH);
                PassPool.set(this._handle, PassView.HASH, hash ^ hashFactor);
              };

              _createClass(Pass, [{
                key: "root",
                get: function get() {
                  return this._root;
                }
              }, {
                key: "device",
                get: function get() {
                  return this._device;
                }
              }, {
                key: "shaderInfo",
                get: function get() {
                  return this._shaderInfo;
                }
              }, {
                key: "localSetLayout",
                get: function get() {
                  return programLib.getDescriptorSetLayout(this._device, this._programName, true);
                }
              }, {
                key: "program",
                get: function get() {
                  return this._programName;
                }
              }, {
                key: "properties",
                get: function get() {
                  return this._properties;
                }
              }, {
                key: "defines",
                get: function get() {
                  return this._defines;
                }
              }, {
                key: "passIndex",
                get: function get() {
                  return this._passIndex;
                }
              }, {
                key: "propertyIndex",
                get: function get() {
                  return this._propertyIndex;
                }
              }, {
                key: "dynamics",
                get: function get() {
                  return this._dynamics;
                }
              }, {
                key: "blocks",
                get: function get() {
                  return this._blocks;
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._handle;
                }
              }, {
                key: "priority",
                get: function get() {
                  return PassPool.get(this._handle, PassView.PRIORITY);
                }
              }, {
                key: "primitive",
                get: function get() {
                  return PassPool.get(this._handle, PassView.PRIMITIVE);
                }
              }, {
                key: "stage",
                get: function get() {
                  return PassPool.get(this._handle, PassView.STAGE);
                }
              }, {
                key: "phase",
                get: function get() {
                  return PassPool.get(this._handle, PassView.PHASE);
                }
              }, {
                key: "rasterizerState",
                get: function get() {
                  return this._rs;
                }
              }, {
                key: "depthStencilState",
                get: function get() {
                  return this._dss;
                }
              }, {
                key: "blendState",
                get: function get() {
                  return this._bs;
                }
              }, {
                key: "dynamicStates",
                get: function get() {
                  return PassPool.get(this._handle, PassView.DYNAMIC_STATES);
                }
              }, {
                key: "batchingScheme",
                get: function get() {
                  return PassPool.get(this._handle, PassView.BATCHING_SCHEME);
                }
              }, {
                key: "descriptorSet",
                get: function get() {
                  return this._descriptorSet;
                }
              }, {
                key: "hash",
                get: function get() {
                  return PassPool.get(this._handle, PassView.HASH);
                }
              }, {
                key: "rootBufferDirty",
                get: function get() {
                  return this._rootBufferDirty;
                }
              }]);

              return Pass;
            }());
            Pass.PropertyType = PropertyType;
            Pass.getPropertyTypeFromHandle = getPropertyTypeFromHandle;
            Pass.getTypeFromHandle = getTypeFromHandle;
            Pass.getBindingFromHandle = getBindingFromHandle;
            Pass.getOffsetFromHandle = getOffsetFromHandle;

            function serializeBlendState(bs) {
              var res = ",bs," + bs.isA2C;

              for (var _iterator = _createForOfIteratorHelperLoose(bs.targets), _step; !(_step = _iterator()).done;) {
                var t = _step.value;
                res += ",bt," + t.blend + "," + t.blendEq + "," + t.blendAlphaEq + "," + t.blendColorMask;
                res += "," + t.blendSrc + "," + t.blendDst + "," + t.blendSrcAlpha + "," + t.blendDstAlpha;
              }

              return res;
            }

            function serializeRasterizerState(rs) {
              return ",rs," + rs.cullMode + "," + rs.depthBias + "," + rs.isFrontFaceCCW;
            }

            function serializeDepthStencilState(dss) {
              var res = ",dss," + dss.depthTest + "," + dss.depthWrite + "," + dss.depthFunc;
              res += "," + dss.stencilTestFront + "," + dss.stencilFuncFront + "," + dss.stencilRefFront + "," + dss.stencilReadMaskFront;
              res += "," + dss.stencilFailOpFront + "," + dss.stencilZFailOpFront + "," + dss.stencilPassOpFront + "," + dss.stencilWriteMaskFront;
              res += "," + dss.stencilTestBack + "," + dss.stencilFuncBack + "," + dss.stencilRefBack + "," + dss.stencilReadMaskBack;
              res += "," + dss.stencilFailOpBack + "," + dss.stencilZFailOpBack + "," + dss.stencilPassOpBack + "," + dss.stencilWriteMaskBack;
              return res;
            }

            var _dec$5, _class$5, _class2$4, _descriptor$3, _descriptor2$1, _descriptor3$1, _descriptor4$1, _class3$3, _temp$5;
            var EffectAsset = exports('E', (_dec$5 = ccclass('cc.EffectAsset'), _dec$5(_class$5 = (_class2$4 = (_temp$5 = _class3$3 = function (_Asset) {
              _inheritsLoose(EffectAsset, _Asset);

              function EffectAsset() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "techniques", _descriptor$3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "shaders", _descriptor2$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "combinations", _descriptor3$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "hideInEditor", _descriptor4$1, _assertThisInitialized(_this));

                return _this;
              }

              EffectAsset.register = function register(asset) {
                EffectAsset._effects[asset.name] = asset;
              };

              EffectAsset.remove = function remove(name) {
                if (EffectAsset._effects[name]) {
                  delete EffectAsset._effects[name];
                  return;
                }

                for (var n in EffectAsset._effects) {
                  if (EffectAsset._effects[n]._uuid === name) {
                    delete EffectAsset._effects[n];
                    return;
                  }
                }
              };

              EffectAsset.get = function get(name) {
                if (EffectAsset._effects[name]) {
                  return EffectAsset._effects[name];
                }

                for (var n in EffectAsset._effects) {
                  if (EffectAsset._effects[n]._uuid === name) {
                    return EffectAsset._effects[n];
                  }
                }

                return null;
              };

              EffectAsset.getAll = function getAll() {
                return EffectAsset._effects;
              };

              var _proto = EffectAsset.prototype;

              _proto.onLoaded = function onLoaded() {
                programLib.register(this);
                EffectAsset.register(this);

                {
                  legacyCC.game.once(legacyCC.Game.EVENT_ENGINE_INITED, this._precompile, this);
                }
              };

              _proto._precompile = function _precompile() {
                var _this2 = this;

                var root = legacyCC.director.root;

                var _loop = function _loop(i) {
                  var shader = _this2.shaders[i];
                  var combination = _this2.combinations[i];

                  if (!combination) {
                    return "continue";
                  }

                  Object.keys(combination).reduce(function (out, name) {
                    return out.reduce(function (acc, cur) {
                      var choices = combination[name];
                      var next = [cur].concat([].concat(Array(choices.length - 1)).map(function () {
                        return _extends({}, cur);
                      }));
                      next.forEach(function (defines, idx) {
                        return defines[name] = choices[idx];
                      });
                      return acc.concat(next);
                    }, []);
                  }, [{}]).forEach(function (defines) {
                    return programLib.getGFXShader(root.device, shader.name, defines, root.pipeline);
                  });
                };

                for (var i = 0; i < this.shaders.length; i++) {
                  var _ret = _loop(i);

                  if (_ret === "continue") continue;
                }
              };

              _proto.destroy = function destroy() {
                EffectAsset.remove(this.name);
                return _Asset.prototype.destroy.call(this);
              };

              return EffectAsset;
            }(Asset), _class3$3._effects = {}, _temp$5), (_descriptor$3 = _applyDecoratedDescriptor(_class2$4.prototype, "techniques", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$4.prototype, "shaders", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$4.prototype, "combinations", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$4.prototype, "hideInEditor", [serializable, editorOnly], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            })), _class2$4)) || _class$5));
            legacyCC.EffectAsset = EffectAsset;

            var _dec$6, _dec2$1, _dec3, _dec4, _dec5, _class$6, _class2$5, _descriptor$4, _descriptor2$2, _temp$6;
            var idGenerator$1 = new IDGenerator('RenderTex');

            var _colorAttachment = new ColorAttachment();

            _colorAttachment.endLayout = TextureLayout.SHADER_READONLY_OPTIMAL;

            var _depthStencilAttachment = new DepthStencilAttachment();

            var passInfo = new RenderPassInfo([_colorAttachment], _depthStencilAttachment);
            var _windowInfo = {
              width: 1,
              height: 1,
              renderPassInfo: passInfo
            };
            var RenderTexture = exports('v', (_dec$6 = ccclass('cc.RenderTexture'), _dec2$1 = rangeMin(1), _dec3 = rangeMax(2048), _dec4 = rangeMin(1), _dec5 = rangeMax(2048), _dec$6(_class$6 = (_class2$5 = (_temp$6 = function (_Asset) {
              _inheritsLoose(RenderTexture, _Asset);

              function RenderTexture() {
                var _this;

                _this = _Asset.call(this) || this;

                _initializerDefineProperty(_this, "_width", _descriptor$4, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_height", _descriptor2$2, _assertThisInitialized(_this));

                _this._textureHash = 0;
                _this._id = void 0;
                _this._window = null;
                _this._id = idGenerator$1.getNewId();
                _this._textureHash = murmurhash2_32_gc(_this._id, 666);
                return _this;
              }

              var _proto = RenderTexture.prototype;

              _proto.getHash = function getHash() {
                return this._textureHash;
              };

              _proto.initialize = function initialize(info) {
                this._name = info.name || '';
                this._width = info.width;
                this._height = info.height;

                this._initWindow(info);
              };

              _proto.reset = function reset(info) {
                this.initialize(info);
              };

              _proto.destroy = function destroy() {
                if (this._window) {
                  var root = legacyCC.director.root;
                  root.destroyWindow(this._window);
                  this._window = null;
                }

                return _Asset.prototype.destroy.call(this);
              };

              _proto.resize = function resize(width, height) {
                this._width = width;
                this._height = height;

                if (this._window) {
                  this._window.resize(width, height);
                }

                this.emit('resize', this._window);
              };

              _proto.getGFXTexture = function getGFXTexture() {
                return this._window && this._window.framebuffer.colorTextures[0];
              };

              _proto.getGFXSampler = function getGFXSampler() {
                var root = legacyCC.director.root;
                return samplerLib.getSampler(root.device, defaultSamplerHash);
              };

              _proto.getSamplerHash = function getSamplerHash() {
                return defaultSamplerHash;
              };

              _proto.onLoaded = function onLoaded() {
                this._initWindow();

                this.loaded = true;
                this.emit('load');
              };

              _proto._initWindow = function _initWindow(info) {
                var root = legacyCC.director.root;
                _windowInfo.title = this._name;
                _windowInfo.width = this._width;
                _windowInfo.height = this._height;
                _windowInfo.renderPassInfo = info && info.passInfo ? info.passInfo : passInfo;

                if (this._window) {
                  this._window.destroy();

                  this._window.initialize(root.device, _windowInfo);
                } else {
                  this._window = root.createWindow(_windowInfo);
                }
              };

              _createClass(RenderTexture, [{
                key: "width",
                get: function get() {
                  return this._width;
                }
              }, {
                key: "height",
                get: function get() {
                  return this._height;
                }
              }, {
                key: "window",
                get: function get() {
                  return this._window;
                }
              }]);

              return RenderTexture;
            }(Asset), _temp$6), (_descriptor$4 = _applyDecoratedDescriptor(_class2$5.prototype, "_width", [serializable, _dec2$1, _dec3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$5.prototype, "_height", [serializable, _dec4, _dec5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            })), _class2$5)) || _class$6));
            legacyCC.RenderTexture = RenderTexture;

            var _dec$7, _dec2$2, _class$7, _class2$6, _descriptor$5, _descriptor2$3, _descriptor3$2, _descriptor4$2, _descriptor5$1, _temp$7;
            var Material = exports('M', (_dec$7 = ccclass('cc.Material'), _dec2$2 = type(EffectAsset), _dec$7(_class$7 = (_class2$6 = (_temp$7 = function (_Asset) {
              _inheritsLoose(Material, _Asset);

              Material.getHash = function getHash(material) {
                var hash = 0;

                for (var _iterator = _createForOfIteratorHelperLoose(material.passes), _step; !(_step = _iterator()).done;) {
                  var pass = _step.value;
                  hash ^= pass.hash;
                }

                return hash;
              };

              function Material() {
                var _this;

                _this = _Asset.call(this) || this;

                _initializerDefineProperty(_this, "_effectAsset", _descriptor$5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_techIdx", _descriptor2$3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_defines", _descriptor3$2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_states", _descriptor4$2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_props", _descriptor5$1, _assertThisInitialized(_this));

                _this._passes = [];
                _this._hash = 0;
                _this.loaded = false;
                return _this;
              }

              var _proto = Material.prototype;

              _proto.initialize = function initialize(info) {
                if (!this._defines) {
                  this._defines = [];
                }

                if (!this._states) {
                  this._states = [];
                }

                if (!this._props) {
                  this._props = [];
                }

                if (info.technique !== undefined) {
                  this._techIdx = info.technique;
                }

                if (info.effectAsset) {
                  this._effectAsset = info.effectAsset;
                } else if (info.effectName) {
                  this._effectAsset = EffectAsset.get(info.effectName);
                }

                if (info.defines) {
                  this._prepareInfo(info.defines, this._defines);
                }

                if (info.states) {
                  this._prepareInfo(info.states, this._states);
                }

                this._update();
              };

              _proto.reset = function reset(info) {
                this.initialize(info);
              };

              _proto.destroy = function destroy() {
                this._doDestroy();

                return _Asset.prototype.destroy.call(this);
              };

              _proto.recompileShaders = function recompileShaders(overrides, passIdx) {
                console.warn("Shaders in material asset '" + this.name + "' cannot be modified at runtime, please instantiate the material first.");
              };

              _proto.overridePipelineStates = function overridePipelineStates(overrides, passIdx) {
                console.warn("Pipeline states in material asset '" + this.name + "' cannot be modified at runtime, please instantiate the material first.");
              };

              _proto.onLoaded = function onLoaded() {
                this._update();

                this.loaded = true;
                this.emit('load');
              };

              _proto.resetUniforms = function resetUniforms(clearPasses) {
                if (clearPasses === void 0) {
                  clearPasses = true;
                }

                this._props.length = this._passes.length;

                for (var i = 0; i < this._props.length; i++) {
                  this._props[i] = {};
                }

                if (!clearPasses) {
                  return;
                }

                for (var _iterator2 = _createForOfIteratorHelperLoose(this._passes), _step2; !(_step2 = _iterator2()).done;) {
                  var pass = _step2.value;
                  pass.resetUBOs();
                  pass.resetTextures();
                }
              };

              _proto.setProperty = function setProperty(name, val, passIdx) {
                var success = false;

                if (passIdx === undefined) {
                  var passes = this._passes;
                  var len = passes.length;

                  for (var i = 0; i < len; i++) {
                    var pass = passes[i];

                    if (this._uploadProperty(pass, name, val)) {
                      this._props[pass.propertyIndex][name] = val;
                      success = true;
                    }
                  }
                } else {
                  if (passIdx >= this._passes.length) {
                    console.warn("illegal pass index: " + passIdx + ".");
                    return;
                  }

                  var _pass = this._passes[passIdx];

                  if (this._uploadProperty(_pass, name, val)) {
                    this._props[_pass.propertyIndex][name] = val;
                    success = true;
                  }
                }

                if (!success) {
                  console.warn("illegal property name: " + name + ".");
                }
              };

              _proto.getProperty = function getProperty(name, passIdx) {
                if (passIdx === undefined) {
                  var propsArray = this._props;
                  var len = propsArray.length;

                  for (var i = 0; i < len; i++) {
                    var props = propsArray[i];

                    if (name in props) {
                      return props[name];
                    }
                  }
                } else {
                  if (passIdx >= this._props.length) {
                    console.warn("illegal pass index: " + passIdx + ".");
                    return null;
                  }

                  var _props = this._props[this._passes[passIdx].propertyIndex];

                  if (name in _props) {
                    return _props[name];
                  }
                }

                return null;
              };

              _proto.copy = function copy(mat) {
                this._techIdx = mat._techIdx;
                this._props.length = mat._props.length;

                for (var i = 0; i < mat._props.length; i++) {
                  this._props[i] = _extends({}, mat._props[i]);
                }

                this._defines.length = mat._defines.length;

                for (var _i = 0; _i < mat._defines.length; _i++) {
                  this._defines[_i] = _extends({}, mat._defines[_i]);
                }

                this._states.length = mat._states.length;

                for (var _i2 = 0; _i2 < mat._states.length; _i2++) {
                  this._states[_i2] = _extends({}, mat._states[_i2]);
                }

                this._effectAsset = mat._effectAsset;

                this._update();
              };

              _proto._prepareInfo = function _prepareInfo(patch, cur) {
                var patchArray = patch;

                if (!Array.isArray(patchArray)) {
                  var len = this._effectAsset ? this._effectAsset.techniques[this._techIdx].passes.length : 1;
                  patchArray = Array(len).fill(patchArray);
                }

                for (var i = 0; i < patchArray.length; ++i) {
                  Object.assign(cur[i] || (cur[i] = {}), patchArray[i]);
                }
              };

              _proto._createPasses = function _createPasses() {
                var tech = this._effectAsset.techniques[this._techIdx || 0];

                if (!tech) {
                  return [];
                }

                var passNum = tech.passes.length;
                var passes = [];

                for (var k = 0; k < passNum; ++k) {
                  var passInfo = tech.passes[k];
                  var propIdx = passInfo.passIndex = k;
                  var defines = passInfo.defines = this._defines[propIdx] || (this._defines[propIdx] = {});
                  var states = passInfo.stateOverrides = this._states[propIdx] || (this._states[propIdx] = {});

                  if (passInfo.propertyIndex !== undefined) {
                    Object.assign(defines, this._defines[passInfo.propertyIndex]);
                    Object.assign(states, this._states[passInfo.propertyIndex]);
                  }

                  if (passInfo.embeddedMacros !== undefined) {
                    Object.assign(defines, passInfo.embeddedMacros);
                  }

                  if (passInfo["switch"] && !defines[passInfo["switch"]]) {
                    continue;
                  }

                  var pass = new Pass(legacyCC.director.root);
                  pass.initialize(passInfo);
                  passes.push(pass);
                }

                return passes;
              };

              _proto._update = function _update(keepProps) {
                var _this2 = this;

                if (keepProps === void 0) {
                  keepProps = true;
                }

                if (this._effectAsset) {
                  if (this._passes && this._passes.length) {
                    for (var _iterator3 = _createForOfIteratorHelperLoose(this._passes), _step3; !(_step3 = _iterator3()).done;) {
                      var pass = _step3.value;
                      pass.destroy();
                    }
                  }

                  this._passes = this._createPasses();
                  var totalPasses = this._effectAsset.techniques[this._techIdx].passes.length;
                  this._props.length = totalPasses;

                  if (keepProps) {
                    this._passes.forEach(function (pass, i) {
                      var props = _this2._props[i];

                      if (!props) {
                        props = _this2._props[i] = {};
                      }

                      if (pass.propertyIndex !== undefined) {
                        Object.assign(props, _this2._props[pass.propertyIndex]);
                      }

                      for (var p in props) {
                        _this2._uploadProperty(pass, p, props[p]);
                      }
                    });
                  } else {
                    for (var i = 0; i < this._props.length; i++) {
                      this._props[i] = {};
                    }
                  }
                } else {
                  var missing = builtinResMgr.get('missing-effect-material');

                  if (missing) {
                    this._passes = missing._passes.slice();
                  }
                }

                this._hash = Material.getHash(this);
              };

              _proto._uploadProperty = function _uploadProperty(pass, name, val) {
                var handle = pass.getHandle(name);

                if (!handle) {
                  return false;
                }

                var propertyType = Pass.getPropertyTypeFromHandle(handle);

                if (propertyType === PropertyType.UBO) {
                  if (Array.isArray(val)) {
                    pass.setUniformArray(handle, val);
                  } else if (val !== null) {
                    pass.setUniform(handle, val);
                  } else {
                    pass.resetUniform(name);
                  }
                } else if (propertyType === PropertyType.SAMPLER) {
                  if (Array.isArray(val)) {
                    for (var i = 0; i < val.length; i++) {
                      this._bindTexture(pass, handle, val[i], i);
                    }
                  } else if (val) {
                    this._bindTexture(pass, handle, val);
                  } else {
                    pass.resetTexture(name);
                  }
                }

                return true;
              };

              _proto._bindTexture = function _bindTexture(pass, handle, val, index) {
                var binding = Pass.getBindingFromHandle(handle);

                if (val instanceof Texture) {
                  pass.bindTexture(binding, val, index);
                } else if (val instanceof TextureBase || val instanceof RenderTexture) {
                  var texture = val.getGFXTexture();

                  if (!texture || !texture.width || !texture.height) {
                    return;
                  }

                  pass.bindTexture(binding, texture, index);
                  pass.bindSampler(binding, val.getGFXSampler(), index);
                }
              };

              _proto._doDestroy = function _doDestroy() {
                if (this._passes && this._passes.length) {
                  for (var _iterator4 = _createForOfIteratorHelperLoose(this._passes), _step4; !(_step4 = _iterator4()).done;) {
                    var pass = _step4.value;
                    pass.destroy();
                  }
                }

                this._effectAsset = null;
                this._passes.length = 0;
                this._props.length = 0;
                this._defines.length = 0;
                this._states.length = 0;
              };

              _createClass(Material, [{
                key: "effectAsset",
                get: function get() {
                  return this._effectAsset;
                }
              }, {
                key: "effectName",
                get: function get() {
                  return this._effectAsset ? this._effectAsset.name : '';
                }
              }, {
                key: "technique",
                get: function get() {
                  return this._techIdx;
                }
              }, {
                key: "passes",
                get: function get() {
                  return this._passes;
                }
              }, {
                key: "hash",
                get: function get() {
                  return this._hash;
                }
              }, {
                key: "parent",
                get: function get() {
                  return null;
                }
              }, {
                key: "owner",
                get: function get() {
                  return null;
                }
              }]);

              return Material;
            }(Asset), _temp$7), (_descriptor$5 = _applyDecoratedDescriptor(_class2$6.prototype, "_effectAsset", [_dec2$2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$6.prototype, "_techIdx", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$6.prototype, "_defines", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$6.prototype, "_states", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$6.prototype, "_props", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            })), _class2$6)) || _class$7));
            legacyCC.Material = Material;

            removeProperty(TextureBase.prototype, 'TextureBase.prototype', [{
              name: 'hasPremultipliedAlpha'
            }, {
              name: 'setPremultiplyAlpha'
            }, {
              name: 'setFlipY'
            }]);
            replaceProperty(RenderTexture.prototype, 'RenderTexture.prototype', [{
              name: 'getGFXWindow',
              customFunction: function customFunction() {
                return this._window;
              }
            }]);

            var _dec$8, _class$8, _class2$7, _temp$8;
            var BufferAsset = exports('n', (_dec$8 = ccclass('cc.BufferAsset'), _dec$8(_class$8 = (_class2$7 = (_temp$8 = function (_Asset) {
              _inheritsLoose(BufferAsset, _Asset);

              function BufferAsset() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;
                _this._buffer = null;
                return _this;
              }

              var _proto = BufferAsset.prototype;

              _proto.buffer = function buffer() {
                return this._buffer;
              };

              _createClass(BufferAsset, [{
                key: "_nativeAsset",
                get: function get() {
                  return this._buffer;
                },
                set: function set(bin) {
                  if (bin instanceof ArrayBuffer) {
                    this._buffer = bin;
                  } else {
                    this._buffer = bin.buffer;
                  }
                }
              }]);

              return BufferAsset;
            }(Asset), _temp$8), (_applyDecoratedDescriptor(_class2$7.prototype, "_nativeAsset", [override], Object.getOwnPropertyDescriptor(_class2$7.prototype, "_nativeAsset"), _class2$7.prototype)), _class2$7)) || _class$8));
            legacyCC.BufferAsset = BufferAsset;

            var _typeMap2;

            var _typeMap = (_typeMap2 = {}, _typeMap2[FormatType.UNORM] = 'Uint', _typeMap2[FormatType.SNORM] = 'Int', _typeMap2[FormatType.UINT] = 'Uint', _typeMap2[FormatType.INT] = 'Int', _typeMap2[FormatType.UFLOAT] = 'Float', _typeMap2[FormatType.FLOAT] = 'Float', _typeMap2["default"] = 'Uint', _typeMap2);

            function _getDataViewType(info) {
              var type = _typeMap[info.type] || _typeMap["default"];
              var bytes = info.size / info.count * 8;
              return type + bytes;
            }

            function writeBuffer(target, data, format, offset, stride) {
              if (format === void 0) {
                format = Format.R32F;
              }

              if (offset === void 0) {
                offset = 0;
              }

              if (stride === void 0) {
                stride = 0;
              }

              var info = FormatInfos[format];

              if (!stride) {
                stride = info.size;
              }

              var writer = "set" + _getDataViewType(info);

              var componentBytesLength = info.size / info.count;
              var nSeg = Math.floor(data.length / info.count);
              var isLittleEndian = sys.isLittleEndian;

              for (var iSeg = 0; iSeg < nSeg; ++iSeg) {
                var x = offset + stride * iSeg;

                for (var iComponent = 0; iComponent < info.count; ++iComponent) {
                  var y = x + componentBytesLength * iComponent;
                  target[writer](y, data[info.count * iSeg + iComponent], isLittleEndian);
                }
              }
            }
            function readBuffer(target, format, offset, length, stride, out) {
              if (format === void 0) {
                format = Format.R32F;
              }

              if (offset === void 0) {
                offset = 0;
              }

              if (length === void 0) {
                length = target.byteLength - offset;
              }

              if (stride === void 0) {
                stride = 0;
              }

              if (out === void 0) {
                out = [];
              }

              var info = FormatInfos[format];

              if (!stride) {
                stride = info.size;
              }

              var reader = "get" + _getDataViewType(info);

              var componentBytesLength = info.size / info.count;
              var nSeg = Math.floor(length / stride);
              var isLittleEndian = sys.isLittleEndian;

              for (var iSeg = 0; iSeg < nSeg; ++iSeg) {
                var x = offset + stride * iSeg;

                for (var iComponent = 0; iComponent < info.count; ++iComponent) {
                  var y = x + componentBytesLength * iComponent;
                  out[info.count * iSeg + iComponent] = target[reader](y, isLittleEndian);
                }
              }

              return out;
            }
            function mapBuffer(target, callback, format, offset, length, stride, out) {
              if (format === void 0) {
                format = Format.R32F;
              }

              if (offset === void 0) {
                offset = 0;
              }

              if (length === void 0) {
                length = target.byteLength - offset;
              }

              if (stride === void 0) {
                stride = 0;
              }

              if (!out) {
                out = new DataView(target.buffer.slice(target.byteOffset, target.byteOffset + target.byteLength));
              }

              var info = FormatInfos[format];

              if (!stride) {
                stride = info.size;
              }

              var writer = "set" + _getDataViewType(info);

              var reader = "get" + _getDataViewType(info);

              var componentBytesLength = info.size / info.count;
              var nSeg = Math.floor(length / stride);
              var isLittleEndian = sys.isLittleEndian;

              for (var iSeg = 0; iSeg < nSeg; ++iSeg) {
                var x = offset + stride * iSeg;

                for (var iComponent = 0; iComponent < info.count; ++iComponent) {
                  var y = x + componentBytesLength * iComponent;

                  var _cur = target[reader](y, isLittleEndian);

                  out[writer](y, callback(_cur, iComponent, target), isLittleEndian);
                }
              }

              return out;
            }

            var RenderingSubMesh = exports('R', function () {
              function RenderingSubMesh(vertexBuffers, attributes, primitiveMode, indexBuffer, indirectBuffer) {
                if (indexBuffer === void 0) {
                  indexBuffer = null;
                }

                if (indirectBuffer === void 0) {
                  indirectBuffer = null;
                }

                this.mesh = void 0;
                this.subMeshIdx = void 0;
                this._flatBuffers = [];
                this._jointMappedBuffers = void 0;
                this._jointMappedBufferIndices = void 0;
                this._vertexIdChannel = void 0;
                this._geometricInfo = void 0;
                this._vertexBuffers = void 0;
                this._attributes = void 0;
                this._indexBuffer = null;
                this._indirectBuffer = null;
                this._primitiveMode = void 0;
                this._iaInfo = void 0;
                this._handle = NULL_HANDLE;
                this._attributes = attributes;
                this._vertexBuffers = vertexBuffers;
                this._indexBuffer = indexBuffer;
                this._indirectBuffer = indirectBuffer;
                this._primitiveMode = primitiveMode;
                this._iaInfo = new InputAssemblerInfo(attributes, vertexBuffers, indexBuffer, indirectBuffer);
                this._handle = SubMeshPool.alloc();
                var fbArrayHandle = FlatBufferArrayPool.alloc();
                SubMeshPool.set(this._handle, SubMeshView.FLAT_BUFFER_ARRAY, fbArrayHandle);
              }

              var _proto = RenderingSubMesh.prototype;

              _proto.genFlatBuffers = function genFlatBuffers() {
                if (this._flatBuffers.length || !this.mesh || this.subMeshIdx === undefined) {
                  return;
                }

                var mesh = this.mesh;
                var idxCount = 0;
                var prim = mesh.struct.primitives[this.subMeshIdx];
                var fbArrayHandle = SubMeshPool.get(this._handle, SubMeshView.FLAT_BUFFER_ARRAY);

                if (prim.indexView) {
                  idxCount = prim.indexView.count;
                }

                for (var i = 0; i < prim.vertexBundelIndices.length; i++) {
                  var bundleIdx = prim.vertexBundelIndices[i];
                  var vertexBundle = mesh.struct.vertexBundles[bundleIdx];
                  var vbCount = prim.indexView ? prim.indexView.count : vertexBundle.view.count;
                  var vbStride = vertexBundle.view.stride;
                  var vbSize = vbStride * vbCount;
                  var view = new Uint8Array(mesh.data.buffer, vertexBundle.view.offset, vertexBundle.view.length);
                  var hBuffer = RawBufferPool.alloc(prim.indexView ? vbSize : vertexBundle.view.length);
                  var hFlatBuffer = FlatBufferPool.alloc();
                  FlatBufferPool.set(hFlatBuffer, FlatBufferView.STRIDE, vbStride);
                  FlatBufferPool.set(hFlatBuffer, FlatBufferView.AMOUNT, vbCount);
                  FlatBufferPool.set(hFlatBuffer, FlatBufferView.BUFFER, hBuffer);
                  FlatBufferArrayPool.push(fbArrayHandle, hFlatBuffer);
                  var buffer = RawBufferPool.getBuffer(hBuffer);
                  var sharedView = new Uint8Array(buffer);

                  if (!prim.indexView) {
                    sharedView.set(mesh.data.subarray(vertexBundle.view.offset, vertexBundle.view.offset + vertexBundle.view.length));

                    this._flatBuffers.push({
                      stride: vbStride,
                      count: vbCount,
                      buffer: sharedView
                    });

                    continue;
                  }

                  var ibView = mesh.readIndices(this.subMeshIdx);

                  for (var n = 0; n < idxCount; ++n) {
                    var idx = ibView[n];
                    var offset = n * vbStride;
                    var srcOffset = idx * vbStride;

                    for (var m = 0; m < vbStride; ++m) {
                      sharedView[offset + m] = view[srcOffset + m];
                    }
                  }

                  this._flatBuffers.push({
                    stride: vbStride,
                    count: vbCount,
                    buffer: sharedView
                  });
                }
              };

              _proto.destroy = function destroy() {
                for (var i = 0; i < this.vertexBuffers.length; i++) {
                  this.vertexBuffers[i].destroy();
                }

                this.vertexBuffers.length = 0;

                if (this._indexBuffer) {
                  this._indexBuffer.destroy();

                  this._indexBuffer = null;
                }

                if (this._jointMappedBuffers && this._jointMappedBufferIndices) {
                  for (var _i = 0; _i < this._jointMappedBufferIndices.length; _i++) {
                    this._jointMappedBuffers[this._jointMappedBufferIndices[_i]].destroy();
                  }

                  this._jointMappedBuffers = undefined;
                  this._jointMappedBufferIndices = undefined;
                }

                if (this._indirectBuffer) {
                  this._indirectBuffer.destroy();

                  this._indirectBuffer = null;
                }

                if (this._handle) {
                  var fbArrayHandle = SubMeshPool.get(this._handle, SubMeshView.FLAT_BUFFER_ARRAY);
                  freeHandleArray(fbArrayHandle, FlatBufferArrayPool, FlatBufferPool);
                  SubMeshPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }
              };

              _proto.enableVertexIdChannel = function enableVertexIdChannel(device) {
                if (this._vertexIdChannel) {
                  return;
                }

                var streamIndex = this.vertexBuffers.length;
                var attributeIndex = this.attributes.length;

                var vertexIdBuffer = this._allocVertexIdBuffer(device);

                this._vertexBuffers.push(vertexIdBuffer);

                this._attributes.push(new Attribute('a_vertexId', Format.R32F, false, streamIndex));

                this._iaInfo.attributes = this._attributes;
                this._iaInfo.vertexBuffers = this._vertexBuffers;
                this._vertexIdChannel = {
                  stream: streamIndex,
                  index: attributeIndex
                };
              };

              _proto._allocVertexIdBuffer = function _allocVertexIdBuffer(device) {
                var vertexCount = this.vertexBuffers.length === 0 || this.vertexBuffers[0].stride === 0 ? 0 : this.vertexBuffers[0].size / this.vertexBuffers[0].stride;
                var vertexIds = new Float32Array(vertexCount);

                for (var iVertex = 0; iVertex < vertexCount; ++iVertex) {
                  vertexIds[iVertex] = iVertex + 0.5;
                }

                var vertexIdBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, vertexIds.byteLength, vertexIds.BYTES_PER_ELEMENT));
                vertexIdBuffer.update(vertexIds);
                return vertexIdBuffer;
              };

              _createClass(RenderingSubMesh, [{
                key: "attributes",
                get: function get() {
                  return this._attributes;
                }
              }, {
                key: "vertexBuffers",
                get: function get() {
                  return this._vertexBuffers;
                }
              }, {
                key: "indexBuffer",
                get: function get() {
                  return this._indexBuffer;
                }
              }, {
                key: "indirectBuffer",
                get: function get() {
                  return this._indirectBuffer;
                }
              }, {
                key: "primitiveMode",
                get: function get() {
                  return this._primitiveMode;
                }
              }, {
                key: "geometricInfo",
                get: function get() {
                  if (this._geometricInfo) {
                    return this._geometricInfo;
                  }

                  if (this.mesh === undefined) {
                    return {
                      positions: new Float32Array(),
                      indices: new Uint8Array(),
                      boundingBox: {
                        min: Vec3.ZERO,
                        max: Vec3.ZERO
                      }
                    };
                  }

                  if (this.subMeshIdx === undefined) {
                    return {
                      positions: new Float32Array(),
                      indices: new Uint8Array(),
                      boundingBox: {
                        min: Vec3.ZERO,
                        max: Vec3.ZERO
                      }
                    };
                  }

                  var mesh = this.mesh;
                  var index = this.subMeshIdx;
                  var positions = mesh.readAttribute(index, AttributeName.ATTR_POSITION);
                  var indices = mesh.readIndices(index);
                  var max = new Vec3();
                  var min = new Vec3();
                  var pAttri = this.attributes.find(function (element) {
                    return element.name === AttributeName.ATTR_POSITION;
                  });

                  if (pAttri) {
                    var conut = FormatInfos[pAttri.format].count;

                    if (conut === 2) {
                      max.set(positions[0], positions[1], 0);
                      min.set(positions[0], positions[1], 0);
                    } else {
                      max.set(positions[0], positions[1], positions[2]);
                      min.set(positions[0], positions[1], positions[2]);
                    }

                    for (var i = 0; i < positions.length; i += conut) {
                      if (conut === 2) {
                        max.x = positions[i] > max.x ? positions[i] : max.x;
                        max.y = positions[i + 1] > max.y ? positions[i + 1] : max.y;
                        min.x = positions[i] < min.x ? positions[i] : min.x;
                        min.y = positions[i + 1] < min.y ? positions[i + 1] : min.y;
                      } else {
                        max.x = positions[i] > max.x ? positions[i] : max.x;
                        max.y = positions[i + 1] > max.y ? positions[i + 1] : max.y;
                        max.z = positions[i + 2] > max.z ? positions[i + 2] : max.z;
                        min.x = positions[i] < min.x ? positions[i] : min.x;
                        min.y = positions[i + 1] < min.y ? positions[i + 1] : min.y;
                        min.z = positions[i + 2] < min.z ? positions[i + 2] : min.z;
                      }
                    }
                  }

                  this._geometricInfo = {
                    positions: positions,
                    indices: indices,
                    boundingBox: {
                      max: max,
                      min: min
                    }
                  };
                  return this._geometricInfo;
                }
              }, {
                key: "flatBuffers",
                get: function get() {
                  return this._flatBuffers;
                }
              }, {
                key: "jointMappedBuffers",
                get: function get() {
                  var _this = this;

                  if (this._jointMappedBuffers) {
                    return this._jointMappedBuffers;
                  }

                  var buffers = this._jointMappedBuffers = [];
                  var indices = this._jointMappedBufferIndices = [];

                  if (!this.mesh || this.subMeshIdx === undefined) {
                    return this._jointMappedBuffers = this.vertexBuffers;
                  }

                  var struct = this.mesh.struct;
                  var prim = struct.primitives[this.subMeshIdx];

                  if (!struct.jointMaps || prim.jointMapIndex === undefined || !struct.jointMaps[prim.jointMapIndex]) {
                    return this._jointMappedBuffers = this.vertexBuffers;
                  }

                  var jointFormat;
                  var jointOffset;
                  var device = legacyCC.director.root.device;

                  for (var i = 0; i < prim.vertexBundelIndices.length; i++) {
                    var bundle = struct.vertexBundles[prim.vertexBundelIndices[i]];
                    jointOffset = 0;
                    jointFormat = Format.UNKNOWN;

                    for (var j = 0; j < bundle.attributes.length; j++) {
                      var attr = bundle.attributes[j];

                      if (attr.name === AttributeName.ATTR_JOINTS) {
                        jointFormat = attr.format;
                        break;
                      }

                      jointOffset += FormatInfos[attr.format].size;
                    }

                    if (jointFormat) {
                      (function () {
                        var data = new Uint8Array(_this.mesh.data.buffer, bundle.view.offset, bundle.view.length);
                        var dataView = new DataView(data.slice().buffer);
                        var idxMap = struct.jointMaps[prim.jointMapIndex];
                        mapBuffer(dataView, function (cur) {
                          return idxMap.indexOf(cur);
                        }, jointFormat, jointOffset, bundle.view.length, bundle.view.stride, dataView);
                        var buffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, bundle.view.length, bundle.view.stride));
                        buffer.update(dataView.buffer);
                        buffers.push(buffer);
                        indices.push(i);
                      })();
                    } else {
                      buffers.push(this.vertexBuffers[prim.vertexBundelIndices[i]]);
                    }
                  }

                  if (this._vertexIdChannel) {
                    buffers.push(this._allocVertexIdBuffer(device));
                  }

                  return buffers;
                }
              }, {
                key: "iaInfo",
                get: function get() {
                  return this._iaInfo;
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._handle;
                }
              }]);

              return RenderingSubMesh;
            }());

            var _dec$9, _class$9, _class2$8, _descriptor$6, _descriptor2$4, _temp$9;
            var SceneAsset = exports('q', (_dec$9 = ccclass('cc.SceneAsset'), _dec$9(_class$9 = (_class2$8 = (_temp$9 = function (_Asset) {
              _inheritsLoose(SceneAsset, _Asset);

              function SceneAsset() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "scene", _descriptor$6, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "asyncLoadAssets", _descriptor2$4, _assertThisInitialized(_this));

                return _this;
              }

              return SceneAsset;
            }(Asset), _temp$9), (_descriptor$6 = _applyDecoratedDescriptor(_class2$8.prototype, "scene", [editable, serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$8.prototype, "asyncLoadAssets", [editable, serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            })), _class2$8)) || _class$9));
            legacyCC.SceneAsset = SceneAsset;

            var _dec$a, _class$a, _class2$9, _descriptor$7, _temp$a;
            var TextAsset = exports('T', (_dec$a = ccclass('cc.TextAsset'), _dec$a(_class$a = (_class2$9 = (_temp$a = function (_Asset) {
              _inheritsLoose(TextAsset, _Asset);

              function TextAsset() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "text", _descriptor$7, _assertThisInitialized(_this));

                return _this;
              }

              var _proto = TextAsset.prototype;

              _proto.toString = function toString() {
                return this.text;
              };

              return TextAsset;
            }(Asset), _temp$a), (_descriptor$7 = _applyDecoratedDescriptor(_class2$9.prototype, "text", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            })), _class2$9)) || _class$a));
            legacyCC.TextAsset = TextAsset;

            var _dec$b, _class$b, _class2$a, _descriptor$8, _temp$b;
            var JsonAsset = exports('J', (_dec$b = ccclass('cc.JsonAsset'), _dec$b(_class$b = (_class2$a = (_temp$b = function (_Asset) {
              _inheritsLoose(JsonAsset, _Asset);

              function JsonAsset() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "json", _descriptor$8, _assertThisInitialized(_this));

                return _this;
              }

              return JsonAsset;
            }(Asset), _temp$b), (_descriptor$8 = _applyDecoratedDescriptor(_class2$a.prototype, "json", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$a)) || _class$b));
            legacyCC.JsonAsset = JsonAsset;

        }
    };
});
