import axios from "axios";
import authHeader from "./class_auth_header";

const API_URL = 'http://127.0.0.1:8080/api/test/';

class UserService{

    getPublicContent(){
        return axios.get(API_URL +'all');
    }

    getUserBoard(){
        return axios.get(API_URL +'user', {headers: authHeader()});
    }

    getAdminBoard(){
        return axios.get(API_URL +'admin',{headers:authHeader()});
    }
}

    export default new UserService();