"use client";

import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      {/* Main Heading */}
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">
        Find Job
      </h1>

      {/* Buttons */}
      <div className="flex w-full max-w-xs flex-col space-y-4">
        <button
          onClick={() => {
            setRole("candidate");
            setShowModal(true);
          }}
          className="w-full rounded-xl bg-fuchsia-600 py-3 text-white shadow-md transition duration-300 hover:bg-fuchsia-700"
        >
          Candidate Login
        </button>
        <button
          onClick={() => {
            setRole("employer");
            setShowModal(true);
          }}
          className="w-full rounded-xl bg-blue-600 py-3 text-white shadow-md transition duration-300 hover:bg-blue-700"
        >
          Employer Login
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg relative">

            {/* Header with Title & Cancel Button */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl font-semibold text-blue-700">
                {role === "candidate" ? "Candidate" : "Employer"} Login
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                  setRole("");
                }}
                className="text-red-600 text-2xl font-bold hover:text-red-800 transition"
              >
               ❌

              </button>
            </div>

            {/* Phone Number Field */}
            <label className="block mb-2 text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              className="w-full mb-4 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter phone number"
            />

            {/* OTP Field */}
            <label className="block mb-2 text-sm text-gray-600">OTP</label>
            <input
              type="text"
              className="w-full mb-4 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter OTP"
            />

            {/* Login Button */}
            <button className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
