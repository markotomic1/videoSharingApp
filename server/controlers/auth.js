import User from "../models/Users.js";
import bcrypt from "bcrypt";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).json("User has been created");
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      return next(createError(404, "User not found"));
    }

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return next(createError(400, "Wrong credentials"));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

    const { password, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        SameSite: "Strict",
      })
      .status(200)
      .json(otherDetails);
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

      res
        .cookie("access_token", token, {
          httpOnly: true,
          SameSite: "Strict",
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({ ...req.body, fromGoogle: true });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_KEY);

      res
        .cookie("access_token", token, {
          httpOnly: true,
          SameSite: "Strict",
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (error) {
    next(error);
  }
};
