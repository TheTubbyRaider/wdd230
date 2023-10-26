document.addEventListener("DOMContentLoaded", function () {
    const lastModified = new Date(document.lastModified);
    const lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = lastModified.toDateString();
});
