System.register("q-bundled:///fs/cocos/core/gfx/polyfill-legacy-cc.js", ["./buffer.js", "./command-buffer.js", "./device.js", "./framebuffer.js", "./input-assembler.js", "./pipeline-state.js", "./queue.js", "./render-pass.js", "./sampler.js", "./shader.js", "./texture.js", "./define.js", "./define-class.js"], function (_export, _context) {
  "use strict";

  var Buffer, CommandBuffer, Device, Framebuffer, InputAssembler, PipelineState, Queue, RenderPass, Sampler, Shader, Texture, Address, AttributeName, BlendFactor, BlendOp, BufferAccessBit, BufferFlagBit, BufferUsageBit, ClearFlag, ColorMask, CommandBufferType, ComparisonFunc, CullMode, DescriptorType, DynamicStateFlagBit, Filter, Format, FormatInfo, FormatInfos, FormatSize, FormatSurfaceSize, FormatType, GetTypeSize, LoadOp, MAX_ATTACHMENTS, MemoryStatus, MemoryUsageBit, Obj, ObjectType, PipelineBindPoint, PolygonMode, PrimitiveMode, QueueType, SampleCount, ShadeModel, ShaderStageFlagBit, StencilFace, StencilOp, StoreOp, TextureFlagBit, TextureLayout, TextureType, TextureUsageBit, Type, getTypedArrayConstructor, BufferTextureCopy, Color, Extent, Offset, Rect, TextureCopy, TextureSubres, Viewport, polyfillCC;
  return {
    setters: [function (_bufferJs) {
      Buffer = _bufferJs.Buffer;
    }, function (_commandBufferJs) {
      CommandBuffer = _commandBufferJs.CommandBuffer;
    }, function (_deviceJs) {
      Device = _deviceJs.Device;
    }, function (_framebufferJs) {
      Framebuffer = _framebufferJs.Framebuffer;
    }, function (_inputAssemblerJs) {
      InputAssembler = _inputAssemblerJs.InputAssembler;
    }, function (_pipelineStateJs) {
      PipelineState = _pipelineStateJs.PipelineState;
    }, function (_queueJs) {
      Queue = _queueJs.Queue;
    }, function (_renderPassJs) {
      RenderPass = _renderPassJs.RenderPass;
    }, function (_samplerJs) {
      Sampler = _samplerJs.Sampler;
    }, function (_shaderJs) {
      Shader = _shaderJs.Shader;
    }, function (_textureJs) {
      Texture = _textureJs.Texture;
    }, function (_defineJs) {
      Address = _defineJs.Address;
      AttributeName = _defineJs.AttributeName;
      BlendFactor = _defineJs.BlendFactor;
      BlendOp = _defineJs.BlendOp;
      BufferAccessBit = _defineJs.BufferAccessBit;
      BufferFlagBit = _defineJs.BufferFlagBit;
      BufferUsageBit = _defineJs.BufferUsageBit;
      ClearFlag = _defineJs.ClearFlag;
      ColorMask = _defineJs.ColorMask;
      CommandBufferType = _defineJs.CommandBufferType;
      ComparisonFunc = _defineJs.ComparisonFunc;
      CullMode = _defineJs.CullMode;
      DescriptorType = _defineJs.DescriptorType;
      DynamicStateFlagBit = _defineJs.DynamicStateFlagBit;
      Filter = _defineJs.Filter;
      Format = _defineJs.Format;
      FormatInfo = _defineJs.FormatInfo;
      FormatInfos = _defineJs.FormatInfos;
      FormatSize = _defineJs.FormatSize;
      FormatSurfaceSize = _defineJs.FormatSurfaceSize;
      FormatType = _defineJs.FormatType;
      GetTypeSize = _defineJs.GetTypeSize;
      LoadOp = _defineJs.LoadOp;
      MAX_ATTACHMENTS = _defineJs.MAX_ATTACHMENTS;
      MemoryStatus = _defineJs.MemoryStatus;
      MemoryUsageBit = _defineJs.MemoryUsageBit;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
      PipelineBindPoint = _defineJs.PipelineBindPoint;
      PolygonMode = _defineJs.PolygonMode;
      PrimitiveMode = _defineJs.PrimitiveMode;
      QueueType = _defineJs.QueueType;
      SampleCount = _defineJs.SampleCount;
      ShadeModel = _defineJs.ShadeModel;
      ShaderStageFlagBit = _defineJs.ShaderStageFlagBit;
      StencilFace = _defineJs.StencilFace;
      StencilOp = _defineJs.StencilOp;
      StoreOp = _defineJs.StoreOp;
      TextureFlagBit = _defineJs.TextureFlagBit;
      TextureLayout = _defineJs.TextureLayout;
      TextureType = _defineJs.TextureType;
      TextureUsageBit = _defineJs.TextureUsageBit;
      Type = _defineJs.Type;
      getTypedArrayConstructor = _defineJs.getTypedArrayConstructor;
    }, function (_defineClassJs) {
      BufferTextureCopy = _defineClassJs.BufferTextureCopy;
      Color = _defineClassJs.Color;
      Extent = _defineClassJs.Extent;
      Offset = _defineClassJs.Offset;
      Rect = _defineClassJs.Rect;
      TextureCopy = _defineClassJs.TextureCopy;
      TextureSubres = _defineClassJs.TextureSubres;
      Viewport = _defineClassJs.Viewport;
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
      _export("polyfillCC", polyfillCC = {
        Device: Device,
        Buffer: Buffer,
        Texture: Texture,
        Sampler: Sampler,
        Shader: Shader,
        InputAssembler: InputAssembler,
        RenderPass: RenderPass,
        Framebuffer: Framebuffer,
        PipelineState: PipelineState,
        CommandBuffer: CommandBuffer,
        Queue: Queue,
        FormatSize: FormatSize,
        FormatSurfaceSize: FormatSurfaceSize,
        GetTypeSize: GetTypeSize,
        getTypedArrayConstructor: getTypedArrayConstructor,
        MAX_ATTACHMENTS: MAX_ATTACHMENTS,
        ObjectType: ObjectType,
        Obj: Obj,
        AttributeName: AttributeName,
        Type: Type,
        Format: Format,
        BufferUsageBit: BufferUsageBit,
        MemoryUsageBit: MemoryUsageBit,
        BufferFlagBit: BufferFlagBit,
        BufferAccessBit: BufferAccessBit,
        PrimitiveMode: PrimitiveMode,
        PolygonMode: PolygonMode,
        ShadeModel: ShadeModel,
        CullMode: CullMode,
        ComparisonFunc: ComparisonFunc,
        StencilOp: StencilOp,
        BlendOp: BlendOp,
        BlendFactor: BlendFactor,
        ColorMask: ColorMask,
        Filter: Filter,
        Address: Address,
        TextureType: TextureType,
        TextureUsageBit: TextureUsageBit,
        SampleCount: SampleCount,
        TextureFlagBit: TextureFlagBit,
        ShaderStageFlagBit: ShaderStageFlagBit,
        DescriptorType: DescriptorType,
        CommandBufferType: CommandBufferType,
        LoadOp: LoadOp,
        StoreOp: StoreOp,
        TextureLayout: TextureLayout,
        PipelineBindPoint: PipelineBindPoint,
        DynamicStateFlagBit: DynamicStateFlagBit,
        StencilFace: StencilFace,
        QueueType: QueueType,
        Rect: Rect,
        Viewport: Viewport,
        Color: Color,
        ClearFlag: ClearFlag,
        Offset: Offset,
        Extent: Extent,
        TextureSubres: TextureSubres,
        TextureCopy: TextureCopy,
        BufferTextureCopy: BufferTextureCopy,
        FormatType: FormatType,
        FormatInfo: FormatInfo,
        MemoryStatus: MemoryStatus,
        FormatInfos: FormatInfos
      });
    }
  };
});