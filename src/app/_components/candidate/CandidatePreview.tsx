"use client";

import { useFormContext } from "~/app/context/CandidateFormContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SuccessModal from "../common/SuccessModal";
import { useUser } from "@clerk/nextjs";

type Props = {
  onBack: () => void;
  goToStep: (step: number) => void;
};

const Preview = ({ onBack, goToStep }: Props) => {
  const { state, dispatch } = useFormContext();
  const { personal, education, experience } = state;

  const router = useRouter();

  const { user } = useUser();
  const [showSuccess, setShowSucess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timeOut = setTimeout(() => {
        router.push("/find_job");
      }, 2000); //redirect after 3 seconds
      // Cleanup: cancel the timer if the component is removed early
      return () => clearTimeout(timeOut);
    }
  }, [showSuccess]);

  return (
    <>
      <div className="mt-10 px-4 sm:px-10 md:px-24">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
            Preview Your Details
          </h2>

          {/* Personal Info */}
          <div className="mb-6">
            <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-xl font-semibold">
                  👤 Personal Information
                </p>
                <button
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                  onClick={() => goToStep(1)}
                >
                  ✏️Edit
                </button>
              </div>
              <div className="mt-3 ml-8 space-y-2">
                {
                  personal.profileImage && (
                    <div className="mb-4">
                      <img src={personal.profileImage} alt="Profile"  className="h-24 w-24 rounded-full object-cover border"/>
                    </div>
                  )
                }
                <p>
                  <strong>Name:</strong> {personal.name}
                </p>
                <p>
                  <strong>Phone:</strong> {personal.phone}
                </p>
                <p>
                  <strong>Email:</strong> {personal.email}
                </p>
                <p>
                  <strong>Gender:</strong> {personal.gender}
                </p>
                <p>
                  <strong>Education:</strong> {personal.education}
                </p>
              </div>
            </div>
          </div>

          {/* Education Info */}
          <div className="mb-6">
            <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-xl font-semibold">
                  🎓 Education Details
                </p>
                <button
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                  onClick={() => goToStep(2)}
                >
                  ✏️Edit
                </button>
              </div>
              <div className="mt-3 ml-8 space-y-2">
                <p>
                  <strong>Degree:</strong> {education.degree}
                </p>
                <p>
                  <strong>Stream:</strong> {education.stream}
                </p>
                <p>
                  <strong>University:</strong> {education.university}
                </p>
                <p>
                  <strong>College:</strong> {education.college}
                </p>
                <p>
                  <strong>Score:</strong> {education.score}
                </p>
              </div>
            </div>
          </div>

          {/* Experience Info */}
          <div className="mb-6">
            <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="mb-2 text-xl font-semibold">
                  💼 Experience Details
                </p>
                <button
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                  onClick={() => goToStep(3)}
                >
                  ✏️Edit
                </button>
              </div>
              <div className="mt-3 ml-8 space-y-2">
                <p>
                  <strong>Company:</strong> {experience.company}
                </p>
                <p>
                  <strong>Role:</strong> {experience.role}
                </p>
                <p>
                  <strong>Years:</strong> {experience.years}
                </p>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          {experience.resume && (
            <div className="mb-10">
              <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
                <p className="mb-4 text-xl font-semibold">📄 Resume Preview</p>
                <div className="overflow-hidden rounded-md border border-gray-400">
                  <iframe src={experience.resume} className="h-96 w-full" />
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-12">
            <button
              onClick={onBack}
              className="rounded-2xl border border-gray-500 bg-white px-6 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>

            {showSuccess && (
              <SuccessModal message="Your candidate account has been created successfully! Redirecting to Find Job..." />
            )}

            <button
              onClick={async () => {
                try {
                  const response = await fetch("/api/candidate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      clerkId: user?.id,

                      ...state,
                      id: state.id || undefined,
                    }),
                  });

                  const result = await response.json();

                  if (response.ok) {
                    console.log("DB response: ", result);
                    dispatch({ type: "SET_ID", payload: result.candidate.id });
                    setShowSucess(true);
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
    </>
  );
};

export default Preview;
