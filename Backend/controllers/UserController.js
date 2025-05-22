const Event = require("../models/Event");
const UserData = require("../models/UserData");
const fs = require("fs");
const path = require("path");
const GetAllUserDetail = async (req, res) => {
  try {
    const user = await UserData.find();
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

const DeleteUserDetail = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await UserData.findByIdAndDelete(id);
    if (user) {
      res.status(200).send({
        success: true,
        message: "user deleted successfully",
        data: user,
      });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
    console.log(error);
  }
};
const GetAllApprovedUserDetail = async (req, res) => {
  try {
    const user = await UserData.find({ status: "approved" });
    if (user) {
      console.log(user);
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
    const user = await UserData.findById(userId);
    if (user) {
      const sendData = {
        name: user.name,
        fatherName: user.fatherName,
        rollno: user.rollno,
        gender: user.gender,
        DOB: user.DOB,
        phoneNumber: user.phoneNumber,
        passingYear: user.passingYear,
        cnic: user.cnic,
        desc: user.desc,
        img: user.img,
      };
      console.log(sendData);
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
      fatherName,
      rollno,
      gender,
      DOB,
      phoneNumber,
      passingYear,
      cnic,
      desc,
    } = req.body;
    const userId = req.user.id;
    const existingUser = await UserData.findById(userId);
    if (existingUser && existingUser.img && req.file) {
      const oldImagePath = path.join(__dirname, "../uploads", existingUser.img);
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          console.error("Failed to delete old image:", err.message);
        } else {
          console.log("Old image deleted:", existingUser.img);
        }
      });
    }
    let user;
    if (existingUser) {
      user = await UserData.findByIdAndUpdate(
        userId,
        {
          name,
          fatherName,
          rollno,
          gender,
          DOB,
          phoneNumber,
          passingYear,
          cnic,
          desc,
          img: req.file ? req.file.filename : existingUser.img,
          status: "pending",
        },
        { new: true }
      );
    } else {
      user = await UserData.create({
        _id: userId, // optional: include this if you want to preserve the given ID
        name,
        fatherName,
        rollno,
        gender,
        DOB,
        phoneNumber,
        passingYear,
        cnic,
        desc,
        img: req.file.filename,
      });
    }

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }
    res.status(200).send({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
    console.log(error.message);
  }
};
const UpdateApprovalStatus = async (req, res) => {
  try {
    const { id, isapproved } = req.body;
    console.log(id, isapproved);
    const updatedUser = await UserData.findByIdAndUpdate(
      id,
      { status: isapproved },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).send({
        success: true,
        message: `User ${
          isapproved == "approved" ? "approved" : "rejected"
        } successfully`,
      });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: error.message });
  }
};

const AddOrUpdateEvent = async (req, res) => {
  try {
    const { name, description, status, id = null } = req.body;
    const file = req.file;
    if (id) {
      const updatedUser = await Event.findByIdAndUpdate(
        id,
        {
          name: name,
          description: description,
          status: status,
          image: file.filename,
        },
        { new: true }
      );
      if (updatedUser) {
        res.status(200).send({
          success: true,
          message: `Event updated successfully`,
        });
      } else {
        res.status(404).send({ success: false, message: "Event not found" });
      }
    } else {
      const user = new Event({
        name: name,
        description: description,
        status: status,
        image: file.filename,
      });
      const result = await user.save();
      if (result) {
        res
          .status(201)
          .send({ success: true, message: "Event added successfully" });
      } else {
        //remove image
        fs.unlinkSync(`./uploads/${file.filename}`);

        res.status(401).send({
          success: true,
          message: "something wrong while adding event",
        });
      }
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send({ success: true, message: "", data: events });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    console.log(eventId);
    const event = await Event.findByIdAndDelete(eventId);
    if (event) {
      res.status(200).send({
        success: true,
        message: "event deleted successfully",
        data: event,
      });
    } else {
      res.status(404).send({ success: false, message: "Event not found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
    console.log(error);
  }
};
const AllStates = async (req, res) => {
  try {
    const [approved, pending, rejected, event] = await Promise.all([
      UserData.find({ status: "approved" }),
      UserData.find({ status: "pending" }),
      UserData.find({ status: "rejected" }),
      Event.find(),
    ]);
    const totalEvents = event.length;
    const totalApproved = approved.length;
    const totalPending = pending.length;
    const totalRejected = rejected.length;
    res.status(200).send({
      success: true,
      message: "",
      data: { totalEvents, totalApproved, totalPending, totalRejected },
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
    console.log(error);
  }
};
module.exports = {
  GetAllUserDetail,
  GetUserDetail,
  UpdateUserDetail,
  UpdateApprovalStatus,
  GetAllApprovedUserDetail,
  DeleteUserDetail,
  AddOrUpdateEvent,
  getAllEvents,
  deleteEvent,
  AllStates,
};
