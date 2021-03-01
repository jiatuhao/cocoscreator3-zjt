System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-buffer.js", ["../buffer.js", "../define.js", "./webgl2-commands.js"], function (_export, _context) {
  "use strict";

  var Buffer, IndirectBuffer, BufferFlagBit, BufferUsageBit, WebGL2CmdFuncCreateBuffer, WebGL2CmdFuncDestroyBuffer, WebGL2CmdFuncResizeBuffer, WebGL2CmdFuncUpdateBuffer, WebGL2Buffer;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_bufferJs) {
      Buffer = _bufferJs.Buffer;
      IndirectBuffer = _bufferJs.IndirectBuffer;
    }, function (_defineJs) {
      BufferFlagBit = _defineJs.BufferFlagBit;
      BufferUsageBit = _defineJs.BufferUsageBit;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdFuncCreateBuffer = _webgl2CommandsJs.WebGL2CmdFuncCreateBuffer;
      WebGL2CmdFuncDestroyBuffer = _webgl2CommandsJs.WebGL2CmdFuncDestroyBuffer;
      WebGL2CmdFuncResizeBuffer = _webgl2CommandsJs.WebGL2CmdFuncResizeBuffer;
      WebGL2CmdFuncUpdateBuffer = _webgl2CommandsJs.WebGL2CmdFuncUpdateBuffer;
    }],
    execute: function () {
      _export("WebGL2Buffer", WebGL2Buffer = /*#__PURE__*/function (_Buffer) {
        _inheritsLoose(WebGL2Buffer, _Buffer);

        function WebGL2Buffer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Buffer.call.apply(_Buffer, [this].concat(args)) || this;
          _this._gpuBuffer = null;
          return _this;
        }

        var _proto = WebGL2Buffer.prototype;

        _proto.initialize = function initialize(info) {
          if ('buffer' in info) {
            // buffer view
            this._isBufferView = true;
            var buffer = info.buffer;
            this._usage = buffer.usage;
            this._memUsage = buffer.memUsage;
            this._size = this._stride = info.range;
            this._count = 1;
            this._flags = buffer.flags;
            this._gpuBuffer = {
              usage: this._usage,
              memUsage: this._memUsage,
              size: this._size,
              stride: this._stride,
              buffer: this._bakcupBuffer,
              indirects: buffer.gpuBuffer.indirects,
              glTarget: buffer.gpuBuffer.glTarget,
              glBuffer: buffer.gpuBuffer.glBuffer,
              glOffset: info.offset
            };
          } else {
            // native buffer
            this._usage = info.usage;
            this._memUsage = info.memUsage;
            this._size = info.size;
            this._stride = Math.max(info.stride || this._size, 1);
            this._count = this._size / this._stride;
            this._flags = info.flags;

            if (this._usage & BufferUsageBit.INDIRECT) {
              this._indirectBuffer = new IndirectBuffer();
            }

            if (this._flags & BufferFlagBit.BAKUP_BUFFER) {
              this._bakcupBuffer = new Uint8Array(this._size);
              this._device.memoryStatus.bufferSize += this._size;
            }

            this._gpuBuffer = {
              usage: this._usage,
              memUsage: this._memUsage,
              size: this._size,
              stride: this._stride,
              buffer: this._bakcupBuffer,
              indirects: [],
              glTarget: 0,
              glBuffer: null,
              glOffset: 0
            };

            if (info.usage & BufferUsageBit.INDIRECT) {
              this._gpuBuffer.indirects = this._indirectBuffer.drawInfos;
            }

            WebGL2CmdFuncCreateBuffer(this._device, this._gpuBuffer);
            this._device.memoryStatus.bufferSize += this._size;
          }

          return true;
        };

        _proto.destroy = function destroy() {
          if (this._gpuBuffer) {
            if (!this._isBufferView) {
              WebGL2CmdFuncDestroyBuffer(this._device, this._gpuBuffer);
              this._device.memoryStatus.bufferSize -= this._size;
            }

            this._gpuBuffer = null;
          }

          this._bakcupBuffer = null;
        };

        _proto.resize = function resize(size) {
          if (this._isBufferView) {
            console.warn('cannot resize buffer views!');
            return;
          }

          var oldSize = this._size;

          if (oldSize === size) {
            return;
          }

          this._size = size;
          this._count = this._size / this._stride;

          if (this._bakcupBuffer) {
            var oldView = this._bakcupBuffer;
            this._bakcupBuffer = new Uint8Array(this._size);

            this._bakcupBuffer.set(oldView);

            this._device.memoryStatus.bufferSize -= oldSize;
            this._device.memoryStatus.bufferSize += size;
          }

          if (this._gpuBuffer) {
            if (this._bakcupBuffer) {
              this._gpuBuffer.buffer = this._bakcupBuffer;
            }

            this._gpuBuffer.size = size;

            if (size > 0) {
              WebGL2CmdFuncResizeBuffer(this._device, this._gpuBuffer);
              this._device.memoryStatus.bufferSize -= oldSize;
              this._device.memoryStatus.bufferSize += size;
            }
          }
        };

        _proto.update = function update(buffer, size) {
          if (this._isBufferView) {
            console.warn('cannot update through buffer views!');
            return;
          }

          var buffSize;

          if (size !== undefined) {
            buffSize = size;
          } else if (this._usage & BufferUsageBit.INDIRECT) {
            buffSize = 0;
          } else {
            buffSize = buffer.byteLength;
          }

          if (this._bakcupBuffer && buffer !== this._bakcupBuffer.buffer) {
            var view = new Uint8Array(buffer, 0, size);

            this._bakcupBuffer.set(view);
          }

          WebGL2CmdFuncUpdateBuffer(this._device, this._gpuBuffer, buffer, 0, buffSize);
        };

        _createClass(WebGL2Buffer, [{
          key: "gpuBuffer",
          get: function get() {
            return this._gpuBuffer;
          }
        }]);

        return WebGL2Buffer;
      }(Buffer));
    }
  };
});