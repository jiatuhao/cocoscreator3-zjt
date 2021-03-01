"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfillCC = void 0;

var _buffer = require("./buffer.js");

var _commandBuffer = require("./command-buffer.js");

var _device = require("./device.js");

var _framebuffer = require("./framebuffer.js");

var _inputAssembler = require("./input-assembler.js");

var _pipelineState = require("./pipeline-state.js");

var _queue = require("./queue.js");

var _renderPass = require("./render-pass.js");

var _sampler = require("./sampler.js");

var _shader = require("./shader.js");

var _texture = require("./texture.js");

var _define = require("./define.js");

var _defineClass = require("./define-class.js");

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
const polyfillCC = {
  Device: _device.Device,
  Buffer: _buffer.Buffer,
  Texture: _texture.Texture,
  Sampler: _sampler.Sampler,
  Shader: _shader.Shader,
  InputAssembler: _inputAssembler.InputAssembler,
  RenderPass: _renderPass.RenderPass,
  Framebuffer: _framebuffer.Framebuffer,
  PipelineState: _pipelineState.PipelineState,
  CommandBuffer: _commandBuffer.CommandBuffer,
  Queue: _queue.Queue,
  FormatSize: _define.FormatSize,
  FormatSurfaceSize: _define.FormatSurfaceSize,
  GetTypeSize: _define.GetTypeSize,
  getTypedArrayConstructor: _define.getTypedArrayConstructor,
  MAX_ATTACHMENTS: _define.MAX_ATTACHMENTS,
  ObjectType: _define.ObjectType,
  Obj: _define.Obj,
  AttributeName: _define.AttributeName,
  Type: _define.Type,
  Format: _define.Format,
  BufferUsageBit: _define.BufferUsageBit,
  MemoryUsageBit: _define.MemoryUsageBit,
  BufferFlagBit: _define.BufferFlagBit,
  BufferAccessBit: _define.BufferAccessBit,
  PrimitiveMode: _define.PrimitiveMode,
  PolygonMode: _define.PolygonMode,
  ShadeModel: _define.ShadeModel,
  CullMode: _define.CullMode,
  ComparisonFunc: _define.ComparisonFunc,
  StencilOp: _define.StencilOp,
  BlendOp: _define.BlendOp,
  BlendFactor: _define.BlendFactor,
  ColorMask: _define.ColorMask,
  Filter: _define.Filter,
  Address: _define.Address,
  TextureType: _define.TextureType,
  TextureUsageBit: _define.TextureUsageBit,
  SampleCount: _define.SampleCount,
  TextureFlagBit: _define.TextureFlagBit,
  ShaderStageFlagBit: _define.ShaderStageFlagBit,
  DescriptorType: _define.DescriptorType,
  CommandBufferType: _define.CommandBufferType,
  LoadOp: _define.LoadOp,
  StoreOp: _define.StoreOp,
  TextureLayout: _define.TextureLayout,
  PipelineBindPoint: _define.PipelineBindPoint,
  DynamicStateFlagBit: _define.DynamicStateFlagBit,
  StencilFace: _define.StencilFace,
  QueueType: _define.QueueType,
  Rect: _defineClass.Rect,
  Viewport: _defineClass.Viewport,
  Color: _defineClass.Color,
  ClearFlag: _define.ClearFlag,
  Offset: _defineClass.Offset,
  Extent: _defineClass.Extent,
  TextureSubres: _defineClass.TextureSubres,
  TextureCopy: _defineClass.TextureCopy,
  BufferTextureCopy: _defineClass.BufferTextureCopy,
  FormatType: _define.FormatType,
  FormatInfo: _define.FormatInfo,
  MemoryStatus: _define.MemoryStatus,
  FormatInfos: _define.FormatInfos
};
exports.polyfillCC = polyfillCC;