const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const navLinksMobile = document.querySelectorAll('.nav-links-mobile li');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuButton.classList.toggle('active');
});

navLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuButton.classList.remove('active');
  });
});