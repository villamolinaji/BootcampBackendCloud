"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.houseRepository = void 0;

var _house = require("./house.mock-repository");

var _house2 = require("./house.db-repository");

var _constants = require("../../../core/constants");

const houseRepository = _constants.envConstants.isApiMock ? _house.mockRepository : _house2.dbRepository;
exports.houseRepository = houseRepository;