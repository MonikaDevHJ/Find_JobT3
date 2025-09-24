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
  const [resumeName , setResumeName] = useState("");
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
      })
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
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-16 shadow-lg max-w-3xl mx-auto space-y-6">
        <p className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          Experience Details
        </p>

        {/* Company */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">
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
          <label className="mb-2 block text-base sm:text-lg font-semibold">
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
          {errors.role && (
            <p className="text-sm text-red-500">{errors.role}</p>
          )}
        </div>

        {/* Years */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">
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

        {/* Resume Upload using FileUpload component */}
        <label className="mb-2 block text-base sm:text-lg font-semibold">
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

            if(file) setResumeName(file.name)
          }}
        />
        {
          resumeName && <p className="mt-2 text-green-600  text-sm">  ✅ Uploaded: {resumeName}</p>
        }

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 pt-6">
          <button
            onClick={onBack}
            className="w-full sm:w-auto rounded-xl border border-gray-500 bg-white text-gray-700 py-2 px-6 text-lg font-semibold hover:bg-gray-100"
          >
            Back
          </button>

          <button
            className="w-full sm:w-auto rounded-xl bg-fuchsia-500 text-white py-2 px-6 text-lg font-semibold hover:bg-fuchsia-600"
          >
            Save
          </button>

          <button
            onClick={() => {
              if (validateForm()) {
                onNext();
              }
            }}
            className="w-full sm:w-auto rounded-xl bg-fuchsia-600 text-white py-2 px-6 text-lg font-semibold hover:bg-fuchsia-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
