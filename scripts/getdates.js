    // Function to get the current year
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    // Function to format the last modified date
    function formatLastModifiedDate() {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return lastModified.toLocaleDateString(undefined, options);
    }

    // Populate the current year and last modified date
    document.getElementById('currentYear').textContent = getCurrentYear();
    document.getElementById('lastModifiedDate').textContent = formatLastModifiedDate();