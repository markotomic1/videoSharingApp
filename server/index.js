import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentsRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("connected to db"))
    .catch((err) => {
      throw err;
    });
};

//middlwares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentsRoutes);

//errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  return res
    .status(status)
    .json({ success: false, status: status, msg: message });
});

app.listen(8800, () => {
  connect();
  console.log("connected to server");
});
