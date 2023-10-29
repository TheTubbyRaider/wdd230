// Function to lazy load images
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('.lazy-load');

    const options = {
        rootMargin: '0px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.getAttribute('data-src');
                lazyImage.classList.add('loaded');
                imageObserver.unobserve(lazyImage);
            }
        });
    }, options);

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
}

// Function to display visit messages
function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const visitMessage = document.querySelector('.visit-message');
    const currentTime = Date.now();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // One day in milliseconds

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceVisit = Math.floor((currentTime - lastVisit) / oneDayInMilliseconds);
        
        if (daysSinceVisit === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const plural = daysSinceVisit === 1 ? "" : "s";
            visitMessage.textContent = `You last visited ${daysSinceVisit} day${plural} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentTime);
}

// Call the functions when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    lazyLoadImages();
    displayVisitMessage();
});