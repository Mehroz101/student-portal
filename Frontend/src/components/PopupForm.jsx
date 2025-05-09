import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const PopupForm = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();

  const formMutation = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await axios.post("http://localhost:5000/api/user/updateuserdetail", data);
        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  const submitHandler = (data) => {
    console.log("Form Data:", data);
    formMutation.mutate(data);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Add Details</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input id="name" placeholder="Your Name" {...register("name")} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Your Email" {...register("email")} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Your Password" {...register("password")} />
          </div>
          <div className="form-group">
            <label htmlFor="university">University:</label>
            <input id="university" placeholder="Your University" {...register("university")} />
          </div>
          <div className="input-group">
            <div className="form-group">
              <label htmlFor="rollno">Roll No:</label>
              <input id="rollno" placeholder="Your Roll No" {...register("rollno")} />
            </div>
            <div className="form-group">
              <label htmlFor="session">Session:</label>
              <input id="session" placeholder="Your Session" type="text" {...register("session")} />
            </div>
          </div>
          <div className="input-group">
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input id="department" placeholder="Your Department" {...register("department")} />
            </div>
            <div className="form-group">
              <label htmlFor="cgpa">CGPA:</label>
              <input id="cgpa" type="number" step="0.01" placeholder="Your CGPA" {...register("cgpa")} />
            </div>
          </div>
          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
