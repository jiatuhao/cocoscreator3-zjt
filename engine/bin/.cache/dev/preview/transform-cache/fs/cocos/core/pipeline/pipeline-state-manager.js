System.register("q-bundled:///fs/cocos/core/pipeline/pipeline-state-manager.js", ["../gfx/index.js", "../renderer/core/memory-pools.js"], function (_export, _context) {
  "use strict";

  var InputState, PipelineStateInfo, PassPool, PassView, PipelineLayoutPool, PipelineStateManager;
  return {
    setters: [function (_gfxIndexJs) {
      InputState = _gfxIndexJs.InputState;
      PipelineStateInfo = _gfxIndexJs.PipelineStateInfo;
    }, function (_rendererCoreMemoryPoolsJs) {
      PassPool = _rendererCoreMemoryPoolsJs.PassPool;
      PassView = _rendererCoreMemoryPoolsJs.PassView;
      PipelineLayoutPool = _rendererCoreMemoryPoolsJs.PipelineLayoutPool;
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
      _export("PipelineStateManager", PipelineStateManager = /*#__PURE__*/function () {
        function PipelineStateManager() {}

        // pass is only needed on TS.
        PipelineStateManager.getOrCreatePipelineState = function getOrCreatePipelineState(device, pass, shader, renderPass, ia) {
          var hPass = pass.handle;
          var hash1 = PassPool.get(hPass, PassView.HASH);
          var hash2 = renderPass.hash;
          var hash3 = ia.attributesHash;
          var hash4 = shader.id;
          var newHash = hash1 ^ hash2 ^ hash3 ^ hash4;

          var pso = this._PSOHashMap.get(newHash);

          if (!pso) {
            var pipelineLayout = PipelineLayoutPool.get(PassPool.get(hPass, PassView.PIPELINE_LAYOUT));
            var inputState = new InputState(ia.attributes);
            var psoInfo = new PipelineStateInfo(shader, pipelineLayout, renderPass, inputState, pass.rasterizerState, pass.depthStencilState, pass.blendState, PassPool.get(hPass, PassView.PRIMITIVE), PassPool.get(hPass, PassView.DYNAMIC_STATES));
            pso = device.createPipelineState(psoInfo);

            this._PSOHashMap.set(newHash, pso);
          }

          return pso;
        };

        return PipelineStateManager;
      }());

      PipelineStateManager._PSOHashMap = new Map();
    }
  };
});