// Swiper initialization
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 15000,
    stopOnSlide: false,
    disableOnInteraction: false,
  },

  speed: 1000,

  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    480: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 15,
    },
    1200: {
      spaceBetween: 20,
    },
  },
});
