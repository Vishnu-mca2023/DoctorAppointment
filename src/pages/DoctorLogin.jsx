import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const specialization = location.state?.specialization || "";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/doctor/login", { email, password });
      localStorage.setItem("doctorToken", res.data.token);
      localStorage.setItem("doctorSpecialization", specialization);
      toast.success("Login successful!");
      setTimeout(() => navigate("/doctor/doctordashboard"), 1000); // redirect after toast
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-pulse">{specialization} Login</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <button 
            type="submit" 
            className="bg-green-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Login
          </button>
        </form>
        
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default DoctorLogin;
