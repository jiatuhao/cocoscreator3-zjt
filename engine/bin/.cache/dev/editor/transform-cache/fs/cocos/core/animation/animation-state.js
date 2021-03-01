"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationState = exports.ICurveInstance = exports.EventType = void 0;

var _internal253Aconstants = require("../../../../virtual/internal%253Aconstants.js");

var _node = require("../scene-graph/node.js");

var _boundTarget = require("./bound-target.js");

var _playable = require("./playable.js");

var _types = require("./types.js");

var _targetPath = require("./target-path.js");

var _skeletalAnimationBlending = require("../../3d/skeletal-animation/skeletal-animation-blending.js");

var _globalExports = require("../global-exports.js");

var _enum = require("../value-types/enum.js");

/*
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

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
 * @module animation
 */

/**
 * @en The event type supported by Animation
 * @zh Animation 支持的事件类型。
 */
let EventType;
exports.EventType = EventType;

(function (EventType) {
  EventType["PLAY"] = "play";
  EventType["STOP"] = "stop";
  EventType["PAUSE"] = "pause";
  EventType["RESUME"] = "resume";
  EventType["LASTFRAME"] = "lastframe";
  EventType["FINISHED"] = "finished";
})(EventType || (exports.EventType = EventType = {}));

(0, _enum.ccenum)(EventType);

class ICurveInstance {
  constructor(runtimeCurve, target, boundTarget) {
    this.commonTargetIndex = void 0;
    this._curve = void 0;
    this._boundTarget = void 0;
    this._rootTargetProperty = void 0;
    this._curveDetail = void 0;
    this._curve = runtimeCurve.curve;
    this._curveDetail = runtimeCurve;
    this._boundTarget = boundTarget;
  }

  applySample(ratio, index, lerpRequired, samplerResultCache, weight) {
    if (this._curve.empty()) {
      return;
    }

    let value;

    if (!this._curve.hasLerp() || !lerpRequired) {
      value = this._curve.valueAt(index);
    } else {
      value = this._curve.valueBetween(ratio, samplerResultCache.from, samplerResultCache.fromRatio, samplerResultCache.to, samplerResultCache.toRatio);
    }

    this._setValue(value, weight);
  }

  _setValue(value, weight) {
    this._boundTarget.setValue(value);
  }

  get propertyName() {
    return this._rootTargetProperty || '';
  }

  get curveDetail() {
    return this._curveDetail;
  }

}
/**
 * The curves in ISamplerSharedGroup share a same keys.
 */


exports.ICurveInstance = ICurveInstance;

function makeSamplerSharedGroup(sampler) {
  return {
    sampler,
    curves: [],
    samplerResultCache: {
      from: 0,
      fromRatio: 0,
      to: 0,
      toRatio: 0
    }
  };
}

const InvalidIndex = -1;
/**
 * @en
 * The AnimationState gives full control over animation playback process.
 * In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.
 * @zh
 * AnimationState 完全控制动画播放过程。<br/>
 * 大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。
 *
 */

class AnimationState extends _playable.Playable {
  /**
   * @en The clip that is being played by this animation state.
   * @zh 此动画状态正在播放的剪辑。
   */
  get clip() {
    return this._clip;
  }
  /**
   * @en The name of the playing animation.
   * @zh 动画的名字。
   */


  get name() {
    return this._name;
  }

  get length() {
    return this.duration;
  }
  /**
   * @en
   * Wrapping mode of the playing animation.
   * Notice : dynamic change wrapMode will reset time and repeatCount property
   * @zh
   * 动画循环方式。
   * 需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount。
   * @default: WrapMode.Normal
   */


  get wrapMode() {
    return this._wrapMode;
  }

  set wrapMode(value) {
    this._wrapMode = value;

    if (_internal253Aconstants.EDITOR && !_globalExports.legacyCC.GAME_VIEW) {
      return;
    } // dynamic change wrapMode will need reset time to 0


    this.time = 0;

    if (value & _types.WrapModeMask.Loop) {
      this.repeatCount = Infinity;
    } else {
      this.repeatCount = 1;
    }
  }
  /**
   * @en The animation's iteration count property.
   *
   * A real number greater than or equal to zero (including positive infinity) representing the number of times
   * to repeat the animation node.
   *
   * Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
   * calculations.
   *
   * @zh 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）。
   *
   * @default 1
   */


  get repeatCount() {
    return this._repeatCount;
  }

  set repeatCount(value) {
    this._repeatCount = value;
    const shouldWrap = this._wrapMode & _types.WrapModeMask.ShouldWrap;
    const reverse = (this.wrapMode & _types.WrapModeMask.Reverse) === _types.WrapModeMask.Reverse;

    if (value === Infinity && !shouldWrap && !reverse) {
      this._process = this.simpleProcess;
    } else {
      this._process = this.process;
    }
  }
  /**
   * @en The start delay which represents the number of seconds from an animation's start time to the start of
   * the active interval.
   * @zh 延迟多少秒播放。
   * @default 0
   */


  get delay() {
    return this._delay;
  }

  set delay(value) {
    this._delayTime = this._delay = value;
  } // http://www.w3.org/TR/web-animations/#idl-def-AnimationTiming

  /**
   * @en The iteration duration of this animation in seconds. (length)
   * @zh 单次动画的持续时间，秒。（动画长度）
   * @readOnly
   */


  /**
   * @en Gets the time progress, in seconds.
   * @zh 获取动画的时间进度，单位为秒。
   */
  get current() {
    return this.getWrappedInfo(this.time).time;
  }
  /**
   * @en Gets the playback ratio.
   * @zh 获取动画播放的比例时间。
   */


  get ratio() {
    return this.current / this.duration;
  }
  /**
   * The weight.
   */


  constructor(clip, name = '') {
    super();
    this.duration = 1;
    this.speed = 1;
    this.time = 0;
    this.weight = 0;
    this.frameRate = 0;
    this._targetNode = null;
    this._curveLoaded = false;
    this._clip = void 0;
    this._process = this.process;
    this._samplerSharedGroups = [];
    this._target = null;
    this._ignoreIndex = InvalidIndex;
    this._commonTargetStatuses = [];
    this._wrapMode = _types.WrapMode.Normal;
    this._repeatCount = 1;
    this._delay = 0;
    this._delayTime = 0;
    this._currentFramePlayed = false;
    this._name = void 0;
    this._lastIterations = void 0;
    this._lastWrapInfo = null;
    this._lastWrapInfoEvent = null;
    this._wrappedInfo = new _types.WrappedInfo();
    this._blendStateBuffer = null;
    this._blendStateWriters = [];
    this._allowLastFrame = false;
    this._blendStateWriterHost = {
      weight: 0,
      enabled: false
    };
    this._clip = clip;
    this._name = name || clip && clip.name;
  }
  /**
   * This method is used for internal purpose only.
   */


  get curveLoaded() {
    return this._curveLoaded;
  }

  initialize(root, propertyCurves) {
    var _legacyCC$director$ge, _legacyCC$director$ge2;

    if (this._curveLoaded) {
      return;
    }

    this._curveLoaded = true;

    this._destroyBlendStateWriters();

    this._samplerSharedGroups.length = 0;
    this._blendStateBuffer = (_legacyCC$director$ge = (_legacyCC$director$ge2 = _globalExports.legacyCC.director.getAnimationManager()) === null || _legacyCC$director$ge2 === void 0 ? void 0 : _legacyCC$director$ge2.blendState) !== null && _legacyCC$director$ge !== void 0 ? _legacyCC$director$ge : null;

    if (this._blendStateBuffer) {
      this._blendStateBuffer.bindState(this);
    }

    this._targetNode = root;
    const clip = this._clip;
    this.duration = clip.duration;
    this.speed = clip.speed;
    this.wrapMode = clip.wrapMode;
    this.frameRate = clip.sample;

    if ((this.wrapMode & _types.WrapModeMask.Loop) === _types.WrapModeMask.Loop) {
      this.repeatCount = Infinity;
    } else {
      this.repeatCount = 1;
    }
    /**
     * Create the bound target. Especially optimized for skeletal case.
     */


    const createBoundTargetOptimized = (createFn, rootTarget, path, valueAdapter, isConstant) => {
      if (!isTargetingTRS(path) || !this._blendStateBuffer) {
        return createFn(rootTarget, path, valueAdapter);
      } else {
        const targetNode = (0, _targetPath.evaluatePath)(rootTarget, ...path.slice(0, path.length - 1));

        if (targetNode !== null && targetNode instanceof _node.Node) {
          const propertyName = path[path.length - 1];
          const blendStateWriter = (0, _skeletalAnimationBlending.createBlendStateWriter)(this._blendStateBuffer, targetNode, propertyName, this._blendStateWriterHost, isConstant);

          this._blendStateWriters.push(blendStateWriter);

          return createFn(rootTarget, [], blendStateWriter);
        }
      }

      return null;
    };

    this._commonTargetStatuses = clip.commonTargets.map((commonTarget, index) => {
      const target = createBoundTargetOptimized(_boundTarget.createBufferedTarget, root, commonTarget.modifiers, commonTarget.valueAdapter, false);

      if (target === null) {
        return null;
      } else {
        return {
          target,
          changed: false
        };
      }
    });

    if (!propertyCurves) {
      propertyCurves = clip.getPropertyCurves();
    }

    for (let iPropertyCurve = 0; iPropertyCurve < propertyCurves.length; ++iPropertyCurve) {
      const propertyCurve = propertyCurves[iPropertyCurve];

      let samplerSharedGroup = this._samplerSharedGroups.find(value => value.sampler === propertyCurve.sampler);

      if (!samplerSharedGroup) {
        samplerSharedGroup = makeSamplerSharedGroup(propertyCurve.sampler);

        this._samplerSharedGroups.push(samplerSharedGroup);
      }

      let rootTarget;

      if (typeof propertyCurve.commonTarget === 'undefined') {
        rootTarget = root;
      } else {
        const commonTargetStatus = this._commonTargetStatuses[propertyCurve.commonTarget];

        if (!commonTargetStatus) {
          continue;
        }

        rootTarget = commonTargetStatus.target.peek();
      }

      const boundTarget = createBoundTargetOptimized(_boundTarget.createBoundTarget, rootTarget, propertyCurve.modifiers, propertyCurve.valueAdapter, propertyCurve.curve.constant());

      if (boundTarget === null) {// warn(`Failed to bind "${root.name}" to curve in clip ${clip.name}: ${err}`);
      } else {
        const curveInstance = new ICurveInstance(propertyCurve, rootTarget, boundTarget);
        curveInstance.commonTargetIndex = propertyCurve.commonTarget;
        samplerSharedGroup.curves.push(curveInstance);
      }
    }
  }

  destroy() {
    this._destroyBlendStateWriters();
  }
  /**
   * @private
   */


  onBlendFinished() {
    this._blendStateWriterHost.enabled = false;
  }
  /**
   * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
   * To process animation events, use `Animation` instead.
   */


  emit(...args) {
    _globalExports.legacyCC.director.getAnimationManager().pushDelayEvent(this._emit, this, args);
  }
  /**
   * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
   * To process animation events, use `Animation` instead.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types


  on(type, callback, target) {
    if (this._target && this._target.isValid) {
      return this._target.on(type, callback, target);
    } else {
      return null;
    }
  }
  /**
   * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
   * To process animation events, use `Animation` instead.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types


  once(type, callback, target) {
    if (this._target && this._target.isValid) {
      return this._target.once(type, callback, target);
    } else {
      return null;
    }
  }
  /**
   * @deprecated Since V1.1.1, animation states were no longer defined as event targets.
   * To process animation events, use `Animation` instead.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types


  off(type, callback, target) {
    if (this._target && this._target.isValid) {
      this._target.off(type, callback, target);
    }
  }
  /**
   * @zh
   * 是否允许触发 `LastFrame` 事件。
   * 该方法仅用作内部用途。
   * @en
   * Whether `LastFrame` should be triggered.
   * @param allowed True if the last frame events may be triggered.
   * This method is only used for internal purpose only.
   */


  allowLastFrameEvent(allowed) {
    this._allowLastFrame = allowed;
  }
  /**
   * This method is used for internal purpose only.
   */


  _setEventTarget(target) {
    this._target = target;
  }

