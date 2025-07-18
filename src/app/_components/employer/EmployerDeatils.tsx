import React from "react";

type Props = {
  onNext: () => void;
};

const EmployerDeatils = ({ onNext }: Props) => {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
       
        <div className="">
          <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
            Employer Details
          </p>
        </div>

        <div>
            <label className="">Employer Name</label>
            <input type="text" />
        </div>


      </div>
    </div>
  );
};

export default EmployerDeatils;
