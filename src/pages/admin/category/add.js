import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddFormCategory = (props) => {
    const {register, handleSubmit, formState: {errors}}=useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        const value = {
            id: Math.random().toString(10).substring(5),
            ...data,
        };
        props.onAddCate(value);
        history.push("/admin/category");
    }
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Thêm danh mục</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="category-name" className="form-label">
            Tên danh mục
          </label>
          <br />
          <input
            type="text"
            placeholder="Tên danh mục"
            id="category-name"
            name="categoryName"
            className="form-control"
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && (
          <span className="d-block text-danger mt-3">
            Tên danh mục không được để trống
          </span>
        )}
        <button type="submit" className="btn btn-primary">
          Thêm danh mục
        </button>
        </form>
    </div>
  );
};

export default AddFormCategory;
