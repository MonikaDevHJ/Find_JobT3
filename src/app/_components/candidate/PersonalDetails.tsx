"use client";

import { useState } from "react";

import { useFormContext } from "~/app/context/CandidateFormContext";


type Props = {
  onNext: () => void;
}

const PersonalDetails = ({ onNext }: Props) => {
  const { state, dispatch } = useFormContext();
  const [errors, setErrors] = useState({ name: "", phone: "", email: "", gender: "" })

  const { name, phone, email, gender } = state.personal;
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
        {errors.name && <p className="text-sm text-red-500"></p> }
      </div>

      <div>
        <label className="mb-2 block text-xl font-semibold">Phone</label>
        <input type="text"
          value={phone}
          onChange={(e) =>
            dispatch({ type: "SET_PERSONAL", payload: { phone: e.target.value } })
          }
          className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
          placeholder="Enter Your Name"
        />
        {errors.phone && <p className="text-sm text-red-500"></p> }
      </div>

    </div>
  )
}

export default PersonalDetails;