export const modalController = ({modal,
  btnOpen,
  btnClose,
  time = 300,
  parentBtns,
  handlerOpenModal = () => {},
  handlerCloseModal = () => {},
}) => {
const handlerElems = parentBtns
  ? document.querySelector(parentBtns)
  : document.querySelectorAll(btnOpen);
const modalElem = document.querySelector(modal);

modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${time}ms ease-in-out;
`;

const data = {
  handlerOpenModal,
  handlerCloseModal,
  onOpenModal(handlerOpenModal) {
    data.handlerOpenModal = handlerOpenModal;
  },
  onCloseModal(handlerCloseModal) {
    data.handlerCloseModal = handlerCloseModal;
  },
  closeModal: e => {
  const target = e.target;

  if (target === modalElem ||
    (btnClose && target.closest(btnClose)) ||
    e.code === 'Escape' || e.type === 'submit'
    ) {
    modalElem.style.opacity = '0';

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
      data.handlerCloseModal({modalElem});
    }, time);

    window.removeEventListener('keydown', data.closeModal);
  }
  },
  openModal: async (handler) => {
  await data.handlerOpenModal({handler, modalElem, closeModal: data.closeModal});
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
  window.addEventListener('keydown', data.closeModal);
  },
}

if(parentBtns) {
  handlerElems.addEventListener('click', ({target}) => {
    const handler = target.closest(btnOpen);
    if (handler) {
      data.openModal(handler);
    }
  })
} else {
  handlerElems.forEach(btn => {
  btn.addEventListener('click', data.openModal);
})
}


modalElem.addEventListener('click', data.closeModal);

return data;
}

// modalController({
//   modal: '.modal1',
//   btnOpen: '.section__button1',
//   btnClose: '.modal__close',
//   time: 1000,
// });

// modalController({
//   modal: '.modal2',
//   btnOpen: '.section__button2',
//   btnClose: '.modal__close',
// });