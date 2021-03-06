"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGL2CommandBuffer = void 0;

var _commandBuffer = require("../command-buffer.js");

var _define = require("../define.js");

var _defineClass = require("../define-class.js");

var _webgl2Commands = require("./webgl2-commands.js");

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
class WebGL2CommandBuffer extends _commandBuffer.CommandBuffer {
  constructor(...args) {
    super(...args);
    this.cmdPackage = new _webgl2Commands.WebGL2CmdPackage();
    this._webGLAllocator = null;
    this._isInRenderPass = false;
    this._curGPUPipelineState = null;
    this._curGPUDescriptorSets = [];
    this._curGPUInputAssembler = null;
    this._curDynamicOffsets = [];
    this._curViewport = null;
    this._curScissor = null;
    this._curLineWidth = null;
    this._curDepthBias = null;
    this._curBlendConstants = [];
    this._curDepthBounds = null;
    this._curStencilWriteMask = null;
    this._curStencilCompareMask = null;
    this._isStateInvalied = false;
  }

  initialize(info) {
    this._type = info.type;
    this._queue = info.queue;
    this._webGLAllocator = this._device.cmdAllocator;
    const setCount = this._device.bindingMappingInfo.bufferOffsets.length;

    for (let i = 0; i < setCount; i++) {
      this._curGPUDescriptorSets.push(null);

      this._curDynamicOffsets.push([]);
    }

    return true;
  }

  destroy() {
    if (this._webGLAllocator) {
      this._webGLAllocator.clearCmds(this.cmdPackage);

      this._webGLAllocator = null;
    }
  }

  begin(renderPass, subpass = 0, frameBuffer) {
    this._webGLAllocator.clearCmds(this.cmdPackage);

    this._curGPUPipelineState = null;
    this._curGPUInputAssembler = null;
    this._curGPUDescriptorSets.length = 0;

    for (let i = 0; i < this._curDynamicOffsets.length; i++) {
      this._curDynamicOffsets[i].length = 0;
    }

    this._curViewport = null;
    this._curScissor = null;
    this._curLineWidth = null;
    this._curDepthBias = null;
    this._curBlendConstants.length = 0;
    this._curDepthBounds = null;
    this._curStencilWriteMask = null;
    this._curStencilCompareMask = null;
    this._numDrawCalls = 0;
    this._numInstances = 0;
    this._numTris = 0;
  }

  end() {
    if (this._isStateInvalied) {
      this.bindStates();
    }

    this._isInRenderPass = false;
  }

  beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
    const cmd = this._webGLAllocator.beginRenderPassCmdPool.alloc(_webgl2Commands.WebGL2CmdBeginRenderPass);

    cmd.gpuRenderPass = renderPass.gpuRenderPass;
    cmd.gpuFramebuffer = framebuffer.gpuFramebuffer;
    cmd.renderArea = renderArea;

    for (let i = 0; i < clearColors.length; ++i) {
      cmd.clearColors[i] = clearColors[i];
    }

