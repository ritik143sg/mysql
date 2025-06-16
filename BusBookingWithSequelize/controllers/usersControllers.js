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

module.exports = { getUsers, addUsers };
