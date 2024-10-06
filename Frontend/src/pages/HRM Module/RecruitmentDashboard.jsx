import React, { useState, useEffect } from "react";
import "./styles/RecruitmentDashboard.css";
import Filtericon from "../../assets/icons/Tune.png";

const RecruitmentDashboard = () => {
  const [NewJob, setNewJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a response from the backend
      const NewJobData = [
        {
          id: 1,
          expiryDate: "Dec 9, 2024",
          status: "Active",
          role: "UI / UX Designer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Full Time",
          WorkType: "Onsite",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
        {
          id: 2,
          expiryDate: "Nov 10 2024",
          status: "Inactive",
          role: "Backend Developer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Development",
          EmployementType: "Part Time",
          WorkType: "Remote",
        },
      ];

      setNewJob(NewJobData);
    };

    fetchData();
  }, []);

  return (
    <div className="Recuritmentemployees-list">
      {NewJob.length > 0 ? (
        NewJob.map((JobDetails) => (
          <JobCard key={JobDetails.id} JobDetails={JobDetails} />
        ))
      ) : (
        <p>No Record Found...</p>
      )}
    </div>
  );
};

const JobCard = ({ JobDetails }) => {
  if (!JobDetails) {
    return null;
  }

  return (
    <div className="RecruitmentCont">
      <div className="Recuritment-card">
        <div className="Recuritment-status">
          {/* Display Name */}
          <span className="RecuritmentDate">
            Expires on: {JobDetails.expiryDate}
          </span>
          {/* Display Status */}
          <span
            className={`Recuritmentstatus ${
              JobDetails.status === "Inactive"
                ? "Recuritmentstatus-inactive"
                : "Recuritmentstatus-active"
            }`}
          >
            {JobDetails.status}
          </span>
        </div>
        {/* Display Role */}

        <div className="Recuritmentrole">{JobDetails.role}</div>
        <div className="Recuritmentbrief">{JobDetails.brief}</div>

        {/* Details Section */}
        <div className="Recuritment-details">
          <span className="Position">{JobDetails.position}</span>
          <span>{JobDetails.EmployementType}</span>
          <span>{JobDetails.WorkType}</span>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDashboard;
