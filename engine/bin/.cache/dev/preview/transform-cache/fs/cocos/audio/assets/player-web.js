System.register("q-bundled:///fs/cocos/audio/assets/player-web.js", ["../../core/math/utils.js", "../../core/platform/sys.js", "./player.js", "../../core/global-exports.js", "./audio-manager.js"], function (_export, _context) {
  "use strict";

  var clamp, sys, AudioPlayer, PlayingState, legacyCC, AudioManager, AudioManagerWeb, AudioPlayerWeb;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_coreMathUtilsJs) {
      clamp = _coreMathUtilsJs.clamp;
    }, function (_corePlatformSysJs) {
      sys = _corePlatformSysJs.sys;
    }, function (_playerJs) {
      AudioPlayer = _playerJs.AudioPlayer;
      PlayingState = _playerJs.PlayingState;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_audioManagerJs) {
      AudioManager = _audioManagerJs.AudioManager;
    }],
    execute: function () {
      AudioManagerWeb = /*#__PURE__*/function (_AudioManager) {
        _inheritsLoose(AudioManagerWeb, _AudioManager);

        function AudioManagerWeb() {
          return _AudioManager.apply(this, arguments) || this;
        }

        var _proto = AudioManagerWeb.prototype;

        _proto.discardOnePlayingIfNeeded = function discardOnePlayingIfNeeded() {
          if (this._playingAudios.length < AudioManager.maxAudioChannel) {
            return;
          } // a played audio has a higher priority than a played shot


          var audioToDiscard;

          var oldestOneShotIndex = this._playingAudios.findIndex(function (audio) {
            return audio instanceof AudioBufferSourceNode;
          });

          if (oldestOneShotIndex > -1) {
            audioToDiscard = this._playingAudios[oldestOneShotIndex];

            this._playingAudios.splice(oldestOneShotIndex, 1);
          } else {
            audioToDiscard = this._playingAudios.shift();
          }

          if (audioToDiscard) {
            audioToDiscard.stop();
          }
        };

        return AudioManagerWeb;
      }(AudioManager);

      _export("AudioPlayerWeb", AudioPlayerWeb = /*#__PURE__*/function (_AudioPlayer) {
        _inheritsLoose(AudioPlayerWeb, _AudioPlayer);

        function AudioPlayerWeb(info) {
          var _this;

          _this = _AudioPlayer.call(this, info) || this;
          _this._startTime = 0;
          _this._offset = 0;
          _this._volume = 1;
          _this._loop = false;
          _this._currentTimer = 0;
          _this._nativeAudio = void 0;
          _this._context = void 0;
          _this._sourceNode = void 0;
          _this._gainNode = void 0;
          _this._startInvoked = false;
          _this._onEndedCB = void 0;
          _this._onGestureCB = void 0;
          _this._onGestureProceedCB = void 0;
          var audioSupport = sys.__audioSupport;
          _this._nativeAudio = info.nativeAudio;
          _this._context = audioSupport.context;
          _this._sourceNode = _this._context.createBufferSource();
          _this._gainNode = _this._context.createGain();

          _this._gainNode.connect(_this._context.destination);

          _this._onEndedCB = _this._onEnded.bind(_assertThisInitialized(_this));
          _this._onGestureCB = _this._onGesture.bind(_assertThisInitialized(_this));
          _this._onGestureProceedCB = _this._onGestureProceed.bind(_assertThisInitialized(_this)); // Chrome41/Firefox40 below don't have resume

          if (_this._context.state !== 'running' && _this._context.resume) {
            legacyCC.game.canvas.addEventListener('touchend', _this._onGestureCB);
            legacyCC.game.canvas.addEventListener('mouseup', _this._onGestureCB);
          }

          return _this;
        }

        var _proto2 = AudioPlayerWeb.prototype;

        _proto2.play = function play() {
          if (!this._nativeAudio) {
            return;
          }

          if (this._state === PlayingState.PLAYING) {
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
        };

        _proto2.pause = function pause() {
          this._interrupted = false;

          if (this._state !== PlayingState.PLAYING) {
            return;
          }

          this._doStop();

          this._offset += this._context.currentTime - this._startTime;
          this._state = PlayingState.STOPPED;
          clearInterval(this._currentTimer);
        };

        _proto2.stop = function stop() {
          this._offset = 0;
          this._interrupted = false;

          if (this._state !== PlayingState.PLAYING) {
            return;
          }

          this._doStop();

          this._state = PlayingState.STOPPED;
          clearInterval(this._currentTimer);
        };

        _proto2.playOneShot = function playOneShot(volume) {
          if (volume === void 0) {
            volume = 1;
          }

          if (!this._nativeAudio) {
            return;
          }

          if (this._context.state === 'interrupted' || this._context.state === 'suspended') {
            if (this._context.resume) {
              this._context.resume()["catch"](function (err) {
                console.error(err);
              });
            }
          }

          AudioPlayerWeb._manager.discardOnePlayingIfNeeded();

          var gainNode = this._context.createGain();

          gainNode.connect(this._context.destination);
          gainNode.gain.value = volume;

          var sourceNode = this._context.createBufferSource();

          sourceNode.buffer = this._nativeAudio;
          sourceNode.loop = false;
          sourceNode.connect(gainNode);
          sourceNode.start();

          AudioPlayerWeb._manager.addPlaying(sourceNode);

          sourceNode.onended = function () {
            AudioPlayerWeb._manager.removePlaying(sourceNode);
          };
        };

        _proto2.setCurrentTime = function setCurrentTime(val) {
          // throws InvalidState Error on some device if we don't do the clamp here
          // the serialized duration may not be accurate, use the actual duration first
          this._offset = clamp(val, 0, this._nativeAudio && this._nativeAudio.duration || this._duration);

          if (this._state !== PlayingState.PLAYING) {
            return;
          }

          this._doStop();

          this._doPlay();
        };

        _proto2.getCurrentTime = function getCurrentTime() {
          if (this._state !== PlayingState.PLAYING) {
            return this._offset;
          }

          return this._context.currentTime - this._startTime + this._offset;
        };

        _proto2.setVolume = function setVolume(val, immediate) {
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
        };

        _proto2.getVolume = function getVolume() {
          return this._volume;
        };

        _proto2.setLoop = function setLoop(val) {
          this._loop = val;
          this._sourceNode.loop = val;
        };

        _proto2.getLoop = function getLoop() {
          return this._loop;
        };

        _proto2.destroy = function destroy() {
          _AudioPlayer.prototype.destroy.call(this);
        };

        _proto2._doPlay = function _doPlay() {
          var _this2 = this;

          AudioPlayerWeb._manager.discardOnePlayingIfNeeded();

          this._state = PlayingState.PLAYING;
          this._sourceNode = this._context.createBufferSource();
          this._sourceNode.buffer = this._nativeAudio;
          this._sourceNode.loop = this._loop;

          this._sourceNode.connect(this._gainNode);

          this._startTime = this._context.currentTime;
          this._startInvoked = false; // delay eval here to yield uniform behavior with other platforms

          legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, this._playAndEmit, this);
          /* still not supported by all platforms *
          this._sourceNode.onended = this._onEnded;
          /* doing it manually for now */

          clearInterval(this._currentTimer);
          this._currentTimer = window.setInterval(function () {
            _this2._onEnded();

            clearInterval(_this2._currentTimer);

            if (_this2._sourceNode.loop) {
              _this2._currentTimer = window.setInterval(_this2._onEndedCB, _this2._nativeAudio.duration * 1000);
            }
          }, (this._nativeAudio.duration - this._offset) * 1000);
        };

        _proto2._doStop = function _doStop() {
          // stop can only be called after play
          if (this._startInvoked) {
            this._sourceNode.stop();
          } else {
            legacyCC.director.off(legacyCC.Director.EVENT_AFTER_UPDATE, this._playAndEmit, this);
          }

          AudioPlayerWeb._manager.removePlaying(this);
        };

        _proto2._playAndEmit = function _playAndEmit() {
          this._sourceNode.start(0, this._offset);

          this._clip.emit('started');

          this._startInvoked = true;

          AudioPlayerWeb._manager.addPlaying(this);
        };

        _proto2._onEnded = function _onEnded() {
          this._offset = 0;
          this._startTime = this._context.currentTime;

          if (this._sourceNode.loop) {
            return;
          }

          this._clip.emit('ended');

          this._state = PlayingState.STOPPED;

          AudioPlayerWeb._manager.removePlaying(this);
        };

        _proto2._onGestureProceed = function _onGestureProceed() {
          if (this._interrupted) {
            this._doPlay();

            this._interrupted = false;
          }

          legacyCC.game.canvas.removeEventListener('touchend', this._onGestureCB);
          legacyCC.game.canvas.removeEventListener('mouseup', this._onGestureCB);
        };

        _proto2._onGesture = function _onGesture() {
          if (this._context.state !== 'running') {
            this._context.resume().then(this._onGestureProceedCB)["catch"](function (err) {
              console.error(err);
            });
          } else {
            this._onGestureProceed();
          }
        };

        return AudioPlayerWeb;
      }(AudioPlayer));

      AudioPlayerWeb._manager = new AudioManagerWeb();
    }
  };
});