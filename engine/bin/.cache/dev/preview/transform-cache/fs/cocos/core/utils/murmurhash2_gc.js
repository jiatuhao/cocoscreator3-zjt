System.register("q-bundled:///fs/cocos/core/utils/murmurhash2_gc.js", [], function (_export, _context) {
  "use strict";

  var getUint8ForString;

  function getUint8ForArray(idx) {
    return this[idx];
  }

  function murmurhash2_32_gc(input, seed) {
    var l = input.length;
    var h = seed ^ l;
    var i = 0;
    var getUint8 = typeof input === 'string' ? getUint8ForString : getUint8ForArray;

    while (l >= 4) {
      var k = getUint8.call(input, i) & 0xff | (getUint8.call(input, ++i) & 0xff) << 8 | (getUint8.call(input, ++i) & 0xff) << 16 | (getUint8.call(input, ++i) & 0xff) << 24;
      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      k ^= k >>> 24;
      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
      l -= 4;
      ++i;
    }

    switch (l) {
      case 3:
        h ^= (getUint8.call(input, i + 2) & 0xff) << 16;

      case 2:
        h ^= (getUint8.call(input, i + 1) & 0xff) << 8;

      case 1:
        h ^= getUint8.call(input, i) & 0xff;
        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    }

    h ^= h >>> 13;
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h ^= h >>> 15;
    return h >>> 0;
  }

  _export("murmurhash2_32_gc", murmurhash2_32_gc);

  return {
    setters: [],
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

      /*
       * JS Implementation of MurmurHash2
       *
       * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
       * @see http://github.com/garycourt/murmurhash-js
       * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
       * @see http://sites.google.com/site/murmurhash/
       *
       * @param {string} str ASCII only
       * @param {number} seed Positive integer only
       * @return {number} 32-bit positive integer hash
       */

      /**
       * @packageDocumentation
       * @hidden
       */
      getUint8ForString = String.prototype.charCodeAt;
    }
  };
});