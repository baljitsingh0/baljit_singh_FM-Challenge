const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggleBtn.addEventListener('click', () => {
  nav.querySelector('ul').classList.toggle('show');
});
