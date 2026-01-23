  document.querySelectorAll('.acc-header').forEach(h => {
    h.addEventListener('click', () => {
      const item = h.parentElement;
      item.classList.toggle('active');
    });
  });