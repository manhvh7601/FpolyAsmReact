import React from "react";
import { Link } from "react-router-dom";

const AdminProduct = (props) => {
  console.log(props);
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to={`/admin/product/add`} className="btn btn-outline-primary">
            Add product
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Ảnh sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>
                  <img src={`${product.image}`} width="100px" height="100px" />
                </td>
                <td>{product.price}đ</td>
                <td>
                  {product.status ? (
                    <span className="text-primary">Còn hàng</span>
                  ) : (
                    <span className="text-danger">Hết hàng</span>
                  )}
                </td>
                <td>
                  <Link
                    to={`/admin/product/edit/${product.id}`}
                    className="btn btn-outline-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-remove"
                    onClick={() => props.onRemove(product.id)}
                  >
                    Detele
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminProduct;
