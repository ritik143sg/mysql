const express = require("express");
const {
  getAllItem,
  addItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const itemRoute = express.Router();

itemRoute.get("/", getAllItem);
itemRoute.post("/add", addItem);
itemRoute.patch("/:id", updateItem);
itemRoute.delete("/:id", deleteItem);

module.exports = itemRoute;
