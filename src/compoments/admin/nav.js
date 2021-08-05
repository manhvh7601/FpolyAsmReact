import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav
    id="sidebarMenu"
    className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/admin/dashboard"
          >
            <span data-feather="home" />
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/admin/product"
            activeClassName="active"
          >
            <span data-feather="shopping-cart" />
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/category" activeClassName="active">
            <span data-feather="" />
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Nav;
