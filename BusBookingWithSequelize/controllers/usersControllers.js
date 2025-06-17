const { Booking, Buses } = require("../models");
const Users = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    if (users.length == 0) {
      res.status(500).send("Users Not Found");
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("fetching failed:", error);
    res.status(500).send("Database error");
  }
};

const addUsers = async (req, res) => {
  const user = req.body;

  console.log(user);

  try {
    const users = await Users.create({
      name: user.name,
      email: user.email,
    });
    if (users) {
      res.status(200).json({ message: "User added", userId: users.insertId });
    }
  } catch (err) {
    console.error("Insert failed:", err);
    res.status(500).send("Database error");
  }
};

const getUserWithBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const bookings = await Booking.findAll({
      where: { UserId: id },
      include: [
        {
          model: Buses,
          attributes: ["busNumber"],
        },
      ],
    });

    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for this user." });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUsers, addUsers, getUserWithBooking };
