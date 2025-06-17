const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/DB/dbConnect");

const Expense = sequelize.define("Expense", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  expenseAmount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: { allowNull: false, type: DataTypes.STRING },
});

module.exports = Expense;
