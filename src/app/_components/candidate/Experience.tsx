"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "~/app/context/CandidateFormContext";
import FileUpload from "../common/FileUpload";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const Experience = ({ onNext, onBack }: Props) => {
  const { state, dispatch } = useFormContext();
  const [resumeName, setResumeName] = useState("");
  const { company, role, years } = state.experience;

  const [errors, setErrors] = useState({
    company: "",
    role: "",
    years: "",
  });

  useEffect(() => {
    const saveData = localStorage.getItem("ExperienceDetails");
    if (saveData) {
      const experience = JSON.parse(saveData);
      dispatch({ type: "SET_EXPERIENCE", payload: experience });
    }

    // also load resuem file seprately if you want
    const savedResume = localStorage.getItem("resumeFile");
    if (savedResume) {
      dispatch({
        type: "SET_EXPERIENCE",
        payload: { resume: savedResume },
      });
    }
  }, []);

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
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <p className="text-center text-xl font-bold sm:text-left sm:text-2xl">
          Experience Details
        </p>

        {/* Company */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) =>
              dispatch({
                type: "SET_EXPERIENCE",
                payload: { company: e.target.value },
              })
            }
            placeholder="Infosys"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.company && (
            <p className="text-sm text-red-500">{errors.company}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) =>
              dispatch({
                type: "SET_EXPERIENCE",
                payload: { role: e.target.value },
              })
            }
            placeholder="Frontend Developer"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
        </div>

        {/* Years */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Years of Experience
          </label>
          <input
            type="text"
            value={years}
            onChange={(e) =>
              dispatch({
                type: "SET_EXPERIENCE",
                payload: { years: e.target.value },
              })
            }
            placeholder="1.8"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.years && (
            <p className="text-sm text-red-500">{errors.years}</p>
          )}
        </div>

        {/* Skilss */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Skilss
          </label>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
        </div>

        {/* Resume Upload using FileUpload component */}
        <label className="mb-2 block text-base font-semibold sm:text-lg">
          Upload Resume (PDF Only)
        </label>

        <FileUpload
          accept="application/pdf"
          onFileSelect={(base64, file) => {
            // save to localStorage
            localStorage.setItem("resumeFile", base64);

            // also store in context if needed
            dispatch({
              type: "SET_EXPERIENCE",
              payload: { resume: base64 },
            });

            if (file) setResumeName(file.name);
          }}
        />
        {resumeName && (
          <p className="mt-2 text-sm text-green-600">
            {" "}
            ✅ Uploaded: {resumeName}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:justify-between">
          <button
            onClick={onBack}
            className="w-full rounded-xl border border-gray-500 bg-white px-6 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 sm:w-auto"
          >
            Back
          </button>

          <button className="w-full rounded-xl bg-fuchsia-500 px-6 py-2 text-lg font-semibold text-white hover:bg-fuchsia-600 sm:w-auto">
            Save
          </button>

          <button
            onClick={() => {
              if (validateForm()) {
                onNext();
              }
            }}
            className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white hover:bg-fuchsia-500 sm:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
