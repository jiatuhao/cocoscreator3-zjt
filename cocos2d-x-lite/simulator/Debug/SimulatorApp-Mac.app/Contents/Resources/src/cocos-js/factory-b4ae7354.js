System.register(['./coordinates-converts-utils-66b3c6fc.js', './json-asset-a4190905.js'], function (exports, module) {
  'use strict';
  var Cache, normalize, js, decodeUuid, assets, _createForOfIteratorHelperLoose, Asset, callInNextTick, isValid, EDITOR, _extends, error, legacyCC, isScene, bundles, RequestType, errorID, _createClass, getError, mixin, files, sys, basename, BuiltinBundleName, dependUtil, SceneAsset, ImageAsset, JsonAsset, TextAsset, BufferAsset;
  return {
    setters: [function (module) {
      Cache = module.dZ;
      normalize = module.eN;
      js = module.eq;
      decodeUuid = module.dY;
      assets = module.ew;
      _createForOfIteratorHelperLoose = module.t;
      Asset = module.dB;
      callInNextTick = module.eO;
      isValid = module.dp;
      EDITOR = module.eh;
      _extends = module.d_;
      error = module.e;
      legacyCC = module.l;
      isScene = module.ey;
      bundles = module.eF;
      RequestType = module.eB;
      errorID = module.f;
      _createClass = module.dS;
      getError = module.dI;
      mixin = module.ex;
      files = module.e2;
      sys = module.dK;
      basename = module.k;
      BuiltinBundleName = module.eG;
    }, function (module) {
      dependUtil = module.A;
      SceneAsset = module.q;
      ImageAsset = module.I;
      JsonAsset = module.J;
      TextAsset = module.T;
      BufferAsset = module.n;
    }],
    execute: function () {

      exports({
        a: checkCircleReference,
        b: cache,
        c: clear,
        e: gatherAsset,
        f: forEach,
        g: getDepends,
        h: asyncify,
        k: parseLoadResArgs,
        l: setDefaultProgressCallback,
        m: downloadFile,
        p: parseParameters,
        s: setProperties
      });

      var isMatchByWord = function isMatchByWord(path, test) {
        if (path.length > test.length) {
          var nextAscii = path.charCodeAt(test.length);
          return nextAscii === 47;
        }

        return true;
      };

      var processOptions = function processOptions(options) {

        var uuids = options.uuids;
        var paths = options.paths;
        var types = options.types;
        var bundles = options.deps;
        var realEntries = options.paths = Object.create(null);

        if (options.debug === false) {
          for (var i = 0, l = uuids.length; i < l; i++) {
            uuids[i] = decodeUuid(uuids[i]);
          }

          for (var id in paths) {
            var entry = paths[id];
            var type = entry[1];
            entry[1] = types[type];
          }
        } else {
          var out = Object.create(null);

          for (var _i = 0, _l = uuids.length; _i < _l; _i++) {
            var uuid = uuids[_i];
            uuids[_i] = out[uuid] = decodeUuid(uuid);
          }

          uuids = out;
        }

        for (var _id in paths) {
          var _entry = paths[_id];
          realEntries[uuids[_id]] = _entry;
        }

        var scenes = options.scenes;

        for (var name in scenes) {
          var _uuid = scenes[name];
          scenes[name] = uuids[_uuid];
        }

        var packs = options.packs;

        for (var packId in packs) {
          var packedIds = packs[packId];

          for (var j = 0; j < packedIds.length; ++j) {
            packedIds[j] = uuids[packedIds[j]];
          }
        }

        var versions = options.versions;

        if (versions) {
          for (var folder in versions) {
            var entries = versions[folder];

            for (var _i2 = 0; _i2 < entries.length; _i2 += 2) {
              var _uuid2 = entries[_i2];
              entries[_i2] = uuids[_uuid2] || _uuid2;
            }
          }
        }

        var redirect = options.redirect;

        if (redirect) {
          for (var _i3 = 0; _i3 < redirect.length; _i3 += 2) {
            redirect[_i3] = uuids[redirect[_i3]];
            redirect[_i3 + 1] = bundles[redirect[_i3 + 1]];
          }
        }
      };

      var Config = function () {
        function Config() {
          this.name = '';
          this.base = '';
          this.importBase = '';
          this.nativeBase = '';
          this.deps = null;
          this.assetInfos = new Cache();
          this.scenes = new Cache();
          this.paths = new Cache();
        }

        var _proto = Config.prototype;

        _proto.init = function init(options) {
          processOptions(options);
          this.importBase = options.importBase || '';
          this.nativeBase = options.nativeBase || '';
          this.base = options.base || '';
          this.name = options.name || '';
          this.deps = options.deps || [];

          this._initUuid(options.uuids);

          this._initPath(options.paths);

          this._initScene(options.scenes);

          this._initPackage(options.packs);

          this._initVersion(options.versions);

          this._initRedirect(options.redirect);
        };

        _proto.getInfoWithPath = function getInfoWithPath(path, type) {
          if (!path) {
            return null;
          }

          path = normalize(path);
          var items = this.paths.get(path);

          if (items) {
            if (type) {
              for (var i = 0, l = items.length; i < l; i++) {
                var assetInfo = items[i];

                if (js.isChildClassOf(assetInfo.ctor, type)) {
                  return assetInfo;
                }
              }
            } else {
              return items[0];
            }
          }

          return null;
        };

        _proto.getDirWithPath = function getDirWithPath(path, type, out) {
          path = normalize(path);

          if (path[path.length - 1] === '/') {
            path = path.slice(0, -1);
          }

          var infos = out || [];
          this.paths.forEach(function (items, p) {
            if (p.startsWith(path) && isMatchByWord(p, path) || !path) {
              for (var i = 0, l = items.length; i < l; i++) {
                var entry = items[i];

                if (!type || js.isChildClassOf(entry.ctor, type)) {
                  infos.push(entry);
                }
              }
            }
          });
          return infos;
        };

        _proto.getAssetInfo = function getAssetInfo(uuid) {
          return this.assetInfos.get(uuid) || null;
        };

        _proto.getSceneInfo = function getSceneInfo(name) {
          if (!name.endsWith('.scene')) {
            name += '.scene';
          }

          if (name[0] !== '/' && !name.startsWith('db://')) {
            name = "/" + name;
          }

          var info = this.scenes.find(function (val, key) {
            return key.endsWith(name);
          });
          return info;
        };

        _proto.destroy = function destroy() {
          this.paths.destroy();
          this.scenes.destroy();
          this.assetInfos.destroy();
        };

        _proto._initUuid = function _initUuid(uuidList) {
          if (!uuidList) {
            return;
          }

          this.assetInfos.clear();

          for (var i = 0, l = uuidList.length; i < l; i++) {
            var uuid = uuidList[i];
            this.assetInfos.add(uuid, {
              uuid: uuid
            });
          }
        };

        _proto._initPath = function _initPath(pathList) {
          if (!pathList) {
            return;
          }

          var paths = this.paths;
          paths.clear();

          for (var uuid in pathList) {
            var info = pathList[uuid];
            var path = info[0];
            var type = info[1];
            var isSubAsset = info.length === 3;
            var assetInfo = this.assetInfos.get(uuid);
            assetInfo.path = path;
            assetInfo.ctor = js._getClassById(type);

            if (paths.has(path)) {
              if (isSubAsset) {
                paths.get(path).push(assetInfo);
              } else {
                paths.get(path).splice(0, 0, assetInfo);
              }
            } else {
              paths.add(path, [assetInfo]);
            }
          }
        };

        _proto._initScene = function _initScene(sceneList) {
          if (!sceneList) {
            return;
          }

          var scenes = this.scenes;
          scenes.clear();
          var assetInfos = this.assetInfos;

          for (var sceneName in sceneList) {
            var uuid = sceneList[sceneName];
            var assetInfo = assetInfos.get(uuid);
            assetInfo.url = sceneName;
            scenes.add(sceneName, assetInfo);
          }
        };

        _proto._initPackage = function _initPackage(packageList) {
          if (!packageList) {
            return;
          }

          var assetInfos = this.assetInfos;

          for (var packUuid in packageList) {
            var uuids = packageList[packUuid];
            var pack = {
              uuid: packUuid,
              packedUuids: uuids,
              ext: '.json'
            };
            assetInfos.add(packUuid, pack);

            for (var i = 0, l = uuids.length; i < l; i++) {
              var uuid = uuids[i];
              var assetInfo = assetInfos.get(uuid);
              var assetPacks = assetInfo.packs;

              if (assetPacks) {
                if (l === 1) {
                  assetPacks.splice(0, 0, pack);
                } else {
                  assetPacks.push(pack);
                }
              } else {
                assetInfo.packs = [pack];
              }
            }
          }
        };

        _proto._initVersion = function _initVersion(versions) {
          if (!versions) {
            return;
          }

          var assetInfos = this.assetInfos;
          var entries = versions["import"];

          if (entries) {
            for (var i = 0, l = entries.length; i < l; i += 2) {
              var uuid = entries[i];
              var assetInfo = assetInfos.get(uuid);
              assetInfo.ver = entries[i + 1];
            }
          }

          entries = versions["native"];

          if (entries) {
            for (var _i4 = 0, _l2 = entries.length; _i4 < _l2; _i4 += 2) {
              var _uuid3 = entries[_i4];

              var _assetInfo = assetInfos.get(_uuid3);

              _assetInfo.nativeVer = entries[_i4 + 1];
            }
          }
        };

        _proto._initRedirect = function _initRedirect(redirect) {
          if (!redirect) {
            return;
          }

          var assetInfos = this.assetInfos;

          for (var i = 0, l = redirect.length; i < l; i += 2) {
            var uuid = redirect[i];
            var assetInfo = assetInfos.get(uuid);
            assetInfo.redirect = redirect[i + 1];
          }
        };

        return Config;
      }();

      function visitAsset(asset, deps) {
        if (!asset._uuid) {
          return;
        }

        deps.push(asset._uuid);
      }

      function visitComponent(comp, deps) {
        var props = Object.getOwnPropertyNames(comp);

        for (var i = 0; i < props.length; i++) {
          var propName = props[i];

          if (propName === 'node' || propName === '__eventTargets') {
            continue;
          }

          var value = comp[propName];

          if (typeof value === 'object' && value) {
            if (Array.isArray(value)) {
              for (var j = 0; j < value.length; j++) {
                var val = value[j];

                if (val instanceof Asset) {
                  visitAsset(val, deps);
                }
              }
            } else if (!value.constructor || value.constructor === Object) {
              var keys = Object.getOwnPropertyNames(value);

              for (var _j = 0; _j < keys.length; _j++) {
                var _val = value[keys[_j]];

                if (_val instanceof Asset) {
                  visitAsset(_val, deps);
                }
              }
            } else if (value instanceof Asset) {
              visitAsset(value, deps);
            }
          }
        }
      }

      function visitNode(node, deps) {
        for (var i = 0; i < node._components.length; i++) {
          visitComponent(node._components[i], deps);
        }

        for (var _i = 0; _i < node._children.length; _i++) {
          visitNode(node._children[_i], deps);
        }
      }

      function descendOpRef(asset, refs, exclude, op) {
        exclude.push(asset._uuid);
        var depends = dependUtil.getDeps(asset._uuid);

        for (var i = 0, l = depends.length; i < l; i++) {
          var dependAsset = assets.get(depends[i]);

          if (!dependAsset) {
            continue;
          }

          var uuid = dependAsset._uuid;

          if (!(uuid in refs)) {
            refs[uuid] = dependAsset.refCount + op;
          } else {
            refs[uuid] += op;
          }

          if (exclude.includes(uuid)) {
            continue;
          }

          descendOpRef(dependAsset, refs, exclude, op);
        }
      }

      var _temp = [];

      function checkCircularReference(asset) {
        var refs = Object.create(null);
        refs[asset._uuid] = asset.refCount;
        descendOpRef(asset, refs, _temp, -1);
        _temp.length = 0;

        if (refs[asset._uuid] !== 0) {
          return refs[asset._uuid];
        }

        for (var uuid in refs) {
          if (refs[uuid] !== 0) {
            descendOpRef(assets.get(uuid), refs, _temp, 1);
          }
        }

        _temp.length = 0;
        return refs[asset._uuid];
      }

      var ReleaseManager = function () {
        function ReleaseManager() {
          this._persistNodeDeps = new Cache();
          this._toDelete = new Cache();
          this._eventListener = false;
        }

        var _proto = ReleaseManager.prototype;

        _proto.init = function init() {
          this._persistNodeDeps.clear();

          this._toDelete.clear();
        };

        _proto._addPersistNodeRef = function _addPersistNodeRef(node) {
          var deps = [];
          visitNode(node, deps);

          for (var i = 0, l = deps.length; i < l; i++) {
            var dependAsset = assets.get(deps[i]);

            if (dependAsset) {
              dependAsset.addRef();
            }
          }

          this._persistNodeDeps.add(node.uuid, deps);
        };

        _proto._removePersistNodeRef = function _removePersistNodeRef(node) {
          if (!this._persistNodeDeps.has(node.uuid)) {
            return;
          }

          var deps = this._persistNodeDeps.get(node.uuid);

          for (var i = 0, l = deps.length; i < l; i++) {
            var dependAsset = assets.get(deps[i]);

            if (dependAsset) {
              dependAsset.decRef();
            }
          }

          this._persistNodeDeps.remove(node.uuid);
        };

        _proto._autoRelease = function _autoRelease(oldScene, newScene, persistNodes) {
          if (oldScene) {
            var childs = dependUtil.getDeps(oldScene.uuid);

            for (var i = 0, l = childs.length; i < l; i++) {
              var asset = assets.get(childs[i]);

              if (asset) {
                asset.decRef( oldScene.autoReleaseAssets);
              }
            }

            var dependencies = dependUtil._depends.get(oldScene.uuid);

            if (dependencies && dependencies.persistDeps) {
              var persistDeps = dependencies.persistDeps;

              for (var _i2 = 0, _l = persistDeps.length; _i2 < _l; _i2++) {
                var _asset = assets.get(persistDeps[_i2]);

                if (_asset) {
                  _asset.decRef( oldScene.autoReleaseAssets);
                }
              }
            }

            if (oldScene.uuid !== newScene.uuid) {
              dependUtil.remove(oldScene.uuid);
            }
          }

          var sceneDeps = dependUtil._depends.get(newScene.uuid);

          if (sceneDeps) {
            sceneDeps.persistDeps = [];
          }

          for (var _i3 = 0, _l2 = persistNodes.length; _i3 < _l2; _i3++) {
            var _ref;

            var node = persistNodes[_i3];

            var deps = this._persistNodeDeps.get(node.uuid);

            for (var _iterator = _createForOfIteratorHelperLoose(deps), _step; !(_step = _iterator()).done;) {
              var dep = _step.value;
              var dependAsset = assets.get(dep);

              if (dependAsset) {
                dependAsset.addRef();
              }
            }

            if (!sceneDeps) {
              continue;
            }

            (_ref = sceneDeps.persistDeps).push.apply(_ref, deps);
          }
        };

        _proto.tryRelease = function tryRelease(asset, force) {
          if (force === void 0) {
            force = false;
          }

          if (!(asset instanceof Asset)) {
            return;
          }

          if (force) {
            this._free(asset, force);

            return;
          }

          this._toDelete.add(asset._uuid, asset);

          if (!this._eventListener) {
            this._eventListener = true;
            callInNextTick(this._freeAssets.bind(this));
          }
        };

        _proto._freeAssets = function _freeAssets() {
          var _this = this;

          this._eventListener = false;

          this._toDelete.forEach(function (asset) {
            _this._free(asset);
          });

          this._toDelete.clear();
        };

        _proto._free = function _free(asset, force) {
          if (force === void 0) {
            force = false;
          }

          var uuid = asset._uuid;

          this._toDelete.remove(uuid);

          if (!isValid(asset, true)) {
            return;
          }

          if (!force) {
            if (asset.refCount > 0) {
              if (checkCircularReference(asset) > 0) {
                return;
              }
            }
          }

          assets.remove(uuid);
          var depends = dependUtil.getDeps(uuid);

          for (var i = 0, l = depends.length; i < l; i++) {
            var dependAsset = assets.get(depends[i]);

            if (dependAsset) {
              dependAsset.decRef(false);

              {
                this._free(dependAsset, false);
              }
            }
          }

          {
            asset.destroy();
          }

          dependUtil.remove(uuid);
        };

        return ReleaseManager;
      }();

      var releaseManager = exports('j', new ReleaseManager());

      var defaultProgressCallback = null;
      function setDefaultProgressCallback(onProgress) {
        defaultProgressCallback = onProgress;
      }
      function clear(task, clearRef) {
        for (var i = 0, l = task.input.length; i < l; i++) {
          var _item = task.input[i];

          if (clearRef) {
            if (!_item.isNative && _item.content instanceof Asset) {
              _item.content.decRef(false);
            }
          }

          _item.recycle();
        }

        task.input = null;
      }
      function urlAppendTimestamp(url, append) {
        if (append) {
          if (/\?/.test(url)) {
            return url + "&_t=" + Date.now();
          }

          return url + "?_t=" + Date.now();
        }

        return url;
      }
      function retry(process, times, wait, onComplete, index) {
        if (index === void 0) {
          index = 0;
        }

        process(index, function (err, result) {
          index++;

          if (!err || index > times) {
            if (onComplete) {
              onComplete(err, result);
            }
          } else {
            setTimeout(function () {
              retry(process, times, wait, onComplete, index);
            }, wait);
          }
        });
      }
      function getDepends(uuid, data, exclude, depends, preload, asyncLoadAssets, config) {
        try {
          var info = dependUtil.parse(uuid, data);
          var includeNative = true;

          if (data instanceof Asset && !data.__nativeDepend__) {
            includeNative = false;
          }

          if (!preload) {
            asyncLoadAssets = !EDITOR && (!!data.asyncLoadAssets || asyncLoadAssets && !info.preventDeferredLoadDependents);

            for (var i = 0, l = info.deps.length; i < l; i++) {
              var dep = info.deps[i];

              if (!(dep in exclude)) {
                exclude[dep] = true;
                depends.push({
                  uuid: dep,
                  __asyncLoadAssets__: asyncLoadAssets,
                  bundle: config && config.name
                });
              }
            }

            if (includeNative && !asyncLoadAssets && !info.preventPreloadNativeObject && info.nativeDep) {
              if (config) {
                info.nativeDep.bundle = config.name;
              }

              depends.push(_extends({}, info.nativeDep));
            }
          } else {
            for (var _i = 0, _l = info.deps.length; _i < _l; _i++) {
              var _dep = info.deps[_i];

              if (!(_dep in exclude)) {
                exclude[_dep] = true;
                depends.push({
                  uuid: _dep,
                  bundle: config && config.name
                });
              }
            }

            if (includeNative && info.nativeDep) {
              if (config) {
                info.nativeDep.bundle = config.name;
              }

              depends.push(_extends({}, info.nativeDep));
            }
          }
        } catch (e) {
          error(e.message, e.stack);
        }
      }
      function cache(id, asset, cacheAsset) {
        if (!asset) {
          return;
        }

        cacheAsset = cacheAsset !== undefined ? cacheAsset : legacyCC.assetManager.cacheAsset;

        if (!isScene(asset) && cacheAsset) {
          assets.add(id, asset);
        }
      }
      function setProperties(uuid, asset, assetsMap) {
        var missingAsset = false;
        var depends = asset.__depends__;

        if (depends) {
          var missingAssetReporter = null;

          for (var i = 0, l = depends.length; i < l; i++) {
            var depend = depends[i];
            var dependAsset = assetsMap[depend.uuid + "@import"];

            if (!dependAsset) {
              {
                error("The asset " + depend.uuid + " is missing!");
              }

              missingAsset = true;
            } else {
              depend.owner[depend.prop] = dependAsset.addRef();
            }
          }

          if (missingAssetReporter) {
            missingAssetReporter.reportByOwner();
          }

          asset.__depends__ = null;
        }

        if (asset.__nativeDepend__) {
          if (assetsMap[uuid + "@native"]) {
            asset._nativeAsset = assetsMap[uuid + "@native"];
          } else {
            missingAsset = true;
          }

          asset.__nativeDepend__ = false;
        }

        return missingAsset;
      }
      function gatherAsset(task) {
        var source = task.source;

        if (!task.options.__outputAsArray__ && source.length === 1) {
          task.output = source[0].content;
        } else {
          var output = task.output = [];

          for (var i = 0, l = source.length; i < l; i++) {
            output.push(source[i].content);
          }
        }
      }
      function forEach(array, process, onComplete) {
        var count = 0;
        var errs = [];
        var length = array.length;

        if (length === 0 && onComplete) {
          onComplete(errs);
        }

        var cb = function cb(err) {
          if (err) {
            errs.push(err);
          }

          count++;

          if (count === length) {
            if (onComplete) {
              onComplete(errs);
            }
          }
        };

        for (var i = 0; i < length; i++) {
          process(array[i], cb);
        }
      }
      function parseParameters(options, onProgress, onComplete) {
        var optionsOut = options;
        var onProgressOut = onProgress;
        var onCompleteOut = onComplete;

        if (onComplete === undefined) {
          var isCallback = typeof options === 'function';

          if (onProgress) {
            onCompleteOut = onProgress;

            if (!isCallback) {
              onProgressOut = null;
            }
          } else if (onProgress === undefined && isCallback) {
            onCompleteOut = options;
            optionsOut = null;
            onProgressOut = null;
          }

          if (onProgress !== undefined && isCallback) {
            onProgressOut = options;
            optionsOut = null;
          }
        }

        return {
          options: optionsOut || Object.create(null),
          onProgress: onProgressOut,
          onComplete: onCompleteOut
        };
      }
      function parseLoadResArgs(type, onProgress, onComplete) {
        var typeOut = type;
        var onProgressOut = onProgress;
        var onCompleteOut = onComplete;

        if (onComplete === undefined) {
          var isValidType = js.isChildClassOf(type, Asset);

          if (onProgress) {
            onCompleteOut = onProgress;

            if (isValidType) {
              onProgressOut = null;
            }
          } else if (onProgress === undefined && !isValidType) {
            onCompleteOut = type;
            onProgressOut = null;
            typeOut = null;
          }

          if (onProgress !== undefined && !isValidType) {
            onProgressOut = type;
            typeOut = null;
          }
        }

        return {
          type: typeOut,
          onProgress: onProgressOut || defaultProgressCallback,
          onComplete: onCompleteOut
        };
      }
      function checkCircleReference(owner, uuid, map, checked) {
        if (checked === void 0) {
          checked = {};
        }

        var item = map[uuid];

        if (!item || checked[uuid]) {
          return false;
        }

        checked[uuid] = true;
        var result = false;
        var deps = dependUtil.getDeps(uuid);

        if (deps) {
          for (var i = 0, l = deps.length; i < l; i++) {
            var dep = deps[i];

            if (dep === owner || checkCircleReference(owner, dep, map, checked)) {
              result = true;
              break;
            }
          }
        }

        return result;
      }
      function asyncify(cb) {
        return function (p1, p2) {
          if (!cb) {
            return;
          }

          var refs = [];

          if (Array.isArray(p2)) {
            p2.forEach(function (x) {
              return x instanceof Asset && refs.push(x.addRef());
            });
          } else if (p2 instanceof Asset) {
            refs.push(p2.addRef());
          }

          callInNextTick(function () {
            refs.forEach(function (x) {
              return x.decRef(false);
            });
            cb(p1, p2);
          });
        };
      }

      var Bundle = exports('B', function () {
        function Bundle() {
          this._config = new Config();
        }

        var _proto = Bundle.prototype;

        _proto.getInfoWithPath = function getInfoWithPath(path, type) {
          return this._config.getInfoWithPath(path, type);
        };

        _proto.getDirWithPath = function getDirWithPath(path, type, out) {
          return this._config.getDirWithPath(path, type, out);
        };

        _proto.getAssetInfo = function getAssetInfo(uuid) {
          return this._config.getAssetInfo(uuid);
        };

        _proto.getSceneInfo = function getSceneInfo(name) {
          return this._config.getSceneInfo(name);
        };

        _proto.init = function init(options) {
          this._config.init(options);

          bundles.add(options.name, this);
        };

        _proto.load = function load(paths, type, onProgress, onComplete) {
          var _parseLoadResArgs = parseLoadResArgs(type, onProgress, onComplete),
              _type = _parseLoadResArgs.type,
              onProg = _parseLoadResArgs.onProgress,
              onComp = _parseLoadResArgs.onComplete;

          var options = {
            __requestType__: RequestType.PATH,
            type: _type,
            bundle: this.name,
            __outputAsArray__: Array.isArray(paths)
          };
          legacyCC.assetManager.loadAny(paths, options, onProg, onComp);
        };

        _proto.preload = function preload(paths, type, onProgress, onComplete) {
          var _parseLoadResArgs2 = parseLoadResArgs(type, onProgress, onComplete),
              _type = _parseLoadResArgs2.type,
              onProg = _parseLoadResArgs2.onProgress,
              onComp = _parseLoadResArgs2.onComplete;

          legacyCC.assetManager.preloadAny(paths, {
            __requestType__: RequestType.PATH,
            type: _type,
            bundle: this.name
          }, onProg, onComp);
        };

        _proto.loadDir = function loadDir(dir, type, onProgress, onComplete) {
          var _parseLoadResArgs3 = parseLoadResArgs(type, onProgress, onComplete),
              _type = _parseLoadResArgs3.type,
              onProg = _parseLoadResArgs3.onProgress,
              onComp = _parseLoadResArgs3.onComplete;

          legacyCC.assetManager.loadAny(dir, {
            __requestType__: RequestType.DIR,
            type: _type,
            bundle: this.name,
            __outputAsArray__: true
          }, onProg, onComp);
        };

        _proto.preloadDir = function preloadDir(dir, type, onProgress, onComplete) {
          var _parseLoadResArgs4 = parseLoadResArgs(type, onProgress, onComplete),
              _type = _parseLoadResArgs4.type,
              onProg = _parseLoadResArgs4.onProgress,
              onComp = _parseLoadResArgs4.onComplete;

          legacyCC.assetManager.preloadAny(dir, {
            __requestType__: RequestType.DIR,
            type: _type,
            bundle: this.name
          }, onProg, onComp);
        };

        _proto.loadScene = function loadScene(sceneName, options, onProgress, onComplete) {
          var _parseParameters = parseParameters(options, onProgress, onComplete),
              opts = _parseParameters.options,
              onProg = _parseParameters.onProgress,
              onComp = _parseParameters.onComplete;

          opts.preset = opts.preset || 'scene';
          opts.bundle = this.name;
          legacyCC.assetManager.loadAny({
            scene: sceneName
          }, opts, onProg, function (err, sceneAsset) {
            if (err) {
              error(err.message, err.stack);
            } else if (sceneAsset instanceof SceneAsset && sceneAsset.scene) {
              var scene = sceneAsset.scene;
              scene._id = sceneAsset._uuid;
              scene.name = sceneAsset.name;
            } else {
              err = new Error("The asset " + sceneAsset._uuid + " is not a scene");
            }

            if (onComp) {
              onComp(err, sceneAsset);
            }
          });
        };

        _proto.preloadScene = function preloadScene(sceneName, options, onProgress, onComplete) {
          var _parseParameters2 = parseParameters(options, onProgress, onComplete),
              opts = _parseParameters2.options,
              onProg = _parseParameters2.onProgress,
              onComp = _parseParameters2.onComplete;

          opts.bundle = this.name;
          legacyCC.assetManager.preloadAny({
            scene: sceneName
          }, opts, onProg, function (err) {
            if (err) {
              errorID(1210, sceneName, err.message);
            }

            if (onComp) {
              onComp(err);
            }
          });
        };

        _proto.get = function get(path, type) {
          var info = this.getInfoWithPath(path, type);

          if (info) {
            return assets.get(info.uuid) || null;
          }

          return null;
        };

        _proto.release = function release(path, type) {
          var asset = this.get(path, type);

          if (asset) {
            releaseManager.tryRelease(asset, true);
          }
        };

        _proto.releaseUnusedAssets = function releaseUnusedAssets() {
          var _this = this;

          assets.forEach(function (asset) {
            var info = _this.getAssetInfo(asset._uuid);

            if (info && !info.redirect) {
              releaseManager.tryRelease(asset);
            }
          });
        };

        _proto.releaseAll = function releaseAll() {
          var _this2 = this;

          assets.forEach(function (asset) {
            var info = _this2.getAssetInfo(asset._uuid);

            if (info && !info.redirect) {
              releaseManager.tryRelease(asset, true);
            }
          });
        };

        _proto._destroy = function _destroy() {
          this._config.destroy();
        };

        _createClass(Bundle, [{
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "name",
          get: function get() {
            return this._config.name;
          }
        }, {
          key: "deps",
          get: function get() {
            return this._config.deps;
          }
        }, {
          key: "base",
          get: function get() {
            return this._config.base;
          }
        }]);

        return Bundle;
      }());
      var resources = exports('r', new Bundle());
      legacyCC.resources = resources;

      function downloadDomImage(url, options, onComplete) {
        var img = new Image();

        if (window.location.protocol !== 'file:') {
          img.crossOrigin = 'anonymous';
        }

        function loadCallback() {
          img.removeEventListener('load', loadCallback);
          img.removeEventListener('error', errorCallback);

          if (onComplete) {
            onComplete(null, img);
          }
        }

        function errorCallback() {
          img.removeEventListener('load', loadCallback);
          img.removeEventListener('error', errorCallback);

          if (onComplete) {
            onComplete(new Error(getError(4930, url)));
          }
        }

        img.addEventListener('load', loadCallback);
        img.addEventListener('error', errorCallback);
        img.src = url;
        return img;
      }

      function downloadFile(url, options, onProgress, onComplete) {
        var xhr = new XMLHttpRequest();
        var errInfo = "download failed: " + url + ", status: ";
        xhr.open('GET', url, true);

        if (options.xhrResponseType !== undefined) {
          xhr.responseType = options.xhrResponseType;
        }

        if (options.xhrWithCredentials !== undefined) {
          xhr.withCredentials = options.xhrWithCredentials;
        }

        if (options.xhrMimeType !== undefined && xhr.overrideMimeType) {
          xhr.overrideMimeType(options.xhrMimeType);
        }

        if (options.xhrTimeout !== undefined) {
          xhr.timeout = options.xhrTimeout;
        }

        if (options.xhrHeader) {
          for (var header in options.xhrHeader) {
            xhr.setRequestHeader(header, options.xhrHeader[header]);
          }
        }

        xhr.onload = function () {
          if (xhr.status === 200 || xhr.status === 0) {
            if (onComplete) {
              onComplete(null, xhr.response);
            }
          } else if (onComplete) {
            onComplete(new Error("" + errInfo + xhr.status + "(no response)"));
          }
        };

        if (onProgress) {
          xhr.onprogress = function (e) {
            if (e.lengthComputable) {
              onProgress(e.loaded, e.total);
            }
          };
        }

        xhr.onerror = function () {
          if (onComplete) {
            onComplete(new Error("" + errInfo + xhr.status + "(error)"));
          }
        };

        xhr.ontimeout = function () {
          if (onComplete) {
            onComplete(new Error("" + errInfo + xhr.status + "(time out)"));
          }
        };

        xhr.onabort = function () {
          if (onComplete) {
            onComplete(new Error("" + errInfo + xhr.status + "(abort)"));
          }
        };

        xhr.send(null);
        return xhr;
      }

      var downloaded = {};
      function downloadScript(url, options, onComplete) {
        if (downloaded[url]) {
          if (onComplete) {
            onComplete(null);
          }

          return null;
        }

        var script = document.createElement('script');

        if (window.location.protocol !== 'file:') {
          script.crossOrigin = 'anonymous';
        }

        script.async = options.scriptAsyncLoading || false;
        script.src = url;

        function loadHandler() {
          script.parentNode.removeChild(script);
          script.removeEventListener('load', loadHandler, false);
          script.removeEventListener('error', errorHandler, false);
          downloaded[url] = true;

          if (onComplete) {
            onComplete(null);
          }
        }

        function errorHandler() {
          script.parentNode.removeChild(script);
          script.removeEventListener('load', loadHandler, false);
          script.removeEventListener('error', errorHandler, false);

          if (onComplete) {
            onComplete(new Error(getError(4928, url)));
          }
        }

        script.addEventListener('load', loadHandler, false);
        script.addEventListener('error', errorHandler, false);
        document.body.appendChild(script);
        return script;
      }

      var REGEX = /^(?:\w+:\/\/|\.+\/).+/;

      var downloadImage = function downloadImage(url, options, onComplete) {
        var func = sys.capabilities.imageBitmap && legacyCC.assetManager.allowImageBitmap ? downloadBlob : downloadDomImage;
        func(url, options, onComplete);
      };

      var downloadBlob = function downloadBlob(url, options, onComplete) {
        options.xhrResponseType = 'blob';
        downloadFile(url, options, options.onFileProgress, onComplete);
      };

      var downloadJson = function downloadJson(url, options, onComplete) {
        options.xhrResponseType = 'json';
        downloadFile(url, options, options.onFileProgress, onComplete);
      };

      var downloadArrayBuffer = function downloadArrayBuffer(url, options, onComplete) {
        options.xhrResponseType = 'arraybuffer';
        downloadFile(url, options, options.onFileProgress, onComplete);
      };

      var downloadText = function downloadText(url, options, onComplete) {
        options.xhrResponseType = 'text';
        downloadFile(url, options, options.onFileProgress, onComplete);
      };

      var downloadBundle = function downloadBundle(nameOrUrl, options, onComplete) {
        var bundleName = basename(nameOrUrl);
        var url = nameOrUrl;

        if (!REGEX.test(url)) {
          if (downloader.remoteBundles.indexOf(bundleName) !== -1) {
            url = downloader.remoteServerAddress + "remote/" + bundleName;
          } else {
            url = "assets/" + bundleName;
          }
        }

        var version = options.version || downloader.bundleVers[bundleName];
        var count = 0;
        var config = url + "/config." + (version ? version + "." : '') + "json";
        var out = null;
        var error = null;
        downloadJson(config, options, function (err, response) {
          if (err) {
            error = err;
          }

          out = response;

          if (out) {
            out.base = url + "/";
          }

          count++;

          if (count === 2) {
            onComplete(error, out);
          }
        });
        var jspath = url + "/index." + (version ? version + "." : '') + "js";
        downloadScript(jspath, options, function (err) {
          if (err) {
            error = err;
            count++;

            if (count === 2) {
              onComplete(err);
            }
          } else {
            downloader.importBundleEntry(bundleName).then(function () {
              count++;

              if (count === 2) {
                onComplete(error, out);
              }
            })["catch"](function (e) {
              error = e;
              count++;

              if (count === 2) {
                onComplete(error);
              }
            });
          }
        });
      };

      var Downloader = function () {
        function Downloader() {
          this.maxConcurrency = 16;
          this.maxRequestsPerFrame = 16;
          this.maxRetryCount =  3;
          this.appendTimeStamp = !!EDITOR;
          this.limited = !EDITOR;
          this.retryInterval = 2000;
          this.bundleVers = null;
          this.remoteBundles = [];
          this.downloadDomImage = downloadDomImage;
          this.downloadDomAudio = null;
          this.downloadFile = downloadFile;
          this.downloadScript = downloadScript;
          this._downloaders = {
            '.png': downloadImage,
            '.jpg': downloadImage,
            '.bmp': downloadImage,
            '.jpeg': downloadImage,
            '.gif': downloadImage,
            '.ico': downloadImage,
            '.tiff': downloadImage,
            '.webp': downloadImage,
            '.image': downloadImage,
            '.pvr': downloadArrayBuffer,
            '.pkm': downloadArrayBuffer,
            '.astc': downloadArrayBuffer,
            '.txt': downloadText,
            '.xml': downloadText,
            '.vsh': downloadText,
            '.fsh': downloadText,
            '.atlas': downloadText,
            '.tmx': downloadText,
            '.tsx': downloadText,
            '.json': downloadJson,
            '.ExportJson': downloadJson,
            '.plist': downloadText,
            '.fnt': downloadText,
            '.binary': downloadArrayBuffer,
            '.bin': downloadArrayBuffer,
            '.dbbin': downloadArrayBuffer,
            '.skel': downloadArrayBuffer,
            '.js': downloadScript,
            bundle: downloadBundle,
            "default": downloadText
          };
          this._downloading = new Cache();
          this._queue = [];
          this._queueDirty = false;
          this._totalNum = 0;
          this._totalNumThisPeriod = 0;
          this._lastDate = -1;
          this._checkNextPeriod = false;
          this._remoteServerAddress = '';
          this._maxInterval = 1 / 30;
        }

        var _proto = Downloader.prototype;

        _proto.init = function init(remoteServerAddress, bundleVers, remoteBundles) {
          if (remoteServerAddress === void 0) {
            remoteServerAddress = '';
          }

          if (bundleVers === void 0) {
            bundleVers = {};
          }

          if (remoteBundles === void 0) {
            remoteBundles = [];
          }

          this._downloading.clear();

          this._queue.length = 0;
          this._remoteServerAddress = remoteServerAddress;
          this.bundleVers = bundleVers;
          this.remoteBundles = remoteBundles;
        };

        _proto.register = function register(type, handler) {
          if (typeof type === 'object') {
            mixin(this._downloaders, type);
          } else {
            this._downloaders[type] = handler;
          }
        };

        _proto.importBundleEntry = function importBundleEntry(bundleName) {
          return module.import("virtual:///prerequisite-imports/" + bundleName);
        };

        _proto.download = function download(id, url, type, options, onComplete) {
          var _this = this;

          var file = files.get(id);

          if (file) {
            onComplete(null, file);
            return;
          }

          var downloadCallbacks = this._downloading.get(id);

          if (downloadCallbacks) {
            downloadCallbacks.push(onComplete);

            var request = this._queue.find(function (x) {
              return x.id === id;
            });

            if (!request) {
              return;
            }

            var priority = options.priority || 0;

            if (request.priority < priority) {
              request.priority = priority;
              this._queueDirty = true;
            }

            return;
          }

          var maxRetryCount = typeof options.maxRetryCount !== 'undefined' ? options.maxRetryCount : this.maxRetryCount;
          var maxConcurrency = typeof options.maxConcurrency !== 'undefined' ? options.maxConcurrency : this.maxConcurrency;
          var maxRequestsPerFrame = typeof options.maxRequestsPerFrame !== 'undefined' ? options.maxRequestsPerFrame : this.maxRequestsPerFrame;
          var handler = this._downloaders[type] || this._downloaders["default"];

          var process = function process(index, callback) {
            if (index === 0) {
              _this._downloading.add(id, [onComplete]);
            }

            if (!_this.limited) {
              handler(urlAppendTimestamp(url, _this.appendTimeStamp), options, callback);
              return;
            }

            _this._updateTime();

            var done = function done(err, data) {
              _this._totalNum--;

              _this._handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame);

              callback(err, data);
            };

            if (_this._totalNum < maxConcurrency && _this._totalNumThisPeriod < maxRequestsPerFrame) {
              handler(urlAppendTimestamp(url, _this.appendTimeStamp), options, done);
              _this._totalNum++;
              _this._totalNumThisPeriod++;
            } else {
              _this._queue.push({
                id: id,
                priority: options.priority || 0,
                url: url,
                options: options,
                done: done,
                handler: handler
              });

              _this._queueDirty = true;

              if (_this._totalNum < maxConcurrency) {
                _this._handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame);
              }
            }
          };

          var finale = function finale(err, result) {
            if (!err) {
              files.add(id, result);
            }

            var callbacks = _this._downloading.remove(id);

            for (var i = 0, l = callbacks.length; i < l; i++) {
              callbacks[i](err, result);
            }
          };

          retry(process, maxRetryCount, this.retryInterval, finale);
        };

        _proto.loadSubpackage = function loadSubpackage(name, completeCallback) {
          legacyCC.assetManager.loadBundle(name, null, completeCallback);
        };

        _proto._updateTime = function _updateTime() {
          var now = Date.now();
          var deltaTime = legacyCC.director.getDeltaTime();
          var interval = deltaTime > this._maxInterval ? this._maxInterval : deltaTime;

          if (now - this._lastDate > interval * 1000) {
            this._totalNumThisPeriod = 0;
            this._lastDate = now;
          }
        };

        _proto._handleQueue = function _handleQueue(maxConcurrency, maxRequestsPerFrame) {
          this._checkNextPeriod = false;

          this._updateTime();

          while (this._queue.length > 0 && this._totalNum < maxConcurrency && this._totalNumThisPeriod < maxRequestsPerFrame) {
            if (this._queueDirty) {
              this._queue.sort(function (a, b) {
                return a.priority - b.priority;
              });

              this._queueDirty = false;
            }

            var request = this._queue.pop();

            if (!request) {
              break;
            }

            this._totalNum++;
            this._totalNumThisPeriod++;
            request.handler(urlAppendTimestamp(request.url, this.appendTimeStamp), request.options, request.done);
          }

          this._handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame);
        };

        _proto._handleQueueInNextFrame = function _handleQueueInNextFrame(maxConcurrency, maxRequestsPerFrame) {
          if (!this._checkNextPeriod && this._queue.length > 0) {
            callInNextTick(this._handleQueue.bind(this), maxConcurrency, maxRequestsPerFrame);
            this._checkNextPeriod = true;
          }
        };

        _createClass(Downloader, [{
          key: "remoteServerAddress",
          get: function get() {
            return this._remoteServerAddress;
          }
        }]);

        return Downloader;
      }();
      var downloader = exports('d', new Downloader());

      function createImageAsset(id, data, options, onComplete) {
        var out = null;
        var err = null;

        try {
          out = new ImageAsset();
          out._nativeUrl = id;
          out._nativeAsset = data;
        } catch (e) {
          err = e;
        }

        onComplete(err, out);
      }

      function createJsonAsset(id, data, options, onComplete) {
        var out = new JsonAsset();
        out.json = data;
        onComplete(null, out);
      }

      function createTextAsset(id, data, options, onComplete) {
        var out = new TextAsset();
        out.text = data;
        onComplete(null, out);
      }

      function createBufferAsset(id, data, options, onComplete) {
        var out = new BufferAsset();
        out._nativeUrl = id;
        out._nativeAsset = data;
        onComplete(null, out);
      }

      function createAsset(id, data, options, onComplete) {
        var out = new Asset();
        out._nativeUrl = id;
        out._nativeAsset = data;
        onComplete(null, out);
      }

      function createBundle(id, data, options, onComplete) {
        var bundle = bundles.get(data.name);

        if (!bundle) {
          bundle = data.name === BuiltinBundleName.RESOURCES ? resources : new Bundle();
          data.base = data.base || id + "/";
          bundle.init(data);
        }

        onComplete(null, bundle);
      }

      var Factory = function () {
        function Factory() {
          this._creating = new Cache();
          this._producers = {
            '.png': createImageAsset,
            '.jpg': createImageAsset,
            '.bmp': createImageAsset,
            '.jpeg': createImageAsset,
            '.gif': createImageAsset,
            '.ico': createImageAsset,
            '.tiff': createImageAsset,
            '.webp': createImageAsset,
            '.image': createImageAsset,
            '.pvr': createImageAsset,
            '.pkm': createImageAsset,
            '.txt': createTextAsset,
            '.xml': createTextAsset,
            '.vsh': createTextAsset,
            '.fsh': createTextAsset,
            '.atlas': createTextAsset,
            '.tmx': createTextAsset,
            '.tsx': createTextAsset,
            '.fnt': createTextAsset,
            '.json': createJsonAsset,
            '.ExportJson': createJsonAsset,
            '.binary': createBufferAsset,
            '.bin': createBufferAsset,
            '.dbbin': createBufferAsset,
            '.skel': createBufferAsset,
            bundle: createBundle,
            "default": createAsset
          };
        }

        var _proto = Factory.prototype;

        _proto.register = function register(type, handler) {
          if (typeof type === 'object') {
            js.mixin(this._producers, type);
          } else {
            this._producers[type] = handler;
          }
        };

        _proto.create = function create(id, data, type, options, onComplete) {
          var _this = this;

          var handler = this._producers[type] || this._producers["default"];
          var asset = assets.get(id);

          if (!options.reloadAsset && asset) {
            onComplete(null, asset);
            return;
          }

          var creating = this._creating.get(id);

          if (creating) {
            creating.push(onComplete);
            return;
          }

          this._creating.add(id, [onComplete]);

          handler(id, data, options, function (err, result) {
            if (!err && result instanceof Asset) {
              result._uuid = id;
              cache(id, result, options.cacheAsset);
            }

            var callbacks = _this._creating.remove(id);

            for (var i = 0, l = callbacks.length; i < l; i++) {
              callbacks[i](err, result);
            }
          });
        };

        return Factory;
      }();
      var factory = exports('i', new Factory());

    }
  };
});
