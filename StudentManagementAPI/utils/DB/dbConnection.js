const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: "StudentManagementAPI",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("StudentManagementAPI Database Connected");

  // const createUsersTable = `CREATE TABLE Students (
  //   id INT AUTO_INCREMENT PRIMARY KEY,
  //   name VARCHAR(50),
  //   email VARCHAR(50),
  //   age INT
  // )`;

  // connection.execute(createUsersTable, (err) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("Students TABLE created");
  // });
});

module.exports = connection;
