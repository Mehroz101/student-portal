import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ProfileDetail.css";

const ProfileDetail = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const token = localStorage.getItem("usertoken");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.get("http://localhost:5000/api/user/getuserdetail", config);
        setUser(res.data.data);
      } catch (err) {
        setError("Failed to fetch user details");
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetail();
  }, []);

  if (loading) return <div style={{marginTop: 100}}>Loading...</div>;
  if (error) return <div style={{marginTop: 100, color: 'red'}}>{error}</div>;
  if (!user) return <div style={{marginTop: 100}}>No user data found.</div>;

  return (
    <div className="profile-detail-container" style={{padding: '20px'}}>
      <div className="profile-detail-header">
        <img src={`http://localhost:5000/${user.img}`} alt={user.name} className="profile-detail-avatar" />
        <h2>Profile Details</h2>
        <h3>{user.name}</h3>
      </div>
      <div className="profile-detail-info">
        <p><strong>Father Name:</strong> {user.fatherName}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Date of Birth:</strong> {user.DOB}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        <p><strong>Department:</strong> {user.department}</p>
        <p><strong>Admission Year:</strong> {user.admissionYear}</p>
        <p><strong>Graduation Year:</strong> {user.graduationYear}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Designation:</strong> {user.designation}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>Country:</strong> {user.country}</p>
        <p><strong>CNIC:</strong> {user.cnic}</p>
        <p><strong>Description:</strong> {user.desc}</p>
      </div>
      <a
        href={user.url && (user.url.startsWith('http') ? user.url : `https://${user.url.replace(/^https?:\/\//, '')}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-detail-link"
      >
        LinkedIn profile link
      </a>
      <br />
      <button className="profile-detail-back-btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProfileDetail;
