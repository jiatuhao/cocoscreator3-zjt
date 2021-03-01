"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayer = exports.PlayingState = void 0;

var _globalExports = require("../../core/global-exports.js");

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
 * @module component/audio
 */
const PlayingState = {
  INITIALIZING: 0,
  PLAYING: 1,
  STOPPED: 2
};
exports.PlayingState = PlayingState;

class AudioPlayer {
  constructor(info) {
    this._state = PlayingState.STOPPED;
    this._duration = 0;
    this._clip = void 0;
    this._onHide = void 0;
    this._onShow = void 0;
    this._interrupted = false;
    this._blocking = false;
    this._duration = info.duration;
    this._clip = info.audioClip;

    this._onHide = () => {
      this._blocking = true;

      if (this._state !== PlayingState.PLAYING) {
        return;
      }

      this.pause();
      this._interrupted = true;
    };

    this._onShow = () => {
      this._blocking = false;

      if (!this._interrupted) {
        return;
      }

      this.play();
      this._interrupted = false;
    };
    /* handle hide & show */


    _globalExports.legacyCC.game.on(_globalExports.legacyCC.Game.EVENT_HIDE, this._onHide);

    _globalExports.legacyCC.game.on(_globalExports.legacyCC.Game.EVENT_SHOW, this._onShow);
  }

  getState() {
    return this._state;
  }

  getDuration() {
    return this._duration;
  }

  destroy() {
    _globalExports.legacyCC.game.off(_globalExports.legacyCC.Game.EVENT_HIDE, this._onHide);

    _globalExports.legacyCC.game.off(_globalExports.legacyCC.Game.EVENT_SHOW, this._onShow);
  }

}

exports.AudioPlayer = AudioPlayer;
_globalExports.legacyCC.internal.AudioPlayer = AudioPlayer;