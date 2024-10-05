import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/CreateAccountPage1.css";
import image from "../../assets/images/hand-drawn-flat-design-erp-illustration 1.png";
import gicon from "../../assets/icons/Google.png";

const CreateAccountPage1 = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    // Navigate to the next page, passing the email as state
    navigate("/CreateAccountPage2", { state: { email } });
  };

  return (
    <div className="Gettingcontainer">
      {/* Left side: Form */}
      <div className="Gettingform">
        <p className="Gettingtitle">
          Welcome to{" "}
          <span className="Applogo">
            <span className="letterE">E</span>
            <span className="letterR">R</span>
            <span className="letterP">P</span>
            <span className="daily">.daily</span>
          </span>
        </p>
        <p className="Gettingdesc">
          Get started - it's free. No credit card needed.
        </p>
        <form className="Formdetails" onSubmit={handleNext}>
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="Or">
            <div className="line"></div>
            <p>Or</p>
            <div className="line"></div>
          </div>

          {/*For Using Google Account*/}
          <button type="button" className="Gbtn">
            <img src={gicon} alt="G" />
            <span>Continue with Google</span>
          </button>

          <button type="submit" className="Continue">
            Continue
          </button>
        </form>
        <p className="Proceed">By proceeding, you agree to the</p>
        <p className="Proceed">
          <a className="terms" href="#Terms">
            Terms and Service
          </a>
          <span> and </span>
          <a className="terms" href="Privacy">
            privacy policy
          </a>
        </p>

        <p className="Gettinglogin">
          Already have an account?{" "}
          <Link to="/Login" className="terms">
            Log in
          </Link>
        </p>
      </div>

      {/* Right side: Image */}
      <div className="Gettingimagecont">
        <img src={image} alt="Descriptive Alt Text" />
      </div>
    </div>
  );
};

export default CreateAccountPage1;
