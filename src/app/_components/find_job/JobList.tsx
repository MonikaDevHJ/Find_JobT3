import React from "react";

const JobList = () => {

  const Card = [
    "Infosys",
    "EY",
    "Wipro",
    "TCS",
    "JoboxHire",
    
  ]



  return (
    <div className="">

      {
        Card.map((comapnyName , index) => (
          <div className="mt-5 rounded-2xl border border-gray-300 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between">
              {/* Left: Company Name + Job Title */}
              <div className="flex flex-col">
                <p className="text-start font-semibold text-gray-800">Infosys</p>

                <p className="text-gray-600">Software Developer</p>
              </div>

              {/* Right: Company Logo */}
              <div>
                <img
                  src="/logo.png" // replace with your logo url
                  alt="Company Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
            </div>
          </div>


        ), [])
      }

      <div className="mt-5 rounded-2xl border border-gray-300 bg-white p-4 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Left: Company Name + Job Title */}
          <div className="flex flex-col">
            <p className="text-start font-semibold text-gray-800">Infosys</p>

            <p className="text-gray-600">Software Developer</p>
          </div>

          {/* Right: Company Logo */}
          <div>
            <img
              src="/logo.png" // replace with your logo url
              alt="Company Logo"
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>
      </div>


      <div className="mt-5 rounded-2xl border border-gray-300 bg-white p-4 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Left: Company Name + Job Title */}
          <div className="flex flex-col">
            <p className="text-start font-semibold text-gray-800">Infosys</p>

            <p className="text-gray-600">Software Developer</p>
          </div>

          {/* Right: Company Logo */}
          <div>
            <img
              src="/logo.png" // replace with your logo url
              alt="Company Logo"
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>
      </div>




    </div>
  );
};

export default JobList;
