import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import HomeNavbar from "../../components/HomeNavbar";

const LandingPage = () => {
  return (
    <>
      <HomeNavbar />
      <div className="Landing-cont">
        <div className="Landing">
          <div className="LandingCont">
            <p className="Head">Choose your Apps</p>
            <p className="Desc">Free instant, no credit card required.</p>
          </div>
        </div>
        <div className="Options">
          <div className="Landingnav">
            <Link to="/Dashboard">
              <button>Human Resource Management</button>
            </Link>
            <button>Sales Management</button>
            <button>Inventory Management</button>
          </div>
          <div className="Landingnav">
            <button>Manufacturing Management</button>
            <button>Purchase Management</button>
            <button>Accouting Management</button>
          </div>
          <div className="Landingnav">
            <button>Invoice Management</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
