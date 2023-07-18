import axios from "axios";
import authHeader from "./auth-header";

const SUBCATEGORY_BASE_URL = 'http://127.0.0.1:8080/subcategory';

const subCategoryService = {
  getSubCategory() {
    return axios.get(SUBCATEGORY_BASE_URL, {headers: authHeader()});
  },

  getSubCategoryByCategoryId(categoryId){
    return axios.get(SUBCATEGORY_BASE_URL+"/category/"+categoryId, {headers: authHeader()});
  },

  getSubCategoryById(subcategoryId) {
    return axios.get(`${SUBCATEGORY_BASE_URL}/${subcategoryId}`,{headers: authHeader()});
  },

  addSubCategory(subCategoryName,categoryId){
    return axios.post(`${SUBCATEGORY_BASE_URL}?name=${subCategoryName}&categoryId=${categoryId}` ,{headers: authHeader()});
  },

  deleteSubCategory(subcategoryId){
    return axios.delete(`${SUBCATEGORY_BASE_URL}/${subcategoryId}`, {headers: authHeader()});
  },

  updateSubCategory(subcategoryId,newName){
    return axios.put(`${SUBCATEGORY_BASE_URL}/${subcategoryId}?name=${newName}`, {headers: authHeader()});
  }
};

export default subCategoryService;
