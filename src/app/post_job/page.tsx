// EmployerProfile.tsx
"use client";
import React, { useState } from "react";
import JobDetails from "../_components/post_job/JobDetails";
import PostJob_preview from "../_components/post_job/PostJob_preview";
import JD2 from "../_components/post_job/JD";
import { JobFormProvider } from "../context/JobFormContext";

export default function PostJob() {
  // all fields in one object

  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <JobFormProvider>
        {step === 1 && <JobDetails onNext={() => setStep(2)} />}

        {step === 2 && (
          <JD2 onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && <PostJob_preview onBack={() => setStep(2)}  />}
      </JobFormProvider>
    </div>
  );
}
