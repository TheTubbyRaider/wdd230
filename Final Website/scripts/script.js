function submitForm() {
    // Prevent the default form submission
    event.preventDefault();

    // Get the email input value
    var emailInput = document.getElementById("email").value;

    // Replace the form content with a thank you message
    var mailingListSection = document.getElementById("mailingListSection");
    mailingListSection.innerHTML = "<h2>Thanks for joining the mailing list!</h2><p>We'll keep you updated on the latest Star Wars news.</p>";
}

document.addEventListener('DOMContentLoaded', function () {
    // Fetch characters from JSON file
    fetch('data/characters.json')
        .then(response => response.json())
        .then(data => {
            const characterGrid = document.getElementById('characterGrid');

            // Loop through characters and create HTML elements
            data.characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');

                const characterImage = document.createElement('img');
                characterImage.src = character.image;
                characterImage.alt = character.name;

                const characterName = document.createElement('h3');
                characterName.textContent = character.name;

                const characterDetails = document.createElement('p');
                characterDetails.textContent = `Height: ${character.details.Height}, Weight: ${character.details.Weight}, Race: ${character.details.Race}, Job: ${character.details.Job}, Weapon: ${character.details.Weapon}`;

                characterDiv.appendChild(characterImage);
                characterDiv.appendChild(characterName);
                characterDiv.appendChild(characterDetails);

                characterGrid.appendChild(characterDiv);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));
});