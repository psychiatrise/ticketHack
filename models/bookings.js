const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  departure: { type: String, trim: true },
  arrival: { type: String, trim: true },
  hour: { type: String, trim: true },
  price: { type: String, trim: true },
  time: { type: String, trim: true },
});

// Le premier argument est le nom exact de la collection dans MongoDB.
const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;