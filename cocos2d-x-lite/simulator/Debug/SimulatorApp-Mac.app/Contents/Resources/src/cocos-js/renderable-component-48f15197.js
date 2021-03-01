System.register(['./coordinates-converts-utils-66b3c6fc.js', './find-2b085df6.js', './json-asset-a4190905.js', './event-enum-a28dcb7d.js'], function (exports) {
    'use strict';
    var _createClass, Color, NULL_HANDLE, AmbientPool, Vec3, AmbientView, legacyCC, Mat4, ClearFlag, CameraPool, CameraView, CAMERA_DEFAULT_MASK, FrustumPool, SurfaceTransform, preTransforms, lerp, toRadian, Color$1, Rect, ModelArrayPool, ScenePool, LightArrayPool, UIBatchArrayPool, _createForOfIteratorHelperLoose, SceneView, removeProperty, replaceProperty, Layers, LightPool, LightView, _inheritsLoose, Vec4, SubModelPool, DSPool, IAPool, SubModelView, RenderPriority, DescriptorSetInfo, UNIFORM_LIGHTMAP_TEXTURE_BINDING, BufferInfo, BufferUsageBit, MemoryUsageBit, Attribute, InputAssemblerInfo, ObjectPool, PoolType, Pool, Filter, Address, UBOLocal, ModelPool, SubModelArrayPool, AttributeArrayPool, ModelView, RawBufferPool, freeHandleArray, AABBPool, AABBView, ShaderPool, Feature, FormatInfos, getTypedArrayConstructor, INST_MAT_WORLD, Enum, Vec2, ShadowsPool, ShadowsView, _assertThisInitialized, PassPool, PassView, SkyboxPool, SkyboxView, UNIFORM_ENVIRONMENT_BINDING, Quat, warnID, CCObject, get, ccclass, error, _initializerDefineProperty, mixin, errorID, log, getClassByName, getError, isChildClassOf, Component, EDITOR, _applyDecoratedDescriptor, property, editable, IDGenerator, serializable, Mat3, type, NodePool, NodeView, createNodeWithPrefab, generateTargetMap, applyMountedChildren, applyPropertyOverrides, applyTargetOverrides, displayOrder, displayName, recordFrustumToSharedMemory, Ray, Frustum, AABB, Sphere, Pass, BatchingSchemes, genSamplerHash, builtinResMgr, samplerLib, Material, overrideMacros, SystemEventType, eventManager;
    return {
        setters: [function (module) {
            _createClass = module.dS;
            Color = module.cL;
            NULL_HANDLE = module.bx;
            AmbientPool = module.c7;
            Vec3 = module.cx;
            AmbientView = module.c6;
            legacyCC = module.l;
            Mat4 = module.cE;
            ClearFlag = module.aw;
            CameraPool = module.bZ;
            CameraView = module.bY;
            CAMERA_DEFAULT_MASK = module.eP;
            FrustumPool = module.c5;
            SurfaceTransform = module.az;
            preTransforms = module.en;
            lerp = module.cS;
            toRadian = module.cT;
            Color$1 = module.aK;
            Rect = module.cJ;
            ModelArrayPool = module.bE;
            ScenePool = module.bX;
            LightArrayPool = module.bH;
            UIBatchArrayPool = module.bJ;
            _createForOfIteratorHelperLoose = module.t;
            SceneView = module.bW;
            removeProperty = module.df;
            replaceProperty = module.de;
            Layers = module.dM;
            LightPool = module.cf;
            LightView = module.ce;
            _inheritsLoose = module.dR;
            Vec4 = module.cz;
            SubModelPool = module.bP;
            DSPool = module.bz;
            IAPool = module.bA;
            SubModelView = module.bO;
            RenderPriority = module.e9;
            DescriptorSetInfo = module.L;
            UNIFORM_LIGHTMAP_TEXTURE_BINDING = module.eQ;
            BufferInfo = module.z;
            BufferUsageBit = module.a3;
            MemoryUsageBit = module.a4;
            Attribute = module.bg;
            InputAssemblerInfo = module.X;
            ObjectPool = module.bu;
            PoolType = module.bw;
            Pool = module.br;
            Filter = module.ag;
            Address = module.ah;
            UBOLocal = module.eR;
            ModelPool = module.bR;
            SubModelArrayPool = module.bD;
            AttributeArrayPool = module.bF;
            ModelView = module.bQ;
            RawBufferPool = module.bK;
            freeHandleArray = module.bv;
            AABBPool = module.bV;
            AABBView = module.bU;
            ShaderPool = module.by;
            Feature = module.aA;
            FormatInfos = module.aD;
            getTypedArrayConstructor = module.aH;
            INST_MAT_WORLD = module.eS;
            Enum = module.d6;
            Vec2 = module.cv;
            ShadowsPool = module.cd;
            ShadowsView = module.cc;
            _assertThisInitialized = module.dV;
            PassPool = module.bN;
            PassView = module.bM;
            SkyboxPool = module.c9;
            SkyboxView = module.c8;
            UNIFORM_ENVIRONMENT_BINDING = module.eT;
            Quat = module.cB;
            warnID = module.d;
            CCObject = module.dn;
            get = module.eU;
            ccclass = module.dQ;
            error = module.e;
            _initializerDefineProperty = module.dU;
            mixin = module.ex;
            errorID = module.f;
            log = module.a;
            getClassByName = module.eV;
            getError = module.dI;
            isChildClassOf = module.eW;
            Component = module.dO;
            EDITOR = module.eh;
            _applyDecoratedDescriptor = module.dT;
            property = module.dP;
            editable = module.ec;
            IDGenerator = module.dW;
            serializable = module.dX;
            Mat3 = module.cD;
            type = module.e5;
            NodePool = module.b$;
            NodeView = module.b_;
            createNodeWithPrefab = module.eX;
            generateTargetMap = module.eY;
            applyMountedChildren = module.eZ;
            applyPropertyOverrides = module.e_;
            applyTargetOverrides = module.e$;
            displayOrder = module.f0;
            displayName = module.f1;
        }, function (module) {
            recordFrustumToSharedMemory = module.h;
            Ray = module.R;
            Frustum = module.F;
            AABB = module.A;
            Sphere = module.S;
        }, function (module) {
            Pass = module.j;
            BatchingSchemes = module.B;
            genSamplerHash = module.m;
            builtinResMgr = module.x;
            samplerLib = module.s;
            Material = module.M;
            overrideMacros = module.o;
        }, function (module) {
            SystemEventType = module.S;
            eventManager = module.e;
        }],
        execute: function () {

            exports({
                C: void 0,
                L: void 0,
                M: void 0,
                T: void 0,
                a: void 0,
                b: void 0,
                c: void 0,
                d: void 0,
                g: ColorTemperatureToRGB
            });

            var Ambient = exports('A', function () {
              _createClass(Ambient, [{
                key: "colorArray",
                get: function get() {
                  return this._colorArray;
                }
              }, {
                key: "albedoArray",
                get: function get() {
                  return this._albedoArray;
                }
              }, {
                key: "enabled",
                set: function set(val) {
                  AmbientPool.set(this._handle, AmbientView.ENABLE, val ? 1 : 0);
                },
                get: function get() {
                  return AmbientPool.get(this._handle, AmbientView.ENABLE);
                }
              }, {
                key: "skyColor",
                get: function get() {
                  return this._skyColor;
                },
                set: function set(color) {
                  this._skyColor.set(color);

                  Color.toArray(this._colorArray, this._skyColor);
                  AmbientPool.setVec4(this._handle, AmbientView.SKY_COLOR, this._skyColor);
                }
              }, {
                key: "skyIllum",
                get: function get() {
                  return AmbientPool.get(this._handle, AmbientView.ILLUM);
                },
                set: function set(illum) {
                  AmbientPool.set(this._handle, AmbientView.ILLUM, illum);
                }
              }, {
                key: "groundAlbedo",
                get: function get() {
                  return this._groundAlbedo;
                },
                set: function set(color) {
                  this._groundAlbedo.set(color);

                  Vec3.toArray(this._albedoArray, this._groundAlbedo);
                  AmbientPool.setVec4(this._handle, AmbientView.GROUND_ALBEDO, this._groundAlbedo);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._handle;
                }
              }]);

              function Ambient() {
                this._skyColor = new Color(51, 128, 204, 1.0);
                this._groundAlbedo = new Color(51, 51, 51, 255);
                this._albedoArray = Float32Array.from([0.2, 0.2, 0.2, 1.0]);
                this._colorArray = Float32Array.from([0.2, 0.5, 0.8, 1.0]);
                this._handle = NULL_HANDLE;
                this._handle = AmbientPool.alloc();
              }

              var _proto = Ambient.prototype;

              _proto.initialize = function initialize(ambientInfo) {
                this._skyColor.set(ambientInfo.skyColor);

                this._groundAlbedo.set(ambientInfo.groundAlbedo);

                Color.toArray(this._colorArray, this._skyColor);
                Vec3.toArray(this._albedoArray, this._groundAlbedo);
                AmbientPool.setVec4(this._handle, AmbientView.SKY_COLOR, this._skyColor);
                AmbientPool.setVec4(this._handle, AmbientView.GROUND_ALBEDO, this._groundAlbedo);
                AmbientPool.set(this._handle, AmbientView.ILLUM, ambientInfo.skyIllum);
              };

              _proto.destroy = function destroy() {
                if (this._handle) {
                  AmbientPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }
              };

              return Ambient;
            }());
            Ambient.SUN_ILLUM = 65000.0;
            Ambient.SKY_ILLUM = 20000.0;
            legacyCC.Ambient = Ambient;

            var CameraFOVAxis;

            (function (CameraFOVAxis) {
              CameraFOVAxis[CameraFOVAxis["VERTICAL"] = 0] = "VERTICAL";
              CameraFOVAxis[CameraFOVAxis["HORIZONTAL"] = 1] = "HORIZONTAL";
            })(CameraFOVAxis || (CameraFOVAxis = exports('C', {})));

            var CameraProjection;

            (function (CameraProjection) {
              CameraProjection[CameraProjection["ORTHO"] = 0] = "ORTHO";
              CameraProjection[CameraProjection["PERSPECTIVE"] = 1] = "PERSPECTIVE";
            })(CameraProjection || (CameraProjection = exports('a', {})));

            var CameraAperture;

            (function (CameraAperture) {
              CameraAperture[CameraAperture["F1_8"] = 0] = "F1_8";
              CameraAperture[CameraAperture["F2_0"] = 1] = "F2_0";
              CameraAperture[CameraAperture["F2_2"] = 2] = "F2_2";
              CameraAperture[CameraAperture["F2_5"] = 3] = "F2_5";
              CameraAperture[CameraAperture["F2_8"] = 4] = "F2_8";
              CameraAperture[CameraAperture["F3_2"] = 5] = "F3_2";
              CameraAperture[CameraAperture["F3_5"] = 6] = "F3_5";
              CameraAperture[CameraAperture["F4_0"] = 7] = "F4_0";
              CameraAperture[CameraAperture["F4_5"] = 8] = "F4_5";
              CameraAperture[CameraAperture["F5_0"] = 9] = "F5_0";
              CameraAperture[CameraAperture["F5_6"] = 10] = "F5_6";
              CameraAperture[CameraAperture["F6_3"] = 11] = "F6_3";
              CameraAperture[CameraAperture["F7_1"] = 12] = "F7_1";
              CameraAperture[CameraAperture["F8_0"] = 13] = "F8_0";
              CameraAperture[CameraAperture["F9_0"] = 14] = "F9_0";
              CameraAperture[CameraAperture["F10_0"] = 15] = "F10_0";
              CameraAperture[CameraAperture["F11_0"] = 16] = "F11_0";
              CameraAperture[CameraAperture["F13_0"] = 17] = "F13_0";
              CameraAperture[CameraAperture["F14_0"] = 18] = "F14_0";
              CameraAperture[CameraAperture["F16_0"] = 19] = "F16_0";
              CameraAperture[CameraAperture["F18_0"] = 20] = "F18_0";
              CameraAperture[CameraAperture["F20_0"] = 21] = "F20_0";
              CameraAperture[CameraAperture["F22_0"] = 22] = "F22_0";
            })(CameraAperture || (CameraAperture = exports('b', {})));

            var CameraISO;

            (function (CameraISO) {
              CameraISO[CameraISO["ISO100"] = 0] = "ISO100";
              CameraISO[CameraISO["ISO200"] = 1] = "ISO200";
              CameraISO[CameraISO["ISO400"] = 2] = "ISO400";
              CameraISO[CameraISO["ISO800"] = 3] = "ISO800";
            })(CameraISO || (CameraISO = exports('c', {})));

            var CameraShutter;

            (function (CameraShutter) {
              CameraShutter[CameraShutter["D1"] = 0] = "D1";
              CameraShutter[CameraShutter["D2"] = 1] = "D2";
              CameraShutter[CameraShutter["D4"] = 2] = "D4";
              CameraShutter[CameraShutter["D8"] = 3] = "D8";
              CameraShutter[CameraShutter["D15"] = 4] = "D15";
              CameraShutter[CameraShutter["D30"] = 5] = "D30";
              CameraShutter[CameraShutter["D60"] = 6] = "D60";
              CameraShutter[CameraShutter["D125"] = 7] = "D125";
              CameraShutter[CameraShutter["D250"] = 8] = "D250";
              CameraShutter[CameraShutter["D500"] = 9] = "D500";
              CameraShutter[CameraShutter["D1000"] = 10] = "D1000";
              CameraShutter[CameraShutter["D2000"] = 11] = "D2000";
              CameraShutter[CameraShutter["D4000"] = 12] = "D4000";
            })(CameraShutter || (CameraShutter = exports('d', {})));

            var FSTOPS = [1.8, 2.0, 2.2, 2.5, 2.8, 3.2, 3.5, 4.0, 4.5, 5.0, 5.6, 6.3, 7.1, 8.0, 9.0, 10.0, 11.0, 13.0, 14.0, 16.0, 18.0, 20.0, 22.0];
            var SHUTTERS = [1.0, 1.0 / 2.0, 1.0 / 4.0, 1.0 / 8.0, 1.0 / 15.0, 1.0 / 30.0, 1.0 / 60.0, 1.0 / 125.0, 1.0 / 250.0, 1.0 / 500.0, 1.0 / 1000.0, 1.0 / 2000.0, 1.0 / 4000.0];
            var ISOS = [100.0, 200.0, 400.0, 800.0];
            var v_a = new Vec3();
            var v_b = new Vec3();

            var _tempMat1 = new Mat4();

            var SKYBOX_FLAG = exports('S', ClearFlag.STENCIL << 1);
            var correctionMatrices = [];
            var Camera = exports('e', function () {
              function Camera(device) {
                this.isWindowSize = true;
                this.screenScale = void 0;
                this._device = void 0;
                this._scene = null;
                this._node = null;
                this._name = null;
                this._enabled = false;
                this._proj = -1;
                this._aspect = void 0;
                this._orthoHeight = 10.0;
                this._fovAxis = CameraFOVAxis.VERTICAL;
                this._fov = toRadian(45);
                this._nearClip = 1.0;
                this._farClip = 1000.0;
                this._clearColor = new Color$1(0.2, 0.2, 0.2, 1);
                this._viewport = new Rect(0, 0, 1, 1);
                this._curTransform = SurfaceTransform.IDENTITY;
                this._isProjDirty = true;
                this._matView = new Mat4();
                this._matViewInv = null;
                this._matProj = new Mat4();
                this._matProjInv = new Mat4();
                this._matViewProj = new Mat4();
                this._matViewProjInv = new Mat4();
                this._frustum = new Frustum();
                this._forward = new Vec3();
                this._position = new Vec3();
                this._priority = 0;
                this._aperture = CameraAperture.F16_0;
                this._apertureValue = void 0;
                this._shutter = CameraShutter.D125;
                this._shutterValue = 0.0;
                this._iso = CameraISO.ISO100;
                this._isoValue = 0.0;
                this._ec = 0.0;
                this._poolHandle = NULL_HANDLE;
                this._frustumHandle = NULL_HANDLE;
                this._window = null;
                this._device = device;
                this._apertureValue = FSTOPS[this._aperture];
                this._shutterValue = SHUTTERS[this._shutter];
                this._isoValue = ISOS[this._iso];
                this._aspect = this.screenScale = 1;

                if (!correctionMatrices.length) {
                  var ySign = device.screenSpaceSignY;
                  correctionMatrices[SurfaceTransform.IDENTITY] = new Mat4(1, 0, 0, 0, 0, ySign);
                  correctionMatrices[SurfaceTransform.ROTATE_90] = new Mat4(0, 1, 0, 0, -ySign, 0);
                  correctionMatrices[SurfaceTransform.ROTATE_180] = new Mat4(-1, 0, 0, 0, 0, -ySign);
                  correctionMatrices[SurfaceTransform.ROTATE_270] = new Mat4(0, -1, 0, 0, ySign, 0);
                }
              }

              var _proto = Camera.prototype;

              _proto.initialize = function initialize(info) {
                this._name = info.name;
                this._node = info.node;
                this._proj = info.projection;
                this._priority = info.priority || 0;
                this._aspect = this.screenScale = 1;
                var handle = this._poolHandle = CameraPool.alloc();
                CameraPool.set(handle, CameraView.WIDTH, 1);
                CameraPool.set(handle, CameraView.HEIGHT, 1);
                CameraPool.set(handle, CameraView.CLEAR_FLAG, ClearFlag.NONE);
                CameraPool.set(handle, CameraView.CLEAR_DEPTH, 1.0);
                CameraPool.set(handle, CameraView.NODE, this._node.handle);
                CameraPool.set(handle, CameraView.VISIBILITY, CAMERA_DEFAULT_MASK);
                if (this._scene) CameraPool.set(handle, CameraView.SCENE, this._scene.handle);

                {
                  this._frustumHandle = FrustumPool.alloc();
                  CameraPool.set(handle, CameraView.FRUSTUM, this._frustumHandle);
                }

                this.updateExposure();
                this.changeTargetWindow(info.window);
                console.log("Created Camera: " + this._name + " " + CameraPool.get(handle, CameraView.WIDTH) + "x" + CameraPool.get(handle, CameraView.HEIGHT));
              };

              _proto.destroy = function destroy() {
                if (this._window) {
                  this._window.detachCamera(this);
                }

                this._name = null;

                if (this._poolHandle) {
                  CameraPool.free(this._poolHandle);
                  this._poolHandle = NULL_HANDLE;

                  if (this._frustumHandle) {
                    FrustumPool.free(this._frustumHandle);
                    this._frustumHandle = NULL_HANDLE;
                  }
                }
              };

              _proto.attachToScene = function attachToScene(scene) {
                this._scene = scene;
                this._enabled = true;
                CameraPool.set(this._poolHandle, CameraView.SCENE, scene.handle);
              };

              _proto.detachFromScene = function detachFromScene() {
                this._scene = null;
                this._enabled = false;
                CameraPool.set(this._poolHandle, CameraView.SCENE, 0);
              };

              _proto.resize = function resize(width, height) {
                var handle = this._poolHandle;
                CameraPool.set(handle, CameraView.WIDTH, width);
                CameraPool.set(handle, CameraView.HEIGHT, height);
                this._aspect = width * this._viewport.width / (height * this._viewport.height);
                this._isProjDirty = true;
              };

              _proto.setFixedSize = function setFixedSize(width, height) {
                var handle = this._poolHandle;
                CameraPool.set(handle, CameraView.WIDTH, width);
                CameraPool.set(handle, CameraView.HEIGHT, height);
                this._aspect = width * this._viewport.width / (height * this._viewport.height);
                this.isWindowSize = false;
              };

              _proto.update = function update(forceUpdate) {
                if (forceUpdate === void 0) {
                  forceUpdate = false;
                }

                if (!this._node) return;
                var viewProjDirty = false;

                if (this._node.hasChangedFlags || forceUpdate) {
                  Mat4.invert(this._matView, this._node.worldMatrix);
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_VIEW, this._matView);
                  this._forward.x = -this._matView.m02;
                  this._forward.y = -this._matView.m06;
                  this._forward.z = -this._matView.m10;

                  this._node.getWorldPosition(this._position);

                  CameraPool.setVec3(this._poolHandle, CameraView.POSITION, this._position);
                  CameraPool.setVec3(this._poolHandle, CameraView.FORWARD, this._forward);
                  viewProjDirty = true;
                }

                var orientation = this._device.surfaceTransform;

                if (this._isProjDirty || this._curTransform !== orientation) {
                  this._curTransform = orientation;
                  var projectionSignY = this._device.screenSpaceSignY;

                  if (this._window && this._window.hasOffScreenAttachments) {
                    projectionSignY *= this._device.UVSpaceSignY;
                    orientation = SurfaceTransform.IDENTITY;
                  }

                  if (this._proj === CameraProjection.PERSPECTIVE) {
                    Mat4.perspective(this._matProj, this._fov, this._aspect, this._nearClip, this._farClip, this._fovAxis === CameraFOVAxis.VERTICAL, this._device.clipSpaceMinZ, projectionSignY, orientation);
                  } else {
                    var x = this._orthoHeight * this._aspect;
                    var y = this._orthoHeight;
                    Mat4.ortho(this._matProj, -x, x, -y, y, this._nearClip, this._farClip, this._device.clipSpaceMinZ, projectionSignY, orientation);
                  }

                  Mat4.invert(this._matProjInv, this._matProj);
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_PROJ, this._matProj);
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_PROJ_INV, this._matProjInv);
                  viewProjDirty = true;
                  this._isProjDirty = false;
                }

                if (viewProjDirty) {
                  Mat4.multiply(this._matViewProj, this._matProj, this._matView);
                  Mat4.invert(this._matViewProjInv, this._matViewProj);

                  this._frustum.update(this._matViewProj, this._matViewProjInv);

                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_VIEW_PROJ, this._matViewProj);
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_VIEW_PROJ_INV, this._matViewProjInv);
                  recordFrustumToSharedMemory(this._frustumHandle, this._frustum);
                }
              };

              _proto.changeTargetWindow = function changeTargetWindow(window) {
                if (window === void 0) {
                  window = null;
                }

                if (this._window) {
                  this._window.detachCamera(this);
                }

                var win = window || legacyCC.director.root.mainWindow;

                if (win) {
                  win.attachCamera(this);
                  this.resize(win.width, win.height);
                  this._window = win;
                  CameraPool.set(this._poolHandle, CameraView.WINDOW, win.handle);
                }
              };

              _proto.detachCamera = function detachCamera() {
                if (this._window) {
                  this._window.detachCamera(this);
                }
              };

              _proto.screenPointToRay = function screenPointToRay(out, x, y) {
                if (!this._node) return null;
                var handle = this._poolHandle;
                var width = CameraPool.get(handle, CameraView.WIDTH);
                var height = CameraPool.get(handle, CameraView.HEIGHT);
                var cx = this._viewport.x * width;
                var cy = this._viewport.y * height;
                var cw = this._viewport.width * width;
                var ch = this._viewport.height * height;
                var isProj = this._proj === CameraProjection.PERSPECTIVE;
                var ySign = this._device.screenSpaceSignY;
                var preTransform = preTransforms[this._curTransform];
                Vec3.set(v_a, (x - cx) / cw * 2 - 1, (y - cy) / ch * 2 - 1, isProj ? 1 : -1);
                var ox = v_a.x,
                    oy = v_a.y;
                v_a.x = ox * preTransform[0] + oy * preTransform[2] * ySign;
                v_a.y = ox * preTransform[1] + oy * preTransform[3] * ySign;
                Vec3.transformMat4(isProj ? v_a : out.o, v_a, this._matViewProjInv);

                if (isProj) {
                  this._node.getWorldPosition(v_b);

                  Ray.fromPoints(out, v_b, v_a);
                } else {
                  Vec3.transformQuat(out.d, Vec3.FORWARD, this._node.worldRotation);
                }

                return out;
              };

              _proto.screenToWorld = function screenToWorld(out, screenPos) {
                var handle = this._poolHandle;
                var width = CameraPool.get(handle, CameraView.WIDTH);
                var height = CameraPool.get(handle, CameraView.HEIGHT);
                var cx = this._viewport.x * width;
                var cy = this._viewport.y * height;
                var cw = this._viewport.width * width;
                var ch = this._viewport.height * height;
                var ySign = this._device.screenSpaceSignY;
                var preTransform = preTransforms[this._curTransform];

                if (this._proj === CameraProjection.PERSPECTIVE) {
                  Vec3.set(out, (screenPos.x - cx) / cw * 2 - 1, (screenPos.y - cy) / ch * 2 - 1, 1.0);
                  var x = out.x,
                      y = out.y;
                  out.x = x * preTransform[0] + y * preTransform[2] * ySign;
                  out.y = x * preTransform[1] + y * preTransform[3] * ySign;
                  Vec3.transformMat4(out, out, this._matViewProjInv);

                  if (this._node) {
                    this._node.getWorldPosition(v_a);
                  }

                  Vec3.lerp(out, v_a, out, lerp(this._nearClip / this._farClip, 1, screenPos.z));
                } else {
                  Vec3.set(out, (screenPos.x - cx) / cw * 2 - 1, (screenPos.y - cy) / ch * 2 - 1, screenPos.z * 2 - 1);
                  var _x = out.x,
                      _y = out.y;
                  out.x = _x * preTransform[0] + _y * preTransform[2] * ySign;
                  out.y = _x * preTransform[1] + _y * preTransform[3] * ySign;
                  Vec3.transformMat4(out, out, this._matViewProjInv);
                }

                return out;
              };

              _proto.worldToScreen = function worldToScreen(out, worldPos) {
                var handle = this._poolHandle;
                var width = CameraPool.get(handle, CameraView.WIDTH);
                var height = CameraPool.get(handle, CameraView.HEIGHT);
                var cx = this._viewport.x * width;
                var cy = this._viewport.y * height;
                var cw = this._viewport.width * width;
                var ch = this._viewport.height * height;
                var ySign = this._device.screenSpaceSignY;
                var preTransform = preTransforms[this._curTransform];
                Vec3.transformMat4(out, worldPos, this._matViewProj);
                var x = out.x,
                    y = out.y;
                out.x = x * preTransform[0] + y * preTransform[2] * ySign;
                out.y = x * preTransform[1] + y * preTransform[3] * ySign;
                out.x = cx + (out.x + 1) * 0.5 * cw;
                out.y = cy + (out.y + 1) * 0.5 * ch;
                out.z = out.z * 0.5 + 0.5;
                return out;
              };

              _proto.worldMatrixToScreen = function worldMatrixToScreen(out, worldMatrix, width, height) {
                Mat4.multiply(out, this._matViewProj, worldMatrix);
                Mat4.multiply(out, correctionMatrices[this._curTransform], out);
                var halfWidth = width / 2;
                var halfHeight = height / 2;
                Mat4.identity(_tempMat1);
                Mat4.transform(_tempMat1, _tempMat1, Vec3.set(v_a, halfWidth, halfHeight, 0));
                Mat4.scale(_tempMat1, _tempMat1, Vec3.set(v_a, halfWidth, halfHeight, 1));
                Mat4.multiply(out, _tempMat1, out);
                return out;
              };

              _proto.updateExposure = function updateExposure() {
                var ev100 = Math.log2(this._apertureValue * this._apertureValue / this._shutterValue * 100.0 / this._isoValue);
                CameraPool.set(this._poolHandle, CameraView.EXPOSURE, 0.833333 / Math.pow(2.0, ev100));
              };

              _createClass(Camera, [{
                key: "node",
                set: function set(val) {
                  this._node = val;
                },
                get: function get() {
                  return this._node;
                }
              }, {
                key: "enabled",
                set: function set(val) {
                  this._enabled = val;
                },
                get: function get() {
                  return this._enabled;
                }
              }, {
                key: "orthoHeight",
                set: function set(val) {
                  this._orthoHeight = val;
                  this._isProjDirty = true;
                },
                get: function get() {
                  return this._orthoHeight;
                }
              }, {
                key: "projectionType",
                set: function set(val) {
                  this._proj = val;
                  this._isProjDirty = true;
                },
                get: function get() {
                  return this._proj;
                }
              }, {
                key: "fovAxis",
                set: function set(axis) {
                  this._fovAxis = axis;
                  this._isProjDirty = true;
                },
                get: function get() {
                  return this._fovAxis;
                }
              }, {
                key: "fov",
                set: function set(fov) {
                  this._fov = fov;
                  this._isProjDirty = true;
                },
                get: function get() {
                  return this._fov;
                }
              }, {
                key: "nearClip",
                set: function set(nearClip) {
                  this._nearClip = nearClip;
                  this._isProjDirty = true;
                },
                get: function get() {
                  return this._nearClip;
                }
              }, {
                key: "farClip",
                set: function set(farClip) {
                  this._farClip = farClip;
                  this._isProjDirty = true;
                },
                get: function get() {
                  return this._farClip;
                }
              }, {
                key: "clearColor",
                set: function set(val) {
                  this._clearColor.x = val.x;
                  this._clearColor.y = val.y;
                  this._clearColor.z = val.z;
                  this._clearColor.w = val.w;
                  CameraPool.setVec4(this._poolHandle, CameraView.CLEAR_COLOR, val);
                },
                get: function get() {
                  return this._clearColor;
                }
              }, {
                key: "viewport",
                get: function get() {
                  return this._viewport;
                },
                set: function set(val) {
                  var x = val.x,
                      width = val.width,
                      height = val.height;
                  var y = this._device.screenSpaceSignY < 0 ? 1 - val.y - height : val.y;

                  switch (this._device.surfaceTransform) {
                    case SurfaceTransform.ROTATE_90:
                      this._viewport.x = 1 - y - height;
                      this._viewport.y = x;
                      this._viewport.width = height;
                      this._viewport.height = width;
                      break;

                    case SurfaceTransform.ROTATE_180:
                      this._viewport.x = 1 - x - width;
                      this._viewport.y = 1 - y - height;
                      this._viewport.width = width;
                      this._viewport.height = height;
                      break;

                    case SurfaceTransform.ROTATE_270:
                      this._viewport.x = y;
                      this._viewport.y = 1 - x - width;
                      this._viewport.width = height;
                      this._viewport.height = width;
                      break;

                    case SurfaceTransform.IDENTITY:
                      this._viewport.x = x;
                      this._viewport.y = y;
                      this._viewport.width = width;
                      this._viewport.height = height;
                      break;
                  }

                  CameraPool.setVec4(this._poolHandle, CameraView.VIEW_PORT, this._viewport);
                  this.resize(this.width, this.height);
                }
              }, {
                key: "scene",
                get: function get() {
                  return this._scene;
                }
              }, {
                key: "name",
                get: function get() {
                  return this._name;
                }
              }, {
                key: "width",
                get: function get() {
                  return CameraPool.get(this._poolHandle, CameraView.WIDTH);
                }
              }, {
                key: "height",
                get: function get() {
                  return CameraPool.get(this._poolHandle, CameraView.HEIGHT);
                }
              }, {
                key: "aspect",
                get: function get() {
                  return this._aspect;
                }
              }, {
                key: "matView",
                set: function set(val) {
                  this._matView = val;
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_VIEW, this._matView);
                },
                get: function get() {
                  return this._matView;
                }
              }, {
                key: "matViewInv",
                set: function set(val) {
                  this._matViewInv = val;
                },
                get: function get() {
                  return this._matViewInv || this._node.worldMatrix;
                }
              }, {
                key: "matProj",
                set: function set(val) {
                  this._matProj = val;
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_PROJ, this._matProj);
                },
                get: function get() {
                  return this._matProj;
                }
              }, {
                key: "matProjInv",
                set: function set(val) {
                  this._matProjInv = val;
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_PROJ_INV, this._matProjInv);
                },
                get: function get() {
                  return this._matProjInv;
                }
              }, {
                key: "matViewProj",
                set: function set(val) {
                  this._matViewProj = val;
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_VIEW_PROJ, this._matViewProj);
                },
                get: function get() {
                  return this._matViewProj;
                }
              }, {
                key: "matViewProjInv",
                set: function set(val) {
                  this._matViewProjInv = val;
                  CameraPool.setMat4(this._poolHandle, CameraView.MAT_VIEW_PROJ_INV, this._matViewProjInv);
                },
                get: function get() {
                  return this._matViewProjInv;
                }
              }, {
                key: "frustum",
                set: function set(val) {
                  this._frustum = val;
                  recordFrustumToSharedMemory(this._frustumHandle, val);
                },
                get: function get() {
                  return this._frustum;
                }
              }, {
                key: "window",
                set: function set(val) {
                  this._window = val;
                  if (val) CameraPool.set(this._poolHandle, CameraView.WINDOW, val.handle);
                },
                get: function get() {
                  return this._window;
                }
              }, {
                key: "forward",
                set: function set(val) {
                  this._forward = val;
                  CameraPool.setVec3(this._poolHandle, CameraView.FORWARD, this._forward);
                },
                get: function get() {
                  return this._forward;
                }
              }, {
                key: "position",
                set: function set(val) {
                  this._position = val;
                  CameraPool.setVec3(this._poolHandle, CameraView.POSITION, this._position);
                },
                get: function get() {
                  return this._position;
                }
              }, {
                key: "visibility",
                set: function set(vis) {
                  CameraPool.set(this._poolHandle, CameraView.VISIBILITY, vis);
                },
                get: function get() {
                  return CameraPool.get(this._poolHandle, CameraView.VISIBILITY);
                }
              }, {
                key: "priority",
                get: function get() {
                  return this._priority;
                },
                set: function set(val) {
                  this._priority = val;
                }
              }, {
                key: "aperture",
                set: function set(val) {
                  this._aperture = val;
                  this._apertureValue = FSTOPS[this._aperture];
                  this.updateExposure();
                },
                get: function get() {
                  return this._aperture;
                }
              }, {
                key: "apertureValue",
                get: function get() {
                  return this._apertureValue;
                }
              }, {
                key: "shutter",
                set: function set(val) {
                  this._shutter = val;
                  this._shutterValue = SHUTTERS[this._shutter];
                  this.updateExposure();
                },
                get: function get() {
                  return this._shutter;
                }
              }, {
                key: "shutterValue",
                get: function get() {
                  return this._shutterValue;
                }
              }, {
                key: "iso",
                set: function set(val) {
                  this._iso = val;
                  this._isoValue = ISOS[this._iso];
                  this.updateExposure();
                },
                get: function get() {
                  return this._iso;
                }
              }, {
                key: "isoValue",
                get: function get() {
                  return this._isoValue;
                }
              }, {
                key: "ec",
                set: function set(val) {
                  this._ec = val;
                },
                get: function get() {
                  return this._ec;
                }
              }, {
                key: "exposure",
                get: function get() {
                  return CameraPool.get(this._poolHandle, CameraView.EXPOSURE);
                }
              }, {
                key: "clearFlag",
                get: function get() {
                  return CameraPool.get(this._poolHandle, CameraView.CLEAR_FLAG);
                },
                set: function set(flag) {
                  CameraPool.set(this._poolHandle, CameraView.CLEAR_FLAG, flag);
                }
              }, {
                key: "clearDepth",
                get: function get() {
                  return CameraPool.get(this._poolHandle, CameraView.CLEAR_DEPTH);
                },
                set: function set(depth) {
                  CameraPool.set(this._poolHandle, CameraView.CLEAR_DEPTH, depth);
                }
              }, {
                key: "clearStencil",
                get: function get() {
                  return CameraPool.get(this._poolHandle, CameraView.CLEAR_STENCIL);
                },
                set: function set(stencil) {
                  CameraPool.set(this._poolHandle, CameraView.CLEAR_STENCIL, stencil);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._poolHandle;
                }
              }]);

              return Camera;
            }());

            var NodeSpace;

            (function (NodeSpace) {
              NodeSpace[NodeSpace["LOCAL"] = 0] = "LOCAL";
              NodeSpace[NodeSpace["WORLD"] = 1] = "WORLD";
            })(NodeSpace || (NodeSpace = {}));

            var TransformBit;

            (function (TransformBit) {
              TransformBit[TransformBit["NONE"] = 0] = "NONE";
              TransformBit[TransformBit["POSITION"] = 1] = "POSITION";
              TransformBit[TransformBit["ROTATION"] = 2] = "ROTATION";
              TransformBit[TransformBit["SCALE"] = 4] = "SCALE";
              TransformBit[TransformBit["RS"] = TransformBit.ROTATION | TransformBit.SCALE] = "RS";
              TransformBit[TransformBit["TRS"] = TransformBit.POSITION | TransformBit.ROTATION | TransformBit.SCALE] = "TRS";
              TransformBit[TransformBit["TRS_MASK"] = ~TransformBit.TRS] = "TRS_MASK";
            })(TransformBit || (TransformBit = exports('T', {})));

            legacyCC.internal.TransformBit = TransformBit;

            var RenderScene = exports('R', function () {
              RenderScene.registerCreateFunc = function registerCreateFunc(root) {
                root._createSceneFun = function (_root) {
                  return new RenderScene(_root);
                };
              };

              _createClass(RenderScene, [{
                key: "root",
                get: function get() {
                  return this._root;
                }
              }, {
                key: "name",
                get: function get() {
                  return this._name;
                }
              }, {
                key: "cameras",
                get: function get() {
                  return this._cameras;
                }
              }, {
                key: "mainLight",
                get: function get() {
                  return this._mainLight;
                }
              }, {
                key: "sphereLights",
                get: function get() {
                  return this._sphereLights;
                }
              }, {
                key: "spotLights",
                get: function get() {
                  return this._spotLights;
                }
              }, {
                key: "models",
                get: function get() {
                  return this._models;
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._scenePoolHandle;
                }
              }, {
                key: "batches",
                get: function get() {
                  return this._batches;
                }
              }]);

              function RenderScene(root) {
                this._root = void 0;
                this._name = '';
                this._cameras = [];
                this._models = [];
                this._batches = [];
                this._directionalLights = [];
                this._sphereLights = [];
                this._spotLights = [];
                this._mainLight = null;
                this._modelId = 0;
                this._scenePoolHandle = NULL_HANDLE;
                this._modelArrayHandle = NULL_HANDLE;
                this._batchArrayHandle = NULL_HANDLE;
                this._sphereLightsHandle = NULL_HANDLE;
                this._spotLightsHandle = NULL_HANDLE;
                this._root = root;

                this._createHandles();
              }

              var _proto = RenderScene.prototype;

              _proto.initialize = function initialize(info) {
                this._name = info.name;

                this._createHandles();

                return true;
              };

              _proto.update = function update(stamp) {
                var mainLight = this._mainLight;

                if (mainLight) {
                  mainLight.update();
                }

                var sphereLights = this._sphereLights;

                for (var i = 0; i < sphereLights.length; i++) {
                  var light = sphereLights[i];
                  light.update();
                }

                var spotLights = this._spotLights;

                for (var _i = 0; _i < spotLights.length; _i++) {
                  var _light = spotLights[_i];

                  _light.update();
                }

                var models = this._models;

                for (var _i2 = 0; _i2 < models.length; _i2++) {
                  var model = models[_i2];

                  if (model.enabled) {
                    model.updateTransform(stamp);
                    model.updateUBOs(stamp);
                  }
                }
              };

              _proto.destroy = function destroy() {
                this.removeCameras();
                this.removeSphereLights();
                this.removeSpotLights();
                this.removeModels();

                if (this._modelArrayHandle) {
                  ModelArrayPool.free(this._modelArrayHandle);
                  this._modelArrayHandle = NULL_HANDLE;
                }

                if (this._scenePoolHandle) {
                  ScenePool.free(this._scenePoolHandle);
                  this._scenePoolHandle = NULL_HANDLE;
                }

                if (this._sphereLightsHandle) {
                  LightArrayPool.free(this._sphereLightsHandle);
                  this._sphereLightsHandle = NULL_HANDLE;
                }

                if (this._spotLightsHandle) {
                  LightArrayPool.free(this._spotLightsHandle);
                  this._spotLightsHandle = NULL_HANDLE;
                }

                if (this._batchArrayHandle) {
                  UIBatchArrayPool.free(this._batchArrayHandle);
                  this._batchArrayHandle = NULL_HANDLE;
                }
              };

              _proto.addCamera = function addCamera(cam) {
                cam.attachToScene(this);

                this._cameras.push(cam);
              };

              _proto.removeCamera = function removeCamera(camera) {
                for (var i = 0; i < this._cameras.length; ++i) {
                  if (this._cameras[i] === camera) {
                    this._cameras.splice(i, 1);

                    camera.detachFromScene();
                    return;
                  }
                }
              };

              _proto.removeCameras = function removeCameras() {
                for (var _iterator = _createForOfIteratorHelperLoose(this._cameras), _step; !(_step = _iterator()).done;) {
                  var camera = _step.value;
                  camera.detachFromScene();
                }

                this._cameras.splice(0);
              };

              _proto.setMainLight = function setMainLight(dl) {
                this._mainLight = dl;
                ScenePool.set(this._scenePoolHandle, SceneView.MAIN_LIGHT, dl.handle);
              };

              _proto.unsetMainLight = function unsetMainLight(dl) {
                if (this._mainLight === dl) {
                  var dlList = this._directionalLights;

                  if (dlList.length) {
                    this._mainLight = dlList[dlList.length - 1];

                    if (this._mainLight.node) {
                      this._mainLight.node.hasChangedFlags |= TransformBit.ROTATION;
                    }
                  } else {
                    this._mainLight = null;
                  }
                }
              };

              _proto.addDirectionalLight = function addDirectionalLight(dl) {
                dl.attachToScene(this);

                this._directionalLights.push(dl);
              };

              _proto.removeDirectionalLight = function removeDirectionalLight(dl) {
                for (var i = 0; i < this._directionalLights.length; ++i) {
                  if (this._directionalLights[i] === dl) {
                    dl.detachFromScene();

                    this._directionalLights.splice(i, 1);

                    return;
                  }
                }
              };

              _proto.addSphereLight = function addSphereLight(pl) {
                pl.attachToScene(this);

                this._sphereLights.push(pl);

                LightArrayPool.push(this._sphereLightsHandle, pl.handle);
              };

              _proto.removeSphereLight = function removeSphereLight(pl) {
                for (var i = 0; i < this._sphereLights.length; ++i) {
                  if (this._sphereLights[i] === pl) {
                    pl.detachFromScene();

                    this._sphereLights.splice(i, 1);

                    LightArrayPool.erase(this._sphereLightsHandle, i);
                    return;
                  }
                }
              };

              _proto.addSpotLight = function addSpotLight(sl) {
                sl.attachToScene(this);

                this._spotLights.push(sl);

                LightArrayPool.push(this._spotLightsHandle, sl.handle);
              };

              _proto.removeSpotLight = function removeSpotLight(sl) {
                for (var i = 0; i < this._spotLights.length; ++i) {
                  if (this._spotLights[i] === sl) {
                    sl.detachFromScene();

                    this._spotLights.splice(i, 1);

                    LightArrayPool.erase(this._spotLightsHandle, i);
                    return;
                  }
                }
              };

              _proto.removeSphereLights = function removeSphereLights() {
                for (var i = 0; i < this._sphereLights.length; ++i) {
                  this._sphereLights[i].detachFromScene();
                }

                this._sphereLights.length = 0;
                LightArrayPool.clear(this._sphereLightsHandle);
              };

              _proto.removeSpotLights = function removeSpotLights() {
                for (var i = 0; i < this._spotLights.length; ++i) {
                  this._spotLights[i].detachFromScene();
                }

                this._spotLights = [];
                LightArrayPool.clear(this._spotLightsHandle);
              };

              _proto.addModel = function addModel(m) {
                m.attachToScene(this);

                this._models.push(m);

                ModelArrayPool.push(this._modelArrayHandle, m.handle);
              };

              _proto.removeModel = function removeModel(model) {
                for (var i = 0; i < this._models.length; ++i) {
                  if (this._models[i] === model) {
                    model.detachFromScene();

                    this._models.splice(i, 1);

                    ModelArrayPool.erase(this._modelArrayHandle, i);
                    return;
                  }
                }
              };

              _proto.removeModels = function removeModels() {
                for (var _iterator2 = _createForOfIteratorHelperLoose(this._models), _step2; !(_step2 = _iterator2()).done;) {
                  var m = _step2.value;
                  m.detachFromScene();
                  m.destroy();
                }

                this._models.length = 0;
                ModelArrayPool.clear(this._modelArrayHandle);
              };

              _proto.addBatch = function addBatch(batch) {
                this._batches.push(batch);

                UIBatchArrayPool.push(this._batchArrayHandle, batch.handle);
              };

              _proto.removeBatch = function removeBatch(batch) {
                for (var i = 0; i < this._batches.length; ++i) {
                  if (this._batches[i] === batch) {
                    this._batches.splice(i, 1);

                    UIBatchArrayPool.erase(this._batchArrayHandle, i);
                    return;
                  }
                }
              };

              _proto.removeBatches = function removeBatches() {
                this._batches.length = 0;
                UIBatchArrayPool.clear(this._batchArrayHandle);
              };

              _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
                for (var _iterator3 = _createForOfIteratorHelperLoose(this._models), _step3; !(_step3 = _iterator3()).done;) {
                  var m = _step3.value;
                  m.onGlobalPipelineStateChanged();
                }
              };

              _proto.generateModelId = function generateModelId() {
                return this._modelId++;
              };

              _proto._createHandles = function _createHandles() {
                if (!this._modelArrayHandle) {
                  this._modelArrayHandle = ModelArrayPool.alloc();
                  this._scenePoolHandle = ScenePool.alloc();
                  ScenePool.set(this._scenePoolHandle, SceneView.MODEL_ARRAY, this._modelArrayHandle);
                  this._spotLightsHandle = LightArrayPool.alloc();
                  ScenePool.set(this._scenePoolHandle, SceneView.SPOT_LIGHT_ARRAY, this._spotLightsHandle);
                  this._sphereLightsHandle = LightArrayPool.alloc();
                  ScenePool.set(this._scenePoolHandle, SceneView.SPHERE_LIGHT_ARRAY, this._sphereLightsHandle);
                }

                if (!this._batchArrayHandle) {
                  this._batchArrayHandle = UIBatchArrayPool.alloc();
                  ScenePool.set(this._scenePoolHandle, SceneView.BATCH_ARRAY_2D, this._batchArrayHandle);
                }
              };

              return RenderScene;
            }());

            removeProperty(RenderScene.prototype, 'RenderScene.prototype', [{
              name: 'raycastUI2DNode'
            }, {
              name: 'raycastUINode'
            }]);
            removeProperty(RenderScene.prototype, 'RenderScene.prototype', [{
              name: 'raycastAll',
              suggest: 'using intersect.rayModel in geometry'
            }, {
              name: 'raycastAllModels',
              suggest: 'using intersect.rayModel in geometry'
            }, {
              name: 'raycastSingleModel',
              suggest: 'using intersect.rayModel in geometry'
            }, {
              name: 'raycastAllCanvas',
              suggest: 'using intersect.rayAABB in geometry'
            }, {
              name: 'rayResultCanvas'
            }, {
              name: 'rayResultModels'
            }, {
              name: 'rayResultAll'
            }, {
              name: 'rayResultSingleModel'
            }]);
            var CameraVisFlags = exports('f', {});
            removeProperty(CameraVisFlags, 'CameraVisFlags', [{
              name: 'GENERAL'
            }]);
            replaceProperty(CameraVisFlags, 'CameraVisFlags', [{
              name: 'PROFILER',
              newName: 'PROFILER',
              target: Layers.BitMask,
              targetName: 'PROFILER'
            }, {
              name: 'GIZMOS',
              newName: 'GIZMOS',
              target: Layers.BitMask,
              targetName: 'GIZMOS'
            }, {
              name: 'EDITOR',
              newName: 'EDITOR',
              target: Layers.BitMask,
              targetName: 'EDITOR'
            }, {
              name: 'UI',
              newName: 'UI',
              target: Layers.BitMask,
              targetName: 'UI_3D'
            }, {
              name: 'UI2D',
              newName: 'UI2D',
              target: Layers.BitMask,
              targetName: 'UI_2D'
            }]);
            legacyCC.CameraVisFlags = CameraVisFlags;
            var VisibilityFlags = exports('V', {});
            removeProperty(VisibilityFlags, 'VisibilityFlags', [{
              name: 'GENERAL'
            }]);
            replaceProperty(VisibilityFlags, 'VisibilityFlags', [{
              name: 'ALWALS',
              newName: 'ALWALS',
              target: Layers.Enum,
              targetName: 'ALWALS'
            }, {
              name: 'PROFILER',
              newName: 'PROFILER',
              target: Layers.Enum,
              targetName: 'PROFILER'
            }, {
              name: 'GIZMOS',
              newName: 'GIZMOS',
              target: Layers.Enum,
              targetName: 'GIZMOS'
            }, {
              name: 'EDITOR',
              newName: 'EDITOR',
              target: Layers.Enum,
              targetName: 'EDITOR'
            }, {
              name: 'UI',
              newName: 'UI',
              target: Layers.Enum,
              targetName: 'UI_3D'
            }, {
              name: 'UI2D',
              newName: 'UI2D',
              target: Layers.Enum,
              targetName: 'UI_2D'
            }]);
            legacyCC.VisibilityFlags = VisibilityFlags;
            replaceProperty(Pass.prototype, 'Pass.prototype', [{
              name: 'getBindingTypeFromHandle',
              newName: 'getDescriptorTypeFromHandle'
            }]);
            removeProperty(Camera.prototype, 'Camera.prototype', [{
              name: 'getSplitFrustum'
            }]);

            function ColorTemperatureToRGB(rgb, kelvin) {
              if (kelvin < 1000.0) {
                kelvin = 1000.0;
              } else if (kelvin > 15000.0) {
                kelvin = 15000.0;
              }

              var kSqr = kelvin * kelvin;
              var u = (0.860117757 + 1.54118254e-4 * kelvin + 1.28641212e-7 * kSqr) / (1.0 + 8.42420235e-4 * kelvin + 7.08145163e-7 * kSqr);
              var v = (0.317398726 + 4.22806245e-5 * kelvin + 4.20481691e-8 * kSqr) / (1.0 - 2.89741816e-5 * kelvin + 1.61456053e-7 * kSqr);
              var d = 2.0 * u - 8.0 * v + 4.0;
              var x = 3.0 * u / d;
              var y = 2.0 * v / d;
              var z = 1.0 - x - y;
              var X = 1.0 / y * x;
              var Z = 1.0 / y * z;
              rgb.x = 3.2404542 * X + -1.5371385 + -0.4985314 * Z;
              rgb.y = -0.9692660 * X + 1.8760108 + 0.0415560 * Z;
              rgb.z = 0.0556434 * X + -0.2040259 + 1.0572252 * Z;
            }
            var LightType;

            (function (LightType) {
              LightType[LightType["DIRECTIONAL"] = 0] = "DIRECTIONAL";
              LightType[LightType["SPHERE"] = 1] = "SPHERE";
              LightType[LightType["SPOT"] = 2] = "SPOT";
              LightType[LightType["UNKNOWN"] = 3] = "UNKNOWN";
            })(LightType || (LightType = exports('L', {})));

            var nt2lm = exports('n', function nt2lm(size) {
              return 4 * Math.PI * Math.PI * size * size;
            });
            var Light = exports('h', function () {
              function Light() {
                this._baked = false;
                this._color = new Vec3(1, 1, 1);
                this._colorTemp = 6550.0;
                this._colorTempRGB = new Vec3(1, 1, 1);
                this._scene = null;
                this._node = null;
                this._name = null;
                this._handle = NULL_HANDLE;
              }

              var _proto = Light.prototype;

              _proto.initialize = function initialize() {
                this._handle = LightPool.alloc();
                LightPool.setVec3(this._handle, LightView.COLOR, this._color);
                LightPool.setVec3(this._handle, LightView.COLOR_TEMPERATURE_RGB, this._colorTempRGB);
                LightPool.set(this._handle, LightView.TYPE, LightType.UNKNOWN);
              };

              _proto.attachToScene = function attachToScene(scene) {
                this._scene = scene;
              };

              _proto.detachFromScene = function detachFromScene() {
                this._scene = null;
              };

              _proto.destroy = function destroy() {
                this._name = null;
                this._node = null;

                if (this._handle) {
                  LightPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }
              };

              _proto.update = function update() {};

              _createClass(Light, [{
                key: "baked",
                get: function get() {
                  return this._baked;
                },
                set: function set(val) {
                  this._baked = val;
                }
              }, {
                key: "color",
                set: function set(color) {
                  this._color.set(color);

                  LightPool.setVec3(this._handle, LightView.COLOR, color);
                },
                get: function get() {
                  return this._color;
                }
              }, {
                key: "useColorTemperature",
                set: function set(enable) {
                  LightPool.set(this._handle, LightView.USE_COLOR_TEMPERATURE, enable ? 1 : 0);
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.USE_COLOR_TEMPERATURE) === 1;
                }
              }, {
                key: "colorTemperature",
                set: function set(val) {
                  this._colorTemp = val;
                  ColorTemperatureToRGB(this._colorTempRGB, this._colorTemp);
                  LightPool.setVec3(this._handle, LightView.COLOR_TEMPERATURE_RGB, this._colorTempRGB);
                },
                get: function get() {
                  return this._colorTemp;
                }
              }, {
                key: "colorTemperatureRGB",
                get: function get() {
                  return this._colorTempRGB;
                }
              }, {
                key: "node",
                set: function set(n) {
                  this._node = n;

                  if (this._node) {
                    this._node.hasChangedFlags |= TransformBit.ROTATION;
                    LightPool.set(this._handle, LightView.NODE, this._node.handle);
                  }
                },
                get: function get() {
                  return this._node;
                }
              }, {
                key: "type",
                get: function get() {
                  return LightPool.get(this._handle, LightView.TYPE);
                }
              }, {
                key: "name",
                get: function get() {
                  return this._name;
                },
                set: function set(n) {
                  this._name = n;
                }
              }, {
                key: "scene",
                get: function get() {
                  return this._scene;
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._handle;
                }
              }]);

              return Light;
            }());

            var _forward = new Vec3(0, 0, -1);

            var _v3 = new Vec3();

            var DirectionalLight = exports('D', function (_Light) {
              _inheritsLoose(DirectionalLight, _Light);

              _createClass(DirectionalLight, [{
                key: "shadowRange",
                set: function set(shadowRange) {
                  this._shadowRange = shadowRange;
                },
                get: function get() {
                  return this._shadowRange;
                }
              }, {
                key: "shadowIntensitywRange",
                set: function set(shadowIntensity) {
                  this._shadowIntensity = shadowIntensity;
                }
              }, {
                key: "shadowIntensity",
                get: function get() {
                  return this._shadowIntensity;
                }
              }, {
                key: "shadowFadeDistance",
                set: function set(shadowFadeDistance) {
                  this._shadowFadeDistance = shadowFadeDistance;
                },
                get: function get() {
                  return this._shadowFadeDistance;
                }
              }, {
                key: "shadowDistance",
                set: function set(shadowDistance) {
                  this._shadowDistance = shadowDistance;
                },
                get: function get() {
                  return this._shadowDistance;
                }
              }, {
                key: "fadeStart",
                set: function set(fadeStart) {
                  this._fadeStart = fadeStart;
                },
                get: function get() {
                  return this._fadeStart;
                }
              }, {
                key: "splits",
                set: function set(splits) {
                  this._splits = splits;
                },
                get: function get() {
                  return this._splits;
                }
              }, {
                key: "biasAutoAdjust",
                set: function set(biasAutoAdjust) {
                  this._biasAutoAdjust = biasAutoAdjust;
                },
                get: function get() {
                  return this._biasAutoAdjust;
                }
              }, {
                key: "direction",
                set: function set(dir) {
                  Vec3.normalize(this._dir, dir);
                  LightPool.setVec3(this._handle, LightView.DIRECTION, this._dir);
                },
                get: function get() {
                  return this._dir;
                }
              }, {
                key: "illuminance",
                set: function set(illum) {
                  LightPool.set(this._handle, LightView.ILLUMINANCE, illum);
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.ILLUMINANCE);
                }
              }]);

              function DirectionalLight() {
                var _this;

                _this = _Light.call(this) || this;
                _this._dir = new Vec3(1.0, -1.0, -1.0);
                _this._shadowRange = 1000.0;
                _this._shadowIntensity = 0.0;
                _this._shadowFadeDistance = 0.0;
                _this._shadowDistance = 0.0;
                _this._fadeStart = 0.8;
                _this._splits = new Vec4(1.0, 0.0, 0.0, 0.0);
                _this._biasAutoAdjust = 1.0;
                return _this;
              }

              var _proto = DirectionalLight.prototype;

              _proto.initialize = function initialize() {
                _Light.prototype.initialize.call(this);

                LightPool.set(this._handle, LightView.ILLUMINANCE, Ambient.SUN_ILLUM);
                LightPool.setVec3(this._handle, LightView.DIRECTION, this._dir);
                LightPool.set(this._handle, LightView.TYPE, LightType.DIRECTIONAL);
              };

              _proto.update = function update() {
                if (this._node && this._node.hasChangedFlags) {
                  this.direction = Vec3.transformQuat(_v3, _forward, this._node.worldRotation);
                }
              };

              return DirectionalLight;
            }(Light));

            var _dsInfo = new DescriptorSetInfo(null);

            var SubModel = exports('p', function () {
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
              };

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
                  pass.tryCompile();
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
                  pass.tryCompile();
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

                  this._flushPassInfo();

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
                }
              }, {
                key: "planarShaderHandel",
                get: function get() {
                  return SubModelPool.get(this._handle, SubModelView.PLANAR_SHADER);
                }
              }]);

              return SubModel;
            }());

            var INITIAL_CAPACITY = 32;
            var MAX_CAPACITY = 1024;
            var InstancedBuffer = function () {
              InstancedBuffer.get = function get(pass, extraKey) {
                if (extraKey === void 0) {
                  extraKey = 0;
                }

                var buffers = InstancedBuffer._buffers;
                if (!buffers.has(pass)) buffers.set(pass, {});
                var record = buffers.get(pass);
                return record[extraKey] || (record[extraKey] = new InstancedBuffer(pass));
              };

              function InstancedBuffer(pass) {
                this.instances = [];
                this.pass = void 0;
                this.hasPendingModels = false;
                this.dynamicOffsets = [];
                this._device = void 0;
                this._device = pass.device;
                this.pass = pass;
              }

              var _proto = InstancedBuffer.prototype;

              _proto.destroy = function destroy() {
                for (var i = 0; i < this.instances.length; ++i) {
                  var instance = this.instances[i];
                  instance.vb.destroy();
                  instance.ia.destroy();
                }

                this.instances.length = 0;
              };

              _proto.merge = function merge(subModel, attrs, passIdx, hShaderImplant) {

                var stride = attrs.buffer.length;

                if (!stride) {
                  return;
                }

                var sourceIA = subModel.inputAssembler;
                var lightingMap = subModel.descriptorSet.getTexture(UNIFORM_LIGHTMAP_TEXTURE_BINDING);
                var hShader = SubModelPool.get(subModel.handle, SubModelView.SHADER_0 + passIdx);
                var hDescriptorSet = SubModelPool.get(subModel.handle, SubModelView.DESCRIPTOR_SET);

                for (var i = 0; i < this.instances.length; ++i) {
                  var instance = this.instances[i];

                  if (instance.ia.indexBuffer !== sourceIA.indexBuffer || instance.count >= MAX_CAPACITY) {
                    continue;
                  }

                  if (instance.lightingMap !== lightingMap) {
                    continue;
                  }

                  if (instance.stride !== stride) {
                    return;
                  }

                  if (instance.count >= instance.capacity) {
                    instance.capacity <<= 1;
                    var newSize = instance.stride * instance.capacity;
                    var oldData = instance.data;
                    instance.data = new Uint8Array(newSize);
                    instance.data.set(oldData);
                    instance.vb.resize(newSize);
                  }

                  if (instance.hShader !== hShader) {
                    instance.hShader = hShader;
                  }

                  if (instance.hDescriptorSet !== hDescriptorSet) {
                    instance.hDescriptorSet = hDescriptorSet;
                  }

                  instance.data.set(attrs.buffer, instance.stride * instance.count++);
                  this.hasPendingModels = true;
                  return;
                }

                var vb = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, stride * INITIAL_CAPACITY, stride));

                var data = new Uint8Array(stride * INITIAL_CAPACITY);
                var vertexBuffers = sourceIA.vertexBuffers.slice();
                var attributes = sourceIA.attributes.slice();
                var indexBuffer = sourceIA.indexBuffer;

                for (var _i = 0; _i < attrs.attributes.length; _i++) {
                  var attr = attrs.attributes[_i];
                  var newAttr = new Attribute(attr.name, attr.format, attr.isNormalized, vertexBuffers.length, true);
                  attributes.push(newAttr);
                }

                data.set(attrs.buffer);
                vertexBuffers.push(vb);
                var iaInfo = new InputAssemblerInfo(attributes, vertexBuffers, indexBuffer);

                var ia = this._device.createInputAssembler(iaInfo);

                this.instances.push({
                  count: 1,
                  capacity: INITIAL_CAPACITY,
                  vb: vb,
                  data: data,
                  ia: ia,
                  stride: stride,
                  hShader: hShader,
                  hDescriptorSet: hDescriptorSet,
                  lightingMap: lightingMap
                });
                this.hasPendingModels = true;
              };

              _proto.uploadBuffers = function uploadBuffers(cmdBuff) {
                for (var i = 0; i < this.instances.length; ++i) {
                  var instance = this.instances[i];

                  if (!instance.count) {
                    continue;
                  }

                  instance.ia.instanceCount = instance.count;
                  cmdBuff.updateBuffer(instance.vb, instance.data);
                }
              };

              _proto.clear = function clear() {
                for (var i = 0; i < this.instances.length; ++i) {
                  var instance = this.instances[i];
                  instance.count = 0;
                }

                this.hasPendingModels = false;
              };

              return InstancedBuffer;
            }();
            InstancedBuffer._buffers = new Map();

            var AttrPool = new ObjectPool(PoolType.ATTRIBUTE, function (_, obj) {
              return obj || new Attribute();
            });
            var m4_1 = new Mat4();

            var _subModelPool = new Pool(function () {
              return new SubModel();
            }, 32);

            var shadowMapPatches = [{
              name: 'CC_RECEIVE_SHADOW',
              value: true
            }];
            var ModelType;

            (function (ModelType) {
              ModelType[ModelType["DEFAULT"] = 0] = "DEFAULT";
              ModelType[ModelType["SKINNING"] = 1] = "SKINNING";
              ModelType[ModelType["BAKED_SKINNING"] = 2] = "BAKED_SKINNING";
              ModelType[ModelType["BATCH_2D"] = 3] = "BATCH_2D";
              ModelType[ModelType["PARTICLE_BATCH"] = 4] = "PARTICLE_BATCH";
              ModelType[ModelType["LINE"] = 5] = "LINE";
            })(ModelType || (ModelType = exports('M', {})));

            function uploadMat4AsVec4x3(mat, v1, v2, v3) {
              v1[0] = mat.m00;
              v1[1] = mat.m01;
              v1[2] = mat.m02;
              v1[3] = mat.m12;
              v2[0] = mat.m04;
              v2[1] = mat.m05;
              v2[2] = mat.m06;
              v2[3] = mat.m13;
              v3[0] = mat.m08;
              v3[1] = mat.m09;
              v3[2] = mat.m10;
              v3[3] = mat.m14;
            }

            var lightmapSamplerHash = genSamplerHash([Filter.LINEAR, Filter.LINEAR, Filter.NONE, Address.CLAMP, Address.CLAMP, Address.CLAMP]);
            var lightmapSamplerWithMipHash = genSamplerHash([Filter.LINEAR, Filter.LINEAR, Filter.LINEAR, Address.CLAMP, Address.CLAMP, Address.CLAMP]);
            var Model = exports('i', function () {
              _createClass(Model, [{
                key: "subModels",
                get: function get() {
                  return this._subModels;
                }
              }, {
                key: "inited",
                get: function get() {
                  return this._inited;
                }
              }, {
                key: "worldBounds",
                get: function get() {
                  return this._worldBounds;
                }
              }, {
                key: "modelBounds",
                get: function get() {
                  return this._modelBounds;
                }
              }, {
                key: "localBuffer",
                get: function get() {
                  return this._localBuffer;
                }
              }, {
                key: "updateStamp",
                get: function get() {
                  return this._updateStamp;
                }
              }, {
                key: "isInstancingEnabled",
                get: function get() {
                  return this._instMatWorldIdx >= 0;
                }
              }, {
                key: "receiveShadow",
                get: function get() {
                  if (ModelPool.get(this._handle, ModelView.RECEIVE_SHADOW)) {
                    return true;
                  }

                  return false;
                },
                set: function set(val) {
                  ModelPool.set(this._handle, ModelView.RECEIVE_SHADOW, val ? 1 : 0);
                  this.onMacroPatchesStateChanged();
                }
              }, {
                key: "castShadow",
                get: function get() {
                  if (ModelPool.get(this._handle, ModelView.CAST_SHADOW)) {
                    return true;
                  }

                  return false;
                },
                set: function set(val) {
                  ModelPool.set(this._handle, ModelView.CAST_SHADOW, val ? 1 : 0);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._handle;
                }
              }, {
                key: "node",
                get: function get() {
                  return this._node;
                },
                set: function set(n) {
                  this._node = n;
                  ModelPool.set(this._handle, ModelView.NODE, n.handle);
                }
              }, {
                key: "transform",
                get: function get() {
                  return this._transform;
                },
                set: function set(n) {
                  this._transform = n;
                  ModelPool.set(this._handle, ModelView.TRANSFORM, n.handle);
                }
              }, {
                key: "visFlags",
                get: function get() {
                  return ModelPool.get(this._handle, ModelView.VIS_FLAGS);
                },
                set: function set(val) {
                  ModelPool.set(this._handle, ModelView.VIS_FLAGS, val);
                }
              }, {
                key: "enabled",
                get: function get() {
                  if (ModelPool.get(this._handle, ModelView.ENABLED)) {
                    return true;
                  }

                  return false;
                },
                set: function set(val) {
                  ModelPool.set(this._handle, ModelView.ENABLED, val ? 1 : 0);
                }
              }]);

              function Model() {
                this.type = ModelType.DEFAULT;
                this.scene = null;
                this.isDynamicBatching = false;
                this.instancedAttributes = {
                  buffer: null,
                  views: [],
                  attributes: []
                };
                this._worldBounds = null;
                this._modelBounds = null;
                this._subModels = [];
                this._node = null;
                this._transform = null;
                this._device = void 0;
                this._inited = false;
                this._descriptorSetCount = 1;
                this._updateStamp = -1;
                this._transformUpdated = true;
                this._handle = NULL_HANDLE;
                this._hWorldBounds = NULL_HANDLE;
                this._localData = new Float32Array(UBOLocal.COUNT);
                this._localBuffer = null;
                this._instMatWorldIdx = -1;
                this._lightmap = null;
                this._lightmapUVParam = new Vec4();
                this._device = legacyCC.director.root.device;
              }

              var _proto = Model.prototype;

              _proto.initialize = function initialize() {
                if (!this._inited) {
                  this._handle = ModelPool.alloc();
                  var hSubModelArray = SubModelArrayPool.alloc();
                  var hInstancedAttrArray = AttributeArrayPool.alloc();
                  ModelPool.set(this._handle, ModelView.INSTANCED_ATTR_ARRAY, hInstancedAttrArray);
                  ModelPool.set(this._handle, ModelView.SUB_MODEL_ARRAY, hSubModelArray);
                  ModelPool.set(this._handle, ModelView.VIS_FLAGS, Layers.Enum.NONE);
                  ModelPool.set(this._handle, ModelView.ENABLED, 1);
                  ModelPool.set(this._handle, ModelView.RECEIVE_SHADOW, 1);
                  ModelPool.set(this._handle, ModelView.CAST_SHADOW, 0);
                  this._inited = true;
                }
              };

              _proto.destroy = function destroy() {
                var subModels = this._subModels;

                for (var i = 0; i < subModels.length; i++) {
                  var subModel = this._subModels[i];
                  subModel.destroy();

                  _subModelPool.free(subModel);
                }

                if (this._localBuffer) {
                  this._localBuffer.destroy();

                  this._localBuffer = null;
                }

                this._worldBounds = null;
                this._modelBounds = null;
                this._subModels.length = 0;
                this._inited = false;
                this._transformUpdated = true;
                this._transform = null;
                this._node = null;
                this.isDynamicBatching = false;

                if (this._handle) {
                  var hSubModelArray = ModelPool.get(this._handle, ModelView.SUB_MODEL_ARRAY);
                  if (hSubModelArray) SubModelArrayPool.free(hSubModelArray);
                  var hOldBuffer = ModelPool.get(this._handle, ModelView.INSTANCED_BUFFER);
                  if (hOldBuffer) RawBufferPool.free(hOldBuffer);
                  var hAttrArray = ModelPool.get(this._handle, ModelView.INSTANCED_ATTR_ARRAY);
                  if (hAttrArray) freeHandleArray(hAttrArray, AttributeArrayPool, AttrPool);
                  ModelPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }

                if (this._hWorldBounds) {
                  AABBPool.free(this._hWorldBounds);
                  this._hWorldBounds = NULL_HANDLE;
                }
              };

              _proto.attachToScene = function attachToScene(scene) {
                this.scene = scene;
              };

              _proto.detachFromScene = function detachFromScene() {
                this.scene = null;
              };

              _proto.updateTransform = function updateTransform(stamp) {
                var node = this.transform;

                if (node.hasChangedFlags || node._dirtyFlags) {
                  node.updateWorldTransform();
                  this._transformUpdated = true;
                  var worldBounds = this._worldBounds;

                  if (this._modelBounds && worldBounds) {
                    this._modelBounds.transform(node._mat, node._pos, node._rot, node._scale, worldBounds);

                    AABBPool.setVec3(this._hWorldBounds, AABBView.CENTER, worldBounds.center);
                    AABBPool.setVec3(this._hWorldBounds, AABBView.HALF_EXTENSION, worldBounds.halfExtents);
                  }
                }
              };

              _proto.updateWorldBound = function updateWorldBound() {
                var node = this.transform;

                if (node !== null) {
                  node.updateWorldTransform();
                  this._transformUpdated = true;
                  var worldBounds = this._worldBounds;

                  if (this._modelBounds && worldBounds) {
                    this._modelBounds.transform(node._mat, node._pos, node._rot, node._scale, worldBounds);

                    AABBPool.setVec3(this._hWorldBounds, AABBView.CENTER, worldBounds.center);
                    AABBPool.setVec3(this._hWorldBounds, AABBView.HALF_EXTENSION, worldBounds.halfExtents);
                  }
                }
              };

              _proto.updateUBOs = function updateUBOs(stamp) {
                var subModels = this._subModels;

                for (var i = 0; i < subModels.length; i++) {
                  subModels[i].update();
                }

                this._updateStamp = stamp;

                if (!this._transformUpdated) {
                  return;
                }

                this._transformUpdated = false;
                var worldMatrix = this.transform._mat;
                var idx = this._instMatWorldIdx;

                if (idx >= 0) {
                  var attrs = this.instancedAttributes.views;
                  uploadMat4AsVec4x3(worldMatrix, attrs[idx], attrs[idx + 1], attrs[idx + 2]);
                } else if (this._localBuffer) {
                  Mat4.toArray(this._localData, worldMatrix, UBOLocal.MAT_WORLD_OFFSET);
                  Mat4.inverseTranspose(m4_1, worldMatrix);
                  Mat4.toArray(this._localData, m4_1, UBOLocal.MAT_WORLD_IT_OFFSET);

                  this._localBuffer.update(this._localData);
                }
              };

              _proto.createBoundingShape = function createBoundingShape(minPos, maxPos) {
                if (!minPos || !maxPos) {
                  return;
                }

                this._modelBounds = AABB.fromPoints(AABB.create(), minPos, maxPos);
                this._worldBounds = AABB.clone(this._modelBounds);

                if (this._hWorldBounds === NULL_HANDLE) {
                  this._hWorldBounds = AABBPool.alloc();
                  ModelPool.set(this._handle, ModelView.WORLD_BOUNDS, this._hWorldBounds);
                }

                AABBPool.setVec3(this._hWorldBounds, AABBView.CENTER, this._worldBounds.center);
                AABBPool.setVec3(this._hWorldBounds, AABBView.HALF_EXTENSION, this._worldBounds.halfExtents);
              };

              _proto.initSubModel = function initSubModel(idx, subMeshData, mat) {
                this.initialize();
                var isNewSubModel = false;

                if (this._subModels[idx] == null) {
                  this._subModels[idx] = _subModelPool.alloc();
                  isNewSubModel = true;
                } else {
                  this._subModels[idx].destroy();
                }

                this._subModels[idx].initialize(subMeshData, mat.passes, this.getMacroPatches(idx));

                this._subModels[idx].initPlanarShadowShader();

                this._updateAttributesAndBinding(idx);

                if (isNewSubModel) {
                  var hSubModelArray = ModelPool.get(this._handle, ModelView.SUB_MODEL_ARRAY);
                  SubModelArrayPool.assign(hSubModelArray, idx, this._subModels[idx].handle);
                }
              };

              _proto.setSubModelMesh = function setSubModelMesh(idx, subMesh) {
                if (!this._subModels[idx]) {
                  return;
                }

                this._subModels[idx].subMesh = subMesh;
              };

              _proto.setSubModelMaterial = function setSubModelMaterial(idx, mat) {
                if (!this._subModels[idx]) {
                  return;
                }

                this._subModels[idx].passes = mat.passes;

                this._updateAttributesAndBinding(idx);
              };

              _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
                var subModels = this._subModels;

                for (var i = 0; i < subModels.length; i++) {
                  subModels[i].onPipelineStateChanged();
                }
              };

              _proto.onMacroPatchesStateChanged = function onMacroPatchesStateChanged() {
                var subModels = this._subModels;

                for (var i = 0; i < subModels.length; i++) {
                  subModels[i].onMacroPatchesStateChanged(this.getMacroPatches(i));
                }
              };

              _proto.updateLightingmap = function updateLightingmap(texture, uvParam) {
                Vec4.toArray(this._localData, uvParam, UBOLocal.LIGHTINGMAP_UVPARAM);
                this._lightmap = texture;
                this._lightmapUVParam = uvParam;

                if (texture === null) {
                  texture = builtinResMgr.get('empty-texture');
                }

                var gfxTexture = texture.getGFXTexture();

                if (gfxTexture) {
                  var sampler = samplerLib.getSampler(this._device, texture.mipmaps.length > 1 ? lightmapSamplerWithMipHash : lightmapSamplerHash);
                  var subModels = this._subModels;

                  for (var i = 0; i < subModels.length; i++) {
                    var descriptorSet = subModels[i].descriptorSet;
                    descriptorSet.bindTexture(UNIFORM_LIGHTMAP_TEXTURE_BINDING, gfxTexture);
                    descriptorSet.bindSampler(UNIFORM_LIGHTMAP_TEXTURE_BINDING, sampler);
                    descriptorSet.update();
                  }
                }
              };

              _proto.getMacroPatches = function getMacroPatches(subModelIndex) {
                return this.receiveShadow ? shadowMapPatches : null;
              };

              _proto._updateAttributesAndBinding = function _updateAttributesAndBinding(subModelIndex) {
                var subModel = this._subModels[subModelIndex];

                if (!subModel) {
                  return;
                }

                this._initLocalDescriptors(subModelIndex);

                this._updateLocalDescriptors(subModelIndex, subModel.descriptorSet);

                var shader = ShaderPool.get(SubModelPool.get(subModel.handle, SubModelView.SHADER_0));

                this._updateInstancedAttributes(shader.attributes, subModel.passes[0]);
              };

              _proto._getInstancedAttributeIndex = function _getInstancedAttributeIndex(name) {
                var attributes = this.instancedAttributes.attributes;

                for (var i = 0; i < attributes.length; i++) {
                  if (attributes[i].name === name) {
                    return i;
                  }
                }

                return -1;
              };

              _proto._updateInstancedAttributes = function _updateInstancedAttributes(attributes, pass) {
                if (!pass.device.hasFeature(Feature.INSTANCED_ARRAYS)) {
                  return;
                }

                var hOldBuffer = ModelPool.get(this._handle, ModelView.INSTANCED_BUFFER);
                if (hOldBuffer) RawBufferPool.free(hOldBuffer);
                var hAttrArray = ModelPool.get(this._handle, ModelView.INSTANCED_ATTR_ARRAY);
                if (hAttrArray) freeHandleArray(hAttrArray, AttributeArrayPool, AttrPool, false);
                var size = 0;

                for (var j = 0; j < attributes.length; j++) {
                  var attribute = attributes[j];

                  if (!attribute.isInstanced) {
                    continue;
                  }

                  size += FormatInfos[attribute.format].size;
                }

                var hBuffer = RawBufferPool.alloc(size);
                var buffer = RawBufferPool.getBuffer(hBuffer);
                ModelPool.set(this._handle, ModelView.INSTANCED_BUFFER, hBuffer);
                var attrs = this.instancedAttributes;
                attrs.buffer = new Uint8Array(buffer);
                attrs.views.length = attrs.attributes.length = 0;
                var offset = 0;

                for (var _j = 0; _j < attributes.length; _j++) {
                  var _attribute = attributes[_j];

                  if (!_attribute.isInstanced) {
                    continue;
                  }

                  var hAttr = AttrPool.alloc();
                  var attr = AttrPool.get(hAttr);
                  attr.format = _attribute.format;
                  attr.name = _attribute.name;
                  attr.isNormalized = _attribute.isNormalized;
                  attr.location = _attribute.location;
                  attrs.attributes.push(attr);
                  AttributeArrayPool.push(hAttrArray, hAttr);
                  var info = FormatInfos[_attribute.format];
                  attrs.views.push(new (getTypedArrayConstructor(info))(buffer, offset, info.count));
                  offset += info.size;
                }

                if (pass.batchingScheme === BatchingSchemes.INSTANCING) {
                  InstancedBuffer.get(pass).destroy();
                }

                this._instMatWorldIdx = this._getInstancedAttributeIndex(INST_MAT_WORLD);
                this._transformUpdated = true;
              };

              _proto._initLocalDescriptors = function _initLocalDescriptors(subModelIndex) {
                if (!this._localBuffer) {
                  this._localBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.UNIFORM | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, UBOLocal.SIZE, UBOLocal.SIZE));
                }
              };

              _proto._updateLocalDescriptors = function _updateLocalDescriptors(subModelIndex, descriptorSet) {
                if (this._localBuffer) descriptorSet.bindBuffer(UBOLocal.BINDING, this._localBuffer);
              };

              return Model;
            }());

            var ShadowType = exports('j', Enum({
              Planar: 0,
              ShadowMap: 1
            }));
            var PCFType = exports('P', Enum({
              HARD: 0,
              FILTER_X5: 1,
              FILTER_X9: 2,
              FILTER_X25: 3
            }));
            var SHADOW_TYPE_NONE = ShadowType.ShadowMap + 1;
            var Shadows = exports('k', function () {
              _createClass(Shadows, [{
                key: "enabled",
                get: function get() {
                  if (ShadowsPool.get(this._handle, ShadowsView.ENABLE)) {
                    return true;
                  }

                  return false;
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.ENABLE, val ? 1 : 0);
                  if (!val) ShadowsPool.set(this._handle, ShadowsView.TYPE, SHADOW_TYPE_NONE);
                  this.activate();
                }
              }, {
                key: "normal",
                get: function get() {
                  return this._normal;
                },
                set: function set(val) {
                  Vec3.copy(this._normal, val);
                  ShadowsPool.setVec3(this._handle, ShadowsView.NORMAL, this._normal);
                }
              }, {
                key: "distance",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.DISTANCE);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.DISTANCE, val);
                }
              }, {
                key: "shadowColor",
                get: function get() {
                  return this._shadowColor;
                },
                set: function set(color) {
                  this._shadowColor = color;
                  ShadowsPool.setVec4(this._handle, ShadowsView.COLOR, color);
                }
              }, {
                key: "type",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.TYPE);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.TYPE, this.enabled ? val : SHADOW_TYPE_NONE);
                  this.activate();
                }
              }, {
                key: "near",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.NEAR);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.NEAR, val);
                }
              }, {
                key: "far",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.FAR);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.FAR, val);
                }
              }, {
                key: "aspect",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.ASPECT);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.ASPECT, val);
                }
              }, {
                key: "orthoSize",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.ORTHO_SIZE);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.ORTHO_SIZE, val);
                }
              }, {
                key: "size",
                get: function get() {
                  return this._size;
                },
                set: function set(val) {
                  this._size = val;
                  ShadowsPool.setVec2(this._handle, ShadowsView.SIZE, this._size);
                }
              }, {
                key: "pcf",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.PCF_TYPE);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.PCF_TYPE, val);
                }
              }, {
                key: "shadowMapDirty",
                get: function get() {
                  if (ShadowsPool.get(this._handle, ShadowsView.SHADOW_MAP_DIRTY)) {
                    return true;
                  }

                  return false;
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.SHADOW_MAP_DIRTY, val ? 1 : 0);
                }
              }, {
                key: "bias",
                get: function get() {
                  return ShadowsPool.get(this._handle, ShadowsView.BIAS);
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.BIAS, val);
                }
              }, {
                key: "autoAdapt",
                get: function get() {
                  if (ShadowsPool.get(this._handle, ShadowsView.AUTO_ADAPT)) {
                    return true;
                  }

                  return false;
                },
                set: function set(val) {
                  ShadowsPool.set(this._handle, ShadowsView.AUTO_ADAPT, val ? 1 : 0);
                }
              }, {
                key: "matLight",
                get: function get() {
                  return this._matLight;
                }
              }, {
                key: "material",
                get: function get() {
                  return this._material;
                }
              }, {
                key: "instancingMaterial",
                get: function get() {
                  return this._instancingMaterial;
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._handle;
                }
              }]);

              function Shadows() {
                this.sphere = new Sphere(0.0, 0.0, 0.0, 0.01);
                this.maxReceived = 4;
                this._normal = new Vec3(0, 1, 0);
                this._shadowColor = new Color(0, 0, 0, 76);
                this._matLight = new Mat4();
                this._material = null;
                this._instancingMaterial = null;
                this._size = new Vec2(512, 512);
                this._handle = NULL_HANDLE;
                this._handle = ShadowsPool.alloc();
              }

              var _proto = Shadows.prototype;

              _proto.getPlanarShader = function getPlanarShader(patches) {
                if (!this._material) {
                  this._material = new Material();

                  this._material.initialize({
                    effectName: 'planar-shadow'
                  });

                  ShadowsPool.set(this._handle, ShadowsView.PLANAR_PASS, this._material.passes[0].handle);
                }

                return this._material.passes[0].getShaderVariant(patches);
              };

              _proto.initialize = function initialize(shadowsInfo) {
                ShadowsPool.set(this._handle, ShadowsView.TYPE, shadowsInfo.enabled ? shadowsInfo.type : SHADOW_TYPE_NONE);
                ShadowsPool.set(this._handle, ShadowsView.NEAR, shadowsInfo.near);
                ShadowsPool.set(this._handle, ShadowsView.FAR, shadowsInfo.far);
                ShadowsPool.set(this._handle, ShadowsView.ASPECT, shadowsInfo.aspect);
                ShadowsPool.set(this._handle, ShadowsView.ORTHO_SIZE, shadowsInfo.orthoSize);
                this._size = shadowsInfo.shadowMapSize;
                ShadowsPool.setVec2(this._handle, ShadowsView.SIZE, this._size);
                ShadowsPool.set(this._handle, ShadowsView.PCF_TYPE, shadowsInfo.pcf);
                Vec3.copy(this._normal, shadowsInfo.normal);
                ShadowsPool.setVec3(this._handle, ShadowsView.NORMAL, this._normal);
                ShadowsPool.set(this._handle, ShadowsView.DISTANCE, shadowsInfo.distance);

                this._shadowColor.set(shadowsInfo.shadowColor);

                ShadowsPool.setVec4(this._handle, ShadowsView.COLOR, this._shadowColor);
                ShadowsPool.set(this._handle, ShadowsView.BIAS, shadowsInfo.bias);
                ShadowsPool.set(this._handle, ShadowsView.ENABLE, shadowsInfo.enabled ? 1 : 0);
                this.maxReceived = shadowsInfo.maxReceived;
                ShadowsPool.set(this._handle, ShadowsView.AUTO_ADAPT, shadowsInfo.autoAdapt ? 1 : 0);
              };

              _proto.activate = function activate() {
                if (this.enabled) {
                  if (this.type === ShadowType.ShadowMap) {
                    this._updatePipeline();
                  } else {
                    this._updatePlanarInfo();
                  }
                } else {
                  var root = legacyCC.director.root;
                  var pipeline = root.pipeline;
                  pipeline.macros.CC_RECEIVE_SHADOW = 0;
                  root.onGlobalPipelineStateChanged();
                }
              };

              _proto._updatePlanarInfo = function _updatePlanarInfo() {
                if (!this._material) {
                  this._material = new Material();

                  this._material.initialize({
                    effectName: 'planar-shadow'
                  });

                  ShadowsPool.set(this._handle, ShadowsView.PLANAR_PASS, this._material.passes[0].handle);
                }

                if (!this._instancingMaterial) {
                  this._instancingMaterial = new Material();

                  this._instancingMaterial.initialize({
                    effectName: 'planar-shadow',
                    defines: {
                      USE_INSTANCING: true
                    }
                  });

                  ShadowsPool.set(this._handle, ShadowsView.INSTANCE_PASS, this._instancingMaterial.passes[0].handle);
                }

                var root = legacyCC.director.root;
                var pipeline = root.pipeline;
                pipeline.macros.CC_RECEIVE_SHADOW = 0;
                root.onGlobalPipelineStateChanged();
              };

              _proto._updatePipeline = function _updatePipeline() {
                var root = legacyCC.director.root;
                var pipeline = root.pipeline;
                pipeline.macros.CC_RECEIVE_SHADOW = 1;
                root.onGlobalPipelineStateChanged();
              };

              _proto.destroy = function destroy() {
                if (this._material) {
                  this._material.destroy();
                }

                if (this._instancingMaterial) {
                  this._instancingMaterial.destroy();
                }

                if (this._handle) {
                  ShadowsPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }

                this.sphere.destroy();
              };

              return Shadows;
            }());
            Shadows.MAX_FAR = 2000.0;
            Shadows.COEFFICIENT_OF_EXPANSION = 2.0 * Math.sqrt(3.0);
            legacyCC.Shadows = Shadows;

            var PassInstance = exports('r', function (_Pass) {
              _inheritsLoose(PassInstance, _Pass);

              _createClass(PassInstance, [{
                key: "parent",
                get: function get() {
                  return this._parent;
                }
              }]);

              function PassInstance(parent, owner) {
                var _this;

                _this = _Pass.call(this, parent.root) || this;
                _this._parent = void 0;
                _this._owner = void 0;
                _this._dontNotify = false;
                _this._parent = parent;
                _this._owner = owner;

                _this._doInit(_this._parent, true);

                for (var i = 0; i < _this._shaderInfo.blocks.length; i++) {
                  var u = _this._shaderInfo.blocks[i];
                  var block = _this._blocks[u.binding];
                  var parentBlock = _this._parent.blocks[u.binding];
                  block.set(parentBlock);
                }

                _this._rootBufferDirty = true;
                var paren = _this._parent;

                for (var _i = 0; _i < _this._shaderInfo.samplers.length; _i++) {
                  var _u = _this._shaderInfo.samplers[_i];

                  for (var j = 0; j < _u.count; j++) {
                    var sampler = paren._descriptorSet.getSampler(_u.binding, j);

                    var texture = paren._descriptorSet.getTexture(_u.binding, j);

                    _this._descriptorSet.bindSampler(_u.binding, sampler, j);

                    _this._descriptorSet.bindTexture(_u.binding, texture, j);
                  }
                }

                _Pass.prototype.tryCompile.call(_assertThisInitialized(_this));

                return _this;
              }

              var _proto = PassInstance.prototype;

              _proto.overridePipelineStates = function overridePipelineStates(original, overrides) {
                this._bs.reset();

                this._rs.reset();

                this._dss.reset();

                Pass.fillPipelineInfo(this, original);
                Pass.fillPipelineInfo(this, overrides);

                this._onStateChange();
              };

              _proto.tryCompile = function tryCompile(defineOverrides) {
                if (defineOverrides) {
                  if (!overrideMacros(this._defines, defineOverrides)) {
                    return false;
                  }
                }

                var res = _Pass.prototype.tryCompile.call(this);

                this._onStateChange();

                return res;
              };

              _proto.beginChangeStatesSilently = function beginChangeStatesSilently() {
                this._dontNotify = true;
              };

              _proto.endChangeStatesSilently = function endChangeStatesSilently() {
                this._dontNotify = false;
              };

              _proto._syncBatchingScheme = function _syncBatchingScheme() {
                this._defines.USE_BATCHING = this._defines.USE_INSTANCING = false;
                PassPool.set(this._handle, PassView.BATCHING_SCHEME, 0);
              };

              _proto._onStateChange = function _onStateChange() {
                PassPool.set(this._handle, PassView.HASH, Pass.getPassHash(this, this._hShaderDefault));

                this._owner.onPassStateChange(this._dontNotify);
              };

              return PassInstance;
            }(Pass));

            var MaterialInstance = exports('q', function (_Material) {
              _inheritsLoose(MaterialInstance, _Material);

              _createClass(MaterialInstance, [{
                key: "parent",
                get: function get() {
                  return this._parent;
                }
              }, {
                key: "owner",
                get: function get() {
                  return this._owner;
                }
              }]);

              function MaterialInstance(info) {
                var _this;

                _this = _Material.call(this) || this;
                _this._passes = [];
                _this._parent = void 0;
                _this._owner = void 0;
                _this._subModelIdx = 0;
                _this._parent = info.parent;
                _this._owner = info.owner || null;
                _this._subModelIdx = info.subModelIdx || 0;

                _this.copy(_this._parent);

                return _this;
              }

              var _proto = MaterialInstance.prototype;

              _proto.recompileShaders = function recompileShaders(overrides, passIdx) {
                if (!this._passes || !this.effectAsset) {
                  return;
                }

                if (passIdx === undefined) {
                  for (var _iterator = _createForOfIteratorHelperLoose(this._passes), _step; !(_step = _iterator()).done;) {
                    var pass = _step.value;
                    pass.tryCompile(overrides);
                  }
                } else {
                  this._passes[passIdx].tryCompile(overrides);
                }
              };

              _proto.overridePipelineStates = function overridePipelineStates(overrides, passIdx) {
                if (!this._passes || !this.effectAsset) {
                  return;
                }

                var passInfos = this.effectAsset.techniques[this.technique].passes;

                if (passIdx === undefined) {
                  for (var i = 0; i < this._passes.length; i++) {
                    var pass = this._passes[i];
                    var state = this._states[i] || (this._states[i] = {});

                    for (var key in overrides) {
                      state[key] = overrides[key];
                    }

                    pass.overridePipelineStates(passInfos[pass.passIndex], state);
                  }
                } else {
                  var _state = this._states[passIdx] || (this._states[passIdx] = {});

                  for (var _key in overrides) {
                    _state[_key] = overrides[_key];
                  }

                  this._passes[passIdx].overridePipelineStates(passInfos[passIdx], _state);
                }
              };

              _proto.destroy = function destroy() {
                this._doDestroy();

                return true;
              };

              _proto.onPassStateChange = function onPassStateChange(dontNotify) {
                this._hash = Material.getHash(this);

                if (!dontNotify && this._owner) {
                  this._owner._onRebuildPSO(this._subModelIdx, this);
                }
              };

              _proto._createPasses = function _createPasses() {
                var passes = [];
                var parentPasses = this._parent.passes;

                if (!parentPasses) {
                  return passes;
                }

                for (var k = 0; k < parentPasses.length; ++k) {
                  passes.push(new PassInstance(parentPasses[k], this));
                }

                return passes;
              };

              return MaterialInstance;
            }(Material));

            var skybox_mesh = null;
            var skybox_material = null;
            var Skybox = exports('l', function () {
              _createClass(Skybox, [{
                key: "model",
                get: function get() {
                  return this._model;
                }
              }, {
                key: "enabled",
                get: function get() {
                  return SkyboxPool.get(this._handle, SkyboxView.ENABLE);
                },
                set: function set(val) {
                  if (val) this.activate();else this._updatePipeline();
                  SkyboxPool.set(this._handle, SkyboxView.ENABLE, val ? 1 : 0);
                }
              }, {
                key: "useIBL",
                get: function get() {
                  return SkyboxPool.get(this._handle, SkyboxView.USE_IBL);
                },
                set: function set(val) {
                  SkyboxPool.set(this._handle, SkyboxView.USE_IBL, val ? 1 : 0);

                  this._updatePipeline();
                }
              }, {
                key: "isRGBE",
                get: function get() {
                  return SkyboxPool.get(this._handle, SkyboxView.IS_RGBE);
                },
                set: function set(val) {
                  if (val) {
                    if (skybox_material) {
                      skybox_material.recompileShaders({
                        USE_RGBE_CUBEMAP: val
                      });
                    }

                    if (this._model) {
                      this._model.setSubModelMaterial(0, skybox_material);
                    }
                  }

                  SkyboxPool.set(this._handle, SkyboxView.IS_RGBE, val ? 1 : 0);

                  this._updatePipeline();
                }
              }, {
                key: "envmap",
                get: function get() {
                  return this._envmap;
                },
                set: function set(val) {
                  this._envmap = val || this._default;

                  if (this._envmap) {
                    legacyCC.director.root.pipeline.ambient.albedoArray[3] = this._envmap.mipmapLevel;

                    this._updateGlobalBinding();
                  }
                }
              }, {
                key: "handle",
                get: function get() {
                  return this._handle;
                }
              }]);

              function Skybox() {
                this._envmap = null;
                this._globalDescriptorSet = null;
                this._model = null;
                this._default = null;
                this._handle = NULL_HANDLE;
                this._handle = SkyboxPool.alloc();
              }

              var _proto = Skybox.prototype;

              _proto.initialize = function initialize(skyboxInfo) {
                SkyboxPool.set(this._handle, SkyboxView.ENABLE, skyboxInfo.enabled ? 1 : 0);
                SkyboxPool.set(this._handle, SkyboxView.USE_IBL, skyboxInfo.useIBL ? 1 : 0);
                SkyboxPool.set(this._handle, SkyboxView.IS_RGBE, skyboxInfo.isRGBE ? 1 : 0);
                this._envmap = skyboxInfo.envmap;
              };

              _proto.activate = function activate() {
                var pipeline = legacyCC.director.root.pipeline;
                this._globalDescriptorSet = pipeline.descriptorSet;
                this._default = builtinResMgr.get('default-cube-texture');

                if (!this._model) {
                  this._model = legacyCC.director.root.createModel(legacyCC.renderer.scene.Model);

                  this._model._initLocalDescriptors = function () {};
                }

                SkyboxPool.set(this._handle, SkyboxView.MODEL, this._model.handle);

                if (!this._envmap) {
                  this._envmap = this._default;
                }

                pipeline.ambient.groundAlbedo[3] = this._envmap.mipmapLevel;

                if (!skybox_material) {
                  var mat = new Material();
                  mat.initialize({
                    effectName: 'skybox',
                    defines: {
                      USE_RGBE_CUBEMAP: this.isRGBE
                    }
                  });
                  skybox_material = new MaterialInstance({
                    parent: mat
                  });
                } else {
                  skybox_material.recompileShaders({
                    USE_RGBE_CUBEMAP: this.isRGBE
                  });
                }

                if (this.enabled) {
                  if (!skybox_mesh) {
                    skybox_mesh = legacyCC.utils.createMesh(legacyCC.primitives.box({
                      width: 2,
                      height: 2,
                      length: 2
                    }));
                  }

                  this._model.initSubModel(0, skybox_mesh.renderingSubMeshes[0], skybox_material);
                }

                this._updateGlobalBinding();

                this._updatePipeline();
              };

              _proto._updatePipeline = function _updatePipeline() {
                var value = this.useIBL ? this.isRGBE ? 2 : 1 : 0;
                var root = legacyCC.director.root;
                var pipeline = root.pipeline;
                var current = pipeline.macros.CC_USE_IBL;

                if (current === value) {
                  return;
                }

                pipeline.macros.CC_USE_IBL = value;
                root.onGlobalPipelineStateChanged();
              };

              _proto._updateGlobalBinding = function _updateGlobalBinding() {
                var texture = this.envmap.getGFXTexture();
                var sampler = samplerLib.getSampler(legacyCC.director._device, this.envmap.getSamplerHash());

                this._globalDescriptorSet.bindSampler(UNIFORM_ENVIRONMENT_BINDING, sampler);

                this._globalDescriptorSet.bindTexture(UNIFORM_ENVIRONMENT_BINDING, texture);
              };

              _proto.destroy = function destroy() {
                if (this._handle) {
                  SkyboxPool.free(this._handle);
                  this._handle = NULL_HANDLE;
                }
              };

              return Skybox;
            }());
            legacyCC.Skybox = Skybox;

            var SphereLight = exports('m', function (_Light) {
              _inheritsLoose(SphereLight, _Light);

              _createClass(SphereLight, [{
                key: "position",
                get: function get() {
                  return this._pos;
                }
              }, {
                key: "size",
                set: function set(size) {
                  LightPool.set(this._handle, LightView.SIZE, size);
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.SIZE);
                }
              }, {
                key: "range",
                set: function set(range) {
                  LightPool.set(this._handle, LightView.RANGE, range);
                  this._needUpdate = true;
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.RANGE);
                }
              }, {
                key: "luminance",
                set: function set(lum) {
                  LightPool.set(this._handle, LightView.ILLUMINANCE, lum);
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.ILLUMINANCE);
                }
              }, {
                key: "aabb",
                get: function get() {
                  return this._aabb;
                }
              }]);

              function SphereLight() {
                var _this;

                _this = _Light.call(this) || this;
                _this._needUpdate = false;
                _this._pos = void 0;
                _this._aabb = void 0;
                _this._hAABB = NULL_HANDLE;
                _this._aabb = AABB.create();
                _this._pos = new Vec3();
                return _this;
              }

              var _proto = SphereLight.prototype;

              _proto.initialize = function initialize() {
                _Light.prototype.initialize.call(this);

                this._hAABB = AABBPool.alloc();
                var size = 0.15;
                LightPool.set(this._handle, LightView.TYPE, LightType.SPHERE);
                LightPool.set(this._handle, LightView.SIZE, size);
                LightPool.set(this._handle, LightView.RANGE, 1.0);
                LightPool.set(this._handle, LightView.AABB, this._hAABB);
                LightPool.set(this._handle, LightView.ILLUMINANCE, 1700 / nt2lm(size));
              };

              _proto.update = function update() {
                if (this._node && (this._node.hasChangedFlags || this._needUpdate)) {
                  this._node.getWorldPosition(this._pos);

                  var range = LightPool.get(this._handle, LightView.RANGE);
                  AABB.set(this._aabb, this._pos.x, this._pos.y, this._pos.z, range, range, range);
                  this._needUpdate = false;
                  LightPool.setVec3(this._handle, LightView.POSITION, this._pos);
                  AABBPool.setVec3(this._hAABB, AABBView.CENTER, this._aabb.center);
                  AABBPool.setVec3(this._hAABB, AABBView.HALF_EXTENSION, this._aabb.halfExtents);
                }
              };

              _proto.destroy = function destroy() {
                if (this._hAABB) {
                  AABBPool.free(this._hAABB);
                  this._hAABB = NULL_HANDLE;
                }

                return _Light.prototype.destroy.call(this);
              };

              return SphereLight;
            }(Light));

            var _forward$1 = new Vec3(0, 0, -1);

            var _qt = new Quat();

            var _matView = new Mat4();

            var _matProj = new Mat4();

            var _matViewProj = new Mat4();

            var _matViewProjInv = new Mat4();

            var SpotLight = exports('o', function (_Light) {
              _inheritsLoose(SpotLight, _Light);

              _createClass(SpotLight, [{
                key: "position",
                get: function get() {
                  return this._pos;
                }
              }, {
                key: "size",
                set: function set(size) {
                  LightPool.set(this._handle, LightView.SIZE, size);
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.SIZE);
                }
              }, {
                key: "range",
                set: function set(range) {
                  this._range = range;
                  LightPool.set(this._handle, LightView.RANGE, range);
                  this._needUpdate = true;
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.RANGE);
                }
              }, {
                key: "luminance",
                set: function set(lum) {
                  LightPool.set(this._handle, LightView.ILLUMINANCE, lum);
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.ILLUMINANCE);
                }
              }, {
                key: "direction",
                get: function get() {
                  return this._dir;
                }
              }, {
                key: "spotAngle",
                get: function get() {
                  return LightPool.get(this._handle, LightView.SPOT_ANGLE);
                },
                set: function set(val) {
                  this._angle = val;
                  LightPool.set(this._handle, LightView.SPOT_ANGLE, Math.cos(val * 0.5));
                  this._needUpdate = true;
                }
              }, {
                key: "aspect",
                set: function set(val) {
                  LightPool.set(this._handle, LightView.ASPECT, val);
                  this._needUpdate = true;
                },
                get: function get() {
                  return LightPool.get(this._handle, LightView.ASPECT);
                }
              }, {
                key: "aabb",
                get: function get() {
                  return this._aabb;
                }
              }, {
                key: "frustum",
                get: function get() {
                  return this._frustum;
                }
              }]);

              function SpotLight() {
                var _this;

                _this = _Light.call(this) || this;
                _this._dir = new Vec3(1.0, -1.0, -1.0);
                _this._range = 5.0;
                _this._spotAngle = Math.cos(Math.PI / 6);
                _this._pos = void 0;
                _this._aabb = void 0;
                _this._frustum = void 0;
                _this._angle = 0;
                _this._needUpdate = false;
                _this._hAABB = NULL_HANDLE;
                _this._hFrustum = NULL_HANDLE;
                _this._aabb = AABB.create();
                _this._frustum = Frustum.create();
                _this._pos = new Vec3();
                return _this;
              }

              var _proto = SpotLight.prototype;

              _proto.initialize = function initialize() {
                _Light.prototype.initialize.call(this);

                this._hAABB = AABBPool.alloc();
                this._hFrustum = FrustumPool.alloc();
                var size = 0.15;
                LightPool.set(this._handle, LightView.TYPE, LightType.SPOT);
                LightPool.set(this._handle, LightView.SIZE, size);
                LightPool.set(this._handle, LightView.AABB, this._hAABB);
                LightPool.set(this._handle, LightView.ILLUMINANCE, 1700 / nt2lm(size));
                LightPool.set(this._handle, LightView.RANGE, Math.cos(Math.PI / 6));
                LightPool.set(this._handle, LightView.ASPECT, 1.0);
                LightPool.setVec3(this._handle, LightView.DIRECTION, this._dir);
              };

              _proto.update = function update() {
                if (this._node && (this._node.hasChangedFlags || this._needUpdate)) {
                  this._node.getWorldPosition(this._pos);

                  Vec3.transformQuat(this._dir, _forward$1, this._node.getWorldRotation(_qt));
                  Vec3.normalize(this._dir, this._dir);
                  LightPool.setVec3(this._handle, LightView.DIRECTION, this._dir);
                  AABB.set(this._aabb, this._pos.x, this._pos.y, this._pos.z, this._range, this._range, this._range);

                  this._node.getWorldRT(_matView);

                  Mat4.invert(_matView, _matView);
                  Mat4.perspective(_matProj, this._angle, 1.0, 0.001, this._range);
                  Mat4.multiply(_matViewProj, _matProj, _matView);

                  this._frustum.update(_matViewProj, _matViewProjInv);

                  this._needUpdate = false;
                  LightPool.setVec3(this._handle, LightView.POSITION, this._pos);
                  AABBPool.setVec3(this._hAABB, AABBView.CENTER, this._aabb.center);
                  AABBPool.setVec3(this._hAABB, AABBView.HALF_EXTENSION, this._aabb.halfExtents);
                  recordFrustumToSharedMemory(this._hFrustum, this._frustum);
                }
              };

              _proto.destroy = function destroy() {
                if (this._hAABB) {
                  AABBPool.free(this._hAABB);
                  this._hAABB = NULL_HANDLE;
                }

                if (this._hFrustum) {
                  FrustumPool.free(this._hFrustum);
                  this._hFrustum = NULL_HANDLE;
                }

                return _Light.prototype.destroy.call(this);
              };

              return SpotLight;
            }(Light));

            var NodeUIProperties = function () {
              _createClass(NodeUIProperties, [{
                key: "uiTransformComp",
                get: function get() {
                  if (!this._uiTransformComp) {
                    this._uiTransformComp = this._node.getComponent('cc.UITransform');
                  }

                  return this._uiTransformComp;
                },
                set: function set(value) {
                  this._uiTransformComp = value;
                }
              }, {
                key: "uiComp",
                get: function get() {
                  return this._uiComp;
                },
                set: function set(comp) {
                  if (this._uiComp && comp) {
                    warnID(12002);
                    return;
                  }

                  this._uiComp = comp;
                }
              }]);

              function NodeUIProperties(node) {
                this._uiComp = null;
                this.opacity = 1;
                this._uiTransformComp = null;
                this._node = void 0;
                this._node = node;
              }

              return NodeUIProperties;
            }();

            var Destroying = CCObject.Flags.Destroying;
            function baseNodePolyfill(BaseNode) {

              {
                get(BaseNode.prototype, ' INFO ', function () {
                  var path = '';
                  var node = this;

                  while (node && !(node instanceof legacyCC.Scene)) {
                    if (path) {
                      path = node.name + "/" + path;
                    } else {
                      path = node.name;
                    }

                    node = node._parent;
                  }

                  return this.name + ", path: " + path;
                });
              }
            }

            var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _temp;
            var Destroying$1 = CCObject.Flags.Destroying;
            var DontDestroy = CCObject.Flags.DontDestroy;
            var Deactivating = CCObject.Flags.Deactivating;
            var TRANSFORM_ON = 1 << 0;
            var idGenerator = new IDGenerator('Node');

            function getConstructor(typeOrClassName) {
              if (!typeOrClassName) {
                errorID(3804);
                return null;
              }

              if (typeof typeOrClassName === 'string') {
                return getClassByName(typeOrClassName);
              }

              return typeOrClassName;
            }

            var BaseNode = exports('B', (_dec = ccclass('cc.BaseNode'), _dec(_class = (_class2 = (_temp = _class3 = function (_CCObject) {
              _inheritsLoose(BaseNode, _CCObject);

              BaseNode._setScene = function _setScene(node) {
                node._updateScene();
              };

              BaseNode._findComponent = function _findComponent(node, constructor) {
                var cls = constructor;
                var comps = node._components;

                if (cls._sealed) {
                  for (var i = 0; i < comps.length; ++i) {
                    var comp = comps[i];

                    if (comp.constructor === constructor) {
                      return comp;
                    }
                  }
                } else {
                  for (var _i = 0; _i < comps.length; ++_i) {
                    var _comp = comps[_i];

                    if (_comp instanceof constructor) {
                      return _comp;
                    }
                  }
                }

                return null;
              };

              BaseNode._findComponents = function _findComponents(node, constructor, components) {
                var cls = constructor;
                var comps = node._components;

                if (cls._sealed) {
                  for (var i = 0; i < comps.length; ++i) {
                    var comp = comps[i];

                    if (comp.constructor === constructor) {
                      components.push(comp);
                    }
                  }
                } else {
                  for (var _i2 = 0; _i2 < comps.length; ++_i2) {
                    var _comp2 = comps[_i2];

                    if (_comp2 instanceof constructor) {
                      components.push(_comp2);
                    }
                  }
                }
              };

              BaseNode._findChildComponent = function _findChildComponent(children, constructor) {
                for (var i = 0; i < children.length; ++i) {
                  var node = children[i];

                  var comp = BaseNode._findComponent(node, constructor);

                  if (comp) {
                    return comp;
                  }

                  if (node._children.length > 0) {
                    comp = BaseNode._findChildComponent(node._children, constructor);

                    if (comp) {
                      return comp;
                    }
                  }
                }

                return null;
              };

              BaseNode._findChildComponents = function _findChildComponents(children, constructor, components) {
                for (var i = 0; i < children.length; ++i) {
                  var node = children[i];

                  BaseNode._findComponents(node, constructor, components);

                  if (node._children.length > 0) {
                    BaseNode._findChildComponents(node._children, constructor, components);
                  }
                }
              };

              var _proto = BaseNode.prototype;

              _proto._updateScene = function _updateScene() {
                if (this._parent == null) {
                  error('Node %s(%s) has not attached to a scene.', this.name, this.uuid);
                } else {
                  this._scene = this._parent._scene;
                }
              };

              _createClass(BaseNode, [{
                key: "components",
                get: function get() {
                  return this._components;
                }
              }, {
                key: "_persistNode",
                get: function get() {
                  return (this._objFlags & DontDestroy) > 0;
                },
                set: function set(value) {
                  if (value) {
                    this._objFlags |= DontDestroy;
                  } else {
                    this._objFlags &= ~DontDestroy;
                  }
                }
              }, {
                key: "name",
                get: function get() {
                  return this._name;
                },
                set: function set(value) {
                  if ( value.indexOf('/') !== -1) {
                    errorID(1632);
                    return;
                  }

                  this._name = value;
                }
              }, {
                key: "uuid",
                get: function get() {
                  return this._id;
                }
              }, {
                key: "children",
                get: function get() {
                  return this._children;
                }
              }, {
                key: "active",
                get: function get() {
                  return this._active;
                },
                set: function set(isActive) {
                  if (this._active !== isActive) {
                    this._active = isActive;
                    var parent = this._parent;

                    if (parent) {
                      var couldActiveInScene = parent._activeInHierarchy;

                      if (couldActiveInScene) {
                        legacyCC.director._nodeActivator.activateNode(this, isActive);
                      }
                    }
                  }
                }
              }, {
                key: "activeInHierarchy",
                get: function get() {
                  return this._activeInHierarchy;
                }
              }, {
                key: "parent",
                get: function get() {
                  return this._parent;
                },
                set: function set(value) {
                  this.setParent(value);
                }
              }, {
                key: "scene",
                get: function get() {
                  return this._scene;
                }
              }, {
                key: "eventProcessor",
                get: function get() {
                  return this._eventProcessor;
                }
              }]);

              function BaseNode(name) {
                var _this;

                _this = _CCObject.call(this, name) || this;

                _initializerDefineProperty(_this, "_parent", _descriptor, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_children", _descriptor2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_active", _descriptor3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_components", _descriptor4, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_prefab", _descriptor5, _assertThisInitialized(_this));

                _this._scene = null;
                _this._activeInHierarchy = false;
                _this._id = idGenerator.getNewId();
                _this._name = void 0;
                _this._eventProcessor = new legacyCC.NodeEventProcessor(_assertThisInitialized(_this));
                _this._eventMask = 0;
                _this._siblingIndex = 0;
                _this._registerIfAttached =  undefined ;
                _this._name = name !== undefined ? name : 'New Node';
                return _this;
              }

              _proto.attr = function attr(attrs) {
                mixin(this, attrs);
              };

              _proto.getParent = function getParent() {
                return this._parent;
              };

              _proto.setParent = function setParent(value, keepWorldTransform) {
                if (keepWorldTransform === void 0) {
                  keepWorldTransform = false;
                }

                if (this._parent === value) {
                  return;
                }

                var oldParent = this._parent;
                var newParent = value;

                if ( oldParent && oldParent._objFlags & Deactivating) {
                  errorID(3821);
                }

                this._parent = newParent;
                this._siblingIndex = 0;

                this._onSetParent(oldParent, keepWorldTransform);

                if (this.emit) {
                  this.emit(SystemEventType.PARENT_CHANGED, oldParent);
                }

                if (oldParent) {
                  if (!(oldParent._objFlags & Destroying$1)) {
                    var removeAt = oldParent._children.indexOf(this);

                    if ( removeAt < 0) {
                      errorID(1633);
                      return;
                    }

                    oldParent._children.splice(removeAt, 1);

                    oldParent._updateSiblingIndex();

                    if (oldParent.emit) {
                      oldParent.emit(SystemEventType.CHILD_REMOVED, this);
                    }
                  }
                }

                if (newParent) {
                  if ( newParent._objFlags & Deactivating) {
                    errorID(3821);
                  }

                  newParent._children.push(this);

                  this._siblingIndex = newParent._children.length - 1;

                  if (newParent.emit) {
                    newParent.emit(SystemEventType.CHILD_ADDED, this);
                  }
                }

                this._onHierarchyChanged(oldParent);
              };

              _proto.getChildByUuid = function getChildByUuid(uuid) {
                if (!uuid) {
                  log('Invalid uuid');
                  return null;
                }

                var locChildren = this._children;

                for (var i = 0, len = locChildren.length; i < len; i++) {
                  if (locChildren[i]._id === uuid) {
                    return locChildren[i];
                  }
                }

                return null;
              };

              _proto.getChildByName = function getChildByName(name) {
                if (!name) {
                  log('Invalid name');
                  return null;
                }

                var locChildren = this._children;

                for (var i = 0, len = locChildren.length; i < len; i++) {
                  if (locChildren[i]._name === name) {
                    return locChildren[i];
                  }
                }

                return null;
              };

              _proto.getChildByPath = function getChildByPath(path) {
                var segments = path.split('/');
                var lastNode = this;

                var _loop = function _loop(i) {
                  var segment = segments[i];

                  if (segment.length === 0) {
                    return "continue";
                  }

                  var next = lastNode.children.find(function (childNode) {
                    return childNode.name === segment;
                  });

                  if (!next) {
                    return {
                      v: null
                    };
                  }

                  lastNode = next;
                };

                for (var i = 0; i < segments.length; ++i) {
                  var _ret = _loop(i);

                  switch (_ret) {
                    case "continue":
                      continue;

                    default:
                      if (typeof _ret === "object") return _ret.v;
                  }
                }

                return lastNode;
              };

              _proto.addChild = function addChild(child) {
                child.setParent(this);
              };

              _proto.insertChild = function insertChild(child, siblingIndex) {
                child.parent = this;
                child.setSiblingIndex(siblingIndex);
              };

              _proto.getSiblingIndex = function getSiblingIndex() {
                return this._siblingIndex;
              };

              _proto.setSiblingIndex = function setSiblingIndex(index) {
                if (!this._parent) {
                  return;
                }

                if (this._parent._objFlags & Deactivating) {
                  errorID(3821);
                  return;
                }

                var siblings = this._parent._children;
                index = index !== -1 ? index : siblings.length - 1;
                var oldIndex = siblings.indexOf(this);

                if (index !== oldIndex) {
                  siblings.splice(oldIndex, 1);

                  if (index < siblings.length) {
                    siblings.splice(index, 0, this);
                  } else {
                    siblings.push(this);
                  }

                  this._parent._updateSiblingIndex();

                  if (this._onSiblingIndexChanged) {
                    this._onSiblingIndexChanged(index);
                  }
                }
              };

              _proto.walk = function walk(preFunc, postFunc) {
                var index = 1;
                var children = null;
                var curr = null;
                var i = 0;
                var stack = BaseNode._stacks[BaseNode._stackId];

                if (!stack) {
                  stack = [];

                  BaseNode._stacks.push(stack);
                }

                BaseNode._stackId++;
                stack.length = 0;
                stack[0] = this;
                var parent = null;
                var afterChildren = false;

                while (index) {
                  index--;
                  curr = stack[index];

                  if (!curr) {
                    continue;
                  }

                  if (!afterChildren && preFunc) {
                    preFunc(curr);
                  } else if (afterChildren && postFunc) {
                    postFunc(curr);
                  }

                  stack[index] = null;

                  if (afterChildren) {
                    if (parent === this._parent) break;
                    afterChildren = false;
                  } else {
                    if (curr._children.length > 0) {
                      parent = curr;
                      children = curr._children;
                      i = 0;
                      stack[index] = children[i];
                      index++;
                    } else {
                      stack[index] = curr;
                      index++;
                      afterChildren = true;
                    }

                    continue;
                  }

                  if (children) {
                    i++;

                    if (children[i]) {
                      stack[index] = children[i];
                      index++;
                    } else if (parent) {
                      stack[index] = parent;
                      index++;
                      afterChildren = true;

                      if (parent._parent) {
                        children = parent._parent._children;
                        i = children.indexOf(parent);
                        parent = parent._parent;
                      } else {
                        parent = null;
                        children = null;
                      }

                      if (i < 0) {
                        break;
                      }
                    }
                  }
                }

                stack.length = 0;
                BaseNode._stackId--;
              };

              _proto.removeFromParent = function removeFromParent() {
                if (this._parent) {
                  this._parent.removeChild(this);
                }
              };

              _proto.removeChild = function removeChild(child) {
                if (this._children.indexOf(child) > -1) {
                  child.parent = null;
                }
              };

              _proto.removeAllChildren = function removeAllChildren() {
                var children = this._children;

                for (var i = children.length - 1; i >= 0; i--) {
                  var node = children[i];

                  if (node) {
                    node.parent = null;
                  }
                }

                this._children.length = 0;
              };

              _proto.isChildOf = function isChildOf(parent) {
                var child = this;

                do {
                  if (child === parent) {
                    return true;
                  }

                  child = child._parent;
                } while (child);

                return false;
              };

              _proto.getComponent = function getComponent(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName);

                if (constructor) {
                  return BaseNode._findComponent(this, constructor);
                }

                return null;
              };

              _proto.getComponents = function getComponents(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName);
                var components = [];

                if (constructor) {
                  BaseNode._findComponents(this, constructor, components);
                }

                return components;
              };

              _proto.getComponentInChildren = function getComponentInChildren(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName);

                if (constructor) {
                  return BaseNode._findChildComponent(this._children, constructor);
                }

                return null;
              };

              _proto.getComponentsInChildren = function getComponentsInChildren(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName);
                var components = [];

                if (constructor) {
                  BaseNode._findComponents(this, constructor, components);

                  BaseNode._findChildComponents(this._children, constructor, components);
                }

                return components;
              };

              _proto.addComponent = function addComponent(typeOrClassName) {

                var constructor;

                if (typeof typeOrClassName === 'string') {
                  constructor = getClassByName(typeOrClassName);

                  if (!constructor) {
                    if (legacyCC._RF.peek()) {
                      errorID(3808, typeOrClassName);
                    }

                    throw TypeError(getError(3807, typeOrClassName));
                  }
                } else {
                  if (!typeOrClassName) {
                    throw TypeError(getError(3804));
                  }

                  constructor = typeOrClassName;
                }

                if (typeof constructor !== 'function') {
                  throw TypeError(getError(3809));
                }

                if (!isChildClassOf(constructor, legacyCC.Component)) {
                  throw TypeError(getError(3810));
                }

                var ReqComp = constructor._requireComponent;

                if (ReqComp && !this.getComponent(ReqComp)) {
                  this.addComponent(ReqComp);
                }

                var component = new constructor();
                component.node = this;

                this._components.push(component);

                if (this._activeInHierarchy) {
                  legacyCC.director._nodeActivator.activateComp(component);
                }

                return component;
              };

              _proto.removeComponent = function removeComponent(component) {
                if (!component) {
                  errorID(3813);
                  return;
                }

                var componentInstance = null;

                if (component instanceof Component) {
                  componentInstance = component;
                } else {
                  componentInstance = this.getComponent(component);
                }

                if (componentInstance) {
                  componentInstance.destroy();
                }
              };

              _proto.on = function on(type, callback, target, useCapture) {
                if (useCapture === void 0) {
                  useCapture = false;
                }

                switch (type) {
                  case SystemEventType.TRANSFORM_CHANGED:
                    this._eventMask |= TRANSFORM_ON;
                    break;
                }

                this._eventProcessor.on(type, callback, target, useCapture);
              };

              _proto.off = function off(type, callback, target, useCapture) {
                if (useCapture === void 0) {
                  useCapture = false;
                }

                this._eventProcessor.off(type, callback, target, useCapture);

                var hasListeners = this._eventProcessor.hasEventListener(type);

                if (!hasListeners) {
                  switch (type) {
                    case SystemEventType.TRANSFORM_CHANGED:
                      this._eventMask &= ~TRANSFORM_ON;
                      break;
                  }
                }
              };

              _proto.once = function once(type, callback, target, useCapture) {
                this._eventProcessor.once(type, callback, target, useCapture);
              };

              _proto.emit = function emit(type, arg0, arg1, arg2, arg3, arg4) {
                this._eventProcessor.emit(type, arg0, arg1, arg2, arg3, arg4);
              };

              _proto.dispatchEvent = function dispatchEvent(event) {
                this._eventProcessor.dispatchEvent(event);
              };

              _proto.hasEventListener = function hasEventListener(type, callback, target) {
                return this._eventProcessor.hasEventListener(type, callback, target);
              };

              _proto.targetOff = function targetOff(target) {
                this._eventProcessor.targetOff(target);

                if (this._eventMask & TRANSFORM_ON && !this._eventProcessor.hasEventListener(SystemEventType.TRANSFORM_CHANGED)) {
                  this._eventMask &= ~TRANSFORM_ON;
                }
              };

              _proto.destroy = function destroy() {
                if (_CCObject.prototype.destroy.call(this)) {
                  this.active = false;
                  return true;
                }

                return false;
              };

              _proto.destroyAllChildren = function destroyAllChildren() {
                var children = this._children;

                for (var i = 0; i < children.length; ++i) {
                  children[i].destroy();
                }
              };

              _proto._removeComponent = function _removeComponent(component) {
                if (!component) {
                  errorID(3814);
                  return;
                }

                if (!(this._objFlags & Destroying$1)) {
                  var i = this._components.indexOf(component);

                  if (i !== -1) {
                    this._components.splice(i, 1);
                  } else if (component.node !== this) {
                    errorID(3815);
                  }
                }
              };

              _proto._updateSiblingIndex = function _updateSiblingIndex() {
                for (var i = 0; i < this._children.length; ++i) {
                  this._children[i]._siblingIndex = i;
                }

                this.emit(SystemEventType.SIBLING_ORDER_CHANGED);
              };

              _proto._onSetParent = function _onSetParent(oldParent, keepWorldTransform) {

                if (this._parent) {
                  if ((oldParent == null || oldParent._scene !== this._parent._scene) && this._parent._scene != null) {
                    this.walk(BaseNode._setScene);
                  }
                }
              };

              _proto._onPostActivated = function _onPostActivated(active) {};

              _proto._onBatchCreated = function _onBatchCreated(dontSyncChildPrefab) {
                if (this._parent) {
                  this._siblingIndex = this._parent.children.indexOf(this);
                }
              };

              _proto._onPreDestroy = function _onPreDestroy() {
                this._onPreDestroyBase();
              };

              _proto._onHierarchyChanged = function _onHierarchyChanged(oldParent) {
                return this._onHierarchyChangedBase(oldParent);
              };

              _proto._instantiate = function _instantiate(cloned, isSyncedNode) {
                if (!cloned) {
                  cloned = legacyCC.instantiate._clone(this, this);
                }

                var newPrefabInfo = cloned._prefab;

                cloned._parent = null;

                cloned._onBatchCreated(isSyncedNode);

                return cloned;
              };

              _proto._onHierarchyChangedBase = function _onHierarchyChangedBase(oldParent) {
                var newParent = this._parent;

                if (this._persistNode && !(newParent instanceof legacyCC.Scene)) {
                  legacyCC.game.removePersistRootNode(this);
                }

                var shouldActiveNow = this._active && !!(newParent && newParent._activeInHierarchy);

                if (this._activeInHierarchy !== shouldActiveNow) {
                  legacyCC.director._nodeActivator.activateNode(this, shouldActiveNow);
                }
              };

              _proto._onPreDestroyBase = function _onPreDestroyBase() {
                this._objFlags |= Destroying$1;
                var parent = this._parent;
                var destroyByParent = !!parent && (parent._objFlags & Destroying$1) !== 0;

                if (!destroyByParent && EDITOR) {
                  this._registerIfAttached(false);
                }

                if (this._persistNode) {
                  legacyCC.game.removePersistRootNode(this);
                }

                if (!destroyByParent) {
                  if (parent) {
                    this.emit(SystemEventType.PARENT_CHANGED, this);

                    var childIndex = parent._children.indexOf(this);

                    parent._children.splice(childIndex, 1);

                    this._siblingIndex = 0;

                    parent._updateSiblingIndex();

                    if (parent.emit) {
                      parent.emit(SystemEventType.CHILD_REMOVED, this);
                    }
                  }
                }

                this.emit(SystemEventType.NODE_DESTROYED, this);

                this._eventProcessor.destroy();

                var children = this._children;

                for (var i = 0; i < children.length; ++i) {
                  children[i]._destroyImmediate();
                }

                var comps = this._components;

                for (var _i5 = 0; _i5 < comps.length; ++_i5) {
                  comps[_i5]._destroyImmediate();
                }

                return destroyByParent;
              };

              return BaseNode;
            }(CCObject), _class3.idGenerator = idGenerator, _class3._stacks = [[]], _class3._stackId = 0, _temp), (_applyDecoratedDescriptor(_class2.prototype, "_persistNode", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_persistNode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "name", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "name"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "children", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "children"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "active", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "active"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "activeInHierarchy", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "activeInHierarchy"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "parent", [editable], Object.getOwnPropertyDescriptor(_class2.prototype, "parent"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_parent", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_children", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_active", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_components", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_prefab", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2)) || _class));
            baseNodePolyfill(BaseNode);
            legacyCC._BaseNode = BaseNode;

            var _dec$1, _dec2, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5$1, _class3$1, _temp$1;
            var v3_a = new Vec3();
            var q_a = new Quat();
            var q_b = new Quat();
            var array_a = new Array(10);
            var qt_1 = new Quat();
            var m3_1 = new Mat3();
            var m3_scaling = new Mat3();
            var m4_1$1 = new Mat4();
            var bookOfChange = new Map();
            var Node = exports('N', (_dec$1 = ccclass('cc.Node'), _dec2 = type(Vec3), _dec$1(_class$1 = (_class2$1 = (_temp$1 = _class3$1 = function (_BaseNode) {
              _inheritsLoose(Node, _BaseNode);

              function Node(name) {
                var _this;

                _this = _BaseNode.call(this, name) || this;
                _this._uiProps = new NodeUIProperties(_assertThisInitialized(_this));
                _this._static = false;
                _this._pos = new Vec3();
                _this._rot = new Quat();
                _this._scale = new Vec3(1, 1, 1);
                _this._mat = new Mat4();

                _initializerDefineProperty(_this, "_lpos", _descriptor$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_lrot", _descriptor2$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_lscale", _descriptor3$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_layer", _descriptor4$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_euler", _descriptor5$1, _assertThisInitialized(_this));

                _this._dirtyFlags = TransformBit.NONE;
                _this._eulerDirty = false;
                _this._poolHandle = NULL_HANDLE;
                _this._poolHandle = NodePool.alloc();
                NodePool.set(_this._poolHandle, NodeView.LAYER, _this._layer);
                return _this;
              }

              Node.isNode = function isNode(obj) {
                return obj instanceof Node && (obj.constructor === Node || !(obj instanceof legacyCC.Scene));
              };

              var _proto = Node.prototype;

              _proto.destroy = function destroy() {
                if (this._poolHandle) {
                  NodePool.free(this._poolHandle);
                  this._poolHandle = NULL_HANDLE;
                }

                return _BaseNode.prototype.destroy.call(this);
              };

              _proto.setParent = function setParent(value, keepWorldTransform) {
                if (keepWorldTransform === void 0) {
                  keepWorldTransform = false;
                }

                if (keepWorldTransform) {
                  this.updateWorldTransform();
                }

                _BaseNode.prototype.setParent.call(this, value, keepWorldTransform);
              };

              _proto._onSetParent = function _onSetParent(oldParent, keepWorldTransform) {
                _BaseNode.prototype._onSetParent.call(this, oldParent, keepWorldTransform);

                if (keepWorldTransform) {
                  var parent = this._parent;

                  if (parent) {
                    parent.updateWorldTransform();
                    Mat4.multiply(m4_1$1, Mat4.invert(m4_1$1, parent._mat), this._mat);
                    Mat4.toRTS(m4_1$1, this._lrot, this._lpos, this._lscale);
                  } else {
                    Vec3.copy(this._lpos, this._pos);
                    Quat.copy(this._lrot, this._rot);
                    Vec3.copy(this._lscale, this._scale);
                  }

                  this._eulerDirty = true;
                }

                this.invalidateChildren(TransformBit.TRS);
              };

              _proto._onBatchCreated = function _onBatchCreated(dontSyncChildPrefab) {
                var _this$_prefab;

                _BaseNode.prototype._onBatchCreated.call(this, dontSyncChildPrefab);

                NodePool.set(this._poolHandle, NodeView.LAYER, this._layer);
                NodePool.setVec3(this._poolHandle, NodeView.WORLD_SCALE, this._scale);
                var prefabInstance = (_this$_prefab = this._prefab) === null || _this$_prefab === void 0 ? void 0 : _this$_prefab.instance;

                if (!dontSyncChildPrefab && prefabInstance) {
                  createNodeWithPrefab(this);
                }

                this.hasChangedFlags = TransformBit.TRS;
                this._dirtyFlags = TransformBit.TRS;
                var len = this._children.length;

                for (var i = 0; i < len; ++i) {
                  this._children[i]._onBatchCreated(dontSyncChildPrefab);
                }

                if (!dontSyncChildPrefab && prefabInstance) {
                  var targetMap = {};
                  prefabInstance.targetMap = targetMap;
                  generateTargetMap(this, targetMap, true);
                  applyMountedChildren(this, prefabInstance.mountedChildren, targetMap);
                  applyPropertyOverrides(this, prefabInstance.propertyOverrides, targetMap);
                }

                applyTargetOverrides(this);
              };

              _proto._onBeforeSerialize = function _onBeforeSerialize() {
                this.eulerAngles;
              };

              _proto._onPostActivated = function _onPostActivated(active) {
                if (active) {
                  eventManager.resumeTarget(this);
                  this.eventProcessor.reattach();
                  this.invalidateChildren(TransformBit.TRS);
                } else {
                  eventManager.pauseTarget(this);
                }
              };

              _proto.translate = function translate(trans, ns) {
                var space = ns || NodeSpace.LOCAL;

                if (space === NodeSpace.LOCAL) {
                  Vec3.transformQuat(v3_a, trans, this._lrot);
                  this._lpos.x += v3_a.x;
                  this._lpos.y += v3_a.y;
                  this._lpos.z += v3_a.z;
                } else if (space === NodeSpace.WORLD) {
                  if (this._parent) {
                    Quat.invert(q_a, this._parent.worldRotation);
                    Vec3.transformQuat(v3_a, trans, q_a);
                    var _scale = this.worldScale;
                    this._lpos.x += v3_a.x / _scale.x;
                    this._lpos.y += v3_a.y / _scale.y;
                    this._lpos.z += v3_a.z / _scale.z;
                  } else {
                    this._lpos.x += trans.x;
                    this._lpos.y += trans.y;
                    this._lpos.z += trans.z;
                  }
                }

                this.invalidateChildren(TransformBit.POSITION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.POSITION);
                }
              };

              _proto.rotate = function rotate(rot, ns) {
                var space = ns || NodeSpace.LOCAL;
                Quat.normalize(q_a, rot);

                if (space === NodeSpace.LOCAL) {
                  Quat.multiply(this._lrot, this._lrot, q_a);
                } else if (space === NodeSpace.WORLD) {
                  var worldRot = this.worldRotation;
                  Quat.multiply(q_b, q_a, worldRot);
                  Quat.invert(q_a, worldRot);
                  Quat.multiply(q_b, q_a, q_b);
                  Quat.multiply(this._lrot, this._lrot, q_b);
                }

                this._eulerDirty = true;
                this.invalidateChildren(TransformBit.ROTATION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.ROTATION);
                }
              };

              _proto.lookAt = function lookAt(pos, up) {
                this.getWorldPosition(v3_a);
                Vec3.subtract(v3_a, v3_a, pos);
                Vec3.normalize(v3_a, v3_a);
                Quat.fromViewUp(q_a, v3_a, up);
                this.setWorldRotation(q_a);
              };

              _proto.invalidateChildren = function invalidateChildren(dirtyBit) {
                var hasChanegdFlags = this.hasChangedFlags;

                if ((this._dirtyFlags & hasChanegdFlags & dirtyBit) === dirtyBit) {
                  return;
                }

                this._dirtyFlags |= dirtyBit;
                this.hasChangedFlags = hasChanegdFlags | dirtyBit;
                var newDirtyBit = dirtyBit | TransformBit.POSITION;
                var len = this._children.length;

                for (var i = 0; i < len; ++i) {
                  var child = this._children[i];

                  if (child.isValid) {
                    child.invalidateChildren(newDirtyBit);
                  }
                }
              };

              _proto.updateWorldTransform = function updateWorldTransform() {
                if (!this._dirtyFlags) {
                  return;
                }

                var cur = this;
                var i = 0;

                while (cur && cur._dirtyFlags) {
                  array_a[i++] = cur;
                  cur = cur._parent;
                }

                var child;
                var dirtyBits = 0;

                while (i) {
                  child = array_a[--i];
                  dirtyBits |= child._dirtyFlags;

                  if (cur) {
                    if (dirtyBits & TransformBit.POSITION) {
                      Vec3.transformMat4(child._pos, child._lpos, cur._mat);
                      child._mat.m12 = child._pos.x;
                      child._mat.m13 = child._pos.y;
                      child._mat.m14 = child._pos.z;
                      NodePool.setVec3(child._poolHandle, NodeView.WORLD_POSITION, child._pos);
                    }

                    if (dirtyBits & TransformBit.RS) {
                      Mat4.fromRTS(child._mat, child._lrot, child._lpos, child._lscale);
                      Mat4.multiply(child._mat, cur._mat, child._mat);

                      if (dirtyBits & TransformBit.ROTATION) {
                        Quat.multiply(child._rot, cur._rot, child._lrot);
                        NodePool.setVec4(child._poolHandle, NodeView.WORLD_ROTATION, child._rot);
                      }

                      Mat3.fromQuat(m3_1, Quat.conjugate(qt_1, child._rot));
                      Mat3.multiplyMat4(m3_1, m3_1, child._mat);
                      child._scale.x = m3_1.m00;
                      child._scale.y = m3_1.m04;
                      child._scale.z = m3_1.m08;
                      NodePool.setVec3(child._poolHandle, NodeView.WORLD_SCALE, child._scale);
                    }
                  } else {
                    if (dirtyBits & TransformBit.POSITION) {
                      Vec3.copy(child._pos, child._lpos);
                      child._mat.m12 = child._pos.x;
                      child._mat.m13 = child._pos.y;
                      child._mat.m14 = child._pos.z;
                      NodePool.setVec3(child._poolHandle, NodeView.WORLD_POSITION, child._pos);
                    }

                    if (dirtyBits & TransformBit.RS) {
                      if (dirtyBits & TransformBit.ROTATION) {
                        Quat.copy(child._rot, child._lrot);
                        NodePool.setVec4(child._poolHandle, NodeView.WORLD_ROTATION, child._rot);
                      }

                      if (dirtyBits & TransformBit.SCALE) {
                        Vec3.copy(child._scale, child._lscale);
                        NodePool.setVec3(child._poolHandle, NodeView.WORLD_SCALE, child._scale);
                        Mat4.fromRTS(child._mat, child._rot, child._pos, child._scale);
                      }
                    }
                  }

                  if (dirtyBits !== TransformBit.NONE) {
                    NodePool.setMat4(child._poolHandle, NodeView.WORLD_MATRIX, child._mat);
                  }

                  child._dirtyFlags = TransformBit.NONE;
                  cur = child;
                }
              };

              _proto.setPosition = function setPosition(val, y, z) {
                if (y === undefined && z === undefined) {
                  Vec3.copy(this._lpos, val);
                } else if (z === undefined) {
                  Vec3.set(this._lpos, val, y, this._lpos.z);
                } else {
                  Vec3.set(this._lpos, val, y, z);
                }

                this.invalidateChildren(TransformBit.POSITION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.POSITION);
                }
              };

              _proto.getPosition = function getPosition(out) {
                if (out) {
                  return Vec3.set(out, this._lpos.x, this._lpos.y, this._lpos.z);
                }

                return Vec3.copy(new Vec3(), this._lpos);
              };

              _proto.setRotation = function setRotation(val, y, z, w) {
                if (y === undefined || z === undefined || w === undefined) {
                  Quat.copy(this._lrot, val);
                } else {
                  Quat.set(this._lrot, val, y, z, w);
                }

                this._eulerDirty = true;
                this.invalidateChildren(TransformBit.ROTATION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.ROTATION);
                }
              };

              _proto.setRotationFromEuler = function setRotationFromEuler(val, y, zOpt) {
                var z = zOpt === undefined ? this._euler.z : zOpt;

                if (y === undefined) {
                  Vec3.copy(this._euler, val);
                  Quat.fromEuler(this._lrot, val.x, val.y, val.z);
                } else {
                  Vec3.set(this._euler, val, y, z);
                  Quat.fromEuler(this._lrot, val, y, z);
                }

                this._eulerDirty = false;
                this.invalidateChildren(TransformBit.ROTATION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.ROTATION);
                }
              };

              _proto.getRotation = function getRotation(out) {
                if (out) {
                  return Quat.set(out, this._lrot.x, this._lrot.y, this._lrot.z, this._lrot.w);
                }

                return Quat.copy(new Quat(), this._lrot);
              };

              _proto.setScale = function setScale(val, y, z) {
                if (y === undefined && z === undefined) {
                  Vec3.copy(this._lscale, val);
                } else if (z === undefined) {
                  Vec3.set(this._lscale, val, y, this._lscale.z);
                } else {
                  Vec3.set(this._lscale, val, y, z);
                }

                this.invalidateChildren(TransformBit.SCALE);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.SCALE);
                }
              };

              _proto.getScale = function getScale(out) {
                if (out) {
                  return Vec3.set(out, this._lscale.x, this._lscale.y, this._lscale.z);
                }

                return Vec3.copy(new Vec3(), this._lscale);
              };

              _proto.inverseTransformPoint = function inverseTransformPoint(out, p) {
                Vec3.copy(out, p);
                var cur = this;
                var i = 0;

                while (cur._parent) {
                  array_a[i++] = cur;
                  cur = cur._parent;
                }

                while (i >= 0) {
                  Vec3.transformInverseRTS(out, out, cur._lrot, cur._lpos, cur._lscale);
                  cur = array_a[--i];
                }

                return out;
              };

              _proto.setWorldPosition = function setWorldPosition(val, y, z) {
                if (y === undefined || z === undefined) {
                  Vec3.copy(this._pos, val);
                } else {
                  Vec3.set(this._pos, val, y, z);
                }

                NodePool.setVec3(this._poolHandle, NodeView.WORLD_POSITION, this._pos);
                var parent = this._parent;
                var local = this._lpos;

                if (parent) {
                  parent.updateWorldTransform();
                  Vec3.transformMat4(local, this._pos, Mat4.invert(m4_1$1, parent._mat));
                } else {
                  Vec3.copy(local, this._pos);
                }

                this.invalidateChildren(TransformBit.POSITION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.POSITION);
                }
              };

              _proto.getWorldPosition = function getWorldPosition(out) {
                this.updateWorldTransform();

                if (out) {
                  return Vec3.copy(out, this._pos);
                }

                return Vec3.copy(new Vec3(), this._pos);
              };

              _proto.setWorldRotation = function setWorldRotation(val, y, z, w) {
                if (y === undefined || z === undefined || w === undefined) {
                  Quat.copy(this._rot, val);
                } else {
                  Quat.set(this._rot, val, y, z, w);
                }

                NodePool.setVec4(this._poolHandle, NodeView.WORLD_ROTATION, this._rot);

                if (this._parent) {
                  this._parent.updateWorldTransform();

                  Quat.multiply(this._lrot, Quat.conjugate(this._lrot, this._parent._rot), this._rot);
                } else {
                  Quat.copy(this._lrot, this._rot);
                }

                this._eulerDirty = true;
                this.invalidateChildren(TransformBit.ROTATION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.ROTATION);
                }
              };

              _proto.setWorldRotationFromEuler = function setWorldRotationFromEuler(x, y, z) {
                Quat.fromEuler(this._rot, x, y, z);

                if (this._parent) {
                  this._parent.updateWorldTransform();

                  Quat.multiply(this._lrot, Quat.conjugate(this._lrot, this._parent._rot), this._rot);
                } else {
                  Quat.copy(this._lrot, this._rot);
                }

                this._eulerDirty = true;
                this.invalidateChildren(TransformBit.ROTATION);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.ROTATION);
                }
              };

              _proto.getWorldRotation = function getWorldRotation(out) {
                this.updateWorldTransform();

                if (out) {
                  return Quat.copy(out, this._rot);
                }

                return Quat.copy(new Quat(), this._rot);
              };

              _proto.setWorldScale = function setWorldScale(val, y, z) {
                if (y === undefined || z === undefined) {
                  Vec3.copy(this._scale, val);
                } else {
                  Vec3.set(this._scale, val, y, z);
                }

                NodePool.setVec3(this._poolHandle, NodeView.WORLD_SCALE, this._scale);
                var parent = this._parent;

                if (parent) {
                  parent.updateWorldTransform();
                  Mat3.fromQuat(m3_1, Quat.conjugate(qt_1, parent._rot));
                  Mat3.multiplyMat4(m3_1, m3_1, parent._mat);
                  m3_scaling.m00 = this._scale.x;
                  m3_scaling.m04 = this._scale.y;
                  m3_scaling.m08 = this._scale.z;
                  Mat3.multiply(m3_1, m3_scaling, Mat3.invert(m3_1, m3_1));
                  this._lscale.x = Vec3.set(v3_a, m3_1.m00, m3_1.m01, m3_1.m02).length();
                  this._lscale.y = Vec3.set(v3_a, m3_1.m03, m3_1.m04, m3_1.m05).length();
                  this._lscale.z = Vec3.set(v3_a, m3_1.m06, m3_1.m07, m3_1.m08).length();
                } else {
                  Vec3.copy(this._lscale, this._scale);
                }

                this.invalidateChildren(TransformBit.SCALE);

                if (this._eventMask & TRANSFORM_ON) {
                  this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.SCALE);
                }
              };

              _proto.getWorldScale = function getWorldScale(out) {
                this.updateWorldTransform();

                if (out) {
                  return Vec3.copy(out, this._scale);
                }

                return Vec3.copy(new Vec3(), this._scale);
              };

              _proto.getWorldMatrix = function getWorldMatrix(out) {
                this.updateWorldTransform();
                var target = out || new Mat4();
                return Mat4.copy(target, this._mat);
              };

              _proto.getWorldRS = function getWorldRS(out) {
                this.updateWorldTransform();
                var target = out || new Mat4();
                Mat4.copy(target, this._mat);
                target.m12 = 0;
                target.m13 = 0;
                target.m14 = 0;
                return target;
              };

              _proto.getWorldRT = function getWorldRT(out) {
                this.updateWorldTransform();
                var target = out || new Mat4();
                return Mat4.fromRT(target, this._rot, this._pos);
              };

              _proto.setRTS = function setRTS(rot, pos, scale) {
                var dirtyBit = 0;

                if (rot) {
                  dirtyBit |= TransformBit.ROTATION;

                  if (rot.w !== undefined) {
                    Quat.copy(this._lrot, rot);
                    this._eulerDirty = true;
                  } else {
                    Vec3.copy(this._euler, rot);
                    Quat.fromEuler(this._lrot, rot.x, rot.y, rot.z);
                    this._eulerDirty = false;
                  }
                }

                if (pos) {
                  Vec3.copy(this._lpos, pos);
                  dirtyBit |= TransformBit.POSITION;
                }

                if (scale) {
                  Vec3.copy(this._lscale, scale);
                  dirtyBit |= TransformBit.SCALE;
                }

                if (dirtyBit) {
                  this.invalidateChildren(dirtyBit);

                  if (this._eventMask & TRANSFORM_ON) {
                    this.emit(SystemEventType.TRANSFORM_CHANGED, dirtyBit);
                  }
                }
              };

              _proto.pauseSystemEvents = function pauseSystemEvents(recursive) {
                eventManager.pauseTarget(this, recursive);
              };

              _proto.resumeSystemEvents = function resumeSystemEvents(recursive) {
                eventManager.resumeTarget(this, recursive);
              };

              _createClass(Node, [{
                key: "handle",
                get: function get() {
                  return this._poolHandle;
                }
              }, {
                key: "position",
                get: function get() {
                  return this._lpos;
                },
                set: function set(val) {
                  this.setPosition(val);
                }
              }, {
                key: "worldPosition",
                get: function get() {
                  this.updateWorldTransform();
                  return this._pos;
                },
                set: function set(val) {
                  this.setWorldPosition(val);
                }
              }, {
                key: "rotation",
                get: function get() {
                  return this._lrot;
                },
                set: function set(val) {
                  this.setRotation(val);
                }
              }, {
                key: "eulerAngles",
                set: function set(val) {
                  this.setRotationFromEuler(val.x, val.y, val.z);
                },
                get: function get() {
                  if (this._eulerDirty) {
                    Quat.toEuler(this._euler, this._lrot);
                    this._eulerDirty = false;
                  }

                  return this._euler;
                }
              }, {
                key: "angle",
                get: function get() {
                  return this._euler.z;
                },
                set: function set(val) {
                  Vec3.set(this._euler, 0, 0, val);
                  Quat.fromAngleZ(this._lrot, val);
                  this._eulerDirty = false;
                  this.invalidateChildren(TransformBit.ROTATION);

                  if (this._eventMask & TRANSFORM_ON) {
                    this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.ROTATION);
                  }
                }
              }, {
                key: "worldRotation",
                get: function get() {
                  this.updateWorldTransform();
                  return this._rot;
                },
                set: function set(val) {
                  this.setWorldRotation(val);
                }
              }, {
                key: "scale",
                get: function get() {
                  return this._lscale;
                },
                set: function set(val) {
                  this.setScale(val);
                }
              }, {
                key: "worldScale",
                get: function get() {
                  this.updateWorldTransform();
                  return this._scale;
                },
                set: function set(val) {
                  this.setWorldScale(val);
                }
              }, {
                key: "matrix",
                set: function set(val) {
                  Mat4.toRTS(val, this._lrot, this._lpos, this._lscale);
                  this.invalidateChildren(TransformBit.TRS);
                  this._eulerDirty = true;

                  if (this._eventMask & TRANSFORM_ON) {
                    this.emit(SystemEventType.TRANSFORM_CHANGED, TransformBit.TRS);
                  }
                }
              }, {
                key: "worldMatrix",
                get: function get() {
                  this.updateWorldTransform();
                  return this._mat;
                }
              }, {
                key: "forward",
                get: function get() {
                  return Vec3.transformQuat(new Vec3(), Vec3.FORWARD, this.worldRotation);
                },
                set: function set(dir) {
                  var len = dir.length();
                  Vec3.multiplyScalar(v3_a, dir, -1 / len);
                  Quat.fromViewUp(q_a, v3_a);
                  this.setWorldRotation(q_a);
                }
              }, {
                key: "layer",
                set: function set(l) {
                  this._layer = l;
                  NodePool.set(this._poolHandle, NodeView.LAYER, this._layer);
                  this.emit(SystemEventType.LAYER_CHANGED, this._layer);
                },
                get: function get() {
                  return this._layer;
                }
              }, {
                key: "hasChangedFlags",
                get: function get() {
                  return bookOfChange.get(this) || 0;
                },
                set: function set(val) {
                  bookOfChange.set(this, val);
                  NodePool.set(this._poolHandle, NodeView.FLAGS_CHANGED, val);
                }
              }]);

              return Node;
            }(BaseNode), _class3$1.bookOfChange = bookOfChange, _class3$1.EventType = SystemEventType, _class3$1.NodeSpace = NodeSpace, _class3$1.TransformDirtyBit = TransformBit, _class3$1.TransformBit = TransformBit, _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_lpos", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_lrot", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Quat();
              }
            }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_lscale", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3(1, 1, 1);
              }
            }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_layer", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return Layers.Enum.DEFAULT;
              }
            }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$1.prototype, "_euler", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return new Vec3();
              }
            }), _applyDecoratedDescriptor(_class2$1.prototype, "eulerAngles", [_dec2], Object.getOwnPropertyDescriptor(_class2$1.prototype, "eulerAngles"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "angle", [editable], Object.getOwnPropertyDescriptor(_class2$1.prototype, "angle"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "layer", [editable], Object.getOwnPropertyDescriptor(_class2$1.prototype, "layer"), _class2$1.prototype)), _class2$1)) || _class$1));
            legacyCC.Node = Node;

            var _dec$2, _dec2$1, _dec3, _dec4, _dec5, _class$2, _class2$2, _descriptor$2, _descriptor2$2, _temp$2;
            var _matInsInfo = {
              parent: null,
              owner: null,
              subModelIdx: 0
            };
            var RenderableComponent = exports('s', (_dec$2 = ccclass('cc.RenderableComponent'), _dec2$1 = type([Material]), _dec3 = type(Material), _dec4 = displayOrder(0), _dec5 = displayName('Materials'), _dec$2(_class$2 = (_class2$2 = (_temp$2 = function (_Component) {
              _inheritsLoose(RenderableComponent, _Component);

              function RenderableComponent() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Component.call.apply(_Component, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "_materials", _descriptor$2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_visFlags", _descriptor2$2, _assertThisInitialized(_this));

                _this._materialInstances = [];
                _this._models = [];
                return _this;
              }

              var _proto = RenderableComponent.prototype;

              _proto.getMaterial = function getMaterial(idx) {
                if (idx < 0 || idx >= this._materials.length) {
                  return null;
                }

                return this._materials[idx];
              };

              _proto.setMaterial = function setMaterial(material, index) {
                if (material && material instanceof MaterialInstance) {
                  console.error('Can\'t set a material instance to a sharedMaterial slot');
                }

                this._materials[index] = material;
                var inst = this._materialInstances[index];

                if (inst) {
                  if (inst.parent !== this._materials[index]) {
                    inst.destroy();
                    this._materialInstances[index] = null;

                    this._onMaterialModified(index, this._materials[index]);
                  }
                } else {
                  this._onMaterialModified(index, this._materials[index]);
                }
              };

              _proto.getMaterialInstance = function getMaterialInstance(idx) {
                var mat = this._materials[idx];

                if (!mat) {
                  return null;
                }

                if (!this._materialInstances[idx]) {
                  _matInsInfo.parent = this._materials[idx];
                  _matInsInfo.owner = this;
                  _matInsInfo.subModelIdx = idx;
                  var instantiated = new MaterialInstance(_matInsInfo);
                  this.setMaterialInstance(idx, instantiated);
                }

                return this._materialInstances[idx];
              };

              _proto.setMaterialInstance = function setMaterialInstance(index, matInst) {
                if (matInst && matInst.parent) {
                  if (matInst !== this._materialInstances[index]) {
                    this._materialInstances[index] = matInst;

                    this._onMaterialModified(index, matInst);
                  }
                } else if (matInst !== this._materials[index]) {
                  this.setMaterial(matInst, index);
                }
              };

              _proto.getRenderMaterial = function getRenderMaterial(index) {
                return this._materialInstances[index] || this._materials[index];
              };

              _proto._collectModels = function _collectModels() {
                return this._models;
              };

              _proto._attachToScene = function _attachToScene() {};

              _proto._detachFromScene = function _detachFromScene() {};

              _proto._onMaterialModified = function _onMaterialModified(index, material) {};

              _proto._onRebuildPSO = function _onRebuildPSO(index, material) {};

              _proto._clearMaterials = function _clearMaterials() {};

              _proto._onVisibilityChange = function _onVisibilityChange(val) {};

              _createClass(RenderableComponent, [{
                key: "visibility",
                get: function get() {
                  return this._visFlags;
                },
                set: function set(val) {
                  this._visFlags = val;

                  this._onVisibilityChange(val);
                }
              }, {
                key: "sharedMaterials",
                get: function get() {
                  return  this._materials;
                },
                set: function set(val) {
                  for (var i = 0; i < val.length; i++) {
                    if (val[i] !== this._materials[i]) {
                      this.setMaterial(val[i], i);
                    }
                  }

                  if (val.length < this._materials.length) {
                    for (var _i = val.length; _i < this._materials.length; _i++) {
                      this.setMaterial(null, _i);
                    }

                    this._materials.splice(val.length);
                  }
                }
              }, {
                key: "materials",
                get: function get() {
                  for (var i = 0; i < this._materials.length; i++) {
                    this._materialInstances[i] = this.getMaterialInstance(i);
                  }

                  return this._materialInstances;
                },
                set: function set(val) {
                  var dLen = val.length - this._materials.length;

                  if (dLen > 0) {
                    this._materials.length = val.length;
                    this._materialInstances.length = val.length;
                  } else if (dLen < 0) {
                    for (var i = this._materials.length - dLen; i < this._materials.length; ++i) {
                      this.setMaterialInstance(i, null);
                    }
                  }

                  for (var _i2 = 0; _i2 < this._materialInstances.length; _i2++) {
                    if (this._materialInstances[_i2] != val[_i2]) {
                      this.setMaterialInstance(_i2, val[_i2]);
                    }
                  }
                }
              }, {
                key: "sharedMaterial",
                get: function get() {
                  return this.getMaterial(0);
                }
              }, {
                key: "material",
                get: function get() {
                  return this.getMaterialInstance(0);
                },
                set: function set(val) {
                  if (this._materials.length === 1 && this._materials[0] === val) {
                    return;
                  }

                  this.setMaterialInstance(0, val);
                }
              }]);

              return RenderableComponent;
            }(Component), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_materials", [_dec2$1], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_visFlags", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return Layers.Enum.NONE;
              }
            }), _applyDecoratedDescriptor(_class2$2.prototype, "sharedMaterials", [_dec3, _dec4, _dec5], Object.getOwnPropertyDescriptor(_class2$2.prototype, "sharedMaterials"), _class2$2.prototype)), _class2$2)) || _class$2));
            legacyCC.RenderableComponent = RenderableComponent;

        }
    };
});
