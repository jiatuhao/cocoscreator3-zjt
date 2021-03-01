"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadDomAudio = downloadDomAudio;
exports.downloadAudio = downloadAudio;

var _debug = require("../core/platform/debug.js");

var _sys = require("../core/platform/sys.js");

var _clip = require("./assets/clip.js");

var _downloadFile = _interopRequireDefault(require("../core/asset-manager/download-file.js"));

var _downloader = _interopRequireDefault(require("../core/asset-manager/downloader.js"));

var _audioUtils = require("./audio-utils.js");

var _factory = _interopRequireDefault(require("../core/asset-manager/factory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

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
 * @module asset-manager
 */
function downloadDomAudio(url, options, onComplete) {
  (0, _audioUtils.createDomAudio)(url).then(dom => {
    onComplete(null, dom);
  }, errMsg => {
    (0, _debug.log)(errMsg);
    onComplete(new Error(errMsg), null);
  });
}

function downloadArrayBuffer(url, options, onComplete) {
  options.xhrResponseType = 'arraybuffer';
  (0, _downloadFile.default)(url, options, options.onFileProgress, onComplete);
}

function downloadAudio(url, options, onComplete) {
  const __audioSupport = _sys.sys.__audioSupport;
  const formatSupport = __audioSupport.format;

  if (formatSupport.length === 0) {
    onComplete(new Error((0, _debug.getError)(4927)));
    return;
  }

  let handler = null;

  if (!__audioSupport.WEB_AUDIO) {
    handler = downloadDomAudio;
  } else {
    // web audio need to download file as arrayBuffer
    if (options.audioLoadMode !== _clip.AudioType.DOM_AUDIO) {
      handler = downloadArrayBuffer;
    } else {
      handler = downloadDomAudio;
    }
  }

  handler(url, options, onComplete);
}

function createAudioClip(id, data, options, onComplete) {
  const out = new _clip.AudioClip();
  out._nativeUrl = id;
  out._nativeAsset = data; // @ts-expect-error assignment to private field

  out._duration = data.duration;
  onComplete(null, out);
}

_downloader.default.register({
  '.mp3': downloadAudio,
  '.ogg': downloadAudio,
  '.wav': downloadAudio,
  '.m4a': downloadAudio
});

_downloader.default.downloadDomAudio = downloadDomAudio;

_factory.default.register({
  // Audio
  '.mp3': createAudioClip,
  '.ogg': createAudioClip,
  '.wav': createAudioClip,
  '.m4a': createAudioClip
});