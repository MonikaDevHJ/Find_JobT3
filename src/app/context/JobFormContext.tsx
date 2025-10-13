"use client";
import React, { createContext, useReducer, useContext } from "react";

/* 
1️⃣ State Shape 
This defines the structure of our form’s data.
Each key is one field in the Job form.
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
  WorkingMode : string;
}

/*
2️⃣ Initial values 
This sets all fields to empty strings when the form starts.
*/
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
  WorkingMode : "",
};

/*
3️⃣ Action types 
We want to update one field at a time:
- type: "UPDATE_FIELD" says which action we’re doing
- field: which field to update (only valid keys allowed)
- value: new value for that field
*/
type JobFormAction = {
  type: "UPDATE_FIELD";
  field: keyof JobFormState;
  value: string;
};

/*
4️⃣ Reducer function 
This decides how state changes when an action is dispatched.
state = current form state
action = what we want to do
*/
function jobFormReducer(
  state: JobFormState,
  action: JobFormAction
): JobFormState {
  switch (action.type) {
    case "UPDATE_FIELD":
      // Return a new state object with one field updated
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

/*
5️⃣ Context shape 
We’ll put both the state and the dispatch function into our Context
so any component can use them.
*/
interface JobFormContextValue {
  state: JobFormState;
  dispatch: React.Dispatch<JobFormAction>;
}

/*
6️⃣ Create the Context 
We start as undefined, so we can throw an error if it’s used outside the provider.
*/
const JobFormContext = createContext<JobFormContextValue | undefined>(undefined);

/*
7️⃣ Provider Component 
Wrap your app/pages/components with this so children can access state + dispatch.
*/
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

/*
8️⃣ Custom hook 
Use this hook inside any component to get {state, dispatch} easily.
Example: const { state, dispatch } = useJobForm();
*/
export function useJobForm() {
  const ctx = useContext(JobFormContext);
  if (!ctx) {
    throw new Error("useJobForm must be used inside JobFormProvider");
  }
  return ctx;
}
