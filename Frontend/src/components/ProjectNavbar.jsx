import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/ProjectNavbar.css";
import SummaryIcon from "../assets/icons/Summary List.png";
import UpdateIcon from "../assets/icons/Import File.png";
import CalenderIcon from "../assets/icons/calendar 1.png";
import UserIcon from "../assets/icons/User Groups.png";
import SettingIcon from "../assets/icons/Settings.png";

const ProjectNavbar = () => {
  // Get the current URL path
  const location = useLocation();

  // Determine which menu item is active based on the current path
  const activeMenu = location.pathname;
  console.log(activeMenu);

  return (
    <div className="ProjectBtn">
      <Link to="/Project-summary">
        <button
          className={`Summary ${
            activeMenu.startsWith("/Project-summary") ? "active" : ""
          }`}
        >
          <img src={SummaryIcon} alt="Manage Employee" className="menu-icon" />
          <span>Summary</span>
        </button>
      </Link>

      <Link to="/Project-team-members">
        <button
          className={`Team Members ${
            activeMenu === "/Project-team-members" ? "active" : ""
          }`}
        >
          <img src={UserIcon} alt="Manage Employee" className="menu-icon" />
          <span>Team Members</span>
        </button>
      </Link>

      <Link to="/Project-calendar">
        <button
          className={`Calender ${
            activeMenu === "/Project-calendar" ? "active" : ""
          }`}
        >
          <img src={CalenderIcon} alt="Manage Employee" className="menu-icon" />
          <span>Calendar</span>
        </button>
      </Link>

      <Link to="/Project-updates">
        <button
          className={`Update ${
            activeMenu === "/Project-updates" || activeMenu === "/Project-Files"
              ? "active"
              : ""
          }`}
        >
          <img src={UpdateIcon} alt="Request Time Off" className="menu-icon" />
          <span>Updates</span>
        </button>
      </Link>
      <div className="Projectstg">
        <Link to="/Project-Settings">
          <img src={SettingIcon} alt="Manage Employee" />
          <span>Project Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectNavbar;
