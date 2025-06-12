"use client";

import PersonalDetails from "../_components/candidate/PersonalDetails";
import EducationDetails from "../_components/candidate/EducationDetails";
import Experience from "../_components/candidate/Experience";
import Preview from "../_components/candidate/Preview";
  import { useReducer, useState } from "react";

// ✅ Step 1: Define form data type
type FormData = {
  name: string;
  phone: string;
  email: string;
  gender: string;
  education: string;
};

// ✅ Step 2: Define action type
type Action = {
  type: "SET_PERSONAL_DETAILS";
  payload: Partial<FormData>;
};

// ✅ Step 3: Initial form state
const initialState: FormData = {
  name: "",
  phone: "",
  email: "",
  gender: "",
  education: "",
};

// ✅ Step 4: Reducer function
function formReducer(state: FormData, action: Action): FormData {
  switch (action.type) {
    case "SET_PERSONAL_DETAILS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function CandidatePage() {
  const [step, setStep] = useState(1);
  const [formState, dispatch] = useReducer(formReducer, initialState);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Title */}
      <div className="flex items-center justify-center px-4 pt-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        <p
          className="text-fuchsia-700"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Candidate Form
        </p>
      </div>

      {/* Step Components */}
      <div className="mt-10 px-4 sm:px-10 md:px-24">
        {step === 1 && (
          <PersonalDetails
            onNext={() => setStep(2)}
            formState={formState}
            dispatch={dispatch}
          />
        )}
        {step === 2 && (
          <EducationDetails
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Experience
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && <Preview onBack={() => setStep(3)} />}
      </div>
    </div>
  );
}
