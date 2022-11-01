import starSvg from '../img/star.svg';
import starOSvg from '../img/star-o.svg';


export const createStars = (commentOrStars) => {
  const stars = Array.isArray(commentOrStars) 
  ? Math.round(commentOrStars
    .reduce((acc, item) => item.stars + acc, 0) / commentOrStars.length) || 0
  : commentOrStars;
  
  const wrapper = document.createElement('div');
  wrapper.classList.add('stars');

  for (let i = 0; i < 5; i++) {
    const star = document.createElement('img');
    star.classList.add('stars__item');

    if (i === 0) {
      star.alt = `Рейтинг специалиста ${stars} из 5`;
    } else {
      star.alt = '';
    }

    if (stars > i) {
      star.src = starSvg;
    } else {
      star.src = starOSvg;
    }

    wrapper.append(star);
  }

  return wrapper;

};