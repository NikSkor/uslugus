import {API_URL} from "./const";
import {createElement} from "./createElement";
import {getData} from "./getData";
import {modalController} from "./modalController";
import {store} from "./store"

export const auth = (data) => {
  store.user.name = data.name;
  store.user.category = data.category;
  store.user.id = data.id;
  store.user.avatar = data.avatar;

  const headerAuth = document.querySelector('.header__auth');
  headerAuth.textContent = '';
  headerAuth.classList.add('auth');
  const categoryRus = store.category.find(
    item => item.title === store.user.category
  ).rus;

  

  // headerAuth.innerHTML = 
  // `
  //   <img src='${API_URL}/${store.user.avatar}' alt='' class='auth__avatar'>
  //   <p class='auth__name'>${store.user.name}</p>
  //   <p class='auth__category'>${categoryRus}</p>
  //   <button class='auth__btn-edit'>Изменить услугу</button>
  // `;

  const avatar = createElement('img', {
    src: `${API_URL}/${store.user.avatar}`,
    className: 'auth__avatar',
    alt: `${categoryRus} ${store.user.name}`
  }, headerAuth);

  const name = createElement('p', {
    className: 'auth__name',
    textContent: `${store.user.name}`
  }, headerAuth);

  const category = createElement('p', {
    className: 'auth__category',
    textContent: `${categoryRus}`
  }, headerAuth);

  const btnEdit = createElement('button', {
    className: 'auth__btn-edit',
    textContent: `Изменить услугу`
  }, headerAuth);

  let windowInnerWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    windowInnerWidth = window.innerWidth;
  })

  avatar.addEventListener('click', () => {
      if (windowInnerWidth <= 520) {
        console.log('mazda!!!');
        headerAuth.classList.toggle('auth__modal');
        name.classList.toggle('auth_block');
        category.classList.toggle('auth_block');
        btnEdit.classList.toggle('auth_block');
      }
  })


  modalController({
    modal: '.modal_sign-up',
    btnOpen: '.auth__btn-edit',
    btnClose: '.modal__close',
    handlerOpenModal: async () => {
      const url = `${API_URL}/api/service/${store.user.id}`;

      const data = await getData(url);
      const form = document.querySelector('.form_sign-up');
      form.action = url;
      form.dataset.method = 'PATCH';

      form.name.value = data.name;
      form.surname.value = data.surname;
      form.phone.value = data.phone;
      form.email.value = data.email;
      form.price.value = data.price;
      form.about.value = data.about;

      form.direction._choices.setChoiceByValue(data.direction);
      form.category._choices.setChoiceByValue(data.category);

      

    }
  })
}