const Course = require("./courseModel");
const Department = require("./departmentModel");
const IdCard = require("./idCardModel");
const StudentCourse = require("./studentCourseModel");
const Student = require("./studentModel");

// One To One

Student.hasOne(IdCard);

IdCard.belongsTo(Student);

// One To Many

Department.hasMany(Student);
Student.belongsTo(Department);

// Many to Many

Student.belongsToMany(Course, { through: StudentCourse });
Course.belongsToMany(Student, { through: StudentCourse });

module.exports = { Student, IdCard, Department, StudentCourse, Course };
