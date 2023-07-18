import React from "react";
import {Link } from "react-router-dom";
import { Eye } from "react-bootstrap-icons";

const TicketTable = ({ tickets }) => {

  const priorityLabels = {
    "0": "Low",
    "1": "Medium",
    "2": "High",
    "3": "Critical",
  };
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Sub-Category</th>
            <th>Raised Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticketId}>
              <td>{ticket.ticketId}</td>
              <td>{ticket.category.categoryName}</td>
              <td>{ticket.subCategory.subCategoryName}</td>
              <td>{ticket.raiseDate}</td>
              <td>{priorityLabels[ticket.priority]}</td>
              <td>{ticket.status}</td>
              <td>
                  <Link
                  to={"/ticket/"+ticket.ticketId}
                    className="btn btn-link"
                  >
                    <Eye/>
                  </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
