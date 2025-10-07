import React, { use } from "react";
import { useEmployerFormContext } from "~/app/context/EmployerFormContext";
import SuccessModal from "../common/SuccessModal";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  onBack: () => void;
  goToStep: (step: number) => void;
};

const EmployerPreview = ({ onBack, goToStep }: Props) => {
  const { state, dispatch } = useEmployerFormContext();

  const [showSuccess, setShowSuccess] = useState(false);

  const { employer, company } = state;
  const router = useRouter();

  useEffect(() => {
    if (showSuccess) {
      const timeOut = setTimeout(() => {
        router.push("/post_job");
      }, 2000);
      // Cleanup: cancel the timer if the component is removed early
      return () => clearTimeout(timeOut);
    }
  }, [showSuccess]);

  return (
    <div className="mt-10 px-4 sm:px-10 md:px-24">
      <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
        <div className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
          <p className="">Employer Preview </p>
        </div>

        {/* card */}
        <div className=" ">
          {/* Employer Details */}
          <div className="mb-6 rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="item-center flex justify-between">
              <p className="mb-2 text-xl font-semibold">
                👤 Employer Information
              </p>
              <button
                onClick={() => goToStep(1)}
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                ✏️Edit
              </button>
            </div>

            <div className="mt-3 ml-8 space-y-1.5 font-bold">
              {company.companyLogo && (
                <div className="mb-4">
                  <img
                    src={company.companyLogo}
                    alt="profile"
                    className="h-24 w-24 rounded-full border object-cover"
                  />
                </div>
              )}
              <p className="">Employer Name : {employer.employerName} </p>

              <p className="">Company Name :{employer.companyName}</p>

              <p className="">Employer ID :{employer.employerId} </p>

              <p className="">HR Contact Number : {employer.contactNumber} </p>

              <p className="">Designation :{employer.designation} </p>

              <p></p>
            </div>
          </div>

          {/* Compnay Details */}

          <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
            <div className="item-center flex justify-between">
              <p className="mb-2 text-xl font-semibold">Company Information</p>
              <button
                onClick={() => goToStep(2)}
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                ✏️Edit
              </button>
            </div>

            <div className="mt-3 ml-8 space-y-1.5 font-bold">
              <p className="">Comapany Name : {company.companyName} </p>

              <p className="">Comapny ID : {company.CompanyID} </p>

              <p className="">
                Company Contact Number : {company.contactNumber}{" "}
              </p>

              <p className="">Compnay Loaction :{company.companyLocation} </p>
              <p className="">Compnay Website :{company.companyWebsite} </p>

              <p></p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex justify-center gap-12">
            <button
              onClick={() => onBack()}
              className="rounded-2xl border border-gray-500 bg-white px-6 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>

            {showSuccess && (
              <SuccessModal
                message={
                  "Your Employer Acooutn Has Been Created Succesfull! Then Redirect To Post a Job "
                }
              />
            )}

            <div
              onClick={async () => {
                try {
                  const response = await fetch("/api/employer", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      ...state,
                      id: state.id || undefined,
                    }),
                  });

                  // the handle the result
                  const result = await response.json();
                  if (response.ok) {
                    alert("Employer Submited Succefully ");
                    console.log("DB Response:", result);
                    setShowSuccess(true);

                    //  ✅ Save the returned `id` into state so we can update later
                    dispatch({ type: "SET_ID", payload: result.candidate.id });
                  } else {
                    alert("❌ Failed to submit.");
                    console.error(result.error);
                  }
                } catch (err) {
                  console.log("Error:", err);
                  alert("something went wrong");
                }
              }}
              className="rounded-2xl border border-green-600 bg-green-600 px-6 py-2 text-xl font-semibold text-white hover:bg-green-500"
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerPreview;
