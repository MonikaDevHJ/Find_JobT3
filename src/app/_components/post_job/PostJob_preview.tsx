// PostJob_preview.tsx
import React from "react";
import { useJobForm } from "~/app/context/JobFormContext";

interface PreviewProps {
  onBack: () => void;
}

const PostJob_preview: React.FC<PreviewProps> = ({ onBack, }) => {

  const {state , dispatch} = useJobForm()
  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
          Preview Page
        </h2>

        <ul className="space-y-2 text-lg">
          <li>
            <strong>Company:</strong> {state.companyName}
          </li>
          <li>
            <strong>Designation:</strong> {state.designation}
          </li>
          <li>
            <strong>Experience:</strong> {state.experience}
          </li>
          <li>
            <strong>Location:</strong> {state.location}
          </li>
          <li>
            <strong>Eligibility:</strong> {state.eligibility}
          </li>
          <li>
            <strong>Skills:</strong> {state.skills}
          </li>
        </ul>

        <ul className="space-y-2 text-lg">
          <li>
            <strong>Salary:</strong>
            {state.salary}
          </li>
          <li>
            <strong> No of Openinngs :</strong>
            {state.openings}
          </li>
          <li>
            <strong> Employement Type :</strong>
            {state.employemnetType}
          </li>
          <li>
            <strong>Interview Mode:</strong>
            {state.InterviewMode}
          </li>
        </ul>

        <div className="mt-6 flex gap-4">
          <button
            className="rounded bg-gray-400 px-6 py-2 text-white"
            onClick={onBack}
          >
            Back
          </button>
          {/* <button
            className="rounded bg-fuchsia-600 px-6 py-2 text-white"
            onClick={onSubmit}
          >
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PostJob_preview;
