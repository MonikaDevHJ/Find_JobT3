import React from "react";

type Props = {
    onBack: () => void;
    goToStep: (step: number) => void;
};

const EmployerPreview = ({ onBack }: Props) => {
    return (
        <div className="mt-10 px-4 sm:px-10 md:px-24">
            <div className=" rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
                <div className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
                    <p className="">Employer Preview </p>
                </div>
                 
                 {/* card */}
                <div className=" ">
                     
                     
                     {/* Employer Details */}
                    <div className="rounded-4xl bg-gray-200 p-5 shadow-xl ">

                       <div className="flex ">
                        <div className="mb-2 text-xl font-semibold">
                             <p> 👤Employer Information</p>
                        </div>
                        <div className="text-sm text-blue-600 underline hover:text-blue-800">
                             ✏️Edit
                        </div>
                       </div>

                     
                       <div>

                       </div>
                    </div>

                    {/* Compnay Details */}

                    <div className="">

                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmployerPreview;
