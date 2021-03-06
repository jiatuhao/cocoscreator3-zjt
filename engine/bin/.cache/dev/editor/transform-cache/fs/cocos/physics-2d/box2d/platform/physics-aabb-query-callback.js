"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhysicsAABBQueryCallback = void 0;

var _box2d = _interopRequireDefault(require("@cocos/box2d"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

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
class PhysicsAABBQueryCallback extends _box2d.default.QueryCallback {
  constructor(...args) {
    super(...args);
    this._point = new _box2d.default.Vec2();
    this._isPoint = false;
    this._fixtures = [];
  }

  init(point) {
    if (point) {
      this._isPoint = true;
      this._point.x = point.x;
      this._point.y = point.y;
    } else {
      this._isPoint = false;
    }

    this._fixtures.length = 0;
  }

  ReportFixture(fixture) {
    if (this._isPoint) {
      if (fixture.TestPoint(this._point)) {
        this._fixtures.push(fixture);
      }
    } else {
      this._fixtures.push(fixture);
    } // True to continue the query, false to terminate the query.


    return true;
  }

  getFixture() {
    return this._fixtures[0];
  }

  getFixtures() {
    return this._fixtures;
  }

}

exports.PhysicsAABBQueryCallback = PhysicsAABBQueryCallback;