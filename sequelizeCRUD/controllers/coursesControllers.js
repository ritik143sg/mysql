const { Course, Student } = require("../models");

const addCourses = async (req, res) => {
  try {
    const data = req.body;

    const course = await Course.create({ name: data.name });
    res.status(201).json({ msg: "Course has been created", course: course });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Course has not been created", error: error.messsage });
  }
};

const addStudentToCourses = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await Student.findByPk(studentId);

    const courses = await Course.findAll({
      where: {
        id: courseId,
      },
    });

    await student.addCourse(courses);

    const updatedStudent = await Student.findByPk(studentId, {
      include: Course,
    });
    res.status(201).json({
      msg: "StudentToCourse has been created",
      course: updatedStudent,
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Course has not been created", error: error.messsage });
  }
};

module.exports = { addCourses, addStudentToCourses };
