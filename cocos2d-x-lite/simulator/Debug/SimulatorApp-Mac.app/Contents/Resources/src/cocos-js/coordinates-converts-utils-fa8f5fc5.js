System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {

            exports({
                Z: void 0,
                _: _throw,
                a: log,
                a0: void 0,
                a1: void 0,
                a2: void 0,
                a3: void 0,
                a4: void 0,
                a5: void 0,
                a6: void 0,
                a7: void 0,
                a8: void 0,
                a9: void 0,
                aA: void 0,
                aE: FormatSize,
                aF: FormatSurfaceSize,
                aG: GetTypeSize,
                aH: getTypedArrayConstructor,
                aa: void 0,
                ab: void 0,
                ac: void 0,
                ad: void 0,
                ae: void 0,
                af: void 0,
                ag: void 0,
                ah: void 0,
                ai: void 0,
                aj: void 0,
                ak: void 0,
                al: void 0,
                am: void 0,
                an: void 0,
                ao: void 0,
                ap: void 0,
                aq: void 0,
                ar: void 0,
                as: void 0,
                at: void 0,
                au: void 0,
                av: void 0,
                aw: void 0,
                ax: void 0,
                ay: void 0,
                az: void 0,
                b: assert,
                bM: void 0,
                bO: void 0,
                bQ: void 0,
                bS: void 0,
                bU: void 0,
                bW: void 0,
                bY: void 0,
                b_: void 0,
                bv: freeHandleArray,
                bw: void 0,
                c: logID,
                c$: nextPow2$1,
                c0: void 0,
                c2: void 0,
                c4: void 0,
                c6: void 0,
                c8: void 0,
                cA: v4,
                cC: quat,
                cF: mat4,
                cI: size,
                cK: rect,
                cM: color,
                cO: equals,
                cP: approx,
                cQ: clamp,
                cR: clamp01,
                cS: lerp,
                cT: toRadian,
                cU: toDegree,
                cW: randomRange,
                cX: randomRangeInt,
                cY: pseudoRandom,
                cZ: pseudoRandomRange,
                c_: pseudoRandomRangeInt,
                ca: void 0,
                cc: void 0,
                ce: void 0,
                cg: void 0,
                ci: void 0,
                ck: void 0,
                cm: void 0,
                co: void 0,
                cq: void 0,
                cs: void 0,
                cw: v2,
                cy: v3,
                d: warnID,
                d$: isCompiledJson,
                d0: repeat,
                d1: pingPong,
                d2: inverseLerp,
                d3: absMaxComponent,
                d4: absMax,
                d5: BitMask,
                d6: Enum,
                d7: ccenum,
                dA: Eventify,
                dG: isDisplayStats,
                dH: setDisplayStats,
                dI: getError,
                dJ: void 0,
                dP: property,
                dR: _inheritsLoose,
                dS: _createClass,
                dT: _applyDecoratedDescriptor,
                dU: _initializerDefineProperty,
                dV: _assertThisInitialized,
                dY: decodeUuid,
                d_: _extends,
                dd: setDefaultLogTimes,
                de: void 0,
                df: void 0,
                dg: void 0,
                dh: murmurhash2_32_gc,
                di: WorldNode3DToLocalNodeUI,
                dj: WorldNode3DToWorldNodeUI,
                dm: CCClass,
                dp: isValid,
                dq: deserialize,
                ds: instantiate,
                e: error,
                e$: applyTargetOverrides,
                e0: hasNativeDep,
                e3: getDependUuidList,
                e4: fastRemoveAt,
                e5: type,
                e6: void 0,
                e9: void 0,
                eB: void 0,
                eD: addon,
                eG: void 0,
                eJ: getUuidFromURL,
                eL: remove,
                eN: normalize,
                eO: callInNextTick,
                eV: getClassByName,
                eW: isChildClassOf,
                eX: createNodeWithPrefab,
                eY: generateTargetMap,
                eZ: applyMountedChildren,
                e_: applyPropertyOverrides,
                ea: void 0,
                ei: _resetDebugSetting,
                eo: createMap,
                er: unpackJSONs,
                es: packCustomObjData,
                et: transform,
                ex: mixin,
                ey: isScene,
                f: errorID,
                fA: clampf,
                fB: void 0,
                fC: contains$1,
                fD: sign,
                fG: degreesToRadians,
                fH: radiansToDegrees,
                fK: _construct,
                fL: setClassAlias,
                fc: assertIsNonNullable,
                fd: contains,
                ff: IsPowerOf2,
                fn: assertIsTrue,
                fp: nextPow2,
                fq: log2,
                fu: formerlySerializedAs,
                g: assertID,
                i: extname,
                j: join,
                k: basename,
                m: mainFileName,
                n: dirname,
                o: changeExtname,
                p: changeBasename,
                q: _normalize,
                r: getSeperator,
                s: stripSep,
                t: _createForOfIteratorHelperLoose,
                w: warn
            });

            const WECHAT = exports('fg', false);
            const ALIPAY = false;
            const BAIDU = false;
            const XIAOMI = false;
            const BYTEDANCE = false;
            const OPPO = false;
            const VIVO = false;
            const HUAWEI = false;
            const COCOSPLAY = false;
            const EDITOR = exports('eh', false);
            const PREVIEW = true;
            const BUILD = false;
            const TEST = false;
            const DEBUG = true;
            const DEV = true;
            const RUNTIME_BASED = exports('el', false);
            const MINIGAME = exports('em', false);
            const JSB = exports('ek', true);
            const SUPPORT_JIT = true;

            var _global = typeof window === 'undefined' ? global : window;

            var legacyCC = exports('l', {
              _global: _global
            });
            legacyCC.internal = {};

            {
              _global.CC_BUILD = BUILD;
              _global.CC_TEST = TEST;
              _global.CC_EDITOR = EDITOR;
              _global.CC_PREVIEW = PREVIEW;
              _global.CC_DEV = DEV;
              _global.CC_DEBUG = DEBUG;
              _global.CC_JSB = JSB;
              _global.CC_BYTEDANCE = BYTEDANCE;
              _global.CC_WECHAT = WECHAT;
              _global.CC_ALIPAY = ALIPAY;
              _global.CC_XIAOMI = XIAOMI;
              _global.CC_BAIDU = BAIDU;
              _global.CC_COCOSPLAY = COCOSPLAY;
              _global.CC_HUAWEI = HUAWEI;
              _global.CC_OPPO = OPPO;
              _global.CC_VIVO = VIVO;
              _global.CC_MINIGAME = MINIGAME;
              _global.CC_RUNTIME_BASED = RUNTIME_BASED;
              _global.CC_SUPPORT_JIT = SUPPORT_JIT;
            }

            {
              legacyCC._Test = {};
            }

            var engineVersion = exports('eg', '3.0.0');
            _global.CocosEngine = legacyCC.ENGINE_VERSION = engineVersion;
            _global.cc = legacyCC;

            var debugInfos = {
            	"1100": "Expected 'data' dict, but not found. Config file: %s",
            	"1101": "Please load the resource first : %s",
            	"1200": "cocos2d: Director: Error in gettimeofday",
            	"1204": "Running scene should not be null",
            	"1205": "The scene should not be null",
            	"1206": "loadScene: The scene index to load (%s) is out of range.",
            	"1207": "loadScene: Unknown name type to load: '%s'",
            	"1208": "loadScene: Failed to load scene '%s' because '%s' is already being loaded.",
            	"1209": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
            	"1210": "Failed to preload '%s', %s",
            	"1211": "loadScene: The scene index to load (%s) is out of range.",
            	"1212": "loadScene: Unknown name type to load: '%s'",
            	"1213": "loadScene: Failed to load scene '%s' because '%s' is already loading",
            	"1214": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
            	"1215": "Failed to preload '%s', %s",
            	"1216": "Director.runSceneImmediate: scene is not valid",
            	"1217": "Director._initOnEngineInitialized: renderer root initialization failed",
            	"1300": "%s is not in the model pool and cannot be destroyed by destroyModel.",
            	"1400": "'%s' is deprecated, please use '%s' instead.",
            	"1404": "cc.spriteFrameCache is removed, please use cc.loader to load and cache sprite frames of atlas format.",
            	"1406": "'%s.%s' is removed",
            	"1408": "'%s' is removed",
            	"1409": "element type is wrong!",
            	"1502": "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
            	"1503": "cc.Scheduler.pauseTarget():target should be non-null",
            	"1504": "cc.Scheduler.resumeTarget():target should be non-null",
            	"1505": "cc.Scheduler.isTargetPaused():target should be non-null",
            	"1506": "warning: you CANNOT change update priority in scheduled function",
            	"1507": "scheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f",
            	"1508": "Argument callback must not be empty",
            	"1509": "Argument target must be non-nullptr",
            	"1510": "cc.Scheduler: Illegal target which doesn't have id, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
            	"1511": "cc.Scheduler: pause state of the scheduled task doesn't match the element pause state in Scheduler, the given paused state will be ignored.",
            	"1513": "cc.Scheduler: scheduler stopped using `__instanceId` as id since v2.0, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
            	"1607": "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
            	"1619": "callback function must be non-null",
            	"1620": "interval must be positive",
            	"1623": "Set '%s' to normal node (not persist root node).",
            	"1624": "Replacing with the same sgNode",
            	"1625": "The replacement sgNode should not contain any child.",
            	"1626": "Should not set alpha via 'color', set 'opacity' please.",
            	"1627": "Not support for asynchronous creating node in SG",
            	"1632": "Node name can not include '/'.",
            	"1633": "Internal error, should not remove unknown node from parent.",
            	"1635": "reorderChild: this child is not in children list.",
            	"1636": "Node's zIndex value can't be greater than cc.macro.MAX_ZINDEX, setting to the maximum value",
            	"1637": "Node's zIndex value can't be smaller than cc.macro.MIN_ZINDEX, setting to the minimum value",
            	"1638": "Private node's zIndex can't be set, it will keep cc.macro.MIN_ZINDEX as its value",
            	"1800": "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
            	"1801": "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
            	"1802": "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
            	"1803": "cc._EventListenerAcceleration.checkAvailable():_onAccelerationEvent must be non-nil",
            	"1900": "Invalid parameter.",
            	"2200": "Design resolution not valid",
            	"2201": "should set resolutionPolicy",
            	"2300": "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
            	"2402": "Forward pipeline startup failed!",
            	"3103": "cc.Texture.addImage(): path should be non-null",
            	"3119": "Lazy init texture with image element failed due to image loading failure: %s",
            	"3120": "Loading texture with unsupported type: '%s'. Add '%s' into 'cc.macro.SUPPORT_TEXTURE_FORMATS' please.",
            	"3121": "Can't find a texture format supported by the current platform! Please add a fallback format in the editor.",
            	"3300": "Rect width exceeds maximum margin: %s",
            	"3301": "Rect height exceeds maximum margin: %s",
            	"3500": "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
            	"3501": "Invalid listener type!",
            	"3502": "Can't set fixed priority with scene graph based listener.",
            	"3503": "Invalid parameters.",
            	"3504": "listener must be a cc.EventListener object when adding a fixed priority listener",
            	"3505": "The listener has been registered, please don't register it again.",
            	"3506": "Unsupported listener target.",
            	"3507": "Invalid scene graph priority!",
            	"3508": "If program goes here, there should be event in dispatch.",
            	"3509": "_inDispatch should be 1 here.",
            	"3510": "%s's scene graph node not contains in the parent's children",
            	"3511": "event is undefined",
            	"3512": "Event manager only support scene graph priority for ui nodes which contain UIComponent",
            	"3520": "Device Motion Event request permission: %s",
            	"3521": "Device Motion Event request permission failed: %s",
            	"3601": "The editor property 'playOnFocus' should be used with 'executeInEditMode' in class '%s'",
            	"3602": "Unknown editor property '%s' in class '%s'.",
            	"3603": "Use 'cc.Float' or 'cc.Integer' instead of 'cc.Number' please.",
            	"3604": "Can only indicate one type attribute for %s.",
            	"3605": "The default value of %s is not instance of %s.",
            	"3606": "No needs to indicate the '%s' attribute for %s, which its default value is type of %s.",
            	"3607": "The default value of %s must be an empty string.",
            	"3608": "The type of %s must be CCString, not String.",
            	"3609": "The type of %s must be CCBoolean, not Boolean.",
            	"3610": "The type of %s must be CCFloat or CCInteger, not Number.",
            	"3611": "Can not indicate the '%s' attribute for %s, which its default value is type of %s.",
            	"3612": "%s Just set the default value to 'new %s()' and it will be handled properly.",
            	"3613": "'No need to use 'serializable: false' or 'editorOnly: true' for the getter of '%s.%s', every getter is actually non-serialized.",
            	"3614": "Should not define constructor for cc.Component %s.",
            	"3615": "Each script can have at most one Component.",
            	"3616": "Should not specify class name %s for Component which defines in project.",
            	"3618": "ctor of '%s' can not be another CCClass",
            	"3623": "Can not use 'editor' attribute, '%s' not inherits from Components.",
            	"3625": "[isChildClassOf] superclass should be function type, not",
            	"3626": "Can't remove '%s' because '%s' depends on it.",
            	"3627": "Should not add renderer component (%s) to a Canvas node.",
            	"3628": "Should not add %s to a node which size is already used by its other component.",
            	"3633": "Properties function of '%s' should return an object!",
            	"3634": "Disallow to use '.' in property name",
            	"3637": "Can not declare %s.%s, it is already defined in the prototype of %s",
            	"3639": "Can not apply the specified attribute to the getter of '%s.%s', attribute index: %s",
            	"3640": "'%s': the setter of '%s' is already defined!",
            	"3641": "Can not construct %s because it contains object property.",
            	"3644": "Please define 'type' parameter of %s.%s as the actual constructor.",
            	"3645": "Please define 'type' parameter of %s.%s as the constructor of %s.",
            	"3646": "Unknown 'type' parameter of %s.%s：%s",
            	"3647": "The length of range array must be equal or greater than 2",
            	"3648": "Can not declare %s.%s method, it is already defined in the properties of %s.",
            	"3652": "Failed to `new %s()` under the hood, %s\nIt is used for getting default values declared in TypeScript in the first place.\nPlease ensure the constructor can be called during the script's initialization.",
            	"3653": "Please do not specifiy \"default\" attribute in decorator of \"%s\" property in \"%s\" class.\nDefault value must be initialized at their declaration:\n\n \n// Before:\n@property({\n  type: cc.SpriteFrame\n  default: null  // <--\n})\nmyProp;\n// After:\n@property({\n  type: cc.SpriteFrame\n})\nmyProp = null;   // <--",
            	"3654": "Please specifiy a default value for \"%s.%s\" property at its declaration:\n\n \n// Before:\n@property(...)\nmyProp;\n// After:\n@property(...)\nmyProp = 0;",
            	"3655": "Can not specifiy \"get\" or \"set\"  attribute in decorator for \"%s\" property in \"%s\" class.\nPlease use:\n\n \n@property(...)\nget %s () {\n    ...\n}\n@property\nset %s (value) {\n    ...\n}",
            	"3659": "Violation error: extending enumerations shall have non-overlaped member names or member values",
            	"3660": "You are explicitly specifying `undefined` type to cc property \"%s\" of cc class \"%s\".\nIs this intended? If not, this may indicate a circular reference.\nFor example:\n\n \n// foo.ts\nimport { _decorator } from 'cc';\nimport { Bar } from './bar';  // Given that './bar' also reference 'foo.ts'.\n                              // When importing './bar', execution of './bar' is hung on to wait execution of 'foo.ts',\n                              // the `Bar` imported here is `undefined` until './bar' finish its execution.\n                              // It leads to that\n@_decorator.ccclass           //  ↓\nexport class Foo {            //  ↓\n    @_decorator.type(Bar)     //  → is equivalent to `@_decorator.type(undefined)`\n    public bar: Bar;          // To eliminate this error, either:\n                              // - Refactor your module structure(recommended), or\n                              // - specify the type as cc class name: `@_decorator.type('Bar'/* or any name you specified for `Bar` */)`\n}",
            	"3700": "internal error: _prefab is undefined",
            	"3701": "Failed to load prefab asset for node '%s'",
            	"3800": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
            	"3801": "The node can not be made persist because it's not under root node.",
            	"3802": "The node can not be made persist because it's not in current scene.",
            	"3803": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
            	"3804": "getComponent: Type must be non-nil",
            	"3805": "Can't add component '%s' because %s already contains the same component.",
            	"3806": "Can't add component '%s' to %s because it conflicts with the existing '%s' derived component.",
            	"3807": "addComponent: Failed to get class '%s'",
            	"3808": "addComponent: Should not add component ('%s') when the scripts are still loading.",
            	"3809": "addComponent: The component to add must be a constructor",
            	"3810": "addComponent: The component to add must be child class of cc.Component",
            	"3811": "_addComponentAt: The component to add must be a constructor",
            	"3812": "_addComponentAt: Index out of range",
            	"3813": "removeComponent: Component must be non-nil",
            	"3814": "Argument must be non-nil",
            	"3815": "Component not owned by this entity",
            	"3816": "Node '%s' is already activating",
            	"3817": "Sorry, the component of '%s' which with an index of %s is corrupted! It has been removed.",
            	"3818": "Failed to read or parse project.json",
            	"3819": "Warning: target element is not a DIV or CANVAS",
            	"3820": "The renderer doesn't support the renderMode %s",
            	"3821": "Cannot change hierarchy while activating or deactivating the parent.",
            	"3822": "addComponent: Cannot add any component to the scene.",
            	"3900": "Invalid clip to add",
            	"3901": "Invalid clip to remove",
            	"3902": "clip is defaultClip, set force to true to force remove clip and animation state",
            	"3903": "animation state is playing, set force to true to force stop and remove clip and animation state",
            	"3904": "motion path of target [%s] in prop [%s] frame [%s] is not valid",
            	"3905": "sprite frames must be an Array.",
            	"3906": "Can't find easing type [%s]",
            	"3907": "animator not added or already removed",
            	"3912": "already-playing",
            	"4003": "Label font size can't be shirnked less than 0!",
            	"4004": "force notify all fonts loaded!",
            	"4011": "Property spriteFrame of Font '%s' is invalid. Using system font instead.",
            	"4012": "The texture of Font '%s' must be already loaded on JSB. Using system font instead.",
            	"4013": "Sorry, lineHeight of system font not supported on JSB.",
            	"4200": "MaskType: IMAGE_STENCIL only support WebGL mode.",
            	"4201": "The alphaThreshold invalid in Canvas Mode.",
            	"4202": "The inverted invalid in Canvas Mode.",
            	"4300": "Can not found the %s page.",
            	"4301": "Can not add a page without UITransform.",
            	"4302": "Can not set the scroll view content when it hasn't UITransform or its parent hasn't UITransform.",
            	"4400": "Invalid RichText img tag! The sprite frame name can't be found in the ImageAtlas!",
            	"4500": "Graphics: There is no model in %s.",
            	"4600": "Script attached to '%s' is missing or invalid.",
            	"4700": "The dom control is not created!",
            	"4800": "unknown asset type",
            	"4901": "loadRes: should not specify the extname in %s %s",
            	"4902": "No need to release non-cached asset.",
            	"4914": "Resources url '%s' does not exist.",
            	"4915": "Pack indices and data do not match in size",
            	"4916": "Failed to download package for %s",
            	"4921": "Invalid pipe or invalid index provided!",
            	"4922": "The pipe to be inserted is already in the pipeline!",
            	"4923": "Uuid Loader: Parse asset [ %s ] failed : %s",
            	"4924": "JSON Loader: Input item doesn't contain string content",
            	"4925": "Uuid Loader: Deserialize asset [ %s ] failed : %s",
            	"4926": "Audio Downloader: no web audio context.",
            	"4927": "Audio Downloader: audio not supported on this browser!",
            	"4928": "Load %s failed!",
            	"4929": "Load Webp ( %s ) failed",
            	"4930": "Load image ( %s ) failed",
            	"4932": "Since v1.10, for any atlas (\"%s\") in the \"resources\" directory, it is not possible to find the contained SpriteFrames via `loadRes`, `getRes` or `releaseRes`. Load the SpriteAtlas first and then use `spriteAtlas.getSpriteFrame(name)` instead please.",
            	"4933": "Download Font [ %s ] failed, using Arial or system default font instead",
            	"4934": "Please assure that the full path of sub asset is correct!",
            	"4935": "Failed to skip prefab asset while deserializing PrefabInfo",
            	"5000": "You are trying to destroy a object twice or more.",
            	"5001": "object not yet destroyed",
            	"5100": "Not a plist file!",
            	"5200": "Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option",
            	"5201": "browser don't support web audio",
            	"5202": "This feature supports WebGL render mode only.",
            	"5300": "Type of target to deserialize not matched with data: target is %s, data is %s",
            	"5301": "Can not find script '%s'",
            	"5302": "Can not find class '%s'",
            	"5303": "Failed to deserialize %s, missing _deserialize function.",
            	"5304": "Unable to deserialize version %s data.",
            	"5402": "cc.js.addon called on non-object:",
            	"5403": "cc.js.mixin: arguments must be type object:",
            	"5404": "The base class to extend from must be non-nil",
            	"5405": "The class to extend must be non-nil",
            	"5406": "Class should be extended before assigning any prototype members.",
            	"5500": "'notify' can not be used in 'get/set' !",
            	"5501": "'notify' must be used with 'default' !",
            	"5507": "The 'default' attribute of '%s.%s' must be an array",
            	"5508": "Invalid type of %s.%s",
            	"5510": "The 'type' attribute of '%s.%s' can not be 'Number', use cc.Float or cc.Integer instead please.",
            	"5511": "The 'type' attribute of '%s.%s' is undefined when loading script",
            	"5512": "Can not serialize '%s.%s' because the specified type is anonymous, please provide a class name or set the 'serializable' attribute of '%s.%s' to 'false'.",
            	"5513": "The 'default' value of '%s.%s' should not be used with a 'get' function.",
            	"5514": "The 'default' value of '%s.%s' should not be used with a 'set' function.",
            	"5515": "The 'default' value of '%s.%s' can not be an constructor. Set default to null please.",
            	"5517": "'%s.%s' hides inherited property '%s.%s'. To make the current property override that implementation, add the `override: true` attribute please.",
            	"5601": "Can not get current scene.",
            	"5602": "Scene is destroyed",
            	"5603": "reference node is destroyed",
            	"5700": "no %s or %s on %s",
            	"5800": "%s.lerp not yet implemented.",
            	"5801": "%s.clone not yet implemented.",
            	"5802": "%s.equals not yet implemented.",
            	"5900": "MotionStreak only support WebGL mode.",
            	"5901": "cc.MotionStreak.getOpacity has not been supported.",
            	"5902": "cc.MotionStreak.setOpacity has not been supported.",
            	"6000": "Custom should not be false if file is not specified.",
            	"6001": "The new %s must not be NaN",
            	"6017": "Incomplete or corrupt PNG file",
            	"6018": "Invalid filter algorithm: %s",
            	"6019": "Invalid byte order value.",
            	"6020": "You forgot your towel!",
            	"6021": "Unknown Field Tag: %s",
            	"6022": "Too many bits requested",
            	"6023": "No bits requested",
            	"6024": "Cannot recover from missing StripByteCounts",
            	"6025": "Cannot handle sub-byte bits per sample",
            	"6026": "Cannot handle sub-byte bits per pixel",
            	"6027": "Palette image missing color map",
            	"6028": "Unknown Photometric Interpretation: %s",
            	"6029": "Unkown error",
            	"6030": "cc.ParticleSystem: error decoding or ungzipping textureImageData",
            	"6031": "cc.ParticleSystem: unknown image format with Data",
            	"6032": "cc.ParticleSystem.initWithDictionary() : error loading the texture",
            	"6400": "asset.url is not usable in core process",
            	"6402": "AssetLibrary has already been initialized!",
            	"6500": "Widget target must be one of the parent nodes of it",
            	"6600": "collider not added or already removed",
            	"6601": "Can't find testFunc for (%s, $s).",
            	"6700": "Can't init canvas '%s' because it conflicts with the existing '%s', the scene should only have one active canvas at the same time.",
            	"6705": "Argument must be non-nil",
            	"6706": "Priority can't be set in RenderRoot2D node",
            	"6800": "Callback of event must be non-nil",
            	"6801": "The message must be provided",
            	"6900": "The thing you want to instantiate must be an object",
            	"6901": "The thing you want to instantiate is nil",
            	"6902": "The thing you want to instantiate is destroyed",
            	"6903": "The instantiate method for given asset do not implemented",
            	"6904": "Can not instantiate array",
            	"6905": "Can not instantiate DOM element",
            	"7100": "%s already defined in Enum.",
            	"7101": "Sorry, 'cc.Enum' not available on this platform, please report this error here: <https://github.com/cocos-creator/engine/issues/new>",
            	"7200": "Method 'initWithTMXFile' is no effect now, please set property 'tmxAsset' instead.",
            	"7201": "Method 'initWithXML' is no effect now, please set property 'tmxAsset' instead.",
            	"7202": "Add component TiledLayer into node failed.",
            	"7203": "Property 'mapLoaded' is unused now. Please write the logic to the callback 'start'.",
            	"7210": "TMX Hexa zOrder not supported",
            	"7211": "TMX invalid value",
            	"7215": "cocos2d: Warning: TMX Layer %s has no tiles",
            	"7216": "cocos2d: TMXFormat: Unsupported TMX version: %s",
            	"7217": "cocos2d: TMXFomat: Unsupported orientation: %s",
            	"7218": "cc.TMXMapInfo.parseXMLFile(): unsupported compression method",
            	"7219": "cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported",
            	"7221": "cc.TMXMapInfo.parseXMLFile(): Texture '%s' not found.",
            	"7222": "Parse %s failed.",
            	"7236": "cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released",
            	"7237": "cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released",
            	"7238": "cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released",
            	"7239": "cc.TMXLayer.setTileGID(): invalid gid: %s",
            	"7240": "cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released",
            	"7241": "cc.TiledMap.initWithXML(): Map not found. Please check the filename.",
            	"7401": "Failed to set _defaultArmatureIndex for '%s' because the index is out of range.",
            	"7402": "Failed to set _animationIndex for '%s' because the index is out of range.",
            	"7501": "Failed to set _defaultSkinIndex for '%s' because the index is out of range.",
            	"7502": "Failed to set _animationIndex for '%s' because its skeletonData is invalid.",
            	"7503": "Failed to set _animationIndex for '%s' because the index is out of range.",
            	"7504": "Can not render dynamic created SkeletonData",
            	"7506": "Failed to load spine atlas '$s'",
            	"7507": "Please re-import '%s' because its textures is not initialized! (This workflow will be improved in the future.)",
            	"7508": "The atlas asset of '%s' is not exists!",
            	"7509": "Spine: Animation not found: %s",
            	"7510": "Spine: Animation not found: %s",
            	"7600": "The context of RenderTexture is invalid.",
            	"7601": "cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;",
            	"7602": "Could not attach texture to the framebuffer",
            	"7603": "clearDepth isn't supported on Cocos2d-Html5",
            	"7604": "saveToFile isn't supported on Cocos2d-Html5",
            	"7605": "newCCImage isn't supported on Cocos2d-Html5",
            	"7700": "On the web is always keep the aspect ratio",
            	"7701": "Can't know status",
            	"7702": "Video player's duration is not ready to get now!",
            	"7703": "Video Downloader: video not supported on this browser!",
            	"7800": "Web does not support loading",
            	"7801": "Web does not support query history",
            	"7802": "Web does not support query history",
            	"7803": "The current browser does not support the GoBack",
            	"7804": "The current browser does not support the GoForward",
            	"7805": "Web does not support zoom",
            	"7900": "cc.math.Matrix3.assign(): current matrix equals matIn",
            	"7901": "cc.math.mat4Assign(): pOut equals pIn",
            	"7902": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
            	"7903": "cc.math.Matrix4 equal: pMat1 and pMat2 are same object.",
            	"7904": "cc.math.Matrix4.extractPlane: Invalid plane index",
            	"7905": "cc.math.mat4Assign(): pOut equals pIn",
            	"7906": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
            	"7907": "cc.math.Matrix4 equals: pMat1 and pMat2 are same object.",
            	"7908": "Invalid matrix mode specified",
            	"7909": "current quaternion is an invalid value",
            	"8000": "Can't handle this field type or size",
            	"8001": "No bytes requested",
            	"8002": "Too many bytes requested",
            	"8003": "Missing StripByteCounts!",
            	"8100": "cocos2d: ERROR: Failed to compile shader:\n %s",
            	"8101": "cocos2d: ERROR: Failed to compile vertex shader",
            	"8102": "cocos2d: ERROR: Failed to compile fragment shader",
            	"8103": "cc.GLProgram.link(): Cannot link invalid program",
            	"8104": "cocos2d: ERROR: Failed to link program: %s",
            	"8105": "cocos2d: cc.shaderCache._loadDefaultShader, error shader type",
            	"8106": "Please load the resource firset : %s",
            	"8107": "cc.GLProgram.getUniformLocationForName(): uniform name should be non-null",
            	"8108": "cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized",
            	"8109": "modelView matrix is undefined.",
            	"8200": "Please set node's active instead of rigidbody's enabled.",
            	"8300": "Should only one camera exists, please check your project.",
            	"8301": "Camera does not support Canvas Mode.",
            	"8400": "Wrong type arguments, 'filePath' must be a String.",
            	"9000": "Stencil manager does not support level bigger than %d in this device.",
            	"9001": "Stencil manager is already empty, cannot pop any mask",
            	"9100": "texture size exceeds current device limits %d/%d",
            	"9300": "The current buffer beyond the limit in ui static component, please reduce the amount",
            	"9301": "The UI has not been initialized",
            	"9302": "Can't getGFXSampler with out device",
            	"9600": "[Physics]: please check to see if physics modules are included",
            	"9610": "[Physics]: cannon.js physics system doesn't support capsule collider",
            	"9611": "[Physics]: builtin physics system doesn't support mesh collider",
            	"9612": "[Physics]: builtin physics system doesn't support cylinder collider",
            	"9620": "[Physics][Ammo]: changing the mesh is not supported after the initialization is completed",
            	"10001": "The sub-mesh contains %d vertices, which beyonds the capability (%d vertices most) of renderer of your platform.",
            	"10002": "Sub-mesh may include at most %d morph targets, but you specified %d.",
            	"11000": "WebGL context lost.",
            	"12001": "BlendFactors are disabled when using custom material, please modify the blend state in the material instead.",
            	"12002": "Can't add renderable component to this node because it already have one.",
            	"0100": "%s not yet implemented.",
            	"0200": "You should specify a valid DOM canvas element."
            };

            var logList = null;
            var ccLog = console.log.bind(console);
            var ccWarn = ccLog;
            var ccError = ccLog;

            var ccAssert = function ccAssert(condition, message) {
              if (!condition) {
                for (var _len = arguments.length, optionalParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  optionalParams[_key - 2] = arguments[_key];
                }

                console.log("ASSERT: " + formatString.apply(void 0, [message].concat(optionalParams)));
              }
            };

            function formatString(message) {
              for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                optionalParams[_key2 - 1] = arguments[_key2];
              }

              return legacyCC.js.formatStr.apply(null, [message].concat(optionalParams));
            }

            function log(message) {
              for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                optionalParams[_key3 - 1] = arguments[_key3];
              }

              return ccLog.apply(void 0, [message].concat(optionalParams));
            }
            function warn(message) {
              for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                optionalParams[_key4 - 1] = arguments[_key4];
              }

              return ccWarn.apply(void 0, [message].concat(optionalParams));
            }
            function error(message) {
              for (var _len5 = arguments.length, optionalParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                optionalParams[_key5 - 1] = arguments[_key5];
              }

              return ccError.apply(void 0, [message].concat(optionalParams));
            }
            function assert(value, message) {
              for (var _len6 = arguments.length, optionalParams = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
                optionalParams[_key6 - 2] = arguments[_key6];
              }

              return ccAssert.apply(void 0, [value, message].concat(optionalParams));
            }
            function _resetDebugSetting(mode) {
              ccLog = ccWarn = ccError = ccAssert = function ccAssert() {};

              if (mode === DebugMode.NONE) {
                return;
              }

              if (mode > DebugMode.ERROR) {
                var logToWebPage = function logToWebPage(msg) {
                  if (!legacyCC.game.canvas) {
                    return;
                  }

                  if (!logList) {
                    var logDiv = document.createElement('Div');
                    logDiv.setAttribute('id', 'logInfoDiv');
                    logDiv.setAttribute('width', '200');
                    logDiv.setAttribute('height', legacyCC.game.canvas.height);
                    var logDivStyle = logDiv.style;
                    logDivStyle.zIndex = '99999';
                    logDivStyle.position = 'absolute';
                    logDivStyle.top = logDivStyle.left = '0';
                    logList = document.createElement('textarea');
                    logList.setAttribute('rows', '20');
                    logList.setAttribute('cols', '30');
                    logList.setAttribute('disabled', 'true');
                    var logListStyle = logList.style;
                    logListStyle.backgroundColor = 'transparent';
                    logListStyle.borderBottom = '1px solid #cccccc';
                    logListStyle.borderTopWidth = logListStyle.borderLeftWidth = logListStyle.borderRightWidth = '0px';
                    logListStyle.borderTopStyle = logListStyle.borderLeftStyle = logListStyle.borderRightStyle = 'none';
                    logListStyle.padding = '0px';
                    logListStyle.margin = '0px';
                    logDiv.appendChild(logList);
                    legacyCC.game.canvas.parentNode.appendChild(logDiv);
                  }

                  logList.value = logList.value + msg + "\r\n";
                  logList.scrollTop = logList.scrollHeight;
                };

                ccError = function ccError(message) {
                  for (var _len7 = arguments.length, optionalParams = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                    optionalParams[_key7 - 1] = arguments[_key7];
                  }

                  logToWebPage("ERROR :  " + formatString.apply(void 0, [message].concat(optionalParams)));
                };

                ccAssert = function ccAssert(condition, message) {
                  if (!condition) {
                    for (var _len8 = arguments.length, optionalParams = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
                      optionalParams[_key8 - 2] = arguments[_key8];
                    }

                    logToWebPage("ASSERT: " + formatString.apply(void 0, [message].concat(optionalParams)));
                  }
                };

                if (mode !== DebugMode.ERROR_FOR_WEB_PAGE) {
                  ccWarn = function ccWarn(message) {
                    for (var _len9 = arguments.length, optionalParams = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
                      optionalParams[_key9 - 1] = arguments[_key9];
                    }

                    logToWebPage("WARN :  " + formatString.apply(void 0, [message].concat(optionalParams)));
                  };
                }

                if (mode === DebugMode.INFO_FOR_WEB_PAGE) {
                  ccLog = function ccLog(message) {
                    for (var _len10 = arguments.length, optionalParams = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
                      optionalParams[_key10 - 1] = arguments[_key10];
                    }

                    logToWebPage(formatString.apply(void 0, [message].concat(optionalParams)));
                  };
                }
              } else if (console && console.log.apply) {
                if (!console.error) {
                  console.error = console.log;
                }

                if (!console.warn) {
                  console.warn = console.log;
                }

                if ( console.error.bind) {
                  ccError = console.error.bind(console);
                } else {
                  ccError =  console.error ;
                }

                ccAssert = function ccAssert(condition, message) {
                  if (!condition) {
                    for (var _len12 = arguments.length, optionalParams = new Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
                      optionalParams[_key12 - 2] = arguments[_key12];
                    }

                    var errorText = formatString.apply(void 0, [message].concat(optionalParams));

                    {
                      debugger;
                    }
                  }
                };
              }

              if (mode !== DebugMode.ERROR) {
                if (console.warn.bind) {
                  ccWarn = console.warn.bind(console);
                } else {
                  ccWarn =  console.warn ;
                }
              }

              if (mode === DebugMode.INFO) {
                {
                  if (scriptEngineType === 'JavaScriptCore') {
                    ccLog = function ccLog(message) {
                      for (var _len14 = arguments.length, optionalParams = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
                        optionalParams[_key14 - 1] = arguments[_key14];
                      }

                      return console.log.apply(console, [message].concat(optionalParams));
                    };
                  } else {
                    ccLog = console.log;
                  }
                }
              }
            }
            function _throw(error_) {
              {
                var stack = error_.stack;

                if (stack) {
                  error( error_ + "\n" + stack );
                } else {
                  error(error_);
                }
              }
            }

            function getTypedFormatter(type) {
              return function (id) {
                var msg =  debugInfos[id] || 'unknown id' ;

                for (var _len16 = arguments.length, args = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
                  args[_key16 - 1] = arguments[_key16];
                }

                if (args.length === 0) {
                  return msg;
                }

                return  formatString.apply(void 0, [msg].concat(args)) ;
              };
            }

            var logFormatter = getTypedFormatter();
            function logID(id) {
              for (var _len17 = arguments.length, optionalParams = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
                optionalParams[_key17 - 1] = arguments[_key17];
              }

              log(logFormatter.apply(void 0, [id].concat(optionalParams)));
            }
            var warnFormatter = getTypedFormatter();
            function warnID(id) {
              for (var _len18 = arguments.length, optionalParams = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
                optionalParams[_key18 - 1] = arguments[_key18];
              }

              warn(warnFormatter.apply(void 0, [id].concat(optionalParams)));
            }
            var errorFormatter = getTypedFormatter();
            function errorID(id) {
              for (var _len19 = arguments.length, optionalParams = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
                optionalParams[_key19 - 1] = arguments[_key19];
              }

              error(errorFormatter.apply(void 0, [id].concat(optionalParams)));
            }
            var assertFormatter = getTypedFormatter();
            function assertID(condition, id) {
              if (condition) {
                return;
              }

              for (var _len20 = arguments.length, optionalParams = new Array(_len20 > 2 ? _len20 - 2 : 0), _key20 = 2; _key20 < _len20; _key20++) {
                optionalParams[_key20 - 2] = arguments[_key20];
              }

              assert(false, assertFormatter.apply(void 0, [id].concat(optionalParams)));
            }
            var DebugMode;

            (function (DebugMode) {
              DebugMode[DebugMode["NONE"] = 0] = "NONE";
              DebugMode[DebugMode["INFO"] = 1] = "INFO";
              DebugMode[DebugMode["WARN"] = 2] = "WARN";
              DebugMode[DebugMode["ERROR"] = 3] = "ERROR";
              DebugMode[DebugMode["INFO_FOR_WEB_PAGE"] = 4] = "INFO_FOR_WEB_PAGE";
              DebugMode[DebugMode["WARN_FOR_WEB_PAGE"] = 5] = "WARN_FOR_WEB_PAGE";
              DebugMode[DebugMode["ERROR_FOR_WEB_PAGE"] = 6] = "ERROR_FOR_WEB_PAGE";
            })(DebugMode || (DebugMode = exports('dJ', {})));

            function getError(errorId) {
              for (var _len21 = arguments.length, param = new Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
                param[_key21 - 1] = arguments[_key21];
              }

              return errorFormatter.apply(void 0, [errorId].concat(param));
            }
            function isDisplayStats() {
              return legacyCC.profiler ? legacyCC.profiler.isShowingStats() : false;
            }
            function setDisplayStats(displayStats) {
              if (legacyCC.profiler) {
                displayStats ? legacyCC.profiler.showStats() : legacyCC.profiler.hideStats();
                legacyCC.game.config.showFPS = !!displayStats;
              }
            }

            var debug = /*#__PURE__*/Object.freeze({
                __proto__: null,
                log: log,
                warn: warn,
                error: error,
                assert: assert,
                _resetDebugSetting: _resetDebugSetting,
                _throw: _throw,
                logID: logID,
                warnID: warnID,
                errorID: errorID,
                assertID: assertID,
                get DebugMode () { return DebugMode; },
                getError: getError,
                isDisplayStats: isDisplayStats,
                setDisplayStats: setDisplayStats
            });
            exports('h', debug);

            var EXTNAME_RE = /(\.[^\.\/\?\\]*)(\?.*)?$/;
            var DIRNAME_RE = /((.*)(\/|\\|\\\\))?(.*?\..*$)?/;
            var NORMALIZE_RE = /[^\.\/]+\/\.\.\//;
            function join() {
              var result = '';

              for (var _len = arguments.length, segments = new Array(_len), _key = 0; _key < _len; _key++) {
                segments[_key] = arguments[_key];
              }

              for (var _i = 0, _segments = segments; _i < _segments.length; _i++) {
                var segment = _segments[_i];
                result = (result + (result === '' ? '' : '/') + segment).replace(/(\/|\\\\)$/, '');
              }

              return result;
            }
            function extname(path) {
              var temp = EXTNAME_RE.exec(path);
              return temp ? temp[1] : '';
            }
            function mainFileName(fileName) {
              if (fileName) {
                var idx = fileName.lastIndexOf('.');

                if (idx !== -1) {
                  return fileName.substring(0, idx);
                }
              }

              return fileName;
            }
            function basename(path, extName) {
              var index = path.indexOf('?');

              if (index > 0) {
                path = path.substring(0, index);
              }

              var reg = /(\/|\\)([^\/\\]+)$/g;
              var result = reg.exec(path.replace(/(\/|\\)$/, ''));

              if (!result) {
                return path;
              }

              var baseName = result[2];

              if (extName && path.substring(path.length - extName.length).toLowerCase() === extName.toLowerCase()) {
                return baseName.substring(0, baseName.length - extName.length);
              }

              return baseName;
            }
            function dirname(path) {
              var temp = DIRNAME_RE.exec(path);
              return temp ? temp[2] : '';
            }
            function changeExtname(path, extName) {
              extName = extName || '';
              var index = path.indexOf('?');
              var tempStr = '';

              if (index > 0) {
                tempStr = path.substring(index);
                path = path.substring(0, index);
              }

              index = path.lastIndexOf('.');

              if (index < 0) {
                return path + extName + tempStr;
              }

              return path.substring(0, index) + extName + tempStr;
            }
            function changeBasename(path, baseName, isSameExt) {
              if (baseName.indexOf('.') === 0) {
                return changeExtname(path, baseName);
              }

              var index = path.indexOf('?');
              var tempStr = '';
              var ext = isSameExt ? extname(path) : '';

              if (index > 0) {
                tempStr = path.substring(index);
                path = path.substring(0, index);
              }

              index = path.lastIndexOf('/');
              index = index <= 0 ? 0 : index + 1;
              return path.substring(0, index) + baseName + ext + tempStr;
            }
            function _normalize(url) {
              var oldUrl = url = String(url);

              do {
                oldUrl = url;
                url = url.replace(NORMALIZE_RE, '');
              } while (oldUrl.length !== url.length);

              return url;
            }
            function stripSep(path) {
              return path.replace(/[\/\\]$/, '');
            }
            function getSeperator() {
              return legacyCC.sys.os === legacyCC.sys.OS_WINDOWS ? '\\' : '/';
            }

            var path = /*#__PURE__*/Object.freeze({
                __proto__: null,
                join: join,
                extname: extname,
                mainFileName: mainFileName,
                basename: basename,
                dirname: dirname,
                changeExtname: changeExtname,
                changeBasename: changeBasename,
                _normalize: _normalize,
                stripSep: stripSep,
                getSeperator: getSeperator
            });
            exports('db', path);

            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }

            function _extends() {
              _extends = exports('d_', Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];

                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }

                return target;
              });

              return _extends.apply(this, arguments);
            }

            function _inheritsLoose(subClass, superClass) {
              subClass.prototype = Object.create(superClass.prototype);
              subClass.prototype.constructor = subClass;
              subClass.__proto__ = superClass;
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };

              return _setPrototypeOf(o, p);
            }

            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;

              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }

            function _construct(Parent, args, Class) {
              if (_isNativeReflectConstruct()) {
                _construct = exports('fK', Reflect.construct);
              } else {
                _construct = exports('fK', function _construct(Parent, args, Class) {
                  var a = [null];
                  a.push.apply(a, args);
                  var Constructor = Function.bind.apply(Parent, a);
                  var instance = new Constructor();
                  if (Class) _setPrototypeOf(instance, Class.prototype);
                  return instance;
                });
              }

              return _construct.apply(null, arguments);
            }

            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }

              return self;
            }

            function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if (typeof o === "string") return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor) n = o.constructor.name;
              if (n === "Map" || n === "Set") return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }

            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length) len = arr.length;

              for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

              return arr2;
            }

            function _createForOfIteratorHelperLoose(o, allowArrayLike) {
              var it;

              if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                  if (it) o = it;
                  var i = 0;
                  return function () {
                    if (i >= o.length) return {
                      done: true
                    };
                    return {
                      done: false,
                      value: o[i++]
                    };
                  };
                }

                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }

              it = o[Symbol.iterator]();
              return it.next.bind(it);
            }

            function _initializerDefineProperty(target, property, descriptor, context) {
              if (!descriptor) return;
              Object.defineProperty(target, property, {
                enumerable: descriptor.enumerable,
                configurable: descriptor.configurable,
                writable: descriptor.writable,
                value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
              });
            }

            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
              var desc = {};
              Object.keys(descriptor).forEach(function (key) {
                desc[key] = descriptor[key];
              });
              desc.enumerable = !!desc.enumerable;
              desc.configurable = !!desc.configurable;

              if ('value' in desc || desc.initializer) {
                desc.writable = true;
              }

              desc = decorators.slice().reverse().reduce(function (desc, decorator) {
                return decorator(target, property, desc) || desc;
              }, desc);

              if (context && desc.initializer !== void 0) {
                desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                desc.initializer = undefined;
              }

              if (desc.initializer === void 0) {
                Object.defineProperty(target, property, desc);
                desc = null;
              }

              return desc;
            }

            var INT_BITS = 32;
            var INT_MAX = exports('fF', 0x7fffffff);
            var INT_MIN = -1 << INT_BITS - 1;
            function sign(v) {
              return (v > 0) - (v < 0);
            }
            function abs(v) {
              var mask = v >> INT_BITS - 1;
              return (v ^ mask) - mask;
            }
            function min(x, y) {
              return y ^ (x ^ y) & -(x < y);
            }
            function max(x, y) {
              return x ^ (x ^ y) & -(x < y);
            }
            function isPow2(v) {
              return !(v & v - 1) && !!v;
            }
            function log2(v) {
              var r;
              var shift;
              r = (v > 0xFFFF) << 4;
              v >>>= r;
              shift = (v > 0xFF) << 3;
              v >>>= shift;
              r |= shift;
              shift = (v > 0xF) << 2;
              v >>>= shift;
              r |= shift;
              shift = (v > 0x3) << 1;
              v >>>= shift;
              r |= shift;
              return r | v >> 1;
            }
            function log10(v) {
              return v >= 1000000000 ? 9 : v >= 100000000 ? 8 : v >= 10000000 ? 7 : v >= 1000000 ? 6 : v >= 100000 ? 5 : v >= 10000 ? 4 : v >= 1000 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
            }
            function popCount(v) {
              v -= v >>> 1 & 0x55555555;
              v = (v & 0x33333333) + (v >>> 2 & 0x33333333);
              return (v + (v >>> 4) & 0xF0F0F0F) * 0x1010101 >>> 24;
            }
            function countTrailingZeros(v) {
              var c = 32;
              v &= -v;

              if (v) {
                c--;
              }

              if (v & 0x0000FFFF) {
                c -= 16;
              }

              if (v & 0x00FF00FF) {
                c -= 8;
              }

              if (v & 0x0F0F0F0F) {
                c -= 4;
              }

              if (v & 0x33333333) {
                c -= 2;
              }

              if (v & 0x55555555) {
                c -= 1;
              }

              return c;
            }
            function nextPow2(v) {
              v += v === 0;
              --v;
              v |= v >>> 1;
              v |= v >>> 2;
              v |= v >>> 4;
              v |= v >>> 8;
              v |= v >>> 16;
              return v + 1;
            }
            function prevPow2(v) {
              v |= v >>> 1;
              v |= v >>> 2;
              v |= v >>> 4;
              v |= v >>> 8;
              v |= v >>> 16;
              return v - (v >>> 1);
            }
            function parity(v) {
              v ^= v >>> 16;
              v ^= v >>> 8;
              v ^= v >>> 4;
              v &= 0xf;
              return 0x6996 >>> v & 1;
            }
            var REVERSE_TABLE = new Array(256);

            (function (tab) {
              for (var i = 0; i < 256; ++i) {
                var v = i;
                var r = i;
                var s = 7;

                for (v >>>= 1; v; v >>>= 1) {
                  r <<= 1;
                  r |= v & 1;
                  --s;
                }

                tab[i] = r << s & 0xff;
              }
            })(REVERSE_TABLE);

            function reverse(v) {
              return REVERSE_TABLE[v & 0xff] << 24 | REVERSE_TABLE[v >>> 8 & 0xff] << 16 | REVERSE_TABLE[v >>> 16 & 0xff] << 8 | REVERSE_TABLE[v >>> 24 & 0xff];
            }
            function interleave2(x, y) {
              x &= 0xFFFF;
              x = (x | x << 8) & 0x00FF00FF;
              x = (x | x << 4) & 0x0F0F0F0F;
              x = (x | x << 2) & 0x33333333;
              x = (x | x << 1) & 0x55555555;
              y &= 0xFFFF;
              y = (y | y << 8) & 0x00FF00FF;
              y = (y | y << 4) & 0x0F0F0F0F;
              y = (y | y << 2) & 0x33333333;
              y = (y | y << 1) & 0x55555555;
              return x | y << 1;
            }
            function deinterleave2(v, n) {
              v = v >>> n & 0x55555555;
              v = (v | v >>> 1) & 0x33333333;
              v = (v | v >>> 2) & 0x0F0F0F0F;
              v = (v | v >>> 4) & 0x00FF00FF;
              v = (v | v >>> 16) & 0x000FFFF;
              return v << 16 >> 16;
            }
            function interleave3(x, y, z) {
              x &= 0x3FF;
              x = (x | x << 16) & 4278190335;
              x = (x | x << 8) & 251719695;
              x = (x | x << 4) & 3272356035;
              x = (x | x << 2) & 1227133513;
              y &= 0x3FF;
              y = (y | y << 16) & 4278190335;
              y = (y | y << 8) & 251719695;
              y = (y | y << 4) & 3272356035;
              y = (y | y << 2) & 1227133513;
              x |= y << 1;
              z &= 0x3FF;
              z = (z | z << 16) & 4278190335;
              z = (z | z << 8) & 251719695;
              z = (z | z << 4) & 3272356035;
              z = (z | z << 2) & 1227133513;
              return x | z << 2;
            }
            function deinterleave3(v, n) {
              v = v >>> n & 1227133513;
              v = (v | v >>> 2) & 3272356035;
              v = (v | v >>> 4) & 251719695;
              v = (v | v >>> 8) & 4278190335;
              v = (v | v >>> 16) & 0x3FF;
              return v << 22 >> 22;
            }
            function nextCombination(v) {
              var t = v | v - 1;
              return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
            }

            var bits = /*#__PURE__*/Object.freeze({
                __proto__: null,
                INT_BITS: INT_BITS,
                INT_MAX: INT_MAX,
                INT_MIN: INT_MIN,
                sign: sign,
                abs: abs,
                min: min,
                max: max,
                isPow2: isPow2,
                log2: log2,
                log10: log10,
                popCount: popCount,
                countTrailingZeros: countTrailingZeros,
                nextPow2: nextPow2,
                prevPow2: prevPow2,
                parity: parity,
                reverse: reverse,
                interleave2: interleave2,
                deinterleave2: deinterleave2,
                interleave3: interleave3,
                deinterleave3: deinterleave3,
                nextCombination: nextCombination
            });
            exports('cu', bits);

            var defaultLogTimes = 10;
            function setDefaultLogTimes(times) {
              if (times > 0) {
                defaultLogTimes = times;
              }
            }
            var replaceProperty;
            var removeProperty;
            var markAsWarning;
            var replacePropertyLog;
            var markAsWarningLog;
            var removePropertyLog;
            var messageID = 0;
            var messageMap = new Map();

            replacePropertyLog = function replacePropertyLog(n, dp, n2, newp, f, id) {
              var item = messageMap.get(id);

              if (item && item.logTimes > item.count) {
                f('\'%s\' is deprecated, please use \'%s\' instead.', n + "." + dp, n2 + "." + newp);
                item.count++;
              }
            };

            replaceProperty = exports('de', function replaceProperty(owner, ownerName, properties) {
              if (owner == null) return;
              properties.forEach(function (item) {
                var id = messageID++;
                messageMap.set(id, {
                  id: id,
                  count: 0,
                  logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
                });
                var target = item.target != null ? item.target : owner;
                var newName = item.newName != null ? item.newName : item.name;
                var targetName = item.targetName != null ? item.targetName : ownerName;
                var sameTarget = target == owner;

                if (item.customFunction != null) {
                  owner[item.name] = function () {
                    var _ref;

                    replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                    return (_ref = item.customFunction).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments)));
                  };
                } else if (item.customSetter != null || item.customGetter != null) {
                  var hasSetter = item.customSetter != null;
                  var hasGetter = item.customGetter != null;

                  if (hasSetter && hasGetter) {
                    Object.defineProperty(owner, item.name, {
                      get: function get() {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                        return item.customGetter.call(this);
                      },
                      set: function set(v) {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                        item.customSetter.call(this, v);
                      },
                      enumerable: false
                    });
                  } else if (hasSetter) {
                    Object.defineProperty(owner, item.name, {
                      set: function set(v) {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                        item.customSetter.call(this, v);
                      },
                      enumerable: false
                    });
                  } else if (hasGetter) {
                    Object.defineProperty(owner, item.name, {
                      get: function get() {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                        return item.customGetter.call(this);
                      },
                      enumerable: false
                    });
                  }
                } else {
                  Object.defineProperty(owner, item.name, {
                    get: function get() {
                      replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);
                      return sameTarget ? this[newName] : target[newName];
                    },
                    set: function set(v) {
                      replacePropertyLog(ownerName, item.name, targetName, newName, warn, id);

                      if (sameTarget) {
                        this[newName] = v;
                      } else {
                        target[newName] = v;
                      }
                    },
                    enumerable: false
                  });
                }
              });
            });

            removePropertyLog = function removePropertyLog(n, dp, f, id, s) {
              var item = messageMap.get(id);
              var ss = s === undefined ? '' : "(" + s + ")";

              if (item && item.logTimes > item.count) {
                f("'%s' has been removed. " + ss, n + "." + dp);
                item.count++;
              }
            };

            removeProperty = exports('df', function removeProperty(owner, ownerName, properties) {
              if (owner == null) return;
              properties.forEach(function (item) {
                var id = messageID++;
                messageMap.set(id, {
                  id: id,
                  count: 0,
                  logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
                });
                Object.defineProperty(owner, item.name, {
                  get: function get() {
                    return removePropertyLog(ownerName, item.name, error, id, item.suggest);
                  },
                  set: function set() {
                    removePropertyLog(ownerName, item.name, error, id, item.suggest);
                  },
                  enumerable: false
                });
              });
            });

            markAsWarningLog = function markAsWarningLog(n, dp, f, id, s) {
              var item = messageMap.get(id);
              var ss = s === undefined ? '' : "(" + s + ")";

              if (item && item.logTimes > item.count) {
                f("'%s' is deprecated. " + ss, n + "." + dp);
                item.count++;
              }
            };

            markAsWarning = exports('dg', function markAsWarning(owner, ownerName, properties) {
              if (owner == null) return;

              var _defaultGetSet = function _defaultGetSet(d, n, dp, f, id, s) {
                if (d.get) {
                  var oldGet = d.get();

                  d.get = function () {
                    markAsWarningLog(n, dp, f, id, s);
                    return oldGet.call(this);
                  };
                }

                if (d.set) {
                  var oldSet = Object.create(d.set);

                  d.set = function (v) {
                    markAsWarningLog(n, dp, f, id, s);
                    oldSet.call(this, v);
                  };
                }
              };

              properties.forEach(function (item) {
                var deprecatedProp = item.name;
                var descriptor = Object.getOwnPropertyDescriptor(owner, deprecatedProp);

                if (!descriptor) {
                  return;
                }

                var id = messageID++;
                messageMap.set(id, {
                  id: id,
                  count: 0,
                  logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
                });

                if (descriptor.value != null) {
                  if (typeof descriptor.value === 'function') {
                    var oldValue = descriptor.value;

                    owner[deprecatedProp] = function () {
                      markAsWarningLog(ownerName, deprecatedProp, warn, id, item.suggest);
                      return oldValue.call.apply(oldValue, [this].concat(Array.prototype.slice.call(arguments)));
                    };
                  } else {
                    _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, item.suggest);
                  }
                } else {
                  _defaultGetSet(descriptor, ownerName, deprecatedProp, warn, id, item.suggest);
                }

                Object.defineProperty(owner, deprecatedProp, {
                  enumerable: false
                });
              });
            });

            var MutableForwardIterator = exports('eM', function () {
              function MutableForwardIterator(array) {
                this.i = 0;
                this.array = array;
              }

              var _proto = MutableForwardIterator.prototype;

              _proto.remove = function remove(value) {
                var index = this.array.indexOf(value);

                if (index >= 0) {
                  this.removeAt(index);
                }
              };

              _proto.removeAt = function removeAt(i) {
                this.array.splice(i, 1);

                if (i <= this.i) {
                  --this.i;
                }
              };

              _proto.fastRemove = function fastRemove(value) {
                var index = this.array.indexOf(value);

                if (index >= 0) {
                  this.fastRemoveAt(index);
                }
              };

              _proto.fastRemoveAt = function fastRemoveAt(i) {
                var array = this.array;
                array[i] = array[array.length - 1];
                --array.length;

                if (i <= this.i) {
                  --this.i;
                }
              };

              _proto.push = function push(item) {
                this.array.push(item);
              };

              _createClass(MutableForwardIterator, [{
                key: "length",
                get: function get() {
                  return this.array.length;
                },
                set: function set(value) {
                  this.array.length = value;

                  if (this.i >= value) {
                    this.i = value - 1;
                  }
                }
              }]);

              return MutableForwardIterator;
            }());

            function removeAt(array, index) {
              array.splice(index, 1);
            }
            function fastRemoveAt(array, index) {
              var length = array.length;

              if (index < 0 || index >= length) {
                return;
              }

              array[index] = array[length - 1];
              array.length = length - 1;
            }
            function remove(array, value) {
              var index = array.indexOf(value);

              if (index >= 0) {
                removeAt(array, index);
                return true;
              } else {
                return false;
              }
            }
            function fastRemove(array, value) {
              var index = array.indexOf(value);

              if (index >= 0) {
                array[index] = array[array.length - 1];
                --array.length;
              }
            }
            function removeIf(array, predicate) {
              var index = array.findIndex(predicate);

              if (index >= 0) {
                var _value = array[index];
                removeAt(array, index);
                return _value;
              }
            }
            function verifyType(array, type) {
              if (array && array.length > 0) {
                for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
                  var item = _step.value;

                  if (!(item instanceof type)) {
                    logID(1300);
                    return false;
                  }
                }
              }

              return true;
            }
            function removeArray(array, removals) {
              for (var i = 0, l = removals.length; i < l; i++) {
                remove(array, removals[i]);
              }
            }
            function appendObjectsAt(array, objects, index) {
              array.splice.apply(array, [index, 0].concat(objects));
              return array;
            }
            function contains(array, value) {
              return array.indexOf(value) >= 0;
            }
            function copy(array) {
              var len = array.length;
              var cloned = new Array(len);

              for (var i = 0; i < len; i += 1) {
                cloned[i] = array[i];
              }

              return cloned;
            }

            var jsarray = /*#__PURE__*/Object.freeze({
                __proto__: null,
                removeAt: removeAt,
                fastRemoveAt: fastRemoveAt,
                remove: remove,
                fastRemove: fastRemove,
                removeIf: removeIf,
                verifyType: verifyType,
                removeArray: removeArray,
                appendObjectsAt: appendObjectsAt,
                contains: contains,
                copy: copy,
                MutableForwardIterator: MutableForwardIterator
            });

            var NonUuidMark = '.';

            var IDGenerator = exports('dW', function () {
              function IDGenerator(category) {
                this.id = void 0;
                this.prefix = void 0;
                this.id = 0 | Math.random() * 998;
                this.prefix = category ? category + NonUuidMark : '';
              }

              var _proto = IDGenerator.prototype;

              _proto.getNewId = function getNewId() {

                return this.prefix + ++this.id;
              };

              return IDGenerator;
            }());

            IDGenerator.global = new IDGenerator('global');

            var tempCIDGenerator = new IDGenerator('TmpCId.');
            var aliasesTag = typeof Symbol === 'undefined' ? '__aliases__' : Symbol('[[Aliases]]');
            var classNameTag = '__classname__';
            var classIdTag = '__cid__';
            function isNumber(object) {
              return typeof object === 'number' || object instanceof Number;
            }
            function isString(object) {
              return typeof object === 'string' || object instanceof String;
            }
            function isEmptyObject(obj) {
              for (var key in obj) {
                return false;
              }

              return true;
            }
            var value = function () {
              var descriptor = {
                value: undefined,
                enumerable: false,
                writable: false,
                configurable: true
              };
              return function (object, propertyName, value_, writable, enumerable) {
                descriptor.value = value_;
                descriptor.writable = writable;
                descriptor.enumerable = enumerable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.value = undefined;
              };
            }();
            var getset = function () {
              var descriptor = {
                get: undefined,
                set: undefined,
                enumerable: false
              };
              return function (object, propertyName, getter, setter, enumerable, configurable) {
                if (enumerable === void 0) {
                  enumerable = false;
                }

                if (configurable === void 0) {
                  configurable = false;
                }

                if (typeof setter === 'boolean') {
                  enumerable = setter;
                  setter = undefined;
                }

                descriptor.get = getter;
                descriptor.set = setter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.get = undefined;
                descriptor.set = undefined;
              };
            }();
            var get = exports('eU', function () {
              var descriptor = {
                get: undefined,
                enumerable: false,
                configurable: false
              };
              return function (object, propertyName, getter, enumerable, configurable) {
                descriptor.get = getter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.get = undefined;
              };
            }());
            var set = function () {
              var descriptor = {
                set: undefined,
                enumerable: false,
                configurable: false
              };
              return function (object, propertyName, setter, enumerable, configurable) {
                descriptor.set = setter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.set = undefined;
              };
            }();
            function createMap(forceDictMode) {
              var map = Object.create(null);

              if (forceDictMode) {
                var INVALID_IDENTIFIER_1 = '.';
                var INVALID_IDENTIFIER_2 = '/';
                map[INVALID_IDENTIFIER_1] = 1;
                map[INVALID_IDENTIFIER_2] = 1;
                delete map[INVALID_IDENTIFIER_1];
                delete map[INVALID_IDENTIFIER_2];
              }

              return map;
            }
            function getClassName(objOrCtor) {
              if (typeof objOrCtor === 'function') {
                var prototype = objOrCtor.prototype;

                if (prototype && prototype.hasOwnProperty(classNameTag) && prototype[classNameTag]) {
                  return prototype[classNameTag];
                }

                var retval = '';

                if (objOrCtor.name) {
                  retval = objOrCtor.name;
                }

                if (objOrCtor.toString) {
                  var arr;
                  var str = objOrCtor.toString();

                  if (str.charAt(0) === '[') {
                    arr = str.match(/\[\w+\s*(\w+)\]/);
                  } else {
                    arr = str.match(/function\s*(\w+)/);
                  }

                  if (arr && arr.length === 2) {
                    retval = arr[1];
                  }
                }

                return retval !== 'Object' ? retval : '';
              } else if (objOrCtor && objOrCtor.constructor) {
                return getClassName(objOrCtor.constructor);
              }

              return '';
            }
            function obsolete(object, obsoleted, newExpr, writable) {
              var extractPropName = /([^.]+)$/;
              var oldProp = extractPropName.exec(obsoleted)[0];
              var newProp = extractPropName.exec(newExpr)[0];

              function getter() {
                {
                  warnID(5400, obsoleted, newExpr);
                }

                return this[newProp];
              }

              function setter(value_) {
                {
                  warnID(5401, obsoleted, newExpr);
                }

                this[newProp] = value_;
              }

              if (writable) {
                getset(object, oldProp, getter, setter);
              } else {
                get(object, oldProp, getter);
              }
            }
            function obsoletes(obj, objName, props, writable) {
              for (var obsoleted in props) {
                var newName = props[obsoleted];
                obsolete(obj, objName + "." + obsoleted, newName, writable);
              }
            }
            var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
            var REGEXP_STR = /%s/;
            function formatStr(msg) {
              for (var _len = arguments.length, subst = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                subst[_key - 1] = arguments[_key];
              }

              if (arguments.length === 0) {
                return '';
              }

              if (subst.length === 0) {
                return "" + msg;
              }

              var hasSubstitution = typeof msg === 'string' && REGEXP_NUM_OR_STR.test(msg);

              if (hasSubstitution) {
                for (var _iterator = _createForOfIteratorHelperLoose(subst), _step; !(_step = _iterator()).done;) {
                  var arg = _step.value;
                  var regExpToTest = typeof arg === 'number' ? REGEXP_NUM_OR_STR : REGEXP_STR;

                  if (regExpToTest.test(msg)) {
                    var notReplaceFunction = "" + arg;
                    msg = msg.replace(regExpToTest, notReplaceFunction);
                  } else {
                    msg += " " + arg;
                  }
                }
              } else {
                for (var _iterator2 = _createForOfIteratorHelperLoose(subst), _step2; !(_step2 = _iterator2()).done;) {
                  var _arg = _step2.value;
                  msg += " " + _arg;
                }
              }

              return msg;
            }
            function shiftArguments() {
              var len = arguments.length - 1;
              var args = new Array(len);

              for (var i = 0; i < len; ++i) {
                args[i] = arguments[i + 1];
              }

              return args;
            }
            function getPropertyDescriptor(object, propertyName) {
              while (object) {
                var pd = Object.getOwnPropertyDescriptor(object, propertyName);

                if (pd) {
                  return pd;
                }

                object = Object.getPrototypeOf(object);
              }

              return null;
            }

            function _copyprop(name, source, target) {
              var pd = getPropertyDescriptor(source, name);

              if (pd) {
                Object.defineProperty(target, name, pd);
              }
            }

            function addon(object) {
              object = object || {};

              for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                sources[_key2 - 1] = arguments[_key2];
              }

              for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
                var source = _sources[_i];

                if (source) {
                  if (typeof source !== 'object') {
                    errorID(5402, source);
                    continue;
                  }

                  for (var name in source) {
                    if (!(name in object)) {
                      _copyprop(name, source, object);
                    }
                  }
                }
              }

              return object;
            }
            function mixin(object) {
              object = object || {};

              for (var _len3 = arguments.length, sources = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                sources[_key3 - 1] = arguments[_key3];
              }

              for (var _i2 = 0, _sources2 = sources; _i2 < _sources2.length; _i2++) {
                var source = _sources2[_i2];

                if (source) {
                  if (typeof source !== 'object') {
                    errorID(5403, source);
                    continue;
                  }

                  for (var name in source) {
                    _copyprop(name, source, object);
                  }
                }
              }

              return object;
            }
            function extend(cls, base) {
              {
                if (!base) {
                  errorID(5404);
                  return;
                }

                if (!cls) {
                  errorID(5405);
                  return;
                }

                if (Object.keys(cls.prototype).length > 0) {
                  errorID(5406);
                }
              }

              for (var p in base) {
                if (base.hasOwnProperty(p)) {
                  cls[p] = base[p];
                }
              }

              cls.prototype = Object.create(base.prototype, {
                constructor: {
                  value: cls,
                  writable: true,
                  configurable: true
                }
              });
              return cls;
            }
            function getSuper(constructor) {
              var proto = constructor.prototype;
              var dunderProto = proto && Object.getPrototypeOf(proto);
              return dunderProto && dunderProto.constructor;
            }
            function isChildClassOf(subclass, superclass) {
              if (subclass && superclass) {
                if (typeof subclass !== 'function') {
                  return false;
                }

                if (typeof superclass !== 'function') {
                  {
                    warnID(3625, superclass);
                  }

                  return false;
                }

                if (subclass === superclass) {
                  return true;
                }

                for (;;) {
                  subclass = getSuper(subclass);

                  if (!subclass) {
                    return false;
                  }

                  if (subclass === superclass) {
                    return true;
                  }
                }
              }

              return false;
            }
            function clear(object) {
              for (var _i3 = 0, _Object$keys = Object.keys(object); _i3 < _Object$keys.length; _i3++) {
                var key = _Object$keys[_i3];
                delete object[key];
              }
            }

            function isTempClassId(id) {
              return typeof id !== 'string' || id.startsWith(tempCIDGenerator.prefix);
            }

            var _idToClass = createMap(true);
            var _nameToClass = createMap(true);

            function setup(tag, table) {
              return function (id, constructor) {
                if (constructor.prototype.hasOwnProperty(tag)) {
                  delete table[constructor.prototype[tag]];
                }

                value(constructor.prototype, tag, id);

                if (id) {
                  var registered = table[id];

                  if (registered && registered !== constructor) {
                    var err = "A Class already exists with the same " + tag + " : \"" + id + "\".";

                    error(err);
                  } else {
                    table[id] = constructor;
                  }
                }
              };
            }

            var _setClassId = setup('__cid__', _idToClass);
            var doSetClassName = setup('__classname__', _nameToClass);
            function setClassName(className, constructor) {
              doSetClassName(className, constructor);

              if (!constructor.prototype.hasOwnProperty(classIdTag)) {
                var id = className || tempCIDGenerator.getNewId();

                if (id) {
                  _setClassId(id, constructor);
                }
              }
            }
            function setClassAlias(target, alias) {
              var nameRegistry = _nameToClass[alias];
              var idRegistry = _idToClass[alias];
              var ok = true;

              if (nameRegistry && nameRegistry !== target) {
                error("\"" + alias + "\" has already been set as name or alias of another class.");
                ok = false;
              }

              if (idRegistry && idRegistry !== target) {
                error("\"" + alias + "\" has already been set as id or alias of another class.");
                ok = false;
              }

              if (ok) {
                var classAliases = target[aliasesTag];

                if (!classAliases) {
                  classAliases = [];
                  target[aliasesTag] = classAliases;
                }

                classAliases.push(alias);
                _nameToClass[alias] = target;
                _idToClass[alias] = target;
              }
            }
            function unregisterClass() {
              for (var _len4 = arguments.length, constructors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                constructors[_key4] = arguments[_key4];
              }

              for (var _i4 = 0, _constructors = constructors; _i4 < _constructors.length; _i4++) {
                var _constructor = _constructors[_i4];
                var p = _constructor.prototype;
                var classId = p[classIdTag];

                if (classId) {
                  delete _idToClass[classId];
                }

                var classname = p[classNameTag];

                if (classname) {
                  delete _nameToClass[classname];
                }

                var aliases = p[aliasesTag];

                if (aliases) {
                  for (var iAlias = 0; iAlias < aliases.length; ++iAlias) {
                    var alias = aliases[iAlias];
                    delete _nameToClass[alias];
                    delete _idToClass[alias];
                  }
                }
              }
            }
            function _getClassById(classId) {
              return _idToClass[classId];
            }
            function getClassByName(classname) {
              return _nameToClass[classname];
            }
            function _getClassId(obj, allowTempId) {
              allowTempId = typeof allowTempId !== 'undefined' ? allowTempId : true;
              var res;

              if (typeof obj === 'function' && obj.prototype.hasOwnProperty(classIdTag)) {
                res = obj.prototype[classIdTag];

                if (!allowTempId && (DEV ) && isTempClassId(res)) {
                  return '';
                }

                return res;
              }

              if (obj && obj.constructor) {
                var prototype = obj.constructor.prototype;

                if (prototype && prototype.hasOwnProperty(classIdTag)) {
                  res = obj[classIdTag];

                  if (!allowTempId && (DEV ) && isTempClassId(res)) {
                    return '';
                  }

                  return res;
                }
              }

              return '';
            }

            var Pool = exports('f7', function () {
              var _proto = Pool.prototype;

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

              _proto._get = function _get() {
                if (this.count > 0) {
                  --this.count;
                  var cache = this._pool[this.count];
                  this._pool[this.count] = null;
                  return cache;
                }

                return null;
              };

              _proto.put = function put(obj) {
                var pool = this._pool;

                if (this.count < pool.length) {
                  if (this._cleanup && this._cleanup(obj) === false) {
                    return;
                  }

                  pool[this.count] = obj;
                  ++this.count;
                }
              };

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

            var array = exports('ep', jsarray);
            var js = exports('eq', {
              IDGenerator: IDGenerator,
              Pool: Pool,
              array: jsarray,
              isNumber: isNumber,
              isString: isString,
              isEmptyObject: isEmptyObject,
              getPropertyDescriptor: getPropertyDescriptor,
              addon: addon,
              mixin: mixin,
              extend: extend,
              getSuper: getSuper,
              isChildClassOf: isChildClassOf,
              clear: clear,
              value: value,
              getset: getset,
              get: get,
              set: set,
              unregisterClass: unregisterClass,
              getClassName: getClassName,
              setClassName: setClassName,
              setClassAlias: setClassAlias,
              getClassByName: getClassByName,

              get _registeredClassNames() {
                return _extends({}, _nameToClass);
              },

              set _registeredClassNames(value) {
                clear(_nameToClass);
                Object.assign(_nameToClass, value);
              },

              get _registeredClassIds() {
                return _extends({}, _idToClass);
              },

              set _registeredClassIds(value) {
                clear(_idToClass);
                Object.assign(_idToClass, value);
              },

              _getClassId: _getClassId,
              _setClassId: _setClassId,
              _getClassById: _getClassById,
              obsolete: obsolete,
              obsoletes: obsoletes,
              formatStr: formatStr,
              shiftArguments: shiftArguments,
              createMap: createMap
            });
            legacyCC.js = js;

            var js$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                array: array,
                js: js,
                IDGenerator: IDGenerator,
                Pool: Pool,
                isNumber: isNumber,
                isString: isString,
                isEmptyObject: isEmptyObject,
                value: value,
                getset: getset,
                get: get,
                set: set,
                createMap: createMap,
                getClassName: getClassName,
                obsolete: obsolete,
                obsoletes: obsoletes,
                formatStr: formatStr,
                shiftArguments: shiftArguments,
                getPropertyDescriptor: getPropertyDescriptor,
                addon: addon,
                mixin: mixin,
                extend: extend,
                getSuper: getSuper,
                isChildClassOf: isChildClassOf,
                clear: clear,
                _idToClass: _idToClass,
                _nameToClass: _nameToClass,
                _setClassId: _setClassId,
                setClassName: setClassName,
                setClassAlias: setClassAlias,
                unregisterClass: unregisterClass,
                _getClassById: _getClassById,
                getClassByName: getClassByName,
                _getClassId: _getClassId
            });
            exports('d9', js$1);

            function BitMask(obj) {
              if ('__bitmask__' in obj) {
                return obj;
              }

              value(obj, '__bitmask__', null, true);
              var lastIndex = -1;
              var keys = Object.keys(obj);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var val = obj[key];

                if (val === -1) {
                  val = ++lastIndex;
                  obj[key] = val;
                } else if (typeof val === 'number') {
                  lastIndex = val;
                } else if (typeof val === 'string' && Number.isInteger(parseFloat(key))) {
                  continue;
                }

                var reverseKey = "" + val;

                if (key !== reverseKey) {

                  value(obj, reverseKey, key);
                }
              }

              return obj;
            }

            BitMask.isBitMask = function (BitMaskType) {
              return BitMaskType && BitMaskType.hasOwnProperty('__bitmask__');
            };

            BitMask.getList = function (BitMaskDef) {
              if (BitMaskDef.__bitmask__) {
                return BitMaskDef.__bitmask__;
              }

              var bitlist = BitMaskDef.__bitmask__ = [];

              for (var name in BitMaskDef) {
                var v = BitMaskDef[name];

                if (Number.isInteger(v)) {
                  bitlist.push({
                    name: name,
                    value: v
                  });
                }
              }

              bitlist.sort(function (a, b) {
                return a.value - b.value;
              });
              return bitlist;
            };
            legacyCC.BitMask = BitMask;

            function assertIsNonNullable(expr, message) {
              assertIsTrue(!(expr === null || expr === undefined), message);
            }
            function assertIsTrue(expr, message) {
              if ( !expr) {
                throw new Error("Assertion failed: " + (message !== null && message !== void 0 ? message : '<no-message>'));
              }
            }

            function Enum(obj) {
              if ('__enums__' in obj) {
                return obj;
              }

              value(obj, '__enums__', null, true);
              return Enum.update(obj);
            }

            Enum.update = function (obj) {
              var lastIndex = -1;
              var keys = Object.keys(obj);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var val = obj[key];

                if (val === -1) {
                  val = ++lastIndex;
                  obj[key] = val;
                } else if (typeof val === 'number') {
                  lastIndex = val;
                } else if (typeof val === 'string' && Number.isInteger(parseFloat(key))) {
                  continue;
                }

                var reverseKey = "" + val;

                if (key !== reverseKey) {

                  value(obj, reverseKey, key);
                }
              }

              if (Array.isArray(obj.__enums__)) {
                updateList(obj);
              }

              return obj;
            };

            (function (_Enum) {})(Enum || (Enum = exports('d6', {})));

            Enum.isEnum = function (enumType) {
              return enumType && enumType.hasOwnProperty('__enums__');
            };

            function assertIsEnum(enumType) {
              assertIsTrue(enumType.hasOwnProperty('__enums__'));
            }

            Enum.getList = function (enumType) {
              assertIsEnum(enumType);

              if (enumType.__enums__) {
                return enumType.__enums__;
              }

              return updateList(enumType);
            };

            function updateList(enumType) {
              assertIsEnum(enumType);
              var enums = enumType.__enums__ || [];
              enums.length = 0;

              for (var name in enumType) {
                var v = enumType[name];

                if (Number.isInteger(v)) {
                  enums.push({
                    name: name,
                    value: v
                  });
                }
              }

              enums.sort(function (a, b) {
                return a.value - b.value;
              });
              enumType.__enums__ = enums;
              return enums;
            }

            {
              var _TestEnum = Enum({
                ZERO: -1,
                ONE: -1,
                TWO: -1,
                THREE: -1
              });

              if (_TestEnum.ZERO !== 0 || _TestEnum.ONE !== 1 || _TestEnum.THREE !== 3) {
                errorID(7101);
              }
            }

            function ccenum(enumType) {
              if (!('__enums__' in enumType)) {
                value(enumType, '__enums__', null, true);
              }
            }
            legacyCC.Enum = Enum;

            var ValueType = exports('d8', function () {
              function ValueType() {}

              var _proto = ValueType.prototype;

              _proto.clone = function clone() {
                errorID(100, getClassName(this) + ".clone");
                return this;
              };

              _proto.equals = function equals(other) {
                return false;
              };

              _proto.set = function set(other) {
                errorID(100, getClassName(this) + ".set");
              };

              _proto.toString = function toString() {
                return "" + {};
              };

              return ValueType;
            }());
            setClassName('cc.ValueType', ValueType);
            legacyCC.ValueType = ValueType;

            var SUPPORT_TEXTURE_FORMATS = ['.astc', '.pkm', '.pvr', '.webp', '.jpg', '.jpeg', '.bmp', '.png'];
            var KEY = {
              none: 0,
              back: 6,
              menu: 18,
              backspace: 8,
              tab: 9,
              enter: 13,
              shift: 16,
              ctrl: 17,
              alt: 18,
              pause: 19,
              capslock: 20,
              escape: 27,
              space: 32,
              pageup: 33,
              pagedown: 34,
              end: 35,
              home: 36,
              left: 37,
              up: 38,
              right: 39,
              down: 40,
              select: 41,
              insert: 45,
              Delete: 46,
              0: 48,
              1: 49,
              2: 50,
              3: 51,
              4: 52,
              5: 53,
              6: 54,
              7: 55,
              8: 56,
              9: 57,
              a: 65,
              b: 66,
              c: 67,
              d: 68,
              e: 69,
              f: 70,
              g: 71,
              h: 72,
              i: 73,
              j: 74,
              k: 75,
              l: 76,
              m: 77,
              n: 78,
              o: 79,
              p: 80,
              q: 81,
              r: 82,
              s: 83,
              t: 84,
              u: 85,
              v: 86,
              w: 87,
              x: 88,
              y: 89,
              z: 90,
              num0: 96,
              num1: 97,
              num2: 98,
              num3: 99,
              num4: 100,
              num5: 101,
              num6: 102,
              num7: 103,
              num8: 104,
              num9: 105,
              '*': 106,
              '+': 107,
              '-': 109,
              numdel: 110,
              '/': 111,
              f1: 112,
              f2: 113,
              f3: 114,
              f4: 115,
              f5: 116,
              f6: 117,
              f7: 118,
              f8: 119,
              f9: 120,
              f10: 121,
              f11: 122,
              f12: 123,
              numlock: 144,
              scrolllock: 145,
              ';': 186,
              semicolon: 186,
              equal: 187,
              '=': 187,
              ',': 188,
              comma: 188,
              dash: 189,
              '.': 190,
              period: 190,
              forwardslash: 191,
              grave: 192,
              '[': 219,
              openbracket: 219,
              backslash: 220,
              ']': 221,
              closebracket: 221,
              quote: 222,
              dpadLeft: 1000,
              dpadRight: 1001,
              dpadUp: 1003,
              dpadDown: 1004,
              dpadCenter: 1005
            };
            var macro = exports('dL', {
              SUPPORT_TEXTURE_FORMATS: SUPPORT_TEXTURE_FORMATS,
              KEY: KEY,
              RAD: Math.PI / 180,
              DEG: 180 / Math.PI,
              REPEAT_FOREVER: Number.MAX_VALUE - 1,
              FLT_EPSILON: 0.0000001192092896,
              ORIENTATION_PORTRAIT: 1,
              ORIENTATION_LANDSCAPE: 2,
              ORIENTATION_AUTO: 3,
              ENABLE_TILEDMAP_CULLING: true,
              TOUCH_TIMEOUT: 5000,
              ENABLE_TRANSPARENT_CANVAS: false,
              ENABLE_WEBGL_ANTIALIAS: true,
              CLEANUP_IMAGE_CACHE: false,
              ENABLE_MULTI_TOUCH: true,
              MAX_LABEL_CANVAS_POOL_SIZE: 20
            });
            legacyCC.macro = macro;

            var BUILTIN_CLASSID_RE = /^(?:cc|dragonBones|sp|ccsg)\..+/;
            var BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var values = new Array(123);

            for (var i = 0; i < 123; ++i) {
              values[i] = 64;
            }

            for (var _i = 0; _i < 64; ++_i) {
              values[BASE64_KEYS.charCodeAt(_i)] = _i;
            }

            var BASE64_VALUES = values;
            function propertyDefine(ctor, sameNameGetSets, diffNameGetSets) {
              function define(np, propName, getter, setter) {
                var pd = Object.getOwnPropertyDescriptor(np, propName);

                if (pd) {
                  if (pd.get) {
                    np[getter] = pd.get;
                  }

                  if (pd.set && setter) {
                    np[setter] = pd.set;
                  }
                } else {
                  var getterFunc = np[getter];

                  if ( !getterFunc) {
                    var clsName = legacyCC.Class._isCCClass(ctor) && getClassName(ctor) || ctor.name || '(anonymous class)';
                    warnID(5700, propName, getter, clsName);
                  } else {
                    getset(np, propName, getterFunc, np[setter]);
                  }
                }
              }

              var propName;
              var np = ctor.prototype;

              for (var _i2 = 0; _i2 < sameNameGetSets.length; _i2++) {
                propName = sameNameGetSets[_i2];
                var suffix = propName[0].toUpperCase() + propName.slice(1);
                define(np, propName, "get" + suffix, "set" + suffix);
              }

              for (propName in diffNameGetSets) {
                var gs = diffNameGetSets[propName];
                define(np, propName, gs[0], gs[1]);
              }
            }
            function pushToMap(map, key, value, pushFront) {
              var exists = map[key];

              if (exists) {
                if (Array.isArray(exists)) {
                  if (pushFront) {
                    exists.push(exists[0]);
                    exists[0] = value;
                  } else {
                    exists.push(value);
                  }
                } else {
                  map[key] = pushFront ? [value, exists] : [exists, value];
                }
              } else {
                map[key] = value;
              }
            }
            function contains$1(refNode, otherNode) {
              if (typeof refNode.contains === 'function') {
                return refNode.contains(otherNode);
              } else if (typeof refNode.compareDocumentPosition === 'function') {
                return !!(refNode.compareDocumentPosition(otherNode) & 16);
              } else {
                var node = otherNode.parentNode;

                if (node) {
                  do {
                    if (node === refNode) {
                      return true;
                    } else {
                      node = node.parentNode;
                    }
                  } while (node !== null);
                }

                return false;
              }
            }
            function isDomNode(obj) {
              if (typeof window === 'object' && typeof Node === 'function') {
                return obj instanceof Node;
              } else {
                return obj && typeof obj === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
              }
            }
            function callInNextTick(callback, p1, p2) {
              if (callback) {
                setTimeout(function () {
                  callback(p1, p2);
                }, 0);
              }
            }
            function tryCatchFunctor_EDITOR(funcName) {
              return Function('target', "" + ('try {\n' + '  target.') + funcName + "();\n" + "}\n" + "catch (e) {\n" + "  cc._throw(e);\n" + "}");
            }
            function isPlainEmptyObj_DEV(obj) {
              if (!obj || obj.constructor !== Object) {
                return false;
              }

              return isEmptyObject(obj);
            }
            function clampf(value, min_inclusive, max_inclusive) {
              if (min_inclusive > max_inclusive) {
                var temp = min_inclusive;
                min_inclusive = max_inclusive;
                max_inclusive = temp;
              }

              return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
            }
            function degreesToRadians(angle) {
              return angle * macro.RAD;
            }
            function radiansToDegrees(angle) {
              return angle * macro.DEG;
            }
            legacyCC.misc = {
              BUILTIN_CLASSID_RE: BUILTIN_CLASSID_RE,
              BASE64_VALUES: BASE64_VALUES,
              propertyDefine: propertyDefine,
              pushToMap: pushToMap,
              contains: contains$1,
              isDomNode: isDomNode,
              callInNextTick: callInNextTick,
              isPlainEmptyObj_DEV: isPlainEmptyObj_DEV,
              clampf: clampf,
              degreesToRadians: degreesToRadians,
              radiansToDegrees: radiansToDegrees
            };

            var misc = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BUILTIN_CLASSID_RE: BUILTIN_CLASSID_RE,
                BASE64_VALUES: BASE64_VALUES,
                propertyDefine: propertyDefine,
                pushToMap: pushToMap,
                contains: contains$1,
                isDomNode: isDomNode,
                callInNextTick: callInNextTick,
                tryCatchFunctor_EDITOR: tryCatchFunctor_EDITOR,
                isPlainEmptyObj_DEV: isPlainEmptyObj_DEV,
                clampf: clampf,
                degreesToRadians: degreesToRadians,
                radiansToDegrees: radiansToDegrees
            });
            exports('da', misc);

            var DELIMETER = '$_$';
            function createAttrsSingle(owner, superAttrs) {
              var attrs = superAttrs ? Object.create(superAttrs) : {};
              value(owner, '__attrs__', attrs);
              return attrs;
            }
            function createAttrs(subclass) {
              if (typeof subclass !== 'function') {
                var instance = subclass;
                return createAttrsSingle(instance, getClassAttrs(instance.constructor));
              }

              var superClass;
              var chains = legacyCC.Class.getInheritanceChain(subclass);

              for (var i = chains.length - 1; i >= 0; i--) {
                var cls = chains[i];

                var attrs = cls.hasOwnProperty('__attrs__') && cls.__attrs__;

                if (!attrs) {
                  superClass = chains[i + 1];
                  createAttrsSingle(cls, superClass && superClass.__attrs__);
                }
              }

              superClass = chains[0];
              createAttrsSingle(subclass, superClass && superClass.__attrs__);
              return subclass.__attrs__;
            }
            function attr(constructor, propertyName) {
              var attrs = getClassAttrs(constructor);
              var prefix = propertyName + DELIMETER;
              var ret = {};

              for (var key in attrs) {
                if (key.startsWith(prefix)) {
                  ret[key.slice(prefix.length)] = attrs[key];
                }
              }

              return ret;
            }
            function getClassAttrs(constructor) {
              return constructor.hasOwnProperty('__attrs__') && constructor.__attrs__ || createAttrs(constructor);
            }
            function setClassAttr(ctor, propName, key, value) {
              getClassAttrs(ctor)[propName + DELIMETER + key] = value;
            }
            var PrimitiveType = function () {
              function PrimitiveType(name, defaultValue) {
                this.name = void 0;
                this["default"] = void 0;
                this.name = name;
                this["default"] = defaultValue;
              }

              var _proto = PrimitiveType.prototype;

              _proto.toString = function toString() {
                return this.name;
              };

              return PrimitiveType;
            }();
            var CCInteger = exports('dt', new PrimitiveType('Integer', 0));
            legacyCC.Integer = CCInteger;
            legacyCC.CCInteger = CCInteger;
            var CCFloat = exports('du', new PrimitiveType('Float', 0.0));
            legacyCC.Float = CCFloat;
            legacyCC.CCFloat = CCFloat;

            var CCBoolean = exports('dv', new PrimitiveType('Boolean', false));
            legacyCC.Boolean = CCBoolean;
            legacyCC.CCBoolean = CCBoolean;
            var CCString = exports('dw', new PrimitiveType('String', ''));
            legacyCC.String = CCString;
            legacyCC.CCString = CCString;
            function getTypeChecker_ET(type, attributeName) {
              return function (constructor, mainPropertyName) {
                var propInfo = "\"" + getClassName(constructor) + "." + mainPropertyName + "\"";
                var mainPropAttrs = attr(constructor, mainPropertyName);
                var mainPropAttrsType = mainPropAttrs.type;

                if (mainPropAttrsType === CCInteger || mainPropAttrsType === CCFloat) {
                  mainPropAttrsType = 'Number';
                } else if (mainPropAttrsType === CCString || mainPropAttrsType === CCBoolean) {
                  mainPropAttrsType = "" + mainPropAttrsType;
                }

                if (mainPropAttrsType !== type) {
                  warnID(3604, propInfo);
                  return;
                }

                if (!mainPropAttrs.hasOwnProperty('default')) {
                  return;
                }

                var defaultVal = mainPropAttrs["default"];

                if (typeof defaultVal === 'undefined') {
                  return;
                }

                var isContainer = Array.isArray(defaultVal) || isPlainEmptyObj_DEV(defaultVal);

                if (isContainer) {
                  return;
                }

                var defaultType = typeof defaultVal;
                var type_lowerCase = type.toLowerCase();

                if (defaultType === type_lowerCase) {
                  if (type_lowerCase === 'object') {
                    if (defaultVal && !(defaultVal instanceof mainPropAttrs.ctor)) {
                      warnID(3605, propInfo, getClassName(mainPropAttrs.ctor));
                    } else {
                      return;
                    }
                  } else if (type !== 'Number') {
                    warnID(3606, attributeName, propInfo, type);
                  }
                } else if (defaultType !== 'function') {
                  if (type === CCString["default"] && defaultVal == null) {
                    warnID(3607, propInfo);
                  } else {
                    warnID(3611, attributeName, propInfo, defaultType);
                  }
                } else {
                  return;
                }

                delete mainPropAttrs.type;
              };
            }
            function getObjTypeChecker_ET(typeCtor) {
              return function (classCtor, mainPropName) {
                getTypeChecker_ET('Object', 'type')(classCtor, mainPropName);
                var defaultDef = getClassAttrs(classCtor)[mainPropName + DELIMETER + "default"];
                var defaultVal = legacyCC.Class.getDefault(defaultDef);

                if (!Array.isArray(defaultVal) && isChildClassOf(typeCtor, legacyCC.ValueType)) {
                  var typename = getClassName(typeCtor);
                  var info = formatStr('No need to specify the "type" of "%s.%s" because %s is a child class of ValueType.', getClassName(classCtor), mainPropName, typename);

                  if (defaultDef) {
                    log(info);
                  } else {
                    warnID(3612, info, typename, getClassName(classCtor), mainPropName, typename);
                  }
                }
              };
            }

            var attributeUtils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DELIMETER: DELIMETER,
                createAttrsSingle: createAttrsSingle,
                createAttrs: createAttrs,
                attr: attr,
                getClassAttrs: getClassAttrs,
                setClassAttr: setClassAttr,
                PrimitiveType: PrimitiveType,
                CCInteger: CCInteger,
                CCFloat: CCFloat,
                CCBoolean: CCBoolean,
                CCString: CCString,
                getTypeChecker_ET: getTypeChecker_ET,
                getObjTypeChecker_ET: getObjTypeChecker_ET
            });

            function parseType(val, type, className, propName) {

              if (Array.isArray(type)) {

                if (type.length > 0) {
                  val.type = type = type[0];
                } else {
                  return errorID(5508, className, propName);
                }
              }

              if (typeof type === 'function') {
                if (type === String) {
                  val.type = legacyCC.String;
                } else if (type === Boolean) {
                  val.type = legacyCC.Boolean;
                } else if (type === Number) {
                  val.type = legacyCC.Float;
                }
              }
            }

            function getBaseClassWherePropertyDefined_DEV(propName, cls) {
              {
                var res;

                for (; cls && cls.__props__ && cls.__props__.indexOf(propName) !== -1; cls = cls.$super) {
                  res = cls;
                }

                if (!res) {
                  error('unknown error');
                }

                return res;
              }
            }

            function _wrapOptions(isGetset, _default, type) {
              var res = isGetset ? {
                _short: true
              } : {
                _short: true,
                "default": _default
              };

              if (type) {
                res.type = type;
              }

              return res;
            }

            function getFullFormOfProperty(options, isGetset) {
              var isLiteral = options && options.constructor === Object;

              if (!isLiteral) {
                if (Array.isArray(options) && options.length > 0) {
                  return _wrapOptions(isGetset, [], options);
                } else if (typeof options === 'function') {
                  var type = options;
                  return _wrapOptions(isGetset, isChildClassOf(type, legacyCC.ValueType) ? new type() : null, type);
                } else if (options instanceof PrimitiveType) {
                  return _wrapOptions(isGetset, options["default"]);
                } else {
                  return _wrapOptions(isGetset, options);
                }
              }

              return null;
            }
            function preprocessAttrs(properties, className, cls) {
              for (var propName in properties) {
                var val = properties[propName];
                var fullForm = getFullFormOfProperty(val, false);

                if (fullForm) {
                  val = properties[propName] = fullForm;
                }

                if (val) {

                  if ( !val.override && cls.__props__.indexOf(propName) !== -1) {
                    var baseClass = getClassName(getBaseClassWherePropertyDefined_DEV(propName, cls));
                    warnID(5517, className, propName, baseClass, propName);
                  }

                  var notify = val.notify;

                  if (notify) {
                    {
                      error('not yet support notify attributes.');
                    }
                  }

                  if ('type' in val) {
                    parseType(val, val.type, className, propName);
                  }
                }
              }
            }
            var CALL_SUPER_DESTROY_REG_DEV = /\b\._super\b|destroy.*\.call\s*\(\s*\w+\s*[,|)]/;
            function doValidateMethodWithProps_DEV(func, funcName, className, cls, base) {
              if (cls.__props__ && cls.__props__.indexOf(funcName) >= 0) {
                var baseClassName = getClassName(getBaseClassWherePropertyDefined_DEV(funcName, cls));
                errorID(3648, className, funcName, baseClassName);
                return false;
              }

              if (funcName === 'destroy' && isChildClassOf(base, legacyCC.Component) && !CALL_SUPER_DESTROY_REG_DEV.test(func)) {
                error("Overwriting '" + funcName + "' function in '" + className + "' class without calling super is not allowed. Call the super function in '" + funcName + "' please.");
              }
            }

            var requiringFrames = [];
            function push(module, uuid, script, importMeta) {
              if (script === undefined) {
                script = uuid;
                uuid = '';
              }

              requiringFrames.push({
                uuid: uuid,
                script: script,
                module: module,
                exports: module.exports,
                beh: null,
                importMeta: importMeta
              });
            }
            function pop() {
              var frameInfo = requiringFrames.pop();
              var module = frameInfo.module;
              var exports = module.exports;

              if (exports === frameInfo.exports) {
                for (var anykey in exports) {
                  return;
                }

                module.exports = exports = frameInfo.cls;
              }
            }
            function peek() {
              return requiringFrames[requiringFrames.length - 1];
            }
            legacyCC._RF = {
              push: push,
              pop: pop,
              peek: peek
            };

            var DELIMETER$1 = DELIMETER;

            function pushUnique(array, item) {
              if (array.indexOf(item) < 0) {
                array.push(item);
              }
            }

            function appendProp(cls, name) {
              {
                if (name.indexOf('.') !== -1) {
                  errorID(3634);
                  return;
                }
              }

              pushUnique(cls.__props__, name);
            }

            function defineProp(cls, className, propName, val) {
              {
                if (CCClass.getInheritanceChain(cls).some(function (x) {
                  return x.prototype.hasOwnProperty(propName);
                })) {
                  errorID(3637, className, propName, className);
                  return;
                }
              }

              appendProp(cls, propName);
              parseAttributes(cls, val, className, propName, false);
            }

            function defineGetSet(cls, name, propName, val) {
              var getter = val.get;
              var setter = val.set;

              if (getter) {
                parseAttributes(cls, val, name, propName, true);

                setClassAttr(cls, propName, 'serializable', false);

                {
                  appendProp(cls, propName);
                }

                {
                  setClassAttr(cls, propName, 'hasGetter', true);
                }
              }

              if (setter) {
                {
                  setClassAttr(cls, propName, 'hasSetter', true);
                }
              }
            }

            function getDefault(defaultVal) {
              if (typeof defaultVal === 'function') {
                {
                  return defaultVal();
                }
              }

              return defaultVal;
            }

            function mixinWithInherited(dest, src, filter) {
              for (var prop in src) {
                if (!dest.hasOwnProperty(prop) && (!filter || filter(prop))) {
                  Object.defineProperty(dest, prop, getPropertyDescriptor(src, prop));
                }
              }
            }

            function doDefine(className, baseClass, mixins, options) {
              var ctor = options.ctor;

              {
                if (CCClass._isCCClass(ctor)) {
                  errorID(3618, className);
                }
              }

              var ctors = [ctor];
              var fireClass = ctor;
              value(fireClass, '__ctors__', ctors.length > 0 ? ctors : null, true);
              var prototype = fireClass.prototype;

              if (baseClass) {
                fireClass.$super = baseClass;
              }

              if (mixins) {
                for (var m = mixins.length - 1; m >= 0; m--) {
                  var mixin = mixins[m];
                  mixinWithInherited(prototype, mixin.prototype);

                  if (CCClass._isCCClass(mixin)) {
                    mixinWithInherited(getClassAttrs(fireClass), getClassAttrs(mixin));
                  }
                }

                prototype.constructor = fireClass;
              }

              setClassName(className, fireClass);
              return fireClass;
            }

            function define(className, baseClass, mixins, options) {
              var Component = legacyCC.Component;
              var frame = peek();

              if (frame && isChildClassOf(baseClass, Component)) {
                if (isChildClassOf(frame.cls, Component)) {
                  errorID(3615);
                  return null;
                }

                if ( frame.uuid && className) ;

                className = className || frame.script;
              }

              var cls = doDefine(className, baseClass, mixins, options);

              if (frame) {
                if (isChildClassOf(baseClass, Component)) {
                  var uuid = frame.uuid;

                  if (uuid) {
                    _setClassId(uuid, cls);
                  }

                  frame.cls = cls;
                } else if (!isChildClassOf(frame.cls, Component)) {
                  frame.cls = cls;
                }
              }

              return cls;
            }

            function getNewValueTypeCodeJit(value) {
              var clsName = getClassName(value);
              var type = value.constructor;
              var res = "new " + clsName + "(";

              for (var i = 0; i < type.__props__.length; i++) {
                var prop = type.__props__[i];
                var propVal = value[prop];

                if ( typeof propVal === 'object') {
                  errorID(3641, clsName);
                  return "new " + clsName + "()";
                }

                res += propVal;

                if (i < type.__props__.length - 1) {
                  res += ',';
                }
              }

              return res + ")";
            }

            function escapeForJS(s) {
              return JSON.stringify(s).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
            }

            var IDENTIFIER_RE = /^[A-Za-z_$][0-9A-Za-z_$]*$/;

            function declareProperties(cls, className, properties, baseClass, mixins) {
              cls.__props__ = [];

              if (baseClass && baseClass.__props__) {
                cls.__props__ = baseClass.__props__.slice();
              }

              if (mixins) {
                for (var m = 0; m < mixins.length; ++m) {
                  var mixin = mixins[m];

                  if (mixin.__props__) {
                    cls.__props__ = cls.__props__.concat(mixin.__props__.filter(function (x) {
                      return cls.__props__.indexOf(x) < 0;
                    }));
                  }
                }
              }

              if (properties) {
                preprocessAttrs(properties, className, cls);

                for (var propName in properties) {
                  var val = properties[propName];

                  if (!val.get && !val.set) {
                    defineProp(cls, className, propName, val);
                  } else {
                    defineGetSet(cls, className, propName, val);
                  }
                }
              }

              var attrs = getClassAttrs(cls);
              cls.__values__ = cls.__props__.filter(function (prop) {
                return attrs[prop + DELIMETER$1 + "serializable"] !== false;
              });
            }

            function CCClass(options) {
              var name = options.name;
              var base = options["extends"];
              var mixins = options.mixins;
              var cls = define(name, base, mixins, options);

              if (!name) {
                name = legacyCC.js.getClassName(cls);
              }

              cls._sealed = true;

              if (base) {
                base._sealed = false;
              }

              var properties = options.properties;

              if (typeof properties === 'function' || base && base.__props__ === null || mixins && mixins.some(function (x) {
                return x.__props__ === null;
              })) {
                {
                  error('not yet implement deferred properties.');
                }
              } else {
                declareProperties(cls, name, properties, base, options.mixins);
              }

              var editor = options.editor;

              if (editor) {
                if (isChildClassOf(base, legacyCC.Component)) {
                  legacyCC.Component._registerEditorProps(cls, editor);
                } else {
                  warnID(3623, name);
                }
              }

              return cls;
            }

            CCClass._isCCClass = function isCCClass(constructor) {
              var _constructor$hasOwnPr;

              return constructor === null || constructor === void 0 ? void 0 : (_constructor$hasOwnPr = constructor.hasOwnProperty) === null || _constructor$hasOwnPr === void 0 ? void 0 : _constructor$hasOwnPr.call(constructor, '__ctors__');
            };

            CCClass.fastDefine = function (className, constructor, serializableFields) {
              setClassName(className, constructor);
              var props = constructor.__props__ = constructor.__values__ = Object.keys(serializableFields);
              var attrs = getClassAttrs(constructor);

              for (var i = 0; i < props.length; i++) {
                var key = props[i];
                attrs[key + DELIMETER$1 + "visible"] = false;
                attrs[key + DELIMETER$1 + "default"] = serializableFields[key];
              }
            };

            CCClass.Attr = attributeUtils;
            CCClass.attr = attr;

            function getInheritanceChain(constructor) {
              var chain = [];

              for (;;) {
                constructor = getSuper(constructor);

                if (!constructor) {
                  break;
                }

                if (constructor !== Object) {
                  chain.push(constructor);
                }
              }

              return chain;
            }

            CCClass.getInheritanceChain = getInheritanceChain;
            var PrimitiveTypes = {
              Integer: 'Number',
              Float: 'Number',
              Boolean: 'Boolean',
              String: 'String'
            };

            function parseAttributes(constructor, attributes, className, propertyName, usedInGetter) {
              var ERR_Type =  'The %s of %s must be type %s' ;
              var attrs = null;
              var propertyNamePrefix = '';

              function initAttrs() {
                propertyNamePrefix = propertyName + DELIMETER$1;
                return attrs = getClassAttrs(constructor);
              }

              if ('type' in attributes && typeof attributes.type === 'undefined') {
                warnID(3660, propertyName, className);
              }
              var type = attributes.type;

              if (type) {
                var primitiveType = PrimitiveTypes[type];

                if (primitiveType) {
                  (attrs || initAttrs())[propertyNamePrefix + "type"] = type;
                } else if (type === 'Object') {
                  {
                    errorID(3644, className, propertyName);
                  }
                } else if (typeof type === 'object') {
                    if (Enum.isEnum(type)) {
                      (attrs || initAttrs())[propertyNamePrefix + "type"] = 'Enum';
                      attrs[propertyNamePrefix + "enumList"] = Enum.getList(type);
                    } else if (BitMask.isBitMask(type)) {
                      (attrs || initAttrs())[propertyNamePrefix + "type"] = 'BitMask';
                      attrs[propertyNamePrefix + "bitmaskList"] = BitMask.getList(type);
                    } else {
                      errorID(3645, className, propertyName, type);
                    }
                  } else if (typeof type === 'function') {
                    (attrs || initAttrs())[propertyNamePrefix + "type"] = 'Object';
                    attrs[propertyNamePrefix + "ctor"] = type;
                  } else {
                    errorID(3646, className, propertyName, type);
                  }
              }

              if ('default' in attributes) {
                (attrs || initAttrs())[propertyNamePrefix + "default"] = attributes["default"];
              }

              var parseSimpleAttribute = function parseSimpleAttribute(attributeName, expectType) {
                if (attributeName in attributes) {
                  var val = attributes[attributeName];

                  if (typeof val === expectType) {
                    (attrs || initAttrs())[propertyNamePrefix + attributeName] = val;
                  } else {
                    error(ERR_Type, attributeName, className, propertyName, expectType);
                  }
                }
              };

              if (attributes.editorOnly) {
                if ( usedInGetter) {
                  errorID(3613, 'editorOnly', className, propertyName);
                } else {
                  (attrs || initAttrs())[propertyNamePrefix + "editorOnly"] = true;
                }
              }

              {
                parseSimpleAttribute('displayName', 'string');
                parseSimpleAttribute('displayOrder', 'number');
                parseSimpleAttribute('multiline', 'boolean');
                parseSimpleAttribute('radian', 'boolean');

                if (attributes.readonly) {
                  (attrs || initAttrs())[propertyNamePrefix + "readonly"] = true;
                }

                parseSimpleAttribute('tooltip', 'string');
                parseSimpleAttribute('slide', 'boolean');
                parseSimpleAttribute('unit', 'string');
              }

              if (attributes.__noImplicit) {
                var _attributes$serializa;

                (attrs || initAttrs())[propertyNamePrefix + "serializable"] = (_attributes$serializa = attributes.serializable) !== null && _attributes$serializa !== void 0 ? _attributes$serializa : false;
              } else if (attributes.serializable === false) {
                if ( usedInGetter) {
                  errorID(3613, 'serializable', className, propertyName);
                } else {
                  (attrs || initAttrs())[propertyNamePrefix + "serializable"] = false;
                }
              }

              parseSimpleAttribute('formerlySerializedAs', 'string');

              {
                if (attributes.__noImplicit) {
                  var _attributes$visible;

                  (attrs || initAttrs())[propertyNamePrefix + "visible"] = (_attributes$visible = attributes.visible) !== null && _attributes$visible !== void 0 ? _attributes$visible : false;
                } else {
                  var visible = attributes.visible;

                  if (typeof visible !== 'undefined') {
                    if (!visible) {
                      (attrs || initAttrs())[propertyNamePrefix + "visible"] = false;
                    } else if (typeof visible === 'function') {
                      (attrs || initAttrs())[propertyNamePrefix + "visible"] = visible;
                    }
                  } else {
                    var startsWithUS = propertyName.charCodeAt(0) === 95;

                    if (startsWithUS) {
                      (attrs || initAttrs())[propertyNamePrefix + "visible"] = false;
                    }
                  }
                }
              }

              var range = attributes.range;

              if (range) {
                if (Array.isArray(range)) {
                  if (range.length >= 2) {
                    (attrs || initAttrs())[propertyNamePrefix + "min"] = range[0];
                    attrs[propertyNamePrefix + "max"] = range[1];

                    if (range.length > 2) {
                      attrs[propertyNamePrefix + "step"] = range[2];
                    }
                  } else {
                    errorID(3647);
                  }
                } else {
                  error(ERR_Type, 'range', className, propertyName, 'array');
                }
              }

              parseSimpleAttribute('min', 'number');
              parseSimpleAttribute('max', 'number');
              parseSimpleAttribute('step', 'number');
            }

            CCClass.isArray = function (defaultVal) {
              defaultVal = getDefault(defaultVal);
              return Array.isArray(defaultVal);
            };

            CCClass.getDefault = getDefault;
            CCClass.escapeForJS = escapeForJS;
            CCClass.IDENTIFIER_RE = IDENTIFIER_RE;
            CCClass.getNewValueTypeCode =  getNewValueTypeCodeJit;
            legacyCC.Class = CCClass;

            var _d2r = Math.PI / 180.0;

            var _r2d = 180.0 / Math.PI;

            var EPSILON = exports('cN', 0.000001);
            function equals(a, b) {
              return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
            }
            function approx(a, b, maxDiff) {
              maxDiff = maxDiff || EPSILON;
              return Math.abs(a - b) <= maxDiff;
            }
            function clamp(val, min, max) {
              if (min > max) {
                var temp = min;
                min = max;
                max = temp;
              }

              return val < min ? min : val > max ? max : val;
            }
            function clamp01(val) {
              return val < 0 ? 0 : val > 1 ? 1 : val;
            }
            function lerp(from, to, ratio) {
              return from + (to - from) * ratio;
            }
            function toRadian(a) {
              return a * _d2r;
            }
            function toDegree(a) {
              return a * _r2d;
            }
            var random = exports('cV', Math.random);
            function randomRange(min, max) {
              return Math.random() * (max - min) + min;
            }
            function randomRangeInt(min, max) {
              return Math.floor(randomRange(min, max));
            }
            function pseudoRandom(seed) {
              seed = (seed * 9301 + 49297) % 233280;
              return seed / 233280.0;
            }
            function pseudoRandomRange(seed, min, max) {
              return pseudoRandom(seed) * (max - min) + min;
            }
            function pseudoRandomRangeInt(seed, min, max) {
              return Math.floor(pseudoRandomRange(seed, min, max));
            }
            function nextPow2$1(val) {
              --val;
              val = val >> 1 | val;
              val = val >> 2 | val;
              val = val >> 4 | val;
              val = val >> 8 | val;
              val = val >> 16 | val;
              ++val;
              return val;
            }
            function repeat(t, length) {
              return t - Math.floor(t / length) * length;
            }
            function pingPong(t, length) {
              t = repeat(t, length * 2);
              t = length - Math.abs(t - length);
              return t;
            }
            function inverseLerp(from, to, value) {
              return (value - from) / (to - from);
            }
            function absMaxComponent(v) {
              if (Math.abs(v.x) > Math.abs(v.y)) {
                if (Math.abs(v.x) > Math.abs(v.z)) {
                  return v.x;
                } else {
                  return v.z;
                }
              } else if (Math.abs(v.y) > Math.abs(v.z)) {
                return v.y;
              } else {
                return v.z;
              }
            }
            function absMax(a, b) {
              if (Math.abs(a) > Math.abs(b)) {
                return a;
              } else {
                return b;
              }
            }

            var toFloat = 1 / 255;
            var Color = exports('cL', function (_ValueType) {
              _inheritsLoose(Color, _ValueType);

              Color.clone = function clone(a) {
                var out = new Color();

                if (a._val) {
                  out._val = a._val;
                } else {
                  out._val = (a.a << 24 >>> 0) + (a.b << 16) + (a.g << 8) + a.r;
                }

                return out;
              };

              Color.copy = function copy(out, a) {
                out.r = a.r;
                out.g = a.g;
                out.b = a.b;
                out.a = a.a;
                return out;
              };

              Color.set = function set(out, r, g, b, a) {
                out.r = r;
                out.g = g;
                out.b = b;
                out.a = a;
                return out;
              };

              Color.fromHEX = function fromHEX(out, hexString) {
                hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
                out.r = parseInt(hexString.substr(0, 2), 16) || 0;
                out.g = parseInt(hexString.substr(2, 2), 16) || 0;
                out.b = parseInt(hexString.substr(4, 2), 16) || 0;
                out.a = parseInt(hexString.substr(6, 2), 16) || 255;
                out._val = (out.a << 24 >>> 0) + (out.b << 16) + (out.g << 8) + out.r;
                return out;
              };

              Color.add = function add(out, a, b) {
                out.r = a.r + b.r;
                out.g = a.g + b.g;
                out.b = a.b + b.b;
                out.a = a.a + b.a;
                return out;
              };

              Color.subtract = function subtract(out, a, b) {
                out.r = a.r - b.r;
                out.g = a.g - b.g;
                out.b = a.b - b.b;
                out.a = a.a - b.a;
                return out;
              };

              Color.multiply = function multiply(out, a, b) {
                out.r = a.r * b.r;
                out.g = a.g * b.g;
                out.b = a.b * b.b;
                out.a = a.a * b.a;
                return out;
              };

              Color.divide = function divide(out, a, b) {
                out.r = a.r / b.r;
                out.g = a.g / b.g;
                out.b = a.b / b.b;
                out.a = a.a / b.a;
                return out;
              };

              Color.scale = function scale(out, a, b) {
                out.r = a.r * b;
                out.g = a.g * b;
                out.b = a.b * b;
                out.a = a.a * b;
                return out;
              };

              Color.lerp = function lerp(out, from, to, ratio) {
                var r = from.r;
                var g = from.g;
                var b = from.b;
                var a = from.a;
                r += (to.r - r) * ratio;
                g += (to.g - g) * ratio;
                b += (to.b - b) * ratio;
                a += (to.a - a) * ratio;
                out._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
                return out;
              };

              Color.toArray = function toArray(out, a, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                var scale = a instanceof Color || a.a > 1 ? 1 / 255 : 1;
                out[ofs + 0] = a.r * scale;
                out[ofs + 1] = a.g * scale;
                out[ofs + 2] = a.b * scale;
                out[ofs + 3] = a.a * scale;
                return out;
              };

              Color.fromArray = function fromArray(arr, out, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.r = arr[ofs + 0] * 255;
                out.g = arr[ofs + 1] * 255;
                out.b = arr[ofs + 2] * 255;
                out.a = arr[ofs + 3] * 255;
                return out;
              };

              Color.strictEquals = function strictEquals(a, b) {
                return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
              };

              Color.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.r - b.r) <= epsilon * Math.max(1.0, Math.abs(a.r), Math.abs(b.r)) && Math.abs(a.g - b.g) <= epsilon * Math.max(1.0, Math.abs(a.g), Math.abs(b.g)) && Math.abs(a.b - b.b) <= epsilon * Math.max(1.0, Math.abs(a.b), Math.abs(b.b)) && Math.abs(a.a - b.a) <= epsilon * Math.max(1.0, Math.abs(a.a), Math.abs(b.a));
              };

              Color.hex = function hex(a) {
                return (a.r * 255 << 24 | a.g * 255 << 16 | a.b * 255 << 8 | a.a * 255) >>> 0;
              };

              _createClass(Color, [{
                key: "r",
                get: function get() {
                  return this._val & 0x000000ff;
                },
                set: function set(red) {
                  red = ~~clamp(red, 0, 255);
                  this._val = (this._val & 0xffffff00 | red) >>> 0;
                }
              }, {
                key: "g",
                get: function get() {
                  return (this._val & 0x0000ff00) >> 8;
                },
                set: function set(green) {
                  green = ~~clamp(green, 0, 255);
                  this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
                }
              }, {
                key: "b",
                get: function get() {
                  return (this._val & 0x00ff0000) >> 16;
                },
                set: function set(blue) {
                  blue = ~~clamp(blue, 0, 255);
                  this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
                }
              }, {
                key: "a",
                get: function get() {
                  return (this._val & 0xff000000) >>> 24;
                },
                set: function set(alpha) {
                  alpha = ~~clamp(alpha, 0, 255);
                  this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
                }
              }, {
                key: "x",
                get: function get() {
                  return this.r * toFloat;
                },
                set: function set(value) {
                  this.r = value * 255;
                }
              }, {
                key: "y",
                get: function get() {
                  return this.g * toFloat;
                },
                set: function set(value) {
                  this.g = value * 255;
                }
              }, {
                key: "z",
                get: function get() {
                  return this.b * toFloat;
                },
                set: function set(value) {
                  this.b = value * 255;
                }
              }, {
                key: "w",
                get: function get() {
                  return this.a * toFloat;
                },
                set: function set(value) {
                  this.a = value * 255;
                }
              }]);

              function Color(r, g, b, a) {
                var _this;

                _this = _ValueType.call(this) || this;
                _this._val = 0;

                if (typeof r === 'string') {
                  _this.fromHEX(r);
                } else if (g !== undefined) {
                  _this.set(r, g, b, a);
                } else {
                  _this.set(r);
                }

                return _this;
              }

              var _proto = Color.prototype;

              _proto.clone = function clone() {
                var ret = new Color();
                ret._val = this._val;
                return ret;
              };

              _proto.equals = function equals(other) {
                return other && this._val === other._val;
              };

              _proto.lerp = function lerp(to, ratio) {
                var r = this.r;
                var g = this.g;
                var b = this.b;
                var a = this.a;
                r += (to.r - r) * ratio;
                g += (to.g - g) * ratio;
                b += (to.b - b) * ratio;
                a += (to.a - a) * ratio;
                this._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
                return this;
              };

              _proto.toString = function toString() {
                return "rgba(" + this.r.toFixed() + ", " + this.g.toFixed() + ", " + this.b.toFixed() + ", " + this.a.toFixed() + ")";
              };

              _proto.toCSS = function toCSS(opt) {
                if (opt === void 0) {
                  opt = 'rgba';
                }

                if (opt === 'rgba') {
                  return "rgba(" + this.r + "," + this.g + "," + this.b + "," + (this.a * toFloat).toFixed(2) + ")";
                } else if (opt === 'rgb') {
                  return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
                } else {
                  return "#" + this.toHEX(opt);
                }
              };

              _proto.fromHEX = function fromHEX(hexString) {
                hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
                var r = parseInt(hexString.substr(0, 2), 16) || 0;
                var g = parseInt(hexString.substr(2, 2), 16) || 0;
                var b = parseInt(hexString.substr(4, 2), 16) || 0;
                var a = parseInt(hexString.substr(6, 2), 16) || 255;
                this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                return this;
              };

              _proto.toHEX = function toHEX(fmt) {
                if (fmt === void 0) {
                  fmt = '#rrggbb';
                }

                var prefix = '0';
                var hex = [(this.r < 16 ? prefix : '') + this.r.toString(16), (this.g < 16 ? prefix : '') + this.g.toString(16), (this.b < 16 ? prefix : '') + this.b.toString(16)];

                if (fmt === '#rgb') {
                  hex[0] = hex[0][0];
                  hex[1] = hex[1][0];
                  hex[2] = hex[2][0];
                } else if (fmt === '#rrggbbaa') {
                  hex.push((this.a < 16 ? prefix : '') + this.a.toString(16));
                }

                return hex.join('');
              };

              _proto.toRGBValue = function toRGBValue() {
                return this._val & 0x00ffffff;
              };

              _proto.fromHSV = function fromHSV(h, s, v) {
                var r = 0;
                var g = 0;
                var b = 0;

                if (s === 0) {
                  r = g = b = v;
                } else if (v === 0) {
                  r = g = b = 0;
                } else {
                  if (h === 1) {
                    h = 0;
                  }

                  h *= 6;
                  var i = Math.floor(h);
                  var f = h - i;
                  var p = v * (1 - s);
                  var q = v * (1 - s * f);
                  var t = v * (1 - s * (1 - f));

                  switch (i) {
                    case 0:
                      r = v;
                      g = t;
                      b = p;
                      break;

                    case 1:
                      r = q;
                      g = v;
                      b = p;
                      break;

                    case 2:
                      r = p;
                      g = v;
                      b = t;
                      break;

                    case 3:
                      r = p;
                      g = q;
                      b = v;
                      break;

                    case 4:
                      r = t;
                      g = p;
                      b = v;
                      break;

                    case 5:
                      r = v;
                      g = p;
                      b = q;
                      break;
                  }
                }

                r *= 255;
                g *= 255;
                b *= 255;
                this._val = (this.a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                return this;
              };

              _proto.toHSV = function toHSV() {
                var r = this.r * toFloat;
                var g = this.g * toFloat;
                var b = this.b * toFloat;
                var hsv = {
                  h: 0,
                  s: 0,
                  v: 0
                };
                var max = Math.max(r, g, b);
                var min = Math.min(r, g, b);
                var delta = 0;
                hsv.v = max;
                hsv.s = max ? (max - min) / max : 0;

                if (!hsv.s) {
                  hsv.h = 0;
                } else {
                  delta = max - min;

                  if (r === max) {
                    hsv.h = (g - b) / delta;
                  } else if (g === max) {
                    hsv.h = 2 + (b - r) / delta;
                  } else {
                    hsv.h = 4 + (r - g) / delta;
                  }

                  hsv.h /= 6;

                  if (hsv.h < 0) {
                    hsv.h += 1.0;
                  }
                }

                return hsv;
              };

              _proto.set = function set(r, g, b, a) {
                if (typeof r === 'object') {
                  if (r._val != null) {
                    this._val = r._val;
                  } else {
                    g = r.g || 0;
                    b = r.b || 0;
                    a = typeof r.a === 'number' ? r.a : 255;
                    r = r.r || 0;
                    this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                  }
                } else {
                  r = r || 0;
                  g = g || 0;
                  b = b || 0;
                  a = typeof a === 'number' ? a : 255;
                  this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                }

                return this;
              };

              _proto.multiply = function multiply(other) {
                var r = (this._val & 0x000000ff) * other.r >> 8;
                var g = (this._val & 0x0000ff00) * other.g >> 8;
                var b = (this._val & 0x00ff0000) * other.b >> 8;
                var a = ((this._val & 0xff000000) >>> 8) * other.a;
                this._val = a & 0xff000000 | b & 0x00ff0000 | g & 0x0000ff00 | r & 0x000000ff;
                return this;
              };

              _proto._set_r_unsafe = function _set_r_unsafe(red) {
                this._val = (this._val & 0xffffff00 | red) >>> 0;
                return this;
              };

              _proto._set_g_unsafe = function _set_g_unsafe(green) {
                this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
                return this;
              };

              _proto._set_b_unsafe = function _set_b_unsafe(blue) {
                this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
                return this;
              };

              _proto._set_a_unsafe = function _set_a_unsafe(alpha) {
                this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
                return this;
              };

              return Color;
            }(ValueType));
            Color.WHITE = Object.freeze(new Color(255, 255, 255, 255));
            Color.GRAY = Object.freeze(new Color(127, 127, 127, 255));
            Color.BLACK = Object.freeze(new Color(0, 0, 0, 255));
            Color.TRANSPARENT = Object.freeze(new Color(0, 0, 0, 0));
            Color.RED = Object.freeze(new Color(255, 0, 0, 255));
            Color.GREEN = Object.freeze(new Color(0, 255, 0, 255));
            Color.BLUE = Object.freeze(new Color(0, 0, 255, 255));
            Color.CYAN = Object.freeze(new Color(0, 255, 255, 255));
            Color.MAGENTA = Object.freeze(new Color(255, 0, 255, 255));
            Color.YELLOW = Object.freeze(new Color(255, 255, 0, 255));
            CCClass.fastDefine('cc.Color', Color, {
              r: 0,
              g: 0,
              b: 0,
              a: 255
            });
            legacyCC.Color = Color;
            function color(r, g, b, a) {
              return new Color(r, g, b, a);
            }
            legacyCC.color = color;

            var Vec3 = exports('cx', function (_ValueType) {
              _inheritsLoose(Vec3, _ValueType);

              Vec3.zero = function zero(out) {
                out.x = 0;
                out.y = 0;
                out.z = 0;
                return out;
              };

              Vec3.clone = function clone(a) {
                return new Vec3(a.x, a.y, a.z);
              };

              Vec3.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                return out;
              };

              Vec3.set = function set(out, x, y, z) {
                out.x = x;
                out.y = y;
                out.z = z;
                return out;
              };

              Vec3.add = function add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                out.z = a.z + b.z;
                return out;
              };

              Vec3.subtract = function subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                out.z = a.z - b.z;
                return out;
              };

              Vec3.multiply = function multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                out.z = a.z * b.z;
                return out;
              };

              Vec3.divide = function divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                out.z = a.z / b.z;
                return out;
              };

              Vec3.ceil = function ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                out.z = Math.ceil(a.z);
                return out;
              };

              Vec3.floor = function floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                out.z = Math.floor(a.z);
                return out;
              };

              Vec3.min = function min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                out.z = Math.min(a.z, b.z);
                return out;
              };

              Vec3.max = function max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                out.z = Math.max(a.z, b.z);
                return out;
              };

              Vec3.round = function round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                out.z = Math.round(a.z);
                return out;
              };

              Vec3.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                return out;
              };

              Vec3.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                return out;
              };

              Vec3.distance = function distance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                return Math.sqrt(x * x + y * y + z * z);
              };

              Vec3.squaredDistance = function squaredDistance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                return x * x + y * y + z * z;
              };

              Vec3.len = function len(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                return Math.sqrt(x * x + y * y + z * z);
              };

              Vec3.lengthSqr = function lengthSqr(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                return x * x + y * y + z * z;
              };

              Vec3.negate = function negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                return out;
              };

              Vec3.invert = function invert(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                out.z = 1.0 / a.z;
                return out;
              };

              Vec3.invertSafe = function invertSafe(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;

                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }

                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }

                if (Math.abs(z) < EPSILON) {
                  out.z = 0;
                } else {
                  out.z = 1.0 / z;
                }

                return out;
              };

              Vec3.normalize = function normalize(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var len = x * x + y * y + z * z;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                  out.z = z * len;
                }

                return out;
              };

              Vec3.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z;
              };

              Vec3.cross = function cross(out, a, b) {
                var ax = a.x,
                    ay = a.y,
                    az = a.z;
                var bx = b.x,
                    by = b.y,
                    bz = b.z;
                out.x = ay * bz - az * by;
                out.y = az * bx - ax * bz;
                out.z = ax * by - ay * bx;
                return out;
              };

              Vec3.lerp = function lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                return out;
              };

              Vec3.random = function random$1(out, scale) {
                scale = scale || 1.0;
                var phi = random() * 2.0 * Math.PI;
                var cosTheta = random() * 2 - 1;
                var sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
                out.x = sinTheta * Math.cos(phi) * scale;
                out.y = sinTheta * Math.sin(phi) * scale;
                out.z = cosTheta * scale;
                return out;
              };

              Vec3.transformMat4 = function transformMat4(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
                rhw = rhw ? Math.abs(1 / rhw) : 1;
                out.x = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
                out.y = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
                out.z = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
                return out;
              };

              Vec3.transformMat4Normal = function transformMat4Normal(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var rhw = m.m03 * x + m.m07 * y + m.m11 * z;
                rhw = rhw ? Math.abs(1 / rhw) : 1;
                out.x = (m.m00 * x + m.m04 * y + m.m08 * z) * rhw;
                out.y = (m.m01 * x + m.m05 * y + m.m09 * z) * rhw;
                out.z = (m.m02 * x + m.m06 * y + m.m10 * z) * rhw;
                return out;
              };

              Vec3.transformMat3 = function transformMat3(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                out.x = x * m.m00 + y * m.m03 + z * m.m06;
                out.y = x * m.m01 + y * m.m04 + z * m.m07;
                out.z = x * m.m02 + y * m.m05 + z * m.m08;
                return out;
              };

              Vec3.transformAffine = function transformAffine(out, v, m) {
                var x = v.x;
                var y = v.y;
                var z = v.z;
                out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12;
                out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13;
                out.x = m.m02 * x + m.m06 * y + m.m10 * z + m.m14;
                return out;
              };

              Vec3.transformQuat = function transformQuat(out, a, q) {
                var ix = q.w * a.x + q.y * a.z - q.z * a.y;
                var iy = q.w * a.y + q.z * a.x - q.x * a.z;
                var iz = q.w * a.z + q.x * a.y - q.y * a.x;
                var iw = -q.x * a.x - q.y * a.y - q.z * a.z;
                out.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;
                out.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;
                out.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;
                return out;
              };

              Vec3.transformRTS = function transformRTS(out, a, r, t, s) {
                var x = a.x * s.x;
                var y = a.y * s.y;
                var z = a.z * s.z;
                var ix = r.w * x + r.y * z - r.z * y;
                var iy = r.w * y + r.z * x - r.x * z;
                var iz = r.w * z + r.x * y - r.y * x;
                var iw = -r.x * x - r.y * y - r.z * z;
                out.x = ix * r.w + iw * -r.x + iy * -r.z - iz * -r.y + t.x;
                out.y = iy * r.w + iw * -r.y + iz * -r.x - ix * -r.z + t.y;
                out.z = iz * r.w + iw * -r.z + ix * -r.y - iy * -r.x + t.z;
                return out;
              };

              Vec3.transformInverseRTS = function transformInverseRTS(out, a, r, t, s) {
                var x = a.x - t.x;
                var y = a.y - t.y;
                var z = a.z - t.z;
                var ix = r.w * x - r.y * z + r.z * y;
                var iy = r.w * y - r.z * x + r.x * z;
                var iz = r.w * z - r.x * y + r.y * x;
                var iw = r.x * x + r.y * y + r.z * z;
                out.x = (ix * r.w + iw * r.x + iy * r.z - iz * r.y) / s.x;
                out.y = (iy * r.w + iw * r.y + iz * r.x - ix * r.z) / s.y;
                out.z = (iz * r.w + iw * r.z + ix * r.y - iy * r.x) / s.z;
                return out;
              };

              Vec3.rotateX = function rotateX(out, v, o, a) {
                var x = v.x - o.x;
                var y = v.y - o.y;
                var z = v.z - o.z;
                var cos = Math.cos(a);
                var sin = Math.sin(a);
                var rx = x;
                var ry = y * cos - z * sin;
                var rz = y * sin + z * cos;
                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              };

              Vec3.rotateY = function rotateY(out, v, o, a) {
                var x = v.x - o.x;
                var y = v.y - o.y;
                var z = v.z - o.z;
                var cos = Math.cos(a);
                var sin = Math.sin(a);
                var rx = z * sin + x * cos;
                var ry = y;
                var rz = z * cos - x * sin;
                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              };

              Vec3.rotateZ = function rotateZ(out, v, o, a) {
                var x = v.x - o.x;
                var y = v.y - o.y;
                var z = v.z - o.z;
                var cos = Math.cos(a);
                var sin = Math.sin(a);
                var rx = x * cos - y * sin;
                var ry = x * sin + y * cos;
                var rz = z;
                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              };

              Vec3.toArray = function toArray(out, v, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                out[ofs + 2] = v.z;
                return out;
              };

              Vec3.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                return out;
              };

              Vec3.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z;
              };

              Vec3.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                var a0 = a.x,
                    a1 = a.y,
                    a2 = a.z;
                var b0 = b.x,
                    b1 = b.y,
                    b2 = b.z;
                return Math.abs(a0 - b0) <= epsilon * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= epsilon * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= epsilon * Math.max(1.0, Math.abs(a2), Math.abs(b2));
              };

              Vec3.angle = function angle(a, b) {
                Vec3.normalize(v3_1, a);
                Vec3.normalize(v3_2, b);
                var cosine = Vec3.dot(v3_1, v3_2);

                if (cosine > 1.0) {
                  return 0;
                }

                if (cosine < -1.0) {
                  return Math.PI;
                }

                return Math.acos(cosine);
              };

              Vec3.projectOnPlane = function projectOnPlane(out, a, n) {
                return Vec3.subtract(out, a, Vec3.project(out, a, n));
              };

              Vec3.project = function project(out, a, b) {
                var sqrLen = Vec3.lengthSqr(b);

                if (sqrLen < 0.000001) {
                  return Vec3.set(out, 0, 0, 0);
                } else {
                  return Vec3.multiplyScalar(out, b, Vec3.dot(a, b) / sqrLen);
                }
              };

              function Vec3(x, y, z) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                  _this.z = x.z;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.z = z || 0;
                }

                return _this;
              }

              var _proto = Vec3.prototype;

              _proto.clone = function clone() {
                return new Vec3(this.x, this.y, this.z);
              };

              _proto.set = function set(x, y, z) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                }

                return this;
              };

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z));
              };

              _proto.equals3f = function equals3f(x, y, z, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z));
              };

              _proto.strictEquals = function strictEquals(other) {
                return this.x === other.x && this.y === other.y && this.z === other.z;
              };

              _proto.strictEquals3f = function strictEquals3f(x, y, z) {
                return this.x === x && this.y === y && this.z === z;
              };

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.z.toFixed(2) + ")";
              };

              _proto.lerp = function lerp(to, ratio) {
                this.x += ratio * (to.x - this.x);
                this.y += ratio * (to.y - this.y);
                this.z += ratio * (to.z - this.z);
                return this;
              };

              _proto.add = function add(other) {
                this.x += other.x;
                this.y += other.y;
                this.z += other.z;
                return this;
              };

              _proto.add3f = function add3f(x, y, z) {
                this.x += x;
                this.y += y;
                this.z += z;
                return this;
              };

              _proto.subtract = function subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                this.z -= other.z;
                return this;
              };

              _proto.subtract3f = function subtract3f(x, y, z) {
                this.x -= x;
                this.y -= y;
                this.z -= z;
                return this;
              };

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec3.multiply for vector * vector operation');
                }

                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
                return this;
              };

              _proto.multiply = function multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec3.scale for vector * scalar operation');
                }

                this.x *= other.x;
                this.y *= other.y;
                this.z *= other.z;
                return this;
              };

              _proto.multiply3f = function multiply3f(x, y, z) {
                this.x *= x;
                this.y *= y;
                this.z *= z;
                return this;
              };

              _proto.divide = function divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                this.z /= other.z;
                return this;
              };

              _proto.divide3f = function divide3f(x, y, z) {
                this.x /= x;
                this.y /= y;
                this.z /= z;
                return this;
              };

              _proto.negative = function negative() {
                this.x = -this.x;
                this.y = -this.y;
                this.z = -this.z;
                return this;
              };

              _proto.clampf = function clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
                return this;
              };

              _proto.dot = function dot(other) {
                return this.x * other.x + this.y * other.y + this.z * other.z;
              };

              _proto.cross = function cross(other) {
                var ax = this.x,
                    ay = this.y,
                    az = this.z;
                var bx = other.x,
                    by = other.y,
                    bz = other.z;
                this.x = ay * bz - az * by;
                this.y = az * bx - ax * bz;
                this.z = ax * by - ay * bx;
                return this;
              };

              _proto.length = function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
              };

              _proto.lengthSqr = function lengthSqr() {
                return this.x * this.x + this.y * this.y + this.z * this.z;
              };

              _proto.normalize = function normalize() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var len = x * x + y * y + z * z;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x = x * len;
                  this.y = y * len;
                  this.z = z * len;
                }

                return this;
              };

              _proto.transformMat4 = function transformMat4(matrix) {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var rhw = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15;
                rhw = rhw ? 1 / rhw : 1;
                this.x = (matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12) * rhw;
                this.y = (matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13) * rhw;
                this.z = (matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14) * rhw;
                return this;
              };

              return Vec3;
            }(ValueType));
            Vec3.UNIT_X = Object.freeze(new Vec3(1, 0, 0));
            Vec3.UNIT_Y = Object.freeze(new Vec3(0, 1, 0));
            Vec3.UNIT_Z = Object.freeze(new Vec3(0, 0, 1));
            Vec3.RIGHT = Object.freeze(new Vec3(1, 0, 0));
            Vec3.UP = Object.freeze(new Vec3(0, 1, 0));
            Vec3.FORWARD = Object.freeze(new Vec3(0, 0, -1));
            Vec3.ZERO = Object.freeze(new Vec3(0, 0, 0));
            Vec3.ONE = Object.freeze(new Vec3(1, 1, 1));
            Vec3.NEG_ONE = Object.freeze(new Vec3(-1, -1, -1));
            var v3_1 = new Vec3();
            var v3_2 = new Vec3();
            CCClass.fastDefine('cc.Vec3', Vec3, {
              x: 0,
              y: 0,
              z: 0
            });
            legacyCC.Vec3 = Vec3;
            function v3(x, y, z) {
              return new Vec3(x, y, z);
            }
            legacyCC.v3 = v3;

            var Mat3 = exports('cD', function (_ValueType) {
              _inheritsLoose(Mat3, _ValueType);

              Mat3.clone = function clone(a) {
                return new Mat3(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08);
              };

              Mat3.copy = function copy(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m03;
                out.m04 = a.m04;
                out.m05 = a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                return out;
              };

              Mat3.set = function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
                out.m00 = m00;
                out.m01 = m01;
                out.m02 = m02;
                out.m03 = m10;
                out.m04 = m11;
                out.m05 = m12;
                out.m06 = m20;
                out.m07 = m21;
                out.m08 = m22;
                return out;
              };

              Mat3.identity = function identity(out) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 1;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              };

              Mat3.transpose = function transpose(out, a) {
                if (out === a) {
                  var a01 = a.m01;
                  var a02 = a.m02;
                  var a12 = a.m05;
                  out.m01 = a.m03;
                  out.m02 = a.m06;
                  out.m03 = a01;
                  out.m05 = a.m07;
                  out.m06 = a02;
                  out.m07 = a12;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m03;
                  out.m02 = a.m06;
                  out.m03 = a.m01;
                  out.m04 = a.m04;
                  out.m05 = a.m07;
                  out.m06 = a.m02;
                  out.m07 = a.m05;
                  out.m08 = a.m08;
                }

                return out;
              };

              Mat3.invert = function invert(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var b01 = a22 * a11 - a12 * a21;
                var b11 = -a22 * a10 + a12 * a20;
                var b21 = a21 * a10 - a11 * a20;
                var det = a00 * b01 + a01 * b11 + a02 * b21;

                if (det === 0) {
                  out.m00 = 0;
                  out.m01 = 0;
                  out.m02 = 0;
                  out.m03 = 0;
                  out.m04 = 0;
                  out.m05 = 0;
                  out.m06 = 0;
                  out.m07 = 0;
                  out.m08 = 0;
                  return out;
                }

                det = 1.0 / det;
                out.m00 = b01 * det;
                out.m01 = (-a22 * a01 + a02 * a21) * det;
                out.m02 = (a12 * a01 - a02 * a11) * det;
                out.m03 = b11 * det;
                out.m04 = (a22 * a00 - a02 * a20) * det;
                out.m05 = (-a12 * a00 + a02 * a10) * det;
                out.m06 = b21 * det;
                out.m07 = (-a21 * a00 + a01 * a20) * det;
                out.m08 = (a11 * a00 - a01 * a10) * det;
                return out;
              };

              Mat3.determinant = function determinant(a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
              };

              Mat3.multiply = function multiply(out, a, b) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var b00 = b.m00;
                var b01 = b.m01;
                var b02 = b.m02;
                var b10 = b.m03;
                var b11 = b.m04;
                var b12 = b.m05;
                var b20 = b.m06;
                var b21 = b.m07;
                var b22 = b.m08;
                out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return out;
              };

              Mat3.multiplyMat4 = function multiplyMat4(out, a, b) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var b00 = b.m00;
                var b01 = b.m01;
                var b02 = b.m02;
                var b10 = b.m04;
                var b11 = b.m05;
                var b12 = b.m06;
                var b20 = b.m08;
                var b21 = b.m09;
                var b22 = b.m10;
                out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return out;
              };

              Mat3.transform = function transform(out, a, v) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var x = v.x;
                var y = v.y;
                out.m00 = a00;
                out.m01 = a01;
                out.m02 = a02;
                out.m03 = a10;
                out.m04 = a11;
                out.m05 = a12;
                out.m06 = x * a00 + y * a10 + a20;
                out.m07 = x * a01 + y * a11 + a21;
                out.m08 = x * a02 + y * a12 + a22;
                return out;
              };

              Mat3.scale = function scale(out, a, v) {
                var x = v.x;
                var y = v.y;
                out.m00 = x * a.m00;
                out.m01 = x * a.m01;
                out.m02 = x * a.m02;
                out.m03 = y * a.m03;
                out.m04 = y * a.m04;
                out.m05 = y * a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                return out;
              };

              Mat3.rotate = function rotate(out, a, rad) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                out.m00 = c * a00 + s * a10;
                out.m01 = c * a01 + s * a11;
                out.m02 = c * a02 + s * a12;
                out.m03 = c * a10 - s * a00;
                out.m04 = c * a11 - s * a01;
                out.m05 = c * a12 - s * a02;
                out.m06 = a20;
                out.m07 = a21;
                out.m08 = a22;
                return out;
              };

              Mat3.fromMat4 = function fromMat4(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m04;
                out.m04 = a.m05;
                out.m05 = a.m06;
                out.m06 = a.m08;
                out.m07 = a.m09;
                out.m08 = a.m10;
                return out;
              };

              Mat3.fromViewUp = function fromViewUp(out, view, up) {
                if (Vec3.lengthSqr(view) < EPSILON * EPSILON) {
                  Mat3.identity(out);
                  return out;
                }

                up = up || Vec3.UNIT_Y;
                Vec3.normalize(v3_1$1, Vec3.cross(v3_1$1, up, view));

                if (Vec3.lengthSqr(v3_1$1) < EPSILON * EPSILON) {
                  Mat3.identity(out);
                  return out;
                }

                Vec3.cross(v3_2$1, view, v3_1$1);
                Mat3.set(out, v3_1$1.x, v3_1$1.y, v3_1$1.z, v3_2$1.x, v3_2$1.y, v3_2$1.z, view.x, view.y, view.z);
                return out;
              };

              Mat3.fromTranslation = function fromTranslation(out, v) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 1;
                out.m05 = 0;
                out.m06 = v.x;
                out.m07 = v.y;
                out.m08 = 1;
                return out;
              };

              Mat3.fromScaling = function fromScaling(out, v) {
                out.m00 = v.x;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = v.y;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              };

              Mat3.fromRotation = function fromRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                out.m00 = c;
                out.m01 = s;
                out.m02 = 0;
                out.m03 = -s;
                out.m04 = c;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              };

              Mat3.fromQuat = function fromQuat(out, q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                out.m00 = 1 - yy - zz;
                out.m03 = yx - wz;
                out.m06 = zx + wy;
                out.m01 = yx + wz;
                out.m04 = 1 - xx - zz;
                out.m07 = zy - wx;
                out.m02 = zx - wy;
                out.m05 = zy + wx;
                out.m08 = 1 - xx - yy;
                return out;
              };

              Mat3.inverseTransposeMat4 = function inverseTransposeMat4(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32;
                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (!det) {
                  return null;
                }

                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m03 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m04 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m05 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m06 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m07 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m08 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                return out;
              };

              Mat3.toArray = function toArray(out, m, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = m.m00;
                out[ofs + 1] = m.m01;
                out[ofs + 2] = m.m02;
                out[ofs + 3] = m.m03;
                out[ofs + 4] = m.m04;
                out[ofs + 5] = m.m05;
                out[ofs + 6] = m.m06;
                out[ofs + 7] = m.m07;
                out[ofs + 8] = m.m08;
                return out;
              };

              Mat3.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.m00 = arr[ofs + 0];
                out.m01 = arr[ofs + 1];
                out.m02 = arr[ofs + 2];
                out.m03 = arr[ofs + 3];
                out.m04 = arr[ofs + 4];
                out.m05 = arr[ofs + 5];
                out.m06 = arr[ofs + 6];
                out.m07 = arr[ofs + 7];
                out.m08 = arr[ofs + 8];
                return out;
              };

              Mat3.add = function add(out, a, b) {
                out.m00 = a.m00 + b.m00;
                out.m01 = a.m01 + b.m01;
                out.m02 = a.m02 + b.m02;
                out.m03 = a.m03 + b.m03;
                out.m04 = a.m04 + b.m04;
                out.m05 = a.m05 + b.m05;
                out.m06 = a.m06 + b.m06;
                out.m07 = a.m07 + b.m07;
                out.m08 = a.m08 + b.m08;
                return out;
              };

              Mat3.subtract = function subtract(out, a, b) {
                out.m00 = a.m00 - b.m00;
                out.m01 = a.m01 - b.m01;
                out.m02 = a.m02 - b.m02;
                out.m03 = a.m03 - b.m03;
                out.m04 = a.m04 - b.m04;
                out.m05 = a.m05 - b.m05;
                out.m06 = a.m06 - b.m06;
                out.m07 = a.m07 - b.m07;
                out.m08 = a.m08 - b.m08;
                return out;
              };

              Mat3.multiplyScalar = function multiplyScalar(out, a, b) {
                out.m00 = a.m00 * b;
                out.m01 = a.m01 * b;
                out.m02 = a.m02 * b;
                out.m03 = a.m03 * b;
                out.m04 = a.m04 * b;
                out.m05 = a.m05 * b;
                out.m06 = a.m06 * b;
                out.m07 = a.m07 * b;
                out.m08 = a.m08 * b;
                return out;
              };

              Mat3.multiplyScalarAndAdd = function multiplyScalarAndAdd(out, a, b, scale) {
                out.m00 = b.m00 * scale + a.m00;
                out.m01 = b.m01 * scale + a.m01;
                out.m02 = b.m02 * scale + a.m02;
                out.m03 = b.m03 * scale + a.m03;
                out.m04 = b.m04 * scale + a.m04;
                out.m05 = b.m05 * scale + a.m05;
                out.m06 = b.m06 * scale + a.m06;
                out.m07 = b.m07 * scale + a.m07;
                out.m08 = b.m08 * scale + a.m08;
                return out;
              };

              Mat3.strictEquals = function strictEquals(a, b) {
                return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08;
              };

              Mat3.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08));
              };

              function Mat3(m00, m01, m02, m03, m04, m05, m06, m07, m08) {
                var _this;

                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 1;
                }

                if (m05 === void 0) {
                  m05 = 0;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 1;
                }

                _this = _ValueType.call(this) || this;

                if (typeof m00 === 'object') {
                  _this.m00 = m00.m00;
                  _this.m01 = m00.m01;
                  _this.m02 = m00.m02;
                  _this.m03 = m00.m03;
                  _this.m04 = m00.m04;
                  _this.m05 = m00.m05;
                  _this.m06 = m00.m06;
                  _this.m07 = m00.m07;
                  _this.m08 = m00.m08;
                } else {
                  _this.m00 = m00;
                  _this.m01 = m01;
                  _this.m02 = m02;
                  _this.m03 = m03;
                  _this.m04 = m04;
                  _this.m05 = m05;
                  _this.m06 = m06;
                  _this.m07 = m07;
                  _this.m08 = m08;
                }

                return _this;
              }

              var _proto = Mat3.prototype;

              _proto.clone = function clone() {
                var t = this;
                return new Mat3(t.m00, t.m01, t.m02, t.m03, t.m04, t.m05, t.m06, t.m07, t.m08);
              };

              _proto.set = function set(m00, m01, m02, m03, m04, m05, m06, m07, m08) {
                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 1;
                }

                if (m05 === void 0) {
                  m05 = 0;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 1;
                }

                if (typeof m00 === 'object') {
                  this.m00 = m00.m00;
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                } else {
                  this.m00 = m00;
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                }

                return this;
              };

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08));
              };

              _proto.strictEquals = function strictEquals(other) {
                return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08;
              };

              _proto.toString = function toString() {
                var t = this;
                return "[\n" + t.m00 + ", " + t.m01 + ", " + t.m02 + ",\n" + t.m03 + ",\n" + t.m04 + ", " + t.m05 + ",\n" + t.m06 + ", " + t.m07 + ",\n" + t.m08 + "\n" + "]";
              };

              _proto.identity = function identity() {
                this.m00 = 1;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 1;
                this.m05 = 0;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 1;
                return this;
              };

              _proto.transpose = function transpose() {
                var a01 = this.m01;
                var a02 = this.m02;
                var a12 = this.m05;
                this.m01 = this.m03;
                this.m02 = this.m06;
                this.m03 = a01;
                this.m05 = this.m07;
                this.m06 = a02;
                this.m07 = a12;
                return this;
              };

              _proto.invert = function invert() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                var b01 = a22 * a11 - a12 * a21;
                var b11 = -a22 * a10 + a12 * a20;
                var b21 = a21 * a10 - a11 * a20;
                var det = a00 * b01 + a01 * b11 + a02 * b21;

                if (det === 0) {
                  this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                  return this;
                }

                det = 1.0 / det;
                this.m00 = b01 * det;
                this.m01 = (-a22 * a01 + a02 * a21) * det;
                this.m02 = (a12 * a01 - a02 * a11) * det;
                this.m03 = b11 * det;
                this.m04 = (a22 * a00 - a02 * a20) * det;
                this.m05 = (-a12 * a00 + a02 * a10) * det;
                this.m06 = b21 * det;
                this.m07 = (-a21 * a00 + a01 * a20) * det;
                this.m08 = (a11 * a00 - a01 * a10) * det;
                return this;
              };

              _proto.determinant = function determinant() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
              };

              _proto.add = function add(mat) {
                this.m00 += mat.m00;
                this.m01 += mat.m01;
                this.m02 += mat.m02;
                this.m03 += mat.m03;
                this.m04 += mat.m04;
                this.m05 += mat.m05;
                this.m06 += mat.m06;
                this.m07 += mat.m07;
                this.m08 += mat.m08;
                return this;
              };

              _proto.subtract = function subtract(mat) {
                this.m00 -= mat.m00;
                this.m01 -= mat.m01;
                this.m02 -= mat.m02;
                this.m03 -= mat.m03;
                this.m04 -= mat.m04;
                this.m05 -= mat.m05;
                this.m06 -= mat.m06;
                this.m07 -= mat.m07;
                this.m08 -= mat.m08;
                return this;
              };

              _proto.multiply = function multiply(mat) {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                var b00 = mat.m00;
                var b01 = mat.m01;
                var b02 = mat.m02;
                var b10 = mat.m03;
                var b11 = mat.m04;
                var b12 = mat.m05;
                var b20 = mat.m06;
                var b21 = mat.m07;
                var b22 = mat.m08;
                this.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                this.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                this.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                this.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                this.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                this.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                this.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                this.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                this.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return this;
              };

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                this.m00 *= scalar;
                this.m01 *= scalar;
                this.m02 *= scalar;
                this.m03 *= scalar;
                this.m04 *= scalar;
                this.m05 *= scalar;
                this.m06 *= scalar;
                this.m07 *= scalar;
                this.m08 *= scalar;
                return this;
              };

              _proto.scale = function scale(vec) {
                var x = vec.x;
                var y = vec.y;
                this.m00 = x * this.m00;
                this.m01 = x * this.m01;
                this.m02 = x * this.m02;
                this.m03 = y * this.m03;
                this.m04 = y * this.m04;
                this.m05 = y * this.m05;
                this.m06 = this.m06;
                this.m07 = this.m07;
                this.m08 = this.m08;
                return this;
              };

              _proto.rotate = function rotate(rad) {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                this.m00 = c * a00 + s * a10;
                this.m01 = c * a01 + s * a11;
                this.m02 = c * a02 + s * a12;
                this.m03 = c * a10 - s * a00;
                this.m04 = c * a11 - s * a01;
                this.m05 = c * a12 - s * a02;
                this.m06 = a20;
                this.m07 = a21;
                this.m08 = a22;
                return this;
              };

              _proto.fromQuat = function fromQuat(q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                this.m00 = 1 - yy - zz;
                this.m03 = yx - wz;
                this.m06 = zx + wy;
                this.m01 = yx + wz;
                this.m04 = 1 - xx - zz;
                this.m07 = zy - wx;
                this.m02 = zx - wy;
                this.m05 = zy + wx;
                this.m08 = 1 - xx - yy;
                return this;
              };

              return Mat3;
            }(ValueType));
            Mat3.IDENTITY = Object.freeze(new Mat3());
            var v3_1$1 = new Vec3();
            var v3_2$1 = new Vec3();
            CCClass.fastDefine('cc.Mat3', Mat3, {
              m00: 1,
              m01: 0,
              m02: 0,
              m03: 0,
              m04: 1,
              m05: 0,
              m06: 0,
              m07: 0,
              m08: 1
            });
            legacyCC.Mat3 = Mat3;

            var Quat = exports('cB', function (_ValueType) {
              _inheritsLoose(Quat, _ValueType);

              Quat.clone = function clone(a) {
                return new Quat(a.x, a.y, a.z, a.w);
              };

              Quat.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = a.w;
                return out;
              };

              Quat.set = function set(out, x, y, z, w) {
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              };

              Quat.identity = function identity(out) {
                out.x = 0;
                out.y = 0;
                out.z = 0;
                out.w = 1;
                return out;
              };

              Quat.rotationTo = function rotationTo(out, a, b) {
                var dot = Vec3.dot(a, b);

                if (dot < -0.999999) {
                  Vec3.cross(v3_1$2, Vec3.UNIT_X, a);

                  if (v3_1$2.length() < 0.000001) {
                    Vec3.cross(v3_1$2, Vec3.UNIT_Y, a);
                  }

                  Vec3.normalize(v3_1$2, v3_1$2);
                  Quat.fromAxisAngle(out, v3_1$2, Math.PI);
                  return out;
                } else if (dot > 0.999999) {
                  out.x = 0;
                  out.y = 0;
                  out.z = 0;
                  out.w = 1;
                  return out;
                } else {
                  Vec3.cross(v3_1$2, a, b);
                  out.x = v3_1$2.x;
                  out.y = v3_1$2.y;
                  out.z = v3_1$2.z;
                  out.w = 1 + dot;
                  return Quat.normalize(out, out);
                }
              };

              Quat.getAxisAngle = function getAxisAngle(outAxis, q) {
                var rad = Math.acos(q.w) * 2.0;
                var s = Math.sin(rad / 2.0);

                if (s !== 0.0) {
                  outAxis.x = q.x / s;
                  outAxis.y = q.y / s;
                  outAxis.z = q.z / s;
                } else {
                  outAxis.x = 1;
                  outAxis.y = 0;
                  outAxis.z = 0;
                }

                return rad;
              };

              Quat.multiply = function multiply(out, a, b) {
                var x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;
                var y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;
                var z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;
                var w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              };

              Quat.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                out.w = a.w * b;
                return out;
              };

              Quat.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                out.w = a.w + b.w * scale;
                return out;
              };

              Quat.rotateX = function rotateX(out, a, rad) {
                rad *= 0.5;
                var bx = Math.sin(rad);
                var bw = Math.cos(rad);
                var x = a.x,
                    y = a.y,
                    z = a.z,
                    w = a.w;
                out.x = x * bw + w * bx;
                out.y = y * bw + z * bx;
                out.z = z * bw - y * bx;
                out.w = w * bw - x * bx;
                return out;
              };

              Quat.rotateY = function rotateY(out, a, rad) {
                rad *= 0.5;
                var by = Math.sin(rad);
                var bw = Math.cos(rad);
                var x = a.x,
                    y = a.y,
                    z = a.z,
                    w = a.w;
                out.x = x * bw - z * by;
                out.y = y * bw + w * by;
                out.z = z * bw + x * by;
                out.w = w * bw - y * by;
                return out;
              };

              Quat.rotateZ = function rotateZ(out, a, rad) {
                rad *= 0.5;
                var bz = Math.sin(rad);
                var bw = Math.cos(rad);
                var x = a.x,
                    y = a.y,
                    z = a.z,
                    w = a.w;
                out.x = x * bw + y * bz;
                out.y = y * bw - x * bz;
                out.z = z * bw + w * bz;
                out.w = w * bw - z * bz;
                return out;
              };

              Quat.rotateAround = function rotateAround(out, rot, axis, rad) {
                Quat.invert(qt_1, rot);
                Vec3.transformQuat(v3_1$2, axis, qt_1);
                Quat.fromAxisAngle(qt_1, v3_1$2, rad);
                Quat.multiply(out, rot, qt_1);
                return out;
              };

              Quat.rotateAroundLocal = function rotateAroundLocal(out, rot, axis, rad) {
                Quat.fromAxisAngle(qt_1, axis, rad);
                Quat.multiply(out, rot, qt_1);
                return out;
              };

              Quat.calculateW = function calculateW(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = Math.sqrt(Math.abs(1.0 - a.x * a.x - a.y * a.y - a.z * a.z));
                return out;
              };

              Quat.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
              };

              Quat.lerp = function lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                out.w = a.w + t * (b.w - a.w);
                return out;
              };

              Quat.slerp = function slerp(out, a, b, t) {
                var scale0 = 0;
                var scale1 = 0;
                var bx = b.x;
                var by = b.y;
                var bz = b.z;
                var bw = b.w;
                var cosom = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;

                if (cosom < 0.0) {
                  cosom = -cosom;
                  bx = -bx;
                  by = -by;
                  bz = -bz;
                  bw = -bw;
                }

                if (1.0 - cosom > 0.000001) {
                  var omega = Math.acos(cosom);
                  var sinom = Math.sin(omega);
                  scale0 = Math.sin((1.0 - t) * omega) / sinom;
                  scale1 = Math.sin(t * omega) / sinom;
                } else {
                  scale0 = 1.0 - t;
                  scale1 = t;
                }

                out.x = scale0 * a.x + scale1 * bx;
                out.y = scale0 * a.y + scale1 * by;
                out.z = scale0 * a.z + scale1 * bz;
                out.w = scale0 * a.w + scale1 * bw;
                return out;
              };

              Quat.sqlerp = function sqlerp(out, a, b, c, d, t) {
                Quat.slerp(qt_1, a, d, t);
                Quat.slerp(qt_2, b, c, t);
                Quat.slerp(out, qt_1, qt_2, 2 * t * (1 - t));
                return out;
              };

              Quat.invert = function invert(out, a) {
                var dot = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
                var invDot = dot ? 1.0 / dot : 0;
                out.x = -a.x * invDot;
                out.y = -a.y * invDot;
                out.z = -a.z * invDot;
                out.w = a.w * invDot;
                return out;
              };

              Quat.conjugate = function conjugate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                out.w = a.w;
                return out;
              };

              Quat.len = function len(a) {
                return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w);
              };

              Quat.lengthSqr = function lengthSqr(a) {
                return a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
              };

              Quat.normalize = function normalize(out, a) {
                var len = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = a.x * len;
                  out.y = a.y * len;
                  out.z = a.z * len;
                  out.w = a.w * len;
                }

                return out;
              };

              Quat.fromAxes = function fromAxes(out, xAxis, yAxis, zAxis) {
                Mat3.set(m3_1, xAxis.x, xAxis.y, xAxis.z, yAxis.x, yAxis.y, yAxis.z, zAxis.x, zAxis.y, zAxis.z);
                return Quat.normalize(out, Quat.fromMat3(out, m3_1));
              };

              Quat.fromViewUp = function fromViewUp(out, view, up) {
                Mat3.fromViewUp(m3_1, view, up);
                return Quat.normalize(out, Quat.fromMat3(out, m3_1));
              };

              Quat.fromAxisAngle = function fromAxisAngle(out, axis, rad) {
                rad *= 0.5;
                var s = Math.sin(rad);
                out.x = s * axis.x;
                out.y = s * axis.y;
                out.z = s * axis.z;
                out.w = Math.cos(rad);
                return out;
              };

              Quat.fromMat3 = function fromMat3(out, m) {
                var m00 = m.m00,
                    m01 = m.m03,
                    m02 = m.m06,
                    m10 = m.m01,
                    m11 = m.m04,
                    m12 = m.m07,
                    m20 = m.m02,
                    m21 = m.m05,
                    m22 = m.m08;
                var trace = m00 + m11 + m22;

                if (trace > 0) {
                  var s = 0.5 / Math.sqrt(trace + 1.0);
                  out.w = 0.25 / s;
                  out.x = (m21 - m12) * s;
                  out.y = (m02 - m20) * s;
                  out.z = (m10 - m01) * s;
                } else if (m00 > m11 && m00 > m22) {
                  var _s = 2.0 * Math.sqrt(1.0 + m00 - m11 - m22);

                  out.w = (m21 - m12) / _s;
                  out.x = 0.25 * _s;
                  out.y = (m01 + m10) / _s;
                  out.z = (m02 + m20) / _s;
                } else if (m11 > m22) {
                  var _s2 = 2.0 * Math.sqrt(1.0 + m11 - m00 - m22);

                  out.w = (m02 - m20) / _s2;
                  out.x = (m01 + m10) / _s2;
                  out.y = 0.25 * _s2;
                  out.z = (m12 + m21) / _s2;
                } else {
                  var _s3 = 2.0 * Math.sqrt(1.0 + m22 - m00 - m11);

                  out.w = (m10 - m01) / _s3;
                  out.x = (m02 + m20) / _s3;
                  out.y = (m12 + m21) / _s3;
                  out.z = 0.25 * _s3;
                }

                return out;
              };

              Quat.fromEuler = function fromEuler(out, x, y, z) {
                x *= halfToRad;
                y *= halfToRad;
                z *= halfToRad;
                var sx = Math.sin(x);
                var cx = Math.cos(x);
                var sy = Math.sin(y);
                var cy = Math.cos(y);
                var sz = Math.sin(z);
                var cz = Math.cos(z);
                out.x = sx * cy * cz + cx * sy * sz;
                out.y = cx * sy * cz + sx * cy * sz;
                out.z = cx * cy * sz - sx * sy * cz;
                out.w = cx * cy * cz - sx * sy * sz;
                return out;
              };

              Quat.fromAngleZ = function fromAngleZ(out, z) {
                z *= halfToRad;
                out.x = out.y = 0;
                out.z = Math.sin(z);
                out.w = Math.cos(z);
                return out;
              };

              Quat.toAxisX = function toAxisX(out, q) {
                var fy = 2.0 * q.y;
                var fz = 2.0 * q.z;
                out.x = 1.0 - fy * q.y - fz * q.z;
                out.y = fy * q.x + fz * q.w;
                out.z = fz * q.x + fy * q.w;
                return out;
              };

              Quat.toAxisY = function toAxisY(out, q) {
                var fx = 2.0 * q.x;
                var fy = 2.0 * q.y;
                var fz = 2.0 * q.z;
                out.x = fy * q.x - fz * q.w;
                out.y = 1.0 - fx * q.x - fz * q.z;
                out.z = fz * q.y + fx * q.w;
                return out;
              };

              Quat.toAxisZ = function toAxisZ(out, q) {
                var fx = 2.0 * q.x;
                var fy = 2.0 * q.y;
                var fz = 2.0 * q.z;
                out.x = fz * q.x - fy * q.w;
                out.y = fz * q.y - fx * q.w;
                out.z = 1.0 - fx * q.x - fy * q.y;
                return out;
              };

              Quat.toEuler = function toEuler(out, q, outerZ) {
                var x = q.x,
                    y = q.y,
                    z = q.z,
                    w = q.w;
                var bank = 0;
                var heading = 0;
                var attitude = 0;
                var test = x * y + z * w;

                if (test > 0.499999) {
                  bank = 0;
                  heading = toDegree(2 * Math.atan2(x, w));
                  attitude = 90;
                } else if (test < -0.499999) {
                  bank = 0;
                  heading = -toDegree(2 * Math.atan2(x, w));
                  attitude = -90;
                } else {
                  var sqx = x * x;
                  var sqy = y * y;
                  var sqz = z * z;
                  bank = toDegree(Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz));
                  heading = toDegree(Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz));
                  attitude = toDegree(Math.asin(2 * test));

                  if (outerZ) {
                    bank = -180 * Math.sign(bank + 1e-6) + bank;
                    heading = -180 * Math.sign(heading + 1e-6) + heading;
                    attitude = 180 * Math.sign(attitude + 1e-6) - attitude;
                  }
                }

                out.x = bank;
                out.y = heading;
                out.z = attitude;
                return out;
              };

              Quat.toArray = function toArray(out, q, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = q.x;
                out[ofs + 1] = q.y;
                out[ofs + 2] = q.z;
                out[ofs + 3] = q.w;
                return out;
              };

              Quat.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                out.w = arr[ofs + 3];
                return out;
              };

              Quat.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
              };

              Quat.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
              };

              function Quat(x, y, z, w) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                  _this.z = x.z;
                  _this.w = x.w;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.z = z || 0;
                  _this.w = w !== null && w !== void 0 ? w : 1;
                }

                return _this;
              }

              var _proto = Quat.prototype;

              _proto.clone = function clone() {
                return new Quat(this.x, this.y, this.z, this.w);
              };

              _proto.set = function set(x, y, z, w) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w !== null && w !== void 0 ? w : 1;
                }

                return this;
              };

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
              };

              _proto.strictEquals = function strictEquals(other) {
                return other && this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
              };

              _proto.getEulerAngles = function getEulerAngles(out) {
                return Quat.toEuler(out, this);
              };

              _proto.lerp = function lerp(to, ratio) {
                this.x += ratio * (to.x - this.x);
                this.y += ratio * (to.y - this.y);
                this.z += ratio * (to.z - this.z);
                this.w += ratio * (to.w - this.w);
                return this;
              };

              _proto.slerp = function slerp(to, ratio) {
                return Quat.slerp(this, this, to, ratio);
              };

              _proto.length = function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
              };

              _proto.lengthSqr = function lengthSqr() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
              };

              return Quat;
            }(ValueType));
            Quat.IDENTITY = Object.freeze(new Quat());
            var qt_1 = new Quat();
            var qt_2 = new Quat();
            var v3_1$2 = new Vec3();
            var m3_1 = new Mat3();
            var halfToRad = 0.5 * Math.PI / 180.0;
            CCClass.fastDefine('cc.Quat', Quat, {
              x: 0,
              y: 0,
              z: 0,
              w: 1
            });
            legacyCC.Quat = Quat;
            function quat(x, y, z, w) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (z === void 0) {
                z = 0;
              }

              if (w === void 0) {
                w = 1;
              }

              return new Quat(x, y, z, w);
            }
            legacyCC.quat = quat;

            var preTransforms = exports('en', Object.freeze([Object.freeze([1, 0, 0, 1]), Object.freeze([0, 1, -1, 0]), Object.freeze([-1, 0, 0, -1]), Object.freeze([0, -1, 1, 0])]));
            var Mat4 = exports('cE', function (_ValueType) {
              _inheritsLoose(Mat4, _ValueType);

              Mat4.clone = function clone(a) {
                return new Mat4(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08, a.m09, a.m10, a.m11, a.m12, a.m13, a.m14, a.m15);
              };

              Mat4.copy = function copy(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m03;
                out.m04 = a.m04;
                out.m05 = a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                out.m09 = a.m09;
                out.m10 = a.m10;
                out.m11 = a.m11;
                out.m12 = a.m12;
                out.m13 = a.m13;
                out.m14 = a.m14;
                out.m15 = a.m15;
                return out;
              };

              Mat4.set = function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
                out.m00 = m00;
                out.m01 = m01;
                out.m02 = m02;
                out.m03 = m03;
                out.m04 = m10;
                out.m05 = m11;
                out.m06 = m12;
                out.m07 = m13;
                out.m08 = m20;
                out.m09 = m21;
                out.m10 = m22;
                out.m11 = m23;
                out.m12 = m30;
                out.m13 = m31;
                out.m14 = m32;
                out.m15 = m33;
                return out;
              };

              Mat4.identity = function identity(out) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.transpose = function transpose(out, a) {
                if (out === a) {
                  var a01 = a.m01;
                  var a02 = a.m02;
                  var a03 = a.m03;
                  var a12 = a.m06;
                  var a13 = a.m07;
                  var a23 = a.m11;
                  out.m01 = a.m04;
                  out.m02 = a.m08;
                  out.m03 = a.m12;
                  out.m04 = a01;
                  out.m06 = a.m09;
                  out.m07 = a.m13;
                  out.m08 = a02;
                  out.m09 = a12;
                  out.m11 = a.m14;
                  out.m12 = a03;
                  out.m13 = a13;
                  out.m14 = a23;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m04;
                  out.m02 = a.m08;
                  out.m03 = a.m12;
                  out.m04 = a.m01;
                  out.m05 = a.m05;
                  out.m06 = a.m09;
                  out.m07 = a.m13;
                  out.m08 = a.m02;
                  out.m09 = a.m06;
                  out.m10 = a.m10;
                  out.m11 = a.m14;
                  out.m12 = a.m03;
                  out.m13 = a.m07;
                  out.m14 = a.m11;
                  out.m15 = a.m15;
                }

                return out;
              };

              Mat4.invert = function invert(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32;
                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (det === 0) {
                  out.m00 = 0;
                  out.m01 = 0;
                  out.m02 = 0;
                  out.m03 = 0;
                  out.m04 = 0;
                  out.m05 = 0;
                  out.m06 = 0;
                  out.m07 = 0;
                  out.m08 = 0;
                  out.m09 = 0;
                  out.m10 = 0;
                  out.m11 = 0;
                  out.m12 = 0;
                  out.m13 = 0;
                  out.m14 = 0;
                  out.m15 = 0;
                  return out;
                }

                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                out.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                out.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                out.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                out.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                out.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                out.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                out.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
                return out;
              };

              Mat4.determinant = function determinant(a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32;
                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
              };

              Mat4.multiply = function multiply(out, a, b) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b0 = b.m00;
                var b1 = b.m01;
                var b2 = b.m02;
                var b3 = b.m03;
                out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m04;
                b1 = b.m05;
                b2 = b.m06;
                b3 = b.m07;
                out.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m08;
                b1 = b.m09;
                b2 = b.m10;
                b3 = b.m11;
                out.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m12;
                b1 = b.m13;
                b2 = b.m14;
                b3 = b.m15;
                out.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return out;
              };

              Mat4.transform = function transform(out, a, v) {
                var x = v.x;
                var y = v.y;
                var z = v.z;

                if (a === out) {
                  out.m12 = a.m00 * x + a.m04 * y + a.m08 * z + a.m12;
                  out.m13 = a.m01 * x + a.m05 * y + a.m09 * z + a.m13;
                  out.m14 = a.m02 * x + a.m06 * y + a.m10 * z + a.m14;
                  out.m15 = a.m03 * x + a.m07 * y + a.m11 * z + a.m15;
                } else {
                  var a00 = a.m00;
                  var a01 = a.m01;
                  var a02 = a.m02;
                  var a03 = a.m03;
                  var a10 = a.m04;
                  var a11 = a.m05;
                  var a12 = a.m06;
                  var a13 = a.m07;
                  var a20 = a.m08;
                  var a21 = a.m09;
                  var a22 = a.m10;
                  var a23 = a.m11;
                  var a30 = a.m12;
                  var a31 = a.m13;
                  var a32 = a.m14;
                  var a33 = a.m15;
                  out.m00 = a00;
                  out.m01 = a01;
                  out.m02 = a02;
                  out.m03 = a03;
                  out.m04 = a10;
                  out.m05 = a11;
                  out.m06 = a12;
                  out.m07 = a13;
                  out.m08 = a20;
                  out.m09 = a21;
                  out.m10 = a22;
                  out.m11 = a23;
                  out.m12 = a00 * x + a10 * y + a20 * z + a.m12;
                  out.m13 = a01 * x + a11 * y + a21 * z + a.m13;
                  out.m14 = a02 * x + a12 * y + a22 * z + a.m14;
                  out.m15 = a03 * x + a13 * y + a23 * z + a.m15;
                }

                return out;
              };

              Mat4.translate = function translate(out, a, v) {
                console.warn('function changed');

                if (a === out) {
                  out.m12 += v.x;
                  out.m13 += v.y;
                  out.m14 += v.z;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m01;
                  out.m02 = a.m02;
                  out.m03 = a.m03;
                  out.m04 = a.m04;
                  out.m05 = a.m05;
                  out.m06 = a.m06;
                  out.m07 = a.m07;
                  out.m08 = a.m08;
                  out.m09 = a.m09;
                  out.m10 = a.m10;
                  out.m11 = a.m11;
                  out.m12 += v.x;
                  out.m13 += v.y;
                  out.m14 += v.z;
                  out.m15 = a.m15;
                }

                return out;
              };

              Mat4.scale = function scale(out, a, v) {
                var x = v.x;
                var y = v.y;
                var z = v.z;
                out.m00 = a.m00 * x;
                out.m01 = a.m01 * x;
                out.m02 = a.m02 * x;
                out.m03 = a.m03 * x;
                out.m04 = a.m04 * y;
                out.m05 = a.m05 * y;
                out.m06 = a.m06 * y;
                out.m07 = a.m07 * y;
                out.m08 = a.m08 * z;
                out.m09 = a.m09 * z;
                out.m10 = a.m10 * z;
                out.m11 = a.m11 * z;
                out.m12 = a.m12;
                out.m13 = a.m13;
                out.m14 = a.m14;
                out.m15 = a.m15;
                return out;
              };

              Mat4.rotate = function rotate(out, a, rad, axis) {
                var x = axis.x;
                var y = axis.y;
                var z = axis.z;
                var len = Math.sqrt(x * x + y * y + z * z);

                if (Math.abs(len) < EPSILON) {
                  return null;
                }

                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var b00 = x * x * t + c;
                var b01 = y * x * t + z * s;
                var b02 = z * x * t - y * s;
                var b10 = x * y * t - z * s;
                var b11 = y * y * t + c;
                var b12 = z * y * t + x * s;
                var b20 = x * z * t + y * s;
                var b21 = y * z * t - x * s;
                var b22 = z * z * t + c;
                out.m00 = a00 * b00 + a10 * b01 + a20 * b02;
                out.m01 = a01 * b00 + a11 * b01 + a21 * b02;
                out.m02 = a02 * b00 + a12 * b01 + a22 * b02;
                out.m03 = a03 * b00 + a13 * b01 + a23 * b02;
                out.m04 = a00 * b10 + a10 * b11 + a20 * b12;
                out.m05 = a01 * b10 + a11 * b11 + a21 * b12;
                out.m06 = a02 * b10 + a12 * b11 + a22 * b12;
                out.m07 = a03 * b10 + a13 * b11 + a23 * b12;
                out.m08 = a00 * b20 + a10 * b21 + a20 * b22;
                out.m09 = a01 * b20 + a11 * b21 + a21 * b22;
                out.m10 = a02 * b20 + a12 * b21 + a22 * b22;
                out.m11 = a03 * b20 + a13 * b21 + a23 * b22;

                if (a !== out) {
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }

                return out;
              };

              Mat4.rotateX = function rotateX(out, a, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;

                if (a !== out) {
                  out.m00 = a.m00;
                  out.m01 = a.m01;
                  out.m02 = a.m02;
                  out.m03 = a.m03;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }

                out.m04 = a10 * c + a20 * s;
                out.m05 = a11 * c + a21 * s;
                out.m06 = a12 * c + a22 * s;
                out.m07 = a13 * c + a23 * s;
                out.m08 = a20 * c - a10 * s;
                out.m09 = a21 * c - a11 * s;
                out.m10 = a22 * c - a12 * s;
                out.m11 = a23 * c - a13 * s;
                return out;
              };

              Mat4.rotateY = function rotateY(out, a, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;

                if (a !== out) {
                  out.m04 = a.m04;
                  out.m05 = a.m05;
                  out.m06 = a.m06;
                  out.m07 = a.m07;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }

                out.m00 = a00 * c - a20 * s;
                out.m01 = a01 * c - a21 * s;
                out.m02 = a02 * c - a22 * s;
                out.m03 = a03 * c - a23 * s;
                out.m08 = a00 * s + a20 * c;
                out.m09 = a01 * s + a21 * c;
                out.m10 = a02 * s + a22 * c;
                out.m11 = a03 * s + a23 * c;
                return out;
              };

              Mat4.rotateZ = function rotateZ(out, a, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;

                if (a !== out) {
                  out.m08 = a.m08;
                  out.m09 = a.m09;
                  out.m10 = a.m10;
                  out.m11 = a.m11;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }

                out.m00 = a00 * c + a10 * s;
                out.m01 = a01 * c + a11 * s;
                out.m02 = a02 * c + a12 * s;
                out.m03 = a03 * c + a13 * s;
                out.m04 = a10 * c - a00 * s;
                out.m05 = a11 * c - a01 * s;
                out.m06 = a12 * c - a02 * s;
                out.m07 = a13 * c - a03 * s;
                return out;
              };

              Mat4.fromTranslation = function fromTranslation(out, v) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              };

              Mat4.fromScaling = function fromScaling(out, v) {
                out.m00 = v.x;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = v.y;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = v.z;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.fromRotation = function fromRotation(out, rad, axis) {
                var x = axis.x;
                var y = axis.y;
                var z = axis.z;
                var len = Math.sqrt(x * x + y * y + z * z);

                if (Math.abs(len) < EPSILON) {
                  return null;
                }

                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;
                out.m00 = x * x * t + c;
                out.m01 = y * x * t + z * s;
                out.m02 = z * x * t - y * s;
                out.m03 = 0;
                out.m04 = x * y * t - z * s;
                out.m05 = y * y * t + c;
                out.m06 = z * y * t + x * s;
                out.m07 = 0;
                out.m08 = x * z * t + y * s;
                out.m09 = y * z * t - x * s;
                out.m10 = z * z * t + c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.fromXRotation = function fromXRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = c;
                out.m06 = s;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = -s;
                out.m10 = c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.fromYRotation = function fromYRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                out.m00 = c;
                out.m01 = 0;
                out.m02 = -s;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = s;
                out.m09 = 0;
                out.m10 = c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.fromZRotation = function fromZRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                out.m00 = c;
                out.m01 = s;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = -s;
                out.m05 = c;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.fromRT = function fromRT(out, q, v) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                out.m00 = 1 - (yy + zz);
                out.m01 = xy + wz;
                out.m02 = xz - wy;
                out.m03 = 0;
                out.m04 = xy - wz;
                out.m05 = 1 - (xx + zz);
                out.m06 = yz + wx;
                out.m07 = 0;
                out.m08 = xz + wy;
                out.m09 = yz - wx;
                out.m10 = 1 - (xx + yy);
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              };

              Mat4.getTranslation = function getTranslation(out, mat) {
                out.x = mat.m12;
                out.y = mat.m13;
                out.z = mat.m14;
                return out;
              };

              Mat4.getScaling = function getScaling(out, mat) {
                var m00 = m3_1$1.m00 = mat.m00;
                var m01 = m3_1$1.m01 = mat.m01;
                var m02 = m3_1$1.m02 = mat.m02;
                var m04 = m3_1$1.m03 = mat.m04;
                var m05 = m3_1$1.m04 = mat.m05;
                var m06 = m3_1$1.m05 = mat.m06;
                var m08 = m3_1$1.m06 = mat.m08;
                var m09 = m3_1$1.m07 = mat.m09;
                var m10 = m3_1$1.m08 = mat.m10;
                out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
                out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
                out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10);

                if (Mat3.determinant(m3_1$1) < 0) {
                  out.x *= -1;
                }

                return out;
              };

              Mat4.getRotation = function getRotation(out, mat) {
                var trace = mat.m00 + mat.m05 + mat.m10;
                var S = 0;

                if (trace > 0) {
                  S = Math.sqrt(trace + 1.0) * 2;
                  out.w = 0.25 * S;
                  out.x = (mat.m06 - mat.m09) / S;
                  out.y = (mat.m08 - mat.m02) / S;
                  out.z = (mat.m01 - mat.m04) / S;
                } else if (mat.m00 > mat.m05 && mat.m00 > mat.m10) {
                  S = Math.sqrt(1.0 + mat.m00 - mat.m05 - mat.m10) * 2;
                  out.w = (mat.m06 - mat.m09) / S;
                  out.x = 0.25 * S;
                  out.y = (mat.m01 + mat.m04) / S;
                  out.z = (mat.m08 + mat.m02) / S;
                } else if (mat.m05 > mat.m10) {
                  S = Math.sqrt(1.0 + mat.m05 - mat.m00 - mat.m10) * 2;
                  out.w = (mat.m08 - mat.m02) / S;
                  out.x = (mat.m01 + mat.m04) / S;
                  out.y = 0.25 * S;
                  out.z = (mat.m06 + mat.m09) / S;
                } else {
                  S = Math.sqrt(1.0 + mat.m10 - mat.m00 - mat.m05) * 2;
                  out.w = (mat.m01 - mat.m04) / S;
                  out.x = (mat.m08 + mat.m02) / S;
                  out.y = (mat.m06 + mat.m09) / S;
                  out.z = 0.25 * S;
                }

                return out;
              };

              Mat4.toRTS = function toRTS(m, q, v, s) {
                s.x = Vec3.set(v3_1$3, m.m00, m.m01, m.m02).length();
                m3_1$1.m00 = m.m00 / s.x;
                m3_1$1.m01 = m.m01 / s.x;
                m3_1$1.m02 = m.m02 / s.x;
                s.y = Vec3.set(v3_1$3, m.m04, m.m05, m.m06).length();
                m3_1$1.m03 = m.m04 / s.y;
                m3_1$1.m04 = m.m05 / s.y;
                m3_1$1.m05 = m.m06 / s.y;
                s.z = Vec3.set(v3_1$3, m.m08, m.m09, m.m10).length();
                m3_1$1.m06 = m.m08 / s.z;
                m3_1$1.m07 = m.m09 / s.z;
                m3_1$1.m08 = m.m10 / s.z;
                var det = Mat3.determinant(m3_1$1);

                if (det < 0) {
                  s.x *= -1;
                  m3_1$1.m00 *= -1;
                  m3_1$1.m01 *= -1;
                  m3_1$1.m02 *= -1;
                }

                Quat.fromMat3(q, m3_1$1);
                Vec3.set(v, m.m12, m.m13, m.m14);
              };

              Mat4.fromRTS = function fromRTS(out, q, v, s) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = s.x;
                var sy = s.y;
                var sz = s.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              };

              Mat4.fromRTSOrigin = function fromRTSOrigin(out, q, v, s, o) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = s.x;
                var sy = s.y;
                var sz = s.z;
                var ox = o.x;
                var oy = o.y;
                var oz = o.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
                out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
                out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
                out.m15 = 1;
                return out;
              };

              Mat4.fromQuat = function fromQuat(out, q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                out.m00 = 1 - yy - zz;
                out.m01 = yx + wz;
                out.m02 = zx - wy;
                out.m03 = 0;
                out.m04 = yx - wz;
                out.m05 = 1 - xx - zz;
                out.m06 = zy + wx;
                out.m07 = 0;
                out.m08 = zx + wy;
                out.m09 = zy - wx;
                out.m10 = 1 - xx - yy;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.frustum = function frustum(out, left, right, bottom, top, near, far) {
                var rl = 1 / (right - left);
                var tb = 1 / (top - bottom);
                var nf = 1 / (near - far);
                out.m00 = near * 2 * rl;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = near * 2 * tb;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = (right + left) * rl;
                out.m09 = (top + bottom) * tb;
                out.m10 = (far + near) * nf;
                out.m11 = -1;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = far * near * 2 * nf;
                out.m15 = 0;
                return out;
              };

              Mat4.perspective = function perspective(out, fov, aspect, near, far, isFOVY, minClipZ, projectionSignY, orientation) {
                if (isFOVY === void 0) {
                  isFOVY = true;
                }

                if (minClipZ === void 0) {
                  minClipZ = -1;
                }

                if (projectionSignY === void 0) {
                  projectionSignY = 1;
                }

                if (orientation === void 0) {
                  orientation = 0;
                }

                var f = 1.0 / Math.tan(fov / 2);
                var nf = 1 / (near - far);
                var x = isFOVY ? f / aspect : f;
                var y = (isFOVY ? f : f * aspect) * projectionSignY;
                var preTransform = preTransforms[orientation];
                out.m00 = x * preTransform[0];
                out.m01 = x * preTransform[1];
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = y * preTransform[2];
                out.m05 = y * preTransform[3];
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = (far - minClipZ * near) * nf;
                out.m11 = -1;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = far * near * nf * (1 - minClipZ);
                out.m15 = 0;
                return out;
              };

              Mat4.ortho = function ortho(out, left, right, bottom, top, near, far, minClipZ, projectionSignY, orientation) {
                if (minClipZ === void 0) {
                  minClipZ = -1;
                }

                if (projectionSignY === void 0) {
                  projectionSignY = 1;
                }

                if (orientation === void 0) {
                  orientation = 0;
                }

                var lr = 1 / (left - right);
                var bt = 1 / (bottom - top) * projectionSignY;
                var nf = 1 / (near - far);
                var x = -2 * lr;
                var y = -2 * bt;
                var dx = (left + right) * lr;
                var dy = (top + bottom) * bt;
                var preTransform = preTransforms[orientation];
                out.m00 = x * preTransform[0];
                out.m01 = x * preTransform[1];
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = y * preTransform[2];
                out.m05 = y * preTransform[3];
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = nf * (1 - minClipZ);
                out.m11 = 0;
                out.m12 = dx * preTransform[0] + dy * preTransform[2];
                out.m13 = dx * preTransform[1] + dy * preTransform[3];
                out.m14 = (near - minClipZ * far) * nf;
                out.m15 = 1;
                return out;
              };

              Mat4.lookAt = function lookAt(out, eye, center, up) {
                var eyex = eye.x;
                var eyey = eye.y;
                var eyez = eye.z;
                var upx = up.x;
                var upy = up.y;
                var upz = up.z;
                var centerx = center.x;
                var centery = center.y;
                var centerz = center.z;
                var z0 = eyex - centerx;
                var z1 = eyey - centery;
                var z2 = eyez - centerz;
                var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
                z0 *= len;
                z1 *= len;
                z2 *= len;
                var x0 = upy * z2 - upz * z1;
                var x1 = upz * z0 - upx * z2;
                var x2 = upx * z1 - upy * z0;
                len = 1 / Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
                x0 *= len;
                x1 *= len;
                x2 *= len;
                var y0 = z1 * x2 - z2 * x1;
                var y1 = z2 * x0 - z0 * x2;
                var y2 = z0 * x1 - z1 * x0;
                out.m00 = x0;
                out.m01 = y0;
                out.m02 = z0;
                out.m03 = 0;
                out.m04 = x1;
                out.m05 = y1;
                out.m06 = z1;
                out.m07 = 0;
                out.m08 = x2;
                out.m09 = y2;
                out.m10 = z2;
                out.m11 = 0;
                out.m12 = -(x0 * eyex + x1 * eyey + x2 * eyez);
                out.m13 = -(y0 * eyex + y1 * eyey + y2 * eyez);
                out.m14 = -(z0 * eyex + z1 * eyey + z2 * eyez);
                out.m15 = 1;
                return out;
              };

              Mat4.inverseTranspose = function inverseTranspose(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32;
                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (!det) {
                  return null;
                }

                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m03 = 0;
                out.m04 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m06 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m07 = 0;
                out.m08 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m09 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              };

              Mat4.toArray = function toArray(out, m, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = m.m00;
                out[ofs + 1] = m.m01;
                out[ofs + 2] = m.m02;
                out[ofs + 3] = m.m03;
                out[ofs + 4] = m.m04;
                out[ofs + 5] = m.m05;
                out[ofs + 6] = m.m06;
                out[ofs + 7] = m.m07;
                out[ofs + 8] = m.m08;
                out[ofs + 9] = m.m09;
                out[ofs + 10] = m.m10;
                out[ofs + 11] = m.m11;
                out[ofs + 12] = m.m12;
                out[ofs + 13] = m.m13;
                out[ofs + 14] = m.m14;
                out[ofs + 15] = m.m15;
                return out;
              };

              Mat4.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.m00 = arr[ofs + 0];
                out.m01 = arr[ofs + 1];
                out.m02 = arr[ofs + 2];
                out.m03 = arr[ofs + 3];
                out.m04 = arr[ofs + 4];
                out.m05 = arr[ofs + 5];
                out.m06 = arr[ofs + 6];
                out.m07 = arr[ofs + 7];
                out.m08 = arr[ofs + 8];
                out.m09 = arr[ofs + 9];
                out.m10 = arr[ofs + 10];
                out.m11 = arr[ofs + 11];
                out.m12 = arr[ofs + 12];
                out.m13 = arr[ofs + 13];
                out.m14 = arr[ofs + 14];
                out.m15 = arr[ofs + 15];
                return out;
              };

              Mat4.add = function add(out, a, b) {
                out.m00 = a.m00 + b.m00;
                out.m01 = a.m01 + b.m01;
                out.m02 = a.m02 + b.m02;
                out.m03 = a.m03 + b.m03;
                out.m04 = a.m04 + b.m04;
                out.m05 = a.m05 + b.m05;
                out.m06 = a.m06 + b.m06;
                out.m07 = a.m07 + b.m07;
                out.m08 = a.m08 + b.m08;
                out.m09 = a.m09 + b.m09;
                out.m10 = a.m10 + b.m10;
                out.m11 = a.m11 + b.m11;
                out.m12 = a.m12 + b.m12;
                out.m13 = a.m13 + b.m13;
                out.m14 = a.m14 + b.m14;
                out.m15 = a.m15 + b.m15;
                return out;
              };

              Mat4.subtract = function subtract(out, a, b) {
                out.m00 = a.m00 - b.m00;
                out.m01 = a.m01 - b.m01;
                out.m02 = a.m02 - b.m02;
                out.m03 = a.m03 - b.m03;
                out.m04 = a.m04 - b.m04;
                out.m05 = a.m05 - b.m05;
                out.m06 = a.m06 - b.m06;
                out.m07 = a.m07 - b.m07;
                out.m08 = a.m08 - b.m08;
                out.m09 = a.m09 - b.m09;
                out.m10 = a.m10 - b.m10;
                out.m11 = a.m11 - b.m11;
                out.m12 = a.m12 - b.m12;
                out.m13 = a.m13 - b.m13;
                out.m14 = a.m14 - b.m14;
                out.m15 = a.m15 - b.m15;
                return out;
              };

              Mat4.multiplyScalar = function multiplyScalar(out, a, b) {
                out.m00 = a.m00 * b;
                out.m01 = a.m01 * b;
                out.m02 = a.m02 * b;
                out.m03 = a.m03 * b;
                out.m04 = a.m04 * b;
                out.m05 = a.m05 * b;
                out.m06 = a.m06 * b;
                out.m07 = a.m07 * b;
                out.m08 = a.m08 * b;
                out.m09 = a.m09 * b;
                out.m10 = a.m10 * b;
                out.m11 = a.m11 * b;
                out.m12 = a.m12 * b;
                out.m13 = a.m13 * b;
                out.m14 = a.m14 * b;
                out.m15 = a.m15 * b;
                return out;
              };

              Mat4.multiplyScalarAndAdd = function multiplyScalarAndAdd(out, a, b, scale) {
                out.m00 = a.m00 + b.m00 * scale;
                out.m01 = a.m01 + b.m01 * scale;
                out.m02 = a.m02 + b.m02 * scale;
                out.m03 = a.m03 + b.m03 * scale;
                out.m04 = a.m04 + b.m04 * scale;
                out.m05 = a.m05 + b.m05 * scale;
                out.m06 = a.m06 + b.m06 * scale;
                out.m07 = a.m07 + b.m07 * scale;
                out.m08 = a.m08 + b.m08 * scale;
                out.m09 = a.m09 + b.m09 * scale;
                out.m10 = a.m10 + b.m10 * scale;
                out.m11 = a.m11 + b.m11 * scale;
                out.m12 = a.m12 + b.m12 * scale;
                out.m13 = a.m13 + b.m13 * scale;
                out.m14 = a.m14 + b.m14 * scale;
                out.m15 = a.m15 + b.m15 * scale;
                return out;
              };

              Mat4.strictEquals = function strictEquals(a, b) {
                return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08 && a.m09 === b.m09 && a.m10 === b.m10 && a.m11 === b.m11 && a.m12 === b.m12 && a.m13 === b.m13 && a.m14 === b.m14 && a.m15 === b.m15;
              };

              Mat4.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08)) && Math.abs(a.m09 - b.m09) <= epsilon * Math.max(1.0, Math.abs(a.m09), Math.abs(b.m09)) && Math.abs(a.m10 - b.m10) <= epsilon * Math.max(1.0, Math.abs(a.m10), Math.abs(b.m10)) && Math.abs(a.m11 - b.m11) <= epsilon * Math.max(1.0, Math.abs(a.m11), Math.abs(b.m11)) && Math.abs(a.m12 - b.m12) <= epsilon * Math.max(1.0, Math.abs(a.m12), Math.abs(b.m12)) && Math.abs(a.m13 - b.m13) <= epsilon * Math.max(1.0, Math.abs(a.m13), Math.abs(b.m13)) && Math.abs(a.m14 - b.m14) <= epsilon * Math.max(1.0, Math.abs(a.m14), Math.abs(b.m14)) && Math.abs(a.m15 - b.m15) <= epsilon * Math.max(1.0, Math.abs(a.m15), Math.abs(b.m15));
              };

              function Mat4(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
                var _this;

                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 0;
                }

                if (m05 === void 0) {
                  m05 = 1;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 0;
                }

                if (m09 === void 0) {
                  m09 = 0;
                }

                if (m10 === void 0) {
                  m10 = 1;
                }

                if (m11 === void 0) {
                  m11 = 0;
                }

                if (m12 === void 0) {
                  m12 = 0;
                }

                if (m13 === void 0) {
                  m13 = 0;
                }

                if (m14 === void 0) {
                  m14 = 0;
                }

                if (m15 === void 0) {
                  m15 = 1;
                }

                _this = _ValueType.call(this) || this;
                _this.m00 = void 0;
                _this.m01 = void 0;
                _this.m02 = void 0;
                _this.m03 = void 0;
                _this.m04 = void 0;
                _this.m05 = void 0;
                _this.m06 = void 0;
                _this.m07 = void 0;
                _this.m08 = void 0;
                _this.m09 = void 0;
                _this.m10 = void 0;
                _this.m11 = void 0;
                _this.m12 = void 0;
                _this.m13 = void 0;
                _this.m14 = void 0;
                _this.m15 = void 0;

                if (typeof m00 === 'object') {
                  _this.m00 = m00.m00;
                  _this.m01 = m00.m01;
                  _this.m02 = m00.m02;
                  _this.m03 = m00.m03;
                  _this.m04 = m00.m04;
                  _this.m05 = m00.m05;
                  _this.m06 = m00.m06;
                  _this.m07 = m00.m07;
                  _this.m08 = m00.m08;
                  _this.m09 = m00.m09;
                  _this.m10 = m00.m10;
                  _this.m11 = m00.m11;
                  _this.m12 = m00.m12;
                  _this.m13 = m00.m13;
                  _this.m14 = m00.m14;
                  _this.m15 = m00.m15;
                } else {
                  _this.m00 = m00;
                  _this.m01 = m01;
                  _this.m02 = m02;
                  _this.m03 = m03;
                  _this.m04 = m04;
                  _this.m05 = m05;
                  _this.m06 = m06;
                  _this.m07 = m07;
                  _this.m08 = m08;
                  _this.m09 = m09;
                  _this.m10 = m10;
                  _this.m11 = m11;
                  _this.m12 = m12;
                  _this.m13 = m13;
                  _this.m14 = m14;
                  _this.m15 = m15;
                }

                return _this;
              }

              var _proto = Mat4.prototype;

              _proto.clone = function clone() {
                return new Mat4(this.m00, this.m01, this.m02, this.m03, this.m04, this.m05, this.m06, this.m07, this.m08, this.m09, this.m10, this.m11, this.m12, this.m13, this.m14, this.m15);
              };

              _proto.set = function set(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 0;
                }

                if (m05 === void 0) {
                  m05 = 1;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 0;
                }

                if (m09 === void 0) {
                  m09 = 0;
                }

                if (m10 === void 0) {
                  m10 = 1;
                }

                if (m11 === void 0) {
                  m11 = 0;
                }

                if (m12 === void 0) {
                  m12 = 0;
                }

                if (m13 === void 0) {
                  m13 = 0;
                }

                if (m14 === void 0) {
                  m14 = 0;
                }

                if (m15 === void 0) {
                  m15 = 1;
                }

                if (typeof m00 === 'object') {
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                  this.m09 = m00.m09;
                  this.m10 = m00.m10;
                  this.m11 = m00.m11;
                  this.m12 = m00.m12;
                  this.m13 = m00.m13;
                  this.m14 = m00.m14;
                  this.m15 = m00.m15;
                  this.m00 = m00.m00;
                } else {
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                  this.m09 = m09;
                  this.m10 = m10;
                  this.m11 = m11;
                  this.m12 = m12;
                  this.m13 = m13;
                  this.m14 = m14;
                  this.m15 = m15;
                  this.m00 = m00;
                }

                return this;
              };

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08)) && Math.abs(this.m09 - other.m09) <= epsilon * Math.max(1.0, Math.abs(this.m09), Math.abs(other.m09)) && Math.abs(this.m10 - other.m10) <= epsilon * Math.max(1.0, Math.abs(this.m10), Math.abs(other.m10)) && Math.abs(this.m11 - other.m11) <= epsilon * Math.max(1.0, Math.abs(this.m11), Math.abs(other.m11)) && Math.abs(this.m12 - other.m12) <= epsilon * Math.max(1.0, Math.abs(this.m12), Math.abs(other.m12)) && Math.abs(this.m13 - other.m13) <= epsilon * Math.max(1.0, Math.abs(this.m13), Math.abs(other.m13)) && Math.abs(this.m14 - other.m14) <= epsilon * Math.max(1.0, Math.abs(this.m14), Math.abs(other.m14)) && Math.abs(this.m15 - other.m15) <= epsilon * Math.max(1.0, Math.abs(this.m15), Math.abs(other.m15));
              };

              _proto.strictEquals = function strictEquals(other) {
                return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08 && this.m09 === other.m09 && this.m10 === other.m10 && this.m11 === other.m11 && this.m12 === other.m12 && this.m13 === other.m13 && this.m14 === other.m14 && this.m15 === other.m15;
              };

              _proto.toString = function toString() {
                return "[\n" + this.m00 + ", " + this.m01 + ", " + this.m02 + ", " + this.m03 + ",\n" + this.m04 + ", " + this.m05 + ", " + this.m06 + ", " + this.m07 + ",\n" + this.m08 + ", " + this.m09 + ", " + this.m10 + ", " + this.m11 + ",\n" + this.m12 + ", " + this.m13 + ", " + this.m14 + ", " + this.m15 + "\n" + ']';
              };

              _proto.identity = function identity() {
                this.m00 = 1;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 0;
                this.m05 = 1;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 0;
                this.m09 = 0;
                this.m10 = 1;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 1;
                return this;
              };

              _proto.zero = function zero() {
                this.m00 = 0;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 0;
                this.m05 = 0;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 0;
                this.m09 = 0;
                this.m10 = 0;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 0;
                return this;
              };

              _proto.transpose = function transpose() {
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a12 = this.m06;
                var a13 = this.m07;
                var a23 = this.m11;
                this.m01 = this.m04;
                this.m02 = this.m08;
                this.m03 = this.m12;
                this.m04 = a01;
                this.m06 = this.m09;
                this.m07 = this.m13;
                this.m08 = a02;
                this.m09 = a12;
                this.m11 = this.m14;
                this.m12 = a03;
                this.m13 = a13;
                this.m14 = a23;
                return this;
              };

              _proto.invert = function invert() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11;
                var a30 = this.m12;
                var a31 = this.m13;
                var a32 = this.m14;
                var a33 = this.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32;
                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (det === 0) {
                  this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                  return this;
                }

                det = 1.0 / det;
                this.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                this.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                this.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                this.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                this.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                this.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                this.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                this.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                this.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                this.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                this.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                this.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                this.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                this.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                this.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                this.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
                return this;
              };

              _proto.determinant = function determinant() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11;
                var a30 = this.m12;
                var a31 = this.m13;
                var a32 = this.m14;
                var a33 = this.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32;
                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
              };

              _proto.add = function add(mat) {
                this.m00 += mat.m00;
                this.m01 += mat.m01;
                this.m02 += mat.m02;
                this.m03 += mat.m03;
                this.m04 += mat.m04;
                this.m05 += mat.m05;
                this.m06 += mat.m06;
                this.m07 += mat.m07;
                this.m08 += mat.m08;
                this.m09 += mat.m09;
                this.m10 += mat.m10;
                this.m11 += mat.m11;
                this.m12 += mat.m12;
                this.m13 += mat.m13;
                this.m14 += mat.m14;
                this.m15 += mat.m15;
                return this;
              };

              _proto.subtract = function subtract(mat) {
                this.m00 -= mat.m00;
                this.m01 -= mat.m01;
                this.m02 -= mat.m02;
                this.m03 -= mat.m03;
                this.m04 -= mat.m04;
                this.m05 -= mat.m05;
                this.m06 -= mat.m06;
                this.m07 -= mat.m07;
                this.m08 -= mat.m08;
                this.m09 -= mat.m09;
                this.m10 -= mat.m10;
                this.m11 -= mat.m11;
                this.m12 -= mat.m12;
                this.m13 -= mat.m13;
                this.m14 -= mat.m14;
                this.m15 -= mat.m15;
                return this;
              };

              _proto.multiply = function multiply(mat) {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11;
                var a30 = this.m12;
                var a31 = this.m13;
                var a32 = this.m14;
                var a33 = this.m15;
                var b0 = mat.m00;
                var b1 = mat.m01;
                var b2 = mat.m02;
                var b3 = mat.m03;
                this.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m04;
                b1 = mat.m05;
                b2 = mat.m06;
                b3 = mat.m07;
                this.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m08;
                b1 = mat.m09;
                b2 = mat.m10;
                b3 = mat.m11;
                this.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m12;
                b1 = mat.m13;
                b2 = mat.m14;
                b3 = mat.m15;
                this.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return this;
              };

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                this.m00 *= scalar;
                this.m01 *= scalar;
                this.m02 *= scalar;
                this.m03 *= scalar;
                this.m04 *= scalar;
                this.m05 *= scalar;
                this.m06 *= scalar;
                this.m07 *= scalar;
                this.m08 *= scalar;
                this.m09 *= scalar;
                this.m10 *= scalar;
                this.m11 *= scalar;
                this.m12 *= scalar;
                this.m13 *= scalar;
                this.m14 *= scalar;
                this.m15 *= scalar;
                return this;
              };

              _proto.translate = function translate(vec) {
                console.warn('function changed');
                this.m12 += vec.x;
                this.m13 += vec.y;
                this.m14 += vec.z;
                return this;
              };

              _proto.scale = function scale(vec) {
                var x = vec.x;
                var y = vec.y;
                var z = vec.z;
                this.m00 *= x;
                this.m01 *= x;
                this.m02 *= x;
                this.m03 *= x;
                this.m04 *= y;
                this.m05 *= y;
                this.m06 *= y;
                this.m07 *= y;
                this.m08 *= z;
                this.m09 *= z;
                this.m10 *= z;
                this.m11 *= z;
                return this;
              };

              _proto.rotate = function rotate(rad, axis) {
                var x = axis.x;
                var y = axis.y;
                var z = axis.z;
                var len = Math.sqrt(x * x + y * y + z * z);

                if (Math.abs(len) < EPSILON) {
                  return null;
                }

                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11;
                var b00 = x * x * t + c;
                var b01 = y * x * t + z * s;
                var b02 = z * x * t - y * s;
                var b10 = x * y * t - z * s;
                var b11 = y * y * t + c;
                var b12 = z * y * t + x * s;
                var b20 = x * z * t + y * s;
                var b21 = y * z * t - x * s;
                var b22 = z * z * t + c;
                this.m00 = a00 * b00 + a10 * b01 + a20 * b02;
                this.m01 = a01 * b00 + a11 * b01 + a21 * b02;
                this.m02 = a02 * b00 + a12 * b01 + a22 * b02;
                this.m03 = a03 * b00 + a13 * b01 + a23 * b02;
                this.m04 = a00 * b10 + a10 * b11 + a20 * b12;
                this.m05 = a01 * b10 + a11 * b11 + a21 * b12;
                this.m06 = a02 * b10 + a12 * b11 + a22 * b12;
                this.m07 = a03 * b10 + a13 * b11 + a23 * b12;
                this.m08 = a00 * b20 + a10 * b21 + a20 * b22;
                this.m09 = a01 * b20 + a11 * b21 + a21 * b22;
                this.m10 = a02 * b20 + a12 * b21 + a22 * b22;
                this.m11 = a03 * b20 + a13 * b21 + a23 * b22;
                return this;
              };

              _proto.getTranslation = function getTranslation(out) {
                out.x = this.m12;
                out.y = this.m13;
                out.z = this.m14;
                return out;
              };

              _proto.getScale = function getScale(out) {
                var m00 = m3_1$1.m00 = this.m00;
                var m01 = m3_1$1.m01 = this.m01;
                var m02 = m3_1$1.m02 = this.m02;
                var m04 = m3_1$1.m03 = this.m04;
                var m05 = m3_1$1.m04 = this.m05;
                var m06 = m3_1$1.m05 = this.m06;
                var m08 = m3_1$1.m06 = this.m08;
                var m09 = m3_1$1.m07 = this.m09;
                var m10 = m3_1$1.m08 = this.m10;
                out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
                out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
                out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10);

                if (Mat3.determinant(m3_1$1) < 0) {
                  out.x *= -1;
                }

                return out;
              };

              _proto.getRotation = function getRotation(out) {
                var trace = this.m00 + this.m05 + this.m10;
                var S = 0;

                if (trace > 0) {
                  S = Math.sqrt(trace + 1.0) * 2;
                  out.w = 0.25 * S;
                  out.x = (this.m06 - this.m09) / S;
                  out.y = (this.m08 - this.m02) / S;
                  out.z = (this.m01 - this.m04) / S;
                } else if (this.m00 > this.m05 && this.m00 > this.m10) {
                  S = Math.sqrt(1.0 + this.m00 - this.m05 - this.m10) * 2;
                  out.w = (this.m06 - this.m09) / S;
                  out.x = 0.25 * S;
                  out.y = (this.m01 + this.m04) / S;
                  out.z = (this.m08 + this.m02) / S;
                } else if (this.m05 > this.m10) {
                  S = Math.sqrt(1.0 + this.m05 - this.m00 - this.m10) * 2;
                  out.w = (this.m08 - this.m02) / S;
                  out.x = (this.m01 + this.m04) / S;
                  out.y = 0.25 * S;
                  out.z = (this.m06 + this.m09) / S;
                } else {
                  S = Math.sqrt(1.0 + this.m10 - this.m00 - this.m05) * 2;
                  out.w = (this.m01 - this.m04) / S;
                  out.x = (this.m08 + this.m02) / S;
                  out.y = (this.m06 + this.m09) / S;
                  out.z = 0.25 * S;
                }

                return out;
              };

              _proto.fromRTS = function fromRTS(q, v, s) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = s.x;
                var sy = s.y;
                var sz = s.z;
                this.m00 = (1 - (yy + zz)) * sx;
                this.m01 = (xy + wz) * sx;
                this.m02 = (xz - wy) * sx;
                this.m03 = 0;
                this.m04 = (xy - wz) * sy;
                this.m05 = (1 - (xx + zz)) * sy;
                this.m06 = (yz + wx) * sy;
                this.m07 = 0;
                this.m08 = (xz + wy) * sz;
                this.m09 = (yz - wx) * sz;
                this.m10 = (1 - (xx + yy)) * sz;
                this.m11 = 0;
                this.m12 = v.x;
                this.m13 = v.y;
                this.m14 = v.z;
                this.m15 = 1;
                return this;
              };

              _proto.fromQuat = function fromQuat(q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                this.m00 = 1 - yy - zz;
                this.m01 = yx + wz;
                this.m02 = zx - wy;
                this.m03 = 0;
                this.m04 = yx - wz;
                this.m05 = 1 - xx - zz;
                this.m06 = zy + wx;
                this.m07 = 0;
                this.m08 = zx + wy;
                this.m09 = zy - wx;
                this.m10 = 1 - xx - yy;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 1;
                return this;
              };

              return Mat4;
            }(ValueType));
            Mat4.IDENTITY = Object.freeze(new Mat4());
            var v3_1$3 = new Vec3();
            var m3_1$1 = new Mat3();
            CCClass.fastDefine('cc.Mat4', Mat4, {
              m00: 1,
              m01: 0,
              m02: 0,
              m03: 0,
              m04: 0,
              m05: 1,
              m06: 0,
              m07: 0,
              m08: 0,
              m09: 0,
              m10: 1,
              m11: 0,
              m12: 0,
              m13: 0,
              m14: 0,
              m15: 1
            });
            legacyCC.Mat4 = Mat4;
            function mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
              return new Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            }
            legacyCC.mat4 = mat4;

            var Vec2 = exports('cv', function (_ValueType) {
              _inheritsLoose(Vec2, _ValueType);

              Vec2.clone = function clone(a) {
                return new Vec2(a.x, a.y);
              };

              Vec2.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                return out;
              };

              Vec2.set = function set(out, x, y) {
                out.x = x;
                out.y = y;
                return out;
              };

              Vec2.add = function add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                return out;
              };

              Vec2.subtract = function subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                return out;
              };

              Vec2.multiply = function multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                return out;
              };

              Vec2.divide = function divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                return out;
              };

              Vec2.ceil = function ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                return out;
              };

              Vec2.floor = function floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                return out;
              };

              Vec2.min = function min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                return out;
              };

              Vec2.max = function max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                return out;
              };

              Vec2.round = function round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                return out;
              };

              Vec2.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                return out;
              };

              Vec2.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                return out;
              };

              Vec2.distance = function distance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                return Math.sqrt(x * x + y * y);
              };

              Vec2.squaredDistance = function squaredDistance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                return x * x + y * y;
              };

              Vec2.len = function len(a) {
                var x = a.x;
                var y = a.y;
                return Math.sqrt(x * x + y * y);
              };

              Vec2.lengthSqr = function lengthSqr(a) {
                var x = a.x;
                var y = a.y;
                return x * x + y * y;
              };

              Vec2.negate = function negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                return out;
              };

              Vec2.inverse = function inverse(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                return out;
              };

              Vec2.inverseSafe = function inverseSafe(out, a) {
                var x = a.x;
                var y = a.y;

                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }

                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }

                return out;
              };

              Vec2.normalize = function normalize(out, a) {
                var x = a.x;
                var y = a.y;
                var len = x * x + y * y;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                }

                return out;
              };

              Vec2.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y;
              };

              Vec2.cross = function cross(out, a, b) {
                out.x = out.y = 0;
                out.z = a.x * b.y - a.y * b.x;
                return out;
              };

              Vec2.lerp = function lerp(out, a, b, t) {
                var x = a.x;
                var y = a.y;
                out.x = x + t * (b.x - x);
                out.y = y + t * (b.y - y);
                return out;
              };

              Vec2.random = function random$1(out, scale) {
                scale = scale || 1.0;
                var r = random() * 2.0 * Math.PI;
                out.x = Math.cos(r) * scale;
                out.y = Math.sin(r) * scale;
                return out;
              };

              Vec2.transformMat3 = function transformMat3(out, a, m) {
                var x = a.x;
                var y = a.y;
                out.x = m.m00 * x + m.m03 * y + m.m06;
                out.y = m.m01 * x + m.m04 * y + m.m07;
                return out;
              };

              Vec2.transformMat4 = function transformMat4(out, a, m) {
                var x = a.x;
                var y = a.y;
                out.x = m.m00 * x + m.m04 * y + m.m12;
                out.y = m.m01 * x + m.m05 * y + m.m13;
                return out;
              };

              Vec2.str = function str(a) {
                return "Vec2(" + a.x + ", " + a.y + ")";
              };

              Vec2.toArray = function toArray(out, v, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                return out;
              };

              Vec2.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                return out;
              };

              Vec2.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y;
              };

              Vec2.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y));
              };

              Vec2.angle = function angle(a, b) {
                Vec2.normalize(v2_1, a);
                Vec2.normalize(v2_2, b);
                var cosine = Vec2.dot(v2_1, v2_2);

                if (cosine > 1.0) {
                  return 0;
                }

                if (cosine < -1.0) {
                  return Math.PI;
                }

                return Math.acos(cosine);
              };

              function Vec2(x, y) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                }

                return _this;
              }

              var _proto = Vec2.prototype;

              _proto.clone = function clone() {
                return new Vec2(this.x, this.y);
              };

              _proto.set = function set(x, y) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                }

                return this;
              };

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y));
              };

              _proto.equals2f = function equals2f(x, y, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y));
              };

              _proto.strictEquals = function strictEquals(other) {
                return other && this.x === other.x && this.y === other.y;
              };

              _proto.strictEquals2f = function strictEquals2f(x, y) {
                return this.x === x && this.y === y;
              };

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ")";
              };

              _proto.lerp = function lerp(to, ratio) {
                var x = this.x;
                var y = this.y;
                this.x = x + ratio * (to.x - x);
                this.y = y + ratio * (to.y - y);
                return this;
              };

              _proto.clampf = function clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                return this;
              };

              _proto.add = function add(other) {
                this.x += other.x;
                this.y += other.y;
                return this;
              };

              _proto.add2f = function add2f(x, y) {
                this.x += x;
                this.y += y;
                return this;
              };

              _proto.subtract = function subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                return this;
              };

              _proto.subtract2f = function subtract2f(x, y) {
                this.x -= x;
                this.y -= y;
                return this;
              };

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec2.multiply for vector * vector operation');
                }

                this.x *= scalar;
                this.y *= scalar;
                return this;
              };

              _proto.multiply = function multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec2.scale for vector * scalar operation');
                }

                this.x *= other.x;
                this.y *= other.y;
                return this;
              };

              _proto.multiply2f = function multiply2f(x, y) {
                this.x *= x;
                this.y *= y;
                return this;
              };

              _proto.divide = function divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                return this;
              };

              _proto.divide2f = function divide2f(x, y) {
                this.x /= x;
                this.y /= y;
                return this;
              };

              _proto.negative = function negative() {
                this.x = -this.x;
                this.y = -this.y;
                return this;
              };

              _proto.dot = function dot(other) {
                return this.x * other.x + this.y * other.y;
              };

              _proto.cross = function cross(other) {
                return this.x * other.y - this.y * other.x;
              };

              _proto.length = function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
              };

              _proto.lengthSqr = function lengthSqr() {
                return this.x * this.x + this.y * this.y;
              };

              _proto.normalize = function normalize() {
                var x = this.x;
                var y = this.y;
                var len = x * x + y * y;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x *= len;
                  this.y *= len;
                }

                return this;
              };

              _proto.angle = function angle(other) {
                var magSqr1 = this.lengthSqr();
                var magSqr2 = other.lengthSqr();

                if (magSqr1 === 0 || magSqr2 === 0) {
                  console.warn('Can\'t get angle between zero vector');
                  return 0.0;
                }

                var dot = this.dot(other);
                var theta = dot / Math.sqrt(magSqr1 * magSqr2);
                theta = clamp(theta, -1.0, 1.0);
                return Math.acos(theta);
              };

              _proto.signAngle = function signAngle(other) {
                var angle = this.angle(other);
                return this.cross(other) < 0 ? -angle : angle;
              };

              _proto.rotate = function rotate(radians) {
                var x = this.x;
                var y = this.y;
                var sin = Math.sin(radians);
                var cos = Math.cos(radians);
                this.x = cos * x - sin * y;
                this.y = sin * x + cos * y;
                return this;
              };

              _proto.project = function project(other) {
                var scalar = this.dot(other) / other.dot(other);
                this.x = other.x * scalar;
                this.y = other.y * scalar;
                return this;
              };

              _proto.transformMat4 = function transformMat4(matrix) {
                var x = this.x;
                var y = this.y;
                this.x = matrix.m00 * x + matrix.m04 * y + matrix.m12;
                this.y = matrix.m01 * x + matrix.m05 * y + matrix.m13;
                return this;
              };

              return Vec2;
            }(ValueType));
            Vec2.ZERO = Object.freeze(new Vec2(0, 0));
            Vec2.ONE = Object.freeze(new Vec2(1, 1));
            Vec2.NEG_ONE = Object.freeze(new Vec2(-1, -1));
            Vec2.UNIT_X = Object.freeze(new Vec2(1, 0));
            Vec2.UNIT_Y = Object.freeze(new Vec2(0, 1));
            var v2_1 = new Vec2();
            var v2_2 = new Vec2();
            CCClass.fastDefine('cc.Vec2', Vec2, {
              x: 0,
              y: 0
            });
            legacyCC.Vec2 = Vec2;
            function v2(x, y) {
              return new Vec2(x, y);
            }
            legacyCC.v2 = v2;

            var Vec4 = exports('cz', function (_ValueType) {
              _inheritsLoose(Vec4, _ValueType);

              Vec4.clone = function clone(a) {
                return new Vec4(a.x, a.y, a.z, a.w);
              };

              Vec4.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = a.w;
                return out;
              };

              Vec4.set = function set(out, x, y, z, w) {
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              };

              Vec4.add = function add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                out.z = a.z + b.z;
                out.w = a.w + b.w;
                return out;
              };

              Vec4.subtract = function subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                out.z = a.z - b.z;
                out.w = a.w - b.w;
                return out;
              };

              Vec4.multiply = function multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                out.z = a.z * b.z;
                out.w = a.w * b.w;
                return out;
              };

              Vec4.divide = function divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                out.z = a.z / b.z;
                out.w = a.w / b.w;
                return out;
              };

              Vec4.ceil = function ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                out.z = Math.ceil(a.z);
                out.w = Math.ceil(a.w);
                return out;
              };

              Vec4.floor = function floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                out.z = Math.floor(a.z);
                out.w = Math.floor(a.w);
                return out;
              };

              Vec4.min = function min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                out.z = Math.min(a.z, b.z);
                out.w = Math.min(a.w, b.w);
                return out;
              };

              Vec4.max = function max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                out.z = Math.max(a.z, b.z);
                out.w = Math.max(a.w, b.w);
                return out;
              };

              Vec4.round = function round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                out.z = Math.round(a.z);
                out.w = Math.round(a.w);
                return out;
              };

              Vec4.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                out.w = a.w * b;
                return out;
              };

              Vec4.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                out.w = a.w + b.w * scale;
                return out;
              };

              Vec4.distance = function distance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                var w = b.w - a.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              };

              Vec4.squaredDistance = function squaredDistance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                var w = b.w - a.w;
                return x * x + y * y + z * z + w * w;
              };

              Vec4.len = function len(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              };

              Vec4.lengthSqr = function lengthSqr(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                return x * x + y * y + z * z + w * w;
              };

              Vec4.negate = function negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                out.w = -a.w;
                return out;
              };

              Vec4.inverse = function inverse(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                out.z = 1.0 / a.z;
                out.w = 1.0 / a.w;
                return out;
              };

              Vec4.inverseSafe = function inverseSafe(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;

                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }

                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }

                if (Math.abs(z) < EPSILON) {
                  out.z = 0;
                } else {
                  out.z = 1.0 / z;
                }

                if (Math.abs(w) < EPSILON) {
                  out.w = 0;
                } else {
                  out.w = 1.0 / w;
                }

                return out;
              };

              Vec4.normalize = function normalize(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                var len = x * x + y * y + z * z + w * w;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                  out.z = z * len;
                  out.w = w * len;
                }

                return out;
              };

              Vec4.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
              };

              Vec4.lerp = function lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                out.w = a.w + t * (b.w - a.w);
                return out;
              };

              Vec4.random = function random$1(out, scale) {
                scale = scale || 1.0;
                var phi = random() * 2.0 * Math.PI;
                var cosTheta = random() * 2 - 1;
                var sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
                out.x = sinTheta * Math.cos(phi) * scale;
                out.y = sinTheta * Math.sin(phi) * scale;
                out.z = cosTheta * scale;
                out.w = 0;
                return out;
              };

              Vec4.transformMat4 = function transformMat4(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
                out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
                out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
                out.w = m.m03 * x + m.m07 * y + m.m11 * z + m.m15 * w;
                return out;
              };

              Vec4.transformAffine = function transformAffine(out, v, m) {
                var x = v.x;
                var y = v.y;
                var z = v.z;
                var w = v.w;
                out.x = m.m00 * x + m.m01 * y + m.m02 * z + m.m03 * w;
                out.y = m.m04 * x + m.m05 * y + m.m06 * z + m.m07 * w;
                out.x = m.m08 * x + m.m09 * y + m.m10 * z + m.m11 * w;
                out.w = v.w;
                return out;
              };

              Vec4.transformQuat = function transformQuat(out, a, q) {
                var x = a.x,
                    y = a.y,
                    z = a.z;
                var _x = q.x;
                var _y = q.y;
                var _z = q.z;
                var _w = q.w;
                var ix = _w * x + _y * z - _z * y;
                var iy = _w * y + _z * x - _x * z;
                var iz = _w * z + _x * y - _y * x;
                var iw = -_x * x - _y * y - _z * z;
                out.x = ix * _w + iw * -_x + iy * -_z - iz * -_y;
                out.y = iy * _w + iw * -_y + iz * -_x - ix * -_z;
                out.z = iz * _w + iw * -_z + ix * -_y - iy * -_x;
                out.w = a.w;
                return out;
              };

              Vec4.toArray = function toArray(out, v, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                out[ofs + 2] = v.z;
                out[ofs + 3] = v.w;
                return out;
              };

              Vec4.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                out.w = arr[ofs + 3];
                return out;
              };

              Vec4.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
              };

              Vec4.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
              };

              function Vec4(x, y, z, w) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                  _this.z = x.z;
                  _this.w = x.w;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.z = z || 0;
                  _this.w = w || 0;
                }

                return _this;
              }

              var _proto = Vec4.prototype;

              _proto.clone = function clone() {
                return new Vec4(this.x, this.y, this.z, this.w);
              };

              _proto.set = function set(x, y, z, w) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w || 0;
                }

                return this;
              };

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
              };

              _proto.equals4f = function equals4f(x, y, z, w, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z)) && Math.abs(this.w - w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(w));
              };

              _proto.strictEquals = function strictEquals(other) {
                return this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
              };

              _proto.strictEquals4f = function strictEquals4f(x, y, z, w) {
                return this.x === x && this.y === y && this.z === z && this.w === w;
              };

              _proto.lerp = function lerp(to, ratio) {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                this.x = x + ratio * (to.x - x);
                this.y = y + ratio * (to.y - y);
                this.z = z + ratio * (to.z - z);
                this.w = w + ratio * (to.w - w);
                return this;
              };

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.z.toFixed(2) + ", " + this.w.toFixed(2) + ")";
              };

              _proto.clampf = function clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
                this.w = clamp(this.w, minInclusive.w, maxInclusive.w);
                return this;
              };

              _proto.add = function add(other) {
                this.x += other.x;
                this.y += other.y;
                this.z += other.z;
                this.w += other.w;
                return this;
              };

              _proto.add4f = function add4f(x, y, z, w) {
                this.x += x;
                this.y += y;
                this.z += z;
                this.w += w;
                return this;
              };

              _proto.subtract = function subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                this.z -= other.z;
                this.w -= other.w;
                return this;
              };

              _proto.subtract4f = function subtract4f(x, y, z, w) {
                this.x -= x;
                this.y -= y;
                this.z -= z;
                this.w -= w;
                return this;
              };

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec4.multiply for vector * vector operation');
                }

                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
                this.w *= scalar;
                return this;
              };

              _proto.multiply = function multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec4.scale for vector * scalar operation');
                }

                this.x *= other.x;
                this.y *= other.y;
                this.z *= other.z;
                this.w *= other.w;
                return this;
              };

              _proto.multiply4f = function multiply4f(x, y, z, w) {
                this.x *= x;
                this.y *= y;
                this.z *= z;
                this.w *= w;
                return this;
              };

              _proto.divide = function divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                this.z /= other.z;
                this.w /= other.w;
                return this;
              };

              _proto.divide4f = function divide4f(x, y, z, w) {
                this.x /= x;
                this.y /= y;
                this.z /= z;
                this.w /= w;
                return this;
              };

              _proto.negative = function negative() {
                this.x = -this.x;
                this.y = -this.y;
                this.z = -this.z;
                this.w = -this.w;
                return this;
              };

              _proto.dot = function dot(vector) {
                return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
              };

              _proto.cross = function cross(vector) {
                var ax = this.x,
                    ay = this.y,
                    az = this.z;
                var bx = vector.x,
                    by = vector.y,
                    bz = vector.z;
                this.x = ay * bz - az * by;
                this.y = az * bx - ax * bz;
                this.z = ax * by - ay * bx;
                return this;
              };

              _proto.length = function length() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              };

              _proto.lengthSqr = function lengthSqr() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                return x * x + y * y + z * z + w * w;
              };

              _proto.normalize = function normalize() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                var len = x * x + y * y + z * z + w * w;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x = x * len;
                  this.y = y * len;
                  this.z = z * len;
                  this.w = w * len;
                }

                return this;
              };

              _proto.transformMat4 = function transformMat4(matrix) {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                this.x = matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12 * w;
                this.y = matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13 * w;
                this.z = matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14 * w;
                this.w = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15 * w;
                return this;
              };

              return Vec4;
            }(ValueType));
            Vec4.ZERO = Object.freeze(new Vec4(0, 0, 0, 0));
            Vec4.ONE = Object.freeze(new Vec4(1, 1, 1, 1));
            Vec4.NEG_ONE = Object.freeze(new Vec4(-1, -1, -1, -1));
            CCClass.fastDefine('cc.Vec4', Vec4, {
              x: 0,
              y: 0,
              z: 0,
              w: 0
            });
            legacyCC.Vec4 = Vec4;
            function v4(x, y, z, w) {
              return new Vec4(x, y, z, w);
            }
            legacyCC.v4 = v4;

            replaceProperty(Vec2, 'Vec2', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec2,
              targetName: 'Vec2'
            }]);
            replaceProperty(Vec2.prototype, 'Vec2', [{
              name: 'mag',
              newName: 'length',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }]);
            replaceProperty(Vec3, 'Vec3', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec3,
              targetName: 'Vec3'
            }]);
            replaceProperty(Vec3.prototype, 'Vec3', [{
              name: 'mag',
              newName: 'length',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }]);
            replaceProperty(Vec4, 'Vec4', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec4,
              targetName: 'Vec4'
            }]);
            replaceProperty(Vec4.prototype, 'Vec4', [{
              name: 'mag',
              newName: 'length',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }]);
            replaceProperty(Quat, 'Quat', [{
              name: 'mag',
              newName: 'len',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Quat,
              targetName: 'Quat'
            }]);
            replaceProperty(Quat.prototype, 'Quat', [{
              name: 'scale',
              newName: 'multiplyScalar',
              target: Quat.prototype,
              targetName: 'Quat'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Quat.prototype,
              targetName: 'Quat'
            }]);
            replaceProperty(Color, 'Color', [{
              name: 'sub',
              newName: 'subtract',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'div',
              newName: 'divide',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'fromHex',
              newName: 'fromHEX',
              customFunction: function customFunction() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                var arg1 = args[1].toString(16);
                return legacyCC.Color.fromHEX(args[0], arg1);
              }
            }]);
            replaceProperty(Mat3, 'Mat3', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'transfrom',
              newName: 'transform',
              target: Mat3,
              targetName: 'Mat3'
            }]);
            replaceProperty(Mat3.prototype, 'Mat3', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'mulScalar',
              newName: 'multiplyScalar',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }]);
            replaceProperty(Mat4, 'Mat4', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat4,
              targetName: 'Mat4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat4,
              targetName: 'Mat4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat4,
              targetName: 'Mat4'
            }]);
            replaceProperty(Mat4.prototype, 'Mat4', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'mulScalar',
              newName: 'multiplyScalar',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }]);

            var AffineTransform = exports('cG', function () {
              AffineTransform.identity = function identity() {
                return new AffineTransform();
              };

              AffineTransform.clone = function clone(affineTransform) {
                return new AffineTransform(affineTransform.a, affineTransform.b, affineTransform.c, affineTransform.d, affineTransform.tx, affineTransform.ty);
              };

              AffineTransform.concat = function concat(out, t1, t2) {
                var a = t1.a;
                var b = t1.b;
                var c = t1.c;
                var d = t1.d;
                var tx = t1.tx;
                var ty = t1.ty;
                out.a = a * t2.a + b * t2.c;
                out.b = a * t2.b + b * t2.d;
                out.c = c * t2.a + d * t2.c;
                out.d = c * t2.b + d * t2.d;
                out.tx = tx * t2.a + ty * t2.c + t2.tx;
                out.ty = tx * t2.b + ty * t2.d + t2.ty;
              };

              AffineTransform.invert = function invert(out, t) {
                var determinant = 1 / (t.a * t.d - t.b * t.c);
                out.a = determinant * t.d;
                out.b = -determinant * t.b;
                out.c = -determinant * t.c;
                out.d = determinant * t.a;
                out.tx = determinant * (t.c * t.ty - t.d * t.tx);
                out.ty = determinant * (t.b * t.tx - t.a * t.ty);
              };

              AffineTransform.fromMat4 = function fromMat4(out, mat) {
                out.a = mat.m00;
                out.b = mat.m01;
                out.c = mat.m04;
                out.d = mat.m05;
                out.tx = mat.m12;
                out.ty = mat.m13;
              };

              AffineTransform.transformVec2 = function transformVec2(out, point, transOrY, t) {
                var x;
                var y;

                if (t === undefined) {
                  t = transOrY;
                  x = point.x;
                  y = point.y;
                } else {
                  x = point;
                  y = transOrY;
                }

                out.x = t.a * x + t.c * y + t.tx;
                out.y = t.b * x + t.d * y + t.ty;
              };

              AffineTransform.transformSize = function transformSize(out, size, t) {
                out.width = t.a * size.width + t.c * size.height;
                out.height = t.b * size.width + t.d * size.height;
              };

              AffineTransform.transformRect = function transformRect(out, rect, t) {
                var or = rect.x + rect.width;
                var ot = rect.y + rect.height;
                var lbx = t.a * rect.x + t.c * rect.y + t.tx;
                var lby = t.b * rect.x + t.d * rect.y + t.ty;
                var rbx = t.a * or + t.c * rect.y + t.tx;
                var rby = t.b * or + t.d * rect.y + t.ty;
                var ltx = t.a * rect.x + t.c * ot + t.tx;
                var lty = t.b * rect.x + t.d * ot + t.ty;
                var rtx = t.a * or + t.c * ot + t.tx;
                var rty = t.b * or + t.d * ot + t.ty;
                var minX = Math.min(lbx, rbx, ltx, rtx);
                var maxX = Math.max(lbx, rbx, ltx, rtx);
                var minY = Math.min(lby, rby, lty, rty);
                var maxY = Math.max(lby, rby, lty, rty);
                out.x = minX;
                out.y = minY;
                out.width = maxX - minX;
                out.height = maxY - minY;
              };

              AffineTransform.transformObb = function transformObb(out_bl, out_tl, out_tr, out_br, rect, anAffineTransform) {
                var tx = anAffineTransform.a * rect.x + anAffineTransform.c * rect.y + anAffineTransform.tx;
                var ty = anAffineTransform.b * rect.x + anAffineTransform.d * rect.y + anAffineTransform.ty;
                var xa = anAffineTransform.a * rect.width;
                var xb = anAffineTransform.b * rect.width;
                var yc = anAffineTransform.c * rect.height;
                var yd = anAffineTransform.d * rect.height;
                out_tl.x = tx;
                out_tl.y = ty;
                out_tr.x = xa + tx;
                out_tr.y = xb + ty;
                out_bl.x = yc + tx;
                out_bl.y = yd + ty;
                out_br.x = xa + yc + tx;
                out_br.y = xb + yd + ty;
              };

              function AffineTransform(a, b, c, d, tx, ty) {
                if (a === void 0) {
                  a = 1;
                }

                if (b === void 0) {
                  b = 0;
                }

                if (c === void 0) {
                  c = 0;
                }

                if (d === void 0) {
                  d = 1;
                }

                if (tx === void 0) {
                  tx = 0;
                }

                if (ty === void 0) {
                  ty = 0;
                }

                this.a = a;
                this.b = b;
                this.c = c;
                this.d = d;
                this.tx = tx;
                this.ty = ty;
              }

              return AffineTransform;
            }());
            legacyCC.AffineTransform = AffineTransform;

            var Size = exports('cH', function (_ValueType) {
              _inheritsLoose(Size, _ValueType);

              Size.lerp = function lerp(out, from, to, ratio) {
                out.width = from.width + (to.width - from.width) * ratio;
                out.height = from.height + (to.height - from.height) * ratio;
                return out;
              };

              _createClass(Size, [{
                key: "x",
                set: function set(val) {
                  this.width = val;
                },
                get: function get() {
                  return this.width;
                }
              }, {
                key: "y",
                set: function set(val) {
                  this.height = val;
                },
                get: function get() {
                  return this.height;
                }
              }]);

              function Size(width, height) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (width && typeof width === 'object') {
                  _this.width = width.width;
                  _this.height = width.height;
                } else {
                  _this.width = width || 0;
                  _this.height = height || 0;
                }

                return _this;
              }

              var _proto = Size.prototype;

              _proto.clone = function clone() {
                return new Size(this.width, this.height);
              };

              _proto.set = function set(width, height) {
                if (width && typeof width === 'object') {
                  this.height = width.height;
                  this.width = width.width;
                } else {
                  this.width = width || 0;
                  this.height = height || 0;
                }

                return this;
              };

              _proto.equals = function equals(other) {
                return this.width === other.width && this.height === other.height;
              };

              _proto.lerp = function lerp(to, ratio) {
                this.width += (to.width - this.width) * ratio;
                this.height += (to.height - this.height) * ratio;
                return this;
              };

              _proto.toString = function toString() {
                return "(" + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
              };

              return Size;
            }(ValueType));
            Size.ZERO = Object.freeze(new Size(0, 0));
            Size.ONE = Object.freeze(new Size(1, 1));
            CCClass.fastDefine('cc.Size', Size, {
              width: 0,
              height: 0
            });
            function size(width, height) {
              if (width === void 0) {
                width = 0;
              }

              if (height === void 0) {
                height = 0;
              }

              return new Size(width, height);
            }
            legacyCC.size = size;
            legacyCC.Size = Size;

            var Rect = exports('cJ', function (_ValueType) {
              _inheritsLoose(Rect, _ValueType);

              Rect.fromMinMax = function fromMinMax(out, v1, v2) {
                var minX = Math.min(v1.x, v2.x);
                var minY = Math.min(v1.y, v2.y);
                var maxX = Math.max(v1.x, v2.x);
                var maxY = Math.max(v1.y, v2.y);
                out.x = minX;
                out.y = minY;
                out.width = maxX - minX;
                out.height = maxY - minY;
                return out;
              };

              Rect.lerp = function lerp(out, from, to, ratio) {
                var x = from.x;
                var y = from.y;
                var w = from.width;
                var h = from.height;
                out.x = x + (to.x - x) * ratio;
                out.y = y + (to.y - y) * ratio;
                out.width = w + (to.width - w) * ratio;
                out.height = h + (to.height - h) * ratio;
                return out;
              };

              Rect.intersection = function intersection(out, one, other) {
                var axMin = one.x;
                var ayMin = one.y;
                var axMax = one.x + one.width;
                var ayMax = one.y + one.height;
                var bxMin = other.x;
                var byMin = other.y;
                var bxMax = other.x + other.width;
                var byMax = other.y + other.height;
                out.x = Math.max(axMin, bxMin);
                out.y = Math.max(ayMin, byMin);
                out.width = Math.min(axMax, bxMax) - out.x;
                out.height = Math.min(ayMax, byMax) - out.y;
                return out;
              };

              Rect.union = function union(out, one, other) {
                var x = one.x;
                var y = one.y;
                var w = one.width;
                var h = one.height;
                var bx = other.x;
                var by = other.y;
                var bw = other.width;
                var bh = other.height;
                out.x = Math.min(x, bx);
                out.y = Math.min(y, by);
                out.width = Math.max(x + w, bx + bw) - out.x;
                out.height = Math.max(y + h, by + bh) - out.y;
                return out;
              };

              _createClass(Rect, [{
                key: "xMin",
                get: function get() {
                  return this.x;
                },
                set: function set(value) {
                  this.width += this.x - value;
                  this.x = value;
                }
              }, {
                key: "yMin",
                get: function get() {
                  return this.y;
                },
                set: function set(value) {
                  this.height += this.y - value;
                  this.y = value;
                }
              }, {
                key: "xMax",
                get: function get() {
                  return this.x + this.width;
                },
                set: function set(value) {
                  this.width = value - this.x;
                }
              }, {
                key: "yMax",
                get: function get() {
                  return this.y + this.height;
                },
                set: function set(value) {
                  this.height = value - this.y;
                }
              }, {
                key: "center",
                get: function get() {
                  return new Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
                },
                set: function set(value) {
                  this.x = value.x - this.width * 0.5;
                  this.y = value.y - this.height * 0.5;
                }
              }, {
                key: "origin",
                get: function get() {
                  return new Vec2(this.x, this.y);
                },
                set: function set(value) {
                  this.x = value.x;
                  this.y = value.y;
                }
              }, {
                key: "size",
                get: function get() {
                  return new Size(this.width, this.height);
                },
                set: function set(value) {
                  this.width = value.width;
                  this.height = value.height;
                }
              }, {
                key: "z",
                set: function set(val) {
                  this.width = val;
                },
                get: function get() {
                  return this.width;
                }
              }, {
                key: "w",
                set: function set(val) {
                  this.height = val;
                },
                get: function get() {
                  return this.height;
                }
              }]);

              function Rect(x, y, width, height) {
                var _this;

                _this = _ValueType.call(this) || this;
                _this.T = void 0;

                if (x && typeof x === 'object') {
                  _this.y = x.y;
                  _this.width = x.width;
                  _this.height = x.height;
                  _this.x = x.x;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.width = width || 0;
                  _this.height = height || 0;
                }

                return _this;
              }

              var _proto = Rect.prototype;

              _proto.clone = function clone() {
                return new Rect(this.x, this.y, this.width, this.height);
              };

              _proto.set = function set(x, y, width, height) {
                if (x && typeof x === 'object') {
                  this.y = x.y;
                  this.width = x.width;
                  this.height = x.height;
                  this.x = x.x;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.width = width || 0;
                  this.height = height || 0;
                }

                return this;
              };

              _proto.equals = function equals(other) {
                return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
              };

              _proto.lerp = function lerp(to, ratio) {
                var x = this.x;
                var y = this.y;
                var w = this.width;
                var h = this.height;
                this.x = x + (to.x - x) * ratio;
                this.y = y + (to.y - y) * ratio;
                this.width = w + (to.width - w) * ratio;
                this.height = h + (to.height - h) * ratio;
                return this;
              };

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
              };

              _proto.intersects = function intersects(other) {
                var maxax = this.x + this.width;
                var maxay = this.y + this.height;
                var maxbx = other.x + other.width;
                var maxby = other.y + other.height;
                return !(maxax < other.x || maxbx < this.x || maxay < other.y || maxby < this.y);
              };

              _proto.contains = function contains(point) {
                return this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y;
              };

              _proto.containsRect = function containsRect(other) {
                return this.x <= other.x && this.x + this.width >= other.x + other.width && this.y <= other.y && this.y + this.height >= other.y + other.height;
              };

              _proto.transformMat4 = function transformMat4(mat) {
                var ol = this.x;
                var ob = this.y;
                var or = ol + this.width;
                var ot = ob + this.height;
                var lbx = mat.m00 * ol + mat.m04 * ob + mat.m12;
                var lby = mat.m01 * ol + mat.m05 * ob + mat.m13;
                var rbx = mat.m00 * or + mat.m04 * ob + mat.m12;
                var rby = mat.m01 * or + mat.m05 * ob + mat.m13;
                var ltx = mat.m00 * ol + mat.m04 * ot + mat.m12;
                var lty = mat.m01 * ol + mat.m05 * ot + mat.m13;
                var rtx = mat.m00 * or + mat.m04 * ot + mat.m12;
                var rty = mat.m01 * or + mat.m05 * ot + mat.m13;
                var minX = Math.min(lbx, rbx, ltx, rtx);
                var maxX = Math.max(lbx, rbx, ltx, rtx);
                var minY = Math.min(lby, rby, lty, rty);
                var maxY = Math.max(lby, rby, lty, rty);
                this.x = minX;
                this.y = minY;
                this.width = maxX - minX;
                this.height = maxY - minY;
                return this;
              };

              _proto.transformMat4ToPoints = function transformMat4ToPoints(mat, out_lb, out_lt, out_rt, out_rb) {
                var ol = this.x;
                var ob = this.y;
                var or = ol + this.width;
                var ot = ob + this.height;
                out_lb.x = mat.m00 * ol + mat.m04 * ob + mat.m12;
                out_lb.y = mat.m01 * ol + mat.m05 * ob + mat.m13;
                out_rb.x = mat.m00 * or + mat.m04 * ob + mat.m12;
                out_rb.y = mat.m01 * or + mat.m05 * ob + mat.m13;
                out_lt.x = mat.m00 * ol + mat.m04 * ot + mat.m12;
                out_lt.y = mat.m01 * ol + mat.m05 * ot + mat.m13;
                out_rt.x = mat.m00 * or + mat.m04 * ot + mat.m12;
                out_rt.y = mat.m01 * or + mat.m05 * ot + mat.m13;
              };

              return Rect;
            }(ValueType));
            CCClass.fastDefine('cc.Rect', Rect, {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            });
            legacyCC.Rect = Rect;
            function rect(x, y, width, height) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (width === void 0) {
                width = 0;
              }

              if (height === void 0) {
                height = 0;
              }

              return new Rect(x, y, width, height);
            }
            legacyCC.rect = rect;

            var NativeBufferPool = jsb.NativeBufferPool;
            var NativeObjectPool = jsb.NativeObjectPool;
            var NativeBufferAllocator = jsb.NativeBufferAllocator;

            var _passViewDataType, _subModelViewDataType, _modelViewDataType, _batchView2DDataType, _aabbViewDataType, _sceneViewDataType, _cameraViewDataType, _nodeViewDataType, _rootViewDataType, _renderWindowDataType, _frustumViewDataType, _ambientViewDataType, _skyboxDataType, _fogViewDataType, _shadowsViewDataType, _lightViewDataType, _sphereViewDataType, _flatBufferViewDataTy, _subMeshViewDataType, _rasterizerStateViewD, _depthStencilStateVie, _blendTargetViewDataT, _blendStateViewDataTy;
            var BufferDataType;

            (function (BufferDataType) {
              BufferDataType[BufferDataType["UINT32"] = 0] = "UINT32";
              BufferDataType[BufferDataType["FLOAT32"] = 1] = "FLOAT32";
              BufferDataType[BufferDataType["NEVER"] = 2] = "NEVER";
            })(BufferDataType || (BufferDataType = {}));

            var BufferPool = function () {
              function BufferPool(poolType, dataType, enumType, entryBits) {
                if (entryBits === void 0) {
                  entryBits = 8;
                }

                this._dataType = void 0;
                this._elementCount = void 0;
                this._entryBits = void 0;
                this._stride = void 0;
                this._entriesPerChunk = void 0;
                this._entryMask = void 0;
                this._chunkMask = void 0;
                this._poolFlag = void 0;
                this._arrayBuffers = [];
                this._freelists = [];
                this._uint32BufferViews = [];
                this._float32BufferViews = [];
                this._hasUint32 = false;
                this._hasFloat32 = false;
                this._nativePool = void 0;
                this._elementCount = enumType.COUNT;
                this._entryBits = entryBits;
                this._dataType = dataType;
                var bytesPerElement = 4;
                this._stride = bytesPerElement * this._elementCount;
                this._entriesPerChunk = 1 << entryBits;
                this._entryMask = this._entriesPerChunk - 1;
                this._poolFlag = 1 << 30;
                this._chunkMask = ~(this._entryMask | this._poolFlag);
                this._nativePool = new NativeBufferPool(poolType, entryBits, this._stride);
                var type = BufferDataType.NEVER;
                var hasFloat32 = false;
                var hasUint32 = false;

                for (var e in dataType) {
                  hasFloat32 = this._hasFloat32;
                  hasUint32 = this._hasUint32;

                  if (hasUint32 && hasFloat32) {
                    break;
                  }

                  type = dataType[e];

                  if (!hasFloat32 && type === BufferDataType.FLOAT32) {
                    this._hasFloat32 = true;
                  } else if (!hasUint32 && type === BufferDataType.UINT32) {
                    this._hasUint32 = true;
                  }
                }
              }

              var _proto = BufferPool.prototype;

              _proto.alloc = function alloc() {
                var i = 0;

                for (; i < this._freelists.length; i++) {
                  var list = this._freelists[i];

                  if (list.length) {
                    var j = list[list.length - 1];
                    list.length--;
                    return (i << this._entryBits) + j + this._poolFlag;
                  }
                }

                var buffer = this._nativePool.allocateNewChunk();

                var float32BufferViews = [];
                var uint32BufferViews = [];
                var freelist = [];
                var hasFloat32 = this._hasFloat32;
                var hasUint32 = this._hasUint32;

                for (var _j = 0; _j < this._entriesPerChunk; _j++) {
                  if (hasFloat32) {
                    float32BufferViews.push(new Float32Array(buffer, this._stride * _j, this._elementCount));
                  }

                  if (hasUint32) {
                    uint32BufferViews.push(new Uint32Array(buffer, this._stride * _j, this._elementCount));
                  }

                  if (_j) {
                    freelist.push(_j);
                  }
                }

                this._arrayBuffers.push(buffer);

                if (hasUint32) {
                  this._uint32BufferViews.push(uint32BufferViews);
                }

                if (hasFloat32) {
                  this._float32BufferViews.push(float32BufferViews);
                }

                this._freelists.push(freelist);

                return (i << this._entryBits) + this._poolFlag;
              };

              _proto.get = function get(handle, element) {
                var chunk = (this._chunkMask & handle) >> this._entryBits;
                var entry = this._entryMask & handle;
                var bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;

                if ( (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || this._freelists[chunk].find(function (n) {
                  return n === entry;
                }))) {
                  console.warn('invalid buffer pool handle');
                  return 0;
                }

                return bufferViews[chunk][entry][element];
              };

              _proto.set = function set(handle, element, value) {
                var chunk = (this._chunkMask & handle) >> this._entryBits;
                var entry = this._entryMask & handle;
                var bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;

                if ( (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || this._freelists[chunk].find(function (n) {
                  return n === entry;
                }))) {
                  console.warn('invalid buffer pool handle');
                  return;
                }

                bufferViews[chunk][entry][element] = value;
              };

              _proto.setVec2 = function setVec2(handle, element, vec2) {

                var chunk = (this._chunkMask & handle) >> this._entryBits;
                var entry = this._entryMask & handle;
                var bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;

                if ( (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || this._freelists[chunk].find(function (n) {
                  return n === entry;
                }))) {
                  console.warn('invalid buffer pool handle');
                  return;
                }

                var index = element;
                var view = bufferViews[chunk][entry];
                view[index++] = vec2.x;
                view[index++] = vec2.y;
              };

              _proto.setVec3 = function setVec3(handle, element, vec3) {

                var chunk = (this._chunkMask & handle) >> this._entryBits;
                var entry = this._entryMask & handle;
                var bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;

                if ( (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || this._freelists[chunk].find(function (n) {
                  return n === entry;
                }))) {
                  console.warn('invalid buffer pool handle');
                  return;
                }

                var index = element;
                var view = bufferViews[chunk][entry];
                view[index++] = vec3.x;
                view[index++] = vec3.y;
                view[index] = vec3.z;
              };

              _proto.setVec4 = function setVec4(handle, element, vec4) {

                var chunk = (this._chunkMask & handle) >> this._entryBits;
                var entry = this._entryMask & handle;
                var bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;

                if ( (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || this._freelists[chunk].find(function (n) {
                  return n === entry;
                }))) {
                  console.warn('invalid buffer pool handle');
                  return;
                }

                var index = element;
                var view = bufferViews[chunk][entry];
                view[index++] = vec4.x;
                view[index++] = vec4.y;
                view[index++] = vec4.z;
                view[index] = vec4.w;
              };

              _proto.setMat4 = function setMat4(handle, element, mat4) {

                var chunk = (this._chunkMask & handle) >> this._entryBits;
                var entry = this._entryMask & handle;
                var bufferViews = this._dataType[element] === BufferDataType.UINT32 ? this._uint32BufferViews : this._float32BufferViews;

                if ( (!handle || chunk < 0 || chunk >= bufferViews.length || entry < 0 || entry >= this._entriesPerChunk || this._freelists[chunk].find(function (n) {
                  return n === entry;
                }))) {
                  console.warn('invalid buffer pool handle');
                  return;
                }

                var index = element;
                var view = bufferViews[chunk][entry];
                view[index++] = mat4.m00;
                view[index++] = mat4.m01;
                view[index++] = mat4.m02;
                view[index++] = mat4.m03;
                view[index++] = mat4.m04;
                view[index++] = mat4.m05;
                view[index++] = mat4.m06;
                view[index++] = mat4.m07;
                view[index++] = mat4.m08;
                view[index++] = mat4.m09;
                view[index++] = mat4.m10;
                view[index++] = mat4.m11;
                view[index++] = mat4.m12;
                view[index++] = mat4.m13;
                view[index++] = mat4.m14;
                view[index] = mat4.m15;
              };

              _proto.free = function free(handle) {
                var chunk = (this._chunkMask & handle) >> this._entryBits;
                var entry = this._entryMask & handle;

                if ( (!handle || chunk < 0 || chunk >= this._freelists.length || entry < 0 || entry >= this._entriesPerChunk || this._freelists[chunk].find(function (n) {
                  return n === entry;
                }))) {
                  console.warn('invalid buffer pool handle');
                  return;
                }

                var bufferViews = this._hasUint32 ? this._uint32BufferViews : this._float32BufferViews;
                bufferViews[chunk][entry].fill(0);

                this._freelists[chunk].push(entry);
              };

              return BufferPool;
            }();

            var ObjectPool = exports('bu', function () {
              function ObjectPool(poolType, ctor, dtor) {
                this._ctor = void 0;
                this._dtor = void 0;
                this._indexMask = void 0;
                this._poolFlag = void 0;
                this._array = [];
                this._freelist = [];
                this._nativePool = void 0;
                this._ctor = ctor;

                if (dtor) {
                  this._dtor = dtor;
                }

                this._poolFlag = 1 << 29;
                this._indexMask = ~this._poolFlag;
                this._nativePool = new NativeObjectPool(poolType, this._array);
              }

              var _proto2 = ObjectPool.prototype;

              _proto2.alloc = function alloc() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                var freelist = this._freelist;
                var i = -1;

                if (freelist.length) {
                  i = freelist[freelist.length - 1];
                  freelist.length--;
                  this._array[i] = this._ctor(arguments, this._array[i]);
                } else {
                  i = this._array.length;

                  var _obj = this._ctor(arguments);

                  if (!_obj) {
                    return 0;
                  }

                  this._array.push(_obj);
                }

                return i + this._poolFlag;
              };

              _proto2.get = function get(handle) {
                var index = this._indexMask & handle;

                if ( (!handle || index < 0 || index >= this._array.length || this._freelist.find(function (n) {
                  return n === index;
                }))) {
                  console.warn('invalid object pool handle');
                  return null;
                }

                return this._array[index];
              };

              _proto2.free = function free(handle) {
                var index = this._indexMask & handle;

                if ( (!handle || index < 0 || index >= this._array.length || this._freelist.find(function (n) {
                  return n === index;
                }))) {
                  console.warn('invalid object pool handle');
                  return;
                }

                if (this._dtor) {
                  this._array[index] = this._dtor(this._array[index]);
                }

                this._freelist.push(index);
              };

              return ObjectPool;
            }());

            var BufferAllocator = function () {
              function BufferAllocator(poolType) {
                this._nativeBufferAllocator = void 0;
                this._buffers = new Map();
                this._nextBufferIdx = 0;
                this._poolFlag = void 0;
                this._bufferIdxMask = void 0;
                this._poolFlag = 1 << 30;
                this._bufferIdxMask = ~this._poolFlag;
                this._nativeBufferAllocator = new NativeBufferAllocator(poolType);
              }

              var _proto3 = BufferAllocator.prototype;

              _proto3.alloc = function alloc(size) {
                var bufferIdx = this._nextBufferIdx++;

                var buffer = this._nativeBufferAllocator.alloc(bufferIdx, size);

                this._buffers.set(bufferIdx, buffer);

                return bufferIdx | this._poolFlag;
              };

              _proto3.free = function free(handle) {
                var bufferIdx = this._bufferIdxMask & handle;

                if (!this._buffers.get(bufferIdx)) {
                  {
                    console.warn('invalid buffer allocator handle');
                  }

                  return;
                }

                this._nativeBufferAllocator.free(bufferIdx);

                this._buffers["delete"](bufferIdx);
              };

              _proto3.getBuffer = function getBuffer(handle) {
                var bufferIdx = this._bufferIdxMask & handle;

                var buffer = this._buffers.get(bufferIdx);

                if (!buffer) {
                  {
                    console.warn('invalid array pool index or invalid array handle');
                  }

                  return null;
                }

                return buffer;
              };

              return BufferAllocator;
            }();

            var TypedArrayPool = function (_BufferAllocator) {
              _inheritsLoose(TypedArrayPool, _BufferAllocator);

              function TypedArrayPool(poolType, viewCtor, size, step) {
                var _this;

                _this = _BufferAllocator.call(this, poolType) || this;
                _this._viewCtor = void 0;
                _this._size = void 0;
                _this._step = void 0;
                _this._viewCtor = viewCtor;
                _this._size = size * viewCtor.BYTES_PER_ELEMENT;
                _this._step = step || size;
                return _this;
              }

              var _proto4 = TypedArrayPool.prototype;

              _proto4.alloc = function alloc() {
                var bufferIdx = this._nextBufferIdx++;

                var buffer = this._nativeBufferAllocator.alloc(bufferIdx, this._size);

                this._buffers.set(bufferIdx, new this._viewCtor(buffer));

                return bufferIdx | this._poolFlag;
              };

              _proto4.getBuffer = function getBuffer(handle) {
                return null;
              };

              _proto4.assign = function assign(handle, targetIdx, value) {
                var bufferIdx = this._bufferIdxMask & handle;

                var array = this._buffers.get(bufferIdx);

                if (!array) {
                  {
                    console.warn('invalid array pool handle');
                  }

                  return;
                }

                var index = targetIdx + 1;

                if (index >= array.length) {
                  var newSize = array.length;

                  while (index >= newSize) {
                    newSize += this._step;
                  }

                  newSize *= this._viewCtor.BYTES_PER_ELEMENT;
                  var newArray = new this._viewCtor(this._nativeBufferAllocator.alloc(bufferIdx, newSize));
                  newArray.set(array);
                  array = newArray;

                  this._buffers.set(bufferIdx, array);
                }

                array[index] = value;
                var len = array[0];
                array[0] = index > len ? index : len;
              };

              _proto4.erase = function erase(handle, index) {
                var bufferIdx = this._bufferIdxMask & handle;

                var array = this._buffers.get(bufferIdx);

                if (!array || index >= array[0]) {
                  {
                    console.warn('invalid array pool index or invalid array handle');
                  }

                  return;
                }

                for (var i = index + 1; i < array[0]; ++i) {
                  array[i] = array[i + 1];
                }

                --array[0];
              };

              _proto4.push = function push(handle, value) {
                var bufferIdx = this._bufferIdxMask & handle;

                var array = this._buffers.get(bufferIdx);

                if (!array) {
                  {
                    console.warn('invalid array pool handle');
                  }

                  return;
                }

                this.assign(handle, array[0], value);
              };

              _proto4.pop = function pop(handle) {
                var bufferIdx = this._bufferIdxMask & handle;

                var array = this._buffers.get(bufferIdx);

                if (!array) {
                  {
                    console.warn('invalid array pool handle');
                  }

                  return;
                }

                if (array[0] !== 0) --array[0];
              };

              _proto4.clear = function clear(handle) {
                var bufferIdx = this._bufferIdxMask & handle;

                var array = this._buffers.get(bufferIdx);

                if (!array) {
                  {
                    console.warn('invalid array pool handle');
                  }

                  return;
                }

                array[0] = 0;
              };

              _proto4.get = function get(handle, index) {
                var bufferIdx = this._bufferIdxMask & handle;

                var array = this._buffers.get(bufferIdx);

                if (!array || index >= array[0]) {
                  {
                    console.warn('invalid array pool handle');
                  }

                  return 0;
                }

                return array[index + 1];
              };

              _proto4.length = function length(handle) {
                var bufferIdx = this._bufferIdxMask & handle;

                var array = this._buffers.get(bufferIdx);

                if (!array) {
                  {
                    console.warn('invalid array pool handle');
                  }

                  return 0;
                }

                return array[0];
              };

              return TypedArrayPool;
            }(BufferAllocator);

            function freeHandleArray(arrayHandle, arrayPool, elementPool, freeArrayItself) {
              if (freeArrayItself === void 0) {
                freeArrayItself = true;
              }

              var count = arrayPool.length(arrayHandle);

              for (var i = 0; i < count; i++) {
                var element = arrayPool.get(arrayHandle, i);

                if (element) {
                  elementPool.free(element);
                }
              }

              if (freeArrayItself) {
                arrayPool.free(arrayHandle);
              } else {
                arrayPool.clear(arrayHandle);
              }
            }
            var PoolType;

            (function (PoolType) {
              PoolType[PoolType["ATTRIBUTE"] = 0] = "ATTRIBUTE";
              PoolType[PoolType["DESCRIPTOR_SETS"] = 1] = "DESCRIPTOR_SETS";
              PoolType[PoolType["SHADER"] = 2] = "SHADER";
              PoolType[PoolType["INPUT_ASSEMBLER"] = 3] = "INPUT_ASSEMBLER";
              PoolType[PoolType["PIPELINE_LAYOUT"] = 4] = "PIPELINE_LAYOUT";
              PoolType[PoolType["FRAMEBUFFER"] = 5] = "FRAMEBUFFER";
              PoolType[PoolType["PASS"] = 100] = "PASS";
              PoolType[PoolType["SUB_MODEL"] = 101] = "SUB_MODEL";
              PoolType[PoolType["MODEL"] = 102] = "MODEL";
              PoolType[PoolType["SCENE"] = 103] = "SCENE";
              PoolType[PoolType["CAMERA"] = 104] = "CAMERA";
              PoolType[PoolType["NODE"] = 105] = "NODE";
              PoolType[PoolType["ROOT"] = 106] = "ROOT";
              PoolType[PoolType["AABB"] = 107] = "AABB";
              PoolType[PoolType["RENDER_WINDOW"] = 108] = "RENDER_WINDOW";
              PoolType[PoolType["FRUSTUM"] = 109] = "FRUSTUM";
              PoolType[PoolType["AMBIENT"] = 110] = "AMBIENT";
              PoolType[PoolType["FOG"] = 111] = "FOG";
              PoolType[PoolType["SKYBOX"] = 112] = "SKYBOX";
              PoolType[PoolType["SHADOW"] = 113] = "SHADOW";
              PoolType[PoolType["LIGHT"] = 114] = "LIGHT";
              PoolType[PoolType["SPHERE"] = 115] = "SPHERE";
              PoolType[PoolType["INSTANCED_ATTRIBUTE"] = 116] = "INSTANCED_ATTRIBUTE";
              PoolType[PoolType["FLAT_BUFFER"] = 117] = "FLAT_BUFFER";
              PoolType[PoolType["SUB_MESH"] = 118] = "SUB_MESH";
              PoolType[PoolType["RASTERIZER_STATE"] = 119] = "RASTERIZER_STATE";
              PoolType[PoolType["DEPTH_STENCIL_STATE"] = 120] = "DEPTH_STENCIL_STATE";
              PoolType[PoolType["BLEND_TARGET"] = 121] = "BLEND_TARGET";
              PoolType[PoolType["BLEND_STATE"] = 122] = "BLEND_STATE";
              PoolType[PoolType["BATCH_2D"] = 123] = "BATCH_2D";
              PoolType[PoolType["SUB_MODEL_ARRAY"] = 200] = "SUB_MODEL_ARRAY";
              PoolType[PoolType["MODEL_ARRAY"] = 201] = "MODEL_ARRAY";
              PoolType[PoolType["ATTRIBUTE_ARRAY"] = 202] = "ATTRIBUTE_ARRAY";
              PoolType[PoolType["FLAT_BUFFER_ARRAY"] = 203] = "FLAT_BUFFER_ARRAY";
              PoolType[PoolType["INSTANCED_BUFFER_ARRAY"] = 204] = "INSTANCED_BUFFER_ARRAY";
              PoolType[PoolType["LIGHT_ARRAY"] = 205] = "LIGHT_ARRAY";
              PoolType[PoolType["BLEND_TARGET_ARRAY"] = 206] = "BLEND_TARGET_ARRAY";
              PoolType[PoolType["BATCH_ARRAY_2D"] = 207] = "BATCH_ARRAY_2D";
              PoolType[PoolType["RAW_BUFFER"] = 300] = "RAW_BUFFER";
              PoolType[PoolType["RAW_OBJECT"] = 400] = "RAW_OBJECT";
            })(PoolType || (PoolType = exports('bw', {})));

            var NULL_HANDLE = exports('bx', 0);
            var ShaderPool = exports('by', new ObjectPool(PoolType.SHADER, function (args, obj) {
              return obj ? (obj.initialize(args[1]), obj) : args[0].createShader(args[1]);
            }, function (obj) {
              return obj && obj.destroy(), obj;
            }));
            var DSPool = exports('bz', new ObjectPool(PoolType.DESCRIPTOR_SETS, function (args, obj) {
              return obj ? (obj.initialize(args[1]), obj) : args[0].createDescriptorSet(args[1]);
            }, function (obj) {
              return obj && obj.destroy(), obj;
            }));
            var IAPool = exports('bA', new ObjectPool(PoolType.INPUT_ASSEMBLER, function (args, obj) {
              return obj ? (obj.initialize(args[1]), obj) : args[0].createInputAssembler(args[1]);
            }, function (obj) {
              return obj && obj.destroy(), obj;
            }));
            var PipelineLayoutPool = exports('bB', new ObjectPool(PoolType.PIPELINE_LAYOUT, function (args, obj) {
              return obj ? (obj.initialize(args[1]), obj) : args[0].createPipelineLayout(args[1]);
            }, function (obj) {
              return obj && obj.destroy(), obj;
            }));
            var FramebufferPool = exports('bC', new ObjectPool(PoolType.FRAMEBUFFER, function (args, obj) {
              return obj ? (obj.initialize(args[1]), obj) : args[0].createFramebuffer(args[1]);
            }, function (obj) {
              return obj && obj.destroy(), obj;
            }));
            var SubModelArrayPool = exports('bD', new TypedArrayPool(PoolType.SUB_MODEL_ARRAY, Uint32Array, 8, 4));
            var ModelArrayPool = exports('bE', new TypedArrayPool(PoolType.MODEL_ARRAY, Uint32Array, 32, 16));
            var AttributeArrayPool = exports('bF', new TypedArrayPool(PoolType.ATTRIBUTE_ARRAY, Uint32Array, 8, 4));
            var FlatBufferArrayPool = exports('bG', new TypedArrayPool(PoolType.FLAT_BUFFER_ARRAY, Uint32Array, 8, 4));
            var LightArrayPool = exports('bH', new TypedArrayPool(PoolType.LIGHT_ARRAY, Uint32Array, 8, 4));
            var BlendTargetArrayPool = exports('bI', new TypedArrayPool(PoolType.BLEND_TARGET_ARRAY, Uint32Array, 8, 4));
            var UIBatchArrayPool = exports('bJ', new TypedArrayPool(PoolType.BATCH_ARRAY_2D, Uint32Array, 32, 16));
            var RawBufferPool = exports('bK', new BufferAllocator(PoolType.RAW_BUFFER));
            var RawObjectPool = exports('bL', new ObjectPool(PoolType.RAW_OBJECT, function (args) {
              return args[0] || {};
            }, function (_) {
              return undefined;
            }));
            var PassView;

            (function (PassView) {
              PassView[PassView["PRIORITY"] = 0] = "PRIORITY";
              PassView[PassView["STAGE"] = 1] = "STAGE";
              PassView[PassView["PHASE"] = 2] = "PHASE";
              PassView[PassView["BATCHING_SCHEME"] = 3] = "BATCHING_SCHEME";
              PassView[PassView["PRIMITIVE"] = 4] = "PRIMITIVE";
              PassView[PassView["DYNAMIC_STATES"] = 5] = "DYNAMIC_STATES";
              PassView[PassView["HASH"] = 6] = "HASH";
              PassView[PassView["RASTERIZER_STATE"] = 7] = "RASTERIZER_STATE";
              PassView[PassView["DEPTH_STENCIL_STATE"] = 8] = "DEPTH_STENCIL_STATE";
              PassView[PassView["BLEND_STATE"] = 9] = "BLEND_STATE";
              PassView[PassView["DESCRIPTOR_SET"] = 10] = "DESCRIPTOR_SET";
              PassView[PassView["PIPELINE_LAYOUT"] = 11] = "PIPELINE_LAYOUT";
              PassView[PassView["COUNT"] = 12] = "COUNT";
            })(PassView || (PassView = exports('bM', {})));

            var passViewDataType = (_passViewDataType = {}, _passViewDataType[PassView.PRIORITY] = BufferDataType.UINT32, _passViewDataType[PassView.STAGE] = BufferDataType.UINT32, _passViewDataType[PassView.PHASE] = BufferDataType.UINT32, _passViewDataType[PassView.BATCHING_SCHEME] = BufferDataType.UINT32, _passViewDataType[PassView.PRIMITIVE] = BufferDataType.UINT32, _passViewDataType[PassView.DYNAMIC_STATES] = BufferDataType.UINT32, _passViewDataType[PassView.HASH] = BufferDataType.UINT32, _passViewDataType[PassView.RASTERIZER_STATE] = BufferDataType.UINT32, _passViewDataType[PassView.DEPTH_STENCIL_STATE] = BufferDataType.UINT32, _passViewDataType[PassView.BLEND_STATE] = BufferDataType.UINT32, _passViewDataType[PassView.DESCRIPTOR_SET] = BufferDataType.UINT32, _passViewDataType[PassView.PIPELINE_LAYOUT] = BufferDataType.UINT32, _passViewDataType[PassView.COUNT] = BufferDataType.NEVER, _passViewDataType);
            var PassPool = exports('bN', new BufferPool(PoolType.PASS, passViewDataType, PassView));
            var SubModelView;

            (function (SubModelView) {
              SubModelView[SubModelView["PRIORITY"] = 0] = "PRIORITY";
              SubModelView[SubModelView["PASS_COUNT"] = 1] = "PASS_COUNT";
              SubModelView[SubModelView["PASS_0"] = 2] = "PASS_0";
              SubModelView[SubModelView["PASS_1"] = 3] = "PASS_1";
              SubModelView[SubModelView["PASS_2"] = 4] = "PASS_2";
              SubModelView[SubModelView["PASS_3"] = 5] = "PASS_3";
              SubModelView[SubModelView["SHADER_0"] = 6] = "SHADER_0";
              SubModelView[SubModelView["SHADER_1"] = 7] = "SHADER_1";
              SubModelView[SubModelView["SHADER_2"] = 8] = "SHADER_2";
              SubModelView[SubModelView["SHADER_3"] = 9] = "SHADER_3";
              SubModelView[SubModelView["PLANAR_SHADER"] = 10] = "PLANAR_SHADER";
              SubModelView[SubModelView["DESCRIPTOR_SET"] = 11] = "DESCRIPTOR_SET";
              SubModelView[SubModelView["INPUT_ASSEMBLER"] = 12] = "INPUT_ASSEMBLER";
              SubModelView[SubModelView["SUB_MESH"] = 13] = "SUB_MESH";
              SubModelView[SubModelView["COUNT"] = 14] = "COUNT";
            })(SubModelView || (SubModelView = exports('bO', {})));

            var subModelViewDataType = (_subModelViewDataType = {}, _subModelViewDataType[SubModelView.PRIORITY] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.PASS_COUNT] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.PASS_0] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.PASS_1] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.PASS_2] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.PASS_3] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.SHADER_0] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.SHADER_1] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.SHADER_2] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.SHADER_3] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.PLANAR_SHADER] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.DESCRIPTOR_SET] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.INPUT_ASSEMBLER] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.SUB_MESH] = BufferDataType.UINT32, _subModelViewDataType[SubModelView.COUNT] = BufferDataType.NEVER, _subModelViewDataType);
            var SubModelPool = exports('bP', new BufferPool(PoolType.SUB_MODEL, subModelViewDataType, SubModelView));
            var ModelView;

            (function (ModelView) {
              ModelView[ModelView["ENABLED"] = 0] = "ENABLED";
              ModelView[ModelView["VIS_FLAGS"] = 1] = "VIS_FLAGS";
              ModelView[ModelView["CAST_SHADOW"] = 2] = "CAST_SHADOW";
              ModelView[ModelView["RECEIVE_SHADOW"] = 3] = "RECEIVE_SHADOW";
              ModelView[ModelView["WORLD_BOUNDS"] = 4] = "WORLD_BOUNDS";
              ModelView[ModelView["NODE"] = 5] = "NODE";
              ModelView[ModelView["TRANSFORM"] = 6] = "TRANSFORM";
              ModelView[ModelView["SUB_MODEL_ARRAY"] = 7] = "SUB_MODEL_ARRAY";
              ModelView[ModelView["INSTANCED_BUFFER"] = 8] = "INSTANCED_BUFFER";
              ModelView[ModelView["INSTANCED_ATTR_ARRAY"] = 9] = "INSTANCED_ATTR_ARRAY";
              ModelView[ModelView["COUNT"] = 10] = "COUNT";
            })(ModelView || (ModelView = exports('bQ', {})));

            var modelViewDataType = (_modelViewDataType = {}, _modelViewDataType[ModelView.ENABLED] = BufferDataType.UINT32, _modelViewDataType[ModelView.VIS_FLAGS] = BufferDataType.UINT32, _modelViewDataType[ModelView.CAST_SHADOW] = BufferDataType.UINT32, _modelViewDataType[ModelView.RECEIVE_SHADOW] = BufferDataType.UINT32, _modelViewDataType[ModelView.WORLD_BOUNDS] = BufferDataType.UINT32, _modelViewDataType[ModelView.NODE] = BufferDataType.UINT32, _modelViewDataType[ModelView.TRANSFORM] = BufferDataType.UINT32, _modelViewDataType[ModelView.SUB_MODEL_ARRAY] = BufferDataType.UINT32, _modelViewDataType[ModelView.INSTANCED_BUFFER] = BufferDataType.UINT32, _modelViewDataType[ModelView.INSTANCED_ATTR_ARRAY] = BufferDataType.UINT32, _modelViewDataType[ModelView.COUNT] = BufferDataType.NEVER, _modelViewDataType);
            var ModelPool = exports('bR', new BufferPool(PoolType.MODEL, modelViewDataType, ModelView));
            var BatchView2D;

            (function (BatchView2D) {
              BatchView2D[BatchView2D["VIS_FLAGS"] = 0] = "VIS_FLAGS";
              BatchView2D[BatchView2D["PASS_COUNT"] = 1] = "PASS_COUNT";
              BatchView2D[BatchView2D["PASS_0"] = 2] = "PASS_0";
              BatchView2D[BatchView2D["PASS_1"] = 3] = "PASS_1";
              BatchView2D[BatchView2D["PASS_2"] = 4] = "PASS_2";
              BatchView2D[BatchView2D["PASS_3"] = 5] = "PASS_3";
              BatchView2D[BatchView2D["SHADER_0"] = 6] = "SHADER_0";
              BatchView2D[BatchView2D["SHADER_1"] = 7] = "SHADER_1";
              BatchView2D[BatchView2D["SHADER_2"] = 8] = "SHADER_2";
              BatchView2D[BatchView2D["SHADER_3"] = 9] = "SHADER_3";
              BatchView2D[BatchView2D["DESCRIPTOR_SET"] = 10] = "DESCRIPTOR_SET";
              BatchView2D[BatchView2D["INPUT_ASSEMBLER"] = 11] = "INPUT_ASSEMBLER";
              BatchView2D[BatchView2D["COUNT"] = 12] = "COUNT";
            })(BatchView2D || (BatchView2D = exports('bS', {})));

            var batchView2DDataType = (_batchView2DDataType = {}, _batchView2DDataType[BatchView2D.VIS_FLAGS] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.PASS_COUNT] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.PASS_0] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.PASS_1] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.PASS_2] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.PASS_3] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.SHADER_0] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.SHADER_1] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.SHADER_2] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.SHADER_3] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.DESCRIPTOR_SET] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.INPUT_ASSEMBLER] = BufferDataType.UINT32, _batchView2DDataType[BatchView2D.COUNT] = BufferDataType.NEVER, _batchView2DDataType);
            var BatchPool2D = exports('bT', new BufferPool(PoolType.BATCH_2D, batchView2DDataType, BatchView2D));
            var AABBView;

            (function (AABBView) {
              AABBView[AABBView["CENTER"] = 0] = "CENTER";
              AABBView[AABBView["HALF_EXTENSION"] = 3] = "HALF_EXTENSION";
              AABBView[AABBView["COUNT"] = 6] = "COUNT";
            })(AABBView || (AABBView = exports('bU', {})));

            var aabbViewDataType = (_aabbViewDataType = {}, _aabbViewDataType[AABBView.CENTER] = BufferDataType.FLOAT32, _aabbViewDataType[AABBView.HALF_EXTENSION] = BufferDataType.FLOAT32, _aabbViewDataType[AABBView.COUNT] = BufferDataType.NEVER, _aabbViewDataType);
            var AABBPool = exports('bV', new BufferPool(PoolType.AABB, aabbViewDataType, AABBView));
            var SceneView;

            (function (SceneView) {
              SceneView[SceneView["MAIN_LIGHT"] = 0] = "MAIN_LIGHT";
              SceneView[SceneView["MODEL_ARRAY"] = 1] = "MODEL_ARRAY";
              SceneView[SceneView["SPHERE_LIGHT_ARRAY"] = 2] = "SPHERE_LIGHT_ARRAY";
              SceneView[SceneView["SPOT_LIGHT_ARRAY"] = 3] = "SPOT_LIGHT_ARRAY";
              SceneView[SceneView["BATCH_ARRAY_2D"] = 4] = "BATCH_ARRAY_2D";
              SceneView[SceneView["COUNT"] = 5] = "COUNT";
            })(SceneView || (SceneView = exports('bW', {})));

            var sceneViewDataType = (_sceneViewDataType = {}, _sceneViewDataType[SceneView.MAIN_LIGHT] = BufferDataType.UINT32, _sceneViewDataType[SceneView.MODEL_ARRAY] = BufferDataType.UINT32, _sceneViewDataType[SceneView.SPHERE_LIGHT_ARRAY] = BufferDataType.UINT32, _sceneViewDataType[SceneView.SPOT_LIGHT_ARRAY] = BufferDataType.UINT32, _sceneViewDataType[SceneView.BATCH_ARRAY_2D] = BufferDataType.UINT32, _sceneViewDataType[SceneView.COUNT] = BufferDataType.NEVER, _sceneViewDataType);
            var ScenePool = exports('bX', new BufferPool(PoolType.SCENE, sceneViewDataType, SceneView));
            var CameraView;

            (function (CameraView) {
              CameraView[CameraView["WIDTH"] = 0] = "WIDTH";
              CameraView[CameraView["HEIGHT"] = 1] = "HEIGHT";
              CameraView[CameraView["EXPOSURE"] = 2] = "EXPOSURE";
              CameraView[CameraView["CLEAR_FLAG"] = 3] = "CLEAR_FLAG";
              CameraView[CameraView["CLEAR_DEPTH"] = 4] = "CLEAR_DEPTH";
              CameraView[CameraView["CLEAR_STENCIL"] = 5] = "CLEAR_STENCIL";
              CameraView[CameraView["VISIBILITY"] = 6] = "VISIBILITY";
              CameraView[CameraView["NODE"] = 7] = "NODE";
              CameraView[CameraView["SCENE"] = 8] = "SCENE";
              CameraView[CameraView["FRUSTUM"] = 9] = "FRUSTUM";
              CameraView[CameraView["WINDOW"] = 10] = "WINDOW";
              CameraView[CameraView["FORWARD"] = 11] = "FORWARD";
              CameraView[CameraView["POSITION"] = 14] = "POSITION";
              CameraView[CameraView["VIEW_PORT"] = 17] = "VIEW_PORT";
              CameraView[CameraView["CLEAR_COLOR"] = 21] = "CLEAR_COLOR";
              CameraView[CameraView["MAT_VIEW"] = 25] = "MAT_VIEW";
              CameraView[CameraView["MAT_VIEW_PROJ"] = 41] = "MAT_VIEW_PROJ";
              CameraView[CameraView["MAT_VIEW_PROJ_INV"] = 57] = "MAT_VIEW_PROJ_INV";
              CameraView[CameraView["MAT_PROJ"] = 73] = "MAT_PROJ";
              CameraView[CameraView["MAT_PROJ_INV"] = 89] = "MAT_PROJ_INV";
              CameraView[CameraView["COUNT"] = 105] = "COUNT";
            })(CameraView || (CameraView = exports('bY', {})));

            var cameraViewDataType = (_cameraViewDataType = {}, _cameraViewDataType[CameraView.WIDTH] = BufferDataType.UINT32, _cameraViewDataType[CameraView.HEIGHT] = BufferDataType.UINT32, _cameraViewDataType[CameraView.EXPOSURE] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.CLEAR_FLAG] = BufferDataType.UINT32, _cameraViewDataType[CameraView.CLEAR_DEPTH] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.CLEAR_STENCIL] = BufferDataType.UINT32, _cameraViewDataType[CameraView.VISIBILITY] = BufferDataType.UINT32, _cameraViewDataType[CameraView.NODE] = BufferDataType.UINT32, _cameraViewDataType[CameraView.SCENE] = BufferDataType.UINT32, _cameraViewDataType[CameraView.FRUSTUM] = BufferDataType.UINT32, _cameraViewDataType[CameraView.WINDOW] = BufferDataType.UINT32, _cameraViewDataType[CameraView.FORWARD] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.POSITION] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.VIEW_PORT] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.CLEAR_COLOR] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.MAT_VIEW] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.MAT_VIEW_PROJ] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.MAT_VIEW_PROJ_INV] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.MAT_PROJ] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.MAT_PROJ_INV] = BufferDataType.FLOAT32, _cameraViewDataType[CameraView.COUNT] = BufferDataType.NEVER, _cameraViewDataType);
            var CameraPool = exports('bZ', new BufferPool(PoolType.CAMERA, cameraViewDataType, CameraView));
            var NodeView;

            (function (NodeView) {
              NodeView[NodeView["FLAGS_CHANGED"] = 0] = "FLAGS_CHANGED";
              NodeView[NodeView["LAYER"] = 1] = "LAYER";
              NodeView[NodeView["WORLD_SCALE"] = 2] = "WORLD_SCALE";
              NodeView[NodeView["WORLD_POSITION"] = 5] = "WORLD_POSITION";
              NodeView[NodeView["WORLD_ROTATION"] = 8] = "WORLD_ROTATION";
              NodeView[NodeView["WORLD_MATRIX"] = 12] = "WORLD_MATRIX";
              NodeView[NodeView["COUNT"] = 28] = "COUNT";
            })(NodeView || (NodeView = exports('b_', {})));

            var nodeViewDataType = (_nodeViewDataType = {}, _nodeViewDataType[NodeView.FLAGS_CHANGED] = BufferDataType.UINT32, _nodeViewDataType[NodeView.LAYER] = BufferDataType.UINT32, _nodeViewDataType[NodeView.WORLD_SCALE] = BufferDataType.FLOAT32, _nodeViewDataType[NodeView.WORLD_POSITION] = BufferDataType.FLOAT32, _nodeViewDataType[NodeView.WORLD_ROTATION] = BufferDataType.FLOAT32, _nodeViewDataType[NodeView.WORLD_MATRIX] = BufferDataType.FLOAT32, _nodeViewDataType[NodeView.COUNT] = BufferDataType.NEVER, _nodeViewDataType);

            var NodePool = exports('b$', new BufferPool(PoolType.NODE, nodeViewDataType, NodeView));
            var RootView;

            (function (RootView) {
              RootView[RootView["CUMULATIVE_TIME"] = 0] = "CUMULATIVE_TIME";
              RootView[RootView["FRAME_TIME"] = 1] = "FRAME_TIME";
              RootView[RootView["COUNT"] = 2] = "COUNT";
            })(RootView || (RootView = exports('c0', {})));

            var rootViewDataType = (_rootViewDataType = {}, _rootViewDataType[RootView.CUMULATIVE_TIME] = BufferDataType.FLOAT32, _rootViewDataType[RootView.FRAME_TIME] = BufferDataType.FLOAT32, _rootViewDataType[RootView.COUNT] = BufferDataType.NEVER, _rootViewDataType);
            var RootPool = exports('c1', new BufferPool(PoolType.ROOT, rootViewDataType, RootView, 1));
            var RenderWindowView;

            (function (RenderWindowView) {
              RenderWindowView[RenderWindowView["HAS_ON_SCREEN_ATTACHMENTS"] = 0] = "HAS_ON_SCREEN_ATTACHMENTS";
              RenderWindowView[RenderWindowView["HAS_OFF_SCREEN_ATTACHMENTS"] = 1] = "HAS_OFF_SCREEN_ATTACHMENTS";
              RenderWindowView[RenderWindowView["FRAMEBUFFER"] = 2] = "FRAMEBUFFER";
              RenderWindowView[RenderWindowView["COUNT"] = 3] = "COUNT";
            })(RenderWindowView || (RenderWindowView = exports('c2', {})));

            var renderWindowDataType = (_renderWindowDataType = {}, _renderWindowDataType[RenderWindowView.HAS_ON_SCREEN_ATTACHMENTS] = BufferDataType.UINT32, _renderWindowDataType[RenderWindowView.HAS_OFF_SCREEN_ATTACHMENTS] = BufferDataType.UINT32, _renderWindowDataType[RenderWindowView.FRAMEBUFFER] = BufferDataType.UINT32, _renderWindowDataType[RenderWindowView.COUNT] = BufferDataType.NEVER, _renderWindowDataType);
            var RenderWindowPool = exports('c3', new BufferPool(PoolType.RENDER_WINDOW, renderWindowDataType, RenderWindowView, 2));
            var FrustumView;

            (function (FrustumView) {
              FrustumView[FrustumView["VERTICES"] = 0] = "VERTICES";
              FrustumView[FrustumView["PLANES"] = 24] = "PLANES";
              FrustumView[FrustumView["COUNT"] = 48] = "COUNT";
            })(FrustumView || (FrustumView = exports('c4', {})));

            var frustumViewDataType = (_frustumViewDataType = {}, _frustumViewDataType[FrustumView.VERTICES] = BufferDataType.FLOAT32, _frustumViewDataType[FrustumView.PLANES] = BufferDataType.FLOAT32, _frustumViewDataType[FrustumView.COUNT] = BufferDataType.NEVER, _frustumViewDataType);
            var FrustumPool = exports('c5', new BufferPool(PoolType.FRUSTUM, frustumViewDataType, FrustumView));
            var AmbientView;

            (function (AmbientView) {
              AmbientView[AmbientView["ENABLE"] = 0] = "ENABLE";
              AmbientView[AmbientView["ILLUM"] = 1] = "ILLUM";
              AmbientView[AmbientView["SKY_COLOR"] = 2] = "SKY_COLOR";
              AmbientView[AmbientView["GROUND_ALBEDO"] = 6] = "GROUND_ALBEDO";
              AmbientView[AmbientView["COUNT"] = 10] = "COUNT";
            })(AmbientView || (AmbientView = exports('c6', {})));

            var ambientViewDataType = (_ambientViewDataType = {}, _ambientViewDataType[AmbientView.ENABLE] = BufferDataType.UINT32, _ambientViewDataType[AmbientView.ILLUM] = BufferDataType.FLOAT32, _ambientViewDataType[AmbientView.SKY_COLOR] = BufferDataType.FLOAT32, _ambientViewDataType[AmbientView.GROUND_ALBEDO] = BufferDataType.FLOAT32, _ambientViewDataType[AmbientView.COUNT] = BufferDataType.NEVER, _ambientViewDataType);

            var AmbientPool = exports('c7', new BufferPool(PoolType.AMBIENT, ambientViewDataType, AmbientView, 1));
            var SkyboxView;

            (function (SkyboxView) {
              SkyboxView[SkyboxView["ENABLE"] = 0] = "ENABLE";
              SkyboxView[SkyboxView["IS_RGBE"] = 1] = "IS_RGBE";
              SkyboxView[SkyboxView["USE_IBL"] = 2] = "USE_IBL";
              SkyboxView[SkyboxView["MODEL"] = 3] = "MODEL";
              SkyboxView[SkyboxView["COUNT"] = 4] = "COUNT";
            })(SkyboxView || (SkyboxView = exports('c8', {})));

            var skyboxDataType = (_skyboxDataType = {}, _skyboxDataType[SkyboxView.ENABLE] = BufferDataType.UINT32, _skyboxDataType[SkyboxView.IS_RGBE] = BufferDataType.UINT32, _skyboxDataType[SkyboxView.USE_IBL] = BufferDataType.UINT32, _skyboxDataType[SkyboxView.MODEL] = BufferDataType.UINT32, _skyboxDataType[SkyboxView.COUNT] = BufferDataType.NEVER, _skyboxDataType);
            var SkyboxPool = exports('c9', new BufferPool(PoolType.SKYBOX, skyboxDataType, SkyboxView, 1));
            var FogView;

            (function (FogView) {
              FogView[FogView["ENABLE"] = 0] = "ENABLE";
              FogView[FogView["TYPE"] = 1] = "TYPE";
              FogView[FogView["DENSITY"] = 2] = "DENSITY";
              FogView[FogView["START"] = 3] = "START";
              FogView[FogView["END"] = 4] = "END";
              FogView[FogView["ATTEN"] = 5] = "ATTEN";
              FogView[FogView["TOP"] = 6] = "TOP";
              FogView[FogView["RANGE"] = 7] = "RANGE";
              FogView[FogView["COLOR"] = 8] = "COLOR";
              FogView[FogView["COUNT"] = 12] = "COUNT";
            })(FogView || (FogView = exports('ca', {})));

            var fogViewDataType = (_fogViewDataType = {}, _fogViewDataType[FogView.ENABLE] = BufferDataType.UINT32, _fogViewDataType[FogView.TYPE] = BufferDataType.UINT32, _fogViewDataType[FogView.DENSITY] = BufferDataType.FLOAT32, _fogViewDataType[FogView.START] = BufferDataType.FLOAT32, _fogViewDataType[FogView.END] = BufferDataType.FLOAT32, _fogViewDataType[FogView.ATTEN] = BufferDataType.FLOAT32, _fogViewDataType[FogView.TOP] = BufferDataType.FLOAT32, _fogViewDataType[FogView.RANGE] = BufferDataType.FLOAT32, _fogViewDataType[FogView.COLOR] = BufferDataType.FLOAT32, _fogViewDataType[FogView.COUNT] = BufferDataType.NEVER, _fogViewDataType);

            var FogPool = exports('cb', new BufferPool(PoolType.FOG, fogViewDataType, FogView));
            var ShadowsView;

            (function (ShadowsView) {
              ShadowsView[ShadowsView["ENABLE"] = 0] = "ENABLE";
              ShadowsView[ShadowsView["DIRTY"] = 1] = "DIRTY";
              ShadowsView[ShadowsView["TYPE"] = 2] = "TYPE";
              ShadowsView[ShadowsView["DISTANCE"] = 3] = "DISTANCE";
              ShadowsView[ShadowsView["INSTANCE_PASS"] = 4] = "INSTANCE_PASS";
              ShadowsView[ShadowsView["PLANAR_PASS"] = 5] = "PLANAR_PASS";
              ShadowsView[ShadowsView["NEAR"] = 6] = "NEAR";
              ShadowsView[ShadowsView["FAR"] = 7] = "FAR";
              ShadowsView[ShadowsView["ASPECT"] = 8] = "ASPECT";
              ShadowsView[ShadowsView["PCF_TYPE"] = 9] = "PCF_TYPE";
              ShadowsView[ShadowsView["SHADOW_MAP_DIRTY"] = 10] = "SHADOW_MAP_DIRTY";
              ShadowsView[ShadowsView["BIAS"] = 11] = "BIAS";
              ShadowsView[ShadowsView["ORTHO_SIZE"] = 12] = "ORTHO_SIZE";
              ShadowsView[ShadowsView["AUTO_ADAPT"] = 13] = "AUTO_ADAPT";
              ShadowsView[ShadowsView["COLOR"] = 14] = "COLOR";
              ShadowsView[ShadowsView["SIZE"] = 18] = "SIZE";
              ShadowsView[ShadowsView["NORMAL"] = 20] = "NORMAL";
              ShadowsView[ShadowsView["MAT_LIGHT"] = 23] = "MAT_LIGHT";
              ShadowsView[ShadowsView["COUNT"] = 39] = "COUNT";
            })(ShadowsView || (ShadowsView = exports('cc', {})));

            var shadowsViewDataType = (_shadowsViewDataType = {}, _shadowsViewDataType[ShadowsView.ENABLE] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.DIRTY] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.TYPE] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.DISTANCE] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.INSTANCE_PASS] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.PLANAR_PASS] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.NEAR] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.FAR] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.ASPECT] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.PCF_TYPE] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.SHADOW_MAP_DIRTY] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.BIAS] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.ORTHO_SIZE] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.AUTO_ADAPT] = BufferDataType.UINT32, _shadowsViewDataType[ShadowsView.COLOR] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.SIZE] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.NORMAL] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.MAT_LIGHT] = BufferDataType.FLOAT32, _shadowsViewDataType[ShadowsView.COUNT] = BufferDataType.NEVER, _shadowsViewDataType);

            var ShadowsPool = exports('cd', new BufferPool(PoolType.SHADOW, shadowsViewDataType, ShadowsView, 1));
            var LightView;

            (function (LightView) {
              LightView[LightView["USE_COLOR_TEMPERATURE"] = 0] = "USE_COLOR_TEMPERATURE";
              LightView[LightView["ILLUMINANCE"] = 1] = "ILLUMINANCE";
              LightView[LightView["NODE"] = 2] = "NODE";
              LightView[LightView["RANGE"] = 3] = "RANGE";
              LightView[LightView["TYPE"] = 4] = "TYPE";
              LightView[LightView["AABB"] = 5] = "AABB";
              LightView[LightView["FRUSTUM"] = 6] = "FRUSTUM";
              LightView[LightView["SIZE"] = 7] = "SIZE";
              LightView[LightView["SPOT_ANGLE"] = 8] = "SPOT_ANGLE";
              LightView[LightView["ASPECT"] = 9] = "ASPECT";
              LightView[LightView["DIRECTION"] = 10] = "DIRECTION";
              LightView[LightView["COLOR"] = 13] = "COLOR";
              LightView[LightView["COLOR_TEMPERATURE_RGB"] = 16] = "COLOR_TEMPERATURE_RGB";
              LightView[LightView["POSITION"] = 19] = "POSITION";
              LightView[LightView["COUNT"] = 22] = "COUNT";
            })(LightView || (LightView = exports('ce', {})));

            var lightViewDataType = (_lightViewDataType = {}, _lightViewDataType[LightView.USE_COLOR_TEMPERATURE] = BufferDataType.UINT32, _lightViewDataType[LightView.ILLUMINANCE] = BufferDataType.FLOAT32, _lightViewDataType[LightView.NODE] = BufferDataType.UINT32, _lightViewDataType[LightView.RANGE] = BufferDataType.FLOAT32, _lightViewDataType[LightView.TYPE] = BufferDataType.UINT32, _lightViewDataType[LightView.AABB] = BufferDataType.UINT32, _lightViewDataType[LightView.FRUSTUM] = BufferDataType.UINT32, _lightViewDataType[LightView.SIZE] = BufferDataType.FLOAT32, _lightViewDataType[LightView.SPOT_ANGLE] = BufferDataType.FLOAT32, _lightViewDataType[LightView.ASPECT] = BufferDataType.FLOAT32, _lightViewDataType[LightView.DIRECTION] = BufferDataType.FLOAT32, _lightViewDataType[LightView.COLOR] = BufferDataType.FLOAT32, _lightViewDataType[LightView.COLOR_TEMPERATURE_RGB] = BufferDataType.FLOAT32, _lightViewDataType[LightView.POSITION] = BufferDataType.FLOAT32, _lightViewDataType[LightView.COUNT] = BufferDataType.NEVER, _lightViewDataType);
            var LightPool = exports('cf', new BufferPool(PoolType.LIGHT, lightViewDataType, LightView, 3));
            var SphereView;

            (function (SphereView) {
              SphereView[SphereView["RADIUS"] = 0] = "RADIUS";
              SphereView[SphereView["CENTER"] = 1] = "CENTER";
              SphereView[SphereView["COUNT"] = 4] = "COUNT";
            })(SphereView || (SphereView = exports('cg', {})));

            var sphereViewDataType = (_sphereViewDataType = {}, _sphereViewDataType[SphereView.RADIUS] = BufferDataType.FLOAT32, _sphereViewDataType[SphereView.CENTER] = BufferDataType.FLOAT32, _sphereViewDataType[SphereView.COUNT] = BufferDataType.NEVER, _sphereViewDataType);

            var SpherePool = exports('ch', new BufferPool(PoolType.SPHERE, sphereViewDataType, SphereView, 3));
            var FlatBufferView;

            (function (FlatBufferView) {
              FlatBufferView[FlatBufferView["STRIDE"] = 0] = "STRIDE";
              FlatBufferView[FlatBufferView["AMOUNT"] = 1] = "AMOUNT";
              FlatBufferView[FlatBufferView["BUFFER"] = 2] = "BUFFER";
              FlatBufferView[FlatBufferView["COUNT"] = 3] = "COUNT";
            })(FlatBufferView || (FlatBufferView = exports('ci', {})));

            var flatBufferViewDataType = (_flatBufferViewDataTy = {}, _flatBufferViewDataTy[FlatBufferView.STRIDE] = BufferDataType.UINT32, _flatBufferViewDataTy[FlatBufferView.AMOUNT] = BufferDataType.UINT32, _flatBufferViewDataTy[FlatBufferView.BUFFER] = BufferDataType.UINT32, _flatBufferViewDataTy[FlatBufferView.COUNT] = BufferDataType.NEVER, _flatBufferViewDataTy);
            var FlatBufferPool = exports('cj', new BufferPool(PoolType.FLAT_BUFFER, flatBufferViewDataType, FlatBufferView, 3));
            var SubMeshView;

            (function (SubMeshView) {
              SubMeshView[SubMeshView["FLAT_BUFFER_ARRAY"] = 0] = "FLAT_BUFFER_ARRAY";
              SubMeshView[SubMeshView["COUNT"] = 1] = "COUNT";
            })(SubMeshView || (SubMeshView = exports('ck', {})));

            var subMeshViewDataType = (_subMeshViewDataType = {}, _subMeshViewDataType[SubMeshView.FLAT_BUFFER_ARRAY] = BufferDataType.UINT32, _subMeshViewDataType[SubMeshView.COUNT] = BufferDataType.NEVER, _subMeshViewDataType);
            var SubMeshPool = exports('cl', new BufferPool(PoolType.SUB_MESH, subMeshViewDataType, SubMeshView, 3));
            var RasterizerStateView;

            (function (RasterizerStateView) {
              RasterizerStateView[RasterizerStateView["IS_DISCARD"] = 0] = "IS_DISCARD";
              RasterizerStateView[RasterizerStateView["POLYGO_MODEL"] = 1] = "POLYGO_MODEL";
              RasterizerStateView[RasterizerStateView["SHADE_MODEL"] = 2] = "SHADE_MODEL";
              RasterizerStateView[RasterizerStateView["CULL_MODE"] = 3] = "CULL_MODE";
              RasterizerStateView[RasterizerStateView["IS_FRONT_FACE_CCW"] = 4] = "IS_FRONT_FACE_CCW";
              RasterizerStateView[RasterizerStateView["DEPTH_BIAS_ENABLED"] = 5] = "DEPTH_BIAS_ENABLED";
              RasterizerStateView[RasterizerStateView["DEPTH_BIAS"] = 6] = "DEPTH_BIAS";
              RasterizerStateView[RasterizerStateView["DEPTH_BIAS_CLAMP"] = 7] = "DEPTH_BIAS_CLAMP";
              RasterizerStateView[RasterizerStateView["DEPTH_BIAS_SLOP"] = 8] = "DEPTH_BIAS_SLOP";
              RasterizerStateView[RasterizerStateView["IS_DEPTH_CLIP"] = 9] = "IS_DEPTH_CLIP";
              RasterizerStateView[RasterizerStateView["IS_MULTI_SAMPLE"] = 10] = "IS_MULTI_SAMPLE";
              RasterizerStateView[RasterizerStateView["LINE_WIDTH"] = 11] = "LINE_WIDTH";
              RasterizerStateView[RasterizerStateView["COUNT"] = 12] = "COUNT";
            })(RasterizerStateView || (RasterizerStateView = exports('cm', {})));

            var rasterizerStateViewDataType = (_rasterizerStateViewD = {}, _rasterizerStateViewD[RasterizerStateView.IS_DISCARD] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.POLYGO_MODEL] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.SHADE_MODEL] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.CULL_MODE] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.IS_FRONT_FACE_CCW] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.DEPTH_BIAS_ENABLED] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.DEPTH_BIAS] = BufferDataType.FLOAT32, _rasterizerStateViewD[RasterizerStateView.DEPTH_BIAS_CLAMP] = BufferDataType.FLOAT32, _rasterizerStateViewD[RasterizerStateView.DEPTH_BIAS_SLOP] = BufferDataType.FLOAT32, _rasterizerStateViewD[RasterizerStateView.IS_DEPTH_CLIP] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.IS_MULTI_SAMPLE] = BufferDataType.UINT32, _rasterizerStateViewD[RasterizerStateView.LINE_WIDTH] = BufferDataType.FLOAT32, _rasterizerStateViewD[RasterizerStateView.COUNT] = BufferDataType.NEVER, _rasterizerStateViewD);
            var RasterizerStatePool = exports('cn', new BufferPool(PoolType.RASTERIZER_STATE, rasterizerStateViewDataType, RasterizerStateView, 9));
            var DepthStencilStateView;

            (function (DepthStencilStateView) {
              DepthStencilStateView[DepthStencilStateView["DEPTH_TEST"] = 0] = "DEPTH_TEST";
              DepthStencilStateView[DepthStencilStateView["DEPTH_WRITE"] = 1] = "DEPTH_WRITE";
              DepthStencilStateView[DepthStencilStateView["DEPTH_FUNC"] = 2] = "DEPTH_FUNC";
              DepthStencilStateView[DepthStencilStateView["STENCIL_TEST_FRONT"] = 3] = "STENCIL_TEST_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_FUNC_FRONT"] = 4] = "STENCIL_FUNC_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_READ_MASK_FRONT"] = 5] = "STENCIL_READ_MASK_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_WRITE_MASK_FRONT"] = 6] = "STENCIL_WRITE_MASK_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_FAIL_OP_FRONT"] = 7] = "STENCIL_FAIL_OP_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_Z_FAIL_OP_FRONT"] = 8] = "STENCIL_Z_FAIL_OP_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_PASS_OP_FRONT"] = 9] = "STENCIL_PASS_OP_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_REF_FRONT"] = 10] = "STENCIL_REF_FRONT";
              DepthStencilStateView[DepthStencilStateView["STENCIL_TEST_BACK"] = 11] = "STENCIL_TEST_BACK";
              DepthStencilStateView[DepthStencilStateView["STENCIL_FUNC_BACK"] = 12] = "STENCIL_FUNC_BACK";
              DepthStencilStateView[DepthStencilStateView["STENCIL_READ_MADK_BACK"] = 13] = "STENCIL_READ_MADK_BACK";
              DepthStencilStateView[DepthStencilStateView["STENCIL_WRITE_MASK_BACK"] = 14] = "STENCIL_WRITE_MASK_BACK";
              DepthStencilStateView[DepthStencilStateView["STENCIL_FAIL_OP_BACK"] = 15] = "STENCIL_FAIL_OP_BACK";
              DepthStencilStateView[DepthStencilStateView["STENCIL_Z_FAIL_OP_BACK"] = 16] = "STENCIL_Z_FAIL_OP_BACK";
              DepthStencilStateView[DepthStencilStateView["STENCIL_PASS_OP_BACK"] = 17] = "STENCIL_PASS_OP_BACK";
              DepthStencilStateView[DepthStencilStateView["STENCIL_REF_BACK"] = 18] = "STENCIL_REF_BACK";
              DepthStencilStateView[DepthStencilStateView["COUNT"] = 19] = "COUNT";
            })(DepthStencilStateView || (DepthStencilStateView = exports('co', {})));

            var depthStencilStateViewDataType = (_depthStencilStateVie = {}, _depthStencilStateVie[DepthStencilStateView.DEPTH_TEST] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.DEPTH_WRITE] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.DEPTH_FUNC] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_TEST_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_FUNC_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_READ_MASK_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_WRITE_MASK_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_FAIL_OP_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_Z_FAIL_OP_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_PASS_OP_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_REF_FRONT] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_TEST_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_FUNC_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_READ_MADK_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_WRITE_MASK_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_FAIL_OP_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_Z_FAIL_OP_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_PASS_OP_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.STENCIL_REF_BACK] = BufferDataType.UINT32, _depthStencilStateVie[DepthStencilStateView.COUNT] = BufferDataType.NEVER, _depthStencilStateVie);
            var DepthStencilStatePool = exports('cp', new BufferPool(PoolType.DEPTH_STENCIL_STATE, depthStencilStateViewDataType, DepthStencilStateView, 9));
            var BlendTargetView;

            (function (BlendTargetView) {
              BlendTargetView[BlendTargetView["BLEND"] = 0] = "BLEND";
              BlendTargetView[BlendTargetView["BLEND_SRC"] = 1] = "BLEND_SRC";
              BlendTargetView[BlendTargetView["BLEND_DST"] = 2] = "BLEND_DST";
              BlendTargetView[BlendTargetView["BLEND_EQ"] = 3] = "BLEND_EQ";
              BlendTargetView[BlendTargetView["BLEND_SRC_ALPHA"] = 4] = "BLEND_SRC_ALPHA";
              BlendTargetView[BlendTargetView["BLEND_DST_ALPHA"] = 5] = "BLEND_DST_ALPHA";
              BlendTargetView[BlendTargetView["BLEND_ALPHA_EQ"] = 6] = "BLEND_ALPHA_EQ";
              BlendTargetView[BlendTargetView["BLEND_COLOR_MASK"] = 7] = "BLEND_COLOR_MASK";
              BlendTargetView[BlendTargetView["COUNT"] = 8] = "COUNT";
            })(BlendTargetView || (BlendTargetView = exports('cq', {})));

            var blendTargetViewDataType = (_blendTargetViewDataT = {}, _blendTargetViewDataT[BlendTargetView.BLEND] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.BLEND_SRC] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.BLEND_DST] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.BLEND_EQ] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.BLEND_SRC_ALPHA] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.BLEND_DST_ALPHA] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.BLEND_ALPHA_EQ] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.BLEND_COLOR_MASK] = BufferDataType.UINT32, _blendTargetViewDataT[BlendTargetView.COUNT] = BufferDataType.NEVER, _blendTargetViewDataT);
            var BlendTargetPool = exports('cr', new BufferPool(PoolType.BLEND_TARGET, depthStencilStateViewDataType, BlendTargetView, 9));
            var BlendStateView;

            (function (BlendStateView) {
              BlendStateView[BlendStateView["IS_A2C"] = 0] = "IS_A2C";
              BlendStateView[BlendStateView["IS_INDEPEND"] = 1] = "IS_INDEPEND";
              BlendStateView[BlendStateView["BLEND_COLOR"] = 2] = "BLEND_COLOR";
              BlendStateView[BlendStateView["BLEND_TARGET"] = 6] = "BLEND_TARGET";
              BlendStateView[BlendStateView["COUNT"] = 7] = "COUNT";
            })(BlendStateView || (BlendStateView = exports('cs', {})));

            var blendStateViewDataType = (_blendStateViewDataTy = {}, _blendStateViewDataTy[BlendStateView.IS_A2C] = BufferDataType.UINT32, _blendStateViewDataTy[BlendStateView.IS_INDEPEND] = BufferDataType.UINT32, _blendStateViewDataTy[BlendStateView.BLEND_COLOR] = BufferDataType.FLOAT32, _blendStateViewDataTy[BlendStateView.BLEND_TARGET] = BufferDataType.UINT32, _blendStateViewDataTy[BlendStateView.COUNT] = BufferDataType.NEVER, _blendStateViewDataTy);
            var BlendStatePool = exports('ct', new BufferPool(PoolType.BLEND_STATE, blendStateViewDataType, BlendStateView, 9));

            var MAX_ATTACHMENTS = exports('Y', 4);
            var ObjectType;

            (function (ObjectType) {
              ObjectType[ObjectType["UNKNOWN"] = 0] = "UNKNOWN";
              ObjectType[ObjectType["BUFFER"] = 1] = "BUFFER";
              ObjectType[ObjectType["TEXTURE"] = 2] = "TEXTURE";
              ObjectType[ObjectType["RENDER_PASS"] = 3] = "RENDER_PASS";
              ObjectType[ObjectType["FRAMEBUFFER"] = 4] = "FRAMEBUFFER";
              ObjectType[ObjectType["SAMPLER"] = 5] = "SAMPLER";
              ObjectType[ObjectType["SHADER"] = 6] = "SHADER";
              ObjectType[ObjectType["DESCRIPTOR_SET_LAYOUT"] = 7] = "DESCRIPTOR_SET_LAYOUT";
              ObjectType[ObjectType["PIPELINE_LAYOUT"] = 8] = "PIPELINE_LAYOUT";
              ObjectType[ObjectType["PIPELINE_STATE"] = 9] = "PIPELINE_STATE";
              ObjectType[ObjectType["DESCRIPTOR_SET"] = 10] = "DESCRIPTOR_SET";
              ObjectType[ObjectType["INPUT_ASSEMBLER"] = 11] = "INPUT_ASSEMBLER";
              ObjectType[ObjectType["COMMAND_BUFFER"] = 12] = "COMMAND_BUFFER";
              ObjectType[ObjectType["FENCE"] = 13] = "FENCE";
              ObjectType[ObjectType["QUEUE"] = 14] = "QUEUE";
              ObjectType[ObjectType["WINDOW"] = 15] = "WINDOW";
            })(ObjectType || (ObjectType = exports('Z', {})));

            var Obj = exports('$', function () {
              _createClass(Obj, [{
                key: "gfxType",
                get: function get() {
                  return this._gfxType;
                }
              }]);

              function Obj(gfxType) {
                this._gfxType = ObjectType.UNKNOWN;
                this._gfxType = gfxType;
              }

              return Obj;
            }());
            var AttributeName;

            (function (AttributeName) {
              AttributeName["ATTR_POSITION"] = "a_position";
              AttributeName["ATTR_NORMAL"] = "a_normal";
              AttributeName["ATTR_TANGENT"] = "a_tangent";
              AttributeName["ATTR_BITANGENT"] = "a_bitangent";
              AttributeName["ATTR_WEIGHTS"] = "a_weights";
              AttributeName["ATTR_JOINTS"] = "a_joints";
              AttributeName["ATTR_COLOR"] = "a_color";
              AttributeName["ATTR_COLOR1"] = "a_color1";
              AttributeName["ATTR_COLOR2"] = "a_color2";
              AttributeName["ATTR_TEX_COORD"] = "a_texCoord";
              AttributeName["ATTR_TEX_COORD1"] = "a_texCoord1";
              AttributeName["ATTR_TEX_COORD2"] = "a_texCoord2";
              AttributeName["ATTR_TEX_COORD3"] = "a_texCoord3";
              AttributeName["ATTR_TEX_COORD4"] = "a_texCoord4";
              AttributeName["ATTR_TEX_COORD5"] = "a_texCoord5";
              AttributeName["ATTR_TEX_COORD6"] = "a_texCoord6";
              AttributeName["ATTR_TEX_COORD7"] = "a_texCoord7";
              AttributeName["ATTR_TEX_COORD8"] = "a_texCoord8";
              AttributeName["ATTR_BATCH_ID"] = "a_batch_id";
              AttributeName["ATTR_BATCH_UV"] = "a_batch_uv";
            })(AttributeName || (AttributeName = exports('a0', {})));

            var Type;

            (function (Type) {
              Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
              Type[Type["BOOL"] = 1] = "BOOL";
              Type[Type["BOOL2"] = 2] = "BOOL2";
              Type[Type["BOOL3"] = 3] = "BOOL3";
              Type[Type["BOOL4"] = 4] = "BOOL4";
              Type[Type["INT"] = 5] = "INT";
              Type[Type["INT2"] = 6] = "INT2";
              Type[Type["INT3"] = 7] = "INT3";
              Type[Type["INT4"] = 8] = "INT4";
              Type[Type["UINT"] = 9] = "UINT";
              Type[Type["UINT2"] = 10] = "UINT2";
              Type[Type["UINT3"] = 11] = "UINT3";
              Type[Type["UINT4"] = 12] = "UINT4";
              Type[Type["FLOAT"] = 13] = "FLOAT";
              Type[Type["FLOAT2"] = 14] = "FLOAT2";
              Type[Type["FLOAT3"] = 15] = "FLOAT3";
              Type[Type["FLOAT4"] = 16] = "FLOAT4";
              Type[Type["MAT2"] = 17] = "MAT2";
              Type[Type["MAT2X3"] = 18] = "MAT2X3";
              Type[Type["MAT2X4"] = 19] = "MAT2X4";
              Type[Type["MAT3X2"] = 20] = "MAT3X2";
              Type[Type["MAT3"] = 21] = "MAT3";
              Type[Type["MAT3X4"] = 22] = "MAT3X4";
              Type[Type["MAT4X2"] = 23] = "MAT4X2";
              Type[Type["MAT4X3"] = 24] = "MAT4X3";
              Type[Type["MAT4"] = 25] = "MAT4";
              Type[Type["SAMPLER1D"] = 26] = "SAMPLER1D";
              Type[Type["SAMPLER1D_ARRAY"] = 27] = "SAMPLER1D_ARRAY";
              Type[Type["SAMPLER2D"] = 28] = "SAMPLER2D";
              Type[Type["SAMPLER2D_ARRAY"] = 29] = "SAMPLER2D_ARRAY";
              Type[Type["SAMPLER3D"] = 30] = "SAMPLER3D";
              Type[Type["SAMPLER_CUBE"] = 31] = "SAMPLER_CUBE";
              Type[Type["COUNT"] = 32] = "COUNT";
            })(Type || (Type = exports('a1', {})));

            var Format;

            (function (Format) {
              Format[Format["UNKNOWN"] = 0] = "UNKNOWN";
              Format[Format["A8"] = 1] = "A8";
              Format[Format["L8"] = 2] = "L8";
              Format[Format["LA8"] = 3] = "LA8";
              Format[Format["R8"] = 4] = "R8";
              Format[Format["R8SN"] = 5] = "R8SN";
              Format[Format["R8UI"] = 6] = "R8UI";
              Format[Format["R8I"] = 7] = "R8I";
              Format[Format["R16F"] = 8] = "R16F";
              Format[Format["R16UI"] = 9] = "R16UI";
              Format[Format["R16I"] = 10] = "R16I";
              Format[Format["R32F"] = 11] = "R32F";
              Format[Format["R32UI"] = 12] = "R32UI";
              Format[Format["R32I"] = 13] = "R32I";
              Format[Format["RG8"] = 14] = "RG8";
              Format[Format["RG8SN"] = 15] = "RG8SN";
              Format[Format["RG8UI"] = 16] = "RG8UI";
              Format[Format["RG8I"] = 17] = "RG8I";
              Format[Format["RG16F"] = 18] = "RG16F";
              Format[Format["RG16UI"] = 19] = "RG16UI";
              Format[Format["RG16I"] = 20] = "RG16I";
              Format[Format["RG32F"] = 21] = "RG32F";
              Format[Format["RG32UI"] = 22] = "RG32UI";
              Format[Format["RG32I"] = 23] = "RG32I";
              Format[Format["RGB8"] = 24] = "RGB8";
              Format[Format["SRGB8"] = 25] = "SRGB8";
              Format[Format["RGB8SN"] = 26] = "RGB8SN";
              Format[Format["RGB8UI"] = 27] = "RGB8UI";
              Format[Format["RGB8I"] = 28] = "RGB8I";
              Format[Format["RGB16F"] = 29] = "RGB16F";
              Format[Format["RGB16UI"] = 30] = "RGB16UI";
              Format[Format["RGB16I"] = 31] = "RGB16I";
              Format[Format["RGB32F"] = 32] = "RGB32F";
              Format[Format["RGB32UI"] = 33] = "RGB32UI";
              Format[Format["RGB32I"] = 34] = "RGB32I";
              Format[Format["RGBA8"] = 35] = "RGBA8";
              Format[Format["BGRA8"] = 36] = "BGRA8";
              Format[Format["SRGB8_A8"] = 37] = "SRGB8_A8";
              Format[Format["RGBA8SN"] = 38] = "RGBA8SN";
              Format[Format["RGBA8UI"] = 39] = "RGBA8UI";
              Format[Format["RGBA8I"] = 40] = "RGBA8I";
              Format[Format["RGBA16F"] = 41] = "RGBA16F";
              Format[Format["RGBA16UI"] = 42] = "RGBA16UI";
              Format[Format["RGBA16I"] = 43] = "RGBA16I";
              Format[Format["RGBA32F"] = 44] = "RGBA32F";
              Format[Format["RGBA32UI"] = 45] = "RGBA32UI";
              Format[Format["RGBA32I"] = 46] = "RGBA32I";
              Format[Format["R5G6B5"] = 47] = "R5G6B5";
              Format[Format["R11G11B10F"] = 48] = "R11G11B10F";
              Format[Format["RGB5A1"] = 49] = "RGB5A1";
              Format[Format["RGBA4"] = 50] = "RGBA4";
              Format[Format["RGB10A2"] = 51] = "RGB10A2";
              Format[Format["RGB10A2UI"] = 52] = "RGB10A2UI";
              Format[Format["RGB9E5"] = 53] = "RGB9E5";
              Format[Format["D16"] = 54] = "D16";
              Format[Format["D16S8"] = 55] = "D16S8";
              Format[Format["D24"] = 56] = "D24";
              Format[Format["D24S8"] = 57] = "D24S8";
              Format[Format["D32F"] = 58] = "D32F";
              Format[Format["D32F_S8"] = 59] = "D32F_S8";
              Format[Format["BC1"] = 60] = "BC1";
              Format[Format["BC1_ALPHA"] = 61] = "BC1_ALPHA";
              Format[Format["BC1_SRGB"] = 62] = "BC1_SRGB";
              Format[Format["BC1_SRGB_ALPHA"] = 63] = "BC1_SRGB_ALPHA";
              Format[Format["BC2"] = 64] = "BC2";
              Format[Format["BC2_SRGB"] = 65] = "BC2_SRGB";
              Format[Format["BC3"] = 66] = "BC3";
              Format[Format["BC3_SRGB"] = 67] = "BC3_SRGB";
              Format[Format["BC4"] = 68] = "BC4";
              Format[Format["BC4_SNORM"] = 69] = "BC4_SNORM";
              Format[Format["BC5"] = 70] = "BC5";
              Format[Format["BC5_SNORM"] = 71] = "BC5_SNORM";
              Format[Format["BC6H_UF16"] = 72] = "BC6H_UF16";
              Format[Format["BC6H_SF16"] = 73] = "BC6H_SF16";
              Format[Format["BC7"] = 74] = "BC7";
              Format[Format["BC7_SRGB"] = 75] = "BC7_SRGB";
              Format[Format["ETC_RGB8"] = 76] = "ETC_RGB8";
              Format[Format["ETC2_RGB8"] = 77] = "ETC2_RGB8";
              Format[Format["ETC2_SRGB8"] = 78] = "ETC2_SRGB8";
              Format[Format["ETC2_RGB8_A1"] = 79] = "ETC2_RGB8_A1";
              Format[Format["ETC2_SRGB8_A1"] = 80] = "ETC2_SRGB8_A1";
              Format[Format["ETC2_RGBA8"] = 81] = "ETC2_RGBA8";
              Format[Format["ETC2_SRGB8_A8"] = 82] = "ETC2_SRGB8_A8";
              Format[Format["EAC_R11"] = 83] = "EAC_R11";
              Format[Format["EAC_R11SN"] = 84] = "EAC_R11SN";
              Format[Format["EAC_RG11"] = 85] = "EAC_RG11";
              Format[Format["EAC_RG11SN"] = 86] = "EAC_RG11SN";
              Format[Format["PVRTC_RGB2"] = 87] = "PVRTC_RGB2";
              Format[Format["PVRTC_RGBA2"] = 88] = "PVRTC_RGBA2";
              Format[Format["PVRTC_RGB4"] = 89] = "PVRTC_RGB4";
              Format[Format["PVRTC_RGBA4"] = 90] = "PVRTC_RGBA4";
              Format[Format["PVRTC2_2BPP"] = 91] = "PVRTC2_2BPP";
              Format[Format["PVRTC2_4BPP"] = 92] = "PVRTC2_4BPP";
              Format[Format["ASTC_RGBA_4x4"] = 93] = "ASTC_RGBA_4x4";
              Format[Format["ASTC_RGBA_5x4"] = 94] = "ASTC_RGBA_5x4";
              Format[Format["ASTC_RGBA_5x5"] = 95] = "ASTC_RGBA_5x5";
              Format[Format["ASTC_RGBA_6x5"] = 96] = "ASTC_RGBA_6x5";
              Format[Format["ASTC_RGBA_6x6"] = 97] = "ASTC_RGBA_6x6";
              Format[Format["ASTC_RGBA_8x5"] = 98] = "ASTC_RGBA_8x5";
              Format[Format["ASTC_RGBA_8x6"] = 99] = "ASTC_RGBA_8x6";
              Format[Format["ASTC_RGBA_8x8"] = 100] = "ASTC_RGBA_8x8";
              Format[Format["ASTC_RGBA_10x5"] = 101] = "ASTC_RGBA_10x5";
              Format[Format["ASTC_RGBA_10x6"] = 102] = "ASTC_RGBA_10x6";
              Format[Format["ASTC_RGBA_10x8"] = 103] = "ASTC_RGBA_10x8";
              Format[Format["ASTC_RGBA_10x10"] = 104] = "ASTC_RGBA_10x10";
              Format[Format["ASTC_RGBA_12x10"] = 105] = "ASTC_RGBA_12x10";
              Format[Format["ASTC_RGBA_12x12"] = 106] = "ASTC_RGBA_12x12";
              Format[Format["ASTC_SRGBA_4x4"] = 107] = "ASTC_SRGBA_4x4";
              Format[Format["ASTC_SRGBA_5x4"] = 108] = "ASTC_SRGBA_5x4";
              Format[Format["ASTC_SRGBA_5x5"] = 109] = "ASTC_SRGBA_5x5";
              Format[Format["ASTC_SRGBA_6x5"] = 110] = "ASTC_SRGBA_6x5";
              Format[Format["ASTC_SRGBA_6x6"] = 111] = "ASTC_SRGBA_6x6";
              Format[Format["ASTC_SRGBA_8x5"] = 112] = "ASTC_SRGBA_8x5";
              Format[Format["ASTC_SRGBA_8x6"] = 113] = "ASTC_SRGBA_8x6";
              Format[Format["ASTC_SRGBA_8x8"] = 114] = "ASTC_SRGBA_8x8";
              Format[Format["ASTC_SRGBA_10x5"] = 115] = "ASTC_SRGBA_10x5";
              Format[Format["ASTC_SRGBA_10x6"] = 116] = "ASTC_SRGBA_10x6";
              Format[Format["ASTC_SRGBA_10x8"] = 117] = "ASTC_SRGBA_10x8";
              Format[Format["ASTC_SRGBA_10x10"] = 118] = "ASTC_SRGBA_10x10";
              Format[Format["ASTC_SRGBA_12x10"] = 119] = "ASTC_SRGBA_12x10";
              Format[Format["ASTC_SRGBA_12x12"] = 120] = "ASTC_SRGBA_12x12";
            })(Format || (Format = exports('a2', {})));

            var BufferUsageBit;

            (function (BufferUsageBit) {
              BufferUsageBit[BufferUsageBit["NONE"] = 0] = "NONE";
              BufferUsageBit[BufferUsageBit["TRANSFER_SRC"] = 1] = "TRANSFER_SRC";
              BufferUsageBit[BufferUsageBit["TRANSFER_DST"] = 2] = "TRANSFER_DST";
              BufferUsageBit[BufferUsageBit["INDEX"] = 4] = "INDEX";
              BufferUsageBit[BufferUsageBit["VERTEX"] = 8] = "VERTEX";
              BufferUsageBit[BufferUsageBit["UNIFORM"] = 16] = "UNIFORM";
              BufferUsageBit[BufferUsageBit["STORAGE"] = 32] = "STORAGE";
              BufferUsageBit[BufferUsageBit["INDIRECT"] = 64] = "INDIRECT";
            })(BufferUsageBit || (BufferUsageBit = exports('a3', {})));

            var MemoryUsageBit;

            (function (MemoryUsageBit) {
              MemoryUsageBit[MemoryUsageBit["NONE"] = 0] = "NONE";
              MemoryUsageBit[MemoryUsageBit["DEVICE"] = 1] = "DEVICE";
              MemoryUsageBit[MemoryUsageBit["HOST"] = 2] = "HOST";
            })(MemoryUsageBit || (MemoryUsageBit = exports('a4', {})));

            var BufferFlagBit;

            (function (BufferFlagBit) {
              BufferFlagBit[BufferFlagBit["NONE"] = 0] = "NONE";
              BufferFlagBit[BufferFlagBit["BAKUP_BUFFER"] = 4] = "BAKUP_BUFFER";
            })(BufferFlagBit || (BufferFlagBit = exports('a5', {})));

            var BufferAccessBit;

            (function (BufferAccessBit) {
              BufferAccessBit[BufferAccessBit["NONE"] = 0] = "NONE";
              BufferAccessBit[BufferAccessBit["READ"] = 1] = "READ";
              BufferAccessBit[BufferAccessBit["WRITE"] = 2] = "WRITE";
            })(BufferAccessBit || (BufferAccessBit = exports('a6', {})));

            var PrimitiveMode;

            (function (PrimitiveMode) {
              PrimitiveMode[PrimitiveMode["POINT_LIST"] = 0] = "POINT_LIST";
              PrimitiveMode[PrimitiveMode["LINE_LIST"] = 1] = "LINE_LIST";
              PrimitiveMode[PrimitiveMode["LINE_STRIP"] = 2] = "LINE_STRIP";
              PrimitiveMode[PrimitiveMode["LINE_LOOP"] = 3] = "LINE_LOOP";
              PrimitiveMode[PrimitiveMode["LINE_LIST_ADJACENCY"] = 4] = "LINE_LIST_ADJACENCY";
              PrimitiveMode[PrimitiveMode["LINE_STRIP_ADJACENCY"] = 5] = "LINE_STRIP_ADJACENCY";
              PrimitiveMode[PrimitiveMode["ISO_LINE_LIST"] = 6] = "ISO_LINE_LIST";
              PrimitiveMode[PrimitiveMode["TRIANGLE_LIST"] = 7] = "TRIANGLE_LIST";
              PrimitiveMode[PrimitiveMode["TRIANGLE_STRIP"] = 8] = "TRIANGLE_STRIP";
              PrimitiveMode[PrimitiveMode["TRIANGLE_FAN"] = 9] = "TRIANGLE_FAN";
              PrimitiveMode[PrimitiveMode["TRIANGLE_LIST_ADJACENCY"] = 10] = "TRIANGLE_LIST_ADJACENCY";
              PrimitiveMode[PrimitiveMode["TRIANGLE_STRIP_ADJACENCY"] = 11] = "TRIANGLE_STRIP_ADJACENCY";
              PrimitiveMode[PrimitiveMode["TRIANGLE_PATCH_ADJACENCY"] = 12] = "TRIANGLE_PATCH_ADJACENCY";
              PrimitiveMode[PrimitiveMode["QUAD_PATCH_LIST"] = 13] = "QUAD_PATCH_LIST";
            })(PrimitiveMode || (PrimitiveMode = exports('a7', {})));

            var PolygonMode;

            (function (PolygonMode) {
              PolygonMode[PolygonMode["FILL"] = 0] = "FILL";
              PolygonMode[PolygonMode["POINT"] = 1] = "POINT";
              PolygonMode[PolygonMode["LINE"] = 2] = "LINE";
            })(PolygonMode || (PolygonMode = exports('a8', {})));

            var ShadeModel;

            (function (ShadeModel) {
              ShadeModel[ShadeModel["GOURAND"] = 0] = "GOURAND";
              ShadeModel[ShadeModel["FLAT"] = 1] = "FLAT";
            })(ShadeModel || (ShadeModel = exports('a9', {})));

            var CullMode;

            (function (CullMode) {
              CullMode[CullMode["NONE"] = 0] = "NONE";
              CullMode[CullMode["FRONT"] = 1] = "FRONT";
              CullMode[CullMode["BACK"] = 2] = "BACK";
            })(CullMode || (CullMode = exports('aa', {})));

            var ComparisonFunc;

            (function (ComparisonFunc) {
              ComparisonFunc[ComparisonFunc["NEVER"] = 0] = "NEVER";
              ComparisonFunc[ComparisonFunc["LESS"] = 1] = "LESS";
              ComparisonFunc[ComparisonFunc["EQUAL"] = 2] = "EQUAL";
              ComparisonFunc[ComparisonFunc["LESS_EQUAL"] = 3] = "LESS_EQUAL";
              ComparisonFunc[ComparisonFunc["GREATER"] = 4] = "GREATER";
              ComparisonFunc[ComparisonFunc["NOT_EQUAL"] = 5] = "NOT_EQUAL";
              ComparisonFunc[ComparisonFunc["GREATER_EQUAL"] = 6] = "GREATER_EQUAL";
              ComparisonFunc[ComparisonFunc["ALWAYS"] = 7] = "ALWAYS";
            })(ComparisonFunc || (ComparisonFunc = exports('ab', {})));

            var StencilOp;

            (function (StencilOp) {
              StencilOp[StencilOp["ZERO"] = 0] = "ZERO";
              StencilOp[StencilOp["KEEP"] = 1] = "KEEP";
              StencilOp[StencilOp["REPLACE"] = 2] = "REPLACE";
              StencilOp[StencilOp["INCR"] = 3] = "INCR";
              StencilOp[StencilOp["DECR"] = 4] = "DECR";
              StencilOp[StencilOp["INVERT"] = 5] = "INVERT";
              StencilOp[StencilOp["INCR_WRAP"] = 6] = "INCR_WRAP";
              StencilOp[StencilOp["DECR_WRAP"] = 7] = "DECR_WRAP";
            })(StencilOp || (StencilOp = exports('ac', {})));

            var BlendOp;

            (function (BlendOp) {
              BlendOp[BlendOp["ADD"] = 0] = "ADD";
              BlendOp[BlendOp["SUB"] = 1] = "SUB";
              BlendOp[BlendOp["REV_SUB"] = 2] = "REV_SUB";
              BlendOp[BlendOp["MIN"] = 3] = "MIN";
              BlendOp[BlendOp["MAX"] = 4] = "MAX";
            })(BlendOp || (BlendOp = exports('ad', {})));

            var BlendFactor;

            (function (BlendFactor) {
              BlendFactor[BlendFactor["ZERO"] = 0] = "ZERO";
              BlendFactor[BlendFactor["ONE"] = 1] = "ONE";
              BlendFactor[BlendFactor["SRC_ALPHA"] = 2] = "SRC_ALPHA";
              BlendFactor[BlendFactor["DST_ALPHA"] = 3] = "DST_ALPHA";
              BlendFactor[BlendFactor["ONE_MINUS_SRC_ALPHA"] = 4] = "ONE_MINUS_SRC_ALPHA";
              BlendFactor[BlendFactor["ONE_MINUS_DST_ALPHA"] = 5] = "ONE_MINUS_DST_ALPHA";
              BlendFactor[BlendFactor["SRC_COLOR"] = 6] = "SRC_COLOR";
              BlendFactor[BlendFactor["DST_COLOR"] = 7] = "DST_COLOR";
              BlendFactor[BlendFactor["ONE_MINUS_SRC_COLOR"] = 8] = "ONE_MINUS_SRC_COLOR";
              BlendFactor[BlendFactor["ONE_MINUS_DST_COLOR"] = 9] = "ONE_MINUS_DST_COLOR";
              BlendFactor[BlendFactor["SRC_ALPHA_SATURATE"] = 10] = "SRC_ALPHA_SATURATE";
              BlendFactor[BlendFactor["CONSTANT_COLOR"] = 11] = "CONSTANT_COLOR";
              BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_COLOR"] = 12] = "ONE_MINUS_CONSTANT_COLOR";
              BlendFactor[BlendFactor["CONSTANT_ALPHA"] = 13] = "CONSTANT_ALPHA";
              BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_ALPHA"] = 14] = "ONE_MINUS_CONSTANT_ALPHA";
            })(BlendFactor || (BlendFactor = exports('ae', {})));

            var ColorMask;

            (function (ColorMask) {
              ColorMask[ColorMask["NONE"] = 0] = "NONE";
              ColorMask[ColorMask["R"] = 1] = "R";
              ColorMask[ColorMask["G"] = 2] = "G";
              ColorMask[ColorMask["B"] = 4] = "B";
              ColorMask[ColorMask["A"] = 8] = "A";
              ColorMask[ColorMask["ALL"] = 15] = "ALL";
            })(ColorMask || (ColorMask = exports('af', {})));

            var Filter;

            (function (Filter) {
              Filter[Filter["NONE"] = 0] = "NONE";
              Filter[Filter["POINT"] = 1] = "POINT";
              Filter[Filter["LINEAR"] = 2] = "LINEAR";
              Filter[Filter["ANISOTROPIC"] = 3] = "ANISOTROPIC";
            })(Filter || (Filter = exports('ag', {})));

            var Address;

            (function (Address) {
              Address[Address["WRAP"] = 0] = "WRAP";
              Address[Address["MIRROR"] = 1] = "MIRROR";
              Address[Address["CLAMP"] = 2] = "CLAMP";
              Address[Address["BORDER"] = 3] = "BORDER";
            })(Address || (Address = exports('ah', {})));

            var TextureType;

            (function (TextureType) {
              TextureType[TextureType["TEX1D"] = 0] = "TEX1D";
              TextureType[TextureType["TEX2D"] = 1] = "TEX2D";
              TextureType[TextureType["TEX3D"] = 2] = "TEX3D";
              TextureType[TextureType["CUBE"] = 3] = "CUBE";
              TextureType[TextureType["TEX1D_ARRAY"] = 4] = "TEX1D_ARRAY";
              TextureType[TextureType["TEX2D_ARRAY"] = 5] = "TEX2D_ARRAY";
            })(TextureType || (TextureType = exports('ai', {})));

            var TextureUsageBit;

            (function (TextureUsageBit) {
              TextureUsageBit[TextureUsageBit["NONE"] = 0] = "NONE";
              TextureUsageBit[TextureUsageBit["TRANSFER_SRC"] = 1] = "TRANSFER_SRC";
              TextureUsageBit[TextureUsageBit["TRANSFER_DST"] = 2] = "TRANSFER_DST";
              TextureUsageBit[TextureUsageBit["SAMPLED"] = 4] = "SAMPLED";
              TextureUsageBit[TextureUsageBit["STORAGE"] = 8] = "STORAGE";
              TextureUsageBit[TextureUsageBit["COLOR_ATTACHMENT"] = 16] = "COLOR_ATTACHMENT";
              TextureUsageBit[TextureUsageBit["DEPTH_STENCIL_ATTACHMENT"] = 32] = "DEPTH_STENCIL_ATTACHMENT";
              TextureUsageBit[TextureUsageBit["TRANSIENT_ATTACHMENT"] = 64] = "TRANSIENT_ATTACHMENT";
              TextureUsageBit[TextureUsageBit["INPUT_ATTACHMENT"] = 128] = "INPUT_ATTACHMENT";
            })(TextureUsageBit || (TextureUsageBit = exports('aj', {})));

            var SampleCount;

            (function (SampleCount) {
              SampleCount[SampleCount["X1"] = 0] = "X1";
              SampleCount[SampleCount["X2"] = 1] = "X2";
              SampleCount[SampleCount["X4"] = 2] = "X4";
              SampleCount[SampleCount["X8"] = 3] = "X8";
              SampleCount[SampleCount["X16"] = 4] = "X16";
              SampleCount[SampleCount["X32"] = 5] = "X32";
              SampleCount[SampleCount["X64"] = 6] = "X64";
            })(SampleCount || (SampleCount = exports('ak', {})));

            var TextureFlagBit;

            (function (TextureFlagBit) {
              TextureFlagBit[TextureFlagBit["NONE"] = 0] = "NONE";
              TextureFlagBit[TextureFlagBit["GEN_MIPMAP"] = 1] = "GEN_MIPMAP";
              TextureFlagBit[TextureFlagBit["CUBEMAP"] = 2] = "CUBEMAP";
              TextureFlagBit[TextureFlagBit["BAKUP_BUFFER"] = 4] = "BAKUP_BUFFER";
              TextureFlagBit[TextureFlagBit["IMMUTABLE"] = 8] = "IMMUTABLE";
            })(TextureFlagBit || (TextureFlagBit = exports('al', {})));

            var ShaderStageFlagBit;

            (function (ShaderStageFlagBit) {
              ShaderStageFlagBit[ShaderStageFlagBit["NONE"] = 0] = "NONE";
              ShaderStageFlagBit[ShaderStageFlagBit["VERTEX"] = 1] = "VERTEX";
              ShaderStageFlagBit[ShaderStageFlagBit["CONTROL"] = 2] = "CONTROL";
              ShaderStageFlagBit[ShaderStageFlagBit["EVALUATION"] = 4] = "EVALUATION";
              ShaderStageFlagBit[ShaderStageFlagBit["GEOMETRY"] = 8] = "GEOMETRY";
              ShaderStageFlagBit[ShaderStageFlagBit["FRAGMENT"] = 16] = "FRAGMENT";
              ShaderStageFlagBit[ShaderStageFlagBit["COMPUTE"] = 32] = "COMPUTE";
              ShaderStageFlagBit[ShaderStageFlagBit["ALL"] = 63] = "ALL";
            })(ShaderStageFlagBit || (ShaderStageFlagBit = exports('am', {})));

            var DescriptorType;

            (function (DescriptorType) {
              DescriptorType[DescriptorType["UNKNOWN"] = 0] = "UNKNOWN";
              DescriptorType[DescriptorType["UNIFORM_BUFFER"] = 1] = "UNIFORM_BUFFER";
              DescriptorType[DescriptorType["DYNAMIC_UNIFORM_BUFFER"] = 2] = "DYNAMIC_UNIFORM_BUFFER";
              DescriptorType[DescriptorType["STORAGE_BUFFER"] = 4] = "STORAGE_BUFFER";
              DescriptorType[DescriptorType["DYNAMIC_STORAGE_BUFFER"] = 8] = "DYNAMIC_STORAGE_BUFFER";
              DescriptorType[DescriptorType["SAMPLER"] = 16] = "SAMPLER";
            })(DescriptorType || (DescriptorType = exports('an', {})));

            var CommandBufferType;

            (function (CommandBufferType) {
              CommandBufferType[CommandBufferType["PRIMARY"] = 0] = "PRIMARY";
              CommandBufferType[CommandBufferType["SECONDARY"] = 1] = "SECONDARY";
            })(CommandBufferType || (CommandBufferType = exports('ao', {})));

            var LoadOp;

            (function (LoadOp) {
              LoadOp[LoadOp["LOAD"] = 0] = "LOAD";
              LoadOp[LoadOp["CLEAR"] = 1] = "CLEAR";
              LoadOp[LoadOp["DISCARD"] = 2] = "DISCARD";
            })(LoadOp || (LoadOp = exports('ap', {})));

            var StoreOp;

            (function (StoreOp) {
              StoreOp[StoreOp["STORE"] = 0] = "STORE";
              StoreOp[StoreOp["DISCARD"] = 1] = "DISCARD";
            })(StoreOp || (StoreOp = exports('aq', {})));

            var TextureLayout;

            (function (TextureLayout) {
              TextureLayout[TextureLayout["UNDEFINED"] = 0] = "UNDEFINED";
              TextureLayout[TextureLayout["GENERAL"] = 1] = "GENERAL";
              TextureLayout[TextureLayout["COLOR_ATTACHMENT_OPTIMAL"] = 2] = "COLOR_ATTACHMENT_OPTIMAL";
              TextureLayout[TextureLayout["DEPTH_STENCIL_ATTACHMENT_OPTIMAL"] = 3] = "DEPTH_STENCIL_ATTACHMENT_OPTIMAL";
              TextureLayout[TextureLayout["DEPTH_STENCIL_READONLY_OPTIMAL"] = 4] = "DEPTH_STENCIL_READONLY_OPTIMAL";
              TextureLayout[TextureLayout["SHADER_READONLY_OPTIMAL"] = 5] = "SHADER_READONLY_OPTIMAL";
              TextureLayout[TextureLayout["TRANSFER_SRC_OPTIMAL"] = 6] = "TRANSFER_SRC_OPTIMAL";
              TextureLayout[TextureLayout["TRANSFER_DST_OPTIMAL"] = 7] = "TRANSFER_DST_OPTIMAL";
              TextureLayout[TextureLayout["PREINITIALIZED"] = 8] = "PREINITIALIZED";
              TextureLayout[TextureLayout["PRESENT_SRC"] = 9] = "PRESENT_SRC";
            })(TextureLayout || (TextureLayout = exports('ar', {})));

            var PipelineBindPoint;

            (function (PipelineBindPoint) {
              PipelineBindPoint[PipelineBindPoint["GRAPHICS"] = 0] = "GRAPHICS";
              PipelineBindPoint[PipelineBindPoint["COMPUTE"] = 1] = "COMPUTE";
              PipelineBindPoint[PipelineBindPoint["RAY_TRACING"] = 2] = "RAY_TRACING";
            })(PipelineBindPoint || (PipelineBindPoint = exports('as', {})));

            var DynamicStateFlagBit;

            (function (DynamicStateFlagBit) {
              DynamicStateFlagBit[DynamicStateFlagBit["NONE"] = 0] = "NONE";
              DynamicStateFlagBit[DynamicStateFlagBit["VIEWPORT"] = 1] = "VIEWPORT";
              DynamicStateFlagBit[DynamicStateFlagBit["SCISSOR"] = 2] = "SCISSOR";
              DynamicStateFlagBit[DynamicStateFlagBit["LINE_WIDTH"] = 4] = "LINE_WIDTH";
              DynamicStateFlagBit[DynamicStateFlagBit["DEPTH_BIAS"] = 8] = "DEPTH_BIAS";
              DynamicStateFlagBit[DynamicStateFlagBit["BLEND_CONSTANTS"] = 16] = "BLEND_CONSTANTS";
              DynamicStateFlagBit[DynamicStateFlagBit["DEPTH_BOUNDS"] = 32] = "DEPTH_BOUNDS";
              DynamicStateFlagBit[DynamicStateFlagBit["STENCIL_WRITE_MASK"] = 64] = "STENCIL_WRITE_MASK";
              DynamicStateFlagBit[DynamicStateFlagBit["STENCIL_COMPARE_MASK"] = 128] = "STENCIL_COMPARE_MASK";
            })(DynamicStateFlagBit || (DynamicStateFlagBit = exports('at', {})));

            var StencilFace;

            (function (StencilFace) {
              StencilFace[StencilFace["FRONT"] = 0] = "FRONT";
              StencilFace[StencilFace["BACK"] = 1] = "BACK";
              StencilFace[StencilFace["ALL"] = 2] = "ALL";
            })(StencilFace || (StencilFace = exports('au', {})));

            var QueueType;

            (function (QueueType) {
              QueueType[QueueType["GRAPHICS"] = 0] = "GRAPHICS";
              QueueType[QueueType["COMPUTE"] = 1] = "COMPUTE";
              QueueType[QueueType["TRANSFER"] = 2] = "TRANSFER";
            })(QueueType || (QueueType = exports('av', {})));

            var ClearFlag;

            (function (ClearFlag) {
              ClearFlag[ClearFlag["NONE"] = 0] = "NONE";
              ClearFlag[ClearFlag["COLOR"] = 1] = "COLOR";
              ClearFlag[ClearFlag["DEPTH"] = 2] = "DEPTH";
              ClearFlag[ClearFlag["STENCIL"] = 4] = "STENCIL";
              ClearFlag[ClearFlag["DEPTH_STENCIL"] = 6] = "DEPTH_STENCIL";
              ClearFlag[ClearFlag["ALL"] = 7] = "ALL";
            })(ClearFlag || (ClearFlag = exports('aw', {})));

            var FormatType;

            (function (FormatType) {
              FormatType[FormatType["NONE"] = 0] = "NONE";
              FormatType[FormatType["UNORM"] = 1] = "UNORM";
              FormatType[FormatType["SNORM"] = 2] = "SNORM";
              FormatType[FormatType["UINT"] = 3] = "UINT";
              FormatType[FormatType["INT"] = 4] = "INT";
              FormatType[FormatType["UFLOAT"] = 5] = "UFLOAT";
              FormatType[FormatType["FLOAT"] = 6] = "FLOAT";
            })(FormatType || (FormatType = exports('ax', {})));

            var API;

            (function (API) {
              API[API["UNKNOWN"] = 0] = "UNKNOWN";
              API[API["GLES2"] = 1] = "GLES2";
              API[API["GLES3"] = 2] = "GLES3";
              API[API["METAL"] = 3] = "METAL";
              API[API["VULKAN"] = 4] = "VULKAN";
              API[API["WEBGL"] = 5] = "WEBGL";
              API[API["WEBGL2"] = 6] = "WEBGL2";
              API[API["WEBGPU"] = 7] = "WEBGPU";
            })(API || (API = exports('ay', {})));

            var SurfaceTransform;

            (function (SurfaceTransform) {
              SurfaceTransform[SurfaceTransform["IDENTITY"] = 0] = "IDENTITY";
              SurfaceTransform[SurfaceTransform["ROTATE_90"] = 1] = "ROTATE_90";
              SurfaceTransform[SurfaceTransform["ROTATE_180"] = 2] = "ROTATE_180";
              SurfaceTransform[SurfaceTransform["ROTATE_270"] = 3] = "ROTATE_270";
            })(SurfaceTransform || (SurfaceTransform = exports('az', {})));

            var Feature;

            (function (Feature) {
              Feature[Feature["COLOR_FLOAT"] = 0] = "COLOR_FLOAT";
              Feature[Feature["COLOR_HALF_FLOAT"] = 1] = "COLOR_HALF_FLOAT";
              Feature[Feature["TEXTURE_FLOAT"] = 2] = "TEXTURE_FLOAT";
              Feature[Feature["TEXTURE_HALF_FLOAT"] = 3] = "TEXTURE_HALF_FLOAT";
              Feature[Feature["TEXTURE_FLOAT_LINEAR"] = 4] = "TEXTURE_FLOAT_LINEAR";
              Feature[Feature["TEXTURE_HALF_FLOAT_LINEAR"] = 5] = "TEXTURE_HALF_FLOAT_LINEAR";
              Feature[Feature["FORMAT_R11G11B10F"] = 6] = "FORMAT_R11G11B10F";
              Feature[Feature["FORMAT_D16"] = 7] = "FORMAT_D16";
              Feature[Feature["FORMAT_D16S8"] = 8] = "FORMAT_D16S8";
              Feature[Feature["FORMAT_D24"] = 9] = "FORMAT_D24";
              Feature[Feature["FORMAT_D24S8"] = 10] = "FORMAT_D24S8";
              Feature[Feature["FORMAT_D32F"] = 11] = "FORMAT_D32F";
              Feature[Feature["FORMAT_D32FS8"] = 12] = "FORMAT_D32FS8";
              Feature[Feature["FORMAT_ETC1"] = 13] = "FORMAT_ETC1";
              Feature[Feature["FORMAT_ETC2"] = 14] = "FORMAT_ETC2";
              Feature[Feature["FORMAT_DXT"] = 15] = "FORMAT_DXT";
              Feature[Feature["FORMAT_PVRTC"] = 16] = "FORMAT_PVRTC";
              Feature[Feature["FORMAT_ASTC"] = 17] = "FORMAT_ASTC";
              Feature[Feature["FORMAT_RGB8"] = 18] = "FORMAT_RGB8";
              Feature[Feature["MSAA"] = 19] = "MSAA";
              Feature[Feature["ELEMENT_INDEX_UINT"] = 20] = "ELEMENT_INDEX_UINT";
              Feature[Feature["INSTANCED_ARRAYS"] = 21] = "INSTANCED_ARRAYS";
              Feature[Feature["MULTIPLE_RENDER_TARGETS"] = 22] = "MULTIPLE_RENDER_TARGETS";
              Feature[Feature["BLEND_MINMAX"] = 23] = "BLEND_MINMAX";
              Feature[Feature["DEPTH_BOUNDS"] = 24] = "DEPTH_BOUNDS";
              Feature[Feature["LINE_WIDTH"] = 25] = "LINE_WIDTH";
              Feature[Feature["STENCIL_WRITE_MASK"] = 26] = "STENCIL_WRITE_MASK";
              Feature[Feature["STENCIL_COMPARE_MASK"] = 27] = "STENCIL_COMPARE_MASK";
              Feature[Feature["COUNT"] = 28] = "COUNT";
            })(Feature || (Feature = exports('aA', {})));

            var FormatInfo = exports('aB', function FormatInfo(name, size, count, type, hasAlpha, hasDepth, hasStencil, isCompressed) {
              this.name = name;
              this.size = size;
              this.count = count;
              this.type = type;
              this.hasAlpha = hasAlpha;
              this.hasDepth = hasDepth;
              this.hasStencil = hasStencil;
              this.isCompressed = isCompressed;
            });
            var MemoryStatus = exports('aC', function MemoryStatus(bufferSize, textureSize) {
              if (bufferSize === void 0) {
                bufferSize = 0;
              }

              if (textureSize === void 0) {
                textureSize = 0;
              }

              this.bufferSize = bufferSize;
              this.textureSize = textureSize;
            });
            var FormatInfos = exports('aD', Object.freeze([new FormatInfo('UNKNOWN', 0, 0, FormatType.NONE, false, false, false, false), new FormatInfo('A8', 1, 1, FormatType.UNORM, true, false, false, false), new FormatInfo('L8', 1, 1, FormatType.UNORM, false, false, false, false), new FormatInfo('LA8', 1, 2, FormatType.UNORM, true, false, false, false), new FormatInfo('R8', 1, 1, FormatType.UNORM, false, false, false, false), new FormatInfo('R8SN', 1, 1, FormatType.SNORM, false, false, false, false), new FormatInfo('R8UI', 1, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R8I', 1, 1, FormatType.INT, false, false, false, false), new FormatInfo('R16F', 2, 1, FormatType.FLOAT, false, false, false, false), new FormatInfo('R16UI', 2, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R16I', 2, 1, FormatType.INT, false, false, false, false), new FormatInfo('R32F', 4, 1, FormatType.FLOAT, false, false, false, false), new FormatInfo('R32UI', 4, 1, FormatType.UINT, false, false, false, false), new FormatInfo('R32I', 4, 1, FormatType.INT, false, false, false, false), new FormatInfo('RG8', 2, 2, FormatType.UNORM, false, false, false, false), new FormatInfo('RG8SN', 2, 2, FormatType.SNORM, false, false, false, false), new FormatInfo('RG8UI', 2, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG8I', 2, 2, FormatType.INT, false, false, false, false), new FormatInfo('RG16F', 4, 2, FormatType.FLOAT, false, false, false, false), new FormatInfo('RG16UI', 4, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG16I', 4, 2, FormatType.INT, false, false, false, false), new FormatInfo('RG32F', 8, 2, FormatType.FLOAT, false, false, false, false), new FormatInfo('RG32UI', 8, 2, FormatType.UINT, false, false, false, false), new FormatInfo('RG32I', 8, 2, FormatType.INT, false, false, false, false), new FormatInfo('RGB8', 3, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('SRGB8', 3, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('RGB8SN', 3, 3, FormatType.SNORM, false, false, false, false), new FormatInfo('RGB8UI', 3, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB8I', 3, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGB16F', 6, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB16UI', 6, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB16I', 6, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGB32F', 12, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB32UI', 12, 3, FormatType.UINT, false, false, false, false), new FormatInfo('RGB32I', 12, 3, FormatType.INT, false, false, false, false), new FormatInfo('RGBA8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('BGRA8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('SRGB8_A8', 4, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGBA8SN', 4, 4, FormatType.SNORM, true, false, false, false), new FormatInfo('RGBA8UI', 4, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA8I', 4, 4, FormatType.INT, true, false, false, false), new FormatInfo('RGBA16F', 8, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('RGBA16UI', 8, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA16I', 8, 4, FormatType.INT, true, false, false, false), new FormatInfo('RGBA32F', 16, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('RGBA32UI', 16, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGBA32I', 16, 4, FormatType.INT, true, false, false, false), new FormatInfo('R5G6B5', 2, 3, FormatType.UNORM, false, false, false, false), new FormatInfo('R11G11B10F', 4, 3, FormatType.FLOAT, false, false, false, false), new FormatInfo('RGB5A1', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGBA4', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGB10A2', 2, 4, FormatType.UNORM, true, false, false, false), new FormatInfo('RGB10A2UI', 2, 4, FormatType.UINT, true, false, false, false), new FormatInfo('RGB9E5', 2, 4, FormatType.FLOAT, true, false, false, false), new FormatInfo('D16', 2, 1, FormatType.UINT, false, true, false, false), new FormatInfo('D16S8', 3, 2, FormatType.UINT, false, true, true, false), new FormatInfo('D24', 3, 1, FormatType.UINT, false, true, false, false), new FormatInfo('D24S8', 4, 2, FormatType.UINT, false, true, true, false), new FormatInfo('D32F', 4, 1, FormatType.FLOAT, false, true, false, false), new FormatInfo('D32FS8', 5, 2, FormatType.FLOAT, false, true, true, false), new FormatInfo('BC1', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('BC1_ALPHA', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC1_SRGB', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('BC1_SRGB_ALPHA', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC2', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC2_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC3', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC3_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC4', 1, 1, FormatType.UNORM, false, false, false, true), new FormatInfo('BC4_SNORM', 1, 1, FormatType.SNORM, false, false, false, true), new FormatInfo('BC5', 1, 2, FormatType.UNORM, false, false, false, true), new FormatInfo('BC5_SNORM', 1, 2, FormatType.SNORM, false, false, false, true), new FormatInfo('BC6H_UF16', 1, 3, FormatType.UFLOAT, false, false, false, true), new FormatInfo('BC6H_SF16', 1, 3, FormatType.FLOAT, false, false, false, true), new FormatInfo('BC7', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('BC7_SRGB', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC_RGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_RGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_SRGB8', 1, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('ETC2_RGB8_A1', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_SRGB8_A1', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_RGBA8', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ETC2_SRGB8_A8', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('EAC_R11', 1, 1, FormatType.UNORM, false, false, false, true), new FormatInfo('EAC_R11SN', 1, 1, FormatType.SNORM, false, false, false, true), new FormatInfo('EAC_RG11', 2, 2, FormatType.UNORM, false, false, false, true), new FormatInfo('EAC_RG11SN', 2, 2, FormatType.SNORM, false, false, false, true), new FormatInfo('PVRTC_RGB2', 2, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('PVRTC_RGBA2', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC_RGB4', 2, 3, FormatType.UNORM, false, false, false, true), new FormatInfo('PVRTC_RGBA4', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC2_2BPP', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('PVRTC2_4BPP', 2, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_4x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_5x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_5x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_6x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_6x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_8x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_10x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_12x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_RGBA_12x12', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_4x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_5x4', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_5x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_6x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_6x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_8x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x5', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x6', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x8', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_10x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_12x10', 1, 4, FormatType.UNORM, true, false, false, true), new FormatInfo('ASTC_SRGBA_12x12', 1, 4, FormatType.UNORM, true, false, false, true)]));
            function FormatSize(format, width, height, depth) {
              if (!FormatInfos[format].isCompressed) {
                return width * height * depth * FormatInfos[format].size;
              } else {
                switch (format) {
                  case Format.BC1:
                  case Format.BC1_ALPHA:
                  case Format.BC1_SRGB:
                  case Format.BC1_SRGB_ALPHA:
                    return Math.ceil(width / 4) * Math.ceil(height / 4) * 8 * depth;

                  case Format.BC2:
                  case Format.BC2_SRGB:
                  case Format.BC3:
                  case Format.BC3_SRGB:
                  case Format.BC4:
                  case Format.BC4_SNORM:
                  case Format.BC6H_SF16:
                  case Format.BC6H_UF16:
                  case Format.BC7:
                  case Format.BC7_SRGB:
                    return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;

                  case Format.BC5:
                  case Format.BC5_SNORM:
                    return Math.ceil(width / 4) * Math.ceil(height / 4) * 32 * depth;

                  case Format.ETC_RGB8:
                  case Format.ETC2_RGB8:
                  case Format.ETC2_SRGB8:
                  case Format.ETC2_RGB8_A1:
                  case Format.EAC_R11:
                  case Format.EAC_R11SN:
                    return Math.ceil(width / 4) * Math.ceil(height / 4) * 8 * depth;

                  case Format.ETC2_RGBA8:
                  case Format.ETC2_SRGB8_A1:
                  case Format.EAC_RG11:
                  case Format.EAC_RG11SN:
                    return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;

                  case Format.PVRTC_RGB2:
                  case Format.PVRTC_RGBA2:
                  case Format.PVRTC2_2BPP:
                    return Math.ceil(Math.max(width, 16) * Math.max(height, 8) / 4) * depth;

                  case Format.PVRTC_RGB4:
                  case Format.PVRTC_RGBA4:
                  case Format.PVRTC2_4BPP:
                    return Math.ceil(Math.max(width, 8) * Math.max(height, 8) / 2) * depth;

                  case Format.ASTC_RGBA_4x4:
                  case Format.ASTC_SRGBA_4x4:
                    return Math.ceil(width / 4) * Math.ceil(height / 4) * 16 * depth;

                  case Format.ASTC_RGBA_5x4:
                  case Format.ASTC_SRGBA_5x4:
                    return Math.ceil(width / 5) * Math.ceil(height / 4) * 16 * depth;

                  case Format.ASTC_RGBA_5x5:
                  case Format.ASTC_SRGBA_5x5:
                    return Math.ceil(width / 5) * Math.ceil(height / 5) * 16 * depth;

                  case Format.ASTC_RGBA_6x5:
                  case Format.ASTC_SRGBA_6x5:
                    return Math.ceil(width / 6) * Math.ceil(height / 5) * 16 * depth;

                  case Format.ASTC_RGBA_6x6:
                  case Format.ASTC_SRGBA_6x6:
                    return Math.ceil(width / 6) * Math.ceil(height / 6) * 16 * depth;

                  case Format.ASTC_RGBA_8x5:
                  case Format.ASTC_SRGBA_8x5:
                    return Math.ceil(width / 8) * Math.ceil(height / 5) * 16 * depth;

                  case Format.ASTC_RGBA_8x6:
                  case Format.ASTC_SRGBA_8x6:
                    return Math.ceil(width / 8) * Math.ceil(height / 6) * 16 * depth;

                  case Format.ASTC_RGBA_8x8:
                  case Format.ASTC_SRGBA_8x8:
                    return Math.ceil(width / 8) * Math.ceil(height / 8) * 16 * depth;

                  case Format.ASTC_RGBA_10x5:
                  case Format.ASTC_SRGBA_10x5:
                    return Math.ceil(width / 10) * Math.ceil(height / 5) * 16 * depth;

                  case Format.ASTC_RGBA_10x6:
                  case Format.ASTC_SRGBA_10x6:
                    return Math.ceil(width / 10) * Math.ceil(height / 6) * 16 * depth;

                  case Format.ASTC_RGBA_10x8:
                  case Format.ASTC_SRGBA_10x8:
                    return Math.ceil(width / 10) * Math.ceil(height / 8) * 16 * depth;

                  case Format.ASTC_RGBA_10x10:
                  case Format.ASTC_SRGBA_10x10:
                    return Math.ceil(width / 10) * Math.ceil(height / 10) * 16 * depth;

                  case Format.ASTC_RGBA_12x10:
                  case Format.ASTC_SRGBA_12x10:
                    return Math.ceil(width / 12) * Math.ceil(height / 10) * 16 * depth;

                  case Format.ASTC_RGBA_12x12:
                  case Format.ASTC_SRGBA_12x12:
                    return Math.ceil(width / 12) * Math.ceil(height / 12) * 16 * depth;

                  default:
                    {
                      return 0;
                    }
                }
              }
            }
            function FormatSurfaceSize(format, width, height, depth, mips) {
              var size = 0;

              for (var i = 0; i < mips; ++i) {
                size += FormatSize(format, width, height, depth);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
              }

              return size;
            }
            var _type2size = [0, 4, 8, 12, 16, 4, 8, 12, 16, 4, 8, 12, 16, 4, 8, 12, 16, 16, 24, 32, 24, 36, 48, 32, 48, 64, 4, 4, 4, 4, 4, 4];
            function GetTypeSize(type) {
              return _type2size[type] || 0;
            }
            function getTypedArrayConstructor(info) {
              var stride = info.size / info.count;

              switch (info.type) {
                case FormatType.UNORM:
                case FormatType.UINT:
                  {
                    switch (stride) {
                      case 1:
                        return Uint8Array;

                      case 2:
                        return Uint16Array;

                      case 4:
                        return Uint32Array;
                    }

                    break;
                  }

                case FormatType.SNORM:
                case FormatType.INT:
                  {
                    switch (stride) {
                      case 1:
                        return Int8Array;

                      case 2:
                        return Int16Array;

                      case 4:
                        return Int32Array;
                    }

                    break;
                  }

                case FormatType.FLOAT:
                  {
                    return Float32Array;
                  }
              }

              return Float32Array;
            }

            var Defines = /*#__PURE__*/Object.freeze({
                __proto__: null,
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
                getTypedArrayConstructor: getTypedArrayConstructor
            });

            var Rect$1 = exports('aI', function Rect(x, y, width, height) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (width === void 0) {
                width = 1;
              }

              if (height === void 0) {
                height = 1;
              }

              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
            });
            var Viewport = exports('aJ', function Viewport(left, top, width, height, minDepth, maxDepth) {
              if (left === void 0) {
                left = 0;
              }

              if (top === void 0) {
                top = 0;
              }

              if (width === void 0) {
                width = 0;
              }

              if (height === void 0) {
                height = 0;
              }

              if (minDepth === void 0) {
                minDepth = 0;
              }

              if (maxDepth === void 0) {
                maxDepth = 1;
              }

              this.left = left;
              this.top = top;
              this.width = width;
              this.height = height;
              this.minDepth = minDepth;
              this.maxDepth = maxDepth;
            });
            var Color$1 = exports('aK', function Color(x, y, z, w) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (z === void 0) {
                z = 0;
              }

              if (w === void 0) {
                w = 0;
              }

              this.x = x;
              this.y = y;
              this.z = z;
              this.w = w;
            });
            var Offset = exports('aL', function Offset(x, y, z) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (z === void 0) {
                z = 0;
              }

              this.x = x;
              this.y = y;
              this.z = z;
            });
            var Extent = exports('aM', function Extent(width, height, depth) {
              if (width === void 0) {
                width = 0;
              }

              if (height === void 0) {
                height = 0;
              }

              if (depth === void 0) {
                depth = 1;
              }

              this.width = width;
              this.height = height;
              this.depth = depth;
            });
            var TextureSubres = exports('aN', function TextureSubres(mipLevel, baseArrayLayer, layerCount) {
              if (mipLevel === void 0) {
                mipLevel = 0;
              }

              if (baseArrayLayer === void 0) {
                baseArrayLayer = 0;
              }

              if (layerCount === void 0) {
                layerCount = 1;
              }

              this.mipLevel = mipLevel;
              this.baseArrayLayer = baseArrayLayer;
              this.layerCount = layerCount;
            });
            var TextureCopy = exports('aO', function TextureCopy(srcSubres, srcOffset, dstSubres, dstOffset, extent) {
              if (srcSubres === void 0) {
                srcSubres = new TextureSubres();
              }

              if (srcOffset === void 0) {
                srcOffset = new Offset();
              }

              if (dstSubres === void 0) {
                dstSubres = new TextureSubres();
              }

              if (dstOffset === void 0) {
                dstOffset = new Offset();
              }

              if (extent === void 0) {
                extent = new Extent();
              }

              this.srcSubres = srcSubres;
              this.srcOffset = srcOffset;
              this.dstSubres = dstSubres;
              this.dstOffset = dstOffset;
              this.extent = extent;
            });
            var BufferTextureCopy = exports('aP', function BufferTextureCopy(buffStride, buffTexHeight, texOffset, texExtent, texSubres) {
              if (buffStride === void 0) {
                buffStride = 0;
              }

              if (buffTexHeight === void 0) {
                buffTexHeight = 0;
              }

              if (texOffset === void 0) {
                texOffset = new Offset();
              }

              if (texExtent === void 0) {
                texExtent = new Extent();
              }

              if (texSubres === void 0) {
                texSubres = new TextureSubres();
              }

              this.buffStride = buffStride;
              this.buffTexHeight = buffTexHeight;
              this.texOffset = texOffset;
              this.texExtent = texExtent;
              this.texSubres = texSubres;
            });

            var RasterizerState = exports('aQ', function () {
              function RasterizerState(isDiscard, polygonMode, shadeModel, cullMode, isFrontFaceCCW, depthBiasEnabled, depthBias, depthBiasClamp, depthBiasSlop, isDepthClip, isMultisample, lineWidth) {
                if (isDiscard === void 0) {
                  isDiscard = false;
                }

                if (polygonMode === void 0) {
                  polygonMode = PolygonMode.FILL;
                }

                if (shadeModel === void 0) {
                  shadeModel = ShadeModel.GOURAND;
                }

                if (cullMode === void 0) {
                  cullMode = CullMode.BACK;
                }

                if (isFrontFaceCCW === void 0) {
                  isFrontFaceCCW = true;
                }

                if (depthBiasEnabled === void 0) {
                  depthBiasEnabled = false;
                }

                if (depthBias === void 0) {
                  depthBias = 0;
                }

                if (depthBiasClamp === void 0) {
                  depthBiasClamp = 0.0;
                }

                if (depthBiasSlop === void 0) {
                  depthBiasSlop = 0.0;
                }

                if (isDepthClip === void 0) {
                  isDepthClip = true;
                }

                if (isMultisample === void 0) {
                  isMultisample = false;
                }

                if (lineWidth === void 0) {
                  lineWidth = 1.0;
                }

                this.h = void 0;
                this.h = RasterizerStatePool.alloc();
                this.assignProperties(isDiscard, polygonMode, shadeModel, cullMode, isFrontFaceCCW, depthBiasEnabled, depthBias, depthBiasClamp, depthBiasSlop, isDepthClip, isMultisample, lineWidth);
              }

              var _proto = RasterizerState.prototype;

              _proto.reset = function reset() {
                this.assignProperties(false, PolygonMode.FILL, ShadeModel.GOURAND, CullMode.BACK, true, false, 0, 0.0, 0.0, true, false, 1.0);
              };

              _proto.assign = function assign(rs) {
                if (!rs) return;
                this.assignProperties(rs.isDiscard, rs.polygonMode, rs.shadeModel, rs.cullMode, rs.isFrontFaceCCW, rs.depthBiasEnabled, rs.depthBias, rs.depthBiasClamp, rs.depthBiasSlop, rs.isDepthClip, rs.isMultisample, rs.lineWidth);
              };

              _proto.destroy = function destroy() {
                if (this.h) {
                  RasterizerStatePool.free(this.h);
                  this.h = NULL_HANDLE;
                }
              };

              _proto.assignProperties = function assignProperties(isDiscard, polygonMode, shadeModel, cullMode, isFrontFaceCCW, depthBiasEnabled, depthBias, depthBiasClamp, depthBiasSlop, isDepthClip, isMultisample, lineWidth) {
                if (isDiscard !== undefined) this.isDiscard = isDiscard;
                if (polygonMode !== undefined) this.polygonMode = polygonMode;
                if (shadeModel !== undefined) this.shadeModel = shadeModel;
                if (cullMode !== undefined) this.cullMode = cullMode;
                if (isFrontFaceCCW !== undefined) this.isFrontFaceCCW = isFrontFaceCCW;
                if (depthBiasEnabled !== undefined) this.depthBiasEnabled = depthBiasEnabled;
                if (depthBias !== undefined) this.depthBias = depthBias;
                if (depthBiasClamp !== undefined) this.depthBiasClamp = depthBiasClamp;
                if (depthBiasSlop !== undefined) this.depthBiasSlop = depthBiasSlop;
                if (isDepthClip !== undefined) this.isDepthClip = isDepthClip;
                if (isMultisample !== undefined) this.isMultisample = isMultisample;
                if (lineWidth !== undefined) this.lineWidth = lineWidth;
              };

              _createClass(RasterizerState, [{
                key: "isDiscard",
                get: function get() {
                  if (RasterizerStatePool.get(this.h, RasterizerStateView.IS_DISCARD)) return true;else return false;
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.IS_DISCARD, val ? 1 : 0);
                }
              }, {
                key: "polygonMode",
                get: function get() {
                  return RasterizerStatePool.get(this.h, RasterizerStateView.POLYGO_MODEL);
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.POLYGO_MODEL, val);
                }
              }, {
                key: "shadeModel",
                get: function get() {
                  return RasterizerStatePool.get(this.h, RasterizerStateView.SHADE_MODEL);
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.SHADE_MODEL, val);
                }
              }, {
                key: "cullMode",
                get: function get() {
                  return RasterizerStatePool.get(this.h, RasterizerStateView.CULL_MODE);
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.CULL_MODE, val);
                }
              }, {
                key: "isFrontFaceCCW",
                get: function get() {
                  if (RasterizerStatePool.get(this.h, RasterizerStateView.IS_FRONT_FACE_CCW)) return true;else return false;
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.IS_FRONT_FACE_CCW, val ? 1 : 0);
                }
              }, {
                key: "depthBiasEnabled",
                get: function get() {
                  if (RasterizerStatePool.get(this.h, RasterizerStateView.DEPTH_BIAS_ENABLED)) return true;else return false;
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.DEPTH_BIAS_ENABLED, val ? 1 : 0);
                }
              }, {
                key: "depthBias",
                get: function get() {
                  return RasterizerStatePool.get(this.h, RasterizerStateView.DEPTH_BIAS);
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.DEPTH_BIAS, val);
                }
              }, {
                key: "depthBiasClamp",
                get: function get() {
                  return RasterizerStatePool.get(this.h, RasterizerStateView.DEPTH_BIAS_CLAMP);
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.DEPTH_BIAS_CLAMP, val);
                }
              }, {
                key: "depthBiasSlop",
                get: function get() {
                  return RasterizerStatePool.get(this.h, RasterizerStateView.DEPTH_BIAS_SLOP);
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.DEPTH_BIAS_SLOP, val);
                }
              }, {
                key: "isDepthClip",
                get: function get() {
                  if (RasterizerStatePool.get(this.h, RasterizerStateView.IS_DEPTH_CLIP)) return true;else return false;
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.IS_DEPTH_CLIP, val ? 1 : 0);
                }
              }, {
                key: "isMultisample",
                get: function get() {
                  if (RasterizerStatePool.get(this.h, RasterizerStateView.IS_MULTI_SAMPLE)) return true;else return false;
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.IS_MULTI_SAMPLE, val ? 1 : 0);
                }
              }, {
                key: "lineWidth",
                get: function get() {
                  return RasterizerStatePool.get(this.h, RasterizerStateView.LINE_WIDTH);
                },
                set: function set(val) {
                  RasterizerStatePool.set(this.h, RasterizerStateView.LINE_WIDTH, val);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this.h;
                }
              }]);

              return RasterizerState;
            }());
            var DepthStencilState = exports('aR', function () {
              function DepthStencilState(depthTest, depthWrite, depthFunc, stencilTestFront, stencilFuncFront, stencilReadMaskFront, stencilWriteMaskFront, stencilFailOpFront, stencilZFailOpFront, stencilPassOpFront, stencilRefFront, stencilTestBack, stencilFuncBack, stencilReadMaskBack, stencilWriteMaskBack, stencilFailOpBack, stencilZFailOpBack, stencilPassOpBack, stencilRefBack) {
                if (depthTest === void 0) {
                  depthTest = true;
                }

                if (depthWrite === void 0) {
                  depthWrite = true;
                }

                if (depthFunc === void 0) {
                  depthFunc = ComparisonFunc.LESS;
                }

                if (stencilTestFront === void 0) {
                  stencilTestFront = false;
                }

                if (stencilFuncFront === void 0) {
                  stencilFuncFront = ComparisonFunc.ALWAYS;
                }

                if (stencilReadMaskFront === void 0) {
                  stencilReadMaskFront = 0xffff;
                }

                if (stencilWriteMaskFront === void 0) {
                  stencilWriteMaskFront = 0xffff;
                }

                if (stencilFailOpFront === void 0) {
                  stencilFailOpFront = StencilOp.KEEP;
                }

                if (stencilZFailOpFront === void 0) {
                  stencilZFailOpFront = StencilOp.KEEP;
                }

                if (stencilPassOpFront === void 0) {
                  stencilPassOpFront = StencilOp.KEEP;
                }

                if (stencilRefFront === void 0) {
                  stencilRefFront = 1;
                }

                if (stencilTestBack === void 0) {
                  stencilTestBack = false;
                }

                if (stencilFuncBack === void 0) {
                  stencilFuncBack = ComparisonFunc.ALWAYS;
                }

                if (stencilReadMaskBack === void 0) {
                  stencilReadMaskBack = 0xffff;
                }

                if (stencilWriteMaskBack === void 0) {
                  stencilWriteMaskBack = 0xffff;
                }

                if (stencilFailOpBack === void 0) {
                  stencilFailOpBack = StencilOp.KEEP;
                }

                if (stencilZFailOpBack === void 0) {
                  stencilZFailOpBack = StencilOp.KEEP;
                }

                if (stencilPassOpBack === void 0) {
                  stencilPassOpBack = StencilOp.KEEP;
                }

                if (stencilRefBack === void 0) {
                  stencilRefBack = 1;
                }

                this.h = void 0;
                this.h = DepthStencilStatePool.alloc();
                this.assignProperties(depthTest, depthWrite, depthFunc, stencilTestFront, stencilFuncFront, stencilReadMaskFront, stencilWriteMaskFront, stencilFailOpFront, stencilZFailOpFront, stencilPassOpFront, stencilRefFront, stencilTestBack, stencilFuncBack, stencilReadMaskBack, stencilWriteMaskBack, stencilFailOpBack, stencilZFailOpBack, stencilPassOpBack, stencilRefBack);
              }

              var _proto2 = DepthStencilState.prototype;

              _proto2.reset = function reset() {
                this.assignProperties(true, true, ComparisonFunc.LESS, false, ComparisonFunc.ALWAYS, 0xffff, 0xffff, StencilOp.KEEP, StencilOp.KEEP, StencilOp.KEEP, 1, false, ComparisonFunc.ALWAYS, 0xffff, 0xffff, StencilOp.KEEP, StencilOp.KEEP, StencilOp.KEEP, 1);
              };

              _proto2.assign = function assign(dss) {
                if (!dss) return;
                this.assignProperties(dss.depthTest, dss.depthWrite, dss.depthFunc, dss.stencilTestFront, dss.stencilFuncFront, dss.stencilReadMaskFront, dss.stencilWriteMaskFront, dss.stencilFailOpFront, dss.stencilZFailOpFront, dss.stencilPassOpFront, dss.stencilRefFront, dss.stencilTestBack, dss.stencilFuncBack, dss.stencilReadMaskBack, dss.stencilWriteMaskBack, dss.stencilFailOpBack, dss.stencilZFailOpBack, dss.stencilPassOpBack, dss.stencilRefBack);
              };

              _proto2.destroy = function destroy() {
                DepthStencilStatePool.free(this.h);
                this.h = NULL_HANDLE;
              };

              _proto2.assignProperties = function assignProperties(depthTest, depthWrite, depthFunc, stencilTestFront, stencilFuncFront, stencilReadMaskFront, stencilWriteMaskFront, stencilFailOpFront, stencilZFailOpFront, stencilPassOpFront, stencilRefFront, stencilTestBack, stencilFuncBack, stencilReadMaskBack, stencilWriteMaskBack, stencilFailOpBack, stencilZFailOpBack, stencilPassOpBack, stencilRefBack) {
                if (depthTest !== undefined) this.depthTest = depthTest;
                if (depthWrite !== undefined) this.depthWrite = depthWrite;
                if (depthFunc !== undefined) this.depthFunc = depthFunc;
                if (stencilTestFront !== undefined) this.stencilTestFront = stencilTestFront;
                if (stencilFuncFront !== undefined) this.stencilFuncFront = stencilFuncFront;
                if (stencilReadMaskFront !== undefined) this.stencilReadMaskFront = stencilReadMaskFront;
                if (stencilWriteMaskFront !== undefined) this.stencilWriteMaskFront = stencilWriteMaskFront;
                if (stencilFailOpFront !== undefined) this.stencilFailOpFront = stencilFailOpFront;
                if (stencilZFailOpFront !== undefined) this.stencilZFailOpFront = stencilZFailOpFront;
                if (stencilPassOpFront !== undefined) this.stencilPassOpFront = stencilPassOpFront;
                if (stencilRefFront !== undefined) this.stencilRefFront = stencilRefFront;
                if (stencilTestBack !== undefined) this.stencilTestBack = stencilTestBack;
                if (stencilFuncBack !== undefined) this.stencilFuncBack = stencilFuncBack;
                if (stencilReadMaskBack !== undefined) this.stencilReadMaskBack = stencilReadMaskBack;
                if (stencilWriteMaskBack !== undefined) this.stencilWriteMaskBack = stencilWriteMaskBack;
                if (stencilFailOpBack !== undefined) this.stencilFailOpBack = stencilFailOpBack;
                if (stencilZFailOpBack !== undefined) this.stencilZFailOpBack = stencilZFailOpBack;
                if (stencilPassOpBack !== undefined) this.stencilPassOpBack = stencilPassOpBack;
                if (stencilRefBack !== undefined) this.stencilRefBack = stencilRefBack;
              };

              _createClass(DepthStencilState, [{
                key: "depthTest",
                get: function get() {
                  if (DepthStencilStatePool.get(this.h, DepthStencilStateView.DEPTH_TEST)) return true;else return false;
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.DEPTH_TEST, val ? 1 : 0);
                }
              }, {
                key: "depthWrite",
                get: function get() {
                  if (DepthStencilStatePool.get(this.h, DepthStencilStateView.DEPTH_WRITE)) return true;else return false;
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.DEPTH_WRITE, val ? 1 : 0);
                }
              }, {
                key: "depthFunc",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.DEPTH_FUNC);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.DEPTH_FUNC, val);
                }
              }, {
                key: "stencilTestFront",
                get: function get() {
                  if (DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_TEST_FRONT)) return true;else return false;
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_TEST_FRONT, val ? 1 : 0);
                }
              }, {
                key: "stencilFuncFront",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_FUNC_FRONT);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_FUNC_FRONT, val);
                }
              }, {
                key: "stencilReadMaskFront",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_READ_MASK_FRONT);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_READ_MASK_FRONT, val);
                }
              }, {
                key: "stencilWriteMaskFront",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_WRITE_MASK_FRONT);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_WRITE_MASK_FRONT, val);
                }
              }, {
                key: "stencilFailOpFront",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_FAIL_OP_FRONT);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_FAIL_OP_FRONT, val);
                }
              }, {
                key: "stencilZFailOpFront",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_Z_FAIL_OP_FRONT);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_Z_FAIL_OP_FRONT, val);
                }
              }, {
                key: "stencilPassOpFront",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_PASS_OP_FRONT);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_PASS_OP_FRONT, val);
                }
              }, {
                key: "stencilRefFront",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_REF_FRONT);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_REF_FRONT, val);
                }
              }, {
                key: "stencilTestBack",
                get: function get() {
                  if (DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_TEST_BACK)) return true;else return false;
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_TEST_BACK, val ? 1 : 0);
                }
              }, {
                key: "stencilFuncBack",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_FUNC_BACK);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_FUNC_BACK, val);
                }
              }, {
                key: "stencilReadMaskBack",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_READ_MADK_BACK);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_READ_MADK_BACK, val);
                }
              }, {
                key: "stencilWriteMaskBack",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_WRITE_MASK_BACK);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_WRITE_MASK_BACK, val);
                }
              }, {
                key: "stencilFailOpBack",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_FAIL_OP_BACK);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_FAIL_OP_BACK, val);
                }
              }, {
                key: "stencilZFailOpBack",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_Z_FAIL_OP_BACK);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_Z_FAIL_OP_BACK, val);
                }
              }, {
                key: "stencilPassOpBack",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_PASS_OP_BACK);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_PASS_OP_BACK, val);
                }
              }, {
                key: "stencilRefBack",
                get: function get() {
                  return DepthStencilStatePool.get(this.h, DepthStencilStateView.STENCIL_REF_BACK);
                },
                set: function set(val) {
                  DepthStencilStatePool.set(this.h, DepthStencilStateView.STENCIL_REF_BACK, val);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this.h;
                }
              }]);

              return DepthStencilState;
            }());
            var BlendTarget = exports('aS', function () {
              function BlendTarget(blend, blendSrc, blendDst, blendEq, blendSrcAlpha, blendDstAlpha, blendAlphaEq, blendColorMask) {
                if (blend === void 0) {
                  blend = false;
                }

                if (blendSrc === void 0) {
                  blendSrc = BlendFactor.ONE;
                }

                if (blendDst === void 0) {
                  blendDst = BlendFactor.ZERO;
                }

                if (blendEq === void 0) {
                  blendEq = BlendOp.ADD;
                }

                if (blendSrcAlpha === void 0) {
                  blendSrcAlpha = BlendFactor.ONE;
                }

                if (blendDstAlpha === void 0) {
                  blendDstAlpha = BlendFactor.ZERO;
                }

                if (blendAlphaEq === void 0) {
                  blendAlphaEq = BlendOp.ADD;
                }

                if (blendColorMask === void 0) {
                  blendColorMask = ColorMask.ALL;
                }

                this.h = void 0;
                this.h = BlendTargetPool.alloc();
                this.assignProperties(blend, blendSrc, blendDst, blendEq, blendSrcAlpha, blendDstAlpha, blendAlphaEq, blendColorMask);
              }

              var _proto3 = BlendTarget.prototype;

              _proto3.reset = function reset() {
                this.assignProperties(false, BlendFactor.ONE, BlendFactor.ZERO, BlendOp.ADD, BlendFactor.ONE, BlendFactor.ZERO, BlendOp.ADD, ColorMask.ALL);
              };

              _proto3.destroy = function destroy() {
                BlendTargetPool.free(this.h);
                this.h = NULL_HANDLE;
              };

              _proto3.assign = function assign(target) {
                if (!target) return;
                this.assignProperties(target.blend, target.blendSrc, target.blendDst, target.blendEq, target.blendSrcAlpha, target.blendDstAlpha, target.blendAlphaEq, target.blendColorMask);
              };

              _proto3.assignProperties = function assignProperties(blend, blendSrc, blendDst, blendEq, blendSrcAlpha, blendDstAlpha, blendAlphaEq, blendColorMask) {
                if (blend !== undefined) this.blend = blend;
                if (blendSrc !== undefined) this.blendSrc = blendSrc;
                if (blendDst !== undefined) this.blendDst = blendDst;
                if (blendEq !== undefined) this.blendEq = blendEq;
                if (blendSrcAlpha !== undefined) this.blendSrcAlpha = blendSrcAlpha;
                if (blendDstAlpha !== undefined) this.blendDstAlpha = blendDstAlpha;
                if (blendAlphaEq !== undefined) this.blendAlphaEq = blendAlphaEq;
                if (blendColorMask !== undefined) this.blendColorMask = blendColorMask;
              };

              _createClass(BlendTarget, [{
                key: "blend",
                get: function get() {
                  if (BlendTargetPool.get(this.h, BlendTargetView.BLEND)) return true;else return false;
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND, val ? 1 : 0);
                }
              }, {
                key: "blendSrc",
                get: function get() {
                  return BlendTargetPool.get(this.h, BlendTargetView.BLEND_SRC);
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND_SRC, val);
                }
              }, {
                key: "blendDst",
                get: function get() {
                  return BlendTargetPool.get(this.h, BlendTargetView.BLEND_DST);
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND_DST, val);
                }
              }, {
                key: "blendEq",
                get: function get() {
                  return BlendTargetPool.get(this.h, BlendTargetView.BLEND_EQ);
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND_EQ, val);
                }
              }, {
                key: "blendSrcAlpha",
                get: function get() {
                  return BlendTargetPool.get(this.h, BlendTargetView.BLEND_SRC_ALPHA);
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND_SRC_ALPHA, val);
                }
              }, {
                key: "blendDstAlpha",
                get: function get() {
                  return BlendTargetPool.get(this.h, BlendTargetView.BLEND_DST_ALPHA);
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND_DST_ALPHA, val);
                }
              }, {
                key: "blendAlphaEq",
                get: function get() {
                  return BlendTargetPool.get(this.h, BlendTargetView.BLEND_ALPHA_EQ);
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND_ALPHA_EQ, val);
                }
              }, {
                key: "blendColorMask",
                get: function get() {
                  return BlendTargetPool.get(this.h, BlendTargetView.BLEND_COLOR_MASK);
                },
                set: function set(val) {
                  BlendTargetPool.set(this.h, BlendTargetView.BLEND_COLOR_MASK, val);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this.h;
                }
              }]);

              return BlendTarget;
            }());
            var BlendState = exports('aT', function () {
              function BlendState(isA2C, isIndepend, blendColor, targets) {
                if (isA2C === void 0) {
                  isA2C = false;
                }

                if (isIndepend === void 0) {
                  isIndepend = false;
                }

                if (blendColor === void 0) {
                  blendColor = new Color$1();
                }

                if (targets === void 0) {
                  targets = [new BlendTarget()];
                }

                this.h = void 0;
                this.hBt = void 0;
                this.targets = void 0;
                this._blendColor = void 0;
                this.h = BlendStatePool.alloc();
                this.targets = targets;
                this.blendColor = blendColor;
                this.isA2c = isA2C;
                this.isIndepend = isIndepend;
                this.blendColor = blendColor;
                this.hBt = BlendTargetArrayPool.alloc();
                BlendStatePool.set(this.h, BlendStateView.BLEND_TARGET, this.hBt);

                for (var i = 0, len = targets.length; i < len; ++i) {
                  BlendTargetArrayPool.push(this.hBt, targets[i].handle);
                }
              }

              var _proto4 = BlendState.prototype;

              _proto4.setTarget = function setTarget(index, target) {
                var tg = this.targets[index];

                if (!tg) {
                  tg = this.targets[index] = new BlendTarget();
                  BlendTargetArrayPool.assign(this.hBt, index, tg.handle);
                }

                tg.assign(target);
              };

              _proto4.reset = function reset() {
                this.isA2c = false;
                this.isIndepend = false;
                BlendStatePool.setVec4(this.h, BlendStateView.BLEND_COLOR, new Color$1(0, 0, 0, 0));
                var targets = this.targets;

                for (var i = 1, len = targets.length; i < len; ++i) {
                  targets[i].destroy();
                }

                targets.length = 1;
                targets[0].reset();
                BlendTargetArrayPool.clear(this.hBt);
                BlendTargetArrayPool.push(this.hBt, targets[0].handle);
              };

              _proto4.destroy = function destroy() {
                BlendStatePool.free(this.h);
                this.h = NULL_HANDLE;
                BlendTargetArrayPool.free(this.hBt);
                this.hBt = NULL_HANDLE;

                for (var i = 0, len = this.targets.length; i < len; ++i) {
                  this.targets[i].destroy();
                }

                this.targets = null;
              };

              _createClass(BlendState, [{
                key: "isA2c",
                get: function get() {
                  if (BlendStatePool.get(this.h, BlendStateView.IS_A2C)) return true;else return false;
                },
                set: function set(val) {
                  BlendStatePool.set(this.h, BlendStateView.IS_A2C, val ? 1 : 0);
                }
              }, {
                key: "isIndepend",
                get: function get() {
                  if (BlendStatePool.get(this.h, BlendStateView.IS_INDEPEND)) return true;else return false;
                },
                set: function set(val) {
                  BlendStatePool.set(this.h, BlendStateView.IS_INDEPEND, val ? 1 : 0);
                }
              }, {
                key: "blendColor",
                get: function get() {
                  return this._blendColor;
                },
                set: function set(color) {
                  this._blendColor = color;
                  BlendStatePool.setVec4(this.h, BlendStateView.BLEND_COLOR, color);
                }
              }, {
                key: "handle",
                get: function get() {
                  return this.h;
                }
              }]);

              return BlendState;
            }());
            var PipelineStateInfo = exports('aU', gfx.PipelineStateInfo);
            var InputState = exports('aV', gfx.InputState);
            var PipelineState = exports('aW', gfx.PipelineState);

            ccenum(Format);
            var BindingMappingInfo = exports('B', function BindingMappingInfo(bufferOffsets, samplerOffsets, flexibleSet) {
              if (bufferOffsets === void 0) {
                bufferOffsets = [];
              }

              if (samplerOffsets === void 0) {
                samplerOffsets = [];
              }

              if (flexibleSet === void 0) {
                flexibleSet = 0;
              }

              this.bufferOffsets = bufferOffsets;
              this.samplerOffsets = samplerOffsets;
              this.flexibleSet = flexibleSet;
            });
            var DeviceInfo = exports('D', function DeviceInfo(canvasElm, isAntialias, isPremultipliedAlpha, devicePixelRatio, nativeWidth, nativeHeight, bindingMappingInfo) {
              if (isAntialias === void 0) {
                isAntialias = true;
              }

              if (isPremultipliedAlpha === void 0) {
                isPremultipliedAlpha = true;
              }

              if (devicePixelRatio === void 0) {
                devicePixelRatio = 1;
              }

              if (nativeWidth === void 0) {
                nativeWidth = 1;
              }

              if (nativeHeight === void 0) {
                nativeHeight = 1;
              }

              if (bindingMappingInfo === void 0) {
                bindingMappingInfo = new BindingMappingInfo();
              }

              this.canvasElm = canvasElm;
              this.isAntialias = isAntialias;
              this.isPremultipliedAlpha = isPremultipliedAlpha;
              this.devicePixelRatio = devicePixelRatio;
              this.nativeWidth = nativeWidth;
              this.nativeHeight = nativeHeight;
              this.bindingMappingInfo = bindingMappingInfo;
            });
            var Device = exports('a_', function () {
              function Device() {
                this._canvas = null;
                this._canvas2D = null;
                this._gfxAPI = API.UNKNOWN;
                this._transform = SurfaceTransform.IDENTITY;
                this._deviceName = '';
                this._renderer = '';
                this._vendor = '';
                this._version = '';
                this._features = new Array(Feature.COUNT);
                this._queue = null;
                this._cmdBuff = null;
                this._devicePixelRatio = 1.0;
                this._width = 0;
                this._height = 0;
                this._nativeWidth = 0;
                this._nativeHeight = 0;
                this._maxVertexAttributes = 0;
                this._maxVertexUniformVectors = 0;
                this._maxFragmentUniformVectors = 0;
                this._maxTextureUnits = 0;
                this._maxVertexTextureUnits = 0;
                this._maxUniformBufferBindings = 0;
                this._maxUniformBlockSize = 0;
                this._maxTextureSize = 0;
                this._maxCubeMapTextureSize = 0;
                this._uboOffsetAlignment = 1;
                this._depthBits = 0;
                this._stencilBits = 0;
                this._colorFmt = Format.UNKNOWN;
                this._depthStencilFmt = Format.UNKNOWN;
                this._macros = new Map();
                this._numDrawCalls = 0;
                this._numInstances = 0;
                this._numTris = 0;
                this._memoryStatus = new MemoryStatus();
                this._clipSpaceMinZ = -1;
                this._screenSpaceSignY = 1;
                this._UVSpaceSignY = -1;
              }

              var _proto = Device.prototype;

              _proto.hasFeature = function hasFeature(feature) {
                return this._features[feature];
              };

              _createClass(Device, [{
                key: "canvas",
                get: function get() {
                  return this._canvas;
                }
              }, {
                key: "canvas2D",
                get: function get() {
                  return this._canvas2D;
                }
              }, {
                key: "gfxAPI",
                get: function get() {
                  return this._gfxAPI;
                }
              }, {
                key: "queue",
                get: function get() {
                  return this._queue;
                }
              }, {
                key: "commandBuffer",
                get: function get() {
                  return this._cmdBuff;
                }
              }, {
                key: "devicePixelRatio",
                get: function get() {
                  return this._devicePixelRatio;
                }
              }, {
                key: "width",
                get: function get() {
                  return this._width;
                }
              }, {
                key: "height",
                get: function get() {
                  return this._height;
                }
              }, {
                key: "nativeWidth",
                get: function get() {
                  return this._nativeWidth;
                }
              }, {
                key: "nativeHeight",
                get: function get() {
                  return this._nativeHeight;
                }
              }, {
                key: "renderer",
                get: function get() {
                  return this._renderer;
                }
              }, {
                key: "vendor",
                get: function get() {
                  return this._vendor;
                }
              }, {
                key: "maxVertexAttributes",
                get: function get() {
                  return this._maxVertexAttributes;
                }
              }, {
                key: "maxVertexUniformVectors",
                get: function get() {
                  return this._maxVertexUniformVectors;
                }
              }, {
                key: "maxFragmentUniformVectors",
                get: function get() {
                  return this._maxFragmentUniformVectors;
                }
              }, {
                key: "maxTextureUnits",
                get: function get() {
                  return this._maxTextureUnits;
                }
              }, {
                key: "maxVertexTextureUnits",
                get: function get() {
                  return this._maxVertexTextureUnits;
                }
              }, {
                key: "maxUniformBufferBindings",
                get: function get() {
                  return this._maxUniformBufferBindings;
                }
              }, {
                key: "maxUniformBlockSize",
                get: function get() {
                  return this._maxUniformBlockSize;
                }
              }, {
                key: "maxTextureSize",
                get: function get() {
                  return this._maxTextureSize;
                }
              }, {
                key: "maxCubeMapTextureSize",
                get: function get() {
                  return this._maxCubeMapTextureSize;
                }
              }, {
                key: "uboOffsetAlignment",
                get: function get() {
                  return this._uboOffsetAlignment;
                }
              }, {
                key: "depthBits",
                get: function get() {
                  return this._depthBits;
                }
              }, {
                key: "stencilBits",
                get: function get() {
                  return this._stencilBits;
                }
              }, {
                key: "colorFormat",
                get: function get() {
                  return this._colorFmt;
                }
              }, {
                key: "depthStencilFormat",
                get: function get() {
                  return this._depthStencilFmt;
                }
              }, {
                key: "macros",
                get: function get() {
                  return this._macros;
                }
              }, {
                key: "numDrawCalls",
                get: function get() {
                  return this._numDrawCalls;
                }
              }, {
                key: "numInstances",
                get: function get() {
                  return this._numInstances;
                }
              }, {
                key: "numTris",
                get: function get() {
                  return this._numTris;
                }
              }, {
                key: "memoryStatus",
                get: function get() {
                  return this._memoryStatus;
                }
              }, {
                key: "clipSpaceMinZ",
                get: function get() {
                  return this._clipSpaceMinZ;
                }
              }, {
                key: "screenSpaceSignY",
                get: function get() {
                  return this._screenSpaceSignY;
                }
              }, {
                key: "UVSpaceSignY",
                get: function get() {
                  return this._UVSpaceSignY;
                }
              }, {
                key: "surfaceTransform",
                get: function get() {
                  return this._transform;
                }
              }]);

              return Device;
            }());

            var TextureInfo = exports('T', function TextureInfo(type, usage, format, width, height, flags, layerCount, levelCount, samples, depth) {
              if (usage === void 0) {
                usage = TextureUsageBit.NONE;
              }

              if (format === void 0) {
                format = Format.UNKNOWN;
              }

              if (width === void 0) {
                width = 0;
              }

              if (height === void 0) {
                height = 0;
              }

              if (flags === void 0) {
                flags = TextureFlagBit.NONE;
              }

              if (layerCount === void 0) {
                layerCount = 1;
              }

              if (levelCount === void 0) {
                levelCount = 1;
              }

              if (samples === void 0) {
                samples = SampleCount.X1;
              }

              if (depth === void 0) {
                depth = 1;
              }

              this.type = type;
              this.usage = usage;
              this.format = format;
              this.width = width;
              this.height = height;
              this.flags = flags;
              this.layerCount = layerCount;
              this.levelCount = levelCount;
              this.samples = samples;
              this.depth = depth;
            });
            var TextureViewInfo = exports('ba', function TextureViewInfo(texture, type, format, baseLevel, levelCount, baseLayer, layerCount) {
              if (type === void 0) {
                type = TextureType.TEX2D;
              }

              if (format === void 0) {
                format = Format.UNKNOWN;
              }

              if (baseLevel === void 0) {
                baseLevel = 0;
              }

              if (levelCount === void 0) {
                levelCount = 1;
              }

              if (baseLayer === void 0) {
                baseLayer = 0;
              }

              if (layerCount === void 0) {
                layerCount = 1;
              }

              this.texture = texture;
              this.type = type;
              this.format = format;
              this.baseLevel = baseLevel;
              this.levelCount = levelCount;
              this.baseLayer = baseLayer;
              this.layerCount = layerCount;
            });
            function IsPowerOf2(x) {
              return x > 0 && (x & x - 1) === 0;
            }
            var Texture = exports('bb', function (_Obj) {
              _inheritsLoose(Texture, _Obj);

              _createClass(Texture, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }, {
                key: "usage",
                get: function get() {
                  return this._usage;
                }
              }, {
                key: "format",
                get: function get() {
                  return this._format;
                }
              }, {
                key: "width",
                get: function get() {
                  return this._width;
                }
              }, {
                key: "height",
                get: function get() {
                  return this._height;
                }
              }, {
                key: "depth",
                get: function get() {
                  return this._depth;
                }
              }, {
                key: "layerCount",
                get: function get() {
                  return this._layerCount;
                }
              }, {
                key: "levelCount",
                get: function get() {
                  return this._levelCount;
                }
              }, {
                key: "samples",
                get: function get() {
                  return this._samples;
                }
              }, {
                key: "flags",
                get: function get() {
                  return this._flags;
                }
              }, {
                key: "size",
                get: function get() {
                  return this._size;
                }
              }, {
                key: "buffer",
                get: function get() {
                  return this._buffer;
                }
              }]);

              function Texture(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.TEXTURE) || this;
                _this._device = void 0;
                _this._type = TextureType.TEX2D;
                _this._usage = TextureUsageBit.NONE;
                _this._format = Format.UNKNOWN;
                _this._width = 0;
                _this._height = 0;
                _this._depth = 1;
                _this._layerCount = 1;
                _this._levelCount = 1;
                _this._samples = SampleCount.X1;
                _this._flags = TextureFlagBit.NONE;
                _this._isPowerOf2 = false;
                _this._size = 0;
                _this._buffer = null;
                _this._device = device;
                return _this;
              }

              return Texture;
            }(Obj));

            var ShaderStage = exports('S', function ShaderStage(stage, source) {
              if (stage === void 0) {
                stage = ShaderStageFlagBit.NONE;
              }

              if (source === void 0) {
                source = '';
              }

              this.stage = stage;
              this.source = source;
            });
            var Uniform = exports('v', function Uniform(name, type, count) {
              if (name === void 0) {
                name = '';
              }

              if (type === void 0) {
                type = Type.UNKNOWN;
              }

              if (count === void 0) {
                count = 1;
              }

              this.name = name;
              this.type = type;
              this.count = count;
            });
            var UniformBlock = exports('u', function UniformBlock(set, binding, name, members, count) {
              if (set === void 0) {
                set = -1;
              }

              if (binding === void 0) {
                binding = -1;
              }

              if (name === void 0) {
                name = '';
              }

              if (members === void 0) {
                members = [];
              }

              if (count === void 0) {
                count = 1;
              }

              this.set = set;
              this.binding = binding;
              this.name = name;
              this.members = members;
              this.count = count;
            });
            var UniformSampler = exports('U', function UniformSampler(set, binding, name, type, count) {
              if (set === void 0) {
                set = -1;
              }

              if (binding === void 0) {
                binding = -1;
              }

              if (name === void 0) {
                name = '';
              }

              if (type === void 0) {
                type = Type.UNKNOWN;
              }

              if (count === void 0) {
                count = 1;
              }

              this.set = set;
              this.binding = binding;
              this.name = name;
              this.type = type;
              this.count = count;
            });
            var ShaderInfo = exports('x', function ShaderInfo(name, stages, attributes, blocks, samplers) {
              if (name === void 0) {
                name = '';
              }

              if (stages === void 0) {
                stages = [];
              }

              if (attributes === void 0) {
                attributes = [];
              }

              if (blocks === void 0) {
                blocks = [];
              }

              if (samplers === void 0) {
                samplers = [];
              }

              this.name = name;
              this.stages = stages;
              this.attributes = attributes;
              this.blocks = blocks;
              this.samplers = samplers;
            });
            var Shader = exports('b9', function (_Obj) {
              _inheritsLoose(Shader, _Obj);

              _createClass(Shader, [{
                key: "id",
                get: function get() {
                  return this._id;
                }
              }, {
                key: "name",
                get: function get() {
                  return this._name;
                }
              }, {
                key: "attributes",
                get: function get() {
                  return this._attributes;
                }
              }, {
                key: "blocks",
                get: function get() {
                  return this._blocks;
                }
              }, {
                key: "samplers",
                get: function get() {
                  return this._samplers;
                }
              }]);

              function Shader(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.SHADER) || this;
                _this._device = void 0;
                _this._id = void 0;
                _this._name = '';
                _this._stages = [];
                _this._attributes = [];
                _this._blocks = [];
                _this._samplers = [];
                _this._device = device;
                _this._id = Shader._shaderIdGen++;
                return _this;
              }

              return Shader;
            }(Obj));
            Shader._shaderIdGen = 0;

            var DrawInfo = exports('C', function DrawInfo(vertexCount, firstVertex, indexCount, firstIndex, vertexOffset, instanceCount, firstInstance) {
              if (vertexCount === void 0) {
                vertexCount = 0;
              }

              if (firstVertex === void 0) {
                firstVertex = 0;
              }

              if (indexCount === void 0) {
                indexCount = 0;
              }

              if (firstIndex === void 0) {
                firstIndex = 0;
              }

              if (vertexOffset === void 0) {
                vertexOffset = 0;
              }

              if (instanceCount === void 0) {
                instanceCount = 0;
              }

              if (firstInstance === void 0) {
                firstInstance = 0;
              }

              this.vertexCount = vertexCount;
              this.firstVertex = firstVertex;
              this.indexCount = indexCount;
              this.firstIndex = firstIndex;
              this.vertexOffset = vertexOffset;
              this.instanceCount = instanceCount;
              this.firstInstance = firstInstance;
            });
            var DRAW_INFO_SIZE = exports('y', 28);
            var IndirectBuffer = exports('I', function IndirectBuffer(drawInfos) {
              if (drawInfos === void 0) {
                drawInfos = [];
              }

              this.drawInfos = drawInfos;
            });
            var BufferInfo = exports('z', function BufferInfo(usage, memUsage, size, stride, flags) {
              if (size === void 0) {
                size = 0;
              }

              if (stride === void 0) {
                stride = 0;
              }

              if (flags === void 0) {
                flags = BufferFlagBit.NONE;
              }

              this.usage = usage;
              this.memUsage = memUsage;
              this.size = size;
              this.stride = stride;
              this.flags = flags;
            });
            var BufferViewInfo = exports('A', function BufferViewInfo(buffer, offset, range) {
              if (offset === void 0) {
                offset = 0;
              }

              if (range === void 0) {
                range = 0;
              }

              this.buffer = buffer;
              this.offset = offset;
              this.range = range;
            });
            var Buffer = exports('aY', function (_Obj) {
              _inheritsLoose(Buffer, _Obj);

              _createClass(Buffer, [{
                key: "usage",
                get: function get() {
                  return this._usage;
                }
              }, {
                key: "memUsage",
                get: function get() {
                  return this._memUsage;
                }
              }, {
                key: "size",
                get: function get() {
                  return this._size;
                }
              }, {
                key: "stride",
                get: function get() {
                  return this._stride;
                }
              }, {
                key: "count",
                get: function get() {
                  return this._count;
                }
              }, {
                key: "flags",
                get: function get() {
                  return this._flags;
                }
              }, {
                key: "backupBuffer",
                get: function get() {
                  return this._bakcupBuffer;
                }
              }]);

              function Buffer(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.BUFFER) || this;
                _this._device = void 0;
                _this._usage = BufferUsageBit.NONE;
                _this._memUsage = MemoryUsageBit.NONE;
                _this._size = 0;
                _this._stride = 1;
                _this._count = 0;
                _this._flags = BufferFlagBit.NONE;
                _this._bakcupBuffer = null;
                _this._indirectBuffer = null;
                _this._isBufferView = false;
                _this._device = device;
                return _this;
              }

              return Buffer;
            }(Obj));

            var getUint8ForString = String.prototype.charCodeAt;

            function getUint8ForArray(idx) {
              return this[idx];
            }

            function murmurhash2_32_gc(input, seed) {
              var l = input.length;
              var h = seed ^ l;
              var i = 0;
              var getUint8 = typeof input === 'string' ? getUint8ForString : getUint8ForArray;

              while (l >= 4) {
                var k = getUint8.call(input, i) & 0xff | (getUint8.call(input, ++i) & 0xff) << 8 | (getUint8.call(input, ++i) & 0xff) << 16 | (getUint8.call(input, ++i) & 0xff) << 24;
                k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
                k ^= k >>> 24;
                k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
                h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
                l -= 4;
                ++i;
              }

              switch (l) {
                case 3:
                  h ^= (getUint8.call(input, i + 2) & 0xff) << 16;

                case 2:
                  h ^= (getUint8.call(input, i + 1) & 0xff) << 8;

                case 1:
                  h ^= getUint8.call(input, i) & 0xff;
                  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
              }

              h ^= h >>> 13;
              h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
              h ^= h >>> 15;
              return h >>> 0;
            }

            var ColorAttachment = exports('E', function ColorAttachment(format, sampleCount, loadOp, storeOp, beginLayout, endLayout) {
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
            var DepthStencilAttachment = exports('F', function DepthStencilAttachment(format, sampleCount, depthLoadOp, depthStoreOp, stencilLoadOp, stencilStoreOp, beginLayout, endLayout) {
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
            var SubPassInfo = exports('G', function SubPassInfo(bindPoint, inputs, colors, resolves, depthStencil, preserves) {
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
            var RenderPassInfo = exports('R', function RenderPassInfo(colorAttachments, depthStencilAttachment, subPasses) {
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
            var RenderPass = exports('b7', function (_Obj) {
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
              }

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

            var SamplerInfo = exports('H', function SamplerInfo(minFilter, magFilter, mipFilter, addressU, addressV, addressW, maxAnisotropy, cmpFunc, borderColor, minLOD, maxLOD, mipLODBias) {
              if (minFilter === void 0) {
                minFilter = Filter.LINEAR;
              }

              if (magFilter === void 0) {
                magFilter = Filter.LINEAR;
              }

              if (mipFilter === void 0) {
                mipFilter = Filter.NONE;
              }

              if (addressU === void 0) {
                addressU = Address.WRAP;
              }

              if (addressV === void 0) {
                addressV = Address.WRAP;
              }

              if (addressW === void 0) {
                addressW = Address.WRAP;
              }

              if (maxAnisotropy === void 0) {
                maxAnisotropy = 16;
              }

              if (cmpFunc === void 0) {
                cmpFunc = ComparisonFunc.NEVER;
              }

              if (borderColor === void 0) {
                borderColor = new Color$1();
              }

              if (minLOD === void 0) {
                minLOD = 0;
              }

              if (maxLOD === void 0) {
                maxLOD = 0;
              }

              if (mipLODBias === void 0) {
                mipLODBias = 0.0;
              }

              this.minFilter = minFilter;
              this.magFilter = magFilter;
              this.mipFilter = mipFilter;
              this.addressU = addressU;
              this.addressV = addressV;
              this.addressW = addressW;
              this.maxAnisotropy = maxAnisotropy;
              this.cmpFunc = cmpFunc;
              this.borderColor = borderColor;
              this.minLOD = minLOD;
              this.maxLOD = maxLOD;
              this.mipLODBias = mipLODBias;
            });
            var Sampler = exports('b8', function (_Obj) {
              _inheritsLoose(Sampler, _Obj);

              _createClass(Sampler, [{
                key: "minFilter",
                get: function get() {
                  return this._minFilter;
                }
              }, {
                key: "magFilter",
                get: function get() {
                  return this._magFilter;
                }
              }, {
                key: "mipFilter",
                get: function get() {
                  return this._mipFilter;
                }
              }, {
                key: "addressU",
                get: function get() {
                  return this._addressU;
                }
              }, {
                key: "addressV",
                get: function get() {
                  return this._addressV;
                }
              }, {
                key: "addressW",
                get: function get() {
                  return this._addressW;
                }
              }, {
                key: "maxAnisotropy",
                get: function get() {
                  return this._maxAnisotropy;
                }
              }, {
                key: "cmpFunc",
                get: function get() {
                  return this._cmpFunc;
                }
              }, {
                key: "borderColor",
                get: function get() {
                  return this._borderColor;
                }
              }, {
                key: "minLOD",
                get: function get() {
                  return this._minLOD;
                }
              }, {
                key: "maxLOD",
                get: function get() {
                  return this._maxLOD;
                }
              }, {
                key: "mipLODBias",
                get: function get() {
                  return this._mipLODBias;
                }
              }]);

              function Sampler(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.SAMPLER) || this;
                _this._device = void 0;
                _this._minFilter = Filter.LINEAR;
                _this._magFilter = Filter.LINEAR;
                _this._mipFilter = Filter.NONE;
                _this._addressU = Address.WRAP;
                _this._addressV = Address.WRAP;
                _this._addressW = Address.WRAP;
                _this._maxAnisotropy = 16;
                _this._cmpFunc = ComparisonFunc.NEVER;
                _this._borderColor = new Color$1();
                _this._minLOD = 0;
                _this._maxLOD = 0;
                _this._mipLODBias = 0.0;
                _this._device = device;
                return _this;
              }

              return Sampler;
            }(Obj));

            var DESCRIPTOR_BUFFER_TYPE = exports('J', DescriptorType.UNIFORM_BUFFER | DescriptorType.DYNAMIC_UNIFORM_BUFFER | DescriptorType.STORAGE_BUFFER | DescriptorType.DYNAMIC_STORAGE_BUFFER);
            var DESCRIPTOR_SAMPLER_TYPE = exports('K', DescriptorType.SAMPLER);
            var DescriptorSetInfo = exports('L', function DescriptorSetInfo(layout) {
              this.layout = layout;
            });
            var DescriptorSet = exports('aX', function (_Obj) {
              _inheritsLoose(DescriptorSet, _Obj);

              _createClass(DescriptorSet, [{
                key: "layout",
                get: function get() {
                  return this._layout;
                }
              }]);

              function DescriptorSet(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.DESCRIPTOR_SET) || this;
                _this._device = void 0;
                _this._layout = null;
                _this._buffers = [];
                _this._textures = [];
                _this._samplers = [];
                _this._isDirty = false;
                _this._device = device;
                return _this;
              }

              var _proto = DescriptorSet.prototype;

              _proto.bindBuffer = function bindBuffer(binding, buffer, index) {
                if (index === void 0) {
                  index = 0;
                }

                var bindingIndex = this._layout.bindingIndices[binding];
                var info = this._layout.bindings[bindingIndex];

                if (!info) {
                  return;
                }

                if (info.descriptorType & DESCRIPTOR_BUFFER_TYPE) {
                  var descriptorIndex = this._layout.descriptorIndices[binding];

                  if (this._buffers[descriptorIndex + index] !== buffer) {
                    this._buffers[descriptorIndex + index] = buffer;
                    this._isDirty = true;
                  }
                } else {
                  console.warn('Setting binding is not DescriptorType.UNIFORM_BUFFER.');
                }
              };

              _proto.bindSampler = function bindSampler(binding, sampler, index) {
                if (index === void 0) {
                  index = 0;
                }

                var bindingIndex = this._layout.bindingIndices[binding];
                var info = this._layout.bindings[bindingIndex];

                if (!info) {
                  return;
                }

                if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
                  var descriptorIndex = this._layout.descriptorIndices[binding];

                  if (this._samplers[descriptorIndex + index] !== sampler) {
                    this._samplers[descriptorIndex + index] = sampler;
                    this._isDirty = true;
                  }
                } else {
                  console.warn('Setting binding is not DescriptorType.SAMPLER.');
                }
              };

              _proto.bindTexture = function bindTexture(binding, texture, index) {
                if (index === void 0) {
                  index = 0;
                }

                var bindingIndex = this._layout.bindingIndices[binding];
                var info = this._layout.bindings[bindingIndex];

                if (!info) {
                  return;
                }

                if (info.descriptorType & DESCRIPTOR_SAMPLER_TYPE) {
                  var descriptorIndex = this._layout.descriptorIndices[binding];

                  if (this._textures[descriptorIndex + index] !== texture) {
                    this._textures[descriptorIndex + index] = texture;
                    this._isDirty = true;
                  }
                } else {
                  console.warn('Setting binding is not DescriptorType.SAMPLER.');
                }
              };

              _proto.getBuffer = function getBuffer(binding, index) {
                if (index === void 0) {
                  index = 0;
                }

                var descriptorIndex = this._layout.descriptorIndices[binding];
                return this._buffers[descriptorIndex + index];
              };

              _proto.getSampler = function getSampler(binding, index) {
                if (index === void 0) {
                  index = 0;
                }

                var descriptorIndex = this._layout.descriptorIndices[binding];
                return this._samplers[descriptorIndex + index];
              };

              _proto.getTexture = function getTexture(binding, index) {
                if (index === void 0) {
                  index = 0;
                }

                var descriptorIndex = this._layout.descriptorIndices[binding];
                return this._textures[descriptorIndex + index];
              };

              return DescriptorSet;
            }(Obj));

            var DescriptorSetLayoutBinding = exports('N', function DescriptorSetLayoutBinding(binding, descriptorType, count, stageFlags, immutableSamplers) {
              if (binding === void 0) {
                binding = -1;
              }

              if (descriptorType === void 0) {
                descriptorType = DescriptorType.UNKNOWN;
              }

              if (count === void 0) {
                count = 0;
              }

              if (stageFlags === void 0) {
                stageFlags = ShaderStageFlagBit.NONE;
              }

              if (immutableSamplers === void 0) {
                immutableSamplers = [];
              }

              this.binding = binding;
              this.descriptorType = descriptorType;
              this.count = count;
              this.stageFlags = stageFlags;
              this.immutableSamplers = immutableSamplers;
            });
            var DescriptorSetLayoutInfo = exports('M', function DescriptorSetLayoutInfo(bindings) {
              if (bindings === void 0) {
                bindings = [];
              }

              this.bindings = bindings;
            });
            var DESCRIPTOR_DYNAMIC_TYPE = exports('b2', DescriptorType.DYNAMIC_STORAGE_BUFFER | DescriptorType.DYNAMIC_UNIFORM_BUFFER);
            var DescriptorSetLayout = exports('b3', function (_Obj) {
              _inheritsLoose(DescriptorSetLayout, _Obj);

              _createClass(DescriptorSetLayout, [{
                key: "bindings",
                get: function get() {
                  return this._bindings;
                }
              }, {
                key: "bindingIndices",
                get: function get() {
                  return this._bindingIndices;
                }
              }, {
                key: "descriptorIndices",
                get: function get() {
                  return this._descriptorIndices;
                }
              }]);

              function DescriptorSetLayout(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.DESCRIPTOR_SET_LAYOUT) || this;
                _this._device = void 0;
                _this._bindings = [];
                _this._bindingIndices = [];
                _this._descriptorIndices = [];
                _this._device = device;
                return _this;
              }

              return DescriptorSetLayout;
            }(Obj));

            var CommandBufferInfo = exports('O', function CommandBufferInfo(queue, type) {
              if (type === void 0) {
                type = CommandBufferType.PRIMARY;
              }

              this.queue = queue;
              this.type = type;
            });
            var CommandBuffer = exports('aZ', function (_Obj) {
              _inheritsLoose(CommandBuffer, _Obj);

              _createClass(CommandBuffer, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }, {
                key: "queue",
                get: function get() {
                  return this._queue;
                }
              }, {
                key: "numDrawCalls",
                get: function get() {
                  return this._numDrawCalls;
                }
              }, {
                key: "numInstances",
                get: function get() {
                  return this._numInstances;
                }
              }, {
                key: "numTris",
                get: function get() {
                  return this._numTris;
                }
              }]);

              function CommandBuffer(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.COMMAND_BUFFER) || this;
                _this._device = void 0;
                _this._queue = null;
                _this._type = CommandBufferType.PRIMARY;
                _this._numDrawCalls = 0;
                _this._numInstances = 0;
                _this._numTris = 0;
                _this._device = device;
                return _this;
              }

              return CommandBuffer;
            }(Obj));

            var FramebufferInfo = exports('P', function FramebufferInfo(renderPass, colorTextures, depthStencilTexture, colorMipmapLevels, depStencilMipmapLevel) {
              if (colorTextures === void 0) {
                colorTextures = [];
              }

              if (depthStencilTexture === void 0) {
                depthStencilTexture = null;
              }

              if (colorMipmapLevels === void 0) {
                colorMipmapLevels = [];
              }

              if (depStencilMipmapLevel === void 0) {
                depStencilMipmapLevel = 0;
              }

              this.renderPass = renderPass;
              this.colorTextures = colorTextures;
              this.depthStencilTexture = depthStencilTexture;
              this.colorMipmapLevels = colorMipmapLevels;
              this.depStencilMipmapLevel = depStencilMipmapLevel;
            });
            var Framebuffer = exports('a$', function (_Obj) {
              _inheritsLoose(Framebuffer, _Obj);

              _createClass(Framebuffer, [{
                key: "renderPass",
                get: function get() {
                  return this._renderPass;
                }
              }, {
                key: "colorTextures",
                get: function get() {
                  return this._colorTextures;
                }
              }, {
                key: "depthStencilTexture",
                get: function get() {
                  return this._depthStencilTexture;
                }
              }]);

              function Framebuffer(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.FRAMEBUFFER) || this;
                _this._device = void 0;
                _this._renderPass = null;
                _this._colorTextures = [];
                _this._depthStencilTexture = null;
                _this._device = device;
                return _this;
              }

              return Framebuffer;
            }(Obj));

            var PipelineLayoutInfo = exports('Q', function PipelineLayoutInfo(setLayouts) {
              if (setLayouts === void 0) {
                setLayouts = [];
              }

              this.setLayouts = setLayouts;
            });
            var PipelineLayout = exports('b4', function (_Obj) {
              _inheritsLoose(PipelineLayout, _Obj);

              _createClass(PipelineLayout, [{
                key: "setLayouts",
                get: function get() {
                  return this._setLayouts;
                }
              }]);

              function PipelineLayout(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.PIPELINE_LAYOUT) || this;
                _this._device = void 0;
                _this._setLayouts = [];
                _this._device = device;
                return _this;
              }

              return PipelineLayout;
            }(Obj));

            var FenceInfo = exports('V', function FenceInfo() {});
            var Fence = exports('b5', function (_Obj) {
              _inheritsLoose(Fence, _Obj);

              function Fence(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.FENCE) || this;
                _this._device = void 0;
                _this._device = device;
                return _this;
              }

              return Fence;
            }(Obj));

            var QueueInfo = exports('W', function QueueInfo(type) {
              if (type === void 0) {
                type = QueueType.GRAPHICS;
              }

              this.type = type;
            });
            var Queue = exports('b6', function (_Obj) {
              _inheritsLoose(Queue, _Obj);

              _createClass(Queue, [{
                key: "type",
                get: function get() {
                  return this._type;
                }
              }]);

              function Queue(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.QUEUE) || this;
                _this._device = void 0;
                _this._type = QueueType.GRAPHICS;
                _this._isAsync = false;
                _this._device = device;
                return _this;
              }

              var _proto = Queue.prototype;

              _proto.isAsync = function isAsync() {
                return this._isAsync;
              };

              return Queue;
            }(Obj));

            var Attribute = exports('b0', function Attribute(name, format, isNormalized, stream, isInstanced, location) {
              if (name === void 0) {
                name = '';
              }

              if (format === void 0) {
                format = Format.UNKNOWN;
              }

              if (isNormalized === void 0) {
                isNormalized = false;
              }

              if (stream === void 0) {
                stream = 0;
              }

              if (isInstanced === void 0) {
                isInstanced = false;
              }

              if (location === void 0) {
                location = 0;
              }

              this.name = name;
              this.format = format;
              this.isNormalized = isNormalized;
              this.stream = stream;
              this.isInstanced = isInstanced;
              this.location = location;
            });
            var InputAssemblerInfo = exports('X', function InputAssemblerInfo(attributes, vertexBuffers, indexBuffer, indirectBuffer) {
              if (attributes === void 0) {
                attributes = [];
              }

              if (vertexBuffers === void 0) {
                vertexBuffers = [];
              }

              if (indexBuffer === void 0) {
                indexBuffer = null;
              }

              if (indirectBuffer === void 0) {
                indirectBuffer = null;
              }

              this.attributes = attributes;
              this.vertexBuffers = vertexBuffers;
              this.indexBuffer = indexBuffer;
              this.indirectBuffer = indirectBuffer;
            });
            var InputAssembler = exports('b1', function (_Obj) {
              _inheritsLoose(InputAssembler, _Obj);

              _createClass(InputAssembler, [{
                key: "vertexBuffers",
                get: function get() {
                  return this._vertexBuffers;
                }
              }, {
                key: "indexBuffer",
                get: function get() {
                  return this._indexBuffer;
                }
              }, {
                key: "attributes",
                get: function get() {
                  return this._attributes;
                }
              }, {
                key: "attributesHash",
                get: function get() {
                  return this._attributesHash;
                }
              }, {
                key: "vertexCount",
                get: function get() {
                  return this._vertexCount;
                },
                set: function set(count) {
                  this._vertexCount = count;
                }
              }, {
                key: "firstVertex",
                get: function get() {
                  return this._firstVertex;
                },
                set: function set(first) {
                  this._firstVertex = first;
                }
              }, {
                key: "indexCount",
                get: function get() {
                  return this._indexCount;
                },
                set: function set(count) {
                  this._indexCount = count;
                }
              }, {
                key: "firstIndex",
                get: function get() {
                  return this._firstIndex;
                },
                set: function set(first) {
                  this._firstIndex = first;
                }
              }, {
                key: "vertexOffset",
                get: function get() {
                  return this._vertexOffset;
                },
                set: function set(offset) {
                  this._vertexOffset = offset;
                }
              }, {
                key: "instanceCount",
                get: function get() {
                  return this._instanceCount;
                },
                set: function set(count) {
                  this._instanceCount = count;
                }
              }, {
                key: "firstInstance",
                get: function get() {
                  return this._firstInstance;
                },
                set: function set(first) {
                  this._firstInstance = first;
                }
              }, {
                key: "indirectBuffer",
                get: function get() {
                  return this._indirectBuffer;
                }
              }]);

              function InputAssembler(device) {
                var _this;

                _this = _Obj.call(this, ObjectType.INPUT_ASSEMBLER) || this;
                _this._device = void 0;
                _this._attributes = [];
                _this._vertexBuffers = [];
                _this._indexBuffer = null;
                _this._vertexCount = 0;
                _this._firstVertex = 0;
                _this._indexCount = 0;
                _this._firstIndex = 0;
                _this._vertexOffset = 0;
                _this._instanceCount = 0;
                _this._firstInstance = 0;
                _this._attributesHash = 0;
                _this._indirectBuffer = null;
                _this._device = device;
                return _this;
              }

              var _proto = InputAssembler.prototype;

              _proto.getVertexBuffer = function getVertexBuffer(stream) {
                if (stream === void 0) {
                  stream = 0;
                }

                if (stream < this._vertexBuffers.length) {
                  return this._vertexBuffers[stream];
                } else {
                  return null;
                }
              };

              _proto.computeAttributesHash = function computeAttributesHash() {
                var res = 'attrs';

                for (var i = 0; i < this.attributes.length; ++i) {
                  var at = this.attributes[i];
                  res += "," + at.name + "," + at.format + "," + at.isNormalized + "," + at.stream + "," + at.isInstanced;
                }

                return murmurhash2_32_gc(res, 666);
              };

              return InputAssembler;
            }(Obj));

            var polyfillCC = {
              Device: Device,
              Buffer: Buffer,
              Texture: Texture,
              Sampler: Sampler,
              Shader: Shader,
              InputAssembler: InputAssembler,
              RenderPass: RenderPass,
              Framebuffer: Framebuffer,
              PipelineState: PipelineState,
              CommandBuffer: CommandBuffer,
              Queue: Queue,
              FormatSize: FormatSize,
              FormatSurfaceSize: FormatSurfaceSize,
              GetTypeSize: GetTypeSize,
              getTypedArrayConstructor: getTypedArrayConstructor,
              MAX_ATTACHMENTS: MAX_ATTACHMENTS,
              ObjectType: ObjectType,
              Obj: Obj,
              AttributeName: AttributeName,
              Type: Type,
              Format: Format,
              BufferUsageBit: BufferUsageBit,
              MemoryUsageBit: MemoryUsageBit,
              BufferFlagBit: BufferFlagBit,
              BufferAccessBit: BufferAccessBit,
              PrimitiveMode: PrimitiveMode,
              PolygonMode: PolygonMode,
              ShadeModel: ShadeModel,
              CullMode: CullMode,
              ComparisonFunc: ComparisonFunc,
              StencilOp: StencilOp,
              BlendOp: BlendOp,
              BlendFactor: BlendFactor,
              ColorMask: ColorMask,
              Filter: Filter,
              Address: Address,
              TextureType: TextureType,
              TextureUsageBit: TextureUsageBit,
              SampleCount: SampleCount,
              TextureFlagBit: TextureFlagBit,
              ShaderStageFlagBit: ShaderStageFlagBit,
              DescriptorType: DescriptorType,
              CommandBufferType: CommandBufferType,
              LoadOp: LoadOp,
              StoreOp: StoreOp,
              TextureLayout: TextureLayout,
              PipelineBindPoint: PipelineBindPoint,
              DynamicStateFlagBit: DynamicStateFlagBit,
              StencilFace: StencilFace,
              QueueType: QueueType,
              Rect: Rect$1,
              Viewport: Viewport,
              Color: Color$1,
              ClearFlag: ClearFlag,
              Offset: Offset,
              Extent: Extent,
              TextureSubres: TextureSubres,
              TextureCopy: TextureCopy,
              BufferTextureCopy: BufferTextureCopy,
              FormatType: FormatType,
              FormatInfo: FormatInfo,
              MemoryStatus: MemoryStatus,
              FormatInfos: FormatInfos
            };

            replaceProperty(legacyCC, 'cc', [{
              name: 'GFXDynamicState',
              newName: 'DynamicStateFlagBit'
            }, {
              name: 'GFXBindingType',
              newName: 'DescriptorType'
            }, {
              name: 'GFXBindingLayout',
              newName: 'DescriptorSet'
            }]);
            removeProperty(CommandBuffer.prototype, 'CommandBuffer.prototype', [{
              name: 'bindBindingLayout',
              suggest: 'Use `bindDescriptorSet` instead'
            }]);
            var special = {
              MAX_ATTACHMENTS: 'GFX_MAX_ATTACHMENTS',
              Obj: 'GFXObject',
              getTypedArrayConstructor: ''
            };

            for (var api in polyfillCC) {
              var deprecated = special[api];

              if (deprecated === '') {
                continue;
              } else if (deprecated === undefined) {
                deprecated = "GFX" + api;
              }

              replaceProperty(legacyCC, 'cc', [{
                name: deprecated,
                newName: api,
                target: legacyCC.gfx,
                targetName: 'cc.gfx'
              }]);
            }

            var TextureViewInfo$1 = exports('bc', gfx.TextureViewInfo);
            var Texture$1 = exports('bd', gfx.Texture);
            var Device$1 = exports('be', gfx.Device);
            var Shader$1 = exports('bf', gfx.Shader);
            var Attribute$1 = exports('bg', gfx.Attribute);
            var InputAssembler$1 = exports('bh', gfx.InputAssembler);
            var Buffer$1 = exports('bi', gfx.Buffer);
            var Sampler$1 = exports('bj', gfx.Sampler);
            var Fence$1 = exports('bk', gfx.Fence);
            var RenderPass$1 = exports('bl', gfx.RenderPass);
            var Queue$1 = exports('bm', gfx.Queue);
            var PipelineLayout$1 = exports('bn', gfx.PipelineLayout);
            var DescriptorSetLayout$1 = exports('bo', gfx.DescriptorSetLayout);
            var Framebuffer$1 = exports('bp', gfx.Framebuffer);
            var CommandBuffer$1 = exports('bq', gfx.CommandBuffer);
            legacyCC.Device = Device$1;
            legacyCC.Buffer = Buffer$1;
            legacyCC.Texture = Texture$1;
            legacyCC.Sampler = Sampler$1;
            legacyCC.Shader = Shader$1;
            legacyCC.InputAssembler = InputAssembler$1;
            legacyCC.RenderPass = RenderPass$1;
            legacyCC.Framebuffer = Framebuffer$1;
            legacyCC.PipelineState = PipelineState;
            legacyCC.CommandBuffer = CommandBuffer$1;
            legacyCC.Queue = Queue$1;
            Object.assign(legacyCC, Defines);

            var layerList = {
              NONE: 0,
              IGNORE_RAYCAST: 1 << 20,
              GIZMOS: 1 << 21,
              EDITOR: 1 << 22,
              UI_3D: 1 << 23,
              SCENE_GIZMO: 1 << 24,
              UI_2D: 1 << 25,
              PROFILER: 1 << 28,
              DEFAULT: 1 << 30,
              ALL: 0xffffffff
            };
            var Layers = exports('dM', function () {
              function Layers() {}

              Layers.makeMaskInclude = function makeMaskInclude(includes) {
                var mask = 0;

                for (var _iterator = _createForOfIteratorHelperLoose(includes), _step; !(_step = _iterator()).done;) {
                  var inc = _step.value;
                  mask |= inc;
                }

                return mask;
              };

              Layers.makeMaskExclude = function makeMaskExclude(excludes) {
                return ~Layers.makeMaskInclude(excludes);
              };

              Layers.addLayer = function addLayer(name, bitNum) {
                if (bitNum === undefined) {
                  console.warn('bitNum can\'t be undefined');
                  return;
                }

                if (bitNum > 19 || bitNum < 0) {
                  console.warn('maximum layers reached.');
                  return;
                }

                Layers.Enum[name] = 1 << bitNum;
                Layers.Enum[bitNum] = name;
                Layers.BitMask[name] = 1 << bitNum;
                Layers.BitMask[bitNum] = name;
              };

              Layers.deleteLayer = function deleteLayer(bitNum) {
                if (bitNum > 19 || bitNum < 0) {
                  console.warn('do not change buildin layers.');
                  return;
                }

                delete Layers.Enum[Layers.Enum[bitNum]];
                delete Layers.Enum[bitNum];
                delete Layers.BitMask[Layers.BitMask[bitNum]];
                delete Layers.BitMask[bitNum];
              };

              return Layers;
            }());
            Layers.Enum = Enum(layerList);
            Layers.BitMask = BitMask(_extends({}, layerList));
            legacyCC.Layers = Layers;

            var RenderPassStage;

            (function (RenderPassStage) {
              RenderPassStage[RenderPassStage["DEFAULT"] = 100] = "DEFAULT";
              RenderPassStage[RenderPassStage["UI"] = 200] = "UI";
            })(RenderPassStage || (RenderPassStage = exports('ea', {})));

            legacyCC.RenderPassStage = RenderPassStage;
            var RenderPriority;

            (function (RenderPriority) {
              RenderPriority[RenderPriority["MIN"] = 0] = "MIN";
              RenderPriority[RenderPriority["MAX"] = 255] = "MAX";
              RenderPriority[RenderPriority["DEFAULT"] = 128] = "DEFAULT";
            })(RenderPriority || (RenderPriority = exports('e9', {})));

            var globalDescriptorSetLayout = exports('e8', {
              bindings: [],
              layouts: {}
            });
            var localDescriptorSetLayout = exports('e7', {
              bindings: [],
              layouts: {}
            });
            var PipelineGlobalBindings;

            (function (PipelineGlobalBindings) {
              PipelineGlobalBindings[PipelineGlobalBindings["UBO_GLOBAL"] = 0] = "UBO_GLOBAL";
              PipelineGlobalBindings[PipelineGlobalBindings["UBO_CAMERA"] = 1] = "UBO_CAMERA";
              PipelineGlobalBindings[PipelineGlobalBindings["UBO_SHADOW"] = 2] = "UBO_SHADOW";
              PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_SHADOWMAP"] = 3] = "SAMPLER_SHADOWMAP";
              PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_ENVIRONMENT"] = 4] = "SAMPLER_ENVIRONMENT";
              PipelineGlobalBindings[PipelineGlobalBindings["SAMPLER_SPOT_LIGHTING_MAP"] = 5] = "SAMPLER_SPOT_LIGHTING_MAP";
              PipelineGlobalBindings[PipelineGlobalBindings["COUNT"] = 6] = "COUNT";
            })(PipelineGlobalBindings || (PipelineGlobalBindings = {}));

            var GLOBAL_UBO_COUNT = PipelineGlobalBindings.SAMPLER_SHADOWMAP;
            var GLOBAL_SAMPLER_COUNT = PipelineGlobalBindings.COUNT - GLOBAL_UBO_COUNT;
            var ModelLocalBindings;

            (function (ModelLocalBindings) {
              ModelLocalBindings[ModelLocalBindings["UBO_LOCAL"] = 0] = "UBO_LOCAL";
              ModelLocalBindings[ModelLocalBindings["UBO_FORWARD_LIGHTS"] = 1] = "UBO_FORWARD_LIGHTS";
              ModelLocalBindings[ModelLocalBindings["UBO_SKINNING_ANIMATION"] = 2] = "UBO_SKINNING_ANIMATION";
              ModelLocalBindings[ModelLocalBindings["UBO_SKINNING_TEXTURE"] = 3] = "UBO_SKINNING_TEXTURE";
              ModelLocalBindings[ModelLocalBindings["UBO_MORPH"] = 4] = "UBO_MORPH";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_JOINTS"] = 5] = "SAMPLER_JOINTS";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_POSITION"] = 6] = "SAMPLER_MORPH_POSITION";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_NORMAL"] = 7] = "SAMPLER_MORPH_NORMAL";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_MORPH_TANGENT"] = 8] = "SAMPLER_MORPH_TANGENT";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_LIGHTMAP"] = 9] = "SAMPLER_LIGHTMAP";
              ModelLocalBindings[ModelLocalBindings["SAMPLER_SPRITE"] = 10] = "SAMPLER_SPRITE";
              ModelLocalBindings[ModelLocalBindings["COUNT"] = 11] = "COUNT";
            })(ModelLocalBindings || (ModelLocalBindings = exports('fB', {})));

            var LOCAL_UBO_COUNT = ModelLocalBindings.SAMPLER_JOINTS;
            var LOCAL_SAMPLER_COUNT = ModelLocalBindings.COUNT - LOCAL_UBO_COUNT;
            var SetIndex;

            (function (SetIndex) {
              SetIndex[SetIndex["GLOBAL"] = 0] = "GLOBAL";
              SetIndex[SetIndex["MATERIAL"] = 1] = "MATERIAL";
              SetIndex[SetIndex["LOCAL"] = 2] = "LOCAL";
            })(SetIndex || (SetIndex = exports('e6', {})));

            var bindingMappingInfo = exports('ej', new BindingMappingInfo());
            bindingMappingInfo.bufferOffsets = [0, GLOBAL_UBO_COUNT + LOCAL_UBO_COUNT, GLOBAL_UBO_COUNT];
            bindingMappingInfo.samplerOffsets = [-GLOBAL_UBO_COUNT, GLOBAL_SAMPLER_COUNT + LOCAL_SAMPLER_COUNT, GLOBAL_SAMPLER_COUNT - LOCAL_UBO_COUNT];
            bindingMappingInfo.flexibleSet = 1;
            var UBOGlobal = function UBOGlobal() {};
            UBOGlobal.TIME_OFFSET = 0;
            UBOGlobal.NATIVE_SIZE_OFFSET = UBOGlobal.TIME_OFFSET + 4;
            UBOGlobal.SCREEN_SIZE_OFFSET = UBOGlobal.NATIVE_SIZE_OFFSET + 4;
            UBOGlobal.COUNT = UBOGlobal.SCREEN_SIZE_OFFSET + 4;
            UBOGlobal.SIZE = UBOGlobal.COUNT * 4;
            UBOGlobal.NAME = 'CCGlobal';
            UBOGlobal.BINDING = PipelineGlobalBindings.UBO_GLOBAL;
            UBOGlobal.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOGlobal.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
            UBOGlobal.LAYOUT = new UniformBlock(SetIndex.GLOBAL, UBOGlobal.BINDING, UBOGlobal.NAME, [new Uniform('cc_time', Type.FLOAT4, 1), new Uniform('cc_screenSize', Type.FLOAT4, 1), new Uniform('cc_nativeSize', Type.FLOAT4, 1)], 1);
            globalDescriptorSetLayout.layouts[UBOGlobal.NAME] = UBOGlobal.LAYOUT;
            globalDescriptorSetLayout.bindings[UBOGlobal.BINDING] = UBOGlobal.DESCRIPTOR;
            var UBOCamera = function UBOCamera() {};
            UBOCamera.MAT_VIEW_OFFSET = 0;
            UBOCamera.MAT_VIEW_INV_OFFSET = UBOCamera.MAT_VIEW_OFFSET + 16;
            UBOCamera.MAT_PROJ_OFFSET = UBOCamera.MAT_VIEW_INV_OFFSET + 16;
            UBOCamera.MAT_PROJ_INV_OFFSET = UBOCamera.MAT_PROJ_OFFSET + 16;
            UBOCamera.MAT_VIEW_PROJ_OFFSET = UBOCamera.MAT_PROJ_INV_OFFSET + 16;
            UBOCamera.MAT_VIEW_PROJ_INV_OFFSET = UBOCamera.MAT_VIEW_PROJ_OFFSET + 16;
            UBOCamera.CAMERA_POS_OFFSET = UBOCamera.MAT_VIEW_PROJ_INV_OFFSET + 16;
            UBOCamera.SCREEN_SCALE_OFFSET = UBOCamera.CAMERA_POS_OFFSET + 4;
            UBOCamera.EXPOSURE_OFFSET = UBOCamera.SCREEN_SCALE_OFFSET + 4;
            UBOCamera.MAIN_LIT_DIR_OFFSET = UBOCamera.EXPOSURE_OFFSET + 4;
            UBOCamera.MAIN_LIT_COLOR_OFFSET = UBOCamera.MAIN_LIT_DIR_OFFSET + 4;
            UBOCamera.AMBIENT_SKY_OFFSET = UBOCamera.MAIN_LIT_COLOR_OFFSET + 4;
            UBOCamera.AMBIENT_GROUND_OFFSET = UBOCamera.AMBIENT_SKY_OFFSET + 4;
            UBOCamera.GLOBAL_FOG_COLOR_OFFSET = UBOCamera.AMBIENT_GROUND_OFFSET + 4;
            UBOCamera.GLOBAL_FOG_BASE_OFFSET = UBOCamera.GLOBAL_FOG_COLOR_OFFSET + 4;
            UBOCamera.GLOBAL_FOG_ADD_OFFSET = UBOCamera.GLOBAL_FOG_BASE_OFFSET + 4;
            UBOCamera.COUNT = UBOCamera.GLOBAL_FOG_ADD_OFFSET + 4;
            UBOCamera.SIZE = UBOCamera.COUNT * 4;
            UBOCamera.NAME = 'CCCamera';
            UBOCamera.BINDING = PipelineGlobalBindings.UBO_CAMERA;
            UBOCamera.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOCamera.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
            UBOCamera.LAYOUT = new UniformBlock(SetIndex.GLOBAL, UBOCamera.BINDING, UBOCamera.NAME, [new Uniform('cc_matView', Type.MAT4, 1), new Uniform('cc_matViewInv', Type.MAT4, 1), new Uniform('cc_matProj', Type.MAT4, 1), new Uniform('cc_matProjInv', Type.MAT4, 1), new Uniform('cc_matViewProj', Type.MAT4, 1), new Uniform('cc_matViewProjInv', Type.MAT4, 1), new Uniform('cc_cameraPos', Type.FLOAT4, 1), new Uniform('cc_screenScale', Type.FLOAT4, 1), new Uniform('cc_exposure', Type.FLOAT4, 1), new Uniform('cc_mainLitDir', Type.FLOAT4, 1), new Uniform('cc_mainLitColor', Type.FLOAT4, 1), new Uniform('cc_ambientSky', Type.FLOAT4, 1), new Uniform('cc_ambientGround', Type.FLOAT4, 1), new Uniform('cc_fogColor', Type.FLOAT4, 1), new Uniform('cc_fogBase', Type.FLOAT4, 1), new Uniform('cc_fogAdd', Type.FLOAT4, 1)], 1);
            globalDescriptorSetLayout.layouts[UBOCamera.NAME] = UBOCamera.LAYOUT;
            globalDescriptorSetLayout.bindings[UBOCamera.BINDING] = UBOCamera.DESCRIPTOR;
            var UBOShadow = function UBOShadow() {};
            UBOShadow.MAT_LIGHT_PLANE_PROJ_OFFSET = 0;
            UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET = UBOShadow.MAT_LIGHT_PLANE_PROJ_OFFSET + 16;
            UBOShadow.SHADOW_COLOR_OFFSET = UBOShadow.MAT_LIGHT_VIEW_PROJ_OFFSET + 16;
            UBOShadow.SHADOW_INFO_OFFSET = UBOShadow.SHADOW_COLOR_OFFSET + 4;
            UBOShadow.COUNT = UBOShadow.SHADOW_INFO_OFFSET + 4;
            UBOShadow.SIZE = UBOShadow.COUNT * 4;
            UBOShadow.NAME = 'CCShadow';
            UBOShadow.BINDING = PipelineGlobalBindings.UBO_SHADOW;
            UBOShadow.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOShadow.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.ALL);
            UBOShadow.LAYOUT = new UniformBlock(SetIndex.GLOBAL, UBOShadow.BINDING, UBOShadow.NAME, [new Uniform('cc_matLightPlaneProj', Type.MAT4, 1), new Uniform('cc_matLightViewProj', Type.MAT4, 1), new Uniform('cc_shadowColor', Type.FLOAT4, 1), new Uniform('cc_shadowInfo', Type.FLOAT4, 1)], 1);
            globalDescriptorSetLayout.layouts[UBOShadow.NAME] = UBOShadow.LAYOUT;
            globalDescriptorSetLayout.bindings[UBOShadow.BINDING] = UBOShadow.DESCRIPTOR;
            var UNIFORM_SHADOWMAP_NAME = 'cc_shadowMap';
            var UNIFORM_SHADOWMAP_BINDING = PipelineGlobalBindings.SAMPLER_SHADOWMAP;
            var UNIFORM_SHADOWMAP_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SHADOWMAP_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.FRAGMENT);
            var UNIFORM_SHADOWMAP_LAYOUT = new UniformSampler(SetIndex.GLOBAL, UNIFORM_SHADOWMAP_BINDING, UNIFORM_SHADOWMAP_NAME, Type.SAMPLER2D, 1);
            globalDescriptorSetLayout.layouts[UNIFORM_SHADOWMAP_NAME] = UNIFORM_SHADOWMAP_LAYOUT;
            globalDescriptorSetLayout.bindings[UNIFORM_SHADOWMAP_BINDING] = UNIFORM_SHADOWMAP_DESCRIPTOR;
            var UNIFORM_ENVIRONMENT_NAME = 'cc_environment';
            var UNIFORM_ENVIRONMENT_BINDING = exports('eT', PipelineGlobalBindings.SAMPLER_ENVIRONMENT);
            var UNIFORM_ENVIRONMENT_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_ENVIRONMENT_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.FRAGMENT);
            var UNIFORM_ENVIRONMENT_LAYOUT = new UniformSampler(SetIndex.GLOBAL, UNIFORM_ENVIRONMENT_BINDING, UNIFORM_ENVIRONMENT_NAME, Type.SAMPLER_CUBE, 1);
            globalDescriptorSetLayout.layouts[UNIFORM_ENVIRONMENT_NAME] = UNIFORM_ENVIRONMENT_LAYOUT;
            globalDescriptorSetLayout.bindings[UNIFORM_ENVIRONMENT_BINDING] = UNIFORM_ENVIRONMENT_DESCRIPTOR;
            var UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_NAME = 'cc_spotLightingMap';
            var UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING = PipelineGlobalBindings.SAMPLER_SPOT_LIGHTING_MAP;
            var UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.FRAGMENT);
            var UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_LAYOUT = new UniformSampler(SetIndex.GLOBAL, UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING, UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_NAME, Type.SAMPLER2D, 1);
            globalDescriptorSetLayout.layouts[UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_NAME] = UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_LAYOUT;
            globalDescriptorSetLayout.bindings[UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_BINDING] = UNIFORM_SPOT_LIGHTING_MAP_TEXTURE_DESCRIPTOR;
            var UBOLocal = exports('eR', function UBOLocal() {});
            UBOLocal.MAT_WORLD_OFFSET = 0;
            UBOLocal.MAT_WORLD_IT_OFFSET = UBOLocal.MAT_WORLD_OFFSET + 16;
            UBOLocal.LIGHTINGMAP_UVPARAM = UBOLocal.MAT_WORLD_IT_OFFSET + 16;
            UBOLocal.COUNT = UBOLocal.LIGHTINGMAP_UVPARAM + 4;
            UBOLocal.SIZE = UBOLocal.COUNT * 4;
            UBOLocal.NAME = 'CCLocal';
            UBOLocal.BINDING = ModelLocalBindings.UBO_LOCAL;
            UBOLocal.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOLocal.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOLocal.LAYOUT = new UniformBlock(SetIndex.LOCAL, UBOLocal.BINDING, UBOLocal.NAME, [new Uniform('cc_matWorld', Type.MAT4, 1), new Uniform('cc_matWorldIT', Type.MAT4, 1), new Uniform('cc_lightingMapUVParam', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOLocal.NAME] = UBOLocal.LAYOUT;
            localDescriptorSetLayout.bindings[UBOLocal.BINDING] = UBOLocal.DESCRIPTOR;
            var INST_MAT_WORLD = exports('eS', 'a_matWorld0');
            var UBOLocalBatched = function UBOLocalBatched() {};
            UBOLocalBatched.BATCHING_COUNT = 10;
            UBOLocalBatched.MAT_WORLDS_OFFSET = 0;
            UBOLocalBatched.COUNT = 16 * UBOLocalBatched.BATCHING_COUNT;
            UBOLocalBatched.SIZE = UBOLocalBatched.COUNT * 4;
            UBOLocalBatched.NAME = 'CCLocalBatched';
            UBOLocalBatched.BINDING = ModelLocalBindings.UBO_LOCAL;
            UBOLocalBatched.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOLocalBatched.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOLocalBatched.LAYOUT = new UniformBlock(SetIndex.LOCAL, UBOLocalBatched.BINDING, UBOLocalBatched.NAME, [new Uniform('cc_matWorlds', Type.MAT4, UBOLocalBatched.BATCHING_COUNT)], 1);
            localDescriptorSetLayout.layouts[UBOLocalBatched.NAME] = UBOLocalBatched.LAYOUT;
            localDescriptorSetLayout.bindings[UBOLocalBatched.BINDING] = UBOLocalBatched.DESCRIPTOR;
            var UBOForwardLight = function UBOForwardLight() {};
            UBOForwardLight.LIGHTS_PER_PASS = 1;
            UBOForwardLight.LIGHT_POS_OFFSET = 0;
            UBOForwardLight.LIGHT_COLOR_OFFSET = UBOForwardLight.LIGHT_POS_OFFSET + UBOForwardLight.LIGHTS_PER_PASS * 4;
            UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET = UBOForwardLight.LIGHT_COLOR_OFFSET + UBOForwardLight.LIGHTS_PER_PASS * 4;
            UBOForwardLight.LIGHT_DIR_OFFSET = UBOForwardLight.LIGHT_SIZE_RANGE_ANGLE_OFFSET + UBOForwardLight.LIGHTS_PER_PASS * 4;
            UBOForwardLight.COUNT = UBOForwardLight.LIGHT_DIR_OFFSET + UBOForwardLight.LIGHTS_PER_PASS * 4;
            UBOForwardLight.SIZE = UBOForwardLight.COUNT * 4;
            UBOForwardLight.NAME = 'CCForwardLight';
            UBOForwardLight.BINDING = ModelLocalBindings.UBO_FORWARD_LIGHTS;
            UBOForwardLight.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOForwardLight.BINDING, DescriptorType.DYNAMIC_UNIFORM_BUFFER, 1, ShaderStageFlagBit.FRAGMENT);
            UBOForwardLight.LAYOUT = new UniformBlock(SetIndex.LOCAL, UBOForwardLight.BINDING, UBOForwardLight.NAME, [new Uniform('cc_lightPos', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS), new Uniform('cc_lightColor', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS), new Uniform('cc_lightSizeRangeAngle', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS), new Uniform('cc_lightDir', Type.FLOAT4, UBOForwardLight.LIGHTS_PER_PASS)], 1);
            localDescriptorSetLayout.layouts[UBOForwardLight.NAME] = UBOForwardLight.LAYOUT;
            localDescriptorSetLayout.bindings[UBOForwardLight.BINDING] = UBOForwardLight.DESCRIPTOR;
            var JOINT_UNIFORM_CAPACITY = 30;
            var UBOSkinningTexture = exports('fk', function UBOSkinningTexture() {});
            UBOSkinningTexture.JOINTS_TEXTURE_INFO_OFFSET = 0;
            UBOSkinningTexture.COUNT = UBOSkinningTexture.JOINTS_TEXTURE_INFO_OFFSET + 4;
            UBOSkinningTexture.SIZE = UBOSkinningTexture.COUNT * 4;
            UBOSkinningTexture.NAME = 'CCSkinningTexture';
            UBOSkinningTexture.BINDING = ModelLocalBindings.UBO_SKINNING_TEXTURE;
            UBOSkinningTexture.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOSkinningTexture.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOSkinningTexture.LAYOUT = new UniformBlock(SetIndex.LOCAL, UBOSkinningTexture.BINDING, UBOSkinningTexture.NAME, [new Uniform('cc_jointTextureInfo', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOSkinningTexture.NAME] = UBOSkinningTexture.LAYOUT;
            localDescriptorSetLayout.bindings[UBOSkinningTexture.BINDING] = UBOSkinningTexture.DESCRIPTOR;
            var UBOSkinningAnimation = exports('fi', function UBOSkinningAnimation() {});
            UBOSkinningAnimation.JOINTS_ANIM_INFO_OFFSET = 0;
            UBOSkinningAnimation.COUNT = UBOSkinningAnimation.JOINTS_ANIM_INFO_OFFSET + 4;
            UBOSkinningAnimation.SIZE = UBOSkinningAnimation.COUNT * 4;
            UBOSkinningAnimation.NAME = 'CCSkinningAnimation';
            UBOSkinningAnimation.BINDING = ModelLocalBindings.UBO_SKINNING_ANIMATION;
            UBOSkinningAnimation.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOSkinningAnimation.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOSkinningAnimation.LAYOUT = new UniformBlock(SetIndex.LOCAL, UBOSkinningAnimation.BINDING, UBOSkinningAnimation.NAME, [new Uniform('cc_jointAnimInfo', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOSkinningAnimation.NAME] = UBOSkinningAnimation.LAYOUT;
            localDescriptorSetLayout.bindings[UBOSkinningAnimation.BINDING] = UBOSkinningAnimation.DESCRIPTOR;
            var INST_JOINT_ANIM_INFO = exports('fm', 'a_jointAnimInfo');
            var UBOSkinning = exports('fj', function UBOSkinning() {});
            UBOSkinning.JOINTS_OFFSET = 0;
            UBOSkinning.COUNT = UBOSkinning.JOINTS_OFFSET + JOINT_UNIFORM_CAPACITY * 12;
            UBOSkinning.SIZE = UBOSkinning.COUNT * 4;
            UBOSkinning.NAME = 'CCSkinning';
            UBOSkinning.BINDING = ModelLocalBindings.UBO_SKINNING_TEXTURE;
            UBOSkinning.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOSkinning.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOSkinning.LAYOUT = new UniformBlock(SetIndex.LOCAL, UBOSkinning.BINDING, UBOSkinning.NAME, [new Uniform('cc_joints', Type.FLOAT4, JOINT_UNIFORM_CAPACITY * 3)], 1);
            localDescriptorSetLayout.layouts[UBOSkinning.NAME] = UBOSkinning.LAYOUT;
            localDescriptorSetLayout.bindings[UBOSkinning.BINDING] = UBOSkinning.DESCRIPTOR;
            var UBOMorph = exports('fo', function UBOMorph() {});
            UBOMorph.MAX_MORPH_TARGET_COUNT = 60;
            UBOMorph.OFFSET_OF_WEIGHTS = 0;
            UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH = 4 * UBOMorph.MAX_MORPH_TARGET_COUNT;
            UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT = UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_WIDTH + 4;
            UBOMorph.OFFSET_OF_VERTICES_COUNT = UBOMorph.OFFSET_OF_DISPLACEMENT_TEXTURE_HEIGHT + 4;
            UBOMorph.COUNT_BASE_4_BYTES = 4 * Math.ceil(UBOMorph.MAX_MORPH_TARGET_COUNT / 4) + 4;
            UBOMorph.SIZE = UBOMorph.COUNT_BASE_4_BYTES * 4;
            UBOMorph.NAME = 'CCMorph';
            UBOMorph.BINDING = ModelLocalBindings.UBO_MORPH;
            UBOMorph.DESCRIPTOR = new DescriptorSetLayoutBinding(UBOMorph.BINDING, DescriptorType.UNIFORM_BUFFER, 1, ShaderStageFlagBit.VERTEX);
            UBOMorph.LAYOUT = new UniformBlock(SetIndex.LOCAL, UBOMorph.BINDING, UBOMorph.NAME, [new Uniform('cc_displacementWeights', Type.FLOAT4, UBOMorph.MAX_MORPH_TARGET_COUNT / 4), new Uniform('cc_displacementTextureInfo', Type.FLOAT4, 1)], 1);
            localDescriptorSetLayout.layouts[UBOMorph.NAME] = UBOMorph.LAYOUT;
            localDescriptorSetLayout.bindings[UBOMorph.BINDING] = UBOMorph.DESCRIPTOR;
            var UNIFORM_JOINT_TEXTURE_NAME = 'cc_jointTexture';
            var UNIFORM_JOINT_TEXTURE_BINDING = exports('fl', ModelLocalBindings.SAMPLER_JOINTS);
            var UNIFORM_JOINT_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_JOINT_TEXTURE_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.VERTEX);
            var UNIFORM_JOINT_TEXTURE_LAYOUT = new UniformSampler(SetIndex.LOCAL, UNIFORM_JOINT_TEXTURE_BINDING, UNIFORM_JOINT_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_JOINT_TEXTURE_NAME] = UNIFORM_JOINT_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_JOINT_TEXTURE_BINDING] = UNIFORM_JOINT_TEXTURE_DESCRIPTOR;
            var UNIFORM_POSITION_MORPH_TEXTURE_NAME = 'cc_PositionDisplacements';
            var UNIFORM_POSITION_MORPH_TEXTURE_BINDING = exports('ft', ModelLocalBindings.SAMPLER_MORPH_POSITION);
            var UNIFORM_POSITION_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_POSITION_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.VERTEX);
            var UNIFORM_POSITION_MORPH_TEXTURE_LAYOUT = new UniformSampler(SetIndex.LOCAL, UNIFORM_POSITION_MORPH_TEXTURE_BINDING, UNIFORM_POSITION_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_POSITION_MORPH_TEXTURE_NAME] = UNIFORM_POSITION_MORPH_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_POSITION_MORPH_TEXTURE_BINDING] = UNIFORM_POSITION_MORPH_TEXTURE_DESCRIPTOR;
            var UNIFORM_NORMAL_MORPH_TEXTURE_NAME = 'cc_NormalDisplacements';
            var UNIFORM_NORMAL_MORPH_TEXTURE_BINDING = exports('fs', ModelLocalBindings.SAMPLER_MORPH_NORMAL);
            var UNIFORM_NORMAL_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_NORMAL_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.VERTEX);
            var UNIFORM_NORMAL_MORPH_TEXTURE_LAYOUT = new UniformSampler(SetIndex.LOCAL, UNIFORM_NORMAL_MORPH_TEXTURE_BINDING, UNIFORM_NORMAL_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_NORMAL_MORPH_TEXTURE_NAME] = UNIFORM_NORMAL_MORPH_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_NORMAL_MORPH_TEXTURE_BINDING] = UNIFORM_NORMAL_MORPH_TEXTURE_DESCRIPTOR;
            var UNIFORM_TANGENT_MORPH_TEXTURE_NAME = 'cc_TangentDisplacements';
            var UNIFORM_TANGENT_MORPH_TEXTURE_BINDING = exports('fr', ModelLocalBindings.SAMPLER_MORPH_TANGENT);
            var UNIFORM_TANGENT_MORPH_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_TANGENT_MORPH_TEXTURE_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.VERTEX);
            var UNIFORM_TANGENT_MORPH_TEXTURE_LAYOUT = new UniformSampler(SetIndex.LOCAL, UNIFORM_TANGENT_MORPH_TEXTURE_BINDING, UNIFORM_TANGENT_MORPH_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_TANGENT_MORPH_TEXTURE_NAME] = UNIFORM_TANGENT_MORPH_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_TANGENT_MORPH_TEXTURE_BINDING] = UNIFORM_TANGENT_MORPH_TEXTURE_DESCRIPTOR;
            var UNIFORM_LIGHTMAP_TEXTURE_NAME = 'cc_lightingMap';
            var UNIFORM_LIGHTMAP_TEXTURE_BINDING = exports('eQ', ModelLocalBindings.SAMPLER_LIGHTMAP);
            var UNIFORM_LIGHTMAP_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_LIGHTMAP_TEXTURE_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.FRAGMENT);
            var UNIFORM_LIGHTMAP_TEXTURE_LAYOUT = new UniformSampler(SetIndex.LOCAL, UNIFORM_LIGHTMAP_TEXTURE_BINDING, UNIFORM_LIGHTMAP_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_LIGHTMAP_TEXTURE_NAME] = UNIFORM_LIGHTMAP_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_LIGHTMAP_TEXTURE_BINDING] = UNIFORM_LIGHTMAP_TEXTURE_DESCRIPTOR;
            var UNIFORM_SPRITE_TEXTURE_NAME = 'cc_spriteTexture';
            var UNIFORM_SPRITE_TEXTURE_BINDING = ModelLocalBindings.SAMPLER_SPRITE;
            var UNIFORM_SPRITE_TEXTURE_DESCRIPTOR = new DescriptorSetLayoutBinding(UNIFORM_SPRITE_TEXTURE_BINDING, DescriptorType.SAMPLER, 1, ShaderStageFlagBit.FRAGMENT);
            var UNIFORM_SPRITE_TEXTURE_LAYOUT = new UniformSampler(SetIndex.LOCAL, UNIFORM_SPRITE_TEXTURE_BINDING, UNIFORM_SPRITE_TEXTURE_NAME, Type.SAMPLER2D, 1);
            localDescriptorSetLayout.layouts[UNIFORM_SPRITE_TEXTURE_NAME] = UNIFORM_SPRITE_TEXTURE_LAYOUT;
            localDescriptorSetLayout.bindings[UNIFORM_SPRITE_TEXTURE_BINDING] = UNIFORM_SPRITE_TEXTURE_DESCRIPTOR;
            var CAMERA_DEFAULT_MASK = exports('eP', Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.GIZMOS, Layers.BitMask.EDITOR, Layers.BitMask.SCENE_GIZMO, Layers.BitMask.PROFILER]));
            var CAMERA_EDITOR_MASK = Layers.makeMaskExclude([Layers.BitMask.UI_2D, Layers.BitMask.PROFILER]);
            var MODEL_ALWAYS_MASK = Layers.Enum.ALL;

            var emptyDecorator = function emptyDecorator() {};
            function makeSmartClassDecorator(decorate) {
              return proxyFn;

              function proxyFn(target) {
                if (typeof target === 'function') {
                  return decorate(target);
                } else {
                  return function (constructor) {
                    return decorate(constructor, target);
                  };
                }
              }
            }

            function writeEditorClassProperty(constructor, propertyName, value) {
              var cache = getClassCache(constructor, propertyName);

              if (cache) {
                var proto = getSubDict(cache, 'proto');
                getSubDict(proto, 'editor')[propertyName] = value;
              }
            }

            function makeEditorClassDecoratorFn(propertyName) {
              return function (value) {
                return function (constructor) {
                  writeEditorClassProperty(constructor, propertyName, value);
                };
              };
            }
            function makeSmartEditorClassDecorator(propertyName, defaultValue) {
              return makeSmartClassDecorator(function (constructor, decoratedValue) {
                writeEditorClassProperty(constructor, propertyName, defaultValue !== undefined ? defaultValue : decoratedValue);
              });
            }
            var CACHE_KEY = '__ccclassCache__';
            function getClassCache(ctor, decoratorName) {
              if ( CCClass._isCCClass(ctor)) {
                error('`@%s` should be used after @ccclass for class "%s"', decoratorName, js.getClassName(ctor));
                return null;
              }

              return getSubDict(ctor, CACHE_KEY);
            }
            function getSubDict(obj, key) {
              return obj[key] || (obj[key] = {});
            }

            var ccclass = exports('dQ', makeSmartClassDecorator(function (constructor, name) {
              var base = js.getSuper(constructor);

              if (base === Object) {
                base = null;
              }

              var proto = {
                name: name,
                "extends": base,
                ctor: constructor
              };
              var cache = constructor[CACHE_KEY];

              if (cache) {
                var decoratedProto = cache.proto;

                if (decoratedProto) {
                  js.mixin(proto, decoratedProto);
                }

                constructor[CACHE_KEY] = undefined;
              }

              var res = CCClass(proto);

              {
                var propNames = Object.getOwnPropertyNames(constructor.prototype);

                for (var i = 0; i < propNames.length; ++i) {
                  var prop = propNames[i];

                  if (prop !== 'constructor') {
                    var desc = Object.getOwnPropertyDescriptor(constructor.prototype, prop);
                    var func = desc && desc.value;

                    if (typeof func === 'function') {
                      doValidateMethodWithProps_DEV(func, prop, js.getClassName(constructor), constructor, base);
                    }
                  }
                }
              }

              return res;
            }));

            var requireComponent = exports('fz', makeEditorClassDecoratorFn('requireComponent'));
            var executionOrder = exports('fe', makeEditorClassDecoratorFn('executionOrder'));
            var disallowMultiple = exports('fy',  makeSmartEditorClassDecorator('disallowMultiple', true) );

            function property(target, propertyKey, descriptor) {
              var options = null;

              function normalized(target, propertyKey, descriptor) {
                var cache = getClassCache(target.constructor);

                if (cache) {
                  var ccclassProto = getSubDict(cache, 'proto');
                  var properties = getSubDict(ccclassProto, 'properties');
                  genProperty(target.constructor, properties, propertyKey, options, descriptor, cache);
                }
              }

              if (target === undefined) {
                return property({
                  type: undefined
                });
              } else if (typeof propertyKey === 'undefined') {
                options = target;
                return normalized;
              } else {
                normalized(target, propertyKey, descriptor);
              }
            }

            function getDefaultFromInitializer(initializer) {
              var value;

              try {
                value = initializer();
              } catch (e) {
                return initializer;
              }

              if (typeof value !== 'object' || value === null) {
                return value;
              } else {
                return initializer;
              }
            }

            function extractActualDefaultValues(ctor) {
              var dummyObj;

              try {
                dummyObj = new ctor();
              } catch (e) {
                {
                  warnID(3652, js.getClassName(ctor), e);
                }

                return {};
              }

              return dummyObj;
            }

            function genProperty(ctor, properties, propertyKey, options, descriptor, cache) {
              var fullOptions;
              var isGetset = descriptor && (descriptor.get || descriptor.set);

              if (options) {
                fullOptions = getFullFormOfProperty(options, isGetset);
              }

              var existsPropertyRecord = properties[propertyKey];
              var propertyRecord = js.mixin(existsPropertyRecord || {}, fullOptions || options || {});

              if (isGetset) {
                if ( options && ((fullOptions || options).get || (fullOptions || options).set)) {
                  var errorProps = getSubDict(cache, 'errorProps');

                  if (!errorProps[propertyKey]) {
                    errorProps[propertyKey] = true;
                    warnID(3655, propertyKey, js.getClassName(ctor), propertyKey, propertyKey);
                  }
                }

                if (descriptor.get) {
                  propertyRecord.get = descriptor.get;
                }

                if (descriptor.set) {
                  propertyRecord.set = descriptor.set;
                }
              } else {
                if ( (propertyRecord.get || propertyRecord.set)) {
                  errorID(3655, propertyKey, js.getClassName(ctor), propertyKey, propertyKey);
                  return;
                }

                if (descriptor) {
                  if (descriptor.initializer) {
                    propertyRecord["default"] = getDefaultFromInitializer(descriptor.initializer);
                  }
                } else {
                  var actualDefaultValues = cache["default"] || (cache["default"] = extractActualDefaultValues(ctor));

                  if (actualDefaultValues.hasOwnProperty(propertyKey)) {
                    propertyRecord["default"] = actualDefaultValues[propertyKey];
                  }
                }
              }

              properties[propertyKey] = propertyRecord;
            }

            var serializable = exports('dX', function serializable(target, propertyKey, descriptor) {
              return property(makeSerializable({}))(target, propertyKey, descriptor);
            });
            function formerlySerializedAs(name) {
              return property(makeSerializable({
                formerlySerializedAs: name
              }));
            }
            var editorOnly = exports('ed', function editorOnly(target, propertyKey, descriptor) {
              return property({
                editorOnly: true
              })(target, propertyKey, descriptor);
            });

            function makeSerializable(options) {
              options.__noImplicit = true;

              if (!('serializable' in options)) {
                options.serializable = true;
              }

              return options;
            }

            var executeInEditMode = exports('f9',  makeSmartEditorClassDecorator('executeInEditMode', true) );
            var menu = exports('fb',  makeEditorClassDecoratorFn('menu') );
            var playOnFocus = exports('fI',  makeSmartEditorClassDecorator('playOnFocus', true) );
            var inspector =  makeEditorClassDecoratorFn('inspector') ;
            var icon =  makeEditorClassDecoratorFn('icon') ;
            var help = exports('fa',  makeEditorClassDecoratorFn('help') );
            var editable = exports('ec',  function (target, propertyKey, descriptor) {
              return property(makeEditable({}))(target, propertyKey, descriptor);
            });
            var visible = exports('f3',  function (condition) {
              return property(makeEditable({
                visible: condition
              }));
            });
            var readOnly = exports('fJ',  function (target, propertyKey, descriptor) {
              return property(makeEditable({
                readonly: true
              }))(target, propertyKey, descriptor);
            });
            var displayName = exports('f1',  function (text) {
              return property(makeEditable({
                displayName: text
              }));
            });
            var tooltip = exports('f8',  function (text) {
              return property(makeEditable({
                tooltip: text
              }));
            });
            var range = exports('f4',  function (values) {
              return property(makeEditable({
                range: values
              }));
            });
            var rangeMin = exports('ee',  function (value) {
              return property(makeEditable({
                min: value
              }));
            });
            var rangeMax = exports('ef',  function (value) {
              return property(makeEditable({
                max: value
              }));
            });
            var rangeStep = exports('f5',  function (value) {
              return property(makeEditable({
                step: value
              }));
            });
            var slide = exports('f6',  function (target, propertyKey, descriptor) {
              return property(makeEditable({
                slide: true
              }))(target, propertyKey, descriptor);
            });
            var displayOrder = exports('f0',  function (order) {
              return property(makeEditable({
                displayOrder: order
              }));
            });
            var unit = exports('fh',  function (name) {
              return property(makeEditable({
                unit: name
              }));
            });
            var radian = exports('fE',  function (target, propertyKey, descriptor) {
              return property(makeEditable({
                radian: true
              }))(target, propertyKey, descriptor);
            });
            var multiline = exports('fx',  function (target, propertyKey, descriptor) {
              return property(makeEditable({
                multiline: true
              }))(target, propertyKey, descriptor);
            });
            var disallowAnimation = exports('fv',  emptyDecorator );

            function makeEditable(options) {
              options.__noImplicit = true;

              if (!('visible' in options)) {
                options.visible = true;
              }

              return options;
            }

            var integer = type(CCInteger);

            var _float = exports('eK', type(CCFloat));

            var _boolean = type(CCBoolean);
            var string = exports('fw', type(CCString));
            function type(type) {
              return property({
                type: type
              });
            }

            var Cache = exports('dZ', function () {
              function Cache(map) {
                this._map = null;
                this._count = 0;

                if (map) {
                  this._map = map;
                  this._count = Object.keys(map).length;
                } else {
                  this._map = js.createMap(true);
                  this._count = 0;
                }
              }

              var _proto = Cache.prototype;

              _proto.add = function add(key, val) {
                if (!(key in this._map)) {
                  this._count++;
                }

                return this._map[key] = val;
              };

              _proto.get = function get(key) {
                return this._map[key];
              };

              _proto.has = function has(key) {
                return key in this._map;
              };

              _proto.remove = function remove(key) {
                var out = this._map[key];

                if (key in this._map) {
                  delete this._map[key];
                  this._count--;
                }

                return out;
              };

              _proto.clear = function clear() {
                if (this._count !== 0) {
                  this._map = js.createMap(true);
                  this._count = 0;
                }
              };

              _proto.forEach = function forEach(func) {
                for (var _key in this._map) {
                  func(this._map[_key], _key);
                }
              };

              _proto.find = function find(predicate) {
                for (var _key2 in this._map) {
                  if (predicate(this._map[_key2], _key2)) {
                    return this._map[_key2];
                  }
                }

                return null;
              };

              _proto.destroy = function destroy() {
                this._map = null;
              };

              _createClass(Cache, [{
                key: "count",
                get: function get() {
                  return this._count;
                }
              }]);

              return Cache;
            }());

            var Pipeline = exports('ez', function () {
              function Pipeline(name, funcs) {
                this.id = Pipeline._pipelineId++;
                this.name = '';
                this.pipes = [];
                this.name = name;

                for (var i = 0, l = funcs.length; i < l; i++) {
                  this.pipes.push(funcs[i]);
                }
              }

              var _proto = Pipeline.prototype;

              _proto.insert = function insert(func, index) {
                if (index > this.pipes.length) {
                  warnID(4921);
                  return this;
                }

                this.pipes.splice(index, 0, func);
                return this;
              };

              _proto.append = function append(func) {
                this.pipes.push(func);
                return this;
              };

              _proto.remove = function remove(index) {
                this.pipes.splice(index, 1);
                return this;
              };

              _proto.sync = function sync(task) {
                var pipes = this.pipes;

                if (pipes.length === 0) {
                  return null;
                }

                task.isFinish = false;

                for (var i = 0, l = pipes.length; i < l;) {
                  var pipe = pipes[i];
                  var result = pipe(task);

                  if (result) {
                    task.isFinish = true;
                    return result;
                  }

                  i++;

                  if (i !== l) {
                    task.input = task.output;
                    task.output = null;
                  }
                }

                task.isFinish = true;
                return task.output;
              };

              _proto.async = function async(task) {
                var pipes = this.pipes;

                if (pipes.length === 0) {
                  return;
                }

                task.isFinish = false;

                this._flow(0, task);
              };

              _proto._flow = function _flow(index, task) {
                var _this = this;

                var pipe = this.pipes[index];
                pipe(task, function (result) {
                  if (result) {
                    task.isFinish = true;
                    task.dispatch('complete', result);
                  } else {
                    index++;

                    if (index < _this.pipes.length) {
                      task.input = task.output;
                      task.output = null;

                      _this._flow(index, task);
                    } else {
                      task.isFinish = true;
                      task.dispatch('complete', result, task.output);
                    }
                  }
                });
              };

              return Pipeline;
            }());
            Pipeline._pipelineId = 0;

            var assets = exports('ew', new Cache());
            var files = exports('e2', new Cache());
            var parsed = exports('e1', new Cache());
            var bundles = exports('eF', new Cache());
            var pipeline = exports('eA', new Pipeline('normal load', []));
            var fetchPipeline = exports('ev', new Pipeline('fetch', []));
            var transformPipeline = exports('eC', new Pipeline('transform url', []));
            var references = exports('eI',  null);
            var RequestType;

            (function (RequestType) {
              RequestType["UUID"] = "uuid";
              RequestType["PATH"] = "path";
              RequestType["DIR"] = "dir";
              RequestType["URL"] = "url";
              RequestType["SCENE"] = "scene";
            })(RequestType || (RequestType = exports('eB', {})));

            var presets = exports('eE', {
              "default": {
                priority: 0
              },
              preload: {
                maxConcurrency: 6,
                maxRequestsPerFrame: 2,
                priority: -1
              },
              scene: {
                maxConcurrency: 20,
                maxRequestsPerFrame: 20,
                priority: 1
              },
              bundle: {
                maxConcurrency: 20,
                maxRequestsPerFrame: 20,
                priority: 2
              },
              remote: {
                maxRetryCount: 4
              }
            });
            var BuiltinBundleName;

            (function (BuiltinBundleName) {
              BuiltinBundleName["RESOURCES"] = "resources";
              BuiltinBundleName["MAIN"] = "main";
              BuiltinBundleName["START_SCENE"] = "start-scene";
            })(BuiltinBundleName || (BuiltinBundleName = exports('eG', {})));

            var Task = exports('eu', function () {
              Task.create = function create(options) {
                var out;

                if (Task._deadPool.length !== 0) {
                  out = Task._deadPool.pop();
                  out.set(options);
                } else {
                  out = new Task(options);
                }

                return out;
              };

              function Task(options) {
                this.id = Task._taskId++;
                this.onComplete = null;
                this.onProgress = null;
                this.onError = null;
                this.source = null;
                this.output = null;
                this.input = null;
                this.progress = null;
                this.options = null;
                this.isFinish = true;
                this.set(options);
              }

              var _proto = Task.prototype;

              _proto.set = function set(options) {
                if (options === void 0) {
                  options = Object.create(null);
                }

                this.onComplete = options.onComplete || null;
                this.onProgress = options.onProgress || null;
                this.onError = options.onError || null;
                this.source = this.input = options.input;
                this.output = null;
                this.progress = options.progress;
                this.options = options.options || Object.create(null);
              };

              _proto.dispatch = function dispatch(event, param1, param2, param3, param4) {
                switch (event) {
                  case 'complete':
                    if (this.onComplete) {
                      this.onComplete(param1, param2);
                    }

                    break;

                  case 'progress':
                    if (this.onProgress) {
                      this.onProgress(param1, param2, param3, param4);
                    }

                    break;

                  case 'error':
                    if (this.onError) {
                      this.onError(param1, param2, param3, param4);
                    }

                    break;

                  default:
                    {
                      var str = "on" + event[0].toUpperCase() + event.substr(1);

                      if (typeof this[str] === 'function') {
                        this[str](param1, param2, param3, param4);
                      }

                      break;
                    }
                }
              };

              _proto.recycle = function recycle() {
                if (Task._deadPool.length === Task.MAX_DEAD_NUM) {
                  return;
                }

                this.onComplete = null;
                this.onProgress = null;
                this.onError = null;
                this.source = this.output = this.input = null;
                this.progress = null;
                this.options = null;

                Task._deadPool.push(this);
              };

              return Task;
            }());

            Task.MAX_DEAD_NUM = 500;
            Task._taskId = 0;
            Task._deadPool = [];

            var HexChars = '0123456789abcdef'.split('');
            var _t = ['', '', '', ''];

            var UuidTemplate = _t.concat(_t, '-', _t, '-', _t, '-', _t, '-', _t, _t, _t);

            var Indices = UuidTemplate.map(function (x, i) {
              return x === '-' ? NaN : i;
            }).filter(isFinite);
            function decodeUuid(base64) {
              var strs = base64.split('@');
              var uuid = strs[0];

              if (uuid.length !== 22) {
                return base64;
              }

              UuidTemplate[0] = base64[0];
              UuidTemplate[1] = base64[1];

              for (var i = 2, j = 2; i < 22; i += 2) {
                var lhs = BASE64_VALUES[base64.charCodeAt(i)];
                var rhs = BASE64_VALUES[base64.charCodeAt(i + 1)];
                UuidTemplate[Indices[j++]] = HexChars[lhs >> 2];
                UuidTemplate[Indices[j++]] = HexChars[(lhs & 3) << 2 | rhs >> 4];
                UuidTemplate[Indices[j++]] = HexChars[rhs & 0xF];
              }

              return base64.replace(uuid, UuidTemplate.join(''));
            }

            var _uuidRegex = /.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-@]{8,}).*/;
            function getUuidFromURL(url) {
              var matches = _uuidRegex.exec(url);

              if (matches) {
                return matches[1];
              }

              return '';
            }
            function getUrlWithUuid(uuid, options) {
              options = options || Object.create(null);
              options.__isNative__ = options.isNative;
              options.ext = options.nativeExt;
              var bundle = bundles.find(function (b) {
                return !!b.getAssetInfo(uuid);
              });

              if (bundle) {
                options.bundle = bundle.name;
              }

              return transform(uuid, options);
            }
            function isScene(asset) {
              return asset && (asset instanceof legacyCC.SceneAsset || asset instanceof legacyCC.Scene);
            }
            function normalize(url) {
              if (url) {
                if (url.charCodeAt(0) === 46 && url.charCodeAt(1) === 47) {
                  url = url.slice(2);
                } else if (url.charCodeAt(0) === 47) {
                  url = url.slice(1);
                }
              }

              return url;
            }
            function transform(input, options) {
              var subTask = Task.create({
                input: input,
                options: options
              });
              var urls = [];

              try {
                var result = transformPipeline.sync(subTask);

                for (var _iterator = _createForOfIteratorHelperLoose(result), _step; !(_step = _iterator()).done;) {
                  var requestItem = _step.value;
                  var url = requestItem.url;
                  requestItem.recycle();
                  urls.push(url);
                }
              } catch (e) {
                for (var _iterator2 = _createForOfIteratorHelperLoose(subTask.output), _step2; !(_step2 = _iterator2()).done;) {
                  var item = _step2.value;
                  item.recycle();
                }

                error(e.message, e.stack);
              }

              subTask.recycle();
              return urls.length > 1 ? urls : urls[0];
            }

            var helper = /*#__PURE__*/Object.freeze({
                __proto__: null,
                getUuidFromURL: getUuidFromURL,
                getUrlWithUuid: getUrlWithUuid,
                isScene: isScene,
                normalize: normalize,
                transform: transform,
                decodeUuid: decodeUuid
            });
            exports('eH', helper);

            var Event = exports('dy', function () {
              function Event(type, bubbles) {
                this.type = void 0;
                this.bubbles = void 0;
                this.target = null;
                this.currentTarget = null;
                this.eventPhase = 0;
                this.propagationStopped = false;
                this.propagationImmediateStopped = false;
                this.type = type;
                this.bubbles = !!bubbles;
              }

              var _proto = Event.prototype;

              _proto.unuse = function unuse() {
                this.type = Event.NO_TYPE;
                this.target = null;
                this.currentTarget = null;
                this.eventPhase = Event.NONE;
                this.propagationStopped = false;
                this.propagationImmediateStopped = false;
              };

              _proto.reuse = function reuse(type, bubbles) {
                this.type = type;
                this.bubbles = bubbles || false;
              };

              _proto.isStopped = function isStopped() {
                return this.propagationStopped || this.propagationImmediateStopped;
              };

              _proto.getCurrentTarget = function getCurrentTarget() {
                return this.currentTarget;
              };

              _proto.getType = function getType() {
                return this.type;
              };

              return Event;
            }());

            Event.NO_TYPE = 'no_type';
            Event.TOUCH = 'touch';
            Event.MOUSE = 'mouse';
            Event.KEYBOARD = 'keyboard';
            Event.ACCELERATION = 'acceleration';
            Event.NONE = 0;
            Event.CAPTURING_PHASE = 1;
            Event.AT_TARGET = 2;
            Event.BUBBLING_PHASE = 3;
            legacyCC.Event = Event;

            var Pool$1 = exports('br', function () {
              function Pool(ctor, elementsPerBatch) {
                this._ctor = void 0;
                this._elementsPerBatch = void 0;
                this._nextAvail = void 0;
                this._freepool = [];
                this._ctor = ctor;
                this._elementsPerBatch = Math.max(elementsPerBatch, 1);
                this._nextAvail = this._elementsPerBatch - 1;

                for (var i = 0; i < this._elementsPerBatch; ++i) {
                  this._freepool.push(ctor());
                }
              }

              var _proto = Pool.prototype;

              _proto.alloc = function alloc() {
                if (this._nextAvail < 0) {
                  var elementsPerBatch = this._elementsPerBatch;

                  for (var i = 0; i < elementsPerBatch; i++) {
                    this._freepool.push(this._ctor());
                  }

                  this._nextAvail = elementsPerBatch - 1;
                }

                var ret = this._freepool[this._nextAvail--];
                this._freepool.length--;
                return ret;
              };

              _proto.free = function free(obj) {
                this._freepool.push(obj);

                this._nextAvail++;
              };

              _proto.freeArray = function freeArray(objs) {
                Array.prototype.push.apply(this._freepool, objs);
                this._nextAvail += objs.length;
              };

              _proto.destroy = function destroy(dtor) {
                if (dtor) {
                  for (var i = 0; i <= this._nextAvail; i++) {
                    dtor(this._freepool[i]);
                  }
                }

                this._freepool.length = 0;
                this._nextAvail = -1;
              };

              return Pool;
            }());

            var RecyclePool = exports('bs', function () {
              function RecyclePool(fn, size) {
                this._fn = void 0;
                this._count = 0;
                this._data = void 0;
                this._fn = fn;
                this._data = new Array(size);

                for (var i = 0; i < size; ++i) {
                  this._data[i] = fn();
                }
              }

              var _proto = RecyclePool.prototype;

              _proto.reset = function reset() {
                this._count = 0;
              };

              _proto.resize = function resize(size) {
                if (size > this._data.length) {
                  for (var i = this._data.length; i < size; ++i) {
                    this._data[i] = this._fn();
                  }
                }
              };

              _proto.add = function add() {
                if (this._count >= this._data.length) {
                  this.resize(this._data.length * 2);
                }

                return this._data[this._count++];
              };

              _proto.removeAt = function removeAt(idx) {
                if (idx >= this._count) {
                  return;
                }

                var last = this._count - 1;
                var tmp = this._data[idx];
                this._data[idx] = this._data[last];
                this._data[last] = tmp;
                this._count -= 1;
              };

              _createClass(RecyclePool, [{
                key: "length",
                get: function get() {
                  return this._count;
                }
              }, {
                key: "data",
                get: function get() {
                  return this._data;
                }
              }]);

              return RecyclePool;
            }());

            var CachedArray = exports('bt', function () {
              function CachedArray(length, compareFn) {
                this.array = void 0;
                this.length = 0;
                this._compareFn = void 0;
                this.array = new Array(length);
                this.length = 0;

                if (compareFn !== undefined) {
                  this._compareFn = compareFn;
                } else {
                  this._compareFn = function (a, b) {
                    return a - b;
                  };
                }
              }

              var _proto = CachedArray.prototype;

              _proto.push = function push(item) {
                this.array[this.length++] = item;
              };

              _proto.pop = function pop() {
                return this.array[--this.length];
              };

              _proto.get = function get(idx) {
                return this.array[idx];
              };

              _proto.clear = function clear() {
                this.length = 0;
              };

              _proto.destroy = function destroy() {
                this.length = 0;
                this.array.length = 0;
              };

              _proto.sort = function sort() {
                this.array.length = this.length;
                this.array.sort(this._compareFn);
              };

              _proto.concat = function concat(array) {
                for (var i = 0; i < array.length; ++i) {
                  this.array[this.length++] = array[i];
                }
              };

              _proto.fastRemove = function fastRemove(idx) {
                if (idx >= this.length || idx < 0) {
                  return;
                }

                var last = --this.length;
                this.array[idx] = this.array[last];
              };

              _proto.indexOf = function indexOf(val) {
                return this.array.indexOf(val);
              };

              return CachedArray;
            }());

            var Destroyed = 1 << 0;
            var ToDestroy = 1 << 2;
            var DontSave = 1 << 3;
            var EditorOnly = 1 << 4;
            var Dirty = 1 << 5;
            var DontDestroy = 1 << 6;
            var Destroying = 1 << 7;
            var Deactivating = 1 << 8;
            var LockedInEditor = 1 << 9;
            var HideInHierarchy = 1 << 10;
            var IsOnEnableCalled = 1 << 11;
            var IsEditorOnEnableCalled = 1 << 12;
            var IsPreloadStarted = 1 << 13;
            var IsOnLoadCalled = 1 << 14;
            var IsOnLoadStarted = 1 << 15;
            var IsStartCalled = 1 << 16;
            var IsRotationLocked = 1 << 17;
            var IsScaleLocked = 1 << 18;
            var IsAnchorLocked = 1 << 19;
            var IsSizeLocked = 1 << 20;
            var IsPositionLocked = 1 << 21;
            var PersistentMask = ~(ToDestroy | Dirty | Destroying | DontDestroy | Deactivating | IsPreloadStarted | IsOnLoadStarted | IsOnLoadCalled | IsStartCalled | IsOnEnableCalled | IsEditorOnEnableCalled | IsRotationLocked | IsScaleLocked | IsAnchorLocked | IsSizeLocked | IsPositionLocked);
            var objectsToDestroy = [];

            function compileDestruct(obj, ctor) {
              var shouldSkipId = obj instanceof legacyCC._BaseNode || obj instanceof legacyCC.Component;
              var idToSkip = shouldSkipId ? '_id' : null;
              var key;
              var propsToReset = {};

              for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                  if (key === idToSkip) {
                    continue;
                  }

                  switch (typeof obj[key]) {
                    case 'string':
                      propsToReset[key] = '';
                      break;

                    case 'object':
                    case 'function':
                      propsToReset[key] = null;
                      break;
                  }
                }
              }

              if (CCClass._isCCClass(ctor)) {
                var attrs = legacyCC.Class.Attr.getClassAttrs(ctor);
                var propList = ctor.__props__;

                for (var i = 0; i < propList.length; i++) {
                  key = propList[i];
                  var attrKey = key + legacyCC.Class.Attr.DELIMETER + "default";

                  if (attrKey in attrs) {
                    if (shouldSkipId && key === '_id') {
                      continue;
                    }

                    switch (typeof attrs[attrKey]) {
                      case 'string':
                        propsToReset[key] = '';
                        break;

                      case 'object':
                      case 'function':
                        propsToReset[key] = null;
                        break;

                      case 'undefined':
                        propsToReset[key] = undefined;
                        break;
                    }
                  }
                }
              }

              {
                var func = '';

                for (key in propsToReset) {
                  var statement = void 0;

                  if (CCClass.IDENTIFIER_RE.test(key)) {
                    statement = "o." + key + "=";
                  } else {
                    statement = "o[" + CCClass.escapeForJS(key) + "]=";
                  }

                  var val = propsToReset[key];

                  if (val === '') {
                    val = '""';
                  }

                  func += statement + val + ";\n";
                }

                return Function('o', func);
              }
            }

            var CCObject = exports('dn', function () {
              CCObject._deferredDestroy = function _deferredDestroy() {
                var deleteCount = objectsToDestroy.length;

                for (var i = 0; i < deleteCount; ++i) {
                  var obj = objectsToDestroy[i];

                  if (!(obj._objFlags & Destroyed)) {
                    obj._destroyImmediate();
                  }
                }

                if (deleteCount === objectsToDestroy.length) {
                  objectsToDestroy.length = 0;
                } else {
                  objectsToDestroy.splice(0, deleteCount);
                }
              };

              function CCObject(name) {
                if (name === void 0) {
                  name = '';
                }

                this._objFlags = void 0;
                this._name = void 0;
                this._name = name;
                this._objFlags = 0;
              }

              var _proto = CCObject.prototype;

              _proto.destroy = function destroy() {
                if (this._objFlags & Destroyed) {
                  warnID(5000);
                  return false;
                }

                if (this._objFlags & ToDestroy) {
                  return false;
                }

                this._objFlags |= ToDestroy;
                objectsToDestroy.push(this);

                return true;
              };

              _proto._destruct = function _destruct() {
                var ctor = this.constructor;
                var destruct = ctor.__destruct__;

                if (!destruct) {
                  destruct = compileDestruct(this, ctor);
                  value(ctor, '__destruct__', destruct, true);
                }

                destruct(this);
              };

              _proto._destroyImmediate = function _destroyImmediate() {
                if (this._objFlags & Destroyed) {
                  errorID(5000);
                  return;
                }

                if (this._onPreDestroy) {
                  this._onPreDestroy();
                }

                {
                  this._destruct();
                }

                this._objFlags |= Destroyed;
              };

              _createClass(CCObject, [{
                key: "name",
                get: function get() {
                  return this._name;
                },
                set: function set(value) {
                  this._name = value;
                }
              }, {
                key: "isValid",
                get: function get() {
                  return !(this._objFlags & Destroyed);
                }
              }]);

              return CCObject;
            }());

            var prototype = CCObject.prototype;

            prototype._deserialize = null;
            prototype._onPreDestroy = null;
            CCClass.fastDefine('cc.Object', CCObject, {
              _name: '',
              _objFlags: 0
            });
            value(CCObject, 'Flags', {
              Destroyed: Destroyed,
              DontSave: DontSave,
              EditorOnly: EditorOnly,
              Dirty: Dirty,
              DontDestroy: DontDestroy,
              PersistentMask: PersistentMask,
              Destroying: Destroying,
              Deactivating: Deactivating,
              LockedInEditor: LockedInEditor,
              HideInHierarchy: HideInHierarchy,
              IsPreloadStarted: IsPreloadStarted,
              IsOnLoadStarted: IsOnLoadStarted,
              IsOnLoadCalled: IsOnLoadCalled,
              IsOnEnableCalled: IsOnEnableCalled,
              IsStartCalled: IsStartCalled,
              IsEditorOnEnableCalled: IsEditorOnEnableCalled,
              IsPositionLocked: IsPositionLocked,
              IsRotationLocked: IsRotationLocked,
              IsScaleLocked: IsScaleLocked,
              IsAnchorLocked: IsAnchorLocked,
              IsSizeLocked: IsSizeLocked
            });
            function isValid(value, strictMode) {
              if (typeof value === 'object') {
                return !!value && !(value._objFlags & (strictMode ? Destroyed | ToDestroy : Destroyed));
              } else {
                return typeof value !== 'undefined';
              }
            }
            legacyCC.isValid = isValid;

            legacyCC.Object = CCObject;

            var fastRemoveAt$1 = array.fastRemoveAt;

            function empty() {}

            var CallbackInfo = function () {
              function CallbackInfo() {
                this.callback = empty;
                this.target = undefined;
                this.once = false;
              }

              var _proto = CallbackInfo.prototype;

              _proto.set = function set(callback, target, once) {
                this.callback = callback || empty;
                this.target = target;
                this.once = !!once;
              };

              _proto.reset = function reset() {
                this.target = undefined;
                this.callback = empty;
                this.once = false;
              };

              _proto.check = function check() {
                if (this.target instanceof CCObject && !isValid(this.target, true)) {
                  return false;
                } else {
                  return true;
                }
              };

              return CallbackInfo;
            }();

            var callbackInfoPool = new Pool$1(function () {
              return new CallbackInfo();
            }, 32);
            var CallbackList = function () {
              function CallbackList() {
                this.callbackInfos = [];
                this.isInvoking = false;
                this.containCanceled = false;
              }

              var _proto2 = CallbackList.prototype;

              _proto2.removeByCallback = function removeByCallback(cb) {
                for (var i = 0; i < this.callbackInfos.length; ++i) {
                  var info = this.callbackInfos[i];

                  if (info && info.callback === cb) {
                    info.reset();
                    callbackInfoPool.free(info);
                    fastRemoveAt$1(this.callbackInfos, i);
                    --i;
                  }
                }
              };

              _proto2.removeByTarget = function removeByTarget(target) {
                for (var i = 0; i < this.callbackInfos.length; ++i) {
                  var info = this.callbackInfos[i];

                  if (info && info.target === target) {
                    info.reset();
                    callbackInfoPool.free(info);
                    fastRemoveAt$1(this.callbackInfos, i);
                    --i;
                  }
                }
              };

              _proto2.cancel = function cancel(index) {
                var info = this.callbackInfos[index];

                if (info) {
                  info.reset();

                  if (this.isInvoking) {
                    this.callbackInfos[index] = null;
                  } else {
                    fastRemoveAt$1(this.callbackInfos, index);
                  }

                  callbackInfoPool.free(info);
                }

                this.containCanceled = true;
              };

              _proto2.cancelAll = function cancelAll() {
                for (var i = 0; i < this.callbackInfos.length; i++) {
                  var info = this.callbackInfos[i];

                  if (info) {
                    info.reset();
                    callbackInfoPool.free(info);
                    this.callbackInfos[i] = null;
                  }
                }

                this.containCanceled = true;
              };

              _proto2.purgeCanceled = function purgeCanceled() {
                for (var i = this.callbackInfos.length - 1; i >= 0; --i) {
                  var info = this.callbackInfos[i];

                  if (!info) {
                    fastRemoveAt$1(this.callbackInfos, i);
                  }
                }

                this.containCanceled = false;
              };

              _proto2.clear = function clear() {
                this.cancelAll();
                this.callbackInfos.length = 0;
                this.isInvoking = false;
                this.containCanceled = false;
              };

              return CallbackList;
            }();
            var MAX_SIZE = 16;
            var callbackListPool = new Pool$1(function () {
              return new CallbackList();
            }, MAX_SIZE);
            var CallbacksInvoker = exports('f2', function () {
              function CallbacksInvoker() {
                this._callbackTable = createMap(true);
              }

              var _proto3 = CallbacksInvoker.prototype;

              _proto3.on = function on(key, callback, target, once) {
                if (!this.hasEventListener(key, callback, target)) {
                  var list = this._callbackTable[key];

                  if (!list) {
                    list = this._callbackTable[key] = callbackListPool.alloc();
                  }

                  var info = callbackInfoPool.alloc();
                  info.set(callback, target, once);
                  list.callbackInfos.push(info);
                }

                return callback;
              };

              _proto3.hasEventListener = function hasEventListener(key, callback, target) {
                var list = this._callbackTable && this._callbackTable[key];

                if (!list) {
                  return false;
                }

                var infos = list.callbackInfos;

                if (!callback) {
                  if (list.isInvoking) {
                    for (var i = 0; i < infos.length; ++i) {
                      if (infos[i]) {
                        return true;
                      }
                    }

                    return false;
                  } else {
                    return infos.length > 0;
                  }
                }

                for (var _i = 0; _i < infos.length; ++_i) {
                  var info = infos[_i];

                  if (info && info.check() && info.callback === callback && info.target === target) {
                    return true;
                  }
                }

                return false;
              };

              _proto3.removeAll = function removeAll(keyOrTarget) {
                if (typeof keyOrTarget === 'string') {
                  var list = this._callbackTable && this._callbackTable[keyOrTarget];

                  if (list) {
                    if (list.isInvoking) {
                      list.cancelAll();
                    } else {
                      list.clear();
                      callbackListPool.free(list);
                      delete this._callbackTable[keyOrTarget];
                    }
                  }
                } else if (keyOrTarget) {
                  for (var key in this._callbackTable) {
                    var _list = this._callbackTable[key];

                    if (_list.isInvoking) {
                      var infos = _list.callbackInfos;

                      for (var i = 0; i < infos.length; ++i) {
                        var info = infos[i];

                        if (info && info.target === keyOrTarget) {
                          _list.cancel(i);
                        }
                      }
                    } else {
                      _list.removeByTarget(keyOrTarget);
                    }
                  }
                }
              };

              _proto3.off = function off(key, callback, target) {
                var list = this._callbackTable && this._callbackTable[key];

                if (list) {
                  var infos = list.callbackInfos;

                  if (callback) {
                    for (var i = 0; i < infos.length; ++i) {
                      var info = infos[i];

                      if (info && info.callback === callback && info.target === target) {
                        list.cancel(i);
                        break;
                      }
                    }
                  } else {
                    this.removeAll(key);
                  }
                }
              };

              _proto3.emit = function emit(key, arg0, arg1, arg2, arg3, arg4) {
                var list = this._callbackTable && this._callbackTable[key];

                if (list) {
                  var rootInvoker = !list.isInvoking;
                  list.isInvoking = true;
                  var infos = list.callbackInfos;

                  for (var i = 0, len = infos.length; i < len; ++i) {
                    var info = infos[i];

                    if (info) {
                      var callback = info.callback;
                      var target = info.target;

                      if (info.once) {
                        this.off(key, callback, target);
                      }

                      if (!info.check()) {
                        this.off(key, callback, target);
                      } else if (target) {
                        callback.call(target, arg0, arg1, arg2, arg3, arg4);
                      } else {
                        callback(arg0, arg1, arg2, arg3, arg4);
                      }
                    }
                  }

                  if (rootInvoker) {
                    list.isInvoking = false;

                    if (list.containCanceled) {
                      list.purgeCanceled();
                    }
                  }
                }
              };

              _proto3.clear = function clear() {
                for (var key in this._callbackTable) {
                  var list = this._callbackTable[key];

                  if (list) {
                    list.clear();
                    callbackListPool.free(list);
                    delete this._callbackTable[key];
                  }
                }
              };

              return CallbacksInvoker;
            }());

            function Eventify(base) {
              var Eventified = function (_ref) {
                _inheritsLoose(Eventified, _ref);

                function Eventified() {
                  var _this;

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _ref.call.apply(_ref, [this].concat(args)) || this;
                  _this._callbackTable = createMap(true);
                  return _this;
                }

                var _proto = Eventified.prototype;

                _proto.once = function once(type, callback, target) {
                  return this.on(type, callback, target, true);
                };

                _proto.targetOff = function targetOff(typeOrTarget) {
                  this.removeAll(typeOrTarget);
                };

                return Eventified;
              }(base);

              var callbacksInvokerPrototype = CallbacksInvoker.prototype;
              var propertyKeys = Object.getOwnPropertyNames(callbacksInvokerPrototype).concat(Object.getOwnPropertySymbols(callbacksInvokerPrototype));

              for (var iPropertyKey = 0; iPropertyKey < propertyKeys.length; ++iPropertyKey) {
                var propertyKey = propertyKeys[iPropertyKey];

                if (!(propertyKey in Eventified.prototype)) {
                  var propertyDescriptor = Object.getOwnPropertyDescriptor(callbacksInvokerPrototype, propertyKey);

                  if (propertyDescriptor) {
                    Object.defineProperty(Eventified.prototype, propertyKey, propertyDescriptor);
                  }
                }
              }

              return Eventified;
            }

            var Empty = function Empty() {};

            var EventTarget = exports('dz', Eventify(Empty));
            legacyCC.EventTarget = EventTarget;

            var _dec, _class, _class2, _descriptor, _class3, _temp;
            var Asset = exports('dB', (_dec = ccclass('cc.Asset'), _dec(_class = (_class2 = (_temp = _class3 = function (_Eventify) {
              _inheritsLoose(Asset, _Eventify);

              Asset.deserialize = function deserialize(data) {
                return legacyCC.deserialize(data);
              };

              _createClass(Asset, [{
                key: "nativeUrl",
                get: function get() {
                  if (!this._nativeUrl) {
                    if (!this._native) return '';
                    var name = this._native;

                    if (name.charCodeAt(0) === 47) {
                      return name.slice(1);
                    }

                    if (name.charCodeAt(0) === 46) {
                      this._nativeUrl = getUrlWithUuid(this._uuid, {
                        nativeExt: name,
                        isNative: true
                      });
                    } else {
                      this._nativeUrl = getUrlWithUuid(this._uuid, {
                        __nativeName__: name,
                        nativeExt: extname(name),
                        isNative: true
                      });
                    }
                  }

                  return this._nativeUrl;
                }
              }, {
                key: "_nativeAsset",
                get: function get() {
                  return this._file;
                },
                set: function set(obj) {
                  this._file = obj;
                }
              }]);

              function Asset() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Eventify.call.apply(_Eventify, [this].concat(args)) || this;
                _this.loaded = true;

                _initializerDefineProperty(_this, "_native", _descriptor, _assertThisInitialized(_this));

                _this._nativeUrl = '';
                _this.__onLoadedInvoked__ = false;
                _this.__nativeDepend__ = null;
                _this.__asyncLoadAssets__ = false;
                _this.__depends__ = null;
                _this._file = null;
                _this._ref = 0;
                Object.defineProperty(_assertThisInitialized(_this), '_uuid', {
                  value: '',
                  writable: true
                });
                return _this;
              }

              var _proto = Asset.prototype;

              _proto.toString = function toString() {
                return this.nativeUrl;
              };

              _proto.serialize = function serialize() {};

              _proto._setRawAsset = function _setRawAsset(filename, inLibrary) {
                if (inLibrary === void 0) {
                  inLibrary = true;
                }

                if (inLibrary !== false) {
                  this._native = filename || '';
                } else {
                  this._native = "/" + filename;
                }
              };

              _proto.addRef = function addRef() {
                this._ref++;
                return this;
              };

              _proto.decRef = function decRef(autoRelease) {
                if (autoRelease === void 0) {
                  autoRelease = true;
                }

                if (this._ref > 0) {
                  this._ref--;
                }

                if (autoRelease) {
                  legacyCC.assetManager._releaseManager.tryRelease(this);
                }

                return this;
              };

              _proto.onLoaded = function onLoaded() {};

              _createClass(Asset, [{
                key: "_nativeDep",
                get: function get() {
                  if (this._native) {
                    return {
                      __isNative__: true,
                      uuid: this._uuid,
                      ext: this._native
                    };
                  }
                }
              }, {
                key: "refCount",
                get: function get() {
                  return this._ref;
                }
              }]);

              return Asset;
            }(Eventify(CCObject)), _class3.preventDeferredLoadDependents = false, _class3.preventPreloadNativeObject = false, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_native", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            }), _applyDecoratedDescriptor(_class2.prototype, "_nativeAsset", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_nativeAsset"), _class2.prototype)), _class2)) || _class));
            Asset.prototype.createNode = null;
            legacyCC.Asset = Asset;

            var _dec$1, _class$1, _dec2, _class2$1, _dec3, _class3$1;
            var Script = exports('dD', (_dec$1 = ccclass('cc.Script'), _dec$1(_class$1 = function (_Asset) {
              _inheritsLoose(Script, _Asset);

              function Script() {
                return _Asset.apply(this, arguments) || this;
              }

              return Script;
            }(Asset)) || _class$1));
            legacyCC._Script = Script;
            var JavaScript = exports('dE', (_dec2 = ccclass('cc.JavaScript'), _dec2(_class2$1 = function (_Script) {
              _inheritsLoose(JavaScript, _Script);

              function JavaScript() {
                return _Script.apply(this, arguments) || this;
              }

              return JavaScript;
            }(Script)) || _class2$1));
            legacyCC._JavaScript = JavaScript;
            var TypeScript = exports('dF', (_dec3 = ccclass('cc.TypeScript'), _dec3(_class3$1 = function (_Script2) {
              _inheritsLoose(TypeScript, _Script2);

              function TypeScript() {
                return _Script2.apply(this, arguments) || this;
              }

              return TypeScript;
            }(Script)) || _class3$1));
            legacyCC._TypeScript = TypeScript;

            var _dec$2, _dec2$1, _dec3$1, _dec4, _class$2, _class2$2, _descriptor$1, _descriptor2, _descriptor3, _class3$2, _temp$1;
            var idGenerator = new IDGenerator('Comp');
            var IsOnLoadCalled$1 = CCObject.Flags.IsOnLoadCalled;
            var NullNode = null;
            var Component = exports('dO', (_dec$2 = ccclass('cc.Component'), _dec2$1 = displayName('Script'), _dec3$1 = type(Script), _dec4 = tooltip('i18n:INSPECTOR.component.script'), _dec$2(_class$2 = (_class2$2 = (_temp$1 = _class3$2 = function (_CCObject) {
              _inheritsLoose(Component, _CCObject);

              function Component() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _CCObject.call.apply(_CCObject, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "node", _descriptor$1, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "_enabled", _descriptor2, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "__prefab", _descriptor3, _assertThisInitialized(_this));

                _this._sceneGetter = null;
                _this._id = idGenerator.getNewId();
                return _this;
              }

              var _proto = Component.prototype;

              _proto._getRenderScene = function _getRenderScene() {
                if (this._sceneGetter) {
                  return this._sceneGetter();
                }

                return this.node.scene._renderScene;
              };

              _proto.addComponent = function addComponent(typeOrClassName) {
                return this.node.addComponent(typeOrClassName);
              };

              _proto.getComponent = function getComponent(typeOrClassName) {
                return this.node.getComponent(typeOrClassName);
              };

              _proto.getComponents = function getComponents(typeOrClassName) {
                return this.node.getComponents(typeOrClassName);
              };

              _proto.getComponentInChildren = function getComponentInChildren(typeOrClassName) {
                return this.node.getComponentInChildren(typeOrClassName);
              };

              _proto.getComponentsInChildren = function getComponentsInChildren(typeOrClassName) {
                return this.node.getComponentsInChildren(typeOrClassName);
              };

              _proto.destroy = function destroy() {

                if (_CCObject.prototype.destroy.call(this)) {
                  if (this._enabled && this.node.activeInHierarchy) {
                    legacyCC.director._compScheduler.disableComp(this);
                  }

                  return true;
                }

                return false;
              };

              _proto._onPreDestroy = function _onPreDestroy() {
                this.unscheduleAllCallbacks();

                legacyCC.director._nodeActivator.destroyComp(this);

                this.node._removeComponent(this);
              };

              _proto._instantiate = function _instantiate(cloned) {
                if (!cloned) {
                  cloned = legacyCC.instantiate._clone(this, this);
                }

                cloned.node = null;
                return cloned;
              };

              _proto.schedule = function schedule(callback, interval, repeat, delay) {
                if (interval === void 0) {
                  interval = 0;
                }

                if (repeat === void 0) {
                  repeat = legacyCC.macro.REPEAT_FOREVER;
                }

                if (delay === void 0) {
                  delay = 0;
                }

                assertID(callback, 1619);
                interval = interval || 0;
                assertID(interval >= 0, 1620);
                repeat = isNaN(repeat) ? legacyCC.macro.REPEAT_FOREVER : repeat;
                delay = delay || 0;
                var scheduler = legacyCC.director.getScheduler();
                var paused = scheduler.isTargetPaused(this);
                scheduler.schedule(callback, this, interval, repeat, delay, paused);
              };

              _proto.scheduleOnce = function scheduleOnce(callback, delay) {
                if (delay === void 0) {
                  delay = 0;
                }

                this.schedule(callback, 0, 0, delay);
              };

              _proto.unschedule = function unschedule(callback_fn) {
                if (!callback_fn) {
                  return;
                }

                legacyCC.director.getScheduler().unschedule(callback_fn, this);
              };

              _proto.unscheduleAllCallbacks = function unscheduleAllCallbacks() {
                legacyCC.director.getScheduler().unscheduleAllForTarget(this);
              };

              _createClass(Component, [{
                key: "name",
                get: function get() {
                  if (this._name) {
                    return this._name;
                  }

                  var className = getClassName(this);
                  var trimLeft = className.lastIndexOf('.');

                  if (trimLeft >= 0) {
                    className = className.slice(trimLeft + 1);
                  }

                  return this.node.name + "<" + className + ">";
                },
                set: function set(value) {
                  this._name = value;
                }
              }, {
                key: "uuid",
                get: function get() {
                  return this._id;
                }
              }, {
                key: "__scriptAsset",
                get: function get() {
                  return null;
                }
              }, {
                key: "enabled",
                get: function get() {
                  return this._enabled;
                },
                set: function set(value) {
                  if (this._enabled !== value) {
                    this._enabled = value;

                    if (this.node.activeInHierarchy) {
                      var compScheduler = legacyCC.director._compScheduler;

                      if (value) {
                        compScheduler.enableComp(this);
                      } else {
                        compScheduler.disableComp(this);
                      }
                    }
                  }
                }
              }, {
                key: "enabledInHierarchy",
                get: function get() {
                  return this._enabled && this.node && this.node.activeInHierarchy;
                }
              }, {
                key: "_isOnLoadCalled",
                get: function get() {
                  return this._objFlags & IsOnLoadCalled$1;
                }
              }]);

              return Component;
            }(CCObject), _class3$2.system = null, _temp$1), (_applyDecoratedDescriptor(_class2$2.prototype, "__scriptAsset", [_dec2$1, _dec3$1, _dec4, disallowAnimation], Object.getOwnPropertyDescriptor(_class2$2.prototype, "__scriptAsset"), _class2$2.prototype), _descriptor$1 = _applyDecoratedDescriptor(_class2$2.prototype, "node", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return NullNode;
              }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2$2.prototype, "_enabled", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2$2.prototype, "__prefab", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$2)) || _class$2));
            var proto = Component.prototype;
            proto.update = null;
            proto.lateUpdate = null;
            proto.__preload = null;
            proto.onLoad = null;
            proto.start = null;
            proto.onEnable = null;
            proto.onDisable = null;
            proto.onDestroy = null;
            proto.onFocusInEditor = null;
            proto.onLostFocusInEditor = null;
            proto.resetInEditor = null;
            proto._getLocalBounds = null;
            proto.onRestore = null;
            Component._requireComponent = null;
            Component._executionOrder = 0;

            value(Component, '_registerEditorProps', function (cls, props) {
              var reqComp = props.requireComponent;

              if (reqComp) {
                cls._requireComponent = reqComp;
              }

              var order = props.executionOrder;

              if (order && typeof order === 'number') {
                cls._executionOrder = order;
              }
            });
            legacyCC.Component = Component;

            var _dec$3, _dec2$2, _class$3, _class2$3, _descriptor$2, _temp$2;
            var MissingScript = exports('dN', (_dec$3 = ccclass('cc.MissingScript'), _dec2$2 = inspector('packages://inspector/inspectors/comps/missing-script.js'), _dec$3(_class$3 = _dec2$2(_class$3 = (_class2$3 = (_temp$2 = function (_Component) {
              _inheritsLoose(MissingScript, _Component);

              MissingScript.safeFindClass = function safeFindClass(id) {
                var cls = _getClassById(id);

                if (cls) {
                  return cls;
                }

                legacyCC.deserialize.reportMissingClass(id);
                return undefined;
              };

              function MissingScript() {
                var _this;

                _this = _Component.call(this) || this;

                _initializerDefineProperty(_this, "_$erialized", _descriptor$2, _assertThisInitialized(_this));

                return _this;
              }

              var _proto = MissingScript.prototype;

              _proto.onLoad = function onLoad() {
                warnID(4600, this.node.name);
              };

              return MissingScript;
            }(Component), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$3.prototype, "_$erialized", [serializable, editorOnly], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$3)) || _class$3) || _class$3));
            legacyCC._MissingScript = MissingScript;

            function _dereference(self) {
              var deserializedList = self.deserializedList;
              var idPropList = self._idPropList;
              var idList = self._idList;
              var idObjList = self._idObjList;
              var onDereferenced = self._classFinder && self._classFinder.onDereferenced;
              var i;
              var propName;
              var id;

              {
                for (i = 0; i < idList.length; i++) {
                  propName = idPropList[i];
                  id = idList[i];
                  idObjList[i][propName] = deserializedList[id];
                }
              }
            }

            function compileObjectTypeJit(sources, defaultValue, accessorToSet, propNameLiteralToSet, assumeHavePropIfIsValue) {
              if (defaultValue instanceof legacyCC.ValueType) {
                if (!assumeHavePropIfIsValue) {
                  sources.push('if(prop){');
                }

                var ctorCode = getClassName(defaultValue);
                sources.push("s._deserializeTypedObject(o" + accessorToSet + ",prop," + ctorCode + ");");

                if (!assumeHavePropIfIsValue) {
                  sources.push("}else o" + accessorToSet + "=null;");
                }
              } else {
                sources.push('if(prop){');
                sources.push("s._deserializeObjField(o,prop," + propNameLiteralToSet + ");");
                sources.push("}else o" + accessorToSet + "=null;");
              }
            }

            var compileDeserialize =  function (self, klass) {
              var TYPE = DELIMETER + "type";
              var EDITOR_ONLY = DELIMETER + "editorOnly";
              var DEFAULT = DELIMETER + "default";
              var FORMERLY_SERIALIZED_AS = DELIMETER + "formerlySerializedAs";
              var attrs = getClassAttrs(klass);
              var props = klass.__values__;
              var sources = ['var prop;'];
              var fastMode = BUILTIN_CLASSID_RE.test(_getClassId(klass));

              for (var p = 0; p < props.length; p++) {
                var propName = props[p];

                if ( attrs[propName + EDITOR_ONLY]) {
                  continue;
                }

                var accessorToSet = void 0;
                var propNameLiteralToSet = void 0;

                if (CCClass.IDENTIFIER_RE.test(propName)) {
                  propNameLiteralToSet = "\"" + propName + "\"";
                  accessorToSet = "." + propName;
                } else {
                  propNameLiteralToSet = CCClass.escapeForJS(propName);
                  accessorToSet = "[" + propNameLiteralToSet + "]";
                }

                var accessorToGet = accessorToSet;

                if (attrs[propName + FORMERLY_SERIALIZED_AS]) {
                  var propNameToRead = attrs[propName + FORMERLY_SERIALIZED_AS];

                  if (CCClass.IDENTIFIER_RE.test(propNameToRead)) {
                    accessorToGet = "." + propNameToRead;
                  } else {
                    accessorToGet = "[" + CCClass.escapeForJS(propNameToRead) + "]";
                  }
                }

                sources.push("prop=d" + accessorToGet + ";");
                sources.push("if(typeof " + ( '(prop)' ) + "!==\"undefined\"){");
                var defaultValue = CCClass.getDefault(attrs[propName + DEFAULT]);

                if (fastMode) {
                  var isPrimitiveType = void 0;
                  var userType = attrs[propName + TYPE];

                  if (defaultValue === undefined && userType) {
                    isPrimitiveType = userType instanceof PrimitiveType;
                  } else {
                    var defaultType = typeof defaultValue;
                    isPrimitiveType = defaultType === 'string' || defaultType === 'number' || defaultType === 'boolean';
                  }

                  if (isPrimitiveType) {
                    sources.push("o" + accessorToSet + "=prop;");
                  } else {
                    compileObjectTypeJit(sources, defaultValue, accessorToSet, propNameLiteralToSet, true);
                  }
                } else {
                  sources.push("" + ("if(typeof " + ( '(prop)' ) + "!==\"object\"){" + 'o') + accessorToSet + "=prop;" + "}else{");
                  compileObjectTypeJit(sources, defaultValue, accessorToSet, propNameLiteralToSet, false);
                  sources.push('}');
                }

                sources.push('}');
              }

              if (legacyCC.js.isChildClassOf(klass, legacyCC._BaseNode) || legacyCC.js.isChildClassOf(klass, legacyCC.Component)) {
                {
                  var mayUsedInPersistRoot = isChildClassOf(klass, legacyCC.Node);

                  if (mayUsedInPersistRoot) {
                    sources.push('d._id&&(o._id=d._id);');
                  }
                }
              }

              if (props[props.length - 1] === '_$erialized') {
                sources.push('o._$erialized=JSON.parse(JSON.stringify(d));');
                sources.push('s._deserializePrimitiveObject(o._$erialized,d);');
              }

              return Function('s', 'o', 'd', 'k', sources.join(''));
            } ;

            function _deserializeFireClass(self, obj, serialized, klass) {
              var deserialize;

              if (klass.hasOwnProperty('__deserialize__')) {
                deserialize = klass.__deserialize__;
              } else {
                deserialize = compileDeserialize(self, klass);
                value(klass, '__deserialize__', deserialize, true);
              }

              deserialize(self, obj, serialized, klass);
            }

            var _Deserializer = function () {
              function _Deserializer(result, classFinder, customEnv, ignoreEditorOnly) {
                this.result = void 0;
                this.customEnv = void 0;
                this.deserializedList = void 0;
                this.deserializedData = void 0;
                this._classFinder = void 0;
                this._ignoreEditorOnly = void 0;
                this._idList = void 0;
                this._idObjList = void 0;
                this._idPropList = void 0;
                this.result = result;
                this.customEnv = customEnv;
                this.deserializedList = [];
                this.deserializedData = null;
                this._classFinder = classFinder;

                {
                  this._ignoreEditorOnly = ignoreEditorOnly;
                }

                this._idList = [];
                this._idObjList = [];
                this._idPropList = [];
              }

              var _proto = _Deserializer.prototype;

              _proto.deserialize = function deserialize(jsonObj) {
                if (Array.isArray(jsonObj)) {
                  var jsonArray = jsonObj;
                  var refCount = jsonArray.length;
                  this.deserializedList.length = refCount;

                  for (var i = 0; i < refCount; i++) {
                    if (jsonArray[i]) {
                      {
                        this.deserializedList[i] = this._deserializeObject(jsonArray[i]);
                      }
                    }
                  }

                  this.deserializedData = refCount > 0 ? this.deserializedList[0] : [];

                  _dereference(this);

                  {
                    for (var _i2 = 0; _i2 < refCount; _i2++) {
                      var _this$deserializedLis, _this$deserializedLis2;

                      (_this$deserializedLis = this.deserializedList[_i2]) === null || _this$deserializedLis === void 0 ? void 0 : (_this$deserializedLis2 = _this$deserializedLis.onAfterDeserialize_JSB) === null || _this$deserializedLis2 === void 0 ? void 0 : _this$deserializedLis2.call(_this$deserializedLis);
                    }
                  }
                } else {
                  var deserializedData;
                  this.deserializedList.length = 1;

                  {
                    deserializedData = jsonObj ? this._deserializeObject(jsonObj) : null;
                  }

                  _dereference(this);

                  {
                    if (deserializedData.onAfterDeserialize_JSB) {
                      deserializedData.onAfterDeserialize_JSB();
                    }
                  }

                  this.deserializedList[0] = deserializedData;
                  this.deserializedData = deserializedData;
                }

                return this.deserializedData;
              };

              _proto._deserializeObject = function _deserializeObject(serialized, owner, propName) {
                var prop;
                var obj = null;
                var klass = null;
                var type = serialized.__type__;

                if (type === 'TypedArray') {
                  var array = serialized.array;
                  obj = new window[serialized.ctor](array.length);

                  for (var i = 0; i < array.length; ++i) {
                    obj[i] = array[i];
                  }

                  return obj;
                } else if (type) {
                  var deserializeByType = function deserializeByType() {
                    obj = new klass();

                    if (obj._deserialize) {
                      obj._deserialize(serialized.content, self);

                      return;
                    }

                    if (legacyCC.Class._isCCClass(klass)) {
                      _deserializeFireClass(self, obj, serialized, klass);
                    } else {
                      self._deserializeTypedObject(obj, serialized, klass);
                    }
                  };

                  klass = this._classFinder(type, serialized, owner, propName);

                  if (!klass) {
                    var notReported = this._classFinder === _getClassById;

                    if (notReported) {
                      legacyCC.deserialize.reportMissingClass(type);
                    }

                    return null;
                  }

                  var self = this;

                  {
                    deserializeByType();
                  }
                } else if (!Array.isArray(serialized)) {
                  obj = {};

                  this._deserializePrimitiveObject(obj, serialized);
                } else {
                  obj = new Array(serialized.length);

                  for (var _i3 = 0; _i3 < serialized.length; _i3++) {
                    prop = serialized[_i3];

                    if (typeof prop === 'object' && prop) {
                      var isAssetType = this._deserializeObjField(obj, prop, "" + _i3);

                      if (isAssetType) {
                        obj[_i3] = null;
                      }
                    } else {
                      obj[_i3] = prop;
                    }
                  }
                }

                return obj;
              };

              _proto._deserializeObjField = function _deserializeObjField(obj, jsonObj, propName) {
                var id = jsonObj.__id__;

                if (id === undefined) {
                  var uuid = jsonObj.__uuid__;

                  if (uuid) {
                    this.result.push(obj, propName, uuid);
                    return true;
                  } else {
                    obj[propName] = this._deserializeObject(jsonObj);
                  }
                } else {
                  var dObj = this.deserializedList[id];

                  if (dObj) {
                    obj[propName] = dObj;
                  } else {
                    this._idList.push(id);

                    this._idObjList.push(obj);

                    this._idPropList.push(propName);
                  }
                }

                return false;
              };

              _proto._deserializePrimitiveObject = function _deserializePrimitiveObject(instance, serialized) {
                for (var propName in serialized) {
                  if (serialized.hasOwnProperty(propName)) {
                    var prop = serialized[propName];

                    if (typeof prop !== 'object') {
                      if (propName !== '__type__') {
                          instance[propName] = prop;
                        }
                    } else if (prop) {
                      var isAssetType = this._deserializeObjField(instance, prop, propName);

                      if (isAssetType) {
                        instance[propName] = null;
                      }
                    } else {
                      instance[propName] = null;
                    }
                  }
                }
              };

              _proto._deserializeTypedObject = function _deserializeTypedObject(instance, serialized, klass) {
                if (klass === legacyCC.Vec2) {
                  instance.x = serialized.x || 0;
                  instance.y = serialized.y || 0;
                  return;
                } else if (klass === legacyCC.Vec3) {
                  instance.x = serialized.x || 0;
                  instance.y = serialized.y || 0;
                  instance.z = serialized.z || 0;
                  return;
                } else if (klass === legacyCC.Color) {
                  instance.r = serialized.r || 0;
                  instance.g = serialized.g || 0;
                  instance.b = serialized.b || 0;
                  var a = serialized.a;
                  instance.a = a === undefined ? 255 : a;
                  return;
                } else if (klass === legacyCC.Size) {
                  instance.width = serialized.width || 0;
                  instance.height = serialized.height || 0;
                  return;
                }

                var DEFAULT = DELIMETER + "default";
                var attrs = getClassAttrs(klass);
                var fastDefinedProps = klass.__props__ || Object.keys(instance);

                for (var i = 0; i < fastDefinedProps.length; i++) {
                  var propName = fastDefinedProps[i];
                  var value = serialized[propName];

                  if (value === undefined || !serialized.hasOwnProperty(propName)) {
                    value = CCClass.getDefault(attrs[propName + DEFAULT]);
                  }

                  if (typeof value !== 'object') {
                    instance[propName] = value;
                  } else if (value) {
                    this._deserializeObjField(instance, value, propName);
                  } else {
                    instance[propName] = null;
                  }
                }
              };

              return _Deserializer;
            }();

            _Deserializer.pool = void 0;
            _Deserializer.pool = new Pool(function (obj) {
              obj.result = null;
              obj.customEnv = null;
              obj.deserializedList.length = 0;
              obj.deserializedData = null;
              obj._classFinder = null;
              obj._idList.length = 0;
              obj._idObjList.length = 0;
              obj._idPropList.length = 0;
            }, 1);

            _Deserializer.pool.get = function (result, classFinder, customEnv, ignoreEditorOnly) {
              var cache = this._get();

              if (cache) {
                cache.result = result;
                cache.customEnv = customEnv;
                cache._classFinder = classFinder;

                {
                  cache._ignoreEditorOnly = ignoreEditorOnly;
                }

                return cache;
              } else {
                return new _Deserializer(result, classFinder, customEnv, ignoreEditorOnly);
              }
            };

            function deserializeDynamic(data, details, options) {
              options = options || {};
              var classFinder = options.classFinder || _getClassById;
              var createAssetRefs = options.createAssetRefs || legacyCC.sys.platform === legacyCC.sys.EDITOR_CORE;
              var customEnv = options.customEnv;
              var ignoreEditorOnly = options.ignoreEditorOnly;
              details.init();

              var deserializer = _Deserializer.pool.get(details, classFinder, customEnv, ignoreEditorOnly);

              legacyCC.game._isCloning = true;
              var res = deserializer.deserialize(data);
              legacyCC.game._isCloning = false;

              _Deserializer.pool.put(deserializer);

              if (createAssetRefs) {
                details.assignAssetsBy(EditorExtends.serialize.asAsset);
              }

              return res;
            }

            var SUPPORT_MIN_FORMAT_VERSION = 1;
            var EMPTY_PLACEHOLDER = 0;
            var BuiltinValueTypes = [Vec2, Vec3, Vec4, Quat, Color, Size, Rect, Mat4];

            function BuiltinValueTypeParsers_xyzw(obj, data) {
              obj.x = data[1];
              obj.y = data[2];
              obj.z = data[3];
              obj.w = data[4];
            }

            var BuiltinValueTypeSetters = [function (obj, data) {
              obj.x = data[1];
              obj.y = data[2];
            }, function (obj, data) {
              obj.x = data[1];
              obj.y = data[2];
              obj.z = data[3];
            }, BuiltinValueTypeParsers_xyzw, BuiltinValueTypeParsers_xyzw, function (obj, data) {
              obj._val = data[1];
            }, function (obj, data) {
              obj.width = data[1];
              obj.height = data[2];
            }, function (obj, data) {
              obj.x = data[1];
              obj.y = data[2];
              obj.width = data[3];
              obj.height = data[4];
            }, function (obj, data) {
              Mat4.fromArray(obj, data, 1);
            }];

            var DataTypeID = {
              SimpleType: 0,
              InstanceRef: 1,
              Array_InstanceRef: 2,
              Array_AssetRefByInnerObj: 3,
              Class: 4,
              ValueTypeCreated: 5,
              AssetRefByInnerObj: 6,
              TRS: 7,
              ValueType: 8,
              Array_Class: 9,
              CustomizedClass: 10,
              Dict: 11,
              Array: 12,
              ARRAY_LENGTH: 13
            };
            var CLASS_TYPE = 0;
            var CLASS_KEYS = 1;
            var CLASS_PROP_TYPE_OFFSET = 2;
            var MASK_CLASS = 0;
            var OBJ_DATA_MASK = 0;
            var CUSTOM_OBJ_DATA_CLASS = 0;
            var CUSTOM_OBJ_DATA_CONTENT = 1;
            var VALUETYPE_SETTER = 0;
            var DICT_JSON_LAYOUT = 0;
            var ARRAY_ITEM_VALUES = 0;
            var Refs = {
              EACH_RECORD_LENGTH: 3,
              OWNER_OFFSET: 0,
              KEY_OFFSET: 1,
              TARGET_OFFSET: 2
            };
            var File = {
              Version: 0,
              Context: 0,
              SharedUuids: 1,
              SharedStrings: 2,
              SharedClasses: 3,
              SharedMasks: 4,
              Instances: 5,
              InstanceTypes: 6,
              Refs: 7,
              DependObjs: 8,
              DependKeys: 9,
              DependUuidIndices: 10,
              ARRAY_LENGTH: 11
            };
            var PACKED_SECTIONS = File.Instances;
            var Details = exports('dr', function () {
              function Details() {
                this.uuidObjList = null;
                this.uuidPropList = null;
                this.uuidList = null;
              }

              var _proto = Details.prototype;

              _proto.init = function init(data) {
                if ( data) {
                  this.uuidObjList = data[File.DependObjs];
                  this.uuidPropList = data[File.DependKeys];
                  this.uuidList = data[File.DependUuidIndices];
                } else {
                  var used = this.uuidList;

                  if (!used) {
                    this.uuidList = [];
                    this.uuidObjList = [];
                    this.uuidPropList = [];
                  }
                }
              };

              _proto.reset = function reset() {
                {
                  var used = this.uuidList;

                  if (used) {
                    this.uuidList.length = 0;
                    this.uuidObjList.length = 0;
                    this.uuidPropList.length = 0;
                  }
                }
              };

              _proto.push = function push(obj, propName, uuid) {
                this.uuidObjList.push(obj);
                this.uuidPropList.push(propName);
                this.uuidList.push(uuid);
              };

              return Details;
            }());
            Details.pool = new Pool(function (obj) {
              obj.reset();
            }, 5);

            Details.pool.get = function () {
              return this._get() || new Details();
            };

            function dereference(refs, instances, strings) {
              var dataLength = refs.length - 1;
              var i = 0;
              var instanceOffset = refs[dataLength] * Refs.EACH_RECORD_LENGTH;

              for (; i < instanceOffset; i += Refs.EACH_RECORD_LENGTH) {
                var _owner = refs[i];
                var target = instances[refs[i + Refs.TARGET_OFFSET]];
                var keyIndex = refs[i + Refs.KEY_OFFSET];

                if (keyIndex >= 0) {
                  _owner[strings[keyIndex]] = target;
                } else {
                  _owner[~keyIndex] = target;
                }
              }

              for (; i < dataLength; i += Refs.EACH_RECORD_LENGTH) {
                var _owner2 = instances[refs[i]];
                var _target = instances[refs[i + Refs.TARGET_OFFSET]];
                var _keyIndex = refs[i + Refs.KEY_OFFSET];

                if (_keyIndex >= 0) {
                  _owner2[strings[_keyIndex]] = _target;
                } else {
                  _owner2[~_keyIndex] = _target;
                }
              }
            }

            function deserializeCCObject(data, objectData) {
              var mask = data[File.SharedMasks][objectData[OBJ_DATA_MASK]];
              var clazz = mask[MASK_CLASS];
              var ctor = clazz[CLASS_TYPE];
              var obj = new ctor();
              var keys = clazz[CLASS_KEYS];
              var classTypeOffset = clazz[CLASS_PROP_TYPE_OFFSET];
              var maskTypeOffset = mask[mask.length - 1];
              var i = MASK_CLASS + 1;

              for (; i < maskTypeOffset; ++i) {
                var _key = keys[mask[i]];
                obj[_key] = objectData[i];
              }

              for (; i < objectData.length; ++i) {
                var _key2 = keys[mask[i]];
                var _type = clazz[mask[i] + classTypeOffset];
                var op = ASSIGNMENTS[_type];
                op(data, obj, _key2, objectData[i]);
              }

              return obj;
            }

            function deserializeCustomCCObject(data, ctor, value) {
              var obj = new ctor();

              if (obj._deserialize) {
                obj._deserialize(value, data[File.Context]);
              } else {
                errorID(5303, getClassName(ctor));
              }

              return obj;
            }

            function assignSimple(data, owner, key, value) {
              owner[key] = value;
            }

            function assignInstanceRef(data, owner, key, value) {
              if (value >= 0) {
                owner[key] = data[File.Instances][value];
              } else {
                data[File.Refs][~value * Refs.EACH_RECORD_LENGTH] = owner;
              }
            }

            function genArrayParser(parser) {
              return function (data, owner, key, value) {
                owner[key] = value;

                for (var i = 0; i < value.length; ++i) {
                  parser(data, value, i, value[i]);
                }
              };
            }

            function parseAssetRefByInnerObj(data, owner, key, value) {
              owner[key] = null;
              data[File.DependObjs][value] = owner;
            }

            function parseClass(data, owner, key, value) {
              owner[key] = deserializeCCObject(data, value);
            }

            function parseCustomClass(data, owner, key, value) {
              var ctor = data[File.SharedClasses][value[CUSTOM_OBJ_DATA_CLASS]];
              owner[key] = deserializeCustomCCObject(data, ctor, value[CUSTOM_OBJ_DATA_CONTENT]);
            }

            function parseValueTypeCreated(data, owner, key, value) {
              BuiltinValueTypeSetters[value[VALUETYPE_SETTER]](owner[key], value);
            }

            function parseValueType(data, owner, key, value) {
              var val = new BuiltinValueTypes[value[VALUETYPE_SETTER]]();
              BuiltinValueTypeSetters[value[VALUETYPE_SETTER]](val, value);
              owner[key] = val;
            }

            function parseTRS(data, owner, key, value) {
              var typedArray = owner[key];
              typedArray.set(value);
            }

            function parseDict(data, owner, key, value) {
              var dict = value[DICT_JSON_LAYOUT];
              owner[key] = dict;

              for (var i = DICT_JSON_LAYOUT + 1; i < value.length; i += 3) {
                var subKey = value[i];
                var subType = value[i + 1];
                var subValue = value[i + 2];
                var op = ASSIGNMENTS[subType];
                op(data, dict, subKey, subValue);
              }
            }

            function parseArray(data, owner, key, value) {
              var array = value[ARRAY_ITEM_VALUES];
              owner[key] = array;

              for (var i = 0; i < array.length; ++i) {
                var subValue = array[i];
                var _type2 = value[i + 1];

                if (_type2 !== DataTypeID.SimpleType) {
                  var op = ASSIGNMENTS[_type2];
                  op(data, array, i, subValue);
                }
              }
            }

            var ASSIGNMENTS = new Array(DataTypeID.ARRAY_LENGTH);
            ASSIGNMENTS[DataTypeID.SimpleType] = assignSimple;
            ASSIGNMENTS[DataTypeID.InstanceRef] = assignInstanceRef;
            ASSIGNMENTS[DataTypeID.Array_InstanceRef] = genArrayParser(assignInstanceRef);
            ASSIGNMENTS[DataTypeID.Array_AssetRefByInnerObj] = genArrayParser(parseAssetRefByInnerObj);
            ASSIGNMENTS[DataTypeID.Class] = parseClass;
            ASSIGNMENTS[DataTypeID.ValueTypeCreated] = parseValueTypeCreated;
            ASSIGNMENTS[DataTypeID.AssetRefByInnerObj] = parseAssetRefByInnerObj;
            ASSIGNMENTS[DataTypeID.TRS] = parseTRS;
            ASSIGNMENTS[DataTypeID.ValueType] = parseValueType;
            ASSIGNMENTS[DataTypeID.Array_Class] = genArrayParser(parseClass);
            ASSIGNMENTS[DataTypeID.CustomizedClass] = parseCustomClass;
            ASSIGNMENTS[DataTypeID.Dict] = parseDict;
            ASSIGNMENTS[DataTypeID.Array] = parseArray;

            function parseInstances(data) {
              var instances = data[File.Instances];
              var instanceTypes = data[File.InstanceTypes];
              var instanceTypesLen = instanceTypes === EMPTY_PLACEHOLDER ? 0 : instanceTypes.length;
              var rootIndex = instances[instances.length - 1];
              var normalObjectCount = instances.length - instanceTypesLen;

              if (typeof rootIndex !== 'number') {
                rootIndex = 0;
              } else {
                if (rootIndex < 0) {
                  rootIndex = ~rootIndex;
                }

                --normalObjectCount;
              }

              var insIndex = 0;

              for (; insIndex < normalObjectCount; ++insIndex) {
                instances[insIndex] = deserializeCCObject(data, instances[insIndex]);
              }

              var classes = data[File.SharedClasses];

              for (var typeIndex = 0; typeIndex < instanceTypesLen; ++typeIndex, ++insIndex) {
                var _type3 = instanceTypes[typeIndex];
                var eachData = instances[insIndex];

                if (_type3 >= 0) {
                  var ctor = classes[_type3];
                  instances[insIndex] = deserializeCustomCCObject(data, ctor, eachData);
                } else {
                  _type3 = ~_type3;
                  var op = ASSIGNMENTS[_type3];
                  op(data, instances, insIndex, eachData);
                }
              }

              return rootIndex;
            }

            function getMissingClass(hasCustomFinder, type) {
              if (!hasCustomFinder) {
                deserialize.reportMissingClass(type);
              }

              return Object;
            }

            function doLookupClass(classFinder, type, container, index, silent, hasCustomFinder) {
              var klass = classFinder(type);

              if (!klass) {
                if (silent) {
                  container[index] = function (c, i, t) {
                    return function proxy() {
                      var actualClass = classFinder(t) || getMissingClass(hasCustomFinder, t);
                      c[i] = actualClass;
                      return new actualClass();
                    };
                  }(container, index, type);

                  return;
                } else {
                  klass = getMissingClass(hasCustomFinder, type);
                }
              }

              container[index] = klass;
            }

            function lookupClasses(data, silent, customFinder) {
              var classFinder = customFinder || _getClassById;
              var classes = data[File.SharedClasses];

              for (var i = 0; i < classes.length; ++i) {
                var klassLayout = classes[i];

                if (typeof klassLayout !== 'string') {
                  {
                    if (typeof klassLayout[CLASS_TYPE] === 'function') {
                      throw new Error('Can not deserialize the same JSON data again.');
                    }
                  }

                  var _type4 = klassLayout[CLASS_TYPE];
                  doLookupClass(classFinder, _type4, klassLayout, CLASS_TYPE, silent, customFinder);
                } else {
                  doLookupClass(classFinder, klassLayout, classes, i, silent, customFinder);
                }
              }
            }

            function cacheMasks(data) {
              var masks = data[File.SharedMasks];

              if (masks) {
                var classes = data[File.SharedClasses];

                for (var i = 0; i < masks.length; ++i) {
                  var mask = masks[i];
                  mask[MASK_CLASS] = classes[mask[MASK_CLASS]];
                }
              }
            }

            function parseResult(data) {
              var instances = data[File.Instances];
              var sharedStrings = data[File.SharedStrings];
              var dependSharedUuids = data[File.SharedUuids];
              var dependObjs = data[File.DependObjs];
              var dependKeys = data[File.DependKeys];
              var dependUuids = data[File.DependUuidIndices];

              for (var i = 0; i < dependObjs.length; ++i) {
                var _obj2 = dependObjs[i];

                if (typeof _obj2 === 'number') {
                  dependObjs[i] = instances[_obj2];
                }

                var _key3 = dependKeys[i];

                if (typeof _key3 === 'number') {
                  if (_key3 >= 0) {
                    _key3 = sharedStrings[_key3];
                  } else {
                    _key3 = ~_key3;
                  }

                  dependKeys[i] = _key3;
                }

                var _uuid2 = dependUuids[i];

                if (typeof _uuid2 === 'number') {
                  dependUuids[i] = dependSharedUuids[_uuid2];
                }
              }
            }

            function isCompiledJson(json) {
              if (Array.isArray(json)) {
                var version = json[0];
                return typeof version === 'number' || version instanceof FileInfo;
              } else {
                return false;
              }
            }
            function deserialize(data, details, options) {
              if (typeof data === 'string') {
                data = JSON.parse(data);
              }

              var borrowDetails = !details;
              details = details || Details.pool.get();
              var res;

              if ( !( isCompiledJson(data))) {
                res = deserializeDynamic(data, details, options);
              } else {
                details.init(data);
                options = options || {};
                var version = data[File.Version];
                var preprocessed = false;

                if (typeof version === 'object') {
                  preprocessed = version.preprocessed;
                  version = version.version;
                }

                if (version < SUPPORT_MIN_FORMAT_VERSION) {
                  throw new Error(getError(5304, version));
                }

                options._version = version;
                options.result = details;
                data[File.Context] = options;

                if (!preprocessed) {
                  lookupClasses(data, false, options.classFinder);
                  cacheMasks(data);
                }

                legacyCC.game._isCloning = true;
                var instances = data[File.Instances];
                var rootIndex = parseInstances(data);
                legacyCC.game._isCloning = false;

                if (data[File.Refs]) {
                  dereference(data[File.Refs], instances, data[File.SharedStrings]);
                }

                parseResult(data);

                {
                  for (var i = 0; i < instances.length; ++i) {
                    var _instances$i, _instances$i$onAfterD;

                    (_instances$i = instances[i]) === null || _instances$i === void 0 ? void 0 : (_instances$i$onAfterD = _instances$i.onAfterDeserialize_JSB) === null || _instances$i$onAfterD === void 0 ? void 0 : _instances$i$onAfterD.call(_instances$i);
                  }
                }

                res = instances[rootIndex];
              }

              if (borrowDetails) {
                Details.pool.put(details);
              }

              return res;
            }
            deserialize.Details = Details;

            deserialize.reportMissingClass = function (id) {
              {
                warnID(5302, id);
              }
            };

            var FileInfo = function FileInfo(version) {
              this.preprocessed = true;
              this.version = version;
            };

            function unpackJSONs(data, classFinder) {
              if (data[File.Version] < SUPPORT_MIN_FORMAT_VERSION) {
                throw new Error(getError(5304, data[File.Version]));
              }

              lookupClasses(data, true, classFinder);
              cacheMasks(data);
              var version = new FileInfo(data[File.Version]);
              var sharedUuids = data[File.SharedUuids];
              var sharedStrings = data[File.SharedStrings];
              var sharedClasses = data[File.SharedClasses];
              var sharedMasks = data[File.SharedMasks];
              var sections = data[PACKED_SECTIONS];

              for (var i = 0; i < sections.length; ++i) {
                sections[i].unshift(version, sharedUuids, sharedStrings, sharedClasses, sharedMasks);
              }

              return sections;
            }
            function packCustomObjData(type, data, hasNativeDep) {
              return [SUPPORT_MIN_FORMAT_VERSION, EMPTY_PLACEHOLDER, EMPTY_PLACEHOLDER, [type], EMPTY_PLACEHOLDER, hasNativeDep ? [data, ~0] : [data], [0], EMPTY_PLACEHOLDER, [], [], []];
            }
            function hasNativeDep(data) {
              var instances = data[File.Instances];
              var rootInfo = instances[instances.length - 1];

              if (typeof rootInfo !== 'number') {
                return false;
              } else {
                return rootInfo < 0;
              }
            }
            function getDependUuidList(json) {
              var sharedUuids = json[File.SharedUuids];
              return json[File.DependUuidIndices].map(function (index) {
                return sharedUuids[index];
              });
            }

            {
              deserialize.isCompiledJson = isCompiledJson;
            }

            legacyCC.deserialize = deserialize;

            var getPhaseID = exports('eb', function () {
              var phases = new Map();
              var phaseNum = 0;
              return function (phaseName) {
                if (typeof phaseName === 'number') {
                  return phaseName;
                }

                if (!phases.has(phaseName)) {
                  phases.set(phaseName, 1 << phaseNum);
                  phaseNum++;
                }

                return phases.get(phaseName);
              };
            }());

            var NetworkType;

            (function (NetworkType) {
              NetworkType[NetworkType["NONE"] = 0] = "NONE";
              NetworkType[NetworkType["LAN"] = 1] = "LAN";
              NetworkType[NetworkType["WWAN"] = 2] = "WWAN";
            })(NetworkType || (NetworkType = {}));

            var sys = exports('dK', {
              NetworkType: NetworkType,
              LANGUAGE_ENGLISH: 'en',
              LANGUAGE_CHINESE: 'zh',
              LANGUAGE_FRENCH: 'fr',
              LANGUAGE_ITALIAN: 'it',
              LANGUAGE_GERMAN: 'de',
              LANGUAGE_SPANISH: 'es',
              LANGUAGE_DUTCH: 'du',
              LANGUAGE_RUSSIAN: 'ru',
              LANGUAGE_KOREAN: 'ko',
              LANGUAGE_JAPANESE: 'ja',
              LANGUAGE_HUNGARIAN: 'hu',
              LANGUAGE_PORTUGUESE: 'pt',
              LANGUAGE_ARABIC: 'ar',
              LANGUAGE_NORWEGIAN: 'no',
              LANGUAGE_POLISH: 'pl',
              LANGUAGE_TURKISH: 'tr',
              LANGUAGE_UKRAINIAN: 'uk',
              LANGUAGE_ROMANIAN: 'ro',
              LANGUAGE_BULGARIAN: 'bg',
              LANGUAGE_UNKNOWN: 'unknown',
              OS_IOS: 'iOS',
              OS_ANDROID: 'Android',
              OS_WINDOWS: 'Windows',
              OS_LINUX: 'Linux',
              OS_OSX: 'OS X',
              OS_UNKNOWN: 'Unknown',
              UNKNOWN: -1,
              WIN32: 0,
              LINUX: 1,
              MACOS: 2,
              ANDROID: 3,
              IPHONE: 4,
              IPAD: 5,
              BLACKBERRY: 6,
              NACL: 7,
              EMSCRIPTEN: 8,
              TIZEN: 9,
              WINRT: 10,
              WP8: 11,
              MOBILE_BROWSER: 100,
              DESKTOP_BROWSER: 101,
              EDITOR_PAGE: 102,
              EDITOR_CORE: 103,
              WECHAT_GAME: 104,
              QQ_PLAY: 105,
              FB_PLAYABLE_ADS: 106,
              BAIDU_MINI_GAME: 107,
              VIVO_MINI_GAME: 108,
              OPPO_MINI_GAME: 109,
              HUAWEI_QUICK_GAME: 110,
              XIAOMI_QUICK_GAME: 111,
              COCOSPLAY: 112,
              ALIPAY_MINI_GAME: 113,
              QTT_MINI_GAME: 116,
              BYTEDANCE_MINI_GAME: 117,
              LINKSURE_MINI_GAME: 119,
              BROWSER_TYPE_WECHAT: 'wechat',
              BROWSER_TYPE_ANDROID: 'androidbrowser',
              BROWSER_TYPE_IE: 'ie',
              BROWSER_TYPE_EDGE: 'edge',
              BROWSER_TYPE_QQ: 'qqbrowser',
              BROWSER_TYPE_MOBILE_QQ: 'mqqbrowser',
              BROWSER_TYPE_UC: 'ucbrowser',
              BROWSER_TYPE_UCBS: 'ucbs',
              BROWSER_TYPE_360: '360browser',
              BROWSER_TYPE_BAIDU_APP: 'baiduboxapp',
              BROWSER_TYPE_BAIDU: 'baidubrowser',
              BROWSER_TYPE_MAXTHON: 'maxthon',
              BROWSER_TYPE_OPERA: 'opera',
              BROWSER_TYPE_OUPENG: 'oupeng',
              BROWSER_TYPE_MIUI: 'miuibrowser',
              BROWSER_TYPE_FIREFOX: 'firefox',
              BROWSER_TYPE_SAFARI: 'safari',
              BROWSER_TYPE_CHROME: 'chrome',
              BROWSER_TYPE_LIEBAO: 'liebao',
              BROWSER_TYPE_QZONE: 'qzone',
              BROWSER_TYPE_SOUGOU: 'sogou',
              BROWSER_TYPE_HUAWEI: 'huawei',
              BROWSER_TYPE_UNKNOWN: 'unknown',
              isNative: false,
              isBrowser: typeof window === 'object' && typeof document === 'object',
              isMobile: false,
              isLittleEndian: function () {
                var buffer = new ArrayBuffer(2);
                new DataView(buffer).setInt16(0, 256, true);
                return new Int16Array(buffer)[0] === 256;
              }(),
              platform: -1,
              language: 'unknown',
              languageCode: 'unknown',
              os: 'Unknown',
              osVersion: '',
              osMainVersion: 0,
              browserType: 'unknown',
              browserVersion: '',
              windowPixelResolution: null,
              capabilities: null,
              localStorage: null,
              __audioSupport: null,
              __videoSupport: null,
              getNetworkType: function getNetworkType() {
                return NetworkType.LAN;
              },
              getBatteryLevel: function getBatteryLevel() {
                return 1.0;
              },
              garbageCollect: function garbageCollect() {},
              isObjectValid: function isObjectValid(obj) {
                if (obj === null || obj === undefined) {
                  return false;
                }

                return true;
              },
              dump: function dump() {
                var str = '';
                str += "isMobile : " + this.isMobile + "\r\n";
                str += "language : " + this.language + "\r\n";
                str += "browserType : " + this.browserType + "\r\n";
                str += "browserVersion : " + this.browserVersion + "\r\n";
                str += "capabilities : " + JSON.stringify(this.capabilities) + "\r\n";
                str += "os : " + this.os + "\r\n";
                str += "osVersion : " + this.osVersion + "\r\n";
                str += "platform : " + this.platform + "\r\n";
                str += "Using " + (legacyCC.game.renderType === legacyCC.game.RENDER_TYPE_WEBGL ? 'WEBGL' : 'CANVAS') + " renderer.\r\n";
                log(str);
              },
              openURL: function openURL(url) {
                window.open(url);
              },
              now: function now() {
                if (Date.now) {
                  return Date.now();
                }

                return +new Date();
              },
              restartVM: function restartVM() {},
              getSafeAreaRect: function getSafeAreaRect() {
                var visibleSize = legacyCC.view.getVisibleSize();
                return legacyCC.rect(0, 0, visibleSize.width, visibleSize.height);
              },
              __init: function __init() {
                var win = window;
                var nav = win.navigator;
                var doc = document;
                var docEle = doc.documentElement;
                var ua = nav.userAgent.toLowerCase();

                {
                  sys.isMobile = /mobile|android|iphone|ipad/.test(ua);
                  sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
                }

                var currLanguage = nav.language;
                sys.languageCode = currLanguage.toLowerCase();
                currLanguage = currLanguage || nav.browserLanguage;
                currLanguage = currLanguage ? currLanguage.split('-')[0] : sys.LANGUAGE_ENGLISH;
                sys.language = currLanguage;
                var isAndroid = false;
                var iOS = false;
                var osVersion = '';
                var osMajorVersion = 0;
                var uaResult = /android\s*(\d+(?:\.\d+)*)/i.exec(ua) || /android\s*(\d+(?:\.\d+)*)/i.exec(nav.platform);

                if (uaResult) {
                  isAndroid = true;
                  osVersion = uaResult[1] || '';
                  osMajorVersion = parseInt(osVersion) || 0;
                }

                uaResult = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(ua);

                if (uaResult) {
                  iOS = true;
                  osVersion = uaResult[2] || '';
                  osMajorVersion = parseInt(osVersion) || 0;
                } else if (/(iPhone|iPad|iPod)/.exec(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints && nav.maxTouchPoints > 1) {
                  iOS = true;
                  osVersion = '';
                  osMajorVersion = 0;
                }

                var osName = sys.OS_UNKNOWN;

                if (nav.appVersion.indexOf('Win') !== -1) {
                  osName = sys.OS_WINDOWS;
                } else if (iOS) {
                  osName = sys.OS_IOS;
                } else if (nav.appVersion.indexOf('Mac') !== -1) {
                  osName = sys.OS_OSX;
                } else if (nav.appVersion.indexOf('X11') !== -1 && nav.appVersion.indexOf('Linux') === -1) {
                  osName = sys.OS_UNIX;
                } else if (isAndroid) {
                  osName = sys.OS_ANDROID;
                } else if (nav.appVersion.indexOf('Linux') !== -1 || ua.indexOf('ubuntu') !== -1) {
                  osName = sys.OS_LINUX;
                }

                sys.os = osName;
                sys.osVersion = osVersion;
                sys.osMainVersion = osMajorVersion;
                sys.browserType = sys.BROWSER_TYPE_UNKNOWN;

                (function () {
                  var typeReg1 = /mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|ucbs|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|miuibrowser/i;
                  var typeReg2 = /qq|qqbrowser|ucbrowser|ubrowser|edge|HuaweiBrowser/i;
                  var typeReg3 = /chrome|safari|firefox|trident|opera|opr\/|oupeng/i;
                  var browserTypes = typeReg1.exec(ua) || typeReg2.exec(ua) || typeReg3.exec(ua);
                  var browserType = browserTypes ? browserTypes[0].toLowerCase() : sys.BROWSER_TYPE_UNKNOWN;

                  if (browserType === 'safari' && isAndroid) {
                    browserType = sys.BROWSER_TYPE_ANDROID;
                  } else if (browserType === 'qq' && /android.*applewebkit/i.test(ua)) {
                    browserType = sys.BROWSER_TYPE_ANDROID;
                  }

                  var typeMap = {
                    micromessenger: sys.BROWSER_TYPE_WECHAT,
                    trident: sys.BROWSER_TYPE_IE,
                    edge: sys.BROWSER_TYPE_EDGE,
                    '360 aphone': sys.BROWSER_TYPE_360,
                    mxbrowser: sys.BROWSER_TYPE_MAXTHON,
                    'opr/': sys.BROWSER_TYPE_OPERA,
                    ubrowser: sys.BROWSER_TYPE_UC,
                    huaweibrowser: sys.BROWSER_TYPE_HUAWEI
                  };
                  sys.browserType = typeMap[browserType] || browserType;
                })();

                sys.browserVersion = '';

                (function () {
                  var versionReg1 = /(mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|uc|ucbs|360 aphone|360|baiduboxapp|baidu|maxthon|mxbrowser|miui(?:.hybrid)?)(mobile)?(browser)?\/?([\d.]+)/i;
                  var versionReg2 = /(qq|chrome|safari|firefox|trident|opera|opr\/|oupeng)(mobile)?(browser)?\/?([\d.]+)/i;
                  var tmp = versionReg1.exec(ua);

                  if (!tmp) {
                    tmp = versionReg2.exec(ua);
                  }

                  sys.browserVersion = tmp ? tmp[4] : '';
                })();

                var w = window.innerWidth || document.documentElement.clientWidth;
                var h = window.innerHeight || document.documentElement.clientHeight;
                var ratio = window.devicePixelRatio || 1;
                sys.windowPixelResolution = {
                  width: ratio * w,
                  height: ratio * h
                };

                var _tmpCanvas1 = document.createElement('canvas');

                try {
                  var localStorage = sys.localStorage = win.localStorage;
                  localStorage.setItem('storage', '');
                  localStorage.removeItem('storage');
                  localStorage = null;
                } catch (e) {
                  var warn = function warn() {
                    warnID(5200);
                  };

                  sys.localStorage = {
                    getItem: warn,
                    setItem: warn,
                    removeItem: warn,
                    clear: warn
                  };
                }

                var _supportWebp;

                try {
                  _supportWebp = TEST ? false : _tmpCanvas1.toDataURL('image/webp').startsWith('data:image/webp');
                } catch (e) {
                  _supportWebp = false;
                }

                var _supportCanvas =  !!_tmpCanvas1.getContext('2d');

                var _supportWebGL = false;

                if (win.WebGLRenderingContext) {
                  _supportWebGL = true;
                }

                var capabilities = sys.capabilities = {
                  canvas: _supportCanvas,
                  opengl: _supportWebGL,
                  webp: _supportWebp,
                  imageBitmap: false,
                  touches: false,
                  mouse: false,
                  keyboard: false,
                  accelerometer: false
                };

                if ( typeof createImageBitmap !== 'undefined' && typeof Blob !== 'undefined') {
                  _tmpCanvas1.width = _tmpCanvas1.height = 2;
                  createImageBitmap(_tmpCanvas1, {}).then(function (imageBitmap) {
                    capabilities.imageBitmap = true;

                    if (imageBitmap.close) {
                      imageBitmap.close();
                    }
                  })["catch"](function (err) {});
                }

                if (docEle.ontouchstart !== undefined || doc.ontouchstart !== undefined || nav.msPointerEnabled) {
                  capabilities.touches = true;
                }

                if (docEle.onmouseup !== undefined) {
                  capabilities.mouse = true;
                }

                if (docEle.onkeyup !== undefined) {
                  capabilities.keyboard = true;
                }

                if (win.DeviceMotionEvent || win.DeviceOrientationEvent) {
                  capabilities.accelerometer = true;
                }

                var __audioSupport;

                (function () {
                  var supportWebAudio = !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
                  __audioSupport = {
                    ONLY_ONE: false,
                    WEB_AUDIO: supportWebAudio,
                    DELAY_CREATE_CTX: false
                  };

                  if (sys.os === sys.OS_IOS) {
                    __audioSupport.USE_LOADER_EVENT = 'loadedmetadata';
                  }

                  if (sys.browserType === sys.BROWSER_TYPE_FIREFOX) {
                    __audioSupport.DELAY_CREATE_CTX = true;
                    __audioSupport.USE_LOADER_EVENT = 'canplay';
                  }

                  if (sys.os === sys.OS_ANDROID) {
                    if (sys.browserType === sys.BROWSER_TYPE_UC) {
                      __audioSupport.ONE_SOURCE = true;
                    }
                  }
                })();

                try {
                  if (__audioSupport.WEB_AUDIO) {
                    __audioSupport._context = null;
                    Object.defineProperty(__audioSupport, 'context', {
                      get: function get() {
                        if (this._context) {
                          return this._context;
                        }

                        return this._context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
                      }
                    });
                  }
                } catch (error) {
                  __audioSupport.WEB_AUDIO = false;
                  logID(5201);
                }

                var formatSupport = [];

                (function () {
                  var audio = document.createElement('audio');

                  if (audio.canPlayType) {
                    var ogg = audio.canPlayType('audio/ogg; codecs="vorbis"');

                    if (ogg) {
                      formatSupport.push('.ogg');
                    }

                    var mp3 = audio.canPlayType('audio/mpeg');

                    if (mp3) {
                      formatSupport.push('.mp3');
                    }

                    var wav = audio.canPlayType('audio/wav; codecs="1"');

                    if (wav) {
                      formatSupport.push('.wav');
                    }

                    var mp4 = audio.canPlayType('audio/mp4');

                    if (mp4) {
                      formatSupport.push('.mp4');
                    }

                    var m4a = audio.canPlayType('audio/x-m4a');

                    if (m4a) {
                      formatSupport.push('.m4a');
                    }
                  }
                })();

                __audioSupport.format = formatSupport;
                sys.__audioSupport = __audioSupport;
                sys.__videoSupport = {
                  format: []
                };

                (function () {
                  var video = document.createElement('video');

                  if (video.canPlayType) {
                    var canPlayTypes = ['mp4', 'webm'];
                    var format = sys.__videoSupport.format;
                    canPlayTypes.forEach(function (type) {
                      if (video.canPlayType("video/" + type)) {
                        format.push("." + type);
                      }
                    });
                    sys.__videoSupport.format = format;
                  }
                })();

                sys.__isWebIOS14OrIPadOS14Env = (sys.os === sys.OS_IOS || sys.os === sys.MACOS) && sys.isBrowser && /(OS 1[4-9])|(Version\/1[4-9])/.test(window.navigator.userAgent);
              }
            });

            if (typeof window === 'object' && typeof document === 'object' && !MINIGAME && !JSB && !RUNTIME_BASED) {
              sys.__init();
            }

            legacyCC.sys = sys;

            function deepFlatten(strList, array) {
              for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
                var item = _step.value;

                if (Array.isArray(item)) {
                  deepFlatten(strList, item);
                } else {
                    strList.push(item);
                  }
              }
            }

            function flattenCodeArray(array) {
              var separator =  '\n' ;
              var strList = [];
              deepFlatten(strList, array);
              return strList.join(separator);
            }

            var Destroyed$1 = CCObject.Flags.Destroyed;
            var PersistentMask$1 = CCObject.Flags.PersistentMask;
            var DEFAULT = DELIMETER + "default";
            var IDENTIFIER_RE$1 = CCClass.IDENTIFIER_RE;
            var VAR = 'var ';
            var LOCAL_OBJ = 'o';
            var LOCAL_TEMP_OBJ = 't';
            var LOCAL_ARRAY = 'a';
            var LINE_INDEX_OF_NEW_OBJ = 0;
            var DEFAULT_MODULE_CACHE = {
              'cc.ClickEvent': false,
              'cc.PrefabInfo': false
            };
            var escapeForJS$1 = CCClass.escapeForJS;

            var Declaration = function () {
              function Declaration(varName, expression) {
                this.varName = void 0;
                this.expression = void 0;
                this.varName = varName;
                this.expression = expression;
              }

              var _proto = Declaration.prototype;

              _proto.toString = function toString() {
                return VAR + this.varName + "=" + this.expression + ";";
              };

              return Declaration;
            }();

            function mergeDeclaration(statement, expression) {
              if (expression instanceof Declaration) {
                return new Declaration(expression.varName, statement + expression.expression);
              } else {
                return statement + expression;
              }
            }

            function writeAssignment(codeArray, statement, expression) {
              if (Array.isArray(expression)) {
                expression[0] = mergeDeclaration(statement, expression[0]);
                codeArray.push(expression);
              } else {
                codeArray.push(mergeDeclaration(statement, expression) + ";");
              }
            }

            var Assignments = function () {
              function Assignments(targetExpression) {
                this._exps = void 0;
                this._targetExp = void 0;
                this._exps = [];
                this._targetExp = targetExpression;
              }

              var _proto2 = Assignments.prototype;

              _proto2.append = function append(key, expression) {
                this._exps.push([key, expression]);
              };

              _proto2.writeCode = function writeCode(codeArray) {
                var targetVar;

                if (this._exps.length > 1) {
                  codeArray.push(LOCAL_TEMP_OBJ + "=" + this._targetExp + ";");
                  targetVar = LOCAL_TEMP_OBJ;
                } else if (this._exps.length === 1) {
                  targetVar = this._targetExp;
                } else {
                  return;
                }

                for (var i = 0; i < this._exps.length; i++) {
                  var pair = this._exps[i];
                  writeAssignment(codeArray, targetVar + getPropAccessor(pair[0]) + "=", pair[1]);
                }
              };

              return Assignments;
            }();

            Assignments.pool = void 0;
            Assignments.pool = new Pool(function (obj) {
              obj._exps.length = 0;
              obj._targetExp = null;
            }, 1);

            Assignments.pool.get = function (targetExpression) {
              var cache = this._get() || new Assignments();
              cache._targetExp = targetExpression;
              return cache;
            };

            function getPropAccessor(key) {
              return IDENTIFIER_RE$1.test(key) ? "." + key : "[" + escapeForJS$1(key) + "]";
            }

            var Parser = function () {
              function Parser(obj, parent) {
                this.parent = void 0;
                this.objsToClear_iN$t = void 0;
                this.codeArray = void 0;
                this.objs = void 0;
                this.funcs = void 0;
                this.funcModuleCache = void 0;
                this.globalVariables = void 0;
                this.globalVariableId = void 0;
                this.localVariableId = void 0;
                this.result = void 0;
                this.parent = parent;
                this.objsToClear_iN$t = [];
                this.codeArray = [];
                this.objs = [];
                this.funcs = [];
                this.funcModuleCache = createMap();
                mixin(this.funcModuleCache, DEFAULT_MODULE_CACHE);
                this.globalVariables = [];
                this.globalVariableId = 0;
                this.localVariableId = 0;
                this.codeArray.push(VAR + LOCAL_OBJ + "," + LOCAL_TEMP_OBJ + ";", 'if(R){', LOCAL_OBJ + "=R;", '}else{', LOCAL_OBJ + "=R=new " + this.getFuncModule(obj.constructor, true) + "();", '}');
                obj._iN$t = {
                  globalVar: 'R'
                };
                this.objsToClear_iN$t.push(obj);
                this.enumerateObject(this.codeArray, obj);
                var globalVariablesDeclaration;

                if (this.globalVariables.length > 0) {
                  globalVariablesDeclaration = VAR + this.globalVariables.join(',') + ";";
                }

                var code = flattenCodeArray(['return (function(R){', globalVariablesDeclaration || [], this.codeArray, 'return o;', '})']);
                this.result = Function('O', 'F', code)(this.objs, this.funcs);

                for (var i = 0, len = this.objsToClear_iN$t.length; i < len; ++i) {
                  this.objsToClear_iN$t[i]._iN$t = null;
                }

                this.objsToClear_iN$t.length = 0;
              }

              var _proto3 = Parser.prototype;

              _proto3.getFuncModule = function getFuncModule(func, usedInNew) {
                var clsName = getClassName(func);

                if (clsName) {
                  var cache = this.funcModuleCache[clsName];

                  if (cache) {
                    return cache;
                  } else if (cache === undefined) {
                    var clsNameIsModule = clsName.indexOf('.') !== -1;

                    if (clsNameIsModule) {
                      try {
                        clsNameIsModule = func === Function("return " + clsName)();

                        if (clsNameIsModule) {
                          this.funcModuleCache[clsName] = clsName;
                          return clsName;
                        }
                      } catch (e) {}
                    }
                  }
                }

                var index = this.funcs.indexOf(func);

                if (index < 0) {
                  index = this.funcs.length;
                  this.funcs.push(func);
                }

                var res = "F[" + index + "]";

                if (usedInNew) {
                  res = "(" + res + ")";
                }

                this.funcModuleCache[clsName] = res;
                return res;
              };

              _proto3.getObjRef = function getObjRef(obj) {
                var index = this.objs.indexOf(obj);

                if (index < 0) {
                  index = this.objs.length;
                  this.objs.push(obj);
                }

                return "O[" + index + "]";
              };

              _proto3.setValueType = function setValueType(codeArray, defaultValue, srcValue, targetExpression) {
                var assignments = Assignments.pool.get(targetExpression);
                var fastDefinedProps = defaultValue.constructor.__props__;

                if (!fastDefinedProps) {
                  fastDefinedProps = Object.keys(defaultValue);
                }

                for (var i = 0; i < fastDefinedProps.length; i++) {
                  var propName = fastDefinedProps[i];
                  var prop = srcValue[propName];

                  if (defaultValue[propName] === prop) {
                    continue;
                  }

                  var expression = this.enumerateField(srcValue, propName, prop);
                  assignments.append(propName, expression);
                }

                assignments.writeCode(codeArray);
                Assignments.pool.put(assignments);
              };

              _proto3.enumerateCCClass = function enumerateCCClass(codeArray, obj, klass) {
                var props = klass.__values__;
                var attrs = getClassAttrs(klass);

                for (var p = 0; p < props.length; p++) {
                  var key = props[p];
                  var val = obj[key];
                  var defaultValue = attrs[key + DEFAULT];

                  if (equalsToDefault(defaultValue, val)) {
                    continue;
                  }

                  if (typeof val === 'object' && val instanceof legacyCC.ValueType) {
                    defaultValue = CCClass.getDefault(defaultValue);

                    if (defaultValue && defaultValue.constructor === val.constructor) {
                      var targetExpression = LOCAL_OBJ + getPropAccessor(key);
                      this.setValueType(codeArray, defaultValue, val, targetExpression);
                      continue;
                    }
                  }

                  this.setObjProp(codeArray, obj, key, val);
                }
              };

              _proto3.instantiateArray = function instantiateArray(value) {
                if (value.length === 0) {
                  return '[]';
                }

                var arrayVar = LOCAL_ARRAY + ++this.localVariableId;
                var declaration = new Declaration(arrayVar, "new Array(" + value.length + ")");
                var codeArray = [declaration];
                value._iN$t = {
                  globalVar: '',
                  source: codeArray
                };
                this.objsToClear_iN$t.push(value);

                for (var i = 0; i < value.length; ++i) {
                  var statement = arrayVar + "[" + i + "]=";
                  var expression = this.enumerateField(value, i, value[i]);
                  writeAssignment(codeArray, statement, expression);
                }

                return codeArray;
              };

              _proto3.instantiateTypedArray = function instantiateTypedArray(value) {
                var type = value.constructor.name;

                if (value.length === 0) {
                  return "new " + type;
                }

                var arrayVar = LOCAL_ARRAY + ++this.localVariableId;
                var declaration = new Declaration(arrayVar, "new " + type + "(" + value.length + ")");
                var codeArray = [declaration];
                value._iN$t = {
                  globalVar: '',
                  source: codeArray
                };
                this.objsToClear_iN$t.push(value);

                for (var i = 0; i < value.length; ++i) {
                  if (value[i] !== 0) {
                    var statement = arrayVar + "[" + i + "]=";
                    writeAssignment(codeArray, statement, value[i]);
                  }
                }

                return codeArray;
              };

              _proto3.enumerateField = function enumerateField(obj, key, value) {
                if (typeof value === 'object' && value) {
                  var _iN$t = value._iN$t;

                  if (_iN$t) {
                    var globalVar = _iN$t.globalVar;

                    if (!globalVar) {
                      globalVar = _iN$t.globalVar = "v" + ++this.globalVariableId;
                      this.globalVariables.push(globalVar);
                      var line = _iN$t.source[LINE_INDEX_OF_NEW_OBJ];
                      _iN$t.source[LINE_INDEX_OF_NEW_OBJ] = mergeDeclaration(globalVar + "=", line);
                    }

                    return globalVar;
                  } else if (ArrayBuffer.isView(value)) {
                    return this.instantiateTypedArray(value);
                  } else if (Array.isArray(value)) {
                    return this.instantiateArray(value);
                  } else {
                    return this.instantiateObj(value);
                  }
                } else if (typeof value === 'function') {
                  return this.getFuncModule(value);
                } else if (typeof value === 'string') {
                  return escapeForJS$1(value);
                } else {
                  if (key === '_objFlags' && obj instanceof CCObject) {
                    value &= PersistentMask$1;
                  }

                  return value;
                }
              };

              _proto3.setObjProp = function setObjProp(codeArray, obj, key, value) {
                var statement = LOCAL_OBJ + getPropAccessor(key) + "=";
                var expression = this.enumerateField(obj, key, value);
                writeAssignment(codeArray, statement, expression);
              };

              _proto3.enumerateObject = function enumerateObject(codeArray, obj) {
                var klass = obj.constructor;

                if (legacyCC.Class._isCCClass(klass)) {
                  this.enumerateCCClass(codeArray, obj, klass);
                } else {
                  for (var key in obj) {
                    if (!obj.hasOwnProperty(key) || key.charCodeAt(0) === 95 && key.charCodeAt(1) === 95 && key !== '__type__') {
                      continue;
                    }

                    var value = obj[key];

                    if (typeof value === 'object' && value && value === obj._iN$t) {
                      continue;
                    }

                    this.setObjProp(codeArray, obj, key, value);
                  }
                }
              };

              _proto3.instantiateObj = function instantiateObj(obj) {
                if (obj instanceof legacyCC.ValueType) {
                  return CCClass.getNewValueTypeCode(obj);
                }

                if (obj instanceof legacyCC.Asset) {
                  return this.getObjRef(obj);
                }

                if (obj._objFlags & Destroyed$1) {
                  return null;
                }

                var createCode;
                var ctor = obj.constructor;

                if (legacyCC.Class._isCCClass(ctor)) {
                  if (this.parent) {
                    if (this.parent instanceof legacyCC.Component) {
                      if (obj instanceof legacyCC._BaseNode || obj instanceof legacyCC.Component) {
                        return this.getObjRef(obj);
                      }
                    } else if (this.parent instanceof legacyCC._BaseNode) {
                      if (obj instanceof legacyCC._BaseNode) {
                        if (!obj.isChildOf(this.parent)) {
                          return this.getObjRef(obj);
                        }
                      } else if (obj instanceof legacyCC.Component) {
                        if (!obj.node.isChildOf(this.parent)) {
                          return this.getObjRef(obj);
                        }
                      }
                    }
                  }

                  createCode = new Declaration(LOCAL_OBJ, "new " + this.getFuncModule(ctor, true) + "()");
                } else if (ctor === Object) {
                  createCode = new Declaration(LOCAL_OBJ, '{}');
                } else if (!ctor) {
                  createCode = new Declaration(LOCAL_OBJ, 'Object.create(null)');
                } else {
                  return this.getObjRef(obj);
                }

                var codeArray = [createCode];
                obj._iN$t = {
                  globalVar: '',
                  source: codeArray
                };
                this.objsToClear_iN$t.push(obj);
                this.enumerateObject(codeArray, obj);
                return ['(function(){', codeArray, 'return o;})();'];
              };

              return Parser;
            }();

            function equalsToDefault(def, value) {
              if (typeof def === 'function') {
                try {
                  def = def();
                } catch (e) {
                  return false;
                }
              }

              if (def === value) {
                return true;
              }

              if (def && value && typeof def === 'object' && typeof value === 'object' && def.constructor === value.constructor) {
                if (def instanceof legacyCC.ValueType) {
                  if (def.equals(value)) {
                    return true;
                  }
                } else if (Array.isArray(def)) {
                  return def.length === 0 && value.length === 0;
                } else if (def.constructor === Object) {
                  return isEmptyObject(def) && isEmptyObject(value);
                }
              }

              return false;
            }
            function compile(node) {
              var root = node instanceof legacyCC._BaseNode && node;
              var parser = new Parser(node, root);
              return parser.result;
            }

            var _decorator = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ccclass: ccclass,
                property: property,
                requireComponent: requireComponent,
                executionOrder: executionOrder,
                disallowMultiple: disallowMultiple,
                executeInEditMode: executeInEditMode,
                menu: menu,
                playOnFocus: playOnFocus,
                inspector: inspector,
                icon: icon,
                help: help,
                type: type,
                integer: integer,
                float: _float,
                boolean: _boolean,
                string: string
            });
            exports('dl', _decorator);

            var Destroyed$2 = CCObject.Flags.Destroyed;
            var PersistentMask$2 = CCObject.Flags.PersistentMask;
            var objsToClearTmpVar = [];
            function instantiate(original, internalForce) {
              if (!internalForce) {
                {
                  if (typeof original !== 'object' || Array.isArray(original)) {
                    throw new TypeError(getError(6900));
                  }

                  if (!original) {
                    throw new TypeError(getError(6901));
                  }

                  if (!legacyCC.isValid(original)) {
                    throw new TypeError(getError(6901));
                  }

                  if (original instanceof legacyCC.Component) {
                    warn('Should not instantiate a single cc.Component directly, you must instantiate the entire node.');
                  }
                }
              }

              var clone;

              if (original instanceof CCObject) {
                if (original._instantiate) {
                  legacyCC.game._isCloning = true;
                  clone = original._instantiate(null, true);
                  legacyCC.game._isCloning = false;
                  return clone;
                } else if (original instanceof legacyCC.Asset) {
                  throw new TypeError(getError(6903));
                }
              }

              legacyCC.game._isCloning = true;
              clone = doInstantiate(original);
              legacyCC.game._isCloning = false;
              return clone;
            }

            function doInstantiate(obj, parent) {
              {
                if (Array.isArray(obj)) {
                  throw new TypeError(getError(6904));
                }

                if (isDomNode && isDomNode(obj)) {
                  throw new TypeError(getError(6905));
                }
              }

              var clone;

              if (obj._iN$t) {
                clone = obj._iN$t;
              } else if (obj.constructor) {
                var klass = obj.constructor;
                clone = new klass();
              } else {
                clone = Object.create(null);
              }

              enumerateObject(obj, clone, parent);

              for (var i = 0, len = objsToClearTmpVar.length; i < len; ++i) {
                objsToClearTmpVar[i]._iN$t = null;
              }

              objsToClearTmpVar.length = 0;
              return clone;
            }

            function enumerateCCClass(klass, obj, clone, parent) {
              var props = klass.__values__;

              for (var p = 0; p < props.length; p++) {
                var key = props[p];
                var value = obj[key];

                if (typeof value === 'object' && value) {
                  var initValue = clone[key];

                  if (initValue instanceof ValueType && initValue.constructor === value.constructor) {
                    initValue.set(value);
                  } else {
                    clone[key] = value._iN$t || instantiateObj(value, parent);
                  }
                } else {
                  clone[key] = value;
                }
              }
            }

            function enumerateObject(obj, clone, parent) {
              js.value(obj, '_iN$t', clone, true);
              objsToClearTmpVar.push(obj);
              var klass = obj.constructor;

              if (legacyCC.Class._isCCClass(klass)) {
                enumerateCCClass(klass, obj, clone, parent);
              } else {
                for (var key in obj) {
                  if (!obj.hasOwnProperty(key) || key.charCodeAt(0) === 95 && key.charCodeAt(1) === 95 && key !== '__type__') {
                    continue;
                  }

                  var value = obj[key];

                  if (typeof value === 'object' && value) {
                    if (value === clone) {
                      continue;
                    }

                    clone[key] = value._iN$t || instantiateObj(value, parent);
                  } else {
                    clone[key] = value;
                  }
                }
              }

              if (obj instanceof CCObject) {
                clone._objFlags &= PersistentMask$2;
              }
            }

            function instantiateObj(obj, parent) {
              if (obj instanceof ValueType) {
                return obj.clone();
              }

              if (obj instanceof legacyCC.Asset) {
                return obj;
              }

              var clone;

              if (ArrayBuffer.isView(obj)) {
                var len = obj.length;
                clone = new obj.constructor(len);
                obj._iN$t = clone;
                objsToClearTmpVar.push(obj);

                for (var i = 0; i < len; ++i) {
                  clone[i] = obj[i];
                }

                return clone;
              }

              if (Array.isArray(obj)) {
                var _len = obj.length;
                clone = new Array(_len);
                obj._iN$t = clone;
                objsToClearTmpVar.push(obj);

                for (var _i = 0; _i < _len; ++_i) {
                  var value = obj[_i];

                  if (typeof value === 'object' && value) {
                    clone[_i] = value._iN$t || instantiateObj(value, parent);
                  } else {
                    clone[_i] = value;
                  }
                }

                return clone;
              } else if (obj._objFlags & Destroyed$2) {
                return null;
              }

              var ctor = obj.constructor;

              if (legacyCC.Class._isCCClass(ctor)) {
                if (parent) {
                  if (parent instanceof legacyCC.Component) {
                    if (obj instanceof legacyCC._BaseNode || obj instanceof legacyCC.Component) {
                      return obj;
                    }
                  } else if (parent instanceof legacyCC._BaseNode) {
                    if (obj instanceof legacyCC._BaseNode) {
                      if (!obj.isChildOf(parent)) {
                        return obj;
                      }
                    } else if (obj instanceof legacyCC.Component) {
                      if (!obj.node.isChildOf(parent)) {
                        return obj;
                      }
                    }
                  }
                }

                clone = new ctor();
              } else if (ctor === Object) {
                clone = {};
              } else if (!ctor) {
                clone = Object.create(null);
              } else {
                return obj;
              }

              enumerateObject(obj, clone, parent);
              return clone;
            }

            instantiate._clone = doInstantiate;
            legacyCC.instantiate = instantiate;

            var _dec$4, _class$4, _class2$4, _descriptor$3, _descriptor2$1, _descriptor3$1, _descriptor4, _class3$3, _temp$3, _BuiltinElementTypeTr;
            var StorageUnit;

            (function (StorageUnit) {
              StorageUnit[StorageUnit["Uint8"] = 0] = "Uint8";
              StorageUnit[StorageUnit["Uint16"] = 1] = "Uint16";
              StorageUnit[StorageUnit["Uint32"] = 2] = "Uint32";
              StorageUnit[StorageUnit["Int8"] = 3] = "Int8";
              StorageUnit[StorageUnit["Int16"] = 4] = "Int16";
              StorageUnit[StorageUnit["Int32"] = 5] = "Int32";
              StorageUnit[StorageUnit["Float32"] = 6] = "Float32";
              StorageUnit[StorageUnit["Float64"] = 7] = "Float64";
            })(StorageUnit || (StorageUnit = {}));

            var ElementType;

            (function (ElementType) {
              ElementType[ElementType["Scalar"] = 0] = "Scalar";
              ElementType[ElementType["Vec2"] = 1] = "Vec2";
              ElementType[ElementType["Vec3"] = 2] = "Vec3";
              ElementType[ElementType["Vec4"] = 3] = "Vec4";
              ElementType[ElementType["Quat"] = 4] = "Quat";
              ElementType[ElementType["Mat4"] = 5] = "Mat4";
            })(ElementType || (ElementType = {}));

            var elementTypeBits = 3;
            function combineStorageUnitElementType(unit, elementType) {
              return (elementType << elementTypeBits) + unit;
            }
            function extractStorageUnitElementType(combined) {
              return {
                storageUnit: ~(-1 << elementTypeBits) & combined,
                elementType: combined >> elementTypeBits
              };
            }
            var CompactValueTypeArray = exports('dx', (_dec$4 = ccclass('cc.CompactValueTypeArray'), _dec$4(_class$4 = (_class2$4 = (_temp$3 = _class3$3 = function () {
              function CompactValueTypeArray() {
                _initializerDefineProperty(this, "_byteOffset", _descriptor$3, this);

                _initializerDefineProperty(this, "_unitCount", _descriptor2$1, this);

                _initializerDefineProperty(this, "_unitElement", _descriptor3$1, this);

                _initializerDefineProperty(this, "_length", _descriptor4, this);
              }

              CompactValueTypeArray.lengthFor = function lengthFor(values, elementType, unit) {
                var elementTraits = getElementTraits(elementType);
                return elementTraits.requiredUnits * values.length * getStorageConstructor(unit).BYTES_PER_ELEMENT;
              };

              CompactValueTypeArray.compress = function compress(values, elementType, unit, arrayBuffer, byteOffset, presumedByteOffset) {
                var elementTraits = getElementTraits(elementType);
                var storageConstructor = getStorageConstructor(unit);
                var unitCount = elementTraits.requiredUnits * values.length;
                var storage = new storageConstructor(arrayBuffer, byteOffset, unitCount);

                for (var i = 0; i < values.length; ++i) {
                  elementTraits.compress(storage, i, values[i]);
                }

                var result = new CompactValueTypeArray();
                result._unitElement = combineStorageUnitElementType(unit, elementType);
                result._byteOffset = presumedByteOffset;
                result._unitCount = unitCount;
                result._length = values.length;
                return result;
              };

              var _proto = CompactValueTypeArray.prototype;

              _proto.decompress = function decompress(arrayBuffer) {
                var _extractStorageUnitEl = extractStorageUnitElementType(this._unitElement),
                    storageUnit = _extractStorageUnitEl.storageUnit,
                    elementType = _extractStorageUnitEl.elementType;

                var elementTraits = getElementTraits(elementType);
                var storageConstructor = getStorageConstructor(storageUnit);
                var storage = new storageConstructor(arrayBuffer, this._byteOffset, this._unitCount);
                var result = new Array(this._length);

                for (var i = 0; i < this._length; ++i) {
                  result[i] = elementTraits.decompress(storage, i);
                }

                return result;
              };

              return CompactValueTypeArray;
            }(), _class3$3.StorageUnit = StorageUnit, _class3$3.ElementType = ElementType, _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class2$4.prototype, "_byteOffset", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_unitCount", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$4.prototype, "_unitElement", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return combineStorageUnitElementType(StorageUnit.Uint8, ElementType.Scalar);
              }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2$4.prototype, "_length", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return 0;
              }
            })), _class2$4)) || _class$4));

            function getElementTraits(elementType) {
              return BuiltinElementTypeTraits[elementType];
            }

            function getStorageConstructor(unit) {
              switch (unit) {
                case StorageUnit.Uint8:
                  return Uint8Array;

                case StorageUnit.Uint16:
                  return Uint16Array;

                case StorageUnit.Uint32:
                  return Uint32Array;

                case StorageUnit.Int8:
                  return Int8Array;

                case StorageUnit.Int16:
                  return Int16Array;

                case StorageUnit.Int32:
                  return Int32Array;

                case StorageUnit.Float32:
                  return Float32Array;

                case StorageUnit.Float64:
                  return Float64Array;
              }
            }

            var BuiltinElementTypeTraits = (_BuiltinElementTypeTr = {}, _BuiltinElementTypeTr[ElementType.Scalar] = {
              requiredUnits: 1,
              compress: function compress(storage, index, value) {
                storage[index] = value;
              },
              decompress: function decompress(storage, index) {
                return storage[index];
              }
            }, _BuiltinElementTypeTr[ElementType.Vec2] = {
              requiredUnits: 2,
              compress: function compress(storage, index, value) {
                storage[index * 2] = value.x;
                storage[index * 2 + 1] = value.y;
              },
              decompress: function decompress(storage, index) {
                return new Vec3(storage[index * 2], storage[index * 2 + 1]);
              }
            }, _BuiltinElementTypeTr[ElementType.Vec3] = {
              requiredUnits: 3,
              compress: function compress(storage, index, value) {
                storage[index * 3] = value.x;
                storage[index * 3 + 1] = value.y;
                storage[index * 3 + 2] = value.z;
              },
              decompress: function decompress(storage, index) {
                return new Vec3(storage[index * 3], storage[index * 3 + 1], storage[index * 3 + 2]);
              }
            }, _BuiltinElementTypeTr[ElementType.Vec4] = {
              requiredUnits: 4,
              compress: function compress(storage, index, value) {
                storage[index * 4] = value.x;
                storage[index * 4 + 1] = value.y;
                storage[index * 4 + 2] = value.z;
                storage[index * 4 + 3] = value.w;
              },
              decompress: function decompress(storage, index) {
                return new Vec4(storage[index * 4], storage[index * 4 + 1], storage[index * 4 + 2], storage[index * 4 + 3]);
              }
            }, _BuiltinElementTypeTr[ElementType.Quat] = {
              requiredUnits: 4,
              compress: function compress(storage, index, value) {
                storage[index * 4] = value.x;
                storage[index * 4 + 1] = value.y;
                storage[index * 4 + 2] = value.z;
                storage[index * 4 + 3] = value.w;
              },
              decompress: function decompress(storage, index) {
                return new Quat(storage[index * 4], storage[index * 4 + 1], storage[index * 4 + 2], storage[index * 4 + 3]);
              }
            }, _BuiltinElementTypeTr[ElementType.Mat4] = {
              requiredUnits: 16,
              compress: function compress(storage, index, value) {
                Mat4.toArray(storage, value, index * 16);
              },
              decompress: function decompress(storage, index) {
                return Mat4.fromArray(new Mat4(), storage, index * 16);
              }
            }, _BuiltinElementTypeTr);

            legacyCC._decorator = _decorator;

            var _dec$5, _class$5, _class2$5, _descriptor$4, _temp$4, _dec2$3, _dec3$2, _dec4$1, _dec5, _dec6, _class4, _class5, _descriptor2$2, _descriptor3$2, _descriptor4$1, _descriptor5, _descriptor6, _temp2, _dec7, _dec8, _class7, _class8, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp3, _dec9, _class10, _class11, _descriptor12, _temp4, _dec10, _dec11, _class13, _class14, _descriptor13, _descriptor14, _descriptor15, _temp5, _dec12, _dec13, _dec14, _class16, _class17, _descriptor16, _descriptor17, _temp6, _dec15, _dec16, _dec17, _dec18, _dec19, _class19, _class20, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp7;

            var TargetInfo = (_dec$5 = ccclass('cc.TargetInfo'), _dec$5(_class$5 = (_class2$5 = (_temp$4 = function TargetInfo() {
              _initializerDefineProperty(this, "localID", _descriptor$4, this);
            }, _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class2$5.prototype, "localID", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            })), _class2$5)) || _class$5);
            var TargetOverrideInfo = (_dec2$3 = ccclass('cc.TargetOverrideInfo'), _dec3$2 = type(CCObject), _dec4$1 = type(TargetInfo), _dec5 = type(legacyCC.Node), _dec6 = type(TargetInfo), _dec2$3(_class4 = (_class5 = (_temp2 = function TargetOverrideInfo() {
              _initializerDefineProperty(this, "source", _descriptor2$2, this);

              _initializerDefineProperty(this, "sourceInfo", _descriptor3$2, this);

              _initializerDefineProperty(this, "propertyPath", _descriptor4$1, this);

              _initializerDefineProperty(this, "target", _descriptor5, this);

              _initializerDefineProperty(this, "targetInfo", _descriptor6, this);
            }, _temp2), (_descriptor2$2 = _applyDecoratedDescriptor(_class5.prototype, "source", [serializable, _dec3$2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor3$2 = _applyDecoratedDescriptor(_class5.prototype, "sourceInfo", [serializable, _dec4$1], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor4$1 = _applyDecoratedDescriptor(_class5.prototype, "propertyPath", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "target", [serializable, _dec5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "targetInfo", [serializable, _dec6], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class5)) || _class4);
            var PrefabInfo = (_dec7 = ccclass('cc.PrefabInfo'), _dec8 = type([TargetOverrideInfo]), _dec7(_class7 = (_class8 = (_temp3 = function PrefabInfo() {
              _initializerDefineProperty(this, "root", _descriptor7, this);

              _initializerDefineProperty(this, "asset", _descriptor8, this);

              _initializerDefineProperty(this, "fileId", _descriptor9, this);

              _initializerDefineProperty(this, "instance", _descriptor10, this);

              _initializerDefineProperty(this, "targetOverrides", _descriptor11, this);
            }, _temp3), (_descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "root", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: null
            }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "asset", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: null
            }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "fileId", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "instance", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: null
            }), _descriptor11 = _applyDecoratedDescriptor(_class8.prototype, "targetOverrides", [serializable, _dec8], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: null
            })), _class8)) || _class7);
            legacyCC._PrefabInfo = PrefabInfo;
            var CompPrefabInfo = (_dec9 = ccclass('cc.CompPrefabInfo'), _dec9(_class10 = (_class11 = (_temp4 = function CompPrefabInfo() {
              _initializerDefineProperty(this, "fileId", _descriptor12, this);
            }, _temp4), (_descriptor12 = _applyDecoratedDescriptor(_class11.prototype, "fileId", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            })), _class11)) || _class10);
            var PropertyOverrideInfo = (_dec10 = ccclass('CCPropertyOverrideInfo'), _dec11 = type(TargetInfo), _dec10(_class13 = (_class14 = (_temp5 = function () {
              function PropertyOverrideInfo() {
                _initializerDefineProperty(this, "targetInfo", _descriptor13, this);

                _initializerDefineProperty(this, "propertyPath", _descriptor14, this);

                _initializerDefineProperty(this, "value", _descriptor15, this);
              }

              var _proto = PropertyOverrideInfo.prototype;

              _proto.isTarget = function isTarget(localID, propPath) {
              };

              return PropertyOverrideInfo;
            }(), _temp5), (_descriptor13 = _applyDecoratedDescriptor(_class14.prototype, "targetInfo", [serializable, _dec11], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "propertyPath", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "value", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: null
            })), _class14)) || _class13);
            var MountedChildrenInfo = (_dec12 = ccclass('cc.MountedChildrenInfo'), _dec13 = type(TargetInfo), _dec14 = type([legacyCC.Node]), _dec12(_class16 = (_class17 = (_temp6 = function () {
              function MountedChildrenInfo() {
                _initializerDefineProperty(this, "targetInfo", _descriptor16, this);

                _initializerDefineProperty(this, "nodes", _descriptor17, this);
              }

              var _proto2 = MountedChildrenInfo.prototype;

              _proto2.isTarget = function isTarget(localID) {
              };

              return MountedChildrenInfo;
            }(), _temp6), (_descriptor16 = _applyDecoratedDescriptor(_class17.prototype, "targetInfo", [serializable, _dec13], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor17 = _applyDecoratedDescriptor(_class17.prototype, "nodes", [serializable, _dec14], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            })), _class17)) || _class16);
            var PrefabInstance = (_dec15 = ccclass('cc.PrefabInstance'), _dec16 = type(legacyCC.Node), _dec17 = type([MountedChildrenInfo]), _dec18 = type([PropertyOverrideInfo]), _dec19 = type([TargetInfo]), _dec15(_class19 = (_class20 = (_temp7 = function () {
              function PrefabInstance() {
                _initializerDefineProperty(this, "fileId", _descriptor18, this);

                _initializerDefineProperty(this, "prefabRootNode", _descriptor19, this);

                _initializerDefineProperty(this, "mountedChildren", _descriptor20, this);

                _initializerDefineProperty(this, "propertyOverrides", _descriptor21, this);

                _initializerDefineProperty(this, "removedComponents", _descriptor22, this);

                this.targetMap = {};
              }

              var _proto3 = PrefabInstance.prototype;

              _proto3.findPropertyOverride = function findPropertyOverride(localID, propPath) {
              };

              _proto3.removePropertyOverride = function removePropertyOverride(localID, propPath) {
              };

              return PrefabInstance;
            }(), _temp7), (_descriptor18 = _applyDecoratedDescriptor(_class20.prototype, "fileId", [serializable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return '';
              }
            }), _descriptor19 = _applyDecoratedDescriptor(_class20.prototype, "prefabRootNode", [serializable, _dec16], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: null
            }), _descriptor20 = _applyDecoratedDescriptor(_class20.prototype, "mountedChildren", [serializable, _dec17], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor21 = _applyDecoratedDescriptor(_class20.prototype, "propertyOverrides", [serializable, _dec18], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _descriptor22 = _applyDecoratedDescriptor(_class20.prototype, "removedComponents", [serializable, _dec19], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            })), _class20)) || _class19);
            function createNodeWithPrefab(node) {
              var prefabInfo = node._prefab;

              if (!prefabInfo) {
                return;
              }

              var prefabInstance = prefabInfo.instance;

              if (!prefabInstance) {
                return;
              }

              if (!prefabInfo.asset) {
                {
                  errorID(3701, node.name);
                }

                prefabInfo.instance = null;
                return;
              }

              var _objFlags = node._objFlags;
              var _parent = node._parent;
              var _id = node._id;
              var _prefab = node._prefab;
              legacyCC.game._isCloning = true;

              {
                prefabInfo.asset._doInstantiate(node);
              }

              legacyCC.game._isCloning = false;
              node._objFlags = _objFlags;
              node._parent = _parent;
              node._id = _id;

              if (node._prefab) {
                node._prefab.instance = _prefab === null || _prefab === void 0 ? void 0 : _prefab.instance;
              }
            }
            function generateTargetMap(node, targetMap, isRoot) {
              var _node$_prefab;

              var curTargetMap = targetMap;
              var prefabInstance = (_node$_prefab = node._prefab) === null || _node$_prefab === void 0 ? void 0 : _node$_prefab.instance;

              if (!isRoot && prefabInstance) {
                targetMap[prefabInstance.fileId] = {};
                curTargetMap = targetMap[prefabInstance.fileId];
              }

              var prefabInfo = node._prefab;

              if (prefabInfo) {
                curTargetMap[prefabInfo.fileId] = node;
              }

              var components = node.components;

              for (var i = 0; i < components.length; i++) {
                var comp = components[i];

                if (comp.__prefab) {
                  curTargetMap[comp.__prefab.fileId] = comp;
                }
              }

              for (var _i = 0; _i < node.children.length; _i++) {
                var childNode = node.children[_i];
                generateTargetMap(childNode, curTargetMap, false);
              }
            }
            function getTarget(localID, targetMap) {
              if (!localID) {
                return null;
              }

              var target = null;
              var targetIter = targetMap;

              for (var i = 0; i < localID.length; i++) {
                if (!targetIter) {
                  return null;
                }

                targetIter = targetIter[localID[i]];
              }

              target = targetIter;
              return target;
            }
            function applyMountedChildren(node, mountedChildren, targetMap) {
              if (!mountedChildren) {
                return;
              }

              for (var i = 0; i < mountedChildren.length; i++) {
                var childInfo = mountedChildren[i];

                if (childInfo && childInfo.targetInfo) {
                  var target = getTarget(childInfo.targetInfo.localID, targetMap);

                  if (!target) {
                    continue;
                  }

                  if (childInfo.nodes) {
                    for (var _i2 = 0; _i2 < childInfo.nodes.length; _i2++) {
                      var childNode = childInfo.nodes[_i2];

                      target._children.push(childNode);

                      childNode._parent = target;

                      childNode._onBatchCreated(false);
                    }
                  }
                }
              }
            }
            function applyPropertyOverrides(node, propertyOverrides, targetMap) {
              if (propertyOverrides.length <= 0) {
                return;
              }

              var target = null;

              for (var i = 0; i < propertyOverrides.length; i++) {
                var propOverride = propertyOverrides[i];

                if (propOverride && propOverride.targetInfo) {
                  var targetInfo = propOverride.targetInfo;
                  target = getTarget(targetInfo.localID, targetMap);

                  if (!target) {
                    continue;
                  }

                  var targetPropOwner = target;
                  var propertyPath = propOverride.propertyPath.slice();

                  if (propertyPath.length > 0) {
                    var targetPropName = propertyPath.pop();

                    if (!targetPropName) {
                      continue;
                    }

                    for (var _i3 = 0; _i3 < propertyPath.length; _i3++) {
                      var propName = propertyPath[_i3];
                      targetPropOwner = targetPropOwner[propName];

                      if (!targetPropOwner) {
                        break;
                      }
                    }

                    if (!targetPropOwner) {
                      continue;
                    }

                    if (Array.isArray(targetPropOwner)) {
                      if (targetPropName === 'length') {
                        targetPropOwner[targetPropName] = propOverride.value;
                      } else {
                        var index = Number.parseInt(targetPropName);

                        if (Number.isInteger(index) && index < targetPropOwner.length) {
                          targetPropOwner[targetPropName] = propOverride.value;
                        }
                      }
                    } else {
                      targetPropOwner[targetPropName] = propOverride.value;
                    }
                  }
                }
              }
            }
            function applyTargetOverrides(node) {
              var _node$_prefab2;

              var targetOverrides = (_node$_prefab2 = node._prefab) === null || _node$_prefab2 === void 0 ? void 0 : _node$_prefab2.targetOverrides;

              if (targetOverrides) {
                for (var i = 0; i < targetOverrides.length; i++) {
                  var _targetOverride$targe, _targetOverride$targe2;

                  var targetOverride = targetOverrides[i];
                  var source = targetOverride.source;
                  var sourceInfo = targetOverride.sourceInfo;

                  if (sourceInfo) {
                    var _targetOverride$sourc, _targetOverride$sourc2;

                    var sourceInstance = (_targetOverride$sourc = targetOverride.source) === null || _targetOverride$sourc === void 0 ? void 0 : (_targetOverride$sourc2 = _targetOverride$sourc._prefab) === null || _targetOverride$sourc2 === void 0 ? void 0 : _targetOverride$sourc2.instance;

                    if (sourceInstance && sourceInstance.targetMap) {
                      source = getTarget(sourceInfo.localID, sourceInstance.targetMap);
                    }

                    if (!source) {
                      continue;
                    }
                  }

                  var target = null;
                  var targetInfo = targetOverride.targetInfo;

                  if (!targetInfo) {
                    continue;
                  }

                  var targetInstance = (_targetOverride$targe = targetOverride.target) === null || _targetOverride$targe === void 0 ? void 0 : (_targetOverride$targe2 = _targetOverride$targe._prefab) === null || _targetOverride$targe2 === void 0 ? void 0 : _targetOverride$targe2.instance;

                  if (!targetInstance || !targetInstance.targetMap) {
                    continue;
                  }

                  target = getTarget(targetInfo.localID, targetInstance.targetMap);

                  if (!target) {
                    continue;
                  }

                  var propertyPath = targetOverride.propertyPath.slice();
                  var targetPropOwner = source;

                  if (propertyPath.length > 0) {
                    var targetPropName = propertyPath.pop();

                    if (!targetPropName) {
                      return;
                    }

                    for (var _i4 = 0; _i4 < propertyPath.length; _i4++) {
                      var propName = propertyPath[_i4];
                      targetPropOwner = targetPropOwner[propName];
                    }

                    targetPropOwner[targetPropName] = target;
                  }
                }
              }
            }

            var utils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                TargetInfo: TargetInfo,
                TargetOverrideInfo: TargetOverrideInfo,
                PrefabInfo: PrefabInfo,
                CompPrefabInfo: CompPrefabInfo,
                PropertyOverrideInfo: PropertyOverrideInfo,
                MountedChildrenInfo: MountedChildrenInfo,
                PrefabInstance: PrefabInstance,
                createNodeWithPrefab: createNodeWithPrefab,
                generateTargetMap: generateTargetMap,
                getTarget: getTarget,
                applyMountedChildren: applyMountedChildren,
                applyPropertyOverrides: applyPropertyOverrides,
                applyTargetOverrides: applyTargetOverrides
            });

            var _dec$6, _class$6, _class2$6, _descriptor$5, _descriptor2$3, _descriptor3$3, _class3$4, _temp$5;
            var OptimizationPolicy = Enum({
              AUTO: 0,
              SINGLE_INSTANCE: 1,
              MULTI_INSTANCE: 2
            });
            var Prefab = exports('dC', (_dec$6 = ccclass('cc.Prefab'), _dec$6(_class$6 = (_class2$6 = (_temp$5 = _class3$4 = function (_Asset) {
              _inheritsLoose(Prefab, _Asset);

              function Prefab() {
                var _this;

                _this = _Asset.call(this) || this;

                _initializerDefineProperty(_this, "data", _descriptor$5, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "optimizationPolicy", _descriptor2$3, _assertThisInitialized(_this));

                _initializerDefineProperty(_this, "asyncLoadAssets", _descriptor3$3, _assertThisInitialized(_this));

                _this._createFunction = void 0;
                _this._instantiatedTimes = void 0;
                _this._createFunction = null;
                _this._instantiatedTimes = 0;
                return _this;
              }

              var _proto = Prefab.prototype;

              _proto.createNode = function createNode(cb) {
                var node = legacyCC.instantiate(this);
                node.name = this.name;
                cb(null, node);
              };

              _proto.compileCreateFunction = function compileCreateFunction() {
                this._createFunction = compile(this.data);
              };

              _proto._doInstantiate = function _doInstantiate(rootToRedirect) {
                if (!this.data._prefab) {
                  warnID(3700);
                }

                if (!this._createFunction) {
                  this.compileCreateFunction();
                }

                return this._createFunction(rootToRedirect);
              };

              _proto._instantiate = function _instantiate() {
                var node;
                var useJit = false;

                {
                  if (this.optimizationPolicy === OptimizationPolicy.SINGLE_INSTANCE) {
                    useJit = false;
                  } else if (this.optimizationPolicy === OptimizationPolicy.MULTI_INSTANCE) {
                    useJit = true;
                  } else {
                    useJit = this._instantiatedTimes + 1 >= Prefab.OptimizationPolicyThreshold;
                  }
                }

                if (useJit) {
                  node = this._doInstantiate();

                  this.data._instantiate(node);
                } else {
                  node = this.data._instantiate();
                }

                ++this._instantiatedTimes;
                return node;
              };

              return Prefab;
            }(Asset), _class3$4.OptimizationPolicy = OptimizationPolicy, _class3$4.OptimizationPolicyThreshold = 3, _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class2$6.prototype, "data", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$6.prototype, "optimizationPolicy", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return OptimizationPolicy.AUTO;
              }
            }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$6.prototype, "asyncLoadAssets", [serializable, editable], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return false;
              }
            })), _class2$6)) || _class$6));
            js.value(Prefab, '_utils', utils);
            legacyCC.Prefab = Prefab;

            {
              obsolete(legacyCC, 'cc._Prefab', 'Prefab');
            }

            var _dec$7, _dec2$4, _dec3$3, _class$7, _class2$7, _descriptor$6, _temp$6;
            var PrefabLink = exports('dc', (_dec$7 = ccclass('cc.PrefabLink'), _dec2$4 = type(Prefab), _dec3$3 = visible(true), _dec$7(_class$7 = (_class2$7 = (_temp$6 = function (_Component) {
              _inheritsLoose(PrefabLink, _Component);

              function PrefabLink() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Component.call.apply(_Component, [this].concat(args)) || this;

                _initializerDefineProperty(_this, "prefab", _descriptor$6, _assertThisInitialized(_this));

                return _this;
              }

              return PrefabLink;
            }(Component), _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class2$7.prototype, "prefab", [_dec2$4, serializable, _dec3$3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2$7)) || _class$7));

            var _vec3 = new Vec3();

            function WorldNode3DToLocalNodeUI(mainCamera, wpos, uiNode, out) {
              if (!out) {
                out = new Vec3();
              }

              mainCamera.convertToUINode(wpos, uiNode, out);
              var pos = uiNode.position;
              out.add(pos);
              return out;
            }
            function WorldNode3DToWorldNodeUI(mainCamera, wpos, out) {
              if (!out) {
                out = new Vec3();
              }

              mainCamera.worldToScreen(wpos, out);
              out.x /= legacyCC.view.getScaleX();
              out.y /= legacyCC.view.getScaleY();
              return out;
            }
            var convertUtils = exports('dk', {
              WorldNode3DToLocalNodeUI: WorldNode3DToLocalNodeUI,
              WorldNode3DToWorldNodeUI: WorldNode3DToWorldNodeUI
            });
            legacyCC.pipelineUtils = convertUtils;
            replaceProperty(legacyCC.pipelineUtils, 'cc.pipelineUtils', [{
              name: 'WorldNode3DToLocalNodeUI',
              newName: 'convertToUINode',
              targetName: 'cc.Camera.prototype',
              customFunction: function customFunction() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                var camera = args[0];
                var out = args[3] || _vec3;
                camera.convertToUINode(args[1], args[2], out);
                out.add(args[2].position);
                return args[3] || out.clone();
              }
            }]);

        }
    };
});
