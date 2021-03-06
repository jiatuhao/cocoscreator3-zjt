System.register("q-bundled:///fs/cocos/core/math/color.js", ["../data/class.js", "../value-types/value-type.js", "./utils.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var CCClass, ValueType, clamp, EPSILON, legacyCC, toFloat, Color;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function color(r, g, b, a) {
    return new Color(r, g, b, a);
  }

  _export("color", color);

  return {
    setters: [function (_dataClassJs) {
      CCClass = _dataClassJs.CCClass;
    }, function (_valueTypesValueTypeJs) {
      ValueType = _valueTypesValueTypeJs.ValueType;
    }, function (_utilsJs) {
      clamp = _utilsJs.clamp;
      EPSILON = _utilsJs.EPSILON;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      toFloat = 1 / 255;
      /**
       * @en Representation of RGBA colors.<br/>
       * Each color component is an integer value with a range from 0 to 255.<br/>
       * @zh 通过 Red、Green、Blue 颜色通道表示颜色，并通过 Alpha 通道表示不透明度。<br/>
       * 每个通道都为取值范围 [0, 255] 的整数。<br/>
       */

      _export("Color", Color = /*#__PURE__*/function (_ValueType) {
        _inheritsLoose(Color, _ValueType);

        /**
         * @en Copy content of a color into another and save the results to out color.
         * @zh 获得指定颜色的拷贝
         */
        Color.clone = function clone(a) {
          var out = new Color();

          if (a._val) {
            out._val = a._val;
          } else {
            out._val = (a.a << 24 >>> 0) + (a.b << 16) + (a.g << 8) + a.r;
          }

          return out;
        }
        /**
         * @en Clone a color and save the results to out color.
         * @zh 复制目标颜色
         */
        ;

        Color.copy = function copy(out, a) {
          out.r = a.r;
          out.g = a.g;
          out.b = a.b;
          out.a = a.a;
          return out;
        }
        /**
         * @en Set the components of a color to the given values and save the results to out color.
         * @zh 设置颜色值
         */
        ;

        Color.set = function set(out, r, g, b, a) {
          out.r = r;
          out.g = g;
          out.b = b;
          out.a = a;
          return out;
        }
        /**
         * @en Converts the hexadecimal formal color into rgb formal and save the results to out color.
         * @zh 从十六进制颜色字符串中读入颜色到 out 中
         */
        ;

        Color.fromHEX = function fromHEX(out, hexString) {
          hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
          out.r = parseInt(hexString.substr(0, 2), 16) || 0;
          out.g = parseInt(hexString.substr(2, 2), 16) || 0;
          out.b = parseInt(hexString.substr(4, 2), 16) || 0;
          out.a = parseInt(hexString.substr(6, 2), 16) || 255;
          out._val = (out.a << 24 >>> 0) + (out.b << 16) + (out.g << 8) + out.r;
          return out;
        }
        /**
         * @en Add two colors by components. And save the results to out color.
         * @zh 逐通道颜色加法
         */
        ;

        Color.add = function add(out, a, b) {
          out.r = a.r + b.r;
          out.g = a.g + b.g;
          out.b = a.b + b.b;
          out.a = a.a + b.a;
          return out;
        }
        /**
         * @en Subtract each components of color b from each components of color a. And save the results to out color.
         * @zh 逐通道颜色减法
         */
        ;

        Color.subtract = function subtract(out, a, b) {
          out.r = a.r - b.r;
          out.g = a.g - b.g;
          out.b = a.b - b.b;
          out.a = a.a - b.a;
          return out;
        }
        /**
         * @en Multiply each components of two colors. And save the results to out color.
         * @zh 逐通道颜色乘法
         */
        ;

        Color.multiply = function multiply(out, a, b) {
          out.r = a.r * b.r;
          out.g = a.g * b.g;
          out.b = a.b * b.b;
          out.a = a.a * b.a;
          return out;
        }
        /**
         * @en Divide each components of color a by each components of color b. And save the results to out color.
         * @zh 逐通道颜色除法
         */
        ;

        Color.divide = function divide(out, a, b) {
          out.r = a.r / b.r;
          out.g = a.g / b.g;
          out.b = a.b / b.b;
          out.a = a.a / b.a;
          return out;
        }
        /**
         * @en Multiply all channels in a color with the given scale factor, and save the results to out color.
         * @zh 全通道统一缩放颜色
         */
        ;

        Color.scale = function scale(out, a, b) {
          out.r = a.r * b;
          out.g = a.g * b;
          out.b = a.b * b;
          out.a = a.a * b;
          return out;
        }
        /**
         * @en Performs a linear interpolation between two colors.
         * @zh 逐通道颜色线性插值：A + t * (B - A)
         */
        ;

        Color.lerp = function lerp(out, from, to, ratio) {
          var r = from.r;
          var g = from.g;
          var b = from.b;
          var a = from.a;
          r += (to.r - r) * ratio;
          g += (to.g - g) * ratio;
          b += (to.b - b) * ratio;
          a += (to.a - a) * ratio;
          out._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
          return out;
        }
        /**
         * @en Convert a color object to a RGBA array, and save the results to out color.
         * @zh 颜色转数组
         * @param ofs Array Start Offset
         */
        ;

        Color.toArray = function toArray(out, a, ofs) {
          if (ofs === void 0) {
            ofs = 0;
          }

          var scale = a instanceof Color || a.a > 1 ? 1 / 255 : 1;
          out[ofs + 0] = a.r * scale;
          out[ofs + 1] = a.g * scale;
          out[ofs + 2] = a.b * scale;
          out[ofs + 3] = a.a * scale;
          return out;
        }
        /**
         * @en Sets the given color with RGBA values in an array, and save the results to out color.
         * @zh 数组转颜色
         * @param ofs Array Start Offset
         */
        ;

        Color.fromArray = function fromArray(arr, out, ofs) {
          if (ofs === void 0) {
            ofs = 0;
          }

          out.r = arr[ofs + 0] * 255;
          out.g = arr[ofs + 1] * 255;
          out.b = arr[ofs + 2] * 255;
          out.a = arr[ofs + 3] * 255;
          return out;
        }
        /**
         * @en Check whether the two given colors are identical
         * @zh 颜色等价判断
         */
        ;

        Color.strictEquals = function strictEquals(a, b) {
          return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
        }
        /**
         * @en Check whether the two given colors are approximately equivalent. Difference of each channel is smaller that the epsilon.
         * @zh 排除浮点数误差的颜色近似等价判断
         */
        ;

        Color.equals = function equals(a, b, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }

          return Math.abs(a.r - b.r) <= epsilon * Math.max(1.0, Math.abs(a.r), Math.abs(b.r)) && Math.abs(a.g - b.g) <= epsilon * Math.max(1.0, Math.abs(a.g), Math.abs(b.g)) && Math.abs(a.b - b.b) <= epsilon * Math.max(1.0, Math.abs(a.b), Math.abs(b.b)) && Math.abs(a.a - b.a) <= epsilon * Math.max(1.0, Math.abs(a.a), Math.abs(b.a));
        }
        /**
         * @en Convert the given color to a hex color value. And save the results to out color.
         * @zh 获取指定颜色的整型数据表示
         */
        ;

        Color.hex = function hex(a) {
          return (a.r * 255 << 24 | a.g * 255 << 16 | a.b * 255 << 8 | a.a * 255) >>> 0;
        }
        /**
         * @en Get or set red channel value.
         * @zh 获取或设置当前颜色的 Red 通道。
         */
        ;

        _createClass(Color, [{
          key: "r",
          get: function get() {
            return this._val & 0x000000ff;
          },
          set: function set(red) {
            red = ~~clamp(red, 0, 255);
            this._val = (this._val & 0xffffff00 | red) >>> 0;
          }
          /**
           * @en Get or set green channel value.
           * @zh 获取或设置当前颜色的 Green 通道。
           */

        }, {
          key: "g",
          get: function get() {
            return (this._val & 0x0000ff00) >> 8;
          },
          set: function set(green) {
            green = ~~clamp(green, 0, 255);
            this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
          }
          /**
           * @en Get or set blue channel value.
           * @zh 获取或设置当前颜色的 Blue 通道。
           */

        }, {
          key: "b",
          get: function get() {
            return (this._val & 0x00ff0000) >> 16;
          },
          set: function set(blue) {
            blue = ~~clamp(blue, 0, 255);
            this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
          }
          /** @en Get or set alpha channel value.
           * @zh 获取或设置当前颜色的透明度通道。
           */

        }, {
          key: "a",
          get: function get() {
            return (this._val & 0xff000000) >>> 24;
          },
          set: function set(alpha) {
            alpha = ~~clamp(alpha, 0, 255);
            this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
          } // compatibility with vector interfaces

        }, {
          key: "x",
          get: function get() {
            return this.r * toFloat;
          },
          set: function set(value) {
            this.r = value * 255;
          }
        }, {
          key: "y",
          get: function get() {
            return this.g * toFloat;
          },
          set: function set(value) {
            this.g = value * 255;
          }
        }, {
          key: "z",
          get: function get() {
            return this.b * toFloat;
          },
          set: function set(value) {
            this.b = value * 255;
          }
        }, {
          key: "w",
          get: function get() {
            return this.a * toFloat;
          },
          set: function set(value) {
            this.a = value * 255;
          }
        }]);

        function Color(r, g, b, a) {
          var _this;

          _this = _ValueType.call(this) || this;
          _this._val = 0;

          if (typeof r === 'string') {
            _this.fromHEX(r);
          } else if (g !== undefined) {
            _this.set(r, g, b, a);
          } else {
            _this.set(r);
          }

          return _this;
        }
        /**
         * @en Clone a new color from the current color.
         * @zh 克隆当前颜色。
         */


        var _proto = Color.prototype;

        _proto.clone = function clone() {
          var ret = new Color();
          ret._val = this._val;
          return ret;
        }
        /**
         * @en Check whether the current color is identical with the given color
         * @zh 判断当前颜色是否与指定颜色相等。
         * @param other Specified color
         * @returns Returns `true` when all channels of both colours are equal; otherwise returns `false`.
         */
        ;

        _proto.equals = function equals(other) {
          return other && this._val === other._val;
        }
        /**
         * @en Calculate linear interpolation result between this color and another one with given ratio。
         * @zh 根据指定的插值比率，从当前颜色到目标颜色之间做插值。
         * @param to Target color
         * @param ratio The interpolation coefficient.The range is [0,1].
         */
        ;

        _proto.lerp = function lerp(to, ratio) {
          var r = this.r;
          var g = this.g;
          var b = this.b;
          var a = this.a;
          r += (to.r - r) * ratio;
          g += (to.g - g) * ratio;
          b += (to.b - b) * ratio;
          a += (to.a - a) * ratio;
          this._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
          return this;
        }
        /**
         * @en Convert to string with color informations
         * @zh 返回当前颜色的字符串表示。
         * @returns A string representation of the current color.
         */
        ;

        _proto.toString = function toString() {
          return "rgba(" + this.r.toFixed() + ", " + this.g.toFixed() + ", " + this.b.toFixed() + ", " + this.a.toFixed() + ")";
        }
        /**
         * @en Convert color to css format.
         * @zh 将当前颜色转换为 CSS 格式。
         * @param opt "rgba", "rgb", "#rgb" or "#rrggbb".
         * @returns CSS format for the current color.
         * @example
         * ```ts
         * let color = cc.Color.BLACK;
         * color.toCSS();          // "rgba(0,0,0,1.00)";
         * color.toCSS("rgba");    // "rgba(0,0,0,1.00)";
         * color.toCSS("rgb");     // "rgba(0,0,0)";
         * color.toCSS("#rgb");    // "#000";
         * color.toCSS("#rrggbb"); // "#000000";
         * ```
         */
        ;

        _proto.toCSS = function toCSS(opt) {
          if (opt === void 0) {
            opt = 'rgba';
          }

          if (opt === 'rgba') {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + (this.a * toFloat).toFixed(2) + ")";
          } else if (opt === 'rgb') {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
          } else {
            return "#" + this.toHEX(opt);
          }
        }
        /**
         * @en Read hex string and store color data into the current color object, the hex string must be formatted as rgba or rgb.
         * @zh 从十六进制颜色字符串中读入当前颜色。<br/>
         * 十六进制颜色字符串应该以可选的 "#" 开头，紧跟最多 8 个代表十六进制数字的字符；<br/>
         * 每两个连续字符代表的数值依次作为 Red、Green、Blue 和 Alpha 通道；<br/>
         * 缺省的颜色通道将视为 0；缺省的透明通道将视为 255。<br/>
         * @param hexString the hex string
         * @returns `this`
         */
        ;

        _proto.fromHEX = function fromHEX(hexString) {
          hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
          var r = parseInt(hexString.substr(0, 2), 16) || 0;
          var g = parseInt(hexString.substr(2, 2), 16) || 0;
          var b = parseInt(hexString.substr(4, 2), 16) || 0;
          var a = parseInt(hexString.substr(6, 2), 16) || 255;
          this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
          return this;
        }
        /**
         * @en convert Color to HEX color string.
         * @zh 转换当前颜色为十六进制颜色字符串。
         * @param fmt "#rrggbb" or "#rrggbbaa".
         * - `'#rrggbbaa'` obtains the hexadecimal value of the Red, Green, Blue, Alpha channels (**two**, high complement 0) and connects them sequentially.
         * - `'#rrggbb'` is similar to `'#rrggbbaa'` but does not include the Alpha channel.
         * @returns the Hex color string
         * @example
         * ```
         * const color = new Color(255, 14, 0, 255);
         * color.toHEX("#rgb");      // "f00";
         * color.toHEX("#rrggbbaa"); // "ff0e00"
         * color.toHEX("#rrggbb");   // "ff0e00ff"
         * ```
         */
        ;

        _proto.toHEX = function toHEX(fmt) {
          if (fmt === void 0) {
            fmt = '#rrggbb';
          }

          var prefix = '0'; // #rrggbb

          var hex = [(this.r < 16 ? prefix : '') + this.r.toString(16), (this.g < 16 ? prefix : '') + this.g.toString(16), (this.b < 16 ? prefix : '') + this.b.toString(16)];
          var i = -1;

          if (fmt === '#rgb') {
            hex[0] = hex[0][0];
            hex[1] = hex[1][0];
            hex[2] = hex[2][0];
          } else if (fmt === '#rrggbbaa') {
            hex.push((this.a < 16 ? prefix : '') + this.a.toString(16));
          }

          return hex.join('');
        }
        /**
         * @en Convert to rgb value.
         * @zh 将当前颜色转换为 RGB 整数值。
         * @returns RGB integer value. Starting from the lowest valid bit, each 8 bits is the value of the Red, Green, and Blue channels respectively.
         * @example
         * ```
         * const color = Color.YELLOW;
         * color.toRGBValue();
         * ```
         */
        ;

        _proto.toRGBValue = function toRGBValue() {
          return this._val & 0x00ffffff;
        }
        /**
         * @en Read HSV model color and convert to RGB color.
         * @zh 从 HSV 颜色中读入当前颜色。
         * @param h H value。
         * @param s S value。
         * @param v V value。
         * @returns `this`
         * @example
         * ```
         * const color = Color.YELLOW;
         * color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
         * ```
         */
        ;

        _proto.fromHSV = function fromHSV(h, s, v) {
          var r = 0;
          var g = 0;
          var b = 0;

          if (s === 0) {
            r = g = b = v;
          } else if (v === 0) {
            r = g = b = 0;
          } else {
            if (h === 1) {
              h = 0;
            }

            h *= 6;
            var i = Math.floor(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
              case 0:
                r = v;
                g = t;
                b = p;
                break;

              case 1:
                r = q;
                g = v;
                b = p;
                break;

              case 2:
                r = p;
                g = v;
                b = t;
                break;

              case 3:
                r = p;
                g = q;
                b = v;
                break;

              case 4:
                r = t;
                g = p;
                b = v;
                break;

              case 5:
                r = v;
                g = p;
                b = q;
                break;
            }
          }

          r *= 255;
          g *= 255;
          b *= 255;
          this._val = (this.a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
          return this;
        }
        /**
         * @en Transform to HSV model color.
         * @zh 转换当前颜色为 HSV 颜色。
         * @returns HSV format color
         * @example
         * ```
         * import { Color } from 'cc';
         * const color = Color.YELLOW;
         * color.toHSV(); // {h: 0.1533864541832669, s: 0.9843137254901961, v: 1}
         * ```
         */
        ;

        _proto.toHSV = function toHSV() {
          var r = this.r * toFloat;
          var g = this.g * toFloat;
          var b = this.b * toFloat;
          var hsv = {
            h: 0,
            s: 0,
            v: 0
          };
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var delta = 0;
          hsv.v = max;
          hsv.s = max ? (max - min) / max : 0;

          if (!hsv.s) {
            hsv.h = 0;
          } else {
            delta = max - min;

            if (r === max) {
              hsv.h = (g - b) / delta;
            } else if (g === max) {
              hsv.h = 2 + (b - r) / delta;
            } else {
              hsv.h = 4 + (r - g) / delta;
            }

            hsv.h /= 6;

            if (hsv.h < 0) {
              hsv.h += 1.0;
            }
          }

          return hsv;
        }
        /**
         * @en Set the color.
         * @zh 设置当前颜色使其与指定颜色相等。
         * @param other The specified color.
         * @overload
         * @param [r=0] red component of the color, the range is [0-255]
         * @param [g=0] green component of the color
         * @param [b=0] blue component of the color
         * @param [a=255] alpha component of the color
         * @returns Current color.
         */
        ;

        _proto.set = function set(r, g, b, a) {
          if (typeof r === 'object') {
            if (r._val != null) {
              this._val = r._val;
            } else {
              g = r.g || 0;
              b = r.b || 0;
              a = typeof r.a === 'number' ? r.a : 255;
              r = r.r || 0;
              this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
            }
          } else {
            r = r || 0;
            g = g || 0;
            b = b || 0;
            a = typeof a === 'number' ? a : 255;
            this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
          }

          return this;
        }
        /**
         * @en Multiplies the current color by the specified color.
         * @zh 将当前颜色乘以与指定颜色
         * @param other The specified color.
         */
        ;

        _proto.multiply = function multiply(other) {
          var r = (this._val & 0x000000ff) * other.r >> 8;
          var g = (this._val & 0x0000ff00) * other.g >> 8;
          var b = (this._val & 0x00ff0000) * other.b >> 8;
          var a = ((this._val & 0xff000000) >>> 8) * other.a;
          this._val = a & 0xff000000 | b & 0x00ff0000 | g & 0x0000ff00 | r & 0x000000ff;
          return this;
        };

        _proto._set_r_unsafe = function _set_r_unsafe(red) {
          this._val = (this._val & 0xffffff00 | red) >>> 0;
          return this;
        };

        _proto._set_g_unsafe = function _set_g_unsafe(green) {
          this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
          return this;
        };

        _proto._set_b_unsafe = function _set_b_unsafe(blue) {
          this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
          return this;
        };

        _proto._set_a_unsafe = function _set_a_unsafe(alpha) {
          this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
          return this;
        };

        return Color;
      }(ValueType));

      Color.WHITE = Object.freeze(new Color(255, 255, 255, 255));
      Color.GRAY = Object.freeze(new Color(127, 127, 127, 255));
      Color.BLACK = Object.freeze(new Color(0, 0, 0, 255));
      Color.TRANSPARENT = Object.freeze(new Color(0, 0, 0, 0));
      Color.RED = Object.freeze(new Color(255, 0, 0, 255));
      Color.GREEN = Object.freeze(new Color(0, 255, 0, 255));
      Color.BLUE = Object.freeze(new Color(0, 0, 255, 255));
      Color.CYAN = Object.freeze(new Color(0, 255, 255, 255));
      Color.MAGENTA = Object.freeze(new Color(255, 0, 255, 255));
      Color.YELLOW = Object.freeze(new Color(255, 255, 0, 255));
      CCClass.fastDefine('cc.Color', Color, {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      });
      legacyCC.Color = Color;
      legacyCC.color = color;
    }
  };
});