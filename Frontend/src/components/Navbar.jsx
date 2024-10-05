import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css"; // Import your custom CSS for styling
import logo from "../assets/icons/logo.png";
import settingsIcon from "../assets/icons/Settings.png";
import bellIcon from "../assets/icons/Bell.png";
import mailIcon from "../assets/icons/Mail.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" /> {/* Add your logo image path */}
      </div>

      {/*<button className="navbar-toggler" onClick={toggleMenu}>
         <i className="fas fa-bars"></i> Hamburger icon 
      </button>
      */}

      <div className={`navbar-icons ${isMenuOpen ? "open" : ""}`}>
        <a href="#settings" className="icon">
          <img src={settingsIcon} alt="Settings" />
        </a>
        <Link to="/Notification" className="icon">
          <img src={bellIcon} alt="Notifications" />
        </Link>
        <a href="#mail" className="icon">
          <img src={mailIcon} alt="Mail" />
        </a>
        <a href="#user" className="icon">
          <i className="fas fa-user-circle"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
