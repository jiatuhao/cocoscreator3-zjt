System.register(['./coordinates-converts-utils-fa8f5fc5.js', './index-b656ef93.js', './renderable-component-7d3cd284.js', './find-c704a59e.js', './json-asset-17eaf8ce.js', './texture-buffer-pool-36a70aeb.js', './transform-utils-c1853224.js', './view-d66ebab1.js', './event-enum-cb046afa.js', './screen-0172c27e.js', './camera-component-4e2374cc.js', './factory-7b08f108.js'], function (exports) {
    'use strict';
    var legacyCC, log, warn, error, assert, _throw, logID, warnID, errorID, assertID, debug, join, extname, mainFileName, basename, dirname, changeExtname, changeBasename, _normalize, stripSep, getSeperator, _createForOfIteratorHelperLoose, DeviceInfo, BindingMappingInfo, TextureInfo, ShaderStage, UniformSampler, UniformBlock, Uniform, ShaderInfo, DRAW_INFO_SIZE, BufferInfo, BufferViewInfo, DrawInfo, IndirectBuffer, ColorAttachment, DepthStencilAttachment, SubPassInfo, RenderPassInfo, SamplerInfo, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, DescriptorSetInfo, DescriptorSetLayoutInfo, DescriptorSetLayoutBinding, CommandBufferInfo, FramebufferInfo, PipelineLayoutInfo, FenceInfo, QueueInfo, InputAssemblerInfo, MAX_ATTACHMENTS, ObjectType, Obj, AttributeName, Type, Format, BufferUsageBit, MemoryUsageBit, BufferFlagBit, BufferAccessBit, PrimitiveMode, PolygonMode, ShadeModel, CullMode, ComparisonFunc, StencilOp, BlendOp, BlendFactor, ColorMask, Filter, Address, TextureType, TextureUsageBit, SampleCount, TextureFlagBit, ShaderStageFlagBit, DescriptorType, CommandBufferType, LoadOp, StoreOp, TextureLayout, PipelineBindPoint, DynamicStateFlagBit, StencilFace, QueueType, ClearFlag, FormatType, API, SurfaceTransform, Feature, FormatInfo, MemoryStatus, FormatInfos, FormatSize, FormatSurfaceSize, GetTypeSize, getTypedArrayConstructor, Rect, Viewport, Color, Offset, Extent, TextureSubres, TextureCopy, BufferTextureCopy, RasterizerState, DepthStencilState, BlendTarget, BlendState, PipelineStateInfo, InputState, PipelineState, DescriptorSet, Buffer, CommandBuffer, Device, Framebuffer, Attribute, InputAssembler, DESCRIPTOR_DYNAMIC_TYPE, DescriptorSetLayout, PipelineLayout, Fence, Queue, RenderPass, Sampler, Shader, TextureViewInfo, Texture, TextureViewInfo$1, Texture$1, Device$1, Shader$1, Attribute$1, InputAssembler$1, Buffer$1, Sampler$1, Fence$1, RenderPass$1, Queue$1, PipelineLayout$1, DescriptorSetLayout$1, Framebuffer$1, CommandBuffer$1, Pool, RecyclePool, CachedArray, ObjectPool, freeHandleArray, PoolType, NULL_HANDLE, ShaderPool, DSPool, IAPool, PipelineLayoutPool, FramebufferPool, SubModelArrayPool, ModelArrayPool, AttributeArrayPool, FlatBufferArrayPool, LightArrayPool, BlendTargetArrayPool, UIBatchArrayPool, RawBufferPool, RawObjectPool, PassView, PassPool, SubModelView, SubModelPool, ModelView, ModelPool, BatchView2D, BatchPool2D, AABBView, AABBPool, SceneView, ScenePool, CameraView, CameraPool, NodeView, NodePool$1, RootView, RootPool, RenderWindowView, RenderWindowPool, FrustumView, FrustumPool, AmbientView, AmbientPool, SkyboxView, SkyboxPool, FogView, FogPool, ShadowsView, ShadowsPool, LightView, LightPool, SphereView, SpherePool, FlatBufferView, FlatBufferPool, SubMeshView, SubMeshPool, RasterizerStateView, RasterizerStatePool, DepthStencilStateView, DepthStencilStatePool, BlendTargetView, BlendTargetPool, BlendStateView, BlendStatePool, UniformProxyFactory, MorphWeightsValueProxy, MorphWeightsAllValueProxy, CubicSplineVec2Value, CubicSplineVec3Value, CubicSplineVec4Value, CubicSplineQuatValue, CubicSplineNumberValue, Ambient, CameraFOVAxis, CameraProjection, CameraAperture, CameraISO, CameraShutter, SKYBOX_FLAG, Camera, CameraVisFlags, VisibilityFlags, DirectionalLight, ColorTemperatureToRGB, LightType, nt2lm, Light, ModelType, Model, ShadowType, PCFType, Shadows, RenderScene, Skybox, SphereLight, SpotLight, SubModel, MaterialInstance, PassInstance, PropertyType, genHandle, getPropertyTypeFromHandle, getTypeFromHandle, getSetIndexFromHandle, getBindingFromHandle, getOffsetFromHandle, customizeType, type2reader, type2writer, getDefaultFromType, overrideMacros, BatchingSchemes, Pass, getDeviceShaderVersion, programLib, SamplerInfoIndex, defaultSamplerHash, genSamplerHash, samplerLib, RenderQueue, PassStage, nearestPOT, TextureBufferPool, isPropertyPath, isCustomPath, HierarchyPath, ComponentPath, evaluatePath;
    return {
        setters: [function (module) {
            legacyCC = module.l;
            log = module.a;
            warn = module.w;
            error = module.e;
            assert = module.b;
            _throw = module._;
            logID = module.c;
            warnID = module.d;
            errorID = module.f;
            assertID = module.g;
            debug = module.h;
            join = module.j;
            extname = module.i;
            mainFileName = module.m;
            basename = module.k;
            dirname = module.n;
            changeExtname = module.o;
            changeBasename = module.p;
            _normalize = module.q;
            stripSep = module.s;
            getSeperator = module.r;
            _createForOfIteratorHelperLoose = module.t;
            DeviceInfo = module.D;
            BindingMappingInfo = module.B;
            TextureInfo = module.T;
            ShaderStage = module.S;
            UniformSampler = module.U;
            UniformBlock = module.u;
            Uniform = module.v;
            ShaderInfo = module.x;
            DRAW_INFO_SIZE = module.y;
            BufferInfo = module.z;
            BufferViewInfo = module.A;
            DrawInfo = module.C;
            IndirectBuffer = module.I;
            ColorAttachment = module.E;
            DepthStencilAttachment = module.F;
            SubPassInfo = module.G;
            RenderPassInfo = module.R;
            SamplerInfo = module.H;
            DESCRIPTOR_BUFFER_TYPE = module.J;
            DESCRIPTOR_SAMPLER_TYPE = module.K;
            DescriptorSetInfo = module.L;
            DescriptorSetLayoutInfo = module.M;
            DescriptorSetLayoutBinding = module.N;
            CommandBufferInfo = module.O;
            FramebufferInfo = module.P;
            PipelineLayoutInfo = module.Q;
            FenceInfo = module.V;
            QueueInfo = module.W;
            InputAssemblerInfo = module.X;
            MAX_ATTACHMENTS = module.Y;
            ObjectType = module.Z;
            Obj = module.$;
            AttributeName = module.a0;
            Type = module.a1;
            Format = module.a2;
            BufferUsageBit = module.a3;
            MemoryUsageBit = module.a4;
            BufferFlagBit = module.a5;
            BufferAccessBit = module.a6;
            PrimitiveMode = module.a7;
            PolygonMode = module.a8;
            ShadeModel = module.a9;
            CullMode = module.aa;
            ComparisonFunc = module.ab;
            StencilOp = module.ac;
            BlendOp = module.ad;
            BlendFactor = module.ae;
            ColorMask = module.af;
            Filter = module.ag;
            Address = module.ah;
            TextureType = module.ai;
            TextureUsageBit = module.aj;
            SampleCount = module.ak;
            TextureFlagBit = module.al;
            ShaderStageFlagBit = module.am;
            DescriptorType = module.an;
            CommandBufferType = module.ao;
            LoadOp = module.ap;
            StoreOp = module.aq;
            TextureLayout = module.ar;
            PipelineBindPoint = module.as;
            DynamicStateFlagBit = module.at;
            StencilFace = module.au;
            QueueType = module.av;
            ClearFlag = module.aw;
            FormatType = module.ax;
            API = module.ay;
            SurfaceTransform = module.az;
            Feature = module.aA;
            FormatInfo = module.aB;
            MemoryStatus = module.aC;
            FormatInfos = module.aD;
            FormatSize = module.aE;
            FormatSurfaceSize = module.aF;
            GetTypeSize = module.aG;
            getTypedArrayConstructor = module.aH;
            Rect = module.aI;
            Viewport = module.aJ;
            Color = module.aK;
            Offset = module.aL;
            Extent = module.aM;
            TextureSubres = module.aN;
            TextureCopy = module.aO;
            BufferTextureCopy = module.aP;
            RasterizerState = module.aQ;
            DepthStencilState = module.aR;
            BlendTarget = module.aS;
            BlendState = module.aT;
            PipelineStateInfo = module.aU;
            InputState = module.aV;
            PipelineState = module.aW;
            DescriptorSet = module.aX;
            Buffer = module.aY;
            CommandBuffer = module.aZ;
            Device = module.a_;
            Framebuffer = module.a$;
            Attribute = module.b0;
            InputAssembler = module.b1;
            DESCRIPTOR_DYNAMIC_TYPE = module.b2;
            DescriptorSetLayout = module.b3;
            PipelineLayout = module.b4;
            Fence = module.b5;
            Queue = module.b6;
            RenderPass = module.b7;
            Sampler = module.b8;
            Shader = module.b9;
            TextureViewInfo = module.ba;
            Texture = module.bb;
            TextureViewInfo$1 = module.bc;
            Texture$1 = module.bd;
            Device$1 = module.be;
            Shader$1 = module.bf;
            Attribute$1 = module.bg;
            InputAssembler$1 = module.bh;
            Buffer$1 = module.bi;
            Sampler$1 = module.bj;
            Fence$1 = module.bk;
            RenderPass$1 = module.bl;
            Queue$1 = module.bm;
            PipelineLayout$1 = module.bn;
            DescriptorSetLayout$1 = module.bo;
            Framebuffer$1 = module.bp;
            CommandBuffer$1 = module.bq;
            Pool = module.br;
            RecyclePool = module.bs;
            CachedArray = module.bt;
            ObjectPool = module.bu;
            freeHandleArray = module.bv;
            PoolType = module.bw;
            NULL_HANDLE = module.bx;
            ShaderPool = module.by;
            DSPool = module.bz;
            IAPool = module.bA;
            PipelineLayoutPool = module.bB;
            FramebufferPool = module.bC;
            SubModelArrayPool = module.bD;
            ModelArrayPool = module.bE;
            AttributeArrayPool = module.bF;
            FlatBufferArrayPool = module.bG;
            LightArrayPool = module.bH;
            BlendTargetArrayPool = module.bI;
            UIBatchArrayPool = module.bJ;
            RawBufferPool = module.bK;
            RawObjectPool = module.bL;
            PassView = module.bM;
            PassPool = module.bN;
            SubModelView = module.bO;
            SubModelPool = module.bP;
            ModelView = module.bQ;
            ModelPool = module.bR;
            BatchView2D = module.bS;
            BatchPool2D = module.bT;
            AABBView = module.bU;
            AABBPool = module.bV;
            SceneView = module.bW;
            ScenePool = module.bX;
            CameraView = module.bY;
            CameraPool = module.bZ;
            NodeView = module.b_;
            NodePool$1 = module.b$;
            RootView = module.c0;
            RootPool = module.c1;
            RenderWindowView = module.c2;
            RenderWindowPool = module.c3;
            FrustumView = module.c4;
            FrustumPool = module.c5;
            AmbientView = module.c6;
            AmbientPool = module.c7;
            SkyboxView = module.c8;
            SkyboxPool = module.c9;
            FogView = module.ca;
            FogPool = module.cb;
            ShadowsView = module.cc;
            ShadowsPool = module.cd;
            LightView = module.ce;
            LightPool = module.cf;
            SphereView = module.cg;
            SpherePool = module.ch;
            FlatBufferView = module.ci;
            FlatBufferPool = module.cj;
            SubMeshView = module.ck;
            SubMeshPool = module.cl;
            RasterizerStateView = module.cm;
            RasterizerStatePool = module.cn;
            DepthStencilStateView = module.co;
            DepthStencilStatePool = module.cp;
            BlendTargetView = module.cq;
            BlendTargetPool = module.cr;
            BlendStateView = module.cs;
            BlendStatePool = module.ct;
            var _setter = {};
            _setter.AffineTransform = module.cG;
            _setter.Asset = module.dB;
            _setter.BitMask = module.d5;
            _setter.CCBoolean = module.dv;
            _setter.CCClass = module.dm;
            _setter.CCFloat = module.du;
            _setter.CCInteger = module.dt;
            _setter.CCObject = module.dn;
            _setter.CCString = module.dw;
            _setter.CachedArray = module.bt;
            _setter.Color = module.cL;
            _setter.CompactValueTypeArray = module.dx;
            _setter.Component = module.dO;
            _setter.DebugMode = module.dJ;
            _setter.Details = module.dr;
            _setter.EPSILON = module.cN;
            _setter.Enum = module.d6;
            _setter.Event = module.dy;
            _setter.EventTarget = module.dz;
            _setter.Eventify = module.dA;
            _setter.GFXAPI = module.ay;
            _setter.GFXAddress = module.ah;
            _setter.GFXAttribute = module.b0;
            _setter.GFXAttributeName = module.a0;
            _setter.GFXBindingMappingInfo = module.B;
            _setter.GFXBlendFactor = module.ae;
            _setter.GFXBlendOp = module.ad;
            _setter.GFXBlendState = module.aT;
            _setter.GFXBlendTarget = module.aS;
            _setter.GFXBuffer = module.aY;
            _setter.GFXBufferAccessBit = module.a6;
            _setter.GFXBufferFlagBit = module.a5;
            _setter.GFXBufferInfo = module.z;
            _setter.GFXBufferTextureCopy = module.aP;
            _setter.GFXBufferUsageBit = module.a3;
            _setter.GFXBufferViewInfo = module.A;
            _setter.GFXClearFlag = module.aw;
            _setter.GFXColor = module.aK;
            _setter.GFXColorAttachment = module.E;
            _setter.GFXColorMask = module.af;
            _setter.GFXCommandBuffer = module.aZ;
            _setter.GFXCommandBufferInfo = module.O;
            _setter.GFXCommandBufferType = module.ao;
            _setter.GFXComparisonFunc = module.ab;
            _setter.GFXCullMode = module.aa;
            _setter.GFXDepthStencilAttachment = module.F;
            _setter.GFXDepthStencilState = module.aR;
            _setter.GFXDescriptorSet = module.aX;
            _setter.GFXDescriptorSetInfo = module.L;
            _setter.GFXDescriptorSetLayout = module.b3;
            _setter.GFXDescriptorSetLayoutBinding = module.N;
            _setter.GFXDescriptorSetLayoutInfo = module.M;
            _setter.GFXDescriptorType = module.an;
            _setter.GFXDevice = module.a_;
            _setter.GFXDeviceInfo = module.D;
            _setter.GFXDrawInfo = module.C;
            _setter.GFXDynamicStateFlagBit = module.at;
            _setter.GFXExtent = module.aM;
            _setter.GFXFeature = module.aA;
            _setter.GFXFence = module.b5;
            _setter.GFXFenceInfo = module.V;
            _setter.GFXFilter = module.ag;
            _setter.GFXFormat = module.a2;
            _setter.GFXFormatInfo = module.aB;
            _setter.GFXFormatInfos = module.aD;
            _setter.GFXFormatSize = module.aE;
            _setter.GFXFormatSurfaceSize = module.aF;
            _setter.GFXFormatType = module.ax;
            _setter.GFXFramebuffer = module.a$;
            _setter.GFXFramebufferInfo = module.P;
            _setter.GFXIndirectBuffer = module.I;
            _setter.GFXInputAssembler = module.b1;
            _setter.GFXInputAssemblerInfo = module.X;
            _setter.GFXInputState = module.aV;
            _setter.GFXLoadOp = module.ap;
            _setter.GFXMemoryStatus = module.aC;
            _setter.GFXMemoryUsageBit = module.a4;
            _setter.GFXObject = module.$;
            _setter.GFXObjectType = module.Z;
            _setter.GFXOffset = module.aL;
            _setter.GFXPipelineBindPoint = module.as;
            _setter.GFXPipelineLayout = module.b4;
            _setter.GFXPipelineLayoutInfo = module.Q;
            _setter.GFXPipelineState = module.aW;
            _setter.GFXPipelineStateInfo = module.aU;
            _setter.GFXPolygonMode = module.a8;
            _setter.GFXPrimitiveMode = module.a7;
            _setter.GFXQueue = module.b6;
            _setter.GFXQueueInfo = module.W;
            _setter.GFXQueueType = module.av;
            _setter.GFXRasterizerState = module.aQ;
            _setter.GFXRect = module.aI;
            _setter.GFXRenderPass = module.b7;
            _setter.GFXRenderPassInfo = module.R;
            _setter.GFXSampleCount = module.ak;
            _setter.GFXSampler = module.b8;
            _setter.GFXSamplerInfo = module.H;
            _setter.GFXShadeModel = module.a9;
            _setter.GFXShader = module.b9;
            _setter.GFXShaderInfo = module.x;
            _setter.GFXShaderStage = module.S;
            _setter.GFXShaderStageFlagBit = module.am;
            _setter.GFXStencilFace = module.au;
            _setter.GFXStencilOp = module.ac;
            _setter.GFXStoreOp = module.aq;
            _setter.GFXSubPassInfo = module.G;
            _setter.GFXSurfaceTransform = module.az;
            _setter.GFXTexture = module.bb;
            _setter.GFXTextureCopy = module.aO;
            _setter.GFXTextureFlagBit = module.al;
            _setter.GFXTextureInfo = module.T;
            _setter.GFXTextureLayout = module.ar;
            _setter.GFXTextureSubres = module.aN;
            _setter.GFXTextureType = module.ai;
            _setter.GFXTextureUsageBit = module.aj;
            _setter.GFXTextureViewInfo = module.ba;
            _setter.GFXType = module.a1;
            _setter.GFXUniform = module.v;
            _setter.GFXUniformBlock = module.u;
            _setter.GFXUniformSampler = module.U;
            _setter.GFXViewport = module.aJ;
            _setter.GFX_DESCRIPTOR_BUFFER_TYPE = module.J;
            _setter.GFX_DESCRIPTOR_DYNAMIC_TYPE = module.b2;
            _setter.GFX_DESCRIPTOR_SAMPLER_TYPE = module.K;
            _setter.GFX_DRAW_INFO_SIZE = module.y;
            _setter.GFX_MAX_ATTACHMENTS = module.Y;
            _setter.JavaScript = module.dE;
            _setter.Layers = module.dM;
            _setter.Mat3 = module.cD;
            _setter.Mat4 = module.cE;
            _setter.MissingScript = module.dN;
            _setter.Pool = module.br;
            _setter.Prefab = module.dC;
            _setter.PrefabLink = module.dc;
            _setter.Quat = module.cB;
            _setter.Rect = module.cJ;
            _setter.RecyclePool = module.bs;
            _setter.Script = module.dD;
            _setter.Size = module.cH;
            _setter.TypeScript = module.dF;
            _setter.ValueType = module.d8;
            _setter.Vec2 = module.cv;
            _setter.Vec3 = module.cx;
            _setter.Vec4 = module.cz;
            _setter.WorldNode3DToLocalNodeUI = module.di;
            _setter.WorldNode3DToWorldNodeUI = module.dj;
            _setter._decorator = module.dl;
            _setter.absMax = module.d4;
            _setter.absMaxComponent = module.d3;
            _setter.approx = module.cP;
            _setter.assert = module.b;
            _setter.assertID = module.g;
            _setter.bits = module.cu;
            _setter.ccenum = module.d7;
            _setter.cclegacy = module.l;
            _setter.clamp = module.cQ;
            _setter.clamp01 = module.cR;
            _setter.color = module.cM;
            _setter.convertUtils = module.dk;
            _setter.deserialize = module.dq;
            _setter.equals = module.cO;
            _setter.error = module.e;
            _setter.errorID = module.f;
            _setter.getError = module.dI;
            _setter.instantiate = module.ds;
            _setter.inverseLerp = module.d2;
            _setter.isDisplayStats = module.dG;
            _setter.isValid = module.dp;
            _setter.js = module.d9;
            _setter.lerp = module.cS;
            _setter.log = module.a;
            _setter.logID = module.c;
            _setter.macro = module.dL;
            _setter.markAsWarning = module.dg;
            _setter.mat4 = module.cF;
            _setter.misc = module.da;
            _setter.murmurhash2_32_gc = module.dh;
            _setter.nextPow2 = module.c$;
            _setter.path = module.db;
            _setter.pingPong = module.d1;
            _setter.pseudoRandom = module.cY;
            _setter.pseudoRandomRange = module.cZ;
            _setter.pseudoRandomRangeInt = module.c_;
            _setter.quat = module.cC;
            _setter.random = module.cV;
            _setter.randomRange = module.cW;
            _setter.randomRangeInt = module.cX;
            _setter.rect = module.cK;
            _setter.removeProperty = module.df;
            _setter.repeat = module.d0;
            _setter.replaceProperty = module.de;
            _setter.setDefaultLogTimes = module.dd;
            _setter.setDisplayStats = module.dH;
            _setter.size = module.cI;
            _setter.sys = module.dK;
            _setter.toDegree = module.cU;
            _setter.toRadian = module.cT;
            _setter.v2 = module.cw;
            _setter.v3 = module.cy;
            _setter.v4 = module.cA;
            _setter.warn = module.w;
            _setter.warnID = module.d;
            exports(_setter);
        }, function (module) {
            UniformProxyFactory = module.U;
            MorphWeightsValueProxy = module.M;
            MorphWeightsAllValueProxy = module.a;
            CubicSplineVec2Value = module.C;
            CubicSplineVec3Value = module.b;
            CubicSplineVec4Value = module.c;
            CubicSplineQuatValue = module.d;
            CubicSplineNumberValue = module.e;
            var _setter = {};
            _setter.AnimationManager = module.t;
            _setter.AssetLibrary = module.j;
            _setter.AssetManager = module.A;
            _setter.CCLoader = module.i;
            _setter.ComponentModifier = module.n;
            _setter.CubicSplineNumberValue = module.e;
            _setter.CubicSplineQuatValue = module.d;
            _setter.CubicSplineVec2Value = module.C;
            _setter.CubicSplineVec3Value = module.b;
            _setter.CubicSplineVec4Value = module.c;
            _setter.CurveValueAdapter = module.o;
            _setter.Director = module.D;
            _setter.EventHandler = module.E;
            _setter.HierachyModifier = module.H;
            _setter.Scheduler = module.S;
            _setter.System = module.k;
            _setter.UniformCurveValueAdapter = module.p;
            _setter.assetManager = module.h;
            _setter.director = module.f;
            _setter.geometry = module.g;
            _setter.isCustomTargetModifier = module.s;
            _setter.isElementModifier = module.r;
            _setter.isPropertyModifier = module.q;
            _setter.loader = module.l;
            _setter.math = module.m;
            _setter.url = module.u;
            exports(_setter);
        }, function (module) {
            Ambient = module.A;
            CameraFOVAxis = module.C;
            CameraProjection = module.a;
            CameraAperture = module.b;
            CameraISO = module.c;
            CameraShutter = module.d;
            SKYBOX_FLAG = module.S;
            Camera = module.e;
            CameraVisFlags = module.f;
            VisibilityFlags = module.V;
            DirectionalLight = module.D;
            ColorTemperatureToRGB = module.g;
            LightType = module.L;
            nt2lm = module.n;
            Light = module.h;
            ModelType = module.M;
            Model = module.i;
            ShadowType = module.j;
            PCFType = module.P;
            Shadows = module.k;
            RenderScene = module.R;
            Skybox = module.l;
            SphereLight = module.m;
            SpotLight = module.o;
            SubModel = module.p;
            MaterialInstance = module.q;
            PassInstance = module.r;
            var _setter = {};
            _setter.BaseNode = module.B;
            _setter.Node = module.N;
            _setter.RenderableComponent = module.s;
            exports(_setter);
        }, function (module) {
            exports('find', module.f);
        }, function (module) {
            PropertyType = module.P;
            genHandle = module.g;
            getPropertyTypeFromHandle = module.a;
            getTypeFromHandle = module.b;
            getSetIndexFromHandle = module.c;
            getBindingFromHandle = module.d;
            getOffsetFromHandle = module.e;
            customizeType = module.f;
            type2reader = module.t;
            type2writer = module.h;
            getDefaultFromType = module.i;
            overrideMacros = module.o;
            BatchingSchemes = module.B;
            Pass = module.j;
            getDeviceShaderVersion = module.k;
            programLib = module.p;
            SamplerInfoIndex = module.S;
            defaultSamplerHash = module.l;
            genSamplerHash = module.m;
            samplerLib = module.s;
            var _setter = {};
            _setter.BufferAsset = module.n;
            _setter.EffectAsset = module.E;
            _setter.ImageAsset = module.I;
            _setter.JsonAsset = module.J;
            _setter.Material = module.M;
            _setter.RenderTexture = module.v;
            _setter.RenderingSubMesh = module.R;
            _setter.SceneAsset = module.q;
            _setter.TextAsset = module.T;
            _setter.Texture2D = module.r;
            _setter.TextureCube = module.u;
            _setter.builtinResMgr = module.x;
            _setter.effects = module.w;
            exports(_setter);
        }, function (module) {
            RenderQueue = module.R;
            PassStage = module.P;
            nearestPOT = module.n;
            TextureBufferPool = module.T;
        }, function (module) {
            isPropertyPath = module.i;
            isCustomPath = module.a;
            HierarchyPath = module.H;
            ComponentPath = module.C;
            evaluatePath = module.e;
            var _setter = {};
            _setter.AnimCurve = module.g;
            _setter.Animation = module.c;
            _setter.AnimationClip = module.j;
            _setter.AnimationComponent = module.c;
            _setter.AnimationState = module.A;
            _setter.EventInfo = module.E;
            _setter.RatioSampler = module.R;
            _setter.bezier = module.d;
            _setter.bezierByTime = module.f;
            _setter.computeRatioByType = module.h;
            _setter.easing = module.b;
            _setter.getPathFromRoot = module.k;
            _setter.getWorldTransformUntilRoot = module.l;
            _setter.sampleAnimationCurve = module.s;
            exports(_setter);
        }, function (module) {
            var _setter = {};
            _setter.Acceleration = module.A;
            _setter.ForwardFlow = module.d;
            _setter.ForwardPipeline = module.F;
            _setter.ForwardStage = module.e;
            _setter.Game = module.G;
            _setter.InstancedBuffer = module.I;
            _setter.PipelineStateManager = module.P;
            _setter.RenderFlow = module.b;
            _setter.RenderPipeline = module.a;
            _setter.RenderStage = module.c;
            _setter.ResolutionPolicy = module.R;
            _setter.ShadowFlow = module.S;
            _setter.ShadowStage = module.f;
            _setter.Touch = module.T;
            _setter.View = module.V;
            _setter.game = module.g;
            _setter.view = module.v;
            exports(_setter);
        }, function (module) {
            var _setter = {};
            _setter.EventAcceleration = module.b;
            _setter.EventKeyboard = module.c;
            _setter.EventMouse = module.E;
            _setter.EventTouch = module.a;
            _setter.SystemEventType = module.S;
            _setter.eventManager = module.e;
            exports(_setter);
        }, function (module) {
            var _setter = {};
            _setter.SystemEvent = module.S;
            _setter.screen = module.s;
            _setter.systemEvent = module.a;
            exports(_setter);
        }, function (module) {
            var _setter = {};
            _setter.Camera = module.C;
            _setter.CameraComponent = module.C;
            _setter.NodeActivator = module.N;
            _setter.PrivateNode = module.P;
            _setter.Scene = module.S;
            exports(_setter);
        }, function (module) {
            exports('resources', module.r);
        }],
        execute: function () {

            legacyCC.log = log;
            legacyCC.warn = warn;
            legacyCC.error = error;
            legacyCC.assert = assert;
            legacyCC._throw = _throw;
            legacyCC.logID = logID;
            legacyCC.warnID = warnID;
            legacyCC.errorID = errorID;
            legacyCC.assertID = assertID;
            legacyCC.debug = debug;
            legacyCC.path = {
              join: join,
              extname: extname,
              mainFileName: mainFileName,
              basename: basename,
              dirname: dirname,
              changeExtname: changeExtname,
              changeBasename: changeBasename,
              _normalize: _normalize,
              stripSep: stripSep,

              get sep() {
                return getSeperator();
              }

            };

            var _stageOffset = 0;
            var _name2stageID = {};
            var config = {
              addStage: function addStage(name) {
                if (_name2stageID[name] !== undefined) {
                  return;
                }

                var stageID = 1 << _stageOffset;
                _name2stageID[name] = stageID;
                _stageOffset += 1;
              },
              stageID: function stageID(name) {
                var id = _name2stageID[name];

                if (id === undefined) {
                  return -1;
                }

                return id;
              },
              stageIDs: function stageIDs(nameList) {
                var key = 0;

                for (var _iterator = _createForOfIteratorHelperLoose(nameList), _step; !(_step = _iterator()).done;) {
                  var name = _step.value;
                  var id = _name2stageID[name];

                  if (id !== undefined) {
                    key |= id;
                  }
                }

                return key;
              }
            };

            var index = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DeviceInfo: DeviceInfo,
                BindingMappingInfo: BindingMappingInfo,
                TextureInfo: TextureInfo,
                ShaderStage: ShaderStage,
                UniformSampler: UniformSampler,
                UniformBlock: UniformBlock,
                Uniform: Uniform,
                ShaderInfo: ShaderInfo,
                DRAW_INFO_SIZE: DRAW_INFO_SIZE,
                BufferInfo: BufferInfo,
                BufferViewInfo: BufferViewInfo,
                DrawInfo: DrawInfo,
                IndirectBuffer: IndirectBuffer,
                ColorAttachment: ColorAttachment,
                DepthStencilAttachment: DepthStencilAttachment,
                SubPassInfo: SubPassInfo,
                RenderPassInfo: RenderPassInfo,
                SamplerInfo: SamplerInfo,
                DESCRIPTOR_BUFFER_TYPE: DESCRIPTOR_BUFFER_TYPE,
                DESCRIPTOR_SAMPLER_TYPE: DESCRIPTOR_SAMPLER_TYPE,
                DescriptorSetInfo: DescriptorSetInfo,
                DescriptorSetLayoutInfo: DescriptorSetLayoutInfo,
                DescriptorSetLayoutBinding: DescriptorSetLayoutBinding,
                CommandBufferInfo: CommandBufferInfo,
                FramebufferInfo: FramebufferInfo,
                PipelineLayoutInfo: PipelineLayoutInfo,
                FenceInfo: FenceInfo,
                QueueInfo: QueueInfo,
                InputAssemblerInfo: InputAssemblerInfo,
                MAX_ATTACHMENTS: MAX_ATTACHMENTS,
                get ObjectType () { return ObjectType; },
                Obj: Obj,
                get AttributeName () { return AttributeName; },
                get Type () { return Type; },
                get Format () { return Format; },
                get BufferUsageBit () { return BufferUsageBit; },
                get MemoryUsageBit () { return MemoryUsageBit; },
                get BufferFlagBit () { return BufferFlagBit; },
                get BufferAccessBit () { return BufferAccessBit; },
                get PrimitiveMode () { return PrimitiveMode; },
                get PolygonMode () { return PolygonMode; },
                get ShadeModel () { return ShadeModel; },
                get CullMode () { return CullMode; },
                get ComparisonFunc () { return ComparisonFunc; },
                get StencilOp () { return StencilOp; },
                get BlendOp () { return BlendOp; },
                get BlendFactor () { return BlendFactor; },
                get ColorMask () { return ColorMask; },
                get Filter () { return Filter; },
                get Address () { return Address; },
                get TextureType () { return TextureType; },
                get TextureUsageBit () { return TextureUsageBit; },
                get SampleCount () { return SampleCount; },
                get TextureFlagBit () { return TextureFlagBit; },
                get ShaderStageFlagBit () { return ShaderStageFlagBit; },
                get DescriptorType () { return DescriptorType; },
                get CommandBufferType () { return CommandBufferType; },
                get LoadOp () { return LoadOp; },
                get StoreOp () { return StoreOp; },
                get TextureLayout () { return TextureLayout; },
                get PipelineBindPoint () { return PipelineBindPoint; },
                get DynamicStateFlagBit () { return DynamicStateFlagBit; },
                get StencilFace () { return StencilFace; },
                get QueueType () { return QueueType; },
                get ClearFlag () { return ClearFlag; },
                get FormatType () { return FormatType; },
                get API () { return API; },
                get SurfaceTransform () { return SurfaceTransform; },
                get Feature () { return Feature; },
                FormatInfo: FormatInfo,
                MemoryStatus: MemoryStatus,
                FormatInfos: FormatInfos,
                FormatSize: FormatSize,
                FormatSurfaceSize: FormatSurfaceSize,
                GetTypeSize: GetTypeSize,
                getTypedArrayConstructor: getTypedArrayConstructor,
                Rect: Rect,
                Viewport: Viewport,
                Color: Color,
                Offset: Offset,
                Extent: Extent,
                TextureSubres: TextureSubres,
                TextureCopy: TextureCopy,
                BufferTextureCopy: BufferTextureCopy,
                RasterizerState: RasterizerState,
                DepthStencilState: DepthStencilState,
                BlendTarget: BlendTarget,
                BlendState: BlendState,
                PipelineStateInfo: PipelineStateInfo,
                InputState: InputState,
                PipelineState: PipelineState,
                GFX_DESCRIPTOR_BUFFER_TYPE: DESCRIPTOR_BUFFER_TYPE,
                GFX_DESCRIPTOR_SAMPLER_TYPE: DESCRIPTOR_SAMPLER_TYPE,
                GFXDescriptorSetInfo: DescriptorSetInfo,
                GFXDescriptorSet: DescriptorSet,
                GFXDrawInfo: DrawInfo,
                GFX_DRAW_INFO_SIZE: DRAW_INFO_SIZE,
                GFXIndirectBuffer: IndirectBuffer,
                GFXBufferInfo: BufferInfo,
                GFXBufferViewInfo: BufferViewInfo,
                GFXBuffer: Buffer,
                GFXCommandBufferInfo: CommandBufferInfo,
                GFXCommandBuffer: CommandBuffer,
                GFX_MAX_ATTACHMENTS: MAX_ATTACHMENTS,
                get GFXObjectType () { return ObjectType; },
                GFXObject: Obj,
                get GFXAttributeName () { return AttributeName; },
                get GFXType () { return Type; },
                get GFXFormat () { return Format; },
                get GFXBufferUsageBit () { return BufferUsageBit; },
                get GFXMemoryUsageBit () { return MemoryUsageBit; },
                get GFXBufferFlagBit () { return BufferFlagBit; },
                get GFXBufferAccessBit () { return BufferAccessBit; },
                get GFXPrimitiveMode () { return PrimitiveMode; },
                get GFXPolygonMode () { return PolygonMode; },
                get GFXShadeModel () { return ShadeModel; },
                get GFXCullMode () { return CullMode; },
                get GFXComparisonFunc () { return ComparisonFunc; },
                get GFXStencilOp () { return StencilOp; },
                get GFXBlendOp () { return BlendOp; },
                get GFXBlendFactor () { return BlendFactor; },
                get GFXColorMask () { return ColorMask; },
                get GFXFilter () { return Filter; },
                get GFXAddress () { return Address; },
                get GFXTextureType () { return TextureType; },
                get GFXTextureUsageBit () { return TextureUsageBit; },
                get GFXSampleCount () { return SampleCount; },
                get GFXTextureFlagBit () { return TextureFlagBit; },
                get GFXShaderStageFlagBit () { return ShaderStageFlagBit; },
                get GFXDescriptorType () { return DescriptorType; },
                get GFXCommandBufferType () { return CommandBufferType; },
                get GFXLoadOp () { return LoadOp; },
                get GFXStoreOp () { return StoreOp; },
                get GFXTextureLayout () { return TextureLayout; },
                get GFXPipelineBindPoint () { return PipelineBindPoint; },
                get GFXDynamicStateFlagBit () { return DynamicStateFlagBit; },
                get GFXStencilFace () { return StencilFace; },
                get GFXQueueType () { return QueueType; },
                get GFXClearFlag () { return ClearFlag; },
                get GFXFormatType () { return FormatType; },
                get GFXAPI () { return API; },
                get GFXSurfaceTransform () { return SurfaceTransform; },
                get GFXFeature () { return Feature; },
                GFXFormatInfo: FormatInfo,
                GFXMemoryStatus: MemoryStatus,
                GFXFormatInfos: FormatInfos,
                GFXFormatSize: FormatSize,
                GFXFormatSurfaceSize: FormatSurfaceSize,
                GFXRect: Rect,
                GFXViewport: Viewport,
                GFXColor: Color,
                GFXOffset: Offset,
                GFXExtent: Extent,
                GFXTextureSubres: TextureSubres,
                GFXTextureCopy: TextureCopy,
                GFXBufferTextureCopy: BufferTextureCopy,
                GFXBindingMappingInfo: BindingMappingInfo,
                GFXDeviceInfo: DeviceInfo,
                GFXDevice: Device,
                GFXFramebufferInfo: FramebufferInfo,
                GFXFramebuffer: Framebuffer,
                GFXAttribute: Attribute,
                GFXInputAssemblerInfo: InputAssemblerInfo,
                GFXInputAssembler: InputAssembler,
                GFXDescriptorSetLayoutBinding: DescriptorSetLayoutBinding,
                GFXDescriptorSetLayoutInfo: DescriptorSetLayoutInfo,
                GFX_DESCRIPTOR_DYNAMIC_TYPE: DESCRIPTOR_DYNAMIC_TYPE,
                GFXDescriptorSetLayout: DescriptorSetLayout,
                GFXPipelineLayoutInfo: PipelineLayoutInfo,
                GFXPipelineLayout: PipelineLayout,
                GFXRasterizerState: RasterizerState,
                GFXDepthStencilState: DepthStencilState,
                GFXBlendTarget: BlendTarget,
                GFXBlendState: BlendState,
                GFXInputState: InputState,
                GFXPipelineStateInfo: PipelineStateInfo,
                GFXPipelineState: PipelineState,
                GFXFenceInfo: FenceInfo,
                GFXFence: Fence,
                GFXQueueInfo: QueueInfo,
                GFXQueue: Queue,
                GFXColorAttachment: ColorAttachment,
                GFXDepthStencilAttachment: DepthStencilAttachment,
                GFXSubPassInfo: SubPassInfo,
                GFXRenderPassInfo: RenderPassInfo,
                GFXRenderPass: RenderPass,
                GFXSamplerInfo: SamplerInfo,
                GFXSampler: Sampler,
                GFXShaderStage: ShaderStage,
                GFXUniform: Uniform,
                GFXUniformBlock: UniformBlock,
                GFXUniformSampler: UniformSampler,
                GFXShaderInfo: ShaderInfo,
                GFXShader: Shader,
                GFXTextureInfo: TextureInfo,
                GFXTextureViewInfo: TextureViewInfo,
                GFXTexture: Texture,
                TextureViewInfo: TextureViewInfo$1,
                Texture: Texture$1,
                Device: Device$1,
                Shader: Shader$1,
                Attribute: Attribute$1,
                InputAssembler: InputAssembler$1,
                Buffer: Buffer$1,
                Sampler: Sampler$1,
                Fence: Fence$1,
                RenderPass: RenderPass$1,
                Queue: Queue$1,
                PipelineLayout: PipelineLayout$1,
                DescriptorSetLayout: DescriptorSetLayout$1,
                Framebuffer: Framebuffer$1,
                CommandBuffer: CommandBuffer$1
            });
            exports('gfx', index);

            var index$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Pool: Pool,
                RecyclePool: RecyclePool,
                CachedArray: CachedArray
            });
            exports('memop', index$1);

            var index$2 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                Ambient: Ambient,
                get CameraFOVAxis () { return CameraFOVAxis; },
                get CameraProjection () { return CameraProjection; },
                get CameraAperture () { return CameraAperture; },
                get CameraISO () { return CameraISO; },
                get CameraShutter () { return CameraShutter; },
                SKYBOX_FLAG: SKYBOX_FLAG,
                Camera: Camera,
                CameraVisFlags: CameraVisFlags,
                VisibilityFlags: VisibilityFlags,
                DirectionalLight: DirectionalLight,
                ColorTemperatureToRGB: ColorTemperatureToRGB,
                get LightType () { return LightType; },
                nt2lm: nt2lm,
                Light: Light,
                get ModelType () { return ModelType; },
                Model: Model,
                ShadowType: ShadowType,
                PCFType: PCFType,
                Shadows: Shadows,
                RenderScene: RenderScene,
                Skybox: Skybox,
                SphereLight: SphereLight,
                SpotLight: SpotLight,
                SubModel: SubModel
            });

            function createIA(device, data) {
              if (!data.positions) {
                console.error('The data must have positions field');
                return null;
              }

              var verts = [];
              var vcount = data.positions.length / 3;

              for (var i = 0; i < vcount; ++i) {
                verts.push(data.positions[3 * i], data.positions[3 * i + 1], data.positions[3 * i + 2]);

                if (data.normals) {
                  verts.push(data.normals[3 * i], data.normals[3 * i + 1], data.normals[3 * i + 2]);
                }

                if (data.uvs) {
                  verts.push(data.uvs[2 * i], data.uvs[2 * i + 1]);
                }

                if (data.colors) {
                  verts.push(data.colors[3 * i], data.colors[3 * i + 1], data.colors[3 * i + 2]);
                }
              }

              var vfmt = [];
              vfmt.push(new Attribute$1(AttributeName.ATTR_POSITION, Format.RGB32F));

              if (data.normals) {
                vfmt.push(new Attribute$1(AttributeName.ATTR_NORMAL, Format.RGB32F));
              }

              if (data.uvs) {
                vfmt.push(new Attribute$1(AttributeName.ATTR_TEX_COORD, Format.RG32F));
              }

              if (data.colors) {
                vfmt.push(new Attribute$1(AttributeName.ATTR_COLOR, Format.RGB32F));
              }

              var vb = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, verts.length * 4, verts.length * 4 / vcount));
              vb.update(new Float32Array(verts));
              var ib = null;

              if (data.indices) {
                ib = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, data.indices.length * 2, 2));
                ib.update(new Uint16Array(data.indices));
              }

              return device.createInputAssembler(new InputAssemblerInfo(vfmt, [vb], ib));
            }

            var addStage = config.addStage;

            var renderer = /*#__PURE__*/Object.freeze({
                __proto__: null,
                addStage: addStage,
                scene: index$2,
                createIA: createIA,
                get RenderQueue () { return RenderQueue; },
                get PassStage () { return PassStage; },
                get PropertyType () { return PropertyType; },
                genHandle: genHandle,
                getPropertyTypeFromHandle: getPropertyTypeFromHandle,
                getTypeFromHandle: getTypeFromHandle,
                getSetIndexFromHandle: getSetIndexFromHandle,
                getBindingFromHandle: getBindingFromHandle,
                getOffsetFromHandle: getOffsetFromHandle,
                customizeType: customizeType,
                type2reader: type2reader,
                type2writer: type2writer,
                getDefaultFromType: getDefaultFromType,
                overrideMacros: overrideMacros,
                get BatchingSchemes () { return BatchingSchemes; },
                Pass: Pass,
                getDeviceShaderVersion: getDeviceShaderVersion,
                programLib: programLib,
                get SamplerInfoIndex () { return SamplerInfoIndex; },
                defaultSamplerHash: defaultSamplerHash,
                genSamplerHash: genSamplerHash,
                samplerLib: samplerLib,
                nearestPOT: nearestPOT,
                TextureBufferPool: TextureBufferPool,
                MaterialInstance: MaterialInstance,
                PassInstance: PassInstance,
                ObjectPool: ObjectPool,
                freeHandleArray: freeHandleArray,
                get PoolType () { return PoolType; },
                NULL_HANDLE: NULL_HANDLE,
                ShaderPool: ShaderPool,
                DSPool: DSPool,
                IAPool: IAPool,
                PipelineLayoutPool: PipelineLayoutPool,
                FramebufferPool: FramebufferPool,
                SubModelArrayPool: SubModelArrayPool,
                ModelArrayPool: ModelArrayPool,
                AttributeArrayPool: AttributeArrayPool,
                FlatBufferArrayPool: FlatBufferArrayPool,
                LightArrayPool: LightArrayPool,
                BlendTargetArrayPool: BlendTargetArrayPool,
                UIBatchArrayPool: UIBatchArrayPool,
                RawBufferPool: RawBufferPool,
                RawObjectPool: RawObjectPool,
                get PassView () { return PassView; },
                PassPool: PassPool,
                get SubModelView () { return SubModelView; },
                SubModelPool: SubModelPool,
                get ModelView () { return ModelView; },
                ModelPool: ModelPool,
                get BatchView2D () { return BatchView2D; },
                BatchPool2D: BatchPool2D,
                get AABBView () { return AABBView; },
                AABBPool: AABBPool,
                get SceneView () { return SceneView; },
                ScenePool: ScenePool,
                get CameraView () { return CameraView; },
                CameraPool: CameraPool,
                get NodeView () { return NodeView; },
                NodePool: NodePool$1,
                get RootView () { return RootView; },
                RootPool: RootPool,
                get RenderWindowView () { return RenderWindowView; },
                RenderWindowPool: RenderWindowPool,
                get FrustumView () { return FrustumView; },
                FrustumPool: FrustumPool,
                get AmbientView () { return AmbientView; },
                AmbientPool: AmbientPool,
                get SkyboxView () { return SkyboxView; },
                SkyboxPool: SkyboxPool,
                get FogView () { return FogView; },
                FogPool: FogPool,
                get ShadowsView () { return ShadowsView; },
                ShadowsPool: ShadowsPool,
                get LightView () { return LightView; },
                LightPool: LightPool,
                get SphereView () { return SphereView; },
                SpherePool: SpherePool,
                get FlatBufferView () { return FlatBufferView; },
                FlatBufferPool: FlatBufferPool,
                get SubMeshView () { return SubMeshView; },
                SubMeshPool: SubMeshPool,
                get RasterizerStateView () { return RasterizerStateView; },
                RasterizerStatePool: RasterizerStatePool,
                get DepthStencilStateView () { return DepthStencilStateView; },
                DepthStencilStatePool: DepthStencilStatePool,
                get BlendTargetView () { return BlendTargetView; },
                BlendTargetPool: BlendTargetPool,
                get BlendStateView () { return BlendStateView; },
                BlendStatePool: BlendStatePool
            });
            exports('renderer', renderer);

            var animation = /*#__PURE__*/Object.freeze({
                __proto__: null,
                UniformProxyFactory: UniformProxyFactory,
                MorphWeightsValueProxy: MorphWeightsValueProxy,
                MorphWeightsAllValueProxy: MorphWeightsAllValueProxy,
                isPropertyPath: isPropertyPath,
                isCustomPath: isCustomPath,
                HierarchyPath: HierarchyPath,
                ComponentPath: ComponentPath,
                evaluatePath: evaluatePath,
                CubicSplineVec2Value: CubicSplineVec2Value,
                CubicSplineVec3Value: CubicSplineVec3Value,
                CubicSplineVec4Value: CubicSplineVec4Value,
                CubicSplineQuatValue: CubicSplineQuatValue,
                CubicSplineNumberValue: CubicSplineNumberValue
            });
            exports('animation', animation);

            var NodePool = exports('NodePool', function () {
              function NodePool(poolHandlerComp) {
                this.poolHandlerComp = void 0;
                this._pool = void 0;
                this.poolHandlerComp = poolHandlerComp;
                this._pool = [];
              }

              var _proto = NodePool.prototype;

              _proto.size = function size() {
                return this._pool.length;
              };

              _proto.clear = function clear() {
                var count = this._pool.length;

                for (var i = 0; i < count; ++i) {
                  this._pool[i].destroy();
                }

                this._pool.length = 0;
              };

              _proto.put = function put(obj) {
                if (obj && this._pool.indexOf(obj) === -1) {
                  obj.removeFromParent();
                  var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;

                  if (handler && handler.unuse) {
                    handler.unuse();
                  }

                  this._pool.push(obj);
                }
              };

              _proto.get = function get() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                var last = this._pool.length - 1;

                if (last < 0) {
                  return null;
                } else {
                  var obj = this._pool[last];
                  this._pool.length = last;
                  var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;

                  if (handler && handler.reuse) {
                    handler.reuse(arguments);
                  }

                  return obj;
                }
              };

              return NodePool;
            }());
            legacyCC.NodePool = NodePool;

            legacyCC.renderer = renderer;

        }
    };
});
