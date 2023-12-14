document.addEventListener('DOMContentLoaded', function () {
    // Fetch guns from JSON file
    fetch('guns.json')
        .then(response => response.json())
        .then(data => {
            const gunGrid = document.getElementById('gunGrid');

            // Loop through guns and create HTML elements
            data.guns.forEach(gun => {
                const gunDiv = document.createElement('div');
                gunDiv.classList.add('gun');

                const gunName = document.createElement('h3');
                gunName.textContent = gun.name;

                const gunDetails = document.createElement('p');
                gunDetails.innerHTML = `
                    <strong>Type:</strong> ${gun.type}<br>
                    <strong>Manufacturer:</strong> ${gun.manufacturer}<br>
                    <strong>Caliber:</strong> ${gun.caliber}<br>
                    <strong>Fire Rate:</strong> ${gun.fire_rate}<br>
                    <strong>Capacity:</strong> ${gun.capacity}<br>
                    <strong>Special Features:</strong> ${gun.special_features.join(', ')}
                `;

                gunDiv.appendChild(gunName);
                gunDiv.appendChild(gunDetails);

                gunGrid.appendChild(gunDiv);
            });
        })
        .catch(error => console.error('Error fetching guns:', error));
});
