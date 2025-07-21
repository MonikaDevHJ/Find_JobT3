import React, { useState } from "react";
import { useFormContext } from "~/app/context/CandidateFormContext";

type Props = {
  onNext: () => void;
};

const EmployerDeatils = ({ onNext }: Props) => {
    const { state, dispatch } = useFormContext();
  
  const [errors, setErrors] = useState({
    employerName:"",
    companyName :"",
    EmployerID : "",
    ContactNumber : "",
    Designation : "",
    CompanyName : "",

  });


  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <div className="space-y-6">
          <div className="">
            <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
              Employer Details
            </p>
          </div>

          <div>
            <label className="">Employer Name</label>
            <input
              
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label className="">Company Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Company Name"
            />
          </div>

          <div>
            <label className="">Employer ID</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Employer ID"
            />
          </div>

          <div>
            <label className="">Contact Number</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter your Office Number"
            />
          </div>

          <div>
            <label className="">Designation</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter your Designation"
            />
          </div>

          <div>
            <label className="">Company Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Company Name"
            />
          </div>
        </div>

        <div className="">
          <div className="mt-14 flex items-center justify-center gap-10">
            <div className="">
              <button className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
                Save
              </button>
            </div>

            <div className="">
              <button
                onClick={() => onNext()}
                className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDeatils;
