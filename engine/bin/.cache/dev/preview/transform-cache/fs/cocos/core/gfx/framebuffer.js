System.register("q-bundled:///fs/cocos/core/gfx/framebuffer.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var Obj, ObjectType, FramebufferInfo, Framebuffer;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_defineJs) {
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      _export("FramebufferInfo", FramebufferInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function FramebufferInfo(renderPass, colorTextures, depthStencilTexture, colorMipmapLevels, depStencilMipmapLevel) {
        if (colorTextures === void 0) {
          colorTextures = [];
        }

        if (depthStencilTexture === void 0) {
          depthStencilTexture = null;
        }

        if (colorMipmapLevels === void 0) {
          colorMipmapLevels = [];
        }

        if (depStencilMipmapLevel === void 0) {
          depStencilMipmapLevel = 0;
        }

        this.renderPass = renderPass;
        this.colorTextures = colorTextures;
        this.depthStencilTexture = depthStencilTexture;
        this.colorMipmapLevels = colorMipmapLevels;
        this.depStencilMipmapLevel = depStencilMipmapLevel;
      });
      /**
       * @en GFX frame buffer.
       * @zh GFX 帧缓冲。
       */


      _export("Framebuffer", Framebuffer = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(Framebuffer, _Obj);

        _createClass(Framebuffer, [{
          key: "renderPass",

          /**
           * @en Get current render pass.
           * @zh GFX 渲染过程。
           */
          get: function get() {
            return this._renderPass;
          }
          /**
           * @en Get current color views.
           * @zh 颜色纹理视图数组。
           */

        }, {
          key: "colorTextures",
          get: function get() {
            return this._colorTextures;
          }
          /**
           * @en Get current depth stencil views.
           * @zh 深度模板纹理视图。
           */

        }, {
          key: "depthStencilTexture",
          get: function get() {
            return this._depthStencilTexture;
          }
        }]);

        function Framebuffer(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.FRAMEBUFFER) || this;
          _this._device = void 0;
          _this._renderPass = null;
          _this._colorTextures = [];
          _this._depthStencilTexture = null;
          _this._device = device;
          return _this;
        }

        return Framebuffer;
      }(Obj));
    }
  };
});