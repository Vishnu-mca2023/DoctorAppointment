const Patient = require("../models/Patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= Patient Login =================
exports.loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({
      message: "Patient login successful",
      patient: {
        id: patient._id,
        name: patient.name,
        email: patient.email,
        age: patient.age,
        phone: patient.phone
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
