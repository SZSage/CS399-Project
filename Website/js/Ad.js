const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

let interval = setInterval(nextSlide, 1500);

slider.addEventListener('mouseenter', () => {
  clearInterval(interval);
});

slider.addEventListener('mouseleave', () => {
  interval = setInterval(nextSlide, 1500);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    clearInterval(interval);
    interval = setInterval(nextSlide, 1500);
  });
});

showSlide(currentSlide);
