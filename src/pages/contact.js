import React from "react";

const Contact = () => {
  return (
    <div className="page-holder">
      <div className="container">
        {/* HERO SECTION*/}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Contact us</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          {/* BILLING ADDRESS*/}
          <h2 className="h5 text-uppercase mb-4">Form details</h2>
          <div className="row">
            <div className="col-lg-8">
              <form action="#" id="form-add">
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <label
                      className="text-small text-uppercase"
                      htmlFor="firstName"
                    >
                      First name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label
                      className="text-small text-uppercase"
                      htmlFor="lastName"
                    >
                      Last name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label
                      className="text-small text-uppercase"
                      htmlFor="email"
                    >
                      Email address
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="email"
                      type="email"
                      placeholder="e.g. Jason@example.com"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label
                      className="text-small text-uppercase"
                      htmlFor="phone"
                    >
                      Phone number
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="phone"
                      type="tel"
                      placeholder="e.g. +02 245354745"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="alternateAddressCheckbox"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label text-small"
                        htmlFor="alternateAddressCheckbox"
                      >
                        Checkout
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 form-group">
                    <button className="btn btn-dark" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* MAP */}
            <div>MAP</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;