import { envConstants } from "core/constants";
import { connectToDBServer, getDBInstance } from "core/servers";
import { House } from "dals";
import { db } from "dals/mock-data";

export const run = async () => {
  await connectToDBServer(envConstants.MONGODB_URI);
  const dbMongo = getDBInstance();
  let idToUse = (db.houses.length + 1).toString();
  for (const house of db.houses) {
    house._id = idToUse;
    dbMongo.collection<House>("listingsAndReviews").insertOne(house);
    let id = (db.houses.length + 1).toString();
  }
};
