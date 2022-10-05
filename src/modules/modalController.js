export const modalController = ({modal,
  btnOpen,
  btnClose,
  time = 300,
  parentBtns,
  handlerOpenModal = () => {},
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

const event = {
  handlerOpenModal,
  onOpenModal(handlerOpenModal) {
    event.handlerOpenModal = handlerOpenModal;
  }
}

const closeModal = e => {
  const target = e.target;

  if (target === modalElem ||
    (btnClose && target.closest(btnClose)) ||
    e.code === 'Escape'
    ) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, time);

    window.removeEventListener('keydown', closeModal);
  }
}

const openModal = async () => {
  await event.handlerOpenModal();
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
  window.addEventListener('keydown', closeModal);
};

if(parentBtns) {
  handlerElems.addEventListener('click', ({target}) => {
    if (target.closest(btnOpen)) {
      openModal();
    }
  })
} else {
  handlerElems.forEach(btn => {
  btn.addEventListener('click', openModal);
})
}


modalElem.addEventListener('click', closeModal);

return event;
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