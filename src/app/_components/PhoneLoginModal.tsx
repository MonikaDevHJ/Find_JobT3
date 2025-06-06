"use client";

import React, { useState } from "react";

interface PhoneLoginModalProps {
    role : String;
    onClose :()=> void ; 
}

const PhoneLoginModal :React.FC<PhoneLoginModalProps> = ({ role, onClose }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = () => {
    // You will write Firebase logic here later
    console.log("Phone:", phone);
    console.log("OTP:", otp);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg relative">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-semibold text-blue-700">
            {role === "candidate" ? "Candidate" : "Employer"} Login
          </p>
          <button
            onClick={onClose}
            className="text-red-600 text-2xl font-bold hover:text-red-800 transition"
          >
            ❌
          </button>
        </div>

        <label className="block mb-2 text-sm text-gray-600">Phone Number</label>
        <input
          type="tel"
          className="w-full mb-4 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="block mb-2 text-sm text-gray-600">OTP</label>
        <input
          type="text"
          className="w-full mb-4 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default PhoneLoginModal;
