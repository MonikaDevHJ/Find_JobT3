import type { Dispatch } from "react";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  gender: string;
  education: string;
};

type Action = {
  type: "SET_PERSONAL_DETAILS";
  payload: Partial<FormData>;
};

type Props = {
  onNext: () => void;
  formState: FormData;
  dispatch: Dispatch<Action>;
};

const PersonalDetails = ({ onNext, formState, dispatch }: Props) => {
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newError: Partial<FormData> = {};
    if (!formState.name.trim()) {
      newError.name = "Name is required";
    }

    if (!formState.phone.trim()) {
      newError.phone = "Phone number is Required";
    } else if (!/^\d{10}$/.test(formState.phone)) {
      newError.phone = "Phone Number must be 10 Digit ";
    }
    if (!formState.email.trim()) {
      newError.email = "Email is Required ";
    }

    if (!formState.gender) {
      newError.gender = "Gender is Required";
    }
    if (!formState.education) {
      newError.education = "Education is Reuqired";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0;
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
              value={formState.name}
              onChange={(e) =>
                dispatch({
                  type: "SET_PERSONAL_DETAILS",
                  payload: { name: e.target.value },
                })
              }
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="mb-2 block text-xl font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              value={formState.phone}
              onChange={(e) =>
                dispatch({
                  type: "SET_PERSONAL_DETAILS",
                  payload: { phone: e.target.value },
                })
              }
              className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
              placeholder="Enter Your Number"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xl font-semibold">Email</label>
            <input
              type="text"
              value={formState.email}
              onChange={(e) =>
                dispatch({
                  type: "SET_PERSONAL_DETAILS",
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

          {/* Gender */}
          <div>
            <label className="mb-2 block text-xl font-semibold">Gender</label>
            <select
              value={formState.gender}
              onChange={(e) =>
                dispatch({
                  type: "SET_PERSONAL_DETAILS",
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

          {/* Education */}
          <div>
            <label className="mb-2 block text-xl font-semibold">
              Education
            </label>
            <select
              value={formState.education}
              onChange={(e) =>
                dispatch({
                  type: "SET_PERSONAL_DETAILS",
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
          </div>
          {errors.education && (
            <p className="text-sm text-red-500">{errors.education}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-10">
          <button
            onClick={() => {
              const isValid = validateForm();
              if (isValid) {
                alert("Data Saved locally");
              }
            }}
            className="rounded-2xl border border-fuchsia-600 bg-fuchsia-600 px-6 py-2 text-xl font-semibold text-white hover:bg-fuchsia-500"
          >
            Save
          </button>
          <button
            
            onClick={()=>{
                const isValid = validateForm();
                if(isValid){
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
