const express = require("express");
const {
  addCourses,
  addStudentToCourses,
} = require("../controllers/coursesControllers");

const courseRoute = express.Router();

courseRoute.post("/add", addCourses);
courseRoute.post("/addStudentTocourse", addStudentToCourses);

module.exports = courseRoute;