    cmd.clearDepth = clearDepth;
    cmd.clearStencil = clearStencil;
    this.cmdPackage.beginRenderPassCmds.push(cmd);
    this.cmdPackage.cmds.push(_webgl2Commands.WebGL2Cmd.BEGIN_RENDER_PASS);
    this._isInRenderPass = true;
  }

  endRenderPass() {
    this._isInRenderPass = false;
  }

  bindPipelineState(pipelineState) {
    const gpuPipelineState = pipelineState.gpuPipelineState;

    if (gpuPipelineState !== this._curGPUPipelineState) {
      this._curGPUPipelineState = gpuPipelineState;
      this._isStateInvalied = true;
    }
  }

  bindDescriptorSet(set, descriptorSet, dynamicOffsets) {
    const gpuDescriptorSets = descriptorSet.gpuDescriptorSet;

    if (gpuDescriptorSets !== this._curGPUDescriptorSets[set]) {
      this._curGPUDescriptorSets[set] = gpuDescriptorSets;
      this._isStateInvalied = true;
    }

    if (dynamicOffsets) {
      const offsets = this._curDynamicOffsets[set];

      for (let i = 0; i < dynamicOffsets.length; i++) offsets[i] = dynamicOffsets[i];

      offsets.length = dynamicOffsets.length;
      this._isStateInvalied = true;
    }
  }

  bindInputAssembler(inputAssembler) {
    const gpuInputAssembler = inputAssembler.gpuInputAssembler;
    this._curGPUInputAssembler = gpuInputAssembler;
    this._isStateInvalied = true;
  }

  setViewport(viewport) {
    if (!this._curViewport) {
      this._curViewport = new _defineClass.Viewport(viewport.left, viewport.top, viewport.width, viewport.height, viewport.minDepth, viewport.maxDepth);
    } else if (this._curViewport.left !== viewport.left || this._curViewport.top !== viewport.top || this._curViewport.width !== viewport.width || this._curViewport.height !== viewport.height || this._curViewport.minDepth !== viewport.minDepth || this._curViewport.maxDepth !== viewport.maxDepth) {
      this._curViewport.left = viewport.left;
      this._curViewport.top = viewport.top;
      this._curViewport.width = viewport.width;
      this._curViewport.height = viewport.height;
      this._curViewport.minDepth = viewport.minDepth;
      this._curViewport.maxDepth = viewport.maxDepth;
      this._isStateInvalied = true;
    }
  }

  setScissor(scissor) {
    if (!this._curScissor) {
      this._curScissor = new _defineClass.Rect(scissor.x, scissor.y, scissor.width, scissor.height);
    } else if (this._curScissor.x !== scissor.x || this._curScissor.y !== scissor.y || this._curScissor.width !== scissor.width || this._curScissor.height !== scissor.height) {
      this._curScissor.x = scissor.x;
      this._curScissor.y = scissor.y;
      this._curScissor.width = scissor.width;
      this._curScissor.height = scissor.height;
      this._isStateInvalied = true;
    }
  }

  setLineWidth(lineWidth) {
    if (this._curLineWidth !== lineWidth) {
      this._curLineWidth = lineWidth;
      this._isStateInvalied = true;
    }
  }

  setDepthBias(depthBiasConstantFactor, depthBiasClamp, depthBiasSlopeFactor) {
    if (!this._curDepthBias) {
      this._curDepthBias = {
        constantFactor: depthBiasConstantFactor,
        clamp: depthBiasClamp,
        slopeFactor: depthBiasSlopeFactor
      };
      this._isStateInvalied = true;
    } else if (this._curDepthBias.constantFactor !== depthBiasConstantFactor || this._curDepthBias.clamp !== depthBiasClamp || this._curDepthBias.slopeFactor !== depthBiasSlopeFactor) {
      this._curDepthBias.constantFactor = depthBiasConstantFactor;
      this._curDepthBias.clamp = depthBiasClamp;
      this._curDepthBias.slopeFactor = depthBiasSlopeFactor;
      this._isStateInvalied = true;
    }
  }

  setBlendConstants(blendConstants) {
    if (blendConstants.length === 4 && (this._curBlendConstants[0] !== blendConstants[0] || this._curBlendConstants[1] !== blendConstants[1] || this._curBlendConstants[2] !== blendConstants[2] || this._curBlendConstants[3] !== blendConstants[3])) {
      this._curBlendConstants.length = 0;
      Array.prototype.push.apply(this._curBlendConstants, blendConstants);
      this._isStateInvalied = true;
    }
  }

  setDepthBound(minDepthBounds, maxDepthBounds) {
    if (!this._curDepthBounds) {
      this._curDepthBounds = {
        minBounds: minDepthBounds,
        maxBounds: maxDepthBounds
      };
      this._isStateInvalied = true;
    } else if (this._curDepthBounds.minBounds !== minDepthBounds || this._curDepthBounds.maxBounds !== maxDepthBounds) {
      this._curDepthBounds = {
        minBounds: minDepthBounds,
        maxBounds: maxDepthBounds
      };
      this._isStateInvalied = true;
    }
  }

  setStencilWriteMask(face, writeMask) {
    if (!this._curStencilWriteMask) {
      this._curStencilWriteMask = {
        face,
        writeMask
      };
      this._isStateInvalied = true;
    } else if (this._curStencilWriteMask.face !== face || this._curStencilWriteMask.writeMask !== writeMask) {
      this._curStencilWriteMask.face = face;
      this._curStencilWriteMask.writeMask = writeMask;
      this._isStateInvalied = true;
    }
  }

  setStencilCompareMask(face, reference, compareMask) {
    if (!this._curStencilCompareMask) {
      this._curStencilCompareMask = {
        face,
        reference,
        compareMask
      };
      this._isStateInvalied = true;
    } else if (this._curStencilCompareMask.face !== face || this._curStencilCompareMask.reference !== reference || this._curStencilCompareMask.compareMask !== compareMask) {
      this._curStencilCompareMask.face = face;
      this._curStencilCompareMask.reference = reference;
      this._curStencilCompareMask.compareMask = compareMask;
      this._isStateInvalied = true;
    }
  }

  draw(inputAssembler) {
    if (this._type === _define.CommandBufferType.PRIMARY && this._isInRenderPass || this._type === _define.CommandBufferType.SECONDARY) {
      if (this._isStateInvalied) {
        this.bindStates();
      }

      const cmd = this._webGLAllocator.drawCmdPool.alloc(_webgl2Commands.WebGL2CmdDraw); // cmd.drawInfo = inputAssembler;


      cmd.drawInfo.vertexCount = inputAssembler.vertexCount;
      cmd.drawInfo.firstVertex = inputAssembler.firstVertex;
      cmd.drawInfo.indexCount = inputAssembler.indexCount;
      cmd.drawInfo.firstIndex = inputAssembler.firstIndex;
      cmd.drawInfo.vertexOffset = inputAssembler.vertexOffset;
      cmd.drawInfo.instanceCount = inputAssembler.instanceCount;
      cmd.drawInfo.firstInstance = inputAssembler.firstInstance;
      this.cmdPackage.drawCmds.push(cmd);
      this.cmdPackage.cmds.push(_webgl2Commands.WebGL2Cmd.DRAW);
      ++this._numDrawCalls;
      this._numInstances += inputAssembler.instanceCount;
      const indexCount = inputAssembler.indexCount || inputAssembler.vertexCount;

      if (this._curGPUPipelineState) {
        const glPrimitive = this._curGPUPipelineState.glPrimitive;

        switch (glPrimitive) {
          case 0x0004:
            {
              // WebGLRenderingContext.TRIANGLES
              this._numTris += indexCount / 3 * Math.max(inputAssembler.instanceCount, 1);
              break;
            }

          case 0x0005: // WebGLRenderingContext.TRIANGLE_STRIP

          case 0x0006:
            {
              // WebGLRenderingContext.TRIANGLE_FAN
              this._numTris += (indexCount - 2) * Math.max(inputAssembler.instanceCount, 1);
              break;
            }

          default:
        }
      }
    } else {
      console.error('Command \'draw\' must be recorded inside a render pass.');
    }
  }

  updateBuffer(buffer, data, size) {
    if (this._type === _define.CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === _define.CommandBufferType.SECONDARY) {
      const gpuBuffer = buffer.gpuBuffer;

      if (gpuBuffer) {
        const cmd = this._webGLAllocator.updateBufferCmdPool.alloc(_webgl2Commands.WebGL2CmdUpdateBuffer);

        let buffSize = 0;
        let buff = null; // TODO: Have to copy to staging buffer first to make this work for the execution is deferred.
        // But since we are using specialized primary command buffers in WebGL backends, we leave it as is for now

        if (buffer.usage & _define.BufferUsageBit.INDIRECT) {
          buff = data;
        } else {
          if (size !== undefined) {
            buffSize = size;
          } else {
            buffSize = data.byteLength;
          }

          buff = data;
        }

        cmd.gpuBuffer = gpuBuffer;
        cmd.buffer = buff;
        cmd.offset = 0;
        cmd.size = buffSize;
        this.cmdPackage.updateBufferCmds.push(cmd);
        this.cmdPackage.cmds.push(_webgl2Commands.WebGL2Cmd.UPDATE_BUFFER);
      }
    } else {
      console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
    }
  }

  copyBuffersToTexture(buffers, texture, regions) {
    if (this._type === _define.CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === _define.CommandBufferType.SECONDARY) {
      const gpuTexture = texture.gpuTexture;

      if (gpuTexture) {
        const cmd = this._webGLAllocator.copyBufferToTextureCmdPool.alloc(_webgl2Commands.WebGL2CmdCopyBufferToTexture);

        cmd.gpuTexture = gpuTexture;
        cmd.regions = regions; // TODO: Have to copy to staging buffer first to make this work for the execution is deferred.
        // But since we are using specialized primary command buffers in WebGL backends, we leave it as is for now

        cmd.buffers = buffers;
        this.cmdPackage.copyBufferToTextureCmds.push(cmd);
        this.cmdPackage.cmds.push(_webgl2Commands.WebGL2Cmd.COPY_BUFFER_TO_TEXTURE);
      }
    } else {
      console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
    }
  }

  execute(cmdBuffs, count) {
    for (let i = 0; i < count; ++i) {
      const webGL2CmdBuff = cmdBuffs[i];

      for (let c = 0; c < webGL2CmdBuff.cmdPackage.beginRenderPassCmds.length; ++c) {
        const cmd = webGL2CmdBuff.cmdPackage.beginRenderPassCmds.array[c];
        ++cmd.refCount;
        this.cmdPackage.beginRenderPassCmds.push(cmd);
      }

      for (let c = 0; c < webGL2CmdBuff.cmdPackage.bindStatesCmds.length; ++c) {
        const cmd = webGL2CmdBuff.cmdPackage.bindStatesCmds.array[c];
        ++cmd.refCount;
        this.cmdPackage.bindStatesCmds.push(cmd);
      }

      for (let c = 0; c < webGL2CmdBuff.cmdPackage.drawCmds.length; ++c) {
        const cmd = webGL2CmdBuff.cmdPackage.drawCmds.array[c];
        ++cmd.refCount;
        this.cmdPackage.drawCmds.push(cmd);
      }

      for (let c = 0; c < webGL2CmdBuff.cmdPackage.updateBufferCmds.length; ++c) {
        const cmd = webGL2CmdBuff.cmdPackage.updateBufferCmds.array[c];
        ++cmd.refCount;
        this.cmdPackage.updateBufferCmds.push(cmd);
      }

      for (let c = 0; c < webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.length; ++c) {
        const cmd = webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.array[c];
        ++cmd.refCount;
        this.cmdPackage.copyBufferToTextureCmds.push(cmd);
      }

      this.cmdPackage.cmds.concat(webGL2CmdBuff.cmdPackage.cmds.array);
      this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
      this._numInstances += webGL2CmdBuff._numInstances;
      this._numTris += webGL2CmdBuff._numTris;
    }
  }

  get webGLDevice() {
    return this._device;
  }

  bindStates() {
    const bindStatesCmd = this._webGLAllocator.bindStatesCmdPool.alloc(_webgl2Commands.WebGL2CmdBindStates);

    bindStatesCmd.gpuPipelineState = this._curGPUPipelineState;
    Array.prototype.push.apply(bindStatesCmd.gpuDescriptorSets, this._curGPUDescriptorSets);

    for (let i = 0; i < this._curDynamicOffsets.length; i++) {
      Array.prototype.push.apply(bindStatesCmd.dynamicOffsets, this._curDynamicOffsets[i]);
    }

    bindStatesCmd.gpuInputAssembler = this._curGPUInputAssembler;
    bindStatesCmd.viewport = this._curViewport;
    bindStatesCmd.scissor = this._curScissor;
    bindStatesCmd.lineWidth = this._curLineWidth;
    bindStatesCmd.depthBias = this._curDepthBias;
    Array.prototype.push.apply(bindStatesCmd.blendConstants, this._curBlendConstants);
    bindStatesCmd.depthBounds = this._curDepthBounds;
    bindStatesCmd.stencilWriteMask = this._curStencilWriteMask;
    bindStatesCmd.stencilCompareMask = this._curStencilCompareMask;
    this.cmdPackage.bindStatesCmds.push(bindStatesCmd);
    this.cmdPackage.cmds.push(_webgl2Commands.WebGL2Cmd.BIND_STATES);
    this._isStateInvalied = false;
  }

}

exports.WebGL2CommandBuffer = WebGL2CommandBuffer;