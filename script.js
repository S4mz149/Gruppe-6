const container = document.querySelector('.card-container');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function slideTo(index) {
    if (index >= dots.length) index = 0;
    currentIndex = index;

    gsap.to(container, {
        x: -currentIndex * window.innerWidth,
        duration: 1,
        ease: "power2.out"
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    slideTo(currentIndex + 1);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => slideTo(i));
});

window.addEventListener('resize', () => {
    gsap.set(container, { x: -currentIndex * window.innerWidth });
});
