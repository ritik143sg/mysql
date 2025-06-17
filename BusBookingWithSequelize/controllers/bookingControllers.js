const { Booking } = require("../models");

const addBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    const booking = await Booking.create({
      UserId: userId,
      BusId: busId,
      seatNumber: seatNumber,
    });
    res.status(201).json({ msg: "Booking Done", booking: booking });
  } catch (error) {
    res.status(500).json({ msg: "Booking not Done", error: error.message });
  }
};

module.exports = addBooking;
