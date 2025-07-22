import React, { useState } from "react";
import { useEmployerFormContext } from "~/app/context/EmployerFormContext";

type Props = {
  onNext: () => void;
};

const EmployerDeatils = ({ onNext }: Props) => {
  const { state, dispatch } = useEmployerFormContext();

  const [errors, setErrors] = useState({
    employerName: "",
    companyName: "",
    EmployerId: "",
    ContactNumber: "",
    Designation: "",
  });

  const validateForm = () => {
  const { employerName, companyName, employerId, contactNumber, designation } =
    state.employer;

  const newErrors = {
    employerName: "",
    companyName: "",
    EmployerId: "",
    ContactNumber: "",
    Designation: "",
    CompanyName: "",
  };

  if (!employerName.trim()) {
    newErrors.employerName = "Employer Name is required";
  }
  if (!companyName.trim()) {
    newErrors.companyName = "Company Name is required";
  }
  if (!employerId.trim()) {
    newErrors.EmployerId = "Employer ID is required";
  }
  if (!contactNumber.trim()) {
    newErrors.ContactNumber = "Contact Number is required";
  }
  if (!designation.trim()) {
    newErrors.Designation = "Designation is required";
  }

  setErrors(newErrors);
  return Object.values(newErrors).every((val) => val === "");
};




  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <div className="space-y-6">
          <div className="">
            <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
              Employer Details
            </p>
          </div>

          <div>
            <label className="">Employer Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Name"
              onChange={(e) =>
                dispatch({
                  type: "SET_EMPLOYER",
                  payload: { employerName: e.target.value },
                })
              }
            />
            {errors.employerName && (
              <p className="text-sm text-red-500">{errors.employerName}</p>
            )}
          </div>

          <div>
            <label className="">Company Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Company Name"
              onChange={(e) => {
                dispatch({
                  type: "SET_EMPLOYER",
                  payload: { companyName: e.target.value },
                });
              }}
            />
            {errors.companyName && (
              <p className="text-sm text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label className="">Employer ID</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Employer ID"
              onChange={(e) => {
                dispatch({
                  type: "SET_EMPLOYER",
                  payload: { employerId: e.target.value },
                });
              }}
            />
            {errors.EmployerId && (
              <p className="text-sm text-red-500">{errors.EmployerId}</p>
            )}
          </div>

          <div>
            <label className="">Contact Number</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter your Office Number"
              onChange={(e) => {
                dispatch({
                  type: "SET_EMPLOYER",
                  payload: { contactNumber: e.target.value },
                });
              }}
            />
            {errors.ContactNumber && (
              <p className="text-sm text-red-500">{errors.ContactNumber}</p>
            )}
          </div>

          <div>
            <label className="">Designation</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter your Designation"
              onChange={(e) => {
                dispatch({
                  type: "SET_EMPLOYER",
                  payload: { designation: e.target.value },
                });
              }}
            />
            {errors.Designation && (
              <p className="text-sm text-red-500">{errors.Designation}</p>
            )}
          </div>


        </div>

        <div className="">
          <div className="mt-14 flex items-center justify-center gap-10">
            <div className="">
              <button className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto">
                Save
              </button>
            </div>

            <div className="">
              <button
                onClick={() => {
                  if (validateForm()) {
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
  );
};

export default EmployerDeatils;
