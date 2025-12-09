"use client";

import React, { useEffect, useState } from "react";

const AppliedCandidates = ({ jobId }: { jobId: string }) => {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`/api/appliedcandidates/${jobId}`, {
          cache: "no-store",
        });
        const data = await res.json();

        setCandidates(data.candidates || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false); 
      }
    };

    loadData();
  }, [jobId]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-fuchsia-700 mb-8">
        Applied Candidates ({candidates.length})
      </h1>

      {/* ⬅️ SHOW LOADING BEFORE DATA */}
      {loading && (
        <p className="text-gray-800 text-lg">Loading applied candidates... Please wait</p>
      )}

      {/* ⬅️ AFTER loading completes, now check if empty */}
      {!loading && candidates.length === 0 && (
        <p className="text-gray-700 text-lg">No one applied yet.</p>
      )}

      {/* Candidate list */}
      <div className="space-y-4">
        {candidates.map((item: any) => (
          <div
            key={item.id}
            className="border rounded-lg p-5 bg-white shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-xl">{item.candidate.name}</p>
              <p className="text-gray-600">{item.candidate.email}</p>
              <p className="text-gray-600">{item.candidate.phone}</p>
            </div>

            {item.candidate.resumeLink && (
              <a
                href={`/resume-viewer?candidate=${item.candidate.id}`}
                className="px-4 py-2 bg-fuchsia-600 text-white rounded-md hover:bg-fuchsia-700"
              >
                View Resume
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedCandidates;
