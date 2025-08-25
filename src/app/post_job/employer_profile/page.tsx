"use client";
import { useUSer } from "@clerk/nextjs"
import { error } from "console";
import { use, useEffect, useState } from "react";



const EmployerProfilePreview = () => {
  const { user, isLoaded } = useUSer(); //cler Gives you loged In User
  const [employer, setEmployer] = useUSer();  //Store Employer Data
  const [loading, setLoading] = useState(true);   //Loading State


  useEffect(() = {
    if(!isLoaded || !user);
  return;

  const fetchEmployer = async ()=>{
    try{
      const res= await fetch (`/api/employer/${user.id}`)
      if(!res.ok) throw new Error ("Failed to Fetch Employer ")
        const data = await res.json();
      setEmployer(data);
    }catch(err){
      console.log("❌ Error fetching employer:", err)
    }finally{
      setLoading(false);
    }
  };
  fetchEmployer();

}, [isLoaded, User]);

return (
  <div className="mt-10 px-4 sm:px-10 md:px-24">
    <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10 md:p-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-fuchsia-700">
        Employer Profile
      </h2>

      {/* Personal Info */}
      <div className="mb-6">
        <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
          <div className="flex items-center justify-between">
            <p className="mb-2 text-xl font-semibold">
              👤 Employer Information
            </p>
            <button className="text-sm text-blue-600 underline hover:text-blue-800">
              ✏️Edit
            </button>
          </div>
          <div className="mt-3 ml-8 space-y-2">
            <p>
              <strong>Employer Name:</strong>{" "}
            </p>
            <p>
              <strong>Company Name:</strong>{" "}
            </p>
            <p>
              <strong>Employer ID:</strong>{" "}
            </p>
            <p>
              <strong>Contact Number:</strong>{" "}
            </p>
            <p>
              <strong>Designation:</strong>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Education Info */}
      <div className="mb-6">
        <div className="rounded-4xl bg-gray-200 p-5 shadow-xl">
          <div className="flex items-center justify-between">
            <p className="mb-2 text-xl font-semibold"> 🏢 Company Details</p>
            <button className="text-sm text-blue-600 underline hover:text-blue-800">
              ✏️Edit
            </button>
          </div>
          <div className="mt-3 ml-8 space-y-2">
            <p>
              <strong>Company Name:</strong>{" "}
            </p>
            <p>
              <strong>Company ID:</strong>{" "}
            </p>
            <p>
              <strong> Company Contact Number:</strong>{" "}
            </p>
            <p>
              <strong>Company Location:</strong>{" "}
            </p>
            <p>
              <strong>Company Website:</strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default EmployerProfilePreview;
