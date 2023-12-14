document.addEventListener('DOMContentLoaded', function () {
    // Fetch lightsabers from JSON file
    fetch('lightsabers.json')
        .then(response => response.json())
        .then(data => {
            const lightsaberGrid = document.getElementById('lightsaberGrid');

            // Loop through lightsabers and create HTML elements
            data.lightsabers.forEach(lightsaber => {
                const lightsaberDiv = document.createElement('div');
                lightsaberDiv.classList.add('lightsaber');

                const lightsaberName = document.createElement('h3');
                lightsaberName.textContent = lightsaber.name;

                const lightsaberDetails = document.createElement('p');
                lightsaberDetails.innerHTML = `
                    <strong>Color:</strong> ${lightsaber.color}<br>
                    <strong>Length:</strong> ${lightsaber.length}<br>
                    <strong>Hilt Material:</strong> ${lightsaber.hilt_material}<br>
                    <strong>Crystal:</strong> ${lightsaber.crystal}<br>
                    <strong>Affiliation:</strong> ${lightsaber.affiliation}
                `;

                lightsaberDiv.appendChild(lightsaberName);
                lightsaberDiv.appendChild(lightsaberDetails);

                lightsaberGrid.appendChild(lightsaberDiv);
            });
        })
        .catch(error => console.error('Error fetching lightsabers:', error));
});
