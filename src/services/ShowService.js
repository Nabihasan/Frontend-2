import axios from "axios";

const TICKETS_BASE_REST_API_URL="http://localhost:8080/api/v1/Tickets";
class ShowService
{
   
showActiveRecords()
{return axios.get(TICKETS_BASE_REST_API_URL)}
   
getTicketById(ticketId)
{return axios.get(TICKETS_BASE_REST_API_URL +'/'+ ticketId);}

updateTicketStatus(ticketId,updatedStatus){
    return axios.put(TICKETS_BASE_REST_API_URL+'/'+ticketId, updatedStatus, {
      headers: { 'Content-Type': 'application/json' }
    });

}}

export default new ShowService();