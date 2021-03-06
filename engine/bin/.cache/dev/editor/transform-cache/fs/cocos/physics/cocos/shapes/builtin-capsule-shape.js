"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuiltinCapsuleShape = void 0;

var _builtinShape = require("./builtin-shape.js");

var _index = require("../../../core/geometry/index.js");

var _index2 = require("../../framework/index.js");

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
class BuiltinCapsuleShape extends _builtinShape.BuiltinShape {
  get localCapsule() {
    return this._localShape;
  }

  get worldCapsule() {
    return this._worldShape;
  }

  get collider() {
    return this._collider;
  }

  constructor(radius = 0.5, height = 2, direction = _index2.EAxisDirection.Y_AXIS) {
    super();
    const halfHeight = (height - radius * 2) / 2;
    const h = halfHeight < 0 ? 0 : halfHeight;
    this._localShape = new _index.Capsule(radius, h, direction);
    this._worldShape = new _index.Capsule(radius, h, direction);
  }

  setRadius(v) {
    this.localCapsule.radius = v;
    this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
  }

  setCylinderHeight(v) {
    this.localCapsule.halfHeight = v / 2;
    this.localCapsule.updateCache();
    this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
  }

  setDirection(v) {
    this.localCapsule.axis = v;
    this.localCapsule.updateCache();
    this.worldCapsule.axis = v;
    this.worldCapsule.updateCache();
    this.transform(this._sharedBody.node.worldMatrix, this._sharedBody.node.worldPosition, this._sharedBody.node.worldRotation, this._sharedBody.node.worldScale);
  }

  onLoad() {
    super.onLoad();
    this.setRadius(this.collider.radius);
    this.setDirection(this.collider.direction);
  }

}

exports.BuiltinCapsuleShape = BuiltinCapsuleShape;