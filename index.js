import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/user.js";
import expenseRoutes from "./routes/expense.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.use("/user", userRoutes);
app.use("/expense", expenseRoutes);

const MONGO_URI =
  "mongodb+srv://test-user:mongoDBpass@cluster0.oktpr.mongodb.net/test?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => console.log(`server up at: ${PORT}`));
  })
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
