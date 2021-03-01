"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplashScreen = void 0;

var _internal253Aconstants = require("../../../virtual/internal%253Aconstants.js");

var easing = _interopRequireWildcard(require("./animation/easing.js"));

var _material = require("./assets/material.js");

var _mat = require("./math/mat4.js");

var _utils = require("./math/utils.js");

var _sys = require("./platform/sys.js");

var _index = require("./gfx/index.js");

var _index2 = require("./pipeline/index.js");

var _globalExports = require("./global-exports.js");

var _memoryPools = require("./renderer/core/memory-pools.js");

var _define = require("./pipeline/define.js");

var _index3 = require("./platform/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
 * @packageDocumentation
 * @hidden
 */

/* eslint-disable no-restricted-globals */
class SplashScreen {
  set splashFinish(v) {
    this._splashFinish = v;

    this._tryToStart();
  }

  set loadFinish(v) {
    this._loadFinish = v;

    this._tryToStart();
  }

  main(root) {
    if (root == null) {
      (0, _index3.error)('RENDER ROOT IS NULL.');
      return;
    }

    if (window._CCSettings && window._CCSettings.splashScreen) {
      const setting = this.setting = window._CCSettings.splashScreen;
      setting.totalTime = this.setting.totalTime != null ? this.setting.totalTime : 3000;
      setting.base64src = this.setting.base64src || '';
      setting.effect = this.setting.effect || 'FADE-INOUT';
      setting.clearColor = this.setting.clearColor || new _index.Color(0.88, 0.88, 0.88, 1);
      setting.displayRatio = this.setting.displayRatio != null ? this.setting.displayRatio : 0.4;
      setting.displayWatermark = this.setting.displayWatermark != null ? this.setting.displayWatermark : true;
    } else {
      this.setting = {
        totalTime: 3000,
        base64src: '',
        effect: 'FADE-INOUT',
        clearColor: new _index.Color(0.88, 0.88, 0.88, 1),
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
      _globalExports.legacyCC.view.enableRetina(true);

      const designRes = window._CCSettings.designResolution;

      if (designRes) {
        _globalExports.legacyCC.view.setDesignResolutionSize(designRes.width, designRes.height, designRes.policy);
      } else {
        _globalExports.legacyCC.view.setDesignResolutionSize(960, 640, 4);
      }

      this.root = root;
      this.device = root.device;

      _globalExports.legacyCC.game.once(_globalExports.legacyCC.Game.EVENT_GAME_INITED, () => {
        _globalExports.legacyCC.director._lateUpdate = performance.now();
      }, _globalExports.legacyCC.director);

      this.callBack = null;
      this.cancelAnimate = false;
      this.startTime = -1; // this.setting.clearColor may not an instance of Color, so should create
      // Color manually, or will have problem on native.

      const clearColor = this.setting.clearColor;
      this.clearColors = [new _index.Color(clearColor.x, clearColor.y, clearColor.z, clearColor.w)];
      const {
        width,
        height,
        surfaceTransform
      } = this.device;
      this.screenWidth = surfaceTransform % 2 ? height : width;
      this.screenHeight = surfaceTransform % 2 ? width : height;
      this.image = new Image();
      this.image.onload = this.init.bind(this);
      this.image.src = this.setting.base64src;
    }
  }

  setOnFinish(cb) {
    if (this._directCall) {
      if (cb) {
        SplashScreen._ins = undefined;
        cb();
        return;
      }
    }

    this.callBack = cb;
  }

  _tryToStart() {
    if (this._splashFinish && this._loadFinish) {
      if (this.callBack) {
        this.callBack();
        this.hide();

        _globalExports.legacyCC.game.resume();
      }
    }
  }

  init() {
    // adapt for native mac & ios
    if (_internal253Aconstants.JSB) {
      if (_sys.sys.os === _globalExports.legacyCC.sys.OS_OSX || _sys.sys.os === _globalExports.legacyCC.sys.OS_IOS) {
        const width = screen.width * devicePixelRatio;
        const height = screen.height * devicePixelRatio;
        this.device.resize(width, height);
        this.screenWidth = this.device.width;
        this.screenHeight = this.device.height;
      }
    } // TODO: hack for cocosPlay & XIAOMI cause on landscape canvas value is wrong


    if (_internal253Aconstants.COCOSPLAY || _internal253Aconstants.XIAOMI) {
      if (window._CCSettings.orientation === 'landscape' && this.device.width < this.device.height) {
        const width = this.device.height;
        const height = this.device.width;
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

    const animate = time => {
      if (this.cancelAnimate) {
        return;
      }

      if (this.startTime < 0) {
        this.startTime = time;
      }

      const elapsedTime = time - this.startTime;
      /** update uniform */

      const PERCENT = (0, _utils.clamp01)(elapsedTime / this.setting.totalTime);
      let u_p = easing.cubicOut(PERCENT);
      if (this.setting.effect === 'NONE') u_p = 1.0;
      this.material.setProperty('u_precent', u_p);
      this.material.passes[0].update();

      if (this.setting.displayWatermark && this.textMaterial) {
        this.textMaterial.setProperty('u_precent', u_p);
        this.textMaterial.passes[0].update();
      }

      this.frame(time);

      if (elapsedTime > this.setting.totalTime) {
        this.splashFinish = true;
      }

      requestAnimationFrame(animate);
    };

    _globalExports.legacyCC.game.pause();

    this.handle = requestAnimationFrame(animate);
  }

  hide() {
    cancelAnimationFrame(this.handle);
    this.cancelAnimate = true; // here delay destroy：because ios immediately destroy input assmebler will crash & native renderer will mess.

    setTimeout(this.destroy.bind(this));
  }

  frame(time) {
    if (this.cancelAnimate) return; // TODO: hack for cocosPlay & XIAOMI cause on landscape canvas value is wrong

    if (_internal253Aconstants.COCOSPLAY || _internal253Aconstants.XIAOMI) {
      if (window._CCSettings.orientation === 'landscape' && this.device.width < this.device.height) {
        const width = this.device.height;
        const height = this.device.width;
        this.device.resize(width, height);
        this.screenWidth = this.device.width;
        this.screenHeight = this.device.height;
      }
    }

    const device = this.device;
    device.acquire(); // record command

    const cmdBuff = this.cmdBuff;
    const framebuffer = this.framebuffer;
    const renderArea = this.renderArea;

    if (_internal253Aconstants.JSB && (_sys.sys.os === _globalExports.legacyCC.sys.OS_OSX || _sys.sys.os === _globalExports.legacyCC.sys.OS_IOS)) {
      renderArea.height = device.nativeHeight;
      renderArea.width = device.nativeWidth;
    } else {
      renderArea.height = device.height;
      renderArea.width = device.width;
    }

    cmdBuff.begin();
    cmdBuff.beginRenderPass(framebuffer.renderPass, framebuffer, renderArea, this.clearColors, 1.0, 0);
    const pass = this.material.passes[0];

    const pso = _index2.PipelineStateManager.getOrCreatePipelineState(device, pass, this.shader, framebuffer.renderPass, this.assmebler);

    cmdBuff.bindPipelineState(pso);
    cmdBuff.bindDescriptorSet(_define.SetIndex.MATERIAL, pass.descriptorSet);
    cmdBuff.bindInputAssembler(this.assmebler);
    cmdBuff.draw(this.assmebler);

    if (this.setting.displayWatermark && this.textShader && this.textAssmebler) {
      const passText = this.textMaterial.passes[0];

      const psoWatermark = _index2.PipelineStateManager.getOrCreatePipelineState(device, passText, this.textShader, framebuffer.renderPass, this.textAssmebler);

      cmdBuff.bindPipelineState(psoWatermark);
      cmdBuff.bindDescriptorSet(_define.SetIndex.MATERIAL, passText.descriptorSet);
      cmdBuff.bindInputAssembler(this.textAssmebler);
      cmdBuff.draw(this.textAssmebler);
    }

    cmdBuff.endRenderPass();
    cmdBuff.end();
    device.queue.submit([cmdBuff]);
    device.present();
  }

  initText() {
    /** texure */
    this.textImg = document.createElement('canvas');
    this.textImg.width = 330;
    this.textImg.height = 30;
    this.textImg.style.width = `${this.textImg.width}`;
    this.textImg.style.height = `${this.textImg.height}`;
    const ctx = this.textImg.getContext('2d');
    ctx.font = `${18}px Arial`;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.fillStyle = '`#424242`';
    const text = 'Powered by Cocos Creator';
    const textMetrics = ctx.measureText(text);
    ctx.fillText(text, (330 - textMetrics.width) / 2, 6);
    this.textRegion = new _index.BufferTextureCopy();
    this.textRegion.texExtent.width = this.textImg.width;
    this.textRegion.texExtent.height = this.textImg.height;
    this.textRegion.texExtent.depth = 1;
    this.textTexture = this.device.createTexture(new _index.TextureInfo(_index.TextureType.TEX2D, _index.TextureUsageBit.SAMPLED | _index.TextureUsageBit.TRANSFER_DST, _index.Format.RGBA8, this.textImg.width, this.textImg.height));
    this.device.copyTexImagesToTexture([this.textImg], this.textTexture, [this.textRegion]);
    /** PSO */

    this.textMaterial = new _material.Material();
    this.textMaterial.initialize({
      effectName: 'splash-screen'
    });
    const pass = this.textMaterial.passes[0];
    const binding = pass.getBinding('mainTexture');
    pass.bindTexture(binding, this.textTexture);
    this.textShader = _memoryPools.ShaderPool.get(pass.getShaderVariant());

    _memoryPools.DSPool.get(_memoryPools.PassPool.get(pass.handle, _memoryPools.PassView.DESCRIPTOR_SET)).update();
    /** Assembler */
    // create vertex buffer


    const vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
    const vbSize = vbStride * 4;
    this.textVB = this.device.createBuffer(new _index.BufferInfo(_index.BufferUsageBit.VERTEX | _index.BufferUsageBit.TRANSFER_DST, _index.MemoryUsageBit.HOST | _index.MemoryUsageBit.DEVICE, vbSize, vbStride));
    const verts = new Float32Array(4 * 4);
    let w = -this.textImg.width / 2;
    let h = -this.textImg.height / 2;

    if (this.screenWidth < this.screenHeight) {
      w = -this.screenWidth / 2 * 0.5;
      h = w / (this.textImg.width / this.textImg.height);
    } else {
      w = -this.screenHeight / 2 * 0.5;
      h = w / (this.textImg.width / this.textImg.height);
    }

    let n = 0;
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

    for (let i = 0; i < verts.length; i += 4) {
      verts[i] += this.screenWidth / 2;
      verts[i + 1] += this.screenHeight * 0.1;
    } // doing the screen adaptation here will not support dynamic screen orientation changes


    const ySign = this.device.screenSpaceSignY;
    const preTransform = _mat.preTransforms[this.device.surfaceTransform];

    for (let i = 0; i < verts.length; i += 4) {
      const x = verts[i] / this.screenWidth * 2 - 1;
      const y = (verts[i + 1] / this.screenHeight * 2 - 1) * ySign;
      verts[i] = preTransform[0] * x + preTransform[2] * y;
      verts[i + 1] = preTransform[1] * x + preTransform[3] * y;
    }

    this.textVB.update(verts); // create index buffer

    const ibStride = Uint16Array.BYTES_PER_ELEMENT;
    const ibSize = ibStride * 6;
    this.textIB = this.device.createBuffer(new _index.BufferInfo(_index.BufferUsageBit.INDEX | _index.BufferUsageBit.TRANSFER_DST, _index.MemoryUsageBit.HOST | _index.MemoryUsageBit.DEVICE, ibSize, ibStride));
    const indices = new Uint16Array(6);
    indices[0] = 0;
    indices[1] = 1;
    indices[2] = 2;
    indices[3] = 1;
    indices[4] = 3;
    indices[5] = 2;
    this.textIB.update(indices);
    const attributes = [new _index.Attribute('a_position', _index.Format.RG32F), new _index.Attribute('a_texCoord', _index.Format.RG32F)];
    const textIAInfo = new _index.InputAssemblerInfo(attributes, [this.textVB], this.textIB);
    this.textAssmebler = this.device.createInputAssembler(textIAInfo);
  }

  initCMD() {
    const device = this.device;

    if (_internal253Aconstants.JSB && (_sys.sys.os === _globalExports.legacyCC.sys.OS_OSX || _sys.sys.os === _globalExports.legacyCC.sys.OS_IOS)) {
      this.renderArea = new _index.Rect(0, 0, device.nativeWidth, device.nativeHeight);
    } else {
      this.renderArea = new _index.Rect(0, 0, device.width, device.height);
    }

    this.framebuffer = this.root.mainWindow.framebuffer;
    this.cmdBuff = device.commandBuffer;
  }

  initIA() {
    const device = this.device; // create vertex buffer

    const vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
    const vbSize = vbStride * 4;
    this.vertexBuffers = device.createBuffer(new _index.BufferInfo(_index.BufferUsageBit.VERTEX | _index.BufferUsageBit.TRANSFER_DST, _index.MemoryUsageBit.HOST | _index.MemoryUsageBit.DEVICE, vbSize, vbStride));
    const verts = new Float32Array(4 * 4);
    let w = -this.image.width / 2;
    let h = -this.image.height / 2;

    if (this.screenWidth < this.screenHeight) {
      w = -this.screenWidth / 2 * this.setting.displayRatio;
      h = w / (this.image.width / this.image.height);
    } else {
      w = -this.screenHeight / 2 * this.setting.displayRatio;
      h = w / (this.image.width / this.image.height);
    }

    let n = 0;
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

    for (let i = 0; i < verts.length; i += 4) {
      verts[i] += this.screenWidth / 2;
      verts[i + 1] += this.screenHeight / 2;
    } // doing the screen adaptation here will not support dynamic screen orientation changes


    const ySign = this.device.screenSpaceSignY;
    const preTransform = _mat.preTransforms[this.device.surfaceTransform];

    for (let i = 0; i < verts.length; i += 4) {
      const x = verts[i] / this.screenWidth * 2 - 1;
      const y = (verts[i + 1] / this.screenHeight * 2 - 1) * ySign;
      verts[i] = preTransform[0] * x + preTransform[2] * y;
      verts[i + 1] = preTransform[1] * x + preTransform[3] * y;
    }

    this.vertexBuffers.update(verts); // create index buffer

    const ibStride = Uint16Array.BYTES_PER_ELEMENT;
    const ibSize = ibStride * 6;
    this.indicesBuffers = device.createBuffer(new _index.BufferInfo(_index.BufferUsageBit.INDEX | _index.BufferUsageBit.TRANSFER_DST, _index.MemoryUsageBit.HOST | _index.MemoryUsageBit.DEVICE, ibSize, ibStride));
    const indices = new Uint16Array(6);
    indices[0] = 0;
    indices[1] = 1;
    indices[2] = 2;
    indices[3] = 1;
    indices[4] = 3;
    indices[5] = 2;
    this.indicesBuffers.update(indices);
    const attributes = [new _index.Attribute('a_position', _index.Format.RG32F), new _index.Attribute('a_texCoord', _index.Format.RG32F)];
    const IAInfo = new _index.InputAssemblerInfo(attributes, [this.vertexBuffers], this.indicesBuffers);
    this.assmebler = device.createInputAssembler(IAInfo);
  }

  initPSO() {
    const device = this.device;
    this.material = new _material.Material();
    this.material.initialize({
      effectName: 'splash-screen'
    });
    const samplerInfo = new _index.SamplerInfo();
    samplerInfo.addressU = _index.Address.CLAMP;
    samplerInfo.addressV = _index.Address.CLAMP;
    this.sampler = device.createSampler(samplerInfo);
    this.texture = device.createTexture(new _index.TextureInfo(_index.TextureType.TEX2D, _index.TextureUsageBit.SAMPLED | _index.TextureUsageBit.TRANSFER_DST, _index.Format.RGBA8, this.image.width, this.image.height));
    const pass = this.material.passes[0];
    const binding = pass.getBinding('mainTexture');
    pass.bindTexture(binding, this.texture);
    this.shader = _memoryPools.ShaderPool.get(pass.getShaderVariant());

    const descriptorSet = _memoryPools.DSPool.get(_memoryPools.PassPool.get(pass.handle, _memoryPools.PassView.DESCRIPTOR_SET));

    descriptorSet.bindSampler(binding, this.sampler);
    descriptorSet.update();
    this.region = new _index.BufferTextureCopy();
    this.region.texExtent.width = this.image.width;
    this.region.texExtent.height = this.image.height;
    this.region.texExtent.depth = 1;
    device.copyTexImagesToTexture([this.image], this.texture, [this.region]);
  }

  destroy() {
    this.callBack = null;
    this.clearColors = null;
    this.device = null;
    if (_internal253Aconstants.JSB) this.image.destroy();
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
  }

  static get instance() {
    if (!SplashScreen._ins) {
      SplashScreen._ins = new SplashScreen();
    }

    return SplashScreen._ins;
  }

  constructor() {
    this.handle = 0;
    this.callBack = null;
    this.cancelAnimate = false;
    this.startTime = -1;
    this._splashFinish = false;
    this._loadFinish = false;
    this._directCall = false;
  }

}

exports.SplashScreen = SplashScreen;
SplashScreen._ins = void 0;
_globalExports.legacyCC.internal.SplashScreen = SplashScreen;