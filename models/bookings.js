const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
  booking: { type: Boolean},
});

// Le premier argument est le nom exact de la collection dans MongoDB.
const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;