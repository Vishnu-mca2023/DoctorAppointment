import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
      localStorage.setItem("adminToken", res.data.token);
      toast.success("Login successful!");
      navigate("/admin/admindashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 gap-8 p-6">
      
      {/* Login Form */}
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
        <form className="flex flex-col" onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">
            Login
          </button>
        </form>
        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
      </div>

      {/* Test Login Credentials Box */}
      <div className="hidden lg:flex flex-col bg-white p-6 rounded-2xl shadow-2xl w-80 h-fit animate-fadeIn">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Test Login Credentials</h2>
        <p className="mb-2"><span className="font-semibold">Admin:</span> docter@gmail.com / admin1234</p>
        
        <p className="text-sm text-gray-500 mt-4">*Use these for testing login functionality</p>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default AdminLogin;
