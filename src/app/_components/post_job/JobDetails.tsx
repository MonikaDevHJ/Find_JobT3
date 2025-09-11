import React from "react";

const JobDetails = () => {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
          Post A Job Here{" "}
        </p>

        <div className="">
          <p className="mb-2 block text-base font-semibold sm:text-lg">
            Company Name
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Company Name"
          />
        </div>

        <div className="">
          <p className="mb-2 block text-base font-semibold sm:text-lg">
            Designation
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Software Developer"
          />
        </div>

        <div className="">
          <p className="mb-2 block text-base font-semibold sm:text-lg">
            Year Of Experience
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="0 to 3 Years"
          />
        </div>

        <div className="">
          <p className="mb-2 block text-base font-semibold sm:text-lg">
            Company Loaction
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Bengalore"
          />
        </div>

        <div className="">
          <p className="mb-2 block text-base font-semibold sm:text-lg">
            Eligibility
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="gradution"
          />
        </div>

        <div className="">
          <p className="mb-2 block text-base font-semibold sm:text-lg">
            Skills
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Skills"
          />
        </div>

        <div className="text-center">
        

            <button className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
