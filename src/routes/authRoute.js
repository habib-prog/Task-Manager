const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleWare");
const {
  registration,
  verifyOtp,
  login,
  profile,
  updateProfile,
} = require("../controllers/authControls");
router.get("/profile", verifyToken, profile);
router.post("/registration", registration);
router.post("/verifyOtp", verifyOtp);
router.post("/login", login);
router.put("/updateProfile", verifyToken, updateProfile);
module.exports = router;
