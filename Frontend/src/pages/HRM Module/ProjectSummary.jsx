import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/ProjectSummary.css";
import SummaryIcon from "../../assets/icons/Summary List.png";
import UpdateIcon from "../../assets/icons/Import File.png";
import CalenderIcon from "../../assets/icons/calendar 1.png";
import UserIcon from "../../assets/icons/User Groups.png";

const ProjectSummary = () => {
  // State for employees and the active button
  const [activeMenu, setActiveMenu] = useState("Summary"); // "Manage" by default

  return (
    <>
      <div className="employee-management">
        <div className="ProjectBtn">
          <button
            className={`Summary ${activeMenu === "Summary" ? "active" : ""}`}
            onClick={() => setActiveMenu("Summary")}
          >
            <img
              src={SummaryIcon}
              alt="Manage Employee"
              className="menu-icon"
            />
            <span>Summary</span>
          </button>
          <button
            className={`Team Members ${
              activeMenu === "Team Members" ? "active" : ""
            }`}
            onClick={() => setActiveMenu("Team Members")}
          >
            <img src={UserIcon} alt="Manage Employee" className="menu-icon" />
            <span>Team Members</span>
          </button>
          <button
            className={`Calender ${activeMenu === "Calender" ? "active" : ""}`}
            onClick={() => setActiveMenu("Calender")}
          >
            <img
              src={CalenderIcon}
              alt="Manage Employee"
              className="menu-icon"
            />
            <span>Calender</span>
          </button>

          <Link to="/Leave-Request">
            <button
              className={`Update ${activeMenu === "Update" ? "active" : ""}`}
              onClick={() => setActiveMenu("Update")}
            >
              <img
                src={UpdateIcon}
                alt="Request Time Off"
                className="menu-icon"
              />

              <span>Updates</span>
            </button>
          </Link>
        </div>

        <div className="container">
          {/* Edit Button */}
          <button className="edit-button">Edit</button>

          {/* Project Description */}
          <section className="project-section">
            <h2># Project Description</h2>
            <div className="points">
              <p>
                - The project aims to implement tracking capabilities for local
                and international shipments, ensuring effective tracking across
                various environments (urban, suburban, rural).
              </p>
              <p>
                - It will provide a solution for individual users to track
                personal packages and support high-volume tracking needs for
                large enterprises.
              </p>
              <p>
                - Benefits include continuous updates on package location,
                strong data encryption, secure handling practices, monitoring of
                package integrity (temperature, humidity, shock), real-time
                notifications about package status changes, and features for
                small and medium enterprises (SMEs).
              </p>
            </div>
          </section>

          {/* Hardware Specification */}

          <h2># Hardware Specification</h2>
          <div className="points">
            <p>
              - The tracking device will include a GPS module (NEO-6M) for
              accurate location tracking and a connectivity module (e.g.,
              GSM/3G/4G, Wi-Fi, or Bluetooth).
            </p>
            <p>
              - An optional base station can be implemented for receiving data
              from tracking devices.
            </p>
          </div>

          {/* Software Specification */}
          <section className="project-section">
            <h2># Software Specification</h2>
            <div className="points">
              <p>
                - The backend system will use a variety of services including a
                server hosted on platforms like AWS, Google Cloud, or Azure; a
                database like MySQL or PostgreSQL for storing tracking data; and
                a data processing engine such as Apache Kafka or Apache Spark.
              </p>
              <p>
                - APIs will facilitate data integration and communication with
                third-party systems.
              </p>
              <p>
                - For frontend applications, a web application will be developed
                using React, integrating Google Maps API for real-time location
                display and implementing user authentication.
              </p>
            </div>
          </section>

          {/* Literature Survey */}
          <section className="project-section">
            <h2># Literature Survey</h2>
            <div className="points">
              <p>
                - Various studies have been referenced, showcasing the use of
                GPS and IoT technologies in tracking systems, highlighting their
                effectiveness in providing real-time data.
              </p>
              <p>
                - Notable projects include vehicle tracking systems, animal
                tracking systems, and fire alert systems, all demonstrating
                advancements in accuracy and reliability.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section className="project-section">
            <h2># Methodology</h2>
            <div className="points">
              <p>
                - The methodology includes steps like GPS tracker
                initialization, location acquisition, data transmission, and web
                server processing.
              </p>
              <p>
                - Key tasks involve ensuring proper connection and configuration
                of the GPS device, handling potential issues with satellite
                signals, implementing reliable data transmission methods, and
                designing a user-friendly web application interface.
              </p>
            </div>
          </section>

          {/* Horizontal Line */}
          <hr />

          {/* Team Members */}
          <section className="project-section team-members">
            <h3>Team Members</h3>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectSummary;
