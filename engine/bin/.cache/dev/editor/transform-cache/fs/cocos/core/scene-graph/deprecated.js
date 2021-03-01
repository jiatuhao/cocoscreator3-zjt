"use strict";

var _baseNode = require("./base-node.js");

var _xDeprecated = require("../utils/x-deprecated.js");

var _layers = require("./layers.js");

var _node = require("./node.js");

var _vec = require("../math/vec2.js");

var _size = require("../math/size.js");

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
(0, _xDeprecated.replaceProperty)(_baseNode.BaseNode.prototype, 'BaseNode', [{
  name: 'childrenCount',
  newName: 'children.length',

  customGetter() {
    return this.children.length;
  }

}]);
(0, _xDeprecated.replaceProperty)(_node.Node.prototype, 'Node', [{
  name: 'width',
  targetName: 'node.getComponent(UITransform)',

  customGetter() {
    return this._uiProps.uiTransformComp.width;
  },

  customSetter(value) {
    this._uiProps.uiTransformComp.width = value;
  }

}, {
  name: 'height',
  targetName: 'node.getComponent(UITransform)',

  customGetter() {
    return this._uiProps.uiTransformComp.height;
  },

  customSetter(value) {
    this._uiProps.uiTransformComp.height = value;
  }

}, {
  name: 'anchorX',
  targetName: 'node.getComponent(UITransform)',

  customGetter() {
    return this._uiProps.uiTransformComp.anchorX;
  },

  customSetter(value) {
    this._uiProps.uiTransformComp.anchorX = value;
  }

}, {
  name: 'anchorY',
  targetName: 'node.getComponent(UITransform)',

  customGetter() {
    return this._uiProps.uiTransformComp.anchorY;
  },

  customSetter(value) {
    this._uiProps.uiTransformComp.anchorY = value;
  }

}, {
  name: 'getAnchorPoint',
  targetName: 'node.getComponent(UITransform)',

  customFunction(out) {
    if (!out) {
      out = new _vec.Vec2();
    }

    out.set(this._uiProps.uiTransformComp.anchorPoint);
    return out;
  }

}, {
  name: 'setAnchorPoint',
  targetName: 'node.getComponent(UITransform)',

  customFunction(point, y) {
    this._uiProps.uiTransformComp.setAnchorPoint(point, y);
  }

}, {
  name: 'getContentSize',
  targetName: 'node.getComponent(UITransform)',

  customFunction(out) {
    if (!out) {
      out = new _size.Size();
    }

    out.set(this._uiProps.uiTransformComp.contentSize);
    return out;
  }

}, {
  name: 'setContentSize',
  targetName: 'node.getComponent(UITransform)',

  customFunction(size, height) {
    if (typeof size === 'number') {
      this._uiProps.uiTransformComp.setContentSize(size, height);
    } else {
      this._uiProps.uiTransformComp.setContentSize(size);
    }
  }

}]);
(0, _xDeprecated.removeProperty)(_node.Node.prototype, 'Node.prototype', [{
  name: 'addLayer'
}, {
  name: 'removeLayer'
}]);
(0, _xDeprecated.removeProperty)(_layers.Layers, 'Layers', [{
  name: 'All'
}, {
  name: 'RaycastMask'
}, {
  name: 'check'
}]);
(0, _xDeprecated.replaceProperty)(_layers.Layers, 'Layers', [{
  name: 'Default',
  newName: 'DEFAULT',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'Always',
  newName: 'ALWAYS',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'IgnoreRaycast',
  newName: 'IGNORE_RAYCAST',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'Gizmos',
  newName: 'GIZMOS',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'Editor',
  newName: 'EDITOR',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'UI',
  newName: 'UI_3D',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'UI2D',
  newName: 'UI_2D',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'SceneGizmo',
  newName: 'SCENE_GIZMO',
  target: _layers.Layers.Enum,
  targetName: 'Layers.Enum'
}, {
  name: 'makeInclusiveMask',
  newName: 'makeMaskInclude',
  target: _layers.Layers,
  targetName: 'Layers'
}, {
  name: 'makeExclusiveMask',
  newName: 'makeMaskExclude',
  target: _layers.Layers,
  targetName: 'Layers'
}]);
(0, _xDeprecated.removeProperty)(_layers.Layers.Enum, 'Layers.Enum', [{
  name: 'ALWAYS'
}]);
(0, _xDeprecated.removeProperty)(_layers.Layers.BitMask, 'Layers.BitMask', [{
  name: 'ALWAYS'
}]);