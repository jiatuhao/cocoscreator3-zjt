"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmmoCylinderShape = void 0;

var _ammoInstantiated = _interopRequireDefault(require("../ammo-instantiated.js"));

var _ammoShape = require("./ammo-shape.js");

var _ammoEnum = require("../ammo-enum.js");

var _index = require("../../../core/index.js");

var _ammoConst = require("../ammo-const.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* eslint-disable new-cap */
class AmmoCylinderShape extends _ammoShape.AmmoShape {
  setHeight(v) {
    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
  }

  setDirection(v) {
    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
  }

  setRadius(v) {
    this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
  }

  get impl() {
    return this._btShape;
  }

  get collider() {
    return this._collider;
  }

  constructor() {
    super(_ammoEnum.AmmoBroadphaseNativeTypes.CYLINDER_SHAPE_PROXYTYPE);
  }

  onComponentSet() {
    const hf = _ammoConst.AmmoConstant.instance.VECTOR3_0;
    hf.setValue(0.5, 1, 0.5);
    this._btShape = new _ammoInstantiated.default.btCylinderShape(hf);
    this.setRadius(this.collider.radius);
  }

  setScale() {
    super.setScale();
    this.setRadius(this.collider.radius);
  }

  updateProperties(radius, height, direction, scale) {
    const ws = scale;
    const upAxis = direction;

    if (upAxis === 1) {
      const wh = height * Math.abs(ws.y);
      const wr = radius * Math.abs((0, _index.absMax)(ws.x, ws.z));
      const halfH = wh / 2;
      this.impl.updateProp(wr, halfH, upAxis);
    } else if (upAxis === 0) {
      const wh = height * Math.abs(ws.x);
      const wr = radius * Math.abs((0, _index.absMax)(ws.y, ws.z));
      const halfH = wh / 2;
      this.impl.updateProp(wr, halfH, upAxis);
    } else {
      const wh = height * Math.abs(ws.z);
      const wr = radius * Math.abs((0, _index.absMax)(ws.x, ws.y));
      const halfH = wh / 2;
      this.impl.updateProp(wr, halfH, upAxis);
    }

    this.updateCompoundTransform();
  }

}

exports.AmmoCylinderShape = AmmoCylinderShape;