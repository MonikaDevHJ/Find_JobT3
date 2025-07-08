"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "~/app/context/CandidateFormContext";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const EducationDetails = ({ onNext, onBack }: Props) => {
  const { state, dispatch } = useFormContext();
  const [errors, setErrors] = useState({
    degree: "",
    stream: "",
    university: "",
    college: "",
    score: "",
  });

  useEffect(() => {
    const saveData = localStorage.getItem("EducationalDetails");
    if (saveData) {
      const education = JSON.parse(saveData);
      dispatch({ type: "SET_EDUCATION", payload: education });
    }
  }, []);

  const validateForm = () => {
    const newError = {
      degree: degree.trim() ? "" : "Graduation is Required",
      stream: stream.trim() ? "" : "Stream is Required",
      university: university.trim() ? "" : "University is Required",
      college: college.trim() ? "" : "College is Required",
      score: score.trim() ? "" : "Score is Required",
    };
    setErrors(newError);
    return Object.values(newError).every((val) => val === "");
  };

  const { degree, stream, university, college, score } = state.education;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <div className="bg-gray-100 rounded-xl p-6 sm:p-10 md:p-16 max-w-3xl mx-auto space-y-6">
        <div>
          <p className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
            Educational Details
          </p>
        </div>

        {/* Degree */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">
            Graduation
          </label>
          <input
            type="text"
            value={degree}
            onChange={(e) =>
              dispatch({
                type: "SET_EDUCATION",
                payload: { degree: e.target.value },
              })
            }
            placeholder="Enter Graduation"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.degree && (
            <p className="text-sm text-red-500">{errors.degree}</p>
          )}
        </div>

        {/* Stream */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">
            Stream
          </label>
          <input
            type="text"
            value={stream}
            onChange={(e) =>
              dispatch({
                type: "SET_EDUCATION",
                payload: { stream: e.target.value },
              })
            }
            placeholder="Computer Science"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.stream && (
            <p className="text-sm text-red-500">{errors.stream}</p>
          )}
        </div>

        {/* University */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">
            University
          </label>
          <input
            type="text"
            value={university}
            onChange={(e) =>
              dispatch({
                type: "SET_EDUCATION",
                payload: { university: e.target.value },
              })
            }
            placeholder="Enter University"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.university && (
            <p className="text-sm text-red-500">{errors.university}</p>
          )}
        </div>

        {/* College */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">
            College
          </label>
          <input
            type="text"
            value={college}
            onChange={(e) =>
              dispatch({
                type: "SET_EDUCATION",
                payload: { college: e.target.value },
              })
            }
            placeholder="SSCW"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.college && (
            <p className="text-sm text-red-500">{errors.college}</p>
          )}
        </div>

        {/* Score */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">
            CGPA / %
          </label>
          <input
            type="text"
            value={score}
            onChange={(e) =>
              dispatch({
                type: "SET_EDUCATION",
                payload: { score: e.target.value },
              })
            }
            placeholder="Enter CGPA / Percentage"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
          {errors.score && (
            <p className="text-sm text-red-500">{errors.score}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 mt-10">
          <button
            onClick={onBack}
            className="w-full sm:w-auto rounded-xl border border-gray-500 bg-white text-gray-700 py-2 px-6 text-lg font-semibold hover:bg-gray-100"
          >
            Back
          </button>

          <button
            onClick={() => {
              if (validateForm()) {
                localStorage.setItem(
                  "EducationalDetails",
                  JSON.stringify(state.education)
                );
                alert("Educational Details Saved in LocalStorage");
              }
            }}
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

export default EducationDetails;
