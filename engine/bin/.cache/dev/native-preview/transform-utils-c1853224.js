System.register(['./coordinates-converts-utils-fa8f5fc5.js', './renderable-component-7d3cd284.js', './find-c704a59e.js'], function (exports) {
    'use strict';
    var ccclass, warn, _applyDecoratedDescriptor, _initializerDefineProperty, serializable, legacyCC, errorID, lerp, Quat, ValueType, clamp01, Mat4, _inheritsLoose, _createForOfIteratorHelperLoose, CompactValueTypeArray, _createClass, Asset, _assertThisInitialized, murmurhash2_32_gc, Vec2, Vec3, Vec4, Color, Size, error, getError, assertIsNonNullable, ccenum, remove, type, tooltip, executeInEditMode, createMap, contains, warnID, Eventify, help, executionOrder, menu, Component, Node, isLerpable, WrapMode, WrappedInfo, WrapModeMask;
    return {
        setters: [function (module) {
            ccclass = module.dQ;
            warn = module.w;
            _applyDecoratedDescriptor = module.dT;
            _initializerDefineProperty = module.dU;
            serializable = module.dX;
            legacyCC = module.l;
            errorID = module.f;
            lerp = module.cS;
            Quat = module.cB;
            ValueType = module.d8;
            clamp01 = module.cR;
            Mat4 = module.cE;
            _inheritsLoose = module.dR;
            _createForOfIteratorHelperLoose = module.t;
            CompactValueTypeArray = module.dx;
            _createClass = module.dS;
            Asset = module.dB;
            _assertThisInitialized = module.dV;
            murmurhash2_32_gc = module.dh;
            Vec2 = module.cv;
            Vec3 = module.cx;
            Vec4 = module.cz;
            Color = module.cL;
            Size = module.cH;
            error = module.e;
            getError = module.dI;
            assertIsNonNullable = module.fc;
            ccenum = module.d7;
            remove = module.eL;
            type = module.e5;
            tooltip = module.f8;
            executeInEditMode = module.f9;
            createMap = module.eo;
            contains = module.fd;
            warnID = module.d;
            Eventify = module.dA;
            help = module.fa;
            executionOrder = module.fe;
            menu = module.fb;
            Component = module.dO;
        }, function (module) {
            Node = module.N;
        }, function (module) {
            isLerpable = module.j;
            WrapMode = module.W;
            WrappedInfo = module.k;
            WrapModeMask = module.m;
        }],
        execute: function () {

            exports({
                a: isCustomPath,
                d: bezier,
                e: evaluatePath,
                f: bezierByTime,
                h: computeRatioByType,
                i: isPropertyPath,
                k: getPathFromRoot,
                l: getWorldTransformUntilRoot,
                m: cubicOut,
                n: getWorldMatrix,
                o: deleteTransform,
                p: getTransform,
                s: sampleAnimationCurve
            });

            function constant() {
              return 0;
            }
            function linear(k) {
              return k;
            }
            function quadIn(k) {
              return k * k;
            }
            function quadOut(k) {
              return k * (2 - k);
            }
            function quadInOut(k) {
              k *= 2;

              if (k < 1) {
                return 0.5 * k * k;
              }

              return -0.5 * (--k * (k - 2) - 1);
            }
            function cubicIn(k) {
              return k * k * k;
            }
            function cubicOut(k) {
              return --k * k * k + 1;
            }
            function cubicInOut(k) {
              k *= 2;

              if (k < 1) {
                return 0.5 * k * k * k;
              }

              return 0.5 * ((k -= 2) * k * k + 2);
            }
            function quartIn(k) {
              return k * k * k * k;
            }
            function quartOut(k) {
              return 1 - --k * k * k * k;
            }
            function quartInOut(k) {
              k *= 2;

              if (k < 1) {
                return 0.5 * k * k * k * k;
              }

              return -0.5 * ((k -= 2) * k * k * k - 2);
            }
            function quintIn(k) {
              return k * k * k * k * k;
            }
            function quintOut(k) {
              return --k * k * k * k * k + 1;
            }
            function quintInOut(k) {
              k *= 2;

              if (k < 1) {
                return 0.5 * k * k * k * k * k;
              }

              return 0.5 * ((k -= 2) * k * k * k * k + 2);
            }
            function sineIn(k) {
              return 1 - Math.cos(k * Math.PI / 2);
            }
            function sineOut(k) {
              return Math.sin(k * Math.PI / 2);
            }
            function sineInOut(k) {
              return 0.5 * (1 - Math.cos(Math.PI * k));
            }
            function expoIn(k) {
              return k === 0 ? 0 : Math.pow(1024, k - 1);
            }
            function expoOut(k) {
              return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
            }
            function expoInOut(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              k *= 2;

              if (k < 1) {
                return 0.5 * Math.pow(1024, k - 1);
              }

              return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
            }
            function circIn(k) {
              return 1 - Math.sqrt(1 - k * k);
            }
            function circOut(k) {
              return Math.sqrt(1 - --k * k);
            }
            function circInOut(k) {
              k *= 2;

              if (k < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
              }

              return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            }
            function elasticIn(k) {
              var s;
              var a = 0.1;
              var p = 0.4;

              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              if (!a || a < 1) {
                a = 1;
                s = p / 4;
              } else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
              }

              return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
            }
            function elasticOut(k) {
              var s;
              var a = 0.1;
              var p = 0.4;

              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              if (!a || a < 1) {
                a = 1;
                s = p / 4;
              } else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
              }

              return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
            }
            function elasticInOut(k) {
              var s;
              var a = 0.1;
              var p = 0.4;

              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              if (!a || a < 1) {
                a = 1;
                s = p / 4;
              } else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
              }

              k *= 2;

              if (k < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
              }

              return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
            }
            function backIn(k) {
              var s = 1.70158;
              return k * k * ((s + 1) * k - s);
            }
            function backOut(k) {
              var s = 1.70158;
              return --k * k * ((s + 1) * k + s) + 1;
            }
            function backInOut(k) {
              var s = 1.70158 * 1.525;
              k *= 2;

              if (k < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
              }

              return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            }
            function bounceIn(k) {
              return 1 - bounceOut(1 - k);
            }
            function bounceOut(k) {
              if (k < 1 / 2.75) {
                return 7.5625 * k * k;
              } else if (k < 2 / 2.75) {
                return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
              } else if (k < 2.5 / 2.75) {
                return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
              } else {
                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
              }
            }
            function bounceInOut(k) {
              if (k < 0.5) {
                return bounceIn(k * 2) * 0.5;
              }

              return bounceOut(k * 2 - 1) * 0.5 + 0.5;
            }
            function smooth(k) {
              if (k <= 0) {
                return 0;
              }

              if (k >= 1) {
                return 1;
              }

              return k * k * (3 - 2 * k);
            }
            function fade(k) {
              if (k <= 0) {
                return 0;
              }

              if (k >= 1) {
                return 1;
              }

              return k * k * k * (k * (k * 6 - 15) + 10);
            }
            var quadOutIn = _makeOutIn(quadIn, quadOut);
            var cubicOutIn = _makeOutIn(cubicIn, cubicOut);
            var quartOutIn = _makeOutIn(quartIn, quartOut);
            var quintOutIn = _makeOutIn(quintIn, quintOut);
            var sineOutIn = _makeOutIn(sineIn, sineOut);
            var expoOutIn = _makeOutIn(expoIn, expoOut);
            var circOutIn = _makeOutIn(circIn, circOut);
            var elasticOutIn = _makeOutIn(elasticIn, elasticOut);
            var backOutIn = _makeOutIn(backIn, backOut);
            var bounceOutIn = _makeOutIn(bounceIn, bounceOut);

            function _makeOutIn(fnIn, fnOut) {
              return function (k) {
                if (k < 0.5) {
                  return fnOut(k * 2) / 2;
                }

                return fnIn(2 * k - 1) / 2 + 0.5;
              };
            }

            var easing = /*#__PURE__*/Object.freeze({
                __proto__: null,
                constant: constant,
                linear: linear,
                quadIn: quadIn,
                quadOut: quadOut,
                quadInOut: quadInOut,
                cubicIn: cubicIn,
                cubicOut: cubicOut,
                cubicInOut: cubicInOut,
                quartIn: quartIn,
                quartOut: quartOut,
                quartInOut: quartInOut,
                quintIn: quintIn,
                quintOut: quintOut,
                quintInOut: quintInOut,
                sineIn: sineIn,
                sineOut: sineOut,
                sineInOut: sineInOut,
                expoIn: expoIn,
                expoOut: expoOut,
                expoInOut: expoInOut,
                circIn: circIn,
                circOut: circOut,
                circInOut: circInOut,
                elasticIn: elasticIn,
                elasticOut: elasticOut,
                elasticInOut: elasticInOut,
                backIn: backIn,
                backOut: backOut,
                backInOut: backInOut,
                bounceIn: bounceIn,
                bounceOut: bounceOut,
                bounceInOut: bounceInOut,
                smooth: smooth,
                fade: fade,
                quadOutIn: quadOutIn,
                cubicOutIn: cubicOutIn,
                quartOutIn: quartOutIn,
                quintOutIn: quintOutIn,
                sineOutIn: sineOutIn,
                expoOutIn: expoOutIn,
                circOutIn: circOutIn,
                elasticOutIn: elasticOutIn,
                backOutIn: backOutIn,
                bounceOutIn: bounceOutIn
            });
            exports('b', easing);

            var _dec, _class, _class2, _descriptor, _temp, _dec2, _class4, _class5, _descriptor2, _temp2;
            function isPropertyPath(path) {
              return typeof path === 'string' || typeof path === 'number';
            }
            function isCustomPath(path, constructor) {
              return path instanceof constructor;
            }
            var HierarchyPath = exports('H', (_dec = ccclass('cc.animation.HierarchyPath'), _dec(_class = (_class2 = (_temp = function () {
              function HierarchyPath(path) {
                _initializerDefineProperty(this, "path", _descriptor, this);

                this.path = path || '';
              }

              var _proto = HierarchyPath.prototype;

              _proto.get = function get(target) {
                if (!(target instanceof Node)) {
                  warn("Target of hierarchy path should be of type Node.");
                  return null;
                }

                var result = target.getChildByPath(this.path);

                if (!result) {
                  warn("Node \"" + target.name + "\" has no path \"" + this.path + "\"");
                  return null;
                }

                return result;
              };

              return HierarchyPath;
            }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "path", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            })), _class2)) || _class));
            var ComponentPath = exports('C', (_dec2 = ccclass('cc.animation.ComponentPath'), _dec2(_class4 = (_class5 = (_temp2 = function () {
              function ComponentPath(component) {
                _initializerDefineProperty(this, "component", _descriptor2, this);

                this.component = component || '';
              }

              var _proto2 = ComponentPath.prototype;

              _proto2.get = function get(target) {
                if (!(target instanceof Node)) {
                  warn("Target of component path should be of type Node.");
                  return null;
                }

                var result = target.getComponent(this.component);

                if (!result) {
                  warn("Node \"" + target.name + "\" has no component \"" + this.component + "\"");
                  return null;
                }

                return result;
              };

              return ComponentPath;
            }(), _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "component", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            })), _class5)) || _class4));
            function evaluatePath(root) {
              var result = root;

              for (var iPath = 0; iPath < (arguments.length <= 1 ? 0 : arguments.length - 1); ++iPath) {
                var path = iPath + 1 < 1 || arguments.length <= iPath + 1 ? undefined : arguments[iPath + 1];

                if (isPropertyPath(path)) {
                  if (!(path in result)) {
                    warn("Target object has no property \"" + path + "\"");
                    return null;
                  } else {
                    result = result[path];
                  }
                } else {
                  result = path.get(result);
                }

                if (result === null) {
                  break;
                }
              }

              return result;
            }

            function binarySearchEpsilon(array, value, EPSILON) {
              if (EPSILON === void 0) {
                EPSILON = 1e-6;
              }

              var low = 0;
              var high = array.length - 1;
              var middle = high >>> 1;

              for (; low <= high; middle = low + high >>> 1) {
                var test = array[middle];

                if (test > value + EPSILON) {
                  high = middle - 1;
                } else if (test < value - EPSILON) {
                  low = middle + 1;
                } else {
                  return middle;
                }
              }

              return ~low;
            }

            function bezier(C1, C2, C3, C4, t) {
              var t1 = 1 - t;
              return t1 * (t1 * (C1 + (C2 * 3 - C1) * t) + C3 * 3 * t * t) + C4 * t * t * t;
            }
            legacyCC.bezier = bezier;
            var cos = Math.cos;
            var acos = Math.acos;
            var max = Math.max;
            var pi = Math.PI;
            var tau = 2 * pi;
            var sqrt = Math.sqrt;

            function crt(v) {
              if (v < 0) {
                return -Math.pow(-v, 1 / 3);
              } else {
                return Math.pow(v, 1 / 3);
              }
            }

            function cardano(curve, x) {
              var pa = x - 0;
              var pb = x - curve[0];
              var pc = x - curve[2];
              var pd = x - 1;
              var pa3 = pa * 3;
              var pb3 = pb * 3;
              var pc3 = pc * 3;
              var d = -pa + pb3 - pc3 + pd;
              var rd = 1 / d;
              var r3 = 1 / 3;
              var a = (pa3 - 6 * pb + pc3) * rd;
              var a3 = a * r3;
              var b = (-pa3 + pb3) * rd;
              var c = pa * rd;
              var p = (3 * b - a * a) * r3;
              var p3 = p * r3;
              var q = (2 * a * a * a - 9 * a * b + 27 * c) / 27;
              var q2 = q / 2;
              var discriminant = q2 * q2 + p3 * p3 * p3;
              var u1;
              var v1;
              var x1;
              var x2;
              var x3;

              if (discriminant < 0) {
                var mp3 = -p * r3;
                var mp33 = mp3 * mp3 * mp3;
                var r = sqrt(mp33);
                var t = -q / (2 * r);
                var cosphi = t < -1 ? -1 : t > 1 ? 1 : t;
                var phi = acos(cosphi);
                var crtr = crt(r);
                var t1 = 2 * crtr;
                x1 = t1 * cos(phi * r3) - a3;
                x2 = t1 * cos((phi + tau) * r3) - a3;
                x3 = t1 * cos((phi + 2 * tau) * r3) - a3;

                if (x1 >= 0 && x1 <= 1) {
                  if (x2 >= 0 && x2 <= 1) {
                    if (x3 >= 0 && x3 <= 1) {
                      return max(x1, x2, x3);
                    } else {
                      return max(x1, x2);
                    }
                  } else if (x3 >= 0 && x3 <= 1) {
                    return max(x1, x3);
                  } else {
                    return x1;
                  }
                } else if (x2 >= 0 && x2 <= 1) {
                  if (x3 >= 0 && x3 <= 1) {
                    return max(x2, x3);
                  } else {
                    return x2;
                  }
                } else {
                  return x3;
                }
              } else if (discriminant === 0) {
                u1 = q2 < 0 ? crt(-q2) : -crt(q2);
                x1 = 2 * u1 - a3;
                x2 = -u1 - a3;

                if (x1 >= 0 && x1 <= 1) {
                  if (x2 >= 0 && x2 <= 1) {
                    return max(x1, x2);
                  } else {
                    return x1;
                  }
                } else {
                  return x2;
                }
              } else {
                  var sd = sqrt(discriminant);
                  u1 = crt(-q2 + sd);
                  v1 = crt(q2 + sd);
                  x1 = u1 - v1 - a3;
                  return x1;
                }
            }

            function bezierByTime(controlPoints, x) {
              var percent = cardano(controlPoints, x);
              var p1y = controlPoints[1];
              var p2y = controlPoints[3];
              return ((1 - percent) * (p1y + (p2y - p1y) * percent) * 3 + percent * percent) * percent;
            }
            legacyCC.bezierByTime = bezierByTime;

            var RatioSampler = exports('R', function () {
              function RatioSampler(ratios) {
                this.ratios = void 0;
                this._findRatio = void 0;
                this.ratios = ratios;
                var currRatioDif;
                var lastRatioDif;
                var canOptimize = true;
                var EPSILON = 1e-6;

                for (var i = 1, l = ratios.length; i < l; i++) {
                  currRatioDif = ratios[i] - ratios[i - 1];

                  if (i === 1) {
                    lastRatioDif = currRatioDif;
                  } else if (Math.abs(currRatioDif - lastRatioDif) > EPSILON) {
                    canOptimize = false;
                    break;
                  }
                }

                this._findRatio = canOptimize ? quickFindIndex : binarySearchEpsilon;
              }

              var _proto = RatioSampler.prototype;

              _proto.sample = function sample(ratio) {
                return this._findRatio(this.ratios, ratio);
              };

              return RatioSampler;
            }());
            legacyCC.RatioSampler = RatioSampler;
            var AnimCurve = exports('g', function () {
              AnimCurve.Bezier = function Bezier(controlPoints) {
                return controlPoints;
              };

              function AnimCurve(propertyCurveData, duration) {
                this.types = undefined;
                this.type = null;
                this._values = [];
                this._lerp = undefined;
                this._duration = void 0;
                this._array = void 0;
                this._duration = duration;
                this._values = propertyCurveData.values;

                var getCurveType = function getCurveType(easingMethod) {
                  if (typeof easingMethod === 'string') {
                    return easingMethod;
                  } else if (Array.isArray(easingMethod)) {
                    if (easingMethod[0] === easingMethod[1] && easingMethod[2] === easingMethod[3]) {
                      return AnimCurve.Linear;
                    } else {
                      return AnimCurve.Bezier(easingMethod);
                    }
                  } else {
                    return AnimCurve.Linear;
                  }
                };

                if (propertyCurveData.easingMethod !== undefined) {
                  this.type = getCurveType(propertyCurveData.easingMethod);
                } else if (Array.isArray(propertyCurveData.easingMethods)) {
                  this.types = propertyCurveData.easingMethods.map(getCurveType);
                } else if (propertyCurveData.easingMethods !== undefined) {
                  this.types = new Array(this._values.length).fill(null);

                  for (var _i = 0, _Object$keys = Object.keys(propertyCurveData.easingMethods); _i < _Object$keys.length; _i++) {
                    var index = _Object$keys[_i];
                    this.types[index] = getCurveType(propertyCurveData.easingMethods[index]);
                  }
                } else {
                  this.type = null;
                }

                var firstValue = propertyCurveData.values[0];
                var interpolate = propertyCurveData.interpolate === undefined ? true : propertyCurveData.interpolate;

                if (interpolate) {
                  this._lerp = selectLerpFx(firstValue);
                }

                if (propertyCurveData._arrayLength !== undefined) {
                  this._array = new Array(propertyCurveData._arrayLength);
                }
              }

              var _proto2 = AnimCurve.prototype;

              _proto2.hasLerp = function hasLerp() {
                return !!this._lerp;
              };

              _proto2.valueAt = function valueAt(index) {
                if (this._array === undefined) {
                  var value = this._values[index];

                  if (value && value.getNoLerp) {
                    return value.getNoLerp();
                  } else {
                    return value;
                  }
                } else {
                  for (var i = 0; i < this._array.length; ++i) {
                    this._array[i] = this._values[this._array.length * index + i];
                  }

                  return this._array;
                }
              };

              _proto2.valueBetween = function valueBetween(ratio, from, fromRatio, to, toRatio) {
                if (this._lerp) {
                  var type = this.types ? this.types[from] : this.type;
                  var dRatio = toRatio - fromRatio;
                  var ratioBetweenFrames = (ratio - fromRatio) / dRatio;

                  if (type) {
                    ratioBetweenFrames = computeRatioByType(ratioBetweenFrames, type);
                  }

                  if (this._array === undefined) {
                    var fromVal = this._values[from];
                    var toVal = this._values[to];

                    var value = this._lerp(fromVal, toVal, ratioBetweenFrames, dRatio * this._duration);

                    return value;
                  } else {
                    for (var i = 0; i < this._array.length; ++i) {
                      var _fromVal = this._values[this._array.length * from + i];
                      var _toVal = this._values[this._array.length * to + i];
                      this._array[i] = this._lerp(_fromVal, _toVal, ratioBetweenFrames, dRatio * this._duration);
                    }

                    return this._array;
                  }
                } else if (this._array === undefined) {
                  return this.valueAt(from);
                } else {
                  for (var _i2 = 0; _i2 < this._array.length; ++_i2) {
                    this._array[_i2] = this._values[this._array.length * from + _i2];
                  }

                  return this._array;
                }
              };

              _proto2.empty = function empty() {
                return this._values.length === 0;
              };

              _proto2.constant = function constant() {
                return this._values.length === 1;
              };

              return AnimCurve;
            }());
            AnimCurve.Linear = null;
            legacyCC.AnimCurve = AnimCurve;
            var EventInfo = exports('E', function () {
              function EventInfo() {
                this.events = [];
              }

              var _proto3 = EventInfo.prototype;

              _proto3.add = function add(func, params) {
                this.events.push({
                  func: func || '',
                  params: params || []
                });
              };

              return EventInfo;
            }());
            function sampleAnimationCurve(curve, sampler, ratio) {
              var index = sampler.sample(ratio);

              if (index < 0) {
                index = ~index;

                if (index <= 0) {
                  index = 0;
                } else if (index >= sampler.ratios.length) {
                  index = sampler.ratios.length - 1;
                } else {
                  return curve.valueBetween(ratio, index - 1, sampler.ratios[index - 1], index, sampler.ratios[index]);
                }
              }

              return curve.valueAt(index);
            }
            legacyCC.sampleAnimationCurve = sampleAnimationCurve;
            function computeRatioByType(ratio, type) {
              if (typeof type === 'string') {
                var func = easing[type];

                if (func) {
                  ratio = func(ratio);
                } else {
                  errorID(3906, type);
                }
              } else if (Array.isArray(type)) {
                ratio = bezierByTime(type, ratio);
              }

              return ratio;
            }

            function quickFindIndex(ratios, ratio) {
              var length = ratios.length - 1;

              if (length === 0) {
                return 0;
              }

              var start = ratios[0];

              if (ratio < start) {
                return 0;
              }

              var end = ratios[length];

              if (ratio > end) {
                return length;
              }

              ratio = (ratio - start) / (end - start);
              var eachLength = 1 / length;
              var index = ratio / eachLength;
              var floorIndex = index | 0;
              var EPSILON = 1e-6;

              if (index - floorIndex < EPSILON) {
                return floorIndex;
              } else if (floorIndex + 1 - index < EPSILON) {
                return floorIndex + 1;
              }

              return ~(floorIndex + 1);
            }

            var selectLerpFx = function () {
              function makeValueTypeLerpFx(constructor) {
                var tempValue = new constructor();
                return function (from, to, ratio) {
                  constructor.lerp(tempValue, from, to, ratio);
                  return tempValue;
                };
              }

              function callLerpable(from, to, t, dt) {
                return from.lerp(to, t, dt);
              }

              function makeQuatSlerpFx() {
                var tempValue = new Quat();
                return function (from, to, t, dt) {
                  return Quat.slerp(tempValue, from, to, t);
                };
              }

              return function (value) {
                if (value === null) {
                  return undefined;
                }

                if (typeof value === 'number') {
                  return lerp;
                } else if (typeof value === 'object' && value.constructor) {
                  if (value instanceof Quat) {
                    return makeQuatSlerpFx();
                  } else if (value instanceof ValueType) {
                    return makeValueTypeLerpFx(value.constructor);
                  } else if (value.constructor === Number) {
                    return lerp;
                  } else if (isLerpable(value)) {
                    return callLerpable;
                  }
                }

                return undefined;
              };
            }();

            var SkelAnimDataHub = exports('S', function () {
              function SkelAnimDataHub() {}

              SkelAnimDataHub.getOrExtract = function getOrExtract(clip) {
                var data = SkelAnimDataHub.pool.get(clip);

                if (!data || data.info.sample !== clip.sample) {
                  if (data) {
                    legacyCC.director.root.dataPoolManager.releaseAnimationClip(clip);
                  }

                  data = convertToSkeletalCurves(clip);
                  SkelAnimDataHub.pool.set(clip, data);
                }

                return data;
              };

              SkelAnimDataHub.destroy = function destroy(clip) {
                SkelAnimDataHub.pool["delete"](clip);
              };

              return SkelAnimDataHub;
            }());
            SkelAnimDataHub.pool = new Map();

            function convertToSkeletalCurves(clip) {
              var data = {};
              clip.curves.forEach(function (curve) {
                if (!curve.valueAdapter && isCustomPath(curve.modifiers[0], HierarchyPath) && isPropertyPath(curve.modifiers[1])) {
                  var path = curve.modifiers[0].path;
                  var cs = data[path];

                  if (!cs) {
                    cs = data[path] = {};
                  }

                  var property = curve.modifiers[1];
                  cs[property] = {
                    values: curve.data.values,
                    keys: curve.data.keys
                  };
                }
              });
              var frames = Math.ceil(clip.sample * clip.duration) + 1;

              var _loop = function _loop() {
                var path = _Object$keys[_i];
                var props = data[path];

                if (!props) {
                  return "continue";
                }

                Object.defineProperty(props, 'worldMatrix', {
                  get: function get() {
                    if (!props._worldMatrix) {
                      var position = props.position,
                          rotation = props.rotation,
                          scale = props.scale;
                      convertToUniformSample(clip, position, frames);
                      convertToUniformSample(clip, rotation, frames);
                      convertToUniformSample(clip, scale, frames);
                      convertToWorldSpace(data, path, props);
                    }

                    return props._worldMatrix;
                  }
                });
              };

              for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
                var _ret = _loop();

                if (_ret === "continue") continue;
              }

              var info = {
                frames: frames,
                sample: clip.sample
              };
              return {
                info: info,
                data: data
              };
            }

            function convertToUniformSample(clip, curve, frames) {
              var keys = clip.keys[curve.keys];
              var values = [];

              if (!keys || keys.length === 1) {
                for (var i = 0; i < frames; i++) {
                  values[i] = curve.values[0].clone();
                }
              } else {
                var isQuat = curve.values[0] instanceof Quat;

                for (var _i2 = 0, idx = 0; _i2 < frames; _i2++) {
                  var time = _i2 / clip.sample;

                  while (keys[idx] <= time) {
                    idx++;
                  }

                  if (idx > keys.length - 1) {
                    idx = keys.length - 1;
                    time = keys[idx];
                  } else if (idx === 0) {
                    idx = 1;
                  }

                  var from = curve.values[idx - 1].clone();
                  var denom = keys[idx] - keys[idx - 1];
                  var ratio = denom ? clamp01((time - keys[idx - 1]) / denom) : 1;

                  if (isQuat) {
                    from.slerp(curve.values[idx], ratio);
                  } else {
                    from.lerp(curve.values[idx], ratio);
                  }

                  values[_i2] = from;
                }
              }

              curve.values = values;
            }

            function convertToWorldSpace(convertedProps, path, props) {
              var oPos = props.position.values;
              var oRot = props.rotation.values;
              var oScale = props.scale.values;
              var matrix = oPos.map(function () {
                return new Mat4();
              });
              var idx = path.lastIndexOf('/');
              var pMatrix = null;

              if (idx > 0) {
                var name = path.substring(0, idx);
                var data = convertedProps[name];

                if (!data) {
                  console.warn('no data for parent bone?');
                  return;
                }

                pMatrix = data.worldMatrix.values;
              }

              for (var i = 0; i < oPos.length; i++) {
                var oT = oPos[i];
                var oR = oRot[i];
                var oS = oScale[i];
                var m = matrix[i];
                Mat4.fromRTS(m, oR, oT, oS);

                if (pMatrix) {
                  Mat4.multiply(m, pMatrix[i], m);
                }
              }

              Object.keys(props).forEach(function (k) {
                return delete props[k];
              });
              props._worldMatrix = {
                keys: 0,
                interpolate: false,
                values: matrix
              };
            }

            var _dec$1, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _temp$1;
            var AnimationClip = exports('j', (_dec$1 = ccclass('cc.AnimationClip'), _dec$1(_class$1 = (_class2$1 = (_temp$1 = _class3 = function (_Asset) {
              _inheritsLoose(AnimationClip, _Asset);

              function AnimationClip() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "sample", _descriptor$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "speed", _descriptor2$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "wrapMode", _descriptor3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "events", _descriptor4, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_duration", _descriptor5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_keys", _descriptor6, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_stepness", _descriptor7, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_curves", _descriptor8, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_commonTargets", _descriptor9, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_hash", _descriptor10, _assertThisInitialized(_this));

                _this.frameRate = 0;
                _this._ratioSamplers = [];
                _this._runtimeCurves = void 0;
                _this._runtimeEvents = void 0;
                _this._data = null;
                return _this;
              }

              AnimationClip.createWithSpriteFrames = function createWithSpriteFrames(spriteFrames, sample) {
                if (!Array.isArray(spriteFrames)) {
                  errorID(3905);
                  return null;
                }

                var clip = new AnimationClip();
                clip.sample = sample || clip.sample;
                clip.duration = spriteFrames.length / clip.sample;
                var step = 1 / clip.sample;
                var keys = new Array(spriteFrames.length);
                var values = new Array(keys.length);

                for (var i = 0; i < spriteFrames.length; i++) {
                  keys[i] = i * step;
                  values[i] = spriteFrames[i];
                }

                clip.keys = [keys];
                clip.curves = [{
                  modifiers: [new ComponentPath('cc.Sprite'), 'spriteFrame'],
                  data: {
                    keys: 0,
                    values: values
                  }
                }];
                return clip;
              };

              var _proto = AnimationClip.prototype;

              _proto.onLoaded = function onLoaded() {
                this.frameRate = this.sample;

                this._decodeCVTAs();
              };

              _proto.getPropertyCurves = function getPropertyCurves() {
                if (!this._runtimeCurves) {
                  this._createPropertyCurves();
                }

                return this._runtimeCurves;
              };

              _proto.updateEventDatas = function updateEventDatas() {
                delete this._runtimeEvents;
              };

              _proto.getEventGroupIndexAtRatio = function getEventGroupIndexAtRatio(ratio) {
                if (!this._runtimeEvents) {
                  this._createRuntimeEvents();
                }

                var result = binarySearchEpsilon(this._runtimeEvents.ratios, ratio);
                return result;
              };

              _proto.hasEvents = function hasEvents() {
                return this.events.length !== 0;
              };

              _proto.destroy = function destroy() {
                if (legacyCC.director.root.dataPoolManager) {
                  legacyCC.director.root.dataPoolManager.releaseAnimationClip(this);
                }

                SkelAnimDataHub.destroy(this);
                return _Asset.prototype.destroy.call(this);
              };

              _proto._createPropertyCurves = function _createPropertyCurves() {
                var _this2 = this;

                this._ratioSamplers = this._keys.map(function (keys) {
                  return new RatioSampler(keys.map(function (key) {
                    return key / _this2._duration;
                  }));
                });
                this._runtimeCurves = this._curves.map(function (targetCurve) {
                  return {
                    curve: new AnimCurve(targetCurve.data, _this2._duration),
                    modifiers: targetCurve.modifiers,
                    valueAdapter: targetCurve.valueAdapter,
                    sampler: _this2._ratioSamplers[targetCurve.data.keys],
                    commonTarget: targetCurve.commonTarget
                  };
                });

                this._applyStepness();
              };

              _proto._createRuntimeEvents = function _createRuntimeEvents() {
                var _this3 = this;

                var ratios = [];
                var eventGroups = [];
                var events = this.events.sort(function (a, b) {
                  return a.frame - b.frame;
                });

                var _loop = function _loop() {
                  var eventData = _step.value;
                  var ratio = eventData.frame / _this3._duration;
                  var i = ratios.findIndex(function (r) {
                    return r === ratio;
                  });

                  if (i < 0) {
                    i = ratios.length;
                    ratios.push(ratio);
                    eventGroups.push({
                      events: []
                    });
                  }

                  eventGroups[i].events.push({
                    functionName: eventData.func,
                    parameters: eventData.params
                  });
                };

                for (var _iterator = _createForOfIteratorHelperLoose(events), _step; !(_step = _iterator()).done;) {
                  _loop();
                }

                this._runtimeEvents = {
                  ratios: ratios,
                  eventGroups: eventGroups
                };
              };

              _proto._applyStepness = function _applyStepness() {};

              _proto._decodeCVTAs = function _decodeCVTAs() {
                var binaryBuffer = ArrayBuffer.isView(this._nativeAsset) ? this._nativeAsset.buffer : this._nativeAsset;

                if (!binaryBuffer) {
                  return;
                }

                var maybeCompressedKeys = this._keys;

                for (var iKey = 0; iKey < maybeCompressedKeys.length; ++iKey) {
                  var keys = maybeCompressedKeys[iKey];

                  if (keys instanceof CompactValueTypeArray) {
                    maybeCompressedKeys[iKey] = keys.decompress(binaryBuffer);
                  }
                }

                for (var iCurve = 0; iCurve < this._curves.length; ++iCurve) {
                  var curve = this._curves[iCurve];

                  if (curve.data.values instanceof CompactValueTypeArray) {
                    curve.data.values = curve.data.values.decompress(binaryBuffer);
                  }
                }
              };

              _createClass(AnimationClip, [{
                key: "duration",
                get: function get() {
                  return this._duration;
                },
                set: function set(value) {
                  this._duration = value;
                }
              }, {
                key: "keys",
                get: function get() {
                  return this._keys;
                },
                set: function set(value) {
                  this._keys = value;
                }
              }, {
                key: "eventGroups",
                get: function get() {
                  if (!this._runtimeEvents) {
                    this._createRuntimeEvents();
                  }

                  return this._runtimeEvents.eventGroups;
                }
              }, {
                key: "stepness",
                get: function get() {
                  return this._stepness;
                },
                set: function set(value) {
                  this._stepness = value;

                  this._applyStepness();
                }
              }, {
                key: "hash",
                get: function get() {
                  if (this._hash) {
                    return this._hash;
                  }

                  var data = this._nativeAsset;
                  var buffer = new Uint8Array(ArrayBuffer.isView(data) ? data.buffer : data);
                  return this._hash = murmurhash2_32_gc(buffer, 666);
                }
              }, {
                key: "curves",
                get: function get() {
                  return this._curves;
                },
                set: function set(value) {
                  this._curves = value;
                  delete this._runtimeCurves;
                }
              }, {
                key: "data",
                get: function get() {
                  return this._data;
                }
              }, {
                key: "commonTargets",
                get: function get() {
                  return this._commonTargets;
                },
                set: function set(value) {
                  this._commonTargets = value;
                }
              }]);

              return AnimationClip;
            }(Asset), _class3.preventDeferredLoadDependents = true, _class3.WrapMode = WrapMode, _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "sample", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 60;
              }
            }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "speed", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 1;
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "wrapMode", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return WrapMode.Normal;
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "events", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "_duration", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "_keys", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "_stepness", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "_curves", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "_commonTargets", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2$1.prototype, "_hash", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            })), _class2$1)) || _class$1));
            legacyCC.AnimationClip = AnimationClip;

            function createBoundTarget(target, modifiers, valueAdapter) {
              var ap;
              var lastPath = modifiers[modifiers.length - 1];

              if (modifiers.length !== 0 && isPropertyPath(lastPath) && !valueAdapter) {
                var resultTarget = evaluatePath.apply(void 0, [target].concat(modifiers.slice(0, modifiers.length - 1)));

                if (resultTarget === null) {
                  return null;
                }

                ap = {
                  isProxy: false,
                  object: resultTarget,
                  property: lastPath
                };
              } else if (!valueAdapter) {
                error("Empty animation curve.");
                return null;
              } else {
                var _resultTarget = evaluatePath.apply(void 0, [target].concat(modifiers));

                if (_resultTarget === null) {
                  return null;
                }

                ap = {
                  isProxy: true,
                  proxy: valueAdapter.forTarget(_resultTarget)
                };
              }

              return {
                setValue: function setValue(value) {
                  if (ap.isProxy) {
                    ap.proxy.set(value);
                  } else {
                    ap.object[ap.property] = value;
                  }
                },
                getValue: function getValue() {
                  if (ap.isProxy) {
                    if (!ap.proxy.get) {
                      error("Target doesn't provide a get method.");
                      return null;
                    } else {
                      return ap.proxy.get();
                    }
                  } else {
                    return ap.object[ap.property];
                  }
                }
              };
            }
            function createBufferedTarget(target, modifiers, valueAdapter) {
              var boundTarget = createBoundTarget(target, modifiers, valueAdapter);

              if (boundTarget === null) {
                return null;
              }

              var value = boundTarget.getValue();
              var copyable = getBuiltinCopy(value);

              if (!copyable) {
                error("Value is not copyable!");
                return null;
              }

              var buffer = copyable.createBuffer();
              var copy = copyable.copy;
              return Object.assign(boundTarget, {
                peek: function peek() {
                  return buffer;
                },
                pull: function pull() {
                  var value = boundTarget.getValue();
                  copy(buffer, value);
                },
                push: function push() {
                  boundTarget.setValue(buffer);
                }
              });
            }

            function SizeCopy(out, source) {
              return out.set(source);
            }

            var getBuiltinCopy = function () {
              var map = new Map();
              map.set(Vec2, {
                createBuffer: function createBuffer() {
                  return new Vec2();
                },
                copy: Vec2.copy
              });
              map.set(Vec3, {
                createBuffer: function createBuffer() {
                  return new Vec3();
                },
                copy: Vec3.copy
              });
              map.set(Vec4, {
                createBuffer: function createBuffer() {
                  return new Vec4();
                },
                copy: Vec4.copy
              });
              map.set(Color, {
                createBuffer: function createBuffer() {
                  return new Color();
                },
                copy: Color.copy
              });
              map.set(Size, {
                createBuffer: function createBuffer() {
                  return new Size();
                },
                copy: SizeCopy
              });
              return function (value) {
                return map.get(value === null || value === void 0 ? void 0 : value.constructor);
              };
            }();

            var Playable = function () {
              function Playable() {
                this._isPlaying = false;
                this._isPaused = false;
                this._stepOnce = false;
              }

              var _proto = Playable.prototype;

              _proto.play = function play() {
                if (this._isPlaying) {
                  if (this._isPaused) {
                    this._isPaused = false;
                    this.onResume();
                  } else {
                    this.onError(getError(3912));
                  }
                } else {
                  this._isPlaying = true;
                  this.onPlay();
                }
              };

              _proto.stop = function stop() {
                if (this._isPlaying) {
                  this._isPlaying = false;
                  this.onStop();
                  this._isPaused = false;
                }
              };

              _proto.pause = function pause() {
                if (this._isPlaying && !this._isPaused) {
                  this._isPaused = true;
                  this.onPause();
                }
              };

              _proto.resume = function resume() {
                if (this._isPlaying && this._isPaused) {
                  this._isPaused = false;
                  this.onResume();
                }
              };

              _proto.step = function step() {
                this.pause();
                this._stepOnce = true;

                if (!this._isPlaying) {
                  this.play();
                }
              };

              _proto.update = function update(deltaTime) {};

              _proto.onPlay = function onPlay() {};

              _proto.onPause = function onPause() {};

              _proto.onResume = function onResume() {};

              _proto.onStop = function onStop() {};

              _proto.onError = function onError(message) {};

              _createClass(Playable, [{
                key: "isPlaying",
                get: function get() {
                  return this._isPlaying;
                }
              }, {
                key: "isPaused",
                get: function get() {
                  return this._isPaused;
                }
              }, {
                key: "isMotionless",
                get: function get() {
                  return !this.isPlaying || this.isPaused;
                }
              }]);

              return Playable;
            }();

            var BlendStateBuffer = exports('B', function () {
              function BlendStateBuffer() {
                this._nodeBlendStates = new Map();
                this._states = new Set();
              }

              var _proto = BlendStateBuffer.prototype;

              _proto.ref = function ref(node, property) {
                var nodeBlendState = this._nodeBlendStates.get(node);

                if (!nodeBlendState) {
                  nodeBlendState = {
                    dirty: false,
                    properties: {}
                  };

                  this._nodeBlendStates.set(node, nodeBlendState);
                }

                var propertyBlendState = nodeBlendState.properties[property];

                if (!propertyBlendState) {
                  propertyBlendState = nodeBlendState.properties[property] = new PropertyBlendState(nodeBlendState, isVec3Property(property) ? new Vec3() : new Quat());
                }

                ++propertyBlendState.refCount;
                return propertyBlendState;
              };

              _proto.deRef = function deRef(node, property) {
                var nodeBlendState = this._nodeBlendStates.get(node);

                if (!nodeBlendState) {
                  return;
                }

                var propertyBlendState = nodeBlendState.properties[property];

                if (!propertyBlendState) {
                  return;
                }

                --propertyBlendState.refCount;

                if (propertyBlendState.refCount > 0) {
                  return;
                }

                delete nodeBlendState.properties[property];

                if (isEmptyNodeBlendState(nodeBlendState)) {
                  this._nodeBlendStates["delete"](node);
                }
              };

              _proto.apply = function apply() {
                this._nodeBlendStates.forEach(function (nodeBlendState, node) {
                  if (!nodeBlendState.dirty) {
                    return;
                  }

                  nodeBlendState.dirty = false;
                  var _nodeBlendState$prope = nodeBlendState.properties,
                      position = _nodeBlendState$prope.position,
                      scale = _nodeBlendState$prope.scale,
                      rotation = _nodeBlendState$prope.rotation,
                      eulerAngles = _nodeBlendState$prope.eulerAngles;
                  var t;
                  var s;
                  var r;
                  var anyChanged = false;

                  if (position && position.weight !== 0) {
                    position.weight = 0;
                    t = position.value;
                    anyChanged = true;
                  }

                  if (scale && scale.weight !== 0) {
                    scale.weight = 0;
                    s = scale.value;
                    anyChanged = true;
                  }

                  if (rotation && rotation.weight !== 0) {
                    rotation.weight = 0;
                    r = rotation.value;
                    anyChanged = true;
                  }

                  if (eulerAngles && eulerAngles.weight !== 0) {
                    eulerAngles.weight = 0;
                    r = eulerAngles.value;
                    anyChanged = true;
                  }

                  if (anyChanged) {
                    node.setRTS(r, t, s);
                  }
                });

                this._states.forEach(function (state) {
                  state.onBlendFinished();
                });
              };

              _proto.bindState = function bindState(state) {
                this._states.add(state);
              };

              _proto.unbindState = function unbindState(state) {
                this._states["delete"](state);
              };

              return BlendStateBuffer;
            }());
            function createBlendStateWriter(blendState, node, property, host, constants) {
              var blendFunction = isVec3Property(property) ? additive3D : additiveQuat;
              var propertyBlendState = blendState.ref(node, property);
              var isConstCacheValid = false;
              var lastWeight = -1;
              return {
                destroy: function destroy() {
                  assertIsNonNullable(propertyBlendState);

                  if (propertyBlendState) {
                    blendState.deRef(node, property);
                    propertyBlendState = null;
                  }
                },
                forTarget: function forTarget() {
                  return {
                    get: function get() {
                      return node[property];
                    },
                    set: function set(value) {
                      if (!propertyBlendState || !host.enabled) {
                        return;
                      }

                      var weight = host.weight;

                      if (constants) {
                        if (weight !== 1 || weight !== lastWeight) {
                          isConstCacheValid = false;
                        } else if (isConstCacheValid) {
                          return;
                        }
                      }

                      blendFunction(value, weight, propertyBlendState);
                      propertyBlendState.weight += weight;
                      propertyBlendState.markAsDirty();
                      isConstCacheValid = true;
                      lastWeight = weight;
                    }
                  };
                }
              };
            }

            function isQuatProperty(property) {
              return property === 'rotation';
            }

            function isVec3Property(property) {
              return !isQuatProperty(property);
            }

            var PropertyBlendState = function () {
              function PropertyBlendState(node, value) {
                this.weight = 0;
                this.value = void 0;
                this.refCount = 0;
                this._node = void 0;
                this._node = node;
                this.value = value;
              }

              var _proto2 = PropertyBlendState.prototype;

              _proto2.markAsDirty = function markAsDirty() {
                this._node.dirty = true;
              };

              return PropertyBlendState;
            }();

            function isEmptyNodeBlendState(nodeBlendState) {
              return !nodeBlendState.properties.position && !nodeBlendState.properties.rotation && !nodeBlendState.properties.eulerAngles && !nodeBlendState.properties.scale;
            }

            function additive3D(value, weight, propertyBlendState) {
              if (propertyBlendState.weight === 0) {
                Vec3.zero(propertyBlendState.value);
              }

              if (weight === 0) {
                return propertyBlendState.value;
              } else if (weight === 1) {
                return Vec3.copy(propertyBlendState.value, value);
              }

              return Vec3.scaleAndAdd(propertyBlendState.value, propertyBlendState.value, value, weight);
            }

            function additiveQuat(value, weight, propertyBlendState) {
              if (propertyBlendState.weight === 0) {
                Quat.identity(propertyBlendState.value);
              }

              if (weight === 0) {
                return propertyBlendState.value;
              } else if (weight === 1) {
                return Quat.copy(propertyBlendState.value, value);
              }

              var t = weight / (propertyBlendState.weight + weight);
              return Quat.slerp(propertyBlendState.value, propertyBlendState.value, value, t);
            }

            var EventType;

            (function (EventType) {
              EventType["PLAY"] = "play";
              EventType["STOP"] = "stop";
              EventType["PAUSE"] = "pause";
              EventType["RESUME"] = "resume";
              EventType["LASTFRAME"] = "lastframe";
              EventType["FINISHED"] = "finished";
            })(EventType || (EventType = {}));

            ccenum(EventType);
            var ICurveInstance = function () {
              function ICurveInstance(runtimeCurve, target, boundTarget) {
                this.commonTargetIndex = void 0;
                this._curve = void 0;
                this._boundTarget = void 0;
                this._rootTargetProperty = void 0;
                this._curveDetail = void 0;
                this._curve = runtimeCurve.curve;
                this._curveDetail = runtimeCurve;
                this._boundTarget = boundTarget;
              }

              var _proto = ICurveInstance.prototype;

              _proto.applySample = function applySample(ratio, index, lerpRequired, samplerResultCache, weight) {
                if (this._curve.empty()) {
                  return;
                }

                var value;

                if (!this._curve.hasLerp() || !lerpRequired) {
                  value = this._curve.valueAt(index);
                } else {
                  value = this._curve.valueBetween(ratio, samplerResultCache.from, samplerResultCache.fromRatio, samplerResultCache.to, samplerResultCache.toRatio);
                }

                this._setValue(value, weight);
              };

              _proto._setValue = function _setValue(value, weight) {
                this._boundTarget.setValue(value);
              };

              _createClass(ICurveInstance, [{
                key: "propertyName",
                get: function get() {
                  return this._rootTargetProperty || '';
                }
              }, {
                key: "curveDetail",
                get: function get() {
                  return this._curveDetail;
                }
              }]);

              return ICurveInstance;
            }();

            function makeSamplerSharedGroup(sampler) {
              return {
                sampler: sampler,
                curves: [],
                samplerResultCache: {
                  from: 0,
                  fromRatio: 0,
                  to: 0,
                  toRatio: 0
                }
              };
            }

            var InvalidIndex = -1;
            var AnimationState = exports('A', function (_Playable) {
              _inheritsLoose(AnimationState, _Playable);

              _createClass(AnimationState, [{
                key: "clip",
                get: function get() {
                  return this._clip;
                }
              }, {
                key: "name",
                get: function get() {
                  return this._name;
                }
              }, {
                key: "length",
                get: function get() {
                  return this.duration;
                }
              }, {
                key: "wrapMode",
                get: function get() {
                  return this._wrapMode;
                },
                set: function set(value) {
                  this._wrapMode = value;

                  this.time = 0;

                  if (value & WrapModeMask.Loop) {
                    this.repeatCount = Infinity;
                  } else {
                    this.repeatCount = 1;
                  }
                }
              }, {
                key: "repeatCount",
                get: function get() {
                  return this._repeatCount;
                },
                set: function set(value) {
                  this._repeatCount = value;
                  var shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;
                  var reverse = (this.wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse;

                  if (value === Infinity && !shouldWrap && !reverse) {
                    this._process = this.simpleProcess;
                  } else {
                    this._process = this.process;
                  }
                }
              }, {
                key: "delay",
                get: function get() {
                  return this._delay;
                },
                set: function set(value) {
                  this._delayTime = this._delay = value;
                }
              }, {
                key: "current",
                get: function get() {
                  return this.getWrappedInfo(this.time).time;
                }
              }, {
                key: "ratio",
                get: function get() {
                  return this.current / this.duration;
                }
              }]);

              function AnimationState(clip, name) {
                var _this;

                if (name === void 0) {
                  name = '';
                }

                _this = _Playable.call(this) || this;
                _this.duration = 1;
                _this.speed = 1;
                _this.time = 0;
                _this.weight = 0;
                _this.frameRate = 0;
                _this._targetNode = null;
                _this._curveLoaded = false;
                _this._clip = void 0;
                _this._process = _this.process;
                _this._samplerSharedGroups = [];
                _this._target = null;
                _this._ignoreIndex = InvalidIndex;
                _this._commonTargetStatuses = [];
                _this._wrapMode = WrapMode.Normal;
                _this._repeatCount = 1;
                _this._delay = 0;
                _this._delayTime = 0;
                _this._currentFramePlayed = false;
                _this._name = void 0;
                _this._lastIterations = void 0;
                _this._lastWrapInfo = null;
                _this._lastWrapInfoEvent = null;
                _this._wrappedInfo = new WrappedInfo();
                _this._blendStateBuffer = null;
                _this._blendStateWriters = [];
                _this._allowLastFrame = false;
                _this._blendStateWriterHost = {
                  weight: 0,
                  enabled: false
                };
                _this._clip = clip;
                _this._name = name || clip && clip.name;
                return _this;
              }

              var _proto2 = AnimationState.prototype;

              _proto2.initialize = function initialize(root, propertyCurves) {
                var _legacyCC$director$ge,
                    _legacyCC$director$ge2,
                    _this2 = this;

                if (this._curveLoaded) {
                  return;
                }

                this._curveLoaded = true;

                this._destroyBlendStateWriters();

                this._samplerSharedGroups.length = 0;
                this._blendStateBuffer = (_legacyCC$director$ge = (_legacyCC$director$ge2 = legacyCC.director.getAnimationManager()) === null || _legacyCC$director$ge2 === void 0 ? void 0 : _legacyCC$director$ge2.blendState) !== null && _legacyCC$director$ge !== void 0 ? _legacyCC$director$ge : null;

                if (this._blendStateBuffer) {
                  this._blendStateBuffer.bindState(this);
                }

                this._targetNode = root;
                var clip = this._clip;
                this.duration = clip.duration;
                this.speed = clip.speed;
                this.wrapMode = clip.wrapMode;
                this.frameRate = clip.sample;

                if ((this.wrapMode & WrapModeMask.Loop) === WrapModeMask.Loop) {
                  this.repeatCount = Infinity;
                } else {
                  this.repeatCount = 1;
                }

                var createBoundTargetOptimized = function createBoundTargetOptimized(createFn, rootTarget, path, valueAdapter, isConstant) {
                  if (!isTargetingTRS(path) || !_this2._blendStateBuffer) {
                    return createFn(rootTarget, path, valueAdapter);
                  } else {
                    var targetNode = evaluatePath.apply(void 0, [rootTarget].concat(path.slice(0, path.length - 1)));

                    if (targetNode !== null && targetNode instanceof Node) {
                      var propertyName = path[path.length - 1];
                      var blendStateWriter = createBlendStateWriter(_this2._blendStateBuffer, targetNode, propertyName, _this2._blendStateWriterHost, isConstant);

                      _this2._blendStateWriters.push(blendStateWriter);

                      return createFn(rootTarget, [], blendStateWriter);
                    }
                  }

                  return null;
                };

                this._commonTargetStatuses = clip.commonTargets.map(function (commonTarget, index) {
                  var target = createBoundTargetOptimized(createBufferedTarget, root, commonTarget.modifiers, commonTarget.valueAdapter, false);

                  if (target === null) {
                    return null;
                  } else {
                    return {
                      target: target,
                      changed: false
                    };
                  }
                });

                if (!propertyCurves) {
                  propertyCurves = clip.getPropertyCurves();
                }

                var _loop = function _loop(iPropertyCurve) {
                  var propertyCurve = propertyCurves[iPropertyCurve];

                  var samplerSharedGroup = _this2._samplerSharedGroups.find(function (value) {
                    return value.sampler === propertyCurve.sampler;
                  });

                  if (!samplerSharedGroup) {
                    samplerSharedGroup = makeSamplerSharedGroup(propertyCurve.sampler);

                    _this2._samplerSharedGroups.push(samplerSharedGroup);
                  }

                  var rootTarget = void 0;

                  if (typeof propertyCurve.commonTarget === 'undefined') {
                    rootTarget = root;
                  } else {
                    var commonTargetStatus = _this2._commonTargetStatuses[propertyCurve.commonTarget];

                    if (!commonTargetStatus) {
                      return "continue";
                    }

                    rootTarget = commonTargetStatus.target.peek();
                  }

                  var boundTarget = createBoundTargetOptimized(createBoundTarget, rootTarget, propertyCurve.modifiers, propertyCurve.valueAdapter, propertyCurve.curve.constant());

                  if (boundTarget === null) ; else {
                    var curveInstance = new ICurveInstance(propertyCurve, rootTarget, boundTarget);
                    curveInstance.commonTargetIndex = propertyCurve.commonTarget;
                    samplerSharedGroup.curves.push(curveInstance);
                  }
                };

                for (var iPropertyCurve = 0; iPropertyCurve < propertyCurves.length; ++iPropertyCurve) {
                  var _ret = _loop(iPropertyCurve);

                  if (_ret === "continue") continue;
                }
              };

              _proto2.destroy = function destroy() {
                this._destroyBlendStateWriters();
              };

              _proto2.onBlendFinished = function onBlendFinished() {
                this._blendStateWriterHost.enabled = false;
              };

              _proto2.emit = function emit() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                legacyCC.director.getAnimationManager().pushDelayEvent(this._emit, this, args);
              };

              _proto2.on = function on(type, callback, target) {
                if (this._target && this._target.isValid) {
                  return this._target.on(type, callback, target);
                } else {
                  return null;
                }
              };

              _proto2.once = function once(type, callback, target) {
                if (this._target && this._target.isValid) {
                  return this._target.once(type, callback, target);
                } else {
                  return null;
                }
              };

              _proto2.off = function off(type, callback, target) {
                if (this._target && this._target.isValid) {
                  this._target.off(type, callback, target);
                }
              };

              _proto2.allowLastFrameEvent = function allowLastFrameEvent(allowed) {
                this._allowLastFrame = allowed;
              };

              _proto2._setEventTarget = function _setEventTarget(target) {
                this._target = target;
              };

              _proto2.setTime = function setTime(time) {
                this._currentFramePlayed = false;
                this.time = time || 0;

                {
                  this._lastWrapInfoEvent = null;
                  this._ignoreIndex = InvalidIndex;
                  var info = this.getWrappedInfo(time, this._wrappedInfo);
                  var direction = info.direction;

                  var frameIndex = this._clip.getEventGroupIndexAtRatio(info.ratio);

                  if (frameIndex < 0) {
                    frameIndex = ~frameIndex - 1;

                    if (direction < 0) {
                      frameIndex += 1;
                    }

                    this._ignoreIndex = frameIndex;
                  }
                }
              };

              _proto2.update = function update(delta) {
                if (this._delayTime > 0) {
                  this._delayTime -= delta;

                  if (this._delayTime > 0) {
                    return;
                  }
                }

                if (this._currentFramePlayed) {
                  this.time += delta * this.speed;
                } else {
                  this._currentFramePlayed = true;
                }

                this._process();
              };

              _proto2.sample = function sample() {
                var info = this.getWrappedInfo(this.time, this._wrappedInfo);

                this._sampleCurves(info.ratio);

                {
                  this._sampleEvents(info);
                }

                return info;
              };

              _proto2.onPlay = function onPlay() {
                this.setTime(0);
                this._delayTime = this._delay;

                this._onReplayOrResume();

                this.emit(EventType.PLAY, this);
              };

              _proto2.onStop = function onStop() {
                if (!this.isPaused) {
                  this._onPauseOrStop();
                }

                this.emit(EventType.STOP, this);
              };

              _proto2.onResume = function onResume() {
                this._onReplayOrResume();

                this.emit(EventType.RESUME, this);
              };

              _proto2.onPause = function onPause() {
                this._onPauseOrStop();

                this.emit(EventType.PAUSE, this);
              };

              _proto2._sampleCurves = function _sampleCurves(ratio) {
                this._blendStateWriterHost.weight = this.weight;
                this._blendStateWriterHost.enabled = true;

                for (var iCommonTarget = 0; iCommonTarget < this._commonTargetStatuses.length; ++iCommonTarget) {
                  var commonTargetStatus = this._commonTargetStatuses[iCommonTarget];

                  if (!commonTargetStatus) {
                    continue;
                  }

                  commonTargetStatus.target.pull();
                  commonTargetStatus.changed = false;
                }

                for (var iSamplerSharedGroup = 0, szSamplerSharedGroup = this._samplerSharedGroups.length; iSamplerSharedGroup < szSamplerSharedGroup; ++iSamplerSharedGroup) {
                  var samplerSharedGroup = this._samplerSharedGroups[iSamplerSharedGroup];
                  var sampler = samplerSharedGroup.sampler;
                  var samplerResultCache = samplerSharedGroup.samplerResultCache;
                  var index = 0;
                  var lerpRequired = false;

                  if (!sampler) {
                    index = 0;
                  } else {
                    index = sampler.sample(ratio);

                    if (index < 0) {
                      index = ~index;

                      if (index <= 0) {
                        index = 0;
                      } else if (index >= sampler.ratios.length) {
                        index = sampler.ratios.length - 1;
                      } else {
                        lerpRequired = true;
                        samplerResultCache.from = index - 1;
                        samplerResultCache.fromRatio = sampler.ratios[samplerResultCache.from];
                        samplerResultCache.to = index;
                        samplerResultCache.toRatio = sampler.ratios[samplerResultCache.to];
                        index = samplerResultCache.from;
                      }
                    }
                  }

                  for (var iCurveInstance = 0, szCurves = samplerSharedGroup.curves.length; iCurveInstance < szCurves; ++iCurveInstance) {
                    var curveInstance = samplerSharedGroup.curves[iCurveInstance];
                    curveInstance.applySample(ratio, index, lerpRequired, samplerResultCache, this.weight);

                    if (curveInstance.commonTargetIndex !== undefined) {
                      var _commonTargetStatus = this._commonTargetStatuses[curveInstance.commonTargetIndex];

                      if (_commonTargetStatus) {
                        _commonTargetStatus.changed = true;
                      }
                    }
                  }
                }

                for (var _iCommonTarget = 0; _iCommonTarget < this._commonTargetStatuses.length; ++_iCommonTarget) {
                  var _commonTargetStatus2 = this._commonTargetStatuses[_iCommonTarget];

                  if (!_commonTargetStatus2) {
                    continue;
                  }

                  if (_commonTargetStatus2.changed) {
                    _commonTargetStatus2.target.push();
                  }
                }
              };

              _proto2.process = function process() {
                var info = this.sample();

                if (this._allowLastFrame) {
                  var lastInfo;

                  if (!this._lastWrapInfo) {
                    lastInfo = this._lastWrapInfo = new WrappedInfo(info);
                  } else {
                    lastInfo = this._lastWrapInfo;
                  }

                  if (this.repeatCount > 1 && (info.iterations | 0) > (lastInfo.iterations | 0)) {
                    this.emit(EventType.LASTFRAME, this);
                  }

                  lastInfo.set(info);
                }

                if (info.stopped) {
                  this.stop();
                  this.emit(EventType.FINISHED, this);
                }
              };

              _proto2.simpleProcess = function simpleProcess() {
                var duration = this.duration;
                var time = this.time % duration;

                if (time < 0) {
                  time += duration;
                }

                var ratio = time / duration;

                this._sampleCurves(ratio);

                {
                  if (this._clip.hasEvents()) {
                    this._sampleEvents(this.getWrappedInfo(this.time, this._wrappedInfo));
                  }
                }

                if (this._allowLastFrame) {
                  if (this._lastIterations === undefined) {
                    this._lastIterations = ratio;
                  }

                  if (this.time > 0 && this._lastIterations > ratio || this.time < 0 && this._lastIterations < ratio) {
                    this.emit(EventType.LASTFRAME, this);
                  }

                  this._lastIterations = ratio;
                }
              };

              _proto2.cache = function cache(frames) {};

              _proto2._needReverse = function _needReverse(currentIterations) {
                var wrapMode = this.wrapMode;
                var needReverse = false;

                if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                  var isEnd = currentIterations - (currentIterations | 0) === 0;

                  if (isEnd && currentIterations > 0) {
                    currentIterations -= 1;
                  }

                  var isOddIteration = currentIterations & 1;

                  if (isOddIteration) {
                    needReverse = !needReverse;
                  }
                }

                if ((wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse) {
                  needReverse = !needReverse;
                }

                return needReverse;
              };

              _proto2.getWrappedInfo = function getWrappedInfo(time, info) {
                info = info || new WrappedInfo();
                var stopped = false;
                var duration = this.duration;
                var repeatCount = this.repeatCount;
                var currentIterations = time > 0 ? time / duration : -(time / duration);

                if (currentIterations >= repeatCount) {
                  currentIterations = repeatCount;
                  stopped = true;
                  var tempRatio = repeatCount - (repeatCount | 0);

                  if (tempRatio === 0) {
                    tempRatio = 1;
                  }

                  time = tempRatio * duration * (time > 0 ? 1 : -1);
                }

                if (time > duration) {
                  var tempTime = time % duration;
                  time = tempTime === 0 ? duration : tempTime;
                } else if (time < 0) {
                  time %= duration;

                  if (time !== 0) {
                    time += duration;
                  }
                }

                var needReverse = false;
                var shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;

                if (shouldWrap) {
                  needReverse = this._needReverse(currentIterations);
                }

                var direction = needReverse ? -1 : 1;

                if (this.speed < 0) {
                  direction *= -1;
                }

                if (shouldWrap && needReverse) {
                  time = duration - time;
                }

                info.ratio = time / duration;
                info.time = time;
                info.direction = direction;
                info.stopped = stopped;
                info.iterations = currentIterations;
                return info;
              };

              _proto2._sampleEvents = function _sampleEvents(wrapInfo) {
                var length = this._clip.eventGroups.length;
                var direction = wrapInfo.direction;

                var eventIndex = this._clip.getEventGroupIndexAtRatio(wrapInfo.ratio);

                if (eventIndex < 0) {
                  eventIndex = ~eventIndex - 1;

                  if (direction < 0) {
                    eventIndex += 1;
                  }
                }

                if (this._ignoreIndex !== eventIndex) {
                  this._ignoreIndex = InvalidIndex;
                }

                wrapInfo.frameIndex = eventIndex;

                if (!this._lastWrapInfoEvent) {
                  this._fireEvent(eventIndex);

                  this._lastWrapInfoEvent = new WrappedInfo(wrapInfo);
                  return;
                }

                var wrapMode = this.wrapMode;
                var currentIterations = wrapIterations(wrapInfo.iterations);
                var lastWrappedInfo = this._lastWrapInfoEvent;
                var lastIterations = wrapIterations(lastWrappedInfo.iterations);
                var lastIndex = lastWrappedInfo.frameIndex;
                var lastDirection = lastWrappedInfo.direction;
                var iterationsChanged = lastIterations !== -1 && currentIterations !== lastIterations;

                if (lastIndex === eventIndex && iterationsChanged && length === 1) {
                  this._fireEvent(0);
                } else if (lastIndex !== eventIndex || iterationsChanged) {
                  direction = lastDirection;

                  do {
                    if (lastIndex !== eventIndex) {
                      if (direction === -1 && lastIndex === 0 && eventIndex > 0) {
                        if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                          direction *= -1;
                        } else {
                          lastIndex = length;
                        }

                        lastIterations++;
                      } else if (direction === 1 && lastIndex === length - 1 && eventIndex < length - 1) {
                        if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                          direction *= -1;
                        } else {
                          lastIndex = -1;
                        }

                        lastIterations++;
                      }

                      if (lastIndex === eventIndex) {
                        break;
                      }

                      if (lastIterations > currentIterations) {
                        break;
                      }
                    }

                    lastIndex += direction;
                    legacyCC.director.getAnimationManager().pushDelayEvent(this._fireEvent, this, [lastIndex]);
                  } while (lastIndex !== eventIndex && lastIndex > -1 && lastIndex < length);
                }

                this._lastWrapInfoEvent.set(wrapInfo);
              };

              _proto2._emit = function _emit(type, state) {
                if (this._target && this._target.isValid) {
                  this._target.emit(type, type, state);
                }
              };

              _proto2._fireEvent = function _fireEvent(index) {
                if (!this._targetNode || !this._targetNode.isValid) {
                  return;
                }

                var eventGroups = this._clip.eventGroups;

                if (index < 0 || index >= eventGroups.length || this._ignoreIndex === index) {
                  return;
                }

                var eventGroup = eventGroups[index];
                var components = this._targetNode.components;

                for (var _iterator = _createForOfIteratorHelperLoose(eventGroup.events), _step; !(_step = _iterator()).done;) {
                  var event = _step.value;
                  var functionName = event.functionName;

                  for (var _iterator2 = _createForOfIteratorHelperLoose(components), _step2; !(_step2 = _iterator2()).done;) {
                    var component = _step2.value;
                    var fx = component[functionName];

                    if (typeof fx === 'function') {
                      fx.apply(component, event.parameters);
                    }
                  }
                }
              };

              _proto2._onReplayOrResume = function _onReplayOrResume() {
                legacyCC.director.getAnimationManager().addAnimation(this);
              };

              _proto2._onPauseOrStop = function _onPauseOrStop() {
                legacyCC.director.getAnimationManager().removeAnimation(this);
              };

              _proto2._destroyBlendStateWriters = function _destroyBlendStateWriters() {
                for (var iBlendStateWriter = 0; iBlendStateWriter < this._blendStateWriters.length; ++iBlendStateWriter) {
                  this._blendStateWriters[iBlendStateWriter].destroy();
                }

                this._blendStateWriters.length = 0;

                if (this._blendStateBuffer) {
                  this._blendStateBuffer.unbindState(this);

                  this._blendStateBuffer = null;
                }

                this._blendStateWriterHost.enabled = false;
              };

              _createClass(AnimationState, [{
                key: "curveLoaded",
                get: function get() {
                  return this._curveLoaded;
                }
              }]);

              return AnimationState;
            }(Playable));

            function isTargetingTRS(path) {
              var prs;

              if (path.length === 1 && typeof path[0] === 'string') {
                prs = path[0];
              } else if (path.length > 1) {
                for (var i = 0; i < path.length - 1; ++i) {
                  if (!(path[i] instanceof HierarchyPath)) {
                    return false;
                  }
                }

                prs = path[path.length - 1];
              }

              switch (prs) {
                case 'position':
                case 'scale':
                case 'rotation':
                case 'eulerAngles':
                  return true;

                default:
                  return false;
              }
            }

            function wrapIterations(iterations) {
              if (iterations - (iterations | 0) === 0) {
                iterations -= 1;
              }

              return iterations | 0;
            }

            legacyCC.AnimationState = AnimationState;

            var CrossFade = function (_Playable) {
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
                }

                for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
                  var state = this._managedStates[iManagedState].state;

                  if (state) {
                    state.weight = 0;
                  }
                }

                var absoluteWeight = 1.0;
                var deadFadingBegin = this._fadings.length;

                for (var iFading = 0; iFading < this._fadings.length; ++iFading) {
                  var fading = this._fadings[iFading];
                  fading.easeTime += deltaTime;
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
                }

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
              };

              _proto.crossFade = function crossFade(state, duration) {
                var _target$state;

                if (this._managedStates.length === 0) {
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
              };

              _proto.onPause = function onPause() {
                _Playable.prototype.onPause.call(this);

                legacyCC.director.getAnimationManager().removeCrossFade(this);

                for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
                  var state = this._managedStates[iManagedState].state;

                  if (state) {
                    state.pause();
                  }
                }
              };

              _proto.onResume = function onResume() {
                _Playable.prototype.onResume.call(this);

                legacyCC.director.getAnimationManager().addCrossFade(this);

                for (var iManagedState = 0; iManagedState < this._managedStates.length; ++iManagedState) {
                  var state = this._managedStates[iManagedState].state;

                  if (state) {
                    state.resume();
                  }
                }
              };

              _proto.onStop = function onStop() {
                _Playable.prototype.onStop.call(this);

                legacyCC.director.getAnimationManager().removeCrossFade(this);
                this.clear();
              };

              return CrossFade;
            }(Playable);

            var _dec$2, _dec2$1, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class$2, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$1, _class3$1, _temp$2;
            var Animation = exports('c', (_dec$2 = ccclass('cc.Animation'), _dec2$1 = help('i18n:cc.Animation'), _dec3 = executionOrder(99), _dec4 = menu('Animation/Animation'), _dec5 = type([AnimationClip]), _dec6 = tooltip('此动画组件管理的动画剪辑'), _dec7 = type(AnimationClip), _dec8 = tooltip('默认动画剪辑'), _dec9 = tooltip('是否在动画组件开始运行时自动播放默认动画剪辑'), _dec10 = type([AnimationClip]), _dec$2(_class$2 = _dec2$1(_class$2 = _dec3(_class$2 = executeInEditMode(_class$2 = _dec4(_class$2 = (_class2$2 = (_temp$2 = _class3$1 = function (_Eventify) {
              _inheritsLoose(Animation, _Eventify);

              function Animation() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Eventify.call.apply(_Eventify, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "playOnLoad", _descriptor$2, _assertThisInitialized(_this));

                _this._crossFade = new CrossFade();
                _this._nameToState = createMap(true);

                _initializerDefineProperty(_this, "_clips", _descriptor2$2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_defaultClip", _descriptor3$1, _assertThisInitialized(_this));

                _this._hasBeenPlayed = false;
                return _this;
              }

              var _proto = Animation.prototype;

              _proto.onLoad = function onLoad() {
                this.clips = this._clips;

                for (var stateName in this._nameToState) {
                  var state = this._nameToState[stateName];
                  state.initialize(this.node);
                }
              };

              _proto.start = function start() {
                if ( this.playOnLoad && !this._hasBeenPlayed && this._defaultClip) {
                  this.crossFade(this._defaultClip.name, 0);
                }
              };

              _proto.onEnable = function onEnable() {
                this._crossFade.resume();
              };

              _proto.onDisable = function onDisable() {
                this._crossFade.pause();
              };

              _proto.onDestroy = function onDestroy() {
                this._crossFade.stop();

                for (var name in this._nameToState) {
                  var state = this._nameToState[name];
                  state.destroy();
                }

                this._nameToState = createMap(true);
              };

              _proto.play = function play(name) {
                this._hasBeenPlayed = true;

                if (!name) {
                  if (!this._defaultClip) {
                    return;
                  }

                  name = this._defaultClip.name;
                }

                this.crossFade(name, 0);
              };

              _proto.crossFade = function crossFade(name, duration) {
                if (duration === void 0) {
                  duration = 0.3;
                }

                this._hasBeenPlayed = true;
                var state = this._nameToState[name];

                if (state) {
                  this._crossFade.play();

                  this._crossFade.crossFade(state, duration);
                }
              };

              _proto.pause = function pause() {
                this._crossFade.pause();
              };

              _proto.resume = function resume() {
                this._crossFade.resume();
              };

              _proto.stop = function stop() {
                this._crossFade.stop();
              };

              _proto.getAnimationState = function getAnimationState(name) {
                return this.getState(name);
              };

              _proto.getState = function getState(name) {
                var state = this._nameToState[name];

                if (state && !state.curveLoaded) {
                  state.initialize(this.node);
                }

                return state || null;
              };

              _proto.createState = function createState(clip, name) {
                name = name || clip.name;
                this.removeState(name);
                return this._doCreateState(clip, name);
              };

              _proto.removeState = function removeState(name) {
                var state = this._nameToState[name];

                if (state) {
                  state.allowLastFrameEvent(false);
                  state.stop();
                  delete this._nameToState[name];
                }
              };

              _proto.addClip = function addClip(clip, name) {
                if (!contains(this._clips, clip)) {
                  this._clips.push(clip);
                }

                return this.createState(clip, name);
              };

              _proto.removeClip = function removeClip(clip, force) {
                var removalState;

                for (var name in this._nameToState) {
                  var state = this._nameToState[name];
                  var stateClip = state.clip;

                  if (stateClip === clip) {
                    removalState = state;
                    break;
                  }
                }

                if (clip === this._defaultClip) {
                  if (force) {
                    this._defaultClip = null;
                  } else {
                    {
                      warnID(3902);
                    }

                    return;
                  }
                }

                if (removalState && removalState.isPlaying) {
                  if (force) {
                    removalState.stop();
                  } else {
                    {
                      warnID(3903);
                    }

                    return;
                  }
                }

                this._clips = this._clips.filter(function (item) {
                  return item !== clip;
                });

                if (removalState) {
                  delete this._nameToState[removalState.name];
                }
              };

              _proto.on = function on(type, callback, thisArg, once) {
                var ret = _Eventify.prototype.on.call(this, type, callback, thisArg, once);

                if (type === EventType.LASTFRAME) {
                  this._syncAllowLastFrameEvent();
                }

                return ret;
              };

              _proto.once = function once(type, callback, thisArg) {
                var ret = _Eventify.prototype.once.call(this, type, callback, thisArg);

                if (type === EventType.LASTFRAME) {
                  this._syncAllowLastFrameEvent();
                }

                return ret;
              };

              _proto.off = function off(type, callback, thisArg) {
                _Eventify.prototype.off.call(this, type, callback, thisArg);

                if (type === EventType.LASTFRAME) {
                  this._syncDisallowLastFrameEvent();
                }
              };

              _proto._createState = function _createState(clip, name) {
                return new AnimationState(clip, name);
              };

              _proto._doCreateState = function _doCreateState(clip, name) {
                var state = this._createState(clip, name);

                state._setEventTarget(this);

                state.allowLastFrameEvent(this.hasEventListener(EventType.LASTFRAME));

                if (this.node) {
                  state.initialize(this.node);
                }

                this._nameToState[state.name] = state;
                return state;
              };

              _proto._getStateByNameOrDefaultClip = function _getStateByNameOrDefaultClip(name) {
                if (!name) {
                  if (!this._defaultClip) {
                    return null;
                  }

                  name = this._defaultClip.name;
                }

                var state = this._nameToState[name];

                if (state) {
                  return state;
                }

                return null;
              };

              _proto._removeStateOfAutomaticClip = function _removeStateOfAutomaticClip(clip) {
                for (var name in this._nameToState) {
                  var state = this._nameToState[name];

                  if (equalClips(clip, state.clip)) {
                    state.stop();
                    delete this._nameToState[name];
                  }
                }
              };

              _proto._syncAllowLastFrameEvent = function _syncAllowLastFrameEvent() {
                if (this.hasEventListener(EventType.LASTFRAME)) {
                  for (var stateName in this._nameToState) {
                    this._nameToState[stateName].allowLastFrameEvent(true);
                  }
                }
              };

              _proto._syncDisallowLastFrameEvent = function _syncDisallowLastFrameEvent() {
                if (!this.hasEventListener(EventType.LASTFRAME)) {
                  for (var stateName in this._nameToState) {
                    this._nameToState[stateName].allowLastFrameEvent(false);
                  }
                }
              };

              _createClass(Animation, [{
                key: "clips",
                get: function get() {
                  return this._clips;
                },
                set: function set(value) {
                  var _this2 = this;

                  if (this._crossFade) {
                    this._crossFade.clear();
                  }

                  for (var _iterator = _createForOfIteratorHelperLoose(this._clips), _step; !(_step = _iterator()).done;) {
                    var clip = _step.value;

                    if (clip) {
                      this._removeStateOfAutomaticClip(clip);
                    }
                  }

                  for (var _iterator2 = _createForOfIteratorHelperLoose(value), _step2; !(_step2 = _iterator2()).done;) {
                    var _clip = _step2.value;

                    if (_clip) {
                      this.createState(_clip);
                    }
                  }

                  var newDefaultClip = value.find(function (clip) {
                    return equalClips(clip, _this2._defaultClip);
                  });

                  if (newDefaultClip) {
                    this._defaultClip = newDefaultClip;
                  } else {
                    this._defaultClip = null;
                  }

                  this._clips = value;
                }
              }, {
                key: "defaultClip",
                get: function get() {
                  return this._defaultClip;
                },
                set: function set(value) {
                  this._defaultClip = value;

                  if (!value) {
                    return;
                  }

                  var isBoundedDefaultClip = this._clips.findIndex(function (clip) {
                    return equalClips(clip, value);
                  }) >= 0;

                  if (!isBoundedDefaultClip) {
                    this._clips.push(value);

                    this.createState(value);
                  }
                }
              }]);

              return Animation;
            }(Eventify(Component)), _class3$1.EventType = EventType, _temp$2), (_applyDecoratedDescriptor(_class2$2.prototype, "clips", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2$2.prototype, "clips"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "defaultClip", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2$2.prototype, "defaultClip"), _class2$2.prototype), _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "playOnLoad", [serializable, _dec9], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_clips", [_dec10], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$2.prototype, "_defaultClip", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$2)) || _class$2) || _class$2) || _class$2) || _class$2) || _class$2));

            function equalClips(clip1, clip2) {
              if (clip1 === clip2) {
                return true;
              }

              return !!clip1 && !!clip2 && (clip1.name === clip2.name || clip1._uuid === clip2._uuid);
            }

            var stack = [];
            var pool = new Map();
            function getWorldMatrix(transform, stamp) {
              var i = 0;
              var res = Mat4.IDENTITY;

              while (transform) {
                if (transform.stamp === stamp || transform.stamp + 1 === stamp && !transform.node.hasChangedFlags) {
                  res = transform.world;
                  transform.stamp = stamp;
                  break;
                }

                transform.stamp = stamp;
                stack[i++] = transform;
                transform = transform.parent;
              }

              while (i > 0) {
                transform = stack[--i];
                var node = transform.node;
                Mat4.fromRTS(transform.local, node.rotation, node.position, node.scale);
                res = Mat4.multiply(transform.world, res, transform.local);
              }

              return res;
            }
            function getTransform(node, root) {
              var joint = null;
              var i = 0;

              while (node !== root) {
                var id = node.uuid;

                if (pool.has(id)) {
                  joint = pool.get(id);
                  break;
                } else {
                  joint = {
                    node: node,
                    local: new Mat4(),
                    world: new Mat4(),
                    stamp: -1,
                    parent: null
                  };
                  pool.set(id, joint);
                }

                stack[i++] = joint;
                node = node.parent;
                joint = null;
              }

              var child;

              while (i > 0) {
                child = stack[--i];
                child.parent = joint;
                joint = child;
              }

              return joint;
            }
            function deleteTransform(node) {
              var transform = pool.get(node.uuid) || null;

              while (transform) {
                pool["delete"](transform.node.uuid);
                transform = transform.parent;
              }
            }

            var m4_1 = new Mat4();
            function getPathFromRoot(target, root) {
              var node = target;
              var path = '';

              while (node !== null && node !== root) {
                path = node.name + "/" + path;
                node = node.parent;
              }

              return path.slice(0, -1);
            }
            function getWorldTransformUntilRoot(target, root, outMatrix) {
              Mat4.identity(outMatrix);

              while (target !== root) {
                Mat4.fromRTS(m4_1, target.rotation, target.position, target.scale);
                Mat4.multiply(outMatrix, m4_1, outMatrix);
                target = target.parent;
              }

              return outMatrix;
            }

        }
    };
});
