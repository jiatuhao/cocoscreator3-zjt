System.register("q-bundled:///fs/cocos/core/scene-graph/deprecated.js", ["./base-node.js", "../utils/x-deprecated.js", "./layers.js", "./node.js", "../math/vec2.js", "../math/size.js"], function (_export, _context) {
  "use strict";

  var BaseNode, replaceProperty, removeProperty, Layers, Node, Vec2, Size;
  return {
    setters: [function (_baseNodeJs) {
      BaseNode = _baseNodeJs.BaseNode;
    }, function (_utilsXDeprecatedJs) {
      replaceProperty = _utilsXDeprecatedJs.replaceProperty;
      removeProperty = _utilsXDeprecatedJs.removeProperty;
    }, function (_layersJs) {
      Layers = _layersJs.Layers;
    }, function (_nodeJs) {
      Node = _nodeJs.Node;
    }, function (_mathVec2Js) {
      Vec2 = _mathVec2Js.Vec2;
    }, function (_mathSizeJs) {
      Size = _mathSizeJs.Size;
    }],
    execute: function () {
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
      replaceProperty(BaseNode.prototype, 'BaseNode', [{
        name: 'childrenCount',
        newName: 'children.length',
        customGetter: function customGetter() {
          return this.children.length;
        }
      }]);
      replaceProperty(Node.prototype, 'Node', [{
        name: 'width',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.width;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.width = value;
        }
      }, {
        name: 'height',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.height;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.height = value;
        }
      }, {
        name: 'anchorX',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.anchorX;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.anchorX = value;
        }
      }, {
        name: 'anchorY',
        targetName: 'node.getComponent(UITransform)',
        customGetter: function customGetter() {
          return this._uiProps.uiTransformComp.anchorY;
        },
        customSetter: function customSetter(value) {
          this._uiProps.uiTransformComp.anchorY = value;
        }
      }, {
        name: 'getAnchorPoint',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(out) {
          if (!out) {
            out = new Vec2();
          }

          out.set(this._uiProps.uiTransformComp.anchorPoint);
          return out;
        }
      }, {
        name: 'setAnchorPoint',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(point, y) {
          this._uiProps.uiTransformComp.setAnchorPoint(point, y);
        }
      }, {
        name: 'getContentSize',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(out) {
          if (!out) {
            out = new Size();
          }

          out.set(this._uiProps.uiTransformComp.contentSize);
          return out;
        }
      }, {
        name: 'setContentSize',
        targetName: 'node.getComponent(UITransform)',
        customFunction: function customFunction(size, height) {
          if (typeof size === 'number') {
            this._uiProps.uiTransformComp.setContentSize(size, height);
          } else {
            this._uiProps.uiTransformComp.setContentSize(size);
          }
        }
      }]);
      removeProperty(Node.prototype, 'Node.prototype', [{
        name: 'addLayer'
      }, {
        name: 'removeLayer'
      }]);
      removeProperty(Layers, 'Layers', [{
        name: 'All'
      }, {
        name: 'RaycastMask'
      }, {
        name: 'check'
      }]);
      replaceProperty(Layers, 'Layers', [{
        name: 'Default',
        newName: 'DEFAULT',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'Always',
        newName: 'ALWAYS',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'IgnoreRaycast',
        newName: 'IGNORE_RAYCAST',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'Gizmos',
        newName: 'GIZMOS',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'Editor',
        newName: 'EDITOR',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'UI',
        newName: 'UI_3D',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'UI2D',
        newName: 'UI_2D',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'SceneGizmo',
        newName: 'SCENE_GIZMO',
        target: Layers.Enum,
        targetName: 'Layers.Enum'
      }, {
        name: 'makeInclusiveMask',
        newName: 'makeMaskInclude',
        target: Layers,
        targetName: 'Layers'
      }, {
        name: 'makeExclusiveMask',
        newName: 'makeMaskExclude',
        target: Layers,
        targetName: 'Layers'
      }]);
      removeProperty(Layers.Enum, 'Layers.Enum', [{
        name: 'ALWAYS'
      }]);
      removeProperty(Layers.BitMask, 'Layers.BitMask', [{
        name: 'ALWAYS'
      }]);
    }
  };
});