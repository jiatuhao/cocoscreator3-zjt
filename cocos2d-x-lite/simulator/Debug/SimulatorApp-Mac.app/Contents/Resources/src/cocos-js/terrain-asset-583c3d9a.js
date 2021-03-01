System.register(['./coordinates-converts-utils-66b3c6fc.js', './json-asset-a4190905.js'], function (exports) {
    'use strict';
    var ccclass, _inheritsLoose, _createClass, Asset;
    return {
        setters: [function (module) {
            ccclass = module.dQ;
            _inheritsLoose = module.dR;
            _createClass = module.dS;
            Asset = module.dB;
        }, function () {}],
        execute: function () {

            var _dec, _class, _temp;
            var TERRAIN_MAX_LEVELS = exports('k', 4);
            var TERRAIN_MAX_BLEND_LAYERS = exports('h', 4);
            var TERRAIN_MAX_LAYER_COUNT = exports('i', 256);
            var TERRAIN_BLOCK_TILE_COMPLEXITY = exports('b', 32);
            var TERRAIN_BLOCK_VERTEX_COMPLEXITY = exports('a', 33);
            var TERRAIN_BLOCK_VERTEX_SIZE = exports('c', 8);
            var TERRAIN_HEIGHT_BASE = exports('f', 32768);
            var TERRAIN_HEIGHT_FACTORY = exports('g', 1.0 / 512.0);
            var TERRAIN_HEIGHT_FMIN = exports('e', -TERRAIN_HEIGHT_BASE * TERRAIN_HEIGHT_FACTORY);
            var TERRAIN_HEIGHT_FMAX = exports('d', (65535 - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY);
            var TERRAIN_NORTH_INDEX = exports('l', 0);
            var TERRAIN_SOUTH_INDEX = exports('m', 1);
            var TERRAIN_WEST_INDEX = exports('n', 2);
            var TERRAIN_EAST_INDEX = exports('o', 3);
            var TERRAIN_DATA_VERSION = exports('p', 0x01010001);
            var TERRAIN_DATA_VERSION2 = exports('q', 0x01010002);
            var TERRAIN_DATA_VERSION3 = exports('r', 0x01010003);
            var TERRAIN_DATA_VERSION4 = exports('s', 0x01010004);
            var TERRAIN_DATA_VERSION_DEFAULT = exports('t', 0x01010111);

            var TerrainBuffer = function () {
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

            var TerrainLayerInfo = exports('j', function TerrainLayerInfo() {
              this.slot = 0;
              this.tileSize = 1;
              this.detailMap = '';
              this.normalMap = '';
              this.roughness = 1;
              this.metallic = 0;
            });
            var TerrainAsset = exports('T', (_dec = ccclass('cc.TerrainAsset'), _dec(_class = (_temp = function (_Asset) {
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
                stream.assign(_nativeData);
                var version = stream.readInt();

                if (version === TERRAIN_DATA_VERSION_DEFAULT) {
                  return true;
                }

                if (version !== TERRAIN_DATA_VERSION && version !== TERRAIN_DATA_VERSION2 && version !== TERRAIN_DATA_VERSION3 && version !== TERRAIN_DATA_VERSION4) {
                  return false;
                }

                this.tileSize = stream.readFloat();
                stream.readIntArray(this._blockCount);
                this.weightMapSize = stream.readInt16();
                this.lightMapSize = stream.readInt16();
                var heightBufferSize = stream.readInt();
                this.heights = new Uint16Array(heightBufferSize);

                for (var i = 0; i < this.heights.length; ++i) {
                  this.heights[i] = stream.readInt16();
                }

                var WeightBufferSize = stream.readInt();
                this.weights = new Uint8Array(WeightBufferSize);

                for (var _i = 0; _i < this.weights.length; ++_i) {
                  this.weights[_i] = stream.readInt8();
                }

                if (version >= TERRAIN_DATA_VERSION2) {
                  var layerBufferSize = stream.readInt();
                  this.layerBuffer = new Array(layerBufferSize);

                  for (var _i2 = 0; _i2 < this.layerBuffer.length; ++_i2) {
                    this.layerBuffer[_i2] = stream.readInt16();
                  }
                }

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
                var stream = new TerrainBuffer();
                stream.writeInt32(TERRAIN_DATA_VERSION4);
                stream.writeFloat(this.tileSize);
                stream.writeIntArray(this._blockCount);
                stream.writeInt16(this.weightMapSize);
                stream.writeInt16(this.lightMapSize);
                stream.writeInt32(this.heights.length);

                for (var i = 0; i < this.heights.length; ++i) {
                  stream.writeInt16(this.heights[i]);
                }

                stream.writeInt32(this.weights.length);

                for (var _i4 = 0; _i4 < this.weights.length; ++_i4) {
                  stream.writeInt8(this.weights[_i4]);
                }

                stream.writeInt32(this.layerBuffer.length);

                for (var _i5 = 0; _i5 < this.layerBuffer.length; ++_i5) {
                  stream.writeInt16(this.layerBuffer[_i5]);
                }

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
              }, {
                key: "tileSize",
                set: function set(value) {
                  this._tileSize = value;
                },
                get: function get() {
                  return this._tileSize;
                }
              }, {
                key: "blockCount",
                set: function set(value) {
                  this._blockCount = value;
                },
                get: function get() {
                  return this._blockCount;
                }
              }, {
                key: "lightMapSize",
                set: function set(value) {
                  this._lightMapSize = value;
                },
                get: function get() {
                  return this._lightMapSize;
                }
              }, {
                key: "weightMapSize",
                set: function set(value) {
                  this._weightMapSize = value;
                },
                get: function get() {
                  return this._weightMapSize;
                }
              }, {
                key: "heights",
                set: function set(value) {
                  this._heights = value;
                },
                get: function get() {
                  return this._heights;
                }
              }, {
                key: "weights",
                set: function set(value) {
                  this._weights = value;
                },
                get: function get() {
                  return this._weights;
                }
              }, {
                key: "layerBuffer",
                set: function set(value) {
                  this._layerBuffer = value;
                },
                get: function get() {
                  return this._layerBuffer;
                }
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
