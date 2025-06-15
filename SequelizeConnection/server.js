const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./utils/DB/dbConnection");
const Student = require("./models/studentModel");

const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on The PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
