try {
  document.querySelectorAll('.acc-header').forEach((h) => {
    h.addEventListener('click', () => {
      const item = h.parentElement;
      item.classList.toggle('active');
    });
  });
} catch (e) {
  console.error('Accordion init error:', e);
}

try {
  const benefitsMoreLinks = document.querySelectorAll('#benefits .btn-icon');

  benefitsMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const card = link.parentElement;
      const textToShow = card.querySelector('.card-text');

      textToShow.classList.toggle('active');
    });
  });
} catch (e) {
  console.error('Benefits links init error:', e);
}

try {
  const menu = document.querySelector('#navbarNav');
  const nav_items_internal = document.querySelectorAll('.nav-item a');

  nav_items_internal.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
} catch (e) {
  console.error('Nav menu init error:', e);
}

try {
  const showMoreBtn = document.querySelector('.btn-more-student');
  const studentCards = document.querySelectorAll('.students-section .col-md-4 ');

  showMoreBtn.addEventListener('click', () => {
    try {
      const hiddenCards = document.querySelectorAll('.students-section .col-md-4.d-none');
      if (hiddenCards.length === 0 || hiddenCards.length <= 3) {
        showMoreBtn.classList.add('d-none');
      }

      studentCards.forEach((card) => {
        card.classList.remove('d-none');
      });
    } catch (err) {
      console.error('Show more students click error:', err);
    }
  });
} catch (e) {
  console.error('Show more students init error:', e);
}
