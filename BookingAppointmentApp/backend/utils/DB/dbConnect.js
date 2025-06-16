const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("BookingAppointmentApp", "root", "22523233", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Connection Error");
  }
})();

module.exports = sequelize;
