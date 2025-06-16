const Department = require("./departmentModel");
const IdCard = require("./idCardModel");
const Student = require("./studentModel");

// One To One

Student.hasOne(IdCard);

IdCard.belongsTo(Student);

// Many To Many

Department.hasMany(Student);
Student.belongsTo(Department);

module.exports = { Student, IdCard, Department };
