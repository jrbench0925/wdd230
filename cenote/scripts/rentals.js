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

    if (!vehiclesContainer) {
        console.error('Vehicles container not found on this page');
        return;
    }

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
                <table>
                    <thead>
                        <tr>
                            <th>Max Persons</th>
                            <th>Reservation Half Day (3 hrs)</th>
                            <th>Reservation Full day</th>
                            <th>Walk-In Half Day (3 hrs)</th>
                            <th>Walk-In Full Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${vehicle.max_persons}</td>
                            <td>$${vehicle.reservation_half_day}</td>
                            <td>$${vehicle.reservation_full_day}</td>
                            <td>$${vehicle.walk_in_half_day}</td>
                            <td>$${vehicle.walk_in_full_day}</td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <a href= "reservations.html"><img src="${vehicle.photo}" alt="${vehicle.rental_type}" loading="lazy"></a>
            `;

            vehicleDiv.appendChild(vehicleInfo);
            vehiclesContainer.appendChild(vehicleDiv);
        });
    } catch (error) {
        console.error('Error displaying rental information:', error);
    }
}

async function displayRentalInformationMain() {
    const vehiclesContainer = document.getElementById('vehicles-main');

    if (!vehiclesContainer) {
        console.error('Vehicles container not found on this page');
        return;
    }

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

            `;

            vehicleDiv.appendChild(vehicleInfo);
            vehiclesContainer.appendChild(vehicleDiv);
        });
    } catch (error) {
        console.error('Error displaying rental information:', error);
    }
}

if (document.getElementById('vehicles')) {
    displayRentalInformation();
}

if (document.getElementById('vehicles-main')) {
    displayRentalInformationMain();
}