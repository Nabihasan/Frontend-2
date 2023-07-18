import React,{ useEffect, useState } from 'react';
import EmpService from '../../services/EmpService';
 import {  useNavigate, useParams } from 'react-router-dom';


const EditUser = () => {

    
    const [emp,setEmp] =  useState({
        username:"",
        dob:"",
        email:"",
        role:"",
        contactNo:""
});
    const [msg,setMsg]=useState("");
    const navigate = useNavigate();

   //const [fetchEmp,setFetchEmp] = useState([]);
    

    const data= useParams();
   
   // const navigate= useNavigate();
    
    useEffect(()=>{
        EmpService.getEmpById(data.id).then((res)=>{
            setEmp(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);


    const handleChange= (e) =>{
        const value = e.target.value;
        setEmp({...emp,[e.target.name]:value});
    };


    // const updateEmp= (e)=>{
    //     e.preventDefault();
    //     EmpService.updateEmp(emp.id,emp).then((res)=>{
    //             navigate("/listEmp");
    //     }).catch((error)=>{
    //         alert("error");
    //     })
       
    // };
    const updateEmp= (e)=>{
        e.preventDefault();
        EmpService
        .updateEmp(emp.id,emp).then((res)=> {
            setMsg("Employee Update Successfully");
           // navigate("/listEmp");
           
        })
        .catch((e)=>{
            console.log(console.error);
        });
    };

    const deleteEmp = () => {
       const res = window.confirm("Delete this Employee?\nIt will also delete corresponding Tickets!");
        if(res){
            EmpService
        .deleteEmp(data.id)
        .then(()=>{
            alert("Succesfully Deleted")
          navigate("/employees");
        })
        .catch((error)=>{
            console.log(error);
            alert(error)
        });}
      };

  return (
    <div>
      {/* <Header/> */}
      <div className='container ' >
      <section className="h-100 bg-sucess"  style={{marginTop:'5%'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
           
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Update Employee
                {msg && <p className="text-success">{msg}</p>}
                </h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    NAME
                      <input type="text" id="form3Example1m" className="form-control " name='username'  placeholder="Name" value={emp.username} onChange={(e)=> handleChange(e)} />
                      
                      </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                     DOB
                      <input type="text" id="form3Example1n" class="form-control " name='dob' placeholder='dd-mm-yyyy' value={emp.dob} onChange={(e)=> handleChange(e)} />
                      
                    </div>
                  </div>
                 
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    EMAIL ID
                      <input type="email" id="form3Example1m1" className="form-control " name='email' placeholder='Personal Email' value={emp.email}  onChange={(e)=> handleChange(e)} />
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    CONTACT
                      <input type="number" id="form3Example1n1" className="form-control " name='contactNo' placeholder='Contact Number' value={emp.contactNo} onChange={(e)=> handleChange(e)} />
                      
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    COMPANY EMAIL ID
                      <input disabled type="email" id="form3Example1m1" className="form-control " name='email' placeholder='Company Email' value={emp.companyEmail}  onChange={(e)=> handleChange(e)} />
                      
                    </div>
                  </div>
                  </div>
                
                USER-TYPE
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                
                <div className="col-md-6 mb-4">
                
                  <div className="form-check form-check-inline mb-0 me-4">
                  
                    <input className="form-check-input" type="radio"  id="femaleGender"
                     value="ROLE_ADMIN"  name='role' onChange={(e)=> handleChange(e)} checked={emp.role==="ROLE_ADMIN"} />
                   Admin
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="role" id="maleGender"
                      value="ROLE_USER"  onChange={(e)=> handleChange(e)} checked={emp.role==="ROLE_USER"}  />
                    Employee
                  </div>
                 </div>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={updateEmp}> UPDATE </button>
                  <button type="button" className="btn btn-light btn-dark" onClick={deleteEmp}>DELETE</button>
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

export default EditUser;