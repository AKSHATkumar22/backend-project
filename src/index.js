// yeh ek bas tarike hai sikhne ka liye dotnev kon call karwane ka liye
// require("dotenv").config({ path: "./env" });

// yaha par hum mongoose yani kii db kon connect karenge
import connectDB from "./db/index.js";

// dusra aur ek tarika hai isko seekhne ka liye
// kii, yeh best tarika hai dotenv kon call karwane ka
dotenv.config({
  path: "./env",
});

// direct execution ka liye use hoga yaha par
connectDB();
// // abb Db kon connect karna hai hume toh kaise karoge
// function connectDb() {}

// // abb call karwa don isko isme se
// connectDb();

// abb dusra tarika kya hai isko connect karne ka
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw err;
//   }
// })();
