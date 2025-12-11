import React from "react";
import { Eye } from "lucide-react"; // using lucide icons

const Mainadmin = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-fuchsia-700 mb-12">
        Welcome to Admin Dashboard
      </h1>

      {/* Row 1: Candidate + Employer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        
        {/* Candidate Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 transition hover:shadow-xl hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">
              Total Candidates
            </p>
            <Eye className="text-fuchsia-700 cursor-pointer hover:text-fuchsia-500 transition" size={26} />
          </div>
          <p className="text-4xl font-bold text-fuchsia-700 mt-3">--</p>
        </div>

        {/* Employer Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 transition hover:shadow-xl hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">
              Total Employers
            </p>
            <Eye className="text-fuchsia-700 cursor-pointer hover:text-fuchsia-500 transition" size={26} />
          </div>
          <p className="text-4xl font-bold text-fuchsia-700 mt-3">--</p>
        </div>
      </div>

      {/* Row 2: Jobs */}
      <div className="mt-10 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 transition hover:shadow-xl hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">
              Total Jobs Posted
            </p>
            <Eye className="text-fuchsia-700 cursor-pointer hover:text-fuchsia-500 transition" size={26} />
          </div>
          <p className="text-4xl font-bold text-fuchsia-700 mt-3">--</p>
        </div>
      </div>
    </div>
  );
};

export default Mainadmin;
