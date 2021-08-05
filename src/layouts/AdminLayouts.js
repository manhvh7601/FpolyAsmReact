import React from "react";
import Header from "../compoments/admin/header";
import Nav from "../compoments/admin/nav";

const AdminLayouts = (props) => {
  return (
      <>
        <div>
          <Header />
            <div className="row">
              <Nav></Nav>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {props.children}
              </main>
            </div>
          </div>
      </>
  );
};

export default AdminLayouts;
