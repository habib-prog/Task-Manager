const express = require("express");
const router = express.Router();
const { registration } = require("../controllers/authControls");

router.get("/registration", registration);

module.exports = router;
