import React from "react";
import "../styles/StudentCards.css";

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
      <div className="card-header">
        <h3>{student.name}</h3>
        <StatusBadge status={student.status} />
      </div>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>University:</strong> {student.university}</p>
      <p><strong>Roll No:</strong> {student.rollNo}</p>
      <p><strong>Session:</strong> {student.session}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>CGPA:</strong> {student.cgpa}</p>
    </div>
  );
};

const StudentCards = () => {
  return (
    <div className="cards-container">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentCards;
