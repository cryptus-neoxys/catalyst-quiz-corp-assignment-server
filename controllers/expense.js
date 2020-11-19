import Expense from "../models/Expense.js";

export const getExpenses = async (req, res) => {
  const { email } = req.body;

  console.log("getExpenses");
  try {
    const expenses = await Expense.find({ email });
    console.log("getExpenses success");

    res.status(200).json({ data: expenses });
  } catch (error) {
    console.log("getExpenses error");

    res.status(401).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const expense = req.body;

  const email = expense.email;
  const newExpense = new Expense(expense);

  console.log("createExpense");

  try {
    await newExpense.save();
    console.log("Expense Created");
    res.status(201).json(newExpense);
  } catch (error) {
    console.log("createExpense error");

    res.status(401).json({ message: error.message });
  }
};
