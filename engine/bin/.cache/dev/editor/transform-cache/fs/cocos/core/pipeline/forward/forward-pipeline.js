"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForwardPipeline = void 0;

var _index = require("../../data/decorators/index.js");

var _renderPipeline = require("../render-pipeline.js");

var _forwardFlow = require("./forward-flow.js");

var _pipelineSerialization = require("../pipeline-serialization.js");

var _shadowFlow = require("../shadow/shadow-flow.js");

var _define = require("../define.js");

var _define2 = require("../../gfx/define.js");

var _index2 = require("../../gfx/index.js");

var _camera = require("../../renderer/scene/camera.js");

var _globalExports = require("../../global-exports.js");

var _index3 = require("../../math/index.js");

var _fog = require("../../renderer/scene/fog.js");

var _ambient = require("../../renderer/scene/ambient.js");

var _skybox = require("../../renderer/scene/skybox.js");

var _shadows = require("../../renderer/scene/shadows.js");

var _sceneCulling = require("./scene-culling.js");

var _samplerLib = require("../../renderer/core/sampler-lib.js");

var _index4 = require("../../builtin/index.js");

var _debug = require("../../platform/debug.js");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

const matShadowView = new _index3.Mat4();
const matShadowViewProj = new _index3.Mat4();
const vec3_center = new _index3.Vec3();
const _samplerInfo = [_define2.Filter.LINEAR, _define2.Filter.LINEAR, _define2.Filter.NONE, _define2.Address.CLAMP, _define2.Address.CLAMP, _define2.Address.CLAMP];
/**
 * @en The forward render pipeline
 * @zh 前向渲染管线。
 */

