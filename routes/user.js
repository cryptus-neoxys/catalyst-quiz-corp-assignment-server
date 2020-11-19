import express, { Router } from "express";

import { getUser, signUp, login } from "../controllers/user.js";

const router = new Router();

router.get("/", getUser);
router.post("/signup", signUp);
router.post("/login", login);

export default router;
