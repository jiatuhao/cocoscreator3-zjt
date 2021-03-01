System.register(['./coordinates-converts-utils-fa8f5fc5.js', './renderable-component-7d3cd284.js', './find-c704a59e.js', './json-asset-17eaf8ce.js', './transform-utils-c1853224.js', './view-d66ebab1.js', './event-enum-cb046afa.js', './screen-0172c27e.js', './camera-component-4e2374cc.js', './factory-7b08f108.js'], function (exports) {
  'use strict';
  var bits, Vec2, v2, Vec3, v3, Vec4, v4, Quat, quat, Mat3, Mat4, mat4, AffineTransform, Size, size, Rect, rect, Color, color, EPSILON, equals, approx, clamp, clamp01, lerp, toRadian, toDegree, random, randomRange, randomRangeInt, pseudoRandom, pseudoRandomRange, pseudoRandomRangeInt, nextPow2, repeat, pingPong, inverseLerp, absMaxComponent, absMax, error, Color$1, legacyCC, sys, SetIndex, BufferTextureCopy, TextureInfo, TextureType, TextureUsageBit, Format, ShaderPool, DSPool, PassPool, PassView, BufferInfo, BufferUsageBit, MemoryUsageBit, preTransforms, Attribute, InputAssemblerInfo, Rect$1, SamplerInfo, Address, _createClass, _inheritsLoose, assertID, errorID, warnID, logID, createMap, IDGenerator, NULL_HANDLE, RenderWindowPool, RenderWindowView, FramebufferPool, FramebufferInfo, _createForOfIteratorHelperLoose, Pool, RootPool, ColorAttachment, DepthStencilAttachment, StoreOp, RenderPassInfo, RootView, replaceProperty, removeProperty, CCObject, array, _assertThisInitialized, EventTarget, Cache, js, unpackJSONs, packCustomObjData, files, transform, Task, fetchPipeline, assets, mixin, parsed, isScene, Pipeline, Asset, pipeline, RequestType, transformPipeline, addon, presets, extname, bundles, decodeUuid, basename, BuiltinBundleName, EDITOR, helper, references, changeExtname, getError, macro, getUuidFromURL, dirname, ccclass, type, _applyDecoratedDescriptor, _initializerDefineProperty, serializable, editable, Type, warn, _float, remove, MutableForwardIterator, RenderScene, Camera, LightType, SubModel, Node, distance, enums, intersect, Line, Plane, Ray, Triangle, Sphere, AABB, OBB, Capsule, Frustum, Keyframe, AnimationCurve, ERaycastMode, line, plane, ray, triangle, sphere, aabb, obb, capsule, frustum, Material, builtinResMgr, SceneAsset, Texture2D, deserialize, PixelFormat, dependUtil, Pass, PropertyType, getDefaultFromType, TextureBase, samplerLib, cubicOut, Animation, getWorldMatrix, deleteTransform, BlendStateBuffer, getTransform, easing, HierarchyPath, ComponentPath, PipelineStateManager, ForwardPipeline, Game, game, EventTouch, eventManager, Scene, ComponentScheduler, NodeActivator, Camera$1, downloader, forEach, clear, getDepends, checkCircleReference, setProperties, cache, gatherAsset, asyncify, factory, releaseManager, Bundle, parseParameters, resources, parseLoadResArgs, setDefaultProgressCallback;
  return {
    setters: [function (module) {
      bits = module.cu;
      Vec2 = module.cv;
      v2 = module.cw;
      Vec3 = module.cx;
      v3 = module.cy;
      Vec4 = module.cz;
      v4 = module.cA;
      Quat = module.cB;
      quat = module.cC;
      Mat3 = module.cD;
      Mat4 = module.cE;
      mat4 = module.cF;
      AffineTransform = module.cG;
      Size = module.cH;
      size = module.cI;
      Rect = module.cJ;
      rect = module.cK;
      Color = module.cL;
      color = module.cM;
      EPSILON = module.cN;
      equals = module.cO;
      approx = module.cP;
      clamp = module.cQ;
      clamp01 = module.cR;
      lerp = module.cS;
      toRadian = module.cT;
      toDegree = module.cU;
      random = module.cV;
      randomRange = module.cW;
      randomRangeInt = module.cX;
      pseudoRandom = module.cY;
      pseudoRandomRange = module.cZ;
      pseudoRandomRangeInt = module.c_;
      nextPow2 = module.c$;
      repeat = module.d0;
      pingPong = module.d1;
      inverseLerp = module.d2;
      absMaxComponent = module.d3;
      absMax = module.d4;
      error = module.e;
      Color$1 = module.aK;
      legacyCC = module.l;
      sys = module.dK;
      SetIndex = module.e6;
      BufferTextureCopy = module.aP;
      TextureInfo = module.T;
      TextureType = module.ai;
      TextureUsageBit = module.aj;
      Format = module.a2;
      ShaderPool = module.by;
      DSPool = module.bz;
      PassPool = module.bN;
      PassView = module.bM;
      BufferInfo = module.z;
      BufferUsageBit = module.a3;
      MemoryUsageBit = module.a4;
      preTransforms = module.en;
      Attribute = module.bg;
      InputAssemblerInfo = module.X;
      Rect$1 = module.aI;
      SamplerInfo = module.H;
      Address = module.ah;
      _createClass = module.dS;
      _inheritsLoose = module.dR;
      assertID = module.g;
      errorID = module.f;
      warnID = module.d;
      logID = module.c;
      createMap = module.eo;
      IDGenerator = module.dW;
      NULL_HANDLE = module.bx;
      RenderWindowPool = module.c3;
      RenderWindowView = module.c2;
      FramebufferPool = module.bC;
      FramebufferInfo = module.P;
      _createForOfIteratorHelperLoose = module.t;
      Pool = module.br;
      RootPool = module.c1;
      ColorAttachment = module.E;
      DepthStencilAttachment = module.F;
      StoreOp = module.aq;
      RenderPassInfo = module.R;
      RootView = module.c0;
      replaceProperty = module.de;
      removeProperty = module.df;
      CCObject = module.dn;
      array = module.ep;
      _assertThisInitialized = module.dV;
      EventTarget = module.dz;
      Cache = module.dZ;
      js = module.eq;
      unpackJSONs = module.er;
      packCustomObjData = module.es;
      files = module.e2;
      transform = module.et;
      Task = module.eu;
      fetchPipeline = module.ev;
      assets = module.ew;
      mixin = module.ex;
      parsed = module.e1;
      isScene = module.ey;
      Pipeline = module.ez;
      Asset = module.dB;
      pipeline = module.eA;
      RequestType = module.eB;
      transformPipeline = module.eC;
      addon = module.eD;
      presets = module.eE;
      extname = module.i;
      bundles = module.eF;
      decodeUuid = module.dY;
      basename = module.k;
      BuiltinBundleName = module.eG;
      EDITOR = module.eh;
      helper = module.eH;
      references = module.eI;
      changeExtname = module.o;
      getError = module.dI;
      macro = module.dL;
      getUuidFromURL = module.eJ;
      dirname = module.n;
      ccclass = module.dQ;
      type = module.e5;
      _applyDecoratedDescriptor = module.dT;
      _initializerDefineProperty = module.dU;
      serializable = module.dX;
      editable = module.ec;
      Type = module.a1;
      warn = module.w;
      _float = module.eK;
      remove = module.eL;
      MutableForwardIterator = module.eM;
    }, function (module) {
      RenderScene = module.R;
      Camera = module.e;
      LightType = module.L;
      SubModel = module.p;
      Node = module.N;
    }, function (module) {
      distance = module.d;
      enums = module.e;
      intersect = module.i;
      Line = module.L;
      Plane = module.P;
      Ray = module.R;
      Triangle = module.T;
      Sphere = module.S;
      AABB = module.A;
      OBB = module.O;
      Capsule = module.C;
      Frustum = module.F;
      Keyframe = module.K;
      AnimationCurve = module.a;
      ERaycastMode = module.E;
      line = module.l;
      plane = module.p;
      ray = module.r;
      triangle = module.t;
      sphere = module.s;
      aabb = module.b;
      obb = module.o;
      capsule = module.c;
      frustum = module.g;
    }, function (module) {
      Material = module.M;
      builtinResMgr = module.x;
      SceneAsset = module.q;
      Texture2D = module.r;
      deserialize = module.y;
      PixelFormat = module.z;
      dependUtil = module.A;
      Pass = module.j;
      PropertyType = module.P;
      getDefaultFromType = module.i;
      TextureBase = module.C;
      samplerLib = module.s;
    }, function (module) {
      cubicOut = module.m;
      Animation = module.c;
      getWorldMatrix = module.n;
      deleteTransform = module.o;
      BlendStateBuffer = module.B;
      getTransform = module.p;
      easing = module.b;
      HierarchyPath = module.H;
      ComponentPath = module.C;
    }, function (module) {
      PipelineStateManager = module.P;
      ForwardPipeline = module.F;
      Game = module.G;
      game = module.g;
    }, function (module) {
      EventTouch = module.a;
      eventManager = module.e;
    }, function () {}, function (module) {
      Scene = module.S;
      ComponentScheduler = module.a;
      NodeActivator = module.N;
      Camera$1 = module.C;
    }, function (module) {
      downloader = module.d;
      forEach = module.f;
      clear = module.c;
      getDepends = module.g;
      checkCircleReference = module.a;
      setProperties = module.s;
      cache = module.b;
      gatherAsset = module.e;
      asyncify = module.h;
      factory = module.i;
      releaseManager = module.j;
      Bundle = module.B;
      parseParameters = module.p;
      resources = module.r;
      parseLoadResArgs = module.k;
      setDefaultProgressCallback = module.l;
    }],
    execute: function () {

      exports({
        q: isPropertyModifier,
        r: isElementModifier,
        s: isCustomTargetModifier
      });

      var math = /*#__PURE__*/Object.freeze({
        __proto__: null,
        bits: bits,
        Vec2: Vec2,
        v2: v2,
        Vec3: Vec3,
        v3: v3,
        Vec4: Vec4,
        v4: v4,
        Quat: Quat,
        quat: quat,
        Mat3: Mat3,
        Mat4: Mat4,
        mat4: mat4,
        AffineTransform: AffineTransform,
        Size: Size,
        size: size,
        Rect: Rect,
        rect: rect,
        Color: Color,
        color: color,
        EPSILON: EPSILON,
        equals: equals,
        approx: approx,
        clamp: clamp,
        clamp01: clamp01,
        lerp: lerp,
        toRadian: toRadian,
        toDegree: toDegree,
        random: random,
        randomRange: randomRange,
        randomRangeInt: randomRangeInt,
        pseudoRandom: pseudoRandom,
        pseudoRandomRange: pseudoRandomRange,
        pseudoRandomRangeInt: pseudoRandomRangeInt,
        nextPow2: nextPow2,
        repeat: repeat,
        pingPong: pingPong,
        inverseLerp: inverseLerp,
        absMaxComponent: absMaxComponent,
        absMax: absMax
      });
      exports('m', math);

      var geometry = /*#__PURE__*/Object.freeze({
        __proto__: null,
        distance: distance,
        enums: enums,
        intersect: intersect,
        Line: Line,
        Plane: Plane,
        Ray: Ray,
        Triangle: Triangle,
        Sphere: Sphere,
        AABB: AABB,
        OBB: OBB,
        Capsule: Capsule,
        Frustum: Frustum,
        Keyframe: Keyframe,
        AnimationCurve: AnimationCurve,
        get ERaycastMode () { return ERaycastMode; },
        line: line,
        plane: plane,
        ray: ray,
        triangle: triangle,
        sphere: sphere,
        aabb: aabb,
        obb: obb,
        capsule: capsule,
        frustum: frustum
      });
      exports('g', geometry);

      var SplashScreen = function () {
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
            setting.clearColor = this.setting.clearColor || new Color$1(0.88, 0.88, 0.88, 1);
            setting.displayRatio = this.setting.displayRatio != null ? this.setting.displayRatio : 0.4;
            setting.displayWatermark = this.setting.displayWatermark != null ? this.setting.displayWatermark : true;
          } else {
            this.setting = {
              totalTime: 3000,
              base64src: '',
              effect: 'FADE-INOUT',
              clearColor: new Color$1(0.88, 0.88, 0.88, 1),
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
            this.startTime = -1;
            var clearColor = this.setting.clearColor;
            this.clearColors = [new Color$1(clearColor.x, clearColor.y, clearColor.z, clearColor.w)];
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

          {
            if (sys.os === legacyCC.sys.OS_OSX || sys.os === legacyCC.sys.OS_IOS) {
              var width = screen.width * devicePixelRatio;
              var height = screen.height * devicePixelRatio;
              this.device.resize(width, height);
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
            var PERCENT = clamp01(elapsedTime / _this.setting.totalTime);
            var u_p = cubicOut(PERCENT);
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
          this.cancelAnimate = true;
          setTimeout(this.destroy.bind(this));
        };

        _proto.frame = function frame(time) {
          if (this.cancelAnimate) return;

          var device = this.device;
          device.acquire();
          var cmdBuff = this.cmdBuff;
          var framebuffer = this.framebuffer;
          var renderArea = this.renderArea;

          if ( (sys.os === legacyCC.sys.OS_OSX || sys.os === legacyCC.sys.OS_IOS)) {
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
          this.textMaterial = new Material();
          this.textMaterial.initialize({
            effectName: 'splash-screen'
          });
          var pass = this.textMaterial.passes[0];
          var binding = pass.getBinding('mainTexture');
          pass.bindTexture(binding, this.textTexture);
          this.textShader = ShaderPool.get(pass.getShaderVariant());
          DSPool.get(PassPool.get(pass.handle, PassView.DESCRIPTOR_SET)).update();
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
          verts[n++] = 0.0;

          for (var i = 0; i < verts.length; i += 4) {
            verts[i] += this.screenWidth / 2;
            verts[i + 1] += this.screenHeight * 0.1;
          }

          var ySign = this.device.screenSpaceSignY;
          var preTransform = preTransforms[this.device.surfaceTransform];

          for (var _i = 0; _i < verts.length; _i += 4) {
            var x = verts[_i] / this.screenWidth * 2 - 1;
            var y = (verts[_i + 1] / this.screenHeight * 2 - 1) * ySign;
            verts[_i] = preTransform[0] * x + preTransform[2] * y;
            verts[_i + 1] = preTransform[1] * x + preTransform[3] * y;
          }

          this.textVB.update(verts);
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

          if ( (sys.os === legacyCC.sys.OS_OSX || sys.os === legacyCC.sys.OS_IOS)) {
            this.renderArea = new Rect$1(0, 0, device.nativeWidth, device.nativeHeight);
          } else {
            this.renderArea = new Rect$1(0, 0, device.width, device.height);
          }

          this.framebuffer = this.root.mainWindow.framebuffer;
          this.cmdBuff = device.commandBuffer;
        };

        _proto.initIA = function initIA() {
          var device = this.device;
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
          verts[n++] = 0;

          for (var i = 0; i < verts.length; i += 4) {
            verts[i] += this.screenWidth / 2;
            verts[i + 1] += this.screenHeight / 2;
          }

          var ySign = this.device.screenSpaceSignY;
          var preTransform = preTransforms[this.device.surfaceTransform];

          for (var _i2 = 0; _i2 < verts.length; _i2 += 4) {
            var x = verts[_i2] / this.screenWidth * 2 - 1;
            var y = (verts[_i2 + 1] / this.screenHeight * 2 - 1) * ySign;
            verts[_i2] = preTransform[0] * x + preTransform[2] * y;
            verts[_i2 + 1] = preTransform[1] * x + preTransform[3] * y;
          }

          this.vertexBuffers.update(verts);
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
          this.image.destroy();
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
      }();
      SplashScreen._ins = void 0;
      legacyCC.internal.SplashScreen = SplashScreen;

      var System = exports('k', function () {
        function System() {
          this._id = '';
          this._priority = 0;
          this._executeInEditMode = false;
        }

        System.sortByPriority = function sortByPriority(a, b) {
          if (a._priority < b._priority) {
            return 1;
          } else if (a._priority > b.priority) {
            return -1;
          } else {
            return 0;
          }
        };

        var _proto = System.prototype;

        _proto.init = function init() {};

        _proto.update = function update(dt) {};

        _proto.postUpdate = function postUpdate(dt) {};

        _createClass(System, [{
          key: "priority",
          set: function set(value) {
            this._priority = value;
          },
          get: function get() {
            return this._priority;
          }
        }, {
          key: "id",
          set: function set(id) {
            this._id = id;
          },
          get: function get() {
            return this._id;
          }
        }]);

        return System;
      }());

      var MAX_POOL_SIZE = 20;
      var idGenerator = new IDGenerator('Scheduler');

      var ListEntry = function ListEntry(target, priority, paused, markedForDeletion) {
        this.target = void 0;
        this.priority = void 0;
        this.paused = void 0;
        this.markedForDeletion = void 0;
        this.target = target;
        this.priority = priority;
        this.paused = paused;
        this.markedForDeletion = markedForDeletion;
      };

      ListEntry.get = function (target, priority, paused, markedForDeletion) {
        var result = ListEntry._listEntries.pop();

        if (result) {
          result.target = target;
          result.priority = priority;
          result.paused = paused;
          result.markedForDeletion = markedForDeletion;
        } else {
          result = new ListEntry(target, priority, paused, markedForDeletion);
        }

        return result;
      };

      ListEntry.put = function (entry) {
        if (ListEntry._listEntries.length < MAX_POOL_SIZE) {
          entry.target = null;

          ListEntry._listEntries.push(entry);
        }
      };

      ListEntry._listEntries = [];

      var HashUpdateEntry = function HashUpdateEntry(list, entry, target, callback) {
        this.list = void 0;
        this.entry = void 0;
        this.target = void 0;
        this.callback = void 0;
        this.list = list;
        this.entry = entry;
        this.target = target;
        this.callback = callback;
      };

      HashUpdateEntry.get = function (list, entry, target, callback) {
        var result = HashUpdateEntry._hashUpdateEntries.pop();

        if (result) {
          result.list = list;
          result.entry = entry;
          result.target = target;
          result.callback = callback;
        } else {
          result = new HashUpdateEntry(list, entry, target, callback);
        }

        return result;
      };

      HashUpdateEntry.put = function (entry) {
        if (HashUpdateEntry._hashUpdateEntries.length < MAX_POOL_SIZE) {
          entry.list = entry.entry = entry.target = entry.callback = null;

          HashUpdateEntry._hashUpdateEntries.push(entry);
        }
      };

      HashUpdateEntry._hashUpdateEntries = [];

      var HashTimerEntry = function HashTimerEntry(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
        this.timers = void 0;
        this.target = void 0;
        this.timerIndex = void 0;
        this.currentTimer = void 0;
        this.currentTimerSalvaged = void 0;
        this.paused = void 0;
        this.timers = timers;
        this.target = target;
        this.timerIndex = timerIndex;
        this.currentTimer = currentTimer;
        this.currentTimerSalvaged = currentTimerSalvaged;
        this.paused = paused;
      };

      HashTimerEntry.get = function (timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
        var result = HashTimerEntry._hashTimerEntries.pop();

        if (result) {
          result.timers = timers;
          result.target = target;
          result.timerIndex = timerIndex;
          result.currentTimer = currentTimer;
          result.currentTimerSalvaged = currentTimerSalvaged;
          result.paused = paused;
        } else {
          result = new HashTimerEntry(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused);
        }

        return result;
      };

      HashTimerEntry.put = function (entry) {
        if (HashTimerEntry._hashTimerEntries.length < MAX_POOL_SIZE) {
          entry.timers = entry.target = entry.currentTimer = null;

          HashTimerEntry._hashTimerEntries.push(entry);
        }
      };

      HashTimerEntry._hashTimerEntries = [];

      var CallbackTimer = function () {
        function CallbackTimer() {
          this._lock = void 0;
          this._scheduler = void 0;
          this._elapsed = void 0;
          this._runForever = void 0;
          this._useDelay = void 0;
          this._timesExecuted = void 0;
          this._repeat = void 0;
          this._delay = void 0;
          this._interval = void 0;
          this._target = void 0;
          this._callback = void 0;
          this._lock = false;
          this._scheduler = null;
          this._elapsed = -1;
          this._runForever = false;
          this._useDelay = false;
          this._timesExecuted = 0;
          this._repeat = 0;
          this._delay = 0;
          this._interval = 0;
          this._target = null;
          this._callback = null;
        }

        var _proto = CallbackTimer.prototype;

        _proto.initWithCallback = function initWithCallback(scheduler, callback, target, seconds, repeat, delay) {
          this._lock = false;
          this._scheduler = scheduler;
          this._target = target;
          this._callback = callback;
          this._elapsed = -1;
          this._interval = seconds;
          this._delay = delay;
          this._useDelay = this._delay > 0;
          this._repeat = repeat;
          this._runForever = this._repeat === legacyCC.macro.REPEAT_FOREVER;
          return true;
        };

        _proto.getInterval = function getInterval() {
          return this._interval;
        };

        _proto.setInterval = function setInterval(interval) {
          this._interval = interval;
        };

        _proto.update = function update(dt) {
          if (this._elapsed === -1) {
            this._elapsed = 0;
            this._timesExecuted = 0;
          } else {
            this._elapsed += dt;

            if (this._runForever && !this._useDelay) {
              if (this._elapsed >= this._interval) {
                this.trigger();
                this._elapsed = 0;
              }
            } else {
              if (this._useDelay) {
                if (this._elapsed >= this._delay) {
                  this.trigger();
                  this._elapsed -= this._delay;
                  this._timesExecuted += 1;
                  this._useDelay = false;
                }
              } else if (this._elapsed >= this._interval) {
                this.trigger();
                this._elapsed = 0;
                this._timesExecuted += 1;
              }

              if (this._callback && !this._runForever && this._timesExecuted > this._repeat) {
                this.cancel();
              }
            }
          }
        };

        _proto.getCallback = function getCallback() {
          return this._callback;
        };

        _proto.trigger = function trigger() {
          if (this._target && this._callback) {
            this._lock = true;

            this._callback.call(this._target, this._elapsed);

            this._lock = false;
          }
        };

        _proto.cancel = function cancel() {
          this._scheduler.unschedule(this._callback, this._target);
        };

        return CallbackTimer;
      }();

      CallbackTimer._timers = [];

      CallbackTimer.get = function () {
        return CallbackTimer._timers.pop() || new CallbackTimer();
      };

      CallbackTimer.put = function (timer) {
        if (CallbackTimer._timers.length < MAX_POOL_SIZE && !timer._lock) {
          timer._scheduler = timer._target = timer._callback = null;

          CallbackTimer._timers.push(timer);
        }
      };

      var Scheduler = exports('S', function (_System) {
        _inheritsLoose(Scheduler, _System);

        Scheduler.enableForTarget = function enableForTarget(target) {
          var found = false;

          if (target.uuid) {
            found = true;
          } else if (target.id) {
            found = true;
          }

          if (!found) {
            if (target.__instanceId) {
              warnID(1513);
            } else {
              target.id = idGenerator.getNewId();
            }
          }
        };

        function Scheduler() {
          var _this;

          _this = _System.call(this) || this;
          _this._timeScale = void 0;
          _this._updatesNegList = void 0;
          _this._updates0List = void 0;
          _this._updatesPosList = void 0;
          _this._hashForUpdates = void 0;
          _this._hashForTimers = void 0;
          _this._currentTarget = void 0;
          _this._currentTargetSalvaged = void 0;
          _this._updateHashLocked = void 0;
          _this._arrayForTimers = void 0;
          _this._timeScale = 1.0;
          _this._updatesNegList = [];
          _this._updates0List = [];
          _this._updatesPosList = [];
          _this._hashForUpdates = createMap(true);
          _this._hashForTimers = createMap(true);
          _this._currentTarget = null;
          _this._currentTargetSalvaged = false;
          _this._updateHashLocked = false;
          _this._arrayForTimers = [];
          return _this;
        }

        var _proto2 = Scheduler.prototype;

        _proto2.setTimeScale = function setTimeScale(timeScale) {
          this._timeScale = timeScale;
        };

        _proto2.getTimeScale = function getTimeScale() {
          return this._timeScale;
        };

        _proto2.update = function update(dt) {
          this._updateHashLocked = true;

          if (this._timeScale !== 1) {
            dt *= this._timeScale;
          }

          var i;
          var list;
          var len;
          var entry;

          for (i = 0, list = this._updatesNegList, len = list.length; i < len; i++) {
            entry = list[i];

            if (!entry.paused && !entry.markedForDeletion) {
              entry.target.update(dt);
            }
          }

          for (i = 0, list = this._updates0List, len = list.length; i < len; i++) {
            entry = list[i];

            if (!entry.paused && !entry.markedForDeletion) {
              entry.target.update(dt);
            }
          }

          for (i = 0, list = this._updatesPosList, len = list.length; i < len; i++) {
            entry = list[i];

            if (!entry.paused && !entry.markedForDeletion) {
              entry.target.update(dt);
            }
          }

          var elt;
          var arr = this._arrayForTimers;

          for (i = 0; i < arr.length; i++) {
            elt = arr[i];
            this._currentTarget = elt;
            this._currentTargetSalvaged = false;

            if (!elt.paused) {
              for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; ++elt.timerIndex) {
                elt.currentTimer = elt.timers[elt.timerIndex];
                elt.currentTimerSalvaged = false;
                elt.currentTimer.update(dt);
                elt.currentTimer = null;
              }
            }

            if (this._currentTargetSalvaged && this._currentTarget.timers.length === 0) {
              this._removeHashElement(this._currentTarget);

              --i;
            }
          }

          for (i = 0, list = this._updatesNegList; i < list.length;) {
            entry = list[i];

            if (entry.markedForDeletion) {
              this._removeUpdateFromHash(entry);
            } else {
              i++;
            }
          }

          for (i = 0, list = this._updates0List; i < list.length;) {
            entry = list[i];

            if (entry.markedForDeletion) {
              this._removeUpdateFromHash(entry);
            } else {
              i++;
            }
          }

          for (i = 0, list = this._updatesPosList; i < list.length;) {
            entry = list[i];

            if (entry.markedForDeletion) {
              this._removeUpdateFromHash(entry);
            } else {
              i++;
            }
          }

          this._updateHashLocked = false;
          this._currentTarget = null;
        };

        _proto2.schedule = function schedule(callback, target, interval, repeat, delay, paused) {
          if (typeof callback !== 'function') {
            var tmp = callback;
            callback = target;
            target = tmp;
          }

          if (arguments.length === 3 || arguments.length === 4 || arguments.length === 5) {
            paused = !!repeat;
            repeat = legacyCC.macro.REPEAT_FOREVER;
            delay = 0;
          }

          assertID(target, 1502);
          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var element = this._hashForTimers[targetId];

          if (!element) {
            element = HashTimerEntry.get(null, target, 0, null, null, paused);

            this._arrayForTimers.push(element);

            this._hashForTimers[targetId] = element;
          } else if (element.paused !== paused) {
            warnID(1511);
          }

          var timer;
          var i;

          if (element.timers == null) {
            element.timers = [];
          } else {
            for (i = 0; i < element.timers.length; ++i) {
              timer = element.timers[i];

              if (timer && callback === timer._callback) {
                logID(1507, timer.getInterval(), interval);
                timer._interval = interval;
                return;
              }
            }
          }

          timer = CallbackTimer.get();
          timer.initWithCallback(this, callback, target, interval, repeat, delay);
          element.timers.push(timer);

          if (this._currentTarget === element && this._currentTargetSalvaged) {
            this._currentTargetSalvaged = false;
          }
        };

        _proto2.scheduleUpdate = function scheduleUpdate(target, priority, paused) {
          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var hashElement = this._hashForUpdates[targetId];

          if (hashElement && hashElement.entry) {
            if (hashElement.entry.priority !== priority) {
              if (this._updateHashLocked) {
                logID(1506);
                hashElement.entry.markedForDeletion = false;
                hashElement.entry.paused = paused;
                return;
              } else {
                this.unscheduleUpdate(target);
              }
            } else {
              hashElement.entry.markedForDeletion = false;
              hashElement.entry.paused = paused;
              return;
            }
          }

          var listElement = ListEntry.get(target, priority, paused, false);
          var ppList;

          if (priority === 0) {
            ppList = this._updates0List;

            this._appendIn(ppList, listElement);
          } else {
            ppList = priority < 0 ? this._updatesNegList : this._updatesPosList;

            this._priorityIn(ppList, listElement, priority);
          }

          this._hashForUpdates[targetId] = HashUpdateEntry.get(ppList, listElement, target, null);
        };

        _proto2.unschedule = function unschedule(callback, target) {
          if (!target || !callback) {
            return;
          }

          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var self = this;
          var element = self._hashForTimers[targetId];

          if (element) {
            var timers = element.timers;

            for (var i = 0, li = timers.length; i < li; i++) {
              var timer = timers[i];

              if (callback === timer._callback) {
                if (timer === element.currentTimer && !element.currentTimerSalvaged) {
                  element.currentTimerSalvaged = true;
                }

                timers.splice(i, 1);
                CallbackTimer.put(timer);

                if (element.timerIndex >= i) {
                  element.timerIndex--;
                }

                if (timers.length === 0) {
                  if (self._currentTarget === element) {
                    self._currentTargetSalvaged = true;
                  } else {
                    self._removeHashElement(element);
                  }
                }

                return;
              }
            }
          }
        };

        _proto2.unscheduleUpdate = function unscheduleUpdate(target) {
          if (!target) {
            return;
          }

          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var element = this._hashForUpdates[targetId];

          if (element) {
            if (this._updateHashLocked) {
              element.entry.markedForDeletion = true;
            } else {
              this._removeUpdateFromHash(element.entry);
            }
          }
        };

        _proto2.unscheduleAllForTarget = function unscheduleAllForTarget(target) {
          if (!target) {
            return;
          }

          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var element = this._hashForTimers[targetId];

          if (element) {
            var timers = element.timers;

            if (timers.indexOf(element.currentTimer) > -1 && !element.currentTimerSalvaged) {
              element.currentTimerSalvaged = true;
            }

            for (var i = 0, l = timers.length; i < l; i++) {
              CallbackTimer.put(timers[i]);
            }

            timers.length = 0;

            if (this._currentTarget === element) {
              this._currentTargetSalvaged = true;
            } else {
              this._removeHashElement(element);
            }
          }

          this.unscheduleUpdate(target);
        };

        _proto2.unscheduleAll = function unscheduleAll() {
          this.unscheduleAllWithMinPriority(legacyCC.Scheduler.PRIORITY_SYSTEM);
        };

        _proto2.unscheduleAllWithMinPriority = function unscheduleAllWithMinPriority(minPriority) {
          var i;
          var element;
          var arr = this._arrayForTimers;

          for (i = arr.length - 1; i >= 0; i--) {
            element = arr[i];
            this.unscheduleAllForTarget(element.target);
          }

          var entry;
          var temp_length = 0;

          if (minPriority < 0) {
            for (i = 0; i < this._updatesNegList.length;) {
              temp_length = this._updatesNegList.length;
              entry = this._updatesNegList[i];

              if (entry && entry.priority >= minPriority) {
                this.unscheduleUpdate(entry.target);
              }

              if (temp_length === this._updatesNegList.length) {
                i++;
              }
            }
          }

          if (minPriority <= 0) {
            for (i = 0; i < this._updates0List.length;) {
              temp_length = this._updates0List.length;
              entry = this._updates0List[i];

              if (entry) {
                this.unscheduleUpdate(entry.target);
              }

              if (temp_length === this._updates0List.length) {
                i++;
              }
            }
          }

          for (i = 0; i < this._updatesPosList.length;) {
            temp_length = this._updatesPosList.length;
            entry = this._updatesPosList[i];

            if (entry && entry.priority >= minPriority) {
              this.unscheduleUpdate(entry.target);
            }

            if (temp_length === this._updatesPosList.length) {
              i++;
            }
          }
        };

        _proto2.isScheduled = function isScheduled(callback, target) {
          assertID(callback, 1508);
          assertID(target, 1509);
          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var element = this._hashForTimers[targetId];

          if (!element) {
            return false;
          }

          if (element.timers == null) {
            return false;
          } else {
            var timers = element.timers;

            for (var i = 0; i < timers.length; ++i) {
              var timer = timers[i];

              if (callback === timer._callback) {
                return true;
              }
            }

            return false;
          }
        };

        _proto2.pauseAllTargets = function pauseAllTargets() {
          return this.pauseAllTargetsWithMinPriority(legacyCC.Scheduler.PRIORITY_SYSTEM);
        };

        _proto2.pauseAllTargetsWithMinPriority = function pauseAllTargetsWithMinPriority(minPriority) {
          var idsWithSelectors = [];
          var self = this;
          var element;
          var locArrayForTimers = self._arrayForTimers;
          var i;
          var li;

          for (i = 0, li = locArrayForTimers.length; i < li; i++) {
            element = locArrayForTimers[i];

            if (element) {
              element.paused = true;
              idsWithSelectors.push(element.target);
            }
          }

          var entry;

          if (minPriority < 0) {
            for (i = 0; i < this._updatesNegList.length; i++) {
              entry = this._updatesNegList[i];

              if (entry) {
                if (entry.priority >= minPriority) {
                  entry.paused = true;
                  idsWithSelectors.push(entry.target);
                }
              }
            }
          }

          if (minPriority <= 0) {
            for (i = 0; i < this._updates0List.length; i++) {
              entry = this._updates0List[i];

              if (entry) {
                entry.paused = true;
                idsWithSelectors.push(entry.target);
              }
            }
          }

          for (i = 0; i < this._updatesPosList.length; i++) {
            entry = this._updatesPosList[i];

            if (entry) {
              if (entry.priority >= minPriority) {
                entry.paused = true;
                idsWithSelectors.push(entry.target);
              }
            }
          }

          return idsWithSelectors;
        };

        _proto2.resumeTargets = function resumeTargets(targetsToResume) {
          if (!targetsToResume) {
            return;
          }

          for (var i = 0; i < targetsToResume.length; i++) {
            this.resumeTarget(targetsToResume[i]);
          }
        };

        _proto2.pauseTarget = function pauseTarget(target) {
          assertID(target, 1503);
          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var self = this;
          var element = self._hashForTimers[targetId];

          if (element) {
            element.paused = true;
          }

          var elementUpdate = self._hashForUpdates[targetId];

          if (elementUpdate) {
            elementUpdate.entry.paused = true;
          }
        };

        _proto2.resumeTarget = function resumeTarget(target) {
          assertID(target, 1504);
          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return;
          }

          var self = this;
          var element = self._hashForTimers[targetId];

          if (element) {
            element.paused = false;
          }

          var elementUpdate = self._hashForUpdates[targetId];

          if (elementUpdate) {
            elementUpdate.entry.paused = false;
          }
        };

        _proto2.isTargetPaused = function isTargetPaused(target) {
          assertID(target, 1505);
          var targetId = target.uuid || target.id;

          if (!targetId) {
            errorID(1510);
            return false;
          }

          var element = this._hashForTimers[targetId];

          if (element) {
            return element.paused;
          }

          var elementUpdate = this._hashForUpdates[targetId];

          if (elementUpdate) {
            return elementUpdate.entry.paused;
          }

          return false;
        };

        _proto2._removeHashElement = function _removeHashElement(element) {
          var targetId = element.target.uuid || element.target.id;
          delete this._hashForTimers[targetId];
          var arr = this._arrayForTimers;

          for (var i = 0, l = arr.length; i < l; i++) {
            if (arr[i] === element) {
              arr.splice(i, 1);
              break;
            }
          }

          HashTimerEntry.put(element);
        };

        _proto2._removeUpdateFromHash = function _removeUpdateFromHash(entry) {
          var targetId = entry.target.uuid || entry.target.id;
          var self = this;
          var element = self._hashForUpdates[targetId];

          if (element) {
            var list = element.list;
            var listEntry = element.entry;

            for (var i = 0, l = list.length; i < l; i++) {
              if (list[i] === listEntry) {
                list.splice(i, 1);
                break;
              }
            }

            delete self._hashForUpdates[targetId];
            ListEntry.put(listEntry);
            HashUpdateEntry.put(element);
          }
        };

        _proto2._priorityIn = function _priorityIn(ppList, listElement, priority) {
          for (var i = 0; i < ppList.length; i++) {
            if (priority < ppList[i].priority) {
              ppList.splice(i, 0, listElement);
              return;
            }
          }

          ppList.push(listElement);
        };

        _proto2._appendIn = function _appendIn(ppList, listElement) {
          ppList.push(listElement);
        };

        return Scheduler;
      }(System));
      Scheduler.PRIORITY_SYSTEM = 1 << 31;
      Scheduler.PRIORITY_NON_SYSTEM = Scheduler.PRIORITY_SYSTEM + 1;
      Scheduler.ID = 'scheduler';
      legacyCC.Scheduler = Scheduler;

      var RenderWindow = function () {
        RenderWindow.registerCreateFunc = function registerCreateFunc(root) {
          root._createWindowFun = function (_root) {
            return new RenderWindow(_root);
          };
        };

        _createClass(RenderWindow, [{
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }, {
          key: "framebuffer",
          get: function get() {
            return FramebufferPool.get(RenderWindowPool.get(this._poolHandle, RenderWindowView.FRAMEBUFFER));
          }
        }, {
          key: "shouldSyncSizeWithSwapchain",
          get: function get() {
            return this._shouldSyncSizeWithSwapchain;
          }
        }, {
          key: "hasOnScreenAttachments",
          get: function get() {
            return RenderWindowPool.get(this._poolHandle, RenderWindowView.HAS_ON_SCREEN_ATTACHMENTS) === 1;
          }
        }, {
          key: "hasOffScreenAttachments",
          get: function get() {
            return RenderWindowPool.get(this._poolHandle, RenderWindowView.HAS_OFF_SCREEN_ATTACHMENTS) === 1;
          }
        }, {
          key: "handle",
          get: function get() {
            return this._poolHandle;
          }
        }, {
          key: "cameras",
          get: function get() {
            return this._cameras;
          }
        }]);

        function RenderWindow(root) {
          this._title = '';
          this._width = 1;
          this._height = 1;
          this._nativeWidth = 1;
          this._nativeHeight = 1;
          this._renderPass = null;
          this._colorTextures = [];
          this._depthStencilTexture = null;
          this._swapchainBufferIndices = 0;
          this._shouldSyncSizeWithSwapchain = false;
          this._poolHandle = NULL_HANDLE;
          this._cameras = [];
        }

        var _proto = RenderWindow.prototype;

        _proto.initialize = function initialize(device, info) {
          this._poolHandle = RenderWindowPool.alloc();

          if (info.title !== undefined) {
            this._title = info.title;
          }

          if (info.swapchainBufferIndices !== undefined) {
            this._swapchainBufferIndices = info.swapchainBufferIndices;
          }

          if (info.shouldSyncSizeWithSwapchain !== undefined) {
            this._shouldSyncSizeWithSwapchain = info.shouldSyncSizeWithSwapchain;
          }

          this._width = info.width;
          this._height = info.height;
          this._nativeWidth = this._width;
          this._nativeHeight = this._height;
          var _info$renderPassInfo = info.renderPassInfo,
              colorAttachments = _info$renderPassInfo.colorAttachments,
              depthStencilAttachment = _info$renderPassInfo.depthStencilAttachment;

          for (var i = 0; i < colorAttachments.length; i++) {
            if (colorAttachments[i].format === Format.UNKNOWN) {
              colorAttachments[i].format = device.colorFormat;
            }
          }

          if (depthStencilAttachment && depthStencilAttachment.format === Format.UNKNOWN) {
            depthStencilAttachment.format = device.depthStencilFormat;
          }

          this._renderPass = device.createRenderPass(info.renderPassInfo);

          for (var _i = 0; _i < colorAttachments.length; _i++) {
            var colorTex = null;

            if (!(this._swapchainBufferIndices & 1 << _i)) {
              colorTex = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.COLOR_ATTACHMENT | TextureUsageBit.SAMPLED, colorAttachments[_i].format, this._width, this._height));
              RenderWindowPool.set(this._poolHandle, RenderWindowView.HAS_OFF_SCREEN_ATTACHMENTS, 1);
            } else {
              RenderWindowPool.set(this._poolHandle, RenderWindowView.HAS_ON_SCREEN_ATTACHMENTS, 1);
            }

            this._colorTextures.push(colorTex);
          }

          if (depthStencilAttachment) {
            if (this._swapchainBufferIndices >= 0) {
              this._depthStencilTexture = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.DEPTH_STENCIL_ATTACHMENT | TextureUsageBit.SAMPLED, depthStencilAttachment.format, this._width, this._height));
              RenderWindowPool.set(this._poolHandle, RenderWindowView.HAS_OFF_SCREEN_ATTACHMENTS, 1);
            } else {
              RenderWindowPool.set(this._poolHandle, RenderWindowView.HAS_ON_SCREEN_ATTACHMENTS, 1);
            }
          }

          var hFBO = FramebufferPool.alloc(device, new FramebufferInfo(this._renderPass, this._colorTextures, this._depthStencilTexture));
          RenderWindowPool.set(this._poolHandle, RenderWindowView.FRAMEBUFFER, hFBO);
          return true;
        };

        _proto.destroy = function destroy() {
          this.clearCameras();

          if (this._depthStencilTexture) {
            this._depthStencilTexture.destroy();

            this._depthStencilTexture = null;
          }

          for (var i = 0; i < this._colorTextures.length; i++) {
            var colorTexture = this._colorTextures[i];

            if (colorTexture) {
              colorTexture.destroy();
            }
          }

          this._colorTextures.length = 0;

          if (this._poolHandle) {
            FramebufferPool.get(RenderWindowPool.get(this._poolHandle, RenderWindowView.FRAMEBUFFER)).destroy();
            this._poolHandle = NULL_HANDLE;
          }
        };

        _proto.resize = function resize(width, height) {
          this._width = width;
          this._height = height;

          if (width > this._nativeWidth || height > this._nativeHeight) {
            this._nativeWidth = width;
            this._nativeHeight = height;
            var needRebuild = false;

            if (this._depthStencilTexture) {
              this._depthStencilTexture.resize(width, height);

              needRebuild = true;
            }

            for (var i = 0; i < this._colorTextures.length; i++) {
              var colorTex = this._colorTextures[i];

              if (colorTex) {
                colorTex.resize(width, height);
                needRebuild = true;
              }
            }

            var framebuffer = FramebufferPool.get(RenderWindowPool.get(this._poolHandle, RenderWindowView.FRAMEBUFFER));

            if (needRebuild && framebuffer) {
              framebuffer.destroy();
              framebuffer.initialize(new FramebufferInfo(this._renderPass, this._colorTextures, this._depthStencilTexture));
            }
          }

          for (var _iterator = _createForOfIteratorHelperLoose(this._cameras), _step; !(_step = _iterator()).done;) {
            var camera = _step.value;

            if (camera.isWindowSize) {
              camera.resize(width, height);
            }
          }
        };

        _proto.extractRenderCameras = function extractRenderCameras() {
          var cameras = [];

          for (var j = 0; j < this._cameras.length; j++) {
            var camera = this._cameras[j];

            if (camera.enabled) {
              camera.update();
              cameras.push(camera);
            }
          }

          return cameras;
        };

        _proto.attachCamera = function attachCamera(camera) {
          for (var i = 0; i < this._cameras.length; i++) {
            if (this._cameras[i] === camera) {
              return;
            }
          }

          this._cameras.push(camera);

          this.sortCameras();
        };

        _proto.detachCamera = function detachCamera(camera) {
          for (var i = 0; i < this._cameras.length; ++i) {
            if (this._cameras[i] === camera) {
              this._cameras.splice(i, 1);

              return;
            }
          }
        };

        _proto.clearCameras = function clearCameras() {
          this._cameras.length = 0;
        };

        _proto.sortCameras = function sortCameras() {
          this._cameras.sort(function (a, b) {
            return a.priority - b.priority;
          });
        };

        return RenderWindow;
      }();

      var Root = function () {
        _createClass(Root, [{
          key: "device",
          get: function get() {
            return this._device;
          }
        }, {
          key: "mainWindow",
          get: function get() {
            return this._mainWindow;
          }
        }, {
          key: "curWindow",
          set: function set(window) {
            this._curWindow = window;
          },
          get: function get() {
            return this._curWindow;
          }
        }, {
          key: "tempWindow",
          set: function set(window) {
            this._tempWindow = window;
          },
          get: function get() {
            return this._tempWindow;
          }
        }, {
          key: "windows",
          get: function get() {
            return this._windows;
          }
        }, {
          key: "pipeline",
          get: function get() {
            return this._pipeline;
          }
        }, {
          key: "batcher2D",
          get: function get() {
            return this._batcher;
          }
        }, {
          key: "scenes",
          get: function get() {
            return this._scenes;
          }
        }, {
          key: "cumulativeTime",
          get: function get() {
            return RootPool.get(this._poolHandle, RootView.CUMULATIVE_TIME);
          }
        }, {
          key: "frameTime",
          get: function get() {
            return RootPool.get(this._poolHandle, RootView.FRAME_TIME);
          }
        }, {
          key: "frameCount",
          get: function get() {
            return this._frameCount;
          }
        }, {
          key: "fps",
          get: function get() {
            return this._fps;
          }
        }, {
          key: "fixedFPS",
          set: function set(fps) {
            if (fps > 0) {
              this._fixedFPS = fps;
              this._fixedFPSFrameTime = 1000.0 / fps;
            } else {
              this._fixedFPSFrameTime = 0;
            }
          },
          get: function get() {
            return this._fixedFPS;
          }
        }, {
          key: "dataPoolManager",
          get: function get() {
            return this._dataPoolMgr;
          }
        }, {
          key: "handle",
          get: function get() {
            return this._poolHandle;
          }
        }]);

        function Root(device) {
          var _this = this;

          this._createSceneFun = null;
          this._createWindowFun = null;
          this._device = void 0;
          this._windows = [];
          this._mainWindow = null;
          this._curWindow = null;
          this._tempWindow = null;
          this._pipeline = null;
          this._batcher = null;
          this._dataPoolMgr = void 0;
          this._scenes = [];
          this._modelPools = new Map();
          this._cameraPool = null;
          this._lightPools = new Map();
          this._fpsTime = 0;
          this._frameCount = 0;
          this._fps = 0;
          this._fixedFPS = 0;
          this._fixedFPSFrameTime = 0;
          this._poolHandle = NULL_HANDLE;
          this._device = device;
          this._dataPoolMgr = legacyCC.internal.DataPoolManager && new legacyCC.internal.DataPoolManager(device);
          RenderScene.registerCreateFunc(this);
          RenderWindow.registerCreateFunc(this);
          this._cameraPool = new Pool(function () {
            return new Camera(_this._device);
          }, 4);
        }

        var _proto = Root.prototype;

        _proto.initialize = function initialize(info) {
          var _this2 = this;

          this._poolHandle = RootPool.alloc();
          var colorAttachment = new ColorAttachment();
          var depthStencilAttachment = new DepthStencilAttachment();
          depthStencilAttachment.depthStoreOp = StoreOp.DISCARD;
          depthStencilAttachment.stencilStoreOp = StoreOp.DISCARD;
          var renderPassInfo = new RenderPassInfo([colorAttachment], depthStencilAttachment);
          this._mainWindow = this.createWindow({
            title: 'rootMainWindow',
            width: this._device.width,
            height: this._device.height,
            renderPassInfo: renderPassInfo,
            swapchainBufferIndices: -1
          });
          this._curWindow = this._mainWindow;
          return Promise.resolve(builtinResMgr.initBuiltinRes(this._device)).then(function () {
            legacyCC.view.on('design-resolution-changed', function () {
              var width = legacyCC.game.canvas.width;
              var height = legacyCC.game.canvas.height;

              _this2.resize(width, height);
            }, _this2);
          });
        };

        _proto.destroy = function destroy() {
          this.destroyScenes();

          if (this._pipeline) {
            this._pipeline.destroy();

            this._pipeline = null;
          }

          if (this._batcher) {
            this._batcher.destroy();

            this._batcher = null;
          }

          this._curWindow = null;
          this._mainWindow = null;
          this.dataPoolManager.clear();

          if (this._poolHandle) {
            RootPool.free(this._poolHandle);
            this._poolHandle = NULL_HANDLE;
          }
        };

        _proto.resize = function resize(width, height) {
          this._device.resize(width, height);

          this._mainWindow.resize(width, height);

          for (var _iterator = _createForOfIteratorHelperLoose(this._windows), _step; !(_step = _iterator()).done;) {
            var window = _step.value;

            if (window.shouldSyncSizeWithSwapchain) {
              window.resize(width, height);
            }
          }
        };

        _proto.setRenderPipeline = function setRenderPipeline(rppl) {
          if (!rppl) {
            rppl = this.createDefaultPipeline();
          }

          this._pipeline = rppl;

          if (!this._pipeline.activate()) {
            return false;
          }

          var scene = legacyCC.director.getScene();

          if (scene) {
            scene.globals.activate();
          }

          this.onGlobalPipelineStateChanged();

          if (!this._batcher && legacyCC.internal.Batcher2D) {
            this._batcher = new legacyCC.internal.Batcher2D(this);

            if (!this._batcher.initialize()) {
              this.destroy();
              return false;
            }
          }

          return true;
        };

        _proto.createDefaultPipeline = function createDefaultPipeline() {
          var rppl = new ForwardPipeline();
          rppl.initialize({
            flows: []
          });
          return rppl;
        };

        _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          for (var i = 0; i < this._scenes.length; i++) {
            this._scenes[i].onGlobalPipelineStateChanged();
          }
        };

        _proto.activeWindow = function activeWindow(window) {
          this._curWindow = window;
        };

        _proto.resetCumulativeTime = function resetCumulativeTime() {
          RootPool.set(this._poolHandle, RootView.CUMULATIVE_TIME, 0);
        };

        _proto.frameMove = function frameMove(deltaTime) {
          var _this3 = this;

          RootPool.set(this._poolHandle, RootView.FRAME_TIME, deltaTime);
          ++this._frameCount;
          RootPool.set(this._poolHandle, RootView.CUMULATIVE_TIME, RootPool.get(this._poolHandle, RootView.CUMULATIVE_TIME) + deltaTime);
          this._fpsTime += deltaTime;

          if (this._fpsTime > 1.0) {
            this._fps = this._frameCount;
            this._frameCount = 0;
            this._fpsTime = 0.0;
          }

          for (var i = 0; i < this._scenes.length; ++i) {
            this._scenes[i].removeBatches();
          }

          if (this._batcher) this._batcher.update();

          if (this._pipeline) {
            (function () {
              _this3._device.acquire();

              var windows = _this3._windows;
              var scenes = _this3._scenes;
              var stamp = legacyCC.director.getTotalFrames();
              if (_this3._batcher) _this3._batcher.uploadBuffers();

              for (var _i = 0; _i < scenes.length; _i++) {
                scenes[_i].update(stamp);
              }

              legacyCC.director.emit(legacyCC.Director.EVENT_BEFORE_COMMIT);
              var cameraList = [];

              for (var _i2 = 0; _i2 < windows.length; _i2++) {
                var window = windows[_i2];
                var cameras = window.extractRenderCameras();
                cameras.forEach(function (camera) {
                  cameraList.push(camera);
                });
              }

              cameraList.sort(function (a, b) {
                return a.priority - b.priority;
              });

              _this3._pipeline.render(cameraList);

              _this3._device.present();
            })();
          }

          if (this._batcher) this._batcher.reset();
        };

        _proto.createWindow = function createWindow(info) {
          var window = this._createWindowFun(this);

          window.initialize(this.device, info);

          this._windows.push(window);

          return window;
        };

        _proto.destroyWindow = function destroyWindow(window) {
          for (var i = 0; i < this._windows.length; ++i) {
            if (this._windows[i] === window) {
              window.destroy();

              this._windows.splice(i, 1);

              return;
            }
          }
        };

        _proto.destroyWindows = function destroyWindows() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._windows), _step2; !(_step2 = _iterator2()).done;) {
            var window = _step2.value;
            window.destroy();
          }

          this._windows = [];
        };

        _proto.createScene = function createScene(info) {
          var scene = this._createSceneFun(this);

          scene.initialize(info);

          this._scenes.push(scene);

          return scene;
        };

        _proto.destroyScene = function destroyScene(scene) {
          for (var i = 0; i < this._scenes.length; ++i) {
            if (this._scenes[i] === scene) {
              scene.destroy();

              this._scenes.splice(i, 1);

              return;
            }
          }
        };

        _proto.destroyScenes = function destroyScenes() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._scenes), _step3; !(_step3 = _iterator3()).done;) {
            var scene = _step3.value;
            scene.destroy();
          }

          this._scenes = [];
        };

        _proto.createModel = function createModel(ModelCtor) {
          var p = this._modelPools.get(ModelCtor);

          if (!p) {
            this._modelPools.set(ModelCtor, new Pool(function () {
              return new ModelCtor();
            }, 10));

            p = this._modelPools.get(ModelCtor);
          }

          var model = p.alloc();
          model.initialize();
          return model;
        };

        _proto.destroyModel = function destroyModel(m) {
          var p = this._modelPools.get(m.constructor);

          if (p) {
            p.free(m);
            m.destroy();

            if (m.scene) {
              m.scene.removeModel(m);
            }
          } else {
            warnID(1300, m.constructor.name);
          }
        };

        _proto.createCamera = function createCamera() {
          return this._cameraPool.alloc();
        };

        _proto.createLight = function createLight(LightCtor) {
          var l = this._lightPools.get(LightCtor);

          if (!l) {
            this._lightPools.set(LightCtor, new Pool(function () {
              return new LightCtor();
            }, 4));

            l = this._lightPools.get(LightCtor);
          }

          var light = l.alloc();
          light.initialize();
          return light;
        };

        _proto.destroyLight = function destroyLight(l) {
          var p = this._lightPools.get(l.constructor);

          l.destroy();

          if (p) {
            p.free(l);

            if (l.scene) {
              switch (l.type) {
                case LightType.SPHERE:
                  l.scene.removeSphereLight(l);
                  break;

                case LightType.SPOT:
                  l.scene.removeSpotLight(l);
                  break;
              }
            }
          }
        };

        return Root;
      }();
      legacyCC.Root = Root;

      var vmath = {};
      replaceProperty(vmath, 'vmath', [{
        name: 'vec2',
        newName: 'Vec2',
        target: math,
        targetName: 'math'
      }, {
        name: 'vec3',
        newName: 'Vec3',
        target: math,
        targetName: 'math'
      }, {
        name: 'vec4',
        newName: 'Vec4',
        target: math,
        targetName: 'math'
      }, {
        name: 'quat',
        newName: 'Quat',
        target: math,
        targetName: 'math'
      }, {
        name: 'mat3',
        newName: 'Mat3',
        target: math,
        targetName: 'math'
      }, {
        name: 'mat4',
        newName: 'Mat4',
        target: math,
        targetName: 'math'
      }, {
        name: 'color4',
        newName: 'Color',
        target: math,
        targetName: 'math'
      }, {
        name: 'rect',
        newName: 'Rect',
        target: math,
        targetName: 'math'
      }, {
        name: 'approx',
        newName: 'approx',
        target: math,
        targetName: 'math'
      }, {
        name: 'EPSILON',
        newName: 'EPSILON',
        target: math,
        targetName: 'math'
      }, {
        name: 'equals',
        newName: 'equals',
        target: math,
        targetName: 'math'
      }, {
        name: 'clamp',
        newName: 'clamp',
        target: math,
        targetName: 'math'
      }, {
        name: 'clamp01',
        newName: 'clamp01',
        target: math,
        targetName: 'math'
      }, {
        name: 'lerp',
        newName: 'lerp',
        target: math,
        targetName: 'math'
      }, {
        name: 'toRadian',
        newName: 'toRadian',
        target: math,
        targetName: 'math'
      }, {
        name: 'toDegree',
        newName: 'toDegree',
        target: math,
        targetName: 'math'
      }, {
        name: 'random',
        newName: 'random',
        target: math,
        targetName: 'math'
      }, {
        name: 'randomRange',
        newName: 'randomRange',
        target: math,
        targetName: 'math'
      }, {
        name: 'randomRangeInt',
        newName: 'randomRangeInt',
        target: math,
        targetName: 'math'
      }, {
        name: 'pseudoRandom',
        newName: 'pseudoRandom',
        target: math,
        targetName: 'math'
      }, {
        name: 'pseudoRandomRangeInt',
        newName: 'pseudoRandomRangeInt',
        target: math,
        targetName: 'math'
      }, {
        name: 'nextPow2',
        newName: 'nextPow2',
        target: math,
        targetName: 'math'
      }, {
        name: 'repeat',
        newName: 'repeat',
        target: math,
        targetName: 'math'
      }, {
        name: 'pingPong',
        newName: 'pingPong',
        target: math,
        targetName: 'math'
      }, {
        name: 'inverseLerp',
        newName: 'inverseLerp',
        target: math,
        targetName: 'math'
      }]);
      legacyCC.vmath = vmath;
      replaceProperty(Scheduler.prototype, 'Scheduler.prototype', [{
        name: 'enableForTarget',
        newName: 'enableForTarget',
        target: Scheduler,
        targetName: 'Scheduler'
      }]);
      replaceProperty(EventTouch.prototype, 'EventTouch.prototype', [{
        name: 'getUILocationInView',
        newName: 'getLocationInView',
        target: EventTouch,
        targetName: 'EventTouch'
      }]);
      replaceProperty(SubModel.prototype, 'SubModel.prototype', [{
        name: 'subMeshData',
        newName: 'subMesh'
      }]);
      removeProperty(SubModel.prototype, 'SubModel.prototype', [{
        name: 'getSubModel',
        suggest: 'Use `subModels[i]` instead'
      }, {
        name: 'subModelNum',
        suggest: 'Use `subModels.length` instead'
      }]);
      replaceProperty(Root.prototype, 'Root.prototype', [{
        name: 'ui',
        newName: 'batcher2D'
      }]);

      var Director = exports('D', function (_EventTarget) {
        _inheritsLoose(Director, _EventTarget);

        function Director() {
          var _this;

          _this = _EventTarget.call(this) || this;
          _this._compScheduler = void 0;
          _this._nodeActivator = void 0;
          _this._invalid = void 0;
          _this._paused = void 0;
          _this._purgeDirectorInNextLoop = void 0;
          _this._root = void 0;
          _this._loadingScene = void 0;
          _this._scene = void 0;
          _this._totalFrames = void 0;
          _this._lastUpdate = void 0;
          _this._deltaTime = void 0;
          _this._startTime = void 0;
          _this._scheduler = void 0;
          _this._systems = void 0;
          _this._invalid = false;
          _this._paused = false;
          _this._purgeDirectorInNextLoop = false;
          _this._root = null;
          _this._loadingScene = '';
          _this._scene = null;
          _this._totalFrames = 0;
          _this._lastUpdate = 0;
          _this._deltaTime = 0.0;
          _this._startTime = 0.0;
          _this._scheduler = new Scheduler();
          _this._compScheduler = new ComponentScheduler();
          _this._nodeActivator = new NodeActivator();
          _this._systems = [];
          legacyCC.game.once(Game.EVENT_RENDERER_INITED, _this._initOnRendererInitialized, _assertThisInitialized(_this));
          return _this;
        }

        var _proto = Director.prototype;

        _proto.calculateDeltaTime = function calculateDeltaTime(now) {
          if (!now) now = performance.now();
          this._deltaTime = now > this._lastUpdate ? (now - this._lastUpdate) / 1000 : 0;

          if ( this._deltaTime > 1) {
            this._deltaTime = 1 / 60.0;
          }

          this._lastUpdate = now;
        };

        _proto.convertToGL = function convertToGL(uiPoint) {
          var container = legacyCC.game.container;
          var view = legacyCC.view;
          var box = container.getBoundingClientRect();
          var left = box.left + window.pageXOffset - container.clientLeft;
          var top = box.top + window.pageYOffset - container.clientTop;
          var x = view._devicePixelRatio * (uiPoint.x - left);
          var y = view._devicePixelRatio * (top + box.height - uiPoint.y);
          return view._isRotated ? v2(view._viewportRect.width - y, x) : v2(x, y);
        };

        _proto.convertToUI = function convertToUI(glPoint) {
          var container = legacyCC.game.container;
          var view = legacyCC.view;
          var box = container.getBoundingClientRect();
          var left = box.left + window.pageXOffset - container.clientLeft;
          var top = box.top + window.pageYOffset - container.clientTop;
          var uiPoint = v2(0, 0);

          if (view._isRotated) {
            uiPoint.x = left + glPoint.y / view._devicePixelRatio;
            uiPoint.y = top + box.height - (view._viewportRect.width - glPoint.x) / view._devicePixelRatio;
          } else {
            uiPoint.x = left + glPoint.x * view._devicePixelRatio;
            uiPoint.y = top + box.height - glPoint.y * view._devicePixelRatio;
          }

          return uiPoint;
        };

        _proto.end = function end() {
          this._purgeDirectorInNextLoop = true;
        };

        _proto.getWinSize = function getWinSize() {
          return size(legacyCC.winSize);
        };

        _proto.getWinSizeInPixels = function getWinSizeInPixels() {
          return size(legacyCC.winSize);
        };

        _proto.pause = function pause() {
          if (this._paused) {
            return;
          }

          this._paused = true;
        };

        _proto.purgeCachedData = function purgeCachedData() {
          legacyCC.assetManager.releaseAll();
        };

        _proto.purgeDirector = function purgeDirector() {
          this._scheduler.unscheduleAll();

          this._compScheduler.unscheduleAll();

          this._nodeActivator.reset();

          if (eventManager) {
            eventManager.setEnabled(false);
          }

          {
            if (legacyCC.isValid(this._scene)) {
              this._scene.destroy();
            }

            this._scene = null;
          }

          this.stopAnimation();
          legacyCC.assetManager.releaseAll();
        };

        _proto.reset = function reset() {
          this.purgeDirector();
          this.emit(Director.EVENT_RESET);

          if (eventManager) {
            eventManager.setEnabled(true);
          }

          this.startAnimation();
        };

        _proto.runSceneImmediate = function runSceneImmediate(scene, onBeforeLoadScene, onLaunched) {
          if (scene instanceof SceneAsset) scene = scene.scene;
          assertID(scene instanceof Scene, 1216);

          scene._load();

          var persistNodeList = Object.keys(legacyCC.game._persistRootNodes).map(function (x) {
            return legacyCC.game._persistRootNodes[x];
          });

          for (var i = 0; i < persistNodeList.length; i++) {
            var node = persistNodeList[i];
            node.emit(legacyCC.Node.SCENE_CHANGED_FOR_PERSISTS, scene.renderScene);
            var existNode = scene.getChildByUuid(node.uuid);

            if (existNode) {
              var index = existNode.getSiblingIndex();

              existNode._destroyImmediate();

              scene.insertChild(node, index);
            } else {
              node.parent = scene;
            }
          }

          var oldScene = this._scene;

          if (legacyCC.isValid(oldScene)) {
            oldScene.destroy();
          }

          {

            legacyCC.assetManager._releaseManager._autoRelease(oldScene, scene, persistNodeList);
          }

          this._scene = null;

          CCObject._deferredDestroy();

          if (onBeforeLoadScene) {
            onBeforeLoadScene();
          }

          this.emit(legacyCC.Director.EVENT_BEFORE_SCENE_LAUNCH, scene);
          this._scene = scene;

          scene._activate();

          if (this._root) {
            this._root.resetCumulativeTime();
          }

          this.startAnimation();

          if (onLaunched) {
            onLaunched(null, scene);
          }

          this.emit(legacyCC.Director.EVENT_AFTER_SCENE_LAUNCH, scene);
        };

        _proto.runScene = function runScene(scene, onBeforeLoadScene, onLaunched) {
          var _this2 = this;

          if (scene instanceof SceneAsset) scene = scene.scene;
          assertID(scene, 1205);
          assertID(scene instanceof Scene, 1216);

          scene._load();

          this.once(legacyCC.Director.EVENT_AFTER_DRAW, function () {
            _this2.runSceneImmediate(scene, onBeforeLoadScene, onLaunched);
          });
        };

        _proto.loadScene = function loadScene(sceneName, onLaunched, onUnloaded) {
          var _this3 = this;

          if (this._loadingScene) {
            warnID(1208, sceneName, this._loadingScene);
            return false;
          }

          var bundle = legacyCC.assetManager.bundles.find(function (bundle) {
            return bundle.getSceneInfo(sceneName);
          });

          if (bundle) {
            this.emit(legacyCC.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
            this._loadingScene = sceneName;
            console.time("LoadScene " + sceneName);
            bundle.loadScene(sceneName, function (err, scene) {
              console.timeEnd("LoadScene " + sceneName);
              _this3._loadingScene = '';

              if (err) {
                error(err);

                if (onLaunched) {
                  onLaunched(err);
                }
              } else {
                _this3.runSceneImmediate(scene, onUnloaded, onLaunched);
              }
            });
            return true;
          } else {
            errorID(1209, sceneName);
            return false;
          }
        };

        _proto.preloadScene = function preloadScene(sceneName, onProgress, onLoaded) {
          var bundle = legacyCC.assetManager.bundles.find(function (bundle) {
            return bundle.getSceneInfo(sceneName);
          });

          if (bundle) {
            bundle.preloadScene(sceneName, null, onProgress, onLoaded);
          } else {
            var err = "Can not preload the scene \"" + sceneName + "\" because it is not in the build settings.";

            if (onLoaded) {
              onLoaded(new Error(err));
            }

            error("preloadScene: " + err);
          }
        };

        _proto.resume = function resume() {
          if (!this._paused) {
            return;
          }

          this._lastUpdate = performance.now();

          if (!this._lastUpdate) {
            logID(1200);
          }

          this._paused = false;
          this._deltaTime = 0;
        };

        _proto.setDepthTest = function setDepthTest(value) {
          if (!legacyCC.Camera.main) {
            return;
          }

          legacyCC.Camera.main.depth = !!value;
        };

        _proto.setClearColor = function setClearColor(clearColor) {
          if (!legacyCC.Camera.main) {
            return;
          }

          legacyCC.Camera.main.backgroundColor = clearColor;
        };

        _proto.getRunningScene = function getRunningScene() {
          return this._scene;
        };

        _proto.getScene = function getScene() {
          return this._scene;
        };

        _proto.getAnimationInterval = function getAnimationInterval() {
          return 1000 / legacyCC.game.getFrameRate();
        };

        _proto.setAnimationInterval = function setAnimationInterval(value) {
          legacyCC.game.setFrameRate(Math.round(1000 / value));
        };

        _proto.getDeltaTime = function getDeltaTime() {
          return this._deltaTime;
        };

        _proto.getTotalTime = function getTotalTime() {
          return performance.now() - this._startTime;
        };

        _proto.getCurrentTime = function getCurrentTime() {
          return this._lastUpdate;
        };

        _proto.getTotalFrames = function getTotalFrames() {
          return this._totalFrames;
        };

        _proto.isPaused = function isPaused() {
          return this._paused;
        };

        _proto.getScheduler = function getScheduler() {
          return this._scheduler;
        };

        _proto.setScheduler = function setScheduler(scheduler) {
          if (this._scheduler !== scheduler) {
            this.unregisterSystem(this._scheduler);
            this._scheduler = scheduler;
            this.registerSystem(Scheduler.ID, scheduler, 200);
          }
        };

        _proto.registerSystem = function registerSystem(name, sys, priority) {
          sys.id = name;
          sys.priority = priority;
          sys.init();

          this._systems.push(sys);

          this._systems.sort(System.sortByPriority);
        };

        _proto.unregisterSystem = function unregisterSystem(sys) {
          array.fastRemove(this._systems, sys);

          this._systems.sort(System.sortByPriority);
        };

        _proto.getSystem = function getSystem(name) {
          return this._systems.find(function (sys) {
            return sys.id === name;
          });
        };

        _proto.getAnimationManager = function getAnimationManager() {
          return this.getSystem(legacyCC.AnimationManager.ID);
        };

        _proto.startAnimation = function startAnimation() {
          this._invalid = false;
          this._lastUpdate = performance.now();
        };

        _proto.stopAnimation = function stopAnimation() {
          this._invalid = true;
        };

        _proto.mainLoop = function mainLoop(time) {
          if (this._purgeDirectorInNextLoop) {
            this._purgeDirectorInNextLoop = false;
            this.purgeDirector();
          } else if (!this._invalid) {
            {
              this.calculateDeltaTime(time);
            }

            var dt = this._deltaTime;

            if (!this._paused) {
              this.emit(Director.EVENT_BEFORE_UPDATE);

              this._compScheduler.startPhase();

              this._compScheduler.updatePhase(dt);

              for (var i = 0; i < this._systems.length; ++i) {
                this._systems[i].update(dt);
              }

              this._compScheduler.lateUpdatePhase(dt);

              this.emit(Director.EVENT_AFTER_UPDATE);

              CCObject._deferredDestroy();

              for (var _i = 0; _i < this._systems.length; ++_i) {
                this._systems[_i].postUpdate(dt);
              }
            }

            this.emit(Director.EVENT_BEFORE_DRAW);

            this._root.frameMove(this._deltaTime);

            this.emit(Director.EVENT_AFTER_DRAW);
            eventManager.frameUpdateListeners();
            Node.bookOfChange.clear();
            this._totalFrames++;
          }
        };

        _proto._initOnRendererInitialized = function _initOnRendererInitialized() {
          this._totalFrames = 0;
          this._lastUpdate = performance.now();
          this._startTime = this._lastUpdate;
          this._paused = false;
          this._purgeDirectorInNextLoop = false;

          if (eventManager) {
            eventManager.setEnabled(true);
          }

          this.registerSystem(Scheduler.ID, this._scheduler, 200);
          this.emit(Director.EVENT_INIT);
        };

        _proto._init = function _init() {
          this._root = new Root(legacyCC.game._gfxDevice);
          var rootInfo = {};
          return this._root.initialize(rootInfo)["catch"](function (error) {
            errorID(1217);
            return Promise.reject(error);
          });
        };

        _createClass(Director, [{
          key: "root",
          get: function get() {
            return this._root;
          }
        }]);

        return Director;
      }(EventTarget));
      Director.EVENT_INIT = 'director_init';
      Director.EVENT_RESET = 'director_reset';
      Director.EVENT_BEFORE_SCENE_LOADING = 'director_before_scene_loading';
      Director.EVENT_BEFORE_SCENE_LAUNCH = 'director_before_scene_launch';
      Director.EVENT_AFTER_SCENE_LAUNCH = 'director_after_scene_launch';
      Director.EVENT_BEFORE_UPDATE = 'director_before_update';
      Director.EVENT_AFTER_UPDATE = 'director_after_update';
      Director.EVENT_BEFORE_DRAW = 'director_before_draw';
      Director.EVENT_AFTER_DRAW = 'director_after_draw';
      Director.EVENT_BEFORE_COMMIT = 'director_before_commit';
      Director.EVENT_BEFORE_PHYSICS = 'director_before_physics';
      Director.EVENT_AFTER_PHYSICS = 'director_after_physics';
      Director.instance = void 0;
      legacyCC.Director = Director;
      var director = exports('f', Director.instance = legacyCC.director = new Director());

      var PackManager = function () {
        function PackManager() {
          this._loading = new Cache();
          this._unpackers = {
            '.json': this.unpackJson
          };
        }

        var _proto = PackManager.prototype;

        _proto.unpackJson = function unpackJson(pack, json, options, onComplete) {
          var out = js.createMap(true);
          var err = null;

          if (Array.isArray(json)) {
            json = unpackJSONs(json);

            if (json.length !== pack.length) {
              errorID(4915);
            }

            for (var i = 0; i < pack.length; i++) {
              out[pack[i] + "@import"] = json[i];
            }
          } else {
            var textureType = js._getClassId(Texture2D);

            if (json.type === textureType && json.data) {
              var datas = json.data;

              if (datas.length !== pack.length) {
                errorID(4915);
              }

              for (var _i = 0; _i < pack.length; _i++) {
                out[pack[_i] + "@import"] = packCustomObjData(textureType, {
                  base: datas[_i][0],
                  mipmaps: datas[_i][1]
                });
              }
            } else {
              err = new Error('unmatched type pack!');
              out = null;
            }
          }

          onComplete(err, out);
        };

        _proto.init = function init() {
          this._loading.clear();
        };

        _proto.register = function register(type, handler) {
          if (typeof type === 'object') {
            js.mixin(this._unpackers, type);
          } else {
            this._unpackers[type] = handler;
          }
        };

        _proto.unpack = function unpack(pack, data, type, options, onComplete) {
          if (!data) {
            onComplete(new Error('package data is wrong!'));
            return;
          }

          var unpacker = this._unpackers[type];
          unpacker(pack, data, options, onComplete);
        };

        _proto.load = function load(item, options, onComplete) {
          var _this = this;

          if (item.isNative || !item.info || !item.info.packs) {
            downloader.download(item.id, item.url, item.ext, item.options, onComplete);
            return;
          }

          if (files.has(item.id)) {
            onComplete(null, files.get(item.id));
            return;
          }

          var packs = item.info.packs;
          var pack = packs.find(function (val) {
            return _this._loading.has(val.uuid);
          });

          if (pack) {
            this._loading.get(pack.uuid).push({
              onComplete: onComplete,
              id: item.id
            });

            return;
          }

          pack = packs[0];

          this._loading.add(pack.uuid, [{
            onComplete: onComplete,
            id: item.id
          }]);

          var url = transform(pack.uuid, {
            ext: pack.ext,
            bundle: item.config.name
          });
          downloader.download(pack.uuid, url, pack.ext, item.options, function (err, data) {
            files.remove(pack.uuid);

            if (err) {
              error(err.message, err.stack);
            }

            _this.unpack(pack.packedUuids, data, pack.ext, item.options, function (err2, result) {
              if (!err2) {
                for (var id in result) {
                  files.add(id, result[id]);
                }
              }

              var callbacks = _this._loading.remove(pack.uuid);

              for (var i = 0, l = callbacks.length; i < l; i++) {
                var cb = callbacks[i];

                if (err || err2) {
                  cb.onComplete(err || err2);
                  continue;
                }

                var unpackedData = result[cb.id];

                if (!unpackedData) {
                  cb.onComplete(new Error('can not retrieve data from package'));
                } else {
                  cb.onComplete(null, unpackedData);
                }
              }
            });
          });
        };

        return PackManager;
      }();
      var packManager = new PackManager();

      function fetch(task, done) {
        var firstTask = false;

        if (!task.progress) {
          task.progress = {
            finish: 0,
            total: task.input.length,
            canInvoke: true
          };
          firstTask = true;
        }

        var options = task.options,
            progress = task.progress;
        var depends = [];
        var total = progress.total;
        options.__exclude__ = options.__exclude__ || Object.create(null);
        task.output = [];
        forEach(task.input, function (item, cb) {
          if (!item.isNative && assets.has(item.uuid)) {
            var asset = assets.get(item.uuid);
            asset.addRef();
            handle(item, task, asset, null, asset.__asyncLoadAssets__, depends, total);
            cb();
            return;
          }

          packManager.load(item, task.options, function (err, data) {
            if (err) {
              if (!task.isFinish) {
                if (!legacyCC.assetManager.force || firstTask) {
                  error(err.message, err.stack);
                  progress.canInvoke = false;
                  done(err);
                } else {
                  handle(item, task, null, null, false, depends, total);
                }
              }
            } else if (!task.isFinish) {
              handle(item, task, null, data, !item.isNative, depends, total);
            }

            cb();
          });
        }, function () {
          if (task.isFinish) {
            clear(task, true);
            task.dispatch('error');
            return;
          }

          if (depends.length > 0) {
            var subTask = Task.create({
              input: depends,
              progress: progress,
              options: options,
              onProgress: task.onProgress,
              onError: Task.prototype.recycle,
              onComplete: function onComplete(err) {
                if (!err) {
                  var _task$output;

                  (_task$output = task.output).push.apply(_task$output, subTask.output);

                  subTask.recycle();
                }

                if (firstTask) {
                  decreaseRef(task);
                }

                done(err);
              }
            });
            fetchPipeline.async(subTask);
            return;
          }

          if (firstTask) {
            decreaseRef(task);
          }

          done();
        });
      }

      function decreaseRef(task) {
        var output = task.output;

        for (var i = 0, l = output.length; i < l; i++) {
          if (output[i].content) {
            output[i].content.decRef(false);
          }
        }
      }

      function handle(item, task, content, file, loadDepends, depends, last) {
        var exclude = task.options.__exclude__;
        var progress = task.progress;
        item.content = content;
        item.file = file;
        task.output.push(item);

        if (loadDepends) {
          exclude[item.uuid] = true;
          getDepends(item.uuid, file || content, exclude, depends, true, false, item.config);
          progress.total = last + depends.length;
        }

        if (progress.canInvoke) {
          task.dispatch('progress', ++progress.finish, progress.total, item);
        }
      }

      var SAXParser = exports('v', function () {
        function SAXParser() {
          this._parser = null;

          if (window.DOMParser) {
            this._parser = new DOMParser();
          }
        }

        var _proto = SAXParser.prototype;

        _proto.parse = function parse(xmlTxt) {
          return this._parseXML(xmlTxt);
        };

        _proto._parseXML = function _parseXML(textxml) {
          if (this._parser) {
            return this._parser.parseFromString(textxml, 'text/xml');
          }

          throw new Error('Dom parser is not supported in this platform!');
        };

        return SAXParser;
      }());

      var PlistParser = function (_SAXParser) {
        _inheritsLoose(PlistParser, _SAXParser);

        function PlistParser() {
          return _SAXParser.apply(this, arguments) || this;
        }

        var _proto2 = PlistParser.prototype;

        _proto2.parse = function parse(xmlTxt) {
          var xmlDoc = this._parseXML(xmlTxt);

          var plist = xmlDoc.documentElement;

          if (plist.tagName !== 'plist') {
            warnID(5100);
            return {};
          }

          var node = null;

          for (var i = 0, len = plist.childNodes.length; i < len; i++) {
            node = plist.childNodes[i];

            if (node.nodeType === 1) {
              break;
            }
          }

          return this._parseNode(node);
        };

        _proto2._parseNode = function _parseNode(node) {
          var data = null;
          var tagName = node.tagName;

          if (tagName === 'dict') {
            data = this._parseDict(node);
          } else if (tagName === 'array') {
            data = this._parseArray(node);
          } else if (tagName === 'string') {
            if (node.childNodes.length === 1) {
              data = node.firstChild.nodeValue;
            } else {
              data = '';

              for (var i = 0; i < node.childNodes.length; i++) {
                data += node.childNodes[i].nodeValue;
              }
            }
          } else if (tagName === 'false') {
            data = false;
          } else if (tagName === 'true') {
            data = true;
          } else if (tagName === 'real') {
            data = parseFloat(node.firstChild.nodeValue);
          } else if (tagName === 'integer') {
            data = parseInt(node.firstChild.nodeValue, 10);
          }

          return data;
        };

        _proto2._parseArray = function _parseArray(node) {
          var data = [];

          for (var i = 0, len = node.childNodes.length; i < len; i++) {
            var child = node.childNodes[i];

            if (child.nodeType !== 1) {
              continue;
            }

            data.push(this._parseNode(child));
          }

          return data;
        };

        _proto2._parseDict = function _parseDict(node) {
          var data = {};
          var key = '';

          for (var i = 0, len = node.childNodes.length; i < len; i++) {
            var child = node.childNodes[i];

            if (child.nodeType !== 1) {
              continue;
            }

            if (child.tagName === 'key') {
              key = child.firstChild.nodeValue;
            } else {
              data[key] = this._parseNode(child);
            }
          }

          return data;
        };

        return PlistParser;
      }(SAXParser);

      var plistParser = new PlistParser();

      var PVR_HEADER_LENGTH = 13;
      var PVR_MAGIC = 0x03525650;
      var PVR_HEADER_MAGIC = 0;
      var PVR_HEADER_HEIGHT = 6;
      var PVR_HEADER_WIDTH = 7;
      var PVR_HEADER_METADATA = 12;
      var ETC_PKM_HEADER_SIZE = 16;
      var ETC_PKM_FORMAT_OFFSET = 6;
      var ETC_PKM_ENCODED_WIDTH_OFFSET = 8;
      var ETC_PKM_ENCODED_HEIGHT_OFFSET = 10;
      var ETC_PKM_WIDTH_OFFSET = 12;
      var ETC_PKM_HEIGHT_OFFSET = 14;
      var ETC1_RGB_NO_MIPMAPS = 0;
      var ETC2_RGB_NO_MIPMAPS = 1;
      var ETC2_RGBA_NO_MIPMAPS = 3;
      var ASTC_MAGIC = 0x5CA1AB13;
      var ASTC_HEADER_LENGTH = 16;
      var ASTC_HEADER_MAGIC = 4;
      var ASTC_HEADER_SIZE_X_BEGIN = 7;
      var ASTC_HEADER_SIZE_Y_BEGIN = 10;
      var ASTC_HEADER_SIZE_Z_BEGIN = 13;

      function getASTCFormat(xdim, ydim) {
        if (xdim === 4) {
          return PixelFormat.RGBA_ASTC_4x4;
        }

        if (xdim === 5) {
          if (ydim === 4) {
            return PixelFormat.RGBA_ASTC_5x4;
          }

          return PixelFormat.RGBA_ASTC_5x5;
        }

        if (xdim === 6) {
          if (ydim === 5) {
            return PixelFormat.RGBA_ASTC_6x5;
          }

          return PixelFormat.RGBA_ASTC_6x6;
        }

        if (xdim === 8) {
          if (ydim === 5) {
            return PixelFormat.RGBA_ASTC_8x5;
          }

          if (ydim === 6) {
            return PixelFormat.RGBA_ASTC_8x6;
          }

          return PixelFormat.RGBA_ASTC_8x8;
        }

        if (xdim === 10) {
          if (ydim === 5) {
            return PixelFormat.RGBA_ASTC_10x5;
          }

          if (ydim === 6) {
            return PixelFormat.RGBA_ASTC_10x6;
          }

          if (ydim === 8) {
            return PixelFormat.RGBA_ASTC_10x8;
          }

          return PixelFormat.RGBA_ASTC_10x10;
        }

        if (ydim === 10) {
          return PixelFormat.RGBA_ASTC_12x10;
        }

        return PixelFormat.RGBA_ASTC_12x12;
      }

      function readBEUint16(header, offset) {
        return header[offset] << 8 | header[offset + 1];
      }

      var Parser = function () {
        function Parser() {
          this._parsing = new Cache();
          this._parsers = {
            '.png': this.parseImage,
            '.jpg': this.parseImage,
            '.bmp': this.parseImage,
            '.jpeg': this.parseImage,
            '.gif': this.parseImage,
            '.ico': this.parseImage,
            '.tiff': this.parseImage,
            '.webp': this.parseImage,
            '.image': this.parseImage,
            '.pvr': this.parsePVRTex,
            '.pkm': this.parsePKMTex,
            '.astc': this.parseASTCTex,
            '.mp3': this.parseAudio,
            '.ogg': this.parseAudio,
            '.wav': this.parseAudio,
            '.m4a': this.parseAudio,
            '.plist': this.parsePlist,
            "import": this.parseImport
          };
        }

        var _proto = Parser.prototype;

        _proto.parseImage = function parseImage(file, options, onComplete) {
          if (file instanceof HTMLImageElement) {
            onComplete(null, file);
            return;
          }

          createImageBitmap(file, {
            premultiplyAlpha: 'none'
          }).then(function (result) {
            onComplete(null, result);
          }, function (err) {
            onComplete(err, null);
          });
        };

        _proto.parseAudio = function parseAudio(file, options, onComplete) {
          if (file instanceof ArrayBuffer) {
            sys.__audioSupport.context.decodeAudioData(file, function (buffer) {
              onComplete(null, buffer);
            }, function (e) {
              onComplete(new Error("Error with decoding audio data" + e.err), null);
            });
          } else {
            onComplete(null, file);
          }
        };

        _proto.parsePVRTex = function parsePVRTex(file, options, onComplete) {
          var err = null;
          var out = null;

          try {
            var buffer = file instanceof ArrayBuffer ? file : file.buffer;
            var header = new Int32Array(buffer, 0, PVR_HEADER_LENGTH);

            if (header[PVR_HEADER_MAGIC] === PVR_MAGIC) {
              var width = header[PVR_HEADER_WIDTH];
              var height = header[PVR_HEADER_HEIGHT];
              var dataOffset = header[PVR_HEADER_METADATA] + 52;
              var pvrtcData = new Uint8Array(buffer, dataOffset);
              out = {
                _data: pvrtcData,
                _compressed: true,
                width: width,
                height: height,
                format: 0
              };
            } else if (header[11] === 0x21525650) {
              var headerLength = header[0];
              var _height = header[1];
              var _width = header[2];

              var _pvrtcData = new Uint8Array(buffer, headerLength);

              out = {
                _data: _pvrtcData,
                _compressed: true,
                width: _width,
                height: _height,
                format: 0
              };
            } else {
              throw new Error('Invalid magic number in PVR header');
            }
          } catch (e) {
            err = e;
          }

          onComplete(err, out);
        };

        _proto.parsePKMTex = function parsePKMTex(file, options, onComplete) {
          var err = null;
          var out = null;

          try {
            var buffer = file instanceof ArrayBuffer ? file : file.buffer;
            var header = new Uint8Array(buffer);
            var format = readBEUint16(header, ETC_PKM_FORMAT_OFFSET);

            if (format !== ETC1_RGB_NO_MIPMAPS && format !== ETC2_RGB_NO_MIPMAPS && format !== ETC2_RGBA_NO_MIPMAPS) {
              throw new Error('Invalid magic number in ETC header');
            }

            var width = readBEUint16(header, ETC_PKM_WIDTH_OFFSET);
            var height = readBEUint16(header, ETC_PKM_HEIGHT_OFFSET);
            var encodedWidth = readBEUint16(header, ETC_PKM_ENCODED_WIDTH_OFFSET);
            var encodedHeight = readBEUint16(header, ETC_PKM_ENCODED_HEIGHT_OFFSET);
            var etcData = new Uint8Array(buffer, ETC_PKM_HEADER_SIZE);
            out = {
              _data: etcData,
              _compressed: true,
              width: width,
              height: height,
              format: 0
            };
          } catch (e) {
            err = e;
          }

          onComplete(err, out);
        };

        _proto.parseASTCTex = function parseASTCTex(file, options, onComplete) {
          var err = null;
          var out = null;

          try {
            var buffer = file instanceof ArrayBuffer ? file : file.buffer;
            var header = new Uint8Array(buffer);
            var magicval = header[0] + (header[1] << 8) + (header[2] << 16) + (header[3] << 24);

            if (magicval !== ASTC_MAGIC) {
              throw new Error('Invalid magic number in ASTC header');
            }

            var xdim = header[ASTC_HEADER_MAGIC];
            var ydim = header[ASTC_HEADER_MAGIC + 1];
            var zdim = header[ASTC_HEADER_MAGIC + 2];

            if ((xdim < 3 || xdim > 6 || ydim < 3 || ydim > 6 || zdim < 3 || zdim > 6) && (xdim < 4 || xdim === 7 || xdim === 9 || xdim === 11 || xdim > 12 || ydim < 4 || ydim === 7 || ydim === 9 || ydim === 11 || ydim > 12 || zdim !== 1)) {
              throw new Error('Invalid block number in ASTC header');
            }

            var format = getASTCFormat(xdim, ydim);
            var xsize = header[ASTC_HEADER_SIZE_X_BEGIN] + (header[ASTC_HEADER_SIZE_X_BEGIN + 1] << 8) + (header[ASTC_HEADER_SIZE_X_BEGIN + 2] << 16);
            var ysize = header[ASTC_HEADER_SIZE_Y_BEGIN] + (header[ASTC_HEADER_SIZE_Y_BEGIN + 1] << 8) + (header[ASTC_HEADER_SIZE_Y_BEGIN + 2] << 16);
            var zsize = header[ASTC_HEADER_SIZE_Z_BEGIN] + (header[ASTC_HEADER_SIZE_Z_BEGIN + 1] << 8) + (header[ASTC_HEADER_SIZE_Z_BEGIN + 2] << 16);
            var astcData = new Uint8Array(buffer, ASTC_HEADER_LENGTH);
            out = {
              _data: astcData,
              _compressed: true,
              width: xsize,
              height: ysize,
              format: format
            };
          } catch (e) {
            err = e;
          }

          onComplete(err, out);
        };

        _proto.parsePlist = function parsePlist(file, options, onComplete) {
          var err = null;
          var result = plistParser.parse(file);

          if (!result) {
            err = new Error('parse failed');
          }

          onComplete(err, result);
        };

        _proto.parseImport = function parseImport(file, options, onComplete) {
          if (!file) {
            onComplete(new Error("The json file of asset " + options.__uuid__ + " is empty or missing"));
            return;
          }

          var result = null;
          var err = null;

          try {
            result = deserialize(file, options);
          } catch (e) {
            err = e;
          }

          onComplete(err, result);
        };

        _proto.init = function init() {
          this._parsing.clear();
        };

        _proto.register = function register(type, handler) {
          if (typeof type === 'object') {
            mixin(this._parsers, type);
          } else {
            this._parsers[type] = handler;
          }
        };

        _proto.parse = function parse(id, file, type, options, onComplete) {
          var _this = this;

          var parsedAsset = parsed.get(id);

          if (parsedAsset) {
            onComplete(null, parsedAsset);
            return;
          }

          var parsing = this._parsing.get(id);

          if (parsing) {
            parsing.push(onComplete);
            return;
          }

          var parseHandler = this._parsers[type];

          if (!parseHandler) {
            onComplete(null, file);
            return;
          }

          this._parsing.add(id, [onComplete]);

          parseHandler(file, options, function (err, data) {
            if (err) {
              files.remove(id);
            } else if (!isScene(data)) {
              parsed.add(id, data);
            }

            var callbacks = _this._parsing.remove(id);

            for (var i = 0, l = callbacks.length; i < l; i++) {
              callbacks[i](err, data);
            }
          });
        };

        return Parser;
      }();
      var parser = new Parser();

      function load(task, done) {
        var firstTask = false;

        if (!task.progress) {
          task.progress = {
            finish: 0,
            total: task.input.length,
            canInvoke: true
          };
          firstTask = true;
        }

        var options = task.options,
            progress = task.progress;
        options.__exclude__ = options.__exclude__ || Object.create(null);
        task.output = [];
        forEach(task.input, function (item, cb) {
          var subTask = Task.create({
            input: item,
            onProgress: task.onProgress,
            options: options,
            progress: progress,
            onComplete: function onComplete(err, result) {
              if (err && !task.isFinish) {
                if (!legacyCC.assetManager.force || firstTask) {
                  {
                    error(err.message, err.stack);
                  }

                  progress.canInvoke = false;
                  done(err);
                } else if (progress.canInvoke) {
                  task.dispatch('progress', ++progress.finish, progress.total, item);
                }
              }

              task.output.push(result);
              subTask.recycle();
              cb(null);
            }
          });
          loadOneAssetPipeline.async(subTask);
        }, function () {
          options.__exclude__ = null;

          if (task.isFinish) {
            clear(task, true);
            task.dispatch('error');
            return;
          }

          gatherAsset(task);
          clear(task, true);
          done();
        });
      }
      var loadOneAssetPipeline = new Pipeline('loadOneAsset', [function fetch(task, done) {
        var item = task.output = task.input;
        var options = item.options,
            isNative = item.isNative,
            uuid = item.uuid,
            file = item.file;
        var reloadAsset = options.reloadAsset;

        if (file || !reloadAsset && !isNative && assets.has(uuid)) {
          done();
          return;
        }

        packManager.load(item, task.options, function (err, data) {
          item.file = data;
          done(err);
        });
      }, function parse(task, done) {
        var item = task.output = task.input;
        var progress = task.progress;
        var exclude = task.options.__exclude__;
        var id = item.id,
            file = item.file,
            options = item.options;

        if (item.isNative) {
          parser.parse(id, file, item.ext, options, function (err, asset) {
            if (err) {
              done(err);
              return;
            }

            item.content = asset;

            if (progress.canInvoke) {
              task.dispatch('progress', ++progress.finish, progress.total, item);
            }

            files.remove(id);
            parsed.remove(id);
            done();
          });
        } else {
          var uuid = item.uuid;

          if (uuid in exclude) {
            var _exclude$uuid = exclude[uuid],
                finish = _exclude$uuid.finish,
                content = _exclude$uuid.content,
                err = _exclude$uuid.err,
                callbacks = _exclude$uuid.callbacks;

            if (progress.canInvoke) {
              task.dispatch('progress', ++progress.finish, progress.total, item);
            }

            if (finish || checkCircleReference(uuid, uuid, exclude)) {
              if (content) {
                content.addRef();
              }

              item.content = content;
              done(err);
            } else {
              callbacks.push({
                done: done,
                item: item
              });
            }
          } else if (!options.reloadAsset && assets.has(uuid)) {
            var asset = assets.get(uuid);

            if (options.__asyncLoadAssets__ || !asset.__asyncLoadAssets__) {
              item.content = asset.addRef();

              if (progress.canInvoke) {
                task.dispatch('progress', ++progress.finish, progress.total, item);
              }

              done();
            } else {
              loadDepends(task, asset, done, false);
            }
          } else {
            options.__uuid__ = uuid;
            parser.parse(id, file, 'import', options, function (err, asset) {
              if (err) {
                done(err);
                return;
              }

              loadDepends(task, asset, done, true);
            });
          }
        }
      }]);

      function loadDepends(task, asset, done, init) {
        var item = task.input,
            progress = task.progress;
        var _ref = item,
            uuid = _ref.uuid,
            id = _ref.id,
            options = _ref.options,
            config = _ref.config;
        var __asyncLoadAssets__ = options.__asyncLoadAssets__,
            cacheAsset = options.cacheAsset;
        var depends = [];

        if (asset.addRef) {
          asset.addRef();
        }

        getDepends(uuid, asset, Object.create(null), depends, false, __asyncLoadAssets__, config);

        if (progress.canInvoke) {
          task.dispatch('progress', ++progress.finish, progress.total += depends.length, item);
        }

        var repeatItem = task.options.__exclude__[uuid] = {
          content: asset,
          finish: false,
          callbacks: [{
            done: done,
            item: item
          }]
        };
        var subTask = Task.create({
          input: depends,
          options: task.options,
          onProgress: task.onProgress,
          onError: Task.prototype.recycle,
          progress: progress,
          onComplete: function onComplete(err) {
            if (asset.decRef) {
              asset.decRef(false);
            }

            asset.__asyncLoadAssets__ = __asyncLoadAssets__;
            repeatItem.finish = true;
            repeatItem.err = err;

            if (!err) {
              var output = Array.isArray(subTask.output) ? subTask.output : [subTask.output];
              var map = Object.create(null);

              for (var _iterator = _createForOfIteratorHelperLoose(output), _step; !(_step = _iterator()).done;) {
                var dependAsset = _step.value;

                if (!dependAsset) {
                  continue;
                }

                map[dependAsset instanceof Asset ? dependAsset._uuid + "@import" : uuid + "@native"] = dependAsset;
              }

              if (!init) {
                if (asset.__nativeDepend__) {
                  setProperties(uuid, asset, map);

                  try {
                    if (asset.onLoaded && !asset.__onLoadedInvoked__ && !asset.__nativeDepend__) {
                      asset.onLoaded();
                      asset.__onLoadedInvoked__ = true;
                    }
                  } catch (e) {
                    error(e.message, e.stack);
                  }
                }
              } else {
                setProperties(uuid, asset, map);

                try {
                  if (asset.onLoaded && !asset.__onLoadedInvoked__ && !asset.__nativeDepend__) {
                    asset.onLoaded();
                    asset.__onLoadedInvoked__ = true;
                  }
                } catch (e) {
                  error(e.message, e.stack);
                }

                files.remove(id);
                parsed.remove(id);
                cache(uuid, asset, cacheAsset);
              }

              subTask.recycle();
            }

            var callbacks = repeatItem.callbacks;

            for (var i = 0, l = callbacks.length; i < l; i++) {
              var cb = callbacks[i];

              if (asset.addRef) {
                asset.addRef();
              }

              cb.item.content = asset;
              cb.done(err);
            }

            callbacks.length = 0;
          }
        });
        pipeline.async(subTask);
      }

      function preprocess(task, done) {
        var options = task.options;
        var subOptions = Object.create(null);
        var leftOptions = Object.create(null);

        for (var op in options) {
          switch (op) {
            case RequestType.PATH:
            case RequestType.UUID:
            case RequestType.DIR:
            case RequestType.SCENE:
            case RequestType.URL:
              break;

            case '__requestType__':
            case '__isNative__':
            case 'ext':
            case 'type':
            case '__nativeName__':
            case 'audioLoadMode':
            case 'bundle':
              subOptions[op] = options[op];
              break;

            case '__exclude__':
            case '__outputAsArray__':
              leftOptions[op] = options[op];
              break;

            default:
              subOptions[op] = options[op];
              leftOptions[op] = options[op];
              break;
          }
        }

        task.options = leftOptions;
        var subTask = Task.create({
          input: task.input,
          options: subOptions
        });
        var err = null;

        try {
          task.output = task.source = transformPipeline.sync(subTask);
        } catch (e) {
          err = e;

          for (var i = 0, l = subTask.output.length; i < l; i++) {
            subTask.output[i].recycle();
          }
        }

        subTask.recycle();
        done(err);
      }

      var RequestItem = function () {
        function RequestItem() {
          this.uuid = '';
          this.url = '';
          this.ext = '.json';
          this.content = null;
          this.file = null;
          this.info = null;
          this.config = null;
          this.isNative = false;
          this.options = Object.create(null);
          this._id = '';
        }

        RequestItem.create = function create() {
          var out;

          if (RequestItem._deadPool.length !== 0) {
            out = RequestItem._deadPool.pop();
          } else {
            out = new RequestItem();
          }

          return out;
        };

        var _proto = RequestItem.prototype;

        _proto.recycle = function recycle() {
          if (RequestItem._deadPool.length === RequestItem.MAX_DEAD_NUM) {
            return;
          }

          this._id = '';
          this.uuid = '';
          this.url = '';
          this.ext = '.json';
          this.content = null;
          this.file = null;
          this.info = null;
          this.config = null;
          this.isNative = false;
          this.options = Object.create(null);

          RequestItem._deadPool.push(this);
        };

        _createClass(RequestItem, [{
          key: "id",
          get: function get() {
            if (!this._id) {
              this._id = this.uuid + "@" + (this.isNative ? 'native' : 'import');
            }

            return this._id;
          }
        }]);

        return RequestItem;
      }();

      RequestItem.MAX_DEAD_NUM = 500;
      RequestItem._deadPool = [];

      var infos = [];
      function parse(task) {
        var options = task.options;
        var input = Array.isArray(task.input) ? task.input : [task.input];
        task.output = [];

        var _loop = function _loop(i) {
          var item = input[i];
          var out = RequestItem.create();
          var config = null;
          var info = null;

          if (typeof item === 'string') {
            item = Object.create(null);
            item[options.__requestType__ || RequestType.UUID] = input[i];
          }

          if (typeof item === 'object') {
            addon(item, options);

            if (item.preset) {
              addon(item, presets[item.preset]);
            }

            for (var key in item) {
              switch (key) {
                case RequestType.UUID:
                  {
                    var _ret2 = function () {
                      var uuid = out.uuid = decodeUuid(item.uuid);

                      if (!item.bundle) {
                        var bundle = bundles.find(function (bundle) {
                          return !!bundle.getAssetInfo(uuid);
                        });
                        item.bundle = bundle && bundle.name;
                      }

                      if (bundles.has(item.bundle)) {
                        config = bundles.get(item.bundle).config;
                        info = config.getAssetInfo(uuid);

                        if (info && info.redirect) {
                          if (!bundles.has(info.redirect)) {
                            throw new Error("Please load bundle " + info.redirect + " first");
                          }

                          config = bundles.get(info.redirect).config;
                          info = config.getAssetInfo(uuid);
                        }

                        out.config = config;
                        out.info = info;
                      }

                      out.ext = item.ext || '.json';
                      return "break";
                    }();

                    if (_ret2 === "break") break;
                  }

                case '__requestType__':
                case 'ext':
                case 'bundle':
                case 'preset':
                case 'type':
                  break;

                case RequestType.DIR:
                  if (bundles.has(item.bundle)) {
                    bundles.get(item.bundle).config.getDirWithPath(item.dir, item.type, infos);

                    for (var _iterator = _createForOfIteratorHelperLoose(infos), _step; !(_step = _iterator()).done;) {
                      var assetInfo = _step.value;
                      input.push({
                        uuid: assetInfo.uuid,
                        __isNative__: false,
                        ext: '.json',
                        bundle: item.bundle
                      });
                    }

                    infos.length = 0;
                  }

                  out.recycle();
                  out = null;
                  break;

                case RequestType.PATH:
                  if (bundles.has(item.bundle)) {
                    config = bundles.get(item.bundle).config;
                    info = config.getInfoWithPath(item.path, item.type);

                    if (info && info.redirect) {
                      if (!bundles.has(info.redirect)) {
                        throw new Error("you need to load bundle " + info.redirect + " first");
                      }

                      config = bundles.get(info.redirect).config;
                      info = config.getAssetInfo(info.uuid);
                    }

                    if (!info) {
                      out.recycle();
                      throw new Error("Bundle " + item.bundle + " doesn't contain " + item.path);
                    }

                    out.config = config;
                    out.uuid = info.uuid;
                    out.info = info;
                  }

                  out.ext = item.ext || '.json';
                  break;

                case RequestType.SCENE:
                  if (!item.bundle) {
                    var bundle = bundles.find(function (bundle) {
                      return !!bundle.getSceneInfo(item.scene);
                    });
                    item.bundle = bundle && bundle.name;
                  }

                  if (bundles.has(item.bundle)) {
                    config = bundles.get(item.bundle).config;
                    info = config.getSceneInfo(item.scene);

                    if (info && info.redirect) {
                      if (!bundles.has(info.redirect)) {
                        throw new Error("you need to load bundle " + info.redirect + " first");
                      }

                      config = bundles.get(info.redirect).config;
                      info = config.getAssetInfo(info.uuid);
                    }

                    if (!info) {
                      out.recycle();
                      throw new Error("Bundle " + config.name + " doesn't contain scene " + item.scene);
                    }

                    out.config = config;
                    out.uuid = info.uuid;
                    out.info = info;
                  }

                  break;

                case '__isNative__':
                  out.isNative = item.__isNative__;
                  break;

                case RequestType.URL:
                  out.url = item.url;
                  out.uuid = item.uuid || item.url;
                  out.ext = item.ext || extname(item.url);
                  out.isNative = item.__isNative__ !== undefined ? item.__isNative__ : true;
                  break;

                default:
                  out.options[key] = item[key];
              }

              if (!out) {
                break;
              }
            }
          }

          if (!out) {
            return "continue";
          }

          task.output.push(out);

          if (!out.uuid && !out.url) {
            throw new Error("Can not parse this input:" + JSON.stringify(item));
          }
        };

        for (var i = 0; i < input.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }

        return null;
      }
      function combine(task) {
        var input = task.output = task.input;

        for (var i = 0; i < input.length; i++) {
          var item = input[i];

          if (item.url) {
            continue;
          }

          var url = '';
          var base = '';
          var config = item.config;

          if (item.isNative) {
            base = config && config.nativeBase ? config.base + config.nativeBase : legacyCC.assetManager.generalNativeBase;
          } else {
            base = config && config.importBase ? config.base + config.importBase : legacyCC.assetManager.generalImportBase;
          }

          var uuid = item.uuid;
          var ver = '';

          if (item.info) {
            if (item.isNative) {
              ver = item.info.nativeVer ? "." + item.info.nativeVer : '';
            } else {
              ver = item.info.ver ? "." + item.info.ver : '';
            }
          }

          if (item.ext === '.ttf') {
            url = base + "/" + uuid.slice(0, 2) + "/" + uuid + ver + "/" + item.options.__nativeName__;
          } else {
            url = base + "/" + uuid.slice(0, 2) + "/" + uuid + ver + item.ext;
          }

          item.url = url;
        }

        return null;
      }

      var AssetManager = exports('A', function () {
        function AssetManager() {
          this.pipeline = pipeline.append(preprocess).append(load);
          this.fetchPipeline = fetchPipeline.append(preprocess).append(fetch);
          this.transformPipeline = transformPipeline.append(parse).append(combine);
          this.bundles = bundles;
          this.assets = assets;
          this.generalImportBase = '';
          this.generalNativeBase = '';
          this.dependUtil = dependUtil;
          this.force = !!EDITOR;
          this.allowImageBitmap = !sys.isMobile;
          this.utils = helper;
          this.downloader = downloader;
          this.parser = parser;
          this.packManager = packManager;
          this.cacheAsset = true;
          this.cacheManager = null;
          this.presets = presets;
          this.factory = factory;
          this.preprocessPipe = preprocess;
          this.fetchPipe = fetch;
          this.loadPipe = load;
          this.references = references;
          this._releaseManager = releaseManager;
          this._files = files;
          this._parsed = parsed;
          this._parsePipeline =  new Pipeline('parse existing json', [this.loadPipe]);
        }

        var _proto = AssetManager.prototype;

        _proto.init = function init(options) {
          if (options === void 0) {
            options = {};
          }

          this._files.clear();

          this._parsed.clear();

          this._releaseManager.init();

          this.assets.clear();
          this.bundles.clear();
          this.packManager.init();
          this.downloader.init(options.server, options.bundleVers, options.remoteBundles);
          this.parser.init();
          this.dependUtil.init();
          var importBase = options.importBase || '';

          if (importBase && importBase.endsWith('/')) {
            importBase = importBase.substr(0, importBase.length - 1);
          }

          var nativeBase = options.nativeBase || '';

          if (nativeBase && nativeBase.endsWith('/')) {
            nativeBase = nativeBase.substr(0, nativeBase.length - 1);
          }

          this.generalImportBase = importBase;
          this.generalNativeBase = nativeBase;
        };

        _proto.getBundle = function getBundle(name) {
          return bundles.get(name) || null;
        };

        _proto.removeBundle = function removeBundle(bundle) {
          bundle._destroy();

          bundles.remove(bundle.name);
        };

        _proto.loadAny = function loadAny(requests, options, onProgress, onComplete) {
          var _parseParameters = parseParameters(options, onProgress, onComplete),
              opts = _parseParameters.options,
              onProg = _parseParameters.onProgress,
              onComp = _parseParameters.onComplete;

          opts.preset = opts.preset || 'default';
          requests = Array.isArray(requests) ? requests.slice() : requests;
          var task = new Task({
            input: requests,
            onProgress: onProg,
            onComplete: asyncify(onComp),
            options: opts
          });
          pipeline.async(task);
        };

        _proto.preloadAny = function preloadAny(requests, options, onProgress, onComplete) {
          var _parseParameters2 = parseParameters(options, onProgress, onComplete),
              opts = _parseParameters2.options,
              onProg = _parseParameters2.onProgress,
              onComp = _parseParameters2.onComplete;

          opts.preset = opts.preset || 'preload';
          requests = Array.isArray(requests) ? requests.slice() : requests;
          var task = new Task({
            input: requests,
            onProgress: onProg,
            onComplete: asyncify(onComp),
            options: opts
          });
          fetchPipeline.async(task);
        };

        _proto.postLoadNative = function postLoadNative(asset, options, onComplete) {
          var _parseParameters3 = parseParameters(options, undefined, onComplete),
              opts = _parseParameters3.options,
              onComp = _parseParameters3.onComplete;

          if (!asset._native || !asset.__nativeDepend__) {
            asyncify(onComp)(null);
            return;
          }

          var depend = dependUtil.getNativeDep(asset._uuid);

          if (!depend) {
            return;
          }

          if (!bundles.has(depend.bundle)) {
            var bundle = bundles.find(function (b) {
              return !!b.getAssetInfo(asset._uuid);
            });

            if (bundle) {
              depend.bundle = bundle.name;
            }
          }

          this.loadAny(depend, opts, function (err, _native) {
            if (!err) {
              if (asset.isValid && asset.__nativeDepend__) {
                asset._nativeAsset = _native;
                asset.__nativeDepend__ = false;
              }
            } else {
              error(err.message, err.stack);
            }

            if (onComp) {
              onComp(err);
            }
          });
        };

        _proto.loadRemote = function loadRemote(url, options, onComplete) {
          var _parseParameters4 = parseParameters(options, undefined, onComplete),
              opts = _parseParameters4.options,
              onComp = _parseParameters4.onComplete;

          if (!opts.reloadAsset && this.assets.has(url)) {
            asyncify(onComp)(null, this.assets.get(url));
            return;
          }

          opts.__isNative__ = true;
          opts.preset = opts.preset || 'remote';
          this.loadAny({
            url: url
          }, opts, null, function (err, data) {
            if (err) {
              error(err.message, err.stack);

              if (onComp) {
                onComp(err, data);
              }
            } else {
              factory.create(url, data, opts.ext || extname(url), opts, function (p1, p2) {
                if (onComp) {
                  onComp(p1, p2);
                }
              });
            }
          });
        };

        _proto.loadBundle = function loadBundle(nameOrUrl, options, onComplete) {
          var _parseParameters5 = parseParameters(options, undefined, onComplete),
              opts = _parseParameters5.options,
              onComp = _parseParameters5.onComplete;

          var bundleName = basename(nameOrUrl);

          if (this.bundles.has(bundleName)) {
            asyncify(onComp)(null, this.getBundle(bundleName));
            return;
          }

          opts.preset = opts.preset || 'bundle';
          opts.ext = 'bundle';
          opts.__isNative__ = true;
          this.loadAny({
            url: nameOrUrl
          }, opts, null, function (err, data) {
            if (err) {
              error(err.message, err.stack);

              if (onComp) {
                onComp(err, data);
              }
            } else {
              factory.create(nameOrUrl, data, 'bundle', opts, function (p1, p2) {
                if (onComp) {
                  onComp(p1, p2);
                }
              });
            }
          });
        };

        _proto.releaseAsset = function releaseAsset(asset) {
          releaseManager.tryRelease(asset, true);
        };

        _proto.releaseUnusedAssets = function releaseUnusedAssets() {
          assets.forEach(function (asset) {
            releaseManager.tryRelease(asset);
          });
        };

        _proto.releaseAll = function releaseAll() {
          assets.forEach(function (asset) {
            releaseManager.tryRelease(asset, true);
          });
        };

        _proto.loadWithJson = function loadWithJson(json, options, onProgress, onComplete) {

          var _parseParameters6 = parseParameters(options, onProgress, onComplete),
              opts = _parseParameters6.options,
              onProg = _parseParameters6.onProgress,
              onComp = _parseParameters6.onComplete;

          var item = RequestItem.create();
          item.isNative = false;
          item.uuid = opts.assetId || "" + new Date().getTime() + Math.random();
          item.file = json;
          item.ext = '.json';
          var task = new Task({
            input: [item],
            onProgress: onProg,
            options: opts,
            onComplete: asyncify(function (err, data) {
              if (!err) {
                if (!opts.assetId) {
                  data._uuid = '';
                }
              }

              if (onComp) {
                onComp(err, data);
              }
            })
          });

          this._parsePipeline.async(task);
        };

        _createClass(AssetManager, [{
          key: "main",
          get: function get() {
            return bundles.get(BuiltinBundleName.MAIN) || null;
          }
        }, {
          key: "resources",
          get: function get() {
            return bundles.get(BuiltinBundleName.RESOURCES) || null;
          }
        }]);

        return AssetManager;
      }());
      AssetManager.Pipeline = Pipeline;
      AssetManager.Task = Task;
      AssetManager.Cache = Cache;
      AssetManager.RequestItem = RequestItem;
      AssetManager.Bundle = Bundle;
      AssetManager.BuiltinBundleName = BuiltinBundleName;
      var assetManager = exports('h', legacyCC.assetManager = new AssetManager());
      legacyCC.AssetManager = AssetManager;

      var ImageFmts = ['.png', '.jpg', '.bmp', '.jpeg', '.gif', '.ico', '.tiff', '.webp', '.image', '.pvr', '.pkm', '.astc'];
      var AudioFmts = ['.mp3', '.ogg', '.wav', '.m4a'];

      function GetTrue() {
        return true;
      }

      var md5Pipe = {
        transformURL: function transformURL(url) {
          var uuid = getUuidFromURL(url);

          if (!uuid) {
            return url;
          }

          var bundle = bundles.find(function (b) {
            return !!b.getAssetInfo(uuid);
          });

          if (!bundle) {
            return url;
          }

          var hashValue = '';
          var info = bundle.getAssetInfo(uuid);

          if (url.startsWith(bundle.base + bundle.config.nativeBase)) {
            hashValue = info.nativeVer || '';
          } else {
            hashValue = info.ver || '';
          }

          if (!hashValue || url.indexOf(hashValue) !== -1) {
            return url;
          }

          var hashPatchInFolder = false;

          if (extname(url) === '.ttf') {
            hashPatchInFolder = true;
          }

          if (hashPatchInFolder) {
            var dirname$1 = dirname(url);
            var basename$1 = basename(url);
            url = dirname$1 + "." + hashValue + "/" + basename$1;
          } else {
            url = url.replace(/.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-@]{8,}).*/, function (match, uuid) {
              return match + "." + hashValue;
            });
          }

          return url;
        }
      };
      var CCLoader = exports('i', function () {
        function CCLoader() {
          this._autoReleaseSetting = Object.create(null);
          this._parseLoadResArgs = parseLoadResArgs;
        }

        var _proto = CCLoader.prototype;

        _proto.load = function load(res, progressCallback, completeCallback) {
          if (completeCallback === undefined) {
            if (progressCallback !== undefined) {
              completeCallback = progressCallback;
              progressCallback = null;
            }
          }

          var requests = Array.isArray(res) ? res : [res];

          for (var i = 0; i < requests.length; i++) {
            var _item = requests[i];

            if (typeof _item === 'string') {
              requests[i] = {
                url: _item,
                __isNative__: true
              };
            } else {
              if (_item.type) {
                _item.ext = "." + _item.type;
                _item.type = undefined;
              }

              if (_item.url) {
                _item.__isNative__ = true;
              }
            }
          }

          var images = [];
          var audios = [];
          assetManager.loadAny(requests, null, function (finish, total, item) {
            if (item.content) {
              if (ImageFmts.includes(item.ext)) {
                images.push(item.content);
              } else if (AudioFmts.includes(item.ext)) {
                audios.push(item.content);
              }
            }

            if (progressCallback) {
              progressCallback(finish, total, item);
            }
          }, function (err, _native) {
            var out = null;

            if (!err) {
              _native = Array.isArray(_native) ? _native : [_native];

              var _loop = function _loop(_i) {
                var item = _native[_i];

                if (!(item instanceof Asset)) {
                  var _asset = item;
                  var _url = requests[_i].url;

                  if (images.includes(_asset)) {
                    factory.create(_url, item, '.png', {}, function (err, image) {
                      _asset = _native[_i] = image;
                    });
                  } else if (audios.includes(_asset)) {
                    factory.create(_url, item, '.mp3', {}, function (err, audio) {
                      _asset = _native[_i] = audio;
                    });
                  }

                  assets.add(_url, _asset);
                }
              };

              for (var _i = 0; _i < _native.length; _i++) {
                _loop(_i);
              }

              if (_native.length > 1) {
                var map = Object.create(null);

                _native.forEach(function (asset) {
                  map[asset._uuid] = asset;
                });

                out = {
                  isCompleted: GetTrue,
                  _map: map
                };
              } else {
                out = _native[0];
              }
            }

            if (completeCallback) {
              completeCallback(err, out);
            }
          });
        };

        _proto.getXMLHttpRequest = function getXMLHttpRequest() {
          return new XMLHttpRequest();
        };

        _proto.getItem = function getItem(id) {
          return assetManager.assets.has(id) ? {
            content: assetManager.assets.get(id)
          } : null;
        };

        _proto.loadRes = function loadRes(url, type, progressCallback, completeCallback) {
          var _this$_parseLoadResAr = this._parseLoadResArgs(type, progressCallback, completeCallback),
              _type = _this$_parseLoadResAr.type,
              onProgress = _this$_parseLoadResAr.onProgress,
              onComplete = _this$_parseLoadResAr.onComplete;

          var extname$1 = extname(url);

          if (extname$1 && !resources.getInfoWithPath(url, _type)) {
            url = url.slice(0, -extname$1.length);
          }

          resources.load(url, _type, onProgress, onComplete);
        };

        _proto.loadResArray = function loadResArray(urls, type, progressCallback, completeCallback) {
          var _this$_parseLoadResAr2 = this._parseLoadResArgs(type, progressCallback, completeCallback),
              _type = _this$_parseLoadResAr2.type,
              onProgress = _this$_parseLoadResAr2.onProgress,
              onComplete = _this$_parseLoadResAr2.onComplete;

          urls.forEach(function (url, i) {
            var extname$1 = extname(url);

            if (extname$1 && !resources.getInfoWithPath(url, _type)) {
              urls[i] = url.slice(0, -extname$1.length);
            }
          });
          resources.load(urls, _type, onProgress, onComplete);
        };

        _proto.loadResDir = function loadResDir(url, type, progressCallback, completeCallback) {
          var _this$_parseLoadResAr3 = this._parseLoadResArgs(type, progressCallback, completeCallback),
              _type = _this$_parseLoadResAr3.type,
              onProgress = _this$_parseLoadResAr3.onProgress,
              onComplete = _this$_parseLoadResAr3.onComplete;

          resources.loadDir(url, _type, onProgress, function (err, out) {
            var urls = [];

            if (!err) {
              var infos = resources.getDirWithPath(url, _type);
              urls = infos.map(function (info) {
                return info.path;
              });
            }

            if (onComplete) {
              onComplete(err, out, urls);
            }
          });
        };

        _proto.getRes = function getRes(url, type) {
          return assets.has(url) ? assets.get(url) : resources.get(url, type);
        };

        _proto.getResCount = function getResCount() {
          return assets.count;
        };

        _proto.getDependsRecursively = function getDependsRecursively(owner) {
          if (!owner) {
            return [];
          }

          var uuid = typeof owner === 'string' ? owner : owner._uuid;
          return dependUtil.getDepsRecursively(uuid).concat([uuid]);
        };

        _proto.addDownloadHandlers = function addDownloadHandlers(extMap) {
          var handler = Object.create(null);

          var _loop2 = function _loop2(_type2) {
            var func = extMap[_type2];

            handler["." + _type2] = function (url, options, onComplete) {
              func({
                url: url
              }, onComplete);
            };
          };

          for (var _type2 in extMap) {
            _loop2(_type2);
          }

          downloader.register(handler);
        };

        _proto.addLoadHandlers = function addLoadHandlers(extMap) {
          var handler = Object.create(null);

          var _loop3 = function _loop3(_type3) {
            var func = extMap[_type3];

            handler["." + _type3] = function (file, options, onComplete) {
              func({
                content: file
              }, onComplete);
            };
          };

          for (var _type3 in extMap) {
            _loop3(_type3);
          }

          parser.register(handler);
        };

        _proto.release = function release(asset) {
          if (Array.isArray(asset)) {
            for (var i = 0; i < asset.length; i++) {
              var key = asset[i];

              if (typeof key === 'string') {
                key = assets.get(key);
              }

              assetManager.releaseAsset(key);
            }
          } else if (asset) {
            if (typeof asset === 'string') {
              asset = assets.get(asset);
            }

            assetManager.releaseAsset(asset);
          }
        };

        _proto.releaseAsset = function releaseAsset(asset) {
          assetManager.releaseAsset(asset);
        };

        _proto.releaseRes = function releaseRes(res, type) {
          resources.release(res, type);
        };

        _proto.releaseAll = function releaseAll() {
          assetManager.releaseAll();
          assets.clear();
        };

        _proto.removeItem = function removeItem(id) {
          return !!assets.remove(id);
        };

        _proto.setAutoRelease = function setAutoRelease(asset, autoRelease) {
          if (typeof asset === 'object') {
            asset = asset._uuid;
          }

          this._autoReleaseSetting[asset] = !!autoRelease;
        };

        _proto.setAutoReleaseRecursively = function setAutoReleaseRecursively(asset, autoRelease) {
          if (typeof asset === 'object') {
            asset = asset._uuid;
          }

          autoRelease = !!autoRelease;
          this._autoReleaseSetting[asset] = autoRelease;
          var depends = dependUtil.getDepsRecursively(asset);

          for (var i = 0; i < depends.length; i++) {
            this._autoReleaseSetting[depends[i]] = autoRelease;
          }
        };

        _proto.isAutoRelease = function isAutoRelease(asset) {
          if (typeof asset === 'object') {
            asset = asset._uuid;
          }

          return !!this._autoReleaseSetting[asset];
        };

        _createClass(CCLoader, [{
          key: "onProgress",
          set: function set(val) {
            setDefaultProgressCallback(val);
          }
        }, {
          key: "_cache",
          get: function get() {
            return assets._map;
          }
        }, {
          key: "md5Pipe",
          get: function get() {
            return md5Pipe;
          }
        }, {
          key: "downloader",
          get: function get() {
            return downloader;
          }
        }, {
          key: "loader",
          get: function get() {
            return assetManager.parser;
          }
        }]);

        return CCLoader;
      }());
      var loader = exports('l', new CCLoader());
      var AssetLibrary = exports('j', {
        init: function init(options) {
          options.importBase = options.libraryPath;
          options.nativeBase =  options.libraryPath;
          assetManager.init(options);

          if (options.rawAssets) {
            resources.init({
              base: '',
              deps: [],
              scenes: {},
              redirect: [],
              debug: true,
              packs: {},
              types: [],
              versions: {
                "import": [],
                "native": []
              },
              name: BuiltinBundleName.RESOURCES,
              importBase: options.importBase,
              nativeBase: options.nativeBase,
              paths: options.rawAssets.assets,
              uuids: Object.keys(options.rawAssets.assets)
            });
          }
        },
        loadAsset: function loadAsset(uuid, callback, options) {
          assetManager.loadAny(uuid, callback);
        }
      });
      var url = exports('u', {});
      replaceProperty(url, 'url', [{
        name: 'normalize',
        target: assetManager.utils,
        targetName: 'assetManager.utils',
        newName: 'normalize'
      }, {
        name: 'raw',
        targetName: 'Asset.prototype',
        newName: 'nativeUrl',
        customFunction: function customFunction(url) {
          if (url.startsWith('resources/')) {
            return transform({
              path: changeExtname(url.substr(10)),
              bundle: BuiltinBundleName.RESOURCES,
              __isNative__: true,
              ext: extname(url)
            });
          }

          return '';
        }
      }]);
      removeProperty(AssetLibrary, 'AssetLibrary', [{
        name: 'getLibUrlNoExt',
        suggest: 'AssetLibrary.getLibUrlNoExt was removed, if you want to transform url, please use cc.assetManager.utils.getUrlWithUuid instead'
      }, {
        name: 'queryAssetInfo',
        suggest: 'AssetLibrary.queryAssetInfo was removed'
      }]);
      removeProperty(loader, 'loader', [{
        name: 'releaseResDir',
        suggest: 'loader.releaseResDir was removed, please use assetManager.releaseAsset instead'
      }, {
        name: 'flowInDeps',
        suggest: 'loader.flowInDeps was removed'
      }, {
        name: 'assetLoader',
        suggest: 'cc.loader.assetLoader was removed, assetLoader and md5Pipe were merged into cc.assetManager.transformPipeline'
      }]);
      replaceProperty(legacyCC, 'cc', [{
        name: 'loader',
        newName: 'assetManager',
        logTimes: 1,
        customGetter: function customGetter() {
          return loader;
        }
      }, {
        name: 'AssetLibrary',
        newName: 'assetManager',
        logTimes: 1,
        customGetter: function customGetter() {
          return AssetLibrary;
        }
      }, {
        name: 'Pipeline',
        target: AssetManager,
        targetName: 'AssetManager',
        newName: 'Pipeline',
        logTimes: 1
      }, {
        name: 'url',
        targetName: 'assetManager',
        newName: 'utils',
        logTimes: 1,
        customGetter: function customGetter() {
          return url;
        }
      }]);
      removeProperty(legacyCC, 'cc', [{
        name: 'LoadingItems',
        suggest: getError(1400, 'cc.LoadingItems', 'cc.AssetManager.Task')
      }]);
      replaceProperty(macro, 'macro', [{
        name: 'DOWNLOAD_MAX_CONCURRENT',
        target: downloader,
        targetName: 'assetManager.downloader',
        newName: 'maxConcurrency'
      }]);
      replaceProperty(director, 'director', [{
        name: '_getSceneUuid',
        targetName: 'assetManager.main',
        newName: 'getSceneInfo',
        customFunction: function customFunction(sceneName) {
          if (assetManager.main) {
            var _assetManager$main$ge;

            return (_assetManager$main$ge = assetManager.main.getSceneInfo(sceneName)) === null || _assetManager$main$ge === void 0 ? void 0 : _assetManager$main$ge.uuid;
          }

          return '';
        }
      }]);
      replaceProperty(game, 'game', [{
        name: '_sceneInfos',
        targetName: 'assetManager.main',
        newName: 'getSceneInfo',
        customGetter: function customGetter() {
          var scenes = [];

          if (assetManager.main) {
            assetManager.main.config.scenes.forEach(function (val) {
              scenes.push(val);
            });
          }

          return scenes;
        }
      }]);
      var _autoRelease = releaseManager._autoRelease;

      releaseManager._autoRelease = function (oldScene, newScene, persistNodes) {
        _autoRelease.call(releaseManager, oldScene, newScene, persistNodes);

        var releaseSettings = loader._autoReleaseSetting;
        var keys = Object.keys(releaseSettings);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (releaseSettings[key] === true) {
            var _asset2 = assets.get(key);

            if (_asset2) {
              releaseManager.tryRelease(_asset2);
            }
          }
        }
      };

      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;
      var EventHandler = exports('E', (_dec = ccclass('cc.ClickEvent'), _dec2 = type(legacyCC.Node), _dec(_class = (_class2 = (_temp = function () {
        function EventHandler() {
          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "component", _descriptor2, this);

          _initializerDefineProperty(this, "_componentId", _descriptor3, this);

          _initializerDefineProperty(this, "handler", _descriptor4, this);

          _initializerDefineProperty(this, "customEventData", _descriptor5, this);
        }

        EventHandler.emitEvents = function emitEvents(events) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var i = 0, l = events.length; i < l; i++) {
            var event = events[i];

            if (!(event instanceof EventHandler)) {
              continue;
            }

            event.emit(args);
          }
        };

        var _proto = EventHandler.prototype;

        _proto.emit = function emit(params) {
          var target = this.target;

          if (!legacyCC.isValid(target)) {
            return;
          }

          this._genCompIdIfNeeded();

          var compType = legacyCC.js._getClassById(this._componentId);

          var comp = target.getComponent(compType);

          if (!legacyCC.isValid(comp)) {
            return;
          }

          var handler = comp[this.handler];

          if (typeof handler !== 'function') {
            return;
          }

          if (this.customEventData != null && this.customEventData !== '') {
            params = params.slice();
            params.push(this.customEventData);
          }

          handler.apply(comp, params);
        };

        _proto._compName2Id = function _compName2Id(compName) {
          var comp = legacyCC.js.getClassByName(compName);
          return legacyCC.js._getClassId(comp);
        };

        _proto._compId2Name = function _compId2Name(compId) {
          var comp = legacyCC.js._getClassById(compId);

          return legacyCC.js.getClassName(comp);
        };

        _proto._genCompIdIfNeeded = function _genCompIdIfNeeded() {
          if (!this._componentId) {
            this._componentName = this.component;
            this.component = '';
          }
        };

        _createClass(EventHandler, [{
          key: "_componentName",
          get: function get() {
            this._genCompIdIfNeeded();

            return this._compId2Name(this._componentId);
          },
          set: function set(value) {
            this._componentId = this._compName2Id(value);
          }
        }]);

        return EventHandler;
      }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "component", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_componentId", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "handler", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "customEventData", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));
      legacyCC.Component.EventHandler = EventHandler;

      replaceProperty(Camera$1, 'Camera', [{
        name: 'CameraClearFlag',
        newName: 'ClearFlag'
      }]);
      replaceProperty(Camera$1.prototype, 'Camera.prototype', [{
        name: 'color',
        newName: 'clearColor'
      }, {
        name: 'depth',
        newName: 'clearDepth'
      }, {
        name: 'stencil',
        newName: 'clearStencil'
      }]);
      legacyCC.CameraComponent = Camera$1;
      js.setClassAlias(Camera$1, 'cc.CameraComponent');

      var _dec$1, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _temp$1;
      var UniformProxyFactory = exports('U', (_dec$1 = ccclass('cc.animation.UniformProxyFactory'), _dec$1(_class$1 = (_class2$1 = (_temp$1 = function () {
        function UniformProxyFactory(uniformName, passIndex) {
          _initializerDefineProperty(this, "passIndex", _descriptor$1, this);

          _initializerDefineProperty(this, "uniformName", _descriptor2$1, this);

          _initializerDefineProperty(this, "channelIndex", _descriptor3$1, this);

          this.passIndex = passIndex || 0;
          this.uniformName = uniformName || '';
        }

        var _proto = UniformProxyFactory.prototype;

        _proto.forTarget = function forTarget(target) {
          var pass = target.passes[this.passIndex];
          var handle = pass.getHandle(this.uniformName);

          if (!handle) {
            throw new Error("Material \"" + target.name + "\" has no uniform \"" + this.uniformName + "\"");
          }

          var propertyType = Pass.getPropertyTypeFromHandle(handle);

          if (propertyType === PropertyType.UBO) {
            var realHandle = this.channelIndex === undefined ? handle : pass.getHandle(this.uniformName, this.channelIndex, Type.FLOAT);

            if (!realHandle) {
              throw new Error("Uniform \"" + this.uniformName + " (in material " + target.name + ") has no channel " + this.channelIndex + "\"");
            }

            if (isUniformArray(pass, this.uniformName)) {
              return {
                set: function set(value) {
                  pass.setUniformArray(realHandle, value);
                }
              };
            }

            return {
              set: function set(value) {
                pass.setUniform(realHandle, value);
              }
            };
          }

          if (propertyType === PropertyType.SAMPLER) {
            var binding = Pass.getBindingFromHandle(handle);
            var prop = pass.properties[this.uniformName];
            var texName = prop && prop.value ? prop.value + "-texture" : getDefaultFromType(prop.type);
            var dftTex = builtinResMgr.get(texName);

            if (!dftTex) {
              warn("Illegal texture default value: " + texName + ".");
              dftTex = builtinResMgr.get('default-texture');
            }

            return {
              set: function set(value) {
                if (!value) {
                  value = dftTex;
                }

                var texture = value.getGFXTexture();

                if (!texture || !texture.width || !texture.height) {
                  return;
                }

                pass.bindTexture(binding, texture);

                if (value instanceof TextureBase) {
                  pass.bindSampler(binding, samplerLib.getSampler(legacyCC.game._gfxDevice, value.getSamplerHash()));
                }
              }
            };
          }

          throw new Error("Animations are not available for uniforms with property type " + propertyType + ".");
        };

        return UniformProxyFactory;
      }(), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "passIndex", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "uniformName", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "channelIndex", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      })), _class2$1)) || _class$1));

      function isUniformArray(pass, name) {
        for (var _iterator = _createForOfIteratorHelperLoose(pass.shaderInfo.blocks), _step; !(_step = _iterator()).done;) {
          var block = _step.value;

          for (var _iterator2 = _createForOfIteratorHelperLoose(block.members), _step2; !(_step2 = _iterator2()).done;) {
            var uniform = _step2.value;

            if (uniform.name === name) {
              return uniform.count > 1;
            }
          }
        }

        return false;
      }

      var _dec$2, _class$2, _class2$2, _descriptor$2, _temp$2, _dec2$1, _class4;
      var MorphWeightsValueProxy = exports('M', (_dec$2 = ccclass('cc.animation.MorphWeightsValueProxy'), _dec$2(_class$2 = (_class2$2 = (_temp$2 = function () {
        function MorphWeightsValueProxy() {
          _initializerDefineProperty(this, "subMeshIndex", _descriptor$2, this);
        }

        var _proto = MorphWeightsValueProxy.prototype;

        _proto.forTarget = function forTarget(target) {
          var _this = this;

          return {
            set: function set(value) {
              target.setWeights(value, _this.subMeshIndex);
            }
          };
        };

        return MorphWeightsValueProxy;
      }(), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "subMeshIndex", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2$2)) || _class$2));
      var MorphWeightsAllValueProxy = exports('a', (_dec2$1 = ccclass('cc.animation.MorphWeightsAllValueProxy'), _dec2$1(_class4 = function () {
        function MorphWeightsAllValueProxy() {}

        var _proto2 = MorphWeightsAllValueProxy.prototype;

        _proto2.forTarget = function forTarget(target) {
          return {
            set: function set(value) {
              var _target$mesh$struct$p, _target$mesh;

              var nSubMeshes = (_target$mesh$struct$p = (_target$mesh = target.mesh) === null || _target$mesh === void 0 ? void 0 : _target$mesh.struct.primitives.length) !== null && _target$mesh$struct$p !== void 0 ? _target$mesh$struct$p : 0;

              for (var iSubMesh = 0; iSubMesh < nSubMeshes; ++iSubMesh) {
                target.setWeights(value, iSubMesh);
              }
            }
          };
        };

        return MorphWeightsAllValueProxy;
      }()) || _class4));

      var _dec2$2, _class4$1, _class5, _descriptor4$1, _descriptor5$1, _descriptor6, _temp2;

      function makeCubicSplineValueConstructor(name, constructorX, scaleFx, scaleAndAdd) {
        var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

        var tempValue = new constructorX();
        var m0 = new constructorX();
        var m1 = new constructorX();
        var CubicSplineValueClass = (_dec = ccclass(name), _dec(_class = (_class2 = (_temp = function () {
          function CubicSplineValueClass(dataPoint, inTangent, outTangent) {
            _initializerDefineProperty(this, "dataPoint", _descriptor, this);

            _initializerDefineProperty(this, "inTangent", _descriptor2, this);

            _initializerDefineProperty(this, "outTangent", _descriptor3, this);

            this.dataPoint = dataPoint || new constructorX();
            this.inTangent = inTangent || new constructorX();
            this.outTangent = outTangent || new constructorX();
          }

          var _proto = CubicSplineValueClass.prototype;

          _proto.lerp = function lerp(to, t, dt) {
            var p0 = this.dataPoint;
            var p1 = to.dataPoint;
            m0 = scaleFx(m0, this.inTangent, dt);
            m1 = scaleFx(m1, to.outTangent, dt);
            var t_3 = t * t * t;
            var t_2 = t * t;
            var f_0 = 2 * t_3 - 3 * t_2 + 1;
            var f_1 = t_3 - 2 * t_2 + t;
            var f_2 = -2 * t_3 + 3 * t_2;
            var f_3 = t_3 - t_2;
            tempValue = scaleFx(tempValue, p0, f_0);
            tempValue = scaleAndAdd(tempValue, tempValue, m0, f_1);
            tempValue = scaleAndAdd(tempValue, tempValue, p1, f_2);
            tempValue = scaleAndAdd(tempValue, tempValue, m1, f_3);
            return tempValue;
          };

          _proto.getNoLerp = function getNoLerp() {
            return this.dataPoint;
          };

          return CubicSplineValueClass;
        }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataPoint", [serializable], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new constructorX();
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inTangent", [serializable], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new constructorX();
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "outTangent", [serializable], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new constructorX();
          }
        })), _class2)) || _class);

        if (constructorX === Quat) {
          var _lerp = CubicSplineValueClass.prototype.lerp;

          CubicSplineValueClass.prototype.lerp = function (to, t, dt) {
            var result = _lerp.call(this, to, t, dt);

            Quat.normalize(result, result);
            return result;
          };
        }

        return CubicSplineValueClass;
      }

      var CubicSplineVec2Value = exports('C', makeCubicSplineValueConstructor('cc.CubicSplineVec2Value', Vec2, Vec2.multiplyScalar, Vec2.scaleAndAdd));
      legacyCC.CubicSplineVec2Value = CubicSplineVec2Value;
      var CubicSplineVec3Value = exports('b', makeCubicSplineValueConstructor('cc.CubicSplineVec3Value', Vec3, Vec3.multiplyScalar, Vec3.scaleAndAdd));
      legacyCC.CubicSplineVec3Value = CubicSplineVec3Value;
      var CubicSplineVec4Value = exports('c', makeCubicSplineValueConstructor('cc.CubicSplineVec4Value', Vec4, Vec4.multiplyScalar, Vec4.scaleAndAdd));
      legacyCC.CubicSplineVec4Value = CubicSplineVec4Value;
      var CubicSplineQuatValue = exports('d', makeCubicSplineValueConstructor('cc.CubicSplineQuatValue', Quat, Quat.multiplyScalar, Quat.scaleAndAdd));
      legacyCC.CubicSplineQuatValue = CubicSplineQuatValue;
      var CubicSplineNumberValue = exports('e', (_dec2$2 = ccclass('cc.CubicSplineNumberValue'), _dec2$2(_class4$1 = (_class5 = (_temp2 = function () {
        function CubicSplineNumberValue(dataPoint, inTangent, outTangent) {
          _initializerDefineProperty(this, "dataPoint", _descriptor4$1, this);

          _initializerDefineProperty(this, "inTangent", _descriptor5$1, this);

          _initializerDefineProperty(this, "outTangent", _descriptor6, this);

          this.dataPoint = dataPoint;
          this.inTangent = inTangent;
          this.outTangent = outTangent;
        }

        var _proto2 = CubicSplineNumberValue.prototype;

        _proto2.lerp = function lerp(to, t, dt) {
          var p0 = this.dataPoint;
          var p1 = to.dataPoint;
          var m0 = this.outTangent * dt;
          var m1 = to.inTangent * dt;
          var t_3 = t * t * t;
          var t_2 = t * t;
          var f_0 = 2 * t_3 - 3 * t_2 + 1;
          var f_1 = t_3 - 2 * t_2 + t;
          var f_2 = -2 * t_3 + 3 * t_2;
          var f_3 = t_3 - t_2;
          return p0 * f_0 + m0 * f_1 + p1 * f_2 + m1 * f_3;
        };

        _proto2.getNoLerp = function getNoLerp() {
          return this.dataPoint;
        };

        return CubicSplineNumberValue;
      }(), _temp2), (_descriptor4$1 = _applyDecoratedDescriptor(_class5.prototype, "dataPoint", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class5.prototype, "inTangent", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "outTangent", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class5)) || _class4$1));
      legacyCC.CubicSplineNumberValue = CubicSplineNumberValue;

      replaceProperty(Animation.prototype, 'Animation', [{
        name: 'getAnimationState',
        newName: 'getState'
      }, {
        name: 'addClip',
        newName: 'createState'
      }, {
        name: 'removeClip',
        newName: 'removeState',
        customFunction: function customFunction() {
          var arg0 = arguments.length <= 0 ? undefined : arguments[0];
          return Animation.prototype.removeState.call(this, arg0.name);
        }
      }]);
      legacyCC.AnimationComponent = Animation;
      js.setClassAlias(Animation, 'cc.AnimationComponent');

      var _class$3, _class2$3, _temp$3;
      var AnimationManager = exports('t', ccclass(_class$3 = (_temp$3 = _class2$3 = function (_System) {
        _inheritsLoose(AnimationManager, _System);

        function AnimationManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _System.call.apply(_System, [this].concat(args)) || this;
          _this._anims = new MutableForwardIterator([]);
          _this._delayEvents = [];
          _this._blendStateBuffer = new BlendStateBuffer();
          _this._crossFades = [];
          _this._sockets = [];
          return _this;
        }

        var _proto = AnimationManager.prototype;

        _proto.addCrossFade = function addCrossFade(crossFade) {
          this._crossFades.push(crossFade);
        };

        _proto.removeCrossFade = function removeCrossFade(crossFade) {
          remove(this._crossFades, crossFade);
        };

        _proto.update = function update(dt) {
          var _delayEvents = this._delayEvents,
              _crossFades = this._crossFades,
              _sockets = this._sockets;

          for (var i = 0, l = _crossFades.length; i < l; i++) {
            _crossFades[i].update(dt);
          }

          var iterator = this._anims;
          var array = iterator.array;

          for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
            var anim = array[iterator.i];

            if (!anim.isMotionless) {
              anim.update(dt);
            }
          }

          this._blendStateBuffer.apply();

          var stamp = legacyCC.director.getTotalFrames();

          for (var _i = 0, _l = _sockets.length; _i < _l; _i++) {
            var _sockets$_i = _sockets[_i],
                target = _sockets$_i.target,
                transform = _sockets$_i.transform;
            target.matrix = getWorldMatrix(transform, stamp);
          }

          for (var _i2 = 0, _l2 = _delayEvents.length; _i2 < _l2; _i2++) {
            var event = _delayEvents[_i2];
            event.fn.apply(event.thisArg, event.args);
          }

          _delayEvents.length = 0;
        };

        _proto.destruct = function destruct() {};

        _proto.addAnimation = function addAnimation(anim) {
          var index = this._anims.array.indexOf(anim);

          if (index === -1) {
            this._anims.push(anim);
          }
        };

        _proto.removeAnimation = function removeAnimation(anim) {
          var index = this._anims.array.indexOf(anim);

          if (index >= 0) {
            this._anims.fastRemoveAt(index);
          } else {
            errorID(3907);
          }
        };

        _proto.pushDelayEvent = function pushDelayEvent(fn, thisArg, args) {
          this._delayEvents.push({
            fn: fn,
            thisArg: thisArg,
            args: args
          });
        };

        _proto.addSockets = function addSockets(root, sockets) {
          var _this2 = this;

          var _loop = function _loop(i) {
            var socket = sockets[i];

            if (_this2._sockets.find(function (s) {
              return s.target === socket.target;
            })) {
              return "continue";
            }

            var targetNode = root.getChildByPath(socket.path);
            var transform = socket.target && targetNode && getTransform(targetNode, root);

            if (transform) {
              _this2._sockets.push({
                target: socket.target,
                transform: transform
              });
            }
          };

          for (var i = 0; i < sockets.length; ++i) {
            var _ret = _loop(i);

            if (_ret === "continue") continue;
          }
        };

        _proto.removeSockets = function removeSockets(root, sockets) {
          for (var i = 0; i < sockets.length; ++i) {
            var socketToRemove = sockets[i];

            for (var j = 0; j < this._sockets.length; ++j) {
              var socket = this._sockets[j];

              if (socket.target === socketToRemove.target) {
                deleteTransform(socket.transform.node);
                this._sockets[j] = this._sockets[this._sockets.length - 1];
                this._sockets.length--;
                break;
              }
            }
          }
        };

        _createClass(AnimationManager, [{
          key: "blendState",
          get: function get() {
            return this._blendStateBuffer;
          }
        }]);

        return AnimationManager;
      }(System), _class2$3.ID = 'animation', _temp$3)) || _class$3);
      director.on(Director.EVENT_INIT, function () {
        var animationManager = new AnimationManager();
        director.registerSystem(AnimationManager.ID, animationManager, Scheduler.PRIORITY_SYSTEM);
      });
      legacyCC.AnimationManager = AnimationManager;

      var _dec$3, _class$4, _dec2$3, _class2$4, _dec3, _class3, _dec4, _class4$2;
      legacyCC.easing = easing;
      var HierachyModifier = exports('H', (_dec$3 = ccclass('cc.HierachyModifier'), _dec$3(_class$4 = function (_HierarchyPath) {
        _inheritsLoose(HierachyModifier, _HierarchyPath);

        function HierachyModifier() {
          return _HierarchyPath.apply(this, arguments) || this;
        }

        return HierachyModifier;
      }(HierarchyPath)) || _class$4));
      legacyCC.HierachyModifier = HierachyModifier;
      var ComponentModifier = exports('n', (_dec2$3 = ccclass('cc.ComponentModifier'), _dec2$3(_class2$4 = function (_ComponentPath) {
        _inheritsLoose(ComponentModifier, _ComponentPath);

        function ComponentModifier() {
          return _ComponentPath.apply(this, arguments) || this;
        }

        return ComponentModifier;
      }(ComponentPath)) || _class2$4));
      legacyCC.ComponentModifier = ComponentModifier;
      var CurveValueAdapter = exports('o', (_dec3 = ccclass('cc.CurveValueAdapter'), _dec3(_class3 = function () {
        function CurveValueAdapter() {}

        var _proto = CurveValueAdapter.prototype;

        _proto.forTarget = function forTarget(target) {
          return {
            set: function set() {}
          };
        };

        return CurveValueAdapter;
      }()) || _class3));
      legacyCC.CurveValueAdapter = CurveValueAdapter;
      var UniformCurveValueAdapter = exports('p', (_dec4 = ccclass('cc.UniformCurveValueAdapter'), _dec4(_class4$2 = function (_UniformProxyFactory) {
        _inheritsLoose(UniformCurveValueAdapter, _UniformProxyFactory);

        function UniformCurveValueAdapter() {
          return _UniformProxyFactory.apply(this, arguments) || this;
        }

        return UniformCurveValueAdapter;
      }(UniformProxyFactory)) || _class4$2));
      legacyCC.UniformCurveValueAdapter = UniformCurveValueAdapter;
      function isPropertyModifier(path) {
        return typeof path === 'string';
      }
      legacyCC.isPropertyModifier = isPropertyModifier;
      function isElementModifier(path) {
        return typeof path === 'number';
      }
      legacyCC.isElementModifier = isElementModifier;
      function isCustomTargetModifier(path, constructor) {
        return path instanceof constructor;
      }
      legacyCC.isCustomTargetModifier = isCustomTargetModifier;

      legacyCC.math = math;
      legacyCC.geometry = geometry;

    }
  };
});
