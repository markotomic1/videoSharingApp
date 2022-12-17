import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controlers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a comment
router.post("/", verifyToken, addComment);

//delete comment

router.delete("/:id", verifyToken, deleteComment);

//get all comments

router.get("/:videoId", getComments);

export default router;
