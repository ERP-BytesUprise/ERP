import React from "react";
import "./styles/RecruitmentCandidates.css";
import document from "./../../assets/icons/Document.png";
import linkedlin from "./../../assets/icons/LinkedIn.png";

// Array of candidates with their respective statuses
const candidates = [
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "SOURCED" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "SOURCED" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "SOURCED" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "SOURCED" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "SOURCED" },

  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "IN PROGRESS" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "IN PROGRESS" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "IN PROGRESS" },

  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "INTERVIEW" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "INTERVIEW" },

  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "HIRED" },

  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "REJECTED" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "REJECTED" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "REJECTED" },
  { name: "Jay Vasani", email: "jayuuuxz48@gmail.com", status: "REJECTED" },
];

// Categories of the board
const categories = ["SOURCED", "IN PROGRESS", "INTERVIEW", "HIRED", "REJECTED"];

// Function to count the number of candidates in each category
const countCandidates = (status) => {
  return candidates.filter((candidate) => candidate.status === status).length;
};

const RecruitmentCandidates = () => {
  return (
    <div className="Reccontainer">
      <div className="Recheader">
        <span>
          <span className="Candtitle">UI / UX Designer</span>
          <span> candidates</span>
        </span>
        <span>
          <input type="text" placeholder="Search name or email here..." />
          <button>+ Create New Job</button>
        </span>
      </div>

      <div className="Recboard">
        {categories.map((category, index) => (
          <div
            className={`Reccolumn ${category.toLowerCase().replace(" ", "-")}`}
            key={index}
          >
            <div className="Reccategory-header">
              <h3>{category}</h3>
              <div className="Reccategory-count">
                {countCandidates(category)}
              </div>
            </div>
            {candidates.map((candidate, idx) =>
              candidate.status === category ? (
                <div className="Reccard" key={idx}>
                  <div className="Reccard-header">
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="profile"
                      className="Recprofile-image"
                    />
                    <div className="card-info">
                      <p className="name">{candidate.name}</p>
                      <p className="email">{candidate.email}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="card-footer">
                    <a>
                      <img src={linkedlin}></img>LinkedIn
                    </a>
                    <span>
                      <img src={document}></img>2
                    </span>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentCandidates;
