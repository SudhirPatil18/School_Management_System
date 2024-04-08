import React from "react";
import "./macro.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Sider = ({ pageContent, Comp }) => {
  const navigateTo = useNavigate();
  const location = useLocation().pathname;

  return (
    <div className="main">
      <div className="sidebar">
        <ul>
          <li>
            <a
              className={location === "/admin/dashboard" ? "active" : ""}
              onClick={() => navigateTo("/admin/dashboard")}
            >
              <i className="lni lni-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              className={location === "/admin/classes" ? "active" : ""}
              onClick={() => navigateTo("/admin/classes")}
            >
              <i className="lni lni-text-format"></i>
              <span>Class and Divison</span>
            </a>
          </li>
          <li>
            <a
              className={location === "/admin/Faculty" ? "active" : ""}
              onClick={() => navigateTo("/admin/Faculty")}
            >
              <i className="lni lni-text-format"></i>
              <span>Add Faculty</span>
            </a>
          </li>
          <li>
            <a
              className={location === "/admin/Notice" ? "active" : ""}
              onClick={() => navigateTo("/admin/Notice")}
            >
              <i className="lni lni-bar-chart"></i>
              <span>Publish Notice</span>
            </a>
          </li>
          <li>
            <a
              className={location === "/admin/Fees" ? "active" : ""}
              onClick={() => navigateTo("/admin/Fees")}
            >
              <i className="lni lni-grid"></i>
              <span>Fees Collection</span>
            </a>
          </li>
          <li>
            <a
              className={location === "/admin/syllabus" ? "active" : ""}
              onClick={() => navigateTo("/admin/syllabus")}
            >
              <i className="lni lni-bullhorn"></i>
              <span>Syllabus</span>
            </a>
          </li>
          <li>
            <a
              className={location === "/admin/profile" ? "active" : ""}
              onClick={() => navigateTo("/admin/profile")}
            >
              <i className="lni lni-support"></i>
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="page-content" onClick={pageContent}>
        <Comp></Comp>
      </div>
    </div>
  );
};

export default Sider;
