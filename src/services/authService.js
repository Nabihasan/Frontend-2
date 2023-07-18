import axios from "axios"
const API_URL = "http://127.0.0.1:8080/api/auth";

const authService={
    async login(username, password){
        return await axios.post(API_URL + `/signin?username=${username}&password=${password}`)
        .then(response => {
            if(response.data.accessToken){
                localStorage.setItem("user",JSON.stringify(response.data));
                localStorage.setItem("id",response.data.id);
            }
            return response.data;
        });
    },

    logout(){
        localStorage.removeItem("user");
    },

    register(username, email ,password){
        return axios.post(API_URL + "signup",{
            username,
            email,
            password
        });
    },

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));;
    }
}

    export default authService;
