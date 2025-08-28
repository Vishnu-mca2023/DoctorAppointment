import React from "react";
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  const buttonStyle = "px-6 py-3 m-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transform hover:-translate-y-1 transition-all duration-300";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <h1 className="text-4xl md:text-6xl font-bold text-white animate-bounce mb-12">Doctor Appointment System</h1>
      <div>
        <button className={buttonStyle} onClick={() => navigate("/admin/adminlogin")}>Admin</button>
        <button className={buttonStyle} onClick={() => navigate("/doctor/doctortypepage")}>Doctor</button>
        <button className={buttonStyle} onClick={() => navigate("/patient/patientlogin")}>Patient</button>
      </div>
    </div>
  );
};

export default EntryPage;
