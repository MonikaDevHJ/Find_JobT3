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

  return(
      
    <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-300 bg-white p-5 shadow-xl sm:max-w-sm md:max-w-md ">
      <p className=" text-xl font-semibold">Apply Filters</p>

    </div>

  )
};

export default Filter;
