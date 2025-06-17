const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./utils/DB/dbConnect");
const expenseRoute = require("./routes/expenseRoute");

const app = express();

app.use(cors());

dotenv.config();

app.use(express.json());

app.use("/api/expense", expenseRoute);

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
