"use client";

import { useFormContext } from "~/app/context/CandidateFormContext";

type Props = {
  onBack: () => void;
};

const Preview = ({ onBack }: Props) => {
  const { state } = useFormContext();

  const { personal, education, experience } = state;

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-fuchsia-700">
          Preview Your Details
        </h2>

        {/* Personal Info */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">👤 Personal Information</h3>
          <p><strong>Name:</strong> {personal.name}</p>
          <p><strong>Phone:</strong> {personal.phone}</p>
          <p><strong>Email:</strong> {personal.email}</p>
          <p><strong>Gender:</strong> {personal.gender}</p>
          <p><strong>Education:</strong> {personal.education}</p>
        </div>

        {/* Education Info */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🎓 Education Details</h3>
          <p><strong>Degree:</strong> {education.degree}</p>
          <p><strong>Stream:</strong> {education.stream}</p>
          <p><strong>University:</strong> {education.university}</p>
          <p><strong>College:</strong> {education.college}</p>
          <p><strong>Score:</strong> {education.score}</p>
        </div>

        {/* Experience Info */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">💼 Experience Details</h3>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Role:</strong> {experience.role}</p>
          <p><strong>Years:</strong> {experience.years}</p>
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
              alert("🎉 All data collected successfully!");
              console.log("Final Submitted Data: ", state);
            }}
            className="rounded-2xl border border-green-600 bg-green-600 px-6 py-2 text-xl font-semibold text-white hover:bg-green-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
