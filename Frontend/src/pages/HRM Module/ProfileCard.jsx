import React from "react";
import "./styles/ProfileCard.css";
import Location from "../../assets/icons/Location.png";
import Call from "../../assets/icons/Call.png";
import Birthday from "../../assets/icons/Birthday Cake.png";

const FolderName = "Directory";

const ProfileCard = ({ employee }) => {
  // Ensure that employee data exists
  if (!employee) {
    return null;
  }

  return (
    <>
      <div className="profile-card">
        <div className="profile-header">
          <div className="name-status">
            {/* Display Name */}
            <span className="Name">{employee.name} | </span>
            {/* Display Status */}
            <span
              className={`status ${
                employee.status === "Inactive"
                  ? "status-inactive"
                  : "status-active"
              }`}
            >
              {employee.status}
            </span>
          </div>
          {/* Display Role */}
          <p className="role">{employee.role}</p>
          <img src={employee.image} alt="Profile" className="profile-image" />
        </div>

        {/* Display Email */}
        <div className="profile-email">{employee.email}</div>

        {/* Details Section */}
        <div className="profile-details">
          {/* Location */}
          <span className="left">
            <img src={Location} alt="Location Icon" className="icon" />
            Location
          </span>
          <span className="right">{employee.location}</span>

          {/* Contact */}
          <span className="left">
            <img src={Call} alt="Call Icon" className="icon" />
            Contact
          </span>
          <span className="right">{employee.phone}</span>

          {/* Birthday */}
          <span className="left">
            <img src={Birthday} alt="Birthday Icon" className="icon" />
            Birthday
          </span>
          <span className="right">{employee.birthday}</span>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
