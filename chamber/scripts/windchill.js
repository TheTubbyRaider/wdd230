// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

// Function to get weather data for Utah County, Utah and calculate wind chill
async function getWeatherDataAndCalculateWindChill() {
    const utahCountyCoordinates = {
        latitude: 40.114955, // Latitude of Utah County
        longitude: -111.654923, // Longitude of Utah County
    };
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

    try {
        // Make an API request to OpenWeatherMap to get weather data for Utah County
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${utahCountyCoordinates.latitude}&lon=${utahCountyCoordinates.longitude}&units=imperial&appid=${apiKey}`);
        const data = await response.json();

        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;

        // Calculate wind chill
        const windChill = calculateWindChill(temperature, windSpeed);

        // Display wind chill on the page
        document.getElementById("temperature").textContent = temperature + " °F";
        document.getElementById("windspeed").textContent = windSpeed + " mph";
        document.getElementById("windchill").textContent = windChill.toFixed(2) + " °F";
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to get weather data and calculate wind chill for Utah County
getWeatherDataAndCalculateWindChill();
