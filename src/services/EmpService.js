import axios from "axios";
import authHeader from "./auth-header";

const BASE_API_URL = "http://127.0.0.1:8080";

const EmpService = {
    getAllEmp(){
        return axios.get(BASE_API_URL+"/user",{headers:authHeader()});
        },
        getEmpById(id){
            return axios.get(BASE_API_URL+"/user/"+id,{headers:authHeader()});
        },
        saveEmp(emp){
            return axios.post(BASE_API_URL+"/api/auth/signup",emp,{headers:authHeader()});
        },
        deleteEmp(id){
            return axios.delete(BASE_API_URL+"/user/"+id,{headers:authHeader()});
        },
        updateEmp(id,emp){
            return axios.put(BASE_API_URL+"/user/"+id,emp,{headers:authHeader()});
        }
};

export default EmpService;