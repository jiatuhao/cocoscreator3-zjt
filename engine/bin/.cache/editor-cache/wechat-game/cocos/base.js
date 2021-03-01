System.register(["./coordinates-converts-utils-bf8713a9.js","./index-6f89fc06.js","./event-enum-5a5aa40e.js","./deprecated-3.0.0-f3f53c89.js","./renderable-component-658e90bd.js","./texture-buffer-pool-d3259f64.js","./transform-utils-1f4a2037.js","./view-7d20208a.js","./screen-d46ce30a.js","./json-asset-0797cbb7.js","./camera-component-f1234106.js","./find-5191dd26.js","./factory-9595a1ce.js"],(function(e){"use strict";var r,t,o,a,n,i,l,s,u,c,d,p,F,f,m,g,b,S,G,X,h,P,C,y,T,A,v,R,I,B,w,V,_,D,M,E,x,L,O,j,N,H,z,U,k,W,Q,Y,q,J,K,Z,$,ee,re,te,oe,ae,ne,ie,le,se,ue,ce,de,pe,Fe,fe,me,ge,be,Se,Ge,Xe,he,Pe,Ce,ye,Te,Ae,ve,Re,Ie,Be,we,Ve,_e,De,Me,Ee,xe,Le,Oe,je,Ne,He,ze,Ue,ke,We,Qe,Ye,qe,Je,Ke,Ze,$e,er,rr,tr,or,ar,nr,ir,lr,sr,ur,cr,dr,pr,Fr,fr,mr,gr,br,Sr,Gr,Xr,hr,Pr,Cr,yr,Tr,Ar,vr,Rr,Ir,Br,wr,Vr,_r,Dr,Mr,Er,xr,Lr,Or,jr,Nr,Hr,zr,Ur,kr,Wr,Qr,Yr,qr,Jr,Kr;return{setters:[function(sr){r=sr.l,t=sr.a,o=sr.w,a=sr.e,n=sr.b,i=sr._,l=sr.c,s=sr.d,u=sr.f,c=sr.g,d=sr.h,p=sr.j,F=sr.i,f=sr.m,m=sr.k,g=sr.n,b=sr.o,S=sr.p,G=sr.q,X=sr.s,h=sr.r,sr.t,P=sr.P,C=sr.R,y=sr.C,T=sr.A,A=sr.u,v=sr.F,R=sr.B,I=sr.v,B=sr.M,w=sr.I,V=sr.x,_=sr.y,D=sr.z,M=sr.D,E=sr.E,x=sr.G,L=sr.H,O=sr.J,j=sr.K,N=sr.L,H=sr.N,z=sr.O,U=sr.Q,k=sr.S,W=sr.T,Q=sr.U,Y=sr.V,q=sr.W,J=sr.X,K=sr.Y,Z=sr.Z,$=sr.$,ee=sr.a0,re=sr.a1,te=sr.a2,oe=sr.a3,ae=sr.a4,ne=sr.a5,ie=sr.a6,le=sr.a7,se=sr.a8,ue=sr.a9,ce=sr.aa,de=sr.ab,pe=sr.ac,Fe=sr.ad,fe=sr.ae,me=sr.af,ge=sr.ag,be=sr.ah,Se=sr.ai,Ge=sr.aj,Xe=sr.ak,he=sr.al,Pe=sr.am,Ce=sr.an,ye=sr.ao,Te=sr.ap,Ae=sr.aq,ve=sr.ar,Re=sr.as,Ie=sr.at,Be=sr.au,we=sr.av,Ve=sr.aw,_e=sr.ax,De=sr.ay,Me=sr.az,Ee=sr.aA,xe=sr.aB,Le=sr.aC,Oe=sr.aD,je=sr.aE,Ne=sr.aF,He=sr.aG,ze=sr.aH,Ue=sr.aI,ke=sr.aJ,We=sr.aK,Qe=sr.aL,Ye=sr.aM,qe=sr.aN,Je=sr.aO,Ke=sr.aP,Ze=sr.aQ,$e=sr.aR,er=sr.aS,rr=sr.aT,tr=sr.aU,or=sr.aV,ar=sr.aW,nr=sr.aX,ir=sr.aY,lr=sr.aZ;var ur={};ur.AffineTransform=sr.bb,ur.Asset=sr.c5,ur.BitMask=sr.bC,ur.CCBoolean=sr.b$,ur.CCClass=sr.bT,ur.CCFloat=sr.b_,ur.CCInteger=sr.bZ,ur.CCObject=sr.bU,ur.CCString=sr.c0,ur.CachedArray=sr.C,ur.Color=sr.bg,ur.CompactValueTypeArray=sr.c1,ur.Component=sr.d_,ur.DebugMode=sr.cj,ur.Details=sr.bX,ur.EPSILON=sr.bi,ur.EffectAsset=sr.ca,ur.Enum=sr.bD,ur.Event=sr.c2,ur.EventTarget=sr.c3,ur.Eventify=sr.c4,ur.GFXAPI=sr.d2,ur.GFXAddress=sr.cN,ur.GFXAttribute=sr.A,ur.GFXAttributeName=sr.u,ur.GFXBindingMappingInfo=sr.di,ur.GFXBlendFactor=sr.cK,ur.GFXBlendOp=sr.cJ,ur.GFXBlendState=sr.dy,ur.GFXBlendTarget=sr.dx,ur.GFXBuffer=sr.cu,ur.GFXBufferAccessBit=sr.cC,ur.GFXBufferFlagBit=sr.cB,ur.GFXBufferInfo=sr.B,ur.GFXBufferTextureCopy=sr.dh,ur.GFXBufferUsageBit=sr.v,ur.GFXBufferViewInfo=sr.ct,ur.GFXClearFlag=sr.d0,ur.GFXColor=sr.dc,ur.GFXColorAttachment=sr.dG,ur.GFXColorMask=sr.cL,ur.GFXCommandBuffer=sr.cw,ur.GFXCommandBufferInfo=sr.cv,ur.GFXCommandBufferType=sr.cU,ur.GFXComparisonFunc=sr.cH,ur.GFXCullMode=sr.cG,ur.GFXDepthStencilAttachment=sr.dH,ur.GFXDepthStencilState=sr.dw,ur.GFXDescriptorSet=sr.cp,ur.GFXDescriptorSetInfo=sr.co,ur.GFXDescriptorSetLayout=sr.ds,ur.GFXDescriptorSetLayoutBinding=sr.dp,ur.GFXDescriptorSetLayoutInfo=sr.dq,ur.GFXDescriptorType=sr.cT,ur.GFXDevice=sr.dk,ur.GFXDeviceInfo=sr.dj,ur.GFXDrawInfo=sr.cq,ur.GFXDynamicStateFlagBit=sr.cZ,ur.GFXExtent=sr.de,ur.GFXFeature=sr.d4,ur.GFXFence=sr.dD,ur.GFXFenceInfo=sr.dC,ur.GFXFilter=sr.cM,ur.GFXFormat=sr.F,ur.GFXFormatInfo=sr.d5,ur.GFXFormatInfos=sr.d7,ur.GFXFormatSize=sr.d8,ur.GFXFormatSurfaceSize=sr.d9,ur.GFXFormatType=sr.d1,ur.GFXFramebuffer=sr.dm,ur.GFXFramebufferInfo=sr.dl,ur.GFXIndirectBuffer=sr.cs,ur.GFXInputAssembler=sr.dn,ur.GFXInputAssemblerInfo=sr.I,ur.GFXInputState=sr.dz,ur.GFXLoadOp=sr.cV,ur.GFXMemoryStatus=sr.d6,ur.GFXMemoryUsageBit=sr.M,ur.GFXObject=sr.cz,ur.GFXObjectType=sr.cy,ur.GFXOffset=sr.dd,ur.GFXPipelineBindPoint=sr.cY,ur.GFXPipelineLayout=sr.du,ur.GFXPipelineLayoutInfo=sr.dt,ur.GFXPipelineState=sr.dB,ur.GFXPipelineStateInfo=sr.dA,ur.GFXPolygonMode=sr.cE,ur.GFXPrimitiveMode=sr.cD,ur.GFXQueue=sr.dF,ur.GFXQueueInfo=sr.dE,ur.GFXQueueType=sr.c$,ur.GFXRasterizerState=sr.dv,ur.GFXRect=sr.da,ur.GFXRenderPass=sr.dK,ur.GFXRenderPassInfo=sr.dJ,ur.GFXSampleCount=sr.cQ,ur.GFXSampler=sr.dM,ur.GFXSamplerInfo=sr.dL,ur.GFXShadeModel=sr.cF,ur.GFXShader=sr.dS,ur.GFXShaderInfo=sr.dR,ur.GFXShaderStage=sr.dN,ur.GFXShaderStageFlagBit=sr.cS,ur.GFXStencilFace=sr.c_,ur.GFXStencilOp=sr.cI,ur.GFXStoreOp=sr.cW,ur.GFXSubPassInfo=sr.dI,ur.GFXSurfaceTransform=sr.d3,ur.GFXTexture=sr.dV,ur.GFXTextureCopy=sr.dg,ur.GFXTextureFlagBit=sr.cR,ur.GFXTextureInfo=sr.dT,ur.GFXTextureLayout=sr.cX,ur.GFXTextureSubres=sr.df,ur.GFXTextureType=sr.cO,ur.GFXTextureUsageBit=sr.cP,ur.GFXTextureViewInfo=sr.dU,ur.GFXType=sr.cA,ur.GFXUniform=sr.dO,ur.GFXUniformBlock=sr.dP,ur.GFXUniformSampler=sr.dQ,ur.GFXViewport=sr.db,ur.GFX_DESCRIPTOR_BUFFER_TYPE=sr.cm,ur.GFX_DESCRIPTOR_DYNAMIC_TYPE=sr.dr,ur.GFX_DESCRIPTOR_SAMPLER_TYPE=sr.cn,ur.GFX_DRAW_INFO_SIZE=sr.cr,ur.GFX_MAX_ATTACHMENTS=sr.cx,ur.ImageAsset=sr.c7,ur.JavaScript=sr.ce,ur.Layers=sr.dY,ur.Mat3=sr.b8,ur.Mat4=sr.b9,ur.Material=sr.cb,ur.MissingScript=sr.dZ,ur.Pool=sr.P,ur.Prefab=sr.c6,ur.PrefabLink=sr.bJ,ur.Quat=sr.b6,ur.Rect=sr.be,ur.RecyclePool=sr.R,ur.RenderTexture=sr.cc,ur.Script=sr.cd,ur.Size=sr.bc,ur.Texture2D=sr.c8,ur.TextureCube=sr.c9,ur.TypeScript=sr.cf,ur.ValueType=sr.bF,ur.Vec2=sr.b0,ur.Vec3=sr.b2,ur.Vec4=sr.b4,ur.WorldNode3DToLocalNodeUI=sr.bP,ur.WorldNode3DToWorldNodeUI=sr.bQ,ur._decorator=sr.bS,ur.absMax=sr.bB,ur.absMaxComponent=sr.bA,ur.approx=sr.bk,ur.assert=sr.b,ur.assertID=sr.g,ur.bits=sr.a$,ur.builtinResMgr=sr.e0,ur.ccenum=sr.bE,ur.cclegacy=sr.l,ur.clamp=sr.bl,ur.clamp01=sr.bm,ur.color=sr.bh,ur.convertUtils=sr.bR,ur.deserialize=sr.bW,ur.effects=sr.d$,ur.equals=sr.bj,ur.error=sr.e,ur.errorID=sr.f,ur.getError=sr.ci,ur.getPhaseID=sr.dX,ur.gfx=sr.a_,ur.instantiate=sr.bY,ur.inverseLerp=sr.bz,ur.isDisplayStats=sr.cg,ur.isValid=sr.bV,ur.js=sr.bG,ur.lerp=sr.bn,ur.log=sr.a,ur.logID=sr.c,ur.macro=sr.cl,ur.markAsWarning=sr.bN,ur.mat4=sr.ba,ur.misc=sr.bH,ur.murmurhash2_32_gc=sr.bO,ur.nextPow2=sr.bw,ur.path=sr.bI,ur.pingPong=sr.by,ur.pipeline=sr.dW,ur.pseudoRandom=sr.bt,ur.pseudoRandomRange=sr.bu,ur.pseudoRandomRangeInt=sr.bv,ur.quat=sr.b7,ur.random=sr.bq,ur.randomRange=sr.br,ur.randomRangeInt=sr.bs,ur.rect=sr.bf,ur.removeProperty=sr.bM,ur.repeat=sr.bx,ur.replaceProperty=sr.bL,ur.setDefaultLogTimes=sr.bK,ur.setDisplayStats=sr.ch,ur.size=sr.bd,ur.sys=sr.ck,ur.toDegree=sr.bp,ur.toRadian=sr.bo,ur.v2=sr.b1,ur.v3=sr.b3,ur.v4=sr.b5,ur.warn=sr.w,ur.warnID=sr.d,e(ur)},function(r){sr=r.U,ur=r.M,cr=r.a,dr=r.C,pr=r.b,Fr=r.c,fr=r.d,mr=r.e;var t={};t.AnimationManager=r.t,t.AssetLibrary=r.j,t.AssetManager=r.A,t.CCLoader=r.i,t.ComponentModifier=r.n,t.CubicSplineNumberValue=r.e,t.CubicSplineQuatValue=r.d,t.CubicSplineVec2Value=r.C,t.CubicSplineVec3Value=r.b,t.CubicSplineVec4Value=r.c,t.CurveValueAdapter=r.o,t.Director=r.D,t.EventHandler=r.E,t.HierachyModifier=r.H,t.Scheduler=r.S,t.System=r.k,t.UniformCurveValueAdapter=r.p,t.assetManager=r.h,t.director=r.f,t.geometry=r.g,t.isCustomTargetModifier=r.s,t.isElementModifier=r.r,t.isPropertyModifier=r.q,t.loader=r.l,t.math=r.m,t.url=r.u,e(t)},function(r){gr=r.A,br=r.C,Sr=r.a,Gr=r.b,Xr=r.c,hr=r.d,Pr=r.S,Cr=r.e,yr=r.f,Tr=r.L,Ar=r.n,vr=r.g,Rr=r.h,Ir=r.P,Br=r.i,wr=r.j,Vr=r.M,_r=r.k;var t={};t.EventAcceleration=r.o,t.EventKeyboard=r.p,t.EventMouse=r.E,t.EventTouch=r.m,t.InstancedBuffer=r.I,t.SystemEventType=r.q,t.eventManager=r.l,e(t)},function(){},function(r){Dr=r.C,Mr=r.V,Er=r.D,xr=r.M,Lr=r.a,Or=r.R,jr=r.S,Nr=r.b,Hr=r.c;var t={};t.BaseNode=r.B,t.Node=r.N,t.RenderableComponent=r.d,e(t)},function(e){zr=e.R,Ur=e.P,kr=e.n,Wr=e.T},function(r){Qr=r.i,Yr=r.a,qr=r.H,Jr=r.C,Kr=r.e;var t={};t.AnimCurve=r.g,t.Animation=r.c,t.AnimationClip=r.j,t.AnimationComponent=r.c,t.AnimationState=r.A,t.EventInfo=r.E,t.RatioSampler=r.R,t.bezier=r.d,t.bezierByTime=r.f,t.computeRatioByType=r.h,t.easing=r.b,t.getPathFromRoot=r.k,t.getWorldTransformUntilRoot=r.l,t.sampleAnimationCurve=r.s,e(t)},function(r){var t={};t.Acceleration=r.A,t.ForwardFlow=r.d,t.ForwardPipeline=r.F,t.ForwardStage=r.e,t.Game=r.G,t.PipelineStateManager=r.P,t.RenderFlow=r.b,t.RenderPipeline=r.a,t.RenderStage=r.c,t.ResolutionPolicy=r.R,t.ShadowFlow=r.S,t.ShadowStage=r.f,t.Touch=r.T,t.View=r.V,t.game=r.g,t.view=r.v,e(t)},function(r){var t={};t.SystemEvent=r.S,t.screen=r.s,t.systemEvent=r.a,e(t)},function(r){var t={};t.BufferAsset=r.B,t.JsonAsset=r.J,t.RenderingSubMesh=r.R,t.SceneAsset=r.S,t.TextAsset=r.T,e(t)},function(r){var t={};t.Camera=r.C,t.CameraComponent=r.C,t.NodeActivator=r.N,t.PrivateNode=r.P,t.Scene=r.S,e(t)},function(r){e("find",r.f)},function(r){e("resources",r.r)}],execute:function(){r.log=t,r.warn=o,r.error=a,r.assert=n,r._throw=i,r.logID=l,r.warnID=s,r.errorID=u,r.assertID=c,r.debug=d,r.path={join:p,extname:F,mainFileName:f,basename:m,dirname:g,changeExtname:b,changeBasename:S,_normalize:G,stripSep:X,get sep(){return h()}};var Zr=0,$r={};e("memop",Object.freeze({__proto__:null,Pool:P,RecyclePool:C,CachedArray:y}));var et=Object.freeze({__proto__:null,Ambient:gr,get CameraFOVAxis(){return br},get CameraProjection(){return Sr},get CameraAperture(){return Gr},get CameraISO(){return Xr},get CameraShutter(){return hr},SKYBOX_FLAG:Pr,Camera:Cr,CameraVisFlags:Dr,VisibilityFlags:Mr,DirectionalLight:Er,ColorTemperatureToRGB:yr,get LightType(){return Tr},nt2lm:Ar,Light:vr,get ModelType(){return xr},Model:Lr,ShadowType:Rr,PCFType:Ir,Shadows:Br,RenderScene:Or,Skybox:wr,SphereLight:jr,SpotLight:Nr,SubModel:Hr}),rt=function(e){if(void 0===$r[e]){var r=1<<Zr;$r[e]=r,Zr+=1}},tt=Object.freeze({__proto__:null,addStage:rt,scene:et,createIA:function(e,r){if(!r.positions)return console.error("The data must have positions field"),null;for(var t=[],o=r.positions.length/3,a=0;a<o;++a)t.push(r.positions[3*a],r.positions[3*a+1],r.positions[3*a+2]),r.normals&&t.push(r.normals[3*a],r.normals[3*a+1],r.normals[3*a+2]),r.uvs&&t.push(r.uvs[2*a],r.uvs[2*a+1]),r.colors&&t.push(r.colors[3*a],r.colors[3*a+1],r.colors[3*a+2]);var n=[];n.push(new T(A.ATTR_POSITION,v.RGB32F)),r.normals&&n.push(new T(A.ATTR_NORMAL,v.RGB32F)),r.uvs&&n.push(new T(A.ATTR_TEX_COORD,v.RG32F)),r.colors&&n.push(new T(A.ATTR_COLOR,v.RGB32F));var i=e.createBuffer(new R(I.VERTEX|I.TRANSFER_DST,B.HOST|B.DEVICE,4*t.length,4*t.length/o));i.update(new Float32Array(t));var l=null;return r.indices&&(l=e.createBuffer(new R(I.INDEX|I.TRANSFER_DST,B.HOST|B.DEVICE,2*r.indices.length,2))).update(new Uint16Array(r.indices)),e.createInputAssembler(new w(n,[i],l))},get RenderQueue(){return zr},get PassStage(){return Ur},get PropertyType(){return V},genHandle:_,getPropertyTypeFromHandle:D,getTypeFromHandle:M,getSetIndexFromHandle:E,getBindingFromHandle:x,getOffsetFromHandle:L,customizeType:O,type2reader:j,type2writer:N,getDefaultFromType:H,overrideMacros:z,get BatchingSchemes(){return U},Pass:k,getDeviceShaderVersion:W,programLib:Q,get SamplerInfoIndex(){return Y},defaultSamplerHash:q,genSamplerHash:J,samplerLib:K,nearestPOT:kr,TextureBufferPool:Wr,MaterialInstance:Vr,PassInstance:_r,ObjectPool:Z,freeHandleArray:$,get PoolType(){return ee},NULL_HANDLE:re,ShaderPool:te,DSPool:oe,IAPool:ae,PipelineLayoutPool:ne,FramebufferPool:ie,SubModelArrayPool:le,ModelArrayPool:se,AttributeArrayPool:ue,FlatBufferArrayPool:ce,LightArrayPool:de,BlendTargetArrayPool:pe,UIBatchArrayPool:Fe,RawBufferPool:fe,RawObjectPool:me,get PassView(){return ge},PassPool:be,get SubModelView(){return Se},SubModelPool:Ge,get ModelView(){return Xe},ModelPool:he,get BatchView2D(){return Pe},BatchPool2D:Ce,get AABBView(){return ye},AABBPool:Te,get SceneView(){return Ae},ScenePool:ve,get CameraView(){return Re},CameraPool:Ie,get NodeView(){return Be},NodePool:we,get RootView(){return Ve},RootPool:_e,get RenderWindowView(){return De},RenderWindowPool:Me,get FrustumView(){return Ee},FrustumPool:xe,get AmbientView(){return Le},AmbientPool:Oe,get SkyboxView(){return je},SkyboxPool:Ne,get FogView(){return He},FogPool:ze,get ShadowsView(){return Ue},ShadowsPool:ke,get LightView(){return We},LightPool:Qe,get SphereView(){return Ye},SpherePool:qe,get FlatBufferView(){return Je},FlatBufferPool:Ke,get SubMeshView(){return Ze},SubMeshPool:$e,get RasterizerStateView(){return er},RasterizerStatePool:rr,get DepthStencilStateView(){return tr},DepthStencilStatePool:or,get BlendTargetView(){return ar},BlendTargetPool:nr,get BlendStateView(){return ir},BlendStatePool:lr});e("renderer",tt),e("animation",Object.freeze({__proto__:null,UniformProxyFactory:sr,MorphWeightsValueProxy:ur,MorphWeightsAllValueProxy:cr,isPropertyPath:Qr,isCustomPath:Yr,HierarchyPath:qr,ComponentPath:Jr,evaluatePath:Kr,CubicSplineVec2Value:dr,CubicSplineVec3Value:pr,CubicSplineVec4Value:Fr,CubicSplineQuatValue:fr,CubicSplineNumberValue:mr}));var ot=e("NodePool",function(){function e(e){this.poolHandlerComp=void 0,this._pool=void 0,this.poolHandlerComp=e,this._pool=[]}var r=e.prototype;return r.size=function(){return this._pool.length},r.clear=function(){for(var e=this._pool.length,r=0;r<e;++r)this._pool[r].destroy();this._pool.length=0},r.put=function(e){if(e&&-1===this._pool.indexOf(e)){e.removeFromParent();var r=this.poolHandlerComp?e.getComponent(this.poolHandlerComp):null;r&&r.unuse&&r.unuse(),this._pool.push(e)}},r.get=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=this._pool.length-1;if(o<0)return null;var a=this._pool[o];this._pool.length=o;var n=this.poolHandlerComp?a.getComponent(this.poolHandlerComp):null;return n&&n.reuse&&n.reuse(arguments),a},e}());r.NodePool=ot,r.renderer=tt}}}));
