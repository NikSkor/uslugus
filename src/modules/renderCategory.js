import {createCategory} from "./createCategory";
import {getCategory} from "./getCategory";
import {renderList} from "./renderList";
import {store} from "./store"

export const renderCategory = async () => {
  const category = await getCategory();

  const categoryList = document.querySelector('.category__list');
  categoryList.textContent = '';

  const categoryModal = category.map(createCategory);

  console.log(categoryModal);
  
  categoryList.append(...categoryModal);

  // const chosenCategory = document

  // renderList(`${API_URL}/api/service?search=${}`)
};