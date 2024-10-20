import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Get job ID from URL
import "./styles/JobSummary.css";

const JobSummary = () => {
  const { id } = useParams(); // Get job ID from route parameters
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      // Fetch the job details from your database using the job ID
      const fetchedJobDetails = {
        id,
        role: "UI / UX Designer",
        status: "Active",
        expiryDate: "Dec 9, 2024",
        position: "Design",
        employementType: "Full Time",
        workType: "Onsite",
        location: "Nagpur, Maharashtra",
        brief:
          "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
        description: "Detailed job description...",
      };
      setJobDetails(fetchedJobDetails);
    };

    fetchJobDetails();
  }, [id]);

  if (!jobDetails) return <div>Loading...</div>;

  return (
    <div className="JobSummary">
      <div className="Recheader">
        <span>
          <span className="Candtitle">{jobDetails.role}</span>
        </span>
        <span>
          <button>+ Edit Job</button>
        </span>
      </div>
      <div className="Jobleft">
        <div className="JobCompany">
          <h3>About Company</h3>
          <p>
            We craft digital products for business and user goals. Help find
            solutions with Ul/ UX designs that are intuitive and in accordance
            with client business goals. We provide a high-quality service in Ul/
            UX Design & Development. We craft digital products for businesses in
            achieving user goals by providing intuitive solutions. We have
            worked with a vast number clients who have different backgrounds
            such as construction, insurance, health, marketing, cryptocurrency,
            stocks, games, startup, real estate and many others
          </p>
        </div>
        <div>
          <h3>Wht you'll do</h3>
          <p>Areas you could work on:</p>
          <p>
            Work as a User Interface Designer for our B2B SaaS product along
            with stakeholders
          </p>
          <p>
            Work as a User Interface Designer for our B2B SaaS product along
            with stakeholders
          </p>
          <p>
            Work as a User Interface Designer for our B2B SaaS product along
            with stakeholders
          </p>
          <p>
            Work as a User Interface Designer for our B2B SaaS product along
            with stakeholders
          </p>
          <p>
            Work as a User Interface Designer for our B2B SaaS product along
            with stakeholders
          </p>
          <p>
            Work as a User Interface Designer for our B2B SaaS product along
            with stakeholders
          </p>
        </div>
      </div>
      <div className="Jobright">
        <p className="JobTag">Expire on</p>
        <p className="JobData"> {jobDetails.expiryDate}</p>
        <p className="JobLine"></p>
        <p className="JobTag">Department Type </p>
        <p className="JobData">{jobDetails.position}</p>
        <p className="JobLine"></p>
        <p className="JobTag">Job Type</p>
        <p className="JobData">{jobDetails.employementType}</p>
        <p className="JobLine"></p>
        <p className="JobTag">Location</p>
        <p className="JobData">
          {jobDetails.workType}-{jobDetails.location}
        </p>
      </div>
    </div>
  );
};

export default JobSummary;
