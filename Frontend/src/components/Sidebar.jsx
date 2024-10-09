import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./css/Sidebar.css";
import employeeIcon from "../assets/icons/User Groups.png";
import recruitmentIcon from "../assets/icons/Add User Male.png";
import payrollIcon from "../assets/icons/Business Management.png";
import trainingIcon from "../assets/icons/Training.png";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // Add navigate hook

  const toggleDropdown = (dropdownId) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null); // Close the dropdown if already opened
    } else {
      setOpenDropdown(dropdownId);

      // Automatically navigate to "/Directory" if "Employee" is opened
      if (dropdownId === "employee") {
        navigate("/Directory");
      }
      if (dropdownId === "recruitment") {
        navigate("/Job-List");
      }
    }
  };

  // Open the correct dropdown based on the route
  useEffect(() => {
    if (
      location.pathname.startsWith("/Directory") ||
      location.pathname.startsWith("/Employee-Management") ||
      location.pathname.startsWith("/Leave-Request")
    ) {
      setOpenDropdown("employee");
    } else if (
      location.pathname.startsWith("/Job-List") ||
      location.pathname.startsWith("/Candidates")
    ) {
      setOpenDropdown("recruitment");
    } else if (location.pathname.startsWith("/Projects")) {
      setOpenDropdown(null); // Since Projects doesn't have a dropdown
    }
  }, [location]);

  return (
    <div className="sidebar">
      <div className="menu">
        <NavLink to="/Dashboard">
          <h2 className="logo">Dashboard</h2>
        </NavLink>
        <ul className="menu-list">
          {/* Employee Dropdown */}
          <li
            className={`menu-item ${
              openDropdown === "employee" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("employee")}
          >
            <span>
              <img className="icon" src={employeeIcon} alt="Employee Icon" />{" "}
              Employee
            </span>
            {openDropdown === "employee" ? (
              <FaChevronUp className="dropdown-icon" />
            ) : (
              <FaChevronDown className="dropdown-icon" />
            )}
          </li>
          {openDropdown === "employee" && (
            <ul className="dropdown-menu">
              <NavLink
                to="/Directory"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Directory</li>
              </NavLink>
              <NavLink
                to="/Employee-Management"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Manage Employee</li>
              </NavLink>
            </ul>
          )}

          {/* Recruitment Dropdown */}
          <li
            className={`menu-item ${
              openDropdown === "recruitment" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("recruitment")}
          >
            <span>
              <img
                className="icon"
                src={recruitmentIcon}
                alt="Recruitment Icon"
              />{" "}
              Recruitment
            </span>
            {openDropdown === "recruitment" ? (
              <FaChevronUp className="dropdown-icon" />
            ) : (
              <FaChevronDown className="dropdown-icon" />
            )}
          </li>
          {openDropdown === "recruitment" && (
            <ul className="dropdown-menu">
              <NavLink
                to="/Job-List"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Job Lists</li>
              </NavLink>
              <NavLink
                to="/Candidates"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Candidates</li>
              </NavLink>
            </ul>
          )}

          {/* Other Static Items */}
          <NavLink
            to="/Payroll"
            className={({ isActive }) => (isActive ? "activeback" : "")}
          >
            <li className="menu-item">
              <img className="icon" src={payrollIcon} alt="Payroll Icon" />{" "}
              Payroll
            </li>
          </NavLink>

          {/* Projects */}
          <NavLink
            to="/Projects"
            className={({ isActive }) => (isActive ? "activeback" : "")}
          >
            <li className="menu-item">
              <img className="icon" src={trainingIcon} alt="Training Icon" />{" "}
              Projects
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="footer">
        <ul>
          <li>
            <FaSignOutAlt className="icon" /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
