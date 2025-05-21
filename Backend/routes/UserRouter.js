const express = require("express");
const authMiddleware = require("../middleware/AuthMiddleware");
const {
  GetAllUserDetail,
  GetUserDetail,
  UpdateUserDetail,
  UpdateApprovalStatus,
  GetAllApprovedUserDetail,
  AddOrUpdateEvent,
  DeleteUserDetail,
  getAllEvents,
  deleteEvent,
  AllStates,
} = require("../controllers/UserController");
const upload = require("../middleware/uploadImage");
const router = express.Router();

router.get("/getuserdetail",authMiddleware, GetUserDetail);
router.post("/updateuserdetail", authMiddleware, upload.single("image"), UpdateUserDetail);
router.get("/getalluserdetail", GetAllUserDetail);
router.post("/updateapprovalstatus", authMiddleware, UpdateApprovalStatus);
router.get("/getallapproveduserdetail", GetAllApprovedUserDetail);
router.post("/deleteuserdetail", authMiddleware, DeleteUserDetail);
router.post("/addevent", authMiddleware, upload.single("image"), AddOrUpdateEvent);
router.get("/allevent", getAllEvents);
router.post("/deleteevent",authMiddleware, deleteEvent);
router.get("/allstates", authMiddleware,AllStates);

module.exports = router;
