function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1);
    }
    else {
        return "N/A";
    }
}
let temperatureValue = parseFloat(document.getElementById("temperature").innerText);
let windSpeedValue = parseFloat(document.getElementById("windSpeed").innerText);
let windChillValue = calculateWindChill(temperatureValue, windSpeedValue);

document.getElementById("windChill").innerText = windChillValue + "°F";