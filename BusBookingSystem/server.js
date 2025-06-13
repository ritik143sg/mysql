const express = require("express");

const dotenv = require("dotenv");
const usersRoute = require("./routes/usersRoute");

const app = express();
app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/api/users", usersRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
