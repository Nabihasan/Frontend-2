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
    

   
   // const navigate= useNavigate();
    
    useEffect(()=>{
        const id = localStorage.getItem('id');
        EmpService.getEmpById(id).then((res)=>{
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
                <h3 className="mb-5 text-uppercase">Your Profile
                {msg && <p className="text-success">{msg}</p>}
                </h3>
                <fieldset disabled>
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
                    PERSONAL EMAIL ID
                      <input type="email" id="form3Example1m1" className="form-control " name='email' placeholder='Personal Email' value={emp.email}  onChange={(e)=> handleChange(e)} />
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    CONTACT NUMBER
                      <input type="number" id="form3Example1n1" className="form-control " name='contactNo' placeholder='Contact Number' value={emp.contactNo} onChange={(e)=> handleChange(e)} />
                      
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    COMPANY EMAIL ID
                      <input type="email" id="form3Example1m1" className="form-control " name='email' placeholder='Company Email' value={emp.companyEmail}  onChange={(e)=> handleChange(e)} />
                      
                    </div>
                  </div>
                  </div>
                </fieldset>
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