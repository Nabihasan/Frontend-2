import React, { useEffect, useState } from 'react';
import TicketServicee from '../../services/TicketServicee';
import CategoryService from '../../services/CategoryService';
import SubCategoryService from '../../services/SubCategoryService';

const AddTicket = () => {
  const [categoryId, setcategoryId] = useState('');
  const [subCategoryId, setsubCategoryId] = useState('');
  const [description, setdescription] = useState('');
  const [priority, setpriority] = useState('0');

  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const response = await CategoryService.getCategory();
    setCategoryList(response.data);
  };

  const fetchSubCategory = async (categoryId) => {
    const response = await SubCategoryService.getSubCategoryByCategoryId(categoryId);
    setSubCategoryList(response.data);
    console.log(subCategoryList);
  };

  const saveTicket = (e) => {
    e.preventDefault();
    const ticket = { categoryId, subCategoryId, description, priority };
    TicketServicee.createTicket(ticket)
      .then(() => {
          alert("Ticket Raised Succesfully!");
          setcategoryId("");
          setsubCategoryId("");
          setdescription("");
          setpriority("0");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <div className="card mt-8 my-5">
        <div className="card-header bg-primary text-white">
          <center>
            <h3 className="card-title">Raise Ticket</h3>
          </center>
        </div>
        <div className="card-body ">
          <form>
            <div className="row mb-3">
              <label className="col-sm-20 col-form-label fs-5 fw-bold"> Category:</label>
              <div className="col-sm-20">
                <select
                  id="categoryId"
                  value={categoryId}
                  onChange={(e) => {
                    const categoryId = e.target.value;
                    setcategoryId(categoryId);
                    fetchSubCategory(categoryId);
                  }}
                  className="form-control me-2"
                >
                  <option value="" disabled selected>
                    &nbsp;&nbsp; Category&nbsp;&nbsp;
                  </option>
                  {categoryList.map((category) => (
                    <option key={category.categoryId} value={category.categoryId}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group-nb-2">
              <label className="form-label fs-5 fw-bold"> Subcategory:</label>
                <select
                  id="subCategoryId"
                  value={subCategoryId}
                  onChange={(e) => setsubCategoryId(e.target.value)}
                  className="form-control me-2 "
                  >
                  <option value="" disabled selected>
                    &nbsp;&nbsp;Sub-Category&nbsp;&nbsp;
                  </option>
                  
                  {subCategoryList && (subCategoryList.map((subcategory) => (
                    <option key={subcategory.subCategoryId} value={subcategory.subCategoryId}>
                      {subcategory.subCategoryName}
                    </option>
                  )))}
                </select>
            </div>
            <div className="form-group-nb-2">
              <label className="form-label fs-5 fw-bold"> Priority:</label>
              <select
                placeholder="priority"
                name="priority"
                className="form-control"
                value={priority}
                onChange={(e) => setpriority(e.target.value)}
              >
                <option value="0" defaultChecked>
                    Low
                  </option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                  <option value="3">Critical</option>
              </select>
            </div>

            <div className="form-group-nb-2">
              <label className="form-label fs-5 fw-bold">Description:</label>
              <textarea
                type="text"
                placeholder={
                `Briefly Explain Your Problem.
In case of WFH Request Provide Duration of Request and Reason.
Provide best time to contact, In case Required`}
                name="description"
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>

            <button className="btn btn-primary mt-3 " onClick={(e) => saveTicket(e)}>
              Raise
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTicket;
