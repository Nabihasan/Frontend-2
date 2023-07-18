import axios from "axios";
import authHeader from "./auth-header";

const TICKET_BASE_URL = 'http://127.0.0.1:8080/ticket';

const ticketService = {
  getTickets() {
    return axios.get(TICKET_BASE_URL,{headers: authHeader()});
  },

  getTicketById(ticketId) {
    return axios.get(`${TICKET_BASE_URL}/${ticketId}` ,{headers: authHeader()});
  },

  filterTickets(stringParams){
    return axios.get(`${TICKET_BASE_URL}?${stringParams}`,{headers: authHeader()});
  },

  updateTicket(ticketId,ticket){
    return axios.put(`${TICKET_BASE_URL}/${ticketId}`, ticket,{headers: authHeader()});
  },

  getTicketByIdForUser(ticketId) {
    const userId = localStorage.getItem("id");
    return axios.get(TICKET_BASE_URL+"/user/"+userId+"/"+ticketId,{headers: authHeader()});
  },

  getTicketsForUser(stringParams) {
    const userId = localStorage.getItem("id");
    return axios.get(`${TICKET_BASE_URL}/user/all/${userId}?${stringParams}`,{headers: authHeader()});
  }

};

export default ticketService;