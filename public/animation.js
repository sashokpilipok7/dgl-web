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

function startCrossfade(layer1Id, layer2Id, images, interval = 4000) {
  const layer1 = document.getElementById(layer1Id);
  const layer2 = document.getElementById(layer2Id);
  if (!layer1 || !layer2) return;

  let index = 1;
  let showFirst = true;

  setInterval(() => {
    index = (index + 1) % images.length;

    if (showFirst) {
      layer2.src = images[index];
      layer2.style.opacity = 1;
      layer1.style.opacity = 0;
    } else {
      layer1.src = images[index];
      layer1.style.opacity = 1;
      layer2.style.opacity = 0;
    }

    showFirst = !showFirst;
  }, interval);
}

startCrossfade('hero-layer-1', 'hero-layer-2', [
  'img/banner/one.JPG',
  'img/hero.jpg',
  'img/banner/two.JPG',
  'img/banner/three.jpg',
  'img/banner/five.JPG',
  'img/banner/six.JPG',
  'img/banner/seven.WEBP',
]);

startCrossfade(
  'cta-layer-1',
  'cta-layer-2',
  [
    'img/students/nadia.jpg',
    'img/students/alisa.JPG',
    'img/students/dima.jpg',
    'img/students/alisa2.JPG',
    'img/students/julia.jpg',
    'img/students/danic.jpg',
  ],
  5000
);
