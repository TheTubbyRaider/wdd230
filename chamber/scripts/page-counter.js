document.addEventListener('DOMContentLoaded', function () {
    // Check if local storage is supported
    if (typeof Storage !== 'undefined') {
        // Retrieve the visit count from local storage
        let visitCount = localStorage.getItem('visitCount') || 0;

        // Display the visit count on the page
        document.getElementById('visit-count').textContent = visitCount;

        // Increment the visit count on each page load
        visitCount++;
        // Update the visit count in local storage
        localStorage.setItem('visitCount', visitCount);
    } else {
        // Local storage not supported, handle accordingly
        console.error('Local storage is not supported.');
    }
});
