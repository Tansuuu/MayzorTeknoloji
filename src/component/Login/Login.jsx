import React from "react";
import "./Login.css";
import logo from "../../assets/logo-dark 1 (1).png";
import { NavLink } from "react-router-dom";

export const Login = ({ onChange }) => {
  return (
    <div className="login-page">
      <div className="login">
        <div className="login-head">
          <img src={logo} alt="mayzor-logo" />
        </div>
        <div className="login-body">
          <div className="sign-in">
            <h3>SIGN IN</h3>
          </div>
          <form className="login-form">
            <label className="mail-label">E mail Address</label>
            <input className="mail-input" type="email" onChange={onChange} />
            <label className="container">
              <span className="checkmark"></span>
              <input className="checkbox" type="checkbox" />
              Remember me
            </label>
            <NavLink to={"/user"}>
              <button className="login-button">Log In</button>
            </NavLink>
            <div>
              <p>Forgot your password?</p>
              <p className="p-tag">
                Don’t have an account? <strong>Sign Up</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
