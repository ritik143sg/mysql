const express = require("express");
const {
  getUsers,
  addUsers,
  getUserWithBooking,
} = require("../controllers/usersControllers");

const usersRoute = express.Router();

usersRoute.get("/", getUsers);
usersRoute.post("/add", addUsers);
usersRoute.get("/:id/booking", getUserWithBooking);

module.exports = usersRoute;
