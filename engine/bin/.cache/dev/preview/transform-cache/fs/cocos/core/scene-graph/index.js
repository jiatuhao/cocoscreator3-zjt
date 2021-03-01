System.register("q-bundled:///fs/cocos/core/scene-graph/index.js", ["./node-event-processor.js", "./deprecated.js", "./base-node.js", "./node.js", "./scene.js", "./layers.js", "./find.js", "./private-node.js", "./node-activator.js"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_nodeEventProcessorJs) {}, function (_deprecatedJs) {}, function (_baseNodeJs) {
      _export("BaseNode", _baseNodeJs.BaseNode);
    }, function (_nodeJs) {
      _export("Node", _nodeJs.Node);
    }, function (_sceneJs) {
      _export("Scene", _sceneJs.Scene);
    }, function (_layersJs) {
      _export("Layers", _layersJs.Layers);
    }, function (_findJs) {
      _export("find", _findJs.find);
    }, function (_privateNodeJs) {
      _export("PrivateNode", _privateNodeJs.PrivateNode);
    }, function (_nodeActivatorJs) {
      _export("NodeActivator", _nodeActivatorJs.default);
    }],
    execute: function () {}
  };
});