"use client";

import React, { useState } from "react";
import PhoneLoginModal from "../_components/PhoneLoginModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">
        Find Job
      </h1>

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

      {showModal && (
        <PhoneLoginModal
          role={role}
          onClose={() => {
            setShowModal(false);
            setRole("");
          }}
        />
      )}
    </div>
  );
};

export default Home;
