import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("doctor");
  const [doctorData, setDoctorData] = useState({ name: "", email: "", password: "", specialization: "" });
  const [patientData, setPatientData] = useState({ name: "", email: "", password: "", age: "", phone: "" });
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const token = localStorage.getItem("adminToken");

  const handleDoctorSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/create-doctor", doctorData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(res.data.message);
      setDoctorData({ name: "", email: "", password: "", specialization: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error creating doctor");
    }
  };

  const handlePatientSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/create-patient", patientData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(res.data.message);
      setPatientData({ name: "", email: "", password: "", age: "", phone: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error creating patient");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  const tabButtonStyle = "px-6 py-2 m-2 rounded-lg shadow-md font-semibold transition-all transform hover:-translate-y-1";

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 p-6 flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8">
      
      {/* Main Form Section */}
      <div className="flex-1 flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white mb-8 animate-pulse">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex w-full justify-center mb-6">
          <button
            className={`${tabButtonStyle} ${activeTab === "doctor" ? "bg-blue-600 text-white" : "bg-blue-400 text-gray-100"}`}
            onClick={() => setActiveTab("doctor")}
          >
            Create Doctor
          </button>
          <button
            className={`${tabButtonStyle} ${activeTab === "patient" ? "bg-green-600 text-white" : "bg-green-400 text-gray-100"}`}
            onClick={() => setActiveTab("patient")}
          >
            Create Patient
          </button>
          <button
            className="px-4 py-2 ml-6 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all"
            onClick={() => setShowLogoutModal(true)}
          >
            Logout
          </button>
        </div>

        {/* Forms */}
        <div className="w-full flex justify-center">
          {activeTab === "doctor" && (
            <form className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn" onSubmit={handleDoctorSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Doctor</h2>
              <input
                type="text"
                placeholder="Name"
                value={doctorData.name}
                onChange={(e) => setDoctorData({ ...doctorData, name: e.target.value })}
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={doctorData.email}
                onChange={(e) => setDoctorData({ ...doctorData, email: e.target.value })}
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={doctorData.password}
                onChange={(e) => setDoctorData({ ...doctorData, password: e.target.value })}
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <input
                type="text"
                placeholder="Specialization"
                value={doctorData.specialization}
                onChange={(e) => setDoctorData({ ...doctorData, specialization: e.target.value })}
                className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">
                Create Doctor
              </button>
            </form>
          )}

          {activeTab === "patient" && (
            <form className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn" onSubmit={handlePatientSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Patient</h2>
              <input
                type="text"
                placeholder="Name"
                value={patientData.name}
                onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={patientData.email}
                onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={patientData.password}
                onChange={(e) => setPatientData({ ...patientData, password: e.target.value })}
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={patientData.age}
                onChange={(e) => setPatientData({ ...patientData, age: e.target.value })}
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <input
                type="text"
                placeholder="Phone"
                value={patientData.phone}
                onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })}
                className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all">
                Create Patient
              </button>
              <p className="mt-4 text-center text-gray-500 text-sm">
                Use <span className="font-semibold">doctor@gmail.com</span> / <span className="font-semibold">doctor1234</span> for testing
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Right Side: Test Login Credentials Box */}
      <div className="hidden lg:flex flex-col bg-white p-6 rounded-2xl shadow-2xl w-80 h-fit sticky top-24 animate-fadeIn">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Test Login Credentials</h2>
        <p className="mb-2"><span className="font-semibold">Admin:</span> admin@gmail.com / admin1234</p>
        <p className="mb-2"><span className="font-semibold">Doctor:</span> doctor@gmail.com / doctor1234</p>
        <p className="mb-2"><span className="font-semibold">Patient:</span> patient@gmail.com / patient1234</p>
        <p className="text-sm text-gray-500 mt-4">*Use these for testing login functionality</p>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center animate-fadeIn">
            <p className="mb-4 font-semibold text-gray-700">Are you sure you want to logout?</p>
            <button
              className="px-6 py-2 bg-red-500 text-white rounded-lg m-2 hover:bg-red-600 transition-all"
              onClick={handleLogout}
            >
              Yes, Logout
            </button>
            <button
              className="px-6 py-2 bg-gray-300 rounded-lg m-2 hover:bg-gray-400 transition-all"
              onClick={() => setShowLogoutModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default AdminDashboard;
