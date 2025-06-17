const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/DB/DBconnection");

const Item = sequelize.define("Item", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  itemName: { allowNull: false, type: DataTypes.STRING },
  itemDesc: { allowNull: false, type: DataTypes.STRING },
  itemPrice: { allowNull: false, type: DataTypes.INTEGER },
  itemQyt: { allowNull: false, type: DataTypes.INTEGER },
});

module.exports = Item;
