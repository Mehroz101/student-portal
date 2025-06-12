const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    isshown: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    admissionYear: {
      type: String,
      required: true,
    },
    graduationYear: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserData", userSchema);
