const User = require("../models/userModel");

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length == 0) {
      res.status(500).send("User Not Found");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, phoneNo } = req.body;
    if (!name || !email || !phoneNo) {
      return res.status(400).json({ msg: "Please fill all input fields" });
    }

    const user = await User.create({ name, email, phoneNo });
    res.status(201).json({ msg: "User Added", user });
  } catch (error) {
    res.status(500).json({ msg: "User Add Failed", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const user = await User.findByPk(id);
    if (!user) {
      res.status(500).json({ msg: "User Not Found" });
    }

    await User.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({ msg: "User deleted", user: user });
  } catch (error) {
    res.status(500).json({ msg: "User delete Fail", msg: error.message });
  }
};

module.exports = { getAllUser, addUser, deleteUser };
