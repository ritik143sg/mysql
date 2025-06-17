const express = require("express");
const {
  getAllExpense,
  addExpense,
  editExpense,
  deleteExpense,
} = require("../controller/expenseControllers");

const expenseRoute = express.Router();

expenseRoute.get("/", getAllExpense);
expenseRoute.post("/add", addExpense);
expenseRoute.put("/:id", editExpense);
expenseRoute.delete("/:id", deleteExpense);

module.exports = expenseRoute;
