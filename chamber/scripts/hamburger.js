document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.header-nav .menu nav ul');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
    });

    // Function to hide the menu on larger screens
    function hideMenuOnLargeScreens() {
        if (window.innerWidth >= 1024 && menu.classList.contains('show-menu')) {
            menu.classList.remove('show-menu');
        }
    }

    // Listen for window resize events
    window.addEventListener('resize', function () {
        hideMenuOnLargeScreens();
    });
});
