const express = require("express");
const {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  addStudent,
} = require("../controllers/studentControllers");

const studentRoutes = express.Router();

studentRoutes.get("/", getAllStudents);
studentRoutes.get("/:id", getStudentById);
studentRoutes.post("/", addStudent);
studentRoutes.put("/:id", updateStudent);
studentRoutes.delete("/:id", deleteStudent);

module.exports = studentRoutes;
