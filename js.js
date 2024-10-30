let currentSlide = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3;
    const maxSlide = totalItems - visibleItems;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const offset = currentSlide * -33.33;
    carousel.style.transform = `translateX(${offset}%)`;
}
