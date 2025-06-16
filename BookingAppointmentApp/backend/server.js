const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const sequelize = require("./utils/DB/dbConnect");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);

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
