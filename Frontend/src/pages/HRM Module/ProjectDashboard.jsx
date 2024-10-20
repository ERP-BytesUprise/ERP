import React from "react";
import "./styles/ProjectDashboard.css";
import { Navigate, useNavigate } from "react-router-dom";
import Filtericon from "../../assets/icons/Tune.png";

// Sample tasks with assigned member IDs
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

// Team members data
const teamMembers = [
  { id: 1, name: "Jay", avatar: "https://via.placeholder.com/40" },
  { id: 2, name: "Sam", avatar: "https://via.placeholder.com/40" },
  { id: 3, name: "Aman", avatar: "https://via.placeholder.com/40" },
  { id: 4, name: "Tanaya", avatar: "https://via.placeholder.com/40" },
  { id: 5, name: "Pratik", avatar: "https://via.placeholder.com/40" },
  { id: 6, name: "Renuka", avatar: "https://via.placeholder.com/40" },
  { id: 7, name: "Extra 1", avatar: "https://via.placeholder.com/40" },
  { id: 8, name: "Extra 2", avatar: "https://via.placeholder.com/40" },
];

// TaskCard component for rendering each task
const TaskCard = ({ id, title, progress, date, members, description }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const navigate = useNavigate();

  const handleJobClick = () => {
    // Navigate to the job summary page with the task id
    navigate(`/Project-summary/${id}`);
  };

  // Find team members by their IDs
  const displayedMembers = members
    .slice(0, 2) // Show up to 2 members
    .map((memberId) => teamMembers.find((member) => member.id === memberId));

  const extraMembersCount = members.length - displayedMembers.length;

  return (
    <div className="task-card" onClick={handleJobClick}>
      {" "}
      {/* Add onClick */}
      <h3>{title}</h3>
      <p>{truncateText(description, 100)}</p>
      <div className="progress">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="separator"></div>
      <div className="members-date">
        <div className="team-members">
          {displayedMembers.map((member) => (
            <div key={member.id} className="avatar">
              <img src={member.avatar} alt={member.name} />
            </div>
          ))}
          {extraMembersCount > 0 && (
            <div className="avatar extra-count">+{extraMembersCount}</div>
          )}
        </div>
        <span className="dateee">{date}</span>
      </div>
    </div>
  );
};

// ProjectDashboard component for rendering the project board
const ProjectDashboard = () => {
  const categories = ["In Queue", "On Progress", "Testing", "Completed"];

  // Count tasks in each category
  const countTasks = (category) =>
    tasks.filter((task) => task.category === category).length;

  return (
    <div className="board-container">
      <div className="Barr">
        <div>
          <input
            className="search"
            type="text"
            placeholder="Search by name, role, department..."
          />
          <button className="filter-button">
            Filter
            <img src={Filtericon} />
          </button>
        </div>
        <button className="">Create</button>
      </div>

      <div className="right">
        <div className="fixed-headers">
          {categories.map((category) => (
            <div
              key={category}
              className={`column ${category.toLowerCase().replace(" ", "-")}`}
            >
              <div className="category-header">
                <h2>{category}</h2>
                <span className="task-count">{countTasks(category)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="board">
        {categories.map((category) => (
          <div
            key={category}
            className={`column ${category.toLowerCase().replace(" ", "-")}`}
          >
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;
