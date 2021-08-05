import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import CategoryAPI from "../../../api/categoryAPI";

const EditFormCategory = (props) => {
  const [categories, setCate] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const getCate = async () => {
      try {
        const { data } = await CategoryAPI.get(id);
        setCate(data);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCate();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const value = {
      id: id,
      ...data,
    };
    props.onEditCate(id, value);
    history.push("/admin/category");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Sửa danh mục</h2>
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
          Sửa danh mục
        </button>
      </form>
    </div>
  );
};

export default EditFormCategory;
