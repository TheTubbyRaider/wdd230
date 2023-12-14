document.addEventListener('DOMContentLoaded', function () {
    // Fetch starships from JSON file
    fetch('ships.json')
        .then(response => response.json())
        .then(data => {
            const shipGrid = document.getElementById('shipGrid');

            // Loop through starships and create HTML elements
            data.starships.forEach(ship => {
                const shipDiv = document.createElement('div');
                shipDiv.classList.add('character'); // Reusing the 'character' class for styling

                const shipName = document.createElement('h3');
                shipName.textContent = ship.name;

                const shipDetails = document.createElement('p');
                shipDetails.textContent = `Class: ${ship.class}, Manufacturer: ${ship.manufacturer}, Crew: ${ship.crew}, Length: ${ship.length}, Max Speed: ${ship.max_speed}, Hyperdrive Rating: ${ship.hyperdrive_rating}, Cargo Capacity: ${ship.cargo_capacity}, Weapons: ${ship.weapons.join(', ')}`;

                shipDiv.appendChild(shipName);
                shipDiv.appendChild(shipDetails);

                shipGrid.appendChild(shipDiv);
            });
        })
        .catch(error => console.error('Error fetching starships:', error));
});
