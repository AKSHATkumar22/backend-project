// yaha par hum mongoose yani kii db kon connect karenge
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

// // abb Db kon connect karna hai hume toh kaise karoge
// function connectDb() {}

// // abb call karwa don isko isme se
// connectDb();

// abb dusra tarika kya hai isko connect karne ka
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
