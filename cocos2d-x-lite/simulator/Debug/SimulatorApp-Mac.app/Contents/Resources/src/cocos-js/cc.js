System.register(["base", "gfx-webgl", "gfx-webgl2", "3d", "2d", "ui", "particle", "physics-ammo", "physics-framework", "wait-for-ammo-instantiation", "physics-2d-box2d", "physics-2d-framework", "intersection-2d", "primitive", "profiler", "particle-2d", "audio", "video", "webview", "tween", "terrain", "tiled-map", "spine", "dragon-bones"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_base) {
      var _exportObj = {};

      for (var _key in _base) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _base[_key];
      }

      _export(_exportObj);
    }, function (_gfxWebgl) {
      var _exportObj2 = {};

      for (var _key2 in _gfxWebgl) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _gfxWebgl[_key2];
      }

      _export(_exportObj2);
    }, function (_gfxWebgl2) {
      var _exportObj3 = {};

      for (var _key3 in _gfxWebgl2) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _gfxWebgl2[_key3];
      }

      _export(_exportObj3);
    }, function (_d) {
      var _exportObj4 = {};

      for (var _key4 in _d) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _d[_key4];
      }

      _export(_exportObj4);
    }, function (_d2) {
      var _exportObj5 = {};

      for (var _key5 in _d2) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _d2[_key5];
      }

      _export(_exportObj5);
    }, function (_ui) {
      var _exportObj6 = {};

      for (var _key6 in _ui) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _ui[_key6];
      }

      _export(_exportObj6);
    }, function (_particle) {
      var _exportObj7 = {};

      for (var _key7 in _particle) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _particle[_key7];
      }

      _export(_exportObj7);
    }, function (_physicsAmmo) {
      var _exportObj8 = {};

      for (var _key8 in _physicsAmmo) {
        if (_key8 !== "default" && _key8 !== "__esModule") _exportObj8[_key8] = _physicsAmmo[_key8];
      }

      _export(_exportObj8);
    }, function (_physicsFramework) {
      var _exportObj9 = {};

      for (var _key9 in _physicsFramework) {
        if (_key9 !== "default" && _key9 !== "__esModule") _exportObj9[_key9] = _physicsFramework[_key9];
      }

      _export(_exportObj9);
    }, function (_waitForAmmoInstantiation) {
      var _exportObj10 = {};

      for (var _key10 in _waitForAmmoInstantiation) {
        if (_key10 !== "default" && _key10 !== "__esModule") _exportObj10[_key10] = _waitForAmmoInstantiation[_key10];
      }

      _export(_exportObj10);
    }, function (_physics2dBox2d) {
      var _exportObj11 = {};

      for (var _key11 in _physics2dBox2d) {
        if (_key11 !== "default" && _key11 !== "__esModule") _exportObj11[_key11] = _physics2dBox2d[_key11];
      }

      _export(_exportObj11);
    }, function (_physics2dFramework) {
      var _exportObj12 = {};

      for (var _key12 in _physics2dFramework) {
        if (_key12 !== "default" && _key12 !== "__esModule") _exportObj12[_key12] = _physics2dFramework[_key12];
      }

      _export(_exportObj12);
    }, function (_intersection2d) {
      var _exportObj13 = {};

      for (var _key13 in _intersection2d) {
        if (_key13 !== "default" && _key13 !== "__esModule") _exportObj13[_key13] = _intersection2d[_key13];
      }

      _export(_exportObj13);
    }, function (_primitive) {
      var _exportObj14 = {};

      for (var _key14 in _primitive) {
        if (_key14 !== "default" && _key14 !== "__esModule") _exportObj14[_key14] = _primitive[_key14];
      }

      _export(_exportObj14);
    }, function (_profiler) {
      var _exportObj15 = {};

      for (var _key15 in _profiler) {
        if (_key15 !== "default" && _key15 !== "__esModule") _exportObj15[_key15] = _profiler[_key15];
      }

      _export(_exportObj15);
    }, function (_particle2d) {
      var _exportObj16 = {};

      for (var _key16 in _particle2d) {
        if (_key16 !== "default" && _key16 !== "__esModule") _exportObj16[_key16] = _particle2d[_key16];
      }

      _export(_exportObj16);
    }, function (_audio) {
      var _exportObj17 = {};

      for (var _key17 in _audio) {
        if (_key17 !== "default" && _key17 !== "__esModule") _exportObj17[_key17] = _audio[_key17];
      }

      _export(_exportObj17);
    }, function (_video) {
      var _exportObj18 = {};

      for (var _key18 in _video) {
        if (_key18 !== "default" && _key18 !== "__esModule") _exportObj18[_key18] = _video[_key18];
      }

      _export(_exportObj18);
    }, function (_webview) {
      var _exportObj19 = {};

      for (var _key19 in _webview) {
        if (_key19 !== "default" && _key19 !== "__esModule") _exportObj19[_key19] = _webview[_key19];
      }

      _export(_exportObj19);
    }, function (_tween) {
      var _exportObj20 = {};

      for (var _key20 in _tween) {
        if (_key20 !== "default" && _key20 !== "__esModule") _exportObj20[_key20] = _tween[_key20];
      }

      _export(_exportObj20);
    }, function (_terrain) {
      var _exportObj21 = {};

      for (var _key21 in _terrain) {
        if (_key21 !== "default" && _key21 !== "__esModule") _exportObj21[_key21] = _terrain[_key21];
      }

      _export(_exportObj21);
    }, function (_tiledMap) {
      var _exportObj22 = {};

      for (var _key22 in _tiledMap) {
        if (_key22 !== "default" && _key22 !== "__esModule") _exportObj22[_key22] = _tiledMap[_key22];
      }

      _export(_exportObj22);
    }, function (_spine) {
      var _exportObj23 = {};

      for (var _key23 in _spine) {
        if (_key23 !== "default" && _key23 !== "__esModule") _exportObj23[_key23] = _spine[_key23];
      }

      _export(_exportObj23);
    }, function (_dragonBones) {
      var _exportObj24 = {};

      for (var _key24 in _dragonBones) {
        if (_key24 !== "default" && _key24 !== "__esModule") _exportObj24[_key24] = _dragonBones[_key24];
      }

      _export(_exportObj24);
    }],
    execute: function () {}
  };
});