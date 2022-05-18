"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _house = require("./house.model");

Object.keys(_house).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _house[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _house[key];
    }
  });
});

var _repositories = require("./repositories");

Object.keys(_repositories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _repositories[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repositories[key];
    }
  });
});