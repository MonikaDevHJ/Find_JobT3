"use client";

import { useFormContext } from "~/app/context/CandidateFormContext";
import { useEffect, useState } from "react";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const Experience = ({ onNext, onBack }: Props) => {
  const { state, dispatch } = useFormContext();
  const { company, role, years } = state.experience;

  const [errors, setErrors] = useState({
    company: "",
    role: "",
    years: "",
  });

  useEffect(() => {
    // step1:get Data from local storage
    const saveData = localStorage.getItem("Experience Details");

    // step 2 if Data exist
    if (saveData) {
      // step 3 : convert String back to object
      const experience = JSON.parse(saveData);

      // Step 4 : Update the form state

      dispatch({ type: "SET_EXPERIENCE", payload: experience });
    }
  }, [])

  const validateForm = () => {
    const newErrors = {
      company: company ? "" : "Company name is required",
      role: role ? "" : "Role is required",
      years: years ? "" : "Experience years are required",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <p className="text-2xl font-bold">Experience Details</p>

        {/* Company */}
        <div className="mt-6">
          <label className="mb-2 block text-xl font-semibold">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) =>
              dispatch({ type: "SET_EXPERIENCE", payload: { company: e.target.value } })
            }
            placeholder="Infosys"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
        </div>

        {/* Role */}
        <div className="mt-6">
          <label className="mb-2 block text-xl font-semibold">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) =>
              dispatch({ type: "SET_EXPERIENCE", payload: { role: e.target.value } })
            }
            placeholder="Frontend Developer"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
        </div>

        {/* Years */}
        <div className="mt-6">
          <label className="mb-2 block text-xl font-semibold">Years of Experience</label>
          <input
            type="text"
            value={years}
            onChange={(e) =>
              dispatch({ type: "SET_EXPERIENCE", payload: { years: e.target.value } })
            }
            placeholder="1.8"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.years && <p className="text-sm text-red-500">{errors.years}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10 gap-12">


          <button
            onClick={onBack}
            className="rounded-2xl border border-gray-500 bg-white px-6 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100"
          >
            Back
          </button>

          <div className="">
            <button
              onClick={() => {
                if (validateForm()) {
                  localStorage.setItem(
                    "Experience Details",
                    JSON.stringify(state.experience),
                  );
                  alert("Experince Details Saved Succefully in Local");
                }
              }}
              className="rounded-2xl border bg-fuchsia-500 p-2 text-3xl"
            >
              Save
            </button>
          </div>
          <button
            onClick={() => {
              const isValid = validateForm();
              if (isValid) {
                onNext();
              }
            }}
            className="rounded-2xl border border-fuchsia-600 bg-fuchsia-600 px-6 py-2 text-xl font-semibold text-white hover:bg-fuchsia-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
