const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./utils/DB/DBconnection");
const itemRoute = require("./routes/itemRoute");

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/item", itemRoute);

const PORT = process.env.PORT || 4000;

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
