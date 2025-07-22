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

type EmployerFormState = {
  employer: EmployerInfo;
};

const initialState: EmployerFormState = {
  employer: {
    employerName: "",
    companyName: "",
    employerId: "",
    contactNumber: "",
    designation: "",
  },
};

type Action = {
  type: "SET_EMPLOYER";
  payload: Partial<EmployerInfo>;
};

function employerFormReducer(state: EmployerFormState, action: Action): EmployerFormState {
  switch (action.type) {
    case "SET_EMPLOYER":
      return {
        ...state,
        employer: { ...state.employer, ...action.payload },
      };
    default:
      return state;
  }
}

const EmployerFormContext = createContext<{
  state: EmployerFormState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const EmployerFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(employerFormReducer, initialState);
  return (
    <EmployerFormContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployerFormContext.Provider>
  );
};

export const useEmployerFormContext = () => useContext(EmployerFormContext);
