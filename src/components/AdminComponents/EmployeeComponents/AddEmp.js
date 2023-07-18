import React, { useState } from 'react';
import EmpService from '../../../services/EmpService';

const AddUser = () => {

    const [emp,setEmp] =  useState({
        username:"",
        dob:"",
        email:"",
        role:"",
        contactNo:""
    });

    const [msg,setMsg]=useState("");


    const handleChange= (e) =>{
        const value = e.target.value;
        setEmp({...emp,[e.target.name]:value});
    };

    const reset = ()=>{
      setEmp({
        username:"",
        dob:"",
        email:"",
        role:"",
        contactNo:""
    })
    }

    const submitEmp= (e)=>{
        e.preventDefault();
        EmpService
        .saveEmp(emp)
        .then((res)=> {
            setMsg("Employee Added Successfully");
            setEmp({
              username:"",
              dob:"",
              email:"",
              role:"",
              contactNo:""
            });
        })
        .catch((e)=>{
            console.log(console.error);
        });
   };

  return (
    <div>
    
      <div className='container ' >
      <section className="h-100 bg-DARK"  style={{marginTop:'5%'}} >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
           
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Add Employee
                {msg && <p className="text-success">{msg}</p>}
                </h3>
                
                <div className="row">
                
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    NAME
                      <input type="text" id="form3Example1m" className='form-control' name='username' value={emp.username} placeholder='Name' onChange={(e)=> handleChange(e)} required />
                      
                      </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                     DATE OF BIRTH
                      <input type="text" id="form3Example1n" class="form-control"  name='dob' value={emp.dob} placeholder='dd-mm-yyyy' onChange={(e)=> handleChange(e)} required />
                      
                    </div>
                  </div>
                 
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    EMAIL ID
                      <input type="email" id="form3Example1m1" className="form-control" name='email' value={emp.email} placeholder='Personal Email' onChange={(e)=> handleChange(e)} required />
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    CONTACT
                      <input type="number" id="form3Example1n1" className="form-control"  name='contactNo' value={emp.contactNo} placeholder='Contact Number' onChange={(e)=> handleChange(e)} required />
                      
                    </div>
                  </div>
                </div>

                
                USER-TYPE
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                
                <div className="col-md-6 mb-4">
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name='role' id="maleGender"
                      value="Employee" onChange={(e)=> handleChange(e)} required />
                    Employee
                  </div>
                
                  <div className="form-check form-check-inline mb-0 me-4">
                  
                    <input className="form-check-input" type="radio"  id="femaleGender"
                      value="ROLE_ADMIN" name='role'  onChange={(e)=> handleChange(e)} required />
                   Admin
                  </div>

                 </div>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" onClick = {reset} className="btn btn-light btn-dark">RESET ALL</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={submitEmp}>REGISTER</button>
                  
                </div>
             
              </div>
            </div>
          </div>
         
        </div>
        
      </div>
      
    </div>
  </div>
</section>
      </div>
    </div>
  )
}

export default AddUser;