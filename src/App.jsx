import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import EntryPage from "./pages/EntryPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import DoctorTypePage from "./pages/DoctorTypePage";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorDashboard from "./pages/DoctorDashboard";


// Patient
import PatientLogin from "./pages/PatientLogin";
import PatientDashboard from "./pages/PatientDashboard";


function App() {
  return (
    <Router>
      <Routes>
        {/* Entry Page */}
        <Route path="/" element={<EntryPage />} />

        {/* Admin */}
        <Route path="/admin/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/admindashboard" element={<AdminDashboard />} />

        {/* Doctor */}
        <Route path="/doctor/doctortypepage" element={<DoctorTypePage />} />
        <Route path="/doctor/doctorlogin" element={<DoctorLogin />} />
        <Route path="/doctor/doctordashboard" element={<DoctorDashboard />} />

        <Route path="/patient/patientlogin" element={<PatientLogin />} />
        <Route path="/patient/patientdashboard" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
