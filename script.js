// Simple nav toggle (mobile)
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});