import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import TicketService from "../../../services/TicketService";
import CategoryService from "../../../services/CategoryService";

const SearchFilter = ({ updateTickets, clearSearch }) => {
  const [ticketId, setTicketId] = useState("");
  const [showCloudBox, setShowCloudBox] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [sortBy, setSortBy] = useState("endDate");
  const [status, setStatus] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  // const navigate = useNavigate();;

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const response = await CategoryService.getCategory();
    setCategoryList(response.data);
  };

  const handleInputChange = (e) => {
    setTicketId(e.target.value);
  };

  const handleSearch = async () => {
    if (ticketId) {
      if (isNaN(ticketId)) {
        return alert("Enter Correct ID");
      }
      try {
        const response = await TicketService.getTicketById(ticketId);
        if (response.data && response.data.length > 0) {
          updateTickets(response.data);
        } else {
          alert("Ticket with Id: " + ticketId + " not found!");
        }
      } catch (error) {
        if (error.response && error.response.status === 500) {
          alert("Ticket with Id: " + ticketId + " not found!");
        } else {
          alert("An error occurred: " + error.message);
        }
      }
    } else {
      alert("Enter Correct ID");
    }
  };

  const handleClearSearch = () => {
    setTicketId("");
    clearSearch();
  };

  const handleFilterSort = () => {
    setShowCloudBox(!showCloudBox);
  };

  const handleClearFilters = () => {
    clearSearch();
    setCategoryId("");
    setSortBy("raiseDate");
    setStatus("");
  };

  const handleFilterByChange = (e) => {
    setCategoryId(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleApplyFilters = async () => {
    const params = {};

    if (categoryId !== "") {
      params.categoryId = categoryId;
    }
    if (sortBy !== "") {
      params.sortBy = sortBy;
    }
    if (status !== "") {
      params.status = status;
    }

    const queryString = new URLSearchParams(params).toString();
    try {
      const response = await TicketService.filterTickets(queryString);
      updateTickets(response.data?response.data : []);
      setShowCloudBox(false);
      
    } catch(error){
      alert(error.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input
            type="text"
            value={ticketId}
            onChange={handleInputChange}
            placeholder="Search By Ticket Id"
            className="form-control me-2"
          />
          <button className="btn btn-primary me-2 my-2" 
          onClick={handleSearch}>
            Search
          </button>
          <button className="btn btn-warning my-2" 
          onClick={handleClearSearch}>
            Clear
          </button>
        </div>
        <div className="ml-auto">
          <button
            className="btn btn-primary me-2 my-2"
            onClick={handleFilterSort}
          >
            Filter & Sort
          </button>
          <button className="btn btn-warning my-2" 
          onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      {/* Cloud box (pop-up) */}
      {showCloudBox && (
        <div className="card position-relative">
          <div
            className="card position-absolute end-0"
            style={{ width: "300px" }}
          >
            <div className="card-body">
              <h4 className="card-title">Filter & Sort</h4>
              <div className="form-group">
                <label htmlFor="categoryId">Filter By Category:</label>
                <select
                  id="categoryId"
                  value={categoryId}
                  onChange={handleFilterByChange}
                  className="form-control"
                >
                  <option value="" defaultChecked>
                    All
                  </option>
                  {categoryList.map((category) => (
                    <option value={category.categoryId}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="sortBy">Sort By:</label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={handleSortByChange}
                  className="form-control"
                >
                  <option value="raiseDate" defaultChecked>
                    RaisedDate
                  </option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="status">Show with Status:</label>
                <select
                  id="status"
                  value={status}
                  onChange={handleStatusChange}
                  className="form-control"
                >
                  <option value="Open" defaultChecked>
                    Open
                  </option>
                  <option value="In-Progress">In-Progress</option>
                  <option value="Solved">Solved</option>
                  <option value="Closed">Closed</option>
                  <option value="">All</option>
                </select>
              </div>
              <button className="btn btn-primary" onClick={handleApplyFilters}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFilter;
