const connection = require("../utils/DB/dbConnection");

const getAllStudents = (req, res) => {
  const query = `select * from Students `;
  connection.execute(query, (err, results) => {
    if (err) {
      console.error("Getting failed:", err);
      res.status(500).send("Database error");
    } else if (results.length == 0) {
      res.status(500).send("User Not Found");
      connection.end();
    } else {
      res.status(200).json({ message: "Gets All Students", Students: results });
    }
  });
};

const addStudent = (req, res) => {
  const student = req.body;
  if (!student || !student.name || !student.email || !student.age) {
    res.status(500).send("Missing Student Details error");
  }

  const query = `insert into Students (name ,email ,age) values(?,?,?)`;

  connection.execute(
    query,
    [student.name, student.email, student.age],
    (err, results) => {
      if (err) {
        console.error("Adding failed:", err);
        res.status(500).send("Database error");
      } else {
        res
          .status(200)
          .json({ message: "Student Added", StdId: results.insertId });
      }
    }
  );
};

const updateStudent = (req, res) => {
  const newUser = req.body;
  const id = req.params.id;

  const query = `update Students set name = ? , email = ? , age = ?  where id = ${id}`;

  connection.execute(
    query,
    [newUser.name, newUser.email, newUser.age],
    (err, results) => {
      if (err) {
        console.error("update failed:", err);
        res.status(500).send("Database error");
        connection.end();
      } else if (results.affectedRows == 0) {
        res.status(500).send("User Not Found");
        connection.end();
      } else {
        res.status(200).json({ message: "User Updated" });
      }
    }
  );
};

const deleteStudent = (req, res) => {
  const id = req.params.id;

  const query = `DELETE from Students where id = ${id}`;
  connection.execute(query, (err, results) => {
    if (err) {
      console.error("Delete failed:", err);
      res.status(500).send("Database error");
      connection.end();
    } else if (results.affectedRows == 0) {
      res.status(500).send("User Not Found");
      connection.end();
    } else {
      res.status(200).json({ message: "Student deleted" });
    }
  });
};

const getStudentById = (req, res) => {
  const id = req.params.id;
  const query = `select * from Students where id = ${id}`;
  connection.execute(query, (err, results) => {
    if (err) {
      console.error("Getting failed:", err);
      res.status(500).send("Database error");
    } else if (results.length == 0) {
      res.status(500).send("User Not Found");
      connection.end();
    } else {
      res.status(200).json({ message: "Gets Student", Student: results });
    }
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
