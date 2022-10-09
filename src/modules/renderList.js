import {API_URL} from "./const";
import {createCard} from "./createCard";
import {getData} from "./getData";

export const renderList = async (url = `${API_URL}/api/service`) => {
  const servicesList = document.querySelector('.services__list');
  servicesList.textContent = '';

  const data = await getData(url);

  const emtyCard = document.createElement('li');
  emtyCard.classList.add('services__item', 'services__item_emty');
  emtyCard.textContent = 'Не найдено совпадений.'

  if (data.map(createCard).length > 0) {
    const cards = data.map(createCard);
    servicesList.append(...cards);
  } else {
    const cards = emtyCard;
    servicesList.append(cards);
  }

  // const cards = data.map(createCard);

  // servicesList.append(...cards);
};