import User from "../models/User.js";
import { auth } from "../util/auth.js";

export const getUser = async (req, res) => {
  console.log("getUser");
  try {
    const users = await User.find();
    console.log("getUser success");
    res.status(200).json(users);
  } catch (error) {
    console.log("getUser error");

    res.status(401).json({ message: error });
  }
};

export const signUp = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);
  console.log("createUser");

  const getUser = await User.findOne({ email: user.email });

  if (!getUser)
    try {
      await newUser.save();
      console.log("User Created");
      res.status(201).json(newUser);
    } catch (error) {
      console.log("createUser error");

      res.status(401).json({ message: error });
    }
};

export const login = async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      console.error("User does not exists");

      res.status(401).json({ message: "User does not exists" });
    } else {
      if (user.password === userData.password) {
        const athorisedUser = auth(user);
        res.status(200).json({ athorisedUser });
      } else {
        res.status(403).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    console.log("login error");

    res.status(401).json({ message: error.message });
  }
};
