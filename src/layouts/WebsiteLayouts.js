import React from "react";
import Footer from "../compoments/website/footer";
import Header from "../compoments/website/header";

const WebsiteLayouts = (props) => {
  return (
    <div>
      <div className="bg-dark">
        <Header />
      </div>
      <div className="container">
        <main>{props.children}</main>
      </div>
      <div className="bg-dark">
        <Footer />
      </div>
    </div>
  );
};

export default WebsiteLayouts;
