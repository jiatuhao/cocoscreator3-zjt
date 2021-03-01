"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  '1100': 'Expected \'data\' dict, but not found. Config file: %s',
  '1101': 'Please load the resource first : %s',
  '1200': 'cocos2d: Director: Error in gettimeofday',
  '1204': 'Running scene should not be null',
  '1205': 'The scene should not be null',
  '1206': 'loadScene: The scene index to load (%s) is out of range.',
  '1207': 'loadScene: Unknown name type to load: \'%s\'',
  '1208': 'loadScene: Failed to load scene \'%s\' because \'%s\' is already being loaded.',
  '1209': 'loadScene: Can not load the scene \'%s\' because it was not in the build settings before playing.',
  '1210': 'Failed to preload \'%s\', %s',
  '1211': 'loadScene: The scene index to load (%s) is out of range.',
  '1212': 'loadScene: Unknown name type to load: \'%s\'',
  '1213': 'loadScene: Failed to load scene \'%s\' because \'%s\' is already loading',
  '1214': 'loadScene: Can not load the scene \'%s\' because it was not in the build settings before playing.',
  '1215': 'Failed to preload \'%s\', %s',
  '1216': 'Director.runSceneImmediate: scene is not valid',
  '1217': 'Director._initOnEngineInitialized: renderer root initialization failed',
  '1300': '%s is not in the model pool and cannot be destroyed by destroyModel.',
  '1400': '\'%s\' is deprecated, please use \'%s\' instead.',
  '1404': 'cc.spriteFrameCache is removed, please use cc.loader to load and cache sprite frames of atlas format.',
  '1406': '\'%s.%s\' is removed',
  '1408': '\'%s\' is removed',
  '1409': 'element type is wrong!',
  '1502': 'cc.scheduler.scheduleCallbackForTarget(): target should be non-null.',
  '1503': 'cc.Scheduler.pauseTarget():target should be non-null',
  '1504': 'cc.Scheduler.resumeTarget():target should be non-null',
  '1505': 'cc.Scheduler.isTargetPaused():target should be non-null',
  '1506': 'warning: you CANNOT change update priority in scheduled function',
  '1507': 'scheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f',
  '1508': 'Argument callback must not be empty',
  '1509': 'Argument target must be non-nullptr',
  '1510': 'cc.Scheduler: Illegal target which doesn\'t have id, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target',
  '1511': 'cc.Scheduler: pause state of the scheduled task doesn\'t match the element pause state in Scheduler, the given paused state will be ignored.',
  '1513': 'cc.Scheduler: scheduler stopped using `__instanceId` as id since v2.0, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target',
  '1607': 'removeFromParentAndCleanup is deprecated. Use removeFromParent instead',
  '1619': 'callback function must be non-null',
  '1620': 'interval must be positive',
  '1623': 'Set \'%s\' to normal node (not persist root node).',
  '1624': 'Replacing with the same sgNode',
  '1625': 'The replacement sgNode should not contain any child.',
  '1626': 'Should not set alpha via \'color\', set \'opacity\' please.',
  '1627': 'Not support for asynchronous creating node in SG',
  '1632': 'Node name can not include \'/\'.',
  '1633': 'Internal error, should not remove unknown node from parent.',
  '1635': 'reorderChild: this child is not in children list.',
  '1636': 'Node\'s zIndex value can\'t be greater than cc.macro.MAX_ZINDEX, setting to the maximum value',
  '1637': 'Node\'s zIndex value can\'t be smaller than cc.macro.MIN_ZINDEX, setting to the minimum value',
  '1638': 'Private node\'s zIndex can\'t be set, it will keep cc.macro.MIN_ZINDEX as its value',
  '1800': 'cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!',
  '1801': 'cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!',
  '1802': 'cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!',
  '1803': 'cc._EventListenerAcceleration.checkAvailable():_onAccelerationEvent must be non-nil',
  '1900': 'Invalid parameter.',
  '2200': 'Design resolution not valid',
  '2201': 'should set resolutionPolicy',
  '2300': 'The touches is more than MAX_TOUCHES, nUnusedIndex = %s',
  '2402': 'Forward pipeline startup failed!',
  '3103': 'cc.Texture.addImage(): path should be non-null',
  '3119': 'Lazy init texture with image element failed due to image loading failure: %s',
  '3120': 'Loading texture with unsupported type: \'%s\'. Add \'%s\' into \'cc.macro.SUPPORT_TEXTURE_FORMATS\' please.',
  '3121': 'Can\'t find a texture format supported by the current platform! Please add a fallback format in the editor.',
  '3300': 'Rect width exceeds maximum margin: %s',
  '3301': 'Rect height exceeds maximum margin: %s',
  '3500': '0 priority is forbidden for fixed priority since it\'s used for scene graph based priority.',
  '3501': 'Invalid listener type!',
  '3502': 'Can\'t set fixed priority with scene graph based listener.',
  '3503': 'Invalid parameters.',
  '3504': 'listener must be a cc.EventListener object when adding a fixed priority listener',
  '3505': 'The listener has been registered, please don\'t register it again.',
  '3506': 'Unsupported listener target.',
  '3507': 'Invalid scene graph priority!',
  '3508': 'If program goes here, there should be event in dispatch.',
  '3509': '_inDispatch should be 1 here.',
  '3510': '%s\'s scene graph node not contains in the parent\'s children',
  '3511': 'event is undefined',
  '3512': 'Event manager only support scene graph priority for ui nodes which contain UIComponent',
  '3520': 'Device Motion Event request permission: %s',
  '3521': 'Device Motion Event request permission failed: %s',
  '3601': 'The editor property \'playOnFocus\' should be used with \'executeInEditMode\' in class \'%s\'',
  '3602': 'Unknown editor property \'%s\' in class \'%s\'.',
  '3603': 'Use \'cc.Float\' or \'cc.Integer\' instead of \'cc.Number\' please.',
  '3604': 'Can only indicate one type attribute for %s.',
  '3605': 'The default value of %s is not instance of %s.',
  '3606': 'No needs to indicate the \'%s\' attribute for %s, which its default value is type of %s.',
  '3607': 'The default value of %s must be an empty string.',
  '3608': 'The type of %s must be CCString, not String.',
  '3609': 'The type of %s must be CCBoolean, not Boolean.',
  '3610': 'The type of %s must be CCFloat or CCInteger, not Number.',
  '3611': 'Can not indicate the \'%s\' attribute for %s, which its default value is type of %s.',
  '3612': '%s Just set the default value to \'new %s()\' and it will be handled properly.',
  '3613': '\'No need to use \'serializable: false\' or \'editorOnly: true\' for the getter of \'%s.%s\', every getter is actually non-serialized.',
  '3614': 'Should not define constructor for cc.Component %s.',
  '3615': 'Each script can have at most one Component.',
  '3616': 'Should not specify class name %s for Component which defines in project.',
  '3618': 'ctor of \'%s\' can not be another CCClass',
  '3623': 'Can not use \'editor\' attribute, \'%s\' not inherits from Components.',
  '3625': '[isChildClassOf] superclass should be function type, not',
  '3626': 'Can\'t remove \'%s\' because \'%s\' depends on it.',
  '3627': 'Should not add renderer component (%s) to a Canvas node.',
  '3628': 'Should not add %s to a node which size is already used by its other component.',
  '3633': 'Properties function of \'%s\' should return an object!',
  '3634': 'Disallow to use \'.\' in property name',
  '3637': 'Can not declare %s.%s, it is already defined in the prototype of %s',
  '3639': 'Can not apply the specified attribute to the getter of \'%s.%s\', attribute index: %s',
  '3640': '\'%s\': the setter of \'%s\' is already defined!',
  '3641': 'Can not construct %s because it contains object property.',
  '3644': 'Please define \'type\' parameter of %s.%s as the actual constructor.',
  '3645': 'Please define \'type\' parameter of %s.%s as the constructor of %s.',
  '3646': 'Unknown \'type\' parameter of %s.%s：%s',
  '3647': 'The length of range array must be equal or greater than 2',
  '3648': 'Can not declare %s.%s method, it is already defined in the properties of %s.',
  '3652': 'Failed to `new %s()` under the hood, %s\nIt is used for getting default values declared in TypeScript in the first place.\nPlease ensure the constructor can be called during the script\'s initialization.',
  '3653': 'Please do not specifiy "default" attribute in decorator of "%s" property in "%s" class.\nDefault value must be initialized at their declaration:\n\n \n// Before:\n@property({\n  type: cc.SpriteFrame\n  default: null  // <--\n})\nmyProp;\n// After:\n@property({\n  type: cc.SpriteFrame\n})\nmyProp = null;   // <--',
  '3654': 'Please specifiy a default value for "%s.%s" property at its declaration:\n\n \n// Before:\n@property(...)\nmyProp;\n// After:\n@property(...)\nmyProp = 0;',
  '3655': 'Can not specifiy "get" or "set"  attribute in decorator for "%s" property in "%s" class.\nPlease use:\n\n \n@property(...)\nget %s () {\n    ...\n}\n@property\nset %s (value) {\n    ...\n}',
  '3659': 'Violation error: extending enumerations shall have non-overlaped member names or member values',
  '3660': 'You are explicitly specifying `undefined` type to cc property "%s" of cc class "%s".\nIs this intended? If not, this may indicate a circular reference.\nFor example:\n\n \n// foo.ts\nimport { _decorator } from \'cc\';\nimport { Bar } from \'./bar\';  // Given that \'./bar\' also reference \'foo.ts\'.\n                              // When importing \'./bar\', execution of \'./bar\' is hung on to wait execution of \'foo.ts\',\n                              // the `Bar` imported here is `undefined` until \'./bar\' finish its execution.\n                              // It leads to that\n@_decorator.ccclass           //  ↓\nexport class Foo {            //  ↓\n    @_decorator.type(Bar)     //  → is equivalent to `@_decorator.type(undefined)`\n    public bar: Bar;          // To eliminate this error, either:\n                              // - Refactor your module structure(recommended), or\n                              // - specify the type as cc class name: `@_decorator.type(\'Bar\'/* or any name you specified for `Bar` */)`\n}',
  '3700': 'internal error: _prefab is undefined',
  '3701': 'Failed to load prefab asset for node \'%s\'',
  '3800': 'The target can not be made persist because it\'s not a cc.Node or it doesn\'t have _id property.',
  '3801': 'The node can not be made persist because it\'s not under root node.',
  '3802': 'The node can not be made persist because it\'s not in current scene.',
  '3803': 'The target can not be made persist because it\'s not a cc.Node or it doesn\'t have _id property.',
  '3804': 'getComponent: Type must be non-nil',
  '3805': 'Can\'t add component \'%s\' because %s already contains the same component.',
  '3806': 'Can\'t add component \'%s\' to %s because it conflicts with the existing \'%s\' derived component.',
  '3807': 'addComponent: Failed to get class \'%s\'',
  '3808': 'addComponent: Should not add component (\'%s\') when the scripts are still loading.',
  '3809': 'addComponent: The component to add must be a constructor',
  '3810': 'addComponent: The component to add must be child class of cc.Component',
  '3811': '_addComponentAt: The component to add must be a constructor',
  '3812': '_addComponentAt: Index out of range',
  '3813': 'removeComponent: Component must be non-nil',
  '3814': 'Argument must be non-nil',
  '3815': 'Component not owned by this entity',
  '3816': 'Node \'%s\' is already activating',
  '3817': 'Sorry, the component of \'%s\' which with an index of %s is corrupted! It has been removed.',
  '3818': 'Failed to read or parse project.json',
  '3819': 'Warning: target element is not a DIV or CANVAS',
  '3820': 'The renderer doesn\'t support the renderMode %s',
  '3821': 'Cannot change hierarchy while activating or deactivating the parent.',
  '3822': 'addComponent: Cannot add any component to the scene.',
  '3900': 'Invalid clip to add',
  '3901': 'Invalid clip to remove',
  '3902': 'clip is defaultClip, set force to true to force remove clip and animation state',
  '3903': 'animation state is playing, set force to true to force stop and remove clip and animation state',
  '3904': 'motion path of target [%s] in prop [%s] frame [%s] is not valid',
  '3905': 'sprite frames must be an Array.',
  '3906': 'Can\'t find easing type [%s]',
  '3907': 'animator not added or already removed',
  '3912': 'already-playing',
  '4003': 'Label font size can\'t be shirnked less than 0!',
  '4004': 'force notify all fonts loaded!',
  '4011': 'Property spriteFrame of Font \'%s\' is invalid. Using system font instead.',
  '4012': 'The texture of Font \'%s\' must be already loaded on JSB. Using system font instead.',
  '4013': 'Sorry, lineHeight of system font not supported on JSB.',
  '4200': 'MaskType: IMAGE_STENCIL only support WebGL mode.',
  '4201': 'The alphaThreshold invalid in Canvas Mode.',
  '4202': 'The inverted invalid in Canvas Mode.',
  '4300': 'Can not found the %s page.',
  '4301': 'Can not add a page without UITransform.',
  '4302': 'Can not set the scroll view content when it hasn\'t UITransform or its parent hasn\'t UITransform.',
  '4400': 'Invalid RichText img tag! The sprite frame name can\'t be found in the ImageAtlas!',
  '4500': 'Graphics: There is no model in %s.',
  '4600': 'Script attached to \'%s\' is missing or invalid.',
  '4700': 'The dom control is not created!',
  '4800': 'unknown asset type',
  '4901': 'loadRes: should not specify the extname in %s %s',
  '4902': 'No need to release non-cached asset.',
  '4914': 'Resources url \'%s\' does not exist.',
  '4915': 'Pack indices and data do not match in size',
  '4916': 'Failed to download package for %s',
  '4921': 'Invalid pipe or invalid index provided!',
  '4922': 'The pipe to be inserted is already in the pipeline!',
  '4923': 'Uuid Loader: Parse asset [ %s ] failed : %s',
  '4924': 'JSON Loader: Input item doesn\'t contain string content',
  '4925': 'Uuid Loader: Deserialize asset [ %s ] failed : %s',
  '4926': 'Audio Downloader: no web audio context.',
  '4927': 'Audio Downloader: audio not supported on this browser!',
  '4928': 'Load %s failed!',
  '4929': 'Load Webp ( %s ) failed',
  '4930': 'Load image ( %s ) failed',
  '4932': 'Since v1.10, for any atlas ("%s") in the "resources" directory, it is not possible to find the contained SpriteFrames via `loadRes`, `getRes` or `releaseRes`. Load the SpriteAtlas first and then use `spriteAtlas.getSpriteFrame(name)` instead please.',
  '4933': 'Download Font [ %s ] failed, using Arial or system default font instead',
  '4934': 'Please assure that the full path of sub asset is correct!',
  '4935': 'Failed to skip prefab asset while deserializing PrefabInfo',
  '5000': 'You are trying to destroy a object twice or more.',
  '5001': 'object not yet destroyed',
  '5100': 'Not a plist file!',
  '5200': 'Warning: localStorage isn\'t enabled. Please confirm browser cookie or privacy option',
  '5201': 'browser don\'t support web audio',
  '5202': 'This feature supports WebGL render mode only.',
  '5300': 'Type of target to deserialize not matched with data: target is %s, data is %s',
  '5301': 'Can not find script \'%s\'',
  '5302': 'Can not find class \'%s\'',
  '5303': 'Failed to deserialize %s, missing _deserialize function.',
  '5304': 'Unable to deserialize version %s data.',
  '5402': 'cc.js.addon called on non-object:',
  '5403': 'cc.js.mixin: arguments must be type object:',
  '5404': 'The base class to extend from must be non-nil',
  '5405': 'The class to extend must be non-nil',
  '5406': 'Class should be extended before assigning any prototype members.',
  '5500': '\'notify\' can not be used in \'get/set\' !',
  '5501': '\'notify\' must be used with \'default\' !',
  '5507': 'The \'default\' attribute of \'%s.%s\' must be an array',
  '5508': 'Invalid type of %s.%s',
  '5510': 'The \'type\' attribute of \'%s.%s\' can not be \'Number\', use cc.Float or cc.Integer instead please.',
  '5511': 'The \'type\' attribute of \'%s.%s\' is undefined when loading script',
  '5512': 'Can not serialize \'%s.%s\' because the specified type is anonymous, please provide a class name or set the \'serializable\' attribute of \'%s.%s\' to \'false\'.',
  '5513': 'The \'default\' value of \'%s.%s\' should not be used with a \'get\' function.',
  '5514': 'The \'default\' value of \'%s.%s\' should not be used with a \'set\' function.',
  '5515': 'The \'default\' value of \'%s.%s\' can not be an constructor. Set default to null please.',
  '5517': '\'%s.%s\' hides inherited property \'%s.%s\'. To make the current property override that implementation, add the `override: true` attribute please.',
  '5601': 'Can not get current scene.',
  '5602': 'Scene is destroyed',
  '5603': 'reference node is destroyed',
  '5700': 'no %s or %s on %s',
  '5800': '%s.lerp not yet implemented.',
  '5801': '%s.clone not yet implemented.',
  '5802': '%s.equals not yet implemented.',
  '5900': 'MotionStreak only support WebGL mode.',
  '5901': 'cc.MotionStreak.getOpacity has not been supported.',
  '5902': 'cc.MotionStreak.setOpacity has not been supported.',
  '6000': 'Custom should not be false if file is not specified.',
  '6001': 'The new %s must not be NaN',
  '6017': 'Incomplete or corrupt PNG file',
  '6018': 'Invalid filter algorithm: %s',
  '6019': 'Invalid byte order value.',
  '6020': 'You forgot your towel!',
  '6021': 'Unknown Field Tag: %s',
  '6022': 'Too many bits requested',
  '6023': 'No bits requested',
  '6024': 'Cannot recover from missing StripByteCounts',
  '6025': 'Cannot handle sub-byte bits per sample',
  '6026': 'Cannot handle sub-byte bits per pixel',
  '6027': 'Palette image missing color map',
  '6028': 'Unknown Photometric Interpretation: %s',
  '6029': 'Unkown error',
  '6030': 'cc.ParticleSystem: error decoding or ungzipping textureImageData',
  '6031': 'cc.ParticleSystem: unknown image format with Data',
  '6032': 'cc.ParticleSystem.initWithDictionary() : error loading the texture',
  '6400': 'asset.url is not usable in core process',
  '6402': 'AssetLibrary has already been initialized!',
  '6500': 'Widget target must be one of the parent nodes of it',
  '6600': 'collider not added or already removed',
  '6601': 'Can\'t find testFunc for (%s, $s).',
  '6700': 'Can\'t init canvas \'%s\' because it conflicts with the existing \'%s\', the scene should only have one active canvas at the same time.',
  '6705': 'Argument must be non-nil',
  '6706': 'Priority can\'t be set in RenderRoot2D node',
  '6800': 'Callback of event must be non-nil',
  '6801': 'The message must be provided',
  '6900': 'The thing you want to instantiate must be an object',
  '6901': 'The thing you want to instantiate is nil',
  '6902': 'The thing you want to instantiate is destroyed',
  '6903': 'The instantiate method for given asset do not implemented',
  '6904': 'Can not instantiate array',
  '6905': 'Can not instantiate DOM element',
  '7100': '%s already defined in Enum.',
  '7101': 'Sorry, \'cc.Enum\' not available on this platform, please report this error here: <https://github.com/cocos-creator/engine/issues/new>',
  '7200': 'Method \'initWithTMXFile\' is no effect now, please set property \'tmxAsset\' instead.',
  '7201': 'Method \'initWithXML\' is no effect now, please set property \'tmxAsset\' instead.',
  '7202': 'Add component TiledLayer into node failed.',
  '7203': 'Property \'mapLoaded\' is unused now. Please write the logic to the callback \'start\'.',
  '7210': 'TMX Hexa zOrder not supported',
  '7211': 'TMX invalid value',
  '7215': 'cocos2d: Warning: TMX Layer %s has no tiles',
  '7216': 'cocos2d: TMXFormat: Unsupported TMX version: %s',
  '7217': 'cocos2d: TMXFomat: Unsupported orientation: %s',
  '7218': 'cc.TMXMapInfo.parseXMLFile(): unsupported compression method',
  '7219': 'cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported',
  '7221': 'cc.TMXMapInfo.parseXMLFile(): Texture \'%s\' not found.',
  '7222': 'Parse %s failed.',
  '7236': 'cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released',
  '7237': 'cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released',
  '7238': 'cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released',
  '7239': 'cc.TMXLayer.setTileGID(): invalid gid: %s',
  '7240': 'cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released',
  '7241': 'cc.TiledMap.initWithXML(): Map not found. Please check the filename.',
  '7401': 'Failed to set _defaultArmatureIndex for \'%s\' because the index is out of range.',
  '7402': 'Failed to set _animationIndex for \'%s\' because the index is out of range.',
  '7501': 'Failed to set _defaultSkinIndex for \'%s\' because the index is out of range.',
  '7502': 'Failed to set _animationIndex for \'%s\' because its skeletonData is invalid.',
  '7503': 'Failed to set _animationIndex for \'%s\' because the index is out of range.',
  '7504': 'Can not render dynamic created SkeletonData',
  '7506': 'Failed to load spine atlas \'$s\'',
  '7507': 'Please re-import \'%s\' because its textures is not initialized! (This workflow will be improved in the future.)',
  '7508': 'The atlas asset of \'%s\' is not exists!',
  '7509': 'Spine: Animation not found: %s',
  '7510': 'Spine: Animation not found: %s',
  '7600': 'The context of RenderTexture is invalid.',
  '7601': 'cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;',
  '7602': 'Could not attach texture to the framebuffer',
  '7603': 'clearDepth isn\'t supported on Cocos2d-Html5',
  '7604': 'saveToFile isn\'t supported on Cocos2d-Html5',
  '7605': 'newCCImage isn\'t supported on Cocos2d-Html5',
  '7700': 'On the web is always keep the aspect ratio',
  '7701': 'Can\'t know status',
  '7702': 'Video player\'s duration is not ready to get now!',
  '7703': 'Video Downloader: video not supported on this browser!',
  '7800': 'Web does not support loading',
  '7801': 'Web does not support query history',
  '7802': 'Web does not support query history',
  '7803': 'The current browser does not support the GoBack',
  '7804': 'The current browser does not support the GoForward',
  '7805': 'Web does not support zoom',
  '7900': 'cc.math.Matrix3.assign(): current matrix equals matIn',
  '7901': 'cc.math.mat4Assign(): pOut equals pIn',
  '7902': 'cc.mat.Matrix4.assignFrom(): mat4 equals current matrix',
  '7903': 'cc.math.Matrix4 equal: pMat1 and pMat2 are same object.',
  '7904': 'cc.math.Matrix4.extractPlane: Invalid plane index',
  '7905': 'cc.math.mat4Assign(): pOut equals pIn',
  '7906': 'cc.mat.Matrix4.assignFrom(): mat4 equals current matrix',
  '7907': 'cc.math.Matrix4 equals: pMat1 and pMat2 are same object.',
  '7908': 'Invalid matrix mode specified',
  '7909': 'current quaternion is an invalid value',
  '8000': 'Can\'t handle this field type or size',
  '8001': 'No bytes requested',
  '8002': 'Too many bytes requested',
  '8003': 'Missing StripByteCounts!',
  '8100': 'cocos2d: ERROR: Failed to compile shader:\n %s',
  '8101': 'cocos2d: ERROR: Failed to compile vertex shader',
  '8102': 'cocos2d: ERROR: Failed to compile fragment shader',
  '8103': 'cc.GLProgram.link(): Cannot link invalid program',
  '8104': 'cocos2d: ERROR: Failed to link program: %s',
  '8105': 'cocos2d: cc.shaderCache._loadDefaultShader, error shader type',
  '8106': 'Please load the resource firset : %s',
  '8107': 'cc.GLProgram.getUniformLocationForName(): uniform name should be non-null',
  '8108': 'cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized',
  '8109': 'modelView matrix is undefined.',
  '8200': 'Please set node\'s active instead of rigidbody\'s enabled.',
  '8300': 'Should only one camera exists, please check your project.',
  '8301': 'Camera does not support Canvas Mode.',
  '8400': 'Wrong type arguments, \'filePath\' must be a String.',
  '9000': 'Stencil manager does not support level bigger than %d in this device.',
  '9001': 'Stencil manager is already empty, cannot pop any mask',
  '9100': 'texture size exceeds current device limits %d/%d',
  '9300': 'The current buffer beyond the limit in ui static component, please reduce the amount',
  '9301': 'The UI has not been initialized',
  '9302': 'Can\'t getGFXSampler with out device',
  '9600': '[Physics]: please check to see if physics modules are included',
  '9610': '[Physics]: cannon.js physics system doesn\'t support capsule collider',
  '9611': '[Physics]: builtin physics system doesn\'t support mesh collider',
  '9612': '[Physics]: builtin physics system doesn\'t support cylinder collider',
  '9620': '[Physics][Ammo]: changing the mesh is not supported after the initialization is completed',
  '10001': 'The sub-mesh contains %d vertices, which beyonds the capability (%d vertices most) of renderer of your platform.',
  '10002': 'Sub-mesh may include at most %d morph targets, but you specified %d.',
  '11000': 'WebGL context lost.',
  '12001': 'BlendFactors are disabled when using custom material, please modify the blend state in the material instead.',
  '12002': 'Can\'t add renderable component to this node because it already have one.',
  '0100': '%s not yet implemented.',
  '0200': 'You should specify a valid DOM canvas element.'
};
exports.default = _default;