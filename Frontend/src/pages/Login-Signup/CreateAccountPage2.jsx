import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/CreateAccountPage2.css";
import image from "../../assets/images/gradient-benchmark-illustration 1.png";

const CreateAccountPage2 = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: location.state.email || "", // Get email from previous page
    name: "",
    company: "",
    size: "",
    role: "",
    phcode: "",
    phnumber: "",
    country: "",
    language: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const defaultSize = formData.size || "0-100"; // Default value if none is selected
    const defaultPhoneCode = formData.phcode || "+91"; // Default value if none is selected
    const defaultCountry = formData.country || "India"; // Default value if none is selected
    const defaultLang = formData.language || "English"; // Default value if none is selected
    const updatedFormData = {
      ...formData,
      size: defaultSize,
      phcode: defaultPhoneCode,
      country: defaultCountry,
      language: defaultLang,
    };

    console.log("formdata", updatedFormData);

    //API request to your backend
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        updatedFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Signup successful!");
      navigate("/"); // Redirect to homepage or success page
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("An error occurred. Please try again");
      }

      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="Gettingcontainer">
      {/* Left side: Form */}
      <div className="Gettingform2">
        <p className="Gettingtitle">
          <span className="Applogo">
            <span className="letterE">E</span>
            <span className="letterR">R</span>
            <span className="letterP">P</span>
            <span className="daily">.daily | </span>
          </span>
          Get Started
        </p>

        <form className="Formdetails2" onSubmit={handleSubmit}>
          <div className="FullName">
            <label>
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div className="formtext">
            <label>
              Company Name
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Eg. Erp daily.Ltd"
                required
              />
            </label>

            <label>
              Company Size
              <select
                id="companysize"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                required
              >
                <option value="0-100">0 - 100</option>
                <option value="200-300">200 - 300</option>
                <option value="300-400">300 - 400</option>
                <option value="500+">500+</option>
              </select>{" "}
            </label>
          </div>

          <div className="formtext">
            <label>
              Role
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Eg. Manager"
                required
              />
            </label>

            <label>
              Phone Number
              <div className="phone-input-container">
                {/* Phone Code Dropdown */}
                <select
                  id="phoneCode"
                  name="phcode"
                  value={formData.phcode}
                  onChange={handleInputChange}
                  required
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                </select>
                {/* Phone Number Input */}
                <input
                  type="tel"
                  id="phone"
                  name="phnumber"
                  placeholder="Phone Number"
                  value={formData.phnumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </label>
          </div>

          <div className="formtext">
            <label>
              Country
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </label>

            <label>
              Language
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                required
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
              </select>
            </label>
          </div>

          <p className="Proceed">
            By proceeding, you agree to the
            <a className="terms" href="#Terms">
              Terms and Service
            </a>
            <span> and </span>
            <a className="terms" href="Privacy">
              privacy policy
            </a>
          </p>

          <button type="submit" className="Continue">
            Create Account
          </button>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="Gettingimagecont">
        <img src={image} alt="Descriptive Alt Text" />
      </div>
    </div>
  );
};

export default CreateAccountPage2;
