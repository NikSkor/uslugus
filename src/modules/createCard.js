import {API_URL, directions} from "./const";
import {createStars} from "./createStars";
import {store} from "./store";

export const createCard = (item) => {
  const {
    avatar,
    category,
    comments,
    direction,
    email,
    id,
    name,
    surname,
    price
  } = item;

  const servicesItem = document.createElement('li');
  servicesItem.classList.add('services__item');

  const service = document.createElement('article');
  service.classList.add('service');
  service.dataset.id = id;
  servicesItem.append(service);

  // const serviceAvatar = document.createElement('img');
  const serviceAvatar = new Image(50, 50);
  serviceAvatar.classList.add('service__avatar');
  serviceAvatar.src = `${API_URL}/${avatar}`;
  serviceAvatar.alt = `${category} ${surname} ${name}`;

  const servicePresent = document.createElement('div');
  servicePresent.classList.add('service__present');

  const serviceTitle = document.createElement('h3');
  serviceTitle.classList.add('service__title');
  serviceTitle.textContent = store.category
    .find(item => item.title === category).rus;

  const serviceName = document.createElement('p');
  serviceName.classList.add('service__name');
  serviceName.textContent = `${name} ${surname[0]}.`

  servicePresent.append(serviceTitle, serviceName);

  const servicePrice = document.createElement('p');
  servicePrice.classList.add('service__price');
  servicePrice.textContent = `${directions[direction]} ${price} ₽`

  const serviceReview = document.createElement('div');
  serviceReview.classList.add('service__review');

  const serviceCountReview = document.createElement('p');
  serviceCountReview.classList.add('service__count-review');
  serviceCountReview.textContent = comments.length.toString();

  serviceReview.append(createStars(comments), serviceCountReview);

  service.append(serviceAvatar, servicePresent, servicePrice, serviceReview)
  return servicesItem;
};

`
  <li class="services__item">
    <article class="service">
      <img
        src="img/photo.png"
        alt="Аватар Иван"
        class="service__avatar"
      />
      <div class="service__present">
        <h3 class="service__title">Фотограф</h3>
        <p class="service__name">Иван П.</p>
      </div>

      <p class="service__price">от 4000 ₽</p>

      <div class="service__review">
        <div class="service__stars">
          <img
            src="img/star.svg"
            alt="Рейтинг специалиста 4 из 5"
            class="service__star"
          />
          <img src="img/star.svg" alt="" class="service__star" />
          <img src="img/star.svg" alt="" class="service__star" />
          <img src="img/star.svg" alt="" class="service__star" />
          <img src="img/star-o.svg" alt="" class="service__star" />
        </div>
        <p class="service__count-review">4</p>
      </div>
    </article>
  </li>
`