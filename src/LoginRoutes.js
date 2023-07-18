import React from "react";
import ForgotPassword from "./loginComponent/ForgotPassword";
import VerifyOTP from "./loginComponent/VerifyOTP";
import ChangePassword from "./loginComponent/ChangePassword";
import Footer from "./components/Footer";
import { Route,Routes } from "react-router-dom";
const LoginRoutes = () => {
    return (<>
      
      <Routes>
      <Route path="/forgot" element={<ForgotPassword  />}  /> 
          <Route path="/verifyOTP" element={<VerifyOTP  />} />
          <Route path="/changepassword" element={<ChangePassword />} />

        <Route exact path="/*" element={
                <div className="mt-5">
                  <h3>Page Not Found</h3>
                </div>
              }
            />
      </Routes>
       <Footer />
       </>
    );
  };

  export default LoginRoutes;