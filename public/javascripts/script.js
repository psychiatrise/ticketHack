document.querySelector('#button').addEventListener('click', function() {

    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#date').value;

    fetch('http://localhost:3000/trips', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            departure: departure,
            arrival: arrival,
            date : date,
        })
    })
    .then(response => response.json())
    .then(data => {

        const result = document.querySelector('.find');

        result.innerHTML = '';

        data.Trips.forEach(trip => {
            result.innerHTML += `
                <div class="line">
                  <span class="departure">${trip.departure}</span>
                  <span class="arrival">${trip.arrival}</span>
                  <span class="heure">${trip.date}</span>
                  <span class="heure">${trip.heure}</span>
                  <span class="price">${trip.price}€</span>
                  <a href="./cart.html?id=${trip._id}">Book</a>
                </div>
            `;
        });
        



    })
    .catch(error => {
        console.log(error);
    });
});