  setTime(time) {
    this._currentFramePlayed = false;
    this.time = time || 0;

    if (!_internal253Aconstants.EDITOR || _globalExports.legacyCC.GAME_VIEW) {
      this._lastWrapInfoEvent = null;
      this._ignoreIndex = InvalidIndex;
      const info = this.getWrappedInfo(time, this._wrappedInfo);
      const direction = info.direction;

      let frameIndex = this._clip.getEventGroupIndexAtRatio(info.ratio); // only ignore when time not on a frame index


      if (frameIndex < 0) {
        frameIndex = ~frameIndex - 1; // if direction is inverse, then increase index

        if (direction < 0) {
          frameIndex += 1;
        }

        this._ignoreIndex = frameIndex;
      }
    }
  }

  update(delta) {
    // calculate delay time
    if (this._delayTime > 0) {
      this._delayTime -= delta;

      if (this._delayTime > 0) {
        // still waiting
        return;
      }
    } // make first frame perfect
    // var playPerfectFirstFrame = (this.time === 0);


    if (this._currentFramePlayed) {
      this.time += delta * this.speed;
    } else {
      this._currentFramePlayed = true;
    }

    this._process();
  }

  sample() {
    const info = this.getWrappedInfo(this.time, this._wrappedInfo);

    this._sampleCurves(info.ratio);

    if (!_internal253Aconstants.EDITOR || _globalExports.legacyCC.GAME_VIEW) {
      this._sampleEvents(info);
    }

    return info;
  }

  onPlay() {
    this.setTime(0);
    this._delayTime = this._delay;

    this._onReplayOrResume();

    this.emit(EventType.PLAY, this);
  }

  onStop() {
    if (!this.isPaused) {
      this._onPauseOrStop();
    }

    this.emit(EventType.STOP, this);
  }

  onResume() {
    this._onReplayOrResume();

    this.emit(EventType.RESUME, this);
  }

  onPause() {
    this._onPauseOrStop();

    this.emit(EventType.PAUSE, this);
  }

  _sampleCurves(ratio) {
    this._blendStateWriterHost.weight = this.weight;
    this._blendStateWriterHost.enabled = true; // Before we sample, we pull values of common targets.

    for (let iCommonTarget = 0; iCommonTarget < this._commonTargetStatuses.length; ++iCommonTarget) {
      const commonTargetStatus = this._commonTargetStatuses[iCommonTarget];

      if (!commonTargetStatus) {
        continue;
      }

      commonTargetStatus.target.pull();
      commonTargetStatus.changed = false;
    }

    for (let iSamplerSharedGroup = 0, szSamplerSharedGroup = this._samplerSharedGroups.length; iSamplerSharedGroup < szSamplerSharedGroup; ++iSamplerSharedGroup) {
      const samplerSharedGroup = this._samplerSharedGroups[iSamplerSharedGroup];
      const sampler = samplerSharedGroup.sampler;
      const {
        samplerResultCache
      } = samplerSharedGroup;
      let index = 0;
      let lerpRequired = false;

      if (!sampler) {
        index = 0;
      } else {
        index = sampler.sample(ratio);

        if (index < 0) {
          index = ~index;

          if (index <= 0) {
            index = 0;
          } else if (index >= sampler.ratios.length) {
            index = sampler.ratios.length - 1;
          } else {
            lerpRequired = true;
            samplerResultCache.from = index - 1;
            samplerResultCache.fromRatio = sampler.ratios[samplerResultCache.from];
            samplerResultCache.to = index;
            samplerResultCache.toRatio = sampler.ratios[samplerResultCache.to];
            index = samplerResultCache.from;
          }
        }
      }

      for (let iCurveInstance = 0, szCurves = samplerSharedGroup.curves.length; iCurveInstance < szCurves; ++iCurveInstance) {
        const curveInstance = samplerSharedGroup.curves[iCurveInstance];
        curveInstance.applySample(ratio, index, lerpRequired, samplerResultCache, this.weight);

        if (curveInstance.commonTargetIndex !== undefined) {
          const commonTargetStatus = this._commonTargetStatuses[curveInstance.commonTargetIndex];

          if (commonTargetStatus) {
            commonTargetStatus.changed = true;
          }
        }
      }
    } // After sample, we push values of common targets.


    for (let iCommonTarget = 0; iCommonTarget < this._commonTargetStatuses.length; ++iCommonTarget) {
      const commonTargetStatus = this._commonTargetStatuses[iCommonTarget];

      if (!commonTargetStatus) {
        continue;
      }

      if (commonTargetStatus.changed) {
        commonTargetStatus.target.push();
      }
    }
  }

