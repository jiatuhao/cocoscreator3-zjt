System.register("q-bundled:///fs/cocos/audio/assets/clip.js", ["../../core/data/decorators/index.js", "../../core/assets/asset.js", "../../core/value-types/index.js", "./player.js", "./player-dom.js", "./player-web.js", "../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, type, serializable, override, Asset, Enum, PlayingState, AudioPlayerDOM, AudioPlayerWeb, legacyCC, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp, AudioType, AudioClip;

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
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      override = _coreDataDecoratorsIndexJs.override;
    }, function (_coreAssetsAssetJs) {
      Asset = _coreAssetsAssetJs.Asset;
    }, function (_coreValueTypesIndexJs) {
      Enum = _coreValueTypesIndexJs.Enum;
    }, function (_playerJs) {
      PlayingState = _playerJs.PlayingState;
    }, function (_playerDomJs) {
      AudioPlayerDOM = _playerDomJs.AudioPlayerDOM;
    }, function (_playerWebJs) {
      AudioPlayerWeb = _playerWebJs.AudioPlayerWeb;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      _export("AudioType", AudioType = Enum({
        WEB_AUDIO: 0,
        DOM_AUDIO: 1,
        JSB_AUDIO: 2,
        UNKNOWN_AUDIO: 3
      }));
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


      _export("AudioClip", AudioClip = (_dec = ccclass('cc.AudioClip'), _dec2 = type(AudioType), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(AudioClip, _Asset);

        // we serialize this because it's unavailable at runtime on some platforms
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
    }
  };
});