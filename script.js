const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentIndex = 0;

// Función para actualizar el carrusel
const updateCarousel = (index) => {
    const slideWidth = images[0].getBoundingClientRect().width; // Obtén el ancho de la imagen
    const newTransform = -index * slideWidth; // Calcula el nuevo desplazamiento
    track.style.transform = `translateX(${newTransform}px)`; // Aplica el desplazamiento
};

// Función para mover al siguiente índice
const moveToNextIndex = () => {
    if (currentIndex === images.length - 1) {
        currentIndex = 0; // Si está en la última imagen, va a la primera
    } else {
        currentIndex = (currentIndex + 1); // Incrementa el índice
    }
    updateCarousel(currentIndex); // Actualiza el carrusel
};

// Función para mover al índice anterior
const moveToPrevIndex = () => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1; // Si está en la primera imagen, va a la última
    } else {
        currentIndex = (currentIndex - 1); // Decrementa el índice normalmente
    }
    updateCarousel(currentIndex); // Actualiza el carrusel
};

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    moveToNextIndex(); // Mueve al siguiente índice
    resetAutoSlide(); // Reinicia el temporizador
});

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    moveToPrevIndex(); // Mueve al índice anterior
    resetAutoSlide(); // Reinicia el temporizador
});

// Configura el desplazamiento automático
let autoSlideInterval = setInterval(moveToNextIndex, 4000); // Desplaza cada 4 segundos

// Reinicia el temporizador del desplazamiento automático
const resetAutoSlide = () => {
    clearInterval(autoSlideInterval); // Limpia el intervalo anterior
    autoSlideInterval = setInterval(moveToNextIndex, 4000); // Reinicia el intervalo
};
