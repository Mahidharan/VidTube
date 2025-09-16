import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInsatance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );

    console.log(`MongoDB connected✅ DB_Host:${connectionInsatance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error❌", error);
    process.exit(1);
  }
};

export default connectDB;
