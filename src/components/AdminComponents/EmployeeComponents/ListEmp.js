import React, { useEffect, useState } from "react";
import SearchAdd from "./SearchAdd";
import EmpTable from "./EmpTable";
import EmpService from "../../../services/EmpService";

const ListEmp = () => {
  const [empList,setEmpList] = useState([]);

  
  useEffect(() =>{
    
    init();

  },[]);
  const init = () =>{

      EmpService
      .getAllEmp()
      .then((res) => {
        console.log(res?.data);
        setEmpList(res?.data);
      })
      .catch((error) => {
       alert("error");
      });
    }

  const clearSearch = () => {
    init();
  };

  const update = (updatedEmp) => {
    setEmpList(updatedEmp);
  };


  return(
    <div className="container mt-5 mb-5">
    <h2 className="text-center ">Employees</h2>
    <SearchAdd updateEmpList={update} 
    clearSearch={clearSearch} />
    <EmpTable empList={empList} />
  </div>
  );
};
export default ListEmp;
