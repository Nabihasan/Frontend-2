import React from "react";
import { Route,Routes } from "react-router-dom";
import AdminHeader from "./components/AdminComponents/AdminHeader";
import Footer from "./components/Footer";
import ListCategory from "./components/AdminComponents/CategoryComponents/ListCategory";
import ListTickets from "./components/AdminComponents/TicketComponents/ListTickets"
import TicketDetails from "./components/AdminComponents/TicketComponents/TicketDetails"
import ListEmp from "./components/AdminComponents/EmployeeComponents/ListEmp"
import AddEmp from "./components/AdminComponents/EmployeeComponents/AddEmp"
import EditUser from "./components/AdminComponents/EditUser";
import UserProfile from "./components/AdminComponents/UserProfile";

const AdminRoutes = ({setRole}) => {
    return (<>
      <AdminHeader setRole={setRole}/>
      <Routes>
        <Route path="/ticket" element={<ListTickets />} />
        <Route path="/ticket/:ticketId" element={<TicketDetails />} />
        <Route path="/category" element={<ListCategory />} />
        <Route path="/employees" element={<ListEmp />} />
        <Route path="/addEmployee" element={<AddEmp />} />
        <Route path="/edituser/:id" element={<EditUser />}/>
        <Route path="/profile" element={<UserProfile/>}/>
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

  export default AdminRoutes;