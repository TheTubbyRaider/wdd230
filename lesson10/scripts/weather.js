document.addEventListener('DOMContentLoaded', function () {
    // Select HTML elements in the document
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

    // Declare OpenWeatherMap API URL
    const url = 'https://api.openweathermap.org/data/2.5/weather';

    // Specify latitude and longitude for Trier, Germany
    const latitude = '49.75';
    const longitude = '6.64';

    // Set other parameters for the API request
    const units = 'imperial'; 
    const apiKey = '9b8e8824203134875cd82225113718f2'; 

    // Define asynchronous function named "apiFetch()"
    async function apiFetch() {
        try {
            const response = await fetch(`${url}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data); 
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Invoke the apiFetch() function
    apiFetch();

    // Build the displayResults function to output to the given HTML document
    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        // Capitalize each word of the weather description
        desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        weatherIcon.setAttribute('src', iconSrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${desc}`;
    }
});
