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
    rollno: {
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
    passingYear: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserData", userSchema);
