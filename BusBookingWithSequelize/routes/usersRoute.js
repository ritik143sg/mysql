const express = require("express");
const { getUsers, addUsers } = require("../controllers/usersControllers");

const usersRoute = express.Router();

usersRoute.get("/", getUsers);
usersRoute.post("/", addUsers);

module.exports = usersRoute;
