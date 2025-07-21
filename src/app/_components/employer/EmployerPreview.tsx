import React from "react";

type Props = {
    onBack: () => void;
    goToStep: (step: number) => void;
};

const EmployerPreview = ({ onBack }: Props) => {
    return (
        <div className="mt-10 px-4 sm:px-10 md:px-24">
            <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
                <div className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
                    <p className="">Employer Preview </p>
                </div>

                {/* card */}
                <div className=" ">
                    {/* Employer Details */}
                    <div className="rounded-4xl bg-gray-200 p-5 shadow-xl mb-6">
                        <div className="item-center flex justify-between">
                            <p className="mb-2 text-xl font-semibold">
                                👤 Personal Information
                            </p>
                            <button className="text-sm text-blue-600 underline hover:text-blue-800">
                                ✏️Edit
                            </button>
                        </div>

                        <div className="mt-3 ml-8 space-y-1.5 font-bold">
                            <p className="">Employer Name :</p>

                            <p className="">Company Name :</p>

                            <p className="">Employer ID :</p>

                            <p className="">HR Contact Number :</p>

                            <p className="">Designation :</p>
                            <p className="">Company Name :</p>

                            <p></p>
                        </div>
                    </div>

                    {/* Compnay Details */}

                    <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
                        <div className="item-center flex justify-between">
                            <p className="mb-2 text-xl font-semibold">
                                Company Information
                            </p>
                            <button className="text-sm text-blue-600 underline hover:text-blue-800">
                                ✏️Edit
                            </button>
                        </div>

                        <div className="mt-3 ml-8 space-y-1.5 font-bold">
                            <p className="">Comapany Name :</p>

                            <p className="">Comapny ID :</p>

                            <p className="">Company Contact Number :</p>

                            <p className="">HR Contact Number :</p>

                            <p className="">Compnay Loaction :</p>

                            <p></p>
                        </div>
                    </div>


                    {/* Buttons */}

                    <div className="mt-10 flex justify-center gap-12">
                        <div className="rounded-2xl border border-gray-500 bg-white px-6 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100">
                             Back
                        </div>

                        <div className="rounded-2xl border border-green-600 bg-green-600 px-6 py-2 text-xl font-semibold text-white hover:bg-green-500">
                              Submit
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default EmployerPreview;
