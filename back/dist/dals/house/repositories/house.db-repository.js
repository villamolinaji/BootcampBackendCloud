"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRepository = void 0;

var _mongodb = require("mongodb");

var _servers = require("../../../core/servers");

var _house = require("../../../pods/house/house.mappers");

const dbRepository = {
  getHouseListByCountry: async country_code => {
    const db = (0, _servers.getDBInstance)();
    return await db.collection('listingsAndReviews').find({
      "address.country_code": country_code
    }, {
      projection: {
        _id: 1,
        name: 1,
        "images.picture_url": 1
      }
    }).toArray();
  },
  getHouse: async id => {
    const db = (0, _servers.getDBInstance)();
    return await db.collection('listingsAndReviews').findOne({
      _id: id
    }, {
      projection: {
        _id: 1,
        name: 1,
        summary: 1,
        "address.street": 1,
        "address.market": 1,
        "address.country": 1,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        "images.picture_url": 1,
        reviews: 1
      }
    });
  },
  insertReview: async review => {
    const db = (0, _servers.getDBInstance)();
    review.id = new _mongodb.ObjectId().toHexString();
    const {
      value
    } = await db.collection('listingsAndReviews').findOneAndUpdate({
      _id: review.house_id
    }, {
      $push: {
        reviews: (0, _house.mapReviewFromApiToModel)(review)
      }
    }, {
      returnDocument: 'after',
      projection: {
        reviews: 1
      }
    });
    return (0, _house.mapReviewFromModelToApi)(value === null || value === void 0 ? void 0 : value.reviews.sort(_house.compareReviewsDateDesc)[0]);
  }
};
exports.dbRepository = dbRepository;