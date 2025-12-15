import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    userOrder: { type: Object, default: {} },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export const Person = mongoose.model("Person", personSchema);
