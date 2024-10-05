import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/ResetPassword.css";
import image from "../../assets/images/forgot-password.png";

const ResetPassword = () => {
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
              required
              placeholder="name@company.com"
            />
          </label>

          <button type="submit" className="ResetBtn">
            Reset Password
          </button>
        </form>

        <div className="ForgotReset">
          <Link to="/Login">
            <p className="termss">Back To Login</p>
          </Link>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="Gettingimagecont">
        <img src={image} alt="Descriptive Alt Text" />
      </div>
    </div>
  );
};

export default ResetPassword;
