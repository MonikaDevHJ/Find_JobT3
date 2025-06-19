import React from "react";

type props = {
  onNext: () => void;
  onBack: () => void;
};

const EducationDetails = ({ onNext, onBack }: props) => {
  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <p className="text-2xl font-bold">Educational Details</p>

        <div className="mt-4">
          <label htmlFor="" className="mb-2 block text-xl font-semibold">
            Education
          </label>
          <select
            name=""
            id=""
            className="w-full rounded border border-gray-500 p-2 pt-3 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          >
            <option value="">Select Educational</option>
            <option value="">10 th </option>
            <option value="">12 th</option>
            <option value="">Graduation</option>
            <option value="">Post Graduation</option>
          </select>
        </div>

        <div className="mt-6 space-y-6">
          <p className="mb-2 block text-xl font-semibold">Stream</p>
          <div className="">
            <input
              type="text"
              placeholder="Computer Science"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <p className="mb-2 block text-xl font-semibold">University</p>
          <div className="">
            <input
              type="text"
              placeholder="Tumkur University"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <p className="mb-2 block text-xl font-semibold">College Name</p>
          <div className="">
            <input
              type="text"
              placeholder="SSCW"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <p className="mb-2 block text-xl font-semibold">CGPA/%</p>
          <div className="">
            <input
              type="text"
              placeholder="85"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            />
          </div>
        </div>
      

      <div className="flex justify-center mt-10 gap-12">
        <div className="">
           <button className="rounded-2xl border border-fuchsia-600 bg-fuchsia-600 px-6 py-2 text-xl font-semibold text-white hover:bg-fuchsia-500">
              Save
           </button>
        </div>

        <div className="">
             <button className="rounded-2xl border border-fuchsia-600 bg-fuchsia-600 px-6 py-2 text-xl font-semibold text-white hover:bg-fuchsia-500">
                 Next 
             </button>
        </div>
      </div>
     
      </div>
    </div>
  );
};

export default EducationDetails;
