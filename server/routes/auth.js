import express from "express";
import { login, register } from "../controlers/auth.js";

const router = express.Router();

// create a user
router.post("/register", register);

//sign in
router.post("/login", login);
//google auth
router.post("/google");

export default router;
