const express = require("express");
const router = express.Router();
const {
  loginDoctor,
  getDoctorProfile
} = require("../controllers/doctorController");

const { protectDoctor } = require("../middleware/authMiddleware");

// Public route → Doctor login
router.post("/login", loginDoctor);

// Protected route → Doctor profile
router.get("/profile", protectDoctor, getDoctorProfile);

module.exports = router;
