"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayerWeb = void 0;

var _utils = require("../../core/math/utils.js");

var _sys = require("../../core/platform/sys.js");

var _player = require("./player.js");

var _globalExports = require("../../core/global-exports.js");

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
class AudioManagerWeb extends _audioManager.AudioManager {
  discardOnePlayingIfNeeded() {
    if (this._playingAudios.length < _audioManager.AudioManager.maxAudioChannel) {
      return;
    } // a played audio has a higher priority than a played shot


    let audioToDiscard;

    const oldestOneShotIndex = this._playingAudios.findIndex(audio => audio instanceof AudioBufferSourceNode);

    if (oldestOneShotIndex > -1) {
      audioToDiscard = this._playingAudios[oldestOneShotIndex];

      this._playingAudios.splice(oldestOneShotIndex, 1);
    } else {
      audioToDiscard = this._playingAudios.shift();
    }

    if (audioToDiscard) {
      audioToDiscard.stop();
    }
  }

}

class AudioPlayerWeb extends _player.AudioPlayer {
  constructor(info) {
    super(info);
    this._startTime = 0;
    this._offset = 0;
    this._volume = 1;
    this._loop = false;
    this._currentTimer = 0;
    this._nativeAudio = void 0;
    this._context = void 0;
    this._sourceNode = void 0;
    this._gainNode = void 0;
    this._startInvoked = false;
    this._onEndedCB = void 0;
    this._onGestureCB = void 0;
    this._onGestureProceedCB = void 0;
    const audioSupport = _sys.sys.__audioSupport;
    this._nativeAudio = info.nativeAudio;
    this._context = audioSupport.context;
    this._sourceNode = this._context.createBufferSource();
    this._gainNode = this._context.createGain();

    this._gainNode.connect(this._context.destination);

    this._onEndedCB = this._onEnded.bind(this);
    this._onGestureCB = this._onGesture.bind(this);
    this._onGestureProceedCB = this._onGestureProceed.bind(this); // Chrome41/Firefox40 below don't have resume

    if (this._context.state !== 'running' && this._context.resume) {
      _globalExports.legacyCC.game.canvas.addEventListener('touchend', this._onGestureCB);

      _globalExports.legacyCC.game.canvas.addEventListener('mouseup', this._onGestureCB);
    }
  }

  play() {
    if (!this._nativeAudio) {
      return;
    }

    if (this._state === _player.PlayingState.PLAYING) {
      /* sometimes there is no way to update the playing state
      especially when player unplug earphones and the audio automatically stops
      so we need to force updating the playing state by pausing audio */
      this.pause(); // restart if already playing

      this.setCurrentTime(0);
    }

    if (this._blocking || this._context.state !== 'running') {
      this._interrupted = true;

      if ((this._context.state === 'interrupted' || this._context.state === 'suspended') && this._context.resume) {
        this._onGesture();
      }

      return;
    }

    this._doPlay();
  }

  pause() {
    this._interrupted = false;

    if (this._state !== _player.PlayingState.PLAYING) {
      return;
    }

    this._doStop();

    this._offset += this._context.currentTime - this._startTime;
    this._state = _player.PlayingState.STOPPED;
    clearInterval(this._currentTimer);
  }

  stop() {
    this._offset = 0;
    this._interrupted = false;

    if (this._state !== _player.PlayingState.PLAYING) {
      return;
    }

    this._doStop();

    this._state = _player.PlayingState.STOPPED;
    clearInterval(this._currentTimer);
  }

  playOneShot(volume = 1) {
    if (!this._nativeAudio) {
      return;
    }

    if (this._context.state === 'interrupted' || this._context.state === 'suspended') {
      if (this._context.resume) {
        this._context.resume().catch(err => {
          console.error(err);
        });
      }
    }

    AudioPlayerWeb._manager.discardOnePlayingIfNeeded();

    const gainNode = this._context.createGain();

    gainNode.connect(this._context.destination);
    gainNode.gain.value = volume;

    const sourceNode = this._context.createBufferSource();

    sourceNode.buffer = this._nativeAudio;
    sourceNode.loop = false;
    sourceNode.connect(gainNode);
    sourceNode.start();

    AudioPlayerWeb._manager.addPlaying(sourceNode);

    sourceNode.onended = () => {
      AudioPlayerWeb._manager.removePlaying(sourceNode);
    };
  }

