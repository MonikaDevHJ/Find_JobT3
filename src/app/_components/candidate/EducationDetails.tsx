import { University } from "lucide-react";
import React, { useState } from "react";
import Stream from "stream";
import { object } from "zod";

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
    University: "",
    college: "",
    score: "",
  });

  const ValidateForm = () => {
    const newError = {
      degree: "",
      stream: "",
      University: "",
      college: "",
      score: "",
    };
    if (!newError.degree.trim()) {
      newError.degree = "Graduation is Required";
    }
    if (!newError.stream.trim()) {
      newError.stream = "Stream is Required";
    }
    if (!newError.stream.trim()) {
      newError.University = "University Is required";
    }
    if (!newError.college.trim()) {
      newError.college = "College Is Required";
    }
    if (!newError.score.trim()) {
      newError.score = "Score is required";
    }

    setErrors(newError);
    return Object.values(newError).every((val) => val === "");
  };

  return (
    <div className="border bg-gray-100">
      <div className="border p-10">
        <div className="">
          <p className="text-2xl font-semibold">Educational Details</p>
        </div>

        <div className="mt-10 space-y-7">
          {/* Degree */}
          <div className="">
            <div className="">
              <label className="">Graduation</label>
            </div>

            <div className="">
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="Enter Graduation"
              />
            </div>
          </div>

          {/* Stream */}
          <div className="">
            <div className="">
              <label className="">Stream</label>
            </div>

            <div className="">
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="Computer Science"
              />
            </div>
          </div>

          {/* University */}
          <div className="">
            <div className="">
              <label className="">University</label>
            </div>

            <div className="">
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="Enter University"
              />
            </div>
          </div>

          {/* College */}
          <div className="">
            <div className="">
              <label className="">College</label>
            </div>

            <div className="">
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="SSCW"
              />
            </div>
          </div>

          {/* CGPA */}
          <div className="">
            <div className="">
              <label className="">CGPA</label>
            </div>

            <div className="">
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="CGPA/%"
              />
            </div>
          </div>
        </div>

        {/* Button Save and Next  */}
        <div className="mt-20 flex justify-center gap-8">
          <div className="rounded-2xl border bg-fuchsia-500 p-2 text-3xl">
            <button>Save</button>
          </div>

          <div className="rounded-2xl border bg-fuchsia-500 p-2 text-3xl">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
