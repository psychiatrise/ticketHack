require('dotenv').config();
require('./models/connection');
const trips = require('./trips.json');
const Trip = require('./models/trips');
const moment = require('moment')


const tripsFormatted = trips.map(trip => ({
    departure: trip.departure,
    arrival: trip.arrival,
    date: moment(trip.date.$date).format("YYYY-MM-DD"),
    heure:  moment(trip.date.$date).format("HH:mm"),
    price: trip.price
}));


Trip.insertMany(tripsFormatted)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });