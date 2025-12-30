"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "FindJobs", path: "/find_job" },
    { name: "PostJob", path: "/post_job" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="z-auto w-full rounded-4xl border-[2px] border-fuchsia-500 bg-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/">
          <div className="text-4xl font-bold text-fuchsia-700">FindJob</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-xl font-semibold text-fuchsia-700 hover:text-fuchsia-700"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-white px-4 pb-4 shadow-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
