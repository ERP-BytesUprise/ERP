import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CreateJob from "./RecruitmentForm"; // Import the CreateJob component
import "./styles/RecruitmentDashboard.css";
import Filtericon from "../../assets/icons/Tune.png";

const RecruitmentDashboard = () => {
  const [NewJob, setNewJob] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
          expiryDate: "Dec 9, 2024",
          status: "Inactive",
          role: "UI / UX Designer",
          brief:
            "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
          position: "Design",
          EmployementType: "Full Time",
          WorkType: "Onsite",
        },
        // ... (other job data)
      ];

      setNewJob(NewJobData);
    };

    fetchData();
  }, []);

  const handleJobClick = (id) => {
    // Navigate to JobSummary page and pass the job ID
    navigate(`/Job-Description/${id}`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="RecrBar">
        <div className={` ${isModalOpen ? "blur-background" : ""}`}>
          <input
            className="EmployeeSearch"
            type="text"
            placeholder="Search by name, role, department..."
          />
          <button className="filter-button">
            Filter
            <img src={Filtericon} alt="Filter Icon" />
          </button>
        </div>
        <button className="NewJobBtn" onClick={openModal}>
          + Create New Job
        </button>{" "}
      </div>
      <div
        className={`Recuritmentemployees-list ${
          isModalOpen ? "blur-background" : ""
        }`}
      >
        {/* Button to open modal */}
        {NewJob.length > 0 ? (
          NewJob.map((JobDetails) => (
            <JobCard
              key={JobDetails.id}
              JobDetails={JobDetails}
              openModal={openModal}
              onClick={() => handleJobClick(JobDetails.id)}
            /> // Pass openModal as prop
          ))
        ) : (
          <p>No Record Found...</p>
        )}
      </div>
      {isModalOpen && (
        <div className="form-overlay">
          <CreateJob onClose={closeModal} />
        </div>
      )}{" "}
      {/* Conditionally render CreateJob */}
    </div>
  );
};

const JobCard = ({ JobDetails, onClick }) => {
  if (!JobDetails) {
    return null;
  }

  return (
    <div>
      <div className="RecruitmentCont" onClick={onClick}>
        <div className="Recuritment-card">
          <div className="Recuritment-status">
            <span className="RecuritmentDate">
              Expires on: {JobDetails.expiryDate}
            </span>
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
          <div className="Recuritmentrole">{JobDetails.role}</div>
          <div className="Recuritmentbrief">{JobDetails.brief}</div>
          <div className="Recuritment-details">
            <span className="Position">{JobDetails.position}</span>
            <span>{JobDetails.EmployementType}</span>
            <span>{JobDetails.WorkType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDashboard;
