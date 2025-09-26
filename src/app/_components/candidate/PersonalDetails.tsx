"use client";

import { read } from "fs";
import { useState, useEffect } from "react";

import { useFormContext } from "~/app/context/CandidateFormContext";

type Props = {
  onNext: () => void;
};

const PersonalDetails = ({ onNext }: Props) => {
  const { state, dispatch } = useFormContext();
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    education: "",
  });

  useEffect(() => {
    // Step 1: Get data from localStorage
    const saveData = localStorage.getItem("PersonalDetails");

    // Step 2: If data exists
    if (saveData) {
      // Step 3: Convert string back to object
      const Personal = JSON.parse(saveData);

      // Step 4: Update form state
      dispatch({ type: "SET_PERSONAL", payload: Personal });
    }
    // Step 5: [] means run this only once on component mountsss
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      gender: "",
      education: "",
    };
    if (!name.trim()) {
      newErrors.name = "Email is required";
    }
    if (!phone.trim()) {
      newErrors.phone = "Contact Number is require";
    }
    if (!email.trim()) {
      newErrors.email = "email is required";
    }
    if (!gender.trim()) {
      newErrors.gender = "gender is required";
    }
    if (!education.trim()) {
      newErrors.education = "Education is required";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  const { name, phone, email, gender, education } = state.personal;
  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
        <div>
          <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
            Personal Details
          </p>
        </div>

        {/* Profile Photot Uplode */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            {" "}
            Profile Photo
          </label>
          <input type="file"  accept="image/*" onChange={(e)=>{
            const file = e.target.files?.[0];
            if(file){
              const reader = new FileReader();
              reader.onloadend = () =>{
                dispatch ({
                  type : "RESET_PERSONAL",
                  payload : {profileImage: reader.result as string},
                });

              };
              reader.readAsDataURL(file)
            }
          }}
          className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          />
       {/* Preview */}
       {state.personal.profileImage && (
        <div className="mt-4">
          <img src={state.personal.profileImage} alt="Profile preview" className="h-24 w-24 rounded-full object-cover border" />

        </div>
       )}

        </div>

        {/* Name Field */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) =>
              dispatch({
                type: "SET_PERSONAL",
                payload: { name: e.target.value },
              })
            }
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Phone
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) =>
              dispatch({
                type: "SET_PERSONAL",
                payload: { phone: e.target.value },
              })
            }
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Phone"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) =>
              dispatch({
                type: "SET_PERSONAL",
                payload: { email: e.target.value },
              })
            }
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Gender Field */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) =>
              dispatch({
                type: "SET_PERSONAL",
                payload: { gender: e.target.value },
              })
            }
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender}</p>
          )}
        </div>

        {/* Education Field */}
        <div>
          <label className="mb-2 block text-base font-semibold sm:text-lg">
            Education
          </label>
          <select
            value={education}
            onChange={(e) =>
              dispatch({
                type: "SET_PERSONAL",
                payload: { education: e.target.value },
              })
            }
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          >
            <option value="">Select Education</option>
            <option value="10Th">10th</option>
            <option value="12Th">12th</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="Others">Others</option>
          </select>
          {errors.education && (
            <p className="text-sm text-red-500">{errors.education}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-between">
          <button
            onClick={() => {
              if (validateForm()) {
                localStorage.setItem(
                  "PersonalDetails",
                  JSON.stringify(state.personal),
                );
                alert("Personal Details Saved Successfully in Local");
              }
            }}
            className="w-full rounded-xl bg-fuchsia-500 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
          >
            Save
          </button>
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
  );
};

export default PersonalDetails;
