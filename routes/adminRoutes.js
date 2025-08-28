const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  createDoctorByAdmin,
  createPatientByAdmin,
} = require("../controllers/adminController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", protectAdmin, logoutAdmin);
router.post("/create-doctor", protectAdmin, createDoctorByAdmin);
router.post("/create-patient", protectAdmin, createPatientByAdmin);

module.exports = router;
