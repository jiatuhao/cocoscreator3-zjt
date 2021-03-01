System.register("q-bundled:///fs/cocos/core/gfx/define.js", [], function (_export, _context) {
  "use strict";

  var MAX_ATTACHMENTS, ObjectType, Obj, AttributeName, Type, Format, BufferUsageBit, MemoryUsageBit, BufferFlagBit, BufferAccessBit, PrimitiveMode, PolygonMode, ShadeModel, CullMode, ComparisonFunc, StencilOp, BlendOp, BlendFactor, ColorMask, Filter, Address, TextureType, TextureUsageBit, SampleCount, TextureFlagBit, ShaderStageFlagBit, DescriptorType, CommandBufferType, LoadOp, StoreOp, TextureLayout, PipelineBindPoint, DynamicStateFlagBit, StencilFace, QueueType, ClearFlag, FormatType, API, SurfaceTransform, Feature, FormatInfo, MemoryStatus, FormatInfos, _type2size;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * @en Get memory size of the specified fomat.
   * @zh 获取指定格式对应的内存大小。
   * @param format The target format.
   * @param width The target width.
   * @param height The target height.
   * @param depth The target depth.
   */
  function FormatSize(format, width, height, depth) {
    if (!FormatInfos[format].isCompressed) {
      return width * height * depth * FormatInfos[format].size;
    } else {
      switch (format) {
        case Format.BC1:
        case Format.BC1_ALPHA:
        case Format.BC1_SRGB:
        case Format.BC1_SRGB_ALPHA:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 8 * depth;

        case Format.BC2:
        case Format.BC2_SRGB:
        case Format.BC3:
        case Format.BC3_SRGB:
        case Format.BC4:
        case Format.BC4_SNORM:
        case Format.BC6H_SF16:
        case Format.BC6H_UF16:
        case Format.BC7:
        case Format.BC7_SRGB:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;

        case Format.BC5:
        case Format.BC5_SNORM:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 32 * depth;

        case Format.ETC_RGB8:
        case Format.ETC2_RGB8:
        case Format.ETC2_SRGB8:
        case Format.ETC2_RGB8_A1:
        case Format.EAC_R11:
        case Format.EAC_R11SN:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 8 * depth;

        case Format.ETC2_RGBA8:
        case Format.ETC2_SRGB8_A1:
        case Format.EAC_RG11:
        case Format.EAC_RG11SN:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;

        case Format.PVRTC_RGB2:
        case Format.PVRTC_RGBA2:
        case Format.PVRTC2_2BPP:
          return Math.ceil(Math.max(width, 16) * Math.max(height, 8) / 4) * depth;

        case Format.PVRTC_RGB4:
        case Format.PVRTC_RGBA4:
        case Format.PVRTC2_4BPP:
          return Math.ceil(Math.max(width, 8) * Math.max(height, 8) / 2) * depth;

        case Format.ASTC_RGBA_4x4:
        case Format.ASTC_SRGBA_4x4:
          return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;

        case Format.ASTC_RGBA_5x4:
        case Format.ASTC_SRGBA_5x4:
          return Math.ceil(width / 5) * Math.ceil(height / 4) * 16 * depth;

        case Format.ASTC_RGBA_5x5:
        case Format.ASTC_SRGBA_5x5:
          return Math.ceil(width / 5) * Math.ceil(height / 5) * 16 * depth;

        case Format.ASTC_RGBA_6x5:
        case Format.ASTC_SRGBA_6x5:
          return Math.ceil(width / 6) * Math.ceil(height / 5) * 16 * depth;

        case Format.ASTC_RGBA_6x6:
        case Format.ASTC_SRGBA_6x6:
          return Math.ceil(width / 6) * Math.ceil(height / 6) * 16 * depth;

        case Format.ASTC_RGBA_8x5:
        case Format.ASTC_SRGBA_8x5:
          return Math.ceil(width / 8) * Math.ceil(height / 5) * 16 * depth;

        case Format.ASTC_RGBA_8x6:
        case Format.ASTC_SRGBA_8x6:
          return Math.ceil(width / 8) * Math.ceil(height / 6) * 16 * depth;

        case Format.ASTC_RGBA_8x8:
        case Format.ASTC_SRGBA_8x8:
          return Math.ceil(width / 8) * Math.ceil(height / 8) * 16 * depth;

        case Format.ASTC_RGBA_10x5:
        case Format.ASTC_SRGBA_10x5:
          return Math.ceil(width / 10) * Math.ceil(height / 5) * 16 * depth;

        case Format.ASTC_RGBA_10x6:
        case Format.ASTC_SRGBA_10x6:
          return Math.ceil(width / 10) * Math.ceil(height / 6) * 16 * depth;

        case Format.ASTC_RGBA_10x8:
        case Format.ASTC_SRGBA_10x8:
          return Math.ceil(width / 10) * Math.ceil(height / 8) * 16 * depth;

        case Format.ASTC_RGBA_10x10:
        case Format.ASTC_SRGBA_10x10:
          return Math.ceil(width / 10) * Math.ceil(height / 10) * 16 * depth;

        case Format.ASTC_RGBA_12x10:
        case Format.ASTC_SRGBA_12x10:
          return Math.ceil(width / 12) * Math.ceil(height / 10) * 16 * depth;

        case Format.ASTC_RGBA_12x12:
        case Format.ASTC_SRGBA_12x12:
          return Math.ceil(width / 12) * Math.ceil(height / 12) * 16 * depth;

        default:
          {
            return 0;
          }
      }
    }
  }
  /**
   * @en Get memory size of the specified surface.
   * @zh GFX 格式表面内存大小。
   * @param format The target format.
   * @param width The target width.
   * @param height The target height.
   * @param depth The target depth.
   * @param mips The target mip levels.
   */


  function FormatSurfaceSize(format, width, height, depth, mips) {
    var size = 0;

    for (var i = 0; i < mips; ++i) {
      size += FormatSize(format, width, height, depth);
      width = Math.max(width >> 1, 1);
      height = Math.max(height >> 1, 1);
    }

    return size;
  }

  /**
   * @en Get the memory size of the specified type.
   * @zh 得到 GFX 数据类型的大小。
   * @param type The target type.
   */
  function GetTypeSize(type) {
    return _type2size[type] || 0;
  }

  function getTypedArrayConstructor(info) {
    var stride = info.size / info.count;

    switch (info.type) {
      case FormatType.UNORM:
      case FormatType.UINT:
        {
          switch (stride) {
            case 1:
              return Uint8Array;

            case 2:
              return Uint16Array;

            case 4:
              return Uint32Array;
          }

          break;
        }

      case FormatType.SNORM:
      case FormatType.INT:
        {
          switch (stride) {
            case 1:
              return Int8Array;

            case 2:
              return Int16Array;

            case 4:
              return Int32Array;
          }

          break;
        }

      case FormatType.FLOAT:
        {
          return Float32Array;
        }
    }

    return Float32Array;
  }

  _export({
    FormatSize: FormatSize,
    FormatSurfaceSize: FormatSurfaceSize,
    GetTypeSize: GetTypeSize,
    getTypedArrayConstructor: getTypedArrayConstructor,
    ObjectType: void 0,
    AttributeName: void 0,
    Type: void 0,
    Format: void 0,
    BufferUsageBit: void 0,
    MemoryUsageBit: void 0,
    BufferFlagBit: void 0,
    BufferAccessBit: void 0,
    PrimitiveMode: void 0,
    PolygonMode: void 0,
    ShadeModel: void 0,
    CullMode: void 0,
    ComparisonFunc: void 0,
    StencilOp: void 0,
    BlendOp: void 0,
    BlendFactor: void 0,
    ColorMask: void 0,
    Filter: void 0,
    Address: void 0,
    TextureType: void 0,
    TextureUsageBit: void 0,
    SampleCount: void 0,
    TextureFlagBit: void 0,
    ShaderStageFlagBit: void 0,
    DescriptorType: void 0,
    CommandBufferType: void 0,
    LoadOp: void 0,
    StoreOp: void 0,
    TextureLayout: void 0,
    PipelineBindPoint: void 0,
    DynamicStateFlagBit: void 0,
    StencilFace: void 0,
    QueueType: void 0,
    ClearFlag: void 0,
    FormatType: void 0,
    API: void 0,
    SurfaceTransform: void 0,
    Feature: void 0
  });

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
       * @packageDocumentation
       * @module gfx
       */
      _export("MAX_ATTACHMENTS", MAX_ATTACHMENTS = 4);

      (function (ObjectType) {
        ObjectType[ObjectType["UNKNOWN"] = 0] = "UNKNOWN";
        ObjectType[ObjectType["BUFFER"] = 1] = "BUFFER";
        ObjectType[ObjectType["TEXTURE"] = 2] = "TEXTURE";
        ObjectType[ObjectType["RENDER_PASS"] = 3] = "RENDER_PASS";
        ObjectType[ObjectType["FRAMEBUFFER"] = 4] = "FRAMEBUFFER";
        ObjectType[ObjectType["SAMPLER"] = 5] = "SAMPLER";
        ObjectType[ObjectType["SHADER"] = 6] = "SHADER";
        ObjectType[ObjectType["DESCRIPTOR_SET_LAYOUT"] = 7] = "DESCRIPTOR_SET_LAYOUT";
        ObjectType[ObjectType["PIPELINE_LAYOUT"] = 8] = "PIPELINE_LAYOUT";
        ObjectType[ObjectType["PIPELINE_STATE"] = 9] = "PIPELINE_STATE";
        ObjectType[ObjectType["DESCRIPTOR_SET"] = 10] = "DESCRIPTOR_SET";
        ObjectType[ObjectType["INPUT_ASSEMBLER"] = 11] = "INPUT_ASSEMBLER";
        ObjectType[ObjectType["COMMAND_BUFFER"] = 12] = "COMMAND_BUFFER";
        ObjectType[ObjectType["FENCE"] = 13] = "FENCE";
        ObjectType[ObjectType["QUEUE"] = 14] = "QUEUE";
        ObjectType[ObjectType["WINDOW"] = 15] = "WINDOW";
      })(ObjectType || _export("ObjectType", ObjectType = {}));

      /**
       * @en GFX base object.
       * @zh GFX 基类对象。
       */
      _export("Obj", Obj = /*#__PURE__*/function () {
        _createClass(Obj, [{
          key: "gfxType",
          get: function get() {
            return this._gfxType;
          }
        }]);

        function Obj(gfxType) {
          this._gfxType = ObjectType.UNKNOWN;
          this._gfxType = gfxType;
        }

        return Obj;
      }());

      (function (AttributeName) {
        AttributeName["ATTR_POSITION"] = "a_position";
        AttributeName["ATTR_NORMAL"] = "a_normal";
        AttributeName["ATTR_TANGENT"] = "a_tangent";
        AttributeName["ATTR_BITANGENT"] = "a_bitangent";
        AttributeName["ATTR_WEIGHTS"] = "a_weights";
        AttributeName["ATTR_JOINTS"] = "a_joints";
        AttributeName["ATTR_COLOR"] = "a_color";
        AttributeName["ATTR_COLOR1"] = "a_color1";
        AttributeName["ATTR_COLOR2"] = "a_color2";
        AttributeName["ATTR_TEX_COORD"] = "a_texCoord";
        AttributeName["ATTR_TEX_COORD1"] = "a_texCoord1";
        AttributeName["ATTR_TEX_COORD2"] = "a_texCoord2";
        AttributeName["ATTR_TEX_COORD3"] = "a_texCoord3";
        AttributeName["ATTR_TEX_COORD4"] = "a_texCoord4";
        AttributeName["ATTR_TEX_COORD5"] = "a_texCoord5";
        AttributeName["ATTR_TEX_COORD6"] = "a_texCoord6";
        AttributeName["ATTR_TEX_COORD7"] = "a_texCoord7";
        AttributeName["ATTR_TEX_COORD8"] = "a_texCoord8";
        AttributeName["ATTR_BATCH_ID"] = "a_batch_id";
        AttributeName["ATTR_BATCH_UV"] = "a_batch_uv";
      })(AttributeName || _export("AttributeName", AttributeName = {}));

      (function (Type) {
        Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
        Type[Type["BOOL"] = 1] = "BOOL";
        Type[Type["BOOL2"] = 2] = "BOOL2";
        Type[Type["BOOL3"] = 3] = "BOOL3";
        Type[Type["BOOL4"] = 4] = "BOOL4";
        Type[Type["INT"] = 5] = "INT";
        Type[Type["INT2"] = 6] = "INT2";
        Type[Type["INT3"] = 7] = "INT3";
        Type[Type["INT4"] = 8] = "INT4";
        Type[Type["UINT"] = 9] = "UINT";
        Type[Type["UINT2"] = 10] = "UINT2";
        Type[Type["UINT3"] = 11] = "UINT3";
        Type[Type["UINT4"] = 12] = "UINT4";
        Type[Type["FLOAT"] = 13] = "FLOAT";
        Type[Type["FLOAT2"] = 14] = "FLOAT2";
        Type[Type["FLOAT3"] = 15] = "FLOAT3";
        Type[Type["FLOAT4"] = 16] = "FLOAT4";
        Type[Type["MAT2"] = 17] = "MAT2";
        Type[Type["MAT2X3"] = 18] = "MAT2X3";
        Type[Type["MAT2X4"] = 19] = "MAT2X4";
        Type[Type["MAT3X2"] = 20] = "MAT3X2";
        Type[Type["MAT3"] = 21] = "MAT3";
        Type[Type["MAT3X4"] = 22] = "MAT3X4";
        Type[Type["MAT4X2"] = 23] = "MAT4X2";
        Type[Type["MAT4X3"] = 24] = "MAT4X3";
        Type[Type["MAT4"] = 25] = "MAT4";
        Type[Type["SAMPLER1D"] = 26] = "SAMPLER1D";
        Type[Type["SAMPLER1D_ARRAY"] = 27] = "SAMPLER1D_ARRAY";
        Type[Type["SAMPLER2D"] = 28] = "SAMPLER2D";
        Type[Type["SAMPLER2D_ARRAY"] = 29] = "SAMPLER2D_ARRAY";
        Type[Type["SAMPLER3D"] = 30] = "SAMPLER3D";
        Type[Type["SAMPLER_CUBE"] = 31] = "SAMPLER_CUBE";
        Type[Type["COUNT"] = 32] = "COUNT";
      })(Type || _export("Type", Type = {}));

      (function (Format) {
        Format[Format["UNKNOWN"] = 0] = "UNKNOWN";
        Format[Format["A8"] = 1] = "A8";
        Format[Format["L8"] = 2] = "L8";
        Format[Format["LA8"] = 3] = "LA8";
        Format[Format["R8"] = 4] = "R8";
        Format[Format["R8SN"] = 5] = "R8SN";
        Format[Format["R8UI"] = 6] = "R8UI";
        Format[Format["R8I"] = 7] = "R8I";
        Format[Format["R16F"] = 8] = "R16F";
        Format[Format["R16UI"] = 9] = "R16UI";
        Format[Format["R16I"] = 10] = "R16I";
        Format[Format["R32F"] = 11] = "R32F";
        Format[Format["R32UI"] = 12] = "R32UI";
        Format[Format["R32I"] = 13] = "R32I";
        Format[Format["RG8"] = 14] = "RG8";
        Format[Format["RG8SN"] = 15] = "RG8SN";
        Format[Format["RG8UI"] = 16] = "RG8UI";
        Format[Format["RG8I"] = 17] = "RG8I";
        Format[Format["RG16F"] = 18] = "RG16F";
        Format[Format["RG16UI"] = 19] = "RG16UI";
        Format[Format["RG16I"] = 20] = "RG16I";
        Format[Format["RG32F"] = 21] = "RG32F";
        Format[Format["RG32UI"] = 22] = "RG32UI";
        Format[Format["RG32I"] = 23] = "RG32I";
        Format[Format["RGB8"] = 24] = "RGB8";
        Format[Format["SRGB8"] = 25] = "SRGB8";
        Format[Format["RGB8SN"] = 26] = "RGB8SN";
        Format[Format["RGB8UI"] = 27] = "RGB8UI";
        Format[Format["RGB8I"] = 28] = "RGB8I";
        Format[Format["RGB16F"] = 29] = "RGB16F";
        Format[Format["RGB16UI"] = 30] = "RGB16UI";
        Format[Format["RGB16I"] = 31] = "RGB16I";
        Format[Format["RGB32F"] = 32] = "RGB32F";
        Format[Format["RGB32UI"] = 33] = "RGB32UI";
        Format[Format["RGB32I"] = 34] = "RGB32I";
        Format[Format["RGBA8"] = 35] = "RGBA8";
        Format[Format["BGRA8"] = 36] = "BGRA8";
        Format[Format["SRGB8_A8"] = 37] = "SRGB8_A8";
        Format[Format["RGBA8SN"] = 38] = "RGBA8SN";
        Format[Format["RGBA8UI"] = 39] = "RGBA8UI";
        Format[Format["RGBA8I"] = 40] = "RGBA8I";
        Format[Format["RGBA16F"] = 41] = "RGBA16F";
        Format[Format["RGBA16UI"] = 42] = "RGBA16UI";
        Format[Format["RGBA16I"] = 43] = "RGBA16I";
        Format[Format["RGBA32F"] = 44] = "RGBA32F";
        Format[Format["RGBA32UI"] = 45] = "RGBA32UI";
        Format[Format["RGBA32I"] = 46] = "RGBA32I";
        Format[Format["R5G6B5"] = 47] = "R5G6B5";
        Format[Format["R11G11B10F"] = 48] = "R11G11B10F";
        Format[Format["RGB5A1"] = 49] = "RGB5A1";
        Format[Format["RGBA4"] = 50] = "RGBA4";
        Format[Format["RGB10A2"] = 51] = "RGB10A2";
        Format[Format["RGB10A2UI"] = 52] = "RGB10A2UI";
        Format[Format["RGB9E5"] = 53] = "RGB9E5";
        Format[Format["D16"] = 54] = "D16";
        Format[Format["D16S8"] = 55] = "D16S8";
        Format[Format["D24"] = 56] = "D24";
        Format[Format["D24S8"] = 57] = "D24S8";
        Format[Format["D32F"] = 58] = "D32F";
        Format[Format["D32F_S8"] = 59] = "D32F_S8";
        Format[Format["BC1"] = 60] = "BC1";
        Format[Format["BC1_ALPHA"] = 61] = "BC1_ALPHA";
        Format[Format["BC1_SRGB"] = 62] = "BC1_SRGB";
        Format[Format["BC1_SRGB_ALPHA"] = 63] = "BC1_SRGB_ALPHA";
        Format[Format["BC2"] = 64] = "BC2";
        Format[Format["BC2_SRGB"] = 65] = "BC2_SRGB";
        Format[Format["BC3"] = 66] = "BC3";
        Format[Format["BC3_SRGB"] = 67] = "BC3_SRGB";
        Format[Format["BC4"] = 68] = "BC4";
        Format[Format["BC4_SNORM"] = 69] = "BC4_SNORM";
        Format[Format["BC5"] = 70] = "BC5";
        Format[Format["BC5_SNORM"] = 71] = "BC5_SNORM";
        Format[Format["BC6H_UF16"] = 72] = "BC6H_UF16";
        Format[Format["BC6H_SF16"] = 73] = "BC6H_SF16";
        Format[Format["BC7"] = 74] = "BC7";
        Format[Format["BC7_SRGB"] = 75] = "BC7_SRGB";
        Format[Format["ETC_RGB8"] = 76] = "ETC_RGB8";
        Format[Format["ETC2_RGB8"] = 77] = "ETC2_RGB8";
        Format[Format["ETC2_SRGB8"] = 78] = "ETC2_SRGB8";
        Format[Format["ETC2_RGB8_A1"] = 79] = "ETC2_RGB8_A1";
        Format[Format["ETC2_SRGB8_A1"] = 80] = "ETC2_SRGB8_A1";
        Format[Format["ETC2_RGBA8"] = 81] = "ETC2_RGBA8";
        Format[Format["ETC2_SRGB8_A8"] = 82] = "ETC2_SRGB8_A8";
        Format[Format["EAC_R11"] = 83] = "EAC_R11";
        Format[Format["EAC_R11SN"] = 84] = "EAC_R11SN";
        Format[Format["EAC_RG11"] = 85] = "EAC_RG11";
        Format[Format["EAC_RG11SN"] = 86] = "EAC_RG11SN";
        Format[Format["PVRTC_RGB2"] = 87] = "PVRTC_RGB2";
        Format[Format["PVRTC_RGBA2"] = 88] = "PVRTC_RGBA2";
        Format[Format["PVRTC_RGB4"] = 89] = "PVRTC_RGB4";
        Format[Format["PVRTC_RGBA4"] = 90] = "PVRTC_RGBA4";
        Format[Format["PVRTC2_2BPP"] = 91] = "PVRTC2_2BPP";
        Format[Format["PVRTC2_4BPP"] = 92] = "PVRTC2_4BPP";
        Format[Format["ASTC_RGBA_4x4"] = 93] = "ASTC_RGBA_4x4";
        Format[Format["ASTC_RGBA_5x4"] = 94] = "ASTC_RGBA_5x4";
        Format[Format["ASTC_RGBA_5x5"] = 95] = "ASTC_RGBA_5x5";
        Format[Format["ASTC_RGBA_6x5"] = 96] = "ASTC_RGBA_6x5";
        Format[Format["ASTC_RGBA_6x6"] = 97] = "ASTC_RGBA_6x6";
        Format[Format["ASTC_RGBA_8x5"] = 98] = "ASTC_RGBA_8x5";
        Format[Format["ASTC_RGBA_8x6"] = 99] = "ASTC_RGBA_8x6";
        Format[Format["ASTC_RGBA_8x8"] = 100] = "ASTC_RGBA_8x8";
        Format[Format["ASTC_RGBA_10x5"] = 101] = "ASTC_RGBA_10x5";
        Format[Format["ASTC_RGBA_10x6"] = 102] = "ASTC_RGBA_10x6";
        Format[Format["ASTC_RGBA_10x8"] = 103] = "ASTC_RGBA_10x8";
        Format[Format["ASTC_RGBA_10x10"] = 104] = "ASTC_RGBA_10x10";
        Format[Format["ASTC_RGBA_12x10"] = 105] = "ASTC_RGBA_12x10";
        Format[Format["ASTC_RGBA_12x12"] = 106] = "ASTC_RGBA_12x12";
        Format[Format["ASTC_SRGBA_4x4"] = 107] = "ASTC_SRGBA_4x4";
        Format[Format["ASTC_SRGBA_5x4"] = 108] = "ASTC_SRGBA_5x4";
        Format[Format["ASTC_SRGBA_5x5"] = 109] = "ASTC_SRGBA_5x5";
        Format[Format["ASTC_SRGBA_6x5"] = 110] = "ASTC_SRGBA_6x5";
        Format[Format["ASTC_SRGBA_6x6"] = 111] = "ASTC_SRGBA_6x6";
        Format[Format["ASTC_SRGBA_8x5"] = 112] = "ASTC_SRGBA_8x5";
        Format[Format["ASTC_SRGBA_8x6"] = 113] = "ASTC_SRGBA_8x6";
        Format[Format["ASTC_SRGBA_8x8"] = 114] = "ASTC_SRGBA_8x8";
        Format[Format["ASTC_SRGBA_10x5"] = 115] = "ASTC_SRGBA_10x5";
        Format[Format["ASTC_SRGBA_10x6"] = 116] = "ASTC_SRGBA_10x6";
        Format[Format["ASTC_SRGBA_10x8"] = 117] = "ASTC_SRGBA_10x8";
        Format[Format["ASTC_SRGBA_10x10"] = 118] = "ASTC_SRGBA_10x10";
        Format[Format["ASTC_SRGBA_12x10"] = 119] = "ASTC_SRGBA_12x10";
        Format[Format["ASTC_SRGBA_12x12"] = 120] = "ASTC_SRGBA_12x12";
      })(Format || _export("Format", Format = {}));

      (function (BufferUsageBit) {
        BufferUsageBit[BufferUsageBit["NONE"] = 0] = "NONE";
        BufferUsageBit[BufferUsageBit["TRANSFER_SRC"] = 1] = "TRANSFER_SRC";
        BufferUsageBit[BufferUsageBit["TRANSFER_DST"] = 2] = "TRANSFER_DST";
        BufferUsageBit[BufferUsageBit["INDEX"] = 4] = "INDEX";
        BufferUsageBit[BufferUsageBit["VERTEX"] = 8] = "VERTEX";
        BufferUsageBit[BufferUsageBit["UNIFORM"] = 16] = "UNIFORM";
        BufferUsageBit[BufferUsageBit["STORAGE"] = 32] = "STORAGE";
        BufferUsageBit[BufferUsageBit["INDIRECT"] = 64] = "INDIRECT";
      })(BufferUsageBit || _export("BufferUsageBit", BufferUsageBit = {}));

      (function (MemoryUsageBit) {
        MemoryUsageBit[MemoryUsageBit["NONE"] = 0] = "NONE";
        MemoryUsageBit[MemoryUsageBit["DEVICE"] = 1] = "DEVICE";
        MemoryUsageBit[MemoryUsageBit["HOST"] = 2] = "HOST";
      })(MemoryUsageBit || _export("MemoryUsageBit", MemoryUsageBit = {}));

      (function (BufferFlagBit) {
        BufferFlagBit[BufferFlagBit["NONE"] = 0] = "NONE";
        BufferFlagBit[BufferFlagBit["BAKUP_BUFFER"] = 4] = "BAKUP_BUFFER";
      })(BufferFlagBit || _export("BufferFlagBit", BufferFlagBit = {}));

      (function (BufferAccessBit) {
        BufferAccessBit[BufferAccessBit["NONE"] = 0] = "NONE";
        BufferAccessBit[BufferAccessBit["READ"] = 1] = "READ";
        BufferAccessBit[BufferAccessBit["WRITE"] = 2] = "WRITE";
      })(BufferAccessBit || _export("BufferAccessBit", BufferAccessBit = {}));

      (function (PrimitiveMode) {
        PrimitiveMode[PrimitiveMode["POINT_LIST"] = 0] = "POINT_LIST";
        PrimitiveMode[PrimitiveMode["LINE_LIST"] = 1] = "LINE_LIST";
        PrimitiveMode[PrimitiveMode["LINE_STRIP"] = 2] = "LINE_STRIP";
        PrimitiveMode[PrimitiveMode["LINE_LOOP"] = 3] = "LINE_LOOP";
        PrimitiveMode[PrimitiveMode["LINE_LIST_ADJACENCY"] = 4] = "LINE_LIST_ADJACENCY";
        PrimitiveMode[PrimitiveMode["LINE_STRIP_ADJACENCY"] = 5] = "LINE_STRIP_ADJACENCY";
        PrimitiveMode[PrimitiveMode["ISO_LINE_LIST"] = 6] = "ISO_LINE_LIST";
        PrimitiveMode[PrimitiveMode["TRIANGLE_LIST"] = 7] = "TRIANGLE_LIST";
        PrimitiveMode[PrimitiveMode["TRIANGLE_STRIP"] = 8] = "TRIANGLE_STRIP";
        PrimitiveMode[PrimitiveMode["TRIANGLE_FAN"] = 9] = "TRIANGLE_FAN";
        PrimitiveMode[PrimitiveMode["TRIANGLE_LIST_ADJACENCY"] = 10] = "TRIANGLE_LIST_ADJACENCY";
        PrimitiveMode[PrimitiveMode["TRIANGLE_STRIP_ADJACENCY"] = 11] = "TRIANGLE_STRIP_ADJACENCY";
        PrimitiveMode[PrimitiveMode["TRIANGLE_PATCH_ADJACENCY"] = 12] = "TRIANGLE_PATCH_ADJACENCY";
        PrimitiveMode[PrimitiveMode["QUAD_PATCH_LIST"] = 13] = "QUAD_PATCH_LIST";
      })(PrimitiveMode || _export("PrimitiveMode", PrimitiveMode = {}));

      (function (PolygonMode) {
        PolygonMode[PolygonMode["FILL"] = 0] = "FILL";
        PolygonMode[PolygonMode["POINT"] = 1] = "POINT";
        PolygonMode[PolygonMode["LINE"] = 2] = "LINE";
      })(PolygonMode || _export("PolygonMode", PolygonMode = {}));

      (function (ShadeModel) {
        ShadeModel[ShadeModel["GOURAND"] = 0] = "GOURAND";
        ShadeModel[ShadeModel["FLAT"] = 1] = "FLAT";
      })(ShadeModel || _export("ShadeModel", ShadeModel = {}));

      (function (CullMode) {
        CullMode[CullMode["NONE"] = 0] = "NONE";
        CullMode[CullMode["FRONT"] = 1] = "FRONT";
        CullMode[CullMode["BACK"] = 2] = "BACK";
      })(CullMode || _export("CullMode", CullMode = {}));

      (function (ComparisonFunc) {
        ComparisonFunc[ComparisonFunc["NEVER"] = 0] = "NEVER";
        ComparisonFunc[ComparisonFunc["LESS"] = 1] = "LESS";
        ComparisonFunc[ComparisonFunc["EQUAL"] = 2] = "EQUAL";
        ComparisonFunc[ComparisonFunc["LESS_EQUAL"] = 3] = "LESS_EQUAL";
        ComparisonFunc[ComparisonFunc["GREATER"] = 4] = "GREATER";
        ComparisonFunc[ComparisonFunc["NOT_EQUAL"] = 5] = "NOT_EQUAL";
        ComparisonFunc[ComparisonFunc["GREATER_EQUAL"] = 6] = "GREATER_EQUAL";
        ComparisonFunc[ComparisonFunc["ALWAYS"] = 7] = "ALWAYS";
      })(ComparisonFunc || _export("ComparisonFunc", ComparisonFunc = {}));

      (function (StencilOp) {
        StencilOp[StencilOp["ZERO"] = 0] = "ZERO";
        StencilOp[StencilOp["KEEP"] = 1] = "KEEP";
        StencilOp[StencilOp["REPLACE"] = 2] = "REPLACE";
        StencilOp[StencilOp["INCR"] = 3] = "INCR";
        StencilOp[StencilOp["DECR"] = 4] = "DECR";
        StencilOp[StencilOp["INVERT"] = 5] = "INVERT";
        StencilOp[StencilOp["INCR_WRAP"] = 6] = "INCR_WRAP";
        StencilOp[StencilOp["DECR_WRAP"] = 7] = "DECR_WRAP";
      })(StencilOp || _export("StencilOp", StencilOp = {}));

      (function (BlendOp) {
        BlendOp[BlendOp["ADD"] = 0] = "ADD";
        BlendOp[BlendOp["SUB"] = 1] = "SUB";
        BlendOp[BlendOp["REV_SUB"] = 2] = "REV_SUB";
        BlendOp[BlendOp["MIN"] = 3] = "MIN";
        BlendOp[BlendOp["MAX"] = 4] = "MAX";
      })(BlendOp || _export("BlendOp", BlendOp = {}));

      (function (BlendFactor) {
        BlendFactor[BlendFactor["ZERO"] = 0] = "ZERO";
        BlendFactor[BlendFactor["ONE"] = 1] = "ONE";
        BlendFactor[BlendFactor["SRC_ALPHA"] = 2] = "SRC_ALPHA";
        BlendFactor[BlendFactor["DST_ALPHA"] = 3] = "DST_ALPHA";
        BlendFactor[BlendFactor["ONE_MINUS_SRC_ALPHA"] = 4] = "ONE_MINUS_SRC_ALPHA";
        BlendFactor[BlendFactor["ONE_MINUS_DST_ALPHA"] = 5] = "ONE_MINUS_DST_ALPHA";
        BlendFactor[BlendFactor["SRC_COLOR"] = 6] = "SRC_COLOR";
        BlendFactor[BlendFactor["DST_COLOR"] = 7] = "DST_COLOR";
        BlendFactor[BlendFactor["ONE_MINUS_SRC_COLOR"] = 8] = "ONE_MINUS_SRC_COLOR";
        BlendFactor[BlendFactor["ONE_MINUS_DST_COLOR"] = 9] = "ONE_MINUS_DST_COLOR";
        BlendFactor[BlendFactor["SRC_ALPHA_SATURATE"] = 10] = "SRC_ALPHA_SATURATE";
        BlendFactor[BlendFactor["CONSTANT_COLOR"] = 11] = "CONSTANT_COLOR";
        BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_COLOR"] = 12] = "ONE_MINUS_CONSTANT_COLOR";
        BlendFactor[BlendFactor["CONSTANT_ALPHA"] = 13] = "CONSTANT_ALPHA";
        BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_ALPHA"] = 14] = "ONE_MINUS_CONSTANT_ALPHA";
      })(BlendFactor || _export("BlendFactor", BlendFactor = {}));

      (function (ColorMask) {
        ColorMask[ColorMask["NONE"] = 0] = "NONE";
        ColorMask[ColorMask["R"] = 1] = "R";
        ColorMask[ColorMask["G"] = 2] = "G";
        ColorMask[ColorMask["B"] = 4] = "B";
        ColorMask[ColorMask["A"] = 8] = "A";
        ColorMask[ColorMask["ALL"] = 15] = "ALL";
      })(ColorMask || _export("ColorMask", ColorMask = {}));

      (function (Filter) {
        Filter[Filter["NONE"] = 0] = "NONE";
        Filter[Filter["POINT"] = 1] = "POINT";
        Filter[Filter["LINEAR"] = 2] = "LINEAR";
        Filter[Filter["ANISOTROPIC"] = 3] = "ANISOTROPIC";
      })(Filter || _export("Filter", Filter = {}));

      (function (Address) {
        Address[Address["WRAP"] = 0] = "WRAP";
        Address[Address["MIRROR"] = 1] = "MIRROR";
        Address[Address["CLAMP"] = 2] = "CLAMP";
        Address[Address["BORDER"] = 3] = "BORDER";
      })(Address || _export("Address", Address = {}));

      (function (TextureType) {
        TextureType[TextureType["TEX1D"] = 0] = "TEX1D";
        TextureType[TextureType["TEX2D"] = 1] = "TEX2D";
        TextureType[TextureType["TEX3D"] = 2] = "TEX3D";
        TextureType[TextureType["CUBE"] = 3] = "CUBE";
        TextureType[TextureType["TEX1D_ARRAY"] = 4] = "TEX1D_ARRAY";
        TextureType[TextureType["TEX2D_ARRAY"] = 5] = "TEX2D_ARRAY";
      })(TextureType || _export("TextureType", TextureType = {}));

      (function (TextureUsageBit) {
        TextureUsageBit[TextureUsageBit["NONE"] = 0] = "NONE";
        TextureUsageBit[TextureUsageBit["TRANSFER_SRC"] = 1] = "TRANSFER_SRC";
        TextureUsageBit[TextureUsageBit["TRANSFER_DST"] = 2] = "TRANSFER_DST";
        TextureUsageBit[TextureUsageBit["SAMPLED"] = 4] = "SAMPLED";
        TextureUsageBit[TextureUsageBit["STORAGE"] = 8] = "STORAGE";
        TextureUsageBit[TextureUsageBit["COLOR_ATTACHMENT"] = 16] = "COLOR_ATTACHMENT";
        TextureUsageBit[TextureUsageBit["DEPTH_STENCIL_ATTACHMENT"] = 32] = "DEPTH_STENCIL_ATTACHMENT";
        TextureUsageBit[TextureUsageBit["TRANSIENT_ATTACHMENT"] = 64] = "TRANSIENT_ATTACHMENT";
        TextureUsageBit[TextureUsageBit["INPUT_ATTACHMENT"] = 128] = "INPUT_ATTACHMENT";
      })(TextureUsageBit || _export("TextureUsageBit", TextureUsageBit = {}));

      (function (SampleCount) {
        SampleCount[SampleCount["X1"] = 0] = "X1";
        SampleCount[SampleCount["X2"] = 1] = "X2";
        SampleCount[SampleCount["X4"] = 2] = "X4";
        SampleCount[SampleCount["X8"] = 3] = "X8";
        SampleCount[SampleCount["X16"] = 4] = "X16";
        SampleCount[SampleCount["X32"] = 5] = "X32";
        SampleCount[SampleCount["X64"] = 6] = "X64";
      })(SampleCount || _export("SampleCount", SampleCount = {}));

      (function (TextureFlagBit) {
        TextureFlagBit[TextureFlagBit["NONE"] = 0] = "NONE";
        TextureFlagBit[TextureFlagBit["GEN_MIPMAP"] = 1] = "GEN_MIPMAP";
        TextureFlagBit[TextureFlagBit["CUBEMAP"] = 2] = "CUBEMAP";
        TextureFlagBit[TextureFlagBit["BAKUP_BUFFER"] = 4] = "BAKUP_BUFFER";
        TextureFlagBit[TextureFlagBit["IMMUTABLE"] = 8] = "IMMUTABLE";
      })(TextureFlagBit || _export("TextureFlagBit", TextureFlagBit = {}));

      (function (ShaderStageFlagBit) {
        ShaderStageFlagBit[ShaderStageFlagBit["NONE"] = 0] = "NONE";
        ShaderStageFlagBit[ShaderStageFlagBit["VERTEX"] = 1] = "VERTEX";
        ShaderStageFlagBit[ShaderStageFlagBit["CONTROL"] = 2] = "CONTROL";
        ShaderStageFlagBit[ShaderStageFlagBit["EVALUATION"] = 4] = "EVALUATION";
        ShaderStageFlagBit[ShaderStageFlagBit["GEOMETRY"] = 8] = "GEOMETRY";
        ShaderStageFlagBit[ShaderStageFlagBit["FRAGMENT"] = 16] = "FRAGMENT";
        ShaderStageFlagBit[ShaderStageFlagBit["COMPUTE"] = 32] = "COMPUTE";
        ShaderStageFlagBit[ShaderStageFlagBit["ALL"] = 63] = "ALL";
      })(ShaderStageFlagBit || _export("ShaderStageFlagBit", ShaderStageFlagBit = {}));

      (function (DescriptorType) {
        DescriptorType[DescriptorType["UNKNOWN"] = 0] = "UNKNOWN";
        DescriptorType[DescriptorType["UNIFORM_BUFFER"] = 1] = "UNIFORM_BUFFER";
        DescriptorType[DescriptorType["DYNAMIC_UNIFORM_BUFFER"] = 2] = "DYNAMIC_UNIFORM_BUFFER";
        DescriptorType[DescriptorType["STORAGE_BUFFER"] = 4] = "STORAGE_BUFFER";
        DescriptorType[DescriptorType["DYNAMIC_STORAGE_BUFFER"] = 8] = "DYNAMIC_STORAGE_BUFFER";
        DescriptorType[DescriptorType["SAMPLER"] = 16] = "SAMPLER";
      })(DescriptorType || _export("DescriptorType", DescriptorType = {}));

      (function (CommandBufferType) {
        CommandBufferType[CommandBufferType["PRIMARY"] = 0] = "PRIMARY";
        CommandBufferType[CommandBufferType["SECONDARY"] = 1] = "SECONDARY";
      })(CommandBufferType || _export("CommandBufferType", CommandBufferType = {}));

      (function (LoadOp) {
        LoadOp[LoadOp["LOAD"] = 0] = "LOAD";
        LoadOp[LoadOp["CLEAR"] = 1] = "CLEAR";
        LoadOp[LoadOp["DISCARD"] = 2] = "DISCARD";
      })(LoadOp || _export("LoadOp", LoadOp = {}));

      (function (StoreOp) {
        StoreOp[StoreOp["STORE"] = 0] = "STORE";
        StoreOp[StoreOp["DISCARD"] = 1] = "DISCARD";
      })(StoreOp || _export("StoreOp", StoreOp = {}));

      (function (TextureLayout) {
        TextureLayout[TextureLayout["UNDEFINED"] = 0] = "UNDEFINED";
        TextureLayout[TextureLayout["GENERAL"] = 1] = "GENERAL";
        TextureLayout[TextureLayout["COLOR_ATTACHMENT_OPTIMAL"] = 2] = "COLOR_ATTACHMENT_OPTIMAL";
        TextureLayout[TextureLayout["DEPTH_STENCIL_ATTACHMENT_OPTIMAL"] = 3] = "DEPTH_STENCIL_ATTACHMENT_OPTIMAL";
        TextureLayout[TextureLayout["DEPTH_STENCIL_READONLY_OPTIMAL"] = 4] = "DEPTH_STENCIL_READONLY_OPTIMAL";
        TextureLayout[TextureLayout["SHADER_READONLY_OPTIMAL"] = 5] = "SHADER_READONLY_OPTIMAL";
        TextureLayout[TextureLayout["TRANSFER_SRC_OPTIMAL"] = 6] = "TRANSFER_SRC_OPTIMAL";
        TextureLayout[TextureLayout["TRANSFER_DST_OPTIMAL"] = 7] = "TRANSFER_DST_OPTIMAL";
        TextureLayout[TextureLayout["PREINITIALIZED"] = 8] = "PREINITIALIZED";
        TextureLayout[TextureLayout["PRESENT_SRC"] = 9] = "PRESENT_SRC";
      })(TextureLayout || _export("TextureLayout", TextureLayout = {}));

      (function (PipelineBindPoint) {
        PipelineBindPoint[PipelineBindPoint["GRAPHICS"] = 0] = "GRAPHICS";
        PipelineBindPoint[PipelineBindPoint["COMPUTE"] = 1] = "COMPUTE";
        PipelineBindPoint[PipelineBindPoint["RAY_TRACING"] = 2] = "RAY_TRACING";
      })(PipelineBindPoint || _export("PipelineBindPoint", PipelineBindPoint = {}));

      (function (DynamicStateFlagBit) {
        DynamicStateFlagBit[DynamicStateFlagBit["NONE"] = 0] = "NONE";
        DynamicStateFlagBit[DynamicStateFlagBit["VIEWPORT"] = 1] = "VIEWPORT";
        DynamicStateFlagBit[DynamicStateFlagBit["SCISSOR"] = 2] = "SCISSOR";
        DynamicStateFlagBit[DynamicStateFlagBit["LINE_WIDTH"] = 4] = "LINE_WIDTH";
        DynamicStateFlagBit[DynamicStateFlagBit["DEPTH_BIAS"] = 8] = "DEPTH_BIAS";
        DynamicStateFlagBit[DynamicStateFlagBit["BLEND_CONSTANTS"] = 16] = "BLEND_CONSTANTS";
        DynamicStateFlagBit[DynamicStateFlagBit["DEPTH_BOUNDS"] = 32] = "DEPTH_BOUNDS";
        DynamicStateFlagBit[DynamicStateFlagBit["STENCIL_WRITE_MASK"] = 64] = "STENCIL_WRITE_MASK";
        DynamicStateFlagBit[DynamicStateFlagBit["STENCIL_COMPARE_MASK"] = 128] = "STENCIL_COMPARE_MASK";
      })(DynamicStateFlagBit || _export("DynamicStateFlagBit", DynamicStateFlagBit = {}));

      (function (StencilFace) {
        StencilFace[StencilFace["FRONT"] = 0] = "FRONT";
        StencilFace[StencilFace["BACK"] = 1] = "BACK";
        StencilFace[StencilFace["ALL"] = 2] = "ALL";
      })(StencilFace || _export("StencilFace", StencilFace = {}));

      (function (QueueType) {
        QueueType[QueueType["GRAPHICS"] = 0] = "GRAPHICS";
        QueueType[QueueType["COMPUTE"] = 1] = "COMPUTE";
        QueueType[QueueType["TRANSFER"] = 2] = "TRANSFER";
      })(QueueType || _export("QueueType", QueueType = {}));

      (function (ClearFlag) {
        ClearFlag[ClearFlag["NONE"] = 0] = "NONE";
        ClearFlag[ClearFlag["COLOR"] = 1] = "COLOR";
        ClearFlag[ClearFlag["DEPTH"] = 2] = "DEPTH";
        ClearFlag[ClearFlag["STENCIL"] = 4] = "STENCIL";
        ClearFlag[ClearFlag["DEPTH_STENCIL"] = 6] = "DEPTH_STENCIL";
        ClearFlag[ClearFlag["ALL"] = 7] = "ALL";
      })(ClearFlag || _export("ClearFlag", ClearFlag = {}));

      (function (FormatType) {
        FormatType[FormatType["NONE"] = 0] = "NONE";
        FormatType[FormatType["UNORM"] = 1] = "UNORM";
        FormatType[FormatType["SNORM"] = 2] = "SNORM";
        FormatType[FormatType["UINT"] = 3] = "UINT";
        FormatType[FormatType["INT"] = 4] = "INT";
        FormatType[FormatType["UFLOAT"] = 5] = "UFLOAT";
        FormatType[FormatType["FLOAT"] = 6] = "FLOAT";
      })(FormatType || _export("FormatType", FormatType = {}));

      (function (API) {
        API[API["UNKNOWN"] = 0] = "UNKNOWN";
        API[API["GLES2"] = 1] = "GLES2";
        API[API["GLES3"] = 2] = "GLES3";
        API[API["METAL"] = 3] = "METAL";
        API[API["VULKAN"] = 4] = "VULKAN";
        API[API["WEBGL"] = 5] = "WEBGL";
        API[API["WEBGL2"] = 6] = "WEBGL2";
        API[API["WEBGPU"] = 7] = "WEBGPU";
      })(API || _export("API", API = {}));

      (function (SurfaceTransform) {
        SurfaceTransform[SurfaceTransform["IDENTITY"] = 0] = "IDENTITY";
        SurfaceTransform[SurfaceTransform["ROTATE_90"] = 1] = "ROTATE_90";
        SurfaceTransform[SurfaceTransform["ROTATE_180"] = 2] = "ROTATE_180";
        SurfaceTransform[SurfaceTransform["ROTATE_270"] = 3] = "ROTATE_270";
      })(SurfaceTransform || _export("SurfaceTransform", SurfaceTransform = {}));

      (function (Feature) {
        Feature[Feature["COLOR_FLOAT"] = 0] = "COLOR_FLOAT";
        Feature[Feature["COLOR_HALF_FLOAT"] = 1] = "COLOR_HALF_FLOAT";
        Feature[Feature["TEXTURE_FLOAT"] = 2] = "TEXTURE_FLOAT";
        Feature[Feature["TEXTURE_HALF_FLOAT"] = 3] = "TEXTURE_HALF_FLOAT";
        Feature[Feature["TEXTURE_FLOAT_LINEAR"] = 4] = "TEXTURE_FLOAT_LINEAR";
        Feature[Feature["TEXTURE_HALF_FLOAT_LINEAR"] = 5] = "TEXTURE_HALF_FLOAT_LINEAR";
        Feature[Feature["FORMAT_R11G11B10F"] = 6] = "FORMAT_R11G11B10F";
        Feature[Feature["FORMAT_D16"] = 7] = "FORMAT_D16";
        Feature[Feature["FORMAT_D16S8"] = 8] = "FORMAT_D16S8";
        Feature[Feature["FORMAT_D24"] = 9] = "FORMAT_D24";
        Feature[Feature["FORMAT_D24S8"] = 10] = "FORMAT_D24S8";
        Feature[Feature["FORMAT_D32F"] = 11] = "FORMAT_D32F";
        Feature[Feature["FORMAT_D32FS8"] = 12] = "FORMAT_D32FS8";
        Feature[Feature["FORMAT_ETC1"] = 13] = "FORMAT_ETC1";
        Feature[Feature["FORMAT_ETC2"] = 14] = "FORMAT_ETC2";
        Feature[Feature["FORMAT_DXT"] = 15] = "FORMAT_DXT";
        Feature[Feature["FORMAT_PVRTC"] = 16] = "FORMAT_PVRTC";
        Feature[Feature["FORMAT_ASTC"] = 17] = "FORMAT_ASTC";
        Feature[Feature["FORMAT_RGB8"] = 18] = "FORMAT_RGB8";
        Feature[Feature["MSAA"] = 19] = "MSAA";
        Feature[Feature["ELEMENT_INDEX_UINT"] = 20] = "ELEMENT_INDEX_UINT";
        Feature[Feature["INSTANCED_ARRAYS"] = 21] = "INSTANCED_ARRAYS";
        Feature[Feature["MULTIPLE_RENDER_TARGETS"] = 22] = "MULTIPLE_RENDER_TARGETS";
        Feature[Feature["BLEND_MINMAX"] = 23] = "BLEND_MINMAX";
        Feature[Feature["DEPTH_BOUNDS"] = 24] = "DEPTH_BOUNDS";
        Feature[Feature["LINE_WIDTH"] = 25] = "LINE_WIDTH";
        Feature[Feature["STENCIL_WRITE_MASK"] = 26] = "STENCIL_WRITE_MASK";
        Feature[Feature["STENCIL_COMPARE_MASK"] = 27] = "STENCIL_COMPARE_MASK";
        Feature[Feature["COUNT"] = 28] = "COUNT";
      })(Feature || _export("Feature", Feature = {}));

      _export("FormatInfo", FormatInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function FormatInfo(name, size, count, type, hasAlpha, hasDepth, hasStencil, isCompressed) {
        this.name = name;
        this.size = size;
        this.count = count;
        this.type = type;
        this.hasAlpha = hasAlpha;
        this.hasDepth = hasDepth;
        this.hasStencil = hasStencil;
        this.isCompressed = isCompressed;
      });

      _export("MemoryStatus", MemoryStatus = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function MemoryStatus(bufferSize, textureSize) {
        if (bufferSize === void 0) {
          bufferSize = 0;
        }

        if (textureSize === void 0) {
          textureSize = 0;
        }

        this.bufferSize = bufferSize;
        this.textureSize = textureSize;
      });

      _export("FormatInfos", FormatInfos = Object.freeze([new FormatInfo('UNKNOWN', 0, 0, FormatType.NONE, false, false, false, false), new FormatInfo('A8', 1, 1, FormatType.UNORM, true, false, false, false), new FormatInfo('L8', 1, 1, FormatType.UNORM, false, false, false, false), new FormatInfo('LA8', 1, 2, FormatType.UNORM, true, false, false, false), new FormatInfo('R8', 1, 1, FormatType.UNORM, false, false, false, false), new FormatInfo('R8SN', 1, 1, FormatType.SNORM, false, false, false, false), new FormatInfo('R8UI', 1, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R8I', 1, 1, FormatType.INT, false, false, false, false), new FormatInfo('R16F', 2, 1, FormatType.FLOAT, false, false, false, false), new FormatInfo('R16UI', 2, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R16I', 2, 1, FormatType.INT, false, false, false, false), new FormatInfo('R32F', 4, 1, FormatType.FLOAT, false, false, false, false), new FormatInfo('R32UI', 4, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R32I', 4, 1, FormatType.INT, false, false, false, false), new FormatInfo('RG8', 2, 2, FormatType.UNORM, false, false, false, false), new FormatInfo('RG8SN', 2, 2, FormatType.SNORM, false, false, false, false), new FormatInfo('RG8UI', 2, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG8I', 2, 2, FormatType.INT, false, false, false, false), new FormatInfo('RG16F', 4, 2, FormatType.FLOAT, false, false, false, false), new FormatInfo('RG16UI', 4, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG16I', 4, 2, FormatType.INT, false, false, false, false), new FormatInfo('RG32F', 8, 2, FormatType.FLOAT, false, false, false, false), new FormatInfo('RG32UI', 8, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG32I', 8, 2, FormatType.INT, false, false, false, false), new FormatInfo('RGB8', 3, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('SRGB8', 3, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('RGB8SN', 3, 3, FormatType.SNORM, false, false, false, false), new FormatInfo('RGB8UI', 3, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB8I', 3, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGB16F', 6, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB16UI', 6, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB16I', 6, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGB32F', 12, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB32UI', 12, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB32I', 12, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGBA8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('BGRA8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('SRGB8_A8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGBA8SN', 4, 4, FormatType.SNORM, true, false, false, false), new FormatInfo('RGBA8UI', 4, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA8I', 4, 4, FormatType.INT, true, false, false, false), new FormatInfo('RGBA16F', 8, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('RGBA16UI', 8, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA16I', 8, 4, FormatType.INT, true, false, false, false), new FormatInfo('RGBA32F', 16, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('RGBA32UI', 16, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA32I', 16, 4, FormatType.INT, true, false, false, false), new FormatInfo('R5G6B5', 2, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('R11G11B10F', 4, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB5A1', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGBA4', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGB10A2', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGB10A2UI', 2, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGB9E5', 2, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('D16', 2, 1, FormatType.UINT, false, true, false, false), new FormatInfo('D16S8', 3, 2, FormatType.UINT, false, true, true, false), new FormatInfo('D24', 3, 1, FormatType.UINT, false, true, false, false), new FormatInfo('D24S8', 4, 2, FormatType.UINT, false, true, true, false), new FormatInfo('D32F', 4, 1, FormatType.FLOAT, false, true, false, false), new FormatInfo('D32FS8', 5, 2, FormatType.FLOAT, false, true, true, false), new FormatInfo('BC1', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('BC1_ALPHA', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC1_SRGB', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('BC1_SRGB_ALPHA', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC2', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC2_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC3', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC3_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC4', 1, 1, FormatType.UNORM, false, false, false, true), new FormatInfo('BC4_SNORM', 1, 1, FormatType.SNORM, false, false, false, true), new FormatInfo('BC5', 1, 2, FormatType.UNORM, false, false, false, true), new FormatInfo('BC5_SNORM', 1, 2, FormatType.SNORM, false, false, false, true), new FormatInfo('BC6H_UF16', 1, 3, FormatType.UFLOAT, false, false, false, true), new FormatInfo('BC6H_SF16', 1, 3, FormatType.FLOAT, false, false, false, true), new FormatInfo('BC7', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC7_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC_RGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_RGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_SRGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_RGB8_A1', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_SRGB8_A1', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_RGBA8', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_SRGB8_A8', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('EAC_R11', 1, 1, FormatType.UNORM, false, false, false, true), new FormatInfo('EAC_R11SN', 1, 1, FormatType.SNORM, false, false, false, true), new FormatInfo('EAC_RG11', 2, 2, FormatType.UNORM, false, false, false, true), new FormatInfo('EAC_RG11SN', 2, 2, FormatType.SNORM, false, false, false, true), new FormatInfo('PVRTC_RGB2', 2, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('PVRTC_RGBA2', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC_RGB4', 2, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('PVRTC_RGBA4', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC2_2BPP', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC2_4BPP', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_4x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_5x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_5x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_6x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_6x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_12x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_12x12', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_4x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_5x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_5x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_6x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_6x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_12x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_12x12', 1, 4, FormatType.UNORM, true, false, false, true)]));

      _type2size = [0, // UNKNOWN
      4, // BOOL
      8, // BOOL2
      12, // BOOL3
      16, // BOOL4
      4, // INT
      8, // INT2
      12, // INT3
      16, // INT4
      4, // UINT
      8, // UINT2
      12, // UINT3
      16, // UINT4
      4, // FLOAT
      8, // FLOAT2
      12, // FLOAT3
      16, // FLOAT4
      16, // MAT2
      24, // MAT2X3
      32, // MAT2X4
      24, // MAT3X2
      36, // MAT3
      48, // MAT3X4
      32, // MAT4X2
      48, // MAT4X3
      64, // MAT4
      4, // SAMPLER1D
      4, // SAMPLER1D_ARRAY
      4, // SAMPLER2D
      4, // SAMPLER2D_ARRAY
      4, // SAMPLER3D
      4 // SAMPLER_CUBE
      ];
    }
  };
});