System.register("q-bundled:///fs/cocos/core/gfx/render-pass.js", ["../utils/murmurhash2_gc.js", "./define.js"], function (_export, _context) {
  "use strict";

  var murmurhash2_32_gc, Format, LoadOp, Obj, ObjectType, PipelineBindPoint, StoreOp, TextureLayout, ColorAttachment, DepthStencilAttachment, SubPassInfo, RenderPassInfo, RenderPass;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  return {
    setters: [function (_utilsMurmurhash2_gcJs) {
      murmurhash2_32_gc = _utilsMurmurhash2_gcJs.murmurhash2_32_gc;
    }, function (_defineJs) {
      Format = _defineJs.Format;
      LoadOp = _defineJs.LoadOp;
      Obj = _defineJs.Obj;
      ObjectType = _defineJs.ObjectType;
      PipelineBindPoint = _defineJs.PipelineBindPoint;
      StoreOp = _defineJs.StoreOp;
      TextureLayout = _defineJs.TextureLayout;
    }],
    execute: function () {
      /**
       * @en Color attachment.
       * @zh GFX 颜色附件。
       */
      _export("ColorAttachment", ColorAttachment = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function ColorAttachment(format, sampleCount, loadOp, storeOp, beginLayout, endLayout) {
        if (format === void 0) {
          format = Format.UNKNOWN;
        }

        if (sampleCount === void 0) {
          sampleCount = 1;
        }

        if (loadOp === void 0) {
          loadOp = LoadOp.CLEAR;
        }

        if (storeOp === void 0) {
          storeOp = StoreOp.STORE;
        }

        if (beginLayout === void 0) {
          beginLayout = TextureLayout.UNDEFINED;
        }

        if (endLayout === void 0) {
          endLayout = TextureLayout.PRESENT_SRC;
        }

        this.format = format;
        this.sampleCount = sampleCount;
        this.loadOp = loadOp;
        this.storeOp = storeOp;
        this.beginLayout = beginLayout;
        this.endLayout = endLayout;
      });
      /**
       * @en Depth stencil attachment.
       * @zh GFX 深度模板附件。
       */


      _export("DepthStencilAttachment", DepthStencilAttachment = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function DepthStencilAttachment(format, sampleCount, depthLoadOp, depthStoreOp, stencilLoadOp, stencilStoreOp, beginLayout, endLayout) {
        if (format === void 0) {
          format = Format.UNKNOWN;
        }

        if (sampleCount === void 0) {
          sampleCount = 1;
        }

        if (depthLoadOp === void 0) {
          depthLoadOp = LoadOp.CLEAR;
        }

        if (depthStoreOp === void 0) {
          depthStoreOp = StoreOp.STORE;
        }

        if (stencilLoadOp === void 0) {
          stencilLoadOp = LoadOp.CLEAR;
        }

        if (stencilStoreOp === void 0) {
          stencilStoreOp = StoreOp.STORE;
        }

        if (beginLayout === void 0) {
          beginLayout = TextureLayout.UNDEFINED;
        }

        if (endLayout === void 0) {
          endLayout = TextureLayout.DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
        }

        this.format = format;
        this.sampleCount = sampleCount;
        this.depthLoadOp = depthLoadOp;
        this.depthStoreOp = depthStoreOp;
        this.stencilLoadOp = stencilLoadOp;
        this.stencilStoreOp = stencilStoreOp;
        this.beginLayout = beginLayout;
        this.endLayout = endLayout;
      });

      _export("SubPassInfo", SubPassInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function SubPassInfo(bindPoint, inputs, colors, resolves, depthStencil, preserves) {
        if (bindPoint === void 0) {
          bindPoint = PipelineBindPoint.GRAPHICS;
        }

        if (inputs === void 0) {
          inputs = [];
        }

        if (colors === void 0) {
          colors = [];
        }

        if (resolves === void 0) {
          resolves = [];
        }

        if (depthStencil === void 0) {
          depthStencil = -1;
        }

        if (preserves === void 0) {
          preserves = [];
        }

        this.bindPoint = bindPoint;
        this.inputs = inputs;
        this.colors = colors;
        this.resolves = resolves;
        this.depthStencil = depthStencil;
        this.preserves = preserves;
      });

      _export("RenderPassInfo", RenderPassInfo = // to make sure all usages must be an instance of this exact class, not assembled from plain object
      function RenderPassInfo(colorAttachments, depthStencilAttachment, subPasses) {
        if (colorAttachments === void 0) {
          colorAttachments = [];
        }

        if (depthStencilAttachment === void 0) {
          depthStencilAttachment = null;
        }

        if (subPasses === void 0) {
          subPasses = [];
        }

        this.colorAttachments = colorAttachments;
        this.depthStencilAttachment = depthStencilAttachment;
        this.subPasses = subPasses;
      });
      /**
       * @en GFX render pass.
       * @zh GFX 渲染过程。
       */


      _export("RenderPass", RenderPass = /*#__PURE__*/function (_Obj) {
        _inheritsLoose(RenderPass, _Obj);

        _createClass(RenderPass, [{
          key: "colorAttachments",
          get: function get() {
            return this._colorInfos;
          }
        }, {
          key: "depthStencilAttachment",
          get: function get() {
            return this._depthStencilInfo;
          }
        }, {
          key: "subPasses",
          get: function get() {
            return this._subPasses;
          }
        }, {
          key: "hash",
          get: function get() {
            return this._hash;
          }
        }]);

        function RenderPass(device) {
          var _this;

          _this = _Obj.call(this, ObjectType.RENDER_PASS) || this;
          _this._device = void 0;
          _this._colorInfos = [];
          _this._depthStencilInfo = null;
          _this._subPasses = [];
          _this._hash = 0;
          _this._device = device;
          return _this;
        } // Based on render pass compatibility


        var _proto = RenderPass.prototype;

        _proto.computeHash = function computeHash() {
          var res = '';

          if (this._subPasses.length) {
            for (var i = 0; i < this._subPasses.length; ++i) {
              var subpass = this._subPasses[i];

              if (subpass.inputs.length) {
                res += 'ia';

                for (var j = 0; j < subpass.inputs.length; ++j) {
                  var ia = this._colorInfos[subpass.inputs[j]];
                  res += "," + ia.format + "," + ia.sampleCount;
                }
              }

              if (subpass.colors.length) {
                res += 'ca';

                for (var _j = 0; _j < subpass.inputs.length; ++_j) {
                  var ca = this._colorInfos[subpass.inputs[_j]];
                  res += "," + ca.format + "," + ca.sampleCount;
                }
              }

              if (subpass.depthStencil >= 0) {
                var ds = this._colorInfos[subpass.depthStencil];
                res += "ds," + ds.format + "," + ds.sampleCount;
              }
            }
          } else {
            res += 'ca';

            for (var _i = 0; _i < this._colorInfos.length; ++_i) {
              var _ca = this._colorInfos[_i];
              res += "," + _ca.format + "," + _ca.sampleCount;
            }

            var _ds = this._depthStencilInfo;

            if (_ds) {
              res += "ds," + _ds.format + "," + _ds.sampleCount;
            }
          }

          return murmurhash2_32_gc(res, 666);
        };

        return RenderPass;
      }(Obj));
    }
  };
});