import React from "react";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("patientToken");
    navigate("/patient/patientlogin");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6">Patient Dashboard</h2>
        <p className="mb-6 text-lg">Welcome, Patient!</p>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default PatientDashboard;
