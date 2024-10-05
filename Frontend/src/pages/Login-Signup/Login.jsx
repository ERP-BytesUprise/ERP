import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/Login.css";
import image from "../../assets/images/Login.png";

const Login = () => {
  return (
    <div className="Logincontainer">
      {/* Left side: Form */}
      <div className="Loginform">
        <p className="Logintitle">
          <span className="Applogo">
            <span className="letterE">E</span>
            <span className="letterR">R</span>
            <span className="letterP">P</span>
            <span className="daily">.daily</span>
          </span>
        </p>
        <form className="LoginFormdetails">
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </label>
          <button type="submit" className="Login">
            Sign In
          </button>
        </form>

        <div className="ForgotReset">
          <Link to="/CreateAccountPage1">
            <p className="termss">Don't have an account? </p>
          </Link>
          <Link to="/ResetPassword">
            <p className="termss">Reset Password</p>
          </Link>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="Loginimagecont">
        <img src={image} alt="Descriptive Alt Text" />
      </div>
    </div>
  );
};

export default Login;
