import React, { useState, useEffect } from "react";
import TicketService from "../../../services/TicketService";
import SearchFilter from "./SearchFilter";
import TicketTable from "./TicketTable";

const ListTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await TicketService.getTickets();
    setTickets(response.data);
  };

  const updateTickets = (updatedTickets) => {
    // console.log(updatedTickets);
    setTickets(updatedTickets);
  };

  const ClearSearch = () => {
    fetchTickets();
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center ">Tickets</h2>
      <SearchFilter updateTickets={updateTickets} 
      clearSearch={ClearSearch} />
      <TicketTable tickets={tickets} />
    </div>
  );
};

export default ListTickets;