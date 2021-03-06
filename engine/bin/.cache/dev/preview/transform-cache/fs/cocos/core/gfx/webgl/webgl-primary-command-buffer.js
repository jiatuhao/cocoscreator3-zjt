System.register("q-bundled:///fs/cocos/core/gfx/webgl/webgl-primary-command-buffer.js", ["../define.js", "./webgl-command-buffer.js", "./webgl-commands.js"], function (_export, _context) {
  "use strict";

  var BufferUsageBit, WebGLCommandBuffer, WebGLCmdFuncBeginRenderPass, WebGLCmdFuncBindStates, WebGLCmdFuncCopyBuffersToTexture, WebGLCmdFuncDraw, WebGLCmdFuncExecuteCmds, WebGLCmdFuncUpdateBuffer, _dynamicOffsets, WebGLPrimaryCommandBuffer;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      BufferUsageBit = _defineJs.BufferUsageBit;
    }, function (_webglCommandBufferJs) {
      WebGLCommandBuffer = _webglCommandBufferJs.WebGLCommandBuffer;
    }, function (_webglCommandsJs) {
      WebGLCmdFuncBeginRenderPass = _webglCommandsJs.WebGLCmdFuncBeginRenderPass;
      WebGLCmdFuncBindStates = _webglCommandsJs.WebGLCmdFuncBindStates;
      WebGLCmdFuncCopyBuffersToTexture = _webglCommandsJs.WebGLCmdFuncCopyBuffersToTexture;
      WebGLCmdFuncDraw = _webglCommandsJs.WebGLCmdFuncDraw;
      WebGLCmdFuncExecuteCmds = _webglCommandsJs.WebGLCmdFuncExecuteCmds;
      WebGLCmdFuncUpdateBuffer = _webglCommandsJs.WebGLCmdFuncUpdateBuffer;
    }],
    execute: function () {
      _dynamicOffsets = [];

      _export("WebGLPrimaryCommandBuffer", WebGLPrimaryCommandBuffer = /*#__PURE__*/function (_WebGLCommandBuffer) {
        _inheritsLoose(WebGLPrimaryCommandBuffer, _WebGLCommandBuffer);

        function WebGLPrimaryCommandBuffer() {
          return _WebGLCommandBuffer.apply(this, arguments) || this;
        }

        var _proto = WebGLPrimaryCommandBuffer.prototype;

        _proto.beginRenderPass = function beginRenderPass(renderPass, framebuffer, renderArea, clearColors, clearDepth, clearStencil) {
          WebGLCmdFuncBeginRenderPass(this._device, renderPass.gpuRenderPass, framebuffer.gpuFramebuffer, renderArea, clearColors, clearDepth, clearStencil);
          this._isInRenderPass = true;
        };

        _proto.draw = function draw(inputAssembler) {
          if (this._isInRenderPass) {
            if (this._isStateInvalied) {
              this.bindStates();
            }

            WebGLCmdFuncDraw(this._device, inputAssembler);
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
          if (!this._isInRenderPass) {
            var gpuBuffer = buffer.gpuBuffer;

            if (gpuBuffer) {
              var buffSize;

              if (size !== undefined) {
                buffSize = size;
              } else if (buffer.usage & BufferUsageBit.INDIRECT) {
                buffSize = 0;
              } else {
                buffSize = data.byteLength;
              }

              WebGLCmdFuncUpdateBuffer(this._device, gpuBuffer, data, 0, buffSize);
            }
          } else {
            console.error('Command \'updateBuffer\' must be recorded outside a render pass.');
          }
        };

        _proto.copyBuffersToTexture = function copyBuffersToTexture(buffers, texture, regions) {
          if (!this._isInRenderPass) {
            var gpuTexture = texture.gpuTexture;

            if (gpuTexture) {
              WebGLCmdFuncCopyBuffersToTexture(this._device, buffers, gpuTexture, regions);
            }
          } else {
            console.error('Command \'copyBufferToTexture\' must be recorded outside a render pass.');
          }
        };

        _proto.execute = function execute(cmdBuffs, count) {
          for (var i = 0; i < count; ++i) {
            // actually they are secondary buffers, the cast here is only for type checking
            var webGLCmdBuff = cmdBuffs[i];
            WebGLCmdFuncExecuteCmds(this._device, webGLCmdBuff.cmdPackage);
            this._numDrawCalls += webGLCmdBuff._numDrawCalls;
            this._numInstances += webGLCmdBuff._numInstances;
            this._numTris += webGLCmdBuff._numTris;
          }
        };

        _proto.bindStates = function bindStates() {
          _dynamicOffsets.length = 0;

          for (var i = 0; i < this._curDynamicOffsets.length; i++) {
            Array.prototype.push.apply(_dynamicOffsets, this._curDynamicOffsets[i]);
          }

          WebGLCmdFuncBindStates(this._device, this._curGPUPipelineState, this._curGPUInputAssembler, this._curGPUDescriptorSets, _dynamicOffsets, this._curViewport, this._curScissor, this._curLineWidth, this._curDepthBias, this._curBlendConstants, this._curDepthBounds, this._curStencilWriteMask, this._curStencilCompareMask);
          this._isStateInvalied = false;
        };

        return WebGLPrimaryCommandBuffer;
      }(WebGLCommandBuffer));
    }
  };
});