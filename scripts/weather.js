const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.191&lon=-112.343&units=imperial&appid=8241637a5f1b31d8d03d0fbf10f496fd';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {

    const shortTemp = data.main.temp.toFixed(0);
    currentTemp.innerHTML = `${shortTemp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    let descCapitalized = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    captionDesc.textContent = `${descCapitalized}`;
}