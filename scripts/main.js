document.addEventListener('DOMContentLoaded', function () {
    const weatherInfo = document.querySelector('section.card:nth-child(3) p:first-child');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');
    const weatherIconElement = document.getElementById('weather-icon');

    const apiKey = '9b8e8824203134875cd82225113718f2'; 
    const city = 'Orem';
    const units = 'imperial';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Update weather information
            temperatureElement.textContent = `Temperature: ${data.main.temp} °F`;
            descriptionElement.textContent = `Condition: ${data.weather[0].description}`;
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
            windElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherIconElement.alt = `Weather Icon: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Failed to fetch weather data.';
        });
});
