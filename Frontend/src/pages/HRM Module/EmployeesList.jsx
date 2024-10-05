import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard.jsx";
import Back from "../../components/Backnav.jsx";
import "./styles/EmployeesLists.css";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a response from the backend
      const employeeData = [
        {
          id: 1,
          name: "jay",
          status: "Active",
          role: "UI / UX Designer",
          email: "jayuuuxz48@gmail.com",
          location: "Surat, Gujarat",
          phone: "+91 9173664845",
          birthday: "Dec 9, 2002",
          image:
            "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_1280.jpg",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "John Doe",
          status: "Inactive",
          role: "Backend Developer",
          email: "john.doe@example.com",
          location: "Mumbai, Maharashtra",
          phone: "+91 9876543210",
          birthday: "Jan 1, 1990",
          image: "https://via.placeholder.com/80",
        },
      ];

      setEmployees(employeeData);
    };

    fetchData();
  }, []);

  return (
    <div className="employees-list">
      {employees.length > 0 ? (
        employees.map((employee) => (
          <ProfileCard key={employee.id} employee={employee} />
        ))
      ) : (
        <p>No Record Found...</p>
      )}
    </div>
  );
};
export default EmployeesList;
