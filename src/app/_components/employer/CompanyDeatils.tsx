import React, { useState } from "react";
import { useEmployerFormContext } from "~/app/context/EmployerFormContext";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const CompanyDeatils = ({ onNext, onBack }: Props) => {
  const { state, dispatch } = useEmployerFormContext();

  const [error, setError] = useState({
    companyName: "",
    contactNumber: "",
    designation: "",
    companyLocation: "",
    CompanyID: "",
  });

  const ValidateForm = () => {
    const {
      companyName,
      CompanyID,
      contactNumber,
      designation,
      companyLocation,
    } = state.company;

    const newErrors = {
      companyName: "",
      employerId: "",
      contactNumber: "",
      designation: "",
      companyLocation: "",
      CompanyID: "",
    };

    if (!companyName.trim()) {
      newErrors.companyName = "Company Name is Required";
    }
    if (!CompanyID.trim()) {
      newErrors.CompanyID = "Employer ID is Required";
    }
    if (!contactNumber.trim()) {
      newErrors.contactNumber = "Company Contact Number is Required";
    }
    if (!designation.trim()) {
      newErrors.designation = "Designation is Required";
    }
    if (!companyLocation.trim()) {
      newErrors.companyLocation = "Company Location is Required";
    }

    setError(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <div className="">
          <div className="">
            <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
              Company Details
            </p>
          </div>

          {/* Input box */}
          <div className="mt-6 space-y-6">
            <div className="">
              <label className="">Comapny Name</label>
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="Enter your Company Name"
                onChange={(e) => {
                  dispatch({
                    type: "SET_COMPANY",
                    payload: { companyName: e.target.value },
                  });
                }}
              />
              {error.companyName && (
                <p className="text-sm text-red-500">{error.companyName}</p>
              )}
            </div>

            <div className="">
              <label className="">Comapny ID</label>
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="Enter Compny ID"
                onChange={(e) => {
                  dispatch({
                    type: "SET_COMPANY",
                    payload: { CompanyID: e.target.value },
                  });
                }}
              />
              {error.CompanyID && (
                <p className="text-sm text-red-500">{error.CompanyID}</p>
              )}
            </div>

            <div className="">
              <label className="">Company Contact Number</label>
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="Company Contact Number"
                onChange={(e) => {
                  dispatch({
                    type: "SET_COMPANY",
                    payload: { contactNumber: e.target.value },
                  });
                }}
              />
              {error.contactNumber && (
                <p className="text-sm text-red-500">{error.contactNumber} </p>
              )}
            </div>

            <div className="">
              <label className="">Compnay Loaction</label>
              <input
                type="text"
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                placeholder="Bengalore Karnataka"
                onChange={(e) => {
                  dispatch({
                    type: "SET_COMPANY",
                    payload: { companyLocation: e.target.value },
                  });
                }}
              />
              {error.companyLocation && (
                <p className="text-sm text-red-500">{error.companyLocation}</p>
              )}
            </div>
          </div>

          {/* Buttons */}

          <div>
            <div className="mt-14 flex items-center justify-center gap-10">
              <div className="">
                <button
                  onClick={() => onBack()}
                  className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
                >
                  Back
                </button>
              </div>
              <div className="">
                <button className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
                  Save
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    if (ValidateForm()) {
                      onNext();
                    }
                  }}
                  className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDeatils;
