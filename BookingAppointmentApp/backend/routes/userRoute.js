const express = require("express");
const {
  getAllUser,
  addUser,
  deleteUser,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/", getAllUser);
userRoute.post("/", addUser);
userRoute.delete("/:id", deleteUser);

module.exports = userRoute;
