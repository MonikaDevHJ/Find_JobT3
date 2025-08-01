// app/find_job/NavbarForFindJob.tsx
"use client";

import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Install if not already

export default function NavbarForFindJob() {
  return (
    <nav className="bg-white shadow-2xl w-full border-2 border-fuchsia-500 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo or Title */}
        <div className="text-3xl font-bold text-fuchsia-600">Find_Job</div>

        {/* Right: Profile Icon */}
        <div className="cursor-pointer">
          <UserCircleIcon className="h-13 w-13 text-fuchsia-600 sm:h-10 sm:w-10" />
        </div>
      </div>
    </nav>
  );
}
