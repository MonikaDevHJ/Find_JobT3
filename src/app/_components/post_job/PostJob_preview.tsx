// PostJob_preview.tsx
import React from "react";

interface PreviewProps {
  values: {
    companyName: string;
    designation: string;
    experience: string;
    location: string;
    eligibility: string;
    skills: string;
  };
  onBack: () => void;
  onSubmit: () => void;
}

const PostJob_preview: React.FC<PreviewProps> = ({
  values,
  onBack,
  onSubmit,
}) => {
  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
          Preview Page
        </h2>

        <ul className="space-y-2 text-lg">
          <li>
            <strong>Company:</strong> {values.companyName}
          </li>
          <li>
            <strong>Designation:</strong> {values.designation}
          </li>
          <li>
            <strong>Experience:</strong> {values.experience}
          </li>
          <li>
            <strong>Location:</strong> {values.location}
          </li>
          <li>
            <strong>Eligibility:</strong> {values.eligibility}
          </li>
          <li>
            <strong>Skills:</strong> {values.skills}
          </li>
        </ul>

        <div className="mt-6 flex gap-4">
          <button
            className="rounded bg-gray-400 px-6 py-2 text-white"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="rounded bg-fuchsia-600 px-6 py-2 text-white"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJob_preview;
