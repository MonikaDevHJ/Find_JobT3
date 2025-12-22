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

const AdminJobsPage = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jobPost = async () => {
      try {
        const res = await fetch("/api/admin/jobs");
        if (!res.ok) throw new Error("Failed Fetch Jobs");
        const data = await res.json();
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.log("❌ Error loading Job Post:", error);
      } finally {
        setLoading(false);
      }
    };
    jobPost();
  }, []);

  if (loading) {
    return (
      <p className="p-10 text-center text-lg font-semibold"> Loading Jobs</p>
    );
  }

  const handleDelete = async (jobId: string) => {
    const confirmDelete = confirm("Are You Sure you Want to delete this job?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/admin/jobs/${jobId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to Delete");
      setJobs((prev) => prev.filter((job) => job.id !== jobId));
    } catch (error) {
      console.log("❌ Delete failed:", error);
    }
  };

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
              <th className="border px-4 py-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="border px-4 py-3">{job.companyName}</td>
                <td className="border px-4 py-3">{job.location}</td>
                <td className="border px-4 py-3">{job.designation}</td>
                <td className="border px-4 py-3">{job.salary}</td>
                <td className="border px-4 py-3">{job.experience}</td>
                <td className="border px-4 py-3">
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminJobsPage;
