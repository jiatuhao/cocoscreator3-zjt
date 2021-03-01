System.register("q-bundled:///fs/cocos/audio/assets/player.js", ["../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var legacyCC, PlayingState, AudioPlayer;
  return {
    setters: [function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
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
      _export("PlayingState", PlayingState = {
        INITIALIZING: 0,
        PLAYING: 1,
        STOPPED: 2
      });

      _export("AudioPlayer", AudioPlayer = /*#__PURE__*/function () {
        function AudioPlayer(info) {
          var _this = this;

          this._state = PlayingState.STOPPED;
          this._duration = 0;
          this._clip = void 0;
          this._onHide = void 0;
          this._onShow = void 0;
          this._interrupted = false;
          this._blocking = false;
          this._duration = info.duration;
          this._clip = info.audioClip;

          this._onHide = function () {
            _this._blocking = true;

            if (_this._state !== PlayingState.PLAYING) {
              return;
            }

            _this.pause();

            _this._interrupted = true;
          };

          this._onShow = function () {
            _this._blocking = false;

            if (!_this._interrupted) {
              return;
            }

            _this.play();

            _this._interrupted = false;
          };
          /* handle hide & show */


          legacyCC.game.on(legacyCC.Game.EVENT_HIDE, this._onHide);
          legacyCC.game.on(legacyCC.Game.EVENT_SHOW, this._onShow);
        }

        var _proto = AudioPlayer.prototype;

        _proto.getState = function getState() {
          return this._state;
        };

        _proto.getDuration = function getDuration() {
          return this._duration;
        };

        _proto.destroy = function destroy() {
          legacyCC.game.off(legacyCC.Game.EVENT_HIDE, this._onHide);
          legacyCC.game.off(legacyCC.Game.EVENT_SHOW, this._onShow);
        };

        return AudioPlayer;
      }());

      legacyCC.internal.AudioPlayer = AudioPlayer;
    }
  };
});