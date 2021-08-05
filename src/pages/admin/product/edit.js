import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import ProductAPI from "../../../api/productAPI";
import firebase from "../../../firebase/index";

const EditFormProduct = (props) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await ProductAPI.get(id);
        setProduct(data);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const productImage = document.querySelector("#product-photo").files[0];
    let stogareRef = firebase.storage().ref(`images/${productImage.name}`);
    stogareRef.put(productImage).then(function () {
      stogareRef.getDownloadURL().then((url) => {
        const value = {
          id: id,
          image: url,
          ...data,
        };
        // console.log(value);
        props.onEdit(id, value);
        history.push("/admin/product");
      });
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Sửa sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            Tên sản phẩm
          </label>
          <br />
          <input
            type="text"
            placeholder="Tên sản phẩm"
            id="product-name"
            name="productName"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              Tên sản phẩm không được để trống
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            Ảnh
          </label>
          <br />
          <input
            type="file"
            id="product-photo"
            className="form-control"
            name="productPhoto"
            // {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="d-block text-danger mt-3">
              Ảnh sản phẩm không được để trống
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            Giá
          </label>
          <br />
          <input
            type="number"
            placeholder="Giá sản phẩm"
            id="product-price"
            name="productPrice"
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="d-block text-danger mt-3">
              Giá sản phẩm không được để trống
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            Trạng thái
          </label>
          <br />
          <select
            id="product-status"
            className="form-control"
            {...register("status", { required: true })}
            name="productStatus"
          >
            <option value={1}>Còn hàng</option>
            <option value={0}>Hết hàng</option>
          </select>
          {errors.status && (
            <span className="d-block text-danger mt-3">
              Trạng thái sản phẩm không được để trống
            </span>
          )}
        </div>
        <div id="form-group" style={{ marginBottom: 10 }}>
          <label htmlFor="product-name" className="form-label">
            Danh mục
          </label>
          <br />
          <select
            id="product-cate"
            className="form-control"
            {...register("category", { required: true })}
          >
            <option />
            {props.categories.map((category) => {
              return <option value={`${category.id}`}>{category.name}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            Mô tả
          </label>
          <br />
          <input
            type="text"
            placeholder="Miêu tả"
            id="product-description"
            name="productDescription"
            className="form-control"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="d-block text-danger mt-3">
              Mô tả sản phẩm không được để trống
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Sửa sản phẩm
        </button>
      </form>
    </div>
  );
};

export default EditFormProduct;
