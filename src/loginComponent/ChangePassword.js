import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PassService from "../services/PassService";
import Sign_img from "../components/Sign_img";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
const ChangePassword = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const navigate = useNavigate();

  const onChange1 = (e) => {
    setPass1(e.target.value);
  };
  const onChange2 = (e) => {
    setPass2(e.target.value);
  };
 
  const handleClick = () => {
    // alert(localStorage.getItem('email'));
    PassService.newpass(pass1, pass2, `${localStorage.getItem("email")}`);
    navigate("/");
  };
  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h4 className="text-center col-lg-7" style={{ marginTop: "20%" }}>
            Change Password
          </h4>

          <Form>
            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="newPassword"
                onChange={onChange1}
                placeholder="New Password"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-7"
              controlId="formBasicConfirmPassword"
            >
              <Form.Control
                type="password"
                name="confirmPassword"
                onChange={onChange2}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Button
              variant="primary"
              className="col-lg-7"
              style={{ background: "success" }}
              type="submit"
              onClick={handleClick}
            >
              Change Password
            </Button>
          </Form>
        </div>
        <Sign_img />
      </section>
    </div>
  );
};
export default ChangePassword;
