const Student = require("../models/studentModel");

const getAllStudent = async (req, res) => {
  try {
    const student = await Student.findAll();
    console.log(student);
    if (student.length == 0) {
      res.status(404).json("User Not Found");
    }
    res.status(200).json(student);
  } catch (error) {
    res.send(error);
  }
};
const insertStudent = async (req, res) => {
  try {
    const data = req.body;
    const student = await Student.create({
      name: data.name,
      email: data.email,
    });
    student.save();
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
  }
};
const updateStudent = async (req, res) => {
  try {
    const data = req.body;

    const id = req.params.id;

    const student = await Student.findByPk(id);

    if (!student) {
      res.status(404).json("User Not Found");
    }

    student.name = data.name;
    student.email = data.email;

    student.save();

    res.status(200).json("User updated", student);
  } catch (error) {
    console.log(error);
  }
};
const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Student.findByPk(id);

    if (!student) {
      res.status(404).json("User Not Found");
    }

    await Student.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json("User deleted", student);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllStudent, insertStudent, updateStudent, deleteStudent };
