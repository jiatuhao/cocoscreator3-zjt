"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderAdditiveLightQueue = void 0;

var _batchedBuffer = require("./batched-buffer.js");

var _pass = require("../renderer/core/pass.js");

var _instancedBuffer = require("./instanced-buffer.js");

var _pipelineStateManager = require("./pipeline-state-manager.js");

var _memoryPools = require("../renderer/core/memory-pools.js");

var _index = require("../math/index.js");

var _index2 = require("../geometry/index.js");

var _index3 = require("../gfx/index.js");

var _index4 = require("../memop/index.js");

var _renderBatchedQueue = require("./render-batched-queue.js");

var _renderInstancedQueue = require("./render-instanced-queue.js");

var _passPhase = require("./pass-phase.js");

var _light = require("../renderer/scene/light.js");

var _define = require("./define.js");

var _globalExports = require("../global-exports.js");

var _samplerLib = require("../renderer/core/sampler-lib.js");

var _builtinResMgr = require("../builtin/builtin-res-mgr.js");

var _sceneCulling = require("./forward/scene-culling.js");

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
 * @module pipeline
 */
const _samplerInfo = [_index3.Filter.LINEAR, _index3.Filter.LINEAR, _index3.Filter.NONE, _index3.Address.CLAMP, _index3.Address.CLAMP, _index3.Address.CLAMP];

const _lightPassPool = new _index4.Pool(() => ({
  subModel: null,
  passIdx: -1,
  dynamicOffsets: [],
  lights: []
}), 16);

const _vec4Array = new Float32Array(4);

const _sphere = _index2.Sphere.create(0, 0, 0, 1);

const _dynamicOffsets = [];
const _lightIndices = [];

const _matShadowView = new _index.Mat4();

const _matShadowViewProj = new _index.Mat4();

function cullSphereLight(light, model) {
  return !!(model.worldBounds && !_index2.intersect.aabbWithAABB(model.worldBounds, light.aabb));
}

function cullSpotLight(light, model) {
  return !!(model.worldBounds && (!_index2.intersect.aabbWithAABB(model.worldBounds, light.aabb) || !_index2.intersect.aabbFrustum(model.worldBounds, light.frustum)));
}

const _phaseID = (0, _passPhase.getPhaseID)('forward-add');

const _lightPassIndices = [];

function getLightPassIndices(subModels, lightPassIndices) {
  lightPassIndices.length = 0;
  let hasValidLightPass = false;

  for (let j = 0; j < subModels.length; j++) {
    const {
      passes
    } = subModels[j];
    let lightPassIndex = -1;

    for (let k = 0; k < passes.length; k++) {
      if (passes[k].phase === _phaseID) {
        lightPassIndex = k;
        hasValidLightPass = true;
        break;
      }
    }

    lightPassIndices.push(lightPassIndex);
  }

  return hasValidLightPass;
}
/**
 * @zh 叠加光照队列。
 */


class RenderAdditiveLightQueue {
  constructor(pipeline) {
    this._pipeline = void 0;
    this._device = void 0;
    this._validLights = [];
    this._lightPasses = [];
    this._descriptorSetMap = new Map();
    this._globalUBO = new Float32Array(_define.UBOGlobal.COUNT);
    this._cameraUBO = new Float32Array(_define.UBOCamera.COUNT);
    this._shadowUBO = new Float32Array(_define.UBOShadow.COUNT);
    this._lightBufferCount = 16;
    this._lightBufferStride = void 0;
    this._lightBufferElementCount = void 0;
    this._lightBuffer = void 0;
    this._firstLightBufferView = void 0;
    this._lightBufferData = void 0;
    this._isHDR = void 0;
    this._fpScale = void 0;
    this._renderObjects = void 0;
    this._instancedQueue = void 0;
    this._batchedQueue = void 0;
    this._lightMeterScale = 10000.0;
    this._sampler = null;
    this._pipeline = pipeline;
    this._device = pipeline.device;
    this._isHDR = pipeline.isHDR;
    this._fpScale = pipeline.fpScale;
    this._renderObjects = pipeline.renderObjects;
    this._instancedQueue = new _renderInstancedQueue.RenderInstancedQueue();
    this._batchedQueue = new _renderBatchedQueue.RenderBatchedQueue();
    this._lightBufferStride = Math.ceil(_define.UBOForwardLight.SIZE / this._device.uboOffsetAlignment) * this._device.uboOffsetAlignment;
    this._lightBufferElementCount = this._lightBufferStride / Float32Array.BYTES_PER_ELEMENT;
    this._lightBuffer = this._device.createBuffer(new _index3.BufferInfo(_index3.BufferUsageBit.UNIFORM | _index3.BufferUsageBit.TRANSFER_DST, _index3.MemoryUsageBit.HOST | _index3.MemoryUsageBit.DEVICE, this._lightBufferStride * this._lightBufferCount, this._lightBufferStride));
    this._firstLightBufferView = this._device.createBuffer(new _index3.BufferViewInfo(this._lightBuffer, 0, _define.UBOForwardLight.SIZE));
    this._lightBufferData = new Float32Array(this._lightBufferElementCount * this._lightBufferCount);
    const shadowMapSamplerHash = (0, _samplerLib.genSamplerHash)(_samplerInfo);
    this._sampler = _samplerLib.samplerLib.getSampler(this._device, shadowMapSamplerHash);
  }

