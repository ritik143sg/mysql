const connection = require("../utils/DB/dbConnection");

const getUsers = (req, res) => {
  //res.send("<h1>Get Users</h1>");

  const query = "select * from Users ";

  connection.execute(query, (err, results) => {
    if (err) {
      console.error("Get Users failed:", err);
      res.status(500).send("Database error");
      connection.end();
    } else {
      res.status(200).json({ message: "Get Users", results: results });
    }
  });
};

const addUsers = (req, res) => {
  const user = req.body;

  console.log(user);

  const query = "INSERT  into Users (name, email) VALUES (?, ?)";
  connection.execute(query, [user.name, user.email], (err, results) => {
    if (err) {
      console.error("Insert failed:", err);
      res.status(500).send("Database error");
      connection.end();
    } else {
      res.status(200).json({ message: "User added", userId: results.insertId });
    }
  });
};

const updateUsers = (req, res) => {
  const newUser = req.body;
  const id = req.params.id;

  console.log(newUser);

  let query = `select * from Users where id = ${id}`;

  const result = connection.execute(query, (err, results) => {
    if (err) {
      console.error("fetch failed:", err);
      res.status(500).send("Database error");
      connection.end();
      console.log(err, results);
    } else {
      console.log(results);

      if (results.length > 0) {
        query = "update Users set name = ? , email = ? where id = ?";
        connection.execute(
          query,
          [newUser.name, newUser.email, id],
          (err, results) => {
            if (err) {
              console.error("Update failed:", err);
              res.status(500).send("Database error");
            } else {
              res.status(200).json({ message: "User updated" });
            }
          }
        );
      } else {
        res.status(500).json({ message: "User Not Found" });
        connection.end();
      }
    }
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  const query = `DELETE from Users where id = ${id}`;
  connection.execute(query, (err, results) => {
    if (err) {
      console.error("Delete failed:", err);
      res.status(500).send("Database error");
      connection.end();
    } else if (results.affectedRows == 0) {
      console.error("Delete failed:", err);
      res.status(500).send("User Not Found");
      connection.end();
    } else {
      res.status(200).json({ message: "User deleted" });
    }
  });
};

module.exports = { getUsers, addUsers, updateUsers, deleteUser };
