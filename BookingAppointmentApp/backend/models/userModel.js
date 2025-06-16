const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/DB/dbConnect");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: { type: DataTypes.STRING, allowNull: false },
  phoneNo: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
