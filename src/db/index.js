// yaha par hum ek db kon connect karenge kiske madad se mongoose ka madad se
import mongoose from "mongoose";
// abb db name kon bhi import karna padega warna nahi hoga connect DB
import { DB_NAME } from "../constants.js";

// yaha par connectDb name ka variable banaya hai
const connectDB = async () => {
  try {
    // yaha ek connection instance ka varible main store karwaya hai..!!
    const connectionInstance = await mongoose.connect(
      // yaha par DB kon connect kiya hai mongoose ka saath, Mongoose.connect
      `${process.env.MONGODB_URI}/${DB_NAME}`
      //   DB_connection hogaya ab hume ek connection Instance kon console.log karwake dekhna hai..
    );
    // console.log(`/n`, "Error while hosting the Db", ${connectionInstance});
  } catch (error) {
    console.log("Error while fetching the MongoDb", error);
    process.exit(1);
  }
};

// abb yaha par hume isko export default karna hoga
export default connectDB;
