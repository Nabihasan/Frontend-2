import axios from "axios";

const BASE_URL ="http://127.0.0.1:8080/api/auth/signin";

export const myAxios = axios.create({
    baseURL: BASE_URL,
});
