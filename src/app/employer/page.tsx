"use client";

import { useState } from "react";
import CompanyDeatils from "../_components/employer/CompanyDeatils";
import EmployerDeatils from "../_components/employer/EmployerDeatils";
import EmployerPreview from "../_components/employer/EmployerPreview";

export default function EmployerPage() {
  const [step, setStep] = useState(3);

  const goToStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex items-center justify-center px-4 pt-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        <p
          className="text-fuchsia-700"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Employer Form
        </p>
      </div>

      <div className="mt-10 px-4 sm:px-10 md:px-24">
        {step === 1 && <EmployerDeatils onNext={() => setStep(2)} />}
        {step === 2 && <CompanyDeatils onNext={() => setStep(3)} onBack={() => setStep} /> }
        {step === 3 && <EmployerPreview onBack={() => setStep} goToStep={goToStep} />}
      </div>  
    </div>
  );
}
