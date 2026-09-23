var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');

router.post('/', (req, res) => {
  const newBooking = new Booking({
    user: req.body.user,
    trip: req.body.trip,
    booking: false,
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

router.put('/:_id', (req, res) => {
  Booking.updateOne(
    { _id: req.params._id },
    { user: req.body.user, trip: req.body.trip, booking: req.body.booking }
  )
    .then(result => {
      // matchedCount : a-t-on trouvé le document ?
      if (result.matchedCount === 0) {
        return res.json({ result: false, error: 'Élément introuvable' });
      }
      // modifiedCount : la valeur envoyée était-elle différente de l'ancienne ?
      if (result.modifiedCount === 0) {
        return res.json({ result: true, message: 'Aucun changement' });
      }
      res.json({ result: true });
    })
    .catch(() => res.json({ result: false, error: 'Erreur serveur' }));
});

router.delete('/:_id', (req, res) => {
  Booking.deleteOne({ _id: req.params._id })
    .then(result => {
      // deletedCount à 0 signifie que rien ne correspondait : c'est un 404, pas un succès.
      if (result.deletedCount === 0) {
        return res.json({ result: false, error: 'Élément introuvable' });
      }
      res.json({ result: true });
    })
    .catch(() => res.json({ result: false, error: 'Erreur serveur' }));
});

module.exports = router;