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
                <img src="${vehicle.photo}" alt="${vehicle.rental_type}">
                <p>Max Persons: ${vehicle.max_persons}</p>
                <p>Reservation Half Day: $${vehicle.reservation_half_day}</p>
                <p>Reservation Full Day: $${vehicle.reservation_full_day}</p>
                <p>Walk-in Half Day: $${vehicle.walk_in_half_day}</p>
                <p>Walk-in Full Day: $${vehicle.walk_in_full_day}</p>
            `;

            vehicleDiv.appendChild(vehicleInfo);
            vehiclesContainer.appendChild(vehicleDiv);
        });
    } catch (error) {
        console.error('Error displaying rental information:', error);
    }
}

// Call the function
displayRentalInformation();