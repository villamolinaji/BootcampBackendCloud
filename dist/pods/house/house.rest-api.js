"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.housesApi = void 0;

var _express = require("express");

var _dals = require("../../dals");

var _house = require("./house.mappers");

var _house2 = require("./house.helpers");

const housesApi = (0, _express.Router)();
exports.housesApi = housesApi;
housesApi.get('/country_code/:country_code', async (req, res, next) => {
  try {
    const {
      country_code
    } = req.params;
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const houseList = await _dals.houseRepository.getHouseListByCountry(country_code);
    const paginatedHouseList = (0, _house2.paginateHouseList)(houseList, page, pageSize);
    res.send((0, _house.mapHouseListFromModelToApi)(paginatedHouseList));
  } catch (error) {
    next(error);
  }
}).get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const house = await _dals.houseRepository.getHouse(id);
    res.send((0, _house.mapHouseFromModelToApi)(house));
  } catch (error) {
    next(error);
  }
}).post('/reviews', async (req, res, next) => {
  try {
    const newReview = await _dals.houseRepository.insertReview(req.body);
    res.status(201).send(newReview);
  } catch (error) {
    next(error);
  }
});