// fade in sections
document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        const rect = sec.getBoundingClientRect().top;
        if (rect < window.innerHeight - 80) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});