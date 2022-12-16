import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controlers/video.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);
//update video
router.put("/:id", verifyToken, updateVideo);
//delete video
router.delete("/:id", verifyToken, deleteVideo);
//get video
router.get("/find/:id", getVideo);

//update video views
router.put("/view/:id", addView);

//get trend videos
router.get("/trend", trend);

//get random videos
router.get("/random", random);

//subscribed channels videos
router.get("/sub", verifyToken, sub);

//get videos by tags
router.get("/tags", getByTag);

//get videos by title
router.get("/search", search);

export default router;
