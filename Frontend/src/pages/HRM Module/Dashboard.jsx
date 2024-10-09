import React, { useState, useEffect } from "react";
import "./styles/Dashboard.css";
import dashboardImage from "../../assets/images/img-dashboard.png";
import metricsIcon1 from "../../assets/icons/metricsIcon1.png";
import metricsIcon2 from "../../assets/icons/metricsIcon2.png";
import metricsIcon3 from "../../assets/icons/metricsIcon3.png";
import metricsIcon4 from "../../assets/icons/metricsIcon4.png";
import avatar from "../../assets/icons/user-avatar.png";

const Dashboard = () => {
  const [showAll, setShowAll] = useState(false);

  const interviews = [
    {
      namD: "Jay Vasani",
      titlD: "Product Designer",
      timD: "10:45 AM (30 Min)",
      status: 50,
      avatar,
    },
    {
      namD: "Bhavin Vora",
      titlD: "Full Stack Developer",
      timD: "03:00 PM (30 Min)",
      status: 50,
      avatar,
    },
  ];

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Interview Jay Vasani - Product Designer",
      datD: "19 Oct, 2024",
      checked: true,
    },
    {
      id: 2,
      text: "Posting Job Advertisements, Screening Resumes",
      datD: "19 Oct, 2024",
      checked: true,
    },
    {
      id: 3,
      text: "Posting Job Advertisements, Screening Resumes",
      datD: "19 Oct, 2024",
      checked: true,
    },
    // Add more todos as needed
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Toggle checkbox state for a specific todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>
            <span style={{ fontWeight: "300" }}>Good Morning, </span>
            <span style={{ fontWeight: "bold" }}>Jay Vasani ☀️</span>
          </h1>

          <p style={{ marginLeft: "32em" }}>
            {new Date().toLocaleDateString()}{" "}
            <span style={{ marginLeft: "5em" }}>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </span>
          </p>
        </header>

        {/* Metrics Cards */}
        <div className="metrics">
          <div className="metric-card">
            <div className="metric-icon">
              {/* Insert your icon here */}
              <img
                src={metricsIcon1}
                alt="Total Employees Icon"
                style={{
                  border: "1px solid #414141",
                  padding: "1px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="metric-info">
              <p className="metric-percentage positive">
                <span className="percentage-value">10%</span> vs last month
              </p>
              <h3>Total Employees</h3>
              <p className="metric-value">150</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <img
                src={metricsIcon2}
                alt="New Employees Icon"
                style={{
                  border: "1px solid #414141",
                  padding: "1px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="metric-info">
              <p className="metric-percentage positive">
                <span className="percentage-value" style={{ color: "green" }}>
                  6%
                </span>{" "}
                vs last month
              </p>
              <h3>New Employees</h3>
              <p className="metric-value">12</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <img
                src={metricsIcon3}
                alt="Resigned Employees Icon"
                style={{
                  border: "1px solid #414141",
                  padding: "1px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="metric-info">
              <p className="metric-percentage negative">
                <span
                  className="percentage-value negative"
                  style={{ color: "red" }}
                >
                  12%
                </span>{" "}
                vs last month
              </p>
              <h3>Resigned Employees</h3>
              <p className="metric-value">5</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <img
                src={metricsIcon4}
                alt="Total Applicants Icon"
                style={{
                  border: "1px solid #414141",
                  padding: "1px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="metric-info">
              <p className="metric-percentage positive">
                <span
                  className="percentage-value negative"
                  style={{ color: "green" }}
                >
                  16%
                </span>{" "}
                vs last month
              </p>
              <h3>Total Applicants</h3>
              <p className="metric-value">156</p>
            </div>
          </div>
        </div>

        {/* Middle Part */}
        {/*First*/}
        <div className="grid-container">
          <div className="grid-item">
            <div className="card" style={{ width: "398px", height: "425px" }}>
              <img src={dashboardImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title">
                  <span style={{ fontWeight: "bold" }}>Hello Jay!</span>
                </h2>
                <p className="card-text">
                  Good Morning! You have 45 new applications. It's a lot of work
                  today!
                  <br />
                  So let's get started.
                </p>
                <a href="#" className="btn btn-primary">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      width: "101px",
                      height: "30px",
                      color: "white",
                      borderRadius: "10px",
                      background: "#354FFE",
                    }}
                  >
                    Review it
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Middle first*/}
          <div className="grid-item grid-item-2">
            <div className="grid-inner-item">
              {/* Upcoming Interviews Section */}
              <div className="interviews-section">
                <div
                  className="interviews-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2 style={{ margin: 0 }}>Upcoming Interviews</h2>
                  <a
                    href="#"
                    className="see-all"
                    style={{ color: "#5865F2", fontWeight: "bold" }}
                  >
                    See All <i className="bi bi-arrow-right"></i>
                  </a>
                </div>

                {/* Interviews List */}
                <div className="interviews-list">
                  {interviews.map((interview, index) => (
                    <div
                      key={index}
                      className="interview-card"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        borderBottom: "1px solid #e0e0e0",
                      }}
                    >
                      {/* Interview Details */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={interview.avatar}
                          alt={`${interview.name}'s avatar`}
                          className="avatar"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <div>
                          <strong>{interview.name}</strong>
                          <br />
                          <span style={{ fontSizD: "12px", color: "#666" }}>
                            {interview.title}
                          </span>
                        </div>
                      </div>

                      {/* Interview Time and Status */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{ textAlign: "right", marginRight: "20px" }}
                        >
                          <p style={{ margin: 0, fontSizD: "12px" }}>Start</p>
                          <p
                            style={{
                              margin: 0,
                              fontSizD: "14px",
                              fontWeight: "bold",
                            }}
                          >
                            {interview.time}
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontSizD: "12px",
                              color: "#666",
                            }}
                          >
                            {interview.duration}
                          </p>
                        </div>

                        <div>
                          <p style={{ margin: 0, fontSizD: "12px" }}>Status</p>
                          <div
                            className="progress"
                            style={{
                              width: "120px",
                              backgroundColor: "#e0e0e0",
                              borderRadius: "10px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${interview.status}%`,
                                backgroundColor: "#5865F2", // Adjust to match the color in your image
                                height: "8px",
                              }}
                              aria-valuenow={interview.status}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                          <span style={{ fontSizD: "12px", color: "#666" }}>
                            {interview.status}%
                          </span>
                        </div>
                      </div>

                      {/* Options Icon */}
                      <div
                        className="interview-options"
                        style={{ marginLeft: "10px" }}
                      >
                        <i
                          className="bi bi-three-dots"
                          style={{ fontSizD: "18px", cursor: "pointer" }}
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/*Middle Second*/}
            <div className="grid-inner-item">
              {/* Things to Do Section */}
              <div className="todo-section" style={{ marginTop: "20px" }}>
                <div
                  className="todo-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2 style={{ margin: 0 }}>Things to Do</h2>
                  <a
                    href="#"
                    className="see-all"
                    style={{ color: "#5865F2", fontWeight: "bold" }}
                  >
                    See All <i className="bi bi-arrow-right"></i>
                  </a>
                </div>

                <div
                  className="todo-list"
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                  {todos.map((todo, index) => (
                    <div
                      key={todo.id}
                      className="todo-item"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: "1px solid #e0e0e0",
                      }}
                    >
                      {/* Task and Checkbox */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="checkbox"
                          checked={todo.checked}
                          onChange={() => toggleTodo(todo.id)}
                          style={{
                            marginRight: "10px",
                            accentColor: "#5865F2",
                          }} // Checkbox styling to match blue color
                        />
                        <label style={{ fontWeight: "bold", fontSizD: "14px" }}>
                          {todo.text}
                        </label>
                      </div>

                      {/* Date and Icon */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ marginRight: "10px", color: "#666" }}>
                          {todo.date}
                        </span>
                        <i
                          className="bi bi-calendar"
                          style={{ fontSizD: "18px", color: "#666" }}
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/*Third*/}
          <do className="grid-item">
            <div
              className="interviews-section-1"
              style={{ background: "#f5f5f5" }}
            >
              <div className="interviews-header">
                <h2>Upcoming Interviews</h2>
                <a href="#" className="see-all">
                  See All
                </a>
              </div>
              <div className="interviews-list">
                <div
                  className="card"
                  style={{ height: "319px", background: "#f5f5f5" }}
                ></div>
              </div>
            </div>
          </do>
        </div>

        {/* Job Posting Section */}
        <div
          className="job-posting-section"
          style={{
            padding: "20px",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            marginTop: "30px",
          }}
        >
          <header
            className="job-posting-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>Job Posting</h3>
            <a
              href="#"
              className="see-all"
              style={{
                fontSizD: "14px",
                color: "#6C63FF",
                textDecoration: "none",
              }}
            >
              See All
            </a>
          </header>

          {/* Scrollable Card Container */}
          <div
            className="card-container"
            style={{
              display: "flex",
              overflowX: "auto",
              paddingTop: "15px",
              gap: "15px",
              scrollbarWidth: "none" /* Hide scrollbar in Firefox */,
              msOverflowStylD: "none" /* Hide scrollbar in IE and Edge */,
            }}
          >
            {/* Hide scrollbar for WebKit-based browsers (Chrome, Safari) */}
            <style>
              {`
        .card-container::-webkit-scrollbar {
          display: none;
        }
      `}
            </style>

            {/* Repeatable Cards */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="card"
                style={{
                  width: "18rem",
                  border: "1px solid #A1A1A1",
                  borderRadius: "10px",
                  padding: "15px",
                  backgroundColor: "#F5F5F5",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                  flexShrink: 0 /* Prevent cards from shrinking in flex layout */,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSizD: "12px",
                    marginBottom: "8px",
                    color: "#6B7280",
                    border: "1px solid #A1A1A1",
                    borderRadius: "5px",
                    width: "144px",
                  }}
                >
                  Expires on: Dec 1, 2024
                </span>
                <h5
                  style={{
                    margin: "0 0 10px",
                    fontSizD: "16px",
                    color: "#111827",
                  }}
                >
                  Back-End Developer
                </h5>
                <p
                  style={{
                    margin: "0 0 12px",
                    color: "#1F2937",
                    fontWeight: "bold",
                  }}
                >
                  <span style={{ color: "#6366F1" }}>16</span> New Candidates |{" "}
                  <span>43</span> Total Candidates
                </p>

                <div
                  className="tags"
                  style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}
                >
                  <span
                    className="tag"
                    style={{
                      backgroundColor: "#E0F2FE",
                      color: "#0369A1",
                      fontSizD: "12px",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Development
                  </span>
                  <span
                    className="tag"
                    style={{
                      backgroundColor: "#E5E7EB",
                      color: "#374151",
                      fontSizD: "12px",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Full Time
                  </span>
                  <span
                    className="tag"
                    style={{
                      backgroundColor: "#F3F4F6",
                      color: "#4B5563",
                      fontSizD: "12px",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Onsite
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
