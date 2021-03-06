"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UI", {
  enumerable: true,
  get: function () {
    return _batcher2d.Batcher2D;
  }
});
Object.defineProperty(exports, "UIDrawBatch", {
  enumerable: true,
  get: function () {
    return _drawBatch.DrawBatch2D;
  }
});
exports.UIVertexFormat = void 0;

var VertexFormat = _interopRequireWildcard(require("./vertex-format.js"));

exports.UIVertexFormat = VertexFormat;

var _batcher2d = require("./batcher-2d.js");

var _drawBatch = require("./draw-batch.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }