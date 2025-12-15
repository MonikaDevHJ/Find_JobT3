import React from "react";
import CountCard from "./CountCard";

const Mainadmin = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-fuchsia-700 mb-12">
        Welcome to Admin Dashboard
      </h1>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <CountCard title="Total Candidates" count={120} />
        <CountCard title="Total Employers" count={35} />
      </div>

      {/* Row 2 */}
      <div className="mt-10 w-full max-w-4xl">
        <CountCard title="Total Jobs Posted" count={210} />
      </div>
    </div>
  );
};

export default Mainadmin;
