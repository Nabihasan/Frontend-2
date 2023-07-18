import React, { useState, useEffect } from "react";
import categoryService from "../../../services/CategoryService";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import AddSubCategory from "./AddSubCategory";
import AddCategory from "./AddCategory";
import subCategoryService from "../../../services/SubCategoryService";

const ListCategory = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getCategory();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (category) => {
    const name = category.categoryName;
    const cnf = window.confirm(
      "Delete Category: " +
        name +
        "?\nDeleting Category will also delete its Tickets and Subcategories!"
    );
    if (cnf) {
      try {
        await categoryService.deleteCategory(category.categoryId);
        alert("Succesfully Deleted");
        fetchCategories();
      } catch (error) {
        alert(error);
      }
    }
  };

  const deleteSubCategory = async (subCategory) => {
    const name = subCategory.subCategoryName;
    const cnf = window.confirm(
      "Delete SubCategory: " +
        name +
        "?\nDeleting SubCategory will also delete its Tickets!"
    );
    if (cnf) {
      try {
        const response = await subCategoryService.deleteSubCategory(
          subCategory.subCategoryId
        );
        alert(response.data);
        fetchCategories();
      } catch (error) {
        alert(error);
      }
    }
  };

  const updateCategory = async (category) => {
    const newName = prompt("Edit Category Name:", category.categoryName);
    if (newName) {
      try {
        await categoryService.updateCategory(category.categoryId, newName);
        alert("Changed Successfully");
        fetchCategories();
      } catch (error) {
        alert(error);
      }
    }
  };

  const updateSubCategory = async (subcategory) => {
    const newName = prompt(
      "Edit SubCategory Name:",
      subcategory.subCategoryName
    );
    if (newName) {
      try {
        await subCategoryService.updateSubCategory(
          subcategory.subCategoryId,
          newName
        );
        alert("Changed Successfully");
        fetchCategories();
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="container row align-items-center">
      <div className="container col-9 mt-5 mb-5 ">
        <h2 className="text-center mb-3">Categories</h2>
        <AddCategory fetchCategories={fetchCategories} />
        <AddSubCategory
          categoryList={categories}
          fetchCategories={fetchCategories}
        />
        <div className="accordion col-12">
          {categories.map((category, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${
                    activeIndex === index ? "collapsed" : ""
                  }`}
                  type="button"
                  onClick={() => handleAccordionClick(index)}
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={activeIndex === index ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                >
                  <span className="fs-6 text-black">
                    {index + 1}.&nbsp;&nbsp;
                  </span>
                  <span className="fs-6 fw-bold text-primary">
                    {category.categoryName}
                  </span>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <span>
                    <b>Category : </b>
                    {category.categoryName}
                  </span>
                  <button
                    className="btn "
                    title="Edit"
                    onClick={() => updateCategory(category)}
                  >
                    <PencilFill color="blue" />
                  </button>
                  <button
                    className="btn "
                    title="Delete"
                    onClick={() => deleteCategory(category)}
                  >
                    <TrashFill color="red" />
                  </button>
                  <table className="table table-bordered text-center mt-3">
                    <tr>
                      <th>S. No.</th>
                      <th>Subcategory Name</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                    {category.subCategories.map((subcategory, subIndex) => (
                      <tr key={subIndex}>
                        <td>{subIndex + 1}</td>
                        <td>{subcategory.subCategoryName}</td>
                        <td>
                          <button
                            className="btn"
                            title="Edit"
                            onClick={() => updateSubCategory(subcategory)}
                          >
                            <PencilFill color="blue" />
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn"
                            title="Delete"
                            onClick={() => deleteSubCategory(subcategory)}
                          >
                            <TrashFill color="red" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCategory;