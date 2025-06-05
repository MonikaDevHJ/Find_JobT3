"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Jobs", path: "/jobs" },
        { name: "Post a Job", path: "/post-job" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-2xl fixed w-full z-auto border-[2px] border-fuchsia-500 rounded-4xl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/">
                    <div className="text-4xl font-bold text-fuchsia-700">FindJob</div>

                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className=" text-xl   font-semibold text-fuchsia-700 hover:text-fuchsia-700">
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
                <div className="md:hidden bg-white shadow-md px-4 pb-4">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="block py-2 text-gray-700 hover:text-blue-600">
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
