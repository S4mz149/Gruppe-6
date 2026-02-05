// Sections fade-in animation
const sections = document.querySelectorAll("section");

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "all 0.7s ease";
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});