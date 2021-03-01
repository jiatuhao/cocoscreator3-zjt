System.register("q-bundled:///fs/cocos/core/asset-manager/download-script.js", ["../platform/debug.js"], function (_export, _context) {
  "use strict";

  var getError, downloaded;

  function downloadScript(url, options, onComplete) {
    // no need to load script again
    if (downloaded[url]) {
      if (onComplete) {
        onComplete(null);
      }

      return null;
    }

    var script = document.createElement('script');

    if (window.location.protocol !== 'file:') {
      script.crossOrigin = 'anonymous';
    }

    script.async = options.scriptAsyncLoading || false;
    script.src = url;

    function loadHandler() {
      script.parentNode.removeChild(script);
      script.removeEventListener('load', loadHandler, false);
      script.removeEventListener('error', errorHandler, false);
      downloaded[url] = true;

      if (onComplete) {
        onComplete(null);
      }
    }

    function errorHandler() {
      script.parentNode.removeChild(script);
      script.removeEventListener('load', loadHandler, false);
      script.removeEventListener('error', errorHandler, false);

      if (onComplete) {
        onComplete(new Error(getError(4928, url)));
      }
    }

    script.addEventListener('load', loadHandler, false);
    script.addEventListener('error', errorHandler, false);
    document.body.appendChild(script);
    return script;
  }

  _export("default", downloadScript);

  return {
    setters: [function (_platformDebugJs) {
      getError = _platformDebugJs.getError;
    }],
    execute: function () {
      /*
       Copyright (c) 2019-2020 Xiamen Yaji Software Co., Ltd.
      
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
      downloaded = {};
    }
  };
});