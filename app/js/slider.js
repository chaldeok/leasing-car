// init Swiper:
const mySlider = new Swiper('.swiper-container', {
  loop: true,
  direction: "horizontal",
  effect: "fade",
  speed: 800,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletActiveClass: "swiper-pagination-bullet-active",
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  }
});
