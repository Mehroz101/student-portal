// src/components/CustomSidebar.js
import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import "../../styles/CustomSidebar.css"; // Optional CSS for custom styles
import { ROUTES } from "../../utils/routes";
import { useNavigate } from "react-router-dom";

const CustomSidebar = ({ visible, onHide }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    onHide(); // Close the sidebar
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Sidebar visible={visible} onHide={onHide} position="left">
      <div>
        <div className="sidebar-header flex justify-content-start gap-2 align-items-center flex-row  ">
          <h3 className="sidebar-profile-name ">Admin Dashboard</h3>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to={"/dashboard"} className="sidebar-link" onClick={handleLinkClick}>
              <i className="pi pi-home"></i> Dashboard
            </Link>
          </li>
          {/* <li>
            <Link
              to={ROUTES.USERS}
              className="sidebar-link"
              onClick={handleLinkClick}
            >
              <i className="pi pi-users"></i> Approved Requests
            </Link>
          </li> */}
          <li>
            <Link
              to={ROUTES.REQUESTS}
              className="sidebar-link"
              onClick={handleLinkClick}
            >
              <i className="pi pi-users"></i> Requests
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.EVENTS}
              className="sidebar-link"
              onClick={handleLinkClick}
            >
              <i className="pi pi-users"></i> Events
            </Link>
          </li>
          <li>
            <Link to={"/"} className="sidebar-link" onClick={handleLogout}>
              <i className="pi pi-users"></i> Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className=" absolute bottom-0">
        <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
        <Link
          to={"/dashboard"}
          v-ripple
          className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
        >
        
          <span className="font-bold">Alumni Hub</span>
        </Link>
      </div>
    </Sidebar>
  );
};

export default CustomSidebar;
