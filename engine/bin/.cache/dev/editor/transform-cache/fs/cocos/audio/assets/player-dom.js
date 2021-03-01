"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayerDOM = void 0;

var _utils = require("../../core/math/utils.js");

var _player = require("./player.js");

var _globalExports = require("../../core/global-exports.js");

var _audioUtils = require("../audio-utils.js");

var _audioManager = require("./audio-manager.js");

/*
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

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
 * @module component/audio
 */
class AudioManagerDom extends _audioManager.AudioManager {
  discardOnePlayingIfNeeded() {
    if (this._playingAudios.length < _audioManager.AudioManager.maxAudioChannel) {
      return;
    } // a played audio has a higher priority than a played shot


    let audioToDiscard;

    const oldestOneShotIndex = this._playingAudios.findIndex(audio => audio instanceof HTMLAudioElement);

    if (oldestOneShotIndex > -1) {
      audioToDiscard = this._playingAudios[oldestOneShotIndex];

      this._playingAudios.splice(oldestOneShotIndex, 1);

      audioToDiscard.pause();
      audioToDiscard.src = '';
    } else {
      var _ref;

      audioToDiscard = this._playingAudios.shift();
      (_ref = audioToDiscard) === null || _ref === void 0 ? void 0 : _ref.stop();
    }
  }

}

class AudioPlayerDOM extends _player.AudioPlayer {
  constructor(info) {
    super(info);
    this._volume = 1;
    this._loop = false;
    this._nativeAudio = void 0;
    this._cbRegistered = false;
    this._remove_cb = void 0;
    this._post_play = void 0;
    this._on_gesture = void 0;
    this._post_gesture = void 0;
    this._nativeAudio = info.nativeAudio;

    this._remove_cb = () => {
      if (!this._cbRegistered) {
        return;
      }

      _globalExports.legacyCC.game.canvas.removeEventListener('touchend', this._on_gesture);

      _globalExports.legacyCC.game.canvas.removeEventListener('mouseup', this._on_gesture);

      this._cbRegistered = false;
    };

    this._post_play = () => {
      this._state = _player.PlayingState.PLAYING;

      this._clip.emit('started');

      this._remove_cb(); // should remove callbacks after any success play


      AudioPlayerDOM._manager.addPlaying(this);
    };

    this._post_gesture = () => {
      if (this._interrupted) {
        this._post_play();

        this._interrupted = false;
      } else {
        this._nativeAudio.pause();

        this._nativeAudio.currentTime = 0;
      }
    };

    this._on_gesture = () => {
      if (!this._nativeAudio) {
        return;
      }

      const promise = this._nativeAudio.play();

      if (!promise) {
        // Chrome50/Firefox53 below
        // delay eval here to yield uniform behavior with other platforms
        this._state = _player.PlayingState.PLAYING;

        _globalExports.legacyCC.director.once(_globalExports.legacyCC.Director.EVENT_AFTER_UPDATE, this._post_gesture);

        return;
      }

      promise.then(this._post_gesture);

      this._remove_cb();
    };

    this._nativeAudio.volume = this._volume;
    this._nativeAudio.loop = this._loop; // callback on audio ended

    this._nativeAudio.addEventListener('ended', () => {
      this._state = _player.PlayingState.STOPPED;
      this._nativeAudio.currentTime = 0;

      this._clip.emit('ended');

      AudioPlayerDOM._manager.removePlaying(this);
    });
    /* play & stop immediately after receiving a gesture so that
       we can freely invoke play() outside event listeners later */


    _globalExports.legacyCC.game.canvas.addEventListener('touchend', this._on_gesture);

    _globalExports.legacyCC.game.canvas.addEventListener('mouseup', this._on_gesture);

    this._cbRegistered = true;
  }

  play() {
    if (!this._nativeAudio) {
      return;
    }

    if (this._blocking) {
      this._interrupted = true;
      return;
    }

    if (this._state === _player.PlayingState.PLAYING) {
      /* sometimes there is no way to update the playing state
      especially when player unplug earphones and the audio automatically stops
      so we need to force updating the playing state by pausing audio */
      this.pause(); // restart if already playing

      this.setCurrentTime(0);
    }

    AudioPlayerDOM._manager.discardOnePlayingIfNeeded();

    const promise = this._nativeAudio.play();

    if (!promise) {
      // delay eval here to yield uniform behavior with other platforms
      this._state = _player.PlayingState.PLAYING;

      _globalExports.legacyCC.director.once(_globalExports.legacyCC.Director.EVENT_AFTER_UPDATE, this._post_play);

      return;
    }

    promise.then(this._post_play).catch(() => {
      this._interrupted = true;
    });
  }

  pause() {
    if (!this._nativeAudio) {
      return;
    }

    this._interrupted = false;

    if (this._state !== _player.PlayingState.PLAYING) {
      return;
    }

    this._nativeAudio.pause();

    this._state = _player.PlayingState.STOPPED;

    AudioPlayerDOM._manager.removePlaying(this);
  }

  stop() {
    if (!this._nativeAudio) {
      return;
    }

    this._nativeAudio.currentTime = 0;
    this._interrupted = false;

    if (this._state !== _player.PlayingState.PLAYING) {
      return;
    }

    this._nativeAudio.pause();

    this._state = _player.PlayingState.STOPPED;

    AudioPlayerDOM._manager.removePlaying(this);
  }

  playOneShot(volume = 1) {
    (0, _audioUtils.createDomAudio)(this._nativeAudio.src).then(dom => {
      AudioPlayerDOM._manager.discardOnePlayingIfNeeded();

      dom.volume = volume;
      dom.play();

      AudioPlayerDOM._manager.addPlaying(dom);

      dom.addEventListener('ended', () => {
        AudioPlayerDOM._manager.removePlaying(dom);
      });
    }, errMsg => {
      console.error(errMsg);
    });
  }

  setCurrentTime(val) {
    if (!this._nativeAudio) {
      return;
    }

    this._nativeAudio.currentTime = (0, _utils.clamp)(val, 0, this._duration);
  }

  getCurrentTime() {
    return this._nativeAudio ? this._nativeAudio.currentTime : 0;
  }

  setVolume(val, immediate) {
    this._volume = val;
    /* note this won't work for ios devices, for there
       is just no way to set HTMLMediaElement's volume */

    if (this._nativeAudio) {
      this._nativeAudio.volume = val;
    }
  }

  getVolume() {
    if (this._nativeAudio) {
      return this._nativeAudio.volume;
    }

    return this._volume;
  }

  setLoop(val) {
    this._loop = val;

    if (this._nativeAudio) {
      this._nativeAudio.loop = val;
    }
  }

  getLoop() {
    return this._loop;
  }

  destroy() {
    if (this._nativeAudio) {
      this._nativeAudio.src = '';
    }

    super.destroy();
  }

}

exports.AudioPlayerDOM = AudioPlayerDOM;
AudioPlayerDOM._manager = new AudioManagerDom();