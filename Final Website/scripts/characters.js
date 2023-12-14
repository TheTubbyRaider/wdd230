document.addEventListener('DOMContentLoaded', function () {
    // Fetch characters from JSON file
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            const characterGrid = document.getElementById('characterGrid');

            // Loop through characters and create HTML elements
            data.characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');

                const characterName = document.createElement('h3');
                characterName.textContent = character.name;

                const characterDetails = document.createElement('p');
                characterDetails.textContent = `Height: ${character.details.Height}, Weight: ${character.details.Weight}, Race: ${character.details.Race}, Job: ${character.details.Job}, Weapon: ${character.details.Weapon}`;

                characterDiv.appendChild(characterName);
                characterDiv.appendChild(characterDetails);

                characterGrid.appendChild(characterDiv);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));
});
