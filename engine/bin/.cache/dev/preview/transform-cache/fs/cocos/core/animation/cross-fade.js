System.register("q-bundled:///fs/cocos/core/animation/cross-fade.js", ["../math/utils.js", "../utils/array.js", "./playable.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var clamp01, remove, Playable, legacyCC, CrossFade;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_mathUtilsJs) {
      clamp01 = _mathUtilsJs.clamp01;
    }, function (_utilsArrayJs) {
      remove = _utilsArrayJs.remove;
    }, function (_playableJs) {
      Playable = _playableJs.Playable;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      _export("CrossFade", CrossFade = /*#__PURE__*/function (_Playable) {
        _inheritsLoose(CrossFade, _Playable);

        function CrossFade() {
          var _this;

          _this = _Playable.call(this) || this;
          _this._managedStates = [];
          _this._fadings = [];
          return _this;
        }

        var _proto = CrossFade.prototype;

        _proto.update = function update(deltaTime) {
          if (this.isMotionless) {
            return;
          } // Set all state's weight to 0.


          for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
            var state = this._managedStates[iManagedState].state;

            if (state) {
              state.weight = 0;
            }
          } // Allocate weights.


          var absoluteWeight = 1.0;
          var deadFadingBegin = this._fadings.length;

          for (var iFading = 0; iFading < this._fadings.length; ++iFading) {
            var fading = this._fadings[iFading];
            fading.easeTime += deltaTime; // We should properly handle the case of
            // `fading.easeTime === 0 && fading.easeDuration === 0`, which yields `NaN`.

            var relativeWeight = fading.easeDuration === 0 ? 1 : clamp01(fading.easeTime / fading.easeDuration);
            var weight = relativeWeight * absoluteWeight;
            absoluteWeight *= 1.0 - relativeWeight;

            if (fading.target.state) {
              fading.target.state.weight += weight;
            }

            if (fading.easeTime >= fading.easeDuration) {
              deadFadingBegin = iFading + 1;
              fading.easeTime = fading.easeDuration;
              break;
            }
          } // Kill fadings having no lifetime.


          if (deadFadingBegin !== this._fadings.length) {
            for (var iDeadFading = deadFadingBegin; iDeadFading < this._fadings.length; ++iDeadFading) {
              var deadFading = this._fadings[iDeadFading];
              --deadFading.target.reference;

              if (deadFading.target.reference <= 0) {
                if (deadFading.target.state) {
                  deadFading.target.state.stop();
                }

                remove(this._managedStates, deadFading.target);
              }
            }

            this._fadings.splice(deadFadingBegin);
          }

          for (var _iManagedState = 0; _iManagedState < this._managedStates.length; ++_iManagedState) {
            var _state = this._managedStates[_iManagedState].state;

            if (_state && _state.isMotionless) {
              _state.sample();
            }
          }
        }
        /**
         * 在指定时间内将从当前动画状态切换到指定的动画状态。
         * @param state 指定的动画状态。
         * @param duration 切换时间。
         */
        ;

        _proto.crossFade = function crossFade(state, duration) {
          var _target$state;

          if (this._managedStates.length === 0) {
            // If we are cross fade from a "initial" pose,
            // we do not use the duration.
            // It's meaning-less and may get a bad visual effect.
            duration = 0;
          }

          if (duration === 0) {
            this.clear();
          }

          var target = this._managedStates.find(function (weightedState) {
            return weightedState.state === state;
          });

          if (!target) {
            target = {
              state: state,
              reference: 0
            };

            if (state) {
              state.play();
            }

            this._managedStates.push(target);
          } else if ((_target$state = target.state) === null || _target$state === void 0 ? void 0 : _target$state.isMotionless) {
            target.state.play();
          }

          ++target.reference;

          this._fadings.unshift({
            easeDuration: duration,
            easeTime: 0,
            target: target
          });
        };

        _proto.clear = function clear() {
          for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
            var state = this._managedStates[iManagedState].state;

            if (state) {
              state.stop();
            }
          }

          this._managedStates.length = 0;
          this._fadings.length = 0;
        };

        _proto.onPlay = function onPlay() {
          _Playable.prototype.onPlay.call(this);

          legacyCC.director.getAnimationManager().addCrossFade(this);
        }
        /**
         * 停止我们淡入淡出的所有动画状态并停止淡入淡出。
         */
        ;

        _proto.onPause = function onPause() {
          _Playable.prototype.onPause.call(this);

          legacyCC.director.getAnimationManager().removeCrossFade(this);

          for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
            var state = this._managedStates[iManagedState].state;

            if (state) {
              state.pause();
            }
          }
        }
        /**
         * 恢复我们淡入淡出的所有动画状态并继续淡入淡出。
         */
        ;

        _proto.onResume = function onResume() {
          _Playable.prototype.onResume.call(this);

          legacyCC.director.getAnimationManager().addCrossFade(this);

          for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
            var state = this._managedStates[iManagedState].state;

            if (state) {
              state.resume();
            }
          }
        }
        /**
         * 停止所有淡入淡出的动画状态。
         */
        ;

        _proto.onStop = function onStop() {
          _Playable.prototype.onStop.call(this);

          legacyCC.director.getAnimationManager().removeCrossFade(this);
          this.clear();
        };

        return CrossFade;
      }(Playable));
    }
  };
});