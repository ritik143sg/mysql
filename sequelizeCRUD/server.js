const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./utils/DB/dbConnection");
require("./models");
const studentRoute = require("./routes/studentRoutes");
const courseRoute = require("./routes/courseRoute");

const app = express();

dotenv.config();

app.use(express.json());

app.use("/api/student", studentRoute);
app.use("/api/course", courseRoute);

const PORT = process.env.PORT;

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on The PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
