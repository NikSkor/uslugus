import {createCategory} from "./createCategory";
import {getCategory} from "./getCategory";


export const renderCategory = async () => {
  const category = await getCategory();

  const categoryList = document.querySelector('.category__list');
  categoryList.textContent = '';

  const categoryModal = category.map(createCategory);

  console.log(categoryModal);
  
  categoryList.append(...categoryModal);

};