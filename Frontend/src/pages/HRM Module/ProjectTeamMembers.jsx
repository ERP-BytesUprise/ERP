import React from "react";
import "./styles/ProjectTeamMembers.css";
import ProjectNavbar from "../../components/ProjectNavbar";

// EmployeeTable component for rendering each section
const EmployeeTable = ({ sectionTitle, employees, colorClass }) => {
  return (
    <div className="employee-container">
      <h3 className={colorClass}>{sectionTitle}</h3>
      <table className="ProjectTable">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Employee ID</th>
            <th>Role</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>
                <img
                  src={employee.imageUrl}
                  alt="Profile"
                  className="profile-pic"
                />
                {employee.name}
              </td>
              <td>{employee.id}</td>
              <td>{employee.role}</td>
              <td>{employee.email}</td>
              <td>{employee.joinDate}</td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => alert(`Removing ${employee.name}`)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main App component
const ProjectTeamMembers = () => {
  // Data for each section

  const sections = [
    {
      title: "Product Manager",
      colorClass: "product-manager-title", // Class for purple color
      employees: [
        {
          name: "Jay Vasani",
          id: "A110001",
          role: "Project Manager",
          email: "jayuuux48@gmail.com",
          joinDate: "Jan 23, 2024",
          imageUrl: "https://via.placeholder.com/30",
        },
      ],
    },
    {
      title: "UI/UX Designer",
      colorClass: "product-manager-title",
      employees: [
        {
          name: "Jay Vasani",
          id: "A110001",
          role: "TL Product Designer",
          email: "jayuuux48@gmail.com",
          joinDate: "Jan 23, 2024",
          imageUrl: "https://via.placeholder.com/30",
        },

        {
          name: "Jeeva G",
          id: "A110002",
          role: "UI/UX Designer",
          email: "jayuuux48@gmail.com",
          joinDate: "Jan 23, 2024",
          imageUrl: "https://via.placeholder.com/30",
        },
      ],
    },
    {
      title: "Frontend Developer",
      colorClass: "product-manager-title",
      employees: [
        {
          name: "Aditya",
          id: "A110001",
          role: "TL Frontend Developer",
          email: "jayuuux48@gmail.com",
          joinDate: "Jan 23, 2024",
          imageUrl: "https://via.placeholder.com/30",
        },
        {
          name: "Ashwanth",
          id: "A110002",
          role: "Frontend Developer",
          email: "jayuuux48@gmail.com",
          joinDate: "Jan 23, 2024",
          imageUrl: "https://via.placeholder.com/30",
        },
      ],
    },
    {
      title: "Backend Developer",
      colorClass: "product-manager-title",
      employees: [
        {
          name: "Aditya",
          id: "A110001",
          role: "TL Hemant",
          email: "jayuuux48@gmail.com",
          joinDate: "Jan 23, 2024",
          imageUrl: "https://via.placeholder.com/30",
        },
        {
          name: "Ashwanth",
          id: "A110002",
          role: "Vallabh",
          email: "jayuuux48@gmail.com",
          joinDate: "Jan 23, 2024",
          imageUrl: "https://via.placeholder.com/30",
        },
      ],
    },
  ];

  return (
    <>
      <ProjectNavbar />
      <div className="ProjectCont">
        {sections.map((section, index) => (
          <EmployeeTable
            key={index}
            sectionTitle={section.title}
            employees={section.employees}
            colorClass={section.colorClass || ""}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectTeamMembers;
