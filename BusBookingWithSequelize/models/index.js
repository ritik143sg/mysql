const Booking = require("./bookingModel");
const Buses = require("./busModel");
const Users = require("./userModel");

// One to Many { user - Booking}

Users.hasMany(Booking);
Booking.belongsTo(Users);

// One to Many {Booking - Buses}

Buses.hasMany(Booking);
Booking.belongsTo(Buses);

module.exports = { Users, Booking, Buses };
