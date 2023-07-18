import React, { useState } from "react";
import categoryService from "../../../services/CategoryService";
import subCategoryService from "../../../services/SubCategoryService";

const AddCategory = ({ fetchCategories }) => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  const handleAddCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddSubCategoryName = (e) => {
    setSubCategoryName(e.target.value);
  };

  const handleReset = () =>{
    setCategoryName("");
    setSubCategoryName("");
  }

  const handleAddCategory = async () => {
    if (categoryName) {
      if (subCategoryName) {
        try {
          const newCategory = await categoryService.addCategory(categoryName);
          await subCategoryService.addSubCategory(
            subCategoryName,
            newCategory.data.categoryId
          );
          setCategoryName("");
          setSubCategoryName("");
          alert("Category Added Succesfully");
          fetchCategories();
        } catch (error) {
          alert(error);
        }
      } else {
        alert(
          `Enter SubCategory Name
                (Can't add a Category without a subcategory)`
        );
      }
    } else {
      alert("Enter Category Name");
    }
  };

  return (
    <div className="d-inline-block rounded border border-dark-subtle mb-2">
      <div className="d-flex align-items-center my-2">
        <label className="fs-5 ">
        &nbsp;Add&nbsp;Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        </label>
        <div className="d-flex justify-content-between mx-2 align-items-center">
          <input
            type="text"
            value={categoryName}
            onChange={handleAddCategoryName}
            placeholder="Category Name"
            className="form-control me-2"
          />
          <input
            type="text"
            value={subCategoryName}
            onChange={handleAddSubCategoryName}
            placeholder="SubCategory Name"
            className="form-control me-2"
          />
          <button className="btn btn-primary me-2" onClick={handleAddCategory}>
            &nbsp;&nbsp;&nbsp;Add&nbsp;Category&nbsp;&nbsp;&nbsp;
          </button>
          <button className="btn btn-warning" onClick={handleReset}>
            Reset</button>
        </div>
      </div>
     </div>
  );
};

export default AddCategory;
