import React from "react";
import { Link } from "react-router-dom";

const ProductPage = (props) => {
  return (
    <div className="container">
      {/* HERO SECTION*/}
      <section className="py-5 bg-light mt-5">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Shop</h1>
            </div>
            <div className="col-lg-6 text-lg-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container p-0">
          <div className="row">
            {/* SHOP SIDEBAR*/}
            <div className="col-lg-3 order-2 order-lg-1">
              <h5 className="text-uppercase mb-4">Category</h5>
              <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                {props.categories.map((category, index) => {
                  return (
                    <div className="py-2 mb-2 bg-light" key={index}>
                      <strong className=" text-uppercase font-weight-bold">
                        <Link
                          className="reset-anchor"
                          to={`/category/${category.id}`}
                        >
                          {category.name}
                        </Link>
                      </strong>
                    </div>
                  );
                })}
              </ul>
            </div>
            {/* SHOP LISTING*/}
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row mb-3 align-items-center">
                <div className="col-lg-6 mb-2 mb-lg-0">
                  <p className="text-normal text-muted mb-0">List product</p>
                </div>
                <div className="col-lg-6">
                  <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                    <li className="list-inline-item text-muted mr-3">
                      <a className="reset-anchor p-0" href="#">
                        <i className="fas fa-th-large" />
                      </a>
                    </li>
                    <li className="list-inline-item text-muted mr-3">
                      <a className="reset-anchor p-0" href="#">
                        <i className="fas fa-th" />
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="row">
                {/*  */}
                {props.products.map((product, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6" key={index}>
                      <div className="product text-center">
                        <div className="mb-3 position-relative">
                          <div className="badge text-white badge-" />
                          <Link
                            className="d-block"
                            to={`/products/${product.id}`}
                          >
                            <img
                              className=""
                              with={250}
                              height={250}
                              src={`${product.image}`}
                              alt="..."
                            />
                          </Link>
                          <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                              <li className="list-inline-item m-0 p-0">
                                <a
                                  className="btn btn-sm btn-outline-dark"
                                  href="#"
                                >
                                  <i className="far fa-heart" />
                                </a>
                              </li>
                              <li className="list-inline-item m-0 p-0">
                                <a
                                  className="btn btn-sm btn-dark add-cart"
                                  id="${product.id}"
                                  href="#"
                                >
                                  Add to cart
                                </a>
                              </li>
                              <li className="list-inline-item mr-0">
                                <a
                                  className="btn btn-sm btn-outline-dark"
                                  href="#productView"
                                  data-toggle="modal"
                                >
                                  <i className="fas fa-expand" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h6>
                          {" "}
                          <Link
                            className="reset-anchor"
                            to={`/products/${product.id}`}
                          >
                            {product.name}
                          </Link>
                        </h6>
                        <p className="small text-muted">
                          <strong className="text-dark">$</strong>
                          {product.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* PAGINATION*/}
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center justify-content-lg-end">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
