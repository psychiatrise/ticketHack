fetch('../public/nav.html')
.then(response => response.text())
.then(data => {
document.querySelector('nav').innerHTML = data;
});


const departure = document.querySelector('#departure');
const arrival = document.querySelector('#arrival');
const button = document.querySelector('#button');
const result = document.querySelector('#result');
const find = document.querySelector('.find');

button.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/trips', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            departure : departure.value,
            arrival : arrival.value,
        })
    });
    const trips = await response.json();
    find.innerHTML = '';
    for(let i=0;i<trips.length;i++){
        find.innerHTML += `
            <div class="line">
                <span class="departure">
                    ${trips[i].departure}
                </span>
                >
                <span class="arrival">
                    ${trips[i].arrival}
                </span>
                <span class="Hour">
                    ${trips[i].hour}
                </span>
                <span class="price">
                    ${trips[i].price}€
                </span>
                <a href="cart.html">Book</a>
            </div>
        `;
    }
    console.log(trips);
    //result.textContent = data.message;
})