System.register("q-bundled:///fs/cocos/core/splash-screen.js", ["../../../virtual/internal%253Aconstants.js", "./animation/easing.js", "./assets/material.js", "./math/mat4.js", "./math/utils.js", "./platform/sys.js", "./gfx/index.js", "./pipeline/index.js", "./global-exports.js", "./renderer/core/memory-pools.js", "./pipeline/define.js", "./platform/index.js"], function (_export, _context) {
  "use strict";

  var COCOSPLAY, XIAOMI, JSB, easing, Material, preTransforms, clamp01, sys, SamplerInfo, TextureInfo, InputAssemblerInfo, Attribute, BufferInfo, Rect, Color, BufferTextureCopy, BufferUsageBit, Format, MemoryUsageBit, TextureType, TextureUsageBit, Address, PipelineStateManager, legacyCC, DSPool, ShaderPool, PassPool, PassView, SetIndex, error, SplashScreen;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      COCOSPLAY = _virtualInternal253AconstantsJs.COCOSPLAY;
      XIAOMI = _virtualInternal253AconstantsJs.XIAOMI;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_animationEasingJs) {
      easing = _animationEasingJs;
    }, function (_assetsMaterialJs) {
      Material = _assetsMaterialJs.Material;
    }, function (_mathMat4Js) {
      preTransforms = _mathMat4Js.preTransforms;
    }, function (_mathUtilsJs) {
      clamp01 = _mathUtilsJs.clamp01;
    }, function (_platformSysJs) {
      sys = _platformSysJs.sys;
    }, function (_gfxIndexJs) {
      SamplerInfo = _gfxIndexJs.SamplerInfo;
      TextureInfo = _gfxIndexJs.TextureInfo;
      InputAssemblerInfo = _gfxIndexJs.InputAssemblerInfo;
      Attribute = _gfxIndexJs.Attribute;
      BufferInfo = _gfxIndexJs.BufferInfo;
      Rect = _gfxIndexJs.Rect;
      Color = _gfxIndexJs.Color;
      BufferTextureCopy = _gfxIndexJs.BufferTextureCopy;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      Format = _gfxIndexJs.Format;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      Address = _gfxIndexJs.Address;
    }, function (_pipelineIndexJs) {
      PipelineStateManager = _pipelineIndexJs.PipelineStateManager;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_rendererCoreMemoryPoolsJs) {
      DSPool = _rendererCoreMemoryPoolsJs.DSPool;
      ShaderPool = _rendererCoreMemoryPoolsJs.ShaderPool;
      PassPool = _rendererCoreMemoryPoolsJs.PassPool;
      PassView = _rendererCoreMemoryPoolsJs.PassView;
    }, function (_pipelineDefineJs) {
      SetIndex = _pipelineDefineJs.SetIndex;
    }, function (_platformIndexJs) {
      error = _platformIndexJs.error;
    }],
    execute: function () {
      _export("SplashScreen", SplashScreen = /*#__PURE__*/function () {
        var _proto = SplashScreen.prototype;

        _proto.main = function main(root) {
          if (root == null) {
            error('RENDER ROOT IS NULL.');
            return;
          }

          if (window._CCSettings && window._CCSettings.splashScreen) {
            var setting = this.setting = window._CCSettings.splashScreen;
            setting.totalTime = this.setting.totalTime != null ? this.setting.totalTime : 3000;
            setting.base64src = this.setting.base64src || '';
            setting.effect = this.setting.effect || 'FADE-INOUT';
            setting.clearColor = this.setting.clearColor || new Color(0.88, 0.88, 0.88, 1);
            setting.displayRatio = this.setting.displayRatio != null ? this.setting.displayRatio : 0.4;
            setting.displayWatermark = this.setting.displayWatermark != null ? this.setting.displayWatermark : true;
          } else {
            this.setting = {
              totalTime: 3000,
              base64src: '',
              effect: 'FADE-INOUT',
              clearColor: new Color(0.88, 0.88, 0.88, 1),
              displayRatio: 0.4,
              displayWatermark: true
            };
          }

          if (this.setting.base64src === '' || this.setting.totalTime <= 0) {
            if (this.callBack) {
              this.callBack();
            }

            this.callBack = null;
            this.setting = null;
            this._directCall = true;
          } else {
            legacyCC.view.enableRetina(true);
            var designRes = window._CCSettings.designResolution;

            if (designRes) {
              legacyCC.view.setDesignResolutionSize(designRes.width, designRes.height, designRes.policy);
            } else {
              legacyCC.view.setDesignResolutionSize(960, 640, 4);
            }

            this.root = root;
            this.device = root.device;
            legacyCC.game.once(legacyCC.Game.EVENT_GAME_INITED, function () {
              legacyCC.director._lateUpdate = performance.now();
            }, legacyCC.director);
            this.callBack = null;
            this.cancelAnimate = false;
            this.startTime = -1; // this.setting.clearColor may not an instance of Color, so should create
            // Color manually, or will have problem on native.

            var clearColor = this.setting.clearColor;
            this.clearColors = [new Color(clearColor.x, clearColor.y, clearColor.z, clearColor.w)];
            var _this$device = this.device,
                width = _this$device.width,
                height = _this$device.height,
                surfaceTransform = _this$device.surfaceTransform;
            this.screenWidth = surfaceTransform % 2 ? height : width;
            this.screenHeight = surfaceTransform % 2 ? width : height;
            this.image = new Image();
            this.image.onload = this.init.bind(this);
            this.image.src = this.setting.base64src;
          }
        };

        _proto.setOnFinish = function setOnFinish(cb) {
          if (this._directCall) {
            if (cb) {
              SplashScreen._ins = undefined;
              cb();
              return;
            }
          }

          this.callBack = cb;
        };

        _proto._tryToStart = function _tryToStart() {
          if (this._splashFinish && this._loadFinish) {
            if (this.callBack) {
              this.callBack();
              this.hide();
              legacyCC.game.resume();
            }
          }
        };

        _proto.init = function init() {
          var _this = this;

          // adapt for native mac & ios
          if (JSB) {
            if (sys.os === legacyCC.sys.OS_OSX || sys.os === legacyCC.sys.OS_IOS) {
              var width = screen.width * devicePixelRatio;
              var height = screen.height * devicePixelRatio;
              this.device.resize(width, height);
              this.screenWidth = this.device.width;
              this.screenHeight = this.device.height;
            }
          } // TODO: hack for cocosPlay & XIAOMI cause on landscape canvas value is wrong


          if (COCOSPLAY || XIAOMI) {
            if (window._CCSettings.orientation === 'landscape' && this.device.width < this.device.height) {
              var _width = this.device.height;
              var _height = this.device.width;
              this.device.resize(_width, _height);
              this.screenWidth = this.device.width;
              this.screenHeight = this.device.height;
            }
          }

          this.initCMD();
          this.initIA();
          this.initPSO();

          if (this.setting.displayWatermark) {
            this.initText();
          }

          var animate = function animate(time) {
            if (_this.cancelAnimate) {
              return;
            }

            if (_this.startTime < 0) {
              _this.startTime = time;
            }

            var elapsedTime = time - _this.startTime;
            /** update uniform */

            var PERCENT = clamp01(elapsedTime / _this.setting.totalTime);
            var u_p = easing.cubicOut(PERCENT);
            if (_this.setting.effect === 'NONE') u_p = 1.0;

            _this.material.setProperty('u_precent', u_p);

            _this.material.passes[0].update();

            if (_this.setting.displayWatermark && _this.textMaterial) {
              _this.textMaterial.setProperty('u_precent', u_p);

              _this.textMaterial.passes[0].update();
            }

            _this.frame(time);

            if (elapsedTime > _this.setting.totalTime) {
              _this.splashFinish = true;
            }

            requestAnimationFrame(animate);
          };

          legacyCC.game.pause();
          this.handle = requestAnimationFrame(animate);
        };

        _proto.hide = function hide() {
          cancelAnimationFrame(this.handle);
          this.cancelAnimate = true; // here delay destroy：because ios immediately destroy input assmebler will crash & native renderer will mess.

          setTimeout(this.destroy.bind(this));
        };

        _proto.frame = function frame(time) {
          if (this.cancelAnimate) return; // TODO: hack for cocosPlay & XIAOMI cause on landscape canvas value is wrong

          if (COCOSPLAY || XIAOMI) {
            if (window._CCSettings.orientation === 'landscape' && this.device.width < this.device.height) {
              var width = this.device.height;
              var height = this.device.width;
              this.device.resize(width, height);
              this.screenWidth = this.device.width;
              this.screenHeight = this.device.height;
            }
          }

          var device = this.device;
          device.acquire(); // record command

          var cmdBuff = this.cmdBuff;
          var framebuffer = this.framebuffer;
          var renderArea = this.renderArea;

          if (JSB && (sys.os === legacyCC.sys.OS_OSX || sys.os === legacyCC.sys.OS_IOS)) {
            renderArea.height = device.nativeHeight;
            renderArea.width = device.nativeWidth;
          } else {
            renderArea.height = device.height;
            renderArea.width = device.width;
          }

          cmdBuff.begin();
          cmdBuff.beginRenderPass(framebuffer.renderPass, framebuffer, renderArea, this.clearColors, 1.0, 0);
          var pass = this.material.passes[0];
          var pso = PipelineStateManager.getOrCreatePipelineState(device, pass, this.shader, framebuffer.renderPass, this.assmebler);
          cmdBuff.bindPipelineState(pso);
          cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, pass.descriptorSet);
          cmdBuff.bindInputAssembler(this.assmebler);
          cmdBuff.draw(this.assmebler);

          if (this.setting.displayWatermark && this.textShader && this.textAssmebler) {
            var passText = this.textMaterial.passes[0];
            var psoWatermark = PipelineStateManager.getOrCreatePipelineState(device, passText, this.textShader, framebuffer.renderPass, this.textAssmebler);
            cmdBuff.bindPipelineState(psoWatermark);
            cmdBuff.bindDescriptorSet(SetIndex.MATERIAL, passText.descriptorSet);
            cmdBuff.bindInputAssembler(this.textAssmebler);
            cmdBuff.draw(this.textAssmebler);
          }

          cmdBuff.endRenderPass();
          cmdBuff.end();
          device.queue.submit([cmdBuff]);
          device.present();
        };

        _proto.initText = function initText() {
          /** texure */
          this.textImg = document.createElement('canvas');
          this.textImg.width = 330;
          this.textImg.height = 30;
          this.textImg.style.width = "" + this.textImg.width;
          this.textImg.style.height = "" + this.textImg.height;
          var ctx = this.textImg.getContext('2d');
          ctx.font = 18 + "px Arial";
          ctx.textBaseline = 'top';
          ctx.textAlign = 'left';
          ctx.fillStyle = '`#424242`';
          var text = 'Powered by Cocos Creator';
          var textMetrics = ctx.measureText(text);
          ctx.fillText(text, (330 - textMetrics.width) / 2, 6);
          this.textRegion = new BufferTextureCopy();
          this.textRegion.texExtent.width = this.textImg.width;
          this.textRegion.texExtent.height = this.textImg.height;
          this.textRegion.texExtent.depth = 1;
          this.textTexture = this.device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, Format.RGBA8, this.textImg.width, this.textImg.height));
          this.device.copyTexImagesToTexture([this.textImg], this.textTexture, [this.textRegion]);
          /** PSO */

          this.textMaterial = new Material();
          this.textMaterial.initialize({
            effectName: 'splash-screen'
          });
          var pass = this.textMaterial.passes[0];
          var binding = pass.getBinding('mainTexture');
          pass.bindTexture(binding, this.textTexture);
          this.textShader = ShaderPool.get(pass.getShaderVariant());
          DSPool.get(PassPool.get(pass.handle, PassView.DESCRIPTOR_SET)).update();
          /** Assembler */
          // create vertex buffer

          var vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
          var vbSize = vbStride * 4;
          this.textVB = this.device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, vbSize, vbStride));
          var verts = new Float32Array(4 * 4);
          var w = -this.textImg.width / 2;
          var h = -this.textImg.height / 2;

          if (this.screenWidth < this.screenHeight) {
            w = -this.screenWidth / 2 * 0.5;
            h = w / (this.textImg.width / this.textImg.height);
          } else {
            w = -this.screenHeight / 2 * 0.5;
            h = w / (this.textImg.width / this.textImg.height);
          }

          var n = 0;
          verts[n++] = w;
          verts[n++] = h;
          verts[n++] = 0.0;
          verts[n++] = 1.0;
          verts[n++] = -w;
          verts[n++] = h;
          verts[n++] = 1.0;
          verts[n++] = 1.0;
          verts[n++] = w;
          verts[n++] = -h;
          verts[n++] = 0.0;
          verts[n++] = 0.0;
          verts[n++] = -w;
          verts[n++] = -h;
          verts[n++] = 1.0;
          verts[n++] = 0.0; // translate to bottom

          for (var i = 0; i < verts.length; i += 4) {
            verts[i] += this.screenWidth / 2;
            verts[i + 1] += this.screenHeight * 0.1;
          } // doing the screen adaptation here will not support dynamic screen orientation changes


          var ySign = this.device.screenSpaceSignY;
          var preTransform = preTransforms[this.device.surfaceTransform];

          for (var _i = 0; _i < verts.length; _i += 4) {
            var x = verts[_i] / this.screenWidth * 2 - 1;
            var y = (verts[_i + 1] / this.screenHeight * 2 - 1) * ySign;
            verts[_i] = preTransform[0] * x + preTransform[2] * y;
            verts[_i + 1] = preTransform[1] * x + preTransform[3] * y;
          }

          this.textVB.update(verts); // create index buffer

          var ibStride = Uint16Array.BYTES_PER_ELEMENT;
          var ibSize = ibStride * 6;
          this.textIB = this.device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, ibSize, ibStride));
          var indices = new Uint16Array(6);
          indices[0] = 0;
          indices[1] = 1;
          indices[2] = 2;
          indices[3] = 1;
          indices[4] = 3;
          indices[5] = 2;
          this.textIB.update(indices);
          var attributes = [new Attribute('a_position', Format.RG32F), new Attribute('a_texCoord', Format.RG32F)];
          var textIAInfo = new InputAssemblerInfo(attributes, [this.textVB], this.textIB);
          this.textAssmebler = this.device.createInputAssembler(textIAInfo);
        };

        _proto.initCMD = function initCMD() {
          var device = this.device;

          if (JSB && (sys.os === legacyCC.sys.OS_OSX || sys.os === legacyCC.sys.OS_IOS)) {
            this.renderArea = new Rect(0, 0, device.nativeWidth, device.nativeHeight);
          } else {
            this.renderArea = new Rect(0, 0, device.width, device.height);
          }

          this.framebuffer = this.root.mainWindow.framebuffer;
          this.cmdBuff = device.commandBuffer;
        };

        _proto.initIA = function initIA() {
          var device = this.device; // create vertex buffer

          var vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
          var vbSize = vbStride * 4;
          this.vertexBuffers = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, vbSize, vbStride));
          var verts = new Float32Array(4 * 4);
          var w = -this.image.width / 2;
          var h = -this.image.height / 2;

          if (this.screenWidth < this.screenHeight) {
            w = -this.screenWidth / 2 * this.setting.displayRatio;
            h = w / (this.image.width / this.image.height);
          } else {
            w = -this.screenHeight / 2 * this.setting.displayRatio;
            h = w / (this.image.width / this.image.height);
          }

          var n = 0;
          verts[n++] = w;
          verts[n++] = h;
          verts[n++] = 0.0;
          verts[n++] = 1.0;
          verts[n++] = -w;
          verts[n++] = h;
          verts[n++] = 1.0;
          verts[n++] = 1.0;
          verts[n++] = w;
          verts[n++] = -h;
          verts[n++] = 0.0;
          verts[n++] = 0;
          verts[n++] = -w;
          verts[n++] = -h;
          verts[n++] = 1.0;
          verts[n++] = 0; // translate to center

          for (var i = 0; i < verts.length; i += 4) {
            verts[i] += this.screenWidth / 2;
            verts[i + 1] += this.screenHeight / 2;
          } // doing the screen adaptation here will not support dynamic screen orientation changes


          var ySign = this.device.screenSpaceSignY;
          var preTransform = preTransforms[this.device.surfaceTransform];

          for (var _i2 = 0; _i2 < verts.length; _i2 += 4) {
            var x = verts[_i2] / this.screenWidth * 2 - 1;
            var y = (verts[_i2 + 1] / this.screenHeight * 2 - 1) * ySign;
            verts[_i2] = preTransform[0] * x + preTransform[2] * y;
            verts[_i2 + 1] = preTransform[1] * x + preTransform[3] * y;
          }

          this.vertexBuffers.update(verts); // create index buffer

          var ibStride = Uint16Array.BYTES_PER_ELEMENT;
          var ibSize = ibStride * 6;
          this.indicesBuffers = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, ibSize, ibStride));
          var indices = new Uint16Array(6);
          indices[0] = 0;
          indices[1] = 1;
          indices[2] = 2;
          indices[3] = 1;
          indices[4] = 3;
          indices[5] = 2;
          this.indicesBuffers.update(indices);
          var attributes = [new Attribute('a_position', Format.RG32F), new Attribute('a_texCoord', Format.RG32F)];
          var IAInfo = new InputAssemblerInfo(attributes, [this.vertexBuffers], this.indicesBuffers);
          this.assmebler = device.createInputAssembler(IAInfo);
        };

        _proto.initPSO = function initPSO() {
          var device = this.device;
          this.material = new Material();
          this.material.initialize({
            effectName: 'splash-screen'
          });
          var samplerInfo = new SamplerInfo();
          samplerInfo.addressU = Address.CLAMP;
          samplerInfo.addressV = Address.CLAMP;
          this.sampler = device.createSampler(samplerInfo);
          this.texture = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, Format.RGBA8, this.image.width, this.image.height));
          var pass = this.material.passes[0];
          var binding = pass.getBinding('mainTexture');
          pass.bindTexture(binding, this.texture);
          this.shader = ShaderPool.get(pass.getShaderVariant());
          var descriptorSet = DSPool.get(PassPool.get(pass.handle, PassView.DESCRIPTOR_SET));
          descriptorSet.bindSampler(binding, this.sampler);
          descriptorSet.update();
          this.region = new BufferTextureCopy();
          this.region.texExtent.width = this.image.width;
          this.region.texExtent.height = this.image.height;
          this.region.texExtent.depth = 1;
          device.copyTexImagesToTexture([this.image], this.texture, [this.region]);
        };

        _proto.destroy = function destroy() {
          this.callBack = null;
          this.clearColors = null;
          this.device = null;
          if (JSB) this.image.destroy();
          this.image = null;
          this.framebuffer = null;
          this.renderArea = null;
          this.region = null;
          this.cmdBuff = null;
          this.shader = null;
          this.material.destroy();
          this.material = null;
          this.texture.destroy();
          this.texture = null;
          this.assmebler.destroy();
          this.assmebler = null;
          this.vertexBuffers.destroy();
          this.vertexBuffers = null;
          this.indicesBuffers.destroy();
          this.indicesBuffers = null;
          this.sampler.destroy();
          this.sampler = null;
          /** text */

          if (this.textImg) {
            this.textImg = null;
            this.textRegion = null;
            this.textShader = null;
            this.textMaterial.destroy();
            this.textMaterial = null;
            this.textTexture.destroy();
            this.textTexture = null;
            this.textAssmebler.destroy();
            this.textAssmebler = null;
            this.textVB.destroy();
            this.textVB = null;
            this.textIB.destroy();
            this.textIB = null;
          }

          this.setting = null;
          SplashScreen._ins = undefined;
        };

        _createClass(SplashScreen, [{
          key: "splashFinish",
          set: function set(v) {
            this._splashFinish = v;

            this._tryToStart();
          }
        }, {
          key: "loadFinish",
          set: function set(v) {
            this._loadFinish = v;

            this._tryToStart();
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!SplashScreen._ins) {
              SplashScreen._ins = new SplashScreen();
            }

            return SplashScreen._ins;
          }
        }]);

        function SplashScreen() {
          this.handle = 0;
          this.callBack = null;
          this.cancelAnimate = false;
          this.startTime = -1;
          this._splashFinish = false;
          this._loadFinish = false;
          this._directCall = false;
        }

        return SplashScreen;
      }());

      SplashScreen._ins = void 0;
      legacyCC.internal.SplashScreen = SplashScreen;
    }
  };
});