import React, { useState } from "react";
import subCategoryService from "../../../services/SubCategoryService";

const AddSubCategory = ({categoryList,fetchCategories}) => {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleAddSubCategoryName = (e) => {
    setSubCategoryName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  const handleReset = () =>{
    setCategoryId("");
    setSubCategoryName("");
  }

  const handleAddSubCategory = async () => {
    if (subCategoryName) {
      if (categoryId) {
        try {
          await subCategoryService.addSubCategory(
            subCategoryName,categoryId);
          setCategoryId("");
          setSubCategoryName("");
          alert("SubCategory Added Succesfully");
          fetchCategories();
        } catch (error) {
          alert(error);
        }
      } else {
        alert(
          `Select Corresponding Category`
        );
      }
    } else {
      alert("Enter Category Name");
    }
  };

  return (
    <div className="d-inline-block rounded border border-dark-subtle mb-2">
      <div className="d-flex align-items-center my-2">
        <label className="fw-normal fs-5">
          &nbsp;Add&nbsp;SubCategory&nbsp;:
        </label>
        <div className="d-flex justify-content-between mx-2 align-items-center">
          <input
            type="text"
            value={subCategoryName}
            onChange={handleAddSubCategoryName}
            placeholder="SubCategory Name"
            className="form-control me-2"
          />
          <select
            id="categoryId"
            value={categoryId}
            onChange={handleCategoryChange}
            className="form-control me-2"
          >
            <option value="" disabled selected>
            &nbsp;&nbsp;Parent Category&nbsp;&nbsp;
            </option>
            {categoryList.map((category) => (
              <option 
              key={category.categoryId}
              value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </select>
          <button className="btn btn-primary me-2" onClick={handleAddSubCategory}>
            Add&nbsp;SubCategory
          </button>
          <button className="btn btn-warning" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddSubCategory;
