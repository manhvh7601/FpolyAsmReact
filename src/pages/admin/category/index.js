import React from "react";
import { Link } from "react-router-dom";

const AdminCategory = (props) => {
  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Quản lý Danh Mục</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <Link to={`/admin/category/add`} className="btn btn-outline-primary">
              Add category
            </Link>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên Danh Mục</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {props.categories.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <Link
                      to={`/admin/category/edit/${category.id}`}
                      className="btn btn-outline-primary"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-remove"
                      onClick={() => props.onRemoveCate(category.id)}
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
    </div>
  );
};

export default AdminCategory;
