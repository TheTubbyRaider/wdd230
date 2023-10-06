document.addEventListener("DOMContentLoaded", function () {
    // Get the last modification date of the current page
    var lastModifiedDate = document.lastModified;

    // Find the element with the id "lastModified" and set its text content
    var lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModifiedDate;
    }
});