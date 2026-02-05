const track = document.querySelector('.carousel-track');
let isDown = false, startX, scrollLeft;

// souris
track.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener('mouseleave', () => isDown = false);
track.addEventListener('mouseup', () => isDown = false);
track.addEventListener('mousemove', e => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX);
  track.scrollLeft = scrollLeft - walk;
});

// mobile touch
track.addEventListener('touchstart', e => { startX = e.touches[0].pageX; scrollLeft = track.scrollLeft; });
track.addEventListener('touchmove', e => {
  const x = e.touches[0].pageX;
  const walk = (x - startX);
  track.scrollLeft = scrollLeft - walk;
});