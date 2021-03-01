System.register("q-bundled:///fs/cocos/core/gfx/deprecated-3.0.0.js", ["./polyfill-legacy-cc.js", "../utils/x-deprecated.js", "../global-exports.js", "./descriptor-set.js", "./buffer.js", "./command-buffer.js", "./define.js", "./define-class.js", "./device.js", "./framebuffer.js", "./input-assembler.js", "./descriptor-set-layout.js", "./pipeline-layout.js", "./pipeline-state.js", "./fence.js", "./queue.js", "./render-pass.js", "./sampler.js", "./shader.js", "./texture.js"], function (_export, _context) {
  "use strict";

  var polyfillCC, removeProperty, replaceProperty, legacyCC, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, DescriptorSetInfo, DescriptorSet, DrawInfo, DRAW_INFO_SIZE, IndirectBuffer, BufferInfo, BufferViewInfo, Buffer, CommandBufferInfo, CommandBuffer, MAX_ATTACHMENTS, ObjectType, Obj, AttributeName, Type, Format, BufferUsageBit, MemoryUsageBit, BufferFlagBit, BufferAccessBit, PrimitiveMode, PolygonMode, ShadeModel, CullMode, ComparisonFunc, StencilOp, BlendOp, BlendFactor, ColorMask, Filter, Address, TextureType, TextureUsageBit, SampleCount, TextureFlagBit, ShaderStageFlagBit, DescriptorType, CommandBufferType, LoadOp, StoreOp, TextureLayout, PipelineBindPoint, DynamicStateFlagBit, StencilFace, QueueType, ClearFlag, FormatType, API, SurfaceTransform, Feature, FormatInfo, MemoryStatus, FormatInfos, FormatSize, FormatSurfaceSize, Rect, Viewport, Color, Offset, Extent, TextureSubres, TextureCopy, BufferTextureCopy, BindingMappingInfo, DeviceInfo, Device, FramebufferInfo, Framebuffer, Attribute, InputAssemblerInfo, InputAssembler, DescriptorSetLayoutBinding, DescriptorSetLayoutInfo, DESCRIPTOR_DYNAMIC_TYPE, DescriptorSetLayout, PipelineLayoutInfo, PipelineLayout, RasterizerState, DepthStencilState, BlendTarget, BlendState, InputState, PipelineStateInfo, PipelineState, FenceInfo, Fence, QueueInfo, Queue, ColorAttachment, DepthStencilAttachment, SubPassInfo, RenderPassInfo, RenderPass, SamplerInfo, Sampler, ShaderStage, Uniform, UniformBlock, UniformSampler, ShaderInfo, Shader, TextureInfo, TextureViewInfo, Texture, special, api, deprecated;
  return {
    setters: [function (_polyfillLegacyCcJs) {
      polyfillCC = _polyfillLegacyCcJs.polyfillCC;
    }, function (_utilsXDeprecatedJs) {
      removeProperty = _utilsXDeprecatedJs.removeProperty;
      replaceProperty = _utilsXDeprecatedJs.replaceProperty;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_descriptorSetJs) {
      DESCRIPTOR_BUFFER_TYPE = _descriptorSetJs.DESCRIPTOR_BUFFER_TYPE;
      DESCRIPTOR_SAMPLER_TYPE = _descriptorSetJs.DESCRIPTOR_SAMPLER_TYPE;
      DescriptorSetInfo = _descriptorSetJs.DescriptorSetInfo;
      DescriptorSet = _descriptorSetJs.DescriptorSet;
    }, function (_bufferJs) {
      DrawInfo = _bufferJs.DrawInfo;
      DRAW_INFO_SIZE = _bufferJs.DRAW_INFO_SIZE;
      IndirectBuffer = _bufferJs.IndirectBuffer;
      BufferInfo = _bufferJs.BufferInfo;
      BufferViewInfo = _bufferJs.BufferViewInfo;
      Buffer = _bufferJs.Buffer;
    }, function (_commandBufferJs) {
      CommandBufferInfo = _commandBufferJs.CommandBufferInfo;
      CommandBuffer = _commandBufferJs.CommandBuffer;
    }, function (_defineJs) {
      MAX_ATTACHMENTS = _defineJs.MAX_ATTACHMENTS;
      ObjectType = _defineJs.ObjectType;
      Obj = _defineJs.Obj;
      AttributeName = _defineJs.AttributeName;
      Type = _defineJs.Type;
      Format = _defineJs.Format;
      BufferUsageBit = _defineJs.BufferUsageBit;
      MemoryUsageBit = _defineJs.MemoryUsageBit;
      BufferFlagBit = _defineJs.BufferFlagBit;
      BufferAccessBit = _defineJs.BufferAccessBit;
      PrimitiveMode = _defineJs.PrimitiveMode;
      PolygonMode = _defineJs.PolygonMode;
      ShadeModel = _defineJs.ShadeModel;
      CullMode = _defineJs.CullMode;
      ComparisonFunc = _defineJs.ComparisonFunc;
      StencilOp = _defineJs.StencilOp;
      BlendOp = _defineJs.BlendOp;
      BlendFactor = _defineJs.BlendFactor;
      ColorMask = _defineJs.ColorMask;
      Filter = _defineJs.Filter;
      Address = _defineJs.Address;
      TextureType = _defineJs.TextureType;
      TextureUsageBit = _defineJs.TextureUsageBit;
      SampleCount = _defineJs.SampleCount;
      TextureFlagBit = _defineJs.TextureFlagBit;
      ShaderStageFlagBit = _defineJs.ShaderStageFlagBit;
      DescriptorType = _defineJs.DescriptorType;
      CommandBufferType = _defineJs.CommandBufferType;
      LoadOp = _defineJs.LoadOp;
      StoreOp = _defineJs.StoreOp;
      TextureLayout = _defineJs.TextureLayout;
      PipelineBindPoint = _defineJs.PipelineBindPoint;
      DynamicStateFlagBit = _defineJs.DynamicStateFlagBit;
      StencilFace = _defineJs.StencilFace;
      QueueType = _defineJs.QueueType;
      ClearFlag = _defineJs.ClearFlag;
      FormatType = _defineJs.FormatType;
      API = _defineJs.API;
      SurfaceTransform = _defineJs.SurfaceTransform;
      Feature = _defineJs.Feature;
      FormatInfo = _defineJs.FormatInfo;
      MemoryStatus = _defineJs.MemoryStatus;
      FormatInfos = _defineJs.FormatInfos;
      FormatSize = _defineJs.FormatSize;
      FormatSurfaceSize = _defineJs.FormatSurfaceSize;
    }, function (_defineClassJs) {
      Rect = _defineClassJs.Rect;
      Viewport = _defineClassJs.Viewport;
      Color = _defineClassJs.Color;
      Offset = _defineClassJs.Offset;
      Extent = _defineClassJs.Extent;
      TextureSubres = _defineClassJs.TextureSubres;
      TextureCopy = _defineClassJs.TextureCopy;
      BufferTextureCopy = _defineClassJs.BufferTextureCopy;
    }, function (_deviceJs) {
      BindingMappingInfo = _deviceJs.BindingMappingInfo;
      DeviceInfo = _deviceJs.DeviceInfo;
      Device = _deviceJs.Device;
    }, function (_framebufferJs) {
      FramebufferInfo = _framebufferJs.FramebufferInfo;
      Framebuffer = _framebufferJs.Framebuffer;
    }, function (_inputAssemblerJs) {
      Attribute = _inputAssemblerJs.Attribute;
      InputAssemblerInfo = _inputAssemblerJs.InputAssemblerInfo;
      InputAssembler = _inputAssemblerJs.InputAssembler;
    }, function (_descriptorSetLayoutJs) {
      DescriptorSetLayoutBinding = _descriptorSetLayoutJs.DescriptorSetLayoutBinding;
      DescriptorSetLayoutInfo = _descriptorSetLayoutJs.DescriptorSetLayoutInfo;
      DESCRIPTOR_DYNAMIC_TYPE = _descriptorSetLayoutJs.DESCRIPTOR_DYNAMIC_TYPE;
      DescriptorSetLayout = _descriptorSetLayoutJs.DescriptorSetLayout;
    }, function (_pipelineLayoutJs) {
      PipelineLayoutInfo = _pipelineLayoutJs.PipelineLayoutInfo;
      PipelineLayout = _pipelineLayoutJs.PipelineLayout;
    }, function (_pipelineStateJs) {
      RasterizerState = _pipelineStateJs.RasterizerState;
      DepthStencilState = _pipelineStateJs.DepthStencilState;
      BlendTarget = _pipelineStateJs.BlendTarget;
      BlendState = _pipelineStateJs.BlendState;
      InputState = _pipelineStateJs.InputState;
      PipelineStateInfo = _pipelineStateJs.PipelineStateInfo;
      PipelineState = _pipelineStateJs.PipelineState;
    }, function (_fenceJs) {
      FenceInfo = _fenceJs.FenceInfo;
      Fence = _fenceJs.Fence;
    }, function (_queueJs) {
      QueueInfo = _queueJs.QueueInfo;
      Queue = _queueJs.Queue;
    }, function (_renderPassJs) {
      ColorAttachment = _renderPassJs.ColorAttachment;
      DepthStencilAttachment = _renderPassJs.DepthStencilAttachment;
      SubPassInfo = _renderPassJs.SubPassInfo;
      RenderPassInfo = _renderPassJs.RenderPassInfo;
      RenderPass = _renderPassJs.RenderPass;
    }, function (_samplerJs) {
      SamplerInfo = _samplerJs.SamplerInfo;
      Sampler = _samplerJs.Sampler;
    }, function (_shaderJs) {
      ShaderStage = _shaderJs.ShaderStage;
      Uniform = _shaderJs.Uniform;
      UniformBlock = _shaderJs.UniformBlock;
      UniformSampler = _shaderJs.UniformSampler;
      ShaderInfo = _shaderJs.ShaderInfo;
      Shader = _shaderJs.Shader;
    }, function (_textureJs) {
      TextureInfo = _textureJs.TextureInfo;
      TextureViewInfo = _textureJs.TextureViewInfo;
      Texture = _textureJs.Texture;
    }],
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
       * @hidden
       */
      replaceProperty(legacyCC, 'cc', [{
        name: 'GFXDynamicState',
        newName: 'DynamicStateFlagBit'
      }, {
        name: 'GFXBindingType',
        newName: 'DescriptorType'
      }, {
        name: 'GFXBindingLayout',
        newName: 'DescriptorSet'
      }]);
      removeProperty(CommandBuffer.prototype, 'CommandBuffer.prototype', [{
        name: 'bindBindingLayout',
        suggest: 'Use `bindDescriptorSet` instead'
      }]); // Deprecate GFX prefix APIs

      _export("GFX_DESCRIPTOR_BUFFER_TYPE", DESCRIPTOR_BUFFER_TYPE);

      _export("GFX_DESCRIPTOR_SAMPLER_TYPE", DESCRIPTOR_SAMPLER_TYPE);

      _export("GFXDescriptorSetInfo", DescriptorSetInfo);

      _export("GFXDescriptorSet", DescriptorSet);

      _export("GFXDrawInfo", DrawInfo);

      _export("GFX_DRAW_INFO_SIZE", DRAW_INFO_SIZE);

      _export("GFXIndirectBuffer", IndirectBuffer);

      _export("GFXBufferInfo", BufferInfo);

      _export("GFXBufferViewInfo", BufferViewInfo);

      _export("GFXBuffer", Buffer);

      _export("GFXCommandBufferInfo", CommandBufferInfo);

      _export("GFXCommandBuffer", CommandBuffer);

      _export("GFX_MAX_ATTACHMENTS", MAX_ATTACHMENTS);

      _export("GFXObjectType", ObjectType);

      _export("GFXObject", Obj);

      _export("GFXAttributeName", AttributeName);

      _export("GFXType", Type);

      _export("GFXFormat", Format);

      _export("GFXBufferUsageBit", BufferUsageBit);

      _export("GFXMemoryUsageBit", MemoryUsageBit);

      _export("GFXBufferFlagBit", BufferFlagBit);

      _export("GFXBufferAccessBit", BufferAccessBit);

      _export("GFXPrimitiveMode", PrimitiveMode);

      _export("GFXPolygonMode", PolygonMode);

      _export("GFXShadeModel", ShadeModel);

      _export("GFXCullMode", CullMode);

      _export("GFXComparisonFunc", ComparisonFunc);

      _export("GFXStencilOp", StencilOp);

      _export("GFXBlendOp", BlendOp);

      _export("GFXBlendFactor", BlendFactor);

      _export("GFXColorMask", ColorMask);

      _export("GFXFilter", Filter);

      _export("GFXAddress", Address);

      _export("GFXTextureType", TextureType);

      _export("GFXTextureUsageBit", TextureUsageBit);

      _export("GFXSampleCount", SampleCount);

      _export("GFXTextureFlagBit", TextureFlagBit);

      _export("GFXShaderStageFlagBit", ShaderStageFlagBit);

      _export("GFXDescriptorType", DescriptorType);

      _export("GFXCommandBufferType", CommandBufferType);

      _export("GFXLoadOp", LoadOp);

      _export("GFXStoreOp", StoreOp);

      _export("GFXTextureLayout", TextureLayout);

      _export("GFXPipelineBindPoint", PipelineBindPoint);

      _export("GFXDynamicStateFlagBit", DynamicStateFlagBit);

      _export("GFXStencilFace", StencilFace);

      _export("GFXQueueType", QueueType);

      _export("GFXClearFlag", ClearFlag);

      _export("GFXFormatType", FormatType);

      _export("GFXAPI", API);

      _export("GFXSurfaceTransform", SurfaceTransform);

      _export("GFXFeature", Feature);

      _export("GFXFormatInfo", FormatInfo);

      _export("GFXMemoryStatus", MemoryStatus);

      _export("GFXFormatInfos", FormatInfos);

      _export("GFXFormatSize", FormatSize);

      _export("GFXFormatSurfaceSize", FormatSurfaceSize);

      _export("GFXRect", Rect);

      _export("GFXViewport", Viewport);

      _export("GFXColor", Color);

      _export("GFXOffset", Offset);

      _export("GFXExtent", Extent);

      _export("GFXTextureSubres", TextureSubres);

      _export("GFXTextureCopy", TextureCopy);

      _export("GFXBufferTextureCopy", BufferTextureCopy);

      _export("GFXBindingMappingInfo", BindingMappingInfo);

      _export("GFXDeviceInfo", DeviceInfo);

      _export("GFXDevice", Device);

      _export("GFXFramebufferInfo", FramebufferInfo);

      _export("GFXFramebuffer", Framebuffer);

      _export("GFXAttribute", Attribute);

      _export("GFXInputAssemblerInfo", InputAssemblerInfo);

      _export("GFXInputAssembler", InputAssembler);

      _export("GFXDescriptorSetLayoutBinding", DescriptorSetLayoutBinding);

      _export("GFXDescriptorSetLayoutInfo", DescriptorSetLayoutInfo);

      _export("GFX_DESCRIPTOR_DYNAMIC_TYPE", DESCRIPTOR_DYNAMIC_TYPE);

      _export("GFXDescriptorSetLayout", DescriptorSetLayout);

      _export("GFXPipelineLayoutInfo", PipelineLayoutInfo);

      _export("GFXPipelineLayout", PipelineLayout);

      _export("GFXRasterizerState", RasterizerState);

      _export("GFXDepthStencilState", DepthStencilState);

      _export("GFXBlendTarget", BlendTarget);

      _export("GFXBlendState", BlendState);

      _export("GFXInputState", InputState);

      _export("GFXPipelineStateInfo", PipelineStateInfo);

      _export("GFXPipelineState", PipelineState);

      _export("GFXFenceInfo", FenceInfo);

      _export("GFXFence", Fence);

      _export("GFXQueueInfo", QueueInfo);

      _export("GFXQueue", Queue);

      _export("GFXColorAttachment", ColorAttachment);

      _export("GFXDepthStencilAttachment", DepthStencilAttachment);

      _export("GFXSubPassInfo", SubPassInfo);

      _export("GFXRenderPassInfo", RenderPassInfo);

      _export("GFXRenderPass", RenderPass);

      _export("GFXSamplerInfo", SamplerInfo);

      _export("GFXSampler", Sampler);

      _export("GFXShaderStage", ShaderStage);

      _export("GFXUniform", Uniform);

      _export("GFXUniformBlock", UniformBlock);

      _export("GFXUniformSampler", UniformSampler);

      _export("GFXShaderInfo", ShaderInfo);

      _export("GFXShader", Shader);

      _export("GFXTextureInfo", TextureInfo);

      _export("GFXTextureViewInfo", TextureViewInfo);

      _export("GFXTexture", Texture); // Deprecated CC polyfill


      special = {
        // Special replacement
        // DRAW_INFO_SIZE: 'GFX_DRAW_INFO_SIZE',
        MAX_ATTACHMENTS: 'GFX_MAX_ATTACHMENTS',
        Obj: 'GFXObject',
        // Unchanged
        // DESCRIPTOR_BUFFER_TYPE: '',
        // DESCRIPTOR_SAMPLER_TYPE: '',
        getTypedArrayConstructor: '' // GFXFormatToWebGLType: '',
        // GFXFormatToWebGLInternalFormat: '',
        // GFXFormatToWebGLFormat: '',

      };

      for (api in polyfillCC) {
        deprecated = special[api];

        if (deprecated === '') {
          continue;
        } else if (deprecated === undefined) {
          deprecated = "GFX" + api;
        } // Deprecation


        replaceProperty(legacyCC, 'cc', [{
          name: deprecated,
          newName: api,
          target: legacyCC.gfx,
          targetName: 'cc.gfx'
        }]);
      }
    }
  };
});