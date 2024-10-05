import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/EmployeeLeave.css";
import Unavialableicon from "../../assets/icons/Unavailable.png";
import Holidayicon from "../../assets/icons/Holiday.png";
import Filtericon from "../../assets/icons/Tune.png";
import Arrowicon from "../../assets/icons/Expand Arrow.png";
import Dateicon from "../../assets/icons/calendar 1.png";
import Exporticon from "../../assets/icons/Export.png";
import Registericon from "../../assets/icons/Registration.png";
import Layofficon from "../../assets/icons/Layoff.png";
import Back from "../../components/Backnav.jsx";
import Approved from "../../assets/icons/Checked User Male.png";
import Search from "../../assets/icons/Search.png";
import Image1 from "../../assets/icons/avatar girl with glasses.png";
import Image2 from "../../assets/icons/profile picture of man in green shirt and orange hat.png";

const EmployeeManagement = () => {
  // State for employees and the active button
  const [activeMenu, setActiveMenu] = useState("Request"); // "Request" by default
  const [showActions, setShowActions] = useState({});
  const [employees] = useState([
    {
      name: "Jay Vasani",
      image: Image2,
      leaveType: "Part-Time",
      leaveFrom: "Jan 23,2024",
      leaveTo: "Jan 24,2024",
      Days: "1",
      Status: "Approved",
    },
    {
      name: "Jay Vasani",
      image: Image2,
      leaveType: "Part-Time",
      leaveFrom: "Jan 23,2024",
      leaveTo: "Jan 24,2024",
      Days: "1",
      Status: "Approved",
    },
    {
      name: "Ash",
      image: Image1,
      leaveType: "Full-Time",
      leaveFrom: "Jan 23,2024",
      leaveTo: "Jan 24,2024",
      Days: "1",
      Status: "Rejected",
    },
    {
      name: "Jay Vasani",
      image: Image2,
      leaveType: "Part-Time",
      leaveFrom: "Jan 23,2024",
      leaveTo: "Jan 24,2024",
      Days: "2",
      Status: "Approved",
    },
    {
      name: "Jay Vasani",
      image: Image2,
      leaveType: "Part-Time",
      leaveFrom: "Jan 23,2024",
      leaveTo: "Jan 24,2024",
      Days: "3",
      Status: "Pending",
    },
  ]);

  // Handle Edit button click for each employee
  const handleEditClick = (index) => {
    setShowActions((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle visibility for the clicked row
    }));
  };

  return (
    <>
      <div className="employee-management">
        <header>
          <div className="stats-container">
            <div className="stat-box">
              <img src={Holidayicon} />
              <span className="Report">
                <span className="highlight">10%</span> vs last month
              </span>
              <p>Total Leave</p>
              <p className="count">5</p>
            </div>
            <div className="stat-box">
              <img src={Approved} />
              <span className="Report">
                <span className="highlight">10%</span> vs last month
              </span>
              <p>Approved Leave</p>
              <p className="count">3</p>
            </div>
            <div className="stat-box">
              <img src={Unavialableicon} />
              <span className="Report">
                <span className="Absent">10%</span> vs last month
              </span>
              <p>Pending Leave</p>
              <p className="count">2</p>
            </div>
          </div>
        </header>

        <div className="Menu">
          <Link to="/Employee-Management">
            <button
              className={`Manage ${activeMenu === "Manage" ? "active" : ""}`}
              onClick={() => setActiveMenu("Manage")}
            >
              <img
                src={Registericon}
                alt="Manage Employee"
                className="menu-icon"
              />
              <span>Manage Employee</span>
            </button>
          </Link>
          <button
            className={`Request ${activeMenu === "Request" ? "active" : ""}`}
            onClick={() => setActiveMenu("Request")}
          >
            <img
              src={Layofficon}
              alt="Request Time Off"
              className="menu-icon"
            />
            <span>Request Time Off</span>
          </button>
        </div>

        <div className="Bar">
          <input
            type="text"
            placeholder="Search by name, role, department..."
          />
          <button className="filter-button">
            Filter
            <img src={Filtericon} />
          </button>
          <span>
            <button className="export-button export">
              All Departments
              <img src={Arrowicon} />
            </button>
            <button className="export-button">
              24 Oct,2024
              <img src={Dateicon} />
            </button>
            <button className="export-button">
              Export CSV
              <img src={Exporticon} />
            </button>
          </span>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>Leave From</th>
              <th>Leave To</th>
              <th>Days</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>
                  <img className="Profile" src={employee.image} alt="NoImg" />
                  {employee.name}
                </td>
                <td>
                  <p
                    className={`Type ${
                      employee.leaveType === "Full-Time"
                        ? "Type-FullTime"
                        : "Type-PartTime"
                    }`}
                  >
                    {employee.leaveType}
                  </p>
                </td>
                <td>{employee.leaveFrom}</td>
                <td>{employee.leaveTo}</td>
                <td>{employee.Days}</td>
                <td>
                  <p
                    className={`Status ${
                      employee.Status === "Approved"
                        ? "Approved"
                        : employee.Status === "Pending"
                        ? "Pending"
                        : "Rejected"
                    }`}
                  >
                    {employee.Status}
                  </p>
                </td>
                <td>
                  <p className="Edit">
                    {!showActions[index] ? (
                      <button
                        onClick={() => handleEditClick(index)}
                        className="Edit-btn"
                      >
                        Edit
                      </button>
                    ) : (
                      <div>
                        <button className="Approved-btn">Approved</button>
                        <button className="Reject-btn">Reject</button>
                      </div>
                    )}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeManagement;
