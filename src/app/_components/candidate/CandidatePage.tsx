"use client";

import { useEffect, useState } from "react";
import PersonalDetails from "../candidate/PersonalDetails";
import EducationDetails from "../candidate/EducationDetails";
import Experience from "../candidate/Experience";
import Preview from "../candidate/CandidatePreview";
import { useRouter, useSearchParams } from "next/navigation";

export default function CandidatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stepFromUrl = parseInt(searchParams.get("step") || "1", 10);
  const [step, setStep] = useState(stepFromUrl);

  useEffect(() => {
    setStep(stepFromUrl);
  }, [stepFromUrl]);

  const goToStep = (stepNumber: number) => {
    setStep(stepNumber);
    router.push(`?step=${stepNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex items-center justify-center px-4 pt-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        <p
          className="text-fuchsia-700"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Candidate Form
        </p>
      </div>

      <div className="mt-10 px-4 sm:px-10 md:px-24">
        {step === 1 && <PersonalDetails onNext={() => goToStep(2)} />}
        {step === 2 && <EducationDetails onNext={() => goToStep(3)} onBack={() => goToStep(1)} />}
        {step === 3 && <Experience onNext={() => goToStep(4)} onBack={() => goToStep(2)} />}
        {step === 4 && <Preview onBack={() => goToStep(3)} goToStep={goToStep} />}
      </div>
    </div>
  );
}
