import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "../utils/notification";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/PopupForm.css"; // Assuming you have a CSS file for styling
import {
  faUser,
  faIdCard,
  faVenusMars,
  faCalendar,
  faPhone,
  faFileAlt,
  faImage,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const PopupForm = ({ data }) => {
  const backendImageUrl = data?.data?.img
    ? `http://localhost:5000/${data.data.img}`
    : null;

  const [previewImage, setPreviewImage] = useState(backendImageUrl);
  const [step, setStep] = useState(1);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: data?.data?.name || "",
      fatherName: data?.data?.fatherName || "",
      cnic: data?.data?.cnic || "",
      gender: data?.data?.gender || "",
      DOB: data?.data?.DOB || "",
      email: data?.data?.email || "",
      phoneNumber: data?.data?.phoneNumber || "",
      department: data?.data?.department || "",
      admissionYear: data?.data?.admissionYear || "",
      graduationYear: data?.data?.graduationYear || "",
      company: data?.data?.company || "",
      designation: data?.data?.designation || "",
      city: data?.data?.city || "",
      country: data?.data?.country || "",
      desc: data?.data?.desc || "",
      url: data?.data?.url || "",
    },
  });

  const formMutation = useMutation({
    mutationFn: async (data) => {
      try {
        const token = localStorage.getItem("usertoken");
        if (!token) {
          return notify("error", "User not logged in");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          "http://localhost:5000/api/user/updateuserdetail",
          data,
          config
        );
        console.log("Success:", response.data);
        if (response.data.success) {
          notify("success", response.data.message);
        } else {
          notify("error", "Something went wrong");
        }
      } catch (error) {
        notify("error", error.response.data.message || error.message);
      }
    },
  });

  const submitHandler = (data) => {
    console.log("Form Data:", data);
    if (
      data.name == "" ||
      data.fatherName == "" ||
      data.cnic == "" ||
      data.gender == "" ||
      data.DOB == "" ||
      data.email == "" ||
      data.phoneNumber == "" ||
      data.department == "" ||
      data.admissionYear == "" ||
      data.graduationYear == "" ||
      data.company == "" ||
      data.designation == "" ||
      data.city == "" ||
      data.country == "" ||
      data.desc == "" ||
      data.url == undefined || data.url == "" 
    ) {
      return notify("warning", "Please fill all the fields");
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("fatherName", data.fatherName);
    formData.append("cnic", data.cnic);
    formData.append("gender", data.gender);
    formData.append("DOB", data.DOB);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("department", data.department);
    formData.append("admissionYear", data.admissionYear);
    formData.append("graduationYear", data.graduationYear);
    formData.append("company", data.company);
    formData.append("designation", data.designation);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("desc", typeof data.desc === "string" ? data.desc.trim() : "");
    formData.append("url", typeof data.url === "string" ? data.url.trim() : "");
    formData.append("image", data.image[0]);
    formMutation.mutate(formData);
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  return (
    <div className="popup-overlay" style={{ padding: "20px" , marginTop: "100px"}}>
      <div className="popup-content">
        <h2>Add Details</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          {step === 1 && (
            <>
              <div className="form-group">
                <label htmlFor="name">Student Name:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="name"
                    placeholder="Student Name"
                    {...register("name")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="fatherName">Father Name:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="fatherName"
                    placeholder="Father Name"
                    {...register("fatherName")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cnic">CNIC:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faIdCard} />
                  </span>
                  <input
                    id="cnic"
                    placeholder="CNIC"
                    {...register("cnic")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faVenusMars} />
                  </span>
                  <select
                    id="gender"
                    {...register("gender")}
                    className="input-with-icon"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="DOB">Date of Birth:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faCalendar} />
                  </span>
                  <input
                    id="DOB"
                    type="date"
                    placeholder="Date of Birth"
                    {...register("DOB")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    {...register("email")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Contact Number:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    id="phoneNumber"
                    placeholder="Contact Number"
                    {...register("phoneNumber")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <button
                type="button"
                className="submit-btn"
                onClick={handleNext}
                style={{ marginTop: "16px" }}
              >
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="form-group">
                <label htmlFor="department">Department:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="department"
                    placeholder="Department"
                    {...register("department")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="admissionYear">Year of Admission:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faCalendar} />
                  </span>
                  <input
                    id="admissionYear"
                    type="number"
                    placeholder="Year of Admission"
                    {...register("admissionYear")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="graduationYear">Year of Graduation:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faCalendar} />
                  </span>
                  <input
                    id="graduationYear"
                    type="number"
                    placeholder="Year of Graduation"
                    {...register("graduationYear")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Current Company:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="company"
                    placeholder="Current Company"
                    {...register("company")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="designation"
                    placeholder="Designation"
                    {...register("designation")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="city"
                    placeholder="City"
                    {...register("city")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="url">LinkedIn URL:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                  <input
                    id="url"
                    placeholder="LinkedIn URL"
                    {...register("url")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    id="country"
                    placeholder="Country"
                    {...register("country")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="desc">Description:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </span>
                  <textarea
                    id="desc"
                    placeholder="Description"
                    {...register("desc")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <div className="input-icon-wrapper">
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faImage} />
                  </span>
                  <input
                    id="image"
                    type="file"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setPreviewImage(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                    {...register("image")}
                    className="input-with-icon"
                  />
                </div>
              </div>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    width: "100px",
                    height: "auto",
                    marginTop: "10px",
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "16px",
                }}
              >
                <button
                  type="button"
                  className="submit-btn"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
