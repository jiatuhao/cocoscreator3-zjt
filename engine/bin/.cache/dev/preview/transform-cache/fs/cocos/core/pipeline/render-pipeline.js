System.register("q-bundled:///fs/cocos/core/pipeline/render-pipeline.js", ["../data/decorators/index.js", "../global-exports.js", "../assets/asset.js", "./render-flow.js", "../gfx/index.js", "./define.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, type, serializable, legacyCC, Asset, RenderFlow, DescriptorSetLayoutInfo, DescriptorSetInfo, globalDescriptorSetLayout, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp, RenderPipeline;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
      displayOrder = _dataDecoratorsIndexJs.displayOrder;
      type = _dataDecoratorsIndexJs.type;
      serializable = _dataDecoratorsIndexJs.serializable;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_assetsAssetJs) {
      Asset = _assetsAssetJs.Asset;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_gfxIndexJs) {
      DescriptorSetLayoutInfo = _gfxIndexJs.DescriptorSetLayoutInfo;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
    }, function (_defineJs) {
      globalDescriptorSetLayout = _defineJs.globalDescriptorSetLayout;
    }],
    execute: function () {
      /**
       * @en Render pipeline describes how we handle the rendering process for all render objects in the related render scene root.
       * It contains some general pipeline configurations, necessary rendering resources and some [[RenderFlow]]s.
       * The rendering process function [[render]] is invoked by [[Root]] for all [[Camera]]s.
       * @zh 渲染管线对象决定了引擎对相关渲染场景下的所有渲染对象实施的完整渲染流程。
       * 这个类主要包含一些通用的管线配置，必要的渲染资源和一些 [[RenderFlow]]。
       * 渲染流程函数 [[render]] 会由 [[Root]] 发起调用并对所有 [[Camera]] 执行预设的渲染流程。
       */
      _export("RenderPipeline", RenderPipeline = (_dec = ccclass('cc.RenderPipeline'), _dec2 = displayOrder(0), _dec3 = displayOrder(1), _dec4 = type([RenderFlow]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(RenderPipeline, _Asset);

        function RenderPipeline() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Asset.call.apply(_Asset, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_tag", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "_flows", _descriptor2, _assertThisInitialized(_this));

          _this._macros = {};
          _this._commandBuffers = [];
          return _this;
        }

        var _proto = RenderPipeline.prototype;

        /**
         * @en The initialization process, user shouldn't use it in most case, only useful when need to generate render pipeline programmatically.
         * @zh 初始化函数，正常情况下不会用到，仅用于程序化生成渲染管线的情况。
         * @param info The render pipeline information
         */
        _proto.initialize = function initialize(info) {
          this._flows = info.flows;

          if (info.tag) {
            this._tag = info.tag;
          }

          return true;
        }
        /**
         * @en Activate the render pipeline after loaded, it mainly activate the flows
         * @zh 当渲染管线资源加载完成后，启用管线，主要是启用管线内的 flow
         */
        ;

        _proto.activate = function activate() {
          this._device = legacyCC.director.root.device;
          var layoutInfo = new DescriptorSetLayoutInfo(globalDescriptorSetLayout.bindings);
          this._descriptorSetLayout = this._device.createDescriptorSetLayout(layoutInfo);
          this._descriptorSet = this._device.createDescriptorSet(new DescriptorSetInfo(this._descriptorSetLayout));

          for (var i = 0; i < this._flows.length; i++) {
            this._flows[i].activate(this);
          }

          return true;
        }
        /**
         * @en Render function, it basically run the render process of all flows in sequence for the given view.
         * @zh 渲染函数，对指定的渲染视图按顺序执行所有渲染流程。
         * @param view Render view。
         */
        ;

        _proto.render = function render(cameras) {
          for (var j = 0; j < this.flows.length; j++) {
            for (var i = 0; i < cameras.length; i++) {
              var camera = cameras[i];
              this.flows[j].render(camera);
            }
          }
        }
        /**
         * @en Internal destroy function
         * @zh 内部销毁函数。
         */
        ;

        _proto.destroy = function destroy() {
          for (var i = 0; i < this._flows.length; i++) {
            this._flows[i].destroy();
          }

          this._flows.length = 0;

          if (this._descriptorSet) {
            this._descriptorSet.destroy();

            this._descriptorSet = null;
          }

          for (var _i = 0; _i < this._commandBuffers.length; _i++) {
            this._commandBuffers[_i].destroy();
          }

          this._commandBuffers.length = 0;
          return _Asset.prototype.destroy.call(this);
        };

        _createClass(RenderPipeline, [{
          key: "macros",

          /**
           * @en Layout of the pipeline-global descriptor set.
           * @zh 管线层的全局描述符集布局。
           * @readonly
           */
          get: function get() {
            return this._macros;
          }
          /**
           * @en The tag of pipeline.
           * @zh 管线的标签。
           * @readonly
           */

        }, {
          key: "tag",
          get: function get() {
            return this._tag;
          }
          /**
           * @en The flows of pipeline.
           * @zh 管线的渲染流程列表。
           * @readonly
           */

        }, {
          key: "flows",
          get: function get() {
            return this._flows;
          }
          /**
           * @en Tag
           * @zh 标签
           * @readonly
           */

        }, {
          key: "device",
          get: function get() {
            return this._device;
          }
        }, {
          key: "descriptorSetLayout",
          get: function get() {
            return this._descriptorSetLayout;
          }
        }, {
          key: "descriptorSet",
          get: function get() {
            return this._descriptorSet;
          }
        }, {
          key: "commandBuffers",
          get: function get() {
            return this._commandBuffers;
          }
        }]);

        return RenderPipeline;
      }(Asset), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_tag", [_dec2, serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_flows", [_dec3, _dec4, serializable], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class)); // Do not delete, for the class detection of editor


      legacyCC.RenderPipeline = RenderPipeline;
    }
  };
});