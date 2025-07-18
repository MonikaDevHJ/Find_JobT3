"use client"

import { useState } from "react";
import CompanyDeatils from "../_components/employer/CompanyDeatils";
import EmployerDeatils from "../_components/employer/EmployerDeatils";
import Preview from "../_components/candidate/Preview";




export default function EmployerPage() {
  const [step, setStep] = useState("1")
 
 
  return (
    <div className="min-h-screen bg-gray-200">
     
      <div className="flex items-center justify-center px-4 pt-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        <p
          className="text-fuchsia-700"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Candidate Form
        </p>
      </div>
    
      <div>

      </div>


    </div>
  );
}
