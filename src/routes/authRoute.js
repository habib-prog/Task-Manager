const express = require("express");
const router = express.Router();
const { registration, verifyOtp } = require("../controllers/authControls");

router.post("/registration", registration);
router.post("/verifyOtp", verifyOtp);
module.exports = router;
