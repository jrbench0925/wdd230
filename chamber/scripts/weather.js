const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const key = "b0a4948b9228592325bc04add93221f7";
const lat = 43.191;
const long = -112.343;
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;

async function todaysWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayTodayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function fiveDayForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayTodayWeather(data) {
    const shortTemp = data.main.temp.toFixed(0);
    currentTemp.innerHTML = `${shortTemp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    let descCapitalized = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    captionDesc.textContent = `${descCapitalized}`;
}

function displayForecast(data) {
    const forecast = data.list;
    const weatherForecast = document.getElementById('weatherForecast');


    let currentDate = '';
    weatherForecast.innerHTML = '';

    forecast.forEach((entry, index) => {
        const weather = entry.weather[0];
        const highTemp = entry.main.temp_max.toFixed(0);
        const lowTemp = entry.main.temp_min.toFixed(0);
        const iconUrl = `https://openweathermap.org/img/w/${weather.icon}.png`

        const date = new Date(entry.dt_txt);
        const dayOfWeek = daysOfWeek[date.getDay()];
        if (date.toDateString() !== currentDate) {

            currentDate = date.toDateString();
            const dayId = `day-${index}`;
            weatherForecast.innerHTML += `
                <div id="${dayId}">
                <p>Day: ${dayOfWeek}</p>
                <p>High Temp: ${highTemp}&deg;F</p>
                <img src="${iconUrl}" alt="${weather.description}">
                </div>
            `;

        }
    });
}

todaysWeather();
fiveDayForecast();