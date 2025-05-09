const User = require("../models/User");

const GetAllUserDetail = async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      res.status(200).send({ success: true, message: "", data: user });
    
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
    console.log(error);
  }
};
const GetUserDetail = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (user) {
      const sendData = {
        userName: user.username,
        rollNo: user.rollno ?? "",
        gender: user.gender,
        university: user.university ?? "",
        className: user.className ?? "",
        classID: user.classID ?? "",
        password: user.password ?? "",
      };
      res.status(200).send({ success: true, message: "", data: sendData });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
    console.log(error);
  }
};
const UpdateUserDetail = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      rollno,
      email,
      password,
      department,
      university,
      cgpa,
      session
    } = req.body;
    const user = new User( {
      name: name,
      rollno: rollno,
      email: email,
      password: password,
      department: department,
      university: university,
      cgpa: cgpa,
      session: session,
    });
   const result = await user.save();
    if (result) {
      res
        .status(201)
        .send({ success: true, message: "update detail successfully" });
    } else {
      res.status(401).send({
        success: true,
        message: "something wrong while updating detail",
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
    console.log(error.message);
  }
};
const UpdateApprovalStatus = async (req, res) => {
  try {
    const { userId, isapproved } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { isapproved },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).send({
        success: true,
        message: `User ${isapproved ? "approved" : "rejected"} successfully`,
      });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: error.message });
  }
};
const UpdateShowStatus = async (req, res) => {
  try {
    const { userId, isshown } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { isshown },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).send({
        success: true,
        message: `Show status updated to ${isshown}`,
      });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {  
  GetAllUserDetail,
  GetUserDetail,
  UpdateUserDetail,
  UpdateApprovalStatus,
  UpdateShowStatus, };
