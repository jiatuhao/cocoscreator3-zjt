"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal253Aconstants = require("../../../../virtual/internal%253Aconstants.js");

var _glsl = _interopRequireDefault(require("./shader-sources/glsl1.js"));

var _glsl2 = _interopRequireDefault(require("./shader-sources/glsl3.js"));

var _glsl3 = _interopRequireDefault(require("./shader-sources/glsl4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The shader sources assembled in this build.
 */
const assembly = (() => {
  if (_internal253Aconstants.HTML5 || _internal253Aconstants.WECHAT) {
    return {
      glsl1: _glsl.default,
      glsl3: _glsl2.default
    };
  } else if (_internal253Aconstants.MINIGAME || _internal253Aconstants.RUNTIME_BASED) {
    return {
      glsl1: _glsl.default
    };
  } else {
    return {
      glsl1: _glsl.default,
      glsl3: _glsl2.default,
      glsl4: _glsl3.default
    };
  }
})();

var _default = assembly;
exports.default = _default;