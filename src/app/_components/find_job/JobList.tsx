"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa"; // experience
import { GoLocation } from "react-icons/go"; // location pin
import { FaRegFileAlt } from "react-icons/fa"; // eligibility

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
    { company: "Wipro", Designation: "Sales Manager", Logo: "/Accenture.svg" },
    { company: "EY", Designation: "Recruiter", Logo: "/Accenture.svg" },
    { company: "Jobox", Designation: "Manager", Logo: "/Accenture.svg" },
    { company: "High Source", Designation: "Account", Logo: "/Accenture.svg" },
    { company: "Deloite", Designation: "Security", Logo: "/Accenture.svg" },
    {
      company: "Mphasis",
      Designation: "OutsideSecurity",
      Logo: "/Accenture.svg",
    },
    { company: "24/7", Designation: "Developer", Logo: "/Accenture.svg" },
    { company: "24/7", Designation: "Developer", Logo: "/Accenture.svg" },
    { company: "Wipro", Designation: "Sales Manager", Logo: "/Accenture.svg" },
    {
      company: "Accenture",
      Designation: "Human Resources",
      Logo: "/Accenture.svg",
    },
    { company: "High Source", Designation: "Account", Logo: "/Accenture.svg" },
    {
      company: "Accenture",
      Designation: "Human Resources",
      Logo: "/Accenture.svg",
    },
    { company: "Wipro", Designation: "Sales Manager", Logo: "/Accenture.svg" },
    { company: "EY", Designation: "Recruiter", Logo: "/Accenture.svg" },
    { company: "Jobox", Designation: "Manager", Logo: "/Accenture.svg" },
    { company: "High Source", Designation: "Account", Logo: "/Accenture.svg" },
    { company: "Deloite", Designation: "Security", Logo: "/Accenture.svg" },
    {
      company: "Infosys",
      Designation: "Software Developer",
      Logo: "/infosys.svg",
    },
    {
      company: "Mphasis",
      Designation: "OutsideSecurity",
      Logo: "/Accenture.svg",
    },
    { company: "Wipro", Designation: "Sales Manager", Logo: "/Accenture.svg" },
    { company: "EY", Designation: "Recruiter", Logo: "/Accenture.svg" },
    { company: "Jobox", Designation: "Manager", Logo: "/Accenture.svg" },
    { company: "High Source", Designation: "Account", Logo: "/Accenture.svg" },
    { company: "Deloite", Designation: "Security", Logo: "/Accenture.svg" },

    {
      company: "Mphasis",
      Designation: "OutsideSecurity",
      Logo: "/Accenture.svg",
    },

    { company: "Wipro", Designation: "Sales Manager", Logo: "/Accenture.svg" },
    { company: "EY", Designation: "Recruiter", Logo: "/Accenture.svg" },
    { company: "Jobox", Designation: "Manager", Logo: "/Accenture.svg" },
    { company: "High Source", Designation: "Account", Logo: "/Accenture.svg" },
    { company: "Deloite", Designation: "Security", Logo: "/Accenture.svg" },

    { company: "Wipro", Designation: "Sales Manager", Logo: "/Accenture.svg" },
    { company: "EY", Designation: "Recruiter", Logo: "/Accenture.svg" },
    { company: "Jobox", Designation: "Manager", Logo: "/Accenture.svg" },
    { company: "High Source", Designation: "Account", Logo: "/Accenture.svg" },
    { company: "Deloite", Designation: "Security", Logo: "/Accenture.svg" },
  ];

  const JOBS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = Card.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(Card.length / JOBS_PER_PAGE);

  return (
    <div className="">
      {/* Jobs */}
      {currentJobs.map((job, index) => (
        <div
          key={index}
          className="mt-5 rounded-2xl border border-gray-300 bg-white p-4 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-start font-semibold text-gray-800">
                {job.company}
              </p>
              <p className="text-gray-600">{job.Designation}</p>
            </div>
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

          {/* Loaction and Salary */}
          <div className="mt-2 flex gap-10">
            <div className="flex gap-2">
              <div className="">
                <FaBriefcase className=" mt-1" />{" "}
              </div>
              <div>
                <p className="font-medium text-gray-700">Experience</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="">
                <GoLocation size={16} className="text-black mt-1" />{" "}
              </div>
              <div className="">
                <p className="font-medium text-gray-700">Location</p>
              </div>
            </div>
          </div>

          {/* Eligibilty */}
          <div className="mt-3 text-start">
            <p className="font-medium text-gray-700">
              Eligitbilty: BSC, Bcom , BE
            </p>
          </div>
          

          <div className="mt-2 text-start">
            <p className="font-medium text-gray-700">Skilss:</p>
          </div>

          <div className="mt-2 text-start">
            <p className="font-medium text-gray-700">1 day Ago</p>
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
            className={`rounded-md border px-3 py-1 transition-colors hover:bg-blue-50 ${
              currentPage === page
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
