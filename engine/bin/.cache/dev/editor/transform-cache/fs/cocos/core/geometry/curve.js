"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evalOptCurve = evalOptCurve;
exports.AnimationCurve = exports.OptimizedKey = exports.Keyframe = void 0;

var _class = require("../data/class.js");

var _utils = require("../math/utils.js");

var _enum = require("../value-types/enum.js");

var _types = require("../animation/types.js");

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
 * @module geometry
 */
const LOOK_FORWARD = 3;
const WrapMode = (0, _enum.Enum)({
  Default: _types.WrapModeMask.Default,
  Normal: _types.WrapModeMask.Normal,
  Clamp: _types.WrapModeMask.Clamp,
  Loop: _types.WrapModeMask.Loop,
  PingPong: _types.WrapModeMask.PingPong
});
/**
 * @en
 * A key frame in the curve.
 * @zh
 * 曲线中的一个关键帧。
 */

class Keyframe {
  constructor() {
    this.time = 0;
    this.value = 0;
    this.inTangent = 0;
    this.outTangent = 0;
  }

}

exports.Keyframe = Keyframe;

_class.CCClass.fastDefine('cc.Keyframe', Keyframe, {
  time: 0,
  value: 0,
  inTangent: 0,
  outTangent: 0
});

class OptimizedKey {
  constructor() {
    this.index = void 0;
    this.time = void 0;
    this.endTime = void 0;
    this.coefficient = void 0;
    this.index = -1;
    this.time = 0;
    this.endTime = 0;
    this.coefficient = new Float32Array(4);
  }

  evaluate(T) {
    const t = T - this.time;
    return evalOptCurve(t, this.coefficient);
  }

}

exports.OptimizedKey = OptimizedKey;

function evalOptCurve(t, coefs) {
  return t * (t * (t * coefs[0] + coefs[1]) + coefs[2]) + coefs[3];
}
/**
 * @en
 * Describe a curve in which three times Hermite interpolation is used for each adjacent key frame.
 * @zh
 * 描述一条曲线，其中每个相邻关键帧采用三次hermite插值计算。
 */


class AnimationCurve {
  /**
   * @en
   * The key frame of the curve.
   * @zh
   * 曲线的关键帧。
   */

  /**
   * @en
   * Loop mode [[WrapMode]] when the sampling time exceeds the left end.
   * @zh
   * 当采样时间超出左端时采用的循环模式[[WrapMode]]。
   */

  /**
   * @en
   * Cycle mode [[WrapMode]] when the sampling time exceeds the right end.
   * @zh
   * 当采样时间超出右端时采用的循环模式[[WrapMode]]。
   */

  /**
   * 构造函数。
   * @param keyFrames 关键帧。
   */
  constructor(keyFrames = null) {
    this.keyFrames = void 0;
    this.preWrapMode = WrapMode.Loop;
    this.postWrapMode = WrapMode.Clamp;
    this.cachedKey = void 0;
    this.keyFrames = keyFrames || [].concat(AnimationCurve.defaultKF);
    this.cachedKey = new OptimizedKey();
  }
  /**
   * @en
   * Add a keyframe.
   * @zh
   * 添加一个关键帧。
   * @param keyFrame 关键帧。
   */


  addKey(keyFrame) {
    if (this.keyFrames == null) {
      this.keyFrames = [];
    }

    this.keyFrames.push(keyFrame);
  }
  /**
   * @ignore
   * @param time
   */


  evaluate_slow(time) {
    let wrappedTime = time;
    const wrapMode = time < 0 ? this.preWrapMode : this.postWrapMode;
    const startTime = this.keyFrames[0].time;
    const endTime = this.keyFrames[this.keyFrames.length - 1].time;

    switch (wrapMode) {
      case WrapMode.Loop:
        wrappedTime = (0, _utils.repeat)(time - startTime, endTime - startTime) + startTime;
        break;

      case WrapMode.PingPong:
        wrappedTime = (0, _utils.pingPong)(time - startTime, endTime - startTime) + startTime;
        break;

      case WrapMode.Default:
      case WrapMode.Normal:
      case WrapMode.Clamp:
        wrappedTime = (0, _utils.clamp)(time, startTime, endTime);
        break;

      default:
        wrappedTime = (0, _utils.clamp)(time, startTime, endTime);
        break;
    }

    let preKFIndex = 0;

    if (wrappedTime > this.keyFrames[0].time) {
      if (wrappedTime >= this.keyFrames[this.keyFrames.length - 1].time) {
        preKFIndex = this.keyFrames.length - 2;
      } else {
        for (let i = 0; i < this.keyFrames.length - 1; i++) {
          if (wrappedTime >= this.keyFrames[0].time && wrappedTime <= this.keyFrames[i + 1].time) {
            preKFIndex = i;
            break;
          }
        }
      }
    }

    const keyframe0 = this.keyFrames[preKFIndex];
    const keyframe1 = this.keyFrames[preKFIndex + 1];
    const t = (0, _utils.inverseLerp)(keyframe0.time, keyframe1.time, wrappedTime);
    const dt = keyframe1.time - keyframe0.time;
    const m0 = keyframe0.outTangent * dt;
    const m1 = keyframe1.inTangent * dt;
    const t2 = t * t;
    const t3 = t2 * t;
    const a = 2 * t3 - 3 * t2 + 1;
    const b = t3 - 2 * t2 + t;
    const c = t3 - t2;
    const d = -2 * t3 + 3 * t2;
    return a * keyframe0.value + b * m0 + c * m1 + d * keyframe1.value;
  }
  /**
   * @en
   * Calculate the curve interpolation at a given point in time.
   * @zh
   * 计算给定时间点的曲线插值。
   * @param time 时间。
   */


