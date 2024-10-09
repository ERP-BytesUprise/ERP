import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/BreadCrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <span className="breadcrumb">
      <Link to="/Dashboard" className="prev">
        Dashboard
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span className="prev" key={to}>
            {" / "}
            {isLast ? (
              <span className="current">{value.replace("-", " ")}</span>
            ) : (
              <Link to={to}>{value.replace("-", " ")}</Link>
            )}
          </span>
        );
      })}
    </span>
  );
};

export default Breadcrumb;
