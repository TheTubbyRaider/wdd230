async function getWeatherDataAndCalculateWindChill() {
    const utahCountyCoordinates = {
        latitude: 40.114955,
        longitude: -111.654923,
    };
    const apiKey = '9b8e8824203134875cd82225113718f2';

    try {
        // Check if weather data is already in cache
        let weatherData = JSON.parse(localStorage.getItem('weatherData'));

        if (!weatherData) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${utahCountyCoordinates.latitude}&lon=${utahCountyCoordinates.longitude}&units=imperial&appid=${apiKey}`);
            weatherData = await response.json();

            // Cache the weather data
            localStorage.setItem('weatherData', JSON.stringify(weatherData));
        }

        const currentTemperature = weatherData.current.temp;
        const currentWeatherDescription = weatherData.current.weather[0].description;

        document.getElementById("temperature").textContent = `${currentTemperature} °F`;
        document.getElementById("weather-description").textContent = currentWeatherDescription;

        const forecast = weatherData.daily.slice(1, 4);
        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML = '<h3>Three-Day Forecast</h3>';
        forecast.forEach(day => {
            const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
            const temperature = day.temp.day.toFixed(2);
            const forecastItem = `<p>${date}: ${temperature} °F</p>`;
            forecastContainer.innerHTML += forecastItem;
        });

        const windSpeed = weatherData.current.wind_speed;
        const windChill = calculateWindChill(currentTemperature, windSpeed);
        document.getElementById("windspeed").textContent = `${windSpeed} mph`;
        document.getElementById("windchill").textContent = `${windChill.toFixed(2)} °F`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function
getWeatherDataAndCalculateWindChill();
