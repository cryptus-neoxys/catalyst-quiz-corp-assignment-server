import { Router } from "express";

import { getExpenses, createExpense } from "../controllers/expense.js";

const router = new Router();

router.get("/", getExpenses);
router.post("/", createExpense);

export default router;
