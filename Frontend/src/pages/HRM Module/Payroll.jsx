import React from "react";
import "./styles/Payroll.css";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa"; // Icons for styling
import Image1 from "../../assets/icons/avatar girl with glasses.png";
import Image2 from "../../assets/icons/profile picture of man in green shirt and orange hat.png";
import Filtericon from "../../assets/icons/Tune.png";
import Arrowicon from "../../assets/icons/Expand Arrow.png";
import Dateicon from "../../assets/icons/calendar 1.png";
import Exporticon from "../../assets/icons/Export.png";

const employees = [
  {
    name: "Jay Vasani",
    role: "Product Designer",
    hours: 160,
    image: Image2,
    type: "Full-Time",
    basicSalary: "$100,000",
    deductions: "$5,000",
    overtime: "$2,000",
    netSalary: "$97,000",
    status: "Paid",
  },
  {
    name: "Tanuja Yedle",
    role: "HR Manager",
    hours: 176,
    image: Image1,
    type: "Full-Time",
    basicSalary: "$120,000",
    deductions: "$6,000",
    overtime: "$1,500",
    netSalary: "$144,500",
    status: "Pending",
  },
  {
    name: "Jay Vasani",
    role: "Product Designer",
    hours: 160,
    type: "Full-Time",
    image: Image2,
    basicSalary: "$100,000",
    deductions: "$5,000",
    overtime: "$2,000",
    netSalary: "$97,000",
    status: "Paid",
  },
  {
    name: "Tanuja Yedle",
    role: "HR Manager",
    hours: 176,
    image: Image2,
    type: "Full-Time",
    basicSalary: "$120,000",
    deductions: "$6,000",
    overtime: "$1,500",
    netSalary: "$144,500",
    status: "Pending",
  },
  {
    name: "Jay Vasani",
    role: "Product Designer",
    hours: 160,
    type: "Full-Time",
    basicSalary: "$100,000",
    image: Image2,
    deductions: "$5,000",
    overtime: "$2,000",
    netSalary: "$97,000",
    status: "Paid",
  },
  {
    name: "Tanuja Yedle",
    role: "HR Manager",
    hours: 176,
    type: "Full-Time",
    basicSalary: "$120,000",
    deductions: "$6,000",
    overtime: "$1,500",
    image: Image2,
    netSalary: "$144,500",
    status: "Pending",
  },
  {
    name: "Jay Vasani",
    role: "Product Designer",
    hours: 160,
    type: "Full-Time",
    image: Image2,
    basicSalary: "$100,000",
    deductions: "$5,000",
    overtime: "$2,000",
    netSalary: "$97,000",
    status: "Paid",
  },
  {
    name: "Tanuja Yedle",
    role: "HR Manager",
    hours: 176,
    type: "Full-Time",
    basicSalary: "$120,000",
    image: Image2,
    deductions: "$6,000",
    overtime: "$1,500",
    netSalary: "$144,500",
    status: "Pending",
  },
  // Add more employee data here
];

const Payroll = () => {
  return (
    <div className="PayrollCont">
      <div className="payroll-header">
        <div className="payroll-card">
          <FaUserCircle className="Payrollicon" />
          <div className="details">
            <h4>Total Workforce</h4>
            <h2>$5,000,000.00</h2>
            <p>No. of employees: 150</p>
          </div>
          <div className="buttonss">
            <button className="view-schedule-btn">View Schedule</button>
            <button className="payroll-btn">Pay Payroll</button>
          </div>
        </div>

        <div className="payroll-card">
          <FaCalendarAlt className="Payrollicon" />
          <div className="details">
            <h4>Pending Payroll</h4>
            <h2>$150,000.00</h2>
            <p>No. of employees: 1</p>
          </div>
          <button className="view-btn">View</button>
        </div>

        <div className="payroll-card">
          <FaCalendarAlt className="Payrollicon" />
          <div className="details">
            <h4>Paid Payroll</h4>
            <h2>$850,000.00</h2>
            <p>No. of employees: 145</p>
          </div>
        </div>
      </div>
      <div className="payroll-table">
        <div className="Bar">
          <input
            className="EmployeeSearch"
            type="text"
            placeholder="Search by name, role, department..."
          />
          <button className="Employ">
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

        <table className="PayrollTable">
          <thead className="headdd">
            <tr>
              <th>Employee</th>
              <th>Role</th>
              <th>Hours</th>
              <th>Employment Type</th>
              <th>Basic Salary</th>
              <th>Deductions</th>
              <th>Overtime</th>
              <th>Net Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>
                  <img className="PayrollProfile" src={employee.image}></img>
                  {employee.name}
                </td>
                <td>{employee.role}</td>
                <td>{employee.hours}</td>
                <td>
                  <span
                    className={
                      employee.type === "Full-Time" ? "full-time" : "part-time"
                    }
                  >
                    {employee.type}
                  </span>
                </td>
                <td>{employee.basicSalary}</td>
                <td>{employee.deductions}</td>
                <td>{employee.overtime}</td>
                <td>{employee.netSalary}</td>
                <td>
                  <span
                    className={
                      employee.status === "Paid"
                        ? "paid-status"
                        : "pending-status"
                    }
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Payroll;
