"use client";

import React, { useEffect, useRef, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function NavbarForFindJob() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownref = useRef(null);
  const router = useRouter();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownref.current &&
        !(dropdownref.current as any).contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full rounded-2xl border-2 border-fuchsia-500 bg-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left: Logo or Title */}
        <div className="text-3xl font-bold text-fuchsia-600">Find_Job</div>

        {/* Right: Profile Icon + DropDown */}
        <div className="relative cursor-pointer">
          <div onClick={() => setIsOpen(!isOpen)}>
            <UserCircleIcon className="h-13 w-13 text-fuchsia-600 sm:h-10 sm:w-10 lg:h-13 lg:w-13" />
             <span className="text-fuchsia-700 font-medium hidden sm:inline">My Profile</span>
          </div>

          {isOpen && (
            <div
              className="absolute right-0 z-50 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg"
              ref={dropdownref}
            >
              <ul className="flex flex-col py-2">
                <li className="cursor-pointer px-4 py-2 hover:bg-fuchsia-100"
                onClick={()=>router.push("/find_job/profile")}
                >
                  👤 View Profile
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-fuchsia-100">
                  ⚙️ Settings
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-fuchsia-100">
                  🚪 Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
