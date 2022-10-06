import './index.html';
import './index.scss';
import {avatarController} from './modules/avatarController';
import {choicesController} from './modules/choicesController';
import {modalController} from './modules/modalController';
import {selectController} from './modules/selectController';
import {showPassword} from './modules/showPassword';


const init = () => {
  modalController({
    modal: '.modal_sign-in',
    btnOpen: '.header__auth-btn_sign-in',
    btnClose: '.modal__close',
  });

  modalController({
    modal: '.modal_sign-up',
    btnOpen: '.header__auth-btn_sign-up',
    btnClose: '.modal__close',
  });

  modalController({
    modal: '.modal_person',
    btnOpen: '.service',
    parentBtns: '.services__list',
    btnClose: '.modal__close',
    handlerOpenModal: async() => {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      // .then(json => console.log(json))
      console.log(data);

      const comments = document.querySelectorAll('.review__text');

      comments.forEach((comment) => {
        if (comment.scrollHeight > 38) {
          const button = document.createElement('button');
          button.classList.add('review__open');
          button.textContent = 'Развернуть';
          comment.after(button);

          button.addEventListener('click', () => {
            comment.classList.toggle('review__text_open');
            button.textContent = comment.classList.contains('review__text_open')
            ? 'Свернуть'
            : 'Развернуть'
            ;
          })
        }
      })
    }
  });

  selectController({
    openBtn: '.category__title',
    openBlock: '.category__list',
    closeBtn: '.category__btn',
    changeBlock: '.category__title_text',
    handlerChange: (value) => {
      console.log(value);
    },
  });

  showPassword({
    inputPass: '.form__input_password',
    btnEye: '.form__password-eye',
    btnEyeShow: 'form__password-eye_show',
  });

  choicesController();
  const crp = avatarController({
    inputFile: '.avatar__input',
    uploadResult: '.avatar__result',
  });

  // const modalPerson = modalController({
  //   modal: '.modal_person',
  //   btnOpen: '.service',
  //   parentBtns: '.services__list',
  //   btnClose: '.modal__close',
  //   handlerOpenModal: () => {
  //     console.log('Guten aben!');
  //   }
  // });
  // modalPerson.onOpenModal(() => {
  //   console.log('Хаюшки пипл!');
  // })
};

init();