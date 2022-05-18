"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDBInstance = exports.connectToDBServer = void 0;

var _mongodb = require("mongodb");

let dbInstance;

const connectToDBServer = async connectionURI => {
  const client = new _mongodb.MongoClient(connectionURI);
  await client.connect();
  dbInstance = client.db();
};

exports.connectToDBServer = connectToDBServer;

const getDBInstance = () => dbInstance;

exports.getDBInstance = getDBInstance;