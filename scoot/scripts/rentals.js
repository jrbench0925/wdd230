async function fetchRentalPrices() {
    try {
        const response = await fetch('data/rentals.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const rentalData = await response.json();
        return rentalData;
    } catch (error) {
        console.error('Error fetching rental prices:', error);
        return null;
    }
}

async function displayRentalInformation() {
    const vehiclesContainer = document.getElementById('vehicles');
    vehiclesContainer.innerHTML = '';

    try {
        const data = await fetchRentalPrices();
        if (!data) return;

        const rentalPrices = data.rental_prices;

        rentalPrices.forEach((vehicle) => {
            const vehicleDiv = document.createElement('div');
            vehicleDiv.classList.add('vehicle-card');

            const image = document.createElement('img');
            image.src = vehicle.photo;
            image.alt = vehicle.rental_type;

            const vehicleInfo = document.createElement('div');
            vehicleInfo.classList.add('vehicle-info');
            vehicleInfo.innerHTML = `
                <h3>${vehicle.rental_type}</h3>
                <img src="${vehicle.photo}" alt="${vehicle.rental_type}" loading="lazy">
                <p>Max Persons: ${vehicle.max_persons}</p>
                <h4>Reservation</h4>
                <ul> 
                    <li>Half Day: $${vehicle.reservation_half_day}</li>
                    <li>Full Day: $${vehicle.reservation_full_day}</li>
                </ul>
                <h4>Walk-in</h4>
                <ul>
                    <li>Half Day: $${vehicle.walk_in_half_day}</li>
                    <li>Walk-in Full Day: $${vehicle.walk_in_full_day}</li>
                </ul>
            `;

            vehicleDiv.appendChild(vehicleInfo);
            vehiclesContainer.appendChild(vehicleDiv);
        });
    } catch (error) {
        console.error('Error displaying rental information:', error);
    }
}

displayRentalInformation();