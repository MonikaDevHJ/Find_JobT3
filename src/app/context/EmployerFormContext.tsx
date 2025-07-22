"use client";
import React, { createContext, useContext, useReducer } from "react";

// Define Employer Info structure
type EmployerInfo = {
  employerName: string;
  companyName: string;
  employerId: string;
  contactNumber: string;
  designation: string;
};

type CompanyInfo = {
  companyName: string;
  employerId: string;
  CompanyID: string;
  contactNumber: string;
  designation: string;
  companyLocation : string
};

type EmployerFormState = {
  employer: EmployerInfo;
  company: CompanyInfo;
};

const initialState: EmployerFormState = {
  employer: {
    employerName: "",
    companyName: "",
    employerId: "",
    contactNumber: "",
    designation: "",
  },
  company: {
    companyName: "",
    employerId: "",
    contactNumber: "",
    designation: "",
    CompanyID: "",
    companyLocation: ""
  },
};

type Action =
  | { type: "SET_EMPLOYER"; payload: Partial<EmployerInfo> }
  | { type: "SET_COMPANY"; payload: Partial<CompanyInfo> };

function employerFormReducer(
  state: EmployerFormState,
  action: Action,
): EmployerFormState {
  switch (action.type) {
    case "SET_EMPLOYER":
      return {
        ...state,
        employer: { ...state.employer, ...action.payload },
      };
    case "SET_COMPANY":
      return { ...state, company: { ...state.company, ...action.payload } };
    default:
      return state;
  }
}

const EmployerFormContext = createContext<{
  state: EmployerFormState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => { },
});

export const EmployerFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(employerFormReducer, initialState);
  return (
    <EmployerFormContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployerFormContext.Provider>
  );
};

export const useEmployerFormContext = () => useContext(EmployerFormContext);
