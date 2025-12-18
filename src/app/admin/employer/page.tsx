"use client";

import { error } from "console";
import React from "react";

import { useEffect, useState } from "react";

type Employer = {
  id: string;
  employerName: string;
  companyName: string;
  contactNumber: string;
  createdAt: string;
};

const adminEmployerpage = () => {
  const [employer, setEmployer] = useState<Employer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployer = async () => {
      try {
        const res = await fetch("/api/admin/employer");
        if (!res.ok) throw new Error("Failed Fetch Employer");
        const data = await res.json();
        setEmployer(data);
      } catch (error) {
        console.log("❌ Error loading Emplyer:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployer();
  }, []);

  if (loading) {
    return (
      <p className="p-10 text-center text-lg font-semibold">
        Loading Employer...
      </p>
    );
  }
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
            {employer.map((employer) => (
              <tr key={employer.id} className="hover:bg-gray-50">
                <td className="border px-4 py-3">{employer.employerName}</td>
                <td className="border px-4 py-3">{employer.companyName}</td>
                <td className="border px-4 py-3">{employer.contactNumber}</td>
                <td className="border px-4 py-3">
                  {new Date(employer.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>

          {employer.length === 0 && (
            <tr>
              <td colSpan={4} className="p-6 text-center text-gray-500">
                No Emoployer Found
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default adminEmployerpage;
