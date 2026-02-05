// Smooth fade-in des sections
const fadeElements = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    fadeElements.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial invisible state
fadeElements.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease';
});