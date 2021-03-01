System.register("q-bundled:///fs/cocos/core/renderer/scene/submodel.js", ["../../pipeline/define.js", "../core/pass.js", "../core/memory-pools.js", "../../gfx/index.js", "../../global-exports.js"], function (_export, _context) {
  "use strict";

  var RenderPriority, BatchingSchemes, DSPool, IAPool, SubModelPool, SubModelView, NULL_HANDLE, DescriptorSetInfo, legacyCC, _dsInfo, SubModel;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_pipelineDefineJs) {
      RenderPriority = _pipelineDefineJs.RenderPriority;
    }, function (_corePassJs) {
      BatchingSchemes = _corePassJs.BatchingSchemes;
    }, function (_coreMemoryPoolsJs) {
      DSPool = _coreMemoryPoolsJs.DSPool;
      IAPool = _coreMemoryPoolsJs.IAPool;
      SubModelPool = _coreMemoryPoolsJs.SubModelPool;
      SubModelView = _coreMemoryPoolsJs.SubModelView;
      NULL_HANDLE = _coreMemoryPoolsJs.NULL_HANDLE;
    }, function (_gfxIndexJs) {
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      _dsInfo = new DescriptorSetInfo(null);

      _export("SubModel", SubModel = /*#__PURE__*/function () {
        function SubModel() {
          this._device = null;
          this._passes = null;
          this._subMesh = null;
          this._patches = null;
          this._handle = NULL_HANDLE;
          this._priority = RenderPriority.DEFAULT;
          this._inputAssembler = null;
          this._descriptorSet = null;
        }

        var _proto = SubModel.prototype;

        _proto.initialize = function initialize(subMesh, passes, patches) {
          if (patches === void 0) {
            patches = null;
          }

          this._device = legacyCC.director.root.device;
          this._subMesh = subMesh;
          this._patches = patches;
          this._passes = passes;
          this._handle = SubModelPool.alloc();

          this._flushPassInfo();

          if (passes[0].batchingScheme === BatchingSchemes.VB_MERGING) {
            this._subMesh.genFlatBuffers();
          }

          _dsInfo.layout = passes[0].localSetLayout;
          var dsHandle = DSPool.alloc(this._device, _dsInfo);
          var iaHandle = IAPool.alloc(this._device, subMesh.iaInfo);
          SubModelPool.set(this._handle, SubModelView.PRIORITY, RenderPriority.DEFAULT);
          SubModelPool.set(this._handle, SubModelView.INPUT_ASSEMBLER, iaHandle);
          SubModelPool.set(this._handle, SubModelView.DESCRIPTOR_SET, dsHandle);
          SubModelPool.set(this._handle, SubModelView.SUB_MESH, subMesh.handle);
          this._inputAssembler = IAPool.get(iaHandle);
          this._descriptorSet = DSPool.get(dsHandle);
        } // This is a temporary solution
        // It should not be written in a fixed way, or modified by the user
        ;

        _proto.initPlanarShadowShader = function initPlanarShadowShader() {
          var pipeline = legacyCC.director.root.pipeline;
          var shadowInfo = pipeline.shadows;
          var shaderHandle = shadowInfo.getPlanarShader(this._patches);
          SubModelPool.set(this._handle, SubModelView.PLANAR_SHADER, shaderHandle);
        };

        _proto.destroy = function destroy() {
          DSPool.free(SubModelPool.get(this._handle, SubModelView.DESCRIPTOR_SET));
          IAPool.free(SubModelPool.get(this._handle, SubModelView.INPUT_ASSEMBLER));
          SubModelPool.free(this._handle);
          this._descriptorSet = null;
          this._inputAssembler = null;
          this._priority = RenderPriority.DEFAULT;
          this._handle = NULL_HANDLE;
          this._patches = null;
          this._subMesh = null;
          this._passes = null;
        };

        _proto.update = function update() {
          for (var i = 0; i < this._passes.length; ++i) {
            var pass = this._passes[i];
            pass.update();
          }

          this._descriptorSet.update();
        };

        _proto.onPipelineStateChanged = function onPipelineStateChanged() {
          var passes = this._passes;

          if (!passes) {
            return;
          }

          for (var i = 0; i < passes.length; i++) {
            var pass = passes[i];
            pass.beginChangeStatesSilently();
            pass.tryCompile(); // force update shaders

            pass.endChangeStatesSilently();
          }

          this._flushPassInfo();
        };

        _proto.onMacroPatchesStateChanged = function onMacroPatchesStateChanged(patches) {
          this._patches = patches;
          var passes = this._passes;

          if (!passes) {
            return;
          }

          for (var i = 0; i < passes.length; i++) {
            var pass = passes[i];
            pass.beginChangeStatesSilently();
            pass.tryCompile(); // force update shaders

            pass.endChangeStatesSilently();
          }

          this._flushPassInfo();
        };

        _proto._flushPassInfo = function _flushPassInfo() {
          var passes = this._passes;

          if (!passes) {
            return;
          }

          SubModelPool.set(this._handle, SubModelView.PASS_COUNT, passes.length);
          var passOffset = SubModelView.PASS_0;
          var shaderOffset = SubModelView.SHADER_0;

          for (var i = 0; i < passes.length; i++, passOffset++, shaderOffset++) {
            SubModelPool.set(this._handle, passOffset, passes[i].handle);
            SubModelPool.set(this._handle, shaderOffset, passes[i].getShaderVariant(this._patches));
          }
        };

        _createClass(SubModel, [{
          key: "passes",
          set: function set(passes) {
            this._passes = passes;

            this._flushPassInfo(); // DS layout might change too


            if (this._descriptorSet) {
              DSPool.free(SubModelPool.get(this._handle, SubModelView.DESCRIPTOR_SET));
              _dsInfo.layout = passes[0].localSetLayout;
              var dsHandle = DSPool.alloc(this._device, _dsInfo);
              SubModelPool.set(this._handle, SubModelView.DESCRIPTOR_SET, dsHandle);
              this._descriptorSet = DSPool.get(dsHandle);
            }
          },
          get: function get() {
            return this._passes;
          }
        }, {
          key: "subMesh",
          set: function set(subMesh) {
            this._subMesh = subMesh;

            this._inputAssembler.destroy();

            this._inputAssembler.initialize(subMesh.iaInfo);

            if (this._passes[0].batchingScheme === BatchingSchemes.VB_MERGING) {
              this._subMesh.genFlatBuffers();
            }

            SubModelPool.set(this._handle, SubModelView.SUB_MESH, subMesh.handle);
          },
          get: function get() {
            return this._subMesh;
          }
        }, {
          key: "priority",
          set: function set(val) {
            this._priority = val;
            SubModelPool.set(this._handle, SubModelView.PRIORITY, val);
          },
          get: function get() {
            return this._priority;
          }
        }, {
          key: "handle",
          get: function get() {
            return this._handle;
          }
        }, {
          key: "inputAssembler",
          get: function get() {
            return this._inputAssembler;
          }
        }, {
          key: "descriptorSet",
          get: function get() {
            return this._descriptorSet;
          }
        }, {
          key: "patches",
          get: function get() {
            return this._patches;
          } // This is a temporary solution
          // It should not be written in a fixed way, or modified by the user

        }, {
          key: "planarShaderHandel",
          get: function get() {
            return SubModelPool.get(this._handle, SubModelView.PLANAR_SHADER);
          }
        }]);

        return SubModel;
      }());
    }
  };
});