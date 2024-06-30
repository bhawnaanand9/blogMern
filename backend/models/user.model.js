import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique },
    email: { type: String, required: true, unique },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
