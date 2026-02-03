document.querySelectorAll('.acc-header').forEach((h) => {
  h.addEventListener('click', () => {
    const item = h.parentElement;
    item.classList.toggle('active');
  });
});

document.querySelector('#subscribe').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Підписка успішна!');
});

const benefitsMoreLinks = document.querySelectorAll('#benefits .btn-icon');

benefitsMoreLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const card = link.parentElement;
    const textToShow = card.querySelector('.card-text');

    textToShow.classList.toggle('active');
  });
});

const menu = document.querySelector('#navbarNav');
const nav_items_internal = document.querySelectorAll('.nav-item a');

nav_items_internal.forEach((item) => {
  item.addEventListener('click', (e) => {
    menu.classList.remove('show');
  });
});
