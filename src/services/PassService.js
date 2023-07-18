import axios from "axios";

const PassService = {

    verifyMail(email){
        alert(email);
        return axios.post("http://localhost:8080/api/auth/update-password?comEmail="+email);
    },

    verifyotp(otp){
        return axios.post("http://localhost:8080/api/auth/verify-otp?OTP="+otp);
    },

    newpass(newPassword,confirmPassword,companyEmail){
        return axios.post(`http://localhost:8080/api/auth/new-password?companyEmail=${companyEmail}&newPassword=${newPassword}&confirmPassword=${confirmPassword}`);
    }
};

export default PassService;