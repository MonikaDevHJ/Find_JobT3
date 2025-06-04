import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center">
        Find Job
      </h1>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <Link href="/login/candidate">
          <button className="w-full bg-fuchsia-600 text-white py-3 rounded-xl shadow-md hover:bg-fuchsia-700 transition duration-300">
            Candidate Login
          </button>
        </Link>
        <Link href="/login/employer">
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
            Employer Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
