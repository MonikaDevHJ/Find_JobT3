"use client";

import { error } from "console";
import React from "react";
import { useEffect, useState } from "react";

type Jobs = {
  companyName: string;
  location: string;
  designation: string;
  salary: string;
  experience: string;
};

const adminJobsPage = () => {
  useEffect(() => {
    const jobPost = async () => {
      try {
        const res = await fetch("/api/admin/jobs");
        if (!res.ok) throw new Error("Failed Fetch Jobs");
        const data = await res.json();
      } catch (error) {
      } finally {
      }
    };
  });

  return (
    <div className="p-6 md:p-10">
      <h1 className="mb-6 text-2xl font-bold text-fuchsia-700">
        Candidates List
      </h1>

      <div className="overflow-x-auto rounded-xl border bg-white shadow">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-3 text-left">Company Name</th>
              <th className="border px-4 py-3 text-left">Location</th>
              <th className="border px-4 py-3 text-left">Job Role</th>
              <th className="border px-4 py-3 text-left">Salary</th>
              <th className="border px-4 py-3 text-left">Experience </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border px-4 py-3">Jobox</td>
              <td className="border px-4 py-3">Bengalore</td>
              <td className="border px-4 py-3">Software Developer</td>
              <td className="border px-4 py-3">3 Lakh to 5 Lakh</td>
              <td className="border px-4 py-3">3 yr to 5yr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default adminJobsPage;
