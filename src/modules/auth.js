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
  const categoryRus = store.category.find(
    item => item.title === store.user.category
  ).rus;

  headerAuth.classList.add('auth');

  // headerAuth.innerHTML = 
  // `
  //   <img src='${API_URL}/${store.user.avatar}' alt='' class='auth__avatar'>
  //   <p class='auth__name'>${store.user.name}</p>
  //   <p class='auth__category'>${categoryRus}</p>
  //   <button class='auth__btn-edit'>Изменить услугу</button>
  // `;

  createElement('img', {
    src: `${API_URL}/${store.user.avatar}`,
    className: 'auth__avatar',
    alt: `${categoryRus} ${store.user.name}`
  }, headerAuth);

  createElement('p', {
    className: 'auth__name',
    textContent: `${store.user.name}`
  }, headerAuth);

  createElement('p', {
    className: 'auth__category',
    textContent: `${categoryRus}`
  }, headerAuth);

  createElement('button', {
    className: 'auth__btn-edit',
    textContent: `Изменить услугу`
  }, headerAuth);

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