let ForwardPipeline = (_dec = (0, _index.ccclass)('ForwardPipeline'), _dec2 = (0, _index.type)([_pipelineSerialization.RenderTextureConfig]), _dec3 = (0, _index.displayOrder)(2), _dec4 = (0, _index.type)([_pipelineSerialization.MaterialConfig]), _dec5 = (0, _index.displayOrder)(3), _dec(_class = (_class2 = (_temp = class ForwardPipeline extends _renderPipeline.RenderPipeline {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "renderTextures", _descriptor, this);

    _initializerDefineProperty(this, "materials", _descriptor2, this);

    this.fog = new _fog.Fog();
    this.ambient = new _ambient.Ambient();
    this.skybox = new _skybox.Skybox();
    this.shadows = new _shadows.Shadows();
    this.renderObjects = [];
    this.shadowObjects = [];
    this.shadowFrameBufferMap = new Map();
    this._isHDR = false;
    this._shadingScale = 1.0;
    this._fpScale = 1.0 / 1024.0;
    this._renderPasses = new Map();
    this._globalUBO = new Float32Array(_define.UBOGlobal.COUNT);
    this._cameraUBO = new Float32Array(_define.UBOCamera.COUNT);
    this._shadowUBO = new Float32Array(_define.UBOShadow.COUNT);
  }

  get isHDR() {
    return this._isHDR;
  }

  set isHDR(val) {
    if (this._isHDR === val) {
      return;
    }

    this._isHDR = val;
    const defaultGlobalUBOData = this._cameraUBO;
    defaultGlobalUBOData[_define.UBOCamera.EXPOSURE_OFFSET + 2] = this._isHDR ? 1.0 : 0.0;
  }

  get shadingScale() {
    return this._shadingScale;
  }

  get fpScale() {
    return this._fpScale;
  }
  /**
   * @en Get shadow UBO.
   * @zh 获取阴影UBO。
   */


  get shadowUBO() {
    return this._shadowUBO;
  }

  initialize(info) {
    super.initialize(info);

    if (this._flows.length === 0) {
      const shadowFlow = new _shadowFlow.ShadowFlow();
      shadowFlow.initialize(_shadowFlow.ShadowFlow.initInfo);

      this._flows.push(shadowFlow);

      const forwardFlow = new _forwardFlow.ForwardFlow();
      forwardFlow.initialize(_forwardFlow.ForwardFlow.initInfo);

      this._flows.push(forwardFlow);
    }

    return true;
  }

  activate() {
    this._macros = {};

    if (!super.activate()) {
      return false;
    }

    if (!this._activeRenderer()) {
      (0, _debug.errorID)(2402);
      return false;
    }

    return true;
  }

  render(cameras) {
    this._commandBuffers[0].begin();

    this.updateGlobalUBO();

    for (let i = 0; i < cameras.length; i++) {
      const camera = cameras[i];

      if (camera.scene) {
        this.updateCameraUBO(camera);

        for (let j = 0; j < this._flows.length; j++) {
          this._flows[j].render(camera);
        }
      }
    }

    this._commandBuffers[0].end();

    this._device.queue.submit(this._commandBuffers);
  }

  getRenderPass(clearFlags) {
    let renderPass = this._renderPasses.get(clearFlags);

    if (renderPass) {
      return renderPass;
    }

    const device = this.device;
    const colorAttachment = new _index2.ColorAttachment();
    const depthStencilAttachment = new _index2.DepthStencilAttachment();
    colorAttachment.format = device.colorFormat;
    depthStencilAttachment.format = device.depthStencilFormat;
    depthStencilAttachment.stencilStoreOp = _define2.StoreOp.DISCARD;
    depthStencilAttachment.depthStoreOp = _define2.StoreOp.DISCARD;

    if (!(clearFlags & _define2.ClearFlag.COLOR)) {
      if (clearFlags & _camera.SKYBOX_FLAG) {
        colorAttachment.loadOp = _index2.LoadOp.DISCARD;
      } else {
        colorAttachment.loadOp = _index2.LoadOp.LOAD;
        colorAttachment.beginLayout = _index2.TextureLayout.PRESENT_SRC;
      }
    }

    if ((clearFlags & _define2.ClearFlag.DEPTH_STENCIL) !== _define2.ClearFlag.DEPTH_STENCIL) {
      if (!(clearFlags & _define2.ClearFlag.DEPTH)) depthStencilAttachment.depthLoadOp = _index2.LoadOp.LOAD;
      if (!(clearFlags & _define2.ClearFlag.STENCIL)) depthStencilAttachment.stencilLoadOp = _index2.LoadOp.LOAD;
      depthStencilAttachment.beginLayout = _index2.TextureLayout.DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
    }

    const renderPassInfo = new _index2.RenderPassInfo([colorAttachment], depthStencilAttachment);
    renderPass = device.createRenderPass(renderPassInfo);

    this._renderPasses.set(clearFlags, renderPass);

    return renderPass;
  }
  /**
   * @en Update all UBOs
   * @zh 更新全部 UBO。
   */


  updateGlobalUBO() {
    this._descriptorSet.update();

    const root = _globalExports.legacyCC.director.root;
    const fv = this._globalUBO;
    const device = this.device;
    const shadingWidth = Math.floor(device.width);
    const shadingHeight = Math.floor(device.height); // update UBOGlobal

    fv[_define.UBOGlobal.TIME_OFFSET] = root.cumulativeTime;
    fv[_define.UBOGlobal.TIME_OFFSET + 1] = root.frameTime;
    fv[_define.UBOGlobal.TIME_OFFSET + 2] = _globalExports.legacyCC.director.getTotalFrames();
    fv[_define.UBOGlobal.SCREEN_SIZE_OFFSET] = device.width;
    fv[_define.UBOGlobal.SCREEN_SIZE_OFFSET + 1] = device.height;
    fv[_define.UBOGlobal.SCREEN_SIZE_OFFSET + 2] = 1.0 / device.width;
    fv[_define.UBOGlobal.SCREEN_SIZE_OFFSET + 3] = 1.0 / device.height;
    fv[_define.UBOGlobal.NATIVE_SIZE_OFFSET] = shadingWidth;
    fv[_define.UBOGlobal.NATIVE_SIZE_OFFSET + 1] = shadingHeight;
    fv[_define.UBOGlobal.NATIVE_SIZE_OFFSET + 2] = 1.0 / fv[_define.UBOGlobal.NATIVE_SIZE_OFFSET];
    fv[_define.UBOGlobal.NATIVE_SIZE_OFFSET + 3] = 1.0 / fv[_define.UBOGlobal.NATIVE_SIZE_OFFSET + 1];

    this._commandBuffers[0].updateBuffer(this._descriptorSet.getBuffer(_define.UBOGlobal.BINDING), this._globalUBO);
  }

  _activeRenderer() {
    const device = this.device;

    this._commandBuffers.push(device.commandBuffer);

    const globalUBO = device.createBuffer(new _index2.BufferInfo(_define2.BufferUsageBit.UNIFORM | _define2.BufferUsageBit.TRANSFER_DST, _define2.MemoryUsageBit.HOST | _define2.MemoryUsageBit.DEVICE, _define.UBOGlobal.SIZE, _define.UBOGlobal.SIZE));

    this._descriptorSet.bindBuffer(_define.UBOGlobal.BINDING, globalUBO);

    const cameraUBO = device.createBuffer(new _index2.BufferInfo(_define2.BufferUsageBit.UNIFORM | _define2.BufferUsageBit.TRANSFER_DST, _define2.MemoryUsageBit.HOST | _define2.MemoryUsageBit.DEVICE, _define.UBOCamera.SIZE, _define.UBOCamera.SIZE));

    this._descriptorSet.bindBuffer(_define.UBOCamera.BINDING, cameraUBO);

    const shadowUBO = device.createBuffer(new _index2.BufferInfo(_define2.BufferUsageBit.UNIFORM | _define2.BufferUsageBit.TRANSFER_DST, _define2.MemoryUsageBit.HOST | _define2.MemoryUsageBit.DEVICE, _define.UBOShadow.SIZE, _define.UBOShadow.SIZE));

    this._descriptorSet.bindBuffer(_define.UBOShadow.BINDING, shadowUBO);

    const shadowMapSamplerHash = (0, _samplerLib.genSamplerHash)(_samplerInfo);

    const shadowMapSampler = _samplerLib.samplerLib.getSampler(device, shadowMapSamplerHash);

    this._descriptorSet.bindSampler(_define.UNIFORM_SHADOWMAP_BINDING, shadowMapSampler);

    this._descriptorSet.bindTexture(_define.UNIFORM_SHADOWMAP_BINDING, _index4.builtinResMgr.get('default-texture').getGFXTexture());

    this._descriptorSet.bindSampler(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, shadowMapSampler);

    this._descriptorSet.bindTexture(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, _index4.builtinResMgr.get('default-texture').getGFXTexture());

    this._descriptorSet.update(); // update global defines when all states initialized.


    this.macros.CC_USE_HDR = this._isHDR;
    this.macros.CC_SUPPORT_FLOAT_TEXTURE = this.device.hasFeature(_index2.Feature.TEXTURE_FLOAT);
    return true;
  }

  updateShadowUBO(camera) {
    this._descriptorSet.update();

    const mainLight = camera.scene.mainLight;
    const device = this.device;
    const shadowInfo = this.shadows;

    if (shadowInfo.enabled) {
      if (mainLight && shadowInfo.type === _shadows.ShadowType.ShadowMap) {
        if (this.shadowFrameBufferMap.has(mainLight)) {
          this._descriptorSet.bindTexture(_define.UNIFORM_SHADOWMAP_BINDING, this.shadowFrameBufferMap.get(mainLight).colorTextures[0]);
        } // light view


        let shadowCameraView; // light proj

        let x = 0;
        let y = 0;
        let far = 0;

        if (shadowInfo.autoAdapt) {
          shadowCameraView = (0, _sceneCulling.getShadowWorldMatrix)(this, mainLight.node.getWorldRotation(), mainLight.direction, vec3_center); // if orthoSize is the smallest, auto calculate orthoSize.

          const radius = shadowInfo.sphere.radius;
          x = radius * shadowInfo.aspect;
          y = radius;

          const halfFar = _index3.Vec3.distance(shadowInfo.sphere.center, vec3_center);

          far = Math.min(halfFar * _shadows.Shadows.COEFFICIENT_OF_EXPANSION, _shadows.Shadows.MAX_FAR);
        } else {
          shadowCameraView = mainLight.node.getWorldMatrix();
          x = shadowInfo.orthoSize * shadowInfo.aspect;
          y = shadowInfo.orthoSize;
          far = shadowInfo.far;
        }

        _index3.Mat4.invert(matShadowView, shadowCameraView);

        const projectionSignY = device.screenSpaceSignY * device.UVSpaceSignY; // always offscreen

        _index3.Mat4.ortho(matShadowViewProj, -x, x, -y, y, shadowInfo.near, far, device.clipSpaceMinZ, projectionSignY);

        _index3.Mat4.multiply(matShadowViewProj, matShadowViewProj, matShadowView);

        _index3.Mat4.toArray(this._shadowUBO, matShadowViewProj, _define.UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);

        this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET] = shadowInfo.size.x;
        this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 1] = shadowInfo.size.y;
        this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 2] = shadowInfo.pcf;
        this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 3] = shadowInfo.bias;
      } else if (mainLight && shadowInfo.type === _shadows.ShadowType.Planar) {
        (0, _sceneCulling.updatePlanarPROJ)(shadowInfo, mainLight, this._shadowUBO);
      }

      _index3.Color.toArray(this._shadowUBO, shadowInfo.shadowColor, _define.UBOShadow.SHADOW_COLOR_OFFSET);

      this._commandBuffers[0].updateBuffer(this._descriptorSet.getBuffer(_define.UBOShadow.BINDING), this._shadowUBO);
    }
  }

  updateCameraUBO(camera) {
    const device = this.device;
    const scene = camera.scene ? camera.scene : _globalExports.legacyCC.director.getScene().renderScene;
    const mainLight = scene.mainLight;
    const ambient = this.ambient;
    const fog = this.fog;
    const shadingWidth = Math.floor(device.width);
    const shadingHeight = Math.floor(device.height); // update camera ubo

    const cv = this._cameraUBO;
    const exposure = camera.exposure;
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET] = camera.width / shadingWidth * this.shadingScale;
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 1] = camera.height / shadingHeight * this.shadingScale;
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 2] = 1.0 / cv[_define.UBOCamera.SCREEN_SCALE_OFFSET];
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 3] = 1.0 / cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 1];
    cv[_define.UBOCamera.EXPOSURE_OFFSET] = exposure;
    cv[_define.UBOCamera.EXPOSURE_OFFSET + 1] = 1.0 / exposure;
    cv[_define.UBOCamera.EXPOSURE_OFFSET + 2] = this._isHDR ? 1.0 : 0.0;
    cv[_define.UBOCamera.EXPOSURE_OFFSET + 3] = this._fpScale / exposure;

    if (mainLight) {
      _index3.Vec3.toArray(cv, mainLight.direction, _define.UBOCamera.MAIN_LIT_DIR_OFFSET);

      _index3.Vec3.toArray(cv, mainLight.color, _define.UBOCamera.MAIN_LIT_COLOR_OFFSET);

      if (mainLight.useColorTemperature) {
        const colorTempRGB = mainLight.colorTemperatureRGB;
        cv[_define.UBOCamera.MAIN_LIT_COLOR_OFFSET] *= colorTempRGB.x;
        cv[_define.UBOCamera.MAIN_LIT_COLOR_OFFSET + 1] *= colorTempRGB.y;
        cv[_define.UBOCamera.MAIN_LIT_COLOR_OFFSET + 2] *= colorTempRGB.z;
      }

      if (this._isHDR) {
        cv[_define.UBOCamera.MAIN_LIT_COLOR_OFFSET + 3] = mainLight.illuminance * this._fpScale;
      } else {
        cv[_define.UBOCamera.MAIN_LIT_COLOR_OFFSET + 3] = mainLight.illuminance * exposure;
      }
    } else {
      _index3.Vec3.toArray(cv, _index3.Vec3.UNIT_Z, _define.UBOCamera.MAIN_LIT_DIR_OFFSET);

      _index3.Vec4.toArray(cv, _index3.Vec4.ZERO, _define.UBOCamera.MAIN_LIT_COLOR_OFFSET);
    }

    const skyColor = ambient.colorArray;

    if (this._isHDR) {
      skyColor[3] = ambient.skyIllum * this._fpScale;
    } else {
      skyColor[3] = ambient.skyIllum * exposure;
    }

    cv.set(skyColor, _define.UBOCamera.AMBIENT_SKY_OFFSET);
    cv.set(ambient.albedoArray, _define.UBOCamera.AMBIENT_GROUND_OFFSET);

    _index3.Mat4.toArray(cv, camera.matView, _define.UBOCamera.MAT_VIEW_OFFSET);

    _index3.Mat4.toArray(cv, camera.node.worldMatrix, _define.UBOCamera.MAT_VIEW_INV_OFFSET);

    _index3.Mat4.toArray(cv, camera.matProj, _define.UBOCamera.MAT_PROJ_OFFSET);

    _index3.Mat4.toArray(cv, camera.matProjInv, _define.UBOCamera.MAT_PROJ_INV_OFFSET);

    _index3.Mat4.toArray(cv, camera.matViewProj, _define.UBOCamera.MAT_VIEW_PROJ_OFFSET);

    _index3.Mat4.toArray(cv, camera.matViewProjInv, _define.UBOCamera.MAT_VIEW_PROJ_INV_OFFSET);

    _index3.Vec3.toArray(cv, camera.position, _define.UBOCamera.CAMERA_POS_OFFSET);

    let projectionSignY = device.screenSpaceSignY;

    if (camera.window.hasOffScreenAttachments) {
      projectionSignY *= device.UVSpaceSignY; // need flipping if drawing on render targets
    }

    cv[_define.UBOCamera.CAMERA_POS_OFFSET + 3] = projectionSignY;

    if (fog.enabled) {
      cv.set(fog.colorArray, _define.UBOCamera.GLOBAL_FOG_COLOR_OFFSET);
      cv[_define.UBOCamera.GLOBAL_FOG_BASE_OFFSET] = fog.fogStart;
      cv[_define.UBOCamera.GLOBAL_FOG_BASE_OFFSET + 1] = fog.fogEnd;
      cv[_define.UBOCamera.GLOBAL_FOG_BASE_OFFSET + 2] = fog.fogDensity;
      cv[_define.UBOCamera.GLOBAL_FOG_ADD_OFFSET] = fog.fogTop;
      cv[_define.UBOCamera.GLOBAL_FOG_ADD_OFFSET + 1] = fog.fogRange;
      cv[_define.UBOCamera.GLOBAL_FOG_ADD_OFFSET + 2] = fog.fogAtten;
    }

    this._commandBuffers[0].updateBuffer(this._descriptorSet.getBuffer(_define.UBOCamera.BINDING), this._cameraUBO);
  }

  destroyUBOs() {
    if (this._descriptorSet) {
      this._descriptorSet.getBuffer(_define.UBOGlobal.BINDING).destroy();

      this._descriptorSet.getBuffer(_define.UBOShadow.BINDING).destroy();

      this._descriptorSet.getBuffer(_define.UBOCamera.BINDING).destroy();

      this._descriptorSet.getSampler(_define.UNIFORM_SHADOWMAP_BINDING).destroy();

      this._descriptorSet.getSampler(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();

      this._descriptorSet.getTexture(_define.UNIFORM_SHADOWMAP_BINDING).destroy();

      this._descriptorSet.getTexture(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();
    }
  }

  destroy() {
    this.destroyUBOs();

    const rpIter = this._renderPasses.values();

    let rpRes = rpIter.next();

    while (!rpRes.done) {
      rpRes.value.destroy();
      rpRes = rpIter.next();
    }

    this._commandBuffers.length = 0;
    this.ambient.destroy();
    this.skybox.destroy();
    this.fog.destroy();
    this.shadows.destroy();
    return super.destroy();
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "renderTextures", [_dec2, _index.serializable, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "materials", [_dec4, _index.serializable, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
})), _class2)) || _class);
exports.ForwardPipeline = ForwardPipeline;