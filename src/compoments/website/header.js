import React from "react";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container px-0 px-lg-3 mb-2">
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
        <a className="navbar-brand" href="/">
          <span className="font-weight-bold text-uppercase text-white">
            Boutique
          </span>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link text-white" to="/products">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-dolly-flatbed mr-1 text-gray" />
                Cart
                <small className="text-gray">(0)</small>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">
                <i className="fas fa-user-alt mr-1 text-gray" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
