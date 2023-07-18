import React from "react";
import { Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";

import EmployeeHeader from "./components/EmployeeComponent/EmployeeHeader";

import CreateTicket from "./components/EmployeeComponent/CreateTicket";

import UpdateTicket from "./components/EmployeeComponent/UpdateTicket";
import ViewRecords from "./components/EmployeeComponent/ViewRecords";
import UserProfile from "./components/EmployeeComponent/UserProfile";


const EmployeeRoutes = ({setRole}) => {
    return (<>
      <EmployeeHeader setRole={setRole}/>
      <Routes>
        <Route path="/view" element={<ViewRecords />} />
        <Route path="/raise" element={<CreateTicket />} />
         <Route path="/ticket/:ticketId" element={<UpdateTicket/>} />

    <Route path="/profile" element={<UserProfile /> } />
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

  export default EmployeeRoutes;