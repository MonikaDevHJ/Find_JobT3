// PostJob_preview.tsx
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { useJobForm } from "~/app/context/JobFormContext";

interface PreviewProps {
  onBack: () => void;
}

const PostJob_preview: React.FC<PreviewProps> = ({ onBack, }) => {
  // get form data from You Contex
  const { state, dispatch } = useJobForm()

  // get Logged In Clerk User Info
  const { user } = useUser();


  // Local Loading state for the button
  const [Loading, setLoading] = useState(false)

  // function To Call Your API 
  const handleSubmit = async () => {
    setLoading(true) //Start Spinned /disabledButton
    try {
      const res = await fetch("/api/postjob", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: user?.id, //who is Posting
          ...state, //all your From Field context

        }),

      });
      const data = await res.json();
      if (res.ok) {
        console.log("✅ Job Saved", data)
        alert("Job Posted Succefully ✅!");
        // You Could Navigate Away here 
      } else {
        alert(" ❌  Error:" + data.message)
      }

    } catch (err) {
      console.log(err);
      alert("SomeThing Went Wrong");


    } finally {
      setLoading(false)  ///alway reset loading
    }

  }


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
          <button
            className="rounded bg-fuchsia-600 px-6 py-2 text-white"
            disabled={Loading}
            onClick={handleSubmit}
          >
            {/* {Loading ? "Saving..." : "Submit"} */}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJob_preview;