  clear() {
    this._instancedQueue.clear();

    this._batchedQueue.clear();

    this._validLights.length = 0;

    for (let i = 0; i < this._lightPasses.length; i++) {
      const lp = this._lightPasses[i];
      lp.dynamicOffsets.length = 0;
      lp.lights.length = 0;
    }

    _lightPassPool.freeArray(this._lightPasses);

    this._lightPasses.length = 0;
  }

  destroy() {
    const descriptorSets = Array.from(this._descriptorSetMap.values());

    for (let i = 0; i < descriptorSets.length; ++i) {
      const descriptorSet = descriptorSets[i];

      if (descriptorSet) {
        descriptorSet.getBuffer(_define.UBOGlobal.BINDING).destroy();
        descriptorSet.getBuffer(_define.UBOShadow.BINDING).destroy();
        descriptorSet.getSampler(_define.UNIFORM_SHADOWMAP_BINDING).destroy();
        descriptorSet.getSampler(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();
        descriptorSet.getTexture(_define.UNIFORM_SHADOWMAP_BINDING).destroy();
        descriptorSet.getTexture(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING).destroy();
        descriptorSet.destroy();
      }
    }

    this._descriptorSetMap.clear();
  }

  gatherLightPasses(camera, cmdBuff) {
    const validLights = this._validLights;
    this.clear();

    this._gatherValidLights(camera, validLights);

    if (!validLights.length) {
      return;
    }

    this._updateUBOs(camera, cmdBuff);

    this._updateLightDescriptorSet(camera, cmdBuff);

    for (let i = 0; i < this._renderObjects.length; i++) {
      const ro = this._renderObjects[i];
      const {
        model
      } = ro;
      const {
        subModels
      } = model;

      if (!getLightPassIndices(subModels, _lightPassIndices)) {
        continue;
      }

      _lightIndices.length = 0;

      this._lightCulling(model, validLights);

      if (!_lightIndices.length) {
        continue;
      }

      for (let j = 0; j < subModels.length; j++) {
        const lightPassIdx = _lightPassIndices[j];

        if (lightPassIdx < 0) {
          continue;
        }

        const subModel = subModels[j];
        const pass = subModel.passes[lightPassIdx];
        subModel.descriptorSet.bindBuffer(_define.UBOForwardLight.BINDING, this._firstLightBufferView);
        subModel.descriptorSet.update();

        this._addRenderQueue(pass, subModel, model, lightPassIdx, validLights);
      }
    }

    this._instancedQueue.uploadBuffers(cmdBuff);

    this._batchedQueue.uploadBuffers(cmdBuff);
  }

  recordCommandBuffer(device, renderPass, cmdBuff) {
    this._instancedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

    this._batchedQueue.recordCommandBuffer(device, renderPass, cmdBuff);

    for (let i = 0; i < this._lightPasses.length; i++) {
      const {
        subModel,
        passIdx,
        dynamicOffsets,
        lights
      } = this._lightPasses[i];

      const shader = _memoryPools.ShaderPool.get(_memoryPools.SubModelPool.get(subModel.handle, _memoryPools.SubModelView.SHADER_0 + passIdx));

      const pass = subModel.passes[passIdx];
      const ia = subModel.inputAssembler;

      const pso = _pipelineStateManager.PipelineStateManager.getOrCreatePipelineState(device, pass, shader, renderPass, ia);

      const matDS = _memoryPools.DSPool.get(_memoryPools.PassPool.get(pass.handle, _memoryPools.PassView.DESCRIPTOR_SET));

      const localDS = subModel.descriptorSet;
      cmdBuff.bindPipelineState(pso);
      cmdBuff.bindDescriptorSet(_define.SetIndex.MATERIAL, matDS);
      cmdBuff.bindInputAssembler(ia);

      for (let j = 0; j < dynamicOffsets.length; ++j) {
        const light = lights[j];

        const descriptorSet = this._getOrCreateDescriptorSet(light);

        _dynamicOffsets[0] = dynamicOffsets[j];
        cmdBuff.bindDescriptorSet(_define.SetIndex.GLOBAL, descriptorSet);
        cmdBuff.bindDescriptorSet(_define.SetIndex.LOCAL, localDS, _dynamicOffsets);
        cmdBuff.draw(ia);
      }
    }
  } // gather validLights


  _gatherValidLights(camera, validLights) {
    const {
      sphereLights
    } = camera.scene;

    for (let i = 0; i < sphereLights.length; i++) {
      const light = sphereLights[i];

      if (light.baked) {
        continue;
      }

      _index2.Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);

      if (_index2.intersect.sphereFrustum(_sphere, camera.frustum)) {
        validLights.push(light);

        this._getOrCreateDescriptorSet(light);
      }
    }

    const {
      spotLights
    } = camera.scene;

    for (let i = 0; i < spotLights.length; i++) {
      const light = spotLights[i];

      if (light.baked) {
        continue;
      }

      _index2.Sphere.set(_sphere, light.position.x, light.position.y, light.position.z, light.range);

      if (_index2.intersect.sphereFrustum(_sphere, camera.frustum)) {
        validLights.push(light);

        this._getOrCreateDescriptorSet(light);
      }
    }
  } // light culling


