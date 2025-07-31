// app/find_job/NavbarForFindJob.tsx
"use client";

import React from "react";

export default function NavbarForFindJob() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 shadow bg-white">
      <div className="text-xl font-semibold">Find Job</div>
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
        👤
      </div>
    </nav>
  );
}
