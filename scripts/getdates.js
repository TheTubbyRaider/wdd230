document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  
    // Populate the location (state or country) - Update as needed
    const location = 'Utah'; // Change this to your desired location
    document.getElementById('location').textContent = location;
  
    // Populate the "lastModified" paragraph with the current date and time
    const lastModifiedElement = document.getElementById('lastModifiedDate');
    const lastModified = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModified.toLocaleString();
  });