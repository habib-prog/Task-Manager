const express = require("express");
const router = express.Router();
const {
  registration,
  verifyOtp,
  login,
} = require("../controllers/authControls");

router.post("/registration", registration);
router.post("/verifyOtp", verifyOtp);
router.post("/login", login);
module.exports = router;
