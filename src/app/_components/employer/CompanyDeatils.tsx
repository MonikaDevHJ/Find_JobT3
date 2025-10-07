"use client";
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
      CompanyID: "",
      contactNumber: "",
      designation: "",
      companyLocation: "",
    };

    if (!companyName.trim()) newErrors.companyName = "Company Name is Required";
    if (!CompanyID.trim()) newErrors.CompanyID = "Company ID is Required";
    if (!contactNumber.trim())
      newErrors.contactNumber = "Contact Number is Required";
    if (!companyLocation.trim())
      newErrors.companyLocation = "Location is Required";

    setError(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  const handleSave = () => {
    if (ValidateForm()) {
      alert("Data saved successfully ✅");
      // You can later call an API or move to preview step here.
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
          Company Details
        </p>

        <div className="mt-6 space-y-6">
          {/* Company Logo */}
          <div>
            <label className="mb-2 block text-base font-semibold sm:text-lg">
              {" "}
              Company Logo
            </label>
            <input
              type="file"
              accept="image/"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    dispatch({
                      type: "SET_COMPANY",
                      payload: { companyLogo: reader.result as string },
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            />
            {/* Preview Image */}
            {state.company.companyLogo && (
              <div className="mt-4">
                <img
                  src={state.company.companyLogo}
                  alt="Profile preview"
                  className="h-24 w-24 rounded-full border object-cover"
                />
              </div>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label>Company Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter your Company Name"
              value={state.company.companyName}
              onChange={(e) =>
                dispatch({
                  type: "SET_COMPANY",
                  payload: { companyName: e.target.value },
                })
              }
            />
            {error.companyName && (
              <p className="text-sm text-red-500">{error.companyName}</p>
            )}
          </div>

          {/* Company ID */}
          <div>
            <label>Company ID</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Company ID"
              value={state.company.CompanyID}
              onChange={(e) =>
                dispatch({
                  type: "SET_COMPANY",
                  payload: { CompanyID: e.target.value },
                })
              }
            />
            {error.CompanyID && (
              <p className="text-sm text-red-500">{error.CompanyID}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label> Company Contact Number</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Company Contact Number"
              value={state.company.contactNumber}
              onChange={(e) =>
                dispatch({
                  type: "SET_COMPANY",
                  payload: { contactNumber: e.target.value },
                })
              }
            />
            {error.contactNumber && (
              <p className="text-sm text-red-500">{error.contactNumber}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label>Company Location</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Bangalore, Karnataka"
              value={state.company.companyLocation}
              onChange={(e) =>
                dispatch({
                  type: "SET_COMPANY",
                  payload: { companyLocation: e.target.value },
                })
              }
            />
            {error.companyLocation && (
              <p className="text-sm text-red-500">{error.companyLocation}</p>
            )}
          </div>

          {/* ✅ Add this inside your form */}
          <div>
            <label>Company Website</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="https://example.com"
              value={state.company.companyWebsite}
              onChange={(e) =>
                dispatch({
                  type: "SET_COMPANY",
                  payload: { companyWebsite: e.target.value },
                })
              }
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-14 flex items-center justify-center gap-10">
          <button
            onClick={onBack}
            className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
          >
            Back
          </button>
          <button
            onClick={handleSave}
            className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
          >
            Save
          </button>
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
  );
};

export default CompanyDeatils;
