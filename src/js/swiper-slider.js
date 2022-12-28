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
    dalay: 9000,
    stopOnSlide: false,
    disableOnInteraction: false,
  },

  speed: 5500,

  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    480: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 20,
    },
  },
});
