import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorTypePage = () => {
  const navigate = useNavigate();

  const doctorTypes = ["Cardiologist", "Dentist", "Dermatologist", "Pediatrician", "Neurologist"];

  const buttonStyle = "px-6 py-3 m-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-300";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-12 animate-bounce">Select Doctor Type</h1>
      <div>
        {doctorTypes.map((type) => (
          <button
            key={type}
            className={buttonStyle}
            onClick={() => navigate("/doctor/doctorlogin", { state: { specialization: type } })}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorTypePage;
