import React, { useState, useEffect } from "react";
import ticketService from "../../services/TicketService";
import { useParams } from "react-router-dom";
import Feedback from "react-bootstrap/esm/Feedback";

const TicketDetails = () => {
  const [tickets, setTickets] = useState([]);
  const [updatedTicket, setUpdatedTicket] = useState({
    solution:"",
    feedback:"",
    status:"",

});
  const param = useParams();

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await ticketService.getTicketByIdForUser(param.ticketId);
    setTickets(response.data);
    setUpdatedTicket(response.data[0]);
    // console.log(response.data[0]);
   
  }

 const handleChange = (e)=>{
  const value= e.target.value;
  setUpdatedTicket({...updatedTicket,[e.target.name]:value});
 };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cnf = window.confirm("Close This Ticket?\n It will be Permanent!!");
    if(cnf){
        const res = prompt("Give Your FeedBack");
        setUpdatedTicket({...updatedTicket,["feedback"]:res,["status"]:"Closed"});
        const updateTicket = async ()=>{
          await ticketService.updateTicket(param.ticketId,updatedTicket);
        }
        try {
          console.log(updatedTicket);
          updateTicket();
          alert("Successfully Closed");
        } catch (error) {
          alert("Something Went Wrong");
        }
    }
  };

  const priorityLabels = {
    "0": "Low",
    "1": "Medium",
    "2": "High",
    "3": "Critical",
  };

  

  return (
    <div className="container row justify-content-center">
    <div className="card my-2 mt-5 col-8">
      <div className="card-header bg-primary text-white">
        <center><h3 className="card-title">Ticket Details</h3></center>
      </div>
      {tickets.map((ticket) => (

        <div className="card-body" key={ticket.ticketId}>
          <form onSubmit={handleSubmit}>
            <fieldset disabled>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Ticket Id</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.ticketId} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Emp Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.user.username} />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Emp ID</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.user.id} />
                </div>
              </div>
              
              <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.user.email} />
                </div>
              </div>
              <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Contact</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.user.contactNo} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Category:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.category.categoryName} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Sub-Category:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.subCategory.subCategoryName} />
                </div>
              </div>
            
              <div className="row mb-3">
                <label htmlFor="disabledTextInput" className="col-sm-2 col-form-label">Raised Date:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.raiseDate} />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="disabledTextInput" className="col-sm-2 col-form-label">Description :</label>
                <div className="col-sm-10">
                  <textarea row="3" type="text" className="form-control" 
                  readOnly value={ticket.description} />
                </div>
              </div>

              
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Priority:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={priorityLabels[ticket.priority]}/>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <label htmlFor="status" className="col-sm-2 col-form-label">Status:</label>
              <div className="col-sm-10">
                <select
                  id="status"
                  name='status'
                  className="form-select"
                  value={updatedTicket.status}
                  onChange={(e)=>{handleChange(e)}}
                  disabled
                >
                  <option  value="Open">Open</option>
                  <option  value="In-Progress">In-Progress</option>
                  <option  value="Solved">Solved</option>
                  <option  value="Closed">Closed</option>
                </select>
              </div>
            </div>
            {((updatedTicket.status==="Solved" || updatedTicket.status==="Closed") && updatedTicket.solution
            ) &&(
            <div className="row mb-3">
                <label htmlFor="disabledTextInput"  className="col-sm-2 col-form-label">Solution :</label>
                <div className="col-sm-10">
                  <textarea name='solution' row="3" type="text" disabled className="form-control" 
                  value={updatedTicket.solution} onChange={(e)=>{handleChange(e)}} />
                </div>
              </div>
            )}
            {updatedTicket.status==="Closed" && (
              <div className="row mb-3">
              <label htmlFor="disabledTextInput"  className="col-sm-2 col-form-label">Feedback :</label>
              <div className="col-sm-10">
                <input name='feedback' type="text" disabled className="form-control" 
                value={updatedTicket.feedback} onChange={(e)=>{handleChange(e)}} />
              </div>
            </div>
            )}
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button disabled= {updatedTicket.status==="Closed"} type="submit" className="btn btn-warning">Close Ticket</button>
                </div>
            </div>
          </form>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TicketDetails;
