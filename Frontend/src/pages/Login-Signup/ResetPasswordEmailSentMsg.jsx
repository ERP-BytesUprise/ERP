import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/ResetPasswordEmailSentMsg.css";
import image from "../../assets/images/ResetMsg.png";

const ResetPasswordEmailSent = () => {
  return (
    <div className="Logincontainer">
      {/* Left side: Form */}

      <div className="ResetCard">
        <div className="CombineBox">
          <p className="Gettingtitle">
            <span className="Applogo">
              <span className="letterE">E</span>
              <span className="letterR">R</span>
              <span className="letterP">P</span>
              <span className="daily">.daily</span>
            </span>
          </p>
          <div className="MailSent">
            <p>
              Password reset instruction sent to your registered email{" "}
              <span>www.gmail.com{}</span>
            </p>
          </div>

          <div className="BackToLogin">
            <Link to="/Login">
              <p className="termss">Back To Login</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="ResetPasswordMsg">
        <img src={image} alt="Descriptive Alt Text" />
      </div>
    </div>
  );
};

export default ResetPasswordEmailSent;
