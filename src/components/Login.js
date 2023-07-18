import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authService from "../services/authService";

const LoginEmp = ({ setRole }) => {
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    authService.login(companyEmail,password)
    .then((res)=>{

      // console.log(res.role);
      setRole(res.role[0]);
      if(res.role[0]==="ROLE_ADMIN"){
        navigate("/ticket");
      }
      if(res.role[0]==="ROLE_USER"){
        navigate("/view");
      }
    })
  };

  const handleUsernameChange = (e) => {
    setCompanyEmail(e.target.value);
    // console.log(companyEmail);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-7" style={{ marginTop: "20%" }}>
            Login
          </h3>

          <Form>
            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={companyEmail}
                // onChange={(e) => handleChange(e, "comEmail")}
                onChange={handleUsernameChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={password}
                // onChange={(e) => handleChange(e, "password")}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              variant="primary"
              className="col-lg-7"
              style={{ background: "blue" }}
              type="submit"
              onClick={handleFormSubmit}
            >
              Login
            </Button>
            <div className="container">
              <span className="psw" style={{ marginLeft: "10%" }}>
                <Link to="/forgot">Forgot-password?</Link>
              </span>
            </div>
          </Form>
        </div>
        <Sign_img />
      </section>
    </div>
  );
};

export default LoginEmp;
