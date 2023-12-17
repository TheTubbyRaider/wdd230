// links.js

const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById("your-links-container-id"); // Replace with the actual ID of your links container

  weeks.lessons.forEach((lesson) => {
    const weekElement = document.createElement("li");
    const lessonNumber = lesson.lesson;
    const lessonLinks = lesson.links;

    const weekLinks = lessonLinks.map((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.textContent = link.title;
      const listItem = document.createElement("li");
      listItem.appendChild(linkElement);
      return listItem;
    });

    weekElement.textContent = `${lessonNumber}: `;
    weekLinks.forEach((link) => {
      weekElement.appendChild(link);
    });

    linksContainer.appendChild(weekElement);
  });
}

// Uncomment the line below to fetch and display the links when the page loads
getLinks();
