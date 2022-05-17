"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareReviewsDateDesc = compareReviewsDateDesc;
exports.mapReviewsListFromModelToApi = exports.mapReviewFromModelToApi = exports.mapReviewFromApiToModel = exports.mapHouseListFromModelToApi = exports.mapHouseFromModelToApi = void 0;

const mapHouseFromModelToApi = house => {
  var _house$address, _house$address2, _house$address3;

  return {
    id: house._id,
    title: house.name,
    description: house.summary,
    street: (_house$address = house.address) === null || _house$address === void 0 ? void 0 : _house$address.street,
    city: (_house$address2 = house.address) === null || _house$address2 === void 0 ? void 0 : _house$address2.market,
    country: (_house$address3 = house.address) === null || _house$address3 === void 0 ? void 0 : _house$address3.country,
    bedrooms: house.bedrooms,
    beds: house.beds,
    bathrooms: house.bathrooms,
    image: house.images.picture_url,
    reviews: mapReviewsListFromModelToApi(house.reviews, house._id)
  };
};

exports.mapHouseFromModelToApi = mapHouseFromModelToApi;

const mapReviewsListFromModelToApi = (reviewList, house_id) => {
  if (Array.isArray(reviewList)) {
    let topReviewsList = reviewList === null || reviewList === void 0 ? void 0 : reviewList.sort(compareReviewsDateDesc).slice(0, 5).map(mapReviewFromModelToApi);
    topReviewsList.forEach(x => x.house_id = house_id);
    return topReviewsList;
  } else {
    return [];
  }
};

exports.mapReviewsListFromModelToApi = mapReviewsListFromModelToApi;

const mapReviewFromModelToApi = review => ({
  id: review._id,
  date: review.date,
  reviewer_name: review.reviewer_name,
  comments: review.comments,
  house_id: ''
});

exports.mapReviewFromModelToApi = mapReviewFromModelToApi;

const mapHouseListFromModelToApi = houseList => Array.isArray(houseList) ? houseList.map(mapHouseFromModelToApi) : [];

exports.mapHouseListFromModelToApi = mapHouseListFromModelToApi;

function compareReviewsDateDesc(a, b) {
  if (a.date < b.date) {
    return 1;
  }

  if (a.date > b.date) {
    return -1;
  }

  return 0;
}

const mapReviewFromApiToModel = review => ({
  _id: review.id,
  comments: review.comments,
  date: new Date(),
  listing_id: '',
  reviewer_id: '',
  reviewer_name: review.reviewer_name
});

exports.mapReviewFromApiToModel = mapReviewFromApiToModel;