  setCurrentTime(val) {
    // throws InvalidState Error on some device if we don't do the clamp here
    // the serialized duration may not be accurate, use the actual duration first
    this._offset = (0, _utils.clamp)(val, 0, this._nativeAudio && this._nativeAudio.duration || this._duration);

    if (this._state !== _player.PlayingState.PLAYING) {
      return;
    }

    this._doStop();

    this._doPlay();
  }

  getCurrentTime() {
    if (this._state !== _player.PlayingState.PLAYING) {
      return this._offset;
    }

    return this._context.currentTime - this._startTime + this._offset;
  }

  setVolume(val, immediate) {
    this._volume = val;

    if (!immediate && this._gainNode.gain.setTargetAtTime) {
      try {
        this._gainNode.gain.setTargetAtTime(val, this._context.currentTime, 0);
      } catch (e) {
        // Some other unknown browsers may crash if TIME_CONSTANT is 0
        this._gainNode.gain.setTargetAtTime(val, this._context.currentTime, 0.01);
      }
    } else {
      this._gainNode.gain.value = val;
    }
  }

  getVolume() {
    return this._volume;
  }

  setLoop(val) {
    this._loop = val;
    this._sourceNode.loop = val;
  }

  getLoop() {
    return this._loop;
  }

  destroy() {
    super.destroy();
  }

  _doPlay() {
    AudioPlayerWeb._manager.discardOnePlayingIfNeeded();

    this._state = _player.PlayingState.PLAYING;
    this._sourceNode = this._context.createBufferSource();
    this._sourceNode.buffer = this._nativeAudio;
    this._sourceNode.loop = this._loop;

    this._sourceNode.connect(this._gainNode);

    this._startTime = this._context.currentTime;
    this._startInvoked = false; // delay eval here to yield uniform behavior with other platforms

    _globalExports.legacyCC.director.once(_globalExports.legacyCC.Director.EVENT_AFTER_UPDATE, this._playAndEmit, this);
    /* still not supported by all platforms *
    this._sourceNode.onended = this._onEnded;
    /* doing it manually for now */


    clearInterval(this._currentTimer);
    this._currentTimer = window.setInterval(() => {
      this._onEnded();

      clearInterval(this._currentTimer);

      if (this._sourceNode.loop) {
        this._currentTimer = window.setInterval(this._onEndedCB, this._nativeAudio.duration * 1000);
      }
    }, (this._nativeAudio.duration - this._offset) * 1000);
  }

  _doStop() {
    // stop can only be called after play
    if (this._startInvoked) {
      this._sourceNode.stop();
    } else {
      _globalExports.legacyCC.director.off(_globalExports.legacyCC.Director.EVENT_AFTER_UPDATE, this._playAndEmit, this);
    }

    AudioPlayerWeb._manager.removePlaying(this);
  }

  _playAndEmit() {
    this._sourceNode.start(0, this._offset);

    this._clip.emit('started');

    this._startInvoked = true;

    AudioPlayerWeb._manager.addPlaying(this);
  }

  _onEnded() {
    this._offset = 0;
    this._startTime = this._context.currentTime;

    if (this._sourceNode.loop) {
      return;
    }

    this._clip.emit('ended');

    this._state = _player.PlayingState.STOPPED;

    AudioPlayerWeb._manager.removePlaying(this);
  }

  _onGestureProceed() {
    if (this._interrupted) {
      this._doPlay();

      this._interrupted = false;
    }

    _globalExports.legacyCC.game.canvas.removeEventListener('touchend', this._onGestureCB);

    _globalExports.legacyCC.game.canvas.removeEventListener('mouseup', this._onGestureCB);
  }

  _onGesture() {
    if (this._context.state !== 'running') {
      this._context.resume().then(this._onGestureProceedCB).catch(err => {
        console.error(err);
      });
    } else {
      this._onGestureProceed();
    }
  }

}

exports.AudioPlayerWeb = AudioPlayerWeb;
AudioPlayerWeb._manager = new AudioManagerWeb();