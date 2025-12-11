import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://divyam7246:divyam123@cluster0.i03ngg8.mongodb.net/Express";

  await mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database Connected");
  });
};
