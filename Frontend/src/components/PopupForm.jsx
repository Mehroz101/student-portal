import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "../utils/notification";
import { useState } from "react";
const PopupForm = ({ data }) => {
  console.log("Data in PopupForm:", data);
  const backendImageUrl = data?.data?.img
    ? `http://localhost:5000/${data.data.img}`
    : null;

  const [previewImage, setPreviewImage] = useState(backendImageUrl);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: data?.data?.name || "",
      fatherName: data?.data?.fatherName || "",
      cnic: data?.data?.cnic || "",
      rollno: data?.data?.rollno || "",
      DOB: data?.data?.DOB || "",
      phoneNumber: data?.data?.phoneNumber || "",
      passingYear: data?.data?.passingYear || "",
      gender: data?.data?.gender || "",
      desc: data?.data?.desc || "",
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
      data.rollno == "" ||
      data.DOB == "" ||
      data.phoneNumber == "" ||
      data.passingYear == "" ||
      data.gender == "" ||
      data.address == "" ||
      data.image[0] == "" ||
      data.desc == ""
    ) {
      return notify("warning", "Please fill all the fields");
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("fatherName", data.fatherName);
    formData.append("cnic", data.cnic);
    formData.append("rollno", data.rollno);
    formData.append("DOB", data.DOB);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("passingYear", data.passingYear);
    formData.append("gender", data.gender);
    formData.append("desc", data.desc.trim());
    formData.append("image", data.image[0]);
    formMutation.mutate(formData);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add Details</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input id="name" placeholder="Your Name" {...register("name")} />
          </div>
          <div className="form-group">
            <label htmlFor="fathername">Father's Name:</label>
            <input
              id="fathername"
              placeholder="Your Father's Name"
              {...register("fatherName")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cnic">CNIC:</label>
            <input id="cnic" placeholder="Your CNIC" {...register("cnic")} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <div className="radio_buttons flex gap-2 justify-content-start">
              <label htmlFor="gender">Male</label>
              <input
                id="gender"
                type="radio"
                value="male"
                {...register("gender")}
              />
              <label htmlFor="gender">Female</label>
              <input
                id="gender"
                type="radio"
                value="female"
                {...register("gender")}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="DOB">Date of Birth:</label>
            <input
              id="DOB"
              type="date"
              placeholder="Your Date of Birth"
              {...register("DOB")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rollno">Roll No:</label>
            <input
              id="rollno"
              placeholder="Your Roll No"
              {...register("rollno")}
            />
          </div>
          <div className="input-group">
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                placeholder="Your Phone Number"
                {...register("phoneNumber")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passingyear">Passing Year:</label>
              <input
                id="passingyear"
                placeholder="Your Passing Year"
                type="text"
                {...register("passingYear")}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description:</label>
            <textarea
              id="desc"
              placeholder="Your Description"
              {...register("desc")}

            />
          </div>
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "100px", height: "auto", marginTop: "10px" }}
            />
          )}
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              id="image"
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setPreviewImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
              {...register("image")}
            />
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
