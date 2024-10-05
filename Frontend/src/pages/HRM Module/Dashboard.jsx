import React from "react";
import "./styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Metrics Cards */}
        <div className="metrics">
          <div className="metric-card">
            <h3>Total Employees</h3>
            <p className="metric-percentage positive">10% vs last month</p>
            <p className="metric-value">150</p>
          </div>
          <div className="metric-card">
            <h3>New Employees</h3>
            <p className="metric-percentage positive">6% vs last month</p>
            <p className="metric-value">12</p>
          </div>
          <div className="metric-card">
            <h3>Resigned Employees</h3>
            <p className="metric-percentage negative">12% vs last month</p>
            <p className="metric-value">5</p>
          </div>
          <div className="metric-card">
            <h3>Total Applicants</h3>
            <p className="metric-percentage positive">16% vs last month</p>
            <p className="metric-value">156</p>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="interviews-section">
          <div className="interviews-header">
            <h2>Upcoming Interviews</h2>
            <a href="#" className="see-all">
              See All
            </a>
          </div>
          <div className="interviews-list">
            <div className="interview-card">
              <div className="interview-details">
                <img src="/path-to-avatar" alt="avatar" className="avatar" />
                <div>
                  <h4>Jay Vasani</h4>
                  <p>Product Designer</p>
                </div>
              </div>
              <div className="interview-info">
                <p>Start: 10:45 AM (30 Min)</p>
                <p>Status: 50%</p>
              </div>
            </div>

            <div className="interview-card">
              <div className="interview-details">
                <img src="/path-to-avatar" alt="avatar" className="avatar" />
                <div>
                  <h4>Bhavin Vora</h4>
                  <p>Full Stack Developer</p>
                </div>
              </div>
              <div className="interview-info">
                <p>Start: 03:00 PM (30 Min)</p>
                <p>Status: 50%</p>
              </div>
            </div>
          </div>
        </div>

        {/* To-Do List */}
        <div className="todo-section">
          <div className="todo-header">
            <h2>Things to Do</h2>
            <a href="#" className="see-all">
              See All
            </a>
          </div>
          <div className="todo-list">
            <div className="todo-item">
              <input type="checkbox" checked />
              <label>Interview Jay Vasani - Product Designer</label>
              <span>19 Oct, 2024</span>
            </div>
            <div className="todo-item">
              <input type="checkbox" checked />
              <label>Posting Job Advertisements, Screening Resumes</label>
              <span>19 Oct, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
