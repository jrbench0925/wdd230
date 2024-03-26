const key = "b0a4948b9228592325bc04add93221f7";
const lat = 43.191;
const long = -112.343;
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
        const temperature = weatherData.main.temp.toFixed(0);
        const humidity = weatherData.main.humidity;
        const skyConditions = weatherData.weather[0].description;
        const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

        const currentWeatherSection = document.getElementById('current-weather');
        currentWeatherSection.innerHTML = `
            <p>Current Weather</p>
            <p>${temperature}&deg;F</p>
            <p>${humidity}% Humidity</p>
            <p>${skyConditions}</p>
            <img src="${icon}" alt="Weather Icon">
        `;
    }
}

async function displayForecast() {
    const forecastData = await fetchWeatherData(forecastUrl);
    if (forecastData) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(15, 0, 0, 0);

        const forecastSection = document.getElementById('weather-forecast');
        let forecastHTML = `<p>Tomorrow's Forecast<p>`;

        for (let i = 0; i < forecastData.list.length; i++) {
            const item = forecastData.list[i];
            const date = new Date(item.dt * 1000);

            if (date.getDate() === tomorrow.getDate() && date.getHours() === 15) {
                const dayOfWeek = daysOfWeek[date.getDay()];
                const forecastTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const temperature = item.main.temp.toFixed(0);
                const skyConditions = item.weather[0].description;
                const icon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;

                forecastHTML += `
                        <p>${dayOfWeek}, ${forecastTime}</p>
                        <p>${temperature}&deg;F</p>
                        <p>${skyConditions}</p>
                        <img src="${icon}" alt="Weather Icon">
                `;

                break;
            }
        }

        forecastSection.innerHTML = forecastHTML;
    }
}

displayWeather();
displayForecast();