//desplazamiento de pantalla
function scrollToSection() {
  const section = document.getElementById('target-section');
  section.scrollIntoView({ behavior: 'smooth' });
}

//Carrucel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
        interval: 5000, // Cambio automático cada 5 segundos (en milisegundos)
        pause: 'hover' // Pausa el carrusel al pasar el cursor sobre él (opcional)
    });
});
