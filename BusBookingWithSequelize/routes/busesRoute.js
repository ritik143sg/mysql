const express = require("express");
const {
  getBuses,
  addBuses,
  getBusWithBooking,
} = require("../controllers/busesControllers");

const busesRoutes = express.Router();

busesRoutes.get("/available/:seats", getBuses);
busesRoutes.post("/add", addBuses);
busesRoutes.get("/:id/booking", getBusWithBooking);

module.exports = busesRoutes;
