// modal-product-card

(() => {
  const refs = {
    openBtnModalProtuctCard: document.querySelector(
      '[data-modal-open-product-card]'
    ),
    closeBtnModalProtuctCard: document.querySelector(
      '[data-modal-close-product-card]'
    ),
    modalProtuctCard: document.querySelector('[data-modal-product-card]'),
  };

  refs.openBtnModalProtuctCard.addEventListener('click', toggleModal);
  refs.closeBtnModalProtuctCard.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalProtuctCard.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

// modal-read-more

(() => {
  const refs = {
    openBtnModalReadMore: document.querySelector('[data-modal-open-read-more]'),
    closeBtnModalReadMore: document.querySelector(
      '[data-modal-close-read-more]'
    ),
    modalReadMore: document.querySelector('[data-modal-read-more]'),
  };

  refs.openBtnModalReadMore.addEventListener('click', toggleModal);
  refs.closeBtnModalReadMore.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalReadMore.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
