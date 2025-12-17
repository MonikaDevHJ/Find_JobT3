import React from "react";

const adminEmployerpage = () => {
  return (
    <div className="p-6 md:p-10">
      <h1 className="mb-6 text-2xl font-bold text-fuchsia-700">
        Employer List
      </h1>

      <div className="overflow-x-auto rounded-xl border bg-white shadow">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-3 text-left">Name</th>
              <th className="border px-4 py-3 text-left">Email</th>
              <th className="border px-4 py-3 text-left">Phone</th>
              <th className="border px-4 py-3 text-left">Created At</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-3">Nanduuuu</td>
              <td className="border px-4 py-3">anandu@gmail.com</td>
              <td className="border px-4 py-3">8861484078</td>
              <td className="border px-4 py-3">15/12/2025</td>
            </tr>
          </tbody>

          <tr>
            <td colSpan={4} className="p-6 text-center text-gray-500">
              No Emoployer Found
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default adminEmployerpage;
