const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    rollno: {
      type: String,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    cgpa: {
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
