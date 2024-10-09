import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/ProjectSummary.css";
import editicon from "../../assets/icons/Edit.png";
import { useParams } from "react-router-dom";

const ProjectSummary = () => {
  // Sample project data stored in state
  const tasks = [
    {
      id: 1,
      title: "Package GPS Tracker",
      category: "In Queue",
      progress: 10,
      date: "24 Oct, 2024",
      members: [1, 2, 3, 4, 5, 6, 7, 8], // Members assigned to the task
      description:
        "This design concept covers all the key features of the HRM module. Itprioritizes simplicity, intuitiveness, and ease of use for HR administrators, managers, and employees.",
    },
    {
      id: 2,
      title: "Package GPS Tracker",
      category: "In Queue",
      progress: 60,
      date: "24 Oct, 2024",
      members: [1, 2, 3, 4, 5], // Members assigned to the task
      description:
        "This design concept covers all the key features of the HRM module. Itprioritizes simplicity, intuitiveness, and ease of use for HR administrators, managers, and employees.",
    },
    {
      id: 3,
      title: "Package GPS Tracker",
      category: "On Progress",
      progress: 60,
      date: "24 Oct, 2024",
      members: [2, 3, 4], // Members assigned to the task
      description:
        "This design concept covers all the key features of the HRM module. Itprioritizes simplicity, intuitiveness, and ease of use for HR administrators, managers, and employees.",
    },
    {
      id: 4,
      title: "Package GPS Tracker",
      category: "On Progress",
      progress: 60,
      date: "24 Oct, 2024",
      members: [5, 6, 7], // Members assigned to the task
      description:
        "This design concept covers all the key features of the HRM module. Itprioritizes simplicity, intuitiveness, and ease of use for HR administrators, managers, and employees.",
    },
    {
      id: 5,
      title: "Package GPS Tracker",
      category: "Testing",
      progress: 60,
      date: "24 Oct, 2024",
      members: [1, 2, 3, 5], // Members assigned to the task
      description:
        "This design concept covers all the key features of the HRM module. Itprioritizes simplicity, intuitiveness, and ease of use for HR administrators, managers, and employees.",
    },
    {
      id: 6,
      title: "Package GPS Tracker",
      category: "Completed",
      progress: 100,
      date: "24 Oct, 2024",
      members: [4, 6, 7, 8], // Members assigned to the task
      description:
        "This design concept covers all the key features of the HRM module. Itprioritizes simplicity, intuitiveness, and ease of use for HR administrators, managers, and employees.",
    },
    {
      id: 7,
      title: "Package GPS Tracker",
      category: "In Queue",
      progress: 10,
      date: "24 Oct, 2024",
      members: [1, 2, 3, 4, 5, 6, 7, 8], // Members assigned to the task
      description:
        "This design concept covers all the key features of the HRM module. Itprioritizes simplicity, intuitiveness, and ease of use for HR administrators, managers, and employees.",
    },
  ];

  const [projectData, setProjectData] = useState({
    description: [
      "The project aims to implement tracking capabilities for local and international shipments, ensuring effective tracking across various environments (urban, suburban, rural). It will provide a solution for individual users to track personal packages and support high-volume tracking needs for large enterprises. Benefits include continuous updates on package location, strong data encryption, secure handling practices, monitoring of package integrity (temperature, humidity, shock), real-time notifications about package status changes, and features for small and medium enterprises (SMEs).",
    ],
    hardwareSpec: [
      "The tracking device will include a GPS module (NEO-6M) for accurate location tracking and a connectivity module (e.g., GSM/3G/4G, Wi-Fi, or Bluetooth). An optional base station can be implemented for receiving data from tracking devices.",
    ],
    softwareSpec: [
      "The backend system will use a variety of services including a server hosted on platforms like AWS, Google Cloud, or Azure; a database like MySQL or PostgreSQL for storing tracking data; and a data processing engine such as Apache Kafka or Apache Spark.APIs will facilitate data integration and communication with third-party systems. For frontend applications, a web application will be developed using React, integrating Google Maps API for real-time location display and implementing user authentication.",
    ],
    literatureSurvey: [
      "Various studies have been referenced, showcasing the use of GPS and IoT technologies in tracking systems, highlighting their effectiveness in providing real-time data. Notable projects include vehicle tracking systems, animal tracking systems, and fire alert systems, all demonstrating advancements in accuracy and reliability.",
    ],
    methodology: [
      "The methodology includes steps like GPS tracker initialization, location acquisition, data transmission, and web server processing.Key tasks involve ensuring proper connection and configuration of the GPS device, handling potential issues with satellite signals, implementing reliable data transmission methods, and designing a user-friendly web application interface.",
    ],
    teamMembers: [
      { id: 1, img: "https://via.placeholder.com/80", name: "Team Member 1" },
      { id: 2, img: "https://via.placeholder.com/80", name: "Team Member 2" },
      { id: 3, img: "https://via.placeholder.com/80", name: "Team Member 3" },
      { id: 4, img: "https://via.placeholder.com/80", name: "Team Member 4" },
      { id: 5, img: "https://via.placeholder.com/80", name: "Team Member 5" },
      { id: 6, img: "https://via.placeholder.com/80", name: "Team Member 6" },
      { id: 7, img: "https://via.placeholder.com/80", name: "Team Member 7" },
      { id: 8, img: "https://via.placeholder.com/80", name: "Team Member 8" },
      { id: 9, img: "https://via.placeholder.com/80", name: "Team Member 9" },
      { id: 10, img: "https://via.placeholder.com/80", name: "Team Member 10" },
    ],
  });
  const { id } = useParams(); // Get the task ID from the URL
  const task = tasks.find((task) => task.id === parseInt(id)); // Fetch the task by its ID

  if (!task) {
    return <div>Task not found</div>;
  }

  const displayedMembers = projectData.teamMembers.slice(0, 4); // Display only the first 6 members
  const extraMembersCount =
    projectData.teamMembers.length - displayedMembers.length;

  return (
    <>
      <div className="container">
        {/* Edit Button */}

        <div className="Summaryleft">
          {/* Project Description */}
          <section className="project-section">
            <span>
              <h2># Project Description</h2>
              <button className="edit-button">
                <img src={editicon}></img>Edit
              </button>
            </span>
            <div className="points">
              {projectData.description.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          </section>

          {/* Hardware Specification */}
          <section className="project-section">
            <h2># Hardware Specification</h2>
            <div className="points">
              {projectData.hardwareSpec.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          </section>

          {/* Software Specification */}
          <section className="project-section">
            <h2># Software Specification</h2>
            <div className="points">
              {projectData.softwareSpec.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          </section>

          {/* Literature Survey */}
          <section className="project-section">
            <h2># Literature Survey</h2>
            <div className="points">
              {projectData.literatureSurvey.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          </section>

          {/* Methodology */}
          <section className="project-section">
            <h2># Methodology</h2>
            <div className="points">
              {projectData.methodology.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          </section>

          {/* Horizontal Line */}
          <hr />

          {/* Team Members */}
          <h3>Team Members</h3>
          <section className="project-section team-members">
            <div className="team-members">
              {displayedMembers.map((member) => (
                <div key={member.id} className="avatar">
                  <img src={member.img} alt={member.name} />
                </div>
              ))}
              {extraMembersCount > 0 && (
                <div className="avatar extra-count">+{extraMembersCount}</div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectSummary;
