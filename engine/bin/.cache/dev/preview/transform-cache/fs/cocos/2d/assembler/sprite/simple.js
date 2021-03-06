System.register("q-bundled:///fs/cocos/2d/assembler/sprite/simple.js", ["../../../core/math/index.js", "../../utils/dynamic-atlas/atlas-manager.js"], function (_export, _context) {
  "use strict";

  var Vec3, dynamicAtlasManager, vec3_temps, i, simple;
  return {
    setters: [function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_utilsDynamicAtlasAtlasManagerJs) {
      dynamicAtlasManager = _utilsDynamicAtlasAtlasManagerJs.dynamicAtlasManager;
    }],
    execute: function () {
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

      /**
       * @packageDocumentation
       * @module ui-assembler
       */
      vec3_temps = [];

      for (i = 0; i < 4; i++) {
        vec3_temps.push(new Vec3());
      }
      /**
       * simple 组装器
       * 可通过 `UI.simple` 获取该组装器。
       */


      _export("simple", simple = {
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          renderData.dataLength = 4;
          renderData.vertexCount = 4;
          renderData.indicesCount = 6;
          renderData.vData = new Float32Array(4 * 9);
          return renderData;
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame; // TODO: Material API design and export from editor could affect the material activation process
          // need to update the logic here
          // if (frame) {
          //     if (!frame._original && dynamicAtlasManager) {
          //         dynamicAtlasManager.insertSpriteFrame(frame);
          //     }
          //     if (sprite._material._texture !== frame._texture) {
          //         sprite._activateMaterial();
          //     }
          // }

          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          var renderData = sprite.renderData;

          if (renderData && frame) {
            if (renderData.vertDirty) {
              this.updateVertexData(sprite);
            }

            if (renderData.uvDirty) {
              this.updateUvs(sprite);
            }
          }
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          if (sprite === null) {
            return;
          } // const buffer: MeshBuffer = renderer.createBuffer(
          //     sprite.renderData!.vertexCount,
          //     sprite.renderData!.indicesCount,
          // );
          // const commitBuffer: IUIRenderData = renderer.createUIRenderData();


          var dataList = sprite.renderData.data;
          var node = sprite.node;
          var buffer = renderer.acquireBufferBatch();
          var vertexOffset = buffer.byteOffset >> 2;
          var indicesOffset = buffer.indicesOffset;
          var vertexId = buffer.vertexOffset;
          var isRecreate = buffer.request();

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            vertexOffset = 0;
            indicesOffset = 0;
            vertexId = 0;
          } // buffer data may be reallocated, need get reference after request.


          var vBuf = buffer.vData;
          var iBuf = buffer.iData;
          var vData = sprite.renderData.vData;
          var data0 = dataList[0];
          var data3 = dataList[3];
          var matrix = node.worldMatrix;
          var a = matrix.m00;
          var b = matrix.m01;
          var c = matrix.m04;
          var d = matrix.m05;
          var tx = matrix.m12;
          var ty = matrix.m13;
          var vl = data0.x;
          var vr = data3.x;
          var vb = data0.y;
          var vt = data3.y;
          var al = a * vl;
          var ar = a * vr;
          var bl = b * vl;
          var br = b * vr;
          var cb = c * vb;
          var ct = c * vt;
          var db = d * vb;
          var dt = d * vt; // left bottom

          vData[0] = al + cb + tx;
          vData[1] = bl + db + ty; // right bottom

          vData[9] = ar + cb + tx;
          vData[10] = br + db + ty; // left top

          vData[18] = al + ct + tx;
          vData[19] = bl + dt + ty; // right top

          vData[27] = ar + ct + tx;
          vData[28] = br + dt + ty;
          vBuf.set(vData, vertexOffset); // fill index data

          iBuf[indicesOffset++] = vertexId;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 3;
        },
        updateVertexData: function updateVertexData(sprite) {
          var renderData = sprite.renderData;

          if (!renderData) {
            return;
          }

          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;
          var l = 0;
          var b = 0;
          var r = 0;
          var t = 0;

          if (sprite.trim) {
            l = -appX;
            b = -appY;
            r = cw - appX;
            t = ch - appY;
          } else {
            var frame = sprite.spriteFrame;
            var originSize = frame.getOriginalSize();
            var rect = frame.getRect();
            var ow = originSize.width;
            var oh = originSize.height;
            var rw = rect.width;
            var rh = rect.height;
            var offset = frame.getOffset();
            var scaleX = cw / ow;
            var scaleY = ch / oh;
            var trimLeft = offset.x + (ow - rw) / 2;
            var trimRight = offset.x - (ow - rw) / 2;
            var trimBottom = offset.y + (oh - rh) / 2;
            var trimTop = offset.y - (oh - rh) / 2;
            l = trimLeft * scaleX - appX;
            b = trimBottom * scaleY - appY;
            r = cw + trimRight * scaleX - appX;
            t = ch + trimTop * scaleY - appY;
          }

          dataList[0].x = l;
          dataList[0].y = b;
          dataList[0].z = 0;
          dataList[3].x = r;
          dataList[3].y = t;
          dataList[3].z = 0;
          renderData.vertDirty = false;
        },
        updateUvs: function updateUvs(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.vData;
          var uv = sprite.spriteFrame.uv;
          vData[3] = uv[0];
          vData[4] = uv[1];
          vData[12] = uv[2];
          vData[13] = uv[3];
          vData[21] = uv[4];
          vData[22] = uv[5];
          vData[30] = uv[6];
          vData[31] = uv[7];
          renderData.uvDirty = false;
        },
        updateColor: function updateColor(sprite) {
          var vData = sprite.renderData.vData;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = color.a / 255;

          for (var _i = 0; _i < 4; _i++) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
            colorOffset += 9;
          }
        }
      });
    }
  };
});