const express = require("express");
const addBooking = require("../controllers/bookingControllers");

const bookingRoutes = express.Router();

bookingRoutes.post("/add", addBooking);

module.exports = bookingRoutes;
