const reveals = document.querySelectorAll(".reveal");
const hero = document.querySelector(".hero");

// Scroll reveal
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < windowHeight - 120) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Hero blur + parallaxe
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if(scroll > 50) {
    hero.classList.add("blur");
    hero.style.transform = `translateY(${scroll*0.2}px)`; // parallaxe léger
  } else {
    hero.classList.remove("blur");
    hero.style.transform = `translateY(0px)`;
  }
});