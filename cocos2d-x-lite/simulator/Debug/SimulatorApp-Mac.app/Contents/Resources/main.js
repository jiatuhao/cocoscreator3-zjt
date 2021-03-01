
debugger

function fetchText (url) {
    return new Promise(resolve => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true);
        xhr.onload = (() => {
            resolve(xhr.response);
        });
        xhr.send(null);
    });
}

async function fetchJson (url) {
    return JSON.parse((await fetchText(url)));
}

(async function () {
    // SystemJS support.
    window.self = window;
    require("src/system.bundle.js");
    require("src/polyfills.bundle.js");

    const importMapEngineModsUrl = './src/import-map.json';
    const importMapEngineModsJson = jsb.fileUtils.getStringFromFile(importMapEngineModsUrl);
    const importMapEngineMods = JSON.parse(importMapEngineModsJson);
    System.extendsImportMap(importMapEngineMods, importMapEngineModsUrl);

    const importMapProjectUrl = `http://10.2.176.12:7456/scripting/import-map-project`;
    const importMapProject = await fetchJson(importMapProjectUrl);
    System.extendsImportMap(importMapProject, importMapProjectUrl);

    System.extendsImportMap({
        imports: {"cc": "cce:/internal/x/cc"},
    }, './');

    System.import('./src/application.js').then(({ createApplication }) => {
        return createApplication({
            loadJsListFile: (url) => window.require('/Volumes/move/move/cocoscreator/testGame/NewProject_2/' + url),
        });
    }).then((application) => {
        return application.import('cc').then((cc) => {
            require('jsb-adapter/jsb-engine.js');
            cc.sys.__init();
            cc.macro.CLEANUP_IMAGE_CACHE = false;
        }).then(() => {
            return application.start({
                settings: window._CCSettings,
                findCanvas: () => {
                    var container = document.createElement('div');
                    var frame = document.documentElement;
                    var canvas = window.__canvas;
                    return { frame, canvas, container };
                },
            });
        });
    }).catch((err) => {
        console.error(err);
    });
})().catch(err => {
    console.error(err);
});

