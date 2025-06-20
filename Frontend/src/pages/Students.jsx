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


const StatusBadge = ({ url="https://www.linkedin.com" }) => {
  return <a  href={`${url}`} className={`bg-blue-100 px-2 py-1 rounded-xl`} target="_blank">linkedin</a>;
};

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <div className="userImg">
        <img
          src={`http://localhost:5000/${student.img}`}
          alt={student.name}
          className="user-image"
          width={100}
          height={100}
/>
      </div>
      <div className="card-header">
        <h3>{student.name}</h3>
        <StatusBadge url={student.url} />
      </div>
      <p><strong>Passing Year:</strong> {student.graduationYear}</p>
      <p><strong>Description</strong> <br /> {student.desc}</p>
    </div>
  );
};

// Responsive, left profile card with 3 vertical, clickable buttons, 100% height, fixed left, scrollable content
const DockLeft = () => {
  const navigate = useNavigate();
  const handleProfile = () => alert('Profile Clicked');
  const handleSettings = () => alert('Settings Clicked');
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    navigate('/login', { replace: true });
  };

  return (
    <div className="dockleft" style={{paddingTop:"120px",minHeight:"80vh"}}>
      <div className="dockleft-profile-img-wrapper">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="dockleft-profile-img"
        />
      </div>
      <div className="dockleft-profile-info">
        <div className="dockleft-profile-name">USERNAME</div>
        <div className="dockleft-profile-affiliation">
          <span className="dockleft-icon" aria-label="Affiliation">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#4F8A8B" d="M12 3L2 9l10 6 10-6-10-6zm0 2.18L18.09 9 12 12.82 5.91 9 12 5.18zM4 10.09v2.18c0 2.97 3.13 5.43 8 5.43s8-2.46 8-5.43v-2.18l-8 4.8-8-4.8z"/></svg>
          </span>
          SEECS
        </div>
        <div className="dockleft-profile-location">
          <span className="dockleft-icon" aria-label="Location">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#4F8A8B" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
          </span>
          Pakistan
        </div>
      </div>
      <div className="dockleft-profile-actions">
        <button className="dockleft-action-btn" onClick={handleProfile}>Profile</button>
        <button className="dockleft-action-btn" onClick={handleSettings}>Settings</button>
        <button className="dockleft-action-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const StudentCards = () => {
  const [students, setStudents] = useState([]);
  const {  isLoading } = useQuery({
    queryKey: ["allstudents"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/getallapproveduserdetail"
        );
        setStudents(response.data.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <div className="cards-container " style={{marginTop:"100px"}}>
      <DockLeft />
      <div className="students-list">
        {isLoading ? "Loading..." : students.map((student) => (
          <StudentCard key={student._id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentCards;
