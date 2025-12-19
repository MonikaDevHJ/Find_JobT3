"use client";

import React from "react";
import { useEffect, useState } from "react";

type Jobs = {
  id: string;
  companyName: string;
  location: string;
  designation: string;
  salary: string;
  experience: string;
};

const adminJobsPage = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jobPost = async () => {
      try {
        const res = await fetch("/api/admin/jobs");
        if (!res.ok) throw new Error("Failed Fetch Jobs");
        const data = await res.json();
      } catch (error) {
        console.log("❌ Error loading Job Post:", error);
      } finally {
      }
    };
    adminJobsPage();
  }, []);

  if (loading) {
    return (
      <p className="p-10 text-center text-lg font-semibold"> Loading Jobs</p>
    );
  }

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
            {jobs.map((jobs) => (
              <tr key={jobs.id} className="hover:bg-gray-50">
                <td className="border px-4 py-3">{jobs.companyName}</td>
                <td className="border px-4 py-3">{jobs.location}</td>
                <td className="border px-4 py-3">{jobs.designation}</td>
                <td className="border px-4 py-3">{jobs.salary}</td>
                <td className="border px-4 py-3">{jobs.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default adminJobsPage;
