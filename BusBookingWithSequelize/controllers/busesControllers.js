const { Op } = require("sequelize");
const Buses = require("../models/busModel");

const getBuses = async (req, res) => {
  const seats = req.params.seats;

  try {
    const bus = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });
    if (bus.length == 0) {
      res.status(500).send("Bus not Found ");
    }
    res.status(200).json({ message: "Get Bus", bus: bus });
  } catch (error) {
    console.error("Getting failed:", error);
    res.status(500).send("Database error");
  }
};

const addBuses = async (req, res) => {
  const bus = req.body;
  console.log(bus);

  try {
    const buses = await Buses.create({
      busNumber: bus.busNumber,
      totalSeats: bus.totalSeats,
      availableSeats: bus.availableSeats,
    });
    res.status(200).json({ message: "Bus Added", busId: buses.insertId });
  } catch (error) {
    console.error("Adding failed:", error);
    res.status(500).send("Database error");
  }
};

module.exports = { getBuses, addBuses };