  _lightCulling(model, validLights) {
    for (let l = 0; l < validLights.length; l++) {
      const light = validLights[l];
      let isCulled = false;

      switch (light.type) {
        case _light.LightType.SPHERE:
          isCulled = cullSphereLight(light, model);
          break;

        case _light.LightType.SPOT:
          isCulled = cullSpotLight(light, model);
          break;

        default:
      }

      if (!isCulled) {
        _lightIndices.push(l);
      }
    }
  } // add renderQueue


  _addRenderQueue(pass, subModel, model, lightPassIdx, validLights) {
    const {
      batchingScheme
    } = pass;

    if (batchingScheme === _pass.BatchingSchemes.INSTANCING) {
      // instancing
      for (let l = 0; l < _lightIndices.length; l++) {
        const idx = _lightIndices[l];

        const buffer = _instancedBuffer.InstancedBuffer.get(pass, idx);

        buffer.merge(subModel, model.instancedAttributes, lightPassIdx);
        buffer.dynamicOffsets[0] = this._lightBufferStride * idx;

        this._instancedQueue.queue.add(buffer);
      }
    } else if (batchingScheme === _pass.BatchingSchemes.VB_MERGING) {
      // vb-merging
      for (let l = 0; l < _lightIndices.length; l++) {
        const idx = _lightIndices[l];

        const buffer = _batchedBuffer.BatchedBuffer.get(pass, idx);

        buffer.merge(subModel, lightPassIdx, model);
        buffer.dynamicOffsets[0] = this._lightBufferStride * idx;

        this._batchedQueue.queue.add(buffer);
      }
    } else {
      // standard draw
      const lp = _lightPassPool.alloc();

      lp.subModel = subModel;
      lp.passIdx = lightPassIdx;

      for (let l = 0; l < _lightIndices.length; l++) {
        const idx = _lightIndices[l];
        lp.lights.push(validLights[idx]);
        lp.dynamicOffsets.push(this._lightBufferStride * idx);
      }

      this._lightPasses.push(lp);
    }
  } // update light DescriptorSet


