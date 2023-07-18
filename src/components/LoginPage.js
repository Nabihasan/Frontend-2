import React from "react";
import { Link } from "react-router-dom";



const LoginPage = ({setRole}) =>{
        const handleLoginAdmin = () => {
          setRole("admin");
        };
      
        const handleLoginEmployee = () => {
          setRole("employee");
        };
    return (
        <div><h1>Login Page</h1>
            <Link to = "/ticket" className="btn btn-primary m-5"
            onClick = {handleLoginAdmin}> Login As Admin </Link>
            <Link to = "/hello" className="btn btn-primary m-5"
            onClick = {handleLoginEmployee}> Login As Employee </Link>
        </div>
    );
}

export default LoginPage;