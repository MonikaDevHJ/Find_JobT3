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
    return Object.values(newErrors).every((val) => val === " ");
  };

  const { name, phone, email, gender, education } = state.personal;
  return (
    <div className=" p-20  ">
      <div className="border p-20 space-y-8 bg-gray-100">
        <div className="">
          <p className="font-semibold text-2xl ">Personal  Details</p>
        </div>
      <div className=" ">
        <div>
          <label className="mb-2 block text-xl font-semibold">Name</label>
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
      </div>

      <div>
        <label className="mb-2 block text-xl font-semibold">Phone</label>
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
      <div>
        <label className="mb-2 block text-xl font-semibold">Email</label>
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

      <div>
        <label className="mb-2 block text-xl font-semibold">Gender</label>
        <select
          name=""
          id=""
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

      <div>
        <label className="mb-2 block text-xl font-semibold">Education</label>
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

      <div className="mt-20 flex justify-center gap-10">
        <div className="">
          <button
            onClick={() => {
              if (validateForm()) {
                localStorage.setItem(
                  "PersonalDetail",
                  JSON.stringify(state.personal),
                );
                alert("Personal Details Saved Succefully in Local");
              }
            }}
            className="rounded-2xl border bg-fuchsia-500 p-2 text-3xl"
          >
            Save
          </button>
        </div>
        <div className="">
          <button
            onClick={() => {
              if (validateForm()) {
                onNext(); //this will move to the eduactionaleDetails
              }
            }}
            className="rounded-2xl border bg-fuchsia-500 p-2 text-3xl"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PersonalDetails;
