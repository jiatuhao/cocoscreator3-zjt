System.register("q-bundled:///fs/cocos/audio/assets/player-dom.js", ["../../core/math/utils.js", "./player.js", "../../core/global-exports.js", "../audio-utils.js", "./audio-manager.js"], function (_export, _context) {
  "use strict";

  var clamp, AudioPlayer, PlayingState, legacyCC, createDomAudio, AudioManager, AudioManagerDom, AudioPlayerDOM;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_coreMathUtilsJs) {
      clamp = _coreMathUtilsJs.clamp;
    }, function (_playerJs) {
      AudioPlayer = _playerJs.AudioPlayer;
      PlayingState = _playerJs.PlayingState;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_audioUtilsJs) {
      createDomAudio = _audioUtilsJs.createDomAudio;
    }, function (_audioManagerJs) {
      AudioManager = _audioManagerJs.AudioManager;
    }],
    execute: function () {
      AudioManagerDom = /*#__PURE__*/function (_AudioManager) {
        _inheritsLoose(AudioManagerDom, _AudioManager);

        function AudioManagerDom() {
          return _AudioManager.apply(this, arguments) || this;
        }

        var _proto = AudioManagerDom.prototype;

        _proto.discardOnePlayingIfNeeded = function discardOnePlayingIfNeeded() {
          if (this._playingAudios.length < AudioManager.maxAudioChannel) {
            return;
          } // a played audio has a higher priority than a played shot


          var audioToDiscard;

          var oldestOneShotIndex = this._playingAudios.findIndex(function (audio) {
            return audio instanceof HTMLAudioElement;
          });

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
        };

        return AudioManagerDom;
      }(AudioManager);

      _export("AudioPlayerDOM", AudioPlayerDOM = /*#__PURE__*/function (_AudioPlayer) {
        _inheritsLoose(AudioPlayerDOM, _AudioPlayer);

        function AudioPlayerDOM(info) {
          var _this;

          _this = _AudioPlayer.call(this, info) || this;
          _this._volume = 1;
          _this._loop = false;
          _this._nativeAudio = void 0;
          _this._cbRegistered = false;
          _this._remove_cb = void 0;
          _this._post_play = void 0;
          _this._on_gesture = void 0;
          _this._post_gesture = void 0;
          _this._nativeAudio = info.nativeAudio;

          _this._remove_cb = function () {
            if (!_this._cbRegistered) {
              return;
            }

            legacyCC.game.canvas.removeEventListener('touchend', _this._on_gesture);
            legacyCC.game.canvas.removeEventListener('mouseup', _this._on_gesture);
            _this._cbRegistered = false;
          };

          _this._post_play = function () {
            _this._state = PlayingState.PLAYING;

            _this._clip.emit('started');

            _this._remove_cb(); // should remove callbacks after any success play


            AudioPlayerDOM._manager.addPlaying(_assertThisInitialized(_this));
          };

          _this._post_gesture = function () {
            if (_this._interrupted) {
              _this._post_play();

              _this._interrupted = false;
            } else {
              _this._nativeAudio.pause();

              _this._nativeAudio.currentTime = 0;
            }
          };

          _this._on_gesture = function () {
            if (!_this._nativeAudio) {
              return;
            }

            var promise = _this._nativeAudio.play();

            if (!promise) {
              // Chrome50/Firefox53 below
              // delay eval here to yield uniform behavior with other platforms
              _this._state = PlayingState.PLAYING;
              legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, _this._post_gesture);
              return;
            }

            promise.then(_this._post_gesture);

            _this._remove_cb();
          };

          _this._nativeAudio.volume = _this._volume;
          _this._nativeAudio.loop = _this._loop; // callback on audio ended

          _this._nativeAudio.addEventListener('ended', function () {
            _this._state = PlayingState.STOPPED;
            _this._nativeAudio.currentTime = 0;

            _this._clip.emit('ended');

            AudioPlayerDOM._manager.removePlaying(_assertThisInitialized(_this));
          });
          /* play & stop immediately after receiving a gesture so that
             we can freely invoke play() outside event listeners later */


          legacyCC.game.canvas.addEventListener('touchend', _this._on_gesture);
          legacyCC.game.canvas.addEventListener('mouseup', _this._on_gesture);
          _this._cbRegistered = true;
          return _this;
        }

        var _proto2 = AudioPlayerDOM.prototype;

        _proto2.play = function play() {
          var _this2 = this;

          if (!this._nativeAudio) {
            return;
          }

          if (this._blocking) {
            this._interrupted = true;
            return;
          }

          if (this._state === PlayingState.PLAYING) {
            /* sometimes there is no way to update the playing state
            especially when player unplug earphones and the audio automatically stops
            so we need to force updating the playing state by pausing audio */
            this.pause(); // restart if already playing

            this.setCurrentTime(0);
          }

          AudioPlayerDOM._manager.discardOnePlayingIfNeeded();

          var promise = this._nativeAudio.play();

          if (!promise) {
            // delay eval here to yield uniform behavior with other platforms
            this._state = PlayingState.PLAYING;
            legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, this._post_play);
            return;
          }

          promise.then(this._post_play)["catch"](function () {
            _this2._interrupted = true;
          });
        };

        _proto2.pause = function pause() {
          if (!this._nativeAudio) {
            return;
          }

          this._interrupted = false;

          if (this._state !== PlayingState.PLAYING) {
            return;
          }

          this._nativeAudio.pause();

          this._state = PlayingState.STOPPED;

          AudioPlayerDOM._manager.removePlaying(this);
        };

        _proto2.stop = function stop() {
          if (!this._nativeAudio) {
            return;
          }

          this._nativeAudio.currentTime = 0;
          this._interrupted = false;

          if (this._state !== PlayingState.PLAYING) {
            return;
          }

          this._nativeAudio.pause();

          this._state = PlayingState.STOPPED;

          AudioPlayerDOM._manager.removePlaying(this);
        };

        _proto2.playOneShot = function playOneShot(volume) {
          if (volume === void 0) {
            volume = 1;
          }

          createDomAudio(this._nativeAudio.src).then(function (dom) {
            AudioPlayerDOM._manager.discardOnePlayingIfNeeded();

            dom.volume = volume;
            dom.play();

            AudioPlayerDOM._manager.addPlaying(dom);

            dom.addEventListener('ended', function () {
              AudioPlayerDOM._manager.removePlaying(dom);
            });
          }, function (errMsg) {
            console.error(errMsg);
          });
        };

        _proto2.setCurrentTime = function setCurrentTime(val) {
          if (!this._nativeAudio) {
            return;
          }

          this._nativeAudio.currentTime = clamp(val, 0, this._duration);
        };

        _proto2.getCurrentTime = function getCurrentTime() {
          return this._nativeAudio ? this._nativeAudio.currentTime : 0;
        };

        _proto2.setVolume = function setVolume(val, immediate) {
          this._volume = val;
          /* note this won't work for ios devices, for there
             is just no way to set HTMLMediaElement's volume */

          if (this._nativeAudio) {
            this._nativeAudio.volume = val;
          }
        };

        _proto2.getVolume = function getVolume() {
          if (this._nativeAudio) {
            return this._nativeAudio.volume;
          }

          return this._volume;
        };

        _proto2.setLoop = function setLoop(val) {
          this._loop = val;

          if (this._nativeAudio) {
            this._nativeAudio.loop = val;
          }
        };

        _proto2.getLoop = function getLoop() {
          return this._loop;
        };

        _proto2.destroy = function destroy() {
          if (this._nativeAudio) {
            this._nativeAudio.src = '';
          }

          _AudioPlayer.prototype.destroy.call(this);
        };

        return AudioPlayerDOM;
      }(AudioPlayer));

      AudioPlayerDOM._manager = new AudioManagerDom();
    }
  };
});