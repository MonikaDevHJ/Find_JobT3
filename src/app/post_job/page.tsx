// EmployerProfile.tsx
"use client";
import React, { useState } from "react";
import JobDetails from "../_components/post_job/JobDetails";
import PostJob_preview from "../_components/post_job/PostJob_preview";
import JD2 from "../_components/post_job/JD";

export default function PostJob() {
  // all fields in one object
  const [jobData, setJobData] = useState({
    companyName: "",
    designation: "",
    experience: "",
    location: "",
    eligibility: "",
    skills: "",
    salary: "",
    openings: "",
    employemnetType: "",
    InterviewMode: ""

  });

  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {step === 1 && (
        <JobDetails
          values={jobData}
          onChange={setJobData}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && <JD2
        values={jobData}
        onChange={setJobData}
        onNext={()=>setStep(3)}
        onBack={()=>setStep(1)}
      />}
      {step === 3 && (
        <PostJob_preview
          values={jobData}
          onBack={() => setStep(2)}
          onSubmit={() => console.log("submit to backend", jobData)}
        />
      )}
    </div>
  );
}
