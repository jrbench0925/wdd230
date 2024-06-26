const key = "b0a4948b9228592325bc04add93221f7";
const lat = 20.514;
const long = -86.96;
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;


async function fetchWeatherData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

async function displayWeather() {
    const weatherData = await fetchWeatherData(weatherUrl);
    if (weatherData) {
        const temperatureF = weatherData.main.temp.toFixed(0);
        const temperatureC = ((temperatureF - 32) * 5 / 9).toFixed(0);
        const humidity = weatherData.main.humidity;
        const skyConditions = weatherData.weather[0].description;
        const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

        const currentWeatherSection = document.getElementById('current-weather');
        currentWeatherSection.innerHTML = `
            <h2>Current Weather</h2>
            <p>${temperatureC}&deg;C (${temperatureF}&deg;F)</p>
            <p>${humidity}% Humidity</p>
            <p>${skyConditions}</p>
            <img src="${icon}" alt="Weather Icon">
        `;
    }
}

async function displayForecast() {
    const forecastData = await fetchWeatherData(forecastUrl);
    if (forecastData) {
        const forecastSection = document.getElementById('weather-forecast');
        let forecastHTML = `<div class="forecast-card-container">`;

        const today = new Date();
        for (let i = 1; i <= 5; i++) {
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);
            nextDay.setHours(15, 0, 0, 0);

            let forecastFound = false;
            for (const item of forecastData.list) {
                const forecastDate = new Date(item.dt * 1000);
                if (
                    forecastDate.getDate() === nextDay.getDate() &&
                    forecastDate.getMonth() === nextDay.getMonth() &&
                    forecastDate.getFullYear() === nextDay.getFullYear() &&
                    forecastDate.getHours() === 15
                ) {
                    const dayOfWeek = daysOfWeek[forecastDate.getDay()];
                    const temperatureF = item.main.temp.toFixed(0);
                    const temperatureC = ((temperatureF - 32) * 5 / 9).toFixed(0);
                    const humidity = item.main.humidity;
                    const skyConditions = item.weather[0].description;
                    const icon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
                    forecastHTML += `
                        <div class="forecast-card">
                            <h2>${dayOfWeek}</h2>
                            <p>${temperatureC}&deg;C (${temperatureF}&deg;F)</p>
                            <p>Humidity: ${humidity}%</p>
                            <p>${skyConditions}</p>
                            <img src="${icon}" alt="Weather Icon">
                        </div>`;
                    forecastFound = true;
                    break;
                }
            }
        }

        forecastHTML += `</div>`;
        forecastSection.innerHTML = forecastHTML;
    }
}

async function displayHighTemp() {

    const tempData = await fetchWeatherData(weatherUrl);
    if (tempData) {

        const highTempF = tempData.main.temp_max;
        const highTempC = ((highTempF - 32) * 5 / 9);

        const highTempMessage = document.getElementById('high-temp-message');
        highTempMessage.innerHTML = `<h1>Today's high temperature: ${highTempC.toFixed(0)}&deg;C (${highTempF.toFixed(0)}&deg;F) <button id="tempButton" class="tempButton">&#10006</button></h1>`;

    } else {
        console.error('Temperature data not found.');
    }
}

displayWeather();
displayForecast();
displayHighTemp();