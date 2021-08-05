import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryAPI from "../api/categoryAPI";
import ProductAPI from "../api/productAPI";

const ProductDetail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const getProduct = async () => {
      try {
        const { data } = await ProductAPI.get(id);
        // console.log(data)
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const getProduct = async () => {
      try {
        const { data } = await CategoryAPI.getAll();
        // console.log(data)
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  return (
    <div>
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              {/* PRODUCT SLIDER*/}
              <div className="row m-sm-0">
                <div className="col-sm-10 p-sm-0 order-1 order-sm-2">
                  <img
                    className="img-fluid"
                    src={`${product.image}`}
                    alt="..."
                  />
                </div>
              </div>
            </div>
            {/* PRODUCT DETAILS*/}
            <div className="col-lg-6">
              <ul className="list-inline mb-2">
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning" />
                </li>
              </ul>
              <h1>{product.name}</h1>
              <p className="text-muted lead">
                <strong className="text-dark">$</strong>
                {product.price}
              </p>
              <p className="text-small mb-4">{product.description}</p>
              <div className="row align-items-stretch mb-4">
                <div className="col-sm-5 pr-sm-0">
                  <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                    <span className="small text-uppercase text-gray mr-4 no-select">
                      Quantity
                    </span>
                    <div className="quantity">
                      <button className="dec-btn p-0">
                        <i className="fas fa-caret-left" />
                      </button>
                      <input
                        className="form-control border-0 shadow-0 p-0"
                        type="text"
                        defaultValue={1}
                      />
                      <button className="inc-btn p-0">
                        <i className="fas fa-caret-right" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 pl-sm-0">
                  <a
                    className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                    href="cart.html"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
              <a className="btn btn-link text-dark p-0 mb-4" href="#">
                <i className="far fa-heart mr-2" />
                Add to wish list
              </a>
              <br />
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">
                    Category:{" "}
                  </strong>
                  <a className="reset-anchor" href={`/category/${category.id}`}>
                    {category.name}
                  </a>
                </li>
                <li className="px-3 py-2 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Status: </strong>
                  {product.status == 1 ? "Còn hàng" : "Hết hàng"}
                </li>
              </ul>
            </div>
          </div>
          {/* DETAILS TABS*/}
          <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="description-tab"
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="reviews-tab"
                data-toggle="tab"
                href="#reviews"
                role="tab"
                aria-controls="reviews"
                aria-selected="false"
              >
                Reviews
              </a>
            </li>
          </ul>
          <div className="tab-content mb-5" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <div className="p-4 p-lg-5 bg-white">
                <h6 className="text-uppercase">Product description </h6>
                <p className="text-muted text-small mb-0">
                  {product.description}.
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div className="p-4 p-lg-5 bg-white">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="media mb-3">
                      <img
                        className="rounded-circle"
                        src="img/customer-1.png"
                        alt
                        width={50}
                      />
                      <div className="media-body ml-3">
                        <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">
                          20 May 2020
                        </p>
                        <ul className="list-inline mb-1 text-xs">
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                        <p className="text-small mb-0 text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <img
                        className="rounded-circle"
                        src="img/customer-2.png"
                        alt
                        width={50}
                      />
                      <div className="media-body ml-3">
                        <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">
                          20 May 2020
                        </p>
                        <ul className="list-inline mb-1 text-xs">
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                        <p className="text-small mb-0 text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RELATED PRODUCTS*/}
          <h2 className="h5 text-uppercase mb-4">Related products</h2>
          <div className="row">
            {/* PRODUCT*/}

            {props.products
              .filter((value) => value.category === product.category)
              .map((value) => {
                return (
                  <div className="col-lg-3 col-sm-6">
                    <div className="product text-center skel-loader">
                      <div className="d-block mb-3 position-relative">
                        <Link className="d-block" to={`/products/${value.id}`}>
                          <img
                            className="img-fluid w-100"
                            src={`${value.image}`}
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
                              <a className="btn btn-sm btn-dark" href="#">
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
                          to={`/products/${value.id}`}
                        >
                          {value.name}
                        </Link>
                      </h6>
                      <p className="small text-muted">$ {value.price}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
