"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa"; // experience
import { GoLocation } from "react-icons/go"; // location pin

interface Job {
  id: string;
  companyName: string;
  designation: string;
  location: string;
  eligibility: string;
  experience: string;
  skills: string;
  logoUrl?: string; // if you store logo url in db
  createdAt: string;
}

const JOBS_PER_PAGE = 4;

const JobList = () => {


  const [job, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("api/getjobs")
      const data = await res.json();
      setJobs(data);

    }
    fetchJobs();

  }, []);


  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = job.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(job.length / JOBS_PER_PAGE);

  return (
    <div className="">
      {/* Jobs */}
      {currentJobs.map((job) => (
        <div
          key={job.id}
          className=" rounded-2xl border border-gray-300 bg-white p-4 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-start  mt-2  font-semibold text-gray-800">
                {job.companyName}
              </p>
              <p className="text-gray-600 mt-2">{job.designation}</p>
            </div>
            <div className="mt-2">
              <Image
                src={job.logoUrl || "/defaultlogo.svg"}
                alt={`${job.companyName} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Loaction and Salary */}
          <div className=" flex gap-10 mt-3">
            <div className="flex gap-2">
              <div className="">
                <FaBriefcase className=" mt-1" />{" "}
              </div>
              <div>
                <p className="font-medium text-gray-700">{job.experience}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="">
                <GoLocation size={16} className="text-black mt-1" />{" "}
              </div>
              <div className="">
                <p className="font-medium text-gray-700">{job.location}</p>
              </div>
            </div>
          </div>

          {/* Eligibilty */}
          <div className="mt-3 text-start">
            <p className="font-medium text-gray-700">
              {job.eligibility}
            </p>
          </div>


          <div className="mt-2 text-start">
            <p className="font-medium text-gray-700">{job.skills}</p>
          </div>

          <div className="mt-2 text-start">
            <p className="font-medium text-gray-700">{ }</p>
          </div>


        </div>
      ))}

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="rounded-md border px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page numbers */}
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

export default JobList;
