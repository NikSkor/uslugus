import {API_URL} from "./const";
import {createElement} from "./createElement";

export const renderModal = (parent, data) => {
  parent.textContent='';

  console.log(data);

  const body = createElement('div', {
    className: 'modal__body modal__body_person'
  }, parent);

  const container = createElement('div', {
    className: 'modal__container person'
  }, body);

  const service = createElement('div', {
    className: 'person__service service service_person'
  }, container);

  createElement('img', {
    src: `${API_URL}/${data.avatar}`,
    className: 'service__avatar',
    alt: `Аватар ${data.name}`
  }, service);

  // const service = createElement('div', {
  //   className: 'person__service service service_person'
  // }, container);

  // service
};

{/* <div class="modal__body modal__body_person">
        <div class="modal__container person">
          <div class="person__service service service_person">
            <img src="img/photo.png" alt="Аватар Иван" class="service__avatar" />
            <div class="service__present">
              <h3 class="service__title">Фотограф</h3>
              <p class="service__name">Иван П.</p>
            </div>
          
            <p class="service__price">от 4000 ₽</p>
          
            <div class="service__contacts">
              <a href="tel:89999806756" class="service__link service__link_phone">8 (999) 980-67-56</a>
              <a href="mailto:IvanPhoto@gmail.com" class="service__link service__link_email">IvanPhoto@gmail.com</a>
            </div>
          
            <div class="service__review">
              <div class="service__stars stars">
                <img src="img/star.svg" alt="Рейтинг специалиста 4 из 5" class="stars__item" />
                <img src="img/star.svg" alt="" class="stars__item" />
                <img src="img/star.svg" alt="" class="stars__item" />
                <img src="img/star.svg" alt="" class="stars__item" />
                <img src="img/star-o.svg" alt="" class="stars__item" />
              </div>
              <p class="service__count-review">4</p>
            </div>
          </div>

          <div class="person__about about">
            <h3 class="about__title">О себе</h3>
            <p class="about__text">
              Фотограф с 10 летним стажем<br />
              Основные направления съёмки: Пейзаж, Портретная съёмка, Реклама,
              Репортаж,<br />
              Свадебная съёмка,Food фотосъёмка, съёмка автомобилей.<br />
              Ответственный, пунктуальный, исполнительный.
            </p>
          </div>

          <div class="person__review review">
            <h3 class="review__title">Отзывы</h3>
            <ul class="review__list">
              <li class="review__item">
                <h4 class="review__name">Антон</h4>
                <div class="review__stars stars">
                  <img src="img/star.svg" alt="Рейтинг специалиста 5 из 5" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                </div>
                <p class="review__text">
                  Быстро, профессионально, качественно! Работой очень доволен!
                  Рекомендую!
                </p>
              </li>
              <li class="review__item">
                <h4 class="review__name">Наталья</h4>
                <div class="review__stars stars">
                  <img src="img/star.svg" alt="Рейтинг специалиста 3 из 5" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star-o.svg" alt="" class="stars__item" />
                  <img src="img/star-o.svg" alt="" class="stars__item" />
                </div>
                <p class="review__text">
                  Отсутствует помощь в постановке кадра. Снимки с контровым
                  освещением. Обрезает ноги. Без доп.освещения.
                </p>
              </li>
              <li class="review__item">
                <h4 class="review__name">Олег</h4>
                <div class="review__stars stars">
                  <img src="img/star.svg" alt="Рейтинг специалиста 4 из 5" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star-o.svg" alt="" class="stars__item" />
                </div>
                <p class="review__text">
                  Попросила Максима сделать фотосессию на фоне
                  достопримечательностей, так как была в отпуске в Калининграде.
                  Всё прошло на позитиве, комфортно и приятно. Фото получились
                  классные! Я очень довольна! Рекомендую! Спасибо, Максим!
                </p>
                <!-- <button class="review__open review__open_text">Развернуть</button> -->
              </li>
              <li class="review__item">
                <h4 class="review__name">Олег 2</h4>
                <div class="review__stars stars">
                  <img src="img/star.svg" alt="Рейтинг специалиста 4 из 5" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star.svg" alt="" class="stars__item" />
                  <img src="img/star-o.svg" alt="" class="stars__item" />
                  <img src="img/star-o.svg" alt="" class="stars__item" />
                </div>
                <p class="review__text">
                  Попросила Максима сделать фотосессию на фоне
                  достопримечательностей, так как была в отпуске в Калининграде.
                  Всё прошло на позитиве, комфортно и приятно. Фото получились
                  классные! Я очень довольна! Рекомендую! Спасибо, Максим!
                </p>
                <!-- <button class="review__open review__open_text">Свернуть</button> -->
              </li>
            </ul>
            <button class="review__open review__open_list">Все отзывы</button>
          </div>
          
          <form class="person__form form form_add-review">
            <fieldset class="form__fieldset form__fieldset_add-review">
              <label class="form__label">
                <span class="form__text">Имя</span>
                <input type="text" class="form__input" />
              </label>
              <label class="form__label">
                <span class="form__text">Телефон</span>
                <input type="text" class="form__input" />
              </label>
              <label class="form__label">
                <span class="form__text">Комментарий</span>
                <textarea class="form__textarea"></textarea>
              </label>
            </fieldset>
          
            <div class="form__wrapper-review">
              <div class="form__rating rating" data-stars="4">
                <svg class="rating__star" width="18" height="18" viewBox="0 0 18 18" data-rating="1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.3401 7.00099L16.34 7.001L16.3419 7.0065C16.3844 7.13479 16.3872 7.27292 16.3502 7.40288C16.3131 7.53281 16.2377 7.64857 16.1339 7.73509C16.1339 7.73511 16.1339 7.73513 16.1338 7.73515L12.9535 10.3821L12.7128 10.5824L12.788 10.8864L13.7976 14.97L13.7976 14.9701L13.7991 14.9758C13.8331 15.1065 13.8268 15.2444 13.7811 15.3715C13.7354 15.4985 13.6524 15.6088 13.543 15.6879L13.5412 15.6892C13.4379 15.7646 13.3144 15.807 13.1866 15.8109C13.0589 15.8149 12.9329 15.7802 12.8252 15.7113L12.8236 15.7103L9.27718 13.4636L9.26501 13.4559L9.25241 13.4489C9.20104 13.4204 9.09336 13.3714 8.95079 13.3849C8.83541 13.3959 8.75188 13.4438 8.71258 13.4704L5.42744 15.5516L5.4266 15.5521C5.29892 15.6333 5.14975 15.6743 4.99849 15.6696C4.84724 15.6648 4.7009 15.6147 4.57853 15.5257L4.57737 15.5248C4.44813 15.4314 4.35012 15.3011 4.29617 15.151C4.24221 15.0009 4.23483 14.838 4.27499 14.6837L4.27567 14.681L5.22599 10.9429L5.30306 10.6398L5.06418 10.4378L1.86935 7.7374L1.86936 7.73739L1.86667 7.73515C1.76284 7.64862 1.68746 7.53284 1.65036 7.40288C1.61326 7.27292 1.61615 7.13479 1.65866 7.0065L1.65869 7.00651L1.66045 7.00099C1.70017 6.87628 1.77656 6.76644 1.87965 6.6858C1.98274 6.60515 2.10774 6.55746 2.23835 6.54893L6.391 6.27922L6.70549 6.25879L6.82272 5.96626L8.39486 2.04304L8.39488 2.04305L8.39682 2.03808C8.44402 1.91654 8.5268 1.81208 8.63432 1.73835C8.74174 1.66469 8.86887 1.62513 8.99911 1.62482H8.99962C8.99965 1.62482 8.99968 1.62482 8.99971 1.62482C9.1303 1.62486 9.25784 1.66434 9.36562 1.73809C9.47342 1.81186 9.55642 1.91647 9.60375 2.03822L9.60374 2.03822L9.60508 2.0416L11.1542 5.9423L11.2702 6.23458L11.5839 6.25653L15.7598 6.54877L15.7622 6.54893C15.8928 6.55746 16.0178 6.60515 16.1209 6.6858C16.2239 6.76644 16.3003 6.87628 16.3401 7.00099Z"
                    stroke="#FFD600" />
                </svg>
                <svg class="rating__star" width="18" height="18" viewBox="0 0 18 18" data-rating="2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.3401 7.00099L16.34 7.001L16.3419 7.0065C16.3844 7.13479 16.3872 7.27292 16.3502 7.40288C16.3131 7.53281 16.2377 7.64857 16.1339 7.73509C16.1339 7.73511 16.1339 7.73513 16.1338 7.73515L12.9535 10.3821L12.7128 10.5824L12.788 10.8864L13.7976 14.97L13.7976 14.9701L13.7991 14.9758C13.8331 15.1065 13.8268 15.2444 13.7811 15.3715C13.7354 15.4985 13.6524 15.6088 13.543 15.6879L13.5412 15.6892C13.4379 15.7646 13.3144 15.807 13.1866 15.8109C13.0589 15.8149 12.9329 15.7802 12.8252 15.7113L12.8236 15.7103L9.27718 13.4636L9.26501 13.4559L9.25241 13.4489C9.20104 13.4204 9.09336 13.3714 8.95079 13.3849C8.83541 13.3959 8.75188 13.4438 8.71258 13.4704L5.42744 15.5516L5.4266 15.5521C5.29892 15.6333 5.14975 15.6743 4.99849 15.6696C4.84724 15.6648 4.7009 15.6147 4.57853 15.5257L4.57737 15.5248C4.44813 15.4314 4.35012 15.3011 4.29617 15.151C4.24221 15.0009 4.23483 14.838 4.27499 14.6837L4.27567 14.681L5.22599 10.9429L5.30306 10.6398L5.06418 10.4378L1.86935 7.7374L1.86936 7.73739L1.86667 7.73515C1.76284 7.64862 1.68746 7.53284 1.65036 7.40288C1.61326 7.27292 1.61615 7.13479 1.65866 7.0065L1.65869 7.00651L1.66045 7.00099C1.70017 6.87628 1.77656 6.76644 1.87965 6.6858C1.98274 6.60515 2.10774 6.55746 2.23835 6.54893L6.391 6.27922L6.70549 6.25879L6.82272 5.96626L8.39486 2.04304L8.39488 2.04305L8.39682 2.03808C8.44402 1.91654 8.5268 1.81208 8.63432 1.73835C8.74174 1.66469 8.86887 1.62513 8.99911 1.62482H8.99962C8.99965 1.62482 8.99968 1.62482 8.99971 1.62482C9.1303 1.62486 9.25784 1.66434 9.36562 1.73809C9.47342 1.81186 9.55642 1.91647 9.60375 2.03822L9.60374 2.03822L9.60508 2.0416L11.1542 5.9423L11.2702 6.23458L11.5839 6.25653L15.7598 6.54877L15.7622 6.54893C15.8928 6.55746 16.0178 6.60515 16.1209 6.6858C16.2239 6.76644 16.3003 6.87628 16.3401 7.00099Z"
                    stroke="#FFD600" />
                </svg>
                <svg class="rating__star" width="18" height="18" viewBox="0 0 18 18" data-rating="3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.3401 7.00099L16.34 7.001L16.3419 7.0065C16.3844 7.13479 16.3872 7.27292 16.3502 7.40288C16.3131 7.53281 16.2377 7.64857 16.1339 7.73509C16.1339 7.73511 16.1339 7.73513 16.1338 7.73515L12.9535 10.3821L12.7128 10.5824L12.788 10.8864L13.7976 14.97L13.7976 14.9701L13.7991 14.9758C13.8331 15.1065 13.8268 15.2444 13.7811 15.3715C13.7354 15.4985 13.6524 15.6088 13.543 15.6879L13.5412 15.6892C13.4379 15.7646 13.3144 15.807 13.1866 15.8109C13.0589 15.8149 12.9329 15.7802 12.8252 15.7113L12.8236 15.7103L9.27718 13.4636L9.26501 13.4559L9.25241 13.4489C9.20104 13.4204 9.09336 13.3714 8.95079 13.3849C8.83541 13.3959 8.75188 13.4438 8.71258 13.4704L5.42744 15.5516L5.4266 15.5521C5.29892 15.6333 5.14975 15.6743 4.99849 15.6696C4.84724 15.6648 4.7009 15.6147 4.57853 15.5257L4.57737 15.5248C4.44813 15.4314 4.35012 15.3011 4.29617 15.151C4.24221 15.0009 4.23483 14.838 4.27499 14.6837L4.27567 14.681L5.22599 10.9429L5.30306 10.6398L5.06418 10.4378L1.86935 7.7374L1.86936 7.73739L1.86667 7.73515C1.76284 7.64862 1.68746 7.53284 1.65036 7.40288C1.61326 7.27292 1.61615 7.13479 1.65866 7.0065L1.65869 7.00651L1.66045 7.00099C1.70017 6.87628 1.77656 6.76644 1.87965 6.6858C1.98274 6.60515 2.10774 6.55746 2.23835 6.54893L6.391 6.27922L6.70549 6.25879L6.82272 5.96626L8.39486 2.04304L8.39488 2.04305L8.39682 2.03808C8.44402 1.91654 8.5268 1.81208 8.63432 1.73835C8.74174 1.66469 8.86887 1.62513 8.99911 1.62482H8.99962C8.99965 1.62482 8.99968 1.62482 8.99971 1.62482C9.1303 1.62486 9.25784 1.66434 9.36562 1.73809C9.47342 1.81186 9.55642 1.91647 9.60375 2.03822L9.60374 2.03822L9.60508 2.0416L11.1542 5.9423L11.2702 6.23458L11.5839 6.25653L15.7598 6.54877L15.7622 6.54893C15.8928 6.55746 16.0178 6.60515 16.1209 6.6858C16.2239 6.76644 16.3003 6.87628 16.3401 7.00099Z"
                    stroke="#FFD600" />
                </svg>
                <svg class="rating__star" width="18" height="18" viewBox="0 0 18 18" data-rating="4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.3401 7.00099L16.34 7.001L16.3419 7.0065C16.3844 7.13479 16.3872 7.27292 16.3502 7.40288C16.3131 7.53281 16.2377 7.64857 16.1339 7.73509C16.1339 7.73511 16.1339 7.73513 16.1338 7.73515L12.9535 10.3821L12.7128 10.5824L12.788 10.8864L13.7976 14.97L13.7976 14.9701L13.7991 14.9758C13.8331 15.1065 13.8268 15.2444 13.7811 15.3715C13.7354 15.4985 13.6524 15.6088 13.543 15.6879L13.5412 15.6892C13.4379 15.7646 13.3144 15.807 13.1866 15.8109C13.0589 15.8149 12.9329 15.7802 12.8252 15.7113L12.8236 15.7103L9.27718 13.4636L9.26501 13.4559L9.25241 13.4489C9.20104 13.4204 9.09336 13.3714 8.95079 13.3849C8.83541 13.3959 8.75188 13.4438 8.71258 13.4704L5.42744 15.5516L5.4266 15.5521C5.29892 15.6333 5.14975 15.6743 4.99849 15.6696C4.84724 15.6648 4.7009 15.6147 4.57853 15.5257L4.57737 15.5248C4.44813 15.4314 4.35012 15.3011 4.29617 15.151C4.24221 15.0009 4.23483 14.838 4.27499 14.6837L4.27567 14.681L5.22599 10.9429L5.30306 10.6398L5.06418 10.4378L1.86935 7.7374L1.86936 7.73739L1.86667 7.73515C1.76284 7.64862 1.68746 7.53284 1.65036 7.40288C1.61326 7.27292 1.61615 7.13479 1.65866 7.0065L1.65869 7.00651L1.66045 7.00099C1.70017 6.87628 1.77656 6.76644 1.87965 6.6858C1.98274 6.60515 2.10774 6.55746 2.23835 6.54893L6.391 6.27922L6.70549 6.25879L6.82272 5.96626L8.39486 2.04304L8.39488 2.04305L8.39682 2.03808C8.44402 1.91654 8.5268 1.81208 8.63432 1.73835C8.74174 1.66469 8.86887 1.62513 8.99911 1.62482H8.99962C8.99965 1.62482 8.99968 1.62482 8.99971 1.62482C9.1303 1.62486 9.25784 1.66434 9.36562 1.73809C9.47342 1.81186 9.55642 1.91647 9.60375 2.03822L9.60374 2.03822L9.60508 2.0416L11.1542 5.9423L11.2702 6.23458L11.5839 6.25653L15.7598 6.54877L15.7622 6.54893C15.8928 6.55746 16.0178 6.60515 16.1209 6.6858C16.2239 6.76644 16.3003 6.87628 16.3401 7.00099Z"
                    stroke="#FFD600" />
                </svg>
                <svg class="rating__star" width="18" height="18" viewBox="0 0 18 18" data-rating="5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.3401 7.00099L16.34 7.001L16.3419 7.0065C16.3844 7.13479 16.3872 7.27292 16.3502 7.40288C16.3131 7.53281 16.2377 7.64857 16.1339 7.73509C16.1339 7.73511 16.1339 7.73513 16.1338 7.73515L12.9535 10.3821L12.7128 10.5824L12.788 10.8864L13.7976 14.97L13.7976 14.9701L13.7991 14.9758C13.8331 15.1065 13.8268 15.2444 13.7811 15.3715C13.7354 15.4985 13.6524 15.6088 13.543 15.6879L13.5412 15.6892C13.4379 15.7646 13.3144 15.807 13.1866 15.8109C13.0589 15.8149 12.9329 15.7802 12.8252 15.7113L12.8236 15.7103L9.27718 13.4636L9.26501 13.4559L9.25241 13.4489C9.20104 13.4204 9.09336 13.3714 8.95079 13.3849C8.83541 13.3959 8.75188 13.4438 8.71258 13.4704L5.42744 15.5516L5.4266 15.5521C5.29892 15.6333 5.14975 15.6743 4.99849 15.6696C4.84724 15.6648 4.7009 15.6147 4.57853 15.5257L4.57737 15.5248C4.44813 15.4314 4.35012 15.3011 4.29617 15.151C4.24221 15.0009 4.23483 14.838 4.27499 14.6837L4.27567 14.681L5.22599 10.9429L5.30306 10.6398L5.06418 10.4378L1.86935 7.7374L1.86936 7.73739L1.86667 7.73515C1.76284 7.64862 1.68746 7.53284 1.65036 7.40288C1.61326 7.27292 1.61615 7.13479 1.65866 7.0065L1.65869 7.00651L1.66045 7.00099C1.70017 6.87628 1.77656 6.76644 1.87965 6.6858C1.98274 6.60515 2.10774 6.55746 2.23835 6.54893L6.391 6.27922L6.70549 6.25879L6.82272 5.96626L8.39486 2.04304L8.39488 2.04305L8.39682 2.03808C8.44402 1.91654 8.5268 1.81208 8.63432 1.73835C8.74174 1.66469 8.86887 1.62513 8.99911 1.62482H8.99962C8.99965 1.62482 8.99968 1.62482 8.99971 1.62482C9.1303 1.62486 9.25784 1.66434 9.36562 1.73809C9.47342 1.81186 9.55642 1.91647 9.60375 2.03822L9.60374 2.03822L9.60508 2.0416L11.1542 5.9423L11.2702 6.23458L11.5839 6.25653L15.7598 6.54877L15.7622 6.54893C15.8928 6.55746 16.0178 6.60515 16.1209 6.6858C16.2239 6.76644 16.3003 6.87628 16.3401 7.00099Z"
                    stroke="#FFD600" />
                </svg>
                <input type="hidden" class="rating__input" name="rating">
              </div>
              <button class="form__submit">Опубликовать отзыв</button>
            </div>
          </form>
          
          <button class="modal__close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.75 5.25L5.25 18.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.75 18.75L5.25 5.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div> */}