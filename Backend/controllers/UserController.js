const Event = require("../models/Event");
const UserData = require("../models/UserData");
const fs = require("fs");
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
const GetAllShownUserDetail = async (req, res) => {
  try {
    const user = await UserData.find({ isshown: true });
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
      res
        .status(200)
        .send({
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
      session,
    } = req.body;
    const user = new User({
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
const UpdateShowStatus = async (req, res) => {
  try {
    const { id, isshown } = req.body;
    console.log(id, isshown);
    const updatedUser = await UserData.findByIdAndUpdate(
      id,
      { isshown: isshown },
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

        res
          .status(401)
          .send({
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
      res
        .status(200)
        .send({
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
    res
      .status(200)
      .send({
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
  UpdateShowStatus,
  GetAllApprovedUserDetail,
  GetAllShownUserDetail,
  DeleteUserDetail,
  AddOrUpdateEvent,
  getAllEvents,
  deleteEvent,
  AllStates,
};