  evaluate(time) {
    let wrappedTime = time;
    const wrapMode = time < 0 ? this.preWrapMode : this.postWrapMode;
    const startTime = this.keyFrames[0].time;
    const endTime = this.keyFrames[this.keyFrames.length - 1].time;

    switch (wrapMode) {
      case WrapMode.Loop:
        wrappedTime = (0, _utils.repeat)(time - startTime, endTime - startTime) + startTime;
        break;

      case WrapMode.PingPong:
        wrappedTime = (0, _utils.pingPong)(time - startTime, endTime - startTime) + startTime;
        break;

      case WrapMode.Default:
      case WrapMode.Normal:
      case WrapMode.Clamp:
        wrappedTime = (0, _utils.clamp)(time, startTime, endTime);
        break;

      default:
        wrappedTime = (0, _utils.clamp)(time, startTime, endTime);
        break;
    }

    if (wrappedTime >= this.cachedKey.time && wrappedTime < this.cachedKey.endTime) {
      return this.cachedKey.evaluate(wrappedTime);
    }

    const leftIndex = this.findIndex(this.cachedKey, wrappedTime);
    const rightIndex = Math.min(leftIndex + 1, this.keyFrames.length - 1);
    this.calcOptimizedKey(this.cachedKey, leftIndex, rightIndex);
    return this.cachedKey.evaluate(wrappedTime);
  }
  /**
   * @ignore
   * @param optKey
   * @param leftIndex
   * @param rightIndex
   */


  calcOptimizedKey(optKey, leftIndex, rightIndex) {
    const lhs = this.keyFrames[leftIndex];
    const rhs = this.keyFrames[rightIndex];
    optKey.index = leftIndex;
    optKey.time = lhs.time;
    optKey.endTime = rhs.time;
    const dx = rhs.time - lhs.time;
    const dy = rhs.value - lhs.value;
    const length = 1 / (dx * dx);
    const d1 = lhs.outTangent * dx;
    const d2 = rhs.inTangent * dx;
    optKey.coefficient[0] = (d1 + d2 - dy - dy) * length / dx;
    optKey.coefficient[1] = (dy + dy + dy - d1 - d1 - d2) * length;
    optKey.coefficient[2] = lhs.outTangent;
    optKey.coefficient[3] = lhs.value;
  }
  /**
   * @ignore
   * @param optKey
   * @param t
   */


  findIndex(optKey, t) {
    const cachedIndex = optKey.index;

    if (cachedIndex !== -1) {
      const cachedTime = this.keyFrames[cachedIndex].time;

      if (t > cachedTime) {
        for (let i = 0; i < LOOK_FORWARD; i++) {
          const currIndex = cachedIndex + i;

          if (currIndex + 1 < this.keyFrames.length && this.keyFrames[currIndex + 1].time > t) {
            return currIndex;
          }
        }
      } else {
        for (let i = 0; i < LOOK_FORWARD; i++) {
          const currIndex = cachedIndex - i;

          if (currIndex >= 0 && this.keyFrames[currIndex - 1].time <= t) {
            return currIndex - 1;
          }
        }
      }
    }

    let left = 0;
    let right = this.keyFrames.length;
    let mid;

    while (right - left > 1) {
      mid = Math.floor((left + right) / 2);

      if (this.keyFrames[mid].time >= t) {
        right = mid;
      } else {
        left = mid;
      }
    }

    return left;
  }

}

exports.AnimationCurve = AnimationCurve;
AnimationCurve.defaultKF = [{
  time: 0,
  value: 1,
  inTangent: 0,
  outTangent: 0
}, {
  time: 1,
  value: 1,
  inTangent: 0,
  outTangent: 0
}];

_class.CCClass.fastDefine('cc.AnimationCurve', AnimationCurve, {
  preWrapMode: WrapMode.Default,
  postWrapMode: WrapMode.Default,
  keyFrames: []
});