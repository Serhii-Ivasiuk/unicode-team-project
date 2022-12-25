// modal-product-card

(() => {
  const refs = {
    openBtnModalProtuctCard: document.querySelector(
      '[data-modal-open-product-card]'
    ),
    closeBtnModalProtuctCard: document.querySelector(
      '[data-modal-close-product-card]'
    ),
  };

  refs.openBtnModalProtuctCard.addEventListener('click', toggleModal);
  refs.closeBtnModalProtuctCard.addEventListener('click', toggleModal);

  function toggleModal() {
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
  };

  refs.openBtnModalReadMore.addEventListener('click', toggleModal);
  refs.closeBtnModalReadMore.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
  }
})();

// modal-location

(() => {
  const refs = {
    openBtnModalLocation: document.querySelector('[data-modal-open-location]'),
    closeBtnModalLocation: document.querySelector(
      '[data-modal-close-location]'
    ),
  };

  refs.openBtnModalLocation.addEventListener('click', toggleModal);
  refs.closeBtnModalLocation.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
  }
})();

// modal-franchise

(() => {
  const refs = {
    openBtnModalFranchise: document.querySelector(
      '[data-modal-open-franchise]'
    ),
    closeBtnModalFranchise: document.querySelector(
      '[data-modal-close-franchise]'
    ),
  };

  refs.openBtnModalFranchise.addEventListener('click', toggleModal);
  refs.closeBtnModalFranchise.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
  }
})();

// modal-ingredients

(() => {
  const refs = {
    openBtnModalIngredients1: document.querySelector(
      '[data-modal-open-ingredients-1]'
    ),
    openBtnModalIngredients2: document.querySelector(
      '[data-modal-open-ingredients-2]'
    ),
    openBtnModalIngredients3: document.querySelector(
      '[data-modal-open-ingredients-3]'
    ),

    closeBtnModalIngredients: document.querySelector(
      '[data-modal-close-ingredients]'
    ),
  };

  refs.openBtnModalIngredients1.addEventListener('click', toggleModal);
  refs.openBtnModalIngredients2.addEventListener('click', toggleModal);
  refs.openBtnModalIngredients3.addEventListener('click', toggleModal);

  refs.closeBtnModalIngredients.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
  }
})();
