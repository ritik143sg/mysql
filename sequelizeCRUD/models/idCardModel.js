const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/DB/dbConnection");

const IdCard = sequelize.define("IdCard", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cardNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = IdCard;
