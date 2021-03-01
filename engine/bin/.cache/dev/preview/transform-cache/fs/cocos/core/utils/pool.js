System.register("q-bundled:///fs/cocos/core/utils/pool.js", [], function (_export, _context) {
  "use strict";

  var Pool;
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2018-2020 Xiamen Yaji Software Co., Ltd.
      
       http://www.cocos.com
      
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
       * @module core
       */

      /**
       * @en
       * A fixed-length object pool designed for general type.<br>
       * The implementation of this object pool is very simple,
       * it can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
       * @zh
       * 长度固定的对象缓存池，可以用来缓存各种对象类型。<br/>
       * 这个对象池的实现非常精简，它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁。
       * @class js.Pool
       * @example
       * ```
       *
       * Example 1:
       *
       * function Details () {
       *     this.uuidList = [];
       * };
       * Details.prototype.reset = function () {
       *     this.uuidList.length = 0;
       * };
       * Details.pool = new js.Pool(function (obj) {
       *     obj.reset();
       * }, 5);
       * Details.pool.get = function () {
       *     return this._get() || new Details();
       * };
       *
       * var detail = Details.pool.get();
       * ...
       * Details.pool.put(detail);
       *
       * Example 2:
       *
       * function Details (buffer) {
       *    this.uuidList = buffer;
       * };
       * ...
       * Details.pool.get = function (buffer) {
       *     var cached = this._get();
       *     if (cached) {
       *         cached.uuidList = buffer;
       *         return cached;
       *     }
       *     else {
       *         return new Details(buffer);
       *     }
       * };
       *
       * var detail = Details.pool.get( [] );
       * ...
       * ```
       */
      _export("default", Pool = /*#__PURE__*/function () {
        var _proto = Pool.prototype;

        /**
         * @en
         * The current number of available objects, the default is 0, it will gradually increase with the recycle of the object,
         * the maximum will not exceed the size specified when the constructor is called.
         * @zh
         * 当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。
         * @default 0
         */

        /**
         * @en
         * Get and initialize an object from pool. This method defaults to null and requires the user to implement it.
         * @zh
         * 获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。
         * @param args - parameters to used to initialize the object
         */
        _proto.get = function get() {
          return this._get();
        };

        function Pool(_0, _1) {
          this.count = void 0;
          this._pool = void 0;
          this._cleanup = void 0;
          var size = _1 === undefined ? _0 : _1;
          var cleanupFunc = _1 === undefined ? null : _0;
          this.count = 0;
          this._pool = new Array(size);
          this._cleanup = cleanupFunc;
        }
        /**
         * @en
         * Get an object from pool, if no available object in the pool, null will be returned.
         * @zh
         * 获取对象池中的对象，如果对象池没有可用对象，则返回空。
         */


        _proto._get = function _get() {
          if (this.count > 0) {
            --this.count;
            var cache = this._pool[this.count];
            this._pool[this.count] = null;
            return cache;
          }

          return null;
        }
        /**
         * @en Put an object into the pool.
         * @zh 向对象池返还一个不再需要的对象。
         */
        ;

        _proto.put = function put(obj) {
          var pool = this._pool;

          if (this.count < pool.length) {
            if (this._cleanup && this._cleanup(obj) === false) {
              return;
            }

            pool[this.count] = obj;
            ++this.count;
          }
        }
        /**
         * @en Resize the pool.
         * @zh 设置对象池容量。
         */
        ;

        _proto.resize = function resize(length) {
          if (length >= 0) {
            this._pool.length = length;

            if (this.count > length) {
              this.count = length;
            }
          }
        };

        return Pool;
      }());
    }
  };
});