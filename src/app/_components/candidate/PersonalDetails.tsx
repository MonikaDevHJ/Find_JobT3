"use client";

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
      <div className="bg-gray-100 rounded-xl p-6 sm:p-10 md:p-16 max-w-3xl mx-auto space-y-6">
        <div>
          <p className="text-xl sm:text-2xl font-semibold text-center sm:text-left">Personal Details</p>
        </div>

        {/* Name Field */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">Name</label>
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
          <label className="mb-2 block text-base sm:text-lg font-semibold">Phone</label>
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
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">Email</label>
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
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Gender Field */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">Gender</label>
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
          {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
        </div>

        {/* Education Field */}
        <div>
          <label className="mb-2 block text-base sm:text-lg font-semibold">Education</label>
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
          {errors.education && <p className="text-sm text-red-500">{errors.education}</p>}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 mt-8">
          <button
            onClick={() => {
              if (validateForm()) {
                localStorage.setItem(
                  "PersonalDetails",
                  JSON.stringify(state.personal)
                );
                alert("Personal Details Saved Successfully in Local");
              }
            }}
            className="w-full sm:w-auto rounded-xl bg-fuchsia-500 text-white py-2 px-6 text-lg font-semibold"
          >
            Save
          </button>
          <button
            onClick={() => {
              if (validateForm()) {
                onNext();
              }
            }}
            className="w-full sm:w-auto rounded-xl bg-fuchsia-600 text-white py-2 px-6 text-lg font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </div>

  );
};

export default PersonalDetails;
