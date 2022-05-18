"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginateHouseList = void 0;

const paginateHouseList = (houseList, page, pageSize) => {
  let paginatedHouseList = [];

  if (Array.isArray(houseList)) {
    paginatedHouseList = [...houseList];

    if (page && pageSize) {
      const startIndex = (page - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
      paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
    }
  }

  return paginatedHouseList;
};

exports.paginateHouseList = paginateHouseList;