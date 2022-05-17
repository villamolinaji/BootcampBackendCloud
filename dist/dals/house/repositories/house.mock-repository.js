"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRepository = void 0;

var _mockData = require("../../mock-data");

var _house = require("../../../pods/house/house.mappers");

const insertReview = review => {
  let house = _mockData.db.houses.find(h => h._id === review.house_id);

  review.id = (house.reviews.length + 1).toString();
  house.reviews.push((0, _house.mapReviewFromApiToModel)(review));
  return (0, _house.mapReviewFromModelToApi)(house.reviews.pop());
};

const mockRepository = {
  getHouseListByCountry: async country_code => _mockData.db.houses.filter(h => {
    var _h$address;

    return ((_h$address = h.address) === null || _h$address === void 0 ? void 0 : _h$address.country_code) === country_code;
  }),
  getHouse: async id => _mockData.db.houses.find(h => h._id === id),
  insertReview: async review => insertReview(review)
};
exports.mockRepository = mockRepository;