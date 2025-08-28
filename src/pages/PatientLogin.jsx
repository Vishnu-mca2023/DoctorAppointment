import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PatientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/patient/login", { email, password });
      localStorage.setItem("patientToken", res.data.token);
      navigate("/patient/patientdashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6">Patient Login</h2>
        <form className="flex flex-col" onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="bg-purple-500 text-white p-3 rounded hover:bg-purple-600 transition-colors">Login</button>
        </form>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default PatientLogin;
