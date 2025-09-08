"use client"

import React, { useState } from "react";
import Image from "next/image";
import { arch } from "os";

const JobList = () => {
  const Card = [
    {
      company: "Infosys",
      Designation: "Software Developer",
      Logo: "/infosys.svg",
    },
    {
      company: "Accenture",
      Designation: "Human Resources",
      Logo: "/Accenture.svg",
    },
    {
      company: "Wipro",
      Designation: "Sales Manager",
      Logo: "/Accenture.svg",
    },
    {
      company: "EY",
      Designation: "Recuiter",
      Logo: "/Accenture.svg",
    },
    {
      company: "Jobox",
      Designation: "Manager",
      Logo: "/Accenture.svg",
    },
    {
      company: "High Source",
      Designation: "Account",
      Logo: "/Accenture.svg",
    },
    {
      company: "Deloite",
      Designation: "Security",
      Logo: "/Accenture.svg",
    },

    {
      company: "Mphasis",
      Designation: "OutSideSecurity",
      Logo: "/Accenture.svg",
    },
    {
      company: "24/7",
      Designation: "Developer",
      Logo: "/Accenture.svg",
    },
  ];

  const JOBS_PER_JOBS = 7;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcucting Indexes of slicing
  const indexOfLastJob = currentPage * JOBS_PER_JOBS;
  const indexofFirtsJob = indexOfLastJob - JOBS_PER_JOBS;
  const curentJobs = Card.slice(indexofFirtsJob, indexOfLastJob);

  const totalPages = Math.ceil(Card.length / JOBS_PER_JOBS);

  return (
    <div className="">
      {curentJobs.map(
        (job, index) => (
          <div
            key={index}
            className="mt-5 rounded-2xl border border-gray-300 bg-white p-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              {/* Left: Company Name + Job Title */}
              <div className="flex flex-col">
                <p className="text-start font-semibold text-gray-800">
                  {job.company}
                </p>

                <p className="text-gray-600">{job.Designation}</p>
              </div>

              {/* Right: Company Logo */}
              <div>
                <Image
                  src={job.Logo}
                  alt={`${job.company} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ),
        [],
      )}

      {/* Pagination */}

      <div className="mt-6 flex items-center justify-center space-x-2">
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="rounded-lg border px-3 py-1 disabled:opacity-50"
        >
          Previous
        </button>
       {/* Page numbers */}
       <div className="mt-6 flex items-center justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded-lg border px-3 py-1 ${
              currentPage === page ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="rounded-lg border px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobList;
