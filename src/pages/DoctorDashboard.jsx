import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const specialization = localStorage.getItem("doctorSpecialization");

  const handleLogout = () => {
    localStorage.removeItem("doctorToken");
    localStorage.removeItem("doctorSpecialization");
    navigate("/doctor/doctorlogin");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6">{specialization} Dashboard</h2>
        <p className="mb-6 text-lg">Welcome, Doctor!</p>
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

export default DoctorDashboard;
