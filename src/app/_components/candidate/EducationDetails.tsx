"use client";

import { useState } from "react";
import { useFormContext } from "~/app/context/CandidateFormContext";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const EducationDetails = ({ onNext, onBack }: Props) => {
  const { state, dispatch } = useFormContext();
  const { degree, stream, university, college, score } = state.education;

  const [errors, setErrors] = useState({
    degree: "",
    stream: "",
    university: "",
    college: "",
    score: "",
  });

  const validateForm = () => {
    const newErrors = {
      degree: degree ? "" : "Degree is required",
      stream: stream ? "" : "Stream is required",
      university: university ? "" : "University is required",
      college: college ? "" : "College is required",
      score: score ? "" : "CGPA / % is required",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <p className="text-2xl font-bold">Educational Details</p>

        {/* Degree */}
        <div className="mt-4">
          <label className="mb-2 block text-xl font-semibold">Degree</label>
          <select
            value={degree}
            onChange={(e) =>
              dispatch({ type: "SET_EDUCATION", payload: { degree: e.target.value } })
            }
            className="w-full rounded border border-gray-500 p-2 pt-3 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          >
            <option value="">Select Degree</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
          </select>
          {errors.degree && <p className="text-sm text-red-500">{errors.degree}</p>}
        </div>

        {/* Stream */}
        <div className="mt-6">
          <label className="mb-2 block text-xl font-semibold">Stream</label>
          <input
            type="text"
            value={stream}
            onChange={(e) =>
              dispatch({ type: "SET_EDUCATION", payload: { stream: e.target.value } })
            }
            placeholder="Computer Science"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.stream && <p className="text-sm text-red-500">{errors.stream}</p>}
        </div>

        {/* University */}
        <div className="mt-6">
          <label className="mb-2 block text-xl font-semibold">University</label>
          <input
            type="text"
            value={university}
            onChange={(e) =>
              dispatch({ type: "SET_EDUCATION", payload: { university: e.target.value } })
            }
            placeholder="Tumkur University"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.university && <p className="text-sm text-red-500">{errors.university}</p>}
        </div>

        {/* College */}
        <div className="mt-6">
          <label className="mb-2 block text-xl font-semibold">College Name</label>
          <input
            type="text"
            value={college}
            onChange={(e) =>
              dispatch({ type: "SET_EDUCATION", payload: { college: e.target.value } })
            }
            placeholder="SSCW"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.college && <p className="text-sm text-red-500">{errors.college}</p>}
        </div>

        {/* CGPA/Score */}
        <div className="mt-6">
          <label className="mb-2 block text-xl font-semibold">CGPA / %</label>
          <input
            type="text"
            value={score}
            onChange={(e) =>
              dispatch({ type: "SET_EDUCATION", payload: { score: e.target.value } })
            }
            placeholder="85"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.score && <p className="text-sm text-red-500">{errors.score}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10 gap-12">
          <button
            onClick={onBack}
            className="rounded-2xl border border-gray-500 bg-white px-6 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100"
          >
            Back
          </button>
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

export default EducationDetails;
