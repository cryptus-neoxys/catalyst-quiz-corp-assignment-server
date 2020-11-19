import jwt from "jsonwebtoken";

import { SECRET_KEY } from "../config.js";

export const auth = (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "2h" }
  );

  return {
    ...user._doc,
    token,
  };
};
