System.register("q-bundled:///fs/cocos/2d/assembler/sprite/tiled.js", ["../../../core/math/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, Color, vec3_temps, i, _perVertexLength, tiled;

  return {
    setters: [function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
      Color = _coreMathIndexJs.Color;
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
       * @hidden
       */
      vec3_temps = [];

      for (i = 0; i < 4; i++) {
        vec3_temps.push(new Vec3());
      }

      _perVertexLength = 9;

      _export("tiled", tiled = {
        useModel: false,
        sizableWidth: 0,
        sizableHeight: 0,
        vRepeat: 0,
        hRepeat: 0,
        row: 0,
        col: 0,
        createData: function createData(sprite) {
          return sprite.requestRenderData();
        },
        updateRenderData: function updateRenderData(sprite) {
          var renderData = sprite.renderData;
          var frame = sprite.spriteFrame;

          if (!frame || !renderData || !(renderData.uvDirty || renderData.vertDirty)) {
            return;
          }

          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var contentWidth = Math.abs(uiTrans.width);
          var contentHeight = Math.abs(uiTrans.height);
          var rect = frame.getRect();
          var leftWidth = frame.insetLeft;
          var rightWidth = frame.insetRight;
          var centerWidth = rect.width - leftWidth - rightWidth;
          var topHeight = frame.insetTop;
          var bottomHeight = frame.insetBottom;
          var centerHeight = rect.height - topHeight - bottomHeight;
          this.sizableWidth = contentWidth - leftWidth - rightWidth;
          this.sizableHeight = contentHeight - topHeight - bottomHeight;
          this.sizableWidth = this.sizableWidth > 0 ? this.sizableWidth : 0;
          this.sizableHeight = this.sizableHeight > 0 ? this.sizableHeight : 0;
          this.hRepeat = centerWidth === 0 ? this.sizableWidth : this.sizableWidth / centerWidth;
          this.vRepeat = centerHeight === 0 ? this.sizableHeight : this.sizableHeight / centerHeight;
          this.row = Math.ceil(this.vRepeat + 2);
          this.col = Math.ceil(this.hRepeat + 2);
          renderData.dataLength = Math.max(8, this.row + 1, this.col + 1);
          this.updateVerts(sprite); // update data property

          renderData.vertexCount = this.row * this.col * 4;
          renderData.indicesCount = this.row * this.col * 6;
          renderData.uvDirty = false;
          renderData.vertDirty = false;
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          var node = sprite.node;
          var renderData = sprite.renderData; // buffer

          var buffer = renderer.acquireBufferBatch(); // buffer data may be realloc, need get reference after request.

          var indicesOffset = buffer.indicesOffset;
          var vertexOffset = buffer.byteOffset >> 2;
          var vertexId = buffer.vertexOffset;
          var vertexCount = renderData.vertexCount;
          var indicesCount = renderData.indicesCount;
          var vBuf = buffer.vData;
          var iBuf = buffer.iData;
          var isRecreate = buffer.request(vertexCount, indicesCount);

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            vertexOffset = 0;
            indicesOffset = 0;
            vertexId = 0;
          }

          var frame = sprite.spriteFrame;
          var rotated = frame.isRotated();
          var uv = frame.uv;
          var uvSliced = frame.uvSliced;
          var rect = frame.getRect();
          var leftWidth = frame.insetLeft;
          var rightWidth = frame.insetRight;
          var centerWidth = rect.width - leftWidth - rightWidth;
          var topHeight = frame.insetTop;
          var bottomHeight = frame.insetBottom;
          var centerHeight = rect.height - topHeight - bottomHeight;
          var matrix = node.worldMatrix;
          this.fillVertices(vBuf, vertexOffset, matrix, this.row, this.col, renderData.data);
          var offset = _perVertexLength;
          var offset1 = offset;
          var offset2 = offset * 2;
          var offset3 = offset * 3;
          var offset4 = offset * 4;
          var coefU = 0;
          var coefV = 0;

          for (var yIndex = 0, yLength = this.row; yIndex < yLength; ++yIndex) {
            if (this.sizableHeight > centerHeight) {
              if (this.sizableHeight >= yIndex * centerHeight) {
                coefV = 1;
              } else {
                coefV = this.vRepeat % 1;
              }
            } else {
              coefV = this.vRepeat;
            }

            for (var xIndex = 0, xLength = this.col; xIndex < xLength; ++xIndex) {
              if (this.sizableWidth > centerWidth) {
                if (this.sizableWidth >= xIndex * centerWidth) {
                  coefU = 1;
                } else {
                  coefU = this.hRepeat % 1;
                }
              } else {
                coefU = this.hRepeat;
              }

              var vertexOffsetU = vertexOffset + 3;
              var vertexOffsetV = vertexOffsetU + 1; // UV

              if (rotated) {
                // lb
                vBuf[vertexOffsetU] = uv[0];
                vBuf[vertexOffsetV] = uv[1]; // rb

                vBuf[vertexOffsetU + offset1] = uv[0];
                vBuf[vertexOffsetV + offset1] = uv[1] + (uv[7] - uv[1]) * coefU; // lt

                vBuf[vertexOffsetU + offset2] = uv[0] + (uv[6] - uv[0]) * coefV;
                vBuf[vertexOffsetV + offset2] = uv[1]; // rt

                vBuf[vertexOffsetU + offset3] = vBuf[vertexOffsetU + offset2];
                vBuf[vertexOffsetV + offset3] = vBuf[vertexOffsetV + offset1];
              } else {
                // lb
                if (xIndex === 0) {
                  vBuf[vertexOffsetU] = uv[0];
                } else if (xIndex > 0 && xIndex < this.col - 1) {
                  vBuf[vertexOffsetU] = uvSliced[1].u;
                } else if (xIndex === this.col - 1) {
                  vBuf[vertexOffsetU] = uvSliced[2].u;
                }

                if (yIndex === 0) {
                  vBuf[vertexOffsetV] = uvSliced[0].v;
                } else if (yIndex > 0 && yIndex < this.row - 1) {
                  vBuf[vertexOffsetV] = uvSliced[4].v;
                } else if (yIndex === this.row - 1) {
                  vBuf[vertexOffsetV] = uvSliced[8].v;
                } // rb


                if (xIndex === 0) {
                  vBuf[vertexOffsetU + offset1] = uvSliced[1].u + (uvSliced[2].u - uvSliced[1].u) * coefU;
                } else if (xIndex > 0 && xIndex < this.col - 1) {
                  vBuf[vertexOffsetU + offset1] = uvSliced[1].u + (uvSliced[2].u - uvSliced[1].u) * coefU;
                } else if (xIndex === this.col - 1) {
                  vBuf[vertexOffsetU + offset1] = uvSliced[3].u;
                }

                if (yIndex === 0) {
                  vBuf[vertexOffsetV + offset1] = uvSliced[0].v;
                } else if (yIndex > 0 && yIndex < this.row - 1) {
                  vBuf[vertexOffsetV + offset1] = uvSliced[4].v;
                } else if (yIndex === this.row - 1) {
                  vBuf[vertexOffsetV + offset1] = uvSliced[8].v;
                } // lt


                if (xIndex === 0) {
                  vBuf[vertexOffsetU + offset2] = uv[0];
                } else if (xIndex > 0 && xIndex < this.col - 1) {
                  vBuf[vertexOffsetU + offset2] = uvSliced[1].u;
                } else if (xIndex === this.col - 1) {
                  vBuf[vertexOffsetU + offset2] = uvSliced[2].u;
                }

                if (yIndex === 0) {
                  vBuf[vertexOffsetV + offset2] = uvSliced[4].v + (uvSliced[8].v - uvSliced[4].v) * coefV;
                } else if (yIndex > 0 && yIndex < this.row - 1) {
                  vBuf[vertexOffsetV + offset2] = uvSliced[4].v + (uvSliced[8].v - uvSliced[4].v) * coefV;
                } else if (yIndex === this.row - 1) {
                  vBuf[vertexOffsetV + offset2] = uvSliced[12].v;
                } // rt


                vBuf[vertexOffsetU + offset3] = vBuf[vertexOffsetU + offset1];
                vBuf[vertexOffsetV + offset3] = vBuf[vertexOffsetV + offset2];
              } // color


              Color.toArray(vBuf, sprite.color, vertexOffsetV + 1);
              Color.toArray(vBuf, sprite.color, vertexOffsetV + offset1 + 1);
              Color.toArray(vBuf, sprite.color, vertexOffsetV + offset2 + 1);
              Color.toArray(vBuf, sprite.color, vertexOffsetV + offset3 + 1);
              vertexOffset += offset4;
            }
          } // update indices


          for (var _i = 0; _i < indicesCount; _i += 6) {
            iBuf[indicesOffset++] = vertexId;
            iBuf[indicesOffset++] = vertexId + 1;
            iBuf[indicesOffset++] = vertexId + 2;
            iBuf[indicesOffset++] = vertexId + 1;
            iBuf[indicesOffset++] = vertexId + 3;
            iBuf[indicesOffset++] = vertexId + 2;
            vertexId += 4;
          }
        },
        fillVertices: function fillVertices(vBuf, vertexOffset, matrix, row, col, dataList) {
          var x = 0;
          var x1 = 0;
          var y = 0;
          var y1 = 0;

          for (var yIndex = 0, yLength = row; yIndex < yLength; ++yIndex) {
            y = dataList[yIndex].y;
            y1 = dataList[yIndex + 1].y;

            for (var xIndex = 0, xLength = col; xIndex < xLength; ++xIndex) {
              x = dataList[xIndex].x;
              x1 = dataList[xIndex + 1].x;
              Vec3.set(vec3_temps[0], x, y, 0);
              Vec3.set(vec3_temps[1], x1, y, 0);
              Vec3.set(vec3_temps[2], x, y1, 0);
              Vec3.set(vec3_temps[3], x1, y1, 0);

              for (var _i2 = 0; _i2 < 4; _i2++) {
                var vec3_temp = vec3_temps[_i2];
                Vec3.transformMat4(vec3_temp, vec3_temp, matrix);
                var offset = _i2 * _perVertexLength;
                vBuf[vertexOffset + offset] = vec3_temp.x;
                vBuf[vertexOffset + offset + 1] = vec3_temp.y;
                vBuf[vertexOffset + offset + 2] = vec3_temp.z;
              }

              vertexOffset += 36;
            }
          }
        },
        updateVerts: function updateVerts(sprite) {
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var data = sprite.renderData.data;
          var frame = sprite.spriteFrame;
          var rect = frame.getRect();
          var contentWidth = Math.abs(uiTrans.width);
          var contentHeight = Math.abs(uiTrans.height);
          var appx = uiTrans.anchorX * contentWidth;
          var appy = uiTrans.anchorY * contentHeight;
          var leftWidth = frame.insetLeft;
          var rightWidth = frame.insetRight;
          var centerWidth = rect.width - leftWidth - rightWidth;
          var topHeight = frame.insetTop;
          var bottomHeight = frame.insetBottom;
          var centerHeight = rect.height - topHeight - bottomHeight;
          var xScale = uiTrans.width / (leftWidth + rightWidth) > 1 ? 1 : uiTrans.width / (leftWidth + rightWidth);
          var yScale = uiTrans.height / (topHeight + bottomHeight) > 1 ? 1 : uiTrans.height / (topHeight + bottomHeight);
          var offsetWidth = 0;
          var offsetHeight = 0;

          if (centerWidth > 0) {
            /*
             * Because the float numerical calculation in javascript is not accurate enough,
             * there is an expected result of 1.0, but the actual result is 1.000001.
             */
            offsetWidth = Math.floor(this.sizableWidth * 1000) / 1000 % centerWidth === 0 ? centerWidth : this.sizableWidth % centerWidth;
          } else {
            offsetWidth = this.sizableWidth;
          }

          if (centerHeight > 0) {
            offsetHeight = Math.floor(this.sizableHeight * 1000) / 1000 % centerHeight === 0 ? centerHeight : this.sizableHeight % centerHeight;
          } else {
            offsetHeight = this.sizableHeight;
          }

          for (var _i3 = 0; _i3 <= this.col; _i3++) {
            if (_i3 === 0) {
              data[_i3].x = -appx;
            } else if (_i3 > 0 && _i3 < this.col) {
              if (_i3 === 1) {
                data[_i3].x = leftWidth * xScale + Math.min(centerWidth, this.sizableWidth) - appx;
              } else if (centerWidth > 0) {
                if (_i3 === this.col - 1) {
                  data[_i3].x = leftWidth + offsetWidth + centerWidth * (_i3 - 2) - appx;
                } else {
                  data[_i3].x = leftWidth + Math.min(centerWidth, this.sizableWidth) + centerWidth * (_i3 - 2) - appx;
                }
              } else {
                data[_i3].x = leftWidth + this.sizableWidth - appx;
              }
            } else if (_i3 === this.col) {
              data[_i3].x = Math.min(leftWidth + this.sizableWidth + rightWidth, contentWidth) - appx;
            }
          }

          for (var _i4 = 0; _i4 <= this.row; _i4++) {
            if (_i4 === 0) {
              data[_i4].y = -appy;
            } else if (_i4 > 0 && _i4 < this.row) {
              if (_i4 === 1) {
                data[_i4].y = bottomHeight * yScale + Math.min(centerHeight, this.sizableHeight) - appy;
              } else if (centerHeight > 0) {
                if (_i4 === this.row - 1) {
                  data[_i4].y = bottomHeight + offsetHeight + (_i4 - 2) * centerHeight - appy;
                } else {
                  data[_i4].y = bottomHeight + Math.min(centerHeight, this.sizableHeight) + (_i4 - 2) * centerHeight - appy;
                }
              } else {
                data[_i4].y = bottomHeight + this.sizableHeight - appy;
              }
            } else if (_i4 === this.row) {
              data[_i4].y = Math.min(bottomHeight + this.sizableHeight + topHeight, contentHeight) - appy;
            }
          }
        }
      });
    }
  };
});