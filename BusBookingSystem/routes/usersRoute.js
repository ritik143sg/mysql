const express = require("express");
const {
  getUsers,
  addUsers,
  updateUsers,
  deleteUser,
} = require("../controllers/usersControllers");

const usersRoute = express.Router();

usersRoute.get("/", getUsers);
usersRoute.post("/", addUsers);
usersRoute.put("/:id", updateUsers);
usersRoute.delete("/:id", deleteUser);

module.exports = usersRoute;
