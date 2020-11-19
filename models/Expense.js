import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  email: String,
  name: String,
  category: String,
  amount: Number,
  date: {
    type: Date,
    default: Date(),
  },
});

export default mongoose.model("Expense", expenseSchema);
