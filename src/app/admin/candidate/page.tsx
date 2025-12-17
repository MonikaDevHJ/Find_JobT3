"use client";

import { useEffect, useState } from "react";

type Candidate = {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};

const AdminCandidatePage = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await fetch("/api/admin/candidate");
        if (!res.ok) throw new Error("Failed to fetch candidates");

        const data = await res.json();
        setCandidates(data);
      } catch (error) {
        console.error("❌ Error loading candidates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  if (loading) {
    return (
      <p className="p-10 text-center text-lg font-semibold">
        Loading candidates...
      </p>
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
              <th className="border px-4 py-3 text-left">Name</th>
              <th className="border px-4 py-3 text-left">Email</th>
              <th className="border px-4 py-3 text-left">Phone</th>
              <th className="border px-4 py-3 text-left">Created At</th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="border px-4 py-3">{candidate.name}</td>
                <td className="border px-4 py-3">{candidate.email}</td>
                <td className="border px-4 py-3">{candidate.phone}</td>
                <td className="border px-4 py-3">
                  {new Date(candidate.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {candidates.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-gray-500"
                >
                  No candidates found
                </td>
              </tr>
            )}
          </tbody>


          
        </table>
      </div>
    </div>
  );
};

export default AdminCandidatePage;