  process() {
    // sample
    const info = this.sample();

    if (this._allowLastFrame) {
      let lastInfo;

      if (!this._lastWrapInfo) {
        lastInfo = this._lastWrapInfo = new _types.WrappedInfo(info);
      } else {
        lastInfo = this._lastWrapInfo;
      }

      if (this.repeatCount > 1 && (info.iterations | 0) > (lastInfo.iterations | 0)) {
        this.emit(EventType.LASTFRAME, this);
      }

      lastInfo.set(info);
    }

    if (info.stopped) {
      this.stop();
      this.emit(EventType.FINISHED, this);
    }
  }

  simpleProcess() {
    const duration = this.duration;
    let time = this.time % duration;

    if (time < 0) {
      time += duration;
    }

    const ratio = time / duration;

    this._sampleCurves(ratio);

    if (!_internal253Aconstants.EDITOR || _globalExports.legacyCC.GAME_VIEW) {
      if (this._clip.hasEvents()) {
        this._sampleEvents(this.getWrappedInfo(this.time, this._wrappedInfo));
      }
    }

    if (this._allowLastFrame) {
      if (this._lastIterations === undefined) {
        this._lastIterations = ratio;
      }

      if (this.time > 0 && this._lastIterations > ratio || this.time < 0 && this._lastIterations < ratio) {
        this.emit(EventType.LASTFRAME, this);
      }

      this._lastIterations = ratio;
    }
  }

  cache(frames) {}

  _needReverse(currentIterations) {
    const wrapMode = this.wrapMode;
    let needReverse = false;

    if ((wrapMode & _types.WrapModeMask.PingPong) === _types.WrapModeMask.PingPong) {
      const isEnd = currentIterations - (currentIterations | 0) === 0;

      if (isEnd && currentIterations > 0) {
        currentIterations -= 1;
      }

      const isOddIteration = currentIterations & 1;

      if (isOddIteration) {
        needReverse = !needReverse;
      }
    }

    if ((wrapMode & _types.WrapModeMask.Reverse) === _types.WrapModeMask.Reverse) {
      needReverse = !needReverse;
    }

    return needReverse;
  }

  getWrappedInfo(time, info) {
    info = info || new _types.WrappedInfo();
    let stopped = false;
    const duration = this.duration;
    const repeatCount = this.repeatCount;
    let currentIterations = time > 0 ? time / duration : -(time / duration);

    if (currentIterations >= repeatCount) {
      currentIterations = repeatCount;
      stopped = true;
      let tempRatio = repeatCount - (repeatCount | 0);

      if (tempRatio === 0) {
        tempRatio = 1; // 如果播放过，动画不复位
      }

      time = tempRatio * duration * (time > 0 ? 1 : -1);
    }

    if (time > duration) {
      const tempTime = time % duration;
      time = tempTime === 0 ? duration : tempTime;
    } else if (time < 0) {
      time %= duration;

      if (time !== 0) {
        time += duration;
      }
    }

    let needReverse = false;
    const shouldWrap = this._wrapMode & _types.WrapModeMask.ShouldWrap;

    if (shouldWrap) {
      needReverse = this._needReverse(currentIterations);
    }

    let direction = needReverse ? -1 : 1;

    if (this.speed < 0) {
      direction *= -1;
    } // calculate wrapped time


    if (shouldWrap && needReverse) {
      time = duration - time;
    }

    info.ratio = time / duration;
    info.time = time;
    info.direction = direction;
    info.stopped = stopped;
    info.iterations = currentIterations;
    return info;
  }

