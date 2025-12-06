const btnElement = document.querySelector("#theBtn");
const navElement = document.querySelector("#theNav");

btnElement.addEventListener("click", () => {
  btnElement.classList.toggle("open");
  navElement.classList.toggle("open");
});


const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 800, // smooth transition speed
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade', // smooth fade effect
  fadeEffect: {
    crossFade: true,
  },
});
