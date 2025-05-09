

const express = require("express");
const authMiddleware = require("../middleware/AuthMiddleware");
const { GetAllUserDetail,
    GetUserDetail,
    UpdateUserDetail,
    UpdateApprovalStatus,
    UpdateShowStatus, } = require("../controllers/UserController");
const router = express.Router();

router.get("/getuserdetail",GetUserDetail);
router.post("/updateuserdetail",UpdateUserDetail);
router.get("/getalluserdetail",GetAllUserDetail);
router.post("/updateapprovalstatus",authMiddleware,UpdateApprovalStatus);
router.post("/updateshowstatus",authMiddleware,UpdateShowStatus);


module.exports = router;