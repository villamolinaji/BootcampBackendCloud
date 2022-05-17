"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _house = require("./house.rest-api");

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