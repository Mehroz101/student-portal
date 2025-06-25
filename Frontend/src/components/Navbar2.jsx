// Navbar.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Navbar2.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [usertoken, setUsertoken] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const data = localStorage.getItem("usertoken");
    const verified = localStorage.getItem("isVerified");
    if (verified === "true") setIsVerified(true);
    if (data) {
      setUsertoken(data);
      axios
        .get("http://localhost:5000/api/user/getuserdetail", {
          headers: { Authorization: `Bearer ${data}` },
        })
        .then((res) => {
          if (res.data && res.data.data && res.data.data.img) {
            setProfileImg(`http://localhost:5000/uploads/${res.data.data.img}`);
            setUsername(res.data.data.name);
          }
        })
        .catch(() => setProfileImg(""));
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
          <li className="dropdown">
            <span className="dropdown-toggle">About</span>
            <ul className="dropdown-menu">
              <li onClick={() => navigate("/about/mission")}>VC Message</li>
              <li onClick={() => navigate("/about/team")}>About MNS UET</li>
              <li onClick={() => navigate("/about/history")}>OUR Team</li>
            </ul>
          </li>
          <li onClick={() => navigate("/alumnidirectory")}>Directory</li>
          {(usertoken && isVerified) && (
            <>
              <li onClick={() => navigate("/students")}>Alumni</li>
              
            </>
            
          )}
          <li onClick={() => navigate("/events")}>Events</li>
          <li className="dropdown">
            <span className="dropdown-toggle">Benefits </span>
            <ul className="dropdown-menu ">
              <li onClick={() => navigate("/library")}>Job Posting</li>
              <li onClick={() => navigate("/lab")}>Our Societies</li>
              <li onClick={() => navigate("/newsletter")}>News Letter</li>
            </ul>
          </li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
          {/* ------------------------------------------------------------------------------------- */}
          {/* {usertoken ? (
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
          )} */}

      {/* /--------------------------------------------------------------------------------// */}

      
          {usertoken  ? (
            <li className="dropdown profile-dropdown">
              <span className="dropdown-toggle flex items-center gap-2">
                {profileImg && (
                  <img
                    src={profileImg}
                    alt="Profile"
                    style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", marginRight: 8, border: "2px solid #fff" }}
                  />
                )}
                {username || "Profile"}
              </span>
              <ul className="dropdown-menu">
                <li onClick={() => navigate("/profile")}>Edit Profile</li>
                <li onClick={() => navigate("/profiledetail")}>Profile Detail</li>
              </ul>
            </li>
          ) : (
            <li className="border bg-blue-600 py-2 px-4 border-round" onClick={() => navigate("/userlogin")}>
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
