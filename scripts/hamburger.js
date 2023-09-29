// JavaScript to toggle the menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburger-button');
    const menu = document.querySelector('nav ul');
  
    hamburgerButton.addEventListener('click', function () {
      menu.classList.toggle('show-menu');
    });
  });