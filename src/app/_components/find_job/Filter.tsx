import React from "react";

const Filter = () => {
  const filters = [
    {
      key: "education",
      name: "Education",
      options: [
        "UnderGradtion",
        "Under Graduation",
        "Post Graduation",
        "10th",
        "12Th",
        "Diploma",
      ],
    },
    {
      key: "location",
      name: "Location",
      options: [
        "Bengalore",
        "Mumbai",
        "Chennai",
        "Delhi",
        "Gujarath",
        "Hassan",
      ],
    },
    {
      key: "salary",
      name: "Salary",
      option: ["0-3 Lakh", "3-6 Lakh", "6-12 Lakh", "12-24 Lakh"],
    },
  ];

  const EducationOptions = [
    "Under Graduation",
    "Post Graduation",
    "10th",
    "12Th",
    "Diploma",
  ];

  const Location = [
    "Bengalore",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Gujarath",
    "Hassan",
  ];

  const Salary = ["0-3 Lakh", "3-6 Lakh", "6-12 Lakh", "12-24 Lakh"];

  const Industry = [
    "Software Developer",
    "Human Resources",
    "Sales Manager",
    "Marketing Manager",
    "Supoort Engenner",
    "Data Analysis",
  ];

  const Companies = [
    "EY",
    "Infosys",
    "TCS",
    "Accenture",
    "Wipro",
    "Jobox",
    "getsetHire",
    "HighSource",
    "Deloite",
  ];

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-300 bg-white p-5 shadow-xl sm:max-w-sm md:max-w-md">
      <p className="text-xl font-semibold">Apply Filters</p>

      {/* Education filter */}
      <div className="mt-6 text-start">
        <p className="font-semibold text-black">Education</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {EducationOptions.map((edu, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-2 sm:w-1/2 md:w-full"
            >
              <input type="checkbox" id={`edu-${index}`} />
              <label htmlFor={`edu-${index}`} className="text-gray-900">
                {edu}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Location filter */}
      <div className="mt-5 text-start">
        <p className="font-semibold text-black">Location</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {Location.map((loc, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-2 sm:w-1/2 md:w-full"
            >
              <input type="checkbox" id={`loc-${index}`} />
              <label htmlFor={`loc-${index}`} className="text-gray-900">
                {loc}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Salary Filter */}
      <div className="mt-5 text-start">
        <p className="font-semibold text-black">Salary</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {Salary.map((sal, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-2 sm:w-1/2 md:w-full"
            >
              <input type="checkbox" id={`sal-${index}`} />
              <label htmlFor={`sal-${index}`} className="text-gray-900">
                {sal}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Industry */}
      <div className="mt-5 text-start">
        <p className="font-semibold text-black">Industry</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {Industry.map((ind, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-2 sm:w-1/2 md:w-full"
            >
              <input type="checkbox" id={`ind-${index}`} />
              <label htmlFor={`ind-${index}`} className="text-gray-900">
                {ind}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Companies */}
      <div className="mt-5 text-start">
        <p className="font-semibold text-black">Companies</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {Companies.map((comp, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-2 sm:w-1/2 md:w-full"
            >
              <input type="checkbox" id={`comp-${index}`} />
              <label htmlFor={`comp-${index}`} className="text-gray-900">
                {comp}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
