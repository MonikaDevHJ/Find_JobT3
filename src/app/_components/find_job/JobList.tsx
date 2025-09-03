import React from "react";
import Image from "next/image";

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
  ];

  return (
    <div className="">
      {Card.map(
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
    </div>
  );
};

export default JobList;
