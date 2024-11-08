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
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const serviceDetails = document.querySelectorAll('.service-info');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.getAttribute('data-service');
            const activeDetail = document.getElementById(serviceType);

            // Verifica se a seção está atualmente visível
            const isVisible = activeDetail.style.display === 'block';

            // Esconde todos os detalhes de serviços
            serviceDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            // Se a seção não estiver visível, exibe-a
            if (!isVisible) {
                activeDetail.style.display = 'block'; // Exibe a seção detalhada
            }
        });
    });
});
