const express = require("express");
const {
  getAllStudent,
  insertStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentControllers");

const studentRoute = express.Router();

studentRoute.get("/", getAllStudent);
studentRoute.post("/add", insertStudent);
studentRoute.put("/:id", updateStudent);
studentRoute.delete("/:id", deleteStudent);

module.exports = studentRoute;
