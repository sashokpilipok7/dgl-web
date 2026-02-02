const mainTitle = document.querySelector('.anime-type');
const textToDisplay = 'Leaders в Україні';
const animeBr = document.querySelector('.anime-br');

function animateTitle(element, text, delay = 100) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      animeBr.classList.add('d-none');
      element.innerHTML += text[i];
    }, delay * i);
  }
}

animateTitle(mainTitle, textToDisplay);
