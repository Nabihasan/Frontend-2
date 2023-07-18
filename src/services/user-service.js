import {myAxios} from "./helper";

export const loginUser =async(loginDetails) =>{
    console.log(loginDetails);
    return await myAxios.post('/login',loginDetails);

}