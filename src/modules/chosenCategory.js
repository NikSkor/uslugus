import {API_URL} from "./const";
import {renderList} from "./renderList";

export const chosenCategory = async (category) => {
  renderList(`${API_URL}/api/service?search=${category}`);
};