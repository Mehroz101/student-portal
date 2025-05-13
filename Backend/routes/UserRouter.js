const express = require("express");
const authMiddleware = require("../middleware/AuthMiddleware");
const {
  GetAllUserDetail,
  GetUserDetail,
  UpdateUserDetail,
  UpdateApprovalStatus,
  GetAllApprovedUserDetail,
  UpdateShowStatus,
  GetAllShownUserDetail,
  AddOrUpdateEvent,
  DeleteUserDetail,
  getAllEvents,
  deleteEvent,
  AllStates,
} = require("../controllers/UserController");
const upload = require("../middleware/uploadImage");
const router = express.Router();

router.get("/getuserdetail", GetUserDetail);
router.post("/updateuserdetail", UpdateUserDetail);
router.get("/getalluserdetail", GetAllUserDetail);
router.post("/updateapprovalstatus", authMiddleware, UpdateApprovalStatus);
router.post("/updateshowstatus", authMiddleware, UpdateShowStatus);
router.get("/getallapproveduserdetail", GetAllApprovedUserDetail);
router.get("/getallshownuserdetail", GetAllShownUserDetail);
router.post("/deleteuserdetail", authMiddleware, DeleteUserDetail);
router.post("/addevent", authMiddleware, upload.single("image"), AddOrUpdateEvent);
router.get("/allevent", getAllEvents);
router.post("/deleteevent",authMiddleware, deleteEvent);
router.get("/allstates", authMiddleware,AllStates);

module.exports = router;
