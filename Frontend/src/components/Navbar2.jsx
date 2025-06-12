// Navbar.js
import React, { useEffect, useState } from "react";
import "../styles/Navbar2.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [usertoken, setUsertoken] = useState();
  const navigate = useNavigate();
  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const data = localStorage.getItem("usertoken");
    if (data) {
      setUsertoken(data);
    }
  }, [navigate]);
  return (
    <nav className="navbar2">
      <div className="navbar-brand">
        <a href="/" className="brand-logo">
         Alumni Hub
        </a>
      </div>
      <div className={`navbar-links ${isMobile ? "mobile" : ""}`}>
        <ul className="align-items-center">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => scrollToId("about")}>About</li>
          <li onClick={() => navigate("/students")}>Alumni</li>
          <li onClick={() => navigate("/events")}>Events</li>
          <li className="dropdown">
            <span className="dropdown-toggle">Benefits</span>
            <ul className="dropdown-menu ">
              <li onClick={() => navigate("/library")}>Job Posting</li>
              <li onClick={() => navigate("/lab")}>Our Societies</li>
              <li onClick={() => navigate("/newsletter")}>News Letter</li>
            </ul>
          </li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
          {usertoken ? (
            <li
              onClick={() => navigate("/profile")}
              className="border bg-blue-600 py-2 px-4 border-round"
            >
              My Profile
            </li>
          ) : (
            <li
              onClick={() => navigate("/userlogin")}
              className="border bg-blue-600 py-2 px-4 border-round"
            >
              Login
            </li>
          )}
        </ul>
      </div>
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {/* <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span> */}
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar2;
