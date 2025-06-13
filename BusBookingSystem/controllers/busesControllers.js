const connection = require("../utils/DB/dbConnection");

const getBuses = (req, res) => {
  const seats = req.params.seats;

  const query = `select * from Buses where availableSeats > ${seats} `;
  connection.execute(query, (err, results) => {
    if (err) {
      console.error("Getting failed:", err);
      res.status(500).send("Database error");
    } else {
      res.status(200).json({ message: "Get Bus", bus: results });
    }
  });
};

const addBuses = (req, res) => {
  const bus = req.body;
  console.log(bus);

  const query = `insert into Buses (busNumber ,totalSeats ,availableSeats) values(?,?,?)`;

  connection.execute(
    query,
    [bus.busNumber, bus.totalSeats, bus.availableSeats],
    (err, results) => {
      if (err) {
        console.error("Adding failed:", err);
        res.status(500).send("Database error");
      } else {
        res.status(200).json({ message: "Bus Added", busId: results.insertId });
      }
    }
  );
};

module.exports = { getBuses, addBuses };
