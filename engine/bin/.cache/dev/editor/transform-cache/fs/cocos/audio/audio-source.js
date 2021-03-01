"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioSource = void 0;

var _index = require("../core/data/decorators/index.js");

var _component = require("../core/components/component.js");

var _index2 = require("../core/math/index.js");

var _clip = require("./assets/clip.js");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/**
 * @en
 * A representation of a single audio source, <br>
 * contains basic functionalities like play, pause and stop.
 * @zh
 * 音频组件，代表单个音源，提供播放、暂停、停止等基本功能。
 */
let AudioSource = (_dec = (0, _index.ccclass)('cc.AudioSource'), _dec2 = (0, _index.help)('i18n:cc.AudioSource'), _dec3 = (0, _index.menu)('Audio/AudioSource'), _dec4 = (0, _index.type)(_clip.AudioClip), _dec5 = (0, _index.type)(_clip.AudioClip), _dec6 = (0, _index.tooltip)('i18n:audio.clip'), _dec7 = (0, _index.tooltip)('i18n:audio.loop'), _dec8 = (0, _index.tooltip)('i18n:audio.playOnAwake'), _dec9 = (0, _index.range)([0.0, 1.0]), _dec10 = (0, _index.tooltip)('i18n:audio.volume'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = class AudioSource extends _component.Component {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "_clip", _descriptor, this);

    _initializerDefineProperty(this, "_loop", _descriptor2, this);

    _initializerDefineProperty(this, "_playOnAwake", _descriptor3, this);

    _initializerDefineProperty(this, "_volume", _descriptor4, this);

    this._cachedCurrentTime = 0;
  }

  /**
   * @en
   * The default AudioClip to be played for this audio source.
   * @zh
   * 设定要播放的音频。
   */
  set clip(val) {
    this._clip = val;

    this._syncStates();
  }

  get clip() {
    return this._clip;
  }
  /**
   * @en
   * Is looping enabled for this audio source?
   * @zh
   * 是否循环播放音频？
   */


  set loop(val) {
    this._loop = val;

    if (this._clip) {
      this._clip.setLoop(val);
    }
  }

  get loop() {
    return this._loop;
  }
  /**
   * @en
   * Is the autoplay enabled? <br>
   * Note that for most platform autoplay will only start <br>
   * after a user gesture is received, according to the latest autoplay policy: <br>
   * https://www.chromium.org/audio-video/autoplay
   * @zh
   * 是否启用自动播放。 <br>
   * 请注意，根据最新的自动播放策略，现在对大多数平台，自动播放只会在第一次收到用户输入后生效。 <br>
   * 参考：https://www.chromium.org/audio-video/autoplay
   */


  set playOnAwake(val) {
    this._playOnAwake = val;
  }

  get playOnAwake() {
    return this._playOnAwake;
  }
  /**
   * @en
   * The volume of this audio source (0.0 to 1.0).<br>
   * Note: Volume control may be ineffective on some platforms.
   * @zh
   * 音频的音量（大小范围为 0.0 到 1.0）。<br>
   * 请注意，在某些平台上，音量控制可能不起效。<br>
   */


  set volume(val) {
    if (Number.isNaN(val)) {
      console.warn('illegal audio volume!');
      return;
    }

    val = (0, _index2.clamp)(val, 0, 1);

    if (this._clip) {
      this._clip.setVolume(val); // on some platform volume control may not be available


      this._volume = this._clip.getVolume();
    } else {
      this._volume = val;
    }
  }

  get volume() {
    return this._volume;
  }

  onLoad() {
    this._syncStates();
  }

  onEnable() {
    if (this._playOnAwake) {
      this.play();
    }
  }

  onDisable() {
    this.pause();
  }

  onDestroy() {
    this.stop();
  }
  /**
   * @en
   * Play the clip.<br>
   * Restart if already playing.<br>
   * Resume if paused.
   * @zh
   * 开始播放。<br>
   * 如果音频处于正在播放状态，将会重新开始播放音频。<br>
   * 如果音频处于暂停状态，则会继续播放音频。
   */


  play() {
    if (!this._clip) {
      return;
    }

    this._clip.play();
  }
  /**
   * @en
   * Pause the clip.
   * @zh
   * 暂停播放。
   */


  pause() {
    if (!this._clip) {
      return;
    }

    this._clip.pause();
  }
  /**
   * @en
   * Stop the clip.
   * @zh
   * 停止播放。
   */


  stop() {
    if (!this._clip) {
      return;
    }

    this._clip.stop();
  }
  /**
   * @en
   * Plays an AudioClip, and scales volume by volumeScale.<br>
   * Note: for multiple playback on the same clip, the actual behavior is platform-specific.<br>
   * Re-start style fallback will be used if the underlying platform doesn't support it.
   * @zh
   * 以指定音量播放一个音频一次。<br>
   * 注意，对同一个音频片段，不同平台多重播放效果存在差异。<br>
   * 对不支持的平台，如前一次尚未播完，则会立即重新播放。
   * @param clip The audio clip to be played.
   * @param volumeScale volume scaling factor wrt. current value.
   */


  playOneShot(clip, volumeScale = 1) {
    clip.playOneShot(this._volume * volumeScale);
  }

  _syncStates() {
    if (!this._clip) {
      return;
    }

    this._clip.setCurrentTime(this._cachedCurrentTime);

    this._clip.setLoop(this._loop);

    this._clip.setVolume(this._volume, true);

    this._volume = this._clip.getVolume();
  }
  /**
   * @en
   * Set current playback time, in seconds.
   * @zh
   * 以秒为单位设置当前播放时间。
   * @param num playback time to jump to.
   */


  set currentTime(num) {
    if (Number.isNaN(num)) {
      console.warn('illegal audio time!');
      return;
    }

    num = (0, _index2.clamp)(num, 0, this.duration);
    this._cachedCurrentTime = num;

    if (!this._clip) {
      return;
    }

    this._clip.setCurrentTime(this._cachedCurrentTime);
  }
  /**
   * @en
   * Get the current playback time, in seconds.
   * @zh
   * 以秒为单位获取当前播放时间。
   */


  get currentTime() {
    if (!this._clip) {
      return this._cachedCurrentTime;
    }

    return this._clip.getCurrentTime();
  }
  /**
   * @en
   * Get the audio duration, in seconds.
   * @zh
   * 获取以秒为单位的音频总时长。
   */


  get duration() {
    if (!this._clip) {
      return 0;
    }

    return this._clip.getDuration();
  }
  /**
   * @en
   * Get current audio state.
   * @zh
   * 获取当前音频状态。
   */


  get state() {
    if (!this._clip) {
      return _clip.AudioClip.PlayingState.INITIALIZING;
    }

    return this._clip.state;
  }
  /**
   * @en
   * Is the audio currently playing?
   * @zh
   * 当前音频是否正在播放？
   */


  get playing() {
    return this.state === _clip.AudioClip.PlayingState.PLAYING;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_clip", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_loop", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_playOnAwake", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_volume", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 1;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "clip"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "loop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "playOnAwake", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "playOnAwake"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "volume", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "volume"), _class2.prototype)), _class2)) || _class) || _class) || _class);
exports.AudioSource = AudioSource;