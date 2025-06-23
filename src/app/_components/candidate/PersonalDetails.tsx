"use client";

import { useState } from "react";
import { useFormContext } from "~/app/context/CandidateFormContext";

type Props = {
  onNext: () => void;
};

const PersonalDetails = ({ onNext }: Props) => {
  const { state, dispatch } = useFormContext();
  const { name, phone, email, gender, education } = state.personal;

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    education: "",
  });

  const validateForm = () => {
    const newErrors: typeof errors = { name: "", phone: "", email: "", gender: "", education: "" };

    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!education) newErrors.education = "Education is required";

    setErrors(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <p className="text-2xl font-bold">Personal Details</p>

        <div className="mt-6 space-y-6">
          {/* Name */}
          <div>
            <label className="mb-2 block text-xl font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) =>
                dispatch({ type: "SET_PERSONAL", payload: { name: e.target.value } })
              }
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Name"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-xl font-semibold">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) =>
                dispatch({ type: "SET_PERSONAL", payload: { phone: e.target.value } })
              }
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Phone"
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xl font-semibold">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) =>
                dispatch({ type: "SET_PERSONAL", payload: { email: e.target.value } })
              }
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="mb-2 block text-xl font-semibold">Gender</label>
            <select
              value={gender}
              onChange={(e) =>
                dispatch({ type: "SET_PERSONAL", payload: { gender: e.target.value } })
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

          {/* Education */}
          <div>
            <label className="mb-2 block text-xl font-semibold">Education</label>
            <select
              value={education}
              onChange={(e) =>
                dispatch({ type: "SET_PERSONAL", payload: { education: e.target.value } })
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
        </div>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-10">
          <button
            onClick={() => {
              const isValid = validateForm();
              if (isValid) {
                alert("Data saved locally");
              }
            }}
            className="rounded-2xl border border-fuchsia-600 bg-fuchsia-600 px-6 py-2 text-xl font-semibold text-white hover:bg-fuchsia-500"
          >
            Save
          </button>
          <button
            onClick={() => {
              const isValid = validateForm();
              if (isValid) {
                onNext();
              }
            }}
            className="rounded-2xl border border-fuchsia-600 bg-fuchsia-600 px-6 py-2 text-xl font-semibold text-white hover:bg-fuchsia-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
