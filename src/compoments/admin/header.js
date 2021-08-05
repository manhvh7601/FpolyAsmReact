import React from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticated, signOut } from "../../auth";

const Header = () => {
  const { user } = isAuthenticated()
  const history = useHistory()
  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Company name
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
          <a className="nav-link " id="pagesDropdown" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => {
                  signOut(() => {
                    history.push('/')
                  })
                }}>Logout</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
