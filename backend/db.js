import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "zoom",
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};
