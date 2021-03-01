System.register("q-bundled:///fs/cocos/terrain/terrain-asset.js", ["../core/data/decorators/index.js", "../core/assets/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, Asset, _dec, _class, _temp, TERRAIN_MAX_LEVELS, TERRAIN_MAX_BLEND_LAYERS, TERRAIN_MAX_LAYER_COUNT, TERRAIN_BLOCK_TILE_COMPLEXITY, TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE, TERRAIN_HEIGHT_BASE, TERRAIN_HEIGHT_FACTORY, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX, TERRAIN_NORTH_INDEX, TERRAIN_SOUTH_INDEX, TERRAIN_WEST_INDEX, TERRAIN_EAST_INDEX, TERRAIN_DATA_VERSION, TERRAIN_DATA_VERSION2, TERRAIN_DATA_VERSION3, TERRAIN_DATA_VERSION4, TERRAIN_DATA_VERSION_DEFAULT, TerrainBuffer, TerrainLayerInfo, TerrainAsset;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_coreAssetsIndexJs) {
      Asset = _coreAssetsIndexJs.Asset;
    }],
    execute: function () {
      _export("TERRAIN_MAX_LEVELS", TERRAIN_MAX_LEVELS = 4);

      _export("TERRAIN_MAX_BLEND_LAYERS", TERRAIN_MAX_BLEND_LAYERS = 4);

      _export("TERRAIN_MAX_LAYER_COUNT", TERRAIN_MAX_LAYER_COUNT = 256);

      _export("TERRAIN_BLOCK_TILE_COMPLEXITY", TERRAIN_BLOCK_TILE_COMPLEXITY = 32);

      _export("TERRAIN_BLOCK_VERTEX_COMPLEXITY", TERRAIN_BLOCK_VERTEX_COMPLEXITY = 33);

      _export("TERRAIN_BLOCK_VERTEX_SIZE", TERRAIN_BLOCK_VERTEX_SIZE = 8); // position + normal + uv


      _export("TERRAIN_HEIGHT_BASE", TERRAIN_HEIGHT_BASE = 32768);

      _export("TERRAIN_HEIGHT_FACTORY", TERRAIN_HEIGHT_FACTORY = 1.0 / 512.0);

      _export("TERRAIN_HEIGHT_FMIN", TERRAIN_HEIGHT_FMIN = -TERRAIN_HEIGHT_BASE * TERRAIN_HEIGHT_FACTORY);

      _export("TERRAIN_HEIGHT_FMAX", TERRAIN_HEIGHT_FMAX = (65535 - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY);

      _export("TERRAIN_NORTH_INDEX", TERRAIN_NORTH_INDEX = 0);

      _export("TERRAIN_SOUTH_INDEX", TERRAIN_SOUTH_INDEX = 1);

      _export("TERRAIN_WEST_INDEX", TERRAIN_WEST_INDEX = 2);

      _export("TERRAIN_EAST_INDEX", TERRAIN_EAST_INDEX = 3);

      _export("TERRAIN_DATA_VERSION", TERRAIN_DATA_VERSION = 0x01010001);

      _export("TERRAIN_DATA_VERSION2", TERRAIN_DATA_VERSION2 = 0x01010002);

      _export("TERRAIN_DATA_VERSION3", TERRAIN_DATA_VERSION3 = 0x01010003);

      _export("TERRAIN_DATA_VERSION4", TERRAIN_DATA_VERSION4 = 0x01010004);

      _export("TERRAIN_DATA_VERSION_DEFAULT", TERRAIN_DATA_VERSION_DEFAULT = 0x01010111);

      TerrainBuffer = /*#__PURE__*/function () {
        function TerrainBuffer() {
          this.length = 0;
          this.buffer = new Uint8Array(2048);
          this._buffView = new DataView(this.buffer.buffer);
          this._seekPos = 0;
        }

        var _proto = TerrainBuffer.prototype;

        _proto.reserve = function reserve(size) {
          if (this.buffer.byteLength > size) {
            return;
          }

          var capacity = this.buffer.byteLength;

          while (capacity < size) {
            capacity += capacity;
          }

          var temp = new Uint8Array(capacity);

          for (var i = 0; i < this.length; ++i) {
            temp[i] = this.buffer[i];
          }

          this.buffer = temp;
          this._buffView = new DataView(this.buffer.buffer);
        };

        _proto.assign = function assign(buff) {
          this.buffer = buff;
          this.length = buff.length;
          this._seekPos = buff.byteOffset;
          this._buffView = new DataView(buff.buffer);
        };

        _proto.writeInt8 = function writeInt8(value) {
          this.reserve(this.length + 1);

          this._buffView.setInt8(this.length, value);

          this.length += 1;
        };

        _proto.writeInt16 = function writeInt16(value) {
          this.reserve(this.length + 2);

          this._buffView.setInt16(this.length, value, true);

          this.length += 2;
        };

        _proto.writeInt32 = function writeInt32(value) {
          this.reserve(this.length + 4);

          this._buffView.setInt32(this.length, value, true);

          this.length += 4;
        };

        _proto.writeIntArray = function writeIntArray(value) {
          this.reserve(this.length + 4 * value.length);

          for (var i = 0; i < value.length; ++i) {
            this._buffView.setInt32(this.length + i * 4, value[i], true);
          }

          this.length += 4 * value.length;
        };

        _proto.writeFloat = function writeFloat(value) {
          this.reserve(this.length + 4);

          this._buffView.setFloat32(this.length, value, true);

          this.length += 4;
        };

        _proto.writeFloatArray = function writeFloatArray(value) {
          this.reserve(this.length + 4 * value.length);

          for (var i = 0; i < value.length; ++i) {
            this._buffView.setFloat32(this.length + i * 4, value[i], true);
          }

          this.length += 4 * value.length;
        };

        _proto.writeString = function writeString(value) {
          this.reserve(this.length + value.length + 4);

          this._buffView.setInt32(this.length, value.length, true);

          for (var i = 0; i < value.length; ++i) {
            this._buffView.setInt8(this.length + 4 + i, value.charCodeAt(i));
          }

          this.length += value.length + 4;
        };

        _proto.readInt8 = function readInt8() {
          var value = this._buffView.getInt8(this._seekPos);

          this._seekPos += 1;
          return value;
        };

        _proto.readInt16 = function readInt16() {
          var value = this._buffView.getInt16(this._seekPos, true);

          this._seekPos += 2;
          return value;
        };

        _proto.readInt = function readInt() {
          var value = this._buffView.getInt32(this._seekPos, true);

          this._seekPos += 4;
          return value;
        };

        _proto.readIntArray = function readIntArray(value) {
          for (var i = 0; i < value.length; ++i) {
            value[i] = this._buffView.getInt32(this._seekPos + i * 4, true);
          }

          this._seekPos += 4 * value.length;
          return value;
        };

        _proto.readFloat = function readFloat() {
          var value = this._buffView.getFloat32(this._seekPos, true);

          this._seekPos += 4;
          return value;
        };

        _proto.readFloatArray = function readFloatArray(value) {
          for (var i = 0; i < value.length; ++i) {
            value[i] = this._buffView.getFloat32(this._seekPos + i * 4, true);
          }

          this._seekPos += 4 * value.length;
          return value;
        };

        _proto.readString = function readString() {
          var length = this.readInt();
          var value = '';

          for (var i = 0; i < length; ++i) {
            value += String.fromCharCode(this.readInt8());
          }

          return value;
        };

        return TerrainBuffer;
      }();
      /**
       * @en terrain layer info
       * @zh 地形纹理信息
       */


      _export("TerrainLayerInfo", TerrainLayerInfo = function TerrainLayerInfo() {
        this.slot = 0;
        this.tileSize = 1;
        this.detailMap = '';
        this.normalMap = '';
        this.roughness = 1;
        this.metallic = 0;
      });
      /**
       * @en terrain asset
       * @zh 地形资源
       */


      _export("TerrainAsset", TerrainAsset = (_dec = ccclass('cc.TerrainAsset'), _dec(_class = (_temp = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(TerrainAsset, _Asset);

        function TerrainAsset() {
          var _this;

          _this = _Asset.call(this) || this;
          _this._data = null;
          _this._tileSize = 1;
          _this._blockCount = [1, 1];
          _this._weightMapSize = 128;
          _this._lightMapSize = 128;
          _this._heights = new Uint16Array();
          _this._weights = new Uint8Array();
          _this._layerBuffer = [-1, -1, -1, -1];
          _this._layerInfos = [];
          _this.loaded = false;
          return _this;
        }

        var _proto2 = TerrainAsset.prototype;

        /**
         * @en get layer
         * @zh 获得纹理索引
         * @param xBlock block index x
         * @param yBlock block index y
         * @param layerId layer id
         */
        _proto2.getLayer = function getLayer(xBlock, yBlock, layerId) {
          var blockId = yBlock * this.blockCount[0] + xBlock;
          var index = blockId * 4 + layerId;

          if (xBlock < this.blockCount[0] && yBlock < this.blockCount[1] && index < this._layerBuffer.length) {
            return this._layerBuffer[index];
          }

          return -1;
        };

        _proto2.getHeight = function getHeight(i, j) {
          var vertexCountX = this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
          return (this._heights[j * vertexCountX + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
        };

        _proto2.getVertexCountI = function getVertexCountI() {
          if (this._blockCount.length < 1) return 0;
          return this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
        };

        _proto2.getVertexCountJ = function getVertexCountJ() {
          if (this._blockCount.length < 2) return 0;
          return this._blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
        };

        _proto2._setNativeData = function _setNativeData(_nativeData) {
          this._data = _nativeData;
        };

        _proto2._loadNativeData = function _loadNativeData(_nativeData) {
          var stream = new TerrainBuffer();
          stream.assign(_nativeData); // version

          var version = stream.readInt();

          if (version === TERRAIN_DATA_VERSION_DEFAULT) {
            return true;
          }

          if (version !== TERRAIN_DATA_VERSION && version !== TERRAIN_DATA_VERSION2 && version !== TERRAIN_DATA_VERSION3 && version !== TERRAIN_DATA_VERSION4) {
            return false;
          } // geometry info


          this.tileSize = stream.readFloat();
          stream.readIntArray(this._blockCount);
          this.weightMapSize = stream.readInt16();
          this.lightMapSize = stream.readInt16(); // heights

          var heightBufferSize = stream.readInt();
          this.heights = new Uint16Array(heightBufferSize);

          for (var i = 0; i < this.heights.length; ++i) {
            this.heights[i] = stream.readInt16();
          } // weights


          var WeightBufferSize = stream.readInt();
          this.weights = new Uint8Array(WeightBufferSize);

          for (var _i = 0; _i < this.weights.length; ++_i) {
            this.weights[_i] = stream.readInt8();
          } // layer buffer


          if (version >= TERRAIN_DATA_VERSION2) {
            var layerBufferSize = stream.readInt();
            this.layerBuffer = new Array(layerBufferSize);

            for (var _i2 = 0; _i2 < this.layerBuffer.length; ++_i2) {
              this.layerBuffer[_i2] = stream.readInt16();
            }
          } // layer infos


          if (version >= TERRAIN_DATA_VERSION3) {
            var layerInfoSize = stream.readInt();
            this.layerInfos = new Array(layerInfoSize);

            for (var _i3 = 0; _i3 < this.layerInfos.length; ++_i3) {
              this.layerInfos[_i3] = new TerrainLayerInfo();
              this.layerInfos[_i3].slot = stream.readInt();
              this.layerInfos[_i3].tileSize = stream.readFloat();
              this.layerInfos[_i3].detailMap = stream.readString();

              if (version >= TERRAIN_DATA_VERSION4) {
                this.layerInfos[_i3].normalMap = stream.readString();
                this.layerInfos[_i3].roughness = stream.readFloat();
                this.layerInfos[_i3].metallic = stream.readFloat();
              }
            }
          }

          return true;
        };

        _proto2._exportNativeData = function _exportNativeData() {
          var stream = new TerrainBuffer(); // version

          stream.writeInt32(TERRAIN_DATA_VERSION4); // geometry info

          stream.writeFloat(this.tileSize);
          stream.writeIntArray(this._blockCount);
          stream.writeInt16(this.weightMapSize);
          stream.writeInt16(this.lightMapSize); // heights

          stream.writeInt32(this.heights.length);

          for (var i = 0; i < this.heights.length; ++i) {
            stream.writeInt16(this.heights[i]);
          } // weights


          stream.writeInt32(this.weights.length);

          for (var _i4 = 0; _i4 < this.weights.length; ++_i4) {
            stream.writeInt8(this.weights[_i4]);
          } // layer buffer


          stream.writeInt32(this.layerBuffer.length);

          for (var _i5 = 0; _i5 < this.layerBuffer.length; ++_i5) {
            stream.writeInt16(this.layerBuffer[_i5]);
          } // layer infos


          stream.writeInt32(this.layerInfos.length);

          for (var _i6 = 0; _i6 < this.layerInfos.length; ++_i6) {
            stream.writeInt32(this.layerInfos[_i6].slot);
            stream.writeFloat(this.layerInfos[_i6].tileSize);
            stream.writeString(this.layerInfos[_i6].detailMap);
            stream.writeString(this.layerInfos[_i6].normalMap);
            stream.writeFloat(this.layerInfos[_i6].roughness);
            stream.writeFloat(this.layerInfos[_i6].metallic);
          }

          return stream.buffer;
        };

        _proto2._exportDefaultNativeData = function _exportDefaultNativeData() {
          var stream = new TerrainBuffer();
          stream.writeInt32(TERRAIN_DATA_VERSION_DEFAULT);
          return stream.buffer;
        };

        _createClass(TerrainAsset, [{
          key: "_nativeAsset",
          get: function get() {
            return this._data.buffer;
          },
          set: function set(value) {
            if (this._data && this._data.byteLength === value.byteLength) {
              this._data.set(new Uint8Array(value));
            } else {
              this._data = new Uint8Array(value);
            }

            this._loadNativeData(this._data);

            this.loaded = true;
            this.emit('load');
          }
          /**
           * @en tile size
           * @zh 栅格大小
           */

        }, {
          key: "tileSize",
          set: function set(value) {
            this._tileSize = value;
          },
          get: function get() {
            return this._tileSize;
          }
          /**
           * @en block count
           * @zh 块数量
           */

        }, {
          key: "blockCount",
          set: function set(value) {
            this._blockCount = value;
          },
          get: function get() {
            return this._blockCount;
          }
          /**
           * @en light map size
           * @zh 光照图大小
           */

        }, {
          key: "lightMapSize",
          set: function set(value) {
            this._lightMapSize = value;
          },
          get: function get() {
            return this._lightMapSize;
          }
          /**
           * @en weight map size
           * @zh 权重图大小
           */

        }, {
          key: "weightMapSize",
          set: function set(value) {
            this._weightMapSize = value;
          },
          get: function get() {
            return this._weightMapSize;
          }
          /**
           * @en height buffer
           * @zh 高度缓存
           */

        }, {
          key: "heights",
          set: function set(value) {
            this._heights = value;
          },
          get: function get() {
            return this._heights;
          }
          /**
           * @en weight buffer
           * @zh 权重缓存
           */

        }, {
          key: "weights",
          set: function set(value) {
            this._weights = value;
          },
          get: function get() {
            return this._weights;
          }
          /**
           * @en layer buffer
           * @zh 纹理索引缓存
           */

        }, {
          key: "layerBuffer",
          set: function set(value) {
            this._layerBuffer = value;
          },
          get: function get() {
            return this._layerBuffer;
          }
          /**
           * @en layer info
           * @zh 纹理信息
           */

        }, {
          key: "layerInfos",
          set: function set(value) {
            this._layerInfos = value;
          },
          get: function get() {
            return this._layerInfos;
          }
        }]);

        return TerrainAsset;
      }(Asset), _temp)) || _class));
    }
  };
});