require('./models/connection');
const trips = require('./trips.json');
const Trip = require('./models/trips');


const tripsFormatted = trips.map(trip => ({
    departure: trip.departure,
    arrival: trip.arrival,
    date: new Date(trip.date.$date),
    price: trip.price
}));


Trip.insertMany(tripsFormatted)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });