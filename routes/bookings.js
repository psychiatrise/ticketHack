var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');

router.post('/', (req, res) => {
  const newBooking = new Booking({
    departure: req.body.departure,
    arrival: req.body.arrival,
    hour: req.body.hour,
    price: req.body.price,
    time: req.body.time,
  });

  newBooking.save()
    .then(saved => res.json({ result: true, booking: saved }))
    .catch(error => {
      console.error(error);
      res.json({ result: false, error: 'Erreur serveur' });
    });
});

router.get('/', (req, res) => {
  Booking.find()
    .then(data => res.json({ result: true, bookings: data }))
    .catch(() => res.json({ result: false, error: 'Erreur serveur' }));
});

module.exports = router;