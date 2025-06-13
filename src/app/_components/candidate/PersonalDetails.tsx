import type { Dispatch } from "react";

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

type props = {
    onNext: () => void;
    formState: FormData;
    dispatch: Dispatch<Action>;
};
const PersonalDetails = ({ onNext, formState, dispatch }: props) => {
    return (
        <div>
            <div className="mt-10 px-4 sm:px-10 md:px-24">
                <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
                    <div className="">
                        <p className="font-bold text-2xl">Personal Details</p>
                    </div>

                    {/* Add your content or form here */}
                    <div className="mt-6">
                        <div className="">
                            <p className="mb-2 text-xl font-semibold">Name</p>
                            <input
                                value={formState.name}
                                onChange={(e) =>
                                    dispatch({
                                        type: "SET_PERSONAL_DETAILS",
                                        payload: { name: e.target.value },
                                    })
                                }
                                type="text"
                                name=""
                                id=""
                                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        <div className="mt-8">
                            <p className="mb-2 text-xl font-semibold">Phone Number</p>
                            <input
                                type="text"
                                value={formState.phone}
                                onChange={(e) =>
                                    dispatch({ type: "SET_PERSONAL_DETAILS", payload: { phone: e.target.value } })
                                }
                                name=""
                                id=""
                                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                                placeholder="Enter Your Number"
                            />
                        </div>
                        <input
                            type="text"
                            value={formState.email}
                            onChange={(e) =>
                                dispatch({ type: "SET_PERSONAL_DETAILS", payload: { email: e.target.value } })
                            }
                            className="..."
                            placeholder="Enter Your Email"
                        />


                        <select
                            value={formState.gender}
                            onChange={(e) =>
                                dispatch({ type: "SET_PERSONAL_DETAILS", payload: { gender: e.target.value } })
                            }
                            className="..."
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer_not_to_say">Prefer not to say</option>
                        </select>


                        <div className="mt-8">
                            <p className="mb-2 text-xl font-semibold">Education</p>
                            <select
                                name="Education "
                                id="Eduaction"
                                className="w-full border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
                            >
                                <option value="">Select Education</option>
                                <option value="10Th">10 th</option>
                                <option value="12Th">12 th</option>
                                <option value="12Th">Graduation</option>
                                <option value="12Th">Post Graduation</option>
                                <option value="12Th">Others</option>
                            </select>
                        </div>
                    </div>

                    <div className=" flex mt-16 items-center justify-center gap-20">
                        <div className="">
                            <button className="border border-4xl  border-fuchsia-600 bg-fuchsia-600 text-4xl hover:bg-fuchsia-400 rounded-2xl p-0.5 font-semibold">Save</button>
                        </div>
                        <div>
                            <button
                                onClick={onNext}
                                className="border border-4xl border-fuchsia-600 bg-fuchsia-600 text-4xl  hover:bg-fuchsia-400 rounded-2xl p-0.5 font-semibold ">
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
