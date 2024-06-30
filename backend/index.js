import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
const app = express();
import authRoutes from "./routes/auth.route.js";

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
