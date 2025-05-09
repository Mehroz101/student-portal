import React from "react";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Add Details</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" id="Password" placeholder="Your Password" />
        </div>
        <div className="form-group">
          <label htmlFor="uni">University:</label>
          <input type="email" id="uni" placeholder="Your University" />
        </div>
        <div className="input-group">
          <div className="form-group">
            <label htmlFor="rollno">Roll No:</label>
            <input type="email" id="rollno" placeholder="Your Roll No" />
          </div>
          <div className="form-group">
            <label htmlFor="session">Session:</label>
            <input type="email" id="session" placeholder="Your Session" />
          </div>
          </div>
          <div className="input-group">
          <div className="form-group">
            <label htmlFor="dept">Department:</label>
            <input type="email" id="dept" placeholder="Your Department" />
          </div>
          <div className="form-group">
            <label htmlFor="cpga">CGPA:</label>
            <input type="email" id="cgpa" placeholder="Your CGPA" />
          </div>
        </div>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default PopupForm;
