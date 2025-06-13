const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("BusBookingSystem Database Connected");

  const createUsersTable = `CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
  )`;

  connection.execute(createUsersTable, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Users TABLE created");
  });

  const createBusesTable = `CREATE TABLE Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50),
    totalSeats INT,
    availableSeats INT
  )`;

  connection.execute(createBusesTable, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Buses TABLE created");
  });

  const createBookingTable = `CREATE TABLE Booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
  )`;

  connection.execute(createBookingTable, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Booking TABLE created");
  });

  const createPaymentsTable = `CREATE TABLE Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus VARCHAR(10)
  )`;

  connection.execute(createPaymentsTable, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Payments TABLE created");
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
