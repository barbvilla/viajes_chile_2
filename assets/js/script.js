const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 800) {
    navEl.classList.add('navbar-scrolled');
  } else if (window.scrollY < 800) {
    navEl.classList.remove('navbar-scrollled');
  }
});