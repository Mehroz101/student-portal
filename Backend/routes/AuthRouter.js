const express = require("express");
const router = express.Router();
const { login, signup,userSignin,userSignup } = require("../controllers/AuthController");

router.post("/signin", login);

router.post("/signup", signup);
router.post("/usersignup", userSignup);
router.post("/userlogin", userSignin);

module.exports = router;
