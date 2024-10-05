import React from "react";
import "./styles/ProjectDashboard.css";

const tasks = [
  {
    id: 1,
    title: "Package GPS Tracker",
    category: "In Queue",
    progress: 10,
    date: "24 Oct, 2024",
    members: 5,
  },
  {
    id: 2,
    title: "Package GPS Tracker",
    category: "In Queue",
    progress: 60,
    date: "24 Oct, 2024",
    members: 5,
  },
  {
    id: 3,
    title: "Package GPS Tracker",
    category: "On Progress",
    progress: 60,
    date: "24 Oct, 2024",
    members: 5,
  },
  {
    id: 4,
    title: "Package GPS Tracker",
    category: "On Progress",
    progress: 60,
    date: "24 Oct, 2024",
    members: 5,
  },
  {
    id: 5,
    title: "Package GPS Tracker",
    category: "Testing",
    progress: 60,
    date: "24 Oct, 2024",
    members: 5,
  },
  {
    id: 6,
    title: "Package GPS Tracker",
    category: "Completed",
    progress: 100,
    date: "24 Oct, 2024",
    members: 5,
  },
];

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

const displayedMembers = teamMembers.slice(0, 2); // Display only the first 6 members
const extraMembersCount = teamMembers.length - displayedMembers.length;
const TaskCard = ({ title, progress, date, members }) => (
  <div className="task-card">
    <h3>{title}</h3>
    <p>
      This design concept covers all the key features of the HRM module. It
      prioritizes simplicity, intuitiveness, and ease of use for HR
      administrators, managers, and employees.
    </p>
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

const ProjectDashboard = () => {
  const categories = ["In Queue", "On Progress", "Testing", "Completed"];

  const countTasks = (category) =>
    tasks.filter((task) => task.category === category).length;

  return (
    <div className="board">
      {categories.map((category) => (
        <div
          key={category}
          className={`column ${category.toLowerCase().replace(" ", "-")}`}
        >
          <div className="category-header">
            <h2>{category}</h2>
            <span className="task-count">{countTasks(category)}</span>
          </div>
          {tasks
            .filter((task) => task.category === category)
            .map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectDashboard;
