// links.js

// Base URL for GitHub Pages
const baseURL = "https://TheTubbyRaider.github.io/wdd230/";

// URL for the links JSON file
const linksURL = baseURL + "data/links.json";

// Asynchronous function to get the links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons); // Access 'lessons' property
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

// Function to display the links
function displayLinks(weeks) {
    const courseLinks = document.querySelector(".course-links");

    // Clear existing content
    courseLinks.innerHTML = "";

    // Loop through the weeks and create list items
    weeks.forEach((week) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");

        // Check if there are links for the week
        if (week.links && week.links.length > 0) {
            // Set the href attribute of the anchor
            anchor.href = baseURL + week.links[0].url;

            // Set the text content of the anchor
            anchor.textContent = week.lesson + ": " + week.links[0].title;

            // Append the anchor to the list item
            listItem.appendChild(anchor);

            // Append the list item to the course links
            courseLinks.appendChild(listItem);
        }
    });
}

// Call the getLinks function to initiate the process
getLinks();
