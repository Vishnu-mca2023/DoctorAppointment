const express = require("express");
const router = express.Router();
const { loginPatient } = require("../controllers/patientController");

// Public route → Patient login
router.post("/login", loginPatient);

module.exports = router;
