const express = require("express");
const { getBuses, addBuses } = require("../controllers/busesControllers");

const busesRoutes = express.Router();

busesRoutes.get("/available/:seats", getBuses);
busesRoutes.post("/", addBuses);

module.exports = busesRoutes;
