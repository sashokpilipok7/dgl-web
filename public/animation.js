const mainTitle = document.querySelector('.anime-type');
const textToDisplay = 'Leaders (DGL) ';
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

const restTitles = document.querySelectorAll('section h2');
const animateOnScroll = (targets) => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //triger animation
          animateTitle(entry.target, entry.target.dataset.text);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  ); // Trigger when 15% of element is visible

  // Attach observer to targets
  if (targets.length) {
    targets.forEach((t) => observer.observe(t));
  }
};

animateOnScroll(restTitles);
