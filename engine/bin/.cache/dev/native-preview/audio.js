System.register(['./coordinates-converts-utils-fa8f5fc5.js', './json-asset-17eaf8ce.js', './factory-7b08f108.js'], function (exports) {
  'use strict';
  var legacyCC, sys, _inheritsLoose, clamp, _assertThisInitialized, Enum, ccclass, type, _createClass, Asset, _applyDecoratedDescriptor, _initializerDefineProperty, serializable, log, getError, tooltip, range, help, menu, Component, js, override, downloader, factory, downloadFile;
  return {
    setters: [function (module) {
      legacyCC = module.l;
      sys = module.dK;
      _inheritsLoose = module.dR;
      clamp = module.cQ;
      _assertThisInitialized = module.dV;
      Enum = module.d6;
      ccclass = module.dQ;
      type = module.e5;
      _createClass = module.dS;
      Asset = module.dB;
      _applyDecoratedDescriptor = module.dT;
      _initializerDefineProperty = module.dU;
      serializable = module.dX;
      log = module.a;
      getError = module.dI;
      tooltip = module.f8;
      range = module.f4;
      help = module.fa;
      menu = module.fb;
      Component = module.dO;
      js = module.eq;
    }, function (module) {
      override = module.K;
    }, function (module) {
      downloader = module.d;
      factory = module.i;
      downloadFile = module.m;
    }],
    execute: function () {

      var PlayingState = {
        INITIALIZING: 0,
        PLAYING: 1,
        STOPPED: 2
      };
      var AudioPlayer = function () {
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
      }();
      legacyCC.internal.AudioPlayer = AudioPlayer;

      function createDomAudio(url) {
        var __audioSupport = sys.__audioSupport;
        return new Promise(function (resolve, reject) {
          var dom = document.createElement('audio');
          dom.src = url;

          var clearEvent = function clearEvent() {
            clearTimeout(timer);
            dom.removeEventListener('canplaythrough', success, false);
            dom.removeEventListener('error', failure, false);

            if (__audioSupport.USE_LOADER_EVENT) {
              dom.removeEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
            }
          };

          var timer = setTimeout(function () {
            if (dom.readyState === 0) {
              failure();
            } else {
              success();
            }
          }, 8000);

          var success = function success() {
            clearEvent();
            resolve(dom);
          };

          var failure = function failure() {
            clearEvent();
            var message = "load audio failure - " + url;
            reject(message);
          };

          dom.addEventListener('canplaythrough', success, false);
          dom.addEventListener('error', failure, false);

          if (__audioSupport.USE_LOADER_EVENT) {
            dom.addEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
          }
        });
      }

      var AudioManager = function () {
        function AudioManager() {
          this._playingAudios = void 0;
          this._playingAudios = [];
        }

        var _proto = AudioManager.prototype;

        _proto.addPlaying = function addPlaying(audio) {
          this._playingAudios.push(audio);
        };

        _proto.removePlaying = function removePlaying(audio) {
          var index = this._playingAudios.indexOf(audio);

          if (index > -1) {
            this._playingAudios.splice(index, 1);
          }
        };

        return AudioManager;
      }();
      AudioManager.maxAudioChannel = 24;
      legacyCC.internal.AudioManager = AudioManager;

      var AudioManagerDom = function (_AudioManager) {
        _inheritsLoose(AudioManagerDom, _AudioManager);

        function AudioManagerDom() {
          return _AudioManager.apply(this, arguments) || this;
        }

        var _proto = AudioManagerDom.prototype;

        _proto.discardOnePlayingIfNeeded = function discardOnePlayingIfNeeded() {
          if (this._playingAudios.length < AudioManager.maxAudioChannel) {
            return;
          }

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

      var AudioPlayerDOM = function (_AudioPlayer) {
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

            _this._remove_cb();

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
              _this._state = PlayingState.PLAYING;
              legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, _this._post_gesture);
              return;
            }

            promise.then(_this._post_gesture);

            _this._remove_cb();
          };

          _this._nativeAudio.volume = _this._volume;
          _this._nativeAudio.loop = _this._loop;

          _this._nativeAudio.addEventListener('ended', function () {
            _this._state = PlayingState.STOPPED;
            _this._nativeAudio.currentTime = 0;

            _this._clip.emit('ended');

            AudioPlayerDOM._manager.removePlaying(_assertThisInitialized(_this));
          });

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
            this.pause();
            this.setCurrentTime(0);
          }

          AudioPlayerDOM._manager.discardOnePlayingIfNeeded();

          var promise = this._nativeAudio.play();

          if (!promise) {
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
      }(AudioPlayer);
      AudioPlayerDOM._manager = new AudioManagerDom();

      var AudioManagerWeb = function (_AudioManager) {
        _inheritsLoose(AudioManagerWeb, _AudioManager);

        function AudioManagerWeb() {
          return _AudioManager.apply(this, arguments) || this;
        }

        var _proto = AudioManagerWeb.prototype;

        _proto.discardOnePlayingIfNeeded = function discardOnePlayingIfNeeded() {
          if (this._playingAudios.length < AudioManager.maxAudioChannel) {
            return;
          }

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

      var AudioPlayerWeb = function (_AudioPlayer) {
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
          _this._onGestureProceedCB = _this._onGestureProceed.bind(_assertThisInitialized(_this));

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
            this.pause();
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
          this._startInvoked = false;
          legacyCC.director.once(legacyCC.Director.EVENT_AFTER_UPDATE, this._playAndEmit, this);
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
      }(AudioPlayer);
      AudioPlayerWeb._manager = new AudioManagerWeb();

      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp;
      var AudioType = Enum({
        WEB_AUDIO: 0,
        DOM_AUDIO: 1,
        JSB_AUDIO: 2,
        UNKNOWN_AUDIO: 3
      });
      var AudioClip = exports('AudioClip', (_dec = ccclass('cc.AudioClip'), _dec2 = type(AudioType), _dec(_class = (_class2 = (_temp = _class3 = function (_Asset) {
        _inheritsLoose(AudioClip, _Asset);

        function AudioClip() {
          var _this;

          _this = _Asset.call(this) || this;

          _initializerDefineProperty(_this, "_duration", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_loadMode", _descriptor2, _assertThisInitialized(_this));

          _this._nativeAudio = null;
          _this._player = null;
          _this.loaded = false;
          return _this;
        }

        var _proto = AudioClip.prototype;

        _proto.destroy = function destroy() {
          if (this._player) {
            this._player.destroy();
          }

          return _Asset.prototype.destroy.call(this);
        };

        _proto.play = function play() {
          if (this._player) {
            this._player.play();
          }
        };

        _proto.pause = function pause() {
          if (this._player) {
            this._player.pause();
          }
        };

        _proto.stop = function stop() {
          if (this._player) {
            this._player.stop();
          }
        };

        _proto.playOneShot = function playOneShot(volume) {
          if (this._player) {
            this._player.playOneShot(volume);
          }
        };

        _proto.setCurrentTime = function setCurrentTime(val) {
          if (this._player) {
            this._player.setCurrentTime(val);
          }
        };

        _proto.getCurrentTime = function getCurrentTime() {
          if (this._player) {
            return this._player.getCurrentTime();
          }

          return 0;
        };

        _proto.getDuration = function getDuration() {
          if (this._player) {
            return this._player.getDuration();
          }

          return this._duration;
        };

        _proto.setVolume = function setVolume(val, immediate) {
          if (this._player) {
            this._player.setVolume(val, immediate || false);
          }
        };

        _proto.getVolume = function getVolume() {
          if (this._player) {
            return this._player.getVolume();
          }

          return 1;
        };

        _proto.setLoop = function setLoop(val) {
          if (this._player) {
            this._player.setLoop(val);
          }
        };

        _proto.getLoop = function getLoop() {
          if (this._player) {
            return this._player.getLoop();
          }

          return false;
        };

        _proto._getPlayer = function _getPlayer(clip) {
          var ctor;

          if (typeof AudioBuffer !== 'undefined' && clip instanceof AudioBuffer) {
            ctor = AudioPlayerWeb;
            this._loadMode = AudioType.WEB_AUDIO;
          } else {
            ctor = AudioPlayerDOM;
            this._loadMode = AudioType.DOM_AUDIO;
          }

          return ctor;
        };

        _createClass(AudioClip, [{
          key: "_nativeAsset",
          set: function set(nativeAudio) {
            this._nativeAudio = nativeAudio;

            if (nativeAudio) {
              var ctor = this._getPlayer(nativeAudio);

              this._player = new ctor({
                nativeAudio: nativeAudio,
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
          },
          get: function get() {
            return this._nativeAudio;
          }
        }, {
          key: "_nativeDep",
          get: function get() {
            return {
              uuid: this._uuid,
              audioLoadMode: this.loadMode,
              ext: this._native,
              __isNative__: true
            };
          }
        }, {
          key: "loadMode",
          get: function get() {
            return this._loadMode;
          }
        }, {
          key: "state",
          get: function get() {
            return this._player ? this._player.getState() : PlayingState.INITIALIZING;
          }
        }]);

        return AudioClip;
      }(Asset), _class3.PlayingState = PlayingState, _class3.AudioType = AudioType, _class3.preventDeferredLoadDependents = true, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_duration", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_loadMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AudioType.UNKNOWN_AUDIO;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "_nativeDep", [override], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeDep"), _class2.prototype)), _class2)) || _class));
      legacyCC.AudioClip = AudioClip;

      function downloadDomAudio(url, options, onComplete) {
        createDomAudio(url).then(function (dom) {
          onComplete(null, dom);
        }, function (errMsg) {
          log(errMsg);
          onComplete(new Error(errMsg), null);
        });
      }

      function downloadArrayBuffer(url, options, onComplete) {
        options.xhrResponseType = 'arraybuffer';
        downloadFile(url, options, options.onFileProgress, onComplete);
      }

      function downloadAudio(url, options, onComplete) {
        var __audioSupport = sys.__audioSupport;
        var formatSupport = __audioSupport.format;

        if (formatSupport.length === 0) {
          onComplete(new Error(getError(4927)));
          return;
        }

        var handler = null;

        if (!__audioSupport.WEB_AUDIO) {
          handler = downloadDomAudio;
        } else {
          if (options.audioLoadMode !== AudioType.DOM_AUDIO) {
            handler = downloadArrayBuffer;
          } else {
            handler = downloadDomAudio;
          }
        }

        handler(url, options, onComplete);
      }

      function createAudioClip(id, data, options, onComplete) {
        var out = new AudioClip();
        out._nativeUrl = id;
        out._nativeAsset = data;
        out._duration = data.duration;
        onComplete(null, out);
      }

      downloader.register({
        '.mp3': downloadAudio,
        '.ogg': downloadAudio,
        '.wav': downloadAudio,
        '.m4a': downloadAudio
      });
      downloader.downloadDomAudio = downloadDomAudio;
      factory.register({
        '.mp3': createAudioClip,
        '.ogg': createAudioClip,
        '.wav': createAudioClip,
        '.m4a': createAudioClip
      });

      var _dec$1, _dec2$1, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3, _descriptor4, _temp$1;
      var AudioSource = function (v) { return exports({ AudioSource: v, AudioSourceComponent: v }), v; }((_dec$1 = ccclass('cc.AudioSource'), _dec2$1 = help('i18n:cc.AudioSource'), _dec3 = menu('Audio/AudioSource'), _dec4 = type(AudioClip), _dec5 = type(AudioClip), _dec6 = tooltip('i18n:audio.clip'), _dec7 = tooltip('i18n:audio.loop'), _dec8 = tooltip('i18n:audio.playOnAwake'), _dec9 = range([0.0, 1.0]), _dec10 = tooltip('i18n:audio.volume'), _dec$1(_class$1 = _dec2$1(_class$1 = _dec3(_class$1 = (_class2$1 = (_temp$1 = function (_Component) {
        _inheritsLoose(AudioSource, _Component);

        function AudioSource() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_clip", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_loop", _descriptor2$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_playOnAwake", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_volume", _descriptor4, _assertThisInitialized(_this));

          _this._cachedCurrentTime = 0;
          return _this;
        }

        var _proto = AudioSource.prototype;

        _proto.onLoad = function onLoad() {
          this._syncStates();
        };

        _proto.onEnable = function onEnable() {
          if (this._playOnAwake) {
            this.play();
          }
        };

        _proto.onDisable = function onDisable() {
          this.pause();
        };

        _proto.onDestroy = function onDestroy() {
          this.stop();
        };

        _proto.play = function play() {
          if (!this._clip) {
            return;
          }

          this._clip.play();
        };

        _proto.pause = function pause() {
          if (!this._clip) {
            return;
          }

          this._clip.pause();
        };

        _proto.stop = function stop() {
          if (!this._clip) {
            return;
          }

          this._clip.stop();
        };

        _proto.playOneShot = function playOneShot(clip, volumeScale) {
          if (volumeScale === void 0) {
            volumeScale = 1;
          }

          clip.playOneShot(this._volume * volumeScale);
        };

        _proto._syncStates = function _syncStates() {
          if (!this._clip) {
            return;
          }

          this._clip.setCurrentTime(this._cachedCurrentTime);

          this._clip.setLoop(this._loop);

          this._clip.setVolume(this._volume, true);

          this._volume = this._clip.getVolume();
        };

        _createClass(AudioSource, [{
          key: "clip",
          set: function set(val) {
            this._clip = val;

            this._syncStates();
          },
          get: function get() {
            return this._clip;
          }
        }, {
          key: "loop",
          set: function set(val) {
            this._loop = val;

            if (this._clip) {
              this._clip.setLoop(val);
            }
          },
          get: function get() {
            return this._loop;
          }
        }, {
          key: "playOnAwake",
          set: function set(val) {
            this._playOnAwake = val;
          },
          get: function get() {
            return this._playOnAwake;
          }
        }, {
          key: "volume",
          set: function set(val) {
            if (Number.isNaN(val)) {
              console.warn('illegal audio volume!');
              return;
            }

            val = clamp(val, 0, 1);

            if (this._clip) {
              this._clip.setVolume(val);

              this._volume = this._clip.getVolume();
            } else {
              this._volume = val;
            }
          },
          get: function get() {
            return this._volume;
          }
        }, {
          key: "currentTime",
          set: function set(num) {
            if (Number.isNaN(num)) {
              console.warn('illegal audio time!');
              return;
            }

            num = clamp(num, 0, this.duration);
            this._cachedCurrentTime = num;

            if (!this._clip) {
              return;
            }

            this._clip.setCurrentTime(this._cachedCurrentTime);
          },
          get: function get() {
            if (!this._clip) {
              return this._cachedCurrentTime;
            }

            return this._clip.getCurrentTime();
          }
        }, {
          key: "duration",
          get: function get() {
            if (!this._clip) {
              return 0;
            }

            return this._clip.getDuration();
          }
        }, {
          key: "state",
          get: function get() {
            if (!this._clip) {
              return AudioClip.PlayingState.INITIALIZING;
            }

            return this._clip.state;
          }
        }, {
          key: "playing",
          get: function get() {
            return this.state === AudioClip.PlayingState.PLAYING;
          }
        }]);

        return AudioSource;
      }(Component), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_clip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_loop", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "_playOnAwake", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "_volume", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$1.prototype, "clip", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2$1.prototype, "clip"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "loop", [_dec7], Object.getOwnPropertyDescriptor(_class2$1.prototype, "loop"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "playOnAwake", [_dec8], Object.getOwnPropertyDescriptor(_class2$1.prototype, "playOnAwake"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "volume", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2$1.prototype, "volume"), _class2$1.prototype)), _class2$1)) || _class$1) || _class$1) || _class$1));

      legacyCC.AudioSourceComponent = AudioSource;
      js.setClassAlias(AudioSource, 'cc.AudioSourceComponent');

    }
  };
});
