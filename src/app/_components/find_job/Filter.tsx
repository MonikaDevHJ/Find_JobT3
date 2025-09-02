import React from "react";

const Filter = () => {
  return (
    <div>
      <div className="w-full rounded-2xl border bg-white p-5 shadow-2xl">
        <div className="">
          <p className="text-xl font-semibold">Aplly Filters</p>
        </div>
        {/* Eduaction filters */}
        <div className="mt-10 text-start">
          <div>
            <p className="font-medium text-black">Education</p>
          </div>
          <div className="mt-2">
            <div className="flex gap-3">
              <input type="checkbox" />{" "}
              <p className="text-gray-900"> Under Graduation</p>
            </div>

             <div className="flex gap-3">
              <input type="checkbox" />{" "}
              <p className="text-gray-900"> Post Graduation</p>
            </div>
             <div className="flex gap-3">
              <input type="checkbox" />{" "}
              <p className="text-gray-900"> 10Th</p>
            </div>
             <div className="flex gap-3">
              <input type="checkbox" />{" "}
              <p className="text-gray-900"> 12Th</p>
            </div>
             <div className="flex gap-3">
              <input type="checkbox" />{" "}
              <p className="text-gray-900"> Diploma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
