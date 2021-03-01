System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-command-buffer.js", ["../command-buffer.js", "../define.js", "../define-class.js", "./webgl2-commands.js"], function (_export, _context) {
  "use strict";

  var CommandBuffer, BufferUsageBit, CommandBufferType, Rect, Viewport, WebGL2Cmd, WebGL2CmdBeginRenderPass, WebGL2CmdBindStates, WebGL2CmdCopyBufferToTexture, WebGL2CmdDraw, WebGL2CmdPackage, WebGL2CmdUpdateBuffer, WebGL2CommandBuffer;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_commandBufferJs) {
      CommandBuffer = _commandBufferJs.CommandBuffer;
    }, function (_defineJs) {
      BufferUsageBit = _defineJs.BufferUsageBit;
      CommandBufferType = _defineJs.CommandBufferType;
    }, function (_defineClassJs) {
      Rect = _defineClassJs.Rect;
      Viewport = _defineClassJs.Viewport;
    }, function (_webgl2CommandsJs) {
      WebGL2Cmd = _webgl2CommandsJs.WebGL2Cmd;
      WebGL2CmdBeginRenderPass = _webgl2CommandsJs.WebGL2CmdBeginRenderPass;
      WebGL2CmdBindStates = _webgl2CommandsJs.WebGL2CmdBindStates;
      WebGL2CmdCopyBufferToTexture = _webgl2CommandsJs.WebGL2CmdCopyBufferToTexture;
      WebGL2CmdDraw = _webgl2CommandsJs.WebGL2CmdDraw;
      WebGL2CmdPackage = _webgl2CommandsJs.WebGL2CmdPackage;
      WebGL2CmdUpdateBuffer = _webgl2CommandsJs.WebGL2CmdUpdateBuffer;
    }],
    execute: function () {
      _export("WebGL2CommandBuffer", WebGL2CommandBuffer = /*#__PURE__*/function (_CommandBuffer) {
        _inheritsLoose(WebGL2CommandBuffer, _CommandBuffer);

        function WebGL2CommandBuffer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _CommandBuffer.call.apply(_CommandBuffer, [this].concat(args)) || this;
          _this.cmdPackage = new WebGL2CmdPackage();
          _this._webGLAllocator = null;
          _this._isInRenderPass = false;
          _this._curGPUPipelineState = null;
          _this._curGPUDescriptorSets = [];
          _this._curGPUInputAssembler = null;
          _this._curDynamicOffsets = [];
          _this._curViewport = null;
          _this._curScissor = null;
          _this._curLineWidth = null;
          _this._curDepthBias = null;
          _this._curBlendConstants = [];
          _this._curDepthBounds = null;
          _this._curStencilWriteMask = null;
          _this._curStencilCompareMask = null;
          _this._isStateInvalied = false;
          return _this;
        }

        var _proto = WebGL2CommandBuffer.prototype;

        _proto.initialize = function initialize(info) {
          this._type = info.type;
          this._queue = info.queue;
          this._webGLAllocator = this._device.cmdAllocator;
          var setCount = this._device.bindingMappingInfo.bufferOffsets.length;

          for (var i = 0; i < setCount; i++) {
            this._curGPUDescriptorSets.push(null);

            this._curDynamicOffsets.push([]);
          }

          return true;
        };

        _proto.destroy = function destroy() {
          if (this._webGLAllocator) {
            this._webGLAllocator.clearCmds(this.cmdPackage);

            this._webGLAllocator = null;
          }
        };

        _proto.begin = function begin(renderPass, subpass, frameBuffer) {
          if (subpass === void 0) {
            subpass = 0;
          }

          this._webGLAllocator.clearCmds(this.cmdPackage);

          this._curGPUPipelineState = null;
          this._curGPUInputAssembler = null;
          this._curGPUDescriptorSets.length = 0;

          for (var i = 0; i < this._curDynamicOffsets.length; i++) {
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
        };

        _proto.end = function end() {
          if (this._isStateInvalied) {
            this.bindStates();
          }

          this._isInRenderPass = false;
        };

        _proto.beginRenderPass = function beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
          var cmd = this._webGLAllocator.beginRenderPassCmdPool.alloc(WebGL2CmdBeginRenderPass);

          cmd.gpuRenderPass = renderPass.gpuRenderPass;
          cmd.gpuFramebuffer = framebuffer.gpuFramebuffer;
          cmd.renderArea = renderArea;

          for (var i = 0; i < clearColors.length; ++i) {
            cmd.clearColors[i] = clearColors[i];
          }

          cmd.clearDepth = clearDepth;
          cmd.clearStencil = clearStencil;
          this.cmdPackage.beginRenderPassCmds.push(cmd);
          this.cmdPackage.cmds.push(WebGL2Cmd.BEGIN_RENDER_PASS);
          this._isInRenderPass = true;
        };

        _proto.endRenderPass = function endRenderPass() {
          this._isInRenderPass = false;
        };

        _proto.bindPipelineState = function bindPipelineState(pipelineState) {
          var gpuPipelineState = pipelineState.gpuPipelineState;

          if (gpuPipelineState !== this._curGPUPipelineState) {
            this._curGPUPipelineState = gpuPipelineState;
            this._isStateInvalied = true;
          }
        };

        _proto.bindDescriptorSet = function bindDescriptorSet(set, descriptorSet, dynamicOffsets) {
          var gpuDescriptorSets = descriptorSet.gpuDescriptorSet;

          if (gpuDescriptorSets !== this._curGPUDescriptorSets[set]) {
            this._curGPUDescriptorSets[set] = gpuDescriptorSets;
            this._isStateInvalied = true;
          }

          if (dynamicOffsets) {
            var offsets = this._curDynamicOffsets[set];

            for (var i = 0; i < dynamicOffsets.length; i++) {
              offsets[i] = dynamicOffsets[i];
            }

            offsets.length = dynamicOffsets.length;
            this._isStateInvalied = true;
          }
        };

        _proto.bindInputAssembler = function bindInputAssembler(inputAssembler) {
          var gpuInputAssembler = inputAssembler.gpuInputAssembler;
          this._curGPUInputAssembler = gpuInputAssembler;
          this._isStateInvalied = true;
        };

        _proto.setViewport = function setViewport(viewport) {
          if (!this._curViewport) {
            this._curViewport = new Viewport(viewport.left, viewport.top, viewport.width, viewport.height, viewport.minDepth, viewport.maxDepth);
          } else if (this._curViewport.left !== viewport.left || this._curViewport.top !== viewport.top || this._curViewport.width !== viewport.width || this._curViewport.height !== viewport.height || this._curViewport.minDepth !== viewport.minDepth || this._curViewport.maxDepth !== viewport.maxDepth) {
            this._curViewport.left = viewport.left;
            this._curViewport.top = viewport.top;
            this._curViewport.width = viewport.width;
            this._curViewport.height = viewport.height;
            this._curViewport.minDepth = viewport.minDepth;
            this._curViewport.maxDepth = viewport.maxDepth;
            this._isStateInvalied = true;
          }
        };

        _proto.setScissor = function setScissor(scissor) {
          if (!this._curScissor) {
            this._curScissor = new Rect(scissor.x, scissor.y, scissor.width, scissor.height);
          } else if (this._curScissor.x !== scissor.x || this._curScissor.y !== scissor.y || this._curScissor.width !== scissor.width || this._curScissor.height !== scissor.height) {
            this._curScissor.x = scissor.x;
            this._curScissor.y = scissor.y;
            this._curScissor.width = scissor.width;
            this._curScissor.height = scissor.height;
            this._isStateInvalied = true;
          }
        };

        _proto.setLineWidth = function setLineWidth(lineWidth) {
          if (this._curLineWidth !== lineWidth) {
            this._curLineWidth = lineWidth;
            this._isStateInvalied = true;
          }
        };

        _proto.setDepthBias = function setDepthBias(depthBiasConstantFactor, depthBiasClamp, depthBiasSlopeFactor) {
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
        };

        _proto.setBlendConstants = function setBlendConstants(blendConstants) {
          if (blendConstants.length === 4 && (this._curBlendConstants[0] !== blendConstants[0] || this._curBlendConstants[1] !== blendConstants[1] || this._curBlendConstants[2] !== blendConstants[2] || this._curBlendConstants[3] !== blendConstants[3])) {
            this._curBlendConstants.length = 0;
            Array.prototype.push.apply(this._curBlendConstants, blendConstants);
            this._isStateInvalied = true;
          }
        };

        _proto.setDepthBound = function setDepthBound(minDepthBounds, maxDepthBounds) {
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
        };

        _proto.setStencilWriteMask = function setStencilWriteMask(face, writeMask) {
          if (!this._curStencilWriteMask) {
            this._curStencilWriteMask = {
              face: face,
              writeMask: writeMask
            };
            this._isStateInvalied = true;
          } else if (this._curStencilWriteMask.face !== face || this._curStencilWriteMask.writeMask !== writeMask) {
            this._curStencilWriteMask.face = face;
            this._curStencilWriteMask.writeMask = writeMask;
            this._isStateInvalied = true;
          }
        };

        _proto.setStencilCompareMask = function setStencilCompareMask(face, reference, compareMask) {
          if (!this._curStencilCompareMask) {
            this._curStencilCompareMask = {
              face: face,
              reference: reference,
              compareMask: compareMask
            };
            this._isStateInvalied = true;
          } else if (this._curStencilCompareMask.face !== face || this._curStencilCompareMask.reference !== reference || this._curStencilCompareMask.compareMask !== compareMask) {
            this._curStencilCompareMask.face = face;
            this._curStencilCompareMask.reference = reference;
            this._curStencilCompareMask.compareMask = compareMask;
            this._isStateInvalied = true;
          }
        };

        _proto.draw = function draw(inputAssembler) {
          if (this._type === CommandBufferType.PRIMARY && this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
            if (this._isStateInvalied) {
              this.bindStates();
            }

            var cmd = this._webGLAllocator.drawCmdPool.alloc(WebGL2CmdDraw); // cmd.drawInfo = inputAssembler;


            cmd.drawInfo.vertexCount = inputAssembler.vertexCount;
            cmd.drawInfo.firstVertex = inputAssembler.firstVertex;
            cmd.drawInfo.indexCount = inputAssembler.indexCount;
            cmd.drawInfo.firstIndex = inputAssembler.firstIndex;
            cmd.drawInfo.vertexOffset = inputAssembler.vertexOffset;
            cmd.drawInfo.instanceCount = inputAssembler.instanceCount;
            cmd.drawInfo.firstInstance = inputAssembler.firstInstance;
            this.cmdPackage.drawCmds.push(cmd);
            this.cmdPackage.cmds.push(WebGL2Cmd.DRAW);
            ++this._numDrawCalls;
            this._numInstances += inputAssembler.instanceCount;
            var indexCount = inputAssembler.indexCount || inputAssembler.vertexCount;

            if (this._curGPUPipelineState) {
              var glPrimitive = this._curGPUPipelineState.glPrimitive;

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
        };

        _proto.updateBuffer = function updateBuffer(buffer, data, size) {
          if (this._type === CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
            var gpuBuffer = buffer.gpuBuffer;

            if (gpuBuffer) {
              var cmd = this._webGLAllocator.updateBufferCmdPool.alloc(WebGL2CmdUpdateBuffer);

              var buffSize = 0;
              var buff = null; // TODO: Have to copy to staging buffer first to make this work for the execution is deferred.
              // But since we are using specialized primary command buffers in WebGL backends, we leave it as is for now

              if (buffer.usage & BufferUsageBit.INDIRECT) {
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
              this.cmdPackage.cmds.push(WebGL2Cmd.UPDATE_BUFFER);
            }
          } else {
            console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
          }
        };

        _proto.copyBuffersToTexture = function copyBuffersToTexture(buffers, texture, regions) {
          if (this._type === CommandBufferType.PRIMARY && !this._isInRenderPass || this._type === CommandBufferType.SECONDARY) {
            var gpuTexture = texture.gpuTexture;

            if (gpuTexture) {
              var cmd = this._webGLAllocator.copyBufferToTextureCmdPool.alloc(WebGL2CmdCopyBufferToTexture);

              cmd.gpuTexture = gpuTexture;
              cmd.regions = regions; // TODO: Have to copy to staging buffer first to make this work for the execution is deferred.
              // But since we are using specialized primary command buffers in WebGL backends, we leave it as is for now

              cmd.buffers = buffers;
              this.cmdPackage.copyBufferToTextureCmds.push(cmd);
              this.cmdPackage.cmds.push(WebGL2Cmd.COPY_BUFFER_TO_TEXTURE);
            }
          } else {
            console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
          }
        };

        _proto.execute = function execute(cmdBuffs, count) {
          for (var i = 0; i < count; ++i) {
            var webGL2CmdBuff = cmdBuffs[i];

            for (var c = 0; c < webGL2CmdBuff.cmdPackage.beginRenderPassCmds.length; ++c) {
              var cmd = webGL2CmdBuff.cmdPackage.beginRenderPassCmds.array[c];
              ++cmd.refCount;
              this.cmdPackage.beginRenderPassCmds.push(cmd);
            }

            for (var _c = 0; _c < webGL2CmdBuff.cmdPackage.bindStatesCmds.length; ++_c) {
              var _cmd = webGL2CmdBuff.cmdPackage.bindStatesCmds.array[_c];
              ++_cmd.refCount;
              this.cmdPackage.bindStatesCmds.push(_cmd);
            }

            for (var _c2 = 0; _c2 < webGL2CmdBuff.cmdPackage.drawCmds.length; ++_c2) {
              var _cmd2 = webGL2CmdBuff.cmdPackage.drawCmds.array[_c2];
              ++_cmd2.refCount;
              this.cmdPackage.drawCmds.push(_cmd2);
            }

            for (var _c3 = 0; _c3 < webGL2CmdBuff.cmdPackage.updateBufferCmds.length; ++_c3) {
              var _cmd3 = webGL2CmdBuff.cmdPackage.updateBufferCmds.array[_c3];
              ++_cmd3.refCount;
              this.cmdPackage.updateBufferCmds.push(_cmd3);
            }

            for (var _c4 = 0; _c4 < webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.length; ++_c4) {
              var _cmd4 = webGL2CmdBuff.cmdPackage.copyBufferToTextureCmds.array[_c4];
              ++_cmd4.refCount;
              this.cmdPackage.copyBufferToTextureCmds.push(_cmd4);
            }

            this.cmdPackage.cmds.concat(webGL2CmdBuff.cmdPackage.cmds.array);
            this._numDrawCalls += webGL2CmdBuff._numDrawCalls;
            this._numInstances += webGL2CmdBuff._numInstances;
            this._numTris += webGL2CmdBuff._numTris;
          }
        };

        _proto.bindStates = function bindStates() {
          var bindStatesCmd = this._webGLAllocator.bindStatesCmdPool.alloc(WebGL2CmdBindStates);

          bindStatesCmd.gpuPipelineState = this._curGPUPipelineState;
          Array.prototype.push.apply(bindStatesCmd.gpuDescriptorSets, this._curGPUDescriptorSets);

          for (var i = 0; i < this._curDynamicOffsets.length; i++) {
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
          this.cmdPackage.cmds.push(WebGL2Cmd.BIND_STATES);
          this._isStateInvalied = false;
        };

        _createClass(WebGL2CommandBuffer, [{
          key: "webGLDevice",
          get: function get() {
            return this._device;
          }
        }]);

        return WebGL2CommandBuffer;
      }(CommandBuffer));
    }
  };
});