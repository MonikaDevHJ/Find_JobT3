"use client";

import { useState } from "react";

import { useFormContext } from "~/app/context/CandidateFormContext";


type Props = {
  onNext: () => void;
}

const PersonalDetails = ({ onNext }: Props) => {
  const { state, dispatch } = useFormContext();
  const [errors, setErrors] = useState({ name: "", phone: "", email: "", gender: "", education: "" })

  const { name, phone, email, gender, education } = state.personal;
  return (
    <div>
      <div>
        <label className="mb-2 block text-xl font-semibold">Name</label>
        <input type="text"
          value={name}
          onChange={(e) =>
            dispatch({ type: "SET_PERSONAL", payload: { name: e.target.value } })
          }
          className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          placeholder="Enter Your Name"
        />
        {errors.name && <p className="text-sm text-red-500"></p>}
      </div>

      <div>
        <label className="mb-2 block text-xl font-semibold">Phone</label>
        <input type="text"
          value={phone}
          onChange={(e) =>
            dispatch({ type: "SET_PERSONAL", payload: { phone: e.target.value } })
          }
          className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          placeholder="Enter Your Phone"
        />
        {errors.phone && <p className="text-sm text-red-500"></p>}
      </div>
      <div>
        <label className="mb-2 block text-xl font-semibold">Email</label>
        <input type="text"
          value={email}
          onChange={(e) =>
            dispatch({ type: "SET_PERSONAL", payload: { email: e.target.value } })
          }
          className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          placeholder="Enter Your Email"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>


      <div>
        <label className="mb-2 block text-xl font-semibold">Gender</label>
        <select name="" id="" value={gender} onChange={(e) =>
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
        {errors.education && (
          <p className="text-sm text-red-500">{errors.education}</p>
        )}
      </div>

    </div>
  )
}

export default PersonalDetails;