import React from 'react';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import EmpService from '../../../services/EmpService';

const SearchAdd = ({updateEmpList,clearSearch}) => {
  
  const [empId, setEmpId] = useState("");

  const handleInputChange = (e) => {
    setEmpId(e.target.value);
  };

  const handleSearch = async () => {
    if (empId) {
      if (isNaN(empId)) {
        return alert("Enter Correct ID");
      }
      try {
        const response = await EmpService.getEmpById(empId);
        if (response) {
          // console.log(response.data)
          updateEmpList([response.data]);
         } else {
            alert("Employee with Id: " + empId + " not found!");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("Employee with Id: " + empId + " not found!");
        } else {
          alert("An error occurred: " + error.message);
          console.log(error)
        }
      }
    } else {
      alert("Enter Correct ID");
    }
  };

  const handleClearSearch = () => {
    setEmpId("");
    clearSearch();
  };
  return (
  
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
        <input
            type="text"
            value={empId}
            onChange={handleInputChange}
            placeholder="Search By Employee Id"
            className="form-control me-2"
          />
          <button className="btn btn-primary me-2 my-2" 
          onClick={handleSearch}>
            Search
          </button>
          <button className="btn btn-warning my-2" 
          onClick={handleClearSearch}>
            Clear
          </button>
        </div>
        <div><NavLink to="/addEmployee" className="btn btn-primary my-2"   >Add Employee</NavLink></div>
       
      </div>
   
  )
}

export default SearchAdd;