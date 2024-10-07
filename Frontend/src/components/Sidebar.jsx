import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./css/Sidebar.css";
import employeeIcon from "../assets/icons/User Groups.png";
import recruitmentIcon from "../assets/icons/Add User Male.png";
import payrollIcon from "../assets/icons/Business Management.png";
import performanceIcon from "../assets/icons/Graph.png";
import trainingIcon from "../assets/icons/Training.png";
import benefitsIcon from "../assets/icons/image 1.png";
import complianceIcon from "../assets/icons/Website Analytics.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <Link to="/Dashboard">
          <h2 className="logo">Dashboard</h2>
        </Link>
        <ul className="menu-list">
          <li className="menu-item" onClick={() => toggleDropdown("employee")}>
            <img className="icon" src={employeeIcon} alt="Employee Icon" />{" "}
            Employee
            {openDropdown === "employee" ? (
              <FaChevronUp className="dropdown-icon" />
            ) : (
              <FaChevronDown className="dropdown-icon" />
            )}
          </li>
          {openDropdown === "employee" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/Directory">Directory</Link>
              </li>
              <li>
                <Link to="/Employee-Management">Manage Employees</Link>
              </li>
            </ul>
          )}

          <li
            className="menu-item"
            onClick={() => toggleDropdown("recruitment")}
          >
            <img
              className="icon"
              src={recruitmentIcon}
              alt="Recruitment Icon"
            />{" "}
            Recruitment
            {openDropdown === "recruitment" ? (
              <FaChevronUp className="dropdown-icon" />
            ) : (
              <FaChevronDown className="dropdown-icon" />
            )}
          </li>
          {openDropdown === "recruitment" && (
            <ul className="dropdown-menu">
              <Link to="/Job-List">
                <li>Job List</li>
              </Link>
              <Link to="/Candidates">
                <li>Candidates</li>
              </Link>
            </ul>
          )}

          <li
            className="menu-item"
            onClick={() => toggleDropdown("performance")}
          >
            <img
              className="icon"
              src={performanceIcon}
              alt="Performance Icon"
            />{" "}
            Performance
            {openDropdown === "performance" ? (
              <FaChevronUp className="dropdown-icon" />
            ) : (
              <FaChevronDown className="dropdown-icon" />
            )}
          </li>
          {openDropdown === "performance" && (
            <ul className="dropdown-menu">
              {/* <li>Performance Reviews</li>
              <li>Goals</li>
              <li>Reports</li>*/}
            </ul>
          )}

          <li className="menu-item">
            <img className="icon" src={payrollIcon} alt="Payroll Icon" />{" "}
            Payroll
          </li>
          <Link to="/Projects">
            <li className="menu-item">
              <img className="icon" src={trainingIcon} alt="Training Icon" />{" "}
              Projects
            </li>
          </Link>
          <li className="menu-item">
            <img className="icon" src={complianceIcon} alt="Compliance Icon" />{" "}
            Compliance & Reporting
          </li>
        </ul>
      </div>

      <div className="footer">
        <ul>
          <li>
            <FaQuestionCircle className="icon" /> Help
          </li>
          <li>
            <FaSignOutAlt className="icon" /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
