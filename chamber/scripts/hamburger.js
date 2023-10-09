// JavaScript for the hamburger menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header-nav .menu ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

// Function to hide the menu on larger screens
function hideMenuOnLargeScreens() {
    if (window.innerWidth >= 1024) {
        menu.classList.remove('show-menu');
    }
}

// Listen for window resize events
window.addEventListener('resize', hideMenuOnLargeScreens);

// Hide the menu initially on large screens
hideMenuOnLargeScreens();