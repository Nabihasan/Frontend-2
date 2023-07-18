import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PassService from "../services/PassService";
import Sign_img from "../components/Sign_img";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
const VerifyOTP = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    setOtp(e.target.value);
  };
  const handleClick = () => {
    // Navigate to a different page or route
    PassService.verifyotp(otp);
    navigate("/changepassword");
  };
  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h4 className="text-center col-lg-7" style={{ marginTop: "20%" }}>
            Verify-OTP
          </h4>

          <Form>
            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
              <Form.Control
                type="number"
                name="otp"
                onChange={onChange}
                placeholder="OTP"
              />
            </Form.Group>

            <Button
              variant="primary"
              className="col-lg-7"
              style={{ background: "success" }}
              type="submit"
              onClick={handleClick}
            >
              SUBMIT
            </Button>
            <div className="container">
              <span className="psw" style={{ marginLeft: "10%" }}>
                <a href="/">Back To Login</a>
              </span>
            </div>
          </Form>
        </div>
        <Sign_img />
      </section>
    </div>
  );
};

export default VerifyOTP;
