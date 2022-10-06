export const createCategory = (item) => {
  const {
    title,
    rus
  } = item;

  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category__item');

  const categoryBtn = document.createElement('button');
  categoryBtn.classList.add('category__btn', `category__btn_${title}`);
  categoryBtn.setAttribute('data-value', title);
  categoryBtn.textContent = `${rus}`;

  categoryItem.append(categoryBtn);

  return categoryItem;
};
