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

const showMoreBtn = document.querySelector('.btn-more-student');
const studentCards = document.querySelectorAll('.students-section .col-md-4 ');
// const studentVisibleCards = document.querySelectorAll('.students-section .col-md-4:not(.d-none)');

showMoreBtn.addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.students-section .col-md-4.d-none');
  if (hiddenCards.length === 0) {
    showMoreBtn.classList.add('d-none');
    return;
  }

  studentCards.forEach((card) => {
    card.classList.remove('d-none');
  });
});
