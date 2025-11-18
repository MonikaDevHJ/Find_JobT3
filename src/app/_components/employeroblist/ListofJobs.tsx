"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

type Job = {
  id: string;
  companyName: string;
  designation: string;
  experience: string;
  location: string;
  eligibility: string;
  skills?: string;
  salary?: string;
  openings?: string;
  employemnetType?: string;
  InterviewMode: string;
  WorkMode?: string;
  logoUrl?: string;
  appliedCount : number;
};

// How many jobs per page
const JOBS_PER_PAGE = 4;

const ListofJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadJobs = async () => {
      const res = await fetch("/api/employerlistofjobs");
      const data = await res.json();
      setJobs(data);
    };

    loadJobs();
  }, []);

  // Pagination Calculations
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  return (
    <div className="p-10">
      <h1 className="mt-2 text-3xl font-bold text-fuchsia-800">
        List of Jobs Here
      </h1>

      {/* Render Current Page Jobs */}
      {currentJobs.map((job) => (
        <div
          key={job.id}
          className="mt-4 rounded-2xl border border-gray-300 bg-white p-5 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="mt-2 text-start font-semibold text-gray-800">
                {job.companyName}
              </p>
              <p className="mt-2 text-gray-600">{job.designation}</p>
            </div>
            <div className="mt-2">
              <Image
                src={job.logoUrl || "/defaultlogo.svg"}
                alt="logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-3 flex gap-10">
            <div className="flex gap-2">
              <FaBriefcase className="mt-1" />
              <p className="font-medium text-gray-700">{job.experience}</p>
            </div>

            <div className="flex gap-2">
              <GoLocation size={16} className="mt-1" />
              <p className="font-medium text-gray-700">{job.location}</p>
            </div>
          </div>

          <div className="mt-3 flex gap-5 text-start">
            <p className="font-medium text-gray-700">
              Interview Mode: {job.InterviewMode}
            </p>

            <p className="font-medium text-gray-700">
              Working Mode: {job.WorkMode}
            </p>
          </div>

          <div className="mt-3 flex gap-2 text-start">
            <p className="font-medium text-gray-700">Eligibility:</p>
            <p className="font-medium text-gray-700">{job.eligibility}</p>
          </div>

          <div className="mt-2 text-start">
            <button className="rounded-2xl bg-fuchsia-400 p-2 font-semibold hover:bg-fuchsia-700">
              Applied Candidate Here ({job.appliedCount})
            </button>
          </div>
        </div>
      ))}

      {/* Pagination Buttons */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="rounded-md border px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded-md border px-3 py-1 transition-colors hover:bg-blue-50 ${currentPage === page
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : ""
              }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="rounded-md border px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListofJobs;
