System.register(['./coordinates-converts-utils-66b3c6fc.js', './index-5105ded5.js', './json-asset-a4190905.js', './event-enum-a28dcb7d.js', './sprite-frame-b5395794.js', './renderable-2d-03c177c4.js'], function (exports) {
  'use strict';
  var ccclass, _inheritsLoose, createMap, _applyDecoratedDescriptor, legacyCC, _initializerDefineProperty, _assertThisInitialized, Asset, serializable, editable, _createClass, string, extname, type, warn, mixin, Pool, macro, Color, BufferTextureCopy, ccenum, displayOrder, tooltip, visible, multiline, help, executionOrder, menu, range, clamp, Vec2, director, Director, override, PixelFormat, Texture2D, ImageAsset, TextureBase, SpriteFrame, Renderable2D, InstanceMaterialType;
  return {
    setters: [function (module) {
      ccclass = module.dQ;
      _inheritsLoose = module.dR;
      createMap = module.eo;
      _applyDecoratedDescriptor = module.dT;
      legacyCC = module.l;
      _initializerDefineProperty = module.dU;
      _assertThisInitialized = module.dV;
      Asset = module.dB;
      serializable = module.dX;
      editable = module.ec;
      _createClass = module.dS;
      string = module.fw;
      extname = module.i;
      type = module.e5;
      warn = module.w;
      mixin = module.ex;
      Pool = module.f7;
      macro = module.dL;
      Color = module.cL;
      BufferTextureCopy = module.aP;
      ccenum = module.d7;
      displayOrder = module.f0;
      tooltip = module.f8;
      visible = module.f3;
      multiline = module.fx;
      help = module.fa;
      executionOrder = module.fe;
      menu = module.fb;
      range = module.f4;
      clamp = module.cQ;
      Vec2 = module.cv;
    }, function (module) {
      director = module.f;
      Director = module.D;
    }, function (module) {
      override = module.K;
      PixelFormat = module.z;
      Texture2D = module.r;
      ImageAsset = module.I;
      TextureBase = module.C;
    }, function () {}, function (module) {
      SpriteFrame = module.S;
    }, function (module) {
      Renderable2D = module.R;
      InstanceMaterialType = module.I;
    }],
    execute: function () {

      exports({
        H: void 0,
        O: void 0,
        V: void 0,
        b: void 0,
        e: isUnicodeSpace,
        f: fragmentText,
        g: getBaselineOffset,
        i: isUnicodeCJK,
        k: computeHash,
        s: safeMeasureText
      });

      var _dec, _class, _class2, _descriptor, _temp;
      var SpriteAtlas = exports('S', (_dec = ccclass('cc.SpriteAtlas'), _dec(_class = (_class2 = (_temp = function (_Asset) {
        _inheritsLoose(SpriteAtlas, _Asset);

        function SpriteAtlas() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "spriteFrames", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SpriteAtlas.prototype;

        _proto.getTexture = function getTexture() {
          var keys = Object.keys(this.spriteFrames);

          if (keys.length > 0) {
            var spriteFrame = this.spriteFrames[keys[0]];
            return spriteFrame && spriteFrame.texture;
          } else {
            return null;
          }
        };

        _proto.getSpriteFrame = function getSpriteFrame(key) {
          var sf = this.spriteFrames[key];

          if (!sf) {
            return null;
          }

          if (!sf.name) {
            sf.name = key;
          }

          return sf;
        };

        _proto.getSpriteFrames = function getSpriteFrames() {
          var frames = [];
          var spriteFrames = this.spriteFrames;

          for (var _i = 0, _Object$keys = Object.keys(spriteFrames); _i < _Object$keys.length; _i++) {
            var _key2 = _Object$keys[_i];
            frames.push(spriteFrames[_key2]);
          }

          return frames;
        };

        _proto._serialize = function _serialize(ctxForExporting) {
        };

        _proto._deserialize = function _deserialize(serializeData, handle) {
          var data = serializeData;
          this._name = data.name;
          var frames = data.spriteFrames;
          this.spriteFrames = createMap();

          for (var i = 0; i < frames.length; i += 2) {
            handle.result.push(this.spriteFrames, frames[i], frames[i + 1]);
          }
        };

        return SpriteAtlas;
      }(Asset), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return createMap();
        }
      })), _class2)) || _class));
      legacyCC.SpriteAtlas = SpriteAtlas;

      var _dec$1, _class$1;
      var Font = exports('F', (_dec$1 = ccclass('cc.Font'), _dec$1(_class$1 = function (_Asset) {
        _inheritsLoose(Font, _Asset);

        function Font() {
          return _Asset.apply(this, arguments) || this;
        }

        return Font;
      }(Asset)) || _class$1));
      legacyCC.Font = Font;

      var _dec$2, _class$2, _class2$1, _descriptor$1, _temp$1;
      var TTFFont = exports('T', (_dec$2 = ccclass('cc.TTFFont'), _dec$2(_class$2 = (_class2$1 = (_temp$1 = function (_Font) {
        _inheritsLoose(TTFFont, _Font);

        function TTFFont() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Font.call.apply(_Font, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_fontFamily", _descriptor$1, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(TTFFont, [{
          key: "_nativeAsset",
          get: function get() {
            return this._fontFamily;
          },
          set: function set(value) {
            this._fontFamily = value || 'Arial';
          }
        }, {
          key: "_nativeDep",
          get: function get() {
            return {
              uuid: this._uuid,
              __nativeName__: this._native,
              ext: extname(this._native),
              __isNative__: true
            };
          }
        }]);

        return TTFFont;
      }(Font), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_fontFamily", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$1.prototype, "_nativeAsset", [override, string], Object.getOwnPropertyDescriptor(_class2$1.prototype, "_nativeAsset"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "_nativeDep", [override], Object.getOwnPropertyDescriptor(_class2$1.prototype, "_nativeDep"), _class2$1.prototype)), _class2$1)) || _class$2));
      legacyCC.TTFFont = TTFFont;

      var _dec$3, _dec2, _class$3, _class2$2, _descriptor$2, _descriptor2, _descriptor3, _descriptor4, _temp$2;
      var FontLetterDefinition = function FontLetterDefinition() {
        this.u = 0;
        this.v = 0;
        this.w = 0;
        this.h = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.textureID = 0;
        this.valid = false;
        this.xAdvance = 0;
      };
      var FontAtlas = function () {
        function FontAtlas(texture) {
          this.letterDefinitions = {};
          this.texture = texture;
        }

        var _proto = FontAtlas.prototype;

        _proto.addLetterDefinitions = function addLetterDefinitions(letter, letterDefinition) {
          this.letterDefinitions[letter] = letterDefinition;
        };

        _proto.cloneLetterDefinition = function cloneLetterDefinition() {
          var copyLetterDefinitions = {};

          for (var _i = 0, _Object$keys = Object.keys(this.letterDefinitions); _i < _Object$keys.length; _i++) {
            var _key = _Object$keys[_i];
            var value = new FontLetterDefinition();
            mixin(value, this.letterDefinitions[_key]);
            copyLetterDefinitions[_key] = value;
          }

          return copyLetterDefinitions;
        };

        _proto.getTexture = function getTexture() {
          return this.texture;
        };

        _proto.getLetter = function getLetter(key) {
          return this.letterDefinitions[key];
        };

        _proto.getLetterDefinitionForChar = function getLetterDefinitionForChar(_char, labelInfo) {
          var key = _char.charCodeAt(0);

          var hasKey = this.letterDefinitions.hasOwnProperty(key);
          var letter;

          if (hasKey) {
            letter = this.letterDefinitions[key];
          } else {
            letter = null;
          }

          return letter;
        };

        _proto.clear = function clear() {
          this.letterDefinitions = {};
        };

        return FontAtlas;
      }();
      var BitmapFont = exports('B', (_dec$3 = ccclass('cc.BitmapFont'), _dec2 = type(SpriteFrame), _dec$3(_class$3 = (_class2$2 = (_temp$2 = function (_Font) {
        _inheritsLoose(BitmapFont, _Font);

        function BitmapFont() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this = _Font.call.apply(_Font, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "fntDataStr", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spriteFrame", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "fontSize", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "fntConfig", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto2 = BitmapFont.prototype;

        _proto2.onLoaded = function onLoaded() {
          var spriteFrame = this.spriteFrame;

          if (!this.fontDefDictionary && spriteFrame) {
            this.fontDefDictionary = new FontAtlas(spriteFrame.texture);
          }

          var fntConfig = this.fntConfig;

          if (!fntConfig) {
            warn('The fnt config is not exists!');
            return;
          }

          var fontDict = fntConfig.fontDefDictionary;

          for (var fontDef in fontDict) {
            var letter = new FontLetterDefinition();
            var rect = fontDict[fontDef].rect;
            letter.offsetX = fontDict[fontDef].xOffset;
            letter.offsetY = fontDict[fontDef].yOffset;
            letter.w = rect.width;
            letter.h = rect.height;
            letter.u = rect.x;
            letter.v = rect.y;
            letter.textureID = 0;
            letter.valid = true;
            letter.xAdvance = fontDict[fontDef].xAdvance;
            this.fontDefDictionary.addLetterDefinitions(fontDef, letter);
          }
        };

        return BitmapFont;
      }(Font), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "fntDataStr", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2$2.prototype, "spriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2$2.prototype, "fontSize", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$2.prototype, "fntConfig", [serializable, editable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$2)) || _class$3));
      legacyCC.BitmapFont = BitmapFont;

      var _dec$4, _class$4;
      var LabelAtlas = exports('L', (_dec$4 = ccclass('cc.LabelAtlas'), _dec$4(_class$4 = function (_BitmapFont) {
        _inheritsLoose(LabelAtlas, _BitmapFont);

        function LabelAtlas() {
          return _BitmapFont.apply(this, arguments) || this;
        }

        return LabelAtlas;
      }(BitmapFont)) || _class$4));
      legacyCC.LabelAtlas = LabelAtlas;

      var BASELINE_RATIO = exports('d', 0.26);
      var _BASELINE_OFFSET = 0;

      var MIDDLE_RATIO = exports('M', (BASELINE_RATIO + 1) / 2 - BASELINE_RATIO);
      function getBaselineOffset() {
        return _BASELINE_OFFSET;
      }
      var MAX_CACHE_SIZE = 100;
      var pool = new Pool(2);

      pool.get = function () {
        return this._get() || {
          key: '',
          value: 0,
          prev: null,
          next: null
        };
      };

      var LRUCache = function () {
        function LRUCache(size) {
          this.count = 0;
          this.limit = 0;
          this.datas = {};
          this.limit = size;
        }

        var _proto = LRUCache.prototype;

        _proto.moveToHead = function moveToHead(node) {
          node.next = this.head;
          node.prev = null;
          if (this.head) this.head.prev = node;
          this.head = node;
          if (!this.tail) this.tail = node;
          this.count++;
          this.datas[node.key] = node;
        };

        _proto.put = function put(key, value) {
          var node = pool.get();
          node.key = key;
          node.value = value;

          if (this.count >= this.limit) {
            var discard = this.tail;
            delete this.datas[discard.key];
            this.count--;
            this.tail = discard.prev;
            this.tail.next = null;
            discard.prev = null;
            discard.next = null;
            pool.put(discard);
          }

          this.moveToHead(node);
        };

        _proto.remove = function remove(node) {
          if (node.prev) {
            node.prev.next = node.next;
          } else {
            this.head = node.next;
          }

          if (node.next) {
            node.next.prev = node.prev;
          } else {
            this.tail = node.prev;
          }

          delete this.datas[node.key];
          this.count--;
        };

        _proto.get = function get(key) {
          var node = this.datas[key];

          if (node) {
            this.remove(node);
            this.moveToHead(node);
            return node.value;
          }

          return null;
        };

        _proto.clear = function clear() {
          this.count = 0;
          this.datas = {};
          this.head = null;
          this.tail = null;
        };

        _proto.has = function has(key) {
          return !!this.datas[key];
        };

        _proto["delete"] = function _delete(key) {
          var node = this.datas[key];
          this.remove(node);
        };

        return LRUCache;
      }();

      var measureCache = new LRUCache(MAX_CACHE_SIZE);
      var WORD_REG = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+|\S)/;
      var SYMBOL_REG = /^[!,.:;'}\]%\?>、‘“》？。，！]/;
      var LAST_WORD_REG = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+|\S)$/;
      var LAST_ENGLISH_REG = /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+$/;
      var FIRST_ENGLISH_REG = /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]/;
      function isUnicodeCJK(ch) {
        var __CHINESE_REG = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;
        var __JAPANESE_REG = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
        var __KOREAN_REG = /^[\u1100-\u11FF]|[\u3130-\u318F]|[\uA960-\uA97F]|[\uAC00-\uD7AF]|[\uD7B0-\uD7FF]+$/;
        return __CHINESE_REG.test(ch) || __JAPANESE_REG.test(ch) || __KOREAN_REG.test(ch);
      }
      function isUnicodeSpace(ch) {
        var chCode = ch.charCodeAt(0);
        return chCode >= 9 && chCode <= 13 || chCode === 32 || chCode === 133 || chCode === 160 || chCode === 5760 || chCode >= 8192 && chCode <= 8202 || chCode === 8232 || chCode === 8233 || chCode === 8239 || chCode === 8287 || chCode === 12288;
      }
      function safeMeasureText(ctx, string, desc) {
        var font = desc || ctx.font;
        var key = font + "\uD83C\uDFAE" + string;
        var cache = measureCache.get(key);

        if (cache !== null) {
          return cache;
        }

        var metric = ctx.measureText(string);
        var width = metric && metric.width || 0;
        measureCache.put(key, width);
        return width;
      }

      function _safeSubstring(targetString, startIndex, endIndex) {
        var newStartIndex = startIndex;
        var newEndIndex = endIndex;
        var startChar = targetString[startIndex];

        if (startChar >= "\uDC00" && startChar <= "\uDFFF") {
          newStartIndex--;
        }

        if (endIndex !== undefined) {
          if (endIndex - 1 !== startIndex) {
            var endChar = targetString[endIndex - 1];

            if (endChar >= "\uD800" && endChar <= "\uDBFF") {
              newEndIndex--;
            }
          } else if (startChar >= "\uD800" && startChar <= "\uDBFF") {
            newEndIndex++;
          }
        }

        return targetString.substring(newStartIndex, newEndIndex);
      }

      function fragmentText(stringToken, allWidth, maxWidth, measureText) {
        var wrappedWords = [];

        if (stringToken.length === 0 || maxWidth < 0) {
          wrappedWords.push('');
          return wrappedWords;
        }

        var text = stringToken;

        while (allWidth > maxWidth && text.length > 1) {
          var fuzzyLen = text.length * (maxWidth / allWidth) | 0;

          var tmpText = _safeSubstring(text, fuzzyLen);

          var width = allWidth - measureText(tmpText);
          var sLine = tmpText;
          var pushNum = 0;
          var checkWhile = 0;
          var checkCount = 10;

          while (width > maxWidth && checkWhile++ < checkCount) {
            fuzzyLen *= maxWidth / width;
            fuzzyLen |= 0;
            tmpText = _safeSubstring(text, fuzzyLen);
            width = allWidth - measureText(tmpText);
          }

          checkWhile = 0;

          while (width <= maxWidth && checkWhile++ < checkCount) {
            if (tmpText) {
              var exec = WORD_REG.exec(tmpText);
              pushNum = exec ? exec[0].length : 1;
              sLine = tmpText;
            }

            fuzzyLen += pushNum;
            tmpText = _safeSubstring(text, fuzzyLen);
            width = allWidth - measureText(tmpText);
          }

          fuzzyLen -= pushNum;

          if (fuzzyLen === 0) {
            fuzzyLen = 1;
            sLine = _safeSubstring(text, 1);
          } else if (fuzzyLen === 1 && text[0] >= "\uD800" && text[0] <= "\uDBFF") {
            fuzzyLen = 2;
            sLine = _safeSubstring(text, 2);
          }

          var sText = _safeSubstring(text, 0, fuzzyLen);

          var result = void 0;

          {
            if (SYMBOL_REG.test(sLine || tmpText)) {
              result = LAST_WORD_REG.exec(sText);
              fuzzyLen -= result ? result[0].length : 0;

              if (fuzzyLen === 0) {
                fuzzyLen = 1;
              }

              sLine = _safeSubstring(text, fuzzyLen);
              sText = _safeSubstring(text, 0, fuzzyLen);
            }
          }

          if (FIRST_ENGLISH_REG.test(sLine)) {
            result = LAST_ENGLISH_REG.exec(sText);

            if (result && sText !== result[0]) {
              fuzzyLen -= result[0].length;
              sLine = _safeSubstring(text, fuzzyLen);
              sText = _safeSubstring(text, 0, fuzzyLen);
            }
          }

          if (wrappedWords.length === 0) {
            wrappedWords.push(sText);
          } else {
            sText = sText.trim();

            if (sText.length > 0) {
              wrappedWords.push(sText);
            }
          }

          text = sLine || tmpText;
          allWidth = measureText(text);
        }

        if (wrappedWords.length === 0) {
          wrappedWords.push(text);
        } else {
          text = text.trim();

          if (text.length > 0) {
            wrappedWords.push(text);
          }
        }

        return wrappedWords;
      }

      var _canvasPool;

      var CanvasPool = exports('C', function () {
        function CanvasPool() {
          this.pool = [];
        }

        CanvasPool.getInstance = function getInstance() {
          if (!_canvasPool) {
            _canvasPool = new CanvasPool();
          }

          return _canvasPool;
        };

        var _proto = CanvasPool.prototype;

        _proto.get = function get() {
          var data = this.pool.pop();

          if (!data) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            data = {
              canvas: canvas,
              context: context
            };
          }

          return data;
        };

        _proto.put = function put(canvas) {
          if (this.pool.length >= macro.MAX_LABEL_CANVAS_POOL_SIZE) {
            return;
          }

          this.pool.push(canvas);
        };

        return CanvasPool;
      }());
      var WHITE = Color.WHITE.clone();
      var space = 0;
      var bleed = 2;

      var FontLetterDefinition$1 = function FontLetterDefinition() {
        this.u = 0;
        this.v = 0;
        this.w = 0;
        this.h = 0;
        this.texture = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.valid = false;
        this.xAdvance = 0;
      };

      var _backgroundStyle = "rgba(255, 255, 255, " + (1 / 255).toFixed(3) + ")";

      var BASELINE_OFFSET = getBaselineOffset();

      var LetterTexture = function () {
        function LetterTexture(_char, labelInfo) {
          this.image = null;
          this.labelInfo = void 0;
          this["char"] = void 0;
          this.data = null;
          this.canvas = null;
          this.context = null;
          this.width = 0;
          this.height = 0;
          this.offsetY = 0;
          this.hash = void 0;
          this["char"] = _char;
          this.labelInfo = labelInfo;
          this.hash = _char.charCodeAt(0) + labelInfo.hash;
        }

        var _proto2 = LetterTexture.prototype;

        _proto2.updateRenderData = function updateRenderData() {
          this._updateProperties();

          this._updateTexture();
        };

        _proto2.destroy = function destroy() {
          this.image = null;
        };

        _proto2._updateProperties = function _updateProperties() {
          this.data = CanvasPool.getInstance().get();
          this.canvas = this.data.canvas;
          this.context = this.data.context;

          if (this.context) {
            this.context.font = this.labelInfo.fontDesc;
            var width = safeMeasureText(this.context, this["char"], this.labelInfo.fontDesc);
            var blank = this.labelInfo.margin * 2 + bleed;
            this.width = parseFloat(width.toFixed(2)) + blank;
            this.height = (1 + BASELINE_RATIO) * this.labelInfo.fontSize + blank;
            this.offsetY = -(this.labelInfo.fontSize * BASELINE_RATIO) / 2;
          }

          if (this.canvas.width !== this.width) {
            this.canvas.width = this.width;
          }

          if (this.canvas.height !== this.height) {
            this.canvas.height = this.height;
          }

          if (!this.image) {
            this.image = new ImageAsset();
          }

          this.image.reset(this.canvas);
        };

        _proto2._updateTexture = function _updateTexture() {
          if (!this.context || !this.canvas) {
            return;
          }

          var context = this.context;
          var labelInfo = this.labelInfo;
          var width = this.canvas.width;
          var height = this.canvas.height;
          context.textAlign = 'center';
          context.textBaseline = 'alphabetic';
          context.clearRect(0, 0, width, height);
          context.fillStyle = _backgroundStyle;
          context.fillRect(0, 0, width, height);
          context.font = labelInfo.fontDesc;
          var fontSize = labelInfo.fontSize;
          var startX = width / 2;
          var startY = height / 2 + fontSize * MIDDLE_RATIO + fontSize * BASELINE_OFFSET;
          var color = labelInfo.color;
          context.lineJoin = 'round';
          context.fillStyle = "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + 1 + ")";

          if (labelInfo.isOutlined) {
            var strokeColor = labelInfo.out || WHITE;
            context.strokeStyle = "rgba(" + strokeColor.r + ", " + strokeColor.g + ", " + strokeColor.b + ", " + strokeColor.a / 255 + ")";
            context.lineWidth = labelInfo.margin * 2;
            context.strokeText(this["char"], startX, startY);
          }

          context.fillText(this["char"], startX, startY);
        };

        return LetterTexture;
      }();

      var LetterRenderTexture = function (_Texture2D) {
        _inheritsLoose(LetterRenderTexture, _Texture2D);

        function LetterRenderTexture() {
          return _Texture2D.apply(this, arguments) || this;
        }

        var _proto3 = LetterRenderTexture.prototype;

        _proto3.initWithSize = function initWithSize(width, height, format) {
          if (format === void 0) {
            format = PixelFormat.RGBA8888;
          }

          this.reset({
            width: width,
            height: height,
            format: format
          });
          this.loaded = true;
          this.emit('load');
        };

        _proto3.drawTextureAt = function drawTextureAt(image, x, y) {
          var gfxTexture = this.getGFXTexture();

          if (!image || !gfxTexture) {
            return;
          }

          var gfxDevice = this._getGFXDevice();

          if (!gfxDevice) {
            console.warn('Unable to get device');
            return;
          }

          var region = new BufferTextureCopy();
          region.texOffset.x = x;
          region.texOffset.y = y;
          region.texExtent.width = image.width;
          region.texExtent.height = image.height;
          gfxDevice.copyTexImagesToTexture([image.data], gfxTexture, [region]);
        };

        return LetterRenderTexture;
      }(Texture2D);
      var LetterAtlas = exports('j', function () {
        _createClass(LetterAtlas, [{
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }]);

        function LetterAtlas(width, height) {
          this._x = space;
          this._y = space;
          this._nextY = space;
          this._width = 0;
          this._height = 0;
          this._halfBleed = 0;
          this._dirty = false;
          var texture = new LetterRenderTexture();
          texture.initWithSize(width, height);
          this.fontDefDictionary = new FontAtlas(texture);
          this._halfBleed = bleed / 2;
          this._width = width;
          this._height = height;
          director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, this.beforeSceneLoad, this);
        }

        var _proto4 = LetterAtlas.prototype;

        _proto4.insertLetterTexture = function insertLetterTexture(letterTexture) {
          var texture = letterTexture.image;
          var device = director.root.device;

          if (!texture || !this.fontDefDictionary || !device) {
            return null;
          }

          var width = texture.width;
          var height = texture.height;

          if (this._x + width + space > this._width) {
            this._x = space;
            this._y = this._nextY;
          }

          if (this._y + height > this._nextY) {
            this._nextY = this._y + height + space;
          }

          if (this._nextY > this._height) {
            return null;
          }

          this.fontDefDictionary.texture.drawTextureAt(texture, this._x, this._y);
          this._dirty = true;
          var letterDefinition = new FontLetterDefinition$1();
          letterDefinition.u = this._x + this._halfBleed;
          letterDefinition.v = this._y + this._halfBleed;
          letterDefinition.texture = this.fontDefDictionary.texture;
          letterDefinition.valid = true;
          letterDefinition.w = letterTexture.width - bleed;
          letterDefinition.h = letterTexture.height - bleed;
          letterDefinition.xAdvance = letterDefinition.w;
          letterDefinition.offsetY = letterTexture.offsetY;
          this._x += width + space;
          this.fontDefDictionary.addLetterDefinitions(letterTexture.hash, letterDefinition);
          return letterDefinition;
        };

        _proto4.update = function update() {
          if (!this._dirty) {
            return;
          }

          this._dirty = false;
        };

        _proto4.reset = function reset() {
          this._x = space;
          this._y = space;
          this._nextY = space;
          this.fontDefDictionary.clear();
        };

        _proto4.destroy = function destroy() {
          this.reset();

          if (this.fontDefDictionary) {
            this.fontDefDictionary.texture.destroy();
            this.fontDefDictionary.texture = null;
          }
        };

        _proto4.getTexture = function getTexture() {
          return this.fontDefDictionary.getTexture();
        };

        _proto4.beforeSceneLoad = function beforeSceneLoad() {
          this.clearAllCache();
        };

        _proto4.clearAllCache = function clearAllCache() {
          this.destroy();
          var texture = new LetterRenderTexture();
          texture.initWithSize(this._width, this._height);
          this.fontDefDictionary.texture = texture;
        };

        _proto4.getLetter = function getLetter(key) {
          return this.fontDefDictionary.letterDefinitions[key];
        };

        _proto4.getLetterDefinitionForChar = function getLetterDefinitionForChar(_char2, labelInfo) {
          var hash = _char2.charCodeAt(0) + labelInfo.hash;
          var letter = this.fontDefDictionary.letterDefinitions[hash];

          if (!letter) {
            var temp = new LetterTexture(_char2, labelInfo);
            temp.updateRenderData();
            letter = this.insertLetterTexture(temp);
            temp.destroy();
          }

          return letter;
        };

        return LetterAtlas;
      }());
      var shareLabelInfo = exports('h', {
        fontAtlas: null,
        fontSize: 0,
        lineHeight: 0,
        hAlign: 0,
        vAlign: 0,
        hash: '',
        fontFamily: '',
        fontDesc: 'Arial',
        color: Color.WHITE.clone(),
        isOutlined: false,
        out: Color.WHITE.clone(),
        margin: 0
      });
      function computeHash(labelInfo) {
        var hashData = '';
        var color = labelInfo.color.toHEX();
        var out = '';

        if (labelInfo.isOutlined && labelInfo.margin > 0) {
          out = out + labelInfo.margin + labelInfo.out.toHEX();
        }

        return hashData + labelInfo.fontSize + labelInfo.fontFamily + color + out;
      }

      var _dec$5, _dec2$1, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class$5, _class2$3, _descriptor$3, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _class3, _temp$3;
      var HorizontalTextAlignment;

      (function (HorizontalTextAlignment) {
        HorizontalTextAlignment[HorizontalTextAlignment["LEFT"] = 0] = "LEFT";
        HorizontalTextAlignment[HorizontalTextAlignment["CENTER"] = 1] = "CENTER";
        HorizontalTextAlignment[HorizontalTextAlignment["RIGHT"] = 2] = "RIGHT";
      })(HorizontalTextAlignment || (HorizontalTextAlignment = exports('H', {})));

      ccenum(HorizontalTextAlignment);
      var VerticalTextAlignment;

      (function (VerticalTextAlignment) {
        VerticalTextAlignment[VerticalTextAlignment["TOP"] = 0] = "TOP";
        VerticalTextAlignment[VerticalTextAlignment["CENTER"] = 1] = "CENTER";
        VerticalTextAlignment[VerticalTextAlignment["BOTTOM"] = 2] = "BOTTOM";
      })(VerticalTextAlignment || (VerticalTextAlignment = exports('V', {})));

      ccenum(VerticalTextAlignment);
      var Overflow;

      (function (Overflow) {
        Overflow[Overflow["NONE"] = 0] = "NONE";
        Overflow[Overflow["CLAMP"] = 1] = "CLAMP";
        Overflow[Overflow["SHRINK"] = 2] = "SHRINK";
        Overflow[Overflow["RESIZE_HEIGHT"] = 3] = "RESIZE_HEIGHT";
      })(Overflow || (Overflow = exports('O', {})));

      ccenum(Overflow);
      var CacheMode;

      (function (CacheMode) {
        CacheMode[CacheMode["NONE"] = 0] = "NONE";
        CacheMode[CacheMode["BITMAP"] = 1] = "BITMAP";
        CacheMode[CacheMode["CHAR"] = 2] = "CHAR";
      })(CacheMode || (CacheMode = exports('b', {})));

      ccenum(CacheMode);
      var Label = exports('c', (_dec$5 = ccclass('cc.Label'), _dec2$1 = help('i18n:cc.Label'), _dec3 = executionOrder(110), _dec4 = menu('2D/Label'), _dec5 = displayOrder(4), _dec6 = tooltip('Label 显示的文本内容字符串'), _dec7 = type(HorizontalTextAlignment), _dec8 = displayOrder(5), _dec9 = tooltip('文字水平对齐模式'), _dec10 = type(VerticalTextAlignment), _dec11 = displayOrder(6), _dec12 = tooltip('文字垂直对齐模式'), _dec13 = displayOrder(7), _dec14 = tooltip('文字尺寸，以 point 为单位'), _dec15 = displayOrder(8), _dec16 = visible(function () {
        return !this._isSystemFontUsed;
      }), _dec17 = tooltip('文字字体名字'), _dec18 = displayOrder(8), _dec19 = tooltip('文字行高，以 point 为单位'), _dec20 = type(Overflow), _dec21 = displayOrder(9), _dec22 = tooltip('文字排版模式，包括以下三种：\n 1. CLAMP: 节点约束框之外的文字会被截断 \n 2. SHRINK: 自动根据节点约束框缩小文字\n 3. RESIZE_HEIGHT: 根据文本内容自动更新节点的 height 属性.'), _dec23 = displayOrder(10), _dec24 = tooltip('自动换行'), _dec25 = type(Font), _dec26 = displayOrder(11), _dec27 = visible(function () {
        return !this._isSystemFontUsed;
      }), _dec28 = tooltip('Label 使用的字体资源'), _dec29 = displayOrder(12), _dec30 = tooltip('是否使用系统默认字体'), _dec31 = type(CacheMode), _dec32 = displayOrder(13), _dec33 = tooltip('文本缓存模式，包括以下三种：\n 1. NONE: 不做任何缓存，文本内容进行一次绘制 \n 2. BITMAP: 将文本作为静态图像加入动态图集进行批次合并，但是不能频繁动态修改文本内容 \n 3. CHAR: 将文本拆分为字符并且把字符纹理缓存到一张字符图集中进行复用，适用于字符内容重复并且频繁更新的文本内容'), _dec34 = displayOrder(15), _dec35 = tooltip('字体加粗'), _dec36 = displayOrder(16), _dec37 = tooltip('字体倾斜'), _dec38 = displayOrder(17), _dec39 = tooltip('字体加下划线'), _dec40 = visible(function () {
        return this._isUnderline;
      }), _dec$5(_class$5 = _dec2$1(_class$5 = _dec3(_class$5 = _dec4(_class$5 = (_class2$3 = (_temp$3 = _class3 = function (_Renderable2D) {
        _inheritsLoose(Label, _Renderable2D);

        _createClass(Label, [{
          key: "string",
          get: function get() {
            return this._string;
          },
          set: function set(value) {
            value += '';

            if (this._string === value) {
              return;
            }

            this._string = value;
            this.updateRenderData();
          }
        }, {
          key: "horizontalAlign",
          get: function get() {
            return this._horizontalAlign;
          },
          set: function set(value) {
            if (this._horizontalAlign === value) {
              return;
            }

            this._horizontalAlign = value;
            this.updateRenderData();
          }
        }, {
          key: "verticalAlign",
          get: function get() {
            return this._verticalAlign;
          },
          set: function set(value) {
            if (this._verticalAlign === value) {
              return;
            }

            this._verticalAlign = value;
            this.updateRenderData();
          }
        }, {
          key: "actualFontSize",
          get: function get() {
            return this._actualFontSize;
          },
          set: function set(value) {
            this._actualFontSize = value;
          }
        }, {
          key: "fontSize",
          get: function get() {
            return this._fontSize;
          },
          set: function set(value) {
            if (this._fontSize === value) {
              return;
            }

            this._fontSize = value;
            this.updateRenderData();
          }
        }, {
          key: "fontFamily",
          get: function get() {
            return this._fontFamily;
          },
          set: function set(value) {
            if (this._fontFamily === value) {
              return;
            }

            this._fontFamily = value;
            this.updateRenderData();
          }
        }, {
          key: "lineHeight",
          get: function get() {
            return this._lineHeight;
          },
          set: function set(value) {
            if (this._lineHeight === value) {
              return;
            }

            this._lineHeight = value;
            this.updateRenderData();
          }
        }, {
          key: "overflow",
          get: function get() {
            return this._overflow;
          },
          set: function set(value) {
            if (this._overflow === value) {
              return;
            }

            this._overflow = value;
            this.updateRenderData();
          }
        }, {
          key: "enableWrapText",
          get: function get() {
            return this._enableWrapText;
          },
          set: function set(value) {
            if (this._enableWrapText === value) {
              return;
            }

            this._enableWrapText = value;
            this.updateRenderData();
          }
        }, {
          key: "font",
          get: function get() {
            return this._font;
          },
          set: function set(value) {
            if (this._font === value) {
              return;
            }

            this._isSystemFontUsed = !value;

            this._font = value;

            if (this._renderData) {
              this.destroyRenderData();
              this._renderData = null;
            }

            this._fontAtlas = null;
            this.updateRenderData(true);
          }
        }, {
          key: "useSystemFont",
          get: function get() {
            return this._isSystemFontUsed;
          },
          set: function set(value) {
            if (this._isSystemFontUsed === value) {
              return;
            }

            this.destroyRenderData();
            this._renderData = null;

            this._isSystemFontUsed = !!value;

            if (value) {
              this.font = null;
            }

            this._flushAssembler();

            this.updateRenderData();
          }
        }, {
          key: "cacheMode",
          get: function get() {
            return this._cacheMode;
          },
          set: function set(value) {
            if (this._cacheMode === value) {
              return;
            }

            if (this._cacheMode === CacheMode.BITMAP && !(this._font instanceof BitmapFont) && this._ttfSpriteFrame) {
              this._ttfSpriteFrame._resetDynamicAtlasFrame();
            }

            if (this._cacheMode === CacheMode.CHAR) {
              this._ttfSpriteFrame = null;
            }

            this._cacheMode = value;
            this.updateRenderData(true);
          }
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._texture;
          }
        }, {
          key: "ttfSpriteFrame",
          get: function get() {
            return this._ttfSpriteFrame;
          }
        }, {
          key: "isBold",
          get: function get() {
            return this._isBold;
          },
          set: function set(value) {
            if (this._isBold === value) {
              return;
            }

            this._isBold = value;
            this.updateRenderData();
          }
        }, {
          key: "isItalic",
          get: function get() {
            return this._isItalic;
          },
          set: function set(value) {
            if (this._isItalic === value) {
              return;
            }

            this._isItalic = value;
            this.updateRenderData();
          }
        }, {
          key: "isUnderline",
          get: function get() {
            return this._isUnderline;
          },
          set: function set(value) {
            if (this._isUnderline === value) {
              return;
            }

            this._isUnderline = value;
            this.updateRenderData();
          }
        }, {
          key: "underlineHeight",
          get: function get() {
            return this._underlineHeight;
          },
          set: function set(value) {
            if (this._underlineHeight === value) return;
            this._underlineHeight = value;
            this.updateRenderData();
          }
        }, {
          key: "assemblerData",
          get: function get() {
            return this._assemblerData;
          }
        }, {
          key: "fontAtlas",
          get: function get() {
            return this._fontAtlas;
          },
          set: function set(value) {
            this._fontAtlas = value;
          }
        }, {
          key: "spacingX",
          get: function get() {
            return this._spacingX;
          },
          set: function set(value) {
            if (this._spacingX === value) {
              return;
            }

            this._spacingX = value;
            this.updateRenderData();
          }
        }, {
          key: "_bmFontOriginalSize",
          get: function get() {
            if (this._font instanceof BitmapFont) {
              return this._font.fontSize;
            } else {
              return -1;
            }
          }
        }]);

        function Label() {
          var _this;

          _this = _Renderable2D.call(this) || this;

          _initializerDefineProperty(_this, "_string", _descriptor$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_horizontalAlign", _descriptor2$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_verticalAlign", _descriptor3$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_actualFontSize", _descriptor4$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fontSize", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fontFamily", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_lineHeight", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_overflow", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_enableWrapText", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_font", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isSystemFontUsed", _descriptor11, _assertThisInitialized(_this));

          _this._spacingX = 0;

          _initializerDefineProperty(_this, "_isItalic", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isBold", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isUnderline", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_underlineHeight", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_cacheMode", _descriptor16, _assertThisInitialized(_this));

          _this._N$file = null;
          _this._texture = null;
          _this._ttfSpriteFrame = null;
          _this._userDefinedFont = null;
          _this._assemblerData = null;
          _this._fontAtlas = null;
          _this._letterTexture = null;

          _this._ttfSpriteFrame = null;
          return _this;
        }

        var _proto = Label.prototype;

        _proto.onEnable = function onEnable() {
          _Renderable2D.prototype.onEnable.call(this);

          if (!this._font && !this._isSystemFontUsed) {
            this.useSystemFont = true;
          }

          if (this._isSystemFontUsed && !this._fontFamily) {
            this.fontFamily = 'Arial';
          }

          this.updateRenderData(true);
        };

        _proto.onDisable = function onDisable() {
          _Renderable2D.prototype.onDisable.call(this);
        };

        _proto.onDestroy = function onDestroy() {
          if (this._assembler && this._assembler.resetAssemblerData) {
            this._assembler.resetAssemblerData(this._assemblerData);
          }

          this._assemblerData = null;

          if (this._ttfSpriteFrame) {
            var tex = this._ttfSpriteFrame.texture;

            if (tex && this._ttfSpriteFrame.original === null) {
              var tex2d = tex;

              if (tex2d.image) {
                tex2d.image.destroy();
              }

              tex.destroy();
            }

            this._ttfSpriteFrame = null;
          }

          this._letterTexture = null;

          _Renderable2D.prototype.onDestroy.call(this);
        };

        _proto.updateRenderData = function updateRenderData(force) {
          if (force === void 0) {
            force = false;
          }

          this.markForUpdateRenderData();

          if (force) {
            this._flushAssembler();

            this._applyFontTexture();
          }
        };

        _proto._render = function _render(render) {
          render.commitComp(this, this._texture, this._assembler, null);
        };

        _proto._updateColor = function _updateColor() {
          if (this._font instanceof BitmapFont) {
            _Renderable2D.prototype._updateColor.call(this);
          } else {
            this.updateRenderData(false);
          }
        };

        _proto._canRender = function _canRender() {
          if (!_Renderable2D.prototype._canRender.call(this) || !this._string) {
            return false;
          }

          var font = this._font;

          if (font && font instanceof BitmapFont) {
            var spriteFrame = font.spriteFrame;

            if (!spriteFrame || !spriteFrame.textureLoaded()) {
              return false;
            }
          }

          return true;
        };

        _proto._flushAssembler = function _flushAssembler() {
          var assembler = Label.Assembler.getAssembler(this);

          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }

          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.material;
            }
          }
        };

        _proto._applyFontTexture = function _applyFontTexture() {
          var _this2 = this;

          var font = this._font;

          if (font instanceof BitmapFont) {
            var spriteFrame = font.spriteFrame;

            var onBMFontTextureLoaded = function onBMFontTextureLoaded() {
              _this2._texture = spriteFrame;

              if (_this2._assembler) {
                _this2._assembler.updateRenderData(_this2);
              }
            };

            if (spriteFrame) {
              if (spriteFrame.loaded || spriteFrame.textureLoaded) {
                onBMFontTextureLoaded();
              } else {
                spriteFrame.once('load', onBMFontTextureLoaded, this);
              }
            }
          } else {
            if (this.cacheMode === CacheMode.CHAR) {
              this._letterTexture = this._assembler.getAssemblerData();
              this._texture = this._letterTexture;
            } else if (!this._ttfSpriteFrame) {
              this._ttfSpriteFrame = new SpriteFrame();
              this._assemblerData = this._assembler.getAssemblerData();
              var image = new ImageAsset(this._assemblerData.canvas);
              var tex = image._texture;
              this._ttfSpriteFrame.texture = tex;
            }

            if (this.cacheMode !== CacheMode.CHAR) {
              this._texture = this._ttfSpriteFrame;
            }
          }
        };

        return Label;
      }(Renderable2D), _class3.HorizontalAlign = HorizontalTextAlignment, _class3.VerticalAlign = VerticalTextAlignment, _class3.Overflow = Overflow, _class3.CacheMode = CacheMode, _class3._canvasPool = CanvasPool.getInstance(), _temp$3), (_applyDecoratedDescriptor(_class2$3.prototype, "string", [_dec5, _dec6, multiline], Object.getOwnPropertyDescriptor(_class2$3.prototype, "string"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "horizontalAlign", [_dec7, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2$3.prototype, "horizontalAlign"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "verticalAlign", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2$3.prototype, "verticalAlign"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "fontSize", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class2$3.prototype, "fontSize"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "fontFamily", [_dec15, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2$3.prototype, "fontFamily"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "lineHeight", [_dec18, _dec19], Object.getOwnPropertyDescriptor(_class2$3.prototype, "lineHeight"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "overflow", [_dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2$3.prototype, "overflow"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "enableWrapText", [_dec23, _dec24], Object.getOwnPropertyDescriptor(_class2$3.prototype, "enableWrapText"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "font", [_dec25, _dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class2$3.prototype, "font"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "useSystemFont", [_dec29, _dec30], Object.getOwnPropertyDescriptor(_class2$3.prototype, "useSystemFont"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "cacheMode", [_dec31, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class2$3.prototype, "cacheMode"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "isBold", [_dec34, _dec35], Object.getOwnPropertyDescriptor(_class2$3.prototype, "isBold"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "isItalic", [_dec36, _dec37], Object.getOwnPropertyDescriptor(_class2$3.prototype, "isItalic"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "isUnderline", [_dec38, _dec39], Object.getOwnPropertyDescriptor(_class2$3.prototype, "isUnderline"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "underlineHeight", [_dec40, editable], Object.getOwnPropertyDescriptor(_class2$3.prototype, "underlineHeight"), _class2$3.prototype), _descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "_string", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'label';
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$3.prototype, "_horizontalAlign", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HorizontalTextAlignment.CENTER;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$3.prototype, "_verticalAlign", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VerticalTextAlignment.CENTER;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$3.prototype, "_actualFontSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$3.prototype, "_fontSize", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$3.prototype, "_fontFamily", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Arial';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$3.prototype, "_lineHeight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$3.prototype, "_overflow", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Overflow.NONE;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$3.prototype, "_enableWrapText", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$3.prototype, "_font", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$3.prototype, "_isSystemFontUsed", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$3.prototype, "_isItalic", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2$3.prototype, "_isBold", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2$3.prototype, "_isUnderline", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2$3.prototype, "_underlineHeight", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2$3.prototype, "_cacheMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CacheMode.NONE;
        }
      })), _class2$3)) || _class$5) || _class$5) || _class$5) || _class$5));

      var _dec$6, _dec2$2, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _dec15$1, _dec16$1, _dec17$1, _dec18$1, _dec19$1, _dec20$1, _dec21$1, _dec22$1, _dec23$1, _dec24$1, _dec25$1, _class$6, _class2$4, _descriptor$4, _descriptor2$2, _descriptor3$2, _descriptor4$2, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9$1, _descriptor10$1, _class3$1, _temp$4;
      var SpriteType;

      (function (SpriteType) {
        SpriteType[SpriteType["SIMPLE"] = 0] = "SIMPLE";
        SpriteType[SpriteType["SLICED"] = 1] = "SLICED";
        SpriteType[SpriteType["TILED"] = 2] = "TILED";
        SpriteType[SpriteType["FILLED"] = 3] = "FILLED";
      })(SpriteType || (SpriteType = {}));

      ccenum(SpriteType);
      var FillType;

      (function (FillType) {
        FillType[FillType["HORIZONTAL"] = 0] = "HORIZONTAL";
        FillType[FillType["VERTICAL"] = 1] = "VERTICAL";
        FillType[FillType["RADIAL"] = 2] = "RADIAL";
      })(FillType || (FillType = {}));

      ccenum(FillType);
      var SizeMode;

      (function (SizeMode) {
        SizeMode[SizeMode["CUSTOM"] = 0] = "CUSTOM";
        SizeMode[SizeMode["TRIMMED"] = 1] = "TRIMMED";
        SizeMode[SizeMode["RAW"] = 2] = "RAW";
      })(SizeMode || (SizeMode = {}));

      ccenum(SizeMode);
      var EventType;

      (function (EventType) {
        EventType["SPRITE_FRAME_CHANGED"] = "spriteframe-changed";
      })(EventType || (EventType = {}));

      var Sprite = exports('a', (_dec$6 = ccclass('cc.Sprite'), _dec2$2 = help('i18n:cc.Sprite'), _dec3$1 = executionOrder(110), _dec4$1 = menu('2D/Sprite'), _dec5$1 = type(SpriteAtlas), _dec6$1 = displayOrder(4), _dec7$1 = tooltip('图片资源所属的 Atlas 图集资源'), _dec8$1 = type(SpriteFrame), _dec9$1 = displayOrder(5), _dec10$1 = tooltip('渲染 Sprite 使用的 SpriteFrame 图片资源'), _dec11$1 = type(SpriteType), _dec12$1 = displayOrder(6), _dec13$1 = tooltip('渲染模式：\n- 普通（Simple）：修改尺寸会整体拉伸图像，适用于序列帧动画和普通图像 \n' + '- 九宫格（Sliced）：修改尺寸时四个角的区域不会拉伸，适用于 UI 按钮和面板背景 \n' + '- 填充（Filled）：设置一定的填充起始位置和方向，能够以一定比率剪裁显示图片'), _dec14$1 = type(FillType), _dec15$1 = tooltip('填充方向，可以选择横向（Horizontal），纵向（Vertical）和扇形（Radial）三种方向'), _dec16$1 = tooltip('扇形填充时，指定扇形的中心点，取值范围 0 ~ 1'), _dec17$1 = range([0, 1, 0.1]), _dec18$1 = tooltip('填充起始位置，输入一个 0 ~ 1 之间的小数表示起始位置的百分比'), _dec19$1 = range([-1, 1, 0.1]), _dec20$1 = tooltip('填充总量，取值范围 0 ~ 1 指定显示图像范围的百分比'), _dec21$1 = displayOrder(8), _dec22$1 = tooltip('节点约束框内是否包括透明像素区域，勾选此项会去除节点约束框内的透明区域'), _dec23$1 = type(SizeMode), _dec24$1 = displayOrder(7), _dec25$1 = tooltip('指定 Sprite 所在节点的尺寸，CUSTOM 表示自定义尺寸，TRIMMED 表示取原始图片剪裁透明像素后的尺寸，RAW 表示取原始图片未剪裁的尺寸'), _dec$6(_class$6 = _dec2$2(_class$6 = _dec3$1(_class$6 = _dec4$1(_class$6 = (_class2$4 = (_temp$4 = _class3$1 = function (_Renderable2D) {
        _inheritsLoose(Sprite, _Renderable2D);

        function Sprite() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Renderable2D.call.apply(_Renderable2D, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_spriteFrame", _descriptor$4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_type", _descriptor2$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fillType", _descriptor3$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_sizeMode", _descriptor4$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fillCenter", _descriptor5$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fillStart", _descriptor6$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_fillRange", _descriptor7$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_isTrimmedMode", _descriptor8$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_useGrayscale", _descriptor9$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_atlas", _descriptor10$1, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Sprite.prototype;

        _proto.__preload = function __preload() {
          this.changeMaterialForDefine();

          _Renderable2D.prototype.__preload.call(this);

          if (this._spriteFrame) {
            this._spriteFrame.on('load', this._markForUpdateUvDirty, this);

            this._markForUpdateUvDirty();
          }
        };

        _proto.onEnable = function onEnable() {
          _Renderable2D.prototype.onEnable.call(this);

          this._activateMaterial();
        };

        _proto.onDestroy = function onDestroy() {
          this.destroyRenderData();

          if (this._spriteFrame) {
            this._spriteFrame.off('load');
          }

          _Renderable2D.prototype.onDestroy.call(this);
        };

        _proto.changeSpriteFrameFromAtlas = function changeSpriteFrameFromAtlas(name) {
          if (!this._atlas) {
            console.warn('SpriteAtlas is null.');
            return;
          }

          var sprite = this._atlas.getSpriteFrame(name);

          this.spriteFrame = sprite;
        };

        _proto.changeMaterialForDefine = function changeMaterialForDefine() {
          var texture;

          if (this._spriteFrame) {
            texture = this._spriteFrame.texture;
          }

          var value = false;

          if (texture instanceof TextureBase) {
            var format = texture.getPixelFormat();
            value = format === PixelFormat.RGBA_ETC1 || format === PixelFormat.RGB_A_PVRTC_4BPPV1 || format === PixelFormat.RGB_A_PVRTC_2BPPV1;
          }

          if (value && this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY;
          } else if (value) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
          } else if (this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
          } else {
            this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
          }

          this.updateMaterial();
        };

        _proto._render = function _render(render) {
          render.commitComp(this, this._spriteFrame, this._assembler, null);
        };

        _proto._canRender = function _canRender() {
          if (!_Renderable2D.prototype._canRender.call(this)) {
            return false;
          }

          var spriteFrame = this._spriteFrame;

          if (!spriteFrame || !spriteFrame.textureLoaded()) {
            return false;
          }

          return true;
        };

        _proto._flushAssembler = function _flushAssembler() {
          var assembler = Sprite.Assembler.getAssembler(this);

          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }

          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.getRenderMaterial(0);
              this.markForUpdateRenderData();

              this._updateColor();
            }
          }
        };

        _proto._applySpriteSize = function _applySpriteSize() {
          if (this._spriteFrame) {
            if (SizeMode.RAW === this._sizeMode) {
              var size = this._spriteFrame.originalSize;

              this.node._uiProps.uiTransformComp.setContentSize(size);
            } else if (SizeMode.TRIMMED === this._sizeMode) {
              var rect = this._spriteFrame.getRect();

              this.node._uiProps.uiTransformComp.setContentSize(rect.width, rect.height);
            }

            this._activateMaterial();
          }
        };

        _proto._resized = function _resized() {
          {
            return;
          }
        };

        _proto._activateMaterial = function _activateMaterial() {
          var spriteFrame = this._spriteFrame;
          var material = this.getRenderMaterial(0);

          if (legacyCC.game.renderType !== legacyCC.game.RENDER_TYPE_CANVAS) {
            if (spriteFrame) {
              if (material) {
                this.markForUpdateRenderData();
              }
            }

            if (this._renderData) {
              this._renderData.material = material;
            }
          } else {
            this.markForUpdateRenderData();
          }
        };

        _proto._onTextureLoaded = function _onTextureLoaded() {
          if (!this.isValid) {
            return;
          }

          this.changeMaterialForDefine();

          this._applySpriteSize();
        };

        _proto._applySpriteFrame = function _applySpriteFrame(oldFrame) {
          var spriteFrame = this._spriteFrame;

          if (this._renderData) {
            if (oldFrame) {
              oldFrame.off('load', this._markForUpdateUvDirty);
            }

            if (spriteFrame) {
              spriteFrame.on('load', this._markForUpdateUvDirty, this);
            }

            if (!this._renderData.uvDirty) {
              if (oldFrame && spriteFrame) {
                this._renderData.uvDirty = oldFrame.uvHash !== spriteFrame.uvHash;
              } else {
                this._renderData.uvDirty = true;
              }
            }

            this._renderDataFlag = this._renderData.uvDirty;
          }

          if (spriteFrame) {
            if (!oldFrame || spriteFrame !== oldFrame) {
              if (spriteFrame.loaded) {
                this._onTextureLoaded();
              } else {
                spriteFrame.once('load', this._onTextureLoaded, this);
              }
            }
          }
        };

        _proto._markForUpdateUvDirty = function _markForUpdateUvDirty() {
          if (this._renderData) {
            this._renderData.uvDirty = true;
            this._renderDataFlag = true;
          }
        };

        _createClass(Sprite, [{
          key: "spriteAtlas",
          get: function get() {
            return this._atlas;
          },
          set: function set(value) {
            if (this._atlas === value) {
              return;
            }

            this._atlas = value;
          }
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            if (this._spriteFrame === value) {
              return;
            }

            var lastSprite = this._spriteFrame;
            this._spriteFrame = value;
            this.markForUpdateRenderData(false);

            this._applySpriteFrame(lastSprite);
          }
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            if (this._type !== value) {
              this._type = value;

              this._flushAssembler();
            }
          }
        }, {
          key: "fillType",
          get: function get() {
            return this._fillType;
          },
          set: function set(value) {
            if (this._fillType !== value) {
              if (value === FillType.RADIAL || this._fillType === FillType.RADIAL) {
                this.destroyRenderData();
                this._renderData = null;
              } else if (this._renderData) {
                this.markForUpdateRenderData(true);
              }
            }

            this._fillType = value;

            this._flushAssembler();
          }
        }, {
          key: "fillCenter",
          get: function get() {
            return this._fillCenter;
          },
          set: function set(value) {
            this._fillCenter.x = value.x;
            this._fillCenter.y = value.y;

            if (this._type === SpriteType.FILLED && this._renderData) {
              this.markForUpdateRenderData();
            }
          }
        }, {
          key: "fillStart",
          get: function get() {
            return this._fillStart;
          },
          set: function set(value) {
            this._fillStart = clamp(value, -1, 1);

            if (this._type === SpriteType.FILLED && this._renderData) {
              this.markForUpdateRenderData();
              this._renderData.uvDirty = true;
            }
          }
        }, {
          key: "fillRange",
          get: function get() {
            return this._fillRange;
          },
          set: function set(value) {
            this._fillRange = clamp(value, -1, 1);

            if (this._type === SpriteType.FILLED && this._renderData) {
              this.markForUpdateRenderData();
              this._renderData.uvDirty = true;
            }
          }
        }, {
          key: "trim",
          get: function get() {
            return this._isTrimmedMode;
          },
          set: function set(value) {
            if (this._isTrimmedMode === value) {
              return;
            }

            this._isTrimmedMode = value;

            if (this._type === SpriteType.SIMPLE && this._renderData) {
              this.markForUpdateRenderData(true);
            }
          }
        }, {
          key: "grayscale",
          get: function get() {
            return this._useGrayscale;
          },
          set: function set(value) {
            if (this._useGrayscale === value) {
              return;
            }

            this._useGrayscale = value;

            if (value === true) {
              this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
            } else {
              this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
            }

            this.updateMaterial();
          }
        }, {
          key: "sizeMode",
          get: function get() {
            return this._sizeMode;
          },
          set: function set(value) {
            if (this._sizeMode === value) {
              return;
            }

            this._sizeMode = value;

            if (value !== SizeMode.CUSTOM) {
              this._applySpriteSize();
            }
          }
        }]);

        return Sprite;
      }(Renderable2D), _class3$1.FillType = FillType, _class3$1.Type = SpriteType, _class3$1.SizeMode = SizeMode, _class3$1.EventType = EventType, _temp$4), (_applyDecoratedDescriptor(_class2$4.prototype, "spriteAtlas", [_dec5$1, _dec6$1, _dec7$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "spriteAtlas"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "spriteFrame", [_dec8$1, _dec9$1, _dec10$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "spriteFrame"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "type", [_dec11$1, _dec12$1, _dec13$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "type"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "fillType", [_dec14$1, _dec15$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "fillType"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "fillCenter", [_dec16$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "fillCenter"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "fillStart", [_dec17$1, _dec18$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "fillStart"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "fillRange", [_dec19$1, _dec20$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "fillRange"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "trim", [_dec21$1, _dec22$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "trim"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "grayscale", [editable], Object.getOwnPropertyDescriptor(_class2$4.prototype, "grayscale"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "sizeMode", [_dec23$1, _dec24$1, _dec25$1], Object.getOwnPropertyDescriptor(_class2$4.prototype, "sizeMode"), _class2$4.prototype), _descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "_spriteFrame", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$4.prototype, "_type", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SpriteType.SIMPLE;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$4.prototype, "_fillType", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FillType.HORIZONTAL;
        }
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$4.prototype, "_sizeMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SizeMode.TRIMMED;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_fillCenter", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_fillStart", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_fillRange", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_isTrimmedMode", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_useGrayscale", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_atlas", [serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$4)) || _class$6) || _class$6) || _class$6) || _class$6));

    }
  };
});
