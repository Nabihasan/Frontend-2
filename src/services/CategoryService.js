import axios from "axios";
import authHeader from "./auth-header";
const CATEGORY_BASE_URL = 'http://127.0.0.1:8080/category';

const categoryService = {
  getCategory() {
    // console.log(authHeader());
    return axios.get(CATEGORY_BASE_URL, {headers: authHeader()});
  },

  getCategoryById(categoryId) {
    return axios.get(`${CATEGORY_BASE_URL}/${categoryId}`, {headers: authHeader()});
  },

  addCategory(categoryName){
    return axios.post(`${CATEGORY_BASE_URL}?name=${categoryName}`, {headers: authHeader()});
  },

  deleteCategory(categoryId){
    return axios.delete(`${CATEGORY_BASE_URL}/${categoryId}`, {headers: authHeader()});
  },
  updateCategory(categoryId,newName){
    return axios.put(`${CATEGORY_BASE_URL}/${categoryId}?name=${newName}`, {headers: authHeader()});
  }
};

export default categoryService;
