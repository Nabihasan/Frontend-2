import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import Login from "./components/Login";
import LoginRoutes from "./LoginRoutes";

const App = () => {
  const [userRole, setUserRole] = useState("None");

  console.log(userRole);
  return (
    <div>
      <div className="container">
        <Routes>
        {userRole === "None" && (
          <>
          <Route path="/" element={<Login setRole={setUserRole} />}/>
          <Route path="/*" element={<LoginRoutes />} />
          </>
          )}
          {userRole === "ROLE_ADMIN" && (
            <Route path="/*" element={<AdminRoutes setRole={setUserRole} />} />
          )}
          {userRole === "ROLE_USER" && (
            <Route path="/*" element={<EmployeeRoutes setRole={setUserRole}/>} />
          )}
      
          <Route exact path="*" element={<Login setRole={setUserRole}/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;