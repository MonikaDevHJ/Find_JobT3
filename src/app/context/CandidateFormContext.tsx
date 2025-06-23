"use client";

import React, { createContext, useReducer, useContext } from "react";

// Types
type PersonalInfo = {
  name: string;
  phone: string;
  email: string;
  gender: string;
  education: string;
};

type EducationInfo = {
  degree: string;
  stream: string;
  university: string;
  college: string;
  score: string;
};

type ExperienceInfo = {
  company: string;
  role: string;
  years: string;
};

type FormState = {
  personal: PersonalInfo;
  education: EducationInfo;
  experience: ExperienceInfo;
};

// Initial State
const initialState: FormState = {
  personal: { name: "", phone: "", email: "", gender: "", education: "" },
  education: { degree: "", stream: "", university: "", college: "", score: "" },
  experience: { company: "", role: "", years: "" },
};

// Actions
type Action =
  | { type: "SET_PERSONAL"; payload: Partial<PersonalInfo> }
  | { type: "SET_EDUCATION"; payload: Partial<EducationInfo> }
  | { type: "SET_EXPERIENCE"; payload: Partial<ExperienceInfo> };

// Reducer
function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_PERSONAL":
      return { ...state, personal: { ...state.personal, ...action.payload } };
    case "SET_EDUCATION":
      return { ...state, education: { ...state.education, ...action.payload } };
    case "SET_EXPERIENCE":
      return { ...state, experience: { ...state.experience, ...action.payload } };
    default:
      return state;
  }
}

// Context Setup
const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
