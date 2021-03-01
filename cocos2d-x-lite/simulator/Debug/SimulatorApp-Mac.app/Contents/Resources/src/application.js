System.register([], function (_export, _context) {
  "use strict";

  function createApplication({
    loadJsListFile,
    moduleLoader,
    ammoJsFallback,
    loadAmmoJsWasmBinary
  }) {
    /**
     * There are restrictions on some platform that we can not use `System` as System JS global.
     * The well-known platform is Baidu.
     * Baidu uses webpack as their pack tool. Webpack by default recognize and transform
     * `System.import`, `System.register` calls.
     * However Baidu does not provide a mechanism to config webpack.
     * So this HACK comes.
     */
    const System = globalThis.System;

    if (moduleLoader) {
      initializeModuleLoader(System, moduleLoader);
    } // NOTE: before here we shall not import any module!


    let promise = Promise.resolve();

    
    promise = promise
      .then(() => topLevelImport('wait-for-ammo-instantiation'))
      .then(({default: waitForAmmoInstantiation}) => {
          const {
              isWasm,
              wasmBinaryURL,
          } = waitForAmmoInstantiation;
          if (!isWasm) {
              return waitForAmmoInstantiation();
          } else {
              return Promise.resolve(fetchWasm(wasmBinaryURL))
                  .then((wasmBinary) => waitForAmmoInstantiation(wasmBinary));
          }
      });
    

    return promise.then(() => {
      return {
        start,
        ['import']: topLevelImport
      };
    });

    function start({
      findCanvas
    }) {
      let settings;
      let cc;
      return Promise.resolve().then(() => topLevelImport('cc')).then(engine => {
        cc = engine;
        return loadSettingsJson(cc);
      }).then(() => {
        settings = window._CCSettings;
        return initializeGame(cc, settings, findCanvas).then(() => {
          if (settings.scriptPackages) {
            return loadModulePacks(settings.scriptPackages);
          }
        }).then(() => loadJsList(settings.jsList)).then(() => loadAssetBundle(settings.hasResourcesBundle, settings.hasStartSceneBundle)).then(() => cc.game.run(() => onGameStarted(cc, settings)));
      });
    }

    function topLevelImport(url) {
      return System.import(url);
    }

    function loadAssetBundle(hasResourcesBundle, hasStartSceneBundle) {
      const {
        MAIN,
        RESOURCES,
        START_SCENE
      } = cc.AssetManager.BuiltinBundleName;
      const bundleRoot = hasResourcesBundle ? [RESOURCES, MAIN] : [MAIN];

      if (hasStartSceneBundle) {
        bundleRoot.push(START_SCENE);
      }

      return Promise.all(bundleRoot.map(name => loadBundle(name)));
    }

    function loadBundle(name) {
      return new Promise((resolve, reject) => {
        cc.assetManager.loadBundle(name, (err, bundle) => {
          if (err) {
            return reject(err);
          }

          resolve(bundle);
        });
      });
    }

    function loadModulePacks(packs) {
      return Promise.all(packs.map(pack => topLevelImport(pack)));
    }

    function loadJsList(jsList) {
      let promise = Promise.resolve();
      jsList.forEach(jsListFile => {
        promise = promise.then(() => loadJsListFile(jsListFile));
      });
      return promise;
    }

    function loadSettingsJson(cc) {
      let server = '';
      let settings = 'src/settings.json';

      return new Promise((resolve, reject) => {
        if (typeof fsUtils !== 'undefined' && !settings.startsWith('http')) {
          let result = fsUtils.readJsonSync(settings);

          if (result instanceof Error) {
            reject(result);
          } else {
            window._CCSettings = result;
            window._CCSettings.server = server;
            resolve();
          }
        } else {
          let xhr = new XMLHttpRequest();
          xhr.open('GET', settings);
          xhr.responseType = 'text';

          xhr.onload = () => {
            window._CCSettings = JSON.parse(xhr.response);
            window._CCSettings.server = server;
            resolve();
          };

          xhr.onerror = () => {
            reject(new Error('request settings failed!'));
          };

          xhr.send(null);
        }
      });
    }
  }

  function initializeGame(cc, settings, findCanvas) {
    if (settings.macros) {
      for (let key in settings.macros) {
        cc.macro[key] = settings.macros[key];
      }
    }

    const gameOptions = getGameOptions(settings, findCanvas);
    const success = cc.game.init(gameOptions);
    return success ? Promise.resolve() : Promise.reject();
  }

  function onGameStarted(cc, settings) {
    window._CCSettings = undefined;
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);

    // launch scene
    let previewSceneJson = jsb.fileUtils.getStringFromFile('/Applications/CocosCreator/Creator/3.0.0/CocosCreator.app/Contents/Resources/resources/3d/cocos2d-x-lite/simulator/Debug/SimulatorApp-Mac.app/Contents/Resources/preview-scene.json');
    let previewSceneJsonObject = JSON.parse(previewSceneJson);
    cc.assetManager.loadWithJson(previewSceneJsonObject, (err, sceneAsset) => {
      if (err) {
        console.error(error);
        return;
      }
      cc.director.runSceneImmediate(sceneAsset, null, () => {
        cc.view.setDesignResolutionSize(960, 640, 4);
        console.log('Success to load scene');
      });
    });
  }

  function getGameOptions(settings, findCanvas) {
    // asset library options
    const assetOptions = {
      bundleVers: settings.bundleVers,
      remoteBundles: settings.remoteBundles,
      server: settings.server,
      subpackages: settings.subpackages,
      assetOptions: settings.assetOptions,
      importBase: '/Volumes/move/move/cocoscreator/testGame/NewProject_2/library',
      nativeBase: '/Volumes/move/move/cocoscreator/testGame/NewProject_2/library',
    };
    const options = {
      debugMode: settings.debug ? 1 : 3,
      // cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
      showFPS: !false && settings.debug,
      frameRate: 60,
      groupList: settings.groupList,
      collisionMatrix: settings.collisionMatrix,
      renderPipeline: settings.renderPipeline,
      adapter: findCanvas('GameCanvas'),
      assetOptions,
      customJointTextureLayouts: settings.customJointTextureLayouts || [],
      physics: settings.physics
    };
    return options;
  }

  function initializeModuleLoader(System, {
    importMap,
    importMapBaseUrl,
    execMap,
    execNoSchema
  }) {
    const noSchemaPlaceholder = 'no-schema:';
    const systemJsPrototype = System.constructor.prototype;
    const baseUrlSchema = importMapBaseUrl || noSchemaPlaceholder;
    System.patches.setBaseUrl(`${baseUrlSchema}/`);
    System.patches.setImportMap(importMap);

    if (execNoSchema) {
      System.patches.hookInstantiationOverSchema(noSchemaPlaceholder, function (urlNoSchema, firstParentUrl) {
        execNoSchema.call(this, urlNoSchema, firstParentUrl);
        return this.getRegister();
      });
    }

    if (execMap) {
      for (const schema in execMap) {
        const exec = execMap[schema];
        System.patches.hookInstantiationOverSchema(schema, function (urlNoSchema, firstParentUrl) {
          exec.call(this, urlNoSchema, firstParentUrl);
          return this.getRegister();
        });
      }
    }
  }

  _export("createApplication", createApplication);

  return {
    setters: [],
    execute: function () {}
  };
});