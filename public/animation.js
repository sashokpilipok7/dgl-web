const mainTitle = document.querySelector('.anime-type');
const textToDisplay = 'в Україні';

function animateTitle(element, text, delay = 100) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      console.log(text[i]);
      element.innerHTML += text[i];
    }, delay * i);
  }
}

animateTitle(mainTitle, textToDisplay);
