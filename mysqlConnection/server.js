const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "22523233",
  database: "testDB",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database Connected");

  const createTable = `CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
  )`;

  connection.execute(createTable, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Student TABLE created");
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
