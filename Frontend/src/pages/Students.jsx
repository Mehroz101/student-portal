import React, { useState } from "react";
import "../styles/StudentCards.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Ali Raza",
    email: "ali@example.com",
    university: "BZU",
    rollNo: "IT-1001",
    session: "2021-2025",
    department: "IT",
    cgpa: "3.7",
    status: "pending",
  },
  {
    id: 2,
    name: "Sara Khan",
    email: "sara@example.com",
    university: "PU",
    rollNo: "CS-1002",
    session: "2020-2024",
    department: "CS",
    cgpa: "3.9",
    status: "approved",
  },
  {
    id: 3,
    name: "Umar Farooq",
    email: "umar@example.com",
    university: "NUST",
    rollNo: "SE-1003",
    session: "2019-2023",
    department: "SE",
    cgpa: "3.4",
    status: "rejected",
  },
  {
    id: 1,
    name: "Ali Raza",
    email: "ali@example.com",
    university: "BZU",
    rollNo: "IT-1001",
    session: "2021-2025",
    department: "IT",
    cgpa: "3.7",
    status: "pending",
  },
  {
    id: 2,
    name: "Sara Khan",
    email: "sara@example.com",
    university: "PU",
    rollNo: "CS-1002",
    session: "2020-2024",
    department: "CS",
    cgpa: "3.9",
    status: "approved",
  },
  {
    id: 3,
    name: "Umar Farooq",
    email: "umar@example.com",
    university: "NUST",
    rollNo: "SE-1003",
    session: "2019-2023",
    department: "SE",
    cgpa: "3.4",
    status: "rejected",
  },
  {
    id: 1,
    name: "Ali Raza",
    email: "ali@example.com",
    university: "BZU",
    rollNo: "IT-1001",
    session: "2021-2025",
    department: "IT",
    cgpa: "3.7",
    status: "pending",
  },
  {
    id: 2,
    name: "Sara Khan",
    email: "sara@example.com",
    university: "PU",
    rollNo: "CS-1002",
    session: "2020-2024",
    department: "CS",
    cgpa: "3.9",
    status: "approved",
  },
  {
    id: 3,
    name: "Umar Farooq",
    email: "umar@example.com",
    university: "NUST",
    rollNo: "SE-1003",
    session: "2019-2023",
    department: "SE",
    cgpa: "3.4",
    status: "rejected",
  },
  // Add 7 more dummy students here...
];

const StatusBadge = ({ url = "https://www.linkedin.com" }) => {
  return (
    <a
        href={url && (url.startsWith('http') ? url : `https://${url.replace(/^https?:\/\//, '')}`)}
      className={`bg-blue-100 px-2 py-1 rounded-xl`}
      target="_blank"
    >
      linkedin
    </a>
  );
};

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <div className="userImg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 120, marginBottom: 10 }}>
        <img
          src={student.img ? `http://localhost:5000/uploads/${student.img}` : require('../assets/bannerImg.png')}
          alt={student.name}
          className="user-image"
          style={{ width: 200, height: 150, objectFit: 'cover', borderRadius: '10px', border: '2px solid #e0e7ef', background: '#f3f4f6' }}
        />
      </div>
      <div className="card-header">
        <h3 style={{ textTransform: 'uppercase' }}>{student.name}</h3>
        <StatusBadge url={student.url} />
      </div>
      <p>
        <strong>Passing Year:</strong> {student.graduationYear}
      </p>
      <p>
        <strong>Description</strong> <br /> {student.desc}
      </p>
    </div>
  );
};

// Responsive, left profile card with 3 vertical, clickable buttons, 100% height, fixed left, scrollable content
const DockLeft = ({ mydata }) => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/profile")
  };
  const handleProfileDetail = () =>{
    navigate("/profiledetail");
  };
  const handleLogout = () => {
    localStorage.removeItem("usertoken");
    localStorage.removeItem("isVerified");
    localStorage.removeItem("userId");

    navigate("/userlogin", { replace: true });
  };

  return (
    <div
      className="dockleft"
      style={{ paddingTop: "120px", minHeight: "90vh" }}
    >
      <div className="dockleft-profile-img-wrapper">
        <img
          src={`http://localhost:5000/uploads/${mydata?.img}`}
          alt="Profile"
          className="dockleft-profile-img"
        />
      </div>
      <div className="dockleft-profile-info">
        <div className="dockleft-profile-name">{mydata?.name}</div>
        <div className="dockleft-profile-affiliation">
          <span className="dockleft-icon" aria-label="Affiliation">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                fill="#4F8A8B"
                d="M12 3L2 9l10 6 10-6-10-6zm0 2.18L18.09 9 12 12.82 5.91 9 12 5.18zM4 10.09v2.18c0 2.97 3.13 5.43 8 5.43s8-2.46 8-5.43v-2.18l-8 4.8-8-4.8z"
              />
            </svg>
          </span>
          {mydata?.department}
        </div>
        <div className="dockleft-profile-location">
          <span className="dockleft-icon" aria-label="Location">
            <svg width="20" height="18" fill="none" viewBox="0 0 24 24">
              <path
                fill="#4F8A8B"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
              />
            </svg>
          </span>
          {mydata?.city}
        </div>
      </div>
      <div className="dockleft-profile-actions">
        <button className="dockleft-action-btn" onClick={handleProfile}>
          Edit Profile
        </button>
        <button className="dockleft-action-btn" onClick={handleProfileDetail}>
          Profile Detail
        </button>
      
        <button className="dockleft-action-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const StudentCards = () => {
  const [students, setStudents] = useState([]);
  const [myData, setMyData] = useState([]);
  const token = localStorage.getItem("usertoken");
  const userId = localStorage.getItem("userId");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { isLoading } = useQuery({
    queryKey: ["allstudents"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/getallapproveduserdetail",
          config
        );
        setStudents(response.data.data);
        const userData = response.data.data?.filter(
          (user) => user._id == userId
        );
        if (userData) {
          setMyData(userData[0]);
        }
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <div className="cards-container" style={{ marginTop: "100px", display: "flex", gap: "24px" }}>
      {myData?.isshown && <DockLeft mydata={myData} />}
      <div className="students-list" style={{ flex: 1 }}>
        {isLoading
          ? "Loading..."
          : students.map((student) => (
              <StudentCard key={student._id} student={student} />
            ))}
      </div>
      {/* Right Side Slider (Static Data) */}
      {/* <div className="students-slider" style={{ width: "250px", minWidth: 200, background: "#f8fafc", borderRadius: 14, boxShadow: "0 2px 12px rgba(30,41,59,0.07)", padding: 12, height: "fit-content", position: "fixed", right: 18, top: 120, maxHeight: '80vh', overflowY: 'auto', zIndex: -10 }}>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10, color: "#2563eb" }}>University Highlights</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: '0.93rem' }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Top CGPA:</strong> Sara Khan (3.9)
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>Recent Achiever:</strong> Umar Farooq
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>Upcoming Event:</strong> Alumni Meetup
          </li>
          <li style={{ marginBottom: 0 }}>
            <strong>Contact:</strong> student.affairs@mnsuet.edu.pk
          </li>
        </ul>
      </div> */}
    </div>
    
  );
};

export default StudentCards;
