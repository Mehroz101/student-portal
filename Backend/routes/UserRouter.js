

const express = require("express");
const authMiddleware = require("../middleware/AuthMiddleware");
const { GetAllUserDetail,
    GetUserDetail,
    UpdateUserDetail,
    UpdateApprovalStatus,
    GetAllApprovedUserDetail,
    UpdateShowStatus,
    GetAllShownUserDetail,
    DeleteUserDetail, } = require("../controllers/UserController");
const router = express.Router();

router.get("/getuserdetail",GetUserDetail);
router.post("/updateuserdetail",UpdateUserDetail);
router.get("/getalluserdetail",GetAllUserDetail);
router.post("/updateapprovalstatus",authMiddleware,UpdateApprovalStatus);
router.post("/updateshowstatus",authMiddleware,UpdateShowStatus);
router.get("/getallapproveduserdetail",GetAllApprovedUserDetail);
router.get("/getallshownuserdetail",GetAllShownUserDetail);
router.post("/deleteuserdetail",authMiddleware,DeleteUserDetail);


module.exports = router;