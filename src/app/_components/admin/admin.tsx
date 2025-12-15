"use client";

import { useEffect, useState } from "react";
import CountCard from "./CountCard";

const Mainadmin = () => {
  const [counts, setCounts] = useState({
    candidates: 0,
    employers: 0,
    jobs: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        if (!res.ok) throw new Error("Failed to fetch stats");

        const data = await res.json();
        setCounts(data);
      } catch (err) {
        console.error("❌ Error loading admin stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <h1 className="mb-12 text-3xl md:text-4xl font-extrabold text-fuchsia-700">
        Welcome to Admin Dashboard
      </h1>

      {/* Row 1 */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        <CountCard
          title="Total Candidates"
          count={counts.candidates}
          loading={loading}
        />
        <CountCard
          title="Total Employers"
          count={counts.employers}
          loading={loading}
        />
      </div>

      {/* Row 2 */}
      <div className="mt-10 w-full max-w-4xl">
        <CountCard
          title="Total Jobs Posted"
          count={counts.jobs}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Mainadmin;
