"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TweenAction = void 0;

var _index = require("../core/animation/index.js");

var _index2 = require("../core/index.js");

var _actionInterval = require("./actions/action-interval.js");

var _globalExports = require("../core/global-exports.js");

/*
 Copyright (c) 2020 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

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
 * @hidden
 */

/** adapter */
function TweenEasinAdapter(easingName) {
  const initialChar = easingName.charAt(0);

  if (/[A-Z]/.test(initialChar)) {
    easingName = easingName.replace(initialChar, initialChar.toLowerCase());
    const arr = easingName.split('-');

    if (arr.length === 2) {
      const str0 = arr[0];

      if (str0 === 'linear') {
        easingName = 'linear';
      } else {
        const str1 = arr[1];

        switch (str0) {
          case 'quadratic':
            easingName = `quad${str1}`;
            break;

          case 'quartic':
            easingName = `quart${str1}`;
            break;

          case 'quintic':
            easingName = `quint${str1}`;
            break;

          case 'sinusoidal':
            easingName = `sine${str1}`;
            break;

          case 'exponential':
            easingName = `expo${str1}`;
            break;

          case 'circular':
            easingName = `circ${str1}`;
            break;

          default:
            easingName = str0 + str1;
            break;
        }
      }
    }
  }

  return easingName;
}
/** checker */


function TweenOptionChecker(opts) {
  const header = ' [Tween:] ';
  const message = ` option is not support in v + ${_globalExports.VERSION}`;
  const _opts = opts;

  if (_opts.delay) {
    (0, _index2.warn)(`${header}delay${message}`);
  }

  if (_opts.repeat) {
    (0, _index2.warn)(`${header}repeat${message}`);
  }

  if (_opts.repeatDelay) {
    (0, _index2.warn)(`${header}repeatDelay${message}`);
  }

  if (_opts.interpolation) {
    (0, _index2.warn)(`${header}interpolation${message}`);
  }

  if (_opts.onStop) {
    (0, _index2.warn)(`${header}onStop${message}`);
  }
}

class TweenAction extends _actionInterval.ActionInterval {
  constructor(duration, props, opts) {
    super();
    this._opts = void 0;
    this._props = void 0;
    this._originProps = void 0;

    if (opts == null) {
      opts = Object.create(null);
    } else {
      /** checker */
      TweenOptionChecker(opts);
      /** adapter */

      if (opts.easing && typeof opts.easing === 'string') {
        opts.easing = TweenEasinAdapter(opts.easing);
      } // global easing or progress used for this action


      if (!opts.progress) {
        opts.progress = this.progress;
      }

      if (opts.easing && typeof opts.easing === 'string') {
        const easingName = opts.easing;
        opts.easing = _index.easing[easingName];

        if (!opts.easing) {
          (0, _index2.warnID)(1031, easingName);
        }
      }
    }

    this._opts = opts;
    this._props = Object.create(null);

    for (const name in props) {
      // filtering if
      // - it was not own property
      // - types was function / string
      // - it was undefined / null
      // eslint-disable-next-line no-prototype-builtins
      if (!props.hasOwnProperty(name)) continue;
      let value = props[name];
      if (value == null || typeof value === 'string' || typeof value === 'function') continue; // property may have custom easing or progress function

      let easing;
      let progress;

      if (value.value !== undefined && (value.easing || value.progress)) {
        if (typeof value.easing === 'string') {
          easing = easing[value.easing];
          if (!easing) (0, _index2.warnID)(1031, value.easing);
        } else {
          easing = value.easing;
        }

        progress = value.progress;
        value = value.value;
      }

      const prop = Object.create(null);
      prop.value = value;
      prop.easing = easing;
      prop.progress = progress;
      this._props[name] = prop;
    }

    this._originProps = props;
    this.initWithDuration(duration);
  }

  clone() {
    const action = new TweenAction(this._duration, this._originProps, this._opts);

    this._cloneDecoration(action);

    return action;
  }

  startWithTarget(target) {
    _actionInterval.ActionInterval.prototype.startWithTarget.call(this, target);

    const relative = !!this._opts.relative;
    const props = this._props;

    for (const property in props) {
      const _t = target[property];

      if (_t === undefined) {
        continue;
      }

      const prop = props[property];
      const value = prop.value;

      if (typeof _t === 'number') {
        prop.start = _t;
        prop.current = _t; // eslint-disable-next-line @typescript-eslint/restrict-plus-operands

        prop.end = relative ? _t + value : value;
      } else if (typeof _t === 'object') {
        if (prop.start == null) {
          prop.start = {};
          prop.current = {};
          prop.end = {};
        }

        for (const k in value) {
          // filtering if it not a number
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(_t[k])) continue;
          prop.start[k] = _t[k];
          prop.current[k] = _t[k]; // eslint-disable-next-line @typescript-eslint/restrict-plus-operands

          prop.end[k] = relative ? _t[k] + value[k] : value[k];
        }
      }
    }

    if (this._opts.onStart) {
      this._opts.onStart(this.target);
    }
  }

  update(t) {
    const target = this.target;
    if (!target) return;
    const props = this._props;
    const opts = this._opts;
    let easingTime = t;
    if (opts.easing) easingTime = opts.easing(t);
    const progress = opts.progress;

    for (const name in props) {
      const prop = props[name];
      const time = prop.easing ? prop.easing(t) : easingTime;
      const interpolation = prop.progress ? prop.progress : progress;
      const start = prop.start;
      const end = prop.end;

      if (typeof start === 'number') {
        prop.current = interpolation(start, end, prop.current, time);
      } else if (typeof start === 'object') {
        // const value = prop.value;
        for (const k in start) {
          // if (value[k].easing) {
          //     time = value[k].easing(t);
          // }
          // if (value[k].progress) {
          //     interpolation = value[k].easing(t);
          // }
          prop.current[k] = interpolation(start[k], end[k], prop.current[k], time);
        }
      }

      target[name] = prop.current;
    }

    if (opts.onUpdate) {
      opts.onUpdate(this.target, t);
    }

    if (t === 1 && opts.onComplete) {
      opts.onComplete(this.target);
    }
  }

  progress(start, end, current, t) {
    return current = start + (end - start) * t;
  }

}

exports.TweenAction = TweenAction;