  _updateLightDescriptorSet(camera, cmdBuff) {
    const shadowInfo = this._pipeline.shadows;
    const mainLight = camera.scene.mainLight;

    for (let i = 0; i < this._validLights.length; i++) {
      const light = this._validLights[i];

      const descriptorSet = this._getOrCreateDescriptorSet(light);

      if (!descriptorSet) {
        continue;
      }

      this._updateGlobalDescriptorSet(camera, cmdBuff);

      switch (light.type) {
        case _light.LightType.SPHERE:
          // planar PROJ
          if (mainLight) {
            (0, _sceneCulling.updatePlanarPROJ)(shadowInfo, mainLight, this._shadowUBO);
          } // Reserve sphere light shadow interface


          _index.Color.toArray(this._shadowUBO, shadowInfo.shadowColor, _define.UBOShadow.SHADOW_COLOR_OFFSET);

          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 0] = shadowInfo.size.x;
          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 1] = shadowInfo.size.y;
          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 2] = shadowInfo.pcf;
          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 3] = shadowInfo.bias;
          break;

        case _light.LightType.SPOT:
          // planar PROJ
          if (mainLight) {
            (0, _sceneCulling.updatePlanarPROJ)(shadowInfo, mainLight, this._shadowUBO);
          } // light view


          _index.Mat4.invert(_matShadowView, light.node.getWorldMatrix()); // light proj


          _index.Mat4.perspective(_matShadowViewProj, light.spotAngle, light.aspect, 0.001, light.range); // light viewProj


          _index.Mat4.multiply(_matShadowViewProj, _matShadowViewProj, _matShadowView);

          _index.Mat4.toArray(this._shadowUBO, _matShadowViewProj, _define.UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET);

          _index.Color.toArray(this._shadowUBO, shadowInfo.shadowColor, _define.UBOShadow.SHADOW_COLOR_OFFSET);

          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 0] = shadowInfo.size.x;
          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 1] = shadowInfo.size.y;
          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 2] = shadowInfo.pcf;
          this._shadowUBO[_define.UBOShadow.SHADOW_INFO_OFFSET + 3] = shadowInfo.bias; // Spot light sampler binding

          if (this._pipeline.shadowFrameBufferMap.has(light)) {
            if (this._pipeline.shadowFrameBufferMap.has(light)) {
              var _this$_pipeline$shado;

              const texture = (_this$_pipeline$shado = this._pipeline.shadowFrameBufferMap.get(light)) === null || _this$_pipeline$shado === void 0 ? void 0 : _this$_pipeline$shado.colorTextures[0];

              if (texture) {
                descriptorSet.bindTexture(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, texture);
              }
            }
          }

          break;

        default:
      }

      descriptorSet.update();
      cmdBuff.updateBuffer(descriptorSet.getBuffer(_define.UBOGlobal.BINDING), this._globalUBO);
      cmdBuff.updateBuffer(descriptorSet.getBuffer(_define.UBOCamera.BINDING), this._cameraUBO);
      cmdBuff.updateBuffer(descriptorSet.getBuffer(_define.UBOShadow.BINDING), this._shadowUBO);
    }
  }

  _updateGlobalDescriptorSet(camera, cmdBuff) {
    const root = _globalExports.legacyCC.director.root;
    const device = this._pipeline.device;
    const fv = this._globalUBO;
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

    this._updateCameraUBO(camera);
  }

  _updateCameraUBO(camera) {
    const pipeline = this._pipeline;
    const scene = camera.scene;
    const mainLight = scene.mainLight;
    const ambient = pipeline.ambient;
    const shadingScale = pipeline.shadingScale;
    const device = this._pipeline.device;
    const shadingWidth = Math.floor(device.width);
    const shadingHeight = Math.floor(device.height);
    const fog = pipeline.fog;
    const cv = this._cameraUBO;
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET] = camera.width / shadingWidth * shadingScale;
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 1] = camera.height / shadingHeight * shadingScale;
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 2] = 1.0 / cv[_define.UBOCamera.SCREEN_SCALE_OFFSET];
    cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 3] = 1.0 / cv[_define.UBOCamera.SCREEN_SCALE_OFFSET + 1];
    const exposure = camera.exposure;
    cv[_define.UBOCamera.EXPOSURE_OFFSET] = exposure;
    cv[_define.UBOCamera.EXPOSURE_OFFSET + 1] = 1.0 / exposure;
    cv[_define.UBOCamera.EXPOSURE_OFFSET + 2] = this._isHDR ? 1.0 : 0.0;
    cv[_define.UBOCamera.EXPOSURE_OFFSET + 3] = this._fpScale / exposure;

    if (mainLight) {
      _index.Vec3.toArray(cv, mainLight.direction, _define.UBOCamera.MAIN_LIT_DIR_OFFSET);

      _index.Vec3.toArray(cv, mainLight.color, _define.UBOCamera.MAIN_LIT_COLOR_OFFSET);

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
      _index.Vec3.toArray(cv, _index.Vec3.UNIT_Z, _define.UBOCamera.MAIN_LIT_DIR_OFFSET);

      _index.Vec4.toArray(cv, _index.Vec4.ZERO, _define.UBOCamera.MAIN_LIT_COLOR_OFFSET);
    }

    _index.Mat4.toArray(cv, camera.matView, _define.UBOCamera.MAT_VIEW_OFFSET);

    _index.Mat4.toArray(cv, camera.node.worldMatrix, _define.UBOCamera.MAT_VIEW_INV_OFFSET);

    _index.Mat4.toArray(cv, camera.matProj, _define.UBOCamera.MAT_PROJ_OFFSET);

    _index.Mat4.toArray(cv, camera.matProjInv, _define.UBOCamera.MAT_PROJ_INV_OFFSET);

    _index.Mat4.toArray(cv, camera.matViewProj, _define.UBOCamera.MAT_VIEW_PROJ_OFFSET);

    _index.Mat4.toArray(cv, camera.matViewProjInv, _define.UBOCamera.MAT_VIEW_PROJ_INV_OFFSET);

    _index.Vec3.toArray(cv, camera.position, _define.UBOCamera.CAMERA_POS_OFFSET);

    let projectionSignY = device.screenSpaceSignY;

    if (camera.window.hasOffScreenAttachments) {
      projectionSignY *= device.UVSpaceSignY; // need flipping if drawing on render targets
    }

    cv[_define.UBOCamera.CAMERA_POS_OFFSET + 3] = projectionSignY;
    const skyColor = ambient.colorArray;

    if (this._isHDR) {
      skyColor[3] = ambient.skyIllum * this._fpScale;
    } else {
      skyColor[3] = ambient.skyIllum * exposure;
    }

    cv.set(skyColor, _define.UBOCamera.AMBIENT_SKY_OFFSET);
    cv.set(ambient.albedoArray, _define.UBOCamera.AMBIENT_GROUND_OFFSET);

    if (fog.enabled) {
      cv.set(fog.colorArray, _define.UBOCamera.GLOBAL_FOG_COLOR_OFFSET);
      cv[_define.UBOCamera.GLOBAL_FOG_BASE_OFFSET] = fog.fogStart;
      cv[_define.UBOCamera.GLOBAL_FOG_BASE_OFFSET + 1] = fog.fogEnd;
      cv[_define.UBOCamera.GLOBAL_FOG_BASE_OFFSET + 2] = fog.fogDensity;
      cv[_define.UBOCamera.GLOBAL_FOG_ADD_OFFSET] = fog.fogTop;
      cv[_define.UBOCamera.GLOBAL_FOG_ADD_OFFSET + 1] = fog.fogRange;
      cv[_define.UBOCamera.GLOBAL_FOG_ADD_OFFSET + 2] = fog.fogAtten;
    }
  }

  _updateUBOs(camera, cmdBuff) {
    const {
      exposure
    } = camera;

    if (this._validLights.length > this._lightBufferCount) {
      this._firstLightBufferView.destroy();

      this._lightBufferCount = (0, _index.nextPow2)(this._validLights.length);

      this._lightBuffer.resize(this._lightBufferStride * this._lightBufferCount);

      this._lightBufferData = new Float32Array(this._lightBufferElementCount * this._lightBufferCount);

      this._firstLightBufferView.initialize(new _index3.BufferViewInfo(this._lightBuffer, 0, _define.UBOForwardLight.SIZE));
    }

    for (let l = 0, offset = 0; l < this._validLights.length; l++, offset += this._lightBufferElementCount) {
      const light = this._validLights[l];

      switch (light.type) {
        case _light.LightType.SPHERE:
          // UBOForwardLight
          _index.Vec3.toArray(_vec4Array, light.position);

          _vec4Array[3] = 0;

          this._lightBufferData.set(_vec4Array, offset + _define.UBOForwardLight.LIGHT_POS_OFFSET);

          _vec4Array[0] = light.size;
          _vec4Array[1] = light.range;
          _vec4Array[2] = 0.0;

          this._lightBufferData.set(_vec4Array, offset + _define.UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET);

          _index.Vec3.toArray(_vec4Array, light.color);

          if (light.useColorTemperature) {
            const tempRGB = light.colorTemperatureRGB;
            _vec4Array[0] *= tempRGB.x;
            _vec4Array[1] *= tempRGB.y;
            _vec4Array[2] *= tempRGB.z;
          }

          if (this._isHDR) {
            _vec4Array[3] = light.luminance * this._fpScale * this._lightMeterScale;
          } else {
            _vec4Array[3] = light.luminance * exposure * this._lightMeterScale;
          }

          this._lightBufferData.set(_vec4Array, offset + _define.UBOForwardLight.LIGHT_COLOR_OFFSET);

          break;

        case _light.LightType.SPOT:
          // UBOForwardLight
          _index.Vec3.toArray(_vec4Array, light.position);

          _vec4Array[3] = 1;

          this._lightBufferData.set(_vec4Array, offset + _define.UBOForwardLight.LIGHT_POS_OFFSET);

          _vec4Array[0] = light.size;
          _vec4Array[1] = light.range;
          _vec4Array[2] = light.spotAngle;

          this._lightBufferData.set(_vec4Array, offset + _define.UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET);

          _index.Vec3.toArray(_vec4Array, light.direction);

          this._lightBufferData.set(_vec4Array, offset + _define.UBOForwardLight.LIGHT_DIR_OFFSET);

          _index.Vec3.toArray(_vec4Array, light.color);

          if (light.useColorTemperature) {
            const tempRGB = light.colorTemperatureRGB;
            _vec4Array[0] *= tempRGB.x;
            _vec4Array[1] *= tempRGB.y;
            _vec4Array[2] *= tempRGB.z;
          }

          if (this._isHDR) {
            _vec4Array[3] = light.luminance * this._fpScale * this._lightMeterScale;
          } else {
            _vec4Array[3] = light.luminance * exposure * this._lightMeterScale;
          }

          this._lightBufferData.set(_vec4Array, offset + _define.UBOForwardLight.LIGHT_COLOR_OFFSET);

          break;

        default:
      }
    }

    cmdBuff.updateBuffer(this._lightBuffer, this._lightBufferData);
  }

  _getOrCreateDescriptorSet(light) {
    if (!this._descriptorSetMap.has(light)) {
      const device = this._device;
      const descriptorSet = device.createDescriptorSet(new _index3.DescriptorSetInfo(this._pipeline.descriptorSetLayout));
      const globalUBO = device.createBuffer(new _index3.BufferInfo(_index3.BufferUsageBit.UNIFORM | _index3.BufferUsageBit.TRANSFER_DST, _index3.MemoryUsageBit.HOST | _index3.MemoryUsageBit.DEVICE, _define.UBOGlobal.SIZE, _define.UBOGlobal.SIZE));
      descriptorSet.bindBuffer(_define.UBOGlobal.BINDING, globalUBO);
      const cameraBUO = device.createBuffer(new _index3.BufferInfo(_index3.BufferUsageBit.UNIFORM | _index3.BufferUsageBit.TRANSFER_DST, _index3.MemoryUsageBit.HOST | _index3.MemoryUsageBit.DEVICE, _define.UBOCamera.SIZE, _define.UBOCamera.SIZE));
      descriptorSet.bindBuffer(_define.UBOCamera.BINDING, cameraBUO);
      const shadowBUO = device.createBuffer(new _index3.BufferInfo(_index3.BufferUsageBit.UNIFORM | _index3.BufferUsageBit.TRANSFER_DST, _index3.MemoryUsageBit.HOST | _index3.MemoryUsageBit.DEVICE, _define.UBOShadow.SIZE, _define.UBOShadow.SIZE));
      descriptorSet.bindBuffer(_define.UBOShadow.BINDING, shadowBUO);
      descriptorSet.bindSampler(_define.UNIFORM_SHADOWMAP_BINDING, this._sampler);
      descriptorSet.bindTexture(_define.UNIFORM_SHADOWMAP_BINDING, _builtinResMgr.builtinResMgr.get('default-texture').getGFXTexture());
      descriptorSet.bindSampler(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, this._sampler);
      descriptorSet.bindTexture(_define.UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, _builtinResMgr.builtinResMgr.get('default-texture').getGFXTexture());
      descriptorSet.update();

      this._descriptorSetMap.set(light, descriptorSet);

      return descriptorSet;
    }

    return this._descriptorSetMap.get(light);
  }

}

exports.RenderAdditiveLightQueue = RenderAdditiveLightQueue;