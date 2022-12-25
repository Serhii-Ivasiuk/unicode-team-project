(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  // Закриття моб меню кнопкою Buy now
  const closeMenuBtn2 = document.querySelector('.js-close-menu2');
  // Закриття моб меню якірними посиланнями
  const closeMenuBtn3 = document.querySelector('.js-close-menu3');
  const closeMenuBtn4 = document.querySelector('.js-close-menu4');
  const closeMenuBtn5 = document.querySelector('.js-close-menu5');
  const closeMenuBtn6 = document.querySelector('.js-close-menu6');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn2.addEventListener('click', toggleMenu);
  closeMenuBtn3.addEventListener('click', toggleMenu);
  closeMenuBtn4.addEventListener('click', toggleMenu);
  closeMenuBtn5.addEventListener('click', toggleMenu);
  closeMenuBtn6.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();