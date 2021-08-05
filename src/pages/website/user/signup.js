import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signUp } from "../../../auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
      signUp(data).then((dataInput) => {
          if(dataInput.error){
              setError(dataInput.error);
          }else{
              e.target.reset();
              setError("");
              setSuccess(true);
          }
      });
  }
  const showError = () => {
    return (
      <div
        className="alerl alerl-danger"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </div>
    );
  };
  const showSucces = () => {
    return (
      <div
        className="alerl alerl-info"
        style={{ display: success ? "block" : "none" }}
      >
        <div className="alert alert-success mb-2">
          Bạn đã đăng ký thành công. Click <Link to="/signin">vào đây</Link> để
          Đăng nhập
        </div>
      </div>
    );
  };
  const signUpForm = () => {
    return (
      <>
        <div className="container">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Create an Account!
                      </h1>
                    </div>
                    <div id="message" />

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="name"
                          placeholder="User Name"
                          {...register("name")}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          placeholder="Email Address"
                          {...register("email")}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="password"
                            placeholder="Password"
                            {...register("password")}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="repeatPassword"
                            placeholder="Repeat Password"
                          />
                        </div>
                      </div>
                      <button className="btn btn-primary btn-user btn-block">
                        Register Account
                      </button>
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-danger btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw" /> Register with
                        Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-info btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw" /> Register with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="/">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/#/login">
                        Already have an account? Login!
                      </a>
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
  return (
    <>
      {showError()}
      {showSucces()}
      {signUpForm()}
    </>
  );
};

export default SignUp;
