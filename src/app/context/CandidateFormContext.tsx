"use client";

import React, { createContext, useReducer, useContext } from "react";

type PersonalInfo = {
  name: string;
  phone: string;
  email: string;
  gender: string;
  education: string;
  profileImage? : string;  
};

type EducationalInfo = {
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
  resume?:string;  
  skills? : string[];
};

type FormState = {
  id?: string;
  personal: PersonalInfo;
  education: EducationalInfo;
  experience: ExperienceInfo;
};

const initialState: FormState = {
  personal: { name: "", phone: "", email: "", gender: "", education: "", profileImage: "" },
  education: { degree: "", stream: "", university: "", college: "", score: "" },
  experience: { company: "", role: "", years: "", resume:"", skills:[] },
  id: undefined,
};

type Action =
  | { type: "SET_PERSONAL"; payload: Partial<PersonalInfo> }
  | { type: "SET_EDUCATION"; payload: Partial<EducationalInfo> }
  | { type: "SET_EXPERIENCE"; payload: Partial<ExperienceInfo> }
  | { type: "SET_ID"; payload: string }
  | { type: "RESET_PERSONAL" };

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_PERSONAL":
      return {
        ...state,
        personal: { ...state.personal, ...action.payload },
      };

    case "SET_EDUCATION":
      return {
        ...state,
        education: { ...state.education, ...action.payload },
      };
    case "SET_EXPERIENCE":
      return {
        ...state,
        experience: { ...state.experience, ...action.payload },
      };
    case "SET_ID":
      return {
        ...state,
        id: action.payload,
      };

    case "RESET_PERSONAL":
      return {
        ...state,
        personal: {
          name: "",
          phone: "",
          email: "",
          gender: "",
          education: "",
          profileImage: "",
        },
      };

    default:
      return state;
  }
}

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
