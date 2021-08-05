import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { isAuthenticate, isAuthenticated, signIn } from "../../../auth";

const SignIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const {user} = isAuthenticated();

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data).then((dataUser) => {
            if(dataUser.error){
                setError(dataUser.error);
                setLoading(false)
            }else{
                isAuthenticate(dataUser, () => {
                    history.push("/admin/dashboard")
                })
            }
        })
    }
  return (
    <>
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <div id="message" />

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            {...register("email")}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="password"
                            placeholder="Password"
                            {...register("password")}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button className="btn btn-primary btn-user btn-block">
                          Login
                        </button>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-danger btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-info btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/signup">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
