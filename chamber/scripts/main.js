// main.js

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to fetch and display members
async function fetchAndDisplayMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const membersContainer = document.getElementById('membersContainer');
    const viewSelector = document.querySelector('.view-toggle input[name="view"]:checked').value;

    membersContainer.innerHTML = '';

    data.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        if (viewSelector === 'grid') {
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.website}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;
        } else if (viewSelector === 'list') {
            memberCard.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.website}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;
        }

        membersContainer.appendChild(memberCard);
    });
}

// Event listener for view toggle
document.querySelectorAll('.view-toggle input[name="view"]').forEach(input => {
    input.addEventListener('change', fetchAndDisplayMembers);
});

// Function to fetch and display weather
async function fetchAndDisplayWeather() {
    const apiKey = '9e04f103227aedbab7295408087f118b';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Orem,us&appid=${9e04f103227aedbab7295408087f118b}`);
    const data = await response.json();

    document.getElementById('temperature').textContent = data.main.temp;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('windspeed').textContent = data.wind.speed;
    document.getElementById('windchill').textContent = calculateWindChill(data.main.temp, data.wind.speed);
}

// Function to calculate wind chill
function calculateWindChill(temperature, windspeed) {
    // Your wind chill calculation logic here
    // Example: return someCalculatedValue;
}

// Execute the weather fetch on page load
fetchAndDisplayWeather();

// Event listener for closing the Meet and Greet banner
document.getElementById('closeBannerBtn').addEventListener('click', closeMeetGreetBanner);

// Function to close the Meet and Greet banner
function closeMeetGreetBanner() {
    document.getElementById('meetGreetBanner').style.display = 'none';
}

// ... (rest of the unchanged code) ...
