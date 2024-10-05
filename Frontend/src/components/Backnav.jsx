import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "./BreadCrumb";
import "./css/Backnav.css";
import Arrow from "../assets/icons/Left_Arrow.png";

export default function Backnav(props) {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="Back">
      <div className="Backtitle">
        <button onClick={handleGoBack} className="back-button">
          <img src={Arrow} alt="Go Back" />
        </button>
        <button>{props.title}</button>
        <span>
          <Breadcrumb />
        </span>
      </div>
    </div>
  );
}
