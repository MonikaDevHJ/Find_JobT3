import React from "react";

type Props = {
    onNext: () => void;
    onBack: () => void;
};

const CompanyDeatils = ({ onNext, onBack }: Props) => {
    return (
        <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
            <div className="mx-auto max-w-3xl space-y-6 rounded-xl bg-gray-100 p-6 sm:p-10 md:p-16">
                <div className="">
                    <div>
                        <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
                            Company Details
                        </p>
                    </div>

                    {/* Input box */}
                    <div className="space-y-6 mt-6">

                        <div className="">
                            <label className="">Comapny Name</label>
                            <input
                                type="text"
                                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                                placeholder="Enter your Company Name"
                            />
                        </div>

                        <div className="">
                            <label className="">Comapny ID</label>
                            <input type="text" className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                                placeholder="Enter Compny ID" />

                        </div>

                        <div className="">
                            <label className="">Company Contact Number</label>
                            <input type="text" className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                                placeholder="Company Contact Number" />

                        </div>


                        <div className="">
                            <label className="">Compnay Loactiom</label>
                            <input type="text" className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                                placeholder="Bengalore Karnataka" />


                        </div>
                    </div>


                    {/* Buttons */}

                    <div>
                        <div className="flex gap-10  justify-center items-center mt-14 ">
                            <div className="">
                                <button className="w-full sm:w-auto rounded-xl bg-fuchsia-600 text-white py-2 px-6 text-lg font-semibold">
                                    Save
                                </button>
                            </div>
                            <div>
                                <button className="w-full sm:w-auto rounded-xl bg-fuchsia-600 text-white py-2 px-6 text-lg font-semibold">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDeatils;
