System.register("q-bundled:///fs/cocos/core/gfx/webgl2/webgl2-texture.js", ["../define.js", "../texture.js", "./webgl2-commands.js"], function (_export, _context) {
  "use strict";

  var TextureFlagBit, FormatSurfaceSize, Texture, IsPowerOf2, WebGL2CmdFuncCreateTexture, WebGL2CmdFuncDestroyTexture, WebGL2CmdFuncResizeTexture, WebGL2Texture;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      TextureFlagBit = _defineJs.TextureFlagBit;
      FormatSurfaceSize = _defineJs.FormatSurfaceSize;
    }, function (_textureJs) {
      Texture = _textureJs.Texture;
      IsPowerOf2 = _textureJs.IsPowerOf2;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdFuncCreateTexture = _webgl2CommandsJs.WebGL2CmdFuncCreateTexture;
      WebGL2CmdFuncDestroyTexture = _webgl2CommandsJs.WebGL2CmdFuncDestroyTexture;
      WebGL2CmdFuncResizeTexture = _webgl2CommandsJs.WebGL2CmdFuncResizeTexture;
    }],
    execute: function () {
      _export("WebGL2Texture", WebGL2Texture = /*#__PURE__*/function (_Texture) {
        _inheritsLoose(WebGL2Texture, _Texture);

        function WebGL2Texture() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Texture.call.apply(_Texture, [this].concat(args)) || this;
          _this._gpuTexture = null;
          return _this;
        }

        var _proto = WebGL2Texture.prototype;

        _proto.initialize = function initialize(info) {
          if ('texture' in info) {
            console.log('WebGL2 does not support texture view.');
            return false;
          }

          this._type = info.type;
          this._usage = info.usage;
          this._format = info.format;
          this._width = info.width;
          this._height = info.height;
          this._depth = info.depth;
          this._layerCount = info.layerCount;
          this._levelCount = info.levelCount;
          this._samples = info.samples;
          this._flags = info.flags;
          this._isPowerOf2 = IsPowerOf2(this._width) && IsPowerOf2(this._height);
          this._size = FormatSurfaceSize(this._format, this.width, this.height, this.depth, this._levelCount) * this._layerCount;

          if (this._flags & TextureFlagBit.BAKUP_BUFFER) {
            this._buffer = new ArrayBuffer(this._size);
          }

          this._gpuTexture = {
            type: this._type,
            format: this._format,
            usage: this._usage,
            width: this._width,
            height: this._height,
            depth: this._depth,
            size: this._size,
            arrayLayer: this._layerCount,
            mipLevel: this._levelCount,
            samples: this._samples,
            flags: this._flags,
            isPowerOf2: this._isPowerOf2,
            glTarget: 0,
            glInternalFmt: 0,
            glFormat: 0,
            glType: 0,
            glUsage: 0,
            glTexture: null,
            glRenderbuffer: null,
            glWrapS: 0,
            glWrapT: 0,
            glMinFilter: 0,
            glMagFilter: 0
          };
          WebGL2CmdFuncCreateTexture(this._device, this._gpuTexture);
          this._device.memoryStatus.textureSize += this._size;
          return true;
        };

        _proto.destroy = function destroy() {
          if (this._gpuTexture) {
            WebGL2CmdFuncDestroyTexture(this._device, this._gpuTexture);
            this._device.memoryStatus.textureSize -= this._size;
            this._gpuTexture = null;
          }

          this._buffer = null;
        };

        _proto.resize = function resize(width, height) {
          var oldSize = this._size;
          this._width = width;
          this._height = height;
          this._size = FormatSurfaceSize(this._format, this.width, this.height, this.depth, this._levelCount) * this._layerCount;

          if (this._gpuTexture) {
            this._gpuTexture.width = width;
            this._gpuTexture.height = height;
            this._gpuTexture.size = this._size;
            WebGL2CmdFuncResizeTexture(this._device, this._gpuTexture);
            this._device.memoryStatus.textureSize -= oldSize;
            this._device.memoryStatus.textureSize += this._size;
          }
        };

        _createClass(WebGL2Texture, [{
          key: "gpuTexture",
          get: function get() {
            return this._gpuTexture;
          }
        }]);

        return WebGL2Texture;
      }(Texture));
    }
  };
});