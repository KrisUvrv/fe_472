
export const initModals = () => {
  const openCall = document.querySelectorAll('.open-call');
  const openFeedback = document.querySelectorAll('.open-feedback');

  const closeModal = document.querySelectorAll('.modal__button_close');
  const submitModal = document.querySelectorAll('.modal__button');

  openCall.forEach((button) => {
    button.addEventListener('click', () => {
      document.body.classList.toggle('modal-call-open');
    });
  });

  openFeedback.forEach((button) => {
    button.addEventListener('click', () => {
      document.body.classList.toggle('modal-feedback-open');
    });
  });

  closeModal.forEach((button) => {
    button.addEventListener('click', () => {
      document.body.classList.remove('modal-call-open');
      document.body.classList.remove('modal-feedback-open');
    });
  });

  submitModal.forEach((button) => {
    button.addEventListener('click', () => {
      document.body.classList.remove('modal-call-open');
      document.body.classList.remove('modal-feedback-open');
    });
  });
}
