"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionalLight = void 0;

var _index = require("../../math/index.js");

var _ambient = require("./ambient.js");

var _light = require("./light.js");

var _memoryPools = require("../core/memory-pools.js");

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
const _forward = new _index.Vec3(0, 0, -1);

const _v3 = new _index.Vec3();

class DirectionalLight extends _light.Light {
  set shadowRange(shadowRange) {
    this._shadowRange = shadowRange;
  }

  get shadowRange() {
    return this._shadowRange;
  }

  set shadowIntensitywRange(shadowIntensity) {
    this._shadowIntensity = shadowIntensity;
  }

  get shadowIntensity() {
    return this._shadowIntensity;
  }

  set shadowFadeDistance(shadowFadeDistance) {
    this._shadowFadeDistance = shadowFadeDistance;
  }

  get shadowFadeDistance() {
    return this._shadowFadeDistance;
  }

  set shadowDistance(shadowDistance) {
    this._shadowDistance = shadowDistance;
  }

  get shadowDistance() {
    return this._shadowDistance;
  }

  set fadeStart(fadeStart) {
    this._fadeStart = fadeStart;
  }

  get fadeStart() {
    return this._fadeStart;
  }

  set splits(splits) {
    this._splits = splits;
  }

  get splits() {
    return this._splits;
  }

  set biasAutoAdjust(biasAutoAdjust) {
    this._biasAutoAdjust = biasAutoAdjust;
  }

  get biasAutoAdjust() {
    return this._biasAutoAdjust;
  }

  set direction(dir) {
    _index.Vec3.normalize(this._dir, dir);

    _memoryPools.LightPool.setVec3(this._handle, _memoryPools.LightView.DIRECTION, this._dir);
  }

  get direction() {
    return this._dir;
  } // in Lux(lx)


  set illuminance(illum) {
    _memoryPools.LightPool.set(this._handle, _memoryPools.LightView.ILLUMINANCE, illum);
  }

  get illuminance() {
    return _memoryPools.LightPool.get(this._handle, _memoryPools.LightView.ILLUMINANCE);
  }

  constructor() {
    super();
    this._dir = new _index.Vec3(1.0, -1.0, -1.0);
    this._shadowRange = 1000.0;
    this._shadowIntensity = 0.0;
    this._shadowFadeDistance = 0.0;
    this._shadowDistance = 0.0;
    this._fadeStart = 0.8;
    this._splits = new _index.Vec4(1.0, 0.0, 0.0, 0.0);
    this._biasAutoAdjust = 1.0;
  }

  initialize() {
    super.initialize();

    _memoryPools.LightPool.set(this._handle, _memoryPools.LightView.ILLUMINANCE, _ambient.Ambient.SUN_ILLUM);

    _memoryPools.LightPool.setVec3(this._handle, _memoryPools.LightView.DIRECTION, this._dir);

    _memoryPools.LightPool.set(this._handle, _memoryPools.LightView.TYPE, _light.LightType.DIRECTIONAL);
  }

  update() {
    if (this._node && this._node.hasChangedFlags) {
      this.direction = _index.Vec3.transformQuat(_v3, _forward, this._node.worldRotation);
    }
  }

}

exports.DirectionalLight = DirectionalLight;