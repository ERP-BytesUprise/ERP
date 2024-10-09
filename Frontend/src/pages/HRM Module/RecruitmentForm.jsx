import React, { useState } from "react";
import axios from "axios";
import backIcon from "../../assets/icons/back-icon.png"; // Make sure this path is correct
import "./styles/RecruitmentForm.css";

export const RecruitmentForm = ({ onClose }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [team, setTeam] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [jobType, setJobType] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [experience, setExperience] = useState("");
  const [summary, setSummary] = useState("");
  const [payRate, setPayRate] = useState("");
  const [rangeFrom, setRangeFrom] = useState("");
  const [rangeTo, setRangeTo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      jobTitle,
      team,
      city,
      country,
      jobType,
      employmentType,
      experience,
      summary,
      payRate,
      rangeFrom,
      rangeTo,
    };

    console.log("Form Data Submitted: ", jobData);
  };

  return (
    <div className="job-form-container">
      <h2 className="form-header">Create New Job</h2>
      <form className="JobForm" onSubmit={handleSubmit}>
        {/* Job title, Industry, and Location */}
        <div className="section">
          <div className="section-header">
            <img className="back-icon" src={backIcon} alt="back" />
            <span className="jobsection-title">
              Job title, Industry, and location
            </span>
          </div>
          <div className="section-content">
            <div className="input-group">
              <div className="input-field">
                <label className="input-label">Job Title</label>
                <select
                  className="input-box"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                >
                  <option value="">Select Job Title</option>
                  <option>Product Designer</option>
                  <option>Software Engineer</option>
                  <option>Data Scientist</option>
                </select>
              </div>
              <div className="input-field">
                <label className="input-label">Team (Optional)</label>
                <select
                  className="input-box"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                >
                  <option value="">Select Team</option>
                  <option>Team A</option>
                  <option>Team B</option>
                  <option>Team C</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label className="input-label">City</label>
                <select
                  className="input-box"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">Select City</option>
                  <option>Surat</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                </select>
              </div>
              <div className="input-field">
                <label className="input-label">Country</label>
                <select
                  className="input-box"
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Employment Details */}
        <div className="section">
          <div className="section-header">
            <img className="back-icon" src={backIcon} alt="back" />
            <span className="jobsection-title">Employment Details</span>
          </div>
          <div className="section-content">
            <div className="input-group">
              <div className="input-field">
                <label className="input-label">Job Type</label>
                <select
                  className="input-box"
                  value={jobType}
                  required
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="">Select Job Type</option>
                  <option>Permanent</option>
                  <option>Contract</option>
                </select>
              </div>
              <div className="input-field">
                <label className="input-label">Employment Type</label>
                <select
                  className="input-box"
                  value={employmentType}
                  required
                  onChange={(e) => setEmploymentType(e.target.value)}
                >
                  <option value="">Select Employment Type</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label className="input-label">Experience</label>
                <select
                  className="input-box"
                  value={experience}
                  required
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">Select Experience</option>
                  <option>Internship</option>
                  <option>Junior</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
              </div>
            </div>
            <div className="summary-section">
              <label className="input-label">Summary</label>
              <textarea
                className="summary-box"
                placeholder="Provide a summary for the job"
                value={summary}
                required
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Salary Details */}
        <div className="section">
          <div className="section-header">
            <img className="back-icon" src={backIcon} alt="back" />
            <span className="jobsection-title">Salary Details</span>
          </div>
          <div className="section-content">
            <div className="input-group">
              <div className="input-field1">
                <label className="input-label">Pay Rate</label>
                <select
                  className="input-box"
                  value={payRate}
                  required
                  onChange={(e) => setPayRate(e.target.value)}
                >
                  <option value="">Select Pay Rate</option>
                  <option>USD</option>
                  <option>INR</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="input-field1">
                <label className="input-label">Range From</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="$50,000"
                  value={rangeFrom}
                  required
                  onChange={(e) => setRangeFrom(e.target.value)}
                />
              </div>
              <div className="input-field1">
                <label className="input-label">Range To</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="$200,000"
                  value={rangeTo}
                  required
                  onChange={(e) => setRangeTo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="footer">
          <button className="cancel-button" type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;
