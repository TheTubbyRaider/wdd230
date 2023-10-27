document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburger-button');
    const menu = document.querySelector('nav ul');

    hamburgerButton.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
    });

    // Function to format a JavaScript Date object as "Month Day, Year"
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    // Get the last modified date of the HTML document
    const lastModifiedElement = document.getElementById('lastModified');

    fetch(window.location.href)
        .then(response => response.headers.get('last-modified'))
        .then(dateString => {
            const lastModifiedDate = new Date(dateString);
            lastModifiedElement.textContent = `Last Modified: ${formatDate(lastModifiedDate)}`;
        });
});
document.addEventListener('DOMContentLoaded', function () {
    const weatherInfo = document.querySelector('section.card:nth-child(3) p:first-child');

    const apiKey = 'YOUR_API_KEY';
    const city = 'Orem';
    const units = 'imperial'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
