const container = document.querySelector('.card-container');
const dots = document.querySelectorAll('.dot');
let index = 0;

function slideTo(i) {
    index = i % 4;
    gsap.to(container, {
        x: -index * window.innerWidth,
        duration: 1,
        ease: "power2.out"
    });
    dots.forEach((d, n) => d.classList.toggle('active', n === index));
}

function nextSlide() { slideTo(index + 1); }

dots.forEach((dot, i) => { dot.addEventListener('click', () => slideTo(i)); });

window.addEventListener('resize', () => {
    gsap.set(container, { x: -index * window.innerWidth });
});