System.register("q-bundled:///fs/cocos/audio/audio-source.js", ["../core/data/decorators/index.js", "../core/components/component.js", "../core/math/index.js", "./assets/clip.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, tooltip, type, range, serializable, Component, clamp, AudioClip, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, AudioSource;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_coreComponentsComponentJs) {
      Component = _coreComponentsComponentJs.Component;
    }, function (_coreMathIndexJs) {
      clamp = _coreMathIndexJs.clamp;
    }, function (_assetsClipJs) {
      AudioClip = _assetsClipJs.AudioClip;
    }],
    execute: function () {
      /**
       * @en
       * A representation of a single audio source, <br>
       * contains basic functionalities like play, pause and stop.
       * @zh
       * 音频组件，代表单个音源，提供播放、暂停、停止等基本功能。
       */
      _export("AudioSource", AudioSource = (_dec = ccclass('cc.AudioSource'), _dec2 = help('i18n:cc.AudioSource'), _dec3 = menu('Audio/AudioSource'), _dec4 = type(AudioClip), _dec5 = type(AudioClip), _dec6 = tooltip('i18n:audio.clip'), _dec7 = tooltip('i18n:audio.loop'), _dec8 = tooltip('i18n:audio.playOnAwake'), _dec9 = range([0.0, 1.0]), _dec10 = tooltip('i18n:audio.volume'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioSource, _Component);

        function AudioSource() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_clip", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_loop", _descriptor2, _assertThisInitialized(_this));

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
        ;

        _proto.play = function play() {
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
        ;

        _proto.pause = function pause() {
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
        ;

        _proto.stop = function stop() {
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
        ;

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
        }
        /**
         * @en
         * Set current playback time, in seconds.
         * @zh
         * 以秒为单位设置当前播放时间。
         * @param num playback time to jump to.
         */
        ;

        _createClass(AudioSource, [{
          key: "clip",

          /**
           * @en
           * The default AudioClip to be played for this audio source.
           * @zh
           * 设定要播放的音频。
           */
          set: function set(val) {
            this._clip = val;

            this._syncStates();
          },
          get: function get() {
            return this._clip;
          }
          /**
           * @en
           * Is looping enabled for this audio source?
           * @zh
           * 是否循环播放音频？
           */

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

        }, {
          key: "playOnAwake",
          set: function set(val) {
            this._playOnAwake = val;
          },
          get: function get() {
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

        }, {
          key: "volume",
          set: function set(val) {
            if (Number.isNaN(val)) {
              console.warn('illegal audio volume!');
              return;
            }

            val = clamp(val, 0, 1);

            if (this._clip) {
              this._clip.setVolume(val); // on some platform volume control may not be available


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
          }
          /**
           * @en
           * Get the current playback time, in seconds.
           * @zh
           * 以秒为单位获取当前播放时间。
           */
          ,
          get: function get() {
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

        }, {
          key: "duration",
          get: function get() {
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

        }, {
          key: "state",
          get: function get() {
            if (!this._clip) {
              return AudioClip.PlayingState.INITIALIZING;
            }

            return this._clip.state;
          }
          /**
           * @en
           * Is the audio currently playing?
           * @zh
           * 当前音频是否正在播放？
           */

        }, {
          key: "playing",
          get: function get() {
            return this.state === AudioClip.PlayingState.PLAYING;
          }
        }]);

        return AudioSource;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_clip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_loop", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_playOnAwake", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_volume", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "clip"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "loop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "playOnAwake", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "playOnAwake"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "volume", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "volume"), _class2.prototype)), _class2)) || _class) || _class) || _class));
    }
  };
});