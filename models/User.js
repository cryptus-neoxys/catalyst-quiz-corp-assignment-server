import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  expense: {
    name: String,
    category: String,
    amount: Number,
    date: Date,
  },
});

export default mongoose.model("User", userSchema);
