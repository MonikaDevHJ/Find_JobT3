// JobDetails.tsx
import React from "react";
import { useJobForm } from "~/app/context/JobFormContext";

interface JobDetailsProps {
 
  onNext: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({  onNext }) => {
  // get state + dispatch from context
  const {state, dispatch} = useJobForm();

  // helper for inputs
  const handleChange = (field: keyof typeof state, value: string) => {
    dispatch({type:"UPDATE_FIELD", field, value})
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
          Post A Job Here{" "}
        </p>

        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">
            Company Name
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Company Name"
            value={state.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </div>

        {/* Repeat for other fields */}
        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">Designation</p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Software Developer"
            value={state.designation}
            onChange={(e) => handleChange("designation", e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">Experience</p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="2 to 3 yr"
            value={state.experience}
            onChange={(e) => handleChange("experience", e.target.value)}
          />
        </div>

        
        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">Location</p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Hassan"
            value={state.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">Eligibilty</p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="BSC"
            value={state.eligibility}
            onChange={(e) => handleChange("eligibility", e.target.value)}
          />
        </div>


         <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">Skills</p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Java"
            value={state.skills}
            onChange={(e) => handleChange("skills", e.target.value)}
          />
        </div>
        {/* … experience, location, eligibility, skills */}
        <div className="text-center">
          <button
            className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
