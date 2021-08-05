import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import React from "react";
import AdminLayouts from "./layouts/AdminLayouts";
import AdminRoute from "./auth/adminRoute";
import Dashboard from "./pages/admin/dashboard";
import AdminProduct from "./pages/admin/product";
import AddFormProduct from "./pages/admin/product/add";
import EditFormProduct from "./pages/admin/product/edit";
import AdminCategory from "./pages/admin/category";
import AddFormCategory from "./pages/admin/category/add";
import EditFormCategory from "./pages/admin/category/edit";
import WebsiteLayouts from "./layouts/WebsiteLayouts";
import HomePage from "./pages/homePage";
import SignUp from "./pages/website/user/signup";
import SignIn from "./pages/website/user/signin";
import PrivateRoute from "./auth/privateRoute";
import Contact from "./pages/contact";
import ProductPage from "./pages/productPage";
import ProductDetail from "./pages/productDetalis";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <AdminLayouts>
            <Switch>
              <AdminRoute>
                <Route exact path="/admin">
                   <Redirect to="/admin/dashboard"/>
                </Route>
                <PrivateRoute exact path="/admin/dashboard">
                  <Dashboard />
                </PrivateRoute>
                <Route exact path="/admin/product">
                    <AdminProduct {...props}/>
                </Route>
                <Route exact path="/admin/product/add">
                    <AddFormProduct {...props}/>
                </Route>
                <Route exact path="/admin/product/edit/:id">
                    <EditFormProduct {...props} />
                </Route>
                <Route exact path="/admin/category">
                    <AdminCategory {...props}/>
                </Route>
                <Route exact path="/admin/category/add">
                    <AddFormCategory {...props}/>
                </Route>
                <Route exact path="/admin/category/edit/:id">
                    <EditFormCategory {...props} />
                </Route>
              </AdminRoute>
            </Switch>
          </AdminLayouts>
        </Route>
        <Route>
          <WebsiteLayouts>
            <Switch>
              <Route exact path="/">
                <HomePage {...props}/>
              </Route>
              <Route exact path ="/contact">
                <Contact {...props}/>
              </Route>
              <Route exact path ="/products">   
                <ProductPage {...props} />
              </Route>
              <Route exact path ="/products/:id">
                <ProductDetail {...props}/>
              </Route>
              <Route exact path ="/signup">
                <SignUp />
              </Route>
              <Route exact path ="/signin">
                <SignIn />
              </Route>
            </Switch>
          </WebsiteLayouts>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
