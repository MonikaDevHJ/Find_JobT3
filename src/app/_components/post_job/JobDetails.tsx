"use client";
import React from "react";
import { useJobForm } from "~/app/context/JobFormContext";

interface JobDetailsProps {
  onNext: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ onNext }) => {
  const { state, dispatch } = useJobForm();

  // helper for inputs
  const handleChange = (field: keyof typeof state, value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  // ✅ fixed company logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({
          type: "UPDATE_FIELD",
          field: "companyLogo",
          value: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
          Post A Job Here
        </p>

        {/* Company Logo */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Company Logo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
        </div>

        {/* Preview */}
        {state.companyLogo && (
          <div className="mt-4">
            <img
              src={state.companyLogo}
              alt="company Logo"
              className="h-24 w-24 rounded-full object-cover border"
            />
          </div>
        )}

        {/* Company Name */}
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

        {/* Designation */}
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

        {/* Experience */}
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

        {/* Location */}
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

        {/* Eligibility */}
        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">Eligibility</p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="BSC"
            value={state.eligibility}
            onChange={(e) => handleChange("eligibility", e.target.value)}
          />
        </div>

        {/* Skills */}
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

        {/* Next button */}
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
