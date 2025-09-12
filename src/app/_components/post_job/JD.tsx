import React from "react";

interface JD {
  values: {
    salary: string;
    openings: string;
    employemnetType: string;
    InterviewMode: string;
  };
  onNext: () => void;
  onBack: () => void;
  onChange: (data: any) => void;
}

const JD2: React.FC<JD> = ({ values, onChange, onNext, onBack }) => {
  // help for Input
  const handleChange = (field: string, value: string) => {
    onChange({ ...values, [field]: value });
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className='md:p-16"> mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10'>
        <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
          Post A Job Here{" "}
        </p>

        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">Salary</p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="5 Lakh to 10 Lakh"
            value={values.salary}
            onChange={(e)=>handleChange("salary", e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">
            No of Openinngs
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="5 Position"
            value={values.openings}
            onChange={(e)=>handleChange("openings", e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">
            Employement Type
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Full Time"
            value={values.employemnetType}
            onChange={(e)=>handleChange("employemnetType", e.target.value)}
          />
        </div>

        <div>
          <p className="mb-2 text-base font-semibold sm:text-lg">
            Interview Mode
          </p>
          <input
            type="text"
            className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            placeholder="Online/ Offline"
            value={values.InterviewMode}
            onChange={(e)=>handleChange("InterviewMode", e.target.value)}
          />
        </div>

        <div className="flex justify-center gap-10 text-center">
          <div className="">
            <button
              onClick={onBack}
              className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
            >
              Previous
            </button>
          </div>
          <div className="">
            <button
              onClick={onNext}
              className="w-full rounded-xl bg-fuchsia-600 px-6 py-2 text-lg font-semibold text-white sm:w-auto"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JD2;
