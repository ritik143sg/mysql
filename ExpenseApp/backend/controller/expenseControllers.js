const Expense = require("../model/expenseModel");

const getAllExpense = async (req, res) => {
  try {
    const expenses = await Expense.findAll();

    if (expenses.length == 0) {
      res.status(500).json({ msg: "Expenses Not Found" });
    }

    res.status(201).json({ msg: "Expense Fetched", expense: expenses });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Expenses Fetched Failed", error: error.message });
  }
};

const addExpense = async (req, res) => {
  try {
    const data = req.body;

    const expense = await Expense.create({
      expenseAmount: data.expenseAmount,
      description: data.description,
      category: data.category,
    });

    res.status(201).json({ msg: "Expense Added", expense: expense });
  } catch (error) {
    res.status(500).json({ msg: "Expense Added Failed", error: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const expense = await Expense.findByPk(id);
    if (expense.length == 0) {
      res.status(500).json({ msg: "Expense not found" });
    }

    await Expense.destroy({
      where: {
        id: id,
      },
    });

    res.status(201).json({ msg: "Expense deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Expenses delete Failed", error: error.message });
  }
};
const editExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const expense = await Expense.findByPk(id);

    if (!expense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    await Expense.update(
      {
        expenseAmount: data.expenseAmount,
        discription: data.discription,
        category: data.category,
      },
      {
        where: { id },
      }
    );

    res.status(200).json({ msg: "Expense edited successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Expense edit failed", error: error.message });
  }
};

module.exports = { getAllExpense, addExpense, editExpense, deleteExpense };
