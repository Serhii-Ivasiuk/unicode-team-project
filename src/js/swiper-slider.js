// Swiper initialization
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // AutoHeight
  autoHeight: true,

  //
  slideToClickedSlide: true,

  // Effect
  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },
});
