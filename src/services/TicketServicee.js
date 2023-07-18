import axios from "axios";
import authHeader from "./auth-header";

const TICKET_BASE_REST_API_URL="http://localhost:8080/ticket";
const TicketServicee ={
    getAllTicketss(){
        const storedId = localStorage.getItem('id');
        
        return axios.get(TICKET_BASE_REST_API_URL +"/"+storedId,{headers:authHeader()})
    },

    createTicket(ticket){
        const storedId = localStorage.getItem('id');
        console.log(ticket);
        console.log(storedId);
        return axios.post(TICKET_BASE_REST_API_URL+"/"+storedId,ticket,{headers:authHeader()})
    }
}
export default  TicketServicee;