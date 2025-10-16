"use client";
import React, { createContext, useReducer, useContext } from "react";

/* 
1️⃣ State Shape 
This defines the structure of our form’s data.
*/
interface JobFormState {
  companyName: string;
  designation: string;
  experience: string;
  location: string;
  eligibility: string;
  skills: string;
  salary: string;
  openings: string;
  employemnetType: string;
  InterviewMode: string;
  WorkMode: string;
  companyLogo: string;
}

/* 2️⃣ Initial values */
const initialState: JobFormState = {
  companyName: "",
  designation: "",
  experience: "",
  location: "",
  eligibility: "",
  skills: "",
  salary: "",
  openings: "",
  employemnetType: "",
  InterviewMode: "",
  WorkMode: "",
  companyLogo: "",
};

/* 3️⃣ Action types */
type JobFormAction = {
  type: "UPDATE_FIELD";
  field: keyof JobFormState;
  value: string;
};

/* 4️⃣ Reducer */
function jobFormReducer(
  state: JobFormState,
  action: JobFormAction
): JobFormState {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

/* 5️⃣ Context shape */
interface JobFormContextValue {
  state: JobFormState;
  dispatch: React.Dispatch<JobFormAction>;
}

/* 6️⃣ Create the Context */
const JobFormContext = createContext<JobFormContextValue | undefined>(
  undefined
);

/* 7️⃣ Provider */
export const JobFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(jobFormReducer, initialState);
  return (
    <JobFormContext.Provider value={{ state, dispatch }}>
      {children}
    </JobFormContext.Provider>
  );
};

/* 8️⃣ Custom hook */
export function useJobForm() {
  const ctx = useContext(JobFormContext);
  if (!ctx) {
    throw new Error("useJobForm must be used inside JobFormProvider");
  }
  return ctx;
}
