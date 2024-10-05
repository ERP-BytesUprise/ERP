import React, { useState, useEffect } from "react";
import "./styles/ManageEmployee.css";
import TotalWorkforceicon from "../../assets/icons/Business.png";
import { Link } from "react-router-dom";
import PresentWorkforceicon from "../../assets/icons/Hard Working.png";
import Unavialableicon from "../../assets/icons/Unavailable.png";
import LateArrivalicon from "../../assets/icons/Clock.png";
import Holidayicon from "../../assets/icons/Holiday.png";
import Filtericon from "../../assets/icons/Tune.png";
import Arrowicon from "../../assets/icons/Expand Arrow.png";
import Dateicon from "../../assets/icons/calendar 1.png";
import Exporticon from "../../assets/icons/Export.png";
import Layofficon from "../../assets/icons/Layoff.png";
import Back from "../../components/Backnav.jsx";
import Registericon from "../../assets/icons/Registration.png";
import Leave from "./EmployeeLeave.jsx";
import Search from "../../assets/icons/Search.png";
import Image1 from "../../assets/icons/avatar girl with glasses.png";
import Image2 from "../../assets/icons/profile picture of man in green shirt and orange hat.png";

const EmployeeManagement = () => {
  // State for employees and the active button
  const [activeMenu, setActiveMenu] = useState("Manage"); // "Manage" by default

  const [selectedDate, setSelectedDate] = useState(null);

  const [employees] = useState([
    {
      id: "A110001",
      name: "Jay Vasani",
      image: Image2,
      role: "Product Designer",
      type: "Full-Time",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      location: "Remote",
    },
    {
      id: "A110002",
      name: "Tanuja Yedle",
      image: Image1,
      role: "HR Manager",
      type: "Full-Time",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      location: "Remote",
    },
    {
      id: "A110003",
      name: "Ashu Patle",
      image: Image1,
      role: "Engineer",
      type: "Full-Time",
      status: "Absent",
      checkIn: "-",
      checkOut: "-",
      location: "Remote",
    },
    {
      id: "A110004",
      name: "Aditya",
      image: Image2,
      role: "Full Stack Developer",
      type: "Part-Time",
      status: "Late",
      checkIn: "10:30 AM",
      checkOut: "04:00 PM",
      location: "Onsite",
    },
    {
      id: "A110005",
      name: "Ajay Galhate",
      image: Image2,
      role: "Frontend Developer",
      type: "Full-Time",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      location: "Remote",
    },
    {
      id: "A110006",
      name: "Pratik Dahat",
      image: Image2,
      role: "Project Manager",
      type: "Full-Time",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "05:00 PM",
      location: "Onsite",
    },
    {
      id: "A110007",
      name: "Sejal Wadhai",
      image: Image1,
      role: "Frontend Developer",
      type: "Full-Time",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:30 PM",
      location: "Remote",
    },
    {
      id: "A110008",
      name: "Udit Lohani",
      image: Image2,
      role: "Frontend Developer",
      type: "Full-Time",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "05:30 PM",
      location: "Onsite",
    },
  ]);

  return (
    <>
      <div className="employee-management">
        <header>
          <div className="stats-container">
            <div className="stat-box">
              <img src={TotalWorkforceicon} />
              <span>
                <span className="highlight">10%</span> vs last month
              </span>
              <p>Total Workforce</p>
              <p className="count">150</p>
            </div>
            <div className="stat-box">
              <img src={PresentWorkforceicon} />
              <span>
                <span className="highlight">10%</span> vs last month
              </span>
              <p>Present Workforce</p>
              <p className="count">135</p>
            </div>
            <div className="stat-box">
              <img src={Unavialableicon} />
              <span>
                <span className="Absent">10%</span> vs last month
              </span>
              <p>Absent Workforce</p>
              <p className="count">5</p>
            </div>
            <div className="stat-box">
              <img src={LateArrivalicon} />
              <span>
                <span className="highlight">10%</span> vs last month
              </span>
              <p>Late Arrivals</p>
              <p className="count">5</p>
            </div>
            <div className="stat-box">
              <img src={Holidayicon} />
              <span>
                <span className="highlight">10%</span> vs last month
              </span>
              <p>On Leave</p>
              <p className="count">5</p>
            </div>
          </div>
        </header>

        <div className="Menu">
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

          <Link to="/Leave-Request">
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
          </Link>
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
              <th>Date</th>
              <th>Employee ID</th>
              <th>Employee</th>
              <th>Role</th>
              <th>Employment Type</th>
              <th>Status</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>19/09</td>
                <td>{employee.id}</td>
                <td>
                  <img className="Profile" src={employee.image} alt="NoImg" />
                  {employee.name}
                </td>
                <td>{employee.role}</td>
                <td>
                  <p
                    className={`Type ${
                      employee.type === "Full-Time"
                        ? "Type-FullTime"
                        : "Type-PartTime"
                    }`}
                  >
                    {employee.type}
                  </p>
                </td>
                <td>
                  <p
                    className={`Status ${
                      employee.status === "Present"
                        ? "Status-Present"
                        : employee.status === "Late"
                        ? "Status-Late"
                        : "Status-Absent"
                    }`}
                  >
                    {employee.status}
                  </p>
                </td>
                <td>{employee.checkIn}</td>
                <td>{employee.checkOut}</td>
                <td>{employee.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeManagement;
