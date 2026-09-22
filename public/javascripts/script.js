document.querySelector('#button').addEventListener('click', function() {

    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;

    fetch('http://localhost:3000/trips', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            departure: departure,
            arrival: arrival
        })
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);

        const result = document.querySelector('.find');

        result.innerHTML = '';

        data.Trips.forEach(trip => {
            result.innerHTML += `
                <div class="line">
                  <span class="departure">${trip.departure}</span>
                   > 
                  <span class="arrival">Lyon</span>
                  <span class="Hour">16:23</span>
                  <span class="price">126€</span>
                  <a href="cart.html">Book</a>
                </div>
            `;
        });

    })
    .catch(error => {
        console.log(error);
    });
});