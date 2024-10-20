import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/UpdatesFiles.css";

const UpdatesFiles = () => {
  // Get the current URL path
  const location = useLocation();

  // Determine which menu item is active based on the current path
  const activeMenu = location.pathname;

  return (
    <div className="ProjectBtnn">
      <Link to="/Project-updates">
        <button
          className={`Update ${
            activeMenu === "/Project-updates" ? "active" : ""
          }`}
        >
          <span>Updates</span>
        </button>
      </Link>

      <Link to="/Project-Files">
        <button
          className={`Files ${activeMenu === "/Project-Files" ? "active" : ""}`}
        >
          <span>Files</span>
        </button>
      </Link>
    </div>
  );
};

export default UpdatesFiles;
