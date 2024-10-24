// script.js
document.getElementById('hamburger').addEventListener('click', function() {
    const navbarMenu = document.getElementById('navbar-menu');
    navbarMenu.classList.toggle('active');
});

let currentIndex = 1;
const totalSlides = 3;

setInterval(() => {
    document.getElementById(`slide${currentIndex}`).checked = true;
    currentIndex = currentIndex < totalSlides ? currentIndex + 1 : 1;
}, 5000); // Troca a cada 5 segundos