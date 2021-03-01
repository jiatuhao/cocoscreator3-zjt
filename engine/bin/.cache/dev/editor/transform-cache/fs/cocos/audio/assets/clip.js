"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioClip = exports.AudioType = void 0;

var _index = require("../../core/data/decorators/index.js");

var _asset = require("../../core/assets/asset.js");

var _index2 = require("../../core/value-types/index.js");

var _player = require("./player.js");

var _playerDom = require("./player-dom.js");

var _playerWeb = require("./player-web.js");

var _globalExports = require("../../core/global-exports.js");

var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

const AudioType = (0, _index2.Enum)({
  WEB_AUDIO: 0,
  DOM_AUDIO: 1,
  JSB_AUDIO: 2,
  UNKNOWN_AUDIO: 3
});
/**
 * @en
 * The audio clip asset. <br>
 * 'started' event is emitted once the audio began to play. <br>
 * 'ended' event is emitted once the audio stopped. <br>
 * Low-level platform-specific details are handled independently inside each clip.
 * @zh
 * 音频片段资源。<br>
 * 每当音频片段实际开始播放时，会发出 'started' 事件；<br>
 * 每当音频片段自然结束播放时，会发出 'ended' 事件。<br>
 * 每个片段独立处理自己依赖的平台相关的底层细节。
 */

exports.AudioType = AudioType;
let AudioClip = (_dec = (0, _index.ccclass)('cc.AudioClip'), _dec2 = (0, _index.type)(AudioType), _dec(_class = (_class2 = (_temp = _class3 = class AudioClip extends _asset.Asset {
  // we serialize this because it's unavailable at runtime on some platforms
  constructor() {
    super();

    _initializerDefineProperty(this, "_duration", _descriptor, this);

    _initializerDefineProperty(this, "_loadMode", _descriptor2, this);

    this._nativeAudio = null;
    this._player = null;
    this.loaded = false;
  }

  destroy() {
    if (this._player) {
      this._player.destroy();
    }

    return super.destroy();
  }

  set _nativeAsset(nativeAudio) {
    this._nativeAudio = nativeAudio;

    if (nativeAudio) {
      const ctor = this._getPlayer(nativeAudio);

      this._player = new ctor({
        nativeAudio,
        duration: this._duration,
        audioClip: this
      });
      this.loaded = true;
      this.emit('load');
    } else {
      this._player = null;
      this._loadMode = AudioType.UNKNOWN_AUDIO;
      this._duration = 0;
      this.loaded = false;
    }
  }

  get _nativeAsset() {
    return this._nativeAudio;
  }

  get _nativeDep() {
    return {
      uuid: this._uuid,
      audioLoadMode: this.loadMode,
      ext: this._native,
      __isNative__: true
    };
  }

  get loadMode() {
    return this._loadMode;
  }

  get state() {
    return this._player ? this._player.getState() : _player.PlayingState.INITIALIZING;
  }

  play() {
    if (this._player) {
      this._player.play();
    }
  }

  pause() {
    if (this._player) {
      this._player.pause();
    }
  }

  stop() {
    if (this._player) {
      this._player.stop();
    }
  }

  playOneShot(volume) {
    if (this._player) {
      this._player.playOneShot(volume);
    }
  }

  setCurrentTime(val) {
    if (this._player) {
      this._player.setCurrentTime(val);
    }
  }

  getCurrentTime() {
    if (this._player) {
      return this._player.getCurrentTime();
    }

    return 0;
  }

  getDuration() {
    if (this._player) {
      return this._player.getDuration();
    }

    return this._duration;
  }

  setVolume(val, immediate) {
    if (this._player) {
      this._player.setVolume(val, immediate || false);
    }
  }

  getVolume() {
    if (this._player) {
      return this._player.getVolume();
    }

    return 1;
  }

  setLoop(val) {
    if (this._player) {
      this._player.setLoop(val);
    }
  }

  getLoop() {
    if (this._player) {
      return this._player.getLoop();
    }

    return false;
  }

  _getPlayer(clip) {
    let ctor;

    if (typeof AudioBuffer !== 'undefined' && clip instanceof AudioBuffer) {
      ctor = _playerWeb.AudioPlayerWeb;
      this._loadMode = AudioType.WEB_AUDIO;
    } else {
      ctor = _playerDom.AudioPlayerDOM;
      this._loadMode = AudioType.DOM_AUDIO;
    }

    return ctor;
  }

}, _class3.PlayingState = _player.PlayingState, _class3.AudioType = AudioType, _class3.preventDeferredLoadDependents = true, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_duration", [_index.serializable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_loadMode", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return AudioType.UNKNOWN_AUDIO;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_nativeDep", [_index.override], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeDep"), _class2.prototype)), _class2)) || _class);
exports.AudioClip = AudioClip;
_globalExports.legacyCC.AudioClip = AudioClip;