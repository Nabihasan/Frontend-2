import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import authService from "../../services/authService";

const EmployeeHeader = ({setRole}) => {

  const handleLogout = () =>{
      setRole("None");
      // navigate("/");
    }
  

  return (
    <div>
      <header>
        <nav className="fixed-top navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand me-5">HelpDesk System</a>
            <Link to="/view" className="navbar-brand me-5">
              View Tickets
            </Link>
            <Link to="/raise" className="navbar-brand me-5">
              Raise Ticket
            </Link>
            <Link to="/profile"  className="navbar-brand me-5">
              Profile
            </Link>
          </div>
          <div className="ms-auto">
            <Link to="/"   className="navbar-brand " onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default EmployeeHeader;
