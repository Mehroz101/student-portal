import React, { useState } from "react";
import "../styles/StudentCards.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

const StatusBadge = ({ status }) => {
  return <span className={`badge ${status}`}>{status.toUpperCase()}</span>;
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
        <StatusBadge status={student.status} />
      </div>
      <p><strong>Passing Year:</strong> {student.graduationYear}</p>
      <p><strong>Description</strong> <br /> {student.desc}</p>
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
      {isLoading ? "Loading..." : students.map((student) => (
        <StudentCard key={student._id} student={student} />
      ))}
    </div>
  );
};

export default StudentCards;
