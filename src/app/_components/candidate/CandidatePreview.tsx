"use client";

import { useFormContext } from "~/app/context/CandidateFormContext";

type Props = {
  onBack: () => void;
  goToStep: (step: number) => void;
};

const Preview = ({ onBack, goToStep }: Props) => {
  const { state, dispatch } = useFormContext(); // ✅ Added dispatch

  const { personal, education, experience } = state;

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
          Preview Your Details
        </h2>

        {/* Personal Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
           
            <div className="flex justify-between item-center">
              <p className="mb-2 text-xl font-semibold">👤 Personal Information</p>
              <button
                className="text-sm text-blue-600 underline hover:text-blue-800"
                onClick={() => goToStep(1)}
              >
                ✏️Edit
              </button>
            </div>
           
            <div className="mt-3 ml-8 space-y-2">
              <p><strong>Name:</strong> {personal.name}</p>
              <p><strong>Phone:</strong> {personal.phone}</p>
              <p><strong>Email:</strong> {personal.email}</p>
              <p><strong>Gender:</strong> {personal.gender}</p>
              <p><strong>Education:</strong> {personal.education}</p>
            </div>
          </div>
        </div>

        {/* Education Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex justify-between item-center">
              <p className="mb-2 text-xl font-semibold">🎓 Education Details</p>
              <button
                className="text-sm text-blue-600 underline hover:text-blue-800"
                onClick={() => goToStep(2)}
              >
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              <p><strong>Degree:</strong> {education.degree}</p>
              <p><strong>Stream:</strong> {education.stream}</p>
              <p><strong>University:</strong> {education.university}</p>
              <p><strong>College:</strong> {education.college}</p>
              <p><strong>Score:</strong> {education.score}</p>
            </div>
          </div>
        </div>

        {/* Experience Info */}
        <div className="mb-6">
          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="flex justify-between item-center">
              <p className="mb-2 text-xl font-semibold">💼 Experience Details</p>
              <button
                className="text-sm text-blue-600 underline hover:text-blue-800"
                onClick={() => goToStep(3)}
              >
                ✏️Edit
              </button>
            </div>
            <div className="mt-3 ml-8 space-y-2">
              <p><strong>Company:</strong> {experience.company}</p>
              <p><strong>Role:</strong> {experience.role}</p>
              <p><strong>Years:</strong> {experience.years}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-12">
          <button
            onClick={onBack}
            className="rounded-2xl border border-gray-500 bg-white px-6 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100"
          >
            Back
          </button>

          <button
            onClick={async () => {
              try {
                const response = await fetch("/api/candidate", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    ...state,
                    id: state.id || undefined, // ✅ send id if available
                  }),
                });
               
                // Then handle the result
                const result = await response.json();

                if (response.ok) {
                  alert("✅ Candidate submitted successfully!");
                  console.log("DB response: ", result);

                  // ✅ Save the returned `id` into state so we can update later
                  dispatch({ type: "SET_ID", payload: result.candidate.id });
                } else {
                  alert("❌ Failed to submit.");
                  console.error(result.error);
                }
              } catch (err) {
                console.error("Error:", err);
                alert("Something went wrong.");
              }
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
