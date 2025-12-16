"use client";

import React from "react";
import { useState, useEffect } from "react";
import CountCard from "./CountCard";
import { useRouter } from "next/navigation";
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
        const res = await fetch("api/admin/stats");
        if (!res.ok) throw new Error("failed to  Fetch  stats");

        const data = await res.json();
        setCounts(data);
      } catch (err) {
        console.log("❌ Error loading admin stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);
   
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 px-4 py-10">
      {/* Heading */}
      <h1 className="mb-12 text-3xl font-extrabold text-fuchsia-700 md:text-4xl">
        Welcome to Admin Dashboard
      </h1>

      {/* Row 1 */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        <CountCard
          title="Total Candidates"
          count={counts.candidates}
          loading={loading}
          onView={()=> router.push("/admin/candidate")}
        />
        <CountCard
          title="Total Employers"
          count={counts.employers}
          loading={loading}
          onView={()=> router.push("/admin/employer")}
        />
      </div>

      {/* Row 2 */}
      <div className="mt-10 w-full max-w-4xl">
        <CountCard
          title="Total Jobs Posted"
          count={counts.jobs}
          loading={loading}
          onView={ ()=> router.push("/admin/jobs")}
        />
      </div>
    </div>
  );
};

export default Mainadmin;
