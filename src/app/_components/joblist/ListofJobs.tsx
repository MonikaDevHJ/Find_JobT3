import React from "react";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const ListofJobs = () => {
  return (
    <div className="p-10">
      <div className="mt-2 text-3xl font-bold text-fuchsia-800">
        <p>List of Jobs here</p>
      </div>

      <div className="mt-4 rounded-2xl border border-gray-300 bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="mt-2 text-start font-semibold text-gray-800">
              companyName
            </p>
            <p className="mt-2 text-gray-600">designation</p>
          </div>
          <div className="mt-2">
            <Image
              src={"/defaultlogo.svg"}
              alt={`logo`}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Loaction and Salary */}
        <div className="mt-3 flex gap-10">
          <div className="flex gap-2">
            <div className="">
              <FaBriefcase className="mt-1" />{" "}
            </div>
            <div>
              <p className="font-medium text-gray-700">experience </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="">
              <GoLocation size={16} className="mt-1 text-black" />{" "}
            </div>
            <div className="">
              <p className="font-medium text-gray-700">location</p>
            </div>
          </div>
        </div>

        {/* WorkMode */}
        <div className="mt-3 flex gap-5 text-start">
          <div className="flex gap-2">
            <p className="font-medium text-gray-700">Interview Mode :</p>
            <p className="font-medium text-gray-700">{}</p>
          </div>

          <div className="flex gap-2">
            <p className="font-medium text-gray-700">Working Mode :</p>
            <p className="font-medium text-gray-700"> {}</p>
          </div>
        </div>

        {/* Eligibilty */}
        <div className="mt-3 flex gap-2 text-start">
          <p className="font-medium text-gray-700">Eligibility :</p>

          <p className="font-medium text-gray-700">{}</p>
        </div>

        {/* Skills */}
        <div className="mt-2 flex gap-2 text-start">
          <p className="font-medium text-gray-700">Skills :</p>

          <p className="font-medium text-gray-700">{}</p>
        </div>

        <div className="mt-2 text-start">
          <button className="rounded-2xl bg-fuchsia-400 p-2 font-semibold hover:bg-fuchsia-700">
            Apllied Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListofJobs;
