const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./utils/DB/dbConnection");
require("./models");

const usersRoute = require("./routes/usersRoute");
const busesRoutes = require("./routes/busesRoute");
const bookingRoutes = require("./routes/bookingRoute");

const app = express();

dotenv.config();

app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoutes);
app.use("/api/booking", bookingRoutes);

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
