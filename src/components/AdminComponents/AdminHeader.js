import React from "react";
import { Link, useNavigate } from "react-router-dom";


const AdminHeader = ({setRole}) => {

  const navigate = useNavigate()

const handleLogout = ()=>{
  setRole("None");
  // navigate("/");
}

  return (
    <div>
      <header>
        <nav className="fixed-top navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand me-5">HelpDesk System</a>
            <Link to="/employees" className="navbar-brand me-5">
              Employees
            </Link>
            <Link to="/ticket" className="navbar-brand me-5">
              Tickets
            </Link>
            <Link to="/category" className="navbar-brand me-5">
              Category
            </Link>
            <Link to="/profile" className="navbar-brand me-5">
              Profile
            </Link>
          </div>
          <div className="ms-auto" >
            <Link to = "/" onClick={handleLogout} className="navbar-brand ">
              Logout
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AdminHeader;