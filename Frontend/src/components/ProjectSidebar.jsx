import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Sidebar.css";
import PGT from "../assets/icons/Logo 1.png";
import Xolio from "../assets/icons/Logo 2.png";
import DailyDev from "../assets/icons/Logo 3.png";

const ProjectSidebar = () => {
  // Sample project data
  const [projects, setProjects] = useState([
    { id: 1, name: "PGT", image: PGT },
    { id: 2, name: "Xolio", image: Xolio },
    { id: 3, name: "DailyDev", image: DailyDev },
  ]);

  return (
    <div className="sidebar">
      <div className="menu">
        <NavLink to="/Projects">
          <h2 className="logo">Projects</h2>
        </NavLink>
        <ul className="menu-list">
          {projects.map((project) => (
            <NavLink key={project.id} to={`/Project-summary/${project.id}`}>
              <li className="ProjectFont">
                <img
                  className="ProjectSideLogo"
                  src={project.image}
                  alt={`${project.name} image`}
                />
                <p>{project.name}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSidebar;