  _sampleEvents(wrapInfo) {
    const length = this._clip.eventGroups.length;
    let direction = wrapInfo.direction;

    let eventIndex = this._clip.getEventGroupIndexAtRatio(wrapInfo.ratio);

    if (eventIndex < 0) {
      eventIndex = ~eventIndex - 1; // If direction is inverse, increase index.

      if (direction < 0) {
        eventIndex += 1;
      }
    }

    if (this._ignoreIndex !== eventIndex) {
      this._ignoreIndex = InvalidIndex;
    }

    wrapInfo.frameIndex = eventIndex;

    if (!this._lastWrapInfoEvent) {
      this._fireEvent(eventIndex);

      this._lastWrapInfoEvent = new _types.WrappedInfo(wrapInfo);
      return;
    }

    const wrapMode = this.wrapMode;
    const currentIterations = wrapIterations(wrapInfo.iterations);
    const lastWrappedInfo = this._lastWrapInfoEvent;
    let lastIterations = wrapIterations(lastWrappedInfo.iterations);
    let lastIndex = lastWrappedInfo.frameIndex;
    const lastDirection = lastWrappedInfo.direction;
    const iterationsChanged = lastIterations !== -1 && currentIterations !== lastIterations;

    if (lastIndex === eventIndex && iterationsChanged && length === 1) {
      this._fireEvent(0);
    } else if (lastIndex !== eventIndex || iterationsChanged) {
      direction = lastDirection;

      do {
        if (lastIndex !== eventIndex) {
          if (direction === -1 && lastIndex === 0 && eventIndex > 0) {
            if ((wrapMode & _types.WrapModeMask.PingPong) === _types.WrapModeMask.PingPong) {
              direction *= -1;
            } else {
              lastIndex = length;
            }

            lastIterations++;
          } else if (direction === 1 && lastIndex === length - 1 && eventIndex < length - 1) {
            if ((wrapMode & _types.WrapModeMask.PingPong) === _types.WrapModeMask.PingPong) {
              direction *= -1;
            } else {
              lastIndex = -1;
            }

            lastIterations++;
          }

          if (lastIndex === eventIndex) {
            break;
          }

          if (lastIterations > currentIterations) {
            break;
          }
        }

        lastIndex += direction;

        _globalExports.legacyCC.director.getAnimationManager().pushDelayEvent(this._fireEvent, this, [lastIndex]);
      } while (lastIndex !== eventIndex && lastIndex > -1 && lastIndex < length);
    }

    this._lastWrapInfoEvent.set(wrapInfo);
  }

  _emit(type, state) {
    if (this._target && this._target.isValid) {
      this._target.emit(type, type, state);
    }
  }

  _fireEvent(index) {
    if (!this._targetNode || !this._targetNode.isValid) {
      return;
    }

    const {
      eventGroups
    } = this._clip;

    if (index < 0 || index >= eventGroups.length || this._ignoreIndex === index) {
      return;
    }

    const eventGroup = eventGroups[index];
    const components = this._targetNode.components;

    for (const event of eventGroup.events) {
      const {
        functionName
      } = event;

      for (const component of components) {
        const fx = component[functionName];

        if (typeof fx === 'function') {
          fx.apply(component, event.parameters);
        }
      }
    }
  }

  _onReplayOrResume() {
    _globalExports.legacyCC.director.getAnimationManager().addAnimation(this);
  }

  _onPauseOrStop() {
    _globalExports.legacyCC.director.getAnimationManager().removeAnimation(this);
  }

  _destroyBlendStateWriters() {
    for (let iBlendStateWriter = 0; iBlendStateWriter < this._blendStateWriters.length; ++iBlendStateWriter) {
      this._blendStateWriters[iBlendStateWriter].destroy();
    }

    this._blendStateWriters.length = 0;

    if (this._blendStateBuffer) {
      this._blendStateBuffer.unbindState(this);

      this._blendStateBuffer = null;
    }

    this._blendStateWriterHost.enabled = false;
  }

}

exports.AnimationState = AnimationState;

function isTargetingTRS(path) {
  let prs;

  if (path.length === 1 && typeof path[0] === 'string') {
    prs = path[0];
  } else if (path.length > 1) {
    for (let i = 0; i < path.length - 1; ++i) {
      if (!(path[i] instanceof _targetPath.HierarchyPath)) {
        return false;
      }
    }

    prs = path[path.length - 1];
  }

  switch (prs) {
    case 'position':
    case 'scale':
    case 'rotation':
    case 'eulerAngles':
      return true;

    default:
      return false;
  }
}

function wrapIterations(iterations) {
  if (iterations - (iterations | 0) === 0) {
    iterations -= 1;
  }

  return iterations | 0;
}

_globalExports.legacyCC.AnimationState = AnimationState;