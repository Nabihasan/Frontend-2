import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import PassService from "../services/PassService.js";
import Sign_img from "../components/Sign_img.js";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const onChange = (e) => {
    setEmail(e.target.value);
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    // Navigate to a different page or route
    await PassService.verifyMail(email);
    // console.log(com);
    localStorage.setItem("email", email);
    navigate("/verifyOTP");
  };
  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h4 className="text-center col-lg-7" style={{ marginTop: "20%" }}>
            Forgot Password
          </h4>

          <Form>
            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={onChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              className="col-lg-7"
              style={{ background: "success" }}
              type="submit"
              onClick={handleClick}
            >
              Forgot Password
            </Button>
            <div className="container">
              <span className="psw" style={{ marginLeft: "10%" }}>
                <a href="/">Back ToLogin</a>
              </span>
            </div>
          </Form>
        </div>
        <Sign_img />
      </section>
    </div>
  );
};

export default ForgotPassword;
