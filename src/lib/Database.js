import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connected");
      });
  } catch (error) {
    console.error("Error: Something went wrong!", error);
  }
};
export default connectDB;


// https://cloud.mongodb.com/v2/67c292765dc24a5b1b317e60#/metrics/replicaSet/67c29374887435729fdb71cf/explorer/test/forms/find