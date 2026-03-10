
export const initModals = () => {
  const openCall = document.querySelectorAll('.open-call');
  const openFeedback = document.querySelectorAll('.open-feedback');

  const closeModal = document.querySelectorAll('.modal__button_close');
  const submitModal = document.querySelectorAll('.modal__button');

  const modals = document.querySelectorAll('.modal');

  const closeAll = () => {
    document.body.classList.remove('modal-call-open');
    document.body.classList.remove('modal-feedback-open');
  };

  openCall.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      document.body.classList.add('modal-call-open');
    });
  });

  openFeedback.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      document.body.classList.add('modal-feedback-open');
    });
  });

  closeModal.forEach((button) => {
    button.addEventListener('click', closeAll);
  });

  submitModal.forEach((button) => {
    button.addEventListener('click', closeAll);
  });

  // stopPropagation внутри модалки
  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // закрытие по клику вне модалки
  document.addEventListener('click', () => {
    if (
      document.body.classList.contains('modal-call-open') ||
      document.body.classList.contains('modal-feedback-open')
    ) {
      closeAll();
    }
  });